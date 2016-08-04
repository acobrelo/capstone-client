import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('profile', { path: '/profiles/:profile_id' });
  this.route('profiles');
  this.route('profiles/update');
  this.route('projects');
  this.route('projects/done');
  this.route('projects/ongoing');
  this.route('projects/new');
  //this.route('item');
  this.route('project', { path: '/projects/:id' });
  this.route('project/edit', { path: '/projects/:id/edit'});
  this.route('notebook', { path: '/notebook/:id'});
  //this.route('notebook/items', { path: '/notebook/:id/tasks'});
  this.route('items', { path: '/notebook/:id/tasks'});
});

export default Router;
