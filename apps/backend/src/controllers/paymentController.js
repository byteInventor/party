const { v4: uuid } = require('uuid');
const { Payment, Booking } = require('../models');

const createOrder = async (req, res) => {
  const { bookingId, amount, currency = 'INR' } = req.body;

  const booking = await Booking.findByPk(bookingId);
  if (!booking) {
    return res.status(404).json({ message: 'Booking not found' });
  }

  const providerOrderId = `order_${uuid().replace(/-/g, '')}`;

  const payment = await Payment.create({
    bookingId,
    amount: amount || booking.totalPrice,
    currency,
    status: 'created',
    providerOrderId,
    metadata: { simulated: true },
  });

  res.status(201).json({
    provider: 'razorpay',
    orderId: providerOrderId,
    amount: payment.amount,
    currency: payment.currency,
    payment,
  });
};

const confirmPayment = async (req, res) => {
  const { providerOrderId, providerPaymentId, status } = req.body;

  const payment = await Payment.findOne({ where: { providerOrderId } });
  if (!payment) {
    return res.status(404).json({ message: 'Payment not found' });
  }

  await payment.update({
    providerPaymentId,
    status: status || 'captured',
    paymentDate: new Date(),
  });

  if (status === 'captured') {
    const booking = await Booking.findByPk(payment.bookingId);
    if (booking) {
      await booking.update({ paymentStatus: 'paid' });
    }
  }

  res.json(payment);
};

const listPayments = async (req, res) => {
  const payments = await Payment.findAll({ order: [['createdAt', 'DESC']] });
  res.json(payments);
};

module.exports = {
  createOrder,
  confirmPayment,
  listPayments,
};
