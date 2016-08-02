import Ember from 'ember';

export default Ember.Component.extend({
  project: {},

  actions: {
    save () {
      let data = this.get('project');
      this.sendAction('save', data);
      console.log(this.get('project.description'));
    }
  }
});
