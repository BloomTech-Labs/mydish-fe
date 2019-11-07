"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyleSheet = _interopRequireDefault(require("../StyleSheet"));

var _View = _interopRequireDefault(require("../View"));

var _ViewPropTypes = _interopRequireDefault(require("../ViewPropTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var SafeAreaView =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SafeAreaView, _React$Component);

  function SafeAreaView() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SafeAreaView.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        rest = _objectWithoutPropertiesLoose(_this$props, ["style"]);

    return _react.default.createElement(_View.default, _extends({}, rest, {
      style: _StyleSheet.default.compose(styles.root, style)
    }));
  };

  return SafeAreaView;
}(_react.default.Component);

SafeAreaView.displayName = 'SafeAreaView';
SafeAreaView.propTypes = process.env.NODE_ENV !== "production" ? _objectSpread({}, _ViewPropTypes.default) : {};

var styles = _StyleSheet.default.create({
  root: {
    paddingTop: 'env(safe-area-inset-top)',
    paddingRight: 'env(safe-area-inset-right)',
    paddingBottom: 'env(safe-area-inset-bottom)',
    paddingLeft: 'env(safe-area-inset-left)'
  }
});

var _default = SafeAreaView;
exports.default = _default;
module.exports = exports.default;