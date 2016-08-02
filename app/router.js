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
  this.route('profiles/new');
  this.route('projects');
});

//   this.route('profiles', function() {
//    this.route('update');
//  });
export default Router;
