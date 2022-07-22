var babelHelpers = require('./babel-helpers.js');
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _angular = babelHelpers.interopRequireDefault(require("angular"));

var formlib = _interopRequireWildcard(require("../js/lib/forms"));

var util = _interopRequireWildcard(require("../js/lib/util"));

var jqLite = _interopRequireWildcard(require("../js/lib/jqLite"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || babelHelpers.typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * MUI Angular Select Component
 * @module angular/select
 */
var moduleName = 'mui.option';

_angular.default.module(moduleName, []).directive('muiOption', function () {
  return {
    restrict: 'AE',
    replace: true,
    //require: '^muiSelect',
    scope: {
      label: '@',
      value: '@',
      ngDisabled: '='
    },
    template: '<option>{{label}}</option>',
    link: function link(scope, element, attrs, controller) {
      /*
      // register
      controller.addMenuItem({
        label: attrs.label,
        value: attrs.value,
        disabled: scope.ngDisabled,
        hidden: attrs.hidden
      });
       // destroy hook
      scope.$on('$destroy', function() {
        controller.removeMenuItem(attrs.value);
      });
      */
    }
  };
});
/** Define module API */


var _default = moduleName;
exports.default = _default;
module.exports = exports.default;