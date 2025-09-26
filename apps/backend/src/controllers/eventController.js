const { Event, EventAddon } = require('../models');

const listEvents = async (req, res) => {
  const events = await Event.findAll({
    where: req.query.includeInactive === 'true' ? {} : { isActive: true },
    include: [{ model: EventAddon, as: 'addons' }],
    order: [['createdAt', 'DESC']],
  });
  res.json(events);
};

const getEvent = async (req, res) => {
  const event = await Event.findOne({
    where: { slug: req.params.slug },
    include: [{ model: EventAddon, as: 'addons' }],
  });

  if (!event) {
    return res.status(404).json({ message: 'Event not found' });
  }

  res.json(event);
};

const createEvent = async (req, res) => {
  const { addons = [], ...eventData } = req.body;
  const event = await Event.create(eventData);
  if (addons.length) {
    const addonInstances = addons.map((addon) => ({ ...addon, eventId: event.id }));
    await EventAddon.bulkCreate(addonInstances);
  }
  const fullEvent = await Event.findByPk(event.id, { include: { model: EventAddon, as: 'addons' } });
  res.status(201).json(fullEvent);
};

const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { addons = [], ...eventData } = req.body;

  const event = await Event.findByPk(id);
  if (!event) {
    return res.status(404).json({ message: 'Event not found' });
  }

  await event.update(eventData);

  if (addons) {
    await EventAddon.destroy({ where: { eventId: event.id } });
    if (addons.length) {
      const addonInstances = addons.map((addon) => ({ ...addon, eventId: event.id }));
      await EventAddon.bulkCreate(addonInstances);
    }
  }

  const fullEvent = await Event.findByPk(event.id, { include: { model: EventAddon, as: 'addons' } });
  res.json(fullEvent);
};

const deleteEvent = async (req, res) => {
  const { id } = req.params;
  const event = await Event.findByPk(id);
  if (!event) {
    return res.status(404).json({ message: 'Event not found' });
  }
  await event.destroy();
  res.status(204).send();
};

module.exports = {
  listEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
};
