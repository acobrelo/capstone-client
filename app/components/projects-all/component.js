import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    view () {
      let id = this.get('project.id');
      this.sendAction('view', id);
    }
  }
});
