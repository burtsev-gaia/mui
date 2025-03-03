var babelHelpers = require('./babel-helpers.js');
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _angular = babelHelpers.interopRequireDefault(require("angular"));

var jqLite = _interopRequireWildcard(require("../js/lib/jqLite"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || babelHelpers.typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * MUI Angular Tabs Component
 * @module angular/tabs
 */
var moduleName = 'mui.tabs';

_angular.default.module(moduleName, []).directive('muiTabs', function () {
  return {
    restrict: 'EA',
    transclude: true,
    scope: {
      selectedId: '=?selected',
      onChange: '&?'
    },
    template: '' + '<ul ' + 'class="mui-tabs__bar" ' + 'ng-class=\'{"mui-tabs__bar--justified": justified}\'>' + '<li ' + 'ng-repeat="tab in tabs track by $index" ' + 'ng-class=\'{"mui--is-active": $index === selectedId}\'>' + '<a ng-click="onClick($index)">{{tab.label}}</a>' + '</li>' + '</ul>',
    controller: ['$scope', function ($scope) {
      var counter = 0; // init scope

      $scope.tabs = []; // add tab

      this.addTab = function (args) {
        // user counter for tab id
        var tabId = counter;
        counter += 1; // update tabs list

        $scope.tabs.push({
          label: args.label
        }); // handle active tabs

        if (args.isActive) $scope.selectedId = tabId; // return id

        return tabId;
      };
    }],
    link: function link(scope, element, attrs, ctrl, transcludeFn) {
      var isUndef = _angular.default.isUndefined; // init scope

      if (isUndef(scope.selectedId)) scope.selectedId = 0;
      scope.justified = false; // justified

      if (!isUndef(attrs.justified)) scope.justified = true; // click handler

      scope.onClick = function (tabId) {
        // check current tab
        if (tabId === scope.selectedId) return; // update active tab

        scope.selectedId = tabId; // execute onChange callback

        if (scope.onChange) scope.$$postDigest(scope.onChange);
      }; // use transcludeFn to pass ng-controller on parent element


      transcludeFn(scope, function (clone) {
        element.append(clone);
      });
    }
  };
}).directive('muiTab', ['$parse', function ($parse) {
  return {
    require: '^?muiTabs',
    restrict: 'AE',
    scope: {
      active: '&?',
      label: '@?'
    },
    transclude: true,
    template: '<div ' + 'class="mui-tabs__pane" ' + 'ng-class=\'{"mui--is-active": tabId === $parent.selectedId}\'></div>',
    link: function link(scope, element, attrs, ctrl, transcludeFn) {
      var onSelectFn = $parse(attrs.onSelect),
          onDeselectFn = $parse(attrs.onDeselect),
          origScope = scope.$parent.$parent; // init scope

      scope.tabId = null; // add to parent controller

      if (ctrl) {
        scope.tabId = ctrl.addTab({
          label: scope.label,
          isActive: Boolean(scope.active)
        });
      } // use transcludeFn to pass ng-controller on parent element


      transcludeFn(scope, function (clone) {
        element.find('div').append(clone);
      });
      scope.$parent.$watch('selectedId', function (newVal, oldVal) {
        // ignore initial load
        if (newVal === oldVal) return; // execute onSelect

        if (newVal === scope.tabId) onSelectFn(origScope); // execute onDeselect

        if (oldVal === scope.tabId) onDeselectFn(origScope);
      });
    }
  };
}]);
/** Define module API */


var _default = moduleName;
exports.default = _default;
module.exports = exports.default;