import animalsData from '../db/data/animals.js'

import Animals from '../models/animals.js'

import { NotFound } from '../lib/errors.js'

async function index(req, res) {
  const animalsList = await Animals.find()

  res.status(200).json(animalsList)
}

async function show(req, res, next) {
  try {
    const id = req.params.id
  
    const animals = await animalsData.findbyId(id)

    if (!animals) {
      throw new NotFound('No animal found.')
    }
  
    res.status(200).json(animals)
  } catch (e) {
    next(e)
  }
}

async function create(req, res) {
  const newAnimal = await Animals.create(req.body)

  res.status(201).json(newAnimal)
}

async function remove(req, res) {
  await Animals.findByIdAndRemove(req.params.id)

  res.sendStatus(204)
}

async function update(req, res) {
  const id = req.params.id
  const body = req.body

  const updatedAnimal = await Animals.findOneAndUpdate({ _id: id }, body, { new: true })

  res.status(202).json(updatedAnimal)
}

export default {
  index,
  show,
  create,
  remove,
  update,
}