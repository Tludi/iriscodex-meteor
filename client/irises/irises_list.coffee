Template.irisList.helpers
  irises: ->
    Irises.find()

  gardens: ->
    Gardens.find()


Template.irisItem.events
  "click .delete":  ->
    Meteor.call("irisDelete", this._id)

    