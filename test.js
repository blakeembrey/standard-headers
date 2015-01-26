/* global describe, it */
var assert = require('assert');
var standardHeaders = require('./');

describe('standard headers', function () {
  it('should be an array', function () {
    assert(Array.isArray(standardHeaders));
  });

  it('should contain lowercase headers', function () {
    assert(standardHeaders.indexOf('content-type') > -1);
  });
});
