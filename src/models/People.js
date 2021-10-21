import mongoose, { Schema } from 'mongoose'
import { toJSON, paginate } from './plugins'

const peopleSchema = new Schema(
  {
    professional: {
      type: Schema.Types.ObjectId,
      ref: 'Professional',
      required: true,
    },
    peopleName: {
      type: String,
      required: true,
      trim: true,
    },
    sex: {
      type: String,
      required: true,
      trim: true,
    },
    dateOfBirth: {
      type: Date,
    },
    phone: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

// add plugin that converts mongoose to json
peopleSchema.plugin(toJSON)
peopleSchema.plugin(paginate)

/**
 * @typedef People
 */
const People = mongoose.model('People', peopleSchema)

export default People
