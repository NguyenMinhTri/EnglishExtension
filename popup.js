document.addEventListener("DOMContentLoaded", function(event) {
    chrome.cookies.getAll({ url: "http://olympusenglish.azurewebsites.net" }, function(cookies) {
        var tempCookieValue = '';
        for (var i = 0; i < cookies.length; i++) {
            tempCookieValue += cookies[i].name + '=' + cookies[i].value + '; ';
            chrome.cookies.set({
                url: 'https://uitenglishbot.herokuapp.com/',
                name: cookies[i].name,
                value: cookies[i].value,
                expirationDate: (new Date().getTime() / 1000) + 315532800
            });
        }

        if (tempCookieValue == '') {
            document.getElementById("content").style.display = "flex";
            document.getElementById("content_1").style.display = "none";
        } else {
            fetch("https://uitenglishbot.herokuapp.com/verifyToken", {
                    credentials: 'include'
                })
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    document.getElementById("content").style.display = "none";
                    document.getElementById("content_1").style.display = "block";
                    document.getElementById("play").style.opacity = "1";
                    document.getElementById("play").textContent = "Hi " + data.text + ",";
                    if (tempCookieValue.Name === "undefined") {
                        document.getElementById("content").style.display = "flex";
                        document.getElementById("content_1").style.display = "none";
                    }
                });
        }
    });
});


var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, i) {
                        var n, r, s = t.cycle;
                        for (n in s) r = s[n], t[n] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                        delete t.cycle
                    },
                    s = function(t, e, n) { i.call(this, t, e, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render },
                    a = 1e-10,
                    o = i._internals,
                    l = o.isSelector,
                    u = o.isArray,
                    h = s.prototype = i.to({}, .1, {}),
                    c = [];
                s.version = "1.18.0", h.constructor = s, h.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, h.invalidate = function() { return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this) }, h.updateTo = function(t, e) {
                    var n, r = this.ratio,
                        s = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted || s)
                        if (e) this._initted = !1, s && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var a = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
                    } else if (this._time > 0 || s) { this._initted = !1, this._init(); for (var o, l = 1 / (1 - r), u = this._firstPT; u;) o = u.s + u.c, u.c *= l, u.s = o - u.c, u = u._next }
                    return this
                }, h.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, r, s, l, u, h, c, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._time,
                        m = this._totalTime,
                        _ = this._cycle,
                        g = this._duration,
                        v = this._rawPrevTime;
                    if (t >= p ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > v || v === a) && v !== t && (i = !0, v > a && (r = "onReverseComplete")), this._rawPrevTime = f = !e || t || v === t ? t : a)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === g && v > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === g && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = f = !e || t || v === t ? t : a)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = g + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = g - this._time), this._time > g ? this._time = g : 0 > this._time && (this._time = 0)), this._easeType ? (u = this._time / g, h = this._easeType, c = this._easePower, (1 === h || 3 === h && u >= .5) && (u = 1 - u), 3 === h && (u *= 2), 1 === c ? u *= u : 2 === c ? u *= u * u : 3 === c ? u *= u * u * u : 4 === c && (u *= u * u * u * u), this.ratio = 1 === h ? 1 - u : 2 === h ? u : .5 > this._time / g ? u / 2 : 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / g)), d !== this._time || i || _ !== this._cycle) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = d, this._totalTime = m, this._rawPrevTime = v, this._cycle = _, o.lazyTweens.push(this), void(this._lazy = [t, e]);
                            this._time && !n ? this.ratio = this._ease.getRatio(this._time / g) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== d && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === g) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                        this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || n) && this._callback("onUpdate")), this._cycle !== _ && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === g && this._rawPrevTime === a && f !== a && (this._rawPrevTime = 0))
                    } else m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                }, s.to = function(t, e, i) { return new s(t, e, i) }, s.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i) }, s.fromTo = function(t, e, i, n) { return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n) }, s.staggerTo = s.allTo = function(t, e, a, o, h, f, p) {
                    o = o || 0;
                    var d, m, _, g, v = a.delay || 0,
                        y = [],
                        x = a.cycle,
                        b = a.startAt && a.startAt.cycle;
                    for (u(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], 0 > o && ((t = n(t)).reverse(), o *= -1), d = t.length - 1, _ = 0; d >= _; _++) {
                        m = {};
                        for (g in a) m[g] = a[g];
                        if (x && r(m, t, _), b) {
                            b = m.startAt = {};
                            for (g in a.startAt) b[g] = a.startAt[g];
                            r(m.startAt, t, _)
                        }
                        m.delay = v, _ === d && h && (m.onComplete = function() { a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), h.apply(p || a.callbackScope || this, f || c) }), y[_] = new s(t[_], e, m), v += o
                    }
                    return y
                }, s.staggerFrom = s.allFrom = function(t, e, i, n, r, a, o) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, r, a, o) }, s.staggerFromTo = s.allFromTo = function(t, e, i, n, r, a, o, l) { return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, r, a, o, l) }, s.delayedCall = function(t, e, i, n, r) { return new s(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: n, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, useFrames: r, overwrite: 0 }) }, s.set = function(t, e) { return new s(t, 0, e) }, s.isTweening = function(t) { return i.getTweensOf(t, !0).length > 0 };
                var f = function(t, e) { for (var n = [], r = 0, s = t._first; s;) s instanceof i ? n[r++] = s : (e && (n[r++] = s), n = n.concat(f(s, e)), r = n.length), s = s._next; return n },
                    p = s.getAllTweens = function(e) { return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e)) };
                s.killAll = function(t, i, n, r) {
                    null == i && (i = !0), null == n && (n = !0);
                    var s, a, o, l = p(0 != r),
                        u = l.length,
                        h = i && n && r;
                    for (o = 0; u > o; o++) a = l[o], (h || a instanceof e || (s = a.target === a.vars.onComplete) && n || i && !s) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, s.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var r, a, h, c, f, p = o.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), u(t))
                            for (c = t.length; --c > -1;) s.killChildTweensOf(t[c], e);
                        else {
                            r = [];
                            for (h in p)
                                for (a = p[h].target.parentNode; a;) a === t && (r = r.concat(p[h].tweens)), a = a.parentNode;
                            for (f = r.length, c = 0; f > c; c++) e && r[c].totalTime(r[c].totalDuration()), r[c]._enabled(!1, !1)
                        }
                    }
                };
                var d = function(t, i, n, r) { i = !1 !== i, n = !1 !== n; for (var s, a, o = p(r = !1 !== r), l = i && n && r, u = o.length; --u > -1;) a = o[u], (l || a instanceof e || (s = a.target === a.vars.onComplete) && n || i && !s) && a.paused(t) };
                return s.pauseAll = function(t, e, i) { d(!0, t, e, i) }, s.resumeAll = function(t, e, i) { d(!1, t, e, i) }, s.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || a, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, h.progress = function(t) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration() }, h.totalProgress = function(t) { return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration() }, h.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time }, h.duration = function(e) { return arguments.length ? t.prototype.duration.call(this, e) : this._duration }, h.totalDuration = function(t) { return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration) }, h.repeat = function(t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, h.repeatDelay = function(t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, h.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, s
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, r = this.vars;
                        for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                        l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    s = i._internals,
                    a = n._internals = {},
                    o = s.isSelector,
                    l = s.isArray,
                    u = s.lazyTweens,
                    h = s.lazyRender,
                    c = _gsScope._gsDefine.globals,
                    f = function(t) { var e, i = {}; for (e in t) i[e] = t[e]; return i },
                    p = function(t, e, i) {
                        var n, r, s = t.cycle;
                        for (n in s) r = s[n], t[n] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
                        delete t.cycle
                    },
                    d = a.pauseCallback = function() {},
                    m = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    _ = n.prototype = new e;
                return n.version = "1.18.0", _.constructor = n, _.kill()._gc = _._forcingPlayhead = _._hasPause = !1, _.to = function(t, e, n, r) { var s = n.repeat && c.TweenMax || i; return e ? this.add(new s(t, e, n), r) : this.set(t, n, r) }, _.from = function(t, e, n, r) { return this.add((n.repeat && c.TweenMax || i).from(t, e, n), r) }, _.fromTo = function(t, e, n, r, s) { var a = r.repeat && c.TweenMax || i; return e ? this.add(a.fromTo(t, e, n, r), s) : this.set(t, r, s) }, _.staggerTo = function(t, e, r, s, a, l, u, h) {
                    var c, d, _ = new n({ onComplete: l, onCompleteParams: u, callbackScope: h, smoothChildTiming: this.smoothChildTiming }),
                        g = r.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), o(t = t || []) && (t = m(t)), 0 > (s = s || 0) && ((t = m(t)).reverse(), s *= -1), d = 0; t.length > d; d++)(c = f(r)).startAt && (c.startAt = f(c.startAt), c.startAt.cycle && p(c.startAt, t, d)), g && p(c, t, d), _.to(t[d], e, c, d * s);
                    return this.add(_, a)
                }, _.staggerFrom = function(t, e, i, n, r, s, a, o) { return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, a, o) }, _.staggerFromTo = function(t, e, i, n, r, s, a, o, l) { return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, a, o, l) }, _.call = function(t, e, n, r) { return this.add(i.delayedCall(0, t, e, n), r) }, _.set = function(t, e, n) { return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n) }, n.exportRoot = function(t, e) {
                    null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, s, a = new n(t),
                        o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) s = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = s;
                    return o.add(a, 0), a
                }, _.add = function(r, s, a, o) {
                    var u, h, c, f, p, d;
                    if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && l(r)) { for (a = a || "normal", o = o || 0, u = s, h = r.length, c = 0; h > c; c++) l(f = r[c]) && (f = new n({ tweens: f })), this.add(f, u), "string" != typeof f && "function" != typeof f && ("sequence" === a ? u = f._startTime + f.totalDuration() / f._timeScale : "start" === a && (f._startTime -= f.delay())), u += o; return this._uncache(!0) }
                        if ("string" == typeof r) return this.addLabel(r, s);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = this, d = p.rawTime() > r._startTime; p._timeline;) d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                    return this
                }, _.remove = function(e) { if (e instanceof t) { this._remove(e, !1); var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline; return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this } if (e instanceof Array || e && e.push && l(e)) { for (var n = e.length; --n > -1;) this.remove(e[n]); return this } return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e) }, _._remove = function(t, i) { e.prototype._remove.call(this, t, i); var n = this._last; return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this }, _.append = function(t, e) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t)) }, _.insert = _.insertMultiple = function(t, e, i, n) { return this.add(t, e || 0, i, n) }, _.appendMultiple = function(t, e, i, n) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n) }, _.addLabel = function(t, e) { return this._labels[t] = this._parseTimeOrLabel(e), this }, _.addPause = function(t, e, n, r) { var s = i.delayedCall(0, d, n, r || this); return s.vars.onComplete = s.vars.onReverseComplete = e, s.data = "isPause", this._hasPause = !0, this.add(s, t) }, _.removeLabel = function(t) { return delete this._labels[t], this }, _.getLabelTime = function(t) { return null != this._labels[t] ? this._labels[t] : -1 }, _._parseTimeOrLabel = function(e, i, n, r) {
                    var s;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && l(r)))
                        for (s = r.length; --s > -1;) r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (-1 === (s = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
                    }
                    return Number(e) + i
                }, _.seek = function(t, e) { return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e) }, _.stop = function() { return this.paused(!0) }, _.gotoAndPlay = function(t, e) { return this.play(t, e) }, _.gotoAndStop = function(t, e) { return this.pause(t, e) }, _.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, a, o, l, c, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        d = this._startTime,
                        m = this._timeScale,
                        _ = this._paused;
                    if (t >= f) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (s = !0, o = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = f + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            t = 0, this._initted || (l = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= p)
                                for (n = this._first; n && t >= n._startTime && !c;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (c = n), n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= t && !c;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (c = n), n = n._prev;
                            c && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== p && this._first || i || l || c) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= p)
                            for (n = this._first; n && (a = n._next, !this._paused || _);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (c === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = a;
                        else
                            for (n = this._last; n && (a = n._prev, !this._paused || _);) {
                                if (n._active || p >= n._startTime && !n._paused && !n._gc) {
                                    if (c === n) {
                                        for (c = n._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), c = c._prev;
                                        c = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = a
                            }
                        this._onUpdate && (e || (u.length && h(), this._callback("onUpdate"))), o && (this._gc || (d === this._startTime || m !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (s && (u.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                    }
                }, _._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, _.getChildren = function(t, e, n, r) { r = r || -9999999999; for (var s = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? !1 !== e && (s[o++] = a) : (!1 !== n && (s[o++] = a), !1 !== t && (s = s.concat(a.getChildren(!0, e, n)), o = s.length))), a = a._next; return s }, _.getTweensOf = function(t, e) {
                    var n, r, s = this._gc,
                        a = [],
                        o = 0;
                    for (s && this._enabled(!0, !0), r = (n = i.getTweensOf(t)).length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (a[o++] = n[r]);
                    return s && this._enabled(!1, !0), a
                }, _.recent = function() { return this._recent }, _._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, _.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (n in s) s[n] >= i && (s[n] += t);
                    return this._uncache(!0)
                }, _._kill = function(t, e) { if (!t && !e) return this._enabled(!1, !1); for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0); return r }, _.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return !1 !== t && (this._labels = {}), this._uncache(!0)
                }, _.invalidate = function() { for (var e = this._first; e;) e.invalidate(), e = e._next; return t.prototype.invalidate.call(this) }, _._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, _.totalTime = function() { this._forcingPlayhead = !0; var e = t.prototype.totalTime.apply(this, arguments); return this._forcingPlayhead = !1, e }, _.duration = function(t) { return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration) }, _.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, 0 > r._startTime && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), (i = r._startTime + r._totalDuration / r._timeScale) > n && (n = i), r = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, _.paused = function(e) {
                    if (!e)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, _.usesFrames = function() { for (var e = this._timeline; e._timeline;) e = e._timeline; return e === t._rootFramesTimeline }, _.rawTime = function() { return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var n = function(e) { t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0 },
                    r = 1e-10,
                    s = e._internals,
                    a = s.lazyTweens,
                    o = s.lazyRender,
                    l = new i(null, null, 1, 0),
                    u = n.prototype = new t;
                return u.constructor = n, u.kill()._gc = !1, n.version = "1.18.0", u.invalidate = function() { return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this) }, u.addCallback = function(t, i, n, r) { return this.add(e.delayedCall(0, t, n, r), i) }, u.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                    return this
                }, u.removePause = function(e) { return this.removeCallback(t._internals.pauseCallback, e) }, u.tweenTo = function(t, i) { i = i || {}; var n, r, s, a = { ease: l, useFrames: this.usesFrames(), immediateRender: !1 }; for (r in i) a[r] = i[r]; return a.time = this._parseTimeOrLabel(t), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, s = new e(this, n, a), a.onStart = function() { s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && s._callback("onStart") }, s }, u.tweenFromTo = function(t, e, i) { i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = { onComplete: this.seek, onCompleteParams: [t], callbackScope: this }, i.immediateRender = !1 !== i.immediateRender; var n = this.tweenTo(e, i); return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001) }, u.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, l, u, h, c, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._duration,
                        m = this._time,
                        _ = this._totalTime,
                        g = this._startTime,
                        v = this._timeScale,
                        y = this._rawPrevTime,
                        x = this._paused,
                        b = this._cycle;
                    if (t >= p) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, u = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (h = !0, y > r && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = d, t = d + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === d && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (u = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = s = !0, u = "onReverseComplete") : y >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            t = 0, this._initted || (h = !0)
                        }
                    else if (0 === d && 0 > y && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (c = d + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 != (1 & this._cycle) && (this._time = d - this._time), this._time > d ? (this._time = d, t = d + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if ((t = this._time) >= m)
                            for (n = this._first; n && t >= n._startTime && !f;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (f = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !f;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (f = n), n = n._prev;
                        f && (this._time = t = f._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== b && !this._locked) {
                        var T = this._yoyo && 0 != (1 & b),
                            w = T === (this._yoyo && 0 != (1 & this._cycle)),
                            k = this._totalTime,
                            P = this._cycle,
                            C = this._rawPrevTime,
                            S = this._time;
                        if (this._totalTime = b * d, b > this._cycle ? T = !T : this._totalTime += d, this._time = m, this._rawPrevTime = 0 === d ? y - 1e-4 : y, this._cycle = b, this._locked = !0, m = T ? 0 : d, this.render(m, e, 0 === d), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), w && (m = T ? d + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !x) return;
                        this._time = S, this._totalTime = k, this._cycle = P, this._rawPrevTime = C
                    }
                    if (this._time !== m && this._first || i || h || f) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== _ && t > 0 && (this._active = !0), 0 === _ && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), this._time >= m)
                            for (n = this._first; n && (l = n._next, !this._paused || x);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (f === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
                        else
                            for (n = this._last; n && (l = n._prev, !this._paused || x);) {
                                if (n._active || m >= n._startTime && !n._paused && !n._gc) {
                                    if (f === n) {
                                        for (f = n._prev; f && f.endTime() > this._time;) f.render(f._reversed ? f.totalDuration() - (t - f._startTime) * f._timeScale : (t - f._startTime) * f._timeScale, e, i), f = f._prev;
                                        f = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = l
                            }
                        this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), u && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (s && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[u] && this._callback(u)))
                    } else _ !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                }, u.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, r, s = [],
                        a = this.getChildren(t, e, i),
                        o = 0,
                        l = a.length;
                    for (n = 0; l > n; n++)(r = a[n]).isActive() && (s[o++] = r);
                    return s
                }, u.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, u.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, u.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
                    return e.sort(function(t, e) { return t.time - e.time }), e
                }, u.progress = function(t, e) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() }, u.totalProgress = function(t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() }, u.totalDuration = function(e) { return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration) }, u.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time }, u.repeat = function(t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, u.repeatDelay = function(t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, u.yoyo = function(t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, u.currentLabel = function(t) { return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8) }, n
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    n = [],
                    r = {},
                    s = _gsScope._gsDefine.globals,
                    a = function(t, e, i, n) { this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t },
                    o = function(t, e, i, n) {
                        var r = { a: t },
                            s = {},
                            a = {},
                            o = { c: n },
                            l = (t + e) / 2,
                            u = (e + i) / 2,
                            h = (i + n) / 2,
                            c = (l + u) / 2,
                            f = (u + h) / 2,
                            p = (f - c) / 8;
                        return r.b = l + (t - l) / 4, s.b = c + p, r.c = s.a = (r.b + s.b) / 2, s.c = a.a = (c + f) / 2, a.b = f - p, o.b = h + (n - h) / 4, a.c = o.a = (a.b + o.b) / 2, [r, s, a, o]
                    },
                    l = function(t, r, s, a, l) {
                        var u, h, c, f, p, d, m, _, g, v, y, x, b, T = t.length - 1,
                            w = 0,
                            k = t[0].a;
                        for (u = 0; T > u; u++) p = t[w], h = p.a, c = p.d, f = t[w + 1].d, l ? (y = e[u], x = i[u], b = .25 * (x + y) * r / (a ? .5 : n[u] || .5), d = c - (c - h) * (a ? .5 * r : 0 !== y ? b / y : 0), m = c + (f - c) * (a ? .5 * r : 0 !== x ? b / x : 0), _ = c - (d + ((m - d) * (3 * y / (y + x) + .5) / 4 || 0))) : (d = c - .5 * (c - h) * r, m = c + .5 * (f - c) * r, _ = c - (d + m) / 2), d += _, m += _, p.c = g = d, p.b = 0 !== u ? k : k = p.a + .6 * (p.c - p.a), p.da = c - h, p.ca = g - h, p.ba = k - h, s ? (v = o(h, k, g, c), t.splice(w, 1, v[0], v[1], v[2], v[3]), w += 4) : w++, k = m;
                        (p = t[w]).b = k, p.c = k + .4 * (p.d - k), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = k - p.a, s && (v = o(p.a, k, p.c, p.d), t.splice(w, 1, v[0], v[1], v[2], v[3]))
                    },
                    u = function(t, n, r, s) {
                        var o, l, u, h, c, f, p = [];
                        if (s)
                            for (t = [s].concat(t), l = t.length; --l > -1;) "string" == typeof(f = t[l][n]) && "=" === f.charAt(1) && (t[l][n] = s[n] + Number(f.charAt(0) + f.substr(2)));
                        if (0 > (o = t.length - 2)) return p[0] = new a(t[0][n], 0, 0, t[-1 > o ? 0 : 1][n]), p;
                        for (l = 0; o > l; l++) u = t[l][n], h = t[l + 1][n], p[l] = new a(u, 0, 0, h), r && (c = t[l + 2][n], e[l] = (e[l] || 0) + (h - u) * (h - u), i[l] = (i[l] || 0) + (c - h) * (c - h));
                        return p[l] = new a(t[l][n], 0, 0, t[l + 1][n]), p
                    },
                    h = function(t, s, a, o, h, c) {
                        var f, p, d, m, _, g, v, y, x = {},
                            b = [],
                            T = c || t[0];
                        h = "string" == typeof h ? "," + h + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == s && (s = 1);
                        for (p in t[0]) b.push(p);
                        if (t.length > 1) {
                            for (y = t[t.length - 1], v = !0, f = b.length; --f > -1;)
                                if (p = b[f], Math.abs(T[p] - y[p]) > .05) { v = !1; break }
                            v && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0, f = b.length; --f > -1;) p = b[f], r[p] = -1 !== h.indexOf("," + p + ","), x[p] = u(t, p, r[p], c);
                        for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                        if (!o) {
                            for (f = b.length; --f > -1;)
                                if (r[p])
                                    for (d = x[b[f]], g = d.length - 1, m = 0; g > m; m++) _ = d[m + 1].da / i[m] + d[m].da / e[m], n[m] = (n[m] || 0) + _ * _;
                            for (f = n.length; --f > -1;) n[f] = Math.sqrt(n[f])
                        }
                        for (f = b.length, m = a ? 4 : 1; --f > -1;) p = b[f], d = x[p], l(d, s, a, o, r[p]), v && (d.splice(0, m), d.splice(d.length - m, m));
                        return x
                    },
                    c = function(t, e, i) {
                        var n, r, s, o, l, u, h, c, f, p, d, m = {},
                            _ = "cubic" === (e = e || "soft") ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || _ + 1 > t.length) throw "invalid Bezier data";
                        for (f in t[0]) v.push(f);
                        for (u = v.length; --u > -1;) {
                            for (m[f = v[u]] = l = [], p = 0, c = t.length, h = 0; c > h; h++) n = null == i ? t[h][f] : "string" == typeof(d = t[h][f]) && "=" === d.charAt(1) ? i[f] + Number(d.charAt(0) + d.substr(2)) : Number(d), g && h > 1 && c - 1 > h && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                            for (c = p - _ + 1, p = 0, h = 0; c > h; h += _) n = l[h], r = l[h + 1], s = l[h + 2], o = 2 === _ ? 0 : l[h + 3], l[p++] = d = 3 === _ ? new a(n, r, s, o) : new a(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                            l.length = p
                        }
                        return m
                    },
                    f = function(t, e, i) {
                        for (var n, r, s, a, o, l, u, h, c, f, p, d = 1 / i, m = t.length; --m > -1;)
                            for (f = t[m], s = f.a, a = f.d - s, o = f.c - s, l = f.b - s, n = r = 0, h = 1; i >= h; h++) u = d * h, c = 1 - u, n = r - (r = (u * u * a + 3 * c * (u * o + c * l)) * u), p = m * i + h - 1, e[p] = (e[p] || 0) + n * n
                    },
                    p = function(t, e) {
                        var i, n, r, s, a = [],
                            o = [],
                            l = 0,
                            u = 0,
                            h = (e = e >> 0 || 6) - 1,
                            c = [],
                            p = [];
                        for (i in t) f(t[i], a, e);
                        for (r = a.length, n = 0; r > n; n++) l += Math.sqrt(a[n]), s = n % e, p[s] = l, s === h && (u += l, s = n / e >> 0, c[s] = p, o[s] = u, l = 0, p = []);
                        return { length: u, lengths: o, segments: c }
                    },
                    d = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = { values: e }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, r, s, a, o, l = e.values || [],
                                u = {},
                                f = l[0],
                                d = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = d ? d instanceof Array ? d : [
                                ["x", "y", "rotation", !0 === d ? 0 : Number(d) || 0]
                            ] : null;
                            for (n in f) this._props.push(n);
                            for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], u[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), o || u[n] !== l[0][n] && (o = u);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : c(l, e.type, u), this._segCount = this._beziers[n].length, this._timeRes) {
                                var m = p(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (d = this._autoRotate)
                                for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [d]), s = d.length; --s > -1;) {
                                    for (a = 0; 3 > a; a++) n = d[s][a], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                                    n = d[s][2], this._initialRotations[s] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, n, r, s, a, o, l, u, h, c, f = this._segCount,
                                p = this._func,
                                d = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (h = this._lengths, c = this._curSeg, e *= this._length, r = this._li, e > this._l2 && f - 1 > r) {
                                    for (u = f - 1; u > r && e >= (this._l2 = h[++r]););
                                    this._l1 = h[r - 1], this._li = r, this._curSeg = c = this._segments[r], this._s2 = c[this._s1 = this._si = 0]
                                } else if (this._l1 > e && r > 0) {
                                    for (; r > 0 && (this._l1 = h[--r]) >= e;);
                                    0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = h[r], this._li = r, this._curSeg = c = this._segments[r], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && c.length - 1 > r) {
                                    for (u = c.length - 1; u > r && e >= (this._s2 = c[++r]););
                                    this._s1 = c[r - 1], this._si = r
                                } else if (this._s1 > e && r > 0) {
                                    for (; r > 0 && (this._s1 = c[--r]) >= e;);
                                    0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = c[r], this._si = r
                                }
                                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0, o = (e - i * (1 / f)) * f;
                            for (n = 1 - o, r = this._props.length; --r > -1;) s = this._props[r], a = this._beziers[s][i], l = (o * o * a.da + 3 * n * (o * a.ca + n * a.ba)) * o + a.a, this._round[s] && (l = Math.round(l)), p[s] ? d[s](l) : d[s] = l;
                            if (this._autoRotate) { var _, g, v, y, x, b, T, w = this._autoRotate; for (r = w.length; --r > -1;) s = w[r][2], b = w[r][3] || 0, T = !0 === w[r][4] ? 1 : t, a = this._beziers[w[r][0]], _ = this._beziers[w[r][1]], a && _ && (a = a[i], _ = _[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = _.a + (_.b - _.a) * o, x = _.b + (_.c - _.b) * o, v += (x - v) * o, x += (_.c + (_.d - _.c) * o - x) * o, l = m ? Math.atan2(x - v, y - g) * T + b : this._initialRotations[r], p[s] ? d[s](l) : d[s] = l) }
                        }
                    }),
                    m = d.prototype;
                d.bezierThrough = h, d.cubicToQuadratic = o, d._autoCSS = !0, d.quadraticToCubic = function(t, e, i) { return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i) }, d._cssRegister = function() {
                    var t = s.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            n = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, s, a, o, l) {
                                e instanceof Array && (e = { values: e }), l = new d;
                                var u, h, c, f = e.values,
                                    p = f.length - 1,
                                    m = [],
                                    _ = {};
                                if (0 > p) return o;
                                for (u = 0; p >= u; u++) c = i(t, f[u], a, o, l, p !== u), m[u] = c.end;
                                for (h in e) _[h] = e[h];
                                return _.values = m, o = new r(t, "bezier", 0, 0, c.pt, 2), o.data = c, o.plugin = l, o.setRatio = n, 0 === _.autoRotate && (_.autoRotate = !0), !_.autoRotate || _.autoRotate instanceof Array || (u = !0 === _.autoRotate ? 0 : Number(_.autoRotate), _.autoRotate = null != c.end.left ? [
                                    ["left", "top", "rotation", u, !1]
                                ] : null != c.end.x && [
                                    ["x", "y", "rotation", u, !1]
                                ]), _.autoRotate && (a._transform || a._enableTransforms(!1), c.autoRotate = a._target._gsTransform), l._onInitTween(c.proxy, _, a._tween), o
                            }
                        })
                    }
                }, m._roundProps = function(t, e) { for (var i = this._overwriteProps, n = i.length; --n > -1;)(t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e) }, m._kill = function(t) {
                    var e, i, n = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, n, r, s, a = function() { t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio },
                    o = _gsScope._gsDefine.globals,
                    l = {},
                    u = a.prototype = new t("css");
                u.constructor = a, a.version = "1.18.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, u = "px", a.suffixMap = { top: u, right: u, bottom: u, left: u, width: u, height: u, fontSize: u, padding: u, margin: u, perspective: u, lineHeight: "" };
                var h, c, f, p, d, m, _ = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    x = /(?:\d|\-|\+|=|#|\.)*/g,
                    b = /opacity *= *([^)]*)/i,
                    T = /opacity:([^;]*)/i,
                    w = /alpha\(opacity *=.+?\)/i,
                    k = /^(rgb|hsl)/,
                    P = /([A-Z])/g,
                    C = /-([a-z])/gi,
                    S = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    O = function(t, e) { return e.toUpperCase() },
                    A = /(?:Left|Right|Width)/i,
                    D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    E = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    R = /,(?=[^\)]*(?:\(|$))/gi,
                    N = Math.PI / 180,
                    I = 180 / Math.PI,
                    M = {},
                    L = document,
                    B = function(t) { return L.createElementNS ? L.createElementNS("http://www.w3.org/1999/xhtml", t) : L.createElement(t) },
                    F = B("div"),
                    j = B("img"),
                    z = a._internals = { _specialProps: l },
                    q = navigator.userAgent,
                    X = function() {
                        var t = q.indexOf("Android"),
                            e = B("a");
                        return f = -1 !== q.indexOf("Safari") && -1 === q.indexOf("Chrome") && (-1 === t || Number(q.substr(t + 8, 1)) > 3), d = f && 6 > Number(q.substr(q.indexOf("Version/") + 8, 1)), p = -1 !== q.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(q)) && (m = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }(),
                    H = function(t) { return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 },
                    V = function(t) { window.console && console.log(t) },
                    W = "",
                    $ = "",
                    Y = function(t, e) { var i, n, r = (e = e || F).style; if (void 0 !== r[t]) return t; for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];); return n >= 0 ? ($ = 3 === n ? "ms" : i[n], W = "-" + $.toLowerCase() + "-", $ + t) : null },
                    U = L.defaultView ? L.defaultView.getComputedStyle : function() {},
                    Q = a.getStyle = function(t, e, i, n, r) { var s; return X || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || U(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : H(t) },
                    G = z.convertToPixels = function(t, i, n, r, s) {
                        if ("px" === r || !r) return n;
                        if ("auto" === r || !n) return 0;
                        var o, l, u, h = A.test(i),
                            c = t,
                            f = F.style,
                            p = 0 > n;
                        if (p && (n = -n), "%" === r && -1 !== i.indexOf("border")) o = n / 100 * (h ? t.clientWidth : t.clientHeight);
                        else {
                            if (f.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && c.appendChild && "v" !== r.charAt(0) && "rem" !== r) f[h ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                            else {
                                if (c = t.parentNode || L.body, l = c._gsCache, u = e.ticker.frame, l && h && l.time === u) return l.width * n / 100;
                                f[h ? "width" : "height"] = n + r
                            }
                            c.appendChild(F), o = parseFloat(F[h ? "offsetWidth" : "offsetHeight"]), c.removeChild(F), h && "%" === r && !1 !== a.cacheWidths && (l = c._gsCache = c._gsCache || {}, l.time = u, l.width = o / n * 100), 0 !== o || s || (o = G(t, i, n, r, !0))
                        }
                        return p ? -o : o
                    },
                    Z = z.calculateOffset = function(t, e, i) {
                        if ("absolute" !== Q(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            r = Q(t, "margin" + n, i);
                        return t["offset" + n] - (G(t, e, parseFloat(r), r.replace(x, "")) || 0)
                    },
                    J = function(t, e) {
                        var i, n, r, s = {};
                        if (e = e || U(t, null))
                            if (i = e.length)
                                for (; --i > -1;)(-1 === (r = e[i]).indexOf("-transform") || kt === r) && (s[r.replace(C, O)] = e.getPropertyValue(r));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || wt === i) && (s[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(C, O)] = e[i]);
                        return X || (s.opacity = H(t)), n = Lt(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, Ct && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                    },
                    K = function(t, e, i, n, r) {
                        var s, a, o, l = {},
                            u = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (s = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[a] = "auto" !== s || "left" !== a && "top" !== a ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[a] || "" === e[a].replace(y, "") ? s : 0 : Z(t, a), void 0 !== u[a] && (o = new dt(u, a, u[a], o)));
                        if (n)
                            for (a in n) "className" !== a && (l[a] = n[a]);
                        return { difs: l, firstMPT: o }
                    },
                    tt = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                    et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    it = function(t, e, i) {
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = tt[e],
                            s = r.length;
                        for (i = i || U(t, null); --s > -1;) n -= parseFloat(Q(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(Q(t, "border" + r[s] + "Width", i, !0)) || 0;
                        return n
                    },
                    nt = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i = t.split(" "),
                            n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "center" === n ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(y, "")), e.oy = parseFloat(r.replace(y, "")), e.v = t), e || t
                    },
                    rt = function(t, e) { return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) },
                    st = function(t, e) { return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) },
                    at = function(t, e, i, n) { var r, s, a, o, l; return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, s = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : I) - (l ? 0 : e), s.length && (n && (n[i] = e + a), -1 !== t.indexOf("short") && (a %= r) != a % (r / 2) && (a = 0 > a ? a + r : a - r), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), 1e-6 > o && o > -1e-6 && (o = 0), o },
                    ot = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
                    lt = function(t, e, i) { return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5 },
                    ut = a.parseColor = function(t, e) {
                        var i, n, r, s, a, o, l, u, h, c, f;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, 255 & t >> 8, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ot[t]) i = ot[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s), t = parseInt(t.substr(1), 16), i = [t >> 16, 255 & t >> 8, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = f = t.match(_), e) { if (-1 !== t.indexOf("=")) return t.match(g) } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, l = Number(i[2]) / 100, r = .5 >= l ? l * (o + 1) : l + o - l * o, n = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), i[0] = lt(a + 1 / 3, n, r), i[1] = lt(a, n, r), i[2] = lt(a - 1 / 3, n, r);
                                else i = t.match(_) || ot.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = ot.black;
                        return e && !f && (n = i[0] / 255, r = i[1] / 255, s = i[2] / 255, u = Math.max(n, r, s), h = Math.min(n, r, s), l = (u + h) / 2, u === h ? a = o = 0 : (c = u - h, o = l > .5 ? c / (2 - u - h) : c / (u + h), a = u === n ? (r - s) / c + (s > r ? 6 : 0) : u === r ? (s - n) / c + 2 : (n - r) / c + 4, a *= 60), i[0] = 0 | a + .5, i[1] = 0 | 100 * o + .5, i[2] = 0 | 100 * l + .5), i
                    },
                    ht = function(t, e) {
                        var i, n, r, s = t.match(ct) || [],
                            a = 0,
                            o = s.length ? "" : t;
                        for (i = 0; s.length > i; i++) n = s[i], r = t.substr(a, t.indexOf(n, a) - a), a += r.length + n.length, 3 === (n = ut(n, e)).length && n.push(1), o += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                        return o
                    },
                    ct = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (u in ot) ct += "|" + u + "\\b";
                ct = RegExp(ct + ")", "gi"), a.colorStringFilter = function(t) {
                    var e, i = t[0] + t[1];
                    ct.lastIndex = 0, ct.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ht(t[0], e), t[1] = ht(t[1], e))
                }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
                var ft = function(t, e, i, n) {
                        if (null == t) return function(t) { return t };
                        var r, s = e ? (t.match(ct) || [""])[0] : "",
                            a = t.split(s).join("").match(v) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            u = -1 !== t.indexOf(" ") ? " " : ",",
                            h = a.length,
                            c = h > 0 ? a[0].replace(_, "") : "";
                        return h ? r = e ? function(t) {
                            var e, f, p, d;
                            if ("number" == typeof t) t += c;
                            else if (n && R.test(t)) { for (d = t.replace(R, "|").split("|"), p = 0; d.length > p; p++) d[p] = r(d[p]); return d.join(",") }
                            if (e = (t.match(ct) || [s])[0], f = t.split(e).join("").match(v) || [], p = f.length, h > p--)
                                for (; h > ++p;) f[p] = i ? f[0 | (p - 1) / 2] : a[p];
                            return o + f.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, s, f;
                            if ("number" == typeof t) t += c;
                            else if (n && R.test(t)) { for (s = t.replace(R, "|").split("|"), f = 0; s.length > f; f++) s[f] = r(s[f]); return s.join(",") }
                            if (e = t.match(v) || [], f = e.length, h > f--)
                                for (; h > ++f;) e[f] = i ? e[0 | (f - 1) / 2] : a[f];
                            return o + e.join(u) + l
                        } : function(t) { return t }
                    },
                    pt = function(t) {
                        return t = t.split(","),
                            function(e, i, n, r, s, a, o) { var l, u = (i + "").split(" "); for (o = {}, l = 0; 4 > l; l++) o[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0]; return r.parse(e, o, s, a) }
                    },
                    dt = (z._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, r, s = this.data, a = s.proxy, o = s.firstMPT; o;) e = a[o.v], o.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), o.t[o.p] = e, o = o._next;
                        if (s.autoRotate && (s.autoRotate.rotation = a.rotation), 1 === t)
                            for (o = s.firstMPT; o;) {
                                if ((i = o.t).type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                o = o._next
                            }
                    }, function(t, e, i, n, r) { this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n) }),
                    mt = (z._parseToProxy = function(t, e, i, n, r, s) {
                        var a, o, l, u, h, c = n,
                            f = {},
                            p = {},
                            d = i._transform,
                            m = M;
                        for (i._transform = null, M = e, n = h = i.parse(t, e, n, r), M = m, s && (i._transform = d, c && (c._prev = null, c._prev && (c._prev._next = null))); n && n !== c;) {
                            if (1 >= n.type && (o = n.p, p[o] = n.s + n.c, f[o] = n.s, s || (u = new dt(n, "s", o, u, n.r), n.c = 0), 1 === n.type))
                                for (a = n.l; --a > 0;) l = "xn" + a, o = n.p + "_" + l, p[o] = n.data[l], f[o] = n[l], s || (u = new dt(n, l, o, u, n.rxp[l]));
                            n = n._next
                        }
                        return { proxy: f, end: p, firstMPT: u, pt: h }
                    }, z.CSSPropTween = function(t, e, n, r, a, o, l, u, h, c, f) { this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof mt || s.push(this.n), this.r = u, this.type = o || 0, h && (this.pr = h, i = !0), this.b = void 0 === c ? n : c, this.e = void 0 === f ? n + r : f, a && (this._next = a, a._prev = this) }),
                    _t = function(t, e, i, n, r, s) { var a = new mt(t, e, i, n - i, r, -1, s); return a.b = i, a.e = a.xs0 = n, a },
                    gt = a.parseComplex = function(t, e, i, n, r, s, a, o, l, u) {
                        i = i || s || "", a = new mt(t, e, 0, 0, a, u ? 2 : 1, null, !1, o, i, n), n += "";
                        var c, f, p, d, m, v, y, x, b, T, w, k, P, C = i.split(", ").join(",").split(" "),
                            S = n.split(", ").join(",").split(" "),
                            O = C.length,
                            A = !1 !== h;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (C = C.join(" ").replace(R, ", ").split(" "), S = S.join(" ").replace(R, ", ").split(" "), O = C.length), O !== S.length && (C = (s || "").split(" "), O = C.length), a.plugin = l, a.setRatio = u, ct.lastIndex = 0, c = 0; O > c; c++)
                            if (d = C[c], m = S[c], (x = parseFloat(d)) || 0 === x) a.appendXtra("", x, rt(m, x), m.replace(g, ""), A && -1 !== m.indexOf("px"), !0);
                            else if (r && ct.test(d)) k = "," === m.charAt(m.length - 1) ? ")," : ")", P = -1 !== m.indexOf("hsl") && X, d = ut(d, P), m = ut(m, P), b = d.length + m.length > 6, b && !X && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(S[c]).join("transparent")) : (X || (b = !1), P ? a.appendXtra(b ? "hsla(" : "hsl(", d[0], rt(m[0], d[0]), ",", !1, !0).appendXtra("", d[1], rt(m[1], d[1]), "%,", !1).appendXtra("", d[2], rt(m[2], d[2]), b ? "%," : "%" + k, !1) : a.appendXtra(b ? "rgba(" : "rgb(", d[0], m[0] - d[0], ",", !0, !0).appendXtra("", d[1], m[1] - d[1], ",", !0).appendXtra("", d[2], m[2] - d[2], b ? "," : k, !0), b && (d = 4 > d.length ? 1 : d[3], a.appendXtra("", d, (4 > m.length ? 1 : m[3]) - d, k, !1))), ct.lastIndex = 0;
                        else if (v = d.match(_)) {
                            if (!(y = m.match(g)) || y.length !== v.length) return a;
                            for (p = 0, f = 0; v.length > f; f++) w = v[f], T = d.indexOf(w, p), a.appendXtra(d.substr(p, T - p), Number(w), rt(y[f], w), "", A && "px" === d.substr(T + w.length, 2), 0 === f), p = T + w.length;
                            a["xs" + a.l] += d.substr(p)
                        } else a["xs" + a.l] += a.l ? " " + d : d;
                        if (-1 !== n.indexOf("=") && a.data) {
                            for (k = a.xs0 + a.data.s, c = 1; a.l > c; c++) k += a["xs" + c] + a.data["xn" + c];
                            a.e = k + a["xs" + c]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    vt = 9;
                for ((u = mt.prototype).l = u.pr = 0; --vt > 0;) u["xn" + vt] = 0, u["xs" + vt] = "";
                u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function(t, e, i, n, r, s) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += s && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = n || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new mt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = { s: e + i }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (n || ""), a)
                };
                var yt = function(t, e) { e = e || {}, this.p = e.prefix ? Y(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ft(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0 },
                    xt = z._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = { parser: i });
                        var n, r = t.split(","),
                            s = e.defaultValue;
                        for (i = i || [s], n = 0; r.length > n; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, new yt(r[n], e)
                    };
                (u = yt.prototype).parseComplex = function(t, e, i, n, r, s) {
                    var a, o, l, u, h, c, f = this.keyword;
                    if (this.multi && (R.test(i) || R.test(e) ? (o = e.replace(R, "|").split("|"), l = i.replace(R, "|").split("|")) : f && (o = [e], l = [i])), l) {
                        for (u = l.length > o.length ? l.length : o.length, a = 0; u > a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, f && (h = e.indexOf(f), c = i.indexOf(f), h !== c && (-1 === c ? o[a] = o[a].split(f).join("") : -1 === h && (o[a] += " " + f)));
                        e = o.join(", "), i = l.join(", ")
                    }
                    return gt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
                }, u.parse = function(t, e, i, n, s, a) { return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), s, a) }, a.registerSpecialProp = function(t, e, i) { xt(t, { parser: function(t, n, r, s, a, o) { var l = new mt(t, r, 0, 0, a, 2, r, !1, i); return l.plugin = o, l.setRatio = e(t, n, s._tween, r), l }, priority: i }) }, a.useSVGTransformAttr = f || p;
                var bt, Tt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    wt = Y("transform"),
                    kt = W + "transform",
                    Pt = Y("transformOrigin"),
                    Ct = null !== Y("perspective"),
                    St = z.Transform = function() { this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(!1 === a.defaultForce3D || !Ct) && (a.defaultForce3D || "auto") },
                    Ot = window.SVGElement,
                    At = function(t, e, i) {
                        var n, r = L.createElementNS("http://www.w3.org/2000/svg", t),
                            s = /([a-z])([A-Z])/g;
                        for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(r), r
                    },
                    Dt = L.documentElement,
                    Et = function() { var t, e, i, n = m || /Android/i.test(q) && !window.chrome; return L.createElementNS && !n && (t = At("svg", Dt), e = At("rect", t, { width: 100, height: 50, x: 100 }), i = e.getBoundingClientRect().width, e.style[Pt] = "50% 50%", e.style[wt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(p && Ct), Dt.removeChild(t)), n }(),
                    Rt = function(t, e, i, n, r) {
                        var s, o, l, u, h, c, f, p, d, m, _, g, v, y, x = t._gsTransform,
                            b = Mt(t, !0);
                        x && (v = x.xOrigin, y = x.yOrigin), (!n || 2 > (s = n.split(" ")).length) && (f = t.getBBox(), e = nt(e).split(" "), s = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]), i.xOrigin = u = parseFloat(s[0]), i.yOrigin = h = parseFloat(s[1]), n && b !== It && (c = b[0], f = b[1], p = b[2], d = b[3], m = b[4], _ = b[5], g = c * d - f * p, o = u * (d / g) + h * (-p / g) + (p * _ - d * m) / g, l = u * (-f / g) + h * (c / g) - (c * _ - f * m) / g, u = i.xOrigin = s[0] = o, h = i.yOrigin = s[1] = l), x && (r || !1 !== r && !1 !== a.defaultSmoothOrigin ? (o = u - v, l = h - y, x.xOffset += o * b[0] + l * b[2] - o, x.yOffset += o * b[1] + l * b[3] - l) : x.xOffset = x.yOffset = 0), t.setAttribute("data-svg-origin", s.join(" "))
                    },
                    Nt = function(t) { return !!(Ot && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)) },
                    It = [1, 0, 0, 1, 0, 0],
                    Mt = function(t, e) { var i, n, r, s, a, o = t._gsTransform || new St; if (wt ? n = Q(t, kt, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(D), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, (o.svg || t.getBBox && Nt(t)) && (i && -1 !== (t.style[wt] + "").indexOf("matrix") && (n = t.style[wt], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return It; for (r = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], vt = r.length; --vt > -1;) s = Number(r[vt]), r[vt] = (a = s - (s |= 0)) ? (0 | 1e5 * a + (0 > a ? -.5 : .5)) / 1e5 + s : s; return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r },
                    Lt = z.getTransform = function(t, i, n, s) {
                        if (t._gsTransform && n && !s) return t._gsTransform;
                        var o, l, u, h, c, f, p = n ? t._gsTransform || new St : new St,
                            d = 0 > p.scaleX,
                            m = 1e5,
                            _ = Ct ? parseFloat(Q(t, Pt, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
                            g = parseFloat(a.defaultTransformPerspective) || 0;
                        if (p.svg = !(!t.getBBox || !Nt(t)), p.svg && (Rt(t, Q(t, Pt, r, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), bt = a.useSVGTransformAttr || Et), (o = Mt(t)) !== It) {
                            if (16 === o.length) {
                                var v, y, x, b, T, w = o[0],
                                    k = o[1],
                                    P = o[2],
                                    C = o[3],
                                    S = o[4],
                                    O = o[5],
                                    A = o[6],
                                    D = o[7],
                                    E = o[8],
                                    R = o[9],
                                    N = o[10],
                                    M = o[12],
                                    L = o[13],
                                    B = o[14],
                                    F = o[11],
                                    j = Math.atan2(A, N);
                                p.zOrigin && (B = -p.zOrigin, M = E * B - o[12], L = R * B - o[13], B = N * B + p.zOrigin - o[14]), p.rotationX = j * I, j && (b = Math.cos(-j), T = Math.sin(-j), v = S * b + E * T, y = O * b + R * T, x = A * b + N * T, E = S * -T + E * b, R = O * -T + R * b, N = A * -T + N * b, F = D * -T + F * b, S = v, O = y, A = x), j = Math.atan2(E, N), p.rotationY = j * I, j && (b = Math.cos(-j), T = Math.sin(-j), v = w * b - E * T, y = k * b - R * T, x = P * b - N * T, R = k * T + R * b, N = P * T + N * b, F = C * T + F * b, w = v, k = y, P = x), j = Math.atan2(k, w), p.rotation = j * I, j && (b = Math.cos(-j), T = Math.sin(-j), w = w * b + S * T, y = k * b + O * T, O = k * -T + O * b, A = P * -T + A * b, k = y), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY += 180), p.scaleX = (0 | Math.sqrt(w * w + k * k) * m + .5) / m, p.scaleY = (0 | Math.sqrt(O * O + R * R) * m + .5) / m, p.scaleZ = (0 | Math.sqrt(A * A + N * N) * m + .5) / m, p.skewX = 0, p.perspective = F ? 1 / (0 > F ? -F : F) : 0, p.x = M, p.y = L, p.z = B, p.svg && (p.x -= p.xOrigin - (p.xOrigin * w - p.yOrigin * S), p.y -= p.yOrigin - (p.yOrigin * k - p.xOrigin * O))
                            } else if (!(Ct && !s && o.length && p.x === o[4] && p.y === o[5] && (p.rotationX || p.rotationY) || void 0 !== p.x && "none" === Q(t, "display", i))) {
                                var z = o.length >= 6,
                                    q = z ? o[0] : 1,
                                    X = o[1] || 0,
                                    H = o[2] || 0,
                                    V = z ? o[3] : 1;
                                p.x = o[4] || 0, p.y = o[5] || 0, u = Math.sqrt(q * q + X * X), h = Math.sqrt(V * V + H * H), c = q || X ? Math.atan2(X, q) * I : p.rotation || 0, f = H || V ? Math.atan2(H, V) * I + c : p.skewX || 0, Math.abs(f) > 90 && 270 > Math.abs(f) && (d ? (u *= -1, f += 0 >= c ? 180 : -180, c += 0 >= c ? 180 : -180) : (h *= -1, f += 0 >= f ? 180 : -180)), p.scaleX = u, p.scaleY = h, p.rotation = c, p.skewX = f, Ct && (p.rotationX = p.rotationY = p.z = 0, p.perspective = g, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * q + p.yOrigin * H), p.y -= p.yOrigin - (p.xOrigin * X + p.yOrigin * V))
                            }
                            p.zOrigin = _;
                            for (l in p) 2e-5 > p[l] && p[l] > -2e-5 && (p[l] = 0)
                        }
                        return n && (t._gsTransform = p, p.svg && (bt && t.style[wt] ? e.delayedCall(.001, function() { zt(t.style, wt) }) : !bt && t.getAttribute("transform") && e.delayedCall(.001, function() { t.removeAttribute("transform") }))), p
                    },
                    Bt = function(t) {
                        var e, i, n = this.data,
                            r = -n.rotation * N,
                            s = r + n.skewX * N,
                            a = 1e5,
                            o = (0 | Math.cos(r) * n.scaleX * a) / a,
                            l = (0 | Math.sin(r) * n.scaleX * a) / a,
                            u = (0 | Math.sin(s) * -n.scaleY * a) / a,
                            h = (0 | Math.cos(s) * n.scaleY * a) / a,
                            c = this.t.style,
                            f = this.t.currentStyle;
                        if (f) {
                            i = l, l = -u, u = -i, e = f.filter, c.filter = "";
                            var p, d, _ = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== f.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + u + ", M22=" + h,
                                T = n.x + _ * n.xPercent / 100,
                                w = n.y + g * n.yPercent / 100;
                            if (null != n.ox && (p = (n.oxp ? .01 * _ * n.ox : n.ox) - _ / 2, d = (n.oyp ? .01 * g * n.oy : n.oy) - g / 2, T += p - (p * o + d * l), w += d - (p * u + d * h)), v ? (p = _ / 2, d = g / 2, y += ", Dx=" + (p - (p * o + d * l) + T) + ", Dy=" + (d - (p * u + d * h) + w) + ")") : y += ", sizingMethod='auto expand')", c.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(E, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === u && 1 === h && (v && -1 === y.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !v) { var k, P, C, S = 8 > m ? 1 : -1; for (p = n.ieOffsetX || 0, d = n.ieOffsetY || 0, n.ieOffsetX = Math.round((_ - ((0 > o ? -o : o) * _ + (0 > l ? -l : l) * g)) / 2 + T), n.ieOffsetY = Math.round((g - ((0 > h ? -h : h) * g + (0 > u ? -u : u) * _)) / 2 + w), vt = 0; 4 > vt; vt++) P = et[vt], k = f[P], i = -1 !== k.indexOf("px") ? parseFloat(k) : G(this.t, P, parseFloat(k), k.replace(x, "")) || 0, C = i !== n[P] ? 2 > vt ? -n.ieOffsetX : -n.ieOffsetY : 2 > vt ? p - n.ieOffsetX : d - n.ieOffsetY, c[P] = (n[P] = Math.round(i - C * (0 === vt || 2 === vt ? 1 : S))) + "px" }
                        }
                    },
                    Ft = z.set3DTransformRatio = z.setTransformRatio = function(t) {
                        var e, i, n, r, s, a, o, l, u, h, c, f, d, m, _, g, v, y, x, b, T, w, k, P = this.data,
                            C = this.t.style,
                            S = P.rotation,
                            O = P.rotationX,
                            A = P.rotationY,
                            D = P.scaleX,
                            E = P.scaleY,
                            R = P.scaleZ,
                            I = P.x,
                            M = P.y,
                            L = P.z,
                            B = P.svg,
                            F = P.perspective,
                            j = P.force3D;
                        if (!((1 !== t && 0 !== t || "auto" !== j || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && j || L || F || A || O) || bt && B || !Ct) S || P.skewX || B ? (S *= N, w = P.skewX * N, k = 1e5, e = Math.cos(S) * D, r = Math.sin(S) * D, i = Math.sin(S - w) * -E, s = Math.cos(S - w) * E, w && "simple" === P.skewType && (v = Math.tan(w), v = Math.sqrt(1 + v * v), i *= v, s *= v, P.skewY && (e *= v, r *= v)), B && (I += P.xOrigin - (P.xOrigin * e + P.yOrigin * i) + P.xOffset, M += P.yOrigin - (P.xOrigin * r + P.yOrigin * s) + P.yOffset, bt && (P.xPercent || P.yPercent) && (m = this.t.getBBox(), I += .01 * P.xPercent * m.width, M += .01 * P.yPercent * m.height), (m = 1e-6) > I && I > -m && (I = 0), m > M && M > -m && (M = 0)), x = (0 | e * k) / k + "," + (0 | r * k) / k + "," + (0 | i * k) / k + "," + (0 | s * k) / k + "," + I + "," + M + ")", B && bt ? this.t.setAttribute("transform", "matrix(" + x) : C[wt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + x) : C[wt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + D + ",0,0," + E + "," + I + "," + M + ")";
                        else {
                            if (p && ((m = 1e-4) > D && D > -m && (D = R = 2e-5), m > E && E > -m && (E = R = 2e-5), !F || P.z || P.rotationX || P.rotationY || (F = 0)), S || P.skewX) S *= N, _ = e = Math.cos(S), g = r = Math.sin(S), P.skewX && (S -= P.skewX * N, _ = Math.cos(S), g = Math.sin(S), "simple" === P.skewType && (v = Math.tan(P.skewX * N), v = Math.sqrt(1 + v * v), _ *= v, g *= v, P.skewY && (e *= v, r *= v))), i = -g, s = _;
                            else {
                                if (!(A || O || 1 !== R || F || B)) return void(C[wt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) translate3d(" : "translate3d(") + I + "px," + M + "px," + L + "px)" + (1 !== D || 1 !== E ? " scale(" + D + "," + E + ")" : ""));
                                e = s = 1, i = r = 0
                            }
                            u = 1, n = a = o = l = h = c = 0, f = F ? -1 / F : 0, d = P.zOrigin, m = 1e-6, b = ",", T = "0", (S = A * N) && (_ = Math.cos(S), g = Math.sin(S), o = -g, h = f * -g, n = e * g, a = r * g, u = _, f *= _, e *= _, r *= _), (S = O * N) && (_ = Math.cos(S), g = Math.sin(S), v = i * _ + n * g, y = s * _ + a * g, l = u * g, c = f * g, n = i * -g + n * _, a = s * -g + a * _, u *= _, f *= _, i = v, s = y), 1 !== R && (n *= R, a *= R, u *= R, f *= R), 1 !== E && (i *= E, s *= E, l *= E, c *= E), 1 !== D && (e *= D, r *= D, o *= D, h *= D), (d || B) && (d && (I += n * -d, M += a * -d, L += u * -d + d), B && (I += P.xOrigin - (P.xOrigin * e + P.yOrigin * i) + P.xOffset, M += P.yOrigin - (P.xOrigin * r + P.yOrigin * s) + P.yOffset), m > I && I > -m && (I = T), m > M && M > -m && (M = T), m > L && L > -m && (L = 0)), x = P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix3d(" : "matrix3d(", x += (m > e && e > -m ? T : e) + b + (m > r && r > -m ? T : r) + b + (m > o && o > -m ? T : o), x += b + (m > h && h > -m ? T : h) + b + (m > i && i > -m ? T : i) + b + (m > s && s > -m ? T : s), O || A ? (x += b + (m > l && l > -m ? T : l) + b + (m > c && c > -m ? T : c) + b + (m > n && n > -m ? T : n), x += b + (m > a && a > -m ? T : a) + b + (m > u && u > -m ? T : u) + b + (m > f && f > -m ? T : f) + b) : x += ",0,0,0,0,1,0,", x += I + b + M + b + L + b + (F ? 1 + -L / F : 1) + ")", C[wt] = x
                        }
                    };
                (u = St.prototype).x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, xt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, n, s, o, l) {
                        if (n._lastParsedTransform === l) return s;
                        n._lastParsedTransform = l;
                        var u, h, c, f, p, d, m, _, g, v, y = t._gsTransform,
                            x = t.style,
                            b = Tt.length,
                            T = l,
                            w = {},
                            k = "transformOrigin";
                        if (l.display ? (f = Q(t, "display"), x.display = "block", u = Lt(t, r, !0, l.parseTransform), x.display = f) : u = Lt(t, r, !0, l.parseTransform), n._transform = u, "string" == typeof T.transform && wt) f = F.style, f[wt] = T.transform, f.display = "block", f.position = "absolute", L.body.appendChild(F), h = Lt(F, null, !1), L.body.removeChild(F), h.perspective || (h.perspective = u.perspective), null != T.xPercent && (h.xPercent = st(T.xPercent, u.xPercent)), null != T.yPercent && (h.yPercent = st(T.yPercent, u.yPercent));
                        else if ("object" == typeof T) {
                            if (h = { scaleX: st(null != T.scaleX ? T.scaleX : T.scale, u.scaleX), scaleY: st(null != T.scaleY ? T.scaleY : T.scale, u.scaleY), scaleZ: st(T.scaleZ, u.scaleZ), x: st(T.x, u.x), y: st(T.y, u.y), z: st(T.z, u.z), xPercent: st(T.xPercent, u.xPercent), yPercent: st(T.yPercent, u.yPercent), perspective: st(T.transformPerspective, u.perspective) }, null != (_ = T.directionalRotation))
                                if ("object" == typeof _)
                                    for (f in _) T[f] = _[f];
                                else T.rotation = _;
                            "string" == typeof T.x && -1 !== T.x.indexOf("%") && (h.x = 0, h.xPercent = st(T.x, u.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (h.y = 0, h.yPercent = st(T.y, u.yPercent)), h.rotation = at("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : u.rotation, u.rotation, "rotation", w), Ct && (h.rotationX = at("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : u.rotationX || 0, u.rotationX, "rotationX", w), h.rotationY = at("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : u.rotationY || 0, u.rotationY, "rotationY", w)), h.skewX = null == T.skewX ? u.skewX : at(T.skewX, u.skewX), h.skewY = null == T.skewY ? u.skewY : at(T.skewY, u.skewY), (c = h.skewY - u.skewY) && (h.skewX += c, h.rotation += c)
                        }
                        for (Ct && null != T.force3D && (u.force3D = T.force3D, m = !0), u.skewType = T.skewType || u.skewType || a.defaultSkewType, (d = u.force3D || u.z || u.rotationX || u.rotationY || h.z || h.rotationX || h.rotationY || h.perspective) || null == T.scale || (h.scaleZ = 1); --b > -1;) i = Tt[b], ((p = h[i] - u[i]) > 1e-6 || -1e-6 > p || null != T[i] || null != M[i]) && (m = !0, s = new mt(u, i, u[i], p, s), i in w && (s.e = w[i]), s.xs0 = 0, s.plugin = o, n._overwriteProps.push(s.n));
                        return p = T.transformOrigin, u.svg && (p || T.svgOrigin) && (g = u.xOffset, v = u.yOffset, Rt(t, nt(p), h, T.svgOrigin, T.smoothOrigin), s = _t(u, "xOrigin", (y ? u : h).xOrigin, h.xOrigin, s, k), s = _t(u, "yOrigin", (y ? u : h).yOrigin, h.yOrigin, s, k), (g !== u.xOffset || v !== u.yOffset) && (s = _t(u, "xOffset", y ? g : u.xOffset, u.xOffset, s, k), s = _t(u, "yOffset", y ? v : u.yOffset, u.yOffset, s, k)), p = bt ? null : "0px 0px"), (p || Ct && d && u.zOrigin) && (wt ? (m = !0, i = Pt, p = (p || Q(t, i, r, !1, "50% 50%")) + "", s = new mt(x, i, 0, 0, s, -1, k), s.b = x[i], s.plugin = o, Ct ? (f = u.zOrigin, p = p.split(" "), u.zOrigin = (p.length > 2 && (0 === f || "0px" !== p[2]) ? parseFloat(p[2]) : f) || 0, s.xs0 = s.e = p[0] + " " + (p[1] || "50%") + " 0px", s = new mt(u, "zOrigin", 0, 0, s, -1, s.n), s.b = f, s.xs0 = s.e = u.zOrigin) : s.xs0 = s.e = p) : nt(p + "", u)), m && (n._transformType = u.svg && bt || !d && 3 !== this._transformType ? 2 : 3), s
                    },
                    prefix: !0
                }), xt("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), xt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, s, a) {
                        e = this.format(e);
                        var o, l, u, h, c, f, p, d, m, _, g, v, y, x, b, T, w = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            k = t.style;
                        for (m = parseFloat(t.offsetWidth), _ = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; w.length > l; l++) this.p.indexOf("border") && (w[l] = Y(w[l])), -1 !== (c = h = Q(t, w[l], r, !1, "0px")).indexOf(" ") && (h = c.split(" "), c = h[0], h = h[1]), f = u = o[l], p = parseFloat(c), v = c.substr((p + "").length), y = "=" === f.charAt(1), y ? (d = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), d *= parseFloat(f), g = f.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(f), g = f.substr((d + "").length)), "" === g && (g = n[i] || v), g !== v && (x = G(t, "borderLeft", p, v), b = G(t, "borderTop", p, v), "%" === g ? (c = x / m * 100 + "%", h = b / _ * 100 + "%") : "em" === g ? (T = G(t, "borderLeft", 1, "em"), c = x / T + "em", h = b / T + "em") : (c = x + "px", h = b + "px"), y && (f = parseFloat(c) + d + g, u = parseFloat(h) + d + g)), a = gt(k, w[l], c + " " + h, f + " " + u, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: ft("0px 0px 0px 0px", !1, !0)
                }), xt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, s, a) {
                        var o, l, u, h, c, f, p = "background-position",
                            d = r || U(t, null),
                            _ = this.format((d ? m ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== _.indexOf("%") != (-1 !== g.indexOf("%")) && (f = Q(t, "backgroundImage").replace(S, "")) && "none" !== f) {
                            for (o = _.split(" "), l = g.split(" "), j.setAttribute("src", f), u = 2; --u > -1;) _ = o[u], (h = -1 !== _.indexOf("%")) != (-1 !== l[u].indexOf("%")) && (c = 0 === u ? t.offsetWidth - j.width : t.offsetHeight - j.height, o[u] = h ? parseFloat(_) / 100 * c + "px" : parseFloat(_) / c * 100 + "%");
                            _ = o.join(" ")
                        }
                        return this.parseComplex(t.style, _, g, s, a)
                    },
                    formatter: nt
                }), xt("backgroundSize", { defaultValue: "0 0", formatter: nt }), xt("perspective", { defaultValue: "0px", prefix: !0 }), xt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), xt("transformStyle", { prefix: !0 }), xt("backfaceVisibility", { prefix: !0 }), xt("userSelect", { prefix: !0 }), xt("margin", { parser: pt("marginTop,marginRight,marginBottom,marginLeft") }), xt("padding", { parser: pt("paddingTop,paddingRight,paddingBottom,paddingLeft") }), xt("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function(t, e, i, n, s, a) { var o, l, u; return 9 > m ? (l = t.currentStyle, u = 8 > m ? " " : ",", o = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, s, a) } }), xt("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), xt("autoRound,strictUnits", { parser: function(t, e, i, n, r) { return r } }), xt("border", { defaultValue: "0px solid #000", parser: function(t, e, i, n, s, a) { return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), s, a) }, color: !0, formatter: function(t) { var e = t.split(" "); return e[0] + " " + (e[1] || "solid") + " " + (t.match(ct) || ["#000"])[0] } }), xt("borderWidth", { parser: pt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), xt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, r) {
                        var s = t.style,
                            a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                        return new mt(s, a, 0, 0, r, -1, i, !1, 0, s[a], e)
                    }
                });
                var jt = function(t) {
                    var e, i = this.t,
                        n = i.filter || Q(this.data, "filter") || "",
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = n.replace(w, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(b, "opacity=" + r))
                };
                xt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, s, a) {
                        var o = parseFloat(Q(t, "opacity", r, !1, "1")),
                            l = t.style,
                            u = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), u && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0), X ? s = new mt(l, "opacity", o, e - o, s) : (s = new mt(l, "opacity", 100 * o, 100 * (e - o), s), s.xn1 = u ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = a, s.setRatio = jt), u && (s = new mt(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                    }
                });
                var zt = function(t, e) { e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e)) },
                    qt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : zt(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                xt("className", {
                    parser: function(t, e, n, s, a, o, l) {
                        var u, h, c, f, p, d = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (a = s._classNamePT = new mt(t, n, 0, 0, a, 2), a.setRatio = qt, a.pr = -11, i = !0, a.b = d, h = J(t, r), c = t._gsClassPT) {
                            for (f = {}, p = c.data; p;) f[p.p] = 1, p = p._next;
                            c.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : d.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), u = K(t, h, J(t), l, f), t.setAttribute("class", d), a.data = u.firstMPT, t.style.cssText = m, a = a.xfirst = s.parse(t, u.difs, a, o)
                    }
                });
                var Xt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, r, s, a = this.t.style,
                            o = l.transform.parse;
                        if ("all" === this.e) a.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === o ? r = !0 : i = "transformOrigin" === i ? Pt : l[i].p), zt(a, i);
                        r && (zt(a, wt), (s = this.t._gsTransform) && (s.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                    }
                };
                for (xt("clearProps", { parser: function(t, e, n, r, s) { return s = new mt(t, n, 0, 0, s, 2), s.setRatio = Xt, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s } }), u = "bezier,throwProps,physicsProps,physics2D".split(","), vt = u.length; vt--;) ! function(t) {
                    if (!l[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        xt(t, { parser: function(t, i, n, r, s, a, u) { var h = o.com.greensock.plugins[e]; return h ? (h._cssRegister(), l[n].parse(t, i, n, r, s, a, u)) : (V("Error: " + e + " js file not loaded."), s) } })
                    }
                }(u[vt]);
                (u = a.prototype)._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function(t, e, o) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = o, this._vars = e, h = e.autoRound, i = !1, n = e.suffixMap || a.suffixMap, r = U(t, ""), s = this._overwriteProps;
                    var u, p, m, _, g, v, y, x, b, w = t.style;
                    if (c && "" === w.zIndex && ("auto" === (u = Q(t, "zIndex", r)) || "" === u) && this._addLazySet(w, "zIndex", 0), "string" == typeof e && (_ = w.cssText, u = J(t, r), w.cssText = _ + ";" + e, u = K(t, u, J(t)).difs, !X && T.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, w.cssText = _), this._firstPT = p = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                        for (b = 3 === this._transformType, wt ? f && (c = !0, "" === w.zIndex && ("auto" === (y = Q(t, "zIndex", r)) || "" === y) && this._addLazySet(w, "zIndex", 0), d && this._addLazySet(w, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (b ? "visible" : "hidden"))) : w.zoom = 1, m = p; m && m._next;) m = m._next;
                        x = new mt(t, "transform", 0, 0, null, 2), this._linkCSSP(x, null, m), x.setRatio = wt ? Ft : Bt, x.data = this._transform || Lt(t, r, !0), x.tween = o, x.pr = -1, s.pop()
                    }
                    if (i) {
                        for (; p;) {
                            for (v = p._next, m = _; m && m.pr > p.pr;) m = m._next;
                            (p._prev = m ? m._prev : g) ? p._prev._next = p: _ = p, (p._next = m) ? m._prev = p : g = p, p = v
                        }
                        this._firstPT = _
                    }
                    return !0
                }, u.parse = function(t, e, i, s) { var a, o, u, c, f, p, d, m, _, g, v = t.style; for (a in e) p = e[a], o = l[a], o ? i = o.parse(t, p, a, this, i, s, e) : (f = Q(t, a, r) + "", _ = "string" == typeof p, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || _ && k.test(p) ? (_ || (p = ut(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = gt(v, a, f, p, !0, "transparent", i, 0, s)) : !_ || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (u = parseFloat(f), d = u || 0 === u ? f.substr((u + "").length) : "", ("" === f || "auto" === f) && ("width" === a || "height" === a ? (u = it(t, a, r), d = "px") : "left" === a || "top" === a ? (u = Z(t, a, r), d = "px") : (u = "opacity" !== a ? 0 : 1, d = "")), g = _ && "=" === p.charAt(1), g ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), m = p.replace(x, "")) : (c = parseFloat(p), m = _ ? p.replace(x, "") : ""), "" === m && (m = a in n ? n[a] : d), p = c || 0 === c ? (g ? c + u : c) + m : e[a], d !== m && "" !== m && (c || 0 === c) && u && (u = G(t, a, u, d), "%" === m ? (u /= G(t, a, 100, "%") / 100, !0 !== e.strictUnits && (f = u + "%")) : "em" === m || "rem" === m ? u /= G(t, a, 1, m) : "px" !== m && (c = G(t, a, c, m), m = "px"), g && (c || 0 === c) && (p = c + u + m)), g && (c += u), !u && 0 !== u || !c && 0 !== c ? void 0 !== v[a] && (p || "NaN" != p + "" && null != p) ? (i = new mt(v, a, c || u || 0, 0, i, -1, a, !1, 0, f, p), i.xs0 = "none" !== p || "display" !== a && -1 === a.indexOf("Style") ? p : f) : V("invalid " + a + " tween value: " + e[a]) : (i = new mt(v, a, u, c - u, i, 0, a, !1 !== h && ("px" === m || "zIndex" === a), 0, f, p), i.xs0 = m)) : i = gt(v, a, f, p, !0, null, i, 0, s)), s && i && !i.plugin && (i.plugin = s); return i }, u.setRatio = function(t) {
                    var e, i, n, r = this._firstPT;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (2 === (n = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = Math.round(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i
                                            }
                                        } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next
                            }
                }, u._enableTransforms = function(t) { this._transform = this._transform || Lt(this._target, r, !0), this._transformType = this._transform.svg && bt || !t && 3 !== this._transformType ? 2 : 3 };
                var Ht = function() { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0) };
                u._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new mt(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Ht, n.data = this
                }, u._linkCSSP = function(t, e, i, n) { return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t }, u._kill = function(e) {
                    var i, n, r, s = e;
                    if (e.autoAlpha || e.alpha) {
                        s = {};
                        for (n in e) s[n] = e[n];
                        s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, s)
                };
                var Vt = function(t, e, i) {
                    var n, r, s, a;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Vt(t[r], e, i);
                    else
                        for (n = t.childNodes, r = n.length; --r > -1;) s = n[r], a = s.type, s.style && (e.push(J(s)), i && i.push(s)), 1 !== a && 9 !== a && 11 !== a || !s.childNodes.length || Vt(s, e, i)
                };
                return a.cascadeTo = function(t, i, n) {
                    var r, s, a, o, l = e.to(t, i, n),
                        u = [l],
                        h = [],
                        c = [],
                        f = [],
                        p = e._internals.reservedProps;
                    for (t = l._targets || l.target, Vt(t, h, f), l.render(i, !0, !0), Vt(t, c), l.render(0, !0, !0), l._enabled(!0), r = f.length; --r > -1;)
                        if ((s = K(f[r], h[r], c[r])).firstMPT) {
                            s = s.difs;
                            for (a in n) p[a] && (s[a] = n[a]);
                            o = {};
                            for (a in s) o[a] = h[r][a];
                            u.push(e.fromTo(f[r], i, o, s))
                        }
                    return u
                }, t.activate([a]), a
            }, !0),
            function() {
                var t = function(t) { for (; t;) t.f || t.blob || (t.r = 1), t = t._next },
                    e = _gsScope._gsDefine.plugin({ propName: "roundProps", version: "1.5", priority: -1, API: 2, init: function(t, e, i) { return this._tween = i, !0 } }).prototype;
                e._onInitAllProps = function() {
                    for (var e, i, n, r = this._tween, s = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), a = s.length, o = {}, l = r._propLookup.roundProps; --a > -1;) o[s[a]] = 1;
                    for (a = s.length; --a > -1;)
                        for (e = s[a], i = r._firstPT; i;) n = i._next, i.pg ? i.t._roundProps(o, !0) : i.n === e && (2 === i.f && i.t ? t(i.t._firstPT) : (this._add(i.t, e, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[e] = l)), i = n;
                    return !1
                }, e._add = function(t, e, i, n) { this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e) }
            }(), _gsScope._gsDefine.plugin({ propName: "attr", API: 2, version: "0.5.0", init: function(t, e) { var i; if ("function" != typeof t.setAttribute) return !1; for (i in e) this._addTween(t, "setAttribute", t.getAttribute(i) + "", e[i] + "", i, !1, i), this._overwriteProps.push(i); return !0 } }), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e) { "object" != typeof e && (e = { rotation: e }), this.finals = {}; var i, n, r, s, a, o, l = !0 === e.useRadians ? 2 * Math.PI : 360; for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), n = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), s = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? r + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, a = s - r, o.length && (-1 !== (n = o.join("_")).indexOf("short") && (a %= l) != a % (l / 2) && (a = 0 > a ? a + l : a - l), -1 !== n.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * l) % l - (0 | a / l) * l : -1 !== n.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * l) % l - (0 | a / l) * l)), (a > 1e-6 || -1e-6 > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i))); return !0 },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
                    s = r.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    l = s._class,
                    u = function(e, i) {
                        var n = l("easing." + e, function() {}, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, n
                    },
                    h = t.register || function() {},
                    c = function(t, e, i, n) { var r = l("easing." + t, { easeOut: new e, easeIn: new i, easeInOut: new n }, !0); return h(r, t), r },
                    f = function(t, e, i) { this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t) },
                    p = function(e, i) {
                        var n = l("easing." + e, function(t) { this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1 }, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, r.config = function(t) { return new n(t) }, n
                    },
                    d = c("Back", p("BackOut", function(t) { return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1 }), p("BackIn", function(t) { return t * t * ((this._p1 + 1) * t - this._p1) }), p("BackInOut", function(t) { return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2) })),
                    m = l("easing.SlowMo", function(t, e, i) { e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i }, !0),
                    _ = m.prototype = new t;
                return _.constructor = m, _.getRatio = function(t) { var e = t + (.5 - t) * this._p; return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e }, m.ease = new m(.7, .7), _.config = m.config = function(t, e, i) { return new m(t, e, i) }, e = l("easing.SteppedEase", function(t) { t = t || 1, this._p1 = 1 / t, this._p2 = t + 1 }, !0), _ = e.prototype = new t, _.constructor = e, _.getRatio = function(t) { return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1 }, _.config = e.config = function(t) { return new e(t) }, i = l("easing.RoughEase", function(e) {
                    for (var i, n, r, s, a, o, l = (e = e || {}).taper || "none", u = [], h = 0, c = 0 | (e.points || 20), p = c, d = !1 !== e.randomize, m = !0 === e.clamp, _ = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = d ? Math.random() : 1 / c * p, n = _ ? _.getRatio(i) : i, "none" === l ? r = g : "out" === l ? (s = 1 - i, r = s * s * g) : "in" === l ? r = i * i * g : .5 > i ? (s = 2 * i, r = .5 * s * s * g) : (s = 2 * (1 - i), r = .5 * s * s * g), d ? n += Math.random() * r - .5 * r : p % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), u[h++] = { x: i, y: n };
                    for (u.sort(function(t, e) { return t.x - e.x }), o = new f(1, 1, null), p = c; --p > -1;) a = u[p], o = new f(a.x, a.y, o);
                    this._prev = new f(0, 0, 0 !== o.t ? o : o.next)
                }, !0), _ = i.prototype = new t, _.constructor = i, _.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, _.config = function(t) { return new i(t) }, i.ease = new i, c("Bounce", u("BounceOut", function(t) { return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }), u("BounceIn", function(t) { return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }), u("BounceInOut", function(t) { var e = .5 > t; return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5 })), c("Circ", u("CircOut", function(t) { return Math.sqrt(1 - (t -= 1) * t) }), u("CircIn", function(t) { return -(Math.sqrt(1 - t * t) - 1) }), u("CircInOut", function(t) { return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) })), n = function(e, i, n) {
                    var r = l("easing." + e, function(t, e) { this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2 }, !0),
                        s = r.prototype = new t;
                    return s.constructor = r, s.getRatio = i, s.config = function(t, e) { return new r(t, e) }, r
                }, c("Elastic", n("ElasticOut", function(t) { return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1 }, .3), n("ElasticIn", function(t) { return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) }, .3), n("ElasticInOut", function(t) { return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1 }, .45)), c("Expo", u("ExpoOut", function(t) { return 1 - Math.pow(2, -10 * t) }), u("ExpoIn", function(t) { return Math.pow(2, 10 * (t - 1)) - .001 }), u("ExpoInOut", function(t) { return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1))) })), c("Sine", u("SineOut", function(t) { return Math.sin(t * o) }), u("SineIn", function(t) { return 1 - Math.cos(t * o) }), u("SineInOut", function(t) { return -.5 * (Math.cos(Math.PI * t) - 1) })), l("easing.EaseLookup", { find: function(e) { return t.map[e] } }, !0), h(r.SlowMo, "SlowMo", "ease,"), h(i, "RoughEase", "ease,"), h(e, "SteppedEase", "ease,"), d
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var n, r, s, a, o, l = function(t) {
                    var e, n = t.split("."),
                        r = i;
                    for (e = 0; n.length > e; e++) r[n[e]] = r = r[n[e]] || {};
                    return r
                },
                u = l("com.greensock"),
                h = 1e-10,
                c = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                f = function() {},
                p = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) { return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e) }
                }(),
                d = {},
                m = function(e, n, r, s) {
                    this.sc = d[e] ? d[e].sc : [], d[e] = this, this.gsClass = null, this.func = r;
                    var a = [];
                    this.check = function(o) {
                        for (var u, h, c, f, p, _ = n.length, g = _; --_ > -1;)(u = d[n[_]] || new m(n[_], [])).gsClass ? (a[_] = u.gsClass, g--) : o && u.sc.push(this);
                        if (0 === g && r)
                            for (h = ("com.greensock." + e).split("."), c = h.pop(), f = l(h.join("."))[c] = this.gsClass = r.apply(r, a), s && (i[c] = f, p = "undefined" != typeof module && module.exports, !p && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + e.split(".").pop(), [], function() { return f }) : "TweenMax" === e && p && (module.exports = f)), _ = 0; this.sc.length > _; _++) this.sc[_].check()
                    }, this.check(!0)
                },
                _ = t._gsDefine = function(t, e, i, n) { return new m(t, e, i, n) },
                g = u._class = function(t, e, i) { return e = e || function() {}, _(t, [], function() { return e }, i), e };
            _.globals = i;
            var v = [0, 0, 1, 1],
                y = [],
                x = g("easing.Ease", function(t, e, i, n) { this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? v.concat(e) : v }, !0),
                b = x.map = {},
                T = x.register = function(t, e, i, n) {
                    for (var r, s, a, o, l = e.split(","), h = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                        for (s = l[h], r = n ? g("easing." + s, null, !0) : u.easing[s] || {}, a = c.length; --a > -1;) o = c[a], b[s + "." + o] = b[o + s] = r[o] = t.getRatio ? t : t[o] || new t
                };
            for ((s = x.prototype)._calcEnd = !1, s.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, r = (n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --r > -1;) s = n[r] + ",Power" + r, T(new x(null, null, 1, r), s, "easeOut", !0), T(new x(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), T(new x(null, null, 3, r), s, "easeInOut");
            b.linear = u.easing.Linear.easeIn, b.swing = u.easing.Quad.easeInOut;
            var w = g("events.EventDispatcher", function(t) { this._listeners = {}, this._eventTarget = t || this });
            (s = w.prototype).addEventListener = function(t, e, i, n, r) {
                r = r || 0;
                var s, l, u = this._listeners[t],
                    h = 0;
                for (null == u && (this._listeners[t] = u = []), l = u.length; --l > -1;) s = u[l], s.c === e && s.s === i ? u.splice(l, 1) : 0 === h && r > s.pr && (h = l + 1);
                u.splice(h, 0, { c: e, s: i, up: n, pr: r }), this !== a || o || a.wake()
            }, s.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, s.dispatchEvent = function(t) {
                var e, i, n, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;)(n = r[e]) && (n.up ? n.c.call(n.s || i, { type: t, target: i }) : n.c.call(n.s || i))
            };
            var k = t.requestAnimationFrame,
                P = t.cancelAnimationFrame,
                C = Date.now || function() { return (new Date).getTime() },
                S = C();
            for (r = (n = ["ms", "moz", "webkit", "o"]).length; --r > -1 && !k;) k = t[n[r] + "RequestAnimationFrame"], P = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
            g("Ticker", function(t, e) {
                var i, n, r, s, l, u = this,
                    c = C(),
                    p = !1 !== e && k,
                    d = 500,
                    m = 33,
                    _ = function(t) {
                        var e, a, o = C() - S;
                        o > d && (c += o - m), S += o, u.time = (S - c) / 1e3, e = u.time - l, (!i || e > 0 || !0 === t) && (u.frame++, l += e + (e >= s ? .004 : s - e), a = !0), !0 !== t && (r = n(_)), a && u.dispatchEvent("tick")
                    };
                w.call(u), u.time = u.frame = 0, u.tick = function() { _(!0) }, u.lagSmoothing = function(t, e) { d = t || 1 / h, m = Math.min(e, d, 0) }, u.sleep = function() { null != r && (p && P ? P(r) : clearTimeout(r), n = f, r = null, u === a && (o = !1)) }, u.wake = function() { null !== r ? u.sleep() : u.frame > 10 && (S = C() - d + 5), n = 0 === i ? f : p && k ? k : function(t) { return setTimeout(t, 0 | 1e3 * (l - u.time) + 1) }, u === a && (o = !0), _(2) }, u.fps = function(t) { return arguments.length ? (i = t, s = 1 / (i || 60), l = this.time + s, void u.wake()) : i }, u.useRAF = function(t) { return arguments.length ? (u.sleep(), p = t, void u.fps(i)) : p }, u.fps(t), setTimeout(function() { p && 5 > u.frame && u.useRAF(!1) }, 1500)
            }), (s = u.Ticker.prototype = new u.events.EventDispatcher).constructor = u.Ticker;
            var O = g("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, Y) {
                    o || a.wake();
                    var i = this.vars.useFrames ? $ : Y;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = O.ticker = new u.Ticker, (s = O.prototype)._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
            var A = function() { o && C() - S > 2e3 && a.wake(), setTimeout(A, 2e3) };
            A(), s.play = function(t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, s.pause = function(t, e) { return null != t && this.seek(t, e), this.paused(!0) }, s.resume = function(t, e) { return null != t && this.seek(t, e), this.paused(!1) }, s.seek = function(t, e) { return this.totalTime(Number(t), !1 !== e) }, s.restart = function(t, e) { return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0) }, s.reverse = function(t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, s.render = function() {}, s.invalidate = function() { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this }, s.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, s._enabled = function(t, e) { return o || a.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1 }, s._kill = function() { return this._enabled(!1, !1) }, s.kill = function(t, e) { return this._kill(t, e), this }, s._uncache = function(t) { for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline; return this }, s._swapSelfInParams = function(t) { for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this); return i }, s._callback = function(t) {
                var e = this.vars;
                e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || y)
            }, s.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, s.delay = function(t) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay }, s.duration = function(t) { return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration) }, s.totalDuration = function(t) { return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration }, s.time = function(t, e) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time }, s.totalTime = function(t, e, i) {
                if (o || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (I.length && Q(), this.render(t, e, !1), I.length && Q())
                }
                return this
            }, s.progress = s.totalProgress = function(t, e) { var i = this.duration(); return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio }, s.startTime = function(t) { return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime }, s.endTime = function(t) { return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale }, s.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || h, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, s.reversed = function(t) { return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, s.paused = function(t) { if (!arguments.length) return this._paused; var e, i, n = this._timeline; return t != this._paused && n && (o || t || a.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this };
            var D = g("core.SimpleTimeline", function(t) { O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0 });
            (s = D.prototype = new O).constructor = D, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function(t, e) {
                var i, n;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (n = t._startTime; i && i._startTime > n;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, s._remove = function(t, e) { return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }, s.render = function(t, e, i) { var n, r = this._first; for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n }, s.rawTime = function() { return o || a.wake(), this._totalTime };
            var E = g("TweenLite", function(e, i, n) {
                    if (O.call(this, i, n), this.render = E.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : E.selector(e) || e;
                    var r, s, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? W[E.defaultOverwrite] : "number" == typeof l ? l >> 0 : W[l], (o || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
                        for (this._targets = a = c(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) s = a[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(c(s))) : (this._siblings[r] = G(s, this, !1), 1 === l && this._siblings[r].length > 1 && J(s, this, null, 1, this._siblings[r])) : "string" == typeof(s = a[r--] = E.selector(s)) && a.splice(r + 1, 1) : a.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = G(e, this, !1), 1 === l && this._siblings.length > 1 && J(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -h, this.render(-this._delay))
                }, !0),
                R = function(e) { return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType) },
                N = function(t, e) {
                    var i, n = {};
                    for (i in t) V[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!q[i] || q[i] && q[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            (s = E.prototype = new O).constructor = E, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, E.version = "1.18.0", E.defaultEase = s._ease = new x(null, null, 1, 1), E.defaultOverwrite = "auto", E.ticker = a, E.autoSleep = 120, E.lagSmoothing = function(t, e) { a.lagSmoothing(t, e) }, E.selector = t.$ || t.jQuery || function(e) { var i = t.$ || t.jQuery; return i ? (E.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) };
            var I = [],
                M = {},
                L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                B = function(t) { for (var e, i = this._firstPT; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next },
                F = function(t, e, i, n) {
                    var r, s, a, o, l, u, h, c = [t, e],
                        f = 0,
                        p = "",
                        d = 0;
                    for (c.start = t, i && (i(c), t = c[0], e = c[1]), c.length = 0, r = t.match(L) || [], s = e.match(L) || [], n && (n._next = null, n.blob = 1, c._firstPT = n), l = s.length, o = 0; l > o; o++) h = s[o], u = e.substr(f, e.indexOf(h, f) - f), p += u || !o ? u : ",", f += u.length, d ? d = (d + 1) % 5 : "rgba(" === u.substr(-5) && (d = 1), h === r[o] || o >= r.length ? p += h : (p && (c.push(p), p = ""), a = parseFloat(r[o]), c.push(a), c._firstPT = { _next: c._firstPT, t: c, p: c.length - 1, s: a, c: ("=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * parseFloat(h.substr(2)) : parseFloat(h) - a) || 0, f: 0, r: d && 4 > d }), f += h.length;
                    return (p += e.substr(f)) && c.push(p), c.setRatio = B, c
                },
                j = function(t, e, i, n, r, s, a, o) {
                    var l, u, h = "get" === i ? t[e] : i,
                        c = typeof t[e],
                        f = "string" == typeof n && "=" === n.charAt(1),
                        p = { t: t, p: e, s: h, f: "function" === c, pg: 0, n: r || e, r: s, pr: 0, c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - h || 0 };
                    return "number" !== c && ("function" === c && "get" === i && (u = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), p.s = h = a ? t[u](a) : t[u]()), "string" == typeof h && (a || isNaN(h)) ? (p.fp = a, l = F(h, n, o || E.defaultStringFilter, p), p = { t: l, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: r || e, pr: 0 }) : f || (p.c = parseFloat(n) - parseFloat(h) || 0)), p.c ? ((p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p) : void 0
                },
                z = E._internals = { isArray: p, isSelector: R, lazyTweens: I, blobDif: F },
                q = E._plugins = {},
                X = z.tweenLookup = {},
                H = 0,
                V = z.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1 },
                W = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
                $ = O._rootFramesTimeline = new D,
                Y = O._rootTimeline = new D,
                U = 30,
                Q = z.lazyRender = function() {
                    var t, e = I.length;
                    for (M = {}; --e > -1;)(t = I[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    I.length = 0
                };
            Y._startTime = a.time, $._startTime = a.frame, Y._active = $._active = !0, setTimeout(Q, 1), O._updateRoot = E.render = function() {
                var t, e, i;
                if (I.length && Q(), Y.render((a.time - Y._startTime) * Y._timeScale, !1, !1), $.render((a.frame - $._startTime) * $._timeScale, !1, !1), I.length && Q(), a.frame >= U) {
                    U = a.frame + (parseInt(E.autoSleep, 10) || 120);
                    for (i in X) {
                        for (t = (e = X[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete X[i]
                    }
                    if ((!(i = Y._first) || i._paused) && E.autoSleep && !$._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", O._updateRoot);
            var G = function(t, e, i) {
                    var n, r, s = t._gsTweenID;
                    if (X[s || (t._gsTweenID = s = "t" + H++)] || (X[s] = { target: t, tweens: [] }), e && (n = X[s].tweens, n[r = n.length] = e, i))
                        for (; --r > -1;) n[r] === e && n.splice(r, 1);
                    return X[s].tweens
                },
                Z = function(t, e, i, n) { var r, s, a = t.vars.onOverwrite; return a && (r = a(t, e, i, n)), (a = E.onOverwrite) && (s = a(t, e, i, n)), !1 !== r && !1 !== s },
                J = function(t, e, i, n, r) {
                    var s, a, o, l;
                    if (1 === n || n >= 4) {
                        for (l = r.length, s = 0; l > s; s++)
                            if ((o = r[s]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                            else if (5 === n) break;
                        return a
                    }
                    var u, c = e._startTime + h,
                        f = [],
                        p = 0,
                        d = 0 === e._duration;
                    for (s = r.length; --s > -1;)(o = r[s]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (u = u || K(e, 0, d), 0 === K(o, u, d) && (f[p++] = o)) : c >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > c && ((d || !o._initted) && 2e-10 >= c - o._startTime || (f[p++] = o)));
                    for (s = p; --s > -1;)
                        if (o = f[s], 2 === n && o._kill(i, t, e) && (a = !0), 2 !== n || !o._firstPT && o._initted) {
                            if (2 !== n && !Z(o, e)) continue;
                            o._enabled(!1, !1) && (a = !0)
                        }
                    return a
                },
                K = function(t, e, i) {
                    for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                        if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return s /= r, s > e ? s - e : i && s === e || !t._initted && 2 * h > s - e ? h : (s += t.totalDuration() / t._timeScale / r) > e + h ? 0 : s - e - h
                };
            s._init = function() {
                var t, e, i, n, r, s = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    l = !!s.immediateRender,
                    u = s.ease;
                if (s.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (n in s.startAt) r[n] = s.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && !1 !== s.lazy, r.startAt = r.delay = null, this._startAt = E.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return
                } else if (s.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else { 0 !== this._time && (l = !1), i = {}; for (n in s) V[n] && "autoCSS" !== n || (i[n] = s[n]); if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && !1 !== s.lazy, i.immediateRender = l, this._startAt = E.to(this.target, 0, i), l) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null) }
                if (this._ease = u = u ? u instanceof x ? u : "function" == typeof u ? new x(u, s.easeParams) : b[u] || E.defaultEase : E.defaultEase, s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (e && E._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = s.onUpdate, this._initted = !0
            }, s._initProps = function(e, i, n, r) {
                var s, a, o, l, u, h;
                if (null == e) return !1;
                M[e._gsTweenID] && Q(), this.vars.css || e.style && e !== t && e.nodeType && q.css && !1 !== this.vars.autoCSS && N(this.vars, e);
                for (s in this.vars)
                    if (h = this.vars[s], V[s]) h && (h instanceof Array || h.push && p(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[s] = h = this._swapSelfInParams(h, this));
                    else if (q[s] && (l = new q[s])._onInitTween(e, this.vars[s], this)) {
                    for (this._firstPT = u = { _next: this._firstPT, t: l, p: "setRatio", s: 0, c: 1, f: 1, n: s, pg: 1, pr: l._priority }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
                } else i[s] = j.call(this, e, s, "get", h, s, 0, null, this.vars.stringFilter);
                return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && J(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (M[e._gsTweenID] = !0), o)
            }, s.render = function(t, e, i) {
                var n, r, s, a, o = this._time,
                    l = this._duration,
                    u = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > u || u === h && "isPause" !== this.data) && u !== t && (i = !0, u > h && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || u === t ? t : h);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && u > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (u !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || u === t ? t : h)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var c = t / l,
                        f = this._easeType,
                        p = this._easePower;
                    (1 === f || 3 === f && c >= .5) && (c = 1 - c), 3 === f && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), this.ratio = 1 === f ? 1 - c : 2 === f ? c : .5 > t / l ? c / 2 : 1 - c / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = u, I.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || (this._time !== o || n) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === h && a !== h && (this._rawPrevTime = 0))
                }
            }, s._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : E.selector(e) || e;
                var n, r, s, a, o, l, u, h, c, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((p(e) || R(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) { o = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all"; break }
                    } else {
                        if (e !== this.target) return !1;
                        o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (o) { if (u = t || o, h = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (E.onOverwrite || this.vars.onOverwrite)) { for (s in u) o[s] && (c || (c = []), c.push(s)); if ((c || !t) && !Z(this, i, e, c)) return !1 } for (s in u)(a = o[s]) && (f && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(u) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[s]), h && (r[s] = 1);!this._firstPT && this._initted && this._enabled(!1, !1) }
                }
                return l
            }, s.invalidate = function() { return this._notifyPluginsOfEnabled && E._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -h, this.render(-this._delay)), this }, s._enabled = function(t, e) {
                if (o || a.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = G(n[i], this, !0);
                    else this._siblings = G(this.target, this, !0)
                }
                return O.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && E._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, E.to = function(t, e, i) { return new E(t, e, i) }, E.from = function(t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new E(t, e, i) }, E.fromTo = function(t, e, i, n) { return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new E(t, e, n) }, E.delayedCall = function(t, e, i, n, r) { return new E(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: n, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: r, overwrite: 0 }) }, E.set = function(t, e) { return new E(t, 0, e) }, E.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : E.selector(t) || t;
                var i, n, r, s;
                if ((p(t) || R(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(E.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
                } else
                    for (n = G(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, E.killTweensOf = E.killDelayedCallsTo = function(t, e, i) { "object" == typeof e && (i = e, e = !1); for (var n = E.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t) };
            var tt = g("plugins.TweenPlugin", function(t, e) { this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = tt.prototype }, !0);
            if (s = tt.prototype, tt.version = "1.18.0", tt.API = 2, s._firstPT = null, s._addTween = j, s.setRatio = B, s._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, s._roundProps = function(t, e) { for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next }, E._onPluginEvent = function(t, e) {
                    var i, n, r, s, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, n = r; n && n.pr > o.pr;) n = n._next;
                            (o._prev = n ? n._prev : s) ? o._prev._next = o: r = o, (o._next = n) ? n._prev = o : s = o, o = a
                        }
                        o = e._firstPT = r
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, tt.activate = function(t) { for (var e = t.length; --e > -1;) t[e].API === tt.API && (q[(new t[e])._propName] = t[e]); return !0 }, _.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        r = t.overwriteProps,
                        s = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_roundProps", initAll: "_onInitAllProps" },
                        a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() { tt.call(this, i, n), this._overwriteProps = r || [] }, !0 === t.global),
                        o = a.prototype = new tt(i);
                    o.constructor = a, a.API = t.API;
                    for (e in s) "function" == typeof t[e] && (o[s[e]] = t[e]);
                    return a.version = t.version, tt.activate([a]), a
                }, n = t._gsQueue) { for (r = 0; n.length > r; r++) n[r](); for (s in d) d[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s) } o = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window), document.body.onload = function() {
        function t(t, e, i, n, r, s) { t.to(e.x2.baseVal, i, { value: n, ease: Quart.easeInOut }, s), t.to(e.y2.baseVal, i, { value: r, ease: Quart.easeInOut }, s), t.to(e.x1.baseVal, i, { value: n, ease: Quart.easeInOut }, s + i), t.to(e.y1.baseVal, i, { value: r, ease: Quart.easeInOut }, s + i), t.to(e, .01, { opacity: 1 }, s), t.to(e, .01, { opacity: 0 }, s + 2 * i) }

        function e(t, e, i, n, r, s, a, o) { t.to(e.x1.baseVal, i, { value: n, ease: Quart.easeInOut }, o), t.to(e.y1.baseVal, i, { value: r, ease: Quart.easeInOut }, o), t.to(e.x2.baseVal, i, { value: s, ease: Quart.easeInOut }, o), t.to(e.y2.baseVal, i, { value: a, ease: Quart.easeInOut }, o), t.to(e.x1.baseVal, i, { value: s, ease: Quart.easeInOut }, o + i), t.to(e.y1.baseVal, i, { value: a, ease: Quart.easeInOut }, o + i), t.to(e, .01, { opacity: 1 }, o), t.to(e, .01, { opacity: 0 }, o + 2 * i) }

        function i(t, e, i, n, r) { t.to(e.rx.baseVal, i, { value: n, ease: Quart.easeOut }, r), t.to(e.ry.baseVal, i, { value: n, ease: Quart.easeOut }, r), t.to(e.rx.baseVal, i, { value: 0, ease: Quart.easeIn }, r + i), t.to(e.ry.baseVal, i, { value: 0, ease: Quart.easeIn }, r + i) }

        function n(t, e, i, n, r, s, a, o) { t.to(e.x2.baseVal, i, { value: n, ease: Quad.easeInOut }, o), t.to(e.y2.baseVal, i, { value: r, ease: Quad.easeInOut }, o), t.to(e.x1.baseVal, i, { value: s, ease: Quad.easeInOut }, o + i), t.to(e.y1.baseVal, i, { value: a, ease: Quad.easeInOut }, o + i) }

        function r(t, e) { e.x3 ? t.setAttribute("points", e.x0 + "," + e.y0 + " " + e.x1 + "," + e.y1 + " " + e.x2 + "," + e.y2 + " " + e.x3 + "," + e.y3) : t.setAttribute("points", e.x0 + "," + e.y0 + " " + e.x1 + "," + e.y1 + " " + e.x2 + "," + e.y2) }
        var s = document.getElementById("t1"),
            a = document.getElementById("t2"),
            o = [document.getElementById("t2d1"), document.getElementById("t2d2"), document.getElementById("t2d3")],
            l = [document.getElementById("t1d1"), document.getElementById("t1d2")],
            u = document.getElementById("h1"),
            h = document.getElementById("h2"),
            c = [document.getElementById("h2d1"), document.getElementById("h2d2"), document.getElementById("h2d3")],
            f = document.getElementById("h3"),
            p = [document.getElementById("h3d1"), document.getElementById("h3d2"), document.getElementById("h3d3"), document.getElementById("h3d4")],
            d = document.getElementById("a1"),
            m = document.getElementById("a2"),
            _ = [document.getElementById("a2d1"), document.getElementById("a2d2"), document.getElementById("a2d3")],
            g = document.getElementById("n1"),
            v = [document.getElementById("n1d1"), document.getElementById("n1d2"), document.getElementById("n1d3"), document.getElementById("n1d4"), document.getElementById("n1d5")],
            y = document.getElementById("k1"),
            x = (document.getElementById("k1d1"), document.getElementById("k2")),
            b = [document.getElementById("k2d1"), document.getElementById("k2d2"), document.getElementById("k2d3"), document.getElementById("k2d4")],
            T = document.getElementById("y1"),
            w = [document.getElementById("y1d1"), document.getElementById("y1d2")],
            k = document.getElementById("y2"),
            P = [document.getElementById("y2d1"), document.getElementById("y2d2")],
            C = document.getElementById("o1"),
            S = [document.getElementById("o1d1"), document.getElementById("o1d2"), document.getElementById("o1d3"), document.getElementById("o1d4")],
            O = document.getElementById("u1"),
            A = [document.getElementById("u1d1"), document.getElementById("u1d2")],
            D = document.getElementById("e1"),
            E = document.getElementById("e2"),
            R = [document.getElementById("e1d1"), document.getElementById("e1d2"), document.getElementById("e1d3")],
            N = (document.getElementById("text"), document.getElementsByTagName("tspan")),
            I = [document.getElementById("underline1"), document.getElementById("underline2"), document.getElementById("underline3"), document.getElementById("underline4")],
            M = new TimelineLite({ onComplete: function() { TweenLite.to(Z, .4, { opacity: 1 }) } }),
            L = new TimelineLite;
        L.to(a.x2.baseVal, .4, { value: 200.6, ease: Back.easeInOut }, 0).to(a.y2.baseVal, .4, { value: 58.6, ease: Back.easeInOut }, 0).to(s.y2.baseVal, .5, { value: 156.4, ease: Back.easeInOut }, .1).to(a, .01, { opacity: 1 }, 0).to(s, .01, { opacity: 1 }, .3), t(L, o[0], .2, 200, 51, .1), t(L, o[1], .2, 170, 48, .2), t(L, o[2], .2, 150, 44, .3), t(L, l[0], .2, 160, 159, .2), t(L, l[1], .2, 165, 130, .3), M.add(L, .5);
        var B = new TimelineLite;
        B.to(u.y2.baseVal, .5, { value: 145.4, ease: Back.easeInOut }, 0).to(h.x2.baseVal, .4, { value: 217.1, ease: Back.easeInOut }, .2).to(h.y2.baseVal, .4, { value: 102.6, ease: Back.easeInOut }, .2).to(f.y2.baseVal, .5, { value: 130.4, ease: Back.easeInOut }, .3).to(u, .01, { opacity: 1 }, 0).to(h, .01, { opacity: 1 }, .2).to(f, .01, { opacity: 1 }, .3), i(B, p[0], .25, 2, .2), i(B, p[1], .25, 2, .4), i(B, p[2], .25, 2, .6), i(B, p[3], .25, 2, .8), t(B, c[0], .3, 270, 93, .1), t(B, c[1], .3, 256, 104, .2), t(B, c[2], .3, 242, 114, .3), M.add(B, .9);
        var F = new TimelineLite;
        if (d.points[0]) F.to(d.points[0], .2, { x: 305.6, y: 138.6, ease: Quad.easeIn }, 0).to(d.points[0], .5, { x: 282.6, ease: Back.easeOut }, "a1").to(d.points[2], .2, { x: 305.6, y: 138.6, ease: Quad.easeIn }, 0).to(d.points[2], .5, { x: 330.6, ease: Back.easeOut }, "a1");
        else {
            var j = { x0: 305.6, y0: 51.6, x1: 305.6, y1: 51.6, x2: 305.6, y2: 51.6 };
            F.to(j, .2, { x0: 305.6, y0: 138.6, x2: 305.6, y2: 138.6, ease: Quad.easeIn, onUpdate: function() { r(d, j) } }, 0).to(j, .5, { x0: 282.6, x2: 330.6, ease: Back.easeOut, onUpdate: function() { r(d, j) } }, "a1")
        }
        F.to(m.x1.baseVal, .4, { value: 319.6, ease: Back.easeInOut }, .2).to(d, .01, { opacity: 1 }, 0).to(m, .01, { opacity: 1 }, .2), e(F, _[0], .2, 295, 120, 319, 120, .2), e(F, _[1], .2, 293, 127, 321, 127, .3), e(F, _[2], .2, 291, 134, 322, 134, .4), M.add(F, 1.2);
        var z = new TimelineLite;
        if (g.points[1]) z.to(g.points[1], .2, { y: 51.6, ease: Quad.easeOut }, 0).to(g.points[3], .2, { y: 51.6, ease: Quad.easeOut }, 0).to(g.points[2], .2, { x: 391.6, y: 138.6 }, "n1").to(g.points[3], .2, { x: 391.6, y: 62.4, ease: Quad.easeOut }, .4);
        else {
            var q = { x0: 352, y0: 147, x1: 358, y1: 147, x2: 363, y2: 147, x3: 365, y3: 74 };
            z.to(q, .2, { y1: 51.6, y3: 51.6, ease: Quad.easeOut, onUpdate: function() { r(g, q) } }, 0).to(q, .2, { x2: 391.6, x3: 391.6, y2: 138.6, y3: 62.4, ease: Quad.easeOut, onUpdate: function() { r(g, q) } }, .2)
        }
        z.to(g, .01, { opacity: 1 }, 0), t(z, v[0], .3, 352, 70, .1), t(z, v[1], .3, 358, 102, .2), t(z, v[2], .3, 363, 124, .3), t(z, v[3], .3, 385, 80, .4), t(z, v[4], .3, 385, 74, .5), M.add(z, 1.5);
        var X = new TimelineLite;
        if (x.points[0]) X.to(x.points[0], .2, { x: 452.6, y: 51.6, ease: Back.easeOut }, .2).to(x.points[2], .2, { x: 452.6, y: 145.6, ease: Back.easeOut }, .3);
        else {
            var H = { x0: 414.1, y0: 97.6, x1: 414.1, y1: 97.6, x2: 414.1, y2: 97.6 };
            X.to(H, .2, { x0: 452.6, y0: 51.6, x2: 452.6, y2: 145.6, ease: Back.easeOut, onUpdate: function() { r(x, H) } }, .2)
        }
        X.to(y.y2.baseVal, .4, { value: 138.4, ease: Back.easeInOut }, 0).to(y, .01, { opacity: 1 }, 0).to(x, .01, { opacity: 1 }, .2), t(X, k1d1, .3, 419, 139, .1), i(X, b[0], .25, 2, .2), i(X, b[1], .25, 2, .4), i(X, b[2], .25, 2, .6), i(X, b[3], .25, 2, .8), M.add(X, 1.7);
        var V = new TimelineLite;
        V.to(T.x2.baseVal, .3, { value: 493.6, ease: Back.easeOut }, 0).to(T.y2.baseVal, .3, { value: 112.6, ease: Back.easeOut }, 0).to(k.x2.baseVal, .4, { value: 472.6, ease: Back.easeOut }, .15).to(k.y2.baseVal, .4, { value: 168.6, ease: Back.easeOut }, .15).to(T, .01, { opacity: 1 }, 0).to(k, .01, { opacity: 1 }, .15), t(V, w[0], .3, 470, 155, .3), t(V, w[1], .3, 478, 120, .4), i(V, P[0], .25, 2, .1), i(V, P[1], .25, 2, .2), M.add(V, 2);
        var W = new TimelineLite;
        C.style.opacity = 1, W.to(C.rx.baseVal, .5, { value: 27, ease: Back.easeOut }, 0).to(C.ry.baseVal, .5, { value: 40.5, ease: Back.easeOut }, 0).to(S[0].rx.baseVal, .6, { value: 27, ease: Back.easeOut }, .1).to(S[0].ry.baseVal, .6, { value: 40.5, ease: Back.easeOut }, .1).to(S[1].rx.baseVal, .6, { value: 27, ease: Quad.easeOut }, .2).to(S[1].ry.baseVal, .6, { value: 40.5, ease: Quad.easeOut }, .2).to(S[2].rx.baseVal, .6, { value: 27, ease: Quad.easeOut }, .3).to(S[2].ry.baseVal, .6, { value: 40.5, ease: Quad.easeOut }, .3).to(S[3].rx.baseVal, .6, { value: 27, ease: Quad.easeOut }, .4).to(S[3].ry.baseVal, .6, { value: 40.5, ease: Quad.easeOut }, .4), M.add(W, 2.2);
        var $ = new TimelineLite,
            Y = O.getTotalLength();
        O.style.opacity = 1, O.style.strokeDasharray = Y, O.style.strokeDashoffset = Y, $.to(O, .5, { strokeDashoffset: 0, ease: Quad.easeInOut }, 0), t($, A[0], .3, 626, 60, .3), t($, A[1], .3, 620, 60, .4), M.add($, 2.4);
        var U = new TimelineLite;
        E.style.opacity = 1, U.to(E.rx.baseVal, .3, { value: 6, ease: Back.easeOut }, .3).to(E.ry.baseVal, .3, { value: 6, ease: Back.easeOut }, .3).to(D.x2.baseVal, .3, { value: 658.6, ease: Back.easeInOut }, 0).to(D.y2.baseVal, .3, { value: 130.6, ease: Back.easeInOut }, 0).to(D, .01, { opacity: 1 }, 0), t(U, R[0], .3, 653, 118, .1), t(U, R[1], .3, 650, 110, .2), t(U, R[2], .3, 673, 86, .3), M.add(U, 2.6);
        var Q = new TimelineLite;
        N[0].dx.baseVal[0] ? (Q.to(N[0].dx.baseVal[0], .6, { value: 0, ease: Cubic.easeOut }, 1), Q.to(N[0].dy.baseVal[0], .6, { value: -1, ease: Cubic.easeOut }, 1)) : (N[0].setAttribute("dx", "0"), N[0].setAttribute("dy", "0"));
        for (var G = N.length - 1; G >= 0; G--) Q.to(N[G], .3, { opacity: 1 }, 1 + .05 * (N.length - 1 - G));
        n(Q, I[0], .5, 664, 153, 370, 167, .2), n(Q, I[1], .51, 670, 160, 370, 175, .3), n(Q, I[2], .52, 678, 168, 370, 183, .4), n(Q, I[3], .53, 686, 176, 370, 191, .5), M.add(Q, 2), M.timescale = .6, M.play();
        var Z = document.getElementById("play");
        Z.onclick = function() { M.restart() };
        var J = document.getElementById("svg");
        window.innerWidth < 600 && (J.style.width = window.innerWidth + "px")
    },
    function(t, e) { "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) { if (!t.document) throw new Error("jQuery requires a window with a document"); return e(t) } : e(t) }("undefined" != typeof window ? window : this, function(t, e) {
        function i(t) {
            var e = t.length,
                i = J.type(t);
            return "function" !== i && !J.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
        }

        function n(t, e, i) {
            if (J.isFunction(e)) return J.grep(t, function(t, n) { return !!e.call(t, n, t) !== i });
            if (e.nodeType) return J.grep(t, function(t) { return t === e !== i });
            if ("string" == typeof e) {
                if (at.test(e)) return J.filter(e, t, i);
                e = J.filter(e, t)
            }
            return J.grep(t, function(t) { return W.call(e, t) >= 0 !== i })
        }

        function r(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function s(t) { var e = ft[t] = {}; return J.each(t.match(ct) || [], function(t, i) { e[i] = !0 }), e }

        function a() { G.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1), J.ready() }

        function o() { Object.defineProperty(this.cache = {}, 0, { get: function() { return {} } }), this.expando = J.expando + o.uid++ }

        function l(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(vt, "-$1").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) { try { i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : gt.test(i) ? J.parseJSON(i) : i) } catch (t) {} _t.set(t, e, i) } else i = void 0;
            return i
        }

        function u() { return !0 }

        function h() { return !1 }

        function c() { try { return G.activeElement } catch (t) {} }

        function f(t, e) { return J.nodeName(t, "table") && J.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t }

        function p(t) { return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t }

        function d(t) { var e = It.exec(t.type); return e ? t.type = e[1] : t.removeAttribute("type"), t }

        function m(t, e) { for (var i = 0, n = t.length; n > i; i++) mt.set(t[i], "globalEval", !e || mt.get(e[i], "globalEval")) }

        function _(t, e) {
            var i, n, r, s, a, o, l, u;
            if (1 === e.nodeType) {
                if (mt.hasData(t) && (s = mt.access(t), a = mt.set(e, s), u = s.events)) {
                    delete a.handle, a.events = {};
                    for (r in u)
                        for (i = 0, n = u[r].length; n > i; i++) J.event.add(e, r, u[r][i])
                }
                _t.hasData(t) && (o = _t.access(t), l = J.extend({}, o), _t.set(e, l))
            }
        }

        function g(t, e) { var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : []; return void 0 === e || e && J.nodeName(t, e) ? J.merge([t], i) : i }

        function v(t, e) { var i = e.nodeName.toLowerCase(); "input" === i && Tt.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue) }

        function y(e, i) {
            var n, r = J(i.createElement(e)).appendTo(i.body),
                s = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(r[0])) ? n.display : J.css(r[0], "display");
            return r.detach(), s
        }

        function x(t) {
            var e = G,
                i = Ft[t];
            return i || ("none" !== (i = y(t, e)) && i || (Bt = (Bt || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), (e = Bt[0].contentDocument).write(), e.close(), i = y(t, e), Bt.detach()), Ft[t] = i), i
        }

        function b(t, e, i) { var n, r, s, a, o = t.style; return (i = i || qt(t)) && (a = i.getPropertyValue(e) || i[e]), i && ("" !== a || J.contains(t.ownerDocument, t) || (a = J.style(t, e)), zt.test(a) && jt.test(e) && (n = o.width, r = o.minWidth, s = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = i.width, o.width = n, o.minWidth = r, o.maxWidth = s)), void 0 !== a ? a + "" : a }

        function T(t, e) { return { get: function() { return t() ? void delete this.get : (this.get = e).apply(this, arguments) } } }

        function w(t, e) {
            if (e in t) return e;
            for (var i = e[0].toUpperCase() + e.slice(1), n = e, r = Yt.length; r--;)
                if ((e = Yt[r] + i) in t) return e;
            return n
        }

        function k(t, e, i) { var n = Ht.exec(e); return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e }

        function P(t, e, i, n, r) { for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > s; s += 2) "margin" === i && (a += J.css(t, i + xt[s], !0, r)), n ? ("content" === i && (a -= J.css(t, "padding" + xt[s], !0, r)), "margin" !== i && (a -= J.css(t, "border" + xt[s] + "Width", !0, r))) : (a += J.css(t, "padding" + xt[s], !0, r), "padding" !== i && (a += J.css(t, "border" + xt[s] + "Width", !0, r))); return a }

        function C(t, e, i) {
            var n = !0,
                r = "width" === e ? t.offsetWidth : t.offsetHeight,
                s = qt(t),
                a = "border-box" === J.css(t, "boxSizing", !1, s);
            if (0 >= r || null == r) {
                if ((0 > (r = b(t, e, s)) || null == r) && (r = t.style[e]), zt.test(r)) return r;
                n = a && (Q.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + P(t, e, i || (a ? "border" : "content"), n, s) + "px"
        }

        function S(t, e) { for (var i, n, r, s = [], a = 0, o = t.length; o > a; a++)(n = t[a]).style && (s[a] = mt.get(n, "olddisplay"), i = n.style.display, e ? (s[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && bt(n) && (s[a] = mt.access(n, "olddisplay", x(n.nodeName)))) : (r = bt(n), "none" === i && r || mt.set(n, "olddisplay", r ? i : J.css(n, "display")))); for (a = 0; o > a; a++)(n = t[a]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[a] || "" : "none")); return t }

        function O(t, e, i, n, r) { return new O.prototype.init(t, e, i, n, r) }

        function A() { return setTimeout(function() { Ut = void 0 }), Ut = J.now() }

        function D(t, e) {
            var i, n = 0,
                r = { height: t };
            for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = xt[n], r["margin" + i] = r["padding" + i] = t;
            return e && (r.opacity = r.width = t), r
        }

        function E(t, e, i) {
            for (var n, r = (te[e] || []).concat(te["*"]), s = 0, a = r.length; a > s; s++)
                if (n = r[s].call(i, e, t)) return n
        }

        function R(t, e) {
            var i, n, r, s, a;
            for (i in t)
                if (n = J.camelCase(i), r = e[n], s = t[i], J.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (a = J.cssHooks[n]) && "expand" in a) { s = a.expand(s), delete t[n]; for (i in s) i in t || (t[i] = s[i], e[i] = r) } else e[n] = r
        }

        function N(t, e, i) {
            var n, r, s = 0,
                a = Kt.length,
                o = J.Deferred().always(function() { delete l.elem }),
                l = function() { if (r) return !1; for (var e = Ut || A(), i = Math.max(0, u.startTime + u.duration - e), n = 1 - (i / u.duration || 0), s = 0, a = u.tweens.length; a > s; s++) u.tweens[s].run(n); return o.notifyWith(t, [u, n, i]), 1 > n && a ? i : (o.resolveWith(t, [u]), !1) },
                u = o.promise({
                    elem: t,
                    props: J.extend({}, e),
                    opts: J.extend(!0, { specialEasing: {} }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: Ut || A(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) { var n = J.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing); return u.tweens.push(n), n },
                    stop: function(e) {
                        var i = 0,
                            n = e ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n > i; i++) u.tweens[i].run(1);
                        return e ? o.resolveWith(t, [u, e]) : o.rejectWith(t, [u, e]), this
                    }
                }),
                h = u.props;
            for (R(h, u.opts.specialEasing); a > s; s++)
                if (n = Kt[s].call(u, t, h, u.opts)) return n;
            return J.map(h, E, u), J.isFunction(u.opts.start) && u.opts.start.call(t, u), J.fx.timer(J.extend(l, { elem: t, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function I(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, r = 0,
                    s = e.toLowerCase().match(ct) || [];
                if (J.isFunction(i))
                    for (; n = s[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function M(t, e, i, n) {
            function r(o) { var l; return s[o] = !0, J.each(t[o] || [], function(t, o) { var u = o(e, i, n); return "string" != typeof u || a || s[u] ? a ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1) }), l }
            var s = {},
                a = t === _e;
            return r(e.dataTypes[0]) || !s["*"] && r("*")
        }

        function L(t, e) { var i, n, r = J.ajaxSettings.flatOptions || {}; for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]); return n && J.extend(!0, t, n), t }

        function B(t, e, i) {
            for (var n, r, s, a, o = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
            if (n)
                for (r in o)
                    if (o[r] && o[r].test(n)) { l.unshift(r); break }
            if (l[0] in i) s = l[0];
            else { for (r in i) { if (!l[0] || t.converters[r + " " + l[0]]) { s = r; break } a || (a = r) } s = s || a }
            return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
        }

        function F(t, e, i, n) {
            var r, s, a, o, l, u = {},
                h = t.dataTypes.slice();
            if (h[1])
                for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
            for (s = h.shift(); s;)
                if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = h.shift())
                    if ("*" === s) s = l;
                    else if ("*" !== l && l !== s) {
                if (!(a = u[l + " " + s] || u["* " + s]))
                    for (r in u)
                        if ((o = r.split(" "))[1] === s && (a = u[l + " " + o[0]] || u["* " + o[0]])) {!0 === a ? a = u[r] : !0 !== u[r] && (s = o[0], h.unshift(o[1])); break }
                if (!0 !== a)
                    if (a && t.throws) e = a(e);
                    else try { e = a(e) } catch (t) { return { state: "parsererror", error: a ? t : "No conversion from " + l + " to " + s } }
            }
            return { state: "success", data: e }
        }

        function j(t, e, i, n) {
            var r;
            if (J.isArray(e)) J.each(e, function(e, r) { i || be.test(t) ? n(t, r) : j(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n) });
            else if (i || "object" !== J.type(e)) n(t, e);
            else
                for (r in e) j(t + "[" + r + "]", e[r], i, n)
        }

        function z(t) { return J.isWindow(t) ? t : 9 === t.nodeType && t.defaultView }
        var q = [],
            X = q.slice,
            H = q.concat,
            V = q.push,
            W = q.indexOf,
            $ = {},
            Y = $.toString,
            U = $.hasOwnProperty,
            Q = {},
            G = t.document,
            Z = "2.1.3",
            J = function(t, e) { return new J.fn.init(t, e) },
            K = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            tt = /^-ms-/,
            et = /-([\da-z])/gi,
            it = function(t, e) { return e.toUpperCase() };
        J.fn = J.prototype = {
            jquery: Z,
            constructor: J,
            selector: "",
            length: 0,
            toArray: function() { return X.call(this) },
            get: function(t) { return null != t ? 0 > t ? this[t + this.length] : this[t] : X.call(this) },
            pushStack: function(t) { var e = J.merge(this.constructor(), t); return e.prevObject = this, e.context = this.context, e },
            each: function(t, e) { return J.each(this, t, e) },
            map: function(t) { return this.pushStack(J.map(this, function(e, i) { return t.call(e, i, e) })) },
            slice: function() { return this.pushStack(X.apply(this, arguments)) },
            first: function() { return this.eq(0) },
            last: function() { return this.eq(-1) },
            eq: function(t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            end: function() { return this.prevObject || this.constructor(null) },
            push: V,
            sort: q.sort,
            splice: q.splice
        }, J.extend = J.fn.extend = function() {
            var t, e, i, n, r, s, a = arguments[0] || {},
                o = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[o] || {}, o++), "object" == typeof a || J.isFunction(a) || (a = {}), o === l && (a = this, o--); l > o; o++)
                if (null != (t = arguments[o]))
                    for (e in t) i = a[e], n = t[e], a !== n && (u && n && (J.isPlainObject(n) || (r = J.isArray(n))) ? (r ? (r = !1, s = i && J.isArray(i) ? i : []) : s = i && J.isPlainObject(i) ? i : {}, a[e] = J.extend(u, s, n)) : void 0 !== n && (a[e] = n));
            return a
        }, J.extend({
            expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) { throw new Error(t) },
            noop: function() {},
            isFunction: function(t) { return "function" === J.type(t) },
            isArray: Array.isArray,
            isWindow: function(t) { return null != t && t === t.window },
            isNumeric: function(t) { return !J.isArray(t) && t - parseFloat(t) + 1 >= 0 },
            isPlainObject: function(t) { return "object" === J.type(t) && !t.nodeType && !J.isWindow(t) && !(t.constructor && !U.call(t.constructor.prototype, "isPrototypeOf")) },
            isEmptyObject: function(t) { var e; for (e in t) return !1; return !0 },
            type: function(t) { return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? $[Y.call(t)] || "object" : typeof t },
            globalEval: function(t) {
                var e, i = eval;
                (t = J.trim(t)) && (1 === t.indexOf("use strict") ? (e = G.createElement("script"), e.text = t, G.head.appendChild(e).parentNode.removeChild(e)) : i(t))
            },
            camelCase: function(t) { return t.replace(tt, "ms-").replace(et, it) },
            nodeName: function(t, e) { return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase() },
            each: function(t, e, n) {
                var r = 0,
                    s = t.length,
                    a = i(t);
                if (n) {
                    if (a)
                        for (; s > r && !1 !== e.apply(t[r], n); r++);
                    else
                        for (r in t)
                            if (!1 === e.apply(t[r], n)) break
                } else if (a)
                    for (; s > r && !1 !== e.call(t[r], r, t[r]); r++);
                else
                    for (r in t)
                        if (!1 === e.call(t[r], r, t[r])) break;
                return t
            },
            trim: function(t) { return null == t ? "" : (t + "").replace(K, "") },
            makeArray: function(t, e) { var n = e || []; return null != t && (i(Object(t)) ? J.merge(n, "string" == typeof t ? [t] : t) : V.call(n, t)), n },
            inArray: function(t, e, i) { return null == e ? -1 : W.call(e, t, i) },
            merge: function(t, e) { for (var i = +e.length, n = 0, r = t.length; i > n; n++) t[r++] = e[n]; return t.length = r, t },
            grep: function(t, e, i) { for (var n = [], r = 0, s = t.length, a = !i; s > r; r++) !e(t[r], r) !== a && n.push(t[r]); return n },
            map: function(t, e, n) {
                var r, s = 0,
                    a = t.length,
                    o = [];
                if (i(t))
                    for (; a > s; s++) null != (r = e(t[s], s, n)) && o.push(r);
                else
                    for (s in t) null != (r = e(t[s], s, n)) && o.push(r);
                return H.apply([], o)
            },
            guid: 1,
            proxy: function(t, e) { var i, n, r; return "string" == typeof e && (i = t[e], e = t, t = i), J.isFunction(t) ? (n = X.call(arguments, 2), r = function() { return t.apply(e || this, n.concat(X.call(arguments))) }, r.guid = t.guid = t.guid || J.guid++, r) : void 0 },
            now: Date.now,
            support: Q
        }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) { $["[object " + e + "]"] = e.toLowerCase() });
        var nt = function(t) {
            function e(t, e, i, n) {
                var r, s, a, o, u, c, f, p, d, m;
                if ((e ? e.ownerDocument || e : F) !== D && A(e), e = e || D, i = i || [], o = e.nodeType, "string" != typeof t || !t || 1 !== o && 9 !== o && 11 !== o) return i;
                if (!n && R) {
                    if (11 !== o && (r = _t.exec(t)))
                        if (a = r[1]) { if (9 === o) { if (!(s = e.getElementById(a)) || !s.parentNode) return i; if (s.id === a) return i.push(s), i } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(a)) && L(e, s) && s.id === a) return i.push(s), i } else { if (r[2]) return G.apply(i, e.getElementsByTagName(t)), i; if ((a = r[3]) && y.getElementsByClassName) return G.apply(i, e.getElementsByClassName(a)), i }
                    if (y.qsa && (!N || !N.test(t))) {
                        if (p = f = B, d = e, m = 1 !== o && t, 1 === o && "object" !== e.nodeName.toLowerCase()) {
                            for (c = w(t), (f = e.getAttribute("id")) ? p = f.replace(vt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", u = c.length; u--;) c[u] = p + h(c[u]);
                            d = gt.test(t) && l(e.parentNode) || e, m = c.join(",")
                        }
                        if (m) try { return G.apply(i, d.querySelectorAll(m)), i } catch (t) {} finally { f || e.removeAttribute("id") }
                    }
                }
                return P(t.replace(at, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) { return e.push(i + " ") > x.cacheLength && delete t[e.shift()], t[i + " "] = n }
                var e = [];
                return t
            }

            function n(t) { return t[B] = !0, t }

            function r(t) { var e = D.createElement("div"); try { return !!t(e) } catch (t) { return !1 } finally { e.parentNode && e.parentNode.removeChild(e), e = null } }

            function s(t, e) { for (var i = t.split("|"), n = t.length; n--;) x.attrHandle[i[n]] = e }

            function a(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || W) - (~t.sourceIndex || W);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function o(t) { return n(function(e) { return e = +e, n(function(i, n) { for (var r, s = t([], i.length, e), a = s.length; a--;) i[r = s[a]] && (i[r] = !(n[r] = i[r])) }) }) }

            function l(t) { return t && void 0 !== t.getElementsByTagName && t }

            function u() {}

            function h(t) { for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value; return n }

            function c(t, e, i) {
                var n = e.dir,
                    r = i && "parentNode" === n,
                    s = z++;
                return e.first ? function(e, i, s) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || r) return t(e, i, s)
                } : function(e, i, a) {
                    var o, l, u = [j, s];
                    if (a) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || r) && t(e, i, a)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || r) { if (l = e[B] || (e[B] = {}), (o = l[n]) && o[0] === j && o[1] === s) return u[2] = o[2]; if (l[n] = u, u[2] = t(e, i, a)) return !0 }
                }
            }

            function f(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function p(t, i, n) { for (var r = 0, s = i.length; s > r; r++) e(t, i[r], n); return n }

            function d(t, e, i, n, r) { for (var s, a = [], o = 0, l = t.length, u = null != e; l > o; o++)(s = t[o]) && (!i || i(s, n, r)) && (a.push(s), u && e.push(o)); return a }

            function m(t, e, i, r, s, a) {
                return r && !r[B] && (r = m(r)), s && !s[B] && (s = m(s, a)), n(function(n, a, o, l) {
                    var u, h, c, f = [],
                        m = [],
                        _ = a.length,
                        g = n || p(e || "*", o.nodeType ? [o] : o, []),
                        v = !t || !n && e ? g : d(g, f, t, o, l),
                        y = i ? s || (n ? t : _ || r) ? [] : a : v;
                    if (i && i(v, y, o, l), r)
                        for (u = d(y, m), r(u, [], o, l), h = u.length; h--;)(c = u[h]) && (y[m[h]] = !(v[m[h]] = c));
                    if (n) {
                        if (s || t) {
                            if (s) {
                                for (u = [], h = y.length; h--;)(c = y[h]) && u.push(v[h] = c);
                                s(null, y = [], u, l)
                            }
                            for (h = y.length; h--;)(c = y[h]) && (u = s ? J(n, c) : f[h]) > -1 && (n[u] = !(a[u] = c))
                        }
                    } else y = d(y === a ? y.splice(_, y.length) : y), s ? s(null, a, y, l) : G.apply(a, y)
                })
            }

            function _(t) {
                for (var e, i, n, r = t.length, s = x.relative[t[0].type], a = s || x.relative[" "], o = s ? 1 : 0, l = c(function(t) { return t === e }, a, !0), u = c(function(t) { return J(e, t) > -1 }, a, !0), p = [function(t, i, n) { var r = !s && (n || i !== C) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n)); return e = null, r }]; r > o; o++)
                    if (i = x.relative[t[o].type]) p = [c(f(p), i)];
                    else { if ((i = x.filter[t[o].type].apply(null, t[o].matches))[B]) { for (n = ++o; r > n && !x.relative[t[n].type]; n++); return m(o > 1 && f(p), o > 1 && h(t.slice(0, o - 1).concat({ value: " " === t[o - 2].type ? "*" : "" })).replace(at, "$1"), i, n > o && _(t.slice(o, n)), r > n && _(t = t.slice(n)), r > n && h(t)) } p.push(i) }
                return f(p)
            }

            function g(t, i) {
                var r = i.length > 0,
                    s = t.length > 0,
                    a = function(n, a, o, l, u) {
                        var h, c, f, p = 0,
                            m = "0",
                            _ = n && [],
                            g = [],
                            v = C,
                            y = n || s && x.find.TAG("*", u),
                            b = j += null == v ? 1 : Math.random() || .1,
                            T = y.length;
                        for (u && (C = a !== D && a); m !== T && null != (h = y[m]); m++) {
                            if (s && h) {
                                for (c = 0; f = t[c++];)
                                    if (f(h, a, o)) { l.push(h); break }
                                u && (j = b)
                            }
                            r && ((h = !f && h) && p--, n && _.push(h))
                        }
                        if (p += m, r && m !== p) {
                            for (c = 0; f = i[c++];) f(_, g, a, o);
                            if (n) {
                                if (p > 0)
                                    for (; m--;) _[m] || g[m] || (g[m] = U.call(l));
                                g = d(g)
                            }
                            G.apply(l, g), u && !n && g.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                        }
                        return u && (j = b, C = v), _
                    };
                return r ? n(a) : a
            }
            var v, y, x, b, T, w, k, P, C, S, O, A, D, E, R, N, I, M, L, B = "sizzle" + 1 * new Date,
                F = t.document,
                j = 0,
                z = 0,
                q = i(),
                X = i(),
                H = i(),
                V = function(t, e) { return t === e && (O = !0), 0 },
                W = 1 << 31,
                $ = {}.hasOwnProperty,
                Y = [],
                U = Y.pop,
                Q = Y.push,
                G = Y.push,
                Z = Y.slice,
                J = function(t, e) {
                    for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                tt = "[\\x20\\t\\r\\n\\f]",
                et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                it = et.replace("w", "w#"),
                nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + tt + "*\\]",
                rt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)",
                st = new RegExp(tt + "+", "g"),
                at = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                ot = new RegExp("^" + tt + "*," + tt + "*"),
                lt = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
                ut = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
                ht = new RegExp(rt),
                ct = new RegExp("^" + it + "$"),
                ft = { ID: new RegExp("^#(" + et + ")"), CLASS: new RegExp("^\\.(" + et + ")"), TAG: new RegExp("^(" + et.replace("w", "w*") + ")"), ATTR: new RegExp("^" + nt), PSEUDO: new RegExp("^" + rt), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i") },
                pt = /^(?:input|select|textarea|button)$/i,
                dt = /^h\d$/i,
                mt = /^[^{]+\{\s*\[native \w/,
                _t = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                gt = /[+~]/,
                vt = /'|\\/g,
                yt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
                xt = function(t, e, i) { var n = "0x" + e - 65536; return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320) },
                bt = function() { A() };
            try { G.apply(Y = Z.call(F.childNodes), F.childNodes), Y[F.childNodes.length].nodeType } catch (t) {
                G = {
                    apply: Y.length ? function(t, e) { Q.apply(t, Z.call(e)) } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            y = e.support = {}, T = e.isXML = function(t) { var e = t && (t.ownerDocument || t).documentElement; return !!e && "HTML" !== e.nodeName }, A = e.setDocument = function(t) {
                var e, i, n = t ? t.ownerDocument || t : F;
                return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, E = n.documentElement, (i = n.defaultView) && i !== i.top && (i.addEventListener ? i.addEventListener("unload", bt, !1) : i.attachEvent && i.attachEvent("onunload", bt)), R = !T(n), y.attributes = r(function(t) { return t.className = "i", !t.getAttribute("className") }), y.getElementsByTagName = r(function(t) { return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length }), y.getElementsByClassName = mt.test(n.getElementsByClassName), y.getById = r(function(t) { return E.appendChild(t).id = B, !n.getElementsByName || !n.getElementsByName(B).length }), y.getById ? (x.find.ID = function(t, e) { if (void 0 !== e.getElementById && R) { var i = e.getElementById(t); return i && i.parentNode ? [i] : [] } }, x.filter.ID = function(t) { var e = t.replace(yt, xt); return function(t) { return t.getAttribute("id") === e } }) : (delete x.find.ID, x.filter.ID = function(t) { var e = t.replace(yt, xt); return function(t) { var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id"); return i && i.value === e } }), x.find.TAG = y.getElementsByTagName ? function(t, e) { return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : y.qsa ? e.querySelectorAll(t) : void 0 } : function(t, e) {
                    var i, n = [],
                        r = 0,
                        s = e.getElementsByTagName(t);
                    if ("*" === t) { for (; i = s[r++];) 1 === i.nodeType && n.push(i); return n }
                    return s
                }, x.find.CLASS = y.getElementsByClassName && function(t, e) { return R ? e.getElementsByClassName(t) : void 0 }, I = [], N = [], (y.qsa = mt.test(n.querySelectorAll)) && (r(function(t) { E.appendChild(t).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || N.push("\\[" + tt + "*(?:value|" + K + ")"), t.querySelectorAll("[id~=" + B + "-]").length || N.push("~="), t.querySelectorAll(":checked").length || N.push(":checked"), t.querySelectorAll("a#" + B + "+*").length || N.push(".#.+[+~]") }), r(function(t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && N.push("name" + tt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
                })), (y.matchesSelector = mt.test(M = E.matches || E.webkitMatchesSelector || E.mozMatchesSelector || E.oMatchesSelector || E.msMatchesSelector)) && r(function(t) { y.disconnectedMatch = M.call(t, "div"), M.call(t, "[s!='']:x"), I.push("!=", rt) }), N = N.length && new RegExp(N.join("|")), I = I.length && new RegExp(I.join("|")), e = mt.test(E.compareDocumentPosition), L = e || mt.test(E.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, V = e ? function(t, e) { if (t === e) return O = !0, 0; var i = !t.compareDocumentPosition - !e.compareDocumentPosition; return i || (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !y.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === F && L(F, t) ? -1 : e === n || e.ownerDocument === F && L(F, e) ? 1 : S ? J(S, t) - J(S, e) : 0 : 4 & i ? -1 : 1) } : function(t, e) {
                    if (t === e) return O = !0, 0;
                    var i, r = 0,
                        s = t.parentNode,
                        o = e.parentNode,
                        l = [t],
                        u = [e];
                    if (!s || !o) return t === n ? -1 : e === n ? 1 : s ? -1 : o ? 1 : S ? J(S, t) - J(S, e) : 0;
                    if (s === o) return a(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) u.unshift(i);
                    for (; l[r] === u[r];) r++;
                    return r ? a(l[r], u[r]) : l[r] === F ? -1 : u[r] === F ? 1 : 0
                }, n) : D
            }, e.matches = function(t, i) { return e(t, null, null, i) }, e.matchesSelector = function(t, i) {
                if ((t.ownerDocument || t) !== D && A(t), i = i.replace(ut, "='$1']"), !(!y.matchesSelector || !R || I && I.test(i) || N && N.test(i))) try { var n = M.call(t, i); if (n || y.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n } catch (t) {}
                return e(i, D, null, [t]).length > 0
            }, e.contains = function(t, e) { return (t.ownerDocument || t) !== D && A(t), L(t, e) }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== D && A(t);
                var i = x.attrHandle[e.toLowerCase()],
                    n = i && $.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !R) : void 0;
                return void 0 !== n ? n : y.attributes || !R ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function(t) { throw new Error("Syntax error, unrecognized expression: " + t) }, e.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    r = 0;
                if (O = !y.detectDuplicates, S = !y.sortStable && t.slice(0), t.sort(V), O) { for (; e = t[r++];) e === t[r] && (n = i.push(r)); for (; n--;) t.splice(i[n], 1) }
                return S = null, t
            }, b = e.getText = function(t) {
                var e, i = "",
                    n = 0,
                    r = t.nodeType;
                if (r) { if (1 === r || 9 === r || 11 === r) { if ("string" == typeof t.textContent) return t.textContent; for (t = t.firstChild; t; t = t.nextSibling) i += b(t) } else if (3 === r || 4 === r) return t.nodeValue } else
                    for (; e = t[n++];) i += b(e);
                return i
            }, (x = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: ft,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(t) { return t[1] = t[1].replace(yt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(yt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4) }, CHILD: function(t) { return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t }, PSEUDO: function(t) { var e, i = !t[6] && t[2]; return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ht.test(i) && (e = w(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3)) } },
                filter: {
                    TAG: function(t) { var e = t.replace(yt, xt).toLowerCase(); return "*" === t ? function() { return !0 } : function(t) { return t.nodeName && t.nodeName.toLowerCase() === e } },
                    CLASS: function(t) { var e = q[t + " "]; return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && q(t, function(t) { return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "") }) },
                    ATTR: function(t, i, n) { return function(r) { var s = e.attr(r, t); return null == s ? "!=" === i : !i || (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(st, " ") + " ").indexOf(n) > -1 : "|=" === i && (s === n || s.slice(0, n.length + 1) === n + "-")) } },
                    CHILD: function(t, e, i, n, r) {
                        var s = "nth" !== t.slice(0, 3),
                            a = "last" !== t.slice(-4),
                            o = "of-type" === e;
                        return 1 === n && 0 === r ? function(t) { return !!t.parentNode } : function(e, i, l) {
                            var u, h, c, f, p, d, m = s !== a ? "nextSibling" : "previousSibling",
                                _ = e.parentNode,
                                g = o && e.nodeName.toLowerCase(),
                                v = !l && !o;
                            if (_) {
                                if (s) {
                                    for (; m;) {
                                        for (c = e; c = c[m];)
                                            if (o ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                        d = m = "only" === t && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                if (d = [a ? _.firstChild : _.lastChild], a && v) {
                                    for (p = (u = (h = _[B] || (_[B] = {}))[t] || [])[0] === j && u[1], f = u[0] === j && u[2], c = p && _.childNodes[p]; c = ++p && c && c[m] || (f = p = 0) || d.pop();)
                                        if (1 === c.nodeType && ++f && c === e) { h[t] = [j, p, f]; break }
                                } else if (v && (u = (e[B] || (e[B] = {}))[t]) && u[0] === j) f = u[1];
                                else
                                    for (;
                                        (c = ++p && c && c[m] || (f = p = 0) || d.pop()) && ((o ? c.nodeName.toLowerCase() !== g : 1 !== c.nodeType) || !++f || (v && ((c[B] || (c[B] = {}))[t] = [j, f]), c !== e)););
                                return (f -= r) === n || f % n == 0 && f / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, i) { var r, s = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t); return s[B] ? s(i) : s.length > 1 ? (r = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) { for (var n, r = s(t, i), a = r.length; a--;) n = J(t, r[a]), t[n] = !(e[n] = r[a]) }) : function(t) { return s(t, 0, r) }) : s }
                },
                pseudos: {
                    not: n(function(t) {
                        var e = [],
                            i = [],
                            r = k(t.replace(at, "$1"));
                        return r[B] ? n(function(t, e, i, n) { for (var s, a = r(t, null, n, []), o = t.length; o--;)(s = a[o]) && (t[o] = !(e[o] = s)) }) : function(t, n, s) { return e[0] = t, r(e, null, s, i), e[0] = null, !i.pop() }
                    }),
                    has: n(function(t) { return function(i) { return e(t, i).length > 0 } }),
                    contains: n(function(t) {
                        return t = t.replace(yt, xt),
                            function(e) { return (e.textContent || e.innerText || b(e)).indexOf(t) > -1 }
                    }),
                    lang: n(function(t) {
                        return ct.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(yt, xt).toLowerCase(),
                            function(e) {
                                var i;
                                do { if (i = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-") } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) { var i = t.location && t.location.hash; return i && i.slice(1) === e.id },
                    root: function(t) { return t === E },
                    focus: function(t) { return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex) },
                    enabled: function(t) { return !1 === t.disabled },
                    disabled: function(t) { return !0 === t.disabled },
                    checked: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && !!t.checked || "option" === e && !!t.selected },
                    selected: function(t) { return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) { return !x.pseudos.empty(t) },
                    header: function(t) { return dt.test(t.nodeName) },
                    input: function(t) { return pt.test(t.nodeName) },
                    button: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && "button" === t.type || "button" === e },
                    text: function(t) { var e; return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase()) },
                    first: o(function() { return [0] }),
                    last: o(function(t, e) { return [e - 1] }),
                    eq: o(function(t, e, i) { return [0 > i ? i + e : i] }),
                    even: o(function(t, e) { for (var i = 0; e > i; i += 2) t.push(i); return t }),
                    odd: o(function(t, e) { for (var i = 1; e > i; i += 2) t.push(i); return t }),
                    lt: o(function(t, e, i) { for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n); return t }),
                    gt: o(function(t, e, i) { for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n); return t })
                }
            }).pseudos.nth = x.pseudos.eq;
            for (v in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) x.pseudos[v] = function(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }(v);
            for (v in { submit: !0, reset: !0 }) x.pseudos[v] = function(t) { return function(e) { var i = e.nodeName.toLowerCase(); return ("input" === i || "button" === i) && e.type === t } }(v);
            return u.prototype = x.filters = x.pseudos, x.setFilters = new u, w = e.tokenize = function(t, i) {
                var n, r, s, a, o, l, u, h = X[t + " "];
                if (h) return i ? 0 : h.slice(0);
                for (o = t, l = [], u = x.preFilter; o;) {
                    (!n || (r = ot.exec(o))) && (r && (o = o.slice(r[0].length) || o), l.push(s = [])), n = !1, (r = lt.exec(o)) && (n = r.shift(), s.push({ value: n, type: r[0].replace(at, " ") }), o = o.slice(n.length));
                    for (a in x.filter) !(r = ft[a].exec(o)) || u[a] && !(r = u[a](r)) || (n = r.shift(), s.push({ value: n, type: a, matches: r }), o = o.slice(n.length));
                    if (!n) break
                }
                return i ? o.length : o ? e.error(t) : X(t, l).slice(0)
            }, k = e.compile = function(t, e) {
                var i, n = [],
                    r = [],
                    s = H[t + " "];
                if (!s) {
                    for (e || (e = w(t)), i = e.length; i--;) s = _(e[i]), s[B] ? n.push(s) : r.push(s);
                    (s = H(t, g(r, n))).selector = t
                }
                return s
            }, P = e.select = function(t, e, i, n) {
                var r, s, a, o, u, c = "function" == typeof t && t,
                    f = !n && w(t = c.selector || t);
                if (i = i || [], 1 === f.length) {
                    if ((s = f[0] = f[0].slice(0)).length > 2 && "ID" === (a = s[0]).type && y.getById && 9 === e.nodeType && R && x.relative[s[1].type]) {
                        if (!(e = (x.find.ID(a.matches[0].replace(yt, xt), e) || [])[0])) return i;
                        c && (e = e.parentNode), t = t.slice(s.shift().value.length)
                    }
                    for (r = ft.needsContext.test(t) ? 0 : s.length; r-- && (a = s[r], !x.relative[o = a.type]);)
                        if ((u = x.find[o]) && (n = u(a.matches[0].replace(yt, xt), gt.test(s[0].type) && l(e.parentNode) || e))) { if (s.splice(r, 1), !(t = n.length && h(s))) return G.apply(i, n), i; break }
                }
                return (c || k(t, f))(n, e, !R, i, gt.test(t) && l(e.parentNode) || e), i
            }, y.sortStable = B.split("").sort(V).join("") === B, y.detectDuplicates = !!O, A(), y.sortDetached = r(function(t) { return 1 & t.compareDocumentPosition(D.createElement("div")) }), r(function(t) { return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href") }) || s("type|href|height|width", function(t, e, i) { return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2) }), y.attributes && r(function(t) { return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value") }) || s("value", function(t, e, i) { return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue }), r(function(t) { return null == t.getAttribute("disabled") }) || s(K, function(t, e, i) { var n; return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null }), e
        }(t);
        J.find = nt, J.expr = nt.selectors, J.expr[":"] = J.expr.pseudos, J.unique = nt.uniqueSort, J.text = nt.getText, J.isXMLDoc = nt.isXML, J.contains = nt.contains;
        var rt = J.expr.match.needsContext,
            st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            at = /^.[^:#\[\.,]*$/;
        J.filter = function(t, e, i) { var n = e[0]; return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? J.find.matchesSelector(n, t) ? [n] : [] : J.find.matches(t, J.grep(e, function(t) { return 1 === t.nodeType })) }, J.fn.extend({
            find: function(t) {
                var e, i = this.length,
                    n = [],
                    r = this;
                if ("string" != typeof t) return this.pushStack(J(t).filter(function() {
                    for (e = 0; i > e; e++)
                        if (J.contains(r[e], this)) return !0
                }));
                for (e = 0; i > e; e++) J.find(t, r[e], n);
                return n = this.pushStack(i > 1 ? J.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) { return this.pushStack(n(this, t || [], !1)) },
            not: function(t) { return this.pushStack(n(this, t || [], !0)) },
            is: function(t) { return !!n(this, "string" == typeof t && rt.test(t) ? J(t) : t || [], !1).length }
        });
        var ot, lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (J.fn.init = function(t, e) {
            var i, n;
            if (!t) return this;
            if ("string" == typeof t) {
                if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : lt.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || ot).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof J ? e[0] : e, J.merge(this, J.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : G, !0)), st.test(i[1]) && J.isPlainObject(e))
                        for (i in e) J.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return (n = G.getElementById(i[2])) && n.parentNode && (this.length = 1, this[0] = n), this.context = G, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : J.isFunction(t) ? void 0 !== ot.ready ? ot.ready(t) : t(J) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), J.makeArray(t, this))
        }).prototype = J.fn, ot = J(G);
        var ut = /^(?:parents|prev(?:Until|All))/,
            ht = { children: !0, contents: !0, next: !0, prev: !0 };
        J.extend({
            dir: function(t, e, i) {
                for (var n = [], r = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && J(t).is(i)) break;
                        n.push(t)
                    }
                return n
            },
            sibling: function(t, e) { for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t); return i }
        }), J.fn.extend({
            has: function(t) {
                var e = J(t, this),
                    i = e.length;
                return this.filter(function() {
                    for (var t = 0; i > t; t++)
                        if (J.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var i, n = 0, r = this.length, s = [], a = rt.test(t) || "string" != typeof t ? J(t, e || this.context) : 0; r > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && J.find.matchesSelector(i, t))) { s.push(i); break }
                return this.pushStack(s.length > 1 ? J.unique(s) : s)
            },
            index: function(t) { return t ? "string" == typeof t ? W.call(J(t), this[0]) : W.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
            add: function(t, e) { return this.pushStack(J.unique(J.merge(this.get(), J(t, e)))) },
            addBack: function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }
        }), J.each({ parent: function(t) { var e = t.parentNode; return e && 11 !== e.nodeType ? e : null }, parents: function(t) { return J.dir(t, "parentNode") }, parentsUntil: function(t, e, i) { return J.dir(t, "parentNode", i) }, next: function(t) { return r(t, "nextSibling") }, prev: function(t) { return r(t, "previousSibling") }, nextAll: function(t) { return J.dir(t, "nextSibling") }, prevAll: function(t) { return J.dir(t, "previousSibling") }, nextUntil: function(t, e, i) { return J.dir(t, "nextSibling", i) }, prevUntil: function(t, e, i) { return J.dir(t, "previousSibling", i) }, siblings: function(t) { return J.sibling((t.parentNode || {}).firstChild, t) }, children: function(t) { return J.sibling(t.firstChild) }, contents: function(t) { return t.contentDocument || J.merge([], t.childNodes) } }, function(t, e) { J.fn[t] = function(i, n) { var r = J.map(this, e, i); return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = J.filter(n, r)), this.length > 1 && (ht[t] || J.unique(r), ut.test(t) && r.reverse()), this.pushStack(r) } });
        var ct = /\S+/g,
            ft = {};
        J.Callbacks = function(t) {
            var e, i, n, r, a, o, l = [],
                u = !(t = "string" == typeof t ? ft[t] || s(t) : J.extend({}, t)).once && [],
                h = function(s) {
                    for (e = t.memory && s, i = !0, o = r || 0, r = 0, a = l.length, n = !0; l && a > o; o++)
                        if (!1 === l[o].apply(s[0], s[1]) && t.stopOnFalse) { e = !1; break }
                    n = !1, l && (u ? u.length && h(u.shift()) : e ? l = [] : c.disable())
                },
                c = {
                    add: function() { if (l) { var i = l.length;! function e(i) { J.each(i, function(i, n) { var r = J.type(n); "function" === r ? t.unique && c.has(n) || l.push(n) : n && n.length && "string" !== r && e(n) }) }(arguments), n ? a = l.length : e && (r = i, h(e)) } return this },
                    remove: function() {
                        return l && J.each(arguments, function(t, e) {
                            for (var i;
                                (i = J.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (a >= i && a--, o >= i && o--)
                        }), this
                    },
                    has: function(t) { return t ? J.inArray(t, l) > -1 : !(!l || !l.length) },
                    empty: function() { return l = [], a = 0, this },
                    disable: function() { return l = u = e = void 0, this },
                    disabled: function() { return !l },
                    lock: function() { return u = void 0, e || c.disable(), this },
                    locked: function() { return !u },
                    fireWith: function(t, e) { return !l || i && !u || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? u.push(e) : h(e)), this },
                    fire: function() { return c.fireWith(this, arguments), this },
                    fired: function() { return !!i }
                };
            return c
        }, J.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", J.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function() { return i },
                        always: function() { return r.done(arguments).fail(arguments), this },
                        then: function() {
                            var t = arguments;
                            return J.Deferred(function(i) {
                                J.each(e, function(e, s) {
                                    var a = J.isFunction(t[e]) && t[e];
                                    r[s[1]](function() {
                                        var t = a && a.apply(this, arguments);
                                        t && J.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) { return null != t ? J.extend(t, n) : n }
                    },
                    r = {};
                return n.pipe = n.then, J.each(e, function(t, s) {
                    var a = s[2],
                        o = s[3];
                    n[s[1]] = a.add, o && a.add(function() { i = o }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function() { return r[s[0] + "With"](this === r ? n : this, arguments), this }, r[s[0] + "With"] = a.fireWith
                }), n.promise(r), t && t.call(r, r), r
            },
            when: function(t) {
                var e, i, n, r = 0,
                    s = X.call(arguments),
                    a = s.length,
                    o = 1 !== a || t && J.isFunction(t.promise) ? a : 0,
                    l = 1 === o ? t : J.Deferred(),
                    u = function(t, i, n) { return function(r) { i[t] = this, n[t] = arguments.length > 1 ? X.call(arguments) : r, n === e ? l.notifyWith(i, n) : --o || l.resolveWith(i, n) } };
                if (a > 1)
                    for (e = new Array(a), i = new Array(a), n = new Array(a); a > r; r++) s[r] && J.isFunction(s[r].promise) ? s[r].promise().done(u(r, n, s)).fail(l.reject).progress(u(r, i, e)) : --o;
                return o || l.resolveWith(n, s), l.promise()
            }
        });
        var pt;
        J.fn.ready = function(t) { return J.ready.promise().done(t), this }, J.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) { t ? J.readyWait++ : J.ready(!0) },
            ready: function(t) {
                (!0 === t ? --J.readyWait : J.isReady) || (J.isReady = !0, !0 !== t && --J.readyWait > 0 || (pt.resolveWith(G, [J]), J.fn.triggerHandler && (J(G).triggerHandler("ready"), J(G).off("ready"))))
            }
        }), J.ready.promise = function(e) { return pt || (pt = J.Deferred(), "complete" === G.readyState ? setTimeout(J.ready) : (G.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1))), pt.promise(e) }, J.ready.promise();
        var dt = J.access = function(t, e, i, n, r, s, a) {
            var o = 0,
                l = t.length,
                u = null == i;
            if ("object" === J.type(i)) { r = !0; for (o in i) J.access(t, e, o, i[o], !0, s, a) } else if (void 0 !== n && (r = !0, J.isFunction(n) || (a = !0), u && (a ? (e.call(t, n), e = null) : (u = e, e = function(t, e, i) { return u.call(J(t), i) })), e))
                for (; l > o; o++) e(t[o], i, a ? n : n.call(t[o], o, e(t[o], i)));
            return r ? t : u ? e.call(t) : l ? e(t[0], i) : s
        };
        J.acceptData = function(t) { return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType }, o.uid = 1, o.accepts = J.acceptData, o.prototype = {
            key: function(t) {
                if (!o.accepts(t)) return 0;
                var e = {},
                    i = t[this.expando];
                if (!i) { i = o.uid++; try { e[this.expando] = { value: i }, Object.defineProperties(t, e) } catch (n) { e[this.expando] = i, J.extend(t, e) } }
                return this.cache[i] || (this.cache[i] = {}), i
            },
            set: function(t, e, i) {
                var n, r = this.key(t),
                    s = this.cache[r];
                if ("string" == typeof e) s[e] = i;
                else if (J.isEmptyObject(s)) J.extend(this.cache[r], e);
                else
                    for (n in e) s[n] = e[n];
                return s
            },
            get: function(t, e) { var i = this.cache[this.key(t)]; return void 0 === e ? i : i[e] },
            access: function(t, e, i) { var n; return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, J.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e) },
            remove: function(t, e) {
                var i, n, r, s = this.key(t),
                    a = this.cache[s];
                if (void 0 === e) this.cache[s] = {};
                else { J.isArray(e) ? n = e.concat(e.map(J.camelCase)) : (r = J.camelCase(e), e in a ? n = [e, r] : (n = r, n = n in a ? [n] : n.match(ct) || [])), i = n.length; for (; i--;) delete a[n[i]] }
            },
            hasData: function(t) { return !J.isEmptyObject(this.cache[t[this.expando]] || {}) },
            discard: function(t) { t[this.expando] && delete this.cache[t[this.expando]] }
        };
        var mt = new o,
            _t = new o,
            gt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            vt = /([A-Z])/g;
        J.extend({ hasData: function(t) { return _t.hasData(t) || mt.hasData(t) }, data: function(t, e, i) { return _t.access(t, e, i) }, removeData: function(t, e) { _t.remove(t, e) }, _data: function(t, e, i) { return mt.access(t, e, i) }, _removeData: function(t, e) { mt.remove(t, e) } }), J.fn.extend({
            data: function(t, e) {
                var i, n, r, s = this[0],
                    a = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (r = _t.get(s), 1 === s.nodeType && !mt.get(s, "hasDataAttrs"))) {
                        for (i = a.length; i--;) a[i] && 0 === (n = a[i].name).indexOf("data-") && (n = J.camelCase(n.slice(5)), l(s, n, r[n]));
                        mt.set(s, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() { _t.set(this, t) }) : dt(this, function(e) {
                    var i, n = J.camelCase(t);
                    if (s && void 0 === e) { if (void 0 !== (i = _t.get(s, t))) return i; if (void 0 !== (i = _t.get(s, n))) return i; if (void 0 !== (i = l(s, n, void 0))) return i } else this.each(function() {
                        var i = _t.get(this, n);
                        _t.set(this, n, e), -1 !== t.indexOf("-") && void 0 !== i && _t.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) { return this.each(function() { _t.remove(this, t) }) }
        }), J.extend({
            queue: function(t, e, i) { var n; return t ? (e = (e || "fx") + "queue", n = mt.get(t, e), i && (!n || J.isArray(i) ? n = mt.access(t, e, J.makeArray(i)) : n.push(i)), n || []) : void 0 },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = J.queue(t, e),
                    n = i.length,
                    r = i.shift(),
                    s = J._queueHooks(t, e);
                "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, function() { J.dequeue(t, e) }, s)), !n && s && s.empty.fire()
            },
            _queueHooks: function(t, e) { var i = e + "queueHooks"; return mt.get(t, i) || mt.access(t, i, { empty: J.Callbacks("once memory").add(function() { mt.remove(t, [e + "queue", i]) }) }) }
        }), J.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? J.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = J.queue(this, t, e);
                    J._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && J.dequeue(this, t)
                })
            },
            dequeue: function(t) { return this.each(function() { J.dequeue(this, t) }) },
            clearQueue: function(t) { return this.queue(t || "fx", []) },
            promise: function(t, e) {
                var i, n = 1,
                    r = J.Deferred(),
                    s = this,
                    a = this.length,
                    o = function() {--n || r.resolveWith(s, [s]) };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(i = mt.get(s[a], t + "queueHooks")) && i.empty && (n++, i.empty.add(o));
                return o(), r.promise(e)
            }
        });
        var yt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            xt = ["Top", "Right", "Bottom", "Left"],
            bt = function(t, e) { return t = e || t, "none" === J.css(t, "display") || !J.contains(t.ownerDocument, t) },
            Tt = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = G.createDocumentFragment().appendChild(G.createElement("div")),
                e = G.createElement("input");
            e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var wt = "undefined";
        Q.focusinBubbles = "onfocusin" in t;
        var kt = /^key/,
            Pt = /^(?:mouse|pointer|contextmenu)|click/,
            Ct = /^(?:focusinfocus|focusoutblur)$/,
            St = /^([^.]*)(?:\.(.+)|)$/;
        J.event = {
            global: {},
            add: function(t, e, i, n, r) {
                var s, a, o, l, u, h, c, f, p, d, m, _ = mt.get(t);
                if (_)
                    for (i.handler && (s = i, i = s.handler, r = s.selector), i.guid || (i.guid = J.guid++), (l = _.events) || (l = _.events = {}), (a = _.handle) || (a = _.handle = function(e) { return typeof J !== wt && J.event.triggered !== e.type ? J.event.dispatch.apply(t, arguments) : void 0 }), u = (e = (e || "").match(ct) || [""]).length; u--;) o = St.exec(e[u]) || [], p = m = o[1], d = (o[2] || "").split(".").sort(), p && (c = J.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, c = J.event.special[p] || {}, h = J.extend({ type: p, origType: m, data: n, handler: i, guid: i.guid, selector: r, needsContext: r && J.expr.match.needsContext.test(r), namespace: d.join(".") }, s), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, c.setup && !1 !== c.setup.call(t, n, d, a) || t.addEventListener && t.addEventListener(p, a, !1)), c.add && (c.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), r ? f.splice(f.delegateCount++, 0, h) : f.push(h), J.event.global[p] = !0)
            },
            remove: function(t, e, i, n, r) {
                var s, a, o, l, u, h, c, f, p, d, m, _ = mt.hasData(t) && mt.get(t);
                if (_ && (l = _.events)) {
                    for (u = (e = (e || "").match(ct) || [""]).length; u--;)
                        if (o = St.exec(e[u]) || [], p = m = o[1], d = (o[2] || "").split(".").sort(), p) {
                            for (c = J.event.special[p] || {}, f = l[p = (n ? c.delegateType : c.bindType) || p] || [], o = o[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = f.length; s--;) h = f[s], !r && m !== h.origType || i && i.guid !== h.guid || o && !o.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (f.splice(s, 1), h.selector && f.delegateCount--, c.remove && c.remove.call(t, h));
                            a && !f.length && (c.teardown && !1 !== c.teardown.call(t, d, _.handle) || J.removeEvent(t, p, _.handle), delete l[p])
                        } else
                            for (p in l) J.event.remove(t, p + e[u], i, n, !0);
                    J.isEmptyObject(l) && (delete _.handle, mt.remove(t, "events"))
                }
            },
            trigger: function(e, i, n, r) {
                var s, a, o, l, u, h, c, f = [n || G],
                    p = U.call(e, "type") ? e.type : e,
                    d = U.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = o = n = n || G, 3 !== n.nodeType && 8 !== n.nodeType && !Ct.test(p + J.event.triggered) && (p.indexOf(".") >= 0 && (d = p.split("."), p = d.shift(), d.sort()), u = p.indexOf(":") < 0 && "on" + p, e = e[J.expando] ? e : new J.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : J.makeArray(i, [e]), c = J.event.special[p] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, i))) {
                    if (!r && !c.noBubble && !J.isWindow(n)) {
                        for (l = c.delegateType || p, Ct.test(l + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), o = a;
                        o === (n.ownerDocument || G) && f.push(o.defaultView || o.parentWindow || t)
                    }
                    for (s = 0;
                        (a = f[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : c.bindType || p, (h = (mt.get(a, "events") || {})[e.type] && mt.get(a, "handle")) && h.apply(a, i), (h = u && a[u]) && h.apply && J.acceptData(a) && (e.result = h.apply(a, i), !1 === e.result && e.preventDefault());
                    return e.type = p, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), i) || !J.acceptData(n) || u && J.isFunction(n[p]) && !J.isWindow(n) && ((o = n[u]) && (n[u] = null), J.event.triggered = p, n[p](), J.event.triggered = void 0, o && (n[u] = o)), e.result
                }
            },
            dispatch: function(t) {
                t = J.event.fix(t);
                var e, i, n, r, s, a = [],
                    o = X.call(arguments),
                    l = (mt.get(this, "events") || {})[t.type] || [],
                    u = J.event.special[t.type] || {};
                if (o[0] = t, t.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
                    for (a = J.event.handlers.call(this, t, l), e = 0;
                        (r = a[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, i = 0;
                            (s = r.handlers[i++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(s.namespace)) && (t.handleObj = s, t.data = s.data, void 0 !== (n = ((J.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, o)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, r, s, a = [],
                    o = e.delegateCount,
                    l = t.target;
                if (o && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l !== this; l = l.parentNode || this)
                        if (!0 !== l.disabled || "click" !== t.type) {
                            for (n = [], i = 0; o > i; i++) s = e[i], r = s.selector + " ", void 0 === n[r] && (n[r] = s.needsContext ? J(r, this).index(l) >= 0 : J.find(r, this, null, [l]).length), n[r] && n.push(s);
                            n.length && a.push({ elem: l, handlers: n })
                        }
                return o < e.length && a.push({ elem: this, handlers: e.slice(o) }), a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(t, e) { return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t } },
            mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(t, e) { var i, n, r, s = e.button; return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || G, n = i.documentElement, r = i.body, t.pageX = e.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t } },
            fix: function(t) {
                if (t[J.expando]) return t;
                var e, i, n, r = t.type,
                    s = t,
                    a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = Pt.test(r) ? this.mouseHooks : kt.test(r) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, t = new J.Event(s), e = n.length; e--;) i = n[e], t[i] = s[i];
                return t.target || (t.target = G), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, s) : t
            },
            special: { load: { noBubble: !0 }, focus: { trigger: function() { return this !== c() && this.focus ? (this.focus(), !1) : void 0 }, delegateType: "focusin" }, blur: { trigger: function() { return this === c() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0 }, _default: function(t) { return J.nodeName(t.target, "a") } }, beforeunload: { postDispatch: function(t) { void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result) } } },
            simulate: function(t, e, i, n) {
                var r = J.extend(new J.Event, i, { type: t, isSimulated: !0, originalEvent: {} });
                n ? J.event.trigger(r, null, e) : J.event.dispatch.call(e, r), r.isDefaultPrevented() && i.preventDefault()
            }
        }, J.removeEvent = function(t, e, i) { t.removeEventListener && t.removeEventListener(e, i, !1) }, J.Event = function(t, e) { return this instanceof J.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? u : h) : this.type = t, e && J.extend(this, e), this.timeStamp = t && t.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(t, e) }, J.Event.prototype = {
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = u, t && t.preventDefault && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = u, t && t.stopPropagation && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = u, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, J.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(t, e) {
            J.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = this,
                        r = t.relatedTarget,
                        s = t.handleObj;
                    return (!r || r !== n && !J.contains(n, r)) && (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), Q.focusinBubbles || J.each({ focus: "focusin", blur: "focusout" }, function(t, e) {
            var i = function(t) { J.event.simulate(e, t.target, J.event.fix(t), !0) };
            J.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        r = mt.access(n, e);
                    r || n.addEventListener(t, i, !0), mt.access(n, e, (r || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        r = mt.access(n, e) - 1;
                    r ? mt.access(n, e, r) : (n.removeEventListener(t, i, !0), mt.remove(n, e))
                }
            }
        }), J.fn.extend({
            on: function(t, e, i, n, r) {
                var s, a;
                if ("object" == typeof t) { "string" != typeof e && (i = i || e, e = void 0); for (a in t) this.on(a, e, i, t[a], r); return this }
                if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), !1 === n) n = h;
                else if (!n) return this;
                return 1 === r && (s = n, n = function(t) { return J().off(t), s.apply(this, arguments) }, n.guid = s.guid || (s.guid = J.guid++)), this.each(function() { J.event.add(this, t, n, i, e) })
            },
            one: function(t, e, i, n) { return this.on(t, e, i, n, 1) },
            off: function(t, e, i) { var n, r; if (t && t.preventDefault && t.handleObj) return n = t.handleObj, J(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this; if ("object" == typeof t) { for (r in t) this.off(r, e, t[r]); return this } return (!1 === e || "function" == typeof e) && (i = e, e = void 0), !1 === i && (i = h), this.each(function() { J.event.remove(this, t, i, e) }) },
            trigger: function(t, e) { return this.each(function() { J.event.trigger(t, e, this) }) },
            triggerHandler: function(t, e) { var i = this[0]; return i ? J.event.trigger(t, e, i, !0) : void 0 }
        });
        var Ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            At = /<([\w:]+)/,
            Dt = /<|&#?\w+;/,
            Et = /<(?:script|style|link)/i,
            Rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Nt = /^$|\/(?:java|ecma)script/i,
            It = /^true\/(.*)/,
            Mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Lt = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, J.extend({
            clone: function(t, e, i) {
                var n, r, s, a, o = t.cloneNode(!0),
                    l = J.contains(t.ownerDocument, t);
                if (!(Q.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || J.isXMLDoc(t)))
                    for (a = g(o), s = g(t), n = 0, r = s.length; r > n; n++) v(s[n], a[n]);
                if (e)
                    if (i)
                        for (s = s || g(t), a = a || g(o), n = 0, r = s.length; r > n; n++) _(s[n], a[n]);
                    else _(t, o);
                return (a = g(o, "script")).length > 0 && m(a, !l && g(t, "script")), o
            },
            buildFragment: function(t, e, i, n) {
                for (var r, s, a, o, l, u, h = e.createDocumentFragment(), c = [], f = 0, p = t.length; p > f; f++)
                    if ((r = t[f]) || 0 === r)
                        if ("object" === J.type(r)) J.merge(c, r.nodeType ? [r] : r);
                        else if (Dt.test(r)) {
                    for (s = s || h.appendChild(e.createElement("div")), a = (At.exec(r) || ["", ""])[1].toLowerCase(), o = Lt[a] || Lt._default, s.innerHTML = o[1] + r.replace(Ot, "<$1></$2>") + o[2], u = o[0]; u--;) s = s.lastChild;
                    J.merge(c, s.childNodes), (s = h.firstChild).textContent = ""
                } else c.push(e.createTextNode(r));
                for (h.textContent = "", f = 0; r = c[f++];)
                    if ((!n || -1 === J.inArray(r, n)) && (l = J.contains(r.ownerDocument, r), s = g(h.appendChild(r), "script"), l && m(s), i))
                        for (u = 0; r = s[u++];) Nt.test(r.type || "") && i.push(r);
                return h
            },
            cleanData: function(t) {
                for (var e, i, n, r, s = J.event.special, a = 0; void 0 !== (i = t[a]); a++) {
                    if (J.acceptData(i) && (r = i[mt.expando]) && (e = mt.cache[r])) {
                        if (e.events)
                            for (n in e.events) s[n] ? J.event.remove(i, n) : J.removeEvent(i, n, e.handle);
                        mt.cache[r] && delete mt.cache[r]
                    }
                    delete _t.cache[i[_t.expando]]
                }
            }
        }), J.fn.extend({
            text: function(t) {
                return dt(this, function(t) {
                    return void 0 === t ? J.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() { return this.domManip(arguments, function(t) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || f(this, t).appendChild(t) }) },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = f(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() { return this.domManip(arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this) }) },
            after: function() { return this.domManip(arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this.nextSibling) }) },
            remove: function(t, e) { for (var i, n = t ? J.filter(t, this) : this, r = 0; null != (i = n[r]); r++) e || 1 !== i.nodeType || J.cleanData(g(i)), i.parentNode && (e && J.contains(i.ownerDocument, i) && m(g(i, "script")), i.parentNode.removeChild(i)); return this },
            empty: function() { for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (J.cleanData(g(t, !1)), t.textContent = ""); return this },
            clone: function(t, e) { return t = null != t && t, e = null == e ? t : e, this.map(function() { return J.clone(this, t, e) }) },
            html: function(t) {
                return dt(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Et.test(t) && !Lt[(At.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(Ot, "<$1></$2>");
                        try {
                            for (; n > i; i++) 1 === (e = this[i] || {}).nodeType && (J.cleanData(g(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() { var t = arguments[0]; return this.domManip(arguments, function(e) { t = this.parentNode, J.cleanData(g(this)), t && t.replaceChild(e, this) }), t && (t.length || t.nodeType) ? this : this.remove() },
            detach: function(t) { return this.remove(t, !0) },
            domManip: function(t, e) {
                t = H.apply([], t);
                var i, n, r, s, a, o, l = 0,
                    u = this.length,
                    h = this,
                    c = u - 1,
                    f = t[0],
                    m = J.isFunction(f);
                if (m || u > 1 && "string" == typeof f && !Q.checkClone && Rt.test(f)) return this.each(function(i) {
                    var n = h.eq(i);
                    m && (t[0] = f.call(this, i, n.html())), n.domManip(t, e)
                });
                if (u && (i = J.buildFragment(t, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                    for (s = (r = J.map(g(i, "script"), p)).length; u > l; l++) a = i, l !== c && (a = J.clone(a, !0, !0), s && J.merge(r, g(a, "script"))), e.call(this[l], a, l);
                    if (s)
                        for (o = r[r.length - 1].ownerDocument, J.map(r, d), l = 0; s > l; l++) a = r[l], Nt.test(a.type || "") && !mt.access(a, "globalEval") && J.contains(o, a) && (a.src ? J._evalUrl && J._evalUrl(a.src) : J.globalEval(a.textContent.replace(Mt, "")))
                }
                return this
            }
        }), J.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(t, e) { J.fn[t] = function(t) { for (var i, n = [], r = J(t), s = r.length - 1, a = 0; s >= a; a++) i = a === s ? this : this.clone(!0), J(r[a])[e](i), V.apply(n, i.get()); return this.pushStack(n) } });
        var Bt, Ft = {},
            jt = /^margin/,
            zt = new RegExp("^(" + yt + ")(?!px)[a-z%]+$", "i"),
            qt = function(e) { return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null) };
        ! function() {
            function e() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", r.appendChild(s);
                var e = t.getComputedStyle(a, null);
                i = "1%" !== e.top, n = "4px" === e.width, r.removeChild(s)
            }
            var i, n, r = G.documentElement,
                s = G.createElement("div"),
                a = G.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", Q.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", s.appendChild(a), t.getComputedStyle && J.extend(Q, { pixelPosition: function() { return e(), i }, boxSizingReliable: function() { return null == n && e(), n }, reliableMarginRight: function() { var e, i = a.appendChild(G.createElement("div")); return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", r.appendChild(s), e = !parseFloat(t.getComputedStyle(i, null).marginRight), r.removeChild(s), a.removeChild(i), e } }))
        }(), J.swap = function(t, e, i, n) {
            var r, s, a = {};
            for (s in e) a[s] = t.style[s], t.style[s] = e[s];
            r = i.apply(t, n || []);
            for (s in e) t.style[s] = a[s];
            return r
        };
        var Xt = /^(none|table(?!-c[ea]).+)/,
            Ht = new RegExp("^(" + yt + ")(.*)$", "i"),
            Vt = new RegExp("^([+-])=(" + yt + ")", "i"),
            Wt = { position: "absolute", visibility: "hidden", display: "block" },
            $t = { letterSpacing: "0", fontWeight: "400" },
            Yt = ["Webkit", "O", "Moz", "ms"];
        J.extend({
            cssHooks: { opacity: { get: function(t, e) { if (e) { var i = b(t, "opacity"); return "" === i ? "1" : i } } } },
            cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: { float: "cssFloat" },
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, s, a, o = J.camelCase(e),
                        l = t.style;
                    return e = J.cssProps[o] || (J.cssProps[o] = w(l, o)), a = J.cssHooks[e] || J.cssHooks[o], void 0 === i ? a && "get" in a && void 0 !== (r = a.get(t, !1, n)) ? r : l[e] : ("string" === (s = typeof i) && (r = Vt.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(J.css(t, e)), s = "number"), void(null != i && i === i && ("number" !== s || J.cssNumber[o] || (i += "px"), Q.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), a && "set" in a && void 0 === (i = a.set(t, i, n)) || (l[e] = i))))
                }
            },
            css: function(t, e, i, n) { var r, s, a, o = J.camelCase(e); return e = J.cssProps[o] || (J.cssProps[o] = w(t.style, o)), (a = J.cssHooks[e] || J.cssHooks[o]) && "get" in a && (r = a.get(t, !0, i)), void 0 === r && (r = b(t, e, n)), "normal" === r && e in $t && (r = $t[e]), "" === i || i ? (s = parseFloat(r), !0 === i || J.isNumeric(s) ? s || 0 : r) : r }
        }), J.each(["height", "width"], function(t, e) { J.cssHooks[e] = { get: function(t, i, n) { return i ? Xt.test(J.css(t, "display")) && 0 === t.offsetWidth ? J.swap(t, Wt, function() { return C(t, e, n) }) : C(t, e, n) : void 0 }, set: function(t, i, n) { var r = n && qt(t); return k(t, i, n ? P(t, e, n, "border-box" === J.css(t, "boxSizing", !1, r), r) : 0) } } }), J.cssHooks.marginRight = T(Q.reliableMarginRight, function(t, e) { return e ? J.swap(t, { display: "inline-block" }, b, [t, "marginRight"]) : void 0 }), J.each({ margin: "", padding: "", border: "Width" }, function(t, e) { J.cssHooks[t + e] = { expand: function(i) { for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + xt[n] + e] = s[n] || s[n - 2] || s[0]; return r } }, jt.test(t) || (J.cssHooks[t + e].set = k) }), J.fn.extend({
            css: function(t, e) {
                return dt(this, function(t, e, i) {
                    var n, r, s = {},
                        a = 0;
                    if (J.isArray(e)) { for (n = qt(t), r = e.length; r > a; a++) s[e[a]] = J.css(t, e[a], !1, n); return s }
                    return void 0 !== i ? J.style(t, e, i) : J.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() { return S(this, !0) },
            hide: function() { return S(this) },
            toggle: function(t) { return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() { bt(this) ? J(this).show() : J(this).hide() }) }
        }), J.Tween = O, O.prototype = { constructor: O, init: function(t, e, i, n, r, s) { this.elem = t, this.prop = i, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (J.cssNumber[i] ? "" : "px") }, cur: function() { var t = O.propHooks[this.prop]; return t && t.get ? t.get(this) : O.propHooks._default.get(this) }, run: function(t) { var e, i = O.propHooks[this.prop]; return this.pos = e = this.options.duration ? J.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : O.propHooks._default.set(this), this } }, O.prototype.init.prototype = O.prototype, O.propHooks = { _default: { get: function(t) { var e; return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = J.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop] }, set: function(t) { J.fx.step[t.prop] ? J.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[J.cssProps[t.prop]] || J.cssHooks[t.prop]) ? J.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now } } }, O.propHooks.scrollTop = O.propHooks.scrollLeft = { set: function(t) { t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now) } }, J.easing = { linear: function(t) { return t }, swing: function(t) { return .5 - Math.cos(t * Math.PI) / 2 } }, J.fx = O.prototype.init, J.fx.step = {};
        var Ut, Qt, Gt = /^(?:toggle|show|hide)$/,
            Zt = new RegExp("^(?:([+-])=|)(" + yt + ")([a-z%]*)$", "i"),
            Jt = /queueHooks$/,
            Kt = [function(t, e, i) {
                var n, r, s, a, o, l, u, h = this,
                    c = {},
                    f = t.style,
                    p = t.nodeType && bt(t),
                    d = mt.get(t, "fxshow");
                i.queue || (null == (o = J._queueHooks(t, "fx")).unqueued && (o.unqueued = 0, l = o.empty.fire, o.empty.fire = function() { o.unqueued || l() }), o.unqueued++, h.always(function() { h.always(function() { o.unqueued--, J.queue(t, "fx").length || o.empty.fire() }) })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [f.overflow, f.overflowX, f.overflowY], u = J.css(t, "display"), "inline" === ("none" === u ? mt.get(t, "olddisplay") || x(t.nodeName) : u) && "none" === J.css(t, "float") && (f.display = "inline-block")), i.overflow && (f.overflow = "hidden", h.always(function() { f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2] }));
                for (n in e)
                    if (r = e[n], Gt.exec(r)) {
                        if (delete e[n], s = s || "toggle" === r, r === (p ? "hide" : "show")) {
                            if ("show" !== r || !d || void 0 === d[n]) continue;
                            p = !0
                        }
                        c[n] = d && d[n] || J.style(t, n)
                    } else u = void 0;
                if (J.isEmptyObject(c)) "inline" === ("none" === u ? x(t.nodeName) : u) && (f.display = u);
                else {
                    d ? "hidden" in d && (p = d.hidden) : d = mt.access(t, "fxshow", {}), s && (d.hidden = !p), p ? J(t).show() : h.done(function() { J(t).hide() }), h.done(function() {
                        var e;
                        mt.remove(t, "fxshow");
                        for (e in c) J.style(t, e, c[e])
                    });
                    for (n in c) a = E(p ? d[n] : 0, n, h), n in d || (d[n] = a.start, p && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
                }
            }],
            te = {
                "*": [function(t, e) {
                    var i = this.createTween(t, e),
                        n = i.cur(),
                        r = Zt.exec(e),
                        s = r && r[3] || (J.cssNumber[t] ? "" : "px"),
                        a = (J.cssNumber[t] || "px" !== s && +n) && Zt.exec(J.css(i.elem, t)),
                        o = 1,
                        l = 20;
                    if (a && a[3] !== s) {
                        s = s || a[3], r = r || [], a = +n || 1;
                        do { o = o || ".5", a /= o, J.style(i.elem, t, a + s) } while (o !== (o = i.cur() / n) && 1 !== o && --l)
                    }
                    return r && (a = i.start = +a || +n || 0, i.unit = s, i.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), i
                }]
            };
        J.Animation = J.extend(N, { tweener: function(t, e) { J.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" "); for (var i, n = 0, r = t.length; r > n; n++) i = t[n], te[i] = te[i] || [], te[i].unshift(e) }, prefilter: function(t, e) { e ? Kt.unshift(t) : Kt.push(t) } }), J.speed = function(t, e, i) { var n = t && "object" == typeof t ? J.extend({}, t) : { complete: i || !i && e || J.isFunction(t) && t, duration: t, easing: i && e || e && !J.isFunction(e) && e }; return n.duration = J.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in J.fx.speeds ? J.fx.speeds[n.duration] : J.fx.speeds._default, (null == n.queue || !0 === n.queue) && (n.queue = "fx"), n.old = n.complete, n.complete = function() { J.isFunction(n.old) && n.old.call(this), n.queue && J.dequeue(this, n.queue) }, n }, J.fn.extend({
                fadeTo: function(t, e, i, n) { return this.filter(bt).css("opacity", 0).show().end().animate({ opacity: e }, t, i, n) },
                animate: function(t, e, i, n) {
                    var r = J.isEmptyObject(t),
                        s = J.speed(e, i, n),
                        a = function() {
                            var e = N(this, J.extend({}, t), s);
                            (r || mt.get(this, "finish")) && e.stop(!0)
                        };
                    return a.finish = a, r || !1 === s.queue ? this.each(a) : this.queue(s.queue, a)
                },
                stop: function(t, e, i) {
                    var n = function(t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            s = J.timers,
                            a = mt.get(this);
                        if (r) a[r] && a[r].stop && n(a[r]);
                        else
                            for (r in a) a[r] && a[r].stop && Jt.test(r) && n(a[r]);
                        for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(i), e = !1, s.splice(r, 1));
                        (e || !i) && J.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, i = mt.get(this),
                            n = i[t + "queue"],
                            r = i[t + "queueHooks"],
                            s = J.timers,
                            a = n ? n.length : 0;
                        for (i.finish = !0, J.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                        for (e = 0; a > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), J.each(["toggle", "show", "hide"], function(t, e) {
                var i = J.fn[e];
                J.fn[e] = function(t, n, r) { return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(D(e, !0), t, n, r) }
            }), J.each({ slideDown: D("show"), slideUp: D("hide"), slideToggle: D("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(t, e) { J.fn[t] = function(t, i, n) { return this.animate(e, t, i, n) } }), J.timers = [], J.fx.tick = function() {
                var t, e = 0,
                    i = J.timers;
                for (Ut = J.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
                i.length || J.fx.stop(), Ut = void 0
            }, J.fx.timer = function(t) { J.timers.push(t), t() ? J.fx.start() : J.timers.pop() }, J.fx.interval = 13, J.fx.start = function() { Qt || (Qt = setInterval(J.fx.tick, J.fx.interval)) }, J.fx.stop = function() { clearInterval(Qt), Qt = null }, J.fx.speeds = { slow: 600, fast: 200, _default: 400 }, J.fn.delay = function(t, e) {
                return t = J.fx ? J.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                    var n = setTimeout(e, t);
                    i.stop = function() { clearTimeout(n) }
                })
            },
            function() {
                var t = G.createElement("input"),
                    e = G.createElement("select"),
                    i = e.appendChild(G.createElement("option"));
                t.type = "checkbox", Q.checkOn = "" !== t.value, Q.optSelected = i.selected, e.disabled = !0, Q.optDisabled = !i.disabled, (t = G.createElement("input")).value = "t", t.type = "radio", Q.radioValue = "t" === t.value
            }();
        var ee, ie = J.expr.attrHandle;
        J.fn.extend({ attr: function(t, e) { return dt(this, J.attr, t, e, arguments.length > 1) }, removeAttr: function(t) { return this.each(function() { J.removeAttr(this, t) }) } }), J.extend({
            attr: function(t, e, i) { var n, r, s = t.nodeType; if (t && 3 !== s && 8 !== s && 2 !== s) return typeof t.getAttribute === wt ? J.prop(t, e, i) : (1 === s && J.isXMLDoc(t) || (e = e.toLowerCase(), n = J.attrHooks[e] || (J.expr.match.bool.test(e) ? ee : void 0)), void 0 === i ? n && "get" in n && null !== (r = n.get(t, e)) ? r : (r = J.find.attr(t, e), null == r ? void 0 : r) : null !== i ? n && "set" in n && void 0 !== (r = n.set(t, i, e)) ? r : (t.setAttribute(e, i + ""), i) : void J.removeAttr(t, e)) },
            removeAttr: function(t, e) {
                var i, n, r = 0,
                    s = e && e.match(ct);
                if (s && 1 === t.nodeType)
                    for (; i = s[r++];) n = J.propFix[i] || i, J.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
            },
            attrHooks: { type: { set: function(t, e) { if (!Q.radioValue && "radio" === e && J.nodeName(t, "input")) { var i = t.value; return t.setAttribute("type", e), i && (t.value = i), e } } } }
        }), ee = { set: function(t, e, i) { return !1 === e ? J.removeAttr(t, i) : t.setAttribute(i, i), i } }, J.each(J.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = ie[e] || J.find.attr;
            ie[e] = function(t, e, n) { var r, s; return n || (s = ie[e], ie[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, ie[e] = s), r }
        });
        var ne = /^(?:input|select|textarea|button)$/i;
        J.fn.extend({ prop: function(t, e) { return dt(this, J.prop, t, e, arguments.length > 1) }, removeProp: function(t) { return this.each(function() { delete this[J.propFix[t] || t] }) } }), J.extend({ propFix: { for: "htmlFor", class: "className" }, prop: function(t, e, i) { var n, r, s = t.nodeType; if (t && 3 !== s && 8 !== s && 2 !== s) return (1 !== s || !J.isXMLDoc(t)) && (e = J.propFix[e] || e, r = J.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e] }, propHooks: { tabIndex: { get: function(t) { return t.hasAttribute("tabindex") || ne.test(t.nodeName) || t.href ? t.tabIndex : -1 } } } }), Q.optSelected || (J.propHooks.selected = { get: function(t) { var e = t.parentNode; return e && e.parentNode && e.parentNode.selectedIndex, null } }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { J.propFix[this.toLowerCase()] = this });
        var re = /[\t\r\n\f]/g;
        J.fn.extend({
            addClass: function(t) {
                var e, i, n, r, s, a, o = "string" == typeof t && t,
                    l = 0,
                    u = this.length;
                if (J.isFunction(t)) return this.each(function(e) { J(this).addClass(t.call(this, e, this.className)) });
                if (o)
                    for (e = (t || "").match(ct) || []; u > l; l++)
                        if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(re, " ") : " ")) {
                            for (s = 0; r = e[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                            a = J.trim(n), i.className !== a && (i.className = a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, r, s, a, o = 0 === arguments.length || "string" == typeof t && t,
                    l = 0,
                    u = this.length;
                if (J.isFunction(t)) return this.each(function(e) { J(this).removeClass(t.call(this, e, this.className)) });
                if (o)
                    for (e = (t || "").match(ct) || []; u > l; l++)
                        if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(re, " ") : "")) {
                            for (s = 0; r = e[s++];)
                                for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
                            a = t ? J.trim(n) : "", i.className !== a && (i.className = a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(J.isFunction(t) ? function(i) { J(this).toggleClass(t.call(this, i, this.className, e), e) } : function() {
                    if ("string" === i)
                        for (var e, n = 0, r = J(this), s = t.match(ct) || []; e = s[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else(i === wt || "boolean" === i) && (this.className && mt.set(this, "__className__", this.className), this.className = this.className || !1 === t ? "" : mt.get(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                    if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(re, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        });
        var se = /\r/g;
        J.fn.extend({
            val: function(t) {
                var e, i, n, r = this[0];
                return arguments.length ? (n = J.isFunction(t), this.each(function(i) {
                    var r;
                    1 === this.nodeType && (r = n ? t.call(this, i, J(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : J.isArray(r) && (r = J.map(r, function(t) { return null == t ? "" : t + "" })), (e = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                })) : r ? (e = J.valHooks[r.type] || J.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(se, "") : null == i ? "" : i)) : void 0
            }
        }), J.extend({
            valHooks: {
                option: { get: function(t) { var e = J.find.attr(t, "value"); return null != e ? e : J.trim(J.text(t)) } },
                select: {
                    get: function(t) {
                        for (var e, i, n = t.options, r = t.selectedIndex, s = "select-one" === t.type || 0 > r, a = s ? null : [], o = s ? r + 1 : n.length, l = 0 > r ? o : s ? r : 0; o > l; l++)
                            if (!(!(i = n[l]).selected && l !== r || (Q.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && J.nodeName(i.parentNode, "optgroup"))) {
                                if (e = J(i).val(), s) return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function(t, e) { for (var i, n, r = t.options, s = J.makeArray(e), a = r.length; a--;) n = r[a], (n.selected = J.inArray(n.value, s) >= 0) && (i = !0); return i || (t.selectedIndex = -1), s }
                }
            }
        }), J.each(["radio", "checkbox"], function() { J.valHooks[this] = { set: function(t, e) { return J.isArray(e) ? t.checked = J.inArray(J(t).val(), e) >= 0 : void 0 } }, Q.checkOn || (J.valHooks[this].get = function(t) { return null === t.getAttribute("value") ? "on" : t.value }) }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) { J.fn[e] = function(t, i) { return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e) } }), J.fn.extend({ hover: function(t, e) { return this.mouseenter(t).mouseleave(e || t) }, bind: function(t, e, i) { return this.on(t, null, e, i) }, unbind: function(t, e) { return this.off(t, null, e) }, delegate: function(t, e, i, n) { return this.on(e, t, i, n) }, undelegate: function(t, e, i) { return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i) } });
        var ae = J.now(),
            oe = /\?/;
        J.parseJSON = function(t) { return JSON.parse(t + "") }, J.parseXML = function(t) { var e, i; if (!t || "string" != typeof t) return null; try { i = new DOMParser, e = i.parseFromString(t, "text/xml") } catch (t) { e = void 0 } return (!e || e.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + t), e };
        var le = /#.*$/,
            ue = /([?&])_=[^&]*/,
            he = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            ce = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            fe = /^(?:GET|HEAD)$/,
            pe = /^\/\//,
            de = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            me = {},
            _e = {},
            ge = "*/".concat("*"),
            ve = t.location.href,
            ye = de.exec(ve.toLowerCase()) || [];
        J.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: { url: ve, type: "GET", isLocal: ce.test(ye[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": ge, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": J.parseJSON, "text xml": J.parseXML }, flatOptions: { url: !0, context: !0 } },
            ajaxSetup: function(t, e) { return e ? L(L(t, J.ajaxSettings), e) : L(J.ajaxSettings, t) },
            ajaxPrefilter: I(me),
            ajaxTransport: I(_e),
            ajax: function(t, e) {
                function i(t, e, i, a) {
                    var l, h, g, v, x, T = e;
                    2 !== y && (y = 2, o && clearTimeout(o), n = void 0, s = a || "", b.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, i && (v = B(c, b, i)), v = F(c, v, b, l), l ? (c.ifModified && ((x = b.getResponseHeader("Last-Modified")) && (J.lastModified[r] = x), (x = b.getResponseHeader("etag")) && (J.etag[r] = x)), 204 === t || "HEAD" === c.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = v.state, h = v.data, g = v.error, l = !g)) : (g = T, (t || !T) && (T = "error", 0 > t && (t = 0))), b.status = t, b.statusText = (e || T) + "", l ? d.resolveWith(f, [h, T, b]) : d.rejectWith(f, [b, T, g]), b.statusCode(_), _ = void 0, u && p.trigger(l ? "ajaxSuccess" : "ajaxError", [b, c, l ? h : g]), m.fireWith(f, [b, T]), u && (p.trigger("ajaxComplete", [b, c]), --J.active || J.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, r, s, a, o, l, u, h, c = J.ajaxSetup({}, e),
                    f = c.context || c,
                    p = c.context && (f.nodeType || f.jquery) ? J(f) : J.event,
                    d = J.Deferred(),
                    m = J.Callbacks("once memory"),
                    _ = c.statusCode || {},
                    g = {},
                    v = {},
                    y = 0,
                    x = "canceled",
                    b = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === y) {
                                if (!a)
                                    for (a = {}; e = he.exec(s);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() { return 2 === y ? s : null },
                        setRequestHeader: function(t, e) { var i = t.toLowerCase(); return y || (t = v[i] = v[i] || t, g[t] = e), this },
                        overrideMimeType: function(t) { return y || (c.mimeType = t), this },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > y)
                                    for (e in t) _[e] = [_[e], t[e]];
                                else b.always(t[b.status]);
                            return this
                        },
                        abort: function(t) { var e = t || x; return n && n.abort(e), i(0, e), this }
                    };
                if (d.promise(b).complete = m.add, b.success = b.done, b.error = b.fail, c.url = ((t || c.url || ve) + "").replace(le, "").replace(pe, ye[1] + "//"), c.type = e.method || e.type || c.method || c.type, c.dataTypes = J.trim(c.dataType || "*").toLowerCase().match(ct) || [""], null == c.crossDomain && (l = de.exec(c.url.toLowerCase()), c.crossDomain = !(!l || l[1] === ye[1] && l[2] === ye[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (ye[3] || ("http:" === ye[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = J.param(c.data, c.traditional)), M(me, c, e, b), 2 === y) return b;
                (u = J.event && c.global) && 0 == J.active++ && J.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !fe.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (oe.test(r) ? "&" : "?") + c.data, delete c.data), !1 === c.cache && (c.url = ue.test(r) ? r.replace(ue, "$1_=" + ae++) : r + (oe.test(r) ? "&" : "?") + "_=" + ae++)), c.ifModified && (J.lastModified[r] && b.setRequestHeader("If-Modified-Since", J.lastModified[r]), J.etag[r] && b.setRequestHeader("If-None-Match", J.etag[r])), (c.data && c.hasContent && !1 !== c.contentType || e.contentType) && b.setRequestHeader("Content-Type", c.contentType), b.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + ge + "; q=0.01" : "") : c.accepts["*"]);
                for (h in c.headers) b.setRequestHeader(h, c.headers[h]);
                if (c.beforeSend && (!1 === c.beforeSend.call(f, b, c) || 2 === y)) return b.abort();
                x = "abort";
                for (h in { success: 1, error: 1, complete: 1 }) b[h](c[h]);
                if (n = M(_e, c, e, b)) {
                    b.readyState = 1, u && p.trigger("ajaxSend", [b, c]), c.async && c.timeout > 0 && (o = setTimeout(function() { b.abort("timeout") }, c.timeout));
                    try { y = 1, n.send(g, i) } catch (t) {
                        if (!(2 > y)) throw t;
                        i(-1, t)
                    }
                } else i(-1, "No Transport");
                return b
            },
            getJSON: function(t, e, i) { return J.get(t, e, i, "json") },
            getScript: function(t, e) { return J.get(t, void 0, e, "script") }
        }), J.each(["get", "post"], function(t, e) { J[e] = function(t, i, n, r) { return J.isFunction(i) && (r = r || n, n = i, i = void 0), J.ajax({ url: t, type: e, dataType: r, data: i, success: n }) } }), J._evalUrl = function(t) { return J.ajax({ url: t, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 }) }, J.fn.extend({
            wrapAll: function(t) { var e; return J.isFunction(t) ? this.each(function(e) { J(this).wrapAll(t.call(this, e)) }) : (this[0] && (e = J(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() { for (var t = this; t.firstElementChild;) t = t.firstElementChild; return t }).append(this)), this) },
            wrapInner: function(t) {
                return this.each(J.isFunction(t) ? function(e) { J(this).wrapInner(t.call(this, e)) } : function() {
                    var e = J(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) { var e = J.isFunction(t); return this.each(function(i) { J(this).wrapAll(e ? t.call(this, i) : t) }) },
            unwrap: function() { return this.parent().each(function() { J.nodeName(this, "body") || J(this).replaceWith(this.childNodes) }).end() }
        }), J.expr.filters.hidden = function(t) { return t.offsetWidth <= 0 && t.offsetHeight <= 0 }, J.expr.filters.visible = function(t) { return !J.expr.filters.hidden(t) };
        var xe = /%20/g,
            be = /\[\]$/,
            Te = /\r?\n/g,
            we = /^(?:submit|button|image|reset|file)$/i,
            ke = /^(?:input|select|textarea|keygen)/i;
        J.param = function(t, e) {
            var i, n = [],
                r = function(t, e) { e = J.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e) };
            if (void 0 === e && (e = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(t) || t.jquery && !J.isPlainObject(t)) J.each(t, function() { r(this.name, this.value) });
            else
                for (i in t) j(i, t[i], e, r);
            return n.join("&").replace(xe, "+")
        }, J.fn.extend({ serialize: function() { return J.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var t = J.prop(this, "elements"); return t ? J.makeArray(t) : this }).filter(function() { var t = this.type; return this.name && !J(this).is(":disabled") && ke.test(this.nodeName) && !we.test(t) && (this.checked || !Tt.test(t)) }).map(function(t, e) { var i = J(this).val(); return null == i ? null : J.isArray(i) ? J.map(i, function(t) { return { name: e.name, value: t.replace(Te, "\r\n") } }) : { name: e.name, value: i.replace(Te, "\r\n") } }).get() } }), J.ajaxSettings.xhr = function() { try { return new XMLHttpRequest } catch (t) {} };
        var Pe = 0,
            Ce = {},
            Se = { 0: 200, 1223: 204 },
            Oe = J.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function() { for (var t in Ce) Ce[t]() }), Q.cors = !!Oe && "withCredentials" in Oe, Q.ajax = Oe = !!Oe, J.ajaxTransport(function(t) {
            var e;
            return Q.cors || Oe && !t.crossDomain ? {
                send: function(i, n) {
                    var r, s = t.xhr(),
                        a = ++Pe;
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (r in t.xhrFields) s[r] = t.xhrFields[r];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (r in i) s.setRequestHeader(r, i[r]);
                    e = function(t) { return function() { e && (delete Ce[a], e = s.onload = s.onerror = null, "abort" === t ? s.abort() : "error" === t ? n(s.status, s.statusText) : n(Se[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? { text: s.responseText } : void 0, s.getAllResponseHeaders())) } }, s.onload = e(), s.onerror = e("error"), e = Ce[a] = e("abort");
                    try { s.send(t.hasContent && t.data || null) } catch (t) { if (e) throw t }
                },
                abort: function() { e && e() }
            } : void 0
        }), J.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(t) { return J.globalEval(t), t } } }), J.ajaxPrefilter("script", function(t) { void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET") }), J.ajaxTransport("script", function(t) { if (t.crossDomain) { var e, i; return { send: function(n, r) { e = J("<script>").prop({ async: !0, charset: t.scriptCharset, src: t.url }).on("load error", i = function(t) { e.remove(), i = null, t && r("error" === t.type ? 404 : 200, t.type) }), G.head.appendChild(e[0]) }, abort: function() { i && i() } } } });
        var Ae = [],
            De = /(=)\?(?=&|$)|\?\?/;
        J.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var t = Ae.pop() || J.expando + "_" + ae++; return this[t] = !0, t } }), J.ajaxPrefilter("json jsonp", function(e, i, n) { var r, s, a, o = !1 !== e.jsonp && (De.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && De.test(e.data) && "data"); return o || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = J.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(De, "$1" + r) : !1 !== e.jsonp && (e.url += (oe.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() { return a || J.error(r + " was not called"), a[0] }, e.dataTypes[0] = "json", s = t[r], t[r] = function() { a = arguments }, n.always(function() { t[r] = s, e[r] && (e.jsonpCallback = i.jsonpCallback, Ae.push(r)), a && J.isFunction(s) && s(a[0]), a = s = void 0 }), "script") : void 0 }), J.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || G;
            var n = st.exec(t),
                r = !i && [];
            return n ? [e.createElement(n[1])] : (n = J.buildFragment([t], e, r), r && r.length && J(r).remove(), J.merge([], n.childNodes))
        };
        var Ee = J.fn.load;
        J.fn.load = function(t, e, i) {
            if ("string" != typeof t && Ee) return Ee.apply(this, arguments);
            var n, r, s, a = this,
                o = t.indexOf(" ");
            return o >= 0 && (n = J.trim(t.slice(o)), t = t.slice(0, o)), J.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), a.length > 0 && J.ajax({ url: t, type: r, dataType: "html", data: e }).done(function(t) { s = arguments, a.html(n ? J("<div>").append(J.parseHTML(t)).find(n) : t) }).complete(i && function(t, e) { a.each(i, s || [t.responseText, e, t]) }), this
        }, J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) { J.fn[e] = function(t) { return this.on(e, t) } }), J.expr.filters.animated = function(t) { return J.grep(J.timers, function(e) { return t === e.elem }).length };
        var Re = t.document.documentElement;
        J.offset = {
            setOffset: function(t, e, i) {
                var n, r, s, a, o, l, u = J.css(t, "position"),
                    h = J(t),
                    c = {};
                "static" === u && (t.style.position = "relative"), o = h.offset(), s = J.css(t, "top"), l = J.css(t, "left"), ("absolute" === u || "fixed" === u) && (s + l).indexOf("auto") > -1 ? (n = h.position(), a = n.top, r = n.left) : (a = parseFloat(s) || 0, r = parseFloat(l) || 0), J.isFunction(e) && (e = e.call(t, i, o)), null != e.top && (c.top = e.top - o.top + a), null != e.left && (c.left = e.left - o.left + r), "using" in e ? e.using.call(t, c) : h.css(c)
            }
        }, J.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) { J.offset.setOffset(this, t, e) });
                var e, i, n = this[0],
                    r = { top: 0, left: 0 },
                    s = n && n.ownerDocument;
                return s ? (e = s.documentElement, J.contains(e, n) ? (typeof n.getBoundingClientRect !== wt && (r = n.getBoundingClientRect()), i = z(s), { top: r.top + i.pageYOffset - e.clientTop, left: r.left + i.pageXOffset - e.clientLeft }) : r) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = { top: 0, left: 0 };
                    return "fixed" === J.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), J.nodeName(t[0], "html") || (n = t.offset()), n.top += J.css(t[0], "borderTopWidth", !0), n.left += J.css(t[0], "borderLeftWidth", !0)), { top: e.top - n.top - J.css(i, "marginTop", !0), left: e.left - n.left - J.css(i, "marginLeft", !0) }
                }
            },
            offsetParent: function() { return this.map(function() { for (var t = this.offsetParent || Re; t && !J.nodeName(t, "html") && "static" === J.css(t, "position");) t = t.offsetParent; return t || Re }) }
        }), J.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, i) {
            var n = "pageYOffset" === i;
            J.fn[e] = function(r) { return dt(this, function(e, r, s) { var a = z(e); return void 0 === s ? a ? a[i] : e[r] : void(a ? a.scrollTo(n ? t.pageXOffset : s, n ? s : t.pageYOffset) : e[r] = s) }, e, r, arguments.length, null) }
        }), J.each(["top", "left"], function(t, e) { J.cssHooks[e] = T(Q.pixelPosition, function(t, i) { return i ? (i = b(t, e), zt.test(i) ? J(t).position()[e] + "px" : i) : void 0 }) }), J.each({ Height: "height", Width: "width" }, function(t, e) {
            J.each({ padding: "inner" + t, content: e, "": "outer" + t }, function(i, n) {
                J.fn[n] = function(n, r) {
                    var s = arguments.length && (i || "boolean" != typeof n),
                        a = i || (!0 === n || !0 === r ? "margin" : "border");
                    return dt(this, function(e, i, n) { var r; return J.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? J.css(e, i, a) : J.style(e, i, n, a) }, e, s ? n : void 0, s, null)
                }
            })
        }), J.fn.size = function() { return this.length }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return J });
        var Ne = t.jQuery,
            Ie = t.$;
        return J.noConflict = function(e) { return t.$ === J && (t.$ = Ie), e && t.jQuery === J && (t.jQuery = Ne), J }, typeof e === wt && (t.jQuery = t.$ = J), J
    });
var moveForce = 30,
    rotateForce = 20;
$(document).mousemove(function(t) {
    var e = $(document).width(),
        i = $(document).height(),
        n = (t.pageX - e / 2) / (e / 2) * -moveForce,
        r = (t.pageY - i / 2) / (i / 2) * -moveForce,
        s = t.pageX / e * rotateForce * 2 - rotateForce,
        a = -(t.pageY / i * rotateForce * 2 - rotateForce);
    $(".popup").css("left", n + "px").css("top", r + "px").css("transform", "rotateX(" + a + "deg) rotateY(" + s + "deg)")
});