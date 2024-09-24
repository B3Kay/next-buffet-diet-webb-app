/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("00vpwd6t9vz1uhf")

  collection.deleteRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("00vpwd6t9vz1uhf")

  collection.deleteRule = "@request.auth.id = userId.id"

  return dao.saveCollection(collection)
})
