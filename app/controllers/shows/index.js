import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: true,
  actions: {
    destroy: function(show) {
      show.deleteRecord();
      show.save();
    },
    watchedOne: function(show) {
      show.incrementProperty('watchedEpisodes');
      show.save();
    }
  }
});
