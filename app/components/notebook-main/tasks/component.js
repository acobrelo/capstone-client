import Ember from 'ember';

export default Ember.Component.extend({
  form: {
    content: null,
  },

  tmp: null,

  actions: {
    newItem () {
      let data = this.get('form');
      data.notebook_id = this.get('notebook.id');
      data.tmp = this.get('tmp');
      this.sendAction('newItem', data);
      this.set('form.content', null);
    },


  },

  //store: Ember.inject.service(),
});
