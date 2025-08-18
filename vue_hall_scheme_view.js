var Fc = Object.defineProperty;
var Nc = (e, t, n) => t in e ? Fc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Do = (e, t, n) => (Nc(e, typeof t != "symbol" ? t + "" : t, n), n), Io = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var wt = (e, t, n) => (Io(e, t, "read from private field"), n ? n.call(e) : t.get(e)), vn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Sn = (e, t, n, i) => (Io(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n);
/**
* @vue/shared v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Xr(e, t) {
  const n = new Set(e.split(","));
  return t ? (i) => n.has(i.toLowerCase()) : (i) => n.has(i);
}
const _t = {}, kn = [], ue = () => {
}, Dc = () => !1, ts = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), qr = (e) => e.startsWith("onUpdate:"), Vt = Object.assign, Zr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ic = Object.prototype.hasOwnProperty, pt = (e, t) => Ic.call(e, t), st = Array.isArray, ni = (e) => es(e) === "[object Map]", Gc = (e) => es(e) === "[object Set]", it = (e) => typeof e == "function", Nt = (e) => typeof e == "string", Vn = (e) => typeof e == "symbol", kt = (e) => e !== null && typeof e == "object", Xa = (e) => (kt(e) || it(e)) && it(e.then) && it(e.catch), Vc = Object.prototype.toString, es = (e) => Vc.call(e), Uc = (e) => es(e).slice(8, -1), Bc = (e) => es(e) === "[object Object]", Jr = (e) => Nt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ii = /* @__PURE__ */ Xr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ns = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Hc = /-(\w)/g, _e = ns(
  (e) => e.replace(Hc, (t, n) => n ? n.toUpperCase() : "")
), $c = /\B([A-Z])/g, dn = ns(
  (e) => e.replace($c, "-$1").toLowerCase()
), is = ns((e) => e.charAt(0).toUpperCase() + e.slice(1)), rr = ns(
  (e) => e ? `on${is(e)}` : ""
), $e = (e, t) => !Object.is(e, t), or = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, qa = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, jc = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Go;
const Za = () => Go || (Go = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ss(e) {
  if (st(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], s = Nt(i) ? Yc(i) : ss(i);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (Nt(e) || kt(e))
    return e;
}
const Wc = /;(?![^(]*\))/g, zc = /:([^]+)/, Kc = /\/\*[^]*?\*\//g;
function Yc(e) {
  const t = {};
  return e.replace(Kc, "").split(Wc).forEach((n) => {
    if (n) {
      const i = n.split(zc);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function rs(e) {
  let t = "";
  if (Nt(e))
    t = e;
  else if (st(e))
    for (let n = 0; n < e.length; n++) {
      const i = rs(e[n]);
      i && (t += i + " ");
    }
  else if (kt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Xc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", qc = /* @__PURE__ */ Xr(Xc);
function Ja(e) {
  return !!e || e === "";
}
/**
* @vue/reactivity v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let te;
class Zc {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = te, !t && te && (this.index = (te.scopes || (te.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = te;
      try {
        return te = this, t();
      } finally {
        te = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    te = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    te = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, i = this.scopes.length; n < i; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Jc() {
  return te;
}
let xt;
const ar = /* @__PURE__ */ new WeakSet();
class Qa {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.nextEffect = void 0, this.cleanup = void 0, this.scheduler = void 0, te && te.active && te.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ar.has(this) && (ar.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || (this.flags |= 8, this.nextEffect = si, si = this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Vo(this), el(this);
    const t = xt, n = fe;
    xt = this, fe = !0;
    try {
      return this.fn();
    } finally {
      nl(this), xt = t, fe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        eo(t);
      this.deps = this.depsTail = void 0, Vo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ar.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ar(this) && this.run();
  }
  get dirty() {
    return Ar(this);
  }
}
let tl = 0, si;
function Qr() {
  tl++;
}
function to() {
  if (--tl > 0)
    return;
  let e;
  for (; si; ) {
    let t = si;
    for (si = void 0; t; ) {
      const n = t.nextEffect;
      if (t.nextEffect = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
      t = n;
    }
  }
  if (e)
    throw e;
}
function el(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function nl(e) {
  let t, n = e.depsTail;
  for (let i = n; i; i = i.prevDep)
    i.version === -1 ? (i === n && (n = i.prevDep), eo(i), Qc(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0;
  e.deps = t, e.depsTail = n;
}
function Ar(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && il(t.dep.computed) === !1 || t.dep.version !== t.version)
      return !0;
  return !!e._dirty;
}
function il(e) {
  if (e.flags & 2)
    return !1;
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ci))
    return;
  e.globalVersion = ci;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && !Ar(e)) {
    e.flags &= -3;
    return;
  }
  const n = xt, i = fe;
  xt = e, fe = !0;
  try {
    el(e);
    const s = e.fn();
    (t.version === 0 || $e(s, e._value)) && (e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    xt = n, fe = i, nl(e), e.flags &= -3;
  }
}
function eo(e) {
  const { dep: t, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), t.subs === e && (t.subs = n), !t.subs && t.computed) {
    t.computed.flags &= -5;
    for (let s = t.computed.deps; s; s = s.nextDep)
      eo(s);
  }
}
function Qc(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let fe = !0;
const sl = [];
function We() {
  sl.push(fe), fe = !1;
}
function ze() {
  const e = sl.pop();
  fe = e === void 0 ? !0 : e;
}
function Vo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = xt;
    xt = void 0;
    try {
      t();
    } finally {
      xt = n;
    }
  }
}
let ci = 0;
class no {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0;
  }
  track(t) {
    if (!xt || !fe)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== xt)
      n = this.activeLink = {
        dep: this,
        sub: xt,
        version: this.version,
        nextDep: void 0,
        prevDep: void 0,
        nextSub: void 0,
        prevSub: void 0,
        prevActiveLink: void 0
      }, xt.deps ? (n.prevDep = xt.depsTail, xt.depsTail.nextDep = n, xt.depsTail = n) : xt.deps = xt.depsTail = n, xt.flags & 4 && rl(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = xt.depsTail, n.nextDep = void 0, xt.depsTail.nextDep = n, xt.depsTail = n, xt.deps === n && (xt.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, ci++, this.notify(t);
  }
  notify(t) {
    Qr();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify();
    } finally {
      to();
    }
  }
}
function rl(e) {
  const t = e.dep.computed;
  if (t && !e.dep.subs) {
    t.flags |= 20;
    for (let i = t.deps; i; i = i.nextDep)
      rl(i);
  }
  const n = e.dep.subs;
  n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
}
const Rr = /* @__PURE__ */ new WeakMap(), ln = Symbol(
  ""
), kr = Symbol(
  ""
), hi = Symbol(
  ""
);
function $t(e, t, n) {
  if (fe && xt) {
    let i = Rr.get(e);
    i || Rr.set(e, i = /* @__PURE__ */ new Map());
    let s = i.get(n);
    s || i.set(n, s = new no()), s.track();
  }
}
function ke(e, t, n, i, s, r) {
  const o = Rr.get(e);
  if (!o) {
    ci++;
    return;
  }
  let a = [];
  if (t === "clear")
    a = [...o.values()];
  else {
    const l = st(e), h = l && Jr(n);
    if (l && n === "length") {
      const c = Number(i);
      o.forEach((g, f) => {
        (f === "length" || f === hi || !Vn(f) && f >= c) && a.push(g);
      });
    } else {
      const c = (g) => g && a.push(g);
      switch (n !== void 0 && c(o.get(n)), h && c(o.get(hi)), t) {
        case "add":
          l ? h && c(o.get("length")) : (c(o.get(ln)), ni(e) && c(o.get(kr)));
          break;
        case "delete":
          l || (c(o.get(ln)), ni(e) && c(o.get(kr)));
          break;
        case "set":
          ni(e) && c(o.get(ln));
          break;
      }
    }
  }
  Qr();
  for (const l of a)
    l.trigger();
  to();
}
function Cn(e) {
  const t = mt(e);
  return t === e ? t : ($t(t, "iterate", hi), ge(e) ? t : t.map(Bt));
}
function os(e) {
  return $t(e = mt(e), "iterate", hi), e;
}
const th = {
  __proto__: null,
  [Symbol.iterator]() {
    return lr(this, Symbol.iterator, Bt);
  },
  concat(...e) {
    return Cn(this).concat(
      ...e.map((t) => st(t) ? Cn(t) : t)
    );
  },
  entries() {
    return lr(this, "entries", (e) => (e[1] = Bt(e[1]), e));
  },
  every(e, t) {
    return Ee(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ee(this, "filter", e, t, (n) => n.map(Bt), arguments);
  },
  find(e, t) {
    return Ee(this, "find", e, t, Bt, arguments);
  },
  findIndex(e, t) {
    return Ee(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ee(this, "findLast", e, t, Bt, arguments);
  },
  findLastIndex(e, t) {
    return Ee(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ee(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return cr(this, "includes", e);
  },
  indexOf(...e) {
    return cr(this, "indexOf", e);
  },
  join(e) {
    return Cn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return cr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ee(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Xn(this, "pop");
  },
  push(...e) {
    return Xn(this, "push", e);
  },
  reduce(e, ...t) {
    return Uo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Uo(this, "reduceRight", e, t);
  },
  shift() {
    return Xn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ee(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Xn(this, "splice", e);
  },
  toReversed() {
    return Cn(this).toReversed();
  },
  toSorted(e) {
    return Cn(this).toSorted(e);
  },
  toSpliced(...e) {
    return Cn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Xn(this, "unshift", e);
  },
  values() {
    return lr(this, "values", Bt);
  }
};
function lr(e, t, n) {
  const i = os(e), s = i[t]();
  return i !== e && !ge(e) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.value && (r.value = n(r.value)), r;
  }), s;
}
const eh = Array.prototype;
function Ee(e, t, n, i, s, r) {
  const o = os(e), a = o !== e && !ge(e), l = o[t];
  if (l !== eh[t]) {
    const g = l.apply(e, r);
    return a ? Bt(g) : g;
  }
  let h = n;
  o !== e && (a ? h = function(g, f) {
    return n.call(this, Bt(g), f, e);
  } : n.length > 2 && (h = function(g, f) {
    return n.call(this, g, f, e);
  }));
  const c = l.call(o, h, i);
  return a && s ? s(c) : c;
}
function Uo(e, t, n, i) {
  const s = os(e);
  let r = n;
  return s !== e && (ge(e) ? n.length > 3 && (r = function(o, a, l) {
    return n.call(this, o, a, l, e);
  }) : r = function(o, a, l) {
    return n.call(this, o, Bt(a), l, e);
  }), s[t](r, ...i);
}
function cr(e, t, n) {
  const i = mt(e);
  $t(i, "iterate", hi);
  const s = i[t](...n);
  return (s === -1 || s === !1) && oo(n[0]) ? (n[0] = mt(n[0]), i[t](...n)) : s;
}
function Xn(e, t, n = []) {
  We(), Qr();
  const i = mt(e)[t].apply(e, n);
  return to(), ze(), i;
}
const nh = /* @__PURE__ */ Xr("__proto__,__v_isRef,__isVue"), ol = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Vn)
);
function ih(e) {
  Vn(e) || (e = String(e));
  const t = mt(this);
  return $t(t, "has", e), t.hasOwnProperty(e);
}
class al {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, i) {
    const s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return i === (s ? r ? _h : dl : r ? hl : cl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = st(t);
    if (!s) {
      let l;
      if (o && (l = th[n]))
        return l;
      if (n === "hasOwnProperty")
        return ih;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ht(t) ? t : i
    );
    return (Vn(n) ? ol.has(n) : nh(n)) || (s || $t(t, "get", n), r) ? a : Ht(a) ? o && Jr(n) ? a : a.value : kt(a) ? s ? ul(a) : Un(a) : a;
  }
}
class ll extends al {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, s) {
    let r = t[n];
    if (!this._isShallow) {
      const l = cn(r);
      if (!ge(i) && !cn(i) && (r = mt(r), i = mt(i)), !st(t) && Ht(r) && !Ht(i))
        return l ? !1 : (r.value = i, !0);
    }
    const o = st(t) && Jr(n) ? Number(n) < t.length : pt(t, n), a = Reflect.set(
      t,
      n,
      i,
      Ht(t) ? t : s
    );
    return t === mt(s) && (o ? $e(i, r) && ke(t, "set", n, i) : ke(t, "add", n, i)), a;
  }
  deleteProperty(t, n) {
    const i = pt(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && i && ke(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Vn(n) || !ol.has(n)) && $t(t, "has", n), i;
  }
  ownKeys(t) {
    return $t(
      t,
      "iterate",
      st(t) ? "length" : ln
    ), Reflect.ownKeys(t);
  }
}
class sh extends al {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const rh = /* @__PURE__ */ new ll(), oh = /* @__PURE__ */ new sh(), ah = /* @__PURE__ */ new ll(!0);
const io = (e) => e, as = (e) => Reflect.getPrototypeOf(e);
function Pi(e, t, n = !1, i = !1) {
  e = e.__v_raw;
  const s = mt(e), r = mt(t);
  n || ($e(t, r) && $t(s, "get", t), $t(s, "get", r));
  const { has: o } = as(s), a = i ? io : n ? ao : Bt;
  if (o.call(s, t))
    return a(e.get(t));
  if (o.call(s, r))
    return a(e.get(r));
  e !== s && e.get(t);
}
function Ti(e, t = !1) {
  const n = this.__v_raw, i = mt(n), s = mt(e);
  return t || ($e(e, s) && $t(i, "has", e), $t(i, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Ai(e, t = !1) {
  return e = e.__v_raw, !t && $t(mt(e), "iterate", ln), Reflect.get(e, "size", e);
}
function Bo(e, t = !1) {
  !t && !ge(e) && !cn(e) && (e = mt(e));
  const n = mt(this);
  return as(n).has.call(n, e) || (n.add(e), ke(n, "add", e, e)), this;
}
function Ho(e, t, n = !1) {
  !n && !ge(t) && !cn(t) && (t = mt(t));
  const i = mt(this), { has: s, get: r } = as(i);
  let o = s.call(i, e);
  o || (e = mt(e), o = s.call(i, e));
  const a = r.call(i, e);
  return i.set(e, t), o ? $e(t, a) && ke(i, "set", e, t) : ke(i, "add", e, t), this;
}
function $o(e) {
  const t = mt(this), { has: n, get: i } = as(t);
  let s = n.call(t, e);
  s || (e = mt(e), s = n.call(t, e)), i && i.call(t, e);
  const r = t.delete(e);
  return s && ke(t, "delete", e, void 0), r;
}
function jo() {
  const e = mt(this), t = e.size !== 0, n = e.clear();
  return t && ke(e, "clear", void 0, void 0), n;
}
function Ri(e, t) {
  return function(i, s) {
    const r = this, o = r.__v_raw, a = mt(o), l = t ? io : e ? ao : Bt;
    return !e && $t(a, "iterate", ln), o.forEach((h, c) => i.call(s, l(h), l(c), r));
  };
}
function ki(e, t, n) {
  return function(...i) {
    const s = this.__v_raw, r = mt(s), o = ni(r), a = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, h = s[e](...i), c = n ? io : t ? ao : Bt;
    return !t && $t(
      r,
      "iterate",
      l ? kr : ln
    ), {
      // iterator protocol
      next() {
        const { value: g, done: f } = h.next();
        return f ? { value: g, done: f } : {
          value: a ? [c(g[0]), c(g[1])] : c(g),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ge(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function lh() {
  const e = {
    get(r) {
      return Pi(this, r);
    },
    get size() {
      return Ai(this);
    },
    has: Ti,
    add: Bo,
    set: Ho,
    delete: $o,
    clear: jo,
    forEach: Ri(!1, !1)
  }, t = {
    get(r) {
      return Pi(this, r, !1, !0);
    },
    get size() {
      return Ai(this);
    },
    has: Ti,
    add(r) {
      return Bo.call(this, r, !0);
    },
    set(r, o) {
      return Ho.call(this, r, o, !0);
    },
    delete: $o,
    clear: jo,
    forEach: Ri(!1, !0)
  }, n = {
    get(r) {
      return Pi(this, r, !0);
    },
    get size() {
      return Ai(this, !0);
    },
    has(r) {
      return Ti.call(this, r, !0);
    },
    add: Ge("add"),
    set: Ge("set"),
    delete: Ge("delete"),
    clear: Ge("clear"),
    forEach: Ri(!0, !1)
  }, i = {
    get(r) {
      return Pi(this, r, !0, !0);
    },
    get size() {
      return Ai(this, !0);
    },
    has(r) {
      return Ti.call(this, r, !0);
    },
    add: Ge("add"),
    set: Ge("set"),
    delete: Ge("delete"),
    clear: Ge("clear"),
    forEach: Ri(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    e[r] = ki(r, !1, !1), n[r] = ki(r, !0, !1), t[r] = ki(r, !1, !0), i[r] = ki(
      r,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    i
  ];
}
const [
  ch,
  hh,
  dh,
  uh
] = /* @__PURE__ */ lh();
function so(e, t) {
  const n = t ? e ? uh : dh : e ? hh : ch;
  return (i, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? i : Reflect.get(
    pt(n, s) && s in i ? n : i,
    s,
    r
  );
}
const fh = {
  get: /* @__PURE__ */ so(!1, !1)
}, gh = {
  get: /* @__PURE__ */ so(!1, !0)
}, ph = {
  get: /* @__PURE__ */ so(!0, !1)
};
const cl = /* @__PURE__ */ new WeakMap(), hl = /* @__PURE__ */ new WeakMap(), dl = /* @__PURE__ */ new WeakMap(), _h = /* @__PURE__ */ new WeakMap();
function mh(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function yh(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : mh(Uc(e));
}
function Un(e) {
  return cn(e) ? e : ro(
    e,
    !1,
    rh,
    fh,
    cl
  );
}
function bh(e) {
  return ro(
    e,
    !1,
    ah,
    gh,
    hl
  );
}
function ul(e) {
  return ro(
    e,
    !0,
    oh,
    ph,
    dl
  );
}
function ro(e, t, n, i, s) {
  if (!kt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const o = yh(e);
  if (o === 0)
    return e;
  const a = new Proxy(
    e,
    o === 2 ? i : n
  );
  return s.set(e, a), a;
}
function Mn(e) {
  return cn(e) ? Mn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function cn(e) {
  return !!(e && e.__v_isReadonly);
}
function ge(e) {
  return !!(e && e.__v_isShallow);
}
function oo(e) {
  return e ? !!e.__v_raw : !1;
}
function mt(e) {
  const t = e && e.__v_raw;
  return t ? mt(t) : e;
}
function vh(e) {
  return Object.isExtensible(e) && qa(e, "__v_skip", !0), e;
}
const Bt = (e) => kt(e) ? Un(e) : e, ao = (e) => kt(e) ? ul(e) : e;
function Ht(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ee(e) {
  return fl(e, !1);
}
function Sh(e) {
  return fl(e, !0);
}
function fl(e, t) {
  return Ht(e) ? e : new Ch(e, t);
}
class Ch {
  constructor(t, n) {
    this.dep = new no(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : mt(t), this._value = n ? t : Bt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || ge(t) || cn(t);
    t = i ? t : mt(t), $e(t, n) && (this._rawValue = t, this._value = i ? t : Bt(t), this.dep.trigger());
  }
}
function Hi(e) {
  return Ht(e) ? e.value : e;
}
const wh = {
  get: (e, t, n) => Hi(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const s = e[t];
    return Ht(s) && !Ht(n) ? (s.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function gl(e) {
  return Mn(e) ? e : new Proxy(e, wh);
}
class xh {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new no(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ci - 1, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    xt !== this && (this.flags |= 16, this.dep.notify());
  }
  get value() {
    const t = this.dep.track();
    return il(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Eh(e, t, n = !1) {
  let i, s;
  return it(e) ? i = e : (i = e.get, s = e.set), new xh(i, s, n);
}
const Mi = {}, $i = /* @__PURE__ */ new WeakMap();
let sn;
function Ph(e, t = !1, n = sn) {
  if (n) {
    let i = $i.get(n);
    i || $i.set(n, i = []), i.push(e);
  }
}
function Th(e, t, n = _t) {
  const { immediate: i, deep: s, once: r, scheduler: o, augmentJob: a, call: l } = n, h = (p) => s ? p : ge(p) || s === !1 || s === 0 ? Re(p, 1) : Re(p);
  let c, g, f, _, u = !1, m = !1;
  if (Ht(e) ? (g = () => e.value, u = ge(e)) : Mn(e) ? (g = () => h(e), u = !0) : st(e) ? (m = !0, u = e.some((p) => Mn(p) || ge(p)), g = () => e.map((p) => {
    if (Ht(p))
      return p.value;
    if (Mn(p))
      return h(p);
    if (it(p))
      return l ? l(p, 2) : p();
  })) : it(e) ? t ? g = l ? () => l(e, 2) : e : g = () => {
    if (f) {
      We();
      try {
        f();
      } finally {
        ze();
      }
    }
    const p = sn;
    sn = c;
    try {
      return l ? l(e, 3, [_]) : e(_);
    } finally {
      sn = p;
    }
  } : g = ue, t && s) {
    const p = g, v = s === !0 ? 1 / 0 : s;
    g = () => Re(p(), v);
  }
  const y = Jc(), C = () => {
    c.stop(), y && Zr(y.effects, c);
  };
  if (r)
    if (t) {
      const p = t;
      t = (...v) => {
        p(...v), C();
      };
    } else {
      const p = g;
      g = () => {
        p(), C();
      };
    }
  let x = m ? new Array(e.length).fill(Mi) : Mi;
  const d = (p) => {
    if (!(!(c.flags & 1) || !c.dirty && !p))
      if (t) {
        const v = c.run();
        if (s || u || (m ? v.some((P, R) => $e(P, x[R])) : $e(v, x))) {
          f && f();
          const P = sn;
          sn = c;
          try {
            const R = [
              v,
              // pass undefined as the old value when it's changed for the first time
              x === Mi ? void 0 : m && x[0] === Mi ? [] : x,
              _
            ];
            l ? l(t, 3, R) : (
              // @ts-expect-error
              t(...R)
            ), x = v;
          } finally {
            sn = P;
          }
        }
      } else
        c.run();
  };
  return a && a(d), c = new Qa(g), c.scheduler = o ? () => o(d, !1) : d, _ = (p) => Ph(p, !1, c), f = c.onStop = () => {
    const p = $i.get(c);
    if (p) {
      if (l)
        l(p, 4);
      else
        for (const v of p)
          v();
      $i.delete(c);
    }
  }, t ? i ? d(!0) : x = c.run() : o ? o(d.bind(null, !0), !0) : c.run(), C.pause = c.pause.bind(c), C.resume = c.resume.bind(c), C.stop = C, C;
}
function Re(e, t = 1 / 0, n) {
  if (t <= 0 || !kt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ht(e))
    Re(e.value, t, n);
  else if (st(e))
    for (let i = 0; i < e.length; i++)
      Re(e[i], t, n);
  else if (Gc(e) || ni(e))
    e.forEach((i) => {
      Re(i, t, n);
    });
  else if (Bc(e)) {
    for (const i in e)
      Re(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && Re(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function mi(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (s) {
    ls(s, t, n);
  }
}
function we(e, t, n, i) {
  if (it(e)) {
    const s = mi(e, t, n, i);
    return s && Xa(s) && s.catch((r) => {
      ls(r, t, n);
    }), s;
  }
  if (st(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(we(e[r], t, n, i));
    return s;
  }
}
function ls(e, t, n, i = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || _t;
  if (t) {
    let a = t.parent;
    const l = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let g = 0; g < c.length; g++)
          if (c[g](e, l, h) === !1)
            return;
      }
      a = a.parent;
    }
    if (r) {
      We(), mi(r, null, 10, [
        e,
        l,
        h
      ]), ze();
      return;
    }
  }
  Ah(e, n, s, i, o);
}
function Ah(e, t, n, i = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
let di = !1, Mr = !1;
const ie = [];
let an = 0;
const On = [];
let Be = null, Tn = 0;
const pl = /* @__PURE__ */ Promise.resolve();
let lo = null;
function Rh(e) {
  const t = lo || pl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function kh(e) {
  let t = di ? an + 1 : 0, n = ie.length;
  for (; t < n; ) {
    const i = t + n >>> 1, s = ie[i], r = ui(s);
    r < e || r === e && s.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function co(e) {
  if (!(e.flags & 1)) {
    const t = ui(e), n = ie[ie.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ui(n) ? ie.push(e) : ie.splice(kh(t), 0, e), e.flags & 4 || (e.flags |= 1), _l();
  }
}
function _l() {
  !di && !Mr && (Mr = !0, lo = pl.then(yl));
}
function Mh(e) {
  st(e) ? On.push(...e) : Be && e.id === -1 ? Be.splice(Tn + 1, 0, e) : e.flags & 1 || (On.push(e), e.flags & 4 || (e.flags |= 1)), _l();
}
function Wo(e, t, n = di ? an + 1 : 0) {
  for (; n < ie.length; n++) {
    const i = ie[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      ie.splice(n, 1), n--, i(), i.flags &= -2;
    }
  }
}
function ml(e) {
  if (On.length) {
    const t = [...new Set(On)].sort(
      (n, i) => ui(n) - ui(i)
    );
    if (On.length = 0, Be) {
      Be.push(...t);
      return;
    }
    for (Be = t, Tn = 0; Tn < Be.length; Tn++) {
      const n = Be[Tn];
      n.flags & 8 || n(), n.flags &= -2;
    }
    Be = null, Tn = 0;
  }
}
const ui = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function yl(e) {
  Mr = !1, di = !0;
  const t = ue;
  try {
    for (an = 0; an < ie.length; an++) {
      const n = ie[an];
      n && !(n.flags & 8) && (mi(
        n,
        n.i,
        n.i ? 15 : 14
      ), n.flags &= -2);
    }
  } finally {
    an = 0, ie.length = 0, ml(), di = !1, lo = null, (ie.length || On.length) && yl();
  }
}
let Xt = null, bl = null;
function ji(e) {
  const t = Xt;
  return Xt = e, bl = e && e.type.__scopeId || null, t;
}
function An(e, t = Xt, n) {
  if (!t || e._n)
    return e;
  const i = (...s) => {
    i._d && ta(-1);
    const r = ji(t);
    let o;
    try {
      o = e(...s);
    } finally {
      ji(r), i._d && ta(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Oh(e, t) {
  if (Xt === null)
    return e;
  const n = fs(Xt), i = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [r, o, a, l = _t] = t[s];
    r && (it(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Re(o), i.push({
      dir: r,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function Qe(e, t, n, i) {
  const s = e.dirs, r = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    r && (a.oldValue = r[o].value);
    let l = a.dir[i];
    l && (We(), we(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), ze());
  }
}
const Lh = Symbol("_vte"), Fh = (e) => e.__isTeleport;
function vl(e, t) {
  e.shapeFlag & 6 && e.component ? vl(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Sl(e, t) {
  return it(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => Vt({ name: e.name }, t, { setup: e }))()
  ) : e;
}
function Cl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Or(e, t, n, i, s = !1) {
  if (st(e)) {
    e.forEach(
      (_, u) => Or(
        _,
        t && (st(t) ? t[u] : t),
        n,
        i,
        s
      )
    );
    return;
  }
  if (ri(i) && !s)
    return;
  const r = i.shapeFlag & 4 ? fs(i.component) : i.el, o = s ? null : r, { i: a, r: l } = e, h = t && t.r, c = a.refs === _t ? a.refs = {} : a.refs, g = a.setupState, f = g === _t ? () => !1 : (_) => pt(g, _) && !(Object.getOwnPropertyDescriptor(c, _) || _t).get;
  if (h != null && h !== l && (Nt(h) ? (c[h] = null, f(h) && (g[h] = null)) : Ht(h) && (h.value = null)), it(l))
    mi(l, a, 12, [o, c]);
  else {
    const _ = Nt(l), u = Ht(l);
    if (_ || u) {
      const m = () => {
        if (e.f) {
          const y = _ ? f(l) ? g[l] : c[l] : l.value;
          s ? st(y) && Zr(y, r) : st(y) ? y.includes(r) || y.push(r) : _ ? (c[l] = [r], f(l) && (g[l] = c[l])) : (l.value = [r], e.k && (c[e.k] = l.value));
        } else
          _ ? (c[l] = o, f(l) && (g[l] = o)) : u && (l.value = o, e.k && (c[e.k] = o));
      };
      o ? (m.id = -1, Qt(m, n)) : m();
    }
  }
}
const ri = (e) => !!e.type.__asyncLoader, wl = (e) => e.type.__isKeepAlive;
function Nh(e, t) {
  xl(e, "a", t);
}
function Dh(e, t) {
  xl(e, "da", t);
}
function xl(e, t, n = Gt) {
  const i = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (cs(t, i, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      wl(s.parent.vnode) && Ih(i, t, n, s), s = s.parent;
  }
}
function Ih(e, t, n, i) {
  const s = cs(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  uo(() => {
    Zr(i[t], s);
  }, n);
}
function cs(e, t, n = Gt, i = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      We();
      const a = bi(n), l = we(t, n, e, o);
      return a(), ze(), l;
    });
    return i ? s.unshift(r) : s.push(r), r;
  }
}
const Le = (e) => (t, n = Gt) => {
  (!us || e === "sp") && cs(e, (...i) => t(...i), n);
}, Gh = Le("bm"), yi = Le("m"), Vh = Le(
  "bu"
), ho = Le("u"), El = Le(
  "bum"
), uo = Le("um"), Uh = Le(
  "sp"
), Bh = Le("rtg"), Hh = Le("rtc");
function $h(e, t = Gt) {
  cs("ec", e, t);
}
const Pl = "components";
function tn(e, t) {
  return Wh(Pl, e, !0, t) || e;
}
const jh = Symbol.for("v-ndc");
function Wh(e, t, n = !0, i = !1) {
  const s = Xt || Gt;
  if (s) {
    const r = s.type;
    if (e === Pl) {
      const a = F0(
        r,
        !1
      );
      if (a && (a === t || a === _e(t) || a === is(_e(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      zo(s[e] || r[e], t) || // global registration
      zo(s.appContext[e], t)
    );
    return !o && i ? r : o;
  }
}
function zo(e, t) {
  return e && (e[t] || e[_e(t)] || e[is(_e(t))]);
}
function zh(e, t, n, i) {
  let s;
  const r = n && n[i], o = st(e);
  if (o || Nt(e)) {
    const a = o && Mn(e);
    a && (e = os(e)), s = new Array(e.length);
    for (let l = 0, h = e.length; l < h; l++)
      s[l] = t(
        a ? Bt(e[l]) : e[l],
        l,
        void 0,
        r && r[l]
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let a = 0; a < e; a++)
      s[a] = t(a + 1, a, void 0, r && r[a]);
  } else if (kt(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (a, l) => t(a, l, void 0, r && r[l])
      );
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let l = 0, h = a.length; l < h; l++) {
        const c = a[l];
        s[l] = t(e[c], c, l, r && r[l]);
      }
    }
  else
    s = [];
  return n && (n[i] = s), s;
}
const Lr = (e) => e ? zl(e) ? fs(e) : Lr(e.parent) : null, oi = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Vt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Lr(e.parent),
    $root: (e) => Lr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => fo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      co(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Rh.bind(e.proxy)),
    $watch: (e) => f0.bind(e)
  })
), hr = (e, t) => e !== _t && !e.__isScriptSetup && pt(e, t), Kh = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: s, props: r, accessCache: o, type: a, appContext: l } = e;
    let h;
    if (t[0] !== "$") {
      const _ = o[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return i[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (hr(i, t))
          return o[t] = 1, i[t];
        if (s !== _t && pt(s, t))
          return o[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && pt(h, t)
        )
          return o[t] = 3, r[t];
        if (n !== _t && pt(n, t))
          return o[t] = 4, n[t];
        Fr && (o[t] = 0);
      }
    }
    const c = oi[t];
    let g, f;
    if (c)
      return t === "$attrs" && $t(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (g = a.__cssModules) && (g = g[t])
    )
      return g;
    if (n !== _t && pt(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, pt(f, t)
    )
      return f[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: s, ctx: r } = e;
    return hr(s, t) ? (s[t] = n, !0) : i !== _t && pt(i, t) ? (i[t] = n, !0) : pt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: s, propsOptions: r }
  }, o) {
    let a;
    return !!n[o] || e !== _t && pt(e, o) || hr(t, o) || (a = r[0]) && pt(a, o) || pt(i, o) || pt(oi, o) || pt(s.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : pt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ko(e) {
  return st(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Fr = !0;
function Yh(e) {
  const t = fo(e), n = e.proxy, i = e.ctx;
  Fr = !1, t.beforeCreate && Yo(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: o,
    watch: a,
    provide: l,
    inject: h,
    // lifecycle
    created: c,
    beforeMount: g,
    mounted: f,
    beforeUpdate: _,
    updated: u,
    activated: m,
    deactivated: y,
    beforeDestroy: C,
    beforeUnmount: x,
    destroyed: d,
    unmounted: p,
    render: v,
    renderTracked: P,
    renderTriggered: R,
    errorCaptured: S,
    serverPrefetch: k,
    // public API
    expose: T,
    inheritAttrs: M,
    // assets
    components: F,
    directives: B,
    filters: Y
  } = t;
  if (h && Xh(h, i, null), o)
    for (const X in o) {
      const U = o[X];
      it(U) && (i[X] = U.bind(n));
    }
  if (s) {
    const X = s.call(n, n);
    kt(X) && (e.data = Un(X));
  }
  if (Fr = !0, r)
    for (const X in r) {
      const U = r[X], rt = it(U) ? U.bind(n, n) : it(U.get) ? U.get.bind(n, n) : ue, J = !it(U) && it(U.set) ? U.set.bind(n) : ue, nt = D0({
        get: rt,
        set: J
      });
      Object.defineProperty(i, X, {
        enumerable: !0,
        configurable: !0,
        get: () => nt.value,
        set: (W) => nt.value = W
      });
    }
  if (a)
    for (const X in a)
      Tl(a[X], i, n, X);
  if (l) {
    const X = it(l) ? l.call(n) : l;
    Reflect.ownKeys(X).forEach((U) => {
      rn(U, X[U]);
    });
  }
  c && Yo(c, e, "c");
  function et(X, U) {
    st(U) ? U.forEach((rt) => X(rt.bind(n))) : U && X(U.bind(n));
  }
  if (et(Gh, g), et(yi, f), et(Vh, _), et(ho, u), et(Nh, m), et(Dh, y), et($h, S), et(Hh, P), et(Bh, R), et(El, x), et(uo, p), et(Uh, k), st(T))
    if (T.length) {
      const X = e.exposed || (e.exposed = {});
      T.forEach((U) => {
        Object.defineProperty(X, U, {
          get: () => n[U],
          set: (rt) => n[U] = rt
        });
      });
    } else
      e.exposed || (e.exposed = {});
  v && e.render === ue && (e.render = v), M != null && (e.inheritAttrs = M), F && (e.components = F), B && (e.directives = B), k && Cl(e);
}
function Xh(e, t, n = ue) {
  st(e) && (e = Nr(e));
  for (const i in e) {
    const s = e[i];
    let r;
    kt(s) ? "default" in s ? r = de(
      s.from || i,
      s.default,
      !0
    ) : r = de(s.from || i) : r = de(s), Ht(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r;
  }
}
function Yo(e, t, n) {
  we(
    st(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Tl(e, t, n, i) {
  let s = i.includes(".") ? Bl(n, i) : () => n[i];
  if (Nt(e)) {
    const r = t[e];
    it(r) && ai(s, r);
  } else if (it(e))
    ai(s, e.bind(n));
  else if (kt(e))
    if (st(e))
      e.forEach((r) => Tl(r, t, n, i));
    else {
      const r = it(e.handler) ? e.handler.bind(n) : t[e.handler];
      it(r) && ai(s, r, e);
    }
}
function fo(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, a = r.get(t);
  let l;
  return a ? l = a : !s.length && !n && !i ? l = t : (l = {}, s.length && s.forEach(
    (h) => Wi(l, h, o, !0)
  ), Wi(l, t, o)), kt(t) && r.set(t, l), l;
}
function Wi(e, t, n, i = !1) {
  const { mixins: s, extends: r } = t;
  r && Wi(e, r, n, !0), s && s.forEach(
    (o) => Wi(e, o, n, !0)
  );
  for (const o in t)
    if (!(i && o === "expose")) {
      const a = qh[o] || n && n[o];
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  return e;
}
const qh = {
  data: Xo,
  props: qo,
  emits: qo,
  // objects
  methods: ei,
  computed: ei,
  // lifecycle
  beforeCreate: zt,
  created: zt,
  beforeMount: zt,
  mounted: zt,
  beforeUpdate: zt,
  updated: zt,
  beforeDestroy: zt,
  beforeUnmount: zt,
  destroyed: zt,
  unmounted: zt,
  activated: zt,
  deactivated: zt,
  errorCaptured: zt,
  serverPrefetch: zt,
  // assets
  components: ei,
  directives: ei,
  // watch
  watch: Jh,
  // provide / inject
  provide: Xo,
  inject: Zh
};
function Xo(e, t) {
  return t ? e ? function() {
    return Vt(
      it(e) ? e.call(this, this) : e,
      it(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Zh(e, t) {
  return ei(Nr(e), Nr(t));
}
function Nr(e) {
  if (st(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function zt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ei(e, t) {
  return e ? Vt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function qo(e, t) {
  return e ? st(e) && st(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Vt(
    /* @__PURE__ */ Object.create(null),
    Ko(e),
    Ko(t ?? {})
  ) : t;
}
function Jh(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Vt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = zt(e[i], t[i]);
  return n;
}
function Al() {
  return {
    app: null,
    config: {
      isNativeTag: Dc,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Qh = 0;
function t0(e, t) {
  return function(i, s = null) {
    it(i) || (i = Vt({}, i)), s != null && !kt(s) && (s = null);
    const r = Al(), o = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const h = r.app = {
      _uid: Qh++,
      _component: i,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: G0,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...g) {
        return o.has(c) || (c && it(c.install) ? (o.add(c), c.install(h, ...g)) : it(c) && (o.add(c), c(h, ...g))), h;
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), h;
      },
      component(c, g) {
        return g ? (r.components[c] = g, h) : r.components[c];
      },
      directive(c, g) {
        return g ? (r.directives[c] = g, h) : r.directives[c];
      },
      mount(c, g, f) {
        if (!l) {
          const _ = h._ceVNode || bt(i, s);
          return _.appContext = r, f === !0 ? f = "svg" : f === !1 && (f = void 0), g && t ? t(_, c) : e(_, c, f), l = !0, h._container = c, c.__vue_app__ = h, fs(_.component);
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        l && (we(
          a,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(c, g) {
        return r.provides[c] = g, h;
      },
      runWithContext(c) {
        const g = Ln;
        Ln = h;
        try {
          return c();
        } finally {
          Ln = g;
        }
      }
    };
    return h;
  };
}
let Ln = null;
function rn(e, t) {
  if (Gt) {
    let n = Gt.provides;
    const i = Gt.parent && Gt.parent.provides;
    i === n && (n = Gt.provides = Object.create(i)), n[e] = t;
  }
}
function de(e, t, n = !1) {
  const i = Gt || Xt;
  if (i || Ln) {
    const s = Ln ? Ln._context.provides : i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && it(t) ? t.call(i && i.proxy) : t;
  }
}
const Rl = {}, kl = () => Object.create(Rl), Ml = (e) => Object.getPrototypeOf(e) === Rl;
function e0(e, t, n, i = !1) {
  const s = {}, r = kl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ol(e, t, s, r);
  for (const o in e.propsOptions[0])
    o in s || (s[o] = void 0);
  n ? e.props = i ? s : bh(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function n0(e, t, n, i) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, a = mt(s), [l] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let g = 0; g < c.length; g++) {
        let f = c[g];
        if (hs(e.emitsOptions, f))
          continue;
        const _ = t[f];
        if (l)
          if (pt(r, f))
            _ !== r[f] && (r[f] = _, h = !0);
          else {
            const u = _e(f);
            s[u] = Dr(
              l,
              a,
              u,
              _,
              e,
              !1
            );
          }
        else
          _ !== r[f] && (r[f] = _, h = !0);
      }
    }
  } else {
    Ol(e, t, s, r) && (h = !0);
    let c;
    for (const g in a)
      (!t || // for camelCase
      !pt(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = dn(g)) === g || !pt(t, c))) && (l ? n && // for camelCase
      (n[g] !== void 0 || // for kebab-case
      n[c] !== void 0) && (s[g] = Dr(
        l,
        a,
        g,
        void 0,
        e,
        !0
      )) : delete s[g]);
    if (r !== a)
      for (const g in r)
        (!t || !pt(t, g)) && (delete r[g], h = !0);
  }
  h && ke(e.attrs, "set", "");
}
function Ol(e, t, n, i) {
  const [s, r] = e.propsOptions;
  let o = !1, a;
  if (t)
    for (let l in t) {
      if (ii(l))
        continue;
      const h = t[l];
      let c;
      s && pt(s, c = _e(l)) ? !r || !r.includes(c) ? n[c] = h : (a || (a = {}))[c] = h : hs(e.emitsOptions, l) || (!(l in i) || h !== i[l]) && (i[l] = h, o = !0);
    }
  if (r) {
    const l = mt(n), h = a || _t;
    for (let c = 0; c < r.length; c++) {
      const g = r[c];
      n[g] = Dr(
        s,
        l,
        g,
        h[g],
        e,
        !pt(h, g)
      );
    }
  }
  return o;
}
function Dr(e, t, n, i, s, r) {
  const o = e[n];
  if (o != null) {
    const a = pt(o, "default");
    if (a && i === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && it(l)) {
        const { propsDefaults: h } = s;
        if (n in h)
          i = h[n];
        else {
          const c = bi(s);
          i = h[n] = l.call(
            null,
            t
          ), c();
        }
      } else
        i = l;
      s.ce && s.ce._setProp(n, i);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !a ? i = !1 : o[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === dn(n)) && (i = !0));
  }
  return i;
}
const i0 = /* @__PURE__ */ new WeakMap();
function Ll(e, t, n = !1) {
  const i = n ? i0 : t.propsCache, s = i.get(e);
  if (s)
    return s;
  const r = e.props, o = {}, a = [];
  let l = !1;
  if (!it(e)) {
    const c = (g) => {
      l = !0;
      const [f, _] = Ll(g, t, !0);
      Vt(o, f), _ && a.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !l)
    return kt(e) && i.set(e, kn), kn;
  if (st(r))
    for (let c = 0; c < r.length; c++) {
      const g = _e(r[c]);
      Zo(g) && (o[g] = _t);
    }
  else if (r)
    for (const c in r) {
      const g = _e(c);
      if (Zo(g)) {
        const f = r[c], _ = o[g] = st(f) || it(f) ? { type: f } : Vt({}, f), u = _.type;
        let m = !1, y = !0;
        if (st(u))
          for (let C = 0; C < u.length; ++C) {
            const x = u[C], d = it(x) && x.name;
            if (d === "Boolean") {
              m = !0;
              break;
            } else
              d === "String" && (y = !1);
          }
        else
          m = it(u) && u.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = m, _[
          1
          /* shouldCastTrue */
        ] = y, (m || pt(_, "default")) && a.push(g);
      }
    }
  const h = [o, a];
  return kt(e) && i.set(e, h), h;
}
function Zo(e) {
  return e[0] !== "$" && !ii(e);
}
const Fl = (e) => e[0] === "_" || e === "$stable", go = (e) => st(e) ? e.map(Se) : [Se(e)], s0 = (e, t, n) => {
  if (t._n)
    return t;
  const i = An((...s) => go(t(...s)), n);
  return i._c = !1, i;
}, Nl = (e, t, n) => {
  const i = e._ctx;
  for (const s in e) {
    if (Fl(s))
      continue;
    const r = e[s];
    if (it(r))
      t[s] = s0(s, r, i);
    else if (r != null) {
      const o = go(r);
      t[s] = () => o;
    }
  }
}, Dl = (e, t) => {
  const n = go(t);
  e.slots.default = () => n;
}, Il = (e, t, n) => {
  for (const i in t)
    (n || i !== "_") && (e[i] = t[i]);
}, r0 = (e, t, n) => {
  const i = e.slots = kl();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (Il(i, t, n), n && qa(i, "_", s, !0)) : Nl(t, i);
  } else
    t && Dl(e, t);
}, o0 = (e, t, n) => {
  const { vnode: i, slots: s } = e;
  let r = !0, o = _t;
  if (i.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? r = !1 : Il(s, t, n) : (r = !t.$stable, Nl(t, s)), o = t;
  } else
    t && (Dl(e, t), o = { default: 1 });
  if (r)
    for (const a in s)
      !Fl(a) && o[a] == null && delete s[a];
}, Qt = v0;
function a0(e) {
  return l0(e);
}
function l0(e, t) {
  const n = Za();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: s,
    patchProp: r,
    createElement: o,
    createText: a,
    createComment: l,
    setText: h,
    setElementText: c,
    parentNode: g,
    nextSibling: f,
    setScopeId: _ = ue,
    insertStaticContent: u
  } = e, m = (b, w, A, N = null, O = null, L = null, H = void 0, V = null, G = !!w.dynamicChildren) => {
    if (b === w)
      return;
    b && !qn(b, w) && (N = E(b), W(b, O, L, !0), b = null), w.patchFlag === -2 && (G = !1, w.dynamicChildren = null);
    const { type: I, ref: q, shapeFlag: j } = w;
    switch (I) {
      case ds:
        y(b, w, A, N);
        break;
      case hn:
        C(b, w, A, N);
        break;
      case Ii:
        b == null && x(w, A, N, H);
        break;
      case ve:
        F(
          b,
          w,
          A,
          N,
          O,
          L,
          H,
          V,
          G
        );
        break;
      default:
        j & 1 ? v(
          b,
          w,
          A,
          N,
          O,
          L,
          H,
          V,
          G
        ) : j & 6 ? B(
          b,
          w,
          A,
          N,
          O,
          L,
          H,
          V,
          G
        ) : (j & 64 || j & 128) && I.process(
          b,
          w,
          A,
          N,
          O,
          L,
          H,
          V,
          G,
          dt
        );
    }
    q != null && O && Or(q, b && b.ref, L, w || b, !w);
  }, y = (b, w, A, N) => {
    if (b == null)
      i(
        w.el = a(w.children),
        A,
        N
      );
    else {
      const O = w.el = b.el;
      w.children !== b.children && h(O, w.children);
    }
  }, C = (b, w, A, N) => {
    b == null ? i(
      w.el = l(w.children || ""),
      A,
      N
    ) : w.el = b.el;
  }, x = (b, w, A, N) => {
    [b.el, b.anchor] = u(
      b.children,
      w,
      A,
      N,
      b.el,
      b.anchor
    );
  }, d = ({ el: b, anchor: w }, A, N) => {
    let O;
    for (; b && b !== w; )
      O = f(b), i(b, A, N), b = O;
    i(w, A, N);
  }, p = ({ el: b, anchor: w }) => {
    let A;
    for (; b && b !== w; )
      A = f(b), s(b), b = A;
    s(w);
  }, v = (b, w, A, N, O, L, H, V, G) => {
    w.type === "svg" ? H = "svg" : w.type === "math" && (H = "mathml"), b == null ? P(
      w,
      A,
      N,
      O,
      L,
      H,
      V,
      G
    ) : k(
      b,
      w,
      O,
      L,
      H,
      V,
      G
    );
  }, P = (b, w, A, N, O, L, H, V) => {
    let G, I;
    const { props: q, shapeFlag: j, transition: K, dirs: tt } = b;
    if (G = b.el = o(
      b.type,
      L,
      q && q.is,
      q
    ), j & 8 ? c(G, b.children) : j & 16 && S(
      b.children,
      G,
      null,
      N,
      O,
      dr(b, L),
      H,
      V
    ), tt && Qe(b, null, N, "created"), R(G, b, b.scopeId, H, N), q) {
      for (const Ct in q)
        Ct !== "value" && !ii(Ct) && r(G, Ct, null, q[Ct], L, N);
      "value" in q && r(G, "value", null, q.value, L), (I = q.onVnodeBeforeMount) && be(I, N, b);
    }
    tt && Qe(b, null, N, "beforeMount");
    const ht = c0(O, K);
    ht && K.beforeEnter(G), i(G, w, A), ((I = q && q.onVnodeMounted) || ht || tt) && Qt(() => {
      I && be(I, N, b), ht && K.enter(G), tt && Qe(b, null, N, "mounted");
    }, O);
  }, R = (b, w, A, N, O) => {
    if (A && _(b, A), N)
      for (let L = 0; L < N.length; L++)
        _(b, N[L]);
    if (O) {
      let L = O.subTree;
      if (w === L || $l(L.type) && (L.ssContent === w || L.ssFallback === w)) {
        const H = O.vnode;
        R(
          b,
          H,
          H.scopeId,
          H.slotScopeIds,
          O.parent
        );
      }
    }
  }, S = (b, w, A, N, O, L, H, V, G = 0) => {
    for (let I = G; I < b.length; I++) {
      const q = b[I] = V ? He(b[I]) : Se(b[I]);
      m(
        null,
        q,
        w,
        A,
        N,
        O,
        L,
        H,
        V
      );
    }
  }, k = (b, w, A, N, O, L, H) => {
    const V = w.el = b.el;
    let { patchFlag: G, dynamicChildren: I, dirs: q } = w;
    G |= b.patchFlag & 16;
    const j = b.props || _t, K = w.props || _t;
    let tt;
    if (A && en(A, !1), (tt = K.onVnodeBeforeUpdate) && be(tt, A, w, b), q && Qe(w, b, A, "beforeUpdate"), A && en(A, !0), (j.innerHTML && K.innerHTML == null || j.textContent && K.textContent == null) && c(V, ""), I ? T(
      b.dynamicChildren,
      I,
      V,
      A,
      N,
      dr(w, O),
      L
    ) : H || U(
      b,
      w,
      V,
      null,
      A,
      N,
      dr(w, O),
      L,
      !1
    ), G > 0) {
      if (G & 16)
        M(V, j, K, A, O);
      else if (G & 2 && j.class !== K.class && r(V, "class", null, K.class, O), G & 4 && r(V, "style", j.style, K.style, O), G & 8) {
        const ht = w.dynamicProps;
        for (let Ct = 0; Ct < ht.length; Ct++) {
          const gt = ht[Ct], qt = j[gt], Wt = K[gt];
          (Wt !== qt || gt === "value") && r(V, gt, qt, Wt, O, A);
        }
      }
      G & 1 && b.children !== w.children && c(V, w.children);
    } else
      !H && I == null && M(V, j, K, A, O);
    ((tt = K.onVnodeUpdated) || q) && Qt(() => {
      tt && be(tt, A, w, b), q && Qe(w, b, A, "updated");
    }, N);
  }, T = (b, w, A, N, O, L, H) => {
    for (let V = 0; V < w.length; V++) {
      const G = b[V], I = w[V], q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        G.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (G.type === ve || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !qn(G, I) || // - In the case of a component, it could contain anything.
        G.shapeFlag & 70) ? g(G.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          A
        )
      );
      m(
        G,
        I,
        q,
        null,
        N,
        O,
        L,
        H,
        !0
      );
    }
  }, M = (b, w, A, N, O) => {
    if (w !== A) {
      if (w !== _t)
        for (const L in w)
          !ii(L) && !(L in A) && r(
            b,
            L,
            w[L],
            null,
            O,
            N
          );
      for (const L in A) {
        if (ii(L))
          continue;
        const H = A[L], V = w[L];
        H !== V && L !== "value" && r(b, L, V, H, O, N);
      }
      "value" in A && r(b, "value", w.value, A.value, O);
    }
  }, F = (b, w, A, N, O, L, H, V, G) => {
    const I = w.el = b ? b.el : a(""), q = w.anchor = b ? b.anchor : a("");
    let { patchFlag: j, dynamicChildren: K, slotScopeIds: tt } = w;
    tt && (V = V ? V.concat(tt) : tt), b == null ? (i(I, A, N), i(q, A, N), S(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      A,
      q,
      O,
      L,
      H,
      V,
      G
    )) : j > 0 && j & 64 && K && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    b.dynamicChildren ? (T(
      b.dynamicChildren,
      K,
      A,
      O,
      L,
      H,
      V
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || O && w === O.subTree) && Gl(
      b,
      w,
      !0
      /* shallow */
    )) : U(
      b,
      w,
      A,
      q,
      O,
      L,
      H,
      V,
      G
    );
  }, B = (b, w, A, N, O, L, H, V, G) => {
    w.slotScopeIds = V, b == null ? w.shapeFlag & 512 ? O.ctx.activate(
      w,
      A,
      N,
      H,
      G
    ) : Y(
      w,
      A,
      N,
      O,
      L,
      H,
      G
    ) : $(b, w, G);
  }, Y = (b, w, A, N, O, L, H) => {
    const V = b.component = R0(
      b,
      N,
      O
    );
    if (wl(b) && (V.ctx.renderer = dt), k0(V, !1, H), V.asyncDep) {
      if (O && O.registerDep(V, et, H), !b.el) {
        const G = V.subTree = bt(hn);
        C(null, G, w, A);
      }
    } else
      et(
        V,
        b,
        w,
        A,
        O,
        L,
        H
      );
  }, $ = (b, w, A) => {
    const N = w.component = b.component;
    if (y0(b, w, A))
      if (N.asyncDep && !N.asyncResolved) {
        X(N, w, A);
        return;
      } else
        N.next = w, N.update();
    else
      w.el = b.el, N.vnode = w;
  }, et = (b, w, A, N, O, L, H) => {
    const V = () => {
      if (b.isMounted) {
        let { next: j, bu: K, u: tt, parent: ht, vnode: Ct } = b;
        {
          const Zt = Vl(b);
          if (Zt) {
            j && (j.el = Ct.el, X(b, j, H)), Zt.asyncDep.then(() => {
              b.isUnmounted || V();
            });
            return;
          }
        }
        let gt = j, qt;
        en(b, !1), j ? (j.el = Ct.el, X(b, j, H)) : j = Ct, K && or(K), (qt = j.props && j.props.onVnodeBeforeUpdate) && be(qt, ht, j, Ct), en(b, !0);
        const Wt = ur(b), ce = b.subTree;
        b.subTree = Wt, m(
          ce,
          Wt,
          // parent may have changed if it's in a teleport
          g(ce.el),
          // anchor may have changed if it's in a fragment
          E(ce),
          b,
          O,
          L
        ), j.el = Wt.el, gt === null && b0(b, Wt.el), tt && Qt(tt, O), (qt = j.props && j.props.onVnodeUpdated) && Qt(
          () => be(qt, ht, j, Ct),
          O
        );
      } else {
        let j;
        const { el: K, props: tt } = w, { bm: ht, m: Ct, parent: gt, root: qt, type: Wt } = b, ce = ri(w);
        if (en(b, !1), ht && or(ht), !ce && (j = tt && tt.onVnodeBeforeMount) && be(j, gt, w), en(b, !0), K && Et) {
          const Zt = () => {
            b.subTree = ur(b), Et(
              K,
              b.subTree,
              b,
              O,
              null
            );
          };
          ce ? Wt.__asyncHydrate(
            K,
            b,
            Zt
          ) : Zt();
        } else {
          qt.ce && qt.ce._injectChildStyle(Wt);
          const Zt = b.subTree = ur(b);
          m(
            null,
            Zt,
            A,
            N,
            b,
            O,
            L
          ), w.el = Zt.el;
        }
        if (Ct && Qt(Ct, O), !ce && (j = tt && tt.onVnodeMounted)) {
          const Zt = w;
          Qt(
            () => be(j, gt, Zt),
            O
          );
        }
        (w.shapeFlag & 256 || gt && ri(gt.vnode) && gt.vnode.shapeFlag & 256) && b.a && Qt(b.a, O), b.isMounted = !0, w = A = N = null;
      }
    };
    b.scope.on();
    const G = b.effect = new Qa(V);
    b.scope.off();
    const I = b.update = G.run.bind(G), q = b.job = G.runIfDirty.bind(G);
    q.i = b, q.id = b.uid, G.scheduler = () => co(q), en(b, !0), I();
  }, X = (b, w, A) => {
    w.component = b;
    const N = b.vnode.props;
    b.vnode = w, b.next = null, n0(b, w.props, N, A), o0(b, w.children, A), We(), Wo(b), ze();
  }, U = (b, w, A, N, O, L, H, V, G = !1) => {
    const I = b && b.children, q = b ? b.shapeFlag : 0, j = w.children, { patchFlag: K, shapeFlag: tt } = w;
    if (K > 0) {
      if (K & 128) {
        J(
          I,
          j,
          A,
          N,
          O,
          L,
          H,
          V,
          G
        );
        return;
      } else if (K & 256) {
        rt(
          I,
          j,
          A,
          N,
          O,
          L,
          H,
          V,
          G
        );
        return;
      }
    }
    tt & 8 ? (q & 16 && Lt(I, O, L), j !== I && c(A, j)) : q & 16 ? tt & 16 ? J(
      I,
      j,
      A,
      N,
      O,
      L,
      H,
      V,
      G
    ) : Lt(I, O, L, !0) : (q & 8 && c(A, ""), tt & 16 && S(
      j,
      A,
      N,
      O,
      L,
      H,
      V,
      G
    ));
  }, rt = (b, w, A, N, O, L, H, V, G) => {
    b = b || kn, w = w || kn;
    const I = b.length, q = w.length, j = Math.min(I, q);
    let K;
    for (K = 0; K < j; K++) {
      const tt = w[K] = G ? He(w[K]) : Se(w[K]);
      m(
        b[K],
        tt,
        A,
        null,
        O,
        L,
        H,
        V,
        G
      );
    }
    I > q ? Lt(
      b,
      O,
      L,
      !0,
      !1,
      j
    ) : S(
      w,
      A,
      N,
      O,
      L,
      H,
      V,
      G,
      j
    );
  }, J = (b, w, A, N, O, L, H, V, G) => {
    let I = 0;
    const q = w.length;
    let j = b.length - 1, K = q - 1;
    for (; I <= j && I <= K; ) {
      const tt = b[I], ht = w[I] = G ? He(w[I]) : Se(w[I]);
      if (qn(tt, ht))
        m(
          tt,
          ht,
          A,
          null,
          O,
          L,
          H,
          V,
          G
        );
      else
        break;
      I++;
    }
    for (; I <= j && I <= K; ) {
      const tt = b[j], ht = w[K] = G ? He(w[K]) : Se(w[K]);
      if (qn(tt, ht))
        m(
          tt,
          ht,
          A,
          null,
          O,
          L,
          H,
          V,
          G
        );
      else
        break;
      j--, K--;
    }
    if (I > j) {
      if (I <= K) {
        const tt = K + 1, ht = tt < q ? w[tt].el : N;
        for (; I <= K; )
          m(
            null,
            w[I] = G ? He(w[I]) : Se(w[I]),
            A,
            ht,
            O,
            L,
            H,
            V,
            G
          ), I++;
      }
    } else if (I > K)
      for (; I <= j; )
        W(b[I], O, L, !0), I++;
    else {
      const tt = I, ht = I, Ct = /* @__PURE__ */ new Map();
      for (I = ht; I <= K; I++) {
        const Jt = w[I] = G ? He(w[I]) : Se(w[I]);
        Jt.key != null && Ct.set(Jt.key, I);
      }
      let gt, qt = 0;
      const Wt = K - ht + 1;
      let ce = !1, Zt = 0;
      const Yn = new Array(Wt);
      for (I = 0; I < Wt; I++)
        Yn[I] = 0;
      for (I = tt; I <= j; I++) {
        const Jt = b[I];
        if (qt >= Wt) {
          W(Jt, O, L, !0);
          continue;
        }
        let ye;
        if (Jt.key != null)
          ye = Ct.get(Jt.key);
        else
          for (gt = ht; gt <= K; gt++)
            if (Yn[gt - ht] === 0 && qn(Jt, w[gt])) {
              ye = gt;
              break;
            }
        ye === void 0 ? W(Jt, O, L, !0) : (Yn[ye - ht] = I + 1, ye >= Zt ? Zt = ye : ce = !0, m(
          Jt,
          w[ye],
          A,
          null,
          O,
          L,
          H,
          V,
          G
        ), qt++);
      }
      const Fo = ce ? h0(Yn) : kn;
      for (gt = Fo.length - 1, I = Wt - 1; I >= 0; I--) {
        const Jt = ht + I, ye = w[Jt], No = Jt + 1 < q ? w[Jt + 1].el : N;
        Yn[I] === 0 ? m(
          null,
          ye,
          A,
          No,
          O,
          L,
          H,
          V,
          G
        ) : ce && (gt < 0 || I !== Fo[gt] ? nt(ye, A, No, 2) : gt--);
      }
    }
  }, nt = (b, w, A, N, O = null) => {
    const { el: L, type: H, transition: V, children: G, shapeFlag: I } = b;
    if (I & 6) {
      nt(b.component.subTree, w, A, N);
      return;
    }
    if (I & 128) {
      b.suspense.move(w, A, N);
      return;
    }
    if (I & 64) {
      H.move(b, w, A, dt);
      return;
    }
    if (H === ve) {
      i(L, w, A);
      for (let j = 0; j < G.length; j++)
        nt(G[j], w, A, N);
      i(b.anchor, w, A);
      return;
    }
    if (H === Ii) {
      d(b, w, A);
      return;
    }
    if (N !== 2 && I & 1 && V)
      if (N === 0)
        V.beforeEnter(L), i(L, w, A), Qt(() => V.enter(L), O);
      else {
        const { leave: j, delayLeave: K, afterLeave: tt } = V, ht = () => i(L, w, A), Ct = () => {
          j(L, () => {
            ht(), tt && tt();
          });
        };
        K ? K(L, ht, Ct) : Ct();
      }
    else
      i(L, w, A);
  }, W = (b, w, A, N = !1, O = !1) => {
    const {
      type: L,
      props: H,
      ref: V,
      children: G,
      dynamicChildren: I,
      shapeFlag: q,
      patchFlag: j,
      dirs: K,
      cacheIndex: tt
    } = b;
    if (j === -2 && (O = !1), V != null && Or(V, null, A, b, !0), tt != null && (w.renderCache[tt] = void 0), q & 256) {
      w.ctx.deactivate(b);
      return;
    }
    const ht = q & 1 && K, Ct = !ri(b);
    let gt;
    if (Ct && (gt = H && H.onVnodeBeforeUnmount) && be(gt, w, b), q & 6)
      Kt(b.component, A, N);
    else {
      if (q & 128) {
        b.suspense.unmount(A, N);
        return;
      }
      ht && Qe(b, null, w, "beforeUnmount"), q & 64 ? b.type.remove(
        b,
        w,
        A,
        dt,
        N
      ) : I && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !I.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (L !== ve || j > 0 && j & 64) ? Lt(
        I,
        w,
        A,
        !1,
        !0
      ) : (L === ve && j & 384 || !O && q & 16) && Lt(G, w, A), N && St(b);
    }
    (Ct && (gt = H && H.onVnodeUnmounted) || ht) && Qt(() => {
      gt && be(gt, w, b), ht && Qe(b, null, w, "unmounted");
    }, A);
  }, St = (b) => {
    const { type: w, el: A, anchor: N, transition: O } = b;
    if (w === ve) {
      re(A, N);
      return;
    }
    if (w === Ii) {
      p(b);
      return;
    }
    const L = () => {
      s(A), O && !O.persisted && O.afterLeave && O.afterLeave();
    };
    if (b.shapeFlag & 1 && O && !O.persisted) {
      const { leave: H, delayLeave: V } = O, G = () => H(A, L);
      V ? V(b.el, L, G) : G();
    } else
      L();
  }, re = (b, w) => {
    let A;
    for (; b !== w; )
      A = f(b), s(b), b = A;
    s(w);
  }, Kt = (b, w, A) => {
    const { bum: N, scope: O, job: L, subTree: H, um: V, m: G, a: I } = b;
    Jo(G), Jo(I), N && or(N), O.stop(), L && (L.flags |= 8, W(H, b, w, A)), V && Qt(V, w), Qt(() => {
      b.isUnmounted = !0;
    }, w), w && w.pendingBranch && !w.isUnmounted && b.asyncDep && !b.asyncResolved && b.suspenseId === w.pendingId && (w.deps--, w.deps === 0 && w.resolve());
  }, Lt = (b, w, A, N = !1, O = !1, L = 0) => {
    for (let H = L; H < b.length; H++)
      W(b[H], w, A, N, O);
  }, E = (b) => {
    if (b.shapeFlag & 6)
      return E(b.component.subTree);
    if (b.shapeFlag & 128)
      return b.suspense.next();
    const w = f(b.anchor || b.el), A = w && w[Lh];
    return A ? f(A) : w;
  };
  let D = !1;
  const z = (b, w, A) => {
    b == null ? w._vnode && W(w._vnode, null, null, !0) : m(
      w._vnode || null,
      b,
      w,
      null,
      null,
      null,
      A
    ), w._vnode = b, D || (D = !0, Wo(), ml(), D = !1);
  }, dt = {
    p: m,
    um: W,
    m: nt,
    r: St,
    mt: Y,
    mc: S,
    pc: U,
    pbc: T,
    n: E,
    o: e
  };
  let ut, Et;
  return t && ([ut, Et] = t(
    dt
  )), {
    render: z,
    hydrate: ut,
    createApp: t0(z, ut)
  };
}
function dr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function en({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function c0(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Gl(e, t, n = !1) {
  const i = e.children, s = t.children;
  if (st(i) && st(s))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let a = s[r];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[r] = He(s[r]), a.el = o.el), !n && a.patchFlag !== -2 && Gl(o, a)), a.type === ds && (a.el = o.el);
    }
}
function h0(e) {
  const t = e.slice(), n = [0];
  let i, s, r, o, a;
  const l = e.length;
  for (i = 0; i < l; i++) {
    const h = e[i];
    if (h !== 0) {
      if (s = n[n.length - 1], e[s] < h) {
        t[i] = s, n.push(i);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        a = r + o >> 1, e[n[a]] < h ? r = a + 1 : o = a;
      h < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function Vl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Vl(t);
}
function Jo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const d0 = Symbol.for("v-scx"), u0 = () => de(d0);
function ai(e, t, n) {
  return Ul(e, t, n);
}
function Ul(e, t, n = _t) {
  const { immediate: i, deep: s, flush: r, once: o } = n, a = Vt({}, n);
  let l;
  if (us)
    if (r === "sync") {
      const f = u0();
      l = f.__watcherHandles || (f.__watcherHandles = []);
    } else if (!t || i)
      a.once = !0;
    else
      return {
        stop: ue,
        resume: ue,
        pause: ue
      };
  const h = Gt;
  a.call = (f, _, u) => we(f, h, _, u);
  let c = !1;
  r === "post" ? a.scheduler = (f) => {
    Qt(f, h && h.suspense);
  } : r !== "sync" && (c = !0, a.scheduler = (f, _) => {
    _ ? f() : co(f);
  }), a.augmentJob = (f) => {
    t && (f.flags |= 4), c && (f.flags |= 2, h && (f.id = h.uid, f.i = h));
  };
  const g = Th(e, t, a);
  return l && l.push(g), g;
}
function f0(e, t, n) {
  const i = this.proxy, s = Nt(e) ? e.includes(".") ? Bl(i, e) : () => i[e] : e.bind(i, i);
  let r;
  it(t) ? r = t : (r = t.handler, n = t);
  const o = bi(this), a = Ul(s, r.bind(i), n);
  return o(), a;
}
function Bl(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let s = 0; s < n.length && i; s++)
      i = i[n[s]];
    return i;
  };
}
const g0 = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_e(t)}Modifiers`] || e[`${dn(t)}Modifiers`];
function p0(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const i = e.vnode.props || _t;
  let s = n;
  const r = t.startsWith("update:"), o = r && g0(i, t.slice(7));
  o && (o.trim && (s = n.map((c) => Nt(c) ? c.trim() : c)), o.number && (s = n.map(jc)));
  let a, l = i[a = rr(t)] || // also try camelCase event handler (#2249)
  i[a = rr(_e(t))];
  !l && r && (l = i[a = rr(dn(t))]), l && we(
    l,
    e,
    6,
    s
  );
  const h = i[a + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, we(
      h,
      e,
      6,
      s
    );
  }
}
function Hl(e, t, n = !1) {
  const i = t.emitsCache, s = i.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let o = {}, a = !1;
  if (!it(e)) {
    const l = (h) => {
      const c = Hl(h, t, !0);
      c && (a = !0, Vt(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !a ? (kt(e) && i.set(e, null), null) : (st(r) ? r.forEach((l) => o[l] = null) : Vt(o, r), kt(e) && i.set(e, o), o);
}
function hs(e, t) {
  return !e || !ts(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), pt(e, t[0].toLowerCase() + t.slice(1)) || pt(e, dn(t)) || pt(e, t));
}
function ur(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: s,
    propsOptions: [r],
    slots: o,
    attrs: a,
    emit: l,
    render: h,
    renderCache: c,
    props: g,
    data: f,
    setupState: _,
    ctx: u,
    inheritAttrs: m
  } = e, y = ji(e);
  let C, x;
  try {
    if (n.shapeFlag & 4) {
      const p = s || i, v = p;
      C = Se(
        h.call(
          v,
          p,
          c,
          g,
          _,
          f,
          u
        )
      ), x = a;
    } else {
      const p = t;
      C = Se(
        p.length > 1 ? p(
          g,
          { attrs: a, slots: o, emit: l }
        ) : p(
          g,
          null
        )
      ), x = t.props ? a : _0(a);
    }
  } catch (p) {
    li.length = 0, ls(p, e, 1), C = bt(hn);
  }
  let d = C;
  if (x && m !== !1) {
    const p = Object.keys(x), { shapeFlag: v } = d;
    p.length && v & 7 && (r && p.some(qr) && (x = m0(
      x,
      r
    )), d = Nn(d, x, !1, !0));
  }
  return n.dirs && (d = Nn(d, null, !1, !0), d.dirs = d.dirs ? d.dirs.concat(n.dirs) : n.dirs), n.transition && (d.transition = n.transition), C = d, ji(y), C;
}
const _0 = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ts(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, m0 = (e, t) => {
  const n = {};
  for (const i in e)
    (!qr(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function y0(e, t, n) {
  const { props: i, children: s, component: r } = e, { props: o, children: a, patchFlag: l } = t, h = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? Qo(i, o, h) : !!o;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let g = 0; g < c.length; g++) {
        const f = c[g];
        if (o[f] !== i[f] && !hs(h, f))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : i === o ? !1 : i ? o ? Qo(i, o, h) : !0 : !!o;
  return !1;
}
function Qo(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < i.length; s++) {
    const r = i[s];
    if (t[r] !== e[r] && !hs(n, r))
      return !0;
  }
  return !1;
}
function b0({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.el = e.el), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const $l = (e) => e.__isSuspense;
function v0(e, t) {
  t && t.pendingBranch ? st(e) ? t.effects.push(...e) : t.effects.push(e) : Mh(e);
}
const ve = Symbol.for("v-fgt"), ds = Symbol.for("v-txt"), hn = Symbol.for("v-cmt"), Ii = Symbol.for("v-stc"), li = [];
let se = null;
function ae(e = !1) {
  li.push(se = e ? null : []);
}
function S0() {
  li.pop(), se = li[li.length - 1] || null;
}
let fi = 1;
function ta(e) {
  fi += e, e < 0 && se && (se.hasOnce = !0);
}
function jl(e) {
  return e.dynamicChildren = fi > 0 ? se || kn : null, S0(), fi > 0 && se && se.push(e), e;
}
function Me(e, t, n, i, s, r) {
  return jl(
    ne(
      e,
      t,
      n,
      i,
      s,
      r,
      !0
    )
  );
}
function po(e, t, n, i, s) {
  return jl(
    bt(
      e,
      t,
      n,
      i,
      s,
      !0
    )
  );
}
function Ir(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function qn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Wl = ({ key: e }) => e ?? null, Gi = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Nt(e) || Ht(e) || it(e) ? { i: Xt, r: e, k: t, f: !!n } : e : null);
function ne(e, t = null, n = null, i = 0, s = null, r = e === ve ? 0 : 1, o = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Wl(t),
    ref: t && Gi(t),
    scopeId: bl,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: i,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Xt
  };
  return a ? (_o(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= Nt(n) ? 8 : 16), fi > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  se && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && se.push(l), l;
}
const bt = C0;
function C0(e, t = null, n = null, i = 0, s = null, r = !1) {
  if ((!e || e === jh) && (e = hn), Ir(e)) {
    const a = Nn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && _o(a, n), fi > 0 && !r && se && (a.shapeFlag & 6 ? se[se.indexOf(e)] = a : se.push(a)), a.patchFlag = -2, a;
  }
  if (N0(e) && (e = e.__vccOpts), t) {
    t = w0(t);
    let { class: a, style: l } = t;
    a && !Nt(a) && (t.class = rs(a)), kt(l) && (oo(l) && !st(l) && (l = Vt({}, l)), t.style = ss(l));
  }
  const o = Nt(e) ? 1 : $l(e) ? 128 : Fh(e) ? 64 : kt(e) ? 4 : it(e) ? 2 : 0;
  return ne(
    e,
    t,
    n,
    i,
    s,
    o,
    r,
    !0
  );
}
function w0(e) {
  return e ? oo(e) || Ml(e) ? Vt({}, e) : e : null;
}
function Nn(e, t, n = !1, i = !1) {
  const { props: s, ref: r, patchFlag: o, children: a, transition: l } = e, h = t ? P0(s || {}, t) : s, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Wl(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? st(r) ? r.concat(Gi(t)) : [r, Gi(t)] : Gi(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ve ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Nn(e.ssContent),
    ssFallback: e.ssFallback && Nn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && vl(
    c,
    l.clone(c)
  ), c;
}
function x0(e = " ", t = 0) {
  return bt(ds, null, e, t);
}
function Rn(e, t) {
  const n = bt(Ii, null, e);
  return n.staticCount = t, n;
}
function E0(e = "", t = !1) {
  return t ? (ae(), po(hn, null, e)) : bt(hn, null, e);
}
function Se(e) {
  return e == null || typeof e == "boolean" ? bt(hn) : st(e) ? bt(
    ve,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? He(e) : bt(ds, null, String(e));
}
function He(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Nn(e);
}
function _o(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (st(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), _o(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Ml(t) ? t._ctx = Xt : s === 3 && Xt && (Xt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    it(t) ? (t = { default: t, _ctx: Xt }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [x0(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function P0(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const s in i)
      if (s === "class")
        t.class !== i.class && (t.class = rs([t.class, i.class]));
      else if (s === "style")
        t.style = ss([t.style, i.style]);
      else if (ts(s)) {
        const r = t[s], o = i[s];
        o && r !== o && !(st(r) && r.includes(o)) && (t[s] = r ? [].concat(r, o) : o);
      } else
        s !== "" && (t[s] = i[s]);
  }
  return t;
}
function be(e, t, n, i = null) {
  we(e, t, 7, [
    n,
    i
  ]);
}
const T0 = Al();
let A0 = 0;
function R0(e, t, n) {
  const i = e.type, s = (t ? t.appContext : e.appContext) || T0, r = {
    uid: A0++,
    vnode: e,
    type: i,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Zc(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ll(i, s),
    emitsOptions: Hl(i, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: _t,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: _t,
    data: _t,
    props: _t,
    attrs: _t,
    slots: _t,
    refs: _t,
    setupState: _t,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = p0.bind(null, r), e.ce && e.ce(r), r;
}
let Gt = null;
const mo = () => Gt || Xt;
let zi, Gr;
{
  const e = Za(), t = (n, i) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(i), (r) => {
      s.length > 1 ? s.forEach((o) => o(r)) : s[0](r);
    };
  };
  zi = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Gt = n
  ), Gr = t(
    "__VUE_SSR_SETTERS__",
    (n) => us = n
  );
}
const bi = (e) => {
  const t = Gt;
  return zi(e), e.scope.on(), () => {
    e.scope.off(), zi(t);
  };
}, ea = () => {
  Gt && Gt.scope.off(), zi(null);
};
function zl(e) {
  return e.vnode.shapeFlag & 4;
}
let us = !1;
function k0(e, t = !1, n = !1) {
  t && Gr(t);
  const { props: i, children: s } = e.vnode, r = zl(e);
  e0(e, i, r, t), r0(e, s, n);
  const o = r ? M0(e, t) : void 0;
  return t && Gr(!1), o;
}
function M0(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Kh);
  const { setup: i } = n;
  if (i) {
    const s = e.setupContext = i.length > 1 ? L0(e) : null, r = bi(e);
    We();
    const o = mi(
      i,
      e,
      0,
      [
        e.props,
        s
      ]
    );
    if (ze(), r(), Xa(o)) {
      if (ri(e) || Cl(e), o.then(ea, ea), t)
        return o.then((a) => {
          na(e, a, t);
        }).catch((a) => {
          ls(a, e, 0);
        });
      e.asyncDep = o;
    } else
      na(e, o, t);
  } else
    Kl(e, t);
}
function na(e, t, n) {
  it(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : kt(t) && (e.setupState = gl(t)), Kl(e, n);
}
let ia;
function Kl(e, t, n) {
  const i = e.type;
  if (!e.render) {
    if (!t && ia && !i.render) {
      const s = i.template || fo(e).template;
      if (s) {
        const { isCustomElement: r, compilerOptions: o } = e.appContext.config, { delimiters: a, compilerOptions: l } = i, h = Vt(
          Vt(
            {
              isCustomElement: r,
              delimiters: a
            },
            o
          ),
          l
        );
        i.render = ia(s, h);
      }
    }
    e.render = i.render || ue;
  }
  {
    const s = bi(e);
    We();
    try {
      Yh(e);
    } finally {
      ze(), s();
    }
  }
}
const O0 = {
  get(e, t) {
    return $t(e, "get", ""), e[t];
  }
};
function L0(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, O0),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function fs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(gl(vh(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in oi)
        return oi[n](e);
    },
    has(t, n) {
      return n in t || n in oi;
    }
  })) : e.proxy;
}
function F0(e, t = !0) {
  return it(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function N0(e) {
  return it(e) && "__vccOpts" in e;
}
const D0 = (e, t) => Eh(e, t, us);
function I0(e) {
  const t = mo(), n = Sh(null);
  if (t) {
    const i = t.refs === _t ? t.refs = {} : t.refs;
    Object.defineProperty(i, e, {
      enumerable: !0,
      get: () => n.value,
      set: (s) => n.value = s
    });
  }
  return n;
}
function Yl(e, t, n) {
  const i = arguments.length;
  return i === 2 ? kt(t) && !st(t) ? Ir(t) ? bt(e, null, [t]) : bt(e, t) : bt(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Ir(n) && (n = [n]), bt(e, t, n));
}
const G0 = "3.5.1";
/**
* @vue/runtime-dom v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Vr;
const sa = typeof window < "u" && window.trustedTypes;
if (sa)
  try {
    Vr = /* @__PURE__ */ sa.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Xl = Vr ? (e) => Vr.createHTML(e) : (e) => e, V0 = "http://www.w3.org/2000/svg", U0 = "http://www.w3.org/1998/Math/MathML", Ae = typeof document < "u" ? document : null, ra = Ae && /* @__PURE__ */ Ae.createElement("template"), B0 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const s = t === "svg" ? Ae.createElementNS(V0, e) : t === "mathml" ? Ae.createElementNS(U0, e) : n ? Ae.createElement(e, { is: n }) : Ae.createElement(e);
    return e === "select" && i && i.multiple != null && s.setAttribute("multiple", i.multiple), s;
  },
  createText: (e) => Ae.createTextNode(e),
  createComment: (e) => Ae.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ae.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, s, r) {
    const o = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      ra.innerHTML = Xl(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const a = ra.content;
      if (i === "svg" || i === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, H0 = Symbol("_vtc");
function $0(e, t, n) {
  const i = e[H0];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ki = Symbol("_vod"), ql = Symbol("_vsh"), j0 = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ki] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Zn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), Zn(e, !0), i.enter(e)) : i.leave(e, () => {
      Zn(e, !1);
    }) : Zn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Zn(e, t);
  }
};
function Zn(e, t) {
  e.style.display = t ? e[Ki] : "none", e[ql] = !t;
}
const W0 = Symbol(""), z0 = /(^|;)\s*display\s*:/;
function K0(e, t, n) {
  const i = e.style, s = Nt(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (Nt(t))
        for (const o of t.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          n[a] == null && Vi(i, a, "");
        }
      else
        for (const o in t)
          n[o] == null && Vi(i, o, "");
    for (const o in n)
      o === "display" && (r = !0), Vi(i, o, n[o]);
  } else if (s) {
    if (t !== n) {
      const o = i[W0];
      o && (n += ";" + o), i.cssText = n, r = z0.test(n);
    }
  } else
    t && e.removeAttribute("style");
  Ki in e && (e[Ki] = r ? i.display : "", e[ql] && (i.display = "none"));
}
const oa = /\s*!important$/;
function Vi(e, t, n) {
  if (st(n))
    n.forEach((i) => Vi(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = Y0(e, t);
    oa.test(n) ? e.setProperty(
      dn(i),
      n.replace(oa, ""),
      "important"
    ) : e[i] = n;
  }
}
const aa = ["Webkit", "Moz", "ms"], fr = {};
function Y0(e, t) {
  const n = fr[t];
  if (n)
    return n;
  let i = _e(t);
  if (i !== "filter" && i in e)
    return fr[t] = i;
  i = is(i);
  for (let s = 0; s < aa.length; s++) {
    const r = aa[s] + i;
    if (r in e)
      return fr[t] = r;
  }
  return t;
}
const la = "http://www.w3.org/1999/xlink";
function ca(e, t, n, i, s, r = qc(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(la, t.slice(6, t.length)) : e.setAttributeNS(la, t, n) : n == null || r && !Ja(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Vn(n) ? String(n) : n
  );
}
function X0(e, t, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Xl(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const o = s === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (o !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const o = typeof e[t];
    o === "boolean" ? n = Ja(n) : n == null && o === "string" ? (n = "", r = !0) : o === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  r && e.removeAttribute(t);
}
function q0(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Z0(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const ha = Symbol("_vei");
function J0(e, t, n, i, s = null) {
  const r = e[ha] || (e[ha] = {}), o = r[t];
  if (i && o)
    o.value = i;
  else {
    const [a, l] = Q0(t);
    if (i) {
      const h = r[t] = nd(
        i,
        s
      );
      q0(e, a, h, l);
    } else
      o && (Z0(e, a, o, l), r[t] = void 0);
  }
}
const da = /(?:Once|Passive|Capture)$/;
function Q0(e) {
  let t;
  if (da.test(e)) {
    t = {};
    let i;
    for (; i = e.match(da); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : dn(e.slice(2)), t];
}
let gr = 0;
const td = /* @__PURE__ */ Promise.resolve(), ed = () => gr || (td.then(() => gr = 0), gr = Date.now());
function nd(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    we(
      id(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = ed(), n;
}
function id(e, t) {
  if (st(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (i) => (s) => !s._stopped && i && i(s)
    );
  } else
    return t;
}
const ua = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, sd = (e, t, n, i, s, r) => {
  const o = s === "svg";
  t === "class" ? $0(e, i, o) : t === "style" ? K0(e, n, i) : ts(t) ? qr(t) || J0(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : rd(e, t, i, o)) ? (X0(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ca(e, t, i, o, r, t !== "value")) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), ca(e, t, i, o));
};
function rd(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ua(t) && it(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return ua(t) && Nt(n) ? !1 : !!(t in e || e._isVueCE && (/[A-Z]/.test(t) || !Nt(n)));
}
const od = /* @__PURE__ */ Vt({ patchProp: sd }, B0);
let fa;
function ad() {
  return fa || (fa = a0(od));
}
const ld = (...e) => {
  const t = ad().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const s = hd(i);
    if (!s)
      return;
    const r = t._component;
    !it(r) && !r.render && !r.template && (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = n(s, !1, cd(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
};
function cd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function hd(e) {
  return Nt(e) ? document.querySelector(e) : e;
}
const vi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, s] of t)
    n[i] = s;
  return n;
}, dd = { class: "schemeInfoPopup" }, ud = {
  key: 0,
  class: "schemeInfoPopup__content"
}, fd = {
  __name: "SchemeInfoPopup",
  setup(e) {
    const t = ee(!1);
    return (n, i) => (ae(), Me("div", dd, [
      ne("button", {
        class: "schemeInfoPopup__btn",
        onClick: i[0] || (i[0] = (s) => t.value = !t.value)
      }, i[1] || (i[1] = [
        ne("svg", {
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          ne("path", {
            d: "M12 16.75C11.8019 16.7474 11.6126 16.6676 11.4725 16.5275C11.3324 16.3874 11.2526 16.1981 11.25 16V11C11.25 10.8011 11.329 10.6103 11.4697 10.4697C11.6103 10.329 11.8011 10.25 12 10.25C12.1989 10.25 12.3897 10.329 12.5303 10.4697C12.671 10.6103 12.75 10.8011 12.75 11V16C12.7474 16.1981 12.6676 16.3874 12.5275 16.5275C12.3874 16.6676 12.1981 16.7474 12 16.75Z",
            fill: "#000000"
          }),
          ne("path", {
            d: "M12 9.25C11.8019 9.24741 11.6126 9.16756 11.4725 9.02747C11.3324 8.88737 11.2526 8.69811 11.25 8.5V8C11.25 7.80109 11.329 7.61032 11.4697 7.46967C11.6103 7.32902 11.8011 7.25 12 7.25C12.1989 7.25 12.3897 7.32902 12.5303 7.46967C12.671 7.61032 12.75 7.80109 12.75 8V8.5C12.7474 8.69811 12.6676 8.88737 12.5275 9.02747C12.3874 9.16756 12.1981 9.24741 12 9.25Z",
            fill: "#000000"
          }),
          ne("path", {
            d: "M12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.387 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21ZM12 4.5C10.5166 4.5 9.0666 4.93987 7.83323 5.76398C6.59986 6.58809 5.63856 7.75943 5.07091 9.12988C4.50325 10.5003 4.35473 12.0083 4.64411 13.4632C4.9335 14.918 5.64781 16.2544 6.6967 17.3033C7.7456 18.3522 9.08197 19.0665 10.5368 19.3559C11.9917 19.6453 13.4997 19.4968 14.8701 18.9291C16.2406 18.3614 17.4119 17.4001 18.236 16.1668C19.0601 14.9334 19.5 13.4834 19.5 12C19.5 10.0109 18.7098 8.10323 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5Z",
            fill: "#000000"
          })
        ], -1)
      ])),
      t.value ? (ae(), Me("div", ud, i[2] || (i[2] = [
        Rn('<h5 class="schemeInfoPopup__content_title" data-v-755a5f80> Сочетания клавиш </h5><div class="schemeInfoPopup__hotkeys" data-v-755a5f80><p class="schemeInfoPopup__hotkey" data-v-755a5f80><span class="schemeInfoPopup_key" data-v-755a5f80>ЛКМ</span>  + тащить  — <span class="schemeInfoPopup_key_desc" data-v-755a5f80> выделение рамкой </span></p><p class="schemeInfoPopup__hotkey" data-v-755a5f80><span class="schemeInfoPopup_key" data-v-755a5f80>Shift</span>  +  <span class="schemeInfoPopup_key" data-v-755a5f80>ЛКМ</span>  + тащить  — <span class="schemeInfoPopup_key_desc" data-v-755a5f80> перемещение схемы </span></p><p class="schemeInfoPopup__hotkey" data-v-755a5f80><span class="schemeInfoPopup_key" data-v-755a5f80>Ctrl / Command</span>  +  <span class="schemeInfoPopup_key" data-v-755a5f80>ЛКМ</span>  + тащить  — <span class="schemeInfoPopup_key_desc" data-v-755a5f80> снятие выделения рамкой </span></p><p class="schemeInfoPopup__hotkey" data-v-755a5f80><span class="schemeInfoPopup_key" data-v-755a5f80>СКМ</span>  + тащить  — <span class="schemeInfoPopup_key_desc" data-v-755a5f80> перемещение схемы </span></p><p class="schemeInfoPopup__hotkey" data-v-755a5f80><span class="schemeInfoPopup_key" data-v-755a5f80>Ctrl / Command</span>  +  <span class="schemeInfoPopup_key" data-v-755a5f80>z</span>  — <span class="schemeInfoPopup_key_desc" data-v-755a5f80> отмена последнего действия </span></p></div>', 2)
      ]))) : E0("", !0)
    ]));
  }
}, gd = /* @__PURE__ */ vi(fd, [["__scopeId", "data-v-755a5f80"]]);
const pd = { class: "scheme-scale-controls" }, _d = { class: "scheme-main__controls scheme-scale-controls" }, md = {
  key: 0,
  viewBox: "0 0 24 24",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  fill: "#000000"
}, yd = {
  key: 1,
  viewBox: "0 0 24 24",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  fill: "#000000"
}, bd = {
  __name: "SchemeScaleControls",
  props: {
    isFullscreen: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "clickZoomIn",
    "clickZoomOut",
    "clickZoomReset",
    "clickFullScreen"
  ],
  setup(e, { emit: t }) {
    const n = t;
    return (i, s) => (ae(), Me("div", pd, [
      ne("div", _d, [
        ne("button", {
          title: "увеличить",
          onClick: s[0] || (s[0] = (r) => n("clickZoomIn"))
        }, s[4] || (s[4] = [
          Rn('<svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-50490e52><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-50490e52></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-50490e52></g><g id="SVGRepo_iconCarrier" data-v-50490e52><path d="M6 12H18M12 6V18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-50490e52></path></g></svg>', 1)
        ])),
        ne("button", {
          title: "сбросить",
          onClick: s[1] || (s[1] = (r) => n("clickZoomReset"))
        }, s[5] || (s[5] = [
          Rn(`<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet" data-v-50490e52><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none" data-v-50490e52><path d="M2345 4695 l-25 -24 0 -496 0 -495 -215 0 c-216 0 -216 0 -240 -25
-54 -53 -55 -51 310 -462 184 -208 346 -382 360 -387 16 -6 34 -6 50 0 14 5
176 179 360 387 365 411 364 409 310 462 -24 25 -24 25 -240 25 l-215 0 0 495
0 496 -25 24 c-24 25 -26 25 -215 25 -189 0 -191 0 -215 -25z m295 -629 c0
-471 1 -495 19 -517 18 -23 25 -24 189 -29 l170 -5 -225 -252 c-123 -139 -228
-253 -233 -253 -5 0 -110 114 -233 253 l-225 252 170 5 c164 5 171 6 189 29
18 22 19 46 19 517 l0 494 80 0 80 0 0 -494z" data-v-50490e52></path><path d="M1465 3255 c-25 -24 -25 -24 -25 -240 l0 -215 -495 0 -496 0 -24 -25
c-25 -24 -25 -26 -25 -215 0 -189 0 -191 25 -215 l24 -25 496 0 495 0 0 -215
c0 -216 0 -216 25 -240 46 -47 72 -36 202 79 451 397 639 569 647 591 6 16 6
34 0 50 -8 22 -196 194 -647 591 -130 115 -156 126 -202 79z m423 -489 c122
-109 222 -201 222 -206 0 -5 -114 -110 -252 -233 l-253 -225 -5 170 c-5 164
-6 171 -29 189 -22 18 -46 19 -517 19 l-494 0 0 80 0 80 495 0 496 0 24 25
c25 24 25 27 25 192 l0 167 33 -30 c17 -17 132 -120 255 -228z" data-v-50490e52></path><path d="M3193 2945 c-208 -184 -382 -346 -387 -360 -6 -16 -6 -34 0 -50 5
-14 179 -176 387 -360 411 -365 409 -364 462 -310 25 24 25 24 25 240 l0 215
495 0 496 0 24 25 c25 24 25 26 25 215 0 189 0 191 -25 215 l-24 25 -496 0
-495 0 0 215 c0 216 0 216 -25 240 -53 54 -51 55 -462 -310z m356 -286 c22
-18 46 -19 517 -19 l494 0 0 -80 0 -80 -494 0 c-471 0 -495 -1 -517 -19 -23
-18 -24 -26 -29 -189 l-5 -169 -250 222 c-137 123 -250 228 -250 235 0 7 113
112 250 235 l250 222 5 -169 c5 -163 6 -171 29 -189z" data-v-50490e52></path><path d="M2507 2298 c-14 -13 -169 -186 -346 -385 -350 -395 -350 -395 -296
-448 24 -25 24 -25 240 -25 l215 0 0 -495 0 -496 25 -24 c24 -25 26 -25 215
-25 189 0 191 0 215 25 l25 24 0 496 0 495 215 0 c216 0 216 0 240 25 54 53
54 53 -296 448 -177 199 -332 372 -346 385 -13 12 -37 22 -53 22 -16 0 -40
-10 -53 -22z m286 -440 l225 -253 -170 -5 c-164 -5 -171 -6 -189 -29 -18 -22
-19 -46 -19 -517 l0 -494 -80 0 -80 0 0 494 c0 471 -1 495 -19 517 -18 23 -25
24 -189 29 l-170 5 225 253 c123 138 228 252 233 252 5 0 110 -114 233 -252z" data-v-50490e52></path></g></svg>`, 1)
        ])),
        ne("button", {
          title: "уменьшить",
          onClick: s[2] || (s[2] = (r) => n("clickZoomOut"))
        }, s[6] || (s[6] = [
          Rn('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-50490e52><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-50490e52></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-50490e52></g><g id="SVGRepo_iconCarrier" data-v-50490e52><path d="M6 12L18 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-50490e52></path></g></svg>', 1)
        ])),
        ne("button", {
          title: "полноэкранный режим",
          onClick: s[3] || (s[3] = (r) => n("clickFullScreen"))
        }, [
          e.isFullscreen ? (ae(), Me("svg", md, s[7] || (s[7] = [
            Rn('<g id="SVGRepo_bgCarrier" stroke-width="0" data-v-50490e52></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-50490e52></g><g id="SVGRepo_iconCarrier" data-v-50490e52><title data-v-50490e52>fullscreen_exit_line</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-50490e52><g id="Media" transform="translate(-432.000000, 0.000000)" data-v-50490e52><g id="fullscreen_exit_line" transform="translate(432.000000, 0.000000)" data-v-50490e52><path id="MingCute" d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" fill-rule="nonzero" data-v-50490e52></path> <path id="形状" d="M20,7 L17,7 L17,4 C17,3.44772 16.5523,3 16,3 C15.4477,3 15,3.44772 15,4 L15,7 C15,8.10457 15.8954,9 17,9 L20,9 C20.5523,9 21,8.55229 21,8 C21,7.44772 20.5523,7 20,7 Z M7,9 C8.10457,9 9,8.10457 9,7 L9,4 C9,3.44772 8.55229,3 8,3 C7.44772,3 7,3.44772 7,4 L7,7 L4,7 C3.44772,7 3,7.44771 3,8 C3,8.55228 3.44772,9 4,9 L7,9 Z M7,17 L4,17 C3.44772,17 3,16.5523 3,16 C3,15.4477 3.44772,15 4,15 L7,15 C8.10457,15 9,15.8954 9,17 L9,20 C9,20.5523 8.55228,21 8,21 C7.44771,21 7,20.5523 7,20 L7,17 Z M17,15 C15.8954,15 15,15.8954 15,17 L15,20 C15,20.5523 15.4477,21 16,21 C16.5523,21 17,20.5523 17,20 L17,17 L20,17 C20.5523,17 21,16.5523 21,16 C21,15.4477 20.5523,15 20,15 L17,15 Z" fill="#09244B" data-v-50490e52></path></g></g></g></g>', 3)
          ]))) : (ae(), Me("svg", yd, s[8] || (s[8] = [
            Rn('<g id="SVGRepo_bgCarrier" stroke-width="0" data-v-50490e52></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-50490e52></g><g id="SVGRepo_iconCarrier" data-v-50490e52><title data-v-50490e52>fullscreen_line</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-50490e52><g id="Media" transform="translate(-480.000000, 0.000000)" fill-rule="nonzero" data-v-50490e52><g id="fullscreen_line" transform="translate(480.000000, 0.000000)" data-v-50490e52><path id="MingCute" d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" fill-rule="nonzero" data-v-50490e52></path> <path id="形状" d="M4,15 C4.55228,15 5,15.4477 5,16 L5,19 L8,19 C8.55228,19 9,19.4477 9,20 C9,20.5523 8.55228,21 8,21 L5,21 C3.89543,21 3,20.1046 3,19 L3,16 C3,15.4477 3.44772,15 4,15 Z M20,15 C20.51285,15 20.9355092,15.386027 20.9932725,15.8833761 L21,16 L21,19 C21,20.0543909 20.18415,20.9181678 19.1492661,20.9945144 L19,21 L16,21 C15.4477,21 15,20.5523 15,20 C15,19.48715 15.386027,19.0644908 15.8833761,19.0067275 L16,19 L19,19 L19,16 C19,15.4477 19.4477,15 20,15 Z M19,3 C20.0543909,3 20.9181678,3.81587733 20.9945144,4.85073759 L21,5 L21,8 C21,8.55228 20.5523,9 20,9 C19.48715,9 19.0644908,8.61395571 19.0067275,8.11662025 L19,8 L19,5 L16,5 C15.4477,5 15,4.55228 15,4 C15,3.48716857 15.386027,3.06449347 15.8833761,3.0067278 L16,3 L19,3 Z M8,3 C8.55228,3 9,3.44772 9,4 C9,4.51283143 8.61395571,4.93550653 8.11662025,4.9932722 L8,5 L5,5 L5,8 C5,8.55228 4.55228,9 4,9 C3.48716857,9 3.06449347,8.61395571 3.0067278,8.11662025 L3,8 L3,5 C3,3.94563773 3.81587733,3.08183483 4.85073759,3.00548573 L5,3 L8,3 Z" fill="#09244B" data-v-50490e52></path></g></g></g></g>', 3)
          ])))
        ])
      ])
    ]));
  }
}, vd = /* @__PURE__ */ vi(bd, [["__scopeId", "data-v-50490e52"]]);
const Sd = {}, Cd = { class: "Loader" };
function wd(e, t) {
  return ae(), Me("div", Cd, t[0] || (t[0] = [
    ne("div", { class: "spinner" }, null, -1)
  ]));
}
const xd = /* @__PURE__ */ vi(Sd, [["render", wd], ["__scopeId", "data-v-f908e126"]]);
const Ed = { class: "scheme_main" }, Pd = {
  __name: "SchemeMain",
  emits: [
    "changedSeatsState",
    "unselectSeats",
    "changeFullscreenMode",
    "selectSeats"
  ],
  setup(e, { emit: t }) {
    const n = de("schemeSeats");
    de("schemeSeatsChunk"), de("schemeConfig"), de("selectionFilters");
    const i = de("loading"), s = {
      width: 700,
      height: 700,
      draggable: !0,
      perfectDrawEnabled: !1,
      // Отключает perfect drawing
      hitGraphEnabled: !1,
      // Отключает точный hit detection
      listening: !1
      // Отключает события на stage
    }, r = Un({
      visible: !1,
      x: 0,
      y: 0,
      text: ""
    }), o = ee([]), a = ee(null);
    ee(null);
    const l = ee(0);
    return yi(() => {
      const h = ["red", "orange", "cyan", "green", "blue", "purple"], c = [];
      for (let g = 0; g < 2e4; g++) {
        const f = Math.random() * s.width, _ = s.height + Math.random() * 200 - 100 + s.height / s.width * -1 * f;
        c.push({
          x: f,
          y: _,
          id: g.toString(),
          color: h[Math.round(Math.random() * 5)]
        });
      }
      o.value = c, l.value++;
    }), (h, c) => {
      const g = tn("v-rect"), f = tn("v-text"), _ = tn("v-group"), u = tn("v-layer"), m = tn("v-tag"), y = tn("v-label"), C = tn("v-stage");
      return ae(), Me("div", Ed, [
        Oh(bt(xd, null, null, 512), [
          [j0, Hi(i)]
        ]),
        bt(C, { config: s }, {
          default: An(() => [
            bt(u, {
              ref_key: "circlesLayerRef",
              ref: a
            }, {
              default: An(() => [
                (ae(!0), Me(ve, null, zh(Hi(n), (x) => (ae(), po(_, {
                  key: x.id,
                  config: {
                    x: x.x,
                    y: x.y,
                    draggable: !0,
                    id: String(x.id),
                    listening: !0
                  }
                }, {
                  default: An(() => [
                    bt(g, {
                      config: {
                        x: 0,
                        y: 0,
                        width: 20,
                        height: 20,
                        fill: x.bg_color,
                        stroke: "black",
                        strokeWidth: 2,
                        cornerRadius: 3,
                        perfectDrawEnabled: !1,
                        hitStrokeWidth: 0,
                        shadowForStrokeEnabled: !1
                      }
                    }, null, 8, ["config"]),
                    bt(f, { config: {
                      x: 2,
                      y: 2,
                      text: "12",
                      fontSize: 10,
                      fill: "black",
                      listening: !1
                    } }),
                    bt(f, { config: {
                      x: 18,
                      y: 18,
                      text: "12",
                      fontSize: 10,
                      fill: "black",
                      align: "right",
                      listening: !1
                    } })
                  ]),
                  _: 2
                }, 1032, ["config"]))), 128))
              ]),
              _: 1
            }, 512),
            bt(u, null, {
              default: An(() => [
                bt(y, {
                  config: {
                    x: r.x,
                    y: r.y,
                    opacity: 0.75,
                    visible: r.visible
                  }
                }, {
                  default: An(() => [
                    bt(m, { config: {
                      fill: "black",
                      pointerDirection: "down",
                      pointerWidth: 10,
                      pointerHeight: 10,
                      lineJoin: "round",
                      shadowColor: "black",
                      shadowBlur: 10,
                      shadowOffsetX: 10,
                      shadowOffsetY: 10,
                      shadowOpacity: 0.2
                    } }),
                    bt(f, {
                      config: {
                        text: r.text,
                        fontFamily: "Calibri",
                        fontSize: 18,
                        padding: 5,
                        fill: "white"
                      }
                    }, null, 8, ["config"])
                  ]),
                  _: 1
                }, 8, ["config"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        bt(vd, { class: "scheme_main__controls" })
      ]);
    };
  }
}, Td = /* @__PURE__ */ vi(Pd, [["__scopeId", "data-v-3f9af657"]]);
const Ad = {
  __name: "SchemeView",
  emits: [
    "changedSeatsState",
    "unselectSeats",
    "changeFullscreenMode"
    // 'clearSelectedSeats',
  ],
  setup(e, { emit: t }) {
    const n = t, i = de("schemeConfig"), s = (o) => {
      n("changedSeatsState", o);
    }, r = (o) => {
      n("unselectSeats", o);
    };
    return (o, a) => (ae(), Me("div", {
      class: "scheme_view",
      style: ss({
        backgroundColor: Hi(i).background_color || "#efefef"
      })
    }, [
      bt(gd),
      bt(Td, {
        class: "scheme_view__scheme",
        onChangedSeatsState: s,
        onUnselectSeats: r,
        onChangeFullscreenMode: a[0] || (a[0] = (l) => n("changeFullscreenMode"))
      })
    ], 4));
  }
}, Rd = /* @__PURE__ */ vi(Ad, [["__scopeId", "data-v-cb55ccf1"]]);
class kd {
  constructor(t, n = "loaderControl") {
    Do(this, "_fallback", () => {
      this.count = 0, window[`${this.name}Count`] = 0, this.offCallback && this.offCallback();
    });
    this.count = t, this.name = n, this.fallbackTimeout = null, window[`${n}Count`] = t;
  }
  setMethod(t, n) {
    this.offCallback = t, this.onCallback = n;
  }
  increaseCount() {
    this.count == 0 && this.onCallback(), clearTimeout(this.fallbackTimeout), this.fallbackTimeout = setTimeout(this._fallback, 3e4), this.count++, window[`${this.name}Count`]++;
  }
  decreaseCount() {
    this.count && (this.count--, window[`${this.name}Count`]--), this.count === 0 && this.offCallback();
  }
}
const pr = new kd(0, "HallScheme");
const Md = {
  __name: "App",
  setup(e) {
    const t = ee({}), n = ee({}), i = ee({}), s = ee({}), r = ee({});
    rn("schemeSeats", n), rn("schemeSeatsChunk", i), rn("schemeConfig", t), rn("selectionFilters", r);
    const o = de("hallSchemeApp"), a = o.events;
    o.on(a.setSchemeSeatsToApp, ({ detail: u }) => {
      n.value = u.seats || {};
    }), o.on(a.updateSeatsChunk, ({ detail: u }) => {
      i.value = u.seats || {};
    }), o.on(a.setSelectionFilters, ({ detail: u }) => {
      r.value = u.filters || {};
    });
    const l = (u) => {
      s.value = u, o.setSelectedSeats(u);
    }, h = (u) => {
      o.unselectSeats(u);
    }, c = ee(!1);
    rn("isFullscreen", c);
    const g = () => {
      c.value = !c.value, document.body.classList.toggle("_scroll_lock");
    }, f = ee(!1);
    rn("loading", f), pr.setMethod(function() {
      f.value = !1;
    }, function() {
      f.value = !0;
    }), o.on(a.loaderAddCount, () => {
      pr.increaseCount();
    }), o.on(a.loaderDecreaseCount, () => {
      pr.decreaseCount();
    });
    const _ = I0("schemeWrapper");
    return yi(() => {
      _.value.$el.addEventListener("wheel", function(u) {
        const m = u.wheelDelta || -u.detail;
        this.scrollTop += (m < 0 ? 1 : -1) * 30, u.preventDefault();
      });
    }), (u, m) => (ae(), po(Rd, {
      ref: "schemeWrapper",
      class: rs(["vue_hall_scheme_wrapper", { _full_screen: c.value }]),
      onChangedSeatsState: l,
      onUnselectSeats: h,
      onChangeFullscreenMode: g
    }, null, 8, ["class"]));
  }
};
var _i, Ut, Yt;
class Od {
  constructor(t, n = {}) {
    vn(this, _i, void 0);
    vn(this, Ut, void 0);
    vn(this, Yt, void 0);
    if (!t)
      throw new Error("[HallSchemeView] constructor: rootSelector is required");
    if (Sn(this, _i, t), Sn(this, Ut, document.querySelector(wt(this, _i))), !wt(this, Ut))
      throw new Error("[HallSchemeView] constructor: no Element with provided rootSelector");
    Sn(this, Yt, Date.now()), this.events = {
      setSchemeConfig: `setSchemeConfig${wt(this, Yt)}`,
      setSchemeSeatsToApp: `setSchemeSeatsToApp${wt(this, Yt)}`,
      updateSeatsChunk: `updateSeatsChunk${wt(this, Yt)}`,
      setSelectedSeats: `setSelectedSeats${wt(this, Yt)}`,
      unselectSeats: `unselectSeat${wt(this, Yt)}`,
      setSelectionFilters: `setSelectionFilters${wt(this, Yt)}`,
      loaderAddCount: `loaderAddCount${wt(this, Yt)}`,
      loaderDecreaseCount: `loaderDecreaseCount${wt(this, Yt)}`,
      clearSelectedSeats: `clearSelectedSeats${wt(this, Yt)}`
    }, this.selectedSeats = {}, this.selectionFilters = {
      attrs: {},
      prices: {}
    };
  }
  on(t, n) {
    if (t = t.split(wt(this, Yt))[0], !this.events[t]) {
      console.log(`[HallSchemeApp] Неизвестное событие: ${t}`);
      return;
    }
    wt(this, Ut).addEventListener(this.events[t], n);
  }
  setSelectionFilters(t) {
    this.selectionFilters = t;
    const n = new CustomEvent(this.events.setSelectionFilters, {
      detail: { filters: t }
    });
    wt(this, Ut).dispatchEvent(n);
  }
  setSchemeConfig(t) {
    const n = new CustomEvent(this.events.setSchemeConfig, {
      detail: { config: t }
    });
    wt(this, Ut).dispatchEvent(n);
  }
  setSchemeSeatsToApp(t) {
    const n = structuredClone(t), i = new CustomEvent(this.events.setSchemeSeatsToApp, {
      detail: { seats: n }
    });
    wt(this, Ut).dispatchEvent(i);
  }
  updateSeatsChunk(t) {
    const n = structuredClone(t), i = new CustomEvent(this.events.updateSeatsChunk, {
      detail: { seats: n }
    });
    wt(this, Ut).dispatchEvent(i);
  }
  getSelectedSeats() {
    return this.selectedSeats;
  }
  setSelectedSeats(t) {
    this.selectedSeats = t;
    const n = new CustomEvent(this.events.setSelectedSeats, {
      detail: { seats: t }
    });
    wt(this, Ut).dispatchEvent(n);
  }
  unselectSeats(t) {
    const n = new CustomEvent(this.events.unselectSeats, {
      detail: { ids: t }
    });
    wt(this, Ut).dispatchEvent(n);
  }
  clearSelectedSeats() {
    const t = new CustomEvent(this.events.clearSelectedSeats);
    wt(this, Ut).dispatchEvent(t);
  }
  getRootElement() {
    return wt(this, Ut);
  }
  loaderAddCount() {
    const t = new CustomEvent(this.events.loaderAddCount);
    wt(this, Ut).dispatchEvent(t);
  }
  loaderDecreaseCount() {
    const t = new CustomEvent(this.events.loaderDecreaseCount);
    wt(this, Ut).dispatchEvent(t);
  }
  // setConfig(config) {
  //   if (!config) {
  //     return
  //   }
  //   this.config = config
  //   // на изменение данных извне дергать кастомные события внутри компонента
  // }
  // getConfig(config) {
  //   return this.config
  // }
}
_i = new WeakMap(), Ut = new WeakMap(), Yt = new WeakMap();
var ga = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ld(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yo = { exports: {} }, gs = {}, Zl = {}, ot = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e._registerNode = e.Konva = e.glob = void 0;
  const t = Math.PI / 180;
  function n() {
    return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
  }
  e.glob = typeof ga < "u" ? ga : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, e.Konva = {
    _global: e.glob,
    version: "9.3.22",
    isBrowser: n(),
    isUnminified: /param/.test((function(s) {
    }).toString()),
    dblClickWindow: 400,
    getAngle(s) {
      return e.Konva.angleDeg ? s * t : s;
    },
    enableTrace: !1,
    pointerEventsEnabled: !0,
    autoDrawEnabled: !0,
    hitOnDragEnabled: !1,
    capturePointerEventsEnabled: !1,
    _mouseListenClick: !1,
    _touchListenClick: !1,
    _pointerListenClick: !1,
    _mouseInDblClickWindow: !1,
    _touchInDblClickWindow: !1,
    _pointerInDblClickWindow: !1,
    _mouseDblClickPointerId: null,
    _touchDblClickPointerId: null,
    _pointerDblClickPointerId: null,
    _fixTextRendering: !1,
    pixelRatio: typeof window < "u" && window.devicePixelRatio || 1,
    dragDistance: 3,
    angleDeg: !0,
    showWarnings: !0,
    dragButtons: [0, 1],
    isDragging() {
      return e.Konva.DD.isDragging;
    },
    isTransforming() {
      var s;
      return (s = e.Konva.Transformer) === null || s === void 0 ? void 0 : s.isTransforming();
    },
    isDragReady() {
      return !!e.Konva.DD.node;
    },
    releaseCanvasOnDestroy: !0,
    document: e.glob.document,
    _injectGlobal(s) {
      e.glob.Konva = s;
    }
  };
  const i = (s) => {
    e.Konva[s.prototype.getClassName()] = s;
  };
  e._registerNode = i, e.Konva._injectGlobal(e.Konva);
})(ot);
var At = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Util = e.Transform = void 0;
  const t = ot;
  class n {
    constructor(p = [1, 0, 0, 1, 0, 0]) {
      this.dirty = !1, this.m = p && p.slice() || [1, 0, 0, 1, 0, 0];
    }
    reset() {
      this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0;
    }
    copy() {
      return new n(this.m);
    }
    copyInto(p) {
      p.m[0] = this.m[0], p.m[1] = this.m[1], p.m[2] = this.m[2], p.m[3] = this.m[3], p.m[4] = this.m[4], p.m[5] = this.m[5];
    }
    point(p) {
      const v = this.m;
      return {
        x: v[0] * p.x + v[2] * p.y + v[4],
        y: v[1] * p.x + v[3] * p.y + v[5]
      };
    }
    translate(p, v) {
      return this.m[4] += this.m[0] * p + this.m[2] * v, this.m[5] += this.m[1] * p + this.m[3] * v, this;
    }
    scale(p, v) {
      return this.m[0] *= p, this.m[1] *= p, this.m[2] *= v, this.m[3] *= v, this;
    }
    rotate(p) {
      const v = Math.cos(p), P = Math.sin(p), R = this.m[0] * v + this.m[2] * P, S = this.m[1] * v + this.m[3] * P, k = this.m[0] * -P + this.m[2] * v, T = this.m[1] * -P + this.m[3] * v;
      return this.m[0] = R, this.m[1] = S, this.m[2] = k, this.m[3] = T, this;
    }
    getTranslation() {
      return {
        x: this.m[4],
        y: this.m[5]
      };
    }
    skew(p, v) {
      const P = this.m[0] + this.m[2] * v, R = this.m[1] + this.m[3] * v, S = this.m[2] + this.m[0] * p, k = this.m[3] + this.m[1] * p;
      return this.m[0] = P, this.m[1] = R, this.m[2] = S, this.m[3] = k, this;
    }
    multiply(p) {
      const v = this.m[0] * p.m[0] + this.m[2] * p.m[1], P = this.m[1] * p.m[0] + this.m[3] * p.m[1], R = this.m[0] * p.m[2] + this.m[2] * p.m[3], S = this.m[1] * p.m[2] + this.m[3] * p.m[3], k = this.m[0] * p.m[4] + this.m[2] * p.m[5] + this.m[4], T = this.m[1] * p.m[4] + this.m[3] * p.m[5] + this.m[5];
      return this.m[0] = v, this.m[1] = P, this.m[2] = R, this.m[3] = S, this.m[4] = k, this.m[5] = T, this;
    }
    invert() {
      const p = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), v = this.m[3] * p, P = -this.m[1] * p, R = -this.m[2] * p, S = this.m[0] * p, k = p * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), T = p * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
      return this.m[0] = v, this.m[1] = P, this.m[2] = R, this.m[3] = S, this.m[4] = k, this.m[5] = T, this;
    }
    getMatrix() {
      return this.m;
    }
    decompose() {
      const p = this.m[0], v = this.m[1], P = this.m[2], R = this.m[3], S = this.m[4], k = this.m[5], T = p * R - v * P, M = {
        x: S,
        y: k,
        rotation: 0,
        scaleX: 0,
        scaleY: 0,
        skewX: 0,
        skewY: 0
      };
      if (p != 0 || v != 0) {
        const F = Math.sqrt(p * p + v * v);
        M.rotation = v > 0 ? Math.acos(p / F) : -Math.acos(p / F), M.scaleX = F, M.scaleY = T / F, M.skewX = (p * P + v * R) / T, M.skewY = 0;
      } else if (P != 0 || R != 0) {
        const F = Math.sqrt(P * P + R * R);
        M.rotation = Math.PI / 2 - (R > 0 ? Math.acos(-P / F) : -Math.acos(P / F)), M.scaleX = T / F, M.scaleY = F, M.skewX = 0, M.skewY = (p * P + v * R) / T;
      }
      return M.rotation = e.Util._getRotation(M.rotation), M;
    }
  }
  e.Transform = n;
  const i = "[object Array]", s = "[object Number]", r = "[object String]", o = "[object Boolean]", a = Math.PI / 180, l = 180 / Math.PI, h = "#", c = "", g = "0", f = "Konva warning: ", _ = "Konva error: ", u = "rgb(", m = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 132, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 255, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 203],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [119, 128, 144],
    slategrey: [119, 128, 144],
    snow: [255, 255, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    transparent: [255, 255, 255, 0],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 5]
  }, y = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
  let C = [];
  const x = typeof requestAnimationFrame < "u" && requestAnimationFrame || function(d) {
    setTimeout(d, 60);
  };
  e.Util = {
    _isElement(d) {
      return !!(d && d.nodeType == 1);
    },
    _isFunction(d) {
      return !!(d && d.constructor && d.call && d.apply);
    },
    _isPlainObject(d) {
      return !!d && d.constructor === Object;
    },
    _isArray(d) {
      return Object.prototype.toString.call(d) === i;
    },
    _isNumber(d) {
      return Object.prototype.toString.call(d) === s && !isNaN(d) && isFinite(d);
    },
    _isString(d) {
      return Object.prototype.toString.call(d) === r;
    },
    _isBoolean(d) {
      return Object.prototype.toString.call(d) === o;
    },
    isObject(d) {
      return d instanceof Object;
    },
    isValidSelector(d) {
      if (typeof d != "string")
        return !1;
      const p = d[0];
      return p === "#" || p === "." || p === p.toUpperCase();
    },
    _sign(d) {
      return d === 0 || d > 0 ? 1 : -1;
    },
    requestAnimFrame(d) {
      C.push(d), C.length === 1 && x(function() {
        const p = C;
        C = [], p.forEach(function(v) {
          v();
        });
      });
    },
    createCanvasElement() {
      const d = document.createElement("canvas");
      try {
        d.style = d.style || {};
      } catch {
      }
      return d;
    },
    createImageElement() {
      return document.createElement("img");
    },
    _isInDocument(d) {
      for (; d = d.parentNode; )
        if (d == document)
          return !0;
      return !1;
    },
    _urlToImage(d, p) {
      const v = e.Util.createImageElement();
      v.onload = function() {
        p(v);
      }, v.src = d;
    },
    _rgbToHex(d, p, v) {
      return ((1 << 24) + (d << 16) + (p << 8) + v).toString(16).slice(1);
    },
    _hexToRgb(d) {
      d = d.replace(h, c);
      const p = parseInt(d, 16);
      return {
        r: p >> 16 & 255,
        g: p >> 8 & 255,
        b: p & 255
      };
    },
    getRandomColor() {
      let d = (Math.random() * 16777215 << 0).toString(16);
      for (; d.length < 6; )
        d = g + d;
      return h + d;
    },
    getRGB(d) {
      let p;
      return d in m ? (p = m[d], {
        r: p[0],
        g: p[1],
        b: p[2]
      }) : d[0] === h ? this._hexToRgb(d.substring(1)) : d.substr(0, 4) === u ? (p = y.exec(d.replace(/ /g, "")), {
        r: parseInt(p[1], 10),
        g: parseInt(p[2], 10),
        b: parseInt(p[3], 10)
      }) : {
        r: 0,
        g: 0,
        b: 0
      };
    },
    colorToRGBA(d) {
      return d = d || "black", e.Util._namedColorToRBA(d) || e.Util._hex3ColorToRGBA(d) || e.Util._hex4ColorToRGBA(d) || e.Util._hex6ColorToRGBA(d) || e.Util._hex8ColorToRGBA(d) || e.Util._rgbColorToRGBA(d) || e.Util._rgbaColorToRGBA(d) || e.Util._hslColorToRGBA(d);
    },
    _namedColorToRBA(d) {
      const p = m[d.toLowerCase()];
      return p ? {
        r: p[0],
        g: p[1],
        b: p[2],
        a: 1
      } : null;
    },
    _rgbColorToRGBA(d) {
      if (d.indexOf("rgb(") === 0) {
        d = d.match(/rgb\(([^)]+)\)/)[1];
        const p = d.split(/ *, */).map(Number);
        return {
          r: p[0],
          g: p[1],
          b: p[2],
          a: 1
        };
      }
    },
    _rgbaColorToRGBA(d) {
      if (d.indexOf("rgba(") === 0) {
        d = d.match(/rgba\(([^)]+)\)/)[1];
        const p = d.split(/ *, */).map((v, P) => v.slice(-1) === "%" ? P === 3 ? parseInt(v) / 100 : parseInt(v) / 100 * 255 : Number(v));
        return {
          r: p[0],
          g: p[1],
          b: p[2],
          a: p[3]
        };
      }
    },
    _hex8ColorToRGBA(d) {
      if (d[0] === "#" && d.length === 9)
        return {
          r: parseInt(d.slice(1, 3), 16),
          g: parseInt(d.slice(3, 5), 16),
          b: parseInt(d.slice(5, 7), 16),
          a: parseInt(d.slice(7, 9), 16) / 255
        };
    },
    _hex6ColorToRGBA(d) {
      if (d[0] === "#" && d.length === 7)
        return {
          r: parseInt(d.slice(1, 3), 16),
          g: parseInt(d.slice(3, 5), 16),
          b: parseInt(d.slice(5, 7), 16),
          a: 1
        };
    },
    _hex4ColorToRGBA(d) {
      if (d[0] === "#" && d.length === 5)
        return {
          r: parseInt(d[1] + d[1], 16),
          g: parseInt(d[2] + d[2], 16),
          b: parseInt(d[3] + d[3], 16),
          a: parseInt(d[4] + d[4], 16) / 255
        };
    },
    _hex3ColorToRGBA(d) {
      if (d[0] === "#" && d.length === 4)
        return {
          r: parseInt(d[1] + d[1], 16),
          g: parseInt(d[2] + d[2], 16),
          b: parseInt(d[3] + d[3], 16),
          a: 1
        };
    },
    _hslColorToRGBA(d) {
      if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(d)) {
        const [p, ...v] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(d), P = Number(v[0]) / 360, R = Number(v[1]) / 100, S = Number(v[2]) / 100;
        let k, T, M;
        if (R === 0)
          return M = S * 255, {
            r: Math.round(M),
            g: Math.round(M),
            b: Math.round(M),
            a: 1
          };
        S < 0.5 ? k = S * (1 + R) : k = S + R - S * R;
        const F = 2 * S - k, B = [0, 0, 0];
        for (let Y = 0; Y < 3; Y++)
          T = P + 1 / 3 * -(Y - 1), T < 0 && T++, T > 1 && T--, 6 * T < 1 ? M = F + (k - F) * 6 * T : 2 * T < 1 ? M = k : 3 * T < 2 ? M = F + (k - F) * (2 / 3 - T) * 6 : M = F, B[Y] = M * 255;
        return {
          r: Math.round(B[0]),
          g: Math.round(B[1]),
          b: Math.round(B[2]),
          a: 1
        };
      }
    },
    haveIntersection(d, p) {
      return !(p.x > d.x + d.width || p.x + p.width < d.x || p.y > d.y + d.height || p.y + p.height < d.y);
    },
    cloneObject(d) {
      const p = {};
      for (const v in d)
        this._isPlainObject(d[v]) ? p[v] = this.cloneObject(d[v]) : this._isArray(d[v]) ? p[v] = this.cloneArray(d[v]) : p[v] = d[v];
      return p;
    },
    cloneArray(d) {
      return d.slice(0);
    },
    degToRad(d) {
      return d * a;
    },
    radToDeg(d) {
      return d * l;
    },
    _degToRad(d) {
      return e.Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead."), e.Util.degToRad(d);
    },
    _radToDeg(d) {
      return e.Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."), e.Util.radToDeg(d);
    },
    _getRotation(d) {
      return t.Konva.angleDeg ? e.Util.radToDeg(d) : d;
    },
    _capitalize(d) {
      return d.charAt(0).toUpperCase() + d.slice(1);
    },
    throw(d) {
      throw new Error(_ + d);
    },
    error(d) {
      console.error(_ + d);
    },
    warn(d) {
      t.Konva.showWarnings && console.warn(f + d);
    },
    each(d, p) {
      for (const v in d)
        p(v, d[v]);
    },
    _inRange(d, p, v) {
      return p <= d && d < v;
    },
    _getProjectionToSegment(d, p, v, P, R, S) {
      let k, T, M;
      const F = (d - v) * (d - v) + (p - P) * (p - P);
      if (F == 0)
        k = d, T = p, M = (R - v) * (R - v) + (S - P) * (S - P);
      else {
        const B = ((R - d) * (v - d) + (S - p) * (P - p)) / F;
        B < 0 ? (k = d, T = p, M = (d - R) * (d - R) + (p - S) * (p - S)) : B > 1 ? (k = v, T = P, M = (v - R) * (v - R) + (P - S) * (P - S)) : (k = d + B * (v - d), T = p + B * (P - p), M = (k - R) * (k - R) + (T - S) * (T - S));
      }
      return [k, T, M];
    },
    _getProjectionToLine(d, p, v) {
      const P = e.Util.cloneObject(d);
      let R = Number.MAX_VALUE;
      return p.forEach(function(S, k) {
        if (!v && k === p.length - 1)
          return;
        const T = p[(k + 1) % p.length], M = e.Util._getProjectionToSegment(S.x, S.y, T.x, T.y, d.x, d.y), F = M[0], B = M[1], Y = M[2];
        Y < R && (P.x = F, P.y = B, R = Y);
      }), P;
    },
    _prepareArrayForTween(d, p, v) {
      const P = [], R = [];
      if (d.length > p.length) {
        const k = p;
        p = d, d = k;
      }
      for (let k = 0; k < d.length; k += 2)
        P.push({
          x: d[k],
          y: d[k + 1]
        });
      for (let k = 0; k < p.length; k += 2)
        R.push({
          x: p[k],
          y: p[k + 1]
        });
      const S = [];
      return R.forEach(function(k) {
        const T = e.Util._getProjectionToLine(k, P, v);
        S.push(T.x), S.push(T.y);
      }), S;
    },
    _prepareToStringify(d) {
      let p;
      d.visitedByCircularReferenceRemoval = !0;
      for (const v in d)
        if (d.hasOwnProperty(v) && d[v] && typeof d[v] == "object") {
          if (p = Object.getOwnPropertyDescriptor(d, v), d[v].visitedByCircularReferenceRemoval || e.Util._isElement(d[v]))
            if (p.configurable)
              delete d[v];
            else
              return null;
          else if (e.Util._prepareToStringify(d[v]) === null)
            if (p.configurable)
              delete d[v];
            else
              return null;
        }
      return delete d.visitedByCircularReferenceRemoval, d;
    },
    _assign(d, p) {
      for (const v in p)
        d[v] = p[v];
      return d;
    },
    _getFirstPointerId(d) {
      return d.touches ? d.changedTouches[0].identifier : d.pointerId || 999;
    },
    releaseCanvas(...d) {
      t.Konva.releaseCanvasOnDestroy && d.forEach((p) => {
        p.width = 0, p.height = 0;
      });
    },
    drawRoundedRectPath(d, p, v, P) {
      let R = 0, S = 0, k = 0, T = 0;
      typeof P == "number" ? R = S = k = T = Math.min(P, p / 2, v / 2) : (R = Math.min(P[0] || 0, p / 2, v / 2), S = Math.min(P[1] || 0, p / 2, v / 2), T = Math.min(P[2] || 0, p / 2, v / 2), k = Math.min(P[3] || 0, p / 2, v / 2)), d.moveTo(R, 0), d.lineTo(p - S, 0), d.arc(p - S, S, S, Math.PI * 3 / 2, 0, !1), d.lineTo(p, v - T), d.arc(p - T, v - T, T, 0, Math.PI / 2, !1), d.lineTo(k, v), d.arc(k, v - k, k, Math.PI / 2, Math.PI, !1), d.lineTo(0, R), d.arc(R, R, R, Math.PI, Math.PI * 3 / 2, !1);
    }
  };
})(At);
var Tt = {}, pe = {}, Oe = {};
Object.defineProperty(Oe, "__esModule", { value: !0 });
Oe.HitContext = Oe.SceneContext = Oe.Context = void 0;
const Jl = At, Fd = ot;
function Nd(e) {
  const t = [], n = e.length, i = Jl.Util;
  for (let s = 0; s < n; s++) {
    let r = e[s];
    i._isNumber(r) ? r = Math.round(r * 1e3) / 1e3 : i._isString(r) || (r = r + ""), t.push(r);
  }
  return t;
}
const pa = ",", Dd = "(", Id = ")", Gd = "([", Vd = "])", Ud = ";", Bd = "()", Hd = "=", _a = [
  "arc",
  "arcTo",
  "beginPath",
  "bezierCurveTo",
  "clearRect",
  "clip",
  "closePath",
  "createLinearGradient",
  "createPattern",
  "createRadialGradient",
  "drawImage",
  "ellipse",
  "fill",
  "fillText",
  "getImageData",
  "createImageData",
  "lineTo",
  "moveTo",
  "putImageData",
  "quadraticCurveTo",
  "rect",
  "roundRect",
  "restore",
  "rotate",
  "save",
  "scale",
  "setLineDash",
  "setTransform",
  "stroke",
  "strokeText",
  "transform",
  "translate"
], $d = [
  "fillStyle",
  "strokeStyle",
  "shadowColor",
  "shadowBlur",
  "shadowOffsetX",
  "shadowOffsetY",
  "letterSpacing",
  "lineCap",
  "lineDashOffset",
  "lineJoin",
  "lineWidth",
  "miterLimit",
  "direction",
  "font",
  "textAlign",
  "textBaseline",
  "globalAlpha",
  "globalCompositeOperation",
  "imageSmoothingEnabled"
], jd = 100;
class ps {
  constructor(t) {
    this.canvas = t, Fd.Konva.enableTrace && (this.traceArr = [], this._enableTrace());
  }
  fillShape(t) {
    t.fillEnabled() && this._fill(t);
  }
  _fill(t) {
  }
  strokeShape(t) {
    t.hasStroke() && this._stroke(t);
  }
  _stroke(t) {
  }
  fillStrokeShape(t) {
    t.attrs.fillAfterStrokeEnabled ? (this.strokeShape(t), this.fillShape(t)) : (this.fillShape(t), this.strokeShape(t));
  }
  getTrace(t, n) {
    let i = this.traceArr, s = i.length, r = "", o, a, l, h;
    for (o = 0; o < s; o++)
      a = i[o], l = a.method, l ? (h = a.args, r += l, t ? r += Bd : Jl.Util._isArray(h[0]) ? r += Gd + h.join(pa) + Vd : (n && (h = h.map((c) => typeof c == "number" ? Math.floor(c) : c)), r += Dd + h.join(pa) + Id)) : (r += a.property, t || (r += Hd + a.val)), r += Ud;
    return r;
  }
  clearTrace() {
    this.traceArr = [];
  }
  _trace(t) {
    let n = this.traceArr, i;
    n.push(t), i = n.length, i >= jd && n.shift();
  }
  reset() {
    const t = this.getCanvas().getPixelRatio();
    this.setTransform(1 * t, 0, 0, 1 * t, 0, 0);
  }
  getCanvas() {
    return this.canvas;
  }
  clear(t) {
    const n = this.getCanvas();
    t ? this.clearRect(t.x || 0, t.y || 0, t.width || 0, t.height || 0) : this.clearRect(0, 0, n.getWidth() / n.pixelRatio, n.getHeight() / n.pixelRatio);
  }
  _applyLineCap(t) {
    const n = t.attrs.lineCap;
    n && this.setAttr("lineCap", n);
  }
  _applyOpacity(t) {
    const n = t.getAbsoluteOpacity();
    n !== 1 && this.setAttr("globalAlpha", n);
  }
  _applyLineJoin(t) {
    const n = t.attrs.lineJoin;
    n && this.setAttr("lineJoin", n);
  }
  setAttr(t, n) {
    this._context[t] = n;
  }
  arc(t, n, i, s, r, o) {
    this._context.arc(t, n, i, s, r, o);
  }
  arcTo(t, n, i, s, r) {
    this._context.arcTo(t, n, i, s, r);
  }
  beginPath() {
    this._context.beginPath();
  }
  bezierCurveTo(t, n, i, s, r, o) {
    this._context.bezierCurveTo(t, n, i, s, r, o);
  }
  clearRect(t, n, i, s) {
    this._context.clearRect(t, n, i, s);
  }
  clip(...t) {
    this._context.clip.apply(this._context, t);
  }
  closePath() {
    this._context.closePath();
  }
  createImageData(t, n) {
    const i = arguments;
    if (i.length === 2)
      return this._context.createImageData(t, n);
    if (i.length === 1)
      return this._context.createImageData(t);
  }
  createLinearGradient(t, n, i, s) {
    return this._context.createLinearGradient(t, n, i, s);
  }
  createPattern(t, n) {
    return this._context.createPattern(t, n);
  }
  createRadialGradient(t, n, i, s, r, o) {
    return this._context.createRadialGradient(t, n, i, s, r, o);
  }
  drawImage(t, n, i, s, r, o, a, l, h) {
    const c = arguments, g = this._context;
    c.length === 3 ? g.drawImage(t, n, i) : c.length === 5 ? g.drawImage(t, n, i, s, r) : c.length === 9 && g.drawImage(t, n, i, s, r, o, a, l, h);
  }
  ellipse(t, n, i, s, r, o, a, l) {
    this._context.ellipse(t, n, i, s, r, o, a, l);
  }
  isPointInPath(t, n, i, s) {
    return i ? this._context.isPointInPath(i, t, n, s) : this._context.isPointInPath(t, n, s);
  }
  fill(...t) {
    this._context.fill.apply(this._context, t);
  }
  fillRect(t, n, i, s) {
    this._context.fillRect(t, n, i, s);
  }
  strokeRect(t, n, i, s) {
    this._context.strokeRect(t, n, i, s);
  }
  fillText(t, n, i, s) {
    s ? this._context.fillText(t, n, i, s) : this._context.fillText(t, n, i);
  }
  measureText(t) {
    return this._context.measureText(t);
  }
  getImageData(t, n, i, s) {
    return this._context.getImageData(t, n, i, s);
  }
  lineTo(t, n) {
    this._context.lineTo(t, n);
  }
  moveTo(t, n) {
    this._context.moveTo(t, n);
  }
  rect(t, n, i, s) {
    this._context.rect(t, n, i, s);
  }
  roundRect(t, n, i, s, r) {
    this._context.roundRect(t, n, i, s, r);
  }
  putImageData(t, n, i) {
    this._context.putImageData(t, n, i);
  }
  quadraticCurveTo(t, n, i, s) {
    this._context.quadraticCurveTo(t, n, i, s);
  }
  restore() {
    this._context.restore();
  }
  rotate(t) {
    this._context.rotate(t);
  }
  save() {
    this._context.save();
  }
  scale(t, n) {
    this._context.scale(t, n);
  }
  setLineDash(t) {
    this._context.setLineDash ? this._context.setLineDash(t) : "mozDash" in this._context ? this._context.mozDash = t : "webkitLineDash" in this._context && (this._context.webkitLineDash = t);
  }
  getLineDash() {
    return this._context.getLineDash();
  }
  setTransform(t, n, i, s, r, o) {
    this._context.setTransform(t, n, i, s, r, o);
  }
  stroke(t) {
    t ? this._context.stroke(t) : this._context.stroke();
  }
  strokeText(t, n, i, s) {
    this._context.strokeText(t, n, i, s);
  }
  transform(t, n, i, s, r, o) {
    this._context.transform(t, n, i, s, r, o);
  }
  translate(t, n) {
    this._context.translate(t, n);
  }
  _enableTrace() {
    let t = this, n = _a.length, i = this.setAttr, s, r;
    const o = function(a) {
      let l = t[a], h;
      t[a] = function() {
        return r = Nd(Array.prototype.slice.call(arguments, 0)), h = l.apply(t, arguments), t._trace({
          method: a,
          args: r
        }), h;
      };
    };
    for (s = 0; s < n; s++)
      o(_a[s]);
    t.setAttr = function() {
      i.apply(t, arguments);
      const a = arguments[0];
      let l = arguments[1];
      (a === "shadowOffsetX" || a === "shadowOffsetY" || a === "shadowBlur") && (l = l / this.canvas.getPixelRatio()), t._trace({
        property: a,
        val: l
      });
    };
  }
  _applyGlobalCompositeOperation(t) {
    const n = t.attrs.globalCompositeOperation;
    !n || n === "source-over" || this.setAttr("globalCompositeOperation", n);
  }
}
Oe.Context = ps;
$d.forEach(function(e) {
  Object.defineProperty(ps.prototype, e, {
    get() {
      return this._context[e];
    },
    set(t) {
      this._context[e] = t;
    }
  });
});
class Wd extends ps {
  constructor(t, { willReadFrequently: n = !1 } = {}) {
    super(t), this._context = t._canvas.getContext("2d", {
      willReadFrequently: n
    });
  }
  _fillColor(t) {
    const n = t.fill();
    this.setAttr("fillStyle", n), t._fillFunc(this);
  }
  _fillPattern(t) {
    this.setAttr("fillStyle", t._getFillPattern()), t._fillFunc(this);
  }
  _fillLinearGradient(t) {
    const n = t._getLinearGradient();
    n && (this.setAttr("fillStyle", n), t._fillFunc(this));
  }
  _fillRadialGradient(t) {
    const n = t._getRadialGradient();
    n && (this.setAttr("fillStyle", n), t._fillFunc(this));
  }
  _fill(t) {
    const n = t.fill(), i = t.getFillPriority();
    if (n && i === "color") {
      this._fillColor(t);
      return;
    }
    const s = t.getFillPatternImage();
    if (s && i === "pattern") {
      this._fillPattern(t);
      return;
    }
    const r = t.getFillLinearGradientColorStops();
    if (r && i === "linear-gradient") {
      this._fillLinearGradient(t);
      return;
    }
    const o = t.getFillRadialGradientColorStops();
    if (o && i === "radial-gradient") {
      this._fillRadialGradient(t);
      return;
    }
    n ? this._fillColor(t) : s ? this._fillPattern(t) : r ? this._fillLinearGradient(t) : o && this._fillRadialGradient(t);
  }
  _strokeLinearGradient(t) {
    const n = t.getStrokeLinearGradientStartPoint(), i = t.getStrokeLinearGradientEndPoint(), s = t.getStrokeLinearGradientColorStops(), r = this.createLinearGradient(n.x, n.y, i.x, i.y);
    if (s) {
      for (let o = 0; o < s.length; o += 2)
        r.addColorStop(s[o], s[o + 1]);
      this.setAttr("strokeStyle", r);
    }
  }
  _stroke(t) {
    const n = t.dash(), i = t.getStrokeScaleEnabled();
    if (t.hasStroke()) {
      if (!i) {
        this.save();
        const r = this.getCanvas().getPixelRatio();
        this.setTransform(r, 0, 0, r, 0, 0);
      }
      this._applyLineCap(t), n && t.dashEnabled() && (this.setLineDash(n), this.setAttr("lineDashOffset", t.dashOffset())), this.setAttr("lineWidth", t.strokeWidth()), t.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)"), t.getStrokeLinearGradientColorStops() ? this._strokeLinearGradient(t) : this.setAttr("strokeStyle", t.stroke()), t._strokeFunc(this), i || this.restore();
    }
  }
  _applyShadow(t) {
    var n, i, s;
    const r = (n = t.getShadowRGBA()) !== null && n !== void 0 ? n : "black", o = (i = t.getShadowBlur()) !== null && i !== void 0 ? i : 5, a = (s = t.getShadowOffset()) !== null && s !== void 0 ? s : {
      x: 0,
      y: 0
    }, l = t.getAbsoluteScale(), h = this.canvas.getPixelRatio(), c = l.x * h, g = l.y * h;
    this.setAttr("shadowColor", r), this.setAttr("shadowBlur", o * Math.min(Math.abs(c), Math.abs(g))), this.setAttr("shadowOffsetX", a.x * c), this.setAttr("shadowOffsetY", a.y * g);
  }
}
Oe.SceneContext = Wd;
class zd extends ps {
  constructor(t) {
    super(t), this._context = t._canvas.getContext("2d", {
      willReadFrequently: !0
    });
  }
  _fill(t) {
    this.save(), this.setAttr("fillStyle", t.colorKey), t._fillFuncHit(this), this.restore();
  }
  strokeShape(t) {
    t.hasHitStroke() && this._stroke(t);
  }
  _stroke(t) {
    if (t.hasHitStroke()) {
      const n = t.getStrokeScaleEnabled();
      if (!n) {
        this.save();
        const r = this.getCanvas().getPixelRatio();
        this.setTransform(r, 0, 0, r, 0, 0);
      }
      this._applyLineCap(t);
      const i = t.hitStrokeWidth(), s = i === "auto" ? t.strokeWidth() : i;
      this.setAttr("lineWidth", s), this.setAttr("strokeStyle", t.colorKey), t._strokeFuncHit(this), n || this.restore();
    }
  }
}
Oe.HitContext = zd;
Object.defineProperty(pe, "__esModule", { value: !0 });
pe.HitCanvas = pe.SceneCanvas = pe.Canvas = void 0;
const Yi = At, Ql = Oe, tc = ot;
let Oi;
function Kd() {
  if (Oi)
    return Oi;
  const e = Yi.Util.createCanvasElement(), t = e.getContext("2d");
  return Oi = function() {
    const n = tc.Konva._global.devicePixelRatio || 1, i = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
    return n / i;
  }(), Yi.Util.releaseCanvas(e), Oi;
}
class bo {
  constructor(t) {
    this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
    const i = (t || {}).pixelRatio || tc.Konva.pixelRatio || Kd();
    this.pixelRatio = i, this._canvas = Yi.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
  }
  getContext() {
    return this.context;
  }
  getPixelRatio() {
    return this.pixelRatio;
  }
  setPixelRatio(t) {
    const n = this.pixelRatio;
    this.pixelRatio = t, this.setSize(this.getWidth() / n, this.getHeight() / n);
  }
  setWidth(t) {
    this.width = this._canvas.width = t * this.pixelRatio, this._canvas.style.width = t + "px";
    const n = this.pixelRatio;
    this.getContext()._context.scale(n, n);
  }
  setHeight(t) {
    this.height = this._canvas.height = t * this.pixelRatio, this._canvas.style.height = t + "px";
    const n = this.pixelRatio;
    this.getContext()._context.scale(n, n);
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setSize(t, n) {
    this.setWidth(t || 0), this.setHeight(n || 0);
  }
  toDataURL(t, n) {
    try {
      return this._canvas.toDataURL(t, n);
    } catch {
      try {
        return this._canvas.toDataURL();
      } catch (s) {
        return Yi.Util.error("Unable to get data URL. " + s.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
      }
    }
  }
}
pe.Canvas = bo;
class Yd extends bo {
  constructor(t = { width: 0, height: 0, willReadFrequently: !1 }) {
    super(t), this.context = new Ql.SceneContext(this, {
      willReadFrequently: t.willReadFrequently
    }), this.setSize(t.width, t.height);
  }
}
pe.SceneCanvas = Yd;
class Xd extends bo {
  constructor(t = { width: 0, height: 0 }) {
    super(t), this.hitCanvas = !0, this.context = new Ql.HitContext(this), this.setSize(t.width, t.height);
  }
}
pe.HitCanvas = Xd;
var _s = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DD = void 0;
  const t = ot, n = At;
  e.DD = {
    get isDragging() {
      let i = !1;
      return e.DD._dragElements.forEach((s) => {
        s.dragStatus === "dragging" && (i = !0);
      }), i;
    },
    justDragged: !1,
    get node() {
      let i;
      return e.DD._dragElements.forEach((s) => {
        i = s.node;
      }), i;
    },
    _dragElements: /* @__PURE__ */ new Map(),
    _drag(i) {
      const s = [];
      e.DD._dragElements.forEach((r, o) => {
        const { node: a } = r, l = a.getStage();
        l.setPointersPositions(i), r.pointerId === void 0 && (r.pointerId = n.Util._getFirstPointerId(i));
        const h = l._changedPointerPositions.find((c) => c.id === r.pointerId);
        if (h) {
          if (r.dragStatus !== "dragging") {
            const c = a.dragDistance();
            if (Math.max(Math.abs(h.x - r.startPointerPos.x), Math.abs(h.y - r.startPointerPos.y)) < c || (a.startDrag({ evt: i }), !a.isDragging()))
              return;
          }
          a._setDragPosition(i, r), s.push(a);
        }
      }), s.forEach((r) => {
        r.fire("dragmove", {
          type: "dragmove",
          target: r,
          evt: i
        }, !0);
      });
    },
    _endDragBefore(i) {
      const s = [];
      e.DD._dragElements.forEach((r) => {
        const { node: o } = r, a = o.getStage();
        if (i && a.setPointersPositions(i), !a._changedPointerPositions.find((c) => c.id === r.pointerId))
          return;
        (r.dragStatus === "dragging" || r.dragStatus === "stopped") && (e.DD.justDragged = !0, t.Konva._mouseListenClick = !1, t.Konva._touchListenClick = !1, t.Konva._pointerListenClick = !1, r.dragStatus = "stopped");
        const h = r.node.getLayer() || r.node instanceof t.Konva.Stage && r.node;
        h && s.indexOf(h) === -1 && s.push(h);
      }), s.forEach((r) => {
        r.draw();
      });
    },
    _endDragAfter(i) {
      e.DD._dragElements.forEach((s, r) => {
        s.dragStatus === "stopped" && s.node.fire("dragend", {
          type: "dragend",
          target: s.node,
          evt: i
        }, !0), s.dragStatus !== "dragging" && e.DD._dragElements.delete(r);
      });
    }
  }, t.Konva.isBrowser && (window.addEventListener("mouseup", e.DD._endDragBefore, !0), window.addEventListener("touchend", e.DD._endDragBefore, !0), window.addEventListener("touchcancel", e.DD._endDragBefore, !0), window.addEventListener("mousemove", e.DD._drag), window.addEventListener("touchmove", e.DD._drag), window.addEventListener("mouseup", e.DD._endDragAfter, !1), window.addEventListener("touchend", e.DD._endDragAfter, !1), window.addEventListener("touchcancel", e.DD._endDragAfter, !1));
})(_s);
var at = {}, Z = {};
Object.defineProperty(Z, "__esModule", { value: !0 });
Z.RGBComponent = qd;
Z.alphaComponent = Zd;
Z.getNumberValidator = Jd;
Z.getNumberOrArrayOfNumbersValidator = Qd;
Z.getNumberOrAutoValidator = t1;
Z.getStringValidator = e1;
Z.getStringOrGradientValidator = n1;
Z.getFunctionValidator = i1;
Z.getNumberArrayValidator = s1;
Z.getBooleanValidator = r1;
Z.getComponentValidator = o1;
const Fe = ot, Rt = At;
function Ne(e) {
  return Rt.Util._isString(e) ? '"' + e + '"' : Object.prototype.toString.call(e) === "[object Number]" || Rt.Util._isBoolean(e) ? e : Object.prototype.toString.call(e);
}
function qd(e) {
  return e > 255 ? 255 : e < 0 ? 0 : Math.round(e);
}
function Zd(e) {
  return e > 1 ? 1 : e < 1e-4 ? 1e-4 : e;
}
function Jd() {
  if (Fe.Konva.isUnminified)
    return function(e, t) {
      return Rt.Util._isNumber(e) || Rt.Util.warn(Ne(e) + ' is a not valid value for "' + t + '" attribute. The value should be a number.'), e;
    };
}
function Qd(e) {
  if (Fe.Konva.isUnminified)
    return function(t, n) {
      let i = Rt.Util._isNumber(t), s = Rt.Util._isArray(t) && t.length == e;
      return !i && !s && Rt.Util.warn(Ne(t) + ' is a not valid value for "' + n + '" attribute. The value should be a number or Array<number>(' + e + ")"), t;
    };
}
function t1() {
  if (Fe.Konva.isUnminified)
    return function(e, t) {
      return Rt.Util._isNumber(e) || e === "auto" || Rt.Util.warn(Ne(e) + ' is a not valid value for "' + t + '" attribute. The value should be a number or "auto".'), e;
    };
}
function e1() {
  if (Fe.Konva.isUnminified)
    return function(e, t) {
      return Rt.Util._isString(e) || Rt.Util.warn(Ne(e) + ' is a not valid value for "' + t + '" attribute. The value should be a string.'), e;
    };
}
function n1() {
  if (Fe.Konva.isUnminified)
    return function(e, t) {
      const n = Rt.Util._isString(e), i = Object.prototype.toString.call(e) === "[object CanvasGradient]" || e && e.addColorStop;
      return n || i || Rt.Util.warn(Ne(e) + ' is a not valid value for "' + t + '" attribute. The value should be a string or a native gradient.'), e;
    };
}
function i1() {
  if (Fe.Konva.isUnminified)
    return function(e, t) {
      return Rt.Util._isFunction(e) || Rt.Util.warn(Ne(e) + ' is a not valid value for "' + t + '" attribute. The value should be a function.'), e;
    };
}
function s1() {
  if (Fe.Konva.isUnminified)
    return function(e, t) {
      const n = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
      return n && e instanceof n || (Rt.Util._isArray(e) ? e.forEach(function(i) {
        Rt.Util._isNumber(i) || Rt.Util.warn('"' + t + '" attribute has non numeric element ' + i + ". Make sure that all elements are numbers.");
      }) : Rt.Util.warn(Ne(e) + ' is a not valid value for "' + t + '" attribute. The value should be a array of numbers.')), e;
    };
}
function r1() {
  if (Fe.Konva.isUnminified)
    return function(e, t) {
      return e === !0 || e === !1 || Rt.Util.warn(Ne(e) + ' is a not valid value for "' + t + '" attribute. The value should be a boolean.'), e;
    };
}
function o1(e) {
  if (Fe.Konva.isUnminified)
    return function(t, n) {
      return t == null || Rt.Util.isObject(t) || Rt.Util.warn(Ne(t) + ' is a not valid value for "' + n + '" attribute. The value should be an object with properties ' + e), t;
    };
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Factory = void 0;
  const t = At, n = Z, i = "get", s = "set";
  e.Factory = {
    addGetterSetter(r, o, a, l, h) {
      e.Factory.addGetter(r, o, a), e.Factory.addSetter(r, o, l, h), e.Factory.addOverloadedGetterSetter(r, o);
    },
    addGetter(r, o, a) {
      const l = i + t.Util._capitalize(o);
      r.prototype[l] = r.prototype[l] || function() {
        const h = this.attrs[o];
        return h === void 0 ? a : h;
      };
    },
    addSetter(r, o, a, l) {
      const h = s + t.Util._capitalize(o);
      r.prototype[h] || e.Factory.overWriteSetter(r, o, a, l);
    },
    overWriteSetter(r, o, a, l) {
      const h = s + t.Util._capitalize(o);
      r.prototype[h] = function(c) {
        return a && c !== void 0 && c !== null && (c = a.call(this, c, o)), this._setAttr(o, c), l && l.call(this), this;
      };
    },
    addComponentsGetterSetter(r, o, a, l, h) {
      const c = a.length, g = t.Util._capitalize, f = i + g(o), _ = s + g(o);
      r.prototype[f] = function() {
        const m = {};
        for (let y = 0; y < c; y++) {
          const C = a[y];
          m[C] = this.getAttr(o + g(C));
        }
        return m;
      };
      const u = (0, n.getComponentValidator)(a);
      r.prototype[_] = function(m) {
        const y = this.attrs[o];
        l && (m = l.call(this, m, o)), u && u.call(this, m, o);
        for (const C in m)
          m.hasOwnProperty(C) && this._setAttr(o + g(C), m[C]);
        return m || a.forEach((C) => {
          this._setAttr(o + g(C), void 0);
        }), this._fireChangeEvent(o, y, m), h && h.call(this), this;
      }, e.Factory.addOverloadedGetterSetter(r, o);
    },
    addOverloadedGetterSetter(r, o) {
      const a = t.Util._capitalize(o), l = s + a, h = i + a;
      r.prototype[o] = function() {
        return arguments.length ? (this[l](arguments[0]), this) : this[h]();
      };
    },
    addDeprecatedGetterSetter(r, o, a, l) {
      t.Util.error("Adding deprecated " + o);
      const h = i + t.Util._capitalize(o), c = o + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
      r.prototype[h] = function() {
        t.Util.error(c);
        const g = this.attrs[o];
        return g === void 0 ? a : g;
      }, e.Factory.addSetter(r, o, l, function() {
        t.Util.error(c);
      }), e.Factory.addOverloadedGetterSetter(r, o);
    },
    backCompat(r, o) {
      t.Util.each(o, function(a, l) {
        const h = r.prototype[l], c = i + t.Util._capitalize(a), g = s + t.Util._capitalize(a);
        function f() {
          h.apply(this, arguments), t.Util.error('"' + a + '" method is deprecated and will be removed soon. Use ""' + l + '" instead.');
        }
        r.prototype[a] = f, r.prototype[c] = f, r.prototype[g] = f;
      });
    },
    afterSetFilter() {
      this._filterUpToDate = !1;
    }
  };
})(at);
Object.defineProperty(Tt, "__esModule", { value: !0 });
Tt.Node = void 0;
const wn = pe, oe = _s, Si = at, Ve = ot, lt = At, Ot = Z, Ui = "absoluteOpacity", Li = "allEventListeners", Te = "absoluteTransform", ma = "absoluteScale", nn = "canvas", a1 = "Change", l1 = "children", c1 = "konva", Ur = "listening", h1 = "mouseenter", d1 = "mouseleave", u1 = "pointerenter", f1 = "pointerleave", g1 = "touchenter", p1 = "touchleave", ya = "set", ba = "Shape", Bi = " ", va = "stage", Ue = "transform", _1 = "Stage", Br = "visible", m1 = [
  "xChange.konva",
  "yChange.konva",
  "scaleXChange.konva",
  "scaleYChange.konva",
  "skewXChange.konva",
  "skewYChange.konva",
  "rotationChange.konva",
  "offsetXChange.konva",
  "offsetYChange.konva",
  "transformsEnabledChange.konva"
].join(Bi);
let y1 = 1;
class Q {
  constructor(t) {
    this._id = y1++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(t), this._shouldFireChangeEvents = !0;
  }
  hasChildren() {
    return !1;
  }
  _clearCache(t) {
    (t === Ue || t === Te) && this._cache.get(t) ? this._cache.get(t).dirty = !0 : t ? this._cache.delete(t) : this._cache.clear();
  }
  _getCache(t, n) {
    let i = this._cache.get(t);
    return (i === void 0 || (t === Ue || t === Te) && i.dirty === !0) && (i = n.call(this), this._cache.set(t, i)), i;
  }
  _calculate(t, n, i) {
    if (!this._attachedDepsListeners.get(t)) {
      const s = n.map((r) => r + "Change.konva").join(Bi);
      this.on(s, () => {
        this._clearCache(t);
      }), this._attachedDepsListeners.set(t, !0);
    }
    return this._getCache(t, i);
  }
  _getCanvasCache() {
    return this._cache.get(nn);
  }
  _clearSelfAndDescendantCache(t) {
    this._clearCache(t), t === Te && this.fire("absoluteTransformChange");
  }
  clearCache() {
    if (this._cache.has(nn)) {
      const { scene: t, filter: n, hit: i, buffer: s } = this._cache.get(nn);
      lt.Util.releaseCanvas(t, n, i, s), this._cache.delete(nn);
    }
    return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
  }
  cache(t) {
    const n = t || {};
    let i = {};
    (n.x === void 0 || n.y === void 0 || n.width === void 0 || n.height === void 0) && (i = this.getClientRect({
      skipTransform: !0,
      relativeTo: this.getParent() || void 0
    }));
    let s = Math.ceil(n.width || i.width), r = Math.ceil(n.height || i.height), o = n.pixelRatio, a = n.x === void 0 ? Math.floor(i.x) : n.x, l = n.y === void 0 ? Math.floor(i.y) : n.y, h = n.offset || 0, c = n.drawBorder || !1, g = n.hitCanvasPixelRatio || 1;
    if (!s || !r) {
      lt.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
      return;
    }
    const f = Math.abs(Math.round(i.x) - a) > 0.5 ? 1 : 0, _ = Math.abs(Math.round(i.y) - l) > 0.5 ? 1 : 0;
    s += h * 2 + f, r += h * 2 + _, a -= h, l -= h;
    const u = new wn.SceneCanvas({
      pixelRatio: o,
      width: s,
      height: r
    }), m = new wn.SceneCanvas({
      pixelRatio: o,
      width: 0,
      height: 0,
      willReadFrequently: !0
    }), y = new wn.HitCanvas({
      pixelRatio: g,
      width: s,
      height: r
    }), C = u.getContext(), x = y.getContext(), d = new wn.SceneCanvas({
      width: u.width / u.pixelRatio + Math.abs(a),
      height: u.height / u.pixelRatio + Math.abs(l),
      pixelRatio: u.pixelRatio
    }), p = d.getContext();
    return y.isCache = !0, u.isCache = !0, this._cache.delete(nn), this._filterUpToDate = !1, n.imageSmoothingEnabled === !1 && (u.getContext()._context.imageSmoothingEnabled = !1, m.getContext()._context.imageSmoothingEnabled = !1), C.save(), x.save(), p.save(), C.translate(-a, -l), x.translate(-a, -l), p.translate(-a, -l), d.x = a, d.y = l, this._isUnderCache = !0, this._clearSelfAndDescendantCache(Ui), this._clearSelfAndDescendantCache(ma), this.drawScene(u, this, d), this.drawHit(y, this), this._isUnderCache = !1, C.restore(), x.restore(), c && (C.save(), C.beginPath(), C.rect(0, 0, s, r), C.closePath(), C.setAttr("strokeStyle", "red"), C.setAttr("lineWidth", 5), C.stroke(), C.restore()), this._cache.set(nn, {
      scene: u,
      filter: m,
      hit: y,
      buffer: d,
      x: a,
      y: l
    }), this._requestDraw(), this;
  }
  isCached() {
    return this._cache.has(nn);
  }
  getClientRect(t) {
    throw new Error('abstract "getClientRect" method call');
  }
  _transformedRect(t, n) {
    const i = [
      { x: t.x, y: t.y },
      { x: t.x + t.width, y: t.y },
      { x: t.x + t.width, y: t.y + t.height },
      { x: t.x, y: t.y + t.height }
    ];
    let s = 1 / 0, r = 1 / 0, o = -1 / 0, a = -1 / 0;
    const l = this.getAbsoluteTransform(n);
    return i.forEach(function(h) {
      const c = l.point(h);
      s === void 0 && (s = o = c.x, r = a = c.y), s = Math.min(s, c.x), r = Math.min(r, c.y), o = Math.max(o, c.x), a = Math.max(a, c.y);
    }), {
      x: s,
      y: r,
      width: o - s,
      height: a - r
    };
  }
  _drawCachedSceneCanvas(t) {
    t.save(), t._applyOpacity(this), t._applyGlobalCompositeOperation(this);
    const n = this._getCanvasCache();
    t.translate(n.x, n.y);
    const i = this._getCachedSceneCanvas(), s = i.pixelRatio;
    t.drawImage(i._canvas, 0, 0, i.width / s, i.height / s), t.restore();
  }
  _drawCachedHitCanvas(t) {
    const n = this._getCanvasCache(), i = n.hit;
    t.save(), t.translate(n.x, n.y), t.drawImage(i._canvas, 0, 0, i.width / i.pixelRatio, i.height / i.pixelRatio), t.restore();
  }
  _getCachedSceneCanvas() {
    let t = this.filters(), n = this._getCanvasCache(), i = n.scene, s = n.filter, r = s.getContext(), o, a, l, h;
    if (t) {
      if (!this._filterUpToDate) {
        const c = i.pixelRatio;
        s.setSize(i.width / i.pixelRatio, i.height / i.pixelRatio);
        try {
          for (o = t.length, r.clear(), r.drawImage(i._canvas, 0, 0, i.getWidth() / c, i.getHeight() / c), a = r.getImageData(0, 0, s.getWidth(), s.getHeight()), l = 0; l < o; l++) {
            if (h = t[l], typeof h != "function") {
              lt.Util.error("Filter should be type of function, but got " + typeof h + " instead. Please check correct filters");
              continue;
            }
            h.call(this, a), r.putImageData(a, 0, 0);
          }
        } catch (g) {
          lt.Util.error("Unable to apply filter. " + g.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
        }
        this._filterUpToDate = !0;
      }
      return s;
    }
    return i;
  }
  on(t, n) {
    if (this._cache && this._cache.delete(Li), arguments.length === 3)
      return this._delegate.apply(this, arguments);
    const i = t.split(Bi);
    for (let s = 0; s < i.length; s++) {
      const o = i[s].split("."), a = o[0], l = o[1] || "";
      this.eventListeners[a] || (this.eventListeners[a] = []), this.eventListeners[a].push({ name: l, handler: n });
    }
    return this;
  }
  off(t, n) {
    let i = (t || "").split(Bi), s = i.length, r, o, a, l, h, c;
    if (this._cache && this._cache.delete(Li), !t)
      for (o in this.eventListeners)
        this._off(o);
    for (r = 0; r < s; r++)
      if (a = i[r], l = a.split("."), h = l[0], c = l[1], h)
        this.eventListeners[h] && this._off(h, c, n);
      else
        for (o in this.eventListeners)
          this._off(o, c, n);
    return this;
  }
  dispatchEvent(t) {
    const n = {
      target: this,
      type: t.type,
      evt: t
    };
    return this.fire(t.type, n), this;
  }
  addEventListener(t, n) {
    return this.on(t, function(i) {
      n.call(this, i.evt);
    }), this;
  }
  removeEventListener(t) {
    return this.off(t), this;
  }
  _delegate(t, n, i) {
    const s = this;
    this.on(t, function(r) {
      const o = r.target.findAncestors(n, !0, s);
      for (let a = 0; a < o.length; a++)
        r = lt.Util.cloneObject(r), r.currentTarget = o[a], i.call(o[a], r);
    });
  }
  remove() {
    return this.isDragging() && this.stopDrag(), oe.DD._dragElements.delete(this._id), this._remove(), this;
  }
  _clearCaches() {
    this._clearSelfAndDescendantCache(Te), this._clearSelfAndDescendantCache(Ui), this._clearSelfAndDescendantCache(ma), this._clearSelfAndDescendantCache(va), this._clearSelfAndDescendantCache(Br), this._clearSelfAndDescendantCache(Ur);
  }
  _remove() {
    this._clearCaches();
    const t = this.getParent();
    t && t.children && (t.children.splice(this.index, 1), t._setChildrenIndices(), this.parent = null);
  }
  destroy() {
    return this.remove(), this.clearCache(), this;
  }
  getAttr(t) {
    const n = "get" + lt.Util._capitalize(t);
    return lt.Util._isFunction(this[n]) ? this[n]() : this.attrs[t];
  }
  getAncestors() {
    let t = this.getParent(), n = [];
    for (; t; )
      n.push(t), t = t.getParent();
    return n;
  }
  getAttrs() {
    return this.attrs || {};
  }
  setAttrs(t) {
    return this._batchTransformChanges(() => {
      let n, i;
      if (!t)
        return this;
      for (n in t)
        n !== l1 && (i = ya + lt.Util._capitalize(n), lt.Util._isFunction(this[i]) ? this[i](t[n]) : this._setAttr(n, t[n]));
    }), this;
  }
  isListening() {
    return this._getCache(Ur, this._isListening);
  }
  _isListening(t) {
    if (!this.listening())
      return !1;
    const i = this.getParent();
    return i && i !== t && this !== t ? i._isListening(t) : !0;
  }
  isVisible() {
    return this._getCache(Br, this._isVisible);
  }
  _isVisible(t) {
    if (!this.visible())
      return !1;
    const i = this.getParent();
    return i && i !== t && this !== t ? i._isVisible(t) : !0;
  }
  shouldDrawHit(t, n = !1) {
    if (t)
      return this._isVisible(t) && this._isListening(t);
    const i = this.getLayer();
    let s = !1;
    oe.DD._dragElements.forEach((o) => {
      o.dragStatus === "dragging" && (o.node.nodeType === "Stage" || o.node.getLayer() === i) && (s = !0);
    });
    const r = !n && !Ve.Konva.hitOnDragEnabled && (s || Ve.Konva.isTransforming());
    return this.isListening() && this.isVisible() && !r;
  }
  show() {
    return this.visible(!0), this;
  }
  hide() {
    return this.visible(!1), this;
  }
  getZIndex() {
    return this.index || 0;
  }
  getAbsoluteZIndex() {
    let t = this.getDepth(), n = this, i = 0, s, r, o, a;
    function l(c) {
      for (s = [], r = c.length, o = 0; o < r; o++)
        a = c[o], i++, a.nodeType !== ba && (s = s.concat(a.getChildren().slice())), a._id === n._id && (o = r);
      s.length > 0 && s[0].getDepth() <= t && l(s);
    }
    const h = this.getStage();
    return n.nodeType !== _1 && h && l(h.getChildren()), i;
  }
  getDepth() {
    let t = 0, n = this.parent;
    for (; n; )
      t++, n = n.parent;
    return t;
  }
  _batchTransformChanges(t) {
    this._batchingTransformChange = !0, t(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(Ue), this._clearSelfAndDescendantCache(Te)), this._needClearTransformCache = !1;
  }
  setPosition(t) {
    return this._batchTransformChanges(() => {
      this.x(t.x), this.y(t.y);
    }), this;
  }
  getPosition() {
    return {
      x: this.x(),
      y: this.y()
    };
  }
  getRelativePointerPosition() {
    const t = this.getStage();
    if (!t)
      return null;
    const n = t.getPointerPosition();
    if (!n)
      return null;
    const i = this.getAbsoluteTransform().copy();
    return i.invert(), i.point(n);
  }
  getAbsolutePosition(t) {
    let n = !1, i = this.parent;
    for (; i; ) {
      if (i.isCached()) {
        n = !0;
        break;
      }
      i = i.parent;
    }
    n && !t && (t = !0);
    const s = this.getAbsoluteTransform(t).getMatrix(), r = new lt.Transform(), o = this.offset();
    return r.m = s.slice(), r.translate(o.x, o.y), r.getTranslation();
  }
  setAbsolutePosition(t) {
    const { x: n, y: i, ...s } = this._clearTransform();
    this.attrs.x = n, this.attrs.y = i, this._clearCache(Ue);
    const r = this._getAbsoluteTransform().copy();
    return r.invert(), r.translate(t.x, t.y), t = {
      x: this.attrs.x + r.getTranslation().x,
      y: this.attrs.y + r.getTranslation().y
    }, this._setTransform(s), this.setPosition({ x: t.x, y: t.y }), this._clearCache(Ue), this._clearSelfAndDescendantCache(Te), this;
  }
  _setTransform(t) {
    let n;
    for (n in t)
      this.attrs[n] = t[n];
  }
  _clearTransform() {
    const t = {
      x: this.x(),
      y: this.y(),
      rotation: this.rotation(),
      scaleX: this.scaleX(),
      scaleY: this.scaleY(),
      offsetX: this.offsetX(),
      offsetY: this.offsetY(),
      skewX: this.skewX(),
      skewY: this.skewY()
    };
    return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, t;
  }
  move(t) {
    let n = t.x, i = t.y, s = this.x(), r = this.y();
    return n !== void 0 && (s += n), i !== void 0 && (r += i), this.setPosition({ x: s, y: r }), this;
  }
  _eachAncestorReverse(t, n) {
    let i = [], s = this.getParent(), r, o;
    if (!(n && n._id === this._id)) {
      for (i.unshift(this); s && (!n || s._id !== n._id); )
        i.unshift(s), s = s.parent;
      for (r = i.length, o = 0; o < r; o++)
        t(i[o]);
    }
  }
  rotate(t) {
    return this.rotation(this.rotation() + t), this;
  }
  moveToTop() {
    if (!this.parent)
      return lt.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
    const t = this.index, n = this.parent.getChildren().length;
    return t < n - 1 ? (this.parent.children.splice(t, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveUp() {
    if (!this.parent)
      return lt.Util.warn("Node has no parent. moveUp function is ignored."), !1;
    const t = this.index, n = this.parent.getChildren().length;
    return t < n - 1 ? (this.parent.children.splice(t, 1), this.parent.children.splice(t + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveDown() {
    if (!this.parent)
      return lt.Util.warn("Node has no parent. moveDown function is ignored."), !1;
    const t = this.index;
    return t > 0 ? (this.parent.children.splice(t, 1), this.parent.children.splice(t - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveToBottom() {
    if (!this.parent)
      return lt.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
    const t = this.index;
    return t > 0 ? (this.parent.children.splice(t, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  setZIndex(t) {
    if (!this.parent)
      return lt.Util.warn("Node has no parent. zIndex parameter is ignored."), this;
    (t < 0 || t >= this.parent.children.length) && lt.Util.warn("Unexpected value " + t + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
    const n = this.index;
    return this.parent.children.splice(n, 1), this.parent.children.splice(t, 0, this), this.parent._setChildrenIndices(), this;
  }
  getAbsoluteOpacity() {
    return this._getCache(Ui, this._getAbsoluteOpacity);
  }
  _getAbsoluteOpacity() {
    let t = this.opacity();
    const n = this.getParent();
    return n && !n._isUnderCache && (t *= n.getAbsoluteOpacity()), t;
  }
  moveTo(t) {
    return this.getParent() !== t && (this._remove(), t.add(this)), this;
  }
  toObject() {
    let t = this.getAttrs(), n, i, s, r, o;
    const a = {
      attrs: {},
      className: this.getClassName()
    };
    for (n in t)
      i = t[n], o = lt.Util.isObject(i) && !lt.Util._isPlainObject(i) && !lt.Util._isArray(i), !o && (s = typeof this[n] == "function" && this[n], delete t[n], r = s ? s.call(this) : null, t[n] = i, r !== i && (a.attrs[n] = i));
    return lt.Util._prepareToStringify(a);
  }
  toJSON() {
    return JSON.stringify(this.toObject());
  }
  getParent() {
    return this.parent;
  }
  findAncestors(t, n, i) {
    const s = [];
    n && this._isMatch(t) && s.push(this);
    let r = this.parent;
    for (; r; ) {
      if (r === i)
        return s;
      r._isMatch(t) && s.push(r), r = r.parent;
    }
    return s;
  }
  isAncestorOf(t) {
    return !1;
  }
  findAncestor(t, n, i) {
    return this.findAncestors(t, n, i)[0];
  }
  _isMatch(t) {
    if (!t)
      return !1;
    if (typeof t == "function")
      return t(this);
    let n = t.replace(/ /g, "").split(","), i = n.length, s, r;
    for (s = 0; s < i; s++)
      if (r = n[s], lt.Util.isValidSelector(r) || (lt.Util.warn('Selector "' + r + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), lt.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), lt.Util.warn("Konva is awesome, right?")), r.charAt(0) === "#") {
        if (this.id() === r.slice(1))
          return !0;
      } else if (r.charAt(0) === ".") {
        if (this.hasName(r.slice(1)))
          return !0;
      } else if (this.className === r || this.nodeType === r)
        return !0;
    return !1;
  }
  getLayer() {
    const t = this.getParent();
    return t ? t.getLayer() : null;
  }
  getStage() {
    return this._getCache(va, this._getStage);
  }
  _getStage() {
    const t = this.getParent();
    return t ? t.getStage() : null;
  }
  fire(t, n = {}, i) {
    return n.target = n.target || this, i ? this._fireAndBubble(t, n) : this._fire(t, n), this;
  }
  getAbsoluteTransform(t) {
    return t ? this._getAbsoluteTransform(t) : this._getCache(Te, this._getAbsoluteTransform);
  }
  _getAbsoluteTransform(t) {
    let n;
    if (t)
      return n = new lt.Transform(), this._eachAncestorReverse(function(i) {
        const s = i.transformsEnabled();
        s === "all" ? n.multiply(i.getTransform()) : s === "position" && n.translate(i.x() - i.offsetX(), i.y() - i.offsetY());
      }, t), n;
    {
      n = this._cache.get(Te) || new lt.Transform(), this.parent ? this.parent.getAbsoluteTransform().copyInto(n) : n.reset();
      const i = this.transformsEnabled();
      if (i === "all")
        n.multiply(this.getTransform());
      else if (i === "position") {
        const s = this.attrs.x || 0, r = this.attrs.y || 0, o = this.attrs.offsetX || 0, a = this.attrs.offsetY || 0;
        n.translate(s - o, r - a);
      }
      return n.dirty = !1, n;
    }
  }
  getAbsoluteScale(t) {
    let n = this;
    for (; n; )
      n._isUnderCache && (t = n), n = n.getParent();
    const s = this.getAbsoluteTransform(t).decompose();
    return {
      x: s.scaleX,
      y: s.scaleY
    };
  }
  getAbsoluteRotation() {
    return this.getAbsoluteTransform().decompose().rotation;
  }
  getTransform() {
    return this._getCache(Ue, this._getTransform);
  }
  _getTransform() {
    var t, n;
    const i = this._cache.get(Ue) || new lt.Transform();
    i.reset();
    const s = this.x(), r = this.y(), o = Ve.Konva.getAngle(this.rotation()), a = (t = this.attrs.scaleX) !== null && t !== void 0 ? t : 1, l = (n = this.attrs.scaleY) !== null && n !== void 0 ? n : 1, h = this.attrs.skewX || 0, c = this.attrs.skewY || 0, g = this.attrs.offsetX || 0, f = this.attrs.offsetY || 0;
    return (s !== 0 || r !== 0) && i.translate(s, r), o !== 0 && i.rotate(o), (h !== 0 || c !== 0) && i.skew(h, c), (a !== 1 || l !== 1) && i.scale(a, l), (g !== 0 || f !== 0) && i.translate(-1 * g, -1 * f), i.dirty = !1, i;
  }
  clone(t) {
    let n = lt.Util.cloneObject(this.attrs), i, s, r, o, a;
    for (i in t)
      n[i] = t[i];
    const l = new this.constructor(n);
    for (i in this.eventListeners)
      for (s = this.eventListeners[i], r = s.length, o = 0; o < r; o++)
        a = s[o], a.name.indexOf(c1) < 0 && (l.eventListeners[i] || (l.eventListeners[i] = []), l.eventListeners[i].push(a));
    return l;
  }
  _toKonvaCanvas(t) {
    t = t || {};
    const n = this.getClientRect(), i = this.getStage(), s = t.x !== void 0 ? t.x : Math.floor(n.x), r = t.y !== void 0 ? t.y : Math.floor(n.y), o = t.pixelRatio || 1, a = new wn.SceneCanvas({
      width: t.width || Math.ceil(n.width) || (i ? i.width() : 0),
      height: t.height || Math.ceil(n.height) || (i ? i.height() : 0),
      pixelRatio: o
    }), l = a.getContext(), h = new wn.SceneCanvas({
      width: a.width / a.pixelRatio + Math.abs(s),
      height: a.height / a.pixelRatio + Math.abs(r),
      pixelRatio: a.pixelRatio
    });
    return t.imageSmoothingEnabled === !1 && (l._context.imageSmoothingEnabled = !1), l.save(), (s || r) && l.translate(-1 * s, -1 * r), this.drawScene(a, void 0, h), l.restore(), a;
  }
  toCanvas(t) {
    return this._toKonvaCanvas(t)._canvas;
  }
  toDataURL(t) {
    t = t || {};
    const n = t.mimeType || null, i = t.quality || null, s = this._toKonvaCanvas(t).toDataURL(n, i);
    return t.callback && t.callback(s), s;
  }
  toImage(t) {
    return new Promise((n, i) => {
      try {
        const s = t == null ? void 0 : t.callback;
        s && delete t.callback, lt.Util._urlToImage(this.toDataURL(t), function(r) {
          n(r), s == null || s(r);
        });
      } catch (s) {
        i(s);
      }
    });
  }
  toBlob(t) {
    return new Promise((n, i) => {
      try {
        const s = t == null ? void 0 : t.callback;
        s && delete t.callback, this.toCanvas(t).toBlob((r) => {
          n(r), s == null || s(r);
        }, t == null ? void 0 : t.mimeType, t == null ? void 0 : t.quality);
      } catch (s) {
        i(s);
      }
    });
  }
  setSize(t) {
    return this.width(t.width), this.height(t.height), this;
  }
  getSize() {
    return {
      width: this.width(),
      height: this.height()
    };
  }
  getClassName() {
    return this.className || this.nodeType;
  }
  getType() {
    return this.nodeType;
  }
  getDragDistance() {
    return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : Ve.Konva.dragDistance;
  }
  _off(t, n, i) {
    let s = this.eventListeners[t], r, o, a;
    for (r = 0; r < s.length; r++)
      if (o = s[r].name, a = s[r].handler, (o !== "konva" || n === "konva") && (!n || o === n) && (!i || i === a)) {
        if (s.splice(r, 1), s.length === 0) {
          delete this.eventListeners[t];
          break;
        }
        r--;
      }
  }
  _fireChangeEvent(t, n, i) {
    this._fire(t + a1, {
      oldVal: n,
      newVal: i
    });
  }
  addName(t) {
    if (!this.hasName(t)) {
      const n = this.name(), i = n ? n + " " + t : t;
      this.name(i);
    }
    return this;
  }
  hasName(t) {
    if (!t)
      return !1;
    const n = this.name();
    return n ? (n || "").split(/\s/g).indexOf(t) !== -1 : !1;
  }
  removeName(t) {
    const n = (this.name() || "").split(/\s/g), i = n.indexOf(t);
    return i !== -1 && (n.splice(i, 1), this.name(n.join(" "))), this;
  }
  setAttr(t, n) {
    const i = this[ya + lt.Util._capitalize(t)];
    return lt.Util._isFunction(i) ? i.call(this, n) : this._setAttr(t, n), this;
  }
  _requestDraw() {
    if (Ve.Konva.autoDrawEnabled) {
      const t = this.getLayer() || this.getStage();
      t == null || t.batchDraw();
    }
  }
  _setAttr(t, n) {
    const i = this.attrs[t];
    i === n && !lt.Util.isObject(n) || (n == null ? delete this.attrs[t] : this.attrs[t] = n, this._shouldFireChangeEvents && this._fireChangeEvent(t, i, n), this._requestDraw());
  }
  _setComponentAttr(t, n, i) {
    let s;
    i !== void 0 && (s = this.attrs[t], s || (this.attrs[t] = this.getAttr(t)), this.attrs[t][n] = i, this._fireChangeEvent(t, s, i));
  }
  _fireAndBubble(t, n, i) {
    n && this.nodeType === ba && (n.target = this);
    const s = [
      h1,
      d1,
      u1,
      f1,
      g1,
      p1
    ];
    if (!(s.indexOf(t) !== -1 && (i && (this === i || this.isAncestorOf && this.isAncestorOf(i)) || this.nodeType === "Stage" && !i))) {
      this._fire(t, n);
      const o = s.indexOf(t) !== -1 && i && i.isAncestorOf && i.isAncestorOf(this) && !i.isAncestorOf(this.parent);
      (n && !n.cancelBubble || !n) && this.parent && this.parent.isListening() && !o && (i && i.parent ? this._fireAndBubble.call(this.parent, t, n, i) : this._fireAndBubble.call(this.parent, t, n));
    }
  }
  _getProtoListeners(t) {
    var n, i, s;
    const r = (n = this._cache.get(Li)) !== null && n !== void 0 ? n : {};
    let o = r == null ? void 0 : r[t];
    if (o === void 0) {
      o = [];
      let a = Object.getPrototypeOf(this);
      for (; a; ) {
        const l = (s = (i = a.eventListeners) === null || i === void 0 ? void 0 : i[t]) !== null && s !== void 0 ? s : [];
        o.push(...l), a = Object.getPrototypeOf(a);
      }
      r[t] = o, this._cache.set(Li, r);
    }
    return o;
  }
  _fire(t, n) {
    n = n || {}, n.currentTarget = this, n.type = t;
    const i = this._getProtoListeners(t);
    if (i)
      for (let r = 0; r < i.length; r++)
        i[r].handler.call(this, n);
    const s = this.eventListeners[t];
    if (s)
      for (let r = 0; r < s.length; r++)
        s[r].handler.call(this, n);
  }
  draw() {
    return this.drawScene(), this.drawHit(), this;
  }
  _createDragElement(t) {
    const n = t ? t.pointerId : void 0, i = this.getStage(), s = this.getAbsolutePosition();
    if (!i)
      return;
    const r = i._getPointerById(n) || i._changedPointerPositions[0] || s;
    oe.DD._dragElements.set(this._id, {
      node: this,
      startPointerPos: r,
      offset: {
        x: r.x - s.x,
        y: r.y - s.y
      },
      dragStatus: "ready",
      pointerId: n
    });
  }
  startDrag(t, n = !0) {
    oe.DD._dragElements.has(this._id) || this._createDragElement(t);
    const i = oe.DD._dragElements.get(this._id);
    i.dragStatus = "dragging", this.fire("dragstart", {
      type: "dragstart",
      target: this,
      evt: t && t.evt
    }, n);
  }
  _setDragPosition(t, n) {
    const i = this.getStage()._getPointerById(n.pointerId);
    if (!i)
      return;
    let s = {
      x: i.x - n.offset.x,
      y: i.y - n.offset.y
    };
    const r = this.dragBoundFunc();
    if (r !== void 0) {
      const o = r.call(this, s, t);
      o ? s = o : lt.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
    }
    (!this._lastPos || this._lastPos.x !== s.x || this._lastPos.y !== s.y) && (this.setAbsolutePosition(s), this._requestDraw()), this._lastPos = s;
  }
  stopDrag(t) {
    const n = oe.DD._dragElements.get(this._id);
    n && (n.dragStatus = "stopped"), oe.DD._endDragBefore(t), oe.DD._endDragAfter(t);
  }
  setDraggable(t) {
    this._setAttr("draggable", t), this._dragChange();
  }
  isDragging() {
    const t = oe.DD._dragElements.get(this._id);
    return t ? t.dragStatus === "dragging" : !1;
  }
  _listenDrag() {
    this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(t) {
      if (!(!(t.evt.button !== void 0) || Ve.Konva.dragButtons.indexOf(t.evt.button) >= 0) || this.isDragging())
        return;
      let s = !1;
      oe.DD._dragElements.forEach((r) => {
        this.isAncestorOf(r.node) && (s = !0);
      }), s || this._createDragElement(t);
    });
  }
  _dragChange() {
    if (this.attrs.draggable)
      this._listenDrag();
    else {
      if (this._dragCleanup(), !this.getStage())
        return;
      const n = oe.DD._dragElements.get(this._id), i = n && n.dragStatus === "dragging", s = n && n.dragStatus === "ready";
      i ? this.stopDrag() : s && oe.DD._dragElements.delete(this._id);
    }
  }
  _dragCleanup() {
    this.off("mousedown.konva"), this.off("touchstart.konva");
  }
  isClientRectOnScreen(t = { x: 0, y: 0 }) {
    const n = this.getStage();
    if (!n)
      return !1;
    const i = {
      x: -t.x,
      y: -t.y,
      width: n.width() + 2 * t.x,
      height: n.height() + 2 * t.y
    };
    return lt.Util.haveIntersection(i, this.getClientRect());
  }
  static create(t, n) {
    return lt.Util._isString(t) && (t = JSON.parse(t)), this._createNode(t, n);
  }
  static _createNode(t, n) {
    let i = Q.prototype.getClassName.call(t), s = t.children, r, o, a;
    n && (t.attrs.container = n), Ve.Konva[i] || (lt.Util.warn('Can not find a node with class name "' + i + '". Fallback to "Shape".'), i = "Shape");
    const l = Ve.Konva[i];
    if (r = new l(t.attrs), s)
      for (o = s.length, a = 0; a < o; a++)
        r.add(Q._createNode(s[a]));
    return r;
  }
}
Tt.Node = Q;
Q.prototype.nodeType = "Node";
Q.prototype._attrsAffectingSize = [];
Q.prototype.eventListeners = {};
Q.prototype.on.call(Q.prototype, m1, function() {
  if (this._batchingTransformChange) {
    this._needClearTransformCache = !0;
    return;
  }
  this._clearCache(Ue), this._clearSelfAndDescendantCache(Te);
});
Q.prototype.on.call(Q.prototype, "visibleChange.konva", function() {
  this._clearSelfAndDescendantCache(Br);
});
Q.prototype.on.call(Q.prototype, "listeningChange.konva", function() {
  this._clearSelfAndDescendantCache(Ur);
});
Q.prototype.on.call(Q.prototype, "opacityChange.konva", function() {
  this._clearSelfAndDescendantCache(Ui);
});
const vt = Si.Factory.addGetterSetter;
vt(Q, "zIndex");
vt(Q, "absolutePosition");
vt(Q, "position");
vt(Q, "x", 0, (0, Ot.getNumberValidator)());
vt(Q, "y", 0, (0, Ot.getNumberValidator)());
vt(Q, "globalCompositeOperation", "source-over", (0, Ot.getStringValidator)());
vt(Q, "opacity", 1, (0, Ot.getNumberValidator)());
vt(Q, "name", "", (0, Ot.getStringValidator)());
vt(Q, "id", "", (0, Ot.getStringValidator)());
vt(Q, "rotation", 0, (0, Ot.getNumberValidator)());
Si.Factory.addComponentsGetterSetter(Q, "scale", ["x", "y"]);
vt(Q, "scaleX", 1, (0, Ot.getNumberValidator)());
vt(Q, "scaleY", 1, (0, Ot.getNumberValidator)());
Si.Factory.addComponentsGetterSetter(Q, "skew", ["x", "y"]);
vt(Q, "skewX", 0, (0, Ot.getNumberValidator)());
vt(Q, "skewY", 0, (0, Ot.getNumberValidator)());
Si.Factory.addComponentsGetterSetter(Q, "offset", ["x", "y"]);
vt(Q, "offsetX", 0, (0, Ot.getNumberValidator)());
vt(Q, "offsetY", 0, (0, Ot.getNumberValidator)());
vt(Q, "dragDistance", void 0, (0, Ot.getNumberValidator)());
vt(Q, "width", 0, (0, Ot.getNumberValidator)());
vt(Q, "height", 0, (0, Ot.getNumberValidator)());
vt(Q, "listening", !0, (0, Ot.getBooleanValidator)());
vt(Q, "preventDefault", !0, (0, Ot.getBooleanValidator)());
vt(Q, "filters", void 0, function(e) {
  return this._filterUpToDate = !1, e;
});
vt(Q, "visible", !0, (0, Ot.getBooleanValidator)());
vt(Q, "transformsEnabled", "all", (0, Ot.getStringValidator)());
vt(Q, "size");
vt(Q, "dragBoundFunc");
vt(Q, "draggable", !1, (0, Ot.getBooleanValidator)());
Si.Factory.backCompat(Q, {
  rotateDeg: "rotate",
  setRotationDeg: "setRotation",
  getRotationDeg: "getRotation"
});
var un = {};
Object.defineProperty(un, "__esModule", { value: !0 });
un.Container = void 0;
const Bn = at, _r = Tt, ms = Z;
class fn extends _r.Node {
  constructor() {
    super(...arguments), this.children = [];
  }
  getChildren(t) {
    const n = this.children || [];
    return t ? n.filter(t) : n;
  }
  hasChildren() {
    return this.getChildren().length > 0;
  }
  removeChildren() {
    return this.getChildren().forEach((t) => {
      t.parent = null, t.index = 0, t.remove();
    }), this.children = [], this._requestDraw(), this;
  }
  destroyChildren() {
    return this.getChildren().forEach((t) => {
      t.parent = null, t.index = 0, t.destroy();
    }), this.children = [], this._requestDraw(), this;
  }
  add(...t) {
    if (t.length === 0)
      return this;
    if (t.length > 1) {
      for (let i = 0; i < t.length; i++)
        this.add(t[i]);
      return this;
    }
    const n = t[0];
    return n.getParent() ? (n.moveTo(this), this) : (this._validateAdd(n), n.index = this.getChildren().length, n.parent = this, n._clearCaches(), this.getChildren().push(n), this._fire("add", {
      child: n
    }), this._requestDraw(), this);
  }
  destroy() {
    return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
  }
  find(t) {
    return this._generalFind(t, !1);
  }
  findOne(t) {
    const n = this._generalFind(t, !0);
    return n.length > 0 ? n[0] : void 0;
  }
  _generalFind(t, n) {
    const i = [];
    return this._descendants((s) => {
      const r = s._isMatch(t);
      return r && i.push(s), !!(r && n);
    }), i;
  }
  _descendants(t) {
    let n = !1;
    const i = this.getChildren();
    for (const s of i) {
      if (n = t(s), n)
        return !0;
      if (s.hasChildren() && (n = s._descendants(t), n))
        return !0;
    }
    return !1;
  }
  toObject() {
    const t = _r.Node.prototype.toObject.call(this);
    return t.children = [], this.getChildren().forEach((n) => {
      t.children.push(n.toObject());
    }), t;
  }
  isAncestorOf(t) {
    let n = t.getParent();
    for (; n; ) {
      if (n._id === this._id)
        return !0;
      n = n.getParent();
    }
    return !1;
  }
  clone(t) {
    const n = _r.Node.prototype.clone.call(this, t);
    return this.getChildren().forEach(function(i) {
      n.add(i.clone());
    }), n;
  }
  getAllIntersections(t) {
    const n = [];
    return this.find("Shape").forEach((i) => {
      i.isVisible() && i.intersects(t) && n.push(i);
    }), n;
  }
  _clearSelfAndDescendantCache(t) {
    var n;
    super._clearSelfAndDescendantCache(t), !this.isCached() && ((n = this.children) === null || n === void 0 || n.forEach(function(i) {
      i._clearSelfAndDescendantCache(t);
    }));
  }
  _setChildrenIndices() {
    var t;
    (t = this.children) === null || t === void 0 || t.forEach(function(n, i) {
      n.index = i;
    }), this._requestDraw();
  }
  drawScene(t, n, i) {
    const s = this.getLayer(), r = t || s && s.getCanvas(), o = r && r.getContext(), a = this._getCanvasCache(), l = a && a.scene, h = r && r.isCache;
    if (!this.isVisible() && !h)
      return this;
    if (l) {
      o.save();
      const c = this.getAbsoluteTransform(n).getMatrix();
      o.transform(c[0], c[1], c[2], c[3], c[4], c[5]), this._drawCachedSceneCanvas(o), o.restore();
    } else
      this._drawChildren("drawScene", r, n, i);
    return this;
  }
  drawHit(t, n) {
    if (!this.shouldDrawHit(n))
      return this;
    const i = this.getLayer(), s = t || i && i.hitCanvas, r = s && s.getContext(), o = this._getCanvasCache();
    if (o && o.hit) {
      r.save();
      const l = this.getAbsoluteTransform(n).getMatrix();
      r.transform(l[0], l[1], l[2], l[3], l[4], l[5]), this._drawCachedHitCanvas(r), r.restore();
    } else
      this._drawChildren("drawHit", s, n);
    return this;
  }
  _drawChildren(t, n, i, s) {
    var r;
    const o = n && n.getContext(), a = this.clipWidth(), l = this.clipHeight(), h = this.clipFunc(), c = typeof a == "number" && typeof l == "number" || h, g = i === this;
    if (c) {
      o.save();
      const _ = this.getAbsoluteTransform(i);
      let u = _.getMatrix();
      o.transform(u[0], u[1], u[2], u[3], u[4], u[5]), o.beginPath();
      let m;
      if (h)
        m = h.call(this, o, this);
      else {
        const y = this.clipX(), C = this.clipY();
        o.rect(y || 0, C || 0, a, l);
      }
      o.clip.apply(o, m), u = _.copy().invert().getMatrix(), o.transform(u[0], u[1], u[2], u[3], u[4], u[5]);
    }
    const f = !g && this.globalCompositeOperation() !== "source-over" && t === "drawScene";
    f && (o.save(), o._applyGlobalCompositeOperation(this)), (r = this.children) === null || r === void 0 || r.forEach(function(_) {
      _[t](n, i, s);
    }), f && o.restore(), c && o.restore();
  }
  getClientRect(t = {}) {
    var n;
    const i = t.skipTransform, s = t.relativeTo;
    let r, o, a, l, h = {
      x: 1 / 0,
      y: 1 / 0,
      width: 0,
      height: 0
    };
    const c = this;
    (n = this.children) === null || n === void 0 || n.forEach(function(_) {
      if (!_.visible())
        return;
      const u = _.getClientRect({
        relativeTo: c,
        skipShadow: t.skipShadow,
        skipStroke: t.skipStroke
      });
      u.width === 0 && u.height === 0 || (r === void 0 ? (r = u.x, o = u.y, a = u.x + u.width, l = u.y + u.height) : (r = Math.min(r, u.x), o = Math.min(o, u.y), a = Math.max(a, u.x + u.width), l = Math.max(l, u.y + u.height)));
    });
    const g = this.find("Shape");
    let f = !1;
    for (let _ = 0; _ < g.length; _++)
      if (g[_]._isVisible(this)) {
        f = !0;
        break;
      }
    return f && r !== void 0 ? h = {
      x: r,
      y: o,
      width: a - r,
      height: l - o
    } : h = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }, i ? h : this._transformedRect(h, s);
  }
}
un.Container = fn;
Bn.Factory.addComponentsGetterSetter(fn, "clip", [
  "x",
  "y",
  "width",
  "height"
]);
Bn.Factory.addGetterSetter(fn, "clipX", void 0, (0, ms.getNumberValidator)());
Bn.Factory.addGetterSetter(fn, "clipY", void 0, (0, ms.getNumberValidator)());
Bn.Factory.addGetterSetter(fn, "clipWidth", void 0, (0, ms.getNumberValidator)());
Bn.Factory.addGetterSetter(fn, "clipHeight", void 0, (0, ms.getNumberValidator)());
Bn.Factory.addGetterSetter(fn, "clipFunc");
var ec = {}, Ke = {};
Object.defineProperty(Ke, "__esModule", { value: !0 });
Ke.getCapturedShape = v1;
Ke.createEvent = vo;
Ke.hasPointerCapture = S1;
Ke.setPointerCapture = C1;
Ke.releaseCapture = ic;
const b1 = ot, gi = /* @__PURE__ */ new Map(), nc = b1.Konva._global.PointerEvent !== void 0;
function v1(e) {
  return gi.get(e);
}
function vo(e) {
  return {
    evt: e,
    pointerId: e.pointerId
  };
}
function S1(e, t) {
  return gi.get(e) === t;
}
function C1(e, t) {
  ic(e), t.getStage() && (gi.set(e, t), nc && t._fire("gotpointercapture", vo(new PointerEvent("gotpointercapture"))));
}
function ic(e, t) {
  const n = gi.get(e);
  if (!n)
    return;
  const i = n.getStage();
  i && i.content, gi.delete(e), nc && n._fire("lostpointercapture", vo(new PointerEvent("lostpointercapture")));
}
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Stage = e.stages = void 0;
  const t = At, n = at, i = un, s = ot, r = pe, o = _s, a = ot, l = Ke, h = "Stage", c = "string", g = "px", f = "mouseout", _ = "mouseleave", u = "mouseover", m = "mouseenter", y = "mousemove", C = "mousedown", x = "mouseup", d = "pointermove", p = "pointerdown", v = "pointerup", P = "pointercancel", R = "lostpointercapture", S = "pointerout", k = "pointerleave", T = "pointerover", M = "pointerenter", F = "contextmenu", B = "touchstart", Y = "touchend", $ = "touchmove", et = "touchcancel", X = "wheel", U = 5, rt = [
    [m, "_pointerenter"],
    [C, "_pointerdown"],
    [y, "_pointermove"],
    [x, "_pointerup"],
    [_, "_pointerleave"],
    [B, "_pointerdown"],
    [$, "_pointermove"],
    [Y, "_pointerup"],
    [et, "_pointercancel"],
    [u, "_pointerover"],
    [X, "_wheel"],
    [F, "_contextmenu"],
    [p, "_pointerdown"],
    [d, "_pointermove"],
    [v, "_pointerup"],
    [P, "_pointercancel"],
    [k, "_pointerleave"],
    [R, "_lostpointercapture"]
  ], J = {
    mouse: {
      [S]: f,
      [k]: _,
      [T]: u,
      [M]: m,
      [d]: y,
      [p]: C,
      [v]: x,
      [P]: "mousecancel",
      pointerclick: "click",
      pointerdblclick: "dblclick"
    },
    touch: {
      [S]: "touchout",
      [k]: "touchleave",
      [T]: "touchover",
      [M]: "touchenter",
      [d]: $,
      [p]: B,
      [v]: Y,
      [P]: et,
      pointerclick: "tap",
      pointerdblclick: "dbltap"
    },
    pointer: {
      [S]: S,
      [k]: k,
      [T]: T,
      [M]: M,
      [d]: d,
      [p]: p,
      [v]: v,
      [P]: P,
      pointerclick: "pointerclick",
      pointerdblclick: "pointerdblclick"
    }
  }, nt = (Lt) => Lt.indexOf("pointer") >= 0 ? "pointer" : Lt.indexOf("touch") >= 0 ? "touch" : "mouse", W = (Lt) => {
    const E = nt(Lt);
    if (E === "pointer")
      return s.Konva.pointerEventsEnabled && J.pointer;
    if (E === "touch")
      return J.touch;
    if (E === "mouse")
      return J.mouse;
  };
  function St(Lt = {}) {
    return (Lt.clipFunc || Lt.clipWidth || Lt.clipHeight) && t.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), Lt;
  }
  const re = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
  e.stages = [];
  class Kt extends i.Container {
    constructor(E) {
      super(St(E)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), e.stages.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
        St(this.attrs);
      }), this._checkVisibility();
    }
    _validateAdd(E) {
      const D = E.getType() === "Layer", z = E.getType() === "FastLayer";
      D || z || t.Util.throw("You may only add layers to the stage.");
    }
    _checkVisibility() {
      if (!this.content)
        return;
      const E = this.visible() ? "" : "none";
      this.content.style.display = E;
    }
    setContainer(E) {
      if (typeof E === c) {
        let D;
        if (E.charAt(0) === ".") {
          const z = E.slice(1);
          E = document.getElementsByClassName(z)[0];
        } else
          E.charAt(0) !== "#" ? D = E : D = E.slice(1), E = document.getElementById(D);
        if (!E)
          throw "Can not find container in document with id " + D;
      }
      return this._setAttr("container", E), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), E.appendChild(this.content)), this;
    }
    shouldDrawHit() {
      return !0;
    }
    clear() {
      const E = this.children, D = E.length;
      for (let z = 0; z < D; z++)
        E[z].clear();
      return this;
    }
    clone(E) {
      return E || (E = {}), E.container = typeof document < "u" && document.createElement("div"), i.Container.prototype.clone.call(this, E);
    }
    destroy() {
      super.destroy();
      const E = this.content;
      E && t.Util._isInDocument(E) && this.container().removeChild(E);
      const D = e.stages.indexOf(this);
      return D > -1 && e.stages.splice(D, 1), t.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
    }
    getPointerPosition() {
      const E = this._pointerPositions[0] || this._changedPointerPositions[0];
      return E ? {
        x: E.x,
        y: E.y
      } : (t.Util.warn(re), null);
    }
    _getPointerById(E) {
      return this._pointerPositions.find((D) => D.id === E);
    }
    getPointersPositions() {
      return this._pointerPositions;
    }
    getStage() {
      return this;
    }
    getContent() {
      return this.content;
    }
    _toKonvaCanvas(E) {
      E = E || {}, E.x = E.x || 0, E.y = E.y || 0, E.width = E.width || this.width(), E.height = E.height || this.height();
      const D = new r.SceneCanvas({
        width: E.width,
        height: E.height,
        pixelRatio: E.pixelRatio || 1
      }), z = D.getContext()._context, dt = this.children;
      return (E.x || E.y) && z.translate(-1 * E.x, -1 * E.y), dt.forEach(function(ut) {
        if (!ut.isVisible())
          return;
        const Et = ut._toKonvaCanvas(E);
        z.drawImage(Et._canvas, E.x, E.y, Et.getWidth() / Et.getPixelRatio(), Et.getHeight() / Et.getPixelRatio());
      }), D;
    }
    getIntersection(E) {
      if (!E)
        return null;
      const D = this.children, z = D.length, dt = z - 1;
      for (let ut = dt; ut >= 0; ut--) {
        const Et = D[ut].getIntersection(E);
        if (Et)
          return Et;
      }
      return null;
    }
    _resizeDOM() {
      const E = this.width(), D = this.height();
      this.content && (this.content.style.width = E + g, this.content.style.height = D + g), this.bufferCanvas.setSize(E, D), this.bufferHitCanvas.setSize(E, D), this.children.forEach((z) => {
        z.setSize({ width: E, height: D }), z.draw();
      });
    }
    add(E, ...D) {
      if (arguments.length > 1) {
        for (let dt = 0; dt < arguments.length; dt++)
          this.add(arguments[dt]);
        return this;
      }
      super.add(E);
      const z = this.children.length;
      return z > U && t.Util.warn("The stage has " + z + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), E.setSize({ width: this.width(), height: this.height() }), E.draw(), s.Konva.isBrowser && this.content.appendChild(E.canvas._canvas), this;
    }
    getParent() {
      return null;
    }
    getLayer() {
      return null;
    }
    hasPointerCapture(E) {
      return l.hasPointerCapture(E, this);
    }
    setPointerCapture(E) {
      l.setPointerCapture(E, this);
    }
    releaseCapture(E) {
      l.releaseCapture(E, this);
    }
    getLayers() {
      return this.children;
    }
    _bindContentEvents() {
      s.Konva.isBrowser && rt.forEach(([E, D]) => {
        this.content.addEventListener(E, (z) => {
          this[D](z);
        }, { passive: !1 });
      });
    }
    _pointerenter(E) {
      this.setPointersPositions(E);
      const D = W(E.type);
      D && this._fire(D.pointerenter, {
        evt: E,
        target: this,
        currentTarget: this
      });
    }
    _pointerover(E) {
      this.setPointersPositions(E);
      const D = W(E.type);
      D && this._fire(D.pointerover, {
        evt: E,
        target: this,
        currentTarget: this
      });
    }
    _getTargetShape(E) {
      let D = this[E + "targetShape"];
      return D && !D.getStage() && (D = null), D;
    }
    _pointerleave(E) {
      const D = W(E.type), z = nt(E.type);
      if (!D)
        return;
      this.setPointersPositions(E);
      const dt = this._getTargetShape(z), ut = !(s.Konva.isDragging() || s.Konva.isTransforming()) || s.Konva.hitOnDragEnabled;
      dt && ut ? (dt._fireAndBubble(D.pointerout, { evt: E }), dt._fireAndBubble(D.pointerleave, { evt: E }), this._fire(D.pointerleave, {
        evt: E,
        target: this,
        currentTarget: this
      }), this[z + "targetShape"] = null) : ut && (this._fire(D.pointerleave, {
        evt: E,
        target: this,
        currentTarget: this
      }), this._fire(D.pointerout, {
        evt: E,
        target: this,
        currentTarget: this
      })), this.pointerPos = null, this._pointerPositions = [];
    }
    _pointerdown(E) {
      const D = W(E.type), z = nt(E.type);
      if (!D)
        return;
      this.setPointersPositions(E);
      let dt = !1;
      this._changedPointerPositions.forEach((ut) => {
        const Et = this.getIntersection(ut);
        if (o.DD.justDragged = !1, s.Konva["_" + z + "ListenClick"] = !0, !Et || !Et.isListening()) {
          this[z + "ClickStartShape"] = void 0;
          return;
        }
        s.Konva.capturePointerEventsEnabled && Et.setPointerCapture(ut.id), this[z + "ClickStartShape"] = Et, Et._fireAndBubble(D.pointerdown, {
          evt: E,
          pointerId: ut.id
        }), dt = !0;
        const b = E.type.indexOf("touch") >= 0;
        Et.preventDefault() && E.cancelable && b && E.preventDefault();
      }), dt || this._fire(D.pointerdown, {
        evt: E,
        target: this,
        currentTarget: this,
        pointerId: this._pointerPositions[0].id
      });
    }
    _pointermove(E) {
      const D = W(E.type), z = nt(E.type);
      if (!D || (s.Konva.isDragging() && o.DD.node.preventDefault() && E.cancelable && E.preventDefault(), this.setPointersPositions(E), !(!(s.Konva.isDragging() || s.Konva.isTransforming()) || s.Konva.hitOnDragEnabled)))
        return;
      const ut = {};
      let Et = !1;
      const b = this._getTargetShape(z);
      this._changedPointerPositions.forEach((w) => {
        const A = l.getCapturedShape(w.id) || this.getIntersection(w), N = w.id, O = { evt: E, pointerId: N }, L = b !== A;
        if (L && b && (b._fireAndBubble(D.pointerout, { ...O }, A), b._fireAndBubble(D.pointerleave, { ...O }, A)), A) {
          if (ut[A._id])
            return;
          ut[A._id] = !0;
        }
        A && A.isListening() ? (Et = !0, L && (A._fireAndBubble(D.pointerover, { ...O }, b), A._fireAndBubble(D.pointerenter, { ...O }, b), this[z + "targetShape"] = A), A._fireAndBubble(D.pointermove, { ...O })) : b && (this._fire(D.pointerover, {
          evt: E,
          target: this,
          currentTarget: this,
          pointerId: N
        }), this[z + "targetShape"] = null);
      }), Et || this._fire(D.pointermove, {
        evt: E,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      });
    }
    _pointerup(E) {
      const D = W(E.type), z = nt(E.type);
      if (!D)
        return;
      this.setPointersPositions(E);
      const dt = this[z + "ClickStartShape"], ut = this[z + "ClickEndShape"], Et = {};
      let b = !1;
      this._changedPointerPositions.forEach((w) => {
        const A = l.getCapturedShape(w.id) || this.getIntersection(w);
        if (A) {
          if (A.releaseCapture(w.id), Et[A._id])
            return;
          Et[A._id] = !0;
        }
        const N = w.id, O = { evt: E, pointerId: N };
        let L = !1;
        s.Konva["_" + z + "InDblClickWindow"] ? (L = !0, clearTimeout(this[z + "DblTimeout"])) : o.DD.justDragged || (s.Konva["_" + z + "InDblClickWindow"] = !0, clearTimeout(this[z + "DblTimeout"])), this[z + "DblTimeout"] = setTimeout(function() {
          s.Konva["_" + z + "InDblClickWindow"] = !1;
        }, s.Konva.dblClickWindow), A && A.isListening() ? (b = !0, this[z + "ClickEndShape"] = A, A._fireAndBubble(D.pointerup, { ...O }), s.Konva["_" + z + "ListenClick"] && dt && dt === A && (A._fireAndBubble(D.pointerclick, { ...O }), L && ut && ut === A && A._fireAndBubble(D.pointerdblclick, { ...O }))) : (this[z + "ClickEndShape"] = null, s.Konva["_" + z + "ListenClick"] && this._fire(D.pointerclick, {
          evt: E,
          target: this,
          currentTarget: this,
          pointerId: N
        }), L && this._fire(D.pointerdblclick, {
          evt: E,
          target: this,
          currentTarget: this,
          pointerId: N
        }));
      }), b || this._fire(D.pointerup, {
        evt: E,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      }), s.Konva["_" + z + "ListenClick"] = !1, E.cancelable && z !== "touch" && z !== "pointer" && E.preventDefault();
    }
    _contextmenu(E) {
      this.setPointersPositions(E);
      const D = this.getIntersection(this.getPointerPosition());
      D && D.isListening() ? D._fireAndBubble(F, { evt: E }) : this._fire(F, {
        evt: E,
        target: this,
        currentTarget: this
      });
    }
    _wheel(E) {
      this.setPointersPositions(E);
      const D = this.getIntersection(this.getPointerPosition());
      D && D.isListening() ? D._fireAndBubble(X, { evt: E }) : this._fire(X, {
        evt: E,
        target: this,
        currentTarget: this
      });
    }
    _pointercancel(E) {
      this.setPointersPositions(E);
      const D = l.getCapturedShape(E.pointerId) || this.getIntersection(this.getPointerPosition());
      D && D._fireAndBubble(v, l.createEvent(E)), l.releaseCapture(E.pointerId);
    }
    _lostpointercapture(E) {
      l.releaseCapture(E.pointerId);
    }
    setPointersPositions(E) {
      const D = this._getContentPosition();
      let z = null, dt = null;
      E = E || window.event, E.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(E.touches, (ut) => {
        this._pointerPositions.push({
          id: ut.identifier,
          x: (ut.clientX - D.left) / D.scaleX,
          y: (ut.clientY - D.top) / D.scaleY
        });
      }), Array.prototype.forEach.call(E.changedTouches || E.touches, (ut) => {
        this._changedPointerPositions.push({
          id: ut.identifier,
          x: (ut.clientX - D.left) / D.scaleX,
          y: (ut.clientY - D.top) / D.scaleY
        });
      })) : (z = (E.clientX - D.left) / D.scaleX, dt = (E.clientY - D.top) / D.scaleY, this.pointerPos = {
        x: z,
        y: dt
      }, this._pointerPositions = [{ x: z, y: dt, id: t.Util._getFirstPointerId(E) }], this._changedPointerPositions = [
        { x: z, y: dt, id: t.Util._getFirstPointerId(E) }
      ]);
    }
    _setPointerPosition(E) {
      t.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(E);
    }
    _getContentPosition() {
      if (!this.content || !this.content.getBoundingClientRect)
        return {
          top: 0,
          left: 0,
          scaleX: 1,
          scaleY: 1
        };
      const E = this.content.getBoundingClientRect();
      return {
        top: E.top,
        left: E.left,
        scaleX: E.width / this.content.clientWidth || 1,
        scaleY: E.height / this.content.clientHeight || 1
      };
    }
    _buildDOM() {
      if (this.bufferCanvas = new r.SceneCanvas({
        width: this.width(),
        height: this.height()
      }), this.bufferHitCanvas = new r.HitCanvas({
        pixelRatio: 1,
        width: this.width(),
        height: this.height()
      }), !s.Konva.isBrowser)
        return;
      const E = this.container();
      if (!E)
        throw "Stage has no container. A container is required.";
      E.innerHTML = "", this.content = document.createElement("div"), this.content.style.position = "relative", this.content.style.userSelect = "none", this.content.className = "konvajs-content", this.content.setAttribute("role", "presentation"), E.appendChild(this.content), this._resizeDOM();
    }
    cache() {
      return t.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this;
    }
    clearCache() {
      return this;
    }
    batchDraw() {
      return this.getChildren().forEach(function(E) {
        E.batchDraw();
      }), this;
    }
  }
  e.Stage = Kt, Kt.prototype.nodeType = h, (0, a._registerNode)(Kt), n.Factory.addGetterSetter(Kt, "container"), s.Konva.isBrowser && document.addEventListener("visibilitychange", () => {
    e.stages.forEach((Lt) => {
      Lt.batchDraw();
    });
  });
})(ec);
var Ci = {}, Dt = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Shape = e.shapes = void 0;
  const t = ot, n = At, i = at, s = Tt, r = Z, o = ot, a = Ke, l = "hasShadow", h = "shadowRGBA", c = "patternImage", g = "linearGradient", f = "radialGradient";
  let _;
  function u() {
    return _ || (_ = n.Util.createCanvasElement().getContext("2d"), _);
  }
  e.shapes = {};
  function m(k) {
    const T = this.attrs.fillRule;
    T ? k.fill(T) : k.fill();
  }
  function y(k) {
    k.stroke();
  }
  function C(k) {
    const T = this.attrs.fillRule;
    T ? k.fill(T) : k.fill();
  }
  function x(k) {
    k.stroke();
  }
  function d() {
    this._clearCache(l);
  }
  function p() {
    this._clearCache(h);
  }
  function v() {
    this._clearCache(c);
  }
  function P() {
    this._clearCache(g);
  }
  function R() {
    this._clearCache(f);
  }
  class S extends s.Node {
    constructor(T) {
      super(T);
      let M;
      for (; M = n.Util.getRandomColor(), !(M && !(M in e.shapes)); )
        ;
      this.colorKey = M, e.shapes[M] = this;
    }
    getContext() {
      return n.Util.warn("shape.getContext() method is deprecated. Please do not use it."), this.getLayer().getContext();
    }
    getCanvas() {
      return n.Util.warn("shape.getCanvas() method is deprecated. Please do not use it."), this.getLayer().getCanvas();
    }
    getSceneFunc() {
      return this.attrs.sceneFunc || this._sceneFunc;
    }
    getHitFunc() {
      return this.attrs.hitFunc || this._hitFunc;
    }
    hasShadow() {
      return this._getCache(l, this._hasShadow);
    }
    _hasShadow() {
      return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
    }
    _getFillPattern() {
      return this._getCache(c, this.__getFillPattern);
    }
    __getFillPattern() {
      if (this.fillPatternImage()) {
        const M = u().createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
        if (M && M.setTransform) {
          const F = new n.Transform();
          F.translate(this.fillPatternX(), this.fillPatternY()), F.rotate(t.Konva.getAngle(this.fillPatternRotation())), F.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), F.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
          const B = F.getMatrix(), Y = typeof DOMMatrix > "u" ? {
            a: B[0],
            b: B[1],
            c: B[2],
            d: B[3],
            e: B[4],
            f: B[5]
          } : new DOMMatrix(B);
          M.setTransform(Y);
        }
        return M;
      }
    }
    _getLinearGradient() {
      return this._getCache(g, this.__getLinearGradient);
    }
    __getLinearGradient() {
      const T = this.fillLinearGradientColorStops();
      if (T) {
        const M = u(), F = this.fillLinearGradientStartPoint(), B = this.fillLinearGradientEndPoint(), Y = M.createLinearGradient(F.x, F.y, B.x, B.y);
        for (let $ = 0; $ < T.length; $ += 2)
          Y.addColorStop(T[$], T[$ + 1]);
        return Y;
      }
    }
    _getRadialGradient() {
      return this._getCache(f, this.__getRadialGradient);
    }
    __getRadialGradient() {
      const T = this.fillRadialGradientColorStops();
      if (T) {
        const M = u(), F = this.fillRadialGradientStartPoint(), B = this.fillRadialGradientEndPoint(), Y = M.createRadialGradient(F.x, F.y, this.fillRadialGradientStartRadius(), B.x, B.y, this.fillRadialGradientEndRadius());
        for (let $ = 0; $ < T.length; $ += 2)
          Y.addColorStop(T[$], T[$ + 1]);
        return Y;
      }
    }
    getShadowRGBA() {
      return this._getCache(h, this._getShadowRGBA);
    }
    _getShadowRGBA() {
      if (!this.hasShadow())
        return;
      const T = n.Util.colorToRGBA(this.shadowColor());
      if (T)
        return "rgba(" + T.r + "," + T.g + "," + T.b + "," + T.a * (this.shadowOpacity() || 1) + ")";
    }
    hasFill() {
      return this._calculate("hasFill", [
        "fillEnabled",
        "fill",
        "fillPatternImage",
        "fillLinearGradientColorStops",
        "fillRadialGradientColorStops"
      ], () => this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops()));
    }
    hasStroke() {
      return this._calculate("hasStroke", [
        "strokeEnabled",
        "strokeWidth",
        "stroke",
        "strokeLinearGradientColorStops"
      ], () => this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops()));
    }
    hasHitStroke() {
      const T = this.hitStrokeWidth();
      return T === "auto" ? this.hasStroke() : this.strokeEnabled() && !!T;
    }
    intersects(T) {
      const M = this.getStage();
      if (!M)
        return !1;
      const F = M.bufferHitCanvas;
      return F.getContext().clear(), this.drawHit(F, void 0, !0), F.context.getImageData(Math.round(T.x), Math.round(T.y), 1, 1).data[3] > 0;
    }
    destroy() {
      return s.Node.prototype.destroy.call(this), delete e.shapes[this.colorKey], delete this.colorKey, this;
    }
    _useBufferCanvas(T) {
      var M;
      if (!((M = this.attrs.perfectDrawEnabled) !== null && M !== void 0 ? M : !0))
        return !1;
      const B = T || this.hasFill(), Y = this.hasStroke(), $ = this.getAbsoluteOpacity() !== 1;
      if (B && Y && $)
        return !0;
      const et = this.hasShadow(), X = this.shadowForStrokeEnabled();
      return !!(B && Y && et && X);
    }
    setStrokeHitEnabled(T) {
      n.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), T ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
    }
    getStrokeHitEnabled() {
      return this.hitStrokeWidth() !== 0;
    }
    getSelfRect() {
      const T = this.size();
      return {
        x: this._centroid ? -T.width / 2 : 0,
        y: this._centroid ? -T.height / 2 : 0,
        width: T.width,
        height: T.height
      };
    }
    getClientRect(T = {}) {
      let M = !1, F = this.getParent();
      for (; F; ) {
        if (F.isCached()) {
          M = !0;
          break;
        }
        F = F.getParent();
      }
      const B = T.skipTransform, Y = T.relativeTo || M && this.getStage() || void 0, $ = this.getSelfRect(), X = !T.skipStroke && this.hasStroke() && this.strokeWidth() || 0, U = $.width + X, rt = $.height + X, J = !T.skipShadow && this.hasShadow(), nt = J ? this.shadowOffsetX() : 0, W = J ? this.shadowOffsetY() : 0, St = U + Math.abs(nt), re = rt + Math.abs(W), Kt = J && this.shadowBlur() || 0, Lt = St + Kt * 2, E = re + Kt * 2, D = {
        width: Lt,
        height: E,
        x: -(X / 2 + Kt) + Math.min(nt, 0) + $.x,
        y: -(X / 2 + Kt) + Math.min(W, 0) + $.y
      };
      return B ? D : this._transformedRect(D, Y);
    }
    drawScene(T, M, F) {
      const B = this.getLayer(), Y = T || B.getCanvas(), $ = Y.getContext(), et = this._getCanvasCache(), X = this.getSceneFunc(), U = this.hasShadow();
      let rt;
      const J = !1, nt = M === this;
      if (!this.isVisible() && !nt)
        return this;
      if (et) {
        $.save();
        const W = this.getAbsoluteTransform(M).getMatrix();
        return $.transform(W[0], W[1], W[2], W[3], W[4], W[5]), this._drawCachedSceneCanvas($), $.restore(), this;
      }
      if (!X)
        return this;
      if ($.save(), this._useBufferCanvas() && !J) {
        rt = this.getStage();
        const W = F || rt.bufferCanvas, St = W.getContext();
        St.clear(), St.save(), St._applyLineJoin(this);
        const re = this.getAbsoluteTransform(M).getMatrix();
        St.transform(re[0], re[1], re[2], re[3], re[4], re[5]), X.call(this, St, this), St.restore();
        const Kt = W.pixelRatio;
        U && $._applyShadow(this), $._applyOpacity(this), $._applyGlobalCompositeOperation(this), $.drawImage(W._canvas, W.x || 0, W.y || 0, W.width / Kt, W.height / Kt);
      } else {
        if ($._applyLineJoin(this), !nt) {
          const W = this.getAbsoluteTransform(M).getMatrix();
          $.transform(W[0], W[1], W[2], W[3], W[4], W[5]), $._applyOpacity(this), $._applyGlobalCompositeOperation(this);
        }
        U && $._applyShadow(this), X.call(this, $, this);
      }
      return $.restore(), this;
    }
    drawHit(T, M, F = !1) {
      if (!this.shouldDrawHit(M, F))
        return this;
      const B = this.getLayer(), Y = T || B.hitCanvas, $ = Y && Y.getContext(), et = this.hitFunc() || this.sceneFunc(), X = this._getCanvasCache(), U = X && X.hit;
      if (this.colorKey || n.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), U) {
        $.save();
        const J = this.getAbsoluteTransform(M).getMatrix();
        return $.transform(J[0], J[1], J[2], J[3], J[4], J[5]), this._drawCachedHitCanvas($), $.restore(), this;
      }
      if (!et)
        return this;
      if ($.save(), $._applyLineJoin(this), !(this === M)) {
        const J = this.getAbsoluteTransform(M).getMatrix();
        $.transform(J[0], J[1], J[2], J[3], J[4], J[5]);
      }
      return et.call(this, $, this), $.restore(), this;
    }
    drawHitFromCache(T = 0) {
      const M = this._getCanvasCache(), F = this._getCachedSceneCanvas(), B = M.hit, Y = B.getContext(), $ = B.getWidth(), et = B.getHeight();
      Y.clear(), Y.drawImage(F._canvas, 0, 0, $, et);
      try {
        const X = Y.getImageData(0, 0, $, et), U = X.data, rt = U.length, J = n.Util._hexToRgb(this.colorKey);
        for (let nt = 0; nt < rt; nt += 4)
          U[nt + 3] > T ? (U[nt] = J.r, U[nt + 1] = J.g, U[nt + 2] = J.b, U[nt + 3] = 255) : U[nt + 3] = 0;
        Y.putImageData(X, 0, 0);
      } catch (X) {
        n.Util.error("Unable to draw hit graph from cached scene canvas. " + X.message);
      }
      return this;
    }
    hasPointerCapture(T) {
      return a.hasPointerCapture(T, this);
    }
    setPointerCapture(T) {
      a.setPointerCapture(T, this);
    }
    releaseCapture(T) {
      a.releaseCapture(T, this);
    }
  }
  e.Shape = S, S.prototype._fillFunc = m, S.prototype._strokeFunc = y, S.prototype._fillFuncHit = C, S.prototype._strokeFuncHit = x, S.prototype._centroid = !1, S.prototype.nodeType = "Shape", (0, o._registerNode)(S), S.prototype.eventListeners = {}, S.prototype.on.call(S.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", d), S.prototype.on.call(S.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", p), S.prototype.on.call(S.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", v), S.prototype.on.call(S.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", P), S.prototype.on.call(S.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", R), i.Factory.addGetterSetter(S, "stroke", void 0, (0, r.getStringOrGradientValidator)()), i.Factory.addGetterSetter(S, "strokeWidth", 2, (0, r.getNumberValidator)()), i.Factory.addGetterSetter(S, "fillAfterStrokeEnabled", !1), i.Factory.addGetterSetter(S, "hitStrokeWidth", "auto", (0, r.getNumberOrAutoValidator)()), i.Factory.addGetterSetter(S, "strokeHitEnabled", !0, (0, r.getBooleanValidator)()), i.Factory.addGetterSetter(S, "perfectDrawEnabled", !0, (0, r.getBooleanValidator)()), i.Factory.addGetterSetter(S, "shadowForStrokeEnabled", !0, (0, r.getBooleanValidator)()), i.Factory.addGetterSetter(S, "lineJoin"), i.Factory.addGetterSetter(S, "lineCap"), i.Factory.addGetterSetter(S, "sceneFunc"), i.Factory.addGetterSetter(S, "hitFunc"), i.Factory.addGetterSetter(S, "dash"), i.Factory.addGetterSetter(S, "dashOffset", 0, (0, r.getNumberValidator)()), i.Factory.addGetterSetter(S, "shadowColor", void 0, (0, r.getStringValidator)()), i.Factory.addGetterSetter(S, "shadowBlur", 0, (0, r.getNumberValidator)()), i.Factory.addGetterSetter(S, "shadowOpacity", 1, (0, r.getNumberValidator)()), i.Factory.addComponentsGetterSetter(S, "shadowOffset", ["x", "y"]), i.Factory.addGetterSetter(S, "shadowOffsetX", 0, (0, r.getNumberValidator)()), i.Factory.addGetterSetter(S, "shadowOffsetY", 0, (0, r.getNumberValidator)()), i.Factory.addGetterSetter(S, "fillPatternImage"), i.Factory.addGetterSetter(S, "fill", void 0, (0, r.getStringOrGradientValidator)()), i.Factory.addGetterSetter(S, "fillPatternX", 0, (0, r.getNumberValidator)()), i.Factory.addGetterSetter(S, "fillPatternY", 0, (0, r.getNumberValidator)()), i.Factory.addGetterSetter(S, "fillLinearGradientColorStops"), i.Factory.addGetterSetter(S, "strokeLinearGradientColorStops"), i.Factory.addGetterSetter(S, "fillRadialGradientStartRadius", 0), i.Factory.addGetterSetter(S, "fillRadialGradientEndRadius", 0), i.Factory.addGetterSetter(S, "fillRadialGradientColorStops"), i.Factory.addGetterSetter(S, "fillPatternRepeat", "repeat"), i.Factory.addGetterSetter(S, "fillEnabled", !0), i.Factory.addGetterSetter(S, "strokeEnabled", !0), i.Factory.addGetterSetter(S, "shadowEnabled", !0), i.Factory.addGetterSetter(S, "dashEnabled", !0), i.Factory.addGetterSetter(S, "strokeScaleEnabled", !0), i.Factory.addGetterSetter(S, "fillPriority", "color"), i.Factory.addComponentsGetterSetter(S, "fillPatternOffset", ["x", "y"]), i.Factory.addGetterSetter(S, "fillPatternOffsetX", 0, (0, r.getNumberValidator)()), i.Factory.addGetterSetter(S, "fillPatternOffsetY", 0, (0, r.getNumberValidator)()), i.Factory.addComponentsGetterSetter(S, "fillPatternScale", ["x", "y"]), i.Factory.addGetterSetter(S, "fillPatternScaleX", 1, (0, r.getNumberValidator)()), i.Factory.addGetterSetter(S, "fillPatternScaleY", 1, (0, r.getNumberValidator)()), i.Factory.addComponentsGetterSetter(S, "fillLinearGradientStartPoint", [
    "x",
    "y"
  ]), i.Factory.addComponentsGetterSetter(S, "strokeLinearGradientStartPoint", [
    "x",
    "y"
  ]), i.Factory.addGetterSetter(S, "fillLinearGradientStartPointX", 0), i.Factory.addGetterSetter(S, "strokeLinearGradientStartPointX", 0), i.Factory.addGetterSetter(S, "fillLinearGradientStartPointY", 0), i.Factory.addGetterSetter(S, "strokeLinearGradientStartPointY", 0), i.Factory.addComponentsGetterSetter(S, "fillLinearGradientEndPoint", [
    "x",
    "y"
  ]), i.Factory.addComponentsGetterSetter(S, "strokeLinearGradientEndPoint", [
    "x",
    "y"
  ]), i.Factory.addGetterSetter(S, "fillLinearGradientEndPointX", 0), i.Factory.addGetterSetter(S, "strokeLinearGradientEndPointX", 0), i.Factory.addGetterSetter(S, "fillLinearGradientEndPointY", 0), i.Factory.addGetterSetter(S, "strokeLinearGradientEndPointY", 0), i.Factory.addComponentsGetterSetter(S, "fillRadialGradientStartPoint", [
    "x",
    "y"
  ]), i.Factory.addGetterSetter(S, "fillRadialGradientStartPointX", 0), i.Factory.addGetterSetter(S, "fillRadialGradientStartPointY", 0), i.Factory.addComponentsGetterSetter(S, "fillRadialGradientEndPoint", [
    "x",
    "y"
  ]), i.Factory.addGetterSetter(S, "fillRadialGradientEndPointX", 0), i.Factory.addGetterSetter(S, "fillRadialGradientEndPointY", 0), i.Factory.addGetterSetter(S, "fillPatternRotation", 0), i.Factory.addGetterSetter(S, "fillRule", void 0, (0, r.getStringValidator)()), i.Factory.backCompat(S, {
    dashArray: "dash",
    getDashArray: "getDash",
    setDashArray: "getDash",
    drawFunc: "sceneFunc",
    getDrawFunc: "getSceneFunc",
    setDrawFunc: "setSceneFunc",
    drawHitFunc: "hitFunc",
    getDrawHitFunc: "getHitFunc",
    setDrawHitFunc: "setHitFunc"
  });
})(Dt);
Object.defineProperty(Ci, "__esModule", { value: !0 });
Ci.Layer = void 0;
const Pe = At, mr = un, xn = Tt, So = at, Sa = pe, w1 = Z, x1 = Dt, E1 = ot, P1 = "#", T1 = "beforeDraw", A1 = "draw", sc = [
  { x: 0, y: 0 },
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
  { x: -1, y: 1 }
], R1 = sc.length;
class Hn extends mr.Container {
  constructor(t) {
    super(t), this.canvas = new Sa.SceneCanvas(), this.hitCanvas = new Sa.HitCanvas({
      pixelRatio: 1
    }), this._waitingForDraw = !1, this.on("visibleChange.konva", this._checkVisibility), this._checkVisibility(), this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled), this._setSmoothEnabled();
  }
  createPNGStream() {
    return this.canvas._canvas.createPNGStream();
  }
  getCanvas() {
    return this.canvas;
  }
  getNativeCanvasElement() {
    return this.canvas._canvas;
  }
  getHitCanvas() {
    return this.hitCanvas;
  }
  getContext() {
    return this.getCanvas().getContext();
  }
  clear(t) {
    return this.getContext().clear(t), this.getHitCanvas().getContext().clear(t), this;
  }
  setZIndex(t) {
    super.setZIndex(t);
    const n = this.getStage();
    return n && n.content && (n.content.removeChild(this.getNativeCanvasElement()), t < n.children.length - 1 ? n.content.insertBefore(this.getNativeCanvasElement(), n.children[t + 1].getCanvas()._canvas) : n.content.appendChild(this.getNativeCanvasElement())), this;
  }
  moveToTop() {
    xn.Node.prototype.moveToTop.call(this);
    const t = this.getStage();
    return t && t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.appendChild(this.getNativeCanvasElement())), !0;
  }
  moveUp() {
    if (!xn.Node.prototype.moveUp.call(this))
      return !1;
    const n = this.getStage();
    return !n || !n.content ? !1 : (n.content.removeChild(this.getNativeCanvasElement()), this.index < n.children.length - 1 ? n.content.insertBefore(this.getNativeCanvasElement(), n.children[this.index + 1].getCanvas()._canvas) : n.content.appendChild(this.getNativeCanvasElement()), !0);
  }
  moveDown() {
    if (xn.Node.prototype.moveDown.call(this)) {
      const t = this.getStage();
      if (t) {
        const n = t.children;
        t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.insertBefore(this.getNativeCanvasElement(), n[this.index + 1].getCanvas()._canvas));
      }
      return !0;
    }
    return !1;
  }
  moveToBottom() {
    if (xn.Node.prototype.moveToBottom.call(this)) {
      const t = this.getStage();
      if (t) {
        const n = t.children;
        t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.insertBefore(this.getNativeCanvasElement(), n[1].getCanvas()._canvas));
      }
      return !0;
    }
    return !1;
  }
  getLayer() {
    return this;
  }
  remove() {
    const t = this.getNativeCanvasElement();
    return xn.Node.prototype.remove.call(this), t && t.parentNode && Pe.Util._isInDocument(t) && t.parentNode.removeChild(t), this;
  }
  getStage() {
    return this.parent;
  }
  setSize({ width: t, height: n }) {
    return this.canvas.setSize(t, n), this.hitCanvas.setSize(t, n), this._setSmoothEnabled(), this;
  }
  _validateAdd(t) {
    const n = t.getType();
    n !== "Group" && n !== "Shape" && Pe.Util.throw("You may only add groups and shapes to a layer.");
  }
  _toKonvaCanvas(t) {
    return t = t || {}, t.width = t.width || this.getWidth(), t.height = t.height || this.getHeight(), t.x = t.x !== void 0 ? t.x : this.x(), t.y = t.y !== void 0 ? t.y : this.y(), xn.Node.prototype._toKonvaCanvas.call(this, t);
  }
  _checkVisibility() {
    this.visible() ? this.canvas._canvas.style.display = "block" : this.canvas._canvas.style.display = "none";
  }
  _setSmoothEnabled() {
    this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
  }
  getWidth() {
    if (this.parent)
      return this.parent.width();
  }
  setWidth() {
    Pe.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
  }
  getHeight() {
    if (this.parent)
      return this.parent.height();
  }
  setHeight() {
    Pe.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
  }
  batchDraw() {
    return this._waitingForDraw || (this._waitingForDraw = !0, Pe.Util.requestAnimFrame(() => {
      this.draw(), this._waitingForDraw = !1;
    })), this;
  }
  getIntersection(t) {
    if (!this.isListening() || !this.isVisible())
      return null;
    let n = 1, i = !1;
    for (; ; ) {
      for (let s = 0; s < R1; s++) {
        const r = sc[s], o = this._getIntersection({
          x: t.x + r.x * n,
          y: t.y + r.y * n
        }), a = o.shape;
        if (a)
          return a;
        if (i = !!o.antialiased, !o.antialiased)
          break;
      }
      if (i)
        n += 1;
      else
        return null;
    }
  }
  _getIntersection(t) {
    const n = this.hitCanvas.pixelRatio, i = this.hitCanvas.context.getImageData(Math.round(t.x * n), Math.round(t.y * n), 1, 1).data, s = i[3];
    if (s === 255) {
      const r = Pe.Util._rgbToHex(i[0], i[1], i[2]), o = x1.shapes[P1 + r];
      return o ? {
        shape: o
      } : {
        antialiased: !0
      };
    } else if (s > 0)
      return {
        antialiased: !0
      };
    return {};
  }
  drawScene(t, n, i) {
    const s = this.getLayer(), r = t || s && s.getCanvas();
    return this._fire(T1, {
      node: this
    }), this.clearBeforeDraw() && r.getContext().clear(), mr.Container.prototype.drawScene.call(this, r, n, i), this._fire(A1, {
      node: this
    }), this;
  }
  drawHit(t, n) {
    const i = this.getLayer(), s = t || i && i.hitCanvas;
    return i && i.clearBeforeDraw() && i.getHitCanvas().getContext().clear(), mr.Container.prototype.drawHit.call(this, s, n), this;
  }
  enableHitGraph() {
    return this.hitGraphEnabled(!0), this;
  }
  disableHitGraph() {
    return this.hitGraphEnabled(!1), this;
  }
  setHitGraphEnabled(t) {
    Pe.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(t);
  }
  getHitGraphEnabled(t) {
    return Pe.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
  }
  toggleHitCanvas() {
    if (!this.parent || !this.parent.content)
      return;
    const t = this.parent;
    !!this.hitCanvas._canvas.parentNode ? t.content.removeChild(this.hitCanvas._canvas) : t.content.appendChild(this.hitCanvas._canvas);
  }
  destroy() {
    return Pe.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy();
  }
}
Ci.Layer = Hn;
Hn.prototype.nodeType = "Layer";
(0, E1._registerNode)(Hn);
So.Factory.addGetterSetter(Hn, "imageSmoothingEnabled", !0);
So.Factory.addGetterSetter(Hn, "clearBeforeDraw", !0);
So.Factory.addGetterSetter(Hn, "hitGraphEnabled", !0, (0, w1.getBooleanValidator)());
var ys = {};
Object.defineProperty(ys, "__esModule", { value: !0 });
ys.FastLayer = void 0;
const k1 = At, M1 = Ci, O1 = ot;
class Co extends M1.Layer {
  constructor(t) {
    super(t), this.listening(!1), k1.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
  }
}
ys.FastLayer = Co;
Co.prototype.nodeType = "FastLayer";
(0, O1._registerNode)(Co);
var $n = {};
Object.defineProperty($n, "__esModule", { value: !0 });
$n.Group = void 0;
const L1 = At, F1 = un, N1 = ot;
class wo extends F1.Container {
  _validateAdd(t) {
    const n = t.getType();
    n !== "Group" && n !== "Shape" && L1.Util.throw("You may only add groups and shapes to groups.");
  }
}
$n.Group = wo;
wo.prototype.nodeType = "Group";
(0, N1._registerNode)(wo);
var jn = {};
Object.defineProperty(jn, "__esModule", { value: !0 });
jn.Animation = void 0;
const yr = ot, Ca = At, br = function() {
  return yr.glob.performance && yr.glob.performance.now ? function() {
    return yr.glob.performance.now();
  } : function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
}();
class Ce {
  constructor(t, n) {
    this.id = Ce.animIdCounter++, this.frame = {
      time: 0,
      timeDiff: 0,
      lastTime: br(),
      frameRate: 0
    }, this.func = t, this.setLayers(n);
  }
  setLayers(t) {
    let n = [];
    return t && (n = Array.isArray(t) ? t : [t]), this.layers = n, this;
  }
  getLayers() {
    return this.layers;
  }
  addLayer(t) {
    const n = this.layers, i = n.length;
    for (let s = 0; s < i; s++)
      if (n[s]._id === t._id)
        return !1;
    return this.layers.push(t), !0;
  }
  isRunning() {
    const n = Ce.animations, i = n.length;
    for (let s = 0; s < i; s++)
      if (n[s].id === this.id)
        return !0;
    return !1;
  }
  start() {
    return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = br(), Ce._addAnimation(this), this;
  }
  stop() {
    return Ce._removeAnimation(this), this;
  }
  _updateFrameObject(t) {
    this.frame.timeDiff = t - this.frame.lastTime, this.frame.lastTime = t, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff;
  }
  static _addAnimation(t) {
    this.animations.push(t), this._handleAnimation();
  }
  static _removeAnimation(t) {
    const n = t.id, i = this.animations, s = i.length;
    for (let r = 0; r < s; r++)
      if (i[r].id === n) {
        this.animations.splice(r, 1);
        break;
      }
  }
  static _runFrames() {
    const t = {}, n = this.animations;
    for (let i = 0; i < n.length; i++) {
      const s = n[i], r = s.layers, o = s.func;
      s._updateFrameObject(br());
      const a = r.length;
      let l;
      if (o ? l = o.call(s, s.frame) !== !1 : l = !0, !!l)
        for (let h = 0; h < a; h++) {
          const c = r[h];
          c._id !== void 0 && (t[c._id] = c);
        }
    }
    for (const i in t)
      t.hasOwnProperty(i) && t[i].batchDraw();
  }
  static _animationLoop() {
    const t = Ce;
    t.animations.length ? (t._runFrames(), Ca.Util.requestAnimFrame(t._animationLoop)) : t.animRunning = !1;
  }
  static _handleAnimation() {
    this.animRunning || (this.animRunning = !0, Ca.Util.requestAnimFrame(this._animationLoop));
  }
}
jn.Animation = Ce;
Ce.animations = [];
Ce.animIdCounter = 0;
Ce.animRunning = !1;
var rc = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Easings = e.Tween = void 0;
  const t = At, n = jn, i = Tt, s = ot, r = {
    node: 1,
    duration: 1,
    easing: 1,
    onFinish: 1,
    yoyo: 1
  }, o = 1, a = 2, l = 3, h = ["fill", "stroke", "shadowColor"];
  let c = 0;
  class g {
    constructor(u, m, y, C, x, d, p) {
      this.prop = u, this.propFunc = m, this.begin = C, this._pos = C, this.duration = d, this._change = 0, this.prevPos = 0, this.yoyo = p, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = y, this._change = x - this.begin, this.pause();
    }
    fire(u) {
      const m = this[u];
      m && m();
    }
    setTime(u) {
      u > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : u < 0 ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = u, this.update());
    }
    getTime() {
      return this._time;
    }
    setPosition(u) {
      this.prevPos = this._pos, this.propFunc(u), this._pos = u;
    }
    getPosition(u) {
      return u === void 0 && (u = this._time), this.func(u, this.begin, this._change, this.duration);
    }
    play() {
      this.state = a, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay");
    }
    reverse() {
      this.state = l, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse");
    }
    seek(u) {
      this.pause(), this._time = u, this.update(), this.fire("onSeek");
    }
    reset() {
      this.pause(), this._time = 0, this.update(), this.fire("onReset");
    }
    finish() {
      this.pause(), this._time = this.duration, this.update(), this.fire("onFinish");
    }
    update() {
      this.setPosition(this.getPosition(this._time)), this.fire("onUpdate");
    }
    onEnterFrame() {
      const u = this.getTimer() - this._startTime;
      this.state === a ? this.setTime(u) : this.state === l && this.setTime(this.duration - u);
    }
    pause() {
      this.state = o, this.fire("onPause");
    }
    getTimer() {
      return (/* @__PURE__ */ new Date()).getTime();
    }
  }
  class f {
    constructor(u) {
      const m = this, y = u.node, C = y._id, x = u.easing || e.Easings.Linear, d = !!u.yoyo;
      let p, v;
      typeof u.duration > "u" ? p = 0.3 : u.duration === 0 ? p = 1e-3 : p = u.duration, this.node = y, this._id = c++;
      const P = y.getLayer() || (y instanceof s.Konva.Stage ? y.getLayers() : null);
      P || t.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new n.Animation(function() {
        m.tween.onEnterFrame();
      }, P), this.tween = new g(v, function(R) {
        m._tweenFunc(R);
      }, x, 0, 1, p * 1e3, d), this._addListeners(), f.attrs[C] || (f.attrs[C] = {}), f.attrs[C][this._id] || (f.attrs[C][this._id] = {}), f.tweens[C] || (f.tweens[C] = {});
      for (v in u)
        r[v] === void 0 && this._addAttr(v, u[v]);
      this.reset(), this.onFinish = u.onFinish, this.onReset = u.onReset, this.onUpdate = u.onUpdate;
    }
    _addAttr(u, m) {
      const y = this.node, C = y._id;
      let x, d, p, v, P;
      const R = f.tweens[C][u];
      R && delete f.attrs[C][R][u];
      let S = y.getAttr(u);
      if (t.Util._isArray(m))
        if (x = [], d = Math.max(m.length, S.length), u === "points" && m.length !== S.length && (m.length > S.length ? (v = S, S = t.Util._prepareArrayForTween(S, m, y.closed())) : (p = m, m = t.Util._prepareArrayForTween(m, S, y.closed()))), u.indexOf("fill") === 0)
          for (let k = 0; k < d; k++)
            if (k % 2 === 0)
              x.push(m[k] - S[k]);
            else {
              const T = t.Util.colorToRGBA(S[k]);
              P = t.Util.colorToRGBA(m[k]), S[k] = T, x.push({
                r: P.r - T.r,
                g: P.g - T.g,
                b: P.b - T.b,
                a: P.a - T.a
              });
            }
        else
          for (let k = 0; k < d; k++)
            x.push(m[k] - S[k]);
      else
        h.indexOf(u) !== -1 ? (S = t.Util.colorToRGBA(S), P = t.Util.colorToRGBA(m), x = {
          r: P.r - S.r,
          g: P.g - S.g,
          b: P.b - S.b,
          a: P.a - S.a
        }) : x = m - S;
      f.attrs[C][this._id][u] = {
        start: S,
        diff: x,
        end: m,
        trueEnd: p,
        trueStart: v
      }, f.tweens[C][u] = this._id;
    }
    _tweenFunc(u) {
      const m = this.node, y = f.attrs[m._id][this._id];
      let C, x, d, p, v, P, R, S;
      for (C in y) {
        if (x = y[C], d = x.start, p = x.diff, S = x.end, t.Util._isArray(d))
          if (v = [], R = Math.max(d.length, S.length), C.indexOf("fill") === 0)
            for (P = 0; P < R; P++)
              P % 2 === 0 ? v.push((d[P] || 0) + p[P] * u) : v.push("rgba(" + Math.round(d[P].r + p[P].r * u) + "," + Math.round(d[P].g + p[P].g * u) + "," + Math.round(d[P].b + p[P].b * u) + "," + (d[P].a + p[P].a * u) + ")");
          else
            for (P = 0; P < R; P++)
              v.push((d[P] || 0) + p[P] * u);
        else
          h.indexOf(C) !== -1 ? v = "rgba(" + Math.round(d.r + p.r * u) + "," + Math.round(d.g + p.g * u) + "," + Math.round(d.b + p.b * u) + "," + (d.a + p.a * u) + ")" : v = d + p * u;
        m.setAttr(C, v);
      }
    }
    _addListeners() {
      this.tween.onPlay = () => {
        this.anim.start();
      }, this.tween.onReverse = () => {
        this.anim.start();
      }, this.tween.onPause = () => {
        this.anim.stop();
      }, this.tween.onFinish = () => {
        const u = this.node, m = f.attrs[u._id][this._id];
        m.points && m.points.trueEnd && u.setAttr("points", m.points.trueEnd), this.onFinish && this.onFinish.call(this);
      }, this.tween.onReset = () => {
        const u = this.node, m = f.attrs[u._id][this._id];
        m.points && m.points.trueStart && u.points(m.points.trueStart), this.onReset && this.onReset();
      }, this.tween.onUpdate = () => {
        this.onUpdate && this.onUpdate.call(this);
      };
    }
    play() {
      return this.tween.play(), this;
    }
    reverse() {
      return this.tween.reverse(), this;
    }
    reset() {
      return this.tween.reset(), this;
    }
    seek(u) {
      return this.tween.seek(u * 1e3), this;
    }
    pause() {
      return this.tween.pause(), this;
    }
    finish() {
      return this.tween.finish(), this;
    }
    destroy() {
      const u = this.node._id, m = this._id, y = f.tweens[u];
      this.pause(), this.anim && this.anim.stop();
      for (const C in y)
        delete f.tweens[u][C];
      delete f.attrs[u][m], f.tweens[u] && (Object.keys(f.tweens[u]).length === 0 && delete f.tweens[u], Object.keys(f.attrs[u]).length === 0 && delete f.attrs[u]);
    }
  }
  e.Tween = f, f.attrs = {}, f.tweens = {}, i.Node.prototype.to = function(_) {
    const u = _.onFinish;
    _.node = this, _.onFinish = function() {
      this.destroy(), u && u();
    }, new f(_).play();
  }, e.Easings = {
    BackEaseIn(_, u, m, y) {
      return m * (_ /= y) * _ * ((1.70158 + 1) * _ - 1.70158) + u;
    },
    BackEaseOut(_, u, m, y) {
      return m * ((_ = _ / y - 1) * _ * ((1.70158 + 1) * _ + 1.70158) + 1) + u;
    },
    BackEaseInOut(_, u, m, y) {
      let C = 1.70158;
      return (_ /= y / 2) < 1 ? m / 2 * (_ * _ * (((C *= 1.525) + 1) * _ - C)) + u : m / 2 * ((_ -= 2) * _ * (((C *= 1.525) + 1) * _ + C) + 2) + u;
    },
    ElasticEaseIn(_, u, m, y, C, x) {
      let d = 0;
      return _ === 0 ? u : (_ /= y) === 1 ? u + m : (x || (x = y * 0.3), !C || C < Math.abs(m) ? (C = m, d = x / 4) : d = x / (2 * Math.PI) * Math.asin(m / C), -(C * Math.pow(2, 10 * (_ -= 1)) * Math.sin((_ * y - d) * (2 * Math.PI) / x)) + u);
    },
    ElasticEaseOut(_, u, m, y, C, x) {
      let d = 0;
      return _ === 0 ? u : (_ /= y) === 1 ? u + m : (x || (x = y * 0.3), !C || C < Math.abs(m) ? (C = m, d = x / 4) : d = x / (2 * Math.PI) * Math.asin(m / C), C * Math.pow(2, -10 * _) * Math.sin((_ * y - d) * (2 * Math.PI) / x) + m + u);
    },
    ElasticEaseInOut(_, u, m, y, C, x) {
      let d = 0;
      return _ === 0 ? u : (_ /= y / 2) === 2 ? u + m : (x || (x = y * (0.3 * 1.5)), !C || C < Math.abs(m) ? (C = m, d = x / 4) : d = x / (2 * Math.PI) * Math.asin(m / C), _ < 1 ? -0.5 * (C * Math.pow(2, 10 * (_ -= 1)) * Math.sin((_ * y - d) * (2 * Math.PI) / x)) + u : C * Math.pow(2, -10 * (_ -= 1)) * Math.sin((_ * y - d) * (2 * Math.PI) / x) * 0.5 + m + u);
    },
    BounceEaseOut(_, u, m, y) {
      return (_ /= y) < 1 / 2.75 ? m * (7.5625 * _ * _) + u : _ < 2 / 2.75 ? m * (7.5625 * (_ -= 1.5 / 2.75) * _ + 0.75) + u : _ < 2.5 / 2.75 ? m * (7.5625 * (_ -= 2.25 / 2.75) * _ + 0.9375) + u : m * (7.5625 * (_ -= 2.625 / 2.75) * _ + 0.984375) + u;
    },
    BounceEaseIn(_, u, m, y) {
      return m - e.Easings.BounceEaseOut(y - _, 0, m, y) + u;
    },
    BounceEaseInOut(_, u, m, y) {
      return _ < y / 2 ? e.Easings.BounceEaseIn(_ * 2, 0, m, y) * 0.5 + u : e.Easings.BounceEaseOut(_ * 2 - y, 0, m, y) * 0.5 + m * 0.5 + u;
    },
    EaseIn(_, u, m, y) {
      return m * (_ /= y) * _ + u;
    },
    EaseOut(_, u, m, y) {
      return -m * (_ /= y) * (_ - 2) + u;
    },
    EaseInOut(_, u, m, y) {
      return (_ /= y / 2) < 1 ? m / 2 * _ * _ + u : -m / 2 * (--_ * (_ - 2) - 1) + u;
    },
    StrongEaseIn(_, u, m, y) {
      return m * (_ /= y) * _ * _ * _ * _ + u;
    },
    StrongEaseOut(_, u, m, y) {
      return m * ((_ = _ / y - 1) * _ * _ * _ * _ + 1) + u;
    },
    StrongEaseInOut(_, u, m, y) {
      return (_ /= y / 2) < 1 ? m / 2 * _ * _ * _ * _ * _ + u : m / 2 * ((_ -= 2) * _ * _ * _ * _ + 2) + u;
    },
    Linear(_, u, m, y) {
      return m * _ / y + u;
    }
  };
})(rc);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Konva = void 0;
  const t = ot, n = At, i = Tt, s = un, r = ec, o = Ci, a = ys, l = $n, h = _s, c = Dt, g = jn, f = rc, _ = Oe, u = pe;
  e.Konva = n.Util._assign(t.Konva, {
    Util: n.Util,
    Transform: n.Transform,
    Node: i.Node,
    Container: s.Container,
    Stage: r.Stage,
    stages: r.stages,
    Layer: o.Layer,
    FastLayer: a.FastLayer,
    Group: l.Group,
    DD: h.DD,
    Shape: c.Shape,
    shapes: c.shapes,
    Animation: g.Animation,
    Tween: f.Tween,
    Easings: f.Easings,
    Context: _.Context,
    Canvas: u.Canvas
  }), e.default = e.Konva;
})(Zl);
var bs = {};
Object.defineProperty(bs, "__esModule", { value: !0 });
bs.Arc = void 0;
const vs = at, D1 = Dt, wa = ot, Ss = Z, I1 = ot;
class De extends D1.Shape {
  _sceneFunc(t) {
    const n = wa.Konva.getAngle(this.angle()), i = this.clockwise();
    t.beginPath(), t.arc(0, 0, this.outerRadius(), 0, n, i), t.arc(0, 0, this.innerRadius(), n, 0, !i), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(t) {
    this.outerRadius(t / 2);
  }
  setHeight(t) {
    this.outerRadius(t / 2);
  }
  getSelfRect() {
    const t = this.innerRadius(), n = this.outerRadius(), i = this.clockwise(), s = wa.Konva.getAngle(i ? 360 - this.angle() : this.angle()), r = Math.cos(Math.min(s, Math.PI)), o = 1, a = Math.sin(Math.min(Math.max(Math.PI, s), 3 * Math.PI / 2)), l = Math.sin(Math.min(s, Math.PI / 2)), h = r * (r > 0 ? t : n), c = o * n, g = a * (a > 0 ? t : n), f = l * (l > 0 ? n : t);
    return {
      x: h,
      y: i ? -1 * f : g,
      width: c - h,
      height: f - g
    };
  }
}
bs.Arc = De;
De.prototype._centroid = !0;
De.prototype.className = "Arc";
De.prototype._attrsAffectingSize = [
  "innerRadius",
  "outerRadius",
  "angle",
  "clockwise"
];
(0, I1._registerNode)(De);
vs.Factory.addGetterSetter(De, "innerRadius", 0, (0, Ss.getNumberValidator)());
vs.Factory.addGetterSetter(De, "outerRadius", 0, (0, Ss.getNumberValidator)());
vs.Factory.addGetterSetter(De, "angle", 0, (0, Ss.getNumberValidator)());
vs.Factory.addGetterSetter(De, "clockwise", !1, (0, Ss.getBooleanValidator)());
var Cs = {}, wi = {};
Object.defineProperty(wi, "__esModule", { value: !0 });
wi.Line = void 0;
const ws = at, G1 = ot, V1 = Dt, oc = Z;
function Hr(e, t, n, i, s, r, o) {
  const a = Math.sqrt(Math.pow(n - e, 2) + Math.pow(i - t, 2)), l = Math.sqrt(Math.pow(s - n, 2) + Math.pow(r - i, 2)), h = o * a / (a + l), c = o * l / (a + l), g = n - h * (s - e), f = i - h * (r - t), _ = n + c * (s - e), u = i + c * (r - t);
  return [g, f, _, u];
}
function xa(e, t) {
  const n = e.length, i = [];
  for (let s = 2; s < n - 2; s += 2) {
    const r = Hr(e[s - 2], e[s - 1], e[s], e[s + 1], e[s + 2], e[s + 3], t);
    isNaN(r[0]) || (i.push(r[0]), i.push(r[1]), i.push(e[s]), i.push(e[s + 1]), i.push(r[2]), i.push(r[3]));
  }
  return i;
}
class Ye extends V1.Shape {
  constructor(t) {
    super(t), this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
      this._clearCache("tensionPoints");
    });
  }
  _sceneFunc(t) {
    const n = this.points(), i = n.length, s = this.tension(), r = this.closed(), o = this.bezier();
    if (!i)
      return;
    let a = 0;
    if (t.beginPath(), t.moveTo(n[0], n[1]), s !== 0 && i > 4) {
      const l = this.getTensionPoints(), h = l.length;
      for (a = r ? 0 : 4, r || t.quadraticCurveTo(l[0], l[1], l[2], l[3]); a < h - 2; )
        t.bezierCurveTo(l[a++], l[a++], l[a++], l[a++], l[a++], l[a++]);
      r || t.quadraticCurveTo(l[h - 2], l[h - 1], n[i - 2], n[i - 1]);
    } else if (o)
      for (a = 2; a < i; )
        t.bezierCurveTo(n[a++], n[a++], n[a++], n[a++], n[a++], n[a++]);
    else
      for (a = 2; a < i; a += 2)
        t.lineTo(n[a], n[a + 1]);
    r ? (t.closePath(), t.fillStrokeShape(this)) : t.strokeShape(this);
  }
  getTensionPoints() {
    return this._getCache("tensionPoints", this._getTensionPoints);
  }
  _getTensionPoints() {
    return this.closed() ? this._getTensionPointsClosed() : xa(this.points(), this.tension());
  }
  _getTensionPointsClosed() {
    const t = this.points(), n = t.length, i = this.tension(), s = Hr(t[n - 2], t[n - 1], t[0], t[1], t[2], t[3], i), r = Hr(t[n - 4], t[n - 3], t[n - 2], t[n - 1], t[0], t[1], i), o = xa(t, i);
    return [s[2], s[3]].concat(o).concat([
      r[0],
      r[1],
      t[n - 2],
      t[n - 1],
      r[2],
      r[3],
      s[0],
      s[1],
      t[0],
      t[1]
    ]);
  }
  getWidth() {
    return this.getSelfRect().width;
  }
  getHeight() {
    return this.getSelfRect().height;
  }
  getSelfRect() {
    let t = this.points();
    if (t.length < 4)
      return {
        x: t[0] || 0,
        y: t[1] || 0,
        width: 0,
        height: 0
      };
    this.tension() !== 0 ? t = [
      t[0],
      t[1],
      ...this._getTensionPoints(),
      t[t.length - 2],
      t[t.length - 1]
    ] : t = this.points();
    let n = t[0], i = t[0], s = t[1], r = t[1], o, a;
    for (let l = 0; l < t.length / 2; l++)
      o = t[l * 2], a = t[l * 2 + 1], n = Math.min(n, o), i = Math.max(i, o), s = Math.min(s, a), r = Math.max(r, a);
    return {
      x: n,
      y: s,
      width: i - n,
      height: r - s
    };
  }
}
wi.Line = Ye;
Ye.prototype.className = "Line";
Ye.prototype._attrsAffectingSize = ["points", "bezier", "tension"];
(0, G1._registerNode)(Ye);
ws.Factory.addGetterSetter(Ye, "closed", !1);
ws.Factory.addGetterSetter(Ye, "bezier", !1);
ws.Factory.addGetterSetter(Ye, "tension", 0, (0, oc.getNumberValidator)());
ws.Factory.addGetterSetter(Ye, "points", [], (0, oc.getNumberArrayValidator)());
var Wn = {}, ac = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.t2length = e.getQuadraticArcLength = e.getCubicArcLength = e.binomialCoefficients = e.cValues = e.tValues = void 0, e.tValues = [
    [],
    [],
    [
      -0.5773502691896257,
      0.5773502691896257
    ],
    [
      0,
      -0.7745966692414834,
      0.7745966692414834
    ],
    [
      -0.33998104358485626,
      0.33998104358485626,
      -0.8611363115940526,
      0.8611363115940526
    ],
    [
      0,
      -0.5384693101056831,
      0.5384693101056831,
      -0.906179845938664,
      0.906179845938664
    ],
    [
      0.6612093864662645,
      -0.6612093864662645,
      -0.2386191860831969,
      0.2386191860831969,
      -0.932469514203152,
      0.932469514203152
    ],
    [
      0,
      0.4058451513773972,
      -0.4058451513773972,
      -0.7415311855993945,
      0.7415311855993945,
      -0.9491079123427585,
      0.9491079123427585
    ],
    [
      -0.1834346424956498,
      0.1834346424956498,
      -0.525532409916329,
      0.525532409916329,
      -0.7966664774136267,
      0.7966664774136267,
      -0.9602898564975363,
      0.9602898564975363
    ],
    [
      0,
      -0.8360311073266358,
      0.8360311073266358,
      -0.9681602395076261,
      0.9681602395076261,
      -0.3242534234038089,
      0.3242534234038089,
      -0.6133714327005904,
      0.6133714327005904
    ],
    [
      -0.14887433898163122,
      0.14887433898163122,
      -0.4333953941292472,
      0.4333953941292472,
      -0.6794095682990244,
      0.6794095682990244,
      -0.8650633666889845,
      0.8650633666889845,
      -0.9739065285171717,
      0.9739065285171717
    ],
    [
      0,
      -0.26954315595234496,
      0.26954315595234496,
      -0.5190961292068118,
      0.5190961292068118,
      -0.7301520055740494,
      0.7301520055740494,
      -0.8870625997680953,
      0.8870625997680953,
      -0.978228658146057,
      0.978228658146057
    ],
    [
      -0.1252334085114689,
      0.1252334085114689,
      -0.3678314989981802,
      0.3678314989981802,
      -0.5873179542866175,
      0.5873179542866175,
      -0.7699026741943047,
      0.7699026741943047,
      -0.9041172563704749,
      0.9041172563704749,
      -0.9815606342467192,
      0.9815606342467192
    ],
    [
      0,
      -0.2304583159551348,
      0.2304583159551348,
      -0.44849275103644687,
      0.44849275103644687,
      -0.6423493394403402,
      0.6423493394403402,
      -0.8015780907333099,
      0.8015780907333099,
      -0.9175983992229779,
      0.9175983992229779,
      -0.9841830547185881,
      0.9841830547185881
    ],
    [
      -0.10805494870734367,
      0.10805494870734367,
      -0.31911236892788974,
      0.31911236892788974,
      -0.5152486363581541,
      0.5152486363581541,
      -0.6872929048116855,
      0.6872929048116855,
      -0.827201315069765,
      0.827201315069765,
      -0.9284348836635735,
      0.9284348836635735,
      -0.9862838086968123,
      0.9862838086968123
    ],
    [
      0,
      -0.20119409399743451,
      0.20119409399743451,
      -0.3941513470775634,
      0.3941513470775634,
      -0.5709721726085388,
      0.5709721726085388,
      -0.7244177313601701,
      0.7244177313601701,
      -0.8482065834104272,
      0.8482065834104272,
      -0.937273392400706,
      0.937273392400706,
      -0.9879925180204854,
      0.9879925180204854
    ],
    [
      -0.09501250983763744,
      0.09501250983763744,
      -0.2816035507792589,
      0.2816035507792589,
      -0.45801677765722737,
      0.45801677765722737,
      -0.6178762444026438,
      0.6178762444026438,
      -0.755404408355003,
      0.755404408355003,
      -0.8656312023878318,
      0.8656312023878318,
      -0.9445750230732326,
      0.9445750230732326,
      -0.9894009349916499,
      0.9894009349916499
    ],
    [
      0,
      -0.17848418149584785,
      0.17848418149584785,
      -0.3512317634538763,
      0.3512317634538763,
      -0.5126905370864769,
      0.5126905370864769,
      -0.6576711592166907,
      0.6576711592166907,
      -0.7815140038968014,
      0.7815140038968014,
      -0.8802391537269859,
      0.8802391537269859,
      -0.9506755217687678,
      0.9506755217687678,
      -0.9905754753144174,
      0.9905754753144174
    ],
    [
      -0.0847750130417353,
      0.0847750130417353,
      -0.2518862256915055,
      0.2518862256915055,
      -0.41175116146284263,
      0.41175116146284263,
      -0.5597708310739475,
      0.5597708310739475,
      -0.6916870430603532,
      0.6916870430603532,
      -0.8037049589725231,
      0.8037049589725231,
      -0.8926024664975557,
      0.8926024664975557,
      -0.9558239495713977,
      0.9558239495713977,
      -0.9915651684209309,
      0.9915651684209309
    ],
    [
      0,
      -0.16035864564022537,
      0.16035864564022537,
      -0.31656409996362983,
      0.31656409996362983,
      -0.46457074137596094,
      0.46457074137596094,
      -0.600545304661681,
      0.600545304661681,
      -0.7209661773352294,
      0.7209661773352294,
      -0.8227146565371428,
      0.8227146565371428,
      -0.9031559036148179,
      0.9031559036148179,
      -0.96020815213483,
      0.96020815213483,
      -0.9924068438435844,
      0.9924068438435844
    ],
    [
      -0.07652652113349734,
      0.07652652113349734,
      -0.22778585114164507,
      0.22778585114164507,
      -0.37370608871541955,
      0.37370608871541955,
      -0.5108670019508271,
      0.5108670019508271,
      -0.636053680726515,
      0.636053680726515,
      -0.7463319064601508,
      0.7463319064601508,
      -0.8391169718222188,
      0.8391169718222188,
      -0.912234428251326,
      0.912234428251326,
      -0.9639719272779138,
      0.9639719272779138,
      -0.9931285991850949,
      0.9931285991850949
    ],
    [
      0,
      -0.1455618541608951,
      0.1455618541608951,
      -0.2880213168024011,
      0.2880213168024011,
      -0.4243421202074388,
      0.4243421202074388,
      -0.5516188358872198,
      0.5516188358872198,
      -0.6671388041974123,
      0.6671388041974123,
      -0.7684399634756779,
      0.7684399634756779,
      -0.8533633645833173,
      0.8533633645833173,
      -0.9200993341504008,
      0.9200993341504008,
      -0.9672268385663063,
      0.9672268385663063,
      -0.9937521706203895,
      0.9937521706203895
    ],
    [
      -0.06973927331972223,
      0.06973927331972223,
      -0.20786042668822127,
      0.20786042668822127,
      -0.34193582089208424,
      0.34193582089208424,
      -0.469355837986757,
      0.469355837986757,
      -0.5876404035069116,
      0.5876404035069116,
      -0.6944872631866827,
      0.6944872631866827,
      -0.7878168059792081,
      0.7878168059792081,
      -0.8658125777203002,
      0.8658125777203002,
      -0.926956772187174,
      0.926956772187174,
      -0.9700604978354287,
      0.9700604978354287,
      -0.9942945854823992,
      0.9942945854823992
    ],
    [
      0,
      -0.1332568242984661,
      0.1332568242984661,
      -0.26413568097034495,
      0.26413568097034495,
      -0.3903010380302908,
      0.3903010380302908,
      -0.5095014778460075,
      0.5095014778460075,
      -0.6196098757636461,
      0.6196098757636461,
      -0.7186613631319502,
      0.7186613631319502,
      -0.8048884016188399,
      0.8048884016188399,
      -0.8767523582704416,
      0.8767523582704416,
      -0.9329710868260161,
      0.9329710868260161,
      -0.9725424712181152,
      0.9725424712181152,
      -0.9947693349975522,
      0.9947693349975522
    ],
    [
      -0.06405689286260563,
      0.06405689286260563,
      -0.1911188674736163,
      0.1911188674736163,
      -0.3150426796961634,
      0.3150426796961634,
      -0.4337935076260451,
      0.4337935076260451,
      -0.5454214713888396,
      0.5454214713888396,
      -0.6480936519369755,
      0.6480936519369755,
      -0.7401241915785544,
      0.7401241915785544,
      -0.820001985973903,
      0.820001985973903,
      -0.8864155270044011,
      0.8864155270044011,
      -0.9382745520027328,
      0.9382745520027328,
      -0.9747285559713095,
      0.9747285559713095,
      -0.9951872199970213,
      0.9951872199970213
    ]
  ], e.cValues = [
    [],
    [],
    [1, 1],
    [
      0.8888888888888888,
      0.5555555555555556,
      0.5555555555555556
    ],
    [
      0.6521451548625461,
      0.6521451548625461,
      0.34785484513745385,
      0.34785484513745385
    ],
    [
      0.5688888888888889,
      0.47862867049936647,
      0.47862867049936647,
      0.23692688505618908,
      0.23692688505618908
    ],
    [
      0.3607615730481386,
      0.3607615730481386,
      0.46791393457269104,
      0.46791393457269104,
      0.17132449237917036,
      0.17132449237917036
    ],
    [
      0.4179591836734694,
      0.3818300505051189,
      0.3818300505051189,
      0.27970539148927664,
      0.27970539148927664,
      0.1294849661688697,
      0.1294849661688697
    ],
    [
      0.362683783378362,
      0.362683783378362,
      0.31370664587788727,
      0.31370664587788727,
      0.22238103445337448,
      0.22238103445337448,
      0.10122853629037626,
      0.10122853629037626
    ],
    [
      0.3302393550012598,
      0.1806481606948574,
      0.1806481606948574,
      0.08127438836157441,
      0.08127438836157441,
      0.31234707704000286,
      0.31234707704000286,
      0.26061069640293544,
      0.26061069640293544
    ],
    [
      0.29552422471475287,
      0.29552422471475287,
      0.26926671930999635,
      0.26926671930999635,
      0.21908636251598204,
      0.21908636251598204,
      0.1494513491505806,
      0.1494513491505806,
      0.06667134430868814,
      0.06667134430868814
    ],
    [
      0.2729250867779006,
      0.26280454451024665,
      0.26280454451024665,
      0.23319376459199048,
      0.23319376459199048,
      0.18629021092773426,
      0.18629021092773426,
      0.1255803694649046,
      0.1255803694649046,
      0.05566856711617366,
      0.05566856711617366
    ],
    [
      0.24914704581340277,
      0.24914704581340277,
      0.2334925365383548,
      0.2334925365383548,
      0.20316742672306592,
      0.20316742672306592,
      0.16007832854334622,
      0.16007832854334622,
      0.10693932599531843,
      0.10693932599531843,
      0.04717533638651183,
      0.04717533638651183
    ],
    [
      0.2325515532308739,
      0.22628318026289723,
      0.22628318026289723,
      0.2078160475368885,
      0.2078160475368885,
      0.17814598076194574,
      0.17814598076194574,
      0.13887351021978725,
      0.13887351021978725,
      0.09212149983772845,
      0.09212149983772845,
      0.04048400476531588,
      0.04048400476531588
    ],
    [
      0.2152638534631578,
      0.2152638534631578,
      0.2051984637212956,
      0.2051984637212956,
      0.18553839747793782,
      0.18553839747793782,
      0.15720316715819355,
      0.15720316715819355,
      0.12151857068790319,
      0.12151857068790319,
      0.08015808715976021,
      0.08015808715976021,
      0.03511946033175186,
      0.03511946033175186
    ],
    [
      0.2025782419255613,
      0.19843148532711158,
      0.19843148532711158,
      0.1861610000155622,
      0.1861610000155622,
      0.16626920581699392,
      0.16626920581699392,
      0.13957067792615432,
      0.13957067792615432,
      0.10715922046717194,
      0.10715922046717194,
      0.07036604748810812,
      0.07036604748810812,
      0.03075324199611727,
      0.03075324199611727
    ],
    [
      0.1894506104550685,
      0.1894506104550685,
      0.18260341504492358,
      0.18260341504492358,
      0.16915651939500254,
      0.16915651939500254,
      0.14959598881657674,
      0.14959598881657674,
      0.12462897125553388,
      0.12462897125553388,
      0.09515851168249279,
      0.09515851168249279,
      0.062253523938647894,
      0.062253523938647894,
      0.027152459411754096,
      0.027152459411754096
    ],
    [
      0.17944647035620653,
      0.17656270536699264,
      0.17656270536699264,
      0.16800410215645004,
      0.16800410215645004,
      0.15404576107681028,
      0.15404576107681028,
      0.13513636846852548,
      0.13513636846852548,
      0.11188384719340397,
      0.11188384719340397,
      0.08503614831717918,
      0.08503614831717918,
      0.0554595293739872,
      0.0554595293739872,
      0.02414830286854793,
      0.02414830286854793
    ],
    [
      0.1691423829631436,
      0.1691423829631436,
      0.16427648374583273,
      0.16427648374583273,
      0.15468467512626524,
      0.15468467512626524,
      0.14064291467065065,
      0.14064291467065065,
      0.12255520671147846,
      0.12255520671147846,
      0.10094204410628717,
      0.10094204410628717,
      0.07642573025488905,
      0.07642573025488905,
      0.0497145488949698,
      0.0497145488949698,
      0.02161601352648331,
      0.02161601352648331
    ],
    [
      0.1610544498487837,
      0.15896884339395434,
      0.15896884339395434,
      0.15276604206585967,
      0.15276604206585967,
      0.1426067021736066,
      0.1426067021736066,
      0.12875396253933621,
      0.12875396253933621,
      0.11156664554733399,
      0.11156664554733399,
      0.09149002162245,
      0.09149002162245,
      0.06904454273764123,
      0.06904454273764123,
      0.0448142267656996,
      0.0448142267656996,
      0.019461788229726478,
      0.019461788229726478
    ],
    [
      0.15275338713072584,
      0.15275338713072584,
      0.14917298647260374,
      0.14917298647260374,
      0.14209610931838204,
      0.14209610931838204,
      0.13168863844917664,
      0.13168863844917664,
      0.11819453196151841,
      0.11819453196151841,
      0.10193011981724044,
      0.10193011981724044,
      0.08327674157670475,
      0.08327674157670475,
      0.06267204833410907,
      0.06267204833410907,
      0.04060142980038694,
      0.04060142980038694,
      0.017614007139152118,
      0.017614007139152118
    ],
    [
      0.14608113364969041,
      0.14452440398997005,
      0.14452440398997005,
      0.13988739479107315,
      0.13988739479107315,
      0.13226893863333747,
      0.13226893863333747,
      0.12183141605372853,
      0.12183141605372853,
      0.10879729916714838,
      0.10879729916714838,
      0.09344442345603386,
      0.09344442345603386,
      0.0761001136283793,
      0.0761001136283793,
      0.057134425426857205,
      0.057134425426857205,
      0.036953789770852494,
      0.036953789770852494,
      0.016017228257774335,
      0.016017228257774335
    ],
    [
      0.13925187285563198,
      0.13925187285563198,
      0.13654149834601517,
      0.13654149834601517,
      0.13117350478706238,
      0.13117350478706238,
      0.12325237681051242,
      0.12325237681051242,
      0.11293229608053922,
      0.11293229608053922,
      0.10041414444288096,
      0.10041414444288096,
      0.08594160621706773,
      0.08594160621706773,
      0.06979646842452049,
      0.06979646842452049,
      0.052293335152683286,
      0.052293335152683286,
      0.03377490158481415,
      0.03377490158481415,
      0.0146279952982722,
      0.0146279952982722
    ],
    [
      0.13365457218610619,
      0.1324620394046966,
      0.1324620394046966,
      0.12890572218808216,
      0.12890572218808216,
      0.12304908430672953,
      0.12304908430672953,
      0.11499664022241136,
      0.11499664022241136,
      0.10489209146454141,
      0.10489209146454141,
      0.09291576606003515,
      0.09291576606003515,
      0.07928141177671895,
      0.07928141177671895,
      0.06423242140852585,
      0.06423242140852585,
      0.04803767173108467,
      0.04803767173108467,
      0.030988005856979445,
      0.030988005856979445,
      0.013411859487141771,
      0.013411859487141771
    ],
    [
      0.12793819534675216,
      0.12793819534675216,
      0.1258374563468283,
      0.1258374563468283,
      0.12167047292780339,
      0.12167047292780339,
      0.1155056680537256,
      0.1155056680537256,
      0.10744427011596563,
      0.10744427011596563,
      0.09761865210411388,
      0.09761865210411388,
      0.08619016153195327,
      0.08619016153195327,
      0.0733464814110803,
      0.0733464814110803,
      0.05929858491543678,
      0.05929858491543678,
      0.04427743881741981,
      0.04427743881741981,
      0.028531388628933663,
      0.028531388628933663,
      0.0123412297999872,
      0.0123412297999872
    ]
  ], e.binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
  const t = (o, a, l) => {
    let h, c;
    const f = l / 2;
    h = 0;
    for (let _ = 0; _ < 20; _++)
      c = f * e.tValues[20][_] + f, h += e.cValues[20][_] * i(o, a, c);
    return f * h;
  };
  e.getCubicArcLength = t;
  const n = (o, a, l) => {
    l === void 0 && (l = 1);
    const h = o[0] - 2 * o[1] + o[2], c = a[0] - 2 * a[1] + a[2], g = 2 * o[1] - 2 * o[0], f = 2 * a[1] - 2 * a[0], _ = 4 * (h * h + c * c), u = 4 * (h * g + c * f), m = g * g + f * f;
    if (_ === 0)
      return l * Math.sqrt(Math.pow(o[2] - o[0], 2) + Math.pow(a[2] - a[0], 2));
    const y = u / (2 * _), C = m / _, x = l + y, d = C - y * y, p = x * x + d > 0 ? Math.sqrt(x * x + d) : 0, v = y * y + d > 0 ? Math.sqrt(y * y + d) : 0, P = y + Math.sqrt(y * y + d) !== 0 ? d * Math.log(Math.abs((x + p) / (y + v))) : 0;
    return Math.sqrt(_) / 2 * (x * p - y * v + P);
  };
  e.getQuadraticArcLength = n;
  function i(o, a, l) {
    const h = s(1, l, o), c = s(1, l, a), g = h * h + c * c;
    return Math.sqrt(g);
  }
  const s = (o, a, l) => {
    const h = l.length - 1;
    let c, g;
    if (h === 0)
      return 0;
    if (o === 0) {
      g = 0;
      for (let f = 0; f <= h; f++)
        g += e.binomialCoefficients[h][f] * Math.pow(1 - a, h - f) * Math.pow(a, f) * l[f];
      return g;
    } else {
      c = new Array(h);
      for (let f = 0; f < h; f++)
        c[f] = h * (l[f + 1] - l[f]);
      return s(o - 1, a, c);
    }
  }, r = (o, a, l) => {
    let h = 1, c = o / a, g = (o - l(c)) / a, f = 0;
    for (; h > 1e-3; ) {
      const _ = l(c + g), u = Math.abs(o - _) / a;
      if (u < h)
        h = u, c += g;
      else {
        const m = l(c - g), y = Math.abs(o - m) / a;
        y < h ? (h = y, c -= g) : g /= 2;
      }
      if (f++, f > 500)
        break;
    }
    return c;
  };
  e.t2length = r;
})(ac);
Object.defineProperty(Wn, "__esModule", { value: !0 });
Wn.Path = void 0;
const U1 = at, B1 = ot, H1 = Dt, En = ac;
class Ft extends H1.Shape {
  constructor(t) {
    super(t), this.dataArray = [], this.pathLength = 0, this._readDataAttribute(), this.on("dataChange.konva", function() {
      this._readDataAttribute();
    });
  }
  _readDataAttribute() {
    this.dataArray = Ft.parsePathData(this.data()), this.pathLength = Ft.getPathLength(this.dataArray);
  }
  _sceneFunc(t) {
    const n = this.dataArray;
    t.beginPath();
    let i = !1;
    for (let s = 0; s < n.length; s++) {
      const r = n[s].command, o = n[s].points;
      switch (r) {
        case "L":
          t.lineTo(o[0], o[1]);
          break;
        case "M":
          t.moveTo(o[0], o[1]);
          break;
        case "C":
          t.bezierCurveTo(o[0], o[1], o[2], o[3], o[4], o[5]);
          break;
        case "Q":
          t.quadraticCurveTo(o[0], o[1], o[2], o[3]);
          break;
        case "A":
          const a = o[0], l = o[1], h = o[2], c = o[3], g = o[4], f = o[5], _ = o[6], u = o[7], m = h > c ? h : c, y = h > c ? 1 : h / c, C = h > c ? c / h : 1;
          t.translate(a, l), t.rotate(_), t.scale(y, C), t.arc(0, 0, m, g, g + f, 1 - u), t.scale(1 / y, 1 / C), t.rotate(-_), t.translate(-a, -l);
          break;
        case "z":
          i = !0, t.closePath();
          break;
      }
    }
    !i && !this.hasFill() ? t.strokeShape(this) : t.fillStrokeShape(this);
  }
  getSelfRect() {
    let t = [];
    this.dataArray.forEach(function(l) {
      if (l.command === "A") {
        const h = l.points[4], c = l.points[5], g = l.points[4] + c;
        let f = Math.PI / 180;
        if (Math.abs(h - g) < f && (f = Math.abs(h - g)), c < 0)
          for (let _ = h - f; _ > g; _ -= f) {
            const u = Ft.getPointOnEllipticalArc(l.points[0], l.points[1], l.points[2], l.points[3], _, 0);
            t.push(u.x, u.y);
          }
        else
          for (let _ = h + f; _ < g; _ += f) {
            const u = Ft.getPointOnEllipticalArc(l.points[0], l.points[1], l.points[2], l.points[3], _, 0);
            t.push(u.x, u.y);
          }
      } else if (l.command === "C")
        for (let h = 0; h <= 1; h += 0.01) {
          const c = Ft.getPointOnCubicBezier(h, l.start.x, l.start.y, l.points[0], l.points[1], l.points[2], l.points[3], l.points[4], l.points[5]);
          t.push(c.x, c.y);
        }
      else
        t = t.concat(l.points);
    });
    let n = t[0], i = t[0], s = t[1], r = t[1], o, a;
    for (let l = 0; l < t.length / 2; l++)
      o = t[l * 2], a = t[l * 2 + 1], isNaN(o) || (n = Math.min(n, o), i = Math.max(i, o)), isNaN(a) || (s = Math.min(s, a), r = Math.max(r, a));
    return {
      x: n,
      y: s,
      width: i - n,
      height: r - s
    };
  }
  getLength() {
    return this.pathLength;
  }
  getPointAtLength(t) {
    return Ft.getPointAtLengthOfDataArray(t, this.dataArray);
  }
  static getLineLength(t, n, i, s) {
    return Math.sqrt((i - t) * (i - t) + (s - n) * (s - n));
  }
  static getPathLength(t) {
    let n = 0;
    for (let i = 0; i < t.length; ++i)
      n += t[i].pathLength;
    return n;
  }
  static getPointAtLengthOfDataArray(t, n) {
    let i, s = 0, r = n.length;
    if (!r)
      return null;
    for (; s < r && t > n[s].pathLength; )
      t -= n[s].pathLength, ++s;
    if (s === r)
      return i = n[s - 1].points.slice(-2), {
        x: i[0],
        y: i[1]
      };
    if (t < 0.01)
      return n[s].command === "M" ? (i = n[s].points.slice(0, 2), {
        x: i[0],
        y: i[1]
      }) : {
        x: n[s].start.x,
        y: n[s].start.y
      };
    const o = n[s], a = o.points;
    switch (o.command) {
      case "L":
        return Ft.getPointOnLine(t, o.start.x, o.start.y, a[0], a[1]);
      case "C":
        return Ft.getPointOnCubicBezier((0, En.t2length)(t, Ft.getPathLength(n), (m) => (0, En.getCubicArcLength)([o.start.x, a[0], a[2], a[4]], [o.start.y, a[1], a[3], a[5]], m)), o.start.x, o.start.y, a[0], a[1], a[2], a[3], a[4], a[5]);
      case "Q":
        return Ft.getPointOnQuadraticBezier((0, En.t2length)(t, Ft.getPathLength(n), (m) => (0, En.getQuadraticArcLength)([o.start.x, a[0], a[2]], [o.start.y, a[1], a[3]], m)), o.start.x, o.start.y, a[0], a[1], a[2], a[3]);
      case "A":
        const l = a[0], h = a[1], c = a[2], g = a[3], f = a[5], _ = a[6];
        let u = a[4];
        return u += f * t / o.pathLength, Ft.getPointOnEllipticalArc(l, h, c, g, u, _);
    }
    return null;
  }
  static getPointOnLine(t, n, i, s, r, o, a) {
    o = o ?? n, a = a ?? i;
    const l = this.getLineLength(n, i, s, r);
    if (l < 1e-10)
      return { x: n, y: i };
    if (s === n)
      return { x: o, y: a + (r > i ? t : -t) };
    const h = (r - i) / (s - n), c = Math.sqrt(t * t / (1 + h * h)) * (s < n ? -1 : 1), g = h * c;
    if (Math.abs(a - i - h * (o - n)) < 1e-10)
      return { x: o + c, y: a + g };
    const f = ((o - n) * (s - n) + (a - i) * (r - i)) / (l * l), _ = n + f * (s - n), u = i + f * (r - i), m = this.getLineLength(o, a, _, u), y = Math.sqrt(t * t - m * m), C = Math.sqrt(y * y / (1 + h * h)) * (s < n ? -1 : 1), x = h * C;
    return { x: _ + C, y: u + x };
  }
  static getPointOnCubicBezier(t, n, i, s, r, o, a, l, h) {
    function c(y) {
      return y * y * y;
    }
    function g(y) {
      return 3 * y * y * (1 - y);
    }
    function f(y) {
      return 3 * y * (1 - y) * (1 - y);
    }
    function _(y) {
      return (1 - y) * (1 - y) * (1 - y);
    }
    const u = l * c(t) + o * g(t) + s * f(t) + n * _(t), m = h * c(t) + a * g(t) + r * f(t) + i * _(t);
    return { x: u, y: m };
  }
  static getPointOnQuadraticBezier(t, n, i, s, r, o, a) {
    function l(_) {
      return _ * _;
    }
    function h(_) {
      return 2 * _ * (1 - _);
    }
    function c(_) {
      return (1 - _) * (1 - _);
    }
    const g = o * l(t) + s * h(t) + n * c(t), f = a * l(t) + r * h(t) + i * c(t);
    return { x: g, y: f };
  }
  static getPointOnEllipticalArc(t, n, i, s, r, o) {
    const a = Math.cos(o), l = Math.sin(o), h = {
      x: i * Math.cos(r),
      y: s * Math.sin(r)
    };
    return {
      x: t + (h.x * a - h.y * l),
      y: n + (h.x * l + h.y * a)
    };
  }
  static parsePathData(t) {
    if (!t)
      return [];
    let n = t;
    const i = [
      "m",
      "M",
      "l",
      "L",
      "v",
      "V",
      "h",
      "H",
      "z",
      "Z",
      "c",
      "C",
      "q",
      "Q",
      "t",
      "T",
      "s",
      "S",
      "a",
      "A"
    ];
    n = n.replace(new RegExp(" ", "g"), ",");
    for (let g = 0; g < i.length; g++)
      n = n.replace(new RegExp(i[g], "g"), "|" + i[g]);
    const s = n.split("|"), r = [], o = [];
    let a = 0, l = 0;
    const h = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
    let c;
    for (let g = 1; g < s.length; g++) {
      let f = s[g], _ = f.charAt(0);
      for (f = f.slice(1), o.length = 0; c = h.exec(f); )
        o.push(c[0]);
      const u = [];
      for (let m = 0, y = o.length; m < y; m++) {
        if (o[m] === "00") {
          u.push(0, 0);
          continue;
        }
        const C = parseFloat(o[m]);
        isNaN(C) ? u.push(0) : u.push(C);
      }
      for (; u.length > 0 && !isNaN(u[0]); ) {
        let m = "", y = [];
        const C = a, x = l;
        let d, p, v, P, R, S, k, T, M, F;
        switch (_) {
          case "l":
            a += u.shift(), l += u.shift(), m = "L", y.push(a, l);
            break;
          case "L":
            a = u.shift(), l = u.shift(), y.push(a, l);
            break;
          case "m":
            const B = u.shift(), Y = u.shift();
            if (a += B, l += Y, m = "M", r.length > 2 && r[r.length - 1].command === "z") {
              for (let $ = r.length - 2; $ >= 0; $--)
                if (r[$].command === "M") {
                  a = r[$].points[0] + B, l = r[$].points[1] + Y;
                  break;
                }
            }
            y.push(a, l), _ = "l";
            break;
          case "M":
            a = u.shift(), l = u.shift(), m = "M", y.push(a, l), _ = "L";
            break;
          case "h":
            a += u.shift(), m = "L", y.push(a, l);
            break;
          case "H":
            a = u.shift(), m = "L", y.push(a, l);
            break;
          case "v":
            l += u.shift(), m = "L", y.push(a, l);
            break;
          case "V":
            l = u.shift(), m = "L", y.push(a, l);
            break;
          case "C":
            y.push(u.shift(), u.shift(), u.shift(), u.shift()), a = u.shift(), l = u.shift(), y.push(a, l);
            break;
          case "c":
            y.push(a + u.shift(), l + u.shift(), a + u.shift(), l + u.shift()), a += u.shift(), l += u.shift(), m = "C", y.push(a, l);
            break;
          case "S":
            p = a, v = l, d = r[r.length - 1], d.command === "C" && (p = a + (a - d.points[2]), v = l + (l - d.points[3])), y.push(p, v, u.shift(), u.shift()), a = u.shift(), l = u.shift(), m = "C", y.push(a, l);
            break;
          case "s":
            p = a, v = l, d = r[r.length - 1], d.command === "C" && (p = a + (a - d.points[2]), v = l + (l - d.points[3])), y.push(p, v, a + u.shift(), l + u.shift()), a += u.shift(), l += u.shift(), m = "C", y.push(a, l);
            break;
          case "Q":
            y.push(u.shift(), u.shift()), a = u.shift(), l = u.shift(), y.push(a, l);
            break;
          case "q":
            y.push(a + u.shift(), l + u.shift()), a += u.shift(), l += u.shift(), m = "Q", y.push(a, l);
            break;
          case "T":
            p = a, v = l, d = r[r.length - 1], d.command === "Q" && (p = a + (a - d.points[0]), v = l + (l - d.points[1])), a = u.shift(), l = u.shift(), m = "Q", y.push(p, v, a, l);
            break;
          case "t":
            p = a, v = l, d = r[r.length - 1], d.command === "Q" && (p = a + (a - d.points[0]), v = l + (l - d.points[1])), a += u.shift(), l += u.shift(), m = "Q", y.push(p, v, a, l);
            break;
          case "A":
            P = u.shift(), R = u.shift(), S = u.shift(), k = u.shift(), T = u.shift(), M = a, F = l, a = u.shift(), l = u.shift(), m = "A", y = this.convertEndpointToCenterParameterization(M, F, a, l, k, T, P, R, S);
            break;
          case "a":
            P = u.shift(), R = u.shift(), S = u.shift(), k = u.shift(), T = u.shift(), M = a, F = l, a += u.shift(), l += u.shift(), m = "A", y = this.convertEndpointToCenterParameterization(M, F, a, l, k, T, P, R, S);
            break;
        }
        r.push({
          command: m || _,
          points: y,
          start: {
            x: C,
            y: x
          },
          pathLength: this.calcLength(C, x, m || _, y)
        });
      }
      (_ === "z" || _ === "Z") && r.push({
        command: "z",
        points: [],
        start: void 0,
        pathLength: 0
      });
    }
    return r;
  }
  static calcLength(t, n, i, s) {
    let r, o, a, l;
    const h = Ft;
    switch (i) {
      case "L":
        return h.getLineLength(t, n, s[0], s[1]);
      case "C":
        return (0, En.getCubicArcLength)([t, s[0], s[2], s[4]], [n, s[1], s[3], s[5]], 1);
      case "Q":
        return (0, En.getQuadraticArcLength)([t, s[0], s[2]], [n, s[1], s[3]], 1);
      case "A":
        r = 0;
        const c = s[4], g = s[5], f = s[4] + g;
        let _ = Math.PI / 180;
        if (Math.abs(c - f) < _ && (_ = Math.abs(c - f)), o = h.getPointOnEllipticalArc(s[0], s[1], s[2], s[3], c, 0), g < 0)
          for (l = c - _; l > f; l -= _)
            a = h.getPointOnEllipticalArc(s[0], s[1], s[2], s[3], l, 0), r += h.getLineLength(o.x, o.y, a.x, a.y), o = a;
        else
          for (l = c + _; l < f; l += _)
            a = h.getPointOnEllipticalArc(s[0], s[1], s[2], s[3], l, 0), r += h.getLineLength(o.x, o.y, a.x, a.y), o = a;
        return a = h.getPointOnEllipticalArc(s[0], s[1], s[2], s[3], f, 0), r += h.getLineLength(o.x, o.y, a.x, a.y), r;
    }
    return 0;
  }
  static convertEndpointToCenterParameterization(t, n, i, s, r, o, a, l, h) {
    const c = h * (Math.PI / 180), g = Math.cos(c) * (t - i) / 2 + Math.sin(c) * (n - s) / 2, f = -1 * Math.sin(c) * (t - i) / 2 + Math.cos(c) * (n - s) / 2, _ = g * g / (a * a) + f * f / (l * l);
    _ > 1 && (a *= Math.sqrt(_), l *= Math.sqrt(_));
    let u = Math.sqrt((a * a * (l * l) - a * a * (f * f) - l * l * (g * g)) / (a * a * (f * f) + l * l * (g * g)));
    r === o && (u *= -1), isNaN(u) && (u = 0);
    const m = u * a * f / l, y = u * -l * g / a, C = (t + i) / 2 + Math.cos(c) * m - Math.sin(c) * y, x = (n + s) / 2 + Math.sin(c) * m + Math.cos(c) * y, d = function(T) {
      return Math.sqrt(T[0] * T[0] + T[1] * T[1]);
    }, p = function(T, M) {
      return (T[0] * M[0] + T[1] * M[1]) / (d(T) * d(M));
    }, v = function(T, M) {
      return (T[0] * M[1] < T[1] * M[0] ? -1 : 1) * Math.acos(p(T, M));
    }, P = v([1, 0], [(g - m) / a, (f - y) / l]), R = [(g - m) / a, (f - y) / l], S = [(-1 * g - m) / a, (-1 * f - y) / l];
    let k = v(R, S);
    return p(R, S) <= -1 && (k = Math.PI), p(R, S) >= 1 && (k = 0), o === 0 && k > 0 && (k = k - 2 * Math.PI), o === 1 && k < 0 && (k = k + 2 * Math.PI), [C, x, a, l, P, k, c, o];
  }
}
Wn.Path = Ft;
Ft.prototype.className = "Path";
Ft.prototype._attrsAffectingSize = ["data"];
(0, B1._registerNode)(Ft);
U1.Factory.addGetterSetter(Ft, "data");
Object.defineProperty(Cs, "__esModule", { value: !0 });
Cs.Arrow = void 0;
const xs = at, $1 = wi, lc = Z, j1 = ot, Ea = Wn;
class gn extends $1.Line {
  _sceneFunc(t) {
    super._sceneFunc(t);
    const n = Math.PI * 2, i = this.points();
    let s = i;
    const r = this.tension() !== 0 && i.length > 4;
    r && (s = this.getTensionPoints());
    const o = this.pointerLength(), a = i.length;
    let l, h;
    if (r) {
      const f = [
        s[s.length - 4],
        s[s.length - 3],
        s[s.length - 2],
        s[s.length - 1],
        i[a - 2],
        i[a - 1]
      ], _ = Ea.Path.calcLength(s[s.length - 4], s[s.length - 3], "C", f), u = Ea.Path.getPointOnQuadraticBezier(Math.min(1, 1 - o / _), f[0], f[1], f[2], f[3], f[4], f[5]);
      l = i[a - 2] - u.x, h = i[a - 1] - u.y;
    } else
      l = i[a - 2] - i[a - 4], h = i[a - 1] - i[a - 3];
    const c = (Math.atan2(h, l) + n) % n, g = this.pointerWidth();
    this.pointerAtEnding() && (t.save(), t.beginPath(), t.translate(i[a - 2], i[a - 1]), t.rotate(c), t.moveTo(0, 0), t.lineTo(-o, g / 2), t.lineTo(-o, -g / 2), t.closePath(), t.restore(), this.__fillStroke(t)), this.pointerAtBeginning() && (t.save(), t.beginPath(), t.translate(i[0], i[1]), r ? (l = (s[0] + s[2]) / 2 - i[0], h = (s[1] + s[3]) / 2 - i[1]) : (l = i[2] - i[0], h = i[3] - i[1]), t.rotate((Math.atan2(-h, -l) + n) % n), t.moveTo(0, 0), t.lineTo(-o, g / 2), t.lineTo(-o, -g / 2), t.closePath(), t.restore(), this.__fillStroke(t));
  }
  __fillStroke(t) {
    const n = this.dashEnabled();
    n && (this.attrs.dashEnabled = !1, t.setLineDash([])), t.fillStrokeShape(this), n && (this.attrs.dashEnabled = !0);
  }
  getSelfRect() {
    const t = super.getSelfRect(), n = this.pointerWidth() / 2;
    return {
      x: t.x,
      y: t.y - n,
      width: t.width,
      height: t.height + n * 2
    };
  }
}
Cs.Arrow = gn;
gn.prototype.className = "Arrow";
(0, j1._registerNode)(gn);
xs.Factory.addGetterSetter(gn, "pointerLength", 10, (0, lc.getNumberValidator)());
xs.Factory.addGetterSetter(gn, "pointerWidth", 10, (0, lc.getNumberValidator)());
xs.Factory.addGetterSetter(gn, "pointerAtBeginning", !1);
xs.Factory.addGetterSetter(gn, "pointerAtEnding", !0);
var Es = {};
Object.defineProperty(Es, "__esModule", { value: !0 });
Es.Circle = void 0;
const W1 = at, z1 = Dt, K1 = Z, Y1 = ot;
class zn extends z1.Shape {
  _sceneFunc(t) {
    t.beginPath(), t.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, !1), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(t) {
    this.radius() !== t / 2 && this.radius(t / 2);
  }
  setHeight(t) {
    this.radius() !== t / 2 && this.radius(t / 2);
  }
}
Es.Circle = zn;
zn.prototype._centroid = !0;
zn.prototype.className = "Circle";
zn.prototype._attrsAffectingSize = ["radius"];
(0, Y1._registerNode)(zn);
W1.Factory.addGetterSetter(zn, "radius", 0, (0, K1.getNumberValidator)());
var Ps = {};
Object.defineProperty(Ps, "__esModule", { value: !0 });
Ps.Ellipse = void 0;
const xo = at, X1 = Dt, cc = Z, q1 = ot;
class Xe extends X1.Shape {
  _sceneFunc(t) {
    const n = this.radiusX(), i = this.radiusY();
    t.beginPath(), t.save(), n !== i && t.scale(1, i / n), t.arc(0, 0, n, 0, Math.PI * 2, !1), t.restore(), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.radiusX() * 2;
  }
  getHeight() {
    return this.radiusY() * 2;
  }
  setWidth(t) {
    this.radiusX(t / 2);
  }
  setHeight(t) {
    this.radiusY(t / 2);
  }
}
Ps.Ellipse = Xe;
Xe.prototype.className = "Ellipse";
Xe.prototype._centroid = !0;
Xe.prototype._attrsAffectingSize = ["radiusX", "radiusY"];
(0, q1._registerNode)(Xe);
xo.Factory.addComponentsGetterSetter(Xe, "radius", ["x", "y"]);
xo.Factory.addGetterSetter(Xe, "radiusX", 0, (0, cc.getNumberValidator)());
xo.Factory.addGetterSetter(Xe, "radiusY", 0, (0, cc.getNumberValidator)());
var Ts = {};
Object.defineProperty(Ts, "__esModule", { value: !0 });
Ts.Image = void 0;
const vr = At, pn = at, Z1 = Dt, J1 = ot, xi = Z;
class le extends Z1.Shape {
  constructor(t) {
    super(t), this._loadListener = () => {
      this._requestDraw();
    }, this.on("imageChange.konva", (n) => {
      this._removeImageLoad(n.oldVal), this._setImageLoad();
    }), this._setImageLoad();
  }
  _setImageLoad() {
    const t = this.image();
    t && t.complete || t && t.readyState === 4 || t && t.addEventListener && t.addEventListener("load", this._loadListener);
  }
  _removeImageLoad(t) {
    t && t.removeEventListener && t.removeEventListener("load", this._loadListener);
  }
  destroy() {
    return this._removeImageLoad(this.image()), super.destroy(), this;
  }
  _useBufferCanvas() {
    const t = !!this.cornerRadius(), n = this.hasShadow();
    return t && n ? !0 : super._useBufferCanvas(!0);
  }
  _sceneFunc(t) {
    const n = this.getWidth(), i = this.getHeight(), s = this.cornerRadius(), r = this.attrs.image;
    let o;
    if (r) {
      const a = this.attrs.cropWidth, l = this.attrs.cropHeight;
      a && l ? o = [
        r,
        this.cropX(),
        this.cropY(),
        a,
        l,
        0,
        0,
        n,
        i
      ] : o = [r, 0, 0, n, i];
    }
    (this.hasFill() || this.hasStroke() || s) && (t.beginPath(), s ? vr.Util.drawRoundedRectPath(t, n, i, s) : t.rect(0, 0, n, i), t.closePath(), t.fillStrokeShape(this)), r && (s && t.clip(), t.drawImage.apply(t, o));
  }
  _hitFunc(t) {
    const n = this.width(), i = this.height(), s = this.cornerRadius();
    t.beginPath(), s ? vr.Util.drawRoundedRectPath(t, n, i, s) : t.rect(0, 0, n, i), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    var t, n;
    return (t = this.attrs.width) !== null && t !== void 0 ? t : (n = this.image()) === null || n === void 0 ? void 0 : n.width;
  }
  getHeight() {
    var t, n;
    return (t = this.attrs.height) !== null && t !== void 0 ? t : (n = this.image()) === null || n === void 0 ? void 0 : n.height;
  }
  static fromURL(t, n, i = null) {
    const s = vr.Util.createImageElement();
    s.onload = function() {
      const r = new le({
        image: s
      });
      n(r);
    }, s.onerror = i, s.crossOrigin = "Anonymous", s.src = t;
  }
}
Ts.Image = le;
le.prototype.className = "Image";
(0, J1._registerNode)(le);
pn.Factory.addGetterSetter(le, "cornerRadius", 0, (0, xi.getNumberOrArrayOfNumbersValidator)(4));
pn.Factory.addGetterSetter(le, "image");
pn.Factory.addComponentsGetterSetter(le, "crop", ["x", "y", "width", "height"]);
pn.Factory.addGetterSetter(le, "cropX", 0, (0, xi.getNumberValidator)());
pn.Factory.addGetterSetter(le, "cropY", 0, (0, xi.getNumberValidator)());
pn.Factory.addGetterSetter(le, "cropWidth", 0, (0, xi.getNumberValidator)());
pn.Factory.addGetterSetter(le, "cropHeight", 0, (0, xi.getNumberValidator)());
var Dn = {};
Object.defineProperty(Dn, "__esModule", { value: !0 });
Dn.Tag = Dn.Label = void 0;
const As = at, Q1 = Dt, tu = $n, Eo = Z, hc = ot, dc = [
  "fontFamily",
  "fontSize",
  "fontStyle",
  "padding",
  "lineHeight",
  "text",
  "width",
  "height",
  "pointerDirection",
  "pointerWidth",
  "pointerHeight"
], eu = "Change.konva", nu = "none", $r = "up", jr = "right", Wr = "down", zr = "left", iu = dc.length;
class Po extends tu.Group {
  constructor(t) {
    super(t), this.on("add.konva", function(n) {
      this._addListeners(n.child), this._sync();
    });
  }
  getText() {
    return this.find("Text")[0];
  }
  getTag() {
    return this.find("Tag")[0];
  }
  _addListeners(t) {
    let n = this, i;
    const s = function() {
      n._sync();
    };
    for (i = 0; i < iu; i++)
      t.on(dc[i] + eu, s);
  }
  getWidth() {
    return this.getText().width();
  }
  getHeight() {
    return this.getText().height();
  }
  _sync() {
    let t = this.getText(), n = this.getTag(), i, s, r, o, a, l, h;
    if (t && n) {
      switch (i = t.width(), s = t.height(), r = n.pointerDirection(), o = n.pointerWidth(), h = n.pointerHeight(), a = 0, l = 0, r) {
        case $r:
          a = i / 2, l = -1 * h;
          break;
        case jr:
          a = i + o, l = s / 2;
          break;
        case Wr:
          a = i / 2, l = s + h;
          break;
        case zr:
          a = -1 * o, l = s / 2;
          break;
      }
      n.setAttrs({
        x: -1 * a,
        y: -1 * l,
        width: i,
        height: s
      }), t.setAttrs({
        x: -1 * a,
        y: -1 * l
      });
    }
  }
}
Dn.Label = Po;
Po.prototype.className = "Label";
(0, hc._registerNode)(Po);
class _n extends Q1.Shape {
  _sceneFunc(t) {
    const n = this.width(), i = this.height(), s = this.pointerDirection(), r = this.pointerWidth(), o = this.pointerHeight(), a = this.cornerRadius();
    let l = 0, h = 0, c = 0, g = 0;
    typeof a == "number" ? l = h = c = g = Math.min(a, n / 2, i / 2) : (l = Math.min(a[0] || 0, n / 2, i / 2), h = Math.min(a[1] || 0, n / 2, i / 2), g = Math.min(a[2] || 0, n / 2, i / 2), c = Math.min(a[3] || 0, n / 2, i / 2)), t.beginPath(), t.moveTo(l, 0), s === $r && (t.lineTo((n - r) / 2, 0), t.lineTo(n / 2, -1 * o), t.lineTo((n + r) / 2, 0)), t.lineTo(n - h, 0), t.arc(n - h, h, h, Math.PI * 3 / 2, 0, !1), s === jr && (t.lineTo(n, (i - o) / 2), t.lineTo(n + r, i / 2), t.lineTo(n, (i + o) / 2)), t.lineTo(n, i - g), t.arc(n - g, i - g, g, 0, Math.PI / 2, !1), s === Wr && (t.lineTo((n + r) / 2, i), t.lineTo(n / 2, i + o), t.lineTo((n - r) / 2, i)), t.lineTo(c, i), t.arc(c, i - c, c, Math.PI / 2, Math.PI, !1), s === zr && (t.lineTo(0, (i + o) / 2), t.lineTo(-1 * r, i / 2), t.lineTo(0, (i - o) / 2)), t.lineTo(0, l), t.arc(l, l, l, Math.PI, Math.PI * 3 / 2, !1), t.closePath(), t.fillStrokeShape(this);
  }
  getSelfRect() {
    let t = 0, n = 0, i = this.pointerWidth(), s = this.pointerHeight(), r = this.pointerDirection(), o = this.width(), a = this.height();
    return r === $r ? (n -= s, a += s) : r === Wr ? a += s : r === zr ? (t -= i * 1.5, o += i) : r === jr && (o += i * 1.5), {
      x: t,
      y: n,
      width: o,
      height: a
    };
  }
}
Dn.Tag = _n;
_n.prototype.className = "Tag";
(0, hc._registerNode)(_n);
As.Factory.addGetterSetter(_n, "pointerDirection", nu);
As.Factory.addGetterSetter(_n, "pointerWidth", 0, (0, Eo.getNumberValidator)());
As.Factory.addGetterSetter(_n, "pointerHeight", 0, (0, Eo.getNumberValidator)());
As.Factory.addGetterSetter(_n, "cornerRadius", 0, (0, Eo.getNumberOrArrayOfNumbersValidator)(4));
var Ei = {};
Object.defineProperty(Ei, "__esModule", { value: !0 });
Ei.Rect = void 0;
const su = at, ru = Dt, ou = ot, au = At, lu = Z;
class Rs extends ru.Shape {
  _sceneFunc(t) {
    const n = this.cornerRadius(), i = this.width(), s = this.height();
    t.beginPath(), n ? au.Util.drawRoundedRectPath(t, i, s, n) : t.rect(0, 0, i, s), t.closePath(), t.fillStrokeShape(this);
  }
}
Ei.Rect = Rs;
Rs.prototype.className = "Rect";
(0, ou._registerNode)(Rs);
su.Factory.addGetterSetter(Rs, "cornerRadius", 0, (0, lu.getNumberOrArrayOfNumbersValidator)(4));
var ks = {};
Object.defineProperty(ks, "__esModule", { value: !0 });
ks.RegularPolygon = void 0;
const uc = at, cu = Dt, fc = Z, hu = ot;
class mn extends cu.Shape {
  _sceneFunc(t) {
    const n = this._getPoints();
    t.beginPath(), t.moveTo(n[0].x, n[0].y);
    for (let i = 1; i < n.length; i++)
      t.lineTo(n[i].x, n[i].y);
    t.closePath(), t.fillStrokeShape(this);
  }
  _getPoints() {
    const t = this.attrs.sides, n = this.attrs.radius || 0, i = [];
    for (let s = 0; s < t; s++)
      i.push({
        x: n * Math.sin(s * 2 * Math.PI / t),
        y: -1 * n * Math.cos(s * 2 * Math.PI / t)
      });
    return i;
  }
  getSelfRect() {
    const t = this._getPoints();
    let n = t[0].x, i = t[0].y, s = t[0].x, r = t[0].y;
    return t.forEach((o) => {
      n = Math.min(n, o.x), i = Math.max(i, o.x), s = Math.min(s, o.y), r = Math.max(r, o.y);
    }), {
      x: n,
      y: s,
      width: i - n,
      height: r - s
    };
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(t) {
    this.radius(t / 2);
  }
  setHeight(t) {
    this.radius(t / 2);
  }
}
ks.RegularPolygon = mn;
mn.prototype.className = "RegularPolygon";
mn.prototype._centroid = !0;
mn.prototype._attrsAffectingSize = ["radius"];
(0, hu._registerNode)(mn);
uc.Factory.addGetterSetter(mn, "radius", 0, (0, fc.getNumberValidator)());
uc.Factory.addGetterSetter(mn, "sides", 0, (0, fc.getNumberValidator)());
var Ms = {};
Object.defineProperty(Ms, "__esModule", { value: !0 });
Ms.Ring = void 0;
const gc = at, du = Dt, pc = Z, uu = ot, Pa = Math.PI * 2;
class yn extends du.Shape {
  _sceneFunc(t) {
    t.beginPath(), t.arc(0, 0, this.innerRadius(), 0, Pa, !1), t.moveTo(this.outerRadius(), 0), t.arc(0, 0, this.outerRadius(), Pa, 0, !0), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(t) {
    this.outerRadius(t / 2);
  }
  setHeight(t) {
    this.outerRadius(t / 2);
  }
}
Ms.Ring = yn;
yn.prototype.className = "Ring";
yn.prototype._centroid = !0;
yn.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, uu._registerNode)(yn);
gc.Factory.addGetterSetter(yn, "innerRadius", 0, (0, pc.getNumberValidator)());
gc.Factory.addGetterSetter(yn, "outerRadius", 0, (0, pc.getNumberValidator)());
var Os = {};
Object.defineProperty(Os, "__esModule", { value: !0 });
Os.Sprite = void 0;
const bn = at, fu = Dt, gu = jn, _c = Z, pu = ot;
class xe extends fu.Shape {
  constructor(t) {
    super(t), this._updated = !0, this.anim = new gu.Animation(() => {
      const n = this._updated;
      return this._updated = !1, n;
    }), this.on("animationChange.konva", function() {
      this.frameIndex(0);
    }), this.on("frameIndexChange.konva", function() {
      this._updated = !0;
    }), this.on("frameRateChange.konva", function() {
      this.anim.isRunning() && (clearInterval(this.interval), this._setInterval());
    });
  }
  _sceneFunc(t) {
    const n = this.animation(), i = this.frameIndex(), s = i * 4, r = this.animations()[n], o = this.frameOffsets(), a = r[s + 0], l = r[s + 1], h = r[s + 2], c = r[s + 3], g = this.image();
    if ((this.hasFill() || this.hasStroke()) && (t.beginPath(), t.rect(0, 0, h, c), t.closePath(), t.fillStrokeShape(this)), g)
      if (o) {
        const f = o[n], _ = i * 2;
        t.drawImage(g, a, l, h, c, f[_ + 0], f[_ + 1], h, c);
      } else
        t.drawImage(g, a, l, h, c, 0, 0, h, c);
  }
  _hitFunc(t) {
    const n = this.animation(), i = this.frameIndex(), s = i * 4, r = this.animations()[n], o = this.frameOffsets(), a = r[s + 2], l = r[s + 3];
    if (t.beginPath(), o) {
      const h = o[n], c = i * 2;
      t.rect(h[c + 0], h[c + 1], a, l);
    } else
      t.rect(0, 0, a, l);
    t.closePath(), t.fillShape(this);
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(!0);
  }
  _setInterval() {
    const t = this;
    this.interval = setInterval(function() {
      t._updateIndex();
    }, 1e3 / this.frameRate());
  }
  start() {
    if (this.isRunning())
      return;
    const t = this.getLayer();
    this.anim.setLayers(t), this._setInterval(), this.anim.start();
  }
  stop() {
    this.anim.stop(), clearInterval(this.interval);
  }
  isRunning() {
    return this.anim.isRunning();
  }
  _updateIndex() {
    const t = this.frameIndex(), n = this.animation(), i = this.animations(), s = i[n], r = s.length / 4;
    t < r - 1 ? this.frameIndex(t + 1) : this.frameIndex(0);
  }
}
Os.Sprite = xe;
xe.prototype.className = "Sprite";
(0, pu._registerNode)(xe);
bn.Factory.addGetterSetter(xe, "animation");
bn.Factory.addGetterSetter(xe, "animations");
bn.Factory.addGetterSetter(xe, "frameOffsets");
bn.Factory.addGetterSetter(xe, "image");
bn.Factory.addGetterSetter(xe, "frameIndex", 0, (0, _c.getNumberValidator)());
bn.Factory.addGetterSetter(xe, "frameRate", 17, (0, _c.getNumberValidator)());
bn.Factory.backCompat(xe, {
  index: "frameIndex",
  getIndex: "getFrameIndex",
  setIndex: "setFrameIndex"
});
var Ls = {};
Object.defineProperty(Ls, "__esModule", { value: !0 });
Ls.Star = void 0;
const To = at, _u = Dt, Ao = Z, mu = ot;
class qe extends _u.Shape {
  _sceneFunc(t) {
    const n = this.innerRadius(), i = this.outerRadius(), s = this.numPoints();
    t.beginPath(), t.moveTo(0, 0 - i);
    for (let r = 1; r < s * 2; r++) {
      const o = r % 2 === 0 ? i : n, a = o * Math.sin(r * Math.PI / s), l = -1 * o * Math.cos(r * Math.PI / s);
      t.lineTo(a, l);
    }
    t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(t) {
    this.outerRadius(t / 2);
  }
  setHeight(t) {
    this.outerRadius(t / 2);
  }
}
Ls.Star = qe;
qe.prototype.className = "Star";
qe.prototype._centroid = !0;
qe.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, mu._registerNode)(qe);
To.Factory.addGetterSetter(qe, "numPoints", 5, (0, Ao.getNumberValidator)());
To.Factory.addGetterSetter(qe, "innerRadius", 0, (0, Ao.getNumberValidator)());
To.Factory.addGetterSetter(qe, "outerRadius", 0, (0, Ao.getNumberValidator)());
var Kn = {};
Object.defineProperty(Kn, "__esModule", { value: !0 });
Kn.Text = void 0;
Kn.stringToArray = on;
const Kr = At, jt = at, yu = Dt, Sr = ot, Ze = Z, bu = ot;
function on(e) {
  return [...e].reduce((t, n, i, s) => {
    if (/\p{Emoji}/u.test(n)) {
      const r = s[i + 1];
      r && /\p{Emoji_Modifier}|\u200D/u.test(r) ? (t.push(n + r), s[i + 1] = "") : t.push(n);
    } else
      /\p{Regional_Indicator}{2}/u.test(n + (s[i + 1] || "")) ? t.push(n + s[i + 1]) : i > 0 && /\p{Mn}|\p{Me}|\p{Mc}/u.test(n) ? t[t.length - 1] += n : n && t.push(n);
    return t;
  }, []);
}
const Pn = "auto", vu = "center", mc = "inherit", Jn = "justify", Su = "Change.konva", Cu = "2d", Ta = "-", yc = "left", wu = "text", xu = "Text", Eu = "top", Pu = "bottom", Aa = "middle", bc = "normal", Tu = "px ", Fi = " ", Au = "right", Ra = "rtl", Ru = "word", ku = "char", ka = "none", Cr = "…", vc = [
  "direction",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontVariant",
  "padding",
  "align",
  "verticalAlign",
  "lineHeight",
  "text",
  "width",
  "height",
  "wrap",
  "ellipsis",
  "letterSpacing"
], Mu = vc.length;
function Ou(e) {
  return e.split(",").map((t) => {
    t = t.trim();
    const n = t.indexOf(" ") >= 0, i = t.indexOf('"') >= 0 || t.indexOf("'") >= 0;
    return n && !i && (t = `"${t}"`), t;
  }).join(", ");
}
let Ni;
function wr() {
  return Ni || (Ni = Kr.Util.createCanvasElement().getContext(Cu), Ni);
}
function Lu(e) {
  e.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function Fu(e) {
  e.setAttr("miterLimit", 2), e.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function Nu(e) {
  return e = e || {}, !e.fillLinearGradientColorStops && !e.fillRadialGradientColorStops && !e.fillPatternImage && (e.fill = e.fill || "black"), e;
}
class Mt extends yu.Shape {
  constructor(t) {
    super(Nu(t)), this._partialTextX = 0, this._partialTextY = 0;
    for (let n = 0; n < Mu; n++)
      this.on(vc[n] + Su, this._setTextData);
    this._setTextData();
  }
  _sceneFunc(t) {
    const n = this.textArr, i = n.length;
    if (!this.text())
      return;
    let s = this.padding(), r = this.fontSize(), o = this.lineHeight() * r, a = this.verticalAlign(), l = this.direction(), h = 0, c = this.align(), g = this.getWidth(), f = this.letterSpacing(), _ = this.fill(), u = this.textDecoration(), m = u.indexOf("underline") !== -1, y = u.indexOf("line-through") !== -1, C;
    l = l === mc ? t.direction : l;
    let x = o / 2, d = Aa;
    if (Sr.Konva._fixTextRendering) {
      const p = this.measureSize("M");
      d = "alphabetic", x = (p.fontBoundingBoxAscent - p.fontBoundingBoxDescent) / 2 + o / 2;
    }
    for (l === Ra && t.setAttr("direction", l), t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", d), t.setAttr("textAlign", yc), a === Aa ? h = (this.getHeight() - i * o - s * 2) / 2 : a === Pu && (h = this.getHeight() - i * o - s * 2), t.translate(s, h + s), C = 0; C < i; C++) {
      let p = 0, v = 0;
      const P = n[C], R = P.text, S = P.width, k = P.lastInParagraph;
      if (t.save(), c === Au ? p += g - S - s * 2 : c === vu && (p += (g - S - s * 2) / 2), m) {
        t.save(), t.beginPath();
        const T = Sr.Konva._fixTextRendering ? Math.round(r / 4) : Math.round(r / 2), M = p, F = x + v + T;
        t.moveTo(M, F);
        const B = c === Jn && !k ? g - s * 2 : S;
        t.lineTo(M + Math.round(B), F), t.lineWidth = r / 15;
        const Y = this._getLinearGradient();
        t.strokeStyle = Y || _, t.stroke(), t.restore();
      }
      if (y) {
        t.save(), t.beginPath();
        const T = Sr.Konva._fixTextRendering ? -Math.round(r / 4) : 0;
        t.moveTo(p, x + v + T);
        const M = c === Jn && !k ? g - s * 2 : S;
        t.lineTo(p + Math.round(M), x + v + T), t.lineWidth = r / 15;
        const F = this._getLinearGradient();
        t.strokeStyle = F || _, t.stroke(), t.restore();
      }
      if (l !== Ra && (f !== 0 || c === Jn)) {
        const T = R.split(" ").length - 1, M = on(R);
        for (let F = 0; F < M.length; F++) {
          const B = M[F];
          B === " " && !k && c === Jn && (p += (g - s * 2 - S) / T), this._partialTextX = p, this._partialTextY = x + v, this._partialText = B, t.fillStrokeShape(this), p += this.measureSize(B).width + f;
        }
      } else
        f !== 0 && t.setAttr("letterSpacing", `${f}px`), this._partialTextX = p, this._partialTextY = x + v, this._partialText = R, t.fillStrokeShape(this);
      t.restore(), i > 1 && (x += o);
    }
  }
  _hitFunc(t) {
    const n = this.getWidth(), i = this.getHeight();
    t.beginPath(), t.rect(0, 0, n, i), t.closePath(), t.fillStrokeShape(this);
  }
  setText(t) {
    const n = Kr.Util._isString(t) ? t : t == null ? "" : t + "";
    return this._setAttr(wu, n), this;
  }
  getWidth() {
    return this.attrs.width === Pn || this.attrs.width === void 0 ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
  }
  getHeight() {
    return this.attrs.height === Pn || this.attrs.height === void 0 ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return Kr.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  measureSize(t) {
    var n, i, s, r, o, a, l, h, c, g, f;
    let _ = wr(), u = this.fontSize(), m;
    _.save(), _.font = this._getContextFont(), m = _.measureText(t), _.restore();
    const y = u / 100;
    return {
      actualBoundingBoxAscent: (n = m.actualBoundingBoxAscent) !== null && n !== void 0 ? n : 71.58203125 * y,
      actualBoundingBoxDescent: (i = m.actualBoundingBoxDescent) !== null && i !== void 0 ? i : 0,
      actualBoundingBoxLeft: (s = m.actualBoundingBoxLeft) !== null && s !== void 0 ? s : -7.421875 * y,
      actualBoundingBoxRight: (r = m.actualBoundingBoxRight) !== null && r !== void 0 ? r : 75.732421875 * y,
      alphabeticBaseline: (o = m.alphabeticBaseline) !== null && o !== void 0 ? o : 0,
      emHeightAscent: (a = m.emHeightAscent) !== null && a !== void 0 ? a : 100 * y,
      emHeightDescent: (l = m.emHeightDescent) !== null && l !== void 0 ? l : -20 * y,
      fontBoundingBoxAscent: (h = m.fontBoundingBoxAscent) !== null && h !== void 0 ? h : 91 * y,
      fontBoundingBoxDescent: (c = m.fontBoundingBoxDescent) !== null && c !== void 0 ? c : 21 * y,
      hangingBaseline: (g = m.hangingBaseline) !== null && g !== void 0 ? g : 72.80000305175781 * y,
      ideographicBaseline: (f = m.ideographicBaseline) !== null && f !== void 0 ? f : -21 * y,
      width: m.width,
      height: u
    };
  }
  _getContextFont() {
    return this.fontStyle() + Fi + this.fontVariant() + Fi + (this.fontSize() + Tu) + Ou(this.fontFamily());
  }
  _addTextLine(t) {
    this.align() === Jn && (t = t.trim());
    const i = this._getTextWidth(t);
    return this.textArr.push({
      text: t,
      width: i,
      lastInParagraph: !1
    });
  }
  _getTextWidth(t) {
    const n = this.letterSpacing(), i = t.length;
    return wr().measureText(t).width + n * i;
  }
  _setTextData() {
    let t = this.text().split(`
`), n = +this.fontSize(), i = 0, s = this.lineHeight() * n, r = this.attrs.width, o = this.attrs.height, a = r !== Pn && r !== void 0, l = o !== Pn && o !== void 0, h = this.padding(), c = r - h * 2, g = o - h * 2, f = 0, _ = this.wrap(), u = _ !== ka, m = _ !== ku && u, y = this.ellipsis();
    this.textArr = [], wr().font = this._getContextFont();
    const C = y ? this._getTextWidth(Cr) : 0;
    for (let x = 0, d = t.length; x < d; ++x) {
      let p = t[x], v = this._getTextWidth(p);
      if (a && v > c)
        for (; p.length > 0; ) {
          let P = 0, R = on(p).length, S = "", k = 0;
          for (; P < R; ) {
            const T = P + R >>> 1, M = on(p), F = M.slice(0, T + 1).join(""), B = this._getTextWidth(F);
            (y && l && f + s > g ? B + C : B) <= c ? (P = T + 1, S = F, k = B) : R = T;
          }
          if (S) {
            if (m) {
              const F = on(p), B = on(S), Y = F[B.length], $ = Y === Fi || Y === Ta;
              let et;
              if ($ && k <= c)
                et = B.length;
              else {
                const X = B.lastIndexOf(Fi), U = B.lastIndexOf(Ta);
                et = Math.max(X, U) + 1;
              }
              et > 0 && (P = et, S = F.slice(0, P).join(""), k = this._getTextWidth(S));
            }
            if (S = S.trimRight(), this._addTextLine(S), i = Math.max(i, k), f += s, this._shouldHandleEllipsis(f)) {
              this._tryToAddEllipsisToLastLine();
              break;
            }
            if (p = on(p).slice(P).join("").trimLeft(), p.length > 0 && (v = this._getTextWidth(p), v <= c)) {
              this._addTextLine(p), f += s, i = Math.max(i, v);
              break;
            }
          } else
            break;
        }
      else
        this._addTextLine(p), f += s, i = Math.max(i, v), this._shouldHandleEllipsis(f) && x < d - 1 && this._tryToAddEllipsisToLastLine();
      if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), l && f + s > g)
        break;
    }
    this.textHeight = n, this.textWidth = i;
  }
  _shouldHandleEllipsis(t) {
    const n = +this.fontSize(), i = this.lineHeight() * n, s = this.attrs.height, r = s !== Pn && s !== void 0, o = this.padding(), a = s - o * 2;
    return !(this.wrap() !== ka) || r && t + i > a;
  }
  _tryToAddEllipsisToLastLine() {
    const t = this.attrs.width, n = t !== Pn && t !== void 0, i = this.padding(), s = t - i * 2, r = this.ellipsis(), o = this.textArr[this.textArr.length - 1];
    !o || !r || (n && (this._getTextWidth(o.text + Cr) < s || (o.text = o.text.slice(0, o.text.length - 3))), this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(o.text + Cr));
  }
  getStrokeScaleEnabled() {
    return !0;
  }
  _useBufferCanvas() {
    const t = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1, n = this.hasShadow();
    return t && n ? !0 : super._useBufferCanvas();
  }
}
Kn.Text = Mt;
Mt.prototype._fillFunc = Lu;
Mt.prototype._strokeFunc = Fu;
Mt.prototype.className = xu;
Mt.prototype._attrsAffectingSize = [
  "text",
  "fontSize",
  "padding",
  "wrap",
  "lineHeight",
  "letterSpacing"
];
(0, bu._registerNode)(Mt);
jt.Factory.overWriteSetter(Mt, "width", (0, Ze.getNumberOrAutoValidator)());
jt.Factory.overWriteSetter(Mt, "height", (0, Ze.getNumberOrAutoValidator)());
jt.Factory.addGetterSetter(Mt, "direction", mc);
jt.Factory.addGetterSetter(Mt, "fontFamily", "Arial");
jt.Factory.addGetterSetter(Mt, "fontSize", 12, (0, Ze.getNumberValidator)());
jt.Factory.addGetterSetter(Mt, "fontStyle", bc);
jt.Factory.addGetterSetter(Mt, "fontVariant", bc);
jt.Factory.addGetterSetter(Mt, "padding", 0, (0, Ze.getNumberValidator)());
jt.Factory.addGetterSetter(Mt, "align", yc);
jt.Factory.addGetterSetter(Mt, "verticalAlign", Eu);
jt.Factory.addGetterSetter(Mt, "lineHeight", 1, (0, Ze.getNumberValidator)());
jt.Factory.addGetterSetter(Mt, "wrap", Ru);
jt.Factory.addGetterSetter(Mt, "ellipsis", !1, (0, Ze.getBooleanValidator)());
jt.Factory.addGetterSetter(Mt, "letterSpacing", 0, (0, Ze.getNumberValidator)());
jt.Factory.addGetterSetter(Mt, "text", "", (0, Ze.getStringValidator)());
jt.Factory.addGetterSetter(Mt, "textDecoration", "");
var Fs = {};
Object.defineProperty(Fs, "__esModule", { value: !0 });
Fs.TextPath = void 0;
const xr = At, me = at, Du = Dt, Qn = Wn, Er = Kn, Sc = Z, Iu = ot, Gu = "", Cc = "normal";
function wc(e) {
  e.fillText(this.partialText, 0, 0);
}
function xc(e) {
  e.strokeText(this.partialText, 0, 0);
}
class It extends Du.Shape {
  constructor(t) {
    super(t), this.dummyCanvas = xr.Util.createCanvasElement(), this.dataArray = [], this._readDataAttribute(), this.on("dataChange.konva", function() {
      this._readDataAttribute(), this._setTextData();
    }), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData), this._setTextData();
  }
  _getTextPathLength() {
    return Qn.Path.getPathLength(this.dataArray);
  }
  _getPointAtLength(t) {
    if (!this.attrs.data)
      return null;
    const n = this.pathLength;
    return t - 1 > n ? null : Qn.Path.getPointAtLengthOfDataArray(t, this.dataArray);
  }
  _readDataAttribute() {
    this.dataArray = Qn.Path.parsePathData(this.attrs.data), this.pathLength = this._getTextPathLength();
  }
  _sceneFunc(t) {
    t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", this.textBaseline()), t.setAttr("textAlign", "left"), t.save();
    const n = this.textDecoration(), i = this.fill(), s = this.fontSize(), r = this.glyphInfo;
    n === "underline" && t.beginPath();
    for (let o = 0; o < r.length; o++) {
      t.save();
      const a = r[o].p0;
      t.translate(a.x, a.y), t.rotate(r[o].rotation), this.partialText = r[o].text, t.fillStrokeShape(this), n === "underline" && (o === 0 && t.moveTo(0, s / 2 + 1), t.lineTo(s, s / 2 + 1)), t.restore();
    }
    n === "underline" && (t.strokeStyle = i, t.lineWidth = s / 20, t.stroke()), t.restore();
  }
  _hitFunc(t) {
    t.beginPath();
    const n = this.glyphInfo;
    if (n.length >= 1) {
      const i = n[0].p0;
      t.moveTo(i.x, i.y);
    }
    for (let i = 0; i < n.length; i++) {
      const s = n[i].p1;
      t.lineTo(s.x, s.y);
    }
    t.setAttr("lineWidth", this.fontSize()), t.setAttr("strokeStyle", this.colorKey), t.stroke();
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return xr.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  setText(t) {
    return Er.Text.prototype.setText.call(this, t);
  }
  _getContextFont() {
    return Er.Text.prototype._getContextFont.call(this);
  }
  _getTextSize(t) {
    const i = this.dummyCanvas.getContext("2d");
    i.save(), i.font = this._getContextFont();
    const s = i.measureText(t);
    return i.restore(), {
      width: s.width,
      height: parseInt(`${this.fontSize()}`, 10)
    };
  }
  _setTextData() {
    const { width: t, height: n } = this._getTextSize(this.attrs.text);
    if (this.textWidth = t, this.textHeight = n, this.glyphInfo = [], !this.attrs.data)
      return null;
    const i = this.letterSpacing(), s = this.align(), r = this.kerningFunc(), o = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * i, 0);
    let a = 0;
    s === "center" && (a = Math.max(0, this.pathLength / 2 - o / 2)), s === "right" && (a = Math.max(0, this.pathLength - o));
    const l = (0, Er.stringToArray)(this.text());
    let h = a;
    for (let c = 0; c < l.length; c++) {
      const g = this._getPointAtLength(h);
      if (!g)
        return;
      let f = this._getTextSize(l[c]).width + i;
      if (l[c] === " " && s === "justify") {
        const x = this.text().split(" ").length - 1;
        f += (this.pathLength - o) / x;
      }
      const _ = this._getPointAtLength(h + f);
      if (!_)
        return;
      const u = Qn.Path.getLineLength(g.x, g.y, _.x, _.y);
      let m = 0;
      if (r)
        try {
          m = r(l[c - 1], l[c]) * this.fontSize();
        } catch {
          m = 0;
        }
      g.x += m, _.x += m, this.textWidth += m;
      const y = Qn.Path.getPointOnLine(m + u / 2, g.x, g.y, _.x, _.y), C = Math.atan2(_.y - g.y, _.x - g.x);
      this.glyphInfo.push({
        transposeX: y.x,
        transposeY: y.y,
        text: l[c],
        rotation: C,
        p0: g,
        p1: _
      }), h += f;
    }
  }
  getSelfRect() {
    if (!this.glyphInfo.length)
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    const t = [];
    this.glyphInfo.forEach(function(h) {
      t.push(h.p0.x), t.push(h.p0.y), t.push(h.p1.x), t.push(h.p1.y);
    });
    let n = t[0] || 0, i = t[0] || 0, s = t[1] || 0, r = t[1] || 0, o, a;
    for (let h = 0; h < t.length / 2; h++)
      o = t[h * 2], a = t[h * 2 + 1], n = Math.min(n, o), i = Math.max(i, o), s = Math.min(s, a), r = Math.max(r, a);
    const l = this.fontSize();
    return {
      x: n - l / 2,
      y: s - l / 2,
      width: i - n + l,
      height: r - s + l
    };
  }
  destroy() {
    return xr.Util.releaseCanvas(this.dummyCanvas), super.destroy();
  }
}
Fs.TextPath = It;
It.prototype._fillFunc = wc;
It.prototype._strokeFunc = xc;
It.prototype._fillFuncHit = wc;
It.prototype._strokeFuncHit = xc;
It.prototype.className = "TextPath";
It.prototype._attrsAffectingSize = ["text", "fontSize", "data"];
(0, Iu._registerNode)(It);
me.Factory.addGetterSetter(It, "data");
me.Factory.addGetterSetter(It, "fontFamily", "Arial");
me.Factory.addGetterSetter(It, "fontSize", 12, (0, Sc.getNumberValidator)());
me.Factory.addGetterSetter(It, "fontStyle", Cc);
me.Factory.addGetterSetter(It, "align", "left");
me.Factory.addGetterSetter(It, "letterSpacing", 0, (0, Sc.getNumberValidator)());
me.Factory.addGetterSetter(It, "textBaseline", "middle");
me.Factory.addGetterSetter(It, "fontVariant", Cc);
me.Factory.addGetterSetter(It, "text", Gu);
me.Factory.addGetterSetter(It, "textDecoration", "");
me.Factory.addGetterSetter(It, "kerningFunc", void 0);
var Ns = {};
Object.defineProperty(Ns, "__esModule", { value: !0 });
Ns.Transformer = void 0;
const yt = At, ft = at, Ma = Tt, Vu = Dt, Uu = Ei, Oa = $n, he = ot, Je = Z, Bu = ot, Ec = "tr-konva", Hu = [
  "resizeEnabledChange",
  "rotateAnchorOffsetChange",
  "rotateEnabledChange",
  "enabledAnchorsChange",
  "anchorSizeChange",
  "borderEnabledChange",
  "borderStrokeChange",
  "borderStrokeWidthChange",
  "borderDashChange",
  "anchorStrokeChange",
  "anchorStrokeWidthChange",
  "anchorFillChange",
  "anchorCornerRadiusChange",
  "ignoreStrokeChange",
  "anchorStyleFuncChange"
].map((e) => e + `.${Ec}`).join(" "), La = "nodesRect", $u = [
  "widthChange",
  "heightChange",
  "scaleXChange",
  "scaleYChange",
  "skewXChange",
  "skewYChange",
  "rotationChange",
  "offsetXChange",
  "offsetYChange",
  "transformsEnabledChange",
  "strokeWidthChange"
], ju = {
  "top-left": -45,
  "top-center": 0,
  "top-right": 45,
  "middle-right": -90,
  "middle-left": 90,
  "bottom-left": -135,
  "bottom-center": 180,
  "bottom-right": 135
}, Wu = "ontouchstart" in he.Konva._global;
function zu(e, t, n) {
  if (e === "rotater")
    return n;
  t += yt.Util.degToRad(ju[e] || 0);
  const i = (yt.Util.radToDeg(t) % 360 + 360) % 360;
  return yt.Util._inRange(i, 315 + 22.5, 360) || yt.Util._inRange(i, 0, 22.5) ? "ns-resize" : yt.Util._inRange(i, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : yt.Util._inRange(i, 90 - 22.5, 90 + 22.5) ? "ew-resize" : yt.Util._inRange(i, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : yt.Util._inRange(i, 180 - 22.5, 180 + 22.5) ? "ns-resize" : yt.Util._inRange(i, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : yt.Util._inRange(i, 270 - 22.5, 270 + 22.5) ? "ew-resize" : yt.Util._inRange(i, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (yt.Util.error("Transformer has unknown angle for cursor detection: " + i), "pointer");
}
const Xi = [
  "top-left",
  "top-center",
  "top-right",
  "middle-right",
  "middle-left",
  "bottom-left",
  "bottom-center",
  "bottom-right"
], Fa = 1e8;
function Ku(e) {
  return {
    x: e.x + e.width / 2 * Math.cos(e.rotation) + e.height / 2 * Math.sin(-e.rotation),
    y: e.y + e.height / 2 * Math.cos(e.rotation) + e.width / 2 * Math.sin(e.rotation)
  };
}
function Pc(e, t, n) {
  const i = n.x + (e.x - n.x) * Math.cos(t) - (e.y - n.y) * Math.sin(t), s = n.y + (e.x - n.x) * Math.sin(t) + (e.y - n.y) * Math.cos(t);
  return {
    ...e,
    rotation: e.rotation + t,
    x: i,
    y: s
  };
}
function Yu(e, t) {
  const n = Ku(e);
  return Pc(e, t, n);
}
function Xu(e, t, n) {
  let i = t;
  for (let s = 0; s < e.length; s++) {
    const r = he.Konva.getAngle(e[s]), o = Math.abs(r - t) % (Math.PI * 2);
    Math.min(o, Math.PI * 2 - o) < n && (i = r);
  }
  return i;
}
let Yr = 0;
class ct extends Oa.Group {
  constructor(t) {
    super(t), this._movingAnchorName = null, this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(Hu, this.update), this.getNode() && this.update();
  }
  attachTo(t) {
    return this.setNode(t), this;
  }
  setNode(t) {
    return yt.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([t]);
  }
  getNode() {
    return this._nodes && this._nodes[0];
  }
  _getEventNamespace() {
    return Ec + this._id;
  }
  setNodes(t = []) {
    this._nodes && this._nodes.length && this.detach();
    const n = t.filter((s) => s.isAncestorOf(this) ? (yt.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), !1) : !0);
    return this._nodes = t = n, t.length === 1 && this.useSingleNodeRotation() ? this.rotation(t[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((s) => {
      const r = () => {
        this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
      };
      if (s._attrsAffectingSize.length) {
        const o = s._attrsAffectingSize.map((a) => a + "Change." + this._getEventNamespace()).join(" ");
        s.on(o, r);
      }
      s.on($u.map((o) => o + `.${this._getEventNamespace()}`).join(" "), r), s.on(`absoluteTransformChange.${this._getEventNamespace()}`, r), this._proxyDrag(s);
    }), this._resetTransformCache(), !!this.findOne(".top-left") && this.update(), this;
  }
  _proxyDrag(t) {
    let n;
    t.on(`dragstart.${this._getEventNamespace()}`, (i) => {
      n = t.getAbsolutePosition(), !this.isDragging() && t !== this.findOne(".back") && this.startDrag(i, !1);
    }), t.on(`dragmove.${this._getEventNamespace()}`, (i) => {
      if (!n)
        return;
      const s = t.getAbsolutePosition(), r = s.x - n.x, o = s.y - n.y;
      this.nodes().forEach((a) => {
        if (a === t || a.isDragging())
          return;
        const l = a.getAbsolutePosition();
        a.setAbsolutePosition({
          x: l.x + r,
          y: l.y + o
        }), a.startDrag(i);
      }), n = null;
    });
  }
  getNodes() {
    return this._nodes || [];
  }
  getActiveAnchor() {
    return this._movingAnchorName;
  }
  detach() {
    this._nodes && this._nodes.forEach((t) => {
      t.off("." + this._getEventNamespace());
    }), this._nodes = [], this._resetTransformCache();
  }
  _resetTransformCache() {
    this._clearCache(La), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
  }
  _getNodeRect() {
    return this._getCache(La, this.__getNodeRect);
  }
  __getNodeShape(t, n = this.rotation(), i) {
    const s = t.getClientRect({
      skipTransform: !0,
      skipShadow: !0,
      skipStroke: this.ignoreStroke()
    }), r = t.getAbsoluteScale(i), o = t.getAbsolutePosition(i), a = s.x * r.x - t.offsetX() * r.x, l = s.y * r.y - t.offsetY() * r.y, h = (he.Konva.getAngle(t.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), c = {
      x: o.x + a * Math.cos(h) + l * Math.sin(-h),
      y: o.y + l * Math.cos(h) + a * Math.sin(h),
      width: s.width * r.x,
      height: s.height * r.y,
      rotation: h
    };
    return Pc(c, -he.Konva.getAngle(n), {
      x: 0,
      y: 0
    });
  }
  __getNodeRect() {
    if (!this.getNode())
      return {
        x: -Fa,
        y: -Fa,
        width: 0,
        height: 0,
        rotation: 0
      };
    const n = [];
    this.nodes().map((h) => {
      const c = h.getClientRect({
        skipTransform: !0,
        skipShadow: !0,
        skipStroke: this.ignoreStroke()
      }), g = [
        { x: c.x, y: c.y },
        { x: c.x + c.width, y: c.y },
        { x: c.x + c.width, y: c.y + c.height },
        { x: c.x, y: c.y + c.height }
      ], f = h.getAbsoluteTransform();
      g.forEach(function(_) {
        const u = f.point(_);
        n.push(u);
      });
    });
    const i = new yt.Transform();
    i.rotate(-he.Konva.getAngle(this.rotation()));
    let s = 1 / 0, r = 1 / 0, o = -1 / 0, a = -1 / 0;
    n.forEach(function(h) {
      const c = i.point(h);
      s === void 0 && (s = o = c.x, r = a = c.y), s = Math.min(s, c.x), r = Math.min(r, c.y), o = Math.max(o, c.x), a = Math.max(a, c.y);
    }), i.invert();
    const l = i.point({ x: s, y: r });
    return {
      x: l.x,
      y: l.y,
      width: o - s,
      height: a - r,
      rotation: he.Konva.getAngle(this.rotation())
    };
  }
  getX() {
    return this._getNodeRect().x;
  }
  getY() {
    return this._getNodeRect().y;
  }
  getWidth() {
    return this._getNodeRect().width;
  }
  getHeight() {
    return this._getNodeRect().height;
  }
  _createElements() {
    this._createBack(), Xi.forEach((t) => {
      this._createAnchor(t);
    }), this._createAnchor("rotater");
  }
  _createAnchor(t) {
    const n = new Uu.Rect({
      stroke: "rgb(0, 161, 255)",
      fill: "white",
      strokeWidth: 1,
      name: t + " _anchor",
      dragDistance: 0,
      draggable: !0,
      hitStrokeWidth: Wu ? 10 : "auto"
    }), i = this;
    n.on("mousedown touchstart", function(s) {
      i._handleMouseDown(s);
    }), n.on("dragstart", (s) => {
      n.stopDrag(), s.cancelBubble = !0;
    }), n.on("dragend", (s) => {
      s.cancelBubble = !0;
    }), n.on("mouseenter", () => {
      const s = he.Konva.getAngle(this.rotation()), r = this.rotateAnchorCursor(), o = zu(t, s, r);
      n.getStage().content && (n.getStage().content.style.cursor = o), this._cursorChange = !0;
    }), n.on("mouseout", () => {
      n.getStage().content && (n.getStage().content.style.cursor = ""), this._cursorChange = !1;
    }), this.add(n);
  }
  _createBack() {
    const t = new Vu.Shape({
      name: "back",
      width: 0,
      height: 0,
      draggable: !0,
      sceneFunc(n, i) {
        const s = i.getParent(), r = s.padding();
        n.beginPath(), n.rect(-r, -r, i.width() + r * 2, i.height() + r * 2), n.moveTo(i.width() / 2, -r), s.rotateEnabled() && s.rotateLineVisible() && n.lineTo(i.width() / 2, -s.rotateAnchorOffset() * yt.Util._sign(i.height()) - r), n.fillStrokeShape(i);
      },
      hitFunc: (n, i) => {
        if (!this.shouldOverdrawWholeArea())
          return;
        const s = this.padding();
        n.beginPath(), n.rect(-s, -s, i.width() + s * 2, i.height() + s * 2), n.fillStrokeShape(i);
      }
    });
    this.add(t), this._proxyDrag(t), t.on("dragstart", (n) => {
      n.cancelBubble = !0;
    }), t.on("dragmove", (n) => {
      n.cancelBubble = !0;
    }), t.on("dragend", (n) => {
      n.cancelBubble = !0;
    }), this.on("dragmove", (n) => {
      this.update();
    });
  }
  _handleMouseDown(t) {
    if (this._transforming)
      return;
    this._movingAnchorName = t.target.name().split(" ")[0];
    const n = this._getNodeRect(), i = n.width, s = n.height, r = Math.sqrt(Math.pow(i, 2) + Math.pow(s, 2));
    this.sin = Math.abs(s / r), this.cos = Math.abs(i / r), typeof window < "u" && (window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0)), this._transforming = !0;
    const o = t.target.getAbsolutePosition(), a = t.target.getStage().getPointerPosition();
    this._anchorDragOffset = {
      x: a.x - o.x,
      y: a.y - o.y
    }, Yr++, this._fire("transformstart", { evt: t.evt, target: this.getNode() }), this._nodes.forEach((l) => {
      l._fire("transformstart", { evt: t.evt, target: l });
    });
  }
  _handleMouseMove(t) {
    let n, i, s;
    const r = this.findOne("." + this._movingAnchorName), o = r.getStage();
    o.setPointersPositions(t);
    const a = o.getPointerPosition();
    let l = {
      x: a.x - this._anchorDragOffset.x,
      y: a.y - this._anchorDragOffset.y
    };
    const h = r.getAbsolutePosition();
    this.anchorDragBoundFunc() && (l = this.anchorDragBoundFunc()(h, l, t)), r.setAbsolutePosition(l);
    const c = r.getAbsolutePosition();
    if (h.x === c.x && h.y === c.y)
      return;
    if (this._movingAnchorName === "rotater") {
      const x = this._getNodeRect();
      n = r.x() - x.width / 2, i = -r.y() + x.height / 2;
      let d = Math.atan2(-i, n) + Math.PI / 2;
      x.height < 0 && (d -= Math.PI);
      const v = he.Konva.getAngle(this.rotation()) + d, P = he.Konva.getAngle(this.rotationSnapTolerance()), S = Xu(this.rotationSnaps(), v, P) - x.rotation, k = Yu(x, S);
      this._fitNodesInto(k, t);
      return;
    }
    const g = this.shiftBehavior();
    let f;
    g === "inverted" ? f = this.keepRatio() && !t.shiftKey : g === "none" ? f = this.keepRatio() : f = this.keepRatio() || t.shiftKey;
    let _ = this.centeredScaling() || t.altKey;
    if (this._movingAnchorName === "top-left") {
      if (f) {
        const x = _ ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".bottom-right").x(),
          y: this.findOne(".bottom-right").y()
        };
        s = Math.sqrt(Math.pow(x.x - r.x(), 2) + Math.pow(x.y - r.y(), 2));
        const d = this.findOne(".top-left").x() > x.x ? -1 : 1, p = this.findOne(".top-left").y() > x.y ? -1 : 1;
        n = s * this.cos * d, i = s * this.sin * p, this.findOne(".top-left").x(x.x - n), this.findOne(".top-left").y(x.y - i);
      }
    } else if (this._movingAnchorName === "top-center")
      this.findOne(".top-left").y(r.y());
    else if (this._movingAnchorName === "top-right") {
      if (f) {
        const x = _ ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".bottom-left").x(),
          y: this.findOne(".bottom-left").y()
        };
        s = Math.sqrt(Math.pow(r.x() - x.x, 2) + Math.pow(x.y - r.y(), 2));
        const d = this.findOne(".top-right").x() < x.x ? -1 : 1, p = this.findOne(".top-right").y() > x.y ? -1 : 1;
        n = s * this.cos * d, i = s * this.sin * p, this.findOne(".top-right").x(x.x + n), this.findOne(".top-right").y(x.y - i);
      }
      var u = r.position();
      this.findOne(".top-left").y(u.y), this.findOne(".bottom-right").x(u.x);
    } else if (this._movingAnchorName === "middle-left")
      this.findOne(".top-left").x(r.x());
    else if (this._movingAnchorName === "middle-right")
      this.findOne(".bottom-right").x(r.x());
    else if (this._movingAnchorName === "bottom-left") {
      if (f) {
        const x = _ ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".top-right").x(),
          y: this.findOne(".top-right").y()
        };
        s = Math.sqrt(Math.pow(x.x - r.x(), 2) + Math.pow(r.y() - x.y, 2));
        const d = x.x < r.x() ? -1 : 1, p = r.y() < x.y ? -1 : 1;
        n = s * this.cos * d, i = s * this.sin * p, r.x(x.x - n), r.y(x.y + i);
      }
      u = r.position(), this.findOne(".top-left").x(u.x), this.findOne(".bottom-right").y(u.y);
    } else if (this._movingAnchorName === "bottom-center")
      this.findOne(".bottom-right").y(r.y());
    else if (this._movingAnchorName === "bottom-right") {
      if (f) {
        const x = _ ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".top-left").x(),
          y: this.findOne(".top-left").y()
        };
        s = Math.sqrt(Math.pow(r.x() - x.x, 2) + Math.pow(r.y() - x.y, 2));
        const d = this.findOne(".bottom-right").x() < x.x ? -1 : 1, p = this.findOne(".bottom-right").y() < x.y ? -1 : 1;
        n = s * this.cos * d, i = s * this.sin * p, this.findOne(".bottom-right").x(x.x + n), this.findOne(".bottom-right").y(x.y + i);
      }
    } else
      console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
    if (_ = this.centeredScaling() || t.altKey, _) {
      const x = this.findOne(".top-left"), d = this.findOne(".bottom-right"), p = x.x(), v = x.y(), P = this.getWidth() - d.x(), R = this.getHeight() - d.y();
      d.move({
        x: -p,
        y: -v
      }), x.move({
        x: P,
        y: R
      });
    }
    const m = this.findOne(".top-left").getAbsolutePosition();
    n = m.x, i = m.y;
    const y = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), C = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
    this._fitNodesInto({
      x: n,
      y: i,
      width: y,
      height: C,
      rotation: he.Konva.getAngle(this.rotation())
    }, t);
  }
  _handleMouseUp(t) {
    this._removeEvents(t);
  }
  getAbsoluteTransform() {
    return this.getTransform();
  }
  _removeEvents(t) {
    var n;
    if (this._transforming) {
      this._transforming = !1, typeof window < "u" && (window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0));
      const i = this.getNode();
      Yr--, this._fire("transformend", { evt: t, target: i }), (n = this.getLayer()) === null || n === void 0 || n.batchDraw(), i && this._nodes.forEach((s) => {
        var r;
        s._fire("transformend", { evt: t, target: s }), (r = s.getLayer()) === null || r === void 0 || r.batchDraw();
      }), this._movingAnchorName = null;
    }
  }
  _fitNodesInto(t, n) {
    const i = this._getNodeRect(), s = 1;
    if (yt.Util._inRange(t.width, -this.padding() * 2 - s, s)) {
      this.update();
      return;
    }
    if (yt.Util._inRange(t.height, -this.padding() * 2 - s, s)) {
      this.update();
      return;
    }
    const r = new yt.Transform();
    if (r.rotate(he.Konva.getAngle(this.rotation())), this._movingAnchorName && t.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
      const f = r.point({
        x: -this.padding() * 2,
        y: 0
      });
      t.x += f.x, t.y += f.y, t.width += this.padding() * 2, this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= f.x, this._anchorDragOffset.y -= f.y;
    } else if (this._movingAnchorName && t.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
      const f = r.point({
        x: this.padding() * 2,
        y: 0
      });
      this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= f.x, this._anchorDragOffset.y -= f.y, t.width += this.padding() * 2;
    }
    if (this._movingAnchorName && t.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
      const f = r.point({
        x: 0,
        y: -this.padding() * 2
      });
      t.x += f.x, t.y += f.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= f.x, this._anchorDragOffset.y -= f.y, t.height += this.padding() * 2;
    } else if (this._movingAnchorName && t.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
      const f = r.point({
        x: 0,
        y: this.padding() * 2
      });
      this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= f.x, this._anchorDragOffset.y -= f.y, t.height += this.padding() * 2;
    }
    if (this.boundBoxFunc()) {
      const f = this.boundBoxFunc()(i, t);
      f ? t = f : yt.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
    }
    const o = 1e7, a = new yt.Transform();
    a.translate(i.x, i.y), a.rotate(i.rotation), a.scale(i.width / o, i.height / o);
    const l = new yt.Transform(), h = t.width / o, c = t.height / o;
    this.flipEnabled() === !1 ? (l.translate(t.x, t.y), l.rotate(t.rotation), l.translate(t.width < 0 ? t.width : 0, t.height < 0 ? t.height : 0), l.scale(Math.abs(h), Math.abs(c))) : (l.translate(t.x, t.y), l.rotate(t.rotation), l.scale(h, c));
    const g = l.multiply(a.invert());
    this._nodes.forEach((f) => {
      var _;
      const u = f.getParent().getAbsoluteTransform(), m = f.getTransform().copy();
      m.translate(f.offsetX(), f.offsetY());
      const y = new yt.Transform();
      y.multiply(u.copy().invert()).multiply(g).multiply(u).multiply(m);
      const C = y.decompose();
      f.setAttrs(C), (_ = f.getLayer()) === null || _ === void 0 || _.batchDraw();
    }), this.rotation(yt.Util._getRotation(t.rotation)), this._nodes.forEach((f) => {
      this._fire("transform", { evt: n, target: f }), f._fire("transform", { evt: n, target: f });
    }), this._resetTransformCache(), this.update(), this.getLayer().batchDraw();
  }
  forceUpdate() {
    this._resetTransformCache(), this.update();
  }
  _batchChangeChild(t, n) {
    this.findOne(t).setAttrs(n);
  }
  update() {
    var t;
    const n = this._getNodeRect();
    this.rotation(yt.Util._getRotation(n.rotation));
    const i = n.width, s = n.height, r = this.enabledAnchors(), o = this.resizeEnabled(), a = this.padding(), l = this.anchorSize(), h = this.find("._anchor");
    h.forEach((g) => {
      g.setAttrs({
        width: l,
        height: l,
        offsetX: l / 2,
        offsetY: l / 2,
        stroke: this.anchorStroke(),
        strokeWidth: this.anchorStrokeWidth(),
        fill: this.anchorFill(),
        cornerRadius: this.anchorCornerRadius()
      });
    }), this._batchChangeChild(".top-left", {
      x: 0,
      y: 0,
      offsetX: l / 2 + a,
      offsetY: l / 2 + a,
      visible: o && r.indexOf("top-left") >= 0
    }), this._batchChangeChild(".top-center", {
      x: i / 2,
      y: 0,
      offsetY: l / 2 + a,
      visible: o && r.indexOf("top-center") >= 0
    }), this._batchChangeChild(".top-right", {
      x: i,
      y: 0,
      offsetX: l / 2 - a,
      offsetY: l / 2 + a,
      visible: o && r.indexOf("top-right") >= 0
    }), this._batchChangeChild(".middle-left", {
      x: 0,
      y: s / 2,
      offsetX: l / 2 + a,
      visible: o && r.indexOf("middle-left") >= 0
    }), this._batchChangeChild(".middle-right", {
      x: i,
      y: s / 2,
      offsetX: l / 2 - a,
      visible: o && r.indexOf("middle-right") >= 0
    }), this._batchChangeChild(".bottom-left", {
      x: 0,
      y: s,
      offsetX: l / 2 + a,
      offsetY: l / 2 - a,
      visible: o && r.indexOf("bottom-left") >= 0
    }), this._batchChangeChild(".bottom-center", {
      x: i / 2,
      y: s,
      offsetY: l / 2 - a,
      visible: o && r.indexOf("bottom-center") >= 0
    }), this._batchChangeChild(".bottom-right", {
      x: i,
      y: s,
      offsetX: l / 2 - a,
      offsetY: l / 2 - a,
      visible: o && r.indexOf("bottom-right") >= 0
    }), this._batchChangeChild(".rotater", {
      x: i / 2,
      y: -this.rotateAnchorOffset() * yt.Util._sign(s) - a,
      visible: this.rotateEnabled()
    }), this._batchChangeChild(".back", {
      width: i,
      height: s,
      visible: this.borderEnabled(),
      stroke: this.borderStroke(),
      strokeWidth: this.borderStrokeWidth(),
      dash: this.borderDash(),
      x: 0,
      y: 0
    });
    const c = this.anchorStyleFunc();
    c && h.forEach((g) => {
      c(g);
    }), (t = this.getLayer()) === null || t === void 0 || t.batchDraw();
  }
  isTransforming() {
    return this._transforming;
  }
  stopTransform() {
    if (this._transforming) {
      this._removeEvents();
      const t = this.findOne("." + this._movingAnchorName);
      t && t.stopDrag();
    }
  }
  destroy() {
    return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), Oa.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
  }
  toObject() {
    return Ma.Node.prototype.toObject.call(this);
  }
  clone(t) {
    return Ma.Node.prototype.clone.call(this, t);
  }
  getClientRect() {
    return this.nodes().length > 0 ? super.getClientRect() : { x: 0, y: 0, width: 0, height: 0 };
  }
}
Ns.Transformer = ct;
ct.isTransforming = () => Yr > 0;
function qu(e) {
  return e instanceof Array || yt.Util.warn("enabledAnchors value should be an array"), e instanceof Array && e.forEach(function(t) {
    Xi.indexOf(t) === -1 && yt.Util.warn("Unknown anchor name: " + t + ". Available names are: " + Xi.join(", "));
  }), e || [];
}
ct.prototype.className = "Transformer";
(0, Bu._registerNode)(ct);
ft.Factory.addGetterSetter(ct, "enabledAnchors", Xi, qu);
ft.Factory.addGetterSetter(ct, "flipEnabled", !0, (0, Je.getBooleanValidator)());
ft.Factory.addGetterSetter(ct, "resizeEnabled", !0);
ft.Factory.addGetterSetter(ct, "anchorSize", 10, (0, Je.getNumberValidator)());
ft.Factory.addGetterSetter(ct, "rotateEnabled", !0);
ft.Factory.addGetterSetter(ct, "rotateLineVisible", !0);
ft.Factory.addGetterSetter(ct, "rotationSnaps", []);
ft.Factory.addGetterSetter(ct, "rotateAnchorOffset", 50, (0, Je.getNumberValidator)());
ft.Factory.addGetterSetter(ct, "rotateAnchorCursor", "crosshair");
ft.Factory.addGetterSetter(ct, "rotationSnapTolerance", 5, (0, Je.getNumberValidator)());
ft.Factory.addGetterSetter(ct, "borderEnabled", !0);
ft.Factory.addGetterSetter(ct, "anchorStroke", "rgb(0, 161, 255)");
ft.Factory.addGetterSetter(ct, "anchorStrokeWidth", 1, (0, Je.getNumberValidator)());
ft.Factory.addGetterSetter(ct, "anchorFill", "white");
ft.Factory.addGetterSetter(ct, "anchorCornerRadius", 0, (0, Je.getNumberValidator)());
ft.Factory.addGetterSetter(ct, "borderStroke", "rgb(0, 161, 255)");
ft.Factory.addGetterSetter(ct, "borderStrokeWidth", 1, (0, Je.getNumberValidator)());
ft.Factory.addGetterSetter(ct, "borderDash");
ft.Factory.addGetterSetter(ct, "keepRatio", !0);
ft.Factory.addGetterSetter(ct, "shiftBehavior", "default");
ft.Factory.addGetterSetter(ct, "centeredScaling", !1);
ft.Factory.addGetterSetter(ct, "ignoreStroke", !1);
ft.Factory.addGetterSetter(ct, "padding", 0, (0, Je.getNumberValidator)());
ft.Factory.addGetterSetter(ct, "nodes");
ft.Factory.addGetterSetter(ct, "node");
ft.Factory.addGetterSetter(ct, "boundBoxFunc");
ft.Factory.addGetterSetter(ct, "anchorDragBoundFunc");
ft.Factory.addGetterSetter(ct, "anchorStyleFunc");
ft.Factory.addGetterSetter(ct, "shouldOverdrawWholeArea", !1);
ft.Factory.addGetterSetter(ct, "useSingleNodeRotation", !0);
ft.Factory.backCompat(ct, {
  lineEnabled: "borderEnabled",
  rotateHandlerOffset: "rotateAnchorOffset",
  enabledHandlers: "enabledAnchors"
});
var Ds = {};
Object.defineProperty(Ds, "__esModule", { value: !0 });
Ds.Wedge = void 0;
const Is = at, Zu = Dt, Ju = ot, Tc = Z, Qu = ot;
class Ie extends Zu.Shape {
  _sceneFunc(t) {
    t.beginPath(), t.arc(0, 0, this.radius(), 0, Ju.Konva.getAngle(this.angle()), this.clockwise()), t.lineTo(0, 0), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(t) {
    this.radius(t / 2);
  }
  setHeight(t) {
    this.radius(t / 2);
  }
}
Ds.Wedge = Ie;
Ie.prototype.className = "Wedge";
Ie.prototype._centroid = !0;
Ie.prototype._attrsAffectingSize = ["radius"];
(0, Qu._registerNode)(Ie);
Is.Factory.addGetterSetter(Ie, "radius", 0, (0, Tc.getNumberValidator)());
Is.Factory.addGetterSetter(Ie, "angle", 0, (0, Tc.getNumberValidator)());
Is.Factory.addGetterSetter(Ie, "clockwise", !1);
Is.Factory.backCompat(Ie, {
  angleDeg: "angle",
  getAngleDeg: "getAngle",
  setAngleDeg: "setAngle"
});
var Gs = {};
Object.defineProperty(Gs, "__esModule", { value: !0 });
Gs.Blur = void 0;
const Na = at, tf = Tt, ef = Z;
function Da() {
  this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
}
const nf = [
  512,
  512,
  456,
  512,
  328,
  456,
  335,
  512,
  405,
  328,
  271,
  456,
  388,
  335,
  292,
  512,
  454,
  405,
  364,
  328,
  298,
  271,
  496,
  456,
  420,
  388,
  360,
  335,
  312,
  292,
  273,
  512,
  482,
  454,
  428,
  405,
  383,
  364,
  345,
  328,
  312,
  298,
  284,
  271,
  259,
  496,
  475,
  456,
  437,
  420,
  404,
  388,
  374,
  360,
  347,
  335,
  323,
  312,
  302,
  292,
  282,
  273,
  265,
  512,
  497,
  482,
  468,
  454,
  441,
  428,
  417,
  405,
  394,
  383,
  373,
  364,
  354,
  345,
  337,
  328,
  320,
  312,
  305,
  298,
  291,
  284,
  278,
  271,
  265,
  259,
  507,
  496,
  485,
  475,
  465,
  456,
  446,
  437,
  428,
  420,
  412,
  404,
  396,
  388,
  381,
  374,
  367,
  360,
  354,
  347,
  341,
  335,
  329,
  323,
  318,
  312,
  307,
  302,
  297,
  292,
  287,
  282,
  278,
  273,
  269,
  265,
  261,
  512,
  505,
  497,
  489,
  482,
  475,
  468,
  461,
  454,
  447,
  441,
  435,
  428,
  422,
  417,
  411,
  405,
  399,
  394,
  389,
  383,
  378,
  373,
  368,
  364,
  359,
  354,
  350,
  345,
  341,
  337,
  332,
  328,
  324,
  320,
  316,
  312,
  309,
  305,
  301,
  298,
  294,
  291,
  287,
  284,
  281,
  278,
  274,
  271,
  268,
  265,
  262,
  259,
  257,
  507,
  501,
  496,
  491,
  485,
  480,
  475,
  470,
  465,
  460,
  456,
  451,
  446,
  442,
  437,
  433,
  428,
  424,
  420,
  416,
  412,
  408,
  404,
  400,
  396,
  392,
  388,
  385,
  381,
  377,
  374,
  370,
  367,
  363,
  360,
  357,
  354,
  350,
  347,
  344,
  341,
  338,
  335,
  332,
  329,
  326,
  323,
  320,
  318,
  315,
  312,
  310,
  307,
  304,
  302,
  299,
  297,
  294,
  292,
  289,
  287,
  285,
  282,
  280,
  278,
  275,
  273,
  271,
  269,
  267,
  265,
  263,
  261,
  259
], sf = [
  9,
  11,
  12,
  13,
  13,
  14,
  14,
  15,
  15,
  15,
  15,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24
];
function rf(e, t) {
  const n = e.data, i = e.width, s = e.height;
  let r, o, a, l, h, c, g, f, _, u, m, y, C, x, d, p, v, P, R, S;
  const k = t + t + 1, T = i - 1, M = s - 1, F = t + 1, B = F * (F + 1) / 2, Y = new Da(), $ = nf[t], et = sf[t];
  let X = null, U = Y, rt = null, J = null;
  for (let nt = 1; nt < k; nt++)
    U = U.next = new Da(), nt === F && (X = U);
  U.next = Y, a = o = 0;
  for (let nt = 0; nt < s; nt++) {
    y = C = x = d = l = h = c = g = 0, f = F * (p = n[o]), _ = F * (v = n[o + 1]), u = F * (P = n[o + 2]), m = F * (R = n[o + 3]), l += B * p, h += B * v, c += B * P, g += B * R, U = Y;
    for (let W = 0; W < F; W++)
      U.r = p, U.g = v, U.b = P, U.a = R, U = U.next;
    for (let W = 1; W < F; W++)
      r = o + ((T < W ? T : W) << 2), l += (U.r = p = n[r]) * (S = F - W), h += (U.g = v = n[r + 1]) * S, c += (U.b = P = n[r + 2]) * S, g += (U.a = R = n[r + 3]) * S, y += p, C += v, x += P, d += R, U = U.next;
    rt = Y, J = X;
    for (let W = 0; W < i; W++)
      n[o + 3] = R = g * $ >> et, R !== 0 ? (R = 255 / R, n[o] = (l * $ >> et) * R, n[o + 1] = (h * $ >> et) * R, n[o + 2] = (c * $ >> et) * R) : n[o] = n[o + 1] = n[o + 2] = 0, l -= f, h -= _, c -= u, g -= m, f -= rt.r, _ -= rt.g, u -= rt.b, m -= rt.a, r = a + ((r = W + t + 1) < T ? r : T) << 2, y += rt.r = n[r], C += rt.g = n[r + 1], x += rt.b = n[r + 2], d += rt.a = n[r + 3], l += y, h += C, c += x, g += d, rt = rt.next, f += p = J.r, _ += v = J.g, u += P = J.b, m += R = J.a, y -= p, C -= v, x -= P, d -= R, J = J.next, o += 4;
    a += i;
  }
  for (let nt = 0; nt < i; nt++) {
    C = x = d = y = h = c = g = l = 0, o = nt << 2, f = F * (p = n[o]), _ = F * (v = n[o + 1]), u = F * (P = n[o + 2]), m = F * (R = n[o + 3]), l += B * p, h += B * v, c += B * P, g += B * R, U = Y;
    for (let St = 0; St < F; St++)
      U.r = p, U.g = v, U.b = P, U.a = R, U = U.next;
    let W = i;
    for (let St = 1; St <= t; St++)
      o = W + nt << 2, l += (U.r = p = n[o]) * (S = F - St), h += (U.g = v = n[o + 1]) * S, c += (U.b = P = n[o + 2]) * S, g += (U.a = R = n[o + 3]) * S, y += p, C += v, x += P, d += R, U = U.next, St < M && (W += i);
    o = nt, rt = Y, J = X;
    for (let St = 0; St < s; St++)
      r = o << 2, n[r + 3] = R = g * $ >> et, R > 0 ? (R = 255 / R, n[r] = (l * $ >> et) * R, n[r + 1] = (h * $ >> et) * R, n[r + 2] = (c * $ >> et) * R) : n[r] = n[r + 1] = n[r + 2] = 0, l -= f, h -= _, c -= u, g -= m, f -= rt.r, _ -= rt.g, u -= rt.b, m -= rt.a, r = nt + ((r = St + F) < M ? r : M) * i << 2, l += y += rt.r = n[r], h += C += rt.g = n[r + 1], c += x += rt.b = n[r + 2], g += d += rt.a = n[r + 3], rt = rt.next, f += p = J.r, _ += v = J.g, u += P = J.b, m += R = J.a, y -= p, C -= v, x -= P, d -= R, J = J.next, o += i;
  }
}
const of = function(t) {
  const n = Math.round(this.blurRadius());
  n > 0 && rf(t, n);
};
Gs.Blur = of;
Na.Factory.addGetterSetter(tf.Node, "blurRadius", 0, (0, ef.getNumberValidator)(), Na.Factory.afterSetFilter);
var Vs = {};
Object.defineProperty(Vs, "__esModule", { value: !0 });
Vs.Brighten = void 0;
const Ia = at, af = Tt, lf = Z, cf = function(e) {
  const t = this.brightness() * 255, n = e.data, i = n.length;
  for (let s = 0; s < i; s += 4)
    n[s] += t, n[s + 1] += t, n[s + 2] += t;
};
Vs.Brighten = cf;
Ia.Factory.addGetterSetter(af.Node, "brightness", 0, (0, lf.getNumberValidator)(), Ia.Factory.afterSetFilter);
var Us = {};
Object.defineProperty(Us, "__esModule", { value: !0 });
Us.Contrast = void 0;
const Ga = at, hf = Tt, df = Z, uf = function(e) {
  const t = Math.pow((this.contrast() + 100) / 100, 2), n = e.data, i = n.length;
  let s = 150, r = 150, o = 150;
  for (let a = 0; a < i; a += 4)
    s = n[a], r = n[a + 1], o = n[a + 2], s /= 255, s -= 0.5, s *= t, s += 0.5, s *= 255, r /= 255, r -= 0.5, r *= t, r += 0.5, r *= 255, o /= 255, o -= 0.5, o *= t, o += 0.5, o *= 255, s = s < 0 ? 0 : s > 255 ? 255 : s, r = r < 0 ? 0 : r > 255 ? 255 : r, o = o < 0 ? 0 : o > 255 ? 255 : o, n[a] = s, n[a + 1] = r, n[a + 2] = o;
};
Us.Contrast = uf;
Ga.Factory.addGetterSetter(hf.Node, "contrast", 0, (0, df.getNumberValidator)(), Ga.Factory.afterSetFilter);
var Bs = {};
Object.defineProperty(Bs, "__esModule", { value: !0 });
Bs.Emboss = void 0;
const je = at, Hs = Tt, ff = At, Ac = Z, gf = function(e) {
  const t = this.embossStrength() * 10, n = this.embossWhiteLevel() * 255, i = this.embossDirection(), s = this.embossBlend(), r = e.data, o = e.width, a = e.height, l = o * 4;
  let h = 0, c = 0, g = a;
  switch (i) {
    case "top-left":
      h = -1, c = -1;
      break;
    case "top":
      h = -1, c = 0;
      break;
    case "top-right":
      h = -1, c = 1;
      break;
    case "right":
      h = 0, c = 1;
      break;
    case "bottom-right":
      h = 1, c = 1;
      break;
    case "bottom":
      h = 1, c = 0;
      break;
    case "bottom-left":
      h = 1, c = -1;
      break;
    case "left":
      h = 0, c = -1;
      break;
    default:
      ff.Util.error("Unknown emboss direction: " + i);
  }
  do {
    const f = (g - 1) * l;
    let _ = h;
    g + _ < 1 && (_ = 0), g + _ > a && (_ = 0);
    const u = (g - 1 + _) * o * 4;
    let m = o;
    do {
      const y = f + (m - 1) * 4;
      let C = c;
      m + C < 1 && (C = 0), m + C > o && (C = 0);
      const x = u + (m - 1 + C) * 4, d = r[y] - r[x], p = r[y + 1] - r[x + 1], v = r[y + 2] - r[x + 2];
      let P = d;
      const R = P > 0 ? P : -P, S = p > 0 ? p : -p, k = v > 0 ? v : -v;
      if (S > R && (P = p), k > R && (P = v), P *= t, s) {
        const T = r[y] + P, M = r[y + 1] + P, F = r[y + 2] + P;
        r[y] = T > 255 ? 255 : T < 0 ? 0 : T, r[y + 1] = M > 255 ? 255 : M < 0 ? 0 : M, r[y + 2] = F > 255 ? 255 : F < 0 ? 0 : F;
      } else {
        let T = n - P;
        T < 0 ? T = 0 : T > 255 && (T = 255), r[y] = r[y + 1] = r[y + 2] = T;
      }
    } while (--m);
  } while (--g);
};
Bs.Emboss = gf;
je.Factory.addGetterSetter(Hs.Node, "embossStrength", 0.5, (0, Ac.getNumberValidator)(), je.Factory.afterSetFilter);
je.Factory.addGetterSetter(Hs.Node, "embossWhiteLevel", 0.5, (0, Ac.getNumberValidator)(), je.Factory.afterSetFilter);
je.Factory.addGetterSetter(Hs.Node, "embossDirection", "top-left", void 0, je.Factory.afterSetFilter);
je.Factory.addGetterSetter(Hs.Node, "embossBlend", !1, void 0, je.Factory.afterSetFilter);
var $s = {};
Object.defineProperty($s, "__esModule", { value: !0 });
$s.Enhance = void 0;
const Va = at, pf = Tt, _f = Z;
function Pr(e, t, n, i, s) {
  const r = n - t, o = s - i;
  if (r === 0)
    return i + o / 2;
  if (o === 0)
    return i;
  let a = (e - t) / r;
  return a = o * a + i, a;
}
const mf = function(e) {
  const t = e.data, n = t.length;
  let i = t[0], s = i, r, o = t[1], a = o, l, h = t[2], c = h, g;
  const f = this.enhance();
  if (f === 0)
    return;
  for (let d = 0; d < n; d += 4)
    r = t[d + 0], r < i ? i = r : r > s && (s = r), l = t[d + 1], l < o ? o = l : l > a && (a = l), g = t[d + 2], g < h ? h = g : g > c && (c = g);
  s === i && (s = 255, i = 0), a === o && (a = 255, o = 0), c === h && (c = 255, h = 0);
  let _, u, m, y, C, x;
  if (f > 0)
    _ = s + f * (255 - s), u = i - f * (i - 0), m = a + f * (255 - a), y = o - f * (o - 0), C = c + f * (255 - c), x = h - f * (h - 0);
  else {
    const d = (s + i) * 0.5;
    _ = s + f * (s - d), u = i + f * (i - d);
    const p = (a + o) * 0.5;
    m = a + f * (a - p), y = o + f * (o - p);
    const v = (c + h) * 0.5;
    C = c + f * (c - v), x = h + f * (h - v);
  }
  for (let d = 0; d < n; d += 4)
    t[d + 0] = Pr(t[d + 0], i, s, u, _), t[d + 1] = Pr(t[d + 1], o, a, y, m), t[d + 2] = Pr(t[d + 2], h, c, x, C);
};
$s.Enhance = mf;
Va.Factory.addGetterSetter(pf.Node, "enhance", 0, (0, _f.getNumberValidator)(), Va.Factory.afterSetFilter);
var js = {};
Object.defineProperty(js, "__esModule", { value: !0 });
js.Grayscale = void 0;
const yf = function(e) {
  const t = e.data, n = t.length;
  for (let i = 0; i < n; i += 4) {
    const s = 0.34 * t[i] + 0.5 * t[i + 1] + 0.16 * t[i + 2];
    t[i] = s, t[i + 1] = s, t[i + 2] = s;
  }
};
js.Grayscale = yf;
var Ws = {};
Object.defineProperty(Ws, "__esModule", { value: !0 });
Ws.HSL = void 0;
const In = at, Ro = Tt, ko = Z;
In.Factory.addGetterSetter(Ro.Node, "hue", 0, (0, ko.getNumberValidator)(), In.Factory.afterSetFilter);
In.Factory.addGetterSetter(Ro.Node, "saturation", 0, (0, ko.getNumberValidator)(), In.Factory.afterSetFilter);
In.Factory.addGetterSetter(Ro.Node, "luminance", 0, (0, ko.getNumberValidator)(), In.Factory.afterSetFilter);
const bf = function(e) {
  const t = e.data, n = t.length, i = 1, s = Math.pow(2, this.saturation()), r = Math.abs(this.hue() + 360) % 360, o = this.luminance() * 127, a = i * s * Math.cos(r * Math.PI / 180), l = i * s * Math.sin(r * Math.PI / 180), h = 0.299 * i + 0.701 * a + 0.167 * l, c = 0.587 * i - 0.587 * a + 0.33 * l, g = 0.114 * i - 0.114 * a - 0.497 * l, f = 0.299 * i - 0.299 * a - 0.328 * l, _ = 0.587 * i + 0.413 * a + 0.035 * l, u = 0.114 * i - 0.114 * a + 0.293 * l, m = 0.299 * i - 0.3 * a + 1.25 * l, y = 0.587 * i - 0.586 * a - 1.05 * l, C = 0.114 * i + 0.886 * a - 0.2 * l;
  let x, d, p, v;
  for (let P = 0; P < n; P += 4)
    x = t[P + 0], d = t[P + 1], p = t[P + 2], v = t[P + 3], t[P + 0] = h * x + c * d + g * p + o, t[P + 1] = f * x + _ * d + u * p + o, t[P + 2] = m * x + y * d + C * p + o, t[P + 3] = v;
};
Ws.HSL = bf;
var zs = {};
Object.defineProperty(zs, "__esModule", { value: !0 });
zs.HSV = void 0;
const Gn = at, Mo = Tt, Oo = Z, vf = function(e) {
  const t = e.data, n = t.length, i = Math.pow(2, this.value()), s = Math.pow(2, this.saturation()), r = Math.abs(this.hue() + 360) % 360, o = i * s * Math.cos(r * Math.PI / 180), a = i * s * Math.sin(r * Math.PI / 180), l = 0.299 * i + 0.701 * o + 0.167 * a, h = 0.587 * i - 0.587 * o + 0.33 * a, c = 0.114 * i - 0.114 * o - 0.497 * a, g = 0.299 * i - 0.299 * o - 0.328 * a, f = 0.587 * i + 0.413 * o + 0.035 * a, _ = 0.114 * i - 0.114 * o + 0.293 * a, u = 0.299 * i - 0.3 * o + 1.25 * a, m = 0.587 * i - 0.586 * o - 1.05 * a, y = 0.114 * i + 0.886 * o - 0.2 * a;
  for (let C = 0; C < n; C += 4) {
    const x = t[C + 0], d = t[C + 1], p = t[C + 2], v = t[C + 3];
    t[C + 0] = l * x + h * d + c * p, t[C + 1] = g * x + f * d + _ * p, t[C + 2] = u * x + m * d + y * p, t[C + 3] = v;
  }
};
zs.HSV = vf;
Gn.Factory.addGetterSetter(Mo.Node, "hue", 0, (0, Oo.getNumberValidator)(), Gn.Factory.afterSetFilter);
Gn.Factory.addGetterSetter(Mo.Node, "saturation", 0, (0, Oo.getNumberValidator)(), Gn.Factory.afterSetFilter);
Gn.Factory.addGetterSetter(Mo.Node, "value", 0, (0, Oo.getNumberValidator)(), Gn.Factory.afterSetFilter);
var Ks = {};
Object.defineProperty(Ks, "__esModule", { value: !0 });
Ks.Invert = void 0;
const Sf = function(e) {
  const t = e.data, n = t.length;
  for (let i = 0; i < n; i += 4)
    t[i] = 255 - t[i], t[i + 1] = 255 - t[i + 1], t[i + 2] = 255 - t[i + 2];
};
Ks.Invert = Sf;
var Ys = {};
Object.defineProperty(Ys, "__esModule", { value: !0 });
Ys.Kaleidoscope = void 0;
const qi = at, Rc = Tt, Ua = At, kc = Z, Cf = function(e, t, n) {
  const i = e.data, s = t.data, r = e.width, o = e.height, a = n.polarCenterX || r / 2, l = n.polarCenterY || o / 2;
  let h = Math.sqrt(a * a + l * l), c = r - a, g = o - l;
  const f = Math.sqrt(c * c + g * g);
  h = f > h ? f : h;
  const _ = o, u = r, m = 360 / u * Math.PI / 180;
  for (let y = 0; y < u; y += 1) {
    const C = Math.sin(y * m), x = Math.cos(y * m);
    for (let d = 0; d < _; d += 1) {
      c = Math.floor(a + h * d / _ * x), g = Math.floor(l + h * d / _ * C);
      let p = (g * r + c) * 4;
      const v = i[p + 0], P = i[p + 1], R = i[p + 2], S = i[p + 3];
      p = (y + d * r) * 4, s[p + 0] = v, s[p + 1] = P, s[p + 2] = R, s[p + 3] = S;
    }
  }
}, wf = function(e, t, n) {
  const i = e.data, s = t.data, r = e.width, o = e.height, a = n.polarCenterX || r / 2, l = n.polarCenterY || o / 2;
  let h = Math.sqrt(a * a + l * l), c = r - a, g = o - l;
  const f = Math.sqrt(c * c + g * g);
  h = f > h ? f : h;
  const _ = o, u = r, m = n.polarRotation || 0;
  let y, C;
  for (c = 0; c < r; c += 1)
    for (g = 0; g < o; g += 1) {
      const x = c - a, d = g - l, p = Math.sqrt(x * x + d * d) * _ / h;
      let v = (Math.atan2(d, x) * 180 / Math.PI + 360 + m) % 360;
      v = v * u / 360, y = Math.floor(v), C = Math.floor(p);
      let P = (C * r + y) * 4;
      const R = i[P + 0], S = i[P + 1], k = i[P + 2], T = i[P + 3];
      P = (g * r + c) * 4, s[P + 0] = R, s[P + 1] = S, s[P + 2] = k, s[P + 3] = T;
    }
}, xf = function(e) {
  const t = e.width, n = e.height;
  let i, s, r, o, a, l, h, c, g, f, _ = Math.round(this.kaleidoscopePower());
  const u = Math.round(this.kaleidoscopeAngle()), m = Math.floor(t * (u % 360) / 360);
  if (_ < 1)
    return;
  const y = Ua.Util.createCanvasElement();
  y.width = t, y.height = n;
  const C = y.getContext("2d").getImageData(0, 0, t, n);
  Ua.Util.releaseCanvas(y), Cf(e, C, {
    polarCenterX: t / 2,
    polarCenterY: n / 2
  });
  let x = t / Math.pow(2, _);
  for (; x <= 8; )
    x = x * 2, _ -= 1;
  x = Math.ceil(x);
  let d = x, p = 0, v = d, P = 1;
  for (m + x > t && (p = d, v = 0, P = -1), s = 0; s < n; s += 1)
    for (i = p; i !== v; i += P)
      r = Math.round(i + m) % t, g = (t * s + r) * 4, a = C.data[g + 0], l = C.data[g + 1], h = C.data[g + 2], c = C.data[g + 3], f = (t * s + i) * 4, C.data[f + 0] = a, C.data[f + 1] = l, C.data[f + 2] = h, C.data[f + 3] = c;
  for (s = 0; s < n; s += 1)
    for (d = Math.floor(x), o = 0; o < _; o += 1) {
      for (i = 0; i < d + 1; i += 1)
        g = (t * s + i) * 4, a = C.data[g + 0], l = C.data[g + 1], h = C.data[g + 2], c = C.data[g + 3], f = (t * s + d * 2 - i - 1) * 4, C.data[f + 0] = a, C.data[f + 1] = l, C.data[f + 2] = h, C.data[f + 3] = c;
      d *= 2;
    }
  wf(C, e, { polarRotation: 0 });
};
Ys.Kaleidoscope = xf;
qi.Factory.addGetterSetter(Rc.Node, "kaleidoscopePower", 2, (0, kc.getNumberValidator)(), qi.Factory.afterSetFilter);
qi.Factory.addGetterSetter(Rc.Node, "kaleidoscopeAngle", 0, (0, kc.getNumberValidator)(), qi.Factory.afterSetFilter);
var Xs = {};
Object.defineProperty(Xs, "__esModule", { value: !0 });
Xs.Mask = void 0;
const Ba = at, Ef = Tt, Pf = Z;
function Di(e, t, n) {
  let i = (n * e.width + t) * 4;
  const s = [];
  return s.push(e.data[i++], e.data[i++], e.data[i++], e.data[i++]), s;
}
function ti(e, t) {
  return Math.sqrt(Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2) + Math.pow(e[2] - t[2], 2));
}
function Tf(e) {
  const t = [0, 0, 0];
  for (let n = 0; n < e.length; n++)
    t[0] += e[n][0], t[1] += e[n][1], t[2] += e[n][2];
  return t[0] /= e.length, t[1] /= e.length, t[2] /= e.length, t;
}
function Af(e, t) {
  const n = Di(e, 0, 0), i = Di(e, e.width - 1, 0), s = Di(e, 0, e.height - 1), r = Di(e, e.width - 1, e.height - 1), o = t || 10;
  if (ti(n, i) < o && ti(i, r) < o && ti(r, s) < o && ti(s, n) < o) {
    const a = Tf([i, n, r, s]), l = [];
    for (let h = 0; h < e.width * e.height; h++) {
      const c = ti(a, [
        e.data[h * 4],
        e.data[h * 4 + 1],
        e.data[h * 4 + 2]
      ]);
      l[h] = c < o ? 0 : 255;
    }
    return l;
  }
}
function Rf(e, t) {
  for (let n = 0; n < e.width * e.height; n++)
    e.data[4 * n + 3] = t[n];
}
function kf(e, t, n) {
  const i = [1, 1, 1, 1, 0, 1, 1, 1, 1], s = Math.round(Math.sqrt(i.length)), r = Math.floor(s / 2), o = [];
  for (let a = 0; a < n; a++)
    for (let l = 0; l < t; l++) {
      const h = a * t + l;
      let c = 0;
      for (let g = 0; g < s; g++)
        for (let f = 0; f < s; f++) {
          const _ = a + g - r, u = l + f - r;
          if (_ >= 0 && _ < n && u >= 0 && u < t) {
            const m = _ * t + u, y = i[g * s + f];
            c += e[m] * y;
          }
        }
      o[h] = c === 255 * 8 ? 255 : 0;
    }
  return o;
}
function Mf(e, t, n) {
  const i = [1, 1, 1, 1, 1, 1, 1, 1, 1], s = Math.round(Math.sqrt(i.length)), r = Math.floor(s / 2), o = [];
  for (let a = 0; a < n; a++)
    for (let l = 0; l < t; l++) {
      const h = a * t + l;
      let c = 0;
      for (let g = 0; g < s; g++)
        for (let f = 0; f < s; f++) {
          const _ = a + g - r, u = l + f - r;
          if (_ >= 0 && _ < n && u >= 0 && u < t) {
            const m = _ * t + u, y = i[g * s + f];
            c += e[m] * y;
          }
        }
      o[h] = c >= 255 * 4 ? 255 : 0;
    }
  return o;
}
function Of(e, t, n) {
  const i = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], s = Math.round(Math.sqrt(i.length)), r = Math.floor(s / 2), o = [];
  for (let a = 0; a < n; a++)
    for (let l = 0; l < t; l++) {
      const h = a * t + l;
      let c = 0;
      for (let g = 0; g < s; g++)
        for (let f = 0; f < s; f++) {
          const _ = a + g - r, u = l + f - r;
          if (_ >= 0 && _ < n && u >= 0 && u < t) {
            const m = _ * t + u, y = i[g * s + f];
            c += e[m] * y;
          }
        }
      o[h] = c;
    }
  return o;
}
const Lf = function(e) {
  const t = this.threshold();
  let n = Af(e, t);
  return n && (n = kf(n, e.width, e.height), n = Mf(n, e.width, e.height), n = Of(n, e.width, e.height), Rf(e, n)), e;
};
Xs.Mask = Lf;
Ba.Factory.addGetterSetter(Ef.Node, "threshold", 0, (0, Pf.getNumberValidator)(), Ba.Factory.afterSetFilter);
var qs = {};
Object.defineProperty(qs, "__esModule", { value: !0 });
qs.Noise = void 0;
const Ha = at, Ff = Tt, Nf = Z, Df = function(e) {
  const t = this.noise() * 255, n = e.data, i = n.length, s = t / 2;
  for (let r = 0; r < i; r += 4)
    n[r + 0] += s - 2 * s * Math.random(), n[r + 1] += s - 2 * s * Math.random(), n[r + 2] += s - 2 * s * Math.random();
};
qs.Noise = Df;
Ha.Factory.addGetterSetter(Ff.Node, "noise", 0.2, (0, Nf.getNumberValidator)(), Ha.Factory.afterSetFilter);
var Zs = {};
Object.defineProperty(Zs, "__esModule", { value: !0 });
Zs.Pixelate = void 0;
const $a = at, If = At, Gf = Tt, Vf = Z, Uf = function(e) {
  let t = Math.ceil(this.pixelSize()), n = e.width, i = e.height, s = Math.ceil(n / t), r = Math.ceil(i / t), o = e.data;
  if (t <= 0) {
    If.Util.error("pixelSize value can not be <= 0");
    return;
  }
  for (let a = 0; a < s; a += 1)
    for (let l = 0; l < r; l += 1) {
      let h = 0, c = 0, g = 0, f = 0;
      const _ = a * t, u = _ + t, m = l * t, y = m + t;
      let C = 0;
      for (let x = _; x < u; x += 1)
        if (!(x >= n))
          for (let d = m; d < y; d += 1) {
            if (d >= i)
              continue;
            const p = (n * d + x) * 4;
            h += o[p + 0], c += o[p + 1], g += o[p + 2], f += o[p + 3], C += 1;
          }
      h = h / C, c = c / C, g = g / C, f = f / C;
      for (let x = _; x < u; x += 1)
        if (!(x >= n))
          for (let d = m; d < y; d += 1) {
            if (d >= i)
              continue;
            const p = (n * d + x) * 4;
            o[p + 0] = h, o[p + 1] = c, o[p + 2] = g, o[p + 3] = f;
          }
    }
};
Zs.Pixelate = Uf;
$a.Factory.addGetterSetter(Gf.Node, "pixelSize", 8, (0, Vf.getNumberValidator)(), $a.Factory.afterSetFilter);
var Js = {};
Object.defineProperty(Js, "__esModule", { value: !0 });
Js.Posterize = void 0;
const ja = at, Bf = Tt, Hf = Z, $f = function(e) {
  const t = Math.round(this.levels() * 254) + 1, n = e.data, i = n.length, s = 255 / t;
  for (let r = 0; r < i; r += 1)
    n[r] = Math.floor(n[r] / s) * s;
};
Js.Posterize = $f;
ja.Factory.addGetterSetter(Bf.Node, "levels", 0.5, (0, Hf.getNumberValidator)(), ja.Factory.afterSetFilter);
var Qs = {};
Object.defineProperty(Qs, "__esModule", { value: !0 });
Qs.RGB = void 0;
const Zi = at, Lo = Tt, jf = Z, Wf = function(e) {
  const t = e.data, n = t.length, i = this.red(), s = this.green(), r = this.blue();
  for (let o = 0; o < n; o += 4) {
    const a = (0.34 * t[o] + 0.5 * t[o + 1] + 0.16 * t[o + 2]) / 255;
    t[o] = a * i, t[o + 1] = a * s, t[o + 2] = a * r, t[o + 3] = t[o + 3];
  }
};
Qs.RGB = Wf;
Zi.Factory.addGetterSetter(Lo.Node, "red", 0, function(e) {
  return this._filterUpToDate = !1, e > 255 ? 255 : e < 0 ? 0 : Math.round(e);
});
Zi.Factory.addGetterSetter(Lo.Node, "green", 0, function(e) {
  return this._filterUpToDate = !1, e > 255 ? 255 : e < 0 ? 0 : Math.round(e);
});
Zi.Factory.addGetterSetter(Lo.Node, "blue", 0, jf.RGBComponent, Zi.Factory.afterSetFilter);
var tr = {};
Object.defineProperty(tr, "__esModule", { value: !0 });
tr.RGBA = void 0;
const pi = at, er = Tt, zf = Z, Kf = function(e) {
  const t = e.data, n = t.length, i = this.red(), s = this.green(), r = this.blue(), o = this.alpha();
  for (let a = 0; a < n; a += 4) {
    const l = 1 - o;
    t[a] = i * o + t[a] * l, t[a + 1] = s * o + t[a + 1] * l, t[a + 2] = r * o + t[a + 2] * l;
  }
};
tr.RGBA = Kf;
pi.Factory.addGetterSetter(er.Node, "red", 0, function(e) {
  return this._filterUpToDate = !1, e > 255 ? 255 : e < 0 ? 0 : Math.round(e);
});
pi.Factory.addGetterSetter(er.Node, "green", 0, function(e) {
  return this._filterUpToDate = !1, e > 255 ? 255 : e < 0 ? 0 : Math.round(e);
});
pi.Factory.addGetterSetter(er.Node, "blue", 0, zf.RGBComponent, pi.Factory.afterSetFilter);
pi.Factory.addGetterSetter(er.Node, "alpha", 1, function(e) {
  return this._filterUpToDate = !1, e > 1 ? 1 : e < 0 ? 0 : e;
});
var nr = {};
Object.defineProperty(nr, "__esModule", { value: !0 });
nr.Sepia = void 0;
const Yf = function(e) {
  const t = e.data, n = t.length;
  for (let i = 0; i < n; i += 4) {
    const s = t[i + 0], r = t[i + 1], o = t[i + 2];
    t[i + 0] = Math.min(255, s * 0.393 + r * 0.769 + o * 0.189), t[i + 1] = Math.min(255, s * 0.349 + r * 0.686 + o * 0.168), t[i + 2] = Math.min(255, s * 0.272 + r * 0.534 + o * 0.131);
  }
};
nr.Sepia = Yf;
var ir = {};
Object.defineProperty(ir, "__esModule", { value: !0 });
ir.Solarize = void 0;
const Xf = function(e) {
  const t = e.data, n = e.width, i = e.height, s = n * 4;
  let r = i;
  do {
    const o = (r - 1) * s;
    let a = n;
    do {
      const l = o + (a - 1) * 4;
      let h = t[l], c = t[l + 1], g = t[l + 2];
      h > 127 && (h = 255 - h), c > 127 && (c = 255 - c), g > 127 && (g = 255 - g), t[l] = h, t[l + 1] = c, t[l + 2] = g;
    } while (--a);
  } while (--r);
};
ir.Solarize = Xf;
var sr = {};
Object.defineProperty(sr, "__esModule", { value: !0 });
sr.Threshold = void 0;
const Wa = at, qf = Tt, Zf = Z, Jf = function(e) {
  const t = this.threshold() * 255, n = e.data, i = n.length;
  for (let s = 0; s < i; s += 1)
    n[s] = n[s] < t ? 0 : 255;
};
sr.Threshold = Jf;
Wa.Factory.addGetterSetter(qf.Node, "threshold", 0.5, (0, Zf.getNumberValidator)(), Wa.Factory.afterSetFilter);
Object.defineProperty(gs, "__esModule", { value: !0 });
gs.Konva = void 0;
const za = Zl, Qf = bs, t2 = Cs, e2 = Es, n2 = Ps, i2 = Ts, Ka = Dn, s2 = wi, r2 = Wn, o2 = Ei, a2 = ks, l2 = Ms, c2 = Os, h2 = Ls, d2 = Kn, u2 = Fs, f2 = Ns, g2 = Ds, p2 = Gs, _2 = Vs, m2 = Us, y2 = Bs, b2 = $s, v2 = js, S2 = Ws, C2 = zs, w2 = Ks, x2 = Ys, E2 = Xs, P2 = qs, T2 = Zs, A2 = Js, R2 = Qs, k2 = tr, M2 = nr, O2 = ir, L2 = sr;
gs.Konva = za.Konva.Util._assign(za.Konva, {
  Arc: Qf.Arc,
  Arrow: t2.Arrow,
  Circle: e2.Circle,
  Ellipse: n2.Ellipse,
  Image: i2.Image,
  Label: Ka.Label,
  Tag: Ka.Tag,
  Line: s2.Line,
  Path: r2.Path,
  Rect: o2.Rect,
  RegularPolygon: a2.RegularPolygon,
  Ring: l2.Ring,
  Sprite: c2.Sprite,
  Star: h2.Star,
  Text: d2.Text,
  TextPath: u2.TextPath,
  Transformer: f2.Transformer,
  Wedge: g2.Wedge,
  Filters: {
    Blur: p2.Blur,
    Brighten: _2.Brighten,
    Contrast: m2.Contrast,
    Emboss: y2.Emboss,
    Enhance: b2.Enhance,
    Grayscale: v2.Grayscale,
    HSL: S2.HSL,
    HSV: C2.HSV,
    Invert: w2.Invert,
    Kaleidoscope: x2.Kaleidoscope,
    Mask: E2.Mask,
    Noise: P2.Noise,
    Pixelate: T2.Pixelate,
    Posterize: A2.Posterize,
    RGB: R2.RGB,
    RGBA: k2.RGBA,
    Sepia: M2.Sepia,
    Solarize: O2.Solarize,
    Threshold: L2.Threshold
  }
});
var F2 = yo.exports;
Object.defineProperty(F2, "__esModule", { value: !0 });
const N2 = gs;
yo.exports = N2.Konva;
var D2 = yo.exports;
const Pt = /* @__PURE__ */ Ld(D2);
function Ji(e) {
  if (!Pt.autoDrawEnabled) {
    const t = e.getLayer() || e.getStage();
    t && t.batchDraw();
  }
}
const Ya = { key: !0, style: !0, elm: !0, isRootInsert: !0 }, Tr = ".vue-konva-event";
function Mc(e, t, n, i) {
  const s = e.__konvaNode, r = {};
  let o = !1;
  for (let a in n) {
    if (Ya.hasOwnProperty(a))
      continue;
    const l = a.slice(0, 2) === "on", h = n[a] !== t[a];
    if (l && h) {
      let c = a.slice(2).toLowerCase();
      c.slice(0, 7) === "content" && (c = "content" + c.slice(7, 1).toUpperCase() + c.slice(8)), s == null || s.off(c + Tr, n[a]);
    }
    !t.hasOwnProperty(a) && (s == null || s.setAttr(a, void 0));
  }
  for (let a in t) {
    if (Ya.hasOwnProperty(a))
      continue;
    let l = a.slice(0, 2) === "on";
    const h = n[a] !== t[a];
    if (l && h) {
      let c = a.slice(2).toLowerCase();
      c.slice(0, 7) === "content" && (c = "content" + c.slice(7, 1).toUpperCase() + c.slice(8)), t[a] && (s == null || s.off(c + Tr), s == null || s.on(c + Tr, t[a]));
    }
    !l && (t[a] !== n[a] || i && t[a] !== (s == null ? void 0 : s.getAttr(a))) && (o = !0, r[a] = t[a]);
  }
  o && s && (s.setAttrs(r), Ji(s));
}
const I2 = "v";
function G2(e) {
  function t(n) {
    return n != null && n.__konvaNode ? n : n != null && n.parent ? t(n.parent) : (console.error("vue-konva error: Can not find parent node"), null);
  }
  return t(e.parent);
}
function Oc(e) {
  return e.component ? e.component.__konvaNode || Oc(e.component.subTree) : null;
}
function V2(e) {
  const { el: t, component: n } = e, i = Oc(e);
  if (t != null && t.tagName && n && !i) {
    const s = t.tagName.toLowerCase();
    return console.error(
      `vue-konva error: You are trying to render "${s}" inside your component tree. Looks like it is not a Konva node. You can render only Konva components inside the Stage.`
    ), null;
  }
  return i;
}
function U2(e) {
  const t = (s) => !!(s != null && s.hasOwnProperty("component")), n = (s) => Array.isArray(s), i = (s) => t(s) ? [s, ...i(s.children)] : n(s) ? s.flatMap(i) : [];
  return i(e.children);
}
function Lc(e, t) {
  const n = U2(e), i = [];
  n.forEach((r) => {
    const o = V2(r);
    o && i.push(o);
  });
  let s = !1;
  i.forEach((r, o) => {
    r.getZIndex() !== o && (r.setZIndex(o), s = !0);
  }), s && Ji(t);
}
const B2 = /* @__PURE__ */ Sl({
  name: "Stage",
  props: {
    config: {
      type: Object,
      default: function() {
        return {};
      }
    },
    __useStrictMode: {
      type: Boolean
    }
  },
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n, expose: i }) {
    const s = mo();
    if (!s)
      return;
    const r = Un({}), o = ee(null), a = new Pt.Stage({
      width: e.config.width,
      height: e.config.height,
      container: document.createElement("div")
      // Fake container. Will be replaced
    });
    s.__konvaNode = a, c();
    function l() {
      return s == null ? void 0 : s.__konvaNode;
    }
    function h() {
      return s == null ? void 0 : s.__konvaNode;
    }
    function c() {
      if (!s)
        return;
      const g = r || {}, f = {
        ...t,
        ...e.config
      };
      Mc(s, f, g, e.__useStrictMode), Object.assign(r, f);
    }
    return yi(() => {
      o.value && (o.value.innerHTML = "", a.container(o.value)), c();
    }), ho(() => {
      c(), Lc(s.subTree, a);
    }), El(() => {
      a.destroy();
    }), ai(() => e.config, c, { deep: !0 }), i({
      getStage: h,
      getNode: l
    }), () => {
      var g;
      return Yl("div", { ref: o, style: t == null ? void 0 : t.style }, (g = n.default) == null ? void 0 : g.call(n));
    };
  }
}), H2 = ".vue-konva-event", $2 = {
  Group: !0,
  Layer: !0,
  FastLayer: !0,
  Label: !0
};
function j2(e, t) {
  return /* @__PURE__ */ Sl({
    name: e,
    props: {
      config: {
        type: Object,
        default: function() {
          return {};
        }
      },
      __useStrictMode: {
        type: Boolean
      }
    },
    setup(n, { attrs: i, slots: s, expose: r }) {
      const o = mo();
      if (!o)
        return;
      const a = Un({}), l = new t();
      o.__konvaNode = l, o.vnode.__konvaNode = l, g();
      function h() {
        return o == null ? void 0 : o.__konvaNode;
      }
      function c() {
        return o == null ? void 0 : o.__konvaNode;
      }
      function g() {
        if (!o)
          return;
        const _ = {};
        for (const y in o == null ? void 0 : o.vnode.props)
          y.slice(0, 2) === "on" && (_[y] = o.vnode.props[y]);
        const u = a || {}, m = {
          ...i,
          ...n.config,
          ..._
        };
        Mc(o, m, u, n.__useStrictMode), Object.assign(a, m);
      }
      yi(() => {
        var u;
        const _ = (u = G2(o)) == null ? void 0 : u.__konvaNode;
        _ && "add" in _ && _.add(l), Ji(l);
      }), uo(() => {
        Ji(l), l.destroy(), l.off(H2);
      }), ho(() => {
        g(), Lc(o.subTree, l);
      }), ai(() => n.config, g, { deep: !0 }), r({
        getStage: c,
        getNode: h
      });
      const f = $2.hasOwnProperty(e);
      return () => {
        var _;
        return f ? Yl("template", {}, (_ = s.default) == null ? void 0 : _.call(s)) : null;
      };
    }
  });
}
typeof window < "u" && !window.Konva && require("konva");
const W2 = {
  install: (e, t) => {
    const n = (t == null ? void 0 : t.prefix) || I2, i = {
      Arc: Pt.Arc,
      Arrow: Pt.Arrow,
      Circle: Pt.Circle,
      Ellipse: Pt.Ellipse,
      FastLayer: Pt.FastLayer,
      Group: Pt.Group,
      Image: Pt.Image,
      Label: Pt.Label,
      Layer: Pt.Layer,
      Line: Pt.Line,
      Path: Pt.Path,
      Rect: Pt.Rect,
      RegularPolygon: Pt.RegularPolygon,
      Ring: Pt.Ring,
      Shape: Pt.Shape,
      Sprite: Pt.Sprite,
      Star: Pt.Star,
      Tag: Pt.Tag,
      Text: Pt.Text,
      TextPath: Pt.TextPath,
      Transformer: Pt.Transformer,
      Wedge: Pt.Wedge,
      ...t == null ? void 0 : t.customNodes
    };
    [
      B2,
      ...Object.entries(i).map(
        ([s, r]) => j2(s, r)
      )
    ].forEach((s) => {
      e.component(`${n}${s.name}`, s);
    });
  }
};
var Qi, Fn;
class K2 extends Od {
  /**
   * @param {string} rootSelector - (reqired) селектор для монтирования
   * @param {object} options - настройки
   */
  constructor(n, i = {}) {
    if (!n)
      throw new Error("[VueHallSchemeView] constructor: no el selector");
    super(n, i);
    vn(this, Qi, void 0);
    vn(this, Fn, void 0);
    Sn(this, Fn, n), Sn(this, Qi, ld(Md).use(W2).provide("hallSchemeApp", this).mount(wt(this, Fn))), console.info("[VueHallSchemeView] created and mounted to " + wt(this, Fn));
  }
  /**
   * Демонтирование Vue приложения из rootSelector
   */
  // FIXME: продумать и доделать API позже
  // unmount() {
  //   this.#app.unmount(this.#rootSelector)
  //   return this
  // }
}
Qi = new WeakMap(), Fn = new WeakMap();
export {
  K2 as VueHallSchemeView
};
