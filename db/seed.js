import mongoose from 'mongoose'
import connectToDb from './connectToDb.js'

import Animals from '../models/animals.js'
import animalsData from './data/animals.js'

async function seedDatabase() {
  try {
    await connectToDb()
    console.log('Successfully connecter to mongo !')

    await mongoose.connection.db.dropDatabase()
    console.log('Removed all animals')

    const animals = await Animals.create(animalsData)
    console.log(`${animals.length} animals created !`)

    await mongoose.connection.close()
    console.log('Disconnected from mongo. All done !')

  } catch (e) {
    console.log('Somthing went wrong !')
    console.log(e)
    await mongoose.connection.close()
  }
}

seedDatabase()

