import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    back () {
      this.transitionTo('projects');
    },

    edit (model) {
      let id = model.id;
      this.transitionTo('project/edit', model);
      console.log(id);
    }
  }
});
