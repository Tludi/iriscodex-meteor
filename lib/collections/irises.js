Irises = new Mongo.Collection('irises');

Irises.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 20
  },
  region13: {
    type: Boolean,
    label: "Region 13"
  },
  hybridizer: {
    type: String,
    label: "Hybridizer"
  },
  category: {
    type: String,
    label: "Type",
    max: 10
  },
  year: {
    type: String,
    label: "Year"
  },
  garden1: {
    type: Boolean,
    label: "Aitken"
  },
  garden2: {
    type: Boolean,
    label: "Mt Pleasant"
  },
  garden3: {
    type: Boolean,
    label: "Miller"
  },
  garden4: {
    type: Boolean,
    label: "Wild"
  },
  garden5: {
    type: Boolean,
    label: "Mid America"
  },
  garden6: {
    type: Boolean,
    label: "Schreiners"
  }
}));


Meteor.methods({
  
  // irisCreate: function(iris){
  //   Irises.insert({
  //     name: iris.name,
  //     category: iris.category,
  //     aitken: iris.aitken,
  //     wild: iris.wild
  //   });
  // },

  irisDelete: function(irisID){
    Irises.remove(irisID);
  }
});
