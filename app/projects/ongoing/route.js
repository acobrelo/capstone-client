import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  credentials: storageFor('auth'),

  model () {
    let id = this.get('credentials.id');
    return this.get('store').findRecord('profile', id);
  },
});
