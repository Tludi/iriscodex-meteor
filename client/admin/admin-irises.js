// admin-irises.js
Template.adminIrises.helpers({

  irises: function(){
    return Irises.find();
  }

});