var babelHelpers = require('./babel-helpers.js');
/**
 * MUI React Textarea Component
 * @module react/textarea
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = babelHelpers.interopRequireDefault(require("react"));

var _textfieldHelpers = require("./_textfieldHelpers");

var _excluded = ["inputRef"];

/**
 * Textarea constructor
 * @class
 */
var Textarea = (0, _textfieldHelpers.textfieldWrapper)(function (props) {
  var inputRef = props.inputRef,
      rest = babelHelpers.objectWithoutProperties(props, _excluded); // default number of rows

  if (!'rows' in rest) rest.rows = 2;
  return /*#__PURE__*/_react.default.createElement("textarea", babelHelpers.extends({
    ref: inputRef
  }, rest));
});
var _default = Textarea;
exports.default = _default;
module.exports = exports.default;