import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  credentials: storageFor('auth'),

  project: {
    name: null,
    genre: null,
    description: null,
    targetFinish: null
  },

  actions: {
    submit () {
      let data = this.get('project');
      data.profile_id = this.get('credentials.id');
      this.sendAction('submit', data);
      this.set('project.name', null);
      this.set('project.genre', null);
      this.set('project.description', null);
      this.set('project.targetFinish', null);
    },

    cancel () {
      this.sendAction('cancel');
      this.set('project.name', null);
      this.set('project.genre', null);
      this.set('project.description', null);
      this.set('project.targetFinish', null);
      console.log('?');
    }
  }
});
