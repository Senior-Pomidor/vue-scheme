var Eh = Object.defineProperty;
var Ph = (n, t, e) => t in n ? Eh(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var da = (n, t, e) => (Ph(n, typeof t != "symbol" ? t + "" : t, e), e), ua = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var Nt = (n, t, e) => (ua(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Bn = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Un = (n, t, e, i) => (ua(n, t, "write to private field"), i ? i.call(n, e) : t.set(n, e), e);
/**
* @vue/shared v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Co(n, t) {
  const e = new Set(n.split(","));
  return t ? (i) => e.has(i.toLowerCase()) : (i) => e.has(i);
}
const At = {}, qn = [], Pe = () => {
}, Th = () => !1, ws = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && // uppercase letter
(n.charCodeAt(2) > 122 || n.charCodeAt(2) < 97), xo = (n) => n.startsWith("onUpdate:"), Qt = Object.assign, Eo = (n, t) => {
  const e = n.indexOf(t);
  e > -1 && n.splice(e, 1);
}, Mh = Object.prototype.hasOwnProperty, xt = (n, t) => Mh.call(n, t), at = Array.isArray, Zn = (n) => Cs(n) === "[object Map]", Al = (n) => Cs(n) === "[object Set]", ht = (n) => typeof n == "function", Yt = (n) => typeof n == "string", hn = (n) => typeof n == "symbol", It = (n) => n !== null && typeof n == "object", Ol = (n) => (It(n) || ht(n)) && ht(n.then) && ht(n.catch), Rl = Object.prototype.toString, Cs = (n) => Rl.call(n), Ah = (n) => Cs(n).slice(8, -1), kl = (n) => Cs(n) === "[object Object]", Po = (n) => Yt(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, Ei = /* @__PURE__ */ Co(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), xs = (n) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (e) => t[e] || (t[e] = n(e));
}, Oh = /-(\w)/g, Oe = xs(
  (n) => n.replace(Oh, (t, e) => e ? e.toUpperCase() : "")
), Rh = /\B([A-Z])/g, On = xs(
  (n) => n.replace(Rh, "-$1").toLowerCase()
), Es = xs((n) => n.charAt(0).toUpperCase() + n.slice(1)), Tr = xs(
  (n) => n ? `on${Es(n)}` : ""
), ln = (n, t) => !Object.is(n, t), Mr = (n, ...t) => {
  for (let e = 0; e < n.length; e++)
    n[e](...t);
}, Nl = (n, t, e, i = !1) => {
  Object.defineProperty(n, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: e
  });
}, kh = (n) => {
  const t = parseFloat(n);
  return isNaN(t) ? n : t;
};
let fa;
const Fl = () => fa || (fa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ps(n) {
  if (at(n)) {
    const t = {};
    for (let e = 0; e < n.length; e++) {
      const i = n[e], s = Yt(i) ? Lh(i) : Ps(i);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (Yt(n) || It(n))
    return n;
}
const Nh = /;(?![^(]*\))/g, Fh = /:([^]+)/, Dh = /\/\*[^]*?\*\//g;
function Lh(n) {
  const t = {};
  return n.replace(Dh, "").split(Nh).forEach((e) => {
    if (e) {
      const i = e.split(Fh);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function ni(n) {
  let t = "";
  if (Yt(n))
    t = n;
  else if (at(n))
    for (let e = 0; e < n.length; e++) {
      const i = ni(n[e]);
      i && (t += i + " ");
    }
  else if (It(n))
    for (const e in n)
      n[e] && (t += e + " ");
  return t.trim();
}
const Ih = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Gh = /* @__PURE__ */ Co(Ih);
function Dl(n) {
  return !!n || n === "";
}
const Ll = (n) => !!(n && n.__v_isRef === !0), to = (n) => Yt(n) ? n : n == null ? "" : at(n) || It(n) && (n.toString === Rl || !ht(n.toString)) ? Ll(n) ? to(n.value) : JSON.stringify(n, Il, 2) : String(n), Il = (n, t) => Ll(t) ? Il(n, t.value) : Zn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (e, [i, s], r) => (e[Ar(i, r) + " =>"] = s, e),
    {}
  )
} : Al(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((e) => Ar(e))
} : hn(t) ? Ar(t) : It(t) && !at(t) && !kl(t) ? String(t) : t, Ar = (n, t = "") => {
  var e;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    hn(n) ? `Symbol(${(e = n.description) != null ? e : t})` : n
  );
};
/**
* @vue/reactivity v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ge;
class Bh {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ge, !t && ge && (this.index = (ge.scopes || (ge.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, e;
      if (this.scopes)
        for (t = 0, e = this.scopes.length; t < e; t++)
          this.scopes[t].pause();
      for (t = 0, e = this.effects.length; t < e; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, e;
      if (this.scopes)
        for (t = 0, e = this.scopes.length; t < e; t++)
          this.scopes[t].resume();
      for (t = 0, e = this.effects.length; t < e; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const e = ge;
      try {
        return ge = this, t();
      } finally {
        ge = e;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ge = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ge = this.parent;
  }
  stop(t) {
    if (this._active) {
      let e, i;
      for (e = 0, i = this.effects.length; e < i; e++)
        this.effects[e].stop();
      for (e = 0, i = this.cleanups.length; e < i; e++)
        this.cleanups[e]();
      if (this.scopes)
        for (e = 0, i = this.scopes.length; e < i; e++)
          this.scopes[e].stop(!0);
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Uh() {
  return ge;
}
let Ft;
const Or = /* @__PURE__ */ new WeakSet();
class Gl {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.nextEffect = void 0, this.cleanup = void 0, this.scheduler = void 0, ge && ge.active && ge.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Or.has(this) && (Or.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || (this.flags |= 8, this.nextEffect = Pi, Pi = this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ga(this), Ul(this);
    const t = Ft, e = Te;
    Ft = this, Te = !0;
    try {
      return this.fn();
    } finally {
      Vl(this), Ft = t, Te = e, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ao(t);
      this.deps = this.depsTail = void 0, ga(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Or.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    eo(this) && this.run();
  }
  get dirty() {
    return eo(this);
  }
}
let Bl = 0, Pi;
function To() {
  Bl++;
}
function Mo() {
  if (--Bl > 0)
    return;
  let n;
  for (; Pi; ) {
    let t = Pi;
    for (Pi = void 0; t; ) {
      const e = t.nextEffect;
      if (t.nextEffect = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (i) {
          n || (n = i);
        }
      t = e;
    }
  }
  if (n)
    throw n;
}
function Ul(n) {
  for (let t = n.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Vl(n) {
  let t, e = n.depsTail;
  for (let i = e; i; i = i.prevDep)
    i.version === -1 ? (i === e && (e = i.prevDep), Ao(i), Vh(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0;
  n.deps = t, n.depsTail = e;
}
function eo(n) {
  for (let t = n.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && Hl(t.dep.computed) === !1 || t.dep.version !== t.version)
      return !0;
  return !!n._dirty;
}
function Hl(n) {
  if (n.flags & 2)
    return !1;
  if (n.flags & 4 && !(n.flags & 16) || (n.flags &= -17, n.globalVersion === Oi))
    return;
  n.globalVersion = Oi;
  const t = n.dep;
  if (n.flags |= 2, t.version > 0 && !n.isSSR && !eo(n)) {
    n.flags &= -3;
    return;
  }
  const e = Ft, i = Te;
  Ft = n, Te = !0;
  try {
    Ul(n);
    const s = n.fn();
    (t.version === 0 || ln(s, n._value)) && (n._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    Ft = e, Te = i, Vl(n), n.flags &= -3;
  }
}
function Ao(n) {
  const { dep: t, prevSub: e, nextSub: i } = n;
  if (e && (e.nextSub = i, n.prevSub = void 0), i && (i.prevSub = e, n.nextSub = void 0), t.subs === n && (t.subs = e), !t.subs && t.computed) {
    t.computed.flags &= -5;
    for (let s = t.computed.deps; s; s = s.nextDep)
      Ao(s);
  }
}
function Vh(n) {
  const { prevDep: t, nextDep: e } = n;
  t && (t.nextDep = e, n.prevDep = void 0), e && (e.prevDep = t, n.nextDep = void 0);
}
let Te = !0;
const $l = [];
function dn() {
  $l.push(Te), Te = !1;
}
function un() {
  const n = $l.pop();
  Te = n === void 0 ? !0 : n;
}
function ga(n) {
  const { cleanup: t } = n;
  if (n.cleanup = void 0, t) {
    const e = Ft;
    Ft = void 0;
    try {
      t();
    } finally {
      Ft = e;
    }
  }
}
let Oi = 0;
class Oo {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0;
  }
  track(t) {
    if (!Ft || !Te)
      return;
    let e = this.activeLink;
    if (e === void 0 || e.sub !== Ft)
      e = this.activeLink = {
        dep: this,
        sub: Ft,
        version: this.version,
        nextDep: void 0,
        prevDep: void 0,
        nextSub: void 0,
        prevSub: void 0,
        prevActiveLink: void 0
      }, Ft.deps ? (e.prevDep = Ft.depsTail, Ft.depsTail.nextDep = e, Ft.depsTail = e) : Ft.deps = Ft.depsTail = e, Ft.flags & 4 && jl(e);
    else if (e.version === -1 && (e.version = this.version, e.nextDep)) {
      const i = e.nextDep;
      i.prevDep = e.prevDep, e.prevDep && (e.prevDep.nextDep = i), e.prevDep = Ft.depsTail, e.nextDep = void 0, Ft.depsTail.nextDep = e, Ft.depsTail = e, Ft.deps === e && (Ft.deps = i);
    }
    return e;
  }
  trigger(t) {
    this.version++, Oi++, this.notify(t);
  }
  notify(t) {
    To();
    try {
      for (let e = this.subs; e; e = e.prevSub)
        e.sub.notify();
    } finally {
      Mo();
    }
  }
}
function jl(n) {
  const t = n.dep.computed;
  if (t && !n.dep.subs) {
    t.flags |= 20;
    for (let i = t.deps; i; i = i.nextDep)
      jl(i);
  }
  const e = n.dep.subs;
  e !== n && (n.prevSub = e, e && (e.nextSub = n)), n.dep.subs = n;
}
const no = /* @__PURE__ */ new WeakMap(), Tn = Symbol(
  ""
), io = Symbol(
  ""
), Ri = Symbol(
  ""
);
function re(n, t, e) {
  if (Te && Ft) {
    let i = no.get(n);
    i || no.set(n, i = /* @__PURE__ */ new Map());
    let s = i.get(e);
    s || i.set(e, s = new Oo()), s.track();
  }
}
function $e(n, t, e, i, s, r) {
  const o = no.get(n);
  if (!o) {
    Oi++;
    return;
  }
  let a = [];
  if (t === "clear")
    a = [...o.values()];
  else {
    const l = at(n), h = l && Po(e);
    if (l && e === "length") {
      const c = Number(i);
      o.forEach((g, f) => {
        (f === "length" || f === Ri || !hn(f) && f >= c) && a.push(g);
      });
    } else {
      const c = (g) => g && a.push(g);
      switch (e !== void 0 && c(o.get(e)), h && c(o.get(Ri)), t) {
        case "add":
          l ? h && c(o.get("length")) : (c(o.get(Tn)), Zn(n) && c(o.get(io)));
          break;
        case "delete":
          l || (c(o.get(Tn)), Zn(n) && c(o.get(io)));
          break;
        case "set":
          Zn(n) && c(o.get(Tn));
          break;
      }
    }
  }
  To();
  for (const l of a)
    l.trigger();
  Mo();
}
function Vn(n) {
  const t = Et(n);
  return t === n ? t : (re(t, "iterate", Ri), Me(n) ? t : t.map(ie));
}
function Ts(n) {
  return re(n = Et(n), "iterate", Ri), n;
}
const Hh = {
  __proto__: null,
  [Symbol.iterator]() {
    return Rr(this, Symbol.iterator, ie);
  },
  concat(...n) {
    return Vn(this).concat(
      ...n.map((t) => at(t) ? Vn(t) : t)
    );
  },
  entries() {
    return Rr(this, "entries", (n) => (n[1] = ie(n[1]), n));
  },
  every(n, t) {
    return Be(this, "every", n, t, void 0, arguments);
  },
  filter(n, t) {
    return Be(this, "filter", n, t, (e) => e.map(ie), arguments);
  },
  find(n, t) {
    return Be(this, "find", n, t, ie, arguments);
  },
  findIndex(n, t) {
    return Be(this, "findIndex", n, t, void 0, arguments);
  },
  findLast(n, t) {
    return Be(this, "findLast", n, t, ie, arguments);
  },
  findLastIndex(n, t) {
    return Be(this, "findLastIndex", n, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(n, t) {
    return Be(this, "forEach", n, t, void 0, arguments);
  },
  includes(...n) {
    return kr(this, "includes", n);
  },
  indexOf(...n) {
    return kr(this, "indexOf", n);
  },
  join(n) {
    return Vn(this).join(n);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...n) {
    return kr(this, "lastIndexOf", n);
  },
  map(n, t) {
    return Be(this, "map", n, t, void 0, arguments);
  },
  pop() {
    return pi(this, "pop");
  },
  push(...n) {
    return pi(this, "push", n);
  },
  reduce(n, ...t) {
    return pa(this, "reduce", n, t);
  },
  reduceRight(n, ...t) {
    return pa(this, "reduceRight", n, t);
  },
  shift() {
    return pi(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(n, t) {
    return Be(this, "some", n, t, void 0, arguments);
  },
  splice(...n) {
    return pi(this, "splice", n);
  },
  toReversed() {
    return Vn(this).toReversed();
  },
  toSorted(n) {
    return Vn(this).toSorted(n);
  },
  toSpliced(...n) {
    return Vn(this).toSpliced(...n);
  },
  unshift(...n) {
    return pi(this, "unshift", n);
  },
  values() {
    return Rr(this, "values", ie);
  }
};
function Rr(n, t, e) {
  const i = Ts(n), s = i[t]();
  return i !== n && !Me(n) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.value && (r.value = e(r.value)), r;
  }), s;
}
const $h = Array.prototype;
function Be(n, t, e, i, s, r) {
  const o = Ts(n), a = o !== n && !Me(n), l = o[t];
  if (l !== $h[t]) {
    const g = l.apply(n, r);
    return a ? ie(g) : g;
  }
  let h = e;
  o !== n && (a ? h = function(g, f) {
    return e.call(this, ie(g), f, n);
  } : e.length > 2 && (h = function(g, f) {
    return e.call(this, g, f, n);
  }));
  const c = l.call(o, h, i);
  return a && s ? s(c) : c;
}
function pa(n, t, e, i) {
  const s = Ts(n);
  let r = e;
  return s !== n && (Me(n) ? e.length > 3 && (r = function(o, a, l) {
    return e.call(this, o, a, l, n);
  }) : r = function(o, a, l) {
    return e.call(this, o, ie(a), l, n);
  }), s[t](r, ...i);
}
function kr(n, t, e) {
  const i = Et(n);
  re(i, "iterate", Ri);
  const s = i[t](...e);
  return (s === -1 || s === !1) && Fo(e[0]) ? (e[0] = Et(e[0]), i[t](...e)) : s;
}
function pi(n, t, e = []) {
  dn(), To();
  const i = Et(n)[t].apply(n, e);
  return Mo(), un(), i;
}
const jh = /* @__PURE__ */ Co("__proto__,__v_isRef,__isVue"), Yl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((n) => n !== "arguments" && n !== "caller").map((n) => Symbol[n]).filter(hn)
);
function Yh(n) {
  hn(n) || (n = String(n));
  const t = Et(this);
  return re(t, "has", n), t.hasOwnProperty(n);
}
class Wl {
  constructor(t = !1, e = !1) {
    this._isReadonly = t, this._isShallow = e;
  }
  get(t, e, i) {
    const s = this._isReadonly, r = this._isShallow;
    if (e === "__v_isReactive")
      return !s;
    if (e === "__v_isReadonly")
      return s;
    if (e === "__v_isShallow")
      return r;
    if (e === "__v_raw")
      return i === (s ? r ? sd : ql : r ? Kl : zl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = at(t);
    if (!s) {
      let l;
      if (o && (l = Hh[e]))
        return l;
      if (e === "hasOwnProperty")
        return Yh;
    }
    const a = Reflect.get(
      t,
      e,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      se(t) ? t : i
    );
    return (hn(e) ? Yl.has(e) : jh(e)) || (s || re(t, "get", e), r) ? a : se(a) ? o && Po(e) ? a : a.value : It(a) ? s ? Zl(a) : an(a) : a;
  }
}
class Xl extends Wl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, e, i, s) {
    let r = t[e];
    if (!this._isShallow) {
      const l = Mn(r);
      if (!Me(i) && !Mn(i) && (r = Et(r), i = Et(i)), !at(t) && se(r) && !se(i))
        return l ? !1 : (r.value = i, !0);
    }
    const o = at(t) && Po(e) ? Number(e) < t.length : xt(t, e), a = Reflect.set(
      t,
      e,
      i,
      se(t) ? t : s
    );
    return t === Et(s) && (o ? ln(i, r) && $e(t, "set", e, i) : $e(t, "add", e, i)), a;
  }
  deleteProperty(t, e) {
    const i = xt(t, e);
    t[e];
    const s = Reflect.deleteProperty(t, e);
    return s && i && $e(t, "delete", e, void 0), s;
  }
  has(t, e) {
    const i = Reflect.has(t, e);
    return (!hn(e) || !Yl.has(e)) && re(t, "has", e), i;
  }
  ownKeys(t) {
    return re(
      t,
      "iterate",
      at(t) ? "length" : Tn
    ), Reflect.ownKeys(t);
  }
}
class Wh extends Wl {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, e) {
    return !0;
  }
  deleteProperty(t, e) {
    return !0;
  }
}
const Xh = /* @__PURE__ */ new Xl(), zh = /* @__PURE__ */ new Wh(), Kh = /* @__PURE__ */ new Xl(!0);
const Ro = (n) => n, Ms = (n) => Reflect.getPrototypeOf(n);
function zi(n, t, e = !1, i = !1) {
  n = n.__v_raw;
  const s = Et(n), r = Et(t);
  e || (ln(t, r) && re(s, "get", t), re(s, "get", r));
  const { has: o } = Ms(s), a = i ? Ro : e ? Do : ie;
  if (o.call(s, t))
    return a(n.get(t));
  if (o.call(s, r))
    return a(n.get(r));
  n !== s && n.get(t);
}
function Ki(n, t = !1) {
  const e = this.__v_raw, i = Et(e), s = Et(n);
  return t || (ln(n, s) && re(i, "has", n), re(i, "has", s)), n === s ? e.has(n) : e.has(n) || e.has(s);
}
function qi(n, t = !1) {
  return n = n.__v_raw, !t && re(Et(n), "iterate", Tn), Reflect.get(n, "size", n);
}
function _a(n, t = !1) {
  !t && !Me(n) && !Mn(n) && (n = Et(n));
  const e = Et(this);
  return Ms(e).has.call(e, n) || (e.add(n), $e(e, "add", n, n)), this;
}
function ma(n, t, e = !1) {
  !e && !Me(t) && !Mn(t) && (t = Et(t));
  const i = Et(this), { has: s, get: r } = Ms(i);
  let o = s.call(i, n);
  o || (n = Et(n), o = s.call(i, n));
  const a = r.call(i, n);
  return i.set(n, t), o ? ln(t, a) && $e(i, "set", n, t) : $e(i, "add", n, t), this;
}
function va(n) {
  const t = Et(this), { has: e, get: i } = Ms(t);
  let s = e.call(t, n);
  s || (n = Et(n), s = e.call(t, n)), i && i.call(t, n);
  const r = t.delete(n);
  return s && $e(t, "delete", n, void 0), r;
}
function ya() {
  const n = Et(this), t = n.size !== 0, e = n.clear();
  return t && $e(n, "clear", void 0, void 0), e;
}
function Zi(n, t) {
  return function(i, s) {
    const r = this, o = r.__v_raw, a = Et(o), l = t ? Ro : n ? Do : ie;
    return !n && re(a, "iterate", Tn), o.forEach((h, c) => i.call(s, l(h), l(c), r));
  };
}
function Ji(n, t, e) {
  return function(...i) {
    const s = this.__v_raw, r = Et(s), o = Zn(r), a = n === "entries" || n === Symbol.iterator && o, l = n === "keys" && o, h = s[n](...i), c = e ? Ro : t ? Do : ie;
    return !t && re(
      r,
      "iterate",
      l ? io : Tn
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
function Je(n) {
  return function(...t) {
    return n === "delete" ? !1 : n === "clear" ? void 0 : this;
  };
}
function qh() {
  const n = {
    get(r) {
      return zi(this, r);
    },
    get size() {
      return qi(this);
    },
    has: Ki,
    add: _a,
    set: ma,
    delete: va,
    clear: ya,
    forEach: Zi(!1, !1)
  }, t = {
    get(r) {
      return zi(this, r, !1, !0);
    },
    get size() {
      return qi(this);
    },
    has: Ki,
    add(r) {
      return _a.call(this, r, !0);
    },
    set(r, o) {
      return ma.call(this, r, o, !0);
    },
    delete: va,
    clear: ya,
    forEach: Zi(!1, !0)
  }, e = {
    get(r) {
      return zi(this, r, !0);
    },
    get size() {
      return qi(this, !0);
    },
    has(r) {
      return Ki.call(this, r, !0);
    },
    add: Je("add"),
    set: Je("set"),
    delete: Je("delete"),
    clear: Je("clear"),
    forEach: Zi(!0, !1)
  }, i = {
    get(r) {
      return zi(this, r, !0, !0);
    },
    get size() {
      return qi(this, !0);
    },
    has(r) {
      return Ki.call(this, r, !0);
    },
    add: Je("add"),
    set: Je("set"),
    delete: Je("delete"),
    clear: Je("clear"),
    forEach: Zi(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = Ji(r, !1, !1), e[r] = Ji(r, !0, !1), t[r] = Ji(r, !1, !0), i[r] = Ji(
      r,
      !0,
      !0
    );
  }), [
    n,
    e,
    t,
    i
  ];
}
const [
  Zh,
  Jh,
  Qh,
  td
] = /* @__PURE__ */ qh();
function ko(n, t) {
  const e = t ? n ? td : Qh : n ? Jh : Zh;
  return (i, s, r) => s === "__v_isReactive" ? !n : s === "__v_isReadonly" ? n : s === "__v_raw" ? i : Reflect.get(
    xt(e, s) && s in i ? e : i,
    s,
    r
  );
}
const ed = {
  get: /* @__PURE__ */ ko(!1, !1)
}, nd = {
  get: /* @__PURE__ */ ko(!1, !0)
}, id = {
  get: /* @__PURE__ */ ko(!0, !1)
};
const zl = /* @__PURE__ */ new WeakMap(), Kl = /* @__PURE__ */ new WeakMap(), ql = /* @__PURE__ */ new WeakMap(), sd = /* @__PURE__ */ new WeakMap();
function rd(n) {
  switch (n) {
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
function od(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : rd(Ah(n));
}
function an(n) {
  return Mn(n) ? n : No(
    n,
    !1,
    Xh,
    ed,
    zl
  );
}
function ad(n) {
  return No(
    n,
    !1,
    Kh,
    nd,
    Kl
  );
}
function Zl(n) {
  return No(
    n,
    !0,
    zh,
    id,
    ql
  );
}
function No(n, t, e, i, s) {
  if (!It(n) || n.__v_raw && !(t && n.__v_isReactive))
    return n;
  const r = s.get(n);
  if (r)
    return r;
  const o = od(n);
  if (o === 0)
    return n;
  const a = new Proxy(
    n,
    o === 2 ? i : e
  );
  return s.set(n, a), a;
}
function Jn(n) {
  return Mn(n) ? Jn(n.__v_raw) : !!(n && n.__v_isReactive);
}
function Mn(n) {
  return !!(n && n.__v_isReadonly);
}
function Me(n) {
  return !!(n && n.__v_isShallow);
}
function Fo(n) {
  return n ? !!n.__v_raw : !1;
}
function Et(n) {
  const t = n && n.__v_raw;
  return t ? Et(t) : n;
}
function ld(n) {
  return Object.isExtensible(n) && Nl(n, "__v_skip", !0), n;
}
const ie = (n) => It(n) ? an(n) : n, Do = (n) => It(n) ? Zl(n) : n;
function se(n) {
  return n ? n.__v_isRef === !0 : !1;
}
function bt(n) {
  return Jl(n, !1);
}
function cd(n) {
  return Jl(n, !0);
}
function Jl(n, t) {
  return se(n) ? n : new hd(n, t);
}
class hd {
  constructor(t, e) {
    this.dep = new Oo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = e ? t : Et(t), this._value = e ? t : ie(t), this.__v_isShallow = e;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const e = this._rawValue, i = this.__v_isShallow || Me(t) || Mn(t);
    t = i ? t : Et(t), ln(t, e) && (this._rawValue = t, this._value = i ? t : ie(t), this.dep.trigger());
  }
}
function Lo(n) {
  return se(n) ? n.value : n;
}
const dd = {
  get: (n, t, e) => Lo(Reflect.get(n, t, e)),
  set: (n, t, e, i) => {
    const s = n[t];
    return se(s) && !se(e) ? (s.value = e, !0) : Reflect.set(n, t, e, i);
  }
};
function Ql(n) {
  return Jn(n) ? n : new Proxy(n, dd);
}
class ud {
  constructor(t, e, i) {
    this.fn = t, this.setter = e, this._value = void 0, this.dep = new Oo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Oi - 1, this.effect = this, this.__v_isReadonly = !e, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    Ft !== this && (this.flags |= 16, this.dep.notify());
  }
  get value() {
    const t = this.dep.track();
    return Hl(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function fd(n, t, e = !1) {
  let i, s;
  return ht(n) ? i = n : (i = n.get, s = n.set), new ud(i, s, e);
}
const Qi = {}, us = /* @__PURE__ */ new WeakMap();
let xn;
function gd(n, t = !1, e = xn) {
  if (e) {
    let i = us.get(e);
    i || us.set(e, i = []), i.push(n);
  }
}
function pd(n, t, e = At) {
  const { immediate: i, deep: s, once: r, scheduler: o, augmentJob: a, call: l } = e, h = (p) => s ? p : Me(p) || s === !1 || s === 0 ? rn(p, 1) : rn(p);
  let c, g, f, _, u = !1, m = !1;
  if (se(n) ? (g = () => n.value, u = Me(n)) : Jn(n) ? (g = () => h(n), u = !0) : at(n) ? (m = !0, u = n.some((p) => Jn(p) || Me(p)), g = () => n.map((p) => {
    if (se(p))
      return p.value;
    if (Jn(p))
      return h(p);
    if (ht(p))
      return l ? l(p, 2) : p();
  })) : ht(n) ? t ? g = l ? () => l(n, 2) : n : g = () => {
    if (f) {
      dn();
      try {
        f();
      } finally {
        un();
      }
    }
    const p = xn;
    xn = c;
    try {
      return l ? l(n, 3, [_]) : n(_);
    } finally {
      xn = p;
    }
  } : g = Pe, t && s) {
    const p = g, b = s === !0 ? 1 / 0 : s;
    g = () => rn(p(), b);
  }
  const v = Uh(), S = () => {
    c.stop(), v && Eo(v.effects, c);
  };
  if (r)
    if (t) {
      const p = t;
      t = (...b) => {
        p(...b), S();
      };
    } else {
      const p = g;
      g = () => {
        p(), S();
      };
    }
  let x = m ? new Array(n.length).fill(Qi) : Qi;
  const d = (p) => {
    if (!(!(c.flags & 1) || !c.dirty && !p))
      if (t) {
        const b = c.run();
        if (s || u || (m ? b.some((E, R) => ln(E, x[R])) : ln(b, x))) {
          f && f();
          const E = xn;
          xn = c;
          try {
            const R = [
              b,
              // pass undefined as the old value when it's changed for the first time
              x === Qi ? void 0 : m && x[0] === Qi ? [] : x,
              _
            ];
            l ? l(t, 3, R) : (
              // @ts-expect-error
              t(...R)
            ), x = b;
          } finally {
            xn = E;
          }
        }
      } else
        c.run();
  };
  return a && a(d), c = new Gl(g), c.scheduler = o ? () => o(d, !1) : d, _ = (p) => gd(p, !1, c), f = c.onStop = () => {
    const p = us.get(c);
    if (p) {
      if (l)
        l(p, 4);
      else
        for (const b of p)
          b();
      us.delete(c);
    }
  }, t ? i ? d(!0) : x = c.run() : o ? o(d.bind(null, !0), !0) : c.run(), S.pause = c.pause.bind(c), S.resume = c.resume.bind(c), S.stop = S, S;
}
function rn(n, t = 1 / 0, e) {
  if (t <= 0 || !It(n) || n.__v_skip || (e = e || /* @__PURE__ */ new Set(), e.has(n)))
    return n;
  if (e.add(n), t--, se(n))
    rn(n.value, t, e);
  else if (at(n))
    for (let i = 0; i < n.length; i++)
      rn(n[i], t, e);
  else if (Al(n) || Zn(n))
    n.forEach((i) => {
      rn(i, t, e);
    });
  else if (kl(n)) {
    for (const i in n)
      rn(n[i], t, e);
    for (const i of Object.getOwnPropertySymbols(n))
      Object.prototype.propertyIsEnumerable.call(n, i) && rn(n[i], t, e);
  }
  return n;
}
/**
* @vue/runtime-core v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Gi(n, t, e, i) {
  try {
    return i ? n(...i) : n();
  } catch (s) {
    As(s, t, e);
  }
}
function Ie(n, t, e, i) {
  if (ht(n)) {
    const s = Gi(n, t, e, i);
    return s && Ol(s) && s.catch((r) => {
      As(r, t, e);
    }), s;
  }
  if (at(n)) {
    const s = [];
    for (let r = 0; r < n.length; r++)
      s.push(Ie(n[r], t, e, i));
    return s;
  }
}
function As(n, t, e, i = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || At;
  if (t) {
    let a = t.parent;
    const l = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${e}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let g = 0; g < c.length; g++)
          if (c[g](n, l, h) === !1)
            return;
      }
      a = a.parent;
    }
    if (r) {
      dn(), Gi(r, null, 10, [
        n,
        l,
        h
      ]), un();
      return;
    }
  }
  _d(n, e, s, i, o);
}
function _d(n, t, e, i = !0, s = !1) {
  if (s)
    throw n;
  console.error(n);
}
let ki = !1, so = !1;
const pe = [];
let Pn = 0;
const Qn = [];
let en = null, Xn = 0;
const tc = /* @__PURE__ */ Promise.resolve();
let Io = null;
function ec(n) {
  const t = Io || tc;
  return n ? t.then(this ? n.bind(this) : n) : t;
}
function md(n) {
  let t = ki ? Pn + 1 : 0, e = pe.length;
  for (; t < e; ) {
    const i = t + e >>> 1, s = pe[i], r = Ni(s);
    r < n || r === n && s.flags & 2 ? t = i + 1 : e = i;
  }
  return t;
}
function Go(n) {
  if (!(n.flags & 1)) {
    const t = Ni(n), e = pe[pe.length - 1];
    !e || // fast path when the job id is larger than the tail
    !(n.flags & 2) && t >= Ni(e) ? pe.push(n) : pe.splice(md(t), 0, n), n.flags & 4 || (n.flags |= 1), nc();
  }
}
function nc() {
  !ki && !so && (so = !0, Io = tc.then(sc));
}
function vd(n) {
  at(n) ? Qn.push(...n) : en && n.id === -1 ? en.splice(Xn + 1, 0, n) : n.flags & 1 || (Qn.push(n), n.flags & 4 || (n.flags |= 1)), nc();
}
function ba(n, t, e = ki ? Pn + 1 : 0) {
  for (; e < pe.length; e++) {
    const i = pe[e];
    if (i && i.flags & 2) {
      if (n && i.id !== n.uid)
        continue;
      pe.splice(e, 1), e--, i(), i.flags &= -2;
    }
  }
}
function ic(n) {
  if (Qn.length) {
    const t = [...new Set(Qn)].sort(
      (e, i) => Ni(e) - Ni(i)
    );
    if (Qn.length = 0, en) {
      en.push(...t);
      return;
    }
    for (en = t, Xn = 0; Xn < en.length; Xn++) {
      const e = en[Xn];
      e.flags & 8 || e(), e.flags &= -2;
    }
    en = null, Xn = 0;
  }
}
const Ni = (n) => n.id == null ? n.flags & 2 ? -1 : 1 / 0 : n.id;
function sc(n) {
  so = !1, ki = !0;
  const t = Pe;
  try {
    for (Pn = 0; Pn < pe.length; Pn++) {
      const e = pe[Pn];
      e && !(e.flags & 8) && (Gi(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags &= -2);
    }
  } finally {
    Pn = 0, pe.length = 0, ic(), ki = !1, Io = null, (pe.length || Qn.length) && sc();
  }
}
let be = null, rc = null;
function fs(n) {
  const t = be;
  return be = n, rc = n && n.type.__scopeId || null, t;
}
function Si(n, t = be, e) {
  if (!t || n._n)
    return n;
  const i = (...s) => {
    i._d && Aa(-1);
    const r = fs(t);
    let o;
    try {
      o = n(...s);
    } finally {
      fs(r), i._d && Aa(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Sn(n, t, e, i) {
  const s = n.dirs, r = t && t.dirs;
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    r && (a.oldValue = r[o].value);
    let l = a.dir[i];
    l && (dn(), Ie(l, e, 8, [
      n.el,
      a,
      n,
      t
    ]), un());
  }
}
const yd = Symbol("_vte"), bd = (n) => n.__isTeleport;
function oc(n, t) {
  n.shapeFlag & 6 && n.component ? oc(n.component.subTree, t) : n.shapeFlag & 128 ? (n.ssContent.transition = t.clone(n.ssContent), n.ssFallback.transition = t.clone(n.ssFallback)) : n.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ac(n, t) {
  return ht(n) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => Qt({ name: n.name }, t, { setup: n }))()
  ) : n;
}
function lc(n) {
  n.ids = [n.ids[0] + n.ids[2]++ + "-", 0, 0];
}
function ro(n, t, e, i, s = !1) {
  if (at(n)) {
    n.forEach(
      (_, u) => ro(
        _,
        t && (at(t) ? t[u] : t),
        e,
        i,
        s
      )
    );
    return;
  }
  if (Ti(i) && !s)
    return;
  const r = i.shapeFlag & 4 ? Wo(i.component) : i.el, o = s ? null : r, { i: a, r: l } = n, h = t && t.r, c = a.refs === At ? a.refs = {} : a.refs, g = a.setupState, f = g === At ? () => !1 : (_) => xt(g, _) && !(Object.getOwnPropertyDescriptor(c, _) || At).get;
  if (h != null && h !== l && (Yt(h) ? (c[h] = null, f(h) && (g[h] = null)) : se(h) && (h.value = null)), ht(l))
    Gi(l, a, 12, [o, c]);
  else {
    const _ = Yt(l), u = se(l);
    if (_ || u) {
      const m = () => {
        if (n.f) {
          const v = _ ? f(l) ? g[l] : c[l] : l.value;
          s ? at(v) && Eo(v, r) : at(v) ? v.includes(r) || v.push(r) : _ ? (c[l] = [r], f(l) && (g[l] = c[l])) : (l.value = [r], n.k && (c[n.k] = l.value));
        } else
          _ ? (c[l] = o, f(l) && (g[l] = o)) : u && (l.value = o, n.k && (c[n.k] = o));
      };
      o ? (m.id = -1, fe(m, e)) : m();
    }
  }
}
const Ti = (n) => !!n.type.__asyncLoader, cc = (n) => n.type.__isKeepAlive;
function Sd(n, t) {
  hc(n, "a", t);
}
function wd(n, t) {
  hc(n, "da", t);
}
function hc(n, t, e = Jt) {
  const i = n.__wdc || (n.__wdc = () => {
    let s = e;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return n();
  });
  if (Os(t, i, e), e) {
    let s = e.parent;
    for (; s && s.parent; )
      cc(s.parent.vnode) && Cd(i, t, e, s), s = s.parent;
  }
}
function Cd(n, t, e, i) {
  const s = Os(
    t,
    n,
    i,
    !0
    /* prepend */
  );
  Rs(() => {
    Eo(i[t], s);
  }, e);
}
function Os(n, t, e = Jt, i = !1) {
  if (e) {
    const s = e[n] || (e[n] = []), r = t.__weh || (t.__weh = (...o) => {
      dn();
      const a = Bi(e), l = Ie(t, e, n, o);
      return a(), un(), l;
    });
    return i ? s.unshift(r) : s.push(r), r;
  }
}
const Xe = (n) => (t, e = Jt) => {
  (!Fs || n === "sp") && Os(n, (...i) => t(...i), e);
}, xd = Xe("bm"), ai = Xe("m"), Ed = Xe(
  "bu"
), Bo = Xe("u"), Uo = Xe(
  "bum"
), Rs = Xe("um"), Pd = Xe(
  "sp"
), Td = Xe("rtg"), Md = Xe("rtc");
function Ad(n, t = Jt) {
  Os("ec", n, t);
}
const dc = "components";
function Kn(n, t) {
  return Rd(dc, n, !0, t) || n;
}
const Od = Symbol.for("v-ndc");
function Rd(n, t, e = !0, i = !1) {
  const s = be || Jt;
  if (s) {
    const r = s.type;
    if (n === dc) {
      const a = yu(
        r,
        !1
      );
      if (a && (a === t || a === Oe(t) || a === Es(Oe(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Sa(s[n] || r[n], t) || // global registration
      Sa(s.appContext[n], t)
    );
    return !o && i ? r : o;
  }
}
function Sa(n, t) {
  return n && (n[t] || n[Oe(t)] || n[Es(Oe(t))]);
}
function kd(n, t, e, i) {
  let s;
  const r = e && e[i], o = at(n);
  if (o || Yt(n)) {
    const a = o && Jn(n);
    a && (n = Ts(n)), s = new Array(n.length);
    for (let l = 0, h = n.length; l < h; l++)
      s[l] = t(
        a ? ie(n[l]) : n[l],
        l,
        void 0,
        r && r[l]
      );
  } else if (typeof n == "number") {
    s = new Array(n);
    for (let a = 0; a < n; a++)
      s[a] = t(a + 1, a, void 0, r && r[a]);
  } else if (It(n))
    if (n[Symbol.iterator])
      s = Array.from(
        n,
        (a, l) => t(a, l, void 0, r && r[l])
      );
    else {
      const a = Object.keys(n);
      s = new Array(a.length);
      for (let l = 0, h = a.length; l < h; l++) {
        const c = a[l];
        s[l] = t(n[c], c, l, r && r[l]);
      }
    }
  else
    s = [];
  return e && (e[i] = s), s;
}
const oo = (n) => n ? Nc(n) ? Wo(n) : oo(n.parent) : null, Mi = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Qt(/* @__PURE__ */ Object.create(null), {
    $: (n) => n,
    $el: (n) => n.vnode.el,
    $data: (n) => n.data,
    $props: (n) => n.props,
    $attrs: (n) => n.attrs,
    $slots: (n) => n.slots,
    $refs: (n) => n.refs,
    $parent: (n) => oo(n.parent),
    $root: (n) => oo(n.root),
    $host: (n) => n.ce,
    $emit: (n) => n.emit,
    $options: (n) => Vo(n),
    $forceUpdate: (n) => n.f || (n.f = () => {
      Go(n.update);
    }),
    $nextTick: (n) => n.n || (n.n = ec.bind(n.proxy)),
    $watch: (n) => Qd.bind(n)
  })
), Nr = (n, t) => n !== At && !n.__isScriptSetup && xt(n, t), Nd = {
  get({ _: n }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: e, setupState: i, data: s, props: r, accessCache: o, type: a, appContext: l } = n;
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
            return e[t];
          case 3:
            return r[t];
        }
      else {
        if (Nr(i, t))
          return o[t] = 1, i[t];
        if (s !== At && xt(s, t))
          return o[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = n.propsOptions[0]) && xt(h, t)
        )
          return o[t] = 3, r[t];
        if (e !== At && xt(e, t))
          return o[t] = 4, e[t];
        ao && (o[t] = 0);
      }
    }
    const c = Mi[t];
    let g, f;
    if (c)
      return t === "$attrs" && re(n.attrs, "get", ""), c(n);
    if (
      // css module (injected by vue-loader)
      (g = a.__cssModules) && (g = g[t])
    )
      return g;
    if (e !== At && xt(e, t))
      return o[t] = 4, e[t];
    if (
      // global properties
      f = l.config.globalProperties, xt(f, t)
    )
      return f[t];
  },
  set({ _: n }, t, e) {
    const { data: i, setupState: s, ctx: r } = n;
    return Nr(s, t) ? (s[t] = e, !0) : i !== At && xt(i, t) ? (i[t] = e, !0) : xt(n.props, t) || t[0] === "$" && t.slice(1) in n ? !1 : (r[t] = e, !0);
  },
  has({
    _: { data: n, setupState: t, accessCache: e, ctx: i, appContext: s, propsOptions: r }
  }, o) {
    let a;
    return !!e[o] || n !== At && xt(n, o) || Nr(t, o) || (a = r[0]) && xt(a, o) || xt(i, o) || xt(Mi, o) || xt(s.config.globalProperties, o);
  },
  defineProperty(n, t, e) {
    return e.get != null ? n._.accessCache[t] = 0 : xt(e, "value") && this.set(n, t, e.value, null), Reflect.defineProperty(n, t, e);
  }
};
function wa(n) {
  return at(n) ? n.reduce(
    (t, e) => (t[e] = null, t),
    {}
  ) : n;
}
let ao = !0;
function Fd(n) {
  const t = Vo(n), e = n.proxy, i = n.ctx;
  ao = !1, t.beforeCreate && Ca(t.beforeCreate, n, "bc");
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
    deactivated: v,
    beforeDestroy: S,
    beforeUnmount: x,
    destroyed: d,
    unmounted: p,
    render: b,
    renderTracked: E,
    renderTriggered: R,
    errorCaptured: w,
    serverPrefetch: k,
    // public API
    expose: T,
    inheritAttrs: O,
    // assets
    components: G,
    directives: $,
    filters: Z
  } = t;
  if (h && Dd(h, i, null), o)
    for (const z in o) {
      const V = o[z];
      ht(V) && (i[z] = V.bind(e));
    }
  if (s) {
    const z = s.call(e, e);
    It(z) && (n.data = an(z));
  }
  if (ao = !0, r)
    for (const z in r) {
      const V = r[z], lt = ht(V) ? V.bind(e, e) : ht(V.get) ? V.get.bind(e, e) : Pe, Q = !ht(V) && ht(V.set) ? V.set.bind(e) : Pe, rt = on({
        get: lt,
        set: Q
      });
      Object.defineProperty(i, z, {
        enumerable: !0,
        configurable: !0,
        get: () => rt.value,
        set: (X) => rt.value = X
      });
    }
  if (a)
    for (const z in a)
      uc(a[z], i, e, z);
  if (l) {
    const z = ht(l) ? l.call(e) : l;
    Reflect.ownKeys(z).forEach((V) => {
      nn(V, z[V]);
    });
  }
  c && Ca(c, n, "c");
  function it(z, V) {
    at(V) ? V.forEach((lt) => z(lt.bind(e))) : V && z(V.bind(e));
  }
  if (it(xd, g), it(ai, f), it(Ed, _), it(Bo, u), it(Sd, m), it(wd, v), it(Ad, w), it(Md, E), it(Td, R), it(Uo, x), it(Rs, p), it(Pd, k), at(T))
    if (T.length) {
      const z = n.exposed || (n.exposed = {});
      T.forEach((V) => {
        Object.defineProperty(z, V, {
          get: () => e[V],
          set: (lt) => e[V] = lt
        });
      });
    } else
      n.exposed || (n.exposed = {});
  b && n.render === Pe && (n.render = b), O != null && (n.inheritAttrs = O), G && (n.components = G), $ && (n.directives = $), k && lc(n);
}
function Dd(n, t, e = Pe) {
  at(n) && (n = lo(n));
  for (const i in n) {
    const s = n[i];
    let r;
    It(s) ? "default" in s ? r = je(
      s.from || i,
      s.default,
      !0
    ) : r = je(s.from || i) : r = je(s), se(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r;
  }
}
function Ca(n, t, e) {
  Ie(
    at(n) ? n.map((i) => i.bind(t.proxy)) : n.bind(t.proxy),
    t,
    e
  );
}
function uc(n, t, e, i) {
  let s = i.includes(".") ? Pc(e, i) : () => e[i];
  if (Yt(n)) {
    const r = t[n];
    ht(r) && De(s, r);
  } else if (ht(n))
    De(s, n.bind(e));
  else if (It(n))
    if (at(n))
      n.forEach((r) => uc(r, t, e, i));
    else {
      const r = ht(n.handler) ? n.handler.bind(e) : t[n.handler];
      ht(r) && De(s, r, n);
    }
}
function Vo(n) {
  const t = n.type, { mixins: e, extends: i } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = n.appContext, a = r.get(t);
  let l;
  return a ? l = a : !s.length && !e && !i ? l = t : (l = {}, s.length && s.forEach(
    (h) => gs(l, h, o, !0)
  ), gs(l, t, o)), It(t) && r.set(t, l), l;
}
function gs(n, t, e, i = !1) {
  const { mixins: s, extends: r } = t;
  r && gs(n, r, e, !0), s && s.forEach(
    (o) => gs(n, o, e, !0)
  );
  for (const o in t)
    if (!(i && o === "expose")) {
      const a = Ld[o] || e && e[o];
      n[o] = a ? a(n[o], t[o]) : t[o];
    }
  return n;
}
const Ld = {
  data: xa,
  props: Ea,
  emits: Ea,
  // objects
  methods: wi,
  computed: wi,
  // lifecycle
  beforeCreate: le,
  created: le,
  beforeMount: le,
  mounted: le,
  beforeUpdate: le,
  updated: le,
  beforeDestroy: le,
  beforeUnmount: le,
  destroyed: le,
  unmounted: le,
  activated: le,
  deactivated: le,
  errorCaptured: le,
  serverPrefetch: le,
  // assets
  components: wi,
  directives: wi,
  // watch
  watch: Gd,
  // provide / inject
  provide: xa,
  inject: Id
};
function xa(n, t) {
  return t ? n ? function() {
    return Qt(
      ht(n) ? n.call(this, this) : n,
      ht(t) ? t.call(this, this) : t
    );
  } : t : n;
}
function Id(n, t) {
  return wi(lo(n), lo(t));
}
function lo(n) {
  if (at(n)) {
    const t = {};
    for (let e = 0; e < n.length; e++)
      t[n[e]] = n[e];
    return t;
  }
  return n;
}
function le(n, t) {
  return n ? [...new Set([].concat(n, t))] : t;
}
function wi(n, t) {
  return n ? Qt(/* @__PURE__ */ Object.create(null), n, t) : t;
}
function Ea(n, t) {
  return n ? at(n) && at(t) ? [.../* @__PURE__ */ new Set([...n, ...t])] : Qt(
    /* @__PURE__ */ Object.create(null),
    wa(n),
    wa(t ?? {})
  ) : t;
}
function Gd(n, t) {
  if (!n)
    return t;
  if (!t)
    return n;
  const e = Qt(/* @__PURE__ */ Object.create(null), n);
  for (const i in t)
    e[i] = le(n[i], t[i]);
  return e;
}
function fc() {
  return {
    app: null,
    config: {
      isNativeTag: Th,
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
let Bd = 0;
function Ud(n, t) {
  return function(i, s = null) {
    ht(i) || (i = Qt({}, i)), s != null && !It(s) && (s = null);
    const r = fc(), o = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const h = r.app = {
      _uid: Bd++,
      _component: i,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: wu,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...g) {
        return o.has(c) || (c && ht(c.install) ? (o.add(c), c.install(h, ...g)) : ht(c) && (o.add(c), c(h, ...g))), h;
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
          const _ = h._ceVNode || Ot(i, s);
          return _.appContext = r, f === !0 ? f = "svg" : f === !1 && (f = void 0), g && t ? t(_, c) : n(_, c, f), l = !0, h._container = c, c.__vue_app__ = h, Wo(_.component);
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        l && (Ie(
          a,
          h._instance,
          16
        ), n(null, h._container), delete h._container.__vue_app__);
      },
      provide(c, g) {
        return r.provides[c] = g, h;
      },
      runWithContext(c) {
        const g = ti;
        ti = h;
        try {
          return c();
        } finally {
          ti = g;
        }
      }
    };
    return h;
  };
}
let ti = null;
function nn(n, t) {
  if (Jt) {
    let e = Jt.provides;
    const i = Jt.parent && Jt.parent.provides;
    i === e && (e = Jt.provides = Object.create(i)), e[n] = t;
  }
}
function je(n, t, e = !1) {
  const i = Jt || be;
  if (i || ti) {
    const s = ti ? ti._context.provides : i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (s && n in s)
      return s[n];
    if (arguments.length > 1)
      return e && ht(t) ? t.call(i && i.proxy) : t;
  }
}
const gc = {}, pc = () => Object.create(gc), _c = (n) => Object.getPrototypeOf(n) === gc;
function Vd(n, t, e, i = !1) {
  const s = {}, r = pc();
  n.propsDefaults = /* @__PURE__ */ Object.create(null), mc(n, t, s, r);
  for (const o in n.propsOptions[0])
    o in s || (s[o] = void 0);
  e ? n.props = i ? s : ad(s) : n.type.props ? n.props = s : n.props = r, n.attrs = r;
}
function Hd(n, t, e, i) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: o }
  } = n, a = Et(s), [l] = n.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = n.vnode.dynamicProps;
      for (let g = 0; g < c.length; g++) {
        let f = c[g];
        if (ks(n.emitsOptions, f))
          continue;
        const _ = t[f];
        if (l)
          if (xt(r, f))
            _ !== r[f] && (r[f] = _, h = !0);
          else {
            const u = Oe(f);
            s[u] = co(
              l,
              a,
              u,
              _,
              n,
              !1
            );
          }
        else
          _ !== r[f] && (r[f] = _, h = !0);
      }
    }
  } else {
    mc(n, t, s, r) && (h = !0);
    let c;
    for (const g in a)
      (!t || // for camelCase
      !xt(t, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = On(g)) === g || !xt(t, c))) && (l ? e && // for camelCase
      (e[g] !== void 0 || // for kebab-case
      e[c] !== void 0) && (s[g] = co(
        l,
        a,
        g,
        void 0,
        n,
        !0
      )) : delete s[g]);
    if (r !== a)
      for (const g in r)
        (!t || !xt(t, g)) && (delete r[g], h = !0);
  }
  h && $e(n.attrs, "set", "");
}
function mc(n, t, e, i) {
  const [s, r] = n.propsOptions;
  let o = !1, a;
  if (t)
    for (let l in t) {
      if (Ei(l))
        continue;
      const h = t[l];
      let c;
      s && xt(s, c = Oe(l)) ? !r || !r.includes(c) ? e[c] = h : (a || (a = {}))[c] = h : ks(n.emitsOptions, l) || (!(l in i) || h !== i[l]) && (i[l] = h, o = !0);
    }
  if (r) {
    const l = Et(e), h = a || At;
    for (let c = 0; c < r.length; c++) {
      const g = r[c];
      e[g] = co(
        s,
        l,
        g,
        h[g],
        n,
        !xt(h, g)
      );
    }
  }
  return o;
}
function co(n, t, e, i, s, r) {
  const o = n[e];
  if (o != null) {
    const a = xt(o, "default");
    if (a && i === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && ht(l)) {
        const { propsDefaults: h } = s;
        if (e in h)
          i = h[e];
        else {
          const c = Bi(s);
          i = h[e] = l.call(
            null,
            t
          ), c();
        }
      } else
        i = l;
      s.ce && s.ce._setProp(e, i);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !a ? i = !1 : o[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === On(e)) && (i = !0));
  }
  return i;
}
const $d = /* @__PURE__ */ new WeakMap();
function vc(n, t, e = !1) {
  const i = e ? $d : t.propsCache, s = i.get(n);
  if (s)
    return s;
  const r = n.props, o = {}, a = [];
  let l = !1;
  if (!ht(n)) {
    const c = (g) => {
      l = !0;
      const [f, _] = vc(g, t, !0);
      Qt(o, f), _ && a.push(..._);
    };
    !e && t.mixins.length && t.mixins.forEach(c), n.extends && c(n.extends), n.mixins && n.mixins.forEach(c);
  }
  if (!r && !l)
    return It(n) && i.set(n, qn), qn;
  if (at(r))
    for (let c = 0; c < r.length; c++) {
      const g = Oe(r[c]);
      Pa(g) && (o[g] = At);
    }
  else if (r)
    for (const c in r) {
      const g = Oe(c);
      if (Pa(g)) {
        const f = r[c], _ = o[g] = at(f) || ht(f) ? { type: f } : Qt({}, f), u = _.type;
        let m = !1, v = !0;
        if (at(u))
          for (let S = 0; S < u.length; ++S) {
            const x = u[S], d = ht(x) && x.name;
            if (d === "Boolean") {
              m = !0;
              break;
            } else
              d === "String" && (v = !1);
          }
        else
          m = ht(u) && u.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = m, _[
          1
          /* shouldCastTrue */
        ] = v, (m || xt(_, "default")) && a.push(g);
      }
    }
  const h = [o, a];
  return It(n) && i.set(n, h), h;
}
function Pa(n) {
  return n[0] !== "$" && !Ei(n);
}
const yc = (n) => n[0] === "_" || n === "$stable", Ho = (n) => at(n) ? n.map(Fe) : [Fe(n)], jd = (n, t, e) => {
  if (t._n)
    return t;
  const i = Si((...s) => Ho(t(...s)), e);
  return i._c = !1, i;
}, bc = (n, t, e) => {
  const i = n._ctx;
  for (const s in n) {
    if (yc(s))
      continue;
    const r = n[s];
    if (ht(r))
      t[s] = jd(s, r, i);
    else if (r != null) {
      const o = Ho(r);
      t[s] = () => o;
    }
  }
}, Sc = (n, t) => {
  const e = Ho(t);
  n.slots.default = () => e;
}, wc = (n, t, e) => {
  for (const i in t)
    (e || i !== "_") && (n[i] = t[i]);
}, Yd = (n, t, e) => {
  const i = n.slots = pc();
  if (n.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (wc(i, t, e), e && Nl(i, "_", s, !0)) : bc(t, i);
  } else
    t && Sc(n, t);
}, Wd = (n, t, e) => {
  const { vnode: i, slots: s } = n;
  let r = !0, o = At;
  if (i.shapeFlag & 32) {
    const a = t._;
    a ? e && a === 1 ? r = !1 : wc(s, t, e) : (r = !t.$stable, bc(t, s)), o = t;
  } else
    t && (Sc(n, t), o = { default: 1 });
  if (r)
    for (const a in s)
      !yc(a) && o[a] == null && delete s[a];
}, fe = ou;
function Xd(n) {
  return zd(n);
}
function zd(n, t) {
  const e = Fl();
  e.__VUE__ = !0;
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
    setScopeId: _ = Pe,
    insertStaticContent: u
  } = n, m = (y, C, M, I = null, N = null, L = null, j = void 0, H = null, U = !!C.dynamicChildren) => {
    if (y === C)
      return;
    y && !_i(y, C) && (I = P(y), X(y, N, L, !0), y = null), C.patchFlag === -2 && (U = !1, C.dynamicChildren = null);
    const { type: B, ref: J, shapeFlag: W } = C;
    switch (B) {
      case Ns:
        v(y, C, M, I);
        break;
      case An:
        S(y, C, M, I);
        break;
      case as:
        y == null && x(C, M, I, j);
        break;
      case xe:
        G(
          y,
          C,
          M,
          I,
          N,
          L,
          j,
          H,
          U
        );
        break;
      default:
        W & 1 ? b(
          y,
          C,
          M,
          I,
          N,
          L,
          j,
          H,
          U
        ) : W & 6 ? $(
          y,
          C,
          M,
          I,
          N,
          L,
          j,
          H,
          U
        ) : (W & 64 || W & 128) && B.process(
          y,
          C,
          M,
          I,
          N,
          L,
          j,
          H,
          U,
          St
        );
    }
    J != null && N && ro(J, y && y.ref, L, C || y, !C);
  }, v = (y, C, M, I) => {
    if (y == null)
      i(
        C.el = a(C.children),
        M,
        I
      );
    else {
      const N = C.el = y.el;
      C.children !== y.children && h(N, C.children);
    }
  }, S = (y, C, M, I) => {
    y == null ? i(
      C.el = l(C.children || ""),
      M,
      I
    ) : C.el = y.el;
  }, x = (y, C, M, I) => {
    [y.el, y.anchor] = u(
      y.children,
      C,
      M,
      I,
      y.el,
      y.anchor
    );
  }, d = ({ el: y, anchor: C }, M, I) => {
    let N;
    for (; y && y !== C; )
      N = f(y), i(y, M, I), y = N;
    i(C, M, I);
  }, p = ({ el: y, anchor: C }) => {
    let M;
    for (; y && y !== C; )
      M = f(y), s(y), y = M;
    s(C);
  }, b = (y, C, M, I, N, L, j, H, U) => {
    C.type === "svg" ? j = "svg" : C.type === "math" && (j = "mathml"), y == null ? E(
      C,
      M,
      I,
      N,
      L,
      j,
      H,
      U
    ) : k(
      y,
      C,
      N,
      L,
      j,
      H,
      U
    );
  }, E = (y, C, M, I, N, L, j, H) => {
    let U, B;
    const { props: J, shapeFlag: W, transition: K, dirs: tt } = y;
    if (U = y.el = o(
      y.type,
      L,
      J && J.is,
      J
    ), W & 8 ? c(U, y.children) : W & 16 && w(
      y.children,
      U,
      null,
      I,
      N,
      Fr(y, L),
      j,
      H
    ), tt && Sn(y, null, I, "created"), R(U, y, y.scopeId, j, I), J) {
      for (const Tt in J)
        Tt !== "value" && !Ei(Tt) && r(U, Tt, null, J[Tt], L, I);
      "value" in J && r(U, "value", null, J.value, L), (B = J.onVnodeBeforeMount) && Ne(B, I, y);
    }
    tt && Sn(y, null, I, "beforeMount");
    const pt = Kd(N, K);
    pt && K.beforeEnter(U), i(U, C, M), ((B = J && J.onVnodeMounted) || pt || tt) && fe(() => {
      B && Ne(B, I, y), pt && K.enter(U), tt && Sn(y, null, I, "mounted");
    }, N);
  }, R = (y, C, M, I, N) => {
    if (M && _(y, M), I)
      for (let L = 0; L < I.length; L++)
        _(y, I[L]);
    if (N) {
      let L = N.subTree;
      if (C === L || Mc(L.type) && (L.ssContent === C || L.ssFallback === C)) {
        const j = N.vnode;
        R(
          y,
          j,
          j.scopeId,
          j.slotScopeIds,
          N.parent
        );
      }
    }
  }, w = (y, C, M, I, N, L, j, H, U = 0) => {
    for (let B = U; B < y.length; B++) {
      const J = y[B] = H ? sn(y[B]) : Fe(y[B]);
      m(
        null,
        J,
        C,
        M,
        I,
        N,
        L,
        j,
        H
      );
    }
  }, k = (y, C, M, I, N, L, j) => {
    const H = C.el = y.el;
    let { patchFlag: U, dynamicChildren: B, dirs: J } = C;
    U |= y.patchFlag & 16;
    const W = y.props || At, K = C.props || At;
    let tt;
    if (M && wn(M, !1), (tt = K.onVnodeBeforeUpdate) && Ne(tt, M, C, y), J && Sn(C, y, M, "beforeUpdate"), M && wn(M, !0), (W.innerHTML && K.innerHTML == null || W.textContent && K.textContent == null) && c(H, ""), B ? T(
      y.dynamicChildren,
      B,
      H,
      M,
      I,
      Fr(C, N),
      L
    ) : j || V(
      y,
      C,
      H,
      null,
      M,
      I,
      Fr(C, N),
      L,
      !1
    ), U > 0) {
      if (U & 16)
        O(H, W, K, M, N);
      else if (U & 2 && W.class !== K.class && r(H, "class", null, K.class, N), U & 4 && r(H, "style", W.style, K.style, N), U & 8) {
        const pt = C.dynamicProps;
        for (let Tt = 0; Tt < pt.length; Tt++) {
          const yt = pt[Tt], Dt = W[yt], ot = K[yt];
          (ot !== Dt || yt === "value") && r(H, yt, Dt, ot, N, M);
        }
      }
      U & 1 && y.children !== C.children && c(H, C.children);
    } else
      !j && B == null && O(H, W, K, M, N);
    ((tt = K.onVnodeUpdated) || J) && fe(() => {
      tt && Ne(tt, M, C, y), J && Sn(C, y, M, "updated");
    }, I);
  }, T = (y, C, M, I, N, L, j) => {
    for (let H = 0; H < C.length; H++) {
      const U = y[H], B = C[H], J = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        U.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (U.type === xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !_i(U, B) || // - In the case of a component, it could contain anything.
        U.shapeFlag & 70) ? g(U.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          M
        )
      );
      m(
        U,
        B,
        J,
        null,
        I,
        N,
        L,
        j,
        !0
      );
    }
  }, O = (y, C, M, I, N) => {
    if (C !== M) {
      if (C !== At)
        for (const L in C)
          !Ei(L) && !(L in M) && r(
            y,
            L,
            C[L],
            null,
            N,
            I
          );
      for (const L in M) {
        if (Ei(L))
          continue;
        const j = M[L], H = C[L];
        j !== H && L !== "value" && r(y, L, H, j, N, I);
      }
      "value" in M && r(y, "value", C.value, M.value, N);
    }
  }, G = (y, C, M, I, N, L, j, H, U) => {
    const B = C.el = y ? y.el : a(""), J = C.anchor = y ? y.anchor : a("");
    let { patchFlag: W, dynamicChildren: K, slotScopeIds: tt } = C;
    tt && (H = H ? H.concat(tt) : tt), y == null ? (i(B, M, I), i(J, M, I), w(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      C.children || [],
      M,
      J,
      N,
      L,
      j,
      H,
      U
    )) : W > 0 && W & 64 && K && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    y.dynamicChildren ? (T(
      y.dynamicChildren,
      K,
      M,
      N,
      L,
      j,
      H
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (C.key != null || N && C === N.subTree) && Cc(
      y,
      C,
      !0
      /* shallow */
    )) : V(
      y,
      C,
      M,
      J,
      N,
      L,
      j,
      H,
      U
    );
  }, $ = (y, C, M, I, N, L, j, H, U) => {
    C.slotScopeIds = H, y == null ? C.shapeFlag & 512 ? N.ctx.activate(
      C,
      M,
      I,
      j,
      U
    ) : Z(
      C,
      M,
      I,
      N,
      L,
      j,
      U
    ) : Y(y, C, U);
  }, Z = (y, C, M, I, N, L, j) => {
    const H = y.component = gu(
      y,
      I,
      N
    );
    if (cc(y) && (H.ctx.renderer = St), pu(H, !1, j), H.asyncDep) {
      if (N && N.registerDep(H, it, j), !y.el) {
        const U = H.subTree = Ot(An);
        S(null, U, C, M);
      }
    } else
      it(
        H,
        y,
        C,
        M,
        N,
        L,
        j
      );
  }, Y = (y, C, M) => {
    const I = C.component = y.component;
    if (su(y, C, M))
      if (I.asyncDep && !I.asyncResolved) {
        z(I, C, M);
        return;
      } else
        I.next = C, I.update();
    else
      C.el = y.el, I.vnode = C;
  }, it = (y, C, M, I, N, L, j) => {
    const H = () => {
      if (y.isMounted) {
        let { next: W, bu: K, u: tt, parent: pt, vnode: Tt } = y;
        {
          const te = xc(y);
          if (te) {
            W && (W.el = Tt.el, z(y, W, j)), te.asyncDep.then(() => {
              y.isUnmounted || H();
            });
            return;
          }
        }
        let yt = W, Dt;
        wn(y, !1), W ? (W.el = Tt.el, z(y, W, j)) : W = Tt, K && Mr(K), (Dt = W.props && W.props.onVnodeBeforeUpdate) && Ne(Dt, pt, W, Tt), wn(y, !0);
        const ot = Dr(y), ue = y.subTree;
        y.subTree = ot, m(
          ue,
          ot,
          // parent may have changed if it's in a teleport
          g(ue.el),
          // anchor may have changed if it's in a fragment
          P(ue),
          y,
          N,
          L
        ), W.el = ot.el, yt === null && ru(y, ot.el), tt && fe(tt, N), (Dt = W.props && W.props.onVnodeUpdated) && fe(
          () => Ne(Dt, pt, W, Tt),
          N
        );
      } else {
        let W;
        const { el: K, props: tt } = C, { bm: pt, m: Tt, parent: yt, root: Dt, type: ot } = y, ue = Ti(C);
        if (wn(y, !1), pt && Mr(pt), !ue && (W = tt && tt.onVnodeBeforeMount) && Ne(W, yt, C), wn(y, !0), K && Rt) {
          const te = () => {
            y.subTree = Dr(y), Rt(
              K,
              y.subTree,
              y,
              N,
              null
            );
          };
          ue ? ot.__asyncHydrate(
            K,
            y,
            te
          ) : te();
        } else {
          Dt.ce && Dt.ce._injectChildStyle(ot);
          const te = y.subTree = Dr(y);
          m(
            null,
            te,
            M,
            I,
            y,
            N,
            L
          ), C.el = te.el;
        }
        if (Tt && fe(Tt, N), !ue && (W = tt && tt.onVnodeMounted)) {
          const te = C;
          fe(
            () => Ne(W, yt, te),
            N
          );
        }
        (C.shapeFlag & 256 || yt && Ti(yt.vnode) && yt.vnode.shapeFlag & 256) && y.a && fe(y.a, N), y.isMounted = !0, C = M = I = null;
      }
    };
    y.scope.on();
    const U = y.effect = new Gl(H);
    y.scope.off();
    const B = y.update = U.run.bind(U), J = y.job = U.runIfDirty.bind(U);
    J.i = y, J.id = y.uid, U.scheduler = () => Go(J), wn(y, !0), B();
  }, z = (y, C, M) => {
    C.component = y;
    const I = y.vnode.props;
    y.vnode = C, y.next = null, Hd(y, C.props, I, M), Wd(y, C.children, M), dn(), ba(y), un();
  }, V = (y, C, M, I, N, L, j, H, U = !1) => {
    const B = y && y.children, J = y ? y.shapeFlag : 0, W = C.children, { patchFlag: K, shapeFlag: tt } = C;
    if (K > 0) {
      if (K & 128) {
        Q(
          B,
          W,
          M,
          I,
          N,
          L,
          j,
          H,
          U
        );
        return;
      } else if (K & 256) {
        lt(
          B,
          W,
          M,
          I,
          N,
          L,
          j,
          H,
          U
        );
        return;
      }
    }
    tt & 8 ? (J & 16 && ct(B, N, L), W !== B && c(M, W)) : J & 16 ? tt & 16 ? Q(
      B,
      W,
      M,
      I,
      N,
      L,
      j,
      H,
      U
    ) : ct(B, N, L, !0) : (J & 8 && c(M, ""), tt & 16 && w(
      W,
      M,
      I,
      N,
      L,
      j,
      H,
      U
    ));
  }, lt = (y, C, M, I, N, L, j, H, U) => {
    y = y || qn, C = C || qn;
    const B = y.length, J = C.length, W = Math.min(B, J);
    let K;
    for (K = 0; K < W; K++) {
      const tt = C[K] = U ? sn(C[K]) : Fe(C[K]);
      m(
        y[K],
        tt,
        M,
        null,
        N,
        L,
        j,
        H,
        U
      );
    }
    B > J ? ct(
      y,
      N,
      L,
      !0,
      !1,
      W
    ) : w(
      C,
      M,
      I,
      N,
      L,
      j,
      H,
      U,
      W
    );
  }, Q = (y, C, M, I, N, L, j, H, U) => {
    let B = 0;
    const J = C.length;
    let W = y.length - 1, K = J - 1;
    for (; B <= W && B <= K; ) {
      const tt = y[B], pt = C[B] = U ? sn(C[B]) : Fe(C[B]);
      if (_i(tt, pt))
        m(
          tt,
          pt,
          M,
          null,
          N,
          L,
          j,
          H,
          U
        );
      else
        break;
      B++;
    }
    for (; B <= W && B <= K; ) {
      const tt = y[W], pt = C[K] = U ? sn(C[K]) : Fe(C[K]);
      if (_i(tt, pt))
        m(
          tt,
          pt,
          M,
          null,
          N,
          L,
          j,
          H,
          U
        );
      else
        break;
      W--, K--;
    }
    if (B > W) {
      if (B <= K) {
        const tt = K + 1, pt = tt < J ? C[tt].el : I;
        for (; B <= K; )
          m(
            null,
            C[B] = U ? sn(C[B]) : Fe(C[B]),
            M,
            pt,
            N,
            L,
            j,
            H,
            U
          ), B++;
      }
    } else if (B > K)
      for (; B <= W; )
        X(y[B], N, L, !0), B++;
    else {
      const tt = B, pt = B, Tt = /* @__PURE__ */ new Map();
      for (B = pt; B <= K; B++) {
        const ae = C[B] = U ? sn(C[B]) : Fe(C[B]);
        ae.key != null && Tt.set(ae.key, B);
      }
      let yt, Dt = 0;
      const ot = K - pt + 1;
      let ue = !1, te = 0;
      const yn = new Array(ot);
      for (B = 0; B < ot; B++)
        yn[B] = 0;
      for (B = tt; B <= W; B++) {
        const ae = y[B];
        if (Dt >= ot) {
          X(ae, N, L, !0);
          continue;
        }
        let me;
        if (ae.key != null)
          me = Tt.get(ae.key);
        else
          for (yt = pt; yt <= K; yt++)
            if (yn[yt - pt] === 0 && _i(ae, C[yt])) {
              me = yt;
              break;
            }
        me === void 0 ? X(ae, N, L, !0) : (yn[me - pt] = B + 1, me >= te ? te = me : ue = !0, m(
          ae,
          C[me],
          M,
          null,
          N,
          L,
          j,
          H,
          U
        ), Dt++);
      }
      const Yi = ue ? qd(yn) : qn;
      for (yt = Yi.length - 1, B = ot - 1; B >= 0; B--) {
        const ae = pt + B, me = C[ae], ce = ae + 1 < J ? C[ae + 1].el : I;
        yn[B] === 0 ? m(
          null,
          me,
          M,
          ce,
          N,
          L,
          j,
          H,
          U
        ) : ue && (yt < 0 || B !== Yi[yt] ? rt(me, M, ce, 2) : yt--);
      }
    }
  }, rt = (y, C, M, I, N = null) => {
    const { el: L, type: j, transition: H, children: U, shapeFlag: B } = y;
    if (B & 6) {
      rt(y.component.subTree, C, M, I);
      return;
    }
    if (B & 128) {
      y.suspense.move(C, M, I);
      return;
    }
    if (B & 64) {
      j.move(y, C, M, St);
      return;
    }
    if (j === xe) {
      i(L, C, M);
      for (let W = 0; W < U.length; W++)
        rt(U[W], C, M, I);
      i(y.anchor, C, M);
      return;
    }
    if (j === as) {
      d(y, C, M);
      return;
    }
    if (I !== 2 && B & 1 && H)
      if (I === 0)
        H.beforeEnter(L), i(L, C, M), fe(() => H.enter(L), N);
      else {
        const { leave: W, delayLeave: K, afterLeave: tt } = H, pt = () => i(L, C, M), Tt = () => {
          W(L, () => {
            pt(), tt && tt();
          });
        };
        K ? K(L, pt, Tt) : Tt();
      }
    else
      i(L, C, M);
  }, X = (y, C, M, I = !1, N = !1) => {
    const {
      type: L,
      props: j,
      ref: H,
      children: U,
      dynamicChildren: B,
      shapeFlag: J,
      patchFlag: W,
      dirs: K,
      cacheIndex: tt
    } = y;
    if (W === -2 && (N = !1), H != null && ro(H, null, M, y, !0), tt != null && (C.renderCache[tt] = void 0), J & 256) {
      C.ctx.deactivate(y);
      return;
    }
    const pt = J & 1 && K, Tt = !Ti(y);
    let yt;
    if (Tt && (yt = j && j.onVnodeBeforeUnmount) && Ne(yt, C, y), J & 6)
      qt(y.component, M, I);
    else {
      if (J & 128) {
        y.suspense.unmount(M, I);
        return;
      }
      pt && Sn(y, null, C, "beforeUnmount"), J & 64 ? y.type.remove(
        y,
        C,
        M,
        St,
        I
      ) : B && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !B.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (L !== xe || W > 0 && W & 64) ? ct(
        B,
        C,
        M,
        !1,
        !0
      ) : (L === xe && W & 384 || !N && J & 16) && ct(U, C, M), I && Pt(y);
    }
    (Tt && (yt = j && j.onVnodeUnmounted) || pt) && fe(() => {
      yt && Ne(yt, C, y), pt && Sn(y, null, C, "unmounted");
    }, M);
  }, Pt = (y) => {
    const { type: C, el: M, anchor: I, transition: N } = y;
    if (C === xe) {
      Ut(M, I);
      return;
    }
    if (C === as) {
      p(y);
      return;
    }
    const L = () => {
      s(M), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (y.shapeFlag & 1 && N && !N.persisted) {
      const { leave: j, delayLeave: H } = N, U = () => j(M, L);
      H ? H(y.el, L, U) : U();
    } else
      L();
  }, Ut = (y, C) => {
    let M;
    for (; y !== C; )
      M = f(y), s(y), y = M;
    s(C);
  }, qt = (y, C, M) => {
    const { bum: I, scope: N, job: L, subTree: j, um: H, m: U, a: B } = y;
    Ta(U), Ta(B), I && Mr(I), N.stop(), L && (L.flags |= 8, X(j, y, C, M)), H && fe(H, C), fe(() => {
      y.isUnmounted = !0;
    }, C), C && C.pendingBranch && !C.isUnmounted && y.asyncDep && !y.asyncResolved && y.suspenseId === C.pendingId && (C.deps--, C.deps === 0 && C.resolve());
  }, ct = (y, C, M, I = !1, N = !1, L = 0) => {
    for (let j = L; j < y.length; j++)
      X(y[j], C, M, I, N);
  }, P = (y) => {
    if (y.shapeFlag & 6)
      return P(y.component.subTree);
    if (y.shapeFlag & 128)
      return y.suspense.next();
    const C = f(y.anchor || y.el), M = C && C[yd];
    return M ? f(M) : C;
  };
  let D = !1;
  const q = (y, C, M) => {
    y == null ? C._vnode && X(C._vnode, null, null, !0) : m(
      C._vnode || null,
      y,
      C,
      null,
      null,
      null,
      M
    ), C._vnode = y, D || (D = !0, ba(), ic(), D = !1);
  }, St = {
    p: m,
    um: X,
    m: rt,
    r: Pt,
    mt: Z,
    mc: w,
    pc: V,
    pbc: T,
    n: P,
    o: n
  };
  let wt, Rt;
  return t && ([wt, Rt] = t(
    St
  )), {
    render: q,
    hydrate: wt,
    createApp: Ud(q, wt)
  };
}
function Fr({ type: n, props: t }, e) {
  return e === "svg" && n === "foreignObject" || e === "mathml" && n === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : e;
}
function wn({ effect: n, job: t }, e) {
  e ? (n.flags |= 32, t.flags |= 4) : (n.flags &= -33, t.flags &= -5);
}
function Kd(n, t) {
  return (!n || n && !n.pendingBranch) && t && !t.persisted;
}
function Cc(n, t, e = !1) {
  const i = n.children, s = t.children;
  if (at(i) && at(s))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let a = s[r];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[r] = sn(s[r]), a.el = o.el), !e && a.patchFlag !== -2 && Cc(o, a)), a.type === Ns && (a.el = o.el);
    }
}
function qd(n) {
  const t = n.slice(), e = [0];
  let i, s, r, o, a;
  const l = n.length;
  for (i = 0; i < l; i++) {
    const h = n[i];
    if (h !== 0) {
      if (s = e[e.length - 1], n[s] < h) {
        t[i] = s, e.push(i);
        continue;
      }
      for (r = 0, o = e.length - 1; r < o; )
        a = r + o >> 1, n[e[a]] < h ? r = a + 1 : o = a;
      h < n[e[r]] && (r > 0 && (t[i] = e[r - 1]), e[r] = i);
    }
  }
  for (r = e.length, o = e[r - 1]; r-- > 0; )
    e[r] = o, o = t[o];
  return e;
}
function xc(n) {
  const t = n.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : xc(t);
}
function Ta(n) {
  if (n)
    for (let t = 0; t < n.length; t++)
      n[t].flags |= 8;
}
const Zd = Symbol.for("v-scx"), Jd = () => je(Zd);
function De(n, t, e) {
  return Ec(n, t, e);
}
function Ec(n, t, e = At) {
  const { immediate: i, deep: s, flush: r, once: o } = e, a = Qt({}, e);
  let l;
  if (Fs)
    if (r === "sync") {
      const f = Jd();
      l = f.__watcherHandles || (f.__watcherHandles = []);
    } else if (!t || i)
      a.once = !0;
    else
      return {
        stop: Pe,
        resume: Pe,
        pause: Pe
      };
  const h = Jt;
  a.call = (f, _, u) => Ie(f, h, _, u);
  let c = !1;
  r === "post" ? a.scheduler = (f) => {
    fe(f, h && h.suspense);
  } : r !== "sync" && (c = !0, a.scheduler = (f, _) => {
    _ ? f() : Go(f);
  }), a.augmentJob = (f) => {
    t && (f.flags |= 4), c && (f.flags |= 2, h && (f.id = h.uid, f.i = h));
  };
  const g = pd(n, t, a);
  return l && l.push(g), g;
}
function Qd(n, t, e) {
  const i = this.proxy, s = Yt(n) ? n.includes(".") ? Pc(i, n) : () => i[n] : n.bind(i, i);
  let r;
  ht(t) ? r = t : (r = t.handler, e = t);
  const o = Bi(this), a = Ec(s, r.bind(i), e);
  return o(), a;
}
function Pc(n, t) {
  const e = t.split(".");
  return () => {
    let i = n;
    for (let s = 0; s < e.length && i; s++)
      i = i[e[s]];
    return i;
  };
}
const tu = (n, t) => t === "modelValue" || t === "model-value" ? n.modelModifiers : n[`${t}Modifiers`] || n[`${Oe(t)}Modifiers`] || n[`${On(t)}Modifiers`];
function eu(n, t, ...e) {
  if (n.isUnmounted)
    return;
  const i = n.vnode.props || At;
  let s = e;
  const r = t.startsWith("update:"), o = r && tu(i, t.slice(7));
  o && (o.trim && (s = e.map((c) => Yt(c) ? c.trim() : c)), o.number && (s = e.map(kh)));
  let a, l = i[a = Tr(t)] || // also try camelCase event handler (#2249)
  i[a = Tr(Oe(t))];
  !l && r && (l = i[a = Tr(On(t))]), l && Ie(
    l,
    n,
    6,
    s
  );
  const h = i[a + "Once"];
  if (h) {
    if (!n.emitted)
      n.emitted = {};
    else if (n.emitted[a])
      return;
    n.emitted[a] = !0, Ie(
      h,
      n,
      6,
      s
    );
  }
}
function Tc(n, t, e = !1) {
  const i = t.emitsCache, s = i.get(n);
  if (s !== void 0)
    return s;
  const r = n.emits;
  let o = {}, a = !1;
  if (!ht(n)) {
    const l = (h) => {
      const c = Tc(h, t, !0);
      c && (a = !0, Qt(o, c));
    };
    !e && t.mixins.length && t.mixins.forEach(l), n.extends && l(n.extends), n.mixins && n.mixins.forEach(l);
  }
  return !r && !a ? (It(n) && i.set(n, null), null) : (at(r) ? r.forEach((l) => o[l] = null) : Qt(o, r), It(n) && i.set(n, o), o);
}
function ks(n, t) {
  return !n || !ws(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), xt(n, t[0].toLowerCase() + t.slice(1)) || xt(n, On(t)) || xt(n, t));
}
function Dr(n) {
  const {
    type: t,
    vnode: e,
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
  } = n, v = fs(n);
  let S, x;
  try {
    if (e.shapeFlag & 4) {
      const p = s || i, b = p;
      S = Fe(
        h.call(
          b,
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
      S = Fe(
        p.length > 1 ? p(
          g,
          { attrs: a, slots: o, emit: l }
        ) : p(
          g,
          null
        )
      ), x = t.props ? a : nu(a);
    }
  } catch (p) {
    Ai.length = 0, As(p, n, 1), S = Ot(An);
  }
  let d = S;
  if (x && m !== !1) {
    const p = Object.keys(x), { shapeFlag: b } = d;
    p.length && b & 7 && (r && p.some(xo) && (x = iu(
      x,
      r
    )), d = ii(d, x, !1, !0));
  }
  return e.dirs && (d = ii(d, null, !1, !0), d.dirs = d.dirs ? d.dirs.concat(e.dirs) : e.dirs), e.transition && (d.transition = e.transition), S = d, fs(v), S;
}
const nu = (n) => {
  let t;
  for (const e in n)
    (e === "class" || e === "style" || ws(e)) && ((t || (t = {}))[e] = n[e]);
  return t;
}, iu = (n, t) => {
  const e = {};
  for (const i in n)
    (!xo(i) || !(i.slice(9) in t)) && (e[i] = n[i]);
  return e;
};
function su(n, t, e) {
  const { props: i, children: s, component: r } = n, { props: o, children: a, patchFlag: l } = t, h = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (e && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? Ma(i, o, h) : !!o;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let g = 0; g < c.length; g++) {
        const f = c[g];
        if (o[f] !== i[f] && !ks(h, f))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : i === o ? !1 : i ? o ? Ma(i, o, h) : !0 : !!o;
  return !1;
}
function Ma(n, t, e) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(n).length)
    return !0;
  for (let s = 0; s < i.length; s++) {
    const r = i[s];
    if (t[r] !== n[r] && !ks(e, r))
      return !0;
  }
  return !1;
}
function ru({ vnode: n, parent: t }, e) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === n && (i.el = n.el), i === n)
      (n = t.vnode).el = e, t = t.parent;
    else
      break;
  }
}
const Mc = (n) => n.__isSuspense;
function ou(n, t) {
  t && t.pendingBranch ? at(n) ? t.effects.push(...n) : t.effects.push(n) : vd(n);
}
const xe = Symbol.for("v-fgt"), Ns = Symbol.for("v-txt"), An = Symbol.for("v-cmt"), as = Symbol.for("v-stc"), Ai = [];
let _e = null;
function Se(n = !1) {
  Ai.push(_e = n ? null : []);
}
function au() {
  Ai.pop(), _e = Ai[Ai.length - 1] || null;
}
let Fi = 1;
function Aa(n) {
  Fi += n, n < 0 && _e && (_e.hasOnce = !0);
}
function Ac(n) {
  return n.dynamicChildren = Fi > 0 ? _e || qn : null, au(), Fi > 0 && _e && _e.push(n), n;
}
function We(n, t, e, i, s, r) {
  return Ac(
    Ee(
      n,
      t,
      e,
      i,
      s,
      r,
      !0
    )
  );
}
function $o(n, t, e, i, s) {
  return Ac(
    Ot(
      n,
      t,
      e,
      i,
      s,
      !0
    )
  );
}
function ho(n) {
  return n ? n.__v_isVNode === !0 : !1;
}
function _i(n, t) {
  return n.type === t.type && n.key === t.key;
}
const Oc = ({ key: n }) => n ?? null, ls = ({
  ref: n,
  ref_key: t,
  ref_for: e
}) => (typeof n == "number" && (n = "" + n), n != null ? Yt(n) || se(n) || ht(n) ? { i: be, r: n, k: t, f: !!e } : n : null);
function Ee(n, t = null, e = null, i = 0, s = null, r = n === xe ? 0 : 1, o = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n,
    props: t,
    key: t && Oc(t),
    ref: t && ls(t),
    scopeId: rc,
    slotScopeIds: null,
    children: e,
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
    ctx: be
  };
  return a ? (jo(l, e), r & 128 && n.normalize(l)) : e && (l.shapeFlag |= Yt(e) ? 8 : 16), Fi > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  _e && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && _e.push(l), l;
}
const Ot = lu;
function lu(n, t = null, e = null, i = 0, s = null, r = !1) {
  if ((!n || n === Od) && (n = An), ho(n)) {
    const a = ii(
      n,
      t,
      !0
      /* mergeRef: true */
    );
    return e && jo(a, e), Fi > 0 && !r && _e && (a.shapeFlag & 6 ? _e[_e.indexOf(n)] = a : _e.push(a)), a.patchFlag = -2, a;
  }
  if (bu(n) && (n = n.__vccOpts), t) {
    t = cu(t);
    let { class: a, style: l } = t;
    a && !Yt(a) && (t.class = ni(a)), It(l) && (Fo(l) && !at(l) && (l = Qt({}, l)), t.style = Ps(l));
  }
  const o = Yt(n) ? 1 : Mc(n) ? 128 : bd(n) ? 64 : It(n) ? 4 : ht(n) ? 2 : 0;
  return Ee(
    n,
    t,
    e,
    i,
    s,
    o,
    r,
    !0
  );
}
function cu(n) {
  return n ? Fo(n) || _c(n) ? Qt({}, n) : n : null;
}
function ii(n, t, e = !1, i = !1) {
  const { props: s, ref: r, patchFlag: o, children: a, transition: l } = n, h = t ? du(s || {}, t) : s, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n.type,
    props: h,
    key: h && Oc(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      e && r ? at(r) ? r.concat(ls(t)) : [r, ls(t)] : ls(t)
    ) : r,
    scopeId: n.scopeId,
    slotScopeIds: n.slotScopeIds,
    children: a,
    target: n.target,
    targetStart: n.targetStart,
    targetAnchor: n.targetAnchor,
    staticCount: n.staticCount,
    shapeFlag: n.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && n.type !== xe ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: n.dynamicProps,
    dynamicChildren: n.dynamicChildren,
    appContext: n.appContext,
    dirs: n.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: n.component,
    suspense: n.suspense,
    ssContent: n.ssContent && ii(n.ssContent),
    ssFallback: n.ssFallback && ii(n.ssFallback),
    el: n.el,
    anchor: n.anchor,
    ctx: n.ctx,
    ce: n.ce
  };
  return l && i && oc(
    c,
    l.clone(c)
  ), c;
}
function Rc(n = " ", t = 0) {
  return Ot(Ns, null, n, t);
}
function kc(n, t) {
  const e = Ot(as, null, n);
  return e.staticCount = t, e;
}
function hu(n = "", t = !1) {
  return t ? (Se(), $o(An, null, n)) : Ot(An, null, n);
}
function Fe(n) {
  return n == null || typeof n == "boolean" ? Ot(An) : at(n) ? Ot(
    xe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    n.slice()
  ) : typeof n == "object" ? sn(n) : Ot(Ns, null, String(n));
}
function sn(n) {
  return n.el === null && n.patchFlag !== -1 || n.memo ? n : ii(n);
}
function jo(n, t) {
  let e = 0;
  const { shapeFlag: i } = n;
  if (t == null)
    t = null;
  else if (at(t))
    e = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), jo(n, s()), s._c && (s._d = !0));
      return;
    } else {
      e = 32;
      const s = t._;
      !s && !_c(t) ? t._ctx = be : s === 3 && be && (be.slots._ === 1 ? t._ = 1 : (t._ = 2, n.patchFlag |= 1024));
    }
  else
    ht(t) ? (t = { default: t, _ctx: be }, e = 32) : (t = String(t), i & 64 ? (e = 16, t = [Rc(t)]) : e = 8);
  n.children = t, n.shapeFlag |= e;
}
function du(...n) {
  const t = {};
  for (let e = 0; e < n.length; e++) {
    const i = n[e];
    for (const s in i)
      if (s === "class")
        t.class !== i.class && (t.class = ni([t.class, i.class]));
      else if (s === "style")
        t.style = Ps([t.style, i.style]);
      else if (ws(s)) {
        const r = t[s], o = i[s];
        o && r !== o && !(at(r) && r.includes(o)) && (t[s] = r ? [].concat(r, o) : o);
      } else
        s !== "" && (t[s] = i[s]);
  }
  return t;
}
function Ne(n, t, e, i = null) {
  Ie(n, t, 7, [
    e,
    i
  ]);
}
const uu = fc();
let fu = 0;
function gu(n, t, e) {
  const i = n.type, s = (t ? t.appContext : n.appContext) || uu, r = {
    uid: fu++,
    vnode: n,
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
    scope: new Bh(
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
    propsOptions: vc(i, s),
    emitsOptions: Tc(i, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: At,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: At,
    data: At,
    props: At,
    attrs: At,
    slots: At,
    refs: At,
    setupState: At,
    setupContext: null,
    // suspense related
    suspense: e,
    suspenseId: e ? e.pendingId : 0,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = eu.bind(null, r), n.ce && n.ce(r), r;
}
let Jt = null;
const Yo = () => Jt || be;
let ps, uo;
{
  const n = Fl(), t = (e, i) => {
    let s;
    return (s = n[e]) || (s = n[e] = []), s.push(i), (r) => {
      s.length > 1 ? s.forEach((o) => o(r)) : s[0](r);
    };
  };
  ps = t(
    "__VUE_INSTANCE_SETTERS__",
    (e) => Jt = e
  ), uo = t(
    "__VUE_SSR_SETTERS__",
    (e) => Fs = e
  );
}
const Bi = (n) => {
  const t = Jt;
  return ps(n), n.scope.on(), () => {
    n.scope.off(), ps(t);
  };
}, Oa = () => {
  Jt && Jt.scope.off(), ps(null);
};
function Nc(n) {
  return n.vnode.shapeFlag & 4;
}
let Fs = !1;
function pu(n, t = !1, e = !1) {
  t && uo(t);
  const { props: i, children: s } = n.vnode, r = Nc(n);
  Vd(n, i, r, t), Yd(n, s, e);
  const o = r ? _u(n, t) : void 0;
  return t && uo(!1), o;
}
function _u(n, t) {
  const e = n.type;
  n.accessCache = /* @__PURE__ */ Object.create(null), n.proxy = new Proxy(n.ctx, Nd);
  const { setup: i } = e;
  if (i) {
    const s = n.setupContext = i.length > 1 ? vu(n) : null, r = Bi(n);
    dn();
    const o = Gi(
      i,
      n,
      0,
      [
        n.props,
        s
      ]
    );
    if (un(), r(), Ol(o)) {
      if (Ti(n) || lc(n), o.then(Oa, Oa), t)
        return o.then((a) => {
          Ra(n, a, t);
        }).catch((a) => {
          As(a, n, 0);
        });
      n.asyncDep = o;
    } else
      Ra(n, o, t);
  } else
    Fc(n, t);
}
function Ra(n, t, e) {
  ht(t) ? n.type.__ssrInlineRender ? n.ssrRender = t : n.render = t : It(t) && (n.setupState = Ql(t)), Fc(n, e);
}
let ka;
function Fc(n, t, e) {
  const i = n.type;
  if (!n.render) {
    if (!t && ka && !i.render) {
      const s = i.template || Vo(n).template;
      if (s) {
        const { isCustomElement: r, compilerOptions: o } = n.appContext.config, { delimiters: a, compilerOptions: l } = i, h = Qt(
          Qt(
            {
              isCustomElement: r,
              delimiters: a
            },
            o
          ),
          l
        );
        i.render = ka(s, h);
      }
    }
    n.render = i.render || Pe;
  }
  {
    const s = Bi(n);
    dn();
    try {
      Fd(n);
    } finally {
      un(), s();
    }
  }
}
const mu = {
  get(n, t) {
    return re(n, "get", ""), n[t];
  }
};
function vu(n) {
  const t = (e) => {
    n.exposed = e || {};
  };
  return {
    attrs: new Proxy(n.attrs, mu),
    slots: n.slots,
    emit: n.emit,
    expose: t
  };
}
function Wo(n) {
  return n.exposed ? n.exposeProxy || (n.exposeProxy = new Proxy(Ql(ld(n.exposed)), {
    get(t, e) {
      if (e in t)
        return t[e];
      if (e in Mi)
        return Mi[e](n);
    },
    has(t, e) {
      return e in t || e in Mi;
    }
  })) : n.proxy;
}
function yu(n, t = !0) {
  return ht(n) ? n.displayName || n.name : n.name || t && n.__name;
}
function bu(n) {
  return ht(n) && "__vccOpts" in n;
}
const on = (n, t) => fd(n, t, Fs);
function Su(n) {
  const t = Yo(), e = cd(null);
  if (t) {
    const i = t.refs === At ? t.refs = {} : t.refs;
    Object.defineProperty(i, n, {
      enumerable: !0,
      get: () => e.value,
      set: (s) => e.value = s
    });
  }
  return e;
}
function Dc(n, t, e) {
  const i = arguments.length;
  return i === 2 ? It(t) && !at(t) ? ho(t) ? Ot(n, null, [t]) : Ot(n, t) : Ot(n, null, t) : (i > 3 ? e = Array.prototype.slice.call(arguments, 2) : i === 3 && ho(e) && (e = [e]), Ot(n, t, e));
}
const wu = "3.5.1";
/**
* @vue/runtime-dom v3.5.1
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let fo;
const Na = typeof window < "u" && window.trustedTypes;
if (Na)
  try {
    fo = /* @__PURE__ */ Na.createPolicy("vue", {
      createHTML: (n) => n
    });
  } catch {
  }
const Lc = fo ? (n) => fo.createHTML(n) : (n) => n, Cu = "http://www.w3.org/2000/svg", xu = "http://www.w3.org/1998/Math/MathML", He = typeof document < "u" ? document : null, Fa = He && /* @__PURE__ */ He.createElement("template"), Eu = {
  insert: (n, t, e) => {
    t.insertBefore(n, e || null);
  },
  remove: (n) => {
    const t = n.parentNode;
    t && t.removeChild(n);
  },
  createElement: (n, t, e, i) => {
    const s = t === "svg" ? He.createElementNS(Cu, n) : t === "mathml" ? He.createElementNS(xu, n) : e ? He.createElement(n, { is: e }) : He.createElement(n);
    return n === "select" && i && i.multiple != null && s.setAttribute("multiple", i.multiple), s;
  },
  createText: (n) => He.createTextNode(n),
  createComment: (n) => He.createComment(n),
  setText: (n, t) => {
    n.nodeValue = t;
  },
  setElementText: (n, t) => {
    n.textContent = t;
  },
  parentNode: (n) => n.parentNode,
  nextSibling: (n) => n.nextSibling,
  querySelector: (n) => He.querySelector(n),
  setScopeId(n, t) {
    n.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(n, t, e, i, s, r) {
    const o = e ? e.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), e), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      Fa.innerHTML = Lc(
        i === "svg" ? `<svg>${n}</svg>` : i === "mathml" ? `<math>${n}</math>` : n
      );
      const a = Fa.content;
      if (i === "svg" || i === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, e);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      e ? e.previousSibling : t.lastChild
    ];
  }
}, Pu = Symbol("_vtc");
function Tu(n, t, e) {
  const i = n[Pu];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? n.removeAttribute("class") : e ? n.setAttribute("class", t) : n.className = t;
}
const Da = Symbol("_vod"), Mu = Symbol("_vsh"), Au = Symbol(""), Ou = /(^|;)\s*display\s*:/;
function Ru(n, t, e) {
  const i = n.style, s = Yt(e);
  let r = !1;
  if (e && !s) {
    if (t)
      if (Yt(t))
        for (const o of t.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          e[a] == null && cs(i, a, "");
        }
      else
        for (const o in t)
          e[o] == null && cs(i, o, "");
    for (const o in e)
      o === "display" && (r = !0), cs(i, o, e[o]);
  } else if (s) {
    if (t !== e) {
      const o = i[Au];
      o && (e += ";" + o), i.cssText = e, r = Ou.test(e);
    }
  } else
    t && n.removeAttribute("style");
  Da in n && (n[Da] = r ? i.display : "", n[Mu] && (i.display = "none"));
}
const La = /\s*!important$/;
function cs(n, t, e) {
  if (at(e))
    e.forEach((i) => cs(n, t, i));
  else if (e == null && (e = ""), t.startsWith("--"))
    n.setProperty(t, e);
  else {
    const i = ku(n, t);
    La.test(e) ? n.setProperty(
      On(i),
      e.replace(La, ""),
      "important"
    ) : n[i] = e;
  }
}
const Ia = ["Webkit", "Moz", "ms"], Lr = {};
function ku(n, t) {
  const e = Lr[t];
  if (e)
    return e;
  let i = Oe(t);
  if (i !== "filter" && i in n)
    return Lr[t] = i;
  i = Es(i);
  for (let s = 0; s < Ia.length; s++) {
    const r = Ia[s] + i;
    if (r in n)
      return Lr[t] = r;
  }
  return t;
}
const Ga = "http://www.w3.org/1999/xlink";
function Ba(n, t, e, i, s, r = Gh(t)) {
  i && t.startsWith("xlink:") ? e == null ? n.removeAttributeNS(Ga, t.slice(6, t.length)) : n.setAttributeNS(Ga, t, e) : e == null || r && !Dl(e) ? n.removeAttribute(t) : n.setAttribute(
    t,
    r ? "" : hn(e) ? String(e) : e
  );
}
function Nu(n, t, e, i) {
  if (t === "innerHTML" || t === "textContent") {
    e != null && (n[t] = t === "innerHTML" ? Lc(e) : e);
    return;
  }
  const s = n.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const o = s === "OPTION" ? n.getAttribute("value") || "" : n.value, a = e == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      n.type === "checkbox" ? "on" : ""
    ) : String(e);
    (o !== a || !("_value" in n)) && (n.value = a), e == null && n.removeAttribute(t), n._value = e;
    return;
  }
  let r = !1;
  if (e === "" || e == null) {
    const o = typeof n[t];
    o === "boolean" ? e = Dl(e) : e == null && o === "string" ? (e = "", r = !0) : o === "number" && (e = 0, r = !0);
  }
  try {
    n[t] = e;
  } catch {
  }
  r && n.removeAttribute(t);
}
function Fu(n, t, e, i) {
  n.addEventListener(t, e, i);
}
function Du(n, t, e, i) {
  n.removeEventListener(t, e, i);
}
const Ua = Symbol("_vei");
function Lu(n, t, e, i, s = null) {
  const r = n[Ua] || (n[Ua] = {}), o = r[t];
  if (i && o)
    o.value = i;
  else {
    const [a, l] = Iu(t);
    if (i) {
      const h = r[t] = Uu(
        i,
        s
      );
      Fu(n, a, h, l);
    } else
      o && (Du(n, a, o, l), r[t] = void 0);
  }
}
const Va = /(?:Once|Passive|Capture)$/;
function Iu(n) {
  let t;
  if (Va.test(n)) {
    t = {};
    let i;
    for (; i = n.match(Va); )
      n = n.slice(0, n.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [n[2] === ":" ? n.slice(3) : On(n.slice(2)), t];
}
let Ir = 0;
const Gu = /* @__PURE__ */ Promise.resolve(), Bu = () => Ir || (Gu.then(() => Ir = 0), Ir = Date.now());
function Uu(n, t) {
  const e = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= e.attached)
      return;
    Ie(
      Vu(i, e.value),
      t,
      5,
      [i]
    );
  };
  return e.value = n, e.attached = Bu(), e;
}
function Vu(n, t) {
  if (at(t)) {
    const e = n.stopImmediatePropagation;
    return n.stopImmediatePropagation = () => {
      e.call(n), n._stopped = !0;
    }, t.map(
      (i) => (s) => !s._stopped && i && i(s)
    );
  } else
    return t;
}
const Ha = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && // lowercase letter
n.charCodeAt(2) > 96 && n.charCodeAt(2) < 123, Hu = (n, t, e, i, s, r) => {
  const o = s === "svg";
  t === "class" ? Tu(n, i, o) : t === "style" ? Ru(n, e, i) : ws(t) ? xo(t) || Lu(n, t, e, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : $u(n, t, i, o)) ? (Nu(n, t, i), !n.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ba(n, t, i, o, r, t !== "value")) : (t === "true-value" ? n._trueValue = i : t === "false-value" && (n._falseValue = i), Ba(n, t, i, o));
};
function $u(n, t, e, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in n && Ha(t) && ht(e));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && n.tagName === "INPUT" || t === "type" && n.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = n.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Ha(t) && Yt(e) ? !1 : !!(t in n || n._isVueCE && (/[A-Z]/.test(t) || !Yt(e)));
}
const ju = /* @__PURE__ */ Qt({ patchProp: Hu }, Eu);
let $a;
function Yu() {
  return $a || ($a = Xd(ju));
}
const Wu = (...n) => {
  const t = Yu().createApp(...n), { mount: e } = t;
  return t.mount = (i) => {
    const s = zu(i);
    if (!s)
      return;
    const r = t._component;
    !ht(r) && !r.render && !r.template && (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const o = e(s, !1, Xu(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
  }, t;
};
function Xu(n) {
  if (n instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && n instanceof MathMLElement)
    return "mathml";
}
function zu(n) {
  return Yt(n) ? document.querySelector(n) : n;
}
const Ds = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [i, s] of t)
    e[i] = s;
  return e;
}, Ku = { class: "schemeInfoPopup" }, qu = {
  key: 0,
  class: "schemeInfoPopup__content"
}, Zu = {
  __name: "SchemeInfoPopup",
  setup(n) {
    const t = bt(!1);
    return (e, i) => (Se(), We("div", Ku, [
      Ee("button", {
        class: "schemeInfoPopup__btn",
        onClick: i[0] || (i[0] = (s) => t.value = !t.value)
      }, i[1] || (i[1] = [
        Ee("svg", {
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          Ee("path", {
            d: "M12 16.75C11.8019 16.7474 11.6126 16.6676 11.4725 16.5275C11.3324 16.3874 11.2526 16.1981 11.25 16V11C11.25 10.8011 11.329 10.6103 11.4697 10.4697C11.6103 10.329 11.8011 10.25 12 10.25C12.1989 10.25 12.3897 10.329 12.5303 10.4697C12.671 10.6103 12.75 10.8011 12.75 11V16C12.7474 16.1981 12.6676 16.3874 12.5275 16.5275C12.3874 16.6676 12.1981 16.7474 12 16.75Z",
            fill: "currentColor"
          }),
          Ee("path", {
            d: "M12 9.25C11.8019 9.24741 11.6126 9.16756 11.4725 9.02747C11.3324 8.88737 11.2526 8.69811 11.25 8.5V8C11.25 7.80109 11.329 7.61032 11.4697 7.46967C11.6103 7.32902 11.8011 7.25 12 7.25C12.1989 7.25 12.3897 7.32902 12.5303 7.46967C12.671 7.61032 12.75 7.80109 12.75 8V8.5C12.7474 8.69811 12.6676 8.88737 12.5275 9.02747C12.3874 9.16756 12.1981 9.24741 12 9.25Z",
            fill: "currentColor"
          }),
          Ee("path", {
            d: "M12 21C10.22 21 8.47991 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89472 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17294C11.99 2.82567 13.7996 3.0039 15.4442 3.68509C17.0887 4.36628 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.387 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21ZM12 4.5C10.5166 4.5 9.0666 4.93987 7.83323 5.76398C6.59986 6.58809 5.63856 7.75943 5.07091 9.12988C4.50325 10.5003 4.35473 12.0083 4.64411 13.4632C4.9335 14.918 5.64781 16.2544 6.6967 17.3033C7.7456 18.3522 9.08197 19.0665 10.5368 19.3559C11.9917 19.6453 13.4997 19.4968 14.8701 18.9291C16.2406 18.3614 17.4119 17.4001 18.236 16.1668C19.0601 14.9334 19.5 13.4834 19.5 12C19.5 10.0109 18.7098 8.10323 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5Z",
            fill: "currentColor"
          })
        ], -1)
      ])),
      t.value ? (Se(), We("div", qu, i[2] || (i[2] = [
        kc('<h5 class="schemeInfoPopup__content_title" data-v-e91a0fad> Сочетания клавиш </h5><div class="schemeInfoPopup__hotkeys" data-v-e91a0fad><p class="schemeInfoPopup__hotkey" data-v-e91a0fad><span class="schemeInfoPopup_key" data-v-e91a0fad>ЛКМ</span>  + тащить  — <span class="schemeInfoPopup_key_desc" data-v-e91a0fad> выделение рамкой </span></p><p class="schemeInfoPopup__hotkey" data-v-e91a0fad><span class="schemeInfoPopup_key" data-v-e91a0fad>Shift</span>  +  <span class="schemeInfoPopup_key" data-v-e91a0fad>ЛКМ</span>  + тащить  — <span class="schemeInfoPopup_key_desc" data-v-e91a0fad> перемещение схемы </span></p><p class="schemeInfoPopup__hotkey" data-v-e91a0fad><span class="schemeInfoPopup_key" data-v-e91a0fad>Ctrl / Command</span>  +  <span class="schemeInfoPopup_key" data-v-e91a0fad>ЛКМ</span>  + тащить  — <span class="schemeInfoPopup_key_desc" data-v-e91a0fad> снятие выделения рамкой </span></p><p class="schemeInfoPopup__hotkey" data-v-e91a0fad><span class="schemeInfoPopup_key" data-v-e91a0fad>СКМ</span>  + тащить  — <span class="schemeInfoPopup_key_desc" data-v-e91a0fad> перемещение схемы </span></p><p class="schemeInfoPopup__hotkey" data-v-e91a0fad><span class="schemeInfoPopup_key" data-v-e91a0fad>Ctrl / Command</span>  +  <span class="schemeInfoPopup_key" data-v-e91a0fad>z</span>  — <span class="schemeInfoPopup_key_desc" data-v-e91a0fad> отмена последнего действия </span></p></div>', 2)
      ]))) : hu("", !0)
    ]));
  }
}, Ju = /* @__PURE__ */ Ds(Zu, [["__scopeId", "data-v-e91a0fad"]]), Qu = {}, t0 = {
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function e0(n, t) {
  return Se(), We("svg", t0, t[0] || (t[0] = [
    Ee("path", {
      d: "M8.39062 8.40063L12.6666 12.6766",
      stroke: "#0A0A0A",
      "stroke-width": "1.33333",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, null, -1),
    Ee("path", {
      d: "M2.45854 2.03467C2.39783 2.00909 2.33088 2.00218 2.26623 2.01484C2.20157 2.02749 2.14216 2.05913 2.09558 2.10571C2.049 2.1523 2.01736 2.21171 2.00471 2.27636C1.99205 2.34101 1.99896 2.40796 2.02454 2.46867L6.35787 13.1347C6.38455 13.1992 6.43078 13.2537 6.49005 13.2906C6.54933 13.3275 6.61869 13.3449 6.68836 13.3404C6.75803 13.3358 6.82453 13.3095 6.87849 13.2652C6.93245 13.2209 6.97117 13.1608 6.98921 13.0933L8.03521 9.03801C8.09088 8.80124 8.21025 8.58421 8.3804 8.41042C8.55056 8.23662 8.76501 8.11268 9.00054 8.05201L13.0832 6.99934C13.151 6.98174 13.2115 6.94324 13.2562 6.88929C13.3008 6.83535 13.3274 6.76871 13.332 6.69883C13.3367 6.62895 13.3192 6.55938 13.2821 6.5C13.245 6.44061 13.1901 6.39443 13.1252 6.36801L2.45854 2.03467Z",
      stroke: "currentColor",
      "stroke-width": "1.33333",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, null, -1)
  ]));
}
const n0 = /* @__PURE__ */ Ds(Qu, [["render", e0]]), i0 = {}, s0 = {
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function r0(n, t) {
  return Se(), We("svg", s0, t[0] || (t[0] = [
    kc('<path d="M14.6665 8.01001L1.33317 8.01001" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.3335 10.01L1.3335 8.01001L3.3335 6.01001" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 12.6766L8 14.6766L6 12.6766" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 1.34338L8 14.6767" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 3.34338L8 1.34338L6 3.34338" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.6665 6.01001L14.6665 8.01001L12.6665 10.01" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>', 6)
  ]));
}
const o0 = /* @__PURE__ */ Ds(i0, [["render", r0]]);
const a0 = { class: "SchemeModesControls" }, l0 = {
  __name: "SchemeModesControls",
  props: {
    isGrabMode: {
      type: Boolean,
      default: !1
    },
    isCursorMode: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["clickGrab", "clickCursor"],
  setup(n, { emit: t }) {
    const e = t;
    return (i, s) => (Se(), We("div", a0, [
      Ee("button", {
        class: ni(["btn", { _active: n.isGrabMode }]),
        onClick: s[0] || (s[0] = (r) => e("clickGrab"))
      }, [
        Ot(o0, { class: "btn__icon" })
      ], 2),
      Ee("button", {
        class: ni(["btn", { _active: n.isCursorMode }]),
        onClick: s[1] || (s[1] = (r) => e("clickCursor"))
      }, [
        Ot(n0, { class: "btn__icon" })
      ], 2)
    ]));
  }
}, c0 = (n) => n && {}.toString.call(n) === "[object Function]";
class h0 {
  constructor(t) {
    this.states = [], this.maxStatesLength = t || 5;
  }
  // сохраняет текущее состояние приложения
  saveState(t) {
    const e = JSON.parse(JSON.stringify(t));
    return this.states.length > this.maxStatesLength && this.states.shift(), this.states.push(e), this.getPrevState();
  }
  // отменяет последнее действие
  undo() {
    var t;
    return ((t = this.states) == null ? void 0 : t.length) > 1 ? (this.states.pop(), this.getPrevState()) : null;
  }
  // возвращает текущее состояние
  getPrevState() {
    return this.states.length ? structuredClone(this.states[this.states.length - 1]) : null;
  }
  clearState() {
    this.states = [];
  }
}
function d0(n, t) {
  n != null && n.value || console.warn("[useUndoRedo] необходимо передать ref() состояния");
  const e = new h0(), i = () => {
    const r = e.undo();
    r && (n.value = r, c0(t) && t());
  }, s = (r) => {
    (r.ctrlKey || r.metaKey) && r.code === "KeyZ" && i();
  };
  return ai(() => {
    e.saveState(n.value), document.addEventListener("keydown", s);
  }), Rs(() => {
    document.removeEventListener("keydown", s);
  }), {
    StateHistoryManager: e,
    undoLastAction: i
  };
}
function ja(n, t) {
  let e = !1, i, s;
  function r() {
    if (e) {
      i = arguments, s = this;
      return;
    }
    n.apply(this, arguments), e = !0, setTimeout(function() {
      e = !1, i && (r.apply(s, i), i = s = null);
    }, t);
  }
  return r;
}
const u0 = {
  __name: "SchemeSeat",
  props: {
    seat: Object,
    hovered: Boolean,
    selected: Boolean,
    unselected: Boolean,
    isSelectionMode: Boolean
  },
  emits: ["click", "mouseenter", "mouseleave", "mousedown", "touchstart"],
  setup(n, { emit: t }) {
    const e = n, i = t, s = je("SEAT_SIZE"), r = bt(!1), o = on(() => {
      let f = e.seat.bg_color || "#ccc", _ = e.seat.border_color || "#000";
      return Array.isArray(f) && (f = f[0]), Array.isArray(_) && (_ = _[0]), (r.value && !e.isSelectionMode || e.selected) && (f = "blue"), e.unselected && (f = "violet"), {
        x: e.seat.x,
        y: e.seat.y,
        width: s,
        height: s,
        fill: f,
        stroke: e.selected ? "lightgreen" : _,
        strokeWidth: 1,
        cornerRadius: 4,
        listening: !0,
        name: "shape",
        id: String(e.seat.id)
      };
    }), a = on(() => ({
      x: e.seat.x - 2,
      y: e.seat.y - 1,
      width: s,
      height: s,
      text: e.seat.seat,
      fontSize: 10,
      fill: "#000",
      align: "right",
      verticalAlign: "bottom",
      listening: !1
    })), l = on(() => ({
      x: e.seat.x + 1,
      y: e.seat.y + 2,
      width: s,
      height: s,
      text: e.seat.row,
      fontSize: 8,
      fill: "#000",
      align: "start",
      verticalAlign: "top",
      listening: !1
    })), h = () => i("click", e.seat), c = () => {
      i("mouseenter", e.seat.id), r.value = !0;
    }, g = () => {
      i("mouseleave"), r.value = !1;
    };
    return (f, _) => {
      const u = Kn("v-rect"), m = Kn("v-text");
      return Se(), We(xe, null, [
        Rc(to(e.selected) + " " + to(r.value) + " ", 1),
        Ot(u, {
          config: o.value,
          onClick: h,
          onMouseenter: c,
          onMouseleave: g,
          onTouchend: h,
          onMousedown: _[0] || (_[0] = (v) => i("mousedown", v)),
          onTouchstart: _[1] || (_[1] = (v) => i("touchstart", v))
        }, null, 8, ["config"]),
        Ot(m, { config: a.value }, null, 8, ["config"]),
        Ot(m, { config: l.value }, null, 8, ["config"])
      ], 64);
    };
  }
};
var Ya = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function f0(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Xo = { exports: {} }, Ls = {}, Ic = {}, dt = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n._registerNode = n.Konva = n.glob = void 0;
  const t = Math.PI / 180;
  function e() {
    return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
  }
  n.glob = typeof Ya < "u" ? Ya : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, n.Konva = {
    _global: n.glob,
    version: "9.3.22",
    isBrowser: e(),
    isUnminified: /param/.test((function(s) {
    }).toString()),
    dblClickWindow: 400,
    getAngle(s) {
      return n.Konva.angleDeg ? s * t : s;
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
      return n.Konva.DD.isDragging;
    },
    isTransforming() {
      var s;
      return (s = n.Konva.Transformer) === null || s === void 0 ? void 0 : s.isTransforming();
    },
    isDragReady() {
      return !!n.Konva.DD.node;
    },
    releaseCanvasOnDestroy: !0,
    document: n.glob.document,
    _injectGlobal(s) {
      n.glob.Konva = s;
    }
  };
  const i = (s) => {
    n.Konva[s.prototype.getClassName()] = s;
  };
  n._registerNode = i, n.Konva._injectGlobal(n.Konva);
})(dt);
var Bt = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.Util = n.Transform = void 0;
  const t = dt;
  class e {
    constructor(p = [1, 0, 0, 1, 0, 0]) {
      this.dirty = !1, this.m = p && p.slice() || [1, 0, 0, 1, 0, 0];
    }
    reset() {
      this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0;
    }
    copy() {
      return new e(this.m);
    }
    copyInto(p) {
      p.m[0] = this.m[0], p.m[1] = this.m[1], p.m[2] = this.m[2], p.m[3] = this.m[3], p.m[4] = this.m[4], p.m[5] = this.m[5];
    }
    point(p) {
      const b = this.m;
      return {
        x: b[0] * p.x + b[2] * p.y + b[4],
        y: b[1] * p.x + b[3] * p.y + b[5]
      };
    }
    translate(p, b) {
      return this.m[4] += this.m[0] * p + this.m[2] * b, this.m[5] += this.m[1] * p + this.m[3] * b, this;
    }
    scale(p, b) {
      return this.m[0] *= p, this.m[1] *= p, this.m[2] *= b, this.m[3] *= b, this;
    }
    rotate(p) {
      const b = Math.cos(p), E = Math.sin(p), R = this.m[0] * b + this.m[2] * E, w = this.m[1] * b + this.m[3] * E, k = this.m[0] * -E + this.m[2] * b, T = this.m[1] * -E + this.m[3] * b;
      return this.m[0] = R, this.m[1] = w, this.m[2] = k, this.m[3] = T, this;
    }
    getTranslation() {
      return {
        x: this.m[4],
        y: this.m[5]
      };
    }
    skew(p, b) {
      const E = this.m[0] + this.m[2] * b, R = this.m[1] + this.m[3] * b, w = this.m[2] + this.m[0] * p, k = this.m[3] + this.m[1] * p;
      return this.m[0] = E, this.m[1] = R, this.m[2] = w, this.m[3] = k, this;
    }
    multiply(p) {
      const b = this.m[0] * p.m[0] + this.m[2] * p.m[1], E = this.m[1] * p.m[0] + this.m[3] * p.m[1], R = this.m[0] * p.m[2] + this.m[2] * p.m[3], w = this.m[1] * p.m[2] + this.m[3] * p.m[3], k = this.m[0] * p.m[4] + this.m[2] * p.m[5] + this.m[4], T = this.m[1] * p.m[4] + this.m[3] * p.m[5] + this.m[5];
      return this.m[0] = b, this.m[1] = E, this.m[2] = R, this.m[3] = w, this.m[4] = k, this.m[5] = T, this;
    }
    invert() {
      const p = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), b = this.m[3] * p, E = -this.m[1] * p, R = -this.m[2] * p, w = this.m[0] * p, k = p * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), T = p * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
      return this.m[0] = b, this.m[1] = E, this.m[2] = R, this.m[3] = w, this.m[4] = k, this.m[5] = T, this;
    }
    getMatrix() {
      return this.m;
    }
    decompose() {
      const p = this.m[0], b = this.m[1], E = this.m[2], R = this.m[3], w = this.m[4], k = this.m[5], T = p * R - b * E, O = {
        x: w,
        y: k,
        rotation: 0,
        scaleX: 0,
        scaleY: 0,
        skewX: 0,
        skewY: 0
      };
      if (p != 0 || b != 0) {
        const G = Math.sqrt(p * p + b * b);
        O.rotation = b > 0 ? Math.acos(p / G) : -Math.acos(p / G), O.scaleX = G, O.scaleY = T / G, O.skewX = (p * E + b * R) / T, O.skewY = 0;
      } else if (E != 0 || R != 0) {
        const G = Math.sqrt(E * E + R * R);
        O.rotation = Math.PI / 2 - (R > 0 ? Math.acos(-E / G) : -Math.acos(E / G)), O.scaleX = T / G, O.scaleY = G, O.skewX = 0, O.skewY = (p * E + b * R) / T;
      }
      return O.rotation = n.Util._getRotation(O.rotation), O;
    }
  }
  n.Transform = e;
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
  }, v = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;
  let S = [];
  const x = typeof requestAnimationFrame < "u" && requestAnimationFrame || function(d) {
    setTimeout(d, 60);
  };
  n.Util = {
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
      S.push(d), S.length === 1 && x(function() {
        const p = S;
        S = [], p.forEach(function(b) {
          b();
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
      const b = n.Util.createImageElement();
      b.onload = function() {
        p(b);
      }, b.src = d;
    },
    _rgbToHex(d, p, b) {
      return ((1 << 24) + (d << 16) + (p << 8) + b).toString(16).slice(1);
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
      }) : d[0] === h ? this._hexToRgb(d.substring(1)) : d.substr(0, 4) === u ? (p = v.exec(d.replace(/ /g, "")), {
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
      return d = d || "black", n.Util._namedColorToRBA(d) || n.Util._hex3ColorToRGBA(d) || n.Util._hex4ColorToRGBA(d) || n.Util._hex6ColorToRGBA(d) || n.Util._hex8ColorToRGBA(d) || n.Util._rgbColorToRGBA(d) || n.Util._rgbaColorToRGBA(d) || n.Util._hslColorToRGBA(d);
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
        const p = d.split(/ *, */).map((b, E) => b.slice(-1) === "%" ? E === 3 ? parseInt(b) / 100 : parseInt(b) / 100 * 255 : Number(b));
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
        const [p, ...b] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(d), E = Number(b[0]) / 360, R = Number(b[1]) / 100, w = Number(b[2]) / 100;
        let k, T, O;
        if (R === 0)
          return O = w * 255, {
            r: Math.round(O),
            g: Math.round(O),
            b: Math.round(O),
            a: 1
          };
        w < 0.5 ? k = w * (1 + R) : k = w + R - w * R;
        const G = 2 * w - k, $ = [0, 0, 0];
        for (let Z = 0; Z < 3; Z++)
          T = E + 1 / 3 * -(Z - 1), T < 0 && T++, T > 1 && T--, 6 * T < 1 ? O = G + (k - G) * 6 * T : 2 * T < 1 ? O = k : 3 * T < 2 ? O = G + (k - G) * (2 / 3 - T) * 6 : O = G, $[Z] = O * 255;
        return {
          r: Math.round($[0]),
          g: Math.round($[1]),
          b: Math.round($[2]),
          a: 1
        };
      }
    },
    haveIntersection(d, p) {
      return !(p.x > d.x + d.width || p.x + p.width < d.x || p.y > d.y + d.height || p.y + p.height < d.y);
    },
    cloneObject(d) {
      const p = {};
      for (const b in d)
        this._isPlainObject(d[b]) ? p[b] = this.cloneObject(d[b]) : this._isArray(d[b]) ? p[b] = this.cloneArray(d[b]) : p[b] = d[b];
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
      return n.Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead."), n.Util.degToRad(d);
    },
    _radToDeg(d) {
      return n.Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."), n.Util.radToDeg(d);
    },
    _getRotation(d) {
      return t.Konva.angleDeg ? n.Util.radToDeg(d) : d;
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
      for (const b in d)
        p(b, d[b]);
    },
    _inRange(d, p, b) {
      return p <= d && d < b;
    },
    _getProjectionToSegment(d, p, b, E, R, w) {
      let k, T, O;
      const G = (d - b) * (d - b) + (p - E) * (p - E);
      if (G == 0)
        k = d, T = p, O = (R - b) * (R - b) + (w - E) * (w - E);
      else {
        const $ = ((R - d) * (b - d) + (w - p) * (E - p)) / G;
        $ < 0 ? (k = d, T = p, O = (d - R) * (d - R) + (p - w) * (p - w)) : $ > 1 ? (k = b, T = E, O = (b - R) * (b - R) + (E - w) * (E - w)) : (k = d + $ * (b - d), T = p + $ * (E - p), O = (k - R) * (k - R) + (T - w) * (T - w));
      }
      return [k, T, O];
    },
    _getProjectionToLine(d, p, b) {
      const E = n.Util.cloneObject(d);
      let R = Number.MAX_VALUE;
      return p.forEach(function(w, k) {
        if (!b && k === p.length - 1)
          return;
        const T = p[(k + 1) % p.length], O = n.Util._getProjectionToSegment(w.x, w.y, T.x, T.y, d.x, d.y), G = O[0], $ = O[1], Z = O[2];
        Z < R && (E.x = G, E.y = $, R = Z);
      }), E;
    },
    _prepareArrayForTween(d, p, b) {
      const E = [], R = [];
      if (d.length > p.length) {
        const k = p;
        p = d, d = k;
      }
      for (let k = 0; k < d.length; k += 2)
        E.push({
          x: d[k],
          y: d[k + 1]
        });
      for (let k = 0; k < p.length; k += 2)
        R.push({
          x: p[k],
          y: p[k + 1]
        });
      const w = [];
      return R.forEach(function(k) {
        const T = n.Util._getProjectionToLine(k, E, b);
        w.push(T.x), w.push(T.y);
      }), w;
    },
    _prepareToStringify(d) {
      let p;
      d.visitedByCircularReferenceRemoval = !0;
      for (const b in d)
        if (d.hasOwnProperty(b) && d[b] && typeof d[b] == "object") {
          if (p = Object.getOwnPropertyDescriptor(d, b), d[b].visitedByCircularReferenceRemoval || n.Util._isElement(d[b]))
            if (p.configurable)
              delete d[b];
            else
              return null;
          else if (n.Util._prepareToStringify(d[b]) === null)
            if (p.configurable)
              delete d[b];
            else
              return null;
        }
      return delete d.visitedByCircularReferenceRemoval, d;
    },
    _assign(d, p) {
      for (const b in p)
        d[b] = p[b];
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
    drawRoundedRectPath(d, p, b, E) {
      let R = 0, w = 0, k = 0, T = 0;
      typeof E == "number" ? R = w = k = T = Math.min(E, p / 2, b / 2) : (R = Math.min(E[0] || 0, p / 2, b / 2), w = Math.min(E[1] || 0, p / 2, b / 2), T = Math.min(E[2] || 0, p / 2, b / 2), k = Math.min(E[3] || 0, p / 2, b / 2)), d.moveTo(R, 0), d.lineTo(p - w, 0), d.arc(p - w, w, w, Math.PI * 3 / 2, 0, !1), d.lineTo(p, b - T), d.arc(p - T, b - T, T, 0, Math.PI / 2, !1), d.lineTo(k, b), d.arc(k, b - k, k, Math.PI / 2, Math.PI, !1), d.lineTo(0, R), d.arc(R, R, R, Math.PI, Math.PI * 3 / 2, !1);
    }
  };
})(Bt);
var Gt = {}, Ae = {}, Ye = {};
Object.defineProperty(Ye, "__esModule", { value: !0 });
Ye.HitContext = Ye.SceneContext = Ye.Context = void 0;
const Gc = Bt, g0 = dt;
function p0(n) {
  const t = [], e = n.length, i = Gc.Util;
  for (let s = 0; s < e; s++) {
    let r = n[s];
    i._isNumber(r) ? r = Math.round(r * 1e3) / 1e3 : i._isString(r) || (r = r + ""), t.push(r);
  }
  return t;
}
const Wa = ",", _0 = "(", m0 = ")", v0 = "([", y0 = "])", b0 = ";", S0 = "()", w0 = "=", Xa = [
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
], C0 = [
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
], x0 = 100;
class Is {
  constructor(t) {
    this.canvas = t, g0.Konva.enableTrace && (this.traceArr = [], this._enableTrace());
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
  getTrace(t, e) {
    let i = this.traceArr, s = i.length, r = "", o, a, l, h;
    for (o = 0; o < s; o++)
      a = i[o], l = a.method, l ? (h = a.args, r += l, t ? r += S0 : Gc.Util._isArray(h[0]) ? r += v0 + h.join(Wa) + y0 : (e && (h = h.map((c) => typeof c == "number" ? Math.floor(c) : c)), r += _0 + h.join(Wa) + m0)) : (r += a.property, t || (r += w0 + a.val)), r += b0;
    return r;
  }
  clearTrace() {
    this.traceArr = [];
  }
  _trace(t) {
    let e = this.traceArr, i;
    e.push(t), i = e.length, i >= x0 && e.shift();
  }
  reset() {
    const t = this.getCanvas().getPixelRatio();
    this.setTransform(1 * t, 0, 0, 1 * t, 0, 0);
  }
  getCanvas() {
    return this.canvas;
  }
  clear(t) {
    const e = this.getCanvas();
    t ? this.clearRect(t.x || 0, t.y || 0, t.width || 0, t.height || 0) : this.clearRect(0, 0, e.getWidth() / e.pixelRatio, e.getHeight() / e.pixelRatio);
  }
  _applyLineCap(t) {
    const e = t.attrs.lineCap;
    e && this.setAttr("lineCap", e);
  }
  _applyOpacity(t) {
    const e = t.getAbsoluteOpacity();
    e !== 1 && this.setAttr("globalAlpha", e);
  }
  _applyLineJoin(t) {
    const e = t.attrs.lineJoin;
    e && this.setAttr("lineJoin", e);
  }
  setAttr(t, e) {
    this._context[t] = e;
  }
  arc(t, e, i, s, r, o) {
    this._context.arc(t, e, i, s, r, o);
  }
  arcTo(t, e, i, s, r) {
    this._context.arcTo(t, e, i, s, r);
  }
  beginPath() {
    this._context.beginPath();
  }
  bezierCurveTo(t, e, i, s, r, o) {
    this._context.bezierCurveTo(t, e, i, s, r, o);
  }
  clearRect(t, e, i, s) {
    this._context.clearRect(t, e, i, s);
  }
  clip(...t) {
    this._context.clip.apply(this._context, t);
  }
  closePath() {
    this._context.closePath();
  }
  createImageData(t, e) {
    const i = arguments;
    if (i.length === 2)
      return this._context.createImageData(t, e);
    if (i.length === 1)
      return this._context.createImageData(t);
  }
  createLinearGradient(t, e, i, s) {
    return this._context.createLinearGradient(t, e, i, s);
  }
  createPattern(t, e) {
    return this._context.createPattern(t, e);
  }
  createRadialGradient(t, e, i, s, r, o) {
    return this._context.createRadialGradient(t, e, i, s, r, o);
  }
  drawImage(t, e, i, s, r, o, a, l, h) {
    const c = arguments, g = this._context;
    c.length === 3 ? g.drawImage(t, e, i) : c.length === 5 ? g.drawImage(t, e, i, s, r) : c.length === 9 && g.drawImage(t, e, i, s, r, o, a, l, h);
  }
  ellipse(t, e, i, s, r, o, a, l) {
    this._context.ellipse(t, e, i, s, r, o, a, l);
  }
  isPointInPath(t, e, i, s) {
    return i ? this._context.isPointInPath(i, t, e, s) : this._context.isPointInPath(t, e, s);
  }
  fill(...t) {
    this._context.fill.apply(this._context, t);
  }
  fillRect(t, e, i, s) {
    this._context.fillRect(t, e, i, s);
  }
  strokeRect(t, e, i, s) {
    this._context.strokeRect(t, e, i, s);
  }
  fillText(t, e, i, s) {
    s ? this._context.fillText(t, e, i, s) : this._context.fillText(t, e, i);
  }
  measureText(t) {
    return this._context.measureText(t);
  }
  getImageData(t, e, i, s) {
    return this._context.getImageData(t, e, i, s);
  }
  lineTo(t, e) {
    this._context.lineTo(t, e);
  }
  moveTo(t, e) {
    this._context.moveTo(t, e);
  }
  rect(t, e, i, s) {
    this._context.rect(t, e, i, s);
  }
  roundRect(t, e, i, s, r) {
    this._context.roundRect(t, e, i, s, r);
  }
  putImageData(t, e, i) {
    this._context.putImageData(t, e, i);
  }
  quadraticCurveTo(t, e, i, s) {
    this._context.quadraticCurveTo(t, e, i, s);
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
  scale(t, e) {
    this._context.scale(t, e);
  }
  setLineDash(t) {
    this._context.setLineDash ? this._context.setLineDash(t) : "mozDash" in this._context ? this._context.mozDash = t : "webkitLineDash" in this._context && (this._context.webkitLineDash = t);
  }
  getLineDash() {
    return this._context.getLineDash();
  }
  setTransform(t, e, i, s, r, o) {
    this._context.setTransform(t, e, i, s, r, o);
  }
  stroke(t) {
    t ? this._context.stroke(t) : this._context.stroke();
  }
  strokeText(t, e, i, s) {
    this._context.strokeText(t, e, i, s);
  }
  transform(t, e, i, s, r, o) {
    this._context.transform(t, e, i, s, r, o);
  }
  translate(t, e) {
    this._context.translate(t, e);
  }
  _enableTrace() {
    let t = this, e = Xa.length, i = this.setAttr, s, r;
    const o = function(a) {
      let l = t[a], h;
      t[a] = function() {
        return r = p0(Array.prototype.slice.call(arguments, 0)), h = l.apply(t, arguments), t._trace({
          method: a,
          args: r
        }), h;
      };
    };
    for (s = 0; s < e; s++)
      o(Xa[s]);
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
    const e = t.attrs.globalCompositeOperation;
    !e || e === "source-over" || this.setAttr("globalCompositeOperation", e);
  }
}
Ye.Context = Is;
C0.forEach(function(n) {
  Object.defineProperty(Is.prototype, n, {
    get() {
      return this._context[n];
    },
    set(t) {
      this._context[n] = t;
    }
  });
});
class E0 extends Is {
  constructor(t, { willReadFrequently: e = !1 } = {}) {
    super(t), this._context = t._canvas.getContext("2d", {
      willReadFrequently: e
    });
  }
  _fillColor(t) {
    const e = t.fill();
    this.setAttr("fillStyle", e), t._fillFunc(this);
  }
  _fillPattern(t) {
    this.setAttr("fillStyle", t._getFillPattern()), t._fillFunc(this);
  }
  _fillLinearGradient(t) {
    const e = t._getLinearGradient();
    e && (this.setAttr("fillStyle", e), t._fillFunc(this));
  }
  _fillRadialGradient(t) {
    const e = t._getRadialGradient();
    e && (this.setAttr("fillStyle", e), t._fillFunc(this));
  }
  _fill(t) {
    const e = t.fill(), i = t.getFillPriority();
    if (e && i === "color") {
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
    e ? this._fillColor(t) : s ? this._fillPattern(t) : r ? this._fillLinearGradient(t) : o && this._fillRadialGradient(t);
  }
  _strokeLinearGradient(t) {
    const e = t.getStrokeLinearGradientStartPoint(), i = t.getStrokeLinearGradientEndPoint(), s = t.getStrokeLinearGradientColorStops(), r = this.createLinearGradient(e.x, e.y, i.x, i.y);
    if (s) {
      for (let o = 0; o < s.length; o += 2)
        r.addColorStop(s[o], s[o + 1]);
      this.setAttr("strokeStyle", r);
    }
  }
  _stroke(t) {
    const e = t.dash(), i = t.getStrokeScaleEnabled();
    if (t.hasStroke()) {
      if (!i) {
        this.save();
        const r = this.getCanvas().getPixelRatio();
        this.setTransform(r, 0, 0, r, 0, 0);
      }
      this._applyLineCap(t), e && t.dashEnabled() && (this.setLineDash(e), this.setAttr("lineDashOffset", t.dashOffset())), this.setAttr("lineWidth", t.strokeWidth()), t.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)"), t.getStrokeLinearGradientColorStops() ? this._strokeLinearGradient(t) : this.setAttr("strokeStyle", t.stroke()), t._strokeFunc(this), i || this.restore();
    }
  }
  _applyShadow(t) {
    var e, i, s;
    const r = (e = t.getShadowRGBA()) !== null && e !== void 0 ? e : "black", o = (i = t.getShadowBlur()) !== null && i !== void 0 ? i : 5, a = (s = t.getShadowOffset()) !== null && s !== void 0 ? s : {
      x: 0,
      y: 0
    }, l = t.getAbsoluteScale(), h = this.canvas.getPixelRatio(), c = l.x * h, g = l.y * h;
    this.setAttr("shadowColor", r), this.setAttr("shadowBlur", o * Math.min(Math.abs(c), Math.abs(g))), this.setAttr("shadowOffsetX", a.x * c), this.setAttr("shadowOffsetY", a.y * g);
  }
}
Ye.SceneContext = E0;
class P0 extends Is {
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
      const e = t.getStrokeScaleEnabled();
      if (!e) {
        this.save();
        const r = this.getCanvas().getPixelRatio();
        this.setTransform(r, 0, 0, r, 0, 0);
      }
      this._applyLineCap(t);
      const i = t.hitStrokeWidth(), s = i === "auto" ? t.strokeWidth() : i;
      this.setAttr("lineWidth", s), this.setAttr("strokeStyle", t.colorKey), t._strokeFuncHit(this), e || this.restore();
    }
  }
}
Ye.HitContext = P0;
Object.defineProperty(Ae, "__esModule", { value: !0 });
Ae.HitCanvas = Ae.SceneCanvas = Ae.Canvas = void 0;
const _s = Bt, Bc = Ye, Uc = dt;
let ts;
function T0() {
  if (ts)
    return ts;
  const n = _s.Util.createCanvasElement(), t = n.getContext("2d");
  return ts = function() {
    const e = Uc.Konva._global.devicePixelRatio || 1, i = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
    return e / i;
  }(), _s.Util.releaseCanvas(n), ts;
}
class zo {
  constructor(t) {
    this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
    const i = (t || {}).pixelRatio || Uc.Konva.pixelRatio || T0();
    this.pixelRatio = i, this._canvas = _s.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
  }
  getContext() {
    return this.context;
  }
  getPixelRatio() {
    return this.pixelRatio;
  }
  setPixelRatio(t) {
    const e = this.pixelRatio;
    this.pixelRatio = t, this.setSize(this.getWidth() / e, this.getHeight() / e);
  }
  setWidth(t) {
    this.width = this._canvas.width = t * this.pixelRatio, this._canvas.style.width = t + "px";
    const e = this.pixelRatio;
    this.getContext()._context.scale(e, e);
  }
  setHeight(t) {
    this.height = this._canvas.height = t * this.pixelRatio, this._canvas.style.height = t + "px";
    const e = this.pixelRatio;
    this.getContext()._context.scale(e, e);
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setSize(t, e) {
    this.setWidth(t || 0), this.setHeight(e || 0);
  }
  toDataURL(t, e) {
    try {
      return this._canvas.toDataURL(t, e);
    } catch {
      try {
        return this._canvas.toDataURL();
      } catch (s) {
        return _s.Util.error("Unable to get data URL. " + s.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
      }
    }
  }
}
Ae.Canvas = zo;
class M0 extends zo {
  constructor(t = { width: 0, height: 0, willReadFrequently: !1 }) {
    super(t), this.context = new Bc.SceneContext(this, {
      willReadFrequently: t.willReadFrequently
    }), this.setSize(t.width, t.height);
  }
}
Ae.SceneCanvas = M0;
class A0 extends zo {
  constructor(t = { width: 0, height: 0 }) {
    super(t), this.hitCanvas = !0, this.context = new Bc.HitContext(this), this.setSize(t.width, t.height);
  }
}
Ae.HitCanvas = A0;
var Gs = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.DD = void 0;
  const t = dt, e = Bt;
  n.DD = {
    get isDragging() {
      let i = !1;
      return n.DD._dragElements.forEach((s) => {
        s.dragStatus === "dragging" && (i = !0);
      }), i;
    },
    justDragged: !1,
    get node() {
      let i;
      return n.DD._dragElements.forEach((s) => {
        i = s.node;
      }), i;
    },
    _dragElements: /* @__PURE__ */ new Map(),
    _drag(i) {
      const s = [];
      n.DD._dragElements.forEach((r, o) => {
        const { node: a } = r, l = a.getStage();
        l.setPointersPositions(i), r.pointerId === void 0 && (r.pointerId = e.Util._getFirstPointerId(i));
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
      n.DD._dragElements.forEach((r) => {
        const { node: o } = r, a = o.getStage();
        if (i && a.setPointersPositions(i), !a._changedPointerPositions.find((c) => c.id === r.pointerId))
          return;
        (r.dragStatus === "dragging" || r.dragStatus === "stopped") && (n.DD.justDragged = !0, t.Konva._mouseListenClick = !1, t.Konva._touchListenClick = !1, t.Konva._pointerListenClick = !1, r.dragStatus = "stopped");
        const h = r.node.getLayer() || r.node instanceof t.Konva.Stage && r.node;
        h && s.indexOf(h) === -1 && s.push(h);
      }), s.forEach((r) => {
        r.draw();
      });
    },
    _endDragAfter(i) {
      n.DD._dragElements.forEach((s, r) => {
        s.dragStatus === "stopped" && s.node.fire("dragend", {
          type: "dragend",
          target: s.node,
          evt: i
        }, !0), s.dragStatus !== "dragging" && n.DD._dragElements.delete(r);
      });
    }
  }, t.Konva.isBrowser && (window.addEventListener("mouseup", n.DD._endDragBefore, !0), window.addEventListener("touchend", n.DD._endDragBefore, !0), window.addEventListener("touchcancel", n.DD._endDragBefore, !0), window.addEventListener("mousemove", n.DD._drag), window.addEventListener("touchmove", n.DD._drag), window.addEventListener("mouseup", n.DD._endDragAfter, !1), window.addEventListener("touchend", n.DD._endDragAfter, !1), window.addEventListener("touchcancel", n.DD._endDragAfter, !1));
})(Gs);
var gt = {}, et = {};
Object.defineProperty(et, "__esModule", { value: !0 });
et.RGBComponent = O0;
et.alphaComponent = R0;
et.getNumberValidator = k0;
et.getNumberOrArrayOfNumbersValidator = N0;
et.getNumberOrAutoValidator = F0;
et.getStringValidator = D0;
et.getStringOrGradientValidator = L0;
et.getFunctionValidator = I0;
et.getNumberArrayValidator = G0;
et.getBooleanValidator = B0;
et.getComponentValidator = U0;
const ze = dt, Ht = Bt;
function Ke(n) {
  return Ht.Util._isString(n) ? '"' + n + '"' : Object.prototype.toString.call(n) === "[object Number]" || Ht.Util._isBoolean(n) ? n : Object.prototype.toString.call(n);
}
function O0(n) {
  return n > 255 ? 255 : n < 0 ? 0 : Math.round(n);
}
function R0(n) {
  return n > 1 ? 1 : n < 1e-4 ? 1e-4 : n;
}
function k0() {
  if (ze.Konva.isUnminified)
    return function(n, t) {
      return Ht.Util._isNumber(n) || Ht.Util.warn(Ke(n) + ' is a not valid value for "' + t + '" attribute. The value should be a number.'), n;
    };
}
function N0(n) {
  if (ze.Konva.isUnminified)
    return function(t, e) {
      let i = Ht.Util._isNumber(t), s = Ht.Util._isArray(t) && t.length == n;
      return !i && !s && Ht.Util.warn(Ke(t) + ' is a not valid value for "' + e + '" attribute. The value should be a number or Array<number>(' + n + ")"), t;
    };
}
function F0() {
  if (ze.Konva.isUnminified)
    return function(n, t) {
      return Ht.Util._isNumber(n) || n === "auto" || Ht.Util.warn(Ke(n) + ' is a not valid value for "' + t + '" attribute. The value should be a number or "auto".'), n;
    };
}
function D0() {
  if (ze.Konva.isUnminified)
    return function(n, t) {
      return Ht.Util._isString(n) || Ht.Util.warn(Ke(n) + ' is a not valid value for "' + t + '" attribute. The value should be a string.'), n;
    };
}
function L0() {
  if (ze.Konva.isUnminified)
    return function(n, t) {
      const e = Ht.Util._isString(n), i = Object.prototype.toString.call(n) === "[object CanvasGradient]" || n && n.addColorStop;
      return e || i || Ht.Util.warn(Ke(n) + ' is a not valid value for "' + t + '" attribute. The value should be a string or a native gradient.'), n;
    };
}
function I0() {
  if (ze.Konva.isUnminified)
    return function(n, t) {
      return Ht.Util._isFunction(n) || Ht.Util.warn(Ke(n) + ' is a not valid value for "' + t + '" attribute. The value should be a function.'), n;
    };
}
function G0() {
  if (ze.Konva.isUnminified)
    return function(n, t) {
      const e = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
      return e && n instanceof e || (Ht.Util._isArray(n) ? n.forEach(function(i) {
        Ht.Util._isNumber(i) || Ht.Util.warn('"' + t + '" attribute has non numeric element ' + i + ". Make sure that all elements are numbers.");
      }) : Ht.Util.warn(Ke(n) + ' is a not valid value for "' + t + '" attribute. The value should be a array of numbers.')), n;
    };
}
function B0() {
  if (ze.Konva.isUnminified)
    return function(n, t) {
      return n === !0 || n === !1 || Ht.Util.warn(Ke(n) + ' is a not valid value for "' + t + '" attribute. The value should be a boolean.'), n;
    };
}
function U0(n) {
  if (ze.Konva.isUnminified)
    return function(t, e) {
      return t == null || Ht.Util.isObject(t) || Ht.Util.warn(Ke(t) + ' is a not valid value for "' + e + '" attribute. The value should be an object with properties ' + n), t;
    };
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.Factory = void 0;
  const t = Bt, e = et, i = "get", s = "set";
  n.Factory = {
    addGetterSetter(r, o, a, l, h) {
      n.Factory.addGetter(r, o, a), n.Factory.addSetter(r, o, l, h), n.Factory.addOverloadedGetterSetter(r, o);
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
      r.prototype[h] || n.Factory.overWriteSetter(r, o, a, l);
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
        for (let v = 0; v < c; v++) {
          const S = a[v];
          m[S] = this.getAttr(o + g(S));
        }
        return m;
      };
      const u = (0, e.getComponentValidator)(a);
      r.prototype[_] = function(m) {
        const v = this.attrs[o];
        l && (m = l.call(this, m, o)), u && u.call(this, m, o);
        for (const S in m)
          m.hasOwnProperty(S) && this._setAttr(o + g(S), m[S]);
        return m || a.forEach((S) => {
          this._setAttr(o + g(S), void 0);
        }), this._fireChangeEvent(o, v, m), h && h.call(this), this;
      }, n.Factory.addOverloadedGetterSetter(r, o);
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
      }, n.Factory.addSetter(r, o, l, function() {
        t.Util.error(c);
      }), n.Factory.addOverloadedGetterSetter(r, o);
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
})(gt);
Object.defineProperty(Gt, "__esModule", { value: !0 });
Gt.Node = void 0;
const Hn = Ae, ve = Gs, Ui = gt, Qe = dt, mt = Bt, jt = et, hs = "absoluteOpacity", es = "allEventListeners", Ve = "absoluteTransform", za = "absoluteScale", Cn = "canvas", V0 = "Change", H0 = "children", $0 = "konva", go = "listening", j0 = "mouseenter", Y0 = "mouseleave", W0 = "pointerenter", X0 = "pointerleave", z0 = "touchenter", K0 = "touchleave", Ka = "set", qa = "Shape", ds = " ", Za = "stage", tn = "transform", q0 = "Stage", po = "visible", Z0 = [
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
].join(ds);
let J0 = 1;
class st {
  constructor(t) {
    this._id = J0++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(t), this._shouldFireChangeEvents = !0;
  }
  hasChildren() {
    return !1;
  }
  _clearCache(t) {
    (t === tn || t === Ve) && this._cache.get(t) ? this._cache.get(t).dirty = !0 : t ? this._cache.delete(t) : this._cache.clear();
  }
  _getCache(t, e) {
    let i = this._cache.get(t);
    return (i === void 0 || (t === tn || t === Ve) && i.dirty === !0) && (i = e.call(this), this._cache.set(t, i)), i;
  }
  _calculate(t, e, i) {
    if (!this._attachedDepsListeners.get(t)) {
      const s = e.map((r) => r + "Change.konva").join(ds);
      this.on(s, () => {
        this._clearCache(t);
      }), this._attachedDepsListeners.set(t, !0);
    }
    return this._getCache(t, i);
  }
  _getCanvasCache() {
    return this._cache.get(Cn);
  }
  _clearSelfAndDescendantCache(t) {
    this._clearCache(t), t === Ve && this.fire("absoluteTransformChange");
  }
  clearCache() {
    if (this._cache.has(Cn)) {
      const { scene: t, filter: e, hit: i, buffer: s } = this._cache.get(Cn);
      mt.Util.releaseCanvas(t, e, i, s), this._cache.delete(Cn);
    }
    return this._clearSelfAndDescendantCache(), this._requestDraw(), this;
  }
  cache(t) {
    const e = t || {};
    let i = {};
    (e.x === void 0 || e.y === void 0 || e.width === void 0 || e.height === void 0) && (i = this.getClientRect({
      skipTransform: !0,
      relativeTo: this.getParent() || void 0
    }));
    let s = Math.ceil(e.width || i.width), r = Math.ceil(e.height || i.height), o = e.pixelRatio, a = e.x === void 0 ? Math.floor(i.x) : e.x, l = e.y === void 0 ? Math.floor(i.y) : e.y, h = e.offset || 0, c = e.drawBorder || !1, g = e.hitCanvasPixelRatio || 1;
    if (!s || !r) {
      mt.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
      return;
    }
    const f = Math.abs(Math.round(i.x) - a) > 0.5 ? 1 : 0, _ = Math.abs(Math.round(i.y) - l) > 0.5 ? 1 : 0;
    s += h * 2 + f, r += h * 2 + _, a -= h, l -= h;
    const u = new Hn.SceneCanvas({
      pixelRatio: o,
      width: s,
      height: r
    }), m = new Hn.SceneCanvas({
      pixelRatio: o,
      width: 0,
      height: 0,
      willReadFrequently: !0
    }), v = new Hn.HitCanvas({
      pixelRatio: g,
      width: s,
      height: r
    }), S = u.getContext(), x = v.getContext(), d = new Hn.SceneCanvas({
      width: u.width / u.pixelRatio + Math.abs(a),
      height: u.height / u.pixelRatio + Math.abs(l),
      pixelRatio: u.pixelRatio
    }), p = d.getContext();
    return v.isCache = !0, u.isCache = !0, this._cache.delete(Cn), this._filterUpToDate = !1, e.imageSmoothingEnabled === !1 && (u.getContext()._context.imageSmoothingEnabled = !1, m.getContext()._context.imageSmoothingEnabled = !1), S.save(), x.save(), p.save(), S.translate(-a, -l), x.translate(-a, -l), p.translate(-a, -l), d.x = a, d.y = l, this._isUnderCache = !0, this._clearSelfAndDescendantCache(hs), this._clearSelfAndDescendantCache(za), this.drawScene(u, this, d), this.drawHit(v, this), this._isUnderCache = !1, S.restore(), x.restore(), c && (S.save(), S.beginPath(), S.rect(0, 0, s, r), S.closePath(), S.setAttr("strokeStyle", "red"), S.setAttr("lineWidth", 5), S.stroke(), S.restore()), this._cache.set(Cn, {
      scene: u,
      filter: m,
      hit: v,
      buffer: d,
      x: a,
      y: l
    }), this._requestDraw(), this;
  }
  isCached() {
    return this._cache.has(Cn);
  }
  getClientRect(t) {
    throw new Error('abstract "getClientRect" method call');
  }
  _transformedRect(t, e) {
    const i = [
      { x: t.x, y: t.y },
      { x: t.x + t.width, y: t.y },
      { x: t.x + t.width, y: t.y + t.height },
      { x: t.x, y: t.y + t.height }
    ];
    let s = 1 / 0, r = 1 / 0, o = -1 / 0, a = -1 / 0;
    const l = this.getAbsoluteTransform(e);
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
    const e = this._getCanvasCache();
    t.translate(e.x, e.y);
    const i = this._getCachedSceneCanvas(), s = i.pixelRatio;
    t.drawImage(i._canvas, 0, 0, i.width / s, i.height / s), t.restore();
  }
  _drawCachedHitCanvas(t) {
    const e = this._getCanvasCache(), i = e.hit;
    t.save(), t.translate(e.x, e.y), t.drawImage(i._canvas, 0, 0, i.width / i.pixelRatio, i.height / i.pixelRatio), t.restore();
  }
  _getCachedSceneCanvas() {
    let t = this.filters(), e = this._getCanvasCache(), i = e.scene, s = e.filter, r = s.getContext(), o, a, l, h;
    if (t) {
      if (!this._filterUpToDate) {
        const c = i.pixelRatio;
        s.setSize(i.width / i.pixelRatio, i.height / i.pixelRatio);
        try {
          for (o = t.length, r.clear(), r.drawImage(i._canvas, 0, 0, i.getWidth() / c, i.getHeight() / c), a = r.getImageData(0, 0, s.getWidth(), s.getHeight()), l = 0; l < o; l++) {
            if (h = t[l], typeof h != "function") {
              mt.Util.error("Filter should be type of function, but got " + typeof h + " instead. Please check correct filters");
              continue;
            }
            h.call(this, a), r.putImageData(a, 0, 0);
          }
        } catch (g) {
          mt.Util.error("Unable to apply filter. " + g.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
        }
        this._filterUpToDate = !0;
      }
      return s;
    }
    return i;
  }
  on(t, e) {
    if (this._cache && this._cache.delete(es), arguments.length === 3)
      return this._delegate.apply(this, arguments);
    const i = t.split(ds);
    for (let s = 0; s < i.length; s++) {
      const o = i[s].split("."), a = o[0], l = o[1] || "";
      this.eventListeners[a] || (this.eventListeners[a] = []), this.eventListeners[a].push({ name: l, handler: e });
    }
    return this;
  }
  off(t, e) {
    let i = (t || "").split(ds), s = i.length, r, o, a, l, h, c;
    if (this._cache && this._cache.delete(es), !t)
      for (o in this.eventListeners)
        this._off(o);
    for (r = 0; r < s; r++)
      if (a = i[r], l = a.split("."), h = l[0], c = l[1], h)
        this.eventListeners[h] && this._off(h, c, e);
      else
        for (o in this.eventListeners)
          this._off(o, c, e);
    return this;
  }
  dispatchEvent(t) {
    const e = {
      target: this,
      type: t.type,
      evt: t
    };
    return this.fire(t.type, e), this;
  }
  addEventListener(t, e) {
    return this.on(t, function(i) {
      e.call(this, i.evt);
    }), this;
  }
  removeEventListener(t) {
    return this.off(t), this;
  }
  _delegate(t, e, i) {
    const s = this;
    this.on(t, function(r) {
      const o = r.target.findAncestors(e, !0, s);
      for (let a = 0; a < o.length; a++)
        r = mt.Util.cloneObject(r), r.currentTarget = o[a], i.call(o[a], r);
    });
  }
  remove() {
    return this.isDragging() && this.stopDrag(), ve.DD._dragElements.delete(this._id), this._remove(), this;
  }
  _clearCaches() {
    this._clearSelfAndDescendantCache(Ve), this._clearSelfAndDescendantCache(hs), this._clearSelfAndDescendantCache(za), this._clearSelfAndDescendantCache(Za), this._clearSelfAndDescendantCache(po), this._clearSelfAndDescendantCache(go);
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
    const e = "get" + mt.Util._capitalize(t);
    return mt.Util._isFunction(this[e]) ? this[e]() : this.attrs[t];
  }
  getAncestors() {
    let t = this.getParent(), e = [];
    for (; t; )
      e.push(t), t = t.getParent();
    return e;
  }
  getAttrs() {
    return this.attrs || {};
  }
  setAttrs(t) {
    return this._batchTransformChanges(() => {
      let e, i;
      if (!t)
        return this;
      for (e in t)
        e !== H0 && (i = Ka + mt.Util._capitalize(e), mt.Util._isFunction(this[i]) ? this[i](t[e]) : this._setAttr(e, t[e]));
    }), this;
  }
  isListening() {
    return this._getCache(go, this._isListening);
  }
  _isListening(t) {
    if (!this.listening())
      return !1;
    const i = this.getParent();
    return i && i !== t && this !== t ? i._isListening(t) : !0;
  }
  isVisible() {
    return this._getCache(po, this._isVisible);
  }
  _isVisible(t) {
    if (!this.visible())
      return !1;
    const i = this.getParent();
    return i && i !== t && this !== t ? i._isVisible(t) : !0;
  }
  shouldDrawHit(t, e = !1) {
    if (t)
      return this._isVisible(t) && this._isListening(t);
    const i = this.getLayer();
    let s = !1;
    ve.DD._dragElements.forEach((o) => {
      o.dragStatus === "dragging" && (o.node.nodeType === "Stage" || o.node.getLayer() === i) && (s = !0);
    });
    const r = !e && !Qe.Konva.hitOnDragEnabled && (s || Qe.Konva.isTransforming());
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
    let t = this.getDepth(), e = this, i = 0, s, r, o, a;
    function l(c) {
      for (s = [], r = c.length, o = 0; o < r; o++)
        a = c[o], i++, a.nodeType !== qa && (s = s.concat(a.getChildren().slice())), a._id === e._id && (o = r);
      s.length > 0 && s[0].getDepth() <= t && l(s);
    }
    const h = this.getStage();
    return e.nodeType !== q0 && h && l(h.getChildren()), i;
  }
  getDepth() {
    let t = 0, e = this.parent;
    for (; e; )
      t++, e = e.parent;
    return t;
  }
  _batchTransformChanges(t) {
    this._batchingTransformChange = !0, t(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(tn), this._clearSelfAndDescendantCache(Ve)), this._needClearTransformCache = !1;
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
    const e = t.getPointerPosition();
    if (!e)
      return null;
    const i = this.getAbsoluteTransform().copy();
    return i.invert(), i.point(e);
  }
  getAbsolutePosition(t) {
    let e = !1, i = this.parent;
    for (; i; ) {
      if (i.isCached()) {
        e = !0;
        break;
      }
      i = i.parent;
    }
    e && !t && (t = !0);
    const s = this.getAbsoluteTransform(t).getMatrix(), r = new mt.Transform(), o = this.offset();
    return r.m = s.slice(), r.translate(o.x, o.y), r.getTranslation();
  }
  setAbsolutePosition(t) {
    const { x: e, y: i, ...s } = this._clearTransform();
    this.attrs.x = e, this.attrs.y = i, this._clearCache(tn);
    const r = this._getAbsoluteTransform().copy();
    return r.invert(), r.translate(t.x, t.y), t = {
      x: this.attrs.x + r.getTranslation().x,
      y: this.attrs.y + r.getTranslation().y
    }, this._setTransform(s), this.setPosition({ x: t.x, y: t.y }), this._clearCache(tn), this._clearSelfAndDescendantCache(Ve), this;
  }
  _setTransform(t) {
    let e;
    for (e in t)
      this.attrs[e] = t[e];
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
    let e = t.x, i = t.y, s = this.x(), r = this.y();
    return e !== void 0 && (s += e), i !== void 0 && (r += i), this.setPosition({ x: s, y: r }), this;
  }
  _eachAncestorReverse(t, e) {
    let i = [], s = this.getParent(), r, o;
    if (!(e && e._id === this._id)) {
      for (i.unshift(this); s && (!e || s._id !== e._id); )
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
      return mt.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
    const t = this.index, e = this.parent.getChildren().length;
    return t < e - 1 ? (this.parent.children.splice(t, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveUp() {
    if (!this.parent)
      return mt.Util.warn("Node has no parent. moveUp function is ignored."), !1;
    const t = this.index, e = this.parent.getChildren().length;
    return t < e - 1 ? (this.parent.children.splice(t, 1), this.parent.children.splice(t + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveDown() {
    if (!this.parent)
      return mt.Util.warn("Node has no parent. moveDown function is ignored."), !1;
    const t = this.index;
    return t > 0 ? (this.parent.children.splice(t, 1), this.parent.children.splice(t - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveToBottom() {
    if (!this.parent)
      return mt.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
    const t = this.index;
    return t > 0 ? (this.parent.children.splice(t, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  setZIndex(t) {
    if (!this.parent)
      return mt.Util.warn("Node has no parent. zIndex parameter is ignored."), this;
    (t < 0 || t >= this.parent.children.length) && mt.Util.warn("Unexpected value " + t + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
    const e = this.index;
    return this.parent.children.splice(e, 1), this.parent.children.splice(t, 0, this), this.parent._setChildrenIndices(), this;
  }
  getAbsoluteOpacity() {
    return this._getCache(hs, this._getAbsoluteOpacity);
  }
  _getAbsoluteOpacity() {
    let t = this.opacity();
    const e = this.getParent();
    return e && !e._isUnderCache && (t *= e.getAbsoluteOpacity()), t;
  }
  moveTo(t) {
    return this.getParent() !== t && (this._remove(), t.add(this)), this;
  }
  toObject() {
    let t = this.getAttrs(), e, i, s, r, o;
    const a = {
      attrs: {},
      className: this.getClassName()
    };
    for (e in t)
      i = t[e], o = mt.Util.isObject(i) && !mt.Util._isPlainObject(i) && !mt.Util._isArray(i), !o && (s = typeof this[e] == "function" && this[e], delete t[e], r = s ? s.call(this) : null, t[e] = i, r !== i && (a.attrs[e] = i));
    return mt.Util._prepareToStringify(a);
  }
  toJSON() {
    return JSON.stringify(this.toObject());
  }
  getParent() {
    return this.parent;
  }
  findAncestors(t, e, i) {
    const s = [];
    e && this._isMatch(t) && s.push(this);
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
  findAncestor(t, e, i) {
    return this.findAncestors(t, e, i)[0];
  }
  _isMatch(t) {
    if (!t)
      return !1;
    if (typeof t == "function")
      return t(this);
    let e = t.replace(/ /g, "").split(","), i = e.length, s, r;
    for (s = 0; s < i; s++)
      if (r = e[s], mt.Util.isValidSelector(r) || (mt.Util.warn('Selector "' + r + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), mt.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), mt.Util.warn("Konva is awesome, right?")), r.charAt(0) === "#") {
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
    return this._getCache(Za, this._getStage);
  }
  _getStage() {
    const t = this.getParent();
    return t ? t.getStage() : null;
  }
  fire(t, e = {}, i) {
    return e.target = e.target || this, i ? this._fireAndBubble(t, e) : this._fire(t, e), this;
  }
  getAbsoluteTransform(t) {
    return t ? this._getAbsoluteTransform(t) : this._getCache(Ve, this._getAbsoluteTransform);
  }
  _getAbsoluteTransform(t) {
    let e;
    if (t)
      return e = new mt.Transform(), this._eachAncestorReverse(function(i) {
        const s = i.transformsEnabled();
        s === "all" ? e.multiply(i.getTransform()) : s === "position" && e.translate(i.x() - i.offsetX(), i.y() - i.offsetY());
      }, t), e;
    {
      e = this._cache.get(Ve) || new mt.Transform(), this.parent ? this.parent.getAbsoluteTransform().copyInto(e) : e.reset();
      const i = this.transformsEnabled();
      if (i === "all")
        e.multiply(this.getTransform());
      else if (i === "position") {
        const s = this.attrs.x || 0, r = this.attrs.y || 0, o = this.attrs.offsetX || 0, a = this.attrs.offsetY || 0;
        e.translate(s - o, r - a);
      }
      return e.dirty = !1, e;
    }
  }
  getAbsoluteScale(t) {
    let e = this;
    for (; e; )
      e._isUnderCache && (t = e), e = e.getParent();
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
    return this._getCache(tn, this._getTransform);
  }
  _getTransform() {
    var t, e;
    const i = this._cache.get(tn) || new mt.Transform();
    i.reset();
    const s = this.x(), r = this.y(), o = Qe.Konva.getAngle(this.rotation()), a = (t = this.attrs.scaleX) !== null && t !== void 0 ? t : 1, l = (e = this.attrs.scaleY) !== null && e !== void 0 ? e : 1, h = this.attrs.skewX || 0, c = this.attrs.skewY || 0, g = this.attrs.offsetX || 0, f = this.attrs.offsetY || 0;
    return (s !== 0 || r !== 0) && i.translate(s, r), o !== 0 && i.rotate(o), (h !== 0 || c !== 0) && i.skew(h, c), (a !== 1 || l !== 1) && i.scale(a, l), (g !== 0 || f !== 0) && i.translate(-1 * g, -1 * f), i.dirty = !1, i;
  }
  clone(t) {
    let e = mt.Util.cloneObject(this.attrs), i, s, r, o, a;
    for (i in t)
      e[i] = t[i];
    const l = new this.constructor(e);
    for (i in this.eventListeners)
      for (s = this.eventListeners[i], r = s.length, o = 0; o < r; o++)
        a = s[o], a.name.indexOf($0) < 0 && (l.eventListeners[i] || (l.eventListeners[i] = []), l.eventListeners[i].push(a));
    return l;
  }
  _toKonvaCanvas(t) {
    t = t || {};
    const e = this.getClientRect(), i = this.getStage(), s = t.x !== void 0 ? t.x : Math.floor(e.x), r = t.y !== void 0 ? t.y : Math.floor(e.y), o = t.pixelRatio || 1, a = new Hn.SceneCanvas({
      width: t.width || Math.ceil(e.width) || (i ? i.width() : 0),
      height: t.height || Math.ceil(e.height) || (i ? i.height() : 0),
      pixelRatio: o
    }), l = a.getContext(), h = new Hn.SceneCanvas({
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
    const e = t.mimeType || null, i = t.quality || null, s = this._toKonvaCanvas(t).toDataURL(e, i);
    return t.callback && t.callback(s), s;
  }
  toImage(t) {
    return new Promise((e, i) => {
      try {
        const s = t == null ? void 0 : t.callback;
        s && delete t.callback, mt.Util._urlToImage(this.toDataURL(t), function(r) {
          e(r), s == null || s(r);
        });
      } catch (s) {
        i(s);
      }
    });
  }
  toBlob(t) {
    return new Promise((e, i) => {
      try {
        const s = t == null ? void 0 : t.callback;
        s && delete t.callback, this.toCanvas(t).toBlob((r) => {
          e(r), s == null || s(r);
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
    return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : Qe.Konva.dragDistance;
  }
  _off(t, e, i) {
    let s = this.eventListeners[t], r, o, a;
    for (r = 0; r < s.length; r++)
      if (o = s[r].name, a = s[r].handler, (o !== "konva" || e === "konva") && (!e || o === e) && (!i || i === a)) {
        if (s.splice(r, 1), s.length === 0) {
          delete this.eventListeners[t];
          break;
        }
        r--;
      }
  }
  _fireChangeEvent(t, e, i) {
    this._fire(t + V0, {
      oldVal: e,
      newVal: i
    });
  }
  addName(t) {
    if (!this.hasName(t)) {
      const e = this.name(), i = e ? e + " " + t : t;
      this.name(i);
    }
    return this;
  }
  hasName(t) {
    if (!t)
      return !1;
    const e = this.name();
    return e ? (e || "").split(/\s/g).indexOf(t) !== -1 : !1;
  }
  removeName(t) {
    const e = (this.name() || "").split(/\s/g), i = e.indexOf(t);
    return i !== -1 && (e.splice(i, 1), this.name(e.join(" "))), this;
  }
  setAttr(t, e) {
    const i = this[Ka + mt.Util._capitalize(t)];
    return mt.Util._isFunction(i) ? i.call(this, e) : this._setAttr(t, e), this;
  }
  _requestDraw() {
    if (Qe.Konva.autoDrawEnabled) {
      const t = this.getLayer() || this.getStage();
      t == null || t.batchDraw();
    }
  }
  _setAttr(t, e) {
    const i = this.attrs[t];
    i === e && !mt.Util.isObject(e) || (e == null ? delete this.attrs[t] : this.attrs[t] = e, this._shouldFireChangeEvents && this._fireChangeEvent(t, i, e), this._requestDraw());
  }
  _setComponentAttr(t, e, i) {
    let s;
    i !== void 0 && (s = this.attrs[t], s || (this.attrs[t] = this.getAttr(t)), this.attrs[t][e] = i, this._fireChangeEvent(t, s, i));
  }
  _fireAndBubble(t, e, i) {
    e && this.nodeType === qa && (e.target = this);
    const s = [
      j0,
      Y0,
      W0,
      X0,
      z0,
      K0
    ];
    if (!(s.indexOf(t) !== -1 && (i && (this === i || this.isAncestorOf && this.isAncestorOf(i)) || this.nodeType === "Stage" && !i))) {
      this._fire(t, e);
      const o = s.indexOf(t) !== -1 && i && i.isAncestorOf && i.isAncestorOf(this) && !i.isAncestorOf(this.parent);
      (e && !e.cancelBubble || !e) && this.parent && this.parent.isListening() && !o && (i && i.parent ? this._fireAndBubble.call(this.parent, t, e, i) : this._fireAndBubble.call(this.parent, t, e));
    }
  }
  _getProtoListeners(t) {
    var e, i, s;
    const r = (e = this._cache.get(es)) !== null && e !== void 0 ? e : {};
    let o = r == null ? void 0 : r[t];
    if (o === void 0) {
      o = [];
      let a = Object.getPrototypeOf(this);
      for (; a; ) {
        const l = (s = (i = a.eventListeners) === null || i === void 0 ? void 0 : i[t]) !== null && s !== void 0 ? s : [];
        o.push(...l), a = Object.getPrototypeOf(a);
      }
      r[t] = o, this._cache.set(es, r);
    }
    return o;
  }
  _fire(t, e) {
    e = e || {}, e.currentTarget = this, e.type = t;
    const i = this._getProtoListeners(t);
    if (i)
      for (let r = 0; r < i.length; r++)
        i[r].handler.call(this, e);
    const s = this.eventListeners[t];
    if (s)
      for (let r = 0; r < s.length; r++)
        s[r].handler.call(this, e);
  }
  draw() {
    return this.drawScene(), this.drawHit(), this;
  }
  _createDragElement(t) {
    const e = t ? t.pointerId : void 0, i = this.getStage(), s = this.getAbsolutePosition();
    if (!i)
      return;
    const r = i._getPointerById(e) || i._changedPointerPositions[0] || s;
    ve.DD._dragElements.set(this._id, {
      node: this,
      startPointerPos: r,
      offset: {
        x: r.x - s.x,
        y: r.y - s.y
      },
      dragStatus: "ready",
      pointerId: e
    });
  }
  startDrag(t, e = !0) {
    ve.DD._dragElements.has(this._id) || this._createDragElement(t);
    const i = ve.DD._dragElements.get(this._id);
    i.dragStatus = "dragging", this.fire("dragstart", {
      type: "dragstart",
      target: this,
      evt: t && t.evt
    }, e);
  }
  _setDragPosition(t, e) {
    const i = this.getStage()._getPointerById(e.pointerId);
    if (!i)
      return;
    let s = {
      x: i.x - e.offset.x,
      y: i.y - e.offset.y
    };
    const r = this.dragBoundFunc();
    if (r !== void 0) {
      const o = r.call(this, s, t);
      o ? s = o : mt.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
    }
    (!this._lastPos || this._lastPos.x !== s.x || this._lastPos.y !== s.y) && (this.setAbsolutePosition(s), this._requestDraw()), this._lastPos = s;
  }
  stopDrag(t) {
    const e = ve.DD._dragElements.get(this._id);
    e && (e.dragStatus = "stopped"), ve.DD._endDragBefore(t), ve.DD._endDragAfter(t);
  }
  setDraggable(t) {
    this._setAttr("draggable", t), this._dragChange();
  }
  isDragging() {
    const t = ve.DD._dragElements.get(this._id);
    return t ? t.dragStatus === "dragging" : !1;
  }
  _listenDrag() {
    this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(t) {
      if (!(!(t.evt.button !== void 0) || Qe.Konva.dragButtons.indexOf(t.evt.button) >= 0) || this.isDragging())
        return;
      let s = !1;
      ve.DD._dragElements.forEach((r) => {
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
      const e = ve.DD._dragElements.get(this._id), i = e && e.dragStatus === "dragging", s = e && e.dragStatus === "ready";
      i ? this.stopDrag() : s && ve.DD._dragElements.delete(this._id);
    }
  }
  _dragCleanup() {
    this.off("mousedown.konva"), this.off("touchstart.konva");
  }
  isClientRectOnScreen(t = { x: 0, y: 0 }) {
    const e = this.getStage();
    if (!e)
      return !1;
    const i = {
      x: -t.x,
      y: -t.y,
      width: e.width() + 2 * t.x,
      height: e.height() + 2 * t.y
    };
    return mt.Util.haveIntersection(i, this.getClientRect());
  }
  static create(t, e) {
    return mt.Util._isString(t) && (t = JSON.parse(t)), this._createNode(t, e);
  }
  static _createNode(t, e) {
    let i = st.prototype.getClassName.call(t), s = t.children, r, o, a;
    e && (t.attrs.container = e), Qe.Konva[i] || (mt.Util.warn('Can not find a node with class name "' + i + '". Fallback to "Shape".'), i = "Shape");
    const l = Qe.Konva[i];
    if (r = new l(t.attrs), s)
      for (o = s.length, a = 0; a < o; a++)
        r.add(st._createNode(s[a]));
    return r;
  }
}
Gt.Node = st;
st.prototype.nodeType = "Node";
st.prototype._attrsAffectingSize = [];
st.prototype.eventListeners = {};
st.prototype.on.call(st.prototype, Z0, function() {
  if (this._batchingTransformChange) {
    this._needClearTransformCache = !0;
    return;
  }
  this._clearCache(tn), this._clearSelfAndDescendantCache(Ve);
});
st.prototype.on.call(st.prototype, "visibleChange.konva", function() {
  this._clearSelfAndDescendantCache(po);
});
st.prototype.on.call(st.prototype, "listeningChange.konva", function() {
  this._clearSelfAndDescendantCache(go);
});
st.prototype.on.call(st.prototype, "opacityChange.konva", function() {
  this._clearSelfAndDescendantCache(hs);
});
const kt = Ui.Factory.addGetterSetter;
kt(st, "zIndex");
kt(st, "absolutePosition");
kt(st, "position");
kt(st, "x", 0, (0, jt.getNumberValidator)());
kt(st, "y", 0, (0, jt.getNumberValidator)());
kt(st, "globalCompositeOperation", "source-over", (0, jt.getStringValidator)());
kt(st, "opacity", 1, (0, jt.getNumberValidator)());
kt(st, "name", "", (0, jt.getStringValidator)());
kt(st, "id", "", (0, jt.getStringValidator)());
kt(st, "rotation", 0, (0, jt.getNumberValidator)());
Ui.Factory.addComponentsGetterSetter(st, "scale", ["x", "y"]);
kt(st, "scaleX", 1, (0, jt.getNumberValidator)());
kt(st, "scaleY", 1, (0, jt.getNumberValidator)());
Ui.Factory.addComponentsGetterSetter(st, "skew", ["x", "y"]);
kt(st, "skewX", 0, (0, jt.getNumberValidator)());
kt(st, "skewY", 0, (0, jt.getNumberValidator)());
Ui.Factory.addComponentsGetterSetter(st, "offset", ["x", "y"]);
kt(st, "offsetX", 0, (0, jt.getNumberValidator)());
kt(st, "offsetY", 0, (0, jt.getNumberValidator)());
kt(st, "dragDistance", void 0, (0, jt.getNumberValidator)());
kt(st, "width", 0, (0, jt.getNumberValidator)());
kt(st, "height", 0, (0, jt.getNumberValidator)());
kt(st, "listening", !0, (0, jt.getBooleanValidator)());
kt(st, "preventDefault", !0, (0, jt.getBooleanValidator)());
kt(st, "filters", void 0, function(n) {
  return this._filterUpToDate = !1, n;
});
kt(st, "visible", !0, (0, jt.getBooleanValidator)());
kt(st, "transformsEnabled", "all", (0, jt.getStringValidator)());
kt(st, "size");
kt(st, "dragBoundFunc");
kt(st, "draggable", !1, (0, jt.getBooleanValidator)());
Ui.Factory.backCompat(st, {
  rotateDeg: "rotate",
  setRotationDeg: "setRotation",
  getRotationDeg: "getRotation"
});
var Rn = {};
Object.defineProperty(Rn, "__esModule", { value: !0 });
Rn.Container = void 0;
const li = gt, Gr = Gt, Bs = et;
class kn extends Gr.Node {
  constructor() {
    super(...arguments), this.children = [];
  }
  getChildren(t) {
    const e = this.children || [];
    return t ? e.filter(t) : e;
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
    const e = t[0];
    return e.getParent() ? (e.moveTo(this), this) : (this._validateAdd(e), e.index = this.getChildren().length, e.parent = this, e._clearCaches(), this.getChildren().push(e), this._fire("add", {
      child: e
    }), this._requestDraw(), this);
  }
  destroy() {
    return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
  }
  find(t) {
    return this._generalFind(t, !1);
  }
  findOne(t) {
    const e = this._generalFind(t, !0);
    return e.length > 0 ? e[0] : void 0;
  }
  _generalFind(t, e) {
    const i = [];
    return this._descendants((s) => {
      const r = s._isMatch(t);
      return r && i.push(s), !!(r && e);
    }), i;
  }
  _descendants(t) {
    let e = !1;
    const i = this.getChildren();
    for (const s of i) {
      if (e = t(s), e)
        return !0;
      if (s.hasChildren() && (e = s._descendants(t), e))
        return !0;
    }
    return !1;
  }
  toObject() {
    const t = Gr.Node.prototype.toObject.call(this);
    return t.children = [], this.getChildren().forEach((e) => {
      t.children.push(e.toObject());
    }), t;
  }
  isAncestorOf(t) {
    let e = t.getParent();
    for (; e; ) {
      if (e._id === this._id)
        return !0;
      e = e.getParent();
    }
    return !1;
  }
  clone(t) {
    const e = Gr.Node.prototype.clone.call(this, t);
    return this.getChildren().forEach(function(i) {
      e.add(i.clone());
    }), e;
  }
  getAllIntersections(t) {
    const e = [];
    return this.find("Shape").forEach((i) => {
      i.isVisible() && i.intersects(t) && e.push(i);
    }), e;
  }
  _clearSelfAndDescendantCache(t) {
    var e;
    super._clearSelfAndDescendantCache(t), !this.isCached() && ((e = this.children) === null || e === void 0 || e.forEach(function(i) {
      i._clearSelfAndDescendantCache(t);
    }));
  }
  _setChildrenIndices() {
    var t;
    (t = this.children) === null || t === void 0 || t.forEach(function(e, i) {
      e.index = i;
    }), this._requestDraw();
  }
  drawScene(t, e, i) {
    const s = this.getLayer(), r = t || s && s.getCanvas(), o = r && r.getContext(), a = this._getCanvasCache(), l = a && a.scene, h = r && r.isCache;
    if (!this.isVisible() && !h)
      return this;
    if (l) {
      o.save();
      const c = this.getAbsoluteTransform(e).getMatrix();
      o.transform(c[0], c[1], c[2], c[3], c[4], c[5]), this._drawCachedSceneCanvas(o), o.restore();
    } else
      this._drawChildren("drawScene", r, e, i);
    return this;
  }
  drawHit(t, e) {
    if (!this.shouldDrawHit(e))
      return this;
    const i = this.getLayer(), s = t || i && i.hitCanvas, r = s && s.getContext(), o = this._getCanvasCache();
    if (o && o.hit) {
      r.save();
      const l = this.getAbsoluteTransform(e).getMatrix();
      r.transform(l[0], l[1], l[2], l[3], l[4], l[5]), this._drawCachedHitCanvas(r), r.restore();
    } else
      this._drawChildren("drawHit", s, e);
    return this;
  }
  _drawChildren(t, e, i, s) {
    var r;
    const o = e && e.getContext(), a = this.clipWidth(), l = this.clipHeight(), h = this.clipFunc(), c = typeof a == "number" && typeof l == "number" || h, g = i === this;
    if (c) {
      o.save();
      const _ = this.getAbsoluteTransform(i);
      let u = _.getMatrix();
      o.transform(u[0], u[1], u[2], u[3], u[4], u[5]), o.beginPath();
      let m;
      if (h)
        m = h.call(this, o, this);
      else {
        const v = this.clipX(), S = this.clipY();
        o.rect(v || 0, S || 0, a, l);
      }
      o.clip.apply(o, m), u = _.copy().invert().getMatrix(), o.transform(u[0], u[1], u[2], u[3], u[4], u[5]);
    }
    const f = !g && this.globalCompositeOperation() !== "source-over" && t === "drawScene";
    f && (o.save(), o._applyGlobalCompositeOperation(this)), (r = this.children) === null || r === void 0 || r.forEach(function(_) {
      _[t](e, i, s);
    }), f && o.restore(), c && o.restore();
  }
  getClientRect(t = {}) {
    var e;
    const i = t.skipTransform, s = t.relativeTo;
    let r, o, a, l, h = {
      x: 1 / 0,
      y: 1 / 0,
      width: 0,
      height: 0
    };
    const c = this;
    (e = this.children) === null || e === void 0 || e.forEach(function(_) {
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
Rn.Container = kn;
li.Factory.addComponentsGetterSetter(kn, "clip", [
  "x",
  "y",
  "width",
  "height"
]);
li.Factory.addGetterSetter(kn, "clipX", void 0, (0, Bs.getNumberValidator)());
li.Factory.addGetterSetter(kn, "clipY", void 0, (0, Bs.getNumberValidator)());
li.Factory.addGetterSetter(kn, "clipWidth", void 0, (0, Bs.getNumberValidator)());
li.Factory.addGetterSetter(kn, "clipHeight", void 0, (0, Bs.getNumberValidator)());
li.Factory.addGetterSetter(kn, "clipFunc");
var Vc = {}, fn = {};
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.getCapturedShape = tf;
fn.createEvent = Ko;
fn.hasPointerCapture = ef;
fn.setPointerCapture = nf;
fn.releaseCapture = $c;
const Q0 = dt, Di = /* @__PURE__ */ new Map(), Hc = Q0.Konva._global.PointerEvent !== void 0;
function tf(n) {
  return Di.get(n);
}
function Ko(n) {
  return {
    evt: n,
    pointerId: n.pointerId
  };
}
function ef(n, t) {
  return Di.get(n) === t;
}
function nf(n, t) {
  $c(n), t.getStage() && (Di.set(n, t), Hc && t._fire("gotpointercapture", Ko(new PointerEvent("gotpointercapture"))));
}
function $c(n, t) {
  const e = Di.get(n);
  if (!e)
    return;
  const i = e.getStage();
  i && i.content, Di.delete(n), Hc && e._fire("lostpointercapture", Ko(new PointerEvent("lostpointercapture")));
}
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.Stage = n.stages = void 0;
  const t = Bt, e = gt, i = Rn, s = dt, r = Ae, o = Gs, a = dt, l = fn, h = "Stage", c = "string", g = "px", f = "mouseout", _ = "mouseleave", u = "mouseover", m = "mouseenter", v = "mousemove", S = "mousedown", x = "mouseup", d = "pointermove", p = "pointerdown", b = "pointerup", E = "pointercancel", R = "lostpointercapture", w = "pointerout", k = "pointerleave", T = "pointerover", O = "pointerenter", G = "contextmenu", $ = "touchstart", Z = "touchend", Y = "touchmove", it = "touchcancel", z = "wheel", V = 5, lt = [
    [m, "_pointerenter"],
    [S, "_pointerdown"],
    [v, "_pointermove"],
    [x, "_pointerup"],
    [_, "_pointerleave"],
    [$, "_pointerdown"],
    [Y, "_pointermove"],
    [Z, "_pointerup"],
    [it, "_pointercancel"],
    [u, "_pointerover"],
    [z, "_wheel"],
    [G, "_contextmenu"],
    [p, "_pointerdown"],
    [d, "_pointermove"],
    [b, "_pointerup"],
    [E, "_pointercancel"],
    [k, "_pointerleave"],
    [R, "_lostpointercapture"]
  ], Q = {
    mouse: {
      [w]: f,
      [k]: _,
      [T]: u,
      [O]: m,
      [d]: v,
      [p]: S,
      [b]: x,
      [E]: "mousecancel",
      pointerclick: "click",
      pointerdblclick: "dblclick"
    },
    touch: {
      [w]: "touchout",
      [k]: "touchleave",
      [T]: "touchover",
      [O]: "touchenter",
      [d]: Y,
      [p]: $,
      [b]: Z,
      [E]: it,
      pointerclick: "tap",
      pointerdblclick: "dbltap"
    },
    pointer: {
      [w]: w,
      [k]: k,
      [T]: T,
      [O]: O,
      [d]: d,
      [p]: p,
      [b]: b,
      [E]: E,
      pointerclick: "pointerclick",
      pointerdblclick: "pointerdblclick"
    }
  }, rt = (ct) => ct.indexOf("pointer") >= 0 ? "pointer" : ct.indexOf("touch") >= 0 ? "touch" : "mouse", X = (ct) => {
    const P = rt(ct);
    if (P === "pointer")
      return s.Konva.pointerEventsEnabled && Q.pointer;
    if (P === "touch")
      return Q.touch;
    if (P === "mouse")
      return Q.mouse;
  };
  function Pt(ct = {}) {
    return (ct.clipFunc || ct.clipWidth || ct.clipHeight) && t.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), ct;
  }
  const Ut = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
  n.stages = [];
  class qt extends i.Container {
    constructor(P) {
      super(Pt(P)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), n.stages.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
        Pt(this.attrs);
      }), this._checkVisibility();
    }
    _validateAdd(P) {
      const D = P.getType() === "Layer", q = P.getType() === "FastLayer";
      D || q || t.Util.throw("You may only add layers to the stage.");
    }
    _checkVisibility() {
      if (!this.content)
        return;
      const P = this.visible() ? "" : "none";
      this.content.style.display = P;
    }
    setContainer(P) {
      if (typeof P === c) {
        let D;
        if (P.charAt(0) === ".") {
          const q = P.slice(1);
          P = document.getElementsByClassName(q)[0];
        } else
          P.charAt(0) !== "#" ? D = P : D = P.slice(1), P = document.getElementById(D);
        if (!P)
          throw "Can not find container in document with id " + D;
      }
      return this._setAttr("container", P), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), P.appendChild(this.content)), this;
    }
    shouldDrawHit() {
      return !0;
    }
    clear() {
      const P = this.children, D = P.length;
      for (let q = 0; q < D; q++)
        P[q].clear();
      return this;
    }
    clone(P) {
      return P || (P = {}), P.container = typeof document < "u" && document.createElement("div"), i.Container.prototype.clone.call(this, P);
    }
    destroy() {
      super.destroy();
      const P = this.content;
      P && t.Util._isInDocument(P) && this.container().removeChild(P);
      const D = n.stages.indexOf(this);
      return D > -1 && n.stages.splice(D, 1), t.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this;
    }
    getPointerPosition() {
      const P = this._pointerPositions[0] || this._changedPointerPositions[0];
      return P ? {
        x: P.x,
        y: P.y
      } : (t.Util.warn(Ut), null);
    }
    _getPointerById(P) {
      return this._pointerPositions.find((D) => D.id === P);
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
    _toKonvaCanvas(P) {
      P = P || {}, P.x = P.x || 0, P.y = P.y || 0, P.width = P.width || this.width(), P.height = P.height || this.height();
      const D = new r.SceneCanvas({
        width: P.width,
        height: P.height,
        pixelRatio: P.pixelRatio || 1
      }), q = D.getContext()._context, St = this.children;
      return (P.x || P.y) && q.translate(-1 * P.x, -1 * P.y), St.forEach(function(wt) {
        if (!wt.isVisible())
          return;
        const Rt = wt._toKonvaCanvas(P);
        q.drawImage(Rt._canvas, P.x, P.y, Rt.getWidth() / Rt.getPixelRatio(), Rt.getHeight() / Rt.getPixelRatio());
      }), D;
    }
    getIntersection(P) {
      if (!P)
        return null;
      const D = this.children, q = D.length, St = q - 1;
      for (let wt = St; wt >= 0; wt--) {
        const Rt = D[wt].getIntersection(P);
        if (Rt)
          return Rt;
      }
      return null;
    }
    _resizeDOM() {
      const P = this.width(), D = this.height();
      this.content && (this.content.style.width = P + g, this.content.style.height = D + g), this.bufferCanvas.setSize(P, D), this.bufferHitCanvas.setSize(P, D), this.children.forEach((q) => {
        q.setSize({ width: P, height: D }), q.draw();
      });
    }
    add(P, ...D) {
      if (arguments.length > 1) {
        for (let St = 0; St < arguments.length; St++)
          this.add(arguments[St]);
        return this;
      }
      super.add(P);
      const q = this.children.length;
      return q > V && t.Util.warn("The stage has " + q + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), P.setSize({ width: this.width(), height: this.height() }), P.draw(), s.Konva.isBrowser && this.content.appendChild(P.canvas._canvas), this;
    }
    getParent() {
      return null;
    }
    getLayer() {
      return null;
    }
    hasPointerCapture(P) {
      return l.hasPointerCapture(P, this);
    }
    setPointerCapture(P) {
      l.setPointerCapture(P, this);
    }
    releaseCapture(P) {
      l.releaseCapture(P, this);
    }
    getLayers() {
      return this.children;
    }
    _bindContentEvents() {
      s.Konva.isBrowser && lt.forEach(([P, D]) => {
        this.content.addEventListener(P, (q) => {
          this[D](q);
        }, { passive: !1 });
      });
    }
    _pointerenter(P) {
      this.setPointersPositions(P);
      const D = X(P.type);
      D && this._fire(D.pointerenter, {
        evt: P,
        target: this,
        currentTarget: this
      });
    }
    _pointerover(P) {
      this.setPointersPositions(P);
      const D = X(P.type);
      D && this._fire(D.pointerover, {
        evt: P,
        target: this,
        currentTarget: this
      });
    }
    _getTargetShape(P) {
      let D = this[P + "targetShape"];
      return D && !D.getStage() && (D = null), D;
    }
    _pointerleave(P) {
      const D = X(P.type), q = rt(P.type);
      if (!D)
        return;
      this.setPointersPositions(P);
      const St = this._getTargetShape(q), wt = !(s.Konva.isDragging() || s.Konva.isTransforming()) || s.Konva.hitOnDragEnabled;
      St && wt ? (St._fireAndBubble(D.pointerout, { evt: P }), St._fireAndBubble(D.pointerleave, { evt: P }), this._fire(D.pointerleave, {
        evt: P,
        target: this,
        currentTarget: this
      }), this[q + "targetShape"] = null) : wt && (this._fire(D.pointerleave, {
        evt: P,
        target: this,
        currentTarget: this
      }), this._fire(D.pointerout, {
        evt: P,
        target: this,
        currentTarget: this
      })), this.pointerPos = null, this._pointerPositions = [];
    }
    _pointerdown(P) {
      const D = X(P.type), q = rt(P.type);
      if (!D)
        return;
      this.setPointersPositions(P);
      let St = !1;
      this._changedPointerPositions.forEach((wt) => {
        const Rt = this.getIntersection(wt);
        if (o.DD.justDragged = !1, s.Konva["_" + q + "ListenClick"] = !0, !Rt || !Rt.isListening()) {
          this[q + "ClickStartShape"] = void 0;
          return;
        }
        s.Konva.capturePointerEventsEnabled && Rt.setPointerCapture(wt.id), this[q + "ClickStartShape"] = Rt, Rt._fireAndBubble(D.pointerdown, {
          evt: P,
          pointerId: wt.id
        }), St = !0;
        const y = P.type.indexOf("touch") >= 0;
        Rt.preventDefault() && P.cancelable && y && P.preventDefault();
      }), St || this._fire(D.pointerdown, {
        evt: P,
        target: this,
        currentTarget: this,
        pointerId: this._pointerPositions[0].id
      });
    }
    _pointermove(P) {
      const D = X(P.type), q = rt(P.type);
      if (!D || (s.Konva.isDragging() && o.DD.node.preventDefault() && P.cancelable && P.preventDefault(), this.setPointersPositions(P), !(!(s.Konva.isDragging() || s.Konva.isTransforming()) || s.Konva.hitOnDragEnabled)))
        return;
      const wt = {};
      let Rt = !1;
      const y = this._getTargetShape(q);
      this._changedPointerPositions.forEach((C) => {
        const M = l.getCapturedShape(C.id) || this.getIntersection(C), I = C.id, N = { evt: P, pointerId: I }, L = y !== M;
        if (L && y && (y._fireAndBubble(D.pointerout, { ...N }, M), y._fireAndBubble(D.pointerleave, { ...N }, M)), M) {
          if (wt[M._id])
            return;
          wt[M._id] = !0;
        }
        M && M.isListening() ? (Rt = !0, L && (M._fireAndBubble(D.pointerover, { ...N }, y), M._fireAndBubble(D.pointerenter, { ...N }, y), this[q + "targetShape"] = M), M._fireAndBubble(D.pointermove, { ...N })) : y && (this._fire(D.pointerover, {
          evt: P,
          target: this,
          currentTarget: this,
          pointerId: I
        }), this[q + "targetShape"] = null);
      }), Rt || this._fire(D.pointermove, {
        evt: P,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      });
    }
    _pointerup(P) {
      const D = X(P.type), q = rt(P.type);
      if (!D)
        return;
      this.setPointersPositions(P);
      const St = this[q + "ClickStartShape"], wt = this[q + "ClickEndShape"], Rt = {};
      let y = !1;
      this._changedPointerPositions.forEach((C) => {
        const M = l.getCapturedShape(C.id) || this.getIntersection(C);
        if (M) {
          if (M.releaseCapture(C.id), Rt[M._id])
            return;
          Rt[M._id] = !0;
        }
        const I = C.id, N = { evt: P, pointerId: I };
        let L = !1;
        s.Konva["_" + q + "InDblClickWindow"] ? (L = !0, clearTimeout(this[q + "DblTimeout"])) : o.DD.justDragged || (s.Konva["_" + q + "InDblClickWindow"] = !0, clearTimeout(this[q + "DblTimeout"])), this[q + "DblTimeout"] = setTimeout(function() {
          s.Konva["_" + q + "InDblClickWindow"] = !1;
        }, s.Konva.dblClickWindow), M && M.isListening() ? (y = !0, this[q + "ClickEndShape"] = M, M._fireAndBubble(D.pointerup, { ...N }), s.Konva["_" + q + "ListenClick"] && St && St === M && (M._fireAndBubble(D.pointerclick, { ...N }), L && wt && wt === M && M._fireAndBubble(D.pointerdblclick, { ...N }))) : (this[q + "ClickEndShape"] = null, s.Konva["_" + q + "ListenClick"] && this._fire(D.pointerclick, {
          evt: P,
          target: this,
          currentTarget: this,
          pointerId: I
        }), L && this._fire(D.pointerdblclick, {
          evt: P,
          target: this,
          currentTarget: this,
          pointerId: I
        }));
      }), y || this._fire(D.pointerup, {
        evt: P,
        target: this,
        currentTarget: this,
        pointerId: this._changedPointerPositions[0].id
      }), s.Konva["_" + q + "ListenClick"] = !1, P.cancelable && q !== "touch" && q !== "pointer" && P.preventDefault();
    }
    _contextmenu(P) {
      this.setPointersPositions(P);
      const D = this.getIntersection(this.getPointerPosition());
      D && D.isListening() ? D._fireAndBubble(G, { evt: P }) : this._fire(G, {
        evt: P,
        target: this,
        currentTarget: this
      });
    }
    _wheel(P) {
      this.setPointersPositions(P);
      const D = this.getIntersection(this.getPointerPosition());
      D && D.isListening() ? D._fireAndBubble(z, { evt: P }) : this._fire(z, {
        evt: P,
        target: this,
        currentTarget: this
      });
    }
    _pointercancel(P) {
      this.setPointersPositions(P);
      const D = l.getCapturedShape(P.pointerId) || this.getIntersection(this.getPointerPosition());
      D && D._fireAndBubble(b, l.createEvent(P)), l.releaseCapture(P.pointerId);
    }
    _lostpointercapture(P) {
      l.releaseCapture(P.pointerId);
    }
    setPointersPositions(P) {
      const D = this._getContentPosition();
      let q = null, St = null;
      P = P || window.event, P.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(P.touches, (wt) => {
        this._pointerPositions.push({
          id: wt.identifier,
          x: (wt.clientX - D.left) / D.scaleX,
          y: (wt.clientY - D.top) / D.scaleY
        });
      }), Array.prototype.forEach.call(P.changedTouches || P.touches, (wt) => {
        this._changedPointerPositions.push({
          id: wt.identifier,
          x: (wt.clientX - D.left) / D.scaleX,
          y: (wt.clientY - D.top) / D.scaleY
        });
      })) : (q = (P.clientX - D.left) / D.scaleX, St = (P.clientY - D.top) / D.scaleY, this.pointerPos = {
        x: q,
        y: St
      }, this._pointerPositions = [{ x: q, y: St, id: t.Util._getFirstPointerId(P) }], this._changedPointerPositions = [
        { x: q, y: St, id: t.Util._getFirstPointerId(P) }
      ]);
    }
    _setPointerPosition(P) {
      t.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(P);
    }
    _getContentPosition() {
      if (!this.content || !this.content.getBoundingClientRect)
        return {
          top: 0,
          left: 0,
          scaleX: 1,
          scaleY: 1
        };
      const P = this.content.getBoundingClientRect();
      return {
        top: P.top,
        left: P.left,
        scaleX: P.width / this.content.clientWidth || 1,
        scaleY: P.height / this.content.clientHeight || 1
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
      const P = this.container();
      if (!P)
        throw "Stage has no container. A container is required.";
      P.innerHTML = "", this.content = document.createElement("div"), this.content.style.position = "relative", this.content.style.userSelect = "none", this.content.className = "konvajs-content", this.content.setAttribute("role", "presentation"), P.appendChild(this.content), this._resizeDOM();
    }
    cache() {
      return t.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this;
    }
    clearCache() {
      return this;
    }
    batchDraw() {
      return this.getChildren().forEach(function(P) {
        P.batchDraw();
      }), this;
    }
  }
  n.Stage = qt, qt.prototype.nodeType = h, (0, a._registerNode)(qt), e.Factory.addGetterSetter(qt, "container"), s.Konva.isBrowser && document.addEventListener("visibilitychange", () => {
    n.stages.forEach((ct) => {
      ct.batchDraw();
    });
  });
})(Vc);
var Vi = {}, zt = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.Shape = n.shapes = void 0;
  const t = dt, e = Bt, i = gt, s = Gt, r = et, o = dt, a = fn, l = "hasShadow", h = "shadowRGBA", c = "patternImage", g = "linearGradient", f = "radialGradient";
  let _;
  function u() {
    return _ || (_ = e.Util.createCanvasElement().getContext("2d"), _);
  }
  n.shapes = {};
  function m(k) {
    const T = this.attrs.fillRule;
    T ? k.fill(T) : k.fill();
  }
  function v(k) {
    k.stroke();
  }
  function S(k) {
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
  function b() {
    this._clearCache(c);
  }
  function E() {
    this._clearCache(g);
  }
  function R() {
    this._clearCache(f);
  }
  class w extends s.Node {
    constructor(T) {
      super(T);
      let O;
      for (; O = e.Util.getRandomColor(), !(O && !(O in n.shapes)); )
        ;
      this.colorKey = O, n.shapes[O] = this;
    }
    getContext() {
      return e.Util.warn("shape.getContext() method is deprecated. Please do not use it."), this.getLayer().getContext();
    }
    getCanvas() {
      return e.Util.warn("shape.getCanvas() method is deprecated. Please do not use it."), this.getLayer().getCanvas();
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
        const O = u().createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
        if (O && O.setTransform) {
          const G = new e.Transform();
          G.translate(this.fillPatternX(), this.fillPatternY()), G.rotate(t.Konva.getAngle(this.fillPatternRotation())), G.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), G.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
          const $ = G.getMatrix(), Z = typeof DOMMatrix > "u" ? {
            a: $[0],
            b: $[1],
            c: $[2],
            d: $[3],
            e: $[4],
            f: $[5]
          } : new DOMMatrix($);
          O.setTransform(Z);
        }
        return O;
      }
    }
    _getLinearGradient() {
      return this._getCache(g, this.__getLinearGradient);
    }
    __getLinearGradient() {
      const T = this.fillLinearGradientColorStops();
      if (T) {
        const O = u(), G = this.fillLinearGradientStartPoint(), $ = this.fillLinearGradientEndPoint(), Z = O.createLinearGradient(G.x, G.y, $.x, $.y);
        for (let Y = 0; Y < T.length; Y += 2)
          Z.addColorStop(T[Y], T[Y + 1]);
        return Z;
      }
    }
    _getRadialGradient() {
      return this._getCache(f, this.__getRadialGradient);
    }
    __getRadialGradient() {
      const T = this.fillRadialGradientColorStops();
      if (T) {
        const O = u(), G = this.fillRadialGradientStartPoint(), $ = this.fillRadialGradientEndPoint(), Z = O.createRadialGradient(G.x, G.y, this.fillRadialGradientStartRadius(), $.x, $.y, this.fillRadialGradientEndRadius());
        for (let Y = 0; Y < T.length; Y += 2)
          Z.addColorStop(T[Y], T[Y + 1]);
        return Z;
      }
    }
    getShadowRGBA() {
      return this._getCache(h, this._getShadowRGBA);
    }
    _getShadowRGBA() {
      if (!this.hasShadow())
        return;
      const T = e.Util.colorToRGBA(this.shadowColor());
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
      const O = this.getStage();
      if (!O)
        return !1;
      const G = O.bufferHitCanvas;
      return G.getContext().clear(), this.drawHit(G, void 0, !0), G.context.getImageData(Math.round(T.x), Math.round(T.y), 1, 1).data[3] > 0;
    }
    destroy() {
      return s.Node.prototype.destroy.call(this), delete n.shapes[this.colorKey], delete this.colorKey, this;
    }
    _useBufferCanvas(T) {
      var O;
      if (!((O = this.attrs.perfectDrawEnabled) !== null && O !== void 0 ? O : !0))
        return !1;
      const $ = T || this.hasFill(), Z = this.hasStroke(), Y = this.getAbsoluteOpacity() !== 1;
      if ($ && Z && Y)
        return !0;
      const it = this.hasShadow(), z = this.shadowForStrokeEnabled();
      return !!($ && Z && it && z);
    }
    setStrokeHitEnabled(T) {
      e.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), T ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
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
      let O = !1, G = this.getParent();
      for (; G; ) {
        if (G.isCached()) {
          O = !0;
          break;
        }
        G = G.getParent();
      }
      const $ = T.skipTransform, Z = T.relativeTo || O && this.getStage() || void 0, Y = this.getSelfRect(), z = !T.skipStroke && this.hasStroke() && this.strokeWidth() || 0, V = Y.width + z, lt = Y.height + z, Q = !T.skipShadow && this.hasShadow(), rt = Q ? this.shadowOffsetX() : 0, X = Q ? this.shadowOffsetY() : 0, Pt = V + Math.abs(rt), Ut = lt + Math.abs(X), qt = Q && this.shadowBlur() || 0, ct = Pt + qt * 2, P = Ut + qt * 2, D = {
        width: ct,
        height: P,
        x: -(z / 2 + qt) + Math.min(rt, 0) + Y.x,
        y: -(z / 2 + qt) + Math.min(X, 0) + Y.y
      };
      return $ ? D : this._transformedRect(D, Z);
    }
    drawScene(T, O, G) {
      const $ = this.getLayer(), Z = T || $.getCanvas(), Y = Z.getContext(), it = this._getCanvasCache(), z = this.getSceneFunc(), V = this.hasShadow();
      let lt;
      const Q = !1, rt = O === this;
      if (!this.isVisible() && !rt)
        return this;
      if (it) {
        Y.save();
        const X = this.getAbsoluteTransform(O).getMatrix();
        return Y.transform(X[0], X[1], X[2], X[3], X[4], X[5]), this._drawCachedSceneCanvas(Y), Y.restore(), this;
      }
      if (!z)
        return this;
      if (Y.save(), this._useBufferCanvas() && !Q) {
        lt = this.getStage();
        const X = G || lt.bufferCanvas, Pt = X.getContext();
        Pt.clear(), Pt.save(), Pt._applyLineJoin(this);
        const Ut = this.getAbsoluteTransform(O).getMatrix();
        Pt.transform(Ut[0], Ut[1], Ut[2], Ut[3], Ut[4], Ut[5]), z.call(this, Pt, this), Pt.restore();
        const qt = X.pixelRatio;
        V && Y._applyShadow(this), Y._applyOpacity(this), Y._applyGlobalCompositeOperation(this), Y.drawImage(X._canvas, X.x || 0, X.y || 0, X.width / qt, X.height / qt);
      } else {
        if (Y._applyLineJoin(this), !rt) {
          const X = this.getAbsoluteTransform(O).getMatrix();
          Y.transform(X[0], X[1], X[2], X[3], X[4], X[5]), Y._applyOpacity(this), Y._applyGlobalCompositeOperation(this);
        }
        V && Y._applyShadow(this), z.call(this, Y, this);
      }
      return Y.restore(), this;
    }
    drawHit(T, O, G = !1) {
      if (!this.shouldDrawHit(O, G))
        return this;
      const $ = this.getLayer(), Z = T || $.hitCanvas, Y = Z && Z.getContext(), it = this.hitFunc() || this.sceneFunc(), z = this._getCanvasCache(), V = z && z.hit;
      if (this.colorKey || e.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), V) {
        Y.save();
        const Q = this.getAbsoluteTransform(O).getMatrix();
        return Y.transform(Q[0], Q[1], Q[2], Q[3], Q[4], Q[5]), this._drawCachedHitCanvas(Y), Y.restore(), this;
      }
      if (!it)
        return this;
      if (Y.save(), Y._applyLineJoin(this), !(this === O)) {
        const Q = this.getAbsoluteTransform(O).getMatrix();
        Y.transform(Q[0], Q[1], Q[2], Q[3], Q[4], Q[5]);
      }
      return it.call(this, Y, this), Y.restore(), this;
    }
    drawHitFromCache(T = 0) {
      const O = this._getCanvasCache(), G = this._getCachedSceneCanvas(), $ = O.hit, Z = $.getContext(), Y = $.getWidth(), it = $.getHeight();
      Z.clear(), Z.drawImage(G._canvas, 0, 0, Y, it);
      try {
        const z = Z.getImageData(0, 0, Y, it), V = z.data, lt = V.length, Q = e.Util._hexToRgb(this.colorKey);
        for (let rt = 0; rt < lt; rt += 4)
          V[rt + 3] > T ? (V[rt] = Q.r, V[rt + 1] = Q.g, V[rt + 2] = Q.b, V[rt + 3] = 255) : V[rt + 3] = 0;
        Z.putImageData(z, 0, 0);
      } catch (z) {
        e.Util.error("Unable to draw hit graph from cached scene canvas. " + z.message);
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
  n.Shape = w, w.prototype._fillFunc = m, w.prototype._strokeFunc = v, w.prototype._fillFuncHit = S, w.prototype._strokeFuncHit = x, w.prototype._centroid = !1, w.prototype.nodeType = "Shape", (0, o._registerNode)(w), w.prototype.eventListeners = {}, w.prototype.on.call(w.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", d), w.prototype.on.call(w.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", p), w.prototype.on.call(w.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", b), w.prototype.on.call(w.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", E), w.prototype.on.call(w.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", R), i.Factory.addGetterSetter(w, "stroke", void 0, (0, r.getStringOrGradientValidator)()), i.Factory.addGetterSetter(w, "strokeWidth", 2, (0, r.getNumberValidator)()), i.Factory.addGetterSetter(w, "fillAfterStrokeEnabled", !1), i.Factory.addGetterSetter(w, "hitStrokeWidth", "auto", (0, r.getNumberOrAutoValidator)()), i.Factory.addGetterSetter(w, "strokeHitEnabled", !0, (0, r.getBooleanValidator)()), i.Factory.addGetterSetter(w, "perfectDrawEnabled", !0, (0, r.getBooleanValidator)()), i.Factory.addGetterSetter(w, "shadowForStrokeEnabled", !0, (0, r.getBooleanValidator)()), i.Factory.addGetterSetter(w, "lineJoin"), i.Factory.addGetterSetter(w, "lineCap"), i.Factory.addGetterSetter(w, "sceneFunc"), i.Factory.addGetterSetter(w, "hitFunc"), i.Factory.addGetterSetter(w, "dash"), i.Factory.addGetterSetter(w, "dashOffset", 0, (0, r.getNumberValidator)()), i.Factory.addGetterSetter(w, "shadowColor", void 0, (0, r.getStringValidator)()), i.Factory.addGetterSetter(w, "shadowBlur", 0, (0, r.getNumberValidator)()), i.Factory.addGetterSetter(w, "shadowOpacity", 1, (0, r.getNumberValidator)()), i.Factory.addComponentsGetterSetter(w, "shadowOffset", ["x", "y"]), i.Factory.addGetterSetter(w, "shadowOffsetX", 0, (0, r.getNumberValidator)()), i.Factory.addGetterSetter(w, "shadowOffsetY", 0, (0, r.getNumberValidator)()), i.Factory.addGetterSetter(w, "fillPatternImage"), i.Factory.addGetterSetter(w, "fill", void 0, (0, r.getStringOrGradientValidator)()), i.Factory.addGetterSetter(w, "fillPatternX", 0, (0, r.getNumberValidator)()), i.Factory.addGetterSetter(w, "fillPatternY", 0, (0, r.getNumberValidator)()), i.Factory.addGetterSetter(w, "fillLinearGradientColorStops"), i.Factory.addGetterSetter(w, "strokeLinearGradientColorStops"), i.Factory.addGetterSetter(w, "fillRadialGradientStartRadius", 0), i.Factory.addGetterSetter(w, "fillRadialGradientEndRadius", 0), i.Factory.addGetterSetter(w, "fillRadialGradientColorStops"), i.Factory.addGetterSetter(w, "fillPatternRepeat", "repeat"), i.Factory.addGetterSetter(w, "fillEnabled", !0), i.Factory.addGetterSetter(w, "strokeEnabled", !0), i.Factory.addGetterSetter(w, "shadowEnabled", !0), i.Factory.addGetterSetter(w, "dashEnabled", !0), i.Factory.addGetterSetter(w, "strokeScaleEnabled", !0), i.Factory.addGetterSetter(w, "fillPriority", "color"), i.Factory.addComponentsGetterSetter(w, "fillPatternOffset", ["x", "y"]), i.Factory.addGetterSetter(w, "fillPatternOffsetX", 0, (0, r.getNumberValidator)()), i.Factory.addGetterSetter(w, "fillPatternOffsetY", 0, (0, r.getNumberValidator)()), i.Factory.addComponentsGetterSetter(w, "fillPatternScale", ["x", "y"]), i.Factory.addGetterSetter(w, "fillPatternScaleX", 1, (0, r.getNumberValidator)()), i.Factory.addGetterSetter(w, "fillPatternScaleY", 1, (0, r.getNumberValidator)()), i.Factory.addComponentsGetterSetter(w, "fillLinearGradientStartPoint", [
    "x",
    "y"
  ]), i.Factory.addComponentsGetterSetter(w, "strokeLinearGradientStartPoint", [
    "x",
    "y"
  ]), i.Factory.addGetterSetter(w, "fillLinearGradientStartPointX", 0), i.Factory.addGetterSetter(w, "strokeLinearGradientStartPointX", 0), i.Factory.addGetterSetter(w, "fillLinearGradientStartPointY", 0), i.Factory.addGetterSetter(w, "strokeLinearGradientStartPointY", 0), i.Factory.addComponentsGetterSetter(w, "fillLinearGradientEndPoint", [
    "x",
    "y"
  ]), i.Factory.addComponentsGetterSetter(w, "strokeLinearGradientEndPoint", [
    "x",
    "y"
  ]), i.Factory.addGetterSetter(w, "fillLinearGradientEndPointX", 0), i.Factory.addGetterSetter(w, "strokeLinearGradientEndPointX", 0), i.Factory.addGetterSetter(w, "fillLinearGradientEndPointY", 0), i.Factory.addGetterSetter(w, "strokeLinearGradientEndPointY", 0), i.Factory.addComponentsGetterSetter(w, "fillRadialGradientStartPoint", [
    "x",
    "y"
  ]), i.Factory.addGetterSetter(w, "fillRadialGradientStartPointX", 0), i.Factory.addGetterSetter(w, "fillRadialGradientStartPointY", 0), i.Factory.addComponentsGetterSetter(w, "fillRadialGradientEndPoint", [
    "x",
    "y"
  ]), i.Factory.addGetterSetter(w, "fillRadialGradientEndPointX", 0), i.Factory.addGetterSetter(w, "fillRadialGradientEndPointY", 0), i.Factory.addGetterSetter(w, "fillPatternRotation", 0), i.Factory.addGetterSetter(w, "fillRule", void 0, (0, r.getStringValidator)()), i.Factory.backCompat(w, {
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
})(zt);
Object.defineProperty(Vi, "__esModule", { value: !0 });
Vi.Layer = void 0;
const Ue = Bt, Br = Rn, $n = Gt, qo = gt, Ja = Ae, sf = et, rf = zt, of = dt, af = "#", lf = "beforeDraw", cf = "draw", jc = [
  { x: 0, y: 0 },
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
  { x: -1, y: 1 }
], hf = jc.length;
class ci extends Br.Container {
  constructor(t) {
    super(t), this.canvas = new Ja.SceneCanvas(), this.hitCanvas = new Ja.HitCanvas({
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
    const e = this.getStage();
    return e && e.content && (e.content.removeChild(this.getNativeCanvasElement()), t < e.children.length - 1 ? e.content.insertBefore(this.getNativeCanvasElement(), e.children[t + 1].getCanvas()._canvas) : e.content.appendChild(this.getNativeCanvasElement())), this;
  }
  moveToTop() {
    $n.Node.prototype.moveToTop.call(this);
    const t = this.getStage();
    return t && t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.appendChild(this.getNativeCanvasElement())), !0;
  }
  moveUp() {
    if (!$n.Node.prototype.moveUp.call(this))
      return !1;
    const e = this.getStage();
    return !e || !e.content ? !1 : (e.content.removeChild(this.getNativeCanvasElement()), this.index < e.children.length - 1 ? e.content.insertBefore(this.getNativeCanvasElement(), e.children[this.index + 1].getCanvas()._canvas) : e.content.appendChild(this.getNativeCanvasElement()), !0);
  }
  moveDown() {
    if ($n.Node.prototype.moveDown.call(this)) {
      const t = this.getStage();
      if (t) {
        const e = t.children;
        t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.insertBefore(this.getNativeCanvasElement(), e[this.index + 1].getCanvas()._canvas));
      }
      return !0;
    }
    return !1;
  }
  moveToBottom() {
    if ($n.Node.prototype.moveToBottom.call(this)) {
      const t = this.getStage();
      if (t) {
        const e = t.children;
        t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.insertBefore(this.getNativeCanvasElement(), e[1].getCanvas()._canvas));
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
    return $n.Node.prototype.remove.call(this), t && t.parentNode && Ue.Util._isInDocument(t) && t.parentNode.removeChild(t), this;
  }
  getStage() {
    return this.parent;
  }
  setSize({ width: t, height: e }) {
    return this.canvas.setSize(t, e), this.hitCanvas.setSize(t, e), this._setSmoothEnabled(), this;
  }
  _validateAdd(t) {
    const e = t.getType();
    e !== "Group" && e !== "Shape" && Ue.Util.throw("You may only add groups and shapes to a layer.");
  }
  _toKonvaCanvas(t) {
    return t = t || {}, t.width = t.width || this.getWidth(), t.height = t.height || this.getHeight(), t.x = t.x !== void 0 ? t.x : this.x(), t.y = t.y !== void 0 ? t.y : this.y(), $n.Node.prototype._toKonvaCanvas.call(this, t);
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
    Ue.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
  }
  getHeight() {
    if (this.parent)
      return this.parent.height();
  }
  setHeight() {
    Ue.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
  }
  batchDraw() {
    return this._waitingForDraw || (this._waitingForDraw = !0, Ue.Util.requestAnimFrame(() => {
      this.draw(), this._waitingForDraw = !1;
    })), this;
  }
  getIntersection(t) {
    if (!this.isListening() || !this.isVisible())
      return null;
    let e = 1, i = !1;
    for (; ; ) {
      for (let s = 0; s < hf; s++) {
        const r = jc[s], o = this._getIntersection({
          x: t.x + r.x * e,
          y: t.y + r.y * e
        }), a = o.shape;
        if (a)
          return a;
        if (i = !!o.antialiased, !o.antialiased)
          break;
      }
      if (i)
        e += 1;
      else
        return null;
    }
  }
  _getIntersection(t) {
    const e = this.hitCanvas.pixelRatio, i = this.hitCanvas.context.getImageData(Math.round(t.x * e), Math.round(t.y * e), 1, 1).data, s = i[3];
    if (s === 255) {
      const r = Ue.Util._rgbToHex(i[0], i[1], i[2]), o = rf.shapes[af + r];
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
  drawScene(t, e, i) {
    const s = this.getLayer(), r = t || s && s.getCanvas();
    return this._fire(lf, {
      node: this
    }), this.clearBeforeDraw() && r.getContext().clear(), Br.Container.prototype.drawScene.call(this, r, e, i), this._fire(cf, {
      node: this
    }), this;
  }
  drawHit(t, e) {
    const i = this.getLayer(), s = t || i && i.hitCanvas;
    return i && i.clearBeforeDraw() && i.getHitCanvas().getContext().clear(), Br.Container.prototype.drawHit.call(this, s, e), this;
  }
  enableHitGraph() {
    return this.hitGraphEnabled(!0), this;
  }
  disableHitGraph() {
    return this.hitGraphEnabled(!1), this;
  }
  setHitGraphEnabled(t) {
    Ue.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(t);
  }
  getHitGraphEnabled(t) {
    return Ue.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
  }
  toggleHitCanvas() {
    if (!this.parent || !this.parent.content)
      return;
    const t = this.parent;
    !!this.hitCanvas._canvas.parentNode ? t.content.removeChild(this.hitCanvas._canvas) : t.content.appendChild(this.hitCanvas._canvas);
  }
  destroy() {
    return Ue.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy();
  }
}
Vi.Layer = ci;
ci.prototype.nodeType = "Layer";
(0, of._registerNode)(ci);
qo.Factory.addGetterSetter(ci, "imageSmoothingEnabled", !0);
qo.Factory.addGetterSetter(ci, "clearBeforeDraw", !0);
qo.Factory.addGetterSetter(ci, "hitGraphEnabled", !0, (0, sf.getBooleanValidator)());
var Us = {};
Object.defineProperty(Us, "__esModule", { value: !0 });
Us.FastLayer = void 0;
const df = Bt, uf = Vi, ff = dt;
class Zo extends uf.Layer {
  constructor(t) {
    super(t), this.listening(!1), df.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
  }
}
Us.FastLayer = Zo;
Zo.prototype.nodeType = "FastLayer";
(0, ff._registerNode)(Zo);
var hi = {};
Object.defineProperty(hi, "__esModule", { value: !0 });
hi.Group = void 0;
const gf = Bt, pf = Rn, _f = dt;
class Jo extends pf.Container {
  _validateAdd(t) {
    const e = t.getType();
    e !== "Group" && e !== "Shape" && gf.Util.throw("You may only add groups and shapes to groups.");
  }
}
hi.Group = Jo;
Jo.prototype.nodeType = "Group";
(0, _f._registerNode)(Jo);
var di = {};
Object.defineProperty(di, "__esModule", { value: !0 });
di.Animation = void 0;
const Ur = dt, Qa = Bt, Vr = function() {
  return Ur.glob.performance && Ur.glob.performance.now ? function() {
    return Ur.glob.performance.now();
  } : function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
}();
class Le {
  constructor(t, e) {
    this.id = Le.animIdCounter++, this.frame = {
      time: 0,
      timeDiff: 0,
      lastTime: Vr(),
      frameRate: 0
    }, this.func = t, this.setLayers(e);
  }
  setLayers(t) {
    let e = [];
    return t && (e = Array.isArray(t) ? t : [t]), this.layers = e, this;
  }
  getLayers() {
    return this.layers;
  }
  addLayer(t) {
    const e = this.layers, i = e.length;
    for (let s = 0; s < i; s++)
      if (e[s]._id === t._id)
        return !1;
    return this.layers.push(t), !0;
  }
  isRunning() {
    const e = Le.animations, i = e.length;
    for (let s = 0; s < i; s++)
      if (e[s].id === this.id)
        return !0;
    return !1;
  }
  start() {
    return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = Vr(), Le._addAnimation(this), this;
  }
  stop() {
    return Le._removeAnimation(this), this;
  }
  _updateFrameObject(t) {
    this.frame.timeDiff = t - this.frame.lastTime, this.frame.lastTime = t, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff;
  }
  static _addAnimation(t) {
    this.animations.push(t), this._handleAnimation();
  }
  static _removeAnimation(t) {
    const e = t.id, i = this.animations, s = i.length;
    for (let r = 0; r < s; r++)
      if (i[r].id === e) {
        this.animations.splice(r, 1);
        break;
      }
  }
  static _runFrames() {
    const t = {}, e = this.animations;
    for (let i = 0; i < e.length; i++) {
      const s = e[i], r = s.layers, o = s.func;
      s._updateFrameObject(Vr());
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
    const t = Le;
    t.animations.length ? (t._runFrames(), Qa.Util.requestAnimFrame(t._animationLoop)) : t.animRunning = !1;
  }
  static _handleAnimation() {
    this.animRunning || (this.animRunning = !0, Qa.Util.requestAnimFrame(this._animationLoop));
  }
}
di.Animation = Le;
Le.animations = [];
Le.animIdCounter = 0;
Le.animRunning = !1;
var Yc = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.Easings = n.Tween = void 0;
  const t = Bt, e = di, i = Gt, s = dt, r = {
    node: 1,
    duration: 1,
    easing: 1,
    onFinish: 1,
    yoyo: 1
  }, o = 1, a = 2, l = 3, h = ["fill", "stroke", "shadowColor"];
  let c = 0;
  class g {
    constructor(u, m, v, S, x, d, p) {
      this.prop = u, this.propFunc = m, this.begin = S, this._pos = S, this.duration = d, this._change = 0, this.prevPos = 0, this.yoyo = p, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = v, this._change = x - this.begin, this.pause();
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
      const m = this, v = u.node, S = v._id, x = u.easing || n.Easings.Linear, d = !!u.yoyo;
      let p, b;
      typeof u.duration > "u" ? p = 0.3 : u.duration === 0 ? p = 1e-3 : p = u.duration, this.node = v, this._id = c++;
      const E = v.getLayer() || (v instanceof s.Konva.Stage ? v.getLayers() : null);
      E || t.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new e.Animation(function() {
        m.tween.onEnterFrame();
      }, E), this.tween = new g(b, function(R) {
        m._tweenFunc(R);
      }, x, 0, 1, p * 1e3, d), this._addListeners(), f.attrs[S] || (f.attrs[S] = {}), f.attrs[S][this._id] || (f.attrs[S][this._id] = {}), f.tweens[S] || (f.tweens[S] = {});
      for (b in u)
        r[b] === void 0 && this._addAttr(b, u[b]);
      this.reset(), this.onFinish = u.onFinish, this.onReset = u.onReset, this.onUpdate = u.onUpdate;
    }
    _addAttr(u, m) {
      const v = this.node, S = v._id;
      let x, d, p, b, E;
      const R = f.tweens[S][u];
      R && delete f.attrs[S][R][u];
      let w = v.getAttr(u);
      if (t.Util._isArray(m))
        if (x = [], d = Math.max(m.length, w.length), u === "points" && m.length !== w.length && (m.length > w.length ? (b = w, w = t.Util._prepareArrayForTween(w, m, v.closed())) : (p = m, m = t.Util._prepareArrayForTween(m, w, v.closed()))), u.indexOf("fill") === 0)
          for (let k = 0; k < d; k++)
            if (k % 2 === 0)
              x.push(m[k] - w[k]);
            else {
              const T = t.Util.colorToRGBA(w[k]);
              E = t.Util.colorToRGBA(m[k]), w[k] = T, x.push({
                r: E.r - T.r,
                g: E.g - T.g,
                b: E.b - T.b,
                a: E.a - T.a
              });
            }
        else
          for (let k = 0; k < d; k++)
            x.push(m[k] - w[k]);
      else
        h.indexOf(u) !== -1 ? (w = t.Util.colorToRGBA(w), E = t.Util.colorToRGBA(m), x = {
          r: E.r - w.r,
          g: E.g - w.g,
          b: E.b - w.b,
          a: E.a - w.a
        }) : x = m - w;
      f.attrs[S][this._id][u] = {
        start: w,
        diff: x,
        end: m,
        trueEnd: p,
        trueStart: b
      }, f.tweens[S][u] = this._id;
    }
    _tweenFunc(u) {
      const m = this.node, v = f.attrs[m._id][this._id];
      let S, x, d, p, b, E, R, w;
      for (S in v) {
        if (x = v[S], d = x.start, p = x.diff, w = x.end, t.Util._isArray(d))
          if (b = [], R = Math.max(d.length, w.length), S.indexOf("fill") === 0)
            for (E = 0; E < R; E++)
              E % 2 === 0 ? b.push((d[E] || 0) + p[E] * u) : b.push("rgba(" + Math.round(d[E].r + p[E].r * u) + "," + Math.round(d[E].g + p[E].g * u) + "," + Math.round(d[E].b + p[E].b * u) + "," + (d[E].a + p[E].a * u) + ")");
          else
            for (E = 0; E < R; E++)
              b.push((d[E] || 0) + p[E] * u);
        else
          h.indexOf(S) !== -1 ? b = "rgba(" + Math.round(d.r + p.r * u) + "," + Math.round(d.g + p.g * u) + "," + Math.round(d.b + p.b * u) + "," + (d.a + p.a * u) + ")" : b = d + p * u;
        m.setAttr(S, b);
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
      const u = this.node._id, m = this._id, v = f.tweens[u];
      this.pause(), this.anim && this.anim.stop();
      for (const S in v)
        delete f.tweens[u][S];
      delete f.attrs[u][m], f.tweens[u] && (Object.keys(f.tweens[u]).length === 0 && delete f.tweens[u], Object.keys(f.attrs[u]).length === 0 && delete f.attrs[u]);
    }
  }
  n.Tween = f, f.attrs = {}, f.tweens = {}, i.Node.prototype.to = function(_) {
    const u = _.onFinish;
    _.node = this, _.onFinish = function() {
      this.destroy(), u && u();
    }, new f(_).play();
  }, n.Easings = {
    BackEaseIn(_, u, m, v) {
      return m * (_ /= v) * _ * ((1.70158 + 1) * _ - 1.70158) + u;
    },
    BackEaseOut(_, u, m, v) {
      return m * ((_ = _ / v - 1) * _ * ((1.70158 + 1) * _ + 1.70158) + 1) + u;
    },
    BackEaseInOut(_, u, m, v) {
      let S = 1.70158;
      return (_ /= v / 2) < 1 ? m / 2 * (_ * _ * (((S *= 1.525) + 1) * _ - S)) + u : m / 2 * ((_ -= 2) * _ * (((S *= 1.525) + 1) * _ + S) + 2) + u;
    },
    ElasticEaseIn(_, u, m, v, S, x) {
      let d = 0;
      return _ === 0 ? u : (_ /= v) === 1 ? u + m : (x || (x = v * 0.3), !S || S < Math.abs(m) ? (S = m, d = x / 4) : d = x / (2 * Math.PI) * Math.asin(m / S), -(S * Math.pow(2, 10 * (_ -= 1)) * Math.sin((_ * v - d) * (2 * Math.PI) / x)) + u);
    },
    ElasticEaseOut(_, u, m, v, S, x) {
      let d = 0;
      return _ === 0 ? u : (_ /= v) === 1 ? u + m : (x || (x = v * 0.3), !S || S < Math.abs(m) ? (S = m, d = x / 4) : d = x / (2 * Math.PI) * Math.asin(m / S), S * Math.pow(2, -10 * _) * Math.sin((_ * v - d) * (2 * Math.PI) / x) + m + u);
    },
    ElasticEaseInOut(_, u, m, v, S, x) {
      let d = 0;
      return _ === 0 ? u : (_ /= v / 2) === 2 ? u + m : (x || (x = v * (0.3 * 1.5)), !S || S < Math.abs(m) ? (S = m, d = x / 4) : d = x / (2 * Math.PI) * Math.asin(m / S), _ < 1 ? -0.5 * (S * Math.pow(2, 10 * (_ -= 1)) * Math.sin((_ * v - d) * (2 * Math.PI) / x)) + u : S * Math.pow(2, -10 * (_ -= 1)) * Math.sin((_ * v - d) * (2 * Math.PI) / x) * 0.5 + m + u);
    },
    BounceEaseOut(_, u, m, v) {
      return (_ /= v) < 1 / 2.75 ? m * (7.5625 * _ * _) + u : _ < 2 / 2.75 ? m * (7.5625 * (_ -= 1.5 / 2.75) * _ + 0.75) + u : _ < 2.5 / 2.75 ? m * (7.5625 * (_ -= 2.25 / 2.75) * _ + 0.9375) + u : m * (7.5625 * (_ -= 2.625 / 2.75) * _ + 0.984375) + u;
    },
    BounceEaseIn(_, u, m, v) {
      return m - n.Easings.BounceEaseOut(v - _, 0, m, v) + u;
    },
    BounceEaseInOut(_, u, m, v) {
      return _ < v / 2 ? n.Easings.BounceEaseIn(_ * 2, 0, m, v) * 0.5 + u : n.Easings.BounceEaseOut(_ * 2 - v, 0, m, v) * 0.5 + m * 0.5 + u;
    },
    EaseIn(_, u, m, v) {
      return m * (_ /= v) * _ + u;
    },
    EaseOut(_, u, m, v) {
      return -m * (_ /= v) * (_ - 2) + u;
    },
    EaseInOut(_, u, m, v) {
      return (_ /= v / 2) < 1 ? m / 2 * _ * _ + u : -m / 2 * (--_ * (_ - 2) - 1) + u;
    },
    StrongEaseIn(_, u, m, v) {
      return m * (_ /= v) * _ * _ * _ * _ + u;
    },
    StrongEaseOut(_, u, m, v) {
      return m * ((_ = _ / v - 1) * _ * _ * _ * _ + 1) + u;
    },
    StrongEaseInOut(_, u, m, v) {
      return (_ /= v / 2) < 1 ? m / 2 * _ * _ * _ * _ * _ + u : m / 2 * ((_ -= 2) * _ * _ * _ * _ + 2) + u;
    },
    Linear(_, u, m, v) {
      return m * _ / v + u;
    }
  };
})(Yc);
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.Konva = void 0;
  const t = dt, e = Bt, i = Gt, s = Rn, r = Vc, o = Vi, a = Us, l = hi, h = Gs, c = zt, g = di, f = Yc, _ = Ye, u = Ae;
  n.Konva = e.Util._assign(t.Konva, {
    Util: e.Util,
    Transform: e.Transform,
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
  }), n.default = n.Konva;
})(Ic);
var Vs = {};
Object.defineProperty(Vs, "__esModule", { value: !0 });
Vs.Arc = void 0;
const Hs = gt, mf = zt, tl = dt, $s = et, vf = dt;
class qe extends mf.Shape {
  _sceneFunc(t) {
    const e = tl.Konva.getAngle(this.angle()), i = this.clockwise();
    t.beginPath(), t.arc(0, 0, this.outerRadius(), 0, e, i), t.arc(0, 0, this.innerRadius(), e, 0, !i), t.closePath(), t.fillStrokeShape(this);
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
    const t = this.innerRadius(), e = this.outerRadius(), i = this.clockwise(), s = tl.Konva.getAngle(i ? 360 - this.angle() : this.angle()), r = Math.cos(Math.min(s, Math.PI)), o = 1, a = Math.sin(Math.min(Math.max(Math.PI, s), 3 * Math.PI / 2)), l = Math.sin(Math.min(s, Math.PI / 2)), h = r * (r > 0 ? t : e), c = o * e, g = a * (a > 0 ? t : e), f = l * (l > 0 ? e : t);
    return {
      x: h,
      y: i ? -1 * f : g,
      width: c - h,
      height: f - g
    };
  }
}
Vs.Arc = qe;
qe.prototype._centroid = !0;
qe.prototype.className = "Arc";
qe.prototype._attrsAffectingSize = [
  "innerRadius",
  "outerRadius",
  "angle",
  "clockwise"
];
(0, vf._registerNode)(qe);
Hs.Factory.addGetterSetter(qe, "innerRadius", 0, (0, $s.getNumberValidator)());
Hs.Factory.addGetterSetter(qe, "outerRadius", 0, (0, $s.getNumberValidator)());
Hs.Factory.addGetterSetter(qe, "angle", 0, (0, $s.getNumberValidator)());
Hs.Factory.addGetterSetter(qe, "clockwise", !1, (0, $s.getBooleanValidator)());
var js = {}, Hi = {};
Object.defineProperty(Hi, "__esModule", { value: !0 });
Hi.Line = void 0;
const Ys = gt, yf = dt, bf = zt, Wc = et;
function _o(n, t, e, i, s, r, o) {
  const a = Math.sqrt(Math.pow(e - n, 2) + Math.pow(i - t, 2)), l = Math.sqrt(Math.pow(s - e, 2) + Math.pow(r - i, 2)), h = o * a / (a + l), c = o * l / (a + l), g = e - h * (s - n), f = i - h * (r - t), _ = e + c * (s - n), u = i + c * (r - t);
  return [g, f, _, u];
}
function el(n, t) {
  const e = n.length, i = [];
  for (let s = 2; s < e - 2; s += 2) {
    const r = _o(n[s - 2], n[s - 1], n[s], n[s + 1], n[s + 2], n[s + 3], t);
    isNaN(r[0]) || (i.push(r[0]), i.push(r[1]), i.push(n[s]), i.push(n[s + 1]), i.push(r[2]), i.push(r[3]));
  }
  return i;
}
class gn extends bf.Shape {
  constructor(t) {
    super(t), this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
      this._clearCache("tensionPoints");
    });
  }
  _sceneFunc(t) {
    const e = this.points(), i = e.length, s = this.tension(), r = this.closed(), o = this.bezier();
    if (!i)
      return;
    let a = 0;
    if (t.beginPath(), t.moveTo(e[0], e[1]), s !== 0 && i > 4) {
      const l = this.getTensionPoints(), h = l.length;
      for (a = r ? 0 : 4, r || t.quadraticCurveTo(l[0], l[1], l[2], l[3]); a < h - 2; )
        t.bezierCurveTo(l[a++], l[a++], l[a++], l[a++], l[a++], l[a++]);
      r || t.quadraticCurveTo(l[h - 2], l[h - 1], e[i - 2], e[i - 1]);
    } else if (o)
      for (a = 2; a < i; )
        t.bezierCurveTo(e[a++], e[a++], e[a++], e[a++], e[a++], e[a++]);
    else
      for (a = 2; a < i; a += 2)
        t.lineTo(e[a], e[a + 1]);
    r ? (t.closePath(), t.fillStrokeShape(this)) : t.strokeShape(this);
  }
  getTensionPoints() {
    return this._getCache("tensionPoints", this._getTensionPoints);
  }
  _getTensionPoints() {
    return this.closed() ? this._getTensionPointsClosed() : el(this.points(), this.tension());
  }
  _getTensionPointsClosed() {
    const t = this.points(), e = t.length, i = this.tension(), s = _o(t[e - 2], t[e - 1], t[0], t[1], t[2], t[3], i), r = _o(t[e - 4], t[e - 3], t[e - 2], t[e - 1], t[0], t[1], i), o = el(t, i);
    return [s[2], s[3]].concat(o).concat([
      r[0],
      r[1],
      t[e - 2],
      t[e - 1],
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
    let e = t[0], i = t[0], s = t[1], r = t[1], o, a;
    for (let l = 0; l < t.length / 2; l++)
      o = t[l * 2], a = t[l * 2 + 1], e = Math.min(e, o), i = Math.max(i, o), s = Math.min(s, a), r = Math.max(r, a);
    return {
      x: e,
      y: s,
      width: i - e,
      height: r - s
    };
  }
}
Hi.Line = gn;
gn.prototype.className = "Line";
gn.prototype._attrsAffectingSize = ["points", "bezier", "tension"];
(0, yf._registerNode)(gn);
Ys.Factory.addGetterSetter(gn, "closed", !1);
Ys.Factory.addGetterSetter(gn, "bezier", !1);
Ys.Factory.addGetterSetter(gn, "tension", 0, (0, Wc.getNumberValidator)());
Ys.Factory.addGetterSetter(gn, "points", [], (0, Wc.getNumberArrayValidator)());
var ui = {}, Xc = {};
(function(n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), n.t2length = n.getQuadraticArcLength = n.getCubicArcLength = n.binomialCoefficients = n.cValues = n.tValues = void 0, n.tValues = [
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
  ], n.cValues = [
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
  ], n.binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]];
  const t = (o, a, l) => {
    let h, c;
    const f = l / 2;
    h = 0;
    for (let _ = 0; _ < 20; _++)
      c = f * n.tValues[20][_] + f, h += n.cValues[20][_] * i(o, a, c);
    return f * h;
  };
  n.getCubicArcLength = t;
  const e = (o, a, l) => {
    l === void 0 && (l = 1);
    const h = o[0] - 2 * o[1] + o[2], c = a[0] - 2 * a[1] + a[2], g = 2 * o[1] - 2 * o[0], f = 2 * a[1] - 2 * a[0], _ = 4 * (h * h + c * c), u = 4 * (h * g + c * f), m = g * g + f * f;
    if (_ === 0)
      return l * Math.sqrt(Math.pow(o[2] - o[0], 2) + Math.pow(a[2] - a[0], 2));
    const v = u / (2 * _), S = m / _, x = l + v, d = S - v * v, p = x * x + d > 0 ? Math.sqrt(x * x + d) : 0, b = v * v + d > 0 ? Math.sqrt(v * v + d) : 0, E = v + Math.sqrt(v * v + d) !== 0 ? d * Math.log(Math.abs((x + p) / (v + b))) : 0;
    return Math.sqrt(_) / 2 * (x * p - v * b + E);
  };
  n.getQuadraticArcLength = e;
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
        g += n.binomialCoefficients[h][f] * Math.pow(1 - a, h - f) * Math.pow(a, f) * l[f];
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
        const m = l(c - g), v = Math.abs(o - m) / a;
        v < h ? (h = v, c -= g) : g /= 2;
      }
      if (f++, f > 500)
        break;
    }
    return c;
  };
  n.t2length = r;
})(Xc);
Object.defineProperty(ui, "__esModule", { value: !0 });
ui.Path = void 0;
const Sf = gt, wf = dt, Cf = zt, jn = Xc;
class Xt extends Cf.Shape {
  constructor(t) {
    super(t), this.dataArray = [], this.pathLength = 0, this._readDataAttribute(), this.on("dataChange.konva", function() {
      this._readDataAttribute();
    });
  }
  _readDataAttribute() {
    this.dataArray = Xt.parsePathData(this.data()), this.pathLength = Xt.getPathLength(this.dataArray);
  }
  _sceneFunc(t) {
    const e = this.dataArray;
    t.beginPath();
    let i = !1;
    for (let s = 0; s < e.length; s++) {
      const r = e[s].command, o = e[s].points;
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
          const a = o[0], l = o[1], h = o[2], c = o[3], g = o[4], f = o[5], _ = o[6], u = o[7], m = h > c ? h : c, v = h > c ? 1 : h / c, S = h > c ? c / h : 1;
          t.translate(a, l), t.rotate(_), t.scale(v, S), t.arc(0, 0, m, g, g + f, 1 - u), t.scale(1 / v, 1 / S), t.rotate(-_), t.translate(-a, -l);
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
            const u = Xt.getPointOnEllipticalArc(l.points[0], l.points[1], l.points[2], l.points[3], _, 0);
            t.push(u.x, u.y);
          }
        else
          for (let _ = h + f; _ < g; _ += f) {
            const u = Xt.getPointOnEllipticalArc(l.points[0], l.points[1], l.points[2], l.points[3], _, 0);
            t.push(u.x, u.y);
          }
      } else if (l.command === "C")
        for (let h = 0; h <= 1; h += 0.01) {
          const c = Xt.getPointOnCubicBezier(h, l.start.x, l.start.y, l.points[0], l.points[1], l.points[2], l.points[3], l.points[4], l.points[5]);
          t.push(c.x, c.y);
        }
      else
        t = t.concat(l.points);
    });
    let e = t[0], i = t[0], s = t[1], r = t[1], o, a;
    for (let l = 0; l < t.length / 2; l++)
      o = t[l * 2], a = t[l * 2 + 1], isNaN(o) || (e = Math.min(e, o), i = Math.max(i, o)), isNaN(a) || (s = Math.min(s, a), r = Math.max(r, a));
    return {
      x: e,
      y: s,
      width: i - e,
      height: r - s
    };
  }
  getLength() {
    return this.pathLength;
  }
  getPointAtLength(t) {
    return Xt.getPointAtLengthOfDataArray(t, this.dataArray);
  }
  static getLineLength(t, e, i, s) {
    return Math.sqrt((i - t) * (i - t) + (s - e) * (s - e));
  }
  static getPathLength(t) {
    let e = 0;
    for (let i = 0; i < t.length; ++i)
      e += t[i].pathLength;
    return e;
  }
  static getPointAtLengthOfDataArray(t, e) {
    let i, s = 0, r = e.length;
    if (!r)
      return null;
    for (; s < r && t > e[s].pathLength; )
      t -= e[s].pathLength, ++s;
    if (s === r)
      return i = e[s - 1].points.slice(-2), {
        x: i[0],
        y: i[1]
      };
    if (t < 0.01)
      return e[s].command === "M" ? (i = e[s].points.slice(0, 2), {
        x: i[0],
        y: i[1]
      }) : {
        x: e[s].start.x,
        y: e[s].start.y
      };
    const o = e[s], a = o.points;
    switch (o.command) {
      case "L":
        return Xt.getPointOnLine(t, o.start.x, o.start.y, a[0], a[1]);
      case "C":
        return Xt.getPointOnCubicBezier((0, jn.t2length)(t, Xt.getPathLength(e), (m) => (0, jn.getCubicArcLength)([o.start.x, a[0], a[2], a[4]], [o.start.y, a[1], a[3], a[5]], m)), o.start.x, o.start.y, a[0], a[1], a[2], a[3], a[4], a[5]);
      case "Q":
        return Xt.getPointOnQuadraticBezier((0, jn.t2length)(t, Xt.getPathLength(e), (m) => (0, jn.getQuadraticArcLength)([o.start.x, a[0], a[2]], [o.start.y, a[1], a[3]], m)), o.start.x, o.start.y, a[0], a[1], a[2], a[3]);
      case "A":
        const l = a[0], h = a[1], c = a[2], g = a[3], f = a[5], _ = a[6];
        let u = a[4];
        return u += f * t / o.pathLength, Xt.getPointOnEllipticalArc(l, h, c, g, u, _);
    }
    return null;
  }
  static getPointOnLine(t, e, i, s, r, o, a) {
    o = o ?? e, a = a ?? i;
    const l = this.getLineLength(e, i, s, r);
    if (l < 1e-10)
      return { x: e, y: i };
    if (s === e)
      return { x: o, y: a + (r > i ? t : -t) };
    const h = (r - i) / (s - e), c = Math.sqrt(t * t / (1 + h * h)) * (s < e ? -1 : 1), g = h * c;
    if (Math.abs(a - i - h * (o - e)) < 1e-10)
      return { x: o + c, y: a + g };
    const f = ((o - e) * (s - e) + (a - i) * (r - i)) / (l * l), _ = e + f * (s - e), u = i + f * (r - i), m = this.getLineLength(o, a, _, u), v = Math.sqrt(t * t - m * m), S = Math.sqrt(v * v / (1 + h * h)) * (s < e ? -1 : 1), x = h * S;
    return { x: _ + S, y: u + x };
  }
  static getPointOnCubicBezier(t, e, i, s, r, o, a, l, h) {
    function c(v) {
      return v * v * v;
    }
    function g(v) {
      return 3 * v * v * (1 - v);
    }
    function f(v) {
      return 3 * v * (1 - v) * (1 - v);
    }
    function _(v) {
      return (1 - v) * (1 - v) * (1 - v);
    }
    const u = l * c(t) + o * g(t) + s * f(t) + e * _(t), m = h * c(t) + a * g(t) + r * f(t) + i * _(t);
    return { x: u, y: m };
  }
  static getPointOnQuadraticBezier(t, e, i, s, r, o, a) {
    function l(_) {
      return _ * _;
    }
    function h(_) {
      return 2 * _ * (1 - _);
    }
    function c(_) {
      return (1 - _) * (1 - _);
    }
    const g = o * l(t) + s * h(t) + e * c(t), f = a * l(t) + r * h(t) + i * c(t);
    return { x: g, y: f };
  }
  static getPointOnEllipticalArc(t, e, i, s, r, o) {
    const a = Math.cos(o), l = Math.sin(o), h = {
      x: i * Math.cos(r),
      y: s * Math.sin(r)
    };
    return {
      x: t + (h.x * a - h.y * l),
      y: e + (h.x * l + h.y * a)
    };
  }
  static parsePathData(t) {
    if (!t)
      return [];
    let e = t;
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
    e = e.replace(new RegExp(" ", "g"), ",");
    for (let g = 0; g < i.length; g++)
      e = e.replace(new RegExp(i[g], "g"), "|" + i[g]);
    const s = e.split("|"), r = [], o = [];
    let a = 0, l = 0;
    const h = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
    let c;
    for (let g = 1; g < s.length; g++) {
      let f = s[g], _ = f.charAt(0);
      for (f = f.slice(1), o.length = 0; c = h.exec(f); )
        o.push(c[0]);
      const u = [];
      for (let m = 0, v = o.length; m < v; m++) {
        if (o[m] === "00") {
          u.push(0, 0);
          continue;
        }
        const S = parseFloat(o[m]);
        isNaN(S) ? u.push(0) : u.push(S);
      }
      for (; u.length > 0 && !isNaN(u[0]); ) {
        let m = "", v = [];
        const S = a, x = l;
        let d, p, b, E, R, w, k, T, O, G;
        switch (_) {
          case "l":
            a += u.shift(), l += u.shift(), m = "L", v.push(a, l);
            break;
          case "L":
            a = u.shift(), l = u.shift(), v.push(a, l);
            break;
          case "m":
            const $ = u.shift(), Z = u.shift();
            if (a += $, l += Z, m = "M", r.length > 2 && r[r.length - 1].command === "z") {
              for (let Y = r.length - 2; Y >= 0; Y--)
                if (r[Y].command === "M") {
                  a = r[Y].points[0] + $, l = r[Y].points[1] + Z;
                  break;
                }
            }
            v.push(a, l), _ = "l";
            break;
          case "M":
            a = u.shift(), l = u.shift(), m = "M", v.push(a, l), _ = "L";
            break;
          case "h":
            a += u.shift(), m = "L", v.push(a, l);
            break;
          case "H":
            a = u.shift(), m = "L", v.push(a, l);
            break;
          case "v":
            l += u.shift(), m = "L", v.push(a, l);
            break;
          case "V":
            l = u.shift(), m = "L", v.push(a, l);
            break;
          case "C":
            v.push(u.shift(), u.shift(), u.shift(), u.shift()), a = u.shift(), l = u.shift(), v.push(a, l);
            break;
          case "c":
            v.push(a + u.shift(), l + u.shift(), a + u.shift(), l + u.shift()), a += u.shift(), l += u.shift(), m = "C", v.push(a, l);
            break;
          case "S":
            p = a, b = l, d = r[r.length - 1], d.command === "C" && (p = a + (a - d.points[2]), b = l + (l - d.points[3])), v.push(p, b, u.shift(), u.shift()), a = u.shift(), l = u.shift(), m = "C", v.push(a, l);
            break;
          case "s":
            p = a, b = l, d = r[r.length - 1], d.command === "C" && (p = a + (a - d.points[2]), b = l + (l - d.points[3])), v.push(p, b, a + u.shift(), l + u.shift()), a += u.shift(), l += u.shift(), m = "C", v.push(a, l);
            break;
          case "Q":
            v.push(u.shift(), u.shift()), a = u.shift(), l = u.shift(), v.push(a, l);
            break;
          case "q":
            v.push(a + u.shift(), l + u.shift()), a += u.shift(), l += u.shift(), m = "Q", v.push(a, l);
            break;
          case "T":
            p = a, b = l, d = r[r.length - 1], d.command === "Q" && (p = a + (a - d.points[0]), b = l + (l - d.points[1])), a = u.shift(), l = u.shift(), m = "Q", v.push(p, b, a, l);
            break;
          case "t":
            p = a, b = l, d = r[r.length - 1], d.command === "Q" && (p = a + (a - d.points[0]), b = l + (l - d.points[1])), a += u.shift(), l += u.shift(), m = "Q", v.push(p, b, a, l);
            break;
          case "A":
            E = u.shift(), R = u.shift(), w = u.shift(), k = u.shift(), T = u.shift(), O = a, G = l, a = u.shift(), l = u.shift(), m = "A", v = this.convertEndpointToCenterParameterization(O, G, a, l, k, T, E, R, w);
            break;
          case "a":
            E = u.shift(), R = u.shift(), w = u.shift(), k = u.shift(), T = u.shift(), O = a, G = l, a += u.shift(), l += u.shift(), m = "A", v = this.convertEndpointToCenterParameterization(O, G, a, l, k, T, E, R, w);
            break;
        }
        r.push({
          command: m || _,
          points: v,
          start: {
            x: S,
            y: x
          },
          pathLength: this.calcLength(S, x, m || _, v)
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
  static calcLength(t, e, i, s) {
    let r, o, a, l;
    const h = Xt;
    switch (i) {
      case "L":
        return h.getLineLength(t, e, s[0], s[1]);
      case "C":
        return (0, jn.getCubicArcLength)([t, s[0], s[2], s[4]], [e, s[1], s[3], s[5]], 1);
      case "Q":
        return (0, jn.getQuadraticArcLength)([t, s[0], s[2]], [e, s[1], s[3]], 1);
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
  static convertEndpointToCenterParameterization(t, e, i, s, r, o, a, l, h) {
    const c = h * (Math.PI / 180), g = Math.cos(c) * (t - i) / 2 + Math.sin(c) * (e - s) / 2, f = -1 * Math.sin(c) * (t - i) / 2 + Math.cos(c) * (e - s) / 2, _ = g * g / (a * a) + f * f / (l * l);
    _ > 1 && (a *= Math.sqrt(_), l *= Math.sqrt(_));
    let u = Math.sqrt((a * a * (l * l) - a * a * (f * f) - l * l * (g * g)) / (a * a * (f * f) + l * l * (g * g)));
    r === o && (u *= -1), isNaN(u) && (u = 0);
    const m = u * a * f / l, v = u * -l * g / a, S = (t + i) / 2 + Math.cos(c) * m - Math.sin(c) * v, x = (e + s) / 2 + Math.sin(c) * m + Math.cos(c) * v, d = function(T) {
      return Math.sqrt(T[0] * T[0] + T[1] * T[1]);
    }, p = function(T, O) {
      return (T[0] * O[0] + T[1] * O[1]) / (d(T) * d(O));
    }, b = function(T, O) {
      return (T[0] * O[1] < T[1] * O[0] ? -1 : 1) * Math.acos(p(T, O));
    }, E = b([1, 0], [(g - m) / a, (f - v) / l]), R = [(g - m) / a, (f - v) / l], w = [(-1 * g - m) / a, (-1 * f - v) / l];
    let k = b(R, w);
    return p(R, w) <= -1 && (k = Math.PI), p(R, w) >= 1 && (k = 0), o === 0 && k > 0 && (k = k - 2 * Math.PI), o === 1 && k < 0 && (k = k + 2 * Math.PI), [S, x, a, l, E, k, c, o];
  }
}
ui.Path = Xt;
Xt.prototype.className = "Path";
Xt.prototype._attrsAffectingSize = ["data"];
(0, wf._registerNode)(Xt);
Sf.Factory.addGetterSetter(Xt, "data");
Object.defineProperty(js, "__esModule", { value: !0 });
js.Arrow = void 0;
const Ws = gt, xf = Hi, zc = et, Ef = dt, nl = ui;
class Nn extends xf.Line {
  _sceneFunc(t) {
    super._sceneFunc(t);
    const e = Math.PI * 2, i = this.points();
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
      ], _ = nl.Path.calcLength(s[s.length - 4], s[s.length - 3], "C", f), u = nl.Path.getPointOnQuadraticBezier(Math.min(1, 1 - o / _), f[0], f[1], f[2], f[3], f[4], f[5]);
      l = i[a - 2] - u.x, h = i[a - 1] - u.y;
    } else
      l = i[a - 2] - i[a - 4], h = i[a - 1] - i[a - 3];
    const c = (Math.atan2(h, l) + e) % e, g = this.pointerWidth();
    this.pointerAtEnding() && (t.save(), t.beginPath(), t.translate(i[a - 2], i[a - 1]), t.rotate(c), t.moveTo(0, 0), t.lineTo(-o, g / 2), t.lineTo(-o, -g / 2), t.closePath(), t.restore(), this.__fillStroke(t)), this.pointerAtBeginning() && (t.save(), t.beginPath(), t.translate(i[0], i[1]), r ? (l = (s[0] + s[2]) / 2 - i[0], h = (s[1] + s[3]) / 2 - i[1]) : (l = i[2] - i[0], h = i[3] - i[1]), t.rotate((Math.atan2(-h, -l) + e) % e), t.moveTo(0, 0), t.lineTo(-o, g / 2), t.lineTo(-o, -g / 2), t.closePath(), t.restore(), this.__fillStroke(t));
  }
  __fillStroke(t) {
    const e = this.dashEnabled();
    e && (this.attrs.dashEnabled = !1, t.setLineDash([])), t.fillStrokeShape(this), e && (this.attrs.dashEnabled = !0);
  }
  getSelfRect() {
    const t = super.getSelfRect(), e = this.pointerWidth() / 2;
    return {
      x: t.x,
      y: t.y - e,
      width: t.width,
      height: t.height + e * 2
    };
  }
}
js.Arrow = Nn;
Nn.prototype.className = "Arrow";
(0, Ef._registerNode)(Nn);
Ws.Factory.addGetterSetter(Nn, "pointerLength", 10, (0, zc.getNumberValidator)());
Ws.Factory.addGetterSetter(Nn, "pointerWidth", 10, (0, zc.getNumberValidator)());
Ws.Factory.addGetterSetter(Nn, "pointerAtBeginning", !1);
Ws.Factory.addGetterSetter(Nn, "pointerAtEnding", !0);
var Xs = {};
Object.defineProperty(Xs, "__esModule", { value: !0 });
Xs.Circle = void 0;
const Pf = gt, Tf = zt, Mf = et, Af = dt;
class fi extends Tf.Shape {
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
Xs.Circle = fi;
fi.prototype._centroid = !0;
fi.prototype.className = "Circle";
fi.prototype._attrsAffectingSize = ["radius"];
(0, Af._registerNode)(fi);
Pf.Factory.addGetterSetter(fi, "radius", 0, (0, Mf.getNumberValidator)());
var zs = {};
Object.defineProperty(zs, "__esModule", { value: !0 });
zs.Ellipse = void 0;
const Qo = gt, Of = zt, Kc = et, Rf = dt;
class pn extends Of.Shape {
  _sceneFunc(t) {
    const e = this.radiusX(), i = this.radiusY();
    t.beginPath(), t.save(), e !== i && t.scale(1, i / e), t.arc(0, 0, e, 0, Math.PI * 2, !1), t.restore(), t.closePath(), t.fillStrokeShape(this);
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
zs.Ellipse = pn;
pn.prototype.className = "Ellipse";
pn.prototype._centroid = !0;
pn.prototype._attrsAffectingSize = ["radiusX", "radiusY"];
(0, Rf._registerNode)(pn);
Qo.Factory.addComponentsGetterSetter(pn, "radius", ["x", "y"]);
Qo.Factory.addGetterSetter(pn, "radiusX", 0, (0, Kc.getNumberValidator)());
Qo.Factory.addGetterSetter(pn, "radiusY", 0, (0, Kc.getNumberValidator)());
var Ks = {};
Object.defineProperty(Ks, "__esModule", { value: !0 });
Ks.Image = void 0;
const Hr = Bt, Fn = gt, kf = zt, Nf = dt, $i = et;
class we extends kf.Shape {
  constructor(t) {
    super(t), this._loadListener = () => {
      this._requestDraw();
    }, this.on("imageChange.konva", (e) => {
      this._removeImageLoad(e.oldVal), this._setImageLoad();
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
    const t = !!this.cornerRadius(), e = this.hasShadow();
    return t && e ? !0 : super._useBufferCanvas(!0);
  }
  _sceneFunc(t) {
    const e = this.getWidth(), i = this.getHeight(), s = this.cornerRadius(), r = this.attrs.image;
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
        e,
        i
      ] : o = [r, 0, 0, e, i];
    }
    (this.hasFill() || this.hasStroke() || s) && (t.beginPath(), s ? Hr.Util.drawRoundedRectPath(t, e, i, s) : t.rect(0, 0, e, i), t.closePath(), t.fillStrokeShape(this)), r && (s && t.clip(), t.drawImage.apply(t, o));
  }
  _hitFunc(t) {
    const e = this.width(), i = this.height(), s = this.cornerRadius();
    t.beginPath(), s ? Hr.Util.drawRoundedRectPath(t, e, i, s) : t.rect(0, 0, e, i), t.closePath(), t.fillStrokeShape(this);
  }
  getWidth() {
    var t, e;
    return (t = this.attrs.width) !== null && t !== void 0 ? t : (e = this.image()) === null || e === void 0 ? void 0 : e.width;
  }
  getHeight() {
    var t, e;
    return (t = this.attrs.height) !== null && t !== void 0 ? t : (e = this.image()) === null || e === void 0 ? void 0 : e.height;
  }
  static fromURL(t, e, i = null) {
    const s = Hr.Util.createImageElement();
    s.onload = function() {
      const r = new we({
        image: s
      });
      e(r);
    }, s.onerror = i, s.crossOrigin = "Anonymous", s.src = t;
  }
}
Ks.Image = we;
we.prototype.className = "Image";
(0, Nf._registerNode)(we);
Fn.Factory.addGetterSetter(we, "cornerRadius", 0, (0, $i.getNumberOrArrayOfNumbersValidator)(4));
Fn.Factory.addGetterSetter(we, "image");
Fn.Factory.addComponentsGetterSetter(we, "crop", ["x", "y", "width", "height"]);
Fn.Factory.addGetterSetter(we, "cropX", 0, (0, $i.getNumberValidator)());
Fn.Factory.addGetterSetter(we, "cropY", 0, (0, $i.getNumberValidator)());
Fn.Factory.addGetterSetter(we, "cropWidth", 0, (0, $i.getNumberValidator)());
Fn.Factory.addGetterSetter(we, "cropHeight", 0, (0, $i.getNumberValidator)());
var si = {};
Object.defineProperty(si, "__esModule", { value: !0 });
si.Tag = si.Label = void 0;
const qs = gt, Ff = zt, Df = hi, ta = et, qc = dt, Zc = [
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
], Lf = "Change.konva", If = "none", mo = "up", vo = "right", yo = "down", bo = "left", Gf = Zc.length;
class ea extends Df.Group {
  constructor(t) {
    super(t), this.on("add.konva", function(e) {
      this._addListeners(e.child), this._sync();
    });
  }
  getText() {
    return this.find("Text")[0];
  }
  getTag() {
    return this.find("Tag")[0];
  }
  _addListeners(t) {
    let e = this, i;
    const s = function() {
      e._sync();
    };
    for (i = 0; i < Gf; i++)
      t.on(Zc[i] + Lf, s);
  }
  getWidth() {
    return this.getText().width();
  }
  getHeight() {
    return this.getText().height();
  }
  _sync() {
    let t = this.getText(), e = this.getTag(), i, s, r, o, a, l, h;
    if (t && e) {
      switch (i = t.width(), s = t.height(), r = e.pointerDirection(), o = e.pointerWidth(), h = e.pointerHeight(), a = 0, l = 0, r) {
        case mo:
          a = i / 2, l = -1 * h;
          break;
        case vo:
          a = i + o, l = s / 2;
          break;
        case yo:
          a = i / 2, l = s + h;
          break;
        case bo:
          a = -1 * o, l = s / 2;
          break;
      }
      e.setAttrs({
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
si.Label = ea;
ea.prototype.className = "Label";
(0, qc._registerNode)(ea);
class Dn extends Ff.Shape {
  _sceneFunc(t) {
    const e = this.width(), i = this.height(), s = this.pointerDirection(), r = this.pointerWidth(), o = this.pointerHeight(), a = this.cornerRadius();
    let l = 0, h = 0, c = 0, g = 0;
    typeof a == "number" ? l = h = c = g = Math.min(a, e / 2, i / 2) : (l = Math.min(a[0] || 0, e / 2, i / 2), h = Math.min(a[1] || 0, e / 2, i / 2), g = Math.min(a[2] || 0, e / 2, i / 2), c = Math.min(a[3] || 0, e / 2, i / 2)), t.beginPath(), t.moveTo(l, 0), s === mo && (t.lineTo((e - r) / 2, 0), t.lineTo(e / 2, -1 * o), t.lineTo((e + r) / 2, 0)), t.lineTo(e - h, 0), t.arc(e - h, h, h, Math.PI * 3 / 2, 0, !1), s === vo && (t.lineTo(e, (i - o) / 2), t.lineTo(e + r, i / 2), t.lineTo(e, (i + o) / 2)), t.lineTo(e, i - g), t.arc(e - g, i - g, g, 0, Math.PI / 2, !1), s === yo && (t.lineTo((e + r) / 2, i), t.lineTo(e / 2, i + o), t.lineTo((e - r) / 2, i)), t.lineTo(c, i), t.arc(c, i - c, c, Math.PI / 2, Math.PI, !1), s === bo && (t.lineTo(0, (i + o) / 2), t.lineTo(-1 * r, i / 2), t.lineTo(0, (i - o) / 2)), t.lineTo(0, l), t.arc(l, l, l, Math.PI, Math.PI * 3 / 2, !1), t.closePath(), t.fillStrokeShape(this);
  }
  getSelfRect() {
    let t = 0, e = 0, i = this.pointerWidth(), s = this.pointerHeight(), r = this.pointerDirection(), o = this.width(), a = this.height();
    return r === mo ? (e -= s, a += s) : r === yo ? a += s : r === bo ? (t -= i * 1.5, o += i) : r === vo && (o += i * 1.5), {
      x: t,
      y: e,
      width: o,
      height: a
    };
  }
}
si.Tag = Dn;
Dn.prototype.className = "Tag";
(0, qc._registerNode)(Dn);
qs.Factory.addGetterSetter(Dn, "pointerDirection", If);
qs.Factory.addGetterSetter(Dn, "pointerWidth", 0, (0, ta.getNumberValidator)());
qs.Factory.addGetterSetter(Dn, "pointerHeight", 0, (0, ta.getNumberValidator)());
qs.Factory.addGetterSetter(Dn, "cornerRadius", 0, (0, ta.getNumberOrArrayOfNumbersValidator)(4));
var ji = {};
Object.defineProperty(ji, "__esModule", { value: !0 });
ji.Rect = void 0;
const Bf = gt, Uf = zt, Vf = dt, Hf = Bt, $f = et;
class Zs extends Uf.Shape {
  _sceneFunc(t) {
    const e = this.cornerRadius(), i = this.width(), s = this.height();
    t.beginPath(), e ? Hf.Util.drawRoundedRectPath(t, i, s, e) : t.rect(0, 0, i, s), t.closePath(), t.fillStrokeShape(this);
  }
}
ji.Rect = Zs;
Zs.prototype.className = "Rect";
(0, Vf._registerNode)(Zs);
Bf.Factory.addGetterSetter(Zs, "cornerRadius", 0, (0, $f.getNumberOrArrayOfNumbersValidator)(4));
var Js = {};
Object.defineProperty(Js, "__esModule", { value: !0 });
Js.RegularPolygon = void 0;
const Jc = gt, jf = zt, Qc = et, Yf = dt;
class Ln extends jf.Shape {
  _sceneFunc(t) {
    const e = this._getPoints();
    t.beginPath(), t.moveTo(e[0].x, e[0].y);
    for (let i = 1; i < e.length; i++)
      t.lineTo(e[i].x, e[i].y);
    t.closePath(), t.fillStrokeShape(this);
  }
  _getPoints() {
    const t = this.attrs.sides, e = this.attrs.radius || 0, i = [];
    for (let s = 0; s < t; s++)
      i.push({
        x: e * Math.sin(s * 2 * Math.PI / t),
        y: -1 * e * Math.cos(s * 2 * Math.PI / t)
      });
    return i;
  }
  getSelfRect() {
    const t = this._getPoints();
    let e = t[0].x, i = t[0].y, s = t[0].x, r = t[0].y;
    return t.forEach((o) => {
      e = Math.min(e, o.x), i = Math.max(i, o.x), s = Math.min(s, o.y), r = Math.max(r, o.y);
    }), {
      x: e,
      y: s,
      width: i - e,
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
Js.RegularPolygon = Ln;
Ln.prototype.className = "RegularPolygon";
Ln.prototype._centroid = !0;
Ln.prototype._attrsAffectingSize = ["radius"];
(0, Yf._registerNode)(Ln);
Jc.Factory.addGetterSetter(Ln, "radius", 0, (0, Qc.getNumberValidator)());
Jc.Factory.addGetterSetter(Ln, "sides", 0, (0, Qc.getNumberValidator)());
var Qs = {};
Object.defineProperty(Qs, "__esModule", { value: !0 });
Qs.Ring = void 0;
const th = gt, Wf = zt, eh = et, Xf = dt, il = Math.PI * 2;
class In extends Wf.Shape {
  _sceneFunc(t) {
    t.beginPath(), t.arc(0, 0, this.innerRadius(), 0, il, !1), t.moveTo(this.outerRadius(), 0), t.arc(0, 0, this.outerRadius(), il, 0, !0), t.closePath(), t.fillStrokeShape(this);
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
Qs.Ring = In;
In.prototype.className = "Ring";
In.prototype._centroid = !0;
In.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, Xf._registerNode)(In);
th.Factory.addGetterSetter(In, "innerRadius", 0, (0, eh.getNumberValidator)());
th.Factory.addGetterSetter(In, "outerRadius", 0, (0, eh.getNumberValidator)());
var tr = {};
Object.defineProperty(tr, "__esModule", { value: !0 });
tr.Sprite = void 0;
const Gn = gt, zf = zt, Kf = di, nh = et, qf = dt;
class Ge extends zf.Shape {
  constructor(t) {
    super(t), this._updated = !0, this.anim = new Kf.Animation(() => {
      const e = this._updated;
      return this._updated = !1, e;
    }), this.on("animationChange.konva", function() {
      this.frameIndex(0);
    }), this.on("frameIndexChange.konva", function() {
      this._updated = !0;
    }), this.on("frameRateChange.konva", function() {
      this.anim.isRunning() && (clearInterval(this.interval), this._setInterval());
    });
  }
  _sceneFunc(t) {
    const e = this.animation(), i = this.frameIndex(), s = i * 4, r = this.animations()[e], o = this.frameOffsets(), a = r[s + 0], l = r[s + 1], h = r[s + 2], c = r[s + 3], g = this.image();
    if ((this.hasFill() || this.hasStroke()) && (t.beginPath(), t.rect(0, 0, h, c), t.closePath(), t.fillStrokeShape(this)), g)
      if (o) {
        const f = o[e], _ = i * 2;
        t.drawImage(g, a, l, h, c, f[_ + 0], f[_ + 1], h, c);
      } else
        t.drawImage(g, a, l, h, c, 0, 0, h, c);
  }
  _hitFunc(t) {
    const e = this.animation(), i = this.frameIndex(), s = i * 4, r = this.animations()[e], o = this.frameOffsets(), a = r[s + 2], l = r[s + 3];
    if (t.beginPath(), o) {
      const h = o[e], c = i * 2;
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
    const t = this.frameIndex(), e = this.animation(), i = this.animations(), s = i[e], r = s.length / 4;
    t < r - 1 ? this.frameIndex(t + 1) : this.frameIndex(0);
  }
}
tr.Sprite = Ge;
Ge.prototype.className = "Sprite";
(0, qf._registerNode)(Ge);
Gn.Factory.addGetterSetter(Ge, "animation");
Gn.Factory.addGetterSetter(Ge, "animations");
Gn.Factory.addGetterSetter(Ge, "frameOffsets");
Gn.Factory.addGetterSetter(Ge, "image");
Gn.Factory.addGetterSetter(Ge, "frameIndex", 0, (0, nh.getNumberValidator)());
Gn.Factory.addGetterSetter(Ge, "frameRate", 17, (0, nh.getNumberValidator)());
Gn.Factory.backCompat(Ge, {
  index: "frameIndex",
  getIndex: "getFrameIndex",
  setIndex: "setFrameIndex"
});
var er = {};
Object.defineProperty(er, "__esModule", { value: !0 });
er.Star = void 0;
const na = gt, Zf = zt, ia = et, Jf = dt;
class _n extends Zf.Shape {
  _sceneFunc(t) {
    const e = this.innerRadius(), i = this.outerRadius(), s = this.numPoints();
    t.beginPath(), t.moveTo(0, 0 - i);
    for (let r = 1; r < s * 2; r++) {
      const o = r % 2 === 0 ? i : e, a = o * Math.sin(r * Math.PI / s), l = -1 * o * Math.cos(r * Math.PI / s);
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
er.Star = _n;
_n.prototype.className = "Star";
_n.prototype._centroid = !0;
_n.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
(0, Jf._registerNode)(_n);
na.Factory.addGetterSetter(_n, "numPoints", 5, (0, ia.getNumberValidator)());
na.Factory.addGetterSetter(_n, "innerRadius", 0, (0, ia.getNumberValidator)());
na.Factory.addGetterSetter(_n, "outerRadius", 0, (0, ia.getNumberValidator)());
var gi = {};
Object.defineProperty(gi, "__esModule", { value: !0 });
gi.Text = void 0;
gi.stringToArray = En;
const So = Bt, oe = gt, Qf = zt, $r = dt, mn = et, t1 = dt;
function En(n) {
  return [...n].reduce((t, e, i, s) => {
    if (/\p{Emoji}/u.test(e)) {
      const r = s[i + 1];
      r && /\p{Emoji_Modifier}|\u200D/u.test(r) ? (t.push(e + r), s[i + 1] = "") : t.push(e);
    } else
      /\p{Regional_Indicator}{2}/u.test(e + (s[i + 1] || "")) ? t.push(e + s[i + 1]) : i > 0 && /\p{Mn}|\p{Me}|\p{Mc}/u.test(e) ? t[t.length - 1] += e : e && t.push(e);
    return t;
  }, []);
}
const Yn = "auto", e1 = "center", ih = "inherit", mi = "justify", n1 = "Change.konva", i1 = "2d", sl = "-", sh = "left", s1 = "text", r1 = "Text", o1 = "top", a1 = "bottom", rl = "middle", rh = "normal", l1 = "px ", ns = " ", c1 = "right", ol = "rtl", h1 = "word", d1 = "char", al = "none", jr = "…", oh = [
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
], u1 = oh.length;
function f1(n) {
  return n.split(",").map((t) => {
    t = t.trim();
    const e = t.indexOf(" ") >= 0, i = t.indexOf('"') >= 0 || t.indexOf("'") >= 0;
    return e && !i && (t = `"${t}"`), t;
  }).join(", ");
}
let is;
function Yr() {
  return is || (is = So.Util.createCanvasElement().getContext(i1), is);
}
function g1(n) {
  n.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function p1(n) {
  n.setAttr("miterLimit", 2), n.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function _1(n) {
  return n = n || {}, !n.fillLinearGradientColorStops && !n.fillRadialGradientColorStops && !n.fillPatternImage && (n.fill = n.fill || "black"), n;
}
class $t extends Qf.Shape {
  constructor(t) {
    super(_1(t)), this._partialTextX = 0, this._partialTextY = 0;
    for (let e = 0; e < u1; e++)
      this.on(oh[e] + n1, this._setTextData);
    this._setTextData();
  }
  _sceneFunc(t) {
    const e = this.textArr, i = e.length;
    if (!this.text())
      return;
    let s = this.padding(), r = this.fontSize(), o = this.lineHeight() * r, a = this.verticalAlign(), l = this.direction(), h = 0, c = this.align(), g = this.getWidth(), f = this.letterSpacing(), _ = this.fill(), u = this.textDecoration(), m = u.indexOf("underline") !== -1, v = u.indexOf("line-through") !== -1, S;
    l = l === ih ? t.direction : l;
    let x = o / 2, d = rl;
    if ($r.Konva._fixTextRendering) {
      const p = this.measureSize("M");
      d = "alphabetic", x = (p.fontBoundingBoxAscent - p.fontBoundingBoxDescent) / 2 + o / 2;
    }
    for (l === ol && t.setAttr("direction", l), t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", d), t.setAttr("textAlign", sh), a === rl ? h = (this.getHeight() - i * o - s * 2) / 2 : a === a1 && (h = this.getHeight() - i * o - s * 2), t.translate(s, h + s), S = 0; S < i; S++) {
      let p = 0, b = 0;
      const E = e[S], R = E.text, w = E.width, k = E.lastInParagraph;
      if (t.save(), c === c1 ? p += g - w - s * 2 : c === e1 && (p += (g - w - s * 2) / 2), m) {
        t.save(), t.beginPath();
        const T = $r.Konva._fixTextRendering ? Math.round(r / 4) : Math.round(r / 2), O = p, G = x + b + T;
        t.moveTo(O, G);
        const $ = c === mi && !k ? g - s * 2 : w;
        t.lineTo(O + Math.round($), G), t.lineWidth = r / 15;
        const Z = this._getLinearGradient();
        t.strokeStyle = Z || _, t.stroke(), t.restore();
      }
      if (v) {
        t.save(), t.beginPath();
        const T = $r.Konva._fixTextRendering ? -Math.round(r / 4) : 0;
        t.moveTo(p, x + b + T);
        const O = c === mi && !k ? g - s * 2 : w;
        t.lineTo(p + Math.round(O), x + b + T), t.lineWidth = r / 15;
        const G = this._getLinearGradient();
        t.strokeStyle = G || _, t.stroke(), t.restore();
      }
      if (l !== ol && (f !== 0 || c === mi)) {
        const T = R.split(" ").length - 1, O = En(R);
        for (let G = 0; G < O.length; G++) {
          const $ = O[G];
          $ === " " && !k && c === mi && (p += (g - s * 2 - w) / T), this._partialTextX = p, this._partialTextY = x + b, this._partialText = $, t.fillStrokeShape(this), p += this.measureSize($).width + f;
        }
      } else
        f !== 0 && t.setAttr("letterSpacing", `${f}px`), this._partialTextX = p, this._partialTextY = x + b, this._partialText = R, t.fillStrokeShape(this);
      t.restore(), i > 1 && (x += o);
    }
  }
  _hitFunc(t) {
    const e = this.getWidth(), i = this.getHeight();
    t.beginPath(), t.rect(0, 0, e, i), t.closePath(), t.fillStrokeShape(this);
  }
  setText(t) {
    const e = So.Util._isString(t) ? t : t == null ? "" : t + "";
    return this._setAttr(s1, e), this;
  }
  getWidth() {
    return this.attrs.width === Yn || this.attrs.width === void 0 ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
  }
  getHeight() {
    return this.attrs.height === Yn || this.attrs.height === void 0 ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return So.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  measureSize(t) {
    var e, i, s, r, o, a, l, h, c, g, f;
    let _ = Yr(), u = this.fontSize(), m;
    _.save(), _.font = this._getContextFont(), m = _.measureText(t), _.restore();
    const v = u / 100;
    return {
      actualBoundingBoxAscent: (e = m.actualBoundingBoxAscent) !== null && e !== void 0 ? e : 71.58203125 * v,
      actualBoundingBoxDescent: (i = m.actualBoundingBoxDescent) !== null && i !== void 0 ? i : 0,
      actualBoundingBoxLeft: (s = m.actualBoundingBoxLeft) !== null && s !== void 0 ? s : -7.421875 * v,
      actualBoundingBoxRight: (r = m.actualBoundingBoxRight) !== null && r !== void 0 ? r : 75.732421875 * v,
      alphabeticBaseline: (o = m.alphabeticBaseline) !== null && o !== void 0 ? o : 0,
      emHeightAscent: (a = m.emHeightAscent) !== null && a !== void 0 ? a : 100 * v,
      emHeightDescent: (l = m.emHeightDescent) !== null && l !== void 0 ? l : -20 * v,
      fontBoundingBoxAscent: (h = m.fontBoundingBoxAscent) !== null && h !== void 0 ? h : 91 * v,
      fontBoundingBoxDescent: (c = m.fontBoundingBoxDescent) !== null && c !== void 0 ? c : 21 * v,
      hangingBaseline: (g = m.hangingBaseline) !== null && g !== void 0 ? g : 72.80000305175781 * v,
      ideographicBaseline: (f = m.ideographicBaseline) !== null && f !== void 0 ? f : -21 * v,
      width: m.width,
      height: u
    };
  }
  _getContextFont() {
    return this.fontStyle() + ns + this.fontVariant() + ns + (this.fontSize() + l1) + f1(this.fontFamily());
  }
  _addTextLine(t) {
    this.align() === mi && (t = t.trim());
    const i = this._getTextWidth(t);
    return this.textArr.push({
      text: t,
      width: i,
      lastInParagraph: !1
    });
  }
  _getTextWidth(t) {
    const e = this.letterSpacing(), i = t.length;
    return Yr().measureText(t).width + e * i;
  }
  _setTextData() {
    let t = this.text().split(`
`), e = +this.fontSize(), i = 0, s = this.lineHeight() * e, r = this.attrs.width, o = this.attrs.height, a = r !== Yn && r !== void 0, l = o !== Yn && o !== void 0, h = this.padding(), c = r - h * 2, g = o - h * 2, f = 0, _ = this.wrap(), u = _ !== al, m = _ !== d1 && u, v = this.ellipsis();
    this.textArr = [], Yr().font = this._getContextFont();
    const S = v ? this._getTextWidth(jr) : 0;
    for (let x = 0, d = t.length; x < d; ++x) {
      let p = t[x], b = this._getTextWidth(p);
      if (a && b > c)
        for (; p.length > 0; ) {
          let E = 0, R = En(p).length, w = "", k = 0;
          for (; E < R; ) {
            const T = E + R >>> 1, O = En(p), G = O.slice(0, T + 1).join(""), $ = this._getTextWidth(G);
            (v && l && f + s > g ? $ + S : $) <= c ? (E = T + 1, w = G, k = $) : R = T;
          }
          if (w) {
            if (m) {
              const G = En(p), $ = En(w), Z = G[$.length], Y = Z === ns || Z === sl;
              let it;
              if (Y && k <= c)
                it = $.length;
              else {
                const z = $.lastIndexOf(ns), V = $.lastIndexOf(sl);
                it = Math.max(z, V) + 1;
              }
              it > 0 && (E = it, w = G.slice(0, E).join(""), k = this._getTextWidth(w));
            }
            if (w = w.trimRight(), this._addTextLine(w), i = Math.max(i, k), f += s, this._shouldHandleEllipsis(f)) {
              this._tryToAddEllipsisToLastLine();
              break;
            }
            if (p = En(p).slice(E).join("").trimLeft(), p.length > 0 && (b = this._getTextWidth(p), b <= c)) {
              this._addTextLine(p), f += s, i = Math.max(i, b);
              break;
            }
          } else
            break;
        }
      else
        this._addTextLine(p), f += s, i = Math.max(i, b), this._shouldHandleEllipsis(f) && x < d - 1 && this._tryToAddEllipsisToLastLine();
      if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), l && f + s > g)
        break;
    }
    this.textHeight = e, this.textWidth = i;
  }
  _shouldHandleEllipsis(t) {
    const e = +this.fontSize(), i = this.lineHeight() * e, s = this.attrs.height, r = s !== Yn && s !== void 0, o = this.padding(), a = s - o * 2;
    return !(this.wrap() !== al) || r && t + i > a;
  }
  _tryToAddEllipsisToLastLine() {
    const t = this.attrs.width, e = t !== Yn && t !== void 0, i = this.padding(), s = t - i * 2, r = this.ellipsis(), o = this.textArr[this.textArr.length - 1];
    !o || !r || (e && (this._getTextWidth(o.text + jr) < s || (o.text = o.text.slice(0, o.text.length - 3))), this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(o.text + jr));
  }
  getStrokeScaleEnabled() {
    return !0;
  }
  _useBufferCanvas() {
    const t = this.textDecoration().indexOf("underline") !== -1 || this.textDecoration().indexOf("line-through") !== -1, e = this.hasShadow();
    return t && e ? !0 : super._useBufferCanvas();
  }
}
gi.Text = $t;
$t.prototype._fillFunc = g1;
$t.prototype._strokeFunc = p1;
$t.prototype.className = r1;
$t.prototype._attrsAffectingSize = [
  "text",
  "fontSize",
  "padding",
  "wrap",
  "lineHeight",
  "letterSpacing"
];
(0, t1._registerNode)($t);
oe.Factory.overWriteSetter($t, "width", (0, mn.getNumberOrAutoValidator)());
oe.Factory.overWriteSetter($t, "height", (0, mn.getNumberOrAutoValidator)());
oe.Factory.addGetterSetter($t, "direction", ih);
oe.Factory.addGetterSetter($t, "fontFamily", "Arial");
oe.Factory.addGetterSetter($t, "fontSize", 12, (0, mn.getNumberValidator)());
oe.Factory.addGetterSetter($t, "fontStyle", rh);
oe.Factory.addGetterSetter($t, "fontVariant", rh);
oe.Factory.addGetterSetter($t, "padding", 0, (0, mn.getNumberValidator)());
oe.Factory.addGetterSetter($t, "align", sh);
oe.Factory.addGetterSetter($t, "verticalAlign", o1);
oe.Factory.addGetterSetter($t, "lineHeight", 1, (0, mn.getNumberValidator)());
oe.Factory.addGetterSetter($t, "wrap", h1);
oe.Factory.addGetterSetter($t, "ellipsis", !1, (0, mn.getBooleanValidator)());
oe.Factory.addGetterSetter($t, "letterSpacing", 0, (0, mn.getNumberValidator)());
oe.Factory.addGetterSetter($t, "text", "", (0, mn.getStringValidator)());
oe.Factory.addGetterSetter($t, "textDecoration", "");
var nr = {};
Object.defineProperty(nr, "__esModule", { value: !0 });
nr.TextPath = void 0;
const Wr = Bt, Re = gt, m1 = zt, vi = ui, Xr = gi, ah = et, v1 = dt, y1 = "", lh = "normal";
function ch(n) {
  n.fillText(this.partialText, 0, 0);
}
function hh(n) {
  n.strokeText(this.partialText, 0, 0);
}
class Kt extends m1.Shape {
  constructor(t) {
    super(t), this.dummyCanvas = Wr.Util.createCanvasElement(), this.dataArray = [], this._readDataAttribute(), this.on("dataChange.konva", function() {
      this._readDataAttribute(), this._setTextData();
    }), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData), this._setTextData();
  }
  _getTextPathLength() {
    return vi.Path.getPathLength(this.dataArray);
  }
  _getPointAtLength(t) {
    if (!this.attrs.data)
      return null;
    const e = this.pathLength;
    return t - 1 > e ? null : vi.Path.getPointAtLengthOfDataArray(t, this.dataArray);
  }
  _readDataAttribute() {
    this.dataArray = vi.Path.parsePathData(this.attrs.data), this.pathLength = this._getTextPathLength();
  }
  _sceneFunc(t) {
    t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", this.textBaseline()), t.setAttr("textAlign", "left"), t.save();
    const e = this.textDecoration(), i = this.fill(), s = this.fontSize(), r = this.glyphInfo;
    e === "underline" && t.beginPath();
    for (let o = 0; o < r.length; o++) {
      t.save();
      const a = r[o].p0;
      t.translate(a.x, a.y), t.rotate(r[o].rotation), this.partialText = r[o].text, t.fillStrokeShape(this), e === "underline" && (o === 0 && t.moveTo(0, s / 2 + 1), t.lineTo(s, s / 2 + 1)), t.restore();
    }
    e === "underline" && (t.strokeStyle = i, t.lineWidth = s / 20, t.stroke()), t.restore();
  }
  _hitFunc(t) {
    t.beginPath();
    const e = this.glyphInfo;
    if (e.length >= 1) {
      const i = e[0].p0;
      t.moveTo(i.x, i.y);
    }
    for (let i = 0; i < e.length; i++) {
      const s = e[i].p1;
      t.lineTo(s.x, s.y);
    }
    t.setAttr("lineWidth", this.fontSize()), t.setAttr("strokeStyle", this.colorKey), t.stroke();
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return Wr.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  setText(t) {
    return Xr.Text.prototype.setText.call(this, t);
  }
  _getContextFont() {
    return Xr.Text.prototype._getContextFont.call(this);
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
    const { width: t, height: e } = this._getTextSize(this.attrs.text);
    if (this.textWidth = t, this.textHeight = e, this.glyphInfo = [], !this.attrs.data)
      return null;
    const i = this.letterSpacing(), s = this.align(), r = this.kerningFunc(), o = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * i, 0);
    let a = 0;
    s === "center" && (a = Math.max(0, this.pathLength / 2 - o / 2)), s === "right" && (a = Math.max(0, this.pathLength - o));
    const l = (0, Xr.stringToArray)(this.text());
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
      const u = vi.Path.getLineLength(g.x, g.y, _.x, _.y);
      let m = 0;
      if (r)
        try {
          m = r(l[c - 1], l[c]) * this.fontSize();
        } catch {
          m = 0;
        }
      g.x += m, _.x += m, this.textWidth += m;
      const v = vi.Path.getPointOnLine(m + u / 2, g.x, g.y, _.x, _.y), S = Math.atan2(_.y - g.y, _.x - g.x);
      this.glyphInfo.push({
        transposeX: v.x,
        transposeY: v.y,
        text: l[c],
        rotation: S,
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
    let e = t[0] || 0, i = t[0] || 0, s = t[1] || 0, r = t[1] || 0, o, a;
    for (let h = 0; h < t.length / 2; h++)
      o = t[h * 2], a = t[h * 2 + 1], e = Math.min(e, o), i = Math.max(i, o), s = Math.min(s, a), r = Math.max(r, a);
    const l = this.fontSize();
    return {
      x: e - l / 2,
      y: s - l / 2,
      width: i - e + l,
      height: r - s + l
    };
  }
  destroy() {
    return Wr.Util.releaseCanvas(this.dummyCanvas), super.destroy();
  }
}
nr.TextPath = Kt;
Kt.prototype._fillFunc = ch;
Kt.prototype._strokeFunc = hh;
Kt.prototype._fillFuncHit = ch;
Kt.prototype._strokeFuncHit = hh;
Kt.prototype.className = "TextPath";
Kt.prototype._attrsAffectingSize = ["text", "fontSize", "data"];
(0, v1._registerNode)(Kt);
Re.Factory.addGetterSetter(Kt, "data");
Re.Factory.addGetterSetter(Kt, "fontFamily", "Arial");
Re.Factory.addGetterSetter(Kt, "fontSize", 12, (0, ah.getNumberValidator)());
Re.Factory.addGetterSetter(Kt, "fontStyle", lh);
Re.Factory.addGetterSetter(Kt, "align", "left");
Re.Factory.addGetterSetter(Kt, "letterSpacing", 0, (0, ah.getNumberValidator)());
Re.Factory.addGetterSetter(Kt, "textBaseline", "middle");
Re.Factory.addGetterSetter(Kt, "fontVariant", lh);
Re.Factory.addGetterSetter(Kt, "text", y1);
Re.Factory.addGetterSetter(Kt, "textDecoration", "");
Re.Factory.addGetterSetter(Kt, "kerningFunc", void 0);
var ir = {};
Object.defineProperty(ir, "__esModule", { value: !0 });
ir.Transformer = void 0;
const Mt = Bt, Ct = gt, ll = Gt, b1 = zt, S1 = ji, cl = hi, Ce = dt, vn = et, w1 = dt, dh = "tr-konva", C1 = [
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
].map((n) => n + `.${dh}`).join(" "), hl = "nodesRect", x1 = [
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
], E1 = {
  "top-left": -45,
  "top-center": 0,
  "top-right": 45,
  "middle-right": -90,
  "middle-left": 90,
  "bottom-left": -135,
  "bottom-center": 180,
  "bottom-right": 135
}, P1 = "ontouchstart" in Ce.Konva._global;
function T1(n, t, e) {
  if (n === "rotater")
    return e;
  t += Mt.Util.degToRad(E1[n] || 0);
  const i = (Mt.Util.radToDeg(t) % 360 + 360) % 360;
  return Mt.Util._inRange(i, 315 + 22.5, 360) || Mt.Util._inRange(i, 0, 22.5) ? "ns-resize" : Mt.Util._inRange(i, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : Mt.Util._inRange(i, 90 - 22.5, 90 + 22.5) ? "ew-resize" : Mt.Util._inRange(i, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : Mt.Util._inRange(i, 180 - 22.5, 180 + 22.5) ? "ns-resize" : Mt.Util._inRange(i, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : Mt.Util._inRange(i, 270 - 22.5, 270 + 22.5) ? "ew-resize" : Mt.Util._inRange(i, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (Mt.Util.error("Transformer has unknown angle for cursor detection: " + i), "pointer");
}
const ms = [
  "top-left",
  "top-center",
  "top-right",
  "middle-right",
  "middle-left",
  "bottom-left",
  "bottom-center",
  "bottom-right"
], dl = 1e8;
function M1(n) {
  return {
    x: n.x + n.width / 2 * Math.cos(n.rotation) + n.height / 2 * Math.sin(-n.rotation),
    y: n.y + n.height / 2 * Math.cos(n.rotation) + n.width / 2 * Math.sin(n.rotation)
  };
}
function uh(n, t, e) {
  const i = e.x + (n.x - e.x) * Math.cos(t) - (n.y - e.y) * Math.sin(t), s = e.y + (n.x - e.x) * Math.sin(t) + (n.y - e.y) * Math.cos(t);
  return {
    ...n,
    rotation: n.rotation + t,
    x: i,
    y: s
  };
}
function A1(n, t) {
  const e = M1(n);
  return uh(n, t, e);
}
function O1(n, t, e) {
  let i = t;
  for (let s = 0; s < n.length; s++) {
    const r = Ce.Konva.getAngle(n[s]), o = Math.abs(r - t) % (Math.PI * 2);
    Math.min(o, Math.PI * 2 - o) < e && (i = r);
  }
  return i;
}
let wo = 0;
class vt extends cl.Group {
  constructor(t) {
    super(t), this._movingAnchorName = null, this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(C1, this.update), this.getNode() && this.update();
  }
  attachTo(t) {
    return this.setNode(t), this;
  }
  setNode(t) {
    return Mt.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([t]);
  }
  getNode() {
    return this._nodes && this._nodes[0];
  }
  _getEventNamespace() {
    return dh + this._id;
  }
  setNodes(t = []) {
    this._nodes && this._nodes.length && this.detach();
    const e = t.filter((s) => s.isAncestorOf(this) ? (Mt.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), !1) : !0);
    return this._nodes = t = e, t.length === 1 && this.useSingleNodeRotation() ? this.rotation(t[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((s) => {
      const r = () => {
        this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
      };
      if (s._attrsAffectingSize.length) {
        const o = s._attrsAffectingSize.map((a) => a + "Change." + this._getEventNamespace()).join(" ");
        s.on(o, r);
      }
      s.on(x1.map((o) => o + `.${this._getEventNamespace()}`).join(" "), r), s.on(`absoluteTransformChange.${this._getEventNamespace()}`, r), this._proxyDrag(s);
    }), this._resetTransformCache(), !!this.findOne(".top-left") && this.update(), this;
  }
  _proxyDrag(t) {
    let e;
    t.on(`dragstart.${this._getEventNamespace()}`, (i) => {
      e = t.getAbsolutePosition(), !this.isDragging() && t !== this.findOne(".back") && this.startDrag(i, !1);
    }), t.on(`dragmove.${this._getEventNamespace()}`, (i) => {
      if (!e)
        return;
      const s = t.getAbsolutePosition(), r = s.x - e.x, o = s.y - e.y;
      this.nodes().forEach((a) => {
        if (a === t || a.isDragging())
          return;
        const l = a.getAbsolutePosition();
        a.setAbsolutePosition({
          x: l.x + r,
          y: l.y + o
        }), a.startDrag(i);
      }), e = null;
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
    this._clearCache(hl), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
  }
  _getNodeRect() {
    return this._getCache(hl, this.__getNodeRect);
  }
  __getNodeShape(t, e = this.rotation(), i) {
    const s = t.getClientRect({
      skipTransform: !0,
      skipShadow: !0,
      skipStroke: this.ignoreStroke()
    }), r = t.getAbsoluteScale(i), o = t.getAbsolutePosition(i), a = s.x * r.x - t.offsetX() * r.x, l = s.y * r.y - t.offsetY() * r.y, h = (Ce.Konva.getAngle(t.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), c = {
      x: o.x + a * Math.cos(h) + l * Math.sin(-h),
      y: o.y + l * Math.cos(h) + a * Math.sin(h),
      width: s.width * r.x,
      height: s.height * r.y,
      rotation: h
    };
    return uh(c, -Ce.Konva.getAngle(e), {
      x: 0,
      y: 0
    });
  }
  __getNodeRect() {
    if (!this.getNode())
      return {
        x: -dl,
        y: -dl,
        width: 0,
        height: 0,
        rotation: 0
      };
    const e = [];
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
        e.push(u);
      });
    });
    const i = new Mt.Transform();
    i.rotate(-Ce.Konva.getAngle(this.rotation()));
    let s = 1 / 0, r = 1 / 0, o = -1 / 0, a = -1 / 0;
    e.forEach(function(h) {
      const c = i.point(h);
      s === void 0 && (s = o = c.x, r = a = c.y), s = Math.min(s, c.x), r = Math.min(r, c.y), o = Math.max(o, c.x), a = Math.max(a, c.y);
    }), i.invert();
    const l = i.point({ x: s, y: r });
    return {
      x: l.x,
      y: l.y,
      width: o - s,
      height: a - r,
      rotation: Ce.Konva.getAngle(this.rotation())
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
    this._createBack(), ms.forEach((t) => {
      this._createAnchor(t);
    }), this._createAnchor("rotater");
  }
  _createAnchor(t) {
    const e = new S1.Rect({
      stroke: "rgb(0, 161, 255)",
      fill: "white",
      strokeWidth: 1,
      name: t + " _anchor",
      dragDistance: 0,
      draggable: !0,
      hitStrokeWidth: P1 ? 10 : "auto"
    }), i = this;
    e.on("mousedown touchstart", function(s) {
      i._handleMouseDown(s);
    }), e.on("dragstart", (s) => {
      e.stopDrag(), s.cancelBubble = !0;
    }), e.on("dragend", (s) => {
      s.cancelBubble = !0;
    }), e.on("mouseenter", () => {
      const s = Ce.Konva.getAngle(this.rotation()), r = this.rotateAnchorCursor(), o = T1(t, s, r);
      e.getStage().content && (e.getStage().content.style.cursor = o), this._cursorChange = !0;
    }), e.on("mouseout", () => {
      e.getStage().content && (e.getStage().content.style.cursor = ""), this._cursorChange = !1;
    }), this.add(e);
  }
  _createBack() {
    const t = new b1.Shape({
      name: "back",
      width: 0,
      height: 0,
      draggable: !0,
      sceneFunc(e, i) {
        const s = i.getParent(), r = s.padding();
        e.beginPath(), e.rect(-r, -r, i.width() + r * 2, i.height() + r * 2), e.moveTo(i.width() / 2, -r), s.rotateEnabled() && s.rotateLineVisible() && e.lineTo(i.width() / 2, -s.rotateAnchorOffset() * Mt.Util._sign(i.height()) - r), e.fillStrokeShape(i);
      },
      hitFunc: (e, i) => {
        if (!this.shouldOverdrawWholeArea())
          return;
        const s = this.padding();
        e.beginPath(), e.rect(-s, -s, i.width() + s * 2, i.height() + s * 2), e.fillStrokeShape(i);
      }
    });
    this.add(t), this._proxyDrag(t), t.on("dragstart", (e) => {
      e.cancelBubble = !0;
    }), t.on("dragmove", (e) => {
      e.cancelBubble = !0;
    }), t.on("dragend", (e) => {
      e.cancelBubble = !0;
    }), this.on("dragmove", (e) => {
      this.update();
    });
  }
  _handleMouseDown(t) {
    if (this._transforming)
      return;
    this._movingAnchorName = t.target.name().split(" ")[0];
    const e = this._getNodeRect(), i = e.width, s = e.height, r = Math.sqrt(Math.pow(i, 2) + Math.pow(s, 2));
    this.sin = Math.abs(s / r), this.cos = Math.abs(i / r), typeof window < "u" && (window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0)), this._transforming = !0;
    const o = t.target.getAbsolutePosition(), a = t.target.getStage().getPointerPosition();
    this._anchorDragOffset = {
      x: a.x - o.x,
      y: a.y - o.y
    }, wo++, this._fire("transformstart", { evt: t.evt, target: this.getNode() }), this._nodes.forEach((l) => {
      l._fire("transformstart", { evt: t.evt, target: l });
    });
  }
  _handleMouseMove(t) {
    let e, i, s;
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
      e = r.x() - x.width / 2, i = -r.y() + x.height / 2;
      let d = Math.atan2(-i, e) + Math.PI / 2;
      x.height < 0 && (d -= Math.PI);
      const b = Ce.Konva.getAngle(this.rotation()) + d, E = Ce.Konva.getAngle(this.rotationSnapTolerance()), w = O1(this.rotationSnaps(), b, E) - x.rotation, k = A1(x, w);
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
        e = s * this.cos * d, i = s * this.sin * p, this.findOne(".top-left").x(x.x - e), this.findOne(".top-left").y(x.y - i);
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
        e = s * this.cos * d, i = s * this.sin * p, this.findOne(".top-right").x(x.x + e), this.findOne(".top-right").y(x.y - i);
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
        e = s * this.cos * d, i = s * this.sin * p, r.x(x.x - e), r.y(x.y + i);
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
        e = s * this.cos * d, i = s * this.sin * p, this.findOne(".bottom-right").x(x.x + e), this.findOne(".bottom-right").y(x.y + i);
      }
    } else
      console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
    if (_ = this.centeredScaling() || t.altKey, _) {
      const x = this.findOne(".top-left"), d = this.findOne(".bottom-right"), p = x.x(), b = x.y(), E = this.getWidth() - d.x(), R = this.getHeight() - d.y();
      d.move({
        x: -p,
        y: -b
      }), x.move({
        x: E,
        y: R
      });
    }
    const m = this.findOne(".top-left").getAbsolutePosition();
    e = m.x, i = m.y;
    const v = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), S = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
    this._fitNodesInto({
      x: e,
      y: i,
      width: v,
      height: S,
      rotation: Ce.Konva.getAngle(this.rotation())
    }, t);
  }
  _handleMouseUp(t) {
    this._removeEvents(t);
  }
  getAbsoluteTransform() {
    return this.getTransform();
  }
  _removeEvents(t) {
    var e;
    if (this._transforming) {
      this._transforming = !1, typeof window < "u" && (window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0));
      const i = this.getNode();
      wo--, this._fire("transformend", { evt: t, target: i }), (e = this.getLayer()) === null || e === void 0 || e.batchDraw(), i && this._nodes.forEach((s) => {
        var r;
        s._fire("transformend", { evt: t, target: s }), (r = s.getLayer()) === null || r === void 0 || r.batchDraw();
      }), this._movingAnchorName = null;
    }
  }
  _fitNodesInto(t, e) {
    const i = this._getNodeRect(), s = 1;
    if (Mt.Util._inRange(t.width, -this.padding() * 2 - s, s)) {
      this.update();
      return;
    }
    if (Mt.Util._inRange(t.height, -this.padding() * 2 - s, s)) {
      this.update();
      return;
    }
    const r = new Mt.Transform();
    if (r.rotate(Ce.Konva.getAngle(this.rotation())), this._movingAnchorName && t.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
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
      f ? t = f : Mt.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
    }
    const o = 1e7, a = new Mt.Transform();
    a.translate(i.x, i.y), a.rotate(i.rotation), a.scale(i.width / o, i.height / o);
    const l = new Mt.Transform(), h = t.width / o, c = t.height / o;
    this.flipEnabled() === !1 ? (l.translate(t.x, t.y), l.rotate(t.rotation), l.translate(t.width < 0 ? t.width : 0, t.height < 0 ? t.height : 0), l.scale(Math.abs(h), Math.abs(c))) : (l.translate(t.x, t.y), l.rotate(t.rotation), l.scale(h, c));
    const g = l.multiply(a.invert());
    this._nodes.forEach((f) => {
      var _;
      const u = f.getParent().getAbsoluteTransform(), m = f.getTransform().copy();
      m.translate(f.offsetX(), f.offsetY());
      const v = new Mt.Transform();
      v.multiply(u.copy().invert()).multiply(g).multiply(u).multiply(m);
      const S = v.decompose();
      f.setAttrs(S), (_ = f.getLayer()) === null || _ === void 0 || _.batchDraw();
    }), this.rotation(Mt.Util._getRotation(t.rotation)), this._nodes.forEach((f) => {
      this._fire("transform", { evt: e, target: f }), f._fire("transform", { evt: e, target: f });
    }), this._resetTransformCache(), this.update(), this.getLayer().batchDraw();
  }
  forceUpdate() {
    this._resetTransformCache(), this.update();
  }
  _batchChangeChild(t, e) {
    this.findOne(t).setAttrs(e);
  }
  update() {
    var t;
    const e = this._getNodeRect();
    this.rotation(Mt.Util._getRotation(e.rotation));
    const i = e.width, s = e.height, r = this.enabledAnchors(), o = this.resizeEnabled(), a = this.padding(), l = this.anchorSize(), h = this.find("._anchor");
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
      y: -this.rotateAnchorOffset() * Mt.Util._sign(s) - a,
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
    return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), cl.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
  }
  toObject() {
    return ll.Node.prototype.toObject.call(this);
  }
  clone(t) {
    return ll.Node.prototype.clone.call(this, t);
  }
  getClientRect() {
    return this.nodes().length > 0 ? super.getClientRect() : { x: 0, y: 0, width: 0, height: 0 };
  }
}
ir.Transformer = vt;
vt.isTransforming = () => wo > 0;
function R1(n) {
  return n instanceof Array || Mt.Util.warn("enabledAnchors value should be an array"), n instanceof Array && n.forEach(function(t) {
    ms.indexOf(t) === -1 && Mt.Util.warn("Unknown anchor name: " + t + ". Available names are: " + ms.join(", "));
  }), n || [];
}
vt.prototype.className = "Transformer";
(0, w1._registerNode)(vt);
Ct.Factory.addGetterSetter(vt, "enabledAnchors", ms, R1);
Ct.Factory.addGetterSetter(vt, "flipEnabled", !0, (0, vn.getBooleanValidator)());
Ct.Factory.addGetterSetter(vt, "resizeEnabled", !0);
Ct.Factory.addGetterSetter(vt, "anchorSize", 10, (0, vn.getNumberValidator)());
Ct.Factory.addGetterSetter(vt, "rotateEnabled", !0);
Ct.Factory.addGetterSetter(vt, "rotateLineVisible", !0);
Ct.Factory.addGetterSetter(vt, "rotationSnaps", []);
Ct.Factory.addGetterSetter(vt, "rotateAnchorOffset", 50, (0, vn.getNumberValidator)());
Ct.Factory.addGetterSetter(vt, "rotateAnchorCursor", "crosshair");
Ct.Factory.addGetterSetter(vt, "rotationSnapTolerance", 5, (0, vn.getNumberValidator)());
Ct.Factory.addGetterSetter(vt, "borderEnabled", !0);
Ct.Factory.addGetterSetter(vt, "anchorStroke", "rgb(0, 161, 255)");
Ct.Factory.addGetterSetter(vt, "anchorStrokeWidth", 1, (0, vn.getNumberValidator)());
Ct.Factory.addGetterSetter(vt, "anchorFill", "white");
Ct.Factory.addGetterSetter(vt, "anchorCornerRadius", 0, (0, vn.getNumberValidator)());
Ct.Factory.addGetterSetter(vt, "borderStroke", "rgb(0, 161, 255)");
Ct.Factory.addGetterSetter(vt, "borderStrokeWidth", 1, (0, vn.getNumberValidator)());
Ct.Factory.addGetterSetter(vt, "borderDash");
Ct.Factory.addGetterSetter(vt, "keepRatio", !0);
Ct.Factory.addGetterSetter(vt, "shiftBehavior", "default");
Ct.Factory.addGetterSetter(vt, "centeredScaling", !1);
Ct.Factory.addGetterSetter(vt, "ignoreStroke", !1);
Ct.Factory.addGetterSetter(vt, "padding", 0, (0, vn.getNumberValidator)());
Ct.Factory.addGetterSetter(vt, "nodes");
Ct.Factory.addGetterSetter(vt, "node");
Ct.Factory.addGetterSetter(vt, "boundBoxFunc");
Ct.Factory.addGetterSetter(vt, "anchorDragBoundFunc");
Ct.Factory.addGetterSetter(vt, "anchorStyleFunc");
Ct.Factory.addGetterSetter(vt, "shouldOverdrawWholeArea", !1);
Ct.Factory.addGetterSetter(vt, "useSingleNodeRotation", !0);
Ct.Factory.backCompat(vt, {
  lineEnabled: "borderEnabled",
  rotateHandlerOffset: "rotateAnchorOffset",
  enabledHandlers: "enabledAnchors"
});
var sr = {};
Object.defineProperty(sr, "__esModule", { value: !0 });
sr.Wedge = void 0;
const rr = gt, k1 = zt, N1 = dt, fh = et, F1 = dt;
class Ze extends k1.Shape {
  _sceneFunc(t) {
    t.beginPath(), t.arc(0, 0, this.radius(), 0, N1.Konva.getAngle(this.angle()), this.clockwise()), t.lineTo(0, 0), t.closePath(), t.fillStrokeShape(this);
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
sr.Wedge = Ze;
Ze.prototype.className = "Wedge";
Ze.prototype._centroid = !0;
Ze.prototype._attrsAffectingSize = ["radius"];
(0, F1._registerNode)(Ze);
rr.Factory.addGetterSetter(Ze, "radius", 0, (0, fh.getNumberValidator)());
rr.Factory.addGetterSetter(Ze, "angle", 0, (0, fh.getNumberValidator)());
rr.Factory.addGetterSetter(Ze, "clockwise", !1);
rr.Factory.backCompat(Ze, {
  angleDeg: "angle",
  getAngleDeg: "getAngle",
  setAngleDeg: "setAngle"
});
var or = {};
Object.defineProperty(or, "__esModule", { value: !0 });
or.Blur = void 0;
const ul = gt, D1 = Gt, L1 = et;
function fl() {
  this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
}
const I1 = [
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
], G1 = [
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
function B1(n, t) {
  const e = n.data, i = n.width, s = n.height;
  let r, o, a, l, h, c, g, f, _, u, m, v, S, x, d, p, b, E, R, w;
  const k = t + t + 1, T = i - 1, O = s - 1, G = t + 1, $ = G * (G + 1) / 2, Z = new fl(), Y = I1[t], it = G1[t];
  let z = null, V = Z, lt = null, Q = null;
  for (let rt = 1; rt < k; rt++)
    V = V.next = new fl(), rt === G && (z = V);
  V.next = Z, a = o = 0;
  for (let rt = 0; rt < s; rt++) {
    v = S = x = d = l = h = c = g = 0, f = G * (p = e[o]), _ = G * (b = e[o + 1]), u = G * (E = e[o + 2]), m = G * (R = e[o + 3]), l += $ * p, h += $ * b, c += $ * E, g += $ * R, V = Z;
    for (let X = 0; X < G; X++)
      V.r = p, V.g = b, V.b = E, V.a = R, V = V.next;
    for (let X = 1; X < G; X++)
      r = o + ((T < X ? T : X) << 2), l += (V.r = p = e[r]) * (w = G - X), h += (V.g = b = e[r + 1]) * w, c += (V.b = E = e[r + 2]) * w, g += (V.a = R = e[r + 3]) * w, v += p, S += b, x += E, d += R, V = V.next;
    lt = Z, Q = z;
    for (let X = 0; X < i; X++)
      e[o + 3] = R = g * Y >> it, R !== 0 ? (R = 255 / R, e[o] = (l * Y >> it) * R, e[o + 1] = (h * Y >> it) * R, e[o + 2] = (c * Y >> it) * R) : e[o] = e[o + 1] = e[o + 2] = 0, l -= f, h -= _, c -= u, g -= m, f -= lt.r, _ -= lt.g, u -= lt.b, m -= lt.a, r = a + ((r = X + t + 1) < T ? r : T) << 2, v += lt.r = e[r], S += lt.g = e[r + 1], x += lt.b = e[r + 2], d += lt.a = e[r + 3], l += v, h += S, c += x, g += d, lt = lt.next, f += p = Q.r, _ += b = Q.g, u += E = Q.b, m += R = Q.a, v -= p, S -= b, x -= E, d -= R, Q = Q.next, o += 4;
    a += i;
  }
  for (let rt = 0; rt < i; rt++) {
    S = x = d = v = h = c = g = l = 0, o = rt << 2, f = G * (p = e[o]), _ = G * (b = e[o + 1]), u = G * (E = e[o + 2]), m = G * (R = e[o + 3]), l += $ * p, h += $ * b, c += $ * E, g += $ * R, V = Z;
    for (let Pt = 0; Pt < G; Pt++)
      V.r = p, V.g = b, V.b = E, V.a = R, V = V.next;
    let X = i;
    for (let Pt = 1; Pt <= t; Pt++)
      o = X + rt << 2, l += (V.r = p = e[o]) * (w = G - Pt), h += (V.g = b = e[o + 1]) * w, c += (V.b = E = e[o + 2]) * w, g += (V.a = R = e[o + 3]) * w, v += p, S += b, x += E, d += R, V = V.next, Pt < O && (X += i);
    o = rt, lt = Z, Q = z;
    for (let Pt = 0; Pt < s; Pt++)
      r = o << 2, e[r + 3] = R = g * Y >> it, R > 0 ? (R = 255 / R, e[r] = (l * Y >> it) * R, e[r + 1] = (h * Y >> it) * R, e[r + 2] = (c * Y >> it) * R) : e[r] = e[r + 1] = e[r + 2] = 0, l -= f, h -= _, c -= u, g -= m, f -= lt.r, _ -= lt.g, u -= lt.b, m -= lt.a, r = rt + ((r = Pt + G) < O ? r : O) * i << 2, l += v += lt.r = e[r], h += S += lt.g = e[r + 1], c += x += lt.b = e[r + 2], g += d += lt.a = e[r + 3], lt = lt.next, f += p = Q.r, _ += b = Q.g, u += E = Q.b, m += R = Q.a, v -= p, S -= b, x -= E, d -= R, Q = Q.next, o += i;
  }
}
const U1 = function(t) {
  const e = Math.round(this.blurRadius());
  e > 0 && B1(t, e);
};
or.Blur = U1;
ul.Factory.addGetterSetter(D1.Node, "blurRadius", 0, (0, L1.getNumberValidator)(), ul.Factory.afterSetFilter);
var ar = {};
Object.defineProperty(ar, "__esModule", { value: !0 });
ar.Brighten = void 0;
const gl = gt, V1 = Gt, H1 = et, $1 = function(n) {
  const t = this.brightness() * 255, e = n.data, i = e.length;
  for (let s = 0; s < i; s += 4)
    e[s] += t, e[s + 1] += t, e[s + 2] += t;
};
ar.Brighten = $1;
gl.Factory.addGetterSetter(V1.Node, "brightness", 0, (0, H1.getNumberValidator)(), gl.Factory.afterSetFilter);
var lr = {};
Object.defineProperty(lr, "__esModule", { value: !0 });
lr.Contrast = void 0;
const pl = gt, j1 = Gt, Y1 = et, W1 = function(n) {
  const t = Math.pow((this.contrast() + 100) / 100, 2), e = n.data, i = e.length;
  let s = 150, r = 150, o = 150;
  for (let a = 0; a < i; a += 4)
    s = e[a], r = e[a + 1], o = e[a + 2], s /= 255, s -= 0.5, s *= t, s += 0.5, s *= 255, r /= 255, r -= 0.5, r *= t, r += 0.5, r *= 255, o /= 255, o -= 0.5, o *= t, o += 0.5, o *= 255, s = s < 0 ? 0 : s > 255 ? 255 : s, r = r < 0 ? 0 : r > 255 ? 255 : r, o = o < 0 ? 0 : o > 255 ? 255 : o, e[a] = s, e[a + 1] = r, e[a + 2] = o;
};
lr.Contrast = W1;
pl.Factory.addGetterSetter(j1.Node, "contrast", 0, (0, Y1.getNumberValidator)(), pl.Factory.afterSetFilter);
var cr = {};
Object.defineProperty(cr, "__esModule", { value: !0 });
cr.Emboss = void 0;
const cn = gt, hr = Gt, X1 = Bt, gh = et, z1 = function(n) {
  const t = this.embossStrength() * 10, e = this.embossWhiteLevel() * 255, i = this.embossDirection(), s = this.embossBlend(), r = n.data, o = n.width, a = n.height, l = o * 4;
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
      X1.Util.error("Unknown emboss direction: " + i);
  }
  do {
    const f = (g - 1) * l;
    let _ = h;
    g + _ < 1 && (_ = 0), g + _ > a && (_ = 0);
    const u = (g - 1 + _) * o * 4;
    let m = o;
    do {
      const v = f + (m - 1) * 4;
      let S = c;
      m + S < 1 && (S = 0), m + S > o && (S = 0);
      const x = u + (m - 1 + S) * 4, d = r[v] - r[x], p = r[v + 1] - r[x + 1], b = r[v + 2] - r[x + 2];
      let E = d;
      const R = E > 0 ? E : -E, w = p > 0 ? p : -p, k = b > 0 ? b : -b;
      if (w > R && (E = p), k > R && (E = b), E *= t, s) {
        const T = r[v] + E, O = r[v + 1] + E, G = r[v + 2] + E;
        r[v] = T > 255 ? 255 : T < 0 ? 0 : T, r[v + 1] = O > 255 ? 255 : O < 0 ? 0 : O, r[v + 2] = G > 255 ? 255 : G < 0 ? 0 : G;
      } else {
        let T = e - E;
        T < 0 ? T = 0 : T > 255 && (T = 255), r[v] = r[v + 1] = r[v + 2] = T;
      }
    } while (--m);
  } while (--g);
};
cr.Emboss = z1;
cn.Factory.addGetterSetter(hr.Node, "embossStrength", 0.5, (0, gh.getNumberValidator)(), cn.Factory.afterSetFilter);
cn.Factory.addGetterSetter(hr.Node, "embossWhiteLevel", 0.5, (0, gh.getNumberValidator)(), cn.Factory.afterSetFilter);
cn.Factory.addGetterSetter(hr.Node, "embossDirection", "top-left", void 0, cn.Factory.afterSetFilter);
cn.Factory.addGetterSetter(hr.Node, "embossBlend", !1, void 0, cn.Factory.afterSetFilter);
var dr = {};
Object.defineProperty(dr, "__esModule", { value: !0 });
dr.Enhance = void 0;
const _l = gt, K1 = Gt, q1 = et;
function zr(n, t, e, i, s) {
  const r = e - t, o = s - i;
  if (r === 0)
    return i + o / 2;
  if (o === 0)
    return i;
  let a = (n - t) / r;
  return a = o * a + i, a;
}
const Z1 = function(n) {
  const t = n.data, e = t.length;
  let i = t[0], s = i, r, o = t[1], a = o, l, h = t[2], c = h, g;
  const f = this.enhance();
  if (f === 0)
    return;
  for (let d = 0; d < e; d += 4)
    r = t[d + 0], r < i ? i = r : r > s && (s = r), l = t[d + 1], l < o ? o = l : l > a && (a = l), g = t[d + 2], g < h ? h = g : g > c && (c = g);
  s === i && (s = 255, i = 0), a === o && (a = 255, o = 0), c === h && (c = 255, h = 0);
  let _, u, m, v, S, x;
  if (f > 0)
    _ = s + f * (255 - s), u = i - f * (i - 0), m = a + f * (255 - a), v = o - f * (o - 0), S = c + f * (255 - c), x = h - f * (h - 0);
  else {
    const d = (s + i) * 0.5;
    _ = s + f * (s - d), u = i + f * (i - d);
    const p = (a + o) * 0.5;
    m = a + f * (a - p), v = o + f * (o - p);
    const b = (c + h) * 0.5;
    S = c + f * (c - b), x = h + f * (h - b);
  }
  for (let d = 0; d < e; d += 4)
    t[d + 0] = zr(t[d + 0], i, s, u, _), t[d + 1] = zr(t[d + 1], o, a, v, m), t[d + 2] = zr(t[d + 2], h, c, x, S);
};
dr.Enhance = Z1;
_l.Factory.addGetterSetter(K1.Node, "enhance", 0, (0, q1.getNumberValidator)(), _l.Factory.afterSetFilter);
var ur = {};
Object.defineProperty(ur, "__esModule", { value: !0 });
ur.Grayscale = void 0;
const J1 = function(n) {
  const t = n.data, e = t.length;
  for (let i = 0; i < e; i += 4) {
    const s = 0.34 * t[i] + 0.5 * t[i + 1] + 0.16 * t[i + 2];
    t[i] = s, t[i + 1] = s, t[i + 2] = s;
  }
};
ur.Grayscale = J1;
var fr = {};
Object.defineProperty(fr, "__esModule", { value: !0 });
fr.HSL = void 0;
const ri = gt, sa = Gt, ra = et;
ri.Factory.addGetterSetter(sa.Node, "hue", 0, (0, ra.getNumberValidator)(), ri.Factory.afterSetFilter);
ri.Factory.addGetterSetter(sa.Node, "saturation", 0, (0, ra.getNumberValidator)(), ri.Factory.afterSetFilter);
ri.Factory.addGetterSetter(sa.Node, "luminance", 0, (0, ra.getNumberValidator)(), ri.Factory.afterSetFilter);
const Q1 = function(n) {
  const t = n.data, e = t.length, i = 1, s = Math.pow(2, this.saturation()), r = Math.abs(this.hue() + 360) % 360, o = this.luminance() * 127, a = i * s * Math.cos(r * Math.PI / 180), l = i * s * Math.sin(r * Math.PI / 180), h = 0.299 * i + 0.701 * a + 0.167 * l, c = 0.587 * i - 0.587 * a + 0.33 * l, g = 0.114 * i - 0.114 * a - 0.497 * l, f = 0.299 * i - 0.299 * a - 0.328 * l, _ = 0.587 * i + 0.413 * a + 0.035 * l, u = 0.114 * i - 0.114 * a + 0.293 * l, m = 0.299 * i - 0.3 * a + 1.25 * l, v = 0.587 * i - 0.586 * a - 1.05 * l, S = 0.114 * i + 0.886 * a - 0.2 * l;
  let x, d, p, b;
  for (let E = 0; E < e; E += 4)
    x = t[E + 0], d = t[E + 1], p = t[E + 2], b = t[E + 3], t[E + 0] = h * x + c * d + g * p + o, t[E + 1] = f * x + _ * d + u * p + o, t[E + 2] = m * x + v * d + S * p + o, t[E + 3] = b;
};
fr.HSL = Q1;
var gr = {};
Object.defineProperty(gr, "__esModule", { value: !0 });
gr.HSV = void 0;
const oi = gt, oa = Gt, aa = et, t2 = function(n) {
  const t = n.data, e = t.length, i = Math.pow(2, this.value()), s = Math.pow(2, this.saturation()), r = Math.abs(this.hue() + 360) % 360, o = i * s * Math.cos(r * Math.PI / 180), a = i * s * Math.sin(r * Math.PI / 180), l = 0.299 * i + 0.701 * o + 0.167 * a, h = 0.587 * i - 0.587 * o + 0.33 * a, c = 0.114 * i - 0.114 * o - 0.497 * a, g = 0.299 * i - 0.299 * o - 0.328 * a, f = 0.587 * i + 0.413 * o + 0.035 * a, _ = 0.114 * i - 0.114 * o + 0.293 * a, u = 0.299 * i - 0.3 * o + 1.25 * a, m = 0.587 * i - 0.586 * o - 1.05 * a, v = 0.114 * i + 0.886 * o - 0.2 * a;
  for (let S = 0; S < e; S += 4) {
    const x = t[S + 0], d = t[S + 1], p = t[S + 2], b = t[S + 3];
    t[S + 0] = l * x + h * d + c * p, t[S + 1] = g * x + f * d + _ * p, t[S + 2] = u * x + m * d + v * p, t[S + 3] = b;
  }
};
gr.HSV = t2;
oi.Factory.addGetterSetter(oa.Node, "hue", 0, (0, aa.getNumberValidator)(), oi.Factory.afterSetFilter);
oi.Factory.addGetterSetter(oa.Node, "saturation", 0, (0, aa.getNumberValidator)(), oi.Factory.afterSetFilter);
oi.Factory.addGetterSetter(oa.Node, "value", 0, (0, aa.getNumberValidator)(), oi.Factory.afterSetFilter);
var pr = {};
Object.defineProperty(pr, "__esModule", { value: !0 });
pr.Invert = void 0;
const e2 = function(n) {
  const t = n.data, e = t.length;
  for (let i = 0; i < e; i += 4)
    t[i] = 255 - t[i], t[i + 1] = 255 - t[i + 1], t[i + 2] = 255 - t[i + 2];
};
pr.Invert = e2;
var _r = {};
Object.defineProperty(_r, "__esModule", { value: !0 });
_r.Kaleidoscope = void 0;
const vs = gt, ph = Gt, ml = Bt, _h = et, n2 = function(n, t, e) {
  const i = n.data, s = t.data, r = n.width, o = n.height, a = e.polarCenterX || r / 2, l = e.polarCenterY || o / 2;
  let h = Math.sqrt(a * a + l * l), c = r - a, g = o - l;
  const f = Math.sqrt(c * c + g * g);
  h = f > h ? f : h;
  const _ = o, u = r, m = 360 / u * Math.PI / 180;
  for (let v = 0; v < u; v += 1) {
    const S = Math.sin(v * m), x = Math.cos(v * m);
    for (let d = 0; d < _; d += 1) {
      c = Math.floor(a + h * d / _ * x), g = Math.floor(l + h * d / _ * S);
      let p = (g * r + c) * 4;
      const b = i[p + 0], E = i[p + 1], R = i[p + 2], w = i[p + 3];
      p = (v + d * r) * 4, s[p + 0] = b, s[p + 1] = E, s[p + 2] = R, s[p + 3] = w;
    }
  }
}, i2 = function(n, t, e) {
  const i = n.data, s = t.data, r = n.width, o = n.height, a = e.polarCenterX || r / 2, l = e.polarCenterY || o / 2;
  let h = Math.sqrt(a * a + l * l), c = r - a, g = o - l;
  const f = Math.sqrt(c * c + g * g);
  h = f > h ? f : h;
  const _ = o, u = r, m = e.polarRotation || 0;
  let v, S;
  for (c = 0; c < r; c += 1)
    for (g = 0; g < o; g += 1) {
      const x = c - a, d = g - l, p = Math.sqrt(x * x + d * d) * _ / h;
      let b = (Math.atan2(d, x) * 180 / Math.PI + 360 + m) % 360;
      b = b * u / 360, v = Math.floor(b), S = Math.floor(p);
      let E = (S * r + v) * 4;
      const R = i[E + 0], w = i[E + 1], k = i[E + 2], T = i[E + 3];
      E = (g * r + c) * 4, s[E + 0] = R, s[E + 1] = w, s[E + 2] = k, s[E + 3] = T;
    }
}, s2 = function(n) {
  const t = n.width, e = n.height;
  let i, s, r, o, a, l, h, c, g, f, _ = Math.round(this.kaleidoscopePower());
  const u = Math.round(this.kaleidoscopeAngle()), m = Math.floor(t * (u % 360) / 360);
  if (_ < 1)
    return;
  const v = ml.Util.createCanvasElement();
  v.width = t, v.height = e;
  const S = v.getContext("2d").getImageData(0, 0, t, e);
  ml.Util.releaseCanvas(v), n2(n, S, {
    polarCenterX: t / 2,
    polarCenterY: e / 2
  });
  let x = t / Math.pow(2, _);
  for (; x <= 8; )
    x = x * 2, _ -= 1;
  x = Math.ceil(x);
  let d = x, p = 0, b = d, E = 1;
  for (m + x > t && (p = d, b = 0, E = -1), s = 0; s < e; s += 1)
    for (i = p; i !== b; i += E)
      r = Math.round(i + m) % t, g = (t * s + r) * 4, a = S.data[g + 0], l = S.data[g + 1], h = S.data[g + 2], c = S.data[g + 3], f = (t * s + i) * 4, S.data[f + 0] = a, S.data[f + 1] = l, S.data[f + 2] = h, S.data[f + 3] = c;
  for (s = 0; s < e; s += 1)
    for (d = Math.floor(x), o = 0; o < _; o += 1) {
      for (i = 0; i < d + 1; i += 1)
        g = (t * s + i) * 4, a = S.data[g + 0], l = S.data[g + 1], h = S.data[g + 2], c = S.data[g + 3], f = (t * s + d * 2 - i - 1) * 4, S.data[f + 0] = a, S.data[f + 1] = l, S.data[f + 2] = h, S.data[f + 3] = c;
      d *= 2;
    }
  i2(S, n, { polarRotation: 0 });
};
_r.Kaleidoscope = s2;
vs.Factory.addGetterSetter(ph.Node, "kaleidoscopePower", 2, (0, _h.getNumberValidator)(), vs.Factory.afterSetFilter);
vs.Factory.addGetterSetter(ph.Node, "kaleidoscopeAngle", 0, (0, _h.getNumberValidator)(), vs.Factory.afterSetFilter);
var mr = {};
Object.defineProperty(mr, "__esModule", { value: !0 });
mr.Mask = void 0;
const vl = gt, r2 = Gt, o2 = et;
function ss(n, t, e) {
  let i = (e * n.width + t) * 4;
  const s = [];
  return s.push(n.data[i++], n.data[i++], n.data[i++], n.data[i++]), s;
}
function yi(n, t) {
  return Math.sqrt(Math.pow(n[0] - t[0], 2) + Math.pow(n[1] - t[1], 2) + Math.pow(n[2] - t[2], 2));
}
function a2(n) {
  const t = [0, 0, 0];
  for (let e = 0; e < n.length; e++)
    t[0] += n[e][0], t[1] += n[e][1], t[2] += n[e][2];
  return t[0] /= n.length, t[1] /= n.length, t[2] /= n.length, t;
}
function l2(n, t) {
  const e = ss(n, 0, 0), i = ss(n, n.width - 1, 0), s = ss(n, 0, n.height - 1), r = ss(n, n.width - 1, n.height - 1), o = t || 10;
  if (yi(e, i) < o && yi(i, r) < o && yi(r, s) < o && yi(s, e) < o) {
    const a = a2([i, e, r, s]), l = [];
    for (let h = 0; h < n.width * n.height; h++) {
      const c = yi(a, [
        n.data[h * 4],
        n.data[h * 4 + 1],
        n.data[h * 4 + 2]
      ]);
      l[h] = c < o ? 0 : 255;
    }
    return l;
  }
}
function c2(n, t) {
  for (let e = 0; e < n.width * n.height; e++)
    n.data[4 * e + 3] = t[e];
}
function h2(n, t, e) {
  const i = [1, 1, 1, 1, 0, 1, 1, 1, 1], s = Math.round(Math.sqrt(i.length)), r = Math.floor(s / 2), o = [];
  for (let a = 0; a < e; a++)
    for (let l = 0; l < t; l++) {
      const h = a * t + l;
      let c = 0;
      for (let g = 0; g < s; g++)
        for (let f = 0; f < s; f++) {
          const _ = a + g - r, u = l + f - r;
          if (_ >= 0 && _ < e && u >= 0 && u < t) {
            const m = _ * t + u, v = i[g * s + f];
            c += n[m] * v;
          }
        }
      o[h] = c === 255 * 8 ? 255 : 0;
    }
  return o;
}
function d2(n, t, e) {
  const i = [1, 1, 1, 1, 1, 1, 1, 1, 1], s = Math.round(Math.sqrt(i.length)), r = Math.floor(s / 2), o = [];
  for (let a = 0; a < e; a++)
    for (let l = 0; l < t; l++) {
      const h = a * t + l;
      let c = 0;
      for (let g = 0; g < s; g++)
        for (let f = 0; f < s; f++) {
          const _ = a + g - r, u = l + f - r;
          if (_ >= 0 && _ < e && u >= 0 && u < t) {
            const m = _ * t + u, v = i[g * s + f];
            c += n[m] * v;
          }
        }
      o[h] = c >= 255 * 4 ? 255 : 0;
    }
  return o;
}
function u2(n, t, e) {
  const i = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], s = Math.round(Math.sqrt(i.length)), r = Math.floor(s / 2), o = [];
  for (let a = 0; a < e; a++)
    for (let l = 0; l < t; l++) {
      const h = a * t + l;
      let c = 0;
      for (let g = 0; g < s; g++)
        for (let f = 0; f < s; f++) {
          const _ = a + g - r, u = l + f - r;
          if (_ >= 0 && _ < e && u >= 0 && u < t) {
            const m = _ * t + u, v = i[g * s + f];
            c += n[m] * v;
          }
        }
      o[h] = c;
    }
  return o;
}
const f2 = function(n) {
  const t = this.threshold();
  let e = l2(n, t);
  return e && (e = h2(e, n.width, n.height), e = d2(e, n.width, n.height), e = u2(e, n.width, n.height), c2(n, e)), n;
};
mr.Mask = f2;
vl.Factory.addGetterSetter(r2.Node, "threshold", 0, (0, o2.getNumberValidator)(), vl.Factory.afterSetFilter);
var vr = {};
Object.defineProperty(vr, "__esModule", { value: !0 });
vr.Noise = void 0;
const yl = gt, g2 = Gt, p2 = et, _2 = function(n) {
  const t = this.noise() * 255, e = n.data, i = e.length, s = t / 2;
  for (let r = 0; r < i; r += 4)
    e[r + 0] += s - 2 * s * Math.random(), e[r + 1] += s - 2 * s * Math.random(), e[r + 2] += s - 2 * s * Math.random();
};
vr.Noise = _2;
yl.Factory.addGetterSetter(g2.Node, "noise", 0.2, (0, p2.getNumberValidator)(), yl.Factory.afterSetFilter);
var yr = {};
Object.defineProperty(yr, "__esModule", { value: !0 });
yr.Pixelate = void 0;
const bl = gt, m2 = Bt, v2 = Gt, y2 = et, b2 = function(n) {
  let t = Math.ceil(this.pixelSize()), e = n.width, i = n.height, s = Math.ceil(e / t), r = Math.ceil(i / t), o = n.data;
  if (t <= 0) {
    m2.Util.error("pixelSize value can not be <= 0");
    return;
  }
  for (let a = 0; a < s; a += 1)
    for (let l = 0; l < r; l += 1) {
      let h = 0, c = 0, g = 0, f = 0;
      const _ = a * t, u = _ + t, m = l * t, v = m + t;
      let S = 0;
      for (let x = _; x < u; x += 1)
        if (!(x >= e))
          for (let d = m; d < v; d += 1) {
            if (d >= i)
              continue;
            const p = (e * d + x) * 4;
            h += o[p + 0], c += o[p + 1], g += o[p + 2], f += o[p + 3], S += 1;
          }
      h = h / S, c = c / S, g = g / S, f = f / S;
      for (let x = _; x < u; x += 1)
        if (!(x >= e))
          for (let d = m; d < v; d += 1) {
            if (d >= i)
              continue;
            const p = (e * d + x) * 4;
            o[p + 0] = h, o[p + 1] = c, o[p + 2] = g, o[p + 3] = f;
          }
    }
};
yr.Pixelate = b2;
bl.Factory.addGetterSetter(v2.Node, "pixelSize", 8, (0, y2.getNumberValidator)(), bl.Factory.afterSetFilter);
var br = {};
Object.defineProperty(br, "__esModule", { value: !0 });
br.Posterize = void 0;
const Sl = gt, S2 = Gt, w2 = et, C2 = function(n) {
  const t = Math.round(this.levels() * 254) + 1, e = n.data, i = e.length, s = 255 / t;
  for (let r = 0; r < i; r += 1)
    e[r] = Math.floor(e[r] / s) * s;
};
br.Posterize = C2;
Sl.Factory.addGetterSetter(S2.Node, "levels", 0.5, (0, w2.getNumberValidator)(), Sl.Factory.afterSetFilter);
var Sr = {};
Object.defineProperty(Sr, "__esModule", { value: !0 });
Sr.RGB = void 0;
const ys = gt, la = Gt, x2 = et, E2 = function(n) {
  const t = n.data, e = t.length, i = this.red(), s = this.green(), r = this.blue();
  for (let o = 0; o < e; o += 4) {
    const a = (0.34 * t[o] + 0.5 * t[o + 1] + 0.16 * t[o + 2]) / 255;
    t[o] = a * i, t[o + 1] = a * s, t[o + 2] = a * r, t[o + 3] = t[o + 3];
  }
};
Sr.RGB = E2;
ys.Factory.addGetterSetter(la.Node, "red", 0, function(n) {
  return this._filterUpToDate = !1, n > 255 ? 255 : n < 0 ? 0 : Math.round(n);
});
ys.Factory.addGetterSetter(la.Node, "green", 0, function(n) {
  return this._filterUpToDate = !1, n > 255 ? 255 : n < 0 ? 0 : Math.round(n);
});
ys.Factory.addGetterSetter(la.Node, "blue", 0, x2.RGBComponent, ys.Factory.afterSetFilter);
var wr = {};
Object.defineProperty(wr, "__esModule", { value: !0 });
wr.RGBA = void 0;
const Li = gt, Cr = Gt, P2 = et, T2 = function(n) {
  const t = n.data, e = t.length, i = this.red(), s = this.green(), r = this.blue(), o = this.alpha();
  for (let a = 0; a < e; a += 4) {
    const l = 1 - o;
    t[a] = i * o + t[a] * l, t[a + 1] = s * o + t[a + 1] * l, t[a + 2] = r * o + t[a + 2] * l;
  }
};
wr.RGBA = T2;
Li.Factory.addGetterSetter(Cr.Node, "red", 0, function(n) {
  return this._filterUpToDate = !1, n > 255 ? 255 : n < 0 ? 0 : Math.round(n);
});
Li.Factory.addGetterSetter(Cr.Node, "green", 0, function(n) {
  return this._filterUpToDate = !1, n > 255 ? 255 : n < 0 ? 0 : Math.round(n);
});
Li.Factory.addGetterSetter(Cr.Node, "blue", 0, P2.RGBComponent, Li.Factory.afterSetFilter);
Li.Factory.addGetterSetter(Cr.Node, "alpha", 1, function(n) {
  return this._filterUpToDate = !1, n > 1 ? 1 : n < 0 ? 0 : n;
});
var xr = {};
Object.defineProperty(xr, "__esModule", { value: !0 });
xr.Sepia = void 0;
const M2 = function(n) {
  const t = n.data, e = t.length;
  for (let i = 0; i < e; i += 4) {
    const s = t[i + 0], r = t[i + 1], o = t[i + 2];
    t[i + 0] = Math.min(255, s * 0.393 + r * 0.769 + o * 0.189), t[i + 1] = Math.min(255, s * 0.349 + r * 0.686 + o * 0.168), t[i + 2] = Math.min(255, s * 0.272 + r * 0.534 + o * 0.131);
  }
};
xr.Sepia = M2;
var Er = {};
Object.defineProperty(Er, "__esModule", { value: !0 });
Er.Solarize = void 0;
const A2 = function(n) {
  const t = n.data, e = n.width, i = n.height, s = e * 4;
  let r = i;
  do {
    const o = (r - 1) * s;
    let a = e;
    do {
      const l = o + (a - 1) * 4;
      let h = t[l], c = t[l + 1], g = t[l + 2];
      h > 127 && (h = 255 - h), c > 127 && (c = 255 - c), g > 127 && (g = 255 - g), t[l] = h, t[l + 1] = c, t[l + 2] = g;
    } while (--a);
  } while (--r);
};
Er.Solarize = A2;
var Pr = {};
Object.defineProperty(Pr, "__esModule", { value: !0 });
Pr.Threshold = void 0;
const wl = gt, O2 = Gt, R2 = et, k2 = function(n) {
  const t = this.threshold() * 255, e = n.data, i = e.length;
  for (let s = 0; s < i; s += 1)
    e[s] = e[s] < t ? 0 : 255;
};
Pr.Threshold = k2;
wl.Factory.addGetterSetter(O2.Node, "threshold", 0.5, (0, R2.getNumberValidator)(), wl.Factory.afterSetFilter);
Object.defineProperty(Ls, "__esModule", { value: !0 });
Ls.Konva = void 0;
const Cl = Ic, N2 = Vs, F2 = js, D2 = Xs, L2 = zs, I2 = Ks, xl = si, G2 = Hi, B2 = ui, U2 = ji, V2 = Js, H2 = Qs, $2 = tr, j2 = er, Y2 = gi, W2 = nr, X2 = ir, z2 = sr, K2 = or, q2 = ar, Z2 = lr, J2 = cr, Q2 = dr, tg = ur, eg = fr, ng = gr, ig = pr, sg = _r, rg = mr, og = vr, ag = yr, lg = br, cg = Sr, hg = wr, dg = xr, ug = Er, fg = Pr;
Ls.Konva = Cl.Konva.Util._assign(Cl.Konva, {
  Arc: N2.Arc,
  Arrow: F2.Arrow,
  Circle: D2.Circle,
  Ellipse: L2.Ellipse,
  Image: I2.Image,
  Label: xl.Label,
  Tag: xl.Tag,
  Line: G2.Line,
  Path: B2.Path,
  Rect: U2.Rect,
  RegularPolygon: V2.RegularPolygon,
  Ring: H2.Ring,
  Sprite: $2.Sprite,
  Star: j2.Star,
  Text: Y2.Text,
  TextPath: W2.TextPath,
  Transformer: X2.Transformer,
  Wedge: z2.Wedge,
  Filters: {
    Blur: K2.Blur,
    Brighten: q2.Brighten,
    Contrast: Z2.Contrast,
    Emboss: J2.Emboss,
    Enhance: Q2.Enhance,
    Grayscale: tg.Grayscale,
    HSL: eg.HSL,
    HSV: ng.HSV,
    Invert: ig.Invert,
    Kaleidoscope: sg.Kaleidoscope,
    Mask: rg.Mask,
    Noise: og.Noise,
    Pixelate: ag.Pixelate,
    Posterize: lg.Posterize,
    RGB: cg.RGB,
    RGBA: hg.RGBA,
    Sepia: dg.Sepia,
    Solarize: ug.Solarize,
    Threshold: fg.Threshold
  }
});
var gg = Xo.exports;
Object.defineProperty(gg, "__esModule", { value: !0 });
const pg = Ls;
Xo.exports = pg.Konva;
var _g = Xo.exports;
const Lt = /* @__PURE__ */ f0(_g);
function mh(n, t, e = 0, i = n.length - 1, s = mg) {
  for (; i > e; ) {
    if (i - e > 600) {
      const l = i - e + 1, h = t - e + 1, c = Math.log(l), g = 0.5 * Math.exp(2 * c / 3), f = 0.5 * Math.sqrt(c * g * (l - g) / l) * (h - l / 2 < 0 ? -1 : 1), _ = Math.max(e, Math.floor(t - h * g / l + f)), u = Math.min(i, Math.floor(t + (l - h) * g / l + f));
      mh(n, t, _, u, s);
    }
    const r = n[t];
    let o = e, a = i;
    for (bi(n, e, t), s(n[i], r) > 0 && bi(n, e, i); o < a; ) {
      for (bi(n, o, a), o++, a--; s(n[o], r) < 0; )
        o++;
      for (; s(n[a], r) > 0; )
        a--;
    }
    s(n[e], r) === 0 ? bi(n, e, a) : (a++, bi(n, a, i)), a <= t && (e = a + 1), t <= a && (i = a - 1);
  }
}
function bi(n, t, e) {
  const i = n[t];
  n[t] = n[e], n[e] = i;
}
function mg(n, t) {
  return n < t ? -1 : n > t ? 1 : 0;
}
class vg {
  constructor(t = 9) {
    this._maxEntries = Math.max(4, t), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(t) {
    let e = this.data;
    const i = [];
    if (!os(t, e))
      return i;
    const s = this.toBBox, r = [];
    for (; e; ) {
      for (let o = 0; o < e.children.length; o++) {
        const a = e.children[o], l = e.leaf ? s(a) : a;
        os(t, l) && (e.leaf ? i.push(a) : qr(t, l) ? this._all(a, i) : r.push(a));
      }
      e = r.pop();
    }
    return i;
  }
  collides(t) {
    let e = this.data;
    if (!os(t, e))
      return !1;
    const i = [];
    for (; e; ) {
      for (let s = 0; s < e.children.length; s++) {
        const r = e.children[s], o = e.leaf ? this.toBBox(r) : r;
        if (os(t, o)) {
          if (e.leaf || qr(t, o))
            return !0;
          i.push(r);
        }
      }
      e = i.pop();
    }
    return !1;
  }
  load(t) {
    if (!(t && t.length))
      return this;
    if (t.length < this._minEntries) {
      for (let i = 0; i < t.length; i++)
        this.insert(t[i]);
      return this;
    }
    let e = this._build(t.slice(), 0, t.length - 1, 0);
    if (!this.data.children.length)
      this.data = e;
    else if (this.data.height === e.height)
      this._splitRoot(this.data, e);
    else {
      if (this.data.height < e.height) {
        const i = this.data;
        this.data = e, e = i;
      }
      this._insert(e, this.data.height - e.height - 1, !0);
    }
    return this;
  }
  insert(t) {
    return t && this._insert(t, this.data.height - 1), this;
  }
  clear() {
    return this.data = zn([]), this;
  }
  remove(t, e) {
    if (!t)
      return this;
    let i = this.data;
    const s = this.toBBox(t), r = [], o = [];
    let a, l, h;
    for (; i || r.length; ) {
      if (i || (i = r.pop(), l = r[r.length - 1], a = o.pop(), h = !0), i.leaf) {
        const c = yg(t, i.children, e);
        if (c !== -1)
          return i.children.splice(c, 1), r.push(i), this._condense(r), this;
      }
      !h && !i.leaf && qr(i, s) ? (r.push(i), o.push(a), a = 0, l = i, i = i.children[0]) : l ? (a++, i = l.children[a], h = !1) : i = null;
    }
    return this;
  }
  toBBox(t) {
    return t;
  }
  compareMinX(t, e) {
    return t.minX - e.minX;
  }
  compareMinY(t, e) {
    return t.minY - e.minY;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(t) {
    return this.data = t, this;
  }
  _all(t, e) {
    const i = [];
    for (; t; )
      t.leaf ? e.push(...t.children) : i.push(...t.children), t = i.pop();
    return e;
  }
  _build(t, e, i, s) {
    const r = i - e + 1;
    let o = this._maxEntries, a;
    if (r <= o)
      return a = zn(t.slice(e, i + 1)), Wn(a, this.toBBox), a;
    s || (s = Math.ceil(Math.log(r) / Math.log(o)), o = Math.ceil(r / Math.pow(o, s - 1))), a = zn([]), a.leaf = !1, a.height = s;
    const l = Math.ceil(r / o), h = l * Math.ceil(Math.sqrt(o));
    El(t, e, i, h, this.compareMinX);
    for (let c = e; c <= i; c += h) {
      const g = Math.min(c + h - 1, i);
      El(t, c, g, l, this.compareMinY);
      for (let f = c; f <= g; f += l) {
        const _ = Math.min(f + l - 1, g);
        a.children.push(this._build(t, f, _, s - 1));
      }
    }
    return Wn(a, this.toBBox), a;
  }
  _chooseSubtree(t, e, i, s) {
    for (; s.push(e), !(e.leaf || s.length - 1 === i); ) {
      let r = 1 / 0, o = 1 / 0, a;
      for (let l = 0; l < e.children.length; l++) {
        const h = e.children[l], c = Kr(h), g = wg(t, h) - c;
        g < o ? (o = g, r = c < r ? c : r, a = h) : g === o && c < r && (r = c, a = h);
      }
      e = a || e.children[0];
    }
    return e;
  }
  _insert(t, e, i) {
    const s = i ? t : this.toBBox(t), r = [], o = this._chooseSubtree(s, this.data, e, r);
    for (o.children.push(t), xi(o, s); e >= 0 && r[e].children.length > this._maxEntries; )
      this._split(r, e), e--;
    this._adjustParentBBoxes(s, r, e);
  }
  // split overflowed node into two
  _split(t, e) {
    const i = t[e], s = i.children.length, r = this._minEntries;
    this._chooseSplitAxis(i, r, s);
    const o = this._chooseSplitIndex(i, r, s), a = zn(i.children.splice(o, i.children.length - o));
    a.height = i.height, a.leaf = i.leaf, Wn(i, this.toBBox), Wn(a, this.toBBox), e ? t[e - 1].children.push(a) : this._splitRoot(i, a);
  }
  _splitRoot(t, e) {
    this.data = zn([t, e]), this.data.height = t.height + 1, this.data.leaf = !1, Wn(this.data, this.toBBox);
  }
  _chooseSplitIndex(t, e, i) {
    let s, r = 1 / 0, o = 1 / 0;
    for (let a = e; a <= i - e; a++) {
      const l = Ci(t, 0, a, this.toBBox), h = Ci(t, a, i, this.toBBox), c = Cg(l, h), g = Kr(l) + Kr(h);
      c < r ? (r = c, s = a, o = g < o ? g : o) : c === r && g < o && (o = g, s = a);
    }
    return s || i - e;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(t, e, i) {
    const s = t.leaf ? this.compareMinX : bg, r = t.leaf ? this.compareMinY : Sg, o = this._allDistMargin(t, e, i, s), a = this._allDistMargin(t, e, i, r);
    o < a && t.children.sort(s);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(t, e, i, s) {
    t.children.sort(s);
    const r = this.toBBox, o = Ci(t, 0, e, r), a = Ci(t, i - e, i, r);
    let l = rs(o) + rs(a);
    for (let h = e; h < i - e; h++) {
      const c = t.children[h];
      xi(o, t.leaf ? r(c) : c), l += rs(o);
    }
    for (let h = i - e - 1; h >= e; h--) {
      const c = t.children[h];
      xi(a, t.leaf ? r(c) : c), l += rs(a);
    }
    return l;
  }
  _adjustParentBBoxes(t, e, i) {
    for (let s = i; s >= 0; s--)
      xi(e[s], t);
  }
  _condense(t) {
    for (let e = t.length - 1, i; e >= 0; e--)
      t[e].children.length === 0 ? e > 0 ? (i = t[e - 1].children, i.splice(i.indexOf(t[e]), 1)) : this.clear() : Wn(t[e], this.toBBox);
  }
}
function yg(n, t, e) {
  if (!e)
    return t.indexOf(n);
  for (let i = 0; i < t.length; i++)
    if (e(n, t[i]))
      return i;
  return -1;
}
function Wn(n, t) {
  Ci(n, 0, n.children.length, t, n);
}
function Ci(n, t, e, i, s) {
  s || (s = zn(null)), s.minX = 1 / 0, s.minY = 1 / 0, s.maxX = -1 / 0, s.maxY = -1 / 0;
  for (let r = t; r < e; r++) {
    const o = n.children[r];
    xi(s, n.leaf ? i(o) : o);
  }
  return s;
}
function xi(n, t) {
  return n.minX = Math.min(n.minX, t.minX), n.minY = Math.min(n.minY, t.minY), n.maxX = Math.max(n.maxX, t.maxX), n.maxY = Math.max(n.maxY, t.maxY), n;
}
function bg(n, t) {
  return n.minX - t.minX;
}
function Sg(n, t) {
  return n.minY - t.minY;
}
function Kr(n) {
  return (n.maxX - n.minX) * (n.maxY - n.minY);
}
function rs(n) {
  return n.maxX - n.minX + (n.maxY - n.minY);
}
function wg(n, t) {
  return (Math.max(t.maxX, n.maxX) - Math.min(t.minX, n.minX)) * (Math.max(t.maxY, n.maxY) - Math.min(t.minY, n.minY));
}
function Cg(n, t) {
  const e = Math.max(n.minX, t.minX), i = Math.max(n.minY, t.minY), s = Math.min(n.maxX, t.maxX), r = Math.min(n.maxY, t.maxY);
  return Math.max(0, s - e) * Math.max(0, r - i);
}
function qr(n, t) {
  return n.minX <= t.minX && n.minY <= t.minY && t.maxX <= n.maxX && t.maxY <= n.maxY;
}
function os(n, t) {
  return t.minX <= n.maxX && t.minY <= n.maxY && t.maxX >= n.minX && t.maxY >= n.minY;
}
function zn(n) {
  return {
    children: n,
    height: 1,
    leaf: !0,
    minX: 1 / 0,
    minY: 1 / 0,
    maxX: -1 / 0,
    maxY: -1 / 0
  };
}
function El(n, t, e, i, s) {
  const r = [t, e];
  for (; r.length; ) {
    if (e = r.pop(), t = r.pop(), e - t <= i)
      continue;
    const o = t + Math.ceil((e - t) / i / 2) * i;
    mh(n, o, t, e, s), r.push(t, o, o, e);
  }
}
const Pl = 4, he = 20, Zt = 1, Zr = 0.5, ye = 40, Tl = 1.3, xg = {
  __name: "SchemeMain",
  emits: [
    "changedSeatsState"
  ],
  setup(n, { emit: t }) {
    const e = je("schemeSeats"), i = je("schemeSeatsChunk"), s = bt({}), r = t;
    let o = null;
    const a = bt({}), l = bt(!1), h = bt(!0), c = bt(!1), g = bt(null);
    De([l, h], ([A, F]) => {
      F && !A ? f.value = !0 : f.value = !1;
    });
    const f = bt(!0), _ = bt(!1), u = bt(1.3), m = bt([]), v = bt(null), S = bt(null), x = bt(null), d = bt(null), p = bt(null), b = an({
      image: null,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      filters: [Lt.Filters.Sharpen],
      sharpen: 1
    }), E = an({
      width: 1e3,
      height: 700
      // draggable: isDraggable.value,
      // scaleX: currentZoom.value,
      // scaleY: currentZoom.value,
    }), R = on(() => ({
      ...E,
      scaleX: u.value,
      scaleY: u.value,
      draggable: f.value
    })), w = (A) => ({
      x: A.x,
      y: A.y,
      width: he,
      height: he,
      fill: (() => {
        let F = "#ccc";
        return A.bg_color && (Array.isArray(A.bg_color) ? F = A.bg_color[0] : F = A.bg_color), ct.value.selectedSeats[A.id] && (F = "blue"), F;
      })(),
      stroke: (() => {
        let F = "#000";
        return A.border_color && (Array.isArray(A.border_color) ? F = A.border_color[0] : F = A.border_color), a.value[A.id] && (F = "lightgreen"), F;
      })(),
      strokeWidth: 1,
      cornerRadius: 4,
      listening: !0
    }), k = (A) => ({
      OFFSET_X: -2,
      OFFSET_Y: -1,
      x: A.x + -2,
      y: A.y + -1,
      width: he,
      height: he,
      text: A.seat,
      fontSize: 10,
      fill: "#000",
      align: "right",
      verticalAlign: "bottom",
      listening: !1
    }), T = (A) => ({
      OFFSET_X: 1,
      OFFSET_Y: 2,
      x: A.x + 1,
      y: A.y + 2,
      width: he,
      height: he,
      text: A.row,
      fontSize: 8,
      fill: "#000",
      align: "start",
      verticalAlign: "top",
      listening: !1
      // События обрабатываются прямоугольником
    }), O = an({
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0
    }), G = () => {
      const A = Object.values(e.value);
      if (A.length === 0) {
        O.minX = 0, O.minY = 0, O.maxX = E.width, O.maxY = E.height;
        return;
      }
      O.minX = Math.min(...A.map((F) => F.x)), O.minY = Math.min(...A.map((F) => F.y)), O.maxX = Math.max(...A.map((F) => F.x + he)), O.maxY = Math.max(...A.map((F) => F.y + he));
    }, $ = (A, F, nt) => {
      const ut = F.x - O.minX + ye, ft = F.y - O.minY + ye, Wt = nt * Zt, _t = ut * Zt, Vt = ft * Zt, ke = w(F), ee = k(F), bn = T(F);
      A.fillStyle = ke.fill, A.strokeStyle = ke.stroke, A.lineWidth = Number(Zt) * ke.strokeWidth, A.beginPath(), A.roundRect(
        _t,
        Vt,
        Wt,
        Wt,
        [ke.cornerRadius * Zt]
      ), A.fill(), A.stroke(), A.fillStyle = ee.fill, A.font = `${ee.fontSize * Zt}px Arial`, A.textAlign = ee.align, A.textBaseline = ee.verticalAlign, A.fillText(
        F.seat,
        _t + Wt + ee.OFFSET_X * Zt,
        Vt + Wt + ee.OFFSET_Y * Zt
      ), A.font = `${bn.fontSize * Zt}px Arial`, A.textAlign = bn.align, A.textBaseline = bn.verticalAlign, A.fillText(
        F.row,
        _t + bn.OFFSET_X * Zt,
        Vt + bn.OFFSET_Y * Zt
      );
    }, Z = (A, F) => {
      const nt = new vg(), ut = Object.values(A).map((ft) => ({
        minX: ft.x,
        minY: ft.y,
        maxX: ft.x + F,
        maxY: ft.y + F,
        id: ft.id
      }));
      return nt.load(ut), nt;
    }, Y = (A, F, nt, ut, ft) => {
      const Wt = nt.getContext("2d"), _t = ft, Vt = {
        minX: A.x - _t,
        minY: A.y - _t,
        maxX: A.x + ft + _t,
        maxY: A.y + ft + _t
      }, ke = ut.search(Vt), ee = {
        minX: (Vt.minX - O.minX + ye) * Zt,
        minY: (Vt.minY - O.minY + ye) * Zt,
        maxX: (Vt.maxX - O.minX + ye) * Zt,
        maxY: (Vt.maxY - O.minY + ye) * Zt
      };
      return Wt.clearRect(
        ee.minX,
        ee.minY,
        ee.maxX - ee.minX,
        ee.maxY - ee.minY
      ), ke.forEach(({ id: bn }) => {
        $(Wt, F[bn], ft);
      }), ee;
    }, it = () => {
      G();
      const A = (O.maxX - O.minX + ye * 2) * Zt, F = (O.maxY - O.minY + ye * 2) * Zt;
      p.value = document.createElement("canvas"), p.value.width = A, p.value.height = F, b.x = O.minX - ye, b.y = O.minY - ye, b.width = O.maxX - O.minX + ye * 2, b.height = O.maxY - O.minY + ye * 2;
    }, z = () => {
      const A = p.value.getContext("2d");
      A.clearRect(0, 0, p.value.width, p.value.height), Object.values(s.value).forEach((F) => {
        $(A, F, he);
      }), b.image = p.value, d.value.getNode().image(p.value), d.value.getNode().getLayer().batchDraw();
    }, V = () => {
      if (u.value < Zr) {
        m.value = [];
        return;
      }
      if (!v.value || !o)
        return;
      const A = v.value.getNode(), F = A.scaleX(), nt = {
        x: -A.x() / F,
        y: -A.y() / F,
        width: A.width() / F,
        height: A.height() / F
      }, ut = o.search({
        minX: nt.x,
        minY: nt.y,
        maxX: nt.x + nt.width,
        maxY: nt.y + nt.height
      });
      m.value = ut.map((ft) => ft.id);
    }, lt = ja(() => {
      V();
    }, 16.7), Q = () => {
      f && (_.value = !0, u.value <= Pl && (S.value.getNode().show(), x.value.getNode().hide()));
    }, rt = () => {
      if (f) {
        if (_.value = !1, u.value < Zr) {
          S.value.getNode().show(), x.value.getNode().hide(), m.value = [];
          return;
        }
        S.value.getNode().hide(), x.value.getNode().show(), V();
      }
    }, X = (A) => {
      if (A.preventDefault(), !v.value)
        return;
      const F = v.value.getNode(), nt = u.value, ut = A.deltaY > 0 ? 0.95 : 1.05, ft = Math.min(Math.max(nt * ut, 0.1), 20), Wt = F.getPointerPosition();
      if (Wt) {
        const _t = {
          x: (Wt.x - F.x()) / nt,
          y: (Wt.y - F.y()) / nt
        }, Vt = Wt.x - _t.x * ft, ke = Wt.y - _t.y * ft;
        F.x(Vt), F.y(ke);
      } else {
        const _t = {
          x: F.width() / 2,
          y: F.height() / 2
        }, Vt = {
          x: (_t.x - F.x()) / nt,
          y: (_t.y - F.y()) / nt
        }, ke = _t.x - Vt.x * ft, ee = _t.y - Vt.y * ft;
        F.x(ke), F.y(ee);
      }
      if (F.scale({ x: ft, y: ft }), u.value = ft, F.batchDraw(), ft < Zr) {
        m.value = [], S.value.getNode().show(), x.value.getNode().hide();
        return;
      }
      lt(), ft > Pl ? (S.value.getNode().hide(), x.value.getNode().show()) : _.value && (S.value.getNode().show(), x.value.getNode().hide());
    }, Pt = (A) => {
      wt(A.id), D.saveState(ct.value), x.value.getNode().clearCache(), Y(
        A,
        s.value,
        p.value,
        o,
        he
      ), d.value.getNode().image(p.value), d.value.getNode().getLayer().batchDraw();
    }, Ut = bt(null), qt = () => {
      var A, F;
      E.width = (A = Ut.value) == null ? void 0 : A.offsetWidth, E.height = (F = Ut.value) == null ? void 0 : F.offsetHeight, it(), z(), V();
    }, ct = bt({
      selectedSeats: {}
      // spatialIndex: null,
    }), P = () => {
      ct.value = {
        selectedSeats: {}
        // spatialIndex: null,
      };
    }, {
      StateHistoryManager: D,
      undoLastAction: q
    } = d0(ct, z), St = on(() => {
      const A = JSON.parse(JSON.stringify(ct.value));
      return bt(A);
    });
    De(() => St.value, (A) => {
      console.log("getSeatsState.value : ", A), r("changedSeatsState", A.value.selectedSeats);
    });
    const wt = (A) => {
      ct.value.selectedSeats[A] ? delete ct.value.selectedSeats[A] : ct.value.selectedSeats[A] = e.value[A];
    }, Rt = () => {
      if (!v.value || !O.maxX)
        return;
      const A = v.value.getNode(), F = (O.minX + O.maxX) / 2, nt = (O.minY + O.maxY) / 2, ut = E.width / 2, ft = E.height / 2;
      A.x(ut - F * u.value), A.y(ft - nt * u.value), A.batchDraw(), V();
    };
    De(e, (A, F) => {
      console.log("watch seats", A), A && (s.value = A, P(), D.clearState(), D.saveState(ct.value), it(), Rt(), o = Z(e.value, he), z(), V());
    }, { deep: !0 }), De(i, (A) => {
      console.log("watch newSeatsChunk", A), A && (s.value = {
        ...s.value,
        ...A
      }, P(), D.clearState(), D.saveState(ct.value), z());
    }, { deep: !0 });
    const y = (A) => {
      Ut.value.style.cursor = "pointer";
    }, C = (A) => {
      Ut.value.style.cursor = "default";
    }, M = (A, F) => {
      h.value && (c.value = !0, f.value = !1, ct.value.selectedSeats[A] ? ce.value[A] = s.value[A] : Dt.value[A] = s.value[A], g.value = String(A));
    }, I = () => {
      if (!h.value || !c.value)
        return;
      const A = v.value.getNode(), F = A.getPointerPosition();
      if (!F)
        return;
      const nt = A.getIntersection(F);
      if ((nt == null ? void 0 : nt.name()) === "shape") {
        const ut = nt.id();
        if (ut === g.value)
          return;
        ct.value.selectedSeats[ut] ? ce.value[ut] ? delete ce.value[ut] : ce.value[ut] = s.value[ut] : Dt.value[ut] ? delete Dt.value[ut] : Dt.value[ut] = s.value[ut], g.value = ut;
      } else
        g.value = null;
    }, N = () => {
      if (!h.value || (c.value = !1, f.value = !0, g.value = null, !Object.keys(Dt.value).length && !Object.keys(ce.value).length))
        return;
      const A = { ...ct.value.selectedSeats };
      for (const F in ce.value)
        delete A[F];
      ct.value.selectedSeats = {
        ...A,
        ...Dt.value
      }, D.saveState(ct.value), Dt.value = {}, ce.value = {}, z();
    }, L = () => {
      window.addEventListener("mousemove", I), window.addEventListener("mouseup", N);
    }, j = () => {
      window.removeEventListener("mousemove", I), window.removeEventListener("mouseup", N);
    }, H = bt(!1), U = bt(!1), B = on(() => H.value || U.value);
    De(B, (A) => {
      A && l.value ? f.value = !0 : !A && l.value && (f.value = !1);
    }, { immediate: !0 });
    const J = (A) => {
      A.key === "Shift" && (H.value = !0);
    }, W = (A) => {
      A.key === "Shift" && (H.value = !1);
    }, K = (A) => {
      A.button === 1 && (U.value = !0);
    }, tt = (A) => {
      A.button === 1 && (U.value = !1);
    }, pt = () => {
      document.addEventListener("keydown", J), document.addEventListener("keyup", W), document.addEventListener("mousedown", K), document.addEventListener("mouseup", tt);
    }, Tt = () => {
      document.removeEventListener("keydown", J), document.removeEventListener("keyup", W), document.removeEventListener("mousedown", K), document.removeEventListener("mouseup", tt);
    }, yt = bt(!1), Dt = bt({}), ot = bt({
      fill: "rgba(0,0,255,0.5)",
      visible: !1,
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0
    }), ue = on(() => ({
      fill: ot.value.fill,
      visible: ot.value.visible,
      x: Math.min(ot.value.x1, ot.value.x2),
      y: Math.min(ot.value.y1, ot.value.y2),
      width: Math.abs(ot.value.x2 - ot.value.x1),
      height: Math.abs(ot.value.y2 - ot.value.y1)
      // ref: selectionRectRef,
    })), te = (A) => {
      if (!A)
        return { x: 0, y: 0 };
      const F = A.getPointerPosition();
      return F ? A.getAbsoluteTransform().copy().invert().point(F) : { x: 0, y: 0 };
    }, yn = (A) => {
      if (!l.value || !m.value.length || f.value)
        return;
      const F = v.value.getNode(), nt = te(F);
      ot.value = {
        ...ot.value,
        visible: !0,
        x1: nt.x,
        y1: nt.y,
        x2: nt.x,
        y2: nt.y
      };
    }, Yi = (A) => {
      if (!l.value || f.value || !ot.value.visible)
        return;
      const F = v.value.getNode(), nt = te(F);
      ot.value = {
        ...ot.value,
        x2: nt.x,
        y2: nt.y
      };
      const ut = {
        x: Math.min(ot.value.x1, ot.value.x2),
        y: Math.min(ot.value.y1, ot.value.y2),
        width: Math.abs(ot.value.x2 - ot.value.x1),
        height: Math.abs(ot.value.y2 - ot.value.y1)
      }, ft = {};
      (o == null ? void 0 : o.search({
        minX: ut.x,
        minY: ut.y,
        maxX: ut.x + ut.width,
        maxY: ut.y + ut.height
      })).forEach((_t) => {
        const Vt = {
          x: s.value[_t.id].x,
          y: s.value[_t.id].y,
          width: he,
          height: he
        };
        ae(ut, Vt) && (ft[_t.id] = s.value[_t.id]);
      }), yt.value ? ce.value = { ...ft } : Dt.value = { ...ft };
    }, ae = (A, F) => A.x < F.x + F.width && A.x + A.width > F.x && A.y < F.y + F.height && A.y + A.height > F.y, me = (A) => {
      if (l.value) {
        if (f.value) {
          ot.value.visible = !1;
          return;
        }
        if (ot.value.visible) {
          if (yt.value) {
            const F = { ...ct.value.selectedSeats };
            for (const nt in ce.value)
              delete F[nt];
            ct.value.selectedSeats = {
              ...F
            };
          } else
            ct.value.selectedSeats = {
              ...ct.value.selectedSeats,
              ...Dt.value
            };
          D.saveState(ct.value), Dt.value = {}, ce.value = {}, z(), ot.value.visible = !1;
        }
      }
    }, ce = bt({}), ca = (A) => {
      (A.key === "Control" || A.key === "Meta") && (yt.value = !0, ot.value.fill = "rgba(255,0,0,0.5)");
    }, ha = (A) => {
      (A.key === "Control" || A.key === "Meta") && (yt.value = !1, ot.value.fill = "rgba(0,0,255,0.5)");
    }, Sh = () => {
      document.addEventListener("keydown", ca), document.addEventListener("keyup", ha);
    }, wh = () => {
      document.removeEventListener("keydown", ca), document.removeEventListener("keyup", ha);
    }, Wi = { capture: !0, passive: !1 }, Xi = (A) => {
      if (!v.value || u.value >= Tl)
        return;
      const F = v.value.getNode();
      F.setPointersPositions(A);
      const nt = F.getPointerPosition();
      if (!nt)
        return;
      const ut = u.value, ft = Tl, Wt = {
        x: (nt.x - F.x()) / ut,
        y: (nt.y - F.y()) / ut
      }, _t = nt.x - Wt.x * ft, Vt = nt.y - Wt.y * ft;
      F.x(_t), F.y(Vt), F.scale({ x: ft, y: ft }), u.value = ft, V(), f.value && (A.preventDefault(), A.stopPropagation(), F.setPointersPositions(A), F.startDrag());
    }, Ch = () => {
      ec(() => {
        Ut.value.addEventListener("mousedown", Xi, Wi), Ut.value.addEventListener("touchstart", Xi, Wi);
      });
    }, xh = () => {
      Ut.value.removeEventListener("mousedown", Xi, Wi), Ut.value.removeEventListener("touchstart", Xi, Wi);
    };
    return ai(() => {
      qt(), window.addEventListener("resize", qt), Sh(), pt(), Ch(), L();
    }), Uo(() => {
      window.removeEventListener("resize", qt), wh(), Tt(), xh(), j();
    }), nn("SEAT_SIZE", he), (A, F) => {
      const nt = Kn("v-image"), ut = Kn("v-layer"), ft = Kn("v-rect"), Wt = Kn("v-stage");
      return Se(), We("div", {
        ref_key: "schemeMainRef",
        ref: Ut,
        class: "scheme_main"
      }, [
        Ot(Wt, {
          ref_key: "stageRef",
          ref: v,
          class: "stageRef",
          config: R.value,
          onMouseDown: yn,
          onMouseUp: me,
          onMouseMove: F[0] || (F[0] = (_t) => Lo(ja)(Yi, 16.7)()),
          onDragstart: Q,
          onDragend: rt,
          onWheel: F[1] || (F[1] = (_t) => X(_t.evt))
        }, {
          default: Si(() => [
            Ot(ut, {
              ref_key: "snapshotLayerRef",
              ref: S,
              visible: !1
            }, {
              default: Si(() => [
                Ot(nt, {
                  ref_key: "snapshotImageRef",
                  ref: d,
                  config: b
                }, null, 8, ["config"])
              ]),
              _: 1
            }, 512),
            Ot(ut, {
              ref_key: "objectsLayerRef",
              ref: x
            }, {
              default: Si(() => [
                (Se(!0), We(xe, null, kd(m.value, (_t) => (Se(), $o(u0, {
                  key: _t,
                  seat: s.value[_t],
                  selected: !!ct.value.selectedSeats[_t] || !!Dt.value[_t],
                  unselected: !!ce.value[_t],
                  "is-selection-mode": h.value,
                  onClick: Pt,
                  onMouseenter: y,
                  onMouseleave: C,
                  onMousedown: (Vt) => M(_t, Vt),
                  onTouchstart: (Vt) => M(_t, Vt)
                }, null, 8, ["seat", "selected", "unselected", "is-selection-mode", "onMousedown", "onTouchstart"]))), 128))
              ]),
              _: 1
            }, 512),
            Ot(ut, null, {
              default: Si(() => [
                Ot(ft, { config: ue.value }, null, 8, ["config"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["config"]),
        Ot(l0, {
          "is-grab-mode": h.value,
          "is-cursor-mode": l.value,
          onClickGrab: F[2] || (F[2] = (_t) => {
            h.value = !0, l.value = !1;
          }),
          onClickCursor: F[3] || (F[3] = (_t) => {
            l.value = !0, h.value = !1;
          })
        }, null, 8, ["is-grab-mode", "is-cursor-mode"])
      ], 512);
    };
  }
};
const Eg = {
  __name: "SchemeView",
  emits: [
    "changedSeatsState",
    "unselectSeats",
    "changeFullscreenMode"
    // 'clearSelectedSeats',
  ],
  setup(n, { emit: t }) {
    const e = t, i = je("schemeConfig"), s = (o) => {
      e("changedSeatsState", o);
    }, r = (o) => {
      e("unselectSeats", o);
    };
    return (o, a) => (Se(), We("div", {
      class: "scheme_view",
      style: Ps({
        backgroundColor: Lo(i).background_color || "#efefef"
      })
    }, [
      Ot(Ju),
      Ot(xg, {
        class: "scheme_view__scheme",
        onChangedSeatsState: s,
        onUnselectSeats: r,
        onChangeFullscreenMode: a[0] || (a[0] = (l) => e("changeFullscreenMode"))
      })
    ], 4));
  }
}, Pg = /* @__PURE__ */ Ds(Eg, [["__scopeId", "data-v-cb55ccf1"]]);
class Tg {
  constructor(t, e = "loaderControl") {
    da(this, "_fallback", () => {
      this.count = 0, window[`${this.name}Count`] = 0, this.offCallback && this.offCallback();
    });
    this.count = t, this.name = e, this.fallbackTimeout = null, window[`${e}Count`] = t;
  }
  setMethod(t, e) {
    this.offCallback = t, this.onCallback = e;
  }
  increaseCount() {
    this.count == 0 && this.onCallback(), clearTimeout(this.fallbackTimeout), this.fallbackTimeout = setTimeout(this._fallback, 3e4), this.count++, window[`${this.name}Count`]++;
  }
  decreaseCount() {
    this.count && (this.count--, window[`${this.name}Count`]--), this.count === 0 && this.offCallback();
  }
}
const Jr = new Tg(0, "HallScheme");
const Mg = {
  __name: "App",
  setup(n) {
    const t = bt({}), e = bt({}), i = bt({}), s = bt({}), r = bt({});
    nn("schemeSeats", e), nn("schemeSeatsChunk", i), nn("schemeConfig", t), nn("selectionFilters", r);
    const o = je("hallSchemeApp"), a = o.events;
    o.on(a.setSchemeSeatsToApp, ({ detail: u }) => {
      e.value = u.seats || {};
    }), o.on(a.updateSeatsChunk, ({ detail: u }) => {
      i.value = u.seats || {};
    }), o.on(a.setSelectionFilters, ({ detail: u }) => {
      r.value = u.filters || {};
    });
    const l = (u) => {
      s.value = u, o.setSelectedSeats(u);
    }, h = (u) => {
      o.unselectSeats(u);
    }, c = bt(!1);
    nn("isFullscreen", c);
    const g = () => {
      c.value = !c.value, document.body.classList.toggle("_scroll_lock");
    }, f = bt(!1);
    nn("loading", f), Jr.setMethod(function() {
      f.value = !1;
    }, function() {
      f.value = !0;
    }), o.on(a.loaderAddCount, () => {
      Jr.increaseCount();
    }), o.on(a.loaderDecreaseCount, () => {
      Jr.decreaseCount();
    });
    const _ = Su("schemeWrapper");
    return ai(() => {
      _.value.$el.addEventListener("wheel", function(u) {
        const m = u.wheelDelta || -u.detail;
        this.scrollTop += (m < 0 ? 1 : -1) * 30, u.preventDefault();
      });
    }), (u, m) => (Se(), $o(Pg, {
      ref: "schemeWrapper",
      class: ni(["vue_hall_scheme_wrapper", { _full_screen: c.value }]),
      onChangedSeatsState: l,
      onUnselectSeats: h,
      onChangeFullscreenMode: g
    }, null, 8, ["class"]));
  }
};
var Ii, ne, de;
class Ag {
  constructor(t, e = {}) {
    Bn(this, Ii, void 0);
    Bn(this, ne, void 0);
    Bn(this, de, void 0);
    if (!t)
      throw new Error("[HallSchemeView] constructor: rootSelector is required");
    if (Un(this, Ii, t), Un(this, ne, document.querySelector(Nt(this, Ii))), !Nt(this, ne))
      throw new Error("[HallSchemeView] constructor: no Element with provided rootSelector");
    Un(this, de, Date.now()), this.events = {
      setSchemeConfig: `setSchemeConfig${Nt(this, de)}`,
      setSchemeSeatsToApp: `setSchemeSeatsToApp${Nt(this, de)}`,
      updateSeatsChunk: `updateSeatsChunk${Nt(this, de)}`,
      setSelectedSeats: `setSelectedSeats${Nt(this, de)}`,
      unselectSeats: `unselectSeat${Nt(this, de)}`,
      setSelectionFilters: `setSelectionFilters${Nt(this, de)}`,
      loaderAddCount: `loaderAddCount${Nt(this, de)}`,
      loaderDecreaseCount: `loaderDecreaseCount${Nt(this, de)}`,
      clearSelectedSeats: `clearSelectedSeats${Nt(this, de)}`
    }, this.selectedSeats = {}, this.selectionFilters = {
      attrs: {},
      prices: {}
    };
  }
  on(t, e) {
    if (t = t.split(Nt(this, de))[0], !this.events[t]) {
      console.log(`[HallSchemeApp] Неизвестное событие: ${t}`);
      return;
    }
    Nt(this, ne).addEventListener(this.events[t], e);
  }
  setSelectionFilters(t) {
    this.selectionFilters = t;
    const e = new CustomEvent(this.events.setSelectionFilters, {
      detail: { filters: t }
    });
    Nt(this, ne).dispatchEvent(e);
  }
  setSchemeConfig(t) {
    const e = new CustomEvent(this.events.setSchemeConfig, {
      detail: { config: t }
    });
    Nt(this, ne).dispatchEvent(e);
  }
  setSchemeSeatsToApp(t) {
    const e = structuredClone(t), i = new CustomEvent(this.events.setSchemeSeatsToApp, {
      detail: { seats: e }
    });
    Nt(this, ne).dispatchEvent(i);
  }
  updateSeatsChunk(t) {
    const e = structuredClone(t), i = new CustomEvent(this.events.updateSeatsChunk, {
      detail: { seats: e }
    });
    Nt(this, ne).dispatchEvent(i);
  }
  getSelectedSeats() {
    return this.selectedSeats;
  }
  setSelectedSeats(t) {
    this.selectedSeats = t;
    const e = new CustomEvent(this.events.setSelectedSeats, {
      detail: { seats: t }
    });
    Nt(this, ne).dispatchEvent(e);
  }
  unselectSeats(t) {
    const e = new CustomEvent(this.events.unselectSeats, {
      detail: { ids: t }
    });
    Nt(this, ne).dispatchEvent(e);
  }
  clearSelectedSeats() {
    const t = new CustomEvent(this.events.clearSelectedSeats);
    Nt(this, ne).dispatchEvent(t);
  }
  getRootElement() {
    return Nt(this, ne);
  }
  loaderAddCount() {
    const t = new CustomEvent(this.events.loaderAddCount);
    Nt(this, ne).dispatchEvent(t);
  }
  loaderDecreaseCount() {
    const t = new CustomEvent(this.events.loaderDecreaseCount);
    Nt(this, ne).dispatchEvent(t);
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
Ii = new WeakMap(), ne = new WeakMap(), de = new WeakMap();
function bs(n) {
  if (!Lt.autoDrawEnabled) {
    const t = n.getLayer() || n.getStage();
    t && t.batchDraw();
  }
}
const Ml = { key: !0, style: !0, elm: !0, isRootInsert: !0 }, Qr = ".vue-konva-event";
function vh(n, t, e, i) {
  const s = n.__konvaNode, r = {};
  let o = !1;
  for (let a in e) {
    if (Ml.hasOwnProperty(a))
      continue;
    const l = a.slice(0, 2) === "on", h = e[a] !== t[a];
    if (l && h) {
      let c = a.slice(2).toLowerCase();
      c.slice(0, 7) === "content" && (c = "content" + c.slice(7, 1).toUpperCase() + c.slice(8)), s == null || s.off(c + Qr, e[a]);
    }
    !t.hasOwnProperty(a) && (s == null || s.setAttr(a, void 0));
  }
  for (let a in t) {
    if (Ml.hasOwnProperty(a))
      continue;
    let l = a.slice(0, 2) === "on";
    const h = e[a] !== t[a];
    if (l && h) {
      let c = a.slice(2).toLowerCase();
      c.slice(0, 7) === "content" && (c = "content" + c.slice(7, 1).toUpperCase() + c.slice(8)), t[a] && (s == null || s.off(c + Qr), s == null || s.on(c + Qr, t[a]));
    }
    !l && (t[a] !== e[a] || i && t[a] !== (s == null ? void 0 : s.getAttr(a))) && (o = !0, r[a] = t[a]);
  }
  o && s && (s.setAttrs(r), bs(s));
}
const Og = "v";
function Rg(n) {
  function t(e) {
    return e != null && e.__konvaNode ? e : e != null && e.parent ? t(e.parent) : (console.error("vue-konva error: Can not find parent node"), null);
  }
  return t(n.parent);
}
function yh(n) {
  return n.component ? n.component.__konvaNode || yh(n.component.subTree) : null;
}
function kg(n) {
  const { el: t, component: e } = n, i = yh(n);
  if (t != null && t.tagName && e && !i) {
    const s = t.tagName.toLowerCase();
    return console.error(
      `vue-konva error: You are trying to render "${s}" inside your component tree. Looks like it is not a Konva node. You can render only Konva components inside the Stage.`
    ), null;
  }
  return i;
}
function Ng(n) {
  const t = (s) => !!(s != null && s.hasOwnProperty("component")), e = (s) => Array.isArray(s), i = (s) => t(s) ? [s, ...i(s.children)] : e(s) ? s.flatMap(i) : [];
  return i(n.children);
}
function bh(n, t) {
  const e = Ng(n), i = [];
  e.forEach((r) => {
    const o = kg(r);
    o && i.push(o);
  });
  let s = !1;
  i.forEach((r, o) => {
    r.getZIndex() !== o && (r.setZIndex(o), s = !0);
  }), s && bs(t);
}
const Fg = /* @__PURE__ */ ac({
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
  setup(n, { attrs: t, slots: e, expose: i }) {
    const s = Yo();
    if (!s)
      return;
    const r = an({}), o = bt(null), a = new Lt.Stage({
      width: n.config.width,
      height: n.config.height,
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
        ...n.config
      };
      vh(s, f, g, n.__useStrictMode), Object.assign(r, f);
    }
    return ai(() => {
      o.value && (o.value.innerHTML = "", a.container(o.value)), c();
    }), Bo(() => {
      c(), bh(s.subTree, a);
    }), Uo(() => {
      a.destroy();
    }), De(() => n.config, c, { deep: !0 }), i({
      getStage: h,
      getNode: l
    }), () => {
      var g;
      return Dc("div", { ref: o, style: t == null ? void 0 : t.style }, (g = e.default) == null ? void 0 : g.call(e));
    };
  }
}), Dg = ".vue-konva-event", Lg = {
  Group: !0,
  Layer: !0,
  FastLayer: !0,
  Label: !0
};
function Ig(n, t) {
  return /* @__PURE__ */ ac({
    name: n,
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
    setup(e, { attrs: i, slots: s, expose: r }) {
      const o = Yo();
      if (!o)
        return;
      const a = an({}), l = new t();
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
        for (const v in o == null ? void 0 : o.vnode.props)
          v.slice(0, 2) === "on" && (_[v] = o.vnode.props[v]);
        const u = a || {}, m = {
          ...i,
          ...e.config,
          ..._
        };
        vh(o, m, u, e.__useStrictMode), Object.assign(a, m);
      }
      ai(() => {
        var u;
        const _ = (u = Rg(o)) == null ? void 0 : u.__konvaNode;
        _ && "add" in _ && _.add(l), bs(l);
      }), Rs(() => {
        bs(l), l.destroy(), l.off(Dg);
      }), Bo(() => {
        g(), bh(o.subTree, l);
      }), De(() => e.config, g, { deep: !0 }), r({
        getStage: c,
        getNode: h
      });
      const f = Lg.hasOwnProperty(n);
      return () => {
        var _;
        return f ? Dc("template", {}, (_ = s.default) == null ? void 0 : _.call(s)) : null;
      };
    }
  });
}
typeof window < "u" && !window.Konva && require("konva");
const Gg = {
  install: (n, t) => {
    const e = (t == null ? void 0 : t.prefix) || Og, i = {
      Arc: Lt.Arc,
      Arrow: Lt.Arrow,
      Circle: Lt.Circle,
      Ellipse: Lt.Ellipse,
      FastLayer: Lt.FastLayer,
      Group: Lt.Group,
      Image: Lt.Image,
      Label: Lt.Label,
      Layer: Lt.Layer,
      Line: Lt.Line,
      Path: Lt.Path,
      Rect: Lt.Rect,
      RegularPolygon: Lt.RegularPolygon,
      Ring: Lt.Ring,
      Shape: Lt.Shape,
      Sprite: Lt.Sprite,
      Star: Lt.Star,
      Tag: Lt.Tag,
      Text: Lt.Text,
      TextPath: Lt.TextPath,
      Transformer: Lt.Transformer,
      Wedge: Lt.Wedge,
      ...t == null ? void 0 : t.customNodes
    };
    [
      Fg,
      ...Object.entries(i).map(
        ([s, r]) => Ig(s, r)
      )
    ].forEach((s) => {
      n.component(`${e}${s.name}`, s);
    });
  }
};
var Ss, ei;
class Ug extends Ag {
  /**
   * @param {string} rootSelector - (reqired) селектор для монтирования
   * @param {object} options - настройки
   */
  constructor(e, i = {}) {
    if (!e)
      throw new Error("[VueHallSchemeView] constructor: no el selector");
    super(e, i);
    Bn(this, Ss, void 0);
    Bn(this, ei, void 0);
    Un(this, ei, e), Un(this, Ss, Wu(Mg).use(Gg).provide("hallSchemeApp", this).mount(Nt(this, ei))), console.info("[VueHallSchemeView] created and mounted to " + Nt(this, ei));
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
Ss = new WeakMap(), ei = new WeakMap();
export {
  Ug as VueHallSchemeView
};
