import Grocer from '../models/Grocer.js';

export const getGrocers = async (req, res) => {
  const grocers = await Grocer.find();
  res.json(grocers);
};

export const getGrocerById = async (req, res) => {
  const grocer = await Grocer.findOne({ id: req.params.id });
  if (!grocer) return res.status(404).json({ message: 'Grocer not found' });
  res.json(grocer);
};

export const createGrocer = async (req, res) => {
  const newGrocer = new Grocer(req.body);
  await newGrocer.save();
  res.status(201).json(newGrocer);
};

export const addProductToGrocer = async (req, res) => {
  const grocer = await Grocer.findOne({ id: req.params.id });
  if (!grocer) return res.status(404).json({ message: 'Grocer not found' });
  grocer.products.push(req.body);
  await grocer.save();
  res.status(200).json(grocer);
};
