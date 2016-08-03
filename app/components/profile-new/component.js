import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  credentials: storageFor('auth'),

  profile: {
    location: null,
    biography: null,
    username: null,
    //user: {
      //user_id: Ember.computed.alias('auth.credentials.id')
    //}
  },

  actions: {

    submit () {
      let data = this.get('profile');
      data.user_id = this.get('credentials.id');
      this.sendAction('submit', data);
      this.set('profile.location', null);
      this.set('profile.biography', null);
      this.set('profile.username', null);
    },
  },
});
