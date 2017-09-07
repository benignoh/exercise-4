import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  questionsSeed: Ember.inject.service()
});
