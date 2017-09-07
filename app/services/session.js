import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  defaultUsername: 'dev@labweb.io',
  defaultPassword: '123123',
  currentUser: Ember.computed.oneWay('loggedUser'),

  loggedUser: Ember.computed(function(){
    return this.get('allUsers').findBy('isAuthenticated', true);
  }),

  init() {
    this._super(...arguments);
    this.get('allUsers').then(() => {
      let user = this.findByUsername(this.get('defaultUsername'));
      if (!user) {
        this.get('store').createRecord(
          'user', {
            username: this.get('defaultUsername'),
            password: this.get('defaultPassword')
          }
        ).save();
      }
    });
  },

  allUsers: Ember.computed(function() {
    return this.get('store').findAll('user');
  }),

  findByUsername(username) {
    return this.get('allUsers').findBy('username', username);
  },

  authenticate(username, password) {
    let user = this.findByUsername(username),
      authenticated = (!!user && password == this.get('defaultPassword'));

    this.set('currentUser', user);

    if (authenticated) {
      this.set('currentUser.isAuthenticated', authenticated);
      this.get('currentUser').save();
    }

    return this.get('isAuthenticated');
  },

  logout() {
    if (this.get('currentUser')) {
      this.set('currentUser.isAuthenticated', false);
      this.get('currentUser').save();
    }
    this.set('currentUser', null);
  },

  makePremium(){
    if(this.get('currentUser')){
      return this.set('currentUser.isPremium', true);
    }
  },

  isAuthenticated: Ember.computed.readOnly('currentUser.isAuthenticated'),
  isPremium: Ember.computed.readOnly('currentUser.isPremium')
});
