'use strict'

module.exports = async (fastify, opts) => {
  fastify.get('/battery', async (request, reply) => {
    // this.mongo.db.collection('iSpindel0', on)
    return [32, 33, 34, 35, 36, 37]
  })
}
