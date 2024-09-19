/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1bwavpc24gvo699")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c8fccsap",
    "name": "foodBadges",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1bwavpc24gvo699")

  // remove
  collection.schema.removeField("c8fccsap")

  return dao.saveCollection(collection)
})
