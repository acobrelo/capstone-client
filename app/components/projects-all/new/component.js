import Ember from 'ember';

export default Ember.Component.extend({

  project: {},

  actions: {
    save () {
      let data = this.get('project');
      console.log(data.description);
      this.sendAction('save', data);
      this.set('project.name', null);
      this.set('project.genre', null);
      this.set('project.description', null);
      this.set('project.targetFinish', null);
    },

    cancel () {
      //this.transitionTo('projects');
      //this.set('project', {});
      this.sendAction('cancel');
      this.set('project.name', null);
      this.set('project.genre', null);
      this.set('project.description', null);
      this.set('project.targetFinish', null);
      console.log('?');
    }
  }
});
