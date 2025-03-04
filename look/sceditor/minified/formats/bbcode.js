/* SCEditor v2.1.3 | (C) 2017, Sam Clarke | sceditor.com/license */

! function(o) {
	"use strict";

	function e(e, t) {
		return typeof t === e
	}
	o = o && o.hasOwnProperty("default") ? o.default : o;
	var be = e.bind(null, "string"),
		xe = e.bind(null, "undefined"),
		we = e.bind(null, "function"),
		r = e.bind(null, "number");

	function t(e) {
		return !Object.keys(e).length
	}

	function ke(e, t) {
		for (var n = e === !!e, o = n ? 2 : 1, r = n ? t : e, i = !!n && e; o < arguments.length; o++) {
			var l = arguments[o];
			for (var a in l) {
				var s = l[a];
				if (!xe(s)) {
					var c = null !== s && "object" == typeof s && Object.getPrototypeOf(s) === Object.prototype,
						u = Array.isArray(s);
					r[a] = i && (c || u) ? ke(!0, r[a] || (u ? [] : {}), s) : s
				}
			}
		}
		return r
	}

	function Ce(e, t) {
		var n = e.indexOf(t); - 1 < n && e.splice(n, 1)
	}

	function Ee(t, n) {
		if (Array.isArray(t) || "length" in t && r(t.length))
			for (var e = 0; e < t.length; e++) n(e, t[e]);
		else Object.keys(t).forEach(function(e) {
			n(e, t[e])
		})
	}
	var i = {},
		Se = 1,
		Te = 3;

	function l(e) {
		return e = parseFloat(e), isFinite(e) ? e : 0
	}

	function De(e, t, n) {
		var o = (n || document).createElement(e);
		return Ee(t || {}, function(e, t) {
			"style" === e ? o.style.cssText = t : e in o ? o[e] = t : o.setAttribute(e, t)
		}), o
	}

	function Me(e, t) {
		for (var n = e || {};
			(n = n.parentNode) && !/(9|11)/.test(n.nodeType);)
			if (!t || qe(n, t)) return n
	}

	function Ne(e, t) {
		return qe(e, t) ? e : Me(e, t)
	}

	function Be(e) {
		e.parentNode && e.parentNode.removeChild(e)
	}

	function Re(e, t) {
		e.appendChild(t)
	}

	function He(e, t) {
		return e.querySelectorAll(t)
	}
	var Ie = !0;

	function Fe(n, e, o, r, i) {
		e.split(" ").forEach(function(e) {
			var t;
			be(o) ? (t = r["_sce-event-" + e + o] || function(e) {
				for (var t = e.target; t && t !== n;) {
					if (qe(t, o)) return void r.call(t, e);
					t = t.parentNode
				}
			}, r["_sce-event-" + e + o] = t) : (t = o, i = r), n.addEventListener(e, t, i || !1)
		})
	}

	function ze(n, e, o, r, i) {
		e.split(" ").forEach(function(e) {
			var t;
			be(o) ? t = r["_sce-event-" + e + o] : (t = o, i = r), n.removeEventListener(e, t, i || !1)
		})
	}

	function Ae(e, t, n) {
		if (arguments.length < 3) return e.getAttribute(t);
		null == n ? a(e, t) : e.setAttribute(t, n)
	}

	function a(e, t) {
		e.removeAttribute(t)
	}

	function Oe(e) {
		je(e, "display", "none")
	}

	function _e(e) {
		je(e, "display", "")
	}

	function Le(e) {
		Ge(e) ? Oe(e) : _e(e)
	}

	function je(n, e, t) {
		if (arguments.length < 3) {
			if (be(e)) return 1 === n.nodeType ? getComputedStyle(n)[e] : null;
			Ee(e, function(e, t) {
				je(n, e, t)
			})
		} else {
			var o = (t || 0 === t) && !isNaN(t);
			n.style[e] = o ? t + "px" : t
		}
	}

	function Pe(e, t, n) {
		var o = arguments.length,
			r = {};
		if (e.nodeType === Se) {
			if (1 === o) return Ee(e.attributes, function(e, t) {
				/^data\-/i.test(t.name) && (r[t.name.substr(5)] = t.value)
			}), r;
			if (2 === o) return Ae(e, "data-" + t);
			Ae(e, "data-" + t, String(n))
		}
	}

	function qe(e, t) {
		var n = !1;
		return e && e.nodeType === Se && (n = (e.matches || e.msMatchesSelector || e.webkitMatchesSelector).call(e, t)), n
	}

	function Ve(e, t) {
		return t.parentNode.insertBefore(e, t)
	}

	function s(e) {
		return e.className.trim().split(/\s+/)
	}

	function We(e, t) {
		return qe(e, "." + t)
	}

	function $e(e, t) {
		var n = s(e);
		n.indexOf(t) < 0 && n.push(t), e.className = n.join(" ")
	}

	function Ue(e, t) {
		var n = s(e);
		Ce(n, t), e.className = n.join(" ")
	}

	function Ye(e, t, n) {
		(n = xe(n) ? !We(e, t) : n) ? $e(e, t): Ue(e, t)
	}

	function Ke(e, t) {
		if (xe(t)) {
			var n = getComputedStyle(e),
				o = l(n.paddingLeft) + l(n.paddingRight),
				r = l(n.borderLeftWidth) + l(n.borderRightWidth);
			return e.offsetWidth - o - r
		}
		je(e, "width", t)
	}

	function Xe(e, t) {
		if (xe(t)) {
			var n = getComputedStyle(e),
				o = l(n.paddingTop) + l(n.paddingBottom),
				r = l(n.borderTopWidth) + l(n.borderBottomWidth);
			return e.offsetHeight - o - r
		}
		je(e, "height", t)
	}

	function Qe(e, t, n) {
		var o;
		we(window.CustomEvent) ? o = new CustomEvent(t, {
			bubbles: !0,
			cancelable: !0,
			detail: n
		}) : (o = e.ownerDocument.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n), e.dispatchEvent(o)
	}

	function Ge(e) {
		return !!e.getClientRects().length
	}

	function Je(e, t, n, o, r) {
		for (e = r ? e.lastChild : e.firstChild; e;) {
			var i = r ? e.previousSibling : e.nextSibling;
			if (!n && !1 === t(e) || !o && !1 === Je(e, t, n, o, r) || n && !1 === t(e)) return !1;
			e = i
		}
	}

	function Ze(e, t, n, o) {
		Je(e, t, n, o, !0)
	}

	function et(e, t) {
		var n = (t = t || document).createDocumentFragment(),
			o = De("div", {}, t);
		for (o.innerHTML = e; o.firstChild;) Re(n, o.firstChild);
		return n
	}

	function tt(e) {
		return e && (!qe(e, "p,div") || e.className || Ae(e, "style") || !t(Pe(e)))
	}

	function nt(e, t) {
		var n = De(t, {}, e.ownerDocument);
		for (Ee(e.attributes, function(e, t) {
				try {
					Ae(n, t.name, t.value)
				} catch (e) {}
			}); e.firstChild;) Re(n, e.firstChild);
		return e.parentNode.replaceChild(n, e), n
	}
	var c = "|body|hr|p|div|h1|h2|h3|h4|h5|h6|address|pre|form|table|tbody|thead|tfoot|th|tr|td|li|ol|ul|blockquote|center|";

	function ot(e) {
		return !!/11?|9/.test(e.nodeType) && "|iframe|area|base|basefont|br|col|frame|hr|img|input|wbr|isindex|link|meta|param|command|embed|keygen|source|track|object|".indexOf("|" + e.nodeName.toLowerCase() + "|") < 0
	}

	function rt(e, t) {
		var n, o = (e || {}).nodeType || Te;
		return o !== Se ? o === Te : "code" === (n = e.tagName.toLowerCase()) ? !t : c.indexOf("|" + n + "|") < 0
	}

	function u(e, t) {
		t.style.cssText = e.style.cssText + t.style.cssText
	}

	function it(e) {
		Je(e, function(e) {
			var t, n = !rt(e, !0);
			if (n && rt(e.parentNode, !0)) {
				var o = function(e) {
						for (; rt(e.parentNode, !0);) e = e.parentNode;
						return e
					}(e),
					r = f(o, e),
					i = e;
				u(o, i), Ve(r, o), Ve(i, o)
			}
			if (n && qe(e, "ul,ol") && qe(e.parentNode, "ul,ol")) {
				var l = ("li", (t = e.previousElementSibling) ? qe(t, "li") ? t : null : t);
				l || Ve(l = De("li"), e), Re(l, e)
			}
		})
	}

	function d(e, t) {
		return e ? (t ? e.previousSibling : e.nextSibling) || d(e.parentNode, t) : null
	}

	function lt(e) {
		var t, n, o, r, i, l, a, s = je(e, "whiteSpace"),
			c = /line$/i.test(s),
			u = e.firstChild;
		if (!/pre(\-wrap)?$/i.test(s))
			for (; u;) {
				if (l = u.nextSibling, t = u.nodeValue, (n = u.nodeType) === Se && u.firstChild && lt(u), n === Te) {
					for (o = d(u), r = d(u, !0), a = !1; We(r, "sceditor-ignore");) r = d(r, !0);
					if (rt(u) && r) {
						for (i = r; i.lastChild;)
							for (i = i.lastChild; We(i, "sceditor-ignore");) i = d(i, !0);
						a = i.nodeType === Te ? /[\t\n\r ]$/.test(i.nodeValue) : !rt(i)
					}
					t = t.replace(/\u200B/g, ""), r && rt(r) && !a || (t = t.replace(c ? /^[\t ]+/ : /^[\t\n\r ]+/, "")), o && rt(o) || (t = t.replace(c ? /[\t ]+$/ : /[\t\n\r ]+$/, "")), t.length ? u.nodeValue = t.replace(c ? /[\t ]+/g : /[\t\n\r ]+/g, " ") : Be(u)
				}
				u = l
			}
	}

	function f(e, t) {
		var n = e.ownerDocument.createRange();
		return n.setStartBefore(e), n.setEndAfter(t), n.extractContents()
	}

	function at(e) {
		for (var t = 0, n = 0; e;) t += e.offsetLeft, n += e.offsetTop, e = e.offsetParent;
		return {
			left: t,
			top: n
		}
	}

	function p(e, t) {
		var n, o, r = e.style;
		if (i[t] || (i[t] = t.replace(/^-ms-/, "ms-").replace(/-(\w)/g, function(e, t) {
				return t.toUpperCase()
			})), o = r[t = i[t]], "textAlign" === t) {
			if (n = r.direction, o = o || je(e, t), je(e.parentNode, t) === o || "block" !== je(e, "display") || qe(e, "hr,th")) return "";
			if (/right/i.test(o) && "rtl" === n || /left/i.test(o) && "ltr" === n) return ""
		}
		return o
	}
	var st = {
			toolbar: "bold,italic,underline,strike,subscript,superscript|left,center,right,justify|font,size,color,removeformat|cut,copy,pastetext|bulletlist,orderedlist,indent,outdent|table|code,quote|horizontalrule,image,email,link,unlink|emoticon,youtube,date,time|ltr,rtl|print,maximize,source",
			toolbarExclude: null,
			style: "jquery.sceditor.default.css",
			fonts: "Arial,Arial Black,Comic Sans MS,Courier New,Georgia,Impact,Sans-serif,Serif,Times New Roman,Trebuchet MS,Verdana",
			colors: "#000000,#44B8FF,#1E92F7,#0074D9,#005DC2,#00369B,#b3d5f4|#444444,#C3FFFF,#9DF9FF,#7FDBFF,#68C4E8,#419DC1,#d9f4ff|#666666,#72FF84,#4CEA5E,#2ECC40,#17B529,#008E02,#c0f0c6|#888888,#FFFF44,#FFFA1E,#FFDC00,#E8C500,#C19E00,#fff5b3|#aaaaaa,#FFC95F,#FFA339,#FF851B,#E86E04,#C14700,#ffdbbb|#cccccc,#FF857A,#FF5F54,#FF4136,#E82A1F,#C10300,#ffc6c3|#eeeeee,#FF56FF,#FF30DC,#F012BE,#D900A7,#B20080,#fbb8ec|#ffffff,#F551FF,#CF2BE7,#B10DC9,#9A00B2,#9A00B2,#e8b6ef",
			locale: Ae(document.documentElement, "lang") || "en",
			charset: "utf-8",
			emoticonsCompat: !1,
			emoticonsEnabled: !0,
			emoticonsRoot: "",
			emoticons: {
				dropdown: {
					":)": "emoticons/smile.png",
					":angel:": "emoticons/angel.png",
					":angry:": "emoticons/angry.png",
					"8-)": "emoticons/cool.png",
					":'(": "emoticons/cwy.png",
					":ermm:": "emoticons/ermm.png",
					":D": "emoticons/grin.png",
					"<3": "emoticons/heart.png",
					":(": "emoticons/sad.png",
					":O": "emoticons/shocked.png",
					":P": "emoticons/tongue.png",
					";)": "emoticons/wink.png"
				},
				more: {
					":alien:": "emoticons/alien.png",
					":blink:": "emoticons/blink.png",
					":blush:": "emoticons/blush.png",
					":cheerful:": "emoticons/cheerful.png",
					":devil:": "emoticons/devil.png",
					":dizzy:": "emoticons/dizzy.png",
					":getlost:": "emoticons/getlost.png",
					":happy:": "emoticons/happy.png",
					":kissing:": "emoticons/kissing.png",
					":ninja:": "emoticons/ninja.png",
					":pinch:": "emoticons/pinch.png",
					":pouty:": "emoticons/pouty.png",
					":sick:": "emoticons/sick.png",
					":sideways:": "emoticons/sideways.png",
					":silly:": "emoticons/silly.png",
					":sleeping:": "emoticons/sleeping.png",
					":unsure:": "emoticons/unsure.png",
					":woot:": "emoticons/w00t.png",
					":wassat:": "emoticons/wassat.png"
				},
				hidden: {
					":whistling:": "emoticons/whistling.png",
					":love:": "emoticons/wub.png"
				}
			},
			width: null,
			height: null,
			resizeEnabled: !0,
			resizeMinWidth: null,
			resizeMinHeight: null,
			resizeMaxHeight: null,
			resizeMaxWidth: null,
			resizeHeight: !0,
			resizeWidth: !0,
			dateFormat: "year-month-day",
			toolbarContainer: null,
			enablePasteFiltering: !1,
			disablePasting: !1,
			readOnly: !1,
			rtl: !1,
			autofocus: !1,
			autofocusEnd: !0,
			autoExpand: !1,
			autoUpdate: !1,
			spellcheck: !0,
			runWithoutWysiwygSupport: !1,
			startInSourceMode: !1,
			id: null,
			plugins: "",
			zIndex: null,
			bbcodeTrim: !1,
			disableBlockRemove: !1,
			parserOptions: {},
			dropDownCss: {}
		},
		h = /^(https?|s?ftp|mailto|spotify|skype|ssh|teamspeak|tel):|(\/\/)|data:image\/(png|bmp|gif|p?jpe?g);/i;

	function ct(e) {
		return e.replace(/([\-.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
	}

	function ut(e, t) {
		if (!e) return e;
		var n = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			"  ": "&nbsp; ",
			"\r\n": "<br />",
			"\r": "<br />",
			"\n": "<br />"
		};
		return !1 !== t && (n['"'] = "&#34;", n["'"] = "&#39;", n["`"] = "&#96;"), e.replace(/ {2}|\r\n|[&<>\r\n'"`]/g, function(e) {
			return n[e] || e
		})
	}
	var n, m, g, v = navigator.userAgent,
		y = function() {
			for (var e = 3, t = document, n = t.createElement("div"), o = n.getElementsByTagName("i"); n.innerHTML = "\x3c!--[if gt IE " + ++e + "]><i></i><![endif]--\x3e", o[0];);
			return t.documentMode && t.all && window.atob && (e = 10), 4 === e && t.documentMode && (e = 11), 4 < e ? e : void 0
		}(),
		dt = "-ms-ime-align" in document.documentElement.style,
		ft = /iPhone|iPod|iPad| wosbrowser\//i.test(v),
		pt = ((g = document.createElement("div")).contentEditable = !0, "contentEditable" in document.documentElement && "true" === g.contentEditable && (m = /Opera Mobi|Opera Mini/i.test(v), /Android/i.test(v) && (m = !0, /Safari/.test(v) && (m = !(n = /Safari\/(\d+)/.exec(v)) || !n[1] || n[1] < 534)), / Silk\//i.test(v) && (m = !(n = /AppleWebKit\/(\d+)/.exec(v)) || !n[1] || n[1] < 534), ft && (m = /OS [0-4](_\d)+ like Mac/i.test(v)), /Firefox/i.test(v) && (m = !1), /OneBrowser/i.test(v) && (m = !1), "UCWEB" === navigator.vendor && (m = !1), y <= 9 && (m = !0), !m)),
		b = {
			html: '<!DOCTYPE html><html{attrs}><head><style>.ie * {min-height: auto !important} .ie table td {height:15px} @supports (-ms-ime-align:auto) { * { min-height: auto !important; } }</style><meta http-equiv="Content-Type" content="text/html;charset={charset}" /><link rel="stylesheet" type="text/css" href="{style}" /></head><body contenteditable="true" {spellcheck}><p></p></body></html>',
			toolbarButton: '<a class="sceditor-button sceditor-button-{name}" data-sceditor-command="{name}" unselectable="on"><div unselectable="on">{dispName}</div></a>',
			emoticon: '<img src="{url}" data-sceditor-emoticon="{key}" alt="{key}" title="{tooltip}" />',
			fontOpt: '<a class="sceditor-font-option" href="#" data-font="{font}"><font face="{font}">{font}</font></a>',
			sizeOpt: '<a class="sceditor-fontsize-option" data-size="{size}" href="#"><font size="{size}">{size}</font></a>',
			pastetext: '<div><label for="txt">{label}</label> <textarea cols="20" rows="7" id="txt"></textarea></div><div><input type="button" class="button" value="{insert}" /></div>',
			table: '<div><label for="rows">{rows}</label><input type="text" id="rows" value="2" /></div><div><label for="cols">{cols}</label><input type="text" id="cols" value="2" /></div><div><input type="button" class="button" value="{insert}" /></div>',
			image: '<div><label for="link">{url}</label> <input type="text" id="image" dir="ltr" placeholder="https://" /></div><div><label for="width">{width}</label> <input type="text" id="width" size="2" dir="ltr" /></div><div><label for="height">{height}</label> <input type="text" id="height" size="2" dir="ltr" /></div><div><input type="button" class="button" value="{insert}" /></div>',
			email: '<div><label for="email">{label}</label> <input type="text" id="email" dir="ltr" /></div><div><label for="des">{desc}</label> <input type="text" id="des" /></div><div><input type="button" class="button" value="{insert}" /></div>',
			link: '<div><label for="link">{url}</label> <input type="text" id="link" dir="ltr" placeholder="https://" /></div><div><label for="des">{desc}</label> <input type="text" id="des" /></div><div><input type="button" class="button" value="{ins}" /></div>',
			youtubeMenu: '<div><label for="link">{label}</label> <input type="text" id="link" dir="ltr" placeholder="https://" /></div><div><input type="button" class="button" value="{insert}" /></div>',
			youtube: '<iframe width="560" height="315" frameborder="0" allowfullscreen src="https://www.youtube.com/embed/{id}?wmode=opaque&start={time}" data-youtube-id="{id}"></iframe>'
		};

	function ht(e, t, n) {
		var o = b[e];
		return Object.keys(t).forEach(function(e) {
			o = o.replace(new RegExp(ct("{" + e + "}"), "g"), t[e])
		}), n && (o = et(o)), o
	}
	var x = y && y < 11;

	function w(e) {
		if ("mozHidden" in document)
			for (var t, n = e.getBody(); n;) {
				if ((t = n).firstChild) t = t.firstChild;
				else {
					for (; t && !t.nextSibling;) t = t.parentNode;
					t && (t = t.nextSibling)
				}
				3 === n.nodeType && /[\n\r\t]+/.test(n.nodeValue) && (/^pre/.test(je(n.parentNode, "whiteSpace")) || Be(n)), n = t
			}
	}
	var mt = {
			bold: {
				exec: "bold",
				tooltip: "Bold",
				shortcut: "Ctrl+B"
			},
			italic: {
				exec: "italic",
				tooltip: "Italic",
				shortcut: "Ctrl+I"
			},
			underline: {
				exec: "underline",
				tooltip: "Underline",
				shortcut: "Ctrl+U"
			},
			strike: {
				exec: "strikethrough",
				tooltip: "Strikethrough"
			},
			subscript: {
				exec: "subscript",
				tooltip: "Subscript"
			},
			superscript: {
				exec: "superscript",
				tooltip: "Superscript"
			},
			left: {
				state: function(e) {
					if (e && 3 === e.nodeType && (e = e.parentNode), e) {
						var t = "ltr" === je(e, "direction"),
							n = je(e, "textAlign");
						return "left" === n || n === (t ? "start" : "end")
					}
				},
				exec: "justifyleft",
				tooltip: "Align left"
			},
			center: {
				exec: "justifycenter",
				tooltip: "Center"
			},
			right: {
				state: function(e) {
					if (e && 3 === e.nodeType && (e = e.parentNode), e) {
						var t = "ltr" === je(e, "direction"),
							n = je(e, "textAlign");
						return "right" === n || n === (t ? "end" : "start")
					}
				},
				exec: "justifyright",
				tooltip: "Align right"
			},
			justify: {
				exec: "justifyfull",
				tooltip: "Justify"
			},
			font: {
				_dropDown: function(t, e, n) {
					var o = De("div");
					Fe(o, "click", "a", function(e) {
						n(Pe(this, "font")), t.closeDropDown(!0), e.preventDefault()
					}), t.opts.fonts.split(",").forEach(function(e) {
						Re(o, ht("fontOpt", {
							font: e
						}, !0))
					}), t.createDropDown(e, "font-picker", o)
				},
				exec: function(e) {
					var t = this;
					mt.font._dropDown(t, e, function(e) {
						t.execCommand("fontname", e)
					})
				},
				tooltip: "Font Name"
			},
			size: {
				_dropDown: function(t, e, n) {
					var o = De("div");
					Fe(o, "click", "a", function(e) {
						n(Pe(this, "size")), t.closeDropDown(!0), e.preventDefault()
					});
					for (var r = 1; r <= 7; r++) Re(o, ht("sizeOpt", {
						size: r
					}, !0));
					t.createDropDown(e, "fontsize-picker", o)
				},
				exec: function(e) {
					var t = this;
					mt.size._dropDown(t, e, function(e) {
						t.execCommand("fontsize", e)
					})
				},
				tooltip: "Font Size"
			},
			color: {
				_dropDown: function(t, e, n) {
					var o = De("div"),
						r = "",
						i = mt.color;
					i._htmlCache || (t.opts.colors.split("|").forEach(function(e) {
						r += '<div class="sceditor-color-column">', e.split(",").forEach(function(e) {
							r += '<a href="#" class="sceditor-color-option" style="background-color: ' + e + '" data-color="' + e + '"></a>'
						}), r += "</div>"
					}), i._htmlCache = r), Re(o, et(i._htmlCache)), Fe(o, "click", "a", function(e) {
						n(Pe(this, "color")), t.closeDropDown(!0), e.preventDefault()
					}), t.createDropDown(e, "color-picker", o)
				},
				exec: function(e) {
					var t = this;
					mt.color._dropDown(t, e, function(e) {
						t.execCommand("forecolor", e)
					})
				},
				tooltip: "Font Color"
			},
			removeformat: {
				exec: "removeformat",
				tooltip: "Remove Formatting"
			},
			cut: {
				exec: "cut",
				tooltip: "Cut",
				errorMessage: "Your browser does not allow the cut command. Please use the keyboard shortcut Ctrl/Cmd-X"
			},
			copy: {
				exec: "copy",
				tooltip: "Copy",
				errorMessage: "Your browser does not allow the copy command. Please use the keyboard shortcut Ctrl/Cmd-C"
			},
			paste: {
				exec: "paste",
				tooltip: "Paste",
				errorMessage: "Your browser does not allow the paste command. Please use the keyboard shortcut Ctrl/Cmd-V"
			},
			pastetext: {
				exec: function(e) {
					var t, n = De("div"),
						o = this;
					Re(n, ht("pastetext", {
						label: o._("Paste your text inside the following box:"),
						insert: o._("Insert")
					}, !0)), Fe(n, "click", ".button", function(e) {
						(t = He(n, "#txt")[0].value) && o.wysiwygEditorInsertText(t), o.closeDropDown(!0), e.preventDefault()
					}), o.createDropDown(e, "pastetext", n)
				},
				tooltip: "Paste Text"
			},
			bulletlist: {
				exec: function() {
					w(this), this.execCommand("insertunorderedlist")
				},
				tooltip: "Bullet list"
			},
			orderedlist: {
				exec: function() {
					w(this), this.execCommand("insertorderedlist")
				},
				tooltip: "Numbered list"
			},
			indent: {
				state: function(e, t) {
					var n, o, r;
					return qe(t, "li") ? 0 : qe(t, "ul,ol,menu") && (o = (n = this.getRangeHelper().selectedRange()).startContainer.parentNode, r = n.endContainer.parentNode, o !== o.parentNode.firstElementChild || qe(r, "li") && r !== r.parentNode.lastElementChild) ? 0 : -1
				},
				exec: function() {
					var e = this.getRangeHelper().getFirstBlockParent();
					this.focus(), Ne(e, "ul,ol,menu") && this.execCommand("indent")
				},
				tooltip: "Add indent"
			},
			outdent: {
				state: function(e, t) {
					return Ne(t, "ul,ol,menu") ? 0 : -1
				},
				exec: function() {
					Ne(this.getRangeHelper().getFirstBlockParent(), "ul,ol,menu") && this.execCommand("outdent")
				},
				tooltip: "Remove one indent"
			},
			table: {
				exec: function(e) {
					var r = this,
						i = De("div");
					Re(i, ht("table", {
						rows: r._("Rows:"),
						cols: r._("Cols:"),
						insert: r._("Insert")
					}, !0)), Fe(i, "click", ".button", function(e) {
						var t = Number(He(i, "#rows")[0].value),
							n = Number(He(i, "#cols")[0].value),
							o = "<table>";
						0 < t && 0 < n && (o += Array(t + 1).join("<tr>" + Array(n + 1).join("<td>" + (x ? "" : "<br />") + "</td>") + "</tr>"), o += "</table>", r.wysiwygEditorInsertHtml(o), r.closeDropDown(!0), e.preventDefault())
					}), r.createDropDown(e, "inserttable", i)
				},
				tooltip: "Insert a table"
			},
			horizontalrule: {
				exec: "inserthorizontalrule",
				tooltip: "Insert a horizontal rule"
			},
			code: {
				exec: function() {
					this.wysiwygEditorInsertHtml("<code>", (x ? "" : "<br />") + "</code>")
				},
				tooltip: "Code"
			},
			image: {
				_dropDown: function(t, e, n, o) {
					var r = De("div");
					Re(r, ht("image", {
						url: t._("URL:"),
						width: t._("Width (optional):"),
						height: t._("Height (optional):"),
						insert: t._("Insert")
					}, !0));
					var i = He(r, "#image")[0];
					i.value = n, Fe(r, "click", ".button", function(e) {
						i.value && o(i.value, He(r, "#width")[0].value, He(r, "#height")[0].value), t.closeDropDown(!0), e.preventDefault()
					}), t.createDropDown(e, "insertimage", r)
				},
				exec: function(e) {
					var r = this;
					mt.image._dropDown(r, e, "", function(e, t, n) {
						var o = "";
						t && (o += ' width="' + parseInt(t) + '"'), n && (o += ' height="' + parseInt(n) + '"'), o += ' src="' + ut(e) + '"', r.wysiwygEditorInsertHtml("<img" + o + " />")
					})
				},
				tooltip: "Insert an image"
			},
			email: {
				_dropDown: function(n, e, o) {
					var r = De("div");
					Re(r, ht("email", {
						label: n._("E-mail:"),
						desc: n._("Description (optional):"),
						insert: n._("Insert")
					}, !0)), Fe(r, "click", ".button", function(e) {
						var t = He(r, "#email")[0].value;
						t && o(t, He(r, "#des")[0].value), n.closeDropDown(!0), e.preventDefault()
					}), n.createDropDown(e, "insertemail", r)
				},
				exec: function(e) {
					var n = this;
					mt.email._dropDown(n, e, function(e, t) {
						n.focus(), !n.getRangeHelper().selectedHtml() || t ? n.wysiwygEditorInsertHtml('<a href="mailto:' + ut(e) + '">' + ut(t || e) + "</a>") : n.execCommand("createlink", "mailto:" + e)
					})
				},
				tooltip: "Insert an email"
			},
			link: {
				_dropDown: function(t, e, n) {
					var o = De("div");
					Re(o, ht("link", {
						url: t._("URL:"),
						desc: t._("Description (optional):"),
						ins: t._("Insert")
					}, !0));
					var r = He(o, "#link")[0];

					function i(e) {
						r.value && n(r.value, He(o, "#des")[0].value), t.closeDropDown(!0), e.preventDefault()
					}
					Fe(o, "click", ".button", i), Fe(o, "keypress", function(e) {
						13 === e.which && r.value && i(e)
					}, Ie), t.createDropDown(e, "insertlink", o)
				},
				exec: function(e) {
					var n = this;
					mt.link._dropDown(n, e, function(e, t) {
						n.focus(), t || !n.getRangeHelper().selectedHtml() ? (t = t || e, n.wysiwygEditorInsertHtml('<a href="' + ut(e) + '">' + ut(t) + "</a>")) : n.execCommand("createlink", e)
					})
				},
				tooltip: "Insert a link"
			},
			unlink: {
				state: function() {
					return Ne(this.currentNode(), "a") ? 0 : -1
				},
				exec: function() {
					var e = Ne(this.currentNode(), "a");
					if (e) {
						for (; e.firstChild;) Ve(e.firstChild, e);
						Be(e)
					}
				},
				tooltip: "Unlink"
			},
			quote: {
				exec: function(e, t, n) {
					var o = "<blockquote>",
						r = "</blockquote>";
					t ? (o = o + (n = n ? "<cite>" + ut(n) + "</cite>" : "") + t + r, r = null) : "" === this.getRangeHelper().selectedHtml() && (r = (x ? "" : "<br />") + r), this.wysiwygEditorInsertHtml(o, r)
				},
				tooltip: "Insert a Quote"
			},
			emoticon: {
				exec: function(f) {
					var p = this,
						h = function(e) {
							var t, n, o = p.opts,
								r = o.emoticonsRoot || "",
								i = o.emoticonsCompat,
								l = p.getRangeHelper(),
								a = i && " " !== l.getOuterText(!0, 1) ? " " : "",
								s = i && " " !== l.getOuterText(!1, 1) ? " " : "",
								c = De("div"),
								u = De("div"),
								d = ke({}, o.emoticons.dropdown, e ? o.emoticons.more : {});
							return Re(c, u), n = Math.sqrt(Object.keys(d).length), Fe(c, "click", "img", function(e) {
								p.insert(a + Ae(this, "alt") + s, null, !1).closeDropDown(!0), e.preventDefault()
							}), Ee(d, function(e, t) {
								Re(u, De("img", {
									src: r + (t.url || t),
									alt: e,
									title: t.tooltip || e
								})), u.children.length >= n && (u = De("div"), Re(c, u))
							}), !e && o.emoticons.more && (Re(t = De("a", {
								className: "sceditor-more"
							}), document.createTextNode(p._("More"))), Fe(t, "click", function(e) {
								p.createDropDown(f, "more-emoticons", h(!0)), e.preventDefault()
							}), Re(c, t)), c
						};
					p.createDropDown(f, "emoticons", h(!1))
				},
				txtExec: function(e) {
					mt.emoticon.exec.call(this, e)
				},
				tooltip: "Insert an emoticon"
			},
			youtube: {
				_dropDown: function(i, e, l) {
					var a = De("div");
					Re(a, ht("youtubeMenu", {
						label: i._("Video URL:"),
						insert: i._("Insert")
					}, !0)), Fe(a, "click", ".button", function(e) {
						var t = He(a, "#link")[0].value,
							n = t.match(/(?:v=|v\/|embed\/|youtu.be\/)(.{11})/),
							o = t.match(/[&|?](?:star)?t=((\d+[hms]?){1,3})/),
							r = 0;
						o && Ee(o[1].split(/[hms]/), function(e, t) {
							"" !== t && (r = 60 * r + Number(t))
						}), n && /^[a-zA-Z0-9_\-]{11}$/.test(n[1]) && l(n[1], r), i.closeDropDown(!0), e.preventDefault()
					}), i.createDropDown(e, "insertlink", a)
				},
				exec: function(e) {
					var n = this;
					mt.youtube._dropDown(n, e, function(e, t) {
						n.wysiwygEditorInsertHtml(ht("youtube", {
							id: e,
							time: t
						}))
					})
				},
				tooltip: "Insert a YouTube video"
			},
			date: {
				_date: function(e) {
					var t = new Date,
						n = t.getYear(),
						o = t.getMonth() + 1,
						r = t.getDate();
					return n < 2e3 && (n = 1900 + n), o < 10 && (o = "0" + o), r < 10 && (r = "0" + r), e.opts.dateFormat.replace(/year/i, n).replace(/month/i, o).replace(/day/i, r)
				},
				exec: function() {
					this.insertText(mt.date._date(this))
				},
				txtExec: function() {
					this.insertText(mt.date._date(this))
				},
				tooltip: "Insert current date"
			},
			time: {
				_time: function() {
					var e = new Date,
						t = e.getHours(),
						n = e.getMinutes(),
						o = e.getSeconds();
					return t < 10 && (t = "0" + t), n < 10 && (n = "0" + n), o < 10 && (o = "0" + o), t + ":" + n + ":" + o
				},
				exec: function() {
					this.insertText(mt.time._time())
				},
				txtExec: function() {
					this.insertText(mt.time._time())
				},
				tooltip: "Insert current time"
			},
			ltr: {
				state: function(e, t) {
					return t && "ltr" === t.style.direction
				},
				exec: function() {
					var e = this.getRangeHelper(),
						t = e.getFirstBlockParent();
					this.focus(), (t && !qe(t, "body") || (this.execCommand("formatBlock", "p"), (t = e.getFirstBlockParent()) && !qe(t, "body"))) && je(t, "direction", "ltr" === je(t, "direction") ? "" : "ltr")
				},
				tooltip: "Left-to-Right"
			},
			rtl: {
				state: function(e, t) {
					return t && "rtl" === t.style.direction
				},
				exec: function() {
					var e = this.getRangeHelper(),
						t = e.getFirstBlockParent();
					this.focus(), (t && !qe(t, "body") || (this.execCommand("formatBlock", "p"), (t = e.getFirstBlockParent()) && !qe(t, "body"))) && je(t, "direction", "rtl" === je(t, "direction") ? "" : "rtl")
				},
				tooltip: "Right-to-Left"
			},
			print: {
				exec: "print",
				tooltip: "Print"
			},
			maximize: {
				state: function() {
					return this.maximize()
				},
				exec: function() {
					this.maximize(!this.maximize())
				},
				txtExec: function() {
					this.maximize(!this.maximize())
				},
				tooltip: "Maximize",
				shortcut: "Ctrl+Shift+M"
			},
			source: {
				state: function() {
					return this.sourceMode()
				},
				exec: function() {
					this.toggleSourceMode()
				},
				txtExec: function() {
					this.toggleSourceMode()
				},
				tooltip: "View source",
				shortcut: "Ctrl+Shift+S"
			},
			ignore: {}
		},
		k = {};

	function gt(i) {
		var r = this,
			l = [],
			a = function(e) {
				return "signal" + e.charAt(0).toUpperCase() + e.slice(1)
			},
			e = function(e, t) {
				e = [].slice.call(e);
				var n, o, r = a(e.shift());
				for (n = 0; n < l.length; n++)
					if (r in l[n] && (o = l[n][r].apply(i, e), t)) return o
			};
		r.call = function() {
			e(arguments, !1)
		}, r.callOnlyFirst = function() {
			return e(arguments, !0)
		}, r.hasHandler = function(e) {
			var t = l.length;
			for (e = a(e); t--;)
				if (e in l[t]) return !0;
			return !1
		}, r.exists = function(e) {
			return e in k && "function" == typeof(e = k[e]) && "object" == typeof e.prototype
		}, r.isRegistered = function(e) {
			if (r.exists(e))
				for (var t = l.length; t--;)
					if (l[t] instanceof k[e]) return !0;
			return !1
		}, r.register = function(e) {
			return !(!r.exists(e) || r.isRegistered(e) || (e = new k[e], l.push(e), "init" in e && e.init.call(i), 0))
		}, r.deregister = function(e) {
			var t, n = l.length,
				o = !1;
			if (!r.isRegistered(e)) return o;
			for (; n--;) l[n] instanceof k[e] && (o = !0, "destroy" in (t = l.splice(n, 1)[0]) && t.destroy.call(i));
			return o
		}, r.destroy = function() {
			for (var e = l.length; e--;) "destroy" in l[e] && l[e].destroy.call(i);
			l = [], i = null
		}
	}
	gt.plugins = k;
	var C = y && y < 11,
		E = function(e, t, n) {
			var o, r, i, l, a, s = "",
				c = e.startContainer,
				u = e.startOffset;
			for (c && 3 !== c.nodeType && (c = c.childNodes[u], u = 0), i = l = u; n > s.length && c && 3 === c.nodeType;) o = c.nodeValue, r = n - s.length, a && (l = o.length, i = 0), a = c, t ? (u = i = Math.max(l - r, 0), s = o.substr(i, l - i) + s, c = a.previousSibling) : (u = i + (l = Math.min(r, o.length)), s += o.substr(i, l), c = a.nextSibling);
			return {
				node: a || c,
				offset: u,
				text: s
			}
		};

	function vt(i, e) {
		var l, a, s = e || i.contentDocument || i.document,
			c = "sceditor-start-marker",
			u = "sceditor-end-marker",
			y = this;
		y.insertHTML = function(e, t) {
			var n, o;
			if (!y.selectedRange()) return !1;
			for (t && (e += y.selectedHtml() + t), o = De("p", {}, s), n = s.createDocumentFragment(), o.innerHTML = e; o.firstChild;) Re(n, o.firstChild);
			y.insertNode(n)
		}, a = function(e, t, n) {
			var o, r = s.createDocumentFragment();
			if ("string" == typeof e ? (t && (e += y.selectedHtml() + t), r = et(e)) : (Re(r, e), t && (Re(r, y.selectedRange().extractContents()), Re(r, t))), o = r.lastChild) {
				for (; !rt(o.lastChild, !0);) o = o.lastChild;
				if (ot(o) ? o.lastChild || Re(o, document.createTextNode("â€‹")) : o = r, y.removeMarkers(), Re(o, l(c)), Re(o, l(u)), n) {
					var i = De("div");
					return Re(i, r), i.innerHTML
				}
				return r
			}
		}, y.insertNode = function(e, t) {
			var n = a(e, t),
				o = y.selectedRange(),
				r = o.commonAncestorContainer;
			if (!n) return !1;
			o.deleteContents(), r && 3 !== r.nodeType && !ot(r) ? Ve(n, r) : o.insertNode(n), y.restoreRange()
		}, y.cloneSelected = function() {
			var e = y.selectedRange();
			if (e) return e.cloneRange()
		}, y.selectedRange = function() {
			var e, t, n = i.getSelection();
			if (n) {
				if (n.rangeCount <= 0) {
					for (t = s.body; t.firstChild;) t = t.firstChild;
					(e = s.createRange()).setStartBefore(t), n.addRange(e)
				}
				return 0 < n.rangeCount && (e = n.getRangeAt(0)), e
			}
		}, y.hasSelection = function() {
			var e = i.getSelection();
			return e && 0 < e.rangeCount
		}, y.selectedHtml = function() {
			var e, t = y.selectedRange();
			return t ? (Re(e = De("p", {}, s), t.cloneContents()), e.innerHTML) : ""
		}, y.parentNode = function() {
			var e = y.selectedRange();
			if (e) return e.commonAncestorContainer
		}, y.getFirstBlockParent = function(e) {
			var t = function(e) {
				return rt(e, !0) && (e = e ? e.parentNode : null) ? t(e) : e
			};
			return t(e || y.parentNode())
		}, y.insertNodeAt = function(e, t) {
			var n = y.selectedRange(),
				o = y.cloneSelected();
			if (!o) return !1;
			o.collapse(e), o.insertNode(t), y.selectRange(n)
		}, l = function(e) {
			y.removeMarker(e);
			var t = De("span", {
				id: e,
				className: "sceditor-selection sceditor-ignore",
				style: "display:none;line-height:0"
			}, s);
			return t.innerHTML = " ", t
		}, y.insertMarkers = function() {
			var e = y.selectedRange(),
				t = l(c);
			y.removeMarkers(), y.insertNodeAt(!0, t), e && e.collapsed ? t.parentNode.insertBefore(l(u), t.nextSibling) : y.insertNodeAt(!1, l(u))
		}, y.getMarker = function(e) {
			return s.getElementById(e)
		}, y.removeMarker = function(e) {
			var t = y.getMarker(e);
			t && Be(t)
		}, y.removeMarkers = function() {
			y.removeMarker(c), y.removeMarker(u)
		}, y.saveRange = function() {
			y.insertMarkers()
		}, y.selectRange = function(e) {
			var t, n = i.getSelection(),
				o = e.endContainer;
			if (!C && e.collapsed && o && !rt(o, !0)) {
				for (t = o.lastChild; t && qe(t, ".sceditor-ignore");) t = t.previousSibling;
				if (qe(t, "br")) {
					var r = s.createRange();
					r.setEndAfter(t), r.collapse(!1), y.compare(e, r) && (e.setStartBefore(t), e.collapse(!0))
				}
			}
			n && (y.clear(), n.addRange(e))
		}, y.restoreRange = function() {
			var e, t = y.selectedRange(),
				n = y.getMarker(c),
				o = y.getMarker(u);
			if (!n || !o || !t) return !1;
			e = n.nextSibling === o, (t = s.createRange()).setStartBefore(n), t.setEndAfter(o), e && t.collapse(!0), y.selectRange(t), y.removeMarkers()
		}, y.selectOuterText = function(e, t) {
			var n, o, r = y.cloneSelected();
			if (!r) return !1;
			r.collapse(!1), n = E(r, !0, e), o = E(r, !1, t), r.setStart(n.node, n.offset), r.setEnd(o.node, o.offset), y.selectRange(r)
		}, y.getOuterText = function(e, t) {
			var n = y.cloneSelected();
			return n ? (n.collapse(!e), E(n, e, t).text) : ""
		}, y.replaceKeyword = function(e, t, n, o, r, i) {
			n || e.sort(function(e, t) {
				return e[0].length - t[0].length
			});
			var l, a, s, c, u, d, f, p, h = "(^|[\\sآ â€‚â€ƒâ€‰])",
				m = e.length,
				g = r ? 1 : 0,
				v = o || e[m - 1][0].length;
			for (r && v++, i = i || "", u = (l = y.getOuterText(!0, v)).length, l += i, t && (l += y.getOuterText(!1, v)); m--;)
				if (p = (f = e[m][0]).length, c = Math.max(0, u - p - g), s = -1, r ? (a = l.substr(c).match(new RegExp(h + ct(f) + h))) && (s = a.index + c + a[1].length) : s = l.indexOf(f, c), -1 < s && s <= u && u <= s + p + g) return d = u - s, y.selectOuterText(d, p - d - (/^\S/.test(i) ? 1 : 0)), y.insertHTML(e[m][1]), !0;
			return !1
		}, y.compare = function(e, t) {
			return t || (t = y.selectedRange()), e && t ? 0 === e.compareBoundaryPoints(Range.END_TO_END, t) && 0 === e.compareBoundaryPoints(Range.START_TO_START, t) : !e && !t
		}, y.clear = function() {
			var e = i.getSelection();
			e && (e.removeAllRanges ? e.removeAllRanges() : e.empty && e.empty())
		}
	}
	var yt = window,
		bt = document,
		xt = y,
		wt = xt && xt < 11,
		kt = /^image\/(p?jpe?g|gif|png|bmp)$/i;

	function Ct(a, e) {
		var l, w, u, s, i, h, d, c, f, p, m, g, t, v, r, y, b, x, k, n, o, C, E, S, T, D, M, N, B, R, H, I, F, z, A, O, _, L, j, P, q, V, W, $, U, Y, K, X, Q, G, J, Z, ee, te, ne, oe, re, ie, le, ae, se, ce, ue, de = this,
			fe = {},
			pe = [],
			he = [],
			me = {},
			ge = {},
			ve = {};
		de.commands = ke(!0, {}, e.commands || mt);
		var ye = de.opts = ke(!0, {}, st, e);
		de.opts.emoticons = e.emoticons || st.emoticons, M = function() {
			a._sceditor = de, ye.locale && "en" !== ye.locale && F(), Ve(w = De("div", {
				className: "sceditor-container"
			}), a), je(w, "z-index", ye.zIndex), xt && $e(w, "ie ie" + xt), n = a.required, a.required = !1;
			var e = Ct.formats[ye.format];
			"init" in (l = e ? new e : {}) && l.init.call(de), I(), L(), z(), H(), A(), O(), pt || de.toggleSourceMode(), G();
			var t = function() {
				ze(yt, "load", t), ye.autofocus && ne(), ue(), Z(), r.call("ready"), "onReady" in l && l.onReady.call(de)
			};
			Fe(yt, "load", t), "complete" === bt.readyState && t()
		}, I = function() {
			var e = ye.plugins;
			e = e ? e.toString().split(",") : [], r = new gt(de), e.forEach(function(e) {
				r.register(e.trim())
			})
		}, F = function() {
			var e;
			(t = Ct.locale[ye.locale]) || (e = ye.locale.split("-"), t = Ct.locale[e[0]]), t && t.dateFormat && (ye.dateFormat = t.dateFormat)
		}, H = function() {
			c = De("textarea"), s = De("iframe", {
				frameborder: 0,
				allowfullscreen: !0
			}), ye.startInSourceMode ? ($e(w, "sourceMode"), Oe(s)) : ($e(w, "wysiwygMode"), Oe(c)), ye.spellcheck || Ae(w, "spellcheck", "false"), "https:" === yt.location.protocol && Ae(s, "src", "javascript:false"), Re(w, s), Re(w, c), de.dimensions(ye.width || Ke(a), ye.height || Xe(a));
			var e = xt ? "ie ie" + xt : "";
			e += ft ? " ios" : "", (d = s.contentDocument).open(), d.write(ht("html", {
				attrs: ' class="' + e + '"',
				spellcheck: ye.spellcheck ? "" : 'spellcheck="false"',
				charset: ye.charset,
				style: ye.style
			})), d.close(), h = d.body, i = s.contentWindow, de.readOnly(!!ye.readOnly), (ft || dt || xt) && (Xe(h, "100%"), xt || Fe(h, "touchend", de.focus));
			var t = Ae(a, "tabindex");
			Ae(c, "tabindex", t), Ae(s, "tabindex", t), v = new vt(i), Oe(a), de.val(a.value);
			var n = ye.placeholder || Ae(a, "placeholder");
			n && (c.placeholder = n, Ae(h, "placeholder", n))
		}, A = function() {
			ye.autoUpdate && (Fe(h, "blur", ce), Fe(c, "blur", ce)), null === ye.rtl && (ye.rtl = "rtl" === je(c, "direction")), de.rtl(!!ye.rtl), ye.autoExpand && (Fe(h, "load", ue, Ie), Fe(h, "input keyup", ue)), ye.resizeEnabled && _(), Ae(w, "id", ye.id), de.emoticons(ye.emoticonsEnabled)
		}, O = function() {
			var e = a.form,
				t = "compositionstart compositionend",
				n = "keydown keyup keypress focus blur contextmenu",
				o = "onselectionchange" in d ? "selectionchange" : "keyup focus blur contextmenu mouseup touchend click";
			Fe(bt, "click", X), e && (Fe(e, "reset", $), Fe(e, "submit", de.updateOriginal, Ie)), Fe(h, "keypress", W), Fe(h, "keydown", q), Fe(h, "keydown", V), Fe(h, "keyup", Z), Fe(h, "blur", ae), Fe(h, "keyup", se), Fe(h, "paste", j), Fe(h, t, Y), Fe(h, o, ee), Fe(h, n, K), ye.emoticonsCompat && yt.getSelection && Fe(h, "keyup", re), Fe(h, "blur", function() {
				de.val() || $e(h, "placeholder")
			}), Fe(h, "focus", function() {
				Ue(h, "placeholder")
			}), Fe(c, "blur", ae), Fe(c, "keyup", se), Fe(c, "keydown", q), Fe(c, t, Y), Fe(c, n, K), Fe(d, "mousedown", U), Fe(d, o, ee), Fe(d, "beforedeactivate keyup mouseup", R), Fe(d, "keyup", Z), Fe(d, "focus", function() {
				p = null
			}), Fe(w, "selectionchanged", te), Fe(w, "selectionchanged", G), Fe(w, "selectionchanged valuechanged nodechanged pasteraw paste", K)
		}, z = function() {
			var i, l = de.commands,
				a = (ye.toolbarExclude || "").split(","),
				e = ye.toolbar.split("|");
			u = De("div", {
				className: "sceditor-toolbar",
				unselectable: "on"
			}), ye.icons in Ct.icons && (D = new Ct.icons[ye.icons]), Ee(e, function(e, t) {
				i = De("div", {
					className: "sceditor-group"
				}), Ee(t.split(","), function(e, t) {
					var n, o, r = l[t];
					!r || -1 < a.indexOf(t) || (o = r.shortcut, n = ht("toolbarButton", {
						name: t,
						dispName: de._(r.name || r.tooltip || t)
					}, !0).firstChild, D && D.create && D.create(t) && (Ve(D.create(t), n.firstChild), $e(n, "has-icon")), n._sceTxtMode = !!r.txtExec, n._sceWysiwygMode = !!r.exec, Ye(n, "disabled", !r.exec), Fe(n, "click", function(e) {
						We(n, "disabled") || B(n, r), G(), e.preventDefault()
					}), Fe(n, "mousedown", function(e) {
						de.closeDropDown(), e.preventDefault()
					}), r.tooltip && Ae(n, "title", de._(r.tooltip) + (o ? " (" + o + ")" : "")), o && de.addShortcut(o, t), r.state ? he.push({
						name: t,
						state: r.state
					}) : be(r.exec) && he.push({
						name: t,
						state: r.exec
					}), Re(i, n), ge[t] = n)
				}), i.firstChild && Re(u, i)
			}), Re(ye.toolbarContainer || w, u)
		}, _ = function() {
			var o, r, i, l, t, n, e = De("div", {
					className: "sceditor-grip"
				}),
				a = De("div", {
					className: "sceditor-resize-cover"
				}),
				s = "touchmove mousemove",
				c = "touchcancel touchend mouseup",
				u = 0,
				d = 0,
				f = 0,
				p = 0,
				h = 0,
				m = 0,
				g = Ke(w),
				v = Xe(w),
				y = !1,
				b = de.rtl();
			if (o = ye.resizeMinHeight || v / 1.5, r = ye.resizeMaxHeight || 2.5 * v, i = ye.resizeMinWidth || g / 1.25, l = ye.resizeMaxWidth || 1.25 * g, t = function(e) {
					"touchmove" === e.type ? (e = yt.event, f = e.changedTouches[0].pageX, p = e.changedTouches[0].pageY) : (f = e.pageX, p = e.pageY);
					var t = m + (p - d),
						n = b ? h - (f - u) : h + (f - u);
					0 < l && l < n && (n = l), 0 < i && n < i && (n = i), ye.resizeWidth || (n = !1), 0 < r && r < t && (t = r), 0 < o && t < o && (t = o), ye.resizeHeight || (t = !1), (n || t) && de.dimensions(n, t), e.preventDefault()
				}, n = function(e) {
					y && (y = !1, Oe(a), Ue(w, "resizing"), ze(bt, s, t), ze(bt, c, n), e.preventDefault())
				}, D && D.create) {
				var x = D.create("grip");
				x && (Re(e, x), $e(e, "has-icon"))
			}
			Re(w, e), Re(w, a), Oe(a), Fe(e, "touchstart mousedown", function(e) {
				"touchstart" === e.type ? (e = yt.event, u = e.touches[0].pageX, d = e.touches[0].pageY) : (u = e.pageX, d = e.pageY), h = Ke(w), m = Xe(w), y = !0, $e(w, "resizing"), _e(a), Fe(bt, s, t), Fe(bt, c, n), e.preventDefault()
			})
		}, L = function() {
			var e = ye.emoticons,
				n = ye.emoticonsRoot || "";
			e && (ve = ke({}, e.more, e.dropdown, e.hidden)), Ee(ve, function(e, t) {
				ve[e] = ht("emoticon", {
					key: e,
					url: n + (t.url || t),
					tooltip: t.tooltip || e
				}), ye.emoticonsEnabled && pe.push(De("img", {
					src: n + (t.url || t)
				}))
			})
		}, ne = function() {
			var e, t, n = h.firstChild,
				o = !!ye.autofocusEnd;
			if (Ge(w)) {
				if (de.sourceMode()) return t = o ? c.value.length : 0, void c.setSelectionRange(t, t);
				if (lt(h), o)
					for ((n = h.lastChild) || (n = De("p", {}, d), Re(h, n)); n.lastChild;) n = n.lastChild, !wt && qe(n, "br") && n.previousSibling && (n = n.previousSibling);
				e = d.createRange(), ot(n) ? e.selectNodeContents(n) : (e.setStartBefore(n), o && e.setStartAfter(n)), e.collapse(!o), v.selectRange(e), x = e, o && (h.scrollTop = h.scrollHeight), de.focus()
			}
		}, de.readOnly = function(e) {
			return "boolean" != typeof e ? !c.readonly : (h.contentEditable = !e, c.readonly = !e, Q(e), de)
		}, de.rtl = function(e) {
			var t = e ? "rtl" : "ltr";
			return "boolean" != typeof e ? "rtl" === Ae(c, "dir") : (Ae(h, "dir", t), Ae(c, "dir", t), Ue(w, "rtl"), Ue(w, "ltr"), $e(w, t), D && D.rtl && D.rtl(e), de)
		}, Q = function(n) {
			var o = de.inSourceMode() ? "_sceTxtMode" : "_sceWysiwygMode";
			Ee(ge, function(e, t) {
				Ye(t, "disabled", n || !t[o])
			})
		}, de.width = function(e, t) {
			return e || 0 === e ? (de.dimensions(e, null, t), de) : Ke(w)
		}, de.dimensions = function(e, t, n) {
			return t = !(!t && 0 !== t) && t, !1 === (e = !(!e && 0 !== e) && e) && !1 === t ? {
				width: de.width(),
				height: de.height()
			} : (!1 !== e && (!1 !== n && (ye.width = e), Ke(w, e)), !1 !== t && (!1 !== n && (ye.height = t), Xe(w, t)), de)
		}, de.height = function(e, t) {
			return e || 0 === e ? (de.dimensions(null, e, t), de) : Xe(w)
		}, de.maximize = function(e) {
			var t = "sceditor-maximize";
			return xe(e) ? We(w, t) : ((e = !!e) && (S = yt.pageYOffset), Ye(bt.documentElement, t, e), Ye(bt.body, t, e), Ye(w, t, e), de.width(e ? "100%" : ye.width, !1), de.height(e ? "100%" : ye.height, !1), e || yt.scrollTo(0, S), ue(), de)
		}, ue = function() {
			ye.autoExpand && !E && (E = setTimeout(de.expandToContent, 200))
		}, de.expandToContent = function(e) {
			if (!de.maximize()) {
				if (clearTimeout(E), E = !1, !C) {
					var t = ye.resizeMinHeight || ye.height || Xe(a);
					C = {
						min: t,
						max: ye.resizeMaxHeight || 2 * t
					}
				}
				var n = bt.createRange();
				n.selectNodeContents(h);
				var o = n.getBoundingClientRect(),
					r = d.documentElement.clientHeight - 1,
					i = o.bottom - o.top,
					l = de.height() + 1 + (i - r);
				e || -1 === C.max || (l = Math.min(l, C.max)), de.height(Math.ceil(Math.max(l, C.min)))
			}
		}, de.destroy = function() {
			if (r) {
				r.destroy(), r = p = v = null, f && Be(f), ze(bt, "click", X);
				var e = a.form;
				e && (ze(e, "reset", $), ze(e, "submit", de.updateOriginal)), Be(c), Be(u), Be(w), delete a._sceditor, _e(a), a.required = n
			}
		}, de.createDropDown = function(e, t, n, o) {
			var r, i = "sceditor-" + t;
			de.closeDropDown(!0), f && We(f, i) || (!1 !== o && Ee(He(n, ":not(input):not(textarea)"), function(e, t) {
				t.nodeType === Se && Ae(t, "unselectable", "on")
			}), r = ke({
				top: e.offsetTop,
				left: e.offsetLeft,
				marginTop: e.clientHeight
			}, ye.dropDownCss), je(f = De("div", {
				className: "sceditor-dropdown " + i
			}), r), Re(f, n), Re(w, f), Fe(f, "click focusin", function(e) {
				e.stopPropagation()
			}), setTimeout(function() {
				if (f) {
					var e = He(f, "input,textarea")[0];
					e && e.focus()
				}
			}))
		}, X = function(e) {
			3 !== e.which && f && !e.defaultPrevented && (ce(), de.closeDropDown())
		}, j = function(e) {
			var t, n, o = xt || dt,
				r = h,
				i = e.clipboardData;
			if (i && !o) {
				var l = {},
					a = i.types,
					s = i.items;
				e.preventDefault();
				for (var c = 0; c < a.length; c++) {
					if (yt.FileReader && s && kt.test(s[c].type)) return t = i.items[c].getAsFile(), n = void 0, (n = new FileReader).onload = function(e) {
						P({
							html: '<img src="' + e.target.result + '" />'
						})
					}, void n.readAsDataURL(t);
					l[a[c]] = i.getData(a[c])
				}
				l.text = l["text/plain"], l.html = l["text/html"], P(l)
			} else if (!T) {
				var u = r.scrollTop;
				for (v.saveRange(), T = bt.createDocumentFragment(); r.firstChild;) Re(T, r.firstChild);
				setTimeout(function() {
					var e = r.innerHTML;
					r.innerHTML = "", Re(r, T), r.scrollTop = u, T = !1, v.restoreRange(), P({
						html: e
					})
				}, 0)
			}
		}, P = function(e) {
			var t = De("div", {}, d);
			r.call("pasteRaw", e), Qe(w, "pasteraw", e), e.html ? (t.innerHTML = e.html, it(t)) : t.innerHTML = ut(e.text || "");
			var n = {
				val: t.innerHTML
			};
			"fragmentToSource" in l && (n.val = l.fragmentToSource(n.val, d, y)), r.call("paste", n), Qe(w, "paste", n), "fragmentToHtml" in l && (n.val = l.fragmentToHtml(n.val, y)), r.call("pasteHtml", n), de.wysiwygEditorInsertHtml(n.val, null, !0)
		}, de.closeDropDown = function(e) {
			f && (Be(f), f = null), !0 === e && de.focus()
		}, de.wysiwygEditorInsertHtml = function(e, t, n) {
			var o, r, i, l = Xe(s);
			de.focus(), !n && Ne(b, "code") || (v.insertHTML(e, t), v.saveRange(), N(), _e(o = He(h, "#sceditor-end-marker")[0]), r = h.scrollTop, i = at(o).top + 1.5 * o.offsetHeight - l, Oe(o), (r < i || i + l < r) && (h.scrollTop = i), le(!1), v.restoreRange(), Z())
		}, de.wysiwygEditorInsertText = function(e, t) {
			de.wysiwygEditorInsertHtml(ut(e), ut(t))
		}, de.insertText = function(e, t) {
			return de.inSourceMode() ? de.sourceEditorInsertText(e, t) : de.wysiwygEditorInsertText(e, t), de
		}, de.sourceEditorInsertText = function(e, t) {
			var n, o, r = c.selectionStart,
				i = c.selectionEnd;
			n = c.scrollTop, c.focus(), o = c.value, t && (e += o.substring(r, i) + t), c.value = o.substring(0, r) + e + o.substring(i, o.length), c.selectionStart = r + e.length - (t ? t.length : 0), c.selectionEnd = c.selectionStart, c.scrollTop = n, c.focus(), le()
		}, de.getRangeHelper = function() {
			return v
		}, de.sourceEditorCaret = function(e) {
			return c.focus(), e ? (c.selectionStart = e.start, c.selectionEnd = e.end, this) : {
				start: c.selectionStart,
				end: c.selectionEnd
			}
		}, de.val = function(e, t) {
			return be(e) ? (de.inSourceMode() ? de.setSourceEditorValue(e) : (!1 !== t && "toHtml" in l && (e = l.toHtml(e)), de.setWysiwygEditorValue(e)), de) : de.inSourceMode() ? de.getSourceEditorValue(!1) : de.getWysiwygEditorValue(t)
		}, de.insert = function(e, t, n, o, r) {
			if (de.inSourceMode()) return de.sourceEditorInsertText(e, t), de;
			if (t) {
				var i = v.selectedHtml();
				!1 !== n && "fragmentToSource" in l && (i = l.fragmentToSource(i, d, y)), e += i + t
			}
			return !1 !== n && "fragmentToHtml" in l && (e = l.fragmentToHtml(e, y)), !1 !== n && !0 === r && (e = e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")), de.wysiwygEditorInsertHtml(e), de
		}, de.getWysiwygEditorValue = function(e) {
			for (var t, n = De("div", {}, d), o = h.childNodes, r = 0; r < o.length; r++) Re(n, o[r].cloneNode(!0));
			return Re(h, n), it(n), Be(n), t = n.innerHTML, !1 !== e && l.hasOwnProperty("toSource") && (t = l.toSource(t, d)), t
		}, de.getBody = function() {
			return h
		}, de.getContentAreaContainer = function() {
			return s
		}, de.getSourceEditorValue = function(e) {
			var t = c.value;
			return !1 !== e && "toHtml" in l && (t = l.toHtml(t)), t
		}, de.setWysiwygEditorValue = function(e) {
			e || (e = "<p>" + (xt ? "" : "<br />") + "</p>"), h.innerHTML = e, N(), Z(), le(), ue()
		}, de.setSourceEditorValue = function(e) {
			c.value = e, le()
		}, de.updateOriginal = function() {
			a.value = de.val()
		}, N = function() {
			var e, c, u, d, t, f, p;
			ye.emoticonsEnabled && (e = h, c = ve, u = ye.emoticonsCompat, d = e.ownerDocument, t = "(^|\\s|آ |â€‚|â€ƒ|â€‰|$)", f = [], p = {}, Me(e, "code") || (Ee(c, function(e) {
				p[e] = new RegExp(t + ct(e) + t), f.push(e)
			}), f.sort(function(e, t) {
				return t.length - e.length
			}), function e(t) {
				for (t = t.firstChild; t;) {
					if (t.nodeType !== Se || qe(t, "code") || e(t), t.nodeType === Te)
						for (var n = 0; n < f.length; n++) {
							var o = t.nodeValue,
								r = f[n],
								i = u ? o.search(p[r]) : o.indexOf(r);
							if (-1 < i) {
								var l = o.indexOf(r, i),
									a = et(c[r], d),
									s = o.substr(l + r.length);
								a.appendChild(d.createTextNode(s)), t.nodeValue = o.substr(0, l), t.parentNode.insertBefore(a, t.nextSibling)
							}
						}
					t = t.nextSibling
				}
			}(e)))
		}, de.inSourceMode = function() {
			return We(w, "sourceMode")
		}, de.sourceMode = function(e) {
			var t = de.inSourceMode();
			return "boolean" != typeof e ? t : ((t && !e || !t && e) && de.toggleSourceMode(), de)
		}, de.toggleSourceMode = function() {
			var e = de.inSourceMode();
			!pt && e || (e || (v.saveRange(), v.clear()), de.blur(), e ? de.setWysiwygEditorValue(de.getSourceEditorValue()) : de.setSourceEditorValue(de.getWysiwygEditorValue()), p = null, Le(c), Le(s), Ye(w, "wysiwygMode", e), Ye(w, "sourceMode", !e), Q(), G())
		}, J = function() {
			return c.focus(), c.value.substring(c.selectionStart, c.selectionEnd)
		}, B = function(e, t) {
			de.inSourceMode() ? t.txtExec && (Array.isArray(t.txtExec) ? de.sourceEditorInsertText.apply(de, t.txtExec) : t.txtExec.call(de, e, J())) : t.exec && (we(t.exec) ? t.exec.call(de, e) : de.execCommand(t.exec, t.hasOwnProperty("execParam") ? t.execParam : null))
		}, R = function() {
			xt && (p = v.selectedRange())
		}, de.execCommand = function(e, t) {
			var n = !1,
				o = de.commands[e];
			if (de.focus(), !Ne(v.parentNode(), "code")) {
				try {
					n = d.execCommand(e, !1, t)
				} catch (e) {}!n && o && o.errorMessage && alert(de._(o.errorMessage)), G()
			}
		}, ee = function() {
			function e() {
				if (i.getSelection() && i.getSelection().rangeCount <= 0) x = null;
				else if (v && !v.compare(x)) {
					if ((x = v.cloneSelected()) && x.collapsed) {
						var e = x.startContainer,
							t = x.startOffset;
						for (t && e.nodeType !== Te && (e = e.childNodes[t]); e && e.parentNode !== h;) e = e.parentNode;
						e && rt(e, !0) && (v.saveRange(), n = d, Je(h, function(e) {
							rt(e, !0) ? (o || Ve(o = De("p", {}, n), e), e.nodeType === Te && "" === e.nodeValue || Re(o, e)) : o = null
						}, !1, !0), v.restoreRange())
					}
					Qe(w, "selectionchanged")
				}
				var n, o;
				k = !1
			}
			k || (k = !0, "onselectionchange" in d ? e() : setTimeout(e, 100))
		}, te = function() {
			var e, t = v.parentNode();
			y !== t && (e = y, y = t, b = v.getFirstBlockParent(t), Qe(w, "nodechanged", {
				oldNode: e,
				newNode: y
			}))
		}, de.currentNode = function() {
			return y
		}, de.currentBlockNode = function() {
			return b
		}, G = function() {
			var e, t, n = "active",
				o = d,
				r = de.sourceMode();
			if (de.readOnly()) Ee(He(u, n), function(e, t) {
				Ue(t, n)
			});
			else {
				r || (t = v.parentNode(), e = v.getFirstBlockParent(t));
				for (var i = 0; i < he.length; i++) {
					var l = 0,
						a = ge[he[i].name],
						s = he[i].state,
						c = r && !a._sceTxtMode || !r && !a._sceWysiwygMode;
					if (be(s)) {
						if (!r) try {
							-1 < (l = o.queryCommandEnabled(s) ? 0 : -1) && (l = o.queryCommandState(s) ? 1 : 0)
						} catch (e) {}
					} else c || (l = s.call(de, t, e));
					Ye(a, "disabled", c || l < 0), Ye(a, n, 0 < l)
				}
				D && D.update && D.update(r, t, e)
			}
		}, W = function(e) {
			if (!e.defaultPrevented && (de.closeDropDown(), 13 === e.which) && !qe(b, "li,ul,ol") && tt(b)) {
				p = null;
				var t = De("br", {}, d);
				if (v.insertNode(t), !wt) {
					var n = t.parentNode,
						o = n.lastChild;
					o && o.nodeType === Te && "" === o.nodeValue && (Be(o), o = n.lastChild), !rt(n, !0) && o === t && rt(t.previousSibling) && v.insertHTML("<br>")
				}
				e.preventDefault()
			}
		}, Z = function() {
			Ze(h, function(e) {
				if (e.nodeType === Se && !/inline/.test(je(e, "display")) && !qe(e, ".sceditor-nlf") && tt(e)) {
					var t = De("p", {}, d);
					return t.className = "sceditor-nlf", t.innerHTML = wt ? "" : "<br />", Re(h, t), !1
				}
				if (3 === e.nodeType && !/^\s*$/.test(e.nodeValue) || qe(e, "br")) return !1
			})
		}, $ = function() {
			de.val(a.value)
		}, U = function() {
			de.closeDropDown(), p = null
		}, de._ = function() {
			var n = arguments;
			return t && t[n[0]] && (n[0] = t[n[0]]), n[0].replace(/\{(\d+)\}/g, function(e, t) {
				return void 0 !== n[t - 0 + 1] ? n[t - 0 + 1] : "{" + t + "}"
			})
		}, K = function(t) {
			r && r.call(t.type + "Event", t, de);
			var e = (t.target === c ? "scesrc" : "scewys") + t.type;
			fe[e] && fe[e].forEach(function(e) {
				e.call(de, t)
			})
		}, de.bind = function(e, t, n, o) {
			for (var r = (e = e.split(" ")).length; r--;)
				if (we(t)) {
					var i = "scewys" + e[r],
						l = "scesrc" + e[r];
					n || (fe[i] = fe[i] || [], fe[i].push(t)), o || (fe[l] = fe[l] || [], fe[l].push(t)), "valuechanged" === e[r] && (le.hasHandler = !0)
				}
			return de
		}, de.unbind = function(e, t, n, o) {
			for (var r = (e = e.split(" ")).length; r--;) we(t) && (n || Ce(fe["scewys" + e[r]] || [], t), o || Ce(fe["scesrc" + e[r]] || [], t));
			return de
		}, de.blur = function(e, t, n) {
			return we(e) ? de.bind("blur", e, t, n) : de.sourceMode() ? c.blur() : h.blur(), de
		}, de.focus = function(e, t, n) {
			if (we(e)) de.bind("focus", e, t, n);
			else if (de.inSourceMode()) c.focus();
			else {
				if (He(d, ":focus").length) return;
				var o, r = v.selectedRange();
				x || ne(), !wt && r && 1 === r.endOffset && r.collapsed && (o = r.endContainer) && 1 === o.childNodes.length && qe(o.firstChild, "br") && (r.setStartBefore(o.firstChild), r.collapse(!0), v.selectRange(r)), i.focus(), h.focus(), p && (v.selectRange(p), p = null)
			}
			return G(), de
		}, de.keyDown = function(e, t, n) {
			return de.bind("keydown", e, t, n)
		}, de.keyPress = function(e, t, n) {
			return de.bind("keypress", e, t, n)
		}, de.keyUp = function(e, t, n) {
			return de.bind("keyup", e, t, n)
		}, de.nodeChanged = function(e) {
			return de.bind("nodechanged", e, !1, !0)
		}, de.selectionChanged = function(e) {
			return de.bind("selectionchanged", e, !1, !0)
		}, de.valueChanged = function(e, t, n) {
			return de.bind("valuechanged", e, t, n)
		}, oe = function(e) {
			var n = 0,
				o = de.emoticonsCache,
				t = String.fromCharCode(e.which);
			Ne(b, "code") || (o || (o = [], Ee(ve, function(e, t) {
				o[n++] = [e, t]
			}), o.sort(function(e, t) {
				return e[0].length - t[0].length
			}), de.emoticonsCache = o, de.longestEmoticonCode = o[o.length - 1][0].length), v.replaceKeyword(de.emoticonsCache, !0, !0, de.longestEmoticonCode, ye.emoticonsCompat, t) && (ye.emoticonsCompat && /^\s$/.test(t) || e.preventDefault()))
		}, re = function() {
			! function(e, t) {
				var n = /[^\s\xA0\u2002\u2003\u2009\u00a0]+/,
					o = e && He(e, "img[data-sceditor-emoticon]");
				if (e && o.length)
					for (var r = 0; r < o.length; r++) {
						var i = o[r],
							l = i.parentNode,
							a = i.previousSibling,
							s = i.nextSibling;
						if (a && n.test(a.nodeValue.slice(-1)) || s && n.test((s.nodeValue || "")[0])) {
							var c = t.cloneSelected(),
								u = -1,
								d = c.startContainer,
								f = a.nodeValue;
							null === f && (f = a.innerText || ""), f += Pe(i, "sceditor-emoticon"), d === s && (u = f.length + c.startOffset), d === e && e.childNodes[c.startOffset] === s && (u = f.length), d === a && (u = c.startOffset), s && s.nodeType === Te || (s = l.insertBefore(l.ownerDocument.createTextNode(""), s)), s.insertData(0, f), Be(a), Be(i), -1 < u && (c.setStart(s, u), c.collapse(!0), t.selectRange(c))
						}
					}
			}(b, v)
		}, de.emoticons = function(e) {
			return e || !1 === e ? ((ye.emoticonsEnabled = e) ? (Fe(h, "keypress", oe), de.sourceMode() || (v.saveRange(), N(), le(!1), v.restoreRange())) : (Ee(He(h, "img[data-sceditor-emoticon]"), function(e, t) {
				var n = Pe(t, "sceditor-emoticon"),
					o = d.createTextNode(n);
				t.parentNode.replaceChild(o, t)
			}), ze(h, "keypress", oe), le()), de) : ye.emoticonsEnabled
		}, de.css = function(e) {
			return o || (o = De("style", {
				id: "inline"
			}, d), Re(d.head, o)), be(e) ? (o.styleSheet ? o.styleSheet.cssText = e : o.innerHTML = e, de) : o.styleSheet ? o.styleSheet.cssText : o.innerHTML
		}, q = function(e) {
			var t = [],
				n = {
					"`": "~",
					1: "!",
					2: "@",
					3: "#",
					4: "$",
					5: "%",
					6: "^",
					7: "&",
					8: "*",
					9: "(",
					0: ")",
					"-": "_",
					"=": "+",
					";": ": ",
					"'": '"',
					",": "<",
					".": ">",
					"/": "?",
					"\\": "|",
					"[": "{",
					"]": "}"
				},
				o = {
					109: "-",
					110: "del",
					111: "/",
					96: "0",
					97: "1",
					98: "2",
					99: "3",
					100: "4",
					101: "5",
					102: "6",
					103: "7",
					104: "8",
					105: "9"
				},
				r = e.which,
				i = {
					8: "backspace",
					9: "tab",
					13: "enter",
					19: "pause",
					20: "capslock",
					27: "esc",
					32: "space",
					33: "pageup",
					34: "pagedown",
					35: "end",
					36: "home",
					37: "left",
					38: "up",
					39: "right",
					40: "down",
					45: "insert",
					46: "del",
					91: "win",
					92: "win",
					93: "select",
					96: "0",
					97: "1",
					98: "2",
					99: "3",
					100: "4",
					101: "5",
					102: "6",
					103: "7",
					104: "8",
					105: "9",
					106: "*",
					107: "+",
					109: "-",
					110: ".",
					111: "/",
					112: "f1",
					113: "f2",
					114: "f3",
					115: "f4",
					116: "f5",
					117: "f6",
					118: "f7",
					119: "f8",
					120: "f9",
					121: "f10",
					122: "f11",
					123: "f12",
					144: "numlock",
					145: "scrolllock",
					186: ";",
					187: "=",
					188: ",",
					189: "-",
					190: ".",
					191: "/",
					192: "`",
					219: "[",
					220: "\\",
					221: "]",
					222: "'"
				}[r] || String.fromCharCode(r).toLowerCase();
			(e.ctrlKey || e.metaKey) && t.push("ctrl"), e.altKey && t.push("alt"), e.shiftKey && (t.push("shift"), o[r] ? i = o[r] : n[i] && (i = n[i])), i && (r < 16 || 18 < r) && t.push(i), t = t.join("+"), me[t] && !1 === me[t].call(de) && (e.stopPropagation(), e.preventDefault())
		}, de.addShortcut = function(e, t) {
			return e = e.toLowerCase(), be(t) ? me[e] = function() {
				return B(ge[t], de.commands[t]), !1
			} : me[e] = t, de
		}, de.removeShortcut = function(e) {
			return delete me[e.toLowerCase()], de
		}, V = function(e) {
			var t, n, o;
			if (!ye.disableBlockRemove && 8 === e.which && (n = v.selectedRange()) && (t = n.startContainer, 0 === n.startOffset && (o = ie()) && !qe(o, "body"))) {
				for (; t !== o;) {
					for (; t.previousSibling;)
						if ((t = t.previousSibling).nodeType !== Te || t.nodeValue) return;
					if (!(t = t.parentNode)) return
				}
				de.clearBlockFormatting(o), e.preventDefault()
			}
		}, ie = function() {
			for (var e = b; !tt(e) || rt(e, !0);)
				if (!(e = e.parentNode) || qe(e, "body")) return;
			return e
		}, de.clearBlockFormatting = function(e) {
			return !(e = e || ie()) || qe(e, "body") || (v.saveRange(), e.className = "", p = null, Ae(e, "style", ""), qe(e, "p,div,td") || nt(e, "p"), v.restoreRange()), de
		}, le = function(e) {
			if (r && (r.hasHandler("valuechangedEvent") || le.hasHandler)) {
				var t, n = de.sourceMode(),
					o = !n && v.hasSelection();
				e = (m = !1) !== e && !d.getElementById("sceditor-start-marker"), g && (clearTimeout(g), g = !1), o && e && v.saveRange(), (t = n ? c.value : h.innerHTML) !== le.lastVal && (le.lastVal = t, Qe(w, "valuechanged", {
					rawValue: n ? de.val() : t
				})), o && e && v.removeMarkers()
			}
		}, ae = function() {
			g && le()
		}, se = function(e) {
			var t = e.which,
				n = se.lastChar,
				o = 13 === n || 32 === n,
				r = 8 === n || 46 === n;
			se.lastChar = t, m || (13 === t || 32 === t ? o ? se.triggerNext = !0 : le() : 8 === t || 46 === t ? r ? se.triggerNext = !0 : le() : se.triggerNext && (le(), se.triggerNext = !1), clearTimeout(g), g = setTimeout(function() {
				m || le()
			}, 1500))
		}, Y = function(e) {
			(m = /start/i.test(e.type)) || le()
		}, ce = function() {
			de.updateOriginal()
		}, M()
	}
	Ct.locale = {}, Ct.formats = {}, Ct.icons = {}, Ct.command = {
		get: function(e) {
			return mt[e] || null
		},
		set: function(e, t) {
			return !(!e || !t) && ((t = ke(mt[e] || {}, t)).remove = function() {
				Ct.command.remove(e)
			}, mt[e] = t, this)
		},
		remove: function(e) {
			return mt[e] && delete mt[e], this
		}
	}, window.sceditor = {
		command: Ct.command,
		commands: mt,
		defaultOptions: st,
		ie: y,
		ios: ft,
		isWysiwygSupported: pt,
		regexEscape: ct,
		escapeEntities: ut,
		escapeUriScheme: function(e) {
			var t, n = window.location;
			return e && /^[^\/]*:/i.test(e) && !h.test(e) ? ((t = n.pathname.split("/")).pop(), n.protocol + "//" + n.host + t.join("/") + "/" + e) : e
		},
		dom: {
			css: je,
			attr: Ae,
			removeAttr: a,
			is: qe,
			closest: Ne,
			width: Ke,
			height: Xe,
			traverse: Je,
			rTraverse: Ze,
			parseHTML: et,
			hasStyling: tt,
			convertElement: nt,
			blockLevelList: c,
			canHaveChildren: ot,
			isInline: rt,
			copyCSS: u,
			fixNesting: it,
			findCommonAncestor: function(e, t) {
				for (; e = e.parentNode;)
					if ((n = e) !== (o = t) && n.contains && n.contains(o)) return e;
				var n, o
			},
			getSibling: d,
			removeWhiteSpace: lt,
			extractContents: f,
			getOffset: at,
			getStyle: p,
			hasStyle: function(e, t, n) {
				var o = p(e, t);
				return !!o && (!n || o === n || Array.isArray(n) && -1 < n.indexOf(o))
			}
		},
		locale: Ct.locale,
		icons: Ct.icons,
		utils: {
			each: Ee,
			isEmptyObject: t,
			extend: ke
		},
		plugins: gt.plugins,
		formats: Ct.formats,
		create: function(e, t) {
			t = t || {}, Me(e, ".sceditor-container") || (t.runWithoutWysiwygSupport || pt) && new Ct(e, t)
		},
		instance: function(e) {
			return e._sceditor
		}
	}, o.sceditor = window.sceditor, o.fn.sceditor = function(e) {
		var t, n = [];
		return this.each(function() {
			t = this._sceditor, "state" === e ? n.push(!!t) : "instance" === e ? n.push(t) : t || o.sceditor.create(this, e)
		}), n.length ? 1 === n.length ? n[0] : n : this
	}
}(jQuery),
function(e) {
	"use strict";
	var f = e.escapeEntities,
		a = e.escapeUriScheme,
		h = e.dom,
		t = e.utils,
		m = h.css,
		g = h.attr,
		v = h.is,
		n = t.extend,
		s = t.each,
		o = e.ie,
		y = o && o < 11,
		b = "data-sceditor-emoticon",
		i = e.command.get,
		x = {
			always: 1,
			never: 2,
			auto: 3
		},
		r = {
			bold: {
				txtExec: ["[b]", "[/b]"]
			},
			italic: {
				txtExec: ["[i]", "[/i]"]
			},
			underline: {
				txtExec: ["[u]", "[/u]"]
			},
			strike: {
				txtExec: ["[s]", "[/s]"]
			},
			subscript: {
				txtExec: ["[sub]", "[/sub]"]
			},
			superscript: {
				txtExec: ["[sup]", "[/sup]"]
			},
			left: {
				txtExec: ["[left]", "[/left]"]
			},
			center: {
				txtExec: ["[center]", "[/center]"]
			},
			right: {
				txtExec: ["[right]", "[/right]"]
			},
			justify: {
				txtExec: ["[justify]", "[/justify]"]
			},
			font: {
				txtExec: function(e) {
					var t = this;
					i("font")._dropDown(t, e, function(e) {
						t.insertText("[font=" + e + "]", "[/font]")
					})
				}
			},
			size: {
				txtExec: function(e) {
					var t = this;
					i("size")._dropDown(t, e, function(e) {
						t.insertText("[size=" + e + "]", "[/size]")
					})
				}
			},
			color: {
				txtExec: function(e) {
					var t = this;
					i("color")._dropDown(t, e, function(e) {
						t.insertText("[color=" + e + "]", "[/color]")
					})
				}
			},
			bulletlist: {
				txtExec: function(e, t) {
					var n = "";
					s(t.split(/\r?\n/), function() {
						n += (n ? "\n" : "") + "[li]" + this + "[/li]"
					}), this.insertText("[ul]\n" + n + "\n[/ul]")
				}
			},
			orderedlist: {
				txtExec: function(e, t) {
					var n = "";
					s(t.split(/\r?\n/), function() {
						n += (n ? "\n" : "") + "[li]" + this + "[/li]"
					}), this.insertText("[ol]\n" + n + "\n[/ol]")
				}
			},
			table: {
				txtExec: ["[table][tr][td]", "[/td][/tr][/table]"]
			},
			horizontalrule: {
				txtExec: ["[hr]"]
			},
			code: {
				txtExec: ["[code]", "[/code]"]
			},
			image: {
				txtExec: function(e, t) {
					var r = this;
					i("image")._dropDown(r, e, t, function(e, t, n) {
						var o = "";
						t && (o += " width=" + t), n && (o += " height=" + n), r.insertText("[img" + o + "]" + e + "[/img]")
					})
				}
			},
			email: {
				txtExec: function(e, n) {
					var o = this;
					i("email")._dropDown(o, e, function(e, t) {
						o.insertText("[email=" + e + "]" + (t || n || e) + "[/email]")
					})
				}
			},
			link: {
				txtExec: function(e, n) {
					var o = this;
					i("link")._dropDown(o, e, function(e, t) {
						o.insertText("[url=" + e + "]" + (t || n || e) + "[/url]")
					})
				}
			},
			quote: {
				txtExec: ["[quote]", "[/quote]"]
			},
			youtube: {
				txtExec: function(e) {
					var t = this;
					i("youtube")._dropDown(t, e, function(e) {
						t.insertText("[youtube]" + e + "[/youtube]")
					})
				}
			},
			rtl: {
				txtExec: ["[rtl]", "[/rtl]"]
			},
			ltr: {
				txtExec: ["[ltr]", "[/ltr]"]
			}
		},
		w = {
			b: {
				tags: {
					b: null,
					strong: null
				},
				styles: {
					"font-weight": ["bold", "bolder", "401", "700", "800", "900"]
				},
				format: "[b]{0}[/b]",
				html: "<strong>{0}</strong>"
			},
			i: {
				tags: {
					i: null,
					em: null
				},
				styles: {
					"font-style": ["italic", "oblique"]
				},
				format: "[i]{0}[/i]",
				html: "<em>{0}</em>"
			},
			u: {
				tags: {
					u: null
				},
				styles: {
					"text-decoration": ["underline"]
				},
				format: "[u]{0}[/u]",
				html: "<u>{0}</u>"
			},
			s: {
				tags: {
					s: null,
					strike: null
				},
				styles: {
					"text-decoration": ["line-through"]
				},
				format: "[s]{0}[/s]",
				html: "<s>{0}</s>"
			},
			sub: {
				tags: {
					sub: null
				},
				format: "[sub]{0}[/sub]",
				html: "<sub>{0}</sub>"
			},
			sup: {
				tags: {
					sup: null
				},
				format: "[sup]{0}[/sup]",
				html: "<sup>{0}</sup>"
			},
			font: {
				tags: {
					font: {
						face: null
					}
				},
				styles: {
					"font-family": null
				},
				quoteType: x.never,
				format: function(e, t) {
					var n;
					return v(e, "font") && (n = g(e, "face")) || (n = m(e, "font-family")), "[font=" + E(n) + "]" + t + "[/font]"
				},
				html: '<font face="{defaultattr}">{0}</font>'
			},
			size: {
				tags: {
					font: {
						size: null
					}
				},
				styles: {
					"font-size": null
				},
				format: function(e, t) {
					var n = g(e, "size"),
						o = 2;
					return n || (n = m(e, "fontSize")), -1 < n.indexOf("px") ? ((n = n.replace("px", "") - 0) < 12 && (o = 1), 15 < n && (o = 3), 17 < n && (o = 4), 23 < n && (o = 5), 31 < n && (o = 6), 47 < n && (o = 7)) : o = n, "[size=" + o + "]" + t + "[/size]"
				},
				html: '<font size="{defaultattr}">{!0}</font>'
			},
			color: {
				tags: {
					font: {
						color: null
					}
				},
				styles: {
					color: null
				},
				quoteType: x.never,
				format: function(e, t) {
					var n;
					return v(e, "font") && (n = g(e, "color")) || (n = e.style.color || m(e, "color")), "[color=" + u(n) + "]" + t + "[/color]"
				},
				html: function(e, t, n) {
					return '<font color="' + f(u(t.defaultattr), !0) + '">' + n + "</font>"
				}
			},
			ul: {
				tags: {
					ul: null
				},
				breakStart: !0,
				isInline: !1,
				skipLastLineBreak: !0,
				format: "[ul]{0}[/ul]",
				html: "<ul>{0}</ul>"
			},
			list: {
				breakStart: !0,
				isInline: !1,
				skipLastLineBreak: !0,
				html: "<ul>{0}</ul>"
			},
			ol: {
				tags: {
					ol: null
				},
				breakStart: !0,
				isInline: !1,
				skipLastLineBreak: !0,
				format: "[ol]{0}[/ol]",
				html: "<ol>{0}</ol>"
			},
			li: {
				tags: {
					li: null
				},
				isInline: !1,
				closedBy: ["/ul", "/ol", "/list", "*", "li"],
				format: "[li]{0}[/li]",
				html: "<li>{0}</li>"
			},
			"*": {
				isInline: !1,
				closedBy: ["/ul", "/ol", "/list", "*", "li"],
				html: "<li>{0}</li>"
			},
			table: {
				tags: {
					table: null
				},
				isInline: !1,
				isHtmlInline: !0,
				skipLastLineBreak: !0,
				format: "[table]{0}[/table]",
				html: "<table>{0}</table>"
			},
			tr: {
				tags: {
					tr: null
				},
				isInline: !1,
				skipLastLineBreak: !0,
				format: "[tr]{0}[/tr]",
				html: "<tr>{0}</tr>"
			},
			th: {
				tags: {
					th: null
				},
				allowsEmpty: !0,
				isInline: !1,
				format: "[th]{0}[/th]",
				html: "<th>{0}</th>"
			},
			td: {
				tags: {
					td: null
				},
				allowsEmpty: !0,
				isInline: !1,
				format: "[td]{0}[/td]",
				html: "<td>{0}</td>"
			},
			emoticon: {
				allowsEmpty: !0,
				tags: {
					img: {
						src: null,
						"data-sceditor-emoticon": null
					}
				},
				format: function(e, t) {
					return g(e, b) + t
				},
				html: "{0}"
			},
			hr: {
				tags: {
					hr: null
				},
				allowsEmpty: !0,
				isSelfClosing: !0,
				isInline: !1,
				format: "[hr]{0}",
				html: "<hr />"
			},
			img: {
				allowsEmpty: !0,
				tags: {
					img: {
						src: null
					}
				},
				allowedChildren: ["#"],
				quoteType: x.never,
				format: function(t, e) {
					var n, o, r = "",
						i = function(e) {
							return t.style ? t.style[e] : null
						};
					return g(t, b) ? e : (n = g(t, "width") || i("width"), o = g(t, "height") || i("height"), (t.complete && (n || o) || n && o) && (r = "=" + h.width(t) + "x" + h.height(t)), "[img" + r + "]" + g(t, "src") + "[/img]")
				},
				html: function(e, t, n) {
					var o, r, i, l = "";
					return o = t.width, r = t.height, t.defaultattr && (o = (i = t.defaultattr.split(/x/i))[0], r = 2 === i.length ? i[1] : i[0]), void 0 !== o && (l += ' width="' + f(o, !0) + '"'), void 0 !== r && (l += ' height="' + f(r, !0) + '"'), "<img" + l + ' src="' + a(n) + '" />'
				}
			},
			url: {
				allowsEmpty: !0,
				tags: {
					a: {
						href: null
					}
				},
				quoteType: x.never,
				format: function(e, t) {
					var n = g(e, "href");
					return "mailto:" === n.substr(0, 7) ? '[email="' + n.substr(7) + '"]' + t + "[/email]" : "[url=" + n + "]" + t + "[/url]"
				},
				html: function(e, t, n) {
					return t.defaultattr = f(t.defaultattr, !0) || n, '<a href="' + a(t.defaultattr) + '">' + n + "</a>"
				}
			},
			email: {
				quoteType: x.never,
				html: function(e, t, n) {
					return '<a href="mailto:' + (f(t.defaultattr, !0) || n) + '">' + n + "</a>"
				}
			},
			quote: {
				tags: {
					blockquote: null
				},
				isInline: !1,
				quoteType: x.never,
				format: function(e, t) {
					for (var n, o = "data-author", r = "", i = e.children, l = 0; !n && l < i.length; l++) v(i[l], "cite") && (n = i[l]);
					return (n || g(e, o)) && (r = n && n.textContent || g(e, o), g(e, o, r), n && e.removeChild(n), t = this.elementToBbcode(e), r = "=" + r.replace(/(^\s+|\s+$)/g, ""), n && e.insertBefore(n, e.firstChild)), "[quote" + r + "]" + t + "[/quote]"
				},
				html: function(e, t, n) {
					return t.defaultattr && (n = "<cite>" + f(t.defaultattr) + "</cite>" + n), "<blockquote>" + n + "</blockquote>"
				}
			},
			code: {
				tags: {
					code: null
				},
				isInline: !1,
				allowedChildren: ["#", "#newline"],
				format: "[code]{0}[/code]",
				html: "<code>{0}</code>"
			},
			left: {
				styles: {
					"text-align": ["left", "-webkit-left", "-moz-left", "-khtml-left"]
				},
				isInline: !1,
				format: "[left]{0}[/left]",
				html: '<div align="left">{0}</div>'
			},
			center: {
				styles: {
					"text-align": ["center", "-webkit-center", "-moz-center", "-khtml-center"]
				},
				isInline: !1,
				format: "[center]{0}[/center]",
				html: '<div align="center">{0}</div>'
			},
			right: {
				styles: {
					"text-align": ["right", "-webkit-right", "-moz-right", "-khtml-right"]
				},
				isInline: !1,
				format: "[right]{0}[/right]",
				html: '<div align="right">{0}</div>'
			},
			justify: {
				styles: {
					"text-align": ["justify", "-webkit-justify", "-moz-justify", "-khtml-justify"]
				},
				isInline: !1,
				format: "[justify]{0}[/justify]",
				html: '<div align="justify">{0}</div>'
			},
			youtube: {
				allowsEmpty: !0,
				tags: {
					iframe: {
						"data-youtube-id": null
					}
				},
				format: function(e, t) {
					return (e = g(e, "data-youtube-id")) ? "[youtube]" + e + "[/youtube]" : t
				},
				html: '<iframe width="560" height="315" frameborder="0" src="https://www.youtube.com/embed/{0}?wmode=opaque" data-youtube-id="{0}" allowfullscreen></iframe>'
			},
			rtl: {
				styles: {
					direction: ["rtl"]
				},
				isInline: !1,
				format: "[rtl]{0}[/rtl]",
				html: '<div style="direction: rtl">{0}</div>'
			},
			ltr: {
				styles: {
					direction: ["ltr"]
				},
				isInline: !1,
				format: "[ltr]{0}[/ltr]",
				html: '<div style="direction: ltr">{0}</div>'
			},
			ignore: {}
		};

	function k(e, o) {
		return e.replace(/\{([^}]+)\}/g, function(e, t) {
			var n = !0;
			return "!" === t.charAt(0) && (n = !1, t = t.substring(1)), "0" === t && (n = !1), void 0 === o[t] ? e : n ? f(o[t], !0) : o[t]
		})
	}

	function C(e) {
		return "function" == typeof e
	}

	function E(e) {
		return e ? e.replace(/\\(.)/g, "$1").replace(/^(["'])(.*?)\1$/, "$2") : e
	}

	function S(e) {
		var n = arguments;
		return e.replace(/\{(\d+)\}/g, function(e, t) {
			return void 0 !== n[t - 0 + 1] ? n[t - 0 + 1] : "{" + t + "}"
		})
	}
	var T = "open",
		D = "content",
		M = "newline",
		N = "close";

	function c(e, t, n, o, r, i) {
		var l = this;
		l.type = e, l.name = t, l.val = n, l.attrs = o || {}, l.children = r || [], l.closing = i || null
	}

	function B(e) {
		var h = this;

		function l(e, t) {
			var n, o, r;
			return e === T && (n = t.match(/\[([^\]\s=]+)(?:([^\]]+))?\]/)) && (r = i(n[1]), n[2] && (n[2] = n[2].trim()) && (o = function(e) {
				var t, n = /([^\s=]+)=(?:(?:(["'])((?:\\\2|[^\2])*?)\2)|((?:.(?!\s\S+=))*.))/g,
					o = {};
				if ("=" === e.charAt(0) && e.indexOf("=", 1) < 0) o.defaultattr = E(e.substr(1));
				else
					for ("=" === e.charAt(0) && (e = "defaultattr" + e); t = n.exec(e);) o[i(t[1])] = E(t[3]) || t[4];
				return o
			}(n[2]))), e === N && (n = t.match(/\[\/([^\[\]]+)\]/)) && (r = i(n[1])), e === M && (r = "#newline"), r && (e !== T && e !== N || w[r]) || (e = D, r = "#"), new c(e, r, t, o)
		}

		function p(e, t, n) {
			for (var o = n.length; o--;)
				if (n[o].type === t && n[o].name === e) return !0;
			return !1
		}

		function m(e, t) {
			var n = (e ? w[e.name] : {}).allowedChildren;
			return !h.opts.fixInvalidChildren || !n || -1 < n.indexOf(t.name || "#")
		}

		function g(e, t, n) {
			var o = /\s|=/.test(e);
			return C(t) ? t(e, n) : t === x.never || t === x.auto && !o ? e : '"' + e.replace("\\", "\\\\").replace('"', '\\"') + '"'
		}

		function v(e) {
			return e.length ? e[e.length - 1] : null
		}

		function i(e) {
			return e.toLowerCase()
		}
		h.opts = n({}, B.defaults, e), h.tokenize = function(e) {
			var t, n, o, r = [],
				i = [{
					type: D,
					regex: /^([^\[\r\n]+|\[)/
				}, {
					type: M,
					regex: /^(\r\n|\r|\n)/
				}, {
					type: T,
					regex: /^\[[^\[\]]+\]/
				}, {
					type: N,
					regex: /^\[\/[^\[\]]+\]/
				}];
			e: for (; e.length;) {
				for (o = i.length; o--;)
					if (n = i[o].type, (t = e.match(i[o].regex)) && t[0]) {
						r.push(l(n, t[0])), e = e.substr(t[0].length);
						continue e
					}
				e.length && r.push(l(D, e)), e = ""
			}
			return r
		}, h.parse = function(e, t) {
			var n = function(e) {
					var t, n, o, r, i, l, a = [],
						s = [],
						c = [],
						u = function() {
							return v(c)
						},
						d = function(e) {
							u() ? u().children.push(e) : s.push(e)
						},
						f = function(e) {
							return u() && (n = w[u().name]) && n.closedBy && -1 < n.closedBy.indexOf(e)
						};
					for (; t = e.shift();) switch (l = e[0], m(u(), t) || t.type === N && u() && t.name === u().name || (t.name = "#", t.type = D), t.type) {
						case T:
							f(t.name) && c.pop(), d(t), (n = w[t.name]) && !n.isSelfClosing && (n.closedBy || p(t.name, N, e)) ? c.push(t) : n && n.isSelfClosing || (t.type = D);
							break;
						case N:
							if (u() && t.name !== u().name && f("/" + t.name) && c.pop(), u() && t.name === u().name) u().closing = t, c.pop();
							else if (p(t.name, T, c)) {
								for (; o = c.pop();) {
									if (o.name === t.name) {
										o.closing = t;
										break
									}
									r = o.clone(), a.length && r.children.push(v(a)), a.push(r)
								}
								for (l && l.type === M && (n = w[t.name]) && !1 === n.isInline && (d(l), e.shift()), d(v(a)), i = a.length; i--;) c.push(a[i]);
								a.length = 0
							} else t.type = D, d(t);
							break;
						case M:
							u() && l && f((l.type === N ? "/" : "") + l.name) && (l.type === N && l.name === u().name || ((n = w[u().name]) && n.breakAfter ? c.pop() : n && !1 === n.isInline && h.opts.breakAfterBlock && !1 !== n.breakAfter && c.pop())), d(t);
							break;
						default:
							d(t)
					}
					return s
				}(h.tokenize(e)),
				o = h.opts;
			return o.fixInvalidNesting && function e(t, n, o, r) {
					var i, l, a, s, c, u;
					var d = function(e) {
						var t = w[e.name];
						return !t || !1 !== t.isInline
					};
					n = n || [];
					r = r || t;
					for (l = 0; l < t.length; l++)
						if ((i = t[l]) && i.type === T) {
							if (o && !d(i)) {
								if (a = v(n), u = a.splitAt(i), c = 1 < n.length ? n[n.length - 2].children : r, m(i, a)) {
									var f = a.clone();
									f.children = i.children, i.children = [f]
								}
								if (-1 < (s = c.indexOf(a))) {
									u.children.splice(0, 1), c.splice(s + 1, 0, i, u);
									var p = u.children[0];
									return void(p && p.type === M && (d(i) || (u.children.splice(0, 1), c.splice(s + 2, 0, p))))
								}
							}
							n.push(i), e(i.children, n, o || d(i), r), n.pop()
						}
				}(n),
				function e(t, n, o) {
					var r, i, l, a, s, c, u, d;
					var f = t.length;
					n && (a = w[n.name]);
					var p = f;
					for (; p--;)
						if (r = t[p])
							if (r.type === M) {
								if (i = 0 < p ? t[p - 1] : null, l = p < f - 1 ? t[p + 1] : null, d = !1, !o && a && !0 !== a.isSelfClosing && (i ? c || l || (!1 === a.isInline && h.opts.breakEndBlock && !1 !== a.breakEnd && (d = !0), a.breakEnd && (d = !0), c = d) : (!1 === a.isInline && h.opts.breakStartBlock && !1 !== a.breakStart && (d = !0), a.breakStart && (d = !0))), i && i.type === T && (s = w[i.name]) && (o ? !1 === s.isInline && (d = !0) : (!1 === s.isInline && h.opts.breakAfterBlock && !1 !== s.breakAfter && (d = !0), s.breakAfter && (d = !0))), !o && !u && l && l.type === T && (s = w[l.name]) && (!1 === s.isInline && h.opts.breakBeforeBlock && !1 !== s.breakBefore && (d = !0), s.breakBefore && (d = !0), u = d)) {
									t.splice(p, 1);
									continue
								}
								d && t.splice(p, 1), u = !1
							} else r.type === T && e(r.children, r, o)
				}(n, null, t), o.removeEmptyTags && function e(t) {
					var n, o;
					var r = function(e) {
						for (var t = e.length; t--;) {
							var n = e[t].type;
							if (n === T || n === N) return !1;
							if (n === D && /\S|\u00A0/.test(e[t].val)) return !1
						}
						return !0
					};
					var i = t.length;
					for (; i--;)(n = t[i]) && n.type === T && (o = w[n.name], e(n.children), r(n.children) && o && !o.isSelfClosing && !o.allowsEmpty && t.splice.apply(t, [i, 1].concat(n.children)))
				}(n), n
		}, h.toHTML = function(e, t) {
			return function e(t, n) {
				var o, r, i, l, a, s, c, u, d = [];
				c = function(e) {
					return !1 !== (!e || (void 0 !== e.isHtmlInline ? e.isHtmlInline : e.isInline))
				};
				for (; 0 < t.length;)
					if (o = t.shift()) {
						if (o.type === T) u = o.children[o.children.length - 1] || {}, r = w[o.name], a = n && c(r), i = e(o.children, !1), r && r.html ? (c(r) || !c(w[u.name]) || r.isPreFormatted || r.skipLastLineBreak || y || (i += "<br />"), C(r.html) ? l = r.html.call(h, o, o.attrs, i) : (o.attrs[0] = i, l = k(r.html, o.attrs))) : l = o.val + i + (o.closing ? o.closing.val : "");
						else {
							if (o.type === M) {
								if (!n) {
									d.push("<br />");
									continue
								}
								s || d.push("<div>"), y || d.push("<br />"), t.length || d.push("<br />"), d.push("</div>\n"), s = !1;
								continue
							}
							a = n, l = f(o.val, !0)
						}
						a && !s ? (d.push("<div>"), s = !0) : !a && s && (d.push("</div>\n"), s = !1), d.push(l)
					}
				s && d.push("</div>\n");
				return d.join("")
			}(h.parse(e, t), !0)
		}, h.toBBCode = function(e, t) {
			return function e(t) {
				var n, o, r, i, l, a, s, c, u, d, f = [];
				for (; 0 < t.length;)
					if (n = t.shift())
						if (r = w[n.name], i = !(!r || !1 !== r.isInline), l = r && r.isSelfClosing, s = i && h.opts.breakBeforeBlock && !1 !== r.breakBefore || r && r.breakBefore, c = i && !l && h.opts.breakStartBlock && !1 !== r.breakStart || r && r.breakStart, u = i && h.opts.breakEndBlock && !1 !== r.breakEnd || r && r.breakEnd, d = i && h.opts.breakAfterBlock && !1 !== r.breakAfter || r && r.breakAfter, a = (r ? r.quoteType : null) || h.opts.quoteType || x.auto, r || n.type !== T)
							if (n.type === T) {
								if (s && f.push("\n"), f.push("[" + n.name), n.attrs)
									for (o in n.attrs.defaultattr && (f.push("=", g(n.attrs.defaultattr, a, "defaultattr")), delete n.attrs.defaultattr), n.attrs) n.attrs.hasOwnProperty(o) && f.push(" ", o, "=", g(n.attrs[o], a, o));
								f.push("]"), c && f.push("\n"), n.children && f.push(e(n.children)), l || r.excludeClosing || (u && f.push("\n"), f.push("[/" + n.name + "]")), d && f.push("\n"), n.closing && l && f.push(n.closing.val)
							} else f.push(n.val);
				else f.push(n.val), n.children && f.push(e(n.children)), n.closing && f.push(n.closing.val);
				return f.join("")
			}(h.parse(e, t))
		}
	}

	function l(e) {
		return e = parseInt(e, 10), isNaN(e) ? "00" : (e = Math.max(0, Math.min(e, 255)).toString(16)).length < 2 ? "0" + e : e
	}

	function u(e) {
		var t;
		return (t = (e = e || "#000").match(/rgb\((\d{1,3}),\s*?(\d{1,3}),\s*?(\d{1,3})\)/i)) ? "#" + l(t[1]) + l(t[2]) + l(t[3]) : (t = e.match(/#([0-f])([0-f])([0-f])\s*?$/i)) ? "#" + t[1] + t[1] + t[2] + t[2] + t[3] + t[3] : e
	}

	function d() {
		var c = this;
		c.stripQuotes = E;
		var l = {},
			a = {},
			u = {
				ul: ["li", "ol", "ul"],
				ol: ["li", "ol", "ul"],
				table: ["tr"],
				tr: ["td", "th"],
				code: ["br", "p", "div"]
			};

		function d(n, o, e) {
			var r, i, l = h.getStyle;
			return a[e = !!e] && s(a[e], function(e, t) {
				(r = l(n, e)) && l(n.parentNode, e) !== r && s(t, function(e, t) {
					(!t || -1 < t.indexOf(r.toString())) && (i = w[e].format, o = C(i) ? i.call(c, n, o) : S(i, o))
				})
			}), o
		}

		function f(n, o, e) {
			var r, i, t = n.nodeName.toLowerCase();
			return e = !!e, l[t] && l[t][e] && s(l[t][e], function(e, t) {
				t && (r = !1, s(t, function(e, t) {
					if (g(n, e) && !(t && t.indexOf(g(n, e)) < 0)) return !(r = !0)
				}), !r) || (i = w[e].format, o = C(i) ? i.call(c, n, o) : S(i, o))
			}), o
		}

		function p(e) {
			var c = function(e, a) {
				var s = "";
				return h.traverse(e, function(e) {
					var t = "",
						n = e.nodeType,
						o = e.nodeName.toLowerCase(),
						r = u[o],
						i = e.firstChild,
						l = !0;
					if ("object" == typeof a && (l = -1 < a.indexOf(o), v(e, "img") && g(e, b) && (l = !0), l || (r = a)), 3 === n || 1 === n)
						if (1 === n) {
							if (v(e, ".sceditor-nlf") && (!i || !y && 1 === e.childNodes.length && /br/i.test(i.nodeName))) return;
							"iframe" !== o && (t = c(e, r)), l ? ("code" !== o && (t = d(e, t = f(e, t = d(e, t)), !0)), t = f(e, t, !0), s += function(e, t) {
								var n = e.nodeName.toLowerCase(),
									o = h.isInline;
								if (!o(e, !0) || "br" === n) {
									for (var r, i, l = e.previousSibling; l && 1 === l.nodeType && !v(l, "br") && o(l, !0) && !l.firstChild;) l = l.previousSibling;
									for (; r = ((i = e.parentNode) && i.lastChild) === e, (e = i) && r && o(i, !0););
									(!r || "li" === n || "br" === n && y) && (t += "\n"), "br" !== n && l && !v(l, "br") && o(l, !0) && (t = "\n" + t)
								}
								return t
							}(e, t)) : s += t
						} else s += e.nodeValue
				}, !1, !0), s
			};
			return c(e)
		}

		function e(e, t, n) {
			var o, r, i, l, a, s = new B(c.opts.parserOptions).toHTML(c.opts.bbcodeTrim ? t.trim() : t);
			return e || n ? (o = s, a = document.createElement("div"), l = function(e, t) {
				if (!h.hasStyling(e)) {
					if (y || 1 !== e.childNodes.length || !v(e.firstChild, "br"))
						for (; i = e.firstChild;) a.insertBefore(i, e);
					if (t) {
						var n = a.lastChild;
						e !== n && v(n, "div") && e.nextSibling === n && a.insertBefore(document.createElement("br"), e)
					}
					a.removeChild(e)
				}
			}, m(a, "display", "none"), a.innerHTML = o.replace(/<\/div>\n/g, "</div>"), (r = a.firstChild) && v(r, "div") && l(r, !0), (r = a.lastChild) && v(r, "div") && l(r), a.innerHTML) : s
		}

		function t(e, t, n, o) {
			var r, i, l = (n = n || document).createElement("div"),
				a = n.createElement("div"),
				s = new B(c.opts.parserOptions);
			for (a.innerHTML = t, m(l, "visibility", "hidden"), l.appendChild(a), n.body.appendChild(l), e && (l.insertBefore(n.createTextNode("#"), l.firstChild), l.appendChild(n.createTextNode("#"))), o && m(a, "whiteSpace", m(o, "whiteSpace")), i = a.getElementsByClassName("sceditor-ignore"); i.length;) i[0].parentNode.removeChild(i[0]);
			return h.removeWhiteSpace(l), r = p(a), n.body.removeChild(l), r = s.toBBCode(r, !0), c.opts.bbcodeTrim && (r = r.trim()), r
		}
		c.init = function() {
			c.opts = this.opts, c.elementToBbcode = p, s(w, function(n) {
				var o, e = w[n].tags,
					t = w[n].styles;
				e && s(e, function(e, t) {
					o = !1 === w[n].isInline, l[e] = l[e] || {}, l[e][o] = l[e][o] || {}, l[e][o][n] = t
				}), t && s(t, function(e, t) {
					o = !1 === w[n].isInline, a[o] = a[o] || {}, a[o][e] = a[o][e] || {}, a[o][e][n] = t
				})
			}), this.commands = n(!0, {}, r, this.commands), this.toBBCode = c.toSource, this.fromBBCode = c.toHtml
		}, c.toHtml = e.bind(null, !1), c.fragmentToHtml = e.bind(null, !0), c.toSource = t.bind(null, !1), c.fragmentToSource = t.bind(null, !0)
	}
	c.prototype = {
		clone: function() {
			var e = this;
			return new c(e.type, e.name, e.val, n({}, e.attrs), [], e.closing ? e.closing.clone() : null)
		},
		splitAt: function(e) {
			var t, n = this.clone(),
				o = this.children.indexOf(e);
			return -1 < o && (t = this.children.length - o, n.children = this.children.splice(o, t)), n
		}
	}, B.QuoteType = x, B.defaults = {
		breakBeforeBlock: !1,
		breakStartBlock: !1,
		breakEndBlock: !1,
		breakAfterBlock: !0,
		removeEmptyTags: !0,
		fixInvalidNesting: !0,
		fixInvalidChildren: !0,
		quoteType: x.auto
	}, d.get = function(e) {
		return w[e] || null
	}, d.set = function(e, t) {
		return e && t && ((t = n(w[e] || {}, t)).remove = function() {
			delete w[e]
		}, w[e] = t), this
	}, d.rename = function(e, t) {
		return e in w && (w[t] = w[e], delete w[e]), this
	}, d.remove = function(e) {
		return e in w && delete w[e], this
	}, d.formatBBCodeString = k, e.formats.bbcode = d, e.BBCodeParser = B
}(sceditor);