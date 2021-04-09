"use strict";

var should = require("chai").should();
var htmlcore = require("../");

describe('#versionGuard', function() {
  it('global._htmlcore should be defined', function() {
    should.equal(global._htmlcore, htmlcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      htmlcore.versionGuard('version');
    }).should.throw('More than one instance of htmlcore');
  });
});
