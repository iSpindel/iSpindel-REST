'use strict'

module.exports = async (fastify, opts) => {
  fastify.get('/temperature', async (request, reply) => {
    // fastify.mongo.mongodb.db.collection('iSpindel0', (err, collection) => {
    //   if (err) return reply.send(err)

    //   collection.find({
    //     temperature: {
    //       $ne: ''
    //     }
    //   }, (err, result) => {
    //     fastify.log.info(result)
    //     reply.send('test')
    //   })
    // })
    return [
      {
        timestamp: new Date().toISOString(),
        temperature: 29
      },
      {
        timestamp: new Date().toISOString(),
        temperature: 30
      },
      {
        timestamp: new Date().toISOString(),
        temperature: 31
      },
      {
        timestamp: new Date().toISOString(),
        temperature: 32
      },
      {
        timestamp: new Date().toISOString(),
        temperature: 33
      }
    ]
  })
}
