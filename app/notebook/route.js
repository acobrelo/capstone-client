import Ember from 'ember';

export default Ember.Route.extend({
  // model (params) {
  //   return this.get('store').findRecord('notebook', params);
  // },

  actions: {
    seeTasks (model) {
      let params = this.get('store').findRecord('notebook', model.id);
      console.log("whatever");
      // console.log(model.id);
      // console.log(model.name);
      this.transitionTo('notebook/items', params);
    }
  }
});
