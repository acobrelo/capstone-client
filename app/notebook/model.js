import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  project_id: DS.attr(),
  items: DS.hasMany('item')
});
