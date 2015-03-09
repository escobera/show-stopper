import Ember from 'ember';

export default Ember.Controller.extend( {
  actions: {
    save: function() {
      var self = this;

      var success = function() {
        self.transitionToRoute('shows.index');
      };

      var fail = function(reason) {
        alert("Não foi possível salvar a série.\n"+reason);
      };

      this.model.save().then(success).catch(fail);
    }
  }
});
