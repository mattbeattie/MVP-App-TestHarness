(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["common"],{

/***/ 6633:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 23150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 52954);
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ 97279);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 77330:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 52377);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 52954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 60408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 61269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 55913:
/*!*****************************************!*\
  !*** ./src/app/api/avclient.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvclientService": () => (/* binding */ AvclientService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_api_statuscode_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/statuscode.service */ 52413);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);





let AvclientService = class AvclientService {
    constructor(statuscodeService, alertctrl, route) {
        this.statuscodeService = statuscodeService;
        this.alertctrl = alertctrl;
        this.route = route;
    }
    purgeData() {
        delete this.cachedAccessCode;
    }
    assignServerUrl(bulletinBoardURL) {
        this.serverURL = bulletinBoardURL;
    }
    get serverurl() {
        return this.serverURL;
    }
    set serverurl(value) {
        this.serverURL = value;
    }
    status() {
        return this.statuscodeService.statusCode('Uninitialized');
    }
    requestAccessCode(opaqueVoterId) {
        return new Promise((resolve, reject) => {
            switch (opaqueVoterId) {
                case '00000':
                    reject(new Error(this.statuscodeService.statusCode('VoterRecordNotFound')));
                    break;
                case '00001':
                    reject(new Error(this.statuscodeService.statusCode('NetworkError')));
                    break;
                default:
                    resolve(true);
                    break;
            }
        });
    }
    // requestAccessCode(opaqueVoterId: string): Promise<void> {
    //   return new Promise((resolve, reject) => {
    //       switch(opaqueVoterId) {
    //     case '00000' || 'T0000':
    //         reject(new Error(this.statuscodeService.statusCode('VoterRecordNotFound')));
    //         break;
    //     case '0000' || 'T0001':
    //         reject(new Error(this.statuscodeService.statusCode('NetworkError')))
    //         break;
    //     default:
    //         resolve();
    //       }
    //   })
    // }
    validateAccessCode(code, email) {
        return new Promise((resolve, reject) => {
            this.cachedAccessCode = code;
            switch (code) {
                case '00002':
                    reject(new Error(this.statuscodeService.statusCode('CallOutOfOrderError')));
                    break;
                case '00003':
                    reject(new Error(this.statuscodeService.statusCode('AccessCodeExpired')));
                    break;
                case '00004':
                    reject(new Error(this.statuscodeService.statusCode('AccessCodeInvalid')));
                    break;
                case '00005':
                    reject(new Error(this.statuscodeService.statusCode('NetworkError')));
                    break;
                default:
                    resolve(true);
                    break;
            }
        });
    }
    // Should not be idempotent.  Instead, permute one of
    // john's sample strings.
    constructBallotCryptograms(cvr) {
        return new Promise((resolve, reject) => {
            switch (this.cachedAccessCode) {
                case '00006':
                    reject(new Error(this.statuscodeService.statusCode('CallOutOfOrderError')));
                    break;
                case '00007':
                    reject(new Error(this.statuscodeService.statusCode('NetworkError')));
                    break;
                case '00008':
                    reject(new Error(this.statuscodeService.statusCode('CorruptCVRError')));
                default:
                    resolve('zyx098-wvu765-tsr432-1234');
                    break;
            }
        });
    }
    spoilBallotCryptograms(code) {
        return new Promise((resolve, reject) => {
            switch (this.cachedAccessCode) {
                case '00009':
                    reject(new Error(this.statuscodeService.statusCode('CallOutOfOrderError')));
                case '00010':
                    reject(new Error(this.statuscodeService.statusCode('NetworkError')));
                case '00011':
                    reject(new Error(this.statuscodeService.statusCode('ServerCommitmentError')));
                default:
                    resolve(true);
            }
        });
    }
    submitBallotCryptograms(code) {
        return new Promise((resolve, reject) => {
            switch (this.cachedAccessCode) {
                case '00012':
                    reject(new Error(this.statuscodeService.statusCode('NetworkError')));
                case '00013':
                    reject(new Error(this.statuscodeService.statusCode('CallOutOfOrderError')));
                default:
                    resolve({
                        previousBoardHash: 'tsr432-wvu765-zyx098-4321',
                        boardHash: 'zyx098-wvu765-tsr432-1234',
                        registeredAt: '2020-03-01T10:00:00.000+01:00',
                        serverSignature: 'dbcce518142b8740a5c911f727f3c02829211a8ddfccabeb89297877e4198bc1,46826ddfccaac9ca105e39c8a2d015098479624c411b4783ca1a3600daf4e8fa',
                        voteSubmissionId: 6
                    });
            }
        });
    }
    generateTestCode() {
        return '5e4d8fe41fa3819cc064e2ace0eda8a847fe322594a6fd5a9a51c699e63804b7';
    }
    test(code) {
        this.purgeData();
        this.requestAccessCode(code);
        this.validateAccessCode(code, '');
        this.constructBallotCryptograms(code);
        this.spoilBallotCryptograms(code);
        this.constructBallotCryptograms(code);
        this.submitBallotCryptograms(code).then(receipt => {
            console.log(receipt);
        });
    }
    presentAlertEmpty(Error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertctrl.create({
                message: Error,
                buttons: [{
                        text: 'Okay',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => { }
                    }]
            });
            yield alert.present();
        });
    }
};
AvclientService.ctorParameters = () => [
    { type: src_app_api_statuscode_service__WEBPACK_IMPORTED_MODULE_0__.StatuscodeService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AvclientService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AvclientService);



/***/ }),

/***/ 52413:
/*!*******************************************!*\
  !*** ./src/app/api/statuscode.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatuscodeService": () => (/* binding */ StatuscodeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let StatuscodeService = class StatuscodeService {
    constructor() { }
    statusCode(statusCode) {
        const statusCodes = {
            VoterRecordNotFound: 'voter record not found',
            NetworkError: 'network code',
            CallOutOfOrderError: 'call out of order error',
            AccessCodeExpired: 'access code expired',
            AccessCodeInvalid: 'access code invalid',
            CorruptCVRError: 'corrupt CVR',
            ServerCommitmentError: 'server commitment error',
            Initialized: 'initialized',
            Uninitialized: 'uninitialized',
            OK: 'ok',
        };
        if (statusCode == 'VoterRecordNotFound') {
            const errorCode = 'voter record not found';
            return errorCode;
        }
        else if (statusCode == 'NetworkError') {
            const errorCode = 'network code';
            return errorCode;
        }
        else if (statusCode == 'CallOutOfOrderError') {
            const errorCode = 'call out of order error';
            return errorCode;
        }
        else if (statusCode == 'AccessCodeExpired') {
            const errorCode = 'access code expired';
            return errorCode;
        }
        else if (statusCode == 'AccessCodeInvalid') {
            const errorCode = 'access code invalid';
            return errorCode;
        }
        else if (statusCode == 'CorruptCVRError') {
            const errorCode = 'corrupt CVR';
            return errorCode;
        }
        else if (statusCode == 'ServerCommitmentError') {
            const errorCode = 'server commitment error';
            return errorCode;
        }
        else if (statusCode == 'Initialized') {
            const errorCode = 'initialized';
            return errorCode;
        }
        else if (statusCode == 'Uninitialized') {
            const errorCode = 'uninitialized';
            return errorCode;
        }
        else if (statusCode == 'OK') {
            const errorCode = 'ok';
            return errorCode;
        }
    }
};
StatuscodeService.ctorParameters = () => [];
StatuscodeService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], StatuscodeService);



/***/ })

}]);
//# sourceMappingURL=common.js.map