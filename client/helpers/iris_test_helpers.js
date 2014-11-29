// iris_test_helpers.js

Template.testListPage.helpers({

  irises: function(){
    return Irises.find();
  },

  settings: function () {
    return {
      rowsPerPage: 10,
      showFilter: true,
      useFontAwesome: true,
      fields: [
        { key: 'name', label: 'Name'},
        { key: 'region13', label: 'R13'},
        { key: 'garden1', label: '1'},
        { key: 'garden2', label: '2'},
        { key: 'garden3', label: '3'},
        { key: 'garden4', label: '4'},
        { key: 'garden5', label: '5'},
        { key: 'garden6', label: '6'}
      ]
    };
  }
});