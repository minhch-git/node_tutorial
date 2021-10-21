import mongoose, { Schema } from 'mongoose'
import { toJSON, paginate } from './plugins'

const professionalSchema = new Schema(
  {
    degree: {
      type: String,
      required: true,
      trim: true,
    },
    experience: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

// add plugin that converts mongoose to json
professionalSchema.plugin(toJSON)
professionalSchema.plugin(paginate)

/**
 * @typedef Professional
 */
const Professional = mongoose.model('Professional', professionalSchema)

export default Professional
