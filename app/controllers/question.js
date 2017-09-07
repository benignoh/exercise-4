import Ember from 'ember';

export default Ember.Controller.extend({
  questionsSeed: Ember.inject.service(),

  actions:{
    delete(){
      this.get('questionsSeed').loadAll().removeObject(this.get('model'));
      return this.transitionToRoute('questions');
    },

    save(){
      return this.transitionToRoute('questions');
    }
  }
});
