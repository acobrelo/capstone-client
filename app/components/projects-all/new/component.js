import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  credentials: storageFor('auth'),

  project: {},

  actions: {
    save () {
      let data = this.get('project');
      data.profile_id = this.get('credentials.id');
      console.log(data.profile_id);
      this.sendAction('save', data);
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
