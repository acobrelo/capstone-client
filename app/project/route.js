import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    back () {
      this.transitionTo('projects');
    },

    edit (model) {
      this.transitionTo('project/edit', model);
    },

    delete (model) {
      model.destroyRecord();
      this.transitionTo('projects');
    }
  }
});
