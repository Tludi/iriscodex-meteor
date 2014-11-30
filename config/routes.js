// router.js
Router.configure({
  // set the default layout template for app
  layoutTemplate: 'application',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  // subscribe to irises for all routes and wait
  // to load until irises is retreived from db
  waitOn: function() { return Meteor.subscribe('irises'); }
});

Router.route('/', {name: 'irisList'});

Router.route('irises/:_id', {
  name: 'irisPage',
  data: function() { return Irises.findOne(this.params._id); }
});

Router.route('/irises/:_id/edit', {
  name: 'updateIrisForm',
  data: function() { return Irises.findOne(this.params._id)}
});

Router.route('newIris', {name: 'insertIrisForm'});

// route for a lab test page of iris lists
Router.route('testListPage', {name: 'testListPage'});

// returns the not found page when invalid id is passed to irises
Router.onBeforeAction('dataNotFound', {only: 'irisPage'});