var babelHelpers = require('./babel-helpers.js');
/**
 * MUI React dropdowns module
 * @module react/dropdowns
 */

/* jshint quotmark:false */
// jscs:disable validateQuoteMarks
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = babelHelpers.interopRequireDefault(require("react"));

var util = _interopRequireWildcard(require("../js/lib/util"));

var _excluded = ["children", "link", "target", "value", "onClick"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || babelHelpers.typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * DropdownItem constructor
 * @class
 */
var DropdownItem = /*#__PURE__*/function (_React$Component) {
  babelHelpers.inherits(DropdownItem, _React$Component);

  var _super = _createSuper(DropdownItem);

  function DropdownItem() {
    babelHelpers.classCallCheck(this, DropdownItem);
    return _super.apply(this, arguments);
  }

  babelHelpers.createClass(DropdownItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          link = _this$props.link,
          target = _this$props.target,
          value = _this$props.value,
          onClick = _this$props.onClick,
          reactProps = babelHelpers.objectWithoutProperties(_this$props, _excluded);
      return /*#__PURE__*/_react.default.createElement("li", reactProps, /*#__PURE__*/_react.default.createElement("a", {
        href: link,
        target: target,
        "data-mui-value": value,
        onClick: onClick
      }, children));
    }
  }]);
  return DropdownItem;
}(_react.default.Component);
/** Define module API */


var _default = DropdownItem;
exports.default = _default;
module.exports = exports.default;