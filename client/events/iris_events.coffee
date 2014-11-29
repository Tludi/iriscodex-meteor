Template.irisItem.events
  "click .delete":  ->
    Meteor.call("irisDelete", this._id)

  "click .edit":  ->
    Meteor.call("irisEdit", this._id)

Template.irisTestItem.events
  "click .delete":  ->
    alert("you clicked delete")

  "click .edit":  ->
    Meteor.call("irisEdit", this._id)