import Ember from 'ember';

export default Ember.ObjectController.extend( {
  allowedLevels: [ 1,2,3,4,5,6,7,8,9 ] ,
  selectedLevel: null,
  actions: {
    save: function(course) {
      this.store.createRecord('course', {
        level: course.level,
        name: course.name
      });

      var self = this;

      var success = function() {
        self.transitionToRoute('courses.index');
      };

      var fail = function() {
        alert("Não foi possível salvar a turma.");
      };

      course.save().then(success,fail);
    }
  }
});
