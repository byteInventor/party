const { Op, fn, col, literal } = require('sequelize');
const { Booking, Payment } = require('../models');

const parseDate = (input, fallback) => (input ? new Date(input) : fallback);

const summary = async (req, res) => {
  const now = new Date();
  const startDate = parseDate(req.query.startDate, new Date(now.getFullYear(), now.getMonth(), 1));
  const endDate = parseDate(req.query.endDate, now);

  const bookingsCount = await Booking.count({
    where: {
      createdAt: { [Op.between]: [startDate, endDate] },
    },
  });

  const revenue = await Payment.sum('amount', {
    where: {
      status: 'captured',
      paymentDate: { [Op.between]: [startDate, endDate] },
    },
  });

  const statusBreakdown = await Booking.findAll({
    attributes: ['status', [fn('COUNT', col('id')), 'count']],
    group: ['status'],
  });

  const dailyRevenue = await Payment.findAll({
    attributes: [[fn('DATE', col('payment_date')), 'date'], [fn('SUM', col('amount')), 'amount']],
    where: {
      status: 'captured',
      paymentDate: { [Op.between]: [startDate, endDate] },
    },
    group: [literal('DATE(payment_date)')],
    order: [[literal('DATE(payment_date)'), 'ASC']],
  });

  res.json({
    period: { startDate, endDate },
    bookingsCount,
    revenue: revenue || 0,
    statusBreakdown,
    dailyRevenue,
  });
};

module.exports = {
  summary,
};
