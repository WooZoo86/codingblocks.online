/**
 * Created by abhishek on 27/06/17.
 */
'use strict';

import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.modelFor('courses.course.take')
  },
  setupController (controller, model) {
    controller.set('topContent', model.get('sections').toArray()[0].get('contents').toArray()[0])
  }
})
