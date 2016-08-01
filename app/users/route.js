import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('user');
  },

  actions: {
    bleh () {
      console.log(this.get('user.id'));
    }
  }
});
