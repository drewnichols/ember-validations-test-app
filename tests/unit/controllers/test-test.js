import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:test', 'TestController', {
  // Specify the other units that are required for this test.
  needs: ['model:foo']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});
