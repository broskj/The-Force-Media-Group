'use strict';

describe('Service: commentService', function () {

  // load the service's module
  beforeEach(module('fmgApp'));

  // instantiate service
  var commentService;
  beforeEach(inject(function (_commentService_) {
    commentService = _commentService_;
  }));

  it('should do something', function () {
    expect(!!commentService).toBe(true);
  });

});
