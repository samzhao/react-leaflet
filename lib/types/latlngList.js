"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _latlng = require("./latlng");

var _latlng2 = _interopRequireDefault(_latlng);

exports["default"] = _react2["default"].PropTypes.arrayOf(_latlng2["default"]);
module.exports = exports["default"];