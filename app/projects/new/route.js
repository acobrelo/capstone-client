import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  credentials: storageFor('auth'),

  actions: {
    submit (data) {
      let project = this.get('store').createRecord('project', data);
      //let data.profile_id = this.get('credentials.id');
      //console.log(data.profile_id);
      project.save()
      .then((result) => {
        //let id = result.id;
        //let why = this.get('store').findRecord('project', id);
        console.log(result.name);
      });
      this.transitionTo('projects');
    },

    cancel () {
      this.transitionTo('projects');
    }
  }
});
