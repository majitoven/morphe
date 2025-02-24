"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-scroll-parallax";
exports.ids = ["vendor-chunks/react-scroll-parallax"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-scroll-parallax/dist/react-scroll-parallax.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-scroll-parallax/dist/react-scroll-parallax.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EasingPreset: () => (/* reexport safe */ parallax_controller__WEBPACK_IMPORTED_MODULE_0__.EasingPreset),\n/* harmony export */   Parallax: () => (/* binding */ Parallax),\n/* harmony export */   ParallaxBanner: () => (/* binding */ ParallaxBanner),\n/* harmony export */   ParallaxBannerLayer: () => (/* binding */ ParallaxBannerLayer),\n/* harmony export */   ParallaxContext: () => (/* binding */ ParallaxContext),\n/* harmony export */   ParallaxProvider: () => (/* binding */ ParallaxProvider),\n/* harmony export */   useParallax: () => (/* binding */ useParallax),\n/* harmony export */   useParallaxController: () => (/* binding */ useParallaxController)\n/* harmony export */ });\n/* harmony import */ var parallax_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parallax-controller */ \"(ssr)/./node_modules/parallax-controller/dist/parallax-controller.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\nfunction removeUndefinedObjectKeys(obj) {\n  Object.keys(obj).forEach(function (key) {\n    return obj[key] === undefined && delete obj[key];\n  });\n  return obj;\n}\n\nvar _excluded = [\"disabled\", \"easing\", \"endScroll\", \"onChange\", \"onEnter\", \"onExit\", \"onProgressChange\", \"opacity\", \"rootMargin\", \"rotate\", \"rotateX\", \"rotateY\", \"rotateZ\", \"scale\", \"scaleX\", \"scaleY\", \"scaleZ\", \"shouldAlwaysCompleteAnimation\", \"shouldDisableScalingTranslations\", \"speed\", \"startScroll\", \"targetElement\", \"translateX\", \"translateY\"];\nfunction getIsolatedParallaxProps(props) {\n  var disabled = props.disabled,\n      easing = props.easing,\n      endScroll = props.endScroll,\n      onChange = props.onChange,\n      onEnter = props.onEnter,\n      onExit = props.onExit,\n      onProgressChange = props.onProgressChange,\n      opacity = props.opacity,\n      rootMargin = props.rootMargin,\n      rotate = props.rotate,\n      rotateX = props.rotateX,\n      rotateY = props.rotateY,\n      rotateZ = props.rotateZ,\n      scale = props.scale,\n      scaleX = props.scaleX,\n      scaleY = props.scaleY,\n      scaleZ = props.scaleZ,\n      shouldAlwaysCompleteAnimation = props.shouldAlwaysCompleteAnimation,\n      shouldDisableScalingTranslations = props.shouldDisableScalingTranslations,\n      speed = props.speed,\n      startScroll = props.startScroll,\n      targetElement = props.targetElement,\n      translateX = props.translateX,\n      translateY = props.translateY,\n      rest = _objectWithoutPropertiesLoose(props, _excluded);\n\n  var parallaxProps = removeUndefinedObjectKeys({\n    disabled: disabled,\n    easing: easing,\n    endScroll: endScroll,\n    onChange: onChange,\n    onEnter: onEnter,\n    onExit: onExit,\n    onProgressChange: onProgressChange,\n    opacity: opacity,\n    rootMargin: rootMargin,\n    rotate: rotate,\n    rotateX: rotateX,\n    rotateY: rotateY,\n    rotateZ: rotateZ,\n    scale: scale,\n    scaleX: scaleX,\n    scaleY: scaleY,\n    scaleZ: scaleZ,\n    shouldAlwaysCompleteAnimation: shouldAlwaysCompleteAnimation,\n    shouldDisableScalingTranslations: shouldDisableScalingTranslations,\n    speed: speed,\n    startScroll: startScroll,\n    targetElement: targetElement,\n    translateX: translateX,\n    translateY: translateY\n  });\n  return {\n    parallaxProps: parallaxProps,\n    rest: rest\n  };\n}\n\nfunction useVerifyController(controller) {\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var isServer = typeof window === 'undefined'; // Make sure the provided controller is an instance of the Parallax Controller\n\n    var isInstance = controller instanceof parallax_controller__WEBPACK_IMPORTED_MODULE_0__.ParallaxController; // Throw if neither context or global is available\n\n    if (!isServer && !controller && !isInstance) {\n      throw new Error(\"Must wrap your application's <Parallax /> components in a <ParallaxProvider />.\");\n    }\n  }, [controller]);\n}\n\nvar ParallaxContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext(null);\n\nfunction useParallaxController() {\n  var parallaxController = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ParallaxContext);\n  var isServer = typeof window === 'undefined';\n\n  if (isServer) {\n    return null;\n  }\n\n  if (!parallaxController) {\n    throw new Error('Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>');\n  }\n\n  return parallaxController;\n}\n\nfunction useParallax(props) {\n  var controller = useParallaxController();\n  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  var _getIsolatedParallaxP = getIsolatedParallaxProps(props),\n      parallaxProps = _getIsolatedParallaxP.parallaxProps;\n\n  useVerifyController(controller);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),\n      element = _useState[0],\n      setElement = _useState[1]; // create element\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var newElement;\n\n    if (ref.current instanceof HTMLElement) {\n      var options = {\n        el: ref.current,\n        props: parallaxProps\n      };\n      newElement = controller == null ? void 0 : controller.createElement(options);\n      setElement(newElement);\n    } else {\n      throw new Error('You must assign the ref returned by the useParallax() hook to an HTML Element.');\n    }\n\n    return function () {\n      if (newElement) {\n        controller == null ? void 0 : controller.removeElementById(newElement.id);\n      }\n    };\n  }, []); // update element\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (element) {\n      if (props.disabled) {\n        controller == null ? void 0 : controller.resetElementStyles(element);\n        controller == null ? void 0 : controller.updateElementPropsById(element.id, parallaxProps);\n      } else {\n        controller == null ? void 0 : controller.updateElementPropsById(element.id, parallaxProps);\n      }\n    }\n  }, [props.disabled, props.easing, props.endScroll, props.onChange, props.onEnter, props.onExit, props.onProgressChange, props.opacity, props.rootMargin, props.rotate, props.rotateX, props.rotateY, props.rotateZ, props.scale, props.scaleX, props.scaleY, props.scaleZ, props.shouldAlwaysCompleteAnimation, props.shouldDisableScalingTranslations, props.speed, props.startScroll, props.targetElement, props.translateX, props.translateY]);\n  return {\n    ref: ref,\n    controller: controller,\n    element: element\n  };\n}\n\nfunction Parallax(props) {\n  var _getIsolatedParallaxP = getIsolatedParallaxProps(props),\n      parallaxProps = _getIsolatedParallaxP.parallaxProps,\n      rest = _getIsolatedParallaxP.rest;\n\n  var _useParallax = useParallax(parallaxProps),\n      ref = _useParallax.ref;\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", Object.assign({\n    ref: ref\n  }, rest), props.children);\n}\n\nvar FALLBACK_RECT = {\n  height: 0\n};\nfunction getExpandedStyle(layer) {\n  if (Array.isArray(layer.translateY)) {\n    var translateYStart = (0,parallax_controller__WEBPACK_IMPORTED_MODULE_0__.parseValueAndUnit)(layer.translateY[0]);\n    var translateYEnd = (0,parallax_controller__WEBPACK_IMPORTED_MODULE_0__.parseValueAndUnit)(layer.translateY[1]);\n\n    if (translateYStart.unit === 'px' && translateYEnd.unit === 'px') {\n      return {\n        top: Math.abs(translateYEnd.value) * -1 + \"px\",\n        bottom: Math.abs(translateYStart.value) * -1 + \"px\"\n      };\n    }\n\n    if (translateYStart.unit === '%' && translateYEnd.unit === '%') {\n      var _layer$targetElement$, _layer$targetElement;\n\n      var clientRect = (_layer$targetElement$ = (_layer$targetElement = layer.targetElement) == null ? void 0 : _layer$targetElement.getBoundingClientRect()) != null ? _layer$targetElement$ : FALLBACK_RECT;\n      var top = Math.abs(clientRect.height * 0.01 * translateYEnd.value) * -1;\n      var bottom = Math.abs(clientRect.height * 0.01 * translateYStart.value) * -1;\n      return {\n        top: top + \"px\",\n        bottom: bottom + \"px\"\n      };\n    }\n  }\n\n  if (layer.speed) {\n    var speed = layer.speed || 0;\n    var absSpeed = Math.abs(speed) * 10 * -1;\n    return {\n      top: absSpeed + \"px\",\n      bottom: absSpeed + \"px\"\n    };\n  }\n\n  return {};\n}\n\nfunction getImageStyle(layer) {\n  return layer.image ? {\n    backgroundImage: \"url(\" + layer.image + \")\",\n    backgroundPosition: 'center',\n    backgroundSize: 'cover'\n  } : {};\n}\n\nvar _excluded$1 = [\"children\", \"disabled\", \"style\", \"expanded\", \"image\", \"testId\"];\nvar absoluteStyle = {\n  position: 'absolute',\n  top: 0,\n  left: 0,\n  right: 0,\n  bottom: 0\n};\nvar ParallaxBannerLayer = function ParallaxBannerLayer(props) {\n  var _getIsolatedParallaxP = getIsolatedParallaxProps(props),\n      parallaxProps = _getIsolatedParallaxP.parallaxProps,\n      rest = _getIsolatedParallaxP.rest;\n\n  var style = rest.style,\n      _rest$expanded = rest.expanded,\n      expanded = _rest$expanded === void 0 ? true : _rest$expanded,\n      testId = rest.testId,\n      divProps = _objectWithoutPropertiesLoose(rest, _excluded$1);\n\n  var imageStyle = getImageStyle(props);\n  var expandedStyle = expanded ? getExpandedStyle(props) : {};\n  var parallax = useParallax(_extends({\n    targetElement: props.targetElement,\n    shouldDisableScalingTranslations: true\n  }, parallaxProps));\n  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", Object.assign({\n    \"data-testid\": testId,\n    ref: parallax.ref,\n    style: _extends({}, imageStyle, absoluteStyle, expandedStyle, style)\n  }, divProps), rest.children);\n};\n\nvar _excluded$2 = [\"disabled\", \"style\", \"layers\"];\nvar containerStyle = {\n  position: 'relative',\n  overflow: 'hidden',\n  width: '100%'\n};\nvar ParallaxBanner = function ParallaxBanner(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      targetElement = _useState[0],\n      setTargetElement = _useState[1];\n\n  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setTargetElement(containerRef.current);\n  }, []);\n\n  var rootStyle = props.style,\n      _props$layers = props.layers,\n      layers = _props$layers === void 0 ? [] : _props$layers,\n      rootRest = _objectWithoutPropertiesLoose(props, _excluded$2);\n\n  function renderLayers() {\n    if (targetElement) {\n      var shouldUseLayers = layers && layers.length > 0;\n\n      if (shouldUseLayers) {\n        return layers.map(function (layer, i) {\n          return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ParallaxBannerLayer, Object.assign({}, layer, {\n            targetElement: targetElement,\n            key: \"layer-\" + i,\n            testId: \"layer-\" + i\n          }));\n        });\n      }\n    }\n\n    return null;\n  }\n\n  function renderChildren() {\n    if (targetElement) {\n      return react__WEBPACK_IMPORTED_MODULE_1___default().Children.map(props.children, function (child) {\n        var item = child; // adds the targetElement prop to any ParallaxBannerLayer components\n\n        if ((item == null ? void 0 : item.type) === ParallaxBannerLayer) {\n          var clone = react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(item, {\n            targetElement: targetElement\n          });\n          return clone;\n        }\n\n        return child;\n      });\n    }\n\n    return null;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", Object.assign({\n    ref: containerRef,\n    style: _extends({}, containerStyle, rootStyle)\n  }, rootRest), renderLayers(), renderChildren());\n};\n\nvar createController = function createController(options) {\n  // Don't initialize on the server\n  var isServer = typeof window === 'undefined';\n\n  if (!isServer) {\n    // Must not be the server so kick it off...\n    return parallax_controller__WEBPACK_IMPORTED_MODULE_0__.ParallaxController.init(options);\n  }\n\n  return null;\n};\n\nfunction ParallaxProvider(props) {\n  var controller = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n\n  if (!controller.current) {\n    controller.current = createController({\n      scrollAxis: props.scrollAxis || parallax_controller__WEBPACK_IMPORTED_MODULE_0__.ScrollAxis.vertical,\n      scrollContainer: props.scrollContainer,\n      disabled: props.isDisabled\n    });\n  } // update scroll container\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (props.scrollContainer && controller.current) {\n      controller.current.updateScrollContainer(props.scrollContainer);\n    }\n  }, [props.scrollContainer, controller.current]); // disable/enable parallax\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (props.isDisabled && controller.current) {\n      controller.current.disableParallaxController();\n    }\n\n    if (!props.isDisabled && controller.current) {\n      controller.current.enableParallaxController();\n    }\n  }, [props.isDisabled, controller.current]); // remove the controller when unmounting\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    return function () {\n      (controller == null ? void 0 : controller.current) && (controller == null ? void 0 : controller.current.destroy());\n    };\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ParallaxContext.Provider, {\n    value: controller.current\n  }, props.children);\n}\n\n\n//# sourceMappingURL=react-scroll-parallax.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2Nyb2xsLXBhcmFsbGF4L2Rpc3QvcmVhY3Qtc2Nyb2xsLXBhcmFsbGF4LmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3RjtBQUNyQztBQUNvQjs7QUFFdkU7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsdUJBQXVCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLGdEQUFTO0FBQ1gsa0RBQWtEOztBQUVsRCwyQ0FBMkMsbUVBQWtCLEVBQUU7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxtQ0FBbUMsMERBQW1COztBQUV0RDtBQUNBLDJCQUEyQixpREFBVTtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksNkNBQU07O0FBRWxCO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLCtDQUFRO0FBQzFCO0FBQ0EsaUNBQWlDOzs7QUFHakMsRUFBRSxnREFBUztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsT0FBTzs7QUFFVixFQUFFLGdEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFNBQVMsMERBQW1CO0FBQzVCO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsc0VBQWlCO0FBQzNDLHdCQUF3QixzRUFBaUI7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFNBQVMsMERBQW1CO0FBQzVCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtDQUFRO0FBQzFCO0FBQ0E7O0FBRUEscUJBQXFCLDZDQUFNO0FBQzNCLEVBQUUsZ0RBQVM7QUFDWDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsMERBQW1CLHNDQUFzQztBQUMxRTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxxREFBYztBQUMzQiwwQkFBMEI7O0FBRTFCO0FBQ0Esc0JBQXNCLHlEQUFrQjtBQUN4QztBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUEsU0FBUywwREFBbUI7QUFDNUI7QUFDQSxzQkFBc0I7QUFDdEIsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxtRUFBa0I7QUFDN0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQiw2Q0FBTTs7QUFFekI7QUFDQTtBQUNBLHNDQUFzQywyREFBVTtBQUNoRDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7OztBQUdKLEVBQUUsZ0RBQVM7QUFDWDtBQUNBO0FBQ0E7QUFDQSxHQUFHLGdEQUFnRDs7QUFFbkQsRUFBRSxnREFBUztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLDJDQUEyQzs7QUFFOUMsRUFBRSxnREFBUztBQUNYO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxTQUFTLDBEQUFtQjtBQUM1QjtBQUNBLEdBQUc7QUFDSDs7QUFFZ0k7QUFDaEkiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tdmVudHVyYS9Eb2N1bWVudHMvR2l0SHViL21vcnBoZS9ub2RlX21vZHVsZXMvcmVhY3Qtc2Nyb2xsLXBhcmFsbGF4L2Rpc3QvcmVhY3Qtc2Nyb2xsLXBhcmFsbGF4LmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXJhbGxheENvbnRyb2xsZXIsIHBhcnNlVmFsdWVBbmRVbml0LCBTY3JvbGxBeGlzIH0gZnJvbSAncGFyYWxsYXgtY29udHJvbGxlcic7XG5leHBvcnQgeyBFYXNpbmdQcmVzZXQgfSBmcm9tICdwYXJhbGxheC1jb250cm9sbGVyJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiByZW1vdmVVbmRlZmluZWRPYmplY3RLZXlzKG9iaikge1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBvYmpba2V5XSA9PT0gdW5kZWZpbmVkICYmIGRlbGV0ZSBvYmpba2V5XTtcbiAgfSk7XG4gIHJldHVybiBvYmo7XG59XG5cbnZhciBfZXhjbHVkZWQgPSBbXCJkaXNhYmxlZFwiLCBcImVhc2luZ1wiLCBcImVuZFNjcm9sbFwiLCBcIm9uQ2hhbmdlXCIsIFwib25FbnRlclwiLCBcIm9uRXhpdFwiLCBcIm9uUHJvZ3Jlc3NDaGFuZ2VcIiwgXCJvcGFjaXR5XCIsIFwicm9vdE1hcmdpblwiLCBcInJvdGF0ZVwiLCBcInJvdGF0ZVhcIiwgXCJyb3RhdGVZXCIsIFwicm90YXRlWlwiLCBcInNjYWxlXCIsIFwic2NhbGVYXCIsIFwic2NhbGVZXCIsIFwic2NhbGVaXCIsIFwic2hvdWxkQWx3YXlzQ29tcGxldGVBbmltYXRpb25cIiwgXCJzaG91bGREaXNhYmxlU2NhbGluZ1RyYW5zbGF0aW9uc1wiLCBcInNwZWVkXCIsIFwic3RhcnRTY3JvbGxcIiwgXCJ0YXJnZXRFbGVtZW50XCIsIFwidHJhbnNsYXRlWFwiLCBcInRyYW5zbGF0ZVlcIl07XG5mdW5jdGlvbiBnZXRJc29sYXRlZFBhcmFsbGF4UHJvcHMocHJvcHMpIHtcbiAgdmFyIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBlYXNpbmcgPSBwcm9wcy5lYXNpbmcsXG4gICAgICBlbmRTY3JvbGwgPSBwcm9wcy5lbmRTY3JvbGwsXG4gICAgICBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgb25FbnRlciA9IHByb3BzLm9uRW50ZXIsXG4gICAgICBvbkV4aXQgPSBwcm9wcy5vbkV4aXQsXG4gICAgICBvblByb2dyZXNzQ2hhbmdlID0gcHJvcHMub25Qcm9ncmVzc0NoYW5nZSxcbiAgICAgIG9wYWNpdHkgPSBwcm9wcy5vcGFjaXR5LFxuICAgICAgcm9vdE1hcmdpbiA9IHByb3BzLnJvb3RNYXJnaW4sXG4gICAgICByb3RhdGUgPSBwcm9wcy5yb3RhdGUsXG4gICAgICByb3RhdGVYID0gcHJvcHMucm90YXRlWCxcbiAgICAgIHJvdGF0ZVkgPSBwcm9wcy5yb3RhdGVZLFxuICAgICAgcm90YXRlWiA9IHByb3BzLnJvdGF0ZVosXG4gICAgICBzY2FsZSA9IHByb3BzLnNjYWxlLFxuICAgICAgc2NhbGVYID0gcHJvcHMuc2NhbGVYLFxuICAgICAgc2NhbGVZID0gcHJvcHMuc2NhbGVZLFxuICAgICAgc2NhbGVaID0gcHJvcHMuc2NhbGVaLFxuICAgICAgc2hvdWxkQWx3YXlzQ29tcGxldGVBbmltYXRpb24gPSBwcm9wcy5zaG91bGRBbHdheXNDb21wbGV0ZUFuaW1hdGlvbixcbiAgICAgIHNob3VsZERpc2FibGVTY2FsaW5nVHJhbnNsYXRpb25zID0gcHJvcHMuc2hvdWxkRGlzYWJsZVNjYWxpbmdUcmFuc2xhdGlvbnMsXG4gICAgICBzcGVlZCA9IHByb3BzLnNwZWVkLFxuICAgICAgc3RhcnRTY3JvbGwgPSBwcm9wcy5zdGFydFNjcm9sbCxcbiAgICAgIHRhcmdldEVsZW1lbnQgPSBwcm9wcy50YXJnZXRFbGVtZW50LFxuICAgICAgdHJhbnNsYXRlWCA9IHByb3BzLnRyYW5zbGF0ZVgsXG4gICAgICB0cmFuc2xhdGVZID0gcHJvcHMudHJhbnNsYXRlWSxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkKTtcblxuICB2YXIgcGFyYWxsYXhQcm9wcyA9IHJlbW92ZVVuZGVmaW5lZE9iamVjdEtleXMoe1xuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICBlYXNpbmc6IGVhc2luZyxcbiAgICBlbmRTY3JvbGw6IGVuZFNjcm9sbCxcbiAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgb25FbnRlcjogb25FbnRlcixcbiAgICBvbkV4aXQ6IG9uRXhpdCxcbiAgICBvblByb2dyZXNzQ2hhbmdlOiBvblByb2dyZXNzQ2hhbmdlLFxuICAgIG9wYWNpdHk6IG9wYWNpdHksXG4gICAgcm9vdE1hcmdpbjogcm9vdE1hcmdpbixcbiAgICByb3RhdGU6IHJvdGF0ZSxcbiAgICByb3RhdGVYOiByb3RhdGVYLFxuICAgIHJvdGF0ZVk6IHJvdGF0ZVksXG4gICAgcm90YXRlWjogcm90YXRlWixcbiAgICBzY2FsZTogc2NhbGUsXG4gICAgc2NhbGVYOiBzY2FsZVgsXG4gICAgc2NhbGVZOiBzY2FsZVksXG4gICAgc2NhbGVaOiBzY2FsZVosXG4gICAgc2hvdWxkQWx3YXlzQ29tcGxldGVBbmltYXRpb246IHNob3VsZEFsd2F5c0NvbXBsZXRlQW5pbWF0aW9uLFxuICAgIHNob3VsZERpc2FibGVTY2FsaW5nVHJhbnNsYXRpb25zOiBzaG91bGREaXNhYmxlU2NhbGluZ1RyYW5zbGF0aW9ucyxcbiAgICBzcGVlZDogc3BlZWQsXG4gICAgc3RhcnRTY3JvbGw6IHN0YXJ0U2Nyb2xsLFxuICAgIHRhcmdldEVsZW1lbnQ6IHRhcmdldEVsZW1lbnQsXG4gICAgdHJhbnNsYXRlWDogdHJhbnNsYXRlWCxcbiAgICB0cmFuc2xhdGVZOiB0cmFuc2xhdGVZXG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHBhcmFsbGF4UHJvcHM6IHBhcmFsbGF4UHJvcHMsXG4gICAgcmVzdDogcmVzdFxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VWZXJpZnlDb250cm9sbGVyKGNvbnRyb2xsZXIpIHtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJzsgLy8gTWFrZSBzdXJlIHRoZSBwcm92aWRlZCBjb250cm9sbGVyIGlzIGFuIGluc3RhbmNlIG9mIHRoZSBQYXJhbGxheCBDb250cm9sbGVyXG5cbiAgICB2YXIgaXNJbnN0YW5jZSA9IGNvbnRyb2xsZXIgaW5zdGFuY2VvZiBQYXJhbGxheENvbnRyb2xsZXI7IC8vIFRocm93IGlmIG5laXRoZXIgY29udGV4dCBvciBnbG9iYWwgaXMgYXZhaWxhYmxlXG5cbiAgICBpZiAoIWlzU2VydmVyICYmICFjb250cm9sbGVyICYmICFpc0luc3RhbmNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IHdyYXAgeW91ciBhcHBsaWNhdGlvbidzIDxQYXJhbGxheCAvPiBjb21wb25lbnRzIGluIGEgPFBhcmFsbGF4UHJvdmlkZXIgLz4uXCIpO1xuICAgIH1cbiAgfSwgW2NvbnRyb2xsZXJdKTtcbn1cblxudmFyIFBhcmFsbGF4Q29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5mdW5jdGlvbiB1c2VQYXJhbGxheENvbnRyb2xsZXIoKSB7XG4gIHZhciBwYXJhbGxheENvbnRyb2xsZXIgPSB1c2VDb250ZXh0KFBhcmFsbGF4Q29udGV4dCk7XG4gIHZhciBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuXG4gIGlmIChpc1NlcnZlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKCFwYXJhbGxheENvbnRyb2xsZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGByZWFjdC1zY3JvbGwtcGFyYWxsYXhgIGNvbnRleHQgdmFsdWUuIFBsZWFzZSBlbnN1cmUgdGhlIGNvbXBvbmVudCBpcyB3cmFwcGVkIGluIGEgPFBhcmFsbGF4UHJvdmlkZXI+Jyk7XG4gIH1cblxuICByZXR1cm4gcGFyYWxsYXhDb250cm9sbGVyO1xufVxuXG5mdW5jdGlvbiB1c2VQYXJhbGxheChwcm9wcykge1xuICB2YXIgY29udHJvbGxlciA9IHVzZVBhcmFsbGF4Q29udHJvbGxlcigpO1xuICB2YXIgcmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHZhciBfZ2V0SXNvbGF0ZWRQYXJhbGxheFAgPSBnZXRJc29sYXRlZFBhcmFsbGF4UHJvcHMocHJvcHMpLFxuICAgICAgcGFyYWxsYXhQcm9wcyA9IF9nZXRJc29sYXRlZFBhcmFsbGF4UC5wYXJhbGxheFByb3BzO1xuXG4gIHVzZVZlcmlmeUNvbnRyb2xsZXIoY29udHJvbGxlcik7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKCksXG4gICAgICBlbGVtZW50ID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0RWxlbWVudCA9IF91c2VTdGF0ZVsxXTsgLy8gY3JlYXRlIGVsZW1lbnRcblxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5ld0VsZW1lbnQ7XG5cbiAgICBpZiAocmVmLmN1cnJlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIGVsOiByZWYuY3VycmVudCxcbiAgICAgICAgcHJvcHM6IHBhcmFsbGF4UHJvcHNcbiAgICAgIH07XG4gICAgICBuZXdFbGVtZW50ID0gY29udHJvbGxlciA9PSBudWxsID8gdm9pZCAwIDogY29udHJvbGxlci5jcmVhdGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgc2V0RWxlbWVudChuZXdFbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBhc3NpZ24gdGhlIHJlZiByZXR1cm5lZCBieSB0aGUgdXNlUGFyYWxsYXgoKSBob29rIHRvIGFuIEhUTUwgRWxlbWVudC4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG5ld0VsZW1lbnQpIHtcbiAgICAgICAgY29udHJvbGxlciA9PSBudWxsID8gdm9pZCAwIDogY29udHJvbGxlci5yZW1vdmVFbGVtZW50QnlJZChuZXdFbGVtZW50LmlkKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbXSk7IC8vIHVwZGF0ZSBlbGVtZW50XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgaWYgKHByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIGNvbnRyb2xsZXIgPT0gbnVsbCA/IHZvaWQgMCA6IGNvbnRyb2xsZXIucmVzZXRFbGVtZW50U3R5bGVzKGVsZW1lbnQpO1xuICAgICAgICBjb250cm9sbGVyID09IG51bGwgPyB2b2lkIDAgOiBjb250cm9sbGVyLnVwZGF0ZUVsZW1lbnRQcm9wc0J5SWQoZWxlbWVudC5pZCwgcGFyYWxsYXhQcm9wcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250cm9sbGVyID09IG51bGwgPyB2b2lkIDAgOiBjb250cm9sbGVyLnVwZGF0ZUVsZW1lbnRQcm9wc0J5SWQoZWxlbWVudC5pZCwgcGFyYWxsYXhQcm9wcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbcHJvcHMuZGlzYWJsZWQsIHByb3BzLmVhc2luZywgcHJvcHMuZW5kU2Nyb2xsLCBwcm9wcy5vbkNoYW5nZSwgcHJvcHMub25FbnRlciwgcHJvcHMub25FeGl0LCBwcm9wcy5vblByb2dyZXNzQ2hhbmdlLCBwcm9wcy5vcGFjaXR5LCBwcm9wcy5yb290TWFyZ2luLCBwcm9wcy5yb3RhdGUsIHByb3BzLnJvdGF0ZVgsIHByb3BzLnJvdGF0ZVksIHByb3BzLnJvdGF0ZVosIHByb3BzLnNjYWxlLCBwcm9wcy5zY2FsZVgsIHByb3BzLnNjYWxlWSwgcHJvcHMuc2NhbGVaLCBwcm9wcy5zaG91bGRBbHdheXNDb21wbGV0ZUFuaW1hdGlvbiwgcHJvcHMuc2hvdWxkRGlzYWJsZVNjYWxpbmdUcmFuc2xhdGlvbnMsIHByb3BzLnNwZWVkLCBwcm9wcy5zdGFydFNjcm9sbCwgcHJvcHMudGFyZ2V0RWxlbWVudCwgcHJvcHMudHJhbnNsYXRlWCwgcHJvcHMudHJhbnNsYXRlWV0pO1xuICByZXR1cm4ge1xuICAgIHJlZjogcmVmLFxuICAgIGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIsXG4gICAgZWxlbWVudDogZWxlbWVudFxuICB9O1xufVxuXG5mdW5jdGlvbiBQYXJhbGxheChwcm9wcykge1xuICB2YXIgX2dldElzb2xhdGVkUGFyYWxsYXhQID0gZ2V0SXNvbGF0ZWRQYXJhbGxheFByb3BzKHByb3BzKSxcbiAgICAgIHBhcmFsbGF4UHJvcHMgPSBfZ2V0SXNvbGF0ZWRQYXJhbGxheFAucGFyYWxsYXhQcm9wcyxcbiAgICAgIHJlc3QgPSBfZ2V0SXNvbGF0ZWRQYXJhbGxheFAucmVzdDtcblxuICB2YXIgX3VzZVBhcmFsbGF4ID0gdXNlUGFyYWxsYXgocGFyYWxsYXhQcm9wcyksXG4gICAgICByZWYgPSBfdXNlUGFyYWxsYXgucmVmO1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIHJlZjogcmVmXG4gIH0sIHJlc3QpLCBwcm9wcy5jaGlsZHJlbik7XG59XG5cbnZhciBGQUxMQkFDS19SRUNUID0ge1xuICBoZWlnaHQ6IDBcbn07XG5mdW5jdGlvbiBnZXRFeHBhbmRlZFN0eWxlKGxheWVyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGxheWVyLnRyYW5zbGF0ZVkpKSB7XG4gICAgdmFyIHRyYW5zbGF0ZVlTdGFydCA9IHBhcnNlVmFsdWVBbmRVbml0KGxheWVyLnRyYW5zbGF0ZVlbMF0pO1xuICAgIHZhciB0cmFuc2xhdGVZRW5kID0gcGFyc2VWYWx1ZUFuZFVuaXQobGF5ZXIudHJhbnNsYXRlWVsxXSk7XG5cbiAgICBpZiAodHJhbnNsYXRlWVN0YXJ0LnVuaXQgPT09ICdweCcgJiYgdHJhbnNsYXRlWUVuZC51bml0ID09PSAncHgnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IE1hdGguYWJzKHRyYW5zbGF0ZVlFbmQudmFsdWUpICogLTEgKyBcInB4XCIsXG4gICAgICAgIGJvdHRvbTogTWF0aC5hYnModHJhbnNsYXRlWVN0YXJ0LnZhbHVlKSAqIC0xICsgXCJweFwiXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0cmFuc2xhdGVZU3RhcnQudW5pdCA9PT0gJyUnICYmIHRyYW5zbGF0ZVlFbmQudW5pdCA9PT0gJyUnKSB7XG4gICAgICB2YXIgX2xheWVyJHRhcmdldEVsZW1lbnQkLCBfbGF5ZXIkdGFyZ2V0RWxlbWVudDtcblxuICAgICAgdmFyIGNsaWVudFJlY3QgPSAoX2xheWVyJHRhcmdldEVsZW1lbnQkID0gKF9sYXllciR0YXJnZXRFbGVtZW50ID0gbGF5ZXIudGFyZ2V0RWxlbWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9sYXllciR0YXJnZXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSAhPSBudWxsID8gX2xheWVyJHRhcmdldEVsZW1lbnQkIDogRkFMTEJBQ0tfUkVDVDtcbiAgICAgIHZhciB0b3AgPSBNYXRoLmFicyhjbGllbnRSZWN0LmhlaWdodCAqIDAuMDEgKiB0cmFuc2xhdGVZRW5kLnZhbHVlKSAqIC0xO1xuICAgICAgdmFyIGJvdHRvbSA9IE1hdGguYWJzKGNsaWVudFJlY3QuaGVpZ2h0ICogMC4wMSAqIHRyYW5zbGF0ZVlTdGFydC52YWx1ZSkgKiAtMTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogdG9wICsgXCJweFwiLFxuICAgICAgICBib3R0b206IGJvdHRvbSArIFwicHhcIlxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBpZiAobGF5ZXIuc3BlZWQpIHtcbiAgICB2YXIgc3BlZWQgPSBsYXllci5zcGVlZCB8fCAwO1xuICAgIHZhciBhYnNTcGVlZCA9IE1hdGguYWJzKHNwZWVkKSAqIDEwICogLTE7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogYWJzU3BlZWQgKyBcInB4XCIsXG4gICAgICBib3R0b206IGFic1NwZWVkICsgXCJweFwiXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7fTtcbn1cblxuZnVuY3Rpb24gZ2V0SW1hZ2VTdHlsZShsYXllcikge1xuICByZXR1cm4gbGF5ZXIuaW1hZ2UgPyB7XG4gICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGxheWVyLmltYWdlICsgXCIpXCIsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ1xuICB9IDoge307XG59XG5cbnZhciBfZXhjbHVkZWQkMSA9IFtcImNoaWxkcmVuXCIsIFwiZGlzYWJsZWRcIiwgXCJzdHlsZVwiLCBcImV4cGFuZGVkXCIsIFwiaW1hZ2VcIiwgXCJ0ZXN0SWRcIl07XG52YXIgYWJzb2x1dGVTdHlsZSA9IHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHRvcDogMCxcbiAgbGVmdDogMCxcbiAgcmlnaHQ6IDAsXG4gIGJvdHRvbTogMFxufTtcbnZhciBQYXJhbGxheEJhbm5lckxheWVyID0gZnVuY3Rpb24gUGFyYWxsYXhCYW5uZXJMYXllcihwcm9wcykge1xuICB2YXIgX2dldElzb2xhdGVkUGFyYWxsYXhQID0gZ2V0SXNvbGF0ZWRQYXJhbGxheFByb3BzKHByb3BzKSxcbiAgICAgIHBhcmFsbGF4UHJvcHMgPSBfZ2V0SXNvbGF0ZWRQYXJhbGxheFAucGFyYWxsYXhQcm9wcyxcbiAgICAgIHJlc3QgPSBfZ2V0SXNvbGF0ZWRQYXJhbGxheFAucmVzdDtcblxuICB2YXIgc3R5bGUgPSByZXN0LnN0eWxlLFxuICAgICAgX3Jlc3QkZXhwYW5kZWQgPSByZXN0LmV4cGFuZGVkLFxuICAgICAgZXhwYW5kZWQgPSBfcmVzdCRleHBhbmRlZCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZXN0JGV4cGFuZGVkLFxuICAgICAgdGVzdElkID0gcmVzdC50ZXN0SWQsXG4gICAgICBkaXZQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHJlc3QsIF9leGNsdWRlZCQxKTtcblxuICB2YXIgaW1hZ2VTdHlsZSA9IGdldEltYWdlU3R5bGUocHJvcHMpO1xuICB2YXIgZXhwYW5kZWRTdHlsZSA9IGV4cGFuZGVkID8gZ2V0RXhwYW5kZWRTdHlsZShwcm9wcykgOiB7fTtcbiAgdmFyIHBhcmFsbGF4ID0gdXNlUGFyYWxsYXgoX2V4dGVuZHMoe1xuICAgIHRhcmdldEVsZW1lbnQ6IHByb3BzLnRhcmdldEVsZW1lbnQsXG4gICAgc2hvdWxkRGlzYWJsZVNjYWxpbmdUcmFuc2xhdGlvbnM6IHRydWVcbiAgfSwgcGFyYWxsYXhQcm9wcykpO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHtcbiAgICBcImRhdGEtdGVzdGlkXCI6IHRlc3RJZCxcbiAgICByZWY6IHBhcmFsbGF4LnJlZixcbiAgICBzdHlsZTogX2V4dGVuZHMoe30sIGltYWdlU3R5bGUsIGFic29sdXRlU3R5bGUsIGV4cGFuZGVkU3R5bGUsIHN0eWxlKVxuICB9LCBkaXZQcm9wcyksIHJlc3QuY2hpbGRyZW4pO1xufTtcblxudmFyIF9leGNsdWRlZCQyID0gW1wiZGlzYWJsZWRcIiwgXCJzdHlsZVwiLCBcImxheWVyc1wiXTtcbnZhciBjb250YWluZXJTdHlsZSA9IHtcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgd2lkdGg6ICcxMDAlJ1xufTtcbnZhciBQYXJhbGxheEJhbm5lciA9IGZ1bmN0aW9uIFBhcmFsbGF4QmFubmVyKHByb3BzKSB7XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShudWxsKSxcbiAgICAgIHRhcmdldEVsZW1lbnQgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRUYXJnZXRFbGVtZW50ID0gX3VzZVN0YXRlWzFdO1xuXG4gIHZhciBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgc2V0VGFyZ2V0RWxlbWVudChjb250YWluZXJSZWYuY3VycmVudCk7XG4gIH0sIFtdKTtcblxuICB2YXIgcm9vdFN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBfcHJvcHMkbGF5ZXJzID0gcHJvcHMubGF5ZXJzLFxuICAgICAgbGF5ZXJzID0gX3Byb3BzJGxheWVycyA9PT0gdm9pZCAwID8gW10gOiBfcHJvcHMkbGF5ZXJzLFxuICAgICAgcm9vdFJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgX2V4Y2x1ZGVkJDIpO1xuXG4gIGZ1bmN0aW9uIHJlbmRlckxheWVycygpIHtcbiAgICBpZiAodGFyZ2V0RWxlbWVudCkge1xuICAgICAgdmFyIHNob3VsZFVzZUxheWVycyA9IGxheWVycyAmJiBsYXllcnMubGVuZ3RoID4gMDtcblxuICAgICAgaWYgKHNob3VsZFVzZUxheWVycykge1xuICAgICAgICByZXR1cm4gbGF5ZXJzLm1hcChmdW5jdGlvbiAobGF5ZXIsIGkpIHtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChQYXJhbGxheEJhbm5lckxheWVyLCBPYmplY3QuYXNzaWduKHt9LCBsYXllciwge1xuICAgICAgICAgICAgdGFyZ2V0RWxlbWVudDogdGFyZ2V0RWxlbWVudCxcbiAgICAgICAgICAgIGtleTogXCJsYXllci1cIiArIGksXG4gICAgICAgICAgICB0ZXN0SWQ6IFwibGF5ZXItXCIgKyBpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlckNoaWxkcmVuKCkge1xuICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKHByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBjaGlsZDsgLy8gYWRkcyB0aGUgdGFyZ2V0RWxlbWVudCBwcm9wIHRvIGFueSBQYXJhbGxheEJhbm5lckxheWVyIGNvbXBvbmVudHNcblxuICAgICAgICBpZiAoKGl0ZW0gPT0gbnVsbCA/IHZvaWQgMCA6IGl0ZW0udHlwZSkgPT09IFBhcmFsbGF4QmFubmVyTGF5ZXIpIHtcbiAgICAgICAgICB2YXIgY2xvbmUgPSBSZWFjdC5jbG9uZUVsZW1lbnQoaXRlbSwge1xuICAgICAgICAgICAgdGFyZ2V0RWxlbWVudDogdGFyZ2V0RWxlbWVudFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgcmVmOiBjb250YWluZXJSZWYsXG4gICAgc3R5bGU6IF9leHRlbmRzKHt9LCBjb250YWluZXJTdHlsZSwgcm9vdFN0eWxlKVxuICB9LCByb290UmVzdCksIHJlbmRlckxheWVycygpLCByZW5kZXJDaGlsZHJlbigpKTtcbn07XG5cbnZhciBjcmVhdGVDb250cm9sbGVyID0gZnVuY3Rpb24gY3JlYXRlQ29udHJvbGxlcihvcHRpb25zKSB7XG4gIC8vIERvbid0IGluaXRpYWxpemUgb24gdGhlIHNlcnZlclxuICB2YXIgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcblxuICBpZiAoIWlzU2VydmVyKSB7XG4gICAgLy8gTXVzdCBub3QgYmUgdGhlIHNlcnZlciBzbyBraWNrIGl0IG9mZi4uLlxuICAgIHJldHVybiBQYXJhbGxheENvbnRyb2xsZXIuaW5pdChvcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZnVuY3Rpb24gUGFyYWxsYXhQcm92aWRlcihwcm9wcykge1xuICB2YXIgY29udHJvbGxlciA9IHVzZVJlZihudWxsKTtcblxuICBpZiAoIWNvbnRyb2xsZXIuY3VycmVudCkge1xuICAgIGNvbnRyb2xsZXIuY3VycmVudCA9IGNyZWF0ZUNvbnRyb2xsZXIoe1xuICAgICAgc2Nyb2xsQXhpczogcHJvcHMuc2Nyb2xsQXhpcyB8fCBTY3JvbGxBeGlzLnZlcnRpY2FsLFxuICAgICAgc2Nyb2xsQ29udGFpbmVyOiBwcm9wcy5zY3JvbGxDb250YWluZXIsXG4gICAgICBkaXNhYmxlZDogcHJvcHMuaXNEaXNhYmxlZFxuICAgIH0pO1xuICB9IC8vIHVwZGF0ZSBzY3JvbGwgY29udGFpbmVyXG5cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9wcy5zY3JvbGxDb250YWluZXIgJiYgY29udHJvbGxlci5jdXJyZW50KSB7XG4gICAgICBjb250cm9sbGVyLmN1cnJlbnQudXBkYXRlU2Nyb2xsQ29udGFpbmVyKHByb3BzLnNjcm9sbENvbnRhaW5lcik7XG4gICAgfVxuICB9LCBbcHJvcHMuc2Nyb2xsQ29udGFpbmVyLCBjb250cm9sbGVyLmN1cnJlbnRdKTsgLy8gZGlzYWJsZS9lbmFibGUgcGFyYWxsYXhcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9wcy5pc0Rpc2FibGVkICYmIGNvbnRyb2xsZXIuY3VycmVudCkge1xuICAgICAgY29udHJvbGxlci5jdXJyZW50LmRpc2FibGVQYXJhbGxheENvbnRyb2xsZXIoKTtcbiAgICB9XG5cbiAgICBpZiAoIXByb3BzLmlzRGlzYWJsZWQgJiYgY29udHJvbGxlci5jdXJyZW50KSB7XG4gICAgICBjb250cm9sbGVyLmN1cnJlbnQuZW5hYmxlUGFyYWxsYXhDb250cm9sbGVyKCk7XG4gICAgfVxuICB9LCBbcHJvcHMuaXNEaXNhYmxlZCwgY29udHJvbGxlci5jdXJyZW50XSk7IC8vIHJlbW92ZSB0aGUgY29udHJvbGxlciB3aGVuIHVubW91bnRpbmdcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAoY29udHJvbGxlciA9PSBudWxsID8gdm9pZCAwIDogY29udHJvbGxlci5jdXJyZW50KSAmJiAoY29udHJvbGxlciA9PSBudWxsID8gdm9pZCAwIDogY29udHJvbGxlci5jdXJyZW50LmRlc3Ryb3koKSk7XG4gICAgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChQYXJhbGxheENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udHJvbGxlci5jdXJyZW50XG4gIH0sIHByb3BzLmNoaWxkcmVuKTtcbn1cblxuZXhwb3J0IHsgUGFyYWxsYXgsIFBhcmFsbGF4QmFubmVyLCBQYXJhbGxheEJhbm5lckxheWVyLCBQYXJhbGxheENvbnRleHQsIFBhcmFsbGF4UHJvdmlkZXIsIHVzZVBhcmFsbGF4LCB1c2VQYXJhbGxheENvbnRyb2xsZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LXNjcm9sbC1wYXJhbGxheC5lc20uanMubWFwXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-scroll-parallax/dist/react-scroll-parallax.esm.js\n");

/***/ })

};
;