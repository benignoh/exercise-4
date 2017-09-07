import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  questionsSeed: Ember.inject.service(),

  beforeModel(){
    if(!this.get('session.isAuthenticated')){
      alert("You're not authenticated!");
      return this.transitionTo('login');
    }

    if(!this.get('session.currentUser.isPremium')){
      alert("You're not premium!");
      return this.transitionTo('questions');
    }
  },

  model(params){
    return this.get('questionsSeed').loadAll().findBy('id', params.id);
  },

  afterModel(model, transition){
    if(!model.get('isEditable')){
      alert("Questions is not editable");
      return this.transitionTo('questions');
    }
  }
});
