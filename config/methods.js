// methods.js

Meteor.methods({

  irisDelete: function(irisID){
    Irises.remove(irisID);
  },

  irisEdit: function(irisID){
    alert("edit this thing");
    // Irises.remove(irisID);
  },
  
  hybridizerDelete: function(hybridizerID){
    Hybridizers.remove(hybridizerID);
  }
});