import createError from 'http-errors'
import Company from '../models/Company'

class CompanyService {
  /**
   * Find company by id
   * @param {ObjectId} id
   * @returns {Promise<company>}
   */
  findById(id) {
    return Company.findById(id)
  }

  /**
   * Find company by email
   * @param {string} email
   * @returns {Promise<company>}
   */
  findByEmail(email) {
    return Company.findOne({ email })
  }

  /**
   * Get companys by query(filter, options)
   * @param {Object} filter
   * @param {Object} options
   * @returns {Promise<companys>}
   */
  async query(filter, options) {
    const companys = await Company.paginate(filter, options)
    return companys
  }

  /**
   * Create company
   * @param {Object} body
   * @returns {Promise<company>}
   */
  async create(body) {
    return Company.create(body)
  }

  /**
   * Update company by id
   * @param {ObjectId} id
   * @param {Object} body
   * @returns {Promise<company>}
   */
  async updateById(id, body) {
    const company = await this.findById(id)

    if (!company) {
      throw createError.NotFound()
    }

    Object.assign(company, body)
    await company.save()
    return company
  }

  /**
   * Delte company by id
   * @param {ObjectId} id
   * @returns {Promise<company>}
   */
  async deleteById(id) {
    const company = await this.findById(id)
    if (!company) {
      throw createError.NotFound('User not found')
    }
    const result = await company.remove()
    return result
  }
}

export default new CompanyService()
