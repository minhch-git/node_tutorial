import mongoose, { Schema } from 'mongoose'
import { toJSON, paginate } from './plugins'

const companySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
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
companySchema.plugin(toJSON)
companySchema.plugin(paginate)

/**
 * @typedef Companies
 */
const Companies = mongoose.model('Companies', companySchema)

export default Companies
