//#region src/parser.ts
function e(e) {
	return e.localName || e.tagName.split(":").pop() || e.tagName;
}
function t(e, t) {
	let n = e.getAttribute(t);
	if (n !== null) return n;
	for (let n of Array.from(e.attributes)) if (n.localName === t || n.name === t || n.name.endsWith(`:${t}`)) return n.value;
	return null;
}
function n(e) {
	let t = e.trim();
	if (!t) return 0;
	if (t.endsWith("s") && !t.includes(":")) {
		let e = Number(t.slice(0, -1));
		return Number.isFinite(e) ? Math.round(e * 1e3) : 0;
	}
	let n = t.split(":"), [r, i] = (n[n.length - 1] ?? "0").split("."), a = Number(r || "0"), o = i === void 0 ? 0 : Number(i.padEnd(3, "0").slice(0, 3)), s = 0, c = 0;
	return n.length === 2 ? s = Number(n[0] || "0") : n.length >= 3 && (c = Number(n[0] || "0"), s = Number(n[1] || "0")), !Number.isFinite(a) || !Number.isFinite(o) || !Number.isFinite(s) || !Number.isFinite(c) ? 0 : ((c * 60 + s) * 60 + a) * 1e3 + o;
}
function r(n) {
	let i = {
		text: "",
		begin: t(n, "begin"),
		end: t(n, "end"),
		role: t(n, "role"),
		lang: t(n, "lang"),
		emptyBeat: t(n, "empty-beat"),
		ruby: t(n, "ruby"),
		children: [],
		tail: ""
	}, a = null;
	for (let t of Array.from(n.childNodes)) if (t.nodeType === Node.TEXT_NODE) {
		let e = t.textContent ?? "";
		a ? a.tail += e : i.text += e;
	} else if (t.nodeType === Node.ELEMENT_NODE) {
		let n = t;
		if (e(n) === "span") {
			let e = r(n);
			i.children.push(e), a = e;
		}
	}
	return i;
}
function i(e, t) {
	let n = e.role ? t?.has(e.role) : !1, r = "";
	if (!n) {
		r += e.text || "";
		for (let n of e.children) r += i(n, t);
	}
	return r += e.tail || "", r;
}
function a(e, t) {
	let n = e.role ? t?.has(e.role) : !1, r = "";
	if (!n) {
		r += e.text || "";
		for (let n of e.children) r += i(n, t);
	}
	return r;
}
function o(e) {
	let t = [];
	e.ruby === "text" && t.push(e);
	for (let n of e.children) t.push(...o(n));
	return t;
}
function s(e) {
	let t = e.filter((e) => e.word.trim().length > 0), n = t.reduce((e, t) => Math.min(e, t.startTime), Infinity) ?? 0, r = t.reduce((e, t) => Math.max(e, t.endTime), 0);
	return [n === Infinity ? 0 : n, r];
}
function c(e) {
	let i = t(e, "begin"), c = t(e, "end"), l = r(e), u = new Set(["x-translation", "x-roman"]);
	if (l.ruby === "container") {
		let r = a(l.children.find((e) => e.ruby === "base") || l, u), d = o(l), f = i ? n(i) : null, p = c ? n(c) : null, m = d.map((e) => {
			let t = e.begin ? n(e.begin) : f ?? 0, r = e.end ? n(e.end) : p ?? 0;
			return {
				word: a(e, u),
				startTime: t,
				endTime: r
			};
		}), [h, g] = s(m), _ = {
			word: r,
			startTime: f ?? h,
			endTime: p ?? g,
			obscene: !1,
			emptyBeat: 0,
			romanWord: "",
			ruby: m.length > 0 ? m : void 0
		}, v = t(e, "empty-beat");
		return v && (_.emptyBeat = Number(v)), t(e, "obscene") === "true" && (_.obscene = !0), _;
	}
	if (!i || !c) return null;
	let d = {
		word: a(l, u),
		startTime: n(i),
		endTime: n(c),
		obscene: !1,
		emptyBeat: 0,
		romanWord: ""
	}, f = t(e, "empty-beat");
	return f && (d.emptyBeat = Number(f)), t(e, "obscene") === "true" && (d.obscene = !0), d;
}
function l(e) {
	let t = new DOMParser().parseFromString(e, "application/xml"), r = /* @__PURE__ */ new Map();
	t.querySelectorAll("iTunesMetadata > translations > translation > text[for]").forEach((e) => {
		let t = e.getAttribute("for");
		if (!t) return;
		let n = "", i = "";
		for (let t of Array.from(e.childNodes)) t.nodeType === Node.TEXT_NODE ? n += t.textContent ?? "" : t.nodeType === Node.ELEMENT_NODE && t.getAttribute("ttm:role") === "x-bg" && (i += t.textContent ?? "");
		n = n.trim(), i = i.trim().replace(/^[（(]/, "").replace(/[)）]$/, "").trim(), (n.length > 0 || i.length > 0) && r.set(t, {
			main: n,
			bg: i
		});
	});
	let i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
	t.querySelectorAll("iTunesMetadata > transliterations > transliteration > text[for]").forEach((e) => {
		let t = e.getAttribute("for");
		if (!t) return;
		let r = [], o = [], s = "", c = "", l = !1;
		for (let t of Array.from(e.childNodes)) if (t.nodeType === Node.TEXT_NODE) s += t.textContent ?? "";
		else if (t.nodeType === Node.ELEMENT_NODE) {
			let e = t;
			if (e.getAttribute("ttm:role") === "x-bg") {
				let t = e.querySelectorAll("span[begin][end]");
				t.length > 0 ? (l = !0, t.forEach((e) => {
					let t = e.textContent ?? "";
					t = t.trim().replace(/^[（(]/, "").replace(/[)）]$/, "").trim(), o.push({
						startTime: n(e.getAttribute("begin") ?? ""),
						endTime: n(e.getAttribute("end") ?? ""),
						text: t
					});
				})) : c += e.textContent ?? "";
			} else e.hasAttribute("begin") && e.hasAttribute("end") && (l = !0, r.push({
				startTime: n(e.getAttribute("begin") ?? ""),
				endTime: n(e.getAttribute("end") ?? ""),
				text: e.textContent ?? ""
			}));
		}
		l && a.set(t, {
			main: r,
			bg: o
		}), s = s.trim(), c = c.trim().replace(/^[（(]/, "").replace(/[)）]$/, "").trim(), (s.length > 0 || c.length > 0) && i.set(t, {
			main: s,
			bg: c
		});
	});
	let o = /* @__PURE__ */ new Map();
	t.querySelectorAll("iTunesMetadata > translations > translation > text[for]").forEach((e) => {
		let t = e.getAttribute("for");
		if (!t) return;
		let n = "", i = "";
		for (let t of Array.from(e.childNodes)) t.nodeType === Node.TEXT_NODE ? n += t.textContent ?? "" : t.nodeType === Node.ELEMENT_NODE && t.getAttribute("ttm:role") === "x-bg" && (i += t.textContent ?? "");
		n = n.trim(), i = i.trim().replace(/^[（(]/, "").replace(/[)）]$/, "").trim(), (n.length > 0 || i.length > 0) && e.querySelector("span") && (o.set(t, {
			main: n,
			bg: i
		}), r.delete(t));
	});
	let s = "v1", l = [];
	for (let e of t.querySelectorAll("meta")) if (e.tagName === "amll:meta") {
		let t = e.getAttribute("key");
		if (t) {
			let n = e.getAttribute("value");
			if (n) {
				let e = l.find((e) => e.key === t);
				e ? e.value.push(n) : l.push({
					key: t,
					value: [n]
				});
			}
		}
	}
	let u = t.querySelectorAll("iTunesMetadata > songwriters > songwriter");
	if (u.length > 0) {
		let e = [];
		u.forEach((t) => {
			let n = t.textContent?.trim();
			n && e.push(n);
		}), e.length > 0 && l.push({
			key: "songwriter",
			value: e
		});
	}
	for (let e of t.querySelectorAll("ttm\\:agent")) if (e.getAttribute("type") === "person") {
		let t = e.getAttribute("xml:id");
		if (t) {
			s = t;
			break;
		}
	}
	let d = [];
	function f(e, t = !1, l = !1, u = null) {
		let p = e.getAttribute("begin"), m = e.getAttribute("end"), h = 0, g = 0;
		p && m && (h = n(p), g = n(m));
		let _ = {
			words: [],
			translatedLyric: "",
			romanLyric: "",
			isBG: t,
			isDuet: t ? l : !!e.getAttribute("ttm:agent") && e.getAttribute("ttm:agent") !== s,
			startTime: h,
			endTime: g
		}, v = !1, y = t ? u : e.getAttribute("itunes:key"), b = y ? a.get(y) : void 0, x = t ? b?.bg : b?.main, S = x ? [...x] : [];
		if (y) {
			let e = o.get(y), n = r.get(y);
			t ? _.translatedLyric = e?.bg ?? n?.bg ?? "" : _.translatedLyric = e?.main ?? n?.main ?? "";
			let a = i.get(y);
			t ? _.romanLyric = a?.bg ?? "" : _.romanLyric = a?.main ?? "";
		}
		for (let t of e.childNodes) if (t.nodeType === Node.TEXT_NODE) {
			let e = t.textContent ?? "";
			_.words.push({
				word: e,
				startTime: e.trim().length > 0 ? _.startTime : 0,
				endTime: e.trim().length > 0 ? _.endTime : 0,
				obscene: !1,
				emptyBeat: 0,
				romanWord: ""
			});
		} else if (t.nodeType === Node.ELEMENT_NODE) {
			let e = t, n = e.getAttribute("ttm:role");
			if (e.nodeName === "span" && n) n === "x-bg" ? (f(e, !0, _.isDuet, y), v = !0) : n === "x-translation" ? _.translatedLyric ||= e.innerHTML : n === "x-roman" && (_.romanLyric ||= e.innerHTML);
			else {
				let t = c(e);
				if (!t) continue;
				if (S.length > 0) {
					let e = S.findIndex((e) => e.startTime === t.startTime && e.endTime === t.endTime);
					e !== -1 && (t.romanWord = S[e].text, S.splice(e, 1));
				}
				_.words.push(t);
			}
		}
		if ((!p || !m) && (_.startTime = _.words.filter((e) => e.word.trim().length > 0).reduce((e, t) => Math.min(e, t.startTime), Infinity), _.endTime = _.words.filter((e) => e.word.trim().length > 0).reduce((e, t) => Math.max(e, t.endTime), 0)), _.isBG) {
			let e = _.words[0];
			e && /^[（(]/.test(e.word) && (e.word = e.word.substring(1), e.word.length === 0 && _.words.shift());
			let t = _.words[_.words.length - 1];
			t && /[)）]$/.test(t.word) && (t.word = t.word.substring(0, t.word.length - 1), t.word.length === 0 && _.words.pop());
		}
		if (v) {
			let e = d.pop();
			d.push(_), e && d.push(e);
		} else d.push(_);
	}
	for (let e of t.querySelectorAll("body p[begin][end]")) f(e, !1, !1, null);
	return {
		metadata: l,
		lyricLines: d
	};
}
//#endregion
//#region src/writer.ts
function u(e) {
	let t = e;
	if (!Number.isSafeInteger(t) || t < 0) return "00:00.000";
	if (t === Infinity) return "99:99.999";
	t /= 1e3;
	let n = t % 60;
	t = (t - n) / 60;
	let r = t % 60, i = (t - r) / 60, a = i.toString().padStart(2, "0"), o = r.toString().padStart(2, "0"), s = n.toFixed(3).padStart(6, "0");
	return i > 0 ? `${a}:${o}:${s}` : `${o}:${s}`;
}
function d(e, t = !1) {
	let n = [], r = e.lyricLines, i = [];
	for (let e of r) e.words.length === 0 && i.length > 0 ? (n.push(i), i = []) : i.push(e);
	i.length > 0 && n.push(i);
	let a = new Document();
	function o(e) {
		let t = a.createElement("span");
		return t.setAttribute("begin", u(e.startTime)), t.setAttribute("end", u(e.endTime)), e.emptyBeat && t.setAttribute("amll:empty-beat", `${e.emptyBeat}`), t.appendChild(a.createTextNode(e.word)), t;
	}
	let s = a.createElement("tt");
	s.setAttribute("xmlns", "http://www.w3.org/ns/ttml"), s.setAttribute("xmlns:ttm", "http://www.w3.org/ns/ttml#metadata"), s.setAttribute("xmlns:amll", "http://www.example.com/ns/amll"), s.setAttribute("xmlns:itunes", "http://music.apple.com/lyric-ttml-internal"), a.appendChild(s);
	let c = a.createElement("head");
	s.appendChild(c);
	let l = a.createElement("body"), d = !!r.find((e) => e.isDuet), f = a.createElement("metadata"), p = a.createElement("ttm:agent");
	if (p.setAttribute("type", "person"), p.setAttribute("xml:id", "v1"), f.appendChild(p), d) {
		let e = a.createElement("ttm:agent");
		e.setAttribute("type", "other"), e.setAttribute("xml:id", "v2"), f.appendChild(e);
	}
	for (let t of e.metadata) for (let e of t.value) {
		let n = a.createElement("amll:meta");
		n.setAttribute("key", t.key), n.setAttribute("value", e), f.appendChild(n);
	}
	c.appendChild(f);
	let m = 0, h = r[r.length - 1]?.endTime ?? 0;
	l.setAttribute("dur", u(h));
	for (let e of n) {
		let t = a.createElement("div"), n = e[0]?.startTime ?? 0, r = e[e.length - 1]?.endTime ?? 0;
		t.setAttribute("begin", u(n)), t.setAttribute("end", u(r));
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = a.createElement("p"), s = r.startTime ?? 0, c = r.endTime;
			if (i.setAttribute("begin", u(s)), i.setAttribute("end", u(c)), i.setAttribute("ttm:agent", r.isDuet ? "v2" : "v1"), i.setAttribute("itunes:key", `L${++m}`), r.words.length > 1) {
				let e = Infinity, t = 0;
				for (let n of r.words) if (n.word.trim().length === 0) i.appendChild(a.createTextNode(n.word));
				else {
					let r = o(n);
					i.appendChild(r), e = Math.min(e, n.startTime), t = Math.max(t, n.endTime);
				}
				i.setAttribute("begin", u(r.startTime)), i.setAttribute("end", u(r.endTime));
			} else if (r.words.length === 1) {
				let e = r.words[0];
				i.appendChild(a.createTextNode(e.word)), i.setAttribute("begin", u(e.startTime)), i.setAttribute("end", u(e.endTime));
			}
			let l = e[n + 1];
			if (l?.isBG) {
				n++;
				let e = l, t = a.createElement("span");
				if (t.setAttribute("ttm:role", "x-bg"), e.words.length > 1) {
					let n = Infinity, r = 0;
					for (let i = 0; i < e.words.length; i++) {
						let s = e.words[i];
						if (s.word.trim().length === 0) t.appendChild(a.createTextNode(s.word));
						else {
							let c = o(s);
							i === 0 ? c.prepend(a.createTextNode("(")) : i === e.words.length - 1 && c.appendChild(a.createTextNode(")")), t.appendChild(c), n = Math.min(n, s.startTime), r = Math.max(r, s.endTime);
						}
					}
					t.setAttribute("begin", u(n)), t.setAttribute("end", u(r));
				} else if (e.words.length === 1) {
					let n = e.words[0];
					t.appendChild(a.createTextNode(`(${n.word})`)), t.setAttribute("begin", u(n.startTime)), t.setAttribute("end", u(n.endTime));
				}
				if (e.translatedLyric) {
					let n = a.createElement("span");
					n.setAttribute("ttm:role", "x-translation"), n.setAttribute("xml:lang", "zh-CN"), n.appendChild(a.createTextNode(e.translatedLyric)), t.appendChild(n);
				}
				if (e.romanLyric) {
					let n = a.createElement("span");
					n.setAttribute("ttm:role", "x-roman"), n.appendChild(a.createTextNode(e.romanLyric)), t.appendChild(n);
				}
				i.appendChild(t);
			}
			if (r.translatedLyric) {
				let e = a.createElement("span");
				e.setAttribute("ttm:role", "x-translation"), e.setAttribute("xml:lang", "zh-CN"), e.appendChild(a.createTextNode(r.translatedLyric)), i.appendChild(e);
			}
			if (r.romanLyric) {
				let e = a.createElement("span");
				e.setAttribute("ttm:role", "x-roman"), e.appendChild(a.createTextNode(r.romanLyric)), i.appendChild(e);
			}
			t.appendChild(i);
		}
		l.appendChild(t);
	}
	if (s.appendChild(l), t) {
		let e = new DOMParser().parseFromString([
			"<xsl:stylesheet xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\" version=\"1.0\">",
			"  <xsl:strip-space elements=\"*\"/>",
			"  <xsl:template match=\"para[content-style][not(text())]\">",
			"    <xsl:value-of select=\"normalize-space(.)\"/>",
			"  </xsl:template>",
			"  <xsl:template match=\"node()|@*\">",
			"    <xsl:copy><xsl:apply-templates select=\"node()|@*\"/></xsl:copy>",
			"  </xsl:template>",
			"  <xsl:output indent=\"yes\"/>",
			"</xsl:stylesheet>"
		].join("\n"), "application/xml"), t = new XSLTProcessor();
		t.importStylesheet(e);
		let n = t.transformToDocument(a);
		return new XMLSerializer().serializeToString(n);
	}
	return new XMLSerializer().serializeToString(a);
}
//#endregion
export { d as exportTTML, l as parseTTML };
