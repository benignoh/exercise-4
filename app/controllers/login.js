import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    login(){
      if(this.get('session').authenticate(this.get('username'), this.get('password'))){
        return this.transitionToRoute('questions');
      }
    }
  }
});
