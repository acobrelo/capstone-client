import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  credentials: storageFor('auth'),

  model (params) {
    console.log("whyy " + params.profile_id);
    return this.get('store').findRecord('profile', params.profile_id);
  },

  // actions: {
  //   create () {
  //     let profile = this.get('store').createRecord('profile');
  //     profile.save();
  //     console.log("done");
  //   },
  // },
});
