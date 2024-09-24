/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("00vpwd6t9vz1uhf")

  collection.indexes = [
    "CREATE INDEX `idx_BkWwOGO` ON `likes` (\n  `userId`,\n  `restaurantId`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("00vpwd6t9vz1uhf")

  collection.indexes = []

  return dao.saveCollection(collection)
})
