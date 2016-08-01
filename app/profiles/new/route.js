import Ember from 'ember';


export default Ember.Route.extend({

  actions: {
    create (data) {
      //this.get('profile').set('location', data.location);
      let profile = this.get('store').createRecord('profile', data);
      profile.save();
      //let ok = to_s(data);
      //profile.save();
    },
  }
});
