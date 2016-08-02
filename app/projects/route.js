import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('project');
  },

  actions: {
    view (id) {
      console.log(id);
      this.transitionTo('project', id);
    },

    newProject () {
      this.transitionTo('projects/new');
      console.log('hi');
    }
  }
});
