/* global describe, it */

var expect = require('chai').expect
var headers = require('./')

describe('standard headers', function () {
  it('should be an object with request and response header arrays', function () {
    expect(headers).to.have.keys(['request', 'response'])
  })

  describe('request headers', function () {
    it('should contain lowercase headers', function () {
      expect(headers.request).to.contain('accept')
    })

    it('should contain both referrer spellings', function () {
      expect(headers.request).to.contain('referer')
      expect(headers.request).to.contain('referrer')
    })
  })

  describe('response headers', function () {
    it('should contain lowercase headers', function () {
      expect(headers.response).to.contain('content-type')
    })
  })
})
