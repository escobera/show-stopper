import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  totalEpisodes: DS.attr('number'),
  stoppedAt: DS.attr('number'),
  episodeTime: DS.attr('number'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  remainingEpisodes: function () {
    return this.get('totalEpisodes') - this.get('stoppedAt');
  }.property('stoppedAt', 'totalEpisodes'),

  remainingTime: function() {
    var total = moment.duration({minutes: this.get('remainingEpisodes') * this.get('episodeTime')});
    return total.humanize();
  }.property('episodeTime'),

  progress: function () {
    return this.get('stoppedAt') / this.get('totalEpisodes') * 100;
  }.property('stoppedAt', 'totalEpisodes')

});
