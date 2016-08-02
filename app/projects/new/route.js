import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save (data) {
      console.log('testing' + data.name);
      let project = this.get('store').createRecord('project', data);
      project.save();
    }
  }
});
