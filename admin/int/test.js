!function() {
    var e = {
        634: function(e) {
            e.exports = function() {
                "use strict";
                function e(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }
                        ))),
                            n.push.apply(n, a)
                    }
                    return n
                }
                function t(t) {
                    for (var a = 1; a < arguments.length; a++) {
                        var r = null != arguments[a] ? arguments[a] : {};
                        a % 2 ? e(Object(r), !0).forEach((function(e) {
                                n(t, e, r[e])
                            }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                            }
                        ))
                    }
                    return t
                }
                function n(e, t, n) {
                    return (t = function(e) {
                        var t = function(e, t) {
                            if ("object" != typeof e || null === e)
                                return e;
                            var n = e[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var a = n.call(e, t || "default");
                                if ("object" != typeof a)
                                    return a;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === t ? String : Number)(e)
                        }(e, "string");
                        return "symbol" == typeof t ? t : String(t)
                    }(t))in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n,
                        e
                }
                var a = "​";
                const r = (e,t,n,a)=>(e = "" + e,
                    t = "" + t,
                a && (e = e.trim(),
                    t = t.trim()),
                    n ? e == t : e.toLowerCase() == t.toLowerCase())
                    , i = (e,t)=>e && Array.isArray(e) && e.map((e=>o(e, t)));
                function o(e, t) {
                    var n, a = {};
                    for (n in e)
                        t.indexOf(n) < 0 && (a[n] = e[n]);
                    return a
                }
                function s(e) {
                    var t = document.createElement("div");
                    return e.replace(/\&#?[0-9a-z]+;/gi, (function(e) {
                            return t.innerHTML = e,
                                t.innerText
                        }
                    ))
                }
                function l(e) {
                    return (new DOMParser).parseFromString(e.trim(), "text/html").body.firstElementChild
                }
                function c(e, t) {
                    for (t = t || "previous"; e = e[t + "Sibling"]; )
                        if (3 == e.nodeType)
                            return e
                }
                function u(e) {
                    return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/`|'/g, "&#039;") : e
                }
                function d(e) {
                    var t = Object.prototype.toString.call(e).split(" ")[1].slice(0, -1);
                    return e === Object(e) && "Array" != t && "Function" != t && "RegExp" != t && "HTMLUnknownElement" != t
                }
                function m(e, t, n) {
                    function a(e, t) {
                        for (var n in t)
                            if (t.hasOwnProperty(n)) {
                                if (d(t[n])) {
                                    d(e[n]) ? a(e[n], t[n]) : e[n] = Object.assign({}, t[n]);
                                    continue
                                }
                                if (Array.isArray(t[n])) {
                                    e[n] = Object.assign([], t[n]);
                                    continue
                                }
                                e[n] = t[n]
                            }
                    }
                    return e instanceof Object || (e = {}),
                        a(e, t),
                    n && a(e, n),
                        e
                }
                function p() {
                    const e = []
                        , t = {};
                    for (let n of arguments)
                        for (let a of n)
                            d(a) ? t[a.value] || (e.push(a),
                                t[a.value] = 1) : e.includes(a) || e.push(a);
                    return e
                }
                function h(e) {
                    return String.prototype.normalize ? "string" == typeof e ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : void 0 : e
                }
                var g = ()=>/(?=.*chrome)(?=.*android)/i.test(navigator.userAgent);
                function f() {
                    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e=>(e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)))
                }
                function _(e) {
                    return e && e.classList && e.classList.contains(this.settings.classNames.tag)
                }
                function b(e, t) {
                    var n = window.getSelection();
                    return t = t || n.getRangeAt(0),
                    "string" == typeof e && (e = document.createTextNode(e)),
                    t && (t.deleteContents(),
                        t.insertNode(e)),
                        e
                }
                function v(e, t, n) {
                    return e ? (t && (e.__tagifyTagData = n ? t : m({}, e.__tagifyTagData || {}, t)),
                        e.__tagifyTagData) : (console.warn("tag element doesn't exist", e, t),
                        t)
                }
                function w(e) {
                    if (e && e.parentNode) {
                        var t = e
                            , n = window.getSelection()
                            , a = n.getRangeAt(0);
                        n.rangeCount && (a.setStartAfter(t),
                            a.collapse(!0),
                            n.removeAllRanges(),
                            n.addRange(a))
                    }
                }
                function k(e, t) {
                    e.forEach((e=>{
                            if (v(e.previousSibling) || !e.previousSibling) {
                                var n = document.createTextNode(a);
                                e.before(n),
                                t && w(n)
                            }
                        }
                    ))
                }
                var y = {
                    delimiters: ",",
                    pattern: null,
                    tagTextProp: "value",
                    maxTags: 1 / 0,
                    callbacks: {},
                    addTagOnBlur: !0,
                    onChangeAfterBlur: !0,
                    duplicates: !1,
                    whitelist: [],
                    blacklist: [],
                    enforceWhitelist: !1,
                    userInput: !0,
                    keepInvalidTags: !1,
                    createInvalidTags: !0,
                    mixTagsAllowedAfter: /,|\.|\:|\s/,
                    mixTagsInterpolator: ["[[", "]]"],
                    backspace: !0,
                    skipInvalid: !1,
                    pasteAsTags: !0,
                    editTags: {
                        clicks: 2,
                        keepInvalid: !0
                    },
                    transformTag: ()=>{}
                    ,
                    trim: !0,
                    a11y: {
                        focusableTags: !1
                    },
                    mixMode: {
                        insertAfterTag: " "
                    },
                    autoComplete: {
                        enabled: !0,
                        rightKey: !1
                    },
                    classNames: {
                        namespace: "tagify",
                        mixMode: "tagify--mix",
                        selectMode: "tagify--select",
                        input: "tagify__input",
                        focus: "tagify--focus",
                        tagNoAnimation: "tagify--noAnim",
                        tagInvalid: "tagify--invalid",
                        tagNotAllowed: "tagify--notAllowed",
                        scopeLoading: "tagify--loading",
                        hasMaxTags: "tagify--hasMaxTags",
                        hasNoTags: "tagify--noTags",
                        empty: "tagify--empty",
                        inputInvalid: "tagify__input--invalid",
                        dropdown: "tagify__dropdown",
                        dropdownWrapper: "tagify__dropdown__wrapper",
                        dropdownHeader: "tagify__dropdown__header",
                        dropdownFooter: "tagify__dropdown__footer",
                        dropdownItem: "tagify__dropdown__item",
                        dropdownItemActive: "tagify__dropdown__item--active",
                        dropdownItemHidden: "tagify__dropdown__item--hidden",
                        dropdownInital: "tagify__dropdown--initial",
                        tag: "tagify__tag",
                        tagText: "tagify__tag-text",
                        tagX: "tagify__tag__removeBtn",
                        tagLoading: "tagify__tag--loading",
                        tagEditing: "tagify__tag--editable",
                        tagFlash: "tagify__tag--flash",
                        tagHide: "tagify__tag--hide"
                    },
                    dropdown: {
                        classname: "",
                        enabled: 2,
                        maxItems: 10,
                        searchKeys: ["value", "searchBy"],
                        fuzzySearch: !0,
                        caseSensitive: !1,
                        accentedSearch: !0,
                        includeSelectedTags: !1,
                        highlightFirst: !1,
                        closeOnSelect: !0,
                        clearOnSelect: !0,
                        position: "all",
                        appendTarget: null
                    },
                    hooks: {
                        beforeRemoveTag: ()=>Promise.resolve(),
                        beforePaste: ()=>Promise.resolve(),
                        suggestionClick: ()=>Promise.resolve()
                    }
                };
                function E() {
                    this.dropdown = {};
                    for (let e in this._dropdown)
                        this.dropdown[e] = "function" == typeof this._dropdown[e] ? this._dropdown[e].bind(this) : this._dropdown[e];
                    this.dropdown.refs()
                }
                var x = {
                    refs() {
                        this.DOM.dropdown = this.parseTemplate("dropdown", [this.settings]),
                            this.DOM.dropdown.content = this.DOM.dropdown.querySelector("[data-selector='tagify-suggestions-wrapper']")
                    },
                    getHeaderRef() {
                        return this.DOM.dropdown.querySelector("[data-selector='tagify-suggestions-header']")
                    },
                    getFooterRef() {
                        return this.DOM.dropdown.querySelector("[data-selector='tagify-suggestions-footer']")
                    },
                    getAllSuggestionsRefs() {
                        return [...this.DOM.dropdown.content.querySelectorAll(this.settings.classNames.dropdownItemSelector)]
                    },
                    show(e) {
                        var t, n, a, i = this.settings, o = "mix" == i.mode && !i.enforceWhitelist, s = !i.whitelist || !i.whitelist.length, l = "manual" == i.dropdown.position;
                        if (e = void 0 === e ? this.state.inputText : e,
                            !(s && !o && !i.templates.dropdownItemNoMatch || !1 === i.dropdown.enable || this.state.isLoading || this.settings.readonly)) {
                            if (clearTimeout(this.dropdownHide__bindEventsTimeout),
                                this.suggestedListItems = this.dropdown.filterListItems(e),
                            e && !this.suggestedListItems.length && (this.trigger("dropdown:noMatch", e),
                            i.templates.dropdownItemNoMatch && (a = i.templates.dropdownItemNoMatch.call(this, {
                                value: e
                            }))),
                                !a) {
                                if (this.suggestedListItems.length)
                                    e && o && !this.state.editing.scope && !r(this.suggestedListItems[0].value, e) && this.suggestedListItems.unshift({
                                        value: e
                                    });
                                else {
                                    if (!e || !o || this.state.editing.scope)
                                        return this.input.autocomplete.suggest.call(this),
                                            void this.dropdown.hide();
                                    this.suggestedListItems = [{
                                        value: e
                                    }]
                                }
                                n = "" + (d(t = this.suggestedListItems[0]) ? t.value : t),
                                i.autoComplete && n && 0 == n.indexOf(e) && this.input.autocomplete.suggest.call(this, t)
                            }
                            this.dropdown.fill(a),
                            i.dropdown.highlightFirst && this.dropdown.highlightOption(this.DOM.dropdown.content.querySelector(i.classNames.dropdownItemSelector)),
                            this.state.dropdown.visible || setTimeout(this.dropdown.events.binding.bind(this)),
                                this.state.dropdown.visible = e || !0,
                                this.state.dropdown.query = e,
                                this.setStateSelection(),
                            l || setTimeout((()=>{
                                    this.dropdown.position(),
                                        this.dropdown.render()
                                }
                            )),
                                setTimeout((()=>{
                                        this.trigger("dropdown:show", this.DOM.dropdown)
                                    }
                                ))
                        }
                    },
                    hide(e) {
                        var t = this.DOM
                            , n = t.scope
                            , a = t.dropdown
                            , r = "manual" == this.settings.dropdown.position && !e;
                        if (a && document.body.contains(a) && !r)
                            return window.removeEventListener("resize", this.dropdown.position),
                                this.dropdown.events.binding.call(this, !1),
                                n.setAttribute("aria-expanded", !1),
                                a.parentNode.removeChild(a),
                                setTimeout((()=>{
                                        this.state.dropdown.visible = !1
                                    }
                                ), 100),
                                this.state.dropdown.query = this.state.ddItemData = this.state.ddItemElm = this.state.selection = null,
                            this.state.tag && this.state.tag.value.length && (this.state.flaggedTags[this.state.tag.baseOffset] = this.state.tag),
                                this.trigger("dropdown:hide", a),
                                this
                    },
                    toggle(e) {
                        this.dropdown[this.state.dropdown.visible && !e ? "hide" : "show"]()
                    },
                    render() {
                        var e, t, n = ((t = this.DOM.dropdown.cloneNode(!0)).style.cssText = "position:fixed; top:-9999px; opacity:0",
                            document.body.appendChild(t),
                            e = t.clientHeight,
                            t.parentNode.removeChild(t),
                            e), a = this.settings;
                        return "number" == typeof a.dropdown.enabled && a.dropdown.enabled >= 0 ? (this.DOM.scope.setAttribute("aria-expanded", !0),
                        document.body.contains(this.DOM.dropdown) || (this.DOM.dropdown.classList.add(a.classNames.dropdownInital),
                            this.dropdown.position(n),
                            a.dropdown.appendTarget.appendChild(this.DOM.dropdown),
                            setTimeout((()=>this.DOM.dropdown.classList.remove(a.classNames.dropdownInital)))),
                            this) : this
                    },
                    fill(e) {
                        e = "string" == typeof e ? e : this.dropdown.createListHTML(e || this.suggestedListItems);
                        var t, n = this.settings.templates.dropdownContent.call(this, e);
                        this.DOM.dropdown.content.innerHTML = (t = n) ? t.replace(/\>[\r\n ]+\</g, "><").split(/>\s+</).join("><").trim() : ""
                    },
                    fillHeaderFooter() {
                        var e = this.dropdown.filterListItems(this.state.dropdown.query)
                            , t = this.parseTemplate("dropdownHeader", [e])
                            , n = this.parseTemplate("dropdownFooter", [e])
                            , a = this.dropdown.getHeaderRef()
                            , r = this.dropdown.getFooterRef();
                        t && a?.parentNode.replaceChild(t, a),
                        n && r?.parentNode.replaceChild(n, r)
                    },
                    refilter(e) {
                        e = e || this.state.dropdown.query || "",
                            this.suggestedListItems = this.dropdown.filterListItems(e),
                            this.dropdown.fill(),
                        this.suggestedListItems.length || this.dropdown.hide(),
                            this.trigger("dropdown:updated", this.DOM.dropdown)
                    },
                    position(e) {
                        var t = this.settings.dropdown;
                        if ("manual" != t.position) {
                            var n, a, r, i, o, s, l = this.DOM.dropdown, c = t.placeAbove, u = t.appendTarget === document.body, d = u ? window.pageYOffset : t.appendTarget.scrollTop, m = document.fullscreenElement || document.webkitFullscreenElement || document.documentElement, p = m.clientHeight, h = Math.max(m.clientWidth || 0, window.innerWidth || 0) > 480 ? t.position : "all", g = this.DOM["input" == h ? "input" : "scope"];
                            if (e = e || l.clientHeight,
                                this.state.dropdown.visible) {
                                if ("text" == h ? (r = (n = function() {
                                    const e = document.getSelection();
                                    if (e.rangeCount) {
                                        const t = e.getRangeAt(0)
                                            , n = t.startContainer
                                            , a = t.startOffset;
                                        let r, i;
                                        if (a > 0)
                                            return i = document.createRange(),
                                                i.setStart(n, a - 1),
                                                i.setEnd(n, a),
                                                r = i.getBoundingClientRect(),
                                                {
                                                    left: r.right,
                                                    top: r.top,
                                                    bottom: r.bottom
                                                };
                                        if (n.getBoundingClientRect)
                                            return n.getBoundingClientRect()
                                    }
                                    return {
                                        left: -9999,
                                        top: -9999
                                    }
                                }()).bottom,
                                    a = n.top,
                                    i = n.left,
                                    o = "auto") : (s = function(e) {
                                    for (var t = 0, n = 0; e && e != m; )
                                        t += e.offsetLeft || 0,
                                            n += e.offsetTop || 0,
                                            e = e.parentNode;
                                    return {
                                        left: t,
                                        top: n
                                    }
                                }(t.appendTarget),
                                    a = (n = g.getBoundingClientRect()).top - s.top,
                                    r = n.bottom - 1 - s.top,
                                    i = n.left - s.left,
                                    o = n.width + "px"),
                                    !u) {
                                    let e = function() {
                                        for (var e = 0, n = t.appendTarget.parentNode; n; )
                                            e += n.scrollTop || 0,
                                                n = n.parentNode;
                                        return e
                                    }();
                                    a += e,
                                        r += e
                                }
                                a = Math.floor(a),
                                    r = Math.ceil(r),
                                    c = void 0 === c ? p - n.bottom < e : c,
                                    l.style.cssText = "left:" + (i + window.pageXOffset) + "px; width:" + o + ";" + (c ? "top: " + (a + d) + "px" : "top: " + (r + d) + "px"),
                                    l.setAttribute("placement", c ? "top" : "bottom"),
                                    l.setAttribute("position", h)
                            }
                        }
                    },
                    events: {
                        binding() {
                            let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            var t = this.dropdown.events.callbacks
                                , n = this.listeners.dropdown = this.listeners.dropdown || {
                                position: this.dropdown.position.bind(this, null),
                                onKeyDown: t.onKeyDown.bind(this),
                                onMouseOver: t.onMouseOver.bind(this),
                                onMouseLeave: t.onMouseLeave.bind(this),
                                onClick: t.onClick.bind(this),
                                onScroll: t.onScroll.bind(this)
                            }
                                , a = e ? "addEventListener" : "removeEventListener";
                            "manual" != this.settings.dropdown.position && (document[a]("scroll", n.position, !0),
                                window[a]("resize", n.position),
                                window[a]("keydown", n.onKeyDown)),
                                this.DOM.dropdown[a]("mouseover", n.onMouseOver),
                                this.DOM.dropdown[a]("mouseleave", n.onMouseLeave),
                                this.DOM.dropdown[a]("mousedown", n.onClick),
                                this.DOM.dropdown.content[a]("scroll", n.onScroll)
                        },
                        callbacks: {
                            onKeyDown(e) {
                                if (this.state.hasFocus && !this.state.composing) {
                                    var t = this.DOM.dropdown.querySelector(this.settings.classNames.dropdownItemActiveSelector)
                                        , n = this.dropdown.getSuggestionDataByNode(t);
                                    switch (e.key) {
                                        case "ArrowDown":
                                        case "ArrowUp":
                                        case "Down":
                                        case "Up":
                                            e.preventDefault();
                                            var a = this.dropdown.getAllSuggestionsRefs()
                                                , r = "ArrowUp" == e.key || "Up" == e.key;
                                            t && (t = this.dropdown.getNextOrPrevOption(t, !r)),
                                            t && t.matches(this.settings.classNames.dropdownItemSelector) || (t = a[r ? a.length - 1 : 0]),
                                                this.dropdown.highlightOption(t, !0);
                                            break;
                                        case "Escape":
                                        case "Esc":
                                            this.dropdown.hide();
                                            break;
                                        case "Arrowright":
                                            if (this.state.actions.ArrowLeft)
                                                return;
                                        case "Tab":
                                            if ("mix" != this.settings.mode && t && !this.settings.autoComplete.rightKey && !this.state.editing) {
                                                e.preventDefault();
                                                var i = this.dropdown.getMappedValue(n);
                                                return this.input.autocomplete.set.call(this, i),
                                                    !1
                                            }
                                            return !0;
                                        case "Enter":
                                            e.preventDefault(),
                                                this.settings.hooks.suggestionClick(e, {
                                                    tagify: this,
                                                    tagData: n,
                                                    suggestionElm: t
                                                }).then((()=>{
                                                        if (t)
                                                            return this.dropdown.selectOption(t),
                                                                t = this.dropdown.getNextOrPrevOption(t, !r),
                                                                void this.dropdown.highlightOption(t);
                                                        this.dropdown.hide(),
                                                        "mix" != this.settings.mode && this.addTags(this.state.inputText.trim(), !0)
                                                    }
                                                )).catch((e=>e));
                                            break;
                                        case "Backspace":
                                        {
                                            if ("mix" == this.settings.mode || this.state.editing.scope)
                                                return;
                                            const e = this.input.raw.call(this);
                                            "" != e && 8203 != e.charCodeAt(0) || (!0 === this.settings.backspace ? this.removeTags() : "edit" == this.settings.backspace && setTimeout(this.editTag.bind(this), 0))
                                        }
                                    }
                                }
                            },
                            onMouseOver(e) {
                                var t = e.target.closest(this.settings.classNames.dropdownItemSelector);
                                t && this.dropdown.highlightOption(t)
                            },
                            onMouseLeave(e) {
                                this.dropdown.highlightOption()
                            },
                            onClick(e) {
                                if (0 == e.button && e.target != this.DOM.dropdown && e.target != this.DOM.dropdown.content) {
                                    var t = e.target.closest(this.settings.classNames.dropdownItemSelector)
                                        , n = this.dropdown.getSuggestionDataByNode(t);
                                    this.state.actions.selectOption = !0,
                                        setTimeout((()=>this.state.actions.selectOption = !1), 50),
                                        this.settings.hooks.suggestionClick(e, {
                                            tagify: this,
                                            tagData: n,
                                            suggestionElm: t
                                        }).then((()=>{
                                                t ? this.dropdown.selectOption(t, e) : this.dropdown.hide()
                                            }
                                        )).catch((e=>console.warn(e)))
                                }
                            },
                            onScroll(e) {
                                var t = e.target
                                    , n = t.scrollTop / (t.scrollHeight - t.parentNode.clientHeight) * 100;
                                this.trigger("dropdown:scroll", {
                                    percentage: Math.round(n)
                                })
                            }
                        }
                    },
                    getSuggestionDataByNode(e) {
                        var t = e && e.getAttribute("value");
                        return this.suggestedListItems.find((e=>e.value == t)) || null
                    },
                    getNextOrPrevOption(e) {
                        let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        var n = this.dropdown.getAllSuggestionsRefs()
                            , a = n.findIndex((t=>t === e));
                        return t ? n[a + 1] : n[a - 1]
                    },
                    highlightOption(e, t) {
                        var n, a = this.settings.classNames.dropdownItemActive;
                        if (this.state.ddItemElm && (this.state.ddItemElm.classList.remove(a),
                            this.state.ddItemElm.removeAttribute("aria-selected")),
                            !e)
                            return this.state.ddItemData = null,
                                this.state.ddItemElm = null,
                                void this.input.autocomplete.suggest.call(this);
                        n = this.dropdown.getSuggestionDataByNode(e),
                            this.state.ddItemData = n,
                            this.state.ddItemElm = e,
                            e.classList.add(a),
                            e.setAttribute("aria-selected", !0),
                        t && (e.parentNode.scrollTop = e.clientHeight + e.offsetTop - e.parentNode.clientHeight),
                        this.settings.autoComplete && (this.input.autocomplete.suggest.call(this, n),
                            this.dropdown.position())
                    },
                    selectOption(e, t) {
                        var n = this.settings.dropdown
                            , a = n.clearOnSelect
                            , r = n.closeOnSelect;
                        if (!e)
                            return this.addTags(this.state.inputText, !0),
                                void (r && this.dropdown.hide());
                        t = t || {};
                        var i = e.getAttribute("value")
                            , o = "noMatch" == i
                            , s = this.suggestedListItems.find((e=>(e.value ?? e) == i));
                        this.trigger("dropdown:select", {
                            data: s,
                            elm: e,
                            event: t
                        }),
                            i && (s || o) ? (this.state.editing ? this.onEditTagDone(null, m({
                                __isValid: !0
                            }, this.normalizeTags([s])[0])) : this["mix" == this.settings.mode ? "addMixTags" : "addTags"]([s || this.input.raw.call(this)], a),
                            this.DOM.input.parentNode && (setTimeout((()=>{
                                    this.DOM.input.focus(),
                                        this.toggleFocusClass(!0)
                                }
                            )),
                            r && setTimeout(this.dropdown.hide.bind(this)),
                                e.addEventListener("transitionend", (()=>{
                                        this.dropdown.fillHeaderFooter(),
                                            setTimeout((()=>e.remove()), 100)
                                    }
                                ), {
                                    once: !0
                                }),
                                e.classList.add(this.settings.classNames.dropdownItemHidden))) : r && setTimeout(this.dropdown.hide.bind(this))
                    },
                    selectAll(e) {
                        this.suggestedListItems.length = 0,
                            this.dropdown.hide(),
                            this.dropdown.filterListItems("");
                        var t = this.dropdown.filterListItems("");
                        return e || (t = this.state.dropdown.suggestions),
                            this.addTags(t, !0),
                            this
                    },
                    filterListItems(e, t) {
                        var n, a, r, i, o, s = this.settings, l = s.dropdown, c = (t = t || {},
                            []), u = [], m = s.whitelist, p = l.maxItems >= 0 ? l.maxItems : 1 / 0, g = l.searchKeys, f = 0;
                        if (!(e = "select" == s.mode && this.value.length && this.value[0][s.tagTextProp] == e ? "" : e) || !g.length)
                            return c = l.includeSelectedTags ? m : m.filter((e=>!this.isTagDuplicate(d(e) ? e.value : e))),
                                this.state.dropdown.suggestions = c,
                                c.slice(0, p);
                        function _(e, t) {
                            return t.toLowerCase().split(" ").every((t=>e.includes(t.toLowerCase())))
                        }
                        for (o = l.caseSensitive ? "" + e : ("" + e).toLowerCase(); f < m.length; f++) {
                            let e, s;
                            n = m[f]instanceof Object ? m[f] : {
                                value: m[f]
                            };
                            let p = Object.keys(n).some((e=>g.includes(e))) ? g : ["value"];
                            l.fuzzySearch && !t.exact ? (r = p.reduce(((e,t)=>e + " " + (n[t] || "")), "").toLowerCase().trim(),
                            l.accentedSearch && (r = h(r),
                                o = h(o)),
                                e = 0 == r.indexOf(o),
                                s = r === o,
                                a = _(r, o)) : (e = !0,
                                a = p.some((e=>{
                                        var a = "" + (n[e] || "");
                                        return l.accentedSearch && (a = h(a),
                                            o = h(o)),
                                        l.caseSensitive || (a = a.toLowerCase()),
                                            s = a === o,
                                            t.exact ? a === o : 0 == a.indexOf(o)
                                    }
                                ))),
                                i = !l.includeSelectedTags && this.isTagDuplicate(d(n) ? n.value : n),
                            a && !i && (s && e ? u.push(n) : "startsWith" == l.sortby && e ? c.unshift(n) : c.push(n))
                        }
                        return this.state.dropdown.suggestions = u.concat(c),
                            "function" == typeof l.sortby ? l.sortby(u.concat(c), o) : u.concat(c).slice(0, p)
                    },
                    getMappedValue(e) {
                        var t = this.settings.dropdown.mapValueTo;
                        return t ? "function" == typeof t ? t(e) : e[t] || e.value : e.value
                    },
                    createListHTML(e) {
                        return m([], e).map(((e,n)=>{
                                "string" != typeof e && "number" != typeof e || (e = {
                                    value: e
                                });
                                var a = this.dropdown.getMappedValue(e);
                                return a = "string" == typeof a ? u(a) : a,
                                    this.settings.templates.dropdownItem.apply(this, [t(t({}, e), {}, {
                                        mappedValue: a
                                    }), this])
                            }
                        )).join("")
                    }
                };
                const T = "@yaireo/tagify/";
                var S, C = {
                    empty: "empty",
                    exceed: "number of tags exceeded",
                    pattern: "pattern mismatch",
                    duplicate: "already exists",
                    notAllowed: "not allowed"
                }, A = {
                    wrapper: (e,t)=>`<tags class="${t.classNames.namespace} ${t.mode ? `${t.classNames[t.mode + "Mode"]}` : ""} ${e.className}"\n                    ${t.readonly ? "readonly" : ""}\n                    ${t.disabled ? "disabled" : ""}\n                    ${t.required ? "required" : ""}\n                    ${"select" === t.mode ? "spellcheck='false'" : ""}\n                    tabIndex="-1">\n            <span ${!t.readonly && t.userInput ? "contenteditable" : ""} tabIndex="0" data-placeholder="${t.placeholder || "&#8203;"}" aria-placeholder="${t.placeholder || ""}"\n                class="${t.classNames.input}"\n                role="textbox"\n                aria-autocomplete="both"\n                aria-multiline="${"mix" == t.mode}"></span>\n                &#8203;\n        </tags>`,
                    tag(e, t) {
                        let n = t.settings;
                        return `<tag title="${e.title || e.value}"\n                    contenteditable='false'\n                    spellcheck='false'\n                    tabIndex="${n.a11y.focusableTags ? 0 : -1}"\n                    class="${n.classNames.tag} ${e.class || ""}"\n                    ${this.getAttributes(e)}>\n            <x title='' class="${n.classNames.tagX}" role='button' aria-label='remove tag'></x>\n            <div>\n                <span class="${n.classNames.tagText}">${e[n.tagTextProp] || e.value}</span>\n            </div>\n        </tag>`
                    },
                    dropdown(e) {
                        var t = e.dropdown
                            , n = "manual" == t.position
                            , a = `${e.classNames.dropdown}`;
                        return `<div class="${n ? "" : a} ${t.classname}" role="listbox" aria-labelledby="dropdown">\n                    <div data-selector='tagify-suggestions-wrapper' class="${e.classNames.dropdownWrapper}"></div>\n                </div>`
                    },
                    dropdownContent(e) {
                        var t = this.settings
                            , n = this.state.dropdown.suggestions;
                        return `\n            ${t.templates.dropdownHeader.call(this, n)}\n            ${e}\n            ${t.templates.dropdownFooter.call(this, n)}\n        `
                    },
                    dropdownItem(e) {
                        return `<div ${this.getAttributes(e)}\n                    class='${this.settings.classNames.dropdownItem} ${e.class ? e.class : ""}'\n                    tabindex="0"\n                    role="option">${e.mappedValue || e.value}</div>`
                    },
                    dropdownHeader(e) {
                        return `<header data-selector='tagify-suggestions-header' class="${this.settings.classNames.dropdownHeader}"></header>`
                    },
                    dropdownFooter(e) {
                        var t = e.length - this.settings.dropdown.maxItems;
                        return t > 0 ? `<footer data-selector='tagify-suggestions-footer' class="${this.settings.classNames.dropdownFooter}">\n                ${t} more items. Refine your search.\n            </footer>` : ""
                    },
                    dropdownItemNoMatch: null
                }, P = {
                    customBinding() {
                        this.customEventsList.forEach((e=>{
                                this.on(e, this.settings.callbacks[e])
                            }
                        ))
                    },
                    binding() {
                        let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        var t, n = this.events.callbacks, a = e ? "addEventListener" : "removeEventListener";
                        if (!this.state.mainEvents || !e) {
                            for (var r in this.state.mainEvents = e,
                            e && !this.listeners.main && (this.events.bindGlobal.call(this),
                            this.settings.isJQueryPlugin && jQuery(this.DOM.originalInput).on("tagify.removeAllTags", this.removeAllTags.bind(this))),
                                t = this.listeners.main = this.listeners.main || {
                                    focus: ["input", n.onFocusBlur.bind(this)],
                                    keydown: ["input", n.onKeydown.bind(this)],
                                    click: ["scope", n.onClickScope.bind(this)],
                                    dblclick: ["scope", n.onDoubleClickScope.bind(this)],
                                    paste: ["input", n.onPaste.bind(this)],
                                    drop: ["input", n.onDrop.bind(this)],
                                    compositionstart: ["input", n.onCompositionStart.bind(this)],
                                    compositionend: ["input", n.onCompositionEnd.bind(this)]
                                })
                                this.DOM[t[r][0]][a](r, t[r][1]);
                            clearInterval(this.listeners.main.originalInputValueObserverInterval),
                                this.listeners.main.originalInputValueObserverInterval = setInterval(n.observeOriginalInputValue.bind(this), 500);
                            var i = this.listeners.main.inputMutationObserver || new MutationObserver(n.onInputDOMChange.bind(this));
                            i.disconnect(),
                            "mix" == this.settings.mode && i.observe(this.DOM.input, {
                                childList: !0
                            })
                        }
                    },
                    bindGlobal(e) {
                        var t, n = this.events.callbacks, a = e ? "removeEventListener" : "addEventListener";
                        if (this.listeners && (e || !this.listeners.global))
                            for (t of (this.listeners.global = this.listeners.global || [{
                                type: this.isIE ? "keydown" : "input",
                                target: this.DOM.input,
                                cb: n[this.isIE ? "onInputIE" : "onInput"].bind(this)
                            }, {
                                type: "keydown",
                                target: window,
                                cb: n.onWindowKeyDown.bind(this)
                            }, {
                                type: "blur",
                                target: this.DOM.input,
                                cb: n.onFocusBlur.bind(this)
                            }, {
                                type: "click",
                                target: document,
                                cb: n.onClickAnywhere.bind(this)
                            }],
                                this.listeners.global))
                                t.target[a](t.type, t.cb)
                    },
                    unbindGlobal() {
                        this.events.bindGlobal.call(this, !0)
                    },
                    callbacks: {
                        onFocusBlur(e) {
                            var t = this.settings
                                , n = e.target ? this.trim(e.target.textContent) : ""
                                , a = this.value?.[0]?.[t.tagTextProp]
                                , r = e.type
                                , i = t.dropdown.enabled >= 0
                                , o = {
                                relatedTarget: e.relatedTarget
                            }
                                , s = this.state.actions.selectOption && (i || !t.dropdown.closeOnSelect)
                                , l = this.state.actions.addNew && i
                                , c = e.relatedTarget && _.call(this, e.relatedTarget) && this.DOM.scope.contains(e.relatedTarget);
                            if ("blur" == r) {
                                if (e.relatedTarget === this.DOM.scope)
                                    return this.dropdown.hide(),
                                        void this.DOM.input.focus();
                                this.postUpdate(),
                                t.onChangeAfterBlur && this.triggerChangeEvent()
                            }
                            if (!s && !l)
                                if (this.state.hasFocus = "focus" == r && +new Date,
                                    this.toggleFocusClass(this.state.hasFocus),
                                "mix" != t.mode) {
                                    if ("focus" == r)
                                        return this.trigger("focus", o),
                                            void (0 !== t.dropdown.enabled && t.userInput || this.dropdown.show(this.value.length ? "" : void 0));
                                    "blur" == r && (this.trigger("blur", o),
                                        this.loading(!1),
                                    "select" == t.mode && (c && (this.removeTags(),
                                        n = ""),
                                    a === n && (n = "")),
                                    n && !this.state.actions.selectOption && t.addTagOnBlur && this.addTags(n, !0)),
                                        this.DOM.input.removeAttribute("style"),
                                        this.dropdown.hide()
                                } else
                                    "focus" == r ? this.trigger("focus", o) : "blur" == e.type && (this.trigger("blur", o),
                                        this.loading(!1),
                                        this.dropdown.hide(),
                                        this.state.dropdown.visible = void 0,
                                        this.setStateSelection())
                        },
                        onCompositionStart(e) {
                            this.state.composing = !0
                        },
                        onCompositionEnd(e) {
                            this.state.composing = !1
                        },
                        onWindowKeyDown(e) {
                            var t, n = document.activeElement, a = _.call(this, n) && this.DOM.scope.contains(document.activeElement), r = a && n.hasAttribute("readonly");
                            if (a && !r)
                                switch (t = n.nextElementSibling,
                                    e.key) {
                                    case "Backspace":
                                        this.settings.readonly || (this.removeTags(n),
                                            (t || this.DOM.input).focus());
                                        break;
                                    case "Enter":
                                        setTimeout(this.editTag.bind(this), 0, n)
                                }
                        },
                        onKeydown(e) {
                            var t = this.settings;
                            if (!this.state.composing && t.userInput) {
                                "select" == t.mode && t.enforceWhitelist && this.value.length && "Tab" != e.key && e.preventDefault();
                                var n = this.trim(e.target.textContent);
                                if (this.trigger("keydown", {
                                    event: e
                                }),
                                "mix" == t.mode) {
                                    switch (e.key) {
                                        case "Left":
                                        case "ArrowLeft":
                                            this.state.actions.ArrowLeft = !0;
                                            break;
                                        case "Delete":
                                        case "Backspace":
                                            if (this.state.editing)
                                                return;
                                            var a = document.getSelection()
                                                , r = "Delete" == e.key && a.anchorOffset == (a.anchorNode.length || 0)
                                                , i = a.anchorNode.previousSibling
                                                , o = 1 == a.anchorNode.nodeType || !a.anchorOffset && i && 1 == i.nodeType && a.anchorNode.previousSibling;
                                            s(this.DOM.input.innerHTML);
                                            var l, u, d, m = this.getTagElms(), p = 1 === a.anchorNode.length && a.anchorNode.nodeValue == String.fromCharCode(8203);
                                            if ("edit" == t.backspace && o)
                                                return l = 1 == a.anchorNode.nodeType ? null : a.anchorNode.previousElementSibling,
                                                    setTimeout(this.editTag.bind(this), 0, l),
                                                    void e.preventDefault();
                                            if (g() && o instanceof Element)
                                                return d = c(o),
                                                o.hasAttribute("readonly") || o.remove(),
                                                    this.DOM.input.focus(),
                                                    void setTimeout((()=>{
                                                            w(d),
                                                                this.DOM.input.click()
                                                        }
                                                    ));
                                            if ("BR" == a.anchorNode.nodeName)
                                                return;
                                            if ((r || o) && 1 == a.anchorNode.nodeType ? u = 0 == a.anchorOffset ? r ? m[0] : null : m[Math.min(m.length, a.anchorOffset) - 1] : r ? u = a.anchorNode.nextElementSibling : o instanceof Element && (u = o),
                                            3 == a.anchorNode.nodeType && !a.anchorNode.nodeValue && a.anchorNode.previousElementSibling && e.preventDefault(),
                                            (o || r) && !t.backspace)
                                                return void e.preventDefault();
                                            if ("Range" != a.type && !a.anchorOffset && a.anchorNode == this.DOM.input && "Delete" != e.key)
                                                return void e.preventDefault();
                                            if ("Range" != a.type && u && u.hasAttribute("readonly"))
                                                return void w(c(u));
                                            "Delete" == e.key && p && v(a.anchorNode.nextSibling) && this.removeTags(a.anchorNode.nextSibling),
                                                clearTimeout(S),
                                                S = setTimeout((()=>{
                                                        var e = document.getSelection();
                                                        s(this.DOM.input.innerHTML),
                                                        !r && e.anchorNode.previousSibling,
                                                            this.value = [].map.call(m, ((e,t)=>{
                                                                    var n = v(e);
                                                                    if (e.parentNode || n.readonly)
                                                                        return n;
                                                                    this.trigger("remove", {
                                                                        tag: e,
                                                                        index: t,
                                                                        data: n
                                                                    })
                                                                }
                                                            )).filter((e=>e))
                                                    }
                                                ), 20)
                                    }
                                    return !0
                                }
                                switch (e.key) {
                                    case "Backspace":
                                        "select" == t.mode && t.enforceWhitelist && this.value.length ? this.removeTags() : this.state.dropdown.visible && "manual" != t.dropdown.position || "" != e.target.textContent && 8203 != n.charCodeAt(0) || (!0 === t.backspace ? this.removeTags() : "edit" == t.backspace && setTimeout(this.editTag.bind(this), 0));
                                        break;
                                    case "Esc":
                                    case "Escape":
                                        if (this.state.dropdown.visible)
                                            return;
                                        e.target.blur();
                                        break;
                                    case "Down":
                                    case "ArrowDown":
                                        this.state.dropdown.visible || this.dropdown.show();
                                        break;
                                    case "Arrowright":
                                    {
                                        let e = this.state.inputSuggestion || this.state.ddItemData;
                                        if (e && t.autoComplete.rightKey)
                                            return void this.addTags([e], !0);
                                        break
                                    }
                                    case "Tab":
                                    {
                                        let a = "select" == t.mode;
                                        if (!n || a)
                                            return !0;
                                        e.preventDefault()
                                    }
                                    case "Enter":
                                        if (this.state.dropdown.visible && "manual" != t.dropdown.position)
                                            return;
                                        e.preventDefault(),
                                            setTimeout((()=>{
                                                    this.state.dropdown.visible || this.state.actions.selectOption || this.addTags(n, !0)
                                                }
                                            ))
                                }
                            }
                        },
                        onInput(e) {
                            this.postUpdate();
                            var t = this.settings;
                            if ("mix" == t.mode)
                                return this.events.callbacks.onMixTagsInput.call(this, e);
                            var n = this.input.normalize.call(this)
                                , a = n.length >= t.dropdown.enabled
                                , r = {
                                value: n,
                                inputElm: this.DOM.input
                            }
                                , i = this.validateTag({
                                value: n
                            });
                            "select" == t.mode && this.toggleScopeValidation(i),
                                r.isValid = i,
                            this.state.inputText != n && (this.input.set.call(this, n, !1),
                                -1 != n.search(t.delimiters) ? this.addTags(n) && this.input.set.call(this) : t.dropdown.enabled >= 0 && this.dropdown[a ? "show" : "hide"](n),
                                this.trigger("input", r))
                        },
                        onMixTagsInput(e) {
                            var t, n, a, r, i, o, s, l, c = this.settings, u = this.value.length, d = this.getTagElms(), p = document.createDocumentFragment(), h = window.getSelection().getRangeAt(0), f = [].map.call(d, (e=>v(e).value));
                            if ("deleteContentBackward" == e.inputType && g() && this.events.callbacks.onKeydown.call(this, {
                                target: e.target,
                                key: "Backspace"
                            }),
                                k(this.getTagElms()),
                                this.value.slice().forEach((e=>{
                                        e.readonly && !f.includes(e.value) && p.appendChild(this.createTagElem(e))
                                    }
                                )),
                            p.childNodes.length && (h.insertNode(p),
                                this.setRangeAtStartEnd(!1, p.lastChild)),
                            d.length != u)
                                return this.value = [].map.call(this.getTagElms(), (e=>v(e))),
                                    void this.update({
                                        withoutChangeEvent: !0
                                    });
                            if (this.hasMaxTags())
                                return !0;
                            if (window.getSelection && (o = window.getSelection()).rangeCount > 0 && 3 == o.anchorNode.nodeType) {
                                if ((h = o.getRangeAt(0).cloneRange()).collapse(!0),
                                    h.setStart(o.focusNode, 0),
                                    a = (t = h.toString().slice(0, h.endOffset)).split(c.pattern).length - 1,
                                (n = t.match(c.pattern)) && (r = t.slice(t.lastIndexOf(n[n.length - 1]))),
                                    r) {
                                    if (this.state.actions.ArrowLeft = !1,
                                        this.state.tag = {
                                            prefix: r.match(c.pattern)[0],
                                            value: r.replace(c.pattern, "")
                                        },
                                        this.state.tag.baseOffset = o.baseOffset - this.state.tag.value.length,
                                        l = this.state.tag.value.match(c.delimiters))
                                        return this.state.tag.value = this.state.tag.value.replace(c.delimiters, ""),
                                            this.state.tag.delimiters = l[0],
                                            this.addTags(this.state.tag.value, c.dropdown.clearOnSelect),
                                            void this.dropdown.hide();
                                    i = this.state.tag.value.length >= c.dropdown.enabled;
                                    try {
                                        s = (s = this.state.flaggedTags[this.state.tag.baseOffset]).prefix == this.state.tag.prefix && s.value[0] == this.state.tag.value[0],
                                        this.state.flaggedTags[this.state.tag.baseOffset] && !this.state.tag.value && delete this.state.flaggedTags[this.state.tag.baseOffset]
                                    } catch (e) {}
                                    (s || a < this.state.mixMode.matchedPatternCount) && (i = !1)
                                } else
                                    this.state.flaggedTags = {};
                                this.state.mixMode.matchedPatternCount = a
                            }
                            setTimeout((()=>{
                                    this.update({
                                        withoutChangeEvent: !0
                                    }),
                                        this.trigger("input", m({}, this.state.tag, {
                                            textContent: this.DOM.input.textContent
                                        })),
                                    this.state.tag && this.dropdown[i ? "show" : "hide"](this.state.tag.value)
                                }
                            ), 10)
                        },
                        onInputIE(e) {
                            var t = this;
                            setTimeout((function() {
                                    t.events.callbacks.onInput.call(t, e)
                                }
                            ))
                        },
                        observeOriginalInputValue() {
                            this.DOM.originalInput.parentNode || this.destroy(),
                            this.DOM.originalInput.value != this.DOM.originalInput.tagifyValue && this.loadOriginalValues()
                        },
                        onClickAnywhere(e) {
                            e.target == this.DOM.scope || this.DOM.scope.contains(e.target) || (this.toggleFocusClass(!1),
                                this.state.hasFocus = !1)
                        },
                        onClickScope(e) {
                            var t = this.settings
                                , n = e.target.closest("." + t.classNames.tag)
                                , a = +new Date - this.state.hasFocus;
                            if (e.target != this.DOM.scope) {
                                if (!e.target.classList.contains(t.classNames.tagX))
                                    return n ? (this.trigger("click", {
                                        tag: n,
                                        index: this.getNodeIndex(n),
                                        data: v(n),
                                        event: e
                                    }),
                                        void (1 !== t.editTags && 1 !== t.editTags.clicks || this.events.callbacks.onDoubleClickScope.call(this, e))) : void (e.target == this.DOM.input && ("mix" == t.mode && this.fixFirefoxLastTagNoCaret(),
                                    a > 500) ? this.state.dropdown.visible ? this.dropdown.hide() : 0 === t.dropdown.enabled && "mix" != t.mode && this.dropdown.show(this.value.length ? "" : void 0) : "select" != t.mode || 0 !== t.dropdown.enabled || this.state.dropdown.visible || this.dropdown.show());
                                this.removeTags(e.target.parentNode)
                            } else
                                this.DOM.input.focus()
                        },
                        onPaste(e) {
                            e.preventDefault();
                            var t, n, a = this.settings;
                            if ("select" == a.mode && a.enforceWhitelist || !a.userInput)
                                return !1;
                            a.readonly || (t = e.clipboardData || window.clipboardData,
                                n = t.getData("Text"),
                                a.hooks.beforePaste(e, {
                                    tagify: this,
                                    pastedText: n,
                                    clipboardData: t
                                }).then((t=>{
                                        void 0 === t && (t = n),
                                        t && (this.injectAtCaret(t, window.getSelection().getRangeAt(0)),
                                            "mix" == this.settings.mode ? this.events.callbacks.onMixTagsInput.call(this, e) : this.settings.pasteAsTags ? this.addTags(this.state.inputText + t, !0) : this.state.inputText = t)
                                    }
                                )).catch((e=>e)))
                        },
                        onDrop(e) {
                            e.preventDefault()
                        },
                        onEditTagInput(e, t) {
                            var n = e.closest("." + this.settings.classNames.tag)
                                , a = this.getNodeIndex(n)
                                , r = v(n)
                                , i = this.input.normalize.call(this, e)
                                , o = {
                                [this.settings.tagTextProp]: i,
                                __tagId: r.__tagId
                            }
                                , s = this.validateTag(o);
                            this.editTagChangeDetected(m(r, o)) || !0 !== e.originalIsValid || (s = !0),
                                n.classList.toggle(this.settings.classNames.tagInvalid, !0 !== s),
                                r.__isValid = s,
                                n.title = !0 === s ? r.title || r.value : s,
                            i.length >= this.settings.dropdown.enabled && (this.state.editing && (this.state.editing.value = i),
                                this.dropdown.show(i)),
                                this.trigger("edit:input", {
                                    tag: n,
                                    index: a,
                                    data: m({}, this.value[a], {
                                        newValue: i
                                    }),
                                    event: t
                                })
                        },
                        onEditTagPaste(e, t) {
                            var n = (t.clipboardData || window.clipboardData).getData("Text");
                            t.preventDefault();
                            var a = b(n);
                            this.setRangeAtStartEnd(!1, a)
                        },
                        onEditTagFocus(e) {
                            this.state.editing = {
                                scope: e,
                                input: e.querySelector("[contenteditable]")
                            }
                        },
                        onEditTagBlur(e) {
                            if (this.state.hasFocus || this.toggleFocusClass(),
                                this.DOM.scope.contains(e)) {
                                var t, n, a = this.settings, r = e.closest("." + a.classNames.tag), i = v(r), o = this.input.normalize.call(this, e), s = {
                                    [a.tagTextProp]: o,
                                    __tagId: i.__tagId
                                }, l = i.__originalData, c = this.editTagChangeDetected(m(i, s)), u = this.validateTag(s);
                                if (o)
                                    if (c) {
                                        if (t = this.hasMaxTags(),
                                            n = m({}, l, {
                                                [a.tagTextProp]: this.trim(o),
                                                __isValid: u
                                            }),
                                            a.transformTag.call(this, n, l),
                                        !0 !== (u = (!t || !0 === l.__isValid) && this.validateTag(n))) {
                                            if (this.trigger("invalid", {
                                                data: n,
                                                tag: r,
                                                message: u
                                            }),
                                                a.editTags.keepInvalid)
                                                return;
                                            a.keepInvalidTags ? n.__isValid = u : n = l
                                        } else
                                            a.keepInvalidTags && (delete n.title,
                                                delete n["aria-invalid"],
                                                delete n.class);
                                        this.onEditTagDone(r, n)
                                    } else
                                        this.onEditTagDone(r, l);
                                else
                                    this.onEditTagDone(r)
                            }
                        },
                        onEditTagkeydown(e, t) {
                            if (!this.state.composing)
                                switch (this.trigger("edit:keydown", {
                                    event: e
                                }),
                                    e.key) {
                                    case "Esc":
                                    case "Escape":
                                        t.parentNode.replaceChild(t.__tagifyTagData.__originalHTML, t),
                                            this.state.editing = !1;
                                    case "Enter":
                                    case "Tab":
                                        e.preventDefault(),
                                            e.target.blur()
                                }
                        },
                        onDoubleClickScope(e) {
                            var t, n, a = e.target.closest("." + this.settings.classNames.tag), r = v(a), i = this.settings;
                            a && i.userInput && !1 !== r.editable && (t = a.classList.contains(this.settings.classNames.tagEditing),
                                n = a.hasAttribute("readonly"),
                            "select" == i.mode || i.readonly || t || n || !this.settings.editTags || this.editTag(a),
                                this.toggleFocusClass(!0),
                                this.trigger("dblclick", {
                                    tag: a,
                                    index: this.getNodeIndex(a),
                                    data: v(a)
                                }))
                        },
                        onInputDOMChange(e) {
                            e.forEach((e=>{
                                    e.addedNodes.forEach((e=>{
                                            if ("<div><br></div>" == e.outerHTML)
                                                e.replaceWith(document.createElement("br"));
                                            else if (1 == e.nodeType && e.querySelector(this.settings.classNames.tagSelector)) {
                                                let t = document.createTextNode("");
                                                3 == e.childNodes[0].nodeType && "BR" != e.previousSibling.nodeName && (t = document.createTextNode("\n")),
                                                    e.replaceWith(t, ...[...e.childNodes].slice(0, -1)),
                                                    w(t)
                                            } else if (_.call(this, e))
                                                if (3 != e.previousSibling?.nodeType || e.previousSibling.textContent || e.previousSibling.remove(),
                                                e.previousSibling && "BR" == e.previousSibling.nodeName) {
                                                    e.previousSibling.replaceWith("\n" + a);
                                                    let t = e.nextSibling
                                                        , n = "";
                                                    for (; t; )
                                                        n += t.textContent,
                                                            t = t.nextSibling;
                                                    n.trim() && w(e.previousSibling)
                                                } else
                                                    e.previousSibling && !v(e.previousSibling) || e.before(a)
                                        }
                                    )),
                                        e.removedNodes.forEach((e=>{
                                                e && "BR" == e.nodeName && _.call(this, t) && (this.removeTags(t),
                                                    this.fixFirefoxLastTagNoCaret())
                                            }
                                        ))
                                }
                            ));
                            var t = this.DOM.input.lastChild;
                            t && "" == t.nodeValue && t.remove(),
                            t && "BR" == t.nodeName || this.DOM.input.appendChild(document.createElement("br"))
                        }
                    }
                };
                function O(e, t) {
                    if (!e) {
                        console.warn("Tagify:", "input element not found", e);
                        const t = new Proxy(this,{
                            get: ()=>()=>t
                        });
                        return t
                    }
                    if (e.__tagify)
                        return console.warn("Tagify: ", "input element is already Tagified - Same instance is returned.", e),
                            e.__tagify;
                    var n;
                    m(this, function(e) {
                        var t = document.createTextNode("");
                        function n(e, n, a) {
                            a && n.split(/\s+/g).forEach((n=>t[e + "EventListener"].call(t, n, a)))
                        }
                        return {
                            off(e, t) {
                                return n("remove", e, t),
                                    this
                            },
                            on(e, t) {
                                return t && "function" == typeof t && n("add", e, t),
                                    this
                            },
                            trigger(n, a, r) {
                                var i;
                                if (r = r || {
                                    cloneData: !0
                                },
                                    n)
                                    if (e.settings.isJQueryPlugin)
                                        "remove" == n && (n = "removeTag"),
                                            jQuery(e.DOM.originalInput).triggerHandler(n, [a]);
                                    else {
                                        try {
                                            var o = "object" == typeof a ? a : {
                                                value: a
                                            };
                                            if ((o = r.cloneData ? m({}, o) : o).tagify = this,
                                            a.event && (o.event = this.cloneEvent(a.event)),
                                            a instanceof Object)
                                                for (var s in a)
                                                    a[s]instanceof HTMLElement && (o[s] = a[s]);
                                            i = new CustomEvent(n,{
                                                detail: o
                                            })
                                        } catch (e) {
                                            console.warn(e)
                                        }
                                        t.dispatchEvent(i)
                                    }
                            }
                        }
                    }(this)),
                        this.isFirefox = /firefox|fxios/i.test(navigator.userAgent) && !/seamonkey/i.test(navigator.userAgent),
                        this.isIE = window.document.documentMode,
                        t = t || {},
                        this.getPersistedData = (n = t.id,
                                e=>{
                                    let t, a = "/" + e;
                                    if (1 == localStorage.getItem(T + n + "/v", 1))
                                        try {
                                            t = JSON.parse(localStorage[T + n + a])
                                        } catch (e) {}
                                    return t
                                }
                        ),
                        this.setPersistedData = (e=>e ? (localStorage.setItem(T + e + "/v", 1),
                                    (t,n)=>{
                                        let a = "/" + n
                                            , r = JSON.stringify(t);
                                        t && n && (localStorage.setItem(T + e + a, r),
                                            dispatchEvent(new Event("storage")))
                                    }
                            ) : ()=>{}
                        )(t.id),
                        this.clearPersistedData = (e=>t=>{
                                const n = T + "/" + e + "/";
                                if (t)
                                    localStorage.removeItem(n + t);
                                else
                                    for (let e in localStorage)
                                        e.includes(n) && localStorage.removeItem(e)
                            }
                        )(t.id),
                        this.applySettings(e, t),
                        this.state = {
                            inputText: "",
                            editing: !1,
                            composing: !1,
                            actions: {},
                            mixMode: {},
                            dropdown: {},
                            flaggedTags: {}
                        },
                        this.value = [],
                        this.listeners = {},
                        this.DOM = {},
                        this.build(e),
                        E.call(this),
                        this.getCSSVars(),
                        this.loadOriginalValues(),
                        this.events.customBinding.call(this),
                        this.events.binding.call(this),
                    e.autofocus && this.DOM.input.focus(),
                        e.__tagify = this
                }
                return O.prototype = {
                    _dropdown: x,
                    getSetTagData: v,
                    helpers: {
                        sameStr: r,
                        removeCollectionProp: i,
                        omit: o,
                        isObject: d,
                        parseHTML: l,
                        escapeHTML: u,
                        extend: m,
                        concatWithoutDups: p,
                        getUID: f,
                        isNodeTag: _
                    },
                    customEventsList: ["change", "add", "remove", "invalid", "input", "click", "keydown", "focus", "blur", "edit:input", "edit:beforeUpdate", "edit:updated", "edit:start", "edit:keydown", "dropdown:show", "dropdown:hide", "dropdown:select", "dropdown:updated", "dropdown:noMatch", "dropdown:scroll"],
                    dataProps: ["__isValid", "__removed", "__originalData", "__originalHTML", "__tagId"],
                    trim(e) {
                        return this.settings.trim && e && "string" == typeof e ? e.trim() : e
                    },
                    parseHTML: l,
                    templates: A,
                    parseTemplate(e, t) {
                        return l((e = this.settings.templates[e] || e).apply(this, t))
                    },
                    set whitelist(e) {
                        const t = e && Array.isArray(e);
                        this.settings.whitelist = t ? e : [],
                            this.setPersistedData(t ? e : [], "whitelist")
                    },
                    get whitelist() {
                        return this.settings.whitelist
                    },
                    generateClassSelectors(e) {
                        for (let t in e) {
                            let n = t;
                            Object.defineProperty(e, n + "Selector", {
                                get() {
                                    return "." + this[n].split(" ")[0]
                                }
                            })
                        }
                    },
                    applySettings(e, n) {
                        y.templates = this.templates;
                        var a = m({}, y, "mix" == n.mode ? {
                            dropdown: {
                                position: "text"
                            }
                        } : {})
                            , r = this.settings = m({}, a, n);
                        if (r.disabled = e.hasAttribute("disabled"),
                            r.readonly = r.readonly || e.hasAttribute("readonly"),
                            r.placeholder = u(e.getAttribute("placeholder") || r.placeholder || ""),
                            r.required = e.hasAttribute("required"),
                            this.generateClassSelectors(r.classNames),
                        void 0 === r.dropdown.includeSelectedTags && (r.dropdown.includeSelectedTags = r.duplicates),
                        this.isIE && (r.autoComplete = !1),
                            ["whitelist", "blacklist"].forEach((t=>{
                                    var n = e.getAttribute("data-" + t);
                                    n && (n = n.split(r.delimiters))instanceof Array && (r[t] = n)
                                }
                            )),
                        "autoComplete"in n && !d(n.autoComplete) && (r.autoComplete = y.autoComplete,
                            r.autoComplete.enabled = n.autoComplete),
                        "mix" == r.mode && (r.pattern = r.pattern || /@/,
                            r.autoComplete.rightKey = !0,
                            r.delimiters = n.delimiters || null,
                        r.tagTextProp && !r.dropdown.searchKeys.includes(r.tagTextProp) && r.dropdown.searchKeys.push(r.tagTextProp)),
                            e.pattern)
                            try {
                                r.pattern = new RegExp(e.pattern)
                            } catch (e) {}
                        if (r.delimiters) {
                            r._delimiters = r.delimiters;
                            try {
                                r.delimiters = new RegExp(this.settings.delimiters,"g")
                            } catch (e) {}
                        }
                        r.disabled && (r.userInput = !1),
                            this.TEXTS = t(t({}, C), r.texts || {}),
                        ("select" != r.mode || n.dropdown?.enabled) && r.userInput || (r.dropdown.enabled = 0),
                            r.dropdown.appendTarget = n.dropdown?.appendTarget || document.body;
                        let i = this.getPersistedData("whitelist");
                        Array.isArray(i) && (this.whitelist = Array.isArray(r.whitelist) ? p(r.whitelist, i) : i)
                    },
                    getAttributes(e) {
                        var t, n = this.getCustomAttributes(e), a = "";
                        for (t in n)
                            a += " " + t + (void 0 !== e[t] ? `="${n[t]}"` : "");
                        return a
                    },
                    getCustomAttributes(e) {
                        if (!d(e))
                            return "";
                        var t, n = {};
                        for (t in e)
                            "__" != t.slice(0, 2) && "class" != t && e.hasOwnProperty(t) && void 0 !== e[t] && (n[t] = u(e[t]));
                        return n
                    },
                    setStateSelection() {
                        var e = window.getSelection()
                            , t = {
                            anchorOffset: e.anchorOffset,
                            anchorNode: e.anchorNode,
                            range: e.getRangeAt && e.rangeCount && e.getRangeAt(0)
                        };
                        return this.state.selection = t,
                            t
                    },
                    getCSSVars() {
                        var e, t = getComputedStyle(this.DOM.scope, null);
                        this.CSSVars = {
                            tagHideTransition: (e=>{
                                    let t = e.value;
                                    return "s" == e.unit ? 1e3 * t : t
                                }
                            )(function(e) {
                                if (!e)
                                    return {};
                                var t = (e = e.trim().split(" ")[0]).split(/\d+/g).filter((e=>e)).pop().trim();
                                return {
                                    value: +e.split(t).filter((e=>e))[0].trim(),
                                    unit: t
                                }
                            }((e = "tag-hide-transition",
                                t.getPropertyValue("--" + e))))
                        }
                    },
                    build(e) {
                        var t = this.DOM;
                        this.settings.mixMode.integrated ? (t.originalInput = null,
                            t.scope = e,
                            t.input = e) : (t.originalInput = e,
                            t.originalInput_tabIndex = e.tabIndex,
                            t.scope = this.parseTemplate("wrapper", [e, this.settings]),
                            t.input = t.scope.querySelector(this.settings.classNames.inputSelector),
                            e.parentNode.insertBefore(t.scope, e),
                            e.tabIndex = -1)
                    },
                    destroy() {
                        this.events.unbindGlobal.call(this),
                            this.DOM.scope.parentNode.removeChild(this.DOM.scope),
                            this.DOM.originalInput.tabIndex = this.DOM.originalInput_tabIndex,
                            delete this.DOM.originalInput.__tagify,
                            this.dropdown.hide(!0),
                            clearTimeout(this.dropdownHide__bindEventsTimeout),
                            clearInterval(this.listeners.main.originalInputValueObserverInterval)
                    },
                    loadOriginalValues(e) {
                        var t, n = this.settings;
                        if (this.state.blockChangeEvent = !0,
                        void 0 === e) {
                            const t = this.getPersistedData("value");
                            e = t && !this.DOM.originalInput.value ? t : n.mixMode.integrated ? this.DOM.input.textContent : this.DOM.originalInput.value
                        }
                        if (this.removeAllTags(),
                            e)
                            if ("mix" == n.mode)
                                this.parseMixTags(e),
                                (t = this.DOM.input.lastChild) && "BR" == t.tagName || this.DOM.input.insertAdjacentHTML("beforeend", "<br>");
                            else {
                                try {
                                    JSON.parse(e)instanceof Array && (e = JSON.parse(e))
                                } catch (e) {}
                                this.addTags(e, !0).forEach((e=>e && e.classList.add(n.classNames.tagNoAnimation)))
                            }
                        else
                            this.postUpdate();
                        this.state.lastOriginalValueReported = n.mixMode.integrated ? "" : this.DOM.originalInput.value
                    },
                    cloneEvent(e) {
                        var t = {};
                        for (var n in e)
                            "path" != n && (t[n] = e[n]);
                        return t
                    },
                    loading(e) {
                        return this.state.isLoading = e,
                            this.DOM.scope.classList[e ? "add" : "remove"](this.settings.classNames.scopeLoading),
                            this
                    },
                    tagLoading(e, t) {
                        return e && e.classList[t ? "add" : "remove"](this.settings.classNames.tagLoading),
                            this
                    },
                    toggleClass(e, t) {
                        "string" == typeof e && this.DOM.scope.classList.toggle(e, t)
                    },
                    toggleScopeValidation(e) {
                        var t = !0 === e || void 0 === e;
                        !this.settings.required && e && e === this.TEXTS.empty && (t = !0),
                            this.toggleClass(this.settings.classNames.tagInvalid, !t),
                            this.DOM.scope.title = t ? "" : e
                    },
                    toggleFocusClass(e) {
                        this.toggleClass(this.settings.classNames.focus, !!e)
                    },
                    triggerChangeEvent: function() {
                        if (!this.settings.mixMode.integrated) {
                            var e = this.DOM.originalInput
                                , t = this.state.lastOriginalValueReported !== e.value
                                , n = new CustomEvent("change",{
                                bubbles: !0
                            });
                            t && (this.state.lastOriginalValueReported = e.value,
                                n.simulated = !0,
                            e._valueTracker && e._valueTracker.setValue(Math.random()),
                                e.dispatchEvent(n),
                                this.trigger("change", this.state.lastOriginalValueReported),
                                e.value = this.state.lastOriginalValueReported)
                        }
                    },
                    events: P,
                    fixFirefoxLastTagNoCaret() {},
                    setRangeAtStartEnd(e, t) {
                        if (t) {
                            e = "number" == typeof e ? e : !!e,
                                t = t.lastChild || t;
                            var n = document.getSelection();
                            if (n.focusNode instanceof Element && !this.DOM.input.contains(n.focusNode))
                                return !0;
                            try {
                                n.rangeCount >= 1 && ["Start", "End"].forEach((a=>n.getRangeAt(0)["set" + a](t, e || t.length)))
                            } catch (e) {}
                        }
                    },
                    insertAfterTag(e, t) {
                        if (t = t || this.settings.mixMode.insertAfterTag,
                        e && e.parentNode && t)
                            return t = "string" == typeof t ? document.createTextNode(t) : t,
                                e.parentNode.insertBefore(t, e.nextSibling),
                                t
                    },
                    editTagChangeDetected(e) {
                        var t = e.__originalData;
                        for (var n in t)
                            if (!this.dataProps.includes(n) && e[n] != t[n])
                                return !0;
                        return !1
                    },
                    getTagTextNode(e) {
                        return e.querySelector(this.settings.classNames.tagTextSelector)
                    },
                    setTagTextNode(e, t) {
                        this.getTagTextNode(e).innerHTML = u(t)
                    },
                    editTag(e, t) {
                        e = e || this.getLastTag(),
                            t = t || {},
                            this.dropdown.hide();
                        var n = this.settings
                            , a = this.getTagTextNode(e)
                            , r = this.getNodeIndex(e)
                            , i = v(e)
                            , o = this.events.callbacks
                            , s = this
                            , l = !0;
                        if (a) {
                            if (!(i instanceof Object && "editable"in i) || i.editable)
                                return i = v(e, {
                                    __originalData: m({}, i),
                                    __originalHTML: e.cloneNode(!0)
                                }),
                                    v(i.__originalHTML, i.__originalData),
                                    a.setAttribute("contenteditable", !0),
                                    e.classList.add(n.classNames.tagEditing),
                                    a.addEventListener("focus", o.onEditTagFocus.bind(this, e)),
                                    a.addEventListener("blur", (function() {
                                            setTimeout((()=>o.onEditTagBlur.call(s, s.getTagTextNode(e))))
                                        }
                                    )),
                                    a.addEventListener("input", o.onEditTagInput.bind(this, a)),
                                    a.addEventListener("paste", o.onEditTagPaste.bind(this, a)),
                                    a.addEventListener("keydown", (t=>o.onEditTagkeydown.call(this, t, e))),
                                    a.addEventListener("compositionstart", o.onCompositionStart.bind(this)),
                                    a.addEventListener("compositionend", o.onCompositionEnd.bind(this)),
                                t.skipValidation || (l = this.editTagToggleValidity(e)),
                                    a.originalIsValid = l,
                                    this.trigger("edit:start", {
                                        tag: e,
                                        index: r,
                                        data: i,
                                        isValid: l
                                    }),
                                    a.focus(),
                                    this.setRangeAtStartEnd(!1, a),
                                    this
                        } else
                            console.warn("Cannot find element in Tag template: .", n.classNames.tagTextSelector)
                    },
                    editTagToggleValidity(e, t) {
                        var n;
                        if (t = t || v(e))
                            return (n = !("__isValid"in t) || !0 === t.__isValid) || this.removeTagsFromValue(e),
                                this.update(),
                                e.classList.toggle(this.settings.classNames.tagNotAllowed, !n),
                                t.__isValid = n,
                                t.__isValid;
                        console.warn("tag has no data: ", e, t)
                    },
                    onEditTagDone(e, t) {
                        t = t || {};
                        var n = {
                            tag: e = e || this.state.editing.scope,
                            index: this.getNodeIndex(e),
                            previousData: v(e),
                            data: t
                        };
                        this.trigger("edit:beforeUpdate", n, {
                            cloneData: !1
                        }),
                            this.state.editing = !1,
                            delete t.__originalData,
                            delete t.__originalHTML,
                            e && t[this.settings.tagTextProp] ? (e = this.replaceTag(e, t),
                                this.editTagToggleValidity(e, t),
                                this.settings.a11y.focusableTags ? e.focus() : w(e)) : e && this.removeTags(e),
                            this.trigger("edit:updated", n),
                            this.dropdown.hide(),
                        this.settings.keepInvalidTags && this.reCheckInvalidTags()
                    },
                    replaceTag(e, t) {
                        t && t.value || (t = e.__tagifyTagData),
                        t.__isValid && 1 != t.__isValid && m(t, this.getInvalidTagAttrs(t, t.__isValid));
                        var n = this.createTagElem(t);
                        return e.parentNode.replaceChild(n, e),
                            this.updateValueByDOMTags(),
                            n
                    },
                    updateValueByDOMTags() {
                        this.value.length = 0,
                            [].forEach.call(this.getTagElms(), (e=>{
                                    e.classList.contains(this.settings.classNames.tagNotAllowed.split(" ")[0]) || this.value.push(v(e))
                                }
                            )),
                            this.update()
                    },
                    injectAtCaret(e, t) {
                        return !(t = t || this.state.selection?.range) && e ? (this.appendMixTags(e),
                            this) : (b(e, t),
                            this.setRangeAtStartEnd(!1, e),
                            this.updateValueByDOMTags(),
                            this.update(),
                            this)
                    },
                    input: {
                        set() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                                , t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            var n = this.settings.dropdown.closeOnSelect;
                            this.state.inputText = e,
                            t && (this.DOM.input.innerHTML = u("" + e)),
                            !e && n && this.dropdown.hide.bind(this),
                                this.input.autocomplete.suggest.call(this),
                                this.input.validate.call(this)
                        },
                        raw() {
                            return this.DOM.input.textContent
                        },
                        validate() {
                            var e = !this.state.inputText || !0 === this.validateTag({
                                value: this.state.inputText
                            });
                            return this.DOM.input.classList.toggle(this.settings.classNames.inputInvalid, !e),
                                e
                        },
                        normalize(e) {
                            var t = e || this.DOM.input
                                , n = [];
                            t.childNodes.forEach((e=>3 == e.nodeType && n.push(e.nodeValue))),
                                n = n.join("\n");
                            try {
                                n = n.replace(/(?:\r\n|\r|\n)/g, this.settings.delimiters.source.charAt(0))
                            } catch (e) {}
                            return n = n.replace(/\s/g, " "),
                                this.trim(n)
                        },
                        autocomplete: {
                            suggest(e) {
                                if (this.settings.autoComplete.enabled) {
                                    "string" == typeof (e = e || {
                                        value: ""
                                    }) && (e = {
                                        value: e
                                    });
                                    var t = this.dropdown.getMappedValue(e);
                                    if ("number" != typeof t) {
                                        var n = t.substr(0, this.state.inputText.length).toLowerCase()
                                            , a = t.substring(this.state.inputText.length);
                                        t && this.state.inputText && n == this.state.inputText.toLowerCase() ? (this.DOM.input.setAttribute("data-suggest", a),
                                            this.state.inputSuggestion = e) : (this.DOM.input.removeAttribute("data-suggest"),
                                            delete this.state.inputSuggestion)
                                    }
                                }
                            },
                            set(e) {
                                var t = this.DOM.input.getAttribute("data-suggest")
                                    , n = e || (t ? this.state.inputText + t : null);
                                return !!n && ("mix" == this.settings.mode ? this.replaceTextWithNode(document.createTextNode(this.state.tag.prefix + n)) : (this.input.set.call(this, n),
                                    this.setRangeAtStartEnd(!1, this.DOM.input)),
                                    this.input.autocomplete.suggest.call(this),
                                    this.dropdown.hide(),
                                    !0)
                            }
                        }
                    },
                    getTagIdx(e) {
                        return this.value.findIndex((t=>t.__tagId == (e || {}).__tagId))
                    },
                    getNodeIndex(e) {
                        var t = 0;
                        if (e)
                            for (; e = e.previousElementSibling; )
                                t++;
                        return t
                    },
                    getTagElms() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                            t[n] = arguments[n];
                        var a = "." + [...this.settings.classNames.tag.split(" "), ...t].join(".");
                        return [].slice.call(this.DOM.scope.querySelectorAll(a))
                    },
                    getLastTag() {
                        var e = this.DOM.scope.querySelectorAll(`${this.settings.classNames.tagSelector}:not(.${this.settings.classNames.tagHide}):not([readonly])`);
                        return e[e.length - 1]
                    },
                    isTagDuplicate(e, t, n) {
                        var a = 0;
                        if ("select" == this.settings.mode)
                            return !1;
                        for (let i of this.value)
                            r(this.trim("" + e), i.value, t) && n != i.__tagId && a++;
                        return a
                    },
                    getTagIndexByValue(e) {
                        var t = []
                            , n = this.settings.dropdown.caseSensitive;
                        return this.getTagElms().forEach(((a,i)=>{
                                a.__tagifyTagData && r(this.trim(a.__tagifyTagData.value), e, n) && t.push(i)
                            }
                        )),
                            t
                    },
                    getTagElmByValue(e) {
                        var t = this.getTagIndexByValue(e)[0];
                        return this.getTagElms()[t]
                    },
                    flashTag(e) {
                        e && (e.classList.add(this.settings.classNames.tagFlash),
                            setTimeout((()=>{
                                    e.classList.remove(this.settings.classNames.tagFlash)
                                }
                            ), 100))
                    },
                    isTagBlacklisted(e) {
                        return e = this.trim(e.toLowerCase()),
                            this.settings.blacklist.filter((t=>("" + t).toLowerCase() == e)).length
                    },
                    isTagWhitelisted(e) {
                        return !!this.getWhitelistItem(e)
                    },
                    getWhitelistItem(e, t, n) {
                        t = t || "value";
                        var a, i = this.settings;
                        return (n = n || i.whitelist).some((n=>{
                                var o = "string" == typeof n ? n : n[t] || n.value;
                                if (r(o, e, i.dropdown.caseSensitive, i.trim))
                                    return a = "string" == typeof n ? {
                                        value: n
                                    } : n,
                                        !0
                            }
                        )),
                        a || "value" != t || "value" == i.tagTextProp || (a = this.getWhitelistItem(e, i.tagTextProp, n)),
                            a
                    },
                    validateTag(e) {
                        var t = this.settings
                            , n = "value"in e ? "value" : t.tagTextProp
                            , a = this.trim(e[n] + "");
                        return (e[n] + "").trim() ? "mix" != t.mode && t.pattern && t.pattern instanceof RegExp && !t.pattern.test(a) ? this.TEXTS.pattern : !t.duplicates && this.isTagDuplicate(a, t.dropdown.caseSensitive, e.__tagId) ? this.TEXTS.duplicate : this.isTagBlacklisted(a) || t.enforceWhitelist && !this.isTagWhitelisted(a) ? this.TEXTS.notAllowed : !t.validate || t.validate(e) : this.TEXTS.empty
                    },
                    getInvalidTagAttrs(e, t) {
                        return {
                            "aria-invalid": !0,
                            class: `${e.class || ""} ${this.settings.classNames.tagNotAllowed}`.trim(),
                            title: t
                        }
                    },
                    hasMaxTags() {
                        return this.value.length >= this.settings.maxTags && this.TEXTS.exceed
                    },
                    setReadonly(e, t) {
                        var n = this.settings;
                        document.activeElement.blur(),
                            n[t || "readonly"] = e,
                            this.DOM.scope[(e ? "set" : "remove") + "Attribute"](t || "readonly", !0),
                            this.settings.userInput = !0,
                            this.setContentEditable(!e)
                    },
                    setContentEditable(e) {
                        this.settings.userInput && (this.DOM.input.contentEditable = e,
                            this.DOM.input.tabIndex = e ? 0 : -1)
                    },
                    setDisabled(e) {
                        this.setReadonly(e, "disabled")
                    },
                    normalizeTags(e) {
                        var t = this.settings
                            , n = t.whitelist
                            , a = t.delimiters
                            , r = t.mode
                            , i = t.tagTextProp
                            , o = []
                            , s = !!n && n[0]instanceof Object
                            , l = Array.isArray(e)
                            , c = l && e[0].value
                            , u = e=>(e + "").split(a).filter((e=>e)).map((e=>({
                            [i]: this.trim(e),
                            value: this.trim(e)
                        })));
                        if ("number" == typeof e && (e = e.toString()),
                        "string" == typeof e) {
                            if (!e.trim())
                                return [];
                            e = u(e)
                        } else
                            l && (e = [].concat(...e.map((e=>null != e.value ? e : u(e)))));
                        return s && !c && (e.forEach((e=>{
                                var t = o.map((e=>e.value))
                                    , n = this.dropdown.filterListItems.call(this, e[i], {
                                    exact: !0
                                });
                                this.settings.duplicates || (n = n.filter((e=>!t.includes(e.value))));
                                var a = n.length > 1 ? this.getWhitelistItem(e[i], i, n) : n[0];
                                a && a instanceof Object ? o.push(a) : "mix" != r && (null == e.value && (e.value = e[i]),
                                    o.push(e))
                            }
                        )),
                        o.length && (e = o)),
                            e
                    },
                    parseMixTags(e) {
                        var t = this.settings
                            , n = t.mixTagsInterpolator
                            , a = t.duplicates
                            , r = t.transformTag
                            , i = t.enforceWhitelist
                            , o = t.maxTags
                            , s = t.tagTextProp
                            , l = [];
                        e = e.split(n[0]).map(((e,t)=>{
                                var c, u, d, m = e.split(n[1]), p = m[0], h = l.length == o;
                                try {
                                    if (p == +p)
                                        throw Error;
                                    u = JSON.parse(p)
                                } catch (e) {
                                    u = this.normalizeTags(p)[0] || {
                                        value: p
                                    }
                                }
                                if (r.call(this, u),
                                h || !(m.length > 1) || i && !this.isTagWhitelisted(u.value) || !a && this.isTagDuplicate(u.value)) {
                                    if (e)
                                        return t ? n[0] + e : e
                                } else
                                    u[c = u[s] ? s : "value"] = this.trim(u[c]),
                                        d = this.createTagElem(u),
                                        l.push(u),
                                        d.classList.add(this.settings.classNames.tagNoAnimation),
                                        m[0] = d.outerHTML,
                                        this.value.push(u);
                                return m.join("")
                            }
                        )).join(""),
                            this.DOM.input.innerHTML = e,
                            this.DOM.input.appendChild(document.createTextNode("")),
                            this.DOM.input.normalize();
                        var c = this.getTagElms();
                        return c.forEach(((e,t)=>v(e, l[t]))),
                            this.update({
                                withoutChangeEvent: !0
                            }),
                            k(c, this.state.hasFocus),
                            e
                    },
                    replaceTextWithNode(e, t) {
                        if (this.state.tag || t) {
                            t = t || this.state.tag.prefix + this.state.tag.value;
                            var n, a, r = this.state.selection || window.getSelection(), i = r.anchorNode, o = this.state.tag.delimiters ? this.state.tag.delimiters.length : 0;
                            return i.splitText(r.anchorOffset - o),
                            -1 == (n = i.nodeValue.lastIndexOf(t)) || (a = i.splitText(n),
                            e && i.parentNode.replaceChild(e, a)),
                                !0
                        }
                    },
                    selectTag(e, t) {
                        var n = this.settings;
                        if (!n.enforceWhitelist || this.isTagWhitelisted(t.value)) {
                            this.input.set.call(this, t[n.tagTextProp] || t.value, !0),
                            this.state.actions.selectOption && setTimeout((()=>this.setRangeAtStartEnd(!1, this.DOM.input)));
                            var a = this.getLastTag();
                            return a ? this.replaceTag(a, t) : this.appendTag(e),
                                this.value[0] = t,
                                this.update(),
                                this.trigger("add", {
                                    tag: e,
                                    data: t
                                }),
                                [e]
                        }
                    },
                    addEmptyTag(e) {
                        var t = m({
                            value: ""
                        }, e || {})
                            , n = this.createTagElem(t);
                        v(n, t),
                            this.appendTag(n),
                            this.editTag(n, {
                                skipValidation: !0
                            })
                    },
                    addTags(e, t, n) {
                        var a = []
                            , r = this.settings
                            , i = []
                            , o = document.createDocumentFragment();
                        if (n = n || r.skipInvalid,
                        !e || 0 == e.length)
                            return a;
                        switch (e = this.normalizeTags(e),
                            r.mode) {
                            case "mix":
                                return this.addMixTags(e);
                            case "select":
                                t = !1,
                                    this.removeAllTags()
                        }
                        return this.DOM.input.removeAttribute("style"),
                            e.forEach((e=>{
                                    var t, s = {}, l = Object.assign({}, e, {
                                        value: e.value + ""
                                    });
                                    if (e = Object.assign({}, l),
                                        r.transformTag.call(this, e),
                                        e.__isValid = this.hasMaxTags() || this.validateTag(e),
                                    !0 !== e.__isValid) {
                                        if (n)
                                            return;
                                        if (m(s, this.getInvalidTagAttrs(e, e.__isValid), {
                                            __preInvalidData: l
                                        }),
                                        e.__isValid == this.TEXTS.duplicate && this.flashTag(this.getTagElmByValue(e.value)),
                                            !r.createInvalidTags)
                                            return void i.push(e.value)
                                    }
                                    if ("readonly"in e && (e.readonly ? s["aria-readonly"] = !0 : delete e.readonly),
                                        t = this.createTagElem(e, s),
                                        a.push(t),
                                    "select" == r.mode)
                                        return this.selectTag(t, e);
                                    o.appendChild(t),
                                        e.__isValid && !0 === e.__isValid ? (this.value.push(e),
                                            this.trigger("add", {
                                                tag: t,
                                                index: this.value.length - 1,
                                                data: e
                                            })) : (this.trigger("invalid", {
                                            data: e,
                                            index: this.value.length,
                                            tag: t,
                                            message: e.__isValid
                                        }),
                                        r.keepInvalidTags || setTimeout((()=>this.removeTags(t, !0)), 1e3)),
                                        this.dropdown.position()
                                }
                            )),
                            this.appendTag(o),
                            this.update(),
                        e.length && t && (this.input.set.call(this, r.createInvalidTags ? "" : i.join(r._delimiters)),
                            this.setRangeAtStartEnd(!1, this.DOM.input)),
                        r.dropdown.enabled && this.dropdown.refilter(),
                            a
                    },
                    addMixTags(e) {
                        if ((e = this.normalizeTags(e))[0].prefix || this.state.tag)
                            return this.prefixedTextToTag(e[0]);
                        var t = document.createDocumentFragment();
                        return e.forEach((e=>{
                                var n = this.createTagElem(e);
                                t.appendChild(n)
                            }
                        )),
                            this.appendMixTags(t),
                            t
                    },
                    appendMixTags(e) {
                        var t = !!this.state.selection;
                        t ? this.injectAtCaret(e) : (this.DOM.input.focus(),
                            (t = this.setStateSelection()).range.setStart(this.DOM.input, t.range.endOffset),
                            t.range.setEnd(this.DOM.input, t.range.endOffset),
                            this.DOM.input.appendChild(e),
                            this.updateValueByDOMTags(),
                            this.update())
                    },
                    prefixedTextToTag(e) {
                        var t, n = this.settings, a = this.state.tag.delimiters;
                        if (n.transformTag.call(this, e),
                            e.prefix = e.prefix || this.state.tag ? this.state.tag.prefix : (n.pattern.source || n.pattern)[0],
                            t = this.createTagElem(e),
                        this.replaceTextWithNode(t) || this.DOM.input.appendChild(t),
                            setTimeout((()=>t.classList.add(this.settings.classNames.tagNoAnimation)), 300),
                            this.value.push(e),
                            this.update(),
                            !a) {
                            var r = this.insertAfterTag(t) || t;
                            setTimeout(w, 0, r)
                        }
                        return this.state.tag = null,
                            this.trigger("add", m({}, {
                                tag: t
                            }, {
                                data: e
                            })),
                            t
                    },
                    appendTag(e) {
                        var t = this.DOM
                            , n = t.input;
                        t.scope.insertBefore(e, n)
                    },
                    createTagElem(e, n) {
                        e.__tagId = f();
                        var a, r = m({}, e, t({
                            value: u(e.value + "")
                        }, n));
                        return function(e) {
                            for (var t, n = document.createNodeIterator(e, NodeFilter.SHOW_TEXT, null, !1); t = n.nextNode(); )
                                t.textContent.trim() || t.parentNode.removeChild(t)
                        }(a = this.parseTemplate("tag", [r, this])),
                            v(a, e),
                            a
                    },
                    reCheckInvalidTags() {
                        var e = this.settings;
                        this.getTagElms(e.classNames.tagNotAllowed).forEach(((t,n)=>{
                                var a = v(t)
                                    , r = this.hasMaxTags()
                                    , i = this.validateTag(a)
                                    , o = !0 === i && !r;
                                if ("select" == e.mode && this.toggleScopeValidation(i),
                                    o)
                                    return a = a.__preInvalidData ? a.__preInvalidData : {
                                        value: a.value
                                    },
                                        this.replaceTag(t, a);
                                t.title = r || i
                            }
                        ))
                    },
                    removeTags(e, t, n) {
                        var a, r = this.settings;
                        if (e = e && e instanceof HTMLElement ? [e] : e instanceof Array ? e : e ? [e] : [this.getLastTag()],
                            a = e.reduce(((e,t)=>{
                                    t && "string" == typeof t && (t = this.getTagElmByValue(t));
                                    var n = v(t);
                                    return t && n && !n.readonly && e.push({
                                        node: t,
                                        idx: this.getTagIdx(n),
                                        data: v(t, {
                                            __removed: !0
                                        })
                                    }),
                                        e
                                }
                            ), []),
                            n = "number" == typeof n ? n : this.CSSVars.tagHideTransition,
                        "select" == r.mode && (n = 0,
                            this.input.set.call(this)),
                        1 == a.length && "select" != r.mode && a[0].node.classList.contains(r.classNames.tagNotAllowed) && (t = !0),
                            a.length)
                            return r.hooks.beforeRemoveTag(a, {
                                tagify: this
                            }).then((()=>{
                                    function e(e) {
                                        e.node.parentNode && (e.node.parentNode.removeChild(e.node),
                                            t ? r.keepInvalidTags && this.trigger("remove", {
                                                tag: e.node,
                                                index: e.idx
                                            }) : (this.trigger("remove", {
                                                tag: e.node,
                                                index: e.idx,
                                                data: e.data
                                            }),
                                                this.dropdown.refilter(),
                                                this.dropdown.position(),
                                                this.DOM.input.normalize(),
                                            r.keepInvalidTags && this.reCheckInvalidTags()))
                                    }
                                    n && n > 10 && 1 == a.length ? function(t) {
                                        t.node.style.width = parseFloat(window.getComputedStyle(t.node).width) + "px",
                                            document.body.clientTop,
                                            t.node.classList.add(r.classNames.tagHide),
                                            setTimeout(e.bind(this), n, t)
                                    }
                                        .call(this, a[0]) : a.forEach(e.bind(this)),
                                    t || (this.removeTagsFromValue(a.map((e=>e.node))),
                                        this.update(),
                                    "select" == r.mode && this.setContentEditable(!0))
                                }
                            )).catch((e=>{}
                            ))
                    },
                    removeTagsFromDOM() {
                        [].slice.call(this.getTagElms()).forEach((e=>e.parentNode.removeChild(e)))
                    },
                    removeTagsFromValue(e) {
                        (e = Array.isArray(e) ? e : [e]).forEach((e=>{
                                var t = v(e)
                                    , n = this.getTagIdx(t);
                                n > -1 && this.value.splice(n, 1)
                            }
                        ))
                    },
                    removeAllTags(e) {
                        e = e || {},
                            this.value = [],
                            "mix" == this.settings.mode ? this.DOM.input.innerHTML = "" : this.removeTagsFromDOM(),
                            this.dropdown.refilter(),
                            this.dropdown.position(),
                        this.state.dropdown.visible && setTimeout((()=>{
                                this.DOM.input.focus()
                            }
                        )),
                        "select" == this.settings.mode && (this.input.set.call(this),
                            this.setContentEditable(!0)),
                            this.update(e)
                    },
                    postUpdate() {
                        this.state.blockChangeEvent = !1;
                        var e = this.settings
                            , t = e.classNames
                            , n = "mix" == e.mode ? e.mixMode.integrated ? this.DOM.input.textContent : this.DOM.originalInput.value.trim() : this.value.length + this.input.raw.call(this).length;
                        this.toggleClass(t.hasMaxTags, this.value.length >= e.maxTags),
                            this.toggleClass(t.hasNoTags, !this.value.length),
                            this.toggleClass(t.empty, !n),
                        "select" == e.mode && this.toggleScopeValidation(this.value?.[0]?.__isValid)
                    },
                    setOriginalInputValue(e) {
                        var t = this.DOM.originalInput;
                        this.settings.mixMode.integrated || (t.value = e,
                            t.tagifyValue = t.value,
                            this.setPersistedData(e, "value"))
                    },
                    update(e) {
                        clearTimeout(this.debouncedUpdateTimeout),
                            this.debouncedUpdateTimeout = setTimeout(function() {
                                var t = this.getInputValue();
                                this.setOriginalInputValue(t),
                                this.settings.onChangeAfterBlur && (e || {}).withoutChangeEvent || this.state.blockChangeEvent || this.triggerChangeEvent(),
                                    this.postUpdate()
                            }
                                .bind(this), 100)
                    },
                    getInputValue() {
                        var e = this.getCleanValue();
                        return "mix" == this.settings.mode ? this.getMixedTagsAsString(e) : e.length ? this.settings.originalInputValueFormat ? this.settings.originalInputValueFormat(e) : JSON.stringify(e) : ""
                    },
                    getCleanValue(e) {
                        return i(e || this.value, this.dataProps)
                    },
                    getMixedTagsAsString() {
                        var e = ""
                            , t = this
                            , n = this.settings
                            , a = n.originalInputValueFormat || JSON.stringify
                            , r = n.mixTagsInterpolator;
                        return function n(i) {
                            i.childNodes.forEach((i=>{
                                    if (1 == i.nodeType) {
                                        const s = v(i);
                                        if ("BR" == i.tagName && (e += "\r\n"),
                                        s && _.call(t, i)) {
                                            if (s.__removed)
                                                return;
                                            e += r[0] + a(o(s, t.dataProps)) + r[1]
                                        } else
                                            i.getAttribute("style") || ["B", "I", "U"].includes(i.tagName) ? e += i.textContent : "DIV" != i.tagName && "P" != i.tagName || (e += "\r\n",
                                                n(i))
                                    } else
                                        e += i.textContent
                                }
                            ))
                        }(this.DOM.input),
                            e
                    }
                },
                    O.prototype.removeTag = O.prototype.removeTags,
                    O
            }()
        },
        184: function(e, t) {
            var n;
            !function() {
                "use strict";
                var a = {}.hasOwnProperty;
                function r() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var i = typeof n;
                            if ("string" === i || "number" === i)
                                e.push(n);
                            else if (Array.isArray(n)) {
                                if (n.length) {
                                    var o = r.apply(null, n);
                                    o && e.push(o)
                                }
                            } else if ("object" === i) {
                                if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                                    e.push(n.toString());
                                    continue
                                }
                                for (var s in n)
                                    a.call(n, s) && n[s] && e.push(s)
                            }
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (r.default = r,
                    e.exports = r) : void 0 === (n = function() {
                    return r
                }
                    .apply(t, [])) || (e.exports = n)
            }()
        },
        787: function(e, t, n) {
            var a;
            (function() {
                    function r(e) {
                        "use strict";
                        var t = {
                            omitExtraWLInCodeBlocks: {
                                defaultValue: !1,
                                describe: "Omit the default extra whiteline added to code blocks",
                                type: "boolean"
                            },
                            noHeaderId: {
                                defaultValue: !1,
                                describe: "Turn on/off generated header id",
                                type: "boolean"
                            },
                            prefixHeaderId: {
                                defaultValue: !1,
                                describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
                                type: "string"
                            },
                            rawPrefixHeaderId: {
                                defaultValue: !1,
                                describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
                                type: "boolean"
                            },
                            ghCompatibleHeaderId: {
                                defaultValue: !1,
                                describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
                                type: "boolean"
                            },
                            rawHeaderId: {
                                defaultValue: !1,
                                describe: "Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",
                                type: "boolean"
                            },
                            headerLevelStart: {
                                defaultValue: !1,
                                describe: "The header blocks level start",
                                type: "integer"
                            },
                            parseImgDimensions: {
                                defaultValue: !1,
                                describe: "Turn on/off image dimension parsing",
                                type: "boolean"
                            },
                            simplifiedAutoLink: {
                                defaultValue: !1,
                                describe: "Turn on/off GFM autolink style",
                                type: "boolean"
                            },
                            excludeTrailingPunctuationFromURLs: {
                                defaultValue: !1,
                                describe: "Excludes trailing punctuation from links generated with autoLinking",
                                type: "boolean"
                            },
                            literalMidWordUnderscores: {
                                defaultValue: !1,
                                describe: "Parse midword underscores as literal underscores",
                                type: "boolean"
                            },
                            literalMidWordAsterisks: {
                                defaultValue: !1,
                                describe: "Parse midword asterisks as literal asterisks",
                                type: "boolean"
                            },
                            strikethrough: {
                                defaultValue: !1,
                                describe: "Turn on/off strikethrough support",
                                type: "boolean"
                            },
                            tables: {
                                defaultValue: !1,
                                describe: "Turn on/off tables support",
                                type: "boolean"
                            },
                            tablesHeaderId: {
                                defaultValue: !1,
                                describe: "Add an id to table headers",
                                type: "boolean"
                            },
                            ghCodeBlocks: {
                                defaultValue: !0,
                                describe: "Turn on/off GFM fenced code blocks support",
                                type: "boolean"
                            },
                            tasklists: {
                                defaultValue: !1,
                                describe: "Turn on/off GFM tasklist support",
                                type: "boolean"
                            },
                            smoothLivePreview: {
                                defaultValue: !1,
                                describe: "Prevents weird effects in live previews due to incomplete input",
                                type: "boolean"
                            },
                            smartIndentationFix: {
                                defaultValue: !1,
                                description: "Tries to smartly fix indentation in es6 strings",
                                type: "boolean"
                            },
                            disableForced4SpacesIndentedSublists: {
                                defaultValue: !1,
                                description: "Disables the requirement of indenting nested sublists by 4 spaces",
                                type: "boolean"
                            },
                            simpleLineBreaks: {
                                defaultValue: !1,
                                description: "Parses simple line breaks as <br> (GFM Style)",
                                type: "boolean"
                            },
                            requireSpaceBeforeHeadingText: {
                                defaultValue: !1,
                                description: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
                                type: "boolean"
                            },
                            ghMentions: {
                                defaultValue: !1,
                                description: "Enables github @mentions",
                                type: "boolean"
                            },
                            ghMentionsLink: {
                                defaultValue: "https://github.com/{u}",
                                description: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
                                type: "string"
                            },
                            encodeEmails: {
                                defaultValue: !0,
                                description: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
                                type: "boolean"
                            },
                            openLinksInNewWindow: {
                                defaultValue: !1,
                                description: "Open all links in new windows",
                                type: "boolean"
                            },
                            backslashEscapesHTMLTags: {
                                defaultValue: !1,
                                description: "Support for HTML Tag escaping. ex: <div>foo</div>",
                                type: "boolean"
                            },
                            emoji: {
                                defaultValue: !1,
                                description: "Enable emoji support. Ex: `this is a :smile: emoji`",
                                type: "boolean"
                            },
                            underline: {
                                defaultValue: !1,
                                description: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
                                type: "boolean"
                            },
                            completeHTMLDocument: {
                                defaultValue: !1,
                                description: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
                                type: "boolean"
                            },
                            metadata: {
                                defaultValue: !1,
                                description: "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
                                type: "boolean"
                            },
                            splitAdjacentBlockquotes: {
                                defaultValue: !1,
                                description: "Split adjacent blockquote blocks",
                                type: "boolean"
                            }
                        };
                        if (!1 === e)
                            return JSON.parse(JSON.stringify(t));
                        var n = {};
                        for (var a in t)
                            t.hasOwnProperty(a) && (n[a] = t[a].defaultValue);
                        return n
                    }
                    var i = {}
                        , o = {}
                        , s = {}
                        , l = r(!0)
                        , c = "vanilla"
                        , u = {
                        github: {
                            omitExtraWLInCodeBlocks: !0,
                            simplifiedAutoLink: !0,
                            excludeTrailingPunctuationFromURLs: !0,
                            literalMidWordUnderscores: !0,
                            strikethrough: !0,
                            tables: !0,
                            tablesHeaderId: !0,
                            ghCodeBlocks: !0,
                            tasklists: !0,
                            disableForced4SpacesIndentedSublists: !0,
                            simpleLineBreaks: !0,
                            requireSpaceBeforeHeadingText: !0,
                            ghCompatibleHeaderId: !0,
                            ghMentions: !0,
                            backslashEscapesHTMLTags: !0,
                            emoji: !0,
                            splitAdjacentBlockquotes: !0
                        },
                        original: {
                            noHeaderId: !0,
                            ghCodeBlocks: !1
                        },
                        ghost: {
                            omitExtraWLInCodeBlocks: !0,
                            parseImgDimensions: !0,
                            simplifiedAutoLink: !0,
                            excludeTrailingPunctuationFromURLs: !0,
                            literalMidWordUnderscores: !0,
                            strikethrough: !0,
                            tables: !0,
                            tablesHeaderId: !0,
                            ghCodeBlocks: !0,
                            tasklists: !0,
                            smoothLivePreview: !0,
                            simpleLineBreaks: !0,
                            requireSpaceBeforeHeadingText: !0,
                            ghMentions: !1,
                            encodeEmails: !0
                        },
                        vanilla: r(!0),
                        allOn: function() {
                            "use strict";
                            var e = r(!0)
                                , t = {};
                            for (var n in e)
                                e.hasOwnProperty(n) && (t[n] = !0);
                            return t
                        }()
                    };
                    function d(e, t) {
                        "use strict";
                        var n = t ? "Error in " + t + " extension->" : "Error in unnamed extension"
                            , a = {
                            valid: !0,
                            error: ""
                        };
                        i.helper.isArray(e) || (e = [e]);
                        for (var r = 0; r < e.length; ++r) {
                            var o = n + " sub-extension " + r + ": "
                                , s = e[r];
                            if ("object" != typeof s)
                                return a.valid = !1,
                                    a.error = o + "must be an object, but " + typeof s + " given",
                                    a;
                            if (!i.helper.isString(s.type))
                                return a.valid = !1,
                                    a.error = o + 'property "type" must be a string, but ' + typeof s.type + " given",
                                    a;
                            var l = s.type = s.type.toLowerCase();
                            if ("language" === l && (l = s.type = "lang"),
                            "html" === l && (l = s.type = "output"),
                            "lang" !== l && "output" !== l && "listener" !== l)
                                return a.valid = !1,
                                    a.error = o + "type " + l + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"',
                                    a;
                            if ("listener" === l) {
                                if (i.helper.isUndefined(s.listeners))
                                    return a.valid = !1,
                                        a.error = o + '. Extensions of type "listener" must have a property called "listeners"',
                                        a
                            } else if (i.helper.isUndefined(s.filter) && i.helper.isUndefined(s.regex))
                                return a.valid = !1,
                                    a.error = o + l + ' extensions must define either a "regex" property or a "filter" method',
                                    a;
                            if (s.listeners) {
                                if ("object" != typeof s.listeners)
                                    return a.valid = !1,
                                        a.error = o + '"listeners" property must be an object but ' + typeof s.listeners + " given",
                                        a;
                                for (var c in s.listeners)
                                    if (s.listeners.hasOwnProperty(c) && "function" != typeof s.listeners[c])
                                        return a.valid = !1,
                                            a.error = o + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + c + " must be a function but " + typeof s.listeners[c] + " given",
                                            a
                            }
                            if (s.filter) {
                                if ("function" != typeof s.filter)
                                    return a.valid = !1,
                                        a.error = o + '"filter" must be a function, but ' + typeof s.filter + " given",
                                        a
                            } else if (s.regex) {
                                if (i.helper.isString(s.regex) && (s.regex = new RegExp(s.regex,"g")),
                                    !(s.regex instanceof RegExp))
                                    return a.valid = !1,
                                        a.error = o + '"regex" property must either be a string or a RegExp object, but ' + typeof s.regex + " given",
                                        a;
                                if (i.helper.isUndefined(s.replace))
                                    return a.valid = !1,
                                        a.error = o + '"regex" extensions must implement a replace string or function',
                                        a
                            }
                        }
                        return a
                    }
                    function m(e, t) {
                        "use strict";
                        return "¨E" + t.charCodeAt(0) + "E"
                    }
                    i.helper = {},
                        i.extensions = {},
                        i.setOption = function(e, t) {
                            "use strict";
                            return l[e] = t,
                                this
                        }
                        ,
                        i.getOption = function(e) {
                            "use strict";
                            return l[e]
                        }
                        ,
                        i.getOptions = function() {
                            "use strict";
                            return l
                        }
                        ,
                        i.resetOptions = function() {
                            "use strict";
                            l = r(!0)
                        }
                        ,
                        i.setFlavor = function(e) {
                            "use strict";
                            if (!u.hasOwnProperty(e))
                                throw Error(e + " flavor was not found");
                            i.resetOptions();
                            var t = u[e];
                            for (var n in c = e,
                                t)
                                t.hasOwnProperty(n) && (l[n] = t[n])
                        }
                        ,
                        i.getFlavor = function() {
                            "use strict";
                            return c
                        }
                        ,
                        i.getFlavorOptions = function(e) {
                            "use strict";
                            if (u.hasOwnProperty(e))
                                return u[e]
                        }
                        ,
                        i.getDefaultOptions = function(e) {
                            "use strict";
                            return r(e)
                        }
                        ,
                        i.subParser = function(e, t) {
                            "use strict";
                            if (i.helper.isString(e)) {
                                if (void 0 === t) {
                                    if (o.hasOwnProperty(e))
                                        return o[e];
                                    throw Error("SubParser named " + e + " not registered!")
                                }
                                o[e] = t
                            }
                        }
                        ,
                        i.extension = function(e, t) {
                            "use strict";
                            if (!i.helper.isString(e))
                                throw Error("Extension 'name' must be a string");
                            if (e = i.helper.stdExtName(e),
                                i.helper.isUndefined(t)) {
                                if (!s.hasOwnProperty(e))
                                    throw Error("Extension named " + e + " is not registered!");
                                return s[e]
                            }
                            "function" == typeof t && (t = t()),
                            i.helper.isArray(t) || (t = [t]);
                            var n = d(t, e);
                            if (!n.valid)
                                throw Error(n.error);
                            s[e] = t
                        }
                        ,
                        i.getAllExtensions = function() {
                            "use strict";
                            return s
                        }
                        ,
                        i.removeExtension = function(e) {
                            "use strict";
                            delete s[e]
                        }
                        ,
                        i.resetExtensions = function() {
                            "use strict";
                            s = {}
                        }
                        ,
                        i.validateExtension = function(e) {
                            "use strict";
                            var t = d(e, null);
                            return !!t.valid || (console.warn(t.error),
                                !1)
                        }
                        ,
                    i.hasOwnProperty("helper") || (i.helper = {}),
                        i.helper.isString = function(e) {
                            "use strict";
                            return "string" == typeof e || e instanceof String
                        }
                        ,
                        i.helper.isFunction = function(e) {
                            "use strict";
                            return e && "[object Function]" === {}.toString.call(e)
                        }
                        ,
                        i.helper.isArray = function(e) {
                            "use strict";
                            return Array.isArray(e)
                        }
                        ,
                        i.helper.isUndefined = function(e) {
                            "use strict";
                            return void 0 === e
                        }
                        ,
                        i.helper.forEach = function(e, t) {
                            "use strict";
                            if (i.helper.isUndefined(e))
                                throw new Error("obj param is required");
                            if (i.helper.isUndefined(t))
                                throw new Error("callback param is required");
                            if (!i.helper.isFunction(t))
                                throw new Error("callback param must be a function/closure");
                            if ("function" == typeof e.forEach)
                                e.forEach(t);
                            else if (i.helper.isArray(e))
                                for (var n = 0; n < e.length; n++)
                                    t(e[n], n, e);
                            else {
                                if ("object" != typeof e)
                                    throw new Error("obj does not seem to be an array or an iterable object");
                                for (var a in e)
                                    e.hasOwnProperty(a) && t(e[a], a, e)
                            }
                        }
                        ,
                        i.helper.stdExtName = function(e) {
                            "use strict";
                            return e.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase()
                        }
                        ,
                        i.helper.escapeCharactersCallback = m,
                        i.helper.escapeCharacters = function(e, t, n) {
                            "use strict";
                            var a = "([" + t.replace(/([\[\]\\])/g, "\\$1") + "])";
                            n && (a = "\\\\" + a);
                            var r = new RegExp(a,"g");
                            return e = e.replace(r, m)
                        }
                        ,
                        i.helper.unescapeHTMLEntities = function(e) {
                            "use strict";
                            return e.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
                        }
                    ;
                    var p = function(e, t, n, a) {
                        "use strict";
                        var r, i, o, s, l, c = a || "", u = c.indexOf("g") > -1, d = new RegExp(t + "|" + n,"g" + c.replace(/g/g, "")), m = new RegExp(t,c.replace(/g/g, "")), p = [];
                        do {
                            for (r = 0; o = d.exec(e); )
                                if (m.test(o[0]))
                                    r++ || (s = (i = d.lastIndex) - o[0].length);
                                else if (r && !--r) {
                                    l = o.index + o[0].length;
                                    var h = {
                                        left: {
                                            start: s,
                                            end: i
                                        },
                                        match: {
                                            start: i,
                                            end: o.index
                                        },
                                        right: {
                                            start: o.index,
                                            end: l
                                        },
                                        wholeMatch: {
                                            start: s,
                                            end: l
                                        }
                                    };
                                    if (p.push(h),
                                        !u)
                                        return p
                                }
                        } while (r && (d.lastIndex = i));
                        return p
                    };
                    i.helper.matchRecursiveRegExp = function(e, t, n, a) {
                        "use strict";
                        for (var r = p(e, t, n, a), i = [], o = 0; o < r.length; ++o)
                            i.push([e.slice(r[o].wholeMatch.start, r[o].wholeMatch.end), e.slice(r[o].match.start, r[o].match.end), e.slice(r[o].left.start, r[o].left.end), e.slice(r[o].right.start, r[o].right.end)]);
                        return i
                    }
                        ,
                        i.helper.replaceRecursiveRegExp = function(e, t, n, a, r) {
                            "use strict";
                            if (!i.helper.isFunction(t)) {
                                var o = t;
                                t = function() {
                                    return o
                                }
                            }
                            var s = p(e, n, a, r)
                                , l = e
                                , c = s.length;
                            if (c > 0) {
                                var u = [];
                                0 !== s[0].wholeMatch.start && u.push(e.slice(0, s[0].wholeMatch.start));
                                for (var d = 0; d < c; ++d)
                                    u.push(t(e.slice(s[d].wholeMatch.start, s[d].wholeMatch.end), e.slice(s[d].match.start, s[d].match.end), e.slice(s[d].left.start, s[d].left.end), e.slice(s[d].right.start, s[d].right.end))),
                                    d < c - 1 && u.push(e.slice(s[d].wholeMatch.end, s[d + 1].wholeMatch.start));
                                s[c - 1].wholeMatch.end < e.length && u.push(e.slice(s[c - 1].wholeMatch.end)),
                                    l = u.join("")
                            }
                            return l
                        }
                        ,
                        i.helper.regexIndexOf = function(e, t, n) {
                            "use strict";
                            if (!i.helper.isString(e))
                                throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
                            if (t instanceof RegExp == !1)
                                throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
                            var a = e.substring(n || 0).search(t);
                            return a >= 0 ? a + (n || 0) : a
                        }
                        ,
                        i.helper.splitAtIndex = function(e, t) {
                            "use strict";
                            if (!i.helper.isString(e))
                                throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
                            return [e.substring(0, t), e.substring(t)]
                        }
                        ,
                        i.helper.encodeEmailAddress = function(e) {
                            "use strict";
                            var t = [function(e) {
                                return "&#" + e.charCodeAt(0) + ";"
                            }
                                , function(e) {
                                    return "&#x" + e.charCodeAt(0).toString(16) + ";"
                                }
                                , function(e) {
                                    return e
                                }
                            ];
                            return e = e.replace(/./g, (function(e) {
                                    if ("@" === e)
                                        e = t[Math.floor(2 * Math.random())](e);
                                    else {
                                        var n = Math.random();
                                        e = n > .9 ? t[2](e) : n > .45 ? t[1](e) : t[0](e)
                                    }
                                    return e
                                }
                            ))
                        }
                        ,
                        i.helper.padEnd = function(e, t, n) {
                            "use strict";
                            return t >>= 0,
                                n = String(n || " "),
                                e.length > t ? String(e) : ((t -= e.length) > n.length && (n += n.repeat(t / n.length)),
                                String(e) + n.slice(0, t))
                        }
                        ,
                    "undefined" == typeof console && (console = {
                        warn: function(e) {
                            "use strict";
                            alert(e)
                        },
                        log: function(e) {
                            "use strict";
                            alert(e)
                        },
                        error: function(e) {
                            "use strict";
                            throw e
                        }
                    }),
                        i.helper.regexes = {
                            asteriskDashAndColon: /([*_:~])/g
                        },
                        i.helper.emojis = {
                            "+1": "👍",
                            "-1": "👎",
                            100: "💯",
                            1234: "🔢",
                            "1st_place_medal": "🥇",
                            "2nd_place_medal": "🥈",
                            "3rd_place_medal": "🥉",
                            "8ball": "🎱",
                            a: "🅰️",
                            ab: "🆎",
                            abc: "🔤",
                            abcd: "🔡",
                            accept: "🉑",
                            aerial_tramway: "🚡",
                            airplane: "✈️",
                            alarm_clock: "⏰",
                            alembic: "⚗️",
                            alien: "👽",
                            ambulance: "🚑",
                            amphora: "🏺",
                            anchor: "⚓️",
                            angel: "👼",
                            anger: "💢",
                            angry: "😠",
                            anguished: "😧",
                            ant: "🐜",
                            apple: "🍎",
                            aquarius: "♒️",
                            aries: "♈️",
                            arrow_backward: "◀️",
                            arrow_double_down: "⏬",
                            arrow_double_up: "⏫",
                            arrow_down: "⬇️",
                            arrow_down_small: "🔽",
                            arrow_forward: "▶️",
                            arrow_heading_down: "⤵️",
                            arrow_heading_up: "⤴️",
                            arrow_left: "⬅️",
                            arrow_lower_left: "↙️",
                            arrow_lower_right: "↘️",
                            arrow_right: "➡️",
                            arrow_right_hook: "↪️",
                            arrow_up: "⬆️",
                            arrow_up_down: "↕️",
                            arrow_up_small: "🔼",
                            arrow_upper_left: "↖️",
                            arrow_upper_right: "↗️",
                            arrows_clockwise: "🔃",
                            arrows_counterclockwise: "🔄",
                            art: "🎨",
                            articulated_lorry: "🚛",
                            artificial_satellite: "🛰",
                            astonished: "😲",
                            athletic_shoe: "👟",
                            atm: "🏧",
                            atom_symbol: "⚛️",
                            avocado: "🥑",
                            b: "🅱️",
                            baby: "👶",
                            baby_bottle: "🍼",
                            baby_chick: "🐤",
                            baby_symbol: "🚼",
                            back: "🔙",
                            bacon: "🥓",
                            badminton: "🏸",
                            baggage_claim: "🛄",
                            baguette_bread: "🥖",
                            balance_scale: "⚖️",
                            balloon: "🎈",
                            ballot_box: "🗳",
                            ballot_box_with_check: "☑️",
                            bamboo: "🎍",
                            banana: "🍌",
                            bangbang: "‼️",
                            bank: "🏦",
                            bar_chart: "📊",
                            barber: "💈",
                            baseball: "⚾️",
                            basketball: "🏀",
                            basketball_man: "⛹️",
                            basketball_woman: "⛹️&zwj;♀️",
                            bat: "🦇",
                            bath: "🛀",
                            bathtub: "🛁",
                            battery: "🔋",
                            beach_umbrella: "🏖",
                            bear: "🐻",
                            bed: "🛏",
                            bee: "🐝",
                            beer: "🍺",
                            beers: "🍻",
                            beetle: "🐞",
                            beginner: "🔰",
                            bell: "🔔",
                            bellhop_bell: "🛎",
                            bento: "🍱",
                            biking_man: "🚴",
                            bike: "🚲",
                            biking_woman: "🚴&zwj;♀️",
                            bikini: "👙",
                            biohazard: "☣️",
                            bird: "🐦",
                            birthday: "🎂",
                            black_circle: "⚫️",
                            black_flag: "🏴",
                            black_heart: "🖤",
                            black_joker: "🃏",
                            black_large_square: "⬛️",
                            black_medium_small_square: "◾️",
                            black_medium_square: "◼️",
                            black_nib: "✒️",
                            black_small_square: "▪️",
                            black_square_button: "🔲",
                            blonde_man: "👱",
                            blonde_woman: "👱&zwj;♀️",
                            blossom: "🌼",
                            blowfish: "🐡",
                            blue_book: "📘",
                            blue_car: "🚙",
                            blue_heart: "💙",
                            blush: "😊",
                            boar: "🐗",
                            boat: "⛵️",
                            bomb: "💣",
                            book: "📖",
                            bookmark: "🔖",
                            bookmark_tabs: "📑",
                            books: "📚",
                            boom: "💥",
                            boot: "👢",
                            bouquet: "💐",
                            bowing_man: "🙇",
                            bow_and_arrow: "🏹",
                            bowing_woman: "🙇&zwj;♀️",
                            bowling: "🎳",
                            boxing_glove: "🥊",
                            boy: "👦",
                            bread: "🍞",
                            bride_with_veil: "👰",
                            bridge_at_night: "🌉",
                            briefcase: "💼",
                            broken_heart: "💔",
                            bug: "🐛",
                            building_construction: "🏗",
                            bulb: "💡",
                            bullettrain_front: "🚅",
                            bullettrain_side: "🚄",
                            burrito: "🌯",
                            bus: "🚌",
                            business_suit_levitating: "🕴",
                            busstop: "🚏",
                            bust_in_silhouette: "👤",
                            busts_in_silhouette: "👥",
                            butterfly: "🦋",
                            cactus: "🌵",
                            cake: "🍰",
                            calendar: "📆",
                            call_me_hand: "🤙",
                            calling: "📲",
                            camel: "🐫",
                            camera: "📷",
                            camera_flash: "📸",
                            camping: "🏕",
                            cancer: "♋️",
                            candle: "🕯",
                            candy: "🍬",
                            canoe: "🛶",
                            capital_abcd: "🔠",
                            capricorn: "♑️",
                            car: "🚗",
                            card_file_box: "🗃",
                            card_index: "📇",
                            card_index_dividers: "🗂",
                            carousel_horse: "🎠",
                            carrot: "🥕",
                            cat: "🐱",
                            cat2: "🐈",
                            cd: "💿",
                            chains: "⛓",
                            champagne: "🍾",
                            chart: "💹",
                            chart_with_downwards_trend: "📉",
                            chart_with_upwards_trend: "📈",
                            checkered_flag: "🏁",
                            cheese: "🧀",
                            cherries: "🍒",
                            cherry_blossom: "🌸",
                            chestnut: "🌰",
                            chicken: "🐔",
                            children_crossing: "🚸",
                            chipmunk: "🐿",
                            chocolate_bar: "🍫",
                            christmas_tree: "🎄",
                            church: "⛪️",
                            cinema: "🎦",
                            circus_tent: "🎪",
                            city_sunrise: "🌇",
                            city_sunset: "🌆",
                            cityscape: "🏙",
                            cl: "🆑",
                            clamp: "🗜",
                            clap: "👏",
                            clapper: "🎬",
                            classical_building: "🏛",
                            clinking_glasses: "🥂",
                            clipboard: "📋",
                            clock1: "🕐",
                            clock10: "🕙",
                            clock1030: "🕥",
                            clock11: "🕚",
                            clock1130: "🕦",
                            clock12: "🕛",
                            clock1230: "🕧",
                            clock130: "🕜",
                            clock2: "🕑",
                            clock230: "🕝",
                            clock3: "🕒",
                            clock330: "🕞",
                            clock4: "🕓",
                            clock430: "🕟",
                            clock5: "🕔",
                            clock530: "🕠",
                            clock6: "🕕",
                            clock630: "🕡",
                            clock7: "🕖",
                            clock730: "🕢",
                            clock8: "🕗",
                            clock830: "🕣",
                            clock9: "🕘",
                            clock930: "🕤",
                            closed_book: "📕",
                            closed_lock_with_key: "🔐",
                            closed_umbrella: "🌂",
                            cloud: "☁️",
                            cloud_with_lightning: "🌩",
                            cloud_with_lightning_and_rain: "⛈",
                            cloud_with_rain: "🌧",
                            cloud_with_snow: "🌨",
                            clown_face: "🤡",
                            clubs: "♣️",
                            cocktail: "🍸",
                            coffee: "☕️",
                            coffin: "⚰️",
                            cold_sweat: "😰",
                            comet: "☄️",
                            computer: "💻",
                            computer_mouse: "🖱",
                            confetti_ball: "🎊",
                            confounded: "😖",
                            confused: "😕",
                            congratulations: "㊗️",
                            construction: "🚧",
                            construction_worker_man: "👷",
                            construction_worker_woman: "👷&zwj;♀️",
                            control_knobs: "🎛",
                            convenience_store: "🏪",
                            cookie: "🍪",
                            cool: "🆒",
                            policeman: "👮",
                            copyright: "©️",
                            corn: "🌽",
                            couch_and_lamp: "🛋",
                            couple: "👫",
                            couple_with_heart_woman_man: "💑",
                            couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
                            couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
                            couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
                            couplekiss_man_woman: "💏",
                            couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
                            cow: "🐮",
                            cow2: "🐄",
                            cowboy_hat_face: "🤠",
                            crab: "🦀",
                            crayon: "🖍",
                            credit_card: "💳",
                            crescent_moon: "🌙",
                            cricket: "🏏",
                            crocodile: "🐊",
                            croissant: "🥐",
                            crossed_fingers: "🤞",
                            crossed_flags: "🎌",
                            crossed_swords: "⚔️",
                            crown: "👑",
                            cry: "😢",
                            crying_cat_face: "😿",
                            crystal_ball: "🔮",
                            cucumber: "🥒",
                            cupid: "💘",
                            curly_loop: "➰",
                            currency_exchange: "💱",
                            curry: "🍛",
                            custard: "🍮",
                            customs: "🛃",
                            cyclone: "🌀",
                            dagger: "🗡",
                            dancer: "💃",
                            dancing_women: "👯",
                            dancing_men: "👯&zwj;♂️",
                            dango: "🍡",
                            dark_sunglasses: "🕶",
                            dart: "🎯",
                            dash: "💨",
                            date: "📅",
                            deciduous_tree: "🌳",
                            deer: "🦌",
                            department_store: "🏬",
                            derelict_house: "🏚",
                            desert: "🏜",
                            desert_island: "🏝",
                            desktop_computer: "🖥",
                            male_detective: "🕵️",
                            diamond_shape_with_a_dot_inside: "💠",
                            diamonds: "♦️",
                            disappointed: "😞",
                            disappointed_relieved: "😥",
                            dizzy: "💫",
                            dizzy_face: "😵",
                            do_not_litter: "🚯",
                            dog: "🐶",
                            dog2: "🐕",
                            dollar: "💵",
                            dolls: "🎎",
                            dolphin: "🐬",
                            door: "🚪",
                            doughnut: "🍩",
                            dove: "🕊",
                            dragon: "🐉",
                            dragon_face: "🐲",
                            dress: "👗",
                            dromedary_camel: "🐪",
                            drooling_face: "🤤",
                            droplet: "💧",
                            drum: "🥁",
                            duck: "🦆",
                            dvd: "📀",
                            "e-mail": "📧",
                            eagle: "🦅",
                            ear: "👂",
                            ear_of_rice: "🌾",
                            earth_africa: "🌍",
                            earth_americas: "🌎",
                            earth_asia: "🌏",
                            egg: "🥚",
                            eggplant: "🍆",
                            eight_pointed_black_star: "✴️",
                            eight_spoked_asterisk: "✳️",
                            electric_plug: "🔌",
                            elephant: "🐘",
                            email: "✉️",
                            end: "🔚",
                            envelope_with_arrow: "📩",
                            euro: "💶",
                            european_castle: "🏰",
                            european_post_office: "🏤",
                            evergreen_tree: "🌲",
                            exclamation: "❗️",
                            expressionless: "😑",
                            eye: "👁",
                            eye_speech_bubble: "👁&zwj;🗨",
                            eyeglasses: "👓",
                            eyes: "👀",
                            face_with_head_bandage: "🤕",
                            face_with_thermometer: "🤒",
                            fist_oncoming: "👊",
                            factory: "🏭",
                            fallen_leaf: "🍂",
                            family_man_woman_boy: "👪",
                            family_man_boy: "👨&zwj;👦",
                            family_man_boy_boy: "👨&zwj;👦&zwj;👦",
                            family_man_girl: "👨&zwj;👧",
                            family_man_girl_boy: "👨&zwj;👧&zwj;👦",
                            family_man_girl_girl: "👨&zwj;👧&zwj;👧",
                            family_man_man_boy: "👨&zwj;👨&zwj;👦",
                            family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
                            family_man_man_girl: "👨&zwj;👨&zwj;👧",
                            family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
                            family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
                            family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
                            family_man_woman_girl: "👨&zwj;👩&zwj;👧",
                            family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
                            family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
                            family_woman_boy: "👩&zwj;👦",
                            family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
                            family_woman_girl: "👩&zwj;👧",
                            family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
                            family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
                            family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
                            family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
                            family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
                            family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
                            family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
                            fast_forward: "⏩",
                            fax: "📠",
                            fearful: "😨",
                            feet: "🐾",
                            female_detective: "🕵️&zwj;♀️",
                            ferris_wheel: "🎡",
                            ferry: "⛴",
                            field_hockey: "🏑",
                            file_cabinet: "🗄",
                            file_folder: "📁",
                            film_projector: "📽",
                            film_strip: "🎞",
                            fire: "🔥",
                            fire_engine: "🚒",
                            fireworks: "🎆",
                            first_quarter_moon: "🌓",
                            first_quarter_moon_with_face: "🌛",
                            fish: "🐟",
                            fish_cake: "🍥",
                            fishing_pole_and_fish: "🎣",
                            fist_raised: "✊",
                            fist_left: "🤛",
                            fist_right: "🤜",
                            flags: "🎏",
                            flashlight: "🔦",
                            fleur_de_lis: "⚜️",
                            flight_arrival: "🛬",
                            flight_departure: "🛫",
                            floppy_disk: "💾",
                            flower_playing_cards: "🎴",
                            flushed: "😳",
                            fog: "🌫",
                            foggy: "🌁",
                            football: "🏈",
                            footprints: "👣",
                            fork_and_knife: "🍴",
                            fountain: "⛲️",
                            fountain_pen: "🖋",
                            four_leaf_clover: "🍀",
                            fox_face: "🦊",
                            framed_picture: "🖼",
                            free: "🆓",
                            fried_egg: "🍳",
                            fried_shrimp: "🍤",
                            fries: "🍟",
                            frog: "🐸",
                            frowning: "😦",
                            frowning_face: "☹️",
                            frowning_man: "🙍&zwj;♂️",
                            frowning_woman: "🙍",
                            middle_finger: "🖕",
                            fuelpump: "⛽️",
                            full_moon: "🌕",
                            full_moon_with_face: "🌝",
                            funeral_urn: "⚱️",
                            game_die: "🎲",
                            gear: "⚙️",
                            gem: "💎",
                            gemini: "♊️",
                            ghost: "👻",
                            gift: "🎁",
                            gift_heart: "💝",
                            girl: "👧",
                            globe_with_meridians: "🌐",
                            goal_net: "🥅",
                            goat: "🐐",
                            golf: "⛳️",
                            golfing_man: "🏌️",
                            golfing_woman: "🏌️&zwj;♀️",
                            gorilla: "🦍",
                            grapes: "🍇",
                            green_apple: "🍏",
                            green_book: "📗",
                            green_heart: "💚",
                            green_salad: "🥗",
                            grey_exclamation: "❕",
                            grey_question: "❔",
                            grimacing: "😬",
                            grin: "😁",
                            grinning: "😀",
                            guardsman: "💂",
                            guardswoman: "💂&zwj;♀️",
                            guitar: "🎸",
                            gun: "🔫",
                            haircut_woman: "💇",
                            haircut_man: "💇&zwj;♂️",
                            hamburger: "🍔",
                            hammer: "🔨",
                            hammer_and_pick: "⚒",
                            hammer_and_wrench: "🛠",
                            hamster: "🐹",
                            hand: "✋",
                            handbag: "👜",
                            handshake: "🤝",
                            hankey: "💩",
                            hatched_chick: "🐥",
                            hatching_chick: "🐣",
                            headphones: "🎧",
                            hear_no_evil: "🙉",
                            heart: "❤️",
                            heart_decoration: "💟",
                            heart_eyes: "😍",
                            heart_eyes_cat: "😻",
                            heartbeat: "💓",
                            heartpulse: "💗",
                            hearts: "♥️",
                            heavy_check_mark: "✔️",
                            heavy_division_sign: "➗",
                            heavy_dollar_sign: "💲",
                            heavy_heart_exclamation: "❣️",
                            heavy_minus_sign: "➖",
                            heavy_multiplication_x: "✖️",
                            heavy_plus_sign: "➕",
                            helicopter: "🚁",
                            herb: "🌿",
                            hibiscus: "🌺",
                            high_brightness: "🔆",
                            high_heel: "👠",
                            hocho: "🔪",
                            hole: "🕳",
                            honey_pot: "🍯",
                            horse: "🐴",
                            horse_racing: "🏇",
                            hospital: "🏥",
                            hot_pepper: "🌶",
                            hotdog: "🌭",
                            hotel: "🏨",
                            hotsprings: "♨️",
                            hourglass: "⌛️",
                            hourglass_flowing_sand: "⏳",
                            house: "🏠",
                            house_with_garden: "🏡",
                            houses: "🏘",
                            hugs: "🤗",
                            hushed: "😯",
                            ice_cream: "🍨",
                            ice_hockey: "🏒",
                            ice_skate: "⛸",
                            icecream: "🍦",
                            id: "🆔",
                            ideograph_advantage: "🉐",
                            imp: "👿",
                            inbox_tray: "📥",
                            incoming_envelope: "📨",
                            tipping_hand_woman: "💁",
                            information_source: "ℹ️",
                            innocent: "😇",
                            interrobang: "⁉️",
                            iphone: "📱",
                            izakaya_lantern: "🏮",
                            jack_o_lantern: "🎃",
                            japan: "🗾",
                            japanese_castle: "🏯",
                            japanese_goblin: "👺",
                            japanese_ogre: "👹",
                            jeans: "👖",
                            joy: "😂",
                            joy_cat: "😹",
                            joystick: "🕹",
                            kaaba: "🕋",
                            key: "🔑",
                            keyboard: "⌨️",
                            keycap_ten: "🔟",
                            kick_scooter: "🛴",
                            kimono: "👘",
                            kiss: "💋",
                            kissing: "😗",
                            kissing_cat: "😽",
                            kissing_closed_eyes: "😚",
                            kissing_heart: "😘",
                            kissing_smiling_eyes: "😙",
                            kiwi_fruit: "🥝",
                            koala: "🐨",
                            koko: "🈁",
                            label: "🏷",
                            large_blue_circle: "🔵",
                            large_blue_diamond: "🔷",
                            large_orange_diamond: "🔶",
                            last_quarter_moon: "🌗",
                            last_quarter_moon_with_face: "🌜",
                            latin_cross: "✝️",
                            laughing: "😆",
                            leaves: "🍃",
                            ledger: "📒",
                            left_luggage: "🛅",
                            left_right_arrow: "↔️",
                            leftwards_arrow_with_hook: "↩️",
                            lemon: "🍋",
                            leo: "♌️",
                            leopard: "🐆",
                            level_slider: "🎚",
                            libra: "♎️",
                            light_rail: "🚈",
                            link: "🔗",
                            lion: "🦁",
                            lips: "👄",
                            lipstick: "💄",
                            lizard: "🦎",
                            lock: "🔒",
                            lock_with_ink_pen: "🔏",
                            lollipop: "🍭",
                            loop: "➿",
                            loud_sound: "🔊",
                            loudspeaker: "📢",
                            love_hotel: "🏩",
                            love_letter: "💌",
                            low_brightness: "🔅",
                            lying_face: "🤥",
                            m: "Ⓜ️",
                            mag: "🔍",
                            mag_right: "🔎",
                            mahjong: "🀄️",
                            mailbox: "📫",
                            mailbox_closed: "📪",
                            mailbox_with_mail: "📬",
                            mailbox_with_no_mail: "📭",
                            man: "👨",
                            man_artist: "👨&zwj;🎨",
                            man_astronaut: "👨&zwj;🚀",
                            man_cartwheeling: "🤸&zwj;♂️",
                            man_cook: "👨&zwj;🍳",
                            man_dancing: "🕺",
                            man_facepalming: "🤦&zwj;♂️",
                            man_factory_worker: "👨&zwj;🏭",
                            man_farmer: "👨&zwj;🌾",
                            man_firefighter: "👨&zwj;🚒",
                            man_health_worker: "👨&zwj;⚕️",
                            man_in_tuxedo: "🤵",
                            man_judge: "👨&zwj;⚖️",
                            man_juggling: "🤹&zwj;♂️",
                            man_mechanic: "👨&zwj;🔧",
                            man_office_worker: "👨&zwj;💼",
                            man_pilot: "👨&zwj;✈️",
                            man_playing_handball: "🤾&zwj;♂️",
                            man_playing_water_polo: "🤽&zwj;♂️",
                            man_scientist: "👨&zwj;🔬",
                            man_shrugging: "🤷&zwj;♂️",
                            man_singer: "👨&zwj;🎤",
                            man_student: "👨&zwj;🎓",
                            man_teacher: "👨&zwj;🏫",
                            man_technologist: "👨&zwj;💻",
                            man_with_gua_pi_mao: "👲",
                            man_with_turban: "👳",
                            tangerine: "🍊",
                            mans_shoe: "👞",
                            mantelpiece_clock: "🕰",
                            maple_leaf: "🍁",
                            martial_arts_uniform: "🥋",
                            mask: "😷",
                            massage_woman: "💆",
                            massage_man: "💆&zwj;♂️",
                            meat_on_bone: "🍖",
                            medal_military: "🎖",
                            medal_sports: "🏅",
                            mega: "📣",
                            melon: "🍈",
                            memo: "📝",
                            men_wrestling: "🤼&zwj;♂️",
                            menorah: "🕎",
                            mens: "🚹",
                            metal: "🤘",
                            metro: "🚇",
                            microphone: "🎤",
                            microscope: "🔬",
                            milk_glass: "🥛",
                            milky_way: "🌌",
                            minibus: "🚐",
                            minidisc: "💽",
                            mobile_phone_off: "📴",
                            money_mouth_face: "🤑",
                            money_with_wings: "💸",
                            moneybag: "💰",
                            monkey: "🐒",
                            monkey_face: "🐵",
                            monorail: "🚝",
                            moon: "🌔",
                            mortar_board: "🎓",
                            mosque: "🕌",
                            motor_boat: "🛥",
                            motor_scooter: "🛵",
                            motorcycle: "🏍",
                            motorway: "🛣",
                            mount_fuji: "🗻",
                            mountain: "⛰",
                            mountain_biking_man: "🚵",
                            mountain_biking_woman: "🚵&zwj;♀️",
                            mountain_cableway: "🚠",
                            mountain_railway: "🚞",
                            mountain_snow: "🏔",
                            mouse: "🐭",
                            mouse2: "🐁",
                            movie_camera: "🎥",
                            moyai: "🗿",
                            mrs_claus: "🤶",
                            muscle: "💪",
                            mushroom: "🍄",
                            musical_keyboard: "🎹",
                            musical_note: "🎵",
                            musical_score: "🎼",
                            mute: "🔇",
                            nail_care: "💅",
                            name_badge: "📛",
                            national_park: "🏞",
                            nauseated_face: "🤢",
                            necktie: "👔",
                            negative_squared_cross_mark: "❎",
                            nerd_face: "🤓",
                            neutral_face: "😐",
                            new: "🆕",
                            new_moon: "🌑",
                            new_moon_with_face: "🌚",
                            newspaper: "📰",
                            newspaper_roll: "🗞",
                            next_track_button: "⏭",
                            ng: "🆖",
                            no_good_man: "🙅&zwj;♂️",
                            no_good_woman: "🙅",
                            night_with_stars: "🌃",
                            no_bell: "🔕",
                            no_bicycles: "🚳",
                            no_entry: "⛔️",
                            no_entry_sign: "🚫",
                            no_mobile_phones: "📵",
                            no_mouth: "😶",
                            no_pedestrians: "🚷",
                            no_smoking: "🚭",
                            "non-potable_water": "🚱",
                            nose: "👃",
                            notebook: "📓",
                            notebook_with_decorative_cover: "📔",
                            notes: "🎶",
                            nut_and_bolt: "🔩",
                            o: "⭕️",
                            o2: "🅾️",
                            ocean: "🌊",
                            octopus: "🐙",
                            oden: "🍢",
                            office: "🏢",
                            oil_drum: "🛢",
                            ok: "🆗",
                            ok_hand: "👌",
                            ok_man: "🙆&zwj;♂️",
                            ok_woman: "🙆",
                            old_key: "🗝",
                            older_man: "👴",
                            older_woman: "👵",
                            om: "🕉",
                            on: "🔛",
                            oncoming_automobile: "🚘",
                            oncoming_bus: "🚍",
                            oncoming_police_car: "🚔",
                            oncoming_taxi: "🚖",
                            open_file_folder: "📂",
                            open_hands: "👐",
                            open_mouth: "😮",
                            open_umbrella: "☂️",
                            ophiuchus: "⛎",
                            orange_book: "📙",
                            orthodox_cross: "☦️",
                            outbox_tray: "📤",
                            owl: "🦉",
                            ox: "🐂",
                            package: "📦",
                            page_facing_up: "📄",
                            page_with_curl: "📃",
                            pager: "📟",
                            paintbrush: "🖌",
                            palm_tree: "🌴",
                            pancakes: "🥞",
                            panda_face: "🐼",
                            paperclip: "📎",
                            paperclips: "🖇",
                            parasol_on_ground: "⛱",
                            parking: "🅿️",
                            part_alternation_mark: "〽️",
                            partly_sunny: "⛅️",
                            passenger_ship: "🛳",
                            passport_control: "🛂",
                            pause_button: "⏸",
                            peace_symbol: "☮️",
                            peach: "🍑",
                            peanuts: "🥜",
                            pear: "🍐",
                            pen: "🖊",
                            pencil2: "✏️",
                            penguin: "🐧",
                            pensive: "😔",
                            performing_arts: "🎭",
                            persevere: "😣",
                            person_fencing: "🤺",
                            pouting_woman: "🙎",
                            phone: "☎️",
                            pick: "⛏",
                            pig: "🐷",
                            pig2: "🐖",
                            pig_nose: "🐽",
                            pill: "💊",
                            pineapple: "🍍",
                            ping_pong: "🏓",
                            pisces: "♓️",
                            pizza: "🍕",
                            place_of_worship: "🛐",
                            plate_with_cutlery: "🍽",
                            play_or_pause_button: "⏯",
                            point_down: "👇",
                            point_left: "👈",
                            point_right: "👉",
                            point_up: "☝️",
                            point_up_2: "👆",
                            police_car: "🚓",
                            policewoman: "👮&zwj;♀️",
                            poodle: "🐩",
                            popcorn: "🍿",
                            post_office: "🏣",
                            postal_horn: "📯",
                            postbox: "📮",
                            potable_water: "🚰",
                            potato: "🥔",
                            pouch: "👝",
                            poultry_leg: "🍗",
                            pound: "💷",
                            rage: "😡",
                            pouting_cat: "😾",
                            pouting_man: "🙎&zwj;♂️",
                            pray: "🙏",
                            prayer_beads: "📿",
                            pregnant_woman: "🤰",
                            previous_track_button: "⏮",
                            prince: "🤴",
                            princess: "👸",
                            printer: "🖨",
                            purple_heart: "💜",
                            purse: "👛",
                            pushpin: "📌",
                            put_litter_in_its_place: "🚮",
                            question: "❓",
                            rabbit: "🐰",
                            rabbit2: "🐇",
                            racehorse: "🐎",
                            racing_car: "🏎",
                            radio: "📻",
                            radio_button: "🔘",
                            radioactive: "☢️",
                            railway_car: "🚃",
                            railway_track: "🛤",
                            rainbow: "🌈",
                            rainbow_flag: "🏳️&zwj;🌈",
                            raised_back_of_hand: "🤚",
                            raised_hand_with_fingers_splayed: "🖐",
                            raised_hands: "🙌",
                            raising_hand_woman: "🙋",
                            raising_hand_man: "🙋&zwj;♂️",
                            ram: "🐏",
                            ramen: "🍜",
                            rat: "🐀",
                            record_button: "⏺",
                            recycle: "♻️",
                            red_circle: "🔴",
                            registered: "®️",
                            relaxed: "☺️",
                            relieved: "😌",
                            reminder_ribbon: "🎗",
                            repeat: "🔁",
                            repeat_one: "🔂",
                            rescue_worker_helmet: "⛑",
                            restroom: "🚻",
                            revolving_hearts: "💞",
                            rewind: "⏪",
                            rhinoceros: "🦏",
                            ribbon: "🎀",
                            rice: "🍚",
                            rice_ball: "🍙",
                            rice_cracker: "🍘",
                            rice_scene: "🎑",
                            right_anger_bubble: "🗯",
                            ring: "💍",
                            robot: "🤖",
                            rocket: "🚀",
                            rofl: "🤣",
                            roll_eyes: "🙄",
                            roller_coaster: "🎢",
                            rooster: "🐓",
                            rose: "🌹",
                            rosette: "🏵",
                            rotating_light: "🚨",
                            round_pushpin: "📍",
                            rowing_man: "🚣",
                            rowing_woman: "🚣&zwj;♀️",
                            rugby_football: "🏉",
                            running_man: "🏃",
                            running_shirt_with_sash: "🎽",
                            running_woman: "🏃&zwj;♀️",
                            sa: "🈂️",
                            sagittarius: "♐️",
                            sake: "🍶",
                            sandal: "👡",
                            santa: "🎅",
                            satellite: "📡",
                            saxophone: "🎷",
                            school: "🏫",
                            school_satchel: "🎒",
                            scissors: "✂️",
                            scorpion: "🦂",
                            scorpius: "♏️",
                            scream: "😱",
                            scream_cat: "🙀",
                            scroll: "📜",
                            seat: "💺",
                            secret: "㊙️",
                            see_no_evil: "🙈",
                            seedling: "🌱",
                            selfie: "🤳",
                            shallow_pan_of_food: "🥘",
                            shamrock: "☘️",
                            shark: "🦈",
                            shaved_ice: "🍧",
                            sheep: "🐑",
                            shell: "🐚",
                            shield: "🛡",
                            shinto_shrine: "⛩",
                            ship: "🚢",
                            shirt: "👕",
                            shopping: "🛍",
                            shopping_cart: "🛒",
                            shower: "🚿",
                            shrimp: "🦐",
                            signal_strength: "📶",
                            six_pointed_star: "🔯",
                            ski: "🎿",
                            skier: "⛷",
                            skull: "💀",
                            skull_and_crossbones: "☠️",
                            sleeping: "😴",
                            sleeping_bed: "🛌",
                            sleepy: "😪",
                            slightly_frowning_face: "🙁",
                            slightly_smiling_face: "🙂",
                            slot_machine: "🎰",
                            small_airplane: "🛩",
                            small_blue_diamond: "🔹",
                            small_orange_diamond: "🔸",
                            small_red_triangle: "🔺",
                            small_red_triangle_down: "🔻",
                            smile: "😄",
                            smile_cat: "😸",
                            smiley: "😃",
                            smiley_cat: "😺",
                            smiling_imp: "😈",
                            smirk: "😏",
                            smirk_cat: "😼",
                            smoking: "🚬",
                            snail: "🐌",
                            snake: "🐍",
                            sneezing_face: "🤧",
                            snowboarder: "🏂",
                            snowflake: "❄️",
                            snowman: "⛄️",
                            snowman_with_snow: "☃️",
                            sob: "😭",
                            soccer: "⚽️",
                            soon: "🔜",
                            sos: "🆘",
                            sound: "🔉",
                            space_invader: "👾",
                            spades: "♠️",
                            spaghetti: "🍝",
                            sparkle: "❇️",
                            sparkler: "🎇",
                            sparkles: "✨",
                            sparkling_heart: "💖",
                            speak_no_evil: "🙊",
                            speaker: "🔈",
                            speaking_head: "🗣",
                            speech_balloon: "💬",
                            speedboat: "🚤",
                            spider: "🕷",
                            spider_web: "🕸",
                            spiral_calendar: "🗓",
                            spiral_notepad: "🗒",
                            spoon: "🥄",
                            squid: "🦑",
                            stadium: "🏟",
                            star: "⭐️",
                            star2: "🌟",
                            star_and_crescent: "☪️",
                            star_of_david: "✡️",
                            stars: "🌠",
                            station: "🚉",
                            statue_of_liberty: "🗽",
                            steam_locomotive: "🚂",
                            stew: "🍲",
                            stop_button: "⏹",
                            stop_sign: "🛑",
                            stopwatch: "⏱",
                            straight_ruler: "📏",
                            strawberry: "🍓",
                            stuck_out_tongue: "😛",
                            stuck_out_tongue_closed_eyes: "😝",
                            stuck_out_tongue_winking_eye: "😜",
                            studio_microphone: "🎙",
                            stuffed_flatbread: "🥙",
                            sun_behind_large_cloud: "🌥",
                            sun_behind_rain_cloud: "🌦",
                            sun_behind_small_cloud: "🌤",
                            sun_with_face: "🌞",
                            sunflower: "🌻",
                            sunglasses: "😎",
                            sunny: "☀️",
                            sunrise: "🌅",
                            sunrise_over_mountains: "🌄",
                            surfing_man: "🏄",
                            surfing_woman: "🏄&zwj;♀️",
                            sushi: "🍣",
                            suspension_railway: "🚟",
                            sweat: "😓",
                            sweat_drops: "💦",
                            sweat_smile: "😅",
                            sweet_potato: "🍠",
                            swimming_man: "🏊",
                            swimming_woman: "🏊&zwj;♀️",
                            symbols: "🔣",
                            synagogue: "🕍",
                            syringe: "💉",
                            taco: "🌮",
                            tada: "🎉",
                            tanabata_tree: "🎋",
                            taurus: "♉️",
                            taxi: "🚕",
                            tea: "🍵",
                            telephone_receiver: "📞",
                            telescope: "🔭",
                            tennis: "🎾",
                            tent: "⛺️",
                            thermometer: "🌡",
                            thinking: "🤔",
                            thought_balloon: "💭",
                            ticket: "🎫",
                            tickets: "🎟",
                            tiger: "🐯",
                            tiger2: "🐅",
                            timer_clock: "⏲",
                            tipping_hand_man: "💁&zwj;♂️",
                            tired_face: "😫",
                            tm: "™️",
                            toilet: "🚽",
                            tokyo_tower: "🗼",
                            tomato: "🍅",
                            tongue: "👅",
                            top: "🔝",
                            tophat: "🎩",
                            tornado: "🌪",
                            trackball: "🖲",
                            tractor: "🚜",
                            traffic_light: "🚥",
                            train: "🚋",
                            train2: "🚆",
                            tram: "🚊",
                            triangular_flag_on_post: "🚩",
                            triangular_ruler: "📐",
                            trident: "🔱",
                            triumph: "😤",
                            trolleybus: "🚎",
                            trophy: "🏆",
                            tropical_drink: "🍹",
                            tropical_fish: "🐠",
                            truck: "🚚",
                            trumpet: "🎺",
                            tulip: "🌷",
                            tumbler_glass: "🥃",
                            turkey: "🦃",
                            turtle: "🐢",
                            tv: "📺",
                            twisted_rightwards_arrows: "🔀",
                            two_hearts: "💕",
                            two_men_holding_hands: "👬",
                            two_women_holding_hands: "👭",
                            u5272: "🈹",
                            u5408: "🈴",
                            u55b6: "🈺",
                            u6307: "🈯️",
                            u6708: "🈷️",
                            u6709: "🈶",
                            u6e80: "🈵",
                            u7121: "🈚️",
                            u7533: "🈸",
                            u7981: "🈲",
                            u7a7a: "🈳",
                            umbrella: "☔️",
                            unamused: "😒",
                            underage: "🔞",
                            unicorn: "🦄",
                            unlock: "🔓",
                            up: "🆙",
                            upside_down_face: "🙃",
                            v: "✌️",
                            vertical_traffic_light: "🚦",
                            vhs: "📼",
                            vibration_mode: "📳",
                            video_camera: "📹",
                            video_game: "🎮",
                            violin: "🎻",
                            virgo: "♍️",
                            volcano: "🌋",
                            volleyball: "🏐",
                            vs: "🆚",
                            vulcan_salute: "🖖",
                            walking_man: "🚶",
                            walking_woman: "🚶&zwj;♀️",
                            waning_crescent_moon: "🌘",
                            waning_gibbous_moon: "🌖",
                            warning: "⚠️",
                            wastebasket: "🗑",
                            watch: "⌚️",
                            water_buffalo: "🐃",
                            watermelon: "🍉",
                            wave: "👋",
                            wavy_dash: "〰️",
                            waxing_crescent_moon: "🌒",
                            wc: "🚾",
                            weary: "😩",
                            wedding: "💒",
                            weight_lifting_man: "🏋️",
                            weight_lifting_woman: "🏋️&zwj;♀️",
                            whale: "🐳",
                            whale2: "🐋",
                            wheel_of_dharma: "☸️",
                            wheelchair: "♿️",
                            white_check_mark: "✅",
                            white_circle: "⚪️",
                            white_flag: "🏳️",
                            white_flower: "💮",
                            white_large_square: "⬜️",
                            white_medium_small_square: "◽️",
                            white_medium_square: "◻️",
                            white_small_square: "▫️",
                            white_square_button: "🔳",
                            wilted_flower: "🥀",
                            wind_chime: "🎐",
                            wind_face: "🌬",
                            wine_glass: "🍷",
                            wink: "😉",
                            wolf: "🐺",
                            woman: "👩",
                            woman_artist: "👩&zwj;🎨",
                            woman_astronaut: "👩&zwj;🚀",
                            woman_cartwheeling: "🤸&zwj;♀️",
                            woman_cook: "👩&zwj;🍳",
                            woman_facepalming: "🤦&zwj;♀️",
                            woman_factory_worker: "👩&zwj;🏭",
                            woman_farmer: "👩&zwj;🌾",
                            woman_firefighter: "👩&zwj;🚒",
                            woman_health_worker: "👩&zwj;⚕️",
                            woman_judge: "👩&zwj;⚖️",
                            woman_juggling: "🤹&zwj;♀️",
                            woman_mechanic: "👩&zwj;🔧",
                            woman_office_worker: "👩&zwj;💼",
                            woman_pilot: "👩&zwj;✈️",
                            woman_playing_handball: "🤾&zwj;♀️",
                            woman_playing_water_polo: "🤽&zwj;♀️",
                            woman_scientist: "👩&zwj;🔬",
                            woman_shrugging: "🤷&zwj;♀️",
                            woman_singer: "👩&zwj;🎤",
                            woman_student: "👩&zwj;🎓",
                            woman_teacher: "👩&zwj;🏫",
                            woman_technologist: "👩&zwj;💻",
                            woman_with_turban: "👳&zwj;♀️",
                            womans_clothes: "👚",
                            womans_hat: "👒",
                            women_wrestling: "🤼&zwj;♀️",
                            womens: "🚺",
                            world_map: "🗺",
                            worried: "😟",
                            wrench: "🔧",
                            writing_hand: "✍️",
                            x: "❌",
                            yellow_heart: "💛",
                            yen: "💴",
                            yin_yang: "☯️",
                            yum: "😋",
                            zap: "⚡️",
                            zipper_mouth_face: "🤐",
                            zzz: "💤",
                            octocat: '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
                            showdown: "<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>"
                        },
                        i.Converter = function(e) {
                            "use strict";
                            var t = {}
                                , n = []
                                , a = []
                                , r = {}
                                , o = c
                                , m = {
                                parsed: {},
                                raw: "",
                                format: ""
                            };
                            function p(e, t) {
                                if (t = t || null,
                                    i.helper.isString(e)) {
                                    if (t = e = i.helper.stdExtName(e),
                                        i.extensions[e])
                                        return console.warn("DEPRECATION WARNING: " + e + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),
                                            void function(e, t) {
                                                "function" == typeof e && (e = e(new i.Converter));
                                                i.helper.isArray(e) || (e = [e]);
                                                var r = d(e, t);
                                                if (!r.valid)
                                                    throw Error(r.error);
                                                for (var o = 0; o < e.length; ++o)
                                                    switch (e[o].type) {
                                                        case "lang":
                                                            n.push(e[o]);
                                                            break;
                                                        case "output":
                                                            a.push(e[o]);
                                                            break;
                                                        default:
                                                            throw Error("Extension loader error: Type unrecognized!!!")
                                                    }
                                            }(i.extensions[e], e);
                                    if (i.helper.isUndefined(s[e]))
                                        throw Error('Extension "' + e + '" could not be loaded. It was either not found or is not a valid extension.');
                                    e = s[e]
                                }
                                "function" == typeof e && (e = e()),
                                i.helper.isArray(e) || (e = [e]);
                                var r = d(e, t);
                                if (!r.valid)
                                    throw Error(r.error);
                                for (var o = 0; o < e.length; ++o) {
                                    switch (e[o].type) {
                                        case "lang":
                                            n.push(e[o]);
                                            break;
                                        case "output":
                                            a.push(e[o])
                                    }
                                    if (e[o].hasOwnProperty("listeners"))
                                        for (var l in e[o].listeners)
                                            e[o].listeners.hasOwnProperty(l) && h(l, e[o].listeners[l])
                                }
                            }
                            function h(e, t) {
                                if (!i.helper.isString(e))
                                    throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof e + " given");
                                if ("function" != typeof t)
                                    throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof t + " given");
                                r.hasOwnProperty(e) || (r[e] = []),
                                    r[e].push(t)
                            }
                            !function() {
                                for (var n in e = e || {},
                                    l)
                                    l.hasOwnProperty(n) && (t[n] = l[n]);
                                if ("object" != typeof e)
                                    throw Error("Converter expects the passed parameter to be an object, but " + typeof e + " was passed instead.");
                                for (var a in e)
                                    e.hasOwnProperty(a) && (t[a] = e[a]);
                                t.extensions && i.helper.forEach(t.extensions, p)
                            }(),
                                this._dispatch = function(e, t, n, a) {
                                    if (r.hasOwnProperty(e))
                                        for (var i = 0; i < r[e].length; ++i) {
                                            var o = r[e][i](e, t, this, n, a);
                                            o && void 0 !== o && (t = o)
                                        }
                                    return t
                                }
                                ,
                                this.listen = function(e, t) {
                                    return h(e, t),
                                        this
                                }
                                ,
                                this.makeHtml = function(e) {
                                    if (!e)
                                        return e;
                                    var r = {
                                        gHtmlBlocks: [],
                                        gHtmlMdBlocks: [],
                                        gHtmlSpans: [],
                                        gUrls: {},
                                        gTitles: {},
                                        gDimensions: {},
                                        gListLevel: 0,
                                        hashLinkCounts: {},
                                        langExtensions: n,
                                        outputModifiers: a,
                                        converter: this,
                                        ghCodeBlocks: [],
                                        metadata: {
                                            parsed: {},
                                            raw: "",
                                            format: ""
                                        }
                                    };
                                    return e = (e = (e = (e = (e = e.replace(/¨/g, "¨T")).replace(/\$/g, "¨D")).replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).replace(/\u00A0/g, "&nbsp;"),
                                    t.smartIndentationFix && (e = function(e) {
                                        var t = e.match(/^\s*/)[0].length
                                            , n = new RegExp("^\\s{0," + t + "}","gm");
                                        return e.replace(n, "")
                                    }(e)),
                                        e = "\n\n" + e + "\n\n",
                                        e = (e = i.subParser("detab")(e, t, r)).replace(/^[ \t]+$/gm, ""),
                                        i.helper.forEach(n, (function(n) {
                                                e = i.subParser("runExtension")(n, e, t, r)
                                            }
                                        )),
                                        e = i.subParser("metadata")(e, t, r),
                                        e = i.subParser("hashPreCodeTags")(e, t, r),
                                        e = i.subParser("githubCodeBlocks")(e, t, r),
                                        e = i.subParser("hashHTMLBlocks")(e, t, r),
                                        e = i.subParser("hashCodeTags")(e, t, r),
                                        e = i.subParser("stripLinkDefinitions")(e, t, r),
                                        e = i.subParser("blockGamut")(e, t, r),
                                        e = i.subParser("unhashHTMLSpans")(e, t, r),
                                        e = (e = (e = i.subParser("unescapeSpecialChars")(e, t, r)).replace(/¨D/g, "$$")).replace(/¨T/g, "¨"),
                                        e = i.subParser("completeHTMLDocument")(e, t, r),
                                        i.helper.forEach(a, (function(n) {
                                                e = i.subParser("runExtension")(n, e, t, r)
                                            }
                                        )),
                                        m = r.metadata,
                                        e
                                }
                                ,
                                this.makeMarkdown = this.makeMd = function(e, t) {
                                    if (e = (e = (e = e.replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).replace(/>[ \t]+</, ">¨NBSP;<"),
                                        !t) {
                                        if (!window || !window.document)
                                            throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
                                        t = window.document
                                    }
                                    var n = t.createElement("div");
                                    n.innerHTML = e;
                                    var a = {
                                        preList: function(e) {
                                            for (var t = e.querySelectorAll("pre"), n = [], a = 0; a < t.length; ++a)
                                                if (1 === t[a].childElementCount && "code" === t[a].firstChild.tagName.toLowerCase()) {
                                                    var r = t[a].firstChild.innerHTML.trim()
                                                        , o = t[a].firstChild.getAttribute("data-language") || "";
                                                    if ("" === o)
                                                        for (var s = t[a].firstChild.className.split(" "), l = 0; l < s.length; ++l) {
                                                            var c = s[l].match(/^language-(.+)$/);
                                                            if (null !== c) {
                                                                o = c[1];
                                                                break
                                                            }
                                                        }
                                                    r = i.helper.unescapeHTMLEntities(r),
                                                        n.push(r),
                                                        t[a].outerHTML = '<precode language="' + o + '" precodenum="' + a.toString() + '"></precode>'
                                                } else
                                                    n.push(t[a].innerHTML),
                                                        t[a].innerHTML = "",
                                                        t[a].setAttribute("prenum", a.toString());
                                            return n
                                        }(n)
                                    };
                                    !function e(t) {
                                        for (var n = 0; n < t.childNodes.length; ++n) {
                                            var a = t.childNodes[n];
                                            3 === a.nodeType ? /\S/.test(a.nodeValue) ? (a.nodeValue = a.nodeValue.split("\n").join(" "),
                                                a.nodeValue = a.nodeValue.replace(/(\s)+/g, "$1")) : (t.removeChild(a),
                                                --n) : 1 === a.nodeType && e(a)
                                        }
                                    }(n);
                                    for (var r = n.childNodes, o = "", s = 0; s < r.length; s++)
                                        o += i.subParser("makeMarkdown.node")(r[s], a);
                                    return o
                                }
                                ,
                                this.setOption = function(e, n) {
                                    t[e] = n
                                }
                                ,
                                this.getOption = function(e) {
                                    return t[e]
                                }
                                ,
                                this.getOptions = function() {
                                    return t
                                }
                                ,
                                this.addExtension = function(e, t) {
                                    p(e, t = t || null)
                                }
                                ,
                                this.useExtension = function(e) {
                                    p(e)
                                }
                                ,
                                this.setFlavor = function(e) {
                                    if (!u.hasOwnProperty(e))
                                        throw Error(e + " flavor was not found");
                                    var n = u[e];
                                    for (var a in o = e,
                                        n)
                                        n.hasOwnProperty(a) && (t[a] = n[a])
                                }
                                ,
                                this.getFlavor = function() {
                                    return o
                                }
                                ,
                                this.removeExtension = function(e) {
                                    i.helper.isArray(e) || (e = [e]);
                                    for (var t = 0; t < e.length; ++t) {
                                        for (var r = e[t], o = 0; o < n.length; ++o)
                                            n[o] === r && n[o].splice(o, 1);
                                        for (; 0 < a.length; ++o)
                                            a[0] === r && a[0].splice(o, 1)
                                    }
                                }
                                ,
                                this.getAllExtensions = function() {
                                    return {
                                        language: n,
                                        output: a
                                    }
                                }
                                ,
                                this.getMetadata = function(e) {
                                    return e ? m.raw : m.parsed
                                }
                                ,
                                this.getMetadataFormat = function() {
                                    return m.format
                                }
                                ,
                                this._setMetadataPair = function(e, t) {
                                    m.parsed[e] = t
                                }
                                ,
                                this._setMetadataFormat = function(e) {
                                    m.format = e
                                }
                                ,
                                this._setMetadataRaw = function(e) {
                                    m.raw = e
                                }
                        }
                        ,
                        i.subParser("anchors", (function(e, t, n) {
                                "use strict";
                                var a = function(e, a, r, o, s, l, c) {
                                    if (i.helper.isUndefined(c) && (c = ""),
                                        r = r.toLowerCase(),
                                    e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
                                        o = "";
                                    else if (!o) {
                                        if (r || (r = a.toLowerCase().replace(/ ?\n/g, " ")),
                                            o = "#" + r,
                                            i.helper.isUndefined(n.gUrls[r]))
                                            return e;
                                        o = n.gUrls[r],
                                        i.helper.isUndefined(n.gTitles[r]) || (c = n.gTitles[r])
                                    }
                                    var u = '<a href="' + (o = o.replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback)) + '"';
                                    return "" !== c && null !== c && (u += ' title="' + (c = (c = c.replace(/"/g, "&quot;")).replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback)) + '"'),
                                    t.openLinksInNewWindow && !/^#/.test(o) && (u += ' rel="noopener noreferrer" target="¨E95Eblank"'),
                                        u += ">" + a + "</a>"
                                };
                                return e = (e = (e = (e = (e = n.converter._dispatch("anchors.before", e, t, n)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, a)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, a)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, a)).replace(/\[([^\[\]]+)]()()()()()/g, a),
                                t.ghMentions && (e = e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim, (function(e, n, a, r, o) {
                                        if ("\\" === a)
                                            return n + r;
                                        if (!i.helper.isString(t.ghMentionsLink))
                                            throw new Error("ghMentionsLink option must be a string");
                                        var s = t.ghMentionsLink.replace(/\{u}/g, o)
                                            , l = "";
                                        return t.openLinksInNewWindow && (l = ' rel="noopener noreferrer" target="¨E95Eblank"'),
                                        n + '<a href="' + s + '"' + l + ">" + r + "</a>"
                                    }
                                ))),
                                    e = n.converter._dispatch("anchors.after", e, t, n)
                            }
                        ));
                    var h = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi
                        , g = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi
                        , f = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi
                        , _ = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim
                        , b = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi
                        , v = function(e) {
                        "use strict";
                        return function(t, n, a, r, o, s, l) {
                            var c = a = a.replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback)
                                , u = ""
                                , d = ""
                                , m = n || ""
                                , p = l || "";
                            return /^www\./i.test(a) && (a = a.replace(/^www\./i, "http://www.")),
                            e.excludeTrailingPunctuationFromURLs && s && (u = s),
                            e.openLinksInNewWindow && (d = ' rel="noopener noreferrer" target="¨E95Eblank"'),
                            m + '<a href="' + a + '"' + d + ">" + c + "</a>" + u + p
                        }
                    }
                        , w = function(e, t) {
                        "use strict";
                        return function(n, a, r) {
                            var o = "mailto:";
                            return a = a || "",
                                r = i.subParser("unescapeSpecialChars")(r, e, t),
                                e.encodeEmails ? (o = i.helper.encodeEmailAddress(o + r),
                                    r = i.helper.encodeEmailAddress(r)) : o += r,
                            a + '<a href="' + o + '">' + r + "</a>"
                        }
                    };
                    i.subParser("autoLinks", (function(e, t, n) {
                            "use strict";
                            return e = (e = (e = n.converter._dispatch("autoLinks.before", e, t, n)).replace(f, v(t))).replace(b, w(t, n)),
                                e = n.converter._dispatch("autoLinks.after", e, t, n)
                        }
                    )),
                        i.subParser("simplifiedAutoLinks", (function(e, t, n) {
                                "use strict";
                                return t.simplifiedAutoLink ? (e = n.converter._dispatch("simplifiedAutoLinks.before", e, t, n),
                                    e = (e = t.excludeTrailingPunctuationFromURLs ? e.replace(g, v(t)) : e.replace(h, v(t))).replace(_, w(t, n)),
                                    e = n.converter._dispatch("simplifiedAutoLinks.after", e, t, n)) : e
                            }
                        )),
                        i.subParser("blockGamut", (function(e, t, n) {
                                "use strict";
                                return e = n.converter._dispatch("blockGamut.before", e, t, n),
                                    e = i.subParser("blockQuotes")(e, t, n),
                                    e = i.subParser("headers")(e, t, n),
                                    e = i.subParser("horizontalRule")(e, t, n),
                                    e = i.subParser("lists")(e, t, n),
                                    e = i.subParser("codeBlocks")(e, t, n),
                                    e = i.subParser("tables")(e, t, n),
                                    e = i.subParser("hashHTMLBlocks")(e, t, n),
                                    e = i.subParser("paragraphs")(e, t, n),
                                    e = n.converter._dispatch("blockGamut.after", e, t, n)
                            }
                        )),
                        i.subParser("blockQuotes", (function(e, t, n) {
                                "use strict";
                                e = n.converter._dispatch("blockQuotes.before", e, t, n),
                                    e += "\n\n";
                                var a = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
                                return t.splitAdjacentBlockquotes && (a = /^ {0,3}>[\s\S]*?(?:\n\n)/gm),
                                    e = e.replace(a, (function(e) {
                                            return e = (e = (e = e.replace(/^[ \t]*>[ \t]?/gm, "")).replace(/¨0/g, "")).replace(/^[ \t]+$/gm, ""),
                                                e = i.subParser("githubCodeBlocks")(e, t, n),
                                                e = (e = (e = i.subParser("blockGamut")(e, t, n)).replace(/(^|\n)/g, "$1  ")).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, (function(e, t) {
                                                        var n = t;
                                                        return n = (n = n.replace(/^  /gm, "¨0")).replace(/¨0/g, "")
                                                    }
                                                )),
                                                i.subParser("hashBlock")("<blockquote>\n" + e + "\n</blockquote>", t, n)
                                        }
                                    )),
                                    e = n.converter._dispatch("blockQuotes.after", e, t, n)
                            }
                        )),
                        i.subParser("codeBlocks", (function(e, t, n) {
                                "use strict";
                                e = n.converter._dispatch("codeBlocks.before", e, t, n);
                                return e = (e = (e += "¨0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g, (function(e, a, r) {
                                        var o = a
                                            , s = r
                                            , l = "\n";
                                        return o = i.subParser("outdent")(o, t, n),
                                            o = i.subParser("encodeCode")(o, t, n),
                                            o = (o = (o = i.subParser("detab")(o, t, n)).replace(/^\n+/g, "")).replace(/\n+$/g, ""),
                                        t.omitExtraWLInCodeBlocks && (l = ""),
                                            o = "<pre><code>" + o + l + "</code></pre>",
                                        i.subParser("hashBlock")(o, t, n) + s
                                    }
                                ))).replace(/¨0/, ""),
                                    e = n.converter._dispatch("codeBlocks.after", e, t, n)
                            }
                        )),
                        i.subParser("codeSpans", (function(e, t, n) {
                                "use strict";
                                return void 0 === (e = n.converter._dispatch("codeSpans.before", e, t, n)) && (e = ""),
                                    e = e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, (function(e, a, r, o) {
                                            var s = o;
                                            return s = (s = s.replace(/^([ \t]*)/g, "")).replace(/[ \t]*$/g, ""),
                                                s = a + "<code>" + (s = i.subParser("encodeCode")(s, t, n)) + "</code>",
                                                s = i.subParser("hashHTMLSpans")(s, t, n)
                                        }
                                    )),
                                    e = n.converter._dispatch("codeSpans.after", e, t, n)
                            }
                        )),
                        i.subParser("completeHTMLDocument", (function(e, t, n) {
                                "use strict";
                                if (!t.completeHTMLDocument)
                                    return e;
                                e = n.converter._dispatch("completeHTMLDocument.before", e, t, n);
                                var a = "html"
                                    , r = "<!DOCTYPE HTML>\n"
                                    , i = ""
                                    , o = '<meta charset="utf-8">\n'
                                    , s = ""
                                    , l = "";
                                for (var c in void 0 !== n.metadata.parsed.doctype && (r = "<!DOCTYPE " + n.metadata.parsed.doctype + ">\n",
                                "html" !== (a = n.metadata.parsed.doctype.toString().toLowerCase()) && "html5" !== a || (o = '<meta charset="utf-8">')),
                                    n.metadata.parsed)
                                    if (n.metadata.parsed.hasOwnProperty(c))
                                        switch (c.toLowerCase()) {
                                            case "doctype":
                                                break;
                                            case "title":
                                                i = "<title>" + n.metadata.parsed.title + "</title>\n";
                                                break;
                                            case "charset":
                                                o = "html" === a || "html5" === a ? '<meta charset="' + n.metadata.parsed.charset + '">\n' : '<meta name="charset" content="' + n.metadata.parsed.charset + '">\n';
                                                break;
                                            case "language":
                                            case "lang":
                                                s = ' lang="' + n.metadata.parsed[c] + '"',
                                                    l += '<meta name="' + c + '" content="' + n.metadata.parsed[c] + '">\n';
                                                break;
                                            default:
                                                l += '<meta name="' + c + '" content="' + n.metadata.parsed[c] + '">\n'
                                        }
                                return e = r + "<html" + s + ">\n<head>\n" + i + o + l + "</head>\n<body>\n" + e.trim() + "\n</body>\n</html>",
                                    e = n.converter._dispatch("completeHTMLDocument.after", e, t, n)
                            }
                        )),
                        i.subParser("detab", (function(e, t, n) {
                                "use strict";
                                return e = (e = (e = (e = (e = (e = n.converter._dispatch("detab.before", e, t, n)).replace(/\t(?=\t)/g, "    ")).replace(/\t/g, "¨A¨B")).replace(/¨B(.+?)¨A/g, (function(e, t) {
                                        for (var n = t, a = 4 - n.length % 4, r = 0; r < a; r++)
                                            n += " ";
                                        return n
                                    }
                                ))).replace(/¨A/g, "    ")).replace(/¨B/g, ""),
                                    e = n.converter._dispatch("detab.after", e, t, n)
                            }
                        )),
                        i.subParser("ellipsis", (function(e, t, n) {
                                "use strict";
                                return e = (e = n.converter._dispatch("ellipsis.before", e, t, n)).replace(/\.\.\./g, "…"),
                                    e = n.converter._dispatch("ellipsis.after", e, t, n)
                            }
                        )),
                        i.subParser("emoji", (function(e, t, n) {
                                "use strict";
                                if (!t.emoji)
                                    return e;
                                return e = (e = n.converter._dispatch("emoji.before", e, t, n)).replace(/:([\S]+?):/g, (function(e, t) {
                                        return i.helper.emojis.hasOwnProperty(t) ? i.helper.emojis[t] : e
                                    }
                                )),
                                    e = n.converter._dispatch("emoji.after", e, t, n)
                            }
                        )),
                        i.subParser("encodeAmpsAndAngles", (function(e, t, n) {
                                "use strict";
                                return e = (e = (e = (e = (e = n.converter._dispatch("encodeAmpsAndAngles.before", e, t, n)).replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;")).replace(/<(?![a-z\/?$!])/gi, "&lt;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;"),
                                    e = n.converter._dispatch("encodeAmpsAndAngles.after", e, t, n)
                            }
                        )),
                        i.subParser("encodeBackslashEscapes", (function(e, t, n) {
                                "use strict";
                                return e = (e = (e = n.converter._dispatch("encodeBackslashEscapes.before", e, t, n)).replace(/\\(\\)/g, i.helper.escapeCharactersCallback)).replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, i.helper.escapeCharactersCallback),
                                    e = n.converter._dispatch("encodeBackslashEscapes.after", e, t, n)
                            }
                        )),
                        i.subParser("encodeCode", (function(e, t, n) {
                                "use strict";
                                return e = (e = n.converter._dispatch("encodeCode.before", e, t, n)).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, i.helper.escapeCharactersCallback),
                                    e = n.converter._dispatch("encodeCode.after", e, t, n)
                            }
                        )),
                        i.subParser("escapeSpecialCharsWithinTagAttributes", (function(e, t, n) {
                                "use strict";
                                return e = (e = (e = n.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", e, t, n)).replace(/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, (function(e) {
                                        return e.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, i.helper.escapeCharactersCallback)
                                    }
                                ))).replace(/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi, (function(e) {
                                        return e.replace(/([\\`*_~=|])/g, i.helper.escapeCharactersCallback)
                                    }
                                )),
                                    e = n.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", e, t, n)
                            }
                        )),
                        i.subParser("githubCodeBlocks", (function(e, t, n) {
                                "use strict";
                                return t.ghCodeBlocks ? (e = n.converter._dispatch("githubCodeBlocks.before", e, t, n),
                                    e = (e = (e += "¨0").replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, (function(e, a, r, o) {
                                            var s = t.omitExtraWLInCodeBlocks ? "" : "\n";
                                            return o = i.subParser("encodeCode")(o, t, n),
                                                o = "<pre><code" + (r ? ' class="' + r + " language-" + r + '"' : "") + ">" + (o = (o = (o = i.subParser("detab")(o, t, n)).replace(/^\n+/g, "")).replace(/\n+$/g, "")) + s + "</code></pre>",
                                                o = i.subParser("hashBlock")(o, t, n),
                                            "\n\n¨G" + (n.ghCodeBlocks.push({
                                                text: e,
                                                codeblock: o
                                            }) - 1) + "G\n\n"
                                        }
                                    ))).replace(/¨0/, ""),
                                    n.converter._dispatch("githubCodeBlocks.after", e, t, n)) : e
                            }
                        )),
                        i.subParser("hashBlock", (function(e, t, n) {
                                "use strict";
                                return e = (e = n.converter._dispatch("hashBlock.before", e, t, n)).replace(/(^\n+|\n+$)/g, ""),
                                    e = "\n\n¨K" + (n.gHtmlBlocks.push(e) - 1) + "K\n\n",
                                    e = n.converter._dispatch("hashBlock.after", e, t, n)
                            }
                        )),
                        i.subParser("hashCodeTags", (function(e, t, n) {
                                "use strict";
                                e = n.converter._dispatch("hashCodeTags.before", e, t, n);
                                return e = i.helper.replaceRecursiveRegExp(e, (function(e, a, r, o) {
                                        var s = r + i.subParser("encodeCode")(a, t, n) + o;
                                        return "¨C" + (n.gHtmlSpans.push(s) - 1) + "C"
                                    }
                                ), "<code\\b[^>]*>", "</code>", "gim"),
                                    e = n.converter._dispatch("hashCodeTags.after", e, t, n)
                            }
                        )),
                        i.subParser("hashElement", (function(e, t, n) {
                                "use strict";
                                return function(e, t) {
                                    var a = t;
                                    return a = (a = (a = a.replace(/\n\n/g, "\n")).replace(/^\n/, "")).replace(/\n+$/g, ""),
                                        a = "\n\n¨K" + (n.gHtmlBlocks.push(a) - 1) + "K\n\n"
                                }
                            }
                        )),
                        i.subParser("hashHTMLBlocks", (function(e, t, n) {
                                "use strict";
                                e = n.converter._dispatch("hashHTMLBlocks.before", e, t, n);
                                var a = ["pre", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "table", "dl", "ol", "ul", "script", "noscript", "form", "fieldset", "iframe", "math", "style", "section", "header", "footer", "nav", "article", "aside", "address", "audio", "canvas", "figure", "hgroup", "output", "video", "p"]
                                    , r = function(e, t, a, r) {
                                    var i = e;
                                    return -1 !== a.search(/\bmarkdown\b/) && (i = a + n.converter.makeHtml(t) + r),
                                    "\n\n¨K" + (n.gHtmlBlocks.push(i) - 1) + "K\n\n"
                                };
                                t.backslashEscapesHTMLTags && (e = e.replace(/\\<(\/?[^>]+?)>/g, (function(e, t) {
                                        return "&lt;" + t + "&gt;"
                                    }
                                )));
                                for (var o = 0; o < a.length; ++o)
                                    for (var s, l = new RegExp("^ {0,3}(<" + a[o] + "\\b[^>]*>)","im"), c = "<" + a[o] + "\\b[^>]*>", u = "</" + a[o] + ">"; -1 !== (s = i.helper.regexIndexOf(e, l)); ) {
                                        var d = i.helper.splitAtIndex(e, s)
                                            , m = i.helper.replaceRecursiveRegExp(d[1], r, c, u, "im");
                                        if (m === d[1])
                                            break;
                                        e = d[0].concat(m)
                                    }
                                return e = e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, i.subParser("hashElement")(e, t, n)),
                                    e = (e = i.helper.replaceRecursiveRegExp(e, (function(e) {
                                            return "\n\n¨K" + (n.gHtmlBlocks.push(e) - 1) + "K\n\n"
                                        }
                                    ), "^ {0,3}\x3c!--", "--\x3e", "gm")).replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, i.subParser("hashElement")(e, t, n)),
                                    e = n.converter._dispatch("hashHTMLBlocks.after", e, t, n)
                            }
                        )),
                        i.subParser("hashHTMLSpans", (function(e, t, n) {
                                "use strict";
                                function a(e) {
                                    return "¨C" + (n.gHtmlSpans.push(e) - 1) + "C"
                                }
                                return e = (e = (e = (e = (e = n.converter._dispatch("hashHTMLSpans.before", e, t, n)).replace(/<[^>]+?\/>/gi, (function(e) {
                                        return a(e)
                                    }
                                ))).replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, (function(e) {
                                        return a(e)
                                    }
                                ))).replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, (function(e) {
                                        return a(e)
                                    }
                                ))).replace(/<[^>]+?>/gi, (function(e) {
                                        return a(e)
                                    }
                                )),
                                    e = n.converter._dispatch("hashHTMLSpans.after", e, t, n)
                            }
                        )),
                        i.subParser("unhashHTMLSpans", (function(e, t, n) {
                                "use strict";
                                e = n.converter._dispatch("unhashHTMLSpans.before", e, t, n);
                                for (var a = 0; a < n.gHtmlSpans.length; ++a) {
                                    for (var r = n.gHtmlSpans[a], i = 0; /¨C(\d+)C/.test(r); ) {
                                        var o = RegExp.$1;
                                        if (r = r.replace("¨C" + o + "C", n.gHtmlSpans[o]),
                                        10 === i) {
                                            console.error("maximum nesting of 10 spans reached!!!");
                                            break
                                        }
                                        ++i
                                    }
                                    e = e.replace("¨C" + a + "C", r)
                                }
                                return e = n.converter._dispatch("unhashHTMLSpans.after", e, t, n)
                            }
                        )),
                        i.subParser("hashPreCodeTags", (function(e, t, n) {
                                "use strict";
                                e = n.converter._dispatch("hashPreCodeTags.before", e, t, n);
                                return e = i.helper.replaceRecursiveRegExp(e, (function(e, a, r, o) {
                                        var s = r + i.subParser("encodeCode")(a, t, n) + o;
                                        return "\n\n¨G" + (n.ghCodeBlocks.push({
                                            text: e,
                                            codeblock: s
                                        }) - 1) + "G\n\n"
                                    }
                                ), "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"),
                                    e = n.converter._dispatch("hashPreCodeTags.after", e, t, n)
                            }
                        )),
                        i.subParser("headers", (function(e, t, n) {
                                "use strict";
                                e = n.converter._dispatch("headers.before", e, t, n);
                                var a = isNaN(parseInt(t.headerLevelStart)) ? 1 : parseInt(t.headerLevelStart)
                                    , r = t.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm
                                    , o = t.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
                                e = (e = e.replace(r, (function(e, r) {
                                        var o = i.subParser("spanGamut")(r, t, n)
                                            , s = t.noHeaderId ? "" : ' id="' + l(r) + '"'
                                            , c = "<h" + a + s + ">" + o + "</h" + a + ">";
                                        return i.subParser("hashBlock")(c, t, n)
                                    }
                                ))).replace(o, (function(e, r) {
                                        var o = i.subParser("spanGamut")(r, t, n)
                                            , s = t.noHeaderId ? "" : ' id="' + l(r) + '"'
                                            , c = a + 1
                                            , u = "<h" + c + s + ">" + o + "</h" + c + ">";
                                        return i.subParser("hashBlock")(u, t, n)
                                    }
                                ));
                                var s = t.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
                                function l(e) {
                                    var a, r;
                                    if (t.customizedHeaderId) {
                                        var o = e.match(/\{([^{]+?)}\s*$/);
                                        o && o[1] && (e = o[1])
                                    }
                                    return a = e,
                                        r = i.helper.isString(t.prefixHeaderId) ? t.prefixHeaderId : !0 === t.prefixHeaderId ? "section-" : "",
                                    t.rawPrefixHeaderId || (a = r + a),
                                        a = t.ghCompatibleHeaderId ? a.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : t.rawHeaderId ? a.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : a.replace(/[^\w]/g, "").toLowerCase(),
                                    t.rawPrefixHeaderId && (a = r + a),
                                        n.hashLinkCounts[a] ? a = a + "-" + n.hashLinkCounts[a]++ : n.hashLinkCounts[a] = 1,
                                        a
                                }
                                return e = e.replace(s, (function(e, r, o) {
                                        var s = o;
                                        t.customizedHeaderId && (s = o.replace(/\s?\{([^{]+?)}\s*$/, ""));
                                        var c = i.subParser("spanGamut")(s, t, n)
                                            , u = t.noHeaderId ? "" : ' id="' + l(o) + '"'
                                            , d = a - 1 + r.length
                                            , m = "<h" + d + u + ">" + c + "</h" + d + ">";
                                        return i.subParser("hashBlock")(m, t, n)
                                    }
                                )),
                                    e = n.converter._dispatch("headers.after", e, t, n)
                            }
                        )),
                        i.subParser("horizontalRule", (function(e, t, n) {
                                "use strict";
                                e = n.converter._dispatch("horizontalRule.before", e, t, n);
                                var a = i.subParser("hashBlock")("<hr />", t, n);
                                return e = (e = (e = e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, a)).replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, a)).replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, a),
                                    e = n.converter._dispatch("horizontalRule.after", e, t, n)
                            }
                        )),
                        i.subParser("images", (function(e, t, n) {
                                "use strict";
                                function a(e, t, a, r, o, s, l, c) {
                                    var u = n.gUrls
                                        , d = n.gTitles
                                        , m = n.gDimensions;
                                    if (a = a.toLowerCase(),
                                    c || (c = ""),
                                    e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
                                        r = "";
                                    else if ("" === r || null === r) {
                                        if ("" !== a && null !== a || (a = t.toLowerCase().replace(/ ?\n/g, " ")),
                                            r = "#" + a,
                                            i.helper.isUndefined(u[a]))
                                            return e;
                                        r = u[a],
                                        i.helper.isUndefined(d[a]) || (c = d[a]),
                                        i.helper.isUndefined(m[a]) || (o = m[a].width,
                                            s = m[a].height)
                                    }
                                    t = t.replace(/"/g, "&quot;").replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback);
                                    var p = '<img src="' + (r = r.replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback)) + '" alt="' + t + '"';
                                    return c && i.helper.isString(c) && (p += ' title="' + (c = c.replace(/"/g, "&quot;").replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback)) + '"'),
                                    o && s && (p += ' width="' + (o = "*" === o ? "auto" : o) + '"',
                                        p += ' height="' + (s = "*" === s ? "auto" : s) + '"'),
                                        p += " />"
                                }
                                return e = (e = (e = (e = (e = (e = n.converter._dispatch("images.before", e, t, n)).replace(/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, a)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, (function(e, t, n, r, i, o, s, l) {
                                        return a(e, t, n, r = r.replace(/\s/g, ""), i, o, s, l)
                                    }
                                ))).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, a)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, a)).replace(/!\[([^\[\]]+)]()()()()()/g, a),
                                    e = n.converter._dispatch("images.after", e, t, n)
                            }
                        )),
                        i.subParser("italicsAndBold", (function(e, t, n) {
                                "use strict";
                                function a(e, t, n) {
                                    return t + e + n
                                }
                                return e = n.converter._dispatch("italicsAndBold.before", e, t, n),
                                    e = t.literalMidWordUnderscores ? (e = (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, (function(e, t) {
                                            return a(t, "<strong><em>", "</em></strong>")
                                        }
                                    ))).replace(/\b__(\S[\s\S]*?)__\b/g, (function(e, t) {
                                            return a(t, "<strong>", "</strong>")
                                        }
                                    ))).replace(/\b_(\S[\s\S]*?)_\b/g, (function(e, t) {
                                            return a(t, "<em>", "</em>")
                                        }
                                    )) : (e = (e = e.replace(/___(\S[\s\S]*?)___/g, (function(e, t) {
                                            return /\S$/.test(t) ? a(t, "<strong><em>", "</em></strong>") : e
                                        }
                                    ))).replace(/__(\S[\s\S]*?)__/g, (function(e, t) {
                                            return /\S$/.test(t) ? a(t, "<strong>", "</strong>") : e
                                        }
                                    ))).replace(/_([^\s_][\s\S]*?)_/g, (function(e, t) {
                                            return /\S$/.test(t) ? a(t, "<em>", "</em>") : e
                                        }
                                    )),
                                    e = t.literalMidWordAsterisks ? (e = (e = e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, (function(e, t, n) {
                                            return a(n, t + "<strong><em>", "</em></strong>")
                                        }
                                    ))).replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, (function(e, t, n) {
                                            return a(n, t + "<strong>", "</strong>")
                                        }
                                    ))).replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, (function(e, t, n) {
                                            return a(n, t + "<em>", "</em>")
                                        }
                                    )) : (e = (e = e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, (function(e, t) {
                                            return /\S$/.test(t) ? a(t, "<strong><em>", "</em></strong>") : e
                                        }
                                    ))).replace(/\*\*(\S[\s\S]*?)\*\*/g, (function(e, t) {
                                            return /\S$/.test(t) ? a(t, "<strong>", "</strong>") : e
                                        }
                                    ))).replace(/\*([^\s*][\s\S]*?)\*/g, (function(e, t) {
                                            return /\S$/.test(t) ? a(t, "<em>", "</em>") : e
                                        }
                                    )),
                                    e = n.converter._dispatch("italicsAndBold.after", e, t, n)
                            }
                        )),
                        i.subParser("lists", (function(e, t, n) {
                                "use strict";
                                function a(e, a) {
                                    n.gListLevel++,
                                        e = e.replace(/\n{2,}$/, "\n");
                                    var r = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm
                                        , o = /\n[ \t]*\n(?!¨0)/.test(e += "¨0");
                                    return t.disableForced4SpacesIndentedSublists && (r = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),
                                        e = (e = e.replace(r, (function(e, a, r, s, l, c, u) {
                                                u = u && "" !== u.trim();
                                                var d = i.subParser("outdent")(l, t, n)
                                                    , m = "";
                                                return c && t.tasklists && (m = ' class="task-list-item" style="list-style-type: none;"',
                                                    d = d.replace(/^[ \t]*\[(x|X| )?]/m, (function() {
                                                            var e = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                                                            return u && (e += " checked"),
                                                                e += ">"
                                                        }
                                                    ))),
                                                    d = d.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, (function(e) {
                                                            return "¨A" + e
                                                        }
                                                    )),
                                                    a || d.search(/\n{2,}/) > -1 ? (d = i.subParser("githubCodeBlocks")(d, t, n),
                                                        d = i.subParser("blockGamut")(d, t, n)) : (d = (d = i.subParser("lists")(d, t, n)).replace(/\n$/, ""),
                                                        d = (d = i.subParser("hashHTMLBlocks")(d, t, n)).replace(/\n\n+/g, "\n\n"),
                                                        d = o ? i.subParser("paragraphs")(d, t, n) : i.subParser("spanGamut")(d, t, n)),
                                                    d = "<li" + m + ">" + (d = d.replace("¨A", "")) + "</li>\n"
                                            }
                                        ))).replace(/¨0/g, ""),
                                        n.gListLevel--,
                                    a && (e = e.replace(/\s+$/, "")),
                                        e
                                }
                                function r(e, t) {
                                    if ("ol" === t) {
                                        var n = e.match(/^ *(\d+)\./);
                                        if (n && "1" !== n[1])
                                            return ' start="' + n[1] + '"'
                                    }
                                    return ""
                                }
                                function o(e, n, i) {
                                    var o = t.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm
                                        , s = t.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm
                                        , l = "ul" === n ? o : s
                                        , c = "";
                                    if (-1 !== e.search(l))
                                        !function t(u) {
                                            var d = u.search(l)
                                                , m = r(e, n);
                                            -1 !== d ? (c += "\n\n<" + n + m + ">\n" + a(u.slice(0, d), !!i) + "</" + n + ">\n",
                                                l = "ul" === (n = "ul" === n ? "ol" : "ul") ? o : s,
                                                t(u.slice(d))) : c += "\n\n<" + n + m + ">\n" + a(u, !!i) + "</" + n + ">\n"
                                        }(e);
                                    else {
                                        var u = r(e, n);
                                        c = "\n\n<" + n + u + ">\n" + a(e, !!i) + "</" + n + ">\n"
                                    }
                                    return c
                                }
                                return e = n.converter._dispatch("lists.before", e, t, n),
                                    e += "¨0",
                                    e = (e = n.gListLevel ? e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, (function(e, t, n) {
                                            return o(t, n.search(/[*+-]/g) > -1 ? "ul" : "ol", !0)
                                        }
                                    )) : e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, (function(e, t, n, a) {
                                            return o(n, a.search(/[*+-]/g) > -1 ? "ul" : "ol", !1)
                                        }
                                    ))).replace(/¨0/, ""),
                                    e = n.converter._dispatch("lists.after", e, t, n)
                            }
                        )),
                        i.subParser("metadata", (function(e, t, n) {
                                "use strict";
                                if (!t.metadata)
                                    return e;
                                function a(e) {
                                    n.metadata.raw = e,
                                        (e = (e = e.replace(/&/g, "&amp;").replace(/"/g, "&quot;")).replace(/\n {4}/g, " ")).replace(/^([\S ]+): +([\s\S]+?)$/gm, (function(e, t, a) {
                                                return n.metadata.parsed[t] = a,
                                                    ""
                                            }
                                        ))
                                }
                                return e = (e = (e = (e = n.converter._dispatch("metadata.before", e, t, n)).replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, (function(e, t, n) {
                                        return a(n),
                                            "¨M"
                                    }
                                ))).replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, (function(e, t, r) {
                                        return t && (n.metadata.format = t),
                                            a(r),
                                            "¨M"
                                    }
                                ))).replace(/¨M/g, ""),
                                    e = n.converter._dispatch("metadata.after", e, t, n)
                            }
                        )),
                        i.subParser("outdent", (function(e, t, n) {
                                "use strict";
                                return e = (e = (e = n.converter._dispatch("outdent.before", e, t, n)).replace(/^(\t|[ ]{1,4})/gm, "¨0")).replace(/¨0/g, ""),
                                    e = n.converter._dispatch("outdent.after", e, t, n)
                            }
                        )),
                        i.subParser("paragraphs", (function(e, t, n) {
                                "use strict";
                                for (var a = (e = (e = (e = n.converter._dispatch("paragraphs.before", e, t, n)).replace(/^\n+/g, "")).replace(/\n+$/g, "")).split(/\n{2,}/g), r = [], o = a.length, s = 0; s < o; s++) {
                                    var l = a[s];
                                    l.search(/¨(K|G)(\d+)\1/g) >= 0 ? r.push(l) : l.search(/\S/) >= 0 && (l = (l = i.subParser("spanGamut")(l, t, n)).replace(/^([ \t]*)/g, "<p>"),
                                        l += "</p>",
                                        r.push(l))
                                }
                                for (o = r.length,
                                         s = 0; s < o; s++) {
                                    for (var c = "", u = r[s], d = !1; /¨(K|G)(\d+)\1/.test(u); ) {
                                        var m = RegExp.$1
                                            , p = RegExp.$2;
                                        c = (c = "K" === m ? n.gHtmlBlocks[p] : d ? i.subParser("encodeCode")(n.ghCodeBlocks[p].text, t, n) : n.ghCodeBlocks[p].codeblock).replace(/\$/g, "$$$$"),
                                            u = u.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, c),
                                        /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(u) && (d = !0)
                                    }
                                    r[s] = u
                                }
                                return e = (e = (e = r.join("\n")).replace(/^\n+/g, "")).replace(/\n+$/g, ""),
                                    n.converter._dispatch("paragraphs.after", e, t, n)
                            }
                        )),
                        i.subParser("runExtension", (function(e, t, n, a) {
                                "use strict";
                                if (e.filter)
                                    t = e.filter(t, a.converter, n);
                                else if (e.regex) {
                                    var r = e.regex;
                                    r instanceof RegExp || (r = new RegExp(r,"g")),
                                        t = t.replace(r, e.replace)
                                }
                                return t
                            }
                        )),
                        i.subParser("spanGamut", (function(e, t, n) {
                                "use strict";
                                return e = n.converter._dispatch("spanGamut.before", e, t, n),
                                    e = i.subParser("codeSpans")(e, t, n),
                                    e = i.subParser("escapeSpecialCharsWithinTagAttributes")(e, t, n),
                                    e = i.subParser("encodeBackslashEscapes")(e, t, n),
                                    e = i.subParser("images")(e, t, n),
                                    e = i.subParser("anchors")(e, t, n),
                                    e = i.subParser("autoLinks")(e, t, n),
                                    e = i.subParser("simplifiedAutoLinks")(e, t, n),
                                    e = i.subParser("emoji")(e, t, n),
                                    e = i.subParser("underline")(e, t, n),
                                    e = i.subParser("italicsAndBold")(e, t, n),
                                    e = i.subParser("strikethrough")(e, t, n),
                                    e = i.subParser("ellipsis")(e, t, n),
                                    e = i.subParser("hashHTMLSpans")(e, t, n),
                                    e = i.subParser("encodeAmpsAndAngles")(e, t, n),
                                    t.simpleLineBreaks ? /\n\n¨K/.test(e) || (e = e.replace(/\n+/g, "<br />\n")) : e = e.replace(/  +\n/g, "<br />\n"),
                                    e = n.converter._dispatch("spanGamut.after", e, t, n)
                            }
                        )),
                        i.subParser("strikethrough", (function(e, t, n) {
                                "use strict";
                                return t.strikethrough && (e = (e = n.converter._dispatch("strikethrough.before", e, t, n)).replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, (function(e, a) {
                                        return function(e) {
                                            return t.simplifiedAutoLink && (e = i.subParser("simplifiedAutoLinks")(e, t, n)),
                                            "<del>" + e + "</del>"
                                        }(a)
                                    }
                                )),
                                    e = n.converter._dispatch("strikethrough.after", e, t, n)),
                                    e
                            }
                        )),
                        i.subParser("stripLinkDefinitions", (function(e, t, n) {
                                "use strict";
                                var a = function(e, a, r, o, s, l, c) {
                                    return a = a.toLowerCase(),
                                        r.match(/^data:.+?\/.+?;base64,/) ? n.gUrls[a] = r.replace(/\s/g, "") : n.gUrls[a] = i.subParser("encodeAmpsAndAngles")(r, t, n),
                                        l ? l + c : (c && (n.gTitles[a] = c.replace(/"|'/g, "&quot;")),
                                        t.parseImgDimensions && o && s && (n.gDimensions[a] = {
                                            width: o,
                                            height: s
                                        }),
                                            "")
                                };
                                return e = (e = (e = (e += "¨0").replace(/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm, a)).replace(/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, a)).replace(/¨0/, "")
                            }
                        )),
                        i.subParser("tables", (function(e, t, n) {
                                "use strict";
                                if (!t.tables)
                                    return e;
                                function a(e, a) {
                                    return "<td" + a + ">" + i.subParser("spanGamut")(e, t, n) + "</td>\n"
                                }
                                function r(e) {
                                    var r, o = e.split("\n");
                                    for (r = 0; r < o.length; ++r)
                                        /^ {0,3}\|/.test(o[r]) && (o[r] = o[r].replace(/^ {0,3}\|/, "")),
                                        /\|[ \t]*$/.test(o[r]) && (o[r] = o[r].replace(/\|[ \t]*$/, "")),
                                            o[r] = i.subParser("codeSpans")(o[r], t, n);
                                    var s, l, c, u, d = o[0].split("|").map((function(e) {
                                            return e.trim()
                                        }
                                    )), m = o[1].split("|").map((function(e) {
                                            return e.trim()
                                        }
                                    )), p = [], h = [], g = [], f = [];
                                    for (o.shift(),
                                             o.shift(),
                                             r = 0; r < o.length; ++r)
                                        "" !== o[r].trim() && p.push(o[r].split("|").map((function(e) {
                                                return e.trim()
                                            }
                                        )));
                                    if (d.length < m.length)
                                        return e;
                                    for (r = 0; r < m.length; ++r)
                                        g.push((s = m[r],
                                            /^:[ \t]*--*$/.test(s) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(s) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(s) ? ' style="text-align:center;"' : ""));
                                    for (r = 0; r < d.length; ++r)
                                        i.helper.isUndefined(g[r]) && (g[r] = ""),
                                            h.push((l = d[r],
                                                c = g[r],
                                                u = void 0,
                                                u = "",
                                                l = l.trim(),
                                            (t.tablesHeaderId || t.tableHeaderId) && (u = ' id="' + l.replace(/ /g, "_").toLowerCase() + '"'),
                                            "<th" + u + c + ">" + (l = i.subParser("spanGamut")(l, t, n)) + "</th>\n"));
                                    for (r = 0; r < p.length; ++r) {
                                        for (var _ = [], b = 0; b < h.length; ++b)
                                            i.helper.isUndefined(p[r][b]),
                                                _.push(a(p[r][b], g[b]));
                                        f.push(_)
                                    }
                                    return function(e, t) {
                                        for (var n = "<table>\n<thead>\n<tr>\n", a = e.length, r = 0; r < a; ++r)
                                            n += e[r];
                                        for (n += "</tr>\n</thead>\n<tbody>\n",
                                                 r = 0; r < t.length; ++r) {
                                            n += "<tr>\n";
                                            for (var i = 0; i < a; ++i)
                                                n += t[r][i];
                                            n += "</tr>\n"
                                        }
                                        return n + "</tbody>\n</table>\n"
                                    }(h, f)
                                }
                                return e = (e = (e = (e = n.converter._dispatch("tables.before", e, t, n)).replace(/\\(\|)/g, i.helper.escapeCharactersCallback)).replace(/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, r)).replace(/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm, r),
                                    e = n.converter._dispatch("tables.after", e, t, n)
                            }
                        )),
                        i.subParser("underline", (function(e, t, n) {
                                "use strict";
                                return t.underline ? (e = n.converter._dispatch("underline.before", e, t, n),
                                    e = (e = t.literalMidWordUnderscores ? (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, (function(e, t) {
                                            return "<u>" + t + "</u>"
                                        }
                                    ))).replace(/\b__(\S[\s\S]*?)__\b/g, (function(e, t) {
                                            return "<u>" + t + "</u>"
                                        }
                                    )) : (e = e.replace(/___(\S[\s\S]*?)___/g, (function(e, t) {
                                            return /\S$/.test(t) ? "<u>" + t + "</u>" : e
                                        }
                                    ))).replace(/__(\S[\s\S]*?)__/g, (function(e, t) {
                                            return /\S$/.test(t) ? "<u>" + t + "</u>" : e
                                        }
                                    ))).replace(/(_)/g, i.helper.escapeCharactersCallback),
                                    e = n.converter._dispatch("underline.after", e, t, n)) : e
                            }
                        )),
                        i.subParser("unescapeSpecialChars", (function(e, t, n) {
                                "use strict";
                                return e = (e = n.converter._dispatch("unescapeSpecialChars.before", e, t, n)).replace(/¨E(\d+)E/g, (function(e, t) {
                                        var n = parseInt(t);
                                        return String.fromCharCode(n)
                                    }
                                )),
                                    e = n.converter._dispatch("unescapeSpecialChars.after", e, t, n)
                            }
                        )),
                        i.subParser("makeMarkdown.blockquote", (function(e, t) {
                                "use strict";
                                var n = "";
                                if (e.hasChildNodes())
                                    for (var a = e.childNodes, r = a.length, o = 0; o < r; ++o) {
                                        var s = i.subParser("makeMarkdown.node")(a[o], t);
                                        "" !== s && (n += s)
                                    }
                                return n = "> " + (n = n.trim()).split("\n").join("\n> ")
                            }
                        )),
                        i.subParser("makeMarkdown.codeBlock", (function(e, t) {
                                "use strict";
                                var n = e.getAttribute("language")
                                    , a = e.getAttribute("precodenum");
                                return "```" + n + "\n" + t.preList[a] + "\n```"
                            }
                        )),
                        i.subParser("makeMarkdown.codeSpan", (function(e) {
                                "use strict";
                                return "`" + e.innerHTML + "`"
                            }
                        )),
                        i.subParser("makeMarkdown.emphasis", (function(e, t) {
                                "use strict";
                                var n = "";
                                if (e.hasChildNodes()) {
                                    n += "*";
                                    for (var a = e.childNodes, r = a.length, o = 0; o < r; ++o)
                                        n += i.subParser("makeMarkdown.node")(a[o], t);
                                    n += "*"
                                }
                                return n
                            }
                        )),
                        i.subParser("makeMarkdown.header", (function(e, t, n) {
                                "use strict";
                                var a = new Array(n + 1).join("#")
                                    , r = "";
                                if (e.hasChildNodes()) {
                                    r = a + " ";
                                    for (var o = e.childNodes, s = o.length, l = 0; l < s; ++l)
                                        r += i.subParser("makeMarkdown.node")(o[l], t)
                                }
                                return r
                            }
                        )),
                        i.subParser("makeMarkdown.hr", (function() {
                                "use strict";
                                return "---"
                            }
                        )),
                        i.subParser("makeMarkdown.image", (function(e) {
                                "use strict";
                                var t = "";
                                return e.hasAttribute("src") && (t += "![" + e.getAttribute("alt") + "](",
                                    t += "<" + e.getAttribute("src") + ">",
                                e.hasAttribute("width") && e.hasAttribute("height") && (t += " =" + e.getAttribute("width") + "x" + e.getAttribute("height")),
                                e.hasAttribute("title") && (t += ' "' + e.getAttribute("title") + '"'),
                                    t += ")"),
                                    t
                            }
                        )),
                        i.subParser("makeMarkdown.links", (function(e, t) {
                                "use strict";
                                var n = "";
                                if (e.hasChildNodes() && e.hasAttribute("href")) {
                                    var a = e.childNodes
                                        , r = a.length;
                                    n = "[";
                                    for (var o = 0; o < r; ++o)
                                        n += i.subParser("makeMarkdown.node")(a[o], t);
                                    n += "](",
                                        n += "<" + e.getAttribute("href") + ">",
                                    e.hasAttribute("title") && (n += ' "' + e.getAttribute("title") + '"'),
                                        n += ")"
                                }
                                return n
                            }
                        )),
                        i.subParser("makeMarkdown.list", (function(e, t, n) {
                                "use strict";
                                var a = "";
                                if (!e.hasChildNodes())
                                    return "";
                                for (var r = e.childNodes, o = r.length, s = e.getAttribute("start") || 1, l = 0; l < o; ++l)
                                    if (void 0 !== r[l].tagName && "li" === r[l].tagName.toLowerCase()) {
                                        a += ("ol" === n ? s.toString() + ". " : "- ") + i.subParser("makeMarkdown.listItem")(r[l], t),
                                            ++s
                                    }
                                return (a += "\n\x3c!-- --\x3e\n").trim()
                            }
                        )),
                        i.subParser("makeMarkdown.listItem", (function(e, t) {
                                "use strict";
                                for (var n = "", a = e.childNodes, r = a.length, o = 0; o < r; ++o)
                                    n += i.subParser("makeMarkdown.node")(a[o], t);
                                return /\n$/.test(n) ? n = n.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n") : n += "\n",
                                    n
                            }
                        )),
                        i.subParser("makeMarkdown.node", (function(e, t, n) {
                                "use strict";
                                n = n || !1;
                                var a = "";
                                if (3 === e.nodeType)
                                    return i.subParser("makeMarkdown.txt")(e, t);
                                if (8 === e.nodeType)
                                    return "\x3c!--" + e.data + "--\x3e\n\n";
                                if (1 !== e.nodeType)
                                    return "";
                                switch (e.tagName.toLowerCase()) {
                                    case "h1":
                                        n || (a = i.subParser("makeMarkdown.header")(e, t, 1) + "\n\n");
                                        break;
                                    case "h2":
                                        n || (a = i.subParser("makeMarkdown.header")(e, t, 2) + "\n\n");
                                        break;
                                    case "h3":
                                        n || (a = i.subParser("makeMarkdown.header")(e, t, 3) + "\n\n");
                                        break;
                                    case "h4":
                                        n || (a = i.subParser("makeMarkdown.header")(e, t, 4) + "\n\n");
                                        break;
                                    case "h5":
                                        n || (a = i.subParser("makeMarkdown.header")(e, t, 5) + "\n\n");
                                        break;
                                    case "h6":
                                        n || (a = i.subParser("makeMarkdown.header")(e, t, 6) + "\n\n");
                                        break;
                                    case "p":
                                        n || (a = i.subParser("makeMarkdown.paragraph")(e, t) + "\n\n");
                                        break;
                                    case "blockquote":
                                        n || (a = i.subParser("makeMarkdown.blockquote")(e, t) + "\n\n");
                                        break;
                                    case "hr":
                                        n || (a = i.subParser("makeMarkdown.hr")(e, t) + "\n\n");
                                        break;
                                    case "ol":
                                        n || (a = i.subParser("makeMarkdown.list")(e, t, "ol") + "\n\n");
                                        break;
                                    case "ul":
                                        n || (a = i.subParser("makeMarkdown.list")(e, t, "ul") + "\n\n");
                                        break;
                                    case "precode":
                                        n || (a = i.subParser("makeMarkdown.codeBlock")(e, t) + "\n\n");
                                        break;
                                    case "pre":
                                        n || (a = i.subParser("makeMarkdown.pre")(e, t) + "\n\n");
                                        break;
                                    case "table":
                                        n || (a = i.subParser("makeMarkdown.table")(e, t) + "\n\n");
                                        break;
                                    case "code":
                                        a = i.subParser("makeMarkdown.codeSpan")(e, t);
                                        break;
                                    case "em":
                                    case "i":
                                        a = i.subParser("makeMarkdown.emphasis")(e, t);
                                        break;
                                    case "strong":
                                    case "b":
                                        a = i.subParser("makeMarkdown.strong")(e, t);
                                        break;
                                    case "del":
                                        a = i.subParser("makeMarkdown.strikethrough")(e, t);
                                        break;
                                    case "a":
                                        a = i.subParser("makeMarkdown.links")(e, t);
                                        break;
                                    case "img":
                                        a = i.subParser("makeMarkdown.image")(e, t);
                                        break;
                                    default:
                                        a = e.outerHTML + "\n\n"
                                }
                                return a
                            }
                        )),
                        i.subParser("makeMarkdown.paragraph", (function(e, t) {
                                "use strict";
                                var n = "";
                                if (e.hasChildNodes())
                                    for (var a = e.childNodes, r = a.length, o = 0; o < r; ++o)
                                        n += i.subParser("makeMarkdown.node")(a[o], t);
                                return n = n.trim()
                            }
                        )),
                        i.subParser("makeMarkdown.pre", (function(e, t) {
                                "use strict";
                                var n = e.getAttribute("prenum");
                                return "<pre>" + t.preList[n] + "</pre>"
                            }
                        )),
                        i.subParser("makeMarkdown.strikethrough", (function(e, t) {
                                "use strict";
                                var n = "";
                                if (e.hasChildNodes()) {
                                    n += "~~";
                                    for (var a = e.childNodes, r = a.length, o = 0; o < r; ++o)
                                        n += i.subParser("makeMarkdown.node")(a[o], t);
                                    n += "~~"
                                }
                                return n
                            }
                        )),
                        i.subParser("makeMarkdown.strong", (function(e, t) {
                                "use strict";
                                var n = "";
                                if (e.hasChildNodes()) {
                                    n += "**";
                                    for (var a = e.childNodes, r = a.length, o = 0; o < r; ++o)
                                        n += i.subParser("makeMarkdown.node")(a[o], t);
                                    n += "**"
                                }
                                return n
                            }
                        )),
                        i.subParser("makeMarkdown.table", (function(e, t) {
                                "use strict";
                                var n, a, r = "", o = [[], []], s = e.querySelectorAll("thead>tr>th"), l = e.querySelectorAll("tbody>tr");
                                for (n = 0; n < s.length; ++n) {
                                    var c = i.subParser("makeMarkdown.tableCell")(s[n], t)
                                        , u = "---";
                                    if (s[n].hasAttribute("style"))
                                        switch (s[n].getAttribute("style").toLowerCase().replace(/\s/g, "")) {
                                            case "text-align:left;":
                                                u = ":---";
                                                break;
                                            case "text-align:right;":
                                                u = "---:";
                                                break;
                                            case "text-align:center;":
                                                u = ":---:"
                                        }
                                    o[0][n] = c.trim(),
                                        o[1][n] = u
                                }
                                for (n = 0; n < l.length; ++n) {
                                    var d = o.push([]) - 1
                                        , m = l[n].getElementsByTagName("td");
                                    for (a = 0; a < s.length; ++a) {
                                        var p = " ";
                                        void 0 !== m[a] && (p = i.subParser("makeMarkdown.tableCell")(m[a], t)),
                                            o[d].push(p)
                                    }
                                }
                                var h = 3;
                                for (n = 0; n < o.length; ++n)
                                    for (a = 0; a < o[n].length; ++a) {
                                        var g = o[n][a].length;
                                        g > h && (h = g)
                                    }
                                for (n = 0; n < o.length; ++n) {
                                    for (a = 0; a < o[n].length; ++a)
                                        1 === n ? ":" === o[n][a].slice(-1) ? o[n][a] = i.helper.padEnd(o[n][a].slice(-1), h - 1, "-") + ":" : o[n][a] = i.helper.padEnd(o[n][a], h, "-") : o[n][a] = i.helper.padEnd(o[n][a], h);
                                    r += "| " + o[n].join(" | ") + " |\n"
                                }
                                return r.trim()
                            }
                        )),
                        i.subParser("makeMarkdown.tableCell", (function(e, t) {
                                "use strict";
                                var n = "";
                                if (!e.hasChildNodes())
                                    return "";
                                for (var a = e.childNodes, r = a.length, o = 0; o < r; ++o)
                                    n += i.subParser("makeMarkdown.node")(a[o], t, !0);
                                return n.trim()
                            }
                        )),
                        i.subParser("makeMarkdown.txt", (function(e) {
                                "use strict";
                                var t = e.nodeValue;
                                return t = (t = t.replace(/ +/g, " ")).replace(/¨NBSP;/g, " "),
                                    t = (t = (t = (t = (t = (t = (t = (t = (t = i.helper.unescapeHTMLEntities(t)).replace(/([*_~|`])/g, "\\$1")).replace(/^(\s*)>/g, "\\$1>")).replace(/^#/gm, "\\#")).replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3")).replace(/^( {0,3}\d+)\./gm, "$1\\.")).replace(/^( {0,3})([+-])/gm, "$1\\$2")).replace(/]([\s]*)\(/g, "\\]$1\\(")).replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:")
                            }
                        ));
                    void 0 === (a = function() {
                        "use strict";
                        return i
                    }
                        .call(t, n, t, e)) || (e.exports = a)
                }
            ).call(this)
        }
    }
        , t = {};
    function n(a) {
        var r = t[a];
        if (void 0 !== r)
            return r.exports;
        var i = t[a] = {
            exports: {}
        };
        return e[a].call(i.exports, i, i.exports, n),
            i.exports
    }
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
        ;
        return n.d(t, {
            a: t
        }),
            t
    }
        ,
        n.d = function(e, t) {
            for (var a in t)
                n.o(t, a) && !n.o(e, a) && Object.defineProperty(e, a, {
                    enumerable: !0,
                    get: t[a]
                })
        }
        ,
        n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        function() {
            "use strict";
            var e = {};
            n.r(e),
                n.d(e, {
                    isAutoCompleterOpen: function() {
                        return jt
                    },
                    updateAIAttributes: function() {
                        return qt
                    }
                });
            var t = {};
            n.r(t),
                n.d(t, {
                    appUi: function() {
                        return Ft
                    }
                });
            var a = {};
            n.r(a),
                n.d(a, {
                    getContentAiAttributes: function() {
                        return Wt
                    },
                    isAutoCompleterOpen: function() {
                        return Vt
                    }
                });
            var r = jQuery
                , i = n.n(r)
                , o = lodash
                , s = wp.i18n
                , l = wp.hooks
                , c = wp.element
                , u = wp.data
                , d = wp.plugins
                , m = wp.components
                , p = {
                Blog_Post_Idea: "https://rankmath.com/kb/content-ai-blog-post-idea-tool/",
                Blog_Post_Outline: "https://rankmath.com/kb/content-ai-blog-post-outline-tool/",
                Blog_Post_Introduction: "https://rankmath.com/kb/content-ai-blog-post-introduction-tool/",
                Blog_Post_Conclusion: "https://rankmath.com/kb/content-ai-blog-post-conclusion-tool/",
                Post_Title: "https://rankmath.com/kb/content-ai-post-title-tool/",
                Topic_Research: "https://rankmath.com/kb/content-ai-topic-research-tool/?play-video=jbl6YfxdDMA",
                SEO_Title: "https://rankmath.com/kb/content-ai-seo-title-tool/?play-video=IGzjfbZ0r8g",
                SEO_Description: "https://rankmath.com/kb/content-ai-seo-description-tool/?play-video=chKiMSDIN14",
                Paragraph_Writing: "https://rankmath.com/kb/content-ai-paragraph-writing-tool/",
                Sentence_Expander: "https://rankmath.com/kb/content-ai-sentence-expander-tool/",
                Paragraph_Rewritter: "https://rankmath.com/kb/content-ai-paragraph-rewritter-tool/",
                Text_Summarizer: "https://rankmath.com/kb/content-ai-text-summarizer-tool/",
                Fix_Grammar: "https://rankmath.com/kb/content-ai-fix-grammar-tool/",
                Analogy: "https://rankmath.com/kb/content-ai-analogy-tool/",
                Product_Description: "https://rankmath.com/kb/content-ai-product-description-tool/",
                Product_Pros_and_Cons: "https://rankmath.com/kb/content-ai-product-pros-and-cons-tool/",
                Product_Review: "https://rankmath.com/kb/content-ai-product-review-tool/",
                Frequently_Asked_Questions: "https://rankmath.com/kb/content-ai-frequently-asked-questions-tool/",
                Comment_Reply: "https://rankmath.com/kb/content-ai-comment-reply-tool/",
                Personal_Bio: "https://rankmath.com/kb/content-ai-personal-bio-tool/",
                Company_Bio: "https://rankmath.com/kb/content-ai-company-bio-tool/",
                Job_Description: "https://rankmath.com/kb/content-ai-job-description-tool/",
                Testimonial: "https://rankmath.com/kb/content-ai-testimonial-tool/",
                Facebook_Post: "https://rankmath.com/kb/content-ai-facebook-post-tool/?play-video=_tBBi26JAiU",
                Facebook_Comment_Reply: "https://rankmath.com/kb/content-ai-facebook-comment-reply-tool/",
                Tweet: "https://rankmath.com/kb/content-ai-tweet-tool/",
                Tweet_Reply: "https://rankmath.com/kb/content-ai-tweet-reply-tool/",
                Instagram_Caption: "https://rankmath.com/kb/content-ai-instagram-caption-tool/?play-video=GHk4JwcOpRY",
                Email: "https://rankmath.com/kb/content-ai-email-tool/?play-video=hJSmY0_WTK0",
                Email_Reply: "https://rankmath.com/kb/content-ai-email-reply-tool/?play-video=j5R8TGVtDLY",
                AIDA: "https://rankmath.com/kb/content-ai-aida-tool/?play-video=pHH1w_yNy4o",
                IDCA: "https://rankmath.com/kb/content-ai-idca-tool/",
                PAS: "https://rankmath.com/kb/content-ai-pas-tool/",
                HERO: "https://rankmath.com/kb/content-ai-hero-tool/",
                BAB: "https://rankmath.com/kb/content-ai-bab-tool/",
                SPIN: "https://rankmath.com/kb/content-ai-spin-tool/",
                Youtube_Video_Script: "https://rankmath.com/kb/content-ai-youtube-video-script-tool/",
                Youtube_Video_Description: "https://rankmath.com/kb/content-ai-youtube-video-description-tool/",
                Podcast_Episode_Outline: "https://rankmath.com/kb/content-ai-podcast-episode-outline-tool/",
                Recipe: "https://rankmath.com/kb/content-ai-recipe-tool/",
                Freeform_Writing: "https://rankmath.com/kb/content-ai-freeform-writing-tool/",
                AI_Command: "https://rankmath.com/kb/content-ai-command-tool/",
                SEO_Meta: "https://rankmath.com/kb/content-ai-seo-meta-tool/?play-video=fqC81KMX5IY",
                Open_Graph: "https://rankmath.com/kb/content-ai-open-graph-tool/",
                Write: "https://rankmath.com/kb/content-ai-editor/"
            }
                , h = function(e) {
                var t = p[e];
                return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && (0,
                    o.includes)(t, "play-video") && (t = t.substring(0, t.indexOf("?"))),
                !(0,
                    o.isUndefined)(t) && "".concat(t, "?utm_source=Plugin&utm_medium=AI+Tool&utm_campaign=WP")
            }
                , g = function() {
                return [{
                    endpoint: "Blog_Post_Idea",
                    title: (0,
                        s.__)("Blog Post Idea", "rank-math"),
                    description: (0,
                        s.__)("Get fresh ideas for engaging blog posts that resonate with your niche and audience, ensuring captivating content.", "rank-math"),
                    category: "blog",
                    icon: "rm-icon rm-icon-edit",
                    helpLink: h("Blog_Post_Idea"),
                    params: {
                        topic_brief: {
                            isRequired: !0,
                            label: (0,
                                s.__)("Describe Your Industry/Niche", "rank-math"),
                            placeholder: (0,
                                s.__)("e.g. Technology blog that covers latest gadgets, tech news, and reviews", "rank-math")
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        style: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 5,
                        max: 20
                    }
                }, {
                    endpoint: "Blog_Post_Outline",
                    title: (0,
                        s.__)("Blog Post Outline", "rank-math"),
                    description: (0,
                        s.__)("Structure blog posts with a clear flow, guiding readers effortlessly for better understanding and engagement.", "rank-math"),
                    category: "blog",
                    icon: "rm-icon rm-icon-howto",
                    helpLink: h("Blog_Post_Outline"),
                    params: {
                        topic: {
                            isRequired: !0
                        },
                        main_points: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        focus_keyword: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        style: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 1,
                        max: 3
                    }
                }, {
                    endpoint: "Blog_Post_Introduction",
                    title: (0,
                        s.__)("Blog Post Introduction", "rank-math"),
                    description: (0,
                        s.__)("Craft attractive intros that captivate readers' interest, compelling them to explore further into your blog.", "rank-math"),
                    category: "blog",
                    icon: "rm-icon rm-icon-acf",
                    helpLink: h("Blog_Post_Introduction"),
                    params: {
                        title: {
                            isRequired: !0
                        },
                        audience: {
                            isRequired: !1
                        },
                        focus_keyword: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 2,
                        max: 5
                    }
                }, {
                    endpoint: "Blog_Post_Conclusion",
                    title: (0,
                        s.__)("Blog Post Conclusion", "rank-math"),
                    description: (0,
                        s.__)("End your blog posts with impactful summaries, reinforcing key takeaways and leaving a lasting impression.", "rank-math"),
                    category: "blog",
                    icon: "rm-icon rm-icon-support",
                    helpLink: h("Blog_Post_Conclusion"),
                    params: {
                        topic: {
                            isRequired: !0
                        },
                        main_argument: {
                            isRequired: !0
                        },
                        call_to_action: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 2,
                        max: 5
                    }
                }, {
                    endpoint: "Post_Title",
                    title: (0,
                        s.__)("Post Title", "rank-math"),
                    description: (0,
                        s.__)("Create eye-catching headlines for articles and blogs, grabbing readers' attention and boosting engagement.", "rank-math"),
                    category: "blog",
                    icon: "rm-icon rm-icon-heading",
                    helpLink: h("Post_Title"),
                    params: {
                        post_brief: {
                            isRequired: !0
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        style: {
                            isRequired: !1
                        },
                        length: {
                            isRequired: !0
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 5,
                        max: 25
                    }
                }, {
                    endpoint: "Topic_Research",
                    title: (0,
                        s.__)("Topic Research", "rank-math"),
                    description: (0,
                        s.__)("Dive deep into comprehensive reports on specific topics, uncovering trends, history, and industry players.", "rank-math"),
                    category: "seo",
                    icon: "rm-icon rm-icon-analyzer",
                    helpLink: h("Topic_Research"),
                    params: {
                        topic: {
                            isRequired: !0
                        },
                        relevance: {
                            isRequired: !1
                        },
                        format: {
                            isRequired: !0
                        },
                        focus_keyword: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 3,
                        max: 10
                    }
                }, {
                    endpoint: "SEO_Title",
                    title: (0,
                        s.__)("SEO Title", "rank-math"),
                    description: (0,
                        s.__)("Optimize headlines for enhanced visibility, organic traffic, and a stronger online presence.", "rank-math"),
                    category: "seo",
                    icon: "rm-icon rm-icon-seo-title",
                    helpLink: h("SEO_Title"),
                    params: {
                        post_title: {
                            isRequired: !0
                        },
                        focus_keyword: {
                            isRequired: !1
                        },
                        post_brief: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 5,
                        max: 25
                    }
                }, {
                    endpoint: "SEO_Description",
                    title: (0,
                        s.__)("SEO Description", "rank-math"),
                    description: (0,
                        s.__)("Craft concise and persuasive summaries that captivate readers and search engines, improving click-through rates.", "rank-math"),
                    category: "seo",
                    icon: "rm-icon rm-icon-seo-description",
                    helpLink: h("SEO_Description"),
                    params: {
                        seo_title: {
                            isRequired: !0
                        },
                        focus_keyword: {
                            isRequired: !1
                        },
                        post_brief: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 3,
                        max: 25
                    }
                }, {
                    endpoint: "Paragraph",
                    title: (0,
                        s.__)("Paragraph", "rank-math"),
                    description: (0,
                        s.__)("Generate well-structured and informative paragraphs, seamlessly blending into your content for better readability.", "rank-math"),
                    category: "blog",
                    icon: "rm-icon rm-icon-text-align-left",
                    helpLink: h("Paragraph_Writing"),
                    params: {
                        topic: {
                            isRequired: !0
                        },
                        main_argument: {
                            isRequired: !0
                        },
                        tone: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        supporting_points: {
                            isRequired: !1
                        },
                        length: {
                            isRequired: !0
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 2,
                        max: 5
                    }
                }, {
                    endpoint: "Paragraph_Rewriter",
                    title: (0,
                        s.__)("Paragraph Rewriter", "rank-math"),
                    description: (0,
                        s.__)("Refine paragraphs while preserving meaning, ensuring originality, and enhancing clarity.", "rank-math"),
                    category: "blog",
                    icon: "rm-icon rm-icon-book",
                    helpLink: h("Paragraph_Rewritter"),
                    params: {
                        original_paragraph: {
                            isRequired: !0
                        },
                        audience: {
                            isRequired: !1
                        },
                        focus_keyword: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 1,
                        max: 3
                    }
                }, {
                    endpoint: "Sentence_Expander",
                    title: (0,
                        s.__)("Sentence Expander", "rank-math"),
                    description: (0,
                        s.__)("Transform incomplete sentences into polished expressions, adding depth and clarity to your writing.", "rank-math"),
                    category: "misc",
                    icon: "rm-icon rm-icon-misc",
                    helpLink: h("Sentence_Expander"),
                    params: {
                        sentence: {
                            isRequired: !0
                        },
                        topic: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        focus_keyword: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 1,
                        max: 5
                    }
                }, {
                    endpoint: "Text_Summarizer",
                    title: (0,
                        s.__)("Text Summarizer", "rank-math"),
                    description: (0,
                        s.__)("Condense complex texts into concise summaries, highlighting crucial points and essential information.", "rank-math"),
                    category: "misc",
                    icon: "rm-icon rm-icon-page",
                    helpLink: h("Text_Summarizer"),
                    params: {
                        text: {
                            isRequired: !0
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 3,
                        max: 8
                    }
                }, {
                    endpoint: "Fix_Grammar",
                    title: (0,
                        s.__)("Fix Grammar", "rank-math"),
                    description: (0,
                        s.__)("Utilize AI-powered grammar correction to polish your written content, eliminating errors and improving clarity.", "rank-math"),
                    category: "misc",
                    icon: "rm-icon rm-icon-help",
                    helpLink: h("Fix_Grammar"),
                    params: {
                        text: {
                            isRequired: !0,
                            label: (0,
                                s.__)("Text", "rank-math"),
                            placeholder: (0,
                                s.__)("Enter the text to fix grammar", "rank-math")
                        }
                    },
                    output: {
                        default: 1,
                        max: 1
                    }
                }, {
                    endpoint: "Analogy",
                    title: (0,
                        s.__)("Analogy", "rank-math"),
                    description: (0,
                        s.__)("Enhance clarity by rephrasing text using alternative words, providing a fresh perspective without altering meaning.", "rank-math"),
                    category: "misc",
                    icon: "rm-icon rm-icon-sitemap",
                    helpLink: h("Analogy"),
                    params: {
                        text: {
                            isRequired: !0
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 3,
                        max: 8
                    }
                }, {
                    endpoint: "Product_Description",
                    title: (0,
                        s.__)("Product Description", "rank-math"),
                    description: (0,
                        s.__)("Craft compelling descriptions that effectively showcase the unique benefits and features of your product.", "rank-math"),
                    category: "ecommerce",
                    icon: "rm-icon rm-icon-mobile",
                    helpLink: h("Product_Description"),
                    params: {
                        product_name: {
                            isRequired: !0
                        },
                        features_and_benefits: {
                            isRequired: !0
                        },
                        audience: {
                            isRequired: !1
                        },
                        focus_keyword: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 2,
                        max: 5
                    }
                }, {
                    endpoint: "Product_Pros_And_Cons",
                    title: (0,
                        s.__)("Product Pros & Cons", "rank-math"),
                    description: (0,
                        s.__)("Present balanced overviews outlining the advantages and limitations, aiding informed decisions.", "rank-math"),
                    category: "ecommerce",
                    icon: "rm-icon rm-icon-thumbs-up",
                    helpLink: h("Product_Pros_and_Cons"),
                    params: {
                        product_name: {
                            isRequired: !0
                        },
                        features_and_benefits: {
                            isRequired: !0
                        },
                        limitations_and_drawbacks: {
                            isRequired: !0
                        },
                        audience: {
                            isRequired: !1
                        },
                        focus_keyword: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 2,
                        max: 5
                    }
                }, {
                    endpoint: "Product_Review",
                    title: (0,
                        s.__)("Product Review", "rank-math"),
                    description: (0,
                        s.__)("Provide detailed evaluations covering strengths, weaknesses, and practical recommendations.", "rank-math"),
                    category: "ecommerce",
                    icon: "rm-icon rm-icon-star",
                    helpLink: h("Product_Review"),
                    params: {
                        features_and_benefits: {
                            isRequired: !0
                        },
                        product_name: {
                            isRequired: !0
                        },
                        limitations_and_drawbacks: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 3,
                        max: 10
                    }
                }, {
                    endpoint: "Frequently_Asked_Questions",
                    title: (0,
                        s.__)("Frequently Asked Questions", "rank-math"),
                    description: (0,
                        s.__)("Address common queries with comprehensive answers, offering valuable information and guidance.", "rank-math"),
                    category: "ecommerce",
                    icon: "rm-icon rm-icon-faq",
                    helpLink: h("Frequently_Asked_Questions"),
                    params: {
                        topic: {
                            isRequired: !0
                        },
                        audience: {
                            isRequired: !1
                        },
                        focus_keyword: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 3,
                        max: 10
                    }
                }, {
                    endpoint: "Comment_Reply",
                    title: (0,
                        s.__)("Comment Reply", "rank-math"),
                    description: (0,
                        s.__)("Engage your audience with thoughtful and engaging responses, fostering meaningful interactions.", "rank-math"),
                    category: "blog",
                    icon: "rm-icon rm-icon-comments",
                    helpLink: h("Comment_Reply"),
                    params: {
                        reply_brief: {
                            isRequired: !0
                        },
                        original_comment: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        focus_keyword: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 3,
                        max: 8
                    }
                }, {
                    endpoint: "Personal_Bio",
                    title: (0,
                        s.__)("Personal Bio", "rank-math"),
                    description: (0,
                        s.__)("Create professional and captivating biographies highlighting accomplishments, expertise, and personality.", "rank-math"),
                    category: "misc",
                    icon: "rm-icon rm-icon-user",
                    helpLink: h("Personal_Bio"),
                    params: {
                        personal_information: {
                            isRequired: !0
                        },
                        purpose: {
                            isRequired: !0
                        },
                        personal_achievements: {
                            isRequired: !0
                        },
                        focus_keyword: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 1,
                        max: 1
                    }
                }, {
                    endpoint: "Company_Bio",
                    title: (0,
                        s.__)("Company Bio", "rank-math"),
                    description: (0,
                        s.__)("Craft informative overviews of your company's history, values, mission, and team, building credibility.", "rank-math"),
                    category: "misc",
                    icon: "rm-icon rm-icon-restaurant",
                    helpLink: h("Company_Bio"),
                    params: {
                        company_name: {
                            isRequired: !0
                        },
                        purpose: {
                            isRequired: !0
                        },
                        company_information: {
                            isRequired: !0
                        },
                        company_history: {
                            isRequired: !1
                        },
                        team: {
                            isRequired: !1
                        },
                        focus_keyword: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 1,
                        max: 1
                    }
                }, {
                    endpoint: "Job_Description",
                    title: (0,
                        s.__)("Job Description", "rank-math"),
                    description: (0,
                        s.__)("Create enticing and comprehensive descriptions outlining requirements, responsibilities, and opportunities.", "rank-math"),
                    category: "misc",
                    icon: "rm-icon rm-icon-job",
                    helpLink: h("Job_Description"),
                    params: {
                        company_name: {
                            isRequired: !0
                        },
                        job_title: {
                            isRequired: !0
                        },
                        requirements: {
                            isRequired: !0
                        },
                        responsibilities: {
                            isRequired: !0
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 1,
                        max: 3
                    }
                }, {
                    endpoint: "Testimonial",
                    title: (0,
                        s.__)("Testimonial", "rank-math"),
                    description: (0,
                        s.__)("Develop persuasive testimonials sharing positive experiences, endorsing your product, service, or brand.", "rank-math"),
                    category: "ecommerce",
                    icon: "rm-icon rm-icon-schema",
                    helpLink: h("Testimonial"),
                    params: {
                        topic: {
                            isRequired: !0,
                            label: (0,
                                s.__)("Product or Service", "rank-math")
                        },
                        features_and_benefits: {
                            isRequired: !0
                        },
                        limitations_and_drawbacks: {
                            isRequired: !1
                        },
                        focus_keyword: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        length: {
                            isRequired: !0
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 3,
                        max: 10
                    }
                }, {
                    endpoint: "Facebook_Post",
                    title: (0,
                        s.__)("Facebook Post", "rank-math"),
                    description: (0,
                        s.__)("Create intriguing and shareable content for Facebook, captivating your audience and boosting engagement.", "rank-math"),
                    category: "marketing-sales",
                    icon: "rm-icon rm-icon-facebook",
                    helpLink: h("Facebook_Post"),
                    params: {
                        topic_brief: {
                            isRequired: !0
                        },
                        audience: {
                            isRequired: !1
                        },
                        focus_keyword: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        length: {
                            isRequired: !0
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 3,
                        max: 10
                    }
                }, {
                    endpoint: "Facebook_Comment_Reply",
                    title: (0,
                        s.__)("Facebook Comment Reply", "rank-math"),
                    description: (0,
                        s.__)("Generate relevant responses to Facebook comments, build relationships & encourage interaction.", "rank-math"),
                    category: "marketing-comments-reply",
                    icon: "rm-icon rm-icon-comments-reply",
                    helpLink: h("Facebook_Comment_Reply"),
                    params: {
                        reply_brief: {
                            isRequired: !0,
                            label: (0,
                                s.__)("Reply brief", "rank-math")
                        },
                        comment: {
                            isRequired: !0
                        },
                        post_brief: {
                            isRequired: !1,
                            label: (0,
                                s.__)("Post brief", "rank-math")
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 3,
                        max: 10
                    }
                }, {
                    endpoint: "Tweet",
                    title: (0,
                        s.__)("Tweet", "rank-math"),
                    description: (0,
                        s.__)("Create engaging tweets, boost interaction, and foster connections with your followers.", "rank-math"),
                    category: "marketing-sales",
                    icon: "rm-icon rm-icon-twitter",
                    helpLink: h("Tweet"),
                    params: {
                        topic_brief: {
                            isRequired: !0
                        },
                        hashtags: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 3,
                        max: 10
                    }
                }, {
                    endpoint: "Tweet_Reply",
                    title: (0,
                        s.__)("Tweet Reply", "rank-math"),
                    description: (0,
                        s.__)("Generate optimized replies for tweets to promote engagement and strengthen connections.", "rank-math"),
                    category: "marketing-sales",
                    icon: "rm-icon rm-icon-comments-reply",
                    helpLink: h("Tweet_Reply"),
                    params: {
                        reply_brief: {
                            isRequired: !0,
                            label: (0,
                                s.__)("Reply brief", "rank-math")
                        },
                        tweet: {
                            isRequired: !0
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 3,
                        max: 10
                    }
                }, {
                    endpoint: "Instagram_Caption",
                    title: (0,
                        s.__)("Instagram Caption", "rank-math"),
                    description: (0,
                        s.__)("Craft catchy captions for Instagram posts to increase engagement and grab attention.", "rank-math"),
                    category: "marketing-sales",
                    icon: "rm-icon rm-icon-instagram",
                    helpLink: h("Instagram_Caption"),
                    params: {
                        post_brief: {
                            isRequired: !0
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 3,
                        max: 10
                    }
                }, {
                    endpoint: "Email",
                    title: (0,
                        s.__)("Email", "rank-math"),
                    description: (0,
                        s.__)("Create effective emails for promotions, announcements, and follow-ups to achieve marketing goals.", "rank-math"),
                    category: "marketing-sales",
                    icon: "rm-icon rm-icon-mail",
                    helpLink: h("Email"),
                    params: {
                        email_brief: {
                            isRequired: !0
                        },
                        call_to_action: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        length: {
                            isRequired: !0
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 3,
                        max: 10
                    }
                }, {
                    endpoint: "Email_Reply",
                    title: (0,
                        s.__)("Email Reply", "rank-math"),
                    description: (0,
                        s.__)("Craft courteous email replies to promote interaction and strengthen relationships.", "rank-math"),
                    category: "marketing-sales",
                    icon: "rm-icon rm-icon-mail-reply",
                    helpLink: h("Email_Reply"),
                    params: {
                        email: {
                            isRequired: !0
                        },
                        reply_brief: {
                            isRequired: !0
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        length: {
                            isRequired: !0
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 3,
                        max: 10
                    }
                }, {
                    endpoint: "AIDA",
                    title: (0,
                        s.__)("AIDA", "rank-math"),
                    description: (0,
                        s.__)("Write persuasive text using the Attention-Interest-Desire-Action formula to drive action.", "rank-math"),
                    category: "marketing-sales",
                    icon: "rm-icon rm-icon-light-bulb",
                    helpLink: h("AIDA"),
                    params: {
                        product_name: {
                            isRequired: !0
                        },
                        product_description: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 1,
                        max: 2
                    }
                }, {
                    endpoint: "IDCA",
                    title: (0,
                        s.__)("IDCA", "rank-math"),
                    description: (0,
                        s.__)("Create compelling messages using the Identify-Develop-Communicate-Ask strategy to resonate.", "rank-math"),
                    category: "marketing-sales",
                    icon: "rm-icon rm-icon-help",
                    helpLink: h("IDCA"),
                    params: {
                        product_name: {
                            isRequired: !0
                        },
                        product_description: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 1,
                        max: 2
                    }
                }, {
                    endpoint: "PAS",
                    title: (0,
                        s.__)("PAS", "rank-math"),
                    description: (0,
                        s.__)("Address customer problems with the Problem-Agitate-Solution technique to fulfill needs.", "rank-math"),
                    category: "marketing-sales",
                    icon: "rm-icon rm-icon-tick",
                    helpLink: h("PAS"),
                    params: {
                        product_name: {
                            isRequired: !0
                        },
                        product_description: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 1,
                        max: 2
                    }
                }, {
                    endpoint: "HERO",
                    title: (0,
                        s.__)("HERO", "rank-math"),
                    description: (0,
                        s.__)("Craft captivating headlines using the HERO formula to engage, reveal, and offer value.", "rank-math"),
                    category: "marketing-sales",
                    icon: "rm-icon rm-icon-text",
                    helpLink: h("HERO"),
                    params: {
                        product_name: {
                            isRequired: !0
                        },
                        product_description: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 1,
                        max: 2
                    }
                }, {
                    endpoint: "SPIN",
                    title: (0,
                        s.__)("SPIN", "rank-math"),
                    description: (0,
                        s.__)("Describe customer problems, highlight implications, and offer solutions using the SPIN method.", "rank-math"),
                    category: "marketing-sales",
                    icon: "rm-icon rm-icon-social",
                    helpLink: h("SPIN"),
                    params: {
                        product_name: {
                            isRequired: !0
                        },
                        product_description: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 1,
                        max: 2
                    }
                }, {
                    endpoint: "BAB",
                    title: (0,
                        s.__)("BAB", "rank-math"),
                    description: (0,
                        s.__)("Create a compelling Before-After-Bridge narrative to demonstrate product or service value.", "rank-math"),
                    category: "marketing-sales",
                    icon: "rm-icon rm-icon-dataset",
                    helpLink: h("BAB"),
                    params: {
                        product_name: {
                            isRequired: !0
                        },
                        product_description: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 1,
                        max: 2
                    }
                }, {
                    endpoint: "Youtube_Video_Script",
                    title: (0,
                        s.__)("YouTube Video Script", "rank-math"),
                    description: (0,
                        s.__)("Develop engaging video scripts for YouTube to inform, entertain, and align.", "rank-math"),
                    category: "marketing-sales",
                    icon: "rm-icon rm-icon-youtube",
                    helpLink: h("Youtube_Video_Script"),
                    params: {
                        topic: {
                            isRequired: !0
                        },
                        visual_elements: {
                            isRequired: !1
                        },
                        key_points: {
                            isRequired: !0
                        },
                        call_to_action: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 3,
                        max: 10
                    }
                }, {
                    endpoint: "Youtube_Video_Description",
                    title: (0,
                        s.__)("YouTube Video Description", "rank-math"),
                    description: (0,
                        s.__)("Generate informative and engaging video descriptions for YouTube.", "rank-math"),
                    category: "marketing-sales",
                    icon: "rm-icon rm-icon-video",
                    helpLink: h("Youtube_Video_Description"),
                    params: {
                        topic: {
                            isRequired: !0
                        },
                        audience: {
                            isRequired: !1
                        },
                        focus_keyword: {
                            isRequired: !0
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 3,
                        max: 10
                    }
                }, {
                    endpoint: "Podcast_Episode_Outline",
                    title: (0,
                        s.__)("Podcast Episode Outline", "rank-math"),
                    description: (0,
                        s.__)("Create detailed outlines for podcast episodes, including topics and takeaways.", "rank-math"),
                    category: "marketing-sales",
                    icon: "rm-icon rm-icon-podcast",
                    helpLink: h("Podcast_Episode_Outline"),
                    params: {
                        topic: {
                            isRequired: !0
                        },
                        host: {
                            isRequired: !1
                        },
                        co_host: {
                            isRequired: !1
                        },
                        key_points: {
                            isRequired: !0
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 3,
                        max: 10
                    }
                }, {
                    endpoint: "Recipe",
                    title: (0,
                        s.__)("Recipe", "rank-math"),
                    description: (0,
                        s.__)("Create detailed and easy-to-follow recipes with ingredients, instructions, and nutrition.", "rank-math"),
                    category: "food-cooking",
                    icon: "rm-icon rm-icon-recipe",
                    helpLink: h("Recipe"),
                    params: {
                        cuisine: {
                            isRequired: !0
                        },
                        type: {
                            isRequired: !0
                        },
                        ingredients: {
                            isRequired: !0
                        },
                        dietary_restrictions: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 3,
                        max: 10
                    }
                }, {
                    endpoint: "Freeform_Writing",
                    title: (0,
                        s.__)("Freeform Writing", "rank-math"),
                    description: (0,
                        s.__)("Generate text based on prompts or topics, allowing for imaginative or technical writing.", "rank-math"),
                    category: "misc",
                    icon: "rm-icon rm-icon-page",
                    helpLink: h("Freeform_Writing"),
                    params: {
                        text: {
                            isRequired: !0,
                            label: (0,
                                s.__)("What do you want to write?", "rank-math")
                        },
                        main_points: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        length: {
                            isRequired: !0
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 1,
                        max: 1
                    }
                }, {
                    endpoint: "AI_Command",
                    title: (0,
                        s.__)("AI Command", "rank-math"),
                    description: (0,
                        s.__)("Ask AI anything and receive relevant and informative responses for questions or requests.", "rank-math"),
                    category: "misc",
                    icon: "rm-icon rm-icon-code",
                    helpLink: h("AI_Command"),
                    params: {
                        command: {
                            isRequired: !0
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 1,
                        max: 1
                    }
                }, {
                    endpoint: "SEO_Meta",
                    title: (0,
                        s.__)("SEO Meta", "rank-math"),
                    description: (0,
                        s.__)("Optimize headlines and descriptions to improve visibility on search engines.", "rank-math"),
                    category: "seo",
                    icon: "rm-icon rm-icon-seo",
                    helpLink: h("SEO_Meta"),
                    params: {
                        topic: {
                            isRequired: !0
                        },
                        post_brief: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        focus_keyword: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 3,
                        max: 25
                    }
                }, {
                    endpoint: "Opengraph",
                    title: (0,
                        s.__)("Open Graph", "rank-math"),
                    description: (0,
                        s.__)("Boost content visibility on social media with topic-specific meta tags for easy discovery.", "rank-math"),
                    category: "marketing-sales",
                    icon: "rm-icon rm-icon-social",
                    helpLink: h("Open_Graph"),
                    params: {
                        topic: {
                            isRequired: !0
                        },
                        post_brief: {
                            isRequired: !1
                        },
                        audience: {
                            isRequired: !1
                        },
                        focus_keyword: {
                            isRequired: !1
                        },
                        tone: {
                            isRequired: !1
                        },
                        language: {
                            isRequired: !1
                        }
                    },
                    output: {
                        default: 1,
                        max: 5
                    }
                }]
            }
                , f = n(184)
                , _ = n.n(f)
                , b = n(634)
                , v = n.n(b);
            function w(e) {
                return w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                    ,
                    w(e)
            }
            function k() {
                return k = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n)
                            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }
                    ,
                    k.apply(this, arguments)
            }
            function y(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                        a.configurable = !0,
                    "value"in a && (a.writable = !0),
                        Object.defineProperty(e, (r = a.key,
                            i = void 0,
                            i = function(e, t) {
                                if ("object" !== w(e) || null === e)
                                    return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var a = n.call(e, t || "default");
                                    if ("object" !== w(a))
                                        return a;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(r, "string"),
                            "symbol" === w(i) ? i : String(i)), a)
                }
                var r, i
            }
            function E(e, t) {
                return E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t,
                        e
                }
                    ,
                    E(e, t)
            }
            function x(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" == typeof Proxy)
                        return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        ))),
                            !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, a = S(e);
                    if (t) {
                        var r = S(this).constructor;
                        n = Reflect.construct(a, arguments, r)
                    } else
                        n = a.apply(this, arguments);
                    return function(e, t) {
                        if (t && ("object" === w(t) || "function" == typeof t))
                            return t;
                        if (void 0 !== t)
                            throw new TypeError("Derived constructors may only return object or undefined");
                        return T(e)
                    }(this, n)
                }
            }
            function T(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function S(e) {
                return S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                    ,
                    S(e)
            }
            var C = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        Object.defineProperty(e, "prototype", {
                            writable: !1
                        }),
                    t && E(e, t)
                }(i, e);
                var t, n, a, r = x(i);
                function i(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, i),
                        (t = r.call(this, e))._handleRef = t._handleRef.bind(T(t)),
                        t
                }
                return t = i,
                (n = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.tagify = new (v())(this.component,this.props.settings || {}),
                        this.props.settings.callbacks.setup && setTimeout((function() {
                                e.props.settings.callbacks.setup.call(e.tagify),
                                    e.tagify.DOM.input.setAttribute("contenteditable", !0),
                                    e.tagify.DOM.input.addEventListener("blur", e.props.settings.callbacks.blur)
                            }
                        ), 100),
                        this.props.settings.callbacks.dragEnd && this.tagify.DOM.scope.addEventListener("dragend", this.props.settings.callbacks.dragEnd),
                            (0,
                                l.doAction)("rank_math_tagify_init", this)
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e) {
                        return this.tagify.settings.whitelist = e.settings.whitelist,
                        e.showDropdown && this.tagify.dropdown.show.call(this.tagify, e.showDropdown),
                        !1 === e.showDropdown && this.tagify.dropdown.hide.call(this.tagify, !0),
                            !1
                    }
                }, {
                    key: "_handleRef",
                    value: function(e) {
                        this.component = e
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = {
                            ref: this._handleRef,
                            id: this.props.id,
                            name: this.props.name,
                            className: this.props.className,
                            placeholder: this.props.placeholder
                        };
                        return "textarea" === this.props.mode ? wp.element.createElement("textarea", k({}, e, {
                            defaultValue: this.props.initialValue
                        })) : wp.element.createElement("input", k({}, e, {
                            defaultValue: this.props.initialValue
                        }))
                    }
                }, {
                    key: "toArray",
                    value: function() {
                        return this.tagify.value.map((function(e) {
                                return e.value
                            }
                        ))
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return this.toArray().join(",")
                    }
                }, {
                    key: "queryTags",
                    value: function() {
                        return this.tagify.DOM.scope.querySelectorAll("tag")
                    }
                }]) && y(t.prototype, n),
                a && y(t, a),
                    Object.defineProperty(t, "prototype", {
                        writable: !1
                    }),
                    i
            }(c.Component)
                , A = function(e) {
                if ("[object Object]" !== Object.prototype.toString.call(e))
                    return "";
                var t, n, a, r = "", o = Object.keys(e);
                for (n = o.length; n--; )
                    "class" !== (t = o[n]) && e.hasOwnProperty(t) && e[t] && (r += "" + t + (e[t] ? '="'.concat((a = e[t],
                        a = i()("<textarea />").html(a).text(),
                    ((new DOMParser).parseFromString(a, "text/html").body.textContent || "").replace(/["<>]/g, "") || ""), '"') : ""));
                return r
            }
                , P = function(e) {
                return {
                    topic_brief: {
                        label: (0,
                            s.__)("Topic Brief", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter a short summary of your topic", "rank-math"),
                        type: "textarea",
                        maxlength: "400"
                    },
                    audience: {
                        label: (0,
                            s.__)("Audience", "rank-math"),
                        tooltip: (0,
                            s.__)("The target audience for the content.", "rank-math"),
                        placeholder: (0,
                            s.__)("Select or Write Custom", "rank-math"),
                        options: [{
                            value: "General Audience",
                            icon: "🌏"
                        }, {
                            value: "Consumers",
                            icon: "🛍"
                        }, {
                            value: "Students",
                            icon: "📚"
                        }, {
                            value: "Professionals",
                            icon: "💼"
                        }, {
                            value: "Business Owners",
                            icon: "🏭"
                        }, {
                            value: "Job Seekers",
                            icon: "🔍"
                        }, {
                            value: "Investors",
                            icon: "💰"
                        }, {
                            value: "Entrepreneurs",
                            icon: "🚀"
                        }, {
                            value: "Social Media Users",
                            icon: "📱"
                        }, {
                            value: "Travelers",
                            icon: "🛫"
                        }, {
                            value: "Pet Owners",
                            icon: "🐾"
                        }, {
                            value: "Seniors",
                            icon: "🧓"
                        }, {
                            value: "Gaming Enthusiasts",
                            icon: "🎮"
                        }, {
                            value: "Environmentalists",
                            icon: "🌍"
                        }, {
                            value: "Sports Fans",
                            icon: "⚽️"
                        }, {
                            value: "Health Enthusiasts",
                            icon: "💊"
                        }, {
                            value: "Tech Enthusiasts",
                            icon: "💻"
                        }, {
                            value: "Parents",
                            icon: "👨‍👧‍👦"
                        }, {
                            value: "Artists",
                            icon: "🎨"
                        }, {
                            value: "Musicians",
                            icon: "🎸"
                        }, {
                            value: "Photographers",
                            icon: "📷"
                        }, {
                            value: "Writers",
                            icon: "✍️"
                        }, {
                            value: "Retirees",
                            icon: "👴"
                        }, {
                            value: "Healthcare Professionals",
                            icon: "👩‍⚕️"
                        }, {
                            value: "Educators",
                            icon: "👩‍🏫"
                        }, {
                            value: "Activists",
                            icon: "👩‍⚖️"
                        }, {
                            value: "Foodies",
                            icon: "🍕"
                        }, {
                            value: "Cooks",
                            icon: "👩‍🍳"
                        }, {
                            value: "Fitness Enthusiasts",
                            icon: "🏋️‍♀️"
                        }, {
                            value: "Bargain Hunters",
                            icon: "🛍"
                        }, {
                            value: "Fashionistas",
                            icon: "👗"
                        }, {
                            value: "Outdoor Enthusiasts",
                            icon: "🏕"
                        }, {
                            value: "Indoor Hobbyists",
                            icon: "🎨"
                        }, {
                            value: "Gardeners",
                            icon: "🌱"
                        }, {
                            value: "DIYers",
                            icon: "🔧"
                        }, {
                            value: "Crafters",
                            icon: "🧶"
                        }, {
                            value: "Collectors",
                            icon: "📚"
                        }, {
                            value: "Dancers",
                            icon: "💃"
                        }, {
                            value: "Gamers",
                            icon: "🎮"
                        }, {
                            value: "Movie Buffs",
                            icon: "🎥"
                        }, {
                            value: "TV Enthusiasts",
                            icon: "📺"
                        }, {
                            value: "Video Creators",
                            icon: "🎥"
                        }, {
                            value: "Engineers",
                            icon: "🔧"
                        }, {
                            value: "Designers",
                            icon: "🎨"
                        }, {
                            value: "Podcast Listeners",
                            icon: "🎧"
                        }, {
                            value: "Bloggers",
                            icon: "📝"
                        }, {
                            value: "Authors",
                            icon: "📚"
                        }],
                        default: rankMath.ca_audience,
                        maxlength: "200"
                    },
                    tone: {
                        label: (0,
                            s.__)("Tone", "rank-math"),
                        tooltip: (0,
                            s.__)("The tone of the content.", "rank-math"),
                        placeholder: (0,
                            s.__)("Select or Write Custom", "rank-math"),
                        options: [{
                            value: "Formal",
                            icon: "🤵"
                        }, {
                            value: "Informal",
                            icon: "🤗"
                        }, {
                            value: "Friendly",
                            icon: "😊"
                        }, {
                            value: "Casual",
                            icon: "💁‍♀️"
                        }, {
                            value: "Conversational",
                            icon: "🗣️"
                        }, {
                            value: "Descriptive",
                            icon: "📚"
                        }, {
                            value: "Persuasive",
                            icon: "🤝"
                        }, {
                            value: "Creative",
                            icon: "🎨"
                        }, {
                            value: "Technical",
                            icon: "🔧"
                        }, {
                            value: "Analytical",
                            icon: "📊"
                        }, {
                            value: "Journalese",
                            icon: "📰"
                        }, {
                            value: "Poetic",
                            icon: "🌺"
                        }, {
                            value: "Factual",
                            icon: "📊"
                        }, {
                            value: "Emotional",
                            icon: "💔"
                        }, {
                            value: "Satirical",
                            icon: "😅"
                        }, {
                            value: "Empathetic",
                            icon: "😔"
                        }, {
                            value: "Opinionated",
                            icon: "💬"
                        }, {
                            value: "Humorous",
                            icon: "😂"
                        }, {
                            value: "Story-telling",
                            icon: "📚"
                        }, {
                            value: "Narrative",
                            icon: "📖"
                        }, {
                            value: "Expository",
                            icon: "📚"
                        }, {
                            value: "Argumentative",
                            icon: "🗣️"
                        }, {
                            value: "Objective",
                            icon: "📊"
                        }, {
                            value: "Subjective",
                            icon: "💬"
                        }],
                        default: rankMath.ca_tone,
                        maxlength: "200"
                    },
                    style: {
                        label: (0,
                            s.__)("Style", "rank-math"),
                        tooltip: (0,
                            s.__)("The style of the content.", "rank-math"),
                        help_link: "https://rankmath.com/kb/blog-post-idea/?utm_source=Plugin&utm_medium=AI+Tool+Style&utm_campaign=WP#style",
                        placeholder: (0,
                            s.__)("Select or Write Custom", "rank-math"),
                        options: [{
                            value: "Listicle",
                            icon: "🔢"
                        }, {
                            value: "Tutorial",
                            icon: "📖"
                        }, {
                            value: "Review",
                            icon: "⭐️"
                        }, {
                            value: "Case Study",
                            icon: "🕵️‍♂️"
                        }, {
                            value: "Opinion",
                            icon: "🗣️"
                        }, {
                            value: "News",
                            icon: "📰"
                        }, {
                            value: "Newsjacking",
                            icon: "🗞"
                        }, {
                            value: "Personal",
                            icon: "💬"
                        }, {
                            value: "Story-telling",
                            icon: "📚"
                        }, {
                            value: "Guide",
                            icon: "🗺️"
                        }, {
                            value: "Research-based",
                            icon: "🔬"
                        }, {
                            value: "Interview",
                            icon: "🎤"
                        }, {
                            value: "Infographic",
                            icon: "📊"
                        }, {
                            value: "Debate",
                            icon: "🤔"
                        }, {
                            value: "Video Blog",
                            icon: "🎥"
                        }, {
                            value: "Vlog",
                            icon: "📹"
                        }, {
                            value: "Podcast",
                            icon: "🎧"
                        }, {
                            value: "Audio Blog",
                            icon: "🎙"
                        }, {
                            value: "Quiz",
                            icon: "🎲"
                        }, {
                            value: "Contest",
                            icon: "🎉"
                        }, {
                            value: "Poll",
                            icon: "📊"
                        }, {
                            value: "Comparison",
                            icon: "🔎"
                        }, {
                            value: "How-to",
                            icon: "📖"
                        }, {
                            value: "FAQ",
                            icon: "❓"
                        }],
                        maxlength: "200"
                    },
                    language: {
                        label: (0,
                            s.__)("Output Language", "rank-math"),
                        placeholder: (0,
                            s.__)("", "rank-math"),
                        type: "select",
                        options: [{
                            value: "US English",
                            icon: "🇺🇸"
                        }, {
                            value: "UK English",
                            icon: "🇬🇧"
                        }, {
                            value: "Bulgarian",
                            icon: "🇧🇬"
                        }, {
                            value: "Chinese",
                            icon: "🇨🇳"
                        }, {
                            value: "Czech",
                            icon: "🇨🇿"
                        }, {
                            value: "Danish",
                            icon: "🇩🇰"
                        }, {
                            value: "Dutch",
                            icon: "🇳🇱"
                        }, {
                            value: "Estonian",
                            icon: "🇪🇪"
                        }, {
                            value: "Finnish",
                            icon: "🇫🇮"
                        }, {
                            value: "French",
                            icon: "🇫🇷"
                        }, {
                            value: "German",
                            icon: "🇩🇪"
                        }, {
                            value: "Greek",
                            icon: "🇬🇷"
                        }, {
                            value: "Hebrew",
                            icon: "🇮🇱"
                        }, {
                            value: "Hungarian",
                            icon: "🇭🇺"
                        }, {
                            value: "Indonesian",
                            icon: "🇮🇩"
                        }, {
                            value: "Italian",
                            icon: "🇮🇹"
                        }, {
                            value: "Japanese",
                            icon: "🇯🇵"
                        }, {
                            value: "Korean",
                            icon: "🇰🇷"
                        }, {
                            value: "Latvian",
                            icon: "🇱🇻"
                        }, {
                            value: "Lithuanian",
                            icon: "🇱🇹"
                        }, {
                            value: "Norwegian",
                            icon: "🇳🇴"
                        }, {
                            value: "Polish",
                            icon: "🇵🇱"
                        }, {
                            value: "Portuguese",
                            icon: "🇵🇹"
                        }, {
                            value: "Romanian",
                            icon: "🇷🇴"
                        }, {
                            value: "Russian",
                            icon: "🇷🇺"
                        }, {
                            value: "Slovak",
                            icon: "🇸🇰"
                        }, {
                            value: "Slovenian",
                            icon: "🇸🇮"
                        }, {
                            value: "Spanish",
                            icon: "🇪🇸"
                        }, {
                            value: "Swedish",
                            icon: "🇸🇪"
                        }],
                        default: rankMath.ca_language,
                        maxTags: 1
                    },
                    topic: {
                        label: (0,
                            s.__)("Topic", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter a short summary of your topic", "rank-math"),
                        maxlength: "200"
                    },
                    main_points: {
                        label: (0,
                            s.__)("Main points &amp; ideas", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter the main points you want to cover, separated by comma", "rank-math"),
                        type: "textarea",
                        maxlength: "400"
                    },
                    focus_keyword: {
                        label: (0,
                            s.__)("Focus Keyword", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter the main keywords to focus on", "rank-math"),
                        maxlength: "200",
                        options: [],
                        default: []
                    },
                    title: {
                        label: (0,
                            s.__)("Post title", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter your post title", "rank-math"),
                        maxlength: 200
                    },
                    main_argument: {
                        label: (0,
                            s.__)("Main Argument", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter the main point you want to make", "rank-math"),
                        type: "textarea",
                        maxlength: "400"
                    },
                    call_to_action: {
                        label: (0,
                            s.__)("Call to Action", "rank-math"),
                        placeholder: (0,
                            s.__)("Select or Write Custom", "rank-math"),
                        type: "select",
                        options: ["Subscribe to our newsletter", "Follow social media accounts", "Download a resource or guide", "Share the blog post on social media", "Comment on the blog post", "Check out related resources", "Sign up for a webinar or event", "Contact for more information", "Purchase a product or service"],
                        maxlength: "300"
                    },
                    post_brief: {
                        label: (0,
                            s.__)("Post Brief", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter a short summary of your post", "rank-math"),
                        type: "textarea",
                        maxlength: "400"
                    },
                    length: {
                        label: (0,
                            s.__)("Length", "rank-math"),
                        placeholder: (0,
                            s.__)("", "rank-math"),
                        type: "button",
                        options: [{
                            value: "short"
                        }, {
                            value: "medium"
                        }, {
                            value: "long"
                        }],
                        maxlength: 200,
                        default: "medium"
                    },
                    relevance: {
                        label: (0,
                            s.__)("Relevance", "rank-math"),
                        placeholder: (0,
                            s.__)("Select or Write Custom", "rank-math"),
                        options: [{
                            value: "Recent",
                            icon: "🗓️"
                        }, {
                            value: "Historical",
                            icon: "📜"
                        }, {
                            value: "Regional",
                            icon: "🗺️"
                        }, {
                            value: "Comparative",
                            icon: "⚖️"
                        }, {
                            value: "Specific",
                            icon: "🎯"
                        }, {
                            value: "Longitudinal",
                            icon: "📈"
                        }, {
                            value: "Cross-cultural",
                            icon: "🌍"
                        }, {
                            value: "Theoretical",
                            icon: "📚"
                        }, {
                            value: "Empirical",
                            icon: "📊"
                        }, {
                            value: "Applied",
                            icon: "🛠️"
                        }],
                        maxlength: 200
                    },
                    format: {
                        label: (0,
                            s.__)("Format", "rank-math"),
                        placeholder: (0,
                            s.__)("Select or Write desired output format", "rank-math"),
                        options: ["Summary", "List", "Outline"],
                        maxlength: 200
                    },
                    post_title: {
                        label: (0,
                            s.__)("Post Title", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter your post title", "rank-math"),
                        maxlength: 200
                    },
                    seo_title: {
                        label: (0,
                            s.__)("SEO Title", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter your SEO title", "rank-math"),
                        maxlength: 200
                    },
                    supporting_points: {
                        label: (0,
                            s.__)("Supporting Points", "rank-math"),
                        placeholder: (0,
                            s.__)("The supporting points you want to include in the paragraph", "rank-math"),
                        type: "textarea",
                        maxlength: 500
                    },
                    original_paragraph: {
                        label: (0,
                            s.__)("Original Paragraph", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter the paragraph you want to rephrase", "rank-math"),
                        type: "textarea",
                        maxlength: 1e3
                    },
                    sentence: {
                        label: (0,
                            s.__)("Sentence", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter a short or incomplete sentence", "rank-math"),
                        type: "textarea",
                        maxlength: 200
                    },
                    text: {
                        label: (0,
                            s.__)("Original Text", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter the text to summarize", "rank-math"),
                        type: "textarea",
                        maxlength: 2e3
                    },
                    product_name: {
                        label: (0,
                            s.__)("Product Name", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter the name of the product", "rank-math"),
                        maxlength: "200"
                    },
                    features_and_benefits: {
                        label: (0,
                            s.__)("Features and Benefits", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter a list of features and benefits, separated by commas", "rank-math"),
                        type: "textarea",
                        maxlength: 600
                    },
                    limitations_and_drawbacks: {
                        label: (0,
                            s.__)("Limitations and Drawbacks", "rank-math"),
                        placeholder: (0,
                            s.__)("", "rank-math"),
                        type: "textarea",
                        maxlength: 600
                    },
                    reply_brief: {
                        label: (0,
                            s.__)("Reply Brief", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter a short summary of the required response", "rank-math"),
                        type: "textarea",
                        maxlength: 400
                    },
                    original_comment: {
                        label: (0,
                            s.__)("Original Comment", "rank-math"),
                        placeholder: (0,
                            s.__)("The original comment that requires a response", "rank-math"),
                        type: "textarea",
                        maxlength: 600
                    },
                    personal_information: {
                        label: (0,
                            s.__)("Personal Information", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter personal details, such as your name, age, occupation, etc.", "rank-math"),
                        type: "textarea",
                        maxlength: 400
                    },
                    purpose: {
                        label: (0,
                            s.__)("Purpose", "rank-math"),
                        placeholder: (0,
                            s.__)("What is the purpose of this bio?", "rank-math"),
                        maxlength: 200
                    },
                    personal_achievements: {
                        label: (0,
                            s.__)("Personal Achievements", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter a list of your personal achievements, separated by commas", "rank-math"),
                        type: "textarea",
                        maxlength: 400
                    },
                    company_name: {
                        label: (0,
                            s.__)("Company Name", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter the name of your company", "rank-math"),
                        maxlength: 200
                    },
                    company_information: {
                        label: (0,
                            s.__)("Company Information", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter company details, such as the company name, location, and industry", "rank-math"),
                        type: "textarea",
                        maxlength: 500
                    },
                    company_history: {
                        label: (0,
                            s.__)("Company History", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter a brief history of the company", "rank-math"),
                        type: "textarea",
                        maxlength: 500
                    },
                    team: {
                        label: (0,
                            s.__)("Team", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter a brief description of the team", "rank-math"),
                        type: "textarea",
                        maxlength: 500
                    },
                    job_title: {
                        label: (0,
                            s.__)("Job Title", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter the job title.", "rank-math"),
                        maxlength: 200
                    },
                    requirements: {
                        label: (0,
                            s.__)("Requirements", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter the key requirements for the position, separated by commas", "rank-math"),
                        type: "textarea",
                        maxlength: 400
                    },
                    responsibilities: {
                        label: (0,
                            s.__)("Responsibilities", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter a list of responsibilities, separated by commas", "rank-math"),
                        type: "textarea",
                        maxlength: 400
                    },
                    comment: {
                        label: (0,
                            s.__)("Comment", "rank-math"),
                        placeholder: (0,
                            s.__)("The comment you want to reply to.", "rank-math"),
                        type: "textarea",
                        maxlength: 600
                    },
                    hashtags: {
                        label: (0,
                            s.__)("Hashtags", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter one or more hashtags, separated by commas", "rank-math"),
                        maxlength: 200
                    },
                    tweet: {
                        label: (0,
                            s.__)("Tweet", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter the original tweet to reply to.", "rank-math"),
                        type: "textarea",
                        maxlength: 400
                    },
                    email_brief: {
                        label: (0,
                            s.__)("Email Brief", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter a brief description of the email", "rank-math"),
                        type: "textarea",
                        maxlength: 500
                    },
                    email: {
                        label: (0,
                            s.__)("Email", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter the original email", "rank-math"),
                        type: "textarea",
                        maxlength: 1e3
                    },
                    product_description: {
                        label: (0,
                            s.__)("Product Description", "rank-math"),
                        placeholder: (0,
                            s.__)("Introduce your product here. Provide a detailed description of its features and benefits, highlighting what sets it apart from competitors and why it's the perfect solution for your target audience.", "rank-math"),
                        type: "textarea",
                        maxlength: 200
                    },
                    visual_elements: {
                        label: (0,
                            s.__)("Visual Elements", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter the visual elements you want to include in the video", "rank-math"),
                        type: "textarea",
                        maxlength: 400
                    },
                    key_points: {
                        label: (0,
                            s.__)("Key Points", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter the main points you want to cover, separated by commas.", "rank-math"),
                        type: "textarea",
                        maxlength: "400"
                    },
                    host: {
                        label: (0,
                            s.__)("Host", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter the name of the host of the podcast", "rank-math"),
                        type: "textarea",
                        maxlength: 200
                    },
                    co_host: {
                        label: (0,
                            s.__)("Guest(s) or co-host", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter the name(s) separated by comma", "rank-math"),
                        type: "textarea",
                        maxlength: 200
                    },
                    cuisine: {
                        label: (0,
                            s.__)("Cuisine", "rank-math"),
                        placeholder: (0,
                            s.__)("e.g. Italian, Chinese, Mexican", "rank-math"),
                        maxlength: 200
                    },
                    type: {
                        label: (0,
                            s.__)("Type of Dish", "rank-math"),
                        placeholder: (0,
                            s.__)("e.g. soup, salad, casserole", "rank-math"),
                        maxlength: 200
                    },
                    ingredients: {
                        label: (0,
                            s.__)("Ingredients", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter the ingredients needed for the recipe, separated by commas (e.g. flour, sugar, eggs, milk)", "rank-math"),
                        type: "textarea",
                        maxlength: 1e3
                    },
                    dietary_restrictions: {
                        label: (0,
                            s.__)("Dietary restrictions", "rank-math"),
                        placeholder: (0,
                            s.__)("List any dietary restrictions that the recipe should adhere to (e.g. gluten-free, vegan, low-carb)", "rank-math"),
                        type: "textarea",
                        maxlength: 400
                    },
                    command: {
                        label: (0,
                            s.__)("Command", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter your command", "rank-math"),
                        type: "textarea",
                        maxlength: 1e3
                    },
                    instructions: {
                        label: (0,
                            s.__)("Instructions", "rank-math"),
                        type: "textarea",
                        placeholder: (0,
                            s.__)("Enter instructions", "rank-math"),
                        maxlength: 600
                    },
                    document_title: {
                        label: (0,
                            s.__)("Document Title", "rank-math"),
                        placeholder: (0,
                            s.__)("Enter the document title", "rank-math"),
                        maxlength: 200
                    }
                }[e]
            }
                , O = function(e) {
                var t = e.id
                    , n = e.data
                    , a = e.value
                    , r = e.endpoint
                    , i = h(void 0 === r ? "" : r, !0);
                return wp.element.createElement("label", {
                    htmlFor: t
                }, (0,
                    o.unescape)(n.label), i && wp.element.createElement("a", {
                    href: i + "#" + t,
                    rel: "noreferrer",
                    target: "_blank",
                    title: n.tooltip
                }, wp.element.createElement("em", {
                    className: "dashicons-before dashicons-editor-help rank-math-tooltip"
                })), n.maxlength && wp.element.createElement("span", {
                    className: "limit"
                }, wp.element.createElement("span", {
                    className: "count"
                }, (0,
                    o.size)((0,
                    o.isArray)(a) ? a.join(" ") : a)), "/", n.maxlength))
            }
                , I = function(e, t, n, a) {
                var r = wp.data.select("rank-math-content-ai").getContentAiAttributes();
                return wp.element.createElement("form", {
                    className: "rank-math-ai-tools"
                }, (0,
                    o.map)(e, (function(e, i) {
                        var s = P(i);
                        s.placeholder = (0,
                            o.isEmpty)(e.placeholder) ? s.placeholder : e.placeholder,
                            s.label = (0,
                                o.isEmpty)(e.label) ? s.label : e.label;
                        var l = e.isRequired
                            , u = (0,
                            o.isArray)(t[i]) ? t[i].join(" ") : t[i]
                            , d = _()("form-field", {
                            "is-required": l,
                            "limit-reached": !(0,
                                o.isUndefined)(s.maxlength) && !(0,
                                o.isUndefined)(u) && u.length > s.maxlength
                        })
                            , p = (0,
                            o.isUndefined)(r[i]) ? function(e, t) {
                            return (0,
                                o.isUndefined)(e.default) ? t : e.default
                        }(e, s.default) : r[i];
                        if (!(0,
                            o.isEmpty)(s.options) && "button" === s.type)
                            return wp.element.createElement("div", {
                                className: d,
                                key: i
                            }, wp.element.createElement(O, {
                                id: i,
                                data: s,
                                value: "",
                                endpoint: n
                            }), wp.element.createElement(m.__experimentalToggleGroupControl, {
                                value: p
                            }, (0,
                                o.map)(s.options, (function(e, t) {
                                    return wp.element.createElement(m.ToolbarButton, {
                                        key: t,
                                        value: e.value,
                                        isPressed: e.value === p,
                                        onClick: function() {
                                            return a(i, e.value)
                                        }
                                    }, (0,
                                        o.isEmpty)(e.label) ? e.value : e.label)
                                }
                            ))));
                        if (!(0,
                            o.isUndefined)(s.options)) {
                            var h = (0,
                                c.createRef)()
                                , g = {
                                add: function(e) {
                                    var n = (0,
                                        o.isArray)(t[i]) ? [e.detail.data.value] : e.detail.data.value;
                                    !(0,
                                        o.isUndefined)(t[i]) && (0,
                                        o.isArray)(t[i]) && (n = t[i]).push(e.detail.data.value),
                                        a(i, n)
                                },
                                remove: function(e) {
                                    if (!(0,
                                        o.isArray)(t[i]))
                                        return a(i, ""),
                                            !1;
                                    var n = (0,
                                        o.remove)(t[i], (function(t) {
                                            return t !== e.detail.data.value
                                        }
                                    ));
                                    return a(i, n),
                                        !1
                                }
                            }
                                , f = {
                                addTagOnBlur: !0,
                                maxTags: s.maxTags ? s.maxTags : "100",
                                whitelist: s.options,
                                focusableTags: !0,
                                transformTag: function(e) {
                                    e.value = e.value.replaceAll(",", "")
                                },
                                templates: {
                                    tag: function(e) {
                                        var t = (0,
                                            o.isUndefined)(e.icon) ? "" : e.icon;
                                        try {
                                            return "<tag ".concat(A(e), " title='").concat(e.value, "' contenteditable='false' spellcheck=\"false\" class='tagify__tag'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<x title='remove tag' class='tagify__tag__removeBtn'></x>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t").concat(t, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class='tagify__tag-text'>").concat(e.value, "</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</tag>")
                                        } catch (e) {}
                                    },
                                    dropdownItem: function(e) {
                                        var t = (0,
                                            o.isUndefined)(e.icon) ? "" : e.icon;
                                        try {
                                            return "<div ".concat(A(e), " class='tagify__dropdown__item' >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t").concat(t, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span>").concat(e.value, "</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>")
                                        } catch (e) {
                                            console.error(e)
                                        }
                                    }
                                },
                                dropdown: {
                                    enabled: 0,
                                    maxItems: 100,
                                    closeOnSelect: !0
                                },
                                callbacks: g
                            };
                            return wp.element.createElement("div", {
                                className: d + " content-ai-tagify rank-math-focus-keyword",
                                key: i
                            }, wp.element.createElement(O, {
                                id: i,
                                data: s,
                                value: t[i],
                                endpoint: n
                            }), wp.element.createElement(C, {
                                id: i,
                                ref: h,
                                mode: "input",
                                settings: f,
                                placeholder: s.placeholder,
                                initialValue: p
                            }))
                        }
                        return (0,
                            o.isEmpty)(s.type) || "textarea" !== s.type ? wp.element.createElement("div", {
                            className: d,
                            key: i
                        }, wp.element.createElement(O, {
                            id: i,
                            data: s,
                            value: p,
                            endpoint: n
                        }), wp.element.createElement(m.TextControl, {
                            id: i,
                            onChange: function(e) {
                                return a(i, e)
                            },
                            placeholder: s.placeholder,
                            className: l ? "is-required" : "",
                            required: l ? "required" : "",
                            value: p
                        })) : wp.element.createElement("div", {
                            className: d,
                            key: i
                        }, wp.element.createElement(O, {
                            id: i,
                            data: s,
                            value: t[i],
                            endpoint: n
                        }), wp.element.createElement(m.TextareaControl, {
                            id: i,
                            onChange: function(e) {
                                return a(i, e)
                            },
                            placeholder: s.placeholder,
                            className: l ? "is-required" : "",
                            rows: s.rows ? s.rows : "5",
                            required: l ? "required" : "",
                            value: p
                        }))
                    }
                )))
            }
                , N = wp.apiFetch
                , M = n.n(N)
                , R = (0,
                s.__)("Sorry, the request has failed. If the issue persists, please contact our Support for assistance.", "rank-math")
                , j = rankMath.contentAICredits
                , q = function(e, t, n, a, r, i, s) {
                if (s < 2 && "could_not_generate" === e.code)
                    D(t, n, a, r, i, s + 1);
                else {
                    var l = rankMath.contentAIErrors;
                    a({
                        error: (0,
                            o.isUndefined)(l[e.code]) ? R : l[e.code]
                    })
                }
            }
                , D = function e(t, n, a, r, s) {
                var l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                i().ajax({
                    url: rankMath.contentAiUrl + t,
                    type: "POST",
                    data: n,
                    success: function(e) {
                        if ((0,
                            o.isEmpty)(e.error)) {
                            !function(e, t, n, a) {
                                var r = {
                                    endpoint: t,
                                    attributes: n,
                                    outputs: (0,
                                        o.isEmpty)(e.meta) ? e.results : e.meta
                                };
                                a && (r.isChat = !0),
                                (0,
                                    o.isUndefined)(e.credits) || (r.credits = {
                                    credits: e.credits,
                                    plan: e.plan,
                                    refreshDate: e.refreshDate
                                }),
                                    M()({
                                        method: "POST",
                                        path: "/rankmath/v1/ca/saveOutput",
                                        data: r
                                    }).then((function(e) {
                                            a || (0,
                                                o.isUndefined)(rankMath.contentAIHistory) || (rankMath.contentAIHistory = e)
                                        }
                                    )).catch((function(e) {
                                            console.log(e)
                                        }
                                    ))
                            }(e, t, n, r);
                            var c = (0,
                                o.isEmpty)(e.meta) ? e.results : e.meta;
                            if (!(0,
                                o.isEmpty)(e.warning)) {
                                var u = rankMath.contentAIErrors;
                                c.push({
                                    warning: (0,
                                        o.isUndefined)(u[e.warning]) ? R : u[e.warning]
                                })
                            }
                            a(c),
                                function(e, t) {
                                    if (!(0,
                                        o.isUndefined)(e.credits)) {
                                        var n = e.credits;
                                        (0,
                                            o.isEmpty)(n) || (n = n.available - n.taken,
                                            j = n = n < 0 ? 0 : n,
                                        t && t(n),
                                        i()(".credits-remaining").length && i()(".credits-remaining strong").text(n))
                                    }
                                }(e, s)
                        } else
                            q(e.error, t, n, a, r, s, l)
                    },
                    error: function(i) {
                        try {
                            var c = JSON.parse(i.responseText);
                            if (!(0,
                                o.isEmpty)(c.err_key)) {
                                if ("not_found" === c.err_key && l < 2)
                                    return void M()({
                                        method: "GET",
                                        path: "/rankmath/v1/ca/migrateUser"
                                    }).then((function(i) {
                                            "completed" === i && e(t, n, a, r, s, l + 1)
                                        }
                                    )).catch((function(e) {
                                            console.log(e)
                                        }
                                    ));
                                var u = rankMath.contentAIErrors;
                                return void a({
                                    error: (0,
                                        o.isUndefined)(u[c.err_key]) ? R : u[c.err_key]
                                })
                            }
                        } catch (e) {
                            a({
                                error: R
                            })
                        }
                        a({
                            error: R
                        })
                    }
                })
            }
                , L = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    , n = arguments.length > 2 ? arguments[2] : void 0
                    , a = arguments.length > 3 ? arguments[3] : void 0
                    , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ""
                    , i = rankMath.connectData;
                t = (0,
                    o.merge)(t, {
                    username: i.username,
                    api_key: i.api_key,
                    site_url: i.site_url,
                    plugin_version: rankMath.version,
                    debug: "1"
                }),
                    j ? (!(0,
                        o.isUndefined)(t.language) && t.language || (t.language = rankMath.ca_language),
                        D(e, t, n, a, r)) : q({
                        code: "account_limit_reached"
                    }, e, t, n, a, r, 1)
            }
                , B = function(e, t) {
                var n = {
                    choices: t.default
                }
                    , a = wp.data.select("rank-math-content-ai").getContentAiAttributes();
                return (0,
                    o.map)(e, (function(e, t) {
                        var r = (0,
                            o.isUndefined)(a[t]) ? function(e, t) {
                            return (0,
                                o.isUndefined)(t.default) ? P(e).default : t.default
                        }(t, e) : a[t];
                        (0,
                            o.isUndefined)(r) || (n[t] = r)
                    }
                )),
                    n
            }
                , z = n(787)
                , H = n.n(z)
                , F = wp.blocks
                , V = new (H().Converter)({
                noHeaderId: !0,
                tables: !0,
                literalMidWordUnderscores: !0,
                omitExtraWLInCodeBlocks: !0,
                simpleLineBreaks: !0,
                strikethrough: !0
            })
                , W = function(e) {
                return e.replace(/((?:^|\n)```)([^\n`]+)(```(?:$|\n))/, (function(e, t, n, a) {
                        return "".concat(t, "\n").concat(n, "\n").concat(a)
                    }
                ))
            }
                , $ = function(e) {
                return e.replace(/(^|\n)•( +)/g, "$1*$2")
            }
                , U = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0,
                    o.isString)(e) ? t ? V.makeMarkdown(e) : rankMath.isContentAIPage || "gutenberg" === rankMath.currentEditor ? (0,
                    F.serialize)((0,
                    F.rawHandler)({
                    HTML: V.makeHtml(W($(e))),
                    mode: "BLOCKS"
                })) : V.makeHtml(W($(e))) : e
            }
                , G = function() {
                return new Worker(URL.createObjectURL(new Blob(["\n\tlet words = [];\n\tlet currentWordIndex = 0;\n\tlet currentLetterIndex = 0;\n\tlet typingSpeed = 25; // Adjust the typing speed as needed\n\t\n\tfunction typeWords() {\n\t\tif ( currentWordIndex >= words.length ) {\n\t\t\tpostMessage('rank_math_process_complete')\n\t\t\treturn\n\t\t}\n\t\n\t\tconst currentWord = words[ currentWordIndex ];\n\t\tif ( currentLetterIndex < currentWord.length ) {\n\t\t\tpostMessage( currentWord );\n\t\t\tcurrentLetterIndex = currentLetterIndex + currentWord.length;\n\t\t} else {\n\t\t\tcurrentWordIndex++;\n\t\t\tcurrentLetterIndex = 0;\n\t\t\tpostMessage(' '); // Add space between words\n\t\t}\n\t\n\t\tsetTimeout( typeWords, typingSpeed );\n\t}\n\t\n\tself.onmessage = function (event) {\n\t\twords = event.data.split(' ');\n\t\ttypeWords();\n\t};\n\t"],{
                    type: "application/javascript"
                })))
            };
            function K(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var a, r, i, o, s = [], l = !0, c = !1;
                        try {
                            if (i = (n = n.call(e)).next,
                            0 === t) {
                                if (Object(n) !== n)
                                    return;
                                l = !1
                            } else
                                for (; !(l = (a = i.call(n)).done) && (s.push(a.value),
                                s.length !== t); l = !0)
                                    ;
                        } catch (e) {
                            c = !0,
                                r = e
                        } finally {
                            try {
                                if (!l && null != n.return && (o = n.return(),
                                Object(o) !== o))
                                    return
                            } finally {
                                if (c)
                                    throw r
                            }
                        }
                        return s
                    }
                }(e, t) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return J(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return J(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function J(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++)
                    a[n] = e[n];
                return a
            }
            var Y = function(e) {
                var t = e.value
                    , n = e.showWordCount
                    , a = void 0 === n || n
                    , r = e.addTypingEffect
                    , i = void 0 === r || r
                    , o = t.split(" ")
                    , l = K((0,
                    c.useState)(i ? "" : t), 2)
                    , u = l[0]
                    , d = l[1]
                    , m = K((0,
                    c.useState)(null), 2)
                    , p = m[0]
                    , h = m[1];
                i && ((0,
                    c.useEffect)((function() {
                        var e = G();
                        return h(e),
                            e.onmessage = function(e) {
                                "rank_math_process_complete" !== e.data && d((function(t) {
                                        return t + e.data
                                    }
                                ))
                            }
                            ,
                            function() {
                                e.terminate()
                            }
                    }
                ), []),
                    (0,
                        c.useEffect)((function() {
                            p && (d(""),
                                p.postMessage(t))
                        }
                    ), [t, p]));
                var g = u.length < o.length ? "content typing" : "content";
                return wp.element.createElement(React.Fragment, null, a && wp.element.createElement("div", {
                    className: "word-count"
                }, (0,
                    s.sprintf)((0,
                    s.__)("Words: %d", "rank-math"), u.split(" ").length)), wp.element.createElement("div", {
                    className: g,
                    dangerouslySetInnerHTML: {
                        __html: U(u)
                    }
                }))
            }
                , Q = function(e) {
                return "".concat(e, "-").concat((new Date).getTime())
            }
                , X = function(e) {
                var t = elementor.$preview[0].contentWindow.document
                    , n = t.getElementsByClassName("rank-math-active");
                n.length || (n = (n = t.getElementsByClassName("elementor-widget-container"))[n.length - 1]),
                    i()(n).trigger("click");
                var a = i()(n).find("[data-elementor-setting-key]")
                    , r = a.data();
                setTimeout((function() {
                        if ("title" === r.elementorSettingKey) {
                            var t = i()('[data-setting="title"]');
                            t.val(t.val() + " " + e),
                                a.text(a.text() + " " + e)
                        } else {
                            var n = tinymce.activeEditor;
                            n.selection.select(n.getBody(), !0),
                                n.selection.collapse(!1),
                                n.insertContent(" " + e)
                        }
                    }
                ), 300),
                    i()(n).removeClass("rank-math-active")
            }
                , Z = function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                !function() {
                    var e = elementor.settings.page.getEditedView().getContainer();
                    if (!e.children.length) {
                        var t = {
                            model: {
                                custom: "",
                                elType: "widget",
                                widgetType: "text-editor"
                            },
                            options: {
                                at: void 0,
                                side: "top",
                                default: "",
                                value: "",
                                text: "",
                                html: ""
                            },
                            container: e
                        };
                        $e.run("preview/drop", t)
                    }
                }(),
                    setTimeout((function() {
                            !function(e, t) {
                                var n = elementor.$preview[0].contentWindow.document
                                    , a = Array.from(n.getElementsByClassName("elementor-widget-container"));
                                if ((0,
                                    o.forEach)(a.reverse(), (function(e) {
                                        e.innerText && i()(e).addClass("rank-math-active")
                                    }
                                )),
                                    e = U(e),
                                    t) {
                                    var r = G();
                                    r.onmessage = function(e) {
                                        var t = e.data;
                                        t && "rank_math_process_complete" !== t && X(t)
                                    }
                                        ,
                                        r.postMessage(e)
                                } else
                                    X(e)
                            }(e, t)
                        }
                    ), 500)
            }
                , ee = wp.compose;
            function te(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var a, r, i, o, s = [], l = !0, c = !1;
                        try {
                            if (i = (n = n.call(e)).next,
                            0 === t) {
                                if (Object(n) !== n)
                                    return;
                                l = !1
                            } else
                                for (; !(l = (a = i.call(n)).done) && (s.push(a.value),
                                s.length !== t); l = !0)
                                    ;
                        } catch (e) {
                            c = !0,
                                r = e
                        } finally {
                            try {
                                if (!l && null != n.return && (o = n.return(),
                                Object(o) !== o))
                                    return
                            } finally {
                                if (c)
                                    throw r
                            }
                        }
                        return s
                    }
                }(e, t) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return ne(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return ne(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function ne(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++)
                    a[n] = e[n];
                return a
            }
            var ae = function(e) {
                var t = e.value
                    , n = e.label
                    , a = void 0 === n ? "" : n
                    , r = e.disabled
                    , i = void 0 !== r && r
                    , o = e.onClick
                    , l = void 0 === o ? "" : o
                    , u = te((0,
                    c.useState)(), 2)
                    , d = u[0]
                    , p = u[1];
                l && (t = (0,
                    F.serialize)(wp.data.select("core/block-editor").getBlocks())),
                    a = a || (0,
                        s.__)("Copy", "rank-math");
                var h = (0,
                    ee.useCopyToClipboard)(t);
                return wp.element.createElement(m.Button, {
                    variant: "secondary",
                    className: "button structured-data-copy is-small",
                    ref: h,
                    disabled: i,
                    onClick: function() {
                        p(!0),
                            setTimeout((function() {
                                    p(!1)
                                }
                            ), 700)
                    }
                }, wp.element.createElement("i", {
                    className: "rm-icon rm-icon-copy"
                }), d ? (0,
                    s.__)("Copied!", "rank-math") : a)
            }
                , re = function(e) {
                var t = e.value
                    , n = e.index
                    , a = void 0 === n ? 0 : n
                    , r = e.isPage
                    , l = void 0 !== r && r
                    , c = e.endpoint
                    , d = e.typingEffect
                    , p = void 0 === d || d
                    , h = e.isSerpPreview
                    , g = void 0 !== h && h
                    , f = function(e, t) {
                    if ("Frequently_Asked_Questions" !== t)
                        return e;
                    var n = '<div class="wp-block-rank-math-faq-block">'
                        , a = [];
                    return a.questions = (0,
                        o.map)(e, (function(e) {
                            return n += '<div class="rank-math-faq-item"><h3 class="rank-math-question">' + e.question + '</h3><div class="rank-math-answer">' + e.answer + "</div></div>",
                                {
                                    id: Q("faq-question"),
                                    title: e.question,
                                    content: e.answer,
                                    visible: !0
                                }
                        }
                    )),
                        n += "</div>",
                    '\x3c!-- wp:rank-math/faq-block {"questions":' + JSON.stringify(a.questions) + "} --\x3e" + n + "\x3c!-- /wp:rank-math/faq-block --\x3e"
                }(t, c)
                    , _ = t;
                return (0,
                    o.isArray)(t) && (_ = "",
                    (0,
                        o.map)(t, (function(e) {
                            _ += "<h2>" + e.question + "</h2><span>" + e.answer + "</span>"
                        }
                    ))),
                (0,
                    o.isObject)(t) && !(0,
                    o.isArray)(t) && (_ = "",
                    (0,
                        o.map)(t, (function(e, t) {
                            _ += "<h4>" + (0,
                                o.startCase)(t) + "</h4><span>" + e + "</span>"
                        }
                    ))),
                    wp.element.createElement("div", {
                        className: "output-item",
                        key: a
                    }, wp.element.createElement("div", {
                        className: "output-actions"
                    }, wp.element.createElement(ae, {
                        value: (0,
                            o.isString)(f) ? f : _
                    }), ((0,
                        o.isUndefined)(rankMath.currentEditor) || (0,
                        o.includes)(["gutenberg", "classic", "elementor"], rankMath.currentEditor) || g) && !l && wp.element.createElement(m.Button, {
                        variant: "secondary",
                        className: "button structured-data-test is-small",
                        onClick: function() {
                            var e = !1;
                            if (!l) {
                                if ("SEO_Title" === c || "SEO_Meta" === c && !(0,
                                    o.isEmpty)(t.title)) {
                                    var n = (0,
                                        o.isUndefined)(t.title) ? t : t.title;
                                    (0,
                                        u.dispatch)("rank-math").updateSerpTitle(n),
                                        (0,
                                            u.dispatch)("rank-math").updateTitle(n),
                                        e = !0
                                }
                                if ("SEO_Description" === c || "SEO_Meta" === c && !(0,
                                    o.isEmpty)(t.description)) {
                                    var a = (0,
                                        o.isUndefined)(t.description) ? t : t.description;
                                    (0,
                                        u.dispatch)("rank-math").updateSerpDescription(a),
                                        (0,
                                            u.dispatch)("rank-math").updateDescription(a),
                                        e = !0
                                }
                                if ("Opengraph" === c) {
                                    var r = "twitter" === wp.data.select("rank-math").getSocialTab();
                                    (0,
                                        o.isEmpty)(t.title) || (r ? (0,
                                        u.dispatch)("rank-math").updateTwitterTitle(t.title) : (0,
                                        u.dispatch)("rank-math").updateFacebookTitle(t.title),
                                        e = !0),
                                    (0,
                                        o.isEmpty)(t.description) || (r ? (0,
                                        u.dispatch)("rank-math").updateTwitterDescription(t.description) : (0,
                                        u.dispatch)("rank-math").updateFacebookDescription(t.description),
                                        e = !0)
                                }
                            }
                            e ? i()(".rank-math-contentai-modal-overlay .components-modal__header button").trigger("click") : function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                                if (e = U(e),
                                "elementor" === rankMath.currentEditor)
                                    return Z(e, !1),
                                        void i()(".rank-math-contentai-modal-overlay .components-modal__header button").trigger("click");
                                if ("classic" === rankMath.currentEditor)
                                    return tinymce.activeEditor.insertContent(" " + e),
                                        void i()(".rank-math-contentai-modal-overlay .components-modal__header button").trigger("click");
                                var n = (0,
                                    u.select)("core/block-editor").getSelectedBlock()
                                    , a = (0,
                                    u.select)("core/block-editor").getBlocks()
                                    , r = 0;
                                (0,
                                    o.isNull)(n) ? r = a.length : (r = a.map((function(e) {
                                        return e.clientId === n.clientId
                                    }
                                )).indexOf(!0),
                                    r = n.attributes.content ? r + 1 : r);
                                var s = "";
                                s = "Frequently_Asked_Questions" === t ? (0,
                                    F.createBlock)("rank-math/faq-block", {
                                    questions: (0,
                                        o.map)(e, (function(e) {
                                            return {
                                                id: Q("faq-question"),
                                                title: e.question,
                                                content: e.answer.replaceAll(/(?:\r\n|\r|\n)/g, "<br>").trim(),
                                                visible: !0
                                            }
                                        }
                                    ))
                                }) : (0,
                                    F.rawHandler)({
                                    HTML: e,
                                    mode: "BLOCKS"
                                }).map((function(e) {
                                        return (0,
                                            F.createBlock)(e.name, e.attributes, e.innerBlocks)
                                    }
                                )),
                                    (0,
                                        u.dispatch)("core/block-editor").insertBlocks(s, r),
                                    i()(".rank-math-contentai-modal-overlay .components-modal__header button").trigger("click")
                            }(t, c)
                        }
                    }, wp.element.createElement("i", {
                        className: "rm-icon rm-icon-plus"
                    }), wp.element.createElement("span", null, (0,
                        s.__)("Insert", "rank-math")))), wp.element.createElement(Y, {
                        value: _,
                        addTypingEffect: p
                    }))
            }
                , ie = function(e) {
                var t = e.value;
                return wp.element.createElement("div", {
                    className: "content-ai-error",
                    dangerouslySetInnerHTML: {
                        __html: t
                    }
                })
            }
                , oe = function(e, t, n) {
                var a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
                    , r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                if (!(0,
                    o.isEmpty)(e)) {
                    if ((0,
                        o.isObject)(e) && !(0,
                        o.isArray)(e)) {
                        var i = "";
                        return (0,
                            o.forEach)(Object.keys(e), (function(t) {
                                var n = "";
                                (0,
                                    o.forEach)(e[t], (function(e) {
                                        n += e + "<br /><br />"
                                    }
                                )),
                                    i += "<div><h4>" + (0,
                                        o.startCase)(t) + "</h4>" + n + "</div>"
                            }
                        )),
                            wp.element.createElement("div", {
                                className: "inner-wrapper"
                            }, wp.element.createElement(re, {
                                value: i,
                                isPage: t,
                                endpoint: n,
                                typingEffect: a,
                                isSerpPreview: r
                            }))
                    }
                    return (0,
                        o.isArray)(e) ? wp.element.createElement("div", {
                        className: "inner-wrapper"
                    }, "Frequently_Asked_Questions" !== n && (0,
                        o.map)(e, (function(e, i) {
                            return (0,
                                o.isEmpty)(e.warning) ? wp.element.createElement(re, {
                                value: e,
                                key: i,
                                index: i,
                                isPage: t,
                                endpoint: n,
                                typingEffect: a,
                                isSerpPreview: r
                            }) : wp.element.createElement(ie, {
                                value: '<div class="notice notice-error">' + e.warning + "</div>"
                            })
                        }
                    )), "Frequently_Asked_Questions" === n && wp.element.createElement(re, {
                        value: e,
                        isPage: t,
                        endpoint: n,
                        typingEffect: a,
                        isSerpPreview: r
                    })) : (0,
                        o.isArray)(e) || (0,
                        o.isObject)(e) ? void 0 : wp.element.createElement(ie, {
                        value: e
                    })
                }
            }
                , se = function(e) {
                return e && e(""),
                (0,
                    o.isNull)(document.getElementById("rank-math-content-ai-modal-wrapper")) || (document.getElementById("rank-math-content-ai-modal-wrapper").remove(),
                    document.querySelector(".rank-math-contentai-modal-overlay").remove()),
                    !0
            }
                , le = function(e) {
                var t = e.title
                    , n = e.helpLink
                    , a = (0,
                    s.sprintf)((0,
                    s.__)("Learn how to use this %s Tool effectively.", "rank-math"), "<strong>".concat(t, "</strong>"))
                    , r = (0,
                    o.includes)(n, "play-video");
                return wp.element.createElement(React.Fragment, null, wp.element.createElement("div", {
                    key: "title",
                    className: "rank-math-video-tutorial"
                }, wp.element.createElement("div", {
                    className: "info"
                }, wp.element.createElement("p", null, wp.element.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: a
                    }
                })), wp.element.createElement("a", {
                    className: r ? "" : "button button-primary is-red",
                    href: n,
                    target: "_blank",
                    rel: "noreferrer"
                }, r && wp.element.createElement("span", {
                    className: "rm-icon-youtube"
                }), !r && (0,
                    s.__)("Click Here", "rank-math")))), wp.element.createElement("p", null, wp.element.createElement("em", null, (0,
                    s.__)("1 Word Output = 1 Credit", "rank-math"))))
            }
                , ce = function(e) {
                var t = e.width
                    , n = void 0 === t ? 40 : t
                    , a = e.showProNotice
                    , r = void 0 !== a && a
                    , i = e.isBulkEdit
                    , o = void 0 !== i && i;
                if (r)
                    return function(e) {
                        return wp.element.createElement("div", {
                            id: "rank-math-pro-cta",
                            className: "center rank-math-content-ai-warning-wrapper"
                        }, wp.element.createElement("div", {
                            className: "rank-math-cta-box blue-ticks top-20 less-padding " + e
                        }, wp.element.createElement("h3", null, (0,
                            s.__)("🔒 This is a PRO-Only Feature", "rank-math")), wp.element.createElement("p", null, (0,
                            s.__)("We are sorry but this feature is only available to Rank Math PRO/Business/Agency Users. Unlock this feature and many more by getting a Rank Math plan.", "rank-math")), wp.element.createElement("ul", null, wp.element.createElement("li", null, (0,
                            s.__)("Bulk Edit SEO Tags", "rank-math")), wp.element.createElement("li", null, (0,
                            s.__)("Advanced Google Analytics 4 Integration", "rank-math")), wp.element.createElement("li", null, (0,
                            s.__)("Keyword Rank Tracker", "rank-math")), wp.element.createElement("li", null, (0,
                            s.__)("Free Content AI Trial", "rank-math")), wp.element.createElement("li", null, (0,
                            s.__)("SEO Performance Email Reports", "rank-math"))), wp.element.createElement(m.Button, {
                            href: rankMath.links.pro,
                            target: "_blank",
                            className: "button button-primary is-green"
                        }, (0,
                            s.__)("Learn More", "rank-math"))))
                    }(n);
                var l = rankMath.isUserRegistered
                    , c = rankMath.contentAIPlan && "free" !== rankMath.contentAIPlan
                    , u = rankMath.contentAICredits > 0
                    , d = rankMath.contentAiMigrating;
                if (l && c && u && !d)
                    return null;
                var p = "width-" + n;
                return l && c ? d ? wp.element.createElement("div", {
                    id: "rank-math-pro-cta",
                    className: "center rank-math-content-ai-warning-wrapper"
                }, wp.element.createElement("div", {
                    style: {
                        textAlign: "center"
                    },
                    className: "rank-math-cta-box less-padding top-20 " + p
                }, wp.element.createElement("h3", null, (0,
                    s.__)("Server Maintenance Underway", "rank-math")), wp.element.createElement("p", null, (0,
                    s.__)("We are working on improving your Content AI experience. Please wait for 5 minutes and then refresh to start using the optimized Content AI. If you see this for more than 5 minutes, please ", "rank-math"), wp.element.createElement("a", {
                    href: "https://rankmath.com/support/",
                    target: "_blank",
                    rel: "noreferrer"
                }, (0,
                    s.__)("reach out to the support team.", "rank-math")), (0,
                    s.__)(" We are sorry for the inconvenience.", "rank-math")))) : wp.element.createElement("div", {
                    id: "rank-math-pro-cta",
                    className: "center rank-math-content-ai-warning-wrapper"
                }, wp.element.createElement("div", {
                    className: "rank-math-cta-box less-padding top-20 " + p
                }, wp.element.createElement("h3", null, (0,
                    s.__)("⛔️ Content AI Credit Alert!", "rank-math")), wp.element.createElement("p", null, (0,
                    s.__)("Your monthly Content AI credits have been fully utilized. To continue enjoying seamless content creation, simply click the button below to upgrade your plan and access more credits.", "rank-math")), wp.element.createElement(m.Button, {
                    href: rankMath.links["content-ai"] + "?play-video=ioPeVIntJWw&utm_source=Plugin&utm_medium=Buy+Credits+Button&utm_campaign=WP",
                    className: "button button-primary is-green",
                    target: "_blank"
                }, (0,
                    s.__)("Learn More", "rank-math")), wp.element.createElement(m.Button, {
                    variant: "link",
                    href: rankMath.links["content-ai-restore-credits"] + "?utm_source=Plugin&utm_medium=Buy+Credits+Button&utm_campaign=WP",
                    className: "button button-secondary",
                    target: "_blank"
                }, (0,
                    s.__)("Missing Credits?", "rank-math")))) : wp.element.createElement("div", {
                    id: "rank-math-pro-cta",
                    className: "center rank-math-content-ai-warning-wrapper"
                }, wp.element.createElement("div", {
                    className: "rank-math-cta-box blue-ticks top-20 less-padding " + p
                }, wp.element.createElement("h3", null, (0,
                    s.__)("🚀 Supercharge Your Content With AI", "rank-math")), wp.element.createElement("p", null, !l && !o && (0,
                    s.__)("Start using Content AI by connecting your RankMath.com Account", "rank-math"), l && !c && !o && (0,
                    s.__)("To access this Content AI feature, you need to have an active subscription plan.", "rank-math"), o && (0,
                    s.__)("You are one step away from unlocking this premium feature along with many more.", "rank-math")), function(e, t) {
                    return t ? wp.element.createElement("ul", null, wp.element.createElement("li", null, (0,
                        s.__)("Bulk Update Your SEO Meta using AI", "rank-math")), wp.element.createElement("li", null, (0,
                        s.__)("Get Access to 40+ AI SEO Tools", "rank-math")), wp.element.createElement("li", null, (0,
                        s.__)("125+ Expert-Written Prompts", "rank-math")), wp.element.createElement("li", null, (0,
                        s.__)("1-Click Competitor Content Research", "rank-math")), wp.element.createElement("li", null, (0,
                        s.__)("1-Click WooCommerce Product Descriptions", "rank-math"))) : 40 === e ? wp.element.createElement("ul", null, wp.element.createElement("li", null, (0,
                        s.__)("1-Click SEO Content", "rank-math")), wp.element.createElement("li", null, (0,
                        s.__)("1-Click SEO Meta", "rank-math")), wp.element.createElement("li", null, (0,
                        s.__)("40+ Specialized AI Tools", "rank-math")), wp.element.createElement("li", null, (0,
                        s.__)("1-Click Competitor Research", "rank-math")), wp.element.createElement("li", null, (0,
                        s.__)("125+ Pre-Built Prompts", "rank-math"))) : wp.element.createElement("ul", null, wp.element.createElement("li", null, (0,
                        s.__)("Gain access to 40+ advanced AI tools, empowering your content strategy.", "rank-math")), wp.element.createElement("li", null, (0,
                        s.__)("Experience the revolutionary AI-powered Content Editor for unparalleled efficiency.", "rank-math")), wp.element.createElement("li", null, (0,
                        s.__)("Engage with RankBot, your personal AI Chat Assistant, for real-time assistance.", "rank-math")))
                }(n, o), !l && wp.element.createElement(m.Button, {
                    href: rankMath.connectSiteUrl,
                    className: "button button-primary is-green"
                }, (0,
                    s.__)("Connect Now", "rank-math")), l && !c && wp.element.createElement(m.Button, {
                    href: rankMath.links["content-ai-settings"] + "?play-video=ioPeVIntJWw&utm_source=Plugin&utm_medium=Buy+Plan+Button&utm_campaign=WP",
                    className: "button button-primary is-green",
                    target: "_blank"
                }, (0,
                    s.__)("Learn More", "rank-math"))))
            }
                , ue = function() {
                return !rankMath.isUserRegistered || !rankMath.contentAIPlan || !rankMath.contentAICredits || rankMath.contentAiMigrating
            };
            function de(e) {
                return de = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                    ,
                    de(e)
            }
            function me(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }
                    ))),
                        n.push.apply(n, a)
                }
                return n
            }
            function pe(e, t, n) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" !== de(e) || null === e)
                            return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var a = n.call(e, t || "default");
                            if ("object" !== de(a))
                                return a;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" === de(t) ? t : String(t)
                }(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                    e
            }
            function he(e) {
                return function(e) {
                    if (Array.isArray(e))
                        return _e(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(e) || fe(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function ge(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var a, r, i, o, s = [], l = !0, c = !1;
                        try {
                            if (i = (n = n.call(e)).next,
                            0 === t) {
                                if (Object(n) !== n)
                                    return;
                                l = !1
                            } else
                                for (; !(l = (a = i.call(n)).done) && (s.push(a.value),
                                s.length !== t); l = !0)
                                    ;
                        } catch (e) {
                            c = !0,
                                r = e
                        } finally {
                            try {
                                if (!l && null != n.return && (o = n.return(),
                                Object(o) !== o))
                                    return
                            } finally {
                                if (c)
                                    throw r
                            }
                        }
                        return s
                    }
                }(e, t) || fe(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function fe(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return _e(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _e(e, t) : void 0
                }
            }
            function _e(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++)
                    a[n] = e[n];
                return a
            }
            var be = function(e) {
                var t, n = e.data, a = e.setEndpoint, r = void 0 !== a && a, l = e.isPage, d = void 0 !== l && l, p = e.setCredits, h = void 0 !== p && p, g = e.callApi, f = void 0 !== g && g, _ = n.endpoint, b = n.title, v = n.params, w = n.icon, k = n.output, y = n.helpLink, E = ge((0,
                    c.useState)(B(v, k)), 2), x = E[0], T = E[1], S = ge((0,
                    c.useState)(), 2), C = S[0], A = S[1], P = ge((0,
                    c.useState)(), 2), O = P[0], N = P[1], M = ge((0,
                    c.useState)(!1), 2), R = M[0], j = M[1], q = ge((0,
                    c.useState)([]), 2), D = q[0], z = q[1], H = ge((0,
                    c.useState)([]), 2), F = H[0], V = H[1], W = function(e) {
                    return (0,
                        o.compact)((0,
                        o.map)(rankMath.contentAIHistory, (function(t) {
                            if (t.key === e)
                                return t.output
                        }
                    )))
                }(_);
                (0,
                    c.useEffect)((function() {
                        if ((0,
                            o.isArray)(D) && "Frequently_Asked_Questions" !== _) {
                            (0,
                                o.isString)(F) && V("");
                            for (var e = 0, t = function(t) {
                                if (t > 0) {
                                    var n = (0,
                                        o.isObject)(D[t - 1]) ? Object.values(D[t - 1]).join(" ") : D[t - 1];
                                    e += 110 * n.split(" ").length
                                }
                                setTimeout((function() {
                                        return V((function(e) {
                                                return [].concat(he(e), [D[t]])
                                            }
                                        ))
                                    }
                                ), e)
                            }, n = 0; n <= D.length - 1; n++)
                                t(n)
                        } else
                            V(D)
                    }
                ), [D]),
                    (0,
                        c.useEffect)((function() {
                            f && (A(!0),
                                N(!0),
                                j(!1),
                                L(_, x, $, !1, h))
                        }
                    ), []);
                var $ = function(e) {
                    (0,
                        o.isEmpty)(e.error) ? z(e.faqs ? e.faqs : e) : z('<div class="notice notice-error">' + e.error + "</div>"),
                        A(!1),
                        N(!1)
                }
                    , U = (0,
                    c.useCallback)((function(e, t) {
                        x[e] = t,
                            T(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? me(Object(n), !0).forEach((function(t) {
                                            pe(e, t, n[t])
                                        }
                                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : me(Object(n)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        }
                                    ))
                                }
                                return e
                            }({}, x)),
                            (0,
                                u.dispatch)("rank-math-content-ai").updateAIAttributes(e, t),
                            setTimeout((function() {
                                    N(i()("form.rank-math-ai-tools").find(".limit-reached").length)
                                }
                            ), 500)
                    }
                ), []);
                return wp.element.createElement(m.Modal, {
                    className: "rank-math-contentai-modal rank-math-modal",
                    overlayClassName: "rank-math-modal-overlay rank-math-contentai-modal-overlay",
                    title: wp.element.createElement(React.Fragment, null, wp.element.createElement("i", {
                        className: w
                    }), " ", b),
                    shouldCloseOnClickOutside: !0,
                    onRequestClose: function(e) {
                        return function(e, t, n, a) {
                            if ((0,
                                o.isNull)((0,
                                u.dispatch)("rank-math")) || (0,
                                u.dispatch)("rank-math-content-ai").isAutoCompleterOpen(!1),
                            "blur" === e.type) {
                                if (!(0,
                                    o.includes)(e.target.classList, "rank-math-contentai-modal"))
                                    return !1;
                                var r = !0;
                                return (0,
                                    o.forEach)(t, (function(e, t) {
                                        e.isRequired && !(0,
                                            o.isEmpty)(n[t]) && (r = !1)
                                    }
                                )),
                                !!r && se(a)
                            }
                            return "Escape" !== e.key || (0,
                                o.isNull)(document.querySelector(".tagify__dropdown")) ? se(a) : (document.querySelector(".tagify__dropdown").remove(),
                                !1)
                        }(e, v, x, r)
                    }
                }, wp.element.createElement("div", {
                    className: ue() ? "columns column-body blurred" : "columns column-body"
                }, wp.element.createElement("div", {
                    className: "column column-input"
                }, wp.element.createElement("div", {
                    className: "column-inner"
                }, I(v, x, _, U), wp.element.createElement("p", {
                    className: "required-fields"
                }, wp.element.createElement("i", null, wp.element.createElement("span", null, "*"), " ", (0,
                    s.__)("Required fields.", "rank-math")))), wp.element.createElement("div", {
                    className: "footer"
                }, wp.element.createElement(m.__experimentalNumberControl, {
                    min: "1",
                    max: k.max,
                    value: null !== (t = x.choices) && void 0 !== t ? t : k.default,
                    onChange: function(e) {
                        return U("choices", e)
                    }
                }), wp.element.createElement("span", {
                    className: "output-label"
                }, (0,
                    s.__)("Outputs", "rank-math")), wp.element.createElement(m.Button, {
                    className: "button button-primary",
                    disabled: O,
                    onClick: function() {
                        var e = i()("form.rank-math-ai-tools").get(0);
                        e.checkValidity() ? (A(!0),
                            N(!0),
                            j(!1),
                            L(_, x, $, !1, h)) : e.reportValidity()
                    }
                }, wp.element.createElement("span", {
                    className: "text"
                }, C ? (0,
                    s.__)("Generating…", "rank-math") : (0,
                    o.isEmpty)(D) ? (0,
                    s.__)("Generate", "rank-math") : (0,
                    s.__)("Generate More", "rank-math"))))), wp.element.createElement("div", {
                    className: "column column-output"
                }, wp.element.createElement("div", {
                    className: "column-output-heading"
                }, wp.element.createElement("h3", null, wp.element.createElement("span", null, (0,
                    s.__)("Output", "rank-math"))), !(0,
                    o.isEmpty)(W) && wp.element.createElement(m.Button, {
                    className: "button button-secondary button-small output-history",
                    onClick: function() {
                        j(!R)
                    }
                }, (0,
                    s.__)("History", "rank-math"))), C && wp.element.createElement("div", {
                    className: "inner-wrapper"
                }, wp.element.createElement("div", {
                    className: "output-item loading"
                }, wp.element.createElement("div", {
                    className: "rank-math-loader"
                }))), !C && !R && (0,
                    o.isEmpty)(D) && wp.element.createElement(React.Fragment, null, wp.element.createElement("p", {
                    style: {
                        fontSize: "1rem",
                        marginTop: 0
                    }
                }, (0,
                    s.__)("Suggestions will appear here.", "rank-math")), y && wp.element.createElement(le, {
                    helpLink: y,
                    title: b
                })), !R && oe(F, d, _, !0, f), !C && R && oe("Frequently_Asked_Questions" === _ ? W[0] : (0,
                    o.reverse)(W), d, _, !1, f), !R && f && !C && wp.element.createElement("div", {
                    className: "notice notice-info",
                    dangerouslySetInnerHTML: {
                        __html: (0,
                            s.sprintf)((0,
                            s.__)("%s to access all the Content AI tools", "rank-math"), '<a href="' + rankMath.adminurl + '?page=rank-math-content-ai-page#ai-tools" target="_blank">' + (0,
                            s.__)("Click here", "rank-math") + "</a>")
                    }
                }))), ue() && wp.element.createElement(ce, {
                    width: 60
                }))
            }
                , ve = function(e) {
                var t = e.search
                    , n = e.setSearch
                    , a = (0,
                    c.useCallback)((function(e) {
                        var t = i()(".rank-math-content-ai-search-field input")
                            , n = document.activeElement;
                        if ("/" === e.key && t.length && n !== t[0] && (0,
                            o.includes)(["BODY", "DIV", "BUTTON", "SPAN"], n.tagName))
                            return e.preventDefault(),
                                t.trigger("focus"),
                                !1
                    }
                ), []);
                return (0,
                    c.useEffect)((function() {
                        return window.addEventListener("keydown", a),
                            function() {
                                window.removeEventListener("keydown", a)
                            }
                    }
                ), [a]),
                    wp.element.createElement("div", {
                        className: "search-field"
                    }, wp.element.createElement(m.SearchControl, {
                        value: t,
                        className: "rank-math-content-ai-search-field",
                        onChange: function(e) {
                            n(e)
                        }
                    }))
            };
            function we(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var a, r, i, o, s = [], l = !0, c = !1;
                        try {
                            if (i = (n = n.call(e)).next,
                            0 === t) {
                                if (Object(n) !== n)
                                    return;
                                l = !1
                            } else
                                for (; !(l = (a = i.call(n)).done) && (s.push(a.value),
                                s.length !== t); l = !0)
                                    ;
                        } catch (e) {
                            c = !0,
                                r = e
                        } finally {
                            try {
                                if (!l && null != n.return && (o = n.return(),
                                Object(o) !== o))
                                    return
                            } finally {
                                if (c)
                                    throw r
                            }
                        }
                        return s
                    }
                }(e, t) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return ke(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return ke(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function ke(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++)
                    a[n] = e[n];
                return a
            }
            var ye = function(e) {
                var t = e.showMinimal
                    , n = void 0 !== t && t
                    , a = e.isPage
                    , r = void 0 !== a && a
                    , i = e.setCredits
                    , l = void 0 !== i && i
                    , u = e.hasContentAiError
                    , d = void 0 !== u && u
                    , p = we((0,
                    c.useState)("all"), 2)
                    , h = p[0]
                    , f = p[1]
                    , _ = we((0,
                    c.useState)(), 2)
                    , b = _[0]
                    , v = _[1]
                    , w = we((0,
                    c.useState)(), 2)
                    , k = w[0]
                    , y = w[1]
                    , E = {
                    all: (0,
                        s.__)("All", "rank-math"),
                    seo: (0,
                        s.__)("SEO", "rank-math"),
                    blog: (0,
                        s.__)("Blog", "rank-math"),
                    "marketing-sales": (0,
                        s.__)("Marketing & Sales", "rank-math"),
                    ecommerce: (0,
                        s.__)("eCommerce", "rank-math"),
                    misc: (0,
                        s.__)("Misc", "rank-math")
                };
                return wp.element.createElement(React.Fragment, null, wp.element.createElement("div", {
                    className: d ? "rank-math-ui module-listing blurred" : "rank-math-ui module-listing"
                }, wp.element.createElement("div", {
                    className: "content-ai-header"
                }, wp.element.createElement("div", {
                    className: "content-ai-filter"
                }, !r && wp.element.createElement(m.SelectControl, {
                    options: (0,
                        o.map)(E, (function(e, t) {
                            return {
                                value: t,
                                label: e
                            }
                        }
                    )),
                    onChange: function(e) {
                        return f(e)
                    }
                }), !n && r && wp.element.createElement("div", null, (0,
                    o.map)(E, (function(e, t) {
                        return wp.element.createElement(m.Button, {
                            className: h === t ? "active" : "",
                            key: t,
                            onClick: function() {
                                return f(t)
                            }
                        }, e)
                    }
                ))), wp.element.createElement(ve, {
                    search: b,
                    setSearch: v
                }))), wp.element.createElement("div", {
                    className: "grid"
                }, (0,
                    o.map)(g(), (function(e, t) {
                        if (("all" === h || h === e.category) && (!b || (0,
                            o.lowerCase)(e.title).includes((0,
                            o.lowerCase)(b)) || (0,
                            o.lowerCase)(e.endpoint).includes((0,
                            o.lowerCase)(b))))
                            return wp.element.createElement(m.Button, {
                                key: t,
                                className: "rank-math-box",
                                onClick: function() {
                                    y(e)
                                }
                            }, wp.element.createElement("i", {
                                className: e.endpoint + " ai-icon " + e.icon
                            }), wp.element.createElement("header", null, wp.element.createElement("h3", null, e.title), !n && wp.element.createElement("p", null, e.description)))
                    }
                ))), k && wp.element.createElement(be, {
                    data: k,
                    setEndpoint: y,
                    isPage: r,
                    setCredits: l
                })), d && wp.element.createElement(ce, null))
            }
                , Ee = function() {
                var e = (0,
                    u.select)("core/block-editor").getSelectedBlock()
                    , t = (0,
                    u.select)("core/block-editor").getBlocks();
                if (!(0,
                    o.isEmpty)(e)) {
                    var n = t.map((function(t) {
                            return t.clientId === e.clientId
                        }
                    )).indexOf(!0) + 1;
                    return {
                        block: e,
                        position: n,
                        clientId: e.clientId
                    }
                }
                if ((0,
                    o.isEmpty)(t))
                    return {
                        block: [],
                        position: 0
                    };
                var a = t[t.length - 1];
                return {
                    block: a,
                    position: t.length,
                    clientId: a.clientId
                }
            }
                , xe = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                    , t = 800 - e
                    , n = [];
                if ("elementor" === rankMath.currentEditor) {
                    var a, r = elementor.$preview[0].contentWindow.document;
                    r.getElementsByClassName("elementor-element-editable");
                    a = r.getElementsByClassName("elementor-widget-container");
                    var s = Array.from(a)
                        , l = !1;
                    return (0,
                        o.forEach)(s.reverse(), (function(a) {
                            if (e >= 800)
                                return !1;
                            if (a.innerText) {
                                i()(a).parents(".elementor-element-editable").length && (i()(r).find(".rank-math-active").removeClass("rank-math-active"),
                                    i()(a).addClass("rank-math-active"),
                                    l = !0),
                                l || (i()(a).addClass("rank-math-active"),
                                    l = !0);
                                var s = a.querySelectorAll("*")
                                    , c = Array.from(s);
                                (0,
                                    o.forEach)(c.reverse(), (function(a) {
                                        if (e >= 600)
                                            return !1;
                                        var r = (0,
                                            o.includes)(["h1", "h2", "h3", "h4", "h5", "h6"], a.localName) ? "Heading: " + a.innerText : a.innerText;
                                        if (r && !(0,
                                            o.includes)(["div", "b", "i", "u", "em"], a.localName))
                                            if (r.length <= t)
                                                n.push(r),
                                                    e += r.length,
                                                    t -= r.length;
                                            else {
                                                var i = r.match(/[^\.!\?]+[\.!\?]+/g);
                                                (0,
                                                    o.forEach)(i.reverse(), (function(a) {
                                                        e < 600 && (n.push(a),
                                                            e += a.length,
                                                            t -= a.length)
                                                    }
                                                ))
                                            }
                                    }
                                ))
                            }
                        }
                    )),
                        U(n.reverse().join("\n\n"), !0)
                }
                if ("undefined" != typeof tinymce && null !== tinymce.activeEditor && !0 !== tinymce.activeEditor.isHidden() && "content" === tinymce.activeEditor.id) {
                    var c = tinyMCE.activeEditor.selection.getSelectedBlocks();
                    return (0,
                        o.forEach)(c.reverse(), (function(a) {
                            if (e >= 800)
                                return !1;
                            var r = (0,
                                o.includes)(["h1", "h2", "h3", "h4", "h5", "h6"], a.localName) ? "<" + a.localName + ">" + a.innerText + "</" + a.localName + ">" : a.innerHTML;
                            if (r.length <= t)
                                n.push(r),
                                    e += r.length,
                                    t -= r.length;
                            else {
                                var i = r.match(/[^\.!\?]+[\.!\?]+/g);
                                (0,
                                    o.forEach)(i.reverse(), (function(a) {
                                        e < 800 && (n.push(a),
                                            e += a.length,
                                            t -= a.length)
                                    }
                                ))
                            }
                        }
                    )),
                        U(n.reverse().join("\n\n"), !0)
                }
                var d = Ee();
                if ((0,
                    o.isEmpty)(d.block))
                    return "";
                var m = d.clientId
                    , p = [];
                return (0,
                    o.forEach)((0,
                    u.select)("core/block-editor").getBlocks(), (function(e) {
                        if ("rank-math/command" !== e.name && p.push(e),
                        e.clientId === m)
                            return !1
                    }
                )),
                    (0,
                        o.forEach)(p.reverse(), (function(a) {
                            if (e >= 800)
                                return !1;
                            if (!(0,
                                o.isUndefined)(a.attributes.content)) {
                                var r = "core/heading" === a.name ? "<h" + a.attributes.level + ">" + a.attributes.content + "</h" + a.attributes.level + ">" : "<p>" + a.attributes.content + "</p>";
                                if (r.length <= t)
                                    n.push(r),
                                        e += r.length,
                                        t -= r.length;
                                else {
                                    var i = r.match(/[^\.!\?]+[\.!\?]+/g);
                                    (0,
                                        o.isEmpty)(i) || (0,
                                        o.forEach)(i.reverse(), (function(a) {
                                            e < 800 && (n.push(a),
                                                e += a.length,
                                                t -= a.length)
                                        }
                                    ))
                                }
                            }
                        }
                    )),
                    U(n.reverse().join("\n\n"), !0)
            }
                , Te = wp.blockEditor
                , Se = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                    , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                    , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                e = U(e),
                a && (0,
                    u.dispatch)("core/block-editor").updateBlockAttributes(t, {
                    content: a
                });
                var r = G();
                r.onmessage = function(e) {
                    var a = e.data;
                    if (a)
                        if ("classic" !== rankMath.currentEditor) {
                            if (t) {
                                var r, o, s, l = (0,
                                    u.select)("core/block-editor").getBlock(t), c = "<br>" === a, d = l.attributes.content;
                                if ("rank_math_process_complete" !== a)
                                    d ? d += "<br>" === a || c ? a : " " + a : d = a,
                                        (0,
                                            u.dispatch)("core/block-editor").updateBlockAttributes(l.clientId, {
                                            content: d
                                        }),
                                        r = document.getElementById("block-" + l.clientId),
                                        o = getSelection(),
                                        s = document.createRange(),
                                        o.removeAllRanges(),
                                        s.selectNodeContents(r),
                                        s.collapse(!1),
                                        o.addRange(s);
                                else
                                    n && ((0,
                                        u.dispatch)("core/block-editor").updateBlockAttributes(l.clientId, {
                                        content: d + n,
                                        className: ""
                                    }),
                                        setTimeout((function() {
                                                i()(".rank-math-content-ai-command-buttons .rank-math-content-ai-use").trigger("focus")
                                            }
                                        ), 100))
                            }
                        } else
                            tinymce.activeEditor.insertContent("rank_math_process_complete" !== a ? " " + a : "")
                }
                    ,
                    r.postMessage(e)
            }
                , Ce = (0,
                s.__)("Generating…", "rank-math")
                , Ae = (0,
                u.dispatch)(Te.store)
                , Pe = Ae.updateBlockAttributes
                , Oe = Ae.removeBlock
                , Ie = '<div class="rank-math-content-ai-command-buttons">' + ('<button class="button button-small rank-math-content-ai-use" tabindex="0"><span contenteditable="false">' + (0,
                s.__)("Use", "rank-math") + "</span></button>") + ('<button class="button button-small rank-math-content-ai-regenerate" tabindex="0"><span contenteditable="false">' + (0,
                s.__)("Regenerate", "rank-math") + "</span></button>") + ('<button class="button button-small rank-math-content-ai-write-more" tabindex="0"><span contenteditable="false">' + (0,
                s.__)("Write More", "rank-math") + "</span></button>") + "</div>"
                , Ne = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                    , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                L(e, t, (function(e) {
                        if (e.error) {
                            var t = '<div class="rank-math-content-ai-command-buttons"><button class="button button-small rank-math-content-ai-dismiss" contenteditable="false" contenteditable="true">' + (0,
                                s.__)("Dismiss", "rank-math") + "</button></div>";
                            Pe(n, {
                                content: e.error + t,
                                className: "rank-math-content-ai-command",
                                isAiGenerated: !0
                            })
                        } else
                            e = (0,
                                o.isArray)(e) ? e[0] : e,
                                (0,
                                    o.isNull)(n) ? Se(e) : (Pe(n, {
                                    content: "",
                                    className: "rank-math-content-ai-command typing",
                                    isAiGenerated: !0
                                }),
                                    Se(e, n, Ie, a))
                    }
                ))
            }
                , Me = function() {
                var e = (0,
                    u.select)("core/block-editor").getSelectedBlock()
                    , t = e.attributes.content.replace(/<div .*<\/div>/g, "").replaceAll("  ", "")
                    , n = (0,
                    F.rawHandler)({
                    HTML: t,
                    mode: "BLOCKS"
                }).map((function(e) {
                        return (0,
                            F.createBlock)(e.name, e.attributes, e.innerBlocks)
                    }
                ));
                if (e.attributes.replaceBlock)
                    return (0,
                        u.dispatch)("core/block-editor").replaceBlock(e.attributes.selectedId, n),
                        void Oe(e.clientId);
                (0,
                    u.dispatch)("core/block-editor").replaceBlock(e.clientId, n)
            }
                , Re = function() {
                var e = (0,
                    u.select)("core/block-editor").getSelectedBlock()
                    , t = e.clientId
                    , n = e.attributes.endpoint
                    , a = e.attributes.params;
                Pe(t, {
                    content: Ce
                }),
                    Ne(n, a, t)
            }
                , je = function(e) {
                if (800 === e.length)
                    return e;
                if (e.length > 800) {
                    var t = 0
                        , n = []
                        , a = e.match(/[^\.!\?]+[\.!\?]+/g);
                    return (0,
                        o.isEmpty)(a) || (0,
                        o.forEach)(a.reverse(), (function(e) {
                            t < 800 && (n.push(e),
                                t += e.length)
                        }
                    )),
                        n.reverse().join(" ")
                }
                return xe(e.length) + "\n" + e
            }
                , qe = function() {
                var e = (0,
                    u.select)("core/block-editor").getSelectedBlock()
                    , t = e.clientId
                    , n = e.attributes.content.replace(/<div .*<\/div>/g, "").replace("<br>", "").replaceAll("  ", "");
                Pe(t, {
                    content: n + "" + Ce
                }),
                    Ne("Continue_Writing", {
                        sentence: je(n),
                        choices: 1
                    }, t, n)
            };
            i()(document).on("click", ".rank-math-content-ai-dismiss", (function() {
                    var e = (0,
                        u.select)("core/block-editor").getSelectedBlock();
                    Oe(e.clientId)
                }
            )),
                i()(document).on("keydown", ".rank-math-content-ai-use", (function(e) {
                        "Enter" === e.code && Me()
                    }
                )),
                i()(document).on("click", ".rank-math-content-ai-use", (function() {
                        Me()
                    }
                )),
                i()(document).on("keydown", ".rank-math-content-ai-regenerate", (function(e) {
                        "Enter" === e.code && Re()
                    }
                )),
                i()(document).on("click", ".rank-math-content-ai-regenerate", (function() {
                        Re()
                    }
                )),
                i()(document).on("keydown", ".rank-math-content-ai-write-more", (function(e) {
                        "Enter" === e.code && qe()
                    }
                )),
                i()(document).on("click", ".rank-math-content-ai-write-more", (function() {
                        qe()
                    }
                ));
            var De = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                    , a = arguments.length > 3 ? arguments[3] : void 0
                    , r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                (0,
                    o.isNull)(n) || Pe(n, {
                    content: (0,
                        s.__)("Generating…", "rank-math"),
                    className: "typing rank-math-content-ai-command",
                    endpoint: e,
                    params: t,
                    replaceBlock: r,
                    selectedId: a
                }),
                    Ne(e, t, n)
            }
                , Le = function() {
                return !((0,
                    o.isNil)(window.wp) || (0,
                    o.isNil)(wp.data) || (0,
                    o.isNil)(wp.data.select("core/editor")) || !window.document.body.classList.contains("block-editor-page") || !(0,
                    o.isFunction)(wp.data.select("core/editor").getEditedPostAttribute))
            }
                , Be = React;
            function ze(e) {
                return e.startsWith("{{/") ? {
                    type: "componentClose",
                    value: e.replace(/\W/g, "")
                } : e.endsWith("/}}") ? {
                    type: "componentSelfClosing",
                    value: e.replace(/\W/g, "")
                } : e.startsWith("{{") ? {
                    type: "componentOpen",
                    value: e.replace(/\W/g, "")
                } : {
                    type: "string",
                    value: e
                }
            }
            function He(e, t) {
                let n, a, r = [];
                for (let i = 0; i < e.length; i++) {
                    const o = e[i];
                    if ("string" !== o.type) {
                        if (void 0 === t[o.value])
                            throw new Error(`Invalid interpolation, missing component node: \`${o.value}\``);
                        if ("object" != typeof t[o.value])
                            throw new Error(`Invalid interpolation, component node must be a ReactElement or null: \`${o.value}\``);
                        if ("componentClose" === o.type)
                            throw new Error(`Missing opening component token: \`${o.value}\``);
                        if ("componentOpen" === o.type) {
                            n = t[o.value],
                                a = i;
                            break
                        }
                        r.push(t[o.value])
                    } else
                        r.push(o.value)
                }
                if (n) {
                    const i = function(e, t) {
                        const n = t[e];
                        let a = 0;
                        for (let r = e + 1; r < t.length; r++) {
                            const e = t[r];
                            if (e.value === n.value) {
                                if ("componentOpen" === e.type) {
                                    a++;
                                    continue
                                }
                                if ("componentClose" === e.type) {
                                    if (0 === a)
                                        return r;
                                    a--
                                }
                            }
                        }
                        throw new Error("Missing closing component token `" + n.value + "`")
                    }(a, e)
                        , o = He(e.slice(a + 1, i), t)
                        , s = (0,
                        Be.cloneElement)(n, {}, o);
                    if (r.push(s),
                    i < e.length - 1) {
                        const n = He(e.slice(i + 1), t);
                        r = r.concat(n)
                    }
                }
                return r = r.filter(Boolean),
                    0 === r.length ? null : 1 === r.length ? r[0] : (0,
                        Be.createElement)(Be.Fragment, null, ...r)
            }
            function Fe(e) {
                const {mixedString: t, components: n, throwErrors: a} = e;
                if (!n)
                    return t;
                if ("object" != typeof n) {
                    if (a)
                        throw new Error(`Interpolation Error: unable to process \`${t}\` because components is not an object`);
                    return t
                }
                const r = function(e) {
                    return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(ze)
                }(t);
                try {
                    return He(r, n)
                } catch (e) {
                    if (a)
                        throw new Error(`Interpolation Error: unable to process \`${t}\` because of error \`${e.message}\``);
                    return t
                }
            }
            var Ve = function(e) {
                var t = e.tags
                    , n = e.components
                    , a = e.children;
                return n = n || {},
                !1 === (0,
                    o.isUndefined)(t) && (t = t.split(",")).forEach((function(e) {
                        var t = e;
                        n[e] = wp.element.createElement(t, null)
                    }
                )),
                    Fe({
                        mixedString: a,
                        components: n
                    })
            };
            function We(e) {
                return We = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                    ,
                    We(e)
            }
            function Ue(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }
                    ))),
                        n.push.apply(n, a)
                }
                return n
            }
            function Ge(e, t, n) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" !== We(e) || null === e)
                            return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var a = n.call(e, t || "default");
                            if ("object" !== We(a))
                                return a;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" === We(t) ? t : String(t)
                }(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                    e
            }
            function Ke(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var a, r, i, o, s = [], l = !0, c = !1;
                        try {
                            if (i = (n = n.call(e)).next,
                            0 === t) {
                                if (Object(n) !== n)
                                    return;
                                l = !1
                            } else
                                for (; !(l = (a = i.call(n)).done) && (s.push(a.value),
                                s.length !== t); l = !0)
                                    ;
                        } catch (e) {
                            c = !0,
                                r = e
                        } finally {
                            try {
                                if (!l && null != n.return && (o = n.return(),
                                Object(o) !== o))
                                    return
                            } finally {
                                if (c)
                                    throw r
                            }
                        }
                        return s
                    }
                }(e, t) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return Je(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return Je(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function Je(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++)
                    a[n] = e[n];
                return a
            }
            var Ye = function(e) {
                var t = e.hasContentAiError
                    , n = void 0 !== t && t
                    , a = Ke((0,
                    c.useState)({
                    document_title: "undefined" != typeof rankMathEditor ? rankMathEditor.assessor.dataCollector.getData().title : "",
                    text: "",
                    instructions: "",
                    tone: rankMath.ca_tone,
                    focus_keyword: [],
                    length: "medium",
                    choices: 1
                }), 2)
                    , r = a[0]
                    , i = a[1]
                    , l = Ke((0,
                    c.useState)(!1), 2)
                    , d = l[0]
                    , p = l[1]
                    , h = Le() || rankMath.isContentAIPage;
                return wp.element.createElement(React.Fragment, null, wp.element.createElement("div", {
                    className: n ? "rank-math-ui module-listing blurred" : "rank-math-ui module-listing"
                }, wp.element.createElement("div", {
                    className: "rank-math-focus-keyword"
                }, wp.element.createElement(m.Notice, {
                    status: "warning",
                    isDismissible: !1
                }, wp.element.createElement(Ve, {
                    components: {
                        link: wp.element.createElement("a", {
                            href: "https://rankmath.com/kb/content-ai-editor/?utm_source=Plugin&utm_medium=Write+Tab+Notice&utm_campaign=WP#write-tab",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        })
                    }
                }, (0,
                    s.__)("{{link}}Click here{{/link}} to learn how to use it.", "rank-math")))), I({
                    instructions: {
                        isRequired: !1
                    },
                    tone: {
                        isRequired: !1
                    },
                    focus_keyword: {
                        isRequired: !1
                    },
                    length: {
                        isRequired: !0
                    }
                }, r, "Write", (function(e, t) {
                        r[e] = t,
                            i(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? Ue(Object(n), !0).forEach((function(t) {
                                            Ge(e, t, n[t])
                                        }
                                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ue(Object(n)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        }
                                    ))
                                }
                                return e
                            }({}, r)),
                            (0,
                                u.dispatch)("rank-math-content-ai").updateAIAttributes(e, t)
                    }
                )), wp.element.createElement(m.Button, {
                    className: "write-button is-primary",
                    onClick: function() {
                        if (r.text = xe(),
                            i(r),
                            !h)
                            return p(!0),
                                void L("Write", r, (function(e) {
                                        var t = (0,
                                            o.isArray)(e) ? e[0] : e;
                                        "elementor" === rankMath.currentEditor ? Z(t) : Se(t),
                                            p(!1)
                                    }
                                ));
                        var e = Ee();
                        if ((0,
                            o.isEmpty)(e) || (0,
                            o.isEmpty)(e.block) || !(0,
                            o.isEmpty)(e.block.attributes.content)) {
                            var t = (0,
                                F.createBlock)("rank-math/command", {
                                content: ""
                            });
                            (0,
                                u.dispatch)("core/block-editor").insertBlocks(t, (0,
                                o.isEmpty)(e) ? 1 : e.position),
                                e = t
                        } else {
                            var n = (0,
                                F.createBlock)("rank-math/command", {
                                content: "",
                                className: "rank-math-content-ai-command"
                            });
                            (0,
                                u.dispatch)("core/block-editor").replaceBlock(e.clientId, n),
                                e = n
                        }
                        De("Write", r, e.clientId)
                    }
                }, wp.element.createElement(React.Fragment, null, d ? (0,
                    s.__)("Generating…", "rank-math") : (0,
                    s.__)("Generate", "rank-math"), h && wp.element.createElement("span", null, "CTRL + /"))), wp.element.createElement("p", {
                    style: {
                        marginTop: "10px",
                        opacity: "0.7"
                    }
                }, wp.element.createElement("em", null, (0,
                    s.__)("1 Word Output = 1 Credit", "rank-math")))), n && wp.element.createElement(ce, null))
            };
            function Qe(e) {
                return Qe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                    ,
                    Qe(e)
            }
            function Xe(e) {
                return function(e) {
                    if (Array.isArray(e))
                        return rt(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(e) || at(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function Ze(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }
                    ))),
                        n.push.apply(n, a)
                }
                return n
            }
            function et(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ze(Object(n), !0).forEach((function(t) {
                            tt(e, t, n[t])
                        }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ze(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                    ))
                }
                return e
            }
            function tt(e, t, n) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" !== Qe(e) || null === e)
                            return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var a = n.call(e, t || "default");
                            if ("object" !== Qe(a))
                                return a;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" === Qe(t) ? t : String(t)
                }(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                    e
            }
            function nt(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var a, r, i, o, s = [], l = !0, c = !1;
                        try {
                            if (i = (n = n.call(e)).next,
                            0 === t) {
                                if (Object(n) !== n)
                                    return;
                                l = !1
                            } else
                                for (; !(l = (a = i.call(n)).done) && (s.push(a.value),
                                s.length !== t); l = !0)
                                    ;
                        } catch (e) {
                            c = !0,
                                r = e
                        } finally {
                            try {
                                if (!l && null != n.return && (o = n.return(),
                                Object(o) !== o))
                                    return
                            } finally {
                                if (c)
                                    throw r
                            }
                        }
                        return s
                    }
                }(e, t) || at(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function at(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return rt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? rt(e, t) : void 0
                }
            }
            function rt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++)
                    a[n] = e[n];
                return a
            }
            var it = {
                all: (0,
                    s.__)("All", "rank-math"),
                recent: (0,
                    s.__)("Recent", "rank-math"),
                custom: (0,
                    s.__)("Custom +", "rank-math"),
                seo: (0,
                    s.__)("SEO", "rank-math"),
                blog: (0,
                    s.__)("Blog", "rank-math"),
                "marketing-sales": (0,
                    s.__)("Marketing & Sales", "rank-math"),
                ecommerce: (0,
                    s.__)("eCommerce", "rank-math"),
                misc: (0,
                    s.__)("Misc", "rank-math")
            }
                , ot = function(e) {
                var t = e.isOpen
                    , n = e.toggleModal
                    , a = e.setMessage
                    , r = nt((0,
                    c.useState)(), 2)
                    , l = r[0]
                    , u = r[1]
                    , d = nt((0,
                    c.useState)("custom"), 2)
                    , p = d[0]
                    , h = d[1]
                    , g = nt((0,
                    c.useState)("all"), 2)
                    , f = g[0]
                    , b = g[1]
                    , v = nt((0,
                    c.useState)(rankMath.contentAIPrompts), 2)
                    , w = v[0]
                    , k = v[1]
                    , y = nt((0,
                    c.useState)(!1), 2)
                    , E = y[0]
                    , x = y[1]
                    , T = nt((0,
                    c.useState)(!1), 2)
                    , S = T[0]
                    , C = T[1]
                    , A = nt((0,
                    c.useState)(!1), 2)
                    , P = A[0]
                    , O = A[1]
                    , I = nt((0,
                    c.useState)({
                    prompt_name: "",
                    prompt: "",
                    prompt_category: "custom"
                }), 2)
                    , N = I[0]
                    , R = I[1]
                    , j = nt((0,
                    c.useState)(!1), 2)
                    , q = j[0]
                    , D = j[1];
                return (0,
                    c.useEffect)((function() {
                        if ("recent" !== f || (0,
                            o.isEmpty)(rankMath.contentAIRecentPrompts))
                            if ("all" !== f) {
                                var e = (0,
                                    o.compact)((0,
                                    o.map)(rankMath.contentAIPrompts, (function(e) {
                                        return e.PromptCategory === f && !(0,
                                            o.isUndefined)(e.Prompt) && e
                                    }
                                )));
                                k("custom" === f ? (0,
                                    o.reverse)(e) : e)
                            } else
                                k(rankMath.contentAIPrompts);
                        else {
                            var t = (0,
                                o.map)(rankMath.contentAIRecentPrompts, (function(e) {
                                    return (0,
                                        o.find)(rankMath.contentAIPrompts, (function(t) {
                                            return t.PromptName === e
                                        }
                                    ))
                                }
                            ));
                            k(t)
                        }
                    }
                ), [f, E]),
                    (0,
                        c.useEffect)((function() {
                            setTimeout((function() {
                                    D(!1)
                                }
                            ), 5e3)
                        }
                    ), [q]),
                t && wp.element.createElement(m.Modal, {
                    title: (0,
                        s.__)("Prompts Library", "rank-math"),
                    closeButtonLabel: (0,
                        s.__)("Close", "rank-math"),
                    shouldCloseOnClickOutside: !1,
                    shouldCloseOnEsc: !0,
                    onRequestClose: function() {
                        return n(!1)
                    },
                    className: "rank-math-contentai-modal rank-math-prompt-modal rank-math-modal",
                    overlayClassName: "rank-math-modal-overlay rank-math-contentai-modal-overlay"
                }, wp.element.createElement("div", {
                    className: "content-ai-filter"
                }, wp.element.createElement("div", null, (0,
                    o.map)(it, (function(e, t) {
                        var n = _()(t, {
                            active: t === f
                        });
                        return wp.element.createElement(m.Button, {
                            className: n,
                            key: t,
                            onClick: function() {
                                b(t),
                                    h(0)
                            }
                        }, e)
                    }
                ))), wp.element.createElement(m.Button, {
                    className: "update-library is-secondary is-small",
                    key: "update-library",
                    onClick: function() {
                        O(!0),
                            i().ajax({
                                url: rankMath.contentAiUrl + "default_prompts",
                                type: "GET",
                                success: function(e) {
                                    O(!1),
                                        (0,
                                            o.isEmpty)(e) ? console.log("No data found") : M()({
                                            method: "POST",
                                            path: "/rankmath/v1/ca/savePrompts",
                                            data: {
                                                prompts: e
                                            }
                                        }).then((function(e) {
                                                rankMath.contentAIPrompts = e,
                                                    k(e),
                                                    h(0)
                                            }
                                        )).catch((function(e) {
                                                console.log(e)
                                            }
                                        ))
                                },
                                error: function() {
                                    console.error("Failed, please try again later"),
                                        O(!1)
                                }
                            })
                    }
                }, P ? (0,
                    s.__)("Updating...", "rank-math") : (0,
                    s.__)("Update Library", "rank-math"))), wp.element.createElement("div", {
                    className: "grid"
                }, wp.element.createElement("div", {
                    className: "column column-first"
                }, wp.element.createElement("h3", null, (0,
                    s.__)("Prompt List", "rank-math")), !(0,
                    o.isEmpty)(w) && wp.element.createElement(React.Fragment, null, wp.element.createElement(ve, {
                    search: l,
                    setSearch: u
                }), wp.element.createElement("div", {
                    className: "prompt-list"
                }, "all" === f && wp.element.createElement(m.Button, {
                    className: "custom" === p ? "prompt-item active" : "prompt-item",
                    key: "add-custom",
                    onClick: function() {
                        return h("custom")
                    }
                }, wp.element.createElement("i", null, "🧪"), wp.element.createElement("span", null, (0,
                    s.__)("Add Custom Prompt +", "rank-math"))), (0,
                    o.map)(w, (function(e, t) {
                        if (!((0,
                            o.isUndefined)(e) || (0,
                            o.isUndefined)(e.Prompt) || l && !(0,
                            o.lowerCase)(e.PromptName).includes((0,
                            o.lowerCase)(l)))) {
                            var n = _()("prompt-item " + t, {
                                active: t === p,
                                "custom-prompt": "custom" === e.PromptCategory
                            })
                                , a = _()("delete-prompt", {
                                "rank-math-loader": E === t
                            });
                            return wp.element.createElement(m.Button, {
                                className: n,
                                key: t,
                                onClick: function() {
                                    return h(t)
                                }
                            }, wp.element.createElement("i", null, e.PromptIcon ? e.PromptIcon : "🖌️"), wp.element.createElement("span", null, e.PromptName), "custom" === e.PromptCategory && wp.element.createElement("span", {
                                role: "button",
                                tabIndex: "0",
                                onKeyDown: void 0,
                                className: a,
                                onClick: function() {
                                    x(t),
                                        M()({
                                            method: "POST",
                                            path: "/rankmath/v1/ca/updatePrompt",
                                            data: {
                                                prompt: e.PromptName
                                            }
                                        }).then((function(e) {
                                                rankMath.contentAIPrompts = e,
                                                    k(e),
                                                    h(0),
                                                    x(!1)
                                            }
                                        )).catch((function(e) {
                                                x(!1),
                                                    console.log(e)
                                            }
                                        ))
                                }
                            }, E !== t && wp.element.createElement("i", {
                                className: "dashicons dashicons-no-alt"
                            })))
                        }
                    }
                ))))), wp.element.createElement("div", {
                    className: "column column-second"
                }, "custom" === p && "all" === f && wp.element.createElement("div", {
                    className: "custom-prompt-form"
                }, wp.element.createElement("div", {
                    className: "form-field"
                }, wp.element.createElement(m.TextControl, {
                    label: (0,
                        s.__)("Prompt Name", "rank-math"),
                    onChange: function(e) {
                        N.prompt_name = e,
                            R(et({}, N))
                    },
                    className: q && !N.prompt_name ? "is-required" : ""
                })), wp.element.createElement("div", {
                    className: "form-field"
                }, wp.element.createElement("div", {
                    className: N.prompt.length >= 2e3 ? "limit limit-reached" : "limit"
                }, wp.element.createElement("span", {
                    className: "count"
                }, N.prompt.length), "/2000"), wp.element.createElement(m.TextareaControl, {
                    label: (0,
                        s.__)("Prompt Text", "rank-math"),
                    help: (0,
                        s.__)("Use [brackets] to insert placeholders.", "rank-math"),
                    onChange: function(e) {
                        N.prompt = e,
                            R(et({}, N))
                    },
                    maxLength: "2000",
                    className: q && !N.prompt ? "is-required" : ""
                })), wp.element.createElement("div", {
                    className: "form-field"
                }, wp.element.createElement(m.BaseControl, {
                    className: "save-prompt"
                }, wp.element.createElement(m.Button, {
                    variant: "primary",
                    className: "is-large",
                    onClick: function() {
                        if (N.prompt_name && N.prompt) {
                            var e = (0,
                                o.find)(w, (function(e) {
                                    return e.PromptName === N.prompt_name
                                }
                            ));
                            (0,
                                o.isUndefined)(e) ? (C(!0),
                                M()({
                                    method: "POST",
                                    path: "/rankmath/v1/ca/updatePrompt",
                                    data: {
                                        prompt: {
                                            PromptName: N.prompt_name,
                                            Prompt: N.prompt,
                                            PromptCategory: N.prompt_category
                                        }
                                    }
                                }).then((function(e) {
                                        rankMath.contentAIPrompts = e,
                                            b("custom"),
                                            k(Xe(e)),
                                            setTimeout((function() {
                                                    h(0),
                                                        C(!1)
                                                }
                                            ), 300)
                                    }
                                )).catch((function(e) {
                                        console.log(e),
                                            C(!1)
                                    }
                                ))) : alert("Prompt with this name already exists")
                        } else
                            D(!0)
                    }
                }, S && wp.element.createElement("span", {
                    className: "rank-math-loader"
                }), !S && (0,
                    s.__)("Save Prompt", "rank-math"))))), ("custom" !== p || "all" !== f) && !(0,
                    o.isEmpty)(w) && !(0,
                    o.isEmpty)(w[p]) && wp.element.createElement("div", {
                    className: "prompt-details"
                }, wp.element.createElement("div", {
                    className: "prompt-preview"
                }, wp.element.createElement("h3", null, (0,
                    s.__)("Preview", "rank-math")), wp.element.createElement("div", {
                    className: "prompt-preview-content"
                }, wp.element.createElement("p", {
                    dangerouslySetInnerHTML: {
                        __html: (0,
                            o.isUndefined)(w[p].Prompt) ? "" : w[p].Prompt.replaceAll("[", "<span>[").replaceAll("]", "]</span>")
                    }
                }))), wp.element.createElement("div", {
                    className: "form-field"
                }, wp.element.createElement(m.BaseControl, {
                    className: "use-prompt"
                }, wp.element.createElement(m.Button, {
                    variant: "primary",
                    className: "is-large",
                    onClick: function() {
                        M()({
                            method: "POST",
                            path: "/rankmath/v1/ca/updateRecentPrompt",
                            data: {
                                prompt: w[p].PromptName
                            }
                        }).then((function() {
                                rankMath.contentAIRecentPrompts.unshift(w[p].PromptName)
                            }
                        )).catch((function(e) {
                                console.log(e)
                            }
                        )),
                            a(w[p].Prompt.replaceAll("[", "<span>[").replaceAll("]", "]</span>")),
                            n(!1)
                    }
                }, (0,
                    s.__)("Use Prompt", "rank-math"))))))))
            }
                , st = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                    , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                M()({
                    method: "POST",
                    path: "/rankmath/v1/ca/deleteOutput",
                    data: {
                        isChat: e,
                        index: t
                    }
                }).catch((function(e) {
                        console.log(e)
                    }
                ))
            };
            function lt(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var a, r, i, o, s = [], l = !0, c = !1;
                        try {
                            if (i = (n = n.call(e)).next,
                            0 === t) {
                                if (Object(n) !== n)
                                    return;
                                l = !1
                            } else
                                for (; !(l = (a = i.call(n)).done) && (s.push(a.value),
                                s.length !== t); l = !0)
                                    ;
                        } catch (e) {
                            c = !0,
                                r = e
                        } finally {
                            try {
                                if (!l && null != n.return && (o = n.return(),
                                Object(o) !== o))
                                    return
                            } finally {
                                if (c)
                                    throw r
                            }
                        }
                        return s
                    }
                }(e, t) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return ct(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return ct(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function ct(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++)
                    a[n] = e[n];
                return a
            }
            var ut = function(e) {
                var t = e.setCredits
                    , n = void 0 !== t && t
                    , a = e.hasContentAiError
                    , r = void 0 !== a && a
                    , l = lt((0,
                    c.useState)(!1), 2)
                    , u = l[0]
                    , d = l[1]
                    , p = lt((0,
                    c.useState)(!1), 2)
                    , h = p[0]
                    , g = p[1]
                    , f = lt((0,
                    c.useState)(""), 2)
                    , b = f[0]
                    , v = f[1]
                    , w = lt((0,
                    c.useState)(rankMath.contentAIChats), 2)
                    , k = w[0]
                    , y = w[1]
                    , E = lt((0,
                    c.useState)(""), 2)
                    , x = E[0]
                    , T = E[1]
                    , S = rankMath.isContentAIPage;
                (0,
                    c.useEffect)((function() {
                        i()(".chat-input span").on("click", (function(e) {
                                if (window.getSelection && document.createRange) {
                                    var t = window.getSelection();
                                    "" === t.toString() && window.setTimeout((function() {
                                            var n = e.target
                                                , a = document.createRange();
                                            a.selectNodeContents(n),
                                                t.removeAllRanges(),
                                                t.addRange(a)
                                        }
                                    ), 1)
                                }
                            }
                        ))
                    }
                ), [b]);
                var C, A = ["How do backlinks affect SEO?", "Why is keyword research important for SEO?", "What are some effective SEO strategies for small businesses?", "Can you explain the difference between on-page and off-page SEO?", "List trending topics in [Industry] that I should write about.", "How can I optimize my website for local search queries?", "What are some effective strategies for managing [product/service description] reputation on social media?", "Develop a content strategy for [product/service description] to increase organic search traffic."], P = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                        , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    v(""),
                        g(!0),
                    "" === x && T(0);
                    var a = "" === x
                        , r = "" !== x ? x : rankMath.contentAIChats.length
                        , i = (0,
                        o.isEmpty)(k[r]) ? [] : k[r];
                    t || i.unshift({
                        role: "user",
                        content: e || b
                    }),
                        a ? k.unshift(i) : k[r] = i,
                        y(k),
                        setTimeout((function() {
                                L("Chat", {
                                    messages: (0,
                                        o.reverse)(i),
                                    session: r,
                                    isNew: a,
                                    regenerate: t,
                                    site_type: "ecommerce",
                                    site_name: rankMath.blogName,
                                    language: rankMath.ca_language,
                                    choices: 1
                                }, (function(e) {
                                        (0,
                                            o.reverse)(i),
                                        e && i.unshift({
                                            role: "assistant",
                                            content: e[0],
                                            isNew: !0
                                        }),
                                            g(!1)
                                    }
                                ), !0, n)
                            }
                        ), 100)
                };
                return wp.element.createElement(React.Fragment, null, wp.element.createElement("div", {
                    className: r ? "blurred" : ""
                }, wp.element.createElement("div", {
                    className: "tab-header"
                }, wp.element.createElement("span", {
                    className: "tab-header-title"
                }, wp.element.createElement("i", {
                    className: "rm-icon rm-icon-bot"
                }), " RankBot ", wp.element.createElement("span", null, "- ", (0,
                    s.__)("Your Personal Assistant", "rank-math"))), wp.element.createElement("a", {
                    href: "https://rankmath.com/kb/how-to-use-rankbot-ai-tool/?play-video=OBxuy8u0eCY&utm_source=Plugin&utm_medium=RankBot+Tab&utm_campaign=WP",
                    rel: "noreferrer",
                    target: "_blank",
                    title: (0,
                        s.__)("Know more about RankBot", "rank-math")
                }, wp.element.createElement("em", {
                    className: "dashicons-before dashicons-editor-help rank-math-tooltip"
                })), !S && "" !== x && wp.element.createElement(m.Button, {
                    className: "clear-history is-small button-link-delete",
                    onClick: function() {
                        k.splice(x, 1),
                            y(k),
                            st(!0, x),
                            setTimeout((function() {
                                    T("")
                                }
                            ), 10)
                    }
                }, (0,
                    s.__)("Delete Session", "rank-math"))), wp.element.createElement("div", {
                    className: "rank-math-content-chat-page"
                }, !(0,
                    o.isEmpty)(k) && wp.element.createElement("div", {
                    className: "chat-sidebar"
                }, wp.element.createElement("div", {
                    className: "chat-sidebar-content"
                }, !S && wp.element.createElement(m.SelectControl, {
                    value: x,
                    options: (C = [{
                        label: (0,
                            s.__)("New Chat", "rank-math"),
                        value: ""
                    }],
                        (0,
                            o.map)(k, (function(e, t) {
                                C.push({
                                    label: e[0].content.replace(/(<([^>]+)>)/gi, "").split(/\s+/).slice(0, 8).join(" ") + "...",
                                    value: t
                                })
                            }
                        )),
                        C),
                    onChange: function(e) {
                        T(e)
                    }
                }), S && wp.element.createElement(m.Button, {
                    className: _()("history-button button new-chat", {
                        active: "" === x
                    }),
                    onClick: function() {
                        T("")
                    }
                }, wp.element.createElement("i", {
                    className: "rm-icon rm-icon-circle-plus"
                }), " ", (0,
                    s.__)("New Chat", "rank-math")), S && (0,
                    o.map)(k, (function(e, t) {
                        var n = e.length > 2 ? e[e.length - 2].content : e[0].content;
                        return wp.element.createElement("div", {
                            role: "button",
                            tabIndex: "0",
                            className: _()("history-button button", {
                                active: x === t
                            }),
                            key: t,
                            onClick: function() {
                                T(t)
                            },
                            onKeyDown: void 0
                        }, wp.element.createElement("i", {
                            className: "rm-icon rm-icon-comments"
                        }), n.split(/\s+/).slice(0, 8).join(" ") + "...", wp.element.createElement(m.Button, {
                            className: "delete-session",
                            onClick: function() {
                                k.splice(t, 1),
                                    y(k),
                                    st(!0, t),
                                    setTimeout((function() {
                                            T("")
                                        }
                                    ), 10)
                            },
                            title: (0,
                                s.__)("Delete Session", "rank-math")
                        }, wp.element.createElement("i", {
                            className: "dashicons dashicons-no-alt"
                        })))
                    }
                )))), wp.element.createElement("div", {
                    className: "chat-container"
                }, wp.element.createElement("div", {
                    className: "chat-messages"
                }, h && wp.element.createElement("div", {
                    className: "chat-message loading"
                }, wp.element.createElement("div", {
                    className: "rank-math-loader"
                })), "" === x && wp.element.createElement((function() {
                        return wp.element.createElement(React.Fragment, null, wp.element.createElement("div", {
                            className: "prompt-examples"
                        }, wp.element.createElement("h2", null, (0,
                            s.__)("Examples", "rank-math")), wp.element.createElement("p", null, (0,
                            s.__)("Here are some examples of questions you can ask RankBot", "rank-math")), wp.element.createElement("div", {
                            className: "grid"
                        }, (0,
                            o.map)(A, (function(e, t) {
                                return wp.element.createElement("div", {
                                    role: "button",
                                    tabIndex: "0",
                                    onClick: function() {
                                        v(e.replaceAll("[", "<span>[").replaceAll("]", "]</span>"))
                                    },
                                    key: t,
                                    dangerouslySetInnerHTML: {
                                        __html: e.replaceAll("[", "<span>[").replaceAll("]", "]</span>")
                                    }
                                })
                            }
                        )))))
                    }
                ), null), !(0,
                    o.isEmpty)(k) && "" !== x && (0,
                    o.map)(k[x], (function(e, t) {
                        if (!(0,
                            o.isEmpty)(e.content)) {
                            var n = "user" === e.role
                                , a = n ? (0,
                                s.__)("You:", "rank-math") : (0,
                                s.__)("RankBot:", "rank-math")
                                , r = (0,
                                o.uniqueId)()
                                , i = e.isNew;
                            return e.isNew = !1,
                                wp.element.createElement("div", {
                                    className: n ? "chat-message user" : "chat-message",
                                    key: t
                                }, wp.element.createElement("div", {
                                    className: "message-actions"
                                }, wp.element.createElement("span", null, a), !n && wp.element.createElement(ae, {
                                    value: e.content
                                })), wp.element.createElement("div", {
                                    className: "message",
                                    id: "block-" + r
                                }, i && wp.element.createElement(Y, {
                                    value: e.content,
                                    showWordCount: !1
                                }), !i && wp.element.createElement("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: U(e.content)
                                    }
                                })))
                        }
                    }
                ))), wp.element.createElement("div", {
                    className: "chat-input"
                }, wp.element.createElement("div", {
                    className: "chat-input-actions"
                }, wp.element.createElement(Te.RichText, {
                    tagName: "div",
                    className: "chat-input-textarea",
                    value: b.slice(0, 2e3),
                    allowedFormats: [],
                    onChange: function(e) {
                        var t = document.getElementsByClassName("chat-input-textarea")[0];
                        if (e.length > 2e3) {
                            e = e.slice(0, 2e3),
                                t.innerHTML = b;
                            var n = document.createRange()
                                , a = window.getSelection()
                                , r = t.childNodes[t.childNodes.length - 1];
                            n.setStart(r, r.textContent.length),
                                n.collapse(!0),
                                a.removeAllRanges(),
                                a.addRange(n)
                        }
                        v(e)
                    },
                    onKeyUp: function(e) {
                        "Enter" !== e.key || e.shiftKey || (0,
                            o.isEmpty)((0,
                            o.trim)(b)) || h || P()
                    },
                    preserveWhiteSpace: "true",
                    placeholder: (0,
                        s.__)("Type your message here…", "rank-math")
                }), wp.element.createElement("div", {
                    className: "chat-input-buttons"
                }, wp.element.createElement(m.Button, {
                    className: "prompts-button button",
                    onClick: function() {
                        return d(!0)
                    }
                }, wp.element.createElement("i", {
                    className: "rm-icon rm-icon-htaccess"
                }), " ", S ? (0,
                    s.__)("Prompts Library", "rank-math") : ""), wp.element.createElement(ot, {
                    isOpen: u,
                    toggleModal: d,
                    setMessage: v
                }), "" !== x && !h && wp.element.createElement(m.Tooltip, {
                    text: (0,
                        s.__)("Regenerate Response", "rank-math")
                }, wp.element.createElement(m.Button, {
                    className: "regenerate-response button button-small",
                    onClick: function() {
                        var e = k[x]
                            , t = e[1].content;
                        e.shift(),
                            k[x] = e,
                            y(k),
                            P(t, !0)
                    },
                    showTooltip: !0
                }, wp.element.createElement(m.Dashicon, {
                    icon: "controls-repeat"
                }))), wp.element.createElement("div", {
                    className: b.length >= 2e3 ? "limit limit-reached" : "limit"
                }, wp.element.createElement("span", {
                    className: "count"
                }, b.length), "/", (0,
                    s.__)("2000", "rank-math")), wp.element.createElement(m.Button, {
                    className: "button is-primary is-large",
                    "aria-label": (0,
                        s.__)("Send", "rank-math"),
                    disabled: (0,
                        o.isEmpty)((0,
                        o.trim)(b)) || h,
                    onClick: function() {
                        return P()
                    }
                }, wp.element.createElement("span", {
                    className: "rm-icon rm-icon-send"
                })))))))), r && wp.element.createElement(ce, null))
            }
                , dt = function(e) {
                var t = wp.data.select("rank-math-content-ai").getContentAiAttributes();
                return e || (e = (0,
                    o.isEmpty)(t.instructions) ? "" : t.instructions),
                    {
                        document_title: "undefined" != typeof rankMathEditor ? rankMathEditor.assessor.dataCollector.getData().title : "",
                        text: xe(),
                        instructions: e,
                        tone: (0,
                            o.isEmpty)(t.tone) ? rankMath.ca_tone : t.tone,
                        focus_keyword: (0,
                            o.isEmpty)(t.focus_keyword) ? "" : t.focus_keyword,
                        length: (0,
                            o.isEmpty)(t.length) ? "medium" : t.length,
                        choices: 1
                    }
            }
                , mt = wp.keyboardShortcuts;
            function pt(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var a, r, i, o, s = [], l = !0, c = !1;
                        try {
                            if (i = (n = n.call(e)).next,
                            0 === t) {
                                if (Object(n) !== n)
                                    return;
                                l = !1
                            } else
                                for (; !(l = (a = i.call(n)).done) && (s.push(a.value),
                                s.length !== t); l = !0)
                                    ;
                        } catch (e) {
                            c = !0,
                                r = e
                        } finally {
                            try {
                                if (!l && null != n.return && (o = n.return(),
                                Object(o) !== o))
                                    return
                            } finally {
                                if (c)
                                    throw r
                            }
                        }
                        return s
                    }
                }(e, t) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return ht(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return ht(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function ht(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++)
                    a[n] = e[n];
                return a
            }
            var gt = function e(t) {
                var n = "";
                return t.forEach((function(t) {
                        "rank-math/command" !== t.name && t.attributes && t.attributes.content && (n += t.attributes.content + " "),
                        t.innerBlocks && t.innerBlocks.length > 0 && (n += e(t.innerBlocks))
                    }
                )),
                    n
            }
                , ft = function() {
                var e = (0,
                    u.useSelect)((function() {
                        return (0,
                            u.select)("core/editor").getEditedPostContent()
                    }
                ))
                    , t = gt((0,
                    u.select)("core/block-editor").getBlocks());
                return wp.element.createElement("div", {
                    className: "actions-wrapper"
                }, wp.element.createElement(ae, {
                    value: t,
                    disabled: !t,
                    label: (0,
                        s.__)("Copy as Text", "rank-math")
                }), wp.element.createElement(ae, {
                    disabled: !t,
                    value: e,
                    label: (0,
                        s.__)("Copy as Blocks", "rank-math"),
                    onClick: !0
                }), wp.element.createElement(m.Button, {
                    disabled: !t,
                    onClick: function() {
                        var e = (0,
                            u.select)("core/block-editor").getBlocks()
                            , t = wp.blocks.createBlock("rank-math/command", {
                            content: "",
                            className: "rank-math-content-ai-command"
                        });
                        e.push(t),
                            M()({
                                method: "POST",
                                path: "/rankmath/v1/ca/createPost",
                                data: {
                                    content: (0,
                                        F.serialize)(e)
                                }
                            }).catch((function(e) {
                                    console.log(e)
                                }
                            )).then((function(e) {
                                    window.location.href = e
                                }
                            ))
                    },
                    className: "button is-secondary is-small"
                }, wp.element.createElement("i", {
                    className: "rm-icon rm-icon-circle-plus"
                }), " ", (0,
                    s.__)("Create New Post", "rank-math")))
            }
                , _t = function() {
                var e = pt((0,
                    c.useState)(!1), 2)
                    , t = e[0]
                    , n = e[1]
                    , a = pt((0,
                    c.useState)(!0), 2)
                    , r = a[0]
                    , i = a[1];
                return wp.element.createElement("div", {
                    className: t ? "wp-block-column interface-interface-skeleton__sidebar has-collapsed" : "wp-block-column interface-interface-skeleton__sidebar"
                }, t && wp.element.createElement(m.Button, {
                    className: "collapsed",
                    onClick: function() {
                        return n(!1)
                    },
                    icon: "align-pull-right",
                    title: (0,
                        s.__)("Expand Sidebar", "rank-math")
                }), !t && wp.element.createElement("div", {
                    className: "interface-complementary-area edit-post-sidebar rank-math-tabs"
                }, wp.element.createElement("div", {
                    role: "tablist",
                    "aria-orientation": "horizontal",
                    className: "components-panel__header interface-complementary-area-header"
                }, wp.element.createElement(m.Button, {
                    className: r ? "is-active" : "",
                    onClick: function() {
                        return i(!0)
                    }
                }, wp.element.createElement("i", {
                    className: "rm-icon rm-icon-edit",
                    title: (0,
                        s.__)("Write", "rank-math")
                }), wp.element.createElement("span", null, (0,
                    s.__)("Write", "rank-math"))), wp.element.createElement(m.Button, {
                    className: r ? "" : "is-active",
                    onClick: function() {
                        return i(!1)
                    }
                }, wp.element.createElement("i", {
                    className: "rm-icon rm-icon-page",
                    title: (0,
                        s.__)("AI Tools", "rank-math")
                }), wp.element.createElement("span", null, (0,
                    s.__)("AI Tools", "rank-math"))), wp.element.createElement(m.Button, {
                    onClick: function() {
                        return n(!0)
                    },
                    icon: "no-alt",
                    title: (0,
                        s.__)("Collapse Sidebar", "rank-math")
                })), wp.element.createElement("div", {
                    className: r ? "rank-math-content-ai-wrapper rank-math-tab-content-write" : "rank-math-content-ai-wrapper rank-math-tab-content-write rank-math-tab-content-tools"
                }, wp.element.createElement("div", {
                    className: "rank-math-tab-content-ai-tools"
                }, r && wp.element.createElement(Ye, null), !r && wp.element.createElement(ye, {
                    showMinimal: !0
                })))))
            }
                , bt = function() {
                return setTimeout((function() {
                        var e = document.getElementById("editor2").dataset;
                        wp.editPost.initializeEditor("editor", "rm_content_editor", e.postId, JSON.parse(e.settings), {}),
                        (0,
                            u.select)("core/edit-post").isFeatureActive("fullscreenMode") && (0,
                            u.dispatch)("core/edit-post").toggleFeature("fullscreenMode")
                    }
                ), 200),
                    wp.element.createElement(mt.ShortcutProvider, null, wp.element.createElement("div", {
                        className: "wp-block-columns rank-math-content-ai-wrapper",
                        id: "rank-math-content-editor-page"
                    }, wp.element.createElement("div", {
                        className: "wp-block-column"
                    }, wp.element.createElement(ft, null), wp.element.createElement("div", {
                        id: "editor"
                    })), wp.element.createElement(_t, null)))
            };
            function vt(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var a, r, i, o, s = [], l = !0, c = !1;
                        try {
                            if (i = (n = n.call(e)).next,
                            0 === t) {
                                if (Object(n) !== n)
                                    return;
                                l = !1
                            } else
                                for (; !(l = (a = i.call(n)).done) && (s.push(a.value),
                                s.length !== t); l = !0)
                                    ;
                        } catch (e) {
                            c = !0,
                                r = e
                        } finally {
                            try {
                                if (!l && null != n.return && (o = n.return(),
                                Object(o) !== o))
                                    return
                            } finally {
                                if (c)
                                    throw r
                            }
                        }
                        return s
                    }
                }(e, t) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return wt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return wt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function wt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++)
                    a[n] = e[n];
                return a
            }
            var kt = function() {
                var e = vt((0,
                    c.useState)(rankMath.contentAIHistory), 2)
                    , t = e[0]
                    , n = e[1];
                return wp.element.createElement("div", {
                    className: "history-container"
                }, wp.element.createElement("div", {
                    className: "tab-header"
                }, wp.element.createElement("span", {
                    className: "tab-header-title"
                }, wp.element.createElement("span", {
                    className: "rm-icon rm-icon-dataset"
                }), " ", (0,
                    s.__)("AI History", "rank-math")), !(0,
                    o.isEmpty)(t) && wp.element.createElement(m.Button, {
                    className: "button clear-history is-small is-link button-link-delete",
                    onClick: function() {
                        st(!1),
                            n([])
                    }
                }, (0,
                    s.__)("Clear History", "rank-math"))), wp.element.createElement("div", {
                    className: "inner-wrapper"
                }, !(0,
                    o.isEmpty)(t) && (0,
                    o.map)(t, (function(e, t) {
                        var n = function(e, t) {
                            if (!(0,
                                o.isObject)(e))
                                return U(e);
                            var n = "";
                            return "Frequently_Asked_Questions" === t ? ((0,
                                o.map)(e, (function(e) {
                                    n += "<h4>" + e.question + "</h4><span>" + e.answer + "</span>"
                                }
                            )),
                                n) : ((0,
                                o.map)(e, (function(e, t) {
                                    n += "<h4>" + (0,
                                        o.startCase)(t) + "</h4><span>" + e + "</span>"
                                }
                            )),
                                U(n))
                        }(e.output, e.key);
                        return wp.element.createElement("div", {
                            className: "output-item",
                            key: t
                        }, wp.element.createElement("div", {
                            className: "tool-name"
                        }, e.key), wp.element.createElement("div", {
                            className: "output-actions"
                        }, wp.element.createElement(ae, {
                            value: n
                        })), wp.element.createElement("div", {
                            className: "word-count"
                        }, (0,
                            s.__)("Words:", "rank-math"), " ", n.split(" ").length), wp.element.createElement("div", {
                            className: "content",
                            dangerouslySetInnerHTML: {
                                __html: n
                            }
                        }))
                    }
                )), (0,
                    o.isEmpty)(t) && wp.element.createElement("div", {
                    className: "no-output"
                }, (0,
                    s.__)("No AI History found.", "rank-math"))))
            }
                , yt = function() {
                var e = window.location.hash ? window.location.hash.replace("#", "") : "ai-tools";
                return (0,
                    c.useEffect)((function() {
                        !ue() && "content-editor" !== e && (0,
                            o.isUndefined)(wp.blocks.getBlockType("core/paragraph")) && wp.blockLibrary.registerCoreBlocks()
                    }
                ), []),
                    wp.element.createElement(React.Fragment, null, wp.element.createElement(m.TabPanel, {
                        className: "rank-math-tabs",
                        activeClass: "is-active",
                        tabs: [{
                            name: "ai-tools",
                            id: "ai-tools",
                            title: (0,
                                s.__)("AI Tools", "rank-math"),
                            view: ye,
                            className: "rank-math-ai-tools-tab rank-math-tab"
                        }, {
                            name: "content-editor",
                            id: "content-editor",
                            title: (0,
                                s.__)("Content Editor", "rank-math"),
                            view: bt,
                            className: "rank-math-content-editor-tab rank-math-tab"
                        }, {
                            name: "chat",
                            id: "chat",
                            title: (0,
                                s.__)("Chat", "rank-math"),
                            view: ut,
                            className: "rank-math-chat-tab rank-math-tab"
                        }, {
                            name: "history",
                            id: "history",
                            title: (0,
                                s.__)("History", "rank-math"),
                            view: kt,
                            className: "rank-math-history-tab rank-math-tab"
                        }],
                        initialTabName: e,
                        onSelect: function(e) {
                            window.location.hash = e
                        }
                    }, (function(e) {
                            var t = ue() && "history" !== e.id ? " blurred" : "";
                            return wp.element.createElement(React.Fragment, null, wp.element.createElement("div", {
                                className: "rank-math-tab-content dashboard-wrapper rank-math-tab-content-" + e.name + t
                            }, (0,
                                c.createElement)(e.view, {
                                isPage: !0
                            })), t && wp.element.createElement(ce, {
                                width: "40"
                            }))
                        }
                    )))
            }
                , Et = wp.richText
                , xt = function(e) {
                var t = e.width
                    , n = void 0 === t ? 40 : t
                    , a = rankMath.isUserRegistered
                    , r = rankMath.contentAIPlan
                    , i = rankMath.contentAICredits > 0
                    , o = rankMath.contentAiMigrating;
                if (a && r && i && !o)
                    return null;
                var l = "width-" + n;
                return a && r ? o ? wp.element.createElement("div", {
                    id: "rank-math-pro-cta",
                    className: "center rank-math-content-ai-warning-wrapper"
                }, wp.element.createElement("div", {
                    style: {
                        textAlign: "center"
                    },
                    className: "rank-math-cta-box less-padding top-20 " + l
                }, wp.element.createElement("h3", null, (0,
                    s.__)("Server Maintenance Underway", "rank-math")), wp.element.createElement("p", null, (0,
                    s.__)("We are working on improving your Content AI experience. Please wait for 5 minutes and then refresh to start using the optimized Content AI. If you see this for more than 5 minutes, please ", "rank-math"), wp.element.createElement("a", {
                    href: "https://rankmath.com/support/",
                    target: "_blank",
                    rel: "noreferrer"
                }, (0,
                    s.__)("reach out to the support team.", "rank-math")), (0,
                    s.__)(" We are sorry for the inconvenience.", "rank-math")))) : wp.element.createElement("div", {
                    id: "rank-math-pro-cta",
                    className: "center rank-math-content-ai-warning-wrapper"
                }, wp.element.createElement("div", {
                    className: "rank-math-cta-box less-padding top-20 " + l
                }, wp.element.createElement("h3", null, (0,
                    s.__)("⛔️ Content AI Credit Alert!", "rank-math")), wp.element.createElement("p", null, (0,
                    s.__)("Your monthly Content AI credits have been fully utilized. To continue enjoying seamless content creation, simply click the button below to upgrade your plan and access more credits.", "rank-math")), wp.element.createElement(m.Button, {
                    href: "https://rankmath.com/kb/how-to-use-content-ai/?play-video=ioPeVIntJWw&utm_source=Plugin&utm_medium=Buy+Credits+Button&utm_campaign=WP",
                    className: "button button-primary is-green",
                    target: "_blank"
                }, (0,
                    s.__)("Learn More", "rank-math")))) : wp.element.createElement("div", {
                    id: "rank-math-pro-cta",
                    className: "center rank-math-content-ai-warning-wrapper"
                }, wp.element.createElement("div", {
                    className: "rank-math-cta-box blue-ticks top-20 less-padding " + l
                }, wp.element.createElement("h3", null, (0,
                    s.__)("🚀 Supercharge Your Content With AI", "rank-math")), wp.element.createElement("p", null, !a && (0,
                    s.__)("Start using Content AI by connecting your RankMath.com Account", "rank-math"), a && !r && (0,
                    s.__)("To access this Content AI feature, you need to have an active subscription plan.", "rank-math")), function(e) {
                    return 40 === e ? wp.element.createElement("ul", null, wp.element.createElement("li", null, (0,
                        s.__)("1-Click SEO Content", "rank-math")), wp.element.createElement("li", null, (0,
                        s.__)("1-Click SEO Meta", "rank-math")), wp.element.createElement("li", null, (0,
                        s.__)("40+ Specialized AI Tools", "rank-math")), wp.element.createElement("li", null, (0,
                        s.__)("1-Click Competitor Research", "rank-math")), wp.element.createElement("li", null, (0,
                        s.__)("125+ Pre-Built Prompts", "rank-math"))) : wp.element.createElement("ul", null, wp.element.createElement("li", null, (0,
                        s.__)("Gain access to 40+ advanced AI tools, empowering your content strategy.", "rank-math")), wp.element.createElement("li", null, (0,
                        s.__)("Experience the revolutionary AI-powered Content Editor for unparalleled efficiency.", "rank-math")), wp.element.createElement("li", null, (0,
                        s.__)("Engage with RankBot, your personal AI Chat Assistant, for real-time assistance.", "rank-math")))
                }(n), !a && wp.element.createElement(m.Button, {
                    href: rankMath.connectSiteUrl,
                    className: "button button-primary is-green"
                }, (0,
                    s.__)("Connect Now", "rank-math")), a && !r && wp.element.createElement(m.Button, {
                    href: "https://rankmath.com/kb/how-to-use-content-ai/?play-video=ioPeVIntJWw&utm_source=Plugin&utm_medium=Buy+Plan+Button&utm_campaign=WP",
                    className: "button button-primary is-green",
                    target: "_blank"
                }, (0,
                    s.__)("Learn More", "rank-math"))))
            }
                , Tt = (0,
                s.__)("Generating…", "rank-math")
                , St = function(e, t, n) {
                var a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (ue()) {
                    var r = (0,
                        o.find)(g(), ["endpoint", e]);
                    return (0,
                        o.isUndefined)(r) && ((r = (0,
                        o.find)(g(), ["endpoint", "Blog_Post_Idea"])).title = (0,
                        o.startCase)(e)),
                    (0,
                        o.isNull)(document.getElementById("rank-math-content-ai-modal-wrapper")) && i()("#wpwrap").append('<div id="rank-math-content-ai-modal-wrapper"></div>'),
                        void setTimeout((function() {
                                (0,
                                    c.render)(wp.element.createElement(m.Modal, {
                                    className: "rank-math-contentai-modal rank-math-modal rank-math-error-modal",
                                    onRequestClose: function() {
                                        i()(".components-modal__screen-overlay").remove(),
                                            document.getElementById("rank-math-content-ai-modal-wrapper").remove()
                                    },
                                    shouldCloseOnClickOutside: !0
                                }, wp.element.createElement(xt, {
                                    width: 100
                                })), document.getElementById("rank-math-content-ai-modal-wrapper"))
                            }
                        ), 100)
                }
                var s = (0,
                    F.createBlock)("rank-math/command", {
                    content: Tt,
                    className: "rank-math-content-ai-command"
                })
                    , l = (0,
                    u.select)("core/block-editor").getBlocks().map((function(e) {
                        return e.clientId === n.clientId
                    }
                )).indexOf(!0);
                (0,
                    u.dispatch)("core/block-editor").insertBlocks(s, l + 1),
                    De(e, t, s.clientId, n.clientId, a)
            }
                , Ct = (0,
                ee.createHigherOrderComponent)((function(e) {
                    return function(t) {
                        if (t && (!(0,
                            o.includes)(["core/paragraph", "core/heading"], t.name) || (0,
                            o.isEmpty)(t.attributes.content)))
                            return wp.element.createElement(e, t);
                        var n = rankMath.ca_language
                            , a = [{
                            title: "💻  " + (0,
                                s.__)("Run as Command", "rank-math"),
                            onClick: function() {
                                return St("AI_Command", {
                                    command: r,
                                    language: n,
                                    choices: 1
                                }, t)
                            }
                        }, {
                            title: "📖  " + (0,
                                s.__)("Write More", "rank-math"),
                            onClick: function() {
                                return St("Continue_Writing", {
                                    sentence: xe(),
                                    choices: 1
                                }, t)
                            }
                        }, {
                            title: "📝  " + (0,
                                s.__)("Improve", "rank-math"),
                            onClick: function() {
                                return St("Paragraph_Rewriter", {
                                    original_paragraph: r,
                                    language: n,
                                    choices: 1
                                }, t)
                            }
                        }];
                        (0,
                            o.isNull)(t) || "core/paragraph" !== t.name || a.push({
                            title: "📙  " + (0,
                                s.__)("Summarize", "rank-math"),
                            onClick: function() {
                                return St("Text_Summarizer", {
                                    text: r,
                                    language: n,
                                    choices: 1
                                }, t)
                            }
                        }, {
                            title: "💭  " + (0,
                                s.__)("Write Analogy", "rank-math"),
                            onClick: function() {
                                return St("Analogy", {
                                    text: r,
                                    language: n,
                                    choices: 1
                                }, t)
                            }
                        }),
                            a.push({
                                title: "✨  " + (0,
                                    s.__)("Fix Grammar", "rank-math"),
                                onClick: function() {
                                    return St("Fix_Grammar", {
                                        text: r,
                                        choices: 1
                                    }, t)
                                }
                            });
                        var r = (0,
                            o.isEmpty)(t.attributes) ? "" : t.attributes.content.split(" ").splice(0, 149).join(" ");
                        return wp.element.createElement(React.Fragment, null, wp.element.createElement(e, t), wp.element.createElement(Te.BlockControls, null, wp.element.createElement(m.ToolbarGroup, null, wp.element.createElement(m.ToolbarDropdownMenu, {
                            icon: "rm-icon rm-icon-content-ai",
                            label: (0,
                                s.__)("Content AI Commands", "rank-math"),
                            controls: a
                        }))))
                    }
                }
            ));
            function At(e) {
                return function(e) {
                    if (Array.isArray(e))
                        return Pt(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                        return Array.from(e)
                }(e) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return Pt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return Pt(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function Pt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++)
                    a[n] = e[n];
                return a
            }
            var Ot = function(e) {
                return {
                    name: "content-ai-tools",
                    className: "content-ai-autocompleters",
                    triggerPrefix: e,
                    isDebounced: !0,
                    allowContext: function(e, t) {
                        return !(/\S/.test(e) || /\S/.test(t))
                    },
                    options: function() {
                        return g()
                    },
                    getOptionKeywords: function(e) {
                        var t = e.endpoint
                            , n = e.title
                            , a = e.searchTerms
                            , r = n.split(/\s+/);
                        return r.push(r.join(" ")),
                            (0,
                                o.isUndefined)(a) ? [t].concat(At(r)) : a
                    },
                    getOptionLabel: function(e) {
                        return wp.element.createElement("span", null, wp.element.createElement("i", {
                            className: "ai-icon " + e.icon
                        }), " ", e.title)
                    },
                    getOptionCompletion: function(e) {
                        if (!e.endpoint)
                            return !1;
                        (0,
                            o.isNull)(document.getElementById("rank-math-content-ai-modal-wrapper")) && i()("#wpwrap").append('<div id="rank-math-content-ai-modal-wrapper"></div>'),
                            wp.data.dispatch("rank-math-content-ai").isAutoCompleterOpen(!0),
                            setTimeout((function() {
                                    (0,
                                        c.render)(wp.element.createElement(be, {
                                        data: e
                                    }), document.getElementById("rank-math-content-ai-modal-wrapper"))
                                }
                            ), 100)
                    }
                }
            }
                , It = function() {
                var e = (0,
                    o.isUndefined)((0,
                    u.select)("rank-math")) ? [] : (0,
                    u.select)("rank-math").getHighlightedParagraphs();
                if (!(0,
                    o.isEmpty)(e)) {
                    var t = (0,
                        u.select)("core/block-editor").getSelectedBlock();
                    if (!(0,
                        o.isEmpty)(t) && (0,
                        o.includes)(e, t.clientId))
                        return i()(".block-editor-block-popover").hide(),
                            wp.element.createElement(m.Popover, {
                                placement: "top-start",
                                focusOnMount: "firstElement",
                                key: "rank-math-popover",
                                expandOnMobile: !0,
                                noArrow: !1,
                                anchor: document.getElementById("block-" + t.clientId)
                            }, wp.element.createElement(m.Button, {
                                variant: "primary",
                                onClick: function() {
                                    return St("Text_Summarizer", {
                                        text: t.attributes.content,
                                        language: rankMath.ca_language,
                                        format: "paragraph",
                                        choices: 1
                                    }, t, !0)
                                }
                            }, (0,
                                s.__)("Shorten with AI", "rank-math")));
                    i()(".block-editor-block-popover").show()
                }
            }
                , Nt = function(e) {
                i()(e.target).parent().attr("data-mce-selected", !1);
                var t = i()(e.target).parents("p")
                    , n = document.createElement("p");
                n.textContent = (0,
                    s.__)("Generating…", "rank-math");
                var a = t.html();
                t.before(n),
                    L("Text_Summarizer", {
                        text: a,
                        language: rankMath.ca_language,
                        format: "paragraph",
                        choices: 1
                    }, (function(e) {
                            n.textContent = e[0]
                        }
                    ))
            }
                , Mt = function() {
                (0,
                    mt.useShortcut)("rank-math-contentai-write", (0,
                    c.useCallback)((function() {
                        var e = Ee()
                            , t = (0,
                            F.createBlock)("rank-math/command");
                        (0,
                            o.isEmpty)(e.block) || e.block.attributes.content ? (0,
                            u.dispatch)("core/block-editor").insertBlock(t, e.position) : (0,
                            u.dispatch)("core/block-editor").replaceBlock(e.clientId, t),
                            De("Write", dt(), t.clientId)
                    }
                ), []));
                var e = (0,
                    u.useSelect)((function(e) {
                        return e(mt.store).getShortcutKeyCombination("rank-math-contentai-write")
                    }
                ), []);
                if (!(0,
                    o.isNull)(e))
                    return null;
                (0,
                    (0,
                        u.useDispatch)(mt.store).registerShortcut)({
                    name: "rank-math-contentai-write",
                    category: "global",
                    keyCombination: {
                        modifier: "ctrl",
                        character: "/"
                    }
                })
            };
            function Rt(e, t) {
                return {
                    type: "RANK_MATH_APP_UI",
                    key: e,
                    value: t
                }
            }
            function jt(e) {
                if (!e)
                    return Rt("isAutoCompleterOpen", e);
                var t = (0,
                    u.select)("core/block-editor").getSelectedBlock();
                (0,
                    o.isNull)(t) || (0,
                    (0,
                        u.dispatch)(Te.store).removeBlock)(t.clientId);
                return Rt("isAutoCompleterOpen", e)
            }
            function qt(e, t) {
                var n = (0,
                    u.select)("rank-math-content-ai").getContentAiAttributes();
                return n[e] = "language" !== e || t ? t : rankMath.ca_language,
                    Rt("contentAiAttributes", n)
            }
            function Dt(e) {
                return Dt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                    ,
                    Dt(e)
            }
            function Lt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }
                    ))),
                        n.push.apply(n, a)
                }
                return n
            }
            function Bt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Lt(Object(n), !0).forEach((function(t) {
                            zt(e, t, n[t])
                        }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lt(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }
                    ))
                }
                return e
            }
            function zt(e, t, n) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" !== Dt(e) || null === e)
                            return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var a = n.call(e, t || "default");
                            if ("object" !== Dt(a))
                                return a;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" === Dt(t) ? t : String(t)
                }(t))in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                    e
            }
            var Ht = {
                isAutoCompleterOpen: !1,
                contentAiAttributes: {}
            };
            function Ft() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ht
                    , t = arguments.length > 1 ? arguments[1] : void 0;
                return "RANK_MATH_APP_UI" === t.type ? Bt(Bt({}, e), {}, zt({}, t.key, t.value)) : e
            }
            function Vt(e) {
                return e.appUi.isAutoCompleterOpen
            }
            function Wt(e) {
                return e.appUi.contentAiAttributes
            }
            (0,
                u.register)((0,
                u.createReduxStore)("rank-math-content-ai", {
                reducer: (0,
                    u.combineReducers)(t),
                selectors: a,
                actions: e
            }));
            (0,
                l.addFilter)("rank_math_before_serp_devices", "rank-math", (function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "SEO_Meta"
                        , n = _()("rank-math-content-ai-meta-button button button-small button-primary", {
                        "is-new": !rankMath.ca_viewed,
                        "field-group": "SEO_Meta" !== t
                    });
                    return wp.element.createElement(m.Button, {
                        className: n,
                        disabled: ue(),
                        onClick: function() {
                            (0,
                                o.isNull)(document.getElementById("rank-math-content-ai-modal-wrapper")) && i()("body").append('<div id="rank-math-content-ai-modal-wrapper"></div>');
                            var e = wp.data.select("rank-math")
                                , n = (0,
                                o.find)(g(), ["endpoint", t])
                                , a = n.params;
                            a.topic.default = e.getSerpTitle(),
                                a.post_brief.default = e.getSerpDescription(),
                                a.focus_keyword.default = e.getKeywords().split(","),
                                n.output.default = 1,
                                n.params = a,
                                (0,
                                    c.render)(wp.element.createElement(be, {
                                    data: n,
                                    callApi: !0
                                }), document.getElementById("rank-math-content-ai-modal-wrapper"))
                        }
                    }, wp.element.createElement("i", {
                        className: "rm-icon rm-icon-content-ai"
                    }), (0,
                        s.__)("Generate With AI", "rank-math"))
                }
            )),
            (Le() || rankMath.isContentAIPage) && ((0,
                l.addFilter)("rank_math_block_faq_actions", "rank-math", (function(e, t, n) {
                    return wp.element.createElement(React.Fragment, null, e, wp.element.createElement(m.Button, {
                        icon: "rm-icon rm-icon-content-ai",
                        className: "rank-math-faq-content-ai",
                        label: (0,
                            s.__)("Generate Answer with Content AI", "rank-math"),
                        disabled: ue(),
                        showTooltip: !0,
                        onClick: function() {
                            n.setQuestionProp("content", (0,
                                s.__)("Generating…", "rank-math")),
                                L("AI_Command", {
                                    command: t.title,
                                    choices: 1
                                }, (function(e) {
                                        var t = "";
                                        setTimeout((function() {
                                                var a = e[0].replaceAll(/(?:\r\n|\r|\n)/g, "<br>").split(" ")
                                                    , r = 0
                                                    , i = !1
                                                    , o = setInterval((function() {
                                                        t ? t += "<br>" === a[r] || i ? a[r] : " " + a[r] : t = a[r],
                                                            i = "<br>" === a[r],
                                                            n.setQuestionProp("content", t),
                                                        ++r >= a.length && clearInterval(o)
                                                    }
                                                ), 50)
                                            }
                                        ), 100)
                                    }
                                ))
                        }
                    }))
                }
            )),
                (0,
                    Et.registerFormatType)("rank-math/content-ai", {
                    title: (0,
                        s.__)("Content AI", "rank-math"),
                    tagName: "p",
                    className: null,
                    edit: It
                }),
                (0,
                    l.addFilter)("editor.BlockEdit", "rank-math", Ct),
            ue() || ((0,
                l.addFilter)("editor.Autocomplete.completers", "rank-math/content-ai/tools", (function(e, t) {
                    return "core/paragraph" === t || "rank-math/command" === t ? [].concat(At(e), [Ot("//")]) : e
                }
            )),
                (0,
                    l.addFilter)("editor.Autocomplete.completers", "rank-math/content-ai/tools2", (function(e, t) {
                        return "core/paragraph" === t || "rank-math/command" === t ? [].concat(At(e), [Ot("// ")]) : e
                    }
                )))),
                function() {
                    var e = (0,
                        u.dispatch)(Te.store).updateBlockAttributes
                        , t = function() {
                        var e = (0,
                            u.select)("core/block-editor").getSelectedBlock();
                        (0,
                            o.isNull)(e) || De("Write", dt(e.attributes.content), e.clientId)
                    }
                        , n = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                            , t = document.activeElement
                            , n = window.getSelection()
                            , a = document.createRange()
                            , r = t.childNodes[1];
                        a.setStart(r, e ? 0 : r.length),
                            a.collapse(!0),
                            n.removeAllRanges(),
                            n.addRange(a)
                    };
                    i()(document).on("click", ".rank-math-content-ai-command-button", (function() {
                            t()
                        }
                    )),
                        i()(document).on("keydown", ".rank-math-content-ai-command-button", (function(e) {
                                "Enter" !== e.code ? "ArrowLeft" === e.code && (e.preventDefault(),
                                    n()) : t()
                            }
                        ));
                    var a = !1
                        , r = '<button class="rank-math-content-ai-command-button" title="' + (0,
                        s.__)("Click or Press Enter", "rank-math") + '" contenteditable="false"><i class="rm-icon rm-icon-enter-key"></i></button>';
                    document.addEventListener("keyup", (function(t) {
                            var i = (0,
                                u.select)("core/block-editor").getSelectedBlock();
                            if (!(0,
                                o.isNull)(i)) {
                                var s = i.clientId
                                    , l = i.attributes.content;
                                if ((0,
                                    o.startsWith)(l, "//") && "core/paragraph" === i.name) {
                                    var c = (0,
                                        F.createBlock)("rank-math/command", {
                                        content: i.attributes.content.replace("//", "<span>//</span>"),
                                        className: "rank-math-content-ai-command"
                                    });
                                    (0,
                                        u.dispatch)("core/block-editor").replaceBlock(s, c),
                                        s = c.clientId
                                }
                                if ("rank-math/command" !== i.name)
                                    return !1;
                                if (a && (0,
                                    o.includes)(["ArrowLeft", "Arrowright"], t.code))
                                    return n("ArrowLeft" === t.code),
                                        void (a = !1);
                                if ("Backspace" !== t.code && (a = "KeyA" === t.code),
                                "Backspace" !== t.code || !a && l.replace(/(<div[^>]*>[\s\S]*<\/div>)/, "").replace(/(<span[^>]*>[\s\S]*<\/span>)/, "") && "/" !== l.replace(/(<([^>]+)>)/gi, "")) {
                                    var d = (0,
                                        o.isUndefined)(i.attributes.className) ? [] : i.attributes.className.split(" ");
                                    "" === l.replace("//", "").replace(" ", "").replace(new RegExp(r,"i"), "").replace(/(<([^>]+)>)/gi, "") ? e(s, {
                                        content: l.replace(new RegExp(r,"i"), "")
                                    }) : (0,
                                        o.includes)(d, "typing") || l.includes("rank-math-content-ai-command-button") || e(s, {
                                        content: l += r,
                                        className: "rank-math-content-ai-command"
                                    })
                                } else {
                                    var m = (0,
                                        F.createBlock)("core/paragraph");
                                    (0,
                                        u.dispatch)("core/block-editor").replaceBlock(s, m)
                                }
                            }
                        }
                    )),
                        document.addEventListener("keydown", (function(t) {
                                if (!("Enter" !== t.code || t.shiftKey || t.metaKey || "button" === t.target.localName || ue())) {
                                    var n = (0,
                                        u.select)("core/block-editor").getSelectedBlock();
                                    if (!(0,
                                        o.isNull)(n) && "rank-math/command" === n.name) {
                                        var a = n.attributes.content;
                                        if (a.replace("//", "").replace(" ", "").replace(/(<([^>]+)>)/gi, "")) {
                                            var r = n.clientId;
                                            e(r, {
                                                content: "",
                                                className: ""
                                            }),
                                            (0,
                                                u.select)("rank-math-content-ai").isAutoCompleterOpen() || De("Write", dt(a), r)
                                        }
                                    }
                                }
                            }
                        ))
                }(),
                function() {
                    if ("classic" === rankMath.currentEditor) {
                        var e = [];
                        (0,
                            l.addAction)("rank_math_content_refresh", "rank-math", (function() {
                                (0,
                                    o.isUndefined)(window.tinymce) || setTimeout((function() {
                                        var t = window.tinymce.get(window.wpActiveEditor).annotator.getAll("rank-math-annotations");
                                        (0,
                                            o.isEmpty)(t) ? (0,
                                            o.isEmpty)(e) || (0,
                                            o.forEach)(e, (function(e) {
                                                return e.remove()
                                            }
                                        )) : (0,
                                            o.forEach)(t["rank-math-annotation"], (function(t) {
                                                var n = t.getElementsByClassName("rank-math-content-ai-tooltip");
                                                n.length || ((n = document.createElement("button")).className = "rank-math-content-ai-tooltip",
                                                    n.textContent = (0,
                                                        s.__)("Shorten with AI", "rank-math"),
                                                    n.addEventListener("click", Nt),
                                                    e.push(n),
                                                    t.appendChild(n))
                                            }
                                        ))
                                    }
                                ), 1e3)
                            }
                        ))
                    }
                }(),
                (0,
                    l.addAction)("rank_math_loaded", "rank-math", (function() {
                        (0,
                            l.addFilter)("rank_math_content_ai_tabs", "rank-math", (function(e) {
                                return "divi" !== rankMath.currentEditor && e.push({
                                    name: "write",
                                    title: wp.element.createElement(c.Fragment, null, wp.element.createElement("i", {
                                        className: "rm-icon rm-icon-edit",
                                        title: (0,
                                            s.__)("Write", "rank-math")
                                    }), wp.element.createElement("span", null, (0,
                                        s.__)("Write", "rank-math"))),
                                    view: Ye,
                                    className: "rank-math-write-tab"
                                }),
                                    e.push({
                                        name: "ai-tools",
                                        title: wp.element.createElement(c.Fragment, null, wp.element.createElement("i", {
                                            className: "rm-icon rm-icon-page",
                                            title: (0,
                                                s.__)("AI Tools", "rank-math")
                                        }), wp.element.createElement("span", null, (0,
                                            s.__)("AI Tools", "rank-math"))),
                                        view: ye,
                                        className: "rank-math-ai-tools-tab"
                                    }, {
                                        name: "chat",
                                        title: wp.element.createElement(c.Fragment, null, wp.element.createElement("i", {
                                            className: "rm-icon rm-icon-comments",
                                            title: (0,
                                                s.__)("Chat", "rank-math")
                                        }), wp.element.createElement("span", null, (0,
                                            s.__)("Chat", "rank-math"))),
                                        view: ut,
                                        className: "rank-math-chat-tab"
                                    }),
                                    e
                            }
                        ))
                    }
                )),
                (0,
                    l.addFilter)("blocks.registerBlockType", "rank-math", (function(e, t) {
                        return "core/paragraph" !== t || (e.attributes.placeholder = {
                            type: "string",
                            default: (0,
                                s.__)("Type / to choose a block or // to use Content AI", "rank-math")
                        }),
                            e
                    }
                )),
                i()((function() {
                        var e = document.getElementById("rank-math-content-ai-page");
                        if (!(0,
                            o.isNull)(e) && ((0,
                            c.render)(wp.element.createElement(yt, null), e),
                            i()("#wp-admin-bar-rank-math-content-ai-page").on("click", "a", (function() {
                                    setTimeout((function() {
                                            var e = window.location.hash.replace("#", "");
                                            i()("#tab-panel-0-" + e).length && i()("#tab-panel-0-" + e).trigger("click")
                                        }
                                    ), 100)
                                }
                            )),
                            rankMath.isContentAIPage)) {
                            var t = window.location
                                , n = t.pathname;
                            (0,
                                u.subscribe)((function() {
                                    var e = (0,
                                        u.select)("core/editor").isAutosavingPost()
                                        , a = (0,
                                        u.select)("core/block-editor").getBlocks();
                                    1 === a.length && "core/paragraph" === a[0].name && "" === a[0].attributes.content && "rank-math-command" !== a[0].attributes.className && (0,
                                        u.dispatch)("core/block-editor").updateBlockAttributes(a[0].clientId, {
                                        className: "rank-math-command"
                                    }),
                                    e && (setTimeout((function() {
                                            (0,
                                                u.dispatch)("core/editor").savePost()
                                        }
                                    ), 500),
                                    !(0,
                                        o.isNull)(window.history.state) && window.history.state.id && window.history.replaceState("", "Content AI", t.origin + n + "?page=rank-math-content-ai-page#content-editor"))
                                }
                            ))
                        }
                    }
                )),
                i()(window).on("load", (function() {
                        !ue() && rankMath.registerWriteShortcut && (Le() || rankMath.isContentAIPage) && (0,
                            d.registerPlugin)("rank-math-content-ai-write-shortcut", {
                            render: function() {
                                return wp.element.createElement(Mt, null)
                            }
                        })
                    }
                ))
        }()
}();
