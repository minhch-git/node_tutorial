import createError from 'http-errors'
import WorksFor from '../models/WorksFor'

class WorksForService {
  /**
   * Find worksFor by id
   * @param {ObjectId} id
   * @returns {Promise<worksFor>}
   */
  findById(id) {
    return WorksFor.findById(id)
  }

  /**
   * Find worksFor by email
   * @param {string} email
   * @returns {Promise<worksFor>}
   */
  findByEmail(email) {
    return WorksFor.findOne({ email })
  }

  /**
   * Get worksFors by query(filter, options)
   * @param {Object} filter
   * @param {Object} options
   * @returns {Promise<worksFors>}
   */
  async query(filter, options) {
    const worksFors = await WorksFor.paginate(filter, options)
    return worksFors
  }

  /**
   * Create worksFor
   * @param {Object} body
   * @returns {Promise<worksFor>}
   */
  async create(body) {
    return WorksFor.create(body)
  }

  /**
   * Update worksFor by id
   * @param {ObjectId} id
   * @param {Object} body
   * @returns {Promise<worksFor>}
   */
  async updateById(id, body) {
    const worksFor = await this.findById(id)

    if (!worksFor) {
      throw createError.NotFound()
    }

    Object.assign(worksFor, body)
    await worksFor.save()
    return worksFor
  }

  /**
   * Delte worksFor by id
   * @param {ObjectId} id
   * @returns {Promise<worksFor>}
   */
  async deleteById(id) {
    const worksFor = await this.findById(id)
    if (!worksFor) {
      throw createError.NotFound('User not found')
    }
    const result = await worksFor.remove()
    return result
  }
}

export default new WorksForService()
