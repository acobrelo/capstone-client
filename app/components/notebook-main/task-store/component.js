import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['done'],
  done: Ember.computed.alias('item.done'),

  actions: {
    click () {
      let item = this.get('item');
      item.toggleProperty('done');
      item.save();
      console.log('doneeee?');
    },

    delete () {
      let item = this.get('item');
      item.destroyRecord();
      console.log("gone?");
    },

    store: Ember.inject.service(),
  }
});
