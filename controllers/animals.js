import animalsData from '../db/data/animals.js'

import Animals from '../models/animals.js'

async function index(req, res) {
  const animalsList = await Animals.find()

  res.status(200).json(animalsList)
}

function show(req, res) {
  const id = Number(req.params.id)

  const animals = animalsData.find((animal) => {
    return animal.number === id
  })

  res.status(200).json(animals)
}

async function create(req, res) {
  const newAnimal = await Animals.create(req.body)

  res.status(201).json(newAnimal)
}

function remove(req, res) {
  const id = Number(req.params.id)

  const animalIndexToRemove = animalsData.findIndex((animal) => {
    return id === animal.number
  })

  if (animalIndexToRemove === -1) {
    return res.json({ 'message': 'No animal found' })
  }

  animalsData.splice(animalIndexToRemove, 1)

  res.sendStatus(204)
}

function update(req, res) {
  const id = Number(req.params.id)

  const animalIndexToUpdate = animalsData.findIndex((animal) => {
    return id === animal.number
  })

  animalsData.splice(animalIndexToUpdate, 1, req.body)

  res.status(202).json(req.body)
}

export default {
  index,
  show,
  create,
  remove,
  update,
}