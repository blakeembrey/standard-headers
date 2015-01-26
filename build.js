var fs = require('fs');
var join = require('path').join;
var request = require('request');
var cheerio = require('cheerio');
var stringify = require('javascript-stringify');

var SOURCE_URL = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers';

request(SOURCE_URL, function (req, res, body) {
  var $ = cheerio.load(body);

  var headers = $('.standard-table tr > td:first-child').map(function () {
    return $(this).text().toLowerCase();
  }).get();

  var contents = 'module.exports = ' + stringify(headers, null, 2) + ';';

  return fs.writeFileSync(join(__dirname, 'standard-headers.js'), contents);
});
