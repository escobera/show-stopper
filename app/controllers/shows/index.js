import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: true,
  actions: {
    destroy: function(show) {
      show.destroyRecord();
    },
    watchedOne: function(show) {
      show.incrementProperty('stoppedAt');
      show.save();
    }
  }
});
