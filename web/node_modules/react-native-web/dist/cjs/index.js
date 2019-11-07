"use strict";

exports.__esModule = true;
exports.default = exports.VibrationIOS = exports.TVEventHandler = exports.TimePickerAndroid = exports.Systrace = exports.StatusBarIOS = exports.Settings = exports.PushNotificationIOS = exports.PermissionsAndroid = exports.ImagePickerIOS = exports.DatePickerAndroid = exports.CameraRoll = exports.AlertIOS = exports.ActionSheetIOS = exports.WebView = exports.ViewPagerAndroid = exports.ToolbarAndroid = exports.ToastAndroid = exports.TabBarIOS = exports.SnapshotViewIOS = exports.SegmentedControlIOS = exports.ProgressViewIOS = exports.ProgressBarAndroid = exports.PickerIOS = exports.NavigatorIOS = exports.MaskedViewIOS = exports.InputAccessoryView = exports.ImageStore = exports.ImageEditor = exports.DrawerLayoutAndroid = exports.DatePickerIOS = void 0;

var _UnimplementedView = _interopRequireDefault(require("./modules/UnimplementedView"));

var _createElement = _interopRequireDefault(require("./exports/createElement"));

exports.createElement = _createElement.default;

var _findNodeHandle = _interopRequireDefault(require("./exports/findNodeHandle"));

exports.findNodeHandle = _findNodeHandle.default;

var _processColor = _interopRequireDefault(require("./exports/processColor"));

exports.processColor = _processColor.default;

var _render = _interopRequireDefault(require("./exports/render"));

exports.render = _render.default;

var _unmountComponentAtNode = _interopRequireDefault(require("./exports/unmountComponentAtNode"));

exports.unmountComponentAtNode = _unmountComponentAtNode.default;

var _NativeModules = _interopRequireDefault(require("./exports/NativeModules"));

exports.NativeModules = _NativeModules.default;

var _TextPropTypes = _interopRequireDefault(require("./exports/TextPropTypes"));

exports.TextPropTypes = _TextPropTypes.default;

var _ViewPropTypes = _interopRequireDefault(require("./exports/ViewPropTypes"));

exports.ViewPropTypes = _ViewPropTypes.default;

var _AccessibilityInfo = _interopRequireDefault(require("./exports/AccessibilityInfo"));

exports.AccessibilityInfo = _AccessibilityInfo.default;

var _Alert = _interopRequireDefault(require("./exports/Alert"));

exports.Alert = _Alert.default;

var _Animated = _interopRequireDefault(require("./exports/Animated"));

exports.Animated = _Animated.default;

var _AppRegistry = _interopRequireDefault(require("./exports/AppRegistry"));

exports.AppRegistry = _AppRegistry.default;

var _AppState = _interopRequireDefault(require("./exports/AppState"));

exports.AppState = _AppState.default;

var _AsyncStorage = _interopRequireDefault(require("./exports/AsyncStorage"));

exports.AsyncStorage = _AsyncStorage.default;

var _BackHandler = _interopRequireDefault(require("./exports/BackHandler"));

exports.BackHandler = _BackHandler.default;

var _Clipboard = _interopRequireDefault(require("./exports/Clipboard"));

exports.Clipboard = _Clipboard.default;

var _DeviceInfo = _interopRequireDefault(require("./exports/DeviceInfo"));

exports.DeviceInfo = _DeviceInfo.default;

var _Dimensions = _interopRequireDefault(require("./exports/Dimensions"));

exports.Dimensions = _Dimensions.default;

var _Easing = _interopRequireDefault(require("./exports/Easing"));

exports.Easing = _Easing.default;

var _I18nManager = _interopRequireDefault(require("./exports/I18nManager"));

exports.I18nManager = _I18nManager.default;

var _Keyboard = _interopRequireDefault(require("./exports/Keyboard"));

exports.Keyboard = _Keyboard.default;

var _InteractionManager = _interopRequireDefault(require("./exports/InteractionManager"));

exports.InteractionManager = _InteractionManager.default;

var _LayoutAnimation = _interopRequireDefault(require("./exports/LayoutAnimation"));

exports.LayoutAnimation = _LayoutAnimation.default;

var _Linking = _interopRequireDefault(require("./exports/Linking"));

exports.Linking = _Linking.default;

var _NativeEventEmitter = _interopRequireDefault(require("./exports/NativeEventEmitter"));

exports.NativeEventEmitter = _NativeEventEmitter.default;

var _NetInfo = _interopRequireDefault(require("./exports/NetInfo"));

exports.NetInfo = _NetInfo.default;

var _PanResponder = _interopRequireDefault(require("./exports/PanResponder"));

exports.PanResponder = _PanResponder.default;

var _PixelRatio = _interopRequireDefault(require("./exports/PixelRatio"));

exports.PixelRatio = _PixelRatio.default;

var _Platform = _interopRequireDefault(require("./exports/Platform"));

exports.Platform = _Platform.default;

var _Share = _interopRequireDefault(require("./exports/Share"));

exports.Share = _Share.default;

var _StyleSheet = _interopRequireDefault(require("./exports/StyleSheet"));

exports.StyleSheet = _StyleSheet.default;

var _UIManager = _interopRequireDefault(require("./exports/UIManager"));

exports.UIManager = _UIManager.default;

var _Vibration = _interopRequireDefault(require("./exports/Vibration"));

exports.Vibration = _Vibration.default;

var _ActivityIndicator = _interopRequireDefault(require("./exports/ActivityIndicator"));

exports.ActivityIndicator = _ActivityIndicator.default;

var _ART = _interopRequireDefault(require("./exports/ART"));

exports.ART = _ART.default;

var _Button = _interopRequireDefault(require("./exports/Button"));

exports.Button = _Button.default;

var _CheckBox = _interopRequireDefault(require("./exports/CheckBox"));

exports.CheckBox = _CheckBox.default;

var _FlatList = _interopRequireDefault(require("./exports/FlatList"));

exports.FlatList = _FlatList.default;

var _Image = _interopRequireDefault(require("./exports/Image"));

exports.Image = _Image.default;

var _ImageBackground = _interopRequireDefault(require("./exports/ImageBackground"));

exports.ImageBackground = _ImageBackground.default;

var _KeyboardAvoidingView = _interopRequireDefault(require("./exports/KeyboardAvoidingView"));

exports.KeyboardAvoidingView = _KeyboardAvoidingView.default;

var _ListView = _interopRequireDefault(require("./exports/ListView"));

exports.ListView = _ListView.default;

var _Modal = _interopRequireDefault(require("./exports/Modal"));

exports.Modal = _Modal.default;

var _Picker = _interopRequireDefault(require("./exports/Picker"));

exports.Picker = _Picker.default;

var _ProgressBar = _interopRequireDefault(require("./exports/ProgressBar"));

exports.ProgressBar = _ProgressBar.default;

var _RefreshControl = _interopRequireDefault(require("./exports/RefreshControl"));

exports.RefreshControl = _RefreshControl.default;

var _SafeAreaView = _interopRequireDefault(require("./exports/SafeAreaView"));

exports.SafeAreaView = _SafeAreaView.default;

var _ScrollView = _interopRequireDefault(require("./exports/ScrollView"));

exports.ScrollView = _ScrollView.default;

var _SectionList = _interopRequireDefault(require("./exports/SectionList"));

exports.SectionList = _SectionList.default;

var _Slider = _interopRequireDefault(require("./exports/Slider"));

exports.Slider = _Slider.default;

var _StatusBar = _interopRequireDefault(require("./exports/StatusBar"));

exports.StatusBar = _StatusBar.default;

var _SwipeableFlatList = _interopRequireDefault(require("./exports/SwipeableFlatList"));

exports.SwipeableFlatList = _SwipeableFlatList.default;

var _SwipeableListView = _interopRequireDefault(require("./exports/SwipeableListView"));

exports.SwipeableListView = _SwipeableListView.default;

var _Switch = _interopRequireDefault(require("./exports/Switch"));

exports.Switch = _Switch.default;

var _Text = _interopRequireDefault(require("./exports/Text"));

exports.Text = _Text.default;

var _TextInput = _interopRequireDefault(require("./exports/TextInput"));

exports.TextInput = _TextInput.default;

var _Touchable = _interopRequireDefault(require("./exports/Touchable"));

exports.Touchable = _Touchable.default;

var _TouchableHighlight = _interopRequireDefault(require("./exports/TouchableHighlight"));

exports.TouchableHighlight = _TouchableHighlight.default;

var _TouchableNativeFeedback = _interopRequireDefault(require("./exports/TouchableNativeFeedback"));

exports.TouchableNativeFeedback = _TouchableNativeFeedback.default;

var _TouchableOpacity = _interopRequireDefault(require("./exports/TouchableOpacity"));

exports.TouchableOpacity = _TouchableOpacity.default;

var _TouchableWithoutFeedback = _interopRequireDefault(require("./exports/TouchableWithoutFeedback"));

exports.TouchableWithoutFeedback = _TouchableWithoutFeedback.default;

var _View = _interopRequireDefault(require("./exports/View"));

exports.View = _View.default;

var _VirtualizedList = _interopRequireDefault(require("./exports/VirtualizedList"));

exports.VirtualizedList = _VirtualizedList.default;

var _YellowBox = _interopRequireDefault(require("./exports/YellowBox"));

exports.YellowBox = _YellowBox.default;

var _ColorPropType = _interopRequireDefault(require("./exports/ColorPropType"));

exports.ColorPropType = _ColorPropType.default;

var _EdgeInsetsPropType = _interopRequireDefault(require("./exports/EdgeInsetsPropType"));

exports.EdgeInsetsPropType = _EdgeInsetsPropType.default;

var _PointPropType = _interopRequireDefault(require("./exports/PointPropType"));

exports.PointPropType = _PointPropType.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// APIs
// components
// propTypes
var emptyObject = {}; // compat (components)

var DatePickerIOS = _UnimplementedView.default;
exports.DatePickerIOS = DatePickerIOS;
var DrawerLayoutAndroid = _UnimplementedView.default;
exports.DrawerLayoutAndroid = DrawerLayoutAndroid;
var ImageEditor = _UnimplementedView.default;
exports.ImageEditor = ImageEditor;
var ImageStore = _UnimplementedView.default;
exports.ImageStore = ImageStore;
var InputAccessoryView = _UnimplementedView.default;
exports.InputAccessoryView = InputAccessoryView;
var MaskedViewIOS = _UnimplementedView.default;
exports.MaskedViewIOS = MaskedViewIOS;
var NavigatorIOS = _UnimplementedView.default;
exports.NavigatorIOS = NavigatorIOS;
var PickerIOS = _Picker.default;
exports.PickerIOS = PickerIOS;
var ProgressBarAndroid = _UnimplementedView.default;
exports.ProgressBarAndroid = ProgressBarAndroid;
var ProgressViewIOS = _UnimplementedView.default;
exports.ProgressViewIOS = ProgressViewIOS;
var SegmentedControlIOS = _UnimplementedView.default;
exports.SegmentedControlIOS = SegmentedControlIOS;
var SnapshotViewIOS = _UnimplementedView.default;
exports.SnapshotViewIOS = SnapshotViewIOS;
var TabBarIOS = _UnimplementedView.default;
exports.TabBarIOS = TabBarIOS;
var ToastAndroid = _UnimplementedView.default;
exports.ToastAndroid = ToastAndroid;
var ToolbarAndroid = _UnimplementedView.default;
exports.ToolbarAndroid = ToolbarAndroid;
var ViewPagerAndroid = _UnimplementedView.default;
exports.ViewPagerAndroid = ViewPagerAndroid;
var WebView = _UnimplementedView.default; // compat (apis)

exports.WebView = WebView;
var ActionSheetIOS = emptyObject;
exports.ActionSheetIOS = ActionSheetIOS;
var AlertIOS = emptyObject;
exports.AlertIOS = AlertIOS;
var CameraRoll = emptyObject;
exports.CameraRoll = CameraRoll;
var DatePickerAndroid = emptyObject;
exports.DatePickerAndroid = DatePickerAndroid;
var ImagePickerIOS = emptyObject;
exports.ImagePickerIOS = ImagePickerIOS;
var PermissionsAndroid = emptyObject;
exports.PermissionsAndroid = PermissionsAndroid;
var PushNotificationIOS = emptyObject;
exports.PushNotificationIOS = PushNotificationIOS;
var Settings = emptyObject;
exports.Settings = Settings;
var StatusBarIOS = emptyObject;
exports.StatusBarIOS = StatusBarIOS;
var Systrace = emptyObject;
exports.Systrace = Systrace;
var TimePickerAndroid = emptyObject;
exports.TimePickerAndroid = TimePickerAndroid;
var TVEventHandler = emptyObject;
exports.TVEventHandler = TVEventHandler;
var VibrationIOS = emptyObject;
exports.VibrationIOS = VibrationIOS;
var ReactNative = {
  // top-level API
  createElement: _createElement.default,
  findNodeHandle: _findNodeHandle.default,
  render: _render.default,
  unmountComponentAtNode: _unmountComponentAtNode.default,
  // modules
  processColor: _processColor.default,
  NativeModules: _NativeModules.default,
  TextPropTypes: _TextPropTypes.default,
  ViewPropTypes: _ViewPropTypes.default,
  // APIs
  AccessibilityInfo: _AccessibilityInfo.default,
  Alert: _Alert.default,
  Animated: _Animated.default,
  AppRegistry: _AppRegistry.default,
  AppState: _AppState.default,
  AsyncStorage: _AsyncStorage.default,
  BackHandler: _BackHandler.default,
  Clipboard: _Clipboard.default,
  DeviceInfo: _DeviceInfo.default,
  Dimensions: _Dimensions.default,
  Easing: _Easing.default,
  I18nManager: _I18nManager.default,
  InteractionManager: _InteractionManager.default,
  Keyboard: _Keyboard.default,
  LayoutAnimation: _LayoutAnimation.default,
  Linking: _Linking.default,
  NativeEventEmitter: _NativeEventEmitter.default,
  NetInfo: _NetInfo.default,
  PanResponder: _PanResponder.default,
  PixelRatio: _PixelRatio.default,
  Platform: _Platform.default,
  Share: _Share.default,
  StyleSheet: _StyleSheet.default,
  UIManager: _UIManager.default,
  Vibration: _Vibration.default,
  // components
  ActivityIndicator: _ActivityIndicator.default,
  ART: _ART.default,
  Button: _Button.default,
  CheckBox: _CheckBox.default,
  FlatList: _FlatList.default,
  Image: _Image.default,
  ImageBackground: _ImageBackground.default,
  KeyboardAvoidingView: _KeyboardAvoidingView.default,
  ListView: _ListView.default,
  Modal: _Modal.default,
  Picker: _Picker.default,
  ProgressBar: _ProgressBar.default,
  RefreshControl: _RefreshControl.default,
  SafeAreaView: _SafeAreaView.default,
  ScrollView: _ScrollView.default,
  SectionList: _SectionList.default,
  Slider: _Slider.default,
  StatusBar: _StatusBar.default,
  SwipeableFlatList: _SwipeableFlatList.default,
  SwipeableListView: _SwipeableListView.default,
  Switch: _Switch.default,
  Text: _Text.default,
  TextInput: _TextInput.default,
  Touchable: _Touchable.default,
  TouchableHighlight: _TouchableHighlight.default,
  TouchableNativeFeedback: _TouchableNativeFeedback.default,
  TouchableOpacity: _TouchableOpacity.default,
  TouchableWithoutFeedback: _TouchableWithoutFeedback.default,
  View: _View.default,
  VirtualizedList: _VirtualizedList.default,
  YellowBox: _YellowBox.default,
  // propTypes
  ColorPropType: _ColorPropType.default,
  EdgeInsetsPropType: _EdgeInsetsPropType.default,
  PointPropType: _PointPropType.default,
  // compat (components)
  DatePickerIOS: DatePickerIOS,
  DrawerLayoutAndroid: DrawerLayoutAndroid,
  ImageEditor: ImageEditor,
  ImageStore: ImageStore,
  InputAccessoryView: InputAccessoryView,
  MaskedViewIOS: MaskedViewIOS,
  NavigatorIOS: NavigatorIOS,
  PickerIOS: PickerIOS,
  ProgressBarAndroid: ProgressBarAndroid,
  ProgressViewIOS: ProgressViewIOS,
  SegmentedControlIOS: SegmentedControlIOS,
  SnapshotViewIOS: SnapshotViewIOS,
  TabBarIOS: TabBarIOS,
  ToastAndroid: ToastAndroid,
  ToolbarAndroid: ToolbarAndroid,
  ViewPagerAndroid: ViewPagerAndroid,
  WebView: WebView,
  // compat (apis)
  ActionSheetIOS: ActionSheetIOS,
  AlertIOS: AlertIOS,
  CameraRoll: CameraRoll,
  DatePickerAndroid: DatePickerAndroid,
  ImagePickerIOS: ImagePickerIOS,
  PermissionsAndroid: PermissionsAndroid,
  PushNotificationIOS: PushNotificationIOS,
  Settings: Settings,
  StatusBarIOS: StatusBarIOS,
  Systrace: Systrace,
  TimePickerAndroid: TimePickerAndroid,
  TVEventHandler: TVEventHandler,
  VibrationIOS: VibrationIOS
};
var _default = ReactNative;
exports.default = _default;