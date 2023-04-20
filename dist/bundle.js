"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fix = exports.eye = exports.extract = exports.expm1 = exports.expand_dims = exports.exp2 = exports.exp = exports.equal = exports.empty_like = exports.empty = exports.ediff1d = exports.e = exports.dtype_ = exports.dtype = exports.dstack = exports.dsplit = exports.dot = exports.divide = exports.diff = exports.diagonal = exports.diag = exports.degrees = exports.deg2rad = exports.cumsum = exports.cumprod = exports.cross = exports.count_nonzero = exports.cosh = exports.cos = exports.copyto = exports.copysign = exports.copy = exports.convolve = exports.contiguous = exports.concatenate = exports.compress = exports.column_stack = exports.clip = exports.choice = exports.ceil = exports.cbrt = exports.broadcast_to = exports.broadcast_shapes = exports.broadcast = exports.bitwise_xor = exports.bitwise_or = exports.bitwise_not = exports.bitwise_and = exports.bincount = exports.axisfunc = exports.average = exports.atleast_3d = exports.atleast_2d = exports.atleast_1d = exports.assert = exports.ascontiguousarray = exports.asarray = exports.array_str = exports.array_split = exports.array_repr = exports.array_equiv = exports.array_equal = exports.array2string = exports.array = exports.around = exports.argwhere = exports.argsort = exports.arctanh = exports.arctan2 = exports.arctan = exports.arcsinh = exports.arcsin = exports.arccosh = exports.arccos = exports.arange = exports.any = exports.amin = exports.amax = exports.all = exports.add = exports.absolute = exports.abs = exports._wrap_reduce = exports._wrap_map_unary = exports._wrap_map_binary = exports._wrap_map = exports._wrap_accum_unary = exports._shape = exports._ndim = exports.Tester = exports.Slice = exports.Product = exports.Ndoffset = exports.Nditer = exports.NINF = exports.NDArray = exports.Generator = exports.Flatiter = exports.Dtype = exports.Broadcast = void 0;
exports.s_ = exports.row_stack = exports.roll = exports.rint = exports.right_shift = exports.resize = exports.reshape = exports.repeat = exports.remainder = exports.reciprocal = exports.ravel = exports.ranf = exports.random_sample = exports.random = exports.rand = exports.radians = exports.rad2deg = exports.put = exports.ptp = exports.prod = exports.power = exports.positive = exports.pick = exports.pi = exports.packbits = exports.ones_like = exports.ones = exports.ogrid = exports.not_equal = exports.normalize_axis_tuple = exports.normalize_axis_mask = exports.normalize_axis_index = exports.normalize_axis = exports.nonzero = exports.negative = exports.ndoffset = exports.nditer = exports.ndindex = exports.ndim = exports.ndenumerate = exports.nansum = exports.nanprod = exports.nancumsum = exports.nancumprod = exports.nan_to_num = exports.nan = exports.multiply = exports.moveaxis = exports.mod = exports.minimum = exports.mean = exports.maximum = exports.matmul = exports.map = exports.logaddexp2 = exports.logaddexp = exports.log2 = exports.log1p = exports.log10 = exports.log = exports.linspace = exports.less_equal = exports.less = exports.left_shift = exports.ldexp = exports.lcm = exports.ix_ = exports.isscalar = exports.isposinf = exports.isneginf = exports.isna = exports.isinf = exports.isfinite = exports.invert = exports.interp = exports.inf = exports.indices = exports.index_exp = exports.in1d = exports.identity = exports.hypot = exports.hstack = exports.hsplit = exports.guessType = exports.greater_equal = exports.greater = exports.gradient = exports.get_size = exports.gcd = exports.full_like = exports.full = exports.fromiter = exports.fromfunction = exports.fmod = exports.floor_divide = exports.floor = exports.flipud = exports.fliplr = exports.flip = exports.flatnonzero = void 0;
exports.zeros_like = exports.zeros = exports.where = exports.vstack = exports.vsplit = exports.variance = exports.unwrap = exports.unpackbits = exports.tuple_ = exports.tupleType = exports.trunc = exports.true_divide = exports.trapz = exports.transpose = exports.timeit2 = exports.timeit = exports.tile = exports.tester = exports.tanh = exports.tan = exports.take = exports.swapaxes = exports.sum = exports.subtract = exports.std = exports.stack = exports.squeeze = exports.square = exports.sqrt = exports.split = exports.sort = exports.slice = exports.sinh = exports.sin = exports.signbit = exports.sign = exports.shape_ = exports.shape = exports.shallow_array_equal = exports.searchsorted = exports.sample = void 0;
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
    return e instanceof v && (e = e.valueOf()), Array.isArray(e) ? JSON.stringify(e) : e;
  }
  r.d(n, {
    zvA: () => oe,
    bFe: () => h,
    iIB: () => X,
    RO$: () => Sr,
    zhN: () => v,
    _bh: () => It,
    OVY: () => we,
    mXy: () => Rn,
    xsH: () => bn,
    p2w: () => m,
    SRu: () => l,
    NYz: () => ce,
    Buv: () => O,
    E4R: () => ot,
    tw1: () => st,
    Yur: () => dt,
    RPv: () => it,
    JWo: () => ht,
    WnP: () => Va,
    AGi: () => Ya,
    IHx: () => ft,
    $6P: () => _t,
    Lb7: () => Ta,
    t5D: () => Da,
    YjB: () => zt,
    eTT: () => H,
    FKo: () => Dt,
    Hn6: () => Bt,
    PD: () => Tt,
    oSO: () => Ct,
    Xsc: () => Pt,
    gJP: () => Kt,
    $jo: () => Lt,
    s6s: () => or,
    S1h: () => Me,
    Q8B: () => Zt,
    IXX: () => S,
    FJh: () => $n,
    YSU: () => Ee,
    Vjr: () => Oe,
    xok: () => kn,
    oix: () => Lr,
    Yqf: () => Mn,
    k2d: () => R,
    FAR: () => ae,
    hu8: () => vn,
    V2R: () => se,
    dcL: () => ie,
    ujY: () => de,
    Y8W: () => Or,
    pHG: () => qe,
    yE8: () => Pr,
    W4K: () => Ja,
    GBu: () => Wa,
    eYE: () => Ha,
    qgf: () => Ca,
    fMc: () => ue,
    xAU: () => J,
    M2z: () => T,
    eKn: () => Ra,
    mDi: () => ra,
    q$q: () => zr,
    oqW: () => dr,
    T8D: () => Cr,
    nNb: () => ke,
    mVq: () => De,
    y39: () => re,
    RrX: () => ir,
    JGK: () => _e,
    JGz: () => $a,
    zOr: () => D,
    mCk: () => Ot,
    f9Y: () => Jt,
    zNN: () => Ie,
    kCc: () => lr,
    $Gn: () => oa,
    zbp: () => ua,
    VlM: () => Ut,
    RWx: () => Vt,
    Ka3: () => ln,
    on5: () => nn,
    Hgg: () => pa,
    csF: () => mt,
    AKD: () => An,
    wIX: () => Zr,
    N5d: () => Hr,
    cTT: () => p,
    sk1: () => c,
    e: () => Nt,
    D5q: () => ca,
    cSb: () => K,
    sKD: () => V,
    DgJ: () => Qa,
    Qqt: () => ma,
    uuq: () => ga,
    aD1: () => me,
    t$B: () => ya,
    KlT: () => Se,
    iyy: () => he,
    zG0: () => ta,
    KTV: () => je,
    RRI: () => sn,
    HC4: () => dn,
    Ah7: () => on,
    GWj: () => aa,
    Sc8: () => gt,
    Ek0: () => Ea,
    v_D: () => ze,
    KSO: () => ve,
    rpZ: () => U,
    NxV: () => W,
    thl: () => qa,
    rn5: () => $,
    FLS: () => nr,
    pjt: () => rr,
    zGm: () => ar,
    smV: () => q,
    Hsf: () => en,
    DIH: () => Jr,
    _mT: () => Rt,
    yRu: () => fe,
    HqJ: () => Vr,
    S8h: () => fn,
    CGm: () => Rr,
    gY6: () => qt,
    Zw8: () => hr,
    U_R: () => Ua,
    f0i: () => vt,
    fXA: () => At,
    I7t: () => $t,
    igg: () => Mt,
    ftH: () => kt,
    KvH: () => _,
    IW_: () => Kr,
    uqG: () => ja,
    vy: () => Ma,
    Ai1: () => Ba,
    d9m: () => tr,
    bzW: () => er,
    SX3: () => C,
    cM7: () => wa,
    mvw: () => ba,
    Krr: () => _a,
    k3Q: () => xa,
    YKj: () => za,
    buk: () => va,
    UID: () => _n,
    Jxs: () => zn,
    gWQ: () => Oa,
    J69: () => Fr,
    LTh: () => Fa,
    wQq: () => wt,
    U8E: () => Pe,
    JpY: () => ct,
    qnd: () => St,
    dQs: () => Xa,
    $7d: () => ha,
    RCU: () => fa,
    MIL: () => ia,
    obs: () => da,
    $V5: () => $e,
    p3s: () => pe,
    x2A: () => P,
    fyW: () => be,
    MHD: () => Kn,
    pdy: () => Na,
    MaX: () => Ae,
    S4p: () => ye,
    INJ: () => Ve,
    lf5: () => Ge,
    ffp: () => ge,
    AqN: () => Za,
    qDh: () => Ir,
    iUs: () => Q,
    r6Y: () => Z,
    NCv: () => Yr,
    pi: () => jt,
    eiS: () => _r,
    i1C: () => ka,
    qux: () => xt,
    WVs: () => la,
    OZM: () => Er,
    gzd: () => cn,
    BVy: () => Xt,
    uRy: () => Yt,
    TN_: () => Mr,
    MXc: () => jr,
    di9: () => vr,
    n3V: () => Ar,
    nTq: () => Ne,
    M25: () => Ia,
    spK: () => bt,
    rx1: () => an,
    XLQ: () => G,
    SIr: () => mn,
    wyi: () => La,
    XC3: () => ea,
    SlP: () => xn,
    aSG: () => Br,
    s_: () => pn,
    UPJ: () => $r,
    FvN: () => wn,
    flC: () => Fe,
    mCt: () => E,
    FPS: () => F,
    Xxe: () => Ga,
    UBE: () => Aa,
    O$l: () => Et,
    R_K: () => Wt,
    tPi: () => x,
    DYV: () => ur,
    Vl2: () => Qr,
    _b3: () => Pa,
    h62: () => Ka,
    L9e: () => xe,
    knu: () => Ur,
    qoR: () => Dr,
    $XF: () => pt,
    Smz: () => sa,
    ZU4: () => ne,
    qnb: () => L,
    ORZ: () => Ft,
    AEp: () => Ht,
    K1B: () => s,
    Gg6: () => rn,
    uAr: () => d,
    BpP: () => i,
    p4s: () => le,
    ebm: () => sr,
    $I7: () => yt,
    RFc: () => na,
    DDI: () => hn,
    vwf: () => Y,
    bLT: () => Xr,
    Wg4: () => Gt,
    CAK: () => Tr,
    nFP: () => tn,
    Ud9: () => Wr,
    arb: () => qr,
    lls: () => ee,
    T1S: () => te
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
        l.push([f, `#${r}: ${u ? "passed" : "fail"}`, "\nTest=\n", t(a), "\nExpected=\n", t(s)]), r++;
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
  let o = e => e,
    u = new WeakMap();
  class h {
    #e;
    constructor(e = o, t = Array, a = `${e}`) {
      this.name = a, this.type = e, this.#e = t, u.set(e, a), u.set(t, a);
    }
    new(e, t = null) {
      let a = new this.#e(e);
      if (null != t) if (null != a.set) a.set(t);else for (let e = 0; e < t.length; e++) a[e] = t[e];
      return a;
    }
    toString() {
      return `dtype('${this.name}')`;
    }
    valueOf() {
      return this.type;
    }
  }
  let f = {
    int8: new h(Number, Int8Array, "int8"),
    uint8: new h(Number, Uint8Array, "uint8"),
    int16: new h(Number, Int16Array, "int16"),
    uint16: new h(Number, Uint16Array, "uint16"),
    int32: new h(Number, Int32Array, "int32"),
    uint32: new h(Number, Uint32Array, "uint32"),
    float32: new h(Number, Float32Array, "float32"),
    float64: new h(Number, Float64Array, "float64"),
    boolean: new h(Boolean, class extends Array {}, "boolean"),
    number: new h(Number, class extends Array {}, "number"),
    string: new h(String, class extends Array {}, "string"),
    object: new h(o, Array, "object")
  };
  function p(e = "object", t = undefined, a = undefined) {
    if ("string" == typeof e) {
      if (!Object.hasOwn(f, e)) throw new Error(`${e} is not supported`);
      return f[e];
    }
    return e instanceof h ? e : u.has(e) ? f[u.get(e)] : f[a] = new h(e, t, a);
  }
  Object.assign(f, {
    int: f.number,
    float: f.number
  });
  const c = p;
  s.add(p, () => p("number"), () => p("number")).add(p, () => p(Number), () => p("number")).add(p, () => p(Int16Array), () => p("int16"));
  class m {
    static newaxis = null;
    static ellipsis = new m();
    static colon = new m();
    constructor(e, t, a) {
      this.start = e, this.stop = t, this.step = a;
    }
    indices(e = null) {
      let t,
        {
          start: a,
          stop: r,
          step: n
        } = this;
      if (n ??= 1, null == e) {
        if (a ??= 0, null == r) throw new Error("stop must be non-null");
      } else null == a ? a = n < 0 ? e - 1 : 0 : (a < 0 && (a += e), a < 0 && (a = n < 0 ? -1 : 0), a >= e && (a = n < 0 ? e - 1 : e)), null == r ? r = n < 0 ? -1 : e : (r < 0 && (r += e), r < 0 && (r = n < 0 ? -1 : 0), r >= e && (r = n < 0 ? e - 1 : e));
      return t = 0 == n || n < 0 && r >= a || n > 0 && a >= r ? 0 : n < 0 ? (r - a + 1) / n + 1 | 0 : (r - a - 1) / n + 1 | 0, new y(a, r, n, t);
    }
    toString() {
      if (this == m.ellipsis) return "...";
      if (this == m.colon) return ":";
      let {
          start: e,
          stop: t,
          step: a
        } = this,
        r = `${e ?? ""}:${t ?? ""}`;
      return null != a && (r += `:${a}`), r;
    }
  }
  class y {
    #t;
    #a;
    #r;
    constructor(e, t, a, r) {
      this.start = e, this.stop = t, this.step = a, this.slicelength = r;
    }
    [Symbol.iterator]() {
      return this.reset(), this;
    }
    reset() {
      let {
        start: e,
        slicelength: t
      } = this;
      this.#r = 0, this.#a = 0 == t, this.#t = e;
    }
    next() {
      if (this.#a) return {
        done: !0
      };
      let {
          step: e,
          slicelength: t
        } = this,
        a = this.#t;
      return this.#t += e, this.#a = ++this.#r >= t, {
        value: a,
        done: !1
      };
    }
  }
  let g = Object.assign(Object.create(null), {
      None: m.newaxis,
      "...": m.ellipsis,
      ":": m.colon
    }),
    w = e => 0 == (e = e.trim()).length ? null : +e,
    b = (e, t) => {
      if (null != e && !Number.isInteger(e = +e)) throw new Error(`${t} must be either null or able to convert to integer`);
      return e;
    };
  function x(e = null, t = null, a = null) {
    if ("string" == typeof e) {
      if (Object.hasOwn(g, e)) return g[e];
      let r = e.split(":");
      if (0 == r.length || r.length > 3) throw new Error(`invalid string slice representation ${e}`);
      e = w(r[0]), t = r.length > 1 ? w(r[1]) : null, a = r.length > 2 ? w(r[2]) : null;
    } else e && "object" == typeof e && (null != e[Symbol.iterator] ? [e = null, t = null, a = null] = e : null != e.length ? ({
      0: e = null,
      1: t = null,
      2: a = null
    } = e) : ({
      start: e = null,
      stop: t = null,
      step: a = null
    } = e));
    return null == e && null == t && null == a ? m.colon : (e = b(e, "start"), t = b(t, "stop"), a = b(a, "step"), new m(e, t, a));
  }
  function _(e) {
    switch (typeof e) {
      case "boolean":
      case "function":
      case "number":
      case "string":
        return !0;
    }
    return !1;
  }
  x.newaxis = m.newaxis, x.ellipsis = m.ellipsis, x.colon = m.colon, s.add(x, () => x(0, 1, 2).toString(), () => "0:1:2").add(x, () => x(null, 1, 2).toString(), () => ":1:2").add(x, () => x(0, null, 2).toString(), () => "0::2").add(x, () => x(null, null, -1).toString(), () => "::-1").add(x, () => x(null, null, null).toString(), () => ":"), s.add("isscalar", () => _(3.1), () => !0).add("isscalar", () => _(S(3.1)), () => !1).add("isscalar", () => _([3.1]), () => !1).add("isscalar", () => _(!1), () => !0).add("isscalar", () => _("numpy"), () => !0).add("isscalar", () => _(Number()), () => !0);
  var z = r(460);
  class v {
    constructor(e, t = null, a = null, r = null, n = null, l = 0, s = 1) {
      this.ndim = e.length, this.size = $(e), this.shape = e, this.data = t ?? Array(this.size), this.itemsize = s, this.strides = n ?? A(e, this.ndim, s), this.offset = l, this.dtype = c(a ?? t.constructor), this.base = r?.base ?? r;
    }
    get length() {
      let {
        ndim: e,
        shape: t
      } = this;
      if (0 != e) return t[0];
    }
    toString() {
      return Mn(this);
    }
    valueOf() {
      return 0 == this.ndim ? this.item() : kn(this);
    }
    *[Symbol.iterator]() {
      for (let e = 0; e < this.shape[0]; e++) yield this.at(e);
    }
    keys() {
      let {
        shape: e,
        strides: t,
        offset: a
      } = this;
      return Kn(e, t, a);
    }
    values() {
      return this.flat;
    }
    idx(e) {
      let {
        shape: t,
        strides: a,
        ndim: r,
        size: n,
        offset: l
      } = this;
      if (0 == e) return l;
      if (null == e) {
        if (1 != n) throw new Error("index cannot be empty if size != 1");
        return l;
      }
      let s = function (e, t, a, r) {
        if (Number.isInteger(e)) {
          let n = e;
          if (n < 0 && (n += r), n < 0 || n >= r) throw new Error(`index ${e} out of bound for size ${r}`);
          if (0 == a) return [0];
          let l = Array(a);
          for (let e = a - 1; e >= 0; e--) l[e] = n % t[e], n = n / t[e] | 0;
          return l;
        }
        if (e.length != a) throw new Error("incorrect number of indices for array");
        return e;
      }(e, t, r, n);
      for (let e = 0; e < s.length; e++) {
        let r = s[e],
          n = t[e];
        if (r < 0 && (r += n), r < 0 || r >= n) throw new Error(`index ${s[e]} out of bound for dimension ${n}`);
        l += r * a[e];
      }
      return l;
    }
    at(...e) {
      return this.get(e);
    }
    get(e) {
      return k(e) ? N.call(this, e) : M(this, e);
    }
    set(e, t) {
      if (1 == arguments.length) return D(this, e), this;
      if (k(e)) throw new Error("cannot use advanced indexing in .set()");
      return D(M(this, e), t), this;
    }
    item(e) {
      return this.data[this.idx(e)];
    }
    itemset(e, t) {
      return this.data[this.idx(e)] = t, this;
    }
    astype(e, t = !0) {
      if (e = c(e), t ||= this.dtype != e, !t) return this;
      let {
          shape: a,
          size: r
        } = this,
        n = e.new(r, [...this.flat]);
      return new v(a, n, e);
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
      for (let e = 0; e < s; e++) i.push(this.at(e).toarray());
      return i;
    }
    tolist() {
      return this.toarray();
    }
    get flat() {
      return new X(this);
    }
    set flat(e) {
      this.flat.set(":", e);
    }
    get T() {
      return le(this);
    }
    set T(e) {
      this.T.set(e);
    }
    reshape(...e) {
      return 1 == e.length && "object" == typeof e[0] && (e = e[0]), G(this, e);
    }
    all(e = null, t = null, a = !1, r = !0, n = !0) {
      return _t(this, e, t, a, r, n);
    }
    any(e = null, t = null, a = !1, r = !1, n = !0) {
      return zt(this, e, t, a, r, n);
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
      return or(this, e, t);
    }
    byteswap() {
      throw "not implemented";
    }
    choose(e, t = null, a = "raise") {
      throw "not implemented";
    }
    clip(e, t, a = null) {
      return dr(this, e, t, a);
    }
    compress(e, t = null, a = null) {
      return ke(e, this, t, a);
    }
    conj() {
      throw "not implemented";
    }
    conjugate() {
      throw "not implemented";
    }
    copy() {
      return S(this);
    }
    cumprod(e, t) {
      return oa(this, e, t);
    }
    cumsum(e, t) {
      return ua(this, e, t);
    }
    diagonal(e = 0, t = 0, a = 1) {
      return nn(this, e, t, a);
    }
    dump() {
      throw "not implemented";
    }
    dumps() {
      throw "not implemented";
    }
    fill(e) {
      let {
        data: t,
        shape: a,
        strides: r,
        offset: n
      } = this;
      for (let l of Kn(a, r, n)) t[l] = e;
      return this;
    }
    flatten() {
      let {
        size: e,
        flat: t,
        dtype: a
      } = this;
      return new v([e], [...t], a);
    }
    getfield() {
      throw "not implemented";
    }
    max(e = null, t = null, a = !1, r = null, n = !0) {
      return Ta(this, e, t, a, r, n);
    }
    mean(e = null, t = null, a = !1) {
      return Fr(this, e, t, a);
    }
    min(e = null, t = null, a = !1, r = null, n = !0) {
      return Da(this, e, t, a, r, n);
    }
    newbyteorder() {
      throw "not implemented";
    }
    nonzero() {
      return Ae(this);
    }
    partition(e, t = -1, a = "introselect", r = null) {
      throw "not implemented";
    }
    prod(e = null, t = null, a = !1, r = 0, n = !0) {
      return la(this, e, t, a, r, n);
    }
    ptp(e = null, t = null, a = !1) {
      return Er(this, e, t, a);
    }
    put(e, t, a = "raise") {
      return cn(this, e, t, a), this;
    }
    ravel() {
      return Ne(this);
    }
    repeat(e, t = null) {
      return an(this, e, t);
    }
    resize(e) {
      if (null != this.base) throw "cannot resize this array: it does not own its data";
      if (!re(this)) throw "resize only works on single-segment arrays";
      let t = $(e);
      return t <= this.size ? this.data = [...this.data.slice(this.offset, t)] : this.data = [...this.data.slice(this.offset, t), ...Array(t - this.size).fill(0)], this.shape = e, this.ndim = e.length, this.strides = A(e, this.ndim, this.itemsize), this.offset = 0, this;
    }
    round(e = 0, t = null) {
      return Zt(this, e, t);
    }
    searchsorted(e, t = "left") {
      return wn(this, e, t);
    }
    setfield() {
      throw "not implemented";
    }
    setflags() {
      throw "not implemented";
    }
    sort(e = -1, t = null) {
      return this.set(ur(this, e, t)), this;
    }
    squeeze(e = null) {
      return xe(this, e);
    }
    std(e = null, t = null, a = 0, r = !1) {
      return Dr(this, e, t, a, r);
    }
    sum(e = null, t = null, a = !1, r = 0, n = !0) {
      return sa(this, e, t, a, r, n);
    }
    swapaxes(e, t) {
      return ne(this, e, t);
    }
    take(e, t = null, a = null, r = "raise") {
      return L(this, e, t, a, r);
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
      return le(this, e);
    }
    variance(e = null, t = null, a = 0, r = !1) {
      return Tr(this, e, t, a, r);
    }
  }
  function A(e, t, a) {
    if (0 == t) return [];
    let r = Array(t);
    r[t - 1] = a;
    for (let a = t - 1; a > 0; a--) r[a - 1] = r[a] * e[a];
    return r;
  }
  function $(e) {
    let t = 1;
    for (let a of e) t *= a;
    return t;
  }
  function M(e, t) {
    let {
        shape: a,
        ndim: r,
        strides: n,
        offset: l,
        data: s,
        itemsize: i,
        base: d,
        dtype: o
      } = e,
      u = 0,
      h = -1;
    for (let e = 0; e < t.length; e++) {
      let a = t[e];
      if (a == m.newaxis) u++;else if (a == m.ellipsis) {
        if (-1 != h) throw new Error("an index can only have a single ellipsis ('...')");
        h = e;
      }
    }
    if (-1 != h) {
      let e = Array(r + u - t.length + 1).fill(m.colon),
        a = t.slice(0, h),
        n = t.slice(h + 1);
      t = [].concat(a, e, n);
    }
    if (t.length - u > r) throw new Error("too many indices for array");
    a = [...a], n = [...n];
    let f = 0;
    for (let e of t) if (null != e) {
      if ("string" == typeof e) e = x(e);else if (!(e instanceof m)) {
        let t = e;
        if (t < 0 && (t += a[f]), t < 0 || t > a[f]) throw new Error(`index ${e} out of bound for dimension size ${a[f]}`);
        l += n[f] * t, a.splice(f, 1), n.splice(f, 1);
        continue;
      }
      if (e != m.colon) {
        let {
          start: t,
          step: r,
          slicelength: s
        } = e.indices(a[f]);
        l += n[f] * t, a.splice(f, 1, s), n.splice(f, 1, n[f] * r);
      }
      f++;
    } else a.splice(f, 0, 1), n.splice(f, 0, 1), f++;
    return new v(a, s, o, d ?? e, n, l, i);
  }
  function k(e) {
    for (let t of e) if (null != t && "object" == typeof t && (Array.isArray(t) || t instanceof v)) return !0;
    return !1;
  }
  function N(e) {
    let t,
      a,
      r,
      n = !0,
      l = 0,
      s = e.length - 1,
      i = e.map(e => e instanceof m);
    for (; l < s && i[l]; l++);
    for (; s > l && i[s]; s--);
    for (let e = l + 1; e < s; e++) if (i[e]) {
      n = !1;
      break;
    }
    let d = this.shape.map((t, a) => i[a] ? e[a].indices(t).slicelength : e[a]);
    if (n) t = d.slice(0, l), a = d.slice(s + 1), r = e.slice(l, s + 1);else {
      t = [], a = d.filter((e, t) => i[t]), r = [];
      for (let t = l; t <= s; t++) i[t] || r.push(e[t]);
    }
    let o = ue(...r),
      u = [...t, ...o.shape, ...a];
    e = e.slice();
    let h = [];
    for (let t of o) {
      for (let a = 0, r = 0; a < e.length; a++) i[a] || (e[a] = t[r++]);
      h.push(this.at(...e, null));
    }
    return new v(u, De(h, t.length).data);
  }
  function S(e, t = undefined, a = !0, r = 0) {
    if (e instanceof v) {
      let {
        shape: n,
        ndim: l
      } = e;
      return l < r && (n = Array(r - l).fill(1).concat(n), e = e.reshape(n)), e.astype(t ?? e.dtype, a);
    }
    let n = F(e),
      l = [];
    j(l, e, n, 0);
    let s = n.length;
    return s < r && (n = Array(r - s).fill(1).concat(n)), t = c(t ?? q(l)), new v(n, t.new(l.length, l), t);
  }
  function j(e, t, a, r = 0) {
    if (r < a.length) for (let n = 0; n < a[r]; n++) j(e, t.at(n), a, r + 1);else "function" == typeof t?.toarray && (t = t.toarray()), e.push(t);
  }
  function q(e) {
    let t;
    if ("object" == typeof e && e?.[Symbol.iterator]) {
      t = typeof e[0];
      for (let a of e) if (t != typeof a) {
        t = "object";
        break;
      }
    } else t = typeof e;
    return "number" == t || "string" == t || "boolean" == t ? t : "object";
  }
  function I(e, t, a = 0) {
    for (let r = 0; r < e.length && a < t.length; r++) {
      let n = e[r];
      if (null == n || "object" != typeof n || n.length != t[a]) {
        t.length = a;
        break;
      }
      if (n instanceof v) {
        for (let e = a, r = 0; e < t.length && r < n.ndim; e++, r++) if (t[e] != n.shape[r]) {
          t.length = e;
          break;
        }
      } else a + 1 < t.length && I(n, t, a + 1);
    }
  }
  function E(e) {
    if (null == e || "object" != typeof e) return [];
    if (null != e.shape) return e.shape;
    let t = [],
      a = e;
    for (;;) {
      if (a instanceof v) t.push(...a.shape);else if ("object" == typeof a && null != a?.length) {
        t.push(a.length), a = a[0];
        continue;
      }
      break;
    }
    return t.length > 1 && I(e, t, 1), t;
  }
  v.prototype[z?.inspect?.custom] = function () {
    return this.valueOf();
  }, s.onload(() => {}), s.add("ndarray.get", () => H(120).reshape(4, 6, 5, 1).at(S([0, 2, 1]), x(), [0, 2, 4], x()), () => S([[[0], [5], [10], [15], [20], [25]], [[62], [67], [72], [77], [82], [87]], [[34], [39], [44], [49], [54], [59]]])).add("ndarray.get", () => H(120).reshape(4, 6, 5, 1).at(S([0, 2, 1]), S([0, 2, 1]), x(), x()), () => S([[[0], [1], [2], [3], [4]], [[70], [71], [72], [73], [74]], [[35], [36], [37], [38], [39]]])).add("ndarray.get", () => H(120).reshape(4, 6, 5, 1).at(x(), S([0, 2, 1]), S([0, 2, 4]), x()), () => S([[[0], [12], [9]], [[30], [42], [39]], [[60], [72], [69]], [[90], [102], [99]]])).add("ndarray.get", () => H(120).reshape(4, 6, 5, 1).at(x(), S([0, 2, 1]), x(), [0, 0, 0]), () => S([[[0, 1, 2, 3, 4], [30, 31, 32, 33, 34], [60, 61, 62, 63, 64], [90, 91, 92, 93, 94]], [[10, 11, 12, 13, 14], [40, 41, 42, 43, 44], [70, 71, 72, 73, 74], [100, 101, 102, 103, 104]], [[5, 6, 7, 8, 9], [35, 36, 37, 38, 39], [65, 66, 67, 68, 69], [95, 96, 97, 98, 99]]])).add("ndarray.get", () => H(120).reshape(4, 6, 5, 1).at(x(), x(), S([0, 2, 1]), S([0, 0, 0])), () => S([[[0, 2, 1], [5, 7, 6], [10, 12, 11], [15, 17, 16], [20, 22, 21], [25, 27, 26]], [[30, 32, 31], [35, 37, 36], [40, 42, 41], [45, 47, 46], [50, 52, 51], [55, 57, 56]], [[60, 62, 61], [65, 67, 66], [70, 72, 71], [75, 77, 76], [80, 82, 81], [85, 87, 86]], [[90, 92, 91], [95, 97, 96], [100, 102, 101], [105, 107, 106], [110, 112, 111], [115, 117, 116]]])).add("ndarray.get", () => H(120).reshape(4, 6, 5, 1).at(S([0, 2, 1]), x(), x(), S([0, 0, 0])), () => S([[[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [25, 26, 27, 28, 29]], [[60, 61, 62, 63, 64], [65, 66, 67, 68, 69], [70, 71, 72, 73, 74], [75, 76, 77, 78, 79], [80, 81, 82, 83, 84], [85, 86, 87, 88, 89]], [[30, 31, 32, 33, 34], [35, 36, 37, 38, 39], [40, 41, 42, 43, 44], [45, 46, 47, 48, 49], [50, 51, 52, 53, 54], [55, 56, 57, 58, 59]]])).add("ndarray.get", () => H(120).reshape(4, 6, 5, 1).at(S([0, 2, 1]), S([0, 2, 1]), x(), 0), () => S([[0, 1, 2, 3, 4], [70, 71, 72, 73, 74], [35, 36, 37, 38, 39]])).add("ndarray.get", () => H(120).reshape(4, 6, 5, 1).at(S([0, 2, 1]), x(), x(), 0), () => S([[[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [25, 26, 27, 28, 29]], [[60, 61, 62, 63, 64], [65, 66, 67, 68, 69], [70, 71, 72, 73, 74], [75, 76, 77, 78, 79], [80, 81, 82, 83, 84], [85, 86, 87, 88, 89]], [[30, 31, 32, 33, 34], [35, 36, 37, 38, 39], [40, 41, 42, 43, 44], [45, 46, 47, 48, 49], [50, 51, 52, 53, 54], [55, 56, 57, 58, 59]]])).add("ndarray.get", () => new v([2, 5], [...Array(10).keys()]).at(x(), x([,, -1])), () => [[4, 3, 2, 1, 0], [9, 8, 7, 6, 5]]).add("ndarray.get", () => new v([2, 5], [...Array(10).keys()]).at(x(-1), 3), () => [8]).add("ndarray.get", () => new v([2, 5], [...Array(10).keys()]).at(x([,, -1]), x([,, -1])), () => [[9, 8, 7, 6, 5], [4, 3, 2, 1, 0]]).add("ndarray.get", () => {
    let e;
    return e = S([[3, 0, 0], [0, 4, 0], [5, 6, 0]]).at(x(), x(), null), e;
  }, () => S([[[3], [0], [0]], [[0], [4], [0]], [[5], [6], [0]]])).add("ndarray.get", () => {
    let e;
    return e = S([[3, 0, 0], [0, 4, 0], [5, 6, 0]]).at(x("..."), null), e;
  }, () => S([[[3], [0], [0]], [[0], [4], [0]], [[5], [6], [0]]])).add("ndarray.get", () => H(24).reshape(2, 3, 4).at(null, "...", null), () => S([[[[[0], [1], [2], [3]], [[4], [5], [6], [7]], [[8], [9], [10], [11]]], [[[12], [13], [14], [15]], [[16], [17], [18], [19]], [[20], [21], [22], [23]]]]])).add("ndarray.get", () => H(24).reshape(2, 3, 4).at(x(":"), [0, 2], x("::2")), () => S([[[0, 2], [8, 10]], [[12, 14], [20, 22]]])), s.add("ndarray.item", () => new v([2, 5], [...Array(10).keys()]).at(x([,, -1]), x([,, -1])).item(5), () => 4), s.add("ndarray.itemset", () => {
    let e = new v([3, 3], [[2, 2, 6], [1, 3, 6], [1, 0, 1]].flat());
    return e.itemset(4, 0), e.itemset([2, 2], 9), e;
  }, () => [[2, 2, 6], [1, 0, 6], [1, 0, 9]]), s.add("ndarray.set", () => {
    let e = new v([2, 5], [...Array(10).keys()]);
    return e.at(x(), x(1, -1)).set(10), e;
  }, () => [[0, 10, 10, 10, 4], [5, 10, 10, 10, 9]]), s.add("ndarray.flatten", () => S([[1, 2], [3, 4]]).flatten(), () => S([1, 2, 3, 4])), s.add("ndarray.flat.set", () => {
    let e = S([[1, 2, 3], [4, 5, 6]]);
    return e.flat = 3, e;
  }, () => S([[3, 3, 3], [3, 3, 3]])).add("ndarray.flat.set", () => {
    let e = S([[1, 2, 3], [4, 5, 6]]);
    return e.flat = [7, 8, 9, 10], e;
  }, () => S([[7, 8, 9], [10, 7, 8]])), s.add("ndarray.copy", () => {
    let e = S([[1, 2, 3]]);
    return e.copy() == e;
  }, () => !1).add("ndarray.copy", () => {
    let e = S([[1, 2, 3]]),
      t = e.copy();
    return t.itemset(0, -1), [e, t];
  }, () => [S([[1, 2, 3]]), S([[-1, 2, 3]])]), s.add("ndarray.resize", () => {
    let e = S([[0, 1], [2, 3]]);
    return e.resize([2, 1]), e;
  }, () => S([[0], [1]])).add("ndarray.resize", () => {
    let e = S([[0, 1], [2, 3]]);
    return e.resize([2, 3]), e;
  }, () => S([[0, 1, 2], [3, 0, 0]])).add("ndarray.resize", () => {
    let e = S([[0, 1], [2, 3]]),
      t = e;
    return e.resize([1, 1]), [e, t];
  }, () => [S([[0]]), S([[0]])]), s.add("array", () => S([3.1, 9]), () => [3.1, 9]).add("array", () => S([[9, 6], 3.1, 9]).shape, () => [3]).add("array", () => S(5), () => 5);
  const O = E,
    F = E;
  function T(e, t) {
    e = R(e);
    let {
      data: a,
      strides: r,
      offset: n,
      dtype: l,
      ndim: s
    } = e;
    if (s > t.length) throw new Error("broadcast shape has less dimensions than input array");
    let i = [];
    for (let a = t.length - 1, n = e.shape.length - 1; a >= 0; a--, n--) {
      if (n >= 0 && 1 != e.shape[n] && e.shape[n] != t[a]) throw new Error("operands could not be broadcast together");
      i[a] = n < 0 || 1 == e.shape[n] ? 0 : r[n];
    }
    return new v(t, a, l, e, i, n);
  }
  function D(e, t) {
    if (1 == (t = R(t)).size) {
      let a = t.item();
      for (let t of e.keys()) e.data[t] = a;
    } else {
      let a = T(t, e.shape).flat;
      for (let t of e.keys()) e.data[t] = a.next().value;
    }
  }
  function* P(e, t = !0) {
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
  function R(e, t = undefined) {
    return e instanceof v ? null == t ? e : e.astype(t, !1) : S(e, t);
  }
  function K(e, t = undefined) {
    return e = Y(e), t = c(t), new v(e, t.new($(e)), t);
  }
  function V(e, t = undefined) {
    return K((e = R(e)).shape, t ?? e.dtype);
  }
  function Y(e) {
    return e ? ("function" == typeof e.toarray && (e = e.toarray()), "object" == typeof e && null != e.length ? e : [e]) : [e];
  }
  function G(e, t) {
    e = R(e), t = Y(t);
    let a = -1,
      r = 1;
    for (let e = 0; e < t.length; e++) if (-1 == t[e]) {
      if (-1 != a) throw new Error("can only specify one unknown dimension");
      a = e;
    } else r *= t[e];
    if (-1 != a) {
      if (e.size % r != 0) throw new Error(`cannot reshape array of size ${e.size} into shape [${t.join(", ")}]`);
      t[a] = 0 == r ? 0 : e.size / r;
    }
    if (e.size != $(t)) throw new Error(`cannot reshape array of size ${e.size} into shape [${t.join(", ")}]`);
    if (null == e.base) return new v(t, e.data, e.dtype, e);
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
        return new v(t, e.data, e.dtype, e, a, e.offset, e.itemsize);
      }
    }
    let n = null;
    1 == t.length && function (e, t, a) {
      let r;
      for (let t = a - 1; t > 0; t--) if (e[t] > 1) {
        r = t;
        break;
      }
      for (let a = r - 1; a >= 0; a--) if (e[a] > 1) {
        if (t[a] != t[r] * e[r]) return !1;
        r = a;
      }
      return !0;
    }(e.shape, e.strides, e.ndim) ? n = [e.strides[0]] : 0 != t.length && (e = S(e));
    let {
      data: l,
      dtype: s,
      offset: i,
      itemsize: d
    } = e;
    return new v(t, l, s, e, n, i, d);
  }
  s.add("shape", () => E([[[3, 9]], [[3, 9, 3]], [[3, 9]]]), () => [3, 1]).add("shape", () => E([1, 2, 3, [1, 3]]), () => [4]).add("shape", () => E([0]), () => [1]).add("shape", () => E(0), () => []).add("shape", () => E([H(24).reshape(1, 2, 3, 4), H(24).reshape(1, 2, 12), H(24).reshape(1, 2, 12)]), () => [3, 1, 2]).add("shape", () => E([H(24).reshape(1, 2, 3, 4), H(24).reshape(1, 2, 3, 4), H(24).reshape(1, 2, 3, 4)]), () => [3, 1, 2, 3, 4]), s.add("broadcast_to", () => T(new v([3], [1, 2, 3]), [3, 3]).toarray(), () => [[1, 2, 3], [1, 2, 3], [1, 2, 3]]), s.add("broadcast_to", () => T(new v([1, 3, 1], [1, 2, 3]), [2, 3, 4]).toarray(), () => [[[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]]]), s.add("copyto", () => {
    let e = R([4, 5, 6]);
    return D(e, [1, 2, 3]), e;
  }, () => [1, 2, 3]).add("copyto", () => {
    let e = R([[1, 2, 3], [4, 5, 6]]);
    return D(e, [[4, 5, 6], [7, 8, 9]]), e;
  }, () => [[4, 5, 6], [7, 8, 9]]).add("copyto", () => {
    let e = R([[0, 1, 2], [3, 4, 5]]);
    return D(e.at(x(), 1), [-1, -2]), e;
  }, () => [[0, -1, 2], [3, -2, 5]]), s.add("asarray", () => {
    let e = S([[1, 2], [3, 4]]);
    return R(e) === e;
  }, () => !0).add("asarray", () => R([[1, 2], [3, 4]]), () => [[1, 2], [3, 4]]), s.add("empty", () => K([2, 2]), () => [[,,], [,,]]).add("empty", () => K(0), () => []).add("empty", () => K([]), () => {}), s.add("empty_like", () => V([[1, 2, 3], [4, 5, 6]]), () => [[,,,], [,,,]]).add("empty_like", () => V([1, 2, 3, [1, 3]]), () => [,,,,]), s.add(G, () => G(S([1, 2, 3, 4, 5]).at(x("::-2")), -1), () => S([5, 3, 1])).add(G, () => G(S([1]), []), () => S(1)).add(G, () => G(S(1), 1), () => S([1])).add(G, () => G(S(1), -1), () => S([1])).add("reshape", () => G(R([[0, 1], [2, 3], [4, 5]]), [2, 3]), () => [[0, 1, 2], [3, 4, 5]]).add("reshape", () => G(R([[[[0, 1]]]]), [2, -1]), () => [[0], [1]]).add("reshape", () => {
    let e = R([[[[0, 1]]]]);
    return G(e, [2, -1]).base === e;
  }, () => !0).add("reshape", () => {
    let e = R([[[[0, 1]]]]).at(0);
    return G(e, [2, -1]).base === e;
  }, () => !1).add("reshape", () => G(S([[1, 2, 3], [4, 5, 6]]), [-1]), () => S([1, 2, 3, 4, 5, 6])).add("reshape", () => {
    let e = H(30),
      t = e.reshape([10, 3]).at(x("::2")),
      a = t.reshape(t.shape);
    return [t.toarray(), G(t, [1, 1, 5, -1, 3]).base === e, t.base === e, t.reshape(-1).base === e, a === t, a.base === e];
  }, () => [S([[0, 1, 2], [6, 7, 8], [12, 13, 14], [18, 19, 20], [24, 25, 26]]).toarray(), !0, !0, !1, !1, !0]);
  class X {
    #n;
    constructor(e) {
      this.base = e;
      let {
        shape: t,
        strides: a,
        offset: r
      } = e;
      this.#n = Kn(t, a, r);
    }
    get index() {
      return this.#n.index;
    }
    get coords() {
      return this.#n.coords;
    }
    [Symbol.iterator]() {
      return this.reset(), this;
    }
    reset() {
      this.#n.reset();
    }
    next() {
      let e = this.#n;
      if (e.done) return {
        done: !0
      };
      let t = e.next().value;
      return {
        value: this.base.data[t],
        done: !1
      };
    }
    at(e) {
      return this.get(e);
    }
    get(e) {
      let t,
        a,
        {
          base: r
        } = this;
      if ("number" == typeof e) return S(r.item(e), r.dtype);
      "string" == typeof e && (e = x(e)), e instanceof m ? (t = e.indices(r.size), a = K([t.slicelength], r.dtype)) : (t = R(e).flat, a = V(e));
      let n = 0;
      for (let e of t) a.data[n++] = r.item(e);
      return a;
    }
    set(e, t) {
      let {
        base: a
      } = this;
      if ("number" == typeof e) return a.itemset(e, t), this;
      "string" == typeof e && (e = x(e)), t = t instanceof X ? [...t] : R(t).flatten().data;
      let r = e instanceof m ? e.indices(a.size) : R(e).flat,
        n = 0;
      for (let e of r) a.itemset(e, t[n++ % t.length]);
      return this;
    }
    copy() {
      return S([...this], this.base.dtype);
    }
  }
  function U(e, t, a = undefined) {
    let r = K(e, a ?? q(t));
    return D(r, t), r;
  }
  function W(e, t, a = undefined) {
    let r = V(e, a ?? q(t));
    return D(r, t), r;
  }
  function J(...e) {
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
  function H(e, t = undefined, a = 1) {
    null == t && (t = e, e = 0);
    let r = Math.max(0, (t - e) / a | 0),
      n = K([r], "number"),
      {
        data: l
      } = n;
    for (let t = 0; t < r; t++) l[t] = e + t * a;
    return n;
  }
  function C(e, t, a = 50, r = !0, n = !1) {
    let l = (t - e) / (r ? a - 1 : a),
      s = [];
    for (let t = 0; t < a; t++) s[t] = e + t * l;
    let i = new v([a], s);
    return n ? [i, l] : i;
  }
  function B(e, t, r) {
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
  function L(e, t, a = null, r = null, n = "raise") {
    if (e = R(e), t = S(t), null == a) {
      t.data = B(t.data, n, e.size);
      let a = t.shape;
      if (null == r) r = K(a);else if (!Fe(r.shape, a)) throw "output array does not match result of ndarray.take";
      for (let a = 0; a < t.size; a++) r.data[a] = e.item(t.data[a]);
      return r;
    }
    {
      a < 0 && (a += e.ndim), t.data = B(t.data, n, e.shape[a]);
      let l = e.shape.slice();
      if (l.splice(a, 1, ...t.shape), null == r) r = K(l);else if (!Fe(r.shape, l)) throw "output array does not match result of ndarray.take";
      let s = Array(a).fill(x());
      for (let a of P(t.shape)) r.get(s.concat(a)).set(e.get([...s, t.item(a)]));
      return r;
    }
  }
  function Q(e, t = undefined) {
    return U(e, 1, t);
  }
  function Z(e, t = undefined) {
    return W(e, 1, t);
  }
  function ee(e, t = undefined) {
    return U(e, 0, t);
  }
  function te(e, t = undefined) {
    return W(e, 0, t);
  }
  function ae(e, t = undefined) {
    return re(e = R(e, t)) ? e : S(e);
  }
  function re(e) {
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
  function ne(e, t, a) {
    e = R(e);
    let r = [...Array(e.ndim).keys()];
    return [r[t], r[a]] = [r[a], r[t]], le(e, r);
  }
  function le(e, t = undefined) {
    e = R(e);
    let a,
      r,
      {
        ndim: n,
        shape: l,
        data: s,
        dtype: i,
        base: d,
        strides: o,
        offset: u,
        itemsize: h
      } = e;
    if (null == t) a = l.slice().reverse(), r = o.slice().reverse();else {
      t = function (e, t) {
        if (e.length != t) throw new Error("axes don't match array");
        let a = [],
          r = {};
        for (let n = 0; n < t; n++) {
          let l = e[n];
          if (l < 0 && (l += t), l < 0 || t <= l) throw new Error(`axis ${l} is out of bounds for array of dimension ${n + 1}`);
          if (r[l]) throw new Error("repeated axis in transpose");
          r[l] = !0, a[n] = l;
        }
        return a;
      }(t, n), a = Array(n), r = Array(n);
      for (let e = 0; e < n; e++) a[e] = l[t[e]], r[e] = o[t[e]];
    }
    return new v(a, s, i, d ?? e, r, u, h);
  }
  function se(...e) {
    if (1 != e.length) return e.map(e => se(e));
    let t = R(e[0]),
      {
        ndim: a
      } = t;
    return a >= 1 ? t : t.copy().reshape([1]);
  }
  function ie(...e) {
    if (1 != e.length) return e.map(e => ie(e));
    let t = R(e[0]),
      {
        ndim: a,
        shape: r
      } = t;
    return a >= 2 ? t : 1 == a ? t.reshape([1, r[0]]) : t.copy().reshape([1, 1]);
  }
  function de(...e) {
    if (1 != e.length) return e.map(e => de(e));
    let t = R(e[0]),
      {
        ndim: a,
        shape: r
      } = t;
    return a >= 3 ? t : 2 == a ? t.reshape([r[0], r[1], 1]) : 1 == a ? t.reshape([1, r[0], 1]) : t.copy().reshape([1, 1, 1]);
  }
  s.add("Flatiter", () => {
    let e = new v([2, 3], [0, 1, 2, 3, 4, 5]),
      t = new X(e),
      a = [];
    for (let e of t) a.push(e);
    return a;
  }, () => [0, 1, 2, 3, 4, 5]), s.add("Flatiter.get", () => new X(S([[1, 2, 3], [4, 5, 6]])).at(3), () => 4).add("Flatiter.get", () => new X(S([[1, 2, 3], [4, 5, 6]])).at(x(2, -2)), () => S([3, 4])).add("Flatiter.get", () => new X(S([[1, 2, 3], [4, 5, 6]])).get([3, 4, -1]), () => [4, 5, 6]), s.add("Flatiter.set", () => {
    let e = S([[3, 3, 3], [3, 3, 3]]);
    return new X(e).set([1, -1], [[1], [2]]), e;
  }, () => [[3, 1, 3], [3, 3, 2]]).add("Flatiter.set", () => {
    let e = S([[1, 2, 3], [4, 5, 6]]);
    return e.flat.set([1, 0, 1], [[1, 2, 3], [5, 6, 7]]), e;
  }, () => S([[2, 3, 3], [4, 5, 6]])).add("Flatiter.set", () => {
    let e = S([[1, 2, 3], [4, 5, 6]]);
    return e.flat.set(x(1, -1), [[1, 2, 3], [5, 6, 7]]), e;
  }, () => S([[1, 1, 2], [3, 5, 6]])).add("Flatiter.set", () => {
    let e = S([[1, 2, 3], [4, 5, 6]]);
    return e.flat.set(":", [[1, 2]]), e;
  }, () => S([[1, 2, 1], [2, 1, 2]])), s.add("Flatiter.copy", () => new X(new v([2, 3], [0, 1, 2, 3, 4, 5]).at(x([,, -1]))).copy(), () => [3, 4, 5, 0, 1, 2]), s.add("full", () => U([2, 2], 1 / 0), () => [[1 / 0, 1 / 0], [1 / 0, 1 / 0]]).add("full", () => U([2, 2], 10), () => [[10, 10], [10, 10]]).add("full", () => U([2, 2], [1, 2]), () => [[1, 2], [1, 2]]).add("full", () => U(2, -1), () => [-1, -1]), s.add(W, () => W([1], 2), () => [2]).add(W, () => W(1, 99), () => 99).add(W, () => Ee(W([[0, 1], [2, 3]], [1.1, 2.2], "int8"), S([[1, 2], [1, 2]])), () => !0), s.add("broadcast_shapes", () => J([1, 2], [3, 1], [3, 2]), () => [3, 2]), s.add("broadcast_shapes", () => J([6, 7], [5, 6, 1], [7], [5, 1, 7]), () => [5, 6, 7]), s.add("arange", () => H(3), () => S([0, 1, 2])).add("arange", () => H(-10, 10), () => S([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).add("arange", () => H(-10, 10, -1), () => S([])).add("arange", () => H(3, 7, 2), () => S([3, 5])).add("arange", () => H(0, -10, -1), () => S([0, -1, -2, -3, -4, -5, -6, -7, -8, -9])), s.add("linspace", () => C(2, 3, 5), () => S([2, 2.25, 2.5, 2.75, 3])).add("linspace", () => C(2, 3, 5, !1), () => S([2, 2.2, 2.4, 2.6, 2.8])).add("linspace", () => C(2, 3, 5, !0, !0), () => [S([2, 2.25, 2.5, 2.75, 3]), .25]).add("linspace", () => C(2, 3, 5, !1, !0), () => [S([2, 2.2, 2.4, 2.6, 2.8]), .2]).add("linspace", () => C(1, 10, 10, !1), () => S([1, 1.9, 2.8, 3.7, 4.6, 5.5, 6.4, 7.3, 8.2, 9.1])), s.add("take", () => L([4, 3, 5, 7, 6, 8], [0, 1, 4]), () => S([4, 3, 6])).add("take", () => L([4, 3, 5, 7, 6, 8], [[0, 1], [2, 3]]), () => S([[4, 3], [5, 7]])).add("take", () => L(S([[1, 2], [3, 4], [5, 6], [7, 8]]), [[0, 1], [2, 3]], 0), () => S([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])).add("take", () => L(S([[1, 2], [3, 4], [5, 6], [7, 8]]), S([[[[0, 1], [0, 1]]]]), 1), () => S([[[[[1, 2], [1, 2]]]], [[[[3, 4], [3, 4]]]], [[[[5, 6], [5, 6]]]], [[[[7, 8], [7, 8]]]]])).add("take", () => L([[5, 6, 2, 7, 1], [4, 9, 2, 9, 3]], [0, 4], 1), () => [[5, 1], [4, 3]]), s.add(ae, () => {
    let e = Q([3, 1, 5]).at(x(), x([,, 3]), x());
    return ae(e) === e;
  }, () => !0), s.add(ae, () => {
    let e = Q([3, 4, 5]).at(x(), x([,, 1]), x());
    return ae(e) === e;
  }, () => !0), s.add(ae, () => {
    let e = Q([3, 4, 5]).at(x(), x(), x(1));
    return ae(e) === e;
  }, () => !1), s.add(ae, () => {
    let e = Q([3]).at(x([,, -3]));
    return ae(e) === e;
  }, () => !0), s.add(ae, () => {
    let e = Q([2]).at(x([,, 2]));
    return ae(e) === e;
  }, () => !0), s.add(ae, () => {
    let e = Q([3]).at(x([,, 2]));
    return ae(e) === e;
  }, () => !1), s.add(ae, () => {
    let e = Q([3]).at(x([1, 2]));
    return ae(e) === e;
  }, () => !0).add(ae, () => {
    let e, t;
    return e = S([]), t = ae(e), e === t;
  }, () => !0).add(ae, () => {
    let e, t;
    return e = S(5), t = ae(e), e === t;
  }, () => !1), s.add(ne, () => ne(S([[1, 2, 3]]), 0, 1), () => S([[1], [2], [3]])).add(ne, () => ne(S([[[0, 1], [2, 3]], [[4, 5], [6, 7]]]), 0, 2), () => S([[[0, 4], [2, 6]], [[1, 5], [3, 7]]])), s.add(le, () => le(H(4).reshape([2, 2])), () => S([[0, 2], [1, 3]])).add(le, () => le(Q([1, 2, 3]), [1, 0, 2]), () => S([[[1, 1, 1]], [[1, 1, 1]]])).add(le, () => le(Q([2, 3, 4, 5])).shape, () => [5, 4, 3, 2]), s.add(se, () => se(1), () => S([1])).add(se, () => se(1, [3, 4]), () => [S([1]), S([3, 4])]).add(se, () => se(H(9).reshape([3, 3])), () => S([[0, 1, 2], [3, 4, 5], [6, 7, 8]])).add(se, () => {
    let e = S([1]),
      t = e.at(0),
      a = se(t);
    return a.set([0], -96), [e.toarray(), t.toarray(), a.toarray(), null === e.base, null === t.base, a.base != t, a.base];
  }, () => [S([1]), 1, S([-96]), !0, !1, !0, S(-96)]), s.add(ie, () => ie(3), () => S([[3]])).add(ie, () => {
    let e = H(3);
    return [ie(e), ie(e).base === e];
  }, () => [S([[0, 1, 2]]), !0]).add(ie, () => ie(1, [1, 2], [[1, 2]]), () => [S([[1]]), S([[1, 2]]), S([[1, 2]])]), s.add(de, () => de(3), () => S([[[3]]])).add(de, () => de(H(3)).shape, () => [1, 3, 1]).add(de, () => {
    let e = H(12).reshape(4, 3);
    return [de(e).shape, de(e).base === e.base];
  }, () => [[4, 3, 1], !0]).add(de, () => de([1, 2], [[1, 2]], [[[1, 2]]]), () => [[[[1], [2]]], [[[1], [2]]], [[[1, 2]]]]);
  class oe {
    constructor(e) {
      this.shape = J(...e.map(e => e.shape)), this.arrays = e.map(e => T(e, this.shape)), this.ndim = this.shape.length, this.size = $(this.shape), this.reset();
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
  function ue(...e) {
    return new oe(e.map(e => R(e)));
  }
  function he(e, t = e, a = 0) {
    let r = e * t,
      n = Array(r).fill(0);
    for (let e = a + Math.ceil(-a / (t + 1)) * (t + 1); e < r; e += t + 1) n[e] = 1;
    return new v([e, t], n);
  }
  function fe(e) {
    let t = e * e,
      a = Array(t).fill(0);
    for (let r = 0; r < t; r += e + 1) a[r] = 1;
    return new v([e, e], a);
  }
  function pe(e) {
    return null == e || "object" != typeof e ? 0 : null != e.ndim ? e.ndim : E(e).length;
  }
  s.add(ue, () => {
    let e = ue(S([[1], [2], [3]]), S([4, 5, 6])),
      t = K(e.shape),
      a = [];
    for (let [t, r] of e) a.push(t + r);
    return t.flat = a, t;
  }, () => S([[5, 6, 7], [6, 7, 8], [7, 8, 9]])).add(ue, () => {
    let e = [],
      t = ue(S([1, 2, 3]), S([[4], [5], [6]]));
    return e.push(t.index), e.push(t.next().value, t.next().value, t.next().value), e.push(t.index), t.reset(), e.push(t.index), e;
  }, () => [0, [1, 4], [2, 4], [3, 4], 3, 0]), s.add("eye", () => he(2), () => [[1, 0], [0, 1]]).add("eye", () => he(3, 3, 1), () => [[0, 1, 0], [0, 0, 1], [0, 0, 0]]).add("eye", () => he(4, 5, -1), () => [[0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0]]), s.add("identity", () => fe(3), () => [[1, 0, 0], [0, 1, 0], [0, 0, 1]]).add("identity", () => fe(0), () => []);
  const ce = pe;
  function me(e, t) {
    e = R(e), "number" == typeof t && (t = [t]);
    let a = t.length;
    if ((t = new Set(t)).size != a) throw "repeated axis";
    let r = e.ndim + a,
      n = [];
    for (let a = 0, l = 0; a < r; a++) n.push(t.has(a) ? 1 : e.shape[l++]);
    return e.reshape(n);
  }
  function ye(e, t, a = !1) {
    if (Array.isArray(e) || (e = [e]), e = e.map(e => Ve(e, t)), !a && new Set(e).size != e.length) throw "repeated axis";
    return e;
  }
  s.add("ndim", () => pe([[1, 2, 3], [4, 5, 6]]), () => 2).add("ndim", () => pe(R([[1, 2, 3], [4, 5, 6]])), () => 2).add("ndim", () => pe(1), () => 0).add("ndim", () => pe(null), () => 0), s.add(me, () => me(S([1, 2]), 0), () => S([[1, 2]])).add(me, () => me(S([1, 2]), 1), () => S([[1], [2]])).add(me, () => me(S([1, 2]), [0, 1]), () => S([[[1, 2]]])).add(me, () => me(S([1, 2]), [2, 0]), () => S([[[1], [2]]])).add(me, () => {
    let e = S([1, 2]);
    return me(e, [2, 0]).base === e;
  }, () => !0);
  const ge = ye;
  class we {
    constructor(e, t = null) {
      this.array = R(e);
      let {
        ndim: a,
        shape: r
      } = e;
      if (null != t && (t = ye(t, a)), this.axis = t, null != t) {
        let e = [],
          n = [],
          l = [];
        for (let s = 0; s < a; s++) (l[s] = !t.includes(s)) ? (n[s] = 0, e.push(r[s])) : n[s] = x[":"];
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
      for (let t of P(a)) {
        for (let a = 0, l = 0; a < e.ndim; a++) r[a] && (n[a] = t[l++]);
        yield [t, e.get(n)];
      }
    }
  }
  function be(e, t = null) {
    return new we(e, t);
  }
  function xe(e, t = null) {
    e = R(e), null != t && (t = ye(t));
    let {
        shape: a,
        strides: r,
        data: n,
        dtype: l,
        ndim: s,
        offset: i,
        itemsize: d
      } = e,
      o = [],
      u = [];
    for (let e = 0; e < s; e++) (t ? t.includes(e) : 1 == a[e]) || (o.push(a[e]), u.push(r[e]));
    return new v(o, n, l, e, u, i, d);
  }
  function _e(e) {
    return S(e);
  }
  function ze(e, t) {
    let a = [];
    for (let r of P(t)) a.push(e(r));
    return new v(t, a);
  }
  function ve(e, t = -1) {
    let a;
    if (-1 == t) a = [...e];else {
      a = [];
      let r = 0;
      if (r < t) for (let n of e) if (a.push(n), r++, r >= t) break;
    }
    return S(a);
  }
  function Ae(e) {
    e = se(e);
    let {
        ndim: t
      } = e,
      a = [];
    for (let e = 0; e < t; e++) a.push([]);
    for (let [r, n] of $e(e)) if (n) for (let e = 0; e < t; e++) a[e].push(r[e]);
    return a.map(e => R(e));
  }
  function* $e(e) {
    e = R(e);
    for (let t of P(e.shape)) {
      let a = [t, e.item(t)];
      yield a;
    }
  }
  function Me(e) {
    e = R(e);
    let t = 0,
      a = [];
    for (let [r, n] of $e(e)) n && (a.push(...r), t++);
    return new v([t, e.ndim], a);
  }
  function ke(e, t, a = null, r = null) {
    if (1 != (e = R(e)).ndim) throw "condition must be a 1-d array";
    return L(t, Ae(e)[0], a, r);
  }
  function Ne(e) {
    e = ae(e);
    let {
      size: t,
      data: a,
      base: r,
      dtype: n,
      offset: l,
      itemsize: s
    } = e;
    return new v([t], a, n, r, void 0, l, s);
  }
  function Se(e, t) {
    return ke(Ne(e), Ne(t));
  }
  function je(e) {
    return Ae(Ne(e))[0];
  }
  function qe(e, t, a, r, n) {
    let {
      strides: l,
      ndim: s,
      shape: i
    } = t;
    a = ye(a, s);
    let d = Array(s).fill().map((e, t) => a.includes(t)),
      o = [],
      u = [];
    for (let e = 0, t = 0; e < s; e++) d[e] ? (u[e] = x(":"), r && (o[t++] = 1)) : o[t++] = i[e];
    null == n && (n = K(o));
    for (let a of P(o)) {
      for (let e = 0, t = 0; e < s; e++) d[e] || (u[e] = a[t++]);
      n.itemset(a, e(t.get(u)));
    }
    return n;
  }
  function Ie(e, t = null, a = !1) {
    if (e = R(e), null != t) return qe(Ie, e, t, a);
    let r = 0;
    for (let t of e.flat) t && r++;
    return r;
  }
  function Ee(e, t, a = !1) {
    return e = R(e), t = R(t), !!Fe(e.shape, t.shape) && _t(a ? Te(e, t) : Qa(e, t));
  }
  function Oe(e, t) {
    return e = R(e), t = R(t), !!function (...e) {
      let t = 0;
      for (let a of e) t = Math.max(t, a.length);
      for (let a = 0; a < t; a++) {
        let t = -1;
        for (let r of e) {
          let e = r.length - a - 1;
          if (!(e < 0)) if (-1 == t) t = r[e];else if (1 != t && t != r[e]) return !1;
        }
      }
      return !0;
    }(e.shape, t.shape) && _t(Qa(e, t));
  }
  function Fe(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let a = 0; a < e.length; a++) if (e[a] !== t[a]) return !1;
    return !0;
  }
  s.add(xe, () => xe(S([[[0], [1], [2]]])).shape, () => [3]).add(xe, () => xe(S([[[0], [1], [2]]]), 0).shape, () => [3, 1]).add(xe, () => xe(S([[[0], [1], [2]]]), 2).shape, () => [1, 3]).add(xe, () => xe(S([[1234]])), () => S(1234)).add(xe, () => {
    let e, t, a, r, n;
    return e = H(20), t = e.reshape([5, -1]), a = t.at(x([,, -1])), r = ae(a), n = r.reshape([5, 1, 1, -1]), [n.reshape([5, -1]).base === r, n.reshape(-1).base === r, xe(n).base === r, e, t, a, xe(n)];
  }, () => [!0, !0, !0, S([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), S([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15], [16, 17, 18, 19]]), S([[16, 17, 18, 19], [12, 13, 14, 15], [8, 9, 10, 11], [4, 5, 6, 7], [0, 1, 2, 3]]), S([[16, 17, 18, 19], [12, 13, 14, 15], [8, 9, 10, 11], [4, 5, 6, 7], [0, 1, 2, 3]])]), s.add(_e, () => {
    let e, t, a;
    return e = S([1, 2, 3]), t = e, a = _e(e), e.set([0], 10), [e.item(0) == t.item(0), e.item(0) == a.item(0)];
  }, () => [!0, !1]), s.add(ze, () => ze(([e, t]) => e, [2, 2]), () => S([[0, 0], [1, 1]])).add(ze, () => ze(([e, t]) => t, [2, 2]), () => S([[0, 1], [0, 1]])).add(ze, () => ze(([e, t]) => e == t, [3, 3]), () => S([[!0, !1, !1], [!1, !0, !1], [!1, !1, !0]])).add(ze, () => ze(([e, t]) => e + t, [3, 3]), () => S([[0, 1, 2], [1, 2, 3], [2, 3, 4]])), s.add(ve, () => ve({
    *[Symbol.iterator]() {
      for (let e = 0; e < 5; e++) yield e * e;
    }
  }), () => S([0, 1, 4, 9, 16])).add(ve, () => ve({
    *[Symbol.iterator]() {
      for (let e = 0; e < 5; e++) yield [e + 1, e + 2];
    }
  }), () => S([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6]])), s.add(Ae, () => {
    let e;
    return e = S([[3, 0, 0], [0, 4, 0], [5, 6, 0]]).at(x("..."), null), Ae(e);
  }, () => [S([0, 1, 2, 2]), S([0, 1, 0, 1]), S([0, 0, 0, 0])]).add(Ae, () => Ae(S([[!1, !1, !1], [!0, !0, !0], [!0, !0, !0]])), () => [S([1, 1, 1, 2, 2, 2]), S([0, 1, 2, 0, 1, 2])]).add(Ae, () => Ae(55), () => S([0])), s.add($e, () => {
    {
      let e;
      e = S([[1, 2], [3, 4]]);
      let t = [];
      for (let [a, r] of $e(e)) t.push(a.slice(), r);
      return t;
    }
  }, () => [[0, 0], 1, [0, 1], 2, [1, 0], 3, [1, 1], 4]), s.add(Me, () => Me(55).shape, () => [1, 0]).add(Me, () => Me(rr(H(6).reshape(2, 3), 1)), () => S([[0, 2], [1, 0], [1, 1], [1, 2]])), s.add(ke, () => ke([0, 1], S([[1, 2], [3, 4], [5, 6]]), 0), () => S([[3, 4]])).add(ke, () => ke([!1, !0, !0], S([[1, 2], [3, 4], [5, 6]]), 0), () => S([[3, 4], [5, 6]])).add(ke, () => ke([!1, !0], S([[1, 2], [3, 4], [5, 6]]), 1), () => S([[2], [4], [6]])).add(ke, () => ke([!1, !0], S([[1, 2], [3, 4], [5, 6]])), () => S([2])), s.add(Ne, () => Ne(S([[1, 2, 3], [4, 5, 6]])), () => S([1, 2, 3, 4, 5, 6])).add(Ne, () => Ne(S([[1, 2, 3], [4, 5, 6]]).T), () => S([1, 4, 2, 5, 3, 6])).add(Ne, () => Ne(H(12).reshape(2, 3, 2).swapaxes(1, 2)), () => S([0, 2, 4, 1, 3, 5, 6, 8, 10, 7, 9, 11])).add(Ne, () => {
    let e, t;
    return e = H(40).reshape([5, -1]).copy(), t = e.at(null, x(":"), null, null, x("::2"), null), [t.reshape(-1).base == e, Ne(t).base];
  }, () => [!0, null]).add(Ne, () => {
    let e, t;
    return e = H(40).reshape([5, -1]).copy(), t = e.at(null, x(":"), null, null, x("::3"), null), [t.reshape(-1).base == e, Ne(t).base];
  }, () => [!1, null]), s.add(Se, () => {
    let e, t;
    return e = H(12).reshape([3, 4]), t = S([[!0, !1, !1, !0], [!1, !1, !0, !1], [!1, !0, !1, !1]]), Se(t, e);
  }, () => S([0, 3, 6, 9])), s.add(je, () => {
    let e;
    return e = H(-2, 3), je(e);
  }, () => S([0, 1, 3, 4])), s.add(Ie, () => {
    let e;
    return e = Q([2, 3, 4, 5]), Ie(e);
  }, () => 120).add(Ie, () => {
    let e;
    return e = Q([2, 3, 4, 5]), Ie(e, 0);
  }, () => S([[[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]], [[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]], [[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]]])).add(Ie, () => {
    let e;
    return e = Q([2, 3, 4, 5]), Ie(e, 1);
  }, () => S([[[3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3]], [[3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3]]])).add(Ie, () => {
    let e;
    return e = Q([2, 3, 4, 5]), Ie(e, -1);
  }, () => S([[[5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5]], [[5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5]]])).add(Ie, () => {
    let e;
    return e = Q([2, 3, 4, 5]), Ie(e, [0, -1]);
  }, () => S([[10, 10, 10, 10], [10, 10, 10, 10], [10, 10, 10, 10]])).add(Ie, () => {
    let e;
    return e = Q([2, 3, 4, 5]), Ie(e, [0, -1], !0);
  }, () => S([[[[10], [10], [10], [10]], [[10], [10], [10], [10]], [[10], [10], [10], [10]]]]));
  const Te = dt("nan_equal", (e, t) => e == t || Number.isNaN(e) && Number.isNaN(t));
  function De(e, t = 0, a = null) {
    if (e.length <= 0) throw "need at least one array to concatenate";
    e = e.map(e => R(e)), null == t && (e = e.map(Ne), t = 0);
    let {
      ndim: r,
      shape: n
    } = e[0];
    if (0 == r) throw "zero-dimensional arrays cannot be concatenated";
    for (let a = 1; a < e.length; a++) {
      let l = e[a];
      if (l.ndim != r) throw new Error(`all the input arrays must have same number of dimensions, but the array at index 0 has ${r} dimension(s) and the array at index ${a} has ${e[a].ndim} dimension(s)`);
      for (let s = 0; s < r; s++) if (s != t && l.shape[s] != n[s]) throw `all the input array dimensions for the concatenation axis must match exactly, but along dimension ${s}, the array at index 0 has size ${n[s]} and the array at index ${a} has size ${e[a].shape[s]}`;
    }
    t = Ve(t, r);
    let l = n.slice();
    if (l[t] = e.reduce((e, a) => e + a.shape[t], 0), null == a) a = K(l);else {
      if (a.ndim != r) throw "Output array has wrong dimensionality";
      if (!Fe(a.shape, l)) throw "Output array is the wrong shape";
    }
    let s = Array(r).fill(x(":")),
      i = 0;
    for (let r of e) s[t] = x(i, i += r.shape[t]), a.set(s, r);
    return a;
  }
  function Pe(e, t, a) {
    e = R(e);
    let {
      ndim: r
    } = e;
    if (t = ge(t, r), a = ge(a, r), t.length != a.length) throw new Error("'src' and 'dst' arguments must have the same number of elements");
    let n = [...Array(r).keys()].filter(e => !t.includes(e));
    for (let e = 0; e < t.length; e++) n.splice(a[e], 0, t[e]);
    return le(e, n);
  }
  s.add(Ee, () => Ee([1, 2], [1, 2]), () => !0).add(Ee, () => Ee(S([1, 2]), S([1, 2])), () => !0).add(Ee, () => Ee([1, 2], [1, 2, 3]), () => !1).add(Ee, () => Ee([1, 2], [1, 4]), () => !1).add(Ee, () => {
    let e = S([1, NaN]);
    return Ee(e, e);
  }, () => !1).add(Ee, () => {
    let e = S([1, NaN]);
    return Ee(e, e, !0);
  }, () => !0), s.add(Oe, () => Oe([1, 2], [1, 2]), () => !0).add(Oe, () => Oe([1, 2], [1, 3]), () => !1).add(Oe, () => Oe([1, 2], [[1, 2], [1, 2]]), () => !0).add(Oe, () => Oe([1, 2], [[1, 2, 1, 2], [1, 2, 1, 2]]), () => !1).add(Oe, () => Oe([1, 2], [[1, 2], [1, 3]]), () => !1), s.add(De, () => {
    let e = S([[1, 2], [3, 4]]),
      t = S([[5, 6]]);
    return [De([e, t], 0), De([e, t.T], 1), De([e, t], null)];
  }, () => [S([[1, 2], [3, 4], [5, 6]]), S([[1, 2, 5], [3, 4, 6]]), S([1, 2, 3, 4, 5, 6])]), s.add(Pe, () => Pe(ee([3, 4, 5]), 0, -1).shape, () => [4, 5, 3]).add(Pe, () => Pe(ee([3, 4, 5]), -1, 0).shape, () => [5, 3, 4]);
  let Re = e => [...Array(e).keys()];
  function Ke(e) {
    let t = Object.create(null);
    return (...a) => ((e, t, a) => e[t] ?? (e[t] = a(...t)))(t, a, e);
  }
  function Ve(e, t) {
    let a = e;
    if (e = +e, !Number.isInteger(e)) throw new Error(`${a} cannot be cast to integer`);
    if (e < 0 && (e += t), e < 0 || t <= e) throw `axis ${a} is out of bounds for array of dimension ${t}`;
    return e;
  }
  let Ye = {};
  function Ge(e, t, a = !1) {
    if (null == e) return Ye[t] ?? (Ye[t] = Array(t).fill(1));
    let r = Array(t).fill(0);
    if (Array.isArray(e)) {
      for (let a = 0; a < e.length; a++) r[Ve(e[a], t)] = 1;
      if (!a) {
        let a = 0;
        for (let e = 0; e < t; e++) a += r[e];
        if (a != e.length) throw "repeated axis";
      }
    } else r[Ve(e, t)] = 1;
    return r;
  }
  let Xe = (e = null, t, a, r = t) => {
      let n = [];
      for (let e = 0; e < t.length; e++) n.push(r[e] == t[e] ? `${r[e]}` : `${r[e]}: ${t[e]}`);
      return null != e ? `${e} {${n.join(", ")}} = ${a}` : `({${n.join(", ")}} = ${a})`;
    },
    Ue = (e = null, t, a) => {
      Array.isArray(t) || (t = [t], a = [a]);
      let r = [];
      for (let e = 0; e < t.length; e++) r.push(`${t[e]} = ${a[e]}`);
      return null != e ? `${e} ${r.join(", ")}` : `${r.join(", ")}`;
    },
    We = (e, t, a) => `for(let ${e} = 0; ${e} < ${t}; ${e}++) {${a}}`,
    Je = (...e) => `${e.join("; ")}`,
    He = (e, ...t) => `${e}(${t.join(", ")})`,
    Ce = (e, t) => `${e}[${t}]`,
    Be = (e, t) => `${e}.${t}`,
    Le = e => `(${e})`,
    Qe = (...e) => `${e.map(Le).join(" * ")}`,
    Ze = (...e) => `${e.map(Le).join(" + ")}`,
    et = e => `return ${e}`;
  function tt(e, t, a = t) {
    let r = "out",
      n = Re(e).map(e => `x${e + 1}`),
      l = `${r}_offset`,
      s = n.map(e => `${e}_offset`),
      i = `${r}_data`,
      d = n.map(e => `${e}_data`),
      o = Re(a).map(e => `${r}_strides_${e}`),
      u = n.map(e => Re(t).map(t => `${e}_strides_${t}`)),
      h = Re(t).map(e => `i_${e}`),
      f = Re(t).map(e => `shape_${e}`);
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
  function at(e, t, a, r) {
    let n = [];
    return n.push(Ue("let", t, Be(e, "data"))), n.push(Ue("let", a, Be(e, "offset"))), r.length > 0 && n.push(Xe("let", r, Be(e, "strides"), Re(r.length))), n;
  }
  let rt = Ke((e, t) => new Function(...function (e, t) {
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
        } = tt(e, t),
        p = [];
      return p.push(...at(r, i, l, o)), n.forEach((e, t) => {
        p.push(...at(e, d[t], s[t], u[t]));
      }), p.push(Xe("let", f, Be(n[0], "shape"), Re(f.length))), p.push(Re(t).reverse().reduce((e, t) => We(h[t], f[t], e), Je(Ue(null, [Ce(i, Ze(l, ...h.map((e, t) => Qe(e, o[t]))))], [He(a, ...d.map((e, t) => Ce(e, Ze(s[t], ...h.map((e, a) => Qe(e, u[t][a]))))))]))), et(r)), [a, ...n, r, Je(...p)];
    }(e, t))),
    nt = (Ke((e, t) => new Function()), Ke((e, t, a) => new Function(...function (e, t, a) {
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
        } = tt(e, t, r),
        m = "initial",
        y = "accum",
        g = s.map(e => `${e}_start`),
        w = [];
      return w.push(...at(l, o, i, h)), s.forEach((e, t) => {
        w.push(...at(e, u[t], d[t], f[t]));
      }), w.push(Xe("let", c, Be(s[0], "shape"), Re(c.length))), w.push(Re(t).filter(e => !a[e]).reverse().reduce((e, t) => We(p[t], c[t], e), Je(Ue("let", y, m), ...g.map((e, r) => Ue("let", e, Ze(d[r], ...Re(t).filter(e => !a[e]).map(e => Qe(p[e], f[r][e]))))), Re(t).filter(e => a[e]).reverse().reduce((e, t) => We(p[t], c[t], e), Je([Ue(null, y, He(n, y, ...u.map((e, r) => Ce(e, Ze(g[r], ...Re(t).filter(e => a[e]).map(e => Qe(p[e], f[r][e])))))))])), Ue(null, Ce(o, Ze(i, ...Re(t).filter(e => !a[e]).map((e, t) => Qe(p[e], h[t])))), y))), et(l)), [n, ...s, l, m, Je(...w)];
    }(e, t, a)))),
    lt = Ke((e, t, a) => new Function(...function (e, t, a) {
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
        } = tt(e, t, r),
        m = "initial",
        y = "accum",
        g = s.map(e => `${e}_start`),
        w = "offset_start",
        b = [];
      return b.push(...at(l, o, i, h)), s.forEach((e, t) => {
        b.push(...at(e, u[t], d[t], f[t]));
      }), b.push(Xe("let", c, Be(s[0], "shape"), Re(c.length))), b.push(Re(t).filter(e => !a[e]).reverse().reduce((e, t) => We(p[t], c[t], e), Je(Ue("let", y, m), ...g.map((e, r) => Ue("let", e, Ze(d[r], ...Re(t).filter(e => !a[e]).map(e => Qe(p[e], f[r][e]))))), Ue("let", w, Ze(i, ...Re(t).filter(e => !a[e]).map(e => Qe(p[e], h[e])))), Re(t).filter(e => a[e]).reverse().reduce((e, t) => We(p[t], c[t], e), Je([Ue(null, y, He(n, y, ...u.map((e, r) => Ce(e, Ze(g[r], ...Re(t).filter(e => a[e]).map(e => Qe(p[e], f[r][e]))))))), Ue(null, Ce(o, Ze(w, ...Re(t).filter(e => a[e]).map((e, t) => Qe(p[e], h[e])))), y)])))), et(l)), [n, ...s, l, m, Je(...b)];
    }(e, t, a)));
  function st(e, t, a = t.length, r = !1) {
    let n;
    if (1 == a) n = r ? (e, a = null, r = null) => (e = R(e), null == a ? a = K(e.shape) : e = T(e, a.shape), rt(1, a.ndim)(t.bind(null, r), e, a)) : (e, a = null) => (e = R(e), null == a ? a = K(e.shape) : e = T(e, a.shape), rt(1, a.ndim)(t, e, a));else {
      if (2 != a) throw "not support on narg > 2 yet";
      n = (e, a, r = null) => {
        let n;
        return e = R(e), a = R(a), null == r ? (n = J(e.shape, a.shape), r = K(n)) : n = r.shape, e = T(e, n), a = T(a, n), rt(2, r.ndim)(t, e, a, r);
      };
    }
    return Object.defineProperty(n, "name", {
      value: e
    });
  }
  function it(e, t, a = !1) {
    if (a) {
      function r(e, a = null, r = null) {
        return e = R(e), null == a ? a = K(e.shape) : e = T(e, a.shape), rt(1, a.ndim)(t.bind(null, r), e, a);
      }
      return Object.defineProperty(r, "name", {
        value: e
      });
    }
    function r(e, a = null) {
      return e = R(e), null == a ? a = K(e.shape) : e = T(e, a.shape), rt(1, a.ndim)(t, e, a);
    }
    return Object.defineProperty(r, "name", {
      value: e
    });
  }
  function dt(e, t) {
    return Object.defineProperty(function (e, a, r = null) {
      let n;
      return e = R(e), a = R(a), null == r ? (n = J(e.shape, a.shape), r = K(n)) : n = r.shape, e = T(e, n), a = T(a, n), rt(2, r.ndim)(t, e, a, r);
    }, "name", {
      value: e
    });
  }
  function ot(e, t, a) {
    return Object.defineProperty(function (e, r = null, n = null, l = a) {
      e = R(e), null == r && (e = Ne(e));
      let {
        ndim: s,
        shape: i
      } = e;
      if (r = Ge(r, s), null == n) n = K(i);else if (!Fe(i, n.shape)) throw "unmatch shape";
      return lt(1, s, r)(t, e, n, l), n;
    }, "name", {
      value: e
    });
  }
  const ut = [];
  function ht(e, t, a = t.length - 1, r) {
    if (1 != a) throw "not support on narg > 1 yet";
    return Object.defineProperty(function (e, a = null, n = null, l = !1, s = r, i = !0) {
      null != n && (i = !1), e = R(e);
      let d,
        {
          ndim: o,
          shape: u
        } = e;
      if (null == a) a = Ge(a, o), d = ut;else {
        a = Ge(a, o), d = [];
        for (let e = 0; e < o; e++) a[e] || d.push(u[e]);
      }
      if (l) {
        let r = u.slice();
        for (let e = 0; e < o; e++) a[e] && (r[e] = 1);
        if (null == n) n = K(r);else if (!Fe(r, n.shape)) throw "unmatch shape";
        return nt(1, o, a)(t, e, n.reshape(d), s), i && 0 == n.ndim ? n.item() : n;
      }
      if (null == n) n = K(d);else if (!Fe(d, n.shape)) throw "unmatch shape";
      return n = nt(1, o, a)(t, e, n, s), i && 0 == n.ndim ? n.item() : n;
    }, "name", {
      value: e
    });
  }
  const ft = dt("add", (e, t) => e + t),
    pt = dt("subtract", (e, t) => e - t),
    ct = dt("multiply", (e, t) => e * t),
    mt = dt("divide", (e, t) => e / t),
    yt = mt,
    gt = dt("floor_divide", (e, t) => e / t | 0),
    wt = dt("mod", (e, t) => (e % t + t) % t),
    bt = wt,
    xt = dt("power", (e, t) => e ** t);
  s.add(ft, () => ft(H(9).reshape([3, 3]), H(3)), () => S([[0, 2, 4], [3, 5, 7], [6, 8, 10]])), s.add(pt, () => pt(1, 4), () => -3).add(pt, () => pt(H(9).reshape([3, 3]), H(3)), () => S([[0, 0, 0], [3, 3, 3], [6, 6, 6]])), s.add(ct, () => ct(2, 4), () => 8).add(pt, () => ct(H(9).reshape([3, 3]), H(3)), () => S([[0, 1, 4], [0, 4, 10], [0, 7, 16]])), s.add(mt, () => mt(2, 4), () => .5).add(mt, () => mt(H(9).reshape([3, 3]), H(3)), () => S([[NaN, 1, 1], [1 / 0, 4, 2.5], [1 / 0, 7, 4]])), s.add(wt, () => wt([4, 7], [2, 3]), () => S([0, 1])).add(wt, () => wt(H(7), 5), () => S([0, 1, 2, 3, 4, 0, 1])), s.add(xt, () => xt(H(6), 3), () => S([0, 1, 8, 27, 64, 125])).add(xt, () => xt(H(6), [1, 2, 3, 3, 2, 1]), () => S([0, 1, 8, 27, 16, 5])).add(xt, () => xt(H(6), S([[1, 2, 3, 3, 2, 1], [1, 2, 3, 3, 2, 1]])), () => S([[0, 1, 8, 27, 16, 5], [0, 1, 8, 27, 16, 5]])).add(xt, () => xt(H(6), S([1, 2, 3, 3, 2, 1])), () => S([0, 1, 8, 27, 16, 5]));
  const _t = ht("all", (e, t) => e && !!t, 1, !0),
    zt = ht("any", (e, t) => e || !!t, 1, !1),
    vt = it("isfinite", Number.isFinite),
    At = it("isinf", e => e == Number.POSITIVE_INFINITY || e == Number.NEGATIVE_INFINITY),
    $t = it("isinf", Number.isNaN),
    Mt = it("isinf", e => e == Number.NEGATIVE_INFINITY),
    kt = it("isinf", e => e == Number.POSITIVE_INFINITY);
  s.add(_t, () => 0 == _t([[!0, !1], [!0, !0]]), () => !0).add(_t, () => _t([[!0, !1], [!0, !0]], 0), () => S([!0, !1])).add(_t, () => _t([-1, 4, 5]), () => !0).add(_t, () => {
    let e = S(!1);
    return [_t([-1, 4, 5], null, e) === e, e];
  }, () => [!0, S(!0)]), s.add(zt, () => zt([[!0, !1], [!0, !0]]), () => !0).add(zt, () => zt([[!0, !1], [!1, !1]], 0), () => S([!0, !1])).add(zt, () => zt([-1, 0, 5]), () => !0).add(zt, () => zt(NaN), () => !1);
  const Nt = Math.E,
    St = NaN,
    jt = Math.PI,
    qt = 1 / 0,
    It = -1 / 0,
    Et = it("sin", Math.sin),
    Ot = it("cos", Math.cos),
    Ft = it("tan", Math.tan),
    Tt = it("arcsin", Math.asin),
    Dt = it("arccos", Math.acos),
    Pt = it("arctan", Math.atan),
    Rt = it("hypot", Math.hypot),
    Kt = it("arctan2", Math.atan2),
    Vt = it("degrees", e => 180 * e / jt),
    Yt = it("radians", e => e / 180 * jt);
  function Gt(e, t = 2 * jt, a = t / 2) {
    if (1 != (e = R(e)).ndim) throw "unwrap currently only supports 1d arrays";
    let r = [e.data[e.offset]],
      n = e.data[e.offset],
      l = !0;
    for (let s of Kn(e.shape, e.strides)) {
      if (l) {
        l = !1;
        continue;
      }
      let i = e.data[e.offset + s] - n;
      i > a ? i -= t : i < -a && (i += t);
      let d = n + i;
      r.push(d), n = d;
    }
    return R(r);
  }
  const Xt = it("rad2deg", e => 180 * e / jt),
    Ut = it("deg2rad", e => e / 180 * jt),
    Wt = it("sinh", Math.sinh),
    Jt = it("cosh", Math.cosh),
    Ht = it("tanh", Math.tanh),
    Ct = it("arcsinh", Math.asinh),
    Bt = it("arccosh", Math.acosh),
    Lt = it("arctanh", Math.atanh),
    Qt = it("_around", ({
      decimals: e
    }, t) => {
      let a = 10 ** e,
        r = t * a,
        n = Math.round(r),
        l = r % 1;
      return .5 != l && -.5 != l || (n = n % 2 ? n - 1 : n), n / a;
    }, !0),
    Zt = function (e, t = 0, a) {
      return Qt(e, a, {
        decimals: t
      });
    },
    ea = it("rint", e => {
      let t = e % 1,
        a = Math.round(e);
      return .5 != t && -.5 != t || (a = a % 2 ? a - 1 : a), a;
    }),
    ta = it("fix", e => Math.sign(e) * Math.floor(Math.abs(e))),
    aa = it("floor", Math.floor),
    ra = it("ceil", Math.ceil),
    na = it("trunc", Math.trunc),
    la = ht("prod", (e, t) => e * t, 1, 1),
    sa = ht("sum", (e, t) => e + t, 1, 0),
    ia = ht("nanprod", (e, t) => e * (isNaN(t) ? 1 : t), 1, 1),
    da = ht("nansum", (e, t) => e + (isNaN(t) ? 0 : t), 1, 0),
    oa = ot("cumprod", (e, t) => e * t, 1),
    ua = ot("cumsum", (e, t) => e + t, 0),
    ha = null,
    fa = null;
  function pa(e, t = 1, a = -1) {
    e = R(e);
    let {
      ndim: r
    } = e;
    a = Ve(a, r);
    let n = Array(r).fill(x()),
      l = Array(r).fill(x());
    n[a] = x(1, null), l[a] = x(null, -1);
    for (let a = 0; a < t; a++) e = pt(e.get(n), e.get(l));
    return e;
  }
  function ca(e, t = null, a = null) {
    if (e = pa(G(e, -1)), null != a || null != t) {
      let r = [];
      null != a && r.push(a), r.push(e), null != t && r.push(t), e = De(r, null);
    }
    return e;
  }
  const ma = it("exp", Math.exp, 1),
    ya = it("expm1", e => Math.exp(e) - 1),
    ga = it("exp2", e => 2 ** e),
    wa = it("log", Math.log),
    ba = it("log10", Math.log10),
    xa = it("log2", Math.log2),
    _a = it("log1p", Math.log1p),
    za = dt("logaddexp", (e, t) => Math.log(Math.exp(e) + Math.exp(t))),
    va = dt("logaddexp2", (e, t) => Math.log2(2 ** e + 2 ** t)),
    Aa = it("signbit", e => e < 0),
    $a = dt("copysign", (e, t) => t < 0 ? -Math.abs(e) : Math.abs(e)),
    Ma = dt("ldexp", (e, t) => e * 2 ** t),
    ka = it("positive", e => +e),
    Na = it("negative", e => -e);
  function Sa(e, t) {
    for (; 0 != t;) {
      let a = t;
      t = e % t, e = a;
    }
    return e;
  }
  const ja = dt("lcm", function (e, t) {
      return e * t / Sa(e, t);
    }),
    qa = dt("gcd", Sa),
    Ia = it("reciprocal", e => 1 / e),
    Ea = dt("fmod", (e, t) => e - (e / t | 0) * t),
    Oa = dt("maximum", Math.max),
    Fa = dt("minimum", Math.min),
    Ta = ht("amax", Math.max, 1, -qt),
    Da = ht("amin", Math.min, 1, qt),
    Pa = it("sqrt", Math.sqrt),
    Ra = it("cbrt", Math.cbrt),
    Ka = it("square", e => e ** 2),
    Va = it("abs", Math.abs),
    Ya = Va,
    Ga = it("sign", Math.sign),
    Xa = it("nan_to_num", e => isNaN(e) ? 0 : e == 1 / 0 ? Number.MAX_VALUE : e == -1 / 0 ? Number.MIN_VALUE : e);
  s.add(Ta, () => Ta(H(4).reshape(2, 2)), () => 3).add(Ta, () => Ta(H(4).reshape(2, 2), 0), () => S([2, 3])).add(Ta, () => Ta(H(4).reshape(2, 2), 1), () => S([1, 3])), s.add(Oa, () => Oa([2, 3, 4], [1, 5, 2]), () => S([2, 5, 4])).add(Oa, () => Oa(he(2), [.5, 2]), () => S([[1, 2], [.5, 2]])), s.add(Ea, () => Ea([-3, -2, -1, 1, 2, 3], 2), () => S([-1, 0, -1, 1, 0, 1])).add(Ea, () => bt([-3, -2, -1, 1, 2, 3], 2), () => S([1, 0, 1, 1, 0, 1])), s.add(qa, () => qa(12, 20), () => 4).add(qa, () => qa(H(6), 20), () => S([20, 1, 2, 1, 4, 5])), s.add(ja, () => ja(12, 20), () => 60).add(ja, () => ja(H(6), 20), () => S([0, 20, 20, 60, 20, 20])), s.add($a, () => $a(1.3, -1), () => -1.3).add($a, () => 1 / $a(0, 1), () => 1 / 0).add($a, () => 1 / $a(0, -1), () => -1 / 0), s.add(Aa, () => Aa(-1.2), () => !0).add(Aa, () => Aa(S([1, -2.3, 2.1])), () => S([!1, !0, !1])), s.add(za, () => {
    let e = wa(1e-50),
      t = wa(2.5e-50);
    return za(e, t);
  }, () => -113.87649168120691), s.add(Gt, () => Gt([0, 1, 2, -1, 0], 4), () => S([0, 1, 2, 3, 4])).add(Gt, () => Gt([1, 2, 3, 4, 5, 6, 1, 2, 3], 6), () => S([1, 2, 3, 4, 5, 6, 7, 8, 9])).add(Gt, () => Gt([2, 3, 4, 5, 2, 3, 4, 5], 4), () => S([2, 3, 4, 5, 6, 7, 8, 9])), s.add(Zt, () => Zt([.37, 1.64]), () => S([0, 2])).add(Zt, () => Zt([.37, 1.64], 1), () => S([.4, 1.6])).add(Zt, () => Zt([.5, 1.5, 2.5, 3.5, 4.5]), () => S([0, 2, 2, 4, 4])).add(Zt, () => Zt([5, 15, 25, 35, 45], -1), () => S([0, 20, 20, 40, 40])).add(Zt, () => Zt([-5, -15, -25, -35, -45], -1), () => S([0, -20, -20, -40, -40])).add(Zt, () => Zt([1, 2, 3, 11], 1), () => S([1, 2, 3, 11])).add(Zt, () => Zt([1, 2, 3, 11], -1), () => S([0, 0, 0, 10])), s.add(ea, () => ea(S([-1.7, -1.5, -.2, .2, 1.5, 1.7, 2])), () => S([-2, -2, -0, 0, 2, 2, 2])), s.add(ta, () => ta(3.14), () => 3).add(ta, () => ta(3), () => 3).add(ta, () => ta([2.1, 2.9, -2.1, -2.9]), () => S([2, 2, -2, -2])), s.add(la, () => la([]), () => 1).add(la, () => la([1, 2]), () => 2).add(la, () => la(S([[1, 2], [3, 4]])), () => 24).add(la, () => la(S([[1, 2], [3, 4]]), 1), () => S([2, 12])).add(la, () => la(S([[1, 2], [3, 4]]), 0), () => S([3, 8])).add(la, () => la([1, 2], null, null, null, 5), () => 10), s.add(sa, () => sa([.5, 1.5]), () => 2).add(sa, () => sa([[0, 1], [0, 5]]), () => 6).add(sa, () => sa([[0, 1], [0, 5]], 0), () => S([0, 6])).add(sa, () => sa([[0, 1], [0, 5]], 1), () => S([1, 5])).add(sa, () => sa([10], null, null, null, 5), () => 15).add(sa, () => sa(H(100).reshape(5, -1, 1).at(x("::-2"), x("2:7")), [0, -1]), () => S([126, 129, 132, 135, 138])).add(sa, () => {
    let e = H(100);
    return e = e.at(x(20, -20)).reshape([2, 1, -1, 2]).at(x("..."), x("::-1")), sa(e, [1, -2], null, !0, -99);
  }, () => S([[[[426, 411]]], [[[876, 861]]]])), s.add(ia, () => ia(1), () => 1).add(ia, () => ia([1]), () => 1).add(ia, () => ia([1, St]), () => 1).add(ia, () => ia(S([[1, 2], [3, St]])), () => 6).add(ia, () => ia(S([[1, 2], [3, St]]), 0), () => S([3, 2])), s.add(da, () => da(1), () => 1).add(da, () => da([1]), () => 1).add(da, () => da([1, St]), () => 1).add(da, () => da(S([[1, 1], [1, St]])), () => 3).add(da, () => da(S([[1, 1], [1, St]]), 0), () => S([2, 1])).add(da, () => da([1, St, qt]), () => qt).add(da, () => da([1, St, It]), () => -qt), s.add(oa, () => oa(S([1, 2, 3])), () => S([1, 2, 6])).add(oa, () => oa(S([[1, 2, 3], [4, 5, 6]])), () => S([1, 2, 6, 24, 120, 720])).add(oa, () => oa(S([[1, 2, 3], [4, 5, 6]]), 0), () => S([[1, 2, 3], [4, 10, 18]])).add(oa, () => oa(S([[1, 2, 3], [4, 5, 6]]), 1), () => S([[1, 2, 6], [4, 20, 120]])), s.add(ua, () => ua(S([[1, 2, 3], [4, 5, 6]])), () => S([1, 3, 6, 10, 15, 21])).add(ua, () => ua(S([[1, 2, 3], [4, 5, 6]]), 0), () => S([[1, 2, 3], [5, 7, 9]])).add(ua, () => ua(S([[1, 2, 3], [4, 5, 6]]), 1), () => S([[1, 3, 6], [4, 9, 15]])), s.add(pa, () => pa(S([1, 2, 4, 7, 0])), () => S([1, 2, 3, -7])).add(pa, () => pa(S([1, 2, 4, 7, 0]), 2), () => S([1, 1, -10])).add(pa, () => pa(S([[1, 3, 6, 10], [0, 5, 6, 8]])), () => S([[2, 3, 4], [5, 1, 2]])).add(pa, () => pa(S([[1, 3, 6, 10], [0, 5, 6, 8]]), 1, 0), () => S([[-1, 2, 0, -2]])), s.add(ca, () => ca(S([1, 2, 4, 7, 0])), () => S([1, 2, 3, -7])).add(ca, () => ca(S([1, 2, 4, 7, 0]), S([88, 99]), -99), () => S([-99, 1, 2, 3, -7, 88, 99])).add(ca, () => ca([[1, 2, 4], [1, 6, 24]]), () => S([1, 2, -3, 5, 18])), s.add(Va, () => Va(S([-1.2, 1.2])), () => S([1.2, 1.2])), s.add(Et, () => Et(H(30).reshape(2, 5, 1, -1, 1)).shape, () => S([[[[[0], [.8414709848078965], [.9092974268256817]]], [[[.1411200080598672], [-.7568024953079282], [-.9589242746631385]]], [[[-.27941549819892586], [.6569865987187891], [.9893582466233818]]], [[[.4121184852417566], [-.5440211108893698], [-.9999902065507035]]], [[[-.5365729180004349], [.4201670368266409], [.9906073556948704]]]], [[[[.6502878401571168], [-.2879033166650653], [-.9613974918795568]]], [[[-.7509872467716762], [.14987720966295234], [.9129452507276277]]], [[[.8366556385360561], [-.008851309290403876], [-.8462204041751706]]], [[[-.9055783620066238], [-.13235175009777303], [.7625584504796028]]], [[[.956375928404503], [.27090578830786904], [-.6636338842129675]]]]]).shape);
  const Ua = it("invert", e => ~e),
    Wa = Ua,
    Ja = dt("bitwise_and", (e, t) => e & t),
    Ha = dt("bitwise_or", (e, t) => e | t),
    Ca = dt("bitwise_xor", (e, t) => e ^ t),
    Ba = dt("left_shift", (e, t) => e << t),
    La = dt("right_shift", (e, t) => e >> t);
  s.add(Ua, () => Ua([13]), () => S([-14])), s.add(Ja, () => Ja(13, 17), () => 1).add(Ja, () => Ja([11, 7], [4, 25]), () => S([0, 1])).add(Ja, () => Ja(S([2, 5, 255]), S([3, 14, 16])), () => S([2, 4, 16])).add(Ja, () => Ja([!0, !0], [!1, !0]), () => S([!1, !0])), s.add(Ha, () => Ha([33, 4], 1), () => S([33, 5])), s.add(Ca, () => {
    let e = [1, 2, 3],
      t = [4, 5, 6];
    return e = Ca(e, t), t = Ca(e, t), e = Ca(e, t), [e, t];
  }, () => [[4, 5, 6], [1, 2, 3]]), s.add(Ba, () => Ba(5, [1, 2, 3]), () => S([10, 20, 40])), s.add(La, () => La(10, [1, 2, 3]), () => S([5, 2, 1]));
  const Qa = dt("equal", (e, t) => e == t),
    Za = dt("not_equal", (e, t) => e != t),
    er = dt("less_equal", (e, t) => e <= t),
    tr = dt("less_equal", (e, t) => e < t),
    ar = dt("less_equal", (e, t) => e >= t),
    rr = dt("less_equal", (e, t) => e > t);
  function nr(e, t, a = null, r = 1) {}
  function lr(e, t, a = -1, r = a, n = a, l = a) {
    e = R(e), t = R(t), r = Ve(r, e.ndim), n = Ve(n, t.ndim), e = Pe(e, r, -1), t = Pe(t, n, -1);
    let s = e.shape.at(-1),
      i = t.shape.at(-1);
    if (2 != s && 3 != s || 2 != i && 3 != i) throw "incompatible dimensions for cross product (dimension must be 2 or 3)";
    let d = J(e.shape.slice(0, -1), t.shape.slice(0, -1));
    3 != e.shape.at(-1) && 3 != t.shape.at(-1) || (d = [...d, 3], l = Ve(l, d.length));
    let o,
      u,
      h,
      f,
      p,
      c,
      m,
      y,
      g,
      w = K(d);
    if (o = e.at("...", 0), u = e.at("...", 1), 3 == e.shape.at(-1) && (h = e.at("...", 2)), f = t.at("...", 0), p = t.at("...", 1), 3 == t.shape.at(-1) && (c = t.at("...", 2)), 0 != w.ndim && 3 == w.shape.at(-1) && (m = w.at("...", 0), y = w.at("...", 1), g = w.at("...", 2)), 2 == e.shape.at(-1)) {
      if (2 == t.shape.at(-1)) return ct(o, p, w), pt(w, ct(u, f), w), w;
      if (3 != t.shape.at(-1)) throw "b.shape.at(-1) != 3";
      ct(u, c, m), ct(o, c, y), Na(y, y), ct(o, p, g), pt(g, ct(u, f), g);
    } else {
      if (3 != e.shape.at(-1)) throw "a.shape.at(-1) != 3";
      if (3 == t.shape.at(-1)) {
        ct(u, c, m);
        let e = ct(h, p);
        pt(m, e, m), ct(h, f, y), ct(o, c, e), pt(y, e, y), ct(o, p, g), ct(u, f, e), pt(g, e, g);
      } else {
        if (2 != t.shape.at(-1)) throw "b.shape.at(-1) != 2";
        ct(h, p, m), Na(m, m), ct(h, f, y), ct(o, p, g), pt(g, ct(u, f), g);
      }
    }
    return Pe(w, -1, l);
  }
  function sr(e, t = null, a = 1, r = -1) {
    e = R(e);
    let {
      ndim: n
    } = e;
    r = Ve(r, n);
    let l = a;
    if (null != t) if (1 == (t = R(t)).ndim) {
      l = pa(t);
      let e = Array(n).fill(1);
      e[r] = l.shape[0], l = l.reshape(e);
    } else l = pa(t, null, r);
    let s,
      i = Array(n).fill(x()),
      d = Array(n).fill(x());
    return i[r] = x(1, null), d[r] = x(null, -1), s = ft(e.get(i), e.get(d)), ct(l, s, s), mt(s, 2, s), sa(s, r);
  }
  function ir(e, t, a = "full") {
    if (e = se(e), t = se(t), 0 == e.size) throw "a cannot be empty";
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
    return "same" == a && (n = n.slice((t.size - 1) / 2 | 0, ((t.size - 1) / 2 | 0) + r)), new v([r], n);
  }
  function dr(e, t, a, r = null) {
    if (e = R(e), null == r) r = V(e);else if (!Fe(e.shape, r.shape)) throw "out shape does not match input shape";
    if (_(t) && _(a)) {
      let n = Kn(e.shape, e.strides);
      for (let l of Kn(r.shape, r.strides)) r.data[l] = Math.min(Math.max(t, e.data[n.next().value]), a);
      return r;
    }
    t = T(t, e.shape), a = T(a, e.shape);
    let n = Kn(e.shape, e.strides),
      l = Kn(t.shape, t.strides),
      s = Kn(a.shape, a.strides);
    for (let i of Kn(r.shape, r.strides)) r.data[i] = Math.min(Math.max(t.data[l.next().value], e.data[n.next().value]), a.data[s.next().value]);
    return r;
  }
  function or(e, t = -1, a = null) {
    e = R(e), null == t ? (e = Ne(e), t = 0) : t = Ve(t, e.ndim);
    let r = V(e),
      n = Array(e.shape[t]),
      l = Array(e.shape[t]),
      s = (e, t) => n[e] - n[t],
      i = e.shape.slice();
    i[t] = 1;
    for (let d of P(i)) {
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
  function ur(e, t = -1, a = null) {
    e = R(e), null == t ? (e = Ne(e), t = 0) : t = Ve(t, e.ndim);
    let r = V(e),
      n = Array(e.shape[t]),
      l = (e, t) => e - t,
      s = e.shape.slice();
    s[t] = 1;
    for (let i of P(s)) {
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
  function hr(e, t, a, r = null, n = null, l = null) {
    if ([e, t, a] = [e, t, a].map(e => R(e)), 1 != t.ndim || 1 != a.ndim) throw "Data points must be 1-D sequences";
    if (t.shape[0] != a.shape[0]) throw "fp and xp are not of the same length";
    if (null != l) {
      e = wt(e, l);
      let r = or(t = wt(t, l));
      t = t.at(r), a = a.at(r), t = De([pt(t.at(x(-1)), l), t, ft(t.at(x(0, 1)), l)]), a = De([a.at(x(-1)), a, a.at(x(0, 1))]);
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
    return new v(e.shape, s);
  }
  function fr(e) {
    let t = Array(e.length),
      a = t[0] = e[0];
    for (let r = 1; r < e.length; r++) t[r] = a += e[r];
    return t;
  }
  function pr(e) {
    let t = 0;
    for (let a = 0; a < e.length; a++) t += e[a];
    return t;
  }
  function cr(e, t, a) {
    let r = a() * t,
      n = e.length - 1;
    for (let t = 0; t < n; t++) if (r -= e[t], r < 0) return t;
    return n;
  }
  function mr(e, t, a) {
    let r = a() * t,
      n = 0,
      l = e.length - 1;
    for (; n < l;) {
      let t = n + l >> 1;
      r > e[t] ? n = t + 1 : l = t;
    }
    return n;
  }
  function yr(e) {
    let t = e.length,
      a = [],
      r = [],
      n = t / pr(e);
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
  function gr(e, t, a, r) {
    let n = r() * e | 0;
    return r() < t[n] ? n : a[n];
  }
  function wr(e) {
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
  function br(e, t, a, r) {
    let n = r - e[a += t];
    for (; a >= 0;) e[a] += n, a = a - 1 >> 1;
  }
  function xr(e, t, a, r) {
    let n = r() * e[0],
      l = 1;
    for (; --t;) n > e[l] && (n -= e[l++]), l = 2 * l + 1;
    return n > e[l] && l++, l - a;
  }
  function _r(e, t = null, a = !0, r = "auto", n = Array(e), l = Math.random) {
    let s = t.length;
    if (a ||= 1 == e, a) switch ("auto" == r && (r = 1 == e || e * s < 600 ? "linear" : e > (s > 100 ? 2 * s : 50) ? "alias" : "binary"), r) {
      case "linear":
        {
          let a = pr(t);
          for (let r = 0; r < e; r++) n[r] = cr(t, a, l);
          break;
        }
      case "binary":
        {
          let a = fr(t),
            r = a.at(-1);
          for (let t = 0; t < e; t++) n[t] = mr(a, r, l);
          break;
        }
      case "alias":
        {
          let {
            n: a,
            prob: r,
            alias: s
          } = yr(t);
          for (let t = 0; t < e; t++) n[t] = gr(a, r, s, l);
          break;
        }
      case "sumtree":
        {
          let {
            tree: a,
            level: r,
            offset: s
          } = wr(t);
          for (let t = 0; t < e; t++) n[t] = xr(a, r, s, l);
          break;
        }
      default:
        throw `unexpected method '${r}'`;
    } else {
      if (e > t) throw "size > p is not allowed when replace = true";
      switch ("auto" == r && (r = s + e < 150 ? "linear" : s + e < 200 ? "binary" : "sumtree"), r) {
        case "linear":
          {
            let a = pr(t);
            t = t.slice();
            for (let r = 0; r < e; r++) {
              let e = n[r] = cr(t, a, l);
              a -= t[e], t[e] = 0;
            }
            break;
          }
        case "binary":
          {
            let a = fr(t),
              r = a.at(-1);
            for (let s = 0; s < e; s++) {
              let e = n[s] = mr(a, r, l),
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
            } = yr(t);
            t[n[a] = gr(e, r, s, l)] = 0;
          }
          break;
        case "sumtree":
          {
            let {
              tree: a,
              level: r,
              offset: s
            } = wr(t);
            for (let t = 0; t < e; t++) br(a, s, n[t] = xr(a, r, s, l), 0);
            break;
          }
        default:
          throw `unexpected method '${r}'`;
      }
    }
    return n;
  }
  function zr(e, t = null, a = !0, r = null) {
    if (1 != (e = "number" == typeof e ? H(e) : R(e)).ndim) throw "'p' must be 1-dimensional";
    if (0 == e.size) throw "'a' cannot be empty unless no samples are taken";
    if (null == r) r = Array(e.size).fill(1 / e.size);else {
      if (1 != (r = R(r)).ndim) throw "'p' must be 1-dimensional";
      if (r.size != e.size) throw "'a' and 'p' must have same size";
      r = r.toarray();
    }
    if (e = e.toarray(), null == t) return e[_r(1, r)[0]];
    "number" == typeof t && (t = [t]);
    let n = function (e) {
      let t = 1;
      for (let a of e) t *= a;
      return t;
    }(t);
    if (Ie(r) < n) throw "Fewer non-zero entries in p than size";
    let l = _r(n, r, a).map(t => e[t]);
    return new v(t, l);
  }
  function vr(e = null) {
    if (null == e) return Math.random();
    "number" == typeof e && (e = [e]);
    let t = function (e) {
        let t = 1;
        for (let a of e) t *= a;
        return t;
      }(e),
      a = Array(t);
    for (let e = 0; e < t; e++) a[e] = Math.random();
    return new v(e, a);
  }
  s.add(Qa, () => Qa([0, 1, 3], H(3)), () => S([!0, !0, !1])).add(Qa, () => Qa(1, Q(1)), () => S([!0])).add(Qa, () => Qa(S([2, 4, 6]), S([2, 4, 2])), () => S([!0, !0, !1])), s.add(Za, () => Za([1, 2], [1, 3]), () => S([!1, !0])).add(Za, () => Za([1, 2], [[1, 3], [1, 4]]), () => S([[!1, !0], [!1, !0]])), s.add(er, () => er([4, 2, 1], [2, 2, 2]), () => S([!1, !0, !0])), s.add(tr, () => tr([1, 2], [2, 2]), () => S([!0, !1])), s.add(ar, () => ar([4, 2, 1], [2, 2, 2]), () => S([!0, !0, !1])), s.add(rr, () => rr([4, 2], [2, 2]), () => S([!0, !1])), s.add(lr, () => lr([1, 2, 3], [4, 5, 6]), () => S([-3, 6, -3])).add(lr, () => lr([1, 2], [4, 5, 6]), () => S([12, -6, -3])).add(lr, () => lr([1, 2, 0], [4, 5, 6]), () => S([12, -6, -3])).add(lr, () => lr([1, 2], [4, 5]), () => S(-3)).add(lr, () => lr(S([[1, 2, 3], [4, 5, 6]]), S([[4, 5, 6], [1, 2, 3]])), () => S([[-3, 6, -3], [3, -6, 3]])).add(lr, () => lr(S([[1, 2, 3], [4, 5, 6]]), S([[4, 5, 6], [1, 2, 3]]), void 0, void 0, void 0, 0), () => S([[-3, 3], [6, -6], [-3, 3]])).add(lr, () => {
    let e = S([[1, 2, 3], [4, 5, 6], [7, 8, 9]]),
      t = S([[7, 8, 9], [4, 5, 6], [1, 2, 3]]);
    return [lr(e, t), lr(e, t, void 0, 0, 0)];
  }, () => [S([[-6, 12, -6], [0, 0, 0], [6, -12, 6]]), S([[-24, 48, -24], [-30, 60, -30], [-36, 72, -36]])]), s.add(sr, () => sr([1, 2, 3]), () => 4).add(sr, () => sr([1, 2, 3], [4, 6, 8]), () => 8).add(sr, () => sr([1, 2, 3], null, 2), () => 8).add(sr, () => sr([1, 2, 3], [8, 6, 4]), () => -8).add(sr, () => sr(H(6).reshape(2, 3), void 0, void 0, 0), () => S([1.5, 2.5, 3.5])).add(sr, () => sr(H(6).reshape(2, 3), void 0, void 0, 1), () => S([2, 8])), s.add(ir, () => ir([1, 2, 3], [0, 1, .5]), () => S([0, 1, 2.5, 4, 1.5])).add(ir, () => ir([1, 2, 3], [1, .5], "full"), () => S([1, 2.5, 4, 1.5])).add(ir, () => ir([1, 2, 3], [0, 1, .5], "same"), () => S([1, 2.5, 4])).add(ir, () => ir([1, 2, 3], [0, 1, .5], "valid"), () => S([2.5])), s.add(dr, () => dr(H(10), 1, 8), () => S([1, 1, 2, 3, 4, 5, 6, 7, 8, 8])).add(dr, () => dr(H(10), 8, 1), () => S([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).add(dr, () => {
    let e = H(10);
    return [dr(e, 3, 6, e), e];
  }, () => [S([3, 3, 3, 3, 4, 5, 6, 6, 6, 6]), S([3, 3, 3, 3, 4, 5, 6, 6, 6, 6])]).add(dr, () => dr(H(10), [3, 4, 1, 1, 1, 4, 4, 4, 4, 4], 8), () => S([3, 4, 2, 3, 4, 5, 6, 7, 8, 8])), or(S([[[0, 3], [2, 2], [2, 2]], [[8, 5], [4, 1], [6, -2]]]), 0), s.add(or, () => or([3, 1, 2]), () => S([1, 2, 0])).add(or, () => or(S([[0, 3], [2, 2]]), 0), () => S([[0, 1], [1, 0]])).add(or, () => or(S([[0, 3], [2, 2]]), 1), () => S([[0, 1], [0, 1]])).add(or, () => or(S([[[0, 3], [2, 2], [2, 2]], [[8, 5], [4, 1], [6, -2]]]), 0), () => S([[[0, 0], [0, 1], [0, 1]], [[1, 1], [1, 0], [1, 0]]])).add(or, () => or(S([[[0, 3], [2, 2], [2, 2]], [[8, 5], [4, 1], [6, -2]]]), 1), () => S([[[0, 1], [1, 2], [2, 0]], [[1, 2], [2, 1], [0, 0]]])).add(or, () => or(S([[[0, 3], [2, 2], [2, 2]], [[8, 5], [4, 1], [6, -2]]]), 2), () => S([[[0, 1], [0, 1], [0, 1]], [[1, 0], [1, 0], [1, 0]]])), s.add(ur, () => ur(S([[1, 4], [3, 1]])), () => S([[1, 4], [1, 3]])).add(ur, () => ur(S([[1, 4], [3, 1]]), null), () => S([1, 1, 3, 4])).add(ur, () => ur(S([[1, 4], [3, 1]]), 0), () => S([[1, 1], [3, 4]])), s.add(hr, () => hr(2.5, [1, 2, 3], [3, 2, 0]), () => 1).add(hr, () => hr(4.5, [6, 4, 5], [3, 2, 0]), () => 3).add(hr, () => hr([0, 1, 1.5, 2.5, 3.14], [1, 2, 3], [3, 2, 0]), () => S([3, 3, 2.5, 1, 0])).add(hr, () => hr([-180, -170, -185, 185, -10, -5, 0, 365], [190, -190, 350, -350], [5, 10, 3, 4], null, null, 360), () => S([7.5, 5, 8.75, 6.25, 3, 3.25, 3.5, 3.75]));
  const Ar = vr,
    $r = vr;
  function Mr(...e) {
    return vr(e);
  }
  function kr(e) {
    let t = 1;
    for (let a of e) t *= a;
    return t;
  }
  function Nr(e, t = null, a = null, r = !0) {
    if (null != a) {
      if (!re(a)) throw "output array must be contiguous";
      null == t && (t = a.shape);
    }
    let n;
    if (null == t) {
      if (r) return e();
      n = [], t = 1;
    } else "number" == typeof t ? n = [t] : (n = t, t = kr(n));
    if (null == a) a = K(n);else if (!Fe(n, a.shape)) throw "size must match out.shape when used together";
    let {
      data: l,
      offset: s
    } = a;
    for (let a = 0; a < t; a++) l[s + a] = e();
    return a;
  }
  class Sr {
    constructor(e = Math.random) {
      this.rand = e;
    }
    integers(e, t = null, a = null, r = !1) {
      null == t && (t = e, e = 0);
      let n = t - e;
      return r && (n += 1), Nr(() => this.rand() * n + e | 0, a);
    }
    random(e = null, t = null) {
      return Nr(() => this.rand(), e, t);
    }
    choice(e, t = null, a = !0, r = null, n = 0) {
      if ("number" == typeof e) {
        if (e <= 0) throw "a must be a positive integer unless no samples are taken";
        e = H(e);
      } else if (0 == (e = R(e)).size) throw "a cannot be empty unless no samples are taken";
      if (null == r) r = Array(e.shape[n]).fill(1 / e.shape[n]);else {
        if (1 != (r = R(r)).ndim) throw "p must be 1-dimensional";
        if (r.size != e.shape[n]) throw "a and p must have same size";
        r = r.toarray();
      }
      let l = Array(n).fill(x());
      if (null == t) return l[n] = _r(1, r, void 0, void 0, void 0, this.rand)[0], e._getview(l).copy();
      let s = t;
      if ("number" == typeof t && (s = [t]), t = kr(s), r.length < t) throw "Cannot take a larger sample than population when replace is false";
      if (Ie(r) < t) throw "Fewer non-zero entries in p than size";
      let i = [...e.shape];
      i.splice(n, 1, ...s);
      let d = Array(n).fill(x()),
        o = K(i),
        u = _r(t, r, a, void 0, void 0, this.rand),
        h = 0;
      for (let t of P(s)) {
        for (let e = 0; e < t.length; e++) d[n + e] = t[e];
        l[n] = u[h++], o.set(d, e._getview(l));
      }
      return o;
    }
    shuffle(e, t = 0) {
      t = Ve(t, (e = R(e)).ndim);
      let a = Array(t + 1).fill(x(":")),
        {
          shape: r
        } = e,
        n = r[t],
        l = K([...r.slice(0, t), ...r.slice(t + 1)]);
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
      t = Ve(t, (e = R(e)).ndim);
      let r = [...e.shape];
      r[t] = 1, null == a && (a = V(e));
      for (let n of P(r)) {
        n[t] = x();
        let r = e._getview(n).flatten();
        this.shuffle(r), a.set(n, r);
      }
      return a;
    }
    permutation(e, t = 0) {
      return e = "number" == typeof e ? H(e) : S(e), this.shuffle(e, t), e;
    }
    uniform(e = 0, t = 1, a = null) {
      return Nr(() => this.rand() * (t - e) + e, a);
    }
    normal(e = 0, t = 1, a = null) {
      return Nr(() => {
        let a = this.rand(),
          r = this.rand(),
          n = Math.sqrt(-2 * Math.log(a)) * Math.cos(2 * Math.PI * r);
        return e + t * n;
      }, a);
    }
  }
  const jr = new Sr();
  function qr(e, t = null, a = null) {
    if (null == t && null == a) return Ae(e);
    let r = ue(e, t, a),
      n = K(r.shape),
      l = 0;
    for (let [e, t, a] of r) n.data[l++] = e ? t : a;
    return n;
  }
  function Ir(...e) {
    let t = [];
    for (let a = 0; a < e.length; a++) {
      let {
          start: r,
          stop: n,
          step: l,
          slicelength: s
        } = e[a].indices(),
        i = Array(s);
      for (let e = 0; e < s; e++) i[e] = r + e * l;
      let d = Array(e.length).fill(1);
      d[a] = s, t.push(new v(d, i));
    }
    return t;
  }
  function Er(e, t = null, a = null, r = !1) {
    e = R(e), null == t ? (e = Ne(e), t = 0) : t = Ve(t, e.ndim);
    let n = [...e.shape.slice(0, t), ...(r ? [1] : []), ...e.shape.slice(t + 1)];
    if (null == a) a = K(n);else if (!Fe(n, a.shape)) throw "out must have the same shape as the expected output";
    return pt(Ta(e, t, null, r), Da(e, t, null, r), a), a;
  }
  function Or(e, t = null, a = null, r = !1, n = !1) {
    let l;
    if (e = R(e), null == t ? (e = Ne(e), t = 0) : t = Ve(t, e.ndim), null != a && (a = R(a)), null != a) {
      if (l = sa(a), 0 == l) throw "sum(weights) must not be 0";
      if (1 == a.ndim) a = a.reshape([...Array(t).fill(1), e.shape[t]]);else if (!Fe(a.shape, e.shape)) throw "weights.shape and a.shape do not match";
      e = ct(e, a);
    } else l = e.shape[t];
    let s = mt(sa(e, t, null, n), l);
    return r ? [s, l] : s;
  }
  function Fr(e, t = null, a = null, r = !1) {
    e = R(e), null == t ? (e = Ne(e), t = 0) : t = Ve(t, e.ndim);
    let n = [...e.shape.slice(0, t), ...(r ? [1] : []), ...e.shape.slice(t + 1)];
    if (null == a) a = K(n);else if (!Fe(n, a.shape)) throw "out must have the same shape as the expected output";
    return mt(sa(e, t, null, r), e.shape[t], a), a;
  }
  function Tr(e, t = null, a = null, r = 0, n = !1) {
    e = R(e), null == t ? (e = Ne(e), t = 0) : t = Ve(t, e.ndim);
    let l = [...e.shape.slice(0, t), ...(n ? [1] : []), ...e.shape.slice(t + 1)];
    if (null == a) a = K(l);else if (!Fe(l, a.shape)) throw "out must have the same shape as the expected output";
    return Fr(Ka(pt(e, mt(sa(e, t, null, !0), e.shape[t] - r))), t, a, n), a;
  }
  function Dr(e, t = null, a = null, r = 0, n = !1) {
    return a = Tr(e, t, a, r, n), Pa(a, a), a;
  }
  function Pr(e, t = null, a = 0) {
    if (1 != (e = R(e)).ndim) throw "a.dim != 1";
    if (Da(e) < 0) throw "amin(a) < 0";
    if (a < 0) throw "minlength < 0";
    if (null != t) {
      if (!Fe((t = R(t)).shape, e.shape)) throw "weights.shape != a.shape";
      t = t.toarray();
    }
    let r = Array(Math.max(Ta(e) + 1, a)).fill(0),
      n = 0;
    for (let a of e.flat) r[a] += null != t ? t[n] : 1, n++;
    return new v([r.length], r);
  }
  function Rr(e, t = !1) {
    let a,
      r = e.length,
      n = Array(r).fill(1);
    a = t ? [] : K([r, ...e]);
    for (let r = 0; r < e.length; r++) {
      let l = e[r],
        s = H(l).reshape([...n.slice(0, r), l, ...n.slice(r + 1)]);
      t ? a.push(s) : a.set([r], s);
    }
    return a;
  }
  function Kr(...e) {
    let t = [],
      a = e.length;
    for (let r = 0; r < a; r++) {
      let n = e[r];
      n = R(n), n.ndim, "boolean" == typeof n.item(0) && ([n] = Ae(n)), n = n.reshape([...Array(r).fill(1), n.size, ...Array(a - r - 1).fill(1)]), t.push(n);
    }
    return t;
  }
  function Vr(e, t, a = !1, r = !1, n = "table") {}
  function Yr(e, t = null, a = "big") {
    e = R(e), null == t ? (e = Ne(e), t = 0) : t = Ve(t, e.ndim);
    let r = e.shape.slice();
    r[t] = Math.ceil(r[t] / 8);
    let n = K(r),
      l = e.shape.slice();
    l[t] = 1;
    let s = Array(8 * r[t]);
    for (let r of P(l)) {
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
  function Gr(e, t = [], a = "big") {
    if ("big" == a) for (let a = 7; a >= 0; a--) t[a] = e % 2, e = e / 2 | 0;else for (let a = 0; a <= 7; a++) t[a] = e % 2, e = e / 2 | 0;
    return t;
  }
  function Xr(e, t = null, a = null, r = "big") {
    e = R(e), null == t ? (e = Ne(e), t = 0) : t = Ve(t, e.ndim);
    let n = 0,
      l = 8;
    null != a && (a < 0 ? n = 8 - a : l = a);
    let s = e.shape.slice();
    s[t] = s[t] * (l - n);
    let i = K(s),
      d = Array(8);
    for (let a of P(e.shape)) {
      let {
          offset: s
        } = e,
        {
          offset: o
        } = i;
      for (let t = 0; t < e.shape.length; t++) s += a[t] * e.strides[t], o += a[t] * i.strides[t];
      Gr(e.data[s], d, r);
      for (let e = n, a = 0; e < l; e++, a++) i.data[o + a * i.strides[t]] = d[e];
    }
    return i;
  }
  function Ur(e, t = 0, a = null) {
    if (0 == (e = e.map(e => R(e))).length) throw "need at least one array to stack";
    for (let t = 1; t < e.length; t++) if (!Fe(e[0], e[t])) throw "all input arrays must have the same shape";
    t = Ve(t, e[0].ndim + 1);
    let r = [...Array(t).fill(m.colon), m.newaxis];
    return De(e.map(e => e.get(r)), t, a);
  }
  function Wr(e) {
    return e = ie(...e), Array.isArray(e) || (e = [e]), De(e, 0);
  }
  function Jr(e) {
    return e = se(...e), Array.isArray(e) || (e = [e]), e.length > 0 && 1 == e[0].ndim ? De(e, 0) : De(e, 1);
  }
  function Hr(e) {
    return e = de(...e), Array.isArray(e) || (e = [e]), De(e, 2);
  }
  function Cr(e) {
    let t = [];
    for (let a of e) a = R(a), a.ndim < 2 && (a = S(a, null, !1, 2).T), t.push(a);
    return De(t, 1);
  }
  function Br(e) {
    return e = ie(...e), Array.isArray(e) || (e = [e]), De(e, 0);
  }
  function Lr(e, t, a = 0) {
    let r, n, l;
    if (null != e.shape ? (a = Ve(a, e.ndim), r = e.shape[a]) : r = e.length, "number" == typeof t) {
      if (n = 0 | t, n <= 0) throw "number sections must be larger than 0.";
      let e = r / n | 0,
        a = r % n;
      l = S([0, ...Array(a).fill(e + 1), ...Array(n - a).fill(e)]).cumsum().toarray();
    } else n = t.length + 1, l = [0, ...t, r];
    let s = [],
      i = ne(e, a, 0);
    for (let e = 0; e < n; e++) {
      let t = l[e],
        r = l[e + 1];
      s.push(ne(i.at(x(t, r)), a, 0));
    }
    return s;
  }
  function Qr(e, t, a = 0) {
    if (a = Ve(a, (e = R(e)).ndim), null != t.shape && (t = t.toarray()), null == t.length) {
      let r = t;
      if (e.shape[a] % r) throw "array split does not result in an equal division";
    }
    return Lr(e, t, a);
  }
  function Zr(e, t) {
    if (pe(e) < 3) throw "dsplit only works on arrays of 3 or more dimensions";
    return Qr(e, t, 2);
  }
  function en(e, t) {
    if (0 == pe(e)) throw "hsplit only works on arrays of 1 or more dimensions";
    return Qr(e, t, pe(e) > 1 ? 1 : 0);
  }
  function tn(e, t) {
    if (pe(e) < 2) throw "vsplit only works on arrays of 2 or more dimensions";
    return Qr(e, t, 0);
  }
  function an(e, t, a = null) {
    e = R(e), null == a ? (e = Ne(e), a = 0) : a = Ve(a, e.ndim);
    let r = e.shape.slice(),
      n = "number" == typeof t;
    if (n) r[a] *= t;else if (1 == t.length) t = t[0], r[a] *= t, n = !0;else {
      if (r[a] != t.length) throw `operands could not be broadcast together with shape (${r[a]},) (${t.length},)`;
      r[a] = t.reduce((e, t) => e + t);
    }
    let l = K(r),
      s = l.strides.slice();
    s.splice(a, 1);
    let i = e.shape.slice();
    i.splice(a, 1);
    let d = e.strides.slice();
    d.splice(a, 1);
    let o = r[a];
    for (let r of P(i)) {
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
  function rn(e, t) {
    "number" == typeof t && (t = [t]);
    let a = t.length;
    if (t.every(e => 1 == e) && e instanceof v) return S(e, null, !0, a);
    let r = S(e, null, !1, a);
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
  function nn(e, t = 0, a = 0, r = 1) {
    e = R(e);
    let {
      ndim: n
    } = e;
    if (n < 2) throw "array.ndim must be >= 2";
    a = Ve(a, n), r = Ve(r, n);
    let l = Array(n);
    l[n - 2] = a, l[n - 1] = r;
    for (let e = 0, t = 0; e < n; e++) e != a && e != r && (l[t++] = e);
    let s,
      i,
      d = (e = le(e, l)).shape[n - 2],
      o = e.shape[n - 1],
      u = o + 1;
    t < 0 ? (s = -o * t, i = Math.min(o, d + t) * (o + 1) - o * t) : (s = t, i = Math.min(d, o - t) * (o + 1) + t);
    let h = Math.ceil((i - s) / u);
    return new v([...e.shape.slice(0, -2), h], e.data, e.dtype, e.base ?? e, [...e.strides.slice(0, -2), u * e.strides[n - 1]], e.offset + s, e.itemsize);
  }
  function ln(e, t = 0) {
    let a = (e = R(e)).shape;
    if (1 == a.length) {
      let r = a[0] + Math.abs(t),
        n = ee([r, r]),
        l = t >= 0 ? t : -t * r,
        s = n.at(x(null, r - t));
      for (let t = 0; t < e.size; t++, l += r + 1) s.itemset(l, e.item(t));
      return n;
    }
    if (2 != a.length) throw "Input must be 1- or 2-d.";
    return nn(e, t);
  }
  function sn(e, t = null) {
    let a;
    if (e = R(e), null == t) a = Array(e.ndim).fill(x("::-1"));else {
      t = ge(t, e.ndim), a = Array(e.ndim).fill(x(":"));
      for (let e of t) a[e] = x("::-1");
    }
    return e.get(a);
  }
  function dn(e) {
    if ((e = R(e)).ndim < 2) throw "Input must be >= 2-d.";
    return e.get(fn(":", "::-1"));
  }
  function on(e) {
    if ((e = R(e)).ndim < 1) throw "Input must be >= 1-d.";
    return e.at(x("::-1"));
  }
  s.add(qr, () => {
    let e = H(10);
    return qr(tr(e, 5), e, ct(10, e));
  }, () => S([0, 1, 2, 3, 4, 50, 60, 70, 80, 90])).add(qr, () => qr([[!0, !1], [!0, !0]], [[1, 2], [3, 4]], [[9, 8], [7, 6]]), () => S([[1, 8], [3, 4]])).add(qr, () => {
    let [e, t] = Ir(x(":3"), x(null, 4));
    return qr(tr(e, t), e, ft(10, t));
  }, () => S([[10, 0, 0, 0], [10, 11, 1, 1], [10, 11, 12, 2]])).add(qr, () => {
    let e = S([[0, 1, 2], [0, 2, 4], [0, 3, 6]]);
    return qr(tr(e, 4), e, -1);
  }, () => S([[0, 1, 2], [0, 2, -1], [0, 3, -1]])), s.add(Ir, () => Ir(x("0:5"), x("0:5")), () => [S([[0], [1], [2], [3], [4]]), S([[0, 1, 2, 3, 4]])]).add(Ir, () => Ir(x("3:5"), x("0:-5"), x("0:1")), () => [S([[[3]], [[4]]]), S([]).reshape([1, 0, 1]), S([[[0]]])]), s.add(Er, () => Er(S([[4, 9, 2, 10], [6, 9, 7, 12]]), 1), () => S([8, 6])).add(Er, () => Er(S([[4, 9, 2, 10], [6, 9, 7, 12]]), 0), () => S([2, 0, 5, 2])).add(Er, () => Er(S([[4, 9, 2, 10], [6, 9, 7, 12]])), () => 10).add(Er, () => Er(xt(H(10, 40), 2).reshape(5, 2, 3), 0, null, !0), () => S([[[1056, 1104, 1152], [1200, 1248, 1296]]])), s.add(Or, () => Or(H(1, 5)), () => 2.5).add(Or, () => Or(H(1, 11), void 0, H(10, 0, -1)), () => 4).add(Or, () => Or(H(6).reshape(3, 2), 1, [1 / 4, 3 / 4]), () => S([.75, 2.75, 4.75])).add(Or, () => Or(H(6).reshape(3, 2), 1, void 0, void 0, !0), () => S([[.5], [2.5], [4.5]])), s.add(Fr, () => Fr(S([[1, 2], [3, 4]])), () => 2.5).add(Fr, () => Fr(S([[1, 2], [3, 4]]), 0), () => S([2, 3])).add(Fr, () => Fr(S([[1, 2], [3, 4]]), 1), () => S([1.5, 3.5])), s.add(Tr, () => Tr(S([[1, 2], [3, 4]])), () => 1.25).add(Tr, () => Tr(S([[1, 2], [3, 4]]), 0), () => S([1, 1])).add(Tr, () => Tr(S([[1, 2], [3, 4]]), 1), () => S([.25, .25])), s.add(Dr, () => Dr(S([[1, 2], [3, 4]])), () => 1.118033988749895).add(Dr, () => Dr(S([[1, 2], [3, 4]]), 0), () => S([1, 1])).add(Dr, () => Dr(S([[1, 2], [3, 4]]), 1), () => S([.5, .5])), s.add(Pr, () => Pr(H(5)), () => S([1, 1, 1, 1, 1])).add(Pr, () => Pr(S([0, 1, 1, 3, 2, 1, 7])), () => S([1, 3, 1, 1, 0, 0, 0, 1])).add(Pr, () => Pr(S([0, 1, 1, 2, 2, 2]), S([.3, .5, .2, .7, 1, -.6])), () => S([.3, .7, 1.1])), s.add(Rr, () => Rr([2, 3]), () => S([[[0, 0, 0], [1, 1, 1]], [[0, 1, 2], [0, 1, 2]]])).add(Rr, () => Rr([2, 3], !0), () => [S([[0], [1]]), S([[0, 1, 2]])]), s.add(Kr, () => Kr([0, 1], [2, 4]), () => [S([[0], [1]]), S([[2, 4]])]).add(Kr, () => Kr([!0, !0], [2, 4]), () => [S([[0], [1]]), S([[2, 4]])]).add(Kr, () => Kr([!0, !0], [!1, !1, !0, !1, !0]), () => [S([[0], [1]]), S([[2, 4]])]), s.add(Yr, () => Yr(S([[[1, 0, 1], [0, 1, 0]], [[1, 1, 0], [0, 0, 1]]]), -1), () => S([[[160], [64]], [[192], [32]]])).add(Yr, () => Yr(S([[[1, 0, 1], [0, 1, 0]], [[1, 1, 0], [0, 0, 1]]])), () => S([171, 16])).add(Yr, () => Yr(S([[[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]]), -1), () => S([[[160, 0]]])), s.add(Xr, () => Xr(S([[2], [7], [23]]), 1), () => S([[0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 1, 0, 1, 1, 1]])).add(Xr, () => {
    let e = S([[0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 1, 0, 1, 1, 1]]),
      t = Yr(e, 0);
    return [Xr(t, 0), Ee(e, Xr(t, 0, e.shape[0]))];
  }, () => [S([[0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 1, 0, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]), !0]), s.add(Ur, () => Ur(Array(10).fill().map(() => jr.normal(0, 1, [3, 4])), 0).shape, () => [10, 3, 4]).add(Ur, () => Ur(Array(10).fill().map(() => jr.normal(0, 1, [3, 4])), 1).shape, () => [3, 10, 4]).add(Ur, () => Ur(Array(10).fill().map(() => jr.normal(0, 1, [3, 4])), 2).shape, () => [3, 4, 10]).add(Ur, () => Ur([S([1, 2, 3]), S([4, 5, 6])]), () => S([[1, 2, 3], [4, 5, 6]])).add(Ur, () => Ur([S([1, 2, 3]), S([4, 5, 6])], -1), () => S([[1, 4], [2, 5], [3, 6]])), s.add(Wr, () => Wr([S([1, 2, 3]), S([4, 5, 6])]), () => S([[1, 2, 3], [4, 5, 6]])).add(Wr, () => Wr([S([[1], [2], [3]]), S([[4], [5], [6]])]), () => S([[1], [2], [3], [4], [5], [6]])), s.add(Jr, () => Jr([S([1, 2, 3]), S([4, 5, 6])]), () => S([1, 2, 3, 4, 5, 6])).add(Jr, () => Jr([S([[1], [2], [3]]), S([[4], [5], [6]])]), () => S([[1, 4], [2, 5], [3, 6]])), s.add(Hr, () => Hr([S([1, 2, 3]), S([2, 3, 4])]), () => S([[[1, 2], [2, 3], [3, 4]]])).add(Hr, () => Hr([S([[1], [2], [3]]), S([[2], [3], [4]])]), () => S([[[1, 2]], [[2, 3]], [[3, 4]]])), s.add(Cr, () => Cr([S([1, 2, 3]), S([2, 3, 4])]), () => S([[1, 2], [2, 3], [3, 4]])), s.add(Br, () => Br([S([1, 2, 3]), S([4, 5, 6])]), () => S([[1, 2, 3], [4, 5, 6]])).add(Br, () => Br([S([[1], [2], [3]]), S([[4], [5], [6]])]), () => S([[1], [2], [3], [4], [5], [6]])), s.add(Lr, () => Lr(H(8), 3), () => [S([0, 1, 2]), S([3, 4, 5]), S([6, 7])]).add(Lr, () => Lr(H(9), 4), () => [S([0, 1, 2]), S([3, 4]), S([5, 6]), S([7, 8])]), s.add(Qr, () => Qr(H(9), 3), () => [S([0, 1, 2]), S([3, 4, 5]), S([6, 7, 8])]).add(Qr, () => Qr(H(8), [3, 5, 6, 10]), () => [S([0, 1, 2]), S([3, 4]), S([5]), S([6, 7]), S([])]), s.add(Zr, () => Zr(H(16).reshape(2, 2, 4), 2), () => [S([[[0, 1], [4, 5]], [[8, 9], [12, 13]]]), S([[[2, 3], [6, 7]], [[10, 11], [14, 15]]])]).add(Zr, () => Zr(H(16).reshape(2, 2, 4), S([3, 6])), () => [S([[[0, 1, 2], [4, 5, 6]], [[8, 9, 10], [12, 13, 14]]]), S([[[3], [7]], [[11], [15]]]), K([2, 2, 0])]), s.add(en, () => en(H(16).reshape(4, 4), 2), () => [S([[0, 1], [4, 5], [8, 9], [12, 13]]), S([[2, 3], [6, 7], [10, 11], [14, 15]])]).add(en, () => en(H(16).reshape(4, 4), S([3, 6])), () => [S([[0, 1, 2], [4, 5, 6], [8, 9, 10], [12, 13, 14]]), S([[3], [7], [11], [15]]), K([4, 0])]).add(en, () => en(H(8).reshape(2, 2, 2), 2), () => [S([[[0, 1]], [[4, 5]]]), S([[[2, 3]], [[6, 7]]])]).add(en, () => en(S([0, 1, 2, 3, 4, 5]), 2), () => [S([0, 1, 2]), S([3, 4, 5])]), s.add(tn, () => tn(H(16).reshape(4, 4), 2), () => [S([[0, 1, 2, 3], [4, 5, 6, 7]]), S([[8, 9, 10, 11], [12, 13, 14, 15]])]).add(tn, () => tn(H(16).reshape(4, 4), S([3, 6])), () => [S([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]]), S([[12, 13, 14, 15]]), K([0, 4])]).add(tn, () => tn(H(8).reshape(2, 2, 2), 2), () => [S([[[0, 1], [2, 3]]]), S([[[4, 5], [6, 7]]])]), s.add(an, () => an(3, 4), () => S([3, 3, 3, 3])).add(an, () => an(S([[1, 2], [3, 4]]), 2), () => S([1, 1, 2, 2, 3, 3, 4, 4])).add(an, () => an(S([[1, 2], [3, 4]]), 3, 1), () => S([[1, 1, 1, 2, 2, 2], [3, 3, 3, 4, 4, 4]])).add(an, () => an(S([[1, 2], [3, 4]]), [1, 2], 0), () => S([[1, 2], [3, 4], [3, 4]])), s.add(rn, () => {
    let e = S([0, 1, 2]);
    return [rn(e, 2), rn(e, [2, 2]), rn(e, [2, 1, 2])];
  }, () => [S([0, 1, 2, 0, 1, 2]), S([[0, 1, 2, 0, 1, 2], [0, 1, 2, 0, 1, 2]]), S([[[0, 1, 2, 0, 1, 2]], [[0, 1, 2, 0, 1, 2]]])]).add(rn, () => {
    let e = S([[1, 2], [3, 4]]);
    return [rn(e, 2), rn(e, [2, 1])];
  }, () => [S([[1, 2, 1, 2], [3, 4, 3, 4]]), S([[1, 2], [3, 4], [1, 2], [3, 4]])]).add(rn, () => rn(S([1, 2, 3, 4]), [4, 1]), () => S([[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]])), s.add(nn, () => nn(H(4).reshape(2, 2)), () => S([0, 3])).add(nn, () => nn(H(4).reshape(2, 2), 1), () => S([1])).add(nn, () => nn(H(8).reshape(2, 2, 2), 0, 0, 1), () => S([[0, 6], [1, 7]])).add(nn, () => nn(H(8).reshape(2, 2, 2).at(x(":"), x(":"), 0), 0, 0, 1), () => S([0, 6])).add(nn, () => nn(H(8).reshape(2, 2, 2).at(x(":"), x(":"), 1), 0, 0, 1), () => S([1, 7])).add(nn, () => {
    let e = H(8);
    return nn(e.reshape(2, 2, 2), 0, 0, 1).set(-1), e;
  }, () => S([-1, -1, 2, 3, 4, 5, -1, -1])), s.add(ln, () => ln(H(9).reshape([3, 3])), () => S([0, 4, 8])).add(ln, () => ln(H(9).reshape([3, 3]), 1), () => S([1, 5])).add(ln, () => ln(H(9).reshape([3, 3]), -1), () => S([3, 7])).add(ln, () => ln(ln(H(9).reshape([3, 3]))), () => S([[0, 0, 0], [0, 4, 0], [0, 0, 8]])), s.add(sn, () => {
    let e = H(8).reshape([2, 2, 2]);
    return [e, sn(e, 0), sn(e, 1), sn(e), sn(e, [0, 2])];
  }, () => [S([[[0, 1], [2, 3]], [[4, 5], [6, 7]]]), S([[[4, 5], [6, 7]], [[0, 1], [2, 3]]]), S([[[2, 3], [0, 1]], [[6, 7], [4, 5]]]), S([[[7, 6], [5, 4]], [[3, 2], [1, 0]]]), S([[[5, 4], [7, 6]], [[1, 0], [3, 2]]])]).add(sn, () => {
    let e = jr.normal(0, 1, [3, 4, 5]);
    return _t(Qa(sn(e, 2), e.at(x(":"), x(":"), x("::-1"), x("..."))));
  }, () => !0), s.add(dn, () => dn(ln([1, 2, 3])), () => S([[0, 0, 1], [0, 2, 0], [3, 0, 0]])).add(dn, () => {
    let e = jr.normal(0, 1, [2, 4, 5]);
    return _t(Qa(dn(e), e.at(x(":"), x("::-1"), x("..."))));
  }, () => !0), s.add(on, () => on(ln([1, 2, 3])), () => S([[0, 0, 3], [0, 2, 0], [1, 0, 0]])).add(on, () => {
    let e = jr.normal(0, 1, [2, 3, 5]);
    return _t(Qa(on(e), e.at(x("::-1"), x("..."))));
  }, () => !0).add(on, () => on([1, 2]), () => S([2, 1]));
  let un = e => "number" == typeof e || e instanceof m ? e : x(e);
  const hn = Symbol("tupleType");
  function fn(...e) {
    let t = e.map(un);
    return t[hn] = !0, t;
  }
  function pn(...e) {
    return 1 == e.length ? un(e[0]) : fn(...e);
  }
  function cn(e, t, a, r = "raise") {
    "number" == typeof t && (t = [t]), "number" == typeof a && (a = [a]), t = function (e, t, a, r) {
      if ("raise" == t) return function (e, t, a) {
        let r = Array(e.length);
        for (let a = 0; a < e.length; a++) {
          let n = e[a];
          if (n < 0 && (n += t), n < 0 || n >= t) throw `index ${e[a]} is out of bounds for axis 0 with size ${t}`;
          r[a] = n;
        }
        return r;
      }(e, a);
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
    }(t, r, e.size);
    let n = e.flat,
      l = a.length;
    for (let e = 0; e < t.length; e++) n.set(t[e], a[e % l]);
  }
  function mn(e, t) {
    "number" == typeof t && (t = [t]), e = Ne(e);
    let a = 1;
    for (let e of t) {
      if (e < 0) throw "all elements of 'new_shape' must be non-negative";
      a *= e;
    }
    if (0 == e.size || 0 == a) return ee(t);
    let r = Math.ceil(a / e.size);
    return G(e = De(Array(r).fill(e)).at(x(0, a)), t);
  }
  function yn(e, t) {
    let a = 0,
      r = e.length - 1;
    for (; a <= r;) {
      let n = a + r >> 1;
      e[n] < t ? a = n + 1 : r = n - 1;
    }
    return a;
  }
  function gn(e, t) {
    let a = 0,
      r = e.length - 1;
    for (; a <= r;) {
      let n = a + r >> 1;
      e[n] > t ? r = n - 1 : a = n + 1;
    }
    return a;
  }
  function wn(e, t, a = "left") {
    e instanceof v && (e = e.toarray());
    let r = V(t = R(t)),
      n = 0,
      l = "left" == a ? yn : gn;
    for (let a of t.flat) r.data[n++] = l(e, a);
    return r;
  }
  s.add(pn, () => H(8).reshape(2, 2, -1).get(pn(0, [0, -1], "::-1")), () => S([[1, 0]])), s.add(cn, () => {
    let e = H(5);
    return cn(e, [0, 2], [-44, -55]), e;
  }, () => S([-44, 1, -55, 3, 4])).add(cn, () => {
    let e = H(5);
    return cn(e, 22, -5, "clip"), e;
  }, () => S([0, 1, 2, 3, -5])), s.add(mn, () => mn(S([[0, 1], [2, 3]]), [2, 3]), () => S([[0, 1, 2], [3, 0, 1]])).add(mn, () => mn(S([[0, 1], [2, 3]]), [1, 4]), () => S([[0, 1, 2, 3]])).add(mn, () => mn(S([[0, 1], [2, 3]]), [2, 4]), () => S([[0, 1, 2, 3], [0, 1, 2, 3]])), s.add(wn, () => wn([1, 2, 3, 4, 5], 3), () => 2).add(wn, () => wn([1, 2, 3, 4, 5], 3, "right"), () => 3).add(wn, () => wn([1, 2, 3, 4, 5], [-10, 10, 2, 3]), () => S([0, 5, 1, 2]));
  class bn {
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
  function xn(e, t, a = null) {
    if (e = R(e), null == a) return xn(e.ravel(), t, 0).reshape(e.shape);
    {
      let r = ue(t, a = ge(a, e.ndim, !0));
      if (r.ndim > 1) throw new Error("'shift' and 'axis' should be scalars or 1D sequences");
      let n = Array(e.ndim).fill(0);
      for (let [e, t] of r) n[t] += e;
      let l = Array(e.ndim).fill([[x(null), x(null)]]);
      for (let [t, a] of n.entries()) a %= e.shape[t] || 1, a && (l[t] = [[x(null, -a), x(a, null)], [x(-a, null), x(null, a)]]);
      let s = V(e);
      for (let t of new bn(l)) {
        let a = t.map(e => e[0]),
          r = t.map(e => e[1]);
        s.set(r, e.get(a));
      }
      return s;
    }
  }
  function _n(e, t, a = null) {
    e = R(e);
    let {
        shape: r,
        strides: n,
        offset: l,
        data: s
      } = e,
      i = [];
    for (let e of Kn(r, n, l)) i.push(t.call(a, s[e], e, s));
    return new v(r, i);
  }
  function zn(e, t, a = null) {
    e = R(e), t = R(t), vn(e.ndim > 0, "x1 does not have enough dimensions"), vn(t.ndim > 0, "x2 does not have enough dimensions");
    let r = 1 == e.ndim,
      n = 1 == t.ndim,
      l = r || n;
    if (r && (e = e.at(null, x(":"))), n && (t = t.at(x(":"), null)), 2 == e.ndim && 2 == t.ndim) {
      vn(e.shape[1] == t.shape[0], "input shape mismatch");
      let s = [e.shape[0], t.shape[1]],
        i = l ? s.slice(r ? 1 : 0, n ? -1 : void 0) : s;
      null == a ? a = K(i) : vn(Fe(i, a.shape), "out shape mismatch");
      let d = l ? a.reshape(s) : a,
        o = t.T;
      for (let [t, a] of P(s)) d.set([t, a], An(e.at(t), o.at(a)));
      return a;
    }
    let s = J(e.shape.slice(0, -2), t.shape.slice(0, -2));
    e = T(e, [...s, ...e.shape.slice(-2)]), t = T(t, [...s, ...t.shape.slice(-2)]), vn(e.shape.at(-1) == t.shape.at(-2), "input shape mismatch");
    let i = e.shape.at(-2),
      d = t.shape.at(-1),
      o = [...s, i, d];
    null == a ? a = K(o) : vn(Fe(o, a.shape), "out shape mismatch");
    for (let r of P(s)) zn(e.get(r), t.get(r), a.get(r));
    return a;
  }
  function vn(e, t) {
    if (!e) throw new Error(t);
  }
  function An(e, t, a = null) {
    if (e = R(e), t = R(t), 1 == e.ndim && 1 == t.ndim) return sa(ct(e, t), 0, a);
    if (2 == e.ndim && 2 == t.ndim) return zn(e, t, a);
    if (0 == e.ndim || 0 == t.ndim) return ct(e, t, a);
    if (1 == t.ndim) {
      vn(e.shape.at(-1) == t.shape[0], `shapes ${e.shape} and ${t.shape} not aligned`);
      let r = e.shape.slice(0, -1);
      null == a ? a = K(r) : vn(Fe(r, a.shape), "out shape mismatch");
      for (let n of P(r)) An(e.get(n), t, a.at(x("..."), ...n));
      return a;
    }
  }
  function $n(e, t = null) {
    t = null != t ? Object.assign(Object.create(Nn), t) : Nn;
    let {
      separator: a,
      prefix: r
    } = t;
    return 0 == e.size ? "[]" : function (e, t = Nn, a = " ", r = "") {
      let n,
        l = R(e);
      0 == e.ndim && (e = l), e.size > t.threshold ? (n = "...", l = Sn(l, t.edgeitems)) : n = "";
      let s = function (e, t) {
          let a = function (e, t) {
              let a = {
                  int: () => new qn(e).__call__,
                  float: () => new On(e, t.precision).__call__,
                  object: () => Fn
                },
                {
                  formatter: r
                } = t;
              if (null != r) for (let e of Object.keys(r)) a[e] = Tn(r[e]);
              return a;
            }(e, t),
            r = e.flat.copy().data,
            n = q(r),
            l = c(n) == c("number") ? function (e) {
              for (let t of e) if (!Number.isInteger(t)) return !1;
              return !0;
            }(r) ? "int" : "float" : "object";
          return a[l](t);
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
              y = e.shape[u],
              g = s && 2 * l < y;
            g ? (c = l, m = l) : (c = 0, m = y);
            let w = "";
            if (1 === h) {
              let e,
                t = n.trimEnd().length;
              e = i <= 113 ? o - t : o - Math.max(t, "]".length);
              let l = r;
              for (let t = 0; t < c; t++) {
                let s = d([...a, t], p, f);
                [w, l] = Pn(w, l, s, e, r, i), l += n;
              }
              g && ([w, l] = Dn(w, l, s, e, r, i), l += i <= 113 ? ", " : n);
              for (let t = m; t > 1; t--) {
                let s = d([...a, -t], p, f);
                [w, l] = Pn(w, l, s, e, r, i), l += n;
              }
              i <= 113 && (e = o);
              let u = d([...a, -1], p, f);
              [w, l] = Pn(w, l, u, e, r, i), w += l;
            } else {
              w = "";
              let e = n.trimEnd() + "\n".repeat(h - 1);
              for (let t = 0; t < c; t++) w += r + d([...a, t], p, f) + e;
              g && (w += r + s, w += i <= 113 ? ", \n" : e);
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
    }(e, t, a, r);
  }
  function Mn(e, t = null, a = null) {
    return t ??= Nn.linewidth, a ??= Nn.precision, 0 == e.ndim ? `${e.item()}` : $n(e, {
      linewidth: t,
      precision: a
    });
  }
  function kn(e, t = null, a = null) {
    if (t ??= Nn.linewidth, a ??= Nn.precision, 0 == e.ndim) return `${e.item()}`;
    let r,
      n = e instanceof v ? "array" : typeof e,
      l = function (e) {
        return ["number", "boolean"].includes(e.name);
      }(e.dtype) && e.size > 0,
      s = n + "(",
      i = l ? ")" : ",";
    r = e.size > 0 || Fe(e.shape, [0]) ? $n(e, {
      linewidth: t,
      precision: a,
      separator: ", ",
      prefix: s
    }) : `[], shape=[${e.shape.join(", ")}]`;
    let d = s + r + i;
    if (l) return d;
    let o = `dtype=${e.dtype.name})`,
      u = " ";
    return d.length - (d.lastIndexOf("\n") + 1) + o.length + 1 > t && (u = "\n" + " ".repeat((n + "(").length)), d + u + o;
  }
  s.add(xn, () => [...function* () {
    let e = H(10);
    yield xn(e, 2), yield xn(e, -2);
    let t = e.reshape([2, 5]);
    yield t, yield xn(t, 1), yield xn(t, -1), yield xn(t, 1, 0), yield xn(t, -1, 0), yield xn(t, 1, 1), yield xn(t, -1, 1), yield xn(t, [1, 1], [1, 0]), yield xn(t, [2, 1], [1, 0]);
  }()], () => [...function* () {
    yield S([8, 9, 0, 1, 2, 3, 4, 5, 6, 7]), yield S([2, 3, 4, 5, 6, 7, 8, 9, 0, 1]), yield S([[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]]), yield S([[9, 0, 1, 2, 3], [4, 5, 6, 7, 8]]), yield S([[1, 2, 3, 4, 5], [6, 7, 8, 9, 0]]), yield S([[5, 6, 7, 8, 9], [0, 1, 2, 3, 4]]), yield S([[5, 6, 7, 8, 9], [0, 1, 2, 3, 4]]), yield S([[4, 0, 1, 2, 3], [9, 5, 6, 7, 8]]), yield S([[1, 2, 3, 4, 0], [6, 7, 8, 9, 5]]), yield S([[9, 5, 6, 7, 8], [4, 0, 1, 2, 3]]), yield S([[8, 9, 5, 6, 7], [3, 4, 0, 1, 2]]);
  }()]), s.add(_n, () => _n(H(10).reshape(-1, 2), (e, t) => e + t), () => S([[0, 2], [4, 6], [8, 10], [12, 14], [16, 18]])), s.add(zn, () => zn(S([[1, 0], [0, 1]]), S([[4, 1], [2, 2]])), () => S([[4, 1], [2, 2]])).add(zn, () => {
    let e = S([[1, 0], [0, 1]]),
      t = S([1, 2]);
    return [zn(e, t), zn(t, e)];
  }, () => [S([1, 2]), S([1, 2])]).add(zn, () => zn(H(16).reshape([2, 2, 4]), H(16).reshape([2, 4, 2])), () => S([[[28, 34], [76, 98]], [[428, 466], [604, 658]]])), s.add(An, () => An(3, 4), () => 12).add(An, () => An([[1, 2], [3, 4]], [4, 1]), () => S([6, 16])).add(An, () => An([[1, 0], [0, 1]], [[4, 1], [2, 2]]), () => S([[4, 1], [2, 2]]));
  let Nn = {
    edgeitems: 3,
    threshold: 1e3,
    linewidth: 75,
    precision: void 0,
    formatter: null,
    separator: " ",
    prefix: ""
  };
  function Sn(e, t, a = []) {
    let r = a.length;
    if (r == e.ndim) return e.get(a);
    if (e.shape[r] > 2 * t) {
      let n = a.concat(fn([, t])),
        l = a.concat(fn([-t]));
      return De([Sn(e, t, n), Sn(e, t, l)], r);
    }
    return Sn(e, t, a.concat(fn(":")));
  }
  class jn {
    get __call__() {
      return this.call.bind(null, this);
    }
  }
  class qn extends jn {
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
  function In(e, t) {
    return e.toExponential(t);
  }
  function En(e, t) {
    return null != t ? e.toFixed(t) : String(e);
  }
  class On extends jn {
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
      if (this.exp_format) for (let a of e.flat) r = Math.max(r, In(a, t).length);else for (let a of e.flat) r = Math.max(r, En(a, t).length);
      this.padLeft = r;
    }
    call({
      padLeft: e,
      exp_format: t,
      precision: a
    } = this, r) {
      let n = t ? In(r, a) : En(r, a);
      return " ".repeat(e - n.length) + n;
    }
  }
  function Fn(e) {
    return "string" == typeof e ? `'${e}'` : `${e}`;
  }
  let Tn = e => () => e;
  function Dn(e, t, a, r, n, l) {
    let s = t.length + a.length > r;
    return l > 113 && t.length <= n.length && (s = !1), s && (e += t.trimEnd() + "\n", t = n), [e, t += a];
  }
  function Pn(e, t, a, r, n, l) {
    let s = a.split(/\r?\n/);
    if (1 === s.length || l <= 113) return Dn(e, t, a, r, n, l);
    let i,
      d = Math.max(...s.map(e => e.length));
    t.length + d > r && t.length > n.length ? (e += t.trimEnd() + "\n", t = n + s[0], i = n) : (i = " ".repeat(t.length), t += s[0]);
    for (let a = 1; a < s.length; a++) e += t.trimEnd() + "\n", t = i + s[a];
    let o = d - s.at(-1).length;
    return [e, t += " ".repeat(o)];
  }
  s.add($n, () => $n(H(2520).reshape(3, 4, 210)), () => "[[[   0    1    2 ...  207  208  209]\n  [ 210  211  212 ...  417  418  419]\n  [ 420  421  422 ...  627  628  629]\n  [ 630  631  632 ...  837  838  839]]\n\n [[ 840  841  842 ... 1047 1048 1049]\n  [1050 1051 1052 ... 1257 1258 1259]\n  [1260 1261 1262 ... 1467 1468 1469]\n  [1470 1471 1472 ... 1677 1678 1679]]\n\n [[1680 1681 1682 ... 1887 1888 1889]\n  [1890 1891 1892 ... 2097 2098 2099]\n  [2100 2101 2102 ... 2307 2308 2309]\n  [2310 2311 2312 ... 2517 2518 2519]]]").add($n, () => $n(S([.1, 100, 50, -9e3])), () => "[ 1e-1  1e+2  5e+1 -9e+3]").add($n, () => $n(S([1.1, 100.2, 50.6])), () => "[  1.1 100.2  50.6]"), s.add(kn, () => kn(S([1.1, 100.2, 50.6])), () => "array([  1.1, 100.2,  50.6])").add(kn, () => "" + S([1.1, 100.2, 50.6]), () => "array([  1.1, 100.2,  50.6])");
  class Rn {
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
          dim_strides: l,
          size: s
        } = this,
        i = e,
        d = n - 1,
        o = !0;
      for (; d >= 0;) {
        let n = a[d];
        if (1 == n) d--;else if (n == t[d]) e -= l[d], t[d--] = 0, o = !0;else {
          if (!o) break;
          e += r[d], t[d] += 1, o = !1;
        }
      }
      return this.offset = e, this.done = ++this.index >= s, {
        value: i,
        done: !1
      };
    }
  }
  function Kn(e, t, a = 0) {
    return new Rn(e, t, a);
  }
  s.add(Kn, () => {
    let e = H(100);
    e = e.at(x(20, -20)).reshape([2, 1, -1, 2]).at(x("..."), x("::-1"));
    let t = [];
    for (let a of Kn(e.shape, e.strides)) t.push(e.data[e.offset + a]);
    return t;
  }, () => [21, 20, 23, 22, 25, 24, 27, 26, 29, 28, 31, 30, 33, 32, 35, 34, 37, 36, 39, 38, 41, 40, 43, 42, 45, 44, 47, 46, 49, 48, 51, 50, 53, 52, 55, 54, 57, 56, 59, 58, 61, 60, 63, 62, 65, 64, 67, 66, 69, 68, 71, 70, 73, 72, 75, 74, 77, 76, 79, 78]);
})();
var l = n.zvA,
  s = n.bFe,
  i = n.iIB,
  d = n.RO$,
  o = n.zhN,
  u = n._bh,
  h = n.OVY,
  f = n.mXy,
  p = n.xsH,
  c = n.p2w,
  m = n.SRu,
  y = n.NYz,
  g = n.Buv,
  w = n.E4R,
  b = n.tw1,
  x = n.Yur,
  _ = n.RPv,
  z = n.JWo,
  v = n.WnP,
  A = n.AGi,
  $ = n.IHx,
  M = n.$6P,
  k = n.Lb7,
  N = n.t5D,
  S = n.YjB,
  j = n.eTT,
  q = n.FKo,
  I = n.Hn6,
  E = n.PD,
  O = n.oSO,
  F = n.Xsc,
  T = n.gJP,
  D = n.$jo,
  P = n.s6s,
  R = n.S1h,
  K = n.Q8B,
  V = n.IXX,
  Y = n.FJh,
  G = n.YSU,
  X = n.Vjr,
  U = n.xok,
  W = n.oix,
  J = n.Yqf,
  H = n.k2d,
  C = n.FAR,
  B = n.hu8,
  L = n.V2R,
  Q = n.dcL,
  Z = n.ujY,
  ee = n.Y8W,
  te = n.pHG,
  ae = n.yE8,
  re = n.W4K,
  ne = n.GBu,
  le = n.eYE,
  se = n.qgf,
  ie = n.fMc,
  de = n.xAU,
  oe = n.M2z,
  ue = n.eKn,
  he = n.mDi,
  fe = n.q$q,
  pe = n.oqW,
  ce = n.T8D,
  me = n.nNb,
  ye = n.mVq,
  ge = n.y39,
  we = n.RrX,
  be = n.JGK,
  xe = n.JGz,
  _e = n.zOr,
  ze = n.mCk,
  ve = n.f9Y,
  Ae = n.zNN,
  $e = n.kCc,
  Me = n.$Gn,
  ke = n.zbp,
  Ne = n.VlM,
  Se = n.RWx,
  je = n.Ka3,
  qe = n.on5,
  Ie = n.Hgg,
  Ee = n.csF,
  Oe = n.AKD,
  Fe = n.wIX,
  Te = n.N5d,
  De = n.cTT,
  Pe = n.sk1,
  Re = n.e,
  Ke = n.D5q,
  Ve = n.cSb,
  Ye = n.sKD,
  Ge = n.DgJ,
  Xe = n.Qqt,
  Ue = n.uuq,
  We = n.aD1,
  Je = n.t$B,
  He = n.KlT,
  Ce = n.iyy,
  Be = n.zG0,
  Le = n.KTV,
  Qe = n.RRI,
  Ze = n.HC4,
  et = n.Ah7,
  tt = n.GWj,
  at = n.Sc8,
  rt = n.Ek0,
  nt = n.v_D,
  lt = n.KSO,
  st = n.rpZ,
  it = n.NxV,
  dt = n.thl,
  ot = n.rn5,
  ut = n.FLS,
  ht = n.pjt,
  ft = n.zGm,
  pt = n.smV,
  ct = n.Hsf,
  mt = n.DIH,
  yt = n._mT,
  gt = n.yRu,
  wt = n.HqJ,
  bt = n.S8h,
  xt = n.CGm,
  _t = n.gY6,
  zt = n.Zw8,
  vt = n.U_R,
  At = n.f0i,
  $t = n.fXA,
  Mt = n.I7t,
  kt = n.igg,
  Nt = n.ftH,
  St = n.KvH,
  jt = n.IW_,
  qt = n.uqG,
  It = n.vy,
  Et = n.Ai1,
  Ot = n.d9m,
  Ft = n.bzW,
  Tt = n.SX3,
  Dt = n.cM7,
  Pt = n.mvw,
  Rt = n.Krr,
  Kt = n.k3Q,
  Vt = n.YKj,
  Yt = n.buk,
  Gt = n.UID,
  Xt = n.Jxs,
  Ut = n.gWQ,
  Wt = n.J69,
  Jt = n.LTh,
  Ht = n.wQq,
  Ct = n.U8E,
  Bt = n.JpY,
  Lt = n.qnd,
  Qt = n.dQs,
  Zt = n.$7d,
  ea = n.RCU,
  ta = n.MIL,
  aa = n.obs,
  ra = n.$V5,
  na = n.p3s,
  la = n.x2A,
  sa = n.fyW,
  ia = n.MHD,
  da = n.pdy,
  oa = n.MaX,
  ua = n.S4p,
  ha = n.INJ,
  fa = n.lf5,
  pa = n.ffp,
  ca = n.AqN,
  ma = n.qDh,
  ya = n.iUs,
  ga = n.r6Y,
  wa = n.NCv,
  ba = n.pi,
  xa = n.eiS,
  _a = n.i1C,
  za = n.qux,
  va = n.WVs,
  Aa = n.OZM,
  $a = n.gzd,
  Ma = n.BVy,
  ka = n.uRy,
  Na = n.TN_,
  Sa = n.MXc,
  ja = n.di9,
  qa = n.n3V,
  Ia = n.nTq,
  Ea = n.M25,
  Oa = n.spK,
  Fa = n.rx1,
  Ta = n.XLQ,
  Da = n.SIr,
  Pa = n.wyi,
  Ra = n.XC3,
  Ka = n.SlP,
  Va = n.aSG,
  Ya = n.s_,
  Ga = n.UPJ,
  Xa = n.FvN,
  Ua = n.flC,
  Wa = n.mCt,
  Ja = n.FPS,
  Ha = n.Xxe,
  Ca = n.UBE,
  Ba = n.O$l,
  La = n.R_K,
  Qa = n.tPi,
  Za = n.DYV,
  er = n.Vl2,
  tr = n._b3,
  ar = n.h62,
  rr = n.L9e,
  nr = n.knu,
  lr = n.qoR,
  sr = n.$XF,
  ir = n.Smz,
  dr = n.ZU4,
  or = n.qnb,
  ur = n.ORZ,
  hr = n.AEp,
  fr = n.K1B,
  pr = n.Gg6,
  cr = n.uAr,
  mr = n.BpP,
  yr = n.p4s,
  gr = n.ebm,
  wr = n.$I7,
  br = n.RFc,
  xr = n.DDI,
  _r = n.vwf,
  zr = n.bLT,
  vr = n.Wg4,
  Ar = n.CAK,
  $r = n.nFP,
  Mr = n.Ud9,
  kr = n.arb,
  Nr = n.lls,
  Sr = n.T1S;
exports.zeros_like = Sr;
exports.zeros = Nr;
exports.where = kr;
exports.vstack = Mr;
exports.vsplit = $r;
exports.variance = Ar;
exports.unwrap = vr;
exports.unpackbits = zr;
exports.tuple_ = _r;
exports.tupleType = xr;
exports.trunc = br;
exports.true_divide = wr;
exports.trapz = gr;
exports.transpose = yr;
exports.timeit2 = mr;
exports.timeit = cr;
exports.tile = pr;
exports.tester = fr;
exports.tanh = hr;
exports.tan = ur;
exports.take = or;
exports.swapaxes = dr;
exports.sum = ir;
exports.subtract = sr;
exports.std = lr;
exports.stack = nr;
exports.squeeze = rr;
exports.square = ar;
exports.sqrt = tr;
exports.split = er;
exports.sort = Za;
exports.slice = Qa;
exports.sinh = La;
exports.sin = Ba;
exports.signbit = Ca;
exports.sign = Ha;
exports.shape_ = Ja;
exports.shape = Wa;
exports.shallow_array_equal = Ua;
exports.searchsorted = Xa;
exports.sample = Ga;
exports.s_ = Ya;
exports.row_stack = Va;
exports.roll = Ka;
exports.rint = Ra;
exports.right_shift = Pa;
exports.resize = Da;
exports.reshape = Ta;
exports.repeat = Fa;
exports.remainder = Oa;
exports.reciprocal = Ea;
exports.ravel = Ia;
exports.ranf = qa;
exports.random_sample = ja;
exports.random = Sa;
exports.rand = Na;
exports.radians = ka;
exports.rad2deg = Ma;
exports.put = $a;
exports.ptp = Aa;
exports.prod = va;
exports.power = za;
exports.positive = _a;
exports.pick = xa;
exports.pi = ba;
exports.packbits = wa;
exports.ones_like = ga;
exports.ones = ya;
exports.ogrid = ma;
exports.not_equal = ca;
exports.normalize_axis_tuple = pa;
exports.normalize_axis_mask = fa;
exports.normalize_axis_index = ha;
exports.normalize_axis = ua;
exports.nonzero = oa;
exports.negative = da;
exports.ndoffset = ia;
exports.nditer = sa;
exports.ndindex = la;
exports.ndim = na;
exports.ndenumerate = ra;
exports.nansum = aa;
exports.nanprod = ta;
exports.nancumsum = ea;
exports.nancumprod = Zt;
exports.nan_to_num = Qt;
exports.nan = Lt;
exports.multiply = Bt;
exports.moveaxis = Ct;
exports.mod = Ht;
exports.minimum = Jt;
exports.mean = Wt;
exports.maximum = Ut;
exports.matmul = Xt;
exports.map = Gt;
exports.logaddexp2 = Yt;
exports.logaddexp = Vt;
exports.log2 = Kt;
exports.log1p = Rt;
exports.log10 = Pt;
exports.log = Dt;
exports.linspace = Tt;
exports.less_equal = Ft;
exports.less = Ot;
exports.left_shift = Et;
exports.ldexp = It;
exports.lcm = qt;
exports.ix_ = jt;
exports.isscalar = St;
exports.isposinf = Nt;
exports.isneginf = kt;
exports.isna = Mt;
exports.isinf = $t;
exports.isfinite = At;
exports.invert = vt;
exports.interp = zt;
exports.inf = _t;
exports.indices = xt;
exports.index_exp = bt;
exports.in1d = wt;
exports.identity = gt;
exports.hypot = yt;
exports.hstack = mt;
exports.hsplit = ct;
exports.guessType = pt;
exports.greater_equal = ft;
exports.greater = ht;
exports.gradient = ut;
exports.get_size = ot;
exports.gcd = dt;
exports.full_like = it;
exports.full = st;
exports.fromiter = lt;
exports.fromfunction = nt;
exports.fmod = rt;
exports.floor_divide = at;
exports.floor = tt;
exports.flipud = et;
exports.fliplr = Ze;
exports.flip = Qe;
exports.flatnonzero = Le;
exports.fix = Be;
exports.eye = Ce;
exports.extract = He;
exports.expm1 = Je;
exports.expand_dims = We;
exports.exp2 = Ue;
exports.exp = Xe;
exports.equal = Ge;
exports.empty_like = Ye;
exports.empty = Ve;
exports.ediff1d = Ke;
exports.e = Re;
exports.dtype_ = Pe;
exports.dtype = De;
exports.dstack = Te;
exports.dsplit = Fe;
exports.dot = Oe;
exports.divide = Ee;
exports.diff = Ie;
exports.diagonal = qe;
exports.diag = je;
exports.degrees = Se;
exports.deg2rad = Ne;
exports.cumsum = ke;
exports.cumprod = Me;
exports.cross = $e;
exports.count_nonzero = Ae;
exports.cosh = ve;
exports.cos = ze;
exports.copyto = _e;
exports.copysign = xe;
exports.copy = be;
exports.convolve = we;
exports.contiguous = ge;
exports.concatenate = ye;
exports.compress = me;
exports.column_stack = ce;
exports.clip = pe;
exports.choice = fe;
exports.ceil = he;
exports.cbrt = ue;
exports.broadcast_to = oe;
exports.broadcast_shapes = de;
exports.broadcast = ie;
exports.bitwise_xor = se;
exports.bitwise_or = le;
exports.bitwise_not = ne;
exports.bitwise_and = re;
exports.bincount = ae;
exports.axisfunc = te;
exports.average = ee;
exports.atleast_3d = Z;
exports.atleast_2d = Q;
exports.atleast_1d = L;
exports.assert = B;
exports.ascontiguousarray = C;
exports.asarray = H;
exports.array_str = J;
exports.array_split = W;
exports.array_repr = U;
exports.array_equiv = X;
exports.array_equal = G;
exports.array2string = Y;
exports.array = V;
exports.around = K;
exports.argwhere = R;
exports.argsort = P;
exports.arctanh = D;
exports.arctan2 = T;
exports.arctan = F;
exports.arcsinh = O;
exports.arcsin = E;
exports.arccosh = I;
exports.arccos = q;
exports.arange = j;
exports.any = S;
exports.amin = N;
exports.amax = k;
exports.all = M;
exports.add = $;
exports.absolute = A;
exports.abs = v;
exports._wrap_reduce = z;
exports._wrap_map_unary = _;
exports._wrap_map_binary = x;
exports._wrap_map = b;
exports._wrap_accum_unary = w;
exports._shape = g;
exports._ndim = y;
exports.Tester = m;
exports.Slice = c;
exports.Product = p;
exports.Ndoffset = f;
exports.Nditer = h;
exports.NINF = u;
exports.NDArray = o;
exports.Generator = d;
exports.Flatiter = i;
exports.Dtype = s;
exports.Broadcast = l;