Template.hybridizers.events
  "click .delete":  ->
    Meteor.call("hybridizerDelete", this._id)
