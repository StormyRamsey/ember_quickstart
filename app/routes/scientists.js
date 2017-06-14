import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann']; // this data is render by the scientists template we specified a model for the route
  }
});
