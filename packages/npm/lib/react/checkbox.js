var babelHelpers = require('./babel-helpers.js');
/**
 * MUI React checkbox module
 * @module react/checkbox
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = babelHelpers.interopRequireDefault(require("react"));

var util = _interopRequireWildcard(require("../js/lib/util"));

var _helpers = require("./_helpers");

var _excluded = ["children", "className", "label", "autoFocus", "checked", "defaultChecked", "defaultValue", "disabled", "form", "name", "required", "value", "onChange"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || babelHelpers.typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Checkbox constructor
 * @class
 */
var Checkbox = /*#__PURE__*/function (_React$Component) {
  babelHelpers.inherits(Checkbox, _React$Component);

  var _super = _createSuper(Checkbox);

  function Checkbox() {
    babelHelpers.classCallCheck(this, Checkbox);
    return _super.apply(this, arguments);
  }

  babelHelpers.createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          label = _this$props.label,
          autoFocus = _this$props.autoFocus,
          checked = _this$props.checked,
          defaultChecked = _this$props.defaultChecked,
          defaultValue = _this$props.defaultValue,
          disabled = _this$props.disabled,
          form = _this$props.form,
          name = _this$props.name,
          required = _this$props.required,
          value = _this$props.value,
          onChange = _this$props.onChange,
          reactProps = babelHelpers.objectWithoutProperties(_this$props, _excluded);
      return /*#__PURE__*/_react.default.createElement("div", babelHelpers.extends({}, reactProps, {
        className: 'mui-checkbox ' + className
      }), /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
        ref: function ref(el) {
          _this.controlEl = el;
        },
        type: "checkbox",
        autoFocus: autoFocus,
        checked: checked,
        defaultChecked: defaultChecked,
        defaultValue: defaultValue,
        disabled: disabled,
        form: form,
        name: name,
        required: required,
        value: value,
        onChange: onChange
      }), label));
    }
  }]);
  return Checkbox;
}(_react.default.Component);
/** Define module API */


babelHelpers.defineProperty(Checkbox, "defaultProps", {
  className: '',
  label: null
});
var _default = Checkbox;
exports.default = _default;
module.exports = exports.default;