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
