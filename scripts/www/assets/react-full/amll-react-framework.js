import * as e from "react";
import t, { Children as n, Component as r, Fragment as i, createContext as a, createElement as o, forwardRef as s, isValidElement as c, memo as l, useCallback as u, useContext as d, useEffect as f, useId as p, useImperativeHandle as m, useInsertionEffect as h, useLayoutEffect as g, useMemo as _, useRef as v, useState as y } from "react";
import { Fragment as b, jsx as x, jsxs as S } from "react/jsx-runtime";
import { BackgroundRender as C, CanvasLyricPlayer as w, DomLyricPlayer as T, DomSlimLyricPlayer as E, LyricPlayer as D, MeshGradientRenderer as O, MeshGradientRenderer as ee, PixiRenderer as k, PixiRenderer as te } from "@applemusic-like-lyrics/core";
import { createPortal as ne } from "react-dom";
import { atom as A, useAtom as re, useAtomValue as j, useSetAtom as ie } from "jotai";
//#region \0rolldown/runtime.js
var ae = Object.create, oe = Object.defineProperty, se = Object.getOwnPropertyDescriptor, ce = Object.getOwnPropertyNames, le = Object.getPrototypeOf, ue = Object.prototype.hasOwnProperty, de = (e, t) => () => (e && (t = e(e = 0)), t), fe = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), pe = (e, t) => {
	let n = {};
	for (var r in e) oe(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || oe(n, Symbol.toStringTag, { value: "Module" }), n;
}, me = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = ce(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !ue.call(e, s) && s !== n && oe(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = se(t, s)) || r.enumerable
	});
	return e;
}, he = (e, t, n) => (n = e == null ? {} : ae(le(e)), me(t || !e || !e.__esModule ? oe(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), ge = (e) => ue.call(e, "module.exports") ? e["module.exports"] : me(oe({}, "__esModule", { value: !0 }), e), _e = ({ fftData: e, ...t }) => {
	let n = v(null), r = v(void 0);
	return r.current === void 0 && (r.current = e), f(() => {
		r.current = e;
	}, [e]), g(() => {
		let e = n.current;
		if (e) {
			let t = e.getContext("2d");
			if (t) {
				let n = {
					width: 0,
					height: 0
				}, i = new ResizeObserver((e) => {
					for (let t of e) n = {
						width: t.contentRect.width * window.devicePixelRatio,
						height: t.contentRect.height * window.devicePixelRatio
					};
				});
				i.observe(e);
				let a = 100, o = !1, s = [];
				function c(e, t) {
					let n = e.length;
					if (t <= 0 || n === 0) return [];
					if (n === t) return e.slice();
					let r = Array(t), i = (n - 1) / Math.max(1, t - 1);
					for (let a = 0; a < t; a++) {
						let t = a * i, o = Math.floor(t), s = Math.min(n - 1, o + 1), c = t - o;
						r[a] = e[o] * (1 - c) + e[s] * c;
					}
					return r;
				}
				function l() {
					if (!(e && t) || o) return;
					let i = e.width, u = e.height;
					(n.width !== i || n.height !== u) && (e.width = n.width, e.height = n.height);
					let d = r.current ?? [];
					if (s.length !== d.length) s = [...d];
					else for (let e = 0; e < s.length; e++) {
						let t = d[e];
						t *= Math.min((e + 5) / s.length * 4, 1), s[e] += t * 2, s[e] /= 3;
					}
					t.clearRect(0, 0, i, u);
					{
						t.beginPath();
						let e = window.devicePixelRatio || 1, n = 8 * e, r = Math.floor(i / Math.max(1, n));
						r = Math.max(8, r);
						let o = s.length > 0 ? Math.min(s.length, r) : 0, l = o > 0 ? c(s, o) : [], d = l.length > 0 ? Math.max.apply(Math, l) : 0;
						a = Math.max(d * .1 + a * .9, 100);
						let f = i / Math.max(1, l.length);
						t.strokeStyle = "white", t.lineWidth = 4 * e, t.lineCap = "round", t.lineJoin = "round";
						let p = u - f;
						for (let e = 0; e < l.length; e++) {
							let n = f * (e + .5);
							t.moveTo(n, p);
							let r = Math.min(1, Math.max(0, l[e] / a));
							t.lineTo(n, p - r ** 2 * (u - f * 2));
						}
						t.stroke();
					}
					requestAnimationFrame(l);
				}
				return l(), () => {
					i.disconnect(), o = !0;
				};
			}
		}
	}, []), /* @__PURE__ */ x("canvas", {
		ref: n,
		...t
	});
}, ve = /* @__PURE__ */ fe(((e, t) => {
	(function() {
		var e = {}.hasOwnProperty;
		function n() {
			for (var e = "", t = 0; t < arguments.length; t++) {
				var n = arguments[t];
				n && (e = i(e, r(n)));
			}
			return e;
		}
		function r(t) {
			if (typeof t == "string" || typeof t == "number") return t;
			if (typeof t != "object") return "";
			if (Array.isArray(t)) return n.apply(null, t);
			if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
			var r = "";
			for (var a in t) e.call(t, a) && t[a] && (r = i(r, a));
			return r;
		}
		function i(e, t) {
			return t ? e ? e + " " + t : e + t : e;
		}
		t !== void 0 && t.exports ? (n.default = n, t.exports = n) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
			return n;
		}) : window.classNames = n;
	})();
})), ye = a({});
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/utils/use-constant.mjs
function be(e) {
	let t = v(null);
	return t.current === null && (t.current = e()), t.current;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var xe = typeof window < "u" ? g : f, Se = /* @__PURE__ */ a(null);
//#endregion
//#region ../../node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/array.mjs
function Ce(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function we(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/clamp.mjs
var Te = (e, t, n) => n > t ? t : n < e ? e : n;
//#endregion
//#region ../../node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/format-error-message.mjs
function Ee(e, t) {
	return t ? `${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}` : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/errors.mjs
var De = () => {}, Oe = () => {};
typeof process < "u" && process.env.NODE_ENV !== "production" && (De = (e, t, n) => {
	!e && typeof console < "u" && console.warn(Ee(t, n));
}, Oe = (e, t, n) => {
	if (!e) throw Error(Ee(t, n));
});
//#endregion
//#region ../../node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/global-config.mjs
var ke = {}, Ae = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
//#endregion
//#region ../../node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/is-object.mjs
function je(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/is-zero-value-string.mjs
var Me = (e) => /^0[^.\s]+$/u.test(e);
//#endregion
//#region ../../node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/memo.mjs
/* @__NO_SIDE_EFFECTS__ */
function Ne(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/noop.mjs
var M = /* @__NO_SIDE_EFFECTS__ */ (e) => e, Pe = (e, t) => (n) => t(e(n)), Fe = (...e) => e.reduce(Pe), Ie = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
	let r = t - e;
	return r === 0 ? 1 : (n - e) / r;
}, Le = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return Ce(this.subscriptions, e), () => we(this.subscriptions, e);
	}
	notify(e, t, n) {
		let r = this.subscriptions.length;
		if (r) if (r === 1) this.subscriptions[0](e, t, n);
		else for (let i = 0; i < r; i++) {
			let r = this.subscriptions[i];
			r && r(e, t, n);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}, N = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, P = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
//#endregion
//#region ../../node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/velocity-per-second.mjs
function Re(e, t) {
	return t ? 1e3 / t * e : 0;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/warn-once.mjs
var ze = /* @__PURE__ */ new Set();
function Be(e, t, n) {
	e || ze.has(t) || (console.warn(Ee(t, n)), ze.add(t));
}
//#endregion
//#region ../../node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/wrap.mjs
var Ve = (e, t, n) => {
	let r = t - e;
	return ((n - e) % r + r) % r + e;
}, He = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Ue = 1e-7, We = 12;
function Ge(e, t, n, r, i) {
	let a, o, s = 0;
	do
		o = t + (n - t) / 2, a = He(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > Ue && ++s < We);
	return o;
}
function Ke(e, t, n, r) {
	if (e === t && n === r) return M;
	let i = (t) => Ge(t, 0, 1, e, n);
	return (e) => e === 0 || e === 1 ? e : He(i(e), t, r);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var qe = (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Je = (e) => (t) => 1 - e(1 - t), Ye = /* @__PURE__ */ Ke(.33, 1.53, .69, .99), Xe = /* @__PURE__ */ Je(Ye), Ze = /* @__PURE__ */ qe(Xe), Qe = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * Xe(e) : .5 * (2 - 2 ** (-10 * (e - 1))), $e = (e) => 1 - Math.sin(Math.acos(e)), et = Je($e), tt = qe($e), nt = /* @__PURE__ */ Ke(.42, 0, 1, 1), rt = /* @__PURE__ */ Ke(0, 0, .58, 1), it = /* @__PURE__ */ Ke(.42, 0, .58, 1), at = (e) => Array.isArray(e) && typeof e[0] != "number";
//#endregion
//#region ../../node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/easing/utils/get-easing-for-segment.mjs
function ot(e, t) {
	return at(e) ? e[Ve(0, e.length, t)] : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-utils@12.36.0/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
var st = (e) => Array.isArray(e) && typeof e[0] == "number", ct = {
	linear: M,
	easeIn: nt,
	easeInOut: it,
	easeOut: rt,
	circIn: $e,
	circInOut: tt,
	circOut: et,
	backIn: Xe,
	backInOut: Ze,
	backOut: Ye,
	anticipate: Qe
}, lt = (e) => typeof e == "string", ut = (e) => {
	if (st(e)) {
		Oe(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
		let [t, n, r, i] = e;
		return Ke(t, n, r, i);
	} else if (lt(e)) return Oe(ct[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), ct[e];
	return e;
}, dt = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
], ft = {
	value: null,
	addProjectionMetrics: null
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function pt(e, t) {
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = !1, a = !1, o = /* @__PURE__ */ new WeakSet(), s = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, c = 0;
	function l(t) {
		o.has(t) && (u.schedule(t), e()), c++, t(s);
	}
	let u = {
		schedule: (e, t = !1, a = !1) => {
			let s = a && i ? n : r;
			return t && o.add(e), s.add(e), e;
		},
		cancel: (e) => {
			r.delete(e), o.delete(e);
		},
		process: (e) => {
			if (s = e, i) {
				a = !0;
				return;
			}
			i = !0;
			let o = n;
			n = r, r = o, n.forEach(l), t && ft.value && ft.value.frameloop[t].push(c), c = 0, n.clear(), i = !1, a && (a = !1, u.process(e));
		}
	};
	return u;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var mt = 40;
function ht(e, t) {
	let n = !1, r = !0, i = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, a = () => n = !0, o = dt.reduce((e, n) => (e[n] = pt(a, t ? n : void 0), e), {}), { setup: s, read: c, resolveKeyframes: l, preUpdate: u, update: d, preRender: f, render: p, postRender: m } = o, h = () => {
		let a = ke.useManualTiming, o = a ? i.timestamp : performance.now();
		n = !1, a || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, mt), 1)), i.timestamp = o, i.isProcessing = !0, s.process(i), c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), p.process(i), m.process(i), i.isProcessing = !1, n && t && (r = !1, e(h));
	}, g = () => {
		n = !0, r = !0, i.isProcessing || e(h);
	};
	return {
		schedule: dt.reduce((e, t) => {
			let r = o[t];
			return e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < dt.length; t++) o[dt[t]].cancel(e);
		},
		state: i,
		steps: o
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: F, cancel: gt, state: I, steps: _t } = /* @__PURE__ */ ht(typeof requestAnimationFrame < "u" ? requestAnimationFrame : M, !0), vt;
function yt() {
	vt = void 0;
}
var L = {
	now: () => (vt === void 0 && L.set(I.isProcessing || ke.useManualTiming ? I.timestamp : performance.now()), vt),
	set: (e) => {
		vt = e, queueMicrotask(yt);
	}
}, bt = {
	layout: 0,
	mainThread: 0,
	waapi: 0
}, xt = (e) => (t) => typeof t == "string" && t.startsWith(e), St = /* @__PURE__ */ xt("--"), Ct = /* @__PURE__ */ xt("var(--"), wt = (e) => Ct(e) ? Tt.test(e.split("/*")[0].trim()) : !1, Tt = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Et(e) {
	return typeof e == "string" ? e.split("/*")[0].includes("var(--") : !1;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var Dt = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, Ot = {
	...Dt,
	transform: (e) => Te(0, 1, e)
}, kt = {
	...Dt,
	default: 1
}, At = (e) => Math.round(e * 1e5) / 1e5, jt = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function Mt(e) {
	return e == null;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var Nt = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Pt = (e, t) => (n) => !!(typeof n == "string" && Nt.test(n) && n.startsWith(e) || t && !Mt(n) && Object.prototype.hasOwnProperty.call(n, t)), Ft = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(jt);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, It = (e) => Te(0, 255, e), Lt = {
	...Dt,
	transform: (e) => Math.round(It(e))
}, Rt = {
	test: /* @__PURE__ */ Pt("rgb", "red"),
	parse: /* @__PURE__ */ Ft("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Lt.transform(e) + ", " + Lt.transform(t) + ", " + Lt.transform(n) + ", " + At(Ot.transform(r)) + ")"
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/color/hex.mjs
function zt(e) {
	let t = "", n = "", r = "", i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var Bt = {
	test: /* @__PURE__ */ Pt("#"),
	parse: zt,
	transform: Rt.transform
}, Vt = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), Ht = /* @__PURE__ */ Vt("deg"), Ut = /* @__PURE__ */ Vt("%"), R = /* @__PURE__ */ Vt("px"), Wt = /* @__PURE__ */ Vt("vh"), Gt = /* @__PURE__ */ Vt("vw"), Kt = {
	...Ut,
	parse: (e) => Ut.parse(e) / 100,
	transform: (e) => Ut.transform(e * 100)
}, qt = {
	test: /* @__PURE__ */ Pt("hsl", "hue"),
	parse: /* @__PURE__ */ Ft("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Ut.transform(At(t)) + ", " + Ut.transform(At(n)) + ", " + At(Ot.transform(r)) + ")"
}, z = {
	test: (e) => Rt.test(e) || Bt.test(e) || qt.test(e),
	parse: (e) => Rt.test(e) ? Rt.parse(e) : qt.test(e) ? qt.parse(e) : Bt.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Rt.transform(e) : qt.transform(e),
	getAnimatableNone: (e) => {
		let t = z.parse(e);
		return t.alpha = 0, z.transform(t);
	}
}, Jt = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/complex/index.mjs
function Yt(e) {
	return isNaN(e) && typeof e == "string" && (e.match(jt)?.length || 0) + (e.match(Jt)?.length || 0) > 0;
}
var Xt = "number", Zt = "color", Qt = "var", $t = "var(", en = "${}", tn = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function nn(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(tn, (e) => (z.test(e) ? (r.color.push(a), i.push(Zt), n.push(z.parse(e))) : e.startsWith($t) ? (r.var.push(a), i.push(Qt), n.push(e)) : (r.number.push(a), i.push(Xt), n.push(parseFloat(e))), ++a, en)).split(en),
		indexes: r,
		types: i
	};
}
function rn(e) {
	return nn(e).values;
}
function an({ split: e, types: t }) {
	let n = e.length;
	return (r) => {
		let i = "";
		for (let a = 0; a < n; a++) if (i += e[a], r[a] !== void 0) {
			let e = t[a];
			e === Xt ? i += At(r[a]) : e === Zt ? i += z.transform(r[a]) : i += r[a];
		}
		return i;
	};
}
function on(e) {
	return an(nn(e));
}
var sn = (e) => typeof e == "number" ? 0 : z.test(e) ? z.getAnimatableNone(e) : e, cn = (e, t) => typeof e == "number" ? t?.trim().endsWith("/") ? e : 0 : sn(e);
function ln(e) {
	let t = nn(e);
	return an(t)(t.values.map((e, n) => cn(e, t.split[n])));
}
var B = {
	test: Yt,
	parse: rn,
	createTransformer: on,
	getAnimatableNone: ln
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function un(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function dn({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = un(s, r, e + 1 / 3), a = un(s, r, e), o = un(s, r, e - 1 / 3);
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(a * 255),
		blue: Math.round(o * 255),
		alpha: r
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function fn(e, t) {
	return (n) => n > 0 ? t : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/mix/number.mjs
var V = (e, t, n) => e + (t - e) * n, pn = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, mn = [
	Bt,
	Rt,
	qt
], hn = (e) => mn.find((t) => t.test(e));
function gn(e) {
	let t = hn(e);
	if (De(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
	let n = t.parse(e);
	return t === qt && (n = dn(n)), n;
}
var _n = (e, t) => {
	let n = gn(e), r = gn(t);
	if (!n || !r) return fn(e, t);
	let i = { ...n };
	return (e) => (i.red = pn(n.red, r.red, e), i.green = pn(n.green, r.green, e), i.blue = pn(n.blue, r.blue, e), i.alpha = V(n.alpha, r.alpha, e), Rt.transform(i));
}, vn = new Set(["none", "hidden"]);
function yn(e, t) {
	return vn.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function bn(e, t) {
	return (n) => V(e, t, n);
}
function xn(e) {
	return typeof e == "number" ? bn : typeof e == "string" ? wt(e) ? fn : z.test(e) ? _n : Tn : Array.isArray(e) ? Sn : typeof e == "object" ? z.test(e) ? _n : Cn : fn;
}
function Sn(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => xn(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function Cn(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = xn(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function wn(e, t) {
	let n = [], r = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < t.values.length; i++) {
		let a = t.types[i], o = e.indexes[a][r[a]];
		n[i] = e.values[o] ?? 0, r[a]++;
	}
	return n;
}
var Tn = (e, t) => {
	let n = B.createTransformer(t), r = nn(e), i = nn(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? vn.has(e) && !i.values.length || vn.has(t) && !r.values.length ? yn(e, t) : Fe(Sn(wn(r, i), i.values), n) : (De(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), fn(e, t));
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/mix/index.mjs
function En(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? V(e, t, n) : xn(e)(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var Dn = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => F.update(t, e),
		stop: () => gt(t),
		now: () => I.isProcessing ? I.timestamp : L.now()
	};
}, On = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, kn = 2e4;
function An(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function jn(e, t = 100, n) {
	let r = n({
		...e,
		keyframes: [0, t]
	}), i = Math.min(An(r), kn);
	return {
		type: "keyframes",
		ease: (e) => r.next(i * e).value / t,
		duration: /* @__PURE__ */ P(i)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var H = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
};
function Mn(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var Nn = 12;
function Pn(e, t, n) {
	let r = n;
	for (let n = 1; n < Nn; n++) r -= e(r) / t(r);
	return r;
}
var Fn = .001;
function In({ duration: e = H.duration, bounce: t = H.bounce, velocity: n = H.velocity, mass: r = H.mass }) {
	let i, a;
	De(e <= /* @__PURE__ */ N(H.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let o = 1 - t;
	o = Te(H.minDamping, H.maxDamping, o), e = Te(H.minDuration, H.maxDuration, /* @__PURE__ */ P(e)), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, s = Mn(t, o), c = Math.exp(-i);
		return Fn - a / s * c;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, s = o ** 2 * t ** 2 * e, c = Math.exp(-r), l = Mn(t ** 2, o);
		return (-i(t) + Fn > 0 ? -1 : 1) * ((a - s) * c) / l;
	}) : (i = (t) => {
		let r = Math.exp(-t * e), i = (t - n) * e + 1;
		return -Fn + r * i;
	}, a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let s = 5 / e, c = Pn(i, a, s);
	if (e = /* @__PURE__ */ N(e), isNaN(c)) return {
		stiffness: H.stiffness,
		damping: H.damping,
		duration: e
	};
	{
		let t = c ** 2 * r;
		return {
			stiffness: t,
			damping: o * 2 * Math.sqrt(r * t),
			duration: e
		};
	}
}
var Ln = ["duration", "bounce"], Rn = [
	"stiffness",
	"damping",
	"mass"
];
function zn(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function Bn(e) {
	let t = {
		velocity: H.velocity,
		stiffness: H.stiffness,
		damping: H.damping,
		mass: H.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!zn(e, Rn) && zn(e, Ln)) if (t.velocity = 0, e.visualDuration) {
		let n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, a = 2 * Te(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
		t = {
			...t,
			mass: H.mass,
			stiffness: i,
			damping: a
		};
	} else {
		let n = In({
			...e,
			velocity: 0
		});
		t = {
			...t,
			...n,
			mass: H.mass
		}, t.isResolvedFromDuration = !0;
	}
	return t;
}
function Vn(e = H.visualDuration, t = H.bounce) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, { restSpeed: r, restDelta: i } = n, a = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], s = {
		done: !1,
		value: a
	}, { stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = Bn({
		...n,
		velocity: -/* @__PURE__ */ P(n.velocity || 0)
	}), m = f || 0, h = l / (2 * Math.sqrt(c * u)), g = o - a, _ = /* @__PURE__ */ P(Math.sqrt(c / u)), v = Math.abs(g) < 5;
	r ||= v ? H.restSpeed.granular : H.restSpeed.default, i ||= v ? H.restDelta.granular : H.restDelta.default;
	let y, b, x, S, C, w;
	if (h < 1) x = Mn(_, h), S = (m + h * _ * g) / x, y = (e) => o - Math.exp(-h * _ * e) * (S * Math.sin(x * e) + g * Math.cos(x * e)), C = h * _ * S + g * x, w = h * _ * g - S * x, b = (e) => Math.exp(-h * _ * e) * (C * Math.sin(x * e) + w * Math.cos(x * e));
	else if (h === 1) {
		y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
		let e = m + _ * g;
		b = (t) => Math.exp(-_ * t) * (_ * e * t - m);
	} else {
		let e = _ * Math.sqrt(h * h - 1);
		y = (t) => {
			let n = Math.exp(-h * _ * t), r = Math.min(e * t, 300);
			return o - n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r)) / e;
		};
		let t = (m + h * _ * g) / e, n = h * _ * t - g * e, r = h * _ * g - t * e;
		b = (t) => {
			let i = Math.exp(-h * _ * t), a = Math.min(e * t, 300);
			return i * (n * Math.sinh(a) + r * Math.cosh(a));
		};
	}
	let T = {
		calculatedDuration: p && d || null,
		velocity: (e) => /* @__PURE__ */ N(b(e)),
		next: (e) => {
			if (!p && h < 1) {
				let t = Math.exp(-h * _ * e), n = Math.sin(x * e), a = Math.cos(x * e), c = o - t * (S * n + g * a), l = /* @__PURE__ */ N(t * (C * n + w * a));
				return s.done = Math.abs(l) <= r && Math.abs(o - c) <= i, s.value = s.done ? o : c, s;
			}
			let t = y(e);
			if (p) s.done = e >= d;
			else {
				let n = /* @__PURE__ */ N(b(e));
				s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
			}
			return s.value = s.done ? o : t, s;
		},
		toString: () => {
			let e = Math.min(An(T), kn), t = On((t) => T.next(e * t).value, e, 30);
			return e + "ms " + t;
		},
		toTransition: () => {}
	};
	return T;
}
Vn.applyToOptions = (e) => {
	let t = jn(e, 100, Vn);
	return e.ease = t.ease, e.duration = /* @__PURE__ */ N(t.duration), e.type = "keyframes", e;
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var Hn = 5;
function Un(e, t, n) {
	let r = Math.max(t - Hn, 0);
	return Re(n - e(r), t - r);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function Wn({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => s !== void 0 && e < s || c !== void 0 && e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o === void 0 ? g : o(g);
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => _ + v(e), b = (e) => {
		let t = v(e), n = y(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
	}, x, S, C = (e) => {
		p(f.value) && (x = e, S = Vn({
			keyframes: [f.value, m(f.value)],
			velocity: Un(y, e, f.value),
			damping: i,
			stiffness: a,
			restDelta: l,
			restSpeed: u
		}));
	};
	return C(0), {
		calculatedDuration: null,
		next: (e) => {
			let t = !1;
			return !S && x === void 0 && (t = !0, b(e), C(e)), x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f);
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/interpolate.mjs
function Gn(e, t, n) {
	let r = [], i = n || ke.mix || En, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = Fe(Array.isArray(t) ? t[n] || M : t, a)), r.push(a);
	}
	return r;
}
function Kn(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (Oe(a === t.length, "Both input and output ranges must be the same length", "range-length"), a === 1) return () => t[0];
	if (a === 2 && t[0] === t[1]) return () => t[1];
	let o = e[0] === e[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let s = Gn(t, r, i), c = s.length, l = (n) => {
		if (o && n < e[0]) return t[0];
		let r = 0;
		if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = /* @__PURE__ */ Ie(e[r], e[r + 1], n);
		return s[r](i);
	};
	return n ? (t) => l(Te(e[0], e[a - 1], t)) : l;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function qn(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ Ie(0, t, r);
		e.push(V(n, 1, i));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function Jn(e) {
	let t = [0];
	return qn(t, e.length - 1), t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function Yn(e, t) {
	return e.map((e) => e * t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function Xn(e, t) {
	return e.map(() => t || it).splice(0, e.length - 1);
}
function Zn({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	let i = at(r) ? r.map(ut) : ut(r), a = {
		done: !1,
		value: t[0]
	}, o = Kn(Yn(n && n.length === t.length ? n : Jn(t), e), t, { ease: Array.isArray(i) ? i : Xn(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
var Qn = (e) => e !== null;
function $n(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a = e.filter(Qn), o = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : a.length - 1;
	return !o || r === void 0 ? a[o] : r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var er = {
	decay: Wn,
	inertia: Wn,
	tween: Zn,
	keyframes: Zn,
	spring: Vn
};
function tr(e) {
	typeof e.type == "string" && (e.type = er[e.type]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var nr = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((e) => {
			this.resolve = e;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
}, rr = (e) => e / 100, ir = class extends nr {
	constructor(e) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
			done: !1,
			value: void 0
		}, this.stop = () => {
			let { motionValue: e } = this.options;
			e && e.updatedAt !== L.now() && this.tick(L.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, bt.mainThread++, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: e } = this;
		tr(e);
		let { type: t = Zn, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, s = t || Zn;
		process.env.NODE_ENV !== "production" && s !== Zn && Oe(o.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${o}`, "spring-two-frames"), s !== Zn && typeof o[0] != "number" && (this.mixKeyframes = Fe(rr, En(o[0], o[1])), o = [0, 100]);
		let c = s({
			...e,
			keyframes: o
		});
		i === "mirror" && (this.mirroredGenerator = s({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), c.calculatedDuration === null && (c.calculatedDuration = An(c));
		let { calculatedDuration: l } = c;
		this.calculatedDuration = l, this.resolvedDuration = l + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = c;
	}
	updateTime(e) {
		let t = Math.round(e - this.startTime) * this.playbackSpeed;
		this.holdTime === null ? this.currentTime = t : this.currentTime = this.holdTime;
	}
	tick(e, t = !1) {
		let { generator: n, totalDuration: r, mixKeyframes: i, mirroredGenerator: a, resolvedDuration: o, calculatedDuration: s } = this;
		if (this.startTime === null) return n.next(0);
		let { delay: c = 0, keyframes: l, repeat: u, repeatType: d, repeatDelay: f, type: p, onUpdate: m, finalKeyframe: h } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
		let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
		this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = r);
		let v = this.currentTime, y = n;
		if (u) {
			let e = Math.min(this.currentTime, r) / o, t = Math.floor(e), n = e % 1;
			!n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, u + 1), t % 2 && (d === "reverse" ? (n = 1 - n, f && (n -= f / o)) : d === "mirror" && (y = a)), v = Te(0, 1, n) * o;
		}
		let b;
		_ ? (this.delayState.value = l[0], b = this.delayState) : b = y.next(v), i && !_ && (b.value = i(b.value));
		let { done: x } = b;
		!_ && s !== null && (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
		let S = this.holdTime === null && (this.state === "finished" || this.state === "running" && x);
		return S && p !== Wn && (b.value = $n(l, this.options, h, this.speed)), m && m(b.value), S && this.finish(), b;
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
	get duration() {
		return /* @__PURE__ */ P(this.calculatedDuration);
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ P(e);
	}
	get time() {
		return /* @__PURE__ */ P(this.currentTime);
	}
	set time(e) {
		e = /* @__PURE__ */ N(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
	}
	getGeneratorVelocity() {
		let e = this.currentTime;
		if (e <= 0) return this.options.velocity || 0;
		if (this.generator.velocity) return this.generator.velocity(e);
		let t = this.generator.next(e).value;
		return Un((e) => this.generator.next(e).value, e, t);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		let t = this.playbackSpeed !== e;
		t && this.driver && this.updateTime(L.now()), this.playbackSpeed = e, t && this.driver && (this.time = /* @__PURE__ */ P(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: e = Dn, startTime: t } = this.options;
		this.driver ||= e((e) => this.tick(e)), this.options.onPlay?.();
		let n = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime ||= t ?? n : this.startTime = n - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
	}
	pause() {
		this.state = "paused", this.updateTime(L.now()), this.holdTime = this.currentTime;
	}
	complete() {
		this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
	}
	finish() {
		this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, bt.mainThread--;
	}
	stopDriver() {
		this.driver &&= (this.driver.stop(), void 0);
	}
	sample(e) {
		return this.startTime = 0, this.tick(e, !0);
	}
	attachTimeline(e) {
		return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function ar(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var or = (e) => e * 180 / Math.PI, sr = (e) => lr(or(Math.atan2(e[1], e[0]))), cr = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: sr,
	rotateZ: sr,
	skewX: (e) => or(Math.atan(e[1])),
	skewY: (e) => or(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, lr = (e) => (e %= 360, e < 0 && (e += 360), e), ur = sr, dr = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), fr = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), pr = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: dr,
	scaleY: fr,
	scale: (e) => (dr(e) + fr(e)) / 2,
	rotateX: (e) => lr(or(Math.atan2(e[6], e[5]))),
	rotateY: (e) => lr(or(Math.atan2(-e[2], e[0]))),
	rotateZ: ur,
	rotate: ur,
	skewX: (e) => or(Math.atan(e[4])),
	skewY: (e) => or(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function mr(e) {
	return e.includes("scale") ? 1 : 0;
}
function hr(e, t) {
	if (!e || e === "none") return mr(t);
	let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r, i;
	if (n) r = pr, i = n;
	else {
		let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = cr, i = t;
	}
	if (!i) return mr(t);
	let a = r[t], o = i[1].split(",").map(_r);
	return typeof a == "function" ? a(o) : o[a];
}
var gr = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return hr(n, t);
};
function _r(e) {
	return parseFloat(e.trim());
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
var vr = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
], yr = new Set(vr), br = (e) => e === Dt || e === R, xr = new Set([
	"x",
	"y",
	"z"
]), Sr = vr.filter((e) => !xr.has(e));
function Cr(e) {
	let t = [];
	return Sr.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
	}), t;
}
var wr = {
	width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r }) => {
		let i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r }) => {
		let i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: (e, { transform: t }) => hr(t, "x"),
	y: (e, { transform: t }) => hr(t, "y")
};
wr.translateX = wr.x, wr.translateY = wr.y;
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var Tr = /* @__PURE__ */ new Set(), Er = !1, Dr = !1, Or = !1;
function kr() {
	if (Dr) {
		let e = Array.from(Tr).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = Cr(e);
			t.length && (n.set(e, t), e.render());
		}), e.forEach((e) => e.measureInitialState()), t.forEach((e) => {
			e.render();
			let t = n.get(e);
			t && t.forEach(([t, n]) => {
				e.getValue(t)?.set(n);
			});
		}), e.forEach((e) => e.measureEndState()), e.forEach((e) => {
			e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
		});
	}
	Dr = !1, Er = !1, Tr.forEach((e) => e.complete(Or)), Tr.clear();
}
function Ar() {
	Tr.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (Dr = !0);
	});
}
function jr() {
	Or = !0, Ar(), kr(), Or = !1;
}
var Mr = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (Tr.add(this), Er || (Er = !0, F.read(Ar), F.resolveKeyframes(kr))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
		if (e[0] === null) {
			let i = r?.get(), a = e[e.length - 1];
			if (i !== void 0) e[0] = i;
			else if (n && t) {
				let r = n.readValue(t, a);
				r != null && (e[0] = r);
			}
			e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]);
		}
		ar(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), Tr.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (Tr.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, Nr = (e) => e.startsWith("--");
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function Pr(e, t, n) {
	Nr(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var Fr = {};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function Ir(e, t) {
	let n = /* @__PURE__ */ Ne(e);
	return () => Fr[t] ?? n();
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var Lr = /* @__PURE__ */ Ir(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Rr = /* @__PURE__ */ Ir(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), zr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Br = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /* @__PURE__ */ zr([
		0,
		.65,
		.55,
		1
	]),
	circOut: /* @__PURE__ */ zr([
		.55,
		0,
		1,
		.45
	]),
	backIn: /* @__PURE__ */ zr([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /* @__PURE__ */ zr([
		.33,
		1.53,
		.69,
		.99
	])
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function Vr(e, t) {
	if (e) return typeof e == "function" ? Rr() ? On(e, t) : "ease-out" : st(e) ? zr(e) : Array.isArray(e) ? e.map((e) => Vr(e, t) || Br.easeOut) : Br[e];
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function Hr(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = Vr(s, i);
	Array.isArray(d) && (u.easing = d), ft.value && bt.waapi++;
	let f = {
		delay: r,
		duration: i,
		easing: Array.isArray(d) ? "linear" : d,
		fill: "both",
		iterations: a + 1,
		direction: o === "reverse" ? "alternate" : "normal"
	};
	l && (f.pseudoElement = l);
	let p = e.animate(u, f);
	return ft.value && p.finished.finally(() => {
		bt.waapi--;
	}), p;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function Ur(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function Wr({ type: e, ...t }) {
	return Ur(e) && Rr() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var Gr = class extends nr {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, Oe(typeof e.type != "string", "Mini animate() doesn't support \"type\" as a string.", "mini-spring");
		let c = Wr(e);
		this.animation = Hr(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !i) {
				let e = $n(r, this.options, o, this.speed);
				this.updateMotionValue && this.updateMotionValue(e), Pr(t, n, e), this.animation.cancel();
			}
			s?.(), this.notifyFinished();
		};
	}
	play() {
		this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = !0;
		let { state: e } = this;
		e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
	}
	commitStyles() {
		let e = this.options?.element;
		!this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
	}
	get duration() {
		let e = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ P(Number(e));
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ P(e);
	}
	get time() {
		return /* @__PURE__ */ P(Number(this.animation.currentTime) || 0);
	}
	set time(e) {
		let t = this.finishedTime !== null;
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ N(e), t && this.animation.pause();
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(e) {
		e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
	}
	get state() {
		return this.finishedTime === null ? this.animation.playState : "finished";
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(e) {
		this.manualStartTime = this.animation.startTime = e;
	}
	attachTimeline({ timeline: e, rangeStart: t, rangeEnd: n, observe: r }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && Lr() ? (this.animation.timeline = e, t && (this.animation.rangeStart = t), n && (this.animation.rangeEnd = n), M) : r(this);
	}
}, Kr = {
	anticipate: Qe,
	backInOut: Ze,
	circInOut: tt
};
function qr(e) {
	return e in Kr;
}
function Jr(e) {
	typeof e.ease == "string" && qr(e.ease) && (e.ease = Kr[e.ease]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var Yr = 10, Xr = class extends Gr {
	constructor(e) {
		Jr(e), tr(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
	}
	updateMotionValue(e) {
		let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let o = new ir({
			...a,
			autoplay: !1
		}), s = Math.max(Yr, L.now() - this.startTime), c = Te(0, Yr, s - Yr), l = o.sample(s).value, { name: u } = this.options;
		i && u && Pr(i, u, l), t.setWithVelocity(o.sample(Math.max(0, s - c)).value, l, c), o.stop();
	}
}, Zr = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (B.test(e) || e === "0") && !e.startsWith("url("));
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function Qr(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function $r(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = Zr(i, t), s = Zr(a, t);
	return De(o === s, `You are trying to animate ${t} from "${i}" to "${a}". "${o ? a : i}" is not an animatable value.`, "value-not-animatable"), !o || !s ? !1 : Qr(e) || (n === "spring" || Ur(n)) && r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function ei(e) {
	e.duration = 0, e.type = "keyframes";
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
var ti = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), ni = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function ri(e) {
	for (let t = 0; t < e.length; t++) if (typeof e[t] == "string" && ni.test(e[t])) return !0;
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var ii = new Set([
	"color",
	"backgroundColor",
	"outlineColor",
	"fill",
	"stroke",
	"borderColor",
	"borderTopColor",
	"borderRightColor",
	"borderBottomColor",
	"borderLeftColor"
]), ai = /* @__PURE__ */ Ne(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function oi(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o, keyframes: s } = e;
	if (!(t?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: c, transformTemplate: l } = t.owner.getProps();
	return ai() && n && (ti.has(n) || ii.has(n) && ri(s)) && (n !== "transform" || !l) && !c && !r && i !== "mirror" && a !== 0 && o !== "inertia";
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var si = 40, ci = class extends nr {
	constructor({ autoplay: e = !0, delay: t = 0, type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: a = "loop", keyframes: o, name: s, motionValue: c, element: l, ...u }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = L.now();
		let d = {
			autoplay: e,
			delay: t,
			type: n,
			repeat: r,
			repeatDelay: i,
			repeatType: a,
			name: s,
			motionValue: c,
			element: l,
			...u
		};
		this.keyframeResolver = new (l?.KeyframeResolver || Mr)(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, r) {
		this.keyframeResolver = void 0;
		let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
		this.resolvedAt = L.now();
		let u = !0;
		$r(e, i, a, o) || (u = !1, (ke.instantAnimations || !s) && l?.($n(e, n, t)), e[0] = e[e.length - 1], ei(n), n.repeat = 0);
		let d = {
			startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > si ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: t,
			...n,
			keyframes: e
		}, f = u && !c && oi(d), p = d.motionValue?.owner?.current, m;
		if (f) try {
			m = new Xr({
				...d,
				element: p
			});
		} catch {
			m = new ir(d);
		}
		else m = new ir(d);
		m.finished.then(() => {
			this.notifyFinished();
		}).catch(M), this.pendingTimeline &&= (this.stopTimeline = m.attachTimeline(this.pendingTimeline), void 0), this._animation = m;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), jr()), this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(e) {
		this.animation.time = e;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(e) {
		this.animation.speed = e;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(e) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
	}
}, li = class {
	constructor(e) {
		this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean);
	}
	get finished() {
		return Promise.all(this.animations.map((e) => e.finished));
	}
	getAll(e) {
		return this.animations[0][e];
	}
	setAll(e, t) {
		for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t;
	}
	attachTimeline(e) {
		let t = this.animations.map((t) => t.attachTimeline(e));
		return () => {
			t.forEach((e, t) => {
				e && e(), this.animations[t].stop();
			});
		};
	}
	get time() {
		return this.getAll("time");
	}
	set time(e) {
		this.setAll("time", e);
	}
	get speed() {
		return this.getAll("speed");
	}
	set speed(e) {
		this.setAll("speed", e);
	}
	get state() {
		return this.getAll("state");
	}
	get startTime() {
		return this.getAll("startTime");
	}
	get duration() {
		return ui(this.animations, "duration");
	}
	get iterationDuration() {
		return ui(this.animations, "iterationDuration");
	}
	runAll(e) {
		this.animations.forEach((t) => t[e]());
	}
	play() {
		this.runAll("play");
	}
	pause() {
		this.runAll("pause");
	}
	cancel() {
		this.runAll("cancel");
	}
	complete() {
		this.runAll("complete");
	}
};
function ui(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) {
		let i = e[r][t];
		i !== null && i > n && (n = i);
	}
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/GroupAnimationWithThen.mjs
var di = class extends li {
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
function fi(e, t, n, r = 0, i = 1) {
	let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t), o = e.size, s = (o - 1) * r;
	return typeof n == "function" ? n(a, o) : i === 1 ? a * r : s - a * r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs
var pi = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function mi(e) {
	let t = pi.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
var hi = 4;
function gi(e, t, n = 1) {
	Oe(n <= hi, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	let [r, i] = mi(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return Ae(e) ? parseFloat(e) : e;
	}
	return wt(i) ? gi(i, t, n + 1) : i;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var _i = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, vi = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), yi = {
	type: "keyframes",
	duration: .8
}, bi = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, xi = (e, { keyframes: t }) => t.length > 2 ? yi : yr.has(e) ? e.startsWith("scale") ? vi(t[1]) : _i : bi;
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
function Si(e, t) {
	if (e?.inherit && t) {
		let { inherit: n, ...r } = e;
		return {
			...t,
			...r
		};
	}
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function Ci(e, t) {
	let n = e?.[t] ?? e?.default ?? e;
	return n === e ? n : Si(n, e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs
var wi = new Set([
	"when",
	"delay",
	"delayChildren",
	"staggerChildren",
	"staggerDirection",
	"repeat",
	"repeatType",
	"repeatDelay",
	"from",
	"elapsed"
]);
function Ti(e) {
	for (let t in e) if (!wi.has(t)) return !0;
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var Ei = (e, t, n, r = {}, i, a) => (o) => {
	let s = Ci(r, e) || {}, c = s.delay || r.delay || 0, { elapsed: l = 0 } = r;
	l -= /* @__PURE__ */ N(c);
	let u = {
		keyframes: Array.isArray(n) ? n : [null, n],
		ease: "easeOut",
		velocity: t.getVelocity(),
		...s,
		delay: -l,
		onUpdate: (e) => {
			t.set(e), s.onUpdate && s.onUpdate(e);
		},
		onComplete: () => {
			o(), s.onComplete && s.onComplete();
		},
		name: e,
		motionValue: t,
		element: a ? void 0 : i
	};
	Ti(s) || Object.assign(u, xi(e, u)), u.duration &&= /* @__PURE__ */ N(u.duration), u.repeatDelay &&= /* @__PURE__ */ N(u.repeatDelay), u.from !== void 0 && (u.keyframes[0] = u.from);
	let d = !1;
	if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (ei(u), u.delay === 0 && (d = !0)), (ke.instantAnimations || ke.skipAnimations || i?.shouldSkipAnimations) && (d = !0, ei(u), u.delay = 0), u.allowFlatten = !s.type && !s.ease, d && !a && t.get() !== void 0) {
		let e = $n(u.keyframes, s);
		if (e !== void 0) {
			F.update(() => {
				u.onUpdate(e), u.onComplete();
			});
			return;
		}
	}
	return s.isSync ? new ir(u) : new ci(u);
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function Di(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function Oi(e, t, n, r) {
	if (typeof t == "function") {
		let [i, a] = Di(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		let [i, a] = Di(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function ki(e, t, n) {
	let r = e.getProps();
	return Oi(r, t, n === void 0 ? r.custom : n, e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var Ai = new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...vr
]), ji = 30, Mi = (e) => !isNaN(parseFloat(e)), Ni = { current: void 0 }, Pi = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e) => {
			let t = L.now();
			if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e of this.dependents) e.dirty();
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = L.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Mi(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return process.env.NODE_ENV !== "production" && Be(!1, "value.onChange(callback) is deprecated. Switch to value.on(\"change\", callback)."), this.on("change", e);
	}
	on(e, t) {
		this.events[e] || (this.events[e] = new Le());
		let n = this.events[e].add(t);
		return e === "change" ? () => {
			n(), F.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : n;
	}
	clearListeners() {
		for (let e in this.events) this.events[e].clear();
	}
	attach(e, t) {
		this.passiveEffect = e, this.stopPassiveEffect = t;
	}
	set(e) {
		this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
	}
	setWithVelocity(e, t, n) {
		this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
	}
	jump(e, t = !0) {
		this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(e) {
		this.dependents ||= /* @__PURE__ */ new Set(), this.dependents.add(e);
	}
	removeDependent(e) {
		this.dependents && this.dependents.delete(e);
	}
	get() {
		return Ni.current && Ni.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = L.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > ji) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, ji);
		return Re(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
	}
	start(e) {
		return this.stop(), new Promise((t) => {
			this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify();
		}).then(() => {
			this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
		});
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
};
function Fi(e, t) {
	return new Pi(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs
var Ii = (e) => Array.isArray(e);
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/setters.mjs
function Li(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Fi(n));
}
function Ri(e) {
	return Ii(e) ? e[e.length - 1] || 0 : e;
}
function zi(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = ki(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) Li(e, t, Ri(i[t]));
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var U = (e) => !!(e && e.getVelocity);
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/will-change/is.mjs
function Bi(e) {
	return !!(U(e) && e.add);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function Vi(e, t) {
	let n = e.getValue("willChange");
	if (Bi(n)) return n.add(t);
	if (!n && ke.WillChange) {
		let n = new ke.WillChange("auto");
		e.addValue("willChange", n), n.add(t);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function Hi(e) {
	return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var Ui = "data-" + Hi("framerAppearId");
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function Wi(e) {
	return e.props[Ui];
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
function Gi({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function Ki(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a, transitionEnd: o, ...s } = t, c = e.getDefaultTransition();
	a = a ? Si(a, c) : c;
	let l = a?.reduceMotion;
	r && (a = r);
	let u = [], d = i && e.animationState && e.animationState.getState()[i];
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || d && Gi(d, t)) continue;
		let o = {
			delay: n,
			...Ci(a || {}, t)
		}, c = r.get();
		if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
			F.update(() => r.set(i));
			continue;
		}
		let f = !1;
		if (window.MotionHandoffAnimation) {
			let n = Wi(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, F);
				e !== null && (o.startTime = e, f = !0);
			}
		}
		Vi(e, t);
		let p = l ?? e.shouldReduceMotion;
		r.start(Ei(t, r, i, p && Ai.has(t) ? { type: !1 } : o, e, f));
		let m = r.animation;
		m && u.push(m);
	}
	if (o) {
		let t = () => F.update(() => {
			o && zi(e, o);
		});
		u.length ? Promise.all(u).then(t) : t();
	}
	return u;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
function qi(e, t, n = {}) {
	let r = ki(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0), { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	let a = r ? () => Promise.all(Ki(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
		let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
		return Ji(e, t, r, a, o, s, n);
	} : () => Promise.resolve(), { when: s } = i;
	if (s) {
		let [e, t] = s === "beforeChildren" ? [a, o] : [o, a];
		return e().then(() => t());
	} else return Promise.all([a(), o(n.delay)]);
}
function Ji(e, t, n = 0, r = 0, i = 0, a = 1, o) {
	let s = [];
	for (let c of e.variantChildren) c.notify("AnimationStart", t), s.push(qi(c, t, {
		...o,
		delay: n + (typeof r == "function" ? 0 : r) + fi(e.variantChildren, c, r, i, a)
	}).then(() => c.notify("AnimationComplete", t)));
	return Promise.all(s);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
function Yi(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		let i = t.map((t) => qi(e, t, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = qi(e, t, n);
	else {
		let i = typeof t == "function" ? ki(e, t, n.custom) : t;
		r = Promise.all(Ki(e, i, n));
	}
	return r.then(() => {
		e.notify("AnimationComplete", t);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/auto.mjs
var Xi = {
	test: (e) => e === "auto",
	parse: (e) => e
}, Zi = (e) => (t) => t.test(e), Qi = [
	Dt,
	R,
	Ut,
	Ht,
	Gt,
	Wt,
	Xi
], $i = (e) => Qi.find(Zi(e));
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function ea(e) {
	return typeof e == "number" ? e === 0 : e === null ? !0 : e === "none" || e === "0" || Me(e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
var ta = new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function na(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(jt) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = ta.has(t) ? 1 : 0;
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var ra = /\b([a-z-]*)\(.*?\)/gu, ia = {
	...B,
	getAnimatableNone: (e) => {
		let t = e.match(ra);
		return t ? t.map(na).join(" ") : e;
	}
}, aa = {
	...B,
	getAnimatableNone: (e) => {
		let t = B.parse(e);
		return B.createTransformer(e)(t.map((e) => typeof e == "number" ? 0 : typeof e == "object" ? {
			...e,
			alpha: 1
		} : e));
	}
}, oa = {
	...Dt,
	transform: Math.round
}, sa = {
	borderWidth: R,
	borderTopWidth: R,
	borderRightWidth: R,
	borderBottomWidth: R,
	borderLeftWidth: R,
	borderRadius: R,
	borderTopLeftRadius: R,
	borderTopRightRadius: R,
	borderBottomRightRadius: R,
	borderBottomLeftRadius: R,
	width: R,
	maxWidth: R,
	height: R,
	maxHeight: R,
	top: R,
	right: R,
	bottom: R,
	left: R,
	inset: R,
	insetBlock: R,
	insetBlockStart: R,
	insetBlockEnd: R,
	insetInline: R,
	insetInlineStart: R,
	insetInlineEnd: R,
	padding: R,
	paddingTop: R,
	paddingRight: R,
	paddingBottom: R,
	paddingLeft: R,
	paddingBlock: R,
	paddingBlockStart: R,
	paddingBlockEnd: R,
	paddingInline: R,
	paddingInlineStart: R,
	paddingInlineEnd: R,
	margin: R,
	marginTop: R,
	marginRight: R,
	marginBottom: R,
	marginLeft: R,
	marginBlock: R,
	marginBlockStart: R,
	marginBlockEnd: R,
	marginInline: R,
	marginInlineStart: R,
	marginInlineEnd: R,
	fontSize: R,
	backgroundPositionX: R,
	backgroundPositionY: R,
	rotate: Ht,
	rotateX: Ht,
	rotateY: Ht,
	rotateZ: Ht,
	scale: kt,
	scaleX: kt,
	scaleY: kt,
	scaleZ: kt,
	skew: Ht,
	skewX: Ht,
	skewY: Ht,
	distance: R,
	translateX: R,
	translateY: R,
	translateZ: R,
	x: R,
	y: R,
	z: R,
	perspective: R,
	transformPerspective: R,
	opacity: Ot,
	originX: Kt,
	originY: Kt,
	originZ: R,
	zIndex: oa,
	fillOpacity: Ot,
	strokeOpacity: Ot,
	numOctaves: oa
}, ca = {
	...sa,
	color: z,
	backgroundColor: z,
	outlineColor: z,
	fill: z,
	stroke: z,
	borderColor: z,
	borderTopColor: z,
	borderRightColor: z,
	borderBottomColor: z,
	borderLeftColor: z,
	filter: ia,
	WebkitFilter: ia,
	mask: aa,
	WebkitMask: aa
}, la = (e) => ca[e], ua = /* @__PURE__ */ new Set([ia, aa]);
function da(e, t) {
	let n = la(e);
	return ua.has(n) || (n = B), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var fa = new Set([
	"auto",
	"none",
	"0"
]);
function pa(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !fa.has(t) && nn(t).values.length && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] = da(n, i);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var ma = class extends Mr {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t || !t.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), wt(r))) {
				let i = gi(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !Ai.has(n) || e.length !== 2) return;
		let [r, i] = e, a = $i(r), o = $i(i);
		if (Et(r) !== Et(i) && wr[n]) {
			this.needsMeasurement = !0;
			return;
		}
		if (a !== o) if (br(a) && br(o)) for (let t = 0; t < e.length; t++) {
			let n = e[t];
			typeof n == "string" && (e[t] = parseFloat(n));
		}
		else wr[n] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || ea(e[t])) && n.push(t);
		n.length && pa(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = wr[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = wr[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function ha(e, t, n) {
	if (e == null) return [];
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		let r = document;
		t && (r = t.current);
		let i = n?.[e] ?? r.querySelectorAll(e);
		return i ? Array.from(i) : [];
	}
	return Array.from(e).filter((e) => e != null);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var ga = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function _a(e) {
	return je(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: va, cancel: ya } = /* @__PURE__ */ ht(queueMicrotask, !1), W = {
	x: !1,
	y: !1
};
function ba() {
	return W.x || W.y;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function xa(e) {
	return e === "x" || e === "y" ? W[e] ? null : (W[e] = !0, () => {
		W[e] = !1;
	}) : W.x || W.y ? null : (W.x = W.y = !0, () => {
		W.x = W.y = !1;
	});
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function Sa(e, t) {
	let n = ha(e), r = new AbortController();
	return [
		n,
		{
			passive: !0,
			...t,
			signal: r.signal
		},
		() => r.abort()
	];
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/hover.mjs
function Ca(e) {
	return !(e.pointerType === "touch" || ba());
}
function wa(e, t, n = {}) {
	let [r, i, a] = Sa(e, n);
	return r.forEach((e) => {
		let n = !1, r = !1, a, o = () => {
			e.removeEventListener("pointerleave", u);
		}, s = (e) => {
			a &&= (a(e), void 0), o();
		}, c = (e) => {
			n = !1, window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), r && (r = !1, s(e));
		}, l = () => {
			n = !0, window.addEventListener("pointerup", c, i), window.addEventListener("pointercancel", c, i);
		}, u = (e) => {
			if (e.pointerType !== "touch") {
				if (n) {
					r = !0;
					return;
				}
				s(e);
			}
		};
		e.addEventListener("pointerenter", (n) => {
			if (!Ca(n)) return;
			r = !1;
			let o = t(e, n);
			typeof o == "function" && (a = o, e.addEventListener("pointerleave", u, i));
		}, i), e.addEventListener("pointerdown", l, i);
	}), a;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
var Ta = (e, t) => t ? e === t ? !0 : Ta(e, t.parentElement) : !1, Ea = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, Da = new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function Oa(e) {
	return Da.has(e.tagName) || e.isContentEditable === !0;
}
var ka = new Set([
	"INPUT",
	"SELECT",
	"TEXTAREA"
]);
function Aa(e) {
	return ka.has(e.tagName) || e.isContentEditable === !0;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var ja = /* @__PURE__ */ new WeakSet();
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function Ma(e) {
	return (t) => {
		t.key === "Enter" && e(t);
	};
}
function Na(e, t) {
	e.dispatchEvent(new PointerEvent("pointer" + t, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var Pa = (e, t) => {
	let n = e.currentTarget;
	if (!n) return;
	let r = Ma(() => {
		if (ja.has(n)) return;
		Na(n, "down");
		let e = Ma(() => {
			Na(n, "up");
		});
		n.addEventListener("keyup", e, t), n.addEventListener("blur", () => Na(n, "cancel"), t);
	});
	n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/gestures/press/index.mjs
function Fa(e) {
	return Ea(e) && !ba();
}
var Ia = /* @__PURE__ */ new WeakSet();
function La(e, t, n = {}) {
	let [r, i, a] = Sa(e, n), o = (e) => {
		let r = e.currentTarget;
		if (!Fa(e) || Ia.has(e)) return;
		ja.add(r), n.stopPropagation && Ia.add(e);
		let a = t(r, e), o = (e, t) => {
			window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", c), ja.has(r) && ja.delete(r), Fa(e) && typeof a == "function" && a(e, { success: t });
		}, s = (e) => {
			o(e, r === window || r === document || n.useGlobalTarget || Ta(r, e.target));
		}, c = (e) => {
			o(e, !1);
		};
		window.addEventListener("pointerup", s, i), window.addEventListener("pointercancel", c, i);
	};
	return r.forEach((e) => {
		(n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, i), _a(e) && (e.addEventListener("focus", (e) => Pa(e, i)), !Oa(e) && !e.hasAttribute("tabindex") && (e.tabIndex = 0));
	}), a;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
function Ra(e) {
	return je(e) && "ownerSVGElement" in e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/resize/handle-element.mjs
var za = /* @__PURE__ */ new WeakMap(), Ba, Va = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : Ra(r) && "getBBox" in r ? r.getBBox()[t] : r[n], Ha = /* @__PURE__ */ Va("inline", "width", "offsetWidth"), Ua = /* @__PURE__ */ Va("block", "height", "offsetHeight");
function Wa({ target: e, borderBoxSize: t }) {
	za.get(e)?.forEach((n) => {
		n(e, {
			get width() {
				return Ha(e, t);
			},
			get height() {
				return Ua(e, t);
			}
		});
	});
}
function Ga(e) {
	e.forEach(Wa);
}
function Ka() {
	typeof ResizeObserver > "u" || (Ba = new ResizeObserver(Ga));
}
function qa(e, t) {
	Ba || Ka();
	let n = ha(e);
	return n.forEach((e) => {
		let n = za.get(e);
		n || (n = /* @__PURE__ */ new Set(), za.set(e, n)), n.add(t), Ba?.observe(e);
	}), () => {
		n.forEach((e) => {
			let n = za.get(e);
			n?.delete(t), n?.size || Ba?.unobserve(e);
		});
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/resize/handle-window.mjs
var Ja = /* @__PURE__ */ new Set(), Ya;
function Xa() {
	Ya = () => {
		let e = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		Ja.forEach((t) => t(e));
	}, window.addEventListener("resize", Ya);
}
function Za(e) {
	return Ja.add(e), Ya || Xa(), () => {
		Ja.delete(e), !Ja.size && typeof Ya == "function" && (window.removeEventListener("resize", Ya), Ya = void 0);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/resize/index.mjs
function Qa(e, t) {
	return typeof e == "function" ? Za(e) : qa(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
function $a(e) {
	return Ra(e) && e.tagName === "svg";
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/transform.mjs
function eo(...e) {
	let t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], i = e[1 + n], a = e[2 + n], o = e[3 + n], s = Kn(i, a, o);
	return t ? s(r) : s;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/follow-value.mjs
function to(e, t, n = {}) {
	let r = e.get(), i = null, a = r, o, s = typeof r == "string" ? r.replace(/[\d.-]/g, "") : void 0, c = () => {
		i &&= (i.stop(), null), e.animation = void 0;
	}, l = () => {
		let t = ro(e.get()), r = ro(a);
		if (t === r) {
			c();
			return;
		}
		let s = i ? i.getGeneratorVelocity() : e.getVelocity();
		c(), i = new ir({
			keyframes: [t, r],
			velocity: s,
			type: "spring",
			restDelta: .001,
			restSpeed: .01,
			...n,
			onUpdate: o
		});
	}, u = () => {
		l(), e.animation = i ?? void 0, e.events.animationStart?.notify(), i?.then(() => {
			e.animation = void 0, e.events.animationComplete?.notify();
		});
	};
	if (e.attach((e, t) => {
		a = e, o = (e) => t(no(e, s)), F.postRender(u);
	}, c), U(t)) {
		let r = n.skipInitialAnimation === !0, i = t.on("change", (t) => {
			r ? (r = !1, e.jump(no(t, s), !1)) : e.set(no(t, s));
		}), a = e.on("destroy", i);
		return () => {
			i(), a();
		};
	}
	return c;
}
function no(e, t) {
	return t ? e + t : e;
}
function ro(e) {
	return typeof e == "number" ? e : parseFloat(e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/types/utils/find.mjs
var io = [
	...Qi,
	z,
	B
], ao = (e) => io.find(Zi(e)), oo = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
}), so = () => ({
	x: oo(),
	y: oo()
}), co = () => ({
	min: 0,
	max: 0
}), G = () => ({
	x: co(),
	y: co()
}), lo = /* @__PURE__ */ new WeakMap();
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function uo(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
function fo(e) {
	return typeof e == "string" || Array.isArray(e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
var po = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
], mo = ["initial", ...po];
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function ho(e) {
	return uo(e.animate) || mo.some((t) => fo(e[t]));
}
function go(e) {
	return !!(ho(e) || e.variants);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
function _o(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (U(i)) e.addValue(r, i);
		else if (U(a)) e.addValue(r, Fi(i, { owner: e }));
		else if (a !== i) if (e.hasValue(r)) {
			let t = e.getValue(r);
			t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
		} else {
			let t = e.getStaticValue(r);
			e.addValue(r, Fi(t === void 0 ? i : t, { owner: e }));
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
var vo = { current: null }, yo = { current: !1 }, bo = typeof window < "u";
function xo() {
	if (yo.current = !0, bo) if (window.matchMedia) {
		let e = window.matchMedia("(prefers-reduced-motion)"), t = () => vo.current = e.matches;
		e.addEventListener("change", t), t();
	} else vo.current = !1;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/VisualElement.mjs
var So = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], Co = {};
function wo(e) {
	Co = e;
}
function To() {
	return Co;
}
var Eo = class {
	scrapeMotionValuesFromProps(e, t, n) {
		return {};
	}
	constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, skipAnimations: i, blockInitialAnimation: a, visualState: o }, s = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Mr, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = L.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, F.render(this.render, !1, !0));
		};
		let { latestValues: c, renderState: l } = o;
		this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = t.initial ? { ...c } : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.skipAnimationsConfig = i, this.options = s, this.blockInitialAnimation = !!a, this.isControllingVariants = ho(t), this.isVariantNode = go(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in d) {
			let t = d[e];
			c[e] !== void 0 && U(t) && t.set(c[e]);
		}
	}
	mount(e) {
		if (this.hasBeenMounted) for (let e in this.initialValues) this.values.get(e)?.jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
		this.current = e, lo.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (yo.current || xo(), this.shouldReduceMotion = vo.current), process.env.NODE_ENV !== "production" && Be(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
	}
	unmount() {
		this.projection && this.projection.unmount(), gt(this.notifyUpdate), gt(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
		for (let e in this.events) this.events[e].clear();
		for (let e in this.features) {
			let t = this.features[e];
			t && (t.unmount(), t.isMounted = !1);
		}
		this.current = null;
	}
	addChild(e) {
		this.children.add(e), this.enteringChildren ??= /* @__PURE__ */ new Set(), this.enteringChildren.add(e);
	}
	removeChild(e) {
		this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
	}
	bindToMotionValue(e, t) {
		if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && ti.has(e) && this.current instanceof HTMLElement) {
			let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate, s = new Gr({
				element: this.current,
				name: e,
				keyframes: r,
				times: i,
				ease: a,
				duration: /* @__PURE__ */ N(o)
			}), c = n(s);
			this.valueSubscriptions.set(e, () => {
				c(), s.cancel();
			});
			return;
		}
		let n = yr.has(e);
		n && this.onBindTransform && this.onBindTransform();
		let r = t.on("change", (t) => {
			this.latestValues[e] = t, this.props.onUpdate && F.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
		}), i;
		typeof window < "u" && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
			r(), i && i(), t.owner && t.stop();
		});
	}
	sortNodePosition(e) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
	}
	updateFeatures() {
		let e = "animation";
		for (e in Co) {
			let t = Co[e];
			if (!t) continue;
			let { isEnabled: n, Feature: r } = t;
			if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
				let t = this.features[e];
				t.isMounted ? t.update() : (t.mount(), t.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : G();
	}
	getStaticValue(e) {
		return this.latestValues[e];
	}
	setStaticValue(e, t) {
		this.latestValues[e] = t;
	}
	update(e, t) {
		(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
		for (let t = 0; t < So.length; t++) {
			let n = So[t];
			this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
			let r = e["on" + n];
			r && (this.propEventSubscriptions[n] = this.on(n, r));
		}
		this.prevMotionValues = _o(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(e) {
		return this.props.variants ? this.props.variants[e] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	addVariantChild(e) {
		let t = this.getClosestVariantNode();
		if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
	}
	addValue(e, t) {
		let n = this.values.get(e);
		t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get());
	}
	removeValue(e) {
		this.values.delete(e);
		let t = this.valueSubscriptions.get(e);
		t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
	}
	hasValue(e) {
		return this.values.has(e);
	}
	getValue(e, t) {
		if (this.props.values && this.props.values[e]) return this.props.values[e];
		let n = this.values.get(e);
		return n === void 0 && t !== void 0 && (n = Fi(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (Ae(n) || Me(n)) ? n = parseFloat(n) : !ao(n) && B.test(t) && (n = da(e, t)), this.setBaseTarget(e, U(n) ? n.get() : n)), U(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == "string" || typeof t == "object") {
			let r = Oi(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !U(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new Le()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
	scheduleRenderMicrotask() {
		va.render(this.render);
	}
}, Do = class extends Eo {
	constructor() {
		super(...arguments), this.KeyframeResolver = ma;
	}
	sortInstanceNodePosition(e, t) {
		return e.compareDocumentPosition(t) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(e, t) {
		let n = e.style;
		return n ? n[t] : void 0;
	}
	removeValueFromRenderState(e, { vars: t, style: n }) {
		delete t[e], delete n[e];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: e } = this.props;
		U(e) && (this.childSubscription = e.on("change", (e) => {
			this.current && (this.current.textContent = `${e}`);
		}));
	}
}, Oo = class {
	constructor(e) {
		this.isMounted = !1, this.node = e;
	}
	update() {}
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
function ko({ top: e, left: t, right: n, bottom: r }) {
	return {
		x: {
			min: t,
			max: n
		},
		y: {
			min: e,
			max: r
		}
	};
}
function Ao({ x: e, y: t }) {
	return {
		top: t.min,
		right: e.max,
		bottom: t.max,
		left: e.min
	};
}
function jo(e, t) {
	if (!t) return e;
	let n = t({
		x: e.left,
		y: e.top
	}), r = t({
		x: e.right,
		y: e.bottom
	});
	return {
		top: n.y,
		left: n.x,
		bottom: r.y,
		right: r.x
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs
function Mo(e) {
	return e === void 0 || e === 1;
}
function No({ scale: e, scaleX: t, scaleY: n }) {
	return !Mo(e) || !Mo(t) || !Mo(n);
}
function Po(e) {
	return No(e) || Fo(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Fo(e) {
	return Io(e.x) || Io(e.y);
}
function Io(e) {
	return e && e !== "0%";
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
function Lo(e, t, n) {
	return n + t * (e - n);
}
function Ro(e, t, n, r, i) {
	return i !== void 0 && (e = Lo(e, i, r)), Lo(e, n, r) + t;
}
function zo(e, t = 0, n = 1, r, i) {
	e.min = Ro(e.min, t, n, r, i), e.max = Ro(e.max, t, n, r, i);
}
function Bo(e, { x: t, y: n }) {
	zo(e.x, t.translate, t.scale, t.originPoint), zo(e.y, n.translate, n.scale, n.originPoint);
}
var Vo = .999999999999, Ho = 1.0000000000001;
function Uo(e, t, n, r = !1) {
	let i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let a, o;
	for (let s = 0; s < i; s++) {
		a = n[s], o = a.projectionDelta;
		let { visualElement: i } = a.options;
		i && i.props.style && i.props.style.display === "contents" || (r && a.options.layoutScroll && a.scroll && a !== a.root && (Wo(e.x, -a.scroll.offset.x), Wo(e.y, -a.scroll.offset.y)), o && (t.x *= o.x.scale, t.y *= o.y.scale, Bo(e, o)), r && Po(a.latestValues) && qo(e, a.latestValues, a.layout?.layoutBox));
	}
	t.x < Ho && t.x > Vo && (t.x = 1), t.y < Ho && t.y > Vo && (t.y = 1);
}
function Wo(e, t) {
	e.min += t, e.max += t;
}
function Go(e, t, n, r, i = .5) {
	zo(e, t, n, V(e.min, e.max, i), r);
}
function Ko(e, t) {
	return typeof e == "string" ? parseFloat(e) / 100 * (t.max - t.min) : e;
}
function qo(e, t, n) {
	let r = n ?? e;
	Go(e.x, Ko(t.x, r.x), t.scaleX, t.scale, t.originX), Go(e.y, Ko(t.y, r.y), t.scaleY, t.scale, t.originY);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function Jo(e, t) {
	return ko(jo(e.getBoundingClientRect(), t));
}
function Yo(e, t, n) {
	let r = Jo(e, n), { scroll: i } = t;
	return i && (Wo(r.x, i.offset.x), Wo(r.y, i.offset.y)), r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
var Xo = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, Zo = vr.length;
function Qo(e, t, n) {
	let r = "", i = !0;
	for (let a = 0; a < Zo; a++) {
		let o = vr[a], s = e[o];
		if (s === void 0) continue;
		let c = !0;
		if (typeof s == "number") c = s === (o.startsWith("scale") ? 1 : 0);
		else {
			let e = parseFloat(s);
			c = o.startsWith("scale") ? e === 1 : e === 0;
		}
		if (!c || n) {
			let e = ga(s, sa[o]);
			if (!c) {
				i = !1;
				let t = Xo[o] || o;
				r += `${t}(${e}) `;
			}
			n && (t[o] = e);
		}
	}
	return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function $o(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, s = !1;
	for (let e in t) {
		let n = t[e];
		if (yr.has(e)) {
			o = !0;
			continue;
		} else if (St(e)) {
			i[e] = n;
			continue;
		} else {
			let t = ga(n, sa[e]);
			e.startsWith("origin") ? (s = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = Qo(t, e.transform, n) : r.transform &&= "none"), s) {
		let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function es(e, { style: t, vars: n }, r, i) {
	let a = e.style, o;
	for (o in t) a[o] = t[o];
	for (o in i?.applyProjectionStyles(a, r), n) a.setProperty(o, n[o]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function ts(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var ns = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == "string") if (R.test(e)) e = parseFloat(e);
	else return e;
	return `${ts(e, t.target.x)}% ${ts(e, t.target.y)}%`;
} }, rs = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = B.parse(e);
	if (i.length > 5) return r;
	let a = B.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
	i[0 + o] /= s, i[1 + o] /= c;
	let l = V(s, c, .5);
	return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), a(i);
} }, is = {
	borderRadius: {
		...ns,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: ns,
	borderTopRightRadius: ns,
	borderBottomLeftRadius: ns,
	borderBottomRightRadius: ns,
	boxShadow: rs
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function as(e, { layout: t, layoutId: n }) {
	return yr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!is[e] || e === "opacity");
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function os(e, t, n) {
	let r = e.style, i = t?.style, a = {};
	if (!r) return a;
	for (let t in r) (U(r[t]) || i && U(i[t]) || as(t, e) || n?.getValue(t)?.liveStyle !== void 0) && (a[t] = r[t]);
	return a;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function ss(e) {
	return window.getComputedStyle(e);
}
var cs = class extends Do {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = es;
	}
	readValueFromInstance(e, t) {
		if (yr.has(t)) return this.projection?.isProjecting ? mr(t) : gr(e, t);
		{
			let n = ss(e), r = (St(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == "string" ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return Jo(e, t);
	}
	build(e, t, n) {
		$o(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return os(e, t, n);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/object/ObjectVisualElement.mjs
function ls(e, t) {
	return e in t;
}
var us = class extends Eo {
	constructor() {
		super(...arguments), this.type = "object";
	}
	readValueFromInstance(e, t) {
		if (ls(t, e)) {
			let n = e[t];
			if (typeof n == "string" || typeof n == "number") return n;
		}
	}
	getBaseTargetFromProps() {}
	removeValueFromRenderState(e, t) {
		delete t.output[e];
	}
	measureInstanceViewportBox() {
		return G();
	}
	build(e, t) {
		Object.assign(e.output, t);
	}
	renderInstance(e, { output: t }) {
		Object.assign(e, t);
	}
	sortInstanceNodePosition() {
		return 0;
	}
}, ds = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, fs = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function ps(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? ds : fs;
	e[a.offset] = `${-r}`, e[a.array] = `${t} ${n}`;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
var ms = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function hs(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s }, c, l, u) {
	if ($o(e, s, l), c) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: d, style: f } = e;
	d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? "fill-box", delete d.transformBox);
	for (let e of ms) d[e] !== void 0 && (f[e] = d[e], delete d[e]);
	t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && ps(d, i, a, o, !1);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
var gs = new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]), _s = (e) => typeof e == "string" && e.toLowerCase() === "svg";
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function vs(e, t, n, r) {
	es(e, t, void 0, r);
	for (let n in t.attrs) e.setAttribute(gs.has(n) ? n : Hi(n), t.attrs[n]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function ys(e, t, n) {
	let r = os(e, t, n);
	for (let n in e) if (U(e[n]) || U(t[n])) {
		let t = vr.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var bs = class extends Do {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = G;
	}
	getBaseTargetFromProps(e, t) {
		return e[t];
	}
	readValueFromInstance(e, t) {
		if (yr.has(t)) {
			let e = la(t);
			return e && e.default || 0;
		}
		return t = gs.has(t) ? t : Hi(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return ys(e, t, n);
	}
	build(e, t, n) {
		hs(e, t, this.isSVGTag, n.transformTemplate, n.style);
	}
	renderInstance(e, t, n, r) {
		vs(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = _s(e.tagName), super.mount(e);
	}
}, xs = mo.length;
function Ss(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		let t = e.parent && Ss(e.parent) || {};
		return e.props.initial !== void 0 && (t.initial = e.props.initial), t;
	}
	let t = {};
	for (let n = 0; n < xs; n++) {
		let r = mo[n], i = e.props[r];
		(fo(i) || i === !1) && (t[r] = i);
	}
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
function Cs(e, t) {
	if (!Array.isArray(t)) return !1;
	let n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
var ws = [...po].reverse(), Ts = po.length;
function Es(e) {
	return (t) => Promise.all(t.map(({ animation: t, options: n }) => Yi(e, t, n)));
}
function Ds(e) {
	let t = Es(e), n = As(), r = !0, i = !1, a = (t) => (n, r) => {
		let i = ki(e, r, t === "exit" ? e.presenceContext?.custom : void 0);
		if (i) {
			let { transition: e, transitionEnd: t, ...r } = i;
			n = {
				...n,
				...r,
				...t
			};
		}
		return n;
	};
	function o(n) {
		t = n(e);
	}
	function s(o) {
		let { props: s } = e, c = Ss(e.parent) || {}, l = [], u = /* @__PURE__ */ new Set(), d = {}, f = Infinity;
		for (let t = 0; t < Ts; t++) {
			let p = ws[t], m = n[p], h = s[p] === void 0 ? c[p] : s[p], g = fo(h), _ = p === o ? m.isActive : null;
			_ === !1 && (f = t);
			let v = h === c[p] && h !== s[p] && g;
			if (v && (r || i) && e.manuallyAnimateOnMount && (v = !1), m.protectedKeys = { ...d }, !m.isActive && _ === null || !h && !m.prevProp || uo(h) || typeof h == "boolean") continue;
			if (p === "exit" && m.isActive && _ !== !0) {
				m.prevResolvedValues && (d = {
					...d,
					...m.prevResolvedValues
				});
				continue;
			}
			let y = Os(m.prevProp, h), b = y || p === o && m.isActive && !v && g || t > f && g, x = !1, S = Array.isArray(h) ? h : [h], C = S.reduce(a(p), {});
			_ === !1 && (C = {});
			let { prevResolvedValues: w = {} } = m, T = {
				...w,
				...C
			}, E = (t) => {
				b = !0, u.has(t) && (x = !0, u.delete(t)), m.needsAnimating[t] = !0;
				let n = e.getValue(t);
				n && (n.liveStyle = !1);
			};
			for (let e in T) {
				let t = C[e], n = w[e];
				if (d.hasOwnProperty(e)) continue;
				let r = !1;
				r = Ii(t) && Ii(n) ? !Cs(t, n) : t !== n, r ? t == null ? u.add(e) : E(e) : t !== void 0 && u.has(e) ? E(e) : m.protectedKeys[e] = !0;
			}
			m.prevProp = h, m.prevResolvedValues = C, m.isActive && (d = {
				...d,
				...C
			}), (r || i) && e.blockInitialAnimation && (b = !1);
			let D = v && y;
			b && (!D || x) && l.push(...S.map((t) => {
				let n = { type: p };
				if (typeof t == "string" && (r || i) && !D && e.manuallyAnimateOnMount && e.parent) {
					let { parent: r } = e, i = ki(r, t);
					if (r.enteringChildren && i) {
						let { delayChildren: t } = i.transition || {};
						n.delay = fi(r.enteringChildren, e, t);
					}
				}
				return {
					animation: t,
					options: n
				};
			}));
		}
		if (u.size) {
			let t = {};
			if (typeof s.initial != "boolean") {
				let n = ki(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
				n && n.transition && (t.transition = n.transition);
			}
			u.forEach((n) => {
				let r = e.getBaseTarget(n), i = e.getValue(n);
				i && (i.liveStyle = !0), t[n] = r ?? null;
			}), l.push({ animation: t });
		}
		let p = !!l.length;
		return r && (s.initial === !1 || s.initial === s.animate) && !e.manuallyAnimateOnMount && (p = !1), r = !1, i = !1, p ? t(l) : Promise.resolve();
	}
	function c(t, r) {
		if (n[t].isActive === r) return Promise.resolve();
		e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)), n[t].isActive = r;
		let i = s(t);
		for (let e in n) n[e].protectedKeys = {};
		return i;
	}
	return {
		animateChanges: s,
		setActive: c,
		setAnimateFunction: o,
		getState: () => n,
		reset: () => {
			n = As(), i = !0;
		}
	};
}
function Os(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !Cs(t, e) : !1;
}
function ks(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function As() {
	return {
		animate: ks(!0),
		whileInView: ks(),
		whileHover: ks(),
		whileTap: ks(),
		whileDrag: ks(),
		whileFocus: ks(),
		exit: ks()
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/copy.mjs
function js(e, t) {
	e.min = t.min, e.max = t.max;
}
function Ms(e, t) {
	js(e.x, t.x), js(e.y, t.y);
}
function Ns(e, t) {
	e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs
var Ps = 1e-4, Fs = 1 - Ps, Is = 1 + Ps, Ls = .01, Rs = 0 - Ls, zs = 0 + Ls;
function K(e) {
	return e.max - e.min;
}
function Bs(e, t, n) {
	return Math.abs(e - t) <= n;
}
function Vs(e, t, n, r = .5) {
	e.origin = r, e.originPoint = V(t.min, t.max, e.origin), e.scale = K(n) / K(t), e.translate = V(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Fs && e.scale <= Is || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Rs && e.translate <= zs || isNaN(e.translate)) && (e.translate = 0);
}
function Hs(e, t, n, r) {
	Vs(e.x, t.x, n.x, r ? r.originX : void 0), Vs(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Us(e, t, n, r = 0) {
	e.min = (r ? V(n.min, n.max, r) : n.min) + t.min, e.max = e.min + K(t);
}
function Ws(e, t, n, r) {
	Us(e.x, t.x, n.x, r?.x), Us(e.y, t.y, n.y, r?.y);
}
function Gs(e, t, n, r = 0) {
	let i = r ? V(n.min, n.max, r) : n.min;
	e.min = t.min - i, e.max = e.min + K(t);
}
function Ks(e, t, n, r) {
	Gs(e.x, t.x, n.x, r?.x), Gs(e.y, t.y, n.y, r?.y);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs
function qs(e, t, n, r, i) {
	return e -= t, e = Lo(e, 1 / n, r), i !== void 0 && (e = Lo(e, 1 / i, r)), e;
}
function Js(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
	if (Ut.test(t) && (t = parseFloat(t), t = V(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
	let s = V(a.min, a.max, r);
	e === a && (s -= t), e.min = qs(e.min, t, n, s, i), e.max = qs(e.max, t, n, s, i);
}
function Ys(e, t, [n, r, i], a, o) {
	Js(e, t[n], t[r], t[i], t.scale, a, o);
}
var Xs = [
	"x",
	"scaleX",
	"originX"
], Zs = [
	"y",
	"scaleY",
	"originY"
];
function Qs(e, t, n, r) {
	Ys(e.x, t, Xs, n ? n.x : void 0, r ? r.x : void 0), Ys(e.y, t, Zs, n ? n.y : void 0, r ? r.y : void 0);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/geometry/utils.mjs
function $s(e) {
	return e.translate === 0 && e.scale === 1;
}
function ec(e) {
	return $s(e.x) && $s(e.y);
}
function tc(e, t) {
	return e.min === t.min && e.max === t.max;
}
function nc(e, t) {
	return tc(e.x, t.x) && tc(e.y, t.y);
}
function rc(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function ic(e, t) {
	return rc(e.x, t.x) && rc(e.y, t.y);
}
function ac(e) {
	return K(e.x) / K(e.y);
}
function oc(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs
function sc(e) {
	return [e("x"), e("y")];
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/styles/transform.mjs
function cc(e, t, n) {
	let r = "", i = e.x.translate / t.x, a = e.y.translate / t.y, o = n?.z || 0;
	if ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
		let { transformPerspective: e, rotate: t, rotateX: i, rotateY: a, skewX: o, skewY: s } = n;
		e && (r = `perspective(${e}px) ${r}`), t && (r += `rotate(${t}deg) `), i && (r += `rotateX(${i}deg) `), a && (r += `rotateY(${a}deg) `), o && (r += `skewX(${o}deg) `), s && (r += `skewY(${s}deg) `);
	}
	let s = e.x.scale * t.x, c = e.y.scale * t.y;
	return (s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || "none";
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs
var lc = [
	"borderTopLeftRadius",
	"borderTopRightRadius",
	"borderBottomLeftRadius",
	"borderBottomRightRadius"
], uc = lc.length, dc = (e) => typeof e == "string" ? parseFloat(e) : e, fc = (e) => typeof e == "number" || R.test(e);
function pc(e, t, n, r, i, a) {
	i ? (e.opacity = V(0, n.opacity ?? 1, hc(r)), e.opacityExit = V(t.opacity ?? 1, 0, gc(r))) : a && (e.opacity = V(t.opacity ?? 1, n.opacity ?? 1, r));
	for (let i = 0; i < uc; i++) {
		let a = lc[i], o = mc(t, a), s = mc(n, a);
		o === void 0 && s === void 0 || (o ||= 0, s ||= 0, o === 0 || s === 0 || fc(o) === fc(s) ? (e[a] = Math.max(V(dc(o), dc(s), r), 0), (Ut.test(s) || Ut.test(o)) && (e[a] += "%")) : e[a] = s);
	}
	(t.rotate || n.rotate) && (e.rotate = V(t.rotate || 0, n.rotate || 0, r));
}
function mc(e, t) {
	return e[t] === void 0 ? e.borderRadius : e[t];
}
var hc = /* @__PURE__ */ _c(0, .5, et), gc = /* @__PURE__ */ _c(.5, .95, M);
function _c(e, t, n) {
	return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Ie(e, t, r));
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function vc(e, t, n) {
	let r = U(e) ? e : Fi(e);
	return r.start(Ei("", r, t, n)), r.animation;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/events/add-dom-event.mjs
function yc(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs
var bc = (e, t) => e.depth - t.depth, xc = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(e) {
		Ce(this.children, e), this.isDirty = !0;
	}
	remove(e) {
		we(this.children, e), this.isDirty = !0;
	}
	forEach(e) {
		this.isDirty && this.children.sort(bc), this.isDirty = !1, this.children.forEach(e);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/utils/delay.mjs
function Sc(e, t) {
	let n = L.now(), r = ({ timestamp: i }) => {
		let a = i - n;
		a >= t && (gt(r), e(a - t));
	};
	return F.setup(r, !0), () => gt(r);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
function Cc(e) {
	return U(e) ? e.get() : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/shared/stack.mjs
var wc = class {
	constructor() {
		this.members = [];
	}
	add(e) {
		Ce(this.members, e);
		for (let t = this.members.length - 1; t >= 0; t--) {
			let n = this.members[t];
			if (n === e || n === this.lead || n === this.prevLead) continue;
			let r = n.instance;
			(!r || r.isConnected === !1) && !n.snapshot && (we(this.members, n), n.unmount());
		}
		e.scheduleRender();
	}
	remove(e) {
		if (we(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
			let e = this.members[this.members.length - 1];
			e && this.promote(e);
		}
	}
	relegate(e) {
		for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
			let e = this.members[t];
			if (e.isPresent !== !1 && e.instance?.isConnected !== !1) return this.promote(e), !0;
		}
		return !1;
	}
	promote(e, t) {
		let n = this.lead;
		if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
			n.updateSnapshot(), e.scheduleRender();
			let { layoutDependency: r } = n.options, { layoutDependency: i } = e.options;
			(r === void 0 || r !== i) && (e.resumeFrom = n, t && (n.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root?.isUpdating && (e.isLayoutDirty = !0)), e.options.crossfade === !1 && n.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((e) => {
			e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.();
		});
	}
	scheduleRender() {
		this.members.forEach((e) => e.instance && e.scheduleRender(!1));
	}
	removeLeadSnapshot() {
		this.lead?.snapshot && (this.lead.snapshot = void 0);
	}
}, Tc = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
}, Ec = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
}, Dc = [
	"",
	"X",
	"Y",
	"Z"
], Oc = 1e3, kc = 0;
function Ac(e, t, n, r) {
	let { latestValues: i } = t;
	i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function jc(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
	let { visualElement: t } = e.options;
	if (!t) return;
	let n = Wi(t);
	if (window.MotionHasOptimisedAnimation(n, "transform")) {
		let { layout: t, layoutId: r } = e.options;
		window.MotionCancelOptimisedAnimation(n, "transform", F, !(t || r));
	}
	let { parent: r } = e;
	r && !r.hasCheckedOptimisedAppear && jc(r);
}
function Mc({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
	return class {
		constructor(e = {}, n = t?.()) {
			this.id = kc++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, ft.value && (Ec.nodes = Ec.calculatedTargetDeltas = Ec.calculatedProjections = 0), this.nodes.forEach(Fc), this.nodes.forEach(Wc), this.nodes.forEach(Gc), this.nodes.forEach(Ic), ft.addProjectionMetrics && ft.addProjectionMetrics(Ec);
			}, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
			for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
			this.root === this && (this.nodes = new xc());
		}
		addEventListener(e, t) {
			return this.eventHandlers.has(e) || this.eventHandlers.set(e, new Le()), this.eventHandlers.get(e).add(t);
		}
		notifyListeners(e, ...t) {
			let n = this.eventHandlers.get(e);
			n && n.notify(...t);
		}
		hasListeners(e) {
			return this.eventHandlers.has(e);
		}
		mount(t) {
			if (this.instance) return;
			this.isSVG = Ra(t) && !$a(t), this.instance = t;
			let { layoutId: n, layout: r, visualElement: i } = this.options;
			if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0), e) {
				let n, r = 0, i = () => this.root.updateBlockedByResize = !1;
				F.read(() => {
					r = window.innerWidth;
				}), e(t, () => {
					let e = window.innerWidth;
					e !== r && (r = e, this.root.updateBlockedByResize = !0, n && n(), n = Sc(i, 250), Tc.hasAnimatedSinceResize && (Tc.hasAnimatedSinceResize = !1, this.nodes.forEach(Uc)));
				});
			}
			n && this.root.registerSharedNode(n, this), this.options.animate !== !1 && i && (n || r) && this.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let a = this.options.transition || i.getDefaultTransition() || Qc, { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = i.getProps(), c = !this.targetLayout || !ic(this.targetLayout, r), l = !t && n;
				if (this.options.layoutRoot || this.resumeFrom || l || t && (c || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let t = {
						...Ci(a, "layout"),
						onPlay: o,
						onComplete: s
					};
					(i.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t), this.setAnimationOrigin(e, l);
				} else t || Uc(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = r;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			let e = this.getStack();
			e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), gt(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
		}
		startUpdate() {
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Kc), this.animationId++);
		}
		getTransformTemplate() {
			let { visualElement: e } = this.options;
			return e && e.getProps().transformTemplate;
		}
		willUpdate(e = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && jc(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			this.isLayoutDirty = !0;
			for (let e = 0; e < this.path.length; e++) {
				let t = this.path[e];
				t.shouldResetTransform = !0, (typeof t.latestValues.x == "string" || typeof t.latestValues.y == "string") && (t.isLayoutDirty = !0), t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1);
			}
			let { layoutId: t, layout: n } = this.options;
			if (t === void 0 && !n) return;
			let r = this.getTransformTemplate();
			this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate");
		}
		update() {
			if (this.updateScheduled = !1, this.isUpdateBlocked()) {
				let e = this.updateBlockedByResize;
				this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), e && this.nodes.forEach(zc), this.nodes.forEach(Rc);
				return;
			}
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(Bc);
				return;
			}
			this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Vc), this.nodes.forEach(Hc), this.nodes.forEach(Nc), this.nodes.forEach(Pc)) : this.nodes.forEach(Bc), this.clearAllSnapshots();
			let e = L.now();
			I.delta = Te(0, 1e3 / 60, e - I.timestamp), I.timestamp = e, I.isProcessing = !0, _t.update.process(I), _t.preRender.process(I), _t.render.process(I), I.isProcessing = !1;
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, va.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(Lc), this.sharedNodes.forEach(qc);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, F.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			F.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !K(this.snapshot.measuredBox.x) && !K(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance) for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
			let e = this.layout;
			this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected ||= G(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
			let { visualElement: t } = this.options;
			t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0);
		}
		updateScroll(e = "measure") {
			let t = !!(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && this.instance) {
				let t = r(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: e,
					isRoot: t,
					offset: n(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : t
				};
			}
		}
		resetTransform() {
			if (!i) return;
			let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, t = this.projectionDelta && !ec(this.projectionDelta), n = this.getTransformTemplate(), r = n ? n(this.latestValues, "") : void 0, a = r !== this.prevTransformTemplateValue;
			e && this.instance && (t || Po(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(e = !0) {
			let t = this.measurePageBox(), n = this.removeElementScroll(t);
			return e && (n = this.removeTransform(n)), nl(n), {
				animationId: this.root.animationId,
				measuredBox: t,
				layoutBox: n,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			let { visualElement: e } = this.options;
			if (!e) return G();
			let t = e.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(il))) {
				let { scroll: e } = this.root;
				e && (Wo(t.x, e.offset.x), Wo(t.y, e.offset.y));
			}
			return t;
		}
		removeElementScroll(e) {
			let t = G();
			if (Ms(t, e), this.scroll?.wasRoot) return t;
			for (let n = 0; n < this.path.length; n++) {
				let r = this.path[n], { scroll: i, options: a } = r;
				r !== this.root && i && a.layoutScroll && (i.wasRoot && Ms(t, e), Wo(t.x, i.offset.x), Wo(t.y, i.offset.y));
			}
			return t;
		}
		applyTransform(e, t = !1, n) {
			let r = n || G();
			Ms(r, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				!t && n.options.layoutScroll && n.scroll && n !== n.root && (Wo(r.x, -n.scroll.offset.x), Wo(r.y, -n.scroll.offset.y)), Po(n.latestValues) && qo(r, n.latestValues, n.layout?.layoutBox);
			}
			return Po(this.latestValues) && qo(r, this.latestValues, this.layout?.layoutBox), r;
		}
		removeTransform(e) {
			let t = G();
			Ms(t, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				if (!Po(n.latestValues)) continue;
				let r;
				n.instance && (No(n.latestValues) && n.updateSnapshot(), r = G(), Ms(r, n.measurePageBox())), Qs(t, n.latestValues, n.snapshot?.layoutBox, r);
			}
			return Po(this.latestValues) && Qs(t, this.latestValues), t;
		}
		setTargetDelta(e) {
			this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
		}
		setOptions(e) {
			this.options = {
				...this.options,
				...e,
				crossfade: e.crossfade === void 0 ? !0 : e.crossfade
			};
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== I.timestamp && this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(e = !1) {
			let t = this.getLead();
			this.isProjectionDirty ||= t.isProjectionDirty, this.isTransformDirty ||= t.isTransformDirty, this.isSharedProjectionDirty ||= t.isSharedProjectionDirty;
			let n = !!this.resumingFrom || this !== t;
			if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: r, layoutId: i } = this.options;
			if (!this.layout || !(r || i)) return;
			this.resolvedRelativeTargetAt = I.timestamp;
			let a = this.getClosestProjectingParent();
			a && this.linkedParentVersion !== a.layoutVersion && !a.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && a && a.layout ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = G(), this.targetWithTransforms = G()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Ws(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Ms(this.target, this.layout.layoutBox), Bo(this.target, this.targetDelta)) : Ms(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && a && !!a.resumingFrom == !!this.resumingFrom && !a.options.layoutScroll && a.target && this.animationProgress !== 1 ? this.createRelativeTarget(a, this.target, a.target) : this.relativeParent = this.relativeTarget = void 0), ft.value && Ec.calculatedTargetDeltas++);
		}
		getClosestProjectingParent() {
			if (!(!this.parent || No(this.parent.latestValues) || Fo(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(e, t, n) {
			this.relativeParent = e, this.linkedParentVersion = e.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = G(), this.relativeTargetOrigin = G(), Ks(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0), Ms(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			let e = this.getLead(), t = !!this.resumingFrom || this !== e, n = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === I.timestamp && (n = !1), n) return;
			let { layout: r, layoutId: i } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i)) return;
			Ms(this.layoutCorrected, this.layout.layoutBox);
			let a = this.treeScale.x, o = this.treeScale.y;
			Uo(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = G());
			let { target: s } = e;
			if (!s) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ns(this.prevProjectionDelta.x, this.projectionDelta.x), Ns(this.prevProjectionDelta.y, this.projectionDelta.y)), Hs(this.projectionDelta, this.layoutCorrected, s, this.latestValues), (this.treeScale.x !== a || this.treeScale.y !== o || !oc(this.projectionDelta.x, this.prevProjectionDelta.x) || !oc(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", s)), ft.value && Ec.calculatedProjections++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(e = !0) {
			if (this.options.visualElement?.scheduleRender(), e) {
				let e = this.getStack();
				e && e.scheduleRender();
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = so(), this.projectionDelta = so(), this.projectionDeltaWithTransform = so();
		}
		setAnimationOrigin(e, t = !1) {
			let n = this.snapshot, r = n ? n.latestValues : {}, i = { ...this.latestValues }, a = so();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
			let o = G(), s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0), c = this.getStack(), l = !c || c.members.length <= 1, u = !!(s && !l && this.options.crossfade === !0 && !this.path.some(Zc));
			this.animationProgress = 0;
			let d;
			this.mixTargetDelta = (t) => {
				let n = t / 1e3;
				Jc(a.x, e.x, n), Jc(a.y, e.y, n), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ks(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), Xc(this.relativeTarget, this.relativeTargetOrigin, o, n), d && nc(this.relativeTarget, d) && (this.isProjectionDirty = !1), d ||= G(), Ms(d, this.relativeTarget)), s && (this.animationValues = i, pc(i, r, this.latestValues, n, u, l)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(e) {
			this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (gt(this.pendingAnimation), void 0), this.pendingAnimation = F.update(() => {
				Tc.hasAnimatedSinceResize = !0, bt.layout++, this.motionValue ||= Fi(0), this.motionValue.jump(0, !1), this.currentAnimation = vc(this.motionValue, [0, 1e3], {
					...e,
					velocity: 0,
					isSync: !0,
					onUpdate: (t) => {
						this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
					},
					onStop: () => {
						bt.layout--;
					},
					onComplete: () => {
						bt.layout--, e.onComplete && e.onComplete(), this.completeAnimation();
					}
				}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			let e = this.getStack();
			e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Oc), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let e = this.getLead(), { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
			if (!(!t || !n || !r)) {
				if (this !== e && this.layout && r && rl(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
					n = this.target || G();
					let t = K(this.layout.layoutBox.x);
					n.x.min = e.target.x.min, n.x.max = n.x.min + t;
					let r = K(this.layout.layoutBox.y);
					n.y.min = e.target.y.min, n.y.max = n.y.min + r;
				}
				Ms(t, n), qo(t, i), Hs(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
			}
		}
		registerSharedNode(e, t) {
			this.sharedNodes.has(e) || this.sharedNodes.set(e, new wc()), this.sharedNodes.get(e).add(t);
			let n = t.options.initialPromotionConfig;
			t.promote({
				transition: n ? n.transition : void 0,
				preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
			});
		}
		isLead() {
			let e = this.getStack();
			return e ? e.lead === this : !0;
		}
		getLead() {
			let { layoutId: e } = this.options;
			return e && this.getStack()?.lead || this;
		}
		getPrevLead() {
			let { layoutId: e } = this.options;
			return e ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			let { layoutId: e } = this.options;
			if (e) return this.root.sharedNodes.get(e);
		}
		promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
			let r = this.getStack();
			r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({ transition: t });
		}
		relegate() {
			let e = this.getStack();
			return e ? e.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			let { visualElement: e } = this.options;
			if (!e) return;
			let t = !1, { latestValues: n } = e;
			if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t) return;
			let r = {};
			n.z && Ac("z", e, r, this.animationValues);
			for (let t = 0; t < Dc.length; t++) Ac(`rotate${Dc[t]}`, e, r, this.animationValues), Ac(`skew${Dc[t]}`, e, r, this.animationValues);
			e.render();
			for (let t in r) e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
			e.scheduleRender();
		}
		applyProjectionStyles(e, t) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				e.visibility = "hidden";
				return;
			}
			let n = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = !1, e.visibility = "", e.opacity = "", e.pointerEvents = Cc(t?.pointerEvents) || "", e.transform = n ? n(this.latestValues, "") : "none";
				return;
			}
			let r = this.getLead();
			if (!this.projectionDelta || !this.layout || !r.target) {
				this.options.layoutId && (e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, e.pointerEvents = Cc(t?.pointerEvents) || ""), this.hasProjected && !Po(this.latestValues) && (e.transform = n ? n({}, "") : "none", this.hasProjected = !1);
				return;
			}
			e.visibility = "";
			let i = r.animationValues || r.latestValues;
			this.applyTransformsToTarget();
			let a = cc(this.projectionDeltaWithTransform, this.treeScale, i);
			n && (a = n(i, a)), e.transform = a;
			let { x: o, y: s } = this.projectionDelta;
			e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`, r.animationValues ? e.opacity = r === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : e.opacity = r === this ? i.opacity === void 0 ? "" : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit;
			for (let t in is) {
				if (i[t] === void 0) continue;
				let { correct: n, applyTo: o, isCSSVariable: s } = is[t], c = a === "none" ? i[t] : n(i[t], r);
				if (o) {
					let t = o.length;
					for (let n = 0; n < t; n++) e[o[n]] = c;
				} else s ? this.options.visualElement.renderState.vars[t] = c : e[t] = c;
			}
			this.options.layoutId && (e.pointerEvents = r === this ? Cc(t?.pointerEvents) || "" : "none");
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((e) => e.currentAnimation?.stop()), this.root.nodes.forEach(Rc), this.root.sharedNodes.clear();
		}
	};
}
function Nc(e) {
	e.updateLayout();
}
function Pc(e) {
	let t = e.resumeFrom?.snapshot || e.snapshot;
	if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
		let { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
		if (i === "size") sc((e) => {
			let r = a ? t.measuredBox[e] : t.layoutBox[e], i = K(r);
			r.min = n[e].min, r.max = r.min + i;
		});
		else if (i === "x" || i === "y") {
			let e = i === "x" ? "y" : "x";
			js(a ? t.measuredBox[e] : t.layoutBox[e], n[e]);
		} else rl(i, t.layoutBox, n) && sc((r) => {
			let i = a ? t.measuredBox[r] : t.layoutBox[r], o = K(n[r]);
			i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o);
		});
		let o = so();
		Hs(o, n, t.layoutBox);
		let s = so();
		a ? Hs(s, e.applyTransform(r, !0), t.measuredBox) : Hs(s, n, t.layoutBox);
		let c = !ec(o), l = !1;
		if (!e.resumeFrom) {
			let r = e.getClosestProjectingParent();
			if (r && !r.resumeFrom) {
				let { snapshot: i, layout: a } = r;
				if (i && a) {
					let o = e.options.layoutAnchor || void 0, s = G();
					Ks(s, t.layoutBox, i.layoutBox, o);
					let c = G();
					Ks(c, n, a.layoutBox, o), ic(s, c) || (l = !0), r.options.layoutRoot && (e.relativeTarget = c, e.relativeTargetOrigin = s, e.relativeParent = r);
				}
			}
		}
		e.notifyListeners("didUpdate", {
			layout: n,
			snapshot: t,
			delta: s,
			layoutDelta: o,
			hasLayoutChanged: c,
			hasRelativeLayoutChanged: l
		});
	} else if (e.isLead()) {
		let { onExitComplete: t } = e.options;
		t && t();
	}
	e.options.transition = void 0;
}
function Fc(e) {
	ft.value && Ec.nodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty ||= !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty), e.isTransformDirty ||= e.parent.isTransformDirty);
}
function Ic(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Lc(e) {
	e.clearSnapshot();
}
function Rc(e) {
	e.clearMeasurements();
}
function zc(e) {
	e.isLayoutDirty = !0, e.updateLayout();
}
function Bc(e) {
	e.isLayoutDirty = !1;
}
function Vc(e) {
	e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0);
}
function Hc(e) {
	let { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Uc(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Wc(e) {
	e.resolveTargetDelta();
}
function Gc(e) {
	e.calcProjection();
}
function Kc(e) {
	e.resetSkewAndRotation();
}
function qc(e) {
	e.removeLeadSnapshot();
}
function Jc(e, t, n) {
	e.translate = V(t.translate, 0, n), e.scale = V(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Yc(e, t, n, r) {
	e.min = V(t.min, n.min, r), e.max = V(t.max, n.max, r);
}
function Xc(e, t, n, r) {
	Yc(e.x, t.x, n.x, r), Yc(e.y, t.y, n.y, r);
}
function Zc(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var Qc = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
}, $c = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), el = $c("applewebkit/") && !$c("chrome/") ? Math.round : M;
function tl(e) {
	e.min = el(e.min), e.max = el(e.max);
}
function nl(e) {
	tl(e.x), tl(e.y);
}
function rl(e, t, n) {
	return e === "position" || e === "preserve-aspect" && !Bs(ac(t), ac(n), .2);
}
function il(e) {
	return e !== e.root && e.scroll?.wasRoot;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs
var al = Mc({
	attachResizeListener: (e, t) => yc(e, "resize", t),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
		y: document.documentElement.scrollTop || document.body?.scrollTop || 0
	}),
	checkIsScrollRoot: () => !0
}), ol = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function sl() {
	let e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new WeakMap(), n = () => e.forEach(ol);
	return {
		add: (r) => {
			e.add(r), t.set(r, r.addEventListener("willUpdate", n));
		},
		remove: (r) => {
			e.delete(r);
			let i = t.get(r);
			i && (i(), t.delete(r)), n();
		},
		dirty: n
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.38.0/node_modules/motion-dom/dist/es/projection/node/HTMLProjectionNode.mjs
var cl = { current: void 0 }, ll = Mc({
	measureScroll: (e) => ({
		x: e.scrollLeft,
		y: e.scrollTop
	}),
	defaultParent: () => {
		if (!cl.current) {
			let e = new al({});
			e.mount(window), e.setOptions({ layoutScroll: !0 }), cl.current = e;
		}
		return cl.current;
	},
	resetTransform: (e, t) => {
		e.style.transform = t === void 0 ? "none" : t;
	},
	checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), ul = a({
	transformPagePoint: (e) => e,
	isStatic: !1,
	reducedMotion: "never"
});
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs
function dl(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function fl(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = dl(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : dl(e[t], null);
			}
		};
	};
}
function pl(...t) {
	return e.useCallback(fl(...t), t);
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var ml = class extends e.Component {
	getSnapshotBeforeUpdate(e) {
		let t = this.props.childRef.current;
		if (_a(t) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
			let e = t.offsetParent, n = _a(e) && e.offsetWidth || 0, r = _a(e) && e.offsetHeight || 0, i = getComputedStyle(t), a = this.props.sizeRef.current;
			a.height = parseFloat(i.height), a.width = parseFloat(i.width), a.top = t.offsetTop, a.left = t.offsetLeft, a.right = n - a.width - a.left, a.bottom = r - a.height - a.top;
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function hl({ children: t, isPresent: n, anchorX: r, anchorY: i, root: a, pop: o }) {
	let s = p(), c = v(null), l = v({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}), { nonce: u } = d(ul), f = pl(c, t.props?.ref ?? t?.ref);
	return h(() => {
		let { width: e, height: t, top: d, left: f, right: p, bottom: m } = l.current;
		if (n || o === !1 || !c.current || !e || !t) return;
		let h = r === "left" ? `left: ${f}` : `right: ${p}`, g = i === "bottom" ? `bottom: ${m}` : `top: ${d}`;
		c.current.dataset.motionPopId = s;
		let _ = document.createElement("style");
		u && (_.nonce = u);
		let v = a ?? document.head;
		return v.appendChild(_), _.sheet && _.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${h}px !important;
            ${g}px !important;
          }
        `), () => {
			c.current?.removeAttribute("data-motion-pop-id"), v.contains(_) && v.removeChild(_);
		};
	}, [n]), x(ml, {
		isPresent: n,
		childRef: c,
		sizeRef: l,
		pop: o,
		children: o === !1 ? t : e.cloneElement(t, { ref: f })
	});
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var gl = ({ children: t, initial: n, isPresent: r, onExitComplete: i, custom: a, presenceAffectsLayout: o, mode: s, anchorX: c, anchorY: l, root: u }) => {
	let d = be(_l), f = p(), m = !0, h = _(() => (m = !1, {
		id: f,
		initial: n,
		isPresent: r,
		custom: a,
		onExitComplete: (e) => {
			d.set(e, !0);
			for (let e of d.values()) if (!e) return;
			i && i();
		},
		register: (e) => (d.set(e, !1), () => d.delete(e))
	}), [
		r,
		d,
		i
	]);
	return o && m && (h = { ...h }), _(() => {
		d.forEach((e, t) => d.set(t, !1));
	}, [r]), e.useEffect(() => {
		!r && !d.size && i && i();
	}, [r]), t = x(hl, {
		pop: s === "popLayout",
		isPresent: r,
		anchorX: c,
		anchorY: l,
		root: u,
		children: t
	}), x(Se.Provider, {
		value: h,
		children: t
	});
};
function _l() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function vl(e = !0) {
	let t = d(Se);
	if (t === null) return [!0, null];
	let { isPresent: n, onExitComplete: r, register: i } = t, a = p();
	f(() => {
		if (e) return i(a);
	}, [e]);
	let o = u(() => e && r && r(a), [
		a,
		r,
		e
	]);
	return !n && r ? [!1, o] : [!0];
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var yl = (e) => e.key || "";
function bl(e) {
	let t = [];
	return n.forEach(e, (e) => {
		c(e) && t.push(e);
	}), t;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var xl = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: a = "sync", propagate: o = !1, anchorX: s = "left", anchorY: c = "top", root: l }) => {
	let [u, f] = vl(o), p = _(() => bl(e), [e]), m = o && !u ? [] : p.map(yl), h = v(!0), g = v(p), S = be(() => /* @__PURE__ */ new Map()), C = v(/* @__PURE__ */ new Set()), [w, T] = y(p), [E, D] = y(p);
	xe(() => {
		h.current = !1, g.current = p;
		for (let e = 0; e < E.length; e++) {
			let t = yl(E[e]);
			m.includes(t) ? (S.delete(t), C.current.delete(t)) : S.get(t) !== !0 && S.set(t, !1);
		}
	}, [
		E,
		m.length,
		m.join("-")
	]);
	let O = [];
	if (p !== w) {
		let e = [...p];
		for (let t = 0; t < E.length; t++) {
			let n = E[t], r = yl(n);
			m.includes(r) || (e.splice(t, 0, n), O.push(n));
		}
		return a === "wait" && O.length && (e = O), D(bl(e)), T(p), null;
	}
	process.env.NODE_ENV !== "production" && a === "wait" && E.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its mode is set to \"wait\". This will lead to odd visual behaviour.");
	let { forceRender: ee } = d(ye);
	return x(b, { children: E.map((e) => {
		let d = yl(e), _ = o && !u ? !1 : p === E || m.includes(d);
		return x(gl, {
			isPresent: _,
			initial: !h.current || n ? void 0 : !1,
			custom: t,
			presenceAffectsLayout: i,
			mode: a,
			root: l,
			onExitComplete: _ ? void 0 : () => {
				if (C.current.has(d)) return;
				if (S.has(d)) C.current.add(d), S.set(d, !0);
				else return;
				let e = !0;
				S.forEach((t) => {
					t || (e = !1);
				}), e && (ee?.(), D(g.current), o && f?.(), r && r());
			},
			anchorX: s,
			anchorY: c,
			children: e
		}, d);
	}) });
}, Sl = a(null);
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/utils/use-is-mounted.mjs
function Cl() {
	let e = v(!1);
	return xe(() => (e.current = !0, () => {
		e.current = !1;
	}), []), e;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/utils/use-force-update.mjs
function wl() {
	let e = Cl(), [t, n] = y(0), r = u(() => {
		e.current && n(t + 1);
	}, [t]);
	return [u(() => F.postRender(r), [r]), t];
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs
var Tl = (e) => e === !0, El = (e) => Tl(e === !0) || e === "id", Dl = ({ children: e, id: t, inherit: n = !0 }) => {
	let r = d(ye), i = d(Sl), [a, o] = wl(), s = v(null), c = r.id || i;
	s.current === null && (El(n) && c && (t = t ? c + "-" + t : c), s.current = {
		id: t,
		group: Tl(n) && r.group || sl()
	});
	let l = _(() => ({
		...s.current,
		forceRender: a
	}), [o]);
	return x(ye.Provider, {
		value: l,
		children: e
	});
}, Ol = a({ strict: !1 }), kl = {
	animation: [
		"animate",
		"variants",
		"whileHover",
		"whileTap",
		"exit",
		"whileInView",
		"whileFocus",
		"whileDrag"
	],
	exit: ["exit"],
	drag: ["drag", "dragControls"],
	focus: ["whileFocus"],
	hover: [
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	],
	tap: [
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	],
	pan: [
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	],
	inView: [
		"whileInView",
		"onViewportEnter",
		"onViewportLeave"
	],
	layout: ["layout", "layoutId"]
}, Al = !1;
function jl() {
	if (Al) return;
	let e = {};
	for (let t in kl) e[t] = { isEnabled: (e) => kl[t].some((t) => !!e[t]) };
	wo(e), Al = !0;
}
function Ml() {
	return jl(), To();
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function Nl(e) {
	let t = Ml();
	for (let n in e) t[n] = {
		...t[n],
		...e[n]
	};
	wo(t);
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var Pl = new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport".split("."));
function Fl(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Pl.has(e);
}
//#endregion
//#region __vite-optional-peer-dep:@emotion/is-prop-valid:framer-motion
var Il = /* @__PURE__ */ pe({ default: () => Ll }), Ll, Rl = de((() => {
	throw Ll = {}, Error("Could not resolve \"@emotion/is-prop-valid\" imported by \"framer-motion\". Is it installed?");
})), zl = (e) => !Fl(e);
function Bl(e) {
	typeof e == "function" && (zl = (t) => t.startsWith("on") ? !Fl(t) : e(t));
}
try {
	Bl((Rl(), ge(Il)).default);
} catch {}
function Vl(e, t, n) {
	let r = {};
	for (let i in e) i === "values" && typeof e.values == "object" || U(e[i]) || (zl(i) || n === !0 && Fl(i) || !t && !Fl(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var Hl = /* @__PURE__ */ a({});
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function Ul(e, t) {
	if (ho(e)) {
		let { initial: t, animate: n } = e;
		return {
			initial: t === !1 || fo(t) ? t : void 0,
			animate: fo(n) ? n : void 0
		};
	}
	return e.inherit === !1 ? {} : t;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function Wl(e) {
	let { initial: t, animate: n } = Ul(e, d(Hl));
	return _(() => ({
		initial: t,
		animate: n
	}), [Gl(t), Gl(n)]);
}
function Gl(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var Kl = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/render/html/use-props.mjs
function ql(e, t, n) {
	for (let r in t) !U(t[r]) && !as(r, n) && (e[r] = t[r]);
}
function Jl({ transformTemplate: e }, t) {
	return _(() => {
		let n = Kl();
		return $o(n, t, e), Object.assign({}, n.vars, n.style);
	}, [t]);
}
function Yl(e, t) {
	let n = e.style || {}, r = {};
	return ql(r, n, e), Object.assign(r, Jl(e, t)), r;
}
function Xl(e, t) {
	let n = {}, r = Yl(e, t);
	return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var Zl = () => ({
	...Kl(),
	attrs: {}
});
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function Ql(e, t, n, r) {
	let i = _(() => {
		let n = Zl();
		return hs(n, t, _s(r), e.transformTemplate, e.style), {
			...n.attrs,
			style: { ...n.style }
		};
	}, [t]);
	if (e.style) {
		let t = {};
		ql(t, e.style, e), i.style = {
			...t,
			...i.style
		};
	}
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var $l = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view"
];
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function eu(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!($l.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function tu(e, t, n, { latestValues: r }, a, s = !1, c) {
	let l = (c ?? eu(e) ? Ql : Xl)(t, r, a, e), u = Vl(t, typeof e == "string", s), d = e === i ? {} : {
		...u,
		...l,
		ref: n
	}, { children: f } = t, p = _(() => U(f) ? f.get() : f, [f]);
	return o(e, {
		...d,
		children: p
	});
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function nu({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
	return {
		latestValues: ru(n, r, i, e),
		renderState: t()
	};
}
function ru(e, t, n, r) {
	let i = {}, a = r(e, {});
	for (let e in a) i[e] = Cc(a[e]);
	let { initial: o, animate: s } = e, c = ho(e), l = go(e);
	t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
	let u = n ? n.initial === !1 : !1;
	u ||= o === !1;
	let d = u ? s : o;
	if (d && typeof d != "boolean" && !uo(d)) {
		let t = Array.isArray(d) ? d : [d];
		for (let n = 0; n < t.length; n++) {
			let r = Oi(e, t[n]);
			if (r) {
				let { transitionEnd: e, transition: t, ...n } = r;
				for (let e in n) {
					let t = n[e];
					if (Array.isArray(t)) {
						let e = u ? t.length - 1 : 0;
						t = t[e];
					}
					t !== null && (i[e] = t);
				}
				for (let t in e) i[t] = e[t];
			}
		}
	}
	return i;
}
var iu = (e) => (t, n) => {
	let r = d(Hl), i = d(Se), a = () => nu(e, t, r, i);
	return n ? a() : be(a);
}, au = /* @__PURE__ */ iu({
	scrapeMotionValuesFromProps: os,
	createRenderState: Kl
}), ou = /* @__PURE__ */ iu({
	scrapeMotionValuesFromProps: ys,
	createRenderState: Zl
}), su = Symbol.for("motionComponentSymbol");
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function cu(e, t, n) {
	let r = v(n);
	h(() => {
		r.current = n;
	});
	let i = v(null);
	return u((n) => {
		n && e.onMount?.(n);
		let a = r.current;
		if (typeof a == "function") if (n) {
			let e = a(n);
			typeof e == "function" && (i.current = e);
		} else i.current ? (i.current(), i.current = null) : a(n);
		else a && (a.current = n);
		t && (n ? t.mount(n) : t.unmount());
	}, [t]);
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var lu = a({});
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function uu(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function du(e, t, n, r, i, a) {
	let { visualElement: o } = d(Hl), s = d(Ol), c = d(Se), l = d(ul), u = l.reducedMotion, p = l.skipAnimations, m = v(null), g = v(!1);
	r ||= s.renderer, !m.current && r && (m.current = r(e, {
		visualState: t,
		parent: o,
		props: n,
		presenceContext: c,
		blockInitialAnimation: c ? c.initial === !1 : !1,
		reducedMotionConfig: u,
		skipAnimations: p,
		isSVG: a
	}), g.current && m.current && (m.current.manuallyAnimateOnMount = !0));
	let _ = m.current, y = d(lu);
	_ && !_.projection && i && (_.type === "html" || _.type === "svg") && fu(m.current, n, i, y);
	let b = v(!1);
	h(() => {
		_ && b.current && _.update(n, c);
	});
	let x = n[Ui], S = v(!!x && typeof window < "u" && !window.MotionHandoffIsComplete?.(x) && window.MotionHasOptimisedAnimation?.(x));
	return xe(() => {
		g.current = !0, _ && (b.current = !0, window.MotionIsMounted = !0, _.updateFeatures(), _.scheduleRenderMicrotask(), S.current && _.animationState && _.animationState.animateChanges());
	}), f(() => {
		_ && (!S.current && _.animationState && _.animationState.animateChanges(), S.current &&= (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(x);
		}), !1), _.enteringChildren = void 0);
	}), _;
}
function fu(e, t, n, r) {
	let { layoutId: i, layout: a, drag: o, dragConstraints: s, layoutScroll: c, layoutRoot: l, layoutAnchor: u, layoutCrossfade: d } = t;
	e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : pu(e.parent)), e.projection.setOptions({
		layoutId: i,
		layout: a,
		alwaysMeasureLayout: !!o || s && uu(s),
		visualElement: e,
		animationType: typeof a == "string" ? a : "both",
		initialPromotionConfig: r,
		crossfade: d,
		layoutScroll: c,
		layoutRoot: l,
		layoutAnchor: u
	});
}
function pu(e) {
	if (e) return e.options.allowProjection === !1 ? pu(e.parent) : e.projection;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/motion/index.mjs
function mu(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
	r && Nl(r);
	let a = n ? n === "svg" : eu(e), o = a ? ou : au;
	function c(n, s) {
		let c, l = {
			...d(ul),
			...n,
			layoutId: hu(n)
		}, { isStatic: u } = l, f = Wl(n), p = o(n, u);
		if (!u && typeof window < "u") {
			gu(l, r);
			let t = _u(l);
			c = t.MeasureLayout, f.visualElement = du(e, p, l, i, t.ProjectionNode, a);
		}
		return S(Hl.Provider, {
			value: f,
			children: [c && f.visualElement ? x(c, {
				visualElement: f.visualElement,
				...l
			}) : null, tu(e, n, cu(p, f.visualElement, s), p, u, t, a)]
		});
	}
	c.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
	let l = s(c);
	return l[su] = e, l;
}
function hu({ layoutId: e }) {
	let t = d(ye).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function gu(e, t) {
	let n = d(Ol).strict;
	if (process.env.NODE_ENV !== "production" && t && n) {
		let t = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		e.ignoreStrict ? De(!1, t, "lazy-strict-mode") : Oe(!1, t, "lazy-strict-mode");
	}
}
function _u(e) {
	let { drag: t, layout: n } = Ml();
	if (!t && !n) return {};
	let r = {
		...t,
		...n
	};
	return {
		MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
		ProjectionNode: r.ProjectionNode
	};
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function vu(e, t) {
	if (typeof Proxy > "u") return mu;
	let n = /* @__PURE__ */ new Map(), r = (n, r) => mu(n, r, e, t);
	return new Proxy((e, t) => (process.env.NODE_ENV !== "production" && Be(!1, "motion() is deprecated. Use motion.create() instead."), r(e, t)), { get: (i, a) => a === "create" ? r : (n.has(a) || n.set(a, mu(a, void 0, e, t)), n.get(a)) });
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var yu = (e, t) => t.isSVG ?? eu(e) ? new bs(t) : new cs(t, { allowProjection: e !== i }), bu = class extends Oo {
	constructor(e) {
		super(e), e.animationState ||= Ds(e);
	}
	updateAnimationControlsSubscription() {
		let { animate: e } = this.node.getProps();
		uo(e) && (this.unmountControls = e.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		let { animate: e } = this.node.getProps(), { animate: t } = this.node.prevProps || {};
		e !== t && this.updateAnimationControlsSubscription();
	}
	unmount() {
		this.node.animationState.reset(), this.unmountControls?.();
	}
}, xu = 0, Su = {
	animation: { Feature: bu },
	exit: { Feature: class extends Oo {
		constructor() {
			super(...arguments), this.id = xu++, this.isExitComplete = !1;
		}
		update() {
			if (!this.node.presenceContext) return;
			let { isPresent: e, onExitComplete: t } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || e === n) return;
			if (e && n === !1) {
				if (this.isExitComplete) {
					let { initial: e, custom: t } = this.node.getProps();
					if (typeof e == "string") {
						let n = ki(this.node, e, t);
						if (n) {
							let { transition: e, transitionEnd: t, ...r } = n;
							for (let e in r) this.node.getValue(e)?.jump(r[e]);
						}
					}
					this.node.animationState.reset(), this.node.animationState.animateChanges();
				} else this.node.animationState.setActive("exit", !1);
				this.isExitComplete = !1;
				return;
			}
			let r = this.node.animationState.setActive("exit", !e);
			t && !e && r.then(() => {
				this.isExitComplete = !0, t(this.id);
			});
		}
		mount() {
			let { register: e, onExitComplete: t } = this.node.presenceContext || {};
			t && t(this.id), e && (this.unmount = e(this.id));
		}
		unmount() {}
	} }
};
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/events/event-info.mjs
function Cu(e) {
	return { point: {
		x: e.pageX,
		y: e.pageY
	} };
}
var wu = (e) => (t) => Ea(t) && e(t, Cu(t));
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function Tu(e, t, n, r) {
	return yc(e, t, wu(n), r);
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/utils/get-context-window.mjs
var Eu = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Du = (e, t) => Math.abs(e - t);
function Ou(e, t) {
	let n = Du(e.x, t.x), r = Du(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
var ku = /* @__PURE__ */ new Set(["auto", "scroll"]), Au = class {
	constructor(e, t, { transformPagePoint: n, contextWindow: r = window, dragSnapToOrigin: i = !1, distanceThreshold: a = 3, element: o } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (e) => {
			this.handleScroll(e.target);
		}, this.onWindowScroll = () => {
			this.handleScroll(window);
		}, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			this.lastRawMoveEventInfo && (this.lastMoveEventInfo = ju(this.lastRawMoveEventInfo, this.transformPagePoint));
			let e = Nu(this.lastMoveEventInfo, this.history), t = this.startEvent !== null, n = Ou(e.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!t && !n) return;
			let { point: r } = e, { timestamp: i } = I;
			this.history.push({
				...r,
				timestamp: i
			});
			let { onStart: a, onMove: o } = this.handlers;
			t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e);
		}, this.handlePointerMove = (e, t) => {
			this.lastMoveEvent = e, this.lastRawMoveEventInfo = t, this.lastMoveEventInfo = ju(t, this.transformPagePoint), F.update(this.updatePoint, !0);
		}, this.handlePointerUp = (e, t) => {
			this.end();
			let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
			if ((this.dragSnapToOrigin || !this.startEvent) && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let a = Nu(e.type === "pointercancel" ? this.lastMoveEventInfo : ju(t, this.transformPagePoint), this.history);
			this.startEvent && n && n(e, a), r && r(e, a);
		}, !Ea(e)) return;
		this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.distanceThreshold = a, this.contextWindow = r || window;
		let s = ju(Cu(e), this.transformPagePoint), { point: c } = s, { timestamp: l } = I;
		this.history = [{
			...c,
			timestamp: l
		}];
		let { onSessionStart: u } = t;
		u && u(e, Nu(s, this.history)), this.removeListeners = Fe(Tu(this.contextWindow, "pointermove", this.handlePointerMove), Tu(this.contextWindow, "pointerup", this.handlePointerUp), Tu(this.contextWindow, "pointercancel", this.handlePointerUp)), o && this.startScrollTracking(o);
	}
	startScrollTracking(e) {
		let t = e.parentElement;
		for (; t;) {
			let e = getComputedStyle(t);
			(ku.has(e.overflowX) || ku.has(e.overflowY)) && this.scrollPositions.set(t, {
				x: t.scrollLeft,
				y: t.scrollTop
			}), t = t.parentElement;
		}
		this.scrollPositions.set(window, {
			x: window.scrollX,
			y: window.scrollY
		}), window.addEventListener("scroll", this.onElementScroll, { capture: !0 }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
			window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }), window.removeEventListener("scroll", this.onWindowScroll);
		};
	}
	handleScroll(e) {
		let t = this.scrollPositions.get(e);
		if (!t) return;
		let n = e === window, r = n ? {
			x: window.scrollX,
			y: window.scrollY
		} : {
			x: e.scrollLeft,
			y: e.scrollTop
		}, i = {
			x: r.x - t.x,
			y: r.y - t.y
		};
		i.x === 0 && i.y === 0 || (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(e, r), F.update(this.updatePoint, !0));
	}
	updateHandlers(e) {
		this.handlers = e;
	}
	end() {
		this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), gt(this.updatePoint);
	}
};
function ju(e, t) {
	return t ? { point: t(e.point) } : e;
}
function Mu(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function Nu({ point: e }, t) {
	return {
		point: e,
		delta: Mu(e, Fu(t)),
		offset: Mu(e, Pu(t)),
		velocity: Iu(t, .1)
	};
}
function Pu(e) {
	return e[0];
}
function Fu(e) {
	return e[e.length - 1];
}
function Iu(e, t) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let n = e.length - 1, r = null, i = Fu(e);
	for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ N(t)));) n--;
	if (!r) return {
		x: 0,
		y: 0
	};
	r === e[0] && e.length > 2 && i.timestamp - r.timestamp > /* @__PURE__ */ N(t) * 2 && (r = e[1]);
	let a = /* @__PURE__ */ P(i.timestamp - r.timestamp);
	if (a === 0) return {
		x: 0,
		y: 0
	};
	let o = {
		x: (i.x - r.x) / a,
		y: (i.y - r.y) / a
	};
	return o.x === Infinity && (o.x = 0), o.y === Infinity && (o.y = 0), o;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function Lu(e, { min: t, max: n }, r) {
	return t !== void 0 && e < t ? e = r ? V(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? V(n, e, r.max) : Math.min(e, n)), e;
}
function Ru(e, t, n) {
	return {
		min: t === void 0 ? void 0 : e.min + t,
		max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
	};
}
function zu(e, { top: t, left: n, bottom: r, right: i }) {
	return {
		x: Ru(e.x, n, i),
		y: Ru(e.y, t, r)
	};
}
function Bu(e, t) {
	let n = t.min - e.min, r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
		min: n,
		max: r
	};
}
function Vu(e, t) {
	return {
		x: Bu(e.x, t.x),
		y: Bu(e.y, t.y)
	};
}
function Hu(e, t) {
	let n = .5, r = K(e), i = K(t);
	return i > r ? n = /* @__PURE__ */ Ie(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ Ie(e.min, e.max - i, t.min)), Te(0, 1, n);
}
function Uu(e, t) {
	let n = {};
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var Wu = .35;
function Gu(e = Wu) {
	return e === !1 ? e = 0 : e === !0 && (e = Wu), {
		x: Ku(e, "left", "right"),
		y: Ku(e, "top", "bottom")
	};
}
function Ku(e, t, n) {
	return {
		min: qu(e, t),
		max: qu(e, n)
	};
}
function qu(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var Ju = /* @__PURE__ */ new WeakMap(), Yu = class {
	constructor(e) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = G(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
	}
	start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
		let { presenceContext: r } = this.visualElement;
		if (r && r.isPresent === !1) return;
		let i = (e) => {
			t && this.snapToCursor(Cu(e).point), this.stopAnimation();
		}, a = (e, t) => {
			let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
			if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = xa(n), !this.openDragLock)) return;
			this.latestPointerEvent = e, this.latestPanInfo = t, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), sc((e) => {
				let t = this.getAxisMotionValue(e).get() || 0;
				if (Ut.test(t)) {
					let { projection: n } = this.visualElement;
					if (n && n.layout) {
						let r = n.layout.layoutBox[e];
						r && (t = K(r) * (parseFloat(t) / 100));
					}
				}
				this.originPoint[e] = t;
			}), i && F.update(() => i(e, t), !1, !0), Vi(this.visualElement, "transform");
			let { animationState: a } = this.visualElement;
			a && a.setActive("whileDrag", !0);
		}, o = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t;
			let { dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a } = this.getProps();
			if (!n && !this.openDragLock) return;
			let { offset: o } = t;
			if (r && this.currentDirection === null) {
				this.currentDirection = $u(o), this.currentDirection !== null && i && i(this.currentDirection);
				return;
			}
			this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), a && F.update(() => a(e, t), !1, !0);
		}, s = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t, this.stop(e, t), this.latestPointerEvent = null, this.latestPanInfo = null;
		}, c = () => {
			let { dragSnapToOrigin: e } = this.getProps();
			(e || this.constraints) && this.startAnimation({
				x: 0,
				y: 0
			});
		}, { dragSnapToOrigin: l } = this.getProps();
		this.panSession = new Au(e, {
			onSessionStart: i,
			onStart: a,
			onMove: o,
			onSessionEnd: s,
			resumeAnimation: c
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: l,
			distanceThreshold: n,
			contextWindow: Eu(this.visualElement),
			element: this.visualElement.current
		});
	}
	stop(e, t) {
		let n = e || this.latestPointerEvent, r = t || this.latestPanInfo, i = this.isDragging;
		if (this.cancel(), !i || !r || !n) return;
		let { velocity: a } = r;
		this.startAnimation(a);
		let { onDragEnd: o } = this.getProps();
		o && F.postRender(() => o(n, r));
	}
	cancel() {
		this.isDragging = !1;
		let { projection: e, animationState: t } = this.visualElement;
		e && (e.isAnimationBlocked = !1), this.endPanSession();
		let { dragPropagation: n } = this.getProps();
		!n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t && t.setActive("whileDrag", !1);
	}
	endPanSession() {
		this.panSession && this.panSession.end(), this.panSession = void 0;
	}
	updateAxis(e, t, n) {
		let { drag: r } = this.getProps();
		if (!n || !Qu(e, r, this.currentDirection)) return;
		let i = this.getAxisMotionValue(e), a = this.originPoint[e] + n[e];
		this.constraints && this.constraints[e] && (a = Lu(a, this.constraints[e], this.elastic[e])), i.set(a);
	}
	resolveConstraints() {
		let { dragConstraints: e, dragElastic: t } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, r = this.constraints;
		e && uu(e) ? this.constraints ||= this.resolveRefConstraints() : e && n ? this.constraints = zu(n.layoutBox, e) : this.constraints = !1, this.elastic = Gu(t), r !== this.constraints && !uu(e) && n && this.constraints && !this.hasMutatedConstraints && sc((e) => {
			this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = Uu(n.layoutBox[e], this.constraints[e]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
		if (!e || !uu(e)) return !1;
		let n = e.current;
		Oe(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
		let { projection: r } = this.visualElement;
		if (!r || !r.layout) return !1;
		let i = Yo(n, r.root, this.visualElement.getTransformPagePoint()), a = Vu(r.layout.layoutBox, i);
		if (t) {
			let e = t(Ao(a));
			this.hasMutatedConstraints = !!e, e && (a = ko(e));
		}
		return a;
	}
	startAnimation(e) {
		let { drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: o } = this.getProps(), s = this.constraints || {}, c = sc((o) => {
			if (!Qu(o, t, this.currentDirection)) return;
			let c = s && s[o] || {};
			(a === !0 || a === o) && (c = {
				min: 0,
				max: 0
			});
			let l = r ? 200 : 1e6, u = r ? 40 : 1e7, d = {
				type: "inertia",
				velocity: n ? e[o] : 0,
				bounceStiffness: l,
				bounceDamping: u,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...i,
				...c
			};
			return this.startAxisValueAnimation(o, d);
		});
		return Promise.all(c).then(o);
	}
	startAxisValueAnimation(e, t) {
		let n = this.getAxisMotionValue(e);
		return Vi(this.visualElement, e), n.start(Ei(e, n, 0, t, this.visualElement, !1));
	}
	stopAnimation() {
		sc((e) => this.getAxisMotionValue(e).stop());
	}
	getAxisMotionValue(e) {
		let t = `_drag${e.toUpperCase()}`, n = this.visualElement.getProps();
		return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0);
	}
	snapToCursor(e) {
		sc((t) => {
			let { drag: n } = this.getProps();
			if (!Qu(t, n, this.currentDirection)) return;
			let { projection: r } = this.visualElement, i = this.getAxisMotionValue(t);
			if (r && r.layout) {
				let { min: n, max: a } = r.layout.layoutBox[t], o = i.get() || 0;
				i.set(e[t] - V(n, a, .5) + o);
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: e, dragConstraints: t } = this.getProps(), { projection: n } = this.visualElement;
		if (!uu(t) || !n || !this.constraints) return;
		this.stopAnimation();
		let r = {
			x: 0,
			y: 0
		};
		sc((e) => {
			let t = this.getAxisMotionValue(e);
			if (t && this.constraints !== !1) {
				let n = t.get();
				r[e] = Hu({
					min: n,
					max: n
				}, this.constraints[e]);
			}
		});
		let { transformTemplate: i } = this.visualElement.getProps();
		this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), sc((t) => {
			if (!Qu(t, e, null)) return;
			let n = this.getAxisMotionValue(t), { min: i, max: a } = this.constraints[t];
			n.set(V(i, a, r[t]));
		}), this.visualElement.render();
	}
	addListeners() {
		if (!this.visualElement.current) return;
		Ju.set(this.visualElement, this);
		let e = this.visualElement.current, t = Tu(e, "pointerdown", (t) => {
			let { drag: n, dragListener: r = !0 } = this.getProps(), i = t.target, a = i !== e && Aa(i);
			n && r && !a && this.start(t);
		}), n, r = () => {
			let { dragConstraints: t } = this.getProps();
			uu(t) && t.current && (this.constraints = this.resolveRefConstraints(), n ||= Zu(e, t.current, () => this.scalePositionWithinConstraints()));
		}, { projection: i } = this.visualElement, a = i.addEventListener("measure", r);
		i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), F.read(r);
		let o = yc(window, "resize", () => this.scalePositionWithinConstraints()), s = i.addEventListener("didUpdate", (({ delta: e, hasLayoutChanged: t }) => {
			this.isDragging && t && (sc((t) => {
				let n = this.getAxisMotionValue(t);
				n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate));
			}), this.visualElement.render());
		}));
		return () => {
			o(), t(), a(), s && s(), n && n();
		};
	}
	getProps() {
		let e = this.visualElement.getProps(), { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: i = !1, dragElastic: a = Wu, dragMomentum: o = !0 } = e;
		return {
			...e,
			drag: t,
			dragDirectionLock: n,
			dragPropagation: r,
			dragConstraints: i,
			dragElastic: a,
			dragMomentum: o
		};
	}
};
function Xu(e) {
	let t = !0;
	return () => {
		if (t) {
			t = !1;
			return;
		}
		e();
	};
}
function Zu(e, t, n) {
	let r = Qa(e, Xu(n)), i = Qa(t, Xu(n));
	return () => {
		r(), i();
	};
}
function Qu(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function $u(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var ed = class extends Oo {
	constructor(e) {
		super(e), this.removeGroupControls = M, this.removeListeners = M, this.controls = new Yu(e);
	}
	mount() {
		let { dragControls: e } = this.node.getProps();
		e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || M;
	}
	update() {
		let { dragControls: e } = this.node.getProps(), { dragControls: t } = this.node.prevProps || {};
		e !== t && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
	}
}, td = (e) => (t, n) => {
	e && F.update(() => e(t, n), !1, !0);
}, nd = class extends Oo {
	constructor() {
		super(...arguments), this.removePointerDownListener = M;
	}
	onPointerDown(e) {
		this.session = new Au(e, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: Eu(this.node)
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
		return {
			onSessionStart: td(e),
			onStart: td(t),
			onMove: td(n),
			onEnd: (e, t) => {
				delete this.session, r && F.postRender(() => r(e, t));
			}
		};
	}
	mount() {
		this.removePointerDownListener = Tu(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}, rd = !1, id = class extends r {
	componentDidMount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props, { projection: i } = e;
		i && (t.group && t.group.add(i), n && n.register && r && n.register(i), rd && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), i.setOptions({
			...i.options,
			layoutDependency: this.props.layoutDependency,
			onExitComplete: () => this.safeToRemove()
		})), Tc.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(e) {
		let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props, { projection: a } = n;
		return a ? (a.isPresent = i, e.layoutDependency !== t && a.setOptions({
			...a.options,
			layoutDependency: t
		}), rd = !0, r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || F.postRender(() => {
			let e = a.getStack();
			(!e || !e.members.length) && this.safeToRemove();
		})), null) : null;
	}
	componentDidUpdate() {
		let { visualElement: e, layoutAnchor: t } = this.props, { projection: n } = e;
		n && (n.options.layoutAnchor = t, n.root.didUpdate(), va.postRender(() => {
			!n.currentAnimation && n.isLead() && this.safeToRemove();
		}));
	}
	componentWillUnmount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props, { projection: r } = e;
		rd = !0, r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r));
	}
	safeToRemove() {
		let { safeToRemove: e } = this.props;
		e && e();
	}
	render() {
		return null;
	}
};
function ad(e) {
	let [t, n] = vl(), r = d(ye);
	return x(id, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: d(lu),
		isPresent: t,
		safeToRemove: n
	});
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/motion/features/drag.mjs
var od = {
	pan: { Feature: nd },
	drag: {
		Feature: ed,
		ProjectionNode: ll,
		MeasureLayout: ad
	}
};
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/gestures/hover.mjs
function sd(e, t, n) {
	let { props: r } = e;
	e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
	let i = r["onHover" + n];
	i && F.postRender(() => i(t, Cu(t)));
}
var cd = class extends Oo {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = wa(e, (e, t) => (sd(this.node, t, "Start"), (e) => sd(this.node, e, "End"))));
	}
	unmount() {}
}, ld = class extends Oo {
	constructor() {
		super(...arguments), this.isActive = !1;
	}
	onFocus() {
		let e = !1;
		try {
			e = this.node.current.matches(":focus-visible");
		} catch {
			e = !0;
		}
		!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
	}
	onBlur() {
		!this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
	}
	mount() {
		this.unmount = Fe(yc(this.node.current, "focus", () => this.onFocus()), yc(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/gestures/press.mjs
function ud(e, t, n) {
	let { props: r } = e;
	if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
	e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
	let i = r["onTap" + (n === "End" ? "" : n)];
	i && F.postRender(() => i(t, Cu(t)));
}
var dd = class extends Oo {
	mount() {
		let { current: e } = this.node;
		if (!e) return;
		let { globalTapTarget: t, propagate: n } = this.node.props;
		this.unmount = La(e, (e, t) => (ud(this.node, t, "Start"), (e, { success: t }) => ud(this.node, e, t ? "End" : "Cancel")), {
			useGlobalTarget: t,
			stopPropagation: n?.tap === !1
		});
	}
	unmount() {}
}, fd = /* @__PURE__ */ new WeakMap(), pd = /* @__PURE__ */ new WeakMap(), md = (e) => {
	let t = fd.get(e.target);
	t && t(e);
}, hd = (e) => {
	e.forEach(md);
};
function gd({ root: e, ...t }) {
	let n = e || document;
	pd.has(n) || pd.set(n, {});
	let r = pd.get(n), i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(hd, {
		root: e,
		...t
	})), r[i];
}
function _d(e, t, n) {
	let r = gd(t);
	return fd.set(e, n), r.observe(e), () => {
		fd.delete(e), r.unobserve(e);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var vd = {
	some: 0,
	all: 1
}, yd = class extends Oo {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
	}
	startObserver() {
		this.stopObserver?.();
		let { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = "some", once: i } = e, a = {
			root: t ? t.current : void 0,
			rootMargin: n,
			threshold: typeof r == "number" ? r : vd[r]
		};
		this.stopObserver = _d(this.node.current, a, (e) => {
			let { isIntersecting: t } = e;
			if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView)) return;
			t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
			let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(), a = t ? n : r;
			a && a(e);
		});
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		let { props: e, prevProps: t } = this.node;
		[
			"amount",
			"margin",
			"root"
		].some(bd(e, t)) && this.startObserver();
	}
	unmount() {
		this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
	}
};
function bd({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var xd = {
	inView: { Feature: yd },
	tap: { Feature: dd },
	focus: { Feature: ld },
	hover: { Feature: cd }
}, Sd = { layout: {
	ProjectionNode: ll,
	MeasureLayout: ad
} }, q = /* @__PURE__ */ vu({
	...Su,
	...xd,
	...od,
	...Sd
}, yu);
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/value/use-motion-value.mjs
function Cd(e) {
	let t = be(() => Fi(e)), { isStatic: n } = d(ul);
	if (n) {
		let [, n] = y(e);
		f(() => t.on("change", n), []);
	}
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/value/use-combine-values.mjs
function wd(e, t) {
	let n = Cd(t()), r = () => n.set(t());
	return r(), xe(() => {
		let t = () => F.preRender(r, !1, !0), n = e.map((e) => e.on("change", t));
		return () => {
			n.forEach((e) => e()), gt(r);
		};
	}), n;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/value/use-motion-template.mjs
function Td(e, ...t) {
	let n = e.length;
	function r() {
		let r = "";
		for (let i = 0; i < n; i++) {
			r += e[i];
			let n = t[i];
			n && (r += U(n) ? n.get() : n);
		}
		return r;
	}
	return wd(t.filter(U), r);
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/value/use-computed.mjs
function Ed(e) {
	Ni.current = [], e();
	let t = wd(Ni.current, e);
	return Ni.current = void 0, t;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/value/use-transform.mjs
function Dd(e, t, n, r) {
	if (typeof e == "function") return Ed(e);
	if (n !== void 0 && !Array.isArray(n) && typeof t != "function") return kd(e, t, n, r);
	let i = typeof t == "function" ? t : eo(t, n, r), a = Array.isArray(e) ? Od(e, i) : Od([e], ([e]) => i(e)), o = Array.isArray(e) ? void 0 : e.accelerate;
	return o && !o.isTransformed && typeof t != "function" && Array.isArray(n) && r?.clamp !== !1 && (a.accelerate = {
		...o,
		times: t,
		keyframes: n,
		isTransformed: !0,
		...r?.ease ? { ease: r.ease } : {}
	}), a;
}
function Od(e, t) {
	let n = be(() => []);
	return wd(e, () => {
		n.length = 0;
		let r = e.length;
		for (let t = 0; t < r; t++) n[t] = e[t].get();
		return t(n);
	});
}
function kd(e, t, n, r) {
	let i = be(() => Object.keys(n)), a = be(() => ({}));
	for (let o of i) a[o] = Dd(e, t, n[o], r);
	return a;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/value/use-follow-value.mjs
function Ad(e, t = {}) {
	let { isStatic: n } = d(ul), r = () => U(e) ? e.get() : e;
	if (n) return Dd(r);
	let i = Cd(r());
	return h(() => to(i, e, t), [i, JSON.stringify(t)]), i;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/value/use-spring.mjs
function jd(e, t = {}) {
	return Ad(e, {
		type: "spring",
		...t
	});
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs
function Md(e) {
	let t = v(0), { isStatic: n } = d(ul);
	f(() => {
		if (n) return;
		let r = ({ timestamp: n, delta: r }) => {
			t.current ||= n, e(n - t.current, r);
		};
		return F.update(r, !0), () => gt(r);
	}, [e]);
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/animation/utils/is-dom-keyframes.mjs
function Nd(e) {
	return typeof e == "object" && !Array.isArray(e);
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/animation/animate/resolve-subjects.mjs
function Pd(e, t, n, r) {
	return e == null ? [] : typeof e == "string" && Nd(t) ? ha(e, n, r) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e.filter((e) => e != null) : [e];
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-repeat-duration.mjs
function Fd(e, t, n) {
	return e * (t + 1);
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/animation/sequence/utils/calc-time.mjs
function Id(e, t, n, r) {
	return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? n : t.startsWith("<") ? Math.max(0, n + parseFloat(t.slice(1))) : r.get(t) ?? e;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/animation/sequence/utils/edit.mjs
function Ld(e, t, n) {
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		i.at > t && i.at < n && (we(e, i), r--);
	}
}
function Rd(e, t, n, r, i, a) {
	Ld(e, i, a);
	for (let o = 0; o < t.length; o++) e.push({
		value: t[o],
		at: V(i, a, r[o]),
		easing: ot(n, o)
	});
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/animation/sequence/utils/normalize-times.mjs
function zd(e, t) {
	for (let n = 0; n < e.length; n++) e[n] = e[n] / (t + 1);
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/animation/sequence/utils/sort.mjs
function Bd(e, t) {
	return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/animation/sequence/create.mjs
var Vd = "easeInOut", Hd = 20;
function Ud(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
	let a = t.duration || .3, o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = {}, l = /* @__PURE__ */ new Map(), u = 0, d = 0, f = 0;
	for (let n = 0; n < e.length; n++) {
		let o = e[n];
		if (typeof o == "string") {
			l.set(o, d);
			continue;
		} else if (!Array.isArray(o)) {
			l.set(o.name, Id(d, o.at, u, l));
			continue;
		}
		let [p, m, h = {}] = o;
		h.at !== void 0 && (d = Id(d, h.at, u, l));
		let g = 0, _ = (e, n, r, o = 0, s = 0) => {
			let c = Kd(e), { delay: l = 0, times: u = Jn(c), type: p = t.type || "keyframes", repeat: m, repeatType: h, repeatDelay: _ = 0, ...v } = n, { ease: y = t.ease || "easeOut", duration: b } = n, x = typeof l == "function" ? l(o, s) : l, S = c.length, C = Ur(p) ? p : i?.[p || "keyframes"];
			if (S <= 2 && C) {
				let e = 100;
				if (S === 2 && Yd(c)) {
					let t = c[1] - c[0];
					e = Math.abs(t);
				}
				let n = {
					...t,
					...v
				};
				b !== void 0 && (n.duration = /* @__PURE__ */ N(b));
				let r = jn(n, e, C);
				y = r.ease, b = r.duration;
			}
			b ??= a;
			let w = d + x;
			u.length === 1 && u[0] === 0 && (u[1] = 1);
			let T = u.length - c.length;
			if (T > 0 && qn(u, T), c.length === 1 && c.unshift(null), m) {
				Oe(m < Hd, "Repeat count too high, must be less than 20", "repeat-count-high"), b = Fd(b, m);
				let e = [...c], t = [...u];
				y = Array.isArray(y) ? [...y] : [y];
				let n = [...y];
				for (let r = 0; r < m; r++) {
					c.push(...e);
					for (let i = 0; i < e.length; i++) u.push(t[i] + (r + 1)), y.push(i === 0 ? "linear" : ot(n, i - 1));
				}
				zd(u, m);
			}
			let E = w + b;
			Rd(r, c, y, u, w, E), g = Math.max(x + b, g), f = Math.max(E, f);
		};
		if (U(p)) {
			let e = Wd(p, s);
			_(m, h, Gd("default", e));
		} else {
			let e = Pd(p, m, r, c), t = e.length;
			for (let n = 0; n < t; n++) {
				m = m, h = h;
				let r = e[n], i = Wd(r, s);
				for (let e in m) _(m[e], qd(h, e), Gd(e, i), n, t);
			}
		}
		u = d, d += g;
	}
	return s.forEach((e, r) => {
		for (let i in e) {
			let a = e[i];
			a.sort(Bd);
			let s = [], c = [], l = [];
			for (let e = 0; e < a.length; e++) {
				let { at: t, value: n, easing: r } = a[e];
				s.push(n), c.push(/* @__PURE__ */ Ie(0, f, t)), l.push(r || "easeOut");
			}
			c[0] !== 0 && (c.unshift(0), s.unshift(s[0]), l.unshift(Vd)), c[c.length - 1] !== 1 && (c.push(1), s.push(null)), o.has(r) || o.set(r, {
				keyframes: {},
				transition: {}
			});
			let u = o.get(r);
			u.keyframes[i] = s;
			let { type: d, ...p } = t;
			u.transition[i] = {
				...p,
				duration: f,
				ease: l,
				times: c,
				...n
			};
		}
	}), o;
}
function Wd(e, t) {
	return !t.has(e) && t.set(e, {}), t.get(e);
}
function Gd(e, t) {
	return t[e] || (t[e] = []), t[e];
}
function Kd(e) {
	return Array.isArray(e) ? e : [e];
}
function qd(e, t) {
	return e && e[t] ? {
		...e,
		...e[t]
	} : { ...e };
}
var Jd = (e) => typeof e == "number", Yd = (e) => e.every(Jd);
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/animation/utils/create-visual-element.mjs
function Xd(e) {
	let t = {
		presenceContext: null,
		props: {},
		visualState: {
			renderState: {
				transform: {},
				transformOrigin: {},
				style: {},
				vars: {},
				attrs: {}
			},
			latestValues: {}
		}
	}, n = Ra(e) && !$a(e) ? new bs(t) : new cs(t);
	n.mount(e), lo.set(e, n);
}
function Zd(e) {
	let t = new us({
		presenceContext: null,
		props: {},
		visualState: {
			renderState: { output: {} },
			latestValues: {}
		}
	});
	t.mount(e), lo.set(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/animation/animate/subject.mjs
function Qd(e, t) {
	return U(e) || typeof e == "number" || typeof e == "string" && !Nd(t);
}
function $d(e, t, n, r) {
	let i = [];
	if (Qd(e, t)) i.push(vc(e, Nd(t) && t.default || t, n && (n.default || n)));
	else {
		if (e == null) return i;
		let a = Pd(e, t, r), o = a.length;
		Oe(!!o, "No valid elements provided.", "no-valid-elements");
		for (let e = 0; e < o; e++) {
			let r = a[e], s = r instanceof Element ? Xd : Zd;
			lo.has(r) || s(r);
			let c = lo.get(r), l = { ...n };
			"delay" in l && typeof l.delay == "function" && (l.delay = l.delay(e, o)), i.push(...Ki(c, {
				...t,
				transition: l
			}, {}));
		}
	}
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/animation/animate/sequence.mjs
function ef(e, t, n) {
	let r = [];
	return Ud(e.map((e) => {
		if (Array.isArray(e) && typeof e[0] == "function") {
			let t = e[0], n = Fi(0);
			return n.on("change", t), e.length === 1 ? [n, [0, 1]] : e.length === 2 ? [
				n,
				[0, 1],
				e[1]
			] : [
				n,
				e[1],
				e[2]
			];
		}
		return e;
	}), t, n, { spring: Vn }).forEach(({ keyframes: e, transition: t }, n) => {
		r.push(...$d(n, e, t));
	}), r;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.38.0_react_c6850c7a3f6ac082229dee387470c1fc/node_modules/framer-motion/dist/es/animation/animate/index.mjs
function tf(e) {
	return Array.isArray(e) && e.some(Array.isArray);
}
function nf(e = {}) {
	let { scope: t, reduceMotion: n } = e;
	function r(e, r, i) {
		let a = [], o;
		if (tf(e)) {
			let { onComplete: i, ...s } = r || {};
			typeof i == "function" && (o = i), a = ef(e, n === void 0 ? s : {
				reduceMotion: n,
				...s
			}, t);
		} else {
			let { onComplete: s, ...c } = i || {};
			typeof s == "function" && (o = s), a = $d(e, r, n === void 0 ? c : {
				reduceMotion: n,
				...c
			}, t);
		}
		let s = new di(a);
		return o && s.finished.then(o), t && (t.animations.push(s), s.finished.then(() => {
			we(t.animations, s);
		})), s;
	}
	return r;
}
var rf = nf(), af = s((e, t) => /* @__PURE__ */ x("svg", {
	width: 192,
	height: 36,
	viewBox: "0 0 192 36",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: /* @__PURE__ */ x("path", {
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M139.11 15.884H135.582V23.8C135.582 24.6027 135.732 25.1814 136.03 25.536C136.329 25.872 136.805 26.04 137.458 26.04C137.701 26.04 137.962 26.012 138.242 25.956C138.522 25.9 138.774 25.816 138.998 25.704L139.082 27.86C138.765 27.972 138.41 28.056 138.018 28.112C137.645 28.1867 137.253 28.224 136.842 28.224C135.592 28.224 134.63 27.8787 133.958 27.188C133.305 26.4974 132.978 25.4614 132.978 24.08V15.884H130.43V13.728H132.978V7.92004H135.582V13.728H139.11V15.884ZM117.188 20.692H124.608L120.912 11.396L117.188 20.692ZM114.22 28H111.14L119.736 8.17604H122.256L130.768 28H127.632L125.616 23.128H116.208L114.22 28ZM145.441 15.12C144.713 15.6054 144.181 16.2027 143.845 16.912H143.761C143.761 16.632 143.752 16.2867 143.733 15.876C143.715 15.4467 143.687 15.064 143.649 14.728H141.157C141.195 15.1574 141.223 15.652 141.241 16.212C141.26 16.772 141.269 17.2294 141.269 17.584V28H143.901V20.944C143.901 19.6187 144.219 18.564 144.853 17.78C145.507 16.9774 146.319 16.576 147.289 16.576C147.812 16.576 148.251 16.6694 148.605 16.856C148.96 17.024 149.249 17.2667 149.473 17.584C149.697 17.8827 149.856 18.2467 149.949 18.676C150.043 19.1054 150.089 19.5814 150.089 20.104V28H152.721V20.832C152.721 20.3094 152.777 19.796 152.889 19.292C153.02 18.788 153.216 18.34 153.477 17.948C153.757 17.5374 154.112 17.2107 154.541 16.968C154.971 16.7067 155.484 16.576 156.081 16.576C156.66 16.576 157.136 16.688 157.509 16.912C157.883 17.136 158.181 17.4347 158.405 17.808C158.629 18.1814 158.788 18.6107 158.881 19.096C158.975 19.5814 159.021 20.0947 159.021 20.636V28H161.653V19.768C161.653 19.0214 161.551 18.3214 161.345 17.668C161.159 17.0147 160.86 16.4454 160.449 15.96C160.039 15.4747 159.525 15.092 158.909 14.812C158.293 14.5134 157.556 14.364 156.697 14.364C155.745 14.364 154.868 14.5974 154.065 15.064C153.263 15.512 152.637 16.1654 152.189 17.024C151.779 16.072 151.209 15.3907 150.481 14.98C149.772 14.5694 148.969 14.364 148.073 14.364C147.065 14.364 146.188 14.616 145.441 15.12ZM176.233 21.336C176.233 20.7014 176.131 20.0947 175.925 19.516C175.739 18.9374 175.459 18.4334 175.085 18.004C174.712 17.556 174.245 17.2014 173.685 16.94C173.144 16.6787 172.519 16.548 171.809 16.548C171.1 16.548 170.465 16.6787 169.905 16.94C169.364 17.2014 168.907 17.556 168.533 18.004C168.16 18.4334 167.871 18.9374 167.665 19.516C167.479 20.0947 167.385 20.7014 167.385 21.336C167.385 21.9707 167.479 22.5774 167.665 23.156C167.871 23.7347 168.16 24.248 168.533 24.696C168.907 25.144 169.364 25.4987 169.905 25.76C170.465 26.0214 171.1 26.152 171.809 26.152C172.519 26.152 173.144 26.0214 173.685 25.76C174.245 25.4987 174.712 25.144 175.085 24.696C175.459 24.248 175.739 23.7347 175.925 23.156C176.131 22.5774 176.233 21.9707 176.233 21.336ZM178.977 21.336C178.977 22.3627 178.791 23.3054 178.417 24.164C178.063 25.0227 177.559 25.7694 176.905 26.404C176.271 27.02 175.515 27.5054 174.637 27.86C173.76 28.196 172.817 28.364 171.809 28.364C170.801 28.364 169.859 28.196 168.981 27.86C168.104 27.5054 167.348 27.02 166.713 26.404C166.079 25.7694 165.575 25.0227 165.201 24.164C164.847 23.3054 164.669 22.3627 164.669 21.336C164.669 20.3094 164.847 19.376 165.201 18.536C165.575 17.6774 166.079 16.94 166.713 16.324C167.348 15.708 168.104 15.232 168.981 14.896C169.859 14.5414 170.801 14.364 171.809 14.364C172.817 14.364 173.76 14.5414 174.637 14.896C175.515 15.232 176.271 15.708 176.905 16.324C177.559 16.94 178.063 17.6774 178.417 18.536C178.791 19.376 178.977 20.3094 178.977 21.336ZM187.975 16.912C188.517 17.2107 188.937 17.6027 189.235 18.088L191.055 16.548C190.57 15.8387 189.879 15.2974 188.983 14.924C188.106 14.5507 187.191 14.364 186.239 14.364C185.605 14.364 184.989 14.448 184.391 14.616C183.794 14.7654 183.262 15.008 182.795 15.344C182.329 15.6614 181.946 16.0814 181.647 16.604C181.367 17.108 181.227 17.7147 181.227 18.424C181.227 19.04 181.339 19.5627 181.563 19.992C181.806 20.4027 182.114 20.748 182.487 21.028C182.861 21.308 183.271 21.532 183.719 21.7C184.186 21.8494 184.643 21.98 185.091 22.092C186.23 22.3534 187.089 22.6334 187.667 22.932C188.265 23.2307 188.563 23.688 188.563 24.304C188.563 24.6774 188.489 24.9854 188.339 25.228C188.19 25.4707 187.985 25.6667 187.723 25.816C187.481 25.9654 187.201 26.0774 186.883 26.152C186.585 26.208 186.267 26.236 185.931 26.236C185.185 26.236 184.494 26.0587 183.859 25.704C183.243 25.3494 182.758 24.9107 182.403 24.388L180.527 25.984C181.162 26.7867 181.955 27.384 182.907 27.776C183.878 28.168 184.867 28.364 185.875 28.364C186.547 28.364 187.201 28.2894 187.835 28.14C188.47 27.9907 189.03 27.748 189.515 27.412C190.019 27.0574 190.421 26.6094 190.719 26.068C191.018 25.5267 191.167 24.864 191.167 24.08C191.167 23.5014 191.055 22.9974 190.831 22.568C190.607 22.1387 190.29 21.7747 189.879 21.476C189.487 21.1587 189.021 20.8974 188.479 20.692C187.938 20.4867 187.35 20.3094 186.715 20.16C185.707 19.936 184.951 19.6934 184.447 19.432C183.943 19.152 183.691 18.732 183.691 18.172C183.691 17.8547 183.757 17.5934 183.887 17.388C184.037 17.164 184.223 16.9867 184.447 16.856C184.69 16.7067 184.961 16.604 185.259 16.548C185.558 16.4734 185.857 16.436 186.155 16.436C186.827 16.436 187.434 16.5947 187.975 16.912ZM2.95973 27.9533H0V7.93701H2.95973C8.48624 7.93701 12.9927 12.4323 12.9927 17.9451C12.9927 23.4579 8.48624 27.9533 2.95973 27.9533ZM25.5841 7.93701H28.5439V27.9533H25.5841C20.0576 27.9533 15.5511 23.4579 15.5511 17.9451C15.5511 12.4323 20.0576 7.93701 25.5841 7.93701ZM34.6222 7.93701H41.8682C47.4003 7.93701 51.9012 12.4268 51.9012 17.9451C51.9012 23.4635 47.4003 27.9533 41.8682 27.9533H34.6222V7.93701ZM37.6627 24.9175H41.8682C45.717 24.9175 48.8579 21.7871 48.8579 17.9424C48.8579 14.1031 45.7198 10.97 41.8682 10.97H37.6627V24.9175ZM53.4424 21.0365C53.4424 17.2112 56.561 14.1003 60.3958 14.1003C64.2307 14.1003 67.3492 17.2112 67.3492 21.0365C67.3492 24.8619 64.2307 27.9727 60.3958 27.9727C56.561 27.9727 53.4424 24.8619 53.4424 21.0365ZM56.2043 21.0115C56.2043 23.305 58.0687 25.1927 60.3958 25.1927C62.6978 25.1927 64.5874 23.3301 64.5874 21.0115C64.5874 18.718 62.695 16.8303 60.3958 16.8303C58.0966 16.8303 56.2043 18.6902 56.2043 21.0115ZM73.3574 27.9755H70.3168V7.93979H73.3574V27.9755ZM79.9647 15.3514C81.0906 14.5646 82.4618 14.1003 83.9389 14.1003C87.7709 14.1003 90.8895 17.2112 90.8923 21.0365C90.8923 24.8619 87.7737 27.9727 83.9389 27.9727C82.4618 27.9727 81.0934 27.5084 79.9647 26.7217V27.9755H76.9158V7.93979H79.9647V15.3514ZM79.9647 22.3292C80.5165 23.9861 82.08 25.1927 83.9389 25.1927C86.2381 25.1927 88.1304 23.3328 88.1304 21.0115C88.1304 18.718 86.2381 16.8303 83.9389 16.8303C82.0995 16.8303 80.5221 18.023 79.9647 19.691C79.8254 20.1052 79.7473 20.55 79.7473 21.0115C79.7473 21.473 79.8254 21.915 79.9647 22.3292ZM99.0715 22.9937L103.035 14.1059H106.357C105.983 14.9363 103.631 20.1804 101.593 24.7238C99.933 28.4242 98.4816 31.6599 98.4778 31.6674C97.5944 33.6468 95.2589 34.5419 93.283 33.6607L92.2295 33.1908L92.224 33.1881L93.453 30.4386L93.8905 30.6332C94.7043 30.9974 95.6658 30.6276 96.0309 29.8131C96.0337 29.8048 97.4104 26.7161 97.4104 26.7161L91.7864 14.1059H95.1084L99.0715 22.9937Z",
		fill: "currentColor"
	})
})), of = s((e, t) => /* @__PURE__ */ S("svg", {
	width: 30,
	height: 20,
	viewBox: "0 0 30 20",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: [/* @__PURE__ */ x("g", {
		clipPath: "url(#clip0_207_8)",
		children: /* @__PURE__ */ x("path", {
			d: "M16.0117 1.81812C18.4258 1.81812 19.8776 4.78099 20.958 7.92092L21.0631 8.23024L21.1659 8.54011L21.2666 8.84995C21.5987 9.88202 21.8972 10.9037 22.1828 11.8167C22.839 8.96008 22.4949 8.34671 23.1979 8.34671C23.4594 8.34671 23.724 8.53256 23.724 8.87123C23.724 9.0083 23.5105 10.461 23.2136 11.9166L23.1588 12.1809L23.1023 12.4436C23.0068 12.8791 22.9051 13.3002 22.8009 13.6704C25.8224 21.9469 28.0659 11.0453 28.3194 8.81691C28.3564 8.49556 28.5879 8.34672 28.8219 8.34672C29.1344 8.34672 29.3907 8.59283 29.3418 8.96318C28.8009 12.5671 27.9689 18.1818 24.5482 18.1818C22.6604 18.1818 21.5992 16.6374 20.7611 14.8678C20.179 13.6722 19.6841 12.2511 19.2288 10.8221L19.1203 10.4791C19.0844 10.3648 19.0487 10.2505 19.0132 10.1364L18.9073 9.79479C17.8713 6.44275 16.9926 3.33702 15.6457 3.33702C14.9875 3.33702 14.4995 4.05555 14.4657 4.05555C14.4036 4.05555 14.3548 3.76279 13.7401 2.96069C14.3251 2.26231 15.1314 1.81812 16.0117 1.81812ZM4.80934 1.82692C10.1957 1.82692 10.6747 16.6849 13.7232 16.6849C14.0811 16.6849 14.4669 16.4581 14.8886 15.9443C15.122 16.3577 15.3613 16.7247 15.6089 17.0478C15.0004 17.774 14.2433 18.1812 13.2952 18.1812C9.88906 18.1807 8.42559 12.2177 7.16605 8.19178C6.86941 9.48319 6.71544 10.6519 6.65516 11.1766C6.61775 11.5101 6.38397 11.662 6.14846 11.662C5.88728 11.662 5.62398 11.4752 5.62398 11.1416C5.62398 11.1167 5.62545 11.091 5.62848 11.0646C5.80292 9.74118 6.15443 7.73614 6.54802 6.3382C6.02411 4.90309 5.36971 3.33458 4.40561 3.33458C2.45924 3.33458 1.34461 8.44844 1.03117 11.1766C0.993764 11.5101 0.759979 11.662 0.524468 11.662C0.263303 11.662 0 11.4752 0 11.1416C0 11.1167 0.00146422 11.091 0.00449843 11.0646C0.0496669 10.7219 0.0980906 10.373 0.15073 10.0213L0.196904 9.71916C0.204779 9.66871 0.212746 9.61823 0.220807 9.56772L0.27033 9.26437C0.887195 5.57133 2.03712 1.82692 4.80934 1.82692ZM10.3981 1.81878C11.3654 1.81878 12.4031 2.34503 13.2976 3.57969C13.3476 3.63964 13.849 4.45427 14.0072 4.73669C14.554 5.77231 15.0302 7.038 15.4694 8.354L15.5832 8.69833C16.8447 12.5534 17.8174 16.7028 19.3326 16.7028C19.6918 16.7028 20.0814 16.4697 20.5126 15.9442C20.746 16.3575 20.9852 16.7245 21.2329 17.0476C20.6259 17.7724 19.8691 18.1812 18.9192 18.1812C13.565 18.1804 12.983 3.3313 10.0333 3.3313C9.36758 3.3313 8.87559 4.05559 8.84162 4.05559C8.7795 4.05559 8.7307 3.76287 8.11611 2.96083C8.7168 2.24348 9.52906 1.81878 10.3981 1.81878Z",
			fill: "currentColor"
		})
	}), /* @__PURE__ */ x("defs", { children: /* @__PURE__ */ x("clipPath", {
		id: "clip0_207_8",
		children: /* @__PURE__ */ x("rect", {
			width: 30,
			height: 20,
			fill: "currentColor"
		})
	}) })]
})), sf = "sVgrRW_audioQualityTag", cf = "sVgrRW_clickable", lf = "sVgrRW_commonTag", uf = "sVgrRW_commonTagText", df = "sVgrRW_dolbyLogoGlow", ff = {
	audioQualityTag: sf,
	clickable: cf,
	commonTag: lf,
	commonTagText: uf,
	"dolby-glow": "sVgrRW_dolby-glow",
	dolbyLogoGlow: df
}, J = /* @__PURE__ */ he(ve(), 1), pf = {
	hide: {
		opacity: 0,
		scale: .8,
		transition: {
			duration: .25,
			ease: "circIn"
		}
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
			ease: [
				0,
				.71,
				.2,
				1.01
			]
		}
	},
	hover: { scale: .95 },
	active: { scale: .9 }
}, mf = {
	hide: {
		opacity: 0,
		scale: .8,
		transition: {
			duration: .25,
			ease: "circIn"
		}
	},
	show: {
		opacity: [0, 1],
		scale: 1,
		transition: {
			duration: 1,
			ease: [
				0,
				.71,
				.2,
				1.01
			]
		}
	},
	hover: { scale: .95 },
	active: { scale: .9 }
}, hf = l(s(({ tagText: e, tagIcon: t, isDolbyAtmos: n, className: r, onClick: i, ...a }, o) => /* @__PURE__ */ x("div", {
	className: (0, J.default)(r, ff.audioQualityTag, i && ff.clickable),
	onClick: i,
	ref: o,
	...a,
	children: n ? /* @__PURE__ */ S(q.div, {
		initial: "hide",
		animate: "show",
		whileHover: i ? "hover" : void 0,
		whileTap: i ? "active" : void 0,
		exit: "hide",
		className: ff.dolbyLogo,
		variants: mf,
		children: [/* @__PURE__ */ x(af, { className: ff.dolbyLogoGlow }), /* @__PURE__ */ x(af, {})]
	}, "dolby-atmos") : /* @__PURE__ */ x(q.div, {
		initial: "hide",
		animate: "show",
		whileHover: i ? "hover" : void 0,
		whileTap: i ? "active" : void 0,
		exit: "hide",
		variants: pf,
		children: /* @__PURE__ */ S("div", {
			className: ff.commonTag,
			children: [t && /* @__PURE__ */ x(of, { height: "11px" }), e && /* @__PURE__ */ x("div", {
				className: ff.commonTagText,
				children: e
			})]
		})
	}, `common-tag-${t}-${e}`)
}))), gf = {
	inner: "x2O0EW_inner",
	nowPlayingSlider: "x2O0EW_nowPlayingSlider",
	thumb: "x2O0EW_thumb"
}, _f = 12 / 2, vf = 12, yf = ({ className: e, style: t, value: n, min: r, max: i, isPlaying: a = !1, onChange: o, onAfterChange: s, onBeforeChange: c, onSeeking: l, beforeIcon: u, afterIcon: d, changeOnDrag: p = !1 }) => {
	let m = v(null), h = v(null), g = v(null), _ = v(!1), y = Cd(0), b = Dd(y, [0, 1], [0, 1]), C = Cd(_f), w = Td`inset(${C}px 0px round 100px)`, T = jd(0, {
		damping: 12,
		stiffness: 300
	}), E = v(!1), D = v(n);
	f(() => {
		if (E.current) return;
		D.current = n;
		let e = Math.max(0, Math.min(1, (n - r) / (i - r)));
		y.set(e);
	}, [
		n,
		r,
		i,
		y
	]), Md((e, t) => {
		if (a && !E.current) {
			D.current += t, D.current > i && (D.current = i);
			let e = Math.max(0, Math.min(1, (D.current - r) / (i - r)));
			y.set(e);
		}
	});
	let O = () => {
		rf(C, 0, {
			type: "tween",
			ease: "easeOut",
			duration: .28
		});
	}, ee = () => {
		rf(C, _f, {
			type: "spring",
			damping: 12,
			stiffness: 200
		});
	}, k = (e) => {
		E.current = !0, h.current && (g.current = h.current.getBoundingClientRect()), O(), c?.(), l?.(!0);
	}, te = (e, t) => {
		let n = g.current;
		if (!n) return;
		let a = (t.point.x - n.left) / n.width;
		a < 0 ? T.set(Math.tanh(a * 2) * vf) : a > 1 ? T.set(Math.tanh((a - 1) * 2) * vf) : T.set(0);
		let s = Math.max(0, Math.min(1, a)), c = r + s * (i - r);
		D.current = c, y.set(s), p && o?.(c);
	}, ne = () => {
		E.current = !1, g.current = null, _.current ? O() : ee(), T.set(0), l?.(!1), o?.(D.current), s?.(D.current);
	}, A = () => {
		_.current = !0, E.current || O();
	}, re = () => {
		_.current = !1, E.current || ee();
	}, j = (e, t) => {
		let n = h.current?.getBoundingClientRect();
		if (!n) return;
		let a = Math.max(0, Math.min(1, (t.point.x - n.left) / n.width)), l = r + a * (i - r);
		D.current = l, y.set(a), c?.(), o?.(l), s?.(l);
	};
	return /* @__PURE__ */ S(q.div, {
		ref: m,
		className: (0, J.default)(gf.nowPlayingSlider, e),
		style: {
			...t,
			x: T
		},
		onPanStart: k,
		onPan: te,
		onPanEnd: ne,
		onTap: j,
		onHoverStart: A,
		onHoverEnd: re,
		children: [
			u,
			/* @__PURE__ */ x(q.div, {
				ref: h,
				className: gf.inner,
				style: { clipPath: w },
				children: /* @__PURE__ */ x(q.div, {
					className: gf.thumb,
					style: {
						scaleX: b,
						originX: 0
					}
				})
			}),
			d
		]
	});
}, bf = { controlThumb: "JYoJ0q_controlThumb" }, xf = ({ onClick: e, className: t, ...n }) => {
	let r = v(null), i = v(!1), [a, o] = y({
		x: -25,
		y: -4
	}), s = (e) => {
		let t = r.current;
		if (t && i.current) {
			let n = t.getBoundingClientRect(), r = (e.clientX - n.left) / 2, i = (e.clientY - n.top) / 2;
			o(Math.abs(r) > 25 || Math.abs(i) > 25 ? {
				x: -25,
				y: -4
			} : {
				x: r - 25 / 2,
				y: i - 25 / 2
			});
		}
	};
	return /* @__PURE__ */ x("div", {
		className: (0, J.default)(bf.controlThumb, t),
		ref: r,
		...n,
		children: /* @__PURE__ */ S(q.button, {
			type: "button",
			variants: {
				rest: {
					width: 50,
					height: 8
				},
				hover: {
					width: 25,
					height: 25
				}
			},
			animate: { ...a },
			whileTap: { scale: .9 },
			whileHover: "hover",
			initial: "rest",
			transition: {
				type: "spring",
				duration: .5
			},
			onMouseMove: (e) => {
				s(e.nativeEvent);
			},
			onHoverStart: (e) => {
				s(e), i.current = !0;
			},
			onHoverEnd: () => {
				i.current = !1, o({
					x: -25,
					y: -4
				});
			},
			onClick: e,
			children: [/* @__PURE__ */ x(q.div, {
				variants: {
					rest: {
						height: 0,
						width: 0,
						marginTop: 0,
						marginLeft: 25,
						rotate: 0
					},
					hover: {
						height: 2,
						width: 15,
						marginTop: -1,
						marginLeft: 5,
						rotate: 45
					}
				},
				transition: {
					type: "spring",
					duration: .5
				}
			}), /* @__PURE__ */ x(q.div, {
				variants: {
					rest: {
						height: 0,
						width: 0,
						marginTop: 0,
						marginLeft: 25,
						rotate: 0
					},
					hover: {
						height: 2,
						width: 15,
						marginTop: -1,
						marginLeft: 5,
						rotate: -45
					}
				},
				transition: {
					type: "spring",
					duration: .5
				}
			})]
		})
	});
};
//#endregion
//#region ../../node_modules/.pnpm/figma-squircle@0.3.1/node_modules/figma-squircle/dist/module.js
function Sf({ topLeftCornerRadius: e, topRightCornerRadius: t, bottomRightCornerRadius: n, bottomLeftCornerRadius: r, width: i, height: a }) {
	let o = {
		topLeft: -1,
		topRight: -1,
		bottomLeft: -1,
		bottomRight: -1
	}, s = {
		topLeft: e,
		topRight: t,
		bottomLeft: r,
		bottomRight: n
	};
	return Object.entries(s).sort(([, e], [, t]) => t - e).forEach(([e, t]) => {
		let n = e, r = Cf[n], c = Math.min(...r.map((e) => {
			let n = s[e.corner];
			if (t === 0 && n === 0) return 0;
			let r = o[e.corner], c = e.side === "top" || e.side === "bottom" ? i : a;
			return r >= 0 ? c - o[e.corner] : t / (t + n) * c;
		}));
		o[n] = c, s[n] = Math.min(t, c);
	}), {
		topLeft: {
			radius: s.topLeft,
			roundingAndSmoothingBudget: o.topLeft
		},
		topRight: {
			radius: s.topRight,
			roundingAndSmoothingBudget: o.topRight
		},
		bottomLeft: {
			radius: s.bottomLeft,
			roundingAndSmoothingBudget: o.bottomLeft
		},
		bottomRight: {
			radius: s.bottomRight,
			roundingAndSmoothingBudget: o.bottomRight
		}
	};
}
var Cf = {
	topLeft: [{
		corner: "topRight",
		side: "top"
	}, {
		corner: "bottomLeft",
		side: "left"
	}],
	topRight: [{
		corner: "topLeft",
		side: "top"
	}, {
		corner: "bottomRight",
		side: "right"
	}],
	bottomLeft: [{
		corner: "bottomRight",
		side: "bottom"
	}, {
		corner: "topLeft",
		side: "left"
	}],
	bottomRight: [{
		corner: "bottomLeft",
		side: "bottom"
	}, {
		corner: "topRight",
		side: "right"
	}]
};
function wf({ cornerRadius: e, cornerSmoothing: t, preserveSmoothing: n, roundingAndSmoothingBudget: r }) {
	let i = (1 + t) * e;
	if (!n) {
		let n = r / e - 1;
		t = Math.min(t, n), i = Math.min(i, r);
	}
	let a = 90 * (1 - t), o = Math.sin(Af(a / 2)) * e * Math.sqrt(2), s = (90 - a) / 2, c = e * Math.tan(Af(s / 2)), l = 45 * t, u = c * Math.cos(Af(l)), d = u * Math.tan(Af(l)), f = (i - o - u - d) / 3, p = 2 * f;
	if (n && i > r) {
		let e = r - d - o - u, t = e - e / 6;
		f = Math.min(f, t), p = e - f, i = Math.min(i, r);
	}
	return {
		a: p,
		b: f,
		c: u,
		d,
		p: i,
		arcSectionLength: o,
		cornerRadius: e
	};
}
function Tf({ width: e, height: t, topLeftPathParams: n, topRightPathParams: r, bottomLeftPathParams: i, bottomRightPathParams: a }) {
	return `
    M ${e - r.p} 0
    ${Ef(r)}
    L ${e} ${t - a.p}
    ${Df(a)}
    L ${i.p} ${t}
    ${Of(i)}
    L 0 ${n.p}
    ${kf(n)}
    Z
  `.replace(/[\t\s\n]+/g, " ").trim();
}
function Ef({ cornerRadius: e, a: t, b: n, c: r, d: i, p: a, arcSectionLength: o }) {
	return e ? jf`
    c ${t} 0 ${t + n} 0 ${t + n + r} ${i}
    a ${e} ${e} 0 0 1 ${o} ${o}
    c ${i} ${r}
        ${i} ${n + r}
        ${i} ${t + n + r}` : jf`l ${a} 0`;
}
function Df({ cornerRadius: e, a: t, b: n, c: r, d: i, p: a, arcSectionLength: o }) {
	return e ? jf`
    c 0 ${t}
      0 ${t + n}
      ${-i} ${t + n + r}
    a ${e} ${e} 0 0 1 -${o} ${o}
    c ${-r} ${i}
      ${-(n + r)} ${i}
      ${-(t + n + r)} ${i}` : jf`l 0 ${a}`;
}
function Of({ cornerRadius: e, a: t, b: n, c: r, d: i, p: a, arcSectionLength: o }) {
	return e ? jf`
    c ${-t} 0
      ${-(t + n)} 0
      ${-(t + n + r)} ${-i}
    a ${e} ${e} 0 0 1 -${o} -${o}
    c ${-i} ${-r}
      ${-i} ${-(n + r)}
      ${-i} ${-(t + n + r)}` : jf`l ${-a} 0`;
}
function kf({ cornerRadius: e, a: t, b: n, c: r, d: i, p: a, arcSectionLength: o }) {
	return e ? jf`
    c 0 ${-t}
      0 ${-(t + n)}
      ${i} ${-(t + n + r)}
    a ${e} ${e} 0 0 1 ${o} -${o}
    c ${r} ${-i}
      ${n + r} ${-i}
      ${t + n + r} ${-i}` : jf`l 0 ${-a}`;
}
function Af(e) {
	return e * Math.PI / 180;
}
function jf(e, ...t) {
	return e.reduce((e, n, r) => {
		let i = t[r];
		return typeof i == "number" ? e + n + i.toFixed(4) : e + n + (i ?? "");
	}, "");
}
function Mf({ cornerRadius: e = 0, topLeftCornerRadius: t, topRightCornerRadius: n, bottomRightCornerRadius: r, bottomLeftCornerRadius: i, cornerSmoothing: a, width: o, height: s, preserveSmoothing: c = !1 }) {
	if (t ??= e, n ??= e, i ??= e, r ??= e, t === n && n === r && r === i && i === t) {
		let e = Math.min(o, s) / 2, n = wf({
			cornerRadius: Math.min(t, e),
			cornerSmoothing: a,
			preserveSmoothing: c,
			roundingAndSmoothingBudget: e
		});
		return Tf({
			width: o,
			height: s,
			topLeftPathParams: n,
			topRightPathParams: n,
			bottomLeftPathParams: n,
			bottomRightPathParams: n
		});
	}
	let { topLeft: l, topRight: u, bottomLeft: d, bottomRight: f } = Sf({
		topLeftCornerRadius: t,
		topRightCornerRadius: n,
		bottomRightCornerRadius: r,
		bottomLeftCornerRadius: i,
		width: o,
		height: s
	});
	return Tf({
		width: o,
		height: s,
		topLeftPathParams: wf({
			cornerSmoothing: a,
			preserveSmoothing: c,
			cornerRadius: l.radius,
			roundingAndSmoothingBudget: l.roundingAndSmoothingBudget
		}),
		topRightPathParams: wf({
			cornerSmoothing: a,
			preserveSmoothing: c,
			cornerRadius: u.radius,
			roundingAndSmoothingBudget: u.roundingAndSmoothingBudget
		}),
		bottomRightPathParams: wf({
			cornerSmoothing: a,
			preserveSmoothing: c,
			cornerRadius: f.radius,
			roundingAndSmoothingBudget: f.roundingAndSmoothingBudget
		}),
		bottomLeftPathParams: wf({
			cornerSmoothing: a,
			preserveSmoothing: c,
			cornerRadius: d.radius,
			roundingAndSmoothingBudget: d.roundingAndSmoothingBudget
		})
	});
}
//#endregion
//#region ../../node_modules/.pnpm/corner-smoothing@0.1.5_react@19.2.4/node_modules/corner-smoothing/dist/esm/corner-smoothing-vanilla.js
var Nf = (e = 8) => {
	let t = "";
	for (let n = 0; n < e; n++) t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62));
	return `squircle-${t}`;
}, Pf = (e, t) => {
	let n = document.getElementById(t);
	n || (n = document.createElement("style"), n.id = t, document.head.appendChild(n)), n.textContent = e;
}, Ff = (e, t, n) => {
	let r = e.clientWidth, i = e.clientHeight, a = {
		preserveSmoothing: !0,
		cornerSmoothing: 1,
		width: r,
		height: i,
		...t
	};
	t.borderWidth ? (e.classList.add(n), Pf(`
        .${n} {
          position: relative;
          clip-path: path('${Mf(a)}');
        }

        .${n}::before {
          content: '';
          display: block;
          position: absolute;
          inset: ${t.borderWidth}px;  
          z-index: -1;
          clip-path: path('${Mf({
		...a,
		width: r - t.borderWidth * 2,
		height: i - t.borderWidth * 2,
		cornerRadius: t.cornerRadius - t.borderWidth
	})}');
        }
      `, `style-${n}`)) : e.style.clipPath = `path('${Mf(a)}')`;
}, If = (e, t) => {
	let n = Nf(), r, i = (r) => (r !== void 0 && (t = r), Ff(e, t, n)), a = new ResizeObserver(() => {
		let t = r;
		r = [e.clientWidth, e.clientHeight], (t?.[0] !== r[0] || t?.[1] !== r[1]) && i();
	});
	return a.observe(e), i.disconnect = () => {
		e.classList.remove(n), document.querySelector(`#style-${n}`)?.remove(), a.disconnect();
	}, i;
}, Lf = (e) => {
	let t = {};
	for (let n in e) e[n] !== void 0 && (t[n] = e[n]);
	return t;
}, Rf = s(({ children: e, as: n = "div", cornerRadius: r, topLeftCornerRadius: i, topRightCornerRadius: a, bottomRightCornerRadius: o, bottomLeftCornerRadius: s, cornerSmoothing: c, preserveSmoothing: l, borderWidth: d, ...f }, p) => {
	let m = v(), h = u((e) => {
		let t = Lf({
			cornerRadius: r,
			topLeftCornerRadius: i,
			topRightCornerRadius: a,
			bottomRightCornerRadius: o,
			bottomLeftCornerRadius: s,
			cornerSmoothing: c,
			preserveSmoothing: l,
			borderWidth: d
		});
		m.current?.disconnect(), e && (m.current = If(e, t)), typeof p == "function" ? p(e) : p && (p.current = e);
	}, [
		r,
		i,
		a,
		o,
		s,
		c,
		l,
		d
	]);
	return t.createElement(n, {
		ref: h,
		...f
	}, e);
}), zf = {
	cover: "meIGfq_cover",
	coverInner: "meIGfq_coverInner",
	musicPaused: "meIGfq_musicPaused"
}, Bf = s(({ coverUrl: e, coverIsVideo: t, coverVideoPaused: n, className: r, musicPaused: i, pauseShrinkAspect: a, ...o }, s) => {
	let c = v(null), l = _(() => (0, J.default)(zf.cover, i && zf.musicPaused, r), [r, i]), u = v(null);
	f(() => {
		let e = u.current;
		e && (n ? e.pause() : e.play());
	}, [n]);
	let [d, p] = y(20);
	return g(() => {
		let e = c.current;
		if (e) {
			let t = () => {
				let t = Math.min(e.clientWidth, e.clientHeight);
				p(Math.max(t * .02, window.innerHeight * .007));
			}, n = new ResizeObserver(t);
			return t(), n.observe(e), () => {
				n.disconnect();
			};
		}
	}, []), m(s, () => c.current, []), /* @__PURE__ */ x("div", {
		className: l,
		style: { "--scale-level": a ?? .75 },
		ref: c,
		...o,
		children: /* @__PURE__ */ x(Rf, {
			cornerRadius: d,
			cornerSmoothing: .7,
			className: zf.coverInner,
			children: t ? /* @__PURE__ */ x("video", {
				className: zf.coverInner,
				src: e,
				autoPlay: !0,
				loop: !0,
				muted: !0,
				playsInline: !0,
				crossOrigin: "anonymous",
				ref: u,
				...o
			}) : /* @__PURE__ */ x("div", {
				className: zf.coverInner,
				alt: "cover",
				style: {
					backgroundImage: `url(${e})`,
					"--scale-level": a ?? .75
				},
				...o
			})
		})
	});
}), Vf = {
	mediaButton: "_1iHSSa_mediaButton",
	"pressed-animation": "_1iHSSa_pressed-animation"
}, Hf = l(({ className: e, children: t, type: n, ...r }) => /* @__PURE__ */ x("button", {
	className: (0, J.default)(Vf.mediaButton, e),
	type: "button",
	...r,
	children: t
})), Uf = s((e, t) => /* @__PURE__ */ x("svg", {
	id: "vector",
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: /* @__PURE__ */ x("path", {
		d: "M5.5161,14.1665C5.8687,14.1665 6.1856,14.083 6.467,13.916C6.7485,13.749 6.9742,13.5264 7.1443,13.248C7.3144,12.9697 7.3994,12.6574 7.3994,12.311C7.3994,11.7977 7.217,11.3601 6.8521,10.9983C6.4871,10.6365 6.0418,10.4556 5.5161,10.4556C5.1759,10.4556 4.8652,10.5391 4.5837,10.7061C4.3023,10.873 4.0781,11.0972 3.9111,11.3787C3.7441,11.6601 3.6606,11.9709 3.6606,12.311C3.6606,12.6574 3.7441,12.9697 3.9111,13.248C4.0781,13.5264 4.3023,13.749 4.5837,13.916C4.8652,14.083 5.1759,14.1665 5.5161,14.1665ZM12.4092,14.1665C12.7555,14.1665 13.0679,14.083 13.3462,13.916C13.6245,13.749 13.8472,13.5264 14.0142,13.248C14.1812,12.9697 14.2646,12.6574 14.2646,12.311C14.2646,11.7977 14.0837,11.3601 13.7219,10.9983C13.3601,10.6365 12.9225,10.4556 12.4092,10.4556C12.069,10.4556 11.7582,10.5391 11.4768,10.7061C11.1954,10.873 10.9727,11.0972 10.8088,11.3787C10.6449,11.6601 10.563,11.9709 10.563,12.311C10.563,12.6574 10.6449,12.9697 10.8088,13.248C10.9727,13.5264 11.1954,13.749 11.4768,13.916C11.7582,14.083 12.069,14.1665 12.4092,14.1665ZM19.3022,14.1665C19.6424,14.1665 19.9532,14.083 20.2346,13.916C20.516,13.749 20.7402,13.5264 20.9072,13.248C21.0742,12.9697 21.1577,12.6574 21.1577,12.311C21.1577,11.7977 20.9768,11.3601 20.615,10.9983C20.2532,10.6365 19.8156,10.4556 19.3022,10.4556C18.9559,10.4556 18.6405,10.5391 18.356,10.7061C18.0715,10.873 17.8457,11.0972 17.6787,11.3787C17.5117,11.6601 17.4282,11.9709 17.4282,12.311C17.4282,12.6574 17.5117,12.9697 17.6787,13.248C17.8457,13.5264 18.0715,13.749 18.356,13.916C18.6405,14.083 18.9559,14.1665 19.3022,14.1665Z",
		fill: "currentColor",
		fillRule: "nonzero",
		id: "path_0"
	})
})), Wf = { menuButton: "o48E2G_menuButton" }, Gf = l(({ className: e, type: t, ...n }) => /* @__PURE__ */ x("button", {
	className: (0, J.default)(Wf.menuButton, e),
	type: "button",
	...n,
	children: /* @__PURE__ */ x(Uf, {})
})), Kf = {
	animating: "OtiOeq_animating",
	textMarquee: "OtiOeq_textMarquee"
}, qf = l(({ children: e, className: t, ...n }) => {
	let r = v(null), i = v(null), a = v(/* @__PURE__ */ new Set());
	return /* @__PURE__ */ x("div", {
		ref: r,
		className: (0, J.default)(Kf.textMarquee, t),
		onMouseEnter: () => {
			if (i.current && r.current) {
				let e = r.current.clientWidth, t = i.current.clientWidth;
				if (t <= e * .95) return;
				r.current?.classList.add(Kf.animating);
				let n = t - e * .95, o = i.current.animate([{ transform: "translateX(0px)" }, { transform: `translateX(${-n}px)` }], {
					iterations: 2,
					direction: "alternate",
					easing: "linear",
					duration: Math.max(0, n * 2 / 64 * 1e3)
				});
				o.finished.then(() => {
					r.current?.classList.remove(Kf.animating);
				}), a.current.add(o);
			}
		},
		onMouseLeave: () => {
			for (let e of a.current) e.finish();
			r.current?.classList.remove(Kf.animating), a.current.clear();
		},
		...n,
		children: /* @__PURE__ */ x("div", {
			ref: i,
			children: e
		})
	});
}), Jf = {
	album: "jyIwwa_album",
	artists: "jyIwwa_artists",
	info: "jyIwwa_info",
	musicInfo: "jyIwwa_musicInfo",
	name: "jyIwwa_name"
}, Yf = l(({ name: e, artists: t, album: n, onArtistClicked: r, onAlbumClicked: i, onMenuButtonClicked: a, className: o, ...s }) => /* @__PURE__ */ S("div", {
	className: (0, J.default)(Jf.musicInfo, o),
	...s,
	children: [/* @__PURE__ */ S("div", {
		className: Jf.info,
		children: [
			e !== void 0 && /* @__PURE__ */ x(qf, {
				className: Jf.name,
				children: e
			}),
			t !== void 0 && /* @__PURE__ */ x(qf, {
				className: Jf.artists,
				children: t.map((e) => /* @__PURE__ */ x("a", { children: e }, `artist-${e}`))
			}),
			n !== void 0 && /* @__PURE__ */ x(qf, {
				className: Jf.album,
				children: n
			})
		]
	}), /* @__PURE__ */ x(Gf, { onClick: a })]
})), Xf = s(({ album: e, albumIsVideo: t, fps: n, playing: r, flowSpeed: i, renderScale: a, staticMode: o, lowFreqVolume: s, hasLyric: c, renderer: l, style: u, ...d }, p) => {
	let h = v(null), g = v(null), _ = v(null), y = l ?? O;
	return f(() => {
		(_.current !== y || h.current === void 0) && (_.current = y, h.current?.dispose(), h.current = C.new(y));
	}, [y]), f(() => {
		y && e && h.current?.setAlbum(e, t);
	}, [
		y,
		e,
		t
	]), f(() => {
		y && n && h.current?.setFPS(n);
	}, [y, n]), f(() => {
		y && (r === void 0 || r ? h.current?.resume() : h.current?.pause());
	}, [y, r]), f(() => {
		y && i && h.current?.setFlowSpeed(i);
	}, [y, i]), f(() => {
		y && h.current?.setStaticMode(o ?? !1);
	}, [y, o]), f(() => {
		y && a && h.current?.setRenderScale(a ?? .5);
	}, [y, a]), f(() => {
		y && s && h.current?.setLowFreqVolume(s ?? 1);
	}, [y, s]), f(() => {
		y && c !== void 0 && h.current?.setHasLyric(c ?? !0);
	}, [y, c]), f(() => {
		if (h.current) {
			let e = h.current.getElement();
			e.style.width = "100%", e.style.height = "100%", e.style.minHeight = "0", e.style.minWidth = "0", e.style.overflow = "hidden", g.current?.appendChild(e);
		}
	}, [h.current]), m(p, () => ({
		wrapperEl: g.current,
		bgRender: h.current
	}), [g.current, h.current]), /* @__PURE__ */ x("div", {
		style: {
			display: "contents",
			...u
		},
		...d,
		ref: g
	});
}), Zf = s(({ disabled: e, playing: t, alignAnchor: n, alignPosition: r, enableSpring: i, enableBlur: a, enableScale: o, hidePassedLines: s, lyricLines: c, currentTime: l, isSeeking: u, wordFadeWidth: d, linePosXSpringParams: p, linePosYSpringParams: h, lineScaleSpringParams: _, bottomLine: C, lyricPlayer: w, onLyricLineClick: T, onLyricLineContextMenu: E, ...O }, ee) => {
	let [k, te] = y(), A = v(null), re = v(l);
	return g(() => {
		let e = new (w ?? D)();
		return te(e), A.current?.appendChild(e.getElement()), () => {
			e?.dispose(), te(void 0);
		};
	}, [w]), g(() => {
		c === void 0 ? (k?.setLyricLines([]), k?.update()) : (k?.setLyricLines(c, re.current), k?.update());
	}, [k, c]), f(() => {
		if (!e) {
			let e = !1, t = -1, n = (r) => {
				e || (t === -1 && (t = r), k?.update(r - t), t = r, requestAnimationFrame(n));
			};
			return k?.calcLayout(), requestAnimationFrame(n), () => {
				e = !0;
			};
		}
	}, [k, e]), f(() => {
		t === void 0 || t ? k?.resume() : k?.pause();
	}, [k, t]), f(() => {
		n !== void 0 && k?.setAlignAnchor(n);
	}, [k, n]), f(() => {
		s !== void 0 && k?.setHidePassedLines(s);
	}, [k, s]), f(() => {
		r !== void 0 && k?.setAlignPosition(r);
	}, [k, r]), f(() => {
		i === void 0 ? k?.setEnableSpring(!0) : k?.setEnableSpring(i);
	}, [k, i]), f(() => {
		o === void 0 ? k?.setEnableScale(!0) : k?.setEnableScale(o);
	}, [k, o]), f(() => {
		k?.setEnableBlur(a ?? !0);
	}, [k, a]), f(() => {
		l === void 0 ? k?.setCurrentTime(0) : (k?.setCurrentTime(l, u), re.current = l);
	}, [
		k,
		l,
		u
	]), f(() => {
		k?.setIsSeeking(!!u);
	}, [k, u]), f(() => {
		k?.setWordFadeWidth(d);
	}, [k, d]), f(() => {
		p !== void 0 && k?.setLinePosXSpringParams(p);
	}, [k, p]), f(() => {
		h !== void 0 && k?.setLinePosYSpringParams(h);
	}, [k, h]), f(() => {
		_ !== void 0 && k?.setLineScaleSpringParams(_);
	}, [k, _]), f(() => {
		if (T) {
			let e = (e) => T(e);
			return k?.addEventListener("line-click", e), () => k?.removeEventListener("line-click", e);
		}
	}, [k, T]), f(() => {
		if (E) {
			let e = (e) => E(e);
			return k?.addEventListener("line-contextmenu", e), () => k?.removeEventListener("line-contextmenu", e);
		}
	}, [k, E]), m(ee, () => ({
		wrapperEl: A.current,
		lyricPlayer: k
	}), [k]), /* @__PURE__ */ S(b, { children: [/* @__PURE__ */ x("div", {
		...O,
		ref: A
	}), k?.getBottomLineElement() && C ? ne(C, k?.getBottomLineElement()) : null] });
}), Qf = typeof self == "object" ? self : globalThis, $f = (e, t) => {
	let n = (t, n) => (e.set(n, t), t), r = (i) => {
		if (e.has(i)) return e.get(i);
		let [a, o] = t[i];
		switch (a) {
			case 0:
			case -1: return n(o, i);
			case 1: {
				let e = n([], i);
				for (let t of o) e.push(r(t));
				return e;
			}
			case 2: {
				let e = n({}, i);
				for (let [t, n] of o) e[r(t)] = r(n);
				return e;
			}
			case 3: return n(new Date(o), i);
			case 4: {
				let { source: e, flags: t } = o;
				return n(new RegExp(e, t), i);
			}
			case 5: {
				let e = n(/* @__PURE__ */ new Map(), i);
				for (let [t, n] of o) e.set(r(t), r(n));
				return e;
			}
			case 6: {
				let e = n(/* @__PURE__ */ new Set(), i);
				for (let t of o) e.add(r(t));
				return e;
			}
			case 7: {
				let { name: e, message: t } = o;
				return n(new Qf[e](t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(new Qf[a](o), i);
	};
	return r;
}, ep = (e) => $f(/* @__PURE__ */ new Map(), e)(0), tp = "", { toString: np } = {}, { keys: rp } = Object, ip = (e) => {
	let t = typeof e;
	if (t !== "object" || !e) return [0, t];
	let n = np.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, tp];
		case "Object": return [2, tp];
		case "Date": return [3, tp];
		case "RegExp": return [4, tp];
		case "Map": return [5, tp];
		case "Set": return [6, tp];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, ap = ([e, t]) => e === 0 && (t === "function" || t === "symbol"), op = (e, t, n, r) => {
	let i = (e, t) => {
		let i = r.push(e) - 1;
		return n.set(t, i), i;
	}, a = (r) => {
		if (n.has(r)) return n.get(r);
		let [o, s] = ip(r);
		switch (o) {
			case 0: {
				let t = r;
				switch (s) {
					case "bigint":
						o = 8, t = r.toString();
						break;
					case "function":
					case "symbol":
						if (e) throw TypeError("unable to serialize " + s);
						t = null;
						break;
					case "undefined": return i([-1], r);
				}
				return i([o, t], r);
			}
			case 1: {
				if (s) {
					let e = r;
					return s === "DataView" ? e = new Uint8Array(r.buffer) : s === "ArrayBuffer" && (e = new Uint8Array(r)), i([s, [...e]], r);
				}
				let e = [], t = i([o, e], r);
				for (let t of r) e.push(a(t));
				return t;
			}
			case 2: {
				if (s) switch (s) {
					case "BigInt": return i([s, r.toString()], r);
					case "Boolean":
					case "Number":
					case "String": return i([s, r.valueOf()], r);
				}
				if (t && "toJSON" in r) return a(r.toJSON());
				let n = [], c = i([o, n], r);
				for (let t of rp(r)) (e || !ap(ip(r[t]))) && n.push([a(t), a(r[t])]);
				return c;
			}
			case 3: return i([o, r.toISOString()], r);
			case 4: {
				let { source: e, flags: t } = r;
				return i([o, {
					source: e,
					flags: t
				}], r);
			}
			case 5: {
				let t = [], n = i([o, t], r);
				for (let [n, i] of r) (e || !(ap(ip(n)) || ap(ip(i)))) && t.push([a(n), a(i)]);
				return n;
			}
			case 6: {
				let t = [], n = i([o, t], r);
				for (let n of r) (e || !ap(ip(n))) && t.push(a(n));
				return n;
			}
		}
		let { message: c } = r;
		return i([o, {
			name: s,
			message: c
		}], r);
	};
	return a;
}, sp = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return op(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, cp = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? ep(sp(e, t)) : structuredClone(e) : (e, t) => ep(sp(e, t)), lp = { background: "pi2Tua_background" }, up = "gyvQzW_bottomControls", dp = "gyvQzW_controls", fp = "gyvQzW_cover", pp = "gyvQzW_hideLyric", mp = "gyvQzW_horizontalLayout", hp = "gyvQzW_lyric", gp = "gyvQzW_thumb", _p = {
	bottomControls: up,
	"buttom-controls": "gyvQzW_buttom-controls",
	controls: dp,
	cover: fp,
	"drag-area": "gyvQzW_drag-area",
	hideLyric: pp,
	horizontalLayout: mp,
	"info-side": "gyvQzW_info-side",
	lyric: hp,
	"music-info": "gyvQzW_music-info",
	"player-side": "gyvQzW_player-side",
	"side-controls": "gyvQzW_side-controls",
	thumb: gp
}, vp = ({ thumbSlot: e, coverSlot: t, controlsSlot: n, lyricSlot: r, bottomControls: i, hideLyric: a, className: o, asChild: s, ...c }) => /* @__PURE__ */ S("div", {
	className: (0, J.default)(o, !s && _p.horizontalLayout, !s && a && _p.hideLyric),
	...c,
	children: [
		/* @__PURE__ */ x(q.div, {
			layout: !0,
			layoutId: "amll-player-thumb",
			className: _p.thumb,
			children: e
		}),
		/* @__PURE__ */ x(q.div, {
			layout: !0,
			layoutId: "amll-player-cover",
			className: _p.cover,
			children: t
		}),
		/* @__PURE__ */ x(q.div, {
			layout: !0,
			layoutId: "amll-player-controls",
			className: _p.controls,
			children: n
		}),
		/* @__PURE__ */ x("div", {
			className: _p.lyric,
			children: r
		}),
		/* @__PURE__ */ x("div", {
			className: _p.bottomControls,
			children: i
		})
	]
}), yp = "Ciw_ka_background", bp = "Ciw_ka_bigControls", xp = "Ciw_ka_control", Sp = "Ciw_ka_controls", Cp = "Ciw_ka_cover", wp = "Ciw_ka_coverFrame", Tp = "Ciw_ka_hideLyric", Ep = "Ciw_ka_immerseCover", Dp = "Ciw_ka_lyric", Op = "Ciw_ka_lyricLayout", kp = "Ciw_ka_noLyricLayout", Ap = "Ciw_ka_phonyBigCover", jp = "Ciw_ka_phonySmallCover", Mp = "Ciw_ka_smallControls", Np = "Ciw_ka_thumb", Pp = "Ciw_ka_verticalLayout", Y = {
	background: yp,
	bigControls: bp,
	"bottom-controls": "Ciw_ka_bottom-controls",
	control: xp,
	controls: Sp,
	cover: Cp,
	"cover-side": "Ciw_ka_cover-side",
	"cover-view": "Ciw_ka_cover-view",
	coverFrame: wp,
	"drag-area": "Ciw_ka_drag-area",
	hideLyric: Tp,
	immerseCover: Ep,
	"info-side": "Ciw_ka_info-side",
	lyric: Dp,
	"lyric-view": "Ciw_ka_lyric-view",
	lyricLayout: Op,
	"main-view": "Ciw_ka_main-view",
	noLyricLayout: kp,
	phonyBigCover: Ap,
	phonySmallCover: jp,
	smallControls: Mp,
	thumb: Np,
	verticalLayout: Pp
}, Fp = ({ thumbSlot: e, coverSlot: t, smallControlsSlot: n, bigControlsSlot: r, lyricSlot: i, hideLyric: a, asChild: o, className: s, immerseCover: c, ...l }) => {
	let d = v(null), f = v(null), p = v(null), m = v(null), h = v(a ?? !1), _ = v(c ?? !1), [b, C] = y(void 0), w = u((e = h.current) => {
		if (!d.current) return;
		let t = d.current, n = e ? f.current : p.current;
		if (!n || !t) return;
		let r = _.current;
		for (; getComputedStyle(t).display === "contents";) t = t.parentElement;
		let i = t.getBoundingClientRect(), a = n.getBoundingClientRect();
		if (r) {
			let e = a.top - i.top + a.height / 2, t = Math.max(e * 2.4, i.width * 1.2, Math.min(n.clientWidth, n.clientHeight));
			return {
				width: t,
				height: t,
				left: a.x - i.x + (a.width - t) / 2,
				top: a.y - i.y + (a.height - t) / 2
			};
		}
		let o = Math.min(n.clientWidth, n.clientHeight);
		return {
			width: o,
			height: o,
			left: a.x - i.x + (a.width - o) / 2,
			top: a.y - i.y + (a.height - o) / 2
		};
	}, []);
	return g(() => {
		h.current = a ?? !1, _.current = c ?? !1, C(w(h.current));
	}, [
		a,
		c,
		w
	]), g(() => {
		let e = f.current, t = p.current;
		if (!e || !t) return;
		let n = new ResizeObserver(() => {
			C(w(h.current));
		});
		return n.observe(e), n.observe(t), C(w(h.current)), () => {
			n.disconnect();
		};
	}, [w]), /* @__PURE__ */ S("div", {
		className: (0, J.default)(s, !o && Y.verticalLayout, !o && a && Y.hideLyric),
		ref: d,
		...l,
		children: [
			/* @__PURE__ */ x("div", {
				className: Y.thumb,
				children: e
			}),
			/* @__PURE__ */ S("div", {
				className: Y.lyricLayout,
				children: [
					/* @__PURE__ */ x("div", {
						className: Y.phonySmallCover,
						ref: p
					}),
					/* @__PURE__ */ x("div", {
						className: Y.smallControls,
						children: n
					}),
					/* @__PURE__ */ x("div", {
						className: Y.lyric,
						children: i
					})
				]
			}),
			/* @__PURE__ */ S("div", {
				className: Y.noLyricLayout,
				children: [/* @__PURE__ */ x("div", {
					className: Y.phonyBigCover,
					ref: f
				}), /* @__PURE__ */ x("div", {
					className: Y.bigControls,
					children: r
				})]
			}),
			b && /* @__PURE__ */ x(q.div, {
				className: (0, J.default)(Y.coverFrame, c && Y.immerseCover),
				animate: b,
				initial: !1,
				transition: {
					type: "spring",
					stiffness: 200,
					damping: 30
				},
				ref: m,
				children: t
			})
		]
	});
}, Ip = ({ thumbSlot: e, controlsSlot: t, horizontalBottomControls: n, smallControlsSlot: r, bigControlsSlot: i, coverSlot: a, lyricSlot: o, backgroundSlot: s, hideLyric: c, verticalImmerseCover: l, onLayoutChange: d, onElementMounted: f, ...p }) => {
	let [m, h] = y(!1), _ = v(null), b = u((e) => {
		_.current = e, f && f(e);
	}, [f]);
	return g(() => {
		let e = _.current;
		if (!e) return;
		h(e.clientWidth < e.clientHeight);
		let t = new ResizeObserver(() => {
			let t = e.getBoundingClientRect();
			h(t.width < t.height);
		});
		return t.observe(e), () => t.disconnect();
	}, []), g(() => {
		d?.(m);
	}, [m, d]), /* @__PURE__ */ S("div", {
		...p,
		ref: b,
		children: [/* @__PURE__ */ x("div", {
			className: lp.background,
			children: s
		}), m ? /* @__PURE__ */ x(Fp, {
			thumbSlot: e,
			smallControlsSlot: r,
			bigControlsSlot: i,
			coverSlot: a,
			lyricSlot: o,
			hideLyric: c,
			immerseCover: l
		}) : /* @__PURE__ */ x(vp, {
			thumbSlot: e,
			controlsSlot: t,
			coverSlot: a,
			lyricSlot: o,
			bottomControls: n,
			hideLyric: c
		})]
	});
};
//#endregion
//#region src/utils/duration.ts
function Lp(e) {
	let t = e < 0, n = Math.abs(e | 0), r = n % 60, i = Math.floor((n - r) / 60), a = "0".repeat(2 - r.toString().length) + r;
	return `${t ? "-" : ""}${i}:${a}`;
}
var Rp = s((e, t) => /* @__PURE__ */ x("svg", {
	width: 64,
	height: 64,
	viewBox: "0 0 64 64",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: /* @__PURE__ */ x("path", {
		d: "M11.8633 31.8984C11.8633 29.138 12.3841 26.5469 13.4258 24.125C14.4674 21.6901 15.9128 19.5482 17.7617 17.6992C19.6107 15.8372 21.7526 14.3854 24.1875 13.3438C26.6224 12.2891 29.2266 11.7617 32 11.7617C34.7734 11.7617 37.3776 12.2891 39.8125 13.3438C42.2474 14.3854 44.3893 15.8372 46.2383 17.6992C48.0872 19.5482 49.5326 21.6901 50.5742 24.125C51.6159 26.5469 52.1367 29.138 52.1367 31.8984C52.1367 34.6719 51.6029 37.2826 50.5352 39.7305C49.4674 42.1784 48.0156 44.3073 46.1797 46.1172C46.0365 46.2604 45.8802 46.332 45.7109 46.332C45.5547 46.332 45.4049 46.2539 45.2617 46.0977L44.3438 45.0625C44.0964 44.763 44.1094 44.4635 44.3828 44.1641C45.9453 42.6016 47.1823 40.7656 48.0938 38.6562C49.0182 36.5339 49.4805 34.2812 49.4805 31.8984C49.4805 29.5026 49.0247 27.2565 48.1133 25.1602C47.2018 23.0508 45.9388 21.1953 44.3242 19.5938C42.7227 17.9792 40.8672 16.7161 38.7578 15.8047C36.6484 14.8932 34.3958 14.4375 32 14.4375C29.6042 14.4375 27.3516 14.8932 25.2422 15.8047C23.1328 16.7161 21.2708 17.9792 19.6562 19.5938C18.0547 21.1953 16.7982 23.0508 15.8867 25.1602C14.9753 27.2565 14.5195 29.5026 14.5195 31.8984C14.5195 34.2812 14.9753 36.5273 15.8867 38.6367C16.7982 40.7461 18.0417 42.5885 19.6172 44.1641C19.8776 44.4635 19.8841 44.7565 19.6367 45.043L18.7188 46.0781C18.5885 46.2344 18.4323 46.3125 18.25 46.3125C18.0807 46.3125 17.9245 46.2409 17.7812 46.0977C15.9583 44.2878 14.513 42.1654 13.4453 39.7305C12.3906 37.2826 11.8633 34.6719 11.8633 31.8984ZM17.5469 31.8984C17.5469 29.9193 17.918 28.0573 18.6602 26.3125C19.4154 24.5677 20.457 23.0312 21.7852 21.7031C23.1133 20.375 24.6497 19.3333 26.3945 18.5781C28.1393 17.8229 30.0078 17.4453 32 17.4453C33.9792 17.4453 35.8411 17.8229 37.5859 18.5781C39.3438 19.3333 40.8867 20.375 42.2148 21.7031C43.543 23.0312 44.5781 24.5677 45.3203 26.3125C46.0755 28.0573 46.4531 29.9193 46.4531 31.8984C46.4531 33.8255 46.0885 35.6419 45.3594 37.3477C44.6432 39.0404 43.6667 40.5312 42.4297 41.8203C42.2865 41.9766 42.1237 42.0547 41.9414 42.0547C41.7721 42.0547 41.6224 41.9766 41.4922 41.8203L40.5547 40.7852C40.3073 40.5117 40.3073 40.2122 40.5547 39.8867C41.5573 38.8581 42.3451 37.6602 42.918 36.293C43.4909 34.9128 43.7773 33.4479 43.7773 31.8984C43.7773 30.2839 43.4714 28.7669 42.8594 27.3477C42.2474 25.9284 41.3945 24.6784 40.3008 23.5977C39.2201 22.5169 37.9701 21.6706 36.5508 21.0586C35.1315 20.4336 33.6146 20.1211 32 20.1211C30.3724 20.1211 28.849 20.4336 27.4297 21.0586C26.0104 21.6706 24.7604 22.5169 23.6797 23.5977C22.599 24.6784 21.7526 25.9284 21.1406 27.3477C20.5286 28.7669 20.2227 30.2839 20.2227 31.8984C20.2227 33.4349 20.5026 34.8932 21.0625 36.2734C21.6354 37.6536 22.4232 38.8581 23.4258 39.8867C23.6732 40.2122 23.6732 40.5117 23.4258 40.7852L22.5078 41.8008C22.3776 41.957 22.2214 42.0417 22.0391 42.0547C21.8568 42.0547 21.694 41.9701 21.5508 41.8008C20.3138 40.5117 19.3372 39.0208 18.6211 37.3281C17.9049 35.6224 17.5469 33.8125 17.5469 31.8984ZM23.2305 31.8984C23.2305 30.2969 23.6276 28.832 24.4219 27.5039C25.2161 26.1758 26.2708 25.1146 27.5859 24.3203C28.9141 23.526 30.3854 23.1289 32 23.1289C33.6146 23.1289 35.0794 23.526 36.3945 24.3203C37.7227 25.1146 38.7839 26.1758 39.5781 27.5039C40.3724 28.832 40.7695 30.2969 40.7695 31.8984C40.7695 32.9661 40.5807 33.9753 40.2031 34.9258C39.8255 35.8633 39.3047 36.7031 38.6406 37.4453C38.5104 37.6276 38.3542 37.7188 38.1719 37.7188C38.0026 37.7188 37.8398 37.6406 37.6836 37.4844L36.7266 36.4688C36.4792 36.2214 36.4596 35.9414 36.668 35.6289C37.1237 35.1341 37.4753 34.5677 37.7227 33.9297C37.9701 33.2917 38.0938 32.6146 38.0938 31.8984C38.0938 30.7917 37.8138 29.776 37.2539 28.8516C36.707 27.9271 35.9714 27.1914 35.0469 26.6445C34.1224 26.0846 33.1068 25.8047 32 25.8047C30.8932 25.8047 29.8776 26.0846 28.9531 26.6445C28.0286 27.1914 27.2865 27.9271 26.7266 28.8516C26.1797 29.776 25.9062 30.7917 25.9062 31.8984C25.9062 32.6016 26.0299 33.2721 26.2773 33.9102C26.5247 34.5482 26.8698 35.1146 27.3125 35.6094C27.5078 35.9219 27.4883 36.2018 27.2539 36.4492L26.2969 37.4648C26.1406 37.6211 25.9714 37.6992 25.7891 37.6992C25.6198 37.6992 25.4701 37.6146 25.3398 37.4453C24.6758 36.7031 24.1549 35.8568 23.7773 34.9062C23.4128 33.9557 23.2305 32.9531 23.2305 31.8984ZM19.8906 51.3711C19.4089 51.3711 19.0898 51.1758 18.9336 50.7852C18.7773 50.3945 18.8555 50.0299 19.168 49.6914L31.1016 36.1758C31.3359 35.9023 31.6289 35.7656 31.9805 35.7656C32.332 35.7656 32.625 35.9023 32.8594 36.1758L44.8125 49.6914C45.112 50.0299 45.1836 50.3945 45.0273 50.7852C44.8711 51.1758 44.5586 51.3711 44.0898 51.3711H19.8906Z",
		fill: "currentColor"
	})
})), zp = { toggleIconButton: "BYc2XG_toggleIconButton" }, Bp = s((e, t) => /* @__PURE__ */ x("svg", {
	width: 64,
	height: 64,
	viewBox: "0 0 64 64",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: /* @__PURE__ */ x("path", {
		d: "M22.8594 53.9102C22 53.9102 21.3229 53.6302 20.8281 53.0703C20.3464 52.5104 20.1055 51.7617 20.1055 50.8242V46.1953H18.9727C17.1237 46.1953 15.5156 45.8242 14.1484 45.082C12.7812 44.3398 11.7201 43.2721 10.9648 41.8789C10.2227 40.4857 9.85156 38.8125 9.85156 36.8594V21.5664C9.85156 19.6133 10.2161 17.9401 10.9453 16.5469C11.6875 15.1536 12.7552 14.0859 14.1484 13.3438C15.5417 12.5885 17.2214 12.2109 19.1875 12.2109H44.793C46.7721 12.2109 48.4518 12.5885 49.832 13.3438C51.2253 14.0859 52.2865 15.1536 53.0156 16.5469C53.7578 17.9401 54.1289 19.6133 54.1289 21.5664V36.8594C54.1289 38.8125 53.7578 40.4857 53.0156 41.8789C52.2865 43.2721 51.2253 44.3398 49.832 45.082C48.4518 45.8242 46.7721 46.1953 44.793 46.1953H33.0742L26.4336 52.0547C25.7044 52.6927 25.0729 53.1615 24.5391 53.4609C24.0182 53.7604 23.4583 53.9102 22.8594 53.9102ZM23.9141 49.0469L30.0859 42.9727C30.5156 42.5299 30.9193 42.237 31.2969 42.0938C31.6745 41.9375 32.1758 41.8594 32.8008 41.8594H44.5977C46.3424 41.8594 47.6445 41.4232 48.5039 40.5508C49.3633 39.6784 49.793 38.3828 49.793 36.6641V21.7422C49.793 20.0365 49.3633 18.7474 48.5039 17.875C47.6445 17.0026 46.3424 16.5664 44.5977 16.5664H19.3828C17.625 16.5664 16.3164 17.0026 15.457 17.875C14.6107 18.7474 14.1875 20.0365 14.1875 21.7422V36.6641C14.1875 38.3828 14.6107 39.6784 15.457 40.5508C16.3164 41.4232 17.625 41.8594 19.3828 41.8594H22.2344C22.8073 41.8594 23.2305 41.9896 23.5039 42.25C23.7773 42.4974 23.9141 42.9271 23.9141 43.5391V49.0469ZM22.4492 27.1914C22.4492 25.9935 22.8529 25.0104 23.6602 24.2422C24.4674 23.474 25.4701 23.0898 26.668 23.0898C28.0221 23.0898 29.1029 23.5716 29.9102 24.5352C30.7305 25.4857 31.1406 26.6576 31.1406 28.0508C31.1406 29.2096 30.9323 30.2383 30.5156 31.1367C30.112 32.0221 29.5911 32.7708 28.9531 33.3828C28.3281 33.9948 27.6771 34.457 27 34.7695C26.3229 35.082 25.7174 35.2383 25.1836 35.2383C24.8841 35.2383 24.6367 35.1536 24.4414 34.9844C24.2461 34.8151 24.1484 34.5938 24.1484 34.3203C24.1484 34.0859 24.2135 33.8906 24.3438 33.7344C24.487 33.5651 24.7214 33.4414 25.0469 33.3633C25.5677 33.2331 26.0625 33.0312 26.5312 32.7578C27.013 32.4714 27.4362 32.1328 27.8008 31.7422C28.1654 31.3385 28.4453 30.8828 28.6406 30.375H28.3867C28.1263 30.7005 27.7943 30.9284 27.3906 31.0586C26.987 31.1758 26.5573 31.2344 26.1016 31.2344C25.0078 31.2344 24.1224 30.8503 23.4453 30.082C22.7812 29.3008 22.4492 28.3372 22.4492 27.1914ZM33.0742 27.1914C33.0742 25.9935 33.4714 25.0104 34.2656 24.2422C35.0729 23.474 36.082 23.0898 37.293 23.0898C38.6471 23.0898 39.7279 23.5716 40.5352 24.5352C41.3555 25.4857 41.7656 26.6576 41.7656 28.0508C41.7656 29.2096 41.5573 30.2383 41.1406 31.1367C40.737 32.0221 40.2161 32.7708 39.5781 33.3828C38.9531 33.9948 38.2956 34.457 37.6055 34.7695C36.9284 35.082 36.3294 35.2383 35.8086 35.2383C35.5091 35.2383 35.2617 35.1536 35.0664 34.9844C34.8711 34.8151 34.7734 34.5938 34.7734 34.3203C34.7734 34.0859 34.8385 33.8906 34.9688 33.7344C35.112 33.5651 35.3529 33.4414 35.6914 33.3633C36.1992 33.2331 36.6875 33.0312 37.1562 32.7578C37.638 32.4714 38.0612 32.1328 38.4258 31.7422C38.7904 31.3385 39.0703 30.8828 39.2656 30.375H39.0117C38.7513 30.7005 38.4193 30.9284 38.0156 31.0586C37.612 31.1758 37.1823 31.2344 36.7266 31.2344C35.6328 31.2344 34.7474 30.8503 34.0703 30.082C33.4062 29.3008 33.0742 28.3372 33.0742 27.1914Z",
		fill: "currentColor"
	})
})), Vp = s((e, t) => /* @__PURE__ */ S("svg", {
	width: 64,
	height: 64,
	viewBox: "0 0 64 64",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: [/* @__PURE__ */ x("path", {
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M1.91256 7.67068C0 11.0858 0 15.6405 0 24.75V39.25C0 48.3595 0 52.9142 1.91256 56.3293C3.26425 58.7429 5.25707 60.7357 7.67068 62.0874C11.0858 64 15.6405 64 24.75 64H39.25C48.3595 64 52.9142 64 56.3293 62.0874C58.7429 60.7357 60.7357 58.7429 62.0874 56.3293C64 52.9142 64 48.3595 64 39.25V24.75C64 15.6405 64 11.0858 62.0874 7.67068C60.7357 5.25707 58.7429 3.26425 56.3293 1.91256C52.9142 0 48.3595 0 39.25 0H24.75C15.6405 0 11.0858 0 7.67068 1.91256C5.25707 3.26425 3.26425 5.25707 1.91256 7.67068ZM20.8281 53.0703C21.3229 53.6302 22 53.9102 22.8594 53.9102C23.4583 53.9102 24.0182 53.7604 24.5391 53.4609C25.0729 53.1615 25.7044 52.6927 26.4336 52.0547L33.0742 46.1953H44.793C46.7721 46.1953 48.4518 45.8242 49.832 45.082C51.2253 44.3398 52.2865 43.2721 53.0156 41.8789C53.7578 40.4857 54.1289 38.8125 54.1289 36.8594V21.5664C54.1289 19.6133 53.7578 17.9401 53.0156 16.5469C52.2865 15.1536 51.2253 14.0859 49.832 13.3438C48.4518 12.5885 46.7721 12.2109 44.793 12.2109H19.1875C17.2214 12.2109 15.5417 12.5885 14.1484 13.3438C12.7552 14.0859 11.6875 15.1536 10.9453 16.5469C10.2161 17.9401 9.85156 19.6133 9.85156 21.5664V36.8594C9.85156 38.8125 10.2227 40.4857 10.9648 41.8789C11.7201 43.2721 12.7812 44.3398 14.1484 45.082C15.5156 45.8242 17.1237 46.1953 18.9727 46.1953H20.1055V50.8242C20.1055 51.7617 20.3464 52.5104 20.8281 53.0703Z",
		fill: "currentColor"
	}), /* @__PURE__ */ x("path", {
		d: "M22.4492 27.1914C22.4492 25.9935 22.8529 25.0104 23.6602 24.2422C24.4674 23.474 25.4701 23.0898 26.668 23.0898C28.0221 23.0898 29.1029 23.5716 29.9102 24.5352C30.7305 25.4857 31.1406 26.6576 31.1406 28.0508C31.1406 29.2096 30.9323 30.2383 30.5156 31.1367C30.112 32.0221 29.5911 32.7708 28.9531 33.3828C28.3281 33.9948 27.6771 34.457 27 34.7695C26.3229 35.082 25.7174 35.2383 25.1836 35.2383C24.8841 35.2383 24.6367 35.1536 24.4414 34.9844C24.2461 34.8151 24.1484 34.5938 24.1484 34.3203C24.1484 34.0859 24.2135 33.8906 24.3438 33.7344C24.487 33.5651 24.7214 33.4414 25.0469 33.3633C25.5677 33.2331 26.0625 33.0312 26.5312 32.7578C27.013 32.4714 27.4362 32.1328 27.8008 31.7422C28.1654 31.3385 28.4453 30.8828 28.6406 30.375H28.3867C28.1263 30.7005 27.7943 30.9284 27.3906 31.0586C26.987 31.1758 26.5573 31.2344 26.1016 31.2344C25.0078 31.2344 24.1224 30.8503 23.4453 30.082C22.7812 29.3008 22.4492 28.3372 22.4492 27.1914ZM33.0742 27.1914C33.0742 25.9935 33.4714 25.0104 34.2656 24.2422C35.0729 23.474 36.082 23.0898 37.293 23.0898C38.6471 23.0898 39.7279 23.5716 40.5352 24.5352C41.3555 25.4857 41.7656 26.6576 41.7656 28.0508C41.7656 29.2096 41.5573 30.2383 41.1406 31.1367C40.737 32.0221 40.2161 32.7708 39.5781 33.3828C38.9531 33.9948 38.2956 34.457 37.6055 34.7695C36.9284 35.082 36.3294 35.2383 35.8086 35.2383C35.5091 35.2383 35.2617 35.1536 35.0664 34.9844C34.8711 34.8151 34.7734 34.5938 34.7734 34.3203C34.7734 34.0859 34.8385 33.8906 34.9688 33.7344C35.112 33.5651 35.3529 33.4414 35.6914 33.3633C36.1992 33.2331 36.6875 33.0312 37.1562 32.7578C37.638 32.4714 38.0612 32.1328 38.4258 31.7422C38.7904 31.3385 39.0703 30.8828 39.2656 30.375H39.0117C38.7513 30.7005 38.4193 30.9284 38.0156 31.0586C37.612 31.1758 37.1823 31.2344 36.7266 31.2344C35.6328 31.2344 34.7474 30.8503 34.0703 30.082C33.4062 29.3008 33.0742 28.3372 33.0742 27.1914Z",
		fill: "currentColor"
	})]
})), Hp = s((e, t) => /* @__PURE__ */ x("svg", {
	width: 64,
	height: 64,
	viewBox: "0 0 64 64",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: /* @__PURE__ */ x("path", {
		d: "M23.9922 21.8594C23.4062 21.8594 22.9115 21.6641 22.5078 21.2734C22.1172 20.8698 21.9219 20.375 21.9219 19.7891C21.9219 19.2161 22.1172 18.7279 22.5078 18.3242C22.9115 17.9206 23.4062 17.7188 23.9922 17.7188H50.418C50.9909 17.7188 51.4792 17.9206 51.8828 18.3242C52.2865 18.7279 52.4883 19.2161 52.4883 19.7891C52.4883 20.375 52.2865 20.8698 51.8828 21.2734C51.4792 21.6641 50.9909 21.8594 50.418 21.8594H23.9922ZM23.9922 33.9883C23.4062 33.9883 22.9115 33.7865 22.5078 33.3828C22.1172 32.9792 21.9219 32.4909 21.9219 31.918C21.9219 31.3451 22.1172 30.8633 22.5078 30.4727C22.9115 30.069 23.4062 29.8672 23.9922 29.8672H50.418C50.9909 29.8672 51.4792 30.069 51.8828 30.4727C52.2865 30.8633 52.4883 31.3451 52.4883 31.918C52.4883 32.5039 52.2865 32.9987 51.8828 33.4023C51.4792 33.793 50.9909 33.9883 50.418 33.9883H23.9922ZM23.9922 46.1172C23.4062 46.1172 22.9115 45.9219 22.5078 45.5312C22.1172 45.1276 21.9219 44.6328 21.9219 44.0469C21.9219 43.474 22.1172 42.9857 22.5078 42.582C22.9115 42.1784 23.4062 41.9766 23.9922 41.9766H50.418C50.9909 41.9766 51.4792 42.1784 51.8828 42.582C52.2865 42.9857 52.4883 43.474 52.4883 44.0469C52.4883 44.6328 52.2865 45.1276 51.8828 45.5312C51.4792 45.9219 50.9909 46.1172 50.418 46.1172H23.9922ZM14.4805 22.7383C13.6602 22.7383 12.957 22.4518 12.3711 21.8789C11.7982 21.306 11.5117 20.6094 11.5117 19.7891C11.5117 18.9688 11.7982 18.2721 12.3711 17.6992C12.957 17.1263 13.6602 16.8398 14.4805 16.8398C15.2878 16.8398 15.9844 17.1263 16.5703 17.6992C17.1562 18.2721 17.4492 18.9688 17.4492 19.7891C17.4492 20.6094 17.1562 21.306 16.5703 21.8789C15.9844 22.4518 15.2878 22.7383 14.4805 22.7383ZM14.4805 34.8867C13.6602 34.8867 12.957 34.5938 12.3711 34.0078C11.7982 33.4219 11.5117 32.7253 11.5117 31.918C11.5117 31.1107 11.7982 30.4141 12.3711 29.8281C12.957 29.2422 13.6602 28.9492 14.4805 28.9492C15.2878 28.9492 15.9844 29.2422 16.5703 29.8281C17.1562 30.4141 17.4492 31.1107 17.4492 31.918C17.4492 32.7253 17.1562 33.4219 16.5703 34.0078C15.9844 34.5938 15.2878 34.8867 14.4805 34.8867ZM14.4805 47.0156C13.6602 47.0156 12.957 46.7227 12.3711 46.1367C11.7982 45.5638 11.5117 44.8672 11.5117 44.0469C11.5117 43.2266 11.7982 42.5299 12.3711 41.957C12.957 41.3841 13.6602 41.0977 14.4805 41.0977C15.2878 41.0977 15.9844 41.3841 16.5703 41.957C17.1562 42.5299 17.4492 43.2266 17.4492 44.0469C17.4492 44.8672 17.1562 45.5638 16.5703 46.1367C15.9844 46.7227 15.2878 47.0156 14.4805 47.0156Z",
		fill: "currentColor"
	})
})), Up = s((e, t) => /* @__PURE__ */ x("svg", {
	width: 64,
	height: 64,
	viewBox: "0 0 64 64",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: /* @__PURE__ */ x("path", {
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M1.91256 7.67068C0 11.0858 0 15.6405 0 24.75V39.25C0 48.3595 0 52.9142 1.91256 56.3293C3.26425 58.7429 5.25707 60.7357 7.67068 62.0874C11.0858 64 15.6405 64 24.75 64H39.25C48.3595 64 52.9142 64 56.3293 62.0874C58.7429 60.7357 60.7357 58.7429 62.0874 56.3293C64 52.9142 64 48.3595 64 39.25V24.75C64 15.6405 64 11.0858 62.0874 7.67068C60.7357 5.25706 58.7429 3.26425 56.3293 1.91256C52.9142 0 48.3595 0 39.25 0H24.75C15.6405 0 11.0858 0 7.67068 1.91256C5.25707 3.26425 3.26425 5.25706 1.91256 7.67068ZM22.5078 21.2734C22.9115 21.6641 23.4062 21.8594 23.9922 21.8594H50.418C50.9909 21.8594 51.4792 21.6641 51.8828 21.2734C52.2865 20.8698 52.4883 20.375 52.4883 19.7891C52.4883 19.2161 52.2865 18.7279 51.8828 18.3242C51.4792 17.9206 50.9909 17.7188 50.418 17.7188H23.9922C23.4062 17.7188 22.9115 17.9206 22.5078 18.3242C22.1172 18.7279 21.9219 19.2161 21.9219 19.7891C21.9219 20.375 22.1172 20.8698 22.5078 21.2734ZM22.5078 33.3828C22.9115 33.7865 23.4062 33.9883 23.9922 33.9883H50.418C50.9909 33.9883 51.4792 33.793 51.8828 33.4023C52.2865 32.9987 52.4883 32.5039 52.4883 31.918C52.4883 31.3451 52.2865 30.8633 51.8828 30.4727C51.4792 30.069 50.9909 29.8672 50.418 29.8672H23.9922C23.4062 29.8672 22.9115 30.069 22.5078 30.4727C22.1172 30.8633 21.9219 31.3451 21.9219 31.918C21.9219 32.4909 22.1172 32.9792 22.5078 33.3828ZM22.5078 45.5312C22.9115 45.9219 23.4062 46.1172 23.9922 46.1172H50.418C50.9909 46.1172 51.4792 45.9219 51.8828 45.5312C52.2865 45.1276 52.4883 44.6328 52.4883 44.0469C52.4883 43.474 52.2865 42.9857 51.8828 42.582C51.4792 42.1784 50.9909 41.9766 50.418 41.9766H23.9922C23.4062 41.9766 22.9115 42.1784 22.5078 42.582C22.1172 42.9857 21.9219 43.474 21.9219 44.0469C21.9219 44.6328 22.1172 45.1276 22.5078 45.5312ZM12.3711 21.8789C12.957 22.4518 13.6602 22.7383 14.4805 22.7383C15.2878 22.7383 15.9844 22.4518 16.5703 21.8789C17.1562 21.306 17.4492 20.6094 17.4492 19.7891C17.4492 18.9688 17.1562 18.2721 16.5703 17.6992C15.9844 17.1263 15.2878 16.8398 14.4805 16.8398C13.6602 16.8398 12.957 17.1263 12.3711 17.6992C11.7982 18.2721 11.5117 18.9688 11.5117 19.7891C11.5117 20.6094 11.7982 21.306 12.3711 21.8789ZM12.3711 34.0078C12.957 34.5938 13.6602 34.8867 14.4805 34.8867C15.2878 34.8867 15.9844 34.5938 16.5703 34.0078C17.1562 33.4219 17.4492 32.7253 17.4492 31.918C17.4492 31.1107 17.1562 30.4141 16.5703 29.8281C15.9844 29.2422 15.2878 28.9492 14.4805 28.9492C13.6602 28.9492 12.957 29.2422 12.3711 29.8281C11.7982 30.4141 11.5117 31.1107 11.5117 31.918C11.5117 32.7253 11.7982 33.4219 12.3711 34.0078ZM12.3711 46.1367C12.957 46.7227 13.6602 47.0156 14.4805 47.0156C15.2878 47.0156 15.9844 46.7227 16.5703 46.1367C17.1562 45.5638 17.4492 44.8672 17.4492 44.0469C17.4492 43.2266 17.1562 42.5299 16.5703 41.957C15.9844 41.3841 15.2878 41.0977 14.4805 41.0977C13.6602 41.0977 12.957 41.3841 12.3711 41.957C11.7982 42.5299 11.5117 43.2266 11.5117 44.0469C11.5117 44.8672 11.7982 45.5638 12.3711 46.1367Z",
		fill: "currentColor"
	})
})), X = /* @__PURE__ */ function(e) {
	return e.Lyrics = "lyrics", e.Playlist = "playlist", e.Repeat = "repeat", e.Shuffle = "shuffle", e.Star = "star", e.AirPlay = "airplay", e;
}({}), Wp = s((e, t) => /* @__PURE__ */ x("svg", {
	width: 56,
	height: 56,
	viewBox: "0 0 56 56",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: /* @__PURE__ */ x("path", {
		d: "M13.0293 28.9805C12.4727 28.9805 12.0039 28.79 11.623 28.4092C11.2422 28.0186 11.0518 27.5498 11.0518 27.0029V25.3623C11.0518 23.7998 11.4033 22.457 12.1064 21.334C12.8096 20.2109 13.8057 19.3516 15.0947 18.7559C16.3838 18.1504 17.9219 17.8477 19.709 17.8477H30.6367V14.7422C30.6367 14.2832 30.7637 13.9268 31.0176 13.6729C31.2715 13.4092 31.623 13.2773 32.0723 13.2773C32.2871 13.2773 32.4775 13.3115 32.6436 13.3799C32.8193 13.4482 32.9805 13.541 33.127 13.6582L39.2354 18.8145C39.5869 19.0977 39.7578 19.4443 39.748 19.8545C39.748 20.2549 39.5771 20.5967 39.2354 20.8799L33.127 26.0361C32.9805 26.1533 32.8193 26.2461 32.6436 26.3145C32.4775 26.3828 32.2871 26.417 32.0723 26.417C31.623 26.417 31.2715 26.29 31.0176 26.0361C30.7637 25.7725 30.6367 25.416 30.6367 24.9668V21.6855H19.4893C18.1025 21.6855 17.0039 22.0615 16.1934 22.8135C15.3926 23.5557 14.9922 24.5713 14.9922 25.8604V27.0029C14.9922 27.5498 14.8018 28.0186 14.4209 28.4092C14.04 28.79 13.5762 28.9805 13.0293 28.9805ZM42.9707 26.959C43.5176 26.959 43.9814 27.1494 44.3623 27.5303C44.7529 27.9111 44.9482 28.3799 44.9482 28.9365V30.5771C44.9482 32.1299 44.5967 33.4727 43.8936 34.6055C43.1904 35.7285 42.1895 36.5928 40.8906 37.1982C39.6016 37.7939 38.0684 38.0918 36.291 38.0918H25.3633V41.1973C25.3633 41.6465 25.2363 41.998 24.9824 42.252C24.7285 42.5156 24.377 42.6475 23.9277 42.6475C23.7129 42.6475 23.5176 42.6133 23.3418 42.5449C23.166 42.4766 23.0098 42.3838 22.873 42.2666L16.75 37.1104C16.418 36.8271 16.252 36.4854 16.252 36.085C16.252 35.6846 16.418 35.3379 16.75 35.0449L22.873 29.8887C23.0098 29.7715 23.166 29.6787 23.3418 29.6104C23.5176 29.542 23.7129 29.5078 23.9277 29.5078C24.377 29.5078 24.7285 29.6396 24.9824 29.9033C25.2363 30.1572 25.3633 30.5137 25.3633 30.9727V34.2393H36.5107C37.8975 34.2393 38.9912 33.8682 39.792 33.126C40.6025 32.3838 41.0078 31.3682 41.0078 30.0791V28.9365C41.0078 28.3799 41.1934 27.9111 41.5645 27.5303C41.9453 27.1494 42.4141 26.959 42.9707 26.959Z",
		fill: "currentColor"
	})
})), Gp = s((e, t) => /* @__PURE__ */ x("svg", {
	width: 56,
	height: 56,
	viewBox: "0 0 56 56",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: /* @__PURE__ */ x("path", {
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M1.65755 6.64792C0 9.6077 0 13.5551 0 21.45V34.55C0 42.4449 0 46.3923 1.65755 49.3521C2.82902 51.4439 4.55612 53.171 6.64792 54.3424C9.6077 56 13.5551 56 21.45 56H34.55C42.4449 56 46.3923 56 49.3521 54.3424C51.4439 53.171 53.171 51.4439 54.3424 49.3521C56 46.3923 56 42.4449 56 34.55V21.45C56 13.5551 56 9.6077 54.3424 6.64792C53.171 4.55612 51.4439 2.82902 49.3521 1.65755C46.3923 0 42.4449 0 34.55 0H21.45C13.5551 0 9.6077 0 6.64792 1.65755C4.55612 2.82902 2.82902 4.55612 1.65755 6.64792ZM11.623 28.4092C12.0039 28.79 12.4727 28.9805 13.0293 28.9805C13.5762 28.9805 14.04 28.79 14.4209 28.4092C14.8018 28.0186 14.9922 27.5498 14.9922 27.0029V25.8604C14.9922 24.5713 15.3926 23.5557 16.1934 22.8135C17.0039 22.0615 18.1025 21.6855 19.4893 21.6855H30.6367V24.9668C30.6367 25.416 30.7637 25.7725 31.0176 26.0361C31.2715 26.29 31.623 26.417 32.0723 26.417C32.2871 26.417 32.4775 26.3828 32.6436 26.3145C32.8193 26.2461 32.9805 26.1533 33.127 26.0361L39.2354 20.8799C39.5771 20.5967 39.748 20.2549 39.748 19.8545C39.7578 19.4443 39.5869 19.0977 39.2354 18.8145L33.127 13.6582C32.9805 13.541 32.8193 13.4482 32.6436 13.3799C32.4775 13.3115 32.2871 13.2773 32.0723 13.2773C31.623 13.2773 31.2715 13.4092 31.0176 13.6729C30.7637 13.9268 30.6367 14.2832 30.6367 14.7422V17.8477H19.709C17.9219 17.8477 16.3838 18.1504 15.0947 18.7559C13.8057 19.3516 12.8096 20.2109 12.1064 21.334C11.4033 22.457 11.0518 23.7998 11.0518 25.3623V27.0029C11.0518 27.5498 11.2422 28.0186 11.623 28.4092ZM44.3623 27.5303C43.9814 27.1494 43.5176 26.959 42.9707 26.959C42.4141 26.959 41.9453 27.1494 41.5645 27.5303C41.1934 27.9111 41.0078 28.3799 41.0078 28.9365V30.0791C41.0078 31.3682 40.6025 32.3838 39.792 33.126C38.9912 33.8682 37.8975 34.2393 36.5107 34.2393H25.3633V30.9727C25.3633 30.5137 25.2363 30.1572 24.9824 29.9033C24.7285 29.6396 24.377 29.5078 23.9277 29.5078C23.7129 29.5078 23.5176 29.542 23.3418 29.6104C23.166 29.6787 23.0098 29.7715 22.873 29.8887L16.75 35.0449C16.418 35.3379 16.252 35.6846 16.252 36.085C16.252 36.4854 16.418 36.8271 16.75 37.1104L22.873 42.2666C23.0098 42.3838 23.166 42.4766 23.3418 42.5449C23.5176 42.6133 23.7129 42.6475 23.9277 42.6475C24.377 42.6475 24.7285 42.5156 24.9824 42.252C25.2363 41.998 25.3633 41.6465 25.3633 41.1973V38.0918H36.291C38.0684 38.0918 39.6016 37.7939 40.8906 37.1982C42.1895 36.5928 43.1904 35.7285 43.8936 34.6055C44.5967 33.4727 44.9482 32.1299 44.9482 30.5771V28.9365C44.9482 28.3799 44.7529 27.9111 44.3623 27.5303Z",
		fill: "currentColor"
	})
})), Kp = s((e, t) => /* @__PURE__ */ x("svg", {
	width: 56,
	height: 56,
	viewBox: "0 0 56 56",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: /* @__PURE__ */ x("path", {
		d: "M9.55762 36.7148C9.55762 36.1777 9.74316 35.7285 10.1143 35.3672C10.4951 35.0059 10.9639 34.8252 11.5205 34.8252H14.7285C15.6562 34.8252 16.4375 34.6592 17.0723 34.3271C17.707 33.9951 18.3369 33.4434 18.9619 32.6719L27.7656 21.8613C28.8008 20.5918 29.8457 19.7275 30.9004 19.2686C31.9551 18.7998 33.2051 18.5654 34.6504 18.5654H37.3311V15.1963C37.3311 14.7471 37.458 14.3955 37.7119 14.1416C37.9658 13.8779 38.3174 13.7461 38.7666 13.7461C38.9814 13.7461 39.1719 13.7803 39.3379 13.8486C39.5137 13.917 39.6748 14.0098 39.8213 14.127L45.9297 19.2832C46.2715 19.5664 46.4424 19.9131 46.4424 20.3232C46.4424 20.7236 46.2715 21.0654 45.9297 21.3486L39.8213 26.5049C39.6748 26.6221 39.5137 26.7148 39.3379 26.7832C39.1719 26.8516 38.9814 26.8857 38.7666 26.8857C38.3174 26.8857 37.9658 26.7588 37.7119 26.5049C37.458 26.2412 37.3311 25.8848 37.3311 25.4355V22.3447H34.4746C33.8496 22.3447 33.3076 22.4131 32.8486 22.5498C32.3896 22.6768 31.96 22.8965 31.5596 23.209C31.1689 23.5215 30.7588 23.9414 30.3291 24.4688L21.1006 35.748C20.2607 36.7539 19.3916 37.4814 18.4932 37.9307C17.5947 38.3701 16.4766 38.5898 15.1387 38.5898H11.5205C10.9639 38.5898 10.4951 38.4092 10.1143 38.0479C9.74316 37.6865 9.55762 37.2422 9.55762 36.7148ZM9.55762 20.4551C9.55762 19.918 9.74316 19.4688 10.1143 19.1074C10.4951 18.7461 10.9639 18.5654 11.5205 18.5654H14.8896C16.2178 18.5654 17.375 18.79 18.3613 19.2393C19.3477 19.6787 20.2607 20.4062 21.1006 21.4219L30.2998 32.6719C30.9248 33.4336 31.5742 33.9854 32.248 34.3271C32.9219 34.6592 33.7373 34.8252 34.6943 34.8252H37.3311V31.7344C37.3311 31.2852 37.458 30.9287 37.7119 30.665C37.9658 30.4014 38.3174 30.2695 38.7666 30.2695C38.9814 30.2695 39.1719 30.3086 39.3379 30.3867C39.5137 30.4551 39.6748 30.5479 39.8213 30.665L45.9297 35.8066C46.2715 36.0996 46.4424 36.4463 46.4424 36.8467C46.4424 37.2471 46.2715 37.5938 45.9297 37.8867L39.8213 43.0283C39.6748 43.1455 39.5137 43.2383 39.3379 43.3066C39.1719 43.375 38.9814 43.4092 38.7666 43.4092C38.3174 43.4092 37.9658 43.2822 37.7119 43.0283C37.458 42.7744 37.3311 42.418 37.3311 41.959V38.5898H34.6211C33.2832 38.5898 32.0723 38.3652 30.9883 37.916C29.9141 37.457 28.9229 36.6758 28.0146 35.5723L18.9619 24.498C18.3369 23.7266 17.6631 23.1748 16.9404 22.8428C16.2275 22.5107 15.4023 22.3447 14.4648 22.3447H11.5205C10.9639 22.3447 10.4951 22.1641 10.1143 21.8027C9.74316 21.4316 9.55762 20.9824 9.55762 20.4551Z",
		fill: "currentColor"
	})
})), qp = s((e, t) => /* @__PURE__ */ x("svg", {
	width: 56,
	height: 56,
	viewBox: "0 0 56 56",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: /* @__PURE__ */ x("path", {
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M1.65755 6.64792C0 9.6077 0 13.5551 0 21.45V34.55C0 42.4449 0 46.3923 1.65755 49.3521C2.82902 51.4439 4.55612 53.171 6.64792 54.3424C9.6077 56 13.5551 56 21.45 56H34.55C42.4449 56 46.3923 56 49.3521 54.3424C51.4439 53.171 53.171 51.4439 54.3424 49.3521C56 46.3923 56 42.4449 56 34.55V21.45C56 13.5551 56 9.6077 54.3424 6.64792C53.171 4.55612 51.4439 2.82902 49.3521 1.65755C46.3923 0 42.4449 0 34.55 0H21.45C13.5551 0 9.6077 0 6.64792 1.65755C4.55612 2.82902 2.82902 4.55612 1.65755 6.64792ZM10.1143 35.3672C9.74316 35.7285 9.55762 36.1777 9.55762 36.7148C9.55762 37.2422 9.74316 37.6865 10.1143 38.0479C10.4951 38.4092 10.9639 38.5898 11.5205 38.5898H15.1387C16.4766 38.5898 17.5947 38.3701 18.4932 37.9307C19.3916 37.4814 20.2607 36.7539 21.1006 35.748L24.631 31.4331L28.0146 35.5723C28.9229 36.6758 29.9141 37.457 30.9883 37.916C32.0723 38.3652 33.2832 38.5898 34.6211 38.5898H37.3311V41.959C37.3311 42.418 37.458 42.7744 37.7119 43.0283C37.9658 43.2822 38.3174 43.4092 38.7666 43.4092C38.9814 43.4092 39.1719 43.375 39.3379 43.3066C39.5137 43.2383 39.6748 43.1455 39.8213 43.0283L45.9297 37.8867C46.2715 37.5938 46.4424 37.2471 46.4424 36.8467C46.4424 36.4463 46.2715 36.0996 45.9297 35.8066L39.8213 30.665C39.6748 30.5479 39.5137 30.4551 39.3379 30.3867C39.1719 30.3086 38.9814 30.2695 38.7666 30.2695C38.3174 30.2695 37.9658 30.4014 37.7119 30.665C37.458 30.9287 37.3311 31.2852 37.3311 31.7344V34.8252H34.6943C33.7373 34.8252 32.9219 34.6592 32.248 34.3271C31.5742 33.9854 30.9248 33.4336 30.2998 32.6719L26.9596 28.587L30.3291 24.4688C30.7588 23.9414 31.1689 23.5215 31.5596 23.209C31.96 22.8965 32.3896 22.6768 32.8486 22.5498C33.3076 22.4131 33.8496 22.3447 34.4746 22.3447H37.3311V25.4355C37.3311 25.8848 37.458 26.2412 37.7119 26.5049C37.9658 26.7588 38.3174 26.8857 38.7666 26.8857C38.9814 26.8857 39.1719 26.8516 39.3379 26.7832C39.5137 26.7148 39.6748 26.6221 39.8213 26.5049L45.9297 21.3486C46.2715 21.0654 46.4424 20.7236 46.4424 20.3232C46.4424 19.9131 46.2715 19.5664 45.9297 19.2832L39.8213 14.127C39.6748 14.0098 39.5137 13.917 39.3379 13.8486C39.1719 13.7803 38.9814 13.7461 38.7666 13.7461C38.3174 13.7461 37.9658 13.8779 37.7119 14.1416C37.458 14.3955 37.3311 14.7471 37.3311 15.1963V18.5654H34.6504C33.2051 18.5654 31.9551 18.7998 30.9004 19.2686C29.8457 19.7275 28.8008 20.5918 27.7656 21.8613L24.6192 25.7249L21.1006 21.4219C20.2607 20.4062 19.3477 19.6787 18.3613 19.2393C17.375 18.79 16.2178 18.5654 14.8896 18.5654H11.5205C10.9639 18.5654 10.4951 18.7461 10.1143 19.1074C9.74316 19.4688 9.55762 19.918 9.55762 20.4551C9.55762 20.9824 9.74316 21.4316 10.1143 21.8027C10.4951 22.1641 10.9639 22.3447 11.5205 22.3447H14.4648C15.4023 22.3447 16.2275 22.5107 16.9404 22.8428C17.6631 23.1748 18.3369 23.7266 18.9619 24.498L22.2965 28.5772L18.9619 32.6719C18.3369 33.4434 17.707 33.9951 17.0723 34.3271C16.4375 34.6592 15.6562 34.8252 14.7285 34.8252H11.5205C10.9639 34.8252 10.4951 35.0059 10.1143 35.3672Z",
		fill: "currentColor"
	})
})), Jp = s((e, t) => /* @__PURE__ */ x("svg", {
	width: 36,
	height: 36,
	viewBox: "0 0 36 36",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: /* @__PURE__ */ x("path", {
		d: "M7.83396 32.7793C7.49216 32.5254 7.2822 32.1836 7.20407 31.7539C7.13571 31.334 7.19919 30.8359 7.3945 30.2598L10.4121 21.3096L2.72165 15.7871C2.2236 15.4355 1.87692 15.0693 1.68161 14.6885C1.4863 14.2979 1.457 13.8975 1.59372 13.4873C1.73044 13.0869 1.98923 12.7891 2.37009 12.5938C2.75095 12.3887 3.24899 12.291 3.86423 12.3008L13.2832 12.3594L16.1543 3.36523C16.3398 2.7793 16.584 2.33496 16.8867 2.03223C17.1992 1.71973 17.5654 1.56348 17.9853 1.56348C18.415 1.56348 18.7812 1.71973 19.084 2.03223C19.3965 2.33496 19.6455 2.7793 19.831 3.36523L22.7021 12.3594L32.1211 12.3008C32.7363 12.291 33.2343 12.3887 33.6152 12.5938C33.9961 12.7891 34.2549 13.0869 34.3916 13.4873C34.5283 13.8975 34.499 14.2979 34.3037 14.6885C34.1084 15.0693 33.7617 15.4355 33.2636 15.7871L25.5732 21.3096L28.5908 30.2598C28.7861 30.8359 28.8447 31.334 28.7666 31.7539C28.6982 32.1836 28.4931 32.5254 28.1513 32.7793C27.8095 33.0527 27.4238 33.1504 26.9941 33.0723C26.5644 32.9941 26.1054 32.7793 25.6172 32.4277L17.9853 26.8174L10.3681 32.4277C9.87985 32.7793 9.42087 32.9941 8.99118 33.0723C8.56149 33.1504 8.17575 33.0527 7.83396 32.7793ZM10.4121 29.2344C10.4316 29.2637 10.4707 29.2588 10.5293 29.2197L17.1357 24.1221C17.4287 23.8877 17.7119 23.7705 17.9853 23.7705C18.2685 23.7705 18.5566 23.8877 18.8496 24.1221L25.456 29.2197C25.5146 29.2588 25.5537 29.2637 25.5732 29.2344C25.583 29.2148 25.583 29.1758 25.5732 29.1172L22.79 21.2656C22.7119 21.0312 22.6679 20.8213 22.6582 20.6357C22.6582 20.4404 22.707 20.2646 22.8047 20.1084C22.9121 19.9521 23.0732 19.8008 23.2881 19.6543L30.1728 14.9521C30.2314 14.9131 30.2558 14.874 30.2461 14.835C30.2363 14.8057 30.1924 14.791 30.1142 14.791L21.7939 14.9961C21.4131 15.0059 21.1152 14.9424 20.9004 14.8057C20.6855 14.6592 20.5244 14.3955 20.417 14.0146L18.0732 6.03125C18.0537 5.96289 18.0244 5.92871 17.9853 5.92871C17.956 5.92871 17.9316 5.96289 17.9121 6.03125L15.5683 14.0146C15.4609 14.3955 15.2998 14.6592 15.0849 14.8057C14.8701 14.9424 14.5722 15.0059 14.1914 14.9961L5.87107 14.791C5.79294 14.791 5.74899 14.8057 5.73923 14.835C5.72946 14.874 5.75388 14.9131 5.81247 14.9521L12.6972 19.6543C12.9121 19.8008 13.0683 19.9521 13.166 20.1084C13.2734 20.2646 13.3222 20.4404 13.3125 20.6357C13.3125 20.8213 13.2734 21.0312 13.1953 21.2656L10.4121 29.1172C10.3925 29.1758 10.3925 29.2148 10.4121 29.2344Z",
		fill: "currentColor"
	})
})), Yp = s((e, t) => /* @__PURE__ */ x("svg", {
	width: 36,
	height: 36,
	viewBox: "0 0 36 36",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: /* @__PURE__ */ x("path", {
		d: "M7.83396 32.7793C7.49216 32.5254 7.2822 32.1836 7.20407 31.7539C7.13571 31.334 7.19919 30.8359 7.3945 30.2598L10.4121 21.3096L2.72165 15.7871C2.2236 15.4355 1.87692 15.0693 1.68161 14.6885C1.4863 14.2979 1.457 13.8975 1.59372 13.4873C1.73044 13.0869 1.98923 12.7891 2.37009 12.5938C2.75095 12.3984 3.24899 12.3008 3.86423 12.3008H13.2832L16.1543 3.36523C16.3398 2.7793 16.584 2.33496 16.8867 2.03223C17.1992 1.71973 17.5654 1.56348 17.9853 1.56348C18.415 1.56348 18.7812 1.71973 19.084 2.03223C19.3965 2.33496 19.6455 2.7793 19.831 3.36523L22.7021 12.3008H32.1211C32.7363 12.3008 33.2343 12.3984 33.6152 12.5938C33.9961 12.7891 34.2549 13.0869 34.3916 13.4873C34.5283 13.8975 34.499 14.2979 34.3037 14.6885C34.1084 15.0693 33.7617 15.4355 33.2636 15.7871L25.5732 21.3096L28.5908 30.2598C28.7861 30.8359 28.8447 31.334 28.7666 31.7539C28.6982 32.1836 28.4931 32.5254 28.1513 32.7793C27.8095 33.0527 27.4238 33.1504 26.9941 33.0723C26.5644 32.9941 26.1054 32.7793 25.6172 32.4277L17.9853 26.8174L10.3681 32.4277C9.87985 32.7793 9.42087 32.9941 8.99118 33.0723C8.56149 33.1504 8.17575 33.0527 7.83396 32.7793Z",
		fill: "currentColor"
	})
})), Xp = l(({ uncheckedIcon: e, checkedIcon: t, checked: n, className: r, ...i }) => /* @__PURE__ */ x("button", {
	className: (0, J.default)(r, zp.toggleIconButton),
	type: "button",
	...i,
	children: n ? t : e
})), Zp = {
	[X.Lyrics]: [Bp, Vp],
	[X.Playlist]: [Hp, Up],
	[X.Repeat]: [Wp, Gp],
	[X.Shuffle]: [Kp, qp],
	[X.Star]: [Jp, Yp],
	[X.AirPlay]: [Rp, Rp]
}, Qp = l(({ type: e, checked: t, onClick: n, ...r }) => {
	let [i, a] = Zp[e];
	return /* @__PURE__ */ x(Xp, {
		uncheckedIcon: /* @__PURE__ */ x(i, {}),
		checkedIcon: /* @__PURE__ */ x(a, {}),
		checked: t ?? !1,
		onClick: n,
		...r
	});
}), $p = s((e, t) => /* @__PURE__ */ x("svg", {
	width: 32,
	height: 40,
	viewBox: "0 0 32 40",
	fill: "currentColor",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: /* @__PURE__ */ x("path", {
		d: "M14.9042 27.1802C14.4202 27.1802 14.0473 26.9897 13.595 26.5612L10.3815 23.5461C10.3339 23.5065 10.2863 23.4906 10.2228 23.4906H8.01703C6.70778 23.4906 5.99365 22.7527 5.99365 21.38V18.4442C5.99365 17.0715 6.70778 16.3257 8.01703 16.3257H10.2307C10.2863 16.3257 10.3418 16.3019 10.3815 16.2622L13.595 13.2709C14.079 12.8107 14.4361 12.6282 14.8883 12.6282C15.6104 12.6282 16.142 13.1915 16.142 13.8977V25.9344C16.142 26.6406 15.6104 27.1802 14.9042 27.1802Z",
		className: "speaker-bounce-1"
	})
})), em = s((e, t) => /* @__PURE__ */ S("svg", {
	width: 43,
	height: 40,
	viewBox: "0 0 43 40",
	fill: "currentColor",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ x("path", {
			d: "M24.0403 27.1802C23.5642 27.1802 23.1913 26.9897 22.739 26.5612L19.5176 23.5461C19.4779 23.5065 19.4224 23.4906 19.3668 23.4906H17.161C15.8518 23.4906 15.1377 22.7527 15.1377 21.38V18.4442C15.1377 17.0715 15.8518 16.3257 17.161 16.3257H19.3668C19.4303 16.3257 19.4779 16.3019 19.5255 16.2622L22.739 13.2709C23.223 12.8107 23.5721 12.6282 24.0324 12.6282C24.7544 12.6282 25.286 13.1915 25.286 13.8977V25.9344C25.286 26.6406 24.7544 27.1802 24.0403 27.1802Z",
			className: "speaker-bounce-1"
		}),
		/* @__PURE__ */ x("path", {
			d: "M28.0948 23.6653C27.6028 23.3559 27.4996 22.7687 27.8964 22.1101C28.2931 21.4991 28.5232 20.7136 28.5232 19.8964C28.5232 19.0712 28.301 18.2856 27.8964 17.6826C27.4917 17.032 27.6028 16.4369 28.0948 16.1274C28.547 15.8418 29.1104 15.9529 29.404 16.3576C30.0863 17.3097 30.491 18.5713 30.491 19.8964C30.491 21.2214 30.0863 22.4831 29.404 23.4273C29.1104 23.8399 28.547 23.943 28.0948 23.6653Z",
			className: "speaker-bounce-2"
		}),
		/* @__PURE__ */ x("path", {
			d: "M31.6733 25.8711C31.1576 25.5696 31.0942 24.9428 31.4432 24.3794C32.2526 23.1257 32.7207 21.5468 32.7207 19.8964C32.7207 18.2459 32.2605 16.6591 31.4432 15.4133C31.0942 14.8499 31.1576 14.2231 31.6733 13.9137C32.1415 13.6439 32.7128 13.755 33.0143 14.2152C34.0855 15.7783 34.6885 17.8016 34.6885 19.8964C34.6885 21.9911 34.0775 23.9985 33.0143 25.5775C32.7128 26.0377 32.1415 26.1488 31.6733 25.8711Z",
			className: "speaker-bounce-3"
		}),
		/* @__PURE__ */ x("path", {
			d: "M35.2362 28.1007C34.7363 27.7992 34.6569 27.1803 34.9981 26.6249C36.1883 24.7286 36.9104 22.4196 36.9104 19.9122C36.9104 17.397 36.1883 15.0881 34.9981 13.1917C34.6569 12.6362 34.7363 12.0174 35.2362 11.7159C35.7123 11.4302 36.3073 11.5651 36.6088 12.0571C38.0133 14.2866 38.8702 16.9765 38.8702 19.9122C38.8702 22.8401 38.0291 25.5379 36.6088 27.7675C36.3073 28.2515 35.7123 28.3864 35.2362 28.1007Z",
			className: "speaker-bounce-4"
		})
	]
})), tm = "OosG1W_speakerAnimate", nm = "OosG1W_volumeControl", rm = {
	"speaker-bounce-part1": "OosG1W_speaker-bounce-part1",
	"speaker-bounce-part2": "OosG1W_speaker-bounce-part2",
	"speaker-bounce-part3": "OosG1W_speaker-bounce-part3",
	speakerAnimate: tm,
	volumeControl: nm
}, im = (e) => {
	let t = v(e.value), n = v(null), r = v(null);
	return f(() => {
		t.current !== e.value && (t.current = e.value, e.value <= e.min && n.current ? (n.current.classList.remove(rm.speakerAnimate), requestAnimationFrame(() => {
			n.current?.classList?.add(rm.speakerAnimate);
		})) : e.value >= e.max && r.current && (r.current.classList.remove(rm.speakerAnimate), requestAnimationFrame(() => {
			r.current?.classList?.add(rm.speakerAnimate);
		})));
	}, [
		e.value,
		e.min,
		e.max
	]), /* @__PURE__ */ x(yf, {
		className: rm.volumeControl,
		beforeIcon: /* @__PURE__ */ x($p, {
			ref: n,
			color: "#FFFFFF"
		}),
		afterIcon: /* @__PURE__ */ x(em, {
			ref: r,
			color: "#FFFFFF"
		}),
		changeOnDrag: !0,
		...e
	});
}, am = s((e, t) => /* @__PURE__ */ S("svg", {
	id: "vector",
	xmlns: "http://www.w3.org/2000/svg",
	width: 32,
	height: 32,
	viewBox: "0 0 134 134",
	fill: "currentColor",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ x("path", {
			d: "M62 60.0717C65.938 62.3453 67.9069 63.4821 68.5677 64.9662C69.1441 66.2608 69.1441 67.7391 68.5677 69.0336C67.9069 70.5177 65.938 71.6545 62 73.9281L41 86.0525C37.062 88.326 35.0931 89.4628 33.4774 89.293C32.0681 89.1449 30.7878 88.4057 29.9549 87.2593C29 85.945 29 83.6714 29 79.1243V54.8755C29 50.3284 29 48.0548 29.9549 46.7405C30.7878 45.5941 32.0681 44.8549 33.4774 44.7068C35.0931 44.537 37.062 45.6738 41 47.9473L62 60.0717Z",
			className: "amll-forward-left-arrow"
		}),
		/* @__PURE__ */ x("path", {
			d: "M62 60.0717C65.938 62.3453 67.9069 63.4821 68.5677 64.9662C69.1441 66.2608 69.1441 67.7391 68.5677 69.0336C67.9069 70.5177 65.938 71.6545 62 73.9281L41 86.0525C37.062 88.326 35.0931 89.4628 33.4774 89.293C32.0681 89.1449 30.7878 88.4057 29.9549 87.2593C29 85.945 29 83.6714 29 79.1243V54.8755C29 50.3284 29 48.0548 29.9549 46.7405C30.7878 45.5941 32.0681 44.8549 33.4774 44.7068C35.0931 44.537 37.062 45.6738 41 47.9473L62 60.0717Z",
			className: "amll-forward-left-standby"
		}),
		/* @__PURE__ */ x("path", {
			d: "M102 60.0717C105.938 62.3453 107.907 63.4821 108.568 64.9662C109.144 66.2608 109.144 67.7391 108.568 69.0336C107.907 70.5177 105.938 71.6545 102 73.9281L81 86.0525C77.062 88.326 75.0931 89.4628 73.4774 89.293C72.0681 89.1449 70.7878 88.4057 69.9549 87.2593C69 85.945 69 83.6714 69 79.1243V54.8755C69 50.3284 69 48.0548 69.9549 46.7405C70.7878 45.5941 72.0681 44.8549 73.4774 44.7068C75.0931 44.537 77.062 45.6738 81 47.9473L102 60.0717Z",
			className: "amll-forward-right-arrow"
		})
	]
})), om = s((e, t) => /* @__PURE__ */ x("svg", {
	id: "vector",
	width: 38,
	height: 38,
	viewBox: "0 0 38 38",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: /* @__PURE__ */ x("path", {
		d: "M8.46953 37C7.37801 37 6.56603 36.7271 6.03359 36.1814C5.51445 35.6489 5.25488 34.8502 5.25488 33.7854V4.21464C5.25488 3.14975 5.52111 2.35108 6.05355 1.81864C6.59931 1.27288 7.40463 1 8.46953 1H13.3813C14.4329 1 15.2249 1.27288 15.7574 1.81864C16.3031 2.35108 16.576 3.14975 16.576 4.21464V33.7854C16.576 34.8502 16.3031 35.6489 15.7574 36.1814C15.2249 36.7271 14.4329 37 13.3813 37H8.46953ZM24.6426 37C23.5644 37 22.759 36.7271 22.2266 36.1814C21.6942 35.6489 21.4279 34.8502 21.4279 33.7854V4.21464C21.4279 3.14975 21.6942 2.35108 22.2266 1.81864C22.7724 1.27288 23.5777 1 24.6426 1H29.5544C30.6193 1 31.4179 1.27288 31.9504 1.81864C32.4828 2.35108 32.7491 3.14975 32.7491 4.21464V33.7854C32.7491 34.8502 32.4828 35.6489 31.9504 36.1814C31.4179 36.7271 30.6193 37 29.5544 37H24.6426Z",
		fill: "currentColor",
		fillRule: "nonzero",
		id: "path_0"
	})
})), sm = s((e, t) => /* @__PURE__ */ x("svg", {
	id: "vector",
	width: 38,
	height: 38,
	viewBox: "0 0 38 38",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: /* @__PURE__ */ x("path", {
		d: "M5.80762 32.4896V5.4925C5.80762 4.305 6.12305 3.41438 6.75391 2.82063C7.38477 2.22688 8.13932 1.93 9.01758 1.93C9.78451 1.93 10.5391 2.14029 11.2812 2.56086L33.7324 15.6605C34.5859 16.1553 35.223 16.6562 35.6436 17.1634C36.0641 17.6582 36.2744 18.2705 36.2744 19.0003C36.2744 19.7054 36.0641 20.3177 35.6436 20.8372C35.223 21.3444 34.5859 21.8392 33.7324 22.3216L11.2812 35.4212C10.5391 35.8542 9.78451 36.0706 9.01758 36.0706C8.13932 36.0706 7.38477 35.7676 6.75391 35.1614C6.12305 34.5677 5.80762 33.6771 5.80762 32.4896Z",
		fill: "currentColor",
		fillRule: "nonzero"
	})
})), cm = s((e, t) => /* @__PURE__ */ S("svg", {
	id: "vector",
	xmlns: "http://www.w3.org/2000/svg",
	width: 32,
	height: 32,
	viewBox: "0 0 134 134",
	fill: "currentColor",
	ref: t,
	...e,
	children: [
		/* @__PURE__ */ x("path", {
			d: "M72 60.0717C68.062 62.3453 66.0931 63.4821 65.4323 64.9662C64.8559 66.2608 64.8559 67.7391 65.4323 69.0336C66.0931 70.5177 68.062 71.6545 72 73.9281L93 86.0525C96.938 88.326 98.9069 89.4628 100.523 89.293C101.932 89.1449 103.212 88.4057 104.045 87.2593C105 85.945 105 83.6714 105 79.1243V54.8755C105 50.3284 105 48.0548 104.045 46.7405C103.212 45.5941 101.932 44.8549 100.523 44.7068C98.9069 44.537 96.938 45.6738 93 47.9473L72 60.0717Z",
			className: "amll-rewind-right-arrow"
		}),
		/* @__PURE__ */ x("path", {
			d: "M72 60.0717C68.062 62.3453 66.0931 63.4821 65.4323 64.9662C64.8559 66.2608 64.8559 67.7391 65.4323 69.0336C66.0931 70.5177 68.062 71.6545 72 73.9281L93 86.0525C96.938 88.326 98.9069 89.4628 100.523 89.293C101.932 89.1449 103.212 88.4057 104.045 87.2593C105 85.945 105 83.6714 105 79.1243V54.8755C105 50.3284 105 48.0548 104.045 46.7405C103.212 45.5941 101.932 44.8549 100.523 44.7068C98.9069 44.537 96.938 45.6738 93 47.9473L72 60.0717Z",
			className: "amll-rewind-right-standby"
		}),
		/* @__PURE__ */ x("path", {
			d: "M32 60.0717C28.062 62.3453 26.0931 63.4821 25.4323 64.9662C24.8559 66.2608 24.8559 67.7391 25.4323 69.0336C26.0931 70.5177 28.062 71.6545 32 73.9281L53 86.0525C56.938 88.326 58.9069 89.4628 60.5226 89.293C61.9319 89.1449 63.2122 88.4057 64.0451 87.2593C65 85.945 65 83.6714 65 79.1243V54.8755C65 50.3284 65 48.0548 64.0451 46.7405C63.2122 45.5941 61.9319 44.8549 60.5226 44.7068C58.9069 44.537 56.938 45.6738 53 47.9473L32 60.0717Z",
			className: "amll-rewind-left-arrow"
		})
	]
})), lm = s((e, t) => /* @__PURE__ */ x("svg", {
	width: 56,
	height: 56,
	viewBox: "0 0 56 56",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: /* @__PURE__ */ x("path", {
		d: "M14.2495 28.9956C13.6519 28.9956 13.1465 28.7891 12.7334 28.376C12.3203 27.9541 12.1138 27.4531 12.1138 26.873V25.3438C12.1138 23.832 12.4565 22.5312 13.1421 21.4414C13.8276 20.3516 14.8076 19.5166 16.082 18.9365C17.3564 18.3477 18.877 18.0532 20.6436 18.0532H30.3599V15.4033C30.3599 14.9111 30.4961 14.5288 30.7686 14.2563C31.041 13.9751 31.4146 13.8345 31.8892 13.8345C32.1177 13.8345 32.3198 13.874 32.4956 13.9531C32.6714 14.0234 32.8296 14.1113 32.9702 14.2168L38.7578 19.1343C39.1182 19.4331 39.2939 19.7979 39.2852 20.2285C39.2852 20.6504 39.1094 21.0107 38.7578 21.3096L32.9702 26.2271C32.8296 26.3501 32.6714 26.4468 32.4956 26.5171C32.3198 26.5874 32.1177 26.6226 31.8892 26.6226C31.4146 26.6226 31.041 26.4819 30.7686 26.2007C30.4961 25.9194 30.3599 25.5415 30.3599 25.0669V22.1929H20.459C19.1846 22.1929 18.1826 22.5269 17.4531 23.1948C16.7236 23.8628 16.3589 24.7812 16.3589 25.9502V26.873C16.3589 27.4531 16.1523 27.9541 15.7393 28.376C15.3262 28.7891 14.8296 28.9956 14.2495 28.9956ZM41.7505 26.7017C42.3306 26.7017 42.8271 26.9082 43.2402 27.3213C43.6621 27.7344 43.873 28.2354 43.873 28.8242V30.3535C43.873 31.8652 43.5303 33.166 42.8447 34.2559C42.1592 35.3457 41.1792 36.1851 39.9048 36.7739C38.6304 37.354 37.1055 37.644 35.3301 37.644H25.627V40.2676C25.627 40.751 25.4907 41.1333 25.2183 41.4146C24.9458 41.6958 24.5723 41.8364 24.0977 41.8364C23.8691 41.8364 23.6626 41.7969 23.478 41.7178C23.3022 41.6475 23.1484 41.5552 23.0166 41.4409L17.2158 36.5366C16.873 36.2466 16.6973 35.8862 16.6885 35.4556C16.6885 35.0249 16.8643 34.6558 17.2158 34.3481L23.0166 29.4307C23.1484 29.3164 23.3022 29.2241 23.478 29.1538C23.6626 29.0835 23.8691 29.0483 24.0977 29.0483C24.5723 29.0483 24.9458 29.189 25.2183 29.4702C25.4907 29.7427 25.627 30.125 25.627 30.6172V33.4912H35.5278C36.8022 33.4912 37.8042 33.1616 38.5337 32.5024C39.2632 31.8345 39.6279 30.916 39.6279 29.7471V28.8242C39.6279 28.2354 39.8301 27.7344 40.2344 27.3213C40.6475 26.9082 41.1528 26.7017 41.7505 26.7017Z",
		fill: "white"
	})
})), um = s((e, t) => /* @__PURE__ */ x("svg", {
	width: 56,
	height: 56,
	viewBox: "0 0 56 56",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: /* @__PURE__ */ x("path", {
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M37.5805 0H18.4195C12.0146 0 9.69208 0.666878 7.35056 1.91914C5.00904 3.1714 3.1714 5.00904 1.91914 7.35056C0.666879 9.69208 0 12.0146 0 18.4195V37.5805C0 43.9854 0.666879 46.3079 1.91914 48.6494C3.1714 50.991 5.00904 52.8286 7.35056 54.0809C9.69208 55.3331 12.0146 56 18.4195 56H37.5805C43.9854 56 46.3079 55.3331 48.6495 54.0809C50.991 52.8286 52.8286 50.991 54.0809 48.6494C55.3331 46.3079 56 43.9854 56 37.5805V18.4195C56 12.0146 55.3331 9.69208 54.0809 7.35056C52.8286 5.00904 50.991 3.1714 48.6495 1.91914C46.3079 0.666878 43.9854 0 37.5805 0ZM12.7334 28.376C13.1465 28.7891 13.6519 28.9956 14.2495 28.9956C14.8296 28.9956 15.3262 28.7891 15.7393 28.376C16.1523 27.9541 16.3589 27.4531 16.3589 26.873V25.9502C16.3589 24.7812 16.7236 23.8628 17.4531 23.1948C18.1826 22.5269 19.1846 22.1929 20.459 22.1929H30.3599V25.0669C30.3599 25.5415 30.4961 25.9194 30.7686 26.2007C31.041 26.4819 31.4146 26.6226 31.8892 26.6226C32.1177 26.6226 32.3198 26.5874 32.4956 26.5171C32.6714 26.4468 32.8296 26.3501 32.9702 26.2271L38.7578 21.3096C39.1094 21.0107 39.2852 20.6504 39.2852 20.2285C39.2939 19.7979 39.1182 19.4331 38.7578 19.1343L32.9702 14.2168C32.8296 14.1113 32.6714 14.0234 32.4956 13.9531C32.3198 13.874 32.1177 13.8345 31.8892 13.8345C31.4146 13.8345 31.041 13.9751 30.7686 14.2563C30.4961 14.5288 30.3599 14.9111 30.3599 15.4033V18.0532H20.6436C18.877 18.0532 17.3564 18.3477 16.082 18.9365C14.8076 19.5166 13.8276 20.3516 13.1421 21.4414C12.4565 22.5312 12.1138 23.832 12.1138 25.3438V26.873C12.1138 27.4531 12.3203 27.9541 12.7334 28.376ZM43.2402 27.3213C42.8271 26.9082 42.3306 26.7017 41.7505 26.7017C41.1528 26.7017 40.6475 26.9082 40.2344 27.3213C39.8301 27.7344 39.6279 28.2354 39.6279 28.8242V29.7471C39.6279 30.916 39.2632 31.8345 38.5337 32.5024C37.8042 33.1616 36.8022 33.4912 35.5278 33.4912H25.627V30.6172C25.627 30.125 25.4907 29.7427 25.2183 29.4702C24.9458 29.189 24.5723 29.0483 24.0977 29.0483C23.8691 29.0483 23.6626 29.0835 23.478 29.1538C23.3022 29.2241 23.1484 29.3164 23.0166 29.4307L17.2158 34.3481C16.8643 34.6558 16.6885 35.0249 16.6885 35.4556C16.6973 35.8862 16.873 36.2466 17.2158 36.5366L23.0166 41.4409C23.1484 41.5552 23.3022 41.6475 23.478 41.7178C23.6626 41.7969 23.8691 41.8364 24.0977 41.8364C24.5723 41.8364 24.9458 41.6958 25.2183 41.4146C25.4907 41.1333 25.627 40.751 25.627 40.2676V37.644H35.3301C37.1055 37.644 38.6304 37.354 39.9048 36.7739C41.1792 36.1851 42.1592 35.3457 42.8447 34.2559C43.5303 33.166 43.873 31.8652 43.873 30.3535V28.8242C43.873 28.2354 43.6621 27.7344 43.2402 27.3213Z",
		fill: "white"
	})
})), dm = s((e, t) => /* @__PURE__ */ x("svg", {
	width: 56,
	height: 56,
	viewBox: "0 0 56 56",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: /* @__PURE__ */ x("path", {
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M37.5805 0H18.4195C12.0146 0 9.69208 0.666878 7.35056 1.91914C5.00904 3.1714 3.1714 5.00904 1.91914 7.35056C0.666879 9.69208 0 12.0146 0 18.4195V37.5805C0 43.9854 0.666879 46.3079 1.91914 48.6494C3.1714 50.991 5.00904 52.8286 7.35056 54.0809C9.69208 55.3331 12.0146 56 18.4195 56H37.5805C43.9854 56 46.3079 55.3331 48.6495 54.0809C50.991 52.8286 52.8286 50.991 54.0809 48.6494C55.3331 46.3079 56 43.9854 56 37.5805V18.4195C56 12.0146 55.3331 9.69208 54.0809 7.35056C52.8286 5.00904 50.991 3.1714 48.6495 1.91914C46.3079 0.666878 43.9854 0 37.5805 0ZM13.2212 28.4946C13.5552 28.8198 13.9858 28.9824 14.5132 28.9824C15.0405 28.9824 15.4668 28.8198 15.792 28.4946C16.1172 28.1606 16.2798 27.73 16.2798 27.2026V26.1743C16.2798 25.0142 16.6401 24.1001 17.3608 23.4321C18.0903 22.7554 19.0791 22.417 20.3271 22.417H26.5103V25.3701C26.5103 25.7744 26.6245 26.0952 26.853 26.3325C27.0903 26.561 27.4111 26.6753 27.8154 26.6753C28 26.6753 28.1714 26.6445 28.3296 26.583C28.4878 26.5215 28.6284 26.438 28.7515 26.3325L34.2622 21.6919C34.5698 21.437 34.7236 21.1294 34.7236 20.769C34.7236 20.3999 34.5698 20.0879 34.2622 19.833L28.7515 15.1924C28.6284 15.0869 28.4878 15.0034 28.3296 14.9419C28.1714 14.8804 28 14.8496 27.8154 14.8496C27.4111 14.8496 27.0903 14.9683 26.853 15.2056C26.6245 15.4341 26.5103 15.7549 26.5103 16.168V18.9629H20.5249C18.9165 18.9629 17.5322 19.2354 16.3721 19.7803C15.2119 20.3164 14.3154 21.0898 13.6826 22.1006C13.0498 23.1113 12.7334 24.3198 12.7334 25.7261V27.2026C12.7334 27.73 12.896 28.1606 13.2212 28.4946ZM42.7393 27.6509C42.4141 27.3257 41.9878 27.1631 41.4604 27.1631C40.9331 27.1631 40.5068 27.3257 40.1816 27.6509C39.8564 27.9761 39.6938 28.4067 39.6938 28.9429V29.9712C39.6938 31.1313 39.3291 32.0454 38.5996 32.7134C37.8789 33.3813 36.8945 33.7153 35.6465 33.7153H25.6138V30.7754C25.6138 30.3623 25.4995 30.0415 25.271 29.813C25.0425 29.5757 24.7261 29.457 24.3218 29.457C24.1284 29.457 23.9526 29.4878 23.7944 29.5493C23.6362 29.6108 23.4956 29.6943 23.3726 29.7998L17.8618 34.4404C17.563 34.7041 17.4136 35.0161 17.4136 35.3765C17.4136 35.7368 17.563 36.0444 17.8618 36.2993L23.3726 40.9399C23.4956 41.0454 23.6362 41.1289 23.7944 41.1904C23.9526 41.252 24.1284 41.2827 24.3218 41.2827C24.7261 41.2827 25.0425 41.1641 25.271 40.9268C25.4995 40.6982 25.6138 40.3818 25.6138 39.9775V37.1826H35.4487C37.0483 37.1826 38.4282 36.9146 39.5884 36.3784C40.7573 35.8335 41.6582 35.0557 42.291 34.0449C42.9238 33.0254 43.2402 31.8169 43.2402 30.4194V28.9429C43.2402 28.4067 43.0732 27.9761 42.7393 27.6509ZM40.2871 24.1968C40.6035 24.4868 41.021 24.6318 41.5396 24.6318C42.0669 24.6318 42.4844 24.4868 42.792 24.1968C43.1084 23.9067 43.2666 23.4629 43.2666 22.8652V16.603C43.2666 16.0142 43.0776 15.5396 42.6997 15.1792C42.3306 14.8188 41.856 14.6387 41.2759 14.6387C40.8188 14.6387 40.4189 14.709 40.0762 14.8496C39.7422 14.9902 39.3994 15.188 39.0479 15.4429L37.2812 16.7612C37.0176 16.9458 36.8374 17.1216 36.7407 17.2886C36.644 17.4556 36.5957 17.6533 36.5957 17.8818C36.5957 18.207 36.7012 18.4707 36.9121 18.6729C37.123 18.875 37.3911 18.9761 37.7163 18.9761C38.0151 18.9761 38.2832 18.8838 38.5205 18.6992L39.707 17.7632H39.8125V22.8652C39.8125 23.4629 39.9707 23.9067 40.2871 24.1968Z",
		fill: "white"
	})
})), fm = s((e, t) => /* @__PURE__ */ x("svg", {
	width: 56,
	height: 56,
	viewBox: "0 0 56 56",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: /* @__PURE__ */ x("path", {
		d: "M10.624 36.3125C10.624 35.75 10.8218 35.2754 11.2173 34.8887C11.6216 34.4932 12.1094 34.2954 12.6807 34.2954H15.4756C16.3896 34.2954 17.1455 34.1372 17.7432 33.8208C18.3496 33.5044 18.9341 32.9946 19.4966 32.2915L27.3936 22.3379C28.3955 21.0811 29.4282 20.2285 30.4917 19.7803C31.5552 19.332 32.79 19.1079 34.1963 19.1079H36.4243V16.1548C36.4243 15.6714 36.5605 15.2935 36.833 15.021C37.1055 14.7397 37.479 14.5991 37.9536 14.5991C38.1821 14.5991 38.3843 14.6343 38.5601 14.7046C38.7446 14.7749 38.9072 14.8672 39.0479 14.9814L44.8223 19.8857C45.1826 20.1846 45.3628 20.5493 45.3628 20.98C45.3628 21.4106 45.1826 21.7754 44.8223 22.0742L39.0479 26.9917C38.9072 27.106 38.7446 27.2026 38.5601 27.2817C38.3843 27.3521 38.1821 27.3872 37.9536 27.3872C37.479 27.3872 37.1055 27.2466 36.833 26.9653C36.5605 26.6841 36.4243 26.3018 36.4243 25.8184V23.1421H33.9194C33.3218 23.1421 32.8076 23.2036 32.377 23.3267C31.9551 23.4497 31.564 23.6562 31.2036 23.9463C30.8521 24.2275 30.4829 24.6143 30.0962 25.1064L21.606 35.7061C20.8853 36.6113 20.0986 37.2749 19.2461 37.6968C18.3936 38.1099 17.3389 38.3164 16.082 38.3164H12.6807C12.1094 38.3164 11.6216 38.123 11.2173 37.7363C10.8218 37.3496 10.624 36.875 10.624 36.3125ZM10.624 21.125C10.624 20.5625 10.8218 20.0879 11.2173 19.7012C11.6216 19.3057 12.1094 19.1079 12.6807 19.1079H15.7261C16.9829 19.1079 18.0947 19.3188 19.0615 19.7407C20.0371 20.1538 20.8853 20.8174 21.606 21.7314L30.0435 32.2783C30.5972 32.9727 31.1992 33.4824 31.8496 33.8076C32.5 34.1328 33.291 34.2954 34.2227 34.2954H36.4243V31.5664C36.4243 31.083 36.5605 30.7007 36.833 30.4194C37.1055 30.1382 37.479 29.9976 37.9536 29.9976C38.1821 29.9976 38.3843 30.0371 38.5601 30.1162C38.7446 30.1865 38.9072 30.2832 39.0479 30.4062L44.8223 35.2974C45.1826 35.5962 45.3628 35.9609 45.3628 36.3916C45.3628 36.8223 45.1826 37.187 44.8223 37.4858L39.0479 42.3901C38.9072 42.5132 38.7446 42.6099 38.5601 42.6802C38.3843 42.7593 38.1821 42.7988 37.9536 42.7988C37.479 42.7988 37.1055 42.6582 36.833 42.377C36.5605 42.0957 36.4243 41.7134 36.4243 41.23V38.3164H34.1699C32.9043 38.3164 31.7222 38.1011 30.6235 37.6704C29.5249 37.231 28.5625 36.4927 27.7363 35.4556L19.4966 25.146C18.9341 24.4429 18.2925 23.9331 17.5718 23.6167C16.8599 23.3003 16.0381 23.1421 15.1064 23.1421H12.6807C12.1094 23.1421 11.6216 22.9443 11.2173 22.5488C10.8218 22.1533 10.624 21.6787 10.624 21.125Z",
		fill: "white"
	})
})), pm = s((e, t) => /* @__PURE__ */ x("svg", {
	width: 56,
	height: 56,
	viewBox: "0 0 56 56",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	ref: t,
	...e,
	children: /* @__PURE__ */ x("path", {
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M37.5805 0H18.4195C12.0146 0 9.69208 0.666878 7.35056 1.91914C5.00904 3.1714 3.1714 5.00904 1.91914 7.35056C0.666879 9.69208 0 12.0146 0 18.4195V37.5805C0 43.9854 0.666879 46.3079 1.91914 48.6494C3.1714 50.991 5.00904 52.8286 7.35056 54.0809C9.69208 55.3331 12.0146 56 18.4195 56H37.5805C43.9854 56 46.3079 55.3331 48.6495 54.0809C50.991 52.8286 52.8286 50.991 54.0809 48.6494C55.3331 46.3079 56 43.9854 56 37.5805V18.4195C56 12.0146 55.3331 9.69208 54.0809 7.35056C52.8286 5.00904 50.991 3.1714 48.6495 1.91914C46.3079 0.666878 43.9854 0 37.5805 0ZM11.2173 34.8887C10.8218 35.2754 10.624 35.75 10.624 36.3125C10.624 36.875 10.8218 37.3496 11.2173 37.7363C11.6216 38.123 12.1094 38.3164 12.6807 38.3164H16.082C17.3389 38.3164 18.3936 38.1099 19.2461 37.6968C20.0986 37.2749 20.8853 36.6113 21.606 35.7061L24.7747 31.75L27.7363 35.4556C28.5625 36.4927 29.5249 37.231 30.6235 37.6704C31.7222 38.1011 32.9043 38.3164 34.1699 38.3164H36.4243V41.23C36.4243 41.7134 36.5605 42.0957 36.833 42.377C37.1055 42.6582 37.479 42.7988 37.9536 42.7988C38.1821 42.7988 38.3843 42.7593 38.5601 42.6802C38.7446 42.6099 38.9072 42.5132 39.0479 42.3901L44.8223 37.4858C45.1826 37.187 45.3628 36.8223 45.3628 36.3916C45.3628 35.9609 45.1826 35.5962 44.8223 35.2974L39.0479 30.4062C38.9072 30.2832 38.7446 30.1865 38.5601 30.1162C38.3843 30.0371 38.1821 29.9976 37.9536 29.9976C37.479 29.9976 37.1055 30.1382 36.833 30.4194C36.5605 30.7007 36.4243 31.083 36.4243 31.5664V34.2954H34.2227C33.291 34.2954 32.5 34.1328 31.8496 33.8076C31.1992 33.4824 30.5972 32.9727 30.0435 32.2783L27.1993 28.7231L30.0962 25.1064C30.4829 24.6143 30.8521 24.2275 31.2036 23.9463C31.564 23.6562 31.9551 23.4497 32.377 23.3267C32.8076 23.2036 33.3218 23.1421 33.9194 23.1421H36.4243V25.8184C36.4243 26.3018 36.5605 26.6841 36.833 26.9653C37.1055 27.2466 37.479 27.3872 37.9536 27.3872C38.1821 27.3872 38.3843 27.3521 38.5601 27.2817C38.7446 27.2026 38.9072 27.106 39.0479 26.9917L44.8223 22.0742C45.1826 21.7754 45.3628 21.4106 45.3628 20.98C45.3628 20.5493 45.1826 20.1846 44.8223 19.8857L39.0479 14.9814C38.9072 14.8672 38.7446 14.7749 38.5601 14.7046C38.3843 14.6343 38.1821 14.5991 37.9536 14.5991C37.479 14.5991 37.1055 14.7397 36.833 15.021C36.5605 15.2935 36.4243 15.6714 36.4243 16.1548V19.1079H34.1963C32.79 19.1079 31.5552 19.332 30.4917 19.7803C29.4282 20.2285 28.3955 21.0811 27.3936 22.3379L24.7534 25.6657L21.606 21.7314C20.8853 20.8174 20.0371 20.1538 19.0615 19.7407C18.0947 19.3188 16.9829 19.1079 15.7261 19.1079H12.6807C12.1094 19.1079 11.6216 19.3057 11.2173 19.7012C10.8218 20.0879 10.624 20.5625 10.624 21.125C10.624 21.6787 10.8218 22.1533 11.2173 22.5488C11.6216 22.9443 12.1094 23.1421 12.6807 23.1421H15.1064C16.0381 23.1421 16.8599 23.3003 17.5718 23.6167C18.2925 23.9331 18.9341 24.4429 19.4966 25.146L22.3415 28.7056L19.4966 32.2915C18.9341 32.9946 18.3496 33.5044 17.7432 33.8208C17.1455 34.1372 16.3896 34.2954 15.4756 34.2954H12.6807C12.1094 34.2954 11.6216 34.4932 11.2173 34.8887Z",
		fill: "white"
	})
})), Z = (e) => ({}), mm = A(Z(() => {})), hm = A(Z(() => {})), gm = A(Z(() => {})), _m = A(Z(() => {})), vm = A(Z(() => {})), ym = A(Z(() => {})), bm = A(Z(() => {})), xm = A(Z((e) => {})), Sm = A(Z((e, t) => {})), Cm = A(Z((e, t) => {})), wm = A(Z((e) => {})), Tm = A(Z(() => {})), Em = A(Z(() => {})), Dm = 0;
function Om(e, t) {
	let n = `atom${++Dm}`, r = { toString() {
		return n;
	} };
	return typeof e == "function" ? r.read = e : (r.init = e, r.read = km, r.write = Am), t && (r.write = t), r;
}
function km(e) {
	return e(this);
}
function Am(e, t, n) {
	return t(this, typeof n == "function" ? n(e(this)) : n);
}
//#endregion
//#region ../../node_modules/.pnpm/jotai@2.18.1_@babel+core@7._cf5525b3e614d28d2105ca8127281971/node_modules/jotai/esm/vanilla/utils.mjs
var jm = /* @__PURE__ */ Symbol(""), Mm = (e) => typeof e?.then == "function";
function Nm(e = () => {
	try {
		return window.localStorage;
	} catch {
		return;
	}
}, t) {
	let n, r, i = {
		getItem: (i, a) => {
			let o = (e) => {
				if (e ||= "", n !== e) {
					try {
						r = JSON.parse(e, t?.reviver);
					} catch {
						return a;
					}
					n = e;
				}
				return r;
			}, s = e()?.getItem(i) ?? null;
			return Mm(s) ? s.then(o) : o(s);
		},
		setItem: (n, r) => e()?.setItem(n, JSON.stringify(r, t?.replacer)),
		removeItem: (t) => e()?.removeItem(t)
	}, a = (e) => (t, n, r) => e(t, (e) => {
		let t;
		try {
			t = JSON.parse(e || "");
		} catch {
			t = r;
		}
		n(t);
	}), o;
	try {
		o = e()?.subscribe;
	} catch {}
	return !o && typeof window < "u" && typeof window.addEventListener == "function" && window.Storage && (o = (t, n) => {
		if (!(e() instanceof window.Storage)) return () => {};
		let r = (r) => {
			r.storageArea === e() && r.key === t && n(r.newValue);
		};
		return window.addEventListener("storage", r), () => {
			window.removeEventListener("storage", r);
		};
	}), o && (i.subscribe = a(o)), i;
}
var Pm = Nm();
function Q(e, t, n = Pm, r) {
	let i = Om(r?.getOnInit ? n.getItem(e, t) : t);
	return i.onMount = (r) => (r(n.getItem(e, t)), n.subscribe?.call(n, e, r, t)), Om((e) => e(i), (r, a, o) => {
		let s = typeof o == "function" ? o(r(i)) : o;
		return s === jm ? (a(i, t), n.removeItem(e)) : Mm(s) ? s.then((t) => (a(i, t), n.setItem(e, t))) : (a(i, s), n.setItem(e, s));
	});
}
//#endregion
//#region src/states/configAtoms.ts
var Fm = /* @__PURE__ */ function(e) {
	return e.Controls = "controls", e.FFT = "fft", e.None = "none", e;
}({}), Im = /* @__PURE__ */ function(e) {
	return e.Auto = "auto", e.ForceNormal = "force-normal", e.ForceImmersive = "force-immersive", e;
}({}), Lm = /* @__PURE__ */ function(e) {
	return e.Dom = "dom", e.DomSlim = "dom-slim", e.Canvas = "canvas", e;
}({}), Rm = {
	Tiny: "tiny",
	ExtraSmall: "extra-small",
	Small: "small",
	Medium: "medium",
	Large: "large",
	ExtraLarge: "extra-large",
	Huge: "huge"
}, zm = A((() => {
	switch (localStorage.getItem("amll-react-full.lyricPlayerImplementation")) {
		case Lm.DomSlim: return { lyricPlayer: E };
		case Lm.Canvas: return { lyricPlayer: w };
		default: return { lyricPlayer: T };
	}
})()), Bm = Q("amll-react-full.enableLyricLineBlurEffect", !0), Vm = Q("amll-react-full.enableLyricLineScaleEffect", !0), Hm = Q("amll-react-full.enableLyricLineSpringAnimation", !0), Um = Q("amll-react-full.enableLyricTranslationLine", !0), Wm = Q("amll-react-full.enableLyricRomanLine", !0), Gm = Q("amll-react-full.enableLyricSwapTransRomanLine", !1), Km = Q("amll-react-full.lyricWordFadeWidth", .5), qm = Q("amll-react-full.lyricFontFamily", ""), Jm = Q("amll-react-full.lyricFontWeight", 0), Ym = Q("amll-react-full.lyricLetterSpacing", "normal"), Xm = Q("amll-react-full.globalLyricTimelineOffset", 0), Zm = Q("amll-react-full.lyricSizePreset", Rm.Medium), Qm = Q("amll-react-full.playerControlsType", Fm.Controls), $m = Q("amll-react-full.showMusicName", !0), eh = Q("amll-react-full.verticalCoverLayout", Im.Auto), th = Q("amll-react-full.showMusicArtists", !0), nh = Q("amll-react-full.showMusicAlbum", !1), rh = Q("amll-react-full.showVolumeControl", !0), ih = Q("amll-react-full.showBottomControl", !0), ah = A((() => {
	switch (localStorage.getItem("amll-react-full.lyricBackgroundRenderer")) {
		case "pixi": return { renderer: k };
		case "css-bg": return { renderer: "css-bg" };
		default: return { renderer: O };
	}
})()), oh = Q("amll-player.cssBackgroundProperty", "#111111"), sh = Q("amll-react-full.lyricBackgroundFPS", 60), ch = Q("amll-react-full.lyricBackgroundRenderScale", 1), lh = Q("amll-react-full.lyricBackgroundStaticMode", !1), uh = A(!1), dh = Q("amll-react-full.hideLyricView", !1), fh = Q("amll-react-full.showRemainingTime", !0), ph = Q("amll-react-full.fftDataRange", [80, 2e3]), mh = /* @__PURE__ */ function(e) {
	return e.Off = "off", e.One = "one", e.All = "all", e;
}({}), hh = Q("amll-react-full.shuffle_active", !1), gh = Q("amll-react-full.repeat_mode", mh.Off), _h = A(null, (e) => {
	e(Tm).onEmit?.();
}), vh = A(null, (e) => {
	e(Em).onEmit?.();
}), yh = /* @__PURE__ */ function(e) {
	return e.None = "none", e.Standard = "standard", e.Lossless = "lossless", e.HiResLossless = "hi-res-lossless", e.DolbyAtmos = "dolby-atmos", e;
}({}), bh = Q("amll-react-full.current_id", null, void 0, { getOnInit: !0 }), xh = A("未知歌曲"), Sh = A([{
	name: "未知创作者",
	id: "unknown"
}]), Ch = A("未知专辑"), wh = A(""), Th = A(!1), Eh = A(0), Dh = A(!1), Oh = Q("amll-react-full.position", 0, void 0, { getOnInit: !0 }), kh = Q("amll-react-full.musicVolumeAtom", .5, void 0, { getOnInit: !0 }), Ah = A([]), jh = A({
	type: yh.None,
	codec: "unknown",
	channels: 2,
	sampleRate: 44100,
	sampleFormat: "s16"
}), Mh = A(null), Nh = A([]), Ph = A(1), Fh = A(0), $ = {
	autoLyricLayout: "RafNea_autoLyricLayout",
	bigControls: "RafNea_bigControls",
	bigMusicInfo: "RafNea_bigMusicInfo",
	bigVolumeControl: "RafNea_bigVolumeControl",
	controls: "RafNea_controls",
	hideLyric: "RafNea_hideLyric",
	horizontalControls: "RafNea_horizontalControls",
	progressBarLabels: "RafNea_progressBarLabels",
	qualityTag: "RafNea_qualityTag",
	smallMusicInfo: "RafNea_smallMusicInfo",
	songMediaButton: "RafNea_songMediaButton",
	songMediaPlayButton: "RafNea_songMediaPlayButton"
}, Ih = ({ className: e, style: t }) => {
	let n = j(xh), r = j(Sh), i = j(Ch), a = j(gm).onEmit, o = j($m), s = j(th), c = j(nh), l = j(qm), u = j(Jm), d = j(Ym);
	return /* @__PURE__ */ x(Yf, {
		className: e,
		style: _(() => ({
			...t,
			fontFamily: l || void 0,
			fontWeight: u || void 0,
			letterSpacing: d || void 0
		}), [
			t,
			l,
			u,
			d
		]),
		name: o ? n : void 0,
		artists: s ? r.map((e) => e.name) : void 0,
		album: c ? i : void 0,
		onMenuButtonClicked: a
	});
}, Lh = ({ showOtherButtons: e }) => {
	let t = j(Dh), n = j(ym).onEmit, r = j(bm).onEmit, i = j(_m).onEmit, a = j(hh), o = j(gh), s = ie(_h), c = ie(vh), l = {
		width: "1.3em",
		height: "1.3em"
	};
	return /* @__PURE__ */ S(b, { children: [
		e && /* @__PURE__ */ x(Hf, {
			className: $.songMediaButton,
			onClick: s,
			children: x(a ? pm : fm, {
				color: "#ffffffff",
				style: l
			})
		}),
		/* @__PURE__ */ x(Hf, {
			className: $.songMediaButton,
			onClick: n,
			children: /* @__PURE__ */ x(cm, { color: "#FFFFFF" })
		}),
		/* @__PURE__ */ x(Hf, {
			className: $.songMediaPlayButton,
			onClick: i,
			children: x(t ? om : sm, { color: "#FFFFFF" })
		}),
		/* @__PURE__ */ x(Hf, {
			className: $.songMediaButton,
			onClick: r,
			children: /* @__PURE__ */ x(am, { color: "#FFFFFF" })
		}),
		e && /* @__PURE__ */ x(Hf, {
			className: $.songMediaButton,
			onClick: c,
			children: (() => {
				switch (o) {
					case mh.One: return /* @__PURE__ */ x(dm, {
						color: "#ffffffff",
						style: l
					});
					case mh.All: return /* @__PURE__ */ x(um, {
						color: "#ffffffff",
						style: l
					});
					default: return /* @__PURE__ */ x(lm, {
						color: "#ffffffff",
						style: l
					});
				}
			})()
		})
	] });
}, Rh = ({ isRemaining: e }) => {
	let t = j(Oh), n = j(Eh);
	return /* @__PURE__ */ x(b, { children: _(() => Lp(e ? (t - n) / 1e3 : t / 1e3), [
		t,
		n,
		e
	]) });
}, zh = () => {
	let e = j(Eh);
	return /* @__PURE__ */ x(b, { children: _(() => Lp(e / 1e3), [e]) });
}, Bh = A(null), Vh = t.memo(() => {
	let e = j(Eh), t = j(Oh), n = j(Dh), r = j(Mh), i = j(hm).onEmit, a = j(xm).onEmit, o = ie(Bh), [s, c] = re(fh), l = j(qm), u = j(Jm), d = j(Ym), f = _(() => ({
		fontFamily: l || void 0,
		fontWeight: u || void 0,
		letterSpacing: d || void 0
	}), [
		l,
		u,
		d
	]);
	return /* @__PURE__ */ S("div", { children: [/* @__PURE__ */ x(yf, {
		isPlaying: n,
		min: 0,
		max: e,
		value: t,
		onChange: (e) => {
			a?.(e), o({
				time: e,
				timestamp: Date.now()
			});
		}
	}), /* @__PURE__ */ S("div", {
		className: $.progressBarLabels,
		children: [
			/* @__PURE__ */ x("div", {
				style: f,
				children: /* @__PURE__ */ x(Rh, {})
			}),
			/* @__PURE__ */ x("div", { children: /* @__PURE__ */ x(xl, {
				mode: "popLayout",
				children: r && /* @__PURE__ */ x(hf, {
					className: $.qualityTag,
					isDolbyAtmos: r.isDolbyAtmos,
					tagText: r.tagText,
					tagIcon: r.tagIcon,
					onClick: i
				})
			}) }),
			/* @__PURE__ */ x("div", {
				style: {
					...f,
					cursor: "pointer",
					userSelect: "none"
				},
				onClick: () => c(!s),
				children: s ? /* @__PURE__ */ x(Rh, { isRemaining: !0 }) : /* @__PURE__ */ x(zh, {})
			})
		]
	})] });
}), Hh = ({ alignPosition: e, alignAnchor: t }) => {
	let n = v(null), r = j(Dh), i = j(Ah), a = j(uh), o = j(Oh), s = j(Fh), c = j(qm), l = j(Jm), u = j(Ym), d = j(zm).lyricPlayer, p = j(Bm), m = j(Vm), h = j(Hm), g = j(Km), y = j(Um), b = j(Wm), S = j(Gm), C = j(Sm).onEmit, w = j(Cm).onEmit, T = j(Bh), E = _(() => {
		let e = cp(i);
		if (!y) for (let t of e) t.translatedLyric = "";
		if (!b) for (let t of e) t.romanLyric = "";
		if (S) for (let t of e) [t.translatedLyric, t.romanLyric] = [t.romanLyric, t.translatedLyric];
		return e;
	}, [
		i,
		y,
		b,
		S
	]);
	return f(() => {
		T && n.current?.lyricPlayer?.setCurrentTime(T.time, !0);
	}, [T]), /* @__PURE__ */ x(Zf, {
		style: {
			width: "100%",
			height: "100%",
			fontFamily: c || void 0,
			fontWeight: l || void 0,
			letterSpacing: u || void 0
		},
		ref: n,
		playing: r,
		disabled: !a,
		alignPosition: e,
		alignAnchor: t,
		currentTime: o - s,
		lyricLines: E,
		enableBlur: p,
		enableScale: m,
		enableSpring: h,
		wordFadeWidth: g,
		lyricPlayer: d,
		onLyricLineClick: (e) => {
			let t = e.line.getLine().startTime;
			n.current?.lyricPlayer?.setCurrentTime(t, !0), C?.(e, n.current);
		},
		onLyricLineContextMenu: (e) => w?.(e, n.current)
	});
}, Uh = ({ style: e, className: t }) => {
	let n = j(kh), r = j(wm).onEmit;
	return j(rh) ? /* @__PURE__ */ x(im, {
		value: n,
		min: 0,
		max: 1,
		style: e,
		className: t,
		onChange: r
	}) : null;
}, Wh = ({ className: e, showOtherButtons: t, ...n }) => {
	let r = j(Qm), i = j(Nh);
	return /* @__PURE__ */ S("div", {
		className: (0, J.default)($.controls, e),
		...n,
		children: [r === Fm.Controls && /* @__PURE__ */ x(Lh, { showOtherButtons: t }), r === Fm.FFT && /* @__PURE__ */ x(_e, {
			style: {
				width: "100%",
				height: "8vh"
			},
			fftData: i
		})]
	});
}, Gh = ({ className: e, ...t }) => {
	let [n, r] = re(dh), i = j(wh), a = j(Th), o = j(Dh), s = j(Ph), c = j(uh), l = j(sh), u = j(eh), d = j(lh), p = j(ch), m = j(mm).onEmit, [h, _] = y(!1), [C, w] = y(.25), [T, E] = y("top"), D = v(null), [O, k] = y(null), ne = j(ah), A = j(ih), [ie, ae] = y(!1), [oe, se] = y(!1), ce = j(oh);
	g(() => {
		if (!h && D.current && O) {
			let e = new ResizeObserver(() => {
				if (!(D.current && O)) return;
				let e = D.current.getBoundingClientRect(), t = O.getBoundingClientRect();
				w((e.top + e.height / 2 - t.top) / t.height);
			});
			return e.observe(D.current), e.observe(O), E("center"), () => e.disconnect();
		}
		h && (w(.1), E("top"));
	}, [h, O]), f(() => {
		if (c) {
			se(!1);
			let e = setTimeout(() => {
				se(!0);
			}, 5e3);
			return () => clearTimeout(e);
		}
	}, [c]), f(() => {
		let e = document.getElementById("system-titlebar");
		if (!e) return;
		let t = () => ae(!0), n = () => ae(!1);
		return c ? (e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", n)) : ae(!1), () => {
			e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", n);
		};
	}, [c]), f(() => {
		let e = document.getElementById("system-titlebar-buttons");
		if (!e) return;
		e.style.transition = "opacity 0.3s ease-in-out, pointer-events 0.3s";
		let t = !c || ie || !oe;
		e.style.opacity = t ? "1" : "0", e.style.pointerEvents = t ? "auto" : "none";
	}, [
		c,
		ie,
		oe
	]);
	let le = n && (u === Im.Auto ? a && h : u === Im.ForceImmersive);
	return /* @__PURE__ */ x(Dl, { children: /* @__PURE__ */ x(Ip, {
		onElementMounted: k,
		className: (0, J.default)($.autoLyricLayout, e),
		onLayoutChange: _,
		verticalImmerseCover: le,
		coverSlot: /* @__PURE__ */ x(Bf, {
			coverUrl: i,
			coverIsVideo: a,
			ref: D,
			musicPaused: !o && !a && le
		}),
		thumbSlot: /* @__PURE__ */ x(xf, { onClick: m }),
		smallControlsSlot: /* @__PURE__ */ x(Ih, { className: (0, J.default)($.smallMusicInfo, n && $.hideLyric) }),
		backgroundSlot: typeof ne.renderer == "string" && ne.renderer === "css-bg" ? /* @__PURE__ */ x("div", { style: {
			zIndex: -1,
			width: "100%",
			height: "100%",
			minWidth: "0",
			minHeight: "0",
			overflow: "hidden",
			background: ce
		} }) : /* @__PURE__ */ x(Xf, {
			album: i,
			albumIsVideo: a,
			lowFreqVolume: s,
			renderScale: p,
			fps: l,
			renderer: typeof ne.renderer == "string" ? ne.renderer === "pixi" ? te : ee : ne.renderer,
			staticMode: d || !c,
			style: { zIndex: -1 }
		}),
		bigControlsSlot: /* @__PURE__ */ S(b, { children: [
			/* @__PURE__ */ x(Ih, { className: (0, J.default)($.bigMusicInfo, n && $.hideLyric) }),
			/* @__PURE__ */ x(Vh, {}),
			/* @__PURE__ */ x(Wh, { className: $.bigControls }),
			A && /* @__PURE__ */ S("div", {
				style: {
					display: "flex",
					justifyContent: "space-evenly"
				},
				children: [
					/* @__PURE__ */ x(Qp, {
						type: X.Lyrics,
						checked: !n,
						onClick: () => r(!n)
					}),
					/* @__PURE__ */ x(Qp, { type: X.AirPlay }),
					/* @__PURE__ */ x(Qp, { type: X.Playlist })
				]
			}),
			/* @__PURE__ */ x(Uh, { className: $.bigVolumeControl })
		] }),
		controlsSlot: /* @__PURE__ */ S(b, { children: [
			/* @__PURE__ */ x(Ih, { className: $.horizontalControls }),
			/* @__PURE__ */ x(Vh, {}),
			/* @__PURE__ */ x(Wh, {
				className: $.controls,
				showOtherButtons: !0
			}),
			/* @__PURE__ */ x(Uh, {})
		] }),
		horizontalBottomControls: A && /* @__PURE__ */ S(b, { children: [
			/* @__PURE__ */ x(Qp, { type: X.Playlist }),
			/* @__PURE__ */ x(Qp, {
				type: X.Lyrics,
				checked: !n,
				onClick: () => r(!n)
			}),
			/* @__PURE__ */ x("div", { style: { flex: "1" } }),
			/* @__PURE__ */ x(Qp, { type: X.AirPlay })
		] }),
		lyricSlot: /* @__PURE__ */ x(Hh, {
			alignPosition: C,
			alignAnchor: T
		}),
		hideLyric: n,
		...t
	}) });
};
//#endregion
export { _e as AudioFFTVisualizer, hf as AudioQualityTag, yh as AudioQualityType, Ip as AutoLyricLayout, yf as BouncingSlider, xf as ControlThumb, Bf as Cover, vp as HorizontalLayout, Lm as LyricPlayerImplementation, Rm as LyricSizePreset, Hf as MediaButton, Gf as MenuButton, Yf as MusicInfo, Fm as PlayerControlsType, Gh as PrebuiltLyricPlayer, Qp as PrebuiltToggleIconButton, X as PrebuiltToggleIconButtonType, mh as RepeatMode, qf as TextMarquee, Xp as ToggleIconButton, Im as VerticalCoverLayout, Fp as VerticalLayout, im as VolumeControl, oh as cssBackgroundPropertyAtom, vh as cycleRepeatModeActionAtom, Bm as enableLyricLineBlurEffectAtom, Vm as enableLyricLineScaleEffectAtom, Hm as enableLyricLineSpringAnimationAtom, Wm as enableLyricRomanLineAtom, Gm as enableLyricSwapTransRomanLineAtom, Um as enableLyricTranslationLineAtom, Nh as fftDataAtom, ph as fftDataRangeAtom, Xm as globalLyricTimelineOffsetAtom, dh as hideLyricViewAtom, uh as isLyricPageOpenedAtom, hh as isShuffleActiveAtom, Ph as lowFreqVolumeAtom, sh as lyricBackgroundFPSAtom, ch as lyricBackgroundRenderScaleAtom, ah as lyricBackgroundRendererAtom, lh as lyricBackgroundStaticModeAtom, qm as lyricFontFamilyAtom, Jm as lyricFontWeightAtom, Ym as lyricLetterSpacingAtom, zm as lyricPlayerImplementationAtom, Zm as lyricSizePresetAtom, Km as lyricWordFadeWidthAtom, Ch as musicAlbumNameAtom, Sh as musicArtistsAtom, wh as musicCoverAtom, Th as musicCoverIsVideoAtom, Eh as musicDurationAtom, bh as musicIdAtom, Ah as musicLyricLinesAtom, Fh as musicLyricOffsetAtom, xh as musicNameAtom, Dh as musicPlayingAtom, Oh as musicPlayingPositionAtom, jh as musicQualityAtom, Mh as musicQualityTagAtom, kh as musicVolumeAtom, wm as onChangeVolumeAtom, hm as onClickAudioQualityTagAtom, mm as onClickControlThumbAtom, Em as onCycleRepeatModeAtom, Sm as onLyricLineClickAtom, Cm as onLyricLineContextMenuAtom, vm as onPauseAtom, _m as onPlayOrResumeAtom, bm as onRequestNextSongAtom, gm as onRequestOpenMenuAtom, ym as onRequestPrevSongAtom, xm as onSeekPositionAtom, Tm as onToggleShuffleAtom, Qm as playerControlsTypeAtom, gh as repeatModeAtom, ih as showBottomControlAtom, nh as showMusicAlbumAtom, th as showMusicArtistsAtom, $m as showMusicNameAtom, fh as showRemainingTimeAtom, rh as showVolumeControlAtom, Lp as toDuration, _h as toggleShuffleActionAtom, eh as verticalCoverLayoutAtom };

//# sourceMappingURL=amll-react-framework.js.map