import DS from 'ember-data';

var Show = DS.Model.extend({
  name: DS.attr('string'),
  totalEpisodes: DS.attr('number'),
  watchedEpisodes: DS.attr('number'),

  remainingEpisodes: function() {
    return this.get('totalEpisodes') - this.get('watchedEpisodes');
  }.property('watchedEpisodes', 'totalEpisodes'),

  progress: function() {
    return  this.get('watchedEpisodes') / this.get('totalEpisodes') * 100;
  }.property('watchedEpisodes', 'totalEpisodes')

});

Show.reopenClass( {
  FIXTURES: [
    { id: 1, name: "Trigun", totalEpisodes: 28, watchedEpisodes: 0 },
    { id: 2, name: "Kamen Rider Ryuki", totalEpisodes: 50, watchedEpisodes: 0 }
  ]
});

export default Show;
