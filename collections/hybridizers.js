Hybridizers = new Mongo.Collection('hybridizers');

Hybridizers.attachSchema(new SimpleSchema({
  firstName: {
    type: String,
    label: "Hybridizer First Name"
  },
  lastName: {
    type: String,
    label: "Hybridizer Last Name"
  }
}));


// move this to its own file
Meteor.methods({

  hybridizerDelete: function(hybridizerID){
    Hybridizers.remove(hybridizerID);
  }
});