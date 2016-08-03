import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  credentials: storageFor('auth'),
  // queryParams: {
  //   name: {
  //     refreshModel: true
  //   }
  // },


   model () {
     let id = this.get('credentials.id');
     return this.get('store').findRecord('profile', id);
   },

  actions: {
    view (id) {
      console.log(id);
      this.transitionTo('project', id);
    },

    newProject () {
      this.transitionTo('projects/new');
    }
  }
});
