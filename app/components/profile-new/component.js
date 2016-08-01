import Ember from 'ember';

export default Ember.Component.extend({

  profile: {
    location: null,
    biography: null
  },

  actions: {

    submit () {
      let data = this.get('profile');
      this.sendAction('submit', data);
      this.set('profile.location', null);
      this.set('profile.biography', null);
    },
  },
});
