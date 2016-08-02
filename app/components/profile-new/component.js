import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  credentials: storageFor('auth'),

  profile: {
    location: null,
    biography: null
  },

  actions: {

    submit () {
      let data = this.get('profile');
      data.user_id = this.get('credentials.id');
      //console.log(this.get('credentials.id'));
      this.sendAction('submit', data);
      this.set('profile.location', null);
      this.set('profile.biography', null);
    },
  },
});
