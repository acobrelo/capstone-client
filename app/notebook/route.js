import Ember from 'ember';

export default Ember.Route.extend({
  tmp: null,

  actions: {
    seeTasks (data) {
      this.set('tmp', data.id);
      let params = this.get('store').findRecord('notebook', data.id);
      params.tmp = this.get('tmp');
      //console.log(data);
      console.log('here');
      console.log("yy" + this.get('tmp'));
      return this.transitionTo('notebook/items', params);
    }
  }
});
