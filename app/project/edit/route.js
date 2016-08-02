import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    back (project) {
      console.log(project.id);
      this.transitionTo('project', project);
    },

    save (project) {
      project.save();
      this.transitionTo('projects');
      console.log(project.id);
    }
  }
});
