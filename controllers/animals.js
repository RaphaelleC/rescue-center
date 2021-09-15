import animalsData from '../db/data/animals.js'

function index(req, res) {
  res.status(200).json(animalsData)
}

function show(req, res) {
  const id = Number(req.params.id)

  const animals = animalsData.find((animal) => {
    return animal.number === id
  })

  res.status(200).json(animals)
}

function create(req, res) {
  const newAnimal = req.body

  animalsData.push(newAnimal)

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