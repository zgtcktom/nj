"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inf = exports.indices = exports.in1d = exports.identity = exports.hypot = exports.greater_equal = exports.greater = exports.gradient = exports.gcd = exports.full = exports.fromiter = exports.fromfunction = exports.fmod = exports.floor_divide = exports.floor = exports.flatnonzero = exports.fix = exports.eye = exports.extract = exports.expm1 = exports.expand_dims = exports.exp2 = exports.exp = exports.even_strides = exports.equal = exports.empty_like = exports.empty = exports.ediff1d = exports.e = exports.divide = exports.diff = exports.degrees = exports.deg2rad = exports.cumsum = exports.cumprod = exports.cross = exports.count_nonzero = exports.cosh = exports.cos = exports.copyto = exports.copysign = exports.copy = exports.convolve = exports.contiguous = exports.concatenate = exports.compress = exports.clip = exports.choice = exports.ceil = exports.cbrt = exports.broadcastable_to = exports.broadcastable = exports.broadcast_to = exports.broadcast_shapes = exports.broadcast = exports.bitwise_xor = exports.bitwise_or = exports.bitwise_not = exports.bitwise_and = exports.bincount = exports.axisfunc = exports.average = exports.atleast_3d = exports.atleast_2d = exports.atleast_1d = exports.ascontiguousarray = exports.asarray = exports.array_equiv = exports.array_equal = exports.array = exports.around = exports.argwhere = exports.argsort = exports.arctanh = exports.arctan2 = exports.arctan = exports.arcsinh = exports.arcsin = exports.arccosh = exports.arccos = exports.arange = exports.any = exports.amin = exports.amax = exports.all = exports.add = exports.absolute = exports.abs = exports._wrap_reduce = exports._wrap_map_unary = exports._wrap_map_binary = exports._wrap_map = exports.Tester = exports.Slice = exports.Nditer = exports.NINF = exports.NDArray = exports.Generator = exports.Flatiter = exports.Broadcast = void 0;
exports.zeros = exports.where = exports.variance = exports.use_advanced_indexing = exports.unwrap = exports.unpackbits = exports.trunc = exports.true_divide = exports.trapz = exports.transpose = exports.timeit2 = exports.timeit = exports.tester = exports.tanh = exports.tan = exports.take = exports.swapaxes = exports.sum = exports.subtract = exports.std = exports.squeeze = exports.square = exports.sqrt = exports.sort = exports.slice = exports.sinh = exports.sin = exports.signbit = exports.sign = exports.shape = exports.shallow_array_equal = exports.sample = exports.rint = exports.right_shift = exports.reshape = exports.remainder = exports.reciprocal = exports.ravel = exports.ranf = exports.random_sample = exports.random = exports.rand = exports.radians = exports.rad2deg = exports.ptp = exports.prod = exports.power = exports.positive = exports.pick = exports.pi = exports.packbits = exports.ones = exports.ogrid = exports.not_equal = exports.normalize_axis_tuple = exports.normalize_axis_mask = exports.normalize_axis_index = exports.normalize_axis = exports.nonzero = exports.negative = exports.ndoffset = exports.nditer = exports.ndindex = exports.ndim = exports.ndenumerate = exports.nansum = exports.nanprod = exports.nancumsum = exports.nancumprod = exports.nan_to_num = exports.nan = exports.multiply = exports.moveaxis = exports.mod = exports.minimum = exports.mean = exports.maximum = exports.logaddexp2 = exports.logaddexp = exports.log2 = exports.log1p = exports.log10 = exports.log = exports.linspace = exports.less_equal = exports.less = exports.left_shift = exports.ldexp = exports.lcm = exports.ix_ = exports.isscalar = exports.isposinf = exports.isneginf = exports.isna = exports.isinf = exports.isfinite = exports.invert = exports.interp = void 0;
var e = {
    d: (t, a) => {
      for (var r in a) e.o(a, r) && !e.o(t, r) && Object.defineProperty(t, r, {
        enumerable: !0,
        get: a[r]
      });
    },
    o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
  },
  t = {};
function r(e, t) {
  if (e == t) return !0;
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length != t.length) return !1;
    for (let a = 0; a < e.length; a++) if (!r(e[a], t[a])) return !1;
    return !0;
  }
  if ("boolean" == typeof e && "boolean" == typeof t) return e == t;
  if (Number.isNaN(e) && Number.isNaN(t)) return !0;
  if ("number" == typeof e && "number" == typeof t) return e == t;
  if ("string" == typeof e && "string" == typeof t) return e == t;
  if (null != e?.toarray) return r(e.toarray(), t);
  if (null != t?.toarray) return r(e, t.toarray());
  if (e?.constructor != t?.constructor) return !1;
  let a = Object.getOwnPropertyNames(e),
    n = Object.getOwnPropertyNames(t);
  if (a.length != n.length) return !1;
  for (let s = 0; s < a.length; s++) if (!r(e[a[s]], t[n[s]])) return !1;
  return !0;
}
function n(e) {
  return e instanceof b && (e = `NDArray(${JSON.stringify(e.toarray())})`), Array.isArray(e) ? JSON.stringify(e) : e;
}
e.d(t, {
  zvA: () => Q,
  iIB: () => F,
  RO$: () => mr,
  zhN: () => b,
  _bh: () => bt,
  OVY: () => le,
  p2w: () => o,
  SRu: () => s,
  tw1: () => Ce,
  Yur: () => Ue,
  RPv: () => Le,
  JWo: () => He,
  WnP: () => Na,
  AGi: () => ka,
  IHx: () => Qe,
  $6P: () => it,
  Lb7: () => $a,
  t5D: () => za,
  YjB: () => dt,
  eTT: () => P,
  FKo: () => zt,
  Hn6: () => Rt,
  PD: () => $t,
  oSO: () => Ft,
  Xsc: () => vt,
  gJP: () => Mt,
  $jo: () => Dt,
  s6s: () => Ua,
  S1h: () => ce,
  Q8B: () => Pt,
  IXX: () => x,
  YSU: () => ze,
  Vjr: () => ve,
  k2d: () => q,
  FAR: () => J,
  V2R: () => U,
  dcL: () => B,
  ujY: () => H,
  Y8W: () => xr,
  pHG: () => we,
  yE8: () => vr,
  W4K: () => ja,
  GBu: () => Oa,
  eYE: () => Ta,
  qgf: () => Fa,
  fMc: () => Z,
  xAU: () => K,
  M2z: () => v,
  Qo: () => D,
  Lo$: () => z,
  eKn: () => Aa,
  mDi: () => Gt,
  q$q: () => dr,
  oqW: () => La,
  nNb: () => me,
  mVq: () => Ae,
  y39: () => X,
  RrX: () => Ca,
  JGK: () => oe,
  JGz: () => fa,
  zOr: () => A,
  mCk: () => xt,
  f9Y: () => jt,
  zNN: () => xe,
  kCc: () => Xa,
  $Gn: () => Ut,
  zbp: () => Bt,
  VlM: () => St,
  RWx: () => Nt,
  Hgg: () => Zt,
  csF: () => tt,
  e: () => ct,
  D5q: () => ea,
  cSb: () => I,
  sKD: () => S,
  DgJ: () => Ka,
  pnR: () => O,
  Qqt: () => ta,
  uuq: () => ra,
  aD1: () => re,
  t$B: () => aa,
  KlT: () => ye,
  iyy: () => ee,
  zG0: () => Vt,
  KTV: () => be,
  GWj: () => Yt,
  Sc8: () => rt,
  Ek0: () => wa,
  v_D: () => ue,
  KSO: () => fe,
  rpZ: () => R,
  thl: () => ya,
  FLS: () => Wa,
  pjt: () => Ga,
  zGm: () => Ya,
  _mT: () => At,
  yRu: () => te,
  HqJ: () => Nr,
  CGm: () => Ar,
  gY6: () => yt,
  Zw8: () => Ha,
  U_R: () => Sa,
  f0i: () => ot,
  fXA: () => ut,
  I7t: () => ft,
  igg: () => ht,
  ftH: () => pt,
  KvH: () => f,
  IW_: () => Mr,
  uqG: () => ga,
  vy: () => ha,
  Ai1: () => Ra,
  d9m: () => Va,
  bzW: () => Ea,
  SX3: () => E,
  cM7: () => na,
  mvw: () => sa,
  Krr: () => ia,
  k3Q: () => la,
  YKj: () => da,
  buk: () => oa,
  gWQ: () => xa,
  J69: () => _r,
  LTh: () => _a,
  wQq: () => nt,
  U8E: () => Me,
  JpY: () => et,
  qnd: () => mt,
  dQs: () => Ia,
  $7d: () => Ht,
  RCU: () => Qt,
  MIL: () => Ct,
  obs: () => Lt,
  $V5: () => pe,
  p3s: () => ae,
  x2A: () => M,
  fyW: () => ie,
  MHD: () => k,
  pdy: () => ca,
  MaX: () => he,
  S4p: () => ne,
  INJ: () => qe,
  lf5: () => Se,
  ffp: () => se,
  AqN: () => Pa,
  qDh: () => br,
  iUs: () => G,
  NCv: () => kr,
  pi: () => gt,
  eiS: () => ir,
  i1C: () => pa,
  qux: () => lt,
  WVs: () => Xt,
  OZM: () => wr,
  BVy: () => It,
  uRy: () => kt,
  TN_: () => hr,
  MXc: () => gr,
  di9: () => or,
  n3V: () => ur,
  nTq: () => ge,
  M25: () => ba,
  spK: () => st,
  XLQ: () => j,
  wyi: () => Da,
  XC3: () => Et,
  UPJ: () => fr,
  flC: () => _e,
  mCt: () => $,
  Xxe: () => qa,
  UBE: () => ua,
  O$l: () => wt,
  R_K: () => Ot,
  tPi: () => u,
  DYV: () => Ba,
  _b3: () => va,
  h62: () => Ma,
  L9e: () => de,
  qoR: () => zr,
  $XF: () => Ze,
  Smz: () => Jt,
  ZU4: () => C,
  qnb: () => Y,
  ORZ: () => _t,
  AEp: () => Tt,
  K1B: () => l,
  uAr: () => d,
  BpP: () => i,
  p4s: () => L,
  ebm: () => Ja,
  $I7: () => at,
  RFc: () => Wt,
  bLT: () => qr,
  Wg4: () => qt,
  G6Z: () => g,
  CAK: () => $r,
  arb: () => yr,
  lls: () => W
});
class s {
  compare = r;
  constructor() {
    this.tasks = {}, this._onload = [];
  }
  onload(e) {
    this._onload.push(e);
  }
  add(e, t, a, r = this.compare) {
    return "function" == typeof e && (e = e.name), (this.tasks[e] ?? (this.tasks[e] = [])).push({
      test: t,
      expected: a,
      compare: r
    }), this;
  }
  run(e) {
    if (null == e) {
      let e = !0;
      for (let t of Object.keys(this.tasks)) e = this.run(t) && e;
      let t = (e ? "[32m" : "[31m") + "%s[0m";
      return console.log(t, `Status: ${e}, Total: ${Object.keys(this.tasks).length}`), this._onload.forEach(e => e()), e;
    }
    let t = this.tasks[e];
    if (null == t) throw "no such name";
    let a = 1,
      r = 0,
      s = [];
    for (let e of t) {
      let t,
        l,
        {
          test: i,
          expected: d,
          compare: o
        } = e,
        u = !1,
        f = !1;
      try {
        t = i();
      } catch (e) {
        t = `[Error]: ${e}`, console.log(e), f = !0;
      }
      try {
        l = d();
      } catch (e) {
        l = `[Error]: ${e}`, console.log(e), f = !0;
      }
      f || (u = o(t, l)), u && r++;
      let h = (u ? "[32m" : "[31m") + "%s[0m";
      s.push([h, `#${a}: ${u ? "passed" : "fail"}`, "\n\tTest=", n(t), "\n\tExpected=", n(l)]), a++;
    }
    let l = (r == t.length ? "[32m" : "[31m") + "%s[0m";
    if (console.log(l, `Testing ${e}: ${r} / ${t.length} cases passed`), r != t.length) for (let e of s) console.log(...e);
    return r == t.length;
  }
}
let l = new s();
function i(e, t = 1e3) {
  let a,
    r = performance.now(),
    n = 0;
  for (; e(), n++, a = performance.now(), !(a - r >= t););
  let s = n / ((a - r) / t);
  console.log(`ops: ${s} per sec`, e);
}
function d(e, {
  name: t = "test",
  setup: a = null,
  duration: r = 1e3,
  warmup: n = 100,
  cycle: s = "auto",
  cycle_duration: l = 100,
  repeat: i = "auto",
  verbose: d = !1
} = {}) {
  let o = a?.();
  if (l > r && (l = r), "auto" == i && (i = r / l | 0), "auto" == s) {
    let t,
      a = 1;
    for (;;) {
      let r = Date.now();
      for (let t = 0; t < a; t++) e(o);
      if (t = Date.now() - r, t > l) break;
      a *= 2;
    }
    s = Math.max(a / t * (r / i) | 0, 1);
  }
  let u = [];
  for (let t = 0; t < n; t++) e(o);
  for (let t = 0; t < i; t++) {
    let t = Date.now();
    for (let t = 0; t < s; t++) e(o);
    let a = s / ((Date.now() - t) / 1e3);
    u.push(a);
  }
  let f = u.length,
    h = u.reduce((e, t) => e + t) / f;
  if (d) {
    let e = Math.max(...u),
      a = Math.min(...u),
      r = Math.max(e - h, h - a);
    console.log(`#${t} ${0 | h} ± ${(r / h * 100).toFixed(2)}% ops/sec (${i} runs)`);
  }
  return h;
}
class o {
  static newaxis = null;
  static ellipsis = new o();
  static colon = new o();
  static None = o.newaxis;
  static "..." = o.ellipsis;
  static ":" = o.colon;
  constructor(e = null, t = null, a = null) {
    this.start = e, this.stop = t, this.step = a;
  }
  _get() {
    let e,
      {
        start: t,
        stop: a,
        step: r
      } = this;
    if (t ??= 0, null == a) throw "stop must not be null";
    return r ??= 1, e = 0 == r || r < 0 && a >= t || r > 0 && t >= a ? 0 : r < 0 ? (a - t + 1) / r + 1 | 0 : (a - t - 1) / r + 1 | 0, {
      start: t,
      stop: a,
      step: r,
      slicelength: e
    };
  }
  get(e) {
    let t,
      {
        start: a,
        stop: r,
        step: n
      } = this;
    return null == n && (n = 1), null == a ? a = n < 0 ? e - 1 : 0 : (a < 0 && (a += e), a < 0 && (a = n < 0 ? -1 : 0), a >= e && (a = n < 0 ? e - 1 : e)), null == r ? r = n < 0 ? -1 : e : (r < 0 && (r += e), r < 0 && (r = n < 0 ? -1 : 0), r >= e && (r = n < 0 ? e - 1 : e)), t = 0 == n || n < 0 && r >= a || n > 0 && a >= r ? 0 : n < 0 ? (r - a + 1) / n + 1 | 0 : (r - a - 1) / n + 1 | 0, {
      start: a,
      stop: r,
      step: n,
      slicelength: t
    };
  }
  toString() {
    if (this == o.ellipsis) return "...";
    if (this == o.colon) return ":";
    let {
      start: e,
      stop: t,
      step: a
    } = this;
    return null == a ? null == e && null == t ? ":" : `${e ?? ""}:${t ?? ""}` : `${e ?? ""}:${t ?? ""}:${a}`;
  }
}
function u(e, t, a) {
  if (null == e && null == t && null == a) return o.colon;
  if ("string" == typeof e) {
    if (Object.hasOwn(o, e)) return o[e];
    let t = e.split(":");
    if (1 == t.length) {
      let [e] = t;
      if (0 == e.length) e = null;else {
        if (!Number.isInteger(+e)) throw `${e} cannot be cast to integer`;
        e = +e;
      }
      return new o(e);
    }
    if (2 == t.length) {
      let [e, a] = t;
      if (0 == e.length) e = null;else {
        if (!Number.isInteger(+e)) throw `${e} cannot be cast to integer`;
        e = +e;
      }
      if (0 == a.length) a = null;else {
        if (!Number.isInteger(+a)) throw `${a} cannot be cast to integer`;
        a = +a;
      }
      return new o(e, a);
    }
    if (3 == t.length) {
      let [e, a, r] = t;
      if (0 == e.length) e = null;else {
        if (!Number.isInteger(+e)) throw `${e} cannot be cast to integer`;
        e = +e;
      }
      if (0 == a.length) a = null;else {
        if (!Number.isInteger(+a)) throw `${a} cannot be cast to integer`;
        a = +a;
      }
      if (0 == r.length) r = null;else {
        if (!Number.isInteger(+r)) throw `${r} cannot be cast to integer`;
        r = +r;
      }
      return new o(e, a, r);
    }
    throw `invalid string slice representation ${e}`;
  }
  return null != e?.length && ({
    0: e,
    1: t,
    2: a
  } = e), new o(e, t, a);
}
function f(e) {
  switch (typeof e) {
    case "boolean":
    case "function":
    case "number":
    case "string":
      return !0;
  }
  return !1;
}
function h(e, t) {
  if (a = t, Number.isInteger(a)) {
    let {
      ndim: a,
      shape: r,
      size: n
    } = e;
    if (t < 0 && (t += n), t >= n) throw `index ${t} out of bound for size ${n}`;
    let s = [...r];
    for (let e = s.length - 2; e >= 1; e--) s[e] *= s[e + 1];
    let l = Array(a).fill(0);
    for (let e = 0; e < l.length - 1; e++) {
      let a = s[e + 1];
      t >= a && (l[e] = t / a | 0, t %= a);
    }
    l[l.length - 1] = t, t = l;
  } else {
    if (!function (e) {
      return null != e?.length;
    }(t)) throw `unexpected type '${function (e) {
      return e?.constructor.name;
    }(t)}'`;
    if (t.length != e.ndim) throw "incorrect number of indices for array";
  }
  var a;
  return t;
}
function p(e, t, a) {
  let r = 0;
  for (let n = 0; n < e.length; n++) r += (e[n] < 0 ? e[n] + a[n] : e[n]) * t[n];
  return r;
}
function c() {
  return this.item();
}
function m(e, t) {
  let {
    shape: a,
    strides: r,
    offset: n
  } = e;
  t = t.map(e => "string" == typeof e ? u(e) : e), a = a.slice(), r = r.slice();
  let s = 0,
    l = t.filter(e => null == e).length,
    i = t.filter(e => e == u("..."));
  if (i.length > 1) throw "an index can only have a single ellipsis ('...')";
  if (1 == i.length) {
    t = t.slice();
    let e = Array(a.length + l - t.length + 1).fill(u(":"));
    t.splice(t.indexOf(u("...")), 1, ...e);
  }
  if (t.length - l > a.length) throw "too many indices for array";
  for (let e of t) if (null == e) a.splice(s, 0, 1), r.splice(s, 0, 0), s++;else {
    if (0 == a.length) throw "invalid index to scalar variable";
    if (e == u[":"]) s++;else if (u.is(e)) {
      let {
        start: t,
        step: l,
        slicelength: i
      } = e.get(a[s]);
      n += r[s] * t, a.splice(s, 1, i), r.splice(s, 1, r[s] * l), s++;
    } else e < 0 && (e += a[s]), n += r[s] * e, a.splice(s, 1), r.splice(s, 1);
  }
  return {
    strides: r,
    shape: a,
    offset: n,
    immutable: 0 == a.length && 0 == i.length
  };
}
function g(e) {
  for (let t of e) if ("object" == typeof t && (Array.isArray(t) || t instanceof b)) return !0;
  return !1;
}
function y(e) {
  let t,
    a,
    r,
    n = !0,
    s = 0,
    l = e.length - 1,
    i = e.map(e => e instanceof o);
  for (; s < l && i[s]; s++);
  for (; l > s && i[l]; l--);
  for (let e = s + 1; e < l; e++) if (i[e]) {
    n = !1;
    break;
  }
  let d = this.shape.map((t, a) => i[a] ? e[a].get(t).slicelength : e[a]);
  if (n) t = d.slice(0, s), a = d.slice(l + 1), r = e.slice(s, l + 1);else {
    t = [], a = d.filter((e, t) => i[t]), r = [];
    for (let t = s; t <= l; t++) i[t] || r.push(e[t]);
  }
  let u = Z(...r),
    f = [...t, ...u.shape, ...a];
  e = e.slice();
  let h = [];
  for (let t of u) {
    for (let a = 0, r = 0; a < e.length; a++) i[a] || (e[a] = t[r++]);
    h.push(this.get(...e, null));
  }
  return new b(f, Ae(h, t.length).data);
}
Object.assign(u, {
  colon: o.colon
}, o), u.colon = o.colon, u.is = function (e) {
  return e instanceof o;
}, l.onload(() => {
  console.log("asd");
}), l.add("isscalar", () => f(3.1), () => !0).add("isscalar", () => f(x(3.1)), () => !1).add("isscalar", () => f([3.1]), () => !1).add("isscalar", () => f(!1), () => !0).add("isscalar", () => f("numpy"), () => !0).add("isscalar", () => f(Number()), () => !0);
class b {
  constructor(e, t = null, a = null, r = null, n = 0, s = 1) {
    this.size = function (e) {
      let t = 1;
      for (let a of e) t *= a;
      return t;
    }(e), this.ndim = e.length, this.shape = e, this.data = t ?? Array(this.size), this.itemsize = s, this.strides = r ?? function (e, t) {
      let a = [];
      if (e.length > 0) {
        a[e.length - 1] = t;
        for (let t = e.length - 2; t >= 0; t--) a[t] = a[t + 1] * e[t + 1];
      }
      return a;
    }(e, s), this.offset = n, this.base = a?.base ?? a, this.ndim > 0 ? this.length = this.shape[0] : this[Symbol.toPrimitive] = c;
  }
  *[Symbol.iterator]() {
    for (let e = 0; e < this.shape[0]; e++) yield this.get(e);
  }
  _getview(e) {
    let {
        strides: t,
        shape: a,
        offset: r
      } = m(this, e),
      {
        data: n,
        itemsize: s,
        base: l
      } = this;
    return new b(a, n, l ?? this, t, r, s);
  }
  get(...e) {
    if (g(e)) return y.call(this, e);
    let {
        strides: t,
        shape: a,
        offset: r,
        immutable: n
      } = m(this, e),
      {
        data: s,
        itemsize: l,
        base: i
      } = this;
    return n ? new b(a, [s[r]], null, t, 0, l) : new b(a, s, i ?? this, t, r, l);
  }
  set(e, t = null) {
    if (null == t) return A(this, t = e), this;
    if (g(e)) throw "cannot use advanced indexing in .set()";
    let {
        strides: a,
        shape: r,
        offset: n
      } = m(this, e),
      {
        data: s,
        itemsize: l,
        base: i
      } = this;
    return new b(r, s, i ?? this, a, n, l).set(t), this;
  }
  item(e) {
    let {
      data: t,
      strides: a,
      shape: r,
      offset: n,
      ndim: s,
      size: l
    } = this;
    if (null == e) {
      if (1 != l) throw "index cannot be empty if size != 1";
      return t[n];
    }
    if (0 == s) {
      if (null != e.length) if (0 == e.length) e = 0;else {
        if (1 != e.length) throw "incorrect number of indices for array";
        e = e[0];
      }
      if (0 != e && -1 != e) throw `index ${e} out of bound for size ${l}`;
      return t[n];
    }
    if (1 == s) {
      if (null != e.length) {
        if (1 != e.length) throw "incorrect number of indices for array";
        e = e[0];
      }
      if (e < -l || l <= e) throw `index ${e} out of bound for size ${l}`;
      return e < 0 && (e += l), t[n + e * a[0]];
    }
    return 1 == e.length && (e = e[0]), t[n + p(e = h(this, e), a, r)];
  }
  itemset(e, t) {
    let {
      ndim: a,
      size: r,
      offset: n,
      data: s,
      shape: l,
      strides: i
    } = this;
    if (null != t || 1 != r) {
      if (null == e) {
        if (1 != r) throw "index cannot be empty if size != 1";
        return s[n] = t, this;
      }
      if (0 == a) {
        if (null != e.length) if (0 == e.length) e = 0;else {
          if (1 != e.length) throw "incorrect number of indices for array";
          e = e[0];
        }
        if (0 != e && -1 != e) throw `index ${e} out of bound for size ${r}`;
        return s[n] = t, this;
      }
      if (1 == a) {
        if (null != e.length) {
          if (1 != e.length) throw "incorrect number of indices for array";
          e = e[0];
        }
        if (e < -r || r <= e) throw `index ${e} out of bound for size ${r}`;
        return e < 0 && (e += r), s[n + e * i[0]] = t, this;
      }
      return 1 == e.length && (e = e[0]), s[n + p(e = h(this, e), i, l)] = t, this;
    }
    s[n] = e;
  }
  toarray() {
    let {
      ndim: e,
      offset: t,
      data: a,
      shape: r
    } = this;
    if (0 == e) return a[t];
    let n = [];
    for (let e = 0; e < r[0]; e++) n.push(this.get(e).toarray());
    return n;
  }
  tolist() {
    return this.toarray();
  }
  flatten() {
    let e,
      {
        base: t,
        size: a,
        data: r
      } = this;
    if (null == t) e = r.slice();else {
      e = [];
      for (let t of k(this.shape, this.strides)) e.push(r[this.offset + t]);
    }
    return new b([a], e);
  }
  get flat() {
    return new F(this);
  }
  set flat(e) {
    this.flat.set([...Array(this.size).keys()], e);
  }
  get T() {
    return L(this);
  }
  set T(e) {
    L(this).set(e);
  }
  copy() {
    return x(this);
  }
  reshape(...e) {
    return 1 == e.length && "number" != typeof e[0] && (e = e[0]), j(this, e);
  }
  swapaxes(e, t) {
    return C(this, e, t);
  }
  sort(e = -1, t = null) {
    this.set(Ba(this, e, t));
  }
}
function w(e, t, a, r = 0) {
  if (r != a.length) for (let n = 0; n < a[r]; n++) w(e, t instanceof b ? t.get(n) : t[n], a, r + 1);else e.push(t instanceof b ? t.item() : t);
}
function x(e) {
  if (e instanceof b) {
    let t;
    if (null == e.base) t = e.data.slice();else {
      t = [];
      for (let a of k(e.shape, e.strides)) t.push(e.data[e.offset + a]);
    }
    return new b(e.shape, t);
  }
  let t = [];
  return w(t, e, $(e)), new b($(e), t);
}
function _(e, t, a) {
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    if (n instanceof b) {
      for (let e = a, r = 0; e < t.length; e++) if (t[e] != n.shape[r++]) return t.length = e, !1;
      return !0;
    }
    if (n?.length != t[a]) return t.length = a, !1;
    if (null != n?.length && t.length > a + 1 && !_(n, t, a + 1)) return !1;
  }
  return !0;
}
function $(e) {
  if (null != e.shape) return e.shape;
  let t = [],
    a = e;
  for (;;) {
    if (a instanceof b) {
      t.push(...a.shape);
      break;
    }
    if (null == a?.length) break;
    t.push(a.length), a = a[0];
  }
  return null != e.length && t.length > 1 && _(e, t, 1), t;
}
function z(e, t) {
  if (e.length > t.length) return !1;
  for (let a = t.length - 1, r = e.length - 1; r >= 0; a--, r--) if (1 != e[r] && e[r] != t[a]) return !1;
  return !0;
}
function v(e, t) {
  if ((e = q(e)).shape.length > t.length) throw "broadcast shape has less dimensions than input array";
  let {
      data: a,
      strides: r,
      offset: n,
      itemsize: s
    } = e,
    l = [];
  for (let a = t.length - 1, n = e.shape.length - 1; a >= 0; a--, n--) {
    if (n >= 0 && 1 != e.shape[n] && e.shape[n] != t[a]) throw "operands could not be broadcast together";
    l[a] = n < 0 || 1 == e.shape[n] ? 0 : r[n];
  }
  return new b(t, a, null, l, n, s);
}
function A(e, t, a = !0) {
  if (1 != a) throw "haven't implement";
  if (t instanceof b || Array.isArray(t)) {
    let a = k((t = v(q(t), e.shape)).shape, t.strides);
    for (let r of k(e.shape, e.strides)) e.data[e.offset + r] = t.data[t.offset + a.next().value];
  } else for (let a of k(e.shape, e.strides)) e.data[e.offset + a] = t;
}
function* M(e, t = !0) {
  let a = Array(e.length).fill(0),
    r = function (e) {
      let t = 1;
      for (let a of e) t *= a;
      return t;
    }(e);
  if (0 != r) {
    yield t ? a : a.slice();
    for (let n = 1; n < r; n++) {
      for (let t = a.length - 1; t >= 0 && (a[t] += 1, !(a[t] < e[t])); t--) a[t] -= e[t];
      yield t ? a : a.slice();
    }
  }
}
l.add("ndarray.get", () => P(120).reshape(4, 6, 5, 1).get(x([0, 2, 1]), u(), [0, 2, 4], u()), () => x([[[0], [5], [10], [15], [20], [25]], [[62], [67], [72], [77], [82], [87]], [[34], [39], [44], [49], [54], [59]]])).add("ndarray.get", () => P(120).reshape(4, 6, 5, 1).get(x([0, 2, 1]), x([0, 2, 1]), u(), u()), () => x([[[0], [1], [2], [3], [4]], [[70], [71], [72], [73], [74]], [[35], [36], [37], [38], [39]]])).add("ndarray.get", () => P(120).reshape(4, 6, 5, 1).get(u(), x([0, 2, 1]), x([0, 2, 4]), u()), () => x([[[0], [12], [9]], [[30], [42], [39]], [[60], [72], [69]], [[90], [102], [99]]])).add("ndarray.get", () => P(120).reshape(4, 6, 5, 1).get(u(), x([0, 2, 1]), u(), [0, 0, 0]), () => x([[[0, 1, 2, 3, 4], [30, 31, 32, 33, 34], [60, 61, 62, 63, 64], [90, 91, 92, 93, 94]], [[10, 11, 12, 13, 14], [40, 41, 42, 43, 44], [70, 71, 72, 73, 74], [100, 101, 102, 103, 104]], [[5, 6, 7, 8, 9], [35, 36, 37, 38, 39], [65, 66, 67, 68, 69], [95, 96, 97, 98, 99]]])).add("ndarray.get", () => P(120).reshape(4, 6, 5, 1).get(u(), u(), x([0, 2, 1]), x([0, 0, 0])), () => x([[[0, 2, 1], [5, 7, 6], [10, 12, 11], [15, 17, 16], [20, 22, 21], [25, 27, 26]], [[30, 32, 31], [35, 37, 36], [40, 42, 41], [45, 47, 46], [50, 52, 51], [55, 57, 56]], [[60, 62, 61], [65, 67, 66], [70, 72, 71], [75, 77, 76], [80, 82, 81], [85, 87, 86]], [[90, 92, 91], [95, 97, 96], [100, 102, 101], [105, 107, 106], [110, 112, 111], [115, 117, 116]]])).add("ndarray.get", () => P(120).reshape(4, 6, 5, 1).get(x([0, 2, 1]), u(), u(), x([0, 0, 0])), () => x([[[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [25, 26, 27, 28, 29]], [[60, 61, 62, 63, 64], [65, 66, 67, 68, 69], [70, 71, 72, 73, 74], [75, 76, 77, 78, 79], [80, 81, 82, 83, 84], [85, 86, 87, 88, 89]], [[30, 31, 32, 33, 34], [35, 36, 37, 38, 39], [40, 41, 42, 43, 44], [45, 46, 47, 48, 49], [50, 51, 52, 53, 54], [55, 56, 57, 58, 59]]])).add("ndarray.get", () => P(120).reshape(4, 6, 5, 1).get(x([0, 2, 1]), x([0, 2, 1]), u(), 0), () => x([[0, 1, 2, 3, 4], [70, 71, 72, 73, 74], [35, 36, 37, 38, 39]])).add("ndarray.get", () => P(120).reshape(4, 6, 5, 1).get(x([0, 2, 1]), u(), u(), 0), () => x([[[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [25, 26, 27, 28, 29]], [[60, 61, 62, 63, 64], [65, 66, 67, 68, 69], [70, 71, 72, 73, 74], [75, 76, 77, 78, 79], [80, 81, 82, 83, 84], [85, 86, 87, 88, 89]], [[30, 31, 32, 33, 34], [35, 36, 37, 38, 39], [40, 41, 42, 43, 44], [45, 46, 47, 48, 49], [50, 51, 52, 53, 54], [55, 56, 57, 58, 59]]])).add("ndarray.get", () => new b([2, 5], [...Array(10).keys()]).get(u(), u([,, -1])), () => [[4, 3, 2, 1, 0], [9, 8, 7, 6, 5]]).add("ndarray.get", () => new b([2, 5], [...Array(10).keys()]).get(u(-1), 3), () => [8]).add("ndarray.get", () => new b([2, 5], [...Array(10).keys()]).get(u([,, -1]), u([,, -1])), () => [[9, 8, 7, 6, 5], [4, 3, 2, 1, 0]]).add("ndarray.get", () => {
  let e;
  return e = x([[3, 0, 0], [0, 4, 0], [5, 6, 0]]).get(u(), u(), null), e;
}, () => x([[[3], [0], [0]], [[0], [4], [0]], [[5], [6], [0]]])).add("ndarray.get", () => {
  let e;
  return e = x([[3, 0, 0], [0, 4, 0], [5, 6, 0]]).get(u("..."), null), e;
}, () => x([[[3], [0], [0]], [[0], [4], [0]], [[5], [6], [0]]])), l.add("ndarray.item", () => new b([2, 5], [...Array(10).keys()]).get(u([,, -1]), u([,, -1])).item(5), () => 4), l.add("ndarray.itemset", () => {
  let e = new b([3, 3], [[2, 2, 6], [1, 3, 6], [1, 0, 1]].flat());
  return e.itemset(4, 0), e.itemset([2, 2], 9), e;
}, () => [[2, 2, 6], [1, 0, 6], [1, 0, 9]]), l.add("ndarray.set", () => {
  let e = new b([2, 5], [...Array(10).keys()]);
  return e.get(u(), u(1, -1)).set(10), e;
}, () => [[0, 10, 10, 10, 4], [5, 10, 10, 10, 9]]), l.add("ndarray.flatten", () => x([[1, 2], [3, 4]]).flatten(), () => x([1, 2, 3, 4])), l.add("ndarray.flat.set", () => {
  let e = x([[1, 2, 3], [4, 5, 6]]);
  return e.flat = 3, e;
}, () => x([[3, 3, 3], [3, 3, 3]])).add("ndarray.flat.set", () => {
  let e = x([[1, 2, 3], [4, 5, 6]]);
  return e.flat = [7, 8, 9, 10], e;
}, () => x([[7, 8, 9], [10, 7, 8]])), l.add("ndarray.copy", () => {
  let e = x([[1, 2, 3]]);
  return e.copy() == e;
}, () => !1).add("ndarray.copy", () => {
  let e = x([[1, 2, 3]]),
    t = e.copy();
  return t.itemset(0, -1), [e, t];
}, () => [x([[1, 2, 3]]), x([[-1, 2, 3]])]), l.add("array", () => x([3.1, 9]), () => [3.1, 9]).add("array", () => x([[9, 6], 3.1, 9]).shape, () => [3]).add("array", () => x(5), () => 5), l.add("shape", () => $([[[3, 9]], [[3, 9, 3]], [[3, 9]]]), () => [3, 1]).add("shape", () => $([1, 2, 3, [1, 3]]), () => [4]).add("shape", () => $([0]), () => [1]).add("shape", () => $(0), () => []), l.add("broadcast_to", () => v(new b([3], [1, 2, 3]), [3, 3]).toarray(), () => [[1, 2, 3], [1, 2, 3], [1, 2, 3]]), l.add("broadcast_to", () => v(new b([1, 3, 1], [1, 2, 3]), [2, 3, 4]).toarray(), () => [[[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]]]), l.add("copyto", () => {
  let e = q([4, 5, 6]);
  return A(e, [1, 2, 3]), e;
}, () => [1, 2, 3]).add("copyto", () => {
  let e = q([[1, 2, 3], [4, 5, 6]]);
  return A(e, [[4, 5, 6], [7, 8, 9]]), e;
}, () => [[4, 5, 6], [7, 8, 9]]).add("copyto", () => {
  let e = q([[0, 1, 2], [3, 4, 5]]);
  return A(e.get(u(), 1), [-1, -2]), e;
}, () => [[0, -1, 2], [3, -2, 5]]);
class N {
  constructor(e, t) {
    let a = e.length;
    this.shape = e, this.strides = t, this.size = e.reduce((e, t) => e * t, 1), this.ndim = a, this.coords = Array(a).fill(0), this.index = this.offset = this.done = null, this.reset();
  }
  [Symbol.iterator]() {
    return this.reset();
  }
  reset() {
    return this.coords.fill(0), this.index = this.offset = 0, this.done = 0 == this.size, this;
  }
  next() {
    if (this.done) return {
      done: !0
    };
    let {
        offset: e,
        coords: t,
        shape: a,
        strides: r,
        ndim: n
      } = this,
      s = e,
      l = n - 1,
      i = !0;
    e: for (; l >= 0;) switch (a[l]) {
      case 1:
        l--;
        break;
      case t[l]:
        e -= r[l] * a[l], t[l--] = 0, i = !0;
        break;
      default:
        if (!i) break e;
        e += r[l], t[l] += 1, i = !1;
    }
    return this.index++, this.offset = e, this.done = this.index >= this.size, {
      value: s,
      done: !1
    };
  }
}
function k(e, t) {
  return new N(e, t);
}
function q(e) {
  return e instanceof b ? e : x(e);
}
function I(e) {
  var t;
  return t = e, Number.isInteger(t) && (e = [e]), new b(e, Array(function (e) {
    let t = 1;
    for (let a of e) t *= a;
    return t;
  }(e)));
}
function S(e) {
  return I($(e));
}
function O(e, t, a = e.length) {
  let r;
  for (let e = a - 1; e > 0; e--) if (t[e] > 1) {
    r = e;
    break;
  }
  for (let a = r - 1; a >= 0; a--) if (t[a] > 1) {
    if (e[a] != e[r] * t[r]) return !1;
    r = a;
  }
  return !0;
}
function j(e, t) {
  e = q(e), "number" == typeof t && (t = [t]);
  let a = -1,
    r = 1;
  for (let e = 0; e < t.length; e++) if (-1 == t[e]) {
    if (-1 != a) throw "can only specify one unknown dimension";
    a = e;
  } else r *= t[e];
  if (-1 != a) {
    let {
      size: n
    } = e;
    if (n % r != 0) throw `cannot reshape array of size ${n} into shape ${t}`;
    t[a] = 0 == r ? 0 : n / r;
  }
  if (e.size != function (e) {
    let t = 1;
    for (let a of e) t *= a;
    return t;
  }(t)) throw `cannot reshape array of size ${e.size} into shape [${t.join(", ")}]`;
  if (null == e.base) return new b(t, e.data, e);
  {
    let a = !0,
      r = 0;
    for (let n = 0; n < t.length; n++) if (1 != t[n]) {
      for (; r < e.shape.length && 1 == e.shape[r]; r++);
      if (r >= e.shape.length || t[n] != e.shape[r]) {
        a = !1;
        break;
      }
      r++;
    }
    if (r != e.shape.length && (a = !1), a) {
      let a = [];
      for (let r = 0, n = 0; r < t.length; r++) {
        if (1 != t[r]) for (; n < e.shape.length && 1 == e.shape[n]; n++);
        a.push(e.strides[n]);
      }
      return new b(t, e.data, e, a, e.offset, e.itemsize);
    }
  }
  let n = null;
  return 1 == t.length && O(e.strides, e.shape, e.ndim) ? n = [e.strides[0]] : 0 != t.length && (e = x(e)), new b(t, e.data, e, n, e.offset, e.itemsize);
}
function T(e) {
  return null != e?.length;
}
l.add(k, () => {
  let e = P(100);
  e = e.get(u(20, -20)).reshape([2, 1, -1, 2]).get(u("..."), u("::-1"));
  let t = [];
  for (let a of k(e.shape, e.strides)) t.push(e.data[e.offset + a]);
  return t;
}, () => [21, 20, 23, 22, 25, 24, 27, 26, 29, 28, 31, 30, 33, 32, 35, 34, 37, 36, 39, 38, 41, 40, 43, 42, 45, 44, 47, 46, 49, 48, 51, 50, 53, 52, 55, 54, 57, 56, 59, 58, 61, 60, 63, 62, 65, 64, 67, 66, 69, 68, 71, 70, 73, 72, 75, 74, 77, 76, 79, 78]), l.add("asarray", () => {
  let e = x([[1, 2], [3, 4]]);
  return q(e) === e;
}, () => !0).add("asarray", () => q([[1, 2], [3, 4]]), () => [[1, 2], [3, 4]]), l.add("empty", () => I([2, 2]), () => [[,,], [,,]]).add("empty", () => I(0), () => []).add("empty", () => I([]), () => {}), l.add("empty_like", () => S([[1, 2, 3], [4, 5, 6]]), () => [[,,,], [,,,]]).add("empty_like", () => S([1, 2, 3, [1, 3]]), () => [,,,,]), l.add(j, () => j(x([1, 2, 3, 4, 5]).get(u("::-2")), -1), () => x([5, 3, 1])).add(j, () => j(x([1]), []), () => x(1)).add(j, () => j(x(1), 1), () => x([1])).add(j, () => j(x(1), -1), () => x([1])).add("reshape", () => j(q([[0, 1], [2, 3], [4, 5]]), [2, 3]), () => [[0, 1, 2], [3, 4, 5]]).add("reshape", () => j(q([[[[0, 1]]]]), [2, -1]), () => [[0], [1]]).add("reshape", () => {
  let e = q([[[[0, 1]]]]);
  return j(e, [2, -1]).base === e;
}, () => !0).add("reshape", () => {
  let e = q([[[[0, 1]]]]).get(0);
  return j(e, [2, -1]).base === e;
}, () => !1).add("reshape", () => j(x([[1, 2, 3], [4, 5, 6]]), [-1]), () => x([1, 2, 3, 4, 5, 6])).add("reshape", () => {
  let e = P(30),
    t = e.reshape([10, 3]).get(u("::2")),
    a = t.reshape(t.shape);
  return [t.toarray(), j(t, [1, 1, 5, -1, 3]).base === e, t.base === e, t.reshape(-1).base === e, a === t, a.base === e];
}, () => [x([[0, 1, 2], [6, 7, 8], [12, 13, 14], [18, 19, 20], [24, 25, 26]]).toarray(), !0, !0, !1, !1, !0]);
class F {
  constructor(e) {
    this.base = e, this.index = 0, this.coords = Array(e.ndim).fill(0);
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let e,
      {
        coords: t,
        base: a
      } = this,
      {
        shape: r,
        size: n
      } = a,
      s = this.index >= n;
    s || (e = a.item(t));
    for (let e = t.length - 1; e >= 0 && (t[e] += 1, !(t[e] < r[e])); e--) e > 0 && (t[e] -= r[e]);
    return this.index++, {
      value: e,
      done: s
    };
  }
  get(e) {
    if (T(e)) {
      let t = [];
      for (let a = 0; a < e.length; a++) t[a] = this.base.item(e[a]);
      return new b([e.length], t);
    }
    return this.base.item(e);
  }
  set(e, t) {
    if (T(e)) {
      if (T(t)) {
        t = q(t).flatten().data;
        for (let a = 0; a < e.length; a++) this.base.itemset(e[a], t[a % t.length]);
      } else for (let a = 0; a < e.length; a++) this.base.itemset(e[a], t);
    } else {
      if (T(t)) throw "Error setting single item of array";
      this.base.itemset(e, t);
    }
  }
  copy() {
    return this.base.flatten();
  }
}
function R(e, t) {
  let a = I(e);
  return A(a, t), a;
}
function D(...e) {
  let t = 0;
  for (let a of e) t = Math.max(t, a.length);
  if (0 == t) return [];
  let a = Array(t).fill(1);
  for (let r of e) for (let e = r.length - 1, n = t - 1; e >= 0; e--, n--) {
    let t = r[e];
    if (1 != t) if (1 == a[n]) a[n] = t;else if (a[n] != t) return !1;
  }
  return !0;
}
function K(...e) {
  let t = 0;
  for (let a of e) t = Math.max(t, a.length);
  if (0 == t) return [];
  let a = Array(t).fill(1);
  for (let r of e) for (let e = r.length - 1, n = t - 1; e >= 0; e--, n--) {
    let t = r[e];
    if (1 != t) if (1 == a[n]) a[n] = t;else if (a[n] != t) throw "shape mismatch";
  }
  return a;
}
function P(e, t, a = 1) {
  null == t && (t = e, e = 0);
  let r = (t - e) / a,
    n = [];
  for (let t = 0; t < r; t++) n[t] = e + t * a;
  return new b([r], n);
}
function E(e, t, a = 50, r = !0, n = !1) {
  let s = (t - e) / (r ? a - 1 : a),
    l = [];
  for (let t = 0; t < a; t++) l[t] = e + t * s;
  let i = new b([a], l);
  return n ? [i, s] : i;
}
function V(e, t, r) {
  let n = [];
  if ("wrap" == t) for (let t of e) t %= r, t = t < 0 ? t + r : t, n.push(t);else if ("clip" == t) for (let t of e) l = r - 1, t = (s = t) < 0 ? 0 : s > l ? l : s, n.push(t);else {
    if ("raise" != t) throw `unexpected mode = ${t}`;
    for (let t of e) {
      if (t < -r || t >= r) throw `index ${t} is out of bounds for axis 0 with size ${r}`;
      t = t < 0 ? t + a.size : t, n.push(t);
    }
  }
  var s, l;
  return n;
}
function Y(e, t, a = null, r = null, n = "raise") {
  if (e = q(e), t = x(t), null == a) {
    t.data = V(t.data, n, e.size);
    let a = t.shape;
    if (null == r) r = I(a);else if (!_e(r.shape, a)) throw "output array does not match result of ndarray.take";
    for (let a = 0; a < t.size; a++) r.data[a] = e.item(t.data[a]);
    return r;
  }
  {
    a < 0 && (a += e.ndim), t.data = V(t.data, n, e.shape[a]);
    let s = e.shape.slice();
    if (s.splice(a, 1, ...t.shape), null == r) r = I(s);else if (!_e(r.shape, s)) throw "output array does not match result of ndarray.take";
    let l = Array(a).fill(u());
    for (let a of M(t.shape)) r.get(...l, ...a).set(e.get(...l, t.item(a)));
    return r;
  }
}
function G(e) {
  return R(e, 1);
}
function W(e) {
  return R(e, 0);
}
function X(e) {
  let {
    strides: t,
    shape: a,
    ndim: r,
    itemsize: n
  } = e;
  if (0 == r) return !1;
  for (let e = r - 1; e >= 0; e--) if (a[e] > 1) {
    if (n != t[e]) return !1;
    n *= a[e];
  }
  return !0;
}
function J(e) {
  return X(e = q(e)) ? e : x(e);
}
function C(e, t, a) {
  let {
    strides: r,
    shape: n,
    data: s,
    offset: l,
    base: i,
    itemsize: d
  } = e;
  r = r.slice(), n = n.slice();
  let o = r[t],
    u = n[t];
  return r[t] = r[a], n[t] = n[a], r[a] = o, n[a] = u, new b(n, s, i, r, l, d);
}
function L(e, t = null) {
  let a,
    r,
    {
      ndim: n,
      shape: s,
      strides: l,
      data: i,
      base: d,
      offset: o,
      itemsize: u
    } = e;
  if (null == t) a = s.slice().reverse(), r = l.slice().reverse();else {
    t = function (e, t) {
      if (e.length != t) throw "axes don't match array";
      let a = [],
        r = {};
      for (let n = 0; n < t; n++) {
        let s = e[n];
        if (s < -t || t <= s) throw `axis ${s} is out of bounds for array of dimension ${n + 1}`;
        if (s < 0 && (s += t), r[s]) throw "repeated axis in transpose";
        r[s] = !0, a[n] = s;
      }
      return a;
    }(t, n), a = Array(n), r = Array(n);
    for (let e = 0; e < n; e++) a[e] = s[t[e]], r[e] = l[t[e]];
  }
  return new b(a, i, d ?? e, r, o, u);
}
function U(...e) {
  if (1 != e.length) {
    let t = [];
    for (let a of e) t.push(U(a));
    return t;
  }
  let t = q(e[0]);
  if (t.ndim >= 1) return t;
  t = t.copy();
  let {
    data: a,
    itemsize: r
  } = t;
  return new b([1], a, t, [r], 0, r);
}
function B(...e) {
  if (1 != e.length) {
    let t = [];
    for (let a of e) t.push(B(a));
    return t;
  }
  let t = q(e[0]);
  if (t.ndim >= 2) return t;
  let {
    shape: a,
    data: r,
    strides: n,
    offset: s,
    itemsize: l,
    ndim: i
  } = t;
  return 1 == i ? new b([1, a[0]], r, t, [0, n[0]], s, l) : (t = t.copy(), new b([1, 1], t.data, t, [l, l], 0, l));
}
function H(...e) {
  if (1 != e.length) {
    let t = [];
    for (let a of e) t.push(H(a));
    return t;
  }
  let t = q(e[0]);
  if (t.ndim >= 3) return t;
  let {
    shape: a,
    data: r,
    strides: n,
    offset: s,
    itemsize: l,
    ndim: i
  } = t;
  return 2 == i ? new b([a[0], a[1], 1], r, t, [n[0], n[1], 0], s, l) : 1 == i ? new b([1, a[0], 1], r, t, [0, n[0], 0], s, l) : (t = t.copy(), new b([1, 1, 1], t.data, t, [l, l, l], 0, l));
}
l.add("Flatiter", () => {
  let e = new b([2, 3], [0, 1, 2, 3, 4, 5]),
    t = new F(e),
    a = [];
  for (let e of t) {
    for (let e of t) a.push(e);
    a.push(e);
  }
  return a;
}, () => [1, 2, 3, 4, 5, 0]).add("Flatiter", () => {
  let e = new b([3, 1], [0, 1, 2]),
    t = new F(e),
    a = [];
  for (let e of t) a.push(e, t.index, [...t.coords]);
  return a;
}, () => [0, 1, [1, 0], 1, 2, [2, 0], 2, 3, [3, 0]]).add("Flatiter", () => {
  let e = new b([1, 2], [0, 1]),
    t = new F(e),
    a = [];
  for (let r of t) {
    for (let r of new F(e)) a.push(r, t.index, [...t.coords]);
    a.push(r, t.index, [...t.coords]);
  }
  return a;
}, () => [0, 1, [0, 1], 1, 1, [0, 1], 0, 1, [0, 1], 0, 2, [1, 0], 1, 2, [1, 0], 1, 2, [1, 0]]), l.add("Flatiter.get", () => new F(x([[1, 2, 3], [4, 5, 6]])).get(3), () => 4).add("Flatiter.get", () => new F(x([[1, 2, 3], [4, 5, 6]])).get([3, 4, -1]), () => [4, 5, 6]), l.add("Flatiter.set", () => {
  let e = x([[3, 3, 3], [3, 3, 3]]);
  return new F(e).set([1, -1], [[1], [2]]), e;
}, () => [[3, 1, 3], [3, 3, 2]]), l.add("Flatiter.copy", () => new F(new b([2, 3], [0, 1, 2, 3, 4, 5]).get(u([,, -1]))).copy(), () => [3, 4, 5, 0, 1, 2]), l.add("full", () => R([2, 2], 1 / 0), () => [[1 / 0, 1 / 0], [1 / 0, 1 / 0]]).add("full", () => R([2, 2], 10), () => [[10, 10], [10, 10]]).add("full", () => R([2, 2], [1, 2]), () => [[1, 2], [1, 2]]).add("full", () => R(2, -1), () => [-1, -1]), l.add("broadcast_shapes", () => K([1, 2], [3, 1], [3, 2]), () => [3, 2]), l.add("broadcast_shapes", () => K([6, 7], [5, 6, 1], [7], [5, 1, 7]), () => [5, 6, 7]), l.add("arange", () => P(3), () => x([0, 1, 2])).add("arange", () => P(-10, 10), () => x([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).add("arange", () => P(-10, 10, -1), () => x([])).add("arange", () => P(3, 7, 2), () => x([3, 5])).add("arange", () => P(0, -10, -1), () => x([0, -1, -2, -3, -4, -5, -6, -7, -8, -9])), l.add("linspace", () => E(2, 3, 5), () => x([2, 2.25, 2.5, 2.75, 3])).add("linspace", () => E(2, 3, 5, !1), () => x([2, 2.2, 2.4, 2.6, 2.8])).add("linspace", () => E(2, 3, 5, !0, !0), () => [x([2, 2.25, 2.5, 2.75, 3]), .25]).add("linspace", () => E(2, 3, 5, !1, !0), () => [x([2, 2.2, 2.4, 2.6, 2.8]), .2]).add("linspace", () => E(1, 10, 10, !1), () => x([1, 1.9, 2.8, 3.7, 4.6, 5.5, 6.4, 7.3, 8.2, 9.1])), l.add("take", () => Y([4, 3, 5, 7, 6, 8], [0, 1, 4]), () => x([4, 3, 6])).add("take", () => Y([4, 3, 5, 7, 6, 8], [[0, 1], [2, 3]]), () => x([[4, 3], [5, 7]])).add("take", () => Y(x([[1, 2], [3, 4], [5, 6], [7, 8]]), [[0, 1], [2, 3]], 0), () => x([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])).add("take", () => Y(x([[1, 2], [3, 4], [5, 6], [7, 8]]), x([[[[0, 1], [0, 1]]]]), 1), () => x([[[[[1, 2], [1, 2]]]], [[[[3, 4], [3, 4]]]], [[[[5, 6], [5, 6]]]], [[[[7, 8], [7, 8]]]]])).add("take", () => Y([[5, 6, 2, 7, 1], [4, 9, 2, 9, 3]], [0, 4], 1), () => [[5, 1], [4, 3]]), l.add(J, () => {
  let e = G([3, 1, 5]).get(u(), u([,, 3]), u());
  return J(e) === e;
}, () => !0), l.add(J, () => {
  let e = G([3, 4, 5]).get(u(), u([,, 1]), u());
  return J(e) === e;
}, () => !0), l.add(J, () => {
  let e = G([3, 4, 5]).get(u(), u(), u(1));
  return J(e) === e;
}, () => !1), l.add(J, () => {
  let e = G([3]).get(u([,, -3]));
  return J(e) === e;
}, () => !0), l.add(J, () => {
  let e = G([2]).get(u([,, 2]));
  return J(e) === e;
}, () => !0), l.add(J, () => {
  let e = G([3]).get(u([,, 2]));
  return J(e) === e;
}, () => !1), l.add(J, () => {
  let e = G([3]).get(u([1, 2]));
  return J(e) === e;
}, () => !0).add(J, () => {
  let e, t;
  return e = x([]), t = J(e), e === t;
}, () => !0).add(J, () => {
  let e, t;
  return e = x(5), t = J(e), e === t;
}, () => !1), l.add(C, () => C(x([[1, 2, 3]]), 0, 1), () => x([[1], [2], [3]])), l.add(C, () => C(x([[[0, 1], [2, 3]], [[4, 5], [6, 7]]]), 0, 2), () => x([[[0, 4], [2, 6]], [[1, 5], [3, 7]]])), l.add(L, () => L(P(4).reshape([2, 2])), () => x([[0, 2], [1, 3]])).add(L, () => L(G([1, 2, 3]), [1, 0, 2]), () => x([[[1, 1, 1]], [[1, 1, 1]]])).add(L, () => L(G([2, 3, 4, 5])).shape, () => [5, 4, 3, 2]), l.add(U, () => U(1), () => x([1])).add(U, () => U(1, [3, 4]), () => [x([1]), x([3, 4])]).add(U, () => U(P(9).reshape([3, 3])), () => x([[0, 1, 2], [3, 4, 5], [6, 7, 8]])).add(U, () => {
  let e = x([1]),
    t = e.get(0),
    a = U(t);
  return a.set([0], -96), [e.toarray(), t.toarray(), a.toarray(), null === e.base, null === t.base, a.base != t, a.base];
}, () => [x([1]), 1, x([-96]), !0, !0, !0, x(-96)]), l.add(B, () => B(3), () => x([[3]])).add(B, () => {
  let e = P(3);
  return [B(e), B(e).base === e];
}, () => [x([[0, 1, 2]]), !0]).add(B, () => B(1, [1, 2], [[1, 2]]), () => [x([[1]]), x([[1, 2]]), x([[1, 2]])]), l.add(H, () => H(3), () => x([[[3]]])).add(H, () => H(P(3)).shape, () => [1, 3, 1]).add(H, () => {
  let e = P(12).reshape(4, 3);
  return [H(e).shape, H(e).base === e.base];
}, () => [[4, 3, 1], !0]).add(H, () => H([1, 2], [[1, 2]], [[[1, 2]]]), () => [[[[1], [2]]], [[[1], [2]]], [[[1, 2]]]]);
class Q {
  constructor(e) {
    e = e.map(q), this.numiter = e.length, this.shape = K(...e.map(e => e.shape)), this.arrays = e.map(e => v(e, this.shape)), this.ndim = this.shape.length, this.size = function (e) {
      let t = 1;
      for (let a of e) t *= a;
      return t;
    }(this.shape), this.index = 0, this.reset();
  }
  [Symbol.iterator]() {
    return 0 != this.index && this.reset(), this;
  }
  next() {
    let e = this.iters.map(e => e.next().value),
      t = this.index >= this.size;
    return this.index++, {
      value: e,
      done: t
    };
  }
  reset() {
    this.iters = this.arrays.map(e => e.flat), this.index = 0;
  }
}
function Z(...e) {
  return new Q(e);
}
function ee(e, t = e, a = 0) {
  let r = e * t,
    n = Array(r).fill(0);
  for (let e = a + Math.ceil(-a / (t + 1)) * (t + 1); e < r; e += t + 1) n[e] = 1;
  return new b([e, t], n);
}
function te(e) {
  let t = e * e,
    a = Array(t).fill(0);
  for (let r = 0; r < t; r += e + 1) a[r] = 1;
  return new b([e, e], a);
}
function ae(e) {
  return null == e || f(e) ? 0 : q(e).ndim;
}
function re(e, t) {
  e = q(e), "number" == typeof t && (t = [t]);
  let a = t.length;
  if ((t = new Set(t)).size != a) throw "repeated axis";
  let r = e.ndim + a,
    n = [];
  for (let a = 0, s = 0; a < r; a++) n.push(t.has(a) ? 1 : e.shape[s++]);
  return e.reshape(n);
}
function ne(e, t, a = !1) {
  if (Array.isArray(e) || (e = [e]), e = e.map(e => qe(e, t)), !a && new Set(e).size != e.length) throw "repeated axis";
  return e;
}
l.add(Z, () => {
  let e = Z(x([[1], [2], [3]]), x([4, 5, 6])),
    t = I(e.shape),
    a = [];
  for (let [t, r] of e) a.push(t + r);
  return t.flat = a, t;
}, () => x([[5, 6, 7], [6, 7, 8], [7, 8, 9]])).add(Z, () => {
  let e = [],
    t = Z(x([1, 2, 3]), x([[4], [5], [6]]));
  return e.push(t.index), e.push(t.next().value, t.next().value, t.next().value), e.push(t.index), t.reset(), e.push(t.index), e;
}, () => [0, [1, 4], [2, 4], [3, 4], 3, 0]), l.add("eye", () => ee(2), () => [[1, 0], [0, 1]]).add("eye", () => ee(3, 3, 1), () => [[0, 1, 0], [0, 0, 1], [0, 0, 0]]).add("eye", () => ee(4, 5, -1), () => [[0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0]]), l.add("identity", () => te(3), () => [[1, 0, 0], [0, 1, 0], [0, 0, 1]]).add("identity", () => te(0), () => []), l.add("ndim", () => ae([[1, 2, 3], [4, 5, 6]]), () => 2).add("ndim", () => ae(q([[1, 2, 3], [4, 5, 6]])), () => 2).add("ndim", () => ae(1), () => 0).add("ndim", () => ae(null), () => 0), l.add(re, () => re(x([1, 2]), 0), () => x([[1, 2]])).add(re, () => re(x([1, 2]), 1), () => x([[1], [2]])).add(re, () => re(x([1, 2]), [0, 1]), () => x([[[1, 2]]])).add(re, () => re(x([1, 2]), [2, 0]), () => x([[[1], [2]]])).add(re, () => {
  let e = x([1, 2]);
  return re(e, [2, 0]).base === e;
}, () => !0);
const se = ne;
class le {
  constructor(e, t = null) {
    this.array = q(e);
    let {
      ndim: a,
      shape: r
    } = e;
    if (null != t && (t = ne(t, a)), this.axis = t, null != t) {
      let e = [],
        n = [],
        s = [];
      for (let l = 0; l < a; l++) (s[l] = !t.includes(l)) ? (n[l] = 0, e.push(r[l])) : n[l] = u[":"];
      this.shape = e, this.indices = n, this.mask = s;
    } else this.shape = [e.size], this.indices = [0], this.mask = null;
  }
  *[Symbol.iterator]() {
    let {
      array: e,
      axis: t
    } = this;
    if (null == t) return void (yield* e.flat);
    let {
      shape: a,
      mask: r,
      indices: n
    } = this;
    for (let t of M(a)) {
      for (let a = 0, s = 0; a < e.ndim; a++) r[a] && (n[a] = t[s++]);
      yield [t, e.get(...n)];
    }
  }
}
function ie(e, t = null) {
  return new le(e, t);
}
function de(e, t = null) {
  e = q(e), null != t && (t = ne(t));
  let {
      shape: a,
      strides: r,
      data: n,
      ndim: s,
      offset: l,
      itemsize: i
    } = e,
    d = [],
    o = [];
  for (let e = 0; e < s; e++) (t ? t.includes(e) : 1 == a[e]) || (d.push(a[e]), o.push(r[e]));
  return new b(d, n, e, o, l, i);
}
function oe(e) {
  return x(e);
}
function ue(e, t) {
  let a = [];
  for (let r of M(t)) a.push(e(r));
  return new b(t, a);
}
function fe(e, t = -1) {
  let a;
  if (-1 == t) a = [...e];else {
    a = [];
    let r = 0;
    if (r < t) for (let n of e) if (a.push(n), r++, r >= t) break;
  }
  return x(a);
}
function he(e) {
  e = U(e);
  let {
      ndim: t
    } = e,
    a = [];
  for (let e = 0; e < t; e++) a.push([]);
  for (let [r, n] of pe(e)) if (n) for (let e = 0; e < t; e++) a[e].push(r[e]);
  for (let e = 0; e < t; e++) a[e] = x(a[e]);
  return a;
}
function* pe(e) {
  e = q(e);
  for (let t of M(e.shape)) yield [t, e.item(t)];
}
function ce(e) {
  e = q(e);
  let t = 0,
    a = [];
  for (let [r, n] of pe(e)) n && (a.push(...r), t++);
  return new b([t, e.ndim], a);
}
function me(e, t, a = null, r = null) {
  if (1 != (e = q(e)).ndim) throw "condition must be a 1-d array";
  return Y(t, he(e)[0], a, r);
}
function ge(e) {
  e = J(e);
  let {
    size: t,
    data: a,
    offset: r,
    itemsize: n
  } = e;
  return new b([t], a, e.base, void 0, r, n);
}
function ye(e, t) {
  return me(ge(e), ge(t));
}
function be(e) {
  return he(ge(e))[0];
}
function we(e, t, a, r, n) {
  let {
    strides: s,
    ndim: l,
    shape: i
  } = t;
  a = ne(a, l);
  let d = Array(l).fill().map((e, t) => a.includes(t)),
    o = [],
    f = [];
  for (let e = 0, t = 0; e < l; e++) d[e] ? (f[e] = u[":"], r && (o[t++] = 1)) : o[t++] = i[e];
  null == n && (n = I(o));
  for (let a of M(o)) {
    for (let e = 0, t = 0; e < l; e++) d[e] || (f[e] = a[t++]);
    n.itemset(a, e(t.get(...f)));
  }
  return n;
}
function xe(e, t = null, a = !1) {
  if (e = q(e), null != t) return we(xe, e, t, a);
  let r = 0;
  for (let t of e.flat) t && r++;
  return r;
}
function _e(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let a = 0; a < e.length; a++) if (e[a] !== t[a]) return !1;
  return !0;
}
l.add(de, () => de(x([[[0], [1], [2]]])).shape, () => [3]).add(de, () => de(x([[[0], [1], [2]]]), 0).shape, () => [3, 1]).add(de, () => de(x([[[0], [1], [2]]]), 2).shape, () => [1, 3]).add(de, () => de(x([[1234]])), () => x(1234)).add(de, () => {
  let e, t, a, r, n;
  return e = P(20), t = e.reshape([5, -1]), a = t.get(u([,, -1])), r = J(a), n = r.reshape([5, 1, 1, -1]), [n.reshape([5, -1]).base === r, n.reshape(-1).base === r, de(n).base === r, e, t, a, de(n)];
}, () => [!0, !0, !0, x([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), x([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15], [16, 17, 18, 19]]), x([[16, 17, 18, 19], [12, 13, 14, 15], [8, 9, 10, 11], [4, 5, 6, 7], [0, 1, 2, 3]]), x([[16, 17, 18, 19], [12, 13, 14, 15], [8, 9, 10, 11], [4, 5, 6, 7], [0, 1, 2, 3]])]), l.add(oe, () => {
  let e, t, a;
  return e = x([1, 2, 3]), t = e, a = oe(e), e.set([0], 10), [e.item(0) == t.item(0), e.item(0) == a.item(0)];
}, () => [!0, !1]), l.add(ue, () => ue(([e, t]) => e, [2, 2]), () => x([[0, 0], [1, 1]])).add(ue, () => ue(([e, t]) => t, [2, 2]), () => x([[0, 1], [0, 1]])).add(ue, () => ue(([e, t]) => e == t, [3, 3]), () => x([[!0, !1, !1], [!1, !0, !1], [!1, !1, !0]])).add(ue, () => ue(([e, t]) => e + t, [3, 3]), () => x([[0, 1, 2], [1, 2, 3], [2, 3, 4]])), l.add(fe, () => fe({
  *[Symbol.iterator]() {
    for (let e = 0; e < 5; e++) yield e * e;
  }
}), () => x([0, 1, 4, 9, 16])).add(fe, () => fe({
  *[Symbol.iterator]() {
    for (let e = 0; e < 5; e++) yield [e + 1, e + 2];
  }
}), () => x([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6]])), l.add(he, () => {
  let e;
  return e = x([[3, 0, 0], [0, 4, 0], [5, 6, 0]]).get(u("..."), null), he(e);
}, () => [x([0, 1, 2, 2]), x([0, 1, 0, 1]), x([0, 0, 0, 0])]).add(he, () => he(x([[!1, !1, !1], [!0, !0, !0], [!0, !0, !0]])), () => [x([1, 1, 1, 2, 2, 2]), x([0, 1, 2, 0, 1, 2])]).add(he, () => he(55), () => x([0])), l.add(pe, () => {
  {
    let e;
    e = x([[1, 2], [3, 4]]);
    let t = [];
    for (let [a, r] of pe(e)) t.push(a.slice(), r);
    return t;
  }
}, () => [[0, 0], 1, [0, 1], 2, [1, 0], 3, [1, 1], 4]), l.add(ce, () => ce(55).shape, () => [1, 0]).add(ce, () => ce(Ga(P(6).reshape(2, 3), 1)), () => x([[0, 2], [1, 0], [1, 1], [1, 2]])), l.add(me, () => me([0, 1], x([[1, 2], [3, 4], [5, 6]]), 0), () => x([[3, 4]])).add(me, () => me([!1, !0, !0], x([[1, 2], [3, 4], [5, 6]]), 0), () => x([[3, 4], [5, 6]])).add(me, () => me([!1, !0], x([[1, 2], [3, 4], [5, 6]]), 1), () => x([[2], [4], [6]])).add(me, () => me([!1, !0], x([[1, 2], [3, 4], [5, 6]])), () => x([2])), l.add(ge, () => ge(x([[1, 2, 3], [4, 5, 6]])), () => x([1, 2, 3, 4, 5, 6])).add(ge, () => ge(x([[1, 2, 3], [4, 5, 6]]).T), () => x([1, 4, 2, 5, 3, 6])).add(ge, () => ge(P(12).reshape(2, 3, 2).swapaxes(1, 2)), () => x([0, 2, 4, 1, 3, 5, 6, 8, 10, 7, 9, 11])).add(ge, () => {
  let e, t;
  return e = P(40).reshape([5, -1]).copy(), t = e.get(null, u(":"), null, null, u("::2"), null), [t.reshape(-1).base == e, ge(t).base];
}, () => [!0, null]).add(ge, () => {
  let e, t;
  return e = P(40).reshape([5, -1]).copy(), t = e.get(null, u(":"), null, null, u("::3"), null), [t.reshape(-1).base == e, ge(t).base];
}, () => [!1, null]), l.add(ye, () => {
  let e, t;
  return e = P(12).reshape([3, 4]), t = x([[!0, !1, !1, !0], [!1, !1, !0, !1], [!1, !0, !1, !1]]), ye(t, e);
}, () => x([0, 3, 6, 9])), l.add(be, () => {
  let e;
  return e = P(-2, 3), be(e);
}, () => x([0, 1, 3, 4])), l.add(xe, () => {
  let e;
  return e = G([2, 3, 4, 5]), xe(e);
}, () => 120).add(xe, () => {
  let e;
  return e = G([2, 3, 4, 5]), xe(e, 0);
}, () => x([[[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]], [[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]], [[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]]])).add(xe, () => {
  let e;
  return e = G([2, 3, 4, 5]), xe(e, 1);
}, () => x([[[3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3]], [[3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3]]])).add(xe, () => {
  let e;
  return e = G([2, 3, 4, 5]), xe(e, -1);
}, () => x([[[5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5]], [[5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5]]])).add(xe, () => {
  let e;
  return e = G([2, 3, 4, 5]), xe(e, [0, -1]);
}, () => x([[10, 10, 10, 10], [10, 10, 10, 10], [10, 10, 10, 10]])).add(xe, () => {
  let e;
  return e = G([2, 3, 4, 5]), xe(e, [0, -1], !0);
}, () => x([[[[10], [10], [10], [10]], [[10], [10], [10], [10]], [[10], [10], [10], [10]]]]));
const $e = Ue("nan_equal", (e, t) => e == t || Number.isNaN(e) && Number.isNaN(t));
function ze(e, t, a = !1) {
  return e = q(e), t = q(t), !!_e(e.shape, t.shape) && it(a ? $e(e, t) : Ka(e, t));
}
function ve(e, t) {
  return e = q(e), t = q(t), !!D(e.shape, t.shape) && it(Ka(e, t));
}
function Ae(e, t = 0, a = null) {
  if (e.length <= 0) throw "need at least one array to concatenate";
  e = e.map(q), null == t && (e = e.map(ge), t = 0);
  let {
    ndim: r,
    shape: n
  } = e[0];
  if (0 == r) throw "zero-dimensional arrays cannot be concatenated";
  for (let a = 1; a < e.length; a++) {
    let s = e[a];
    if (s.ndim != r) throw `all the input arrays must have same number of dimensions, but the array at index 0 has ${r} dimension(s) and the array at index ${a} has ${e[a].ndim} dimension(s)`;
    for (let l = 0; l < r; l++) if (l != t && s.shape[l] != n[l]) throw `all the input array dimensions for the concatenation axis must match exactly, but along dimension ${l}, the array at index 0 has size ${n[l]} and the array at index ${a} has size ${e[a].shape[l]}`;
  }
  t = qe(t, r);
  let s = n.slice();
  if (s[t] = e.reduce((e, a) => e + a.shape[t], 0), null == a) a = I(s);else {
    if (a.ndim != r) throw "Output array has wrong dimensionality";
    if (!_e(a.shape, s)) throw "Output array is the wrong shape";
  }
  let l = Array(r).fill(u(":")),
    i = 0;
  for (let r of e) l[t] = u(i, i += r.shape[t]), a.set(l, r);
  return a;
}
function Me(e, t, a) {
  if (t = se(t, e.ndim), a = se(a, e.ndim), t.length != a.length) throw "'source' and 'destination' arguments must have the same number of elements";
  let r = [...Array(e.ndim).keys()].filter(e => !t.includes(e));
  for (let e = 0; e < t.length; e++) r.splice(a[e], 0, t[e]);
  return L(e, r);
}
l.add(ze, () => ze([1, 2], [1, 2]), () => !0).add(ze, () => ze(x([1, 2]), x([1, 2])), () => !0).add(ze, () => ze([1, 2], [1, 2, 3]), () => !1).add(ze, () => ze([1, 2], [1, 4]), () => !1).add(ze, () => {
  let e = x([1, NaN]);
  return ze(e, e);
}, () => !1).add(ze, () => {
  let e = x([1, NaN]);
  return ze(e, e, !0);
}, () => !0), l.add(ve, () => ve([1, 2], [1, 2]), () => !0).add(ve, () => ve([1, 2], [1, 3]), () => !1).add(ve, () => ve([1, 2], [[1, 2], [1, 2]]), () => !0).add(ve, () => ve([1, 2], [[1, 2, 1, 2], [1, 2, 1, 2]]), () => !1).add(ve, () => ve([1, 2], [[1, 2], [1, 3]]), () => !1), l.add(Ae, () => {
  let e = x([[1, 2], [3, 4]]),
    t = x([[5, 6]]);
  return [Ae([e, t], 0), Ae([e, t.T], 1), Ae([e, t], null)];
}, () => [x([[1, 2], [3, 4], [5, 6]]), x([[1, 2, 5], [3, 4, 6]]), x([1, 2, 3, 4, 5, 6])]), l.add(Me, () => Me(W([3, 4, 5]), 0, -1).shape, () => [4, 5, 3]).add(Me, () => Me(W([3, 4, 5]), -1, 0).shape, () => [5, 3, 4]);
let Ne = e => [...Array(e).keys()];
function ke(e) {
  let t = Object.create(null);
  return (...a) => ((e, t, a) => e[t] ?? (e[t] = a(...t)))(t, a, e);
}
function qe(e, t) {
  let a = e;
  if (e = +e, !Number.isInteger(e)) throw `${a} cannot be cast to integer`;
  if (e < 0 && (e += t), e < 0 || t <= e) throw `axis ${a} is out of bounds for array of dimension ${t}`;
  return e;
}
let Ie = {};
function Se(e, t, a = !1) {
  if (null == e) return Ie[t] ?? (Ie[t] = Array(t).fill(1));
  let r = Array(t).fill(0);
  if (Array.isArray(e)) {
    for (let a = 0; a < e.length; a++) r[qe(e[a], t)] = 1;
    if (!a) {
      let a = 0;
      for (let e = 0; e < t; e++) a += r[e];
      if (a != e.length) throw "repeated axis";
    }
  } else r[qe(e, t)] = 1;
  return r;
}
let Oe = (e = null, t, a, r = t) => {
    let n = [];
    for (let e = 0; e < t.length; e++) n.push(r[e] == t[e] ? `${r[e]}` : `${r[e]}: ${t[e]}`);
    return null != e ? `${e} {${n.join(", ")}} = ${a}` : `({${n.join(", ")}} = ${a})`;
  },
  je = (e = null, t, a) => {
    Array.isArray(t) || (t = [t], a = [a]);
    let r = [];
    for (let e = 0; e < t.length; e++) r.push(`${t[e]} = ${a[e]}`);
    return null != e ? `${e} ${r.join(", ")}` : `${r.join(", ")}`;
  },
  Te = (e, t, a) => `for(let ${e} = 0; ${e} < ${t}; ${e}++) {${a}}`,
  Fe = (...e) => `${e.join("; ")}`,
  Re = (e, ...t) => `${e}(${t.join(", ")})`,
  De = (e, t) => `${e}[${t}]`,
  Ke = (e, t) => `${e}.${t}`,
  Pe = e => `(${e})`,
  Ee = (...e) => `${e.map(Pe).join(" * ")}`,
  Ve = (...e) => `${e.map(Pe).join(" + ")}`,
  Ye = e => `return ${e}`;
function Ge(e, t, a = t) {
  let r = "out",
    n = Ne(e).map(e => `x${e + 1}`),
    s = `${r}_offset`,
    l = n.map(e => `${e}_offset`),
    i = `${r}_data`,
    d = n.map(e => `${e}_data`),
    o = Ne(a).map(e => `${r}_strides_${e}`),
    u = n.map(e => Ne(t).map(t => `${e}_strides_${t}`)),
    f = Ne(t).map(e => `i_${e}`),
    h = Ne(t).map(e => `shape_${e}`);
  return {
    fn: "fn",
    out: r,
    x: n,
    out_offset: s,
    x_offset: l,
    out_data: i,
    x_data: d,
    out_strides: o,
    x_strides: u,
    index: f,
    shape: h
  };
}
function We(e, t, a, r) {
  let n = [];
  return n.push(je("let", t, Ke(e, "data"))), n.push(je("let", a, Ke(e, "offset"))), r.length > 0 && n.push(Oe("let", r, Ke(e, "strides"), Ne(r.length))), n;
}
let Xe = ke((e, t) => new Function(...function (e, t) {
    let {
        fn: a,
        out: r,
        x: n,
        out_offset: s,
        x_offset: l,
        out_data: i,
        x_data: d,
        out_strides: o,
        x_strides: u,
        index: f,
        shape: h
      } = Ge(e, t),
      p = [];
    return p.push(...We(r, i, s, o)), n.forEach((e, t) => {
      p.push(...We(e, d[t], l[t], u[t]));
    }), p.push(Oe("let", h, Ke(n[0], "shape"), Ne(h.length))), p.push(Ne(t).reverse().reduce((e, t) => Te(f[t], h[t], e), Fe(je(null, [De(i, Ve(s, ...f.map((e, t) => Ee(e, o[t]))))], [Re(a, ...d.map((e, t) => De(e, Ve(l[t], ...f.map((e, a) => Ee(e, u[t][a]))))))]))), Ye(r)), [a, ...n, r, Fe(...p)];
  }(e, t))),
  Je = (ke((e, t) => new Function()), ke((e, t, a) => new Function(...function (e, t, a) {
    let r = t;
    for (let e = 0; e < t; e++) r -= a[e];
    let {
        fn: n,
        out: s,
        x: l,
        out_offset: i,
        x_offset: d,
        out_data: o,
        x_data: u,
        out_strides: f,
        x_strides: h,
        index: p,
        shape: c
      } = Ge(e, t, r),
      m = "initial",
      g = "accum",
      y = l.map(e => `${e}_start`),
      b = [];
    return b.push(...We(s, o, i, f)), l.forEach((e, t) => {
      b.push(...We(e, u[t], d[t], h[t]));
    }), b.push(Oe("let", c, Ke(l[0], "shape"), Ne(c.length))), b.push(Ne(t).filter(e => !a[e]).reverse().reduce((e, t) => Te(p[t], c[t], e), Fe(je("let", g, m), ...y.map((e, r) => je("let", e, Ve(d[r], ...Ne(t).filter(e => !a[e]).map(e => Ee(p[e], h[r][e]))))), Ne(t).filter(e => a[e]).reverse().reduce((e, t) => Te(p[t], c[t], e), Fe([je(null, g, Re(n, g, ...u.map((e, r) => De(e, Ve(y[r], ...Ne(t).filter(e => a[e]).map(e => Ee(p[e], h[r][e])))))))])), je(null, De(o, Ve(i, ...Ne(t).filter(e => !a[e]).map((e, t) => Ee(p[e], f[t])))), g))), Ye(s)), [n, ...l, s, m, Fe(...b)];
  }(e, t, a))));
function Ce(e, t, a = t.length, r = !1) {
  let n;
  if (1 == a) n = r ? (e, a = null, r = null) => (e = q(e), null == a ? a = I(e.shape) : e = v(e, a.shape), Xe(1, a.ndim)(t.bind(null, r), e, a)) : (e, a = null) => (e = q(e), null == a ? a = I(e.shape) : e = v(e, a.shape), Xe(1, a.ndim)(t, e, a));else {
    if (2 != a) throw "not support on narg > 2 yet";
    n = (e, a, r = null) => {
      let n;
      return e = q(e), a = q(a), null == r ? (n = K(e.shape, a.shape), r = I(n)) : n = r.shape, e = v(e, n), a = v(a, n), Xe(2, r.ndim)(t, e, a, r);
    };
  }
  return Object.defineProperty(n, "name", {
    value: e
  });
}
function Le(e, t, a = !1) {
  let r;
  return r = a ? (e, a = null, r = null) => (e = q(e), null == a ? a = I(e.shape) : e = v(e, a.shape), Xe(1, a.ndim)(t.bind(null, r), e, a)) : (e, a = null) => (e = q(e), null == a ? a = I(e.shape) : e = v(e, a.shape), Xe(1, a.ndim)(t, e, a)), Object.defineProperty(r, "name", {
    value: e
  });
}
function Ue(e, t) {
  let a;
  return a = (e, a, r = null) => {
    let n;
    return e = q(e), a = q(a), null == r ? (n = K(e.shape, a.shape), r = I(n)) : n = r.shape, e = v(e, n), a = v(a, n), Xe(2, r.ndim)(t, e, a, r);
  }, Object.defineProperty(a, "name", {
    value: e
  });
}
ke((e, t, ...a) => new Function());
const Be = [];
function He(e, t, a = t.length - 1, r) {
  let n;
  if (1 != a) throw "not support on narg > 1 yet";
  return n = (e, a = null, n = null, s = !1, l = r, i = !0) => {
    null != n && (i = !1), e = q(e);
    let d,
      {
        ndim: o,
        shape: u
      } = e;
    if (null == a) a = Se(a, o), d = Be;else {
      a = Se(a, o), d = [];
      for (let e = 0; e < o; e++) a[e] || d.push(u[e]);
    }
    if (s) {
      let r = u.slice();
      for (let e = 0; e < o; e++) a[e] && (r[e] = 1);
      if (null == n) n = I(r);else if (!_e(r, n.shape)) throw "unmatch shape";
      return Je(1, o, a)(t, e, n.reshape(d), l), i && 0 == n.ndim ? n.item() : n;
    }
    if (null == n) n = I(d);else if (!_e(d, n.shape)) throw "unmatch shape";
    return n = Je(1, o, a)(t, e, n, l), i && 0 == n.ndim ? n.item() : n;
  }, Object.defineProperty(n, "name", {
    value: e
  });
}
const Qe = Ue("add", (e, t) => e + t),
  Ze = Ue("subtract", (e, t) => e - t),
  et = Ue("multiply", (e, t) => e * t),
  tt = Ue("divide", (e, t) => e / t),
  at = tt,
  rt = Ue("floor_divide", (e, t) => e / t | 0),
  nt = Ue("mod", (e, t) => (e % t + t) % t),
  st = nt,
  lt = Ue("power", (e, t) => e ** t);
l.add(Qe, () => Qe(P(9).reshape([3, 3]), P(3)), () => x([[0, 2, 4], [3, 5, 7], [6, 8, 10]])), l.add(Ze, () => Ze(1, 4), () => -3).add(Ze, () => Ze(P(9).reshape([3, 3]), P(3)), () => x([[0, 0, 0], [3, 3, 3], [6, 6, 6]])), l.add(et, () => et(2, 4), () => 8).add(Ze, () => et(P(9).reshape([3, 3]), P(3)), () => x([[0, 1, 4], [0, 4, 10], [0, 7, 16]])), l.add(tt, () => tt(2, 4), () => .5).add(tt, () => tt(P(9).reshape([3, 3]), P(3)), () => x([[NaN, 1, 1], [1 / 0, 4, 2.5], [1 / 0, 7, 4]])), l.add(nt, () => nt([4, 7], [2, 3]), () => x([0, 1])).add(nt, () => nt(P(7), 5), () => x([0, 1, 2, 3, 4, 0, 1])), l.add(lt, () => lt(P(6), 3), () => x([0, 1, 8, 27, 64, 125])).add(lt, () => lt(P(6), [1, 2, 3, 3, 2, 1]), () => x([0, 1, 8, 27, 16, 5])).add(lt, () => lt(P(6), x([[1, 2, 3, 3, 2, 1], [1, 2, 3, 3, 2, 1]])), () => x([[0, 1, 8, 27, 16, 5], [0, 1, 8, 27, 16, 5]])).add(lt, () => lt(P(6), x([1, 2, 3, 3, 2, 1])), () => x([0, 1, 8, 27, 16, 5]));
const it = He("all", (e, t) => e && !!t, 1, !0),
  dt = He("any", (e, t) => e || !!t, 1, !1),
  ot = Le("isfinite", Number.isFinite),
  ut = Le("isinf", e => e == Number.POSITIVE_INFINITY || e == Number.NEGATIVE_INFINITY),
  ft = Le("isinf", Number.isNaN),
  ht = Le("isinf", e => e == Number.NEGATIVE_INFINITY),
  pt = Le("isinf", e => e == Number.POSITIVE_INFINITY);
l.add(it, () => 0 == it([[!0, !1], [!0, !0]]), () => !0).add(it, () => it([[!0, !1], [!0, !0]], 0), () => x([!0, !1])).add(it, () => it([-1, 4, 5]), () => !0).add(it, () => {
  let e = x(!1);
  return [it([-1, 4, 5], null, e) === e, e];
}, () => [!0, x(!0)]), l.add(dt, () => dt([[!0, !1], [!0, !0]]), () => !0).add(dt, () => dt([[!0, !1], [!1, !1]], 0), () => x([!0, !1])).add(dt, () => dt([-1, 0, 5]), () => !0).add(dt, () => dt(NaN), () => !1);
const ct = Math.E,
  mt = NaN,
  gt = Math.PI,
  yt = 1 / 0,
  bt = -1 / 0,
  wt = Le("sin", Math.sin),
  xt = Le("cos", Math.cos),
  _t = Le("tan", Math.tan),
  $t = Le("arcsin", Math.asin),
  zt = Le("arccos", Math.acos),
  vt = Le("arctan", Math.atan),
  At = Le("hypot", Math.hypot),
  Mt = Le("arctan2", Math.atan2),
  Nt = Le("degrees", e => 180 * e / gt),
  kt = Le("radians", e => e / 180 * gt);
function qt(e, t = 2 * gt, a = t / 2) {
  if (1 != (e = q(e)).ndim) throw "unwrap currently only supports 1d arrays";
  let r = [e.data[e.offset]],
    n = e.data[e.offset],
    s = !0;
  for (let l of k(e.shape, e.strides)) {
    if (s) {
      s = !1;
      continue;
    }
    let i = e.data[e.offset + l] - n;
    i > a ? i -= t : i < -a && (i += t);
    let d = n + i;
    r.push(d), n = d;
  }
  return q(r);
}
const It = Le("rad2deg", e => 180 * e / gt),
  St = Le("deg2rad", e => e / 180 * gt),
  Ot = Le("sinh", Math.sinh),
  jt = Le("cosh", Math.cosh),
  Tt = Le("tanh", Math.tanh),
  Ft = Le("arcsinh", Math.asinh),
  Rt = Le("arccosh", Math.acosh),
  Dt = Le("arctanh", Math.atanh),
  Kt = Le("_around", ({
    decimals: e
  }, t) => {
    let a = 10 ** e,
      r = t * a,
      n = Math.round(r),
      s = r % 1;
    return .5 != s && -.5 != s || (n = n % 2 ? n - 1 : n), n / a;
  }, !0),
  Pt = function (e, t = 0, a) {
    return Kt(e, a, {
      decimals: t
    });
  },
  Et = Le("rint", e => {
    let t = e % 1,
      a = Math.round(e);
    return .5 != t && -.5 != t || (a = a % 2 ? a - 1 : a), a;
  }),
  Vt = Le("fix", e => Math.sign(e) * Math.floor(Math.abs(e))),
  Yt = Le("floor", Math.floor),
  Gt = Le("ceil", Math.ceil),
  Wt = Le("trunc", Math.trunc),
  Xt = He("prod", (e, t) => e * t, 1, 1),
  Jt = He("sum", (e, t) => e + t, 1, 0),
  Ct = He("nanprod", (e, t) => e * (isNaN(t) ? 1 : t), 1, 1),
  Lt = He("nansum", (e, t) => e + (isNaN(t) ? 0 : t), 1, 0),
  Ut = null,
  Bt = null,
  Ht = null,
  Qt = null;
function Zt(e, t = 1, a = -1) {
  e = q(e);
  let {
    ndim: r
  } = e;
  a = qe(a, r);
  let n = Array(r).fill(u()),
    s = Array(r).fill(u());
  n[a] = u(1, null), s[a] = u(null, -1);
  for (let a = 0; a < t; a++) e = Ze(e.get(...n), e.get(...s));
  return e;
}
function ea(e, t = null, a = null) {
  if (e = Zt(j(e, -1)), null != a || null != t) {
    let r = [];
    null != a && r.push(a), r.push(e), null != t && r.push(t), e = Ae(r, null);
  }
  return e;
}
const ta = Le("exp", Math.exp, 1),
  aa = Le("expm1", e => Math.exp(e) - 1),
  ra = Le("exp2", e => 2 ** e),
  na = Le("log", Math.log),
  sa = Le("log10", Math.log10),
  la = Le("log2", Math.log2),
  ia = Le("log1p", Math.log1p),
  da = Ue("logaddexp", (e, t) => Math.log(Math.exp(e) + Math.exp(t))),
  oa = Ue("logaddexp2", (e, t) => Math.log2(2 ** e + 2 ** t)),
  ua = Le("signbit", e => e < 0),
  fa = Ue("copysign", (e, t) => t < 0 ? -Math.abs(e) : Math.abs(e)),
  ha = Ue("ldexp", (e, t) => e * 2 ** t),
  pa = Le("positive", e => +e),
  ca = Le("negative", e => -e);
function ma(e, t) {
  for (; 0 != t;) {
    let a = t;
    t = e % t, e = a;
  }
  return e;
}
const ga = Ue("lcm", function (e, t) {
    return e * t / ma(e, t);
  }),
  ya = Ue("gcd", ma),
  ba = Le("reciprocal", e => 1 / e),
  wa = Ue("fmod", (e, t) => e - (e / t | 0) * t),
  xa = Ue("maximum", Math.max),
  _a = Ue("minimum", Math.min),
  $a = He("amax", Math.max, 1, -yt),
  za = He("amin", Math.min, 1, yt),
  va = Le("sqrt", Math.sqrt),
  Aa = Le("cbrt", Math.cbrt),
  Ma = Le("square", e => e ** 2),
  Na = Le("abs", Math.abs),
  ka = Na,
  qa = Le("sign", Math.sign),
  Ia = Le("nan_to_num", e => isNaN(e) ? 0 : e == 1 / 0 ? Number.MAX_VALUE : e == -1 / 0 ? Number.MIN_VALUE : e);
l.add($a, () => $a(P(4).reshape(2, 2)), () => 3).add($a, () => $a(P(4).reshape(2, 2), 0), () => x([2, 3])).add($a, () => $a(P(4).reshape(2, 2), 1), () => x([1, 3])), l.add(xa, () => xa([2, 3, 4], [1, 5, 2]), () => x([2, 5, 4])).add(xa, () => xa(ee(2), [.5, 2]), () => x([[1, 2], [.5, 2]])), l.add(wa, () => wa([-3, -2, -1, 1, 2, 3], 2), () => x([-1, 0, -1, 1, 0, 1])).add(wa, () => st([-3, -2, -1, 1, 2, 3], 2), () => x([1, 0, 1, 1, 0, 1])), l.add(ya, () => ya(12, 20), () => 4).add(ya, () => ya(P(6), 20), () => x([20, 1, 2, 1, 4, 5])), l.add(ga, () => ga(12, 20), () => 60).add(ga, () => ga(P(6), 20), () => x([0, 20, 20, 60, 20, 20])), l.add(fa, () => fa(1.3, -1), () => -1.3).add(fa, () => 1 / fa(0, 1), () => 1 / 0).add(fa, () => 1 / fa(0, -1), () => -1 / 0), l.add(ua, () => ua(-1.2), () => !0).add(ua, () => ua(x([1, -2.3, 2.1])), () => x([!1, !0, !1])), l.add(da, () => {
  let e = na(1e-50),
    t = na(2.5e-50);
  return da(e, t);
}, () => -113.87649168120691), l.add(qt, () => qt([0, 1, 2, -1, 0], 4), () => x([0, 1, 2, 3, 4])).add(qt, () => qt([1, 2, 3, 4, 5, 6, 1, 2, 3], 6), () => x([1, 2, 3, 4, 5, 6, 7, 8, 9])).add(qt, () => qt([2, 3, 4, 5, 2, 3, 4, 5], 4), () => x([2, 3, 4, 5, 6, 7, 8, 9])), l.add(Pt, () => Pt([.37, 1.64]), () => x([0, 2])).add(Pt, () => Pt([.37, 1.64], 1), () => x([.4, 1.6])).add(Pt, () => Pt([.5, 1.5, 2.5, 3.5, 4.5]), () => x([0, 2, 2, 4, 4])).add(Pt, () => Pt([5, 15, 25, 35, 45], -1), () => x([0, 20, 20, 40, 40])).add(Pt, () => Pt([-5, -15, -25, -35, -45], -1), () => x([0, -20, -20, -40, -40])).add(Pt, () => Pt([1, 2, 3, 11], 1), () => x([1, 2, 3, 11])).add(Pt, () => Pt([1, 2, 3, 11], -1), () => x([0, 0, 0, 10])), l.add(Et, () => Et(x([-1.7, -1.5, -.2, .2, 1.5, 1.7, 2])), () => x([-2, -2, -0, 0, 2, 2, 2])), l.add(Vt, () => Vt(3.14), () => 3).add(Vt, () => Vt(3), () => 3).add(Vt, () => Vt([2.1, 2.9, -2.1, -2.9]), () => x([2, 2, -2, -2])), l.add(Xt, () => Xt([]), () => 1).add(Xt, () => Xt([1, 2]), () => 2).add(Xt, () => Xt(x([[1, 2], [3, 4]])), () => 24).add(Xt, () => Xt(x([[1, 2], [3, 4]]), 1), () => x([2, 12])).add(Xt, () => Xt(x([[1, 2], [3, 4]]), 0), () => x([3, 8])).add(Xt, () => Xt([1, 2], null, null, null, 5), () => 10), l.add(Jt, () => Jt([.5, 1.5]), () => 2).add(Jt, () => Jt([[0, 1], [0, 5]]), () => 6).add(Jt, () => Jt([[0, 1], [0, 5]], 0), () => x([0, 6])).add(Jt, () => Jt([[0, 1], [0, 5]], 1), () => x([1, 5])).add(Jt, () => Jt([10], null, null, null, 5), () => 15).add(Jt, () => Jt(P(100).reshape(5, -1, 1).get(u("::-2"), u("2:7")), [0, -1]), () => x([126, 129, 132, 135, 138])).add(Jt, () => {
  let e = P(100);
  return e = e.get(u(20, -20)).reshape([2, 1, -1, 2]).get(u("..."), u("::-1")), Jt(e, [1, -2], null, !0, -99);
}, () => x([[[[426, 411]]], [[[876, 861]]]])), l.add(Ct, () => Ct(1), () => 1).add(Ct, () => Ct([1]), () => 1).add(Ct, () => Ct([1, mt]), () => 1).add(Ct, () => Ct(x([[1, 2], [3, mt]])), () => 6).add(Ct, () => Ct(x([[1, 2], [3, mt]]), 0), () => x([3, 2])), l.add(Lt, () => Lt(1), () => 1).add(Lt, () => Lt([1]), () => 1).add(Lt, () => Lt([1, mt]), () => 1).add(Lt, () => Lt(x([[1, 1], [1, mt]])), () => 3).add(Lt, () => Lt(x([[1, 1], [1, mt]]), 0), () => x([2, 1])).add(Lt, () => Lt([1, mt, yt]), () => yt).add(Lt, () => Lt([1, mt, bt]), () => -yt), l.add(Zt, () => Zt(x([1, 2, 4, 7, 0])), () => x([1, 2, 3, -7])).add(Zt, () => Zt(x([1, 2, 4, 7, 0]), 2), () => x([1, 1, -10])).add(Zt, () => Zt(x([[1, 3, 6, 10], [0, 5, 6, 8]])), () => x([[2, 3, 4], [5, 1, 2]])).add(Zt, () => Zt(x([[1, 3, 6, 10], [0, 5, 6, 8]]), 1, 0), () => x([[-1, 2, 0, -2]])), l.add(ea, () => ea(x([1, 2, 4, 7, 0])), () => x([1, 2, 3, -7])).add(ea, () => ea(x([1, 2, 4, 7, 0]), x([88, 99]), -99), () => x([-99, 1, 2, 3, -7, 88, 99])).add(ea, () => ea([[1, 2, 4], [1, 6, 24]]), () => x([1, 2, -3, 5, 18])), l.add(Na, () => Na(x([-1.2, 1.2])), () => x([1.2, 1.2])), l.add(wt, () => wt(P(30).reshape(2, 5, 1, -1, 1)).shape, () => x([[[[[0], [.8414709848078965], [.9092974268256817]]], [[[.1411200080598672], [-.7568024953079282], [-.9589242746631385]]], [[[-.27941549819892586], [.6569865987187891], [.9893582466233818]]], [[[.4121184852417566], [-.5440211108893698], [-.9999902065507035]]], [[[-.5365729180004349], [.4201670368266409], [.9906073556948704]]]], [[[[.6502878401571168], [-.2879033166650653], [-.9613974918795568]]], [[[-.7509872467716762], [.14987720966295234], [.9129452507276277]]], [[[.8366556385360561], [-.008851309290403876], [-.8462204041751706]]], [[[-.9055783620066238], [-.13235175009777303], [.7625584504796028]]], [[[.956375928404503], [.27090578830786904], [-.6636338842129675]]]]]).shape);
const Sa = Le("invert", e => ~e),
  Oa = Sa,
  ja = Ue("bitwise_and", (e, t) => e & t),
  Ta = Ue("bitwise_or", (e, t) => e | t),
  Fa = Ue("bitwise_xor", (e, t) => e ^ t),
  Ra = Ue("left_shift", (e, t) => e << t),
  Da = Ue("right_shift", (e, t) => e >> t);
l.add(Sa, () => Sa([13]), () => x([-14])), l.add(ja, () => ja(13, 17), () => 1).add(ja, () => ja([11, 7], [4, 25]), () => x([0, 1])).add(ja, () => ja(x([2, 5, 255]), x([3, 14, 16])), () => x([2, 4, 16])).add(ja, () => ja([!0, !0], [!1, !0]), () => x([!1, !0])), l.add(Ta, () => Ta([33, 4], 1), () => x([33, 5])), l.add(Fa, () => {
  let e = [1, 2, 3],
    t = [4, 5, 6];
  return e = Fa(e, t), t = Fa(e, t), e = Fa(e, t), [e, t];
}, () => [[4, 5, 6], [1, 2, 3]]), l.add(Ra, () => Ra(5, [1, 2, 3]), () => x([10, 20, 40])), l.add(Da, () => Da(10, [1, 2, 3]), () => x([5, 2, 1]));
const Ka = Ue("equal", (e, t) => e == t),
  Pa = Ue("not_equal", (e, t) => e != t),
  Ea = Ue("less_equal", (e, t) => e <= t),
  Va = Ue("less_equal", (e, t) => e < t),
  Ya = Ue("less_equal", (e, t) => e >= t),
  Ga = Ue("less_equal", (e, t) => e > t);
function Wa(e, t, a = null, r = 1) {}
function Xa(e, t, a = -1, r = a, n = a, s = a) {
  e = q(e), t = q(t), r = qe(r, e.ndim), n = qe(n, t.ndim), e = Me(e, r, -1), t = Me(t, n, -1);
  let l = e.shape.at(-1),
    i = t.shape.at(-1);
  if (2 != l && 3 != l || 2 != i && 3 != i) throw "incompatible dimensions for cross product (dimension must be 2 or 3)";
  let d = K(e.shape.slice(0, -1), t.shape.slice(0, -1));
  3 != e.shape.at(-1) && 3 != t.shape.at(-1) || (d = [...d, 3], s = qe(s, d.length));
  let o,
    u,
    f,
    h,
    p,
    c,
    m,
    g,
    y,
    b = I(d);
  if (o = e.get("...", 0), u = e.get("...", 1), 3 == e.shape.at(-1) && (f = e.get("...", 2)), h = t.get("...", 0), p = t.get("...", 1), 3 == t.shape.at(-1) && (c = t.get("...", 2)), 0 != b.ndim && 3 == b.shape.at(-1) && (m = b.get("...", 0), g = b.get("...", 1), y = b.get("...", 2)), 2 == e.shape.at(-1)) {
    if (2 == t.shape.at(-1)) return et(o, p, b), Ze(b, et(u, h), b), b;
    if (3 != t.shape.at(-1)) throw "b.shape.at(-1) != 3";
    et(u, c, m), et(o, c, g), ca(g, g), et(o, p, y), Ze(y, et(u, h), y);
  } else {
    if (3 != e.shape.at(-1)) throw "a.shape.at(-1) != 3";
    if (3 == t.shape.at(-1)) {
      et(u, c, m);
      let e = et(f, p);
      Ze(m, e, m), et(f, h, g), et(o, c, e), Ze(g, e, g), et(o, p, y), et(u, h, e), Ze(y, e, y);
    } else {
      if (2 != t.shape.at(-1)) throw "b.shape.at(-1) != 2";
      et(f, p, m), ca(m, m), et(f, h, g), et(o, p, y), Ze(y, et(u, h), y);
    }
  }
  return Me(b, -1, s);
}
function Ja(e, t = null, a = 1, r = -1) {
  e = q(e);
  let {
    ndim: n
  } = e;
  r = qe(r, n);
  let s = a;
  if (null != t) if (1 == (t = q(t)).ndim) {
    s = Zt(t);
    let e = Array(n).fill(1);
    e[r] = s.shape[0], s = s.reshape(e);
  } else s = Zt(t, null, r);
  let l,
    i = Array(n).fill(u()),
    d = Array(n).fill(u());
  return i[r] = u(1, null), d[r] = u(null, -1), l = Qe(e.get(...i), e.get(...d)), et(s, l, l), tt(l, 2, l), Jt(l, r);
}
function Ca(e, t, a = "full") {
  if (e = U(e), t = U(t), 0 == e.size) throw "a cannot be empty";
  if (0 == t.size) throw "v cannot be empty";
  if (e.ndim > 1 || t.ndim > 1) throw "object too deep for desired array";
  if (t.ndim > e.ndim) {
    let a = e;
    e = t, t = a;
  }
  let r = e.size;
  if ("valid" == a) r += 1 - t.size;else if ("full" == a) r += t.size - 1;else if ("same" != a) throw `mode must be one of 'valid', 'same', or 'full' (got '${a}')`;
  let n = Array(r),
    s = 0;
  if ("valid" != a) for (let a = 0; a < t.size - 1; a++) {
    let r = 0;
    for (let n = a + 1, s = 0; n--; s++) r += e.item(s) * t.item(n);
    n[s++] = r;
  }
  for (let a = 0; a < e.size + 1 - t.size; a++) {
    let r = 0;
    for (let n = 0, s = t.size - 1; n < t.size; n++, s--) r += e.item(a + n) * t.item(s);
    n[s++] = r;
  }
  if ("valid" != a) for (let a = 0; a < t.size - 1; a++) {
    let r = 0;
    for (let n = 0; n < t.size - 1 - a; n++) r += e.item(e.size - t.size + 1 + a + n) * t.item(t.size - 1 - n);
    n[s++] = r;
  }
  return "same" == a && (n = n.slice((t.size - 1) / 2 | 0, ((t.size - 1) / 2 | 0) + r)), new b([r], n);
}
function La(e, t, a, r = null) {
  if (e = q(e), null == r) r = S(e);else if (!_e(e.shape, r.shape)) throw "out shape does not match input shape";
  if (f(t) && f(a)) {
    let n = k(e.shape, e.strides);
    for (let s of k(r.shape, r.strides)) r.data[s] = Math.min(Math.max(t, e.data[n.next().value]), a);
    return r;
  }
  t = v(t, e.shape), a = v(a, e.shape);
  let n = k(e.shape, e.strides),
    s = k(t.shape, t.strides),
    l = k(a.shape, a.strides);
  for (let i of k(r.shape, r.strides)) r.data[i] = Math.min(Math.max(t.data[s.next().value], e.data[n.next().value]), a.data[l.next().value]);
  return r;
}
function Ua(e, t = -1, a = null) {
  e = q(e), null == t ? (e = ge(e), t = 0) : t = qe(t, e.ndim);
  let r = S(e),
    n = Array(e.shape[t]),
    s = Array(e.shape[t]),
    l = (e, t) => n[e] - n[t],
    i = e.shape.slice();
  i[t] = 1;
  for (let d of M(i)) {
    let {
        offset: o
      } = e,
      {
        offset: u
      } = r;
    for (let t = 0; t < i.length; t++) o += d[t] * e.strides[t], u += d[t] * r.strides[t];
    for (let r = 0; r < e.shape[t]; r++) {
      let l = e.data[o + r * e.strides[t]];
      n[r] = null != a ? a(l) : l, s[r] = r;
    }
    s.sort(l);
    for (let a = 0; a < e.shape[t]; a++) r.data[u + a * r.strides[t]] = s[a];
  }
  return r;
}
function Ba(e, t = -1, a = null) {
  e = q(e), null == t ? (e = ge(e), t = 0) : t = qe(t, e.ndim);
  let r = S(e),
    n = Array(e.shape[t]),
    s = (e, t) => e - t,
    l = e.shape.slice();
  l[t] = 1;
  for (let i of M(l)) {
    let {
        offset: d
      } = e,
      {
        offset: o
      } = r;
    for (let t = 0; t < l.length; t++) d += i[t] * e.strides[t], o += i[t] * r.strides[t];
    for (let r = 0; r < e.shape[t]; r++) {
      let s = e.data[d + r * e.strides[t]];
      n[r] = null != a ? a(s) : s;
    }
    n.sort(s);
    for (let a = 0; a < e.shape[t]; a++) r.data[o + a * r.strides[t]] = n[a];
  }
  return r;
}
function Ha(e, t, a, r = null, n = null, s = null) {
  if ([e, t, a] = [e, t, a].map(q), 1 != t.ndim || 1 != a.ndim) throw "Data points must be 1-D sequences";
  if (t.shape[0] != a.shape[0]) throw "fp and xp are not of the same length";
  if (null != s) {
    e = nt(e, s);
    let r = Ua(t = nt(t, s));
    t = t.get(r), a = a.get(r), t = Ae([Ze(t.get(u(-1)), s), t, Qe(t.get(u(0, 1)), s)]), a = Ae([a.get(u(-1)), a, a.get(u(0, 1))]);
  }
  r ??= a.item(0), n ??= a.item(-1);
  let l = Array(e.size),
    i = 0,
    d = t.item(0),
    o = t.item(-1);
  for (let s of e.flat) {
    let e;
    if (s < d) e = r;else if (s > o) e = n;else {
      let r = 1;
      for (; r < t.length && s > t.item(r); r++);
      let n = t.item(r - 1);
      if (s == n) e = a.item(r - 1);else {
        let l = t.item(r);
        if (s == l) e = a.item(r);else {
          let t = a.item(r - 1);
          e = (s - n) * (a.item(r) - t) / (l - n) + t;
        }
      }
    }
    l[i++] = e;
  }
  return new b(e.shape, l);
}
function Qa(e) {
  let t = Array(e.length),
    a = t[0] = e[0];
  for (let r = 1; r < e.length; r++) t[r] = a += e[r];
  return t;
}
function Za(e) {
  let t = 0;
  for (let a = 0; a < e.length; a++) t += e[a];
  return t;
}
function er(e, t, a) {
  let r = a() * t,
    n = e.length - 1;
  for (let t = 0; t < n; t++) if (r -= e[t], r < 0) return t;
  return n;
}
function tr(e, t, a) {
  let r = a() * t,
    n = 0,
    s = e.length - 1;
  for (; n < s;) {
    let t = n + s >> 1;
    r > e[t] ? n = t + 1 : s = t;
  }
  return n;
}
function ar(e) {
  let t = e.length,
    a = [],
    r = [],
    n = t / Za(e);
  e = e.map(e => e * n);
  for (let n = 0; n < t; n++) e[n] < 1 ? a.push(n) : r.push(n);
  let s = Array(t),
    l = Array(t);
  for (; a.length > 0 && r.length > 0;) {
    let t = a.pop(),
      n = r.pop();
    s[t] = e[t], l[t] = n, e[n] = e[n] + e[t] - 1, e[n] < 1 ? a.push(n) : r.push(n);
  }
  for (; r.length > 0;) s[r.pop()] = 1;
  for (; a.length > 0;) s[a.pop()] = 1;
  return {
    n: t,
    prob: s,
    alias: l
  };
}
function rr(e, t, a, r) {
  let n = r() * e | 0;
  return r() < t[n] ? n : a[n];
}
function nr(e) {
  let t = e.length,
    a = Math.ceil(Math.log2(t)),
    r = 1 << a,
    n = Array(2 * r - 1),
    s = r - 1;
  for (let a = 0; a < t; a++) n[s + a] = e[a];
  for (let e = t; e < r; e++) n[s + e] = 0;
  let l = s;
  for (; r > 1;) {
    let e = l;
    l -= r >>= 1;
    for (let t = 0; t < r; t++) n[l + t] = n[e] + n[e + 1], e += 2;
  }
  return {
    tree: n,
    level: a,
    offset: s
  };
}
function sr(e, t, a, r) {
  let n = r - e[a += t];
  for (; a >= 0;) e[a] += n, a = a - 1 >> 1;
}
function lr(e, t, a, r) {
  let n = r() * e[0],
    s = 1;
  for (; --t;) n > e[s] && (n -= e[s++]), s = 2 * s + 1;
  return n > e[s] && s++, s - a;
}
function ir(e, t = null, a = !0, r = "auto", n = Array(e), s = Math.random) {
  let l = t.length;
  if (a ||= 1 == e, a) switch ("auto" == r && (r = 1 == e || e * l < 600 ? "linear" : e > (l > 100 ? 2 * l : 50) ? "alias" : "binary"), r) {
    case "linear":
      {
        let a = Za(t);
        for (let r = 0; r < e; r++) n[r] = er(t, a, s);
        break;
      }
    case "binary":
      {
        let a = Qa(t),
          r = a.at(-1);
        for (let t = 0; t < e; t++) n[t] = tr(a, r, s);
        break;
      }
    case "alias":
      {
        let {
          n: a,
          prob: r,
          alias: l
        } = ar(t);
        for (let t = 0; t < e; t++) n[t] = rr(a, r, l, s);
        break;
      }
    case "sumtree":
      {
        let {
          tree: a,
          level: r,
          offset: l
        } = nr(t);
        for (let t = 0; t < e; t++) n[t] = lr(a, r, l, s);
        break;
      }
    default:
      throw `unexpected method '${r}'`;
  } else {
    if (e > t) throw "size > p is not allowed when replace = true";
    switch ("auto" == r && (r = l + e < 150 ? "linear" : l + e < 200 ? "binary" : "sumtree"), r) {
      case "linear":
        {
          let a = Za(t);
          t = t.slice();
          for (let r = 0; r < e; r++) {
            let e = n[r] = er(t, a, s);
            a -= t[e], t[e] = 0;
          }
          break;
        }
      case "binary":
        {
          let a = Qa(t),
            r = a.at(-1);
          for (let l = 0; l < e; l++) {
            let e = n[l] = tr(a, r, s),
              i = t[l];
            for (let t = e; t < a.length; t++) a[t] -= i;
            r -= i;
          }
          break;
        }
      case "alias":
        t = t.slice();
        for (let a = 0; a < e; a++) {
          let {
            n: e,
            prob: r,
            alias: l
          } = ar(t);
          t[n[a] = rr(e, r, l, s)] = 0;
        }
        break;
      case "sumtree":
        {
          let {
            tree: a,
            level: r,
            offset: l
          } = nr(t);
          for (let t = 0; t < e; t++) sr(a, l, n[t] = lr(a, r, l, s), 0);
          break;
        }
      default:
        throw `unexpected method '${r}'`;
    }
  }
  return n;
}
function dr(e, t = null, a = !0, r = null) {
  if (1 != (e = "number" == typeof e ? P(e) : q(e)).ndim) throw "'p' must be 1-dimensional";
  if (0 == e.size) throw "'a' cannot be empty unless no samples are taken";
  if (null == r) r = Array(e.size).fill(1 / e.size);else {
    if (1 != (r = q(r)).ndim) throw "'p' must be 1-dimensional";
    if (r.size != e.size) throw "'a' and 'p' must have same size";
    r = r.toarray();
  }
  if (e = e.toarray(), null == t) return e[ir(1, r)[0]];
  "number" == typeof t && (t = [t]);
  let n = function (e) {
    let t = 1;
    for (let a of e) t *= a;
    return t;
  }(t);
  if (xe(r) < n) throw "Fewer non-zero entries in p than size";
  let s = ir(n, r, a).map(t => e[t]);
  return new b(t, s);
}
function or(e = null) {
  if (null == e) return Math.random();
  "number" == typeof e && (e = [e]);
  let t = function (e) {
      let t = 1;
      for (let a of e) t *= a;
      return t;
    }(e),
    a = Array(t);
  for (let e = 0; e < t; e++) a[e] = Math.random();
  return new b(e, a);
}
l.add(Ka, () => Ka([0, 1, 3], P(3)), () => x([!0, !0, !1])).add(Ka, () => Ka(1, G(1)), () => x([!0])).add(Ka, () => Ka(x([2, 4, 6]), x([2, 4, 2])), () => x([!0, !0, !1])), l.add(Pa, () => Pa([1, 2], [1, 3]), () => x([!1, !0])).add(Pa, () => Pa([1, 2], [[1, 3], [1, 4]]), () => x([[!1, !0], [!1, !0]])), l.add(Ea, () => Ea([4, 2, 1], [2, 2, 2]), () => x([!1, !0, !0])), l.add(Va, () => Va([1, 2], [2, 2]), () => x([!0, !1])), l.add(Ya, () => Ya([4, 2, 1], [2, 2, 2]), () => x([!0, !0, !1])), l.add(Ga, () => Ga([4, 2], [2, 2]), () => x([!0, !1])), l.add(Xa, () => Xa([1, 2, 3], [4, 5, 6]), () => x([-3, 6, -3])).add(Xa, () => Xa([1, 2], [4, 5, 6]), () => x([12, -6, -3])).add(Xa, () => Xa([1, 2, 0], [4, 5, 6]), () => x([12, -6, -3])).add(Xa, () => Xa([1, 2], [4, 5]), () => x(-3)).add(Xa, () => Xa(x([[1, 2, 3], [4, 5, 6]]), x([[4, 5, 6], [1, 2, 3]])), () => x([[-3, 6, -3], [3, -6, 3]])).add(Xa, () => Xa(x([[1, 2, 3], [4, 5, 6]]), x([[4, 5, 6], [1, 2, 3]]), void 0, void 0, void 0, 0), () => x([[-3, 3], [6, -6], [-3, 3]])).add(Xa, () => {
  let e = x([[1, 2, 3], [4, 5, 6], [7, 8, 9]]),
    t = x([[7, 8, 9], [4, 5, 6], [1, 2, 3]]);
  return [Xa(e, t), Xa(e, t, void 0, 0, 0)];
}, () => [x([[-6, 12, -6], [0, 0, 0], [6, -12, 6]]), x([[-24, 48, -24], [-30, 60, -30], [-36, 72, -36]])]), l.add(Ja, () => Ja([1, 2, 3]), () => 4).add(Ja, () => Ja([1, 2, 3], [4, 6, 8]), () => 8).add(Ja, () => Ja([1, 2, 3], null, 2), () => 8).add(Ja, () => Ja([1, 2, 3], [8, 6, 4]), () => -8).add(Ja, () => Ja(P(6).reshape(2, 3), void 0, void 0, 0), () => x([1.5, 2.5, 3.5])).add(Ja, () => Ja(P(6).reshape(2, 3), void 0, void 0, 1), () => x([2, 8])), l.add(Ca, () => Ca([1, 2, 3], [0, 1, .5]), () => x([0, 1, 2.5, 4, 1.5])).add(Ca, () => Ca([1, 2, 3], [1, .5], "full"), () => x([1, 2.5, 4, 1.5])).add(Ca, () => Ca([1, 2, 3], [0, 1, .5], "same"), () => x([1, 2.5, 4])).add(Ca, () => Ca([1, 2, 3], [0, 1, .5], "valid"), () => x([2.5])), l.add(La, () => La(P(10), 1, 8), () => x([1, 1, 2, 3, 4, 5, 6, 7, 8, 8])).add(La, () => La(P(10), 8, 1), () => x([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).add(La, () => {
  let e = P(10);
  return [La(e, 3, 6, e), e];
}, () => [x([3, 3, 3, 3, 4, 5, 6, 6, 6, 6]), x([3, 3, 3, 3, 4, 5, 6, 6, 6, 6])]).add(La, () => La(P(10), [3, 4, 1, 1, 1, 4, 4, 4, 4, 4], 8), () => x([3, 4, 2, 3, 4, 5, 6, 7, 8, 8])), Ua(x([[[0, 3], [2, 2], [2, 2]], [[8, 5], [4, 1], [6, -2]]]), 0), l.add(Ua, () => Ua([3, 1, 2]), () => x([1, 2, 0])).add(Ua, () => Ua(x([[0, 3], [2, 2]]), 0), () => x([[0, 1], [1, 0]])).add(Ua, () => Ua(x([[0, 3], [2, 2]]), 1), () => x([[0, 1], [0, 1]])).add(Ua, () => Ua(x([[[0, 3], [2, 2], [2, 2]], [[8, 5], [4, 1], [6, -2]]]), 0), () => x([[[0, 0], [0, 1], [0, 1]], [[1, 1], [1, 0], [1, 0]]])).add(Ua, () => Ua(x([[[0, 3], [2, 2], [2, 2]], [[8, 5], [4, 1], [6, -2]]]), 1), () => x([[[0, 1], [1, 2], [2, 0]], [[1, 2], [2, 1], [0, 0]]])).add(Ua, () => Ua(x([[[0, 3], [2, 2], [2, 2]], [[8, 5], [4, 1], [6, -2]]]), 2), () => x([[[0, 1], [0, 1], [0, 1]], [[1, 0], [1, 0], [1, 0]]])), l.add(Ba, () => Ba(x([[1, 4], [3, 1]])), () => x([[1, 4], [1, 3]])).add(Ba, () => Ba(x([[1, 4], [3, 1]]), null), () => x([1, 1, 3, 4])).add(Ba, () => Ba(x([[1, 4], [3, 1]]), 0), () => x([[1, 1], [3, 4]])), l.add(Ha, () => Ha(2.5, [1, 2, 3], [3, 2, 0]), () => 1).add(Ha, () => Ha(4.5, [6, 4, 5], [3, 2, 0]), () => 3).add(Ha, () => Ha([0, 1, 1.5, 2.5, 3.14], [1, 2, 3], [3, 2, 0]), () => x([3, 3, 2.5, 1, 0])).add(Ha, () => Ha([-180, -170, -185, 185, -10, -5, 0, 365], [190, -190, 350, -350], [5, 10, 3, 4], null, null, 360), () => x([7.5, 5, 8.75, 6.25, 3, 3.25, 3.5, 3.75]));
const ur = or,
  fr = or;
function hr(...e) {
  return or(e);
}
function pr(e) {
  let t = 1;
  for (let a of e) t *= a;
  return t;
}
function cr(e, t = null, a = null, r = !0) {
  if (null != a) {
    if (!X(a)) throw "output array must be contiguous";
    null == t && (t = a.shape);
  }
  let n;
  if (null == t) {
    if (r) return e();
    n = [], t = 1;
  } else "number" == typeof t ? n = [t] : (n = t, t = pr(n));
  if (null == a) a = I(n);else if (!_e(n, a.shape)) throw "size must match out.shape when used together";
  let {
    data: s,
    offset: l
  } = a;
  for (let a = 0; a < t; a++) s[l + a] = e();
  return a;
}
class mr {
  constructor(e = Math.random) {
    this.rand = e;
  }
  integers(e, t = null, a = null, r = !1) {
    null == t && (t = e, e = 0);
    let n = t - e;
    return r && (n += 1), cr(() => this.rand() * n + e | 0, a);
  }
  random(e = null, t = null) {
    return cr(() => this.rand(), e, t);
  }
  choice(e, t = null, a = !0, r = null, n = 0) {
    if ("number" == typeof e) {
      if (e <= 0) throw "a must be a positive integer unless no samples are taken";
      e = P(e);
    } else if (0 == (e = q(e)).size) throw "a cannot be empty unless no samples are taken";
    if (null == r) r = Array(e.shape[n]).fill(1 / e.shape[n]);else {
      if (1 != (r = q(r)).ndim) throw "p must be 1-dimensional";
      if (r.size != e.shape[n]) throw "a and p must have same size";
      r = r.toarray();
    }
    let s = Array(n).fill(u());
    if (null == t) return s[n] = ir(1, r, void 0, void 0, void 0, this.rand)[0], e._getview(s).copy();
    let l = t;
    if ("number" == typeof t && (l = [t]), t = pr(l), r.length < t) throw "Cannot take a larger sample than population when replace is false";
    if (xe(r) < t) throw "Fewer non-zero entries in p than size";
    let i = [...e.shape];
    i.splice(n, 1, ...l);
    let d = Array(n).fill(u()),
      o = I(i),
      f = ir(t, r, a, void 0, void 0, this.rand),
      h = 0;
    for (let t of M(l)) {
      for (let e = 0; e < t.length; e++) d[n + e] = t[e];
      s[n] = f[h++], o.set(d, e._getview(s));
    }
    return o;
  }
  shuffle(e, t = 0) {
    t = qe(t, (e = q(e)).ndim);
    let a = Array(t + 1).fill(u(":")),
      {
        shape: r
      } = e,
      n = r[t],
      s = I([...r.slice(0, t), ...r.slice(t + 1)]);
    for (let r = 0; r < n - 2; r++) {
      let l = this.rand() * (n - r) + r | 0;
      a[t] = r;
      let i = e._getview(a);
      a[t] = l;
      let d = e._getview(a);
      s.set(i), i.set(d), d.set(s);
    }
  }
  permuted(e, t = null, a = null) {
    t = qe(t, (e = q(e)).ndim);
    let r = [...e.shape];
    r[t] = 1, null == a && (a = S(e));
    for (let n of M(r)) {
      n[t] = u();
      let r = e._getview(n).flatten();
      this.shuffle(r), a.set(n, r);
    }
    return a;
  }
  permutation(e, t = 0) {
    return e = "number" == typeof e ? P(e) : x(e), this.shuffle(e, t), e;
  }
  uniform(e = 0, t = 1, a = null) {
    return cr(() => this.rand() * (t - e) + e, a);
  }
  normal(e = 0, t = 1, a = null) {
    return cr(() => {
      let a = this.rand(),
        r = this.rand(),
        n = Math.sqrt(-2 * Math.log(a)) * Math.cos(2 * Math.PI * r);
      return e + t * n;
    }, a);
  }
}
const gr = new mr();
function yr(e, t = null, a = null) {
  if (null == t && null == a) return he(e);
  let r = Z(e, t, a),
    n = I(r.shape),
    s = 0;
  for (let [e, t, a] of r) n.data[s++] = e ? t : a;
  return n;
}
function br(...e) {
  let t = [];
  for (let a = 0; a < e.length; a++) {
    let {
        start: r,
        stop: n,
        step: s,
        slicelength: l
      } = e[a]._get(),
      i = Array(l);
    for (let e = 0; e < l; e++) i[e] = r + e * s;
    let d = Array(e.length).fill(1);
    d[a] = l, t.push(new b(d, i));
  }
  return t;
}
function wr(e, t = null, a = null, r = !1) {
  e = q(e), null == t ? (e = ge(e), t = 0) : t = qe(t, e.ndim);
  let n = [...e.shape.slice(0, t), ...(r ? [1] : []), ...e.shape.slice(t + 1)];
  if (null == a) a = I(n);else if (!_e(n, a.shape)) throw "out must have the same shape as the expected output";
  return Ze($a(e, t, null, r), za(e, t, null, r), a), a;
}
function xr(e, t = null, a = null, r = !1, n = !1) {
  let s;
  if (e = q(e), null == t ? (e = ge(e), t = 0) : t = qe(t, e.ndim), null != a && (a = q(a)), null != a) {
    if (s = Jt(a), 0 == s) throw "sum(weights) must not be 0";
    if (1 == a.ndim) a = a.reshape([...Array(t).fill(1), e.shape[t]]);else if (!_e(a.shape, e.shape)) throw "weights.shape and a.shape do not match";
    e = et(e, a);
  } else s = e.shape[t];
  let l = tt(Jt(e, t, null, n), s);
  return r ? [l, s] : l;
}
function _r(e, t = null, a = null, r = !1) {
  e = q(e), null == t ? (e = ge(e), t = 0) : t = qe(t, e.ndim);
  let n = [...e.shape.slice(0, t), ...(r ? [1] : []), ...e.shape.slice(t + 1)];
  if (null == a) a = I(n);else if (!_e(n, a.shape)) throw "out must have the same shape as the expected output";
  return tt(Jt(e, t, null, r), e.shape[t], a), a;
}
function $r(e, t = null, a = null, r = 0, n = !1) {
  e = q(e), null == t ? (e = ge(e), t = 0) : t = qe(t, e.ndim);
  let s = [...e.shape.slice(0, t), ...(n ? [1] : []), ...e.shape.slice(t + 1)];
  if (null == a) a = I(s);else if (!_e(s, a.shape)) throw "out must have the same shape as the expected output";
  return _r(Ma(Ze(e, tt(Jt(e, t, null, !0), e.shape[t] - r))), t, a, n), a;
}
function zr(e, t = null, a = null, r = 0, n = !1) {
  return a = $r(e, t, a, r, n), va(a, a), a;
}
function vr(e, t = null, a = 0) {
  if (1 != (e = q(e)).ndim) throw "a.dim != 1";
  if (za(e) < 0) throw "amin(a) < 0";
  if (a < 0) throw "minlength < 0";
  if (null != t) {
    if (!_e((t = q(t)).shape, e.shape)) throw "weights.shape != a.shape";
    t = t.toarray();
  }
  let r = Array(Math.max($a(e) + 1, a)).fill(0),
    n = 0;
  for (let a of e.flat) r[a] += null != t ? t[n] : 1, n++;
  return new b([r.length], r);
}
function Ar(e, t = !1) {
  let a,
    r = e.length,
    n = Array(r).fill(1);
  a = t ? [] : I([r, ...e]);
  for (let r = 0; r < e.length; r++) {
    let s = e[r],
      l = P(s).reshape([...n.slice(0, r), s, ...n.slice(r + 1)]);
    t ? a.push(l) : a.set([r], l);
  }
  return a;
}
function Mr(...e) {
  let t = [],
    a = e.length;
  for (let r = 0; r < a; r++) {
    let n = e[r];
    n = q(n), n.ndim, "boolean" == typeof n.item(0) && ([n] = he(n)), n = n.reshape([...Array(r).fill(1), n.size, ...Array(a - r - 1).fill(1)]), t.push(n);
  }
  return t;
}
function Nr(e, t, a = !1, r = !1, n = "table") {}
function kr(e, t = null, a = "big") {
  e = q(e), null == t ? (e = ge(e), t = 0) : t = qe(t, e.ndim);
  let r = e.shape.slice();
  r[t] = Math.ceil(r[t] / 8);
  let n = I(r),
    s = e.shape.slice();
  s[t] = 1;
  let l = Array(8 * r[t]);
  for (let r of M(s)) {
    let {
        offset: i
      } = e,
      {
        offset: d
      } = n;
    for (let t = 0; t < s.length; t++) i += r[t] * e.strides[t], d += r[t] * n.strides[t];
    l.fill(0);
    for (let a = 0; a < e.shape[t]; a++) {
      let r = e.data[i + a * e.strides[t]];
      l[a] = r;
    }
    let o = 0;
    for (let e = 0; e < l.length; e += 8) {
      let r = 0;
      if ("big" == a) for (let t = 0; t < 8; t++) r += l[e + t] << 7 - t;else {
        if ("little" != a) throw "bitorder can be either big or little";
        for (let t = 0; t < 8; t++) r += l[e + t] << t;
      }
      n.data[d + o * n.strides[t]] = r, o++;
    }
  }
  return n;
}
function qr(e, t = null, a = "big") {
  e = q(e), null == t ? (e = ge(e), t = 0) : t = qe(t, e.ndim);
  let r = e.shape.slice();
  return r[t] = Math.ceil(r[t] / 8), I(r);
}
l.add(yr, () => {
  let e = P(10);
  return yr(Va(e, 5), e, et(10, e));
}, () => x([0, 1, 2, 3, 4, 50, 60, 70, 80, 90])).add(yr, () => yr([[!0, !1], [!0, !0]], [[1, 2], [3, 4]], [[9, 8], [7, 6]]), () => x([[1, 8], [3, 4]])).add(yr, () => {
  let [e, t] = br(u(":3"), u(null, 4));
  return yr(Va(e, t), e, Qe(10, t));
}, () => x([[10, 0, 0, 0], [10, 11, 1, 1], [10, 11, 12, 2]])).add(yr, () => {
  let e = x([[0, 1, 2], [0, 2, 4], [0, 3, 6]]);
  return yr(Va(e, 4), e, -1);
}, () => x([[0, 1, 2], [0, 2, -1], [0, 3, -1]])), l.add(br, () => br(u("0:5"), u("0:5")), () => [x([[0], [1], [2], [3], [4]]), x([[0, 1, 2, 3, 4]])]).add(br, () => br(u("3:5"), u("0:-5"), u("0:1")), () => [x([[[3]], [[4]]]), x([]).reshape([1, 0, 1]), x([[[0]]])]), l.add(wr, () => wr(x([[4, 9, 2, 10], [6, 9, 7, 12]]), 1), () => x([8, 6])).add(wr, () => wr(x([[4, 9, 2, 10], [6, 9, 7, 12]]), 0), () => x([2, 0, 5, 2])).add(wr, () => wr(x([[4, 9, 2, 10], [6, 9, 7, 12]])), () => 10).add(wr, () => wr(lt(P(10, 40), 2).reshape(5, 2, 3), 0, null, !0), () => x([[[1056, 1104, 1152], [1200, 1248, 1296]]])), l.add(xr, () => xr(P(1, 5)), () => 2.5).add(xr, () => xr(P(1, 11), void 0, P(10, 0, -1)), () => 4).add(xr, () => xr(P(6).reshape(3, 2), 1, [1 / 4, 3 / 4]), () => x([.75, 2.75, 4.75])).add(xr, () => xr(P(6).reshape(3, 2), 1, void 0, void 0, !0), () => x([[.5], [2.5], [4.5]])), l.add(_r, () => _r(x([[1, 2], [3, 4]])), () => 2.5).add(_r, () => _r(x([[1, 2], [3, 4]]), 0), () => x([2, 3])).add(_r, () => _r(x([[1, 2], [3, 4]]), 1), () => x([1.5, 3.5])), l.add($r, () => $r(x([[1, 2], [3, 4]])), () => 1.25).add($r, () => $r(x([[1, 2], [3, 4]]), 0), () => x([1, 1])).add($r, () => $r(x([[1, 2], [3, 4]]), 1), () => x([.25, .25])), l.add(zr, () => zr(x([[1, 2], [3, 4]])), () => 1.118033988749895).add(zr, () => zr(x([[1, 2], [3, 4]]), 0), () => x([1, 1])).add(zr, () => zr(x([[1, 2], [3, 4]]), 1), () => x([.5, .5])), l.add(vr, () => vr(P(5)), () => x([1, 1, 1, 1, 1])).add(vr, () => vr(x([0, 1, 1, 3, 2, 1, 7])), () => x([1, 3, 1, 1, 0, 0, 0, 1])).add(vr, () => vr(x([0, 1, 1, 2, 2, 2]), x([.3, .5, .2, .7, 1, -.6])), () => x([.3, .7, 1.1])), l.add(Ar, () => Ar([2, 3]), () => x([[[0, 0, 0], [1, 1, 1]], [[0, 1, 2], [0, 1, 2]]])).add(Ar, () => Ar([2, 3], !0), () => [x([[0], [1]]), x([[0, 1, 2]])]), l.add(Mr, () => Mr([0, 1], [2, 4]), () => [x([[0], [1]]), x([[2, 4]])]).add(Mr, () => Mr([!0, !0], [2, 4]), () => [x([[0], [1]]), x([[2, 4]])]).add(Mr, () => Mr([!0, !0], [!1, !1, !0, !1, !0]), () => [x([[0], [1]]), x([[2, 4]])]), l.add(kr, () => kr(x([[[1, 0, 1], [0, 1, 0]], [[1, 1, 0], [0, 0, 1]]]), -1), () => x([[[160], [64]], [[192], [32]]])).add(kr, () => kr(x([[[1, 0, 1], [0, 1, 0]], [[1, 1, 0], [0, 0, 1]]])), () => x([171, 16])).add(kr, () => kr(x([[[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]]), -1), () => x([[[160, 0]]])), l.add(qr, () => qr(x([[2], [7], [23]]), 1), () => x([[0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 1, 0, 1, 1, 1]])).add(qr, () => {
  let e = x([[0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 1, 0, 1, 1, 1]]),
    t = kr(e, 0);
  return [qr(t, 0), ze(e, qr(t, 0, e.shape[0]))];
}, () => [x([[0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 1, 0, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]), !0]);
var Ir = t.zvA,
  Sr = t.iIB,
  Or = t.RO$,
  jr = t.zhN,
  Tr = t._bh,
  Fr = t.OVY,
  Rr = t.p2w,
  Dr = t.SRu,
  Kr = t.tw1,
  Pr = t.Yur,
  Er = t.RPv,
  Vr = t.JWo,
  Yr = t.WnP,
  Gr = t.AGi,
  Wr = t.IHx,
  Xr = t.$6P,
  Jr = t.Lb7,
  Cr = t.t5D,
  Lr = t.YjB,
  Ur = t.eTT,
  Br = t.FKo,
  Hr = t.Hn6,
  Qr = t.PD,
  Zr = t.oSO,
  en = t.Xsc,
  tn = t.gJP,
  an = t.$jo,
  rn = t.s6s,
  nn = t.S1h,
  sn = t.Q8B,
  ln = t.IXX,
  dn = t.YSU,
  on = t.Vjr,
  un = t.k2d,
  fn = t.FAR,
  hn = t.V2R,
  pn = t.dcL,
  cn = t.ujY,
  mn = t.Y8W,
  gn = t.pHG,
  yn = t.yE8,
  bn = t.W4K,
  wn = t.GBu,
  xn = t.eYE,
  _n = t.qgf,
  $n = t.fMc,
  zn = t.xAU,
  vn = t.M2z,
  An = t.Qo,
  Mn = t.Lo$,
  Nn = t.eKn,
  kn = t.mDi,
  qn = t.q$q,
  In = t.oqW,
  Sn = t.nNb,
  On = t.mVq,
  jn = t.y39,
  Tn = t.RrX,
  Fn = t.JGK,
  Rn = t.JGz,
  Dn = t.zOr,
  Kn = t.mCk,
  Pn = t.f9Y,
  En = t.zNN,
  Vn = t.kCc,
  Yn = t.$Gn,
  Gn = t.zbp,
  Wn = t.VlM,
  Xn = t.RWx,
  Jn = t.Hgg,
  Cn = t.csF,
  Ln = t.e,
  Un = t.D5q,
  Bn = t.cSb,
  Hn = t.sKD,
  Qn = t.DgJ,
  Zn = t.pnR,
  es = t.Qqt,
  ts = t.uuq,
  as = t.aD1,
  rs = t.t$B,
  ns = t.KlT,
  ss = t.iyy,
  ls = t.zG0,
  is = t.KTV,
  ds = t.GWj,
  os = t.Sc8,
  us = t.Ek0,
  fs = t.v_D,
  hs = t.KSO,
  ps = t.rpZ,
  cs = t.thl,
  ms = t.FLS,
  gs = t.pjt,
  ys = t.zGm,
  bs = t._mT,
  ws = t.yRu,
  xs = t.HqJ,
  _s = t.CGm,
  $s = t.gY6,
  zs = t.Zw8,
  vs = t.U_R,
  As = t.f0i,
  Ms = t.fXA,
  Ns = t.I7t,
  ks = t.igg,
  qs = t.ftH,
  Is = t.KvH,
  Ss = t.IW_,
  Os = t.uqG,
  js = t.vy,
  Ts = t.Ai1,
  Fs = t.d9m,
  Rs = t.bzW,
  Ds = t.SX3,
  Ks = t.cM7,
  Ps = t.mvw,
  Es = t.Krr,
  Vs = t.k3Q,
  Ys = t.YKj,
  Gs = t.buk,
  Ws = t.gWQ,
  Xs = t.J69,
  Js = t.LTh,
  Cs = t.wQq,
  Ls = t.U8E,
  Us = t.JpY,
  Bs = t.qnd,
  Hs = t.dQs,
  Qs = t.$7d,
  Zs = t.RCU,
  el = t.MIL,
  tl = t.obs,
  al = t.$V5,
  rl = t.p3s,
  nl = t.x2A,
  sl = t.fyW,
  ll = t.MHD,
  il = t.pdy,
  dl = t.MaX,
  ol = t.S4p,
  ul = t.INJ,
  fl = t.lf5,
  hl = t.ffp,
  pl = t.AqN,
  cl = t.qDh,
  ml = t.iUs,
  gl = t.NCv,
  yl = t.pi,
  bl = t.eiS,
  wl = t.i1C,
  xl = t.qux,
  _l = t.WVs,
  $l = t.OZM,
  zl = t.BVy,
  vl = t.uRy,
  Al = t.TN_,
  Ml = t.MXc,
  Nl = t.di9,
  kl = t.n3V,
  ql = t.nTq,
  Il = t.M25,
  Sl = t.spK,
  Ol = t.XLQ,
  jl = t.wyi,
  Tl = t.XC3,
  Fl = t.UPJ,
  Rl = t.flC,
  Dl = t.mCt,
  Kl = t.Xxe,
  Pl = t.UBE,
  El = t.O$l,
  Vl = t.R_K,
  Yl = t.tPi,
  Gl = t.DYV,
  Wl = t._b3,
  Xl = t.h62,
  Jl = t.L9e,
  Cl = t.qoR,
  Ll = t.$XF,
  Ul = t.Smz,
  Bl = t.ZU4,
  Hl = t.qnb,
  Ql = t.ORZ,
  Zl = t.AEp,
  ei = t.K1B,
  ti = t.uAr,
  ai = t.BpP,
  ri = t.p4s,
  ni = t.ebm,
  si = t.$I7,
  li = t.RFc,
  ii = t.bLT,
  di = t.Wg4,
  oi = t.G6Z,
  ui = t.CAK,
  fi = t.arb,
  hi = t.lls;
exports.zeros = hi;
exports.where = fi;
exports.variance = ui;
exports.use_advanced_indexing = oi;
exports.unwrap = di;
exports.unpackbits = ii;
exports.trunc = li;
exports.true_divide = si;
exports.trapz = ni;
exports.transpose = ri;
exports.timeit2 = ai;
exports.timeit = ti;
exports.tester = ei;
exports.tanh = Zl;
exports.tan = Ql;
exports.take = Hl;
exports.swapaxes = Bl;
exports.sum = Ul;
exports.subtract = Ll;
exports.std = Cl;
exports.squeeze = Jl;
exports.square = Xl;
exports.sqrt = Wl;
exports.sort = Gl;
exports.slice = Yl;
exports.sinh = Vl;
exports.sin = El;
exports.signbit = Pl;
exports.sign = Kl;
exports.shape = Dl;
exports.shallow_array_equal = Rl;
exports.sample = Fl;
exports.rint = Tl;
exports.right_shift = jl;
exports.reshape = Ol;
exports.remainder = Sl;
exports.reciprocal = Il;
exports.ravel = ql;
exports.ranf = kl;
exports.random_sample = Nl;
exports.random = Ml;
exports.rand = Al;
exports.radians = vl;
exports.rad2deg = zl;
exports.ptp = $l;
exports.prod = _l;
exports.power = xl;
exports.positive = wl;
exports.pick = bl;
exports.pi = yl;
exports.packbits = gl;
exports.ones = ml;
exports.ogrid = cl;
exports.not_equal = pl;
exports.normalize_axis_tuple = hl;
exports.normalize_axis_mask = fl;
exports.normalize_axis_index = ul;
exports.normalize_axis = ol;
exports.nonzero = dl;
exports.negative = il;
exports.ndoffset = ll;
exports.nditer = sl;
exports.ndindex = nl;
exports.ndim = rl;
exports.ndenumerate = al;
exports.nansum = tl;
exports.nanprod = el;
exports.nancumsum = Zs;
exports.nancumprod = Qs;
exports.nan_to_num = Hs;
exports.nan = Bs;
exports.multiply = Us;
exports.moveaxis = Ls;
exports.mod = Cs;
exports.minimum = Js;
exports.mean = Xs;
exports.maximum = Ws;
exports.logaddexp2 = Gs;
exports.logaddexp = Ys;
exports.log2 = Vs;
exports.log1p = Es;
exports.log10 = Ps;
exports.log = Ks;
exports.linspace = Ds;
exports.less_equal = Rs;
exports.less = Fs;
exports.left_shift = Ts;
exports.ldexp = js;
exports.lcm = Os;
exports.ix_ = Ss;
exports.isscalar = Is;
exports.isposinf = qs;
exports.isneginf = ks;
exports.isna = Ns;
exports.isinf = Ms;
exports.isfinite = As;
exports.invert = vs;
exports.interp = zs;
exports.inf = $s;
exports.indices = _s;
exports.in1d = xs;
exports.identity = ws;
exports.hypot = bs;
exports.greater_equal = ys;
exports.greater = gs;
exports.gradient = ms;
exports.gcd = cs;
exports.full = ps;
exports.fromiter = hs;
exports.fromfunction = fs;
exports.fmod = us;
exports.floor_divide = os;
exports.floor = ds;
exports.flatnonzero = is;
exports.fix = ls;
exports.eye = ss;
exports.extract = ns;
exports.expm1 = rs;
exports.expand_dims = as;
exports.exp2 = ts;
exports.exp = es;
exports.even_strides = Zn;
exports.equal = Qn;
exports.empty_like = Hn;
exports.empty = Bn;
exports.ediff1d = Un;
exports.e = Ln;
exports.divide = Cn;
exports.diff = Jn;
exports.degrees = Xn;
exports.deg2rad = Wn;
exports.cumsum = Gn;
exports.cumprod = Yn;
exports.cross = Vn;
exports.count_nonzero = En;
exports.cosh = Pn;
exports.cos = Kn;
exports.copyto = Dn;
exports.copysign = Rn;
exports.copy = Fn;
exports.convolve = Tn;
exports.contiguous = jn;
exports.concatenate = On;
exports.compress = Sn;
exports.clip = In;
exports.choice = qn;
exports.ceil = kn;
exports.cbrt = Nn;
exports.broadcastable_to = Mn;
exports.broadcastable = An;
exports.broadcast_to = vn;
exports.broadcast_shapes = zn;
exports.broadcast = $n;
exports.bitwise_xor = _n;
exports.bitwise_or = xn;
exports.bitwise_not = wn;
exports.bitwise_and = bn;
exports.bincount = yn;
exports.axisfunc = gn;
exports.average = mn;
exports.atleast_3d = cn;
exports.atleast_2d = pn;
exports.atleast_1d = hn;
exports.ascontiguousarray = fn;
exports.asarray = un;
exports.array_equiv = on;
exports.array_equal = dn;
exports.array = ln;
exports.around = sn;
exports.argwhere = nn;
exports.argsort = rn;
exports.arctanh = an;
exports.arctan2 = tn;
exports.arctan = en;
exports.arcsinh = Zr;
exports.arcsin = Qr;
exports.arccosh = Hr;
exports.arccos = Br;
exports.arange = Ur;
exports.any = Lr;
exports.amin = Cr;
exports.amax = Jr;
exports.all = Xr;
exports.add = Wr;
exports.absolute = Gr;
exports.abs = Yr;
exports._wrap_reduce = Vr;
exports._wrap_map_unary = Er;
exports._wrap_map_binary = Pr;
exports._wrap_map = Kr;
exports.Tester = Dr;
exports.Slice = Rr;
exports.Nditer = Fr;
exports.NINF = Tr;
exports.NDArray = jr;
exports.Generator = Or;
exports.Flatiter = Sr;
exports.Broadcast = Ir;