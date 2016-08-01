import Ember from 'ember';


export default Ember.Route.extend({

  actions: {
    create (data) {
      let profile = this.get('store').createRecord('profile', data);
      profile.save();
      this.transitionTo('application');
    },
  }
});
