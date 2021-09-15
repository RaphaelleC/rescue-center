import express from 'express'
import animalController from '../controllers/animals.js'

const router = express.Router()

router.route('/animals')
  .get(animalController.index)
  .post(animalController.create)

router.route('/animals/:id')
  .get(animalController.show)
  .delete(animalController.remove)
  .put(animalController.update)

export default router