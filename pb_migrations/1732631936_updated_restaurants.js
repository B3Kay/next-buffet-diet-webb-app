/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h69hbgnivso9umu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yxdeplbu",
    "name": "reviews",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1bwavpc24gvo699",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h69hbgnivso9umu")

  // remove
  collection.schema.removeField("yxdeplbu")

  return dao.saveCollection(collection)
})
