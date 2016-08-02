import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  credentials: storageFor('auth'),

  model () {
    let id = this.get('credentials.id');
    return this.get('store').findRecord('profile', id);
  },

  actions: {
    save (profile) {
      profile.save();
      console.log('yusss');
      this.transitionTo('profile', profile);
    },

    cancel (profile) {
      this.transitionTo('profile', profile);
      console.log(profile.id);
    }
  }
});
