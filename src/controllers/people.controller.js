import createError from 'http-errors'
import pick from '../utils/pick'
import peopleService from '../services/people.service'

class PeopleCtrl {
  /**
   * @GET api/v1/peoples
   * @access public
   */
  async getPeoples(req, res) {
    const filter = pick(req.query, ['name', 'role'])
    const options = pick(req.query, ['sortBy', 'limit', 'page'])
    options.populate = 'professional'
    const result = await peopleService.query(filter, options)
    res.send(result)
  }

  /**
   * @GET api/v1/peoples/:peopleId
   * @access public
   */
  async getPeople(req, res) {
    const people = await peopleService.findById(req.params.peopleId)
    if (!people) {
      throw createError.NotFound('People not found')
    }
    res.send(people)
  }

  /**
   * @POST api/v1/peoples/
   * @access private
   */
  async createPeople(req, res) {
    const people = await peopleService.create(req.body)
    res.status(201).send(people)
  }

  /**
   * @PATCH api/v1/peoples/:peopleId
   * @access private
   */
  async updatePeople(req, res) {
    const people = await peopleService.updateById(req.params.peopleId, req.body)
    res.send(people)
  }

  /**
   * @DELETE api/v1/peoples/:peopleId
   * @access private
   */
  async deletePeople(req, res) {
    await peopleService.deleteById(req.params.peopleId)
    res.status(200).json({ success: true })
  }
}

export default new PeopleCtrl()
