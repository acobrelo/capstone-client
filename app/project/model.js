import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  genre: DS.attr('string'),
  description: DS.attr('string'),
  completed: DS.attr('boolean'),
  started_on: DS.attr('date'),
  target_finish: DS.attr('date'),
});
