import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.email'),

   model (params) {
     return this.get('store').findRecord('profile', params.profile_id);
   },

  actions: {
    create (data) {
      let profile = this.get('store').createRecord('profile', data);
      profile.save();
    },
  },
  //
  // actions: {
  //   create (credentials) {
  //     let id = credentials.id;
  //     let profile = this.get('store').createRecord('profile');
  //     profile.save();
  //     console.log("done " + id);
  //   },
  // }
});
