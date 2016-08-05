import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    back (project) {
      this.get('store').unloadAll('project');
      this.get('store').findRecord('project', project.id)
      .then((result) => {
        this.transitionTo('project', result);
      });
    },

    save (project) {
      project.save();
      this.transitionTo('projects');
    }
  }
});
