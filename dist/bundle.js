"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flip = exports.flatnonzero = exports.fix = exports.eye = exports.extract = exports.expm1 = exports.expand_dims = exports.exp2 = exports.exp = exports.even_strides = exports.equal = exports.empty_like = exports.empty = exports.ediff1d = exports.e = exports.dstack = exports.dsplit = exports.dot = exports.divide = exports.diff = exports.diagonal = exports.diag = exports.degrees = exports.deg2rad = exports.cumsum = exports.cumprod = exports.cross = exports.count_nonzero = exports.cosh = exports.cos = exports.copyto = exports.copysign = exports.copy = exports.convolve = exports.contiguous = exports.concatenate = exports.compress = exports.column_stack = exports.clip = exports.choice = exports.ceil = exports.cbrt = exports.broadcastable_to = exports.broadcastable = exports.broadcast_to = exports.broadcast_shapes = exports.broadcast = exports.bitwise_xor = exports.bitwise_or = exports.bitwise_not = exports.bitwise_and = exports.bincount = exports.axisfunc = exports.average = exports.atleast_3d = exports.atleast_2d = exports.atleast_1d = exports.assert = exports.ascontiguousarray = exports.asarray = exports.array_str = exports.array_split = exports.array_repr = exports.array_equiv = exports.array_equal = exports.array2string = exports.array = exports.around = exports.argwhere = exports.argsort = exports.arctanh = exports.arctan2 = exports.arctan = exports.arcsinh = exports.arcsin = exports.arccosh = exports.arccos = exports.arange = exports.any = exports.amin = exports.amax = exports.all = exports.add = exports.absolute = exports.abs = exports._wrap_reduce = exports._wrap_map_unary = exports._wrap_map_binary = exports._wrap_map = exports._wrap_accum_unary = exports._normalize_indices = exports.Tester = exports.Slice = exports.Product = exports.Nditer = exports.NINF = exports.NDArray = exports.Generator = exports.Flatiter = exports.Broadcast = void 0;
exports.signbit = exports.sign = exports.shape = exports.shallow_array_equal = exports.searchsorted = exports.sample = exports.s_ = exports.row_stack = exports.roll = exports.rint = exports.right_shift = exports.resize = exports.reshape = exports.repeat = exports.remainder = exports.reciprocal = exports.ravel = exports.ranf = exports.random_sample = exports.random = exports.rand = exports.radians = exports.rad2deg = exports.put = exports.ptp = exports.prod = exports.power = exports.positive = exports.pick = exports.pi = exports.packbits = exports.ones = exports.ogrid = exports.not_equal = exports.normalize_axis_tuple = exports.normalize_axis_mask = exports.normalize_axis_index = exports.normalize_axis = exports.nonzero = exports.negative = exports.ndoffset = exports.nditer = exports.ndindex = exports.ndim = exports.ndenumerate = exports.nansum = exports.nanprod = exports.nancumsum = exports.nancumprod = exports.nan_to_num = exports.nan = exports.multiply = exports.moveaxis = exports.mod = exports.minimum = exports.mean = exports.maximum = exports.matmul = exports.map = exports.logaddexp2 = exports.logaddexp = exports.log2 = exports.log1p = exports.log10 = exports.log = exports.linspace = exports.less_equal = exports.less = exports.left_shift = exports.ldexp = exports.lcm = exports.ix_ = exports.isscalar = exports.isposinf = exports.isneginf = exports.isna = exports.isinf = exports.isfinite = exports.invert = exports.interp = exports.inf = exports.indices = exports.index_exp = exports.in1d = exports.identity = exports.hypot = exports.hstack = exports.hsplit = exports.greater_equal = exports.greater = exports.gradient = exports.gcd = exports.full = exports.fromiter = exports.fromfunction = exports.fmod = exports.floor_divide = exports.floor = exports.flipud = exports.fliplr = void 0;
exports.zeros = exports.where = exports.vstack = exports.vsplit = exports.variance = exports.use_advanced_indexing = exports.unwrap = exports.unpackbits = exports.tupleType = exports.trunc = exports.true_divide = exports.trapz = exports.transpose = exports.timeit2 = exports.timeit = exports.tile = exports.tester = exports.tanh = exports.tan = exports.take = exports.swapaxes = exports.sum = exports.subtract = exports.std = exports.stack = exports.squeeze = exports.square = exports.sqrt = exports.split = exports.sort = exports.slice = exports.sinh = exports.sin = void 0;
var e = {
    460: () => {}
  },
  t = {};
function r(a) {
  var n = t[a];
  if (void 0 !== n) return n.exports;
  var l = t[a] = {
    exports: {}
  };
  return e[a](l, l.exports, r), l.exports;
}
r.d = (e, t) => {
  for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, {
    enumerable: !0,
    get: t[a]
  });
}, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
var n = {};
(() => {
  function e(t, a) {
    if (t == a) return !0;
    if (Array.isArray(t) && Array.isArray(a)) {
      if (t.length != a.length) return !1;
      for (let r = 0; r < t.length; r++) if (!e(t[r], a[r])) return !1;
      return !0;
    }
    if ("boolean" == typeof t && "boolean" == typeof a) return t == a;
    if (Number.isNaN(t) && Number.isNaN(a)) return !0;
    if ("number" == typeof t && "number" == typeof a) return t == a;
    if ("string" == typeof t && "string" == typeof a) return t == a;
    if (null != t?.toarray) return e(t.toarray(), a);
    if (null != a?.toarray) return e(t, a.toarray());
    if (t?.constructor != a?.constructor) return !1;
    let r = Object.getOwnPropertyNames(t),
      n = Object.getOwnPropertyNames(a);
    if (r.length != n.length) return !1;
    for (let l = 0; l < r.length; l++) if (!e(t[r[l]], a[n[l]])) return !1;
    return !0;
  }
  function t(e) {
    return e instanceof z && (e = `NDArray(${JSON.stringify(e.toarray())})`), Array.isArray(e) ? JSON.stringify(e) : e;
  }
  r.d(n, {
    zvA: () => ae,
    iIB: () => P,
    RO$: () => _r,
    zhN: () => z,
    _bh: () => $t,
    OVY: () => ue,
    xsH: () => fn,
    p2w: () => o,
    SRu: () => l,
    A67: () => ln,
    E4R: () => tt,
    tw1: () => Qe,
    Yur: () => et,
    RPv: () => Ze,
    JWo: () => rt,
    WnP: () => Oa,
    AGi: () => Ea,
    IHx: () => nt,
    $6P: () => pt,
    Lb7: () => ka,
    t5D: () => Ia,
    YjB: () => ct,
    eTT: () => Y,
    FKo: () => It,
    Hn6: () => Vt,
    PD: () => kt,
    oSO: () => Gt,
    Xsc: () => qt,
    gJP: () => jt,
    $jo: () => Yt,
    s6s: () => tr,
    S1h: () => we,
    Q8B: () => Jt,
    IXX: () => $,
    FJh: () => qn,
    YSU: () => Ne,
    Vjr: () => ke,
    xok: () => jn,
    oix: () => Yr,
    Yqf: () => Sn,
    k2d: () => O,
    FAR: () => C,
    hu8: () => gn,
    V2R: () => Z,
    dcL: () => ee,
    ujY: () => te,
    Y8W: () => Mr,
    pHG: () => ve,
    yE8: () => qr,
    W4K: () => Pa,
    GBu: () => Ra,
    eYE: () => Ka,
    qgf: () => Ga,
    fMc: () => re,
    xAU: () => V,
    M2z: () => k,
    Qo: () => G,
    Lo$: () => N,
    eKn: () => Sa,
    mDi: () => Ut,
    q$q: () => cr,
    oqW: () => er,
    T8D: () => Gr,
    nNb: () => be,
    mVq: () => Ie,
    y39: () => U,
    RrX: () => Za,
    JGK: () => pe,
    JGz: () => ya,
    zOr: () => I,
    mCk: () => Mt,
    f9Y: () => Pt,
    zNN: () => $e,
    kCc: () => Ba,
    $Gn: () => ta,
    zbp: () => aa,
    VlM: () => Tt,
    RWx: () => Ot,
    Ka3: () => Br,
    on5: () => Cr,
    Hgg: () => la,
    csF: () => it,
    AKD: () => yn,
    wIX: () => Jr,
    N5d: () => Kr,
    e: () => xt,
    D5q: () => sa,
    cSb: () => E,
    sKD: () => D,
    DgJ: () => Xa,
    pnR: () => F,
    Qqt: () => ia,
    uuq: () => oa,
    aD1: () => ie,
    t$B: () => da,
    KlT: () => _e,
    iyy: () => ne,
    zG0: () => Ht,
    KTV: () => ze,
    RRI: () => Qr,
    HC4: () => Zr,
    Ah7: () => en,
    GWj: () => Lt,
    Sc8: () => ot,
    Ek0: () => Aa,
    v_D: () => ce,
    KSO: () => me,
    rpZ: () => K,
    thl: () => va,
    FLS: () => Ca,
    pjt: () => Ua,
    zGm: () => La,
    Hsf: () => Wr,
    DIH: () => Pr,
    _mT: () => St,
    yRu: () => le,
    HqJ: () => Or,
    S8h: () => rn,
    CGm: () => Sr,
    gY6: () => vt,
    Zw8: () => rr,
    U_R: () => Ta,
    f0i: () => mt,
    fXA: () => gt,
    I7t: () => yt,
    igg: () => wt,
    ftH: () => bt,
    KvH: () => h,
    IW_: () => jr,
    uqG: () => za,
    vy: () => wa,
    Ai1: () => Va,
    d9m: () => Ha,
    bzW: () => Wa,
    SX3: () => X,
    cM7: () => ua,
    mvw: () => ha,
    Krr: () => pa,
    k3Q: () => fa,
    YKj: () => ca,
    buk: () => ma,
    UID: () => cn,
    Jxs: () => mn,
    gWQ: () => Ma,
    J69: () => Nr,
    LTh: () => Na,
    wQq: () => ut,
    U8E: () => qe,
    JpY: () => st,
    qnd: () => _t,
    dQs: () => Fa,
    $7d: () => ra,
    RCU: () => na,
    MIL: () => Zt,
    obs: () => ea,
    $V5: () => ye,
    p3s: () => se,
    x2A: () => q,
    fyW: () => he,
    MHD: () => j,
    pdy: () => xa,
    MaX: () => ge,
    S4p: () => de,
    INJ: () => Oe,
    lf5: () => De,
    ffp: () => oe,
    AqN: () => Ja,
    qDh: () => $r,
    iUs: () => H,
    NCv: () => Er,
    pi: () => zt,
    eiS: () => pr,
    i1C: () => ba,
    qux: () => ft,
    WVs: () => Bt,
    OZM: () => Ar,
    gzd: () => sn,
    BVy: () => Ft,
    uRy: () => Et,
    TN_: () => wr,
    MXc: () => zr,
    di9: () => mr,
    n3V: () => gr,
    nTq: () => xe,
    M25: () => $a,
    spK: () => ht,
    rx1: () => Lr,
    XLQ: () => T,
    SIr: () => dn,
    wyi: () => Ya,
    XC3: () => Wt,
    SlP: () => pn,
    aSG: () => Vr,
    s_: () => nn,
    UPJ: () => yr,
    FvN: () => hn,
    flC: () => Ae,
    mCt: () => M,
    Xxe: () => Da,
    UBE: () => ga,
    O$l: () => At,
    R_K: () => Rt,
    tPi: () => u,
    DYV: () => ar,
    Vl2: () => Xr,
    _b3: () => qa,
    h62: () => ja,
    L9e: () => fe,
    knu: () => Tr,
    qoR: () => Ir,
    $XF: () => lt,
    Smz: () => Qt,
    ZU4: () => B,
    qnb: () => W,
    ORZ: () => Nt,
    AEp: () => Kt,
    K1B: () => s,
    Gg6: () => Ur,
    uAr: () => d,
    BpP: () => i,
    p4s: () => Q,
    ebm: () => Qa,
    $I7: () => dt,
    RFc: () => Ct,
    DDI: () => an,
    bLT: () => Fr,
    Wg4: () => Dt,
    G6Z: () => x,
    CAK: () => kr,
    nFP: () => Hr,
    Ud9: () => Rr,
    arb: () => vr,
    lls: () => L
  });
  class l {
    compare = e;
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
      let a = this.tasks[e];
      if (null == a) throw "no such name";
      let r = 1,
        n = 0,
        l = [];
      for (let e of a) {
        let a,
          s,
          {
            test: i,
            expected: d,
            compare: o
          } = e,
          u = !1,
          h = !1;
        try {
          a = i();
        } catch (e) {
          a = `[Error]: ${e}`, console.log(e), h = !0;
        }
        try {
          s = d();
        } catch (e) {
          s = `[Error]: ${e}`, console.log(e), h = !0;
        }
        h || (u = o(a, s)), u && n++;
        let f = (u ? "[32m" : "[31m") + "%s[0m";
        l.push([f, `#${r}: ${u ? "passed" : "fail"}`, "\n\tTest=\n", t(a), "\n\tExpected=\n", t(s)]), r++;
      }
      let s = (n == a.length ? "[32m" : "[31m") + "%s[0m";
      if (console.log(s, `Testing ${e}: ${n} / ${a.length} cases passed`), n != a.length) for (let e of l) console.log(...e);
      return n == a.length;
    }
  }
  let s = new l();
  function i(e, t = 1e3) {
    let a,
      r = performance.now(),
      n = 0;
    for (; e(), n++, a = performance.now(), !(a - r >= t););
    let l = n / ((a - r) / t);
    console.log(`ops: ${l} per sec`, e);
  }
  function d(e, {
    name: t = "test",
    setup: a = null,
    duration: r = 1e3,
    warmup: n = 100,
    cycle: l = "auto",
    cycle_duration: s = 100,
    repeat: i = "auto",
    verbose: d = !1
  } = {}) {
    let o = a?.();
    if (s > r && (s = r), "auto" == i && (i = r / s | 0), "auto" == l) {
      let t,
        a = 1;
      for (;;) {
        let r = Date.now();
        for (let t = 0; t < a; t++) e(o);
        if (t = Date.now() - r, t > s) break;
        a *= 2;
      }
      l = Math.max(a / t * (r / i) | 0, 1);
    }
    let u = [];
    for (let t = 0; t < n; t++) e(o);
    for (let t = 0; t < i; t++) {
      let t = Date.now();
      for (let t = 0; t < l; t++) e(o);
      let a = l / ((Date.now() - t) / 1e3);
      u.push(a);
    }
    let h = u.length,
      f = u.reduce((e, t) => e + t) / h;
    if (d) {
      let e = Math.max(...u),
        a = Math.min(...u),
        r = Math.max(e - f, f - a);
      console.log(`#${t} ${0 | f} ± ${(r / f * 100).toFixed(2)}% ops/sec (${i} runs)`);
    }
    return f;
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
          if (!Number.isInteger(+e)) throw new Error(`${e} cannot be cast to integer`);
          e = +e;
        }
        return new o(e);
      }
      if (2 == t.length) {
        let [e, a] = t;
        if (0 == e.length) e = null;else {
          if (!Number.isInteger(+e)) throw new Error(`${e} cannot be cast to integer`);
          e = +e;
        }
        if (0 == a.length) a = null;else {
          if (!Number.isInteger(+a)) throw new Error(`${a} cannot be cast to integer`);
          a = +a;
        }
        return new o(e, a);
      }
      if (3 == t.length) {
        let [e, a, r] = t;
        if (0 == e.length) e = null;else {
          if (!Number.isInteger(+e)) throw new Error(`${e} cannot be cast to integer`);
          e = +e;
        }
        if (0 == a.length) a = null;else {
          if (!Number.isInteger(+a)) throw new Error(`${a} cannot be cast to integer`);
          a = +a;
        }
        if (0 == r.length) r = null;else {
          if (!Number.isInteger(+r)) throw new Error(`${r} cannot be cast to integer`);
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
  function h(e) {
    switch (typeof e) {
      case "boolean":
      case "function":
      case "number":
      case "string":
        return !0;
    }
    return !1;
  }
  Object.assign(u, {
    colon: o.colon
  }, o), u.colon = o.colon, u.is = function (e) {
    return e instanceof o;
  }, s.add("isscalar", () => h(3.1), () => !0).add("isscalar", () => h($(3.1)), () => !1).add("isscalar", () => h([3.1]), () => !1).add("isscalar", () => h(!1), () => !0).add("isscalar", () => h("numpy"), () => !0).add("isscalar", () => h(Number()), () => !0);
  var f = r(460);
  function p(e, t) {
    let a = [];
    if (e.length > 0) {
      a[e.length - 1] = t;
      for (let t = e.length - 2; t >= 0; t--) a[t] = a[t + 1] * e[t + 1];
    }
    return a;
  }
  function c(e) {
    let t = 1;
    for (let a of e) t *= a;
    return t;
  }
  function m(e, t) {
    if (a = t, Number.isInteger(a)) {
      let {
        ndim: a,
        shape: r,
        size: n
      } = e;
      if (t < 0 && (t += n), t >= n) throw `index ${t} out of bound for size ${n}`;
      let l = [...r];
      for (let e = l.length - 2; e >= 1; e--) l[e] *= l[e + 1];
      let s = Array(a).fill(0);
      for (let e = 0; e < s.length - 1; e++) {
        let a = l[e + 1];
        t >= a && (s[e] = t / a | 0, t %= a);
      }
      s[s.length - 1] = t, t = s;
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
  function g(e, t, a) {
    let r = 0;
    for (let n = 0; n < e.length; n++) r += (e[n] < 0 ? e[n] + a[n] : e[n]) * t[n];
    return r;
  }
  function y() {
    return this.item();
  }
  function w(e) {
    return "string" == e ? Sn(this) : "default" == e ? jn(this) : void 0;
  }
  function b(e, t) {
    let {
      shape: a,
      strides: r,
      offset: n
    } = e;
    t = t.map(e => "string" == typeof e ? u(e) : e), a = a.slice(), r = r.slice();
    let l = 0,
      s = t.filter(e => null == e).length,
      i = t.filter(e => e == u("..."));
    if (i.length > 1) throw "an index can only have a single ellipsis ('...')";
    if (1 == i.length) {
      t = t.slice();
      let e = Array(a.length + s - t.length + 1).fill(u(":"));
      t.splice(t.indexOf(u("...")), 1, ...e);
    }
    if (t.length - s > a.length) throw "too many indices for array";
    for (let e of t) if (null == e) a.splice(l, 0, 1), r.splice(l, 0, 0), l++;else {
      if (0 == a.length) throw "invalid index to scalar variable";
      if (e == u[":"]) l++;else if (u.is(e)) {
        let {
          start: t,
          step: s,
          slicelength: i
        } = e.get(a[l]);
        n += r[l] * t, a.splice(l, 1, i), r.splice(l, 1, r[l] * s), l++;
      } else e < 0 && (e += a[l]), n += r[l] * e, a.splice(l, 1), r.splice(l, 1);
    }
    return {
      strides: r,
      shape: a,
      offset: n,
      immutable: 0 == a.length && 0 == i.length
    };
  }
  function x(e) {
    for (let t of e) if ("object" == typeof t && (Array.isArray(t) || t instanceof z)) return !0;
    return !1;
  }
  function _(e) {
    let t,
      a,
      r,
      n = !0,
      l = 0,
      s = e.length - 1,
      i = e.map(e => e instanceof o);
    for (; l < s && i[l]; l++);
    for (; s > l && i[s]; s--);
    for (let e = l + 1; e < s; e++) if (i[e]) {
      n = !1;
      break;
    }
    let d = this.shape.map((t, a) => i[a] ? e[a].get(t).slicelength : e[a]);
    if (n) t = d.slice(0, l), a = d.slice(s + 1), r = e.slice(l, s + 1);else {
      t = [], a = d.filter((e, t) => i[t]), r = [];
      for (let t = l; t <= s; t++) i[t] || r.push(e[t]);
    }
    let u = re(...r),
      h = [...t, ...u.shape, ...a];
    e = e.slice();
    let f = [];
    for (let t of u) {
      for (let a = 0, r = 0; a < e.length; a++) i[a] || (e[a] = t[r++]);
      f.push(this.get(...e, null));
    }
    return new z(h, Ie(f, t.length).data);
  }
  class z {
    constructor(e, t = null, a = null, r = null, n = 0, l = 1) {
      this.ndim = e.length, this.size = c(e), this.shape = e, this.data = t ?? Array(this.size), this.itemsize = l, this.strides = r ?? p(e, l), this.offset = n, this.base = a?.base ?? a, this.ndim > 0 ? (this.length = this.shape[0], this[Symbol.toPrimitive] = w) : this[Symbol.toPrimitive] = y;
    }
    valueOf() {
      return 0 == this.ndim ? this.item() : jn(this);
    }
    *[Symbol.iterator]() {
      for (let e = 0; e < this.shape[0]; e++) yield this.get(e);
    }
    _getview(e) {
      let {
          strides: t,
          shape: a,
          offset: r
        } = b(this, e),
        {
          data: n,
          itemsize: l,
          base: s
        } = this;
      return new z(a, n, s ?? this, t, r, l);
    }
    get(...e) {
      if (1 == e.length && e[0]?.[an] && (e = e[0]), x(e)) return _.call(this, e);
      let {
          strides: t,
          shape: a,
          offset: r,
          immutable: n
        } = b(this, e),
        {
          data: l,
          itemsize: s,
          base: i
        } = this;
      return n ? new z(a, [l[r]], null, t, 0, s) : new z(a, l, i ?? this, t, r, s);
    }
    set(e, t = null) {
      if (null == t) return I(this, t = e), this;
      if (x(e)) throw "cannot use advanced indexing in .set()";
      let {
          strides: a,
          shape: r,
          offset: n
        } = b(this, e),
        {
          data: l,
          itemsize: s,
          base: i
        } = this;
      return new z(r, l, i ?? this, a, n, s).set(t), this;
    }
    item(e) {
      if (0 == e) return this.data[this.offset];
      let {
        data: t,
        strides: a,
        shape: r,
        offset: n,
        ndim: l,
        size: s
      } = this;
      if (null == e) {
        if (1 != s) throw "index cannot be empty if size != 1";
        return t[n];
      }
      if (0 == l) {
        if (null != e.length) if (0 == e.length) e = 0;else {
          if (1 != e.length) throw "incorrect number of indices for array";
          e = e[0];
        }
        if (0 != e && -1 != e) throw `index ${e} out of bound for size ${s}`;
        return t[n];
      }
      if (1 == l) {
        if (null != e.length) {
          if (1 != e.length) throw "incorrect number of indices for array";
          e = e[0];
        }
        if (e < -s || s <= e) throw `index ${e} out of bound for size ${s}`;
        return e < 0 && (e += s), t[n + e * a[0]];
      }
      return 1 == e.length && (e = e[0]), t[n + g(e = m(this, e), a, r)];
    }
    itemset(e, t) {
      let {
        ndim: a,
        size: r,
        offset: n,
        data: l,
        shape: s,
        strides: i
      } = this;
      if (null == t && 1 == r) return l[n] = e, this;
      if (null == e) {
        if (1 != r) throw "index cannot be empty if size != 1";
        return l[n] = t, this;
      }
      if (0 == a) {
        if (null != e.length) if (0 == e.length) e = 0;else {
          if (1 != e.length) throw "incorrect number of indices for array";
          e = e[0];
        }
        if (0 != e && -1 != e) throw `index ${e} out of bound for size ${r}`;
        return l[n] = t, this;
      }
      if (1 == a) {
        if (null != e.length) {
          if (1 != e.length) throw "incorrect number of indices for array";
          e = e[0];
        }
        if (e < -r || r <= e) throw `index ${e} out of bound for size ${r}`;
        return e < 0 && (e += r), l[n + e * i[0]] = t, this;
      }
      return 1 == e.length && (e = e[0]), l[n + g(e = m(this, e), i, s)] = t, this;
    }
    toarray() {
      let {
        ndim: e,
        strides: t,
        itemsize: a,
        offset: r,
        data: n,
        shape: l
      } = this;
      if (0 == e) return n[r];
      let s = l[0];
      if (1 == e && t[0] == a) return n.slice(r, r + s);
      let i = [];
      for (let e = 0; e < s; e++) i.push(this.get(e).toarray());
      return i;
    }
    tolist() {
      return this.toarray();
    }
    get flat() {
      return new P(this);
    }
    set flat(e) {
      this.flat.set([...Array(this.size).keys()], e);
    }
    get T() {
      return Q(this);
    }
    set T(e) {
      this.T.set(e);
    }
    reshape(...e) {
      return 1 == e.length && "number" != typeof e[0] && (e = e[0]), T(this, e);
    }
    all(e = null, t = null, a = !1) {
      return pt(this, e, t, a);
    }
    any(e = null, t = null, a = !1) {
      return any(this, e, t, a);
    }
    argmax(e = null, t = null, a = !1) {
      throw "not implemented";
    }
    argmin(e = null, t = null, a = !1) {
      throw "not implemented";
    }
    argpartition(e, t = -1, a = "introselect", r = null) {
      throw "not implemented";
    }
    argsort(e = -1, t = null) {
      return tr(this, e, t);
    }
    astype() {
      throw "not implemented";
    }
    byteswap() {
      throw "not implemented";
    }
    choose(e, t = null, a = "raise") {
      throw "not implemented";
    }
    clip(e, t, a = null) {
      return er(this, e, t, a);
    }
    compress(e, t = null, a = null) {
      return be(e, this, t, a);
    }
    conj() {
      throw "not implemented";
    }
    conjugate() {
      throw "not implemented";
    }
    copy() {
      return $(this);
    }
    cumprod(e = null, t = null) {
      return ta(this, e, t);
    }
    cumsum(e = null, t = null) {
      return aa(this, e, t);
    }
    diagonal(e = 0, t = 0, a = 1) {
      return Cr(this, e, t, a);
    }
    dump() {
      throw "not implemented";
    }
    dumps() {
      throw "not implemented";
    }
    fill(e) {
      return this.flat = e, this;
    }
    flatten() {
      return new z([this.size], [...this.flat]);
    }
    getfield() {
      throw "not implemented";
    }
    max(e = null, t = null, a = !1, r = null, n = !0) {
      return ka(this, e, t, a, r, n);
    }
    mean(e = null, t = null, a = !1) {
      return Nr(this, e, t, a);
    }
    min(e = null, t = null, a = !1, r = null, n = !0) {
      return Ia(this, e, t, a, r, n);
    }
    newbyteorder() {
      throw "not implemented";
    }
    nonzero() {
      return ge(this);
    }
    partition(e, t = -1, a = "introselect", r = null) {
      throw "not implemented";
    }
    prod(e = null, t = null, a = !1, r = 0, n = !0) {
      return Bt(this, e, t, a, r, n);
    }
    ptp(e = null, t = null, a = !1) {
      return Ar(this, e, t, a);
    }
    put(e, t, a = "raise") {
      return sn(this, e, t, a), this;
    }
    ravel() {
      return xe(this);
    }
    repeat(e, t = null) {
      return Lr(this, e, t);
    }
    resize(e) {
      if (null != this.base) throw "cannot resize this array: it does not own its data";
      if (!U(this)) throw "resize only works on single-segment arrays";
      let t = c(e);
      t <= this.size ? this.data = [...this.data.slice(this.offset, t)] : this.data = [...this.data.slice(this.offset, t), ...Array(t - this.size).fill(0)], this.shape = e, this.ndim = e.length, this.strides = p(e, this.itemsize), this.offset = 0;
    }
    round(e = 0, t = null) {
      return Jt(this, e, t);
    }
    searchsorted(e, t = "left") {
      return hn(this, e, t);
    }
    setfield() {
      throw "not implemented";
    }
    setflags() {
      throw "not implemented";
    }
    sort(e = -1, t = null) {
      this.set(ar(this, e, t));
    }
    squeeze(e = null) {
      return fe(this, e);
    }
    std(e = null, t = null, a = 0, r = !1) {
      return Ir(this, e, t, a, r);
    }
    sum(e = null, t = null, a = !1, r = 0, n = !0) {
      return Qt(this, e, t, a, r, n);
    }
    swapaxes(e, t) {
      return B(this, e, t);
    }
    take(e, t = null, a = null, r = "raise") {
      return W(this, e, t, a, r);
    }
    tobytes() {
      throw "not implemented";
    }
    tofile() {
      throw "not implemented";
    }
    trace() {
      throw "not implemented";
    }
    transpose(e = null) {
      return Q(this, e);
    }
    variance(e = null, t = null, a = 0, r = !1) {
      return kr(this, e, t, a, r);
    }
  }
  function v(e, t, a, r = 0) {
    if (r != a.length) for (let n = 0; n < a[r]; n++) v(e, t instanceof z ? t.get(n) : t[n], a, r + 1);else e.push(t instanceof z ? t.item() : t);
  }
  function $(e, t = !0, a = 0) {
    let r, n;
    if (e instanceof z) {
      if (!t) {
        n = e.shape, n.length < a && (n = [...Array(a - n.length).fill(1), ...n]);
        let {
          data: t,
          base: r,
          strides: l,
          offset: s,
          itemsize: i
        } = e;
        return new z(n, t, r, l, s, i);
      }
      if (null == e.base) r = e.data.slice();else {
        r = [];
        for (let t of j(e.shape, e.strides)) r.push(e.data[e.offset + t]);
      }
      n = e.shape;
    } else r = [], n = M(e), v(r, e, n);
    return n.length < a && (n = [...Array(a - n.length).fill(1), ...n]), new z(n, r);
  }
  function A(e, t, a) {
    for (let r = 0; r < e.length; r++) {
      let n = e[r];
      if (n instanceof z) {
        for (let e = a, r = 0; e < t.length; e++) if (t[e] != n.shape[r++]) return t.length = e, !1;
        return !0;
      }
      if (n?.length != t[a]) return t.length = a, !1;
      if (null != n?.length && t.length > a + 1 && !A(n, t, a + 1)) return !1;
    }
    return !0;
  }
  function M(e) {
    if (null != e.shape) return e.shape;
    let t = [],
      a = e;
    for (;;) {
      if (a instanceof z) {
        t.push(...a.shape);
        break;
      }
      if (null == a?.length) break;
      t.push(a.length), a = a[0];
    }
    return null != e.length && t.length > 1 && A(e, t, 1), t;
  }
  function N(e, t) {
    if (e.length > t.length) return !1;
    for (let a = t.length - 1, r = e.length - 1; r >= 0; a--, r--) if (1 != e[r] && e[r] != t[a]) return !1;
    return !0;
  }
  function k(e, t) {
    if ((e = O(e)).shape.length > t.length) throw "broadcast shape has less dimensions than input array";
    let {
        data: a,
        strides: r,
        offset: n,
        itemsize: l
      } = e,
      s = [];
    for (let a = t.length - 1, n = e.shape.length - 1; a >= 0; a--, n--) {
      if (n >= 0 && 1 != e.shape[n] && e.shape[n] != t[a]) throw "operands could not be broadcast together";
      s[a] = n < 0 || 1 == e.shape[n] ? 0 : r[n];
    }
    return new z(t, a, null, s, n, l);
  }
  function I(e, t, a = !0) {
    if (1 != a) throw "haven't implement";
    if (t instanceof z || Array.isArray(t)) {
      let a = j((t = k(O(t), e.shape)).shape, t.strides);
      for (let r of j(e.shape, e.strides)) e.data[e.offset + r] = t.data[t.offset + a.next().value];
    } else for (let a of j(e.shape, e.strides)) e.data[e.offset + a] = t;
  }
  function* q(e, t = !0) {
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
  z.prototype[f?.inspect?.custom] = function () {
    return 0 == this.ndim ? this.item() : jn(this);
  }, s.onload(() => {
    console.log($([10.22, 12.9, 66.3])), console.log($(99));
  }), s.add("ndarray.get", () => Y(120).reshape(4, 6, 5, 1).get($([0, 2, 1]), u(), [0, 2, 4], u()), () => $([[[0], [5], [10], [15], [20], [25]], [[62], [67], [72], [77], [82], [87]], [[34], [39], [44], [49], [54], [59]]])).add("ndarray.get", () => Y(120).reshape(4, 6, 5, 1).get($([0, 2, 1]), $([0, 2, 1]), u(), u()), () => $([[[0], [1], [2], [3], [4]], [[70], [71], [72], [73], [74]], [[35], [36], [37], [38], [39]]])).add("ndarray.get", () => Y(120).reshape(4, 6, 5, 1).get(u(), $([0, 2, 1]), $([0, 2, 4]), u()), () => $([[[0], [12], [9]], [[30], [42], [39]], [[60], [72], [69]], [[90], [102], [99]]])).add("ndarray.get", () => Y(120).reshape(4, 6, 5, 1).get(u(), $([0, 2, 1]), u(), [0, 0, 0]), () => $([[[0, 1, 2, 3, 4], [30, 31, 32, 33, 34], [60, 61, 62, 63, 64], [90, 91, 92, 93, 94]], [[10, 11, 12, 13, 14], [40, 41, 42, 43, 44], [70, 71, 72, 73, 74], [100, 101, 102, 103, 104]], [[5, 6, 7, 8, 9], [35, 36, 37, 38, 39], [65, 66, 67, 68, 69], [95, 96, 97, 98, 99]]])).add("ndarray.get", () => Y(120).reshape(4, 6, 5, 1).get(u(), u(), $([0, 2, 1]), $([0, 0, 0])), () => $([[[0, 2, 1], [5, 7, 6], [10, 12, 11], [15, 17, 16], [20, 22, 21], [25, 27, 26]], [[30, 32, 31], [35, 37, 36], [40, 42, 41], [45, 47, 46], [50, 52, 51], [55, 57, 56]], [[60, 62, 61], [65, 67, 66], [70, 72, 71], [75, 77, 76], [80, 82, 81], [85, 87, 86]], [[90, 92, 91], [95, 97, 96], [100, 102, 101], [105, 107, 106], [110, 112, 111], [115, 117, 116]]])).add("ndarray.get", () => Y(120).reshape(4, 6, 5, 1).get($([0, 2, 1]), u(), u(), $([0, 0, 0])), () => $([[[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [25, 26, 27, 28, 29]], [[60, 61, 62, 63, 64], [65, 66, 67, 68, 69], [70, 71, 72, 73, 74], [75, 76, 77, 78, 79], [80, 81, 82, 83, 84], [85, 86, 87, 88, 89]], [[30, 31, 32, 33, 34], [35, 36, 37, 38, 39], [40, 41, 42, 43, 44], [45, 46, 47, 48, 49], [50, 51, 52, 53, 54], [55, 56, 57, 58, 59]]])).add("ndarray.get", () => Y(120).reshape(4, 6, 5, 1).get($([0, 2, 1]), $([0, 2, 1]), u(), 0), () => $([[0, 1, 2, 3, 4], [70, 71, 72, 73, 74], [35, 36, 37, 38, 39]])).add("ndarray.get", () => Y(120).reshape(4, 6, 5, 1).get($([0, 2, 1]), u(), u(), 0), () => $([[[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [25, 26, 27, 28, 29]], [[60, 61, 62, 63, 64], [65, 66, 67, 68, 69], [70, 71, 72, 73, 74], [75, 76, 77, 78, 79], [80, 81, 82, 83, 84], [85, 86, 87, 88, 89]], [[30, 31, 32, 33, 34], [35, 36, 37, 38, 39], [40, 41, 42, 43, 44], [45, 46, 47, 48, 49], [50, 51, 52, 53, 54], [55, 56, 57, 58, 59]]])).add("ndarray.get", () => new z([2, 5], [...Array(10).keys()]).get(u(), u([,, -1])), () => [[4, 3, 2, 1, 0], [9, 8, 7, 6, 5]]).add("ndarray.get", () => new z([2, 5], [...Array(10).keys()]).get(u(-1), 3), () => [8]).add("ndarray.get", () => new z([2, 5], [...Array(10).keys()]).get(u([,, -1]), u([,, -1])), () => [[9, 8, 7, 6, 5], [4, 3, 2, 1, 0]]).add("ndarray.get", () => {
    let e;
    return e = $([[3, 0, 0], [0, 4, 0], [5, 6, 0]]).get(u(), u(), null), e;
  }, () => $([[[3], [0], [0]], [[0], [4], [0]], [[5], [6], [0]]])).add("ndarray.get", () => {
    let e;
    return e = $([[3, 0, 0], [0, 4, 0], [5, 6, 0]]).get(u("..."), null), e;
  }, () => $([[[3], [0], [0]], [[0], [4], [0]], [[5], [6], [0]]])), s.add("ndarray.item", () => new z([2, 5], [...Array(10).keys()]).get(u([,, -1]), u([,, -1])).item(5), () => 4), s.add("ndarray.itemset", () => {
    let e = new z([3, 3], [[2, 2, 6], [1, 3, 6], [1, 0, 1]].flat());
    return e.itemset(4, 0), e.itemset([2, 2], 9), e;
  }, () => [[2, 2, 6], [1, 0, 6], [1, 0, 9]]), s.add("ndarray.set", () => {
    let e = new z([2, 5], [...Array(10).keys()]);
    return e.get(u(), u(1, -1)).set(10), e;
  }, () => [[0, 10, 10, 10, 4], [5, 10, 10, 10, 9]]), s.add("ndarray.flatten", () => $([[1, 2], [3, 4]]).flatten(), () => $([1, 2, 3, 4])), s.add("ndarray.flat.set", () => {
    let e = $([[1, 2, 3], [4, 5, 6]]);
    return e.flat = 3, e;
  }, () => $([[3, 3, 3], [3, 3, 3]])).add("ndarray.flat.set", () => {
    let e = $([[1, 2, 3], [4, 5, 6]]);
    return e.flat = [7, 8, 9, 10], e;
  }, () => $([[7, 8, 9], [10, 7, 8]])), s.add("ndarray.copy", () => {
    let e = $([[1, 2, 3]]);
    return e.copy() == e;
  }, () => !1).add("ndarray.copy", () => {
    let e = $([[1, 2, 3]]),
      t = e.copy();
    return t.itemset(0, -1), [e, t];
  }, () => [$([[1, 2, 3]]), $([[-1, 2, 3]])]), s.add("ndarray.resize", () => {
    let e = $([[0, 1], [2, 3]]);
    return e.resize([2, 1]), e;
  }, () => $([[0], [1]])).add("ndarray.resize", () => {
    let e = $([[0, 1], [2, 3]]);
    return e.resize([2, 3]), e;
  }, () => $([[0, 1, 2], [3, 0, 0]])).add("ndarray.resize", () => {
    let e = $([[0, 1], [2, 3]]),
      t = e;
    return e.resize([1, 1]), [e, t];
  }, () => [$([[0]]), $([[0]])]), s.add("array", () => $([3.1, 9]), () => [3.1, 9]).add("array", () => $([[9, 6], 3.1, 9]).shape, () => [3]).add("array", () => $(5), () => 5), s.add("shape", () => M([[[3, 9]], [[3, 9, 3]], [[3, 9]]]), () => [3, 1]).add("shape", () => M([1, 2, 3, [1, 3]]), () => [4]).add("shape", () => M([0]), () => [1]).add("shape", () => M(0), () => []), s.add("broadcast_to", () => k(new z([3], [1, 2, 3]), [3, 3]).toarray(), () => [[1, 2, 3], [1, 2, 3], [1, 2, 3]]), s.add("broadcast_to", () => k(new z([1, 3, 1], [1, 2, 3]), [2, 3, 4]).toarray(), () => [[[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]]]), s.add("copyto", () => {
    let e = O([4, 5, 6]);
    return I(e, [1, 2, 3]), e;
  }, () => [1, 2, 3]).add("copyto", () => {
    let e = O([[1, 2, 3], [4, 5, 6]]);
    return I(e, [[4, 5, 6], [7, 8, 9]]), e;
  }, () => [[4, 5, 6], [7, 8, 9]]).add("copyto", () => {
    let e = O([[0, 1, 2], [3, 4, 5]]);
    return I(e.get(u(), 1), [-1, -2]), e;
  }, () => [[0, -1, 2], [3, -2, 5]]);
  class S {
    constructor(e, t, a) {
      let r = e.length;
      this.ndim = r, this.shape = e, this.strides = t;
      let n = Array(r);
      for (let a = 0; a < r; a++) n[a] = e[a] * t[a];
      this.dim_strides = n, this.initial = a;
      let l = 1;
      for (let t of e) l *= t;
      this.size = l, this.coords = Array(r), this.reset();
    }
    [Symbol.iterator]() {
      return this.reset(), this;
    }
    reset() {
      this.coords.fill(0), this.index = 0, this.offset = this.initial, this.done = 0 == this.size;
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
          ndim: n,
          dim_strides: l
        } = this,
        s = e,
        i = n - 1,
        d = !0;
      for (; i >= 0;) {
        let n = a[i];
        if (1 == n) i--;else if (n == t[i]) e -= l[i], t[i--] = 0, d = !0;else {
          if (!d) break;
          e += r[i], t[i] += 1, d = !1;
        }
      }
      return this.offset = e, this.done = ++this.index >= this.size, {
        value: s,
        done: !1
      };
    }
  }
  function j(e, t, a = 0) {
    return new S(e, t, a);
  }
  function O(e) {
    return e instanceof z ? e : $(e);
  }
  function E(e) {
    var t;
    return t = e, Number.isInteger(t) && (e = [e]), new z(e, Array(function (e) {
      let t = 1;
      for (let a of e) t *= a;
      return t;
    }(e)));
  }
  function D(e) {
    return E(M(e));
  }
  function F(e, t, a = e.length) {
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
  function T(e, t) {
    e = O(e), "number" == typeof t && (t = [t]);
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
    if (null == e.base) return new z(t, e.data, e);
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
        return new z(t, e.data, e, a, e.offset, e.itemsize);
      }
    }
    let n = null;
    return 1 == t.length && F(e.strides, e.shape, e.ndim) ? n = [e.strides[0]] : 0 != t.length && (e = $(e)), new z(t, e.data, e, n, e.offset, e.itemsize);
  }
  function R(e) {
    return null != e?.length;
  }
  s.add(j, () => {
    let e = Y(100);
    e = e.get(u(20, -20)).reshape([2, 1, -1, 2]).get(u("..."), u("::-1"));
    let t = [];
    for (let a of j(e.shape, e.strides)) t.push(e.data[e.offset + a]);
    return t;
  }, () => [21, 20, 23, 22, 25, 24, 27, 26, 29, 28, 31, 30, 33, 32, 35, 34, 37, 36, 39, 38, 41, 40, 43, 42, 45, 44, 47, 46, 49, 48, 51, 50, 53, 52, 55, 54, 57, 56, 59, 58, 61, 60, 63, 62, 65, 64, 67, 66, 69, 68, 71, 70, 73, 72, 75, 74, 77, 76, 79, 78]), s.add("asarray", () => {
    let e = $([[1, 2], [3, 4]]);
    return O(e) === e;
  }, () => !0).add("asarray", () => O([[1, 2], [3, 4]]), () => [[1, 2], [3, 4]]), s.add("empty", () => E([2, 2]), () => [[,,], [,,]]).add("empty", () => E(0), () => []).add("empty", () => E([]), () => {}), s.add("empty_like", () => D([[1, 2, 3], [4, 5, 6]]), () => [[,,,], [,,,]]).add("empty_like", () => D([1, 2, 3, [1, 3]]), () => [,,,,]), s.add(T, () => T($([1, 2, 3, 4, 5]).get(u("::-2")), -1), () => $([5, 3, 1])).add(T, () => T($([1]), []), () => $(1)).add(T, () => T($(1), 1), () => $([1])).add(T, () => T($(1), -1), () => $([1])).add("reshape", () => T(O([[0, 1], [2, 3], [4, 5]]), [2, 3]), () => [[0, 1, 2], [3, 4, 5]]).add("reshape", () => T(O([[[[0, 1]]]]), [2, -1]), () => [[0], [1]]).add("reshape", () => {
    let e = O([[[[0, 1]]]]);
    return T(e, [2, -1]).base === e;
  }, () => !0).add("reshape", () => {
    let e = O([[[[0, 1]]]]).get(0);
    return T(e, [2, -1]).base === e;
  }, () => !1).add("reshape", () => T($([[1, 2, 3], [4, 5, 6]]), [-1]), () => $([1, 2, 3, 4, 5, 6])).add("reshape", () => {
    let e = Y(30),
      t = e.reshape([10, 3]).get(u("::2")),
      a = t.reshape(t.shape);
    return [t.toarray(), T(t, [1, 1, 5, -1, 3]).base === e, t.base === e, t.reshape(-1).base === e, a === t, a.base === e];
  }, () => [$([[0, 1, 2], [6, 7, 8], [12, 13, 14], [18, 19, 20], [24, 25, 26]]).toarray(), !0, !0, !1, !1, !0]);
  class P {
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
        l = this.index >= n;
      l || (e = a.item(t));
      for (let e = t.length - 1; e >= 0 && (t[e] += 1, !(t[e] < r[e])); e--) e > 0 && (t[e] -= r[e]);
      return this.index++, {
        value: e,
        done: l
      };
    }
    get(e) {
      if (R(e)) {
        let t = [];
        for (let a = 0; a < e.length; a++) t[a] = this.base.item(e[a]);
        return new z([e.length], t);
      }
      return this.base.item(e);
    }
    set(e, t) {
      if (R(e)) {
        if (R(t)) {
          t = O(t).flatten().data;
          for (let a = 0; a < e.length; a++) this.base.itemset(e[a], t[a % t.length]);
        } else for (let a = 0; a < e.length; a++) this.base.itemset(e[a], t);
      } else {
        if (R(t)) throw "Error setting single item of array";
        this.base.itemset(e, t);
      }
    }
    copy() {
      return this.base.flatten();
    }
  }
  function K(e, t) {
    let a = E(e);
    return I(a, t), a;
  }
  function G(...e) {
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
  function V(...e) {
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
  function Y(e, t = undefined, a = 1) {
    null == t && (t = e, e = 0);
    let r = (t - e) / a,
      n = [];
    for (let t = 0; t < r; t++) n[t] = e + t * a;
    return new z([r], n);
  }
  function X(e, t, a = 50, r = !0, n = !1) {
    let l = (t - e) / (r ? a - 1 : a),
      s = [];
    for (let t = 0; t < a; t++) s[t] = e + t * l;
    let i = new z([a], s);
    return n ? [i, l] : i;
  }
  function J(e, t, r) {
    let n = [];
    if ("wrap" == t) for (let t of e) t %= r, t = t < 0 ? t + r : t, n.push(t);else if ("clip" == t) for (let t of e) s = r - 1, t = (l = t) < 0 ? 0 : l > s ? s : l, n.push(t);else {
      if ("raise" != t) throw `unexpected mode = ${t}`;
      for (let t of e) {
        if (t < -r || t >= r) throw `index ${t} is out of bounds for axis 0 with size ${r}`;
        t = t < 0 ? t + a.size : t, n.push(t);
      }
    }
    var l, s;
    return n;
  }
  function W(e, t, a = null, r = null, n = "raise") {
    if (e = O(e), t = $(t), null == a) {
      t.data = J(t.data, n, e.size);
      let a = t.shape;
      if (null == r) r = E(a);else if (!Ae(r.shape, a)) throw "output array does not match result of ndarray.take";
      for (let a = 0; a < t.size; a++) r.data[a] = e.item(t.data[a]);
      return r;
    }
    {
      a < 0 && (a += e.ndim), t.data = J(t.data, n, e.shape[a]);
      let l = e.shape.slice();
      if (l.splice(a, 1, ...t.shape), null == r) r = E(l);else if (!Ae(r.shape, l)) throw "output array does not match result of ndarray.take";
      let s = Array(a).fill(u());
      for (let a of q(t.shape)) r.get(...s, ...a).set(e.get(...s, t.item(a)));
      return r;
    }
  }
  function H(e) {
    return K(e, 1);
  }
  function L(e) {
    return K(e, 0);
  }
  function U(e) {
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
  function C(e) {
    let t = O(e);
    return U(t) ? t : $(t);
  }
  function B(e, t, a) {
    let {
      strides: r,
      shape: n,
      data: l,
      offset: s,
      base: i,
      itemsize: d
    } = e;
    r = r.slice(), n = n.slice();
    let o = r[t],
      u = n[t];
    return r[t] = r[a], n[t] = n[a], r[a] = o, n[a] = u, new z(n, l, i, r, s, d);
  }
  function Q(e, t = null) {
    let a,
      r,
      {
        ndim: n,
        shape: l,
        strides: s,
        data: i,
        base: d,
        offset: o,
        itemsize: u
      } = e;
    if (null == t) a = l.slice().reverse(), r = s.slice().reverse();else {
      t = function (e, t) {
        if (e.length != t) throw "axes don't match array";
        let a = [],
          r = {};
        for (let n = 0; n < t; n++) {
          let l = e[n];
          if (l < -t || t <= l) throw `axis ${l} is out of bounds for array of dimension ${n + 1}`;
          if (l < 0 && (l += t), r[l]) throw "repeated axis in transpose";
          r[l] = !0, a[n] = l;
        }
        return a;
      }(t, n), a = Array(n), r = Array(n);
      for (let e = 0; e < n; e++) a[e] = l[t[e]], r[e] = s[t[e]];
    }
    return new z(a, i, d ?? e, r, o, u);
  }
  function Z(...e) {
    if (1 != e.length) {
      let t = [];
      for (let a of e) t.push(Z(a));
      return t;
    }
    let t = O(e[0]);
    if (t.ndim >= 1) return t;
    t = t.copy();
    let {
      data: a,
      itemsize: r
    } = t;
    return new z([1], a, t, [r], 0, r);
  }
  function ee(...e) {
    if (1 != e.length) {
      let t = [];
      for (let a of e) t.push(ee(a));
      return t;
    }
    let t = O(e[0]);
    if (t.ndim >= 2) return t;
    let {
      shape: a,
      data: r,
      strides: n,
      offset: l,
      itemsize: s,
      ndim: i
    } = t;
    return 1 == i ? new z([1, a[0]], r, t, [0, n[0]], l, s) : (t = t.copy(), new z([1, 1], t.data, t, [s, s], 0, s));
  }
  function te(...e) {
    if (1 != e.length) {
      let t = [];
      for (let a of e) t.push(te(a));
      return t;
    }
    let t = O(e[0]);
    if (t.ndim >= 3) return t;
    let {
      shape: a,
      data: r,
      strides: n,
      offset: l,
      itemsize: s,
      ndim: i
    } = t;
    return 2 == i ? new z([a[0], a[1], 1], r, t, [n[0], n[1], 0], l, s) : 1 == i ? new z([1, a[0], 1], r, t, [0, n[0], 0], l, s) : (t = t.copy(), new z([1, 1, 1], t.data, t, [s, s, s], 0, s));
  }
  s.add("Flatiter", () => {
    let e = new z([2, 3], [0, 1, 2, 3, 4, 5]),
      t = new P(e),
      a = [];
    for (let e of t) {
      for (let e of t) a.push(e);
      a.push(e);
    }
    return a;
  }, () => [1, 2, 3, 4, 5, 0]).add("Flatiter", () => {
    let e = new z([3, 1], [0, 1, 2]),
      t = new P(e),
      a = [];
    for (let e of t) a.push(e, t.index, [...t.coords]);
    return a;
  }, () => [0, 1, [1, 0], 1, 2, [2, 0], 2, 3, [3, 0]]).add("Flatiter", () => {
    let e = new z([1, 2], [0, 1]),
      t = new P(e),
      a = [];
    for (let r of t) {
      for (let r of new P(e)) a.push(r, t.index, [...t.coords]);
      a.push(r, t.index, [...t.coords]);
    }
    return a;
  }, () => [0, 1, [0, 1], 1, 1, [0, 1], 0, 1, [0, 1], 0, 2, [1, 0], 1, 2, [1, 0], 1, 2, [1, 0]]), s.add("Flatiter.get", () => new P($([[1, 2, 3], [4, 5, 6]])).get(3), () => 4).add("Flatiter.get", () => new P($([[1, 2, 3], [4, 5, 6]])).get([3, 4, -1]), () => [4, 5, 6]), s.add("Flatiter.set", () => {
    let e = $([[3, 3, 3], [3, 3, 3]]);
    return new P(e).set([1, -1], [[1], [2]]), e;
  }, () => [[3, 1, 3], [3, 3, 2]]), s.add("Flatiter.copy", () => new P(new z([2, 3], [0, 1, 2, 3, 4, 5]).get(u([,, -1]))).copy(), () => [3, 4, 5, 0, 1, 2]), s.add("full", () => K([2, 2], 1 / 0), () => [[1 / 0, 1 / 0], [1 / 0, 1 / 0]]).add("full", () => K([2, 2], 10), () => [[10, 10], [10, 10]]).add("full", () => K([2, 2], [1, 2]), () => [[1, 2], [1, 2]]).add("full", () => K(2, -1), () => [-1, -1]), s.add("broadcast_shapes", () => V([1, 2], [3, 1], [3, 2]), () => [3, 2]), s.add("broadcast_shapes", () => V([6, 7], [5, 6, 1], [7], [5, 1, 7]), () => [5, 6, 7]), s.add("arange", () => Y(3), () => $([0, 1, 2])).add("arange", () => Y(-10, 10), () => $([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).add("arange", () => Y(-10, 10, -1), () => $([])).add("arange", () => Y(3, 7, 2), () => $([3, 5])).add("arange", () => Y(0, -10, -1), () => $([0, -1, -2, -3, -4, -5, -6, -7, -8, -9])), s.add("linspace", () => X(2, 3, 5), () => $([2, 2.25, 2.5, 2.75, 3])).add("linspace", () => X(2, 3, 5, !1), () => $([2, 2.2, 2.4, 2.6, 2.8])).add("linspace", () => X(2, 3, 5, !0, !0), () => [$([2, 2.25, 2.5, 2.75, 3]), .25]).add("linspace", () => X(2, 3, 5, !1, !0), () => [$([2, 2.2, 2.4, 2.6, 2.8]), .2]).add("linspace", () => X(1, 10, 10, !1), () => $([1, 1.9, 2.8, 3.7, 4.6, 5.5, 6.4, 7.3, 8.2, 9.1])), s.add("take", () => W([4, 3, 5, 7, 6, 8], [0, 1, 4]), () => $([4, 3, 6])).add("take", () => W([4, 3, 5, 7, 6, 8], [[0, 1], [2, 3]]), () => $([[4, 3], [5, 7]])).add("take", () => W($([[1, 2], [3, 4], [5, 6], [7, 8]]), [[0, 1], [2, 3]], 0), () => $([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])).add("take", () => W($([[1, 2], [3, 4], [5, 6], [7, 8]]), $([[[[0, 1], [0, 1]]]]), 1), () => $([[[[[1, 2], [1, 2]]]], [[[[3, 4], [3, 4]]]], [[[[5, 6], [5, 6]]]], [[[[7, 8], [7, 8]]]]])).add("take", () => W([[5, 6, 2, 7, 1], [4, 9, 2, 9, 3]], [0, 4], 1), () => [[5, 1], [4, 3]]), s.add(C, () => {
    let e = H([3, 1, 5]).get(u(), u([,, 3]), u());
    return C(e) === e;
  }, () => !0), s.add(C, () => {
    let e = H([3, 4, 5]).get(u(), u([,, 1]), u());
    return C(e) === e;
  }, () => !0), s.add(C, () => {
    let e = H([3, 4, 5]).get(u(), u(), u(1));
    return C(e) === e;
  }, () => !1), s.add(C, () => {
    let e = H([3]).get(u([,, -3]));
    return C(e) === e;
  }, () => !0), s.add(C, () => {
    let e = H([2]).get(u([,, 2]));
    return C(e) === e;
  }, () => !0), s.add(C, () => {
    let e = H([3]).get(u([,, 2]));
    return C(e) === e;
  }, () => !1), s.add(C, () => {
    let e = H([3]).get(u([1, 2]));
    return C(e) === e;
  }, () => !0).add(C, () => {
    let e, t;
    return e = $([]), t = C(e), e === t;
  }, () => !0).add(C, () => {
    let e, t;
    return e = $(5), t = C(e), e === t;
  }, () => !1), s.add(B, () => B($([[1, 2, 3]]), 0, 1), () => $([[1], [2], [3]])), s.add(B, () => B($([[[0, 1], [2, 3]], [[4, 5], [6, 7]]]), 0, 2), () => $([[[0, 4], [2, 6]], [[1, 5], [3, 7]]])), s.add(Q, () => Q(Y(4).reshape([2, 2])), () => $([[0, 2], [1, 3]])).add(Q, () => Q(H([1, 2, 3]), [1, 0, 2]), () => $([[[1, 1, 1]], [[1, 1, 1]]])).add(Q, () => Q(H([2, 3, 4, 5])).shape, () => [5, 4, 3, 2]), s.add(Z, () => Z(1), () => $([1])).add(Z, () => Z(1, [3, 4]), () => [$([1]), $([3, 4])]).add(Z, () => Z(Y(9).reshape([3, 3])), () => $([[0, 1, 2], [3, 4, 5], [6, 7, 8]])).add(Z, () => {
    let e = $([1]),
      t = e.get(0),
      a = Z(t);
    return a.set([0], -96), [e.toarray(), t.toarray(), a.toarray(), null === e.base, null === t.base, a.base != t, a.base];
  }, () => [$([1]), 1, $([-96]), !0, !0, !0, $(-96)]), s.add(ee, () => ee(3), () => $([[3]])).add(ee, () => {
    let e = Y(3);
    return [ee(e), ee(e).base === e];
  }, () => [$([[0, 1, 2]]), !0]).add(ee, () => ee(1, [1, 2], [[1, 2]]), () => [$([[1]]), $([[1, 2]]), $([[1, 2]])]), s.add(te, () => te(3), () => $([[[3]]])).add(te, () => te(Y(3)).shape, () => [1, 3, 1]).add(te, () => {
    let e = Y(12).reshape(4, 3);
    return [te(e).shape, te(e).base === e.base];
  }, () => [[4, 3, 1], !0]).add(te, () => te([1, 2], [[1, 2]], [[[1, 2]]]), () => [[[[1], [2]]], [[[1], [2]]], [[[1, 2]]]]);
  class ae {
    constructor(e) {
      e = e.map(O), this.numiter = e.length, this.shape = V(...e.map(e => e.shape)), this.arrays = e.map(e => k(e, this.shape)), this.ndim = this.shape.length, this.size = function (e) {
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
  function re(...e) {
    return new ae(e);
  }
  function ne(e, t = e, a = 0) {
    let r = e * t,
      n = Array(r).fill(0);
    for (let e = a + Math.ceil(-a / (t + 1)) * (t + 1); e < r; e += t + 1) n[e] = 1;
    return new z([e, t], n);
  }
  function le(e) {
    let t = e * e,
      a = Array(t).fill(0);
    for (let r = 0; r < t; r += e + 1) a[r] = 1;
    return new z([e, e], a);
  }
  function se(e) {
    return null == e || h(e) ? 0 : O(e).ndim;
  }
  function ie(e, t) {
    e = O(e), "number" == typeof t && (t = [t]);
    let a = t.length;
    if ((t = new Set(t)).size != a) throw "repeated axis";
    let r = e.ndim + a,
      n = [];
    for (let a = 0, l = 0; a < r; a++) n.push(t.has(a) ? 1 : e.shape[l++]);
    return e.reshape(n);
  }
  function de(e, t, a = !1) {
    if (Array.isArray(e) || (e = [e]), e = e.map(e => Oe(e, t)), !a && new Set(e).size != e.length) throw "repeated axis";
    return e;
  }
  s.add(re, () => {
    let e = re($([[1], [2], [3]]), $([4, 5, 6])),
      t = E(e.shape),
      a = [];
    for (let [t, r] of e) a.push(t + r);
    return t.flat = a, t;
  }, () => $([[5, 6, 7], [6, 7, 8], [7, 8, 9]])).add(re, () => {
    let e = [],
      t = re($([1, 2, 3]), $([[4], [5], [6]]));
    return e.push(t.index), e.push(t.next().value, t.next().value, t.next().value), e.push(t.index), t.reset(), e.push(t.index), e;
  }, () => [0, [1, 4], [2, 4], [3, 4], 3, 0]), s.add("eye", () => ne(2), () => [[1, 0], [0, 1]]).add("eye", () => ne(3, 3, 1), () => [[0, 1, 0], [0, 0, 1], [0, 0, 0]]).add("eye", () => ne(4, 5, -1), () => [[0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0]]), s.add("identity", () => le(3), () => [[1, 0, 0], [0, 1, 0], [0, 0, 1]]).add("identity", () => le(0), () => []), s.add("ndim", () => se([[1, 2, 3], [4, 5, 6]]), () => 2).add("ndim", () => se(O([[1, 2, 3], [4, 5, 6]])), () => 2).add("ndim", () => se(1), () => 0).add("ndim", () => se(null), () => 0), s.add(ie, () => ie($([1, 2]), 0), () => $([[1, 2]])).add(ie, () => ie($([1, 2]), 1), () => $([[1], [2]])).add(ie, () => ie($([1, 2]), [0, 1]), () => $([[[1, 2]]])).add(ie, () => ie($([1, 2]), [2, 0]), () => $([[[1], [2]]])).add(ie, () => {
    let e = $([1, 2]);
    return ie(e, [2, 0]).base === e;
  }, () => !0);
  const oe = de;
  class ue {
    constructor(e, t = null) {
      this.array = O(e);
      let {
        ndim: a,
        shape: r
      } = e;
      if (null != t && (t = de(t, a)), this.axis = t, null != t) {
        let e = [],
          n = [],
          l = [];
        for (let s = 0; s < a; s++) (l[s] = !t.includes(s)) ? (n[s] = 0, e.push(r[s])) : n[s] = u[":"];
        this.shape = e, this.indices = n, this.mask = l;
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
      for (let t of q(a)) {
        for (let a = 0, l = 0; a < e.ndim; a++) r[a] && (n[a] = t[l++]);
        yield [t, e.get(...n)];
      }
    }
  }
  function he(e, t = null) {
    return new ue(e, t);
  }
  function fe(e, t = null) {
    e = O(e), null != t && (t = de(t));
    let {
        shape: a,
        strides: r,
        data: n,
        ndim: l,
        offset: s,
        itemsize: i
      } = e,
      d = [],
      o = [];
    for (let e = 0; e < l; e++) (t ? t.includes(e) : 1 == a[e]) || (d.push(a[e]), o.push(r[e]));
    return new z(d, n, e, o, s, i);
  }
  function pe(e) {
    return $(e);
  }
  function ce(e, t) {
    let a = [];
    for (let r of q(t)) a.push(e(r));
    return new z(t, a);
  }
  function me(e, t = -1) {
    let a;
    if (-1 == t) a = [...e];else {
      a = [];
      let r = 0;
      if (r < t) for (let n of e) if (a.push(n), r++, r >= t) break;
    }
    return $(a);
  }
  function ge(e) {
    e = Z(e);
    let {
        ndim: t
      } = e,
      a = [];
    for (let e = 0; e < t; e++) a.push([]);
    for (let [r, n] of ye(e)) if (n) for (let e = 0; e < t; e++) a[e].push(r[e]);
    for (let e = 0; e < t; e++) a[e] = $(a[e]);
    return a;
  }
  function* ye(e) {
    e = O(e);
    for (let t of q(e.shape)) {
      let a = [t, e.item(t)];
      yield a;
    }
  }
  function we(e) {
    e = O(e);
    let t = 0,
      a = [];
    for (let [r, n] of ye(e)) n && (a.push(...r), t++);
    return new z([t, e.ndim], a);
  }
  function be(e, t, a = null, r = null) {
    if (1 != (e = O(e)).ndim) throw "condition must be a 1-d array";
    return W(t, ge(e)[0], a, r);
  }
  function xe(e) {
    e = C(e);
    let {
      size: t,
      data: a,
      offset: r,
      itemsize: n
    } = e;
    return new z([t], a, e.base, void 0, r, n);
  }
  function _e(e, t) {
    return be(xe(e), xe(t));
  }
  function ze(e) {
    return ge(xe(e))[0];
  }
  function ve(e, t, a, r, n) {
    let {
      strides: l,
      ndim: s,
      shape: i
    } = t;
    a = de(a, s);
    let d = Array(s).fill().map((e, t) => a.includes(t)),
      o = [],
      h = [];
    for (let e = 0, t = 0; e < s; e++) d[e] ? (h[e] = u[":"], r && (o[t++] = 1)) : o[t++] = i[e];
    null == n && (n = E(o));
    for (let a of q(o)) {
      for (let e = 0, t = 0; e < s; e++) d[e] || (h[e] = a[t++]);
      n.itemset(a, e(t.get(...h)));
    }
    return n;
  }
  function $e(e, t = null, a = !1) {
    if (e = O(e), null != t) return ve($e, e, t, a);
    let r = 0;
    for (let t of e.flat) t && r++;
    return r;
  }
  function Ae(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let a = 0; a < e.length; a++) if (e[a] !== t[a]) return !1;
    return !0;
  }
  s.add(fe, () => fe($([[[0], [1], [2]]])).shape, () => [3]).add(fe, () => fe($([[[0], [1], [2]]]), 0).shape, () => [3, 1]).add(fe, () => fe($([[[0], [1], [2]]]), 2).shape, () => [1, 3]).add(fe, () => fe($([[1234]])), () => $(1234)).add(fe, () => {
    let e, t, a, r, n;
    return e = Y(20), t = e.reshape([5, -1]), a = t.get(u([,, -1])), r = C(a), n = r.reshape([5, 1, 1, -1]), [n.reshape([5, -1]).base === r, n.reshape(-1).base === r, fe(n).base === r, e, t, a, fe(n)];
  }, () => [!0, !0, !0, $([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), $([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15], [16, 17, 18, 19]]), $([[16, 17, 18, 19], [12, 13, 14, 15], [8, 9, 10, 11], [4, 5, 6, 7], [0, 1, 2, 3]]), $([[16, 17, 18, 19], [12, 13, 14, 15], [8, 9, 10, 11], [4, 5, 6, 7], [0, 1, 2, 3]])]), s.add(pe, () => {
    let e, t, a;
    return e = $([1, 2, 3]), t = e, a = pe(e), e.set([0], 10), [e.item(0) == t.item(0), e.item(0) == a.item(0)];
  }, () => [!0, !1]), s.add(ce, () => ce(([e, t]) => e, [2, 2]), () => $([[0, 0], [1, 1]])).add(ce, () => ce(([e, t]) => t, [2, 2]), () => $([[0, 1], [0, 1]])).add(ce, () => ce(([e, t]) => e == t, [3, 3]), () => $([[!0, !1, !1], [!1, !0, !1], [!1, !1, !0]])).add(ce, () => ce(([e, t]) => e + t, [3, 3]), () => $([[0, 1, 2], [1, 2, 3], [2, 3, 4]])), s.add(me, () => me({
    *[Symbol.iterator]() {
      for (let e = 0; e < 5; e++) yield e * e;
    }
  }), () => $([0, 1, 4, 9, 16])).add(me, () => me({
    *[Symbol.iterator]() {
      for (let e = 0; e < 5; e++) yield [e + 1, e + 2];
    }
  }), () => $([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6]])), s.add(ge, () => {
    let e;
    return e = $([[3, 0, 0], [0, 4, 0], [5, 6, 0]]).get(u("..."), null), ge(e);
  }, () => [$([0, 1, 2, 2]), $([0, 1, 0, 1]), $([0, 0, 0, 0])]).add(ge, () => ge($([[!1, !1, !1], [!0, !0, !0], [!0, !0, !0]])), () => [$([1, 1, 1, 2, 2, 2]), $([0, 1, 2, 0, 1, 2])]).add(ge, () => ge(55), () => $([0])), s.add(ye, () => {
    {
      let e;
      e = $([[1, 2], [3, 4]]);
      let t = [];
      for (let [a, r] of ye(e)) t.push(a.slice(), r);
      return t;
    }
  }, () => [[0, 0], 1, [0, 1], 2, [1, 0], 3, [1, 1], 4]), s.add(we, () => we(55).shape, () => [1, 0]).add(we, () => we(Ua(Y(6).reshape(2, 3), 1)), () => $([[0, 2], [1, 0], [1, 1], [1, 2]])), s.add(be, () => be([0, 1], $([[1, 2], [3, 4], [5, 6]]), 0), () => $([[3, 4]])).add(be, () => be([!1, !0, !0], $([[1, 2], [3, 4], [5, 6]]), 0), () => $([[3, 4], [5, 6]])).add(be, () => be([!1, !0], $([[1, 2], [3, 4], [5, 6]]), 1), () => $([[2], [4], [6]])).add(be, () => be([!1, !0], $([[1, 2], [3, 4], [5, 6]])), () => $([2])), s.add(xe, () => xe($([[1, 2, 3], [4, 5, 6]])), () => $([1, 2, 3, 4, 5, 6])).add(xe, () => xe($([[1, 2, 3], [4, 5, 6]]).T), () => $([1, 4, 2, 5, 3, 6])).add(xe, () => xe(Y(12).reshape(2, 3, 2).swapaxes(1, 2)), () => $([0, 2, 4, 1, 3, 5, 6, 8, 10, 7, 9, 11])).add(xe, () => {
    let e, t;
    return e = Y(40).reshape([5, -1]).copy(), t = e.get(null, u(":"), null, null, u("::2"), null), [t.reshape(-1).base == e, xe(t).base];
  }, () => [!0, null]).add(xe, () => {
    let e, t;
    return e = Y(40).reshape([5, -1]).copy(), t = e.get(null, u(":"), null, null, u("::3"), null), [t.reshape(-1).base == e, xe(t).base];
  }, () => [!1, null]), s.add(_e, () => {
    let e, t;
    return e = Y(12).reshape([3, 4]), t = $([[!0, !1, !1, !0], [!1, !1, !0, !1], [!1, !0, !1, !1]]), _e(t, e);
  }, () => $([0, 3, 6, 9])), s.add(ze, () => {
    let e;
    return e = Y(-2, 3), ze(e);
  }, () => $([0, 1, 3, 4])), s.add($e, () => {
    let e;
    return e = H([2, 3, 4, 5]), $e(e);
  }, () => 120).add($e, () => {
    let e;
    return e = H([2, 3, 4, 5]), $e(e, 0);
  }, () => $([[[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]], [[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]], [[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]]])).add($e, () => {
    let e;
    return e = H([2, 3, 4, 5]), $e(e, 1);
  }, () => $([[[3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3]], [[3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3]]])).add($e, () => {
    let e;
    return e = H([2, 3, 4, 5]), $e(e, -1);
  }, () => $([[[5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5]], [[5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5]]])).add($e, () => {
    let e;
    return e = H([2, 3, 4, 5]), $e(e, [0, -1]);
  }, () => $([[10, 10, 10, 10], [10, 10, 10, 10], [10, 10, 10, 10]])).add($e, () => {
    let e;
    return e = H([2, 3, 4, 5]), $e(e, [0, -1], !0);
  }, () => $([[[[10], [10], [10], [10]], [[10], [10], [10], [10]], [[10], [10], [10], [10]]]]));
  const Me = et("nan_equal", (e, t) => e == t || Number.isNaN(e) && Number.isNaN(t));
  function Ne(e, t, a = !1) {
    return e = O(e), t = O(t), !!Ae(e.shape, t.shape) && pt(a ? Me(e, t) : Xa(e, t));
  }
  function ke(e, t) {
    return e = O(e), t = O(t), !!G(e.shape, t.shape) && pt(Xa(e, t));
  }
  function Ie(e, t = 0, a = null) {
    if (e.length <= 0) throw "need at least one array to concatenate";
    e = e.map(O), null == t && (e = e.map(xe), t = 0);
    let {
      ndim: r,
      shape: n
    } = e[0];
    if (0 == r) throw "zero-dimensional arrays cannot be concatenated";
    for (let a = 1; a < e.length; a++) {
      let l = e[a];
      if (l.ndim != r) throw `all the input arrays must have same number of dimensions, but the array at index 0 has ${r} dimension(s) and the array at index ${a} has ${e[a].ndim} dimension(s)`;
      for (let s = 0; s < r; s++) if (s != t && l.shape[s] != n[s]) throw `all the input array dimensions for the concatenation axis must match exactly, but along dimension ${s}, the array at index 0 has size ${n[s]} and the array at index ${a} has size ${e[a].shape[s]}`;
    }
    t = Oe(t, r);
    let l = n.slice();
    if (l[t] = e.reduce((e, a) => e + a.shape[t], 0), null == a) a = E(l);else {
      if (a.ndim != r) throw "Output array has wrong dimensionality";
      if (!Ae(a.shape, l)) throw "Output array is the wrong shape";
    }
    let s = Array(r).fill(u(":")),
      i = 0;
    for (let r of e) s[t] = u(i, i += r.shape[t]), a.set(s, r);
    return a;
  }
  function qe(e, t, a) {
    if (t = oe(t, e.ndim), a = oe(a, e.ndim), t.length != a.length) throw "'source' and 'destination' arguments must have the same number of elements";
    let r = [...Array(e.ndim).keys()].filter(e => !t.includes(e));
    for (let e = 0; e < t.length; e++) r.splice(a[e], 0, t[e]);
    return Q(e, r);
  }
  s.add(Ne, () => Ne([1, 2], [1, 2]), () => !0).add(Ne, () => Ne($([1, 2]), $([1, 2])), () => !0).add(Ne, () => Ne([1, 2], [1, 2, 3]), () => !1).add(Ne, () => Ne([1, 2], [1, 4]), () => !1).add(Ne, () => {
    let e = $([1, NaN]);
    return Ne(e, e);
  }, () => !1).add(Ne, () => {
    let e = $([1, NaN]);
    return Ne(e, e, !0);
  }, () => !0), s.add(ke, () => ke([1, 2], [1, 2]), () => !0).add(ke, () => ke([1, 2], [1, 3]), () => !1).add(ke, () => ke([1, 2], [[1, 2], [1, 2]]), () => !0).add(ke, () => ke([1, 2], [[1, 2, 1, 2], [1, 2, 1, 2]]), () => !1).add(ke, () => ke([1, 2], [[1, 2], [1, 3]]), () => !1), s.add(Ie, () => {
    let e = $([[1, 2], [3, 4]]),
      t = $([[5, 6]]);
    return [Ie([e, t], 0), Ie([e, t.T], 1), Ie([e, t], null)];
  }, () => [$([[1, 2], [3, 4], [5, 6]]), $([[1, 2, 5], [3, 4, 6]]), $([1, 2, 3, 4, 5, 6])]), s.add(qe, () => qe(L([3, 4, 5]), 0, -1).shape, () => [4, 5, 3]).add(qe, () => qe(L([3, 4, 5]), -1, 0).shape, () => [5, 3, 4]);
  let Se = e => [...Array(e).keys()];
  function je(e) {
    let t = Object.create(null);
    return (...a) => ((e, t, a) => e[t] ?? (e[t] = a(...t)))(t, a, e);
  }
  function Oe(e, t) {
    let a = e;
    if (e = +e, !Number.isInteger(e)) throw new Error(`${a} cannot be cast to integer`);
    if (e < 0 && (e += t), e < 0 || t <= e) throw `axis ${a} is out of bounds for array of dimension ${t}`;
    return e;
  }
  let Ee = {};
  function De(e, t, a = !1) {
    if (null == e) return Ee[t] ?? (Ee[t] = Array(t).fill(1));
    let r = Array(t).fill(0);
    if (Array.isArray(e)) {
      for (let a = 0; a < e.length; a++) r[Oe(e[a], t)] = 1;
      if (!a) {
        let a = 0;
        for (let e = 0; e < t; e++) a += r[e];
        if (a != e.length) throw "repeated axis";
      }
    } else r[Oe(e, t)] = 1;
    return r;
  }
  let Fe = (e = null, t, a, r = t) => {
      let n = [];
      for (let e = 0; e < t.length; e++) n.push(r[e] == t[e] ? `${r[e]}` : `${r[e]}: ${t[e]}`);
      return null != e ? `${e} {${n.join(", ")}} = ${a}` : `({${n.join(", ")}} = ${a})`;
    },
    Te = (e = null, t, a) => {
      Array.isArray(t) || (t = [t], a = [a]);
      let r = [];
      for (let e = 0; e < t.length; e++) r.push(`${t[e]} = ${a[e]}`);
      return null != e ? `${e} ${r.join(", ")}` : `${r.join(", ")}`;
    },
    Re = (e, t, a) => `for(let ${e} = 0; ${e} < ${t}; ${e}++) {${a}}`,
    Pe = (...e) => `${e.join("; ")}`,
    Ke = (e, ...t) => `${e}(${t.join(", ")})`,
    Ge = (e, t) => `${e}[${t}]`,
    Ve = (e, t) => `${e}.${t}`,
    Ye = e => `(${e})`,
    Xe = (...e) => `${e.map(Ye).join(" * ")}`,
    Je = (...e) => `${e.map(Ye).join(" + ")}`,
    We = e => `return ${e}`;
  function He(e, t, a = t) {
    let r = "out",
      n = Se(e).map(e => `x${e + 1}`),
      l = `${r}_offset`,
      s = n.map(e => `${e}_offset`),
      i = `${r}_data`,
      d = n.map(e => `${e}_data`),
      o = Se(a).map(e => `${r}_strides_${e}`),
      u = n.map(e => Se(t).map(t => `${e}_strides_${t}`)),
      h = Se(t).map(e => `i_${e}`),
      f = Se(t).map(e => `shape_${e}`);
    return {
      fn: "fn",
      out: r,
      x: n,
      out_offset: l,
      x_offset: s,
      out_data: i,
      x_data: d,
      out_strides: o,
      x_strides: u,
      index: h,
      shape: f
    };
  }
  function Le(e, t, a, r) {
    let n = [];
    return n.push(Te("let", t, Ve(e, "data"))), n.push(Te("let", a, Ve(e, "offset"))), r.length > 0 && n.push(Fe("let", r, Ve(e, "strides"), Se(r.length))), n;
  }
  let Ue = je((e, t) => new Function(...function (e, t) {
      let {
          fn: a,
          out: r,
          x: n,
          out_offset: l,
          x_offset: s,
          out_data: i,
          x_data: d,
          out_strides: o,
          x_strides: u,
          index: h,
          shape: f
        } = He(e, t),
        p = [];
      return p.push(...Le(r, i, l, o)), n.forEach((e, t) => {
        p.push(...Le(e, d[t], s[t], u[t]));
      }), p.push(Fe("let", f, Ve(n[0], "shape"), Se(f.length))), p.push(Se(t).reverse().reduce((e, t) => Re(h[t], f[t], e), Pe(Te(null, [Ge(i, Je(l, ...h.map((e, t) => Xe(e, o[t]))))], [Ke(a, ...d.map((e, t) => Ge(e, Je(s[t], ...h.map((e, a) => Xe(e, u[t][a]))))))]))), We(r)), [a, ...n, r, Pe(...p)];
    }(e, t))),
    Ce = (je((e, t) => new Function()), je((e, t, a) => new Function(...function (e, t, a) {
      let r = t;
      for (let e = 0; e < t; e++) r -= a[e];
      let {
          fn: n,
          out: l,
          x: s,
          out_offset: i,
          x_offset: d,
          out_data: o,
          x_data: u,
          out_strides: h,
          x_strides: f,
          index: p,
          shape: c
        } = He(e, t, r),
        m = "initial",
        g = "accum",
        y = s.map(e => `${e}_start`),
        w = [];
      return w.push(...Le(l, o, i, h)), s.forEach((e, t) => {
        w.push(...Le(e, u[t], d[t], f[t]));
      }), w.push(Fe("let", c, Ve(s[0], "shape"), Se(c.length))), w.push(Se(t).filter(e => !a[e]).reverse().reduce((e, t) => Re(p[t], c[t], e), Pe(Te("let", g, m), ...y.map((e, r) => Te("let", e, Je(d[r], ...Se(t).filter(e => !a[e]).map(e => Xe(p[e], f[r][e]))))), Se(t).filter(e => a[e]).reverse().reduce((e, t) => Re(p[t], c[t], e), Pe([Te(null, g, Ke(n, g, ...u.map((e, r) => Ge(e, Je(y[r], ...Se(t).filter(e => a[e]).map(e => Xe(p[e], f[r][e])))))))])), Te(null, Ge(o, Je(i, ...Se(t).filter(e => !a[e]).map((e, t) => Xe(p[e], h[t])))), g))), We(l)), [n, ...s, l, m, Pe(...w)];
    }(e, t, a)))),
    Be = je((e, t, a) => new Function(...function (e, t, a) {
      let r = t,
        {
          fn: n,
          out: l,
          x: s,
          out_offset: i,
          x_offset: d,
          out_data: o,
          x_data: u,
          out_strides: h,
          x_strides: f,
          index: p,
          shape: c
        } = He(e, t, r),
        m = "initial",
        g = "accum",
        y = s.map(e => `${e}_start`),
        w = "offset_start",
        b = [];
      return b.push(...Le(l, o, i, h)), s.forEach((e, t) => {
        b.push(...Le(e, u[t], d[t], f[t]));
      }), b.push(Fe("let", c, Ve(s[0], "shape"), Se(c.length))), b.push(Se(t).filter(e => !a[e]).reverse().reduce((e, t) => Re(p[t], c[t], e), Pe(Te("let", g, m), ...y.map((e, r) => Te("let", e, Je(d[r], ...Se(t).filter(e => !a[e]).map(e => Xe(p[e], f[r][e]))))), Te("let", w, Je(i, ...Se(t).filter(e => !a[e]).map(e => Xe(p[e], h[e])))), Se(t).filter(e => a[e]).reverse().reduce((e, t) => Re(p[t], c[t], e), Pe([Te(null, g, Ke(n, g, ...u.map((e, r) => Ge(e, Je(y[r], ...Se(t).filter(e => a[e]).map(e => Xe(p[e], f[r][e]))))))), Te(null, Ge(o, Je(w, ...Se(t).filter(e => a[e]).map((e, t) => Xe(p[e], h[e])))), g)])))), We(l)), [n, ...s, l, m, Pe(...b)];
    }(e, t, a)));
  function Qe(e, t, a = t.length, r = !1) {
    let n;
    if (1 == a) n = r ? (e, a = null, r = null) => (e = O(e), null == a ? a = E(e.shape) : e = k(e, a.shape), Ue(1, a.ndim)(t.bind(null, r), e, a)) : (e, a = null) => (e = O(e), null == a ? a = E(e.shape) : e = k(e, a.shape), Ue(1, a.ndim)(t, e, a));else {
      if (2 != a) throw "not support on narg > 2 yet";
      n = (e, a, r = null) => {
        let n;
        return e = O(e), a = O(a), null == r ? (n = V(e.shape, a.shape), r = E(n)) : n = r.shape, e = k(e, n), a = k(a, n), Ue(2, r.ndim)(t, e, a, r);
      };
    }
    return Object.defineProperty(n, "name", {
      value: e
    });
  }
  function Ze(e, t, a = !1) {
    if (a) {
      function r(e, a = null, r = null) {
        return e = O(e), null == a ? a = E(e.shape) : e = k(e, a.shape), Ue(1, a.ndim)(t.bind(null, r), e, a);
      }
      return Object.defineProperty(r, "name", {
        value: e
      });
    }
    function r(e, a = null) {
      return e = O(e), null == a ? a = E(e.shape) : e = k(e, a.shape), Ue(1, a.ndim)(t, e, a);
    }
    return Object.defineProperty(r, "name", {
      value: e
    });
  }
  function et(e, t) {
    return Object.defineProperty(function (e, a, r = null) {
      let n;
      return e = O(e), a = O(a), null == r ? (n = V(e.shape, a.shape), r = E(n)) : n = r.shape, e = k(e, n), a = k(a, n), Ue(2, r.ndim)(t, e, a, r);
    }, "name", {
      value: e
    });
  }
  function tt(e, t, a) {
    return Object.defineProperty(function (e, r = null, n = null, l = a) {
      e = O(e), null == r && (e = xe(e));
      let {
        ndim: s,
        shape: i
      } = e;
      if (r = De(r, s), null == n) n = E(i);else if (!Ae(i, n.shape)) throw "unmatch shape";
      return Be(1, s, r)(t, e, n, l), n;
    }, "name", {
      value: e
    });
  }
  const at = [];
  function rt(e, t, a = t.length - 1, r) {
    if (1 != a) throw "not support on narg > 1 yet";
    return Object.defineProperty(function (e, a = null, n = null, l = !1, s = r, i = !0) {
      null != n && (i = !1), e = O(e);
      let d,
        {
          ndim: o,
          shape: u
        } = e;
      if (null == a) a = De(a, o), d = at;else {
        a = De(a, o), d = [];
        for (let e = 0; e < o; e++) a[e] || d.push(u[e]);
      }
      if (l) {
        let r = u.slice();
        for (let e = 0; e < o; e++) a[e] && (r[e] = 1);
        if (null == n) n = E(r);else if (!Ae(r, n.shape)) throw "unmatch shape";
        return Ce(1, o, a)(t, e, n.reshape(d), s), i && 0 == n.ndim ? n.item() : n;
      }
      if (null == n) n = E(d);else if (!Ae(d, n.shape)) throw "unmatch shape";
      return n = Ce(1, o, a)(t, e, n, s), i && 0 == n.ndim ? n.item() : n;
    }, "name", {
      value: e
    });
  }
  const nt = et("add", (e, t) => e + t),
    lt = et("subtract", (e, t) => e - t),
    st = et("multiply", (e, t) => e * t),
    it = et("divide", (e, t) => e / t),
    dt = it,
    ot = et("floor_divide", (e, t) => e / t | 0),
    ut = et("mod", (e, t) => (e % t + t) % t),
    ht = ut,
    ft = et("power", (e, t) => e ** t);
  s.add(nt, () => nt(Y(9).reshape([3, 3]), Y(3)), () => $([[0, 2, 4], [3, 5, 7], [6, 8, 10]])), s.add(lt, () => lt(1, 4), () => -3).add(lt, () => lt(Y(9).reshape([3, 3]), Y(3)), () => $([[0, 0, 0], [3, 3, 3], [6, 6, 6]])), s.add(st, () => st(2, 4), () => 8).add(lt, () => st(Y(9).reshape([3, 3]), Y(3)), () => $([[0, 1, 4], [0, 4, 10], [0, 7, 16]])), s.add(it, () => it(2, 4), () => .5).add(it, () => it(Y(9).reshape([3, 3]), Y(3)), () => $([[NaN, 1, 1], [1 / 0, 4, 2.5], [1 / 0, 7, 4]])), s.add(ut, () => ut([4, 7], [2, 3]), () => $([0, 1])).add(ut, () => ut(Y(7), 5), () => $([0, 1, 2, 3, 4, 0, 1])), s.add(ft, () => ft(Y(6), 3), () => $([0, 1, 8, 27, 64, 125])).add(ft, () => ft(Y(6), [1, 2, 3, 3, 2, 1]), () => $([0, 1, 8, 27, 16, 5])).add(ft, () => ft(Y(6), $([[1, 2, 3, 3, 2, 1], [1, 2, 3, 3, 2, 1]])), () => $([[0, 1, 8, 27, 16, 5], [0, 1, 8, 27, 16, 5]])).add(ft, () => ft(Y(6), $([1, 2, 3, 3, 2, 1])), () => $([0, 1, 8, 27, 16, 5]));
  const pt = rt("all", (e, t) => e && !!t, 1, !0),
    ct = rt("any", (e, t) => e || !!t, 1, !1),
    mt = Ze("isfinite", Number.isFinite),
    gt = Ze("isinf", e => e == Number.POSITIVE_INFINITY || e == Number.NEGATIVE_INFINITY),
    yt = Ze("isinf", Number.isNaN),
    wt = Ze("isinf", e => e == Number.NEGATIVE_INFINITY),
    bt = Ze("isinf", e => e == Number.POSITIVE_INFINITY);
  s.add(pt, () => 0 == pt([[!0, !1], [!0, !0]]), () => !0).add(pt, () => pt([[!0, !1], [!0, !0]], 0), () => $([!0, !1])).add(pt, () => pt([-1, 4, 5]), () => !0).add(pt, () => {
    let e = $(!1);
    return [pt([-1, 4, 5], null, e) === e, e];
  }, () => [!0, $(!0)]), s.add(ct, () => ct([[!0, !1], [!0, !0]]), () => !0).add(ct, () => ct([[!0, !1], [!1, !1]], 0), () => $([!0, !1])).add(ct, () => ct([-1, 0, 5]), () => !0).add(ct, () => ct(NaN), () => !1);
  const xt = Math.E,
    _t = NaN,
    zt = Math.PI,
    vt = 1 / 0,
    $t = -1 / 0,
    At = Ze("sin", Math.sin),
    Mt = Ze("cos", Math.cos),
    Nt = Ze("tan", Math.tan),
    kt = Ze("arcsin", Math.asin),
    It = Ze("arccos", Math.acos),
    qt = Ze("arctan", Math.atan),
    St = Ze("hypot", Math.hypot),
    jt = Ze("arctan2", Math.atan2),
    Ot = Ze("degrees", e => 180 * e / zt),
    Et = Ze("radians", e => e / 180 * zt);
  function Dt(e, t = 2 * zt, a = t / 2) {
    if (1 != (e = O(e)).ndim) throw "unwrap currently only supports 1d arrays";
    let r = [e.data[e.offset]],
      n = e.data[e.offset],
      l = !0;
    for (let s of j(e.shape, e.strides)) {
      if (l) {
        l = !1;
        continue;
      }
      let i = e.data[e.offset + s] - n;
      i > a ? i -= t : i < -a && (i += t);
      let d = n + i;
      r.push(d), n = d;
    }
    return O(r);
  }
  const Ft = Ze("rad2deg", e => 180 * e / zt),
    Tt = Ze("deg2rad", e => e / 180 * zt),
    Rt = Ze("sinh", Math.sinh),
    Pt = Ze("cosh", Math.cosh),
    Kt = Ze("tanh", Math.tanh),
    Gt = Ze("arcsinh", Math.asinh),
    Vt = Ze("arccosh", Math.acosh),
    Yt = Ze("arctanh", Math.atanh),
    Xt = Ze("_around", ({
      decimals: e
    }, t) => {
      let a = 10 ** e,
        r = t * a,
        n = Math.round(r),
        l = r % 1;
      return .5 != l && -.5 != l || (n = n % 2 ? n - 1 : n), n / a;
    }, !0),
    Jt = function (e, t = 0, a) {
      return Xt(e, a, {
        decimals: t
      });
    },
    Wt = Ze("rint", e => {
      let t = e % 1,
        a = Math.round(e);
      return .5 != t && -.5 != t || (a = a % 2 ? a - 1 : a), a;
    }),
    Ht = Ze("fix", e => Math.sign(e) * Math.floor(Math.abs(e))),
    Lt = Ze("floor", Math.floor),
    Ut = Ze("ceil", Math.ceil),
    Ct = Ze("trunc", Math.trunc),
    Bt = rt("prod", (e, t) => e * t, 1, 1),
    Qt = rt("sum", (e, t) => e + t, 1, 0),
    Zt = rt("nanprod", (e, t) => e * (isNaN(t) ? 1 : t), 1, 1),
    ea = rt("nansum", (e, t) => e + (isNaN(t) ? 0 : t), 1, 0),
    ta = tt("cumprod", (e, t) => e * t, 1),
    aa = tt("cumsum", (e, t) => e + t, 0),
    ra = null,
    na = null;
  function la(e, t = 1, a = -1) {
    e = O(e);
    let {
      ndim: r
    } = e;
    a = Oe(a, r);
    let n = Array(r).fill(u()),
      l = Array(r).fill(u());
    n[a] = u(1, null), l[a] = u(null, -1);
    for (let a = 0; a < t; a++) e = lt(e.get(...n), e.get(...l));
    return e;
  }
  function sa(e, t = null, a = null) {
    if (e = la(T(e, -1)), null != a || null != t) {
      let r = [];
      null != a && r.push(a), r.push(e), null != t && r.push(t), e = Ie(r, null);
    }
    return e;
  }
  const ia = Ze("exp", Math.exp, 1),
    da = Ze("expm1", e => Math.exp(e) - 1),
    oa = Ze("exp2", e => 2 ** e),
    ua = Ze("log", Math.log),
    ha = Ze("log10", Math.log10),
    fa = Ze("log2", Math.log2),
    pa = Ze("log1p", Math.log1p),
    ca = et("logaddexp", (e, t) => Math.log(Math.exp(e) + Math.exp(t))),
    ma = et("logaddexp2", (e, t) => Math.log2(2 ** e + 2 ** t)),
    ga = Ze("signbit", e => e < 0),
    ya = et("copysign", (e, t) => t < 0 ? -Math.abs(e) : Math.abs(e)),
    wa = et("ldexp", (e, t) => e * 2 ** t),
    ba = Ze("positive", e => +e),
    xa = Ze("negative", e => -e);
  function _a(e, t) {
    for (; 0 != t;) {
      let a = t;
      t = e % t, e = a;
    }
    return e;
  }
  const za = et("lcm", function (e, t) {
      return e * t / _a(e, t);
    }),
    va = et("gcd", _a),
    $a = Ze("reciprocal", e => 1 / e),
    Aa = et("fmod", (e, t) => e - (e / t | 0) * t),
    Ma = et("maximum", Math.max),
    Na = et("minimum", Math.min),
    ka = rt("amax", Math.max, 1, -vt),
    Ia = rt("amin", Math.min, 1, vt),
    qa = Ze("sqrt", Math.sqrt),
    Sa = Ze("cbrt", Math.cbrt),
    ja = Ze("square", e => e ** 2),
    Oa = Ze("abs", Math.abs),
    Ea = Oa,
    Da = Ze("sign", Math.sign),
    Fa = Ze("nan_to_num", e => isNaN(e) ? 0 : e == 1 / 0 ? Number.MAX_VALUE : e == -1 / 0 ? Number.MIN_VALUE : e);
  s.add(ka, () => ka(Y(4).reshape(2, 2)), () => 3).add(ka, () => ka(Y(4).reshape(2, 2), 0), () => $([2, 3])).add(ka, () => ka(Y(4).reshape(2, 2), 1), () => $([1, 3])), s.add(Ma, () => Ma([2, 3, 4], [1, 5, 2]), () => $([2, 5, 4])).add(Ma, () => Ma(ne(2), [.5, 2]), () => $([[1, 2], [.5, 2]])), s.add(Aa, () => Aa([-3, -2, -1, 1, 2, 3], 2), () => $([-1, 0, -1, 1, 0, 1])).add(Aa, () => ht([-3, -2, -1, 1, 2, 3], 2), () => $([1, 0, 1, 1, 0, 1])), s.add(va, () => va(12, 20), () => 4).add(va, () => va(Y(6), 20), () => $([20, 1, 2, 1, 4, 5])), s.add(za, () => za(12, 20), () => 60).add(za, () => za(Y(6), 20), () => $([0, 20, 20, 60, 20, 20])), s.add(ya, () => ya(1.3, -1), () => -1.3).add(ya, () => 1 / ya(0, 1), () => 1 / 0).add(ya, () => 1 / ya(0, -1), () => -1 / 0), s.add(ga, () => ga(-1.2), () => !0).add(ga, () => ga($([1, -2.3, 2.1])), () => $([!1, !0, !1])), s.add(ca, () => {
    let e = ua(1e-50),
      t = ua(2.5e-50);
    return ca(e, t);
  }, () => -113.87649168120691), s.add(Dt, () => Dt([0, 1, 2, -1, 0], 4), () => $([0, 1, 2, 3, 4])).add(Dt, () => Dt([1, 2, 3, 4, 5, 6, 1, 2, 3], 6), () => $([1, 2, 3, 4, 5, 6, 7, 8, 9])).add(Dt, () => Dt([2, 3, 4, 5, 2, 3, 4, 5], 4), () => $([2, 3, 4, 5, 6, 7, 8, 9])), s.add(Jt, () => Jt([.37, 1.64]), () => $([0, 2])).add(Jt, () => Jt([.37, 1.64], 1), () => $([.4, 1.6])).add(Jt, () => Jt([.5, 1.5, 2.5, 3.5, 4.5]), () => $([0, 2, 2, 4, 4])).add(Jt, () => Jt([5, 15, 25, 35, 45], -1), () => $([0, 20, 20, 40, 40])).add(Jt, () => Jt([-5, -15, -25, -35, -45], -1), () => $([0, -20, -20, -40, -40])).add(Jt, () => Jt([1, 2, 3, 11], 1), () => $([1, 2, 3, 11])).add(Jt, () => Jt([1, 2, 3, 11], -1), () => $([0, 0, 0, 10])), s.add(Wt, () => Wt($([-1.7, -1.5, -.2, .2, 1.5, 1.7, 2])), () => $([-2, -2, -0, 0, 2, 2, 2])), s.add(Ht, () => Ht(3.14), () => 3).add(Ht, () => Ht(3), () => 3).add(Ht, () => Ht([2.1, 2.9, -2.1, -2.9]), () => $([2, 2, -2, -2])), s.add(Bt, () => Bt([]), () => 1).add(Bt, () => Bt([1, 2]), () => 2).add(Bt, () => Bt($([[1, 2], [3, 4]])), () => 24).add(Bt, () => Bt($([[1, 2], [3, 4]]), 1), () => $([2, 12])).add(Bt, () => Bt($([[1, 2], [3, 4]]), 0), () => $([3, 8])).add(Bt, () => Bt([1, 2], null, null, null, 5), () => 10), s.add(Qt, () => Qt([.5, 1.5]), () => 2).add(Qt, () => Qt([[0, 1], [0, 5]]), () => 6).add(Qt, () => Qt([[0, 1], [0, 5]], 0), () => $([0, 6])).add(Qt, () => Qt([[0, 1], [0, 5]], 1), () => $([1, 5])).add(Qt, () => Qt([10], null, null, null, 5), () => 15).add(Qt, () => Qt(Y(100).reshape(5, -1, 1).get(u("::-2"), u("2:7")), [0, -1]), () => $([126, 129, 132, 135, 138])).add(Qt, () => {
    let e = Y(100);
    return e = e.get(u(20, -20)).reshape([2, 1, -1, 2]).get(u("..."), u("::-1")), Qt(e, [1, -2], null, !0, -99);
  }, () => $([[[[426, 411]]], [[[876, 861]]]])), s.add(Zt, () => Zt(1), () => 1).add(Zt, () => Zt([1]), () => 1).add(Zt, () => Zt([1, _t]), () => 1).add(Zt, () => Zt($([[1, 2], [3, _t]])), () => 6).add(Zt, () => Zt($([[1, 2], [3, _t]]), 0), () => $([3, 2])), s.add(ea, () => ea(1), () => 1).add(ea, () => ea([1]), () => 1).add(ea, () => ea([1, _t]), () => 1).add(ea, () => ea($([[1, 1], [1, _t]])), () => 3).add(ea, () => ea($([[1, 1], [1, _t]]), 0), () => $([2, 1])).add(ea, () => ea([1, _t, vt]), () => vt).add(ea, () => ea([1, _t, $t]), () => -vt), s.add(ta, () => ta($([1, 2, 3])), () => $([1, 2, 6])).add(ta, () => ta($([[1, 2, 3], [4, 5, 6]])), () => $([1, 2, 6, 24, 120, 720])).add(ta, () => ta($([[1, 2, 3], [4, 5, 6]]), 0), () => $([[1, 2, 3], [4, 10, 18]])).add(ta, () => ta($([[1, 2, 3], [4, 5, 6]]), 1), () => $([[1, 2, 6], [4, 20, 120]])), s.add(aa, () => aa($([[1, 2, 3], [4, 5, 6]])), () => $([1, 3, 6, 10, 15, 21])).add(aa, () => aa($([[1, 2, 3], [4, 5, 6]]), 0), () => $([[1, 2, 3], [5, 7, 9]])).add(aa, () => aa($([[1, 2, 3], [4, 5, 6]]), 1), () => $([[1, 3, 6], [4, 9, 15]])), s.add(la, () => la($([1, 2, 4, 7, 0])), () => $([1, 2, 3, -7])).add(la, () => la($([1, 2, 4, 7, 0]), 2), () => $([1, 1, -10])).add(la, () => la($([[1, 3, 6, 10], [0, 5, 6, 8]])), () => $([[2, 3, 4], [5, 1, 2]])).add(la, () => la($([[1, 3, 6, 10], [0, 5, 6, 8]]), 1, 0), () => $([[-1, 2, 0, -2]])), s.add(sa, () => sa($([1, 2, 4, 7, 0])), () => $([1, 2, 3, -7])).add(sa, () => sa($([1, 2, 4, 7, 0]), $([88, 99]), -99), () => $([-99, 1, 2, 3, -7, 88, 99])).add(sa, () => sa([[1, 2, 4], [1, 6, 24]]), () => $([1, 2, -3, 5, 18])), s.add(Oa, () => Oa($([-1.2, 1.2])), () => $([1.2, 1.2])), s.add(At, () => At(Y(30).reshape(2, 5, 1, -1, 1)).shape, () => $([[[[[0], [.8414709848078965], [.9092974268256817]]], [[[.1411200080598672], [-.7568024953079282], [-.9589242746631385]]], [[[-.27941549819892586], [.6569865987187891], [.9893582466233818]]], [[[.4121184852417566], [-.5440211108893698], [-.9999902065507035]]], [[[-.5365729180004349], [.4201670368266409], [.9906073556948704]]]], [[[[.6502878401571168], [-.2879033166650653], [-.9613974918795568]]], [[[-.7509872467716762], [.14987720966295234], [.9129452507276277]]], [[[.8366556385360561], [-.008851309290403876], [-.8462204041751706]]], [[[-.9055783620066238], [-.13235175009777303], [.7625584504796028]]], [[[.956375928404503], [.27090578830786904], [-.6636338842129675]]]]]).shape);
  const Ta = Ze("invert", e => ~e),
    Ra = Ta,
    Pa = et("bitwise_and", (e, t) => e & t),
    Ka = et("bitwise_or", (e, t) => e | t),
    Ga = et("bitwise_xor", (e, t) => e ^ t),
    Va = et("left_shift", (e, t) => e << t),
    Ya = et("right_shift", (e, t) => e >> t);
  s.add(Ta, () => Ta([13]), () => $([-14])), s.add(Pa, () => Pa(13, 17), () => 1).add(Pa, () => Pa([11, 7], [4, 25]), () => $([0, 1])).add(Pa, () => Pa($([2, 5, 255]), $([3, 14, 16])), () => $([2, 4, 16])).add(Pa, () => Pa([!0, !0], [!1, !0]), () => $([!1, !0])), s.add(Ka, () => Ka([33, 4], 1), () => $([33, 5])), s.add(Ga, () => {
    let e = [1, 2, 3],
      t = [4, 5, 6];
    return e = Ga(e, t), t = Ga(e, t), e = Ga(e, t), [e, t];
  }, () => [[4, 5, 6], [1, 2, 3]]), s.add(Va, () => Va(5, [1, 2, 3]), () => $([10, 20, 40])), s.add(Ya, () => Ya(10, [1, 2, 3]), () => $([5, 2, 1]));
  const Xa = et("equal", (e, t) => e == t),
    Ja = et("not_equal", (e, t) => e != t),
    Wa = et("less_equal", (e, t) => e <= t),
    Ha = et("less_equal", (e, t) => e < t),
    La = et("less_equal", (e, t) => e >= t),
    Ua = et("less_equal", (e, t) => e > t);
  function Ca(e, t, a = null, r = 1) {}
  function Ba(e, t, a = -1, r = a, n = a, l = a) {
    e = O(e), t = O(t), r = Oe(r, e.ndim), n = Oe(n, t.ndim), e = qe(e, r, -1), t = qe(t, n, -1);
    let s = e.shape.at(-1),
      i = t.shape.at(-1);
    if (2 != s && 3 != s || 2 != i && 3 != i) throw "incompatible dimensions for cross product (dimension must be 2 or 3)";
    let d = V(e.shape.slice(0, -1), t.shape.slice(0, -1));
    3 != e.shape.at(-1) && 3 != t.shape.at(-1) || (d = [...d, 3], l = Oe(l, d.length));
    let o,
      u,
      h,
      f,
      p,
      c,
      m,
      g,
      y,
      w = E(d);
    if (o = e.get("...", 0), u = e.get("...", 1), 3 == e.shape.at(-1) && (h = e.get("...", 2)), f = t.get("...", 0), p = t.get("...", 1), 3 == t.shape.at(-1) && (c = t.get("...", 2)), 0 != w.ndim && 3 == w.shape.at(-1) && (m = w.get("...", 0), g = w.get("...", 1), y = w.get("...", 2)), 2 == e.shape.at(-1)) {
      if (2 == t.shape.at(-1)) return st(o, p, w), lt(w, st(u, f), w), w;
      if (3 != t.shape.at(-1)) throw "b.shape.at(-1) != 3";
      st(u, c, m), st(o, c, g), xa(g, g), st(o, p, y), lt(y, st(u, f), y);
    } else {
      if (3 != e.shape.at(-1)) throw "a.shape.at(-1) != 3";
      if (3 == t.shape.at(-1)) {
        st(u, c, m);
        let e = st(h, p);
        lt(m, e, m), st(h, f, g), st(o, c, e), lt(g, e, g), st(o, p, y), st(u, f, e), lt(y, e, y);
      } else {
        if (2 != t.shape.at(-1)) throw "b.shape.at(-1) != 2";
        st(h, p, m), xa(m, m), st(h, f, g), st(o, p, y), lt(y, st(u, f), y);
      }
    }
    return qe(w, -1, l);
  }
  function Qa(e, t = null, a = 1, r = -1) {
    e = O(e);
    let {
      ndim: n
    } = e;
    r = Oe(r, n);
    let l = a;
    if (null != t) if (1 == (t = O(t)).ndim) {
      l = la(t);
      let e = Array(n).fill(1);
      e[r] = l.shape[0], l = l.reshape(e);
    } else l = la(t, null, r);
    let s,
      i = Array(n).fill(u()),
      d = Array(n).fill(u());
    return i[r] = u(1, null), d[r] = u(null, -1), s = nt(e.get(...i), e.get(...d)), st(l, s, s), it(s, 2, s), Qt(s, r);
  }
  function Za(e, t, a = "full") {
    if (e = Z(e), t = Z(t), 0 == e.size) throw "a cannot be empty";
    if (0 == t.size) throw "v cannot be empty";
    if (e.ndim > 1 || t.ndim > 1) throw "object too deep for desired array";
    if (t.ndim > e.ndim) {
      let a = e;
      e = t, t = a;
    }
    let r = e.size;
    if ("valid" == a) r += 1 - t.size;else if ("full" == a) r += t.size - 1;else if ("same" != a) throw `mode must be one of 'valid', 'same', or 'full' (got '${a}')`;
    let n = Array(r),
      l = 0;
    if ("valid" != a) for (let a = 0; a < t.size - 1; a++) {
      let r = 0;
      for (let n = a + 1, l = 0; n--; l++) r += e.item(l) * t.item(n);
      n[l++] = r;
    }
    for (let a = 0; a < e.size + 1 - t.size; a++) {
      let r = 0;
      for (let n = 0, l = t.size - 1; n < t.size; n++, l--) r += e.item(a + n) * t.item(l);
      n[l++] = r;
    }
    if ("valid" != a) for (let a = 0; a < t.size - 1; a++) {
      let r = 0;
      for (let n = 0; n < t.size - 1 - a; n++) r += e.item(e.size - t.size + 1 + a + n) * t.item(t.size - 1 - n);
      n[l++] = r;
    }
    return "same" == a && (n = n.slice((t.size - 1) / 2 | 0, ((t.size - 1) / 2 | 0) + r)), new z([r], n);
  }
  function er(e, t, a, r = null) {
    if (e = O(e), null == r) r = D(e);else if (!Ae(e.shape, r.shape)) throw "out shape does not match input shape";
    if (h(t) && h(a)) {
      let n = j(e.shape, e.strides);
      for (let l of j(r.shape, r.strides)) r.data[l] = Math.min(Math.max(t, e.data[n.next().value]), a);
      return r;
    }
    t = k(t, e.shape), a = k(a, e.shape);
    let n = j(e.shape, e.strides),
      l = j(t.shape, t.strides),
      s = j(a.shape, a.strides);
    for (let i of j(r.shape, r.strides)) r.data[i] = Math.min(Math.max(t.data[l.next().value], e.data[n.next().value]), a.data[s.next().value]);
    return r;
  }
  function tr(e, t = -1, a = null) {
    e = O(e), null == t ? (e = xe(e), t = 0) : t = Oe(t, e.ndim);
    let r = D(e),
      n = Array(e.shape[t]),
      l = Array(e.shape[t]),
      s = (e, t) => n[e] - n[t],
      i = e.shape.slice();
    i[t] = 1;
    for (let d of q(i)) {
      let {
          offset: o
        } = e,
        {
          offset: u
        } = r;
      for (let t = 0; t < i.length; t++) o += d[t] * e.strides[t], u += d[t] * r.strides[t];
      for (let r = 0; r < e.shape[t]; r++) {
        let s = e.data[o + r * e.strides[t]];
        n[r] = null != a ? a(s) : s, l[r] = r;
      }
      l.sort(s);
      for (let a = 0; a < e.shape[t]; a++) r.data[u + a * r.strides[t]] = l[a];
    }
    return r;
  }
  function ar(e, t = -1, a = null) {
    e = O(e), null == t ? (e = xe(e), t = 0) : t = Oe(t, e.ndim);
    let r = D(e),
      n = Array(e.shape[t]),
      l = (e, t) => e - t,
      s = e.shape.slice();
    s[t] = 1;
    for (let i of q(s)) {
      let {
          offset: d
        } = e,
        {
          offset: o
        } = r;
      for (let t = 0; t < s.length; t++) d += i[t] * e.strides[t], o += i[t] * r.strides[t];
      for (let r = 0; r < e.shape[t]; r++) {
        let l = e.data[d + r * e.strides[t]];
        n[r] = null != a ? a(l) : l;
      }
      n.sort(l);
      for (let a = 0; a < e.shape[t]; a++) r.data[o + a * r.strides[t]] = n[a];
    }
    return r;
  }
  function rr(e, t, a, r = null, n = null, l = null) {
    if ([e, t, a] = [e, t, a].map(O), 1 != t.ndim || 1 != a.ndim) throw "Data points must be 1-D sequences";
    if (t.shape[0] != a.shape[0]) throw "fp and xp are not of the same length";
    if (null != l) {
      e = ut(e, l);
      let r = tr(t = ut(t, l));
      t = t.get(r), a = a.get(r), t = Ie([lt(t.get(u(-1)), l), t, nt(t.get(u(0, 1)), l)]), a = Ie([a.get(u(-1)), a, a.get(u(0, 1))]);
    }
    r ??= a.item(0), n ??= a.item(-1);
    let s = Array(e.size),
      i = 0,
      d = t.item(0),
      o = t.item(-1);
    for (let l of e.flat) {
      let e;
      if (l < d) e = r;else if (l > o) e = n;else {
        let r = 1;
        for (; r < t.length && l > t.item(r); r++);
        let n = t.item(r - 1);
        if (l == n) e = a.item(r - 1);else {
          let s = t.item(r);
          if (l == s) e = a.item(r);else {
            let t = a.item(r - 1);
            e = (l - n) * (a.item(r) - t) / (s - n) + t;
          }
        }
      }
      s[i++] = e;
    }
    return new z(e.shape, s);
  }
  function nr(e) {
    let t = Array(e.length),
      a = t[0] = e[0];
    for (let r = 1; r < e.length; r++) t[r] = a += e[r];
    return t;
  }
  function lr(e) {
    let t = 0;
    for (let a = 0; a < e.length; a++) t += e[a];
    return t;
  }
  function sr(e, t, a) {
    let r = a() * t,
      n = e.length - 1;
    for (let t = 0; t < n; t++) if (r -= e[t], r < 0) return t;
    return n;
  }
  function ir(e, t, a) {
    let r = a() * t,
      n = 0,
      l = e.length - 1;
    for (; n < l;) {
      let t = n + l >> 1;
      r > e[t] ? n = t + 1 : l = t;
    }
    return n;
  }
  function dr(e) {
    let t = e.length,
      a = [],
      r = [],
      n = t / lr(e);
    e = e.map(e => e * n);
    for (let n = 0; n < t; n++) e[n] < 1 ? a.push(n) : r.push(n);
    let l = Array(t),
      s = Array(t);
    for (; a.length > 0 && r.length > 0;) {
      let t = a.pop(),
        n = r.pop();
      l[t] = e[t], s[t] = n, e[n] = e[n] + e[t] - 1, e[n] < 1 ? a.push(n) : r.push(n);
    }
    for (; r.length > 0;) l[r.pop()] = 1;
    for (; a.length > 0;) l[a.pop()] = 1;
    return {
      n: t,
      prob: l,
      alias: s
    };
  }
  function or(e, t, a, r) {
    let n = r() * e | 0;
    return r() < t[n] ? n : a[n];
  }
  function ur(e) {
    let t = e.length,
      a = Math.ceil(Math.log2(t)),
      r = 1 << a,
      n = Array(2 * r - 1),
      l = r - 1;
    for (let a = 0; a < t; a++) n[l + a] = e[a];
    for (let e = t; e < r; e++) n[l + e] = 0;
    let s = l;
    for (; r > 1;) {
      let e = s;
      s -= r >>= 1;
      for (let t = 0; t < r; t++) n[s + t] = n[e] + n[e + 1], e += 2;
    }
    return {
      tree: n,
      level: a,
      offset: l
    };
  }
  function hr(e, t, a, r) {
    let n = r - e[a += t];
    for (; a >= 0;) e[a] += n, a = a - 1 >> 1;
  }
  function fr(e, t, a, r) {
    let n = r() * e[0],
      l = 1;
    for (; --t;) n > e[l] && (n -= e[l++]), l = 2 * l + 1;
    return n > e[l] && l++, l - a;
  }
  function pr(e, t = null, a = !0, r = "auto", n = Array(e), l = Math.random) {
    let s = t.length;
    if (a ||= 1 == e, a) switch ("auto" == r && (r = 1 == e || e * s < 600 ? "linear" : e > (s > 100 ? 2 * s : 50) ? "alias" : "binary"), r) {
      case "linear":
        {
          let a = lr(t);
          for (let r = 0; r < e; r++) n[r] = sr(t, a, l);
          break;
        }
      case "binary":
        {
          let a = nr(t),
            r = a.at(-1);
          for (let t = 0; t < e; t++) n[t] = ir(a, r, l);
          break;
        }
      case "alias":
        {
          let {
            n: a,
            prob: r,
            alias: s
          } = dr(t);
          for (let t = 0; t < e; t++) n[t] = or(a, r, s, l);
          break;
        }
      case "sumtree":
        {
          let {
            tree: a,
            level: r,
            offset: s
          } = ur(t);
          for (let t = 0; t < e; t++) n[t] = fr(a, r, s, l);
          break;
        }
      default:
        throw `unexpected method '${r}'`;
    } else {
      if (e > t) throw "size > p is not allowed when replace = true";
      switch ("auto" == r && (r = s + e < 150 ? "linear" : s + e < 200 ? "binary" : "sumtree"), r) {
        case "linear":
          {
            let a = lr(t);
            t = t.slice();
            for (let r = 0; r < e; r++) {
              let e = n[r] = sr(t, a, l);
              a -= t[e], t[e] = 0;
            }
            break;
          }
        case "binary":
          {
            let a = nr(t),
              r = a.at(-1);
            for (let s = 0; s < e; s++) {
              let e = n[s] = ir(a, r, l),
                i = t[s];
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
              alias: s
            } = dr(t);
            t[n[a] = or(e, r, s, l)] = 0;
          }
          break;
        case "sumtree":
          {
            let {
              tree: a,
              level: r,
              offset: s
            } = ur(t);
            for (let t = 0; t < e; t++) hr(a, s, n[t] = fr(a, r, s, l), 0);
            break;
          }
        default:
          throw `unexpected method '${r}'`;
      }
    }
    return n;
  }
  function cr(e, t = null, a = !0, r = null) {
    if (1 != (e = "number" == typeof e ? Y(e) : O(e)).ndim) throw "'p' must be 1-dimensional";
    if (0 == e.size) throw "'a' cannot be empty unless no samples are taken";
    if (null == r) r = Array(e.size).fill(1 / e.size);else {
      if (1 != (r = O(r)).ndim) throw "'p' must be 1-dimensional";
      if (r.size != e.size) throw "'a' and 'p' must have same size";
      r = r.toarray();
    }
    if (e = e.toarray(), null == t) return e[pr(1, r)[0]];
    "number" == typeof t && (t = [t]);
    let n = function (e) {
      let t = 1;
      for (let a of e) t *= a;
      return t;
    }(t);
    if ($e(r) < n) throw "Fewer non-zero entries in p than size";
    let l = pr(n, r, a).map(t => e[t]);
    return new z(t, l);
  }
  function mr(e = null) {
    if (null == e) return Math.random();
    "number" == typeof e && (e = [e]);
    let t = function (e) {
        let t = 1;
        for (let a of e) t *= a;
        return t;
      }(e),
      a = Array(t);
    for (let e = 0; e < t; e++) a[e] = Math.random();
    return new z(e, a);
  }
  s.add(Xa, () => Xa([0, 1, 3], Y(3)), () => $([!0, !0, !1])).add(Xa, () => Xa(1, H(1)), () => $([!0])).add(Xa, () => Xa($([2, 4, 6]), $([2, 4, 2])), () => $([!0, !0, !1])), s.add(Ja, () => Ja([1, 2], [1, 3]), () => $([!1, !0])).add(Ja, () => Ja([1, 2], [[1, 3], [1, 4]]), () => $([[!1, !0], [!1, !0]])), s.add(Wa, () => Wa([4, 2, 1], [2, 2, 2]), () => $([!1, !0, !0])), s.add(Ha, () => Ha([1, 2], [2, 2]), () => $([!0, !1])), s.add(La, () => La([4, 2, 1], [2, 2, 2]), () => $([!0, !0, !1])), s.add(Ua, () => Ua([4, 2], [2, 2]), () => $([!0, !1])), s.add(Ba, () => Ba([1, 2, 3], [4, 5, 6]), () => $([-3, 6, -3])).add(Ba, () => Ba([1, 2], [4, 5, 6]), () => $([12, -6, -3])).add(Ba, () => Ba([1, 2, 0], [4, 5, 6]), () => $([12, -6, -3])).add(Ba, () => Ba([1, 2], [4, 5]), () => $(-3)).add(Ba, () => Ba($([[1, 2, 3], [4, 5, 6]]), $([[4, 5, 6], [1, 2, 3]])), () => $([[-3, 6, -3], [3, -6, 3]])).add(Ba, () => Ba($([[1, 2, 3], [4, 5, 6]]), $([[4, 5, 6], [1, 2, 3]]), void 0, void 0, void 0, 0), () => $([[-3, 3], [6, -6], [-3, 3]])).add(Ba, () => {
    let e = $([[1, 2, 3], [4, 5, 6], [7, 8, 9]]),
      t = $([[7, 8, 9], [4, 5, 6], [1, 2, 3]]);
    return [Ba(e, t), Ba(e, t, void 0, 0, 0)];
  }, () => [$([[-6, 12, -6], [0, 0, 0], [6, -12, 6]]), $([[-24, 48, -24], [-30, 60, -30], [-36, 72, -36]])]), s.add(Qa, () => Qa([1, 2, 3]), () => 4).add(Qa, () => Qa([1, 2, 3], [4, 6, 8]), () => 8).add(Qa, () => Qa([1, 2, 3], null, 2), () => 8).add(Qa, () => Qa([1, 2, 3], [8, 6, 4]), () => -8).add(Qa, () => Qa(Y(6).reshape(2, 3), void 0, void 0, 0), () => $([1.5, 2.5, 3.5])).add(Qa, () => Qa(Y(6).reshape(2, 3), void 0, void 0, 1), () => $([2, 8])), s.add(Za, () => Za([1, 2, 3], [0, 1, .5]), () => $([0, 1, 2.5, 4, 1.5])).add(Za, () => Za([1, 2, 3], [1, .5], "full"), () => $([1, 2.5, 4, 1.5])).add(Za, () => Za([1, 2, 3], [0, 1, .5], "same"), () => $([1, 2.5, 4])).add(Za, () => Za([1, 2, 3], [0, 1, .5], "valid"), () => $([2.5])), s.add(er, () => er(Y(10), 1, 8), () => $([1, 1, 2, 3, 4, 5, 6, 7, 8, 8])).add(er, () => er(Y(10), 8, 1), () => $([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).add(er, () => {
    let e = Y(10);
    return [er(e, 3, 6, e), e];
  }, () => [$([3, 3, 3, 3, 4, 5, 6, 6, 6, 6]), $([3, 3, 3, 3, 4, 5, 6, 6, 6, 6])]).add(er, () => er(Y(10), [3, 4, 1, 1, 1, 4, 4, 4, 4, 4], 8), () => $([3, 4, 2, 3, 4, 5, 6, 7, 8, 8])), tr($([[[0, 3], [2, 2], [2, 2]], [[8, 5], [4, 1], [6, -2]]]), 0), s.add(tr, () => tr([3, 1, 2]), () => $([1, 2, 0])).add(tr, () => tr($([[0, 3], [2, 2]]), 0), () => $([[0, 1], [1, 0]])).add(tr, () => tr($([[0, 3], [2, 2]]), 1), () => $([[0, 1], [0, 1]])).add(tr, () => tr($([[[0, 3], [2, 2], [2, 2]], [[8, 5], [4, 1], [6, -2]]]), 0), () => $([[[0, 0], [0, 1], [0, 1]], [[1, 1], [1, 0], [1, 0]]])).add(tr, () => tr($([[[0, 3], [2, 2], [2, 2]], [[8, 5], [4, 1], [6, -2]]]), 1), () => $([[[0, 1], [1, 2], [2, 0]], [[1, 2], [2, 1], [0, 0]]])).add(tr, () => tr($([[[0, 3], [2, 2], [2, 2]], [[8, 5], [4, 1], [6, -2]]]), 2), () => $([[[0, 1], [0, 1], [0, 1]], [[1, 0], [1, 0], [1, 0]]])), s.add(ar, () => ar($([[1, 4], [3, 1]])), () => $([[1, 4], [1, 3]])).add(ar, () => ar($([[1, 4], [3, 1]]), null), () => $([1, 1, 3, 4])).add(ar, () => ar($([[1, 4], [3, 1]]), 0), () => $([[1, 1], [3, 4]])), s.add(rr, () => rr(2.5, [1, 2, 3], [3, 2, 0]), () => 1).add(rr, () => rr(4.5, [6, 4, 5], [3, 2, 0]), () => 3).add(rr, () => rr([0, 1, 1.5, 2.5, 3.14], [1, 2, 3], [3, 2, 0]), () => $([3, 3, 2.5, 1, 0])).add(rr, () => rr([-180, -170, -185, 185, -10, -5, 0, 365], [190, -190, 350, -350], [5, 10, 3, 4], null, null, 360), () => $([7.5, 5, 8.75, 6.25, 3, 3.25, 3.5, 3.75]));
  const gr = mr,
    yr = mr;
  function wr(...e) {
    return mr(e);
  }
  function br(e) {
    let t = 1;
    for (let a of e) t *= a;
    return t;
  }
  function xr(e, t = null, a = null, r = !0) {
    if (null != a) {
      if (!U(a)) throw "output array must be contiguous";
      null == t && (t = a.shape);
    }
    let n;
    if (null == t) {
      if (r) return e();
      n = [], t = 1;
    } else "number" == typeof t ? n = [t] : (n = t, t = br(n));
    if (null == a) a = E(n);else if (!Ae(n, a.shape)) throw "size must match out.shape when used together";
    let {
      data: l,
      offset: s
    } = a;
    for (let a = 0; a < t; a++) l[s + a] = e();
    return a;
  }
  class _r {
    constructor(e = Math.random) {
      this.rand = e;
    }
    integers(e, t = null, a = null, r = !1) {
      null == t && (t = e, e = 0);
      let n = t - e;
      return r && (n += 1), xr(() => this.rand() * n + e | 0, a);
    }
    random(e = null, t = null) {
      return xr(() => this.rand(), e, t);
    }
    choice(e, t = null, a = !0, r = null, n = 0) {
      if ("number" == typeof e) {
        if (e <= 0) throw "a must be a positive integer unless no samples are taken";
        e = Y(e);
      } else if (0 == (e = O(e)).size) throw "a cannot be empty unless no samples are taken";
      if (null == r) r = Array(e.shape[n]).fill(1 / e.shape[n]);else {
        if (1 != (r = O(r)).ndim) throw "p must be 1-dimensional";
        if (r.size != e.shape[n]) throw "a and p must have same size";
        r = r.toarray();
      }
      let l = Array(n).fill(u());
      if (null == t) return l[n] = pr(1, r, void 0, void 0, void 0, this.rand)[0], e._getview(l).copy();
      let s = t;
      if ("number" == typeof t && (s = [t]), t = br(s), r.length < t) throw "Cannot take a larger sample than population when replace is false";
      if ($e(r) < t) throw "Fewer non-zero entries in p than size";
      let i = [...e.shape];
      i.splice(n, 1, ...s);
      let d = Array(n).fill(u()),
        o = E(i),
        h = pr(t, r, a, void 0, void 0, this.rand),
        f = 0;
      for (let t of q(s)) {
        for (let e = 0; e < t.length; e++) d[n + e] = t[e];
        l[n] = h[f++], o.set(d, e._getview(l));
      }
      return o;
    }
    shuffle(e, t = 0) {
      t = Oe(t, (e = O(e)).ndim);
      let a = Array(t + 1).fill(u(":")),
        {
          shape: r
        } = e,
        n = r[t],
        l = E([...r.slice(0, t), ...r.slice(t + 1)]);
      for (let r = 0; r < n - 2; r++) {
        let s = this.rand() * (n - r) + r | 0;
        a[t] = r;
        let i = e._getview(a);
        a[t] = s;
        let d = e._getview(a);
        l.set(i), i.set(d), d.set(l);
      }
    }
    permuted(e, t = null, a = null) {
      t = Oe(t, (e = O(e)).ndim);
      let r = [...e.shape];
      r[t] = 1, null == a && (a = D(e));
      for (let n of q(r)) {
        n[t] = u();
        let r = e._getview(n).flatten();
        this.shuffle(r), a.set(n, r);
      }
      return a;
    }
    permutation(e, t = 0) {
      return e = "number" == typeof e ? Y(e) : $(e), this.shuffle(e, t), e;
    }
    uniform(e = 0, t = 1, a = null) {
      return xr(() => this.rand() * (t - e) + e, a);
    }
    normal(e = 0, t = 1, a = null) {
      return xr(() => {
        let a = this.rand(),
          r = this.rand(),
          n = Math.sqrt(-2 * Math.log(a)) * Math.cos(2 * Math.PI * r);
        return e + t * n;
      }, a);
    }
  }
  const zr = new _r();
  function vr(e, t = null, a = null) {
    if (null == t && null == a) return ge(e);
    let r = re(e, t, a),
      n = E(r.shape),
      l = 0;
    for (let [e, t, a] of r) n.data[l++] = e ? t : a;
    return n;
  }
  function $r(...e) {
    let t = [];
    for (let a = 0; a < e.length; a++) {
      let {
          start: r,
          stop: n,
          step: l,
          slicelength: s
        } = e[a]._get(),
        i = Array(s);
      for (let e = 0; e < s; e++) i[e] = r + e * l;
      let d = Array(e.length).fill(1);
      d[a] = s, t.push(new z(d, i));
    }
    return t;
  }
  function Ar(e, t = null, a = null, r = !1) {
    e = O(e), null == t ? (e = xe(e), t = 0) : t = Oe(t, e.ndim);
    let n = [...e.shape.slice(0, t), ...(r ? [1] : []), ...e.shape.slice(t + 1)];
    if (null == a) a = E(n);else if (!Ae(n, a.shape)) throw "out must have the same shape as the expected output";
    return lt(ka(e, t, null, r), Ia(e, t, null, r), a), a;
  }
  function Mr(e, t = null, a = null, r = !1, n = !1) {
    let l;
    if (e = O(e), null == t ? (e = xe(e), t = 0) : t = Oe(t, e.ndim), null != a && (a = O(a)), null != a) {
      if (l = Qt(a), 0 == l) throw "sum(weights) must not be 0";
      if (1 == a.ndim) a = a.reshape([...Array(t).fill(1), e.shape[t]]);else if (!Ae(a.shape, e.shape)) throw "weights.shape and a.shape do not match";
      e = st(e, a);
    } else l = e.shape[t];
    let s = it(Qt(e, t, null, n), l);
    return r ? [s, l] : s;
  }
  function Nr(e, t = null, a = null, r = !1) {
    e = O(e), null == t ? (e = xe(e), t = 0) : t = Oe(t, e.ndim);
    let n = [...e.shape.slice(0, t), ...(r ? [1] : []), ...e.shape.slice(t + 1)];
    if (null == a) a = E(n);else if (!Ae(n, a.shape)) throw "out must have the same shape as the expected output";
    return it(Qt(e, t, null, r), e.shape[t], a), a;
  }
  function kr(e, t = null, a = null, r = 0, n = !1) {
    e = O(e), null == t ? (e = xe(e), t = 0) : t = Oe(t, e.ndim);
    let l = [...e.shape.slice(0, t), ...(n ? [1] : []), ...e.shape.slice(t + 1)];
    if (null == a) a = E(l);else if (!Ae(l, a.shape)) throw "out must have the same shape as the expected output";
    return Nr(ja(lt(e, it(Qt(e, t, null, !0), e.shape[t] - r))), t, a, n), a;
  }
  function Ir(e, t = null, a = null, r = 0, n = !1) {
    return a = kr(e, t, a, r, n), qa(a, a), a;
  }
  function qr(e, t = null, a = 0) {
    if (1 != (e = O(e)).ndim) throw "a.dim != 1";
    if (Ia(e) < 0) throw "amin(a) < 0";
    if (a < 0) throw "minlength < 0";
    if (null != t) {
      if (!Ae((t = O(t)).shape, e.shape)) throw "weights.shape != a.shape";
      t = t.toarray();
    }
    let r = Array(Math.max(ka(e) + 1, a)).fill(0),
      n = 0;
    for (let a of e.flat) r[a] += null != t ? t[n] : 1, n++;
    return new z([r.length], r);
  }
  function Sr(e, t = !1) {
    let a,
      r = e.length,
      n = Array(r).fill(1);
    a = t ? [] : E([r, ...e]);
    for (let r = 0; r < e.length; r++) {
      let l = e[r],
        s = Y(l).reshape([...n.slice(0, r), l, ...n.slice(r + 1)]);
      t ? a.push(s) : a.set([r], s);
    }
    return a;
  }
  function jr(...e) {
    let t = [],
      a = e.length;
    for (let r = 0; r < a; r++) {
      let n = e[r];
      n = O(n), n.ndim, "boolean" == typeof n.item(0) && ([n] = ge(n)), n = n.reshape([...Array(r).fill(1), n.size, ...Array(a - r - 1).fill(1)]), t.push(n);
    }
    return t;
  }
  function Or(e, t, a = !1, r = !1, n = "table") {}
  function Er(e, t = null, a = "big") {
    e = O(e), null == t ? (e = xe(e), t = 0) : t = Oe(t, e.ndim);
    let r = e.shape.slice();
    r[t] = Math.ceil(r[t] / 8);
    let n = E(r),
      l = e.shape.slice();
    l[t] = 1;
    let s = Array(8 * r[t]);
    for (let r of q(l)) {
      let {
          offset: i
        } = e,
        {
          offset: d
        } = n;
      for (let t = 0; t < l.length; t++) i += r[t] * e.strides[t], d += r[t] * n.strides[t];
      s.fill(0);
      for (let a = 0; a < e.shape[t]; a++) {
        let r = e.data[i + a * e.strides[t]];
        s[a] = r;
      }
      let o = 0;
      for (let e = 0; e < s.length; e += 8) {
        let r = 0;
        if ("big" == a) for (let t = 0; t < 8; t++) r += s[e + t] << 7 - t;else {
          if ("little" != a) throw "bitorder can be either big or little";
          for (let t = 0; t < 8; t++) r += s[e + t] << t;
        }
        n.data[d + o * n.strides[t]] = r, o++;
      }
    }
    return n;
  }
  function Dr(e, t = [], a = "big") {
    if ("big" == a) for (let a = 7; a >= 0; a--) t[a] = e % 2, e = e / 2 | 0;else for (let a = 0; a <= 7; a++) t[a] = e % 2, e = e / 2 | 0;
    return t;
  }
  function Fr(e, t = null, a = null, r = "big") {
    e = O(e), null == t ? (e = xe(e), t = 0) : t = Oe(t, e.ndim);
    let n = 0,
      l = 8;
    null != a && (a < 0 ? n = 8 - a : l = a);
    let s = e.shape.slice();
    s[t] = s[t] * (l - n);
    let i = E(s),
      d = Array(8);
    for (let a of q(e.shape)) {
      let {
          offset: s
        } = e,
        {
          offset: o
        } = i;
      for (let t = 0; t < e.shape.length; t++) s += a[t] * e.strides[t], o += a[t] * i.strides[t];
      Dr(e.data[s], d, r);
      for (let e = n, a = 0; e < l; e++, a++) i.data[o + a * i.strides[t]] = d[e];
    }
    return i;
  }
  function Tr(e, t = 0, a = null) {
    if (0 == (e = e.map(O)).length) throw "need at least one array to stack";
    for (let t = 1; t < e.length; t++) if (!Ae(e[0], e[t])) throw "all input arrays must have the same shape";
    t = Oe(t, e[0].ndim + 1);
    let r = [...Array(t).fill(o.colon), o.newaxis];
    return Ie(e.map(e => e.get(...r)), t, a);
  }
  function Rr(e) {
    return e = ee(...e), Array.isArray(e) || (e = [e]), Ie(e, 0);
  }
  function Pr(e) {
    return e = Z(...e), Array.isArray(e) || (e = [e]), e.length > 0 && 1 == e[0].ndim ? Ie(e, 0) : Ie(e, 1);
  }
  function Kr(e) {
    return e = te(...e), Array.isArray(e) || (e = [e]), Ie(e, 2);
  }
  function Gr(e) {
    let t = [];
    for (let a of e) a = O(a), a.ndim < 2 && (a = $(a, !1, 2).T), t.push(a);
    return Ie(t, 1);
  }
  function Vr(e) {
    return e = ee(...e), Array.isArray(e) || (e = [e]), Ie(e, 0);
  }
  function Yr(e, t, a = 0) {
    let r, n, l;
    if (null != e.shape ? (a = Oe(a, e.ndim), r = e.shape[a]) : r = e.length, "number" == typeof t) {
      if (n = 0 | t, n <= 0) throw "number sections must be larger than 0.";
      let e = r / n | 0,
        a = r % n;
      l = $([0, ...Array(a).fill(e + 1), ...Array(n - a).fill(e)]).cumsum().toarray();
    } else n = t.length + 1, l = [0, ...t, r];
    let s = [],
      i = B(e, a, 0);
    for (let e = 0; e < n; e++) {
      let t = l[e],
        r = l[e + 1];
      s.push(B(i.get(u(t, r)), a, 0));
    }
    return s;
  }
  function Xr(e, t, a = 0) {
    if (a = Oe(a, (e = O(e)).ndim), null != t.shape && (t = t.toarray()), null == t.length) {
      let r = t;
      if (e.shape[a] % r) throw "array split does not result in an equal division";
    }
    return Yr(e, t, a);
  }
  function Jr(e, t) {
    if (se(e) < 3) throw "dsplit only works on arrays of 3 or more dimensions";
    return Xr(e, t, 2);
  }
  function Wr(e, t) {
    if (0 == se(e)) throw "hsplit only works on arrays of 1 or more dimensions";
    return Xr(e, t, se(e) > 1 ? 1 : 0);
  }
  function Hr(e, t) {
    if (se(e) < 2) throw "vsplit only works on arrays of 2 or more dimensions";
    return Xr(e, t, 0);
  }
  function Lr(e, t, a = null) {
    e = O(e), null == a ? (e = xe(e), a = 0) : a = Oe(a, e.ndim);
    let r = e.shape.slice(),
      n = "number" == typeof t;
    if (n) r[a] *= t;else if (1 == t.length) t = t[0], r[a] *= t, n = !0;else {
      if (r[a] != t.length) throw `operands could not be broadcast together with shape (${r[a]},) (${t.length},)`;
      r[a] = t.reduce((e, t) => e + t);
    }
    let l = E(r),
      s = l.strides.slice();
    s.splice(a, 1);
    let i = e.shape.slice();
    i.splice(a, 1);
    let d = e.strides.slice();
    d.splice(a, 1);
    let o = r[a];
    for (let r of q(i)) {
      let i = 0,
        u = 0;
      for (let e = 0; e < r.length; e++) i += r[e] * d[e], u += r[e] * s[e];
      let h = 0;
      for (let r = 0; r < o; r++) {
        let s = e.data[i + r * e.strides[a]],
          d = n ? t : t[r];
        for (let e = 0; e < d; e++, h++) l.data[u + h * l.strides[a]] = s;
      }
    }
    return l;
  }
  function Ur(e, t) {
    "number" == typeof t && (t = [t]);
    let a = t.length;
    if (t.every(e => 1 == e) && e instanceof z) return $(e, !0, a);
    let r = $(e, !1, a);
    a < r.ndim && (t = [...Array(r.ndim - a).fill(1), ...t]);
    let n = r.shape.map((e, a) => e * t[a]),
      l = r.size;
    if (l > 0) {
      let {
        ndim: e,
        shape: a
      } = r;
      for (let n = 0; n < e; n++) {
        let e = a[n],
          s = t[n];
        1 != s && (r = r.reshape(-1, l).repeat(s, 0)), l = l / e | 0;
      }
    }
    return r.reshape(n);
  }
  function Cr(e, t = 0, a = 0, r = 1) {
    e = O(e);
    let {
      ndim: n
    } = e;
    if (n < 2) throw "array.ndim must be >= 2";
    a = Oe(a, n), r = Oe(r, n);
    let l = Array(n);
    l[n - 2] = a, l[n - 1] = r;
    for (let e = 0, t = 0; e < n; e++) e != a && e != r && (l[t++] = e);
    let s,
      i,
      d = (e = Q(e, l)).shape[n - 2],
      o = e.shape[n - 1],
      u = o + 1;
    t < 0 ? (s = -o * t, i = Math.min(o, d + t) * (o + 1) - o * t) : (s = t, i = Math.min(d, o - t) * (o + 1) + t);
    let h = Math.ceil((i - s) / u);
    return new z([...e.shape.slice(0, -2), h], e.data, e.base ?? e, [...e.strides.slice(0, -2), u * e.strides[n - 1]], e.offset + s, e.itemsize);
  }
  function Br(e, t = 0) {
    let a = (e = O(e)).shape;
    if (1 == a.length) {
      let r = a[0] + Math.abs(t),
        n = L([r, r]),
        l = t >= 0 ? t : -t * r,
        s = n.get(u(null, r - t));
      for (let t = 0; t < e.size; t++, l += r + 1) s.itemset(l, e.item(t));
      return n;
    }
    if (2 != a.length) throw "Input must be 1- or 2-d.";
    return Cr(e, t);
  }
  function Qr(e, t = null) {
    let a;
    if (e = O(e), null == t) a = Array(e.ndim).fill(u("::-1"));else {
      t = oe(t, e.ndim), a = Array(e.ndim).fill(u(":"));
      for (let e of t) a[e] = u("::-1");
    }
    return e.get(...a);
  }
  function Zr(e) {
    if ((e = O(e)).ndim < 2) throw "Input must be >= 2-d.";
    return e.get(...rn(":", "::-1"));
  }
  function en(e) {
    if ((e = O(e)).ndim < 1) throw "Input must be >= 1-d.";
    return e.get(u("::-1"));
  }
  s.add(vr, () => {
    let e = Y(10);
    return vr(Ha(e, 5), e, st(10, e));
  }, () => $([0, 1, 2, 3, 4, 50, 60, 70, 80, 90])).add(vr, () => vr([[!0, !1], [!0, !0]], [[1, 2], [3, 4]], [[9, 8], [7, 6]]), () => $([[1, 8], [3, 4]])).add(vr, () => {
    let [e, t] = $r(u(":3"), u(null, 4));
    return vr(Ha(e, t), e, nt(10, t));
  }, () => $([[10, 0, 0, 0], [10, 11, 1, 1], [10, 11, 12, 2]])).add(vr, () => {
    let e = $([[0, 1, 2], [0, 2, 4], [0, 3, 6]]);
    return vr(Ha(e, 4), e, -1);
  }, () => $([[0, 1, 2], [0, 2, -1], [0, 3, -1]])), s.add($r, () => $r(u("0:5"), u("0:5")), () => [$([[0], [1], [2], [3], [4]]), $([[0, 1, 2, 3, 4]])]).add($r, () => $r(u("3:5"), u("0:-5"), u("0:1")), () => [$([[[3]], [[4]]]), $([]).reshape([1, 0, 1]), $([[[0]]])]), s.add(Ar, () => Ar($([[4, 9, 2, 10], [6, 9, 7, 12]]), 1), () => $([8, 6])).add(Ar, () => Ar($([[4, 9, 2, 10], [6, 9, 7, 12]]), 0), () => $([2, 0, 5, 2])).add(Ar, () => Ar($([[4, 9, 2, 10], [6, 9, 7, 12]])), () => 10).add(Ar, () => Ar(ft(Y(10, 40), 2).reshape(5, 2, 3), 0, null, !0), () => $([[[1056, 1104, 1152], [1200, 1248, 1296]]])), s.add(Mr, () => Mr(Y(1, 5)), () => 2.5).add(Mr, () => Mr(Y(1, 11), void 0, Y(10, 0, -1)), () => 4).add(Mr, () => Mr(Y(6).reshape(3, 2), 1, [1 / 4, 3 / 4]), () => $([.75, 2.75, 4.75])).add(Mr, () => Mr(Y(6).reshape(3, 2), 1, void 0, void 0, !0), () => $([[.5], [2.5], [4.5]])), s.add(Nr, () => Nr($([[1, 2], [3, 4]])), () => 2.5).add(Nr, () => Nr($([[1, 2], [3, 4]]), 0), () => $([2, 3])).add(Nr, () => Nr($([[1, 2], [3, 4]]), 1), () => $([1.5, 3.5])), s.add(kr, () => kr($([[1, 2], [3, 4]])), () => 1.25).add(kr, () => kr($([[1, 2], [3, 4]]), 0), () => $([1, 1])).add(kr, () => kr($([[1, 2], [3, 4]]), 1), () => $([.25, .25])), s.add(Ir, () => Ir($([[1, 2], [3, 4]])), () => 1.118033988749895).add(Ir, () => Ir($([[1, 2], [3, 4]]), 0), () => $([1, 1])).add(Ir, () => Ir($([[1, 2], [3, 4]]), 1), () => $([.5, .5])), s.add(qr, () => qr(Y(5)), () => $([1, 1, 1, 1, 1])).add(qr, () => qr($([0, 1, 1, 3, 2, 1, 7])), () => $([1, 3, 1, 1, 0, 0, 0, 1])).add(qr, () => qr($([0, 1, 1, 2, 2, 2]), $([.3, .5, .2, .7, 1, -.6])), () => $([.3, .7, 1.1])), s.add(Sr, () => Sr([2, 3]), () => $([[[0, 0, 0], [1, 1, 1]], [[0, 1, 2], [0, 1, 2]]])).add(Sr, () => Sr([2, 3], !0), () => [$([[0], [1]]), $([[0, 1, 2]])]), s.add(jr, () => jr([0, 1], [2, 4]), () => [$([[0], [1]]), $([[2, 4]])]).add(jr, () => jr([!0, !0], [2, 4]), () => [$([[0], [1]]), $([[2, 4]])]).add(jr, () => jr([!0, !0], [!1, !1, !0, !1, !0]), () => [$([[0], [1]]), $([[2, 4]])]), s.add(Er, () => Er($([[[1, 0, 1], [0, 1, 0]], [[1, 1, 0], [0, 0, 1]]]), -1), () => $([[[160], [64]], [[192], [32]]])).add(Er, () => Er($([[[1, 0, 1], [0, 1, 0]], [[1, 1, 0], [0, 0, 1]]])), () => $([171, 16])).add(Er, () => Er($([[[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]]), -1), () => $([[[160, 0]]])), s.add(Fr, () => Fr($([[2], [7], [23]]), 1), () => $([[0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 1, 0, 1, 1, 1]])).add(Fr, () => {
    let e = $([[0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 1, 0, 1, 1, 1]]),
      t = Er(e, 0);
    return [Fr(t, 0), Ne(e, Fr(t, 0, e.shape[0]))];
  }, () => [$([[0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 1, 0, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]), !0]), s.add(Tr, () => Tr(Array(10).fill().map(() => zr.normal(0, 1, [3, 4])), 0).shape, () => [10, 3, 4]).add(Tr, () => Tr(Array(10).fill().map(() => zr.normal(0, 1, [3, 4])), 1).shape, () => [3, 10, 4]).add(Tr, () => Tr(Array(10).fill().map(() => zr.normal(0, 1, [3, 4])), 2).shape, () => [3, 4, 10]).add(Tr, () => Tr([$([1, 2, 3]), $([4, 5, 6])]), () => $([[1, 2, 3], [4, 5, 6]])).add(Tr, () => Tr([$([1, 2, 3]), $([4, 5, 6])], -1), () => $([[1, 4], [2, 5], [3, 6]])), s.add(Rr, () => Rr([$([1, 2, 3]), $([4, 5, 6])]), () => $([[1, 2, 3], [4, 5, 6]])).add(Rr, () => Rr([$([[1], [2], [3]]), $([[4], [5], [6]])]), () => $([[1], [2], [3], [4], [5], [6]])), s.add(Pr, () => Pr([$([1, 2, 3]), $([4, 5, 6])]), () => $([1, 2, 3, 4, 5, 6])).add(Pr, () => Pr([$([[1], [2], [3]]), $([[4], [5], [6]])]), () => $([[1, 4], [2, 5], [3, 6]])), s.add(Kr, () => Kr([$([1, 2, 3]), $([2, 3, 4])]), () => $([[[1, 2], [2, 3], [3, 4]]])).add(Kr, () => Kr([$([[1], [2], [3]]), $([[2], [3], [4]])]), () => $([[[1, 2]], [[2, 3]], [[3, 4]]])), s.add(Gr, () => Gr([$([1, 2, 3]), $([2, 3, 4])]), () => $([[1, 2], [2, 3], [3, 4]])), s.add(Vr, () => Vr([$([1, 2, 3]), $([4, 5, 6])]), () => $([[1, 2, 3], [4, 5, 6]])).add(Vr, () => Vr([$([[1], [2], [3]]), $([[4], [5], [6]])]), () => $([[1], [2], [3], [4], [5], [6]])), s.add(Yr, () => Yr(Y(8), 3), () => [$([0, 1, 2]), $([3, 4, 5]), $([6, 7])]).add(Yr, () => Yr(Y(9), 4), () => [$([0, 1, 2]), $([3, 4]), $([5, 6]), $([7, 8])]), s.add(Xr, () => Xr(Y(9), 3), () => [$([0, 1, 2]), $([3, 4, 5]), $([6, 7, 8])]).add(Xr, () => Xr(Y(8), [3, 5, 6, 10]), () => [$([0, 1, 2]), $([3, 4]), $([5]), $([6, 7]), $([])]), s.add(Jr, () => Jr(Y(16).reshape(2, 2, 4), 2), () => [$([[[0, 1], [4, 5]], [[8, 9], [12, 13]]]), $([[[2, 3], [6, 7]], [[10, 11], [14, 15]]])]).add(Jr, () => Jr(Y(16).reshape(2, 2, 4), $([3, 6])), () => [$([[[0, 1, 2], [4, 5, 6]], [[8, 9, 10], [12, 13, 14]]]), $([[[3], [7]], [[11], [15]]]), E([2, 2, 0])]), s.add(Wr, () => Wr(Y(16).reshape(4, 4), 2), () => [$([[0, 1], [4, 5], [8, 9], [12, 13]]), $([[2, 3], [6, 7], [10, 11], [14, 15]])]).add(Wr, () => Wr(Y(16).reshape(4, 4), $([3, 6])), () => [$([[0, 1, 2], [4, 5, 6], [8, 9, 10], [12, 13, 14]]), $([[3], [7], [11], [15]]), E([4, 0])]).add(Wr, () => Wr(Y(8).reshape(2, 2, 2), 2), () => [$([[[0, 1]], [[4, 5]]]), $([[[2, 3]], [[6, 7]]])]).add(Wr, () => Wr($([0, 1, 2, 3, 4, 5]), 2), () => [$([0, 1, 2]), $([3, 4, 5])]), s.add(Hr, () => Hr(Y(16).reshape(4, 4), 2), () => [$([[0, 1, 2, 3], [4, 5, 6, 7]]), $([[8, 9, 10, 11], [12, 13, 14, 15]])]).add(Hr, () => Hr(Y(16).reshape(4, 4), $([3, 6])), () => [$([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]]), $([[12, 13, 14, 15]]), E([0, 4])]).add(Hr, () => Hr(Y(8).reshape(2, 2, 2), 2), () => [$([[[0, 1], [2, 3]]]), $([[[4, 5], [6, 7]]])]), s.add(Lr, () => Lr(3, 4), () => $([3, 3, 3, 3])).add(Lr, () => Lr($([[1, 2], [3, 4]]), 2), () => $([1, 1, 2, 2, 3, 3, 4, 4])).add(Lr, () => Lr($([[1, 2], [3, 4]]), 3, 1), () => $([[1, 1, 1, 2, 2, 2], [3, 3, 3, 4, 4, 4]])).add(Lr, () => Lr($([[1, 2], [3, 4]]), [1, 2], 0), () => $([[1, 2], [3, 4], [3, 4]])), s.add(Ur, () => {
    let e = $([0, 1, 2]);
    return [Ur(e, 2), Ur(e, [2, 2]), Ur(e, [2, 1, 2])];
  }, () => [$([0, 1, 2, 0, 1, 2]), $([[0, 1, 2, 0, 1, 2], [0, 1, 2, 0, 1, 2]]), $([[[0, 1, 2, 0, 1, 2]], [[0, 1, 2, 0, 1, 2]]])]).add(Ur, () => {
    let e = $([[1, 2], [3, 4]]);
    return [Ur(e, 2), Ur(e, [2, 1])];
  }, () => [$([[1, 2, 1, 2], [3, 4, 3, 4]]), $([[1, 2], [3, 4], [1, 2], [3, 4]])]).add(Ur, () => Ur($([1, 2, 3, 4]), [4, 1]), () => $([[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]])), s.add(Cr, () => Cr(Y(4).reshape(2, 2)), () => $([0, 3])).add(Cr, () => Cr(Y(4).reshape(2, 2), 1), () => $([1])).add(Cr, () => Cr(Y(8).reshape(2, 2, 2), 0, 0, 1), () => $([[0, 6], [1, 7]])).add(Cr, () => Cr(Y(8).reshape(2, 2, 2).get(u(":"), u(":"), 0), 0, 0, 1), () => $([0, 6])).add(Cr, () => Cr(Y(8).reshape(2, 2, 2).get(u(":"), u(":"), 1), 0, 0, 1), () => $([1, 7])).add(Cr, () => {
    let e = Y(8);
    return Cr(e.reshape(2, 2, 2), 0, 0, 1).set(-1), e;
  }, () => $([-1, -1, 2, 3, 4, 5, -1, -1])), s.add(Br, () => Br(Y(9).reshape([3, 3])), () => $([0, 4, 8])).add(Br, () => Br(Y(9).reshape([3, 3]), 1), () => $([1, 5])).add(Br, () => Br(Y(9).reshape([3, 3]), -1), () => $([3, 7])).add(Br, () => Br(Br(Y(9).reshape([3, 3]))), () => $([[0, 0, 0], [0, 4, 0], [0, 0, 8]])), s.add(Qr, () => {
    let e = Y(8).reshape([2, 2, 2]);
    return [e, Qr(e, 0), Qr(e, 1), Qr(e), Qr(e, [0, 2])];
  }, () => [$([[[0, 1], [2, 3]], [[4, 5], [6, 7]]]), $([[[4, 5], [6, 7]], [[0, 1], [2, 3]]]), $([[[2, 3], [0, 1]], [[6, 7], [4, 5]]]), $([[[7, 6], [5, 4]], [[3, 2], [1, 0]]]), $([[[5, 4], [7, 6]], [[1, 0], [3, 2]]])]).add(Qr, () => {
    let e = zr.normal(0, 1, [3, 4, 5]);
    return pt(Xa(Qr(e, 2), e.get(u(":"), u(":"), u("::-1"), u("..."))));
  }, () => !0), s.add(Zr, () => Zr(Br([1, 2, 3])), () => $([[0, 0, 1], [0, 2, 0], [3, 0, 0]])).add(Zr, () => {
    let e = zr.normal(0, 1, [2, 4, 5]);
    return pt(Xa(Zr(e), e.get(u(":"), u("::-1"), u("..."))));
  }, () => !0), s.add(en, () => en(Br([1, 2, 3])), () => $([[0, 0, 3], [0, 2, 0], [1, 0, 0]])).add(en, () => {
    let e = zr.normal(0, 1, [2, 3, 5]);
    return pt(Xa(en(e), e.get(u("::-1"), u("..."))));
  }, () => !0).add(en, () => en([1, 2]), () => $([2, 1]));
  let tn = e => "number" == typeof e || e instanceof o ? e : u(e);
  const an = Symbol("tupleType");
  function rn(...e) {
    let t = e.map(tn);
    return t[an] = !0, t;
  }
  function nn(...e) {
    return 1 == e.length ? tn(e[0]) : rn(...e);
  }
  function ln(e, t, a, r) {
    if ("raise" == t) return function (e, t, a) {
      let r = Array(e.length);
      for (let n = 0; n < e.length; n++) {
        let l = e[n];
        if (l < 0 && (l += t), l < 0 || l >= t) throw `index ${e[n]} is out of bounds for axis ${a} with size ${t}`;
        r[n] = l;
      }
      return r;
    }(e, a, r);
    if ("wrap" == t) return function (e, t) {
      let a = Array(e.length);
      for (let r = 0; r < e.length; r++) {
        let n = e[r] % t;
        n < 0 && (n += t), a[r] = n;
      }
      return a;
    }(e, a);
    if ("clip" == t) return function (e, t) {
      let a = Array(e.length);
      for (let r = 0; r < e.length; r++) {
        let n = e[r];
        a[r] = Math.max(0, Math.min(n, t - 1));
      }
      return a;
    }(e, a);
    throw `unexpected mode ${t}`;
  }
  function sn(e, t, a, r = "raise") {
    "number" == typeof t && (t = [t]), "number" == typeof a && (a = [a]), t = ln(t, r, e.size, 0);
    let n = e.flat,
      l = a.length;
    for (let e = 0; e < t.length; e++) n.set(t[e], a[e % l]);
  }
  function dn(e, t) {
    "number" == typeof t && (t = [t]), e = xe(e);
    let a = 1;
    for (let e of t) {
      if (e < 0) throw "all elements of 'new_shape' must be non-negative";
      a *= e;
    }
    if (0 == e.size || 0 == a) return L(t);
    let r = Math.ceil(a / e.size);
    return T(e = Ie(Array(r).fill(e)).get(u(0, a)), t);
  }
  function on(e, t) {
    let a = 0,
      r = e.length - 1;
    for (; a <= r;) {
      let n = a + r >> 1;
      e[n] < t ? a = n + 1 : r = n - 1;
    }
    return a;
  }
  function un(e, t) {
    let a = 0,
      r = e.length - 1;
    for (; a <= r;) {
      let n = a + r >> 1;
      e[n] > t ? r = n - 1 : a = n + 1;
    }
    return a;
  }
  function hn(e, t, a = "left") {
    e instanceof z && (e = e.toarray());
    let r = D(t = O(t)),
      n = 0,
      l = "left" == a ? on : un;
    for (let a of t.flat) r.data[n++] = l(e, a);
    return r;
  }
  s.add(nn, () => Y(8).reshape(2, 2, -1).get(nn(0, [0, -1], "::-1")), () => $([[1, 0]])), s.add(sn, () => {
    let e = Y(5);
    return sn(e, [0, 2], [-44, -55]), e;
  }, () => $([-44, 1, -55, 3, 4])).add(sn, () => {
    let e = Y(5);
    return sn(e, 22, -5, "clip"), e;
  }, () => $([0, 1, 2, 3, -5])), s.add(dn, () => dn($([[0, 1], [2, 3]]), [2, 3]), () => $([[0, 1, 2], [3, 0, 1]])).add(dn, () => dn($([[0, 1], [2, 3]]), [1, 4]), () => $([[0, 1, 2, 3]])).add(dn, () => dn($([[0, 1], [2, 3]]), [2, 4]), () => $([[0, 1, 2, 3], [0, 1, 2, 3]])), s.add(hn, () => hn([1, 2, 3, 4, 5], 3), () => 2).add(hn, () => hn([1, 2, 3, 4, 5], 3, "right"), () => 3).add(hn, () => hn([1, 2, 3, 4, 5], [-10, 10, 2, 3]), () => $([0, 5, 1, 2]));
  class fn {
    constructor(e) {
      this.length = e.length, this.elements = e.map(e => Array.from(e)), this.lengths = this.elements.map(e => e.length), this.size = this.lengths.reduce((e, t) => e * t), this.coords = Array(this.length), this.done = this.index = void 0, this.reset();
    }
    [Symbol.iterator]() {
      return this.reset();
    }
    reset() {
      return this.coords.fill(0), this.index = 0, this.done = 0 == this.size, this;
    }
    next() {
      if (this.done) return {
        done: !0
      };
      let {
          elements: e,
          coords: t,
          length: a,
          lengths: r
        } = this,
        n = e.map((e, a) => e[t[a]]),
        l = a - 1,
        s = !0;
      e: for (; l >= 0;) switch (r[l]) {
        case 1:
          l--;
          break;
        case t[l]:
          t[l--] = 0, s = !0;
          break;
        default:
          if (!s) break e;
          t[l] += 1, s = !1;
      }
      return this.index++, this.done = this.index >= this.size, {
        value: n,
        done: !1
      };
    }
  }
  function pn(e, t, a = null) {
    if (e = O(e), null == a) return pn(e.ravel(), t, 0).reshape(e.shape);
    {
      let r = re(t, a = oe(a, e.ndim, !0));
      if (r.ndim > 1) throw new Error("'shift' and 'axis' should be scalars or 1D sequences");
      let n = Array(e.ndim).fill(0);
      for (let [e, t] of r) n[t] += e;
      let l = Array(e.ndim).fill([[u(null), u(null)]]);
      for (let [t, a] of n.entries()) a %= e.shape[t] || 1, a && (l[t] = [[u(null, -a), u(a, null)], [u(-a, null), u(null, a)]]);
      let s = D(e);
      for (let t of new fn(l)) {
        let a = t.map(e => e[0]),
          r = t.map(e => e[1]);
        s.set(r, e.get(...a));
      }
      return s;
    }
  }
  function cn(e, t, a = null) {
    e = O(e);
    let {
        shape: r,
        strides: n,
        offset: l,
        data: s
      } = e,
      i = [];
    for (let e of j(r, n, l)) i.push(t.call(a, s[e], e, s));
    return new z(r, i);
  }
  function mn(e, t, a = null) {
    e = O(e), t = O(t), gn(e.ndim > 0, "x1 does not have enough dimensions"), gn(t.ndim > 0, "x2 does not have enough dimensions");
    let r = 1 == e.ndim,
      n = 1 == t.ndim,
      l = r || n;
    if (r && (e = e.get(null, u(":"))), n && (t = t.get(u(":"), null)), 2 == e.ndim && 2 == t.ndim) {
      gn(e.shape[1] == t.shape[0], "input shape mismatch");
      let s = [e.shape[0], t.shape[1]],
        i = l ? s.slice(r ? 1 : 0, n ? -1 : void 0) : s;
      null == a ? a = E(i) : gn(Ae(i, a.shape), "out shape mismatch");
      let d = l ? a.reshape(s) : a,
        o = t.T;
      for (let [t, a] of q(s)) d.set([t, a], yn(e.get(t), o.get(a)));
      return a;
    }
    let s = V(e.shape.slice(0, -2), t.shape.slice(0, -2));
    e = k(e, [...s, ...e.shape.slice(-2)]), t = k(t, [...s, ...t.shape.slice(-2)]), gn(e.shape.at(-1) == t.shape.at(-2), "input shape mismatch");
    let i = e.shape.at(-2),
      d = t.shape.at(-1),
      o = [...s, i, d];
    null == a ? a = E(o) : gn(Ae(o, a.shape), "out shape mismatch");
    for (let r of q(s)) mn(e.get(...r), t.get(...r), a.get(...r));
    return a;
  }
  function gn(e, t) {
    if (!e) throw new Error(t);
  }
  function yn(e, t, a = null) {
    if (e = O(e), t = O(t), 1 == e.ndim && 1 == t.ndim) return Qt(st(e, t), 0, a);
    if (2 == e.ndim && 2 == t.ndim) return mn(e, t, a);
    if (0 == e.ndim || 0 == t.ndim) return st(e, t, a);
    if (1 == t.ndim) {
      gn(e.shape.at(-1) == t.shape[0], `shapes ${e.shape} and ${t.shape} not aligned`);
      let r = e.shape.slice(0, -1);
      null == a ? a = E(r) : gn(Ae(r, a.shape), "out shape mismatch");
      for (let n of q(r)) yn(e.get(...n), t, a.get(u("..."), ...n));
      return a;
    }
  }
  s.add(pn, () => [...function* () {
    let e = Y(10);
    yield pn(e, 2), yield pn(e, -2);
    let t = e.reshape([2, 5]);
    yield t, yield pn(t, 1), yield pn(t, -1), yield pn(t, 1, 0), yield pn(t, -1, 0), yield pn(t, 1, 1), yield pn(t, -1, 1), yield pn(t, [1, 1], [1, 0]), yield pn(t, [2, 1], [1, 0]);
  }()], () => [...function* () {
    yield $([8, 9, 0, 1, 2, 3, 4, 5, 6, 7]), yield $([2, 3, 4, 5, 6, 7, 8, 9, 0, 1]), yield $([[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]]), yield $([[9, 0, 1, 2, 3], [4, 5, 6, 7, 8]]), yield $([[1, 2, 3, 4, 5], [6, 7, 8, 9, 0]]), yield $([[5, 6, 7, 8, 9], [0, 1, 2, 3, 4]]), yield $([[5, 6, 7, 8, 9], [0, 1, 2, 3, 4]]), yield $([[4, 0, 1, 2, 3], [9, 5, 6, 7, 8]]), yield $([[1, 2, 3, 4, 0], [6, 7, 8, 9, 5]]), yield $([[9, 5, 6, 7, 8], [4, 0, 1, 2, 3]]), yield $([[8, 9, 5, 6, 7], [3, 4, 0, 1, 2]]);
  }()]), s.add(cn, () => cn(Y(10).reshape(-1, 2), (e, t) => e + t), () => $([[0, 2], [4, 6], [8, 10], [12, 14], [16, 18]])), s.add(mn, () => mn($([[1, 0], [0, 1]]), $([[4, 1], [2, 2]])), () => $([[4, 1], [2, 2]])).add(mn, () => {
    let e = $([[1, 0], [0, 1]]),
      t = $([1, 2]);
    return [mn(e, t), mn(t, e)];
  }, () => [$([1, 2]), $([1, 2])]).add(mn, () => mn(Y(16).reshape([2, 2, 4]), Y(16).reshape([2, 4, 2])), () => $([[[28, 34], [76, 98]], [[428, 466], [604, 658]]])), s.add(yn, () => yn(3, 4), () => 12).add(yn, () => yn([[1, 2], [3, 4]], [4, 1]), () => $([6, 16])).add(yn, () => yn([[1, 0], [0, 1]], [[4, 1], [2, 2]]), () => $([[4, 1], [2, 2]]));
  let wn = {
    edgeitems: 3,
    threshold: 1e3,
    linewidth: 75,
    precision: void 0,
    formatter: null,
    separator: " ",
    prefix: ""
  };
  function bn(e, t, a = []) {
    let r = a.length;
    if (r == e.ndim) return e.get(...a);
    if (e.shape[r] > 2 * t) {
      let n = a.concat(rn([, t])),
        l = a.concat(rn([-t]));
      return Ie([bn(e, t, n), bn(e, t, l)], r);
    }
    return bn(e, t, a.concat(rn(":")));
  }
  class xn {
    get __call__() {
      return this.call.bind(null, this);
    }
  }
  class _n extends xn {
    constructor(e) {
      super(), this.padLeft = e.size > 0 ? Math.max(String(e.max()).length, String(e.min()).length) : 0;
    }
    call({
      padLeft: e
    } = this, t) {
      let a = String(t);
      return " ".repeat(e - a.length) + a;
    }
  }
  function zn(e, t) {
    return e.toExponential(t);
  }
  function vn(e, t) {
    return null != t ? e.toFixed(t) : String(e);
  }
  class $n extends xn {
    constructor(e, t = undefined) {
      super(), this.precision = t;
      let a = !1;
      {
        let t = e.item(0),
          r = t,
          n = !1;
        for (let a of e.flat) Number.isFinite(a) && 0 != a && (a = Math.abs(a), t = Math.min(t, a), r = Math.max(r, a), n = !0);
        n && (r >= 1e8 || t < 1e-4 || r / t > 1e3) && (a = !0);
      }
      this.exp_format = a;
      let r = 0;
      if (this.exp_format) for (let a of e.flat) r = Math.max(r, zn(a, t).length);else for (let a of e.flat) r = Math.max(r, vn(a, t).length);
      this.padLeft = r;
    }
    call({
      padLeft: e,
      exp_format: t,
      precision: a
    } = this, r) {
      let n = t ? zn(r, a) : vn(r, a);
      return " ".repeat(e - n.length) + n;
    }
  }
  function An(e) {
    return `${e}`;
  }
  let Mn = e => () => e;
  function Nn(e, t, a, r, n, l) {
    let s = t.length + a.length > r;
    return l > 113 && t.length <= n.length && (s = !1), s && (e += t.trimEnd() + "\n", t = n), [e, t += a];
  }
  function kn(e, t, a, r, n, l) {
    let s = a.split(/\r?\n/);
    if (1 === s.length || l <= 113) return Nn(e, t, a, r, n, l);
    let i,
      d = Math.max(...s.map(e => e.length));
    t.length + d > r && t.length > n.length ? (e += t.trimEnd() + "\n", t = n + s[0], i = n) : (i = " ".repeat(t.length), t += s[0]);
    for (let a = 1; a < s.length; a++) e += t.trimEnd() + "\n", t = i + s[a];
    let o = d - s.at(-1).length;
    return [e, t += " ".repeat(o)];
  }
  function In(e, t = wn, a = " ", r = "") {
    let n,
      l = O(e);
    0 == e.ndim && (e = l), e.size > t.threshold ? (n = "...", l = bn(l, t.edgeitems)) : n = "";
    let s = function (e, t) {
        let a = function (e, t) {
          let a = {
              int: () => new _n(e).__call__,
              float: () => new $n(e, t.precision).__call__,
              object: () => An
            },
            {
              formatter: r
            } = t;
          if (null != r) for (let e of Object.keys(r)) a[e] = Mn(r[e]);
          return a;
        }(e, t);
        return a[Number.isInteger(e.item(0)) ? "int" : "number" == typeof e.item(0) ? "float" : "object"](t);
      }(l, t),
      i = " " + " ".repeat(r.length),
      d = function (e, t, a, r, n, l, s, i) {
        function d(a, r, o) {
          let u = a.length,
            h = e.ndim - u;
          if (0 === h) return t(e.item(a));
          let f,
            p = r + " ";
          f = i <= 113 ? o : o - "]".length;
          let c,
            m,
            g = e.shape[u],
            y = s && 2 * l < g;
          y ? (c = l, m = l) : (c = 0, m = g);
          let w = "";
          if (1 === h) {
            let e,
              t = n.trimEnd().length;
            e = i <= 113 ? o - t : o - Math.max(t, "]".length);
            let l = r;
            for (let t = 0; t < c; t++) {
              let s = d([...a, t], p, f);
              [w, l] = kn(w, l, s, e, r, i), l += n;
            }
            y && ([w, l] = Nn(w, l, s, e, r, i), l += i <= 113 ? ", " : n);
            for (let t = m; t > 1; t--) {
              let s = d([...a, -t], p, f);
              [w, l] = kn(w, l, s, e, r, i), l += n;
            }
            i <= 113 && (e = o);
            let u = d([...a, -1], p, f);
            [w, l] = kn(w, l, u, e, r, i), w += l;
          } else {
            w = "";
            let e = n.trimEnd() + "\n".repeat(h - 1);
            for (let t = 0; t < c; t++) w += r + d([...a, t], p, f) + e;
            y && (w += r + s, w += i <= 113 ? ", \n" : e);
            let t = m;
            for (; t > 1; t--) w += r + d([...a, -t], p, f) + e;
            w += r + d([...a, -t], p, f);
          }
          return w = "[" + w.slice(r.length) + "]", w;
        }
        try {
          return d([], r, a);
        } finally {
          d = null;
        }
      }(e, s, t.linewidth, i, a, t.edgeitems, n, t.legacy);
    return d;
  }
  function qn(e, t = null) {
    t = null != t ? Object.assign(Object.create(wn), t) : wn;
    let {
      separator: a,
      prefix: r
    } = t;
    return 0 == e.size ? "[]" : In(e, t, a, r);
  }
  function Sn(e, t = null, a = null) {
    return t ??= wn.linewidth, a ??= wn.precision, 0 == e.ndim ? `${e.item()}` : qn(e, {
      linewidth: t,
      precision: a
    });
  }
  function jn(e, t = null, a = null) {
    if (t ??= wn.linewidth, a ??= wn.precision, 0 == e.ndim) return `${e.item()}`;
    let r,
      n = e instanceof z ? "array" : typeof e,
      l = e.size > 0,
      s = n + "(",
      i = l ? ")" : ",";
    r = e.size > 0 || Ae(e.shape, [0]) ? qn(e, {
      linewidth: t,
      precision: a,
      separator: ", ",
      prefix: s
    }) : `[], shape=[${arr.shape.join(", ")}]`;
    let d = s + r + i;
    if (l) return d;
    let o = `dtype=${arr.dtype})`,
      u = " ";
    return d.length - (d.lastIndexOf("\n") + 1) + o.length + 1 > t && (u = "\n" + " ".repeat((n + "(").length)), d + u + o;
  }
  s.add(qn, () => qn(Y(2520).reshape(3, 4, 210)), () => "[[[   0    1    2 ...  207  208  209]\n  [ 210  211  212 ...  417  418  419]\n  [ 420  421  422 ...  627  628  629]\n  [ 630  631  632 ...  837  838  839]]\n\n [[ 840  841  842 ... 1047 1048 1049]\n  [1050 1051 1052 ... 1257 1258 1259]\n  [1260 1261 1262 ... 1467 1468 1469]\n  [1470 1471 1472 ... 1677 1678 1679]]\n\n [[1680 1681 1682 ... 1887 1888 1889]\n  [1890 1891 1892 ... 2097 2098 2099]\n  [2100 2101 2102 ... 2307 2308 2309]\n  [2310 2311 2312 ... 2517 2518 2519]]]").add(qn, () => qn($([.1, 100, 50, -9e3])), () => "[ 1e-1  1e+2  5e+1 -9e+3]").add(qn, () => qn($([1.1, 100.2, 50.6])), () => "[  1.1 100.2  50.6]"), s.add(jn, () => jn($([1.1, 100.2, 50.6])), () => "array([  1.1, 100.2,  50.6])").add(jn, () => "" + $([1.1, 100.2, 50.6]), () => "array([  1.1, 100.2,  50.6])");
})();
var l = n.zvA,
  s = n.iIB,
  i = n.RO$,
  d = n.zhN,
  o = n._bh,
  u = n.OVY,
  h = n.xsH,
  f = n.p2w,
  p = n.SRu,
  c = n.A67,
  m = n.E4R,
  g = n.tw1,
  y = n.Yur,
  w = n.RPv,
  b = n.JWo,
  x = n.WnP,
  _ = n.AGi,
  z = n.IHx,
  v = n.$6P,
  $ = n.Lb7,
  A = n.t5D,
  M = n.YjB,
  N = n.eTT,
  k = n.FKo,
  I = n.Hn6,
  q = n.PD,
  S = n.oSO,
  j = n.Xsc,
  O = n.gJP,
  E = n.$jo,
  D = n.s6s,
  F = n.S1h,
  T = n.Q8B,
  R = n.IXX,
  P = n.FJh,
  K = n.YSU,
  G = n.Vjr,
  V = n.xok,
  Y = n.oix,
  X = n.Yqf,
  J = n.k2d,
  W = n.FAR,
  H = n.hu8,
  L = n.V2R,
  U = n.dcL,
  C = n.ujY,
  B = n.Y8W,
  Q = n.pHG,
  Z = n.yE8,
  ee = n.W4K,
  te = n.GBu,
  ae = n.eYE,
  re = n.qgf,
  ne = n.fMc,
  le = n.xAU,
  se = n.M2z,
  ie = n.Qo,
  de = n.Lo$,
  oe = n.eKn,
  ue = n.mDi,
  he = n.q$q,
  fe = n.oqW,
  pe = n.T8D,
  ce = n.nNb,
  me = n.mVq,
  ge = n.y39,
  ye = n.RrX,
  we = n.JGK,
  be = n.JGz,
  xe = n.zOr,
  _e = n.mCk,
  ze = n.f9Y,
  ve = n.zNN,
  $e = n.kCc,
  Ae = n.$Gn,
  Me = n.zbp,
  Ne = n.VlM,
  ke = n.RWx,
  Ie = n.Ka3,
  qe = n.on5,
  Se = n.Hgg,
  je = n.csF,
  Oe = n.AKD,
  Ee = n.wIX,
  De = n.N5d,
  Fe = n.e,
  Te = n.D5q,
  Re = n.cSb,
  Pe = n.sKD,
  Ke = n.DgJ,
  Ge = n.pnR,
  Ve = n.Qqt,
  Ye = n.uuq,
  Xe = n.aD1,
  Je = n.t$B,
  We = n.KlT,
  He = n.iyy,
  Le = n.zG0,
  Ue = n.KTV,
  Ce = n.RRI,
  Be = n.HC4,
  Qe = n.Ah7,
  Ze = n.GWj,
  et = n.Sc8,
  tt = n.Ek0,
  at = n.v_D,
  rt = n.KSO,
  nt = n.rpZ,
  lt = n.thl,
  st = n.FLS,
  it = n.pjt,
  dt = n.zGm,
  ot = n.Hsf,
  ut = n.DIH,
  ht = n._mT,
  ft = n.yRu,
  pt = n.HqJ,
  ct = n.S8h,
  mt = n.CGm,
  gt = n.gY6,
  yt = n.Zw8,
  wt = n.U_R,
  bt = n.f0i,
  xt = n.fXA,
  _t = n.I7t,
  zt = n.igg,
  vt = n.ftH,
  $t = n.KvH,
  At = n.IW_,
  Mt = n.uqG,
  Nt = n.vy,
  kt = n.Ai1,
  It = n.d9m,
  qt = n.bzW,
  St = n.SX3,
  jt = n.cM7,
  Ot = n.mvw,
  Et = n.Krr,
  Dt = n.k3Q,
  Ft = n.YKj,
  Tt = n.buk,
  Rt = n.UID,
  Pt = n.Jxs,
  Kt = n.gWQ,
  Gt = n.J69,
  Vt = n.LTh,
  Yt = n.wQq,
  Xt = n.U8E,
  Jt = n.JpY,
  Wt = n.qnd,
  Ht = n.dQs,
  Lt = n.$7d,
  Ut = n.RCU,
  Ct = n.MIL,
  Bt = n.obs,
  Qt = n.$V5,
  Zt = n.p3s,
  ea = n.x2A,
  ta = n.fyW,
  aa = n.MHD,
  ra = n.pdy,
  na = n.MaX,
  la = n.S4p,
  sa = n.INJ,
  ia = n.lf5,
  da = n.ffp,
  oa = n.AqN,
  ua = n.qDh,
  ha = n.iUs,
  fa = n.NCv,
  pa = n.pi,
  ca = n.eiS,
  ma = n.i1C,
  ga = n.qux,
  ya = n.WVs,
  wa = n.OZM,
  ba = n.gzd,
  xa = n.BVy,
  _a = n.uRy,
  za = n.TN_,
  va = n.MXc,
  $a = n.di9,
  Aa = n.n3V,
  Ma = n.nTq,
  Na = n.M25,
  ka = n.spK,
  Ia = n.rx1,
  qa = n.XLQ,
  Sa = n.SIr,
  ja = n.wyi,
  Oa = n.XC3,
  Ea = n.SlP,
  Da = n.aSG,
  Fa = n.s_,
  Ta = n.UPJ,
  Ra = n.FvN,
  Pa = n.flC,
  Ka = n.mCt,
  Ga = n.Xxe,
  Va = n.UBE,
  Ya = n.O$l,
  Xa = n.R_K,
  Ja = n.tPi,
  Wa = n.DYV,
  Ha = n.Vl2,
  La = n._b3,
  Ua = n.h62,
  Ca = n.L9e,
  Ba = n.knu,
  Qa = n.qoR,
  Za = n.$XF,
  er = n.Smz,
  tr = n.ZU4,
  ar = n.qnb,
  rr = n.ORZ,
  nr = n.AEp,
  lr = n.K1B,
  sr = n.Gg6,
  ir = n.uAr,
  dr = n.BpP,
  or = n.p4s,
  ur = n.ebm,
  hr = n.$I7,
  fr = n.RFc,
  pr = n.DDI,
  cr = n.bLT,
  mr = n.Wg4,
  gr = n.G6Z,
  yr = n.CAK,
  wr = n.nFP,
  br = n.Ud9,
  xr = n.arb,
  _r = n.lls;
exports.zeros = _r;
exports.where = xr;
exports.vstack = br;
exports.vsplit = wr;
exports.variance = yr;
exports.use_advanced_indexing = gr;
exports.unwrap = mr;
exports.unpackbits = cr;
exports.tupleType = pr;
exports.trunc = fr;
exports.true_divide = hr;
exports.trapz = ur;
exports.transpose = or;
exports.timeit2 = dr;
exports.timeit = ir;
exports.tile = sr;
exports.tester = lr;
exports.tanh = nr;
exports.tan = rr;
exports.take = ar;
exports.swapaxes = tr;
exports.sum = er;
exports.subtract = Za;
exports.std = Qa;
exports.stack = Ba;
exports.squeeze = Ca;
exports.square = Ua;
exports.sqrt = La;
exports.split = Ha;
exports.sort = Wa;
exports.slice = Ja;
exports.sinh = Xa;
exports.sin = Ya;
exports.signbit = Va;
exports.sign = Ga;
exports.shape = Ka;
exports.shallow_array_equal = Pa;
exports.searchsorted = Ra;
exports.sample = Ta;
exports.s_ = Fa;
exports.row_stack = Da;
exports.roll = Ea;
exports.rint = Oa;
exports.right_shift = ja;
exports.resize = Sa;
exports.reshape = qa;
exports.repeat = Ia;
exports.remainder = ka;
exports.reciprocal = Na;
exports.ravel = Ma;
exports.ranf = Aa;
exports.random_sample = $a;
exports.random = va;
exports.rand = za;
exports.radians = _a;
exports.rad2deg = xa;
exports.put = ba;
exports.ptp = wa;
exports.prod = ya;
exports.power = ga;
exports.positive = ma;
exports.pick = ca;
exports.pi = pa;
exports.packbits = fa;
exports.ones = ha;
exports.ogrid = ua;
exports.not_equal = oa;
exports.normalize_axis_tuple = da;
exports.normalize_axis_mask = ia;
exports.normalize_axis_index = sa;
exports.normalize_axis = la;
exports.nonzero = na;
exports.negative = ra;
exports.ndoffset = aa;
exports.nditer = ta;
exports.ndindex = ea;
exports.ndim = Zt;
exports.ndenumerate = Qt;
exports.nansum = Bt;
exports.nanprod = Ct;
exports.nancumsum = Ut;
exports.nancumprod = Lt;
exports.nan_to_num = Ht;
exports.nan = Wt;
exports.multiply = Jt;
exports.moveaxis = Xt;
exports.mod = Yt;
exports.minimum = Vt;
exports.mean = Gt;
exports.maximum = Kt;
exports.matmul = Pt;
exports.map = Rt;
exports.logaddexp2 = Tt;
exports.logaddexp = Ft;
exports.log2 = Dt;
exports.log1p = Et;
exports.log10 = Ot;
exports.log = jt;
exports.linspace = St;
exports.less_equal = qt;
exports.less = It;
exports.left_shift = kt;
exports.ldexp = Nt;
exports.lcm = Mt;
exports.ix_ = At;
exports.isscalar = $t;
exports.isposinf = vt;
exports.isneginf = zt;
exports.isna = _t;
exports.isinf = xt;
exports.isfinite = bt;
exports.invert = wt;
exports.interp = yt;
exports.inf = gt;
exports.indices = mt;
exports.index_exp = ct;
exports.in1d = pt;
exports.identity = ft;
exports.hypot = ht;
exports.hstack = ut;
exports.hsplit = ot;
exports.greater_equal = dt;
exports.greater = it;
exports.gradient = st;
exports.gcd = lt;
exports.full = nt;
exports.fromiter = rt;
exports.fromfunction = at;
exports.fmod = tt;
exports.floor_divide = et;
exports.floor = Ze;
exports.flipud = Qe;
exports.fliplr = Be;
exports.flip = Ce;
exports.flatnonzero = Ue;
exports.fix = Le;
exports.eye = He;
exports.extract = We;
exports.expm1 = Je;
exports.expand_dims = Xe;
exports.exp2 = Ye;
exports.exp = Ve;
exports.even_strides = Ge;
exports.equal = Ke;
exports.empty_like = Pe;
exports.empty = Re;
exports.ediff1d = Te;
exports.e = Fe;
exports.dstack = De;
exports.dsplit = Ee;
exports.dot = Oe;
exports.divide = je;
exports.diff = Se;
exports.diagonal = qe;
exports.diag = Ie;
exports.degrees = ke;
exports.deg2rad = Ne;
exports.cumsum = Me;
exports.cumprod = Ae;
exports.cross = $e;
exports.count_nonzero = ve;
exports.cosh = ze;
exports.cos = _e;
exports.copyto = xe;
exports.copysign = be;
exports.copy = we;
exports.convolve = ye;
exports.contiguous = ge;
exports.concatenate = me;
exports.compress = ce;
exports.column_stack = pe;
exports.clip = fe;
exports.choice = he;
exports.ceil = ue;
exports.cbrt = oe;
exports.broadcastable_to = de;
exports.broadcastable = ie;
exports.broadcast_to = se;
exports.broadcast_shapes = le;
exports.broadcast = ne;
exports.bitwise_xor = re;
exports.bitwise_or = ae;
exports.bitwise_not = te;
exports.bitwise_and = ee;
exports.bincount = Z;
exports.axisfunc = Q;
exports.average = B;
exports.atleast_3d = C;
exports.atleast_2d = U;
exports.atleast_1d = L;
exports.assert = H;
exports.ascontiguousarray = W;
exports.asarray = J;
exports.array_str = X;
exports.array_split = Y;
exports.array_repr = V;
exports.array_equiv = G;
exports.array_equal = K;
exports.array2string = P;
exports.array = R;
exports.around = T;
exports.argwhere = F;
exports.argsort = D;
exports.arctanh = E;
exports.arctan2 = O;
exports.arctan = j;
exports.arcsinh = S;
exports.arcsin = q;
exports.arccosh = I;
exports.arccos = k;
exports.arange = N;
exports.any = M;
exports.amin = A;
exports.amax = $;
exports.all = v;
exports.add = z;
exports.absolute = _;
exports.abs = x;
exports._wrap_reduce = b;
exports._wrap_map_unary = w;
exports._wrap_map_binary = y;
exports._wrap_map = g;
exports._wrap_accum_unary = m;
exports._normalize_indices = c;
exports.Tester = p;
exports.Slice = f;
exports.Product = h;
exports.Nditer = u;
exports.NINF = o;
exports.NDArray = d;
exports.Generator = i;
exports.Flatiter = s;
exports.Broadcast = l;