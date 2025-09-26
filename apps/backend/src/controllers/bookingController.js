const { Booking, Event, Payment, EventAddon } = require('../models');

const createBooking = async (req, res) => {
  const { eventId, eventDate, guestCount, venuePreferences, addOnSelections = [], notes } = req.body;

  const event = await Event.findByPk(eventId, { include: { model: EventAddon, as: 'addons' } });
  if (!event || !event.isActive) {
    return res.status(400).json({ message: 'Invalid event selected' });
  }

  const addOnMap = new Map(event.addons.map((addon) => [addon.id, addon]));
  const selectedAddons = addOnSelections
    .map((addonId) => addOnMap.get(addonId))
    .filter(Boolean);

  const addOnTotal = selectedAddons.reduce((sum, addon) => sum + Number(addon.price || 0), 0);
  const totalPrice = Number(event.basePrice || 0) + addOnTotal;

  const booking = await Booking.create({
    userId: req.user.id,
    eventId,
    eventDate,
    guestCount,
    venuePreferences,
    addOnSelections: selectedAddons.map((addon) => ({ id: addon.id, name: addon.name, price: addon.price })),
    totalPrice,
    notes,
  });

  const fullBooking = await Booking.findByPk(booking.id, {
    include: [
      { model: Event, as: 'event', include: { model: EventAddon, as: 'addons' } },
      { model: Payment, as: 'payments' },
    ],
  });

  res.status(201).json(fullBooking);
};

const listMyBookings = async (req, res) => {
  const bookings = await Booking.findAll({
    where: { userId: req.user.id },
    include: [
      { model: Event, as: 'event' },
      { model: Payment, as: 'payments' },
    ],
    order: [['createdAt', 'DESC']],
  });
  res.json(bookings);
};

const listAllBookings = async (req, res) => {
  const bookings = await Booking.findAll({
    include: [
      { model: Event, as: 'event' },
      { model: Payment, as: 'payments' },
    ],
    order: [['createdAt', 'DESC']],
  });
  res.json(bookings);
};

const updateBookingStatus = async (req, res) => {
  const { id } = req.params;
  const { status, paymentStatus, notes } = req.body;

  const booking = await Booking.findByPk(id);
  if (!booking) {
    return res.status(404).json({ message: 'Booking not found' });
  }

  await booking.update({ status: status || booking.status, paymentStatus: paymentStatus || booking.paymentStatus, notes });
  res.json(booking);
};

module.exports = {
  createBooking,
  listMyBookings,
  listAllBookings,
  updateBookingStatus,
};
