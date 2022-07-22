var babelHelpers = require('./babel-helpers.js');
/**
 * MUI React Col Component
 * @module react/col
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = babelHelpers.interopRequireDefault(require("react"));

var util = _interopRequireWildcard(require("../js/lib/util"));

var _excluded = ["children", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || babelHelpers.typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];
/**
 * Col constructor
 * @class
 */

var Col = /*#__PURE__*/function (_React$Component) {
  babelHelpers.inherits(Col, _React$Component);

  var _super = _createSuper(Col);

  function Col() {
    babelHelpers.classCallCheck(this, Col);
    return _super.apply(this, arguments);
  }

  babelHelpers.createClass(Col, [{
    key: "render",
    value: function render() {
      var cls = {},
          i,
          bk,
          val,
          baseCls;
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          reactProps = babelHelpers.objectWithoutProperties(_this$props, _excluded); // add mui-col classes

      for (i = breakpoints.length - 1; i > -1; i--) {
        bk = breakpoints[i];
        baseCls = 'mui-col-' + bk; // add mui-col-{bk}-{val}

        val = this.props[bk];
        if (val) cls[baseCls + '-' + val] = true; // add mui-col-{bk}-offset-{val}

        val = this.props[bk + '-offset'];
        if (val) cls[baseCls + '-offset-' + val] = true; // remove from reactProps

        delete reactProps[bk];
        delete reactProps[bk + '-offset'];
      }

      cls = util.classNames(cls);
      return /*#__PURE__*/_react.default.createElement("div", babelHelpers.extends({}, reactProps, {
        className: cls + ' ' + className
      }), children);
    }
  }]);
  return Col;
}(_react.default.Component);
/** Define module API */


babelHelpers.defineProperty(Col, "defaultProps", {
  className: '',
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null,
  'xs-offset': null,
  'sm-offset': null,
  'md-offset': null,
  'lg-offset': null,
  'xl-offset': null
});
var _default = Col;
exports.default = _default;
module.exports = exports.default;