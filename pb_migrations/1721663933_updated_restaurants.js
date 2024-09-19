/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h69hbgnivso9umu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y4k3rfx5",
    "name": "image_url",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h69hbgnivso9umu")

  // remove
  collection.schema.removeField("y4k3rfx5")

  return dao.saveCollection(collection)
})
