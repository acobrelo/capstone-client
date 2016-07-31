import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  id: Ember.computed.alias('auth.credentials.id'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions: {
    signOut () {
      this.sendAction('signOut');
    },

    seeProfile () {
      //this.sendAction('seeProfile');
      console.log('why');
      console.log(this.get('id'));
    },

    click () {
      this.sendAction('click');
      //console.log('click');
    }
  },
});
