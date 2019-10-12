'use strict'

module.exports = async (fastify, opts) => {
  fastify.get('/gravity', async (request, reply) => {
    return [32, 33, 34, 35, 36, 37]
  })
}
