const { ContentBlock } = require('../models');

const listContent = async (req, res) => {
  const { type } = req.query;
  const where = {};
  if (type) where.type = type;
  if (req.query.includeUnpublished !== 'true') where.isPublished = true;

  const content = await ContentBlock.findAll({ where, order: [['sort_order', 'ASC']] });
  res.json(content);
};

const createContent = async (req, res) => {
  const block = await ContentBlock.create(req.body);
  res.status(201).json(block);
};

const updateContent = async (req, res) => {
  const block = await ContentBlock.findByPk(req.params.id);
  if (!block) return res.status(404).json({ message: 'Content block not found' });
  await block.update(req.body);
  res.json(block);
};

const deleteContent = async (req, res) => {
  const block = await ContentBlock.findByPk(req.params.id);
  if (!block) return res.status(404).json({ message: 'Content block not found' });
  await block.destroy();
  res.status(204).send();
};

module.exports = {
  listContent,
  createContent,
  updateContent,
  deleteContent,
};
