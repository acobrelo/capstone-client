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

    strike (data) {
      console.log('what' + data.id);
      console.log(this.get('item.id'));

      //let item = this.get('store').findRecord('items', data.id);
      //item.toggleProperty('done');
      //console.log(this.get('item.id') + "done?");
    }
  },

  //store: Ember.inject.service(),
});
