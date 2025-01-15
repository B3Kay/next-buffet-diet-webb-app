/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h69hbgnivso9umu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hyzuxyj1",
    "name": "lunchPrice",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "obbfvlxe",
    "name": "eveningPrice",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6rd3lexv",
    "name": "weekendPrice",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "35ccvt2r",
    "name": "imageUrls",
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
  const collection = dao.findCollectionByNameOrId("h69hbgnivso9umu")

  // remove
  collection.schema.removeField("hyzuxyj1")

  // remove
  collection.schema.removeField("obbfvlxe")

  // remove
  collection.schema.removeField("6rd3lexv")

  // remove
  collection.schema.removeField("35ccvt2r")

  return dao.saveCollection(collection)
})
