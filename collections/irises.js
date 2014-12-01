Irises = new Mongo.Collection('irises');

Irises.attachSchema(new SimpleSchema({
  group: {
    type: String,
    label: "Group",
    allowedValues: ["Bearded", "Beardless"],
    autoform: {
      afFieldInput: {
        firstOption: "(Select a Group)"
      }
    }
  },
  name: {
    type: String,
    label: "Iris Name"
  },
  region13: {
    type: Boolean,
    label: "Region 13"
  },
  hybridizerfirst: {
    type: String,
    label: "Hybridizer First Name",
    autoform: {
      options: function() {
        var options = [];
        Hybridizers.find().forEach(function(element){
          options.push({
            label: element.firstName, value: element.fristName
          })
        });
        return options;
      }
    }
  },
  hybridizerlast: {
  type: String,
  label: "Hybridizer Last Name",
  autoform: {
      options: function() {
        var options = [];
        Hybridizers.find().forEach(function(element){
          options.push({
            label: element.lastName, value: element.lastName
          })
        });
        return options;
      }
    }
  },
  category: {
    type: String,
    label: "Type",
    allowedValues: ["BB", "BIVE", "CALS", "IB", "LA", "LAEV", "PCI", "PSEU", "SDB", "SIB", "SINO", "SPEC-X", "SPU", "TB", "VERS"],
    autoform: {
      afFieldInput: {
        firstOption: "(Select a Type)"
      }
    }
  },
  year: {
    type: String,
    label: "Year",
    allowedValues: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"],
    autoform: {
      afFieldInput: {
        firstOption: "(Select Year)"
      }
    }
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

  irisDelete: function(irisID){
    Irises.remove(irisID);
  },

  irisEdit: function(irisID){
    alert("edit this thing");
    // Irises.remove(irisID);
  }
});
