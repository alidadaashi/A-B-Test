! function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = {};
    t.m = e, t.c = n, t.i = function(e) {
        return e
    }, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 262)
}({
    257: function(e, t, n) {
        "use strict";

        function o(e, t, n) {
            var o = void 0;
            return function() {
                var i = arguments,
                    r = function() {
                        o = null, n || e(i)
                    },
                    a = n && !o;
                clearTimeout(o), o = setTimeout(r, t), a && e(arguments)
            }
        }

        function i(e, t) {
            return e.filter(function(e) {
                return Object.keys(t).every(function(n) {
                    return e[n] === t[n]
                })
            })
        }

        function r(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200;
            console.log(n), window[e] ? t() : setTimeout(function() {
                r(e, t)
            }, n)
        }

        function a(e, t) {
            var n = void 0;
            n = "string" != typeof e ? e : document.querySelectorAll(e);
            for (var o = 0; o < n.length; o++) n[o].classList.remove(t)
        }

        function s() {
            for (var e, t = [], n = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), o = 0; o < n.length; o++) e = n[o].split("="), t.push(e[0]), t[e[0]] = e[1];
            return t
        }

        function c() {
            return {
                width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
            }
        }

        function l(e, t, n) {
            n = n || window;
            var o = !1,
                i = function() {
                    o || (o = !0, requestAnimationFrame(function() {
                        n.dispatchEvent(new CustomEvent(t)), o = !1
                    }))
                };
            n.addEventListener(e, i)
        }

        function d(e, t) {
            console.log(e), console.log(t);
            for (var n = 0; n < t.length; n++) e.appendChild(t[n])
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.debounce = o, t.findByMatchingProperties = i, t.waitForGlobal = r, t.removeClassFromElements = a, t.getUrlVars = s, t.getViewport = c, t.throttle = l, t.wrapAll = d;
        var u = t.awaitSelector = function(e, t, n) {
            return new Promise(function(o, i) {
                try {
                    var r = t || document,
                        a = MutationObserver || WebKitMutationObserver || null,
                        s = "function" == typeof a,
                        c = void 0,
                        l = function() {
                            c && (s ? c.disconnect() : clearInterval(c), c = null)
                        },
                        d = function() {
                            var t = r.querySelectorAll(e);
                            if (0 !== t.length) {
                                var n = [];
                                t.forEach(function(e, o) {
                                    void 0 === e["data-awaitselector-resolved"] && (t[o]["data-awaitselector-resolved"] = "", n.push(t[o]))
                                }), n.length > 0 && (l(), o(n))
                            }
                        };
                    s ? (c = new a(function(e) {
                        e.reduce(function(e, t) {
                            return e || t.addedNodes && t.addedNodes.length > 0
                        }, !1) && d()
                    }), c.observe(r, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0,
                        attributeOldValue: !0,
                        characterData: !0,
                        characterDataOldValue: !0
                    })) : c = setInterval(d, n || 250), d()
                } catch (e) {
                    i(e)
                }
            })
        };
        t.watchAwaitSelector = function(e, t, n, o) {
            ! function i() {
                !1 !== (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && u(t, n, o).then(e).then(i)
            }()
        }
    },
    260: function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function i(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function r(e, t, n) {
            return t && i(e.prototype, t), n && i(e, n), e
        }

        function a(e) {
            return s(e) || c(e) || l(e) || u()
        }

        function s(e) {
            if (Array.isArray(e)) return d(e)
        }

        function c(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }

        function l(e, t) {
            if (e) {
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0
            }
        }

        function d(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o
        }

        function u() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = function() {
            var e = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'],
                t = function() {
                    function t(e) {
                        var n = e.targetModal,
                            i = e.triggers,
                            r = void 0 === i ? [] : i,
                            s = e.onShow,
                            c = void 0 === s ? function() {} : s,
                            l = e.onClose,
                            d = void 0 === l ? function() {} : l,
                            u = e.openTrigger,
                            f = void 0 === u ? "data-micromodal-trigger" : u,
                            m = e.closeTrigger,
                            v = void 0 === m ? "data-micromodal-close" : m,
                            h = e.openClass,
                            g = void 0 === h ? "is-open" : h,
                            w = e.disableScroll,
                            p = void 0 !== w && w,
                            y = e.disableFocus,
                            b = void 0 !== y && y,
                            E = e.awaitCloseAnimation,
                            k = void 0 !== E && E,
                            M = e.awaitOpenAnimation,
                            C = void 0 !== M && M,
                            L = e.debugMode,
                            x = void 0 !== L && L;
                        o(this, t), this.modal = document.getElementById(n), this.config = {
                            debugMode: x,
                            disableScroll: p,
                            openTrigger: f,
                            closeTrigger: v,
                            openClass: g,
                            onShow: c,
                            onClose: d,
                            awaitCloseAnimation: k,
                            awaitOpenAnimation: C,
                            disableFocus: b
                        }, r.length > 0 && this.registerTriggers.apply(this, a(r)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this)
                    }
                    return r(t, [{
                        key: "registerTriggers",
                        value: function() {
                            for (var e = this, t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                            n.filter(Boolean).forEach(function(t) {
                                t.addEventListener("click", function(t) {
                                    return e.showModal(t)
                                })
                            })
                        }
                    }, {
                        key: "showModal",
                        value: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            if (this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add(this.config.openClass), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.awaitOpenAnimation) {
                                var n = function t() {
                                    e.modal.removeEventListener("animationend", t, !1), e.setFocusToFirstNode()
                                };
                                this.modal.addEventListener("animationend", n, !1)
                            } else this.setFocusToFirstNode();
                            this.config.onShow(this.modal, this.activeElement, t)
                        }
                    }, {
                        key: "closeModal",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                t = this.modal;
                            if (this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.scrollBehaviour("enable"), this.activeElement && this.activeElement.focus && this.activeElement.focus(), this.config.onClose(this.modal, this.activeElement, e), this.config.awaitCloseAnimation) {
                                var n = this.config.openClass;
                                this.modal.addEventListener("animationend", function e() {
                                    t.classList.remove(n), t.removeEventListener("animationend", e, !1)
                                }, !1)
                            } else t.classList.remove(this.config.openClass)
                        }
                    }, {
                        key: "closeModalById",
                        value: function(e) {
                            this.modal = document.getElementById(e), this.modal && this.closeModal()
                        }
                    }, {
                        key: "scrollBehaviour",
                        value: function(e) {
                            if (this.config.disableScroll) {
                                var t = document.querySelector("body");
                                switch (e) {
                                    case "enable":
                                        Object.assign(t.style, {
                                            overflow: ""
                                        });
                                        break;
                                    case "disable":
                                        Object.assign(t.style, {
                                            overflow: "hidden"
                                        })
                                }
                            }
                        }
                    }, {
                        key: "addEventListeners",
                        value: function() {
                            this.modal.addEventListener("touchstart", this.onClick), this.modal.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onKeydown)
                        }
                    }, {
                        key: "removeEventListeners",
                        value: function() {
                            this.modal.removeEventListener("touchstart", this.onClick), this.modal.removeEventListener("click", this.onClick), document.removeEventListener("keydown", this.onKeydown)
                        }
                    }, {
                        key: "onClick",
                        value: function(e) {
                            e.target.hasAttribute(this.config.closeTrigger) && this.closeModal(e)
                        }
                    }, {
                        key: "onKeydown",
                        value: function(e) {
                            27 === e.keyCode && this.closeModal(e), 9 === e.keyCode && this.retainFocus(e)
                        }
                    }, {
                        key: "getFocusableNodes",
                        value: function() {
                            var t = this.modal.querySelectorAll(e);
                            return Array.apply(void 0, a(t))
                        }
                    }, {
                        key: "setFocusToFirstNode",
                        value: function() {
                            var e = this;
                            if (!this.config.disableFocus) {
                                var t = this.getFocusableNodes();
                                if (0 !== t.length) {
                                    var n = t.filter(function(t) {
                                        return !t.hasAttribute(e.config.closeTrigger)
                                    });
                                    n.length > 0 && n[0].focus(), 0 === n.length && t[0].focus()
                                }
                            }
                        }
                    }, {
                        key: "retainFocus",
                        value: function(e) {
                            var t = this.getFocusableNodes();
                            if (0 !== t.length)
                                if (t = t.filter(function(e) {
                                        return null !== e.offsetParent
                                    }), this.modal.contains(document.activeElement)) {
                                    var n = t.indexOf(document.activeElement);
                                    e.shiftKey && 0 === n && (t[t.length - 1].focus(), e.preventDefault()), !e.shiftKey && t.length > 0 && n === t.length - 1 && (t[0].focus(), e.preventDefault())
                                } else t[0].focus()
                        }
                    }]), t
                }(),
                n = null,
                i = function(e, t) {
                    var n = [];
                    return e.forEach(function(e) {
                        var o = e.attributes[t].value;
                        void 0 === n[o] && (n[o] = []), n[o].push(e)
                    }), n
                },
                s = function(e) {
                    if (!document.getElementById(e)) return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(e, '"></div>')), !1
                },
                c = function(e) {
                    if (e.length <= 0) return console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'), !1
                },
                l = function(e, t) {
                    if (c(e), !t) return !0;
                    for (var n in t) s(n);
                    return !0
                };
            return {
                init: function(e) {
                    var o = Object.assign({}, {
                            openTrigger: "data-micromodal-trigger"
                        }, e),
                        r = a(document.querySelectorAll("[".concat(o.openTrigger, "]"))),
                        s = i(r, o.openTrigger);
                    if (!0 !== o.debugMode || !1 !== l(r, s))
                        for (var c in s) {
                            var d = s[c];
                            o.targetModal = c, o.triggers = a(d), n = new t(o)
                        }
                },
                show: function(e, o) {
                    var i = o || {};
                    i.targetModal = e, !0 === i.debugMode && !1 === s(e) || (n && n.removeEventListeners(), n = new t(i), n.showModal())
                },
                close: function(e) {
                    e ? n.closeModalById(e) : n.closeModal()
                }
            }
        }();
        window.MicroModal = f, t.default = f
    },
    262: function(e, t, n) {
        "use strict";

        function o(e) {
            var t = {
                apiKey: "tIMYszmvsul1ftaVCOiBtFwg2WKs1ZKrGrxtCwQ3",
                css: "\n      .watermarkContainer, .relaunchDetectionButtonIcon { display: none !important; }\n      \n      .footerLeftAction, .footerRightAction {\n        top: 4px;\n        bottom: auto; !important;\n      }"
            };
            void 0 === window.fitmixInstance ? window.fitmixInstance = FitMix.createWidget("my-fitmix-container", t, function(t, n) {
                if (t && !n.restrictedBrowser) {
                    console.log("camera working");
                    var o = document.getElementById("virtual-mirror").querySelectorAll("[data-current-product]");
                    console.log(o), o && o[0] ? o[0].click() : a("AB10BLK10"), console.info(e.id + " is shown"), window.fitmixInstance.setLensesAntireflection(!0), window.fitmixInstance.openCamera()
                } else console.log("camera not working")
            }) : (console.info(e.id + " is shown again"), window.fitmixInstance.openCamera())
        }

        function i(e) {
            console.info(e.id + " is hidden"), void 0 !== window.fitmixInstance && window.fitmixInstance.closeCamera()
        }

        function r(e) {
            console.info(e + " sku is being loaded"), void 0 !== window.fitmixInstance && window.fitmixInstance.setFrame(e)
        }

        function a(e) {
            void 0 !== window.fitmixInstance && (window.fitmixInstance.pauseStream(), window.fitmixInstance.setFrame(e), window.fitmixInstance.resumeStream())
        }
        var s = n(257),
            c = n(260),
            l = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(c);
        HTMLDocument.prototype.ready = function() {
            return new Promise(function(e, t) {
                "complete" === document.readyState ? e(document) : document.addEventListener("DOMContentLoaded", function() {
                    e(document)
                })
            })
        }, document.ready().then(function() {
            new Vue({
                delimiters: ["{[{", "}]}"],
                el: "#app",
                data: {
                    products: window.jsProducts || [],
                    mirrorVariants: window.jsProducts,
                    filteredProducts: []
                },
                created: function() {
                    console.log("Virtual Mirror created"), this.filteredProducts = this.products.reduce(function(e, t) {
                        var n = t.productTitle;
                        if (n.includes("Review"));
                        else {
                            t.productTitle = n;
                            var o = t.productTitle;
                            e[o] = e[o] || [], e[o].push(t)
                        }
                        return e
                    }, {})
                },
                mounted: function() {
                    console.log("Virtual Mirror mounted")
                },
                methods: {
                    onlyUnique: function(e, t, n) {
                        return n.indexOf(e) === t
                    },
                    handleizeSwatches: function(e) {
                        return e.replace(" ", "-").toLowerCase()
                    },
                    getSwatches: function(e) {
                        return this.filteredProducts[e].map(function(e) {
                            return e.color
                        }).filter(this.onlyUnique)
                    }
                }
            });
            if (void 0 === navigator.mediaDevices || void 0 === navigator.mediaDevices.getUserMedia) {
                var e = document.getElementsByClassName("vm__triggerWrapper");
                e && e[0] && (e[0].style.display = "none")
            }
            var t = window.jsProducts;
            (0, s.throttle)("resize", "resize.optimized"), (0, s.watchAwaitSelector)(function() {
                var e = document.getElementById("virtual-mirror"),
                    n = document.querySelectorAll(".vm__frame"),
                    a = document.getElementById("vm-refresh"),
                    c = e.querySelector(".vm__right"),
                    d = (0, s.getViewport)();
                window.addEventListener("resize.optimized", function() {
                    if (d = (0, s.getViewport)(), d.width <= 850)
                        for (var e = 0; e < n.length; e++) {
                            var t = n[e];
                            if (t.classList.contains("active")) {
                                var o = t.querySelector(".vm__swatches");
                                if (o.style.opacity > 0) {
                                    var i = o.getBoundingClientRect().height + 25 + "px";
                                    c.style.paddingTop = i
                                }
                            }
                        } else c.style.paddingTop = ""
                });
                for (var u = 0; u < n.length; u++) ! function(o) {
                    var i = n[o],
                        a = i.dataset.productTitle,
                        l = i.dataset.type,
                        u = i.querySelector(".vm__swatches"),
                        f = i.querySelectorAll(".vm__swatch"),
                        m = i.dataset.sku;
                    m && (m = m.replace("KIDS", "")), i.addEventListener("click", function(t) {
                        if (e.classList.add("swatches-visible"), !t.target.classList.contains("vm__swatches") && !t.target.classList.contains("vm__swatch")) {
                            (0, s.removeClassFromElements)(n, "active"), i.classList.add("active"), r(m);
                            var o = u.getBoundingClientRect().height + 25 + "px";
                            d.width <= 850 ? u.style.opacity > 0 && (c.style.paddingTop = o) : c.style.paddingTop = ""
                        }
                    });
                    for (var v = 0; v < f.length; v++) ! function(e) {
                        var n = f[e],
                            o = n.dataset.color,
                            i = (0, s.findByMatchingProperties)(t, {
                                productTitle: a,
                                color: o,
                                type: l
                            });
                        if (i && i.length > 0) {
                            var c = i[0],
                                d = c.sku;
                            d && (d = d.replace("KIDS", ""), n.dataset.sku = d, n.addEventListener("click", function(e) {
                                (0, s.removeClassFromElements)(f, "active"), n.classList.add("active"), r(d)
                            }))
                        }
                    }(v)
                }(u);
                a.addEventListener("click", function() {
                    void 0 !== window.fitmixInstance && window.fitmixInstance.resetDetection()
                }), l.default.init({
                    onShow: function(e) {
                        return o(e)
                    },
                    onClose: function(e) {
                        return i(e)
                    },
                    openClass: "is-open",
                    disableScroll: !0,
                    disableFocus: !1,
                    awaitOpenAnimation: !1,
                    awaitCloseAnimation: !1,
                    debugMode: !1
                })
            }, ".vm__frame .vm__swatches")
        })
    }
});