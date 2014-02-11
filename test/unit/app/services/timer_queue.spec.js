'use strict';

describe('timerQueue', function() {
  var timerQueue, queue;

  beforeEach(module('AngularDrumMachine'));

  beforeEach(inject(function(_timerQueue_) {
    timerQueue = _timerQueue_;
    queue = timerQueue.queue.call(timerQueue);
  }));

  it('should start with an empty queue', function() {
    expect(queue.length).toEqual(0);
  });

  describe('method add()', function() {
    it('should add a new item to the queue', function() {
      timerQueue.add(function() {}, 5000);
      expect(queue.length).toEqual(1);
    });

    it('should add multiple items to the queue', function() {
      timerQueue.add(function() {}, 5000);
      timerQueue.add(function() {}, 5000);
      timerQueue.add(function() {}, 5000);
      expect(queue.length).toEqual(3);
    });
  });

  describe('method clear()', function() {
    it('should not fail if the queue is empty', function() {
      expect(queue.length).toEqual(0);
      expect(timerQueue.clear).not.toThrow();
    });

    it('should clear a single item from the queue', function() {
      timerQueue.add(function() {}, 5000);
      timerQueue.clear();
      expect(timerQueue.queue().length).toEqual(0);
    });
  });
});
