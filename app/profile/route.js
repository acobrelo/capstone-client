import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  credentials: storageFor('auth'),

  model (params) {
    console.log("whyy " + params.profile_id);
    return this.get('store').findRecord('profile', params.profile_id);
  },

  actions: {
    edit () {
      console.log('edit');
    },
  }
});
