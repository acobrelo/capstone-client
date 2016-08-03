import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr('string'),
  aliases: DS.attr('string'),
  biography: DS.attr('string'),
  user_id: DS.attr(),
  username: DS.attr('string'),
  projects: DS.hasMany('project')
});
