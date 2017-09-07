import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    makeVIP(){
      this.get('session').makePremium()
    }
  }
});
