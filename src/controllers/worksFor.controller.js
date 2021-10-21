import createError from 'http-errors'
import pick from '../utils/pick'
import worksForService from '../services/worksFor.service'

class WorksForCtrl {
  /**
   * @GET api/v1/worksFors
   * @access public
   */
  async getWorksFors(req, res) {
    const filter = pick(req.query, ['name', 'role'])
    const options = pick(req.query, ['sortBy', 'limit', 'page'])
    options.populate = 'company'
    const result = await worksForService.query(filter, options)
    res.send(result)
  }

  /**
   * @GET api/v1/worksFors/:worksForId
   * @access public
   */
  async getWorksFor(req, res) {
    const worksFor = await worksForService.findById(req.params.worksForId)
    if (!worksFor) {
      throw createError.NotFound()
    }
    res.send(worksFor)
  }

  /**
   * @POST api/v1/worksFors/
   * @access private
   */
  async createWorksFor(req, res) {
    const worksFor = await worksForService.create(req.body)
    res.status(201).send(worksFor)
  }

  /**
   * @PATCH api/v1/worksFors/:worksForId
   * @access private
   */
  async updateWorksFor(req, res) {
    const worksFor = await worksForService.updateById(
      req.params.worksForId,
      req.body
    )
    res.send(worksFor)
  }

  /**
   * @DELETE api/v1/worksFors/:worksForId
   * @access private
   */
  async deleteWorksFor(req, res) {
    await worksForService.deleteById(req.params.worksForId)
    res.status(200).json({ success: true })
  }
}

export default new WorksForCtrl()
