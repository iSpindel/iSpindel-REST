'use strict'

module.exports = async (fastify, opts) => {
  fastify.get('/gravity', async (request, reply) => {
    fastify.mongo.mongodb.db.collection('iSpindel0', (err, collection) => {
      if (err) return reply.send(err)

      collection.find({ gravity: { $exists: true } }).toArray((err, docs) => {
        if (err) return reply.send(err)
        
        docs.forEach(doc => {
          doc.timestamp = new Date(doc._id.getTimestamp()).toISOString()
          doc.value = doc.gravity
        })
        return reply.send(docs)
      })
    })
  })
}
