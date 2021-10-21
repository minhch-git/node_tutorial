import createError from 'http-errors'
import pick from '../utils/pick'
import companyService from '../services/company.service'

class CompanyCtrl {
  /**
   * @GET api/v1/companys
   * @access public
   */
  async getCompanies(req, res) {
    const filter = pick(req.query, ['name', 'role'])
    const options = pick(req.query, ['sortBy', 'limit', 'page'])
    const result = await companyService.query(filter, options)
    res.send(result)
  }

  /**
   * @GET api/v1/companys/:companyId
   * @access public
   */
  async getCompany(req, res) {
    const company = await companyService.findById(req.params.companyId)
    if (!company) {
      throw createError.NotFound()
    }
    res.send(company)
  }

  /**
   * @POST api/v1/companys/
   * @access private
   */
  async createCompany(req, res) {
    const company = await companyService.create(req.body)
    res.status(201).send(company)
  }

  /**
   * @PATCH api/v1/companys/:companyId
   * @access private
   */
  async updateCompany(req, res) {
    const company = await companyService.updateById(
      req.params.companyId,
      req.body
    )
    res.send(company)
  }

  /**
   * @DELETE api/v1/companys/:companyId
   * @access private
   */
  async deleteCompany(req, res) {
    await companyService.deleteById(req.params.companyId)
    res.status(200).json({ success: true })
  }
}

export default new CompanyCtrl()
