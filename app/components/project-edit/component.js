import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    cancel () {
      let project = this.get('project');
      this.sendAction('cancel', project);
    },

    save () {
      console.log(this.get('project.completed'));
      let project = this.get('project');
      this.sendAction('save', project);
    },

     toggleStatus () {
       let project = this.get('project');
       project.toggleProperty('completed');
       return this.get('project');
     }
  }
});
