import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  credentials: storageFor('auth'),

  actions: {
    submit (data) {
      let project = this.get('store').createRecord('project', data);
      project.save()
      .then((result) => {
        console.log(result.id);
      });
      this.transitionTo('projects');
    },

    cancel () {
      this.transitionTo('projects');
    }
  }
});
