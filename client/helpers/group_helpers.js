// bearded_helpers.js

Template.beardedPage.helpers({

  irises: function(){
    return Irises.find({group: "Bearded"});
  }
});

Template.beardlessPage.helpers({

  irises: function(){
    return Irises.find({group: "Beardless"});
  }
});