import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  credentials: storageFor('auth'),

  // model (params) {
  //   let user = this.get('credentials.email');
  //   console.log("whyy " + user);
  //   return this.get('store').findRecord('profile', params.profile_id);
  // },

  actions: {
    edit () {
      this.transitionTo('profiles/update');
    },
  }
});
