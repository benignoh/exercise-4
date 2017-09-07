import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  questionsSeed: Ember.inject.service(),

  beforeModel(){
    if(!this.get('session.isAuthenticated')){
      return this.transitionTo('login');
    }
  },

  model(){
    return this.get('questionsSeed').loadAll();
  },

  afterModel(model){
    model.sort((a, b) => (a.get('number') - b.get('number')));
  }
});
