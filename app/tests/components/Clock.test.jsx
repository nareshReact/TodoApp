var React = require('react');
var ReactDom = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
//var Clock = require('./components/Clock.jsx');
var Clock = require('Clock');

describe('Clock', () => {
  it('should exists', () => {
    expect(Clock).toExist();
  });
});
