import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    cancel () {
      let project = this.get('project');
      this.sendAction('cancel', project);
    },

    submit () {
      let project = this.get('project');
      this.sendAction('submit', project);
    },

     toggleStatus () {
       let project = this.get('project');
       project.toggleProperty('completed');
       return this.get('project');
     },

     togglePublic () {
       let project = this.get('project');
       project.toggleProperty('public');
       return this.get('project');
     }
  }
});
