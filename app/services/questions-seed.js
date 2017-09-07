import Ember from 'ember';

const questions = [
  Ember.Object.create({
    id: 26,
    text: 'What makes you bored?',
    points: 100,
    number: 18,
    isEditable: false
  }),
  Ember.Object.create({
    id: 32,
    text: 'Which is your favourite four-legged creature and why?',
    points: 75,
    number: 13,
    isEditable: false
  }),
  Ember.Object.create({
    id: 17,
    text: 'Something or someone you miss the most from childhood?',
    points: 85,
    number: 54,
    isEditable: true
  }),
  Ember.Object.create({
    id: 41,
    text: 'Do you like chocolate?',
    points: 30,
    number: 23,
    isEditable: true
  }),
  Ember.Object.create({
    id: 109,
    text: 'When was the last time you lied and to whom and why?',
    points: 85,
    number: 4,
    isEditable: false
  }),
  Ember.Object.create({
    id: 87,
    text: 'What are the last 4 digits in your cellphone number?',
    points: 20,
    number: 8,
    isEditable: true
  }),
  Ember.Object.create({
    id: 58,
    text: 'What scares you the most and why?',
    points: 70,
    number: 1,
    isEditable: false
  })
]

export default Ember.Service.extend({
  store: Ember.inject.service(),

  loadAll(){
    return questions;
  }
});
