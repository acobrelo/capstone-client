import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save (data) {
      let project = this.get('store').createRecord('project', data);
      project.save();
      this.transitionTo('projects');
    },

    cancel () {
      this.transitionTo('projects');
    }
  }
});
