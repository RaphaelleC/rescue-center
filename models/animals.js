import mongoose from 'mongoose'

const animalsSchema = mongoose.Schema({
  number: { type: Number, required: true },
  name: { type: String, required: true },
  race: { type: String, required: true },
  personality: { type: String, required: true },
  availability: { type: String, required: true },
  picture: { type: String, required: true },
})

export default mongoose.model('Animals', animalsSchema)