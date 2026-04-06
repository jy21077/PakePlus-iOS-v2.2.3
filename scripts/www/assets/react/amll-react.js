import { BackgroundRender as e, BaseRenderer as t, LyricPlayer as n, MeshGradientRenderer as r, MeshGradientRenderer as i, PixiRenderer as a } from "@applemusic-like-lyrics/core";
import { forwardRef as o, useEffect as s, useImperativeHandle as c, useLayoutEffect as l, useRef as u, useState as d } from "react";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
import { createPortal as h } from "react-dom";
//#region src/bg-render.tsx
var g = o(({ album: t, albumIsVideo: n, fps: r, playing: a, flowSpeed: o, renderScale: l, staticMode: d, lowFreqVolume: f, hasLyric: m, renderer: h, style: g, ..._ }, v) => {
	let y = u(null), b = u(null), x = u(null), S = h ?? i;
	return s(() => {
		(x.current !== S || y.current === void 0) && (x.current = S, y.current?.dispose(), y.current = e.new(S));
	}, [S]), s(() => {
		S && t && y.current?.setAlbum(t, n);
	}, [
		S,
		t,
		n
	]), s(() => {
		S && r && y.current?.setFPS(r);
	}, [S, r]), s(() => {
		S && (a === void 0 || a ? y.current?.resume() : y.current?.pause());
	}, [S, a]), s(() => {
		S && o && y.current?.setFlowSpeed(o);
	}, [S, o]), s(() => {
		S && y.current?.setStaticMode(d ?? !1);
	}, [S, d]), s(() => {
		S && l && y.current?.setRenderScale(l ?? .5);
	}, [S, l]), s(() => {
		S && f && y.current?.setLowFreqVolume(f ?? 1);
	}, [S, f]), s(() => {
		S && m !== void 0 && y.current?.setHasLyric(m ?? !0);
	}, [S, m]), s(() => {
		if (y.current) {
			let e = y.current.getElement();
			e.style.width = "100%", e.style.height = "100%", e.style.minHeight = "0", e.style.minWidth = "0", e.style.overflow = "hidden", b.current?.appendChild(e);
		}
	}, [y.current]), c(v, () => ({
		wrapperEl: b.current,
		bgRender: y.current
	}), [b.current, y.current]), /* @__PURE__ */ p("div", {
		style: {
			display: "contents",
			...g
		},
		..._,
		ref: b
	});
}), _ = o(({ disabled: e, playing: t, alignAnchor: r, alignPosition: i, enableSpring: a, enableBlur: o, enableScale: g, hidePassedLines: _, lyricLines: v, currentTime: y, isSeeking: b, wordFadeWidth: x, linePosXSpringParams: S, linePosYSpringParams: C, lineScaleSpringParams: w, bottomLine: T, lyricPlayer: E, onLyricLineClick: D, onLyricLineContextMenu: O, ...k }, A) => {
	let [j, M] = d(), N = u(null), P = u(y);
	return l(() => {
		let e = new (E ?? n)();
		return M(e), N.current?.appendChild(e.getElement()), () => {
			e?.dispose(), M(void 0);
		};
	}, [E]), l(() => {
		v === void 0 ? (j?.setLyricLines([]), j?.update()) : (j?.setLyricLines(v, P.current), j?.update());
	}, [j, v]), s(() => {
		if (!e) {
			let e = !1, t = -1, n = (r) => {
				e || (t === -1 && (t = r), j?.update(r - t), t = r, requestAnimationFrame(n));
			};
			return j?.calcLayout(), requestAnimationFrame(n), () => {
				e = !0;
			};
		}
	}, [j, e]), s(() => {
		t === void 0 || t ? j?.resume() : j?.pause();
	}, [j, t]), s(() => {
		r !== void 0 && j?.setAlignAnchor(r);
	}, [j, r]), s(() => {
		_ !== void 0 && j?.setHidePassedLines(_);
	}, [j, _]), s(() => {
		i !== void 0 && j?.setAlignPosition(i);
	}, [j, i]), s(() => {
		a === void 0 ? j?.setEnableSpring(!0) : j?.setEnableSpring(a);
	}, [j, a]), s(() => {
		g === void 0 ? j?.setEnableScale(!0) : j?.setEnableScale(g);
	}, [j, g]), s(() => {
		j?.setEnableBlur(o ?? !0);
	}, [j, o]), s(() => {
		y === void 0 ? j?.setCurrentTime(0) : (j?.setCurrentTime(y, b), P.current = y);
	}, [
		j,
		y,
		b
	]), s(() => {
		j?.setIsSeeking(!!b);
	}, [j, b]), s(() => {
		j?.setWordFadeWidth(x);
	}, [j, x]), s(() => {
		S !== void 0 && j?.setLinePosXSpringParams(S);
	}, [j, S]), s(() => {
		C !== void 0 && j?.setLinePosYSpringParams(C);
	}, [j, C]), s(() => {
		w !== void 0 && j?.setLineScaleSpringParams(w);
	}, [j, w]), s(() => {
		if (D) {
			let e = (e) => D(e);
			return j?.addEventListener("line-click", e), () => j?.removeEventListener("line-click", e);
		}
	}, [j, D]), s(() => {
		if (O) {
			let e = (e) => O(e);
			return j?.addEventListener("line-contextmenu", e), () => j?.removeEventListener("line-contextmenu", e);
		}
	}, [j, O]), c(A, () => ({
		wrapperEl: N.current,
		lyricPlayer: j
	}), [j]), /* @__PURE__ */ m(f, { children: [/* @__PURE__ */ p("div", {
		...k,
		ref: N
	}), j?.getBottomLineElement() && T ? h(T, j?.getBottomLineElement()) : null] });
});
//#endregion
export { g as BackgroundRender, t as BaseRenderer, _ as LyricPlayer, r as MeshGradientRenderer, a as PixiRenderer };

//# sourceMappingURL=amll-react.js.map