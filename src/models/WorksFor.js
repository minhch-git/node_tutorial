import mongoose, { Schema } from 'mongoose'
import { toJSON, paginate } from './plugins'

const worksForSchema = new Schema(
  {
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Companies',
      required: true,
    },
    dateOfJoin: {
      type: Date,
      default: Date.now(),
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

// add plugin that converts mongoose to json
worksForSchema.plugin(toJSON)
worksForSchema.plugin(paginate)

/**
 * @typedef WorksFor
 */
const WorksFor = mongoose.model('WorksFor', worksForSchema)

export default WorksFor
