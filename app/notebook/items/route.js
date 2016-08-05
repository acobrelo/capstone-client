import Ember from 'ember';

export default Ember.Route.extend({
  param: null,

  model (params) {
    // this.set('id', params.tmp);
    return this.get('store').findRecord('notebook', params.id);
  },

  actions: {
    addItem (data) {
      let item = this.get('store').createRecord('item', data);
      item.save();
      this.set('param', data.tmp);
      return this.get('store').findRecord('notebook', this.get('param'));
    },
  }
});
