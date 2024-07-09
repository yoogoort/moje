! function(e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(t) {
  (e = t && t.fn && t.fn.select2sensbitgls && t.fn.select2sensbitgls.amd ? t.fn.select2sensbitgls.amd : e) && e.requirejs || (e ? n = e : e = {}, p = {}, h = {}, f = {}, g = {}, s = Object.prototype.hasOwnProperty, i = [].slice, m = /\.js$/, y = function(e, t) {
    var n, s, i = u(e),
      o = i[0];
    return e = i[1], o && (n = w(o = c(o, t))), o ? e = n && n.normalize ? n.normalize(e, (s = t, function(e) {
      return c(e, s)
    })) : c(e, t) : (o = (i = u(e = c(e, t)))[0], e = i[1], o && (n = w(o))), {
      f: o ? o + "!" + e : e,
      n: e,
      pr: o,
      p: n
    }
  }, v = {
    require: function(e) {
      return _(e)
    },
    exports: function(e) {
      var t = p[e];
      return void 0 !== t ? t : p[e] = {}
    },
    module: function(e) {
      return {
        id: e,
        uri: "",
        exports: p[e],
        config: (t = e, function() {
          return f && f.config && f.config[t] || {}
        })
      };
      var t
    }
  }, r = function(e, t, n, s) {
    var i, o, r, l, a, c = [],
      u = typeof n;
    if (s = s || e, "undefined" == u || "function" == u) {
      for (t = !t.length && n.length ? ["require", "exports", "module"] : t, l = 0; l < t.length; l += 1)
        if ("require" === (o = (r = y(t[l], s)).f)) c[l] = v.require(e);
        else if ("exports" === o) c[l] = v.exports(e), a = !0;
      else if ("module" === o) i = c[l] = v.module(e);
      else if (b(p, o) || b(h, o) || b(g, o)) c[l] = w(o);
      else {
        if (!r.p) throw new Error(e + " missing " + o);
        r.p.load(r.n, _(s, !0), function(t) {
          return function(e) {
            p[t] = e
          }
        }(o), {}), c[l] = p[o]
      }
      u = n ? n.apply(p[e], c) : void 0, e && (i && i.exports !== d && i.exports !== p[e] ? p[e] = i.exports : u === d && a || (p[e] = u))
    } else e && (p[e] = n)
  }, l = n = o = function(e, t, n, s, i) {
    if ("string" == typeof e) return v[e] ? v[e](t) : w(y(e, t).f);
    if (!e.splice) {
      if ((f = e).deps && o(f.deps, f.callback), !t) return;
      t.splice ? (e = t, t = n, n = null) : e = d
    }
    return t = t || function() {}, "function" == typeof n && (n = s, s = i), s ? r(d, e, t, n) : setTimeout(function() {
      r(d, e, t, n)
    }, 4), o
  }, o.config = function(e) {
    return o(e)
  }, l._defined = p, (a = function(e, t, n) {
    if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
    t.splice || (n = t, t = []), b(p, e) || b(h, e) || (h[e] = [e, t, n])
  }).amd = {
    jQuery: !0
  }, e.requirejs = l, e.require = n, e.define = a), e.define("almond", function() {}), e.define("jquery", [], function() {
    var e = t || $;
    return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e
  }), e.define("select2sensbitgls/utils", ["jquery"], function(o) {
    function c(e) {
      var t, n = e.prototype,
        s = [];
      for (t in n) "function" == typeof n[t] && "constructor" !== t && s.push(t);
      return s
    }

    function e() {
      this.listeners = {}
    }
    var t = {
      Extend: function(e, t) {
        function n() {
          this.constructor = e
        }
        var s, i = {}.hasOwnProperty;
        for (s in t) i.call(t, s) && (e[s] = t[s]);
        return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
      }
    };
    t.Decorate = function(s, i) {
      function o() {
        var e = Array.prototype.unshift,
          t = i.prototype.constructor.length,
          n = s.prototype.constructor;
        0 < t && (e.call(arguments, s.prototype.constructor), n = i.prototype.constructor), n.apply(this, arguments)
      }
      var e = c(i),
        t = c(s);
      i.displayName = s.displayName, o.prototype = new function() {
        this.constructor = o
      };
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        o.prototype[r] = s.prototype[r]
      }
      for (var l = 0; l < e.length; l++) {
        var a = e[l];
        o.prototype[a] = function(e) {
          var t = function() {},
            n = (e in o.prototype && (t = o.prototype[e]), i.prototype[e]);
          return function() {
            return Array.prototype.unshift.call(arguments, t), n.apply(this, arguments)
          }
        }(a)
      }
      return o
    };
    return e.prototype.on = function(e, t) {
      this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
    }, e.prototype.trigger = function(e) {
      var t = Array.prototype.slice,
        n = t.call(arguments, 1);
      this.listeners = this.listeners || {}, 0 === (n = null == n ? [] : n).length && n.push({}), (n[0]._type = e) in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
    }, e.prototype.invoke = function(e, t) {
      for (var n = 0, s = e.length; n < s; n++) e[n].apply(this, t)
    }, t.Observable = e, t.generateChars = function(e) {
      for (var t = "", n = 0; n < e; n++) t += Math.floor(36 * Math.random()).toString(36);
      return t
    }, t.bind = function(e, t) {
      return function() {
        e.apply(t, arguments)
      }
    }, t._convertData = function(e) {
      for (var t in e) {
        var n = t.split("-"),
          s = e;
        if (1 !== n.length) {
          for (var i = 0; i < n.length; i++) {
            var o = n[i];
            (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in s || (s[o] = {}), i == n.length - 1 && (s[o] = e[t]), s = s[o]
          }
          delete e[t]
        }
      }
      return e
    }, t.hasScroll = function(e, t) {
      var n = o(t),
        s = t.style.overflowX,
        i = t.style.overflowY;
      return (s !== i || "hidden" !== i && "visible" !== i) && ("scroll" === s || "scroll" === i || n.innerHeight() < t.scrollHeight || n.innerWidth() < t.scrollWidth)
    }, t.escapeMarkup = function(e) {
      var t = {
        "\\": "&#92;",
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#47;"
      };
      return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function(e) {
        return t[e]
      })
    }, t.appendMany = function(e, t) {
      var n;
      "1.7" === o.fn.jquery.substr(0, 3) && (n = o(), o.map(t, function(e) {
        n = n.add(e)
      }), t = n), e.append(t)
    }, t
  }), e.define("select2sensbitgls/results", ["jquery", "./utils"], function(u, e) {
    function s(e, t, n) {
      this.$element = e, this.data = n, this.options = t, s.__super__.constructor.call(this)
    }
    return e.Extend(s, e.Observable), s.prototype.render = function() {
      var e = u('<ul class="select2sensbitgls-results__options" role="tree"></ul>');
      return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e
    }, s.prototype.clear = function() {
      this.$results.empty()
    }, s.prototype.displayMessage = function(e) {
      var t = this.options.get("escapeMarkup"),
        n = (this.clear(), this.hideLoading(), u('<li role="treeitem" aria-live="assertive" class="select2sensbitgls-results__option"></li>')),
        s = this.options.get("translations").get(e.message);
      n.append(t(s(e.args))), n[0].className += " select2sensbitgls-results__message", this.$results.append(n)
    }, s.prototype.hideMessages = function() {
      this.$results.find(".select2sensbitgls-results__message").remove()
    }, s.prototype.append = function(e) {
      this.hideLoading();
      var t = [];
      if (null == e.results || 0 === e.results.length) 0 === this.$results.children().length && this.trigger("results:message", {
        message: "noResults"
      });
      else {
        e.results = this.sort(e.results);
        for (var n = 0; n < e.results.length; n++) {
          var s = e.results[n],
            s = this.option(s);
          t.push(s)
        }
        this.$results.append(t)
      }
    }, s.prototype.position = function(e, t) {
      t.find(".select2sensbitgls-results").append(e)
    }, s.prototype.sort = function(e) {
      return this.options.get("sorter")(e)
    }, s.prototype.highlightFirstItem = function() {
      var e = this.$results.find(".select2sensbitgls-results__option[aria-selected]"),
        t = e.filter("[aria-selected=true]");
      (0 < t.length ? t : e).first().trigger("mouseenter"), this.ensureHighlightVisible()
    }, s.prototype.setClasses = function() {
      var t = this;
      this.data.current(function(e) {
        var s = u.map(e, function(e) {
          return e.id.toString()
        });
        t.$results.find(".select2sensbitgls-results__option[aria-selected]").each(function() {
          var e = u(this),
            t = u.data(this, "data"),
            n = "" + t.id;
          null != t.element && t.element.selected || null == t.element && -1 < u.inArray(n, s) ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false")
        })
      })
    }, s.prototype.showLoading = function(e) {
      this.hideLoading();
      e = {
        disabled: !0,
        loading: !0,
        text: this.options.get("translations").get("searching")(e)
      }, e = this.option(e);
      e.className += " loading-results", this.$results.prepend(e)
    }, s.prototype.hideLoading = function() {
      this.$results.find(".loading-results").remove()
    }, s.prototype.option = function(e) {
      var t, n = document.createElement("li"),
        s = (n.className = "select2sensbitgls-results__option", {
          role: "treeitem",
          "aria-selected": "false"
        });
      for (t in e.disabled && (delete s["aria-selected"], s["aria-disabled"] = "true"), null == e.id && delete s["aria-selected"], null != e._resultId && (n.id = e._resultId), e.title && (n.title = e.title), e.children && (s.role = "group", s["aria-label"] = e.text, delete s["aria-selected"]), s) n.setAttribute(t, s[t]);
      if (e.children) {
        var i = u(n),
          o = document.createElement("strong");
        o.className = "select2sensbitgls-results__group", u(o), this.template(e, o);
        for (var r = [], l = 0; l < e.children.length; l++) {
          var a = e.children[l],
            a = this.option(a);
          r.push(a)
        }
        var c = u("<ul></ul>", {
          class: "select2sensbitgls-results__options select2sensbitgls-results__options--nested"
        });
        c.append(r), i.append(o), i.append(c)
      } else this.template(e, n);
      return u.data(n, "data", e), n
    }, s.prototype.bind = function(t, e) {
      var i = this,
        n = t.id + "-results";
      this.$results.attr("id", n), t.on("results:all", function(e) {
        i.clear(), i.append(e.data), t.isOpen() && (i.setClasses(), i.highlightFirstItem())
      }), t.on("results:append", function(e) {
        i.append(e.data), t.isOpen() && i.setClasses()
      }), t.on("query", function(e) {
        i.hideMessages(), i.showLoading(e)
      }), t.on("select", function() {
        t.isOpen() && (i.setClasses(), i.highlightFirstItem())
      }), t.on("unselect", function() {
        t.isOpen() && (i.setClasses(), i.highlightFirstItem())
      }), t.on("open", function() {
        i.$results.attr("aria-expanded", "true"), i.$results.attr("aria-hidden", "false"), i.setClasses(), i.ensureHighlightVisible()
      }), t.on("close", function() {
        i.$results.attr("aria-expanded", "false"), i.$results.attr("aria-hidden", "true"), i.$results.removeAttr("aria-activedescendant")
      }), t.on("results:toggle", function() {
        var e = i.getHighlightedResults();
        0 !== e.length && e.trigger("mouseup")
      }), t.on("results:select", function() {
        var e, t = i.getHighlightedResults();
        0 !== t.length && (e = t.data("data"), "true" == t.attr("aria-selected") ? i.trigger("close", {}) : i.trigger("select", {
          data: e
        }))
      }), t.on("results:previous", function() {
        var e, t = i.getHighlightedResults(),
          n = i.$results.find("[aria-selected]"),
          s = n.index(t);
        0 !== s && (s = s - 1, 0 === t.length && (s = 0), (t = n.eq(s)).trigger("mouseenter"), n = i.$results.offset().top, t = t.offset().top, e = i.$results.scrollTop() + (t - n), 0 === s ? i.$results.scrollTop(0) : t - n < 0 && i.$results.scrollTop(e))
      }), t.on("results:next", function() {
        var e, t, n = i.getHighlightedResults(),
          s = i.$results.find("[aria-selected]"),
          n = s.index(n) + 1;
        n >= s.length || ((s = s.eq(n)).trigger("mouseenter"), e = i.$results.offset().top + i.$results.outerHeight(!1), s = s.offset().top + s.outerHeight(!1), t = i.$results.scrollTop() + s - e, 0 === n ? i.$results.scrollTop(0) : e < s && i.$results.scrollTop(t))
      }), t.on("results:focus", function(e) {
        e.element.addClass("select2sensbitgls-results__option--highlighted")
      }), t.on("results:message", function(e) {
        i.displayMessage(e)
      }), u.fn.mousewheel && this.$results.on("mousewheel", function(e) {
        var t = i.$results.scrollTop(),
          n = i.$results.get(0).scrollHeight - t + e.deltaY,
          t = 0 < e.deltaY && t - e.deltaY <= 0,
          n = e.deltaY < 0 && n <= i.$results.height();
        t ? (i.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : n && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), e.preventDefault(), e.stopPropagation())
      }), this.$results.on("mouseup", ".select2sensbitgls-results__option[aria-selected]", function(e) {
        var t = u(this),
          n = t.data("data");
        return "true" === t.attr("aria-selected") ? void(i.options.get("multiple") ? i.trigger("unselect", {
          originalEvent: e,
          data: n
        }) : i.trigger("close", {})) : void i.trigger("select", {
          originalEvent: e,
          data: n
        })
      }), this.$results.on("mouseenter", ".select2sensbitgls-results__option[aria-selected]", function(e) {
        var t = u(this).data("data");
        i.getHighlightedResults().removeClass("select2sensbitgls-results__option--highlighted"), i.trigger("results:focus", {
          data: t,
          element: u(this)
        })
      })
    }, s.prototype.getHighlightedResults = function() {
      return this.$results.find(".select2sensbitgls-results__option--highlighted")
    }, s.prototype.destroy = function() {
      this.$results.remove()
    }, s.prototype.ensureHighlightVisible = function() {
      var e, t, n, s, i = this.getHighlightedResults();
      0 !== i.length && (e = this.$results.find("[aria-selected]").index(i), t = this.$results.offset().top, s = i.offset().top, n = this.$results.scrollTop() + (s - t), s = s - t, n -= 2 * i.outerHeight(!1), e <= 2 ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || s < 0) && this.$results.scrollTop(n))
    }, s.prototype.template = function(e, t) {
      var n = this.options.get("templateResult"),
        s = this.options.get("escapeMarkup"),
        n = n(e, t);
      null == n ? t.style.display = "none" : "string" == typeof n ? t.innerHTML = s(n) : u(t).append(n)
    }, s
  }), e.define("select2sensbitgls/keys", [], function() {
    return {
      BACKSPACE: 8,
      TAB: 9,
      ENTER: 13,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      ESC: 27,
      SPACE: 32,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      DELETE: 46
    }
  }), e.define("select2sensbitgls/selection/base", ["jquery", "../utils", "../keys"], function(n, e, i) {
    function s(e, t) {
      this.$element = e, this.options = t, s.__super__.constructor.call(this)
    }
    return e.Extend(s, e.Observable), s.prototype.render = function() {
      var e = n('<span class="select2sensbitgls-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
      return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), this.$selection = e
    }, s.prototype.bind = function(e, t) {
      var n = this,
        s = (e.id, e.id + "-results");
      this.container = e, this.$selection.on("focus", function(e) {
        n.trigger("focus", e)
      }), this.$selection.on("blur", function(e) {
        n._handleBlur(e)
      }), this.$selection.on("keydown", function(e) {
        n.trigger("keypress", e), e.which === i.SPACE && e.preventDefault()
      }), e.on("results:focus", function(e) {
        n.$selection.attr("aria-activedescendant", e.data._resultId)
      }), e.on("selection:update", function(e) {
        n.update(e.data)
      }), e.on("open", function() {
        n.$selection.attr("aria-expanded", "true"), n.$selection.attr("aria-owns", s), n._attachCloseHandler(e)
      }), e.on("close", function() {
        n.$selection.attr("aria-expanded", "false"), n.$selection.removeAttr("aria-activedescendant"), n.$selection.removeAttr("aria-owns"), n.$selection.focus(), n._detachCloseHandler(e)
      }), e.on("enable", function() {
        n.$selection.attr("tabindex", n._tabindex)
      }), e.on("disable", function() {
        n.$selection.attr("tabindex", "-1")
      })
    }, s.prototype._handleBlur = function(e) {
      var t = this;
      window.setTimeout(function() {
        document.activeElement == t.$selection[0] || n.contains(t.$selection[0], document.activeElement) || t.trigger("blur", e)
      }, 1)
    }, s.prototype._attachCloseHandler = function(e) {
      n(document.body).on("mousedown.select2sensbitgls." + e.id, function(e) {
        var t = n(e.target).closest(".select2sensbitgls");
        n(".select2sensbitgls.select2sensbitgls-container--open").each(function() {
          var e = n(this);
          this != t[0] && e.data("element").select2sensbitgls("close")
        })
      })
    }, s.prototype._detachCloseHandler = function(e) {
      n(document.body).off("mousedown.select2sensbitgls." + e.id)
    }, s.prototype.position = function(e, t) {
      t.find(".selection").append(e)
    }, s.prototype.destroy = function() {
      this._detachCloseHandler(this.container)
    }, s.prototype.update = function(e) {
      throw new Error("The `update` method must be defined in child classes.")
    }, s
  }), e.define("select2sensbitgls/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, t, n, s) {
    function i() {
      i.__super__.constructor.apply(this, arguments)
    }
    return n.Extend(i, t), i.prototype.render = function() {
      var e = i.__super__.render.call(this);
      return e.addClass("select2sensbitgls-selection--single"), e.html('<span class="select2sensbitgls-selection__rendered"></span><span class="select2sensbitgls-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
    }, i.prototype.bind = function(t, e) {
      var n = this,
        s = (i.__super__.bind.apply(this, arguments), t.id + "-container");
      this.$selection.find(".select2sensbitgls-selection__rendered").attr("id", s), this.$selection.attr("aria-labelledby", s), this.$selection.on("mousedown", function(e) {
        1 === e.which && n.trigger("toggle", {
          originalEvent: e
        })
      }), this.$selection.on("focus", function(e) {}), this.$selection.on("blur", function(e) {}), t.on("focus", function(e) {
        t.isOpen() || n.$selection.focus()
      }), t.on("selection:update", function(e) {
        n.update(e.data)
      })
    }, i.prototype.clear = function() {
      this.$selection.find(".select2sensbitgls-selection__rendered").empty()
    }, i.prototype.display = function(e, t) {
      var n = this.options.get("templateSelection");
      return this.options.get("escapeMarkup")(n(e, t))
    }, i.prototype.selectionContainer = function() {
      return e("<span></span>")
    }, i.prototype.update = function(e) {
      var t, n;
      0 === e.length ? this.clear() : (e = e[0], t = this.$selection.find(".select2sensbitgls-selection__rendered"), n = this.display(e, t), t.empty().append(n), t.prop("title", e.title || e.text))
    }, i
  }), e.define("select2sensbitgls/selection/multiple", ["jquery", "./base", "../utils"], function(s, e, l) {
    function i(e, t) {
      i.__super__.constructor.apply(this, arguments)
    }
    return l.Extend(i, e), i.prototype.render = function() {
      var e = i.__super__.render.call(this);
      return e.addClass("select2sensbitgls-selection--multiple"), e.html('<ul class="select2sensbitgls-selection__rendered"></ul>'), e
    }, i.prototype.bind = function(e, t) {
      var n = this;
      i.__super__.bind.apply(this, arguments), this.$selection.on("click", function(e) {
        n.trigger("toggle", {
          originalEvent: e
        })
      }), this.$selection.on("click", ".select2sensbitgls-selection__choice__remove", function(e) {
        var t;
        n.options.get("disabled") || (t = s(this).parent().data("data"), n.trigger("unselect", {
          originalEvent: e,
          data: t
        }))
      })
    }, i.prototype.clear = function() {
      this.$selection.find(".select2sensbitgls-selection__rendered").empty()
    }, i.prototype.display = function(e, t) {
      var n = this.options.get("templateSelection");
      return this.options.get("escapeMarkup")(n(e, t))
    }, i.prototype.selectionContainer = function() {
      return s('<li class="select2sensbitgls-selection__choice"><span class="select2sensbitgls-selection__choice__remove" role="presentation">&times;</span></li>')
    }, i.prototype.update = function(e) {
      if (this.clear(), 0 !== e.length) {
        for (var t = [], n = 0; n < e.length; n++) {
          var s = e[n],
            i = this.selectionContainer(),
            o = this.display(s, i);
          i.append(o), i.prop("title", s.title || s.text), i.data("data", s), t.push(i)
        }
        var r = this.$selection.find(".select2sensbitgls-selection__rendered");
        l.appendMany(r, t)
      }
    }, i
  }), e.define("select2sensbitgls/selection/placeholder", ["../utils"], function(e) {
    function t(e, t, n) {
      this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
    }
    return t.prototype.normalizePlaceholder = function(e, t) {
      return t = "string" == typeof t ? {
        id: "",
        text: t
      } : t
    }, t.prototype.createPlaceholder = function(e, t) {
      var n = this.selectionContainer();
      return n.html(this.display(t)), n.addClass("select2sensbitgls-selection__placeholder").removeClass("select2sensbitgls-selection__choice"), n
    }, t.prototype.update = function(e, t) {
      var n = 1 == t.length && t[0].id != this.placeholder.id;
      if (1 < t.length || n) return e.call(this, t);
      this.clear();
      n = this.createPlaceholder(this.placeholder);
      this.$selection.find(".select2sensbitgls-selection__rendered").append(n)
    }, t
  }), e.define("select2sensbitgls/selection/allowClear", ["jquery", "../keys"], function(n, s) {
    function e() {}
    return e.prototype.bind = function(e, t, n) {
      var s = this;
      e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2sensbitgls-selection__clear", function(e) {
        s._handleClear(e)
      }), t.on("keypress", function(e) {
        s._handleKeyboardClear(e, t)
      })
    }, e.prototype._handleClear = function(e, t) {
      if (!this.options.get("disabled")) {
        var n = this.$selection.find(".select2sensbitgls-selection__clear");
        if (0 !== n.length) {
          t.stopPropagation();
          for (var s = n.data("data"), i = 0; i < s.length; i++) {
            var o = {
              data: s[i]
            };
            if (this.trigger("unselect", o), o.prevented) return
          }
          this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
        }
      }
    }, e.prototype._handleKeyboardClear = function(e, t, n) {
      n.isOpen() || t.which != s.DELETE && t.which != s.BACKSPACE || this._handleClear(t)
    }, e.prototype.update = function(e, t) {
      e.call(this, t), 0 < this.$selection.find(".select2sensbitgls-selection__placeholder").length || 0 === t.length || ((e = n('<span class="select2sensbitgls-selection__clear">&times;</span>')).data("data", t), this.$selection.find(".select2sensbitgls-selection__rendered").prepend(e))
    }, e
  }), e.define("select2sensbitgls/selection/search", ["jquery", "../utils", "../keys"], function(n, e, o) {
    function t(e, t, n) {
      e.call(this, t, n)
    }
    return t.prototype.render = function(e) {
      var t = n('<li class="select2sensbitgls-search select2sensbitgls-search--inline"><input class="select2sensbitgls-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>'),
        t = (this.$searchContainer = t, this.$search = t.find("input"), e.call(this));
      return this._transferTabIndex(), t
    }, t.prototype.bind = function(e, t, n) {
      var s = this,
        e = (e.call(this, t, n), t.on("open", function() {
          s.$search.trigger("focus")
        }), t.on("close", function() {
          s.$search.val(""), s.$search.removeAttr("aria-activedescendant"), s.$search.trigger("focus")
        }), t.on("enable", function() {
          s.$search.prop("disabled", !1), s._transferTabIndex()
        }), t.on("disable", function() {
          s.$search.prop("disabled", !0)
        }), t.on("focus", function(e) {
          s.$search.trigger("focus")
        }), t.on("results:focus", function(e) {
          s.$search.attr("aria-activedescendant", e.id)
        }), this.$selection.on("focusin", ".select2sensbitgls-search--inline", function(e) {
          s.trigger("focus", e)
        }), this.$selection.on("focusout", ".select2sensbitgls-search--inline", function(e) {
          s._handleBlur(e)
        }), this.$selection.on("keydown", ".select2sensbitgls-search--inline", function(e) {
          var t;
          e.stopPropagation(), s.trigger("keypress", e), s._keyUpPrevented = e.isDefaultPrevented(), e.which === o.BACKSPACE && "" === s.$search.val() && 0 < (t = s.$searchContainer.prev(".select2sensbitgls-selection__choice")).length && (t = t.data("data"), s.searchRemoveChoice(t), e.preventDefault())
        }), document.documentMode),
        i = e && e <= 11;
      this.$selection.on("input.searchcheck", ".select2sensbitgls-search--inline", function(e) {
        return i ? void s.$selection.off("input.search input.searchcheck") : void s.$selection.off("keyup.search")
      }), this.$selection.on("keyup.search input.search", ".select2sensbitgls-search--inline", function(e) {
        var t;
        i && "input" === e.type ? s.$selection.off("input.search input.searchcheck") : (t = e.which) != o.SHIFT && t != o.CTRL && t != o.ALT && t != o.TAB && s.handleSearch(e)
      })
    }, t.prototype._transferTabIndex = function(e) {
      this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
    }, t.prototype.createPlaceholder = function(e, t) {
      this.$search.attr("placeholder", t.text)
    }, t.prototype.update = function(e, t) {
      var n = this.$search[0] == document.activeElement;
      this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2sensbitgls-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.focus()
    }, t.prototype.handleSearch = function() {
      var e;
      this.resizeSearch(), this._keyUpPrevented || (e = this.$search.val(), this.trigger("query", {
        term: e
      })), this._keyUpPrevented = !1
    }, t.prototype.searchRemoveChoice = function(e, t) {
      this.trigger("unselect", {
        data: t
      }), this.$search.val(t.text), this.handleSearch()
    }, t.prototype.resizeSearch = function() {
      this.$search.css("width", "25px");
      var e = "";
      e = "" !== this.$search.attr("placeholder") ? this.$selection.find(".select2sensbitgls-selection__rendered").innerWidth() : .75 * (this.$search.val().length + 1) + "em", this.$search.css("width", e)
    }, t
  }), e.define("select2sensbitgls/selection/eventRelay", ["jquery"], function(r) {
    function e() {}
    return e.prototype.bind = function(e, t, n) {
      var s = this,
        i = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
        o = ["opening", "closing", "selecting", "unselecting"];
      e.call(this, t, n), t.on("*", function(e, t) {
        var n; - 1 !== r.inArray(e, i) && (n = r.Event("select2sensbitgls:" + e, {
          params: t = t || {}
        }), s.$element.trigger(n), -1 !== r.inArray(e, o)) && (t.prevented = n.isDefaultPrevented())
      })
    }, e
  }), e.define("select2sensbitgls/translation", ["jquery", "require"], function(t, n) {
    function s(e) {
      this.dict = e || {}
    }
    return s.prototype.all = function() {
      return this.dict
    }, s.prototype.get = function(e) {
      return this.dict[e]
    }, s.prototype.extend = function(e) {
      this.dict = t.extend({}, e.all(), this.dict)
    }, s._cache = {}, s.loadPath = function(e) {
      var t;
      return e in s._cache || (t = n(e), s._cache[e] = t), new s(s._cache[e])
    }, s
  }), e.define("select2sensbitgls/diacritics", [], function() {
    return {
      "Ⓐ": "A",
      "Ａ": "A",
      "À": "A",
      "Á": "A",
      "Â": "A",
      "Ầ": "A",
      "Ấ": "A",
      "Ẫ": "A",
      "Ẩ": "A",
      "Ã": "A",
      "Ā": "A",
      "Ă": "A",
      "Ằ": "A",
      "Ắ": "A",
      "Ẵ": "A",
      "Ẳ": "A",
      "Ȧ": "A",
      "Ǡ": "A",
      "Ä": "A",
      "Ǟ": "A",
      "Ả": "A",
      "Å": "A",
      "Ǻ": "A",
      "Ǎ": "A",
      "Ȁ": "A",
      "Ȃ": "A",
      "Ạ": "A",
      "Ậ": "A",
      "Ặ": "A",
      "Ḁ": "A",
      "Ą": "A",
      "Ⱥ": "A",
      "Ɐ": "A",
      "Ꜳ": "AA",
      "Æ": "AE",
      "Ǽ": "AE",
      "Ǣ": "AE",
      "Ꜵ": "AO",
      "Ꜷ": "AU",
      "Ꜹ": "AV",
      "Ꜻ": "AV",
      "Ꜽ": "AY",
      "Ⓑ": "B",
      "Ｂ": "B",
      "Ḃ": "B",
      "Ḅ": "B",
      "Ḇ": "B",
      "Ƀ": "B",
      "Ƃ": "B",
      "Ɓ": "B",
      "Ⓒ": "C",
      "Ｃ": "C",
      "Ć": "C",
      "Ĉ": "C",
      "Ċ": "C",
      "Č": "C",
      "Ç": "C",
      "Ḉ": "C",
      "Ƈ": "C",
      "Ȼ": "C",
      "Ꜿ": "C",
      "Ⓓ": "D",
      "Ｄ": "D",
      "Ḋ": "D",
      "Ď": "D",
      "Ḍ": "D",
      "Ḑ": "D",
      "Ḓ": "D",
      "Ḏ": "D",
      "Đ": "D",
      "Ƌ": "D",
      "Ɗ": "D",
      "Ɖ": "D",
      "Ꝺ": "D",
      "Ǳ": "DZ",
      "Ǆ": "DZ",
      "ǲ": "Dz",
      "ǅ": "Dz",
      "Ⓔ": "E",
      "Ｅ": "E",
      "È": "E",
      "É": "E",
      "Ê": "E",
      "Ề": "E",
      "Ế": "E",
      "Ễ": "E",
      "Ể": "E",
      "Ẽ": "E",
      "Ē": "E",
      "Ḕ": "E",
      "Ḗ": "E",
      "Ĕ": "E",
      "Ė": "E",
      "Ë": "E",
      "Ẻ": "E",
      "Ě": "E",
      "Ȅ": "E",
      "Ȇ": "E",
      "Ẹ": "E",
      "Ệ": "E",
      "Ȩ": "E",
      "Ḝ": "E",
      "Ę": "E",
      "Ḙ": "E",
      "Ḛ": "E",
      "Ɛ": "E",
      "Ǝ": "E",
      "Ⓕ": "F",
      "Ｆ": "F",
      "Ḟ": "F",
      "Ƒ": "F",
      "Ꝼ": "F",
      "Ⓖ": "G",
      "Ｇ": "G",
      "Ǵ": "G",
      "Ĝ": "G",
      "Ḡ": "G",
      "Ğ": "G",
      "Ġ": "G",
      "Ǧ": "G",
      "Ģ": "G",
      "Ǥ": "G",
      "Ɠ": "G",
      "Ꞡ": "G",
      "Ᵹ": "G",
      "Ꝿ": "G",
      "Ⓗ": "H",
      "Ｈ": "H",
      "Ĥ": "H",
      "Ḣ": "H",
      "Ḧ": "H",
      "Ȟ": "H",
      "Ḥ": "H",
      "Ḩ": "H",
      "Ḫ": "H",
      "Ħ": "H",
      "Ⱨ": "H",
      "Ⱶ": "H",
      "Ɥ": "H",
      "Ⓘ": "I",
      "Ｉ": "I",
      "Ì": "I",
      "Í": "I",
      "Î": "I",
      "Ĩ": "I",
      "Ī": "I",
      "Ĭ": "I",
      "İ": "I",
      "Ï": "I",
      "Ḯ": "I",
      "Ỉ": "I",
      "Ǐ": "I",
      "Ȉ": "I",
      "Ȋ": "I",
      "Ị": "I",
      "Į": "I",
      "Ḭ": "I",
      "Ɨ": "I",
      "Ⓙ": "J",
      "Ｊ": "J",
      "Ĵ": "J",
      "Ɉ": "J",
      "Ⓚ": "K",
      "Ｋ": "K",
      "Ḱ": "K",
      "Ǩ": "K",
      "Ḳ": "K",
      "Ķ": "K",
      "Ḵ": "K",
      "Ƙ": "K",
      "Ⱪ": "K",
      "Ꝁ": "K",
      "Ꝃ": "K",
      "Ꝅ": "K",
      "Ꞣ": "K",
      "Ⓛ": "L",
      "Ｌ": "L",
      "Ŀ": "L",
      "Ĺ": "L",
      "Ľ": "L",
      "Ḷ": "L",
      "Ḹ": "L",
      "Ļ": "L",
      "Ḽ": "L",
      "Ḻ": "L",
      "Ł": "L",
      "Ƚ": "L",
      "Ɫ": "L",
      "Ⱡ": "L",
      "Ꝉ": "L",
      "Ꝇ": "L",
      "Ꞁ": "L",
      "Ǉ": "LJ",
      "ǈ": "Lj",
      "Ⓜ": "M",
      "Ｍ": "M",
      "Ḿ": "M",
      "Ṁ": "M",
      "Ṃ": "M",
      "Ɱ": "M",
      "Ɯ": "M",
      "Ⓝ": "N",
      "Ｎ": "N",
      "Ǹ": "N",
      "Ń": "N",
      "Ñ": "N",
      "Ṅ": "N",
      "Ň": "N",
      "Ṇ": "N",
      "Ņ": "N",
      "Ṋ": "N",
      "Ṉ": "N",
      "Ƞ": "N",
      "Ɲ": "N",
      "Ꞑ": "N",
      "Ꞥ": "N",
      "Ǌ": "NJ",
      "ǋ": "Nj",
      "Ⓞ": "O",
      "Ｏ": "O",
      "Ò": "O",
      "Ó": "O",
      "Ô": "O",
      "Ồ": "O",
      "Ố": "O",
      "Ỗ": "O",
      "Ổ": "O",
      "Õ": "O",
      "Ṍ": "O",
      "Ȭ": "O",
      "Ṏ": "O",
      "Ō": "O",
      "Ṑ": "O",
      "Ṓ": "O",
      "Ŏ": "O",
      "Ȯ": "O",
      "Ȱ": "O",
      "Ö": "O",
      "Ȫ": "O",
      "Ỏ": "O",
      "Ő": "O",
      "Ǒ": "O",
      "Ȍ": "O",
      "Ȏ": "O",
      "Ơ": "O",
      "Ờ": "O",
      "Ớ": "O",
      "Ỡ": "O",
      "Ở": "O",
      "Ợ": "O",
      "Ọ": "O",
      "Ộ": "O",
      "Ǫ": "O",
      "Ǭ": "O",
      "Ø": "O",
      "Ǿ": "O",
      "Ɔ": "O",
      "Ɵ": "O",
      "Ꝋ": "O",
      "Ꝍ": "O",
      "Ƣ": "OI",
      "Ꝏ": "OO",
      "Ȣ": "OU",
      "Ⓟ": "P",
      "Ｐ": "P",
      "Ṕ": "P",
      "Ṗ": "P",
      "Ƥ": "P",
      "Ᵽ": "P",
      "Ꝑ": "P",
      "Ꝓ": "P",
      "Ꝕ": "P",
      "Ⓠ": "Q",
      "Ｑ": "Q",
      "Ꝗ": "Q",
      "Ꝙ": "Q",
      "Ɋ": "Q",
      "Ⓡ": "R",
      "Ｒ": "R",
      "Ŕ": "R",
      "Ṙ": "R",
      "Ř": "R",
      "Ȑ": "R",
      "Ȓ": "R",
      "Ṛ": "R",
      "Ṝ": "R",
      "Ŗ": "R",
      "Ṟ": "R",
      "Ɍ": "R",
      "Ɽ": "R",
      "Ꝛ": "R",
      "Ꞧ": "R",
      "Ꞃ": "R",
      "Ⓢ": "S",
      "Ｓ": "S",
      "ẞ": "S",
      "Ś": "S",
      "Ṥ": "S",
      "Ŝ": "S",
      "Ṡ": "S",
      "Š": "S",
      "Ṧ": "S",
      "Ṣ": "S",
      "Ṩ": "S",
      "Ș": "S",
      "Ş": "S",
      "Ȿ": "S",
      "Ꞩ": "S",
      "Ꞅ": "S",
      "Ⓣ": "T",
      "Ｔ": "T",
      "Ṫ": "T",
      "Ť": "T",
      "Ṭ": "T",
      "Ț": "T",
      "Ţ": "T",
      "Ṱ": "T",
      "Ṯ": "T",
      "Ŧ": "T",
      "Ƭ": "T",
      "Ʈ": "T",
      "Ⱦ": "T",
      "Ꞇ": "T",
      "Ꜩ": "TZ",
      "Ⓤ": "U",
      "Ｕ": "U",
      "Ù": "U",
      "Ú": "U",
      "Û": "U",
      "Ũ": "U",
      "Ṹ": "U",
      "Ū": "U",
      "Ṻ": "U",
      "Ŭ": "U",
      "Ü": "U",
      "Ǜ": "U",
      "Ǘ": "U",
      "Ǖ": "U",
      "Ǚ": "U",
      "Ủ": "U",
      "Ů": "U",
      "Ű": "U",
      "Ǔ": "U",
      "Ȕ": "U",
      "Ȗ": "U",
      "Ư": "U",
      "Ừ": "U",
      "Ứ": "U",
      "Ữ": "U",
      "Ử": "U",
      "Ự": "U",
      "Ụ": "U",
      "Ṳ": "U",
      "Ų": "U",
      "Ṷ": "U",
      "Ṵ": "U",
      "Ʉ": "U",
      "Ⓥ": "V",
      "Ｖ": "V",
      "Ṽ": "V",
      "Ṿ": "V",
      "Ʋ": "V",
      "Ꝟ": "V",
      "Ʌ": "V",
      "Ꝡ": "VY",
      "Ⓦ": "W",
      "Ｗ": "W",
      "Ẁ": "W",
      "Ẃ": "W",
      "Ŵ": "W",
      "Ẇ": "W",
      "Ẅ": "W",
      "Ẉ": "W",
      "Ⱳ": "W",
      "Ⓧ": "X",
      "Ｘ": "X",
      "Ẋ": "X",
      "Ẍ": "X",
      "Ⓨ": "Y",
      "Ｙ": "Y",
      "Ỳ": "Y",
      "Ý": "Y",
      "Ŷ": "Y",
      "Ỹ": "Y",
      "Ȳ": "Y",
      "Ẏ": "Y",
      "Ÿ": "Y",
      "Ỷ": "Y",
      "Ỵ": "Y",
      "Ƴ": "Y",
      "Ɏ": "Y",
      "Ỿ": "Y",
      "Ⓩ": "Z",
      "Ｚ": "Z",
      "Ź": "Z",
      "Ẑ": "Z",
      "Ż": "Z",
      "Ž": "Z",
      "Ẓ": "Z",
      "Ẕ": "Z",
      "Ƶ": "Z",
      "Ȥ": "Z",
      "Ɀ": "Z",
      "Ⱬ": "Z",
      "Ꝣ": "Z",
      "ⓐ": "a",
      "ａ": "a",
      "ẚ": "a",
      "à": "a",
      "á": "a",
      "â": "a",
      "ầ": "a",
      "ấ": "a",
      "ẫ": "a",
      "ẩ": "a",
      "ã": "a",
      "ā": "a",
      "ă": "a",
      "ằ": "a",
      "ắ": "a",
      "ẵ": "a",
      "ẳ": "a",
      "ȧ": "a",
      "ǡ": "a",
      "ä": "a",
      "ǟ": "a",
      "ả": "a",
      "å": "a",
      "ǻ": "a",
      "ǎ": "a",
      "ȁ": "a",
      "ȃ": "a",
      "ạ": "a",
      "ậ": "a",
      "ặ": "a",
      "ḁ": "a",
      "ą": "a",
      "ⱥ": "a",
      "ɐ": "a",
      "ꜳ": "aa",
      "æ": "ae",
      "ǽ": "ae",
      "ǣ": "ae",
      "ꜵ": "ao",
      "ꜷ": "au",
      "ꜹ": "av",
      "ꜻ": "av",
      "ꜽ": "ay",
      "ⓑ": "b",
      "ｂ": "b",
      "ḃ": "b",
      "ḅ": "b",
      "ḇ": "b",
      "ƀ": "b",
      "ƃ": "b",
      "ɓ": "b",
      "ⓒ": "c",
      "ｃ": "c",
      "ć": "c",
      "ĉ": "c",
      "ċ": "c",
      "č": "c",
      "ç": "c",
      "ḉ": "c",
      "ƈ": "c",
      "ȼ": "c",
      "ꜿ": "c",
      "ↄ": "c",
      "ⓓ": "d",
      "ｄ": "d",
      "ḋ": "d",
      "ď": "d",
      "ḍ": "d",
      "ḑ": "d",
      "ḓ": "d",
      "ḏ": "d",
      "đ": "d",
      "ƌ": "d",
      "ɖ": "d",
      "ɗ": "d",
      "ꝺ": "d",
      "ǳ": "dz",
      "ǆ": "dz",
      "ⓔ": "e",
      "ｅ": "e",
      "è": "e",
      "é": "e",
      "ê": "e",
      "ề": "e",
      "ế": "e",
      "ễ": "e",
      "ể": "e",
      "ẽ": "e",
      "ē": "e",
      "ḕ": "e",
      "ḗ": "e",
      "ĕ": "e",
      "ė": "e",
      "ë": "e",
      "ẻ": "e",
      "ě": "e",
      "ȅ": "e",
      "ȇ": "e",
      "ẹ": "e",
      "ệ": "e",
      "ȩ": "e",
      "ḝ": "e",
      "ę": "e",
      "ḙ": "e",
      "ḛ": "e",
      "ɇ": "e",
      "ɛ": "e",
      "ǝ": "e",
      "ⓕ": "f",
      "ｆ": "f",
      "ḟ": "f",
      "ƒ": "f",
      "ꝼ": "f",
      "ⓖ": "g",
      "ｇ": "g",
      "ǵ": "g",
      "ĝ": "g",
      "ḡ": "g",
      "ğ": "g",
      "ġ": "g",
      "ǧ": "g",
      "ģ": "g",
      "ǥ": "g",
      "ɠ": "g",
      "ꞡ": "g",
      "ᵹ": "g",
      "ꝿ": "g",
      "ⓗ": "h",
      "ｈ": "h",
      "ĥ": "h",
      "ḣ": "h",
      "ḧ": "h",
      "ȟ": "h",
      "ḥ": "h",
      "ḩ": "h",
      "ḫ": "h",
      "ẖ": "h",
      "ħ": "h",
      "ⱨ": "h",
      "ⱶ": "h",
      "ɥ": "h",
      "ƕ": "hv",
      "ⓘ": "i",
      "ｉ": "i",
      "ì": "i",
      "í": "i",
      "î": "i",
      "ĩ": "i",
      "ī": "i",
      "ĭ": "i",
      "ï": "i",
      "ḯ": "i",
      "ỉ": "i",
      "ǐ": "i",
      "ȉ": "i",
      "ȋ": "i",
      "ị": "i",
      "į": "i",
      "ḭ": "i",
      "ɨ": "i",
      "ı": "i",
      "ⓙ": "j",
      "ｊ": "j",
      "ĵ": "j",
      "ǰ": "j",
      "ɉ": "j",
      "ⓚ": "k",
      "ｋ": "k",
      "ḱ": "k",
      "ǩ": "k",
      "ḳ": "k",
      "ķ": "k",
      "ḵ": "k",
      "ƙ": "k",
      "ⱪ": "k",
      "ꝁ": "k",
      "ꝃ": "k",
      "ꝅ": "k",
      "ꞣ": "k",
      "ⓛ": "l",
      "ｌ": "l",
      "ŀ": "l",
      "ĺ": "l",
      "ľ": "l",
      "ḷ": "l",
      "ḹ": "l",
      "ļ": "l",
      "ḽ": "l",
      "ḻ": "l",
      "ſ": "l",
      "ł": "l",
      "ƚ": "l",
      "ɫ": "l",
      "ⱡ": "l",
      "ꝉ": "l",
      "ꞁ": "l",
      "ꝇ": "l",
      "ǉ": "lj",
      "ⓜ": "m",
      "ｍ": "m",
      "ḿ": "m",
      "ṁ": "m",
      "ṃ": "m",
      "ɱ": "m",
      "ɯ": "m",
      "ⓝ": "n",
      "ｎ": "n",
      "ǹ": "n",
      "ń": "n",
      "ñ": "n",
      "ṅ": "n",
      "ň": "n",
      "ṇ": "n",
      "ņ": "n",
      "ṋ": "n",
      "ṉ": "n",
      "ƞ": "n",
      "ɲ": "n",
      "ŉ": "n",
      "ꞑ": "n",
      "ꞥ": "n",
      "ǌ": "nj",
      "ⓞ": "o",
      "ｏ": "o",
      "ò": "o",
      "ó": "o",
      "ô": "o",
      "ồ": "o",
      "ố": "o",
      "ỗ": "o",
      "ổ": "o",
      "õ": "o",
      "ṍ": "o",
      "ȭ": "o",
      "ṏ": "o",
      "ō": "o",
      "ṑ": "o",
      "ṓ": "o",
      "ŏ": "o",
      "ȯ": "o",
      "ȱ": "o",
      "ö": "o",
      "ȫ": "o",
      "ỏ": "o",
      "ő": "o",
      "ǒ": "o",
      "ȍ": "o",
      "ȏ": "o",
      "ơ": "o",
      "ờ": "o",
      "ớ": "o",
      "ỡ": "o",
      "ở": "o",
      "ợ": "o",
      "ọ": "o",
      "ộ": "o",
      "ǫ": "o",
      "ǭ": "o",
      "ø": "o",
      "ǿ": "o",
      "ɔ": "o",
      "ꝋ": "o",
      "ꝍ": "o",
      "ɵ": "o",
      "ƣ": "oi",
      "ȣ": "ou",
      "ꝏ": "oo",
      "ⓟ": "p",
      "ｐ": "p",
      "ṕ": "p",
      "ṗ": "p",
      "ƥ": "p",
      "ᵽ": "p",
      "ꝑ": "p",
      "ꝓ": "p",
      "ꝕ": "p",
      "ⓠ": "q",
      "ｑ": "q",
      "ɋ": "q",
      "ꝗ": "q",
      "ꝙ": "q",
      "ⓡ": "r",
      "ｒ": "r",
      "ŕ": "r",
      "ṙ": "r",
      "ř": "r",
      "ȑ": "r",
      "ȓ": "r",
      "ṛ": "r",
      "ṝ": "r",
      "ŗ": "r",
      "ṟ": "r",
      "ɍ": "r",
      "ɽ": "r",
      "ꝛ": "r",
      "ꞧ": "r",
      "ꞃ": "r",
      "ⓢ": "s",
      "ｓ": "s",
      "ß": "s",
      "ś": "s",
      "ṥ": "s",
      "ŝ": "s",
      "ṡ": "s",
      "š": "s",
      "ṧ": "s",
      "ṣ": "s",
      "ṩ": "s",
      "ș": "s",
      "ş": "s",
      "ȿ": "s",
      "ꞩ": "s",
      "ꞅ": "s",
      "ẛ": "s",
      "ⓣ": "t",
      "ｔ": "t",
      "ṫ": "t",
      "ẗ": "t",
      "ť": "t",
      "ṭ": "t",
      "ț": "t",
      "ţ": "t",
      "ṱ": "t",
      "ṯ": "t",
      "ŧ": "t",
      "ƭ": "t",
      "ʈ": "t",
      "ⱦ": "t",
      "ꞇ": "t",
      "ꜩ": "tz",
      "ⓤ": "u",
      "ｕ": "u",
      "ù": "u",
      "ú": "u",
      "û": "u",
      "ũ": "u",
      "ṹ": "u",
      "ū": "u",
      "ṻ": "u",
      "ŭ": "u",
      "ü": "u",
      "ǜ": "u",
      "ǘ": "u",
      "ǖ": "u",
      "ǚ": "u",
      "ủ": "u",
      "ů": "u",
      "ű": "u",
      "ǔ": "u",
      "ȕ": "u",
      "ȗ": "u",
      "ư": "u",
      "ừ": "u",
      "ứ": "u",
      "ữ": "u",
      "ử": "u",
      "ự": "u",
      "ụ": "u",
      "ṳ": "u",
      "ų": "u",
      "ṷ": "u",
      "ṵ": "u",
      "ʉ": "u",
      "ⓥ": "v",
      "ｖ": "v",
      "ṽ": "v",
      "ṿ": "v",
      "ʋ": "v",
      "ꝟ": "v",
      "ʌ": "v",
      "ꝡ": "vy",
      "ⓦ": "w",
      "ｗ": "w",
      "ẁ": "w",
      "ẃ": "w",
      "ŵ": "w",
      "ẇ": "w",
      "ẅ": "w",
      "ẘ": "w",
      "ẉ": "w",
      "ⱳ": "w",
      "ⓧ": "x",
      "ｘ": "x",
      "ẋ": "x",
      "ẍ": "x",
      "ⓨ": "y",
      "ｙ": "y",
      "ỳ": "y",
      "ý": "y",
      "ŷ": "y",
      "ỹ": "y",
      "ȳ": "y",
      "ẏ": "y",
      "ÿ": "y",
      "ỷ": "y",
      "ẙ": "y",
      "ỵ": "y",
      "ƴ": "y",
      "ɏ": "y",
      "ỿ": "y",
      "ⓩ": "z",
      "ｚ": "z",
      "ź": "z",
      "ẑ": "z",
      "ż": "z",
      "ž": "z",
      "ẓ": "z",
      "ẕ": "z",
      "ƶ": "z",
      "ȥ": "z",
      "ɀ": "z",
      "ⱬ": "z",
      "ꝣ": "z",
      "Ά": "Α",
      "Έ": "Ε",
      "Ή": "Η",
      "Ί": "Ι",
      "Ϊ": "Ι",
      "Ό": "Ο",
      "Ύ": "Υ",
      "Ϋ": "Υ",
      "Ώ": "Ω",
      "ά": "α",
      "έ": "ε",
      "ή": "η",
      "ί": "ι",
      "ϊ": "ι",
      "ΐ": "ι",
      "ό": "ο",
      "ύ": "υ",
      "ϋ": "υ",
      "ΰ": "υ",
      "ω": "ω",
      "ς": "σ"
    }
  }), e.define("select2sensbitgls/data/base", ["../utils"], function(n) {
    function s(e, t) {
      s.__super__.constructor.call(this)
    }
    return n.Extend(s, n.Observable), s.prototype.current = function(e) {
      throw new Error("The `current` method must be defined in child classes.")
    }, s.prototype.query = function(e, t) {
      throw new Error("The `query` method must be defined in child classes.")
    }, s.prototype.bind = function(e, t) {}, s.prototype.destroy = function() {}, s.prototype.generateResultId = function(e, t) {
      e = e.id + "-result-";
      return (e += n.generateChars(4)) + (null != t.id ? "-" + t.id.toString() : "-" + n.generateChars(4))
    }, s
  }), e.define("select2sensbitgls/data/select", ["./base", "../utils", "jquery"], function(e, t, r) {
    function n(e, t) {
      this.$element = e, this.options = t, n.__super__.constructor.call(this)
    }
    return t.Extend(n, e), n.prototype.current = function(e) {
      var t = [],
        n = this;
      this.$element.find(":selected").each(function() {
        var e = r(this),
          e = n.item(e);
        t.push(e)
      }), e(t)
    }, n.prototype.select = function(i) {
      var e, o = this;
      i.selected = !0, r(i.element).is("option") ? (i.element.selected = !0, this.$element.trigger("change")) : this.$element.prop("multiple") ? this.current(function(e) {
        var t = [];
        (i = [i]).push.apply(i, e);
        for (var n = 0; n < i.length; n++) {
          var s = i[n].id; - 1 === r.inArray(s, t) && t.push(s)
        }
        o.$element.val(t), o.$element.trigger("change")
      }) : (e = i.id, this.$element.val(e), this.$element.trigger("change"))
    }, n.prototype.unselect = function(i) {
      var o = this;
      if (this.$element.prop("multiple")) return i.selected = !1, r(i.element).is("option") ? (i.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(e) {
        for (var t = [], n = 0; n < e.length; n++) {
          var s = e[n].id;
          s !== i.id && -1 === r.inArray(s, t) && t.push(s)
        }
        o.$element.val(t), o.$element.trigger("change")
      })
    }, n.prototype.bind = function(e, t) {
      var n = this;
      (this.container = e).on("select", function(e) {
        n.select(e.data)
      }), e.on("unselect", function(e) {
        n.unselect(e.data)
      })
    }, n.prototype.destroy = function() {
      this.$element.find("*").each(function() {
        r.removeData(this, "data")
      })
    }, n.prototype.query = function(t, e) {
      var n = [],
        s = this;
      this.$element.children().each(function() {
        var e = r(this);
        (e.is("option") || e.is("optgroup")) && (e = s.item(e), null !== (e = s.matches(t, e))) && n.push(e)
      }), e({
        results: n
      })
    }, n.prototype.addOptions = function(e) {
      t.appendMany(this.$element, e)
    }, n.prototype.option = function(e) {
      e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text, e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
      var t, n = r(t),
        e = this._normalizeItem(e);
      return e.element = t, r.data(t, "data", e), n
    }, n.prototype.item = function(e) {
      var t = {};
      if (null == (t = r.data(e[0], "data"))) {
        if (e.is("option")) t = {
          id: e.val(),
          text: e.text(),
          disabled: e.prop("disabled"),
          selected: e.prop("selected"),
          title: e.prop("title")
        };
        else if (e.is("optgroup")) {
          for (var t = {
              text: e.prop("label"),
              children: [],
              title: e.prop("title")
            }, n = e.children("option"), s = [], i = 0; i < n.length; i++) {
            var o = r(n[i]),
              o = this.item(o);
            s.push(o)
          }
          t.children = s
        }(t = this._normalizeItem(t)).element = e[0], r.data(e[0], "data", t)
      }
      return t
    }, n.prototype._normalizeItem = function(e) {
      r.isPlainObject(e) || (e = {
        id: e,
        text: e
      });
      return null != (e = r.extend({}, {
        text: ""
      }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), r.extend({}, {
        selected: !1,
        disabled: !1
      }, e)
    }, n.prototype.matches = function(e, t) {
      return this.options.get("matcher")(e, t)
    }, n
  }), e.define("select2sensbitgls/data/array", ["./select", "../utils", "jquery"], function(e, c, u) {
    function s(e, t) {
      var n = t.get("data") || [];
      s.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(n))
    }
    return c.Extend(s, e), s.prototype.select = function(n) {
      var e;
      0 === this.$element.find("option").filter(function(e, t) {
        return t.value == n.id.toString()
      }).length && (e = this.option(n), this.addOptions(e)), s.__super__.select.call(this, n)
    }, s.prototype.convertToOptions = function(e) {
      for (var t = this, n = this.$element.find("option"), s = n.map(function() {
          return t.item(u(this)).id
        }).get(), i = [], o = 0; o < e.length; o++) {
        var r, l, a = this._normalizeItem(e[o]);
        0 <= u.inArray(a.id, s) ? (r = n.filter(function(e) {
          return function() {
            return u(this).val() == e.id
          }
        }(a)), l = this.item(r), l = u.extend(!0, {}, a, l), l = this.option(l), r.replaceWith(l)) : (r = this.option(a), a.children && (l = this.convertToOptions(a.children), c.appendMany(r, l)), i.push(r))
      }
      return i
    }, s
  }), e.define("select2sensbitgls/data/ajax", ["./array", "../utils", "jquery"], function(e, t, o) {
    function n(e, t) {
      this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, e, t)
    }
    return t.Extend(n, e), n.prototype._applyDefaults = function(e) {
      return o.extend({}, {
        data: function(e) {
          return o.extend({}, e, {
            q: e.term
          })
        },
        transport: function(e, t, n) {
          e = o.ajax(e);
          return e.then(t), e.fail(n), e
        }
      }, e, !0)
    }, n.prototype.processResults = function(e) {
      return e
    }, n.prototype.query = function(t, n) {
      function e() {
        var e = i.transport(i, function(e) {
          e = s.processResults(e, t);
          s.options.get("debug") && window.console && console.error && (e && e.results && o.isArray(e.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), n(e)
        }, function() {
          e.status && "0" === e.status || s.trigger("results:message", {
            message: "errorLoading"
          })
        });
        s._request = e
      }
      var s = this,
        i = (null != this._request && (o.isFunction(this._request.abort) && this._request.abort(), this._request = null), o.extend({
          type: "GET"
        }, this.ajaxOptions));
      "function" == typeof i.url && (i.url = i.url.call(this.$element, t)), "function" == typeof i.data && (i.data = i.data.call(this.$element, t)), this.ajaxOptions.delay && null != t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay)) : e()
    }, n
  }), e.define("select2sensbitgls/data/tags", ["jquery"], function(l) {
    function e(e, t, n) {
      var s = n.get("tags"),
        i = n.get("createTag"),
        i = (void 0 !== i && (this.createTag = i), n.get("insertTag"));
      if (void 0 !== i && (this.insertTag = i), e.call(this, t, n), l.isArray(s))
        for (var o = 0; o < s.length; o++) {
          var r = s[o],
            r = this._normalizeItem(r),
            r = this.option(r);
          this.$element.append(r)
        }
    }
    return e.prototype.query = function(e, c, u) {
      var d = this;
      return this._removeOldTags(), null == c.term || null != c.page ? void e.call(this, c, u) : void e.call(this, c, function e(t, n) {
        for (var s = t.results, i = 0; i < s.length; i++) {
          var o = s[i],
            r = null != o.children && !e({
              results: o.children
            }, !0);
          if (o.text === c.term || r) return !n && (t.data = s, void u(t))
        }
        if (n) return !0;
        var l, a = d.createTag(c);
        null != a && ((l = d.option(a)).attr("data-select2sensbitgls-tag", !0), d.addOptions([l]), d.insertTag(s, a)), t.results = s, u(t)
      })
    }, e.prototype.createTag = function(e, t) {
      t = l.trim(t.term);
      return "" === t ? null : {
        id: t,
        text: t
      }
    }, e.prototype.insertTag = function(e, t, n) {
      t.unshift(n)
    }, e.prototype._removeOldTags = function(e) {
      this._lastTag, this.$element.find("option[data-select2sensbitgls-tag]").each(function() {
        this.selected || l(this).remove()
      })
    }, e
  }), e.define("select2sensbitgls/data/tokenizer", ["jquery"], function(c) {
    function e(e, t, n) {
      var s = n.get("tokenizer");
      void 0 !== s && (this.tokenizer = s), e.call(this, t, n)
    }
    return e.prototype.bind = function(e, t, n) {
      e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2sensbitgls-search__field")
    }, e.prototype.query = function(e, t, n) {
      var s = this,
        i = (t.term = t.term || "", this.tokenizer(t, this.options, function(e) {
          var t = s._normalizeItem(e);
          s.$element.find("option").filter(function() {
            return c(this).val() === t.id
          }).length || ((e = s.option(t)).attr("data-select2sensbitgls-tag", !0), s._removeOldTags(), s.addOptions([e])), s.trigger("select", {
            data: t
          })
        }));
      i.term !== t.term && (this.$search.length && (this.$search.val(i.term), this.$search.focus()), t.term = i.term), e.call(this, t, n)
    }, e.prototype.tokenizer = function(e, t, n, s) {
      for (var i = n.get("tokenSeparators") || [], o = t.term, r = 0, l = this.createTag || function(e) {
          return {
            id: e.term,
            text: e.term
          }
        }; r < o.length;) {
        var a = o[r]; - 1 !== c.inArray(a, i) && (a = o.substr(0, r), null != (a = l(c.extend({}, t, {
          term: a
        })))) ? (s(a), o = o.substr(r + 1) || "", r = 0) : r++
      }
      return {
        term: o
      }
    }, e
  }), e.define("select2sensbitgls/data/minimumInputLength", [], function() {
    function e(e, t, n) {
      this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
    }
    return e.prototype.query = function(e, t, n) {
      return t.term = t.term || "", t.term.length < this.minimumInputLength ? void this.trigger("results:message", {
        message: "inputTooShort",
        args: {
          minimum: this.minimumInputLength,
          input: t.term,
          params: t
        }
      }) : void e.call(this, t, n)
    }, e
  }), e.define("select2sensbitgls/data/maximumInputLength", [], function() {
    function e(e, t, n) {
      this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
    }
    return e.prototype.query = function(e, t, n) {
      return t.term = t.term || "", 0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? void this.trigger("results:message", {
        message: "inputTooLong",
        args: {
          maximum: this.maximumInputLength,
          input: t.term,
          params: t
        }
      }) : void e.call(this, t, n)
    }, e
  }), e.define("select2sensbitgls/data/maximumSelectionLength", [], function() {
    function e(e, t, n) {
      this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
    }
    return e.prototype.query = function(t, n, s) {
      var i = this;
      this.current(function(e) {
        e = null != e ? e.length : 0;
        return 0 < i.maximumSelectionLength && e >= i.maximumSelectionLength ? void i.trigger("results:message", {
          message: "maximumSelected",
          args: {
            maximum: i.maximumSelectionLength
          }
        }) : void t.call(i, n, s)
      })
    }, e
  }), e.define("select2sensbitgls/dropdown", ["jquery", "./utils"], function(t, e) {
    function n(e, t) {
      this.$element = e, this.options = t, n.__super__.constructor.call(this)
    }
    return e.Extend(n, e.Observable), n.prototype.render = function() {
      var e = t('<span class="select2sensbitgls-dropdown"><span class="select2sensbitgls-results"></span></span>');
      return e.attr("dir", this.options.get("dir")), this.$dropdown = e
    }, n.prototype.bind = function() {}, n.prototype.position = function(e, t) {}, n.prototype.destroy = function() {
      this.$dropdown.remove()
    }, n
  }), e.define("select2sensbitgls/dropdown/search", ["jquery", "../utils"], function(i, e) {
    function t() {}
    return t.prototype.render = function(e) {
      var e = e.call(this),
        t = i('<span class="select2sensbitgls-search select2sensbitgls-search--dropdown"><input class="select2sensbitgls-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
      return this.$searchContainer = t, this.$search = t.find("input"), e.prepend(t), e
    }, t.prototype.bind = function(e, t, n) {
      var s = this;
      e.call(this, t, n), this.$search.on("keydown", function(e) {
        s.trigger("keypress", e), s._keyUpPrevented = e.isDefaultPrevented()
      }), this.$search.on("input", function(e) {
        i(this).off("keyup")
      }), this.$search.on("keyup input", function(e) {
        s.handleSearch(e)
      }), t.on("open", function() {
        s.$search.attr("tabindex", 0), s.$search.focus(), window.setTimeout(function() {
          s.$search.focus()
        }, 0)
      }), t.on("close", function() {
        s.$search.attr("tabindex", -1), s.$search.val("")
      }), t.on("focus", function() {
        t.isOpen() && s.$search.focus()
      }), t.on("results:all", function(e) {
        null != e.query.term && "" !== e.query.term || (s.showSearch(e) ? s.$searchContainer.removeClass("select2sensbitgls-search--hide") : s.$searchContainer.addClass("select2sensbitgls-search--hide"))
      })
    }, t.prototype.handleSearch = function(e) {
      var t;
      this._keyUpPrevented || (t = this.$search.val(), this.trigger("query", {
        term: t
      })), this._keyUpPrevented = !1
    }, t.prototype.showSearch = function(e, t) {
      return !0
    }, t
  }), e.define("select2sensbitgls/dropdown/hidePlaceholder", [], function() {
    function e(e, t, n, s) {
      this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, s)
    }
    return e.prototype.append = function(e, t) {
      t.results = this.removePlaceholder(t.results), e.call(this, t)
    }, e.prototype.normalizePlaceholder = function(e, t) {
      return t = "string" == typeof t ? {
        id: "",
        text: t
      } : t
    }, e.prototype.removePlaceholder = function(e, t) {
      for (var n = t.slice(0), s = t.length - 1; 0 <= s; s--) {
        var i = t[s];
        this.placeholder.id === i.id && n.splice(s, 1)
      }
      return n
    }, e
  }), e.define("select2sensbitgls/dropdown/infiniteScroll", ["jquery"], function(i) {
    function e(e, t, n, s) {
      this.lastParams = {}, e.call(this, t, n, s), this.$loadingMore = this.createLoadingMore(), this.loading = !1
    }
    return e.prototype.append = function(e, t) {
      this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
    }, e.prototype.bind = function(e, t, n) {
      var s = this;
      e.call(this, t, n), t.on("query", function(e) {
        s.lastParams = e, s.loading = !0
      }), t.on("query:append", function(e) {
        s.lastParams = e, s.loading = !0
      }), this.$results.on("scroll", function() {
        var e = i.contains(document.documentElement, s.$loadingMore[0]);
        !s.loading && e && (e = s.$results.offset().top + s.$results.outerHeight(!1), s.$loadingMore.offset().top + s.$loadingMore.outerHeight(!1) <= e + 50) && s.loadMore()
      })
    }, e.prototype.loadMore = function() {
      this.loading = !0;
      var e = i.extend({}, {
        page: 1
      }, this.lastParams);
      e.page++, this.trigger("query:append", e)
    }, e.prototype.showLoadingMore = function(e, t) {
      return t.pagination && t.pagination.more
    }, e.prototype.createLoadingMore = function() {
      var e = i('<li class="select2sensbitgls-results__option select2sensbitgls-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
        t = this.options.get("translations").get("loadingMore");
      return e.html(t(this.lastParams)), e
    }, e
  }), e.define("select2sensbitgls/dropdown/attachBody", ["jquery", "../utils"], function(c, r) {
    function e(e, t, n) {
      this.$dropdownParent = n.get("dropdownParent") || c(document.body), e.call(this, t, n)
    }
    return e.prototype.bind = function(e, t, n) {
      var s = this,
        i = !1;
      e.call(this, t, n), t.on("open", function() {
        s._showDropdown(), s._attachPositioningHandler(t), i || (i = !0, t.on("results:all", function() {
          s._positionDropdown(), s._resizeDropdown()
        }), t.on("results:append", function() {
          s._positionDropdown(), s._resizeDropdown()
        }))
      }), t.on("close", function() {
        s._hideDropdown(), s._detachPositioningHandler(t)
      }), this.$dropdownContainer.on("mousedown", function(e) {
        e.stopPropagation()
      })
    }, e.prototype.destroy = function(e) {
      e.call(this), this.$dropdownContainer.remove()
    }, e.prototype.position = function(e, t, n) {
      t.attr("class", n.attr("class")), t.removeClass("select2sensbitgls"), t.addClass("select2sensbitgls-container--open"), t.css({
        position: "absolute",
        top: -999999
      }), this.$container = n
    }, e.prototype.render = function(e) {
      var t = c("<span></span>"),
        e = e.call(this);
      return t.append(e), this.$dropdownContainer = t
    }, e.prototype._hideDropdown = function(e) {
      this.$dropdownContainer.detach()
    }, e.prototype._attachPositioningHandler = function(e, t) {
      var n = this,
        s = "scroll.select2sensbitgls." + t.id,
        i = "resize.select2sensbitgls." + t.id,
        t = "orientationchange.select2sensbitgls." + t.id,
        o = this.$container.parents().filter(r.hasScroll);
      o.each(function() {
        c(this).data("select2sensbitgls-scroll-position", {
          x: c(this).scrollLeft(),
          y: c(this).scrollTop()
        })
      }), o.on(s, function(e) {
        var t = c(this).data("select2sensbitgls-scroll-position");
        c(this).scrollTop(t.y)
      }), c(window).on(s + " " + i + " " + t, function(e) {
        n._positionDropdown(), n._resizeDropdown()
      })
    }, e.prototype._detachPositioningHandler = function(e, t) {
      var n = "scroll.select2sensbitgls." + t.id,
        s = "resize.select2sensbitgls." + t.id,
        t = "orientationchange.select2sensbitgls." + t.id;
      this.$container.parents().filter(r.hasScroll).off(n), c(window).off(n + " " + s + " " + t)
    }, e.prototype._positionDropdown = function() {
      var e = c(window),
        t = this.$dropdown.hasClass("select2sensbitgls-dropdown--above"),
        n = this.$dropdown.hasClass("select2sensbitgls-dropdown--below"),
        s = null,
        i = this.$container.offset(),
        o = (i.bottom = i.top + this.$container.outerHeight(!1), {
          height: this.$container.outerHeight(!1)
        });
      o.top = i.top, o.bottom = i.top + o.height;
      var r = this.$dropdown.outerHeight(!1),
        l = e.scrollTop(),
        e = e.scrollTop() + e.height(),
        l = l < i.top - r,
        e = e > i.bottom + r,
        i = {
          left: i.left,
          top: o.bottom
        },
        a = this.$dropdownParent,
        a = (a = "static" === a.css("position") ? a.offsetParent() : a).offset();
      i.top -= a.top, i.left -= a.left, t || n || (s = "below"), e || !l || t ? !l && e && t && (s = "below") : s = "above", ("above" == s || t && "below" !== s) && (i.top = o.top - a.top - r), null != s && (this.$dropdown.removeClass("select2sensbitgls-dropdown--below select2sensbitgls-dropdown--above").addClass("select2sensbitgls-dropdown--" + s), this.$container.removeClass("select2sensbitgls-container--below select2sensbitgls-container--above").addClass("select2sensbitgls-container--" + s)), this.$dropdownContainer.css(i)
    }, e.prototype._resizeDropdown = function() {
      var e = {
        width: this.$container.outerWidth(!1) + "px"
      };
      this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
    }, e.prototype._showDropdown = function(e) {
      this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
    }, e
  }), e.define("select2sensbitgls/dropdown/minimumResultsForSearch", [], function() {
    function e(e, t, n, s) {
      this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, s)
    }
    return e.prototype.showSearch = function(e, t) {
      return !(function e(t) {
        for (var n = 0, s = 0; s < t.length; s++) {
          var i = t[s];
          i.children ? n += e(i.children) : n++
        }
        return n
      }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t)
    }, e
  }), e.define("select2sensbitgls/dropdown/selectOnClose", [], function() {
    function e() {}
    return e.prototype.bind = function(e, t, n) {
      var s = this;
      e.call(this, t, n), t.on("close", function(e) {
        s._handleSelectOnClose(e)
      })
    }, e.prototype._handleSelectOnClose = function(e, t) {
      if (t && null != t.originalSelect2Event) {
        t = t.originalSelect2Event;
        if ("select" === t._type || "unselect" === t._type) return
      }
      var t = this.getHighlightedResults();
      t.length < 1 || null != (t = t.data("data")).element && t.element.selected || null == t.element && t.selected || this.trigger("select", {
        data: t
      })
    }, e
  }), e.define("select2sensbitgls/dropdown/closeOnSelect", [], function() {
    function e() {}
    return e.prototype.bind = function(e, t, n) {
      var s = this;
      e.call(this, t, n), t.on("select", function(e) {
        s._selectTriggered(e)
      }), t.on("unselect", function(e) {
        s._selectTriggered(e)
      })
    }, e.prototype._selectTriggered = function(e, t) {
      var n = t.originalEvent;
      n && n.ctrlKey || this.trigger("close", {
        originalEvent: n,
        originalSelect2Event: t
      })
    }, e
  }), e.define("select2sensbitgls/i18n/en", [], function() {
    return {
      errorLoading: function() {
        return "The results could not be loaded."
      },
      inputTooLong: function(e) {
        var e = e.input.length - e.maximum,
          t = "Please delete " + e + " character";
        return 1 != e && (t += "s"), t
      },
      inputTooShort: function(e) {
        return "Please enter " + (e.minimum - e.input.length) + " or more characters"
      },
      loadingMore: function() {
        return "Loading more results…"
      },
      maximumSelected: function(e) {
        var t = "You can only select " + e.maximum + " item";
        return 1 != e.maximum && (t += "s"), t
      },
      noResults: function() {
        return "No results found"
      },
      searching: function() {
        return "Searching…"
      }
    }
  }), e.define("select2sensbitgls/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(a, c, u, d, p, h, g, f, m, y, v, t, b, _, w, $, A, x, E, C, O, S, T, D, q, L, j, k, e) {
    function n() {
      this.reset()
    }
    return n.prototype.apply = function(t) {
      if (null == (t = a.extend(!0, {}, this.defaults, t)).dataAdapter && (null != t.ajax ? t.dataAdapter = w : null != t.data ? t.dataAdapter = _ : t.dataAdapter = b, 0 < t.minimumInputLength && (t.dataAdapter = y.Decorate(t.dataAdapter, x)), 0 < t.maximumInputLength && (t.dataAdapter = y.Decorate(t.dataAdapter, E)), 0 < t.maximumSelectionLength && (t.dataAdapter = y.Decorate(t.dataAdapter, C)), t.tags && (t.dataAdapter = y.Decorate(t.dataAdapter, $)), null == t.tokenSeparators && null == t.tokenizer || (t.dataAdapter = y.Decorate(t.dataAdapter, A)), null != t.query && (r = c(t.amdBase + "compat/query"), t.dataAdapter = y.Decorate(t.dataAdapter, r)), null != t.initSelection) && (r = c(t.amdBase + "compat/initSelection"), t.dataAdapter = y.Decorate(t.dataAdapter, r)), null == t.resultsAdapter && (t.resultsAdapter = u, null != t.ajax && (t.resultsAdapter = y.Decorate(t.resultsAdapter, D)), null != t.placeholder && (t.resultsAdapter = y.Decorate(t.resultsAdapter, T)), t.selectOnClose) && (t.resultsAdapter = y.Decorate(t.resultsAdapter, j)), null == t.dropdownAdapter && (t.multiple ? t.dropdownAdapter = O : (r = y.Decorate(O, S), t.dropdownAdapter = r), 0 !== t.minimumResultsForSearch && (t.dropdownAdapter = y.Decorate(t.dropdownAdapter, L)), t.closeOnSelect && (t.dropdownAdapter = y.Decorate(t.dropdownAdapter, k)), null == t.dropdownCssClass && null == t.dropdownCss && null == t.adaptDropdownCssClass || (r = c(t.amdBase + "compat/dropdownCss"), t.dropdownAdapter = y.Decorate(t.dropdownAdapter, r)), t.dropdownAdapter = y.Decorate(t.dropdownAdapter, q)), null == t.selectionAdapter && (t.multiple ? t.selectionAdapter = p : t.selectionAdapter = d, null != t.placeholder && (t.selectionAdapter = y.Decorate(t.selectionAdapter, h)), t.allowClear && (t.selectionAdapter = y.Decorate(t.selectionAdapter, g)), t.multiple && (t.selectionAdapter = y.Decorate(t.selectionAdapter, f)), null == t.containerCssClass && null == t.containerCss && null == t.adaptContainerCssClass || (r = c(t.amdBase + "compat/containerCss"), t.selectionAdapter = y.Decorate(t.selectionAdapter, r)), t.selectionAdapter = y.Decorate(t.selectionAdapter, m)), "string" == typeof t.language && (0 < t.language.indexOf("-") ? (r = t.language.split("-")[0], t.language = [t.language, r]) : t.language = [t.language]), a.isArray(t.language)) {
        var e = new v;
        t.language.push("en");
        for (var n = t.language, s = 0; s < n.length; s++) {
          var i = n[s],
            o = {};
          try {
            o = v.loadPath(i)
          } catch (e) {
            try {
              i = this.defaults.amdLanguageBase + i, o = v.loadPath(i)
            } catch (e) {
              t.debug && window.console && console.warn && console.warn('Select2: The language file for "' + i + '" could not be automatically loaded. A fallback will be used instead.');
              continue
            }
          }
          e.extend(o)
        }
        t.translations = e
      } else {
        var r = v.loadPath(this.defaults.amdLanguageBase + "en"),
          l = new v(t.language);
        l.extend(r), t.translations = l
      }
      return t
    }, n.prototype.reset = function() {
      function l(e) {
        return e.replace(/[^\u0000-\u007E]/g, function(e) {
          return t[e] || e
        })
      }
      this.defaults = {
        amdBase: "./",
        amdLanguageBase: "./i18n/",
        closeOnSelect: !0,
        debug: !1,
        dropdownAutoWidth: !1,
        escapeMarkup: y.escapeMarkup,
        language: e,
        matcher: function e(t, n) {
          if ("" === a.trim(t.term)) return n;
          if (n.children && 0 < n.children.length) {
            for (var s = a.extend(!0, {}, n), i = n.children.length - 1; 0 <= i; i--) null == e(t, n.children[i]) && s.children.splice(i, 1);
            return 0 < s.children.length ? s : e(t, s)
          }
          var o = l(n.text).toUpperCase(),
            r = l(t.term).toUpperCase();
          return -1 < o.indexOf(r) ? n : null
        },
        minimumInputLength: 0,
        maximumInputLength: 0,
        maximumSelectionLength: 0,
        minimumResultsForSearch: 0,
        selectOnClose: !1,
        sorter: function(e) {
          return e
        },
        templateResult: function(e) {
          return e.text
        },
        templateSelection: function(e) {
          return e.text
        },
        theme: "default",
        width: "resolve"
      }
    }, n.prototype.set = function(e, t) {
      var n = {},
        e = (n[a.camelCase(e)] = t, y._convertData(n));
      a.extend(this.defaults, e)
    }, new n
  }), e.define("select2sensbitgls/options", ["require", "jquery", "./defaults", "./utils"], function(n, i, s, o) {
    function e(e, t) {
      this.options = e, null != t && this.fromElement(t), this.options = s.apply(this.options), t && t.is("input") && (e = n(this.get("amdBase") + "compat/inputData"), this.options.dataAdapter = o.Decorate(this.options.dataAdapter, e))
    }
    return e.prototype.fromElement = function(e) {
      var t, n = ["select2sensbitgls"],
        e = (null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2sensbitglsTags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2sensbitgls-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2sensbitglsTags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl"))), i.fn.jquery && "1." == i.fn.jquery.substr(0, 2) && e[0].dataset ? i.extend(!0, {}, e[0].dataset, e.data()) : e.data()),
        s = i.extend(!0, {}, e);
      for (t in s = o._convertData(s)) - 1 < i.inArray(t, n) || (i.isPlainObject(this.options[t]) ? i.extend(this.options[t], s[t]) : this.options[t] = s[t]);
      return this
    }, e.prototype.get = function(e) {
      return this.options[e]
    }, e.prototype.set = function(e, t) {
      this.options[e] = t
    }, e
  }), e.define("select2sensbitgls/core", ["jquery", "./options", "./utils", "./keys"], function(i, o, n, s) {
    function r(e, t) {
      null != e.data("select2sensbitgls") && e.data("select2sensbitgls").destroy(), this.$element = e, this.id = this._generateId(e), this.options = new o(t = t || {}, e), r.__super__.constructor.call(this);
      var t = e.attr("tabindex") || 0,
        t = (e.data("old-tabindex", t), e.attr("tabindex", "-1"), this.options.get("dataAdapter")),
        t = (this.dataAdapter = new t(e, this.options), this.render()),
        n = (this._placeContainer(t), this.options.get("selectionAdapter")),
        n = (this.selection = new n(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, t), this.options.get("dropdownAdapter")),
        n = (this.dropdown = new n(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, t), this.options.get("resultsAdapter")),
        s = (this.results = new n(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown), this);
      this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(e) {
        s.trigger("selection:update", {
          data: e
        })
      }), e.addClass("select2sensbitgls-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), e.data("select2sensbitgls", this)
    }
    return n.Extend(r, n.Observable), r.prototype._generateId = function(e) {
      return "select2sensbitgls-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
    }, r.prototype._placeContainer = function(e) {
      e.insertAfter(this.$element);
      var t = this._resolveWidth(this.$element, this.options.get("width"));
      null != t && e.css("width", t)
    }, r.prototype._resolveWidth = function(e, t) {
      var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
      if ("resolve" == t) return null != (s = this._resolveWidth(e, "style")) ? s : this._resolveWidth(e, "element");
      if ("element" == t) return (s = e.outerWidth(!1)) <= 0 ? "auto" : s + "px";
      if ("style" != t) return t;
      var s = e.attr("style");
      if ("string" == typeof s)
        for (var i = s.split(";"), o = 0, r = i.length; o < r; o += 1) {
          var l = i[o].replace(/\s/g, "").match(n);
          if (null !== l && 1 <= l.length) return l[1]
        }
      return null
    }, r.prototype._bindAdapters = function() {
      this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
    }, r.prototype._registerDomEvents = function() {
      var t = this,
        e = (this.$element.on("change.select2sensbitgls", function() {
          t.dataAdapter.current(function(e) {
            t.trigger("selection:update", {
              data: e
            })
          })
        }), this.$element.on("focus.select2sensbitgls", function(e) {
          t.trigger("focus", e)
        }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA), window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver);
      null != e ? (this._observer = new e(function(e) {
        i.each(e, t._syncA), i.each(e, t._syncS)
      }), this._observer.observe(this.$element[0], {
        attributes: !0,
        childList: !0,
        subtree: !1
      })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
    }, r.prototype._registerDataEvents = function() {
      var n = this;
      this.dataAdapter.on("*", function(e, t) {
        n.trigger(e, t)
      })
    }, r.prototype._registerSelectionEvents = function() {
      var n = this,
        s = ["toggle", "focus"];
      this.selection.on("toggle", function() {
        n.toggleDropdown()
      }), this.selection.on("focus", function(e) {
        n.focus(e)
      }), this.selection.on("*", function(e, t) {
        -1 === i.inArray(e, s) && n.trigger(e, t)
      })
    }, r.prototype._registerDropdownEvents = function() {
      var n = this;
      this.dropdown.on("*", function(e, t) {
        n.trigger(e, t)
      })
    }, r.prototype._registerResultsEvents = function() {
      var n = this;
      this.results.on("*", function(e, t) {
        n.trigger(e, t)
      })
    }, r.prototype._registerEvents = function() {
      var n = this;
      this.on("open", function() {
        n.$container.addClass("select2sensbitgls-container--open")
      }), this.on("close", function() {
        n.$container.removeClass("select2sensbitgls-container--open")
      }), this.on("enable", function() {
        n.$container.removeClass("select2sensbitgls-container--disabled")
      }), this.on("disable", function() {
        n.$container.addClass("select2sensbitgls-container--disabled")
      }), this.on("blur", function() {
        n.$container.removeClass("select2sensbitgls-container--focus")
      }), this.on("query", function(t) {
        n.isOpen() || n.trigger("open", {}), this.dataAdapter.query(t, function(e) {
          n.trigger("results:all", {
            data: e,
            query: t
          })
        })
      }), this.on("query:append", function(t) {
        this.dataAdapter.query(t, function(e) {
          n.trigger("results:append", {
            data: e,
            query: t
          })
        })
      }), this.on("keypress", function(e) {
        var t = e.which;
        n.isOpen() ? t === s.ESC || t === s.TAB || t === s.UP && e.altKey ? (n.close(), e.preventDefault()) : t === s.ENTER ? (n.trigger("results:select", {}), e.preventDefault()) : t === s.SPACE && e.ctrlKey ? (n.trigger("results:toggle", {}), e.preventDefault()) : t === s.UP ? (n.trigger("results:previous", {}), e.preventDefault()) : t === s.DOWN && (n.trigger("results:next", {}), e.preventDefault()) : (t === s.ENTER || t === s.SPACE || t === s.DOWN && e.altKey) && (n.open(), e.preventDefault())
      })
    }, r.prototype._syncAttributes = function() {
      this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
    }, r.prototype._syncSubtree = function(e, t) {
      var n = !1,
        s = this;
      if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
        if (t)
          if (t.addedNodes && 0 < t.addedNodes.length)
            for (var i = 0; i < t.addedNodes.length; i++) t.addedNodes[i].selected && (n = !0);
          else t.removedNodes && 0 < t.removedNodes.length && (n = !0);
        else n = !0;
        n && this.dataAdapter.current(function(e) {
          s.trigger("selection:update", {
            data: e
          })
        })
      }
    }, r.prototype.trigger = function(e, t) {
      var n = r.__super__.trigger,
        s = {
          open: "opening",
          close: "closing",
          select: "selecting",
          unselect: "unselecting"
        };
      if (void 0 === t && (t = {}), e in s) {
        var i = {
          prevented: !1,
          name: e,
          args: t
        };
        if (n.call(this, s[e], i), i.prevented) return void(t.prevented = !0)
      }
      n.call(this, e, t)
    }, r.prototype.toggleDropdown = function() {
      this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
    }, r.prototype.open = function() {
      this.isOpen() || this.trigger("query", {})
    }, r.prototype.close = function() {
      this.isOpen() && this.trigger("close", {})
    }, r.prototype.isOpen = function() {
      return this.$container.hasClass("select2sensbitgls-container--open")
    }, r.prototype.hasFocus = function() {
      return this.$container.hasClass("select2sensbitgls-container--focus")
    }, r.prototype.focus = function(e) {
      this.hasFocus() || (this.$container.addClass("select2sensbitgls-container--focus"), this.trigger("focus", {}))
    }, r.prototype.enable = function(e) {
      this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2sensbitgls("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.');
      e = !(e = null != e && 0 !== e.length ? e : [!0])[0];
      this.$element.prop("disabled", e)
    }, r.prototype.data = function() {
      this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2sensbitgls("data")`. You should consider setting the value instead using `$element.val()`.');
      var t = [];
      return this.dataAdapter.current(function(e) {
        t = e
      }), t
    }, r.prototype.val = function(e) {
      if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2sensbitgls("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
      e = e[0];
      i.isArray(e) && (e = i.map(e, function(e) {
        return e.toString()
      })), this.$element.val(e).trigger("change")
    }, r.prototype.destroy = function() {
      this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2sensbitgls"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2sensbitgls-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2sensbitgls"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
    }, r.prototype.render = function() {
      var e = i('<span class="select2sensbitgls select2sensbitgls-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
      return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2sensbitgls-container--" + this.options.get("theme")), e.data("element", this.$element), e
    }, r
  }), e.define("jquery-mousewheel", ["jquery"], function(e) {
    return e
  }), e.define("jquery.select2sensbitgls", ["jquery", "jquery-mousewheel", "./select2sensbitgls/core", "./select2sensbitgls/defaults"], function(i, e, o, t) {
    var r;
    return null == i.fn.select2sensbitgls && (r = ["open", "close", "destroy"], i.fn.select2sensbitgls = function(t) {
      if ("object" == typeof(t = t || {})) return this.each(function() {
        var e = i.extend(!0, {}, t);
        new o(i(this), e)
      }), this;
      var n, s;
      if ("string" == typeof t) return s = Array.prototype.slice.call(arguments, 1), this.each(function() {
        var e = i(this).data("select2sensbitgls");
        null == e && window.console && console.error && console.error("The select2sensbitgls('" + t + "') method was called on an element that is not using Select2."), n = e[t].apply(e, s)
      }), -1 < i.inArray(t, r) ? this : n;
      throw new Error("Invalid arguments for Select2: " + t)
    }), null == i.fn.select2sensbitgls.defaults && (i.fn.select2sensbitgls.defaults = t), o
  });
  var e, n, d, o, p, h, f, g, s, i, m, y, v, r, l = {
      define: e.define,
      require: e.require
    },
    a = l.require("jquery.select2sensbitgls");

  function b(e, t) {
    return s.call(e, t)
  }

  function c(e, t) {
    var n, s, i, o, r, l, a, c, u, d, p = t && t.split("/"),
      h = f.map,
      g = h && h["*"] || {};
    if (e && "." === e.charAt(0))
      if (t) {
        for (t = (e = e.split("/")).length - 1, f.nodeIdCompat && m.test(e[t]) && (e[t] = e[t].replace(m, "")), e = p.slice(0, p.length - 1).concat(e), c = 0; c < e.length; c += 1)
          if ("." === (d = e[c])) e.splice(c, 1), --c;
          else if (".." === d) {
          if (1 === c && (".." === e[2] || ".." === e[0])) break;
          0 < c && (e.splice(c - 1, 2), c -= 2)
        }
        e = e.join("/")
      } else 0 === e.indexOf("./") && (e = e.substring(2));
    if ((p || g) && h) {
      for (c = (n = e.split("/")).length; 0 < c; --c) {
        if (s = n.slice(0, c).join("/"), p)
          for (u = p.length; 0 < u; --u)
            if (i = (i = h[p.slice(0, u).join("/")]) && i[s]) {
              o = i, r = c;
              break
            } if (o) break;
        !l && g && g[s] && (l = g[s], a = c)
      }!o && l && (o = l, r = a), o && (n.splice(0, r, o), e = n.join("/"))
    }
    return e
  }

  function _(t, n) {
    return function() {
      var e = i.call(arguments, 0);
      return "string" != typeof e[0] && 1 === e.length && e.push(null), o.apply(d, e.concat([t, n]))
    }
  }

  function w(e) {
    var t;
    if (b(h, e) && (t = h[e], delete h[e], g[e] = !0, r.apply(d, t)), b(p, e) || b(g, e)) return p[e];
    throw new Error("No " + e)
  }

  function u(e) {
    var t, n = e ? e.indexOf("!") : -1;
    return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
  }
  return t.fn.select2sensbitgls.amd = l, a
}),
function() {
  var e;
  (e = jQuery && jQuery.fn && jQuery.fn.select2sensbitgls && jQuery.fn.select2sensbitgls.amd ? jQuery.fn.select2sensbitgls.amd : e).define("select2sensbitgls/i18n/pl", [], function() {
    function t(e, t) {
      return 1 === e ? t[0] : 1 < e && e <= 4 ? t[1] : 5 <= e ? t[2] : void 0
    }
    var n = ["znak", "znaki", "znaków"],
      s = ["element", "elementy", "elementów"];
    return {
      errorLoading: function() {
        return "Nie można załadować wyników."
      },
      inputTooLong: function(e) {
        e = e.input.length - e.maximum;
        return "Usuń " + e + " " + t(e, n)
      },
      inputTooShort: function(e) {
        e = e.minimum - e.input.length;
        return "Wprowadź miasto, ulicę lub nazwę punktu odbioru. Min. " + e + " " + t(e, n)
      },
      loadingMore: function() {
        return "Trwa ładowanie…"
      },
      maximumSelected: function(e) {
        return "Możesz zaznaczyć tylko " + e.maximum + " " + t(e.maximum, s)
      },
      noResults: function() {
        return "Brak wyników"
      },
      searching: function() {
        return "Trwa wyszukiwanie…"
      }
    }
  }), e.define, e.require
}();
