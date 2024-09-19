/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h69hbgnivso9umu")

  // remove
  collection.schema.removeField("oo4kup5p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ablu6agv",
    "name": "rating",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h69hbgnivso9umu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oo4kup5p",
    "name": "rating",
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

  // remove
  collection.schema.removeField("ablu6agv")

  return dao.saveCollection(collection)
})
