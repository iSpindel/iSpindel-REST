'use strict'

module.exports = async (fastify, opts) => {
  fastify.get('/battery', async (request, reply) => {
    // fastify.mongo.mongodb.db.collection('iSpindel0', (err, collection) => {
    //   if (err) return reply.send(err)

    //   collection.findOne({ battery: '3.957247' }, (err, battery) => {
    //     reply.send(battery)
    //   })
    // })
    return [0]
  })
}
