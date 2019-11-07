/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule NativeEventEmitter
 * 
 */
'use strict';

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import EventEmitter from '../emitter/EventEmitter';
import Platform from '../../../exports/Platform';
import invariant from 'fbjs/lib/invariant';

/**
 * Abstract base class for implementing event-emitting modules. This implements
 * a subset of the standard EventEmitter node module API.
 */
var NativeEventEmitter =
/*#__PURE__*/
function (_EventEmitter) {
  _inheritsLoose(NativeEventEmitter, _EventEmitter);

  function NativeEventEmitter(nativeModule) {
    var _this;

    _this = _EventEmitter.call(this) || this;

    if (Platform.OS === 'ios') {
      invariant(nativeModule, 'Native module cannot be null.');
      _this._nativeModule = nativeModule;
    }

    return _this;
  }

  var _proto = NativeEventEmitter.prototype;

  _proto.addListener = function addListener(eventType, listener, context) {
    if (this._nativeModule != null) {
      this._nativeModule.addListener(eventType);
    }

    return _EventEmitter.prototype.addListener.call(this, eventType, listener, context);
  };

  _proto.removeAllListeners = function removeAllListeners(eventType) {
    invariant(eventType, 'eventType argument is required.');
    var count = this.listeners(eventType).length;

    if (this._nativeModule != null) {
      this._nativeModule.removeListeners(count);
    }

    _EventEmitter.prototype.removeAllListeners.call(this, eventType);
  };

  _proto.removeSubscription = function removeSubscription(subscription) {
    if (this._nativeModule != null) {
      this._nativeModule.removeListeners(1);
    }

    _EventEmitter.prototype.removeSubscription.call(this, subscription);
  };

  return NativeEventEmitter;
}(EventEmitter);

export default NativeEventEmitter;