'use strict'

module.exports = async (fastify, opts) => {
  fastify.get('/v1/temperature', async (request, reply) => {
      fastify.mongo.mongodb.db.collection('iSpindel0', (err, collection) => {
        if (err) return reply.send(err)

        collection.find({ temperature: { $exists: true } }).toArray((err, docs) => {
          if (err) return reply.send(err)
          
          docs.forEach(doc => {
            doc.timestamp = new Date(doc._id.getTimestamp()).toISOString()
            doc.value = doc.temperature
          })
          return reply.send(docs)
        })
      })
    })
  }
