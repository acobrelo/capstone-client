import Ember from 'ember';

export default Ember.Component.extend({
  tmp: null,

  actions: {
    tasks () {
      let data = this.get('project');
      data.tmp = this.get('tmp');
      this.sendAction('tasks', data);
      //this.transitionTo('notebook/items', params);
    },

    bookmarks () {
      console.log('bookmarkTIme');
    }
  }
});
