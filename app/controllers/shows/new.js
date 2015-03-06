import Ember from 'ember';

export default Ember.ObjectController.extend( {
  actions: {
    save: function(show) {
      this.store.createRecord('show', {
        name: show.name,
        totalEpisodes: show.totalEpisodes,
        stoppedAt: show.stoppedAt,
        episodeTime: show.episodeTime,
        createdAt: show.createdAt,
        updatedAt: show.updatedAt
      });

      var self = this;

      var success = function() {
        self.transitionToRoute('shows.index');
      };

      var fail = function() {
        alert("Não foi possível salvar a série.");
      };

      show.save().then(success,fail);
    }
  }
});
