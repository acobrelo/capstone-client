import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  genre: DS.attr('string'),
  description: DS.attr('string'),
  completed: DS.attr('boolean'),
  //inProgress: DS.attr('boolean'),
  startedOn: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  targetFinish: DS.attr('date'),
  created_on: DS.attr(),
  //profile: DS.belongsTo('profile'),
  profile_id: DS.attr(),
  // status: Ember.computed
});
