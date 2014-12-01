Meteor.publish 'irises', ->
  Irises.find()

Meteor.publish 'hybridizers', ->
  Hybridizers.find()