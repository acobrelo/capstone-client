import Ember from 'ember';

export default Ember.Route.extend({
  // model (params) {
  //   return this.get('store').findRecord('notebook', params);
  // },

  actions: {
    create (data) {
      console.log(this.get('notebook.id'));
      let item = this.get('store').createRecord('item', data);
      item.save();
    },
  }
});
