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

    click () {
      this.sendAction('click');
      //console.log('click');
    },

    // newProfile () {
    //   let id = this.get('id');
    //   console.log(id);
    //   this.transitionTo('profiles.new');
    //   // this.sendAction('newProfile', id);
    // }
  },
});
