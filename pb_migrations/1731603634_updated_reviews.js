/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1bwavpc24gvo699")

  collection.listRule = ""
  collection.createRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1bwavpc24gvo699")

  collection.listRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})