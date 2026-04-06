import { Application as e } from "@pixi/app";
import { Texture as t } from "@pixi/core";
import { Container as n } from "@pixi/display";
import { BlurFilter as r } from "@pixi/filter-blur";
import { BulgePinchFilter as i } from "@pixi/filter-bulge-pinch";
import { ColorMatrixFilter as a } from "@pixi/filter-color-matrix";
import { Sprite as o } from "@pixi/sprite";
//#region src/bg-render/base.ts
var s = class {}, c = class extends s {
	observer;
	flowSpeed = 1;
	currerntRenderScale = .75;
	constructor(e) {
		super(), this.canvas = e, this.observer = new ResizeObserver(() => {
			let t = Math.max(1, e.clientWidth * window.devicePixelRatio * this.currerntRenderScale), n = Math.max(1, e.clientHeight * window.devicePixelRatio * this.currerntRenderScale);
			this.onResize(t, n);
		}), this.observer.observe(e);
	}
	setRenderScale(e) {
		this.currerntRenderScale = e, this.onResize(this.canvas.clientWidth * window.devicePixelRatio * this.currerntRenderScale, this.canvas.clientHeight * window.devicePixelRatio * this.currerntRenderScale);
	}
	onResize(e, t) {
		this.canvas.width = e, this.canvas.height = t;
	}
	setFlowSpeed(e) {
		this.flowSpeed = e;
	}
	dispose() {
		this.observer.disconnect(), this.canvas.remove();
	}
	getElement() {
		return this.canvas;
	}
};
Math.PI / 180, 180 / Math.PI;
//#endregion
//#region ../../node_modules/.pnpm/gl-matrix@4.0.0-beta.2/node_modules/gl-matrix/dist/esm/mat4.js
var l = new Float32Array([
	1,
	0,
	0,
	0,
	0,
	1,
	0,
	0,
	0,
	0,
	1,
	0,
	0,
	0,
	0,
	1
]), u = class e extends Float32Array {
	static BYTE_LENGTH = 16 * Float32Array.BYTES_PER_ELEMENT;
	constructor(...e) {
		switch (e.length) {
			case 16:
				super(e);
				break;
			case 2:
				super(e[0], e[1], 16);
				break;
			case 1:
				let t = e[0];
				typeof t == "number" ? super([
					t,
					t,
					t,
					t,
					t,
					t,
					t,
					t,
					t,
					t,
					t,
					t,
					t,
					t,
					t,
					t
				]) : super(t, 0, 16);
				break;
			default:
				super(l);
				break;
		}
	}
	get str() {
		return e.str(this);
	}
	copy(e) {
		return this.set(e), this;
	}
	identity() {
		return this.set(l), this;
	}
	multiply(t) {
		return e.multiply(this, this, t);
	}
	mul(e) {
		return this;
	}
	transpose() {
		return e.transpose(this, this);
	}
	invert() {
		return e.invert(this, this);
	}
	translate(t) {
		return e.translate(this, this, t);
	}
	rotate(t, n) {
		return e.rotate(this, this, t, n);
	}
	scale(t) {
		return e.scale(this, this, t);
	}
	rotateX(t) {
		return e.rotateX(this, this, t);
	}
	rotateY(t) {
		return e.rotateY(this, this, t);
	}
	rotateZ(t) {
		return e.rotateZ(this, this, t);
	}
	perspectiveNO(t, n, r, i) {
		return e.perspectiveNO(this, t, n, r, i);
	}
	perspectiveZO(t, n, r, i) {
		return e.perspectiveZO(this, t, n, r, i);
	}
	orthoNO(t, n, r, i, a, o) {
		return e.orthoNO(this, t, n, r, i, a, o);
	}
	orthoZO(t, n, r, i, a, o) {
		return e.orthoZO(this, t, n, r, i, a, o);
	}
	static create() {
		return new e();
	}
	static clone(t) {
		return new e(t);
	}
	static copy(e, t) {
		return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
	}
	static fromValues(...t) {
		return new e(...t);
	}
	static set(e, ...t) {
		return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
	}
	static identity(e) {
		return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
	}
	static transpose(e, t) {
		if (e === t) {
			let n = t[1], r = t[2], i = t[3], a = t[6], o = t[7], s = t[11];
			e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = n, e[6] = t[9], e[7] = t[13], e[8] = r, e[9] = a, e[11] = t[14], e[12] = i, e[13] = o, e[14] = s;
		} else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
		return e;
	}
	static invert(e, t) {
		let n = t[0], r = t[1], i = t[2], a = t[3], o = t[4], s = t[5], c = t[6], l = t[7], u = t[8], d = t[9], f = t[10], p = t[11], m = t[12], h = t[13], g = t[14], _ = t[15], v = n * s - r * o, y = n * c - i * o, b = n * l - a * o, x = r * c - i * s, S = r * l - a * s, C = i * l - a * c, w = u * h - d * m, T = u * g - f * m, E = u * _ - p * m, D = d * g - f * h, O = d * _ - p * h, k = f * _ - p * g, A = v * k - y * O + b * D + x * E - S * T + C * w;
		return A ? (A = 1 / A, e[0] = (s * k - c * O + l * D) * A, e[1] = (i * O - r * k - a * D) * A, e[2] = (h * C - g * S + _ * x) * A, e[3] = (f * S - d * C - p * x) * A, e[4] = (c * E - o * k - l * T) * A, e[5] = (n * k - i * E + a * T) * A, e[6] = (g * b - m * C - _ * y) * A, e[7] = (u * C - f * b + p * y) * A, e[8] = (o * O - s * E + l * w) * A, e[9] = (r * E - n * O - a * w) * A, e[10] = (m * S - h * b + _ * v) * A, e[11] = (d * b - u * S - p * v) * A, e[12] = (s * T - o * D - c * w) * A, e[13] = (n * D - r * T + i * w) * A, e[14] = (h * y - m * x - g * v) * A, e[15] = (u * x - d * y + f * v) * A, e) : null;
	}
	static adjoint(e, t) {
		let n = t[0], r = t[1], i = t[2], a = t[3], o = t[4], s = t[5], c = t[6], l = t[7], u = t[8], d = t[9], f = t[10], p = t[11], m = t[12], h = t[13], g = t[14], _ = t[15], v = n * s - r * o, y = n * c - i * o, b = n * l - a * o, x = r * c - i * s, S = r * l - a * s, C = i * l - a * c, w = u * h - d * m, T = u * g - f * m, E = u * _ - p * m, D = d * g - f * h, O = d * _ - p * h, k = f * _ - p * g;
		return e[0] = s * k - c * O + l * D, e[1] = i * O - r * k - a * D, e[2] = h * C - g * S + _ * x, e[3] = f * S - d * C - p * x, e[4] = c * E - o * k - l * T, e[5] = n * k - i * E + a * T, e[6] = g * b - m * C - _ * y, e[7] = u * C - f * b + p * y, e[8] = o * O - s * E + l * w, e[9] = r * E - n * O - a * w, e[10] = m * S - h * b + _ * v, e[11] = d * b - u * S - p * v, e[12] = s * T - o * D - c * w, e[13] = n * D - r * T + i * w, e[14] = h * y - m * x - g * v, e[15] = u * x - d * y + f * v, e;
	}
	static determinant(e) {
		let t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], o = e[5], s = e[6], c = e[7], l = e[8], u = e[9], d = e[10], f = e[11], p = e[12], m = e[13], h = e[14], g = e[15], _ = t * o - n * a, v = t * s - r * a, y = n * s - r * o, b = l * m - u * p, x = l * h - d * p, S = u * h - d * m, C = t * S - n * x + r * b, w = a * S - o * x + s * b, T = l * y - u * v + d * _, E = p * y - m * v + h * _;
		return c * C - i * w + g * T - f * E;
	}
	static multiply(e, t, n) {
		let r = t[0], i = t[1], a = t[2], o = t[3], s = t[4], c = t[5], l = t[6], u = t[7], d = t[8], f = t[9], p = t[10], m = t[11], h = t[12], g = t[13], _ = t[14], v = t[15], y = n[0], b = n[1], x = n[2], S = n[3];
		return e[0] = y * r + b * s + x * d + S * h, e[1] = y * i + b * c + x * f + S * g, e[2] = y * a + b * l + x * p + S * _, e[3] = y * o + b * u + x * m + S * v, y = n[4], b = n[5], x = n[6], S = n[7], e[4] = y * r + b * s + x * d + S * h, e[5] = y * i + b * c + x * f + S * g, e[6] = y * a + b * l + x * p + S * _, e[7] = y * o + b * u + x * m + S * v, y = n[8], b = n[9], x = n[10], S = n[11], e[8] = y * r + b * s + x * d + S * h, e[9] = y * i + b * c + x * f + S * g, e[10] = y * a + b * l + x * p + S * _, e[11] = y * o + b * u + x * m + S * v, y = n[12], b = n[13], x = n[14], S = n[15], e[12] = y * r + b * s + x * d + S * h, e[13] = y * i + b * c + x * f + S * g, e[14] = y * a + b * l + x * p + S * _, e[15] = y * o + b * u + x * m + S * v, e;
	}
	static mul(e, t, n) {
		return e;
	}
	static translate(e, t, n) {
		let r = n[0], i = n[1], a = n[2];
		if (t === e) e[12] = t[0] * r + t[4] * i + t[8] * a + t[12], e[13] = t[1] * r + t[5] * i + t[9] * a + t[13], e[14] = t[2] * r + t[6] * i + t[10] * a + t[14], e[15] = t[3] * r + t[7] * i + t[11] * a + t[15];
		else {
			let n = t[0], o = t[1], s = t[2], c = t[3], l = t[4], u = t[5], d = t[6], f = t[7], p = t[8], m = t[9], h = t[10], g = t[11];
			e[0] = n, e[1] = o, e[2] = s, e[3] = c, e[4] = l, e[5] = u, e[6] = d, e[7] = f, e[8] = p, e[9] = m, e[10] = h, e[11] = g, e[12] = n * r + l * i + p * a + t[12], e[13] = o * r + u * i + m * a + t[13], e[14] = s * r + d * i + h * a + t[14], e[15] = c * r + f * i + g * a + t[15];
		}
		return e;
	}
	static scale(e, t, n) {
		let r = n[0], i = n[1], a = n[2];
		return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e[4] = t[4] * i, e[5] = t[5] * i, e[6] = t[6] * i, e[7] = t[7] * i, e[8] = t[8] * a, e[9] = t[9] * a, e[10] = t[10] * a, e[11] = t[11] * a, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
	}
	static rotate(e, t, n, r) {
		let i = r[0], a = r[1], o = r[2], s = Math.sqrt(i * i + a * a + o * o);
		if (s < 1e-6) return null;
		s = 1 / s, i *= s, a *= s, o *= s;
		let c = Math.sin(n), l = Math.cos(n), u = 1 - l, d = t[0], f = t[1], p = t[2], m = t[3], h = t[4], g = t[5], _ = t[6], v = t[7], y = t[8], b = t[9], x = t[10], S = t[11], C = i * i * u + l, w = a * i * u + o * c, T = o * i * u - a * c, E = i * a * u - o * c, D = a * a * u + l, O = o * a * u + i * c, k = i * o * u + a * c, A = a * o * u - i * c, j = o * o * u + l;
		return e[0] = d * C + h * w + y * T, e[1] = f * C + g * w + b * T, e[2] = p * C + _ * w + x * T, e[3] = m * C + v * w + S * T, e[4] = d * E + h * D + y * O, e[5] = f * E + g * D + b * O, e[6] = p * E + _ * D + x * O, e[7] = m * E + v * D + S * O, e[8] = d * k + h * A + y * j, e[9] = f * k + g * A + b * j, e[10] = p * k + _ * A + x * j, e[11] = m * k + v * A + S * j, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e;
	}
	static rotateX(e, t, n) {
		let r = Math.sin(n), i = Math.cos(n), a = t[4], o = t[5], s = t[6], c = t[7], l = t[8], u = t[9], d = t[10], f = t[11];
		return t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[4] = a * i + l * r, e[5] = o * i + u * r, e[6] = s * i + d * r, e[7] = c * i + f * r, e[8] = l * i - a * r, e[9] = u * i - o * r, e[10] = d * i - s * r, e[11] = f * i - c * r, e;
	}
	static rotateY(e, t, n) {
		let r = Math.sin(n), i = Math.cos(n), a = t[0], o = t[1], s = t[2], c = t[3], l = t[8], u = t[9], d = t[10], f = t[11];
		return t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = a * i - l * r, e[1] = o * i - u * r, e[2] = s * i - d * r, e[3] = c * i - f * r, e[8] = a * r + l * i, e[9] = o * r + u * i, e[10] = s * r + d * i, e[11] = c * r + f * i, e;
	}
	static rotateZ(e, t, n) {
		let r = Math.sin(n), i = Math.cos(n), a = t[0], o = t[1], s = t[2], c = t[3], l = t[4], u = t[5], d = t[6], f = t[7];
		return t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = a * i + l * r, e[1] = o * i + u * r, e[2] = s * i + d * r, e[3] = c * i + f * r, e[4] = l * i - a * r, e[5] = u * i - o * r, e[6] = d * i - s * r, e[7] = f * i - c * r, e;
	}
	static fromTranslation(e, t) {
		return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = t[0], e[13] = t[1], e[14] = t[2], e[15] = 1, e;
	}
	static fromScaling(e, t) {
		return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = t[1], e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = t[2], e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
	}
	static fromRotation(e, t, n) {
		let r = n[0], i = n[1], a = n[2], o = Math.sqrt(r * r + i * i + a * a);
		if (o < 1e-6) return null;
		o = 1 / o, r *= o, i *= o, a *= o;
		let s = Math.sin(t), c = Math.cos(t), l = 1 - c;
		return e[0] = r * r * l + c, e[1] = i * r * l + a * s, e[2] = a * r * l - i * s, e[3] = 0, e[4] = r * i * l - a * s, e[5] = i * i * l + c, e[6] = a * i * l + r * s, e[7] = 0, e[8] = r * a * l + i * s, e[9] = i * a * l - r * s, e[10] = a * a * l + c, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
	}
	static fromXRotation(e, t) {
		let n = Math.sin(t), r = Math.cos(t);
		return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = r, e[6] = n, e[7] = 0, e[8] = 0, e[9] = -n, e[10] = r, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
	}
	static fromYRotation(e, t) {
		let n = Math.sin(t), r = Math.cos(t);
		return e[0] = r, e[1] = 0, e[2] = -n, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = n, e[9] = 0, e[10] = r, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
	}
	static fromZRotation(e, t) {
		let n = Math.sin(t), r = Math.cos(t);
		return e[0] = r, e[1] = n, e[2] = 0, e[3] = 0, e[4] = -n, e[5] = r, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
	}
	static fromRotationTranslation(e, t, n) {
		let r = t[0], i = t[1], a = t[2], o = t[3], s = r + r, c = i + i, l = a + a, u = r * s, d = r * c, f = r * l, p = i * c, m = i * l, h = a * l, g = o * s, _ = o * c, v = o * l;
		return e[0] = 1 - (p + h), e[1] = d + v, e[2] = f - _, e[3] = 0, e[4] = d - v, e[5] = 1 - (u + h), e[6] = m + g, e[7] = 0, e[8] = f + _, e[9] = m - g, e[10] = 1 - (u + p), e[11] = 0, e[12] = n[0], e[13] = n[1], e[14] = n[2], e[15] = 1, e;
	}
	static fromQuat2(t, n) {
		let r = -n[0], i = -n[1], a = -n[2], o = n[3], s = n[4], c = n[5], l = n[6], u = n[7], f = r * r + i * i + a * a + o * o;
		return f > 0 ? (d[0] = (s * o + u * r + c * a - l * i) * 2 / f, d[1] = (c * o + u * i + l * r - s * a) * 2 / f, d[2] = (l * o + u * a + s * i - c * r) * 2 / f) : (d[0] = (s * o + u * r + c * a - l * i) * 2, d[1] = (c * o + u * i + l * r - s * a) * 2, d[2] = (l * o + u * a + s * i - c * r) * 2), e.fromRotationTranslation(t, n, d), t;
	}
	static normalFromMat4(e, t) {
		let n = t[0], r = t[1], i = t[2], a = t[3], o = t[4], s = t[5], c = t[6], l = t[7], u = t[8], d = t[9], f = t[10], p = t[11], m = t[12], h = t[13], g = t[14], _ = t[15], v = n * s - r * o, y = n * c - i * o, b = n * l - a * o, x = r * c - i * s, S = r * l - a * s, C = i * l - a * c, w = u * h - d * m, T = u * g - f * m, E = u * _ - p * m, D = d * g - f * h, O = d * _ - p * h, k = f * _ - p * g, A = v * k - y * O + b * D + x * E - S * T + C * w;
		return A ? (A = 1 / A, e[0] = (s * k - c * O + l * D) * A, e[1] = (c * E - o * k - l * T) * A, e[2] = (o * O - s * E + l * w) * A, e[3] = 0, e[4] = (i * O - r * k - a * D) * A, e[5] = (n * k - i * E + a * T) * A, e[6] = (r * E - n * O - a * w) * A, e[7] = 0, e[8] = (h * C - g * S + _ * x) * A, e[9] = (g * b - m * C - _ * y) * A, e[10] = (m * S - h * b + _ * v) * A, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e) : null;
	}
	static normalFromMat4Fast(e, t) {
		let n = t[0], r = t[1], i = t[2], a = t[4], o = t[5], s = t[6], c = t[8], l = t[9], u = t[10];
		return e[0] = o * u - u * l, e[1] = s * c - c * u, e[2] = a * l - l * c, e[3] = 0, e[4] = l * i - u * r, e[5] = u * n - c * i, e[6] = c * r - l * n, e[7] = 0, e[8] = r * s - i * o, e[9] = i * a - n * s, e[10] = n * o - r * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
	}
	static getTranslation(e, t) {
		return e[0] = t[12], e[1] = t[13], e[2] = t[14], e;
	}
	static getScaling(e, t) {
		let n = t[0], r = t[1], i = t[2], a = t[4], o = t[5], s = t[6], c = t[8], l = t[9], u = t[10];
		return e[0] = Math.sqrt(n * n + r * r + i * i), e[1] = Math.sqrt(a * a + o * o + s * s), e[2] = Math.sqrt(c * c + l * l + u * u), e;
	}
	static getRotation(t, n) {
		e.getScaling(d, n);
		let r = 1 / d[0], i = 1 / d[1], a = 1 / d[2], o = n[0] * r, s = n[1] * i, c = n[2] * a, l = n[4] * r, u = n[5] * i, f = n[6] * a, p = n[8] * r, m = n[9] * i, h = n[10] * a, g = o + u + h, _ = 0;
		return g > 0 ? (_ = Math.sqrt(g + 1) * 2, t[3] = .25 * _, t[0] = (f - m) / _, t[1] = (p - c) / _, t[2] = (s - l) / _) : o > u && o > h ? (_ = Math.sqrt(1 + o - u - h) * 2, t[3] = (f - m) / _, t[0] = .25 * _, t[1] = (s + l) / _, t[2] = (p + c) / _) : u > h ? (_ = Math.sqrt(1 + u - o - h) * 2, t[3] = (p - c) / _, t[0] = (s + l) / _, t[1] = .25 * _, t[2] = (f + m) / _) : (_ = Math.sqrt(1 + h - o - u) * 2, t[3] = (s - l) / _, t[0] = (p + c) / _, t[1] = (f + m) / _, t[2] = .25 * _), t;
	}
	static decompose(e, t, n, r) {
		t[0] = r[12], t[1] = r[13], t[2] = r[14];
		let i = r[0], a = r[1], o = r[2], s = r[4], c = r[5], l = r[6], u = r[8], d = r[9], f = r[10];
		n[0] = Math.sqrt(i * i + a * a + o * o), n[1] = Math.sqrt(s * s + c * c + l * l), n[2] = Math.sqrt(u * u + d * d + f * f);
		let p = 1 / n[0], m = 1 / n[1], h = 1 / n[2], g = i * p, _ = a * m, v = o * h, y = s * p, b = c * m, x = l * h, S = u * p, C = d * m, w = f * h, T = g + b + w, E = 0;
		return T > 0 ? (E = Math.sqrt(T + 1) * 2, e[3] = .25 * E, e[0] = (x - C) / E, e[1] = (S - v) / E, e[2] = (_ - y) / E) : g > b && g > w ? (E = Math.sqrt(1 + g - b - w) * 2, e[3] = (x - C) / E, e[0] = .25 * E, e[1] = (_ + y) / E, e[2] = (S + v) / E) : b > w ? (E = Math.sqrt(1 + b - g - w) * 2, e[3] = (S - v) / E, e[0] = (_ + y) / E, e[1] = .25 * E, e[2] = (x + C) / E) : (E = Math.sqrt(1 + w - g - b) * 2, e[3] = (_ - y) / E, e[0] = (S + v) / E, e[1] = (x + C) / E, e[2] = .25 * E), e;
	}
	static fromRotationTranslationScale(e, t, n, r) {
		let i = t[0], a = t[1], o = t[2], s = t[3], c = i + i, l = a + a, u = o + o, d = i * c, f = i * l, p = i * u, m = a * l, h = a * u, g = o * u, _ = s * c, v = s * l, y = s * u, b = r[0], x = r[1], S = r[2];
		return e[0] = (1 - (m + g)) * b, e[1] = (f + y) * b, e[2] = (p - v) * b, e[3] = 0, e[4] = (f - y) * x, e[5] = (1 - (d + g)) * x, e[6] = (h + _) * x, e[7] = 0, e[8] = (p + v) * S, e[9] = (h - _) * S, e[10] = (1 - (d + m)) * S, e[11] = 0, e[12] = n[0], e[13] = n[1], e[14] = n[2], e[15] = 1, e;
	}
	static fromRotationTranslationScaleOrigin(e, t, n, r, i) {
		let a = t[0], o = t[1], s = t[2], c = t[3], l = a + a, u = o + o, d = s + s, f = a * l, p = a * u, m = a * d, h = o * u, g = o * d, _ = s * d, v = c * l, y = c * u, b = c * d, x = r[0], S = r[1], C = r[2], w = i[0], T = i[1], E = i[2], D = (1 - (h + _)) * x, O = (p + b) * x, k = (m - y) * x, A = (p - b) * S, j = (1 - (f + _)) * S, M = (g + v) * S, N = (m + y) * C, P = (g - v) * C, F = (1 - (f + h)) * C;
		return e[0] = D, e[1] = O, e[2] = k, e[3] = 0, e[4] = A, e[5] = j, e[6] = M, e[7] = 0, e[8] = N, e[9] = P, e[10] = F, e[11] = 0, e[12] = n[0] + w - (D * w + A * T + N * E), e[13] = n[1] + T - (O * w + j * T + P * E), e[14] = n[2] + E - (k * w + M * T + F * E), e[15] = 1, e;
	}
	static fromQuat(e, t) {
		let n = t[0], r = t[1], i = t[2], a = t[3], o = n + n, s = r + r, c = i + i, l = n * o, u = r * o, d = r * s, f = i * o, p = i * s, m = i * c, h = a * o, g = a * s, _ = a * c;
		return e[0] = 1 - d - m, e[1] = u + _, e[2] = f - g, e[3] = 0, e[4] = u - _, e[5] = 1 - l - m, e[6] = p + h, e[7] = 0, e[8] = f + g, e[9] = p - h, e[10] = 1 - l - d, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
	}
	static frustumNO(e, t, n, r, i, a, o = Infinity) {
		let s = 1 / (n - t), c = 1 / (i - r);
		if (e[0] = a * 2 * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a * 2 * c, e[6] = 0, e[7] = 0, e[8] = (n + t) * s, e[9] = (i + r) * c, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, o != null && o !== Infinity) {
			let t = 1 / (a - o);
			e[10] = (o + a) * t, e[14] = 2 * o * a * t;
		} else e[10] = -1, e[14] = -2 * a;
		return e;
	}
	static frustum(e, t, n, r, i, a, o = Infinity) {
		return e;
	}
	static frustumZO(e, t, n, r, i, a, o = Infinity) {
		let s = 1 / (n - t), c = 1 / (i - r);
		if (e[0] = a * 2 * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a * 2 * c, e[6] = 0, e[7] = 0, e[8] = (n + t) * s, e[9] = (i + r) * c, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, o != null && o !== Infinity) {
			let t = 1 / (a - o);
			e[10] = o * t, e[14] = o * a * t;
		} else e[10] = -1, e[14] = -a;
		return e;
	}
	static perspectiveNO(e, t, n, r, i = Infinity) {
		let a = 1 / Math.tan(t / 2);
		if (e[0] = a / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, i != null && i !== Infinity) {
			let t = 1 / (r - i);
			e[10] = (i + r) * t, e[14] = 2 * i * r * t;
		} else e[10] = -1, e[14] = -2 * r;
		return e;
	}
	static perspective(e, t, n, r, i = Infinity) {
		return e;
	}
	static perspectiveZO(e, t, n, r, i = Infinity) {
		let a = 1 / Math.tan(t / 2);
		if (e[0] = a / n, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, i != null && i !== Infinity) {
			let t = 1 / (r - i);
			e[10] = i * t, e[14] = i * r * t;
		} else e[10] = -1, e[14] = -r;
		return e;
	}
	static perspectiveFromFieldOfView(e, t, n, r) {
		let i = Math.tan(t.upDegrees * Math.PI / 180), a = Math.tan(t.downDegrees * Math.PI / 180), o = Math.tan(t.leftDegrees * Math.PI / 180), s = Math.tan(t.rightDegrees * Math.PI / 180), c = 2 / (o + s), l = 2 / (i + a);
		return e[0] = c, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = l, e[6] = 0, e[7] = 0, e[8] = -((o - s) * c * .5), e[9] = (i - a) * l * .5, e[10] = r / (n - r), e[11] = -1, e[12] = 0, e[13] = 0, e[14] = r * n / (n - r), e[15] = 0, e;
	}
	static orthoNO(e, t, n, r, i, a, o) {
		let s = 1 / (t - n), c = 1 / (r - i), l = 1 / (a - o);
		return e[0] = -2 * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * c, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 2 * l, e[11] = 0, e[12] = (t + n) * s, e[13] = (i + r) * c, e[14] = (o + a) * l, e[15] = 1, e;
	}
	static ortho(e, t, n, r, i, a, o) {
		return e;
	}
	static orthoZO(e, t, n, r, i, a, o) {
		let s = 1 / (t - n), c = 1 / (r - i), l = 1 / (a - o);
		return e[0] = -2 * s, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * c, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = l, e[11] = 0, e[12] = (t + n) * s, e[13] = (i + r) * c, e[14] = a * l, e[15] = 1, e;
	}
	static lookAt(t, n, r, i) {
		let a = n[0], o = n[1], s = n[2], c = i[0], l = i[1], u = i[2], d = r[0], f = r[1], p = r[2];
		if (Math.abs(a - d) < 1e-6 && Math.abs(o - f) < 1e-6 && Math.abs(s - p) < 1e-6) return e.identity(t);
		let m = a - d, h = o - f, g = s - p, _ = 1 / Math.sqrt(m * m + h * h + g * g);
		m *= _, h *= _, g *= _;
		let v = l * g - u * h, y = u * m - c * g, b = c * h - l * m;
		_ = Math.sqrt(v * v + y * y + b * b), _ ? (_ = 1 / _, v *= _, y *= _, b *= _) : (v = 0, y = 0, b = 0);
		let x = h * b - g * y, S = g * v - m * b, C = m * y - h * v;
		return _ = Math.sqrt(x * x + S * S + C * C), _ ? (_ = 1 / _, x *= _, S *= _, C *= _) : (x = 0, S = 0, C = 0), t[0] = v, t[1] = x, t[2] = m, t[3] = 0, t[4] = y, t[5] = S, t[6] = h, t[7] = 0, t[8] = b, t[9] = C, t[10] = g, t[11] = 0, t[12] = -(v * a + y * o + b * s), t[13] = -(x * a + S * o + C * s), t[14] = -(m * a + h * o + g * s), t[15] = 1, t;
	}
	static targetTo(e, t, n, r) {
		let i = t[0], a = t[1], o = t[2], s = r[0], c = r[1], l = r[2], u = i - n[0], d = a - n[1], f = o - n[2], p = u * u + d * d + f * f;
		p > 0 && (p = 1 / Math.sqrt(p), u *= p, d *= p, f *= p);
		let m = c * f - l * d, h = l * u - s * f, g = s * d - c * u;
		return p = m * m + h * h + g * g, p > 0 && (p = 1 / Math.sqrt(p), m *= p, h *= p, g *= p), e[0] = m, e[1] = h, e[2] = g, e[3] = 0, e[4] = d * g - f * h, e[5] = f * m - u * g, e[6] = u * h - d * m, e[7] = 0, e[8] = u, e[9] = d, e[10] = f, e[11] = 0, e[12] = i, e[13] = a, e[14] = o, e[15] = 1, e;
	}
	static frob(e) {
		return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2] + e[3] * e[3] + e[4] * e[4] + e[5] * e[5] + e[6] * e[6] + e[7] * e[7] + e[8] * e[8] + e[9] * e[9] + e[10] * e[10] + e[11] * e[11] + e[12] * e[12] + e[13] * e[13] + e[14] * e[14] + e[15] * e[15]);
	}
	static add(e, t, n) {
		return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e[4] = t[4] + n[4], e[5] = t[5] + n[5], e[6] = t[6] + n[6], e[7] = t[7] + n[7], e[8] = t[8] + n[8], e[9] = t[9] + n[9], e[10] = t[10] + n[10], e[11] = t[11] + n[11], e[12] = t[12] + n[12], e[13] = t[13] + n[13], e[14] = t[14] + n[14], e[15] = t[15] + n[15], e;
	}
	static subtract(e, t, n) {
		return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e[4] = t[4] - n[4], e[5] = t[5] - n[5], e[6] = t[6] - n[6], e[7] = t[7] - n[7], e[8] = t[8] - n[8], e[9] = t[9] - n[9], e[10] = t[10] - n[10], e[11] = t[11] - n[11], e[12] = t[12] - n[12], e[13] = t[13] - n[13], e[14] = t[14] - n[14], e[15] = t[15] - n[15], e;
	}
	static sub(e, t, n) {
		return e;
	}
	static multiplyScalar(e, t, n) {
		return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e[4] = t[4] * n, e[5] = t[5] * n, e[6] = t[6] * n, e[7] = t[7] * n, e[8] = t[8] * n, e[9] = t[9] * n, e[10] = t[10] * n, e[11] = t[11] * n, e[12] = t[12] * n, e[13] = t[13] * n, e[14] = t[14] * n, e[15] = t[15] * n, e;
	}
	static multiplyScalarAndAdd(e, t, n, r) {
		return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e[3] = t[3] + n[3] * r, e[4] = t[4] + n[4] * r, e[5] = t[5] + n[5] * r, e[6] = t[6] + n[6] * r, e[7] = t[7] + n[7] * r, e[8] = t[8] + n[8] * r, e[9] = t[9] + n[9] * r, e[10] = t[10] + n[10] * r, e[11] = t[11] + n[11] * r, e[12] = t[12] + n[12] * r, e[13] = t[13] + n[13] * r, e[14] = t[14] + n[14] * r, e[15] = t[15] + n[15] * r, e;
	}
	static exactEquals(e, t) {
		return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5] && e[6] === t[6] && e[7] === t[7] && e[8] === t[8] && e[9] === t[9] && e[10] === t[10] && e[11] === t[11] && e[12] === t[12] && e[13] === t[13] && e[14] === t[14] && e[15] === t[15];
	}
	static equals(e, t) {
		let n = e[0], r = e[1], i = e[2], a = e[3], o = e[4], s = e[5], c = e[6], l = e[7], u = e[8], d = e[9], f = e[10], p = e[11], m = e[12], h = e[13], g = e[14], _ = e[15], v = t[0], y = t[1], b = t[2], x = t[3], S = t[4], C = t[5], w = t[6], T = t[7], E = t[8], D = t[9], O = t[10], k = t[11], A = t[12], j = t[13], M = t[14], N = t[15];
		return Math.abs(n - v) <= 1e-6 * Math.max(1, Math.abs(n), Math.abs(v)) && Math.abs(r - y) <= 1e-6 * Math.max(1, Math.abs(r), Math.abs(y)) && Math.abs(i - b) <= 1e-6 * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(a - x) <= 1e-6 * Math.max(1, Math.abs(a), Math.abs(x)) && Math.abs(o - S) <= 1e-6 * Math.max(1, Math.abs(o), Math.abs(S)) && Math.abs(s - C) <= 1e-6 * Math.max(1, Math.abs(s), Math.abs(C)) && Math.abs(c - w) <= 1e-6 * Math.max(1, Math.abs(c), Math.abs(w)) && Math.abs(l - T) <= 1e-6 * Math.max(1, Math.abs(l), Math.abs(T)) && Math.abs(u - E) <= 1e-6 * Math.max(1, Math.abs(u), Math.abs(E)) && Math.abs(d - D) <= 1e-6 * Math.max(1, Math.abs(d), Math.abs(D)) && Math.abs(f - O) <= 1e-6 * Math.max(1, Math.abs(f), Math.abs(O)) && Math.abs(p - k) <= 1e-6 * Math.max(1, Math.abs(p), Math.abs(k)) && Math.abs(m - A) <= 1e-6 * Math.max(1, Math.abs(m), Math.abs(A)) && Math.abs(h - j) <= 1e-6 * Math.max(1, Math.abs(h), Math.abs(j)) && Math.abs(g - M) <= 1e-6 * Math.max(1, Math.abs(g), Math.abs(M)) && Math.abs(_ - N) <= 1e-6 * Math.max(1, Math.abs(_), Math.abs(N));
	}
	static str(e) {
		return `Mat4(${e.join(", ")})`;
	}
}, d = new Float32Array(3);
u.prototype.mul = u.prototype.multiply, u.sub = u.subtract, u.mul = u.multiply, u.frustum = u.frustumNO, u.perspective = u.perspectiveNO, u.ortho = u.orthoNO;
//#endregion
//#region ../../node_modules/.pnpm/gl-matrix@4.0.0-beta.2/node_modules/gl-matrix/dist/esm/vec3.js
var f = class e extends Float32Array {
	static BYTE_LENGTH = 3 * Float32Array.BYTES_PER_ELEMENT;
	constructor(...e) {
		switch (e.length) {
			case 3:
				super(e);
				break;
			case 2:
				super(e[0], e[1], 3);
				break;
			case 1: {
				let t = e[0];
				typeof t == "number" ? super([
					t,
					t,
					t
				]) : super(t, 0, 3);
				break;
			}
			default:
				super(3);
				break;
		}
	}
	get x() {
		return this[0];
	}
	set x(e) {
		this[0] = e;
	}
	get y() {
		return this[1];
	}
	set y(e) {
		this[1] = e;
	}
	get z() {
		return this[2];
	}
	set z(e) {
		this[2] = e;
	}
	get r() {
		return this[0];
	}
	set r(e) {
		this[0] = e;
	}
	get g() {
		return this[1];
	}
	set g(e) {
		this[1] = e;
	}
	get b() {
		return this[2];
	}
	set b(e) {
		this[2] = e;
	}
	get magnitude() {
		let e = this[0], t = this[1], n = this[2];
		return Math.sqrt(e * e + t * t + n * n);
	}
	get mag() {
		return this.magnitude;
	}
	get squaredMagnitude() {
		let e = this[0], t = this[1], n = this[2];
		return e * e + t * t + n * n;
	}
	get sqrMag() {
		return this.squaredMagnitude;
	}
	get str() {
		return e.str(this);
	}
	copy(e) {
		return this.set(e), this;
	}
	add(e) {
		return this[0] += e[0], this[1] += e[1], this[2] += e[2], this;
	}
	subtract(e) {
		return this[0] -= e[0], this[1] -= e[1], this[2] -= e[2], this;
	}
	sub(e) {
		return this;
	}
	multiply(e) {
		return this[0] *= e[0], this[1] *= e[1], this[2] *= e[2], this;
	}
	mul(e) {
		return this;
	}
	divide(e) {
		return this[0] /= e[0], this[1] /= e[1], this[2] /= e[2], this;
	}
	div(e) {
		return this;
	}
	scale(e) {
		return this[0] *= e, this[1] *= e, this[2] *= e, this;
	}
	scaleAndAdd(e, t) {
		return this[0] += e[0] * t, this[1] += e[1] * t, this[2] += e[2] * t, this;
	}
	distance(t) {
		return e.distance(this, t);
	}
	dist(e) {
		return 0;
	}
	squaredDistance(t) {
		return e.squaredDistance(this, t);
	}
	sqrDist(e) {
		return 0;
	}
	negate() {
		return this[0] *= -1, this[1] *= -1, this[2] *= -1, this;
	}
	invert() {
		return this[0] = 1 / this[0], this[1] = 1 / this[1], this[2] = 1 / this[2], this;
	}
	abs() {
		return this[0] = Math.abs(this[0]), this[1] = Math.abs(this[1]), this[2] = Math.abs(this[2]), this;
	}
	dot(e) {
		return this[0] * e[0] + this[1] * e[1] + this[2] * e[2];
	}
	normalize() {
		return e.normalize(this, this);
	}
	static create() {
		return new e();
	}
	static clone(t) {
		return new e(t);
	}
	static magnitude(e) {
		let t = e[0], n = e[1], r = e[2];
		return Math.sqrt(t * t + n * n + r * r);
	}
	static mag(e) {
		return 0;
	}
	static length(e) {
		return 0;
	}
	static len(e) {
		return 0;
	}
	static fromValues(t, n, r) {
		return new e(t, n, r);
	}
	static copy(e, t) {
		return e[0] = t[0], e[1] = t[1], e[2] = t[2], e;
	}
	static set(e, t, n, r) {
		return e[0] = t, e[1] = n, e[2] = r, e;
	}
	static add(e, t, n) {
		return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e;
	}
	static subtract(e, t, n) {
		return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e;
	}
	static sub(e, t, n) {
		return [
			0,
			0,
			0
		];
	}
	static multiply(e, t, n) {
		return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e[2] = t[2] * n[2], e;
	}
	static mul(e, t, n) {
		return [
			0,
			0,
			0
		];
	}
	static divide(e, t, n) {
		return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e[2] = t[2] / n[2], e;
	}
	static div(e, t, n) {
		return [
			0,
			0,
			0
		];
	}
	static ceil(e, t) {
		return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e[2] = Math.ceil(t[2]), e;
	}
	static floor(e, t) {
		return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e[2] = Math.floor(t[2]), e;
	}
	static min(e, t, n) {
		return e[0] = Math.min(t[0], n[0]), e[1] = Math.min(t[1], n[1]), e[2] = Math.min(t[2], n[2]), e;
	}
	static max(e, t, n) {
		return e[0] = Math.max(t[0], n[0]), e[1] = Math.max(t[1], n[1]), e[2] = Math.max(t[2], n[2]), e;
	}
	static scale(e, t, n) {
		return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e;
	}
	static scaleAndAdd(e, t, n, r) {
		return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e;
	}
	static distance(e, t) {
		let n = t[0] - e[0], r = t[1] - e[1], i = t[2] - e[2];
		return Math.sqrt(n * n + r * r + i * i);
	}
	static dist(e, t) {
		return 0;
	}
	static squaredDistance(e, t) {
		let n = t[0] - e[0], r = t[1] - e[1], i = t[2] - e[2];
		return n * n + r * r + i * i;
	}
	static sqrDist(e, t) {
		return 0;
	}
	static squaredLength(e) {
		let t = e[0], n = e[1], r = e[2];
		return t * t + n * n + r * r;
	}
	static sqrLen(e, t) {
		return 0;
	}
	static negate(e, t) {
		return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e;
	}
	static inverse(e, t) {
		return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e;
	}
	static abs(e, t) {
		return e[0] = Math.abs(t[0]), e[1] = Math.abs(t[1]), e[2] = Math.abs(t[2]), e;
	}
	static normalize(e, t) {
		let n = t[0], r = t[1], i = t[2], a = n * n + r * r + i * i;
		return a > 0 && (a = 1 / Math.sqrt(a)), e[0] = t[0] * a, e[1] = t[1] * a, e[2] = t[2] * a, e;
	}
	static dot(e, t) {
		return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
	}
	static cross(e, t, n) {
		let r = t[0], i = t[1], a = t[2], o = n[0], s = n[1], c = n[2];
		return e[0] = i * c - a * s, e[1] = a * o - r * c, e[2] = r * s - i * o, e;
	}
	static lerp(e, t, n, r) {
		let i = t[0], a = t[1], o = t[2];
		return e[0] = i + r * (n[0] - i), e[1] = a + r * (n[1] - a), e[2] = o + r * (n[2] - o), e;
	}
	static slerp(t, n, r, i) {
		let a = Math.acos(Math.min(Math.max(e.dot(n, r), -1), 1)), o = Math.sin(a), s = Math.sin((1 - i) * a) / o, c = Math.sin(i * a) / o;
		return t[0] = s * n[0] + c * r[0], t[1] = s * n[1] + c * r[1], t[2] = s * n[2] + c * r[2], t;
	}
	static hermite(e, t, n, r, i, a) {
		let o = a * a, s = o * (2 * a - 3) + 1, c = o * (a - 2) + a, l = o * (a - 1), u = o * (3 - 2 * a);
		return e[0] = t[0] * s + n[0] * c + r[0] * l + i[0] * u, e[1] = t[1] * s + n[1] * c + r[1] * l + i[1] * u, e[2] = t[2] * s + n[2] * c + r[2] * l + i[2] * u, e;
	}
	static bezier(e, t, n, r, i, a) {
		let o = 1 - a, s = o * o, c = a * a, l = s * o, u = 3 * a * s, d = 3 * c * o, f = c * a;
		return e[0] = t[0] * l + n[0] * u + r[0] * d + i[0] * f, e[1] = t[1] * l + n[1] * u + r[1] * d + i[1] * f, e[2] = t[2] * l + n[2] * u + r[2] * d + i[2] * f, e;
	}
	static transformMat4(e, t, n) {
		let r = t[0], i = t[1], a = t[2], o = n[3] * r + n[7] * i + n[11] * a + n[15] || 1;
		return e[0] = (n[0] * r + n[4] * i + n[8] * a + n[12]) / o, e[1] = (n[1] * r + n[5] * i + n[9] * a + n[13]) / o, e[2] = (n[2] * r + n[6] * i + n[10] * a + n[14]) / o, e;
	}
	static transformMat3(e, t, n) {
		let r = t[0], i = t[1], a = t[2];
		return e[0] = r * n[0] + i * n[3] + a * n[6], e[1] = r * n[1] + i * n[4] + a * n[7], e[2] = r * n[2] + i * n[5] + a * n[8], e;
	}
	static transformQuat(e, t, n) {
		let r = n[0], i = n[1], a = n[2], o = n[3] * 2, s = t[0], c = t[1], l = t[2], u = i * l - a * c, d = a * s - r * l, f = r * c - i * s, p = (i * f - a * d) * 2, m = (a * u - r * f) * 2, h = (r * d - i * u) * 2;
		return e[0] = s + u * o + p, e[1] = c + d * o + m, e[2] = l + f * o + h, e;
	}
	static rotateX(e, t, n, r) {
		let i = n[1], a = n[2], o = t[1] - i, s = t[2] - a;
		return e[0] = t[0], e[1] = o * Math.cos(r) - s * Math.sin(r) + i, e[2] = o * Math.sin(r) + s * Math.cos(r) + a, e;
	}
	static rotateY(e, t, n, r) {
		let i = n[0], a = n[2], o = t[0] - i, s = t[2] - a;
		return e[0] = s * Math.sin(r) + o * Math.cos(r) + i, e[1] = t[1], e[2] = s * Math.cos(r) - o * Math.sin(r) + a, e;
	}
	static rotateZ(e, t, n, r) {
		let i = n[0], a = n[1], o = t[0] - i, s = t[1] - a;
		return e[0] = o * Math.cos(r) - s * Math.sin(r) + i, e[1] = o * Math.sin(r) + s * Math.cos(r) + a, e[2] = n[2], e;
	}
	static angle(t, n) {
		let r = t[0], i = t[1], a = t[2], o = n[0], s = n[1], c = n[2], l = Math.sqrt((r * r + i * i + a * a) * (o * o + s * s + c * c)), u = l && e.dot(t, n) / l;
		return Math.acos(Math.min(Math.max(u, -1), 1));
	}
	static zero(e) {
		return e[0] = 0, e[1] = 0, e[2] = 0, e;
	}
	static str(e) {
		return `Vec3(${e.join(", ")})`;
	}
	static exactEquals(e, t) {
		return e[0] === t[0] && e[1] === t[1] && e[2] === t[2];
	}
	static equals(e, t) {
		let n = e[0], r = e[1], i = e[2], a = t[0], o = t[1], s = t[2];
		return Math.abs(n - a) <= 1e-6 * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(r - o) <= 1e-6 * Math.max(1, Math.abs(r), Math.abs(o)) && Math.abs(i - s) <= 1e-6 * Math.max(1, Math.abs(i), Math.abs(s));
	}
};
f.prototype.sub = f.prototype.subtract, f.prototype.mul = f.prototype.multiply, f.prototype.div = f.prototype.divide, f.prototype.dist = f.prototype.distance, f.prototype.sqrDist = f.prototype.squaredDistance, f.sub = f.subtract, f.mul = f.multiply, f.div = f.divide, f.dist = f.distance, f.sqrDist = f.squaredDistance, f.sqrLen = f.squaredLength, f.mag = f.magnitude, f.length = f.magnitude, f.len = f.magnitude;
//#endregion
//#region ../../node_modules/.pnpm/gl-matrix@4.0.0-beta.2/node_modules/gl-matrix/dist/esm/vec4.js
var p = class e extends Float32Array {
	static BYTE_LENGTH = 4 * Float32Array.BYTES_PER_ELEMENT;
	constructor(...e) {
		switch (e.length) {
			case 4:
				super(e);
				break;
			case 2:
				super(e[0], e[1], 4);
				break;
			case 1: {
				let t = e[0];
				typeof t == "number" ? super([
					t,
					t,
					t,
					t
				]) : super(t, 0, 4);
				break;
			}
			default:
				super(4);
				break;
		}
	}
	get x() {
		return this[0];
	}
	set x(e) {
		this[0] = e;
	}
	get y() {
		return this[1];
	}
	set y(e) {
		this[1] = e;
	}
	get z() {
		return this[2];
	}
	set z(e) {
		this[2] = e;
	}
	get w() {
		return this[3];
	}
	set w(e) {
		this[3] = e;
	}
	get r() {
		return this[0];
	}
	set r(e) {
		this[0] = e;
	}
	get g() {
		return this[1];
	}
	set g(e) {
		this[1] = e;
	}
	get b() {
		return this[2];
	}
	set b(e) {
		this[2] = e;
	}
	get a() {
		return this[3];
	}
	set a(e) {
		this[3] = e;
	}
	get magnitude() {
		let e = this[0], t = this[1], n = this[2], r = this[3];
		return Math.sqrt(e * e + t * t + n * n + r * r);
	}
	get mag() {
		return this.magnitude;
	}
	get str() {
		return e.str(this);
	}
	copy(e) {
		return super.set(e), this;
	}
	add(e) {
		return this[0] += e[0], this[1] += e[1], this[2] += e[2], this[3] += e[3], this;
	}
	subtract(e) {
		return this[0] -= e[0], this[1] -= e[1], this[2] -= e[2], this[3] -= e[3], this;
	}
	sub(e) {
		return this;
	}
	multiply(e) {
		return this[0] *= e[0], this[1] *= e[1], this[2] *= e[2], this[3] *= e[3], this;
	}
	mul(e) {
		return this;
	}
	divide(e) {
		return this[0] /= e[0], this[1] /= e[1], this[2] /= e[2], this[3] /= e[3], this;
	}
	div(e) {
		return this;
	}
	scale(e) {
		return this[0] *= e, this[1] *= e, this[2] *= e, this[3] *= e, this;
	}
	scaleAndAdd(e, t) {
		return this[0] += e[0] * t, this[1] += e[1] * t, this[2] += e[2] * t, this[3] += e[3] * t, this;
	}
	distance(t) {
		return e.distance(this, t);
	}
	dist(e) {
		return 0;
	}
	squaredDistance(t) {
		return e.squaredDistance(this, t);
	}
	sqrDist(e) {
		return 0;
	}
	negate() {
		return this[0] *= -1, this[1] *= -1, this[2] *= -1, this[3] *= -1, this;
	}
	invert() {
		return this[0] = 1 / this[0], this[1] = 1 / this[1], this[2] = 1 / this[2], this[3] = 1 / this[3], this;
	}
	abs() {
		return this[0] = Math.abs(this[0]), this[1] = Math.abs(this[1]), this[2] = Math.abs(this[2]), this[3] = Math.abs(this[3]), this;
	}
	dot(e) {
		return this[0] * e[0] + this[1] * e[1] + this[2] * e[2] + this[3] * e[3];
	}
	normalize() {
		return e.normalize(this, this);
	}
	static create() {
		return new e();
	}
	static clone(t) {
		return new e(t);
	}
	static fromValues(t, n, r, i) {
		return new e(t, n, r, i);
	}
	static copy(e, t) {
		return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e;
	}
	static set(e, t, n, r, i) {
		return e[0] = t, e[1] = n, e[2] = r, e[3] = i, e;
	}
	static add(e, t, n) {
		return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e[2] = t[2] + n[2], e[3] = t[3] + n[3], e;
	}
	static subtract(e, t, n) {
		return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e[2] = t[2] - n[2], e[3] = t[3] - n[3], e;
	}
	static sub(e, t, n) {
		return e;
	}
	static multiply(e, t, n) {
		return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e[2] = t[2] * n[2], e[3] = t[3] * n[3], e;
	}
	static mul(e, t, n) {
		return e;
	}
	static divide(e, t, n) {
		return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e[2] = t[2] / n[2], e[3] = t[3] / n[3], e;
	}
	static div(e, t, n) {
		return e;
	}
	static ceil(e, t) {
		return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e[2] = Math.ceil(t[2]), e[3] = Math.ceil(t[3]), e;
	}
	static floor(e, t) {
		return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e[2] = Math.floor(t[2]), e[3] = Math.floor(t[3]), e;
	}
	static min(e, t, n) {
		return e[0] = Math.min(t[0], n[0]), e[1] = Math.min(t[1], n[1]), e[2] = Math.min(t[2], n[2]), e[3] = Math.min(t[3], n[3]), e;
	}
	static max(e, t, n) {
		return e[0] = Math.max(t[0], n[0]), e[1] = Math.max(t[1], n[1]), e[2] = Math.max(t[2], n[2]), e[3] = Math.max(t[3], n[3]), e;
	}
	static round(e, t) {
		return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e[2] = Math.round(t[2]), e[3] = Math.round(t[3]), e;
	}
	static scale(e, t, n) {
		return e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e[3] = t[3] * n, e;
	}
	static scaleAndAdd(e, t, n, r) {
		return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e[2] = t[2] + n[2] * r, e[3] = t[3] + n[3] * r, e;
	}
	static distance(e, t) {
		let n = t[0] - e[0], r = t[1] - e[1], i = t[2] - e[2], a = t[3] - e[3];
		return Math.hypot(n, r, i, a);
	}
	static dist(e, t) {
		return 0;
	}
	static squaredDistance(e, t) {
		let n = t[0] - e[0], r = t[1] - e[1], i = t[2] - e[2], a = t[3] - e[3];
		return n * n + r * r + i * i + a * a;
	}
	static sqrDist(e, t) {
		return 0;
	}
	static magnitude(e) {
		let t = e[0], n = e[1], r = e[2], i = e[3];
		return Math.sqrt(t * t + n * n + r * r + i * i);
	}
	static mag(e) {
		return 0;
	}
	static length(e) {
		return 0;
	}
	static len(e) {
		return 0;
	}
	static squaredLength(e) {
		let t = e[0], n = e[1], r = e[2], i = e[3];
		return t * t + n * n + r * r + i * i;
	}
	static sqrLen(e) {
		return 0;
	}
	static negate(e, t) {
		return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = -t[3], e;
	}
	static inverse(e, t) {
		return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e[3] = 1 / t[3], e;
	}
	static abs(e, t) {
		return e[0] = Math.abs(t[0]), e[1] = Math.abs(t[1]), e[2] = Math.abs(t[2]), e[3] = Math.abs(t[3]), e;
	}
	static normalize(e, t) {
		let n = t[0], r = t[1], i = t[2], a = t[3], o = n * n + r * r + i * i + a * a;
		return o > 0 && (o = 1 / Math.sqrt(o)), e[0] = n * o, e[1] = r * o, e[2] = i * o, e[3] = a * o, e;
	}
	static dot(e, t) {
		return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
	}
	static cross(e, t, n, r) {
		let i = n[0] * r[1] - n[1] * r[0], a = n[0] * r[2] - n[2] * r[0], o = n[0] * r[3] - n[3] * r[0], s = n[1] * r[2] - n[2] * r[1], c = n[1] * r[3] - n[3] * r[1], l = n[2] * r[3] - n[3] * r[2], u = t[0], d = t[1], f = t[2], p = t[3];
		return e[0] = d * l - f * c + p * s, e[1] = -(u * l) + f * o - p * a, e[2] = u * c - d * o + p * i, e[3] = -(u * s) + d * a - f * i, e;
	}
	static lerp(e, t, n, r) {
		let i = t[0], a = t[1], o = t[2], s = t[3];
		return e[0] = i + r * (n[0] - i), e[1] = a + r * (n[1] - a), e[2] = o + r * (n[2] - o), e[3] = s + r * (n[3] - s), e;
	}
	static transformMat4(e, t, n) {
		let r = t[0], i = t[1], a = t[2], o = t[3];
		return e[0] = n[0] * r + n[4] * i + n[8] * a + n[12] * o, e[1] = n[1] * r + n[5] * i + n[9] * a + n[13] * o, e[2] = n[2] * r + n[6] * i + n[10] * a + n[14] * o, e[3] = n[3] * r + n[7] * i + n[11] * a + n[15] * o, e;
	}
	static transformQuat(e, t, n) {
		let r = t[0], i = t[1], a = t[2], o = n[0], s = n[1], c = n[2], l = n[3], u = l * r + s * a - c * i, d = l * i + c * r - o * a, f = l * a + o * i - s * r, p = -o * r - s * i - c * a;
		return e[0] = u * l + p * -o + d * -c - f * -s, e[1] = d * l + p * -s + f * -o - u * -c, e[2] = f * l + p * -c + u * -s - d * -o, e[3] = t[3], e;
	}
	static zero(e) {
		return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e;
	}
	static str(e) {
		return `Vec4(${e.join(", ")})`;
	}
	static exactEquals(e, t) {
		return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3];
	}
	static equals(e, t) {
		let n = e[0], r = e[1], i = e[2], a = e[3], o = t[0], s = t[1], c = t[2], l = t[3];
		return Math.abs(n - o) <= 1e-6 * Math.max(1, Math.abs(n), Math.abs(o)) && Math.abs(r - s) <= 1e-6 * Math.max(1, Math.abs(r), Math.abs(s)) && Math.abs(i - c) <= 1e-6 * Math.max(1, Math.abs(i), Math.abs(c)) && Math.abs(a - l) <= 1e-6 * Math.max(1, Math.abs(a), Math.abs(l));
	}
};
p.prototype.sub = p.prototype.subtract, p.prototype.mul = p.prototype.multiply, p.prototype.div = p.prototype.divide, p.prototype.dist = p.prototype.distance, p.prototype.sqrDist = p.prototype.squaredDistance, p.sub = p.subtract, p.mul = p.multiply, p.div = p.divide, p.dist = p.distance, p.sqrDist = p.squaredDistance, p.sqrLen = p.squaredLength, p.mag = p.magnitude, p.length = p.magnitude, p.len = p.magnitude;
//#endregion
//#region ../../node_modules/.pnpm/gl-matrix@4.0.0-beta.2/node_modules/gl-matrix/dist/esm/vec2.js
var m = class e extends Float32Array {
	static BYTE_LENGTH = 2 * Float32Array.BYTES_PER_ELEMENT;
	constructor(...e) {
		switch (e.length) {
			case 2: {
				let t = e[0];
				typeof t == "number" ? super([t, e[1]]) : super(t, e[1], 2);
				break;
			}
			case 1: {
				let t = e[0];
				typeof t == "number" ? super([t, t]) : super(t, 0, 2);
				break;
			}
			default:
				super(2);
				break;
		}
	}
	get x() {
		return this[0];
	}
	set x(e) {
		this[0] = e;
	}
	get y() {
		return this[1];
	}
	set y(e) {
		this[1] = e;
	}
	get r() {
		return this[0];
	}
	set r(e) {
		this[0] = e;
	}
	get g() {
		return this[1];
	}
	set g(e) {
		this[1] = e;
	}
	get magnitude() {
		return Math.hypot(this[0], this[1]);
	}
	get mag() {
		return this.magnitude;
	}
	get squaredMagnitude() {
		let e = this[0], t = this[1];
		return e * e + t * t;
	}
	get sqrMag() {
		return this.squaredMagnitude;
	}
	get str() {
		return e.str(this);
	}
	copy(e) {
		return this.set(e), this;
	}
	add(e) {
		return this[0] += e[0], this[1] += e[1], this;
	}
	subtract(e) {
		return this[0] -= e[0], this[1] -= e[1], this;
	}
	sub(e) {
		return this;
	}
	multiply(e) {
		return this[0] *= e[0], this[1] *= e[1], this;
	}
	mul(e) {
		return this;
	}
	divide(e) {
		return this[0] /= e[0], this[1] /= e[1], this;
	}
	div(e) {
		return this;
	}
	scale(e) {
		return this[0] *= e, this[1] *= e, this;
	}
	scaleAndAdd(e, t) {
		return this[0] += e[0] * t, this[1] += e[1] * t, this;
	}
	distance(t) {
		return e.distance(this, t);
	}
	dist(e) {
		return 0;
	}
	squaredDistance(t) {
		return e.squaredDistance(this, t);
	}
	sqrDist(e) {
		return 0;
	}
	negate() {
		return this[0] *= -1, this[1] *= -1, this;
	}
	invert() {
		return this[0] = 1 / this[0], this[1] = 1 / this[1], this;
	}
	abs() {
		return this[0] = Math.abs(this[0]), this[1] = Math.abs(this[1]), this;
	}
	dot(e) {
		return this[0] * e[0] + this[1] * e[1];
	}
	normalize() {
		return e.normalize(this, this);
	}
	static create() {
		return new e();
	}
	static clone(t) {
		return new e(t);
	}
	static fromValues(t, n) {
		return new e(t, n);
	}
	static copy(e, t) {
		return e[0] = t[0], e[1] = t[1], e;
	}
	static set(e, t, n) {
		return e[0] = t, e[1] = n, e;
	}
	static add(e, t, n) {
		return e[0] = t[0] + n[0], e[1] = t[1] + n[1], e;
	}
	static subtract(e, t, n) {
		return e[0] = t[0] - n[0], e[1] = t[1] - n[1], e;
	}
	static sub(e, t, n) {
		return [0, 0];
	}
	static multiply(e, t, n) {
		return e[0] = t[0] * n[0], e[1] = t[1] * n[1], e;
	}
	static mul(e, t, n) {
		return [0, 0];
	}
	static divide(e, t, n) {
		return e[0] = t[0] / n[0], e[1] = t[1] / n[1], e;
	}
	static div(e, t, n) {
		return [0, 0];
	}
	static ceil(e, t) {
		return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e;
	}
	static floor(e, t) {
		return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e;
	}
	static min(e, t, n) {
		return e[0] = Math.min(t[0], n[0]), e[1] = Math.min(t[1], n[1]), e;
	}
	static max(e, t, n) {
		return e[0] = Math.max(t[0], n[0]), e[1] = Math.max(t[1], n[1]), e;
	}
	static round(e, t) {
		return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e;
	}
	static scale(e, t, n) {
		return e[0] = t[0] * n, e[1] = t[1] * n, e;
	}
	static scaleAndAdd(e, t, n, r) {
		return e[0] = t[0] + n[0] * r, e[1] = t[1] + n[1] * r, e;
	}
	static distance(e, t) {
		return Math.hypot(t[0] - e[0], t[1] - e[1]);
	}
	static dist(e, t) {
		return 0;
	}
	static squaredDistance(e, t) {
		let n = t[0] - e[0], r = t[1] - e[1];
		return n * n + r * r;
	}
	static sqrDist(e, t) {
		return 0;
	}
	static magnitude(e) {
		let t = e[0], n = e[1];
		return Math.sqrt(t * t + n * n);
	}
	static mag(e) {
		return 0;
	}
	static length(e) {
		return 0;
	}
	static len(e) {
		return 0;
	}
	static squaredLength(e) {
		let t = e[0], n = e[1];
		return t * t + n * n;
	}
	static sqrLen(e, t) {
		return 0;
	}
	static negate(e, t) {
		return e[0] = -t[0], e[1] = -t[1], e;
	}
	static inverse(e, t) {
		return e[0] = 1 / t[0], e[1] = 1 / t[1], e;
	}
	static abs(e, t) {
		return e[0] = Math.abs(t[0]), e[1] = Math.abs(t[1]), e;
	}
	static normalize(e, t) {
		let n = t[0], r = t[1], i = n * n + r * r;
		return i > 0 && (i = 1 / Math.sqrt(i)), e[0] = t[0] * i, e[1] = t[1] * i, e;
	}
	static dot(e, t) {
		return e[0] * t[0] + e[1] * t[1];
	}
	static cross(e, t, n) {
		let r = t[0] * n[1] - t[1] * n[0];
		return e[0] = e[1] = 0, e[2] = r, e;
	}
	static lerp(e, t, n, r) {
		let i = t[0], a = t[1];
		return e[0] = i + r * (n[0] - i), e[1] = a + r * (n[1] - a), e;
	}
	static transformMat2(e, t, n) {
		let r = t[0], i = t[1];
		return e[0] = n[0] * r + n[2] * i, e[1] = n[1] * r + n[3] * i, e;
	}
	static transformMat2d(e, t, n) {
		let r = t[0], i = t[1];
		return e[0] = n[0] * r + n[2] * i + n[4], e[1] = n[1] * r + n[3] * i + n[5], e;
	}
	static transformMat3(e, t, n) {
		let r = t[0], i = t[1];
		return e[0] = n[0] * r + n[3] * i + n[6], e[1] = n[1] * r + n[4] * i + n[7], e;
	}
	static transformMat4(e, t, n) {
		let r = t[0], i = t[1];
		return e[0] = n[0] * r + n[4] * i + n[12], e[1] = n[1] * r + n[5] * i + n[13], e;
	}
	static rotate(e, t, n, r) {
		let i = t[0] - n[0], a = t[1] - n[1], o = Math.sin(r), s = Math.cos(r);
		return e[0] = i * s - a * o + n[0], e[1] = i * o + a * s + n[1], e;
	}
	static angle(e, t) {
		let n = e[0], r = e[1], i = t[0], a = t[1], o = Math.sqrt(n * n + r * r) * Math.sqrt(i * i + a * a), s = o && (n * i + r * a) / o;
		return Math.acos(Math.min(Math.max(s, -1), 1));
	}
	static zero(e) {
		return e[0] = 0, e[1] = 0, e;
	}
	static exactEquals(e, t) {
		return e[0] === t[0] && e[1] === t[1];
	}
	static equals(e, t) {
		let n = e[0], r = e[1], i = t[0], a = t[1];
		return Math.abs(n - i) <= 1e-6 * Math.max(1, Math.abs(n), Math.abs(i)) && Math.abs(r - a) <= 1e-6 * Math.max(1, Math.abs(r), Math.abs(a));
	}
	static str(e) {
		return `Vec2(${e.join(", ")})`;
	}
};
m.prototype.sub = m.prototype.subtract, m.prototype.mul = m.prototype.multiply, m.prototype.div = m.prototype.divide, m.prototype.dist = m.prototype.distance, m.prototype.sqrDist = m.prototype.squaredDistance, m.sub = m.subtract, m.mul = m.multiply, m.div = m.divide, m.dist = m.distance, m.sqrDist = m.squaredDistance, m.sqrLen = m.squaredLength, m.mag = m.magnitude, m.length = m.magnitude, m.len = m.magnitude;
//#endregion
//#region src/utils/resource.ts
function h(e) {
	return new Promise((t, n) => {
		let r = document.createElement("img");
		r.onload = () => t(r), r.onerror = n, r.src = e, r.crossOrigin = "anonymous", r.loading = "eager";
	});
}
function g(e) {
	return new Promise((t, n) => {
		let r = document.createElement("video"), i = !1, a = !1, o = !1;
		r.addEventListener("playing", () => {
			i = !0, s();
		}, !0), r.addEventListener("timeupdate", () => {
			a = !0, s();
		}, !0), r.addEventListener("error", (e) => {
			o = !0, n(e);
		}, !0);
		function s() {
			i && a && !o && t(r);
		}
		r.src = e, r.playsInline = !0, r.crossOrigin = "anonymous", r.autoplay = !0, r.loop = !0, r.muted = !0, r.play();
	});
}
function _(e, t = !1) {
	return t ? g(e) : h(e);
}
function v(e) {
	return new Promise((t, n) => {
		(e instanceof HTMLImageElement ? e.complete : e.readyState >= 3) ? t(e) : (e.onload = () => t(e), e.onerror = n);
	});
}
//#endregion
//#region src/bg-render/img.ts
function y(e, t, n) {
	let r = e.data, i = e.width, a = e.height, o, s, c, l, u, d, f, p, m, h, g, _, v, y = i - 1, b = a - 1, x = t + 1, S = t + x, C = t + 1, w = 1 / (S * (t + C)), T = [], E = [], D = [], O = [], k = [], A = [];
	for (; n-- > 0;) {
		for (v = _ = 0, d = 0; d < a; d++) {
			for (o = r[v] * x, s = r[v + 1] * x, c = r[v + 2] * x, l = r[v + 3] * x, f = 1; f <= t; f++) p = v + ((f > y ? y : f) << 2), o += r[p++], s += r[p++], c += r[p++], l += r[p];
			for (u = 0; u < i; u++) T[_] = o, E[_] = s, D[_] = c, O[_] = l, d === 0 && (k[u] = Math.min(u + x, y) << 2, A[u] = Math.max(u - t, 0) << 2), m = v + k[u], h = v + A[u], o += r[m++] - r[h++], s += r[m++] - r[h++], c += r[m++] - r[h++], l += r[m] - r[h], _++;
			v += i << 2;
		}
		for (u = 0; u < i; u++) {
			for (g = u, o = T[g] * C, s = E[g] * C, c = D[g] * C, l = O[g] * C, f = 1; f <= t; f++) g += f > b ? 0 : i, o += T[g], s += E[g], c += D[g], l += O[g];
			for (_ = u << 2, d = 0; d < a; d++) r[_] = o * w + .5 | 0, r[_ + 1] = s * w + .5 | 0, r[_ + 2] = c * w + .5 | 0, r[_ + 3] = l * w + .5 | 0, u === 0 && (k[d] = Math.min(d + C, b) * i, A[d] = Math.max(d - t, 0) * i), m = u + k[d], h = u + A[d], o += T[m] - T[h], s += E[m] - E[h], c += D[m] - D[h], l += O[m] - O[h], _ += i << 2;
		}
	}
}
//#endregion
//#region src/bg-render/mesh-renderer/cp-presets.ts
var b = (e, t, n, r, i = 0, a = 0, o = 1, s = 1) => Object.freeze({
	cx: e,
	cy: t,
	x: n,
	y: r,
	ur: i,
	vr: a,
	up: o,
	vp: s
}), x = (e, t, n) => Object.freeze({
	width: e,
	height: t,
	conf: n
}), S = [
	x(5, 5, [
		b(0, 0, -1, -1, 0, 0, 1, 1),
		b(1, 0, -.5, -1, 0, 0, 1, 1),
		b(2, 0, 0, -1, 0, 0, 1, 1),
		b(3, 0, .5, -1, 0, 0, 1, 1),
		b(4, 0, 1, -1, 0, 0, 1, 1),
		b(0, 1, -1, -.5, 0, 0, 1, 1),
		b(1, 1, -.5, -.5, 0, 0, 1, 1),
		b(2, 1, -.0052029684413368305, -.6131420587090777, 0, 0, 1, 1),
		b(3, 1, .5884227308309977, -.3990805107556692, 0, 0, 1, 1),
		b(4, 1, 1, -.5, 0, 0, 1, 1),
		b(0, 2, -1, 0, 0, 0, 1, 1),
		b(1, 2, -.4210024670505933, -.11895058380429502, 0, 0, 1, 1),
		b(2, 2, -.1019613423315412, -.023812118047224606, 0, -47, .629, .849),
		b(3, 2, .40275125660925437, -.06345314544600389, 0, 0, 1, 1),
		b(4, 2, 1, 0, 0, 0, 1, 1),
		b(0, 3, -1, .5, 0, 0, 1, 1),
		b(1, 3, .06801958477287173, .5205913248960121, -31, -45, 1, 1),
		b(2, 3, .21446469120128908, .29331610114301043, 6, -56, .566, 1.321),
		b(3, 3, .5, .5, 0, 0, 1, 1),
		b(4, 3, 1, .5, 0, 0, 1, 1),
		b(0, 4, -1, 1, 0, 0, 1, 1),
		b(1, 4, -.31378372841550195, 1, 0, 0, 1, 1),
		b(2, 4, .26153633255328046, 1, 0, 0, 1, 1),
		b(3, 4, .5, 1, 0, 0, 1, 1),
		b(4, 4, 1, 1, 0, 0, 1, 1)
	]),
	x(4, 4, [
		b(0, 0, -1, -1, 0, 0, 1, 1),
		b(1, 0, -.33333333333333337, -1, 0, 0, 1, 1),
		b(2, 0, .33333333333333326, -1, 0, 0, 1, 1),
		b(3, 0, 1, -1, 0, 0, 1, 1),
		b(0, 1, -1, -.04495399932657351, 0, 0, 1, 1),
		b(1, 1, -.24056117520129328, -.22465999020104, 0, 0, 1, 1),
		b(2, 1, .334758885767489, -.00531297192779423, 0, 0, 1, 1),
		b(3, 1, .9989920470678106, -.3382976020775408, 8, 0, .566, 1.792),
		b(0, 2, -1, .33333333333333326, 0, 0, 1, 1),
		b(1, 2, -.3425497314639411, -27501607956947893e-21, 0, 0, 1, 1),
		b(2, 2, .3321437945812673, .1981776353859399, 0, 0, 1, 1),
		b(3, 2, 1, .0766118180296832, 0, 0, 1, 1),
		b(0, 3, -1, 1, 0, 0, 1, 1),
		b(1, 3, -.33333333333333337, 1, 0, 0, 1, 1),
		b(2, 3, .33333333333333326, 1, 0, 0, 1, 1),
		b(3, 3, 1, 1, 0, 0, 1, 1)
	]),
	x(4, 4, [
		b(0, 0, -1, -1, 0, 0, 1, 2.075),
		b(1, 0, -.33333333333333337, -1, 0, 0, 1, 1),
		b(2, 0, .33333333333333326, -1, 0, 0, 1, 1),
		b(3, 0, 1, -1, 0, 0, 1, 1),
		b(0, 1, -1, -.4545779491139603, 0, 0, 1, 1),
		b(1, 1, -.33333333333333337, -.33333333333333337, 0, 0, 1, 1),
		b(2, 1, .0889403142626457, -.6025711180694033, -32, 45, 1, 1),
		b(3, 1, 1, -.33333333333333337, 0, 0, 1, 1),
		b(0, 2, -1, -.07402408608567845, 1, 0, 1, .094),
		b(1, 2, -.2719422694359541, .09775369930903222, 25, -18, 1.321, 0),
		b(2, 2, .19877414408395877, .4307383294587789, 48, -40, .755, .975),
		b(3, 2, 1, .33333333333333326, -37, 0, 1, 1),
		b(0, 3, -1, 1, 0, 0, 1, 1),
		b(1, 3, -.33333333333333337, 1, 0, 0, 1, 1),
		b(2, 3, .5125850864305672, 1, -20, -18, 0, 1.604),
		b(3, 3, 1, 1, 0, 0, 1, 1)
	]),
	x(5, 5, [
		b(0, 0, -1, -1, 0, 0, 1, 1),
		b(1, 0, -.4501953125, -1, 0, 55, 1, 2.075),
		b(2, 0, .1953125, -1, 0, 0, 1, 1),
		b(3, 0, .4580078125, -1, 0, -25, 1, 1),
		b(4, 0, 1, -1, 0, 0, 1, 1),
		b(0, 1, -1, -.2514475377525607, -16, 0, 2.327, .943),
		b(1, 1, -.55859375, -.6609325945787148, 47, 0, 2.358, .377),
		b(2, 1, .232421875, -.5244375756366635, -66, -25, 1.855, 1.164),
		b(3, 1, .685546875, -.3753706470552125, 0, 0, 1, 1),
		b(4, 1, 1, -.6699125300354287, 0, 0, 1, 1),
		b(0, 2, -1, .035910396862284255, 0, 0, 1, 1),
		b(1, 2, -.4921875, .005378616309457018, 90, 23, 1, 1.981),
		b(2, 2, .021484375, -.1365043639066228, 0, 42, 1, 1),
		b(3, 2, .4765625, .05925822904974043, -30, 0, 1.95, .44),
		b(4, 2, 1, .251428847823418, 0, 0, 1, 1),
		b(0, 3, -1, .6968336464764276, -68, 0, 1, .786),
		b(1, 3, -.6904296875, .5890744209958608, -68, 0, 1, 1),
		b(2, 3, .1845703125, .3879238667654693, 61, 0, 1, 1),
		b(3, 3, .60546875, .4633553246018661, -47, -59, .849, 1.73),
		b(4, 3, 1, .6214021886400309, -33, 0, .377, 1.604),
		b(0, 4, -1, 1, 0, 0, 1, 1),
		b(1, 4, -.5, 1, 0, -73, 1, 1),
		b(2, 4, -.3271484375, 1, 0, -24, .314, 2.704),
		b(3, 4, .5, 1, 0, 0, 1, 1),
		b(4, 4, 1, 1, 0, 0, 1, 1)
	]),
	x(5, 5, [
		b(0, 0, -1, -1),
		b(1, 0, -.6393, -1, 0, 0, 1, 2.3884),
		b(2, 0, 0, -1),
		b(3, 0, .5, -1),
		b(4, 0, 1, -1),
		b(0, 1, -1, -.2301),
		b(1, 1, -.6934, -.331, 0, -.7188, 1, 1.063),
		b(2, 1, -.0082, -.6814, -.2583, 0, 1.0964, 1),
		b(3, 1, .5836, -.531, .7029, 0, 1.5466, 1),
		b(4, 1, 1, -.6407),
		b(0, 2, -1, .2973, 0, 0, 1.8352, 1),
		b(1, 2, -.4082, .0602),
		b(2, 2, -.1803, -.3646, -.2998, 0, 1.1513, 1),
		b(3, 2, .477, -.1027, .8903, -.1882, 1.0807, .8551),
		b(4, 2, 1, -.2973),
		b(0, 3, -1, .7628, 0, 0, 2.3868, 1),
		b(1, 3, -.2525, .4814, -.8406, -1.6199, 1.4093, 1.2215),
		b(2, 3, .3607, .2814, -1.0713, -.0529, 1.0025, .7611),
		b(3, 3, .4885, .623, 0, .8184, 1, 1.2876),
		b(4, 3, 1, .5),
		b(0, 4, -1, 1),
		b(1, 4, -.4033, 1),
		b(2, 4, .2672, 1),
		b(3, 4, .5967, 1),
		b(4, 4, 1, 1)
	]),
	x(5, 5, [
		b(0, 0, -1, -1),
		b(1, 0, -.2197, -1),
		b(2, 0, .0197, -1),
		b(3, 0, .8033, -1),
		b(4, 0, 1, -1),
		b(0, 1, -1, -.5451),
		b(1, 1, -.4885, -.4035, -1.0246, -.2268, 1.1936, .8005),
		b(2, 1, -.1213, -.2867, 0, -.6981, 1, .809),
		b(3, 1, .3246, -.5628, 0, -1.2188, 1, 1.044),
		b(4, 1, 1, -.3292),
		b(0, 2, -1, .1416),
		b(1, 2, -.341, -.0142, 0, -.4004, 1, 1.1293),
		b(2, 2, -.0393, -.023, .2915, -.373, 1.044, .9879),
		b(3, 2, .3148, -.0673, -.7853, -.8962, 1.4709, 1.0247),
		b(4, 2, 1, .1912),
		b(0, 3, -1, .5),
		b(1, 3, -.2689, .2743, .3404, -.5248, 1.0184, .4391),
		b(2, 3, .0721, .269, .5302, .1244, .6723, .3225),
		b(3, 3, .4148, .3894, -.6977, -.6783, .8094, .9247),
		b(4, 3, 1, .446),
		b(0, 4, -1, 1),
		b(1, 4, -.7311, 1),
		b(2, 4, .323, 1),
		b(3, 4, .6393, 1),
		b(4, 4, 1, 1)
	])
], C = (e, t) => Math.random() * (t - e) + e;
function w(e, t, n) {
	return Math.min(Math.max(e, t), n);
}
function T(e, t, n) {
	let r = w((n - e) / (t - e), 0, 1);
	return r * r * (3 - 2 * r);
}
function E(e, t, n, r = 2, i = .5, a = .1) {
	let o = [], s = i;
	for (let r = 0; r < n; r++) {
		o[r] = [];
		for (let n = 0; n < t; n++) o[r][n] = e[r * t + n];
	}
	let c = [
		[
			1,
			2,
			1
		],
		[
			2,
			4,
			2
		],
		[
			1,
			2,
			1
		]
	];
	for (let e = 0; e < r; e++) {
		let e = [];
		for (let r = 0; r < n; r++) {
			e[r] = [];
			for (let i = 0; i < t; i++) {
				if (i === 0 || i === t - 1 || r === 0 || r === n - 1) {
					e[r][i] = o[r][i];
					continue;
				}
				let a = 0, l = 0, u = 0, d = 0, f = 0, p = 0;
				for (let e = -1; e <= 1; e++) for (let t = -1; t <= 1; t++) {
					let n = c[e + 1][t + 1], s = o[r + e][i + t];
					a += s.x * n, l += s.y * n, u += s.ur * n, d += s.vr * n, f += s.up * n, p += s.vp * n;
				}
				let m = a / 16, h = l / 16, g = u / 16, _ = d / 16, v = f / 16, y = p / 16, x = o[r][i], S = x.x * (1 - s) + m * s, C = x.y * (1 - s) + h * s, w = x.ur * (1 - s) + g * s, T = x.vr * (1 - s) + _ * s, E = x.up * (1 - s) + v * s, D = x.vp * (1 - s) + y * s;
				e[r][i] = b(i, r, S, C, w, T, E, D);
			}
		}
		o = e, s = Math.min(1, Math.max(s + a, 0));
	}
	for (let r = 0; r < n; r++) for (let n = 0; n < t; n++) e[r * t + n] = o[r][n];
}
function D(e, t) {
	return O(Math.sin(e * 12.9898 + t * 78.233) * 43758.5453);
}
function O(e) {
	return e - Math.floor(e);
}
function k(e, t) {
	let n = Math.floor(e), r = Math.floor(t), i = n + 1, a = r + 1, o = e - n, s = t - r, c = o * o * (3 - 2 * o), l = s * s * (3 - 2 * s), u = D(n, r), d = D(i, r), f = D(n, a), p = D(i, a), m = u * (1 - c) + d * c, h = f * (1 - c) + p * c;
	return m * (1 - l) + h * l;
}
function A(e, t, n, r = .001) {
	let i = e(t + r, n), a = e(t - r, n), o = e(t, n + r), s = e(t, n - r), c = (i - a) / (2 * r), l = (o - s) / (2 * r), u = Math.sqrt(c * c + l * l) || 1;
	return [c / u, l / u];
}
function j(e, t, n = C(.4, .6), r = C(.3, .6), i = .8, a = Math.floor(C(3, 5)), o = C(.2, .3), s = C(-.1, -.05)) {
	let c = e ?? Math.floor(C(3, 6)), l = t ?? Math.floor(C(3, 6)), u = [], d = c === 1 ? 0 : 2 / (c - 1), f = l === 1 ? 0 : 2 / (l - 1);
	for (let e = 0; e < l; e++) for (let t = 0; t < c; t++) {
		let a = (c === 1 ? 0 : t / (c - 1)) * 2 - 1, o = (l === 1 ? 0 : e / (l - 1)) * 2 - 1, s = t === 0 || t === c - 1 || e === 0 || e === l - 1, p = s ? 0 : C(-n * d, n * d), m = s ? 0 : C(-n * f, n * f), h = a + p, g = o + m, _ = s ? 0 : C(-60, 60), v = s ? 0 : C(-60, 60), y = s ? 1 : C(.8, 1.2), x = s ? 1 : C(.8, 1.2);
		if (!s) {
			let e = (a + 1) / 2, t = (o + 1) / 2, [n, s] = A(k, e, t, .001), c = n * r, l = s * r, u = T(0, 1, Math.min(e, 1 - e, t, 1 - t));
			c *= u, l *= u, h = h * (1 - i) + (h + c) * i, g = g * (1 - i) + (g + l) * i;
		}
		u.push(b(t, e, h, g, _, v, y, x));
	}
	return E(u, c, l, a, o, s), x(c, l, u);
}
//#endregion
//#region src/bg-render/mesh-renderer/mesh.frag.glsl?raw
var M = "precision highp float;\r\n\r\nvarying vec3 v_color;\r\nvarying vec2 v_uv;\r\nuniform sampler2D u_texture;\r\nuniform float u_time;\r\nuniform float u_volume;\r\nuniform float u_alpha;\r\n\r\n// 预计算常量\r\nconst float INV_255 = 1.0 / 255.0;\r\nconst float HALF_INV_255 = 0.5 / 255.0;\r\nconst float GRADIENT_NOISE_A = 52.9829189;\r\nconst vec2 GRADIENT_NOISE_B = vec2(0.06711056, 0.00583715);\r\n\r\n/* Gradient noise from Jorge Jimenez's presentation: */\r\n/* http://www.iryoku.com/next-generation-post-processing-in-call-of-duty-advanced-warfare */\r\nfloat gradientNoise(in vec2 uv) {\r\n    return fract(GRADIENT_NOISE_A * fract(dot(uv, GRADIENT_NOISE_B)));\r\n}\r\n\r\n// 优化的旋转函数，避免重复计算sin/cos\r\nvec2 rot(vec2 v, float angle) {\r\n    float s = sin(angle);\r\n    float c = cos(angle);\r\n    return vec2(c * v.x - s * v.y, s * v.x + c * v.y);\r\n}\r\n\r\nvoid main() {\r\n    // 合并计算以减少指令数\r\n    float volumeEffect = u_volume * 2.0;\r\n    float timeVolume = u_time + u_volume;\r\n    \r\n    float dither = INV_255 * gradientNoise(gl_FragCoord.xy) - HALF_INV_255;\r\n    vec2 centeredUV = v_uv - vec2(0.2);\r\n    vec2 rotatedUV = rot(centeredUV, timeVolume * 2.0);\r\n    vec2 finalUV = rotatedUV * max(0.001, 1.0 - volumeEffect) + vec2(0.5);\r\n    \r\n    vec4 result = texture2D(u_texture, finalUV);\r\n    \r\n    float alphaVolumeFactor = u_alpha * max(0.5, 1.0 - u_volume * 0.5);\r\n    result.rgb *= v_color * alphaVolumeFactor;\r\n    result.a *= alphaVolumeFactor;\r\n    \r\n    result.rgb += vec3(dither);\r\n    \r\n    float dist = distance(v_uv, vec2(0.5));\r\n    float vignette = smoothstep(0.8, 0.3, dist);\r\n    float mask = 0.6 + vignette * 0.4;\r\n    result.rgb *= mask;\r\n    \r\n    gl_FragColor = result;\r\n}\r\n", N = "precision highp float;\n\nattribute vec2 a_pos;\nattribute vec3 a_color;\nattribute vec2 a_uv;\nvarying vec3 v_color;\nvarying vec2 v_uv;\n\nuniform float u_aspect;\n\nvoid main() {\n    v_color = a_color;\n    v_uv = a_uv;\n    vec2 pos = a_pos;\n    if (u_aspect > 1.0) {\n        pos.y *= u_aspect;\n    } else {\n        pos.x /= u_aspect;\n    }\n    gl_Position = vec4(pos, 0.0, 1.0);\n}\n", P = "\nattribute vec2 a_pos;\nvarying vec2 v_uv;\nvoid main() {\n    gl_Position = vec4(a_pos, 0.0, 1.0);\n    v_uv = a_pos * 0.5 + 0.5;\n}\n", F = "\nprecision mediump float;\nvarying vec2 v_uv;\nuniform sampler2D u_texture;\nuniform float u_alpha;\nvoid main() {\n    vec4 color = texture2D(u_texture, v_uv);\n    gl_FragColor = vec4(color.rgb, color.a * u_alpha);\n}\n";
function ee(e) {
	return -(Math.cos(Math.PI * e) - 1) / 2;
}
var te = class {
	gl;
	program;
	vertexShader;
	fragmentShader;
	attrs;
	constructor(e, t, n, r = "unknown") {
		this.label = r, this.gl = e, this.vertexShader = this.createShader(e.VERTEX_SHADER, t), this.fragmentShader = this.createShader(e.FRAGMENT_SHADER, n), this.program = this.createProgram();
		let i = e.getProgramParameter(this.program, e.ACTIVE_ATTRIBUTES), a = {};
		for (let t = 0; t < i; t++) {
			let n = e.getActiveAttrib(this.program, t);
			if (!n) continue;
			let r = e.getAttribLocation(this.program, n.name);
			r !== -1 && (a[n.name] = r);
		}
		this.attrs = a;
	}
	createShader(e, t) {
		let n = this.gl, r = n.createShader(e);
		if (!r) throw Error("Failed to create shader");
		if (n.shaderSource(r, t), n.compileShader(r), !n.getShaderParameter(r, n.COMPILE_STATUS)) throw Error(`Failed to compile shader for type ${e} "${this.label}": ${n.getShaderInfoLog(r)}`);
		return r;
	}
	createProgram() {
		let e = this.gl, t = e.createProgram();
		if (!t) throw Error("Failed to create program");
		if (e.attachShader(t, this.vertexShader), e.attachShader(t, this.fragmentShader), e.linkProgram(t), e.validateProgram(t), !e.getProgramParameter(t, e.LINK_STATUS)) {
			let n = e.getProgramInfoLog(t);
			throw e.deleteProgram(t), Error(`Failed to link program "${this.label}": ${n}`);
		}
		return t;
	}
	use() {
		this.gl.useProgram(this.program);
	}
	notFoundUniforms = /* @__PURE__ */ new Set();
	warnUniformNotFound(e) {
		this.notFoundUniforms.has(e) || (this.notFoundUniforms.add(e), console.warn(`Failed to get uniform location for program "${this.label}": ${e}`));
	}
	setUniform1f(e, t) {
		let n = this.gl, r = n.getUniformLocation(this.program, e);
		r ? n.uniform1f(r, t) : this.warnUniformNotFound(e);
	}
	setUniform2f(e, t, n) {
		let r = this.gl, i = r.getUniformLocation(this.program, e);
		i ? r.uniform2f(i, t, n) : this.warnUniformNotFound(e);
	}
	setUniform1i(e, t) {
		let n = this.gl, r = n.getUniformLocation(this.program, e);
		r ? n.uniform1i(r, t) : this.warnUniformNotFound(e);
	}
	dispose() {
		let e = this.gl;
		e.deleteShader(this.vertexShader), e.deleteShader(this.fragmentShader), e.deleteProgram(this.program);
	}
}, ne = class {
	vertexWidth = 0;
	vertexHeight = 0;
	vertexBuffer;
	indexBuffer;
	vertexData;
	indexData;
	vertexIndexLength = 0;
	wireFrame = !1;
	constructor(e, t, n, r) {
		this.gl = e, this.attrPos = t, this.attrColor = n, this.attrUV = r;
		let i = e.createBuffer();
		if (!i) throw Error("Failed to create vertex buffer");
		this.vertexBuffer = i;
		let a = e.createBuffer();
		if (!a) throw Error("Failed to create index buffer");
		this.indexBuffer = a, this.bind(), this.vertexData = new Float32Array(), this.indexData = new Uint16Array(), this.resize(2, 2), this.update();
	}
	setWireFrame(e) {
		this.wireFrame = e, this.resize(this.vertexWidth, this.vertexHeight);
	}
	setVertexPos(e, t, n, r) {
		let i = (e + t * this.vertexWidth) * 7;
		if (i >= this.vertexData.length - 1) {
			console.warn("Vertex position out of range", i, this.vertexData.length);
			return;
		}
		this.vertexData[i] = n, this.vertexData[i + 1] = r;
	}
	setVertexColor(e, t, n, r, i) {
		let a = (e + t * this.vertexWidth) * 7 + 2;
		if (a >= this.vertexData.length - 2) {
			console.warn("Vertex color out of range", a, this.vertexData.length);
			return;
		}
		this.vertexData[a] = n, this.vertexData[a + 1] = r, this.vertexData[a + 2] = i;
	}
	setVertexUV(e, t, n, r) {
		let i = (e + t * this.vertexWidth) * 7 + 5;
		if (i >= this.vertexData.length - 1) {
			console.warn("Vertex UV out of range", i, this.vertexData.length);
			return;
		}
		this.vertexData[i] = n, this.vertexData[i + 1] = r;
	}
	setVertexData(e, t, n, r, i, a, o, s, c) {
		let l = (e + t * this.vertexWidth) * 7;
		if (l >= this.vertexData.length - 6) {
			console.warn("Vertex data out of range", l, this.vertexData.length);
			return;
		}
		let u = this.vertexData;
		u[l] = n, u[l + 1] = r, u[l + 2] = i, u[l + 3] = a, u[l + 4] = o, u[l + 5] = s, u[l + 6] = c;
	}
	getVertexIndexLength() {
		return this.vertexIndexLength;
	}
	draw() {
		let e = this.gl;
		this.wireFrame ? e.drawElements(e.LINES, this.vertexIndexLength, e.UNSIGNED_SHORT, 0) : e.drawElements(e.TRIANGLES, this.vertexIndexLength, e.UNSIGNED_SHORT, 0);
	}
	resize(e, t) {
		this.vertexWidth = e, this.vertexHeight = t, this.vertexIndexLength = e * t * 6, this.wireFrame && (this.vertexIndexLength = e * t * 10);
		let n = new Float32Array(e * t * 7), r = new Uint16Array(this.vertexIndexLength);
		this.vertexData = n, this.indexData = r;
		for (let n = 0; n < t; n++) for (let r = 0; r < e; r++) {
			let i = r / (e - 1) * 2 - 1, a = n / (t - 1) * 2 - 1;
			this.setVertexPos(r, n, i || 0, a || 0), this.setVertexColor(r, n, 1, 1, 1), this.setVertexUV(r, n, r / (e - 1), n / (t - 1));
		}
		for (let n = 0; n < t - 1; n++) for (let t = 0; t < e - 1; t++) if (this.wireFrame) {
			let i = (n * e + t) * 10;
			r[i] = n * e + t, r[i + 1] = n * e + t + 1, r[i + 2] = n * e + t + 1, r[i + 3] = (n + 1) * e + t, r[i + 4] = (n + 1) * e + t, r[i + 5] = (n + 1) * e + t + 1, r[i + 6] = (n + 1) * e + t + 1, r[i + 7] = n * e + t + 1, r[i + 8] = n * e + t, r[i + 9] = (n + 1) * e + t;
		} else {
			let i = (n * e + t) * 6;
			r[i] = n * e + t, r[i + 1] = n * e + t + 1, r[i + 2] = (n + 1) * e + t, r[i + 3] = n * e + t + 1, r[i + 4] = (n + 1) * e + t + 1, r[i + 5] = (n + 1) * e + t;
		}
		let i = this.gl;
		i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.indexBuffer), i.bufferData(i.ELEMENT_ARRAY_BUFFER, this.indexData, i.STATIC_DRAW);
	}
	bind() {
		let e = this.gl;
		e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer), this.attrPos !== void 0 && (e.vertexAttribPointer(this.attrPos, 2, e.FLOAT, !1, 28, 0), e.enableVertexAttribArray(this.attrPos)), this.attrColor !== void 0 && (e.vertexAttribPointer(this.attrColor, 3, e.FLOAT, !1, 28, 8), e.enableVertexAttribArray(this.attrColor)), this.attrUV !== void 0 && (e.vertexAttribPointer(this.attrUV, 2, e.FLOAT, !1, 28, 20), e.enableVertexAttribArray(this.attrUV));
	}
	update() {
		let e = this.gl;
		e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer), e.bufferData(e.ARRAY_BUFFER, this.vertexData, e.DYNAMIC_DRAW);
	}
	dispose() {
		this.gl.deleteBuffer(this.vertexBuffer), this.gl.deleteBuffer(this.indexBuffer);
	}
}, re = class {
	color = f.fromValues(1, 1, 1);
	location = m.fromValues(0, 0);
	uTangent = m.fromValues(0, 0);
	vTangent = m.fromValues(0, 0);
	_uRot = 0;
	_vRot = 0;
	_uScale = 1;
	_vScale = 1;
	constructor() {
		Object.seal(this);
	}
	get uRot() {
		return this._uRot;
	}
	get vRot() {
		return this._vRot;
	}
	set uRot(e) {
		this._uRot = e, this.updateUTangent();
	}
	set vRot(e) {
		this._vRot = e, this.updateVTangent();
	}
	get uScale() {
		return this._uScale;
	}
	get vScale() {
		return this._vScale;
	}
	set uScale(e) {
		this._uScale = e, this.updateUTangent();
	}
	set vScale(e) {
		this._vScale = e, this.updateVTangent();
	}
	updateUTangent() {
		this.uTangent[0] = Math.cos(this._uRot) * this._uScale, this.uTangent[1] = Math.sin(this._uRot) * this._uScale;
	}
	updateVTangent() {
		this.vTangent[0] = -Math.sin(this._vRot) * this._vScale, this.vTangent[1] = Math.cos(this._vRot) * this._vScale;
	}
}, ie = u.fromValues(2, -2, 1, 1, -3, 3, -2, -1, 0, 0, 1, 0, 1, 0, 0, 0), ae = u.clone(ie).transpose();
function oe(e, t, n, r, i, a = u.create()) {
	let o = (e) => e.location[i], s = (e) => e.uTangent[i], c = (e) => e.vTangent[i];
	return a[0] = o(e), a[1] = o(t), a[2] = c(e), a[3] = c(t), a[4] = o(n), a[5] = o(r), a[6] = c(n), a[7] = c(r), a[8] = s(e), a[9] = s(t), a[10] = 0, a[11] = 0, a[12] = s(n), a[13] = s(r), a[14] = 0, a[15] = 0, a;
}
function se(e, t, n, r, i, a = u.create()) {
	let o = (e) => e.color[i];
	return a.fill(0), a[0] = o(e), a[1] = o(t), a[4] = o(n), a[5] = o(r), a;
}
var ce = class {
	_width = 0;
	_height = 0;
	_data = [];
	constructor(e, t) {
		this.resize(e, t), Object.seal(this);
	}
	resize(e, t) {
		this._width = e, this._height = t, this._data = Array(e * t).fill(0);
	}
	set(e, t, n) {
		this._data[e + t * this._width] = n;
	}
	get(e, t) {
		return this._data[e + t * this._width];
	}
	get width() {
		return this._width;
	}
	get height() {
		return this._height;
	}
}, le = class extends ne {
	_subDivisions = 10;
	_controlPoints = new ce(3, 3);
	constructor(e, t, n, r) {
		super(e, t, n, r), this.resizeControlPoints(3, 3), Object.seal(this);
	}
	setWireFrame(e) {
		super.setWireFrame(e), this.updateMesh();
	}
	resetSubdivition(e) {
		this._subDivisions = e, super.resize((this._controlPoints.width - 1) * e, (this._controlPoints.height - 1) * e);
	}
	resizeControlPoints(e, t) {
		if (!(e >= 2 && t >= 2)) throw Error("Control points must be larger than 3x3 or equal");
		this._controlPoints.resize(e, t);
		for (let n = 0; n < t; n++) for (let r = 0; r < e; r++) {
			let i = new re();
			i.location.x = r / (e - 1) * 2 - 1, i.location.y = n / (t - 1) * 2 - 1, i.uTangent.x = 2 / (e - 1), i.vTangent.y = 2 / (t - 1), this._controlPoints.set(r, n, i);
		}
		this.resetSubdivition(this._subDivisions);
	}
	getControlPoint(e, t) {
		return this._controlPoints.get(e, t);
	}
	tempX = u.create();
	tempY = u.create();
	tempR = u.create();
	tempG = u.create();
	tempB = u.create();
	tempXAcc = u.create();
	tempYAcc = u.create();
	tempRAcc = u.create();
	tempGAcc = u.create();
	tempBAcc = u.create();
	tempUx = p.create();
	tempUy = p.create();
	tempUr = p.create();
	tempUg = p.create();
	tempUb = p.create();
	precomputeMatrix(e, t) {
		return t.copy(e).transpose(), u.mul(t, t, ie), u.mul(t, ae, t), t;
	}
	updateMesh() {
		let e = this._subDivisions - 1, t = e * (this._controlPoints.height - 1), n = e * (this._controlPoints.width - 1), r = this._controlPoints.width, i = this._controlPoints.height, a = this._subDivisions, o = 1 / e, s = 1 / n, c = 1 / t, l = new Float32Array(a * 4);
		for (let e = 0; e < a; e++) {
			let t = e * o, n = e * 4;
			l[n] = t ** 3, l[n + 1] = t ** 2, l[n + 2] = t, l[n + 3] = 1;
		}
		for (let e = 0; e < r - 1; e++) for (let t = 0; t < i - 1; t++) {
			let n = this._controlPoints.get(e, t), o = this._controlPoints.get(e, t + 1), u = this._controlPoints.get(e + 1, t), d = this._controlPoints.get(e + 1, t + 1);
			oe(n, o, u, d, "x", this.tempX), oe(n, o, u, d, "y", this.tempY), se(n, o, u, d, "r", this.tempR), se(n, o, u, d, "g", this.tempG), se(n, o, u, d, "b", this.tempB), this.precomputeMatrix(this.tempX, this.tempXAcc), this.precomputeMatrix(this.tempY, this.tempYAcc), this.precomputeMatrix(this.tempR, this.tempRAcc), this.precomputeMatrix(this.tempG, this.tempGAcc), this.precomputeMatrix(this.tempB, this.tempBAcc);
			let f = e / (r - 1), m = t / (i - 1), h = t * a, g = e * a;
			for (let e = 0; e < a; e++) {
				let t = h + e, n = e * 4;
				this.tempUx[0] = l[n], this.tempUx[1] = l[n + 1], this.tempUx[2] = l[n + 2], this.tempUx[3] = l[n + 3], p.transformMat4(this.tempUx, this.tempUx, this.tempXAcc), this.tempUy[0] = l[n], this.tempUy[1] = l[n + 1], this.tempUy[2] = l[n + 2], this.tempUy[3] = l[n + 3], p.transformMat4(this.tempUy, this.tempUy, this.tempYAcc), this.tempUr[0] = l[n], this.tempUr[1] = l[n + 1], this.tempUr[2] = l[n + 2], this.tempUr[3] = l[n + 3], p.transformMat4(this.tempUr, this.tempUr, this.tempRAcc), this.tempUg[0] = l[n], this.tempUg[1] = l[n + 1], this.tempUg[2] = l[n + 2], this.tempUg[3] = l[n + 3], p.transformMat4(this.tempUg, this.tempUg, this.tempGAcc), this.tempUb[0] = l[n], this.tempUb[1] = l[n + 1], this.tempUb[2] = l[n + 2], this.tempUb[3] = l[n + 3], p.transformMat4(this.tempUb, this.tempUb, this.tempBAcc);
				for (let n = 0; n < a; n++) {
					let r = g + n, i = n * 4, a = l[i], o = l[i + 1], u = l[i + 2], d = l[i + 3], p = a * this.tempUx[0] + o * this.tempUx[1] + u * this.tempUx[2] + d * this.tempUx[3], h = a * this.tempUy[0] + o * this.tempUy[1] + u * this.tempUy[2] + d * this.tempUy[3], _ = a * this.tempUr[0] + o * this.tempUr[1] + u * this.tempUr[2] + d * this.tempUr[3], v = a * this.tempUg[0] + o * this.tempUg[1] + u * this.tempUg[2] + d * this.tempUg[3], y = a * this.tempUb[0] + o * this.tempUb[1] + u * this.tempUb[2] + d * this.tempUb[3], b = f + n * s, x = 1 - m - e * c;
					this.setVertexData(t, r, p, h, _, v, y, b, x);
				}
			}
		}
		this.update();
	}
}, ue = class {
	tex;
	constructor(e, t) {
		this.gl = e;
		let n = e.createTexture();
		if (!n) throw Error("Failed to create texture");
		this.tex = n, e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, n), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.MIRRORED_REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.MIRRORED_REPEAT);
	}
	bind() {
		this.gl.bindTexture(this.gl.TEXTURE_2D, this.tex);
	}
	dispose() {
		this.gl.deleteTexture(this.tex);
	}
};
function de(e, t) {
	if ("OffscreenCanvas" in window) return new OffscreenCanvas(e, t);
	let n = document.createElement("canvas");
	return n.width = e, n.height = t, n;
}
var fe = class extends c {
	gl;
	lastFrameTime = 0;
	frameTime = 0;
	lastTickTime = 0;
	smoothedVolume = 0;
	volume = 0;
	tickHandle = 0;
	maxFPS = 60;
	paused = !1;
	staticMode = !1;
	mainProgram;
	quadProgram;
	quadBuffer;
	fbo = null;
	fboTexture = null;
	manualControl = !1;
	reduceImageSizeCanvas = de(32, 32);
	targetSize = m.fromValues(0, 0);
	currentSize = m.fromValues(0, 0);
	isNoCover = !0;
	meshStates = [];
	_disposed = !1;
	frameCount = 0;
	lastFPSUpdate = 0;
	currentFPS = 0;
	enablePerformanceMonitoring = !1;
	setManualControl(e) {
		this.manualControl = e;
	}
	setWireFrame(e) {
		for (let t of this.meshStates) t.mesh.setWireFrame(e);
	}
	getControlPoint(e, t) {
		return this.meshStates[this.meshStates.length - 1]?.mesh?.getControlPoint(e, t);
	}
	resizeControlPoints(e, t) {
		return this.meshStates[this.meshStates.length - 1]?.mesh?.resizeControlPoints(e, t);
	}
	resetSubdivition(e) {
		return this.meshStates[this.meshStates.length - 1]?.mesh?.resetSubdivition(e);
	}
	onTick(e) {
		if (this.tickHandle = 0, this.paused || this._disposed) return;
		this.updatePerformanceStats(e);
		let t = 1e3 / this.maxFPS, n = e - this.lastTickTime;
		if (n < t) {
			this.requestTick();
			return;
		}
		Number.isNaN(this.lastFrameTime) && (this.lastFrameTime = e);
		let r = e - this.lastFrameTime;
		this.lastFrameTime = e, this.lastTickTime = e - n % t, this.frameTime += r * this.flowSpeed, this.onRedraw(this.frameTime, r) && this.staticMode ? this.staticMode && (this.lastFrameTime = NaN) : this.requestTick();
	}
	checkIfResize() {
		let [e, t] = [this.targetSize.x, this.targetSize.y], [n, r] = [this.currentSize.x, this.currentSize.y];
		if (e !== n || t !== r) {
			super.onResize(e, t);
			let n = this.gl;
			n.bindFramebuffer(n.FRAMEBUFFER, null), n.viewport(0, 0, e, t), this.currentSize.x = e, this.currentSize.y = t, e > 0 && t > 0 && this.updateFBO(e, t);
		}
	}
	updateFBO(e, t) {
		let n = this.gl;
		this.fbo && n.deleteFramebuffer(this.fbo), this.fboTexture && n.deleteTexture(this.fboTexture), this.fboTexture = n.createTexture(), n.bindTexture(n.TEXTURE_2D, this.fboTexture), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, e, t, 0, n.RGBA, n.UNSIGNED_BYTE, null), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), this.fbo = n.createFramebuffer(), n.bindFramebuffer(n.FRAMEBUFFER, this.fbo), n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, this.fboTexture, 0), n.bindFramebuffer(n.FRAMEBUFFER, null);
	}
	onRedraw(e, t) {
		let n = this.meshStates[this.meshStates.length - 1], r = !1, i = t / 500;
		if (n) if (n.mesh.bind(), this.manualControl && n.mesh.updateMesh(), this.isNoCover) {
			let e = !1;
			for (let t = this.meshStates.length - 1; t >= 0; t--) {
				let n = this.meshStates[t];
				n.alpha <= -.1 ? (n.mesh.dispose(), n.texture.dispose(), this.meshStates.splice(t, 1)) : (n.alpha = Math.max(-.1, n.alpha - i), e = !0);
			}
			r = !e;
		} else {
			if (n.alpha >= 1.1) {
				let e = this.meshStates.splice(0, this.meshStates.length - 1);
				for (let t of e) t.mesh.dispose(), t.texture.dispose();
			} else n.alpha = Math.min(1.1, n.alpha + i);
			r = this.meshStates.length === 1 && n.alpha >= 1.1;
		}
		let a = this.gl;
		if (this.checkIfResize(), !this.fbo) return r;
		a.bindFramebuffer(a.FRAMEBUFFER, null), a.clearColor(0, 0, 0, 0), a.clear(a.COLOR_BUFFER_BIT);
		let o = Math.min(1, t / 100);
		this.smoothedVolume += (this.volume - this.smoothedVolume) * o;
		for (let t of this.meshStates) {
			a.bindFramebuffer(a.FRAMEBUFFER, this.fbo), a.disable(a.BLEND), a.clearColor(0, 0, 0, 0), a.clear(a.COLOR_BUFFER_BIT), this.mainProgram.use(), a.activeTexture(a.TEXTURE0), this.mainProgram.setUniform1f("u_time", e / 1e4), this.mainProgram.setUniform1f("u_aspect", this.manualControl ? 1 : this.canvas.width / this.canvas.height), this.mainProgram.setUniform1i("u_texture", 0), this.mainProgram.setUniform1f("u_volume", this.volume), this.mainProgram.setUniform1f("u_alpha", 1), t.texture.bind(), t.mesh.bind(), t.mesh.draw(), a.bindFramebuffer(a.FRAMEBUFFER, null), a.enable(a.BLEND), a.blendFuncSeparate(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA, a.ONE, a.ONE_MINUS_SRC_ALPHA), this.quadProgram.use(), this.quadProgram.setUniform1i("u_texture", 0), this.quadProgram.setUniform1f("u_alpha", ee(Math.min(1, Math.max(0, t.alpha)))), a.activeTexture(a.TEXTURE0), a.bindTexture(a.TEXTURE_2D, this.fboTexture), a.bindBuffer(a.ARRAY_BUFFER, this.quadBuffer);
			let n = this.quadProgram.attrs.a_pos;
			a.vertexAttribPointer(n, 2, a.FLOAT, !1, 0, 0), a.enableVertexAttribArray(n), a.drawArrays(a.TRIANGLES, 0, 6), a.disableVertexAttribArray(n);
		}
		return a.flush(), r;
	}
	onTickBinded = this.onTick.bind(this);
	requestTick() {
		this._disposed || this.tickHandle === 0 && (this.tickHandle = requestAnimationFrame(this.onTickBinded));
	}
	constructor(e) {
		super(e);
		let t = e.getContext("webgl", { antialias: !0 });
		if (!t) throw Error("WebGL not supported");
		t.getExtension("EXT_color_buffer_float") || console.warn("EXT_color_buffer_float not supported"), t.getExtension("EXT_float_blend") || console.warn("EXT_float_blend not supported"), t.getExtension("OES_texture_float_linear") || console.warn("OES_texture_float_linear not supported"), t.getExtension("OES_texture_float") || console.warn("OES_texture_float not supported"), this.gl = t, t.enable(t.BLEND), t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA), t.enable(t.DEPTH_TEST), t.depthFunc(t.ALWAYS), this.mainProgram = new te(t, N, M, "main-program-mg"), this.quadProgram = new te(t, P, F, "quad-program");
		let n = t.createBuffer();
		if (!n) throw Error("Failed to create quad buffer");
		this.quadBuffer = n, t.bindBuffer(t.ARRAY_BUFFER, this.quadBuffer), t.bufferData(t.ARRAY_BUFFER, new Float32Array([
			-1,
			-1,
			1,
			-1,
			-1,
			1,
			-1,
			1,
			1,
			-1,
			1,
			1
		]), t.STATIC_DRAW), this.requestTick();
	}
	onResize(e, t) {
		this.targetSize.x = Math.ceil(e), this.targetSize.y = Math.ceil(t), this.requestTick();
	}
	setStaticMode(e) {
		this.staticMode = e, this.lastFrameTime = performance.now(), this.requestTick();
	}
	setFPS(e) {
		this.maxFPS = e;
	}
	pause() {
		this.tickHandle &&= (cancelAnimationFrame(this.tickHandle), 0), this.paused = !0;
	}
	resume() {
		this.paused = !1, this.requestTick();
	}
	async setAlbum(e, t) {
		if (e === void 0 || typeof e == "string" && e.trim().length === 0) {
			this.isNoCover = !0;
			return;
		}
		let n = null, r = null, i = 5;
		for (; !n && i > 0;) try {
			typeof e == "string" ? !t && "createImageBitmap" in window ? (r = await (await fetch(e)).blob(), n = await _(URL.createObjectURL(r), !1)) : n = await _(e, t) : n = await v(e);
		} catch (t) {
			console.warn(`failed on loading album resource, retrying (${i})`, {
				albumSource: e,
				error: t
			}), i--;
		}
		if (!n) {
			console.error("Failed to load album resource", e), this.isNoCover = !0;
			return;
		}
		this.isNoCover = !1;
		let a = this.reduceImageSizeCanvas, o = a.getContext("2d", { willReadFrequently: !0 });
		if (!o) throw Error("Failed to create canvas context");
		o.clearRect(0, 0, a.width, a.height);
		let s = n instanceof HTMLVideoElement ? n.videoWidth : n.naturalWidth, c = n instanceof HTMLVideoElement ? n.videoHeight : n.naturalHeight;
		if (s * c === 0) throw Error("Invalid image size");
		let l = null;
		try {
			"createImageBitmap" in window && (r ? (l = await createImageBitmap(r, {
				resizeWidth: a.width,
				resizeHeight: a.height,
				resizeQuality: "low"
			}), URL.revokeObjectURL(n.src)) : l = await createImageBitmap(n, {
				resizeWidth: a.width,
				resizeHeight: a.height,
				resizeQuality: "low"
			}));
		} catch (e) {
			console.warn("createImageBitmap failed", e);
		}
		l ? (o.drawImage(l, 0, 0), l.close()) : o.drawImage(n, 0, 0, s, c, 0, 0, a.width, a.height);
		let u = o.getImageData(0, 0, a.width, a.height), d = u.data;
		for (let e = 0; e < d.length; e += 4) {
			let t = d[e], n = d[e + 1], r = d[e + 2];
			t = (t - 128) * .4 + 128, n = (n - 128) * .4 + 128, r = (r - 128) * .4 + 128;
			let i = t * .3 + n * .59 + r * .11;
			t = i * -2 + t * 3, n = i * -2 + n * 3, r = i * -2 + r * 3, t = (t - 128) * 1.7 + 128, n = (n - 128) * 1.7 + 128, r = (r - 128) * 1.7 + 128, d[e] = t * .75, d[e + 1] = n * .75, d[e + 2] = r * .75;
		}
		if (y(u, 2, 4), this.manualControl && this.meshStates.length > 0) this.meshStates[0].texture.dispose(), this.meshStates[0].texture = new ue(this.gl, u);
		else {
			let e = new le(this.gl, this.mainProgram.attrs.a_pos, this.mainProgram.attrs.a_color, this.mainProgram.attrs.a_uv);
			e.resetSubdivition(50);
			let t = Math.random() > .8 ? j(6, 6) : S[Math.floor(Math.random() * S.length)];
			e.resizeControlPoints(t.width, t.height);
			let n = 2 / (t.width - 1), r = 2 / (t.height - 1);
			for (let i of t.conf) {
				let t = e.getControlPoint(i.cx, i.cy);
				t.location.x = i.x, t.location.y = i.y, t.uRot = i.ur * Math.PI / 180, t.vRot = i.vr * Math.PI / 180, t.uScale = n * i.up, t.vScale = r * i.vp;
			}
			e.updateMesh();
			let i = {
				mesh: e,
				texture: new ue(this.gl, u),
				alpha: 0
			};
			this.meshStates.push(i);
		}
		this.requestTick();
	}
	setLowFreqVolume(e) {
		this.volume = e / 10;
	}
	setHasLyric(e) {}
	dispose() {
		super.dispose(), this.tickHandle &&= (cancelAnimationFrame(this.tickHandle), 0), this._disposed = !0, this.mainProgram.dispose(), this.quadProgram.dispose(), this.gl.deleteBuffer(this.quadBuffer), this.fbo && this.gl.deleteFramebuffer(this.fbo), this.fboTexture && this.gl.deleteTexture(this.fboTexture);
		for (let e of this.meshStates) e.mesh.dispose(), e.texture.dispose();
	}
	enablePerformanceMonitor(e) {
		this.enablePerformanceMonitoring = e, e && (this.frameCount = 0, this.lastFPSUpdate = performance.now());
	}
	getCurrentFPS() {
		return this.currentFPS;
	}
	updatePerformanceStats(e) {
		this.enablePerformanceMonitoring && (this.frameCount++, e - this.lastFPSUpdate > 1e3 && (this.currentFPS = this.frameCount, this.frameCount = 0, this.lastFPSUpdate = e));
	}
}, pe = class extends n {
	time = 0;
}, me = class extends c {
	app;
	curContainer;
	staticMode = !1;
	lastContainer = /* @__PURE__ */ new Set();
	onTick = (e) => {
		for (let t of this.lastContainer) t.alpha = Math.max(0, t.alpha - e / 60), t.alpha <= 0 && (this.app.stage.removeChild(t), this.lastContainer.delete(t), t.destroy(!0));
		if (this.curContainer) {
			this.curContainer.alpha = Math.min(1, this.curContainer.alpha + e / 60);
			let [t, n, r, i] = this.curContainer.children, a = Math.max(this.app.screen.width, this.app.screen.height);
			t.position.set(this.app.screen.width / 2, this.app.screen.height / 2), n.position.set(this.app.screen.width / 2.5, this.app.screen.height / 2.5), r.position.set(this.app.screen.width / 2, this.app.screen.height / 2), i.position.set(this.app.screen.width / 2, this.app.screen.height / 2), t.width = a * Math.sqrt(2), t.height = t.width, n.width = a * .8, n.height = n.width, r.width = a * .5, r.height = r.width, i.width = a * .25, i.height = i.width, this.curContainer.time += e * this.flowSpeed, t.rotation += e / 1e3 * this.flowSpeed, n.rotation -= e / 500 * this.flowSpeed, r.rotation += e / 1e3 * this.flowSpeed, i.rotation -= e / 750 * this.flowSpeed, r.x = this.app.screen.width / 2 + this.app.screen.width / 4 * Math.cos(this.curContainer.time / 1e3 * .75), r.y = this.app.screen.height / 2 + this.app.screen.width / 4 * Math.cos(this.curContainer.time / 1e3 * .75), i.x = this.app.screen.width / 2 + this.app.screen.width / 4 * .1 + Math.cos(this.curContainer.time * .006 * .75), i.y = this.app.screen.height / 2 + this.app.screen.width / 4 * .1 + Math.cos(this.curContainer.time * .006 * .75), this.curContainer.alpha >= 1 && this.lastContainer.size === 0 && this.staticMode && this.app.ticker.stop();
		}
	};
	constructor(t) {
		super(t), this.canvas = t, this.app = new e({
			view: t,
			resizeTo: this.canvas,
			powerPreference: "low-power",
			backgroundAlpha: 1
		}), this.rebuildFilters(), this.app.ticker.maxFPS = 30, this.app.ticker.add(this.onTick), this.app.ticker.start();
	}
	onResize(e, t) {
		super.onResize(e, t), this.app.resize(), this.rebuildFilters();
	}
	setRenderScale(e) {
		super.setRenderScale(e), this.rebuildFilters();
	}
	rebuildFilters() {
		let e = Math.min(this.canvas.width, this.canvas.height), t = Math.max(this.canvas.width, this.canvas.height), n = new a();
		n.saturate(1.2, !1);
		let o = new a();
		o.brightness(.6, !1);
		let s = new a();
		s.contrast(.3, !0);
		for (let e of this.app.stage.filters ?? []) e.destroy();
		this.app.stage.filters = [], this.app.stage.filters.push(new r(5, 1)), this.app.stage.filters.push(new r(10, 1)), this.app.stage.filters.push(new r(20, 2)), this.app.stage.filters.push(new r(40, 2)), this.app.stage.filters.push(new r(80, 2)), e > 768 && this.app.stage.filters.push(new r(160, 4)), e > 768 * 2 && this.app.stage.filters.push(new r(320, 4)), this.app.stage.filters.push(n, o, s), this.app.stage.filters.push(new r(5, 1)), Math.random() > .5 ? (this.app.stage.filters.push(new i({
			radius: (t + e) / 2,
			strength: 1,
			center: [.25, 1]
		})), this.app.stage.filters.push(new i({
			radius: (t + e) / 2,
			strength: 1,
			center: [.75, 0]
		}))) : (this.app.stage.filters.push(new i({
			radius: (t + e) / 2,
			strength: 1,
			center: [.75, 1]
		})), this.app.stage.filters.push(new i({
			radius: (t + e) / 2,
			strength: 1,
			center: [.25, 0]
		})));
	}
	setStaticMode(e = !1) {
		this.staticMode = e, this.app.ticker.start();
	}
	setFPS(e) {
		this.app.ticker.maxFPS = e;
	}
	pause() {
		this.app.ticker.stop(), this.app.render();
	}
	resume() {
		this.app.ticker.start();
	}
	setLowFreqVolume(e) {}
	setHasLyric(e) {}
	async setAlbum(e, n) {
		if (!e || typeof e == "string" && e.trim().length === 0) return;
		let r = null, i = 5, a = null;
		for (; !a?.baseTexture?.resource?.valid && i > 0;) try {
			r = typeof e == "string" ? await _(e, n) : await v(e), a = t.from(r, { resourceOptions: { autoLoad: !1 } }), await a.baseTexture.resource.load();
		} catch (t) {
			console.warn(`failed on loading album image, retrying (${i})`, e, t), a = null, i--;
		}
		if (!a) return;
		let s = new pe(), c = new o(a), l = new o(a), u = new o(a), d = new o(a);
		c.anchor.set(.5, .5), l.anchor.set(.5, .5), u.anchor.set(.5, .5), d.anchor.set(.5, .5), c.rotation = Math.random() * Math.PI * 2, l.rotation = Math.random() * Math.PI * 2, u.rotation = Math.random() * Math.PI * 2, d.rotation = Math.random() * Math.PI * 2, s.addChild(c, l, u, d), this.curContainer && this.lastContainer.add(this.curContainer), this.curContainer = s, this.app.stage.addChild(s), this.curContainer.alpha = 0, this.app.ticker.start();
	}
	dispose() {
		super.dispose(), this.app.ticker.remove(this.onTick), this.app.destroy(!0);
	}
	getElement() {
		return this.canvas;
	}
}, he = class e {
	element;
	renderer;
	constructor(e, t) {
		this.renderer = e, this.element = t, t.style.pointerEvents = "none", t.style.zIndex = "-1", t.style.contain = "strict";
	}
	static new(t) {
		let n = document.createElement("canvas");
		return new e(new t(n), n);
	}
	setRenderScale(e) {
		this.renderer.setRenderScale(e);
	}
	setFlowSpeed(e) {
		this.renderer.setFlowSpeed(e);
	}
	setStaticMode(e) {
		this.renderer.setStaticMode(e);
	}
	setFPS(e) {
		this.renderer.setFPS(e);
	}
	pause() {
		this.renderer.pause();
	}
	resume() {
		this.renderer.resume();
	}
	setLowFreqVolume(e) {
		this.renderer.setLowFreqVolume(e);
	}
	setHasLyric(e) {
		this.renderer.setHasLyric(e);
	}
	setAlbum(e, t) {
		return this.renderer.setAlbum(e, t);
	}
	getElement() {
		return this.element;
	}
	dispose() {
		this.renderer.dispose(), this.element.remove();
	}
}, I = {
	lyricLine: "_lyricLine_3ds1q_6",
	dirty: "_dirty_3ds1q_34",
	lyricBgLine: "_lyricBgLine_3ds1q_50",
	active: "_active_3ds1q_63",
	hasDuetLine: "_hasDuetLine_3ds1q_79",
	lyricDuetLine: "_lyricDuetLine_3ds1q_80",
	lyricMainLine: "_lyricMainLine_3ds1q_99",
	romanWord: "_romanWord_3ds1q_116",
	rubyWord: "_rubyWord_3ds1q_123",
	wordWithRuby: "_wordWithRuby_3ds1q_131",
	wordBody: "_wordBody_3ds1q_138",
	emphasizeWrapper: "_emphasizeWrapper_3ds1q_145",
	emphasize: "_emphasize_3ds1q_145",
	lyricSubLine: "_lyricSubLine_3ds1q_169",
	disableSpring: "_disableSpring_3ds1q_176",
	interludeDots: "_interludeDots_3ds1q_184",
	enabled: "_enabled_3ds1q_196",
	duet: "_duet_3ds1q_210",
	tmpDisableTransition: "_tmpDisableTransition_3ds1q_222"
}, ge = typeof self == "object" ? self : globalThis, _e = (e, t) => {
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
				return n(new ge[e](t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(new ge[a](o), i);
	};
	return r;
}, ve = (e) => _e(/* @__PURE__ */ new Map(), e)(0), L = "", { toString: ye } = {}, { keys: be } = Object, R = (e) => {
	let t = typeof e;
	if (t !== "object" || !e) return [0, t];
	let n = ye.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, L];
		case "Object": return [2, L];
		case "Date": return [3, L];
		case "RegExp": return [4, L];
		case "Map": return [5, L];
		case "Set": return [6, L];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, z = ([e, t]) => e === 0 && (t === "function" || t === "symbol"), xe = (e, t, n, r) => {
	let i = (e, t) => {
		let i = r.push(e) - 1;
		return n.set(t, i), i;
	}, a = (r) => {
		if (n.has(r)) return n.get(r);
		let [o, s] = R(r);
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
				for (let t of be(r)) (e || !z(R(r[t]))) && n.push([a(t), a(r[t])]);
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
				for (let [n, i] of r) (e || !(z(R(n)) || z(R(i)))) && t.push([a(n), a(i)]);
				return n;
			}
			case 6: {
				let t = [], n = i([o, t], r);
				for (let n of r) (e || !z(R(n))) && t.push(a(n));
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
}, Se = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return xe(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Ce = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? ve(Se(e, t)) : structuredClone(e) : (e, t) => ve(Se(e, t)), B = /* @__PURE__ */ function(e) {
	return e[e.SOLID = 0] = "SOLID", e[e.GRADIENT = 1] = "GRADIENT", e;
}({}), we = (e, t) => e.size === t.size && [...e].every((e) => t.has(e)), V = (e) => /^[\p{Unified_Ideograph}\u0800-\u9FFC]+$/u.test(e);
//#endregion
//#region src/utils/optimize-lyric.ts
function Te(e) {
	for (let t of e) if (t.words.length === 1 && t.words[0].startTime === 0 && t.words[0].endTime === 0 && (t.startTime !== 0 || t.endTime !== 0)) t.words[0].startTime = t.startTime, t.words[0].endTime = t.endTime;
	else if (t.words.length > 0) {
		let e = t.words[0], n = t.words[t.words.length - 1];
		t.startTime = e.startTime, t.endTime = n.endTime;
	}
}
function Ee(e) {
	let t = 0;
	for (let n of e) n.isBG ? (t++, t > 1 && (n.isBG = !1)) : t = 0;
}
function De(e) {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t];
		if (n.isBG) continue;
		let r = e[t + 1];
		if (r?.isBG) {
			let e = [...n.words, ...r.words].filter((e) => e.word.trim().length > 0);
			if (e.length > 0) {
				let t = Math.min(...e.map((e) => e.startTime)), i = Math.max(...e.map((e) => e.endTime)), a = Math.min(t, n.startTime, r.startTime), o = Math.max(i, n.endTime, r.endTime);
				n.startTime = a, n.endTime = o, r.startTime = a, r.endTime = o;
			}
		}
	}
}
function Oe(e) {
	for (let t = 0; t < e.length - 1; t++) {
		let n = e[t];
		if (n.isBG) continue;
		let r = t + 1;
		for (; r < e.length && e[r].isBG;) r++;
		if (r < e.length) {
			let i = e[r], a = n.endTime - i.startTime;
			if (a > 0) {
				let r = (i.endTime - i.startTime) * .1;
				if (!(a > 100 && a > r)) {
					n.endTime = i.startTime;
					let r = e[t + 1];
					r?.isBG && (r.endTime = i.startTime);
				}
			}
		}
	}
}
function ke(e) {
	for (let t = e.length - 1; t >= 0; t--) {
		let n = e[t];
		if (n.isBG) continue;
		let r = null;
		if (t > 0) {
			let n = t - 1;
			e[n].isBG && n--, n >= 0 && (r = e[n]);
		}
		let i = 0, a = 0;
		if (r) if (n.startTime >= r.endTime) i = 1e3, a = r.endTime;
		else {
			i = 400;
			let e = r.endTime - r.startTime;
			a = r.startTime + e * .3;
		}
		else i = 1e3, a = 0;
		let o = n.startTime - i, s = Math.max(a, o);
		s < n.startTime && (n.startTime = s);
		let c = e[t + 1];
		c?.isBG && (c.startTime = n.startTime);
	}
}
function Ae(e) {
	for (let t of e) for (let e of t.words) e.word = e.word.replace(/\s+/g, " ");
	Te(e), Ee(e), De(e), Oe(e), ke(e);
}
//#endregion
//#region src/utils/derivative.ts
function je(e) {
	let t = .001;
	return (n) => (e(n + t) - e(n - t)) / (2 * t);
}
function Me(e) {
	return je(e);
}
//#endregion
//#region src/utils/spring.ts
var H = class {
	currentPosition = 0;
	targetPosition = 0;
	currentTime = 0;
	params = {};
	currentSolver;
	getV;
	getV2;
	queueParams;
	queuePosition;
	constructor(e = 0) {
		this.targetPosition = e, this.currentPosition = this.targetPosition, this.currentSolver = () => this.targetPosition, this.getV = () => 0, this.getV2 = () => 0;
	}
	resetSolver() {
		let e = this.getV(this.currentTime);
		this.currentTime = 0, this.currentSolver = Ne(this.currentPosition, e, this.targetPosition, 0, this.params), this.getV = Me(this.currentSolver), this.getV2 = Me(this.getV);
	}
	arrived() {
		return Math.abs(this.targetPosition - this.currentPosition) < .01 && this.getV(this.currentTime) < .01 && this.getV2(this.currentTime) < .01 && this.queueParams === void 0 && this.queuePosition === void 0;
	}
	setPosition(e) {
		this.targetPosition = e, this.currentPosition = e, this.currentSolver = () => this.targetPosition, this.getV = () => 0, this.getV2 = () => 0;
	}
	update(e = 0) {
		this.currentTime += e, this.currentPosition = this.currentSolver(this.currentTime), this.queueParams && (this.queueParams.time -= e, this.queueParams.time <= 0 && this.updateParams({ ...this.queueParams })), this.queuePosition && (this.queuePosition.time -= e, this.queuePosition.time <= 0 && this.setTargetPosition(this.queuePosition.position)), this.arrived() && this.setPosition(this.targetPosition);
	}
	updateParams(e, t = 0) {
		t > 0 ? this.queueParams = {
			...this.queuePosition ?? {},
			...e,
			time: t
		} : (this.queuePosition = void 0, this.params = {
			...this.params,
			...e
		}, this.resetSolver());
	}
	setTargetPosition(e, t = 0) {
		t > 0 ? this.queuePosition = {
			...this.queuePosition ?? {},
			position: e,
			time: t
		} : (this.queuePosition = void 0, this.targetPosition = e, this.resetSolver());
	}
	getCurrentPosition() {
		return this.currentPosition;
	}
};
function Ne(e, t, n, r = 0, i) {
	let a = i?.soft ?? !1, o = i?.stiffness ?? 100, s = i?.damping ?? 10, c = i?.mass ?? 1, l = n - e;
	if (a || 1 <= s / (2 * Math.sqrt(o * c))) {
		let i = -Math.sqrt(o / c), a = -i * l - t;
		return (t) => (t -= r, t < 0 ? e : n - (l + t * a) * Math.E ** (t * i));
	}
	let u = Math.sqrt(4 * c * o - s ** 2), d = (s * l - 2 * c * t) / u, f = .5 * u / c, p = -(.5 * s) / c;
	return (t) => (t -= r, t < 0 ? e : n - (Math.cos(t * f) * l + Math.sin(t * f) * d) * Math.E ** (t * p));
}
//#endregion
//#region src/utils/schedule.ts
var U = [], Pe = [], Fe = !1;
function Ie() {
	let e = Pe.shift();
	for (; e;) {
		try {
			e.resolve(e.task());
		} catch (t) {
			e.reject(t);
		}
		e = Pe.shift();
	}
	for (e = U.shift(); e;) {
		try {
			e.resolve(e.task());
		} catch (t) {
			e.reject(t);
		}
		e = U.shift();
	}
	Fe = !1;
}
function Le() {
	Fe || (Fe = !0, requestAnimationFrame(Ie));
}
function Re(e) {
	let t = {
		task: e,
		resolve: () => {},
		reject: () => {}
	}, n = new Promise((e, n) => {
		t.resolve = e, t.reject = n;
	});
	return U.push(t), Le(), n;
}
function ze(e) {
	let t = {
		task: e,
		resolve: () => {},
		reject: () => {}
	}, n = new Promise((e, n) => {
		t.resolve = e, t.reject = n;
	});
	return Pe.push(t), Le(), n;
}
//#endregion
//#region src/lyric-player/bottom-line.ts
var Be = class {
	element = document.createElement("div");
	left = 0;
	top = 0;
	delay = 0;
	lineSize = [0, 0];
	lineTransforms = {
		posX: new H(0),
		posY: new H(0)
	};
	constructor(e) {
		this.lyricPlayer = e, this.element.setAttribute("class", I.lyricLine), this.rebuildStyle();
	}
	async measureSize() {
		return await Re(() => [this.element.clientWidth, this.element.clientHeight]);
	}
	lastStyle = "";
	show() {
		this.rebuildStyle();
	}
	hide() {
		this.rebuildStyle();
	}
	rebuildStyle() {
		let e = `transform:translate(${this.lineTransforms.posX.getCurrentPosition().toFixed(2)}px,${this.lineTransforms.posY.getCurrentPosition().toFixed(2)}px);`;
		!this.lyricPlayer.getEnableSpring() && this.isInSight && (e += `transition-delay:${this.delay}ms;`), e !== this.lastStyle && (this.lastStyle = e, this.element.setAttribute("style", e));
	}
	getElement() {
		return this.element;
	}
	setTransform(e = this.left, t = this.top, n = !1, r = 0) {
		this.left = e, this.top = t, this.delay = r * 1e3 | 0, n || !this.lyricPlayer.getEnableSpring() ? (n && this.element.classList.add(I.tmpDisableTransition), this.lineTransforms.posX.setPosition(e), this.lineTransforms.posY.setPosition(t), this.lyricPlayer.getEnableSpring() ? this.rebuildStyle() : this.show(), n && requestAnimationFrame(() => {
			this.element.classList.remove(I.tmpDisableTransition);
		})) : (this.lineTransforms.posX.setTargetPosition(e, r), this.lineTransforms.posY.setTargetPosition(t, r));
	}
	update(e = 0) {
		this.lyricPlayer.getEnableSpring() && (this.lineTransforms.posX.update(e), this.lineTransforms.posY.update(e), this.isInSight ? this.show() : this.hide());
	}
	get isInSight() {
		let e = this.lineTransforms.posX.getCurrentPosition(), t = this.lineTransforms.posY.getCurrentPosition(), n = e + this.lineSize[0], r = t + this.lineSize[1], i = this.lyricPlayer.size[0], a = this.lyricPlayer.size[1];
		return !(e > i || t > a || n < 0 || r < 0);
	}
	dispose() {
		this.element.remove();
	}
};
//#endregion
//#region src/lyric-player/dom/interlude-dots.ts
function Ve(e) {
	let t = 1.70158 * 1.525;
	return e < .5 ? (2 * e) ** 2 * ((t + 1) * 2 * e - t) / 2 : ((2 * e - 2) ** 2 * ((t + 1) * (e * 2 - 2) + t) + 2) / 2;
}
function He(e) {
	return e === 1 ? 1 : 1 - 2 ** (-10 * e);
}
var W = (e, t, n) => Math.max(e, Math.min(t, n)), Ue = class {
	element = document.createElement("div");
	dot0 = document.createElement("span");
	dot1 = document.createElement("span");
	dot2 = document.createElement("span");
	left = 0;
	top = 0;
	playing = !0;
	lastStyle = "";
	currentInterlude;
	currentTime = 0;
	targetBreatheDuration = 1500;
	constructor() {
		this.element.className = I.interludeDots, this.element.appendChild(this.dot0), this.element.appendChild(this.dot1), this.element.appendChild(this.dot2);
	}
	getElement() {
		return this.element;
	}
	setTransform(e = this.left, t = this.top) {
		this.left = e, this.top = t, this.update();
	}
	setInterlude(e) {
		this.currentInterlude = e, this.currentTime = e?.[0] ?? 0, e ? this.element.classList.add(I.enabled) : this.element.classList.remove(I.enabled);
	}
	pause() {
		this.playing = !1, this.element.classList.remove(I.playing);
	}
	resume() {
		this.playing = !0, this.element.classList.add(I.playing);
	}
	update(e = 0) {
		if (!this.playing) return;
		this.currentTime += e;
		let t = "";
		if (t += `transform:translate(${this.left.toFixed(2)}px, ${this.top.toFixed(2)}px)`, this.currentInterlude) {
			let e = this.currentInterlude[1] - this.currentInterlude[0], n = this.currentTime - this.currentInterlude[0];
			if (n <= e) {
				let r = e / Math.ceil(e / this.targetBreatheDuration), i = 1, a = 1;
				i *= Math.sin(1.5 * Math.PI - n / r * 2) / 20 + 1, n < 2e3 && (i *= He(n / 2e3)), n < 500 ? a = 0 : n < 1e3 && (a *= (n - 500) / 500), e - n < 750 && (i *= 1 - Ve((750 - (e - n)) / 750 / 2)), e - n < 375 && (a *= W(0, (e - n) / 375, 1));
				let o = Math.max(0, e - 750);
				i = Math.max(0, i) * .7, t += ` scale(${i})`;
				let s = W(.25, n * 3 / o * .75, 1), c = W(.25, (n - o / 3) * 3 / o * .75, 1), l = W(.25, (n - o / 3 * 2) * 3 / o * .75, 1);
				this.dot0.style.opacity = `${W(0, Math.max(0, a * s), 1)}`, this.dot1.style.opacity = `${W(0, Math.max(0, a * c), 1)}`, this.dot2.style.opacity = `${W(0, Math.max(0, a * l), 1)}`;
			} else t += " scale(0)", this.dot0.style.opacity = "0", this.dot1.style.opacity = "0", this.dot2.style.opacity = "0";
			t += ";", this.lastStyle !== t && (this.element.setAttribute("style", t), this.lastStyle = t);
		}
	}
	dispose() {
		this.element.remove();
	}
}, G = class extends EventTarget {
	element = document.createElement("div");
	currentTime = 0;
	lyricLinesSize = /* @__PURE__ */ new WeakMap();
	lyricLineElementMap = /* @__PURE__ */ new WeakMap();
	currentLyricLines = [];
	processedLines = [];
	lyricLinesIndexes = /* @__PURE__ */ new WeakMap();
	hotLines = /* @__PURE__ */ new Set();
	bufferedLines = /* @__PURE__ */ new Set();
	isNonDynamic = !1;
	hasDuetLine = !1;
	scrollToIndex = 0;
	disableSpring = !1;
	interludeDotsSize = [0, 0];
	interludeDots = new Ue();
	bottomLine = new Be(this);
	enableBlur = !0;
	enableScale = !0;
	maskObsceneWords = $.Disabled;
	hidePassedLines = !1;
	scrollBoundary = [0, 0];
	currentLyricLineObjects = [];
	isSeeking = !1;
	lastCurrentTime = 0;
	alignAnchor = "center";
	alignPosition = .35;
	scrollOffset = 0;
	size = [0, 0];
	allowScroll = !0;
	isPageVisible = !0;
	initialLayoutFinished = !1;
	isUserScrolling = !1;
	wheelTimeout;
	overscanPx = 300;
	posXSpringParams = {
		mass: 1,
		damping: 10,
		stiffness: 100
	};
	posYSpringParams = {
		mass: .9,
		damping: 15,
		stiffness: 90
	};
	scaleSpringParams = {
		mass: 2,
		damping: 25,
		stiffness: 100
	};
	scaleForBGSpringParams = {
		mass: 1,
		damping: 20,
		stiffness: 50
	};
	onPageShow = () => {
		this.isPageVisible = !0, this.setCurrentTime(this.currentTime, !0);
	};
	onPageHide = () => {
		this.isPageVisible = !1;
	};
	scrolledHandler = 0;
	isScrolled = !1;
	resizeObserver = new ResizeObserver(((e) => {
		let t = !1, n = !1;
		for (let r of e) if (r.target === this.element) {
			let e = r.contentRect;
			this.size[0] = e.width, this.size[1] = e.height, n = !0;
		} else if (r.target === this.interludeDots.getElement()) this.interludeDotsSize[0] = r.target.clientWidth, this.interludeDotsSize[1] = r.target.clientHeight, t = !0;
		else if (r.target === this.bottomLine.getElement()) {
			let e = [r.target.clientWidth, r.target.clientHeight], n = this.bottomLine.lineSize;
			(e[0] !== n[0] || e[1] !== n[1]) && (this.bottomLine.lineSize = e, t = !0);
		} else {
			let e = this.lyricLineElementMap.get(r.target);
			if (e) {
				let n = [r.target.clientWidth, r.target.clientHeight], i = this.lyricLinesSize.get(e) ?? [0, 0];
				(n[0] !== i[0] || n[1] !== i[1]) && (this.lyricLinesSize.set(e, n), e.onLineSizeChange(n), t = !0);
			}
		}
		t && this.calcLayout(!0), n && this.onResize();
	}));
	wordFadeWidth = .5;
	targetAlignIndex = 0;
	constructor(e) {
		super(), e && (this.element = e), this.element.classList.add("amll-lyric-player"), this.resizeObserver.observe(this.element), this.resizeObserver.observe(this.interludeDots.getElement()), this.element.appendChild(this.interludeDots.getElement()), this.element.appendChild(this.bottomLine.getElement()), this.interludeDots.setTransform(0, 200), window.addEventListener("pageshow", this.onPageShow), window.addEventListener("pagehide", this.onPageHide);
		let t = 0, n = 0, r = 0, i = 0, a = 0, o = 0, s = 0, c = 0;
		this.element.addEventListener("touchstart", (e) => {
			this.beginScrollHandler() && (this.isUserScrolling = !0, e.preventDefault(), t = this.scrollOffset, n = e.touches[0].screenY, a = n, r = e.touches[0].screenX, i = e.touches[0].screenY, o = Date.now(), s = 0, this.calcLayout(!0, !0));
		}), this.element.addEventListener("touchmove", (e) => {
			if (this.beginScrollHandler()) {
				e.preventDefault();
				let r = e.touches[0].screenY, i = r - n;
				this.scrollOffset = t - i, this.limitScrollOffset();
				let c = Date.now(), l = c - o;
				l > 0 && (s = (r - a) / l), a = r, o = c, this.calcLayout(!0, !0);
			}
		}), this.element.addEventListener("touchend", (e) => {
			if (this.beginScrollHandler()) {
				e.preventDefault();
				let t = e.changedTouches[0], a = Math.abs(t.screenX - r), o = Math.abs(t.screenY - i);
				if (a < 10 && o < 10) {
					let e = document.elementFromPoint(t.clientX, t.clientY);
					e && this.element.contains(e) && e.click(), this.isUserScrolling = !1, this.endScrollHandler();
					return;
				}
				n = 0;
				let l = ++c;
				Math.abs(s) < .1 && (s = 0);
				let u = performance.now(), d = (e) => {
					if (l !== c) return;
					let t = e - u;
					if (u = e, t <= 0 || t > 100) {
						requestAnimationFrame(d);
						return;
					}
					if (Math.abs(s) > .05) {
						this.scrollOffset -= s * t, this.limitScrollOffset();
						let e = .95 ** (t / 16);
						s *= e, this.calcLayout(!0, !0), requestAnimationFrame(d);
					} else this.isUserScrolling = !1, this.endScrollHandler();
				};
				requestAnimationFrame(d);
			} else this.isUserScrolling = !1;
		}), this.element.addEventListener("wheel", (e) => {
			this.beginScrollHandler() && (e.preventDefault(), e.deltaMode === e.DOM_DELTA_PIXEL ? (this.scrollOffset += e.deltaY, this.limitScrollOffset(), this.calcLayout(!0, !1)) : (this.scrollOffset += e.deltaY * 50, this.limitScrollOffset(), this.calcLayout(!1, !1)));
		}, { passive: !1 });
	}
	beginScrollHandler() {
		let e = this.allowScroll;
		return e && (this.isScrolled = !0, clearTimeout(this.scrolledHandler), this.scrolledHandler = setTimeout(() => {
			this.isScrolled = !1, this.scrollOffset = 0;
		}, 5e3)), e;
	}
	endScrollHandler() {}
	limitScrollOffset() {
		this.scrollOffset = Math.max(Math.min(this.scrollBoundary[1], this.scrollOffset), this.scrollBoundary[0]);
	}
	setWordFadeWidth(e = .5) {
		this.wordFadeWidth = Math.max(1e-4, e);
	}
	setEnableScale(e = !0) {
		this.enableScale = e, this.calcLayout();
	}
	getEnableScale() {
		return this.enableScale;
	}
	getWordFadeWidth() {
		return this.wordFadeWidth;
	}
	setIsSeeking(e) {
		this.isSeeking = e;
	}
	setHidePassedLines(e) {
		this.hidePassedLines = e, this.calcLayout();
	}
	setEnableBlur(e) {
		this.enableBlur !== e && (this.enableBlur = e, this.calcLayout());
	}
	setMaskObsceneWords(e) {
		this.maskObsceneWords !== e && (this.maskObsceneWords = e, this.calcLayout());
	}
	processObsceneWord(e) {
		return e.obscene !== !0 || this.maskObsceneWords === $.Disabled ? e.word : this.maskObsceneWords === $.FullMask ? e.word.replace(/\S/g, "#") : e.word;
	}
	setAlignAnchor(e) {
		this.alignAnchor = e;
	}
	setAlignPosition(e) {
		this.alignPosition = e;
	}
	setOverscanPx(e) {
		this.overscanPx = Math.max(0, e | 0);
	}
	getOverscanPx() {
		return this.overscanPx;
	}
	setEnableSpring(e = !0) {
		this.disableSpring = !e, e ? this.element.classList.remove(I.disableSpring) : this.element.classList.add(I.disableSpring), this.calcLayout(!0);
	}
	getEnableSpring() {
		return !this.disableSpring;
	}
	getCurrentInterlude() {
		let e = this.currentTime + 20, t = this.scrollToIndex, n = this.processedLines, r = (t) => {
			if (t < -1 || t >= n.length - 1) return;
			let r = t === -1 ? null : n[t], i = n[t + 1], a = r ? r.endTime : 0, o = Math.max(a, i.startTime - 250);
			if (!(o - a < 4e3) && o > e && a < e) return [
				Math.max(a, e),
				o,
				t,
				i.isDuet
			];
		};
		return r(t - 1) || r(t) || r(t + 1);
	}
	setLyricLines(e, t = 0) {
		this.initialLayoutFinished = !0, this.lastCurrentTime = t, this.currentTime = t, this.currentLyricLines = Ce(e), this.processedLines = Ce(this.currentLyricLines), Ae(this.processedLines), this.isNonDynamic = !0;
		for (let e of this.processedLines) if (e.words.length > 1) {
			this.isNonDynamic = !1;
			break;
		}
		this.hasDuetLine = this.processedLines.some((e) => e.isDuet);
		for (let e of this.currentLyricLineObjects) e.dispose();
		this.interludeDots.setInterlude(void 0), this.hotLines.clear(), this.bufferedLines.clear(), this.setCurrentTime(0, !0);
	}
	getIsPlaying() {
		return this.isPlaying;
	}
	setCurrentTime(e, t = !1) {
		if (this.currentTime = e, !this.initialLayoutFinished && !t) return;
		let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
		for (let r of this.hotLines) {
			let i = this.processedLines[r];
			if (i) {
				if (i.isBG) continue;
				let a = this.processedLines[r + 1];
				if (a?.isBG) {
					let o = this.processedLines[r + 2], s = Math.min(i.startTime, a?.startTime), c = Math.min(Math.max(i.endTime, o?.startTime ?? Number.MAX_VALUE), Math.max(i.endTime, a?.endTime));
					(s > e || c <= e) && (this.hotLines.delete(r), n.add(r), this.hotLines.delete(r + 1), n.add(r + 1), t && (this.currentLyricLineObjects[r]?.disable(), this.currentLyricLineObjects[r + 1]?.disable()));
				} else (i.startTime > e || i.endTime <= e) && (this.hotLines.delete(r), n.add(r), t && this.currentLyricLineObjects[r]?.disable());
			} else this.hotLines.delete(r), n.add(r), t && this.currentLyricLineObjects[r]?.disable();
		}
		this.currentLyricLineObjects.forEach((n, r, a) => {
			let o = n.getLine();
			!o.isBG && o.startTime <= e && o.endTime > e && (t && n.enable(e, this.isPlaying), this.hotLines.has(r) || (this.hotLines.add(r), i.add(r), t || n.enable(), a[r + 1]?.getLine()?.isBG && (this.hotLines.add(r + 1), i.add(r + 1), t ? a[r + 1].enable(e, this.isPlaying) : a[r + 1].enable())));
		});
		for (let e of this.bufferedLines) this.hotLines.has(e) || (r.add(e), t && this.currentLyricLineObjects[e]?.disable());
		if (t) {
			this.bufferedLines.clear();
			for (let e of this.hotLines) this.bufferedLines.add(e);
			if (this.bufferedLines.size > 0) this.scrollToIndex = Math.min(...this.bufferedLines);
			else {
				let t = this.processedLines.findIndex((t) => t.startTime >= e);
				this.scrollToIndex = t === -1 ? this.processedLines.length : t;
			}
			this.resetScroll(), this.calcLayout();
		} else if (r.size > 0 || i.size > 0) if (r.size === 0 && i.size > 0) {
			for (let e of i) this.bufferedLines.add(e), this.currentLyricLineObjects[e]?.enable();
			this.scrollToIndex = Math.min(...this.bufferedLines), this.calcLayout();
		} else if (i.size === 0 && r.size > 0) {
			if (we(r, this.bufferedLines)) {
				for (let e of this.bufferedLines) this.hotLines.has(e) || (this.bufferedLines.delete(e), this.currentLyricLineObjects[e]?.disable());
				this.calcLayout();
			}
		} else {
			for (let e of i) this.bufferedLines.add(e), this.currentLyricLineObjects[e]?.enable();
			for (let e of r) this.bufferedLines.delete(e), this.currentLyricLineObjects[e]?.disable();
			this.bufferedLines.size > 0 && (this.scrollToIndex = Math.min(...this.bufferedLines)), this.calcLayout();
		}
		this.lastCurrentTime = e;
	}
	async calcLayout(e = !1, t = !1) {
		let n = this.getCurrentInterlude(), r = -this.scrollOffset, i = this.scrollToIndex, a = !1;
		n ? a = n[3] : this.interludeDots.setInterlude(void 0);
		let o = (this.baseFontSize || 24) * .4, s = this.interludeDotsSize[1] + o * 2;
		n && n[2] !== -1 && (r -= s);
		let c = this.size[1] / 5, l = this.currentLyricLineObjects.slice(0, i).reduce((e, t) => e + (t.getLine().isBG && this.isPlaying ? 0 : this.lyricLinesSize.get(t)?.[1] ?? c), 0);
		this.scrollBoundary[0] = -l, r -= l, r += this.size[1] * this.alignPosition;
		let u = this.currentLyricLineObjects[i];
		if (this.targetAlignIndex = i, u) {
			let e = this.lyricLinesSize.get(u)?.[1] ?? c;
			switch (this.alignAnchor) {
				case "bottom":
					r -= e;
					break;
				case "center":
					r -= e / 2;
					break;
				case "top": break;
			}
		}
		let d = Math.max(...this.bufferedLines), f = 0, p = e ? 0 : .05, m = !1;
		this.currentLyricLineObjects.forEach((e, i) => {
			let s = this.bufferedLines.has(i), l = s || i >= this.scrollToIndex && i < d, u = e.getLine(), h = n && i === n[2] + 1;
			if (!m && h) {
				m = !0, r += o;
				let e = 0;
				n && a && (e = this.size[0] - this.interludeDotsSize[0]), this.interludeDots.setTransform(e, r), n && this.interludeDots.setInterlude([n[0], n[1]]), r += this.interludeDotsSize[1], r += o;
			}
			let g;
			g = this.hidePassedLines && i < (n ? n[2] + 1 : this.scrollToIndex) && this.isPlaying ? 1e-5 : s ? .85 : this.isNonDynamic ? .2 : 1;
			let _ = 0;
			this.enableBlur && (l ? _ = 0 : (_ = 1, i < this.scrollToIndex ? _ += Math.abs(this.scrollToIndex - i) + 1 : _ += Math.abs(i - Math.max(this.scrollToIndex, d))));
			let v = this.enableScale ? 97 : 100, y = 100;
			!l && this.isPlaying && (y = u.isBG ? 75 : v), this.isUserScrolling && (_ = 0);
			let b = l ? B.GRADIENT : B.SOLID;
			e.setTransform(r, y, g, window.innerWidth <= 1024 ? _ * .8 : _, t, f, b), u.isBG && (l || !this.isPlaying) ? r += this.lyricLinesSize.get(e)?.[1] ?? c : u.isBG || (r += this.lyricLinesSize.get(e)?.[1] ?? c), r >= 0 && !this.isSeeking && (u.isBG || (f += p), i >= this.scrollToIndex && (p /= 1.05));
		}), this.scrollBoundary[1] = r + this.scrollOffset - this.size[1] / 2, this.bottomLine.setTransform(0, r, t, f);
	}
	setLinePosXSpringParams(e = {}) {}
	setLinePosYSpringParams(e = {}) {
		this.posYSpringParams = {
			...this.posYSpringParams,
			...e
		}, this.bottomLine.lineTransforms.posY.updateParams(this.posYSpringParams);
		for (let e of this.currentLyricLineObjects) e.lineTransforms.posY.updateParams(this.posYSpringParams);
	}
	setLineScaleSpringParams(e = {}) {
		this.scaleSpringParams = {
			...this.scaleSpringParams,
			...e
		}, this.scaleForBGSpringParams = {
			...this.scaleForBGSpringParams,
			...e
		};
		for (let e of this.currentLyricLineObjects) e.getLine().isBG ? e.lineTransforms.scale.updateParams(this.scaleForBGSpringParams) : e.lineTransforms.scale.updateParams(this.scaleSpringParams);
	}
	isPlaying = !0;
	pause() {
		this.interludeDots.pause(), this.isPlaying && (this.isPlaying = !1, this.calcLayout());
	}
	resume() {
		this.interludeDots.resume(), this.isPlaying || (this.isPlaying = !0, this.calcLayout());
	}
	update(e = 0) {
		this.bottomLine.update(e / 1e3), this.interludeDots.update(e / 1e3);
	}
	onResize() {}
	getBottomLineElement() {
		return this.bottomLine.getElement();
	}
	resetScroll() {
		this.isScrolled = !1, this.scrollOffset = 0, clearTimeout(this.scrolledHandler), this.scrolledHandler = 0;
	}
	getLyricLines() {
		return this.currentLyricLines;
	}
	getCurrentTime() {
		return this.currentTime;
	}
	getElement() {
		return this.element;
	}
	dispose() {
		this.element.remove(), window.removeEventListener("pageshow", this.onPageShow), window.removeEventListener("pagehide", this.onPageHide);
	}
}, K = class extends EventTarget {
	top = 0;
	scale = 1;
	blur = 0;
	opacity = 1;
	delay = 0;
	lineTransforms = {
		posY: new H(0),
		scale: new H(100)
	};
	onLineSizeChange(e) {}
	setTransform(e = this.top, t = this.scale, n = this.opacity, r = this.blur, i = !1, a = 0, o = B.SOLID) {
		this.top = e, this.scale = t, this.opacity = n, this.blur = r, this.delay = a;
	}
	static shouldEmphasize(e) {
		return V(e.word) ? e.endTime - e.startTime >= 1e3 : e.endTime - e.startTime >= 1e3 && e.word.trim().length <= 7 && e.word.trim().length > 1;
	}
	dispose() {}
};
//#endregion
//#region ../../node_modules/.pnpm/bezier-easing@3.0.0/node_modules/bezier-easing/src/index.js
function We(e) {
	return e;
}
var { cbrt: Ge, sqrt: Ke, PI: q } = Math, qe = (e, t, n, r, i) => {
	let a = t + n * e, o = a ** 2 + r;
	if (o > 0) {
		let e = Ke(o);
		return Ge(a + e) + Ge(a - e) - i;
	}
	let s = Ge(Ke(a * a - o)), c = a ? Math.atan(Ke(-o) / a) : -q / 2, l;
	return l = n < 0 ? (a > 0 ? 2 * q : q) - c : i < 0 ? (a > 0 ? 2 * q : -3 * q) + c : (a > 0 ? 0 : q) + c, 2 * s * Math.cos(l / 3) - i;
}, Je = (e, t, n, r) => ((t * e + 3 * n) * e + r) * e;
function J(e, t, n, r) {
	if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw Error("bezier x values must be in [0, 1] range");
	if (e === t && n === r) return We;
	let i = 6 * (3 * e - 3 * n + 1), a = 6 * (n - 2 * e), o = 3 * e, s = i * i, c = a * a, l = a / i, u = 3 * a * o / s - c * a / (s * i), d = 2 * o / i - c / s, f = d * d * d, p = 3 / i, m = 3 * t - 3 * r + 1, h = r - 2 * t, g = 3 * t, _ = i ? qe : We;
	return function(e) {
		return e === 0 || e === 1 ? e : Je(_(e, u, p, f, l), m, h, g);
	};
}
//#endregion
//#region src/utils/lyric-split-words.ts
var Ye = typeof Intl < "u" && Intl.Segmenter !== void 0;
function Xe(e) {
	let t = [];
	for (let n of e) {
		let e = n.word.trim().length === 0, r = n.romanWord ?? "", i = n.obscene ?? !1, a = (n.ruby?.length ?? 0) > 0;
		if (e) {
			t.push({ ...n });
			continue;
		}
		if (a) {
			t.push({ ...n });
			continue;
		}
		let o = n.word.split(/(\s+)/).filter((e) => e.length > 0), s = 0, c = n.word.replace(/\s/g, "").length || 1;
		for (let e of o) {
			if (!e.trim()) {
				let r = n.startTime + s / c * (n.endTime - n.startTime);
				t.push({
					word: e,
					romanWord: "",
					startTime: r,
					endTime: r,
					obscene: i
				});
				continue;
			}
			if (V(e) && e.length > 1 && r.trim().length === 0) {
				let r = e.split("");
				for (let e of r) {
					let r = 1 / c * (n.endTime - n.startTime), a = n.startTime + s / c * (n.endTime - n.startTime);
					t.push({
						word: e,
						romanWord: "",
						startTime: a,
						endTime: a + r,
						obscene: i
					}), s += 1;
				}
			} else {
				let a = e.length, o = a / c * (n.endTime - n.startTime), l = n.startTime + s / c * (n.endTime - n.startTime);
				t.push({
					word: e,
					romanWord: r,
					startTime: l,
					endTime: l + o,
					obscene: i
				}), s += a;
			}
		}
	}
	if (!Ye) return t;
	let n = t.map((e) => e.word).join(""), r = new Intl.Segmenter(void 0, { granularity: "word" }), i = Array.from(r.segment(n)), a = [], o = 0, s = 0, c = 0, l = [];
	for (let e of i) {
		let n = e.segment.length;
		for (s += n; c < s && o < t.length;) {
			let e = t[o];
			l.push(e), c += e.word.length, o++;
		}
		if (c === s) {
			for (; l.length > 1 && !l[0].word.trim();) {
				let e = l.shift();
				e && a.push(e);
			}
			l.length === 1 ? a.push(l[0]) : l.length > 1 && a.push(l), l = [];
		}
	}
	for (; o < t.length;) a.push(t[o++]);
	return l.length > 0 && (l.length === 1 ? a.push(l[0]) : a.push(l)), a;
}
//#endregion
//#region src/utils/matrix.ts
function Ze() {
	return [
		1,
		0,
		0,
		0,
		0,
		1,
		0,
		0,
		0,
		0,
		1,
		0,
		0,
		0,
		0,
		1
	];
}
function Qe(e, t = 1, n = {
	x: 0,
	y: 0
}) {
	let [r, i] = [n.x, n.y];
	return [
		e[0] * t,
		e[1] * t,
		e[2] * t,
		e[3],
		e[4] * t,
		e[5] * t,
		e[6] * t,
		e[7],
		e[8] * t,
		e[9] * t,
		e[10] * t,
		e[11],
		e[12] - r * t + r,
		e[13] - i * t + i,
		e[14],
		e[15]
	];
}
function $e(e, t = 4) {
	return `matrix3d(${e.map((e, n) => e.toFixed(t)).join(", ")})`;
}
//#endregion
//#region src/lyric-player/dom/lyric-line.ts
var Y = 32, et = (e, t) => (n) => Math.min(1, Math.max(0, (n - e) / (t - e))), tt = .5, nt = et(0, tt), rt = et(tt, 1), it = J(.2, .4, .58, 1), at = J(.3, 0, .58, 1), ot = (e) => (t) => t < e ? it(nt(t)) : 1 - at(rt(t));
function st(e, t = 0, n = "rgba(0,0,0,var(--bright-mask-alpha, 1.0))", r = "rgba(0,0,0,var(--dark-mask-alpha, 1.0))") {
	let i = 2 + e + t, a = e / i, o = (1 - a) / 2;
	return [`linear-gradient(to right,${n} ${o * 100}%,${r} ${(o + a) * 100}%)`, i];
}
var ct = class extends MouseEvent {
	constructor(e, t) {
		super(t.type, t), this.line = e;
	}
}, lt = class extends K {
	element = document.createElement("div");
	splittedWords = [];
	built = !1;
	lineSize = [0, 0];
	renderMode = B.SOLID;
	currentBrightAlpha = 1;
	currentDarkAlpha = .2;
	targetBrightAlpha = 1;
	targetDarkAlpha = .2;
	constructor(e, t = {
		words: [],
		translatedLyric: "",
		romanLyric: "",
		startTime: 0,
		endTime: 0,
		isBG: !1,
		isDuet: !1
	}) {
		super(), this.lyricPlayer = e, this.lyricLine = t, this._prevParentEl = e.getElement(), e.resizeObserver.observe(this.element), this.element.setAttribute("class", I.lyricLine), this.lyricLine.isBG && this.element.classList.add(I.lyricBgLine), this.lyricLine.isDuet && this.element.classList.add(I.lyricDuetLine), this.lineTransforms.posY.setPosition(window.innerHeight * 2), this.element.appendChild(document.createElement("div")), this.element.appendChild(document.createElement("div")), this.element.appendChild(document.createElement("div"));
		let n = this.element.children[0], r = this.element.children[1], i = this.element.children[2];
		n.setAttribute("class", I.lyricMainLine), r.setAttribute("class", I.lyricSubLine), i.setAttribute("class", I.lyricSubLine), this.rebuildStyle();
	}
	listenersMap = /* @__PURE__ */ new Map();
	onMouseEvent = (e) => {
		let t = new ct(this, e);
		for (let n of this.listenersMap.get(e.type) ?? []) n.call(this, t);
		if (!this.dispatchEvent(t) || t.defaultPrevented) return e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), !1;
	};
	addMouseEventListener(e, t, n) {
		if (t) {
			let r = this.listenersMap.get(e) ?? /* @__PURE__ */ new Set();
			r.size === 0 && this.element.addEventListener(e, this.onMouseEvent, n), r.add(t), this.listenersMap.set(e, r);
		}
	}
	removeMouseEventListener(e, t, n) {
		if (t) {
			let r = this.listenersMap.get(e);
			r && (r.delete(t), r.size === 0 && this.element.removeEventListener(e, this.onMouseEvent, n));
		}
	}
	areWordsOnSameLine(e, t) {
		if (e?.mainElement && t?.mainElement) {
			let n = e.mainElement, r = t.mainElement, i = n.getBoundingClientRect(), a = r.getBoundingClientRect();
			return Math.abs(i.top - a.top) < 10;
		}
		return !0;
	}
	isEnabled = !1;
	async enable(e = this.lyricLine.startTime, t = !0) {
		this.isEnabled = !0, this.element.classList.add(I.active);
		let n = this.element.children[0], r = Math.max(0, e - this.lyricLine.startTime), i = e === this.lyricLine.startTime ? this.lyricPlayer.getCurrentTime() : e, a = Math.max(0, i - this.lyricLine.startTime);
		for (let e of this.splittedWords) {
			for (let n of e.elementAnimations) {
				n.currentTime = r, n.playbackRate = 1;
				let e = n.effect?.getComputedTiming(), i = e?.duration || 0, a = (e?.delay || 0) + i;
				t && r < a ? n.play() : n.pause();
			}
			for (let n of e.maskAnimations) {
				let e = Math.min(this.totalDuration, a);
				n.currentTime = e, n.playbackRate = 1;
				let r = n.effect?.getComputedTiming(), i = r?.duration || 0, o = (r?.delay || 0) + i;
				t && e < o ? n.play() : n.pause();
			}
		}
		n.classList.add(I.active);
	}
	disable() {
		this.isEnabled = !1, this.element.classList.remove(I.active), this.renderMode = B.SOLID;
		let e = this.element.children[0];
		for (let e of this.splittedWords) {
			for (let t of e.elementAnimations) (t.id === "float-word" || t.id.includes("emphasize-word-float-only")) && (t.playbackRate = -1, t.play());
			for (let t of e.maskAnimations) t.pause();
		}
		e.classList.remove(I.active);
	}
	lastWord;
	async resume() {
		if (this.isEnabled) for (let e of this.splittedWords) {
			for (let t of e.elementAnimations) if (!this.lastWord || this.splittedWords.indexOf(this.lastWord) < this.splittedWords.indexOf(e)) {
				let e = t.effect?.getComputedTiming(), n = e?.duration || 0, r = (e?.delay || 0) + n, i = t.currentTime || 0;
				t.playState !== "finished" && i < r && t.play();
			}
			for (let t of e.maskAnimations) if (!this.lastWord || this.splittedWords.indexOf(this.lastWord) < this.splittedWords.indexOf(e)) {
				let e = t.effect?.getComputedTiming(), n = e?.duration || 0, r = (e?.delay || 0) + n, i = t.currentTime || 0;
				t.playState !== "finished" && i < r && t.play();
			}
		}
	}
	async pause() {
		if (this.isEnabled) for (let e of this.splittedWords) {
			for (let t of e.elementAnimations) t.pause();
			for (let t of e.maskAnimations) t.pause();
		}
	}
	setMaskAnimationState(e = 0) {
		let t = e - this.lyricLine.startTime;
		for (let e of this.splittedWords) for (let n of e.maskAnimations) n.currentTime = Math.min(this.totalDuration, Math.max(0, t)), n.playbackRate = 1, t >= 0 && t < this.totalDuration ? n.play() : n.pause();
	}
	getLine() {
		return this.lyricLine;
	}
	_prevParentEl;
	lastStyle = "";
	show() {
		this.element.parentElement || (this._prevParentEl.appendChild(this.element), this.lyricPlayer.resizeObserver.observe(this.element)), this.built || (this.rebuildElement(), this.built = !0, this.updateMaskImageSync()), this.rebuildStyle();
	}
	hide() {
		this.element.parentElement && (this._prevParentEl.removeChild(this.element), this.lyricPlayer.resizeObserver.unobserve(this.element)), this.built &&= (this.disposeElements(), !1);
	}
	rebuildStyle() {
		let e = "";
		e += `transform:translateY(${this.lineTransforms.posY.getCurrentPosition().toFixed(1)}px) scale(${(this.lineTransforms.scale.getCurrentPosition() / 100).toFixed(4)});`, !this.lyricPlayer.getEnableSpring() && this.isInSight && (e += `transition-delay:${this.delay}ms;`), e += `filter:blur(${Math.min(5, this.blur)}px);`, e !== this.lastStyle && (this.lastStyle = e, this.element.setAttribute("style", e));
	}
	rebuildElement() {
		this.disposeElements();
		let e = this.element.children[0], t = this.element.children[1], n = this.element.children[2];
		if (this.lyricPlayer._getIsNonDynamic()) {
			e.innerText = this.lyricLine.words.map((e) => e.word).join(""), this.setSubLinesText(t, n);
			return;
		}
		let r = Xe(this.lyricLine.words), i = this.lyricLine.words.some((e) => (e.ruby?.length ?? 0) > 0), a = this.lyricLine.words.some((e) => (e.romanWord?.trim().length ?? 0) > 0);
		e.innerHTML = "";
		for (let t of r) this.buildWord(t, e, i, a);
		this.setSubLinesText(t, n);
	}
	setSubLinesText(e, t) {
		e.innerText = this.lyricLine.translatedLyric, t.innerText = this.lyricLine.romanLyric;
	}
	getRubyCharCount(e) {
		return (e.ruby ?? []).reduce((e, t) => e + t.word.length, 0);
	}
	getRubySegments(e) {
		return (e.ruby ?? []).filter((e) => (e?.word?.trim().length ?? 0) > 0);
	}
	createWord(e, t, n, r) {
		let i = document.createElement("span"), a = [], o = e.romanWord?.trim() ?? "", s = n ? document.createElement("div") : i;
		if (n) {
			let t = document.createElement("div"), n = this.getRubySegments(e);
			for (let e of n) {
				let n = document.createElement("span");
				n.innerText = e.word, n.dataset.startTime = String(e.startTime), n.dataset.endTime = String(e.endTime), t.appendChild(n);
			}
			t.classList.add(I.rubyWord), i.classList.add(I.wordWithRuby), s.classList.add(I.wordBody), i.appendChild(t), i.appendChild(s);
		}
		if (t) {
			i.classList.add(I.emphasize);
			for (let t of e.word.trim()) {
				let e = document.createElement("span");
				e.innerText = t, a.push(e), s.appendChild(e);
			}
		} else if (r) {
			let t = document.createElement("div");
			t.innerText = e.word.trim(), s.appendChild(t);
		} else o.length === 0 && (s.innerText = e.word.trim());
		if (r) {
			let e = document.createElement("div");
			e.innerText = o.length > 0 ? o : "\xA0", e.classList.add(I.romanWord), s.appendChild(e);
		}
		return {
			...e,
			mainElement: i,
			subElements: a,
			elementAnimations: [this.initFloatAnimation(e, i)],
			maskAnimations: [],
			width: 0,
			height: 0,
			padding: 0,
			shouldEmphasize: t
		};
	}
	buildWord(e, t, n, r) {
		let i = Array.isArray(e) ? e : [e];
		if (i.length === 0) return;
		if (i.every((e) => !e.word.trim())) {
			let e = i.map((e) => e.word).join("");
			t.appendChild(document.createTextNode(e));
			return;
		}
		let a = i.reduce((e, t) => (e.endTime = Math.max(e.endTime, t.endTime), e.startTime = Math.min(e.startTime, t.startTime), e.word += t.word, e), {
			word: "",
			romanWord: "",
			startTime: Infinity,
			endTime: -Infinity,
			wordType: "normal",
			obscene: !1
		}), o = i.some((e) => K.shouldEmphasize(e));
		V(a.word) || (o ||= K.shouldEmphasize(a));
		let s = document.createElement("span");
		s.classList.add(I.emphasizeWrapper);
		let c = [];
		for (let e of i) {
			if (!e.word.trim()) {
				s.appendChild(document.createTextNode(e.word));
				continue;
			}
			let t = this.createWord(e, o, n, r);
			o && c.push(...t.subElements), this.splittedWords.push(t), s.appendChild(t.mainElement);
		}
		if (o && this.splittedWords.length > 0) {
			let e = this.splittedWords[this.splittedWords.length - 1], t = i.reduce((e, t) => e + this.getRubyCharCount(t), 0);
			e.elementAnimations.push(...this.initEmphasizeAnimation(a, c, a.endTime - a.startTime, a.startTime - this.lyricLine.startTime, t));
		}
		t.appendChild(s);
	}
	initFloatAnimation(e, t) {
		let n = e.startTime - this.lyricLine.startTime, r = Math.max(1e3, e.endTime - e.startTime), i = .05;
		this.lyricLine.isBG && (i *= 2);
		let a = t.animate([{ transform: "translateY(0px)" }, { transform: `translateY(${-i}em)` }], {
			duration: Number.isFinite(r) ? r : 0,
			delay: Number.isFinite(n) ? n : 0,
			id: "float-word",
			composite: "add",
			fill: "both",
			easing: "ease-out"
		});
		return a.pause(), a;
	}
	initEmphasizeAnimation(e, t, n, r, i) {
		let a = Math.max(0, r), o = Math.max(1e3, n), s = i > 0 ? i : Math.max(1, t.length), c = [], l = o / 2e3;
		l = l > 1 ? Math.sqrt(l) : l ** 3;
		let u = o / 3e3;
		u = u > 1 ? Math.sqrt(u) : u ** 3, l *= .6, u *= .5, this.lyricLine.words.length > 0 && e.word.includes(this.lyricLine.words[this.lyricLine.words.length - 1].word) && (l *= 1.6, u *= 1.5, o *= 1.2), l = Math.min(1.2, l), u = Math.min(.8, u);
		let d = Number.isFinite(o) ? o : 0, f = ot(tt);
		return c = t.flatMap((e, t, n) => {
			let r = a + o / 2.5 / s * t, i = [], c = Array(Y).fill(0).map((e, r) => {
				let i = (r + 1) / Y, a = f(i), o = f(i) * u, s = Qe(Ze(), 1 + a * .1 * l), c = -a * .03 * l * (n.length / 2 - t), d = -a * .025 * l;
				return {
					offset: i,
					transform: `${$e(s, 4)} translate(${c}em, ${d}em)`,
					textShadow: `0 0 ${Math.min(.3, u * .3)}em rgba(255, 255, 255, ${o})`
				};
			}), p = e.animate(c, {
				duration: d,
				delay: Number.isFinite(r) ? r : 0,
				id: `emphasize-word-${e.innerText}-${t}`,
				iterations: 1,
				composite: "replace",
				fill: "both"
			});
			p.onfinish = () => {
				p.pause();
			}, p.pause(), i.push(p);
			let m = Array(Y).fill(0).map((e, t) => {
				let n = (t + 1) / Y, r = Math.sin(n * Math.PI);
				return this.lyricLine.isBG && (r *= 2), {
					offset: n,
					transform: `translateY(${-r * .05}em)`
				};
			}), h = e.animate(m, {
				duration: d * 1.4,
				delay: Number.isFinite(r) ? r - 400 : 0,
				id: "emphasize-word-float",
				iterations: 1,
				composite: "add",
				fill: "both"
			});
			return h.onfinish = () => {
				h.pause();
			}, h.pause(), i.push(h), i;
		}), c;
	}
	get totalDuration() {
		return this.lyricLine.endTime - this.lyricLine.startTime;
	}
	onLineSizeChange(e) {
		this.updateMaskImageSync();
	}
	updateMaskImageSync() {
		for (let e of this.splittedWords) {
			let t = e.mainElement;
			t ? (e.padding = Number.parseFloat(getComputedStyle(t).paddingLeft), e.width = t.clientWidth - e.padding * 2, e.height = t.clientHeight - e.padding * 2) : (e.width = 0, e.height = 0, e.padding = 0);
		}
		if (this.lyricPlayer.supportMaskImage ? this.generateWebAnimationBasedMaskImage() : this.generateCalcBasedMaskImage(), this.isEnabled) {
			let e = this.lyricPlayer.getIsPlaying?.() ?? !0;
			this.enable(this.lyricPlayer.getCurrentTime(), e);
		}
	}
	generateCalcBasedMaskImage() {
		for (let e of this.splittedWords) {
			let t = e.mainElement;
			if (t) {
				e.width = t.clientWidth, e.height = t.clientHeight;
				let n = e.height * this.lyricPlayer.getWordFadeWidth(), [r, i] = st(n / e.width), a = `${i * 100}% 100%`;
				this.lyricPlayer.supportMaskImage ? (t.style.maskImage = r, t.style.maskRepeat = "no-repeat", t.style.maskOrigin = "left", t.style.maskSize = a) : (t.style.webkitMaskImage = r, t.style.webkitMaskRepeat = "no-repeat", t.style.webkitMaskOrigin = "left", t.style.webkitMaskSize = a);
				let o = e.width + n, s = `clamp(${-o}px,calc(${-o}px + (var(--amll-player-time) - ${e.startTime})*${o / Math.abs(e.endTime - e.startTime)}px),0px) 0px, left top`;
				t.style.maskPosition = s, t.style.webkitMaskPosition = s;
			}
		}
	}
	generateWebAnimationBasedMaskImage() {
		let e = Math.max(this.splittedWords.reduce((e, t) => Math.max(t.endTime, e), 0), this.lyricLine.endTime) - this.lyricLine.startTime;
		this.splittedWords.forEach((t, n) => {
			let r = t.mainElement;
			if (r) {
				let i = t.height * this.lyricPlayer.getWordFadeWidth(), [a, o] = st(i / (t.width + t.padding * 2)), s = `${o * 100}% 100%`;
				this.lyricPlayer.supportMaskImage ? (r.style.maskImage = a, r.style.maskRepeat = "no-repeat", r.style.maskOrigin = "left", r.style.maskSize = s) : (r.style.webkitMaskImage = a, r.style.webkitMaskRepeat = "no-repeat", r.style.webkitMaskOrigin = "left", r.style.webkitMaskSize = s);
				let c = this.splittedWords.slice(0, n).reduce((e, t) => e + t.width, 0) + (this.splittedWords[0] ? i : 0), l = -(t.width + t.padding * 2 + i), u = (e) => Math.max(l, Math.min(0, e)), d = -c - t.width - t.padding - i, f = 0, p = [], m = d, h = 0, g = () => {
					let e = d - m, t = Math.max(0, Math.min(1, f)), n = t - h, r = Math.abs(n / e);
					if (d > l && m < l) {
						let e = Math.abs(m - l) * r, t = `${u(m)}px 0`, n = {
							offset: h + e,
							maskPosition: t
						};
						p.push(n);
					}
					if (d > 0 && m < 0) {
						let e = Math.abs(m) * r, t = `${u(d)}px 0`, n = {
							offset: h + e,
							maskPosition: t
						};
						p.push(n);
					}
					let i = {
						offset: t,
						maskPosition: `${u(d)}px 0`
					};
					p.push(i), m = d, h = t;
				};
				g();
				let _ = 0;
				this.splittedWords.forEach((t, n) => {
					{
						let n = t.startTime - this.lyricLine.startTime, r = n - _;
						f += r / e, r > 0 && g(), _ = n;
					}
					{
						let r = Math.max(0, t.endTime - t.startTime), a = this.getRubySegments(t), o = a.reduce((e, t) => e + t.word.length, 0);
						if (o > 0) {
							let r = t.width / o, s = 0;
							for (let c of a) {
								let a = Number.isFinite(c.startTime) ? c.startTime : t.startTime, l = Number.isFinite(c.endTime) ? c.endTime : t.endTime, u = Math.max(a, t.startTime), p = Math.min(Math.max(l, u), t.endTime), m = u - this.lyricLine.startTime, h = m - _;
								f += h / e, h > 0 && g(), _ = m;
								let v = Math.max(0, p - u) / c.word.length;
								for (let t = 0; t < c.word.length; t++) f += v / e, d += r, n === 0 && s === 0 && (d += i * 1.5), n === this.splittedWords.length - 1 && s === o - 1 && (d += i * .5), v > 0 && g(), _ += v, s++;
							}
							let c = Math.max(t.endTime - this.lyricLine.startTime, _), l = c - _;
							f += l / e, l > 0 && g(), _ = c;
						} else {
							let a = t.width / 1, o = r / 1;
							for (let t = 0; t < 1; t++) f += o / e, d += a, n === 0 && t === 0 && (d += i * 1.5), n === this.splittedWords.length - 1 && t === 0 && (d += i * .5), o > 0 && g(), _ += o;
						}
					}
				});
				for (let e of t.maskAnimations) e.cancel();
				try {
					let i = r.animate(p, {
						duration: e || 1,
						id: `fade-word-${t.word}-${n}`,
						fill: "both"
					});
					i.pause(), t.maskAnimations = [i];
				} catch (t) {
					console.warn("应用渐变动画发生错误", p, e, t);
				}
			}
		});
	}
	getElement() {
		return this.element;
	}
	updateMaskAlphaTargets(e) {
		let t = Math.max(0, Math.min(1, (e - .97) / .03)), n = t * .2 + .2, r = t * .8 + .2;
		this.renderMode === B.SOLID ? (this.targetBrightAlpha = n, this.targetDarkAlpha = n) : (this.targetBrightAlpha = r, this.targetDarkAlpha = n);
	}
	applyAlphaToDom(e) {
		let t = e || .016, n = (e) => 1 - Math.exp(-e * t), r = n(this.targetBrightAlpha > this.currentBrightAlpha ? 50 : 7);
		Math.abs(this.targetBrightAlpha - this.currentBrightAlpha) < .001 ? this.currentBrightAlpha = this.targetBrightAlpha : this.currentBrightAlpha += (this.targetBrightAlpha - this.currentBrightAlpha) * r;
		let i = n(this.targetDarkAlpha > this.currentDarkAlpha ? 50 : 7);
		Math.abs(this.targetDarkAlpha - this.currentDarkAlpha) < .001 ? this.currentDarkAlpha = this.targetDarkAlpha : this.currentDarkAlpha += (this.targetDarkAlpha - this.currentDarkAlpha) * i, this.element.style.setProperty("--bright-mask-alpha", this.currentBrightAlpha.toFixed(3)), this.element.style.setProperty("--dark-mask-alpha", this.currentDarkAlpha.toFixed(3));
	}
	setTransform(e = this.top, t = this.scale, n = 1, r = 0, i = !1, a = 0, o = B.SOLID) {
		super.setTransform(e, t, n, r, i, a), this.renderMode = o;
		let s = this.isInSight, c = this.lyricPlayer.getEnableSpring();
		this.top = e, this.scale = t, this.delay = a * 1e3 | 0;
		let l = this.element.children[0], u = this.element.children[1], d = this.element.children[2], f = n * (this.lyricPlayer._getIsNonDynamic() ? .5 : .3);
		if (l.style.opacity = `${n}`, u.style.opacity = `${f}`, d.style.opacity = `${f}`, i || !c) {
			if (this.blur = Math.min(32, r), this.lineTransforms.posY.setPosition(e), this.lineTransforms.scale.setPosition(t), c) this.rebuildStyle();
			else {
				let e = this.isInSight;
				s || e ? this.show() : this.hide();
			}
			let n = this.lineTransforms.scale.getCurrentPosition();
			this.updateMaskAlphaTargets(n / 100), this.currentBrightAlpha = this.targetBrightAlpha, this.currentDarkAlpha = this.targetDarkAlpha, this.element.style.setProperty("--bright-mask-alpha", String(this.currentBrightAlpha)), this.element.style.setProperty("--dark-mask-alpha", String(this.currentDarkAlpha));
		} else if (this.lineTransforms.posY.setTargetPosition(e, a), this.lineTransforms.scale.setTargetPosition(t), this.blur !== Math.min(5, r)) {
			this.blur = Math.min(5, r);
			let e = r.toFixed(3);
			this.element.style.filter = `blur(${e}px)`;
		}
	}
	update(e = 0) {
		if (!this.lyricPlayer.getEnableSpring()) return;
		this.lineTransforms.posY.update(e), this.lineTransforms.scale.update(e), this.isInSight ? this.show() : this.hide();
		let t = this.lineTransforms.scale.getCurrentPosition() / 100;
		this.updateMaskAlphaTargets(t), this.applyAlphaToDom(e);
	}
	_getDebugTargetPos() {
		return `[位移: ${this.top}; 缩放: ${this.scale}; 延时: ${this.delay}]`;
	}
	get isInSight() {
		let e = this.lineTransforms.posY.getCurrentPosition(), t = this.lyricPlayer.lyricLinesSize.get(this)?.[1] ?? 0, n = e + t, r = this.lyricPlayer.size[1], i = this.lyricPlayer.getOverscanPx();
		return !(e > r + t + i || n < -t - i);
	}
	disposeElements() {
		for (let e of this.splittedWords) {
			for (let t of e.elementAnimations) t.cancel();
			for (let t of e.maskAnimations) t.cancel();
			for (let t of e.subElements) t.remove(), t.parentNode?.removeChild(t);
			e.elementAnimations = [], e.maskAnimations = [], e.subElements = [], e.mainElement?.parentNode && e.mainElement.parentNode.removeChild(e.mainElement);
		}
		this.splittedWords = [];
		let e = this.element.children[0], t = this.element.children[1], n = this.element.children[2];
		e && (e.innerHTML = ""), t && (t.innerHTML = ""), n && (n.innerHTML = "");
	}
	dispose() {
		this.disposeElements(), this.lyricPlayer.resizeObserver.unobserve(this.element), this.element.remove();
	}
}, ut = class extends MouseEvent {
	constructor(e, t, n) {
		super(`line-${n.type}`, n), this.lineIndex = e, this.line = t;
	}
}, dt = class extends G {
	currentLyricLineObjects = [];
	onResize() {
		let e = getComputedStyle(this.element);
		this._baseFontSize = Number.parseFloat(e.fontSize), this.rebuildStyle();
	}
	supportPlusLighter = CSS.supports("mix-blend-mode", "plus-lighter");
	supportMaskImage = CSS.supports("mask-image", "none");
	innerSize = [0, 0];
	onLineClickedHandler = (e) => {
		let t = new ut(this.lyricLinesIndexes.get(e.line) ?? -1, e.line, e);
		this.dispatchEvent(t) || (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation());
	};
	_getIsNonDynamic() {
		return this.isNonDynamic;
	}
	_baseFontSize = Number.parseFloat(getComputedStyle(this.element).fontSize);
	get baseFontSize() {
		return this._baseFontSize;
	}
	constructor() {
		super(), this.onResize(), this.element.classList.add("amll-lyric-player", "dom"), this.disableSpring && this.element.classList.add(I.disableSpring);
	}
	rebuildStyle() {}
	setWordFadeWidth(e = .5) {
		super.setWordFadeWidth(e);
		for (let e of this.currentLyricLineObjects) e.updateMaskImageSync();
	}
	setLyricLines(e, t = 0) {
		super.setLyricLines(e, t), this.hasDuetLine ? this.element.classList.add(I.hasDuetLine) : this.element.classList.remove(I.hasDuetLine), this.supportMaskImage || this.element.style.setProperty("--amll-player-time", `${t}`);
		for (let e of this.currentLyricLineObjects) e.removeMouseEventListener("click", this.onLineClickedHandler), e.removeMouseEventListener("contextmenu", this.onLineClickedHandler), e.dispose();
		this.currentLyricLineObjects = this.processedLines.map((e, t) => {
			let n = new lt(this, e);
			return n.addMouseEventListener("click", this.onLineClickedHandler), n.addMouseEventListener("contextmenu", this.onLineClickedHandler), this.lyricLinesIndexes.set(n, t), this.lyricLineElementMap.set(n.getElement(), n), n;
		}), this.setLinePosXSpringParams({}), this.setLinePosYSpringParams({}), this.setLineScaleSpringParams({}), this.calcLayout(!0), this.update(0);
	}
	pause() {
		super.pause(), this.element.classList.remove("playing"), this.interludeDots.pause();
		for (let e of this.currentLyricLineObjects) e.pause();
	}
	resume() {
		super.resume(), this.element.classList.add("playing"), this.interludeDots.resume();
		for (let e of this.currentLyricLineObjects) e.resume();
	}
	update(e = 0) {
		if (!this.initialLayoutFinished || (super.update(e), this.supportMaskImage || this.element.style.setProperty("--amll-player-time", `${this.currentTime}`), !this.isPageVisible)) return;
		let t = e / 1e3;
		this.interludeDots.update(e), this.bottomLine.update(t);
		for (let e of this.currentLyricLineObjects) e.update(t);
	}
	dispose() {
		super.dispose(), this.element.remove();
		for (let e of this.currentLyricLineObjects) e.dispose();
		this.bottomLine.dispose(), this.interludeDots.dispose();
	}
}, ft = /^\s+/, pt = /^[\p{L}0-9!"#$%&’()*+,-./:;<=>?@\[\]^_`\{|\}~]+/iu;
function* mt(e, t, n, r = 0) {
	let i = r, a = 0, o = 0, s = 0, c = !1, l = null, u = e.measureText(" ");
	for (; s < t.length;) {
		let r = t.substring(s);
		if (l = r.match(ft), l) {
			c = !0, o = s, s += l[0].length;
			continue;
		}
		if (l = r.match(pt), l) {
			s += l[0].length;
			let t = l[0], r = e.measureText(t);
			i + r.width > n.maxWidth && (i = 0, a++, c = !1), c && (c = !1, yield {
				text: " ",
				index: o,
				lineIndex: a,
				width: 0,
				height: n.fontSize,
				x: i
			}, i += u.width);
			let d = "", f = null;
			for (let r of t) {
				let t = e.measureText(`${d}${r}`), o = e.measureText(r);
				d !== "" && (i = i + t.width - o.width), i + o.width > n.maxWidth && (i = 0, a++), yield {
					text: r,
					index: s,
					lineIndex: a,
					width: o.width,
					height: n.fontSize,
					x: i
				}, d = r, f = o;
			}
			f && (i += f.width);
			continue;
		}
		{
			c && (c = !1, yield {
				text: " ",
				index: o,
				lineIndex: a,
				width: 0,
				height: n.fontSize,
				x: i
			}, i += u.width);
			let r = e.measureText(t[s]);
			i + r.width > n.maxWidth && (i = 0, a++), yield {
				text: t[s],
				index: s,
				lineIndex: a,
				width: r.width,
				height: n.fontSize,
				x: i
			}, i += r.width;
		}
		s++;
	}
	return {
		x: i,
		lineIndex: a
	};
}
function* X(e, t, n, r = 0) {
	let i = {
		text: "",
		index: 0,
		lineIndex: 0,
		width: 0,
		height: 0,
		x: 0
	};
	for (let a of mt(e, t, n, r)) a.lineIndex === i.lineIndex ? (i.text += a.text, i.width = a.x + a.width) : (i.text.length && (yield i), i = { ...a });
	i.text.length && (yield i);
}
//#endregion
//#region src/lyric-player/canvas/lyric-line.ts
var ht = class extends K {
	constructor(e, t = {
		words: [],
		translatedLyric: "",
		romanLyric: "",
		startTime: 0,
		endTime: 0,
		isBG: !1,
		isDuet: !1
	}) {
		super(), this.player = e, this.line = t, this.relayout();
	}
	getLine() {
		return this.line;
	}
	lineSize = [0, 0];
	measureSize() {
		let e = Math.max(0, ...this.layoutWords.flat().map((e) => e.lineIndex + 1)), t = Math.max(0, ...this.translatedLayoutWords.map((e) => e.lineIndex + 1)), n = Math.max(0, ...this.romanLayoutWords.map((e) => e.lineIndex + 1)), r = this.player.baseFontSize;
		return this.lineSize = [this.player.size[0], (e + t + n) * r + this.player.size[1] * .04], [...this.lineSize];
	}
	layoutWords = [];
	translatedLayoutWords = [];
	romanLayoutWords = [];
	lineCanvas = document.createElement("canvas");
	relayout() {
		let e = {
			fontSize: this.player.baseFontSize,
			maxWidth: this.player.size[0] - 50,
			lineHeight: this.player.baseFontSize,
			uniformSpace: !0
		}, t = this.player.ctx;
		this.player.setFontSize(1);
		for (let e of Xe(this.line.words)) if (Array.isArray(e) && e.length === 0) continue;
		this.layoutWords = [[...X(t, this.line.words.map((e) => e.word).join(""), e)]], this.player.setFontSize(.5), this.translatedLayoutWords = [...X(t, this.line.translatedLyric, e)], this.romanLayoutWords = [...X(t, this.line.romanLyric, e)], this.measureSize(), this.lineCanvas.width = this.player.ctx.canvas.width, this.lineCanvas.height = this.lineSize[1] * devicePixelRatio;
		let n = this.lineCanvas.getContext("2d");
		n.globalAlpha = 1, this.player.setFontSize(1), n.font = t.font, n.scale(devicePixelRatio, devicePixelRatio), n.fillStyle = "white", n.textBaseline = "top", n.textAlign = "left", n.font = `${this.player.baseFontSize}px ${this.player.baseFontFamily}`;
		let r = 0;
		for (let e of this.layoutWords) for (let t of e) n.fillText(t.text, t.x, t.lineIndex * this.player.baseFontSize * this.player.baseLineHeight), r = t.lineIndex;
		n.translate(0, (r + 1) * this.player.baseFontSize), this.player.setFontSize(.5), n.font = t.font, n.globalAlpha = .5, r = 0;
		for (let e of this.translatedLayoutWords) n.fillText(e.text, e.x, e.lineIndex * this.player.baseFontSize * this.player.baseLineHeight), r = e.lineIndex;
		n.translate(0, (r + 1) * this.player.baseFontSize);
		for (let e of this.romanLayoutWords) n.fillText(e.text, e.x, e.lineIndex * this.player.baseFontSize * this.player.baseLineHeight);
	}
	enable() {}
	disable() {}
	resume() {}
	pause() {}
	setTransform(e = this.top, t = this.scale, n = this.opacity, r = this.blur, i = !1, a = this.delay) {
		this.blur = Math.min(32, r), this.opacity = n, i ? (this.lineTransforms.posY.setPosition(e), this.lineTransforms.scale.setPosition(t)) : (this.lineTransforms.posY.setTargetPosition(e, a), this.lineTransforms.scale.setTargetPosition(t));
	}
	get isInSight() {
		let e = this.lineTransforms.posY.getCurrentPosition(), t = this.lineSize[0], n = e + this.lineSize[1];
		return !(e > this.player.size[1] || t < 0 || n < 0);
	}
	update(e) {
		if (this.lineTransforms.posY.update(e), this.lineTransforms.scale.update(e), !this.isInSight) return;
		let t = this.player.ctx;
		t.save(), t.fillStyle = "white", t.filter = `blur(${this.blur}px)`, t.textRendering = "geometricPrecision", t.globalAlpha = this.opacity, t.translate(0, this.lineTransforms.posY.getCurrentPosition()), t.scale(1 / devicePixelRatio, 1 / devicePixelRatio), this.lineCanvas.width * this.lineCanvas.height > 0 && t.drawImage(this.lineCanvas, 0, 0), t.restore();
	}
}, gt = class extends G {
	canvasElement = document.createElement("canvas");
	currentLyricLineObjects = [];
	ctx = this.canvasElement.getContext("2d");
	baseLineHeight = 1;
	baseFontSize = 30;
	baseFontFamily = "sans-serif";
	constructor() {
		super(), this.element.classList.add("amll-lyric-player", "dom"), this.canvasElement.style.width = "100%", this.canvasElement.style.height = "100%", this.canvasElement.style.display = "block", this.canvasElement.style.position = "absolute", this.onResize(), this.update(), this.element.addEventListener("mousemove", (e) => {
			e.preventDefault();
		}), this.element.addEventListener("click", (e) => {
			e.preventDefault();
		}), this.element.addEventListener("contextmenu", (e) => {
			e.preventDefault();
		}), this.element.appendChild(this.canvasElement), this.element.appendChild(this.interludeDots.getElement()), this.element.appendChild(this.bottomLine.getElement());
	}
	setLyricLines(e, t) {
		super.setLyricLines(e, t), this.currentLyricLineObjects = this.processedLines.map((e) => new ht(this, e)), this.setLinePosYSpringParams({}), this.setLineScaleSpringParams({}), this.calcLayout(!0);
	}
	onResize() {
		let e = getComputedStyle(this.element);
		this.baseFontSize = Number.parseFloat(e.fontSize) || 30, this.baseFontFamily = e.fontFamily;
		let t = this.canvasElement.clientWidth, n = this.canvasElement.clientHeight;
		this.size[0] = t - this.baseFontSize * 2, this.size[1] = n, this.canvasElement.width = t * devicePixelRatio, this.canvasElement.height = n * devicePixelRatio;
		for (let e of this.currentLyricLineObjects) e.relayout();
		console.log("CanvasLyricPlayer.onResize", this.size), this.calcLayout(!0);
	}
	setFontSize(e) {
		this.ctx.font = `${this.baseFontSize * e}px ${this.baseFontFamily}`;
	}
	update(e = 0) {
		super.update(e);
		let t = this.ctx, n = this.size[0], r = this.size[1];
		t.resetTransform(), t.scale(devicePixelRatio, devicePixelRatio), t.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height), t.fillStyle = "currentColor", t.font = `${this.baseFontSize}px ${this.baseFontFamily}`, t.textRendering = "optimizeSpeed", t.textAlign = "left", t.save(), t.translate(this.baseFontSize, 0);
		for (let t of this.currentLyricLineObjects) t.update(e / 1e3);
		t.restore(), t.font = `15px ${this.baseFontFamily}`, t.fillStyle = "#FFFFFF55", t.textAlign = "right", t.fillText("CanvasLyricPlayer 播放器", n - 16, r - 16);
	}
};
//#endregion
//#region src/utils/debounce.ts
function _t(e, t = 20) {
	let n = 0;
	return (...r) => {
		clearTimeout(n), n = setTimeout(() => e(...r), t);
	};
}
var Z = {
	lyricLine: "_lyricLine_1p6y5_6",
	lyricBgLine: "_lyricBgLine_1p6y5_36",
	active: "_active_1p6y5_49",
	hasDuetLine: "_hasDuetLine_1p6y5_65",
	lyricDuetLine: "_lyricDuetLine_1p6y5_66",
	lyricMainLine: "_lyricMainLine_1p6y5_80",
	romanWord: "_romanWord_1p6y5_89",
	rubyWord: "_rubyWord_1p6y5_95",
	wordWithRuby: "_wordWithRuby_1p6y5_103",
	wordBody: "_wordBody_1p6y5_109",
	lyricSubLine: "_lyricSubLine_1p6y5_116",
	interludeDots: "_interludeDots_1p6y5_123",
	enabled: "_enabled_1p6y5_134",
	duet: "_duet_1p6y5_148",
	tmpDisableTransition: "_tmpDisableTransition_1p6y5_160"
};
//#endregion
//#region src/utils/mutex.ts
function vt(e) {
	let t = [];
	function n() {
		let r = t[0];
		r && e(...r.args).then((e) => {
			r.resolve(e);
		}).catch((e) => {
			r.reject(e);
		}).finally(() => {
			t.shift(), t.length > 0 && n();
		});
	}
	return ((...e) => new Promise((r, i) => {
		t.push({
			resolve: r,
			reject: i,
			args: e
		}), t.length === 1 && n();
	}));
}
//#endregion
//#region src/lyric-player/dom-slim/lyric-line.ts
var Q = 32, yt = (e, t) => (n) => Math.min(1, Math.max(0, (n - e) / (t - e))), bt = .5, xt = yt(0, bt), St = yt(bt, 1), Ct = J(.2, .4, .58, 1), wt = J(.3, 0, .58, 1), Tt = (e) => (t) => t < e ? Ct(xt(t)) : 1 - wt(St(t));
function Et(e, t = 0, n = "rgba(0,0,0,var(--bright-mask-alpha, 1.0))", r = "rgba(0,0,0,var(--dark-mask-alpha, 1.0))") {
	let i = 2 + e + t, a = e / i, o = (1 - a) / 2;
	return [`linear-gradient(to right,${n} ${o * 100}%,${r} ${(o + a) * 100}%)`, i];
}
var Dt = class extends MouseEvent {
	constructor(e, t) {
		super(t.type, t), this.line = e;
	}
};
function Ot(e) {
	let t = e.match(/matrix\(([^)]+)\)/);
	if (t) {
		let e = t[1].split(", ");
		return (Number.parseFloat(e[0]) + Number.parseFloat(e[3])) / 2;
	}
	return 1;
}
var kt = class extends K {
	element = document.createElement("div");
	splittedWords = [];
	lineSize = [0, 0];
	constructor(e, t = {
		words: [],
		translatedLyric: "",
		romanLyric: "",
		startTime: 0,
		endTime: 0,
		isBG: !1,
		isDuet: !1
	}) {
		super(), this.lyricPlayer = e, this.lyricLine = t, this.element.setAttribute("class", Z.lyricLine), this.lyricLine.isBG && this.element.classList.add(Z.lyricBgLine), this.lyricLine.isDuet && this.element.classList.add(Z.lyricDuetLine), this.element.appendChild(document.createElement("div")), this.element.appendChild(document.createElement("div")), this.element.appendChild(document.createElement("div"));
		let n = this.element.children[0], r = this.element.children[1], i = this.element.children[2];
		n.setAttribute("class", Z.lyricMainLine), r.setAttribute("class", Z.lyricSubLine), i.setAttribute("class", Z.lyricSubLine), this.rebuildElement(), this.rebuildStyle(), this.markMaskImageDirty("Initial construction");
	}
	listenersMap = /* @__PURE__ */ new Map();
	onMouseEvent = (e) => {
		let t = new Dt(this, e);
		for (let n of this.listenersMap.get(e.type) ?? []) n.call(this, t);
		if (!this.dispatchEvent(t) || t.defaultPrevented) return e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), !1;
	};
	addMouseEventListener(e, t, n) {
		if (t) {
			let r = this.listenersMap.get(e) ?? /* @__PURE__ */ new Set();
			r.size === 0 && this.element.addEventListener(e, this.onMouseEvent, n), r.add(t), this.listenersMap.set(e, r);
		}
	}
	removeMouseEventListener(e, t, n) {
		if (t) {
			let r = this.listenersMap.get(e);
			r && (r.delete(t), r.size === 0 && this.element.removeEventListener(e, this.onMouseEvent, n));
		}
	}
	areWordsOnSameLine(e, t) {
		if (e?.mainElement && t?.mainElement) {
			let n = e.mainElement, r = t.mainElement, i = n.getBoundingClientRect(), a = r.getBoundingClientRect();
			return Math.abs(i.top - a.top) < 10;
		}
		return !0;
	}
	isEnabled = !1;
	async enable(e = this.lyricLine.startTime) {
		this.isEnabled = !0, this.element.classList.add(Z.active), await this.waitMaskImageUpdated();
		let t = this.element.children[0];
		for (let t of this.splittedWords) {
			for (let e of t.elementAnimations) e.currentTime = 0, e.playbackRate = 1, e.play();
			for (let n of t.maskAnimations) n.currentTime = Math.min(this.totalDuration, Math.max(0, e - this.lyricLine.startTime)), n.playbackRate = 1, n.play();
		}
		t.classList.add(Z.active);
	}
	disable() {
		this.isEnabled = !1, this.element.classList.remove(Z.active);
		let e = this.element.children[0];
		for (let e of this.splittedWords) for (let t of e.elementAnimations) (t.id === "float-word" || t.id.includes("emphasize-word-float-only")) && (t.playbackRate = -1, t.play());
		e.classList.remove(Z.active);
	}
	lastWord;
	async resume() {
		if (await this.waitMaskImageUpdated(), this.isEnabled) for (let e of this.splittedWords) {
			for (let t of e.elementAnimations) (!this.lastWord || this.splittedWords.indexOf(this.lastWord) < this.splittedWords.indexOf(e)) && t.play();
			for (let t of e.maskAnimations) (!this.lastWord || this.splittedWords.indexOf(this.lastWord) < this.splittedWords.indexOf(e)) && t.play();
		}
	}
	async pause() {
		if (await this.waitMaskImageUpdated(), this.isEnabled) for (let e of this.splittedWords) {
			for (let t of e.elementAnimations) t.pause();
			for (let t of e.maskAnimations) t.pause();
		}
	}
	setMaskAnimationState(e = 0) {
		let t = e - this.lyricLine.startTime;
		for (let e of this.splittedWords) for (let n of e.maskAnimations) n.currentTime = Math.min(this.totalDuration, Math.max(0, t)), n.playbackRate = 1, t >= 0 && t < this.totalDuration ? n.play() : n.pause();
	}
	measureLockMark = !1;
	measureLock = vt(async (e) => {
		this.measureLockMark ||= (this.measureLockMark = !0, await e(), !1);
	});
	getLine() {
		return this.lyricLine;
	}
	show() {
		this.rebuildStyle();
	}
	hide() {}
	rebuildStyle() {}
	getRubySegments(e) {
		return (e.ruby ?? []).filter((e) => (e?.word?.trim().length ?? 0) > 0);
	}
	buildWordElement(e, t, n, r, i) {
		let a = document.createElement("span"), o = [], s = e.romanWord?.trim() ?? "", c = a;
		if ((n || r) && (c = document.createElement("div"), a.appendChild(c)), n) {
			let t = document.createElement("div"), n = this.getRubySegments(e);
			for (let e of n) {
				let n = document.createElement("span");
				n.innerText = e.word, n.dataset.startTime = String(e.startTime), n.dataset.endTime = String(e.endTime), t.appendChild(n);
			}
			t.classList.add(Z.rubyWord), a.classList.add(Z.wordWithRuby), c.classList.add(Z.wordBody), a.insertBefore(t, c);
		}
		if (t) {
			a.classList.add(Z.emphasize);
			for (let e of i.trim()) {
				let t = document.createElement("span");
				t.innerText = e, o.push(t), c.appendChild(t);
			}
		} else if (r) {
			let e = document.createElement("div");
			e.innerText = i, c.appendChild(e);
		} else a.innerText = i;
		if (r) {
			let e = document.createElement("div");
			e.innerText = s.length > 0 ? s : "\xA0", e.classList.add(Z.romanWord), c.appendChild(e);
		}
		return {
			mainWordEl: a,
			subElements: o
		};
	}
	rebuildElement() {
		this.disposeElements();
		let e = this.element.children[0], t = this.element.children[1], n = this.element.children[2];
		if (this.lyricPlayer._getIsNonDynamic()) {
			e.innerText = this.lyricLine.words.map((e) => e.word).join(""), t.innerText = this.lyricLine.translatedLyric, n.innerText = this.lyricLine.romanLyric;
			return;
		}
		let r = Xe(this.lyricLine.words), i = this.lyricLine.words.some((e) => (e.ruby?.length ?? 0) > 0), a = this.lyricLine.words.some((e) => (e.romanWord?.trim().length ?? 0) > 0);
		e.innerHTML = "";
		for (let t of r) if (Array.isArray(t)) {
			if (t.length === 0) continue;
			let n = t.reduce((e, t) => (e.endTime = Math.max(e.endTime, t.endTime), e.startTime = Math.min(e.startTime, t.startTime), e.word += t.word, e), {
				word: "",
				romanWord: "",
				startTime: Infinity,
				endTime: -Infinity,
				wordType: "normal",
				obscene: !1
			}), r = t.map((e) => K.shouldEmphasize(e)).reduce((e, t) => e || t, K.shouldEmphasize(n)), o = document.createElement("span");
			o.classList.add(Z.emphasizeWrapper);
			let s = [];
			for (let e of t) {
				let { mainWordEl: t, subElements: n } = this.buildWordElement(e, r, i, a, e.word);
				r && s.push(...n), this.splittedWords.push({
					...e,
					mainElement: t,
					subElements: n,
					elementAnimations: [],
					maskAnimations: [],
					width: 0,
					height: 0,
					padding: 0,
					shouldEmphasize: r
				}), o.appendChild(t);
			}
			r && this.splittedWords[this.splittedWords.length - 1].elementAnimations.push(...this.initEmphasizeAnimation(n, s, n.endTime - n.startTime, n.startTime - this.lyricLine.startTime)), n.word.trimStart() !== n.word && e.appendChild(document.createTextNode(" ")), e.appendChild(o), n.word.trimEnd() !== n.word && K.shouldEmphasize(n) && e.appendChild(document.createTextNode(" "));
		} else if (t.word.trim().length === 0) e.appendChild(document.createTextNode(" "));
		else {
			let n = K.shouldEmphasize(t), { mainWordEl: r, subElements: o } = this.buildWordElement(t, n, i, a, t.word.trim()), s = {
				...t,
				mainElement: r,
				subElements: o,
				elementAnimations: [],
				maskAnimations: [],
				width: 0,
				height: 0,
				padding: 0,
				shouldEmphasize: n
			};
			if (n) {
				let e = Math.abs(s.endTime - s.startTime);
				s.elementAnimations.push(...this.initEmphasizeAnimation(t, o, e, s.startTime - this.lyricLine.startTime));
			}
			t.word.trimStart() !== t.word && e.appendChild(document.createTextNode(" ")), e.appendChild(r), t.word.trimEnd() !== t.word && e.appendChild(document.createTextNode(" ")), this.splittedWords.push(s);
		}
		t.innerText = this.lyricLine.translatedLyric, n.innerText = this.lyricLine.romanLyric;
	}
	initEmphasizeAnimation(e, t, n, r) {
		let i = Math.max(0, r), a = Math.max(1e3, n), o = [], s = a / 2e3;
		s = s > 1 ? Math.sqrt(s) : s ** 3;
		let c = a / 3e3;
		c = c > 1 ? Math.sqrt(c) : c ** 3, s *= .6, c *= .5, this.lyricLine.words.length > 0 && e.word.includes(this.lyricLine.words[this.lyricLine.words.length - 1].word) && (s *= 1.6, c *= 1.5, a *= 1.2), s = Math.min(1.2, s), c = Math.min(.8, c);
		let l = Number.isFinite(a) ? a : 0, u = Tt(bt);
		return o = t.flatMap((e, t, n) => {
			let r = i + a / 2.5 / n.length * t, o = [], d = Array(Q).fill(0).map((e, r) => {
				let i = (r + 1) / Q, a = u(i), o = u(i) * c, l = Qe(Ze(), 1 + a * .1 * s), d = -a * .03 * s * (n.length / 2 - t), f = -a * .025 * s;
				return {
					offset: i,
					transform: `${$e(l, 4)} translate(${d}em, ${f}em)`,
					textShadow: `0 0 ${Math.min(.3, c * .3)}em rgba(255, 255, 255, ${o})`
				};
			}), f = e.animate(d, {
				duration: l,
				delay: Number.isFinite(r) ? r : 0,
				id: `emphasize-word-${e.innerText}-${t}`,
				iterations: 1,
				composite: "replace",
				fill: "both"
			});
			f.onfinish = () => {
				f.pause();
			}, f.pause(), o.push(f);
			let p = Array(Q).fill(0).map((e, t) => {
				let n = (t + 1) / Q, r = Math.sin(n * Math.PI);
				return this.lyricLine.isBG && (r *= 2), {
					offset: n,
					transform: `translateY(${-r * .05}em)`
				};
			}), m = e.animate(p, {
				duration: l * 1.4,
				delay: Number.isFinite(r) ? r - 400 : 0,
				id: "emphasize-word-float",
				iterations: 1,
				composite: "add",
				fill: "both"
			});
			return m.onfinish = () => {
				m.pause();
			}, m.pause(), o.push(m), o;
		}), o;
	}
	get totalDuration() {
		return this.lyricLine.endTime - this.lyricLine.startTime;
	}
	maskImageDirty = !1;
	markImageDirtyPromiseResolve = /* @__PURE__ */ new Set();
	markImageDirtyPromise = new Promise((e) => {
		this.markImageDirtyPromiseResolve.add(e);
	});
	markMaskImageDirty(e = "") {
		this.maskImageDirty = !0, this.element.classList.contains(Z.dirty) || this.element.classList.add(Z.dirty);
		let t = Promise.all([this.markImageDirtyPromise, new Promise((e) => {
			this.markImageDirtyPromiseResolve.add(e);
		})]).then(() => {});
		return this.markImageDirtyPromise = t, t;
	}
	waitMaskImageUpdated() {
		return this.markImageDirtyPromise;
	}
	async updateMaskImage() {
		if (this.element.checkVisibility({ contentVisibilityAuto: !0 })) {
			this.maskImageDirty = !1, await this.measureLock(async () => {
				await Promise.all(this.splittedWords.map(async (e) => {
					let t = e.mainElement;
					t ? await Re(() => {
						e.padding = Number.parseFloat(getComputedStyle(t).paddingLeft), e.width = t.clientWidth - e.padding * 2, e.height = t.clientHeight - e.padding * 2;
					}) : (e.width = 0, e.height = 0, e.padding = 0), e.width * e.height === 0 && console.warn("Word size is zero");
				})), await ze(() => {
					this.lyricPlayer.supportMaskImage ? this.generateWebAnimationBasedMaskImage() : this.generateCalcBasedMaskImage();
				});
			});
			for (let e of this.markImageDirtyPromiseResolve) e(), this.markImageDirtyPromiseResolve.delete(e);
			await ze(() => {
				this.element.classList.remove(Z.dirty);
			});
		}
	}
	generateCalcBasedMaskImage() {
		for (let e of this.splittedWords) {
			let t = e.mainElement;
			if (t) {
				e.width = t.clientWidth, e.height = t.clientHeight;
				let n = e.height * this.lyricPlayer.getWordFadeWidth(), [r, i] = Et(n / e.width), a = `${i * 100}% 100%`;
				this.lyricPlayer.supportMaskImage ? (t.style.maskImage = r, t.style.maskRepeat = "no-repeat", t.style.maskOrigin = "left", t.style.maskSize = a) : (t.style.webkitMaskImage = r, t.style.webkitMaskRepeat = "no-repeat", t.style.webkitMaskOrigin = "left", t.style.webkitMaskSize = a);
				let o = e.width + n, s = `clamp(${-o}px,calc(${-o}px + (var(--amll-player-time) - ${e.startTime})*${o / Math.abs(e.endTime - e.startTime)}px),0px) 0px, left top`;
				t.style.maskPosition = s, t.style.webkitMaskPosition = s;
			}
		}
	}
	generateWebAnimationBasedMaskImage() {
		let e = Math.max(this.splittedWords.reduce((e, t) => Math.max(t.endTime, e), 0), this.lyricLine.endTime) - this.lyricLine.startTime;
		this.splittedWords.forEach((t, n) => {
			let r = t.mainElement;
			if (r) {
				let i = t.height * this.lyricPlayer.getWordFadeWidth(), [a, o] = Et(i / (t.width + t.padding * 2)), s = `${o * 100}% 100%`;
				this.lyricPlayer.supportMaskImage ? (r.style.maskImage = a, r.style.maskRepeat = "no-repeat", r.style.maskOrigin = "left", r.style.maskSize = s) : (r.style.webkitMaskImage = a, r.style.webkitMaskRepeat = "no-repeat", r.style.webkitMaskOrigin = "left", r.style.webkitMaskSize = s);
				let c = this.splittedWords.slice(0, n).reduce((e, t) => e + t.width, 0) + (this.splittedWords[0] ? i : 0), l = -(t.width + t.padding * 2 + i), u = (e) => Math.max(l, Math.min(0, e)), d = -c - t.width - t.padding - i, f = 0, p = [], m = d, h = 0, g = () => {
					let e = d - m, t = Math.max(0, Math.min(1, f)), n = t - h, r = Math.abs(n / e);
					if (d > l && m < l) {
						let e = Math.abs(m - l) * r, t = `${u(m)}px 0`, n = {
							offset: h + e,
							maskPosition: t
						};
						p.push(n);
					}
					if (d > 0 && m < 0) {
						let e = Math.abs(m) * r, t = `${u(d)}px 0`, n = {
							offset: h + e,
							maskPosition: t
						};
						p.push(n);
					}
					let i = {
						offset: t,
						maskPosition: `${u(d)}px 0`
					};
					p.push(i), m = d, h = t;
				};
				g();
				let _ = 0;
				this.splittedWords.forEach((t, n) => {
					{
						let n = t.startTime - this.lyricLine.startTime, r = n - _;
						f += r / e, r > 0 && g(), _ = n;
					}
					{
						let r = t.endTime - t.startTime, a = this.getRubySegments(t), o = a.reduce((e, t) => e + t.word.length, 0);
						if (o > 0) {
							let r = t.width / o, s = 0;
							for (let c of a) {
								let a = Number.isFinite(c.startTime) ? c.startTime : t.startTime, l = Number.isFinite(c.endTime) ? c.endTime : t.endTime, u = Math.max(a, t.startTime), p = Math.min(Math.max(l, u), t.endTime), m = u - this.lyricLine.startTime, h = m - _;
								f += h / e, h > 0 && g(), _ = m;
								let v = Math.max(0, p - u) / c.word.length;
								for (let t = 0; t < c.word.length; t++) f += v / e, d += r, n === 0 && s === 0 && (d += i * 1.5), n === this.splittedWords.length - 1 && s === o - 1 && (d += i * .5), v > 0 && g(), _ += v, s++;
							}
							let c = Math.max(t.endTime - this.lyricLine.startTime, _), l = c - _;
							f += l / e, l > 0 && g(), _ = c;
						} else f += r / e, d += t.width, n === 0 && (d += i * 1.5), n === this.splittedWords.length - 1 && (d += i * .5), r > 0 && g(), _ += r;
					}
				});
				for (let e of t.maskAnimations) e.cancel();
				try {
					let i = r.animate(p, {
						duration: e || 1,
						id: `fade-word-${t.word}-${n}`,
						fill: "both"
					});
					i.pause(), t.maskAnimations = [i];
				} catch (t) {
					console.warn("应用渐变动画发生错误", p, e, t);
				}
			}
		});
	}
	getElement() {
		return this.element;
	}
	setTransform(e = this.top, t = this.scale, n = 1, r = 0, i = !1, a = 0) {
		super.setTransform(e, t, n, r, i, a);
		let o = this.isInSight, s = this.lyricPlayer.getEnableSpring();
		this.top = e, this.scale = t, this.delay = a * 1e3 | 0;
		let c = this.element.children[0];
		if (c.style.opacity = `${n}`, i || !s) {
			if (i && this.element.classList.add(Z.tmpDisableTransition), this.lineTransforms.posY.setPosition(e), this.lineTransforms.scale.setPosition(t), s) this.rebuildStyle();
			else {
				let e = this.isInSight;
				o || e ? this.show() : this.hide();
			}
			i && requestAnimationFrame(() => {
				this.element.classList.remove(Z.tmpDisableTransition);
			});
		} else this.lineTransforms.posY.setTargetPosition(e, a), this.lineTransforms.scale.setTargetPosition(t);
	}
	update(e = 0) {
		if (this.lyricPlayer.getEnableSpring()) if (this.lineTransforms.posY.update(e), this.lineTransforms.scale.update(e), this.isInSight ? (this.show(), this.maskImageDirty && this.updateMaskImage()) : this.hide(), this.lyricPlayer.getEnableSpring()) this.element.style.setProperty("--bright-mask-alpha", `${Math.max(0, Math.min(1, this.lineTransforms.scale.getCurrentPosition() / 100 - .97) / .03) * .8 + .2}`), this.element.style.setProperty("--dark-mask-alpha", `${Math.max(0, Math.min(1, this.lineTransforms.scale.getCurrentPosition() / 100 - .97) / .03) * .2 + .2}`);
		else {
			let e = window.getComputedStyle(this.element).transform, t = Ot(e);
			this.element.style.setProperty("--bright-mask-alpha", `${Math.max(0, Math.min(1, (t - .97) / .03)) * .8 + .2}`), this.element.style.setProperty("--dark-mask-alpha", `${Math.max(0, Math.min(1, (t - .97) / .03)) * .2 + .2}`);
		}
	}
	_getDebugTargetPos() {
		return `[位移: ${this.top}; 缩放: ${this.scale}; 延时: ${this.delay}]`;
	}
	get isInSight() {
		let e = this.lineTransforms.posY.getCurrentPosition(), t = this.lineSize[1], n = e + t;
		return !(e > this.lyricPlayer.size[1] + t || n < -t);
	}
	disposeElements() {
		for (let e of this.splittedWords) {
			for (let t of e.elementAnimations) t.cancel();
			for (let t of e.maskAnimations) t.cancel();
			for (let t of e.subElements) t.remove(), t.parentNode?.removeChild(t);
			e.elementAnimations = [], e.maskAnimations = [], e.subElements = [], e.mainElement.remove(), e.mainElement.parentNode?.removeChild(e.mainElement);
		}
		this.splittedWords = [];
	}
	dispose() {
		this.disposeElements(), this.element.remove();
	}
}, At = class extends G {
	currentLyricLineObjects = [];
	debounceCalcLayout = _t(() => this.calcLayout(!0).then(() => this.currentLyricLineObjects.map(async (e, t) => {
		e.markMaskImageDirty("DomLyricPlayer onResize"), await e.waitMaskImageUpdated(), this.hotLines.has(t) && (e.enable(this.currentTime), e.resume());
	})), 1e3);
	onResize() {
		let e = getComputedStyle(this.element);
		this._baseFontSize = Number.parseFloat(e.fontSize);
		let t = this.element.clientWidth - Number.parseFloat(e.paddingLeft) - Number.parseFloat(e.paddingRight), n = this.element.clientHeight - Number.parseFloat(e.paddingTop) - Number.parseFloat(e.paddingBottom);
		this.innerSize[0] = t, this.innerSize[1] = n, this.rebuildStyle(), this.debounceCalcLayout();
	}
	supportPlusLighter = CSS.supports("mix-blend-mode", "plus-lighter");
	supportMaskImage = CSS.supports("mask-image", "none");
	innerSize = [0, 0];
	onLineClickedHandler = (e) => {
		let t = new ut(this.lyricLinesIndexes.get(e.line) ?? -1, e.line, e);
		this.dispatchEvent(t) || (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation());
	};
	_getIsNonDynamic() {
		return this.isNonDynamic;
	}
	_baseFontSize = Number.parseFloat(getComputedStyle(this.element).fontSize);
	get baseFontSize() {
		return this._baseFontSize;
	}
	constructor() {
		super(), this.onResize(), this.element.classList.add("amll-lyric-player", "dom-slim"), this.disableSpring && this.element.classList.add(Z.disableSpring);
	}
	rebuildStyle() {
		let e = this.innerSize[0], t = this.innerSize[1];
		this.element.style.setProperty("--amll-lp-width", `${e.toFixed(4)}px`), this.element.style.setProperty("--amll-lp-height", `${t.toFixed(4)}px`);
	}
	setWordFadeWidth(e = .5) {
		super.setWordFadeWidth(e);
		for (let e of this.currentLyricLineObjects) e.markMaskImageDirty("DomLyricPlayer setWordFadeWidth");
	}
	setLyricLines(e, t = 0) {
		super.setLyricLines(e, t), this.hasDuetLine ? this.element.classList.add(Z.hasDuetLine) : this.element.classList.remove(Z.hasDuetLine);
		for (let e of this.currentLyricLineObjects) e.removeMouseEventListener("click", this.onLineClickedHandler), e.removeMouseEventListener("contextmenu", this.onLineClickedHandler), e.dispose();
		this.currentLyricLineObjects = this.processedLines.map((e, t) => {
			let n = new kt(this, e);
			return n.addMouseEventListener("click", this.onLineClickedHandler), n.addMouseEventListener("contextmenu", this.onLineClickedHandler), this.element.appendChild(n.getElement()), this.lyricLinesIndexes.set(n, t), n.markMaskImageDirty("DomLyricPlayer setLyricLines"), n;
		}), this.setLinePosXSpringParams({}), this.setLinePosYSpringParams({}), this.setLineScaleSpringParams({}), this.calcLayout(!0).then(() => {
			this.initialLayoutFinished = !0;
		});
	}
	pause() {
		super.pause(), this.interludeDots.pause();
		for (let e of this.currentLyricLineObjects) e.pause();
	}
	resume() {
		super.resume(), this.interludeDots.resume();
		for (let e of this.currentLyricLineObjects) e.resume();
	}
	update(e = 0) {
		if (!this.initialLayoutFinished || (super.update(e), !this.isPageVisible)) return;
		let t = e / 1e3;
		this.interludeDots.update(e), this.bottomLine.update(t);
		for (let e of this.currentLyricLineObjects) e.update(t);
	}
	async calcLayout(e) {
		await super.calcLayout(e);
		let t = this.currentLyricLineObjects[this.targetAlignIndex], n = t.getElement(), r = n.checkVisibility({ contentVisibilityAuto: !0 }), i = this.element.getBoundingClientRect().top;
		r || n.scrollIntoView({
			block: "center",
			behavior: "instant"
		});
		let a = n.clientHeight, o = n.getBoundingClientRect().top - i - this.size[1] * this.alignPosition;
		if (t) switch (this.alignAnchor) {
			case "bottom":
				o += a;
				break;
			case "center":
				o += a / 2;
				break;
			case "top": break;
		}
		this.element.scrollBy({
			top: o,
			behavior: "smooth"
		});
	}
	dispose() {
		super.dispose(), this.element.remove();
		for (let e of this.currentLyricLineObjects) e.dispose();
		this.bottomLine.dispose(), this.interludeDots.dispose();
	}
}, $ = /* @__PURE__ */ function(e) {
	return e.Disabled = "", e.FullMask = "full-mask", e;
}($ || {});
//#endregion
export { s as AbstractBaseRenderer, he as BackgroundRender, c as BaseRenderer, gt as CanvasLyricPlayer, dt as DomLyricPlayer, dt as LyricPlayer, At as DomSlimLyricPlayer, ut as LyricLineMouseEvent, G as LyricPlayerBase, $ as MaskObsceneWordsMode, fe as MeshGradientRenderer, me as PixiRenderer };

//# sourceMappingURL=amll-core.js.map