const { User, Booking } = require('../models');

const listCustomers = async (req, res) => {
  const customers = await User.findAll({
    where: { role: 'consumer' },
    include: [{ model: Booking, as: 'bookings' }],
    order: [['createdAt', 'DESC']],
  });
  res.json(customers);
};

const getCustomer = async (req, res) => {
  const customer = await User.findByPk(req.params.id, { include: [{ model: Booking, as: 'bookings' }] });
  if (!customer) return res.status(404).json({ message: 'Customer not found' });
  res.json(customer);
};

module.exports = {
  listCustomers,
  getCustomer,
};
