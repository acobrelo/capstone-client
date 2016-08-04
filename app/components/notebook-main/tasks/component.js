import Ember from 'ember';

export default Ember.Component.extend({
  id: null,
  item: {
    content: null,
  },

  actions: {
    newItem () {
      let data = this.get('item');
      data.notebook_id = this.get('id');
      this.sendAction('newItem', data);
      this.set('item.content', null);
      console.log(data.notebook_id);
    }
  }
});
