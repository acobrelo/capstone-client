import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    back (project) {
      console.log(project.id);
      this.get('store').unloadAll('project');
      this.get('store').findRecord('project', project.id)
      .then((result) => {
        console.log(result.id);
        this.transitionTo('project', result);
      });
    },

    save (project) {
      console.log(project.name);
      project.save();
      this.transitionTo('projects');
    }
  }
});
