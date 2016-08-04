import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    click () {
      let item = this.get('item');
      item.toggleProperty('done');
      item.save();
      console.log('doneeee?');
    },

    delete () {
      let item = this.get('item');
      item.destroyRecord();
      console.log("gone?");
    }
  }
});
