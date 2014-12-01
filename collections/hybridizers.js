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


// move the following to a seperate methods file

Meteor.methods({
  // irisCreate: function(iris){
  //   Irises.insert({
  //     name: iris.name,
  //     category: iris.category,
  //     aitken: iris.aitken,
  //     wild: iris.wild
  //   });
  // },

  hybridizerDelete: function(hybridizerID){
    Hybridizers.remove(hybridizerID);
  },

  hybridizerEdit: function(hybridizerID){
    alert("edit this thing");
    // Irises.remove(irisID);
  }
});