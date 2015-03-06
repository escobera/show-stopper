import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function (show) {
      var self = this;

      var success = function () {
        self.transitionToRoute('shows.index');
      };

      var fail = function () {
        alert("Não foi possível salvar a série.");
      };

      show.save()
        .then(success, fail);
    }
  }
});
