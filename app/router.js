import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('shows', function() {
    this.route('show', { path: '/:show_id' });
    this.route('edit', { path: '/:show_id/edit' });
    this.route('new');
  });
});

export default Router;
