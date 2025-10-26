"use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/**
 * @param {...*} args - Required*
 * @example log("B", varA, varB...) OR log(varA...)
 * @default yellow
 * @description The log function can receive as many as arguments to console as you want. The first arugment have to be one of the color string symbol (Y, G, R, O, B, C, V, P) as asked for. If you skip the color as the first argument, Yellow is
 * used as a default color for logging.

*/

function log() {
  var _args$;
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  if ((args === null || args === void 0 ? void 0 : args.length) == 0) {
    throw new Error("Empty arguments in function call!");
  }
  var logColor = returnColor((_args$ = args[0]) !== null && _args$ !== void 0 ? _args$ : "Y");
  for (var _i = 0, _args = args; _i < _args.length; _i++) {
    var arg = _args[_i];
    var type = Object.prototype.toString.call(arg).split(" ")[1];
    if (matchesAnyColorSymbol(arg)) {
      continue;
    }
    if (type === "Object]") {
      console.log("%c ".concat(JSON.stringify(arg)), " color: ".concat(logColor, " "));
    } else if (type === "Array]") {
      var _iterator = _createForOfIteratorHelper(arg),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var val = _step.value;
          var dataType = Object.prototype.toString.call(val).split(" ")[1];
          if (dataType === "Object]") {
            console.log("%c ".concat(JSON.stringify(val)), " color: ".concat(logColor, " "));
          } else {
            console.log("%c ".concat(val), " color: ".concat(logColor, " "));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else {
      console.log("%c ".concat(arg), " color: ".concat(logColor, " "));
    }
  }
}

/**
 *
 * @param {*} title  - Required* for the title
 * @param  {...any} args -  first argument should be a color symbol string ("Y", "R", "G", "O", "B", "P", "C", "V") followed by everything you want to log. Default will be Yellow color.
 * @example headlog("My heading", "B", varA, varB...) OR headlog("My heading", varA, varB) - yellow default
 * @default yellow
 * @description headlog functions is to be used when you want a title on the first line of console followed by all things you want to log. The styling only applies
 * to the title in this case and other arguments will be logged as standard console log style.
 */
function headlog(title) {
  if (!!title && typeof title === "string") {
    var _args$2;
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    var color = returnColor((_args$2 = args[0]) !== null && _args$2 !== void 0 ? _args$2 : "Y");
    console.log("%c".concat(title), " color: ".concat(color, "; font-weight: bold; text-transform: uppercase; "));
    for (var _i2 = 0, _args2 = args; _i2 < _args2.length; _i2++) {
      var arg = _args2[_i2];
      if (matchesAnyColorSymbol(arg)) {
        continue;
      } else {
        console.log(arg);
      }
    }
  } else {
    throw new Error("Title is required as first argument!");
  }
}
function returnColor(color) {
  switch (color) {
    case "Y":
      return "yellow";
    case "R":
      return "Red";
    case "G":
      return "yellowgreen";
    case "B":
      return "skyblue";
    case "C":
      return "cyan";
    case "V":
      return "violet";
    case "O":
      return "orange";
    case "P":
      return "pink";
    default:
      return "yellow";
  }
}
function matchesAnyColorSymbol(color) {
  if (color === "Y" || color === "R" || color === "G" || color === "B" || color === "C" || color === "V" || color === "O" || color === "P") {
    return true;
  }
  return false;
}