"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exp2 = exports.exp = exports.equal = exports.eq = exports.empty_like = exports.empty = exports.ediff1d = exports.e = exports.dtype_ = exports.dtype = exports.dstack = exports.dsplit = exports.dot = exports.divmod = exports.divide = exports.diff = exports.diagonal = exports.diag = exports.degrees = exports.deg2rad = exports.cumsum = exports.cumprod = exports.cross = exports.count_nonzero = exports.cosh = exports.cos = exports.copyto = exports.copysign = exports.copy = exports.convolve = exports.contiguous = exports.concatenate = exports.compress = exports.compile = exports.column_stack = exports.clip = exports.choice = exports.ceil = exports.cbrt = exports.broadcast_to = exports.broadcast_shapes = exports.broadcast_arrays = exports.broadcast = exports.bitwise_xor = exports.bitwise_or = exports.bitwise_not = exports.bitwise_and = exports.bincount = exports.average = exports.atleast_3d = exports.atleast_2d = exports.atleast_1d = exports.assert = exports.ascontiguousarray = exports.asarray = exports.array_str = exports.array_split = exports.array_repr = exports.array_equiv = exports.array_equal = exports.array2string = exports.array = exports.around = exports.argwhere = exports.argsort = exports.argmin = exports.argmax = exports.arctanh = exports.arctan2 = exports.arctan = exports.arcsinh = exports.arcsin = exports.arccosh = exports.arccos = exports.arange = exports.any = exports.and = exports.amin = exports.amax = exports.allclose = exports.all = exports.add = exports.accumulate_ = exports.absolute = exports.abs = exports._shape = exports._ndim = exports.Tester = exports.Slice = exports.Product = exports.NdoffsetIterator = exports.Nditer = exports.NdindexIterator = exports.NdenumerateIterator = exports.NINF = exports.NDArray = exports.Generator = exports.Flatiter = exports.Dtype = exports.Broadcast = void 0;
exports.ones = exports.ogrid = exports.not_equal = exports.not = exports.normalize_axis_tuple = exports.normalize_axis_index = exports.normalize_axis = exports.normalize_axes = exports.nonzero = exports.neq = exports.negative = exports.ndoffset = exports.nditer = exports.ndindex = exports.ndim = exports.ndenumerate = exports.nansum = exports.nanprod = exports.nancumsum = exports.nancumprod = exports.nan_to_num = exports.nan = exports.multiply = exports.moveaxis = exports.modf = exports.mod = exports.minimum = exports.mean = exports.maximum = exports.matmul = exports.map_ = exports.map2_ = exports.map = exports.lu_solve = exports.lu_factor_ = exports.lu_factor = exports.lu = exports.lte = exports.lt = exports.logical_xor = exports.logical_or = exports.logical_not = exports.logical_and = exports.logaddexp2 = exports.logaddexp = exports.log2 = exports.log1p = exports.log10 = exports.log = exports.linspace = exports.less_equal = exports.less = exports.left_shift = exports.ldexp = exports.lcm = exports.ix_ = exports.isscalar = exports.isposinf = exports.isneginf = exports.isnan = exports.isinf = exports.isfinite = exports.isclose = exports.invert = exports.interp = exports.inf = exports.indices = exports.index_exp = exports.in1d = exports.identity = exports.hypot = exports.hstack = exports.hsplit = exports.guessType = exports.gte = exports.gt = exports.greater_equal = exports.greater = exports.gradient = exports.get_strides = exports.get_size = exports.get = exports.gcd = exports.full_like = exports.full = exports.fromiter = exports.fromfunction = exports.fmod = exports.floor_divide = exports.floor = exports.float_power = exports.flipud = exports.fliplr = exports.flip = exports.flatnonzero = exports.fix = exports.eye = exports.extract = exports.expm1 = exports.expand_dims = void 0;
exports.zeros_like = exports.zeros = exports.xor = exports.wrapper_reduce = exports.wrapper_map2 = exports.wrapper_map = exports.wrapper_accumulate = exports.wrapper_ = exports.where = exports.vstack = exports.vsplit = exports.variance = exports.unwrap = exports.unravel_index = exports.unpackbits = exports.unique = exports.tuple_ = exports.tupleType = exports.trunc = exports.true_divide = exports.trapz = exports.transpose = exports.toArray = exports.timeit2 = exports.timeit = exports.tile = exports.tester = exports.tanh = exports.tan = exports.take = exports.swapaxes = exports.sum = exports.subtract = exports.std = exports.stack = exports.squeeze = exports.square = exports.sqrt = exports.split = exports.sort = exports.solve = exports.slice = exports.sinh = exports.sin = exports.signbit = exports.sign = exports.shape_ = exports.shape = exports.shallow_array_equal = exports.set = exports.searchsorted = exports.scatter = exports.sample = exports.s_ = exports.row_stack = exports.roll = exports.rint = exports.right_shift = exports.resize = exports.reshape = exports.repeat = exports.remainder = exports.reduce_ = exports.reduce = exports.reciprocal = exports.ravel_multi_index = exports.ravel = exports.ranf = exports.random_sample = exports.random = exports.rand = exports.radians = exports.rad2deg = exports.put = exports.ptp = exports.prod = exports.power = exports.positive = exports.pick = exports.pi = exports.packbits = exports.or = exports.ones_like = void 0;
var e = {
    460: () => {}
  },
  t = {};
function r(a) {
  var n = t[a];
  if (void 0 !== n) return n.exports;
  var s = t[a] = {
    exports: {}
  };
  return e[a](s, s.exports, r), s.exports;
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
    return je(t, a, !0);
  }
  function t(e) {
    return e instanceof z && (e = e.valueOf()), e;
  }
  r.d(n, {
    zvA: () => he,
    bFe: () => h,
    iIB: () => Vn,
    RO$: () => cr,
    zhN: () => z,
    _bh: () => _t,
    u_0: () => Gn,
    $45: () => P,
    OVY: () => Se,
    dsS: () => Rn,
    xsH: () => nn,
    p2w: () => y,
    SRu: () => s,
    NYz: () => me,
    Buv: () => D,
    WnP: () => _a,
    AGi: () => $a,
    kbY: () => gn,
    IHx: () => Ke,
    $6P: () => ut,
    MWz: () => rs,
    Lb7: () => ya,
    t5D: () => ga,
    xDy: () => rt,
    YjB: () => ht,
    eTT: () => C,
    FKo: () => Mt,
    Hn6: () => Ut,
    PD: () => vt,
    oSO: () => Kt,
    Xsc: () => Nt,
    gJP: () => Et,
    $jo: () => Pt,
    Eb7: () => ps,
    _6L: () => cs,
    s6s: () => Ca,
    S1h: () => $e,
    Q8B: () => Rt,
    IXX: () => E,
    FJh: () => Nn,
    YSU: () => je,
    Vjr: () => Fe,
    xok: () => En,
    oix: () => Ir,
    Yqf: () => kn,
    k2d: () => R,
    FAR: () => re,
    hu8: () => vn,
    V2R: () => ie,
    dcL: () => de,
    ujY: () => oe,
    Y8W: () => wr,
    yE8: () => Ar,
    W4K: () => va,
    GBu: () => ka,
    eYE: () => Ma,
    qgf: () => Na,
    fMc: () => ue,
    Nhz: () => O,
    xAU: () => X,
    M2z: () => I,
    eKn: () => wa,
    mDi: () => Gt,
    q$q: () => dr,
    oqW: () => Xa,
    T8D: () => Dr,
    MY2: () => Xn,
    nNb: () => Ae,
    mVq: () => Ie,
    y39: () => ne,
    RrX: () => Ha,
    JGK: () => be,
    JGz: () => oa,
    zOr: () => K,
    mCk: () => At,
    f9Y: () => It,
    zNN: () => Ne,
    kCc: () => Ga,
    $Gn: () => Cn,
    zbp: () => Bn,
    VlM: () => Dt,
    RWx: () => St,
    Ka3: () => Lr,
    on5: () => Vr,
    Hgg: () => Jt,
    csF: () => Ve,
    qqz: () => tt,
    AKD: () => Mn,
    wIX: () => Kr,
    N5d: () => Fr,
    cTT: () => p,
    sk1: () => c,
    e: () => gt,
    D5q: () => Qt,
    cSb: () => Y,
    sKD: () => V,
    eq: () => Ka,
    DgJ: () => ja,
    Qqt: () => Zt,
    uuq: () => ta,
    aD1: () => ye,
    t$B: () => ea,
    KlT: () => ve,
    iyy: () => fe,
    zG0: () => Vt,
    KTV: () => Me,
    RRI: () => Gr,
    HC4: () => Wr,
    Ah7: () => Hr,
    Z_5: () => Xe,
    GWj: () => Lt,
    Sc8: () => He,
    Ek0: () => Ce,
    v_D: () => we,
    KSO: () => xe,
    rpZ: () => W,
    NxV: () => H,
    thl: () => pa,
    U2M: () => hs,
    rn5: () => M,
    rqY: () => v,
    FLS: () => La,
    pjt: () => Ia,
    zGm: () => Oa,
    gt: () => Ya,
    egL: () => Va,
    smV: () => q,
    Hsf: () => Ur,
    DIH: () => jr,
    _mT: () => kt,
    yRu: () => pe,
    HqJ: () => Mr,
    S8h: () => Br,
    CGm: () => zr,
    gY6: () => xt,
    Zw8: () => Ja,
    U_R: () => Ea,
    FWh: () => ts,
    f0i: () => ft,
    fXA: () => pt,
    Uf3: () => ct,
    igg: () => mt,
    ftH: () => yt,
    KvH: () => $,
    IW_: () => vr,
    uqG: () => fa,
    vy: () => ua,
    Ai1: () => Sa,
    d9m: () => Da,
    bzW: () => Ta,
    SX3: () => B,
    cM7: () => aa,
    mvw: () => ra,
    Krr: () => sa,
    k3Q: () => na,
    YKj: () => la,
    buk: () => ia,
    EbT: () => at,
    FLe: () => lt,
    P_4: () => nt,
    ZpU: () => dt,
    lt: () => Pa,
    GaM: () => Ra,
    lu: () => ss,
    baN: () => ls,
    TGE: () => is,
    irF: () => ds,
    UID: () => sn,
    EeK: () => mn,
    Nai: () => cn,
    Jxs: () => zn,
    gWQ: () => ca,
    J69: () => xr,
    LTh: () => ma,
    wQq: () => Be,
    RHK: () => Je,
    U8E: () => Oe,
    JpY: () => Ye,
    qnd: () => bt,
    dQs: () => za,
    $7d: () => Qn,
    RCU: () => es,
    MIL: () => Ct,
    obs: () => Bt,
    $V5: () => Ln,
    p3s: () => ce,
    x2A: () => U,
    fyW: () => qe,
    MHD: () => Yn,
    pdy: () => Re,
    uH1: () => Ua,
    MaX: () => _e,
    Chc: () => $n,
    S4p: () => ke,
    INJ: () => An,
    ffp: () => Ee,
    ffD: () => it,
    AqN: () => Fa,
    qDh: () => gr,
    iUs: () => Z,
    r6Y: () => ee,
    or: () => st,
    NCv: () => Nr,
    pi: () => wt,
    eiS: () => ir,
    i1C: () => Pe,
    qux: () => Le,
    WVs: () => Ht,
    OZM: () => br,
    gzd: () => Qr,
    BVy: () => Ft,
    uRy: () => qt,
    TN_: () => fr,
    MXc: () => mr,
    di9: () => or,
    n3V: () => ur,
    nTq: () => ze,
    Pyd: () => Hn,
    M25: () => Ue,
    u4g: () => ln,
    f0H: () => yn,
    spK: () => et,
    rx1: () => Rr,
    XLQ: () => G,
    SIr: () => Zr,
    wyi: () => qa,
    XC3: () => Yt,
    SlP: () => rn,
    aSG: () => Tr,
    s_: () => Jr,
    UPJ: () => hr,
    U6i: () => os,
    FvN: () => en,
    t8m: () => fs,
    flC: () => De,
    mCt: () => F,
    FPS: () => T,
    Xxe: () => Aa,
    UBE: () => da,
    O$l: () => $t,
    R_K: () => Tt,
    tPi: () => _,
    F1c: () => ns,
    DYV: () => Ba,
    Vl2: () => Or,
    _b3: () => ba,
    h62: () => xa,
    L9e: () => ge,
    knu: () => Sr,
    qoR: () => $r,
    $XF: () => Ge,
    Smz: () => Xt,
    ZU4: () => se,
    qnb: () => J,
    ORZ: () => zt,
    AEp: () => Ot,
    K1B: () => l,
    Gg6: () => Yr,
    uAr: () => d,
    BpP: () => i,
    qoF: () => A,
    p4s: () => le,
    ebm: () => Wa,
    $I7: () => We,
    RFc: () => Wt,
    DDI: () => Cr,
    vwf: () => L,
    Two: () => ms,
    bLT: () => kr,
    M56: () => Wn,
    Wg4: () => jt,
    CAK: () => _r,
    nFP: () => Pr,
    Ud9: () => qr,
    arb: () => yr,
    S_0: () => on,
    e1l: () => pn,
    $MA: () => un,
    DgC: () => hn,
    s6m: () => fn,
    dlQ: () => ot,
    lls: () => te,
    T1S: () => ae
  });
  class s {
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
        s = [];
      for (let e of a) {
        let a,
          l,
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
          l = d();
        } catch (e) {
          l = `[Error]: ${e}`, console.log(e), h = !0;
        }
        h || (u = o(a, l)), u && n++;
        let f = (u ? "[32m" : "[31m") + "%s[0m";
        s.push([f, `#${r}: ${u ? "passed" : "fail"}`, "\nTest=\n", t(a), "\nExpected=\n", t(l)]), r++;
      }
      let l = (n == a.length ? "[32m" : "[31m") + "%s[0m";
      if (console.log(l, `Testing ${e}: ${n} / ${a.length} cases passed`), n != a.length) for (let e of s) console.log(...e);
      return n == a.length;
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
  l.add(p, () => p("number"), () => p("number")).add(p, () => p(Number), () => p("number")).add(p, () => p(Int16Array), () => p("int16"));
  var m = r(460);
  class y {
    static newaxis = null;
    static ellipsis = new y();
    static colon = new y();
    constructor(e, t, a) {
      this.start = e, this.stop = t, this.step = a;
    }
    indices(e = null) {
      if (this == y.ellipsis) throw new Error("ellipsis does not support .indices()");
      let t,
        {
          start: a,
          stop: r,
          step: n
        } = this;
      if (n ??= 1, null == e) {
        if (a ??= 0, null == r) throw new Error("stop must be non-null");
      } else null == a ? a = n < 0 ? e - 1 : 0 : (a < 0 && (a += e), a < 0 && (a = n < 0 ? -1 : 0), a >= e && (a = n < 0 ? e - 1 : e)), null == r ? r = n < 0 ? -1 : e : (r < 0 && (r += e), r < 0 && (r = n < 0 ? -1 : 0), r >= e && (r = n < 0 ? e - 1 : e));
      return t = 0 == n || n < 0 && r >= a || n > 0 && a >= r ? 0 : n < 0 ? (r - a + 1) / n + 1 | 0 : (r - a - 1) / n + 1 | 0, new g(a, r, n, t);
    }
    toString() {
      if (this == y.ellipsis) return "...";
      if (this == y.colon) return ":";
      let {
          start: e,
          stop: t,
          step: a
        } = this,
        r = `${e ?? ""}:${t ?? ""}`;
      return null != a && (r += `:${a}`), r;
    }
  }
  y.prototype[m?.inspect?.custom] = function () {
    return this.toString();
  };
  class g {
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
  let b = Object.assign(Object.create(null), {
      None: y.newaxis,
      "...": y.ellipsis,
      ":": y.colon
    }),
    w = e => 0 == (e = e.trim()).length ? null : +e,
    x = (e, t) => {
      if (null != e && !Number.isInteger(e = +e)) throw new Error(`${t} must be either null or able to convert to integer`);
      return e;
    };
  function _(e = null, t = null, a = null) {
    if ("string" == typeof e) {
      if (Object.hasOwn(b, e)) return b[e];
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
    return null == e && null == t && null == a ? y.colon : (e = x(e, "start"), t = x(t, "stop"), a = x(a, "step"), new y(e, t, a));
  }
  function $(e) {
    switch (typeof e) {
      case "boolean":
      case "function":
      case "number":
      case "string":
        return !0;
    }
    return !1;
  }
  function A(e) {
    return e instanceof z ? e.array() : e;
  }
  _.newaxis = y.newaxis, _.ellipsis = y.ellipsis, _.colon = y.colon, l.add(_, () => _(0, 1, 2).toString(), () => "0:1:2").add(_, () => _(null, 1, 2).toString(), () => ":1:2").add(_, () => _(0, null, 2).toString(), () => "0::2").add(_, () => _(null, null, -1).toString(), () => "::-1").add(_, () => _(null, null, null).toString(), () => ":"), l.add("isscalar", () => $(3.1), () => !0).add("isscalar", () => $(E(3.1)), () => !1).add("isscalar", () => $([3.1]), () => !1).add("isscalar", () => $(!1), () => !0).add("isscalar", () => $("numpy"), () => !0).add("isscalar", () => $(Number()), () => !0);
  class z {
    constructor(e, t = null, a = null, r = null, n = null, s = 0, l = 1) {
      this.ndim = e.length, this.size = M(e), this.shape = e, this.data = t ?? Array(this.size), this.itemsize = l, this.strides = n ?? v(e, this.ndim, l), this.offset = s, this.dtype = c(a ?? t.constructor), this.base = r?.base ?? r;
    }
    get length() {
      let {
        ndim: e,
        shape: t
      } = this;
      if (0 != e) return t[0];
    }
    get flat() {
      return new Vn(this);
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
    toString() {
      return kn(this);
    }
    valueOf() {
      return 0 == this.ndim ? this.item() : En(this);
    }
    *[Symbol.iterator]() {
      for (let e = 0; e < this.shape[0]; e++) yield this.at(e);
    }
    as_strided(e = this.shape, t = this.strides, a = this.offset) {
      let {
        data: r,
        dtype: n,
        base: s,
        itemsize: l
      } = this;
      return new z(e, r, n, s ?? this, t, a, l);
    }
    keys() {
      let {
        shape: e,
        strides: t,
        offset: a
      } = this;
      return Yn(e, t, a);
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
        offset: s
      } = this;
      if (0 == e) return s;
      if (null == e) {
        if (1 != n) throw new Error("index cannot be empty if size != 1");
        return s;
      }
      let l = function (e, t, a, r) {
        if (Number.isInteger(e)) {
          let n = e;
          if (n < 0 && (n += r), n < 0 || n >= r) throw new Error(`index ${e} out of bound for size ${r}`);
          if (0 == a) return [0];
          let s = Array(a);
          for (let e = a - 1; e >= 0; e--) s[e] = n % t[e], n = n / t[e] | 0;
          return s;
        }
        if (e.length != a) throw new Error("incorrect number of indices for array");
        return e;
      }(e, t, r, n);
      for (let e = 0; e < l.length; e++) {
        let r = l[e],
          n = t[e];
        if (r < 0 && (r += n), r < 0 || r >= n) throw new Error(`index ${l[e]} out of bound for dimension ${n}`);
        s += r * a[e];
      }
      return s;
    }
    at(...e) {
      return this.get(e);
    }
    slice(e = null, t = null) {
      return this.at(_(e, t));
    }
    get(e, t = 0) {
      return N(e) ? k(this, e, t) : os(this, e, t).get();
    }
    set(e, t) {
      return 1 == arguments.length ? K(this, e) : N(e) ? K(k(this, e), t) : os(this, e).set(t), this;
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
      return new z(a, n, e);
    }
    array() {
      let {
        ndim: e
      } = this;
      if (0 == e) return this.data[this.offset];
      let t,
        {
          shape: a,
          size: r
        } = this;
      if (0 == r) {
        if (1 == e) return [];
        let r = 1,
          n = 0;
        for (let t; n < e && (t = a[n]); n++) r *= t;
        e = n, t = Array.from({
          length: r
        }, () => []);
      } else t = [...this.flat];
      for (let r = e - 1; r > 0; r--) {
        let e = a[r],
          n = [];
        for (let a = 0; a < t.length; a += e) n.push(t.slice(a, a + e));
        t = n;
      }
      return t;
    }
    toarray() {
      return this.array();
    }
    tolist() {
      return this.array();
    }
    reshape(...e) {
      return 1 == e.length && "object" == typeof e[0] && (e = e[0]), G(this, e);
    }
    add(e, t = null) {
      return Ke(this, e, t);
    }
    sub(e, t = null) {
      return Ge(this, e, t);
    }
    mul(e, t = null) {
      return Ye(this, e, t);
    }
    div(e, t = null) {
      return Ve(this, e, t);
    }
    mod(e, t = null) {
      return Be(this, e, t);
    }
    all(e = null, t = null, a = !1, r = !0, n = !0) {
      return ut(this, e, t, a, r, n);
    }
    any(e = null, t = null, a = !1, r = !1, n = !0) {
      return ht(this, e, t, a, r, n);
    }
    argmax(e = null, t = null, a = !1) {
      return ps(this, e, t, a);
    }
    argmin(e = null, t = null, a = !1) {
      return cs(this, e, t, a);
    }
    argpartition(e, t = -1, a = "introselect", r = null) {
      throw "not implemented";
    }
    argsort(e = -1, t = null) {
      return Ca(this, e, t);
    }
    byteswap() {
      throw "not implemented";
    }
    choose(e, t = null, a = "raise") {
      throw "not implemented";
    }
    clip(e, t, a = null) {
      return Xa(this, e, t, a);
    }
    compress(e, t = null, a = null) {
      return Ae(e, this, t, a);
    }
    conj() {
      throw "not implemented";
    }
    conjugate() {
      throw "not implemented";
    }
    copy() {
      return E(this);
    }
    cumprod(e, t) {
      return Cn(this, e, t);
    }
    cumsum(e, t) {
      return Bn(this, e, t);
    }
    diagonal(e = 0, t = 0, a = 1) {
      return Vr(this, e, t, a);
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
      for (let s of Yn(a, r, n)) t[s] = e;
      return this;
    }
    flatten() {
      let {
        size: e,
        flat: t,
        dtype: a
      } = this;
      return new z([e], [...t], a);
    }
    getfield() {
      throw "not implemented";
    }
    max(e = null, t = null, a = !1, r = null, n = !0) {
      return ya(this, e, t, a, r, n);
    }
    mean(e = null, t = null, a = !1) {
      return xr(this, e, t, a);
    }
    min(e = null, t = null, a = !1, r = null, n = !0) {
      return ga(this, e, t, a, r, n);
    }
    newbyteorder() {
      throw "not implemented";
    }
    nonzero() {
      return _e(this);
    }
    partition(e, t = -1, a = "introselect", r = null) {
      throw "not implemented";
    }
    prod(e = null, t = null, a = !1, r = 0, n = !0) {
      return Ht(this, e, t, a, r, n);
    }
    ptp(e = null, t = null, a = !1) {
      return br(this, e, t, a);
    }
    put(e, t, a = "raise") {
      return Qr(this, e, t, a), this;
    }
    ravel() {
      return ze(this);
    }
    repeat(e, t = null) {
      return Rr(this, e, t);
    }
    resize(e) {
      if (null != this.base) throw "cannot resize this array: it does not own its data";
      if (!ne(this)) throw "resize only works on single-segment arrays";
      let t = M(e);
      return t <= this.size ? this.data = [...this.data.slice(this.offset, t)] : this.data = [...this.data.slice(this.offset, t), ...Array(t - this.size).fill(0)], this.shape = e, this.ndim = e.length, this.strides = v(e, this.ndim, this.itemsize), this.offset = 0, this;
    }
    round(e = 0, t = null) {
      return Rt(this, e, t);
    }
    searchsorted(e, t = "left") {
      return en(this, e, t);
    }
    setfield() {
      throw "not implemented";
    }
    setflags() {
      throw "not implemented";
    }
    sort(e = -1, t = null) {
      return this.set(Ba(this, e, t)), this;
    }
    squeeze(e = null) {
      return ge(this, e);
    }
    std(e = null, t = null, a = 0, r = !1) {
      return $r(this, e, t, a, r);
    }
    sum(e = null, t = null, a = !1, r = 0, n = !0) {
      return Xt(this, e, t, a, r, n);
    }
    swapaxes(e, t) {
      return se(this, e, t);
    }
    take(e, t = null, a = null, r = "raise") {
      return J(this, e, t, a, r);
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
      return _r(this, e, t, a, r);
    }
  }
  function v(e, t, a) {
    if (0 == t) return [];
    let r = Array(t);
    r[t - 1] = a;
    for (let a = t - 1; a > 0; a--) r[a - 1] = r[a] * e[a];
    return r;
  }
  function M(e) {
    let t = 1;
    for (let a of e) t *= a;
    return t;
  }
  function N(e) {
    for (let t of e) if (null != t && "object" == typeof t && null != t.length) return !1;
    return !0;
  }
  function k(e, t, a = 0) {
    let {
        ndim: r,
        shape: n,
        strides: s,
        offset: l
      } = e,
      i = 0,
      d = -1;
    for (let e = 0; e < t.length; e++) {
      let a = t[e];
      if (a == y.ellipsis || "..." == a) {
        if (-1 != d) throw new Error("can only have a single ellipsis '...'");
        d = e;
      } else null == a && i++;
    }
    let o = 0;
    if (-1 != d && (o = r - a - (t.length - i - 1)), a + (t.length - i - (-1 != d)) > r) throw new Error("too many indices");
    let u = [],
      h = [];
    for (let e = 0; e < a; e++) u.push(n[e]), h.push(s[e]);
    for (let e of t) if (null == e) u.push(1), h.push(0);else {
      if ("string" == typeof e) e = _(e);else if (!(e instanceof y)) {
        let t = e;
        if (e < 0 && (e += n[a]), e < 0 || e > n[a]) throw new Error(`index ${t} out of bound for dimension size ${n[a]}`);
        l += s[a] * e, a++;
        continue;
      }
      if (e == y.ellipsis) {
        for (let e = 0; e < o; e++) u.push(n[a + e]), h.push(s[a + e]);
        a += o;
      } else if (e == y.colon) u.push(n[a]), h.push(s[a]), a++;else {
        let {
          start: t,
          step: r,
          slicelength: i
        } = e.indices(n[a]);
        l += s[a] * t, u.push(i), h.push(s[a] * r), a++;
      }
    }
    for (let e = a; e < r; e++) u.push(n[e]), h.push(s[e]);
    return e.as_strided(u, h, l);
  }
  function E(e, t = undefined, a = !0, r = 0) {
    if (e instanceof z) {
      let {
        shape: n,
        ndim: s
      } = e;
      return s < r && (n = Array(r - s).fill(1).concat(n), e = e.reshape(n)), e.astype(t ?? e.dtype, a);
    }
    let n = T(e),
      s = [];
    S(s, e, n, 0);
    let l = n.length;
    return l < r && (n = Array(r - l).fill(1).concat(n)), t = c(t ?? q(s)), new z(n, t.new(s.length, s), t);
  }
  function S(e, t, a, r = 0) {
    if (r < a.length) for (let n = 0; n < a[r]; n++) S(e, t.at(n), a, r + 1);else "function" == typeof t?.toarray && (t = t.toarray()), e.push(t);
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
  function j(e, t, a = 0) {
    for (let r = 0; r < e.length && a < t.length; r++) {
      let n = e[r];
      if (null == n || "object" != typeof n || n.length != t[a]) {
        t.length = a;
        break;
      }
      if (n instanceof z) {
        for (let e = a, r = 0; e < t.length && r < n.ndim; e++, r++) if (t[e] != n.shape[r]) {
          t.length = e;
          break;
        }
      } else a + 1 < t.length && j(n, t, a + 1);
    }
  }
  function F(e) {
    if (null == e || "object" != typeof e) return [];
    if (null != e.shape) return e.shape;
    let t = [],
      a = e;
    for (;;) {
      if (a instanceof z) t.push(...a.shape);else if ("object" == typeof a && null != a?.length) {
        t.push(a.length), a = a[0];
        continue;
      }
      break;
    }
    return t.length > 1 && j(e, t, 1), t;
  }
  z.prototype[m?.inspect?.custom] = function () {
    return this.valueOf();
  }, l.onload(() => {}), l.add("ndarray.get", () => C(120).reshape(4, 6, 5, 1).at(E([0, 2, 1]), _(), [0, 2, 4], _()), () => E([[[0], [5], [10], [15], [20], [25]], [[62], [67], [72], [77], [82], [87]], [[34], [39], [44], [49], [54], [59]]])).add("ndarray.get", () => C(120).reshape(4, 6, 5, 1).at(E([0, 2, 1]), E([0, 2, 1]), _(), _()), () => E([[[0], [1], [2], [3], [4]], [[70], [71], [72], [73], [74]], [[35], [36], [37], [38], [39]]])).add("ndarray.get", () => C(120).reshape(4, 6, 5, 1).at(_(), E([0, 2, 1]), E([0, 2, 4]), _()), () => E([[[0], [12], [9]], [[30], [42], [39]], [[60], [72], [69]], [[90], [102], [99]]])).add("ndarray.get", () => C(120).reshape(4, 6, 5, 1).at(_(), E([0, 2, 1]), _(), [0, 0, 0]), () => E([[[0, 1, 2, 3, 4], [30, 31, 32, 33, 34], [60, 61, 62, 63, 64], [90, 91, 92, 93, 94]], [[10, 11, 12, 13, 14], [40, 41, 42, 43, 44], [70, 71, 72, 73, 74], [100, 101, 102, 103, 104]], [[5, 6, 7, 8, 9], [35, 36, 37, 38, 39], [65, 66, 67, 68, 69], [95, 96, 97, 98, 99]]])).add("ndarray.get", () => C(120).reshape(4, 6, 5, 1).at(_(), _(), E([0, 2, 1]), E([0, 0, 0])), () => E([[[0, 2, 1], [5, 7, 6], [10, 12, 11], [15, 17, 16], [20, 22, 21], [25, 27, 26]], [[30, 32, 31], [35, 37, 36], [40, 42, 41], [45, 47, 46], [50, 52, 51], [55, 57, 56]], [[60, 62, 61], [65, 67, 66], [70, 72, 71], [75, 77, 76], [80, 82, 81], [85, 87, 86]], [[90, 92, 91], [95, 97, 96], [100, 102, 101], [105, 107, 106], [110, 112, 111], [115, 117, 116]]])).add("ndarray.get", () => C(120).reshape(4, 6, 5, 1).at(E([0, 2, 1]), _(), _(), E([0, 0, 0])), () => E([[[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [25, 26, 27, 28, 29]], [[60, 61, 62, 63, 64], [65, 66, 67, 68, 69], [70, 71, 72, 73, 74], [75, 76, 77, 78, 79], [80, 81, 82, 83, 84], [85, 86, 87, 88, 89]], [[30, 31, 32, 33, 34], [35, 36, 37, 38, 39], [40, 41, 42, 43, 44], [45, 46, 47, 48, 49], [50, 51, 52, 53, 54], [55, 56, 57, 58, 59]]])).add("ndarray.get", () => C(120).reshape(4, 6, 5, 1).at(E([0, 2, 1]), E([0, 2, 1]), _(), 0), () => E([[0, 1, 2, 3, 4], [70, 71, 72, 73, 74], [35, 36, 37, 38, 39]])).add("ndarray.get", () => C(120).reshape(4, 6, 5, 1).at(E([0, 2, 1]), _(), _(), 0), () => E([[[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [25, 26, 27, 28, 29]], [[60, 61, 62, 63, 64], [65, 66, 67, 68, 69], [70, 71, 72, 73, 74], [75, 76, 77, 78, 79], [80, 81, 82, 83, 84], [85, 86, 87, 88, 89]], [[30, 31, 32, 33, 34], [35, 36, 37, 38, 39], [40, 41, 42, 43, 44], [45, 46, 47, 48, 49], [50, 51, 52, 53, 54], [55, 56, 57, 58, 59]]])).add("ndarray.get", () => new z([2, 5], [...Array(10).keys()]).at(_(), _([,, -1])), () => [[4, 3, 2, 1, 0], [9, 8, 7, 6, 5]]).add("ndarray.get", () => new z([2, 5], [...Array(10).keys()]).at(_(-1), 3), () => [8]).add("ndarray.get", () => new z([2, 5], [...Array(10).keys()]).at(_([,, -1]), _([,, -1])), () => [[9, 8, 7, 6, 5], [4, 3, 2, 1, 0]]).add("ndarray.get", () => {
    let e;
    return e = E([[3, 0, 0], [0, 4, 0], [5, 6, 0]]).at(_(), _(), null), e;
  }, () => E([[[3], [0], [0]], [[0], [4], [0]], [[5], [6], [0]]])).add("ndarray.get", () => {
    let e;
    return e = E([[3, 0, 0], [0, 4, 0], [5, 6, 0]]).at(_("..."), null), e;
  }, () => E([[[3], [0], [0]], [[0], [4], [0]], [[5], [6], [0]]])).add("ndarray.get", () => C(24).reshape(2, 3, 4).at(null, "...", null), () => E([[[[[0], [1], [2], [3]], [[4], [5], [6], [7]], [[8], [9], [10], [11]]], [[[12], [13], [14], [15]], [[16], [17], [18], [19]], [[20], [21], [22], [23]]]]])).add("ndarray.get", () => C(24).reshape(2, 3, 4).at(_(":"), [0, 2], _("::2")), () => E([[[0, 2], [8, 10]], [[12, 14], [20, 22]]])).add("ndarray.get", () => C(24).reshape(2, 3, 4).at([1, 0], 0).shape, () => [2, 4]), l.add("ndarray.item", () => new z([2, 5], [...Array(10).keys()]).at(_([,, -1]), _([,, -1])).item(5), () => 4), l.add("ndarray.itemset", () => {
    let e = new z([3, 3], [[2, 2, 6], [1, 3, 6], [1, 0, 1]].flat());
    return e.itemset(4, 0), e.itemset([2, 2], 9), e;
  }, () => [[2, 2, 6], [1, 0, 6], [1, 0, 9]]), l.add("ndarray.array", () => E(1).array(), () => 1).add("ndarray.array", () => E([1]).array(), () => [1]).add("ndarray.array", () => E([]).array(), () => []).add("ndarray.array", () => E([[[]]]).array(), () => [[[]]]).add("ndarray.array", () => E([[], [], []]).array(), () => [[], [], []]).add("ndarray.array", () => Z([2, 3, 0, 2, 1]).array(), () => [[[], [], []], [[], [], []]]), l.add("ndarray.set", () => {
    let e = new z([2, 5], [...Array(10).keys()]);
    return e.at(_(), _(1, -1)).set(10), e;
  }, () => [[0, 10, 10, 10, 4], [5, 10, 10, 10, 9]]).add("ndarray.set", () => {
    let e = C(24).reshape(2, 3, 4);
    return e.set([Oa(e, 10)], -1), e;
  }, () => E([[[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, -1, -1]], [[-1, -1, -1, -1], [-1, -1, -1, -1], [-1, -1, -1, -1]]])).add("ndarray.set", () => {
    let e = C(24).reshape(2, 3, 4);
    return e.set([":", [!0, !1, !0]], [-1, -2, -3, -4]), e;
  }, () => E([[[-1, -2, -3, -4], [4, 5, 6, 7], [-1, -2, -3, -4]], [[-1, -2, -3, -4], [16, 17, 18, 19], [-1, -2, -3, -4]]])).add("ndarray.set", () => {
    let e = C(24).reshape(2, 3, 4);
    return e.set([":", [[!0, !1, !0, !1], [!1, !1, !0, !0], [!1, !0, !0, !0]]], [1, 2, 3, 4, 5, 6, 7]), e;
  }, () => E([[[1, 1, 2, 3], [4, 5, 3, 4], [8, 5, 6, 7]], [[1, 13, 2, 15], [16, 17, 3, 4], [20, 5, 6, 7]]])).add("ndarray.set", () => {
    let e = C(24).reshape(2, 3, 4);
    return e.set([":", [[!0, !1, !0, !1], [!1, !1, !0, !0], [!1, !0, !0, !0]]], -1), e;
  }, () => E([[[-1, 1, -1, 3], [4, 5, -1, -1], [8, -1, -1, -1]], [[-1, 13, -1, 15], [16, 17, -1, -1], [20, -1, -1, -1]]])), l.add("ndarray.flatten", () => E([[1, 2], [3, 4]]).flatten(), () => E([1, 2, 3, 4])), l.add("ndarray.flat.set", () => {
    let e = E([[1, 2, 3], [4, 5, 6]]);
    return e.flat = 3, e;
  }, () => E([[3, 3, 3], [3, 3, 3]])).add("ndarray.flat.set", () => {
    let e = E([[1, 2, 3], [4, 5, 6]]);
    return e.flat = [7, 8, 9, 10], e;
  }, () => E([[7, 8, 9], [10, 7, 8]])), l.add("ndarray.copy", () => {
    let e = E([[1, 2, 3]]);
    return e.copy() == e;
  }, () => !1).add("ndarray.copy", () => {
    let e = E([[1, 2, 3]]),
      t = e.copy();
    return t.itemset(0, -1), [e, t];
  }, () => [E([[1, 2, 3]]), E([[-1, 2, 3]])]), l.add("ndarray.resize", () => {
    let e = E([[0, 1], [2, 3]]);
    return e.resize([2, 1]), e;
  }, () => E([[0], [1]])).add("ndarray.resize", () => {
    let e = E([[0, 1], [2, 3]]);
    return e.resize([2, 3]), e;
  }, () => E([[0, 1, 2], [3, 0, 0]])).add("ndarray.resize", () => {
    let e = E([[0, 1], [2, 3]]),
      t = e;
    return e.resize([1, 1]), [e, t];
  }, () => [E([[0]]), E([[0]])]), l.add("array", () => E([3.1, 9]), () => [3.1, 9]).add("array", () => E([[9, 6], 3.1, 9]).shape, () => [3]).add("array", () => E(5), () => 5);
  const D = F,
    T = F;
  function I(e, t) {
    e = R(e);
    let {
      strides: a,
      ndim: r
    } = e;
    if (r > t.length) throw new Error("broadcast shape has less dimensions than input array");
    let n = [];
    for (let r = t.length - 1, s = e.shape.length - 1; r >= 0; r--, s--) {
      if (s >= 0 && 1 != e.shape[s] && e.shape[s] != t[r]) throw new Error("operands could not be broadcast together");
      n[r] = s < 0 || 1 == e.shape[s] ? 0 : a[s];
    }
    return e.as_strided(t, n);
  }
  function O(...e) {
    let t = X(...(e = e.map(e => R(e))).map(e => e.shape));
    return e.map(e => I(e, t));
  }
  function K(e, t) {
    if (1 == (t = R(t)).size) e.fill(t.item());else {
      let a = I(t, e.shape).flat[Symbol.iterator](),
        {
          data: r,
          shape: n,
          strides: s,
          offset: l
        } = e;
      for (let e of Yn(n, s, l)) r[e] = a.next().value;
    }
  }
  function U(e) {
    return new P(e);
  }
  l.add("shape", () => F([[[3, 9]], [[3, 9, 3]], [[3, 9]]]), () => [3, 1]).add("shape", () => F([1, 2, 3, [1, 3]]), () => [4]).add("shape", () => F([0]), () => [1]).add("shape", () => F(0), () => []).add("shape", () => F([C(24).reshape(1, 2, 3, 4), C(24).reshape(1, 2, 12), C(24).reshape(1, 2, 12)]), () => [3, 1, 2]).add("shape", () => F([C(24).reshape(1, 2, 3, 4), C(24).reshape(1, 2, 3, 4), C(24).reshape(1, 2, 3, 4)]), () => [3, 1, 2, 3, 4]), l.add("broadcast_to", () => I(E([1, 2, 3]).reshape(3), [3, 3]).array(), () => [[1, 2, 3], [1, 2, 3], [1, 2, 3]]), l.add("broadcast_to", () => I(E([1, 2, 3]).reshape(1, 3, 1), [2, 3, 4]).array(), () => [[[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]]]), l.add("copyto", () => {
    let e = R([4, 5, 6]);
    return K(e, [1, 2, 3]), e;
  }, () => [1, 2, 3]).add("copyto", () => {
    let e = R([[1, 2, 3], [4, 5, 6]]);
    return K(e, [[4, 5, 6], [7, 8, 9]]), e;
  }, () => [[4, 5, 6], [7, 8, 9]]).add("copyto", () => {
    let e = R([[0, 1, 2], [3, 4, 5]]);
    return K(e.at(_(), 1), [-1, -2]), e;
  }, () => [[0, -1, 2], [3, -2, 5]]);
  class P {
    constructor(e) {
      this.ndim = e.length, this.size = M(e), this.shape = e, this.coords = Array(this.ndim), this.index, this.done, this[Symbol.iterator]();
    }
    [Symbol.iterator]() {
      return this.coords.fill(0), this.index = 0, this.done = 0 == this.size, this;
    }
    next() {
      if (this.done) return {
        done: !0
      };
      let {
        coords: e,
        size: t,
        index: a
      } = this;
      if (0 != a) {
        let {
            shape: t,
            ndim: a
          } = this,
          r = a - 1,
          n = !0;
        for (; r >= 0;) {
          let a = t[r];
          if (1 == a) r--;else if (a == e[r]) e[r--] = 0, n = !0;else {
            if (!n) break;
            e[r]++, n = !1;
          }
        }
      }
      return this.done = ++this.index >= t, {
        value: e,
        done: !1
      };
    }
  }
  function R(e, t = undefined) {
    return e instanceof z ? null == t ? e : e.astype(t, !1) : E(e, t);
  }
  function Y(e, t = undefined) {
    return e = L(e), t = c(t), new z(e, t.new(M(e)), t);
  }
  function V(e, t = undefined) {
    return Y((e = R(e)).shape, t ?? e.dtype);
  }
  function L(e) {
    return e ? ("function" == typeof e.toarray && (e = e.toarray()), "object" == typeof e && null != e.length ? e : [e]) : [e];
  }
  function G(e, t) {
    e = R(e), t = L(t);
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
    if (e.size != M(t)) throw new Error(`cannot reshape array of size ${e.size} into shape [${t.join(", ")}]`);
    if (null == e.base) return e.as_strided(t, v(t, t.length, e.itemsize));
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
          a.push(n < e.shape.length ? e.strides[n++] : 1);
        }
        return e.as_strided(t, a);
      }
    }
    let n = null;
    return 1 == t.length && function (e, t, a) {
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
    }(e.shape, e.strides, e.ndim) ? n = [e.strides[0]] : 0 != t.length && (e = E(e)), e.as_strided(t, n);
  }
  function W(e, t, a = undefined) {
    let r = Y(e, a ?? q(t));
    return K(r, t), r;
  }
  function H(e, t, a = undefined) {
    return W(F(e), t, a);
  }
  function X(...e) {
    let t = 0;
    for (let a of e) t = Math.max(t, a.length);
    if (0 == t) return [];
    let a = Array(t).fill(1);
    for (let r of e) for (let e = r.length - 1, n = t - 1; e >= 0; e--, n--) {
      let t = r[e];
      if (1 != t) if (1 == a[n]) a[n] = t;else if (a[n] != t) throw new Error("shape mismatch");
    }
    return a;
  }
  function C(e, t = undefined, a = 1) {
    null == t && (t = e, e = 0);
    let r = Math.max(0, (t - e) / a | 0),
      n = Y([r], "number"),
      {
        data: s
      } = n;
    for (let t = 0; t < r; t++) s[t] = e + t * a;
    return n;
  }
  function B(e, t, a = 50, r = !0, n = !1) {
    let s = (t - e) / (r ? a - 1 : a),
      l = [];
    for (let t = 0; t < a; t++) l[t] = e + t * s;
    let i = E(l);
    return n ? [i, s] : i;
  }
  function J(e, t, a = null, r = null, n = "raise") {
    if (e = R(e), t = E(t), null == a) {
      t.data = Q(t.data, n, e.size);
      let a = t.shape;
      if (null == r) r = Y(a);else if (!De(r.shape, a)) throw "output array does not match result of ndarray.take";
      for (let a = 0; a < t.size; a++) r.data[a] = e.item(t.data[a]);
      return r;
    }
    {
      a < 0 && (a += e.ndim), t.data = Q(t.data, n, e.shape[a]);
      let s = e.shape.slice();
      if (s.splice(a, 1, ...t.shape), null == r) r = Y(s);else if (!De(r.shape, s)) throw "output array does not match result of ndarray.take";
      let l = Array(a).fill(_());
      for (let a of U(t.shape)) r.get(l.concat(a)).set(e.get([...l, t.item(a)]));
      return r;
    }
  }
  function Q(e, t, r) {
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
  function Z(e, t = undefined) {
    return W(e, 1, t);
  }
  function ee(e, t = undefined) {
    return H(e, 1, t);
  }
  function te(e, t = undefined) {
    return W(e, 0, t);
  }
  function ae(e, t = undefined) {
    return H(e, 0, t);
  }
  function re(e, t = undefined) {
    return ne(e = R(e, t)) ? e : E(e);
  }
  function ne(e) {
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
  function se(e, t, a) {
    e = R(e);
    let r = [...Array(e.ndim).keys()];
    return [r[t], r[a]] = [r[a], r[t]], le(e, r);
  }
  function le(e, t = null) {
    e = R(e);
    let a,
      r,
      {
        ndim: n,
        shape: s,
        strides: l
      } = e;
    if (null == t) a = s.slice().reverse(), r = l.slice().reverse();else {
      t = function (e, t) {
        if (e.length != t) throw new Error("axes don't match array");
        let a = [],
          r = {};
        for (let n = 0; n < t; n++) {
          let s = e[n];
          if (s < 0 && (s += t), s < 0 || t <= s) throw new Error(`axis ${s} is out of bounds for array of dimension ${n + 1}`);
          if (r[s]) throw new Error("repeated axis in transpose");
          r[s] = !0, a[n] = s;
        }
        return a;
      }(t, n), a = Array(n), r = Array(n);
      for (let e = 0; e < n; e++) a[e] = s[t[e]], r[e] = l[t[e]];
    }
    return e.as_strided(a, r);
  }
  function ie(...e) {
    if (1 != e.length) return e.map(e => ie(e));
    let t = R(e[0]),
      {
        ndim: a
      } = t;
    return a >= 1 ? t : t.copy().reshape([1]);
  }
  function de(...e) {
    if (1 != e.length) return e.map(e => de(e));
    let t = R(e[0]),
      {
        ndim: a,
        shape: r
      } = t;
    return a >= 2 ? t : 1 == a ? t.reshape([1, r[0]]) : t.copy().reshape([1, 1]);
  }
  function oe(...e) {
    if (1 != e.length) return e.map(e => oe(e));
    let t = R(e[0]),
      {
        ndim: a,
        shape: r
      } = t;
    return a >= 3 ? t : 2 == a ? t.reshape([r[0], r[1], 1]) : 1 == a ? t.reshape([1, r[0], 1]) : t.copy().reshape([1, 1, 1]);
  }
  function ue(...e) {
    return new he(e.map(e => R(e)));
  }
  l.add("asarray", () => {
    let e = E([[1, 2], [3, 4]]);
    return R(e) === e;
  }, () => !0).add("asarray", () => R([[1, 2], [3, 4]]), () => [[1, 2], [3, 4]]), l.add("empty", () => Y([2, 2]), () => [[,,], [,,]]).add("empty", () => Y(0), () => []).add("empty", () => Y([]), () => {}), l.add("empty_like", () => V([[1, 2, 3], [4, 5, 6]]), () => [[,,,], [,,,]]).add("empty_like", () => V([1, 2, 3, [1, 3]]), () => [,,,,]), l.add(G, () => G(E([1, 2, 3, 4, 5]).at(_("::-2")), -1), () => E([5, 3, 1])).add(G, () => G(E([1]), []), () => E(1)).add(G, () => G(E(1), 1), () => E([1])).add(G, () => G(E(1), -1), () => E([1])).add("reshape", () => G(R([[0, 1], [2, 3], [4, 5]]), [2, 3]), () => [[0, 1, 2], [3, 4, 5]]).add("reshape", () => G(R([[[[0, 1]]]]), [2, -1]), () => [[0], [1]]).add("reshape", () => {
    let e = R([[[[0, 1]]]]);
    return G(e, [2, -1]).base === e;
  }, () => !0).add("reshape", () => {
    let e = R([[[[0, 1]]]]).at(0);
    return G(e, [2, -1]).base === e;
  }, () => !1).add("reshape", () => G(E([[1, 2, 3], [4, 5, 6]]), [-1]), () => E([1, 2, 3, 4, 5, 6])).add("reshape", () => {
    let e = C(30),
      t = e.reshape([10, 3]).at(_("::2")),
      a = t.reshape(t.shape);
    return [t.toarray(), G(t, [1, 1, 5, -1, 3]).base === e, t.base === e, t.reshape(-1).base === e, a === t, a.base === e];
  }, () => [E([[0, 1, 2], [6, 7, 8], [12, 13, 14], [18, 19, 20], [24, 25, 26]]).array(), !0, !0, !1, !1, !0]), l.add("full", () => W([2, 2], 1 / 0), () => [[1 / 0, 1 / 0], [1 / 0, 1 / 0]]).add("full", () => W([2, 2], 10), () => [[10, 10], [10, 10]]).add("full", () => W([2, 2], [1, 2]), () => [[1, 2], [1, 2]]).add("full", () => W(2, -1), () => [-1, -1]), l.add(H, () => H([1], 2), () => [2]).add(H, () => H(1, 99), () => 99).add(H, () => je(H([[0, 1], [2, 3]], [1.1, 2.2], "int8"), E([[1, 2], [1, 2]])), () => !0), l.add("broadcast_shapes", () => X([1, 2], [3, 1], [3, 2]), () => [3, 2]), l.add("broadcast_shapes", () => X([6, 7], [5, 6, 1], [7], [5, 1, 7]), () => [5, 6, 7]), l.add("arange", () => C(3), () => E([0, 1, 2])).add("arange", () => C(-10, 10), () => E([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).add("arange", () => C(-10, 10, -1), () => E([])).add("arange", () => C(3, 7, 2), () => E([3, 5])).add("arange", () => C(0, -10, -1), () => E([0, -1, -2, -3, -4, -5, -6, -7, -8, -9])), l.add("linspace", () => B(2, 3, 5), () => E([2, 2.25, 2.5, 2.75, 3])).add("linspace", () => B(2, 3, 5, !1), () => E([2, 2.2, 2.4, 2.6, 2.8])).add("linspace", () => B(2, 3, 5, !0, !0), () => [E([2, 2.25, 2.5, 2.75, 3]), .25]).add("linspace", () => B(2, 3, 5, !1, !0), () => [E([2, 2.2, 2.4, 2.6, 2.8]), .2]).add("linspace", () => B(1, 10, 10, !1), () => E([1, 1.9, 2.8, 3.7, 4.6, 5.5, 6.4, 7.3, 8.2, 9.1])), l.add("take", () => J([4, 3, 5, 7, 6, 8], [0, 1, 4]), () => E([4, 3, 6])).add("take", () => J([4, 3, 5, 7, 6, 8], [[0, 1], [2, 3]]), () => E([[4, 3], [5, 7]])).add("take", () => J(E([[1, 2], [3, 4], [5, 6], [7, 8]]), [[0, 1], [2, 3]], 0), () => E([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])).add("take", () => J(E([[1, 2], [3, 4], [5, 6], [7, 8]]), E([[[[0, 1], [0, 1]]]]), 1), () => E([[[[[1, 2], [1, 2]]]], [[[[3, 4], [3, 4]]]], [[[[5, 6], [5, 6]]]], [[[[7, 8], [7, 8]]]]])).add("take", () => J([[5, 6, 2, 7, 1], [4, 9, 2, 9, 3]], [0, 4], 1), () => [[5, 1], [4, 3]]), l.add(re, () => {
    let e = Z([3, 1, 5]).at(_(), _([,, 3]), _());
    return re(e) === e;
  }, () => !0), l.add(re, () => {
    let e = Z([3, 4, 5]).at(_(), _([,, 1]), _());
    return re(e) === e;
  }, () => !0), l.add(re, () => {
    let e = Z([3, 4, 5]).at(_(), _(), _(1));
    return re(e) === e;
  }, () => !1), l.add(re, () => {
    let e = Z([3]).at(_([,, -3]));
    return re(e) === e;
  }, () => !0), l.add(re, () => {
    let e = Z([2]).at(_([,, 2]));
    return re(e) === e;
  }, () => !0), l.add(re, () => {
    let e = Z([3]).at(_([,, 2]));
    return re(e) === e;
  }, () => !1), l.add(re, () => {
    let e = Z([3]).at(_([1, 2]));
    return re(e) === e;
  }, () => !0).add(re, () => {
    let e, t;
    return e = E([]), t = re(e), e === t;
  }, () => !0).add(re, () => {
    let e, t;
    return e = E(5), t = re(e), e === t;
  }, () => !1), l.add(se, () => se(E([[1, 2, 3]]), 0, 1), () => E([[1], [2], [3]])).add(se, () => se(E([[[0, 1], [2, 3]], [[4, 5], [6, 7]]]), 0, 2), () => E([[[0, 4], [2, 6]], [[1, 5], [3, 7]]])), l.add(le, () => le(C(4).reshape([2, 2])), () => E([[0, 2], [1, 3]])).add(le, () => le(Z([1, 2, 3]), [1, 0, 2]), () => E([[[1, 1, 1]], [[1, 1, 1]]])).add(le, () => le(Z([2, 3, 4, 5])).shape, () => [5, 4, 3, 2]), l.add(ie, () => ie(1), () => E([1])).add(ie, () => ie(1, [3, 4]), () => [E([1]), E([3, 4])]).add(ie, () => ie(C(9).reshape([3, 3])), () => E([[0, 1, 2], [3, 4, 5], [6, 7, 8]])).add(ie, () => {
    let e = E([1]),
      t = e.at(0),
      a = ie(t);
    return a.set([0], -96), [e.array(), t.array(), a.array(), null === e.base, null === t.base, a.base != t, a.base];
  }, () => [E([1]), 1, E([-96]), !0, !1, !0, E(-96)]), l.add(de, () => de(3), () => E([[3]])).add(de, () => {
    let e = C(3);
    return [de(e), de(e).base === e];
  }, () => [E([[0, 1, 2]]), !0]).add(de, () => de(1, [1, 2], [[1, 2]]), () => [E([[1]]), E([[1, 2]]), E([[1, 2]])]), l.add(oe, () => oe(3), () => E([[[3]]])).add(oe, () => oe(C(3)).shape, () => [1, 3, 1]).add(oe, () => {
    let e = C(12).reshape(4, 3);
    return [oe(e).shape, oe(e).base === e.base];
  }, () => [[4, 3, 1], !0]).add(oe, () => oe([1, 2], [[1, 2]], [[[1, 2]]]), () => [[[[1], [2]]], [[[1], [2]]], [[[1, 2]]]]);
  class he {
    constructor(e) {
      this.shape = X(...e.map(e => e.shape)), this.arrays = e.map(e => I(e, this.shape)), this.ndim = this.shape.length, this.size = M(this.shape), this.reset();
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
  function fe(e, t = e, a = 0, r = "number") {
    let n = te([e, t], r),
      {
        data: s,
        size: l
      } = n;
    for (let e = a + Math.ceil(-a / (t + 1)) * (t + 1); e < l; e += t + 1) s[e] = 1;
    return n;
  }
  function pe(e, t = "number") {
    return fe(e, e, 0, t);
  }
  function ce(e) {
    return null == e || "object" != typeof e ? 0 : null != e.ndim ? e.ndim : F(e).length;
  }
  l.add(ue, () => {
    let e = ue(E([[1], [2], [3]]), E([4, 5, 6])),
      t = Y(e.shape),
      a = [];
    for (let [t, r] of e) a.push(t + r);
    return t.flat = a, t;
  }, () => E([[5, 6, 7], [6, 7, 8], [7, 8, 9]])).add(ue, () => {
    let e = [],
      t = ue(E([1, 2, 3]), E([[4], [5], [6]]));
    return e.push(t.index), e.push(t.next().value, t.next().value, t.next().value), e.push(t.index), t.reset(), e.push(t.index), e;
  }, () => [0, [1, 4], [2, 4], [3, 4], 3, 0]), l.add("eye", () => fe(2), () => [[1, 0], [0, 1]]).add("eye", () => fe(3, 3, 1), () => [[0, 1, 0], [0, 0, 1], [0, 0, 0]]).add("eye", () => fe(4, 5, -1), () => [[0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0]]), l.add("identity", () => pe(3), () => [[1, 0, 0], [0, 1, 0], [0, 0, 1]]).add("identity", () => pe(0), () => E([]).reshape([0, 0]));
  const me = ce;
  function ye(e, t) {
    "number" == typeof t && (t = [t]);
    let a = (e = R(e)).ndim + t.length;
    t = Ee(t, a, !1);
    let r = [];
    for (let n = 0, s = 0; n < a; n++) r.push(t.includes(n) ? 1 : e.shape[s++]);
    return e.reshape(r);
  }
  function ge(e, t = null) {
    e = R(e), null != t && (t = Ee(t));
    let {
        shape: a,
        ndim: r
      } = e,
      n = [];
    for (let e = 0; e < r; e++) (t ? t.includes(e) : 1 == a[e]) || n.push(a[e]);
    return e.reshape(n);
  }
  function be(e) {
    return E(e);
  }
  function we(e, t, a = undefined) {
    let r = [];
    for (let a of U(t)) r.push(e(a));
    return E(r, a ?? q(r)).reshape(t);
  }
  function xe(e, t = -1, a = undefined) {
    let r;
    if (-1 == t) r = [...e];else {
      r = [];
      let a = 0;
      if (a < t) for (let n of e) if (r.push(n), a++, a >= t) break;
    }
    return E(r, a ?? q(r));
  }
  function _e(e) {
    e = ie(e);
    let {
        ndim: t
      } = e,
      a = [];
    for (let e = 0; e < t; e++) a.push([]);
    for (let [r, n] of Ln(e)) if (n) for (let e = 0; e < t; e++) a[e].push(r[e]);
    return a.map(e => R(e));
  }
  function $e(e) {
    return 0 == ce(e) ? $e(e = ie(e)).at(_(), _(null, 0)) : le(_e(e));
  }
  function Ae(e, t, a = null, r = null) {
    if (1 != (e = R(e)).ndim) throw "condition must be a 1-d array";
    return J(t, _e(e)[0], a, r);
  }
  function ze(e) {
    e = re(e);
    let {
      size: t,
      base: a,
      offset: r,
      itemsize: n
    } = e;
    return (e = e.as_strided([t], v([t], 1, n), r)).base = a, e;
  }
  function ve(e, t) {
    return Ae(ze(e), ze(t));
  }
  function Me(e) {
    return _e(ze(e))[0];
  }
  function Ne(e, t = null, a = !1) {
    return Xt(Fa(e, 0), t, null, a);
  }
  function ke(e, t, a = !1) {
    if (Array.isArray(e) || (e = [e]), e = e.map(e => An(e, t)), !a && new Set(e).size != e.length) throw "repeated axis";
    return e;
  }
  l.add("ndim", () => ce([[1, 2, 3], [4, 5, 6]]), () => 2).add("ndim", () => ce(R([[1, 2, 3], [4, 5, 6]])), () => 2).add("ndim", () => ce(1), () => 0).add("ndim", () => ce(null), () => 0), l.add(ye, () => ye(E([1, 2]), 0), () => E([[1, 2]])).add(ye, () => ye(E([1, 2]), 1), () => E([[1], [2]])).add(ye, () => ye(E([1, 2]), [0, 1]), () => E([[[1, 2]]])).add(ye, () => ye(E([1, 2]), [2, 0]), () => E([[[1], [2]]])).add(ye, () => {
    let e = E([1, 2]);
    return ye(e, [2, 0]).base === e;
  }, () => !0), l.add(ge, () => ge(E([[[0], [1], [2]]])).shape, () => [3]).add(ge, () => ge(E([[[0], [1], [2]]]), 0).shape, () => [3, 1]).add(ge, () => ge(E([[[0], [1], [2]]]), 2).shape, () => [1, 3]).add(ge, () => ge(E([[1234]])), () => E(1234)).add(ge, () => {
    let e, t, a, r, n;
    return e = C(20), t = e.reshape([5, -1]), a = t.at(_([,, -1])), r = re(a), n = r.reshape([5, 1, 1, -1]), [n.reshape([5, -1]).base === r, n.reshape(-1).base === r, ge(n).base === r, e, t, a, ge(n)];
  }, () => [!0, !0, !0, E([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), E([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15], [16, 17, 18, 19]]), E([[16, 17, 18, 19], [12, 13, 14, 15], [8, 9, 10, 11], [4, 5, 6, 7], [0, 1, 2, 3]]), E([[16, 17, 18, 19], [12, 13, 14, 15], [8, 9, 10, 11], [4, 5, 6, 7], [0, 1, 2, 3]])]), l.add(be, () => {
    let e, t, a;
    return e = E([1, 2, 3]), t = e, a = be(e), e.set([0], 10), [e.item(0) == t.item(0), e.item(0) == a.item(0)];
  }, () => [!0, !1]), l.add(we, () => we(([e, t]) => e, [2, 2]), () => E([[0, 0], [1, 1]])).add(we, () => we(([e, t]) => t, [2, 2]), () => E([[0, 1], [0, 1]])).add(we, () => we(([e, t]) => e == t, [3, 3]), () => E([[!0, !1, !1], [!1, !0, !1], [!1, !1, !0]])).add(we, () => we(([e, t]) => e + t, [3, 3]), () => E([[0, 1, 2], [1, 2, 3], [2, 3, 4]])), l.add(xe, () => xe({
    *[Symbol.iterator]() {
      for (let e = 0; e < 5; e++) yield e * e;
    }
  }), () => E([0, 1, 4, 9, 16])).add(xe, () => xe({
    *[Symbol.iterator]() {
      for (let e = 0; e < 5; e++) yield [e + 1, e + 2];
    }
  }), () => E([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6]])), l.add(_e, () => {
    let e;
    return e = E([[3, 0, 0], [0, 4, 0], [5, 6, 0]]).at(_("..."), null), _e(e);
  }, () => [E([0, 1, 2, 2]), E([0, 1, 0, 1]), E([0, 0, 0, 0])]).add(_e, () => _e(E([[!1, !1, !1], [!0, !0, !0], [!0, !0, !0]])), () => [E([1, 1, 1, 2, 2, 2]), E([0, 1, 2, 0, 1, 2])]).add(_e, () => _e(55), () => [E([0])]), l.add($e, () => $e(55).shape, () => [1, 0]).add($e, () => $e(Ia(C(6).reshape(2, 3), 1)), () => E([[0, 2], [1, 0], [1, 1], [1, 2]])), l.add(Ae, () => Ae([0, 1], E([[1, 2], [3, 4], [5, 6]]), 0), () => E([[3, 4]])).add(Ae, () => Ae([!1, !0, !0], E([[1, 2], [3, 4], [5, 6]]), 0), () => E([[3, 4], [5, 6]])).add(Ae, () => Ae([!1, !0], E([[1, 2], [3, 4], [5, 6]]), 1), () => E([[2], [4], [6]])).add(Ae, () => Ae([!1, !0], E([[1, 2], [3, 4], [5, 6]])), () => E([2])), l.add(ze, () => ze(E([[1, 2, 3], [4, 5, 6]])), () => E([1, 2, 3, 4, 5, 6])).add(ze, () => ze(E([[1, 2, 3], [4, 5, 6]]).T), () => E([1, 4, 2, 5, 3, 6])).add(ze, () => ze(C(12).reshape(2, 3, 2).swapaxes(1, 2)), () => E([0, 2, 4, 1, 3, 5, 6, 8, 10, 7, 9, 11])).add(ze, () => {
    let e, t;
    return e = C(40).reshape([5, -1]).copy(), t = e.at(null, _(":"), null, null, _("::2"), null), [t.reshape(-1).base == e, ze(t).base];
  }, () => [!0, null]).add(ze, () => {
    let e, t;
    return e = C(40).reshape([5, -1]).copy(), t = e.at(null, _(":"), null, null, _("::3"), null), [t.reshape(-1).base == e, ze(t).base];
  }, () => [!1, null]), l.add(ve, () => {
    let e, t;
    return e = C(12).reshape([3, 4]), t = E([[!0, !1, !1, !0], [!1, !1, !0, !1], [!1, !0, !1, !1]]), ve(t, e);
  }, () => E([0, 3, 6, 9])), l.add(Me, () => {
    let e;
    return e = C(-2, 3), Me(e);
  }, () => E([0, 1, 3, 4])), l.add(Ne, () => {
    let e;
    return e = Z([2, 3, 4, 5]), Ne(e);
  }, () => 120).add(Ne, () => {
    let e;
    return e = Z([2, 3, 4, 5]), Ne(e, 0);
  }, () => E([[[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]], [[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]], [[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]]])).add(Ne, () => {
    let e;
    return e = Z([2, 3, 4, 5]), Ne(e, 1);
  }, () => E([[[3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3]], [[3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3]]])).add(Ne, () => {
    let e;
    return e = Z([2, 3, 4, 5]), Ne(e, -1);
  }, () => E([[[5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5]], [[5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5]]])).add(Ne, () => {
    let e;
    return e = Z([2, 3, 4, 5]), Ne(e, [0, -1]);
  }, () => E([[10, 10, 10, 10], [10, 10, 10, 10], [10, 10, 10, 10]])).add(Ne, () => {
    let e;
    return e = Z([2, 3, 4, 5]), Ne(e, [0, -1], !0);
  }, () => E([[[[10], [10], [10], [10]], [[10], [10], [10], [10]], [[10], [10], [10], [10]]]]));
  const Ee = ke;
  class Se {
    constructor(e, t = null) {
      this.array = R(e);
      let {
        ndim: a,
        shape: r
      } = e;
      if (null != t && (t = ke(t, a)), this.axis = t, null != t) {
        let e = [],
          n = [],
          s = [];
        for (let l = 0; l < a; l++) (s[l] = !t.includes(l)) ? (n[l] = 0, e.push(r[l])) : n[l] = _[":"];
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
      for (let t of U(a)) {
        for (let a = 0, s = 0; a < e.ndim; a++) r[a] && (n[a] = t[s++]);
        yield [t, e.get(n)];
      }
    }
  }
  function qe(e, t = null) {
    return new Se(e, t);
  }
  function je(e, t, a = !1) {
    return e = R(e), t = R(t), !!De(e.shape, t.shape) && ut(a ? Te(e, t) : ja(e, t));
  }
  function Fe(e, t) {
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
    }(e.shape, t.shape) && ut(ja(e, t));
  }
  function De(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let a = 0; a < e.length; a++) if (e[a] !== t[a]) return !1;
    return !0;
  }
  const Te = hn("nan_equal", (e, t) => e == t || Number.isNaN(e) && Number.isNaN(t));
  function Ie(e, t = 0, a = undefined) {
    if (0 == e.length) throw new Error("need at least one array to concatenate");
    e = e.map(e => R(e)), null == t && (e = e.map(e => ze(e)), t = 0);
    let {
      ndim: r,
      shape: n
    } = e[0];
    if (0 == r) throw new Error("zero-dimensional arrays cannot be concatenated");
    for (let a = 1; a < e.length; a++) {
      let s = e[a];
      if (s.ndim != r) throw new Error(`all the input arrays must have same number of dimensions, but the array at index 0 has ${r} dimension(s) and the array at index ${a} has ${e[a].ndim} dimension(s)`);
      for (let l = 0; l < r; l++) if (l != t && s.shape[l] != n[l]) throw new Error(`all the input array dimensions for the concatenation axis must match exactly, but along dimension ${l}, the array at index 0 has size ${n[l]} and the array at index ${a} has size ${e[a].shape[l]}`);
    }
    t = An(t, r);
    let s = n.slice();
    if (s[t] = e.reduce((e, a) => e + a.shape[t], 0), null == a) a = Y(s);else {
      if (a.ndim != r) throw new Error("output array has wrong dimensionality");
      if (!De(a.shape, s)) throw new Error("output array is the wrong shape");
    }
    let l = Array(r).fill(_(":")),
      i = 0;
    for (let r of e) l[t] = _(i, i += r.shape[t]), a.set(l, r);
    return a;
  }
  function Oe(e, t, a) {
    e = R(e);
    let {
      ndim: r
    } = e;
    if (t = Ee(t, r), a = Ee(a, r), t.length != a.length) throw new Error("'src' and 'dst' arguments must have the same number of elements");
    let n = [...Array(r).keys()].filter(e => !t.includes(e));
    for (let e = 0; e < t.length; e++) n.splice(a[e], 0, t[e]);
    return le(e, n);
  }
  l.add(je, () => je([1, 2], [1, 2]), () => !0).add(je, () => je(E([1, 2]), E([1, 2])), () => !0).add(je, () => je([1, 2], [1, 2, 3]), () => !1).add(je, () => je([1, 2], [1, 4]), () => !1).add(je, () => {
    let e = E([1, NaN]);
    return je(e, e);
  }, () => !1).add(je, () => {
    let e = E([1, NaN]);
    return je(e, e, !0);
  }, () => !0), l.add(Fe, () => Fe([1, 2], [1, 2]), () => !0).add(Fe, () => Fe([1, 2], [1, 3]), () => !1).add(Fe, () => Fe([1, 2], [[1, 2], [1, 2]]), () => !0).add(Fe, () => Fe([1, 2], [[1, 2, 1, 2], [1, 2, 1, 2]]), () => !1).add(Fe, () => Fe([1, 2], [[1, 2], [1, 3]]), () => !1), l.add(Ie, () => {
    let e = E([[1, 2], [3, 4]]),
      t = E([[5, 6]]);
    return [Ie([e, t], 0), Ie([e, t.T], 1), Ie([e, t], null)];
  }, () => [E([[1, 2], [3, 4], [5, 6]]), E([[1, 2, 5], [3, 4, 6]]), E([1, 2, 3, 4, 5, 6])]), l.add(Oe, () => Oe(te([3, 4, 5]), 0, -1).shape, () => [4, 5, 3]).add(Oe, () => Oe(te([3, 4, 5]), -1, 0).shape, () => [5, 3, 4]);
  const Ke = hn("add", (e, t) => e + t),
    Ue = un("reciprocal", e => 1 / e),
    Pe = un("positive", e => +e),
    Re = un("negative", e => -e),
    Ye = hn("multiply", (e, t) => e * t),
    Ve = hn("divide", (e, t) => e / t),
    Le = hn("power", (e, t) => e ** t),
    Ge = hn("subtract", (e, t) => e - t),
    We = Ve,
    He = hn("floor_divide", (e, t) => e / t | 0),
    Xe = Le,
    Ce = hn("fmod", (e, t) => e - (e / t | 0) * t),
    Be = hn("mod", (e, t) => (e % t + t) % t);
  function Je(e, t = [null, null]) {
    return [cn(Qe, e, t[0]), cn(Ze, e, t[1])];
  }
  const Qe = e => e % 1,
    Ze = e => 0 | e,
    et = Be;
  function tt(e, t, a = [null, null]) {
    return [He(e, t, a[0]), Be(e, t, a[1])];
  }
  l.add(tt, () => tt(C(5), 3), () => [E([0, 0, 0, 1, 1]), E([0, 1, 2, 0, 1])]), l.add(Je, () => Je([0, 3.5]), () => [E([0, .5]), E([0, 3])]).add(Je, () => Je(-.5), () => [-.5, -0]), l.add(Ce, () => Ce([-3, -2, -1, 1, 2, 3], 2), () => E([-1, 0, -1, 1, 0, 1])).add(Ce, () => et([-3, -2, -1, 1, 2, 3], 2), () => E([1, 0, 1, 1, 0, 1])), l.add(Ke, () => Ke(C(9).reshape([3, 3]), C(3)), () => E([[0, 2, 4], [3, 5, 7], [6, 8, 10]])), l.add(Ge, () => Ge(1, 4), () => -3).add(Ge, () => Ge(C(9).reshape([3, 3]), C(3)), () => E([[0, 0, 0], [3, 3, 3], [6, 6, 6]])), l.add(Ye, () => Ye(2, 4), () => 8).add(Ge, () => Ye(C(9).reshape([3, 3]), C(3)), () => E([[0, 1, 4], [0, 4, 10], [0, 7, 16]])), l.add(Ve, () => Ve(2, 4), () => .5).add(Ve, () => Ve(C(9).reshape([3, 3]), C(3)), () => E([[NaN, 1, 1], [1 / 0, 4, 2.5], [1 / 0, 7, 4]])), l.add(Be, () => Be([4, 7], [2, 3]), () => E([0, 1])).add(Be, () => Be(C(7), 5), () => E([0, 1, 2, 3, 4, 0, 1])), l.add(Le, () => Le(C(6), 3), () => E([0, 1, 8, 27, 64, 125])).add(Le, () => Le(C(6), [1, 2, 3, 3, 2, 1]), () => E([0, 1, 8, 27, 16, 5])).add(Le, () => Le(C(6), E([[1, 2, 3, 3, 2, 1], [1, 2, 3, 3, 2, 1]])), () => E([[0, 1, 8, 27, 16, 5], [0, 1, 8, 27, 16, 5]])).add(Le, () => Le(C(6), E([1, 2, 3, 3, 2, 1])), () => E([0, 1, 8, 27, 16, 5]));
  const at = hn("logical_and", (e, t) => e && t, {
      dtype: "boolean"
    }),
    rt = at,
    nt = hn("logical_or", (e, t) => e || t, {
      dtype: "boolean"
    }),
    st = nt,
    lt = un("logical_not", e => !e, {
      dtype: "boolean"
    }),
    it = lt,
    dt = hn("logical_xor", (e, t) => !e != !t, {
      dtype: "boolean"
    }),
    ot = dt,
    ut = fn("all", (e, t) => e && !!t, !0),
    ht = fn("any", (e, t) => e || !!t, !1),
    ft = un("isfinite", Number.isFinite),
    pt = un("isinf", e => e == 1 / 0 || e == -1 / 0),
    ct = un("isnan", Number.isNaN),
    mt = un("isneginf", e => e == -1 / 0),
    yt = un("isposinf", e => e == 1 / 0);
  l.add(at, () => at(!0, !1), () => !1).add(at, () => at([!0, !1], [!1, !1]), () => E([!1, !1])).add(at, () => {
    let e = C(5);
    return at(Ia(e, 1), Da(e, 4));
  }, () => E([!1, !1, !0, !0, !1])).add(at, () => at(E([!0, !1]), E([!1, !1])), () => E([!1, !1])), l.add(ut, () => 0 == ut([[!0, !1], [!0, !0]]), () => !0).add(ut, () => ut([[!0, !1], [!0, !0]], 0), () => E([!0, !1])).add(ut, () => ut([-1, 4, 5]), () => !0).add(ut, () => {
    let e = E(!1);
    return [ut([-1, 4, 5], null, e) == e, e];
  }, () => [!0, E(!0)]).add(ut, () => ut([]), () => !0), l.add(ht, () => ht([[!0, !1], [!0, !0]]), () => !0).add(ht, () => ht([[!0, !1], [!1, !1]], 0), () => E([!0, !1])).add(ht, () => ht([-1, 0, 5]), () => !0).add(ht, () => ht(NaN), () => !1);
  const gt = Math.E,
    bt = NaN,
    wt = Math.PI,
    xt = 1 / 0,
    _t = -1 / 0,
    $t = un("sin", Math.sin),
    At = un("cos", Math.cos),
    zt = un("tan", Math.tan),
    vt = un("arcsin", Math.asin),
    Mt = un("arccos", Math.acos),
    Nt = un("arctan", Math.atan),
    kt = un("hypot", Math.hypot),
    Et = un("arctan2", Math.atan2),
    St = un("degrees", e => 180 * e / wt),
    qt = un("radians", e => e / 180 * wt);
  function jt(e, t = 2 * wt, a = t / 2) {
    if (1 != (e = R(e)).ndim) throw "unwrap currently only supports 1d arrays";
    let r = [e.data[e.offset]],
      n = e.data[e.offset],
      s = !0;
    for (let l of Yn(e.shape, e.strides)) {
      if (s) {
        s = !1;
        continue;
      }
      let i = e.data[e.offset + l] - n;
      i > a ? i -= t : i < -a && (i += t);
      let d = n + i;
      r.push(d), n = d;
    }
    return R(r);
  }
  const Ft = un("rad2deg", e => 180 * e / wt),
    Dt = un("deg2rad", e => e / 180 * wt),
    Tt = un("sinh", Math.sinh),
    It = un("cosh", Math.cosh),
    Ot = un("tanh", Math.tanh),
    Kt = un("arcsinh", Math.asinh),
    Ut = un("arccosh", Math.acosh),
    Pt = un("arctanh", Math.atanh);
  function Rt(e, t = 0, a = null) {
    if (e = R(e), null == a) a = Y(e.shape);else if (!De(a.shape, e.shape)) throw new Error("shape does not match");
    let r = 0;
    for (let n of e.flat) {
      let e = 10 ** t,
        s = n * e,
        l = Math.round(s),
        i = s % 1;
      .5 != i && -.5 != i || (l = l % 2 ? l - 1 : l), a.itemset(r++, l / e);
    }
    return a;
  }
  const Yt = un("rint", e => {
      let t = e % 1,
        a = Math.round(e);
      return .5 != t && -.5 != t || (a = a % 2 ? a - 1 : a), a;
    }),
    Vt = un("fix", e => Math.sign(e) * Math.floor(Math.abs(e))),
    Lt = un("floor", Math.floor),
    Gt = un("ceil", Math.ceil),
    Wt = un("trunc", Math.trunc),
    Ht = fn("prod", (e, t) => e * t, 1),
    Xt = fn("sum", (e, t) => e + t, 0),
    Ct = fn("nanprod", (e, t) => e * (isNaN(t) ? 1 : t), 1),
    Bt = fn("nansum", (e, t) => e + (isNaN(t) ? 0 : t), 0);
  function Jt(e, t = 1, a = -1) {
    e = R(e);
    let {
      ndim: r
    } = e;
    a = An(a, r);
    let n = Array(r).fill(_()),
      s = Array(r).fill(_());
    n[a] = _(1, null), s[a] = _(null, -1);
    for (let a = 0; a < t; a++) e = Ge(e.get(n), e.get(s));
    return e;
  }
  function Qt(e, t = null, a = null) {
    if (e = Jt(G(e, -1)), null != a || null != t) {
      let r = [];
      null != a && r.push(a), r.push(e), null != t && r.push(t), e = Ie(r, null);
    }
    return e;
  }
  const Zt = un("exp", Math.exp, 1),
    ea = un("expm1", e => Math.exp(e) - 1),
    ta = un("exp2", e => 2 ** e),
    aa = un("log", Math.log),
    ra = un("log10", Math.log10),
    na = un("log2", Math.log2),
    sa = un("log1p", Math.log1p),
    la = hn("logaddexp", (e, t) => Math.log(Math.exp(e) + Math.exp(t))),
    ia = hn("logaddexp2", (e, t) => Math.log2(2 ** e + 2 ** t)),
    da = un("signbit", e => e < 0),
    oa = hn("copysign", (e, t) => t < 0 ? -Math.abs(e) : Math.abs(e)),
    ua = hn("ldexp", (e, t) => e * 2 ** t);
  function ha(e, t) {
    for (; 0 != t;) {
      let a = t;
      t = e % t, e = a;
    }
    return e;
  }
  const fa = hn("lcm", function (e, t) {
      return e * t / ha(e, t);
    }),
    pa = hn("gcd", ha),
    ca = hn("maximum", Math.max),
    ma = hn("minimum", Math.min),
    ya = fn("amax", Math.max, -xt),
    ga = fn("amin", Math.min, xt),
    ba = un("sqrt", Math.sqrt),
    wa = un("cbrt", Math.cbrt),
    xa = un("square", e => e ** 2),
    _a = un("abs", Math.abs),
    $a = _a,
    Aa = un("sign", Math.sign),
    za = un("nan_to_num", e => isNaN(e) ? 0 : e == 1 / 0 ? Number.MAX_VALUE : e == -1 / 0 ? Number.MIN_VALUE : e);
  l.add(ya, () => ya(C(4).reshape(2, 2)), () => 3).add(ya, () => ya(C(4).reshape(2, 2), 0), () => E([2, 3])).add(ya, () => ya(C(4).reshape(2, 2), 1), () => E([1, 3])), l.add(ca, () => ca([2, 3, 4], [1, 5, 2]), () => E([2, 5, 4])).add(ca, () => ca(fe(2), [.5, 2]), () => E([[1, 2], [.5, 2]])), l.add(pa, () => pa(12, 20), () => 4).add(pa, () => pa(C(6), 20), () => E([20, 1, 2, 1, 4, 5])), l.add(fa, () => fa(12, 20), () => 60).add(fa, () => fa(C(6), 20), () => E([0, 20, 20, 60, 20, 20])), l.add(oa, () => oa(1.3, -1), () => -1.3).add(oa, () => 1 / oa(0, 1), () => 1 / 0).add(oa, () => 1 / oa(0, -1), () => -1 / 0), l.add(da, () => da(-1.2), () => !0).add(da, () => da(E([1, -2.3, 2.1])), () => E([!1, !0, !1])), l.add(la, () => {
    let e = aa(1e-50),
      t = aa(2.5e-50);
    return la(e, t);
  }, () => -113.87649168120691), l.add(jt, () => jt([0, 1, 2, -1, 0], 4), () => E([0, 1, 2, 3, 4])).add(jt, () => jt([1, 2, 3, 4, 5, 6, 1, 2, 3], 6), () => E([1, 2, 3, 4, 5, 6, 7, 8, 9])).add(jt, () => jt([2, 3, 4, 5, 2, 3, 4, 5], 4), () => E([2, 3, 4, 5, 6, 7, 8, 9])), l.add(Rt, () => Rt([.37, 1.64]), () => E([0, 2])).add(Rt, () => Rt([.37, 1.64], 1), () => E([.4, 1.6])).add(Rt, () => Rt([.5, 1.5, 2.5, 3.5, 4.5]), () => E([0, 2, 2, 4, 4])).add(Rt, () => Rt([5, 15, 25, 35, 45], -1), () => E([0, 20, 20, 40, 40])).add(Rt, () => Rt([-5, -15, -25, -35, -45], -1), () => E([0, -20, -20, -40, -40])).add(Rt, () => Rt([1, 2, 3, 11], 1), () => E([1, 2, 3, 11])).add(Rt, () => Rt([1, 2, 3, 11], -1), () => E([0, 0, 0, 10])), l.add(Yt, () => Yt(E([-1.7, -1.5, -.2, .2, 1.5, 1.7, 2])), () => E([-2, -2, -0, 0, 2, 2, 2])), l.add(Vt, () => Vt(3.14), () => 3).add(Vt, () => Vt(3), () => 3).add(Vt, () => Vt([2.1, 2.9, -2.1, -2.9]), () => E([2, 2, -2, -2])), l.add(Ht, () => Ht([]), () => 1).add(Ht, () => Ht([1, 2]), () => 2).add(Ht, () => Ht(E([[1, 2], [3, 4]])), () => 24).add(Ht, () => Ht(E([[1, 2], [3, 4]]), 1), () => E([2, 12])).add(Ht, () => Ht(E([[1, 2], [3, 4]]), 0), () => E([3, 8])).add(Ht, () => Ht([1, 2], null, null, null, 5), () => 10), l.add(Xt, () => Xt([.5, 1.5]), () => 2).add(Xt, () => Xt([[0, 1], [0, 5]]), () => 6).add(Xt, () => Xt([[0, 1], [0, 5]], 0), () => E([0, 6])).add(Xt, () => Xt([[0, 1], [0, 5]], 1), () => E([1, 5])).add(Xt, () => Xt([10], null, null, null, 5), () => 15).add(Xt, () => Xt(C(100).reshape(5, -1, 1).at(_("::-2"), _("2:7")), [0, -1]), () => E([126, 129, 132, 135, 138])).add(Xt, () => {
    let e = C(100);
    return e = e.at(_(20, -20)).reshape([2, 1, -1, 2]).at(_("..."), _("::-1")), Xt(e, [1, -2], null, !0, -99);
  }, () => E([[[[426, 411]]], [[[876, 861]]]])), l.add(Ct, () => Ct(1), () => 1).add(Ct, () => Ct([1]), () => 1).add(Ct, () => Ct([1, bt]), () => 1).add(Ct, () => Ct(E([[1, 2], [3, bt]])), () => 6).add(Ct, () => Ct(E([[1, 2], [3, bt]]), 0), () => E([3, 2])), l.add(Bt, () => Bt(1), () => 1).add(Bt, () => Bt([1]), () => 1).add(Bt, () => Bt([1, bt]), () => 1).add(Bt, () => Bt(E([[1, 1], [1, bt]])), () => 3).add(Bt, () => Bt(E([[1, 1], [1, bt]]), 0), () => E([2, 1])).add(Bt, () => Bt([1, bt, xt]), () => xt).add(Bt, () => Bt([1, bt, _t]), () => -xt), l.add(Jt, () => Jt(E([1, 2, 4, 7, 0])), () => E([1, 2, 3, -7])).add(Jt, () => Jt(E([1, 2, 4, 7, 0]), 2), () => E([1, 1, -10])).add(Jt, () => Jt(E([[1, 3, 6, 10], [0, 5, 6, 8]])), () => E([[2, 3, 4], [5, 1, 2]])).add(Jt, () => Jt(E([[1, 3, 6, 10], [0, 5, 6, 8]]), 1, 0), () => E([[-1, 2, 0, -2]])), l.add(Qt, () => Qt(E([1, 2, 4, 7, 0])), () => E([1, 2, 3, -7])).add(Qt, () => Qt(E([1, 2, 4, 7, 0]), E([88, 99]), -99), () => E([-99, 1, 2, 3, -7, 88, 99])).add(Qt, () => Qt([[1, 2, 4], [1, 6, 24]]), () => E([1, 2, -3, 5, 18])), l.add(_a, () => _a(E([-1.2, 1.2])), () => E([1.2, 1.2])), l.add($t, () => $t(C(30).reshape(2, 5, 1, -1, 1)).shape, () => E([[[[[0], [.8414709848078965], [.9092974268256817]]], [[[.1411200080598672], [-.7568024953079282], [-.9589242746631385]]], [[[-.27941549819892586], [.6569865987187891], [.9893582466233818]]], [[[.4121184852417566], [-.5440211108893698], [-.9999902065507035]]], [[[-.5365729180004349], [.4201670368266409], [.9906073556948704]]]], [[[[.6502878401571168], [-.2879033166650653], [-.9613974918795568]]], [[[-.7509872467716762], [.14987720966295234], [.9129452507276277]]], [[[.8366556385360561], [-.008851309290403876], [-.8462204041751706]]], [[[-.9055783620066238], [-.13235175009777303], [.7625584504796028]]], [[[.956375928404503], [.27090578830786904], [-.6636338842129675]]]]]).shape);
  const va = hn("bitwise_and", (e, t) => e & t),
    Ma = hn("bitwise_or", (e, t) => e | t),
    Na = hn("bitwise_xor", (e, t) => e ^ t),
    ka = un("bitwise_not", e => ~e),
    Ea = ka,
    Sa = hn("left_shift", (e, t) => e << t),
    qa = hn("right_shift", (e, t) => e >> t);
  l.add(Ea, () => Ea([13]), () => E([-14])), l.add(va, () => va(13, 17), () => 1).add(va, () => va([11, 7], [4, 25]), () => E([0, 1])).add(va, () => va(E([2, 5, 255]), E([3, 14, 16])), () => E([2, 4, 16])).add(va, () => va([!0, !0], [!1, !0]), () => E([!1, !0])), l.add(Ma, () => Ma([33, 4], 1), () => E([33, 5])), l.add(Na, () => {
    let e = [1, 2, 3],
      t = [4, 5, 6];
    return e = Na(e, t), t = Na(e, t), e = Na(e, t), [e, t];
  }, () => [[4, 5, 6], [1, 2, 3]]), l.add(Sa, () => Sa(5, [1, 2, 3]), () => E([10, 20, 40])), l.add(qa, () => qa(10, [1, 2, 3]), () => E([5, 2, 1]));
  const ja = hn("equal", (e, t) => e == t, {
      dtype: "boolean"
    }),
    Fa = hn("not_equal", (e, t) => e != t, {
      dtype: "boolean"
    }),
    Da = hn("less", (e, t) => e < t, {
      dtype: "boolean"
    }),
    Ta = hn("less_equal", (e, t) => e <= t, {
      dtype: "boolean"
    }),
    Ia = hn("greater", (e, t) => e > t, {
      dtype: "boolean"
    }),
    Oa = hn("greater_equal", (e, t) => e >= t, {
      dtype: "boolean"
    }),
    Ka = ja,
    Ua = Fa,
    Pa = Da,
    Ra = Ta,
    Ya = Ia,
    Va = Oa;
  function La(e, t, a = null, r = 1) {
    throw new Error();
  }
  function Ga(e, t, a = -1, r = a, n = a, s = a) {
    e = R(e), t = R(t), r = An(r, e.ndim), n = An(n, t.ndim), e = Oe(e, r, -1), t = Oe(t, n, -1);
    let l = e.shape.at(-1),
      i = t.shape.at(-1);
    if (2 != l && 3 != l || 2 != i && 3 != i) throw "incompatible dimensions for cross product (dimension must be 2 or 3)";
    let d = X(e.shape.slice(0, -1), t.shape.slice(0, -1));
    3 != e.shape.at(-1) && 3 != t.shape.at(-1) || (d = [...d, 3], s = An(s, d.length));
    let o,
      u,
      h,
      f,
      p,
      c,
      m,
      y,
      g,
      b = Y(d);
    if (o = e.at("...", 0), u = e.at("...", 1), 3 == e.shape.at(-1) && (h = e.at("...", 2)), f = t.at("...", 0), p = t.at("...", 1), 3 == t.shape.at(-1) && (c = t.at("...", 2)), 0 != b.ndim && 3 == b.shape.at(-1) && (m = b.at("...", 0), y = b.at("...", 1), g = b.at("...", 2)), 2 == e.shape.at(-1)) {
      if (2 == t.shape.at(-1)) return Ye(o, p, b), Ge(b, Ye(u, f), b), b;
      if (3 != t.shape.at(-1)) throw "b.shape.at(-1) != 3";
      Ye(u, c, m), Ye(o, c, y), Re(y, y), Ye(o, p, g), Ge(g, Ye(u, f), g);
    } else {
      if (3 != e.shape.at(-1)) throw "a.shape.at(-1) != 3";
      if (3 == t.shape.at(-1)) {
        Ye(u, c, m);
        let e = Ye(h, p);
        Ge(m, e, m), Ye(h, f, y), Ye(o, c, e), Ge(y, e, y), Ye(o, p, g), Ye(u, f, e), Ge(g, e, g);
      } else {
        if (2 != t.shape.at(-1)) throw "b.shape.at(-1) != 2";
        Ye(h, p, m), Re(m, m), Ye(h, f, y), Ye(o, p, g), Ge(g, Ye(u, f), g);
      }
    }
    return Oe(b, -1, s);
  }
  function Wa(e, t = null, a = 1, r = -1) {
    e = R(e);
    let {
      ndim: n
    } = e;
    r = An(r, n);
    let s = a;
    if (null != t) if (1 == (t = R(t)).ndim) {
      s = Jt(t);
      let e = Array(n).fill(1);
      e[r] = s.shape[0], s = s.reshape(e);
    } else s = Jt(t, null, r);
    let l,
      i = Array(n).fill(_()),
      d = Array(n).fill(_());
    return i[r] = _(1, null), d[r] = _(null, -1), l = Ke(e.get(i), e.get(d)), Ye(s, l, l), Ve(l, 2, l), Xt(l, r);
  }
  function Ha(e, t, a = "full") {
    if (e = ie(e), t = ie(t), 0 == e.size) throw "a cannot be empty";
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
    return "same" == a && (n = n.slice((t.size - 1) / 2 | 0, ((t.size - 1) / 2 | 0) + r)), E(n);
  }
  function Xa(e, t, a, r = null) {
    if (e = R(e), null == r) r = V(e);else if (!De(e.shape, r.shape)) throw "out shape does not match input shape";
    if ($(t) && $(a)) {
      let n = Yn(e.shape, e.strides)[Symbol.iterator]();
      for (let s of Yn(r.shape, r.strides)) r.data[s] = Math.min(Math.max(t, e.data[n.next().value]), a);
      return r;
    }
    t = I(t, e.shape), a = I(a, e.shape);
    let n = Yn(e.shape, e.strides)[Symbol.iterator](),
      s = Yn(t.shape, t.strides)[Symbol.iterator](),
      l = Yn(a.shape, a.strides)[Symbol.iterator]();
    for (let i of Yn(r.shape, r.strides)) r.data[i] = Math.min(Math.max(t.data[s.next().value], e.data[n.next().value]), a.data[l.next().value]);
    return r;
  }
  function Ca(e, t = -1, a = null) {
    e = R(e), null == t ? (e = ze(e), t = 0) : t = An(t, e.ndim);
    let r = V(e),
      n = Array(e.shape[t]),
      s = Array(e.shape[t]),
      l = (e, t) => n[e] - n[t],
      i = e.shape.slice();
    i[t] = 1;
    for (let d of U(i)) {
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
    e = R(e), null == t ? (e = ze(e), t = 0) : t = An(t, e.ndim);
    let r = V(e),
      n = Array(e.shape[t]),
      s = (e, t) => e - t,
      l = e.shape.slice();
    l[t] = 1;
    for (let i of U(l)) {
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
  function Ja(e, t, a, r = null, n = null, s = null) {
    if ([e, t, a] = [e, t, a].map(e => R(e)), 1 != t.ndim || 1 != a.ndim) throw "Data points must be 1-D sequences";
    if (t.shape[0] != a.shape[0]) throw "fp and xp are not of the same length";
    if (null != s) {
      e = Be(e, s);
      let r = Ca(t = Be(t, s));
      t = t.at(r), a = a.at(r), t = Ie([Ge(t.at(_(-1)), s), t, Ke(t.at(_(0, 1)), s)]), a = Ie([a.at(_(-1)), a, a.at(_(0, 1))]);
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
    return E(l).reshape(e.shape);
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
    if (1 != (e = "number" == typeof e ? C(e) : R(e)).ndim) throw "'p' must be 1-dimensional";
    if (0 == e.size) throw "'a' cannot be empty unless no samples are taken";
    if (null == r) r = Array(e.size).fill(1 / e.size);else {
      if (1 != (r = R(r)).ndim) throw "'p' must be 1-dimensional";
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
    if (Ne(r) < n) throw "Fewer non-zero entries in p than size";
    return E(ir(n, r, a).map(t => e[t])).reshape(t);
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
    return E(a).reshape(e);
  }
  l.add(ja, () => ja([0, 1, 3], C(3)), () => E([!0, !0, !1])).add(ja, () => ja(1, Z(1)), () => E([!0])).add(ja, () => ja(E([2, 4, 6]), E([2, 4, 2])), () => E([!0, !0, !1])), l.add(Fa, () => Fa([1, 2], [1, 3]), () => E([!1, !0])).add(Fa, () => Fa([1, 2], [[1, 3], [1, 4]]), () => E([[!1, !0], [!1, !0]])), l.add(Ta, () => Ta([4, 2, 1], [2, 2, 2]), () => E([!1, !0, !0])), l.add(Da, () => Da([1, 2], [2, 2]), () => E([!0, !1])), l.add(Oa, () => Oa([4, 2, 1], [2, 2, 2]), () => E([!0, !0, !1])), l.add(Ia, () => Ia([4, 2], [2, 2]), () => E([!0, !1])), l.add(Ga, () => Ga([1, 2, 3], [4, 5, 6]), () => E([-3, 6, -3])).add(Ga, () => Ga([1, 2], [4, 5, 6]), () => E([12, -6, -3])).add(Ga, () => Ga([1, 2, 0], [4, 5, 6]), () => E([12, -6, -3])).add(Ga, () => Ga([1, 2], [4, 5]), () => E(-3)).add(Ga, () => Ga(E([[1, 2, 3], [4, 5, 6]]), E([[4, 5, 6], [1, 2, 3]])), () => E([[-3, 6, -3], [3, -6, 3]])).add(Ga, () => Ga(E([[1, 2, 3], [4, 5, 6]]), E([[4, 5, 6], [1, 2, 3]]), void 0, void 0, void 0, 0), () => E([[-3, 3], [6, -6], [-3, 3]])).add(Ga, () => {
    let e = E([[1, 2, 3], [4, 5, 6], [7, 8, 9]]),
      t = E([[7, 8, 9], [4, 5, 6], [1, 2, 3]]);
    return [Ga(e, t), Ga(e, t, void 0, 0, 0)];
  }, () => [E([[-6, 12, -6], [0, 0, 0], [6, -12, 6]]), E([[-24, 48, -24], [-30, 60, -30], [-36, 72, -36]])]), l.add(Wa, () => Wa([1, 2, 3]), () => 4).add(Wa, () => Wa([1, 2, 3], [4, 6, 8]), () => 8).add(Wa, () => Wa([1, 2, 3], null, 2), () => 8).add(Wa, () => Wa([1, 2, 3], [8, 6, 4]), () => -8).add(Wa, () => Wa(C(6).reshape(2, 3), void 0, void 0, 0), () => E([1.5, 2.5, 3.5])).add(Wa, () => Wa(C(6).reshape(2, 3), void 0, void 0, 1), () => E([2, 8])), l.add(Ha, () => Ha([1, 2, 3], [0, 1, .5]), () => E([0, 1, 2.5, 4, 1.5])).add(Ha, () => Ha([1, 2, 3], [1, .5], "full"), () => E([1, 2.5, 4, 1.5])).add(Ha, () => Ha([1, 2, 3], [0, 1, .5], "same"), () => E([1, 2.5, 4])).add(Ha, () => Ha([1, 2, 3], [0, 1, .5], "valid"), () => E([2.5])), l.add(Xa, () => Xa(C(10), 1, 8), () => E([1, 1, 2, 3, 4, 5, 6, 7, 8, 8])).add(Xa, () => Xa(C(10), 8, 1), () => E([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).add(Xa, () => {
    let e = C(10);
    return [Xa(e, 3, 6, e), e];
  }, () => [E([3, 3, 3, 3, 4, 5, 6, 6, 6, 6]), E([3, 3, 3, 3, 4, 5, 6, 6, 6, 6])]).add(Xa, () => Xa(C(10), [3, 4, 1, 1, 1, 4, 4, 4, 4, 4], 8), () => E([3, 4, 2, 3, 4, 5, 6, 7, 8, 8])), Ca(E([[[0, 3], [2, 2], [2, 2]], [[8, 5], [4, 1], [6, -2]]]), 0), l.add(Ca, () => Ca([3, 1, 2]), () => E([1, 2, 0])).add(Ca, () => Ca(E([[0, 3], [2, 2]]), 0), () => E([[0, 1], [1, 0]])).add(Ca, () => Ca(E([[0, 3], [2, 2]]), 1), () => E([[0, 1], [0, 1]])).add(Ca, () => Ca(E([[[0, 3], [2, 2], [2, 2]], [[8, 5], [4, 1], [6, -2]]]), 0), () => E([[[0, 0], [0, 1], [0, 1]], [[1, 1], [1, 0], [1, 0]]])).add(Ca, () => Ca(E([[[0, 3], [2, 2], [2, 2]], [[8, 5], [4, 1], [6, -2]]]), 1), () => E([[[0, 1], [1, 2], [2, 0]], [[1, 2], [2, 1], [0, 0]]])).add(Ca, () => Ca(E([[[0, 3], [2, 2], [2, 2]], [[8, 5], [4, 1], [6, -2]]]), 2), () => E([[[0, 1], [0, 1], [0, 1]], [[1, 0], [1, 0], [1, 0]]])), l.add(Ba, () => Ba(E([[1, 4], [3, 1]])), () => E([[1, 4], [1, 3]])).add(Ba, () => Ba(E([[1, 4], [3, 1]]), null), () => E([1, 1, 3, 4])).add(Ba, () => Ba(E([[1, 4], [3, 1]]), 0), () => E([[1, 1], [3, 4]])), l.add(Ja, () => Ja(2.5, [1, 2, 3], [3, 2, 0]), () => 1).add(Ja, () => Ja(4.5, [6, 4, 5], [3, 2, 0]), () => 3).add(Ja, () => Ja([0, 1, 1.5, 2.5, 3.14], [1, 2, 3], [3, 2, 0]), () => E([3, 3, 2.5, 1, 0])).add(Ja, () => Ja([-180, -170, -185, 185, -10, -5, 0, 365], [190, -190, 350, -350], [5, 10, 3, 4], null, null, 360), () => E([7.5, 5, 8.75, 6.25, 3, 3.25, 3.5, 3.75]));
  const ur = or,
    hr = or;
  function fr(...e) {
    return or(e);
  }
  function pr(e, t = null, a = null, r = !0) {
    if (null != a) {
      if (!ne(a)) throw "output array must be contiguous";
      null == t && (t = a.shape);
    }
    let n;
    if (null == t) {
      if (r) return e();
      n = [], t = 1;
    } else "number" == typeof t ? n = [t] : (n = t, t = M(n));
    if (null == a) a = Y(n);else if (!De(n, a.shape)) throw "size must match out.shape when used together";
    let {
      data: s,
      offset: l
    } = a;
    for (let a = 0; a < t; a++) s[l + a] = e();
    return a;
  }
  class cr {
    constructor(e = Math.random) {
      this.rand = e;
    }
    integers(e, t = null, a = null, r = !1) {
      null == t && (t = e, e = 0);
      let n = t - e;
      return r && (n += 1), pr(() => this.rand() * n + e | 0, a);
    }
    random(e = null, t = null) {
      return pr(() => this.rand(), e, t);
    }
    choice(e, t = null, a = !0, r = null, n = 0) {
      if ("number" == typeof e) {
        if (e <= 0) throw "a must be a positive integer unless no samples are taken";
        e = C(e);
      } else if (0 == (e = R(e)).size) throw "a cannot be empty unless no samples are taken";
      if (null == r) r = Array(e.shape[n]).fill(1 / e.shape[n]);else {
        if (1 != (r = R(r)).ndim) throw "p must be 1-dimensional";
        if (r.size != e.shape[n]) throw "a and p must have same size";
        r = r.toarray();
      }
      let s = Array(n).fill(_());
      if (null == t) return s[n] = ir(1, r, void 0, void 0, void 0, this.rand)[0], e._getview(s).copy();
      let l = t;
      if ("number" == typeof t && (l = [t]), t = M(l), r.length < t) throw "Cannot take a larger sample than population when replace is false";
      if (Ne(r) < t) throw "Fewer non-zero entries in p than size";
      let i = [...e.shape];
      i.splice(n, 1, ...l);
      let d = Array(n).fill(_()),
        o = Y(i),
        u = ir(t, r, a, void 0, void 0, this.rand),
        h = 0;
      for (let t of U(l)) {
        for (let e = 0; e < t.length; e++) d[n + e] = t[e];
        s[n] = u[h++], o.set(d, e._getview(s));
      }
      return o;
    }
    shuffle(e, t = 0) {
      t = An(t, (e = R(e)).ndim);
      let a = Array(t + 1).fill(_(":")),
        {
          shape: r
        } = e,
        n = r[t],
        s = Y([...r.slice(0, t), ...r.slice(t + 1)]);
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
      t = An(t, (e = R(e)).ndim);
      let r = [...e.shape];
      r[t] = 1, null == a && (a = V(e));
      for (let n of U(r)) {
        n[t] = _();
        let r = e._getview(n).flatten();
        this.shuffle(r), a.set(n, r);
      }
      return a;
    }
    permutation(e, t = 0) {
      return e = "number" == typeof e ? C(e) : E(e), this.shuffle(e, t), e;
    }
    uniform(e = 0, t = 1, a = null) {
      return pr(() => this.rand() * (t - e) + e, a);
    }
    normal(e = 0, t = 1, a = null) {
      return pr(() => {
        let a = this.rand(),
          r = this.rand(),
          n = Math.sqrt(-2 * Math.log(a)) * Math.cos(2 * Math.PI * r);
        return e + t * n;
      }, a);
    }
  }
  const mr = new cr();
  function yr(e, t = null, a = null) {
    if (null == t && null == a) return _e(e);
    let r = ue(e, t, a),
      n = Y(r.shape),
      s = 0;
    for (let [e, t, a] of r) n.data[s++] = e ? t : a;
    return n;
  }
  function gr(...e) {
    let t = [];
    for (let a = 0; a < e.length; a++) {
      let {
          start: r,
          stop: n,
          step: s,
          slicelength: l
        } = e[a].indices(),
        i = Array(l);
      for (let e = 0; e < l; e++) i[e] = r + e * s;
      let d = Array(e.length).fill(1);
      d[a] = l, t.push(E(i).reshape(d));
    }
    return t;
  }
  function br(e, t = null, a = null, r = !1) {
    e = R(e), null == t ? (e = ze(e), t = 0) : t = An(t, e.ndim);
    let n = [...e.shape.slice(0, t), ...(r ? [1] : []), ...e.shape.slice(t + 1)];
    if (null == a) a = Y(n);else if (!De(n, a.shape)) throw "out must have the same shape as the expected output";
    return Ge(ya(e, t, null, r), ga(e, t, null, r), a), a;
  }
  function wr(e, t = null, a = null, r = !1, n = !1) {
    let s;
    if (e = R(e), null == t ? (e = ze(e), t = 0) : t = An(t, e.ndim), null != a && (a = R(a)), null != a) {
      if (s = Xt(a), 0 == s) throw "sum(weights) must not be 0";
      if (1 == a.ndim) a = a.reshape([...Array(t).fill(1), e.shape[t]]);else if (!De(a.shape, e.shape)) throw "weights.shape and a.shape do not match";
      e = Ye(e, a);
    } else s = e.shape[t];
    let l = Ve(Xt(e, t, null, n), s);
    return r ? [l, s] : l;
  }
  function xr(e, t = null, a = null, r = !1) {
    e = R(e), null == t ? (e = ze(e), t = 0) : t = An(t, e.ndim);
    let n = [...e.shape.slice(0, t), ...(r ? [1] : []), ...e.shape.slice(t + 1)];
    if (null == a) a = Y(n);else if (!De(n, a.shape)) throw "out must have the same shape as the expected output";
    return Ve(Xt(e, t, null, r), e.shape[t], a), a;
  }
  function _r(e, t = null, a = null, r = 0, n = !1) {
    e = R(e), null == t ? (e = ze(e), t = 0) : t = An(t, e.ndim);
    let s = [...e.shape.slice(0, t), ...(n ? [1] : []), ...e.shape.slice(t + 1)];
    if (null == a) a = Y(s);else if (!De(s, a.shape)) throw "out must have the same shape as the expected output";
    return xr(xa(Ge(e, Ve(Xt(e, t, null, !0), e.shape[t] - r))), t, a, n), a;
  }
  function $r(e, t = null, a = null, r = 0, n = !1) {
    return a = _r(e, t, a, r, n), ba(a, a), a;
  }
  function Ar(e, t = null, a = 0) {
    if (1 != (e = R(e)).ndim) throw "a.dim != 1";
    if (ga(e) < 0) throw "amin(a) < 0";
    if (a < 0) throw "minlength < 0";
    if (null != t) {
      if (!De((t = R(t)).shape, e.shape)) throw "weights.shape != a.shape";
      t = t.toarray();
    }
    let r = Array(Math.max(ya(e) + 1, a)).fill(0),
      n = 0;
    for (let a of e.flat) r[a] += null != t ? t[n] : 1, n++;
    return E(r);
  }
  function zr(e, t = !1) {
    let a,
      r = e.length,
      n = Array(r).fill(1);
    a = t ? [] : Y([r, ...e]);
    for (let r = 0; r < e.length; r++) {
      let s = e[r],
        l = C(s).reshape([...n.slice(0, r), s, ...n.slice(r + 1)]);
      t ? a.push(l) : a.set([r], l);
    }
    return a;
  }
  function vr(...e) {
    let t = [],
      a = e.length;
    for (let r = 0; r < a; r++) {
      let n = e[r];
      n = R(n), n.ndim, "boolean" == typeof n.item(0) && ([n] = _e(n)), n = n.reshape([...Array(r).fill(1), n.size, ...Array(a - r - 1).fill(1)]), t.push(n);
    }
    return t;
  }
  function Mr(e, t, a = !1, r = !1, n = "table") {
    throw new Error();
  }
  function Nr(e, t = null, a = "big") {
    e = R(e), null == t ? (e = ze(e), t = 0) : t = An(t, e.ndim);
    let r = e.shape.slice();
    r[t] = Math.ceil(r[t] / 8);
    let n = Y(r),
      s = e.shape.slice();
    s[t] = 1;
    let l = Array(8 * r[t]);
    for (let r of U(s)) {
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
  function kr(e, t = null, a = null, r = "big") {
    e = R(e), null == t ? (e = ze(e), t = 0) : t = An(t, e.ndim);
    let n = 0,
      s = 8;
    null != a && (a < 0 ? n = 8 - a : s = a);
    let l = e.shape.slice();
    l[t] = l[t] * (s - n);
    let i = Y(l),
      d = Array(8);
    for (let a of U(e.shape)) {
      let {
          offset: l
        } = e,
        {
          offset: o
        } = i;
      for (let t = 0; t < e.shape.length; t++) l += a[t] * e.strides[t], o += a[t] * i.strides[t];
      Er(e.data[l], d, r);
      for (let e = n, a = 0; e < s; e++, a++) i.data[o + a * i.strides[t]] = d[e];
    }
    return i;
  }
  function Er(e, t = [], a = "big") {
    if ("big" == a) for (let a = 7; a >= 0; a--) t[a] = e % 2, e = e / 2 | 0;else for (let a = 0; a <= 7; a++) t[a] = e % 2, e = e / 2 | 0;
    return t;
  }
  function Sr(e, t = 0, a = null) {
    if (0 == (e = e.map(e => R(e))).length) throw "need at least one array to stack";
    for (let t = 1; t < e.length; t++) if (!De(e[0], e[t])) throw "all input arrays must have the same shape";
    t = An(t, e[0].ndim + 1);
    let r = [...Array(t).fill(y.colon), y.newaxis];
    return Ie(e.map(e => e.get(r)), t, a);
  }
  function qr(e) {
    return e = de(...e), Array.isArray(e) || (e = [e]), Ie(e, 0);
  }
  function jr(e) {
    return e = ie(...e), Array.isArray(e) || (e = [e]), e.length > 0 && 1 == e[0].ndim ? Ie(e, 0) : Ie(e, 1);
  }
  function Fr(e) {
    return e = oe(...e), Array.isArray(e) || (e = [e]), Ie(e, 2);
  }
  function Dr(e) {
    let t = [];
    for (let a of e) a = R(a), a.ndim < 2 && (a = E(a, null, !1, 2).T), t.push(a);
    return Ie(t, 1);
  }
  function Tr(e) {
    return e = de(...e), Array.isArray(e) || (e = [e]), Ie(e, 0);
  }
  function Ir(e, t, a = 0) {
    let r, n, s;
    if (null != e.shape ? (a = An(a, e.ndim), r = e.shape[a]) : r = e.length, "number" == typeof t) {
      if (n = 0 | t, n <= 0) throw "number sections must be larger than 0.";
      let e = r / n | 0,
        a = r % n;
      s = E([0, ...Array(a).fill(e + 1), ...Array(n - a).fill(e)]).cumsum().array();
    } else n = t.length + 1, s = [0, ...t, r];
    let l = [],
      i = se(e, a, 0);
    for (let e = 0; e < n; e++) {
      let t = s[e],
        r = s[e + 1];
      l.push(se(i.at(_(t, r)), a, 0));
    }
    return l;
  }
  function Or(e, t, a = 0) {
    if (a = An(a, (e = R(e)).ndim), null != t.shape && (t = t.array()), null == t.length) {
      let r = t;
      if (e.shape[a] % r) throw "array split does not result in an equal division";
    }
    return Ir(e, t, a);
  }
  function Kr(e, t) {
    if (ce(e) < 3) throw "dsplit only works on arrays of 3 or more dimensions";
    return Or(e, t, 2);
  }
  function Ur(e, t) {
    if (0 == ce(e)) throw "hsplit only works on arrays of 1 or more dimensions";
    return Or(e, t, ce(e) > 1 ? 1 : 0);
  }
  function Pr(e, t) {
    if (ce(e) < 2) throw "vsplit only works on arrays of 2 or more dimensions";
    return Or(e, t, 0);
  }
  function Rr(e, t, a = null) {
    e = R(e), null == a ? (e = ze(e), a = 0) : a = An(a, e.ndim);
    let r = e.shape.slice(),
      n = "number" == typeof t;
    if (n) r[a] *= t;else if (1 == t.length) t = t[0], r[a] *= t, n = !0;else {
      if (r[a] != t.length) throw `operands could not be broadcast together with shape (${r[a]},) (${t.length},)`;
      r[a] = t.reduce((e, t) => e + t);
    }
    let s = Y(r),
      l = s.strides.slice();
    l.splice(a, 1);
    let i = e.shape.slice();
    i.splice(a, 1);
    let d = e.strides.slice();
    d.splice(a, 1);
    let o = r[a];
    for (let r of U(i)) {
      let i = 0,
        u = 0;
      for (let e = 0; e < r.length; e++) i += r[e] * d[e], u += r[e] * l[e];
      let h = 0;
      for (let r = 0; r < o; r++) {
        let l = e.data[i + r * e.strides[a]],
          d = n ? t : t[r];
        for (let e = 0; e < d; e++, h++) s.data[u + h * s.strides[a]] = l;
      }
    }
    return s.astype(e.dtype);
  }
  function Yr(e, t) {
    "number" == typeof t && (t = [t]);
    let a = t.length;
    if (t.every(e => 1 == e) && e instanceof z) return E(e, e.dtype, !0, a);
    let r = E(e, e.dtype, !1, a);
    a < r.ndim && (t = [...Array(r.ndim - a).fill(1), ...t]);
    let n = r.shape.map((e, a) => e * t[a]),
      s = r.size;
    if (s > 0) {
      let {
        ndim: e,
        shape: a
      } = r;
      for (let n = 0; n < e; n++) {
        let e = a[n],
          l = t[n];
        1 != l && (r = r.reshape(-1, s).repeat(l, 0)), s = s / e | 0;
      }
    }
    return r.reshape(n);
  }
  function Vr(e, t = 0, a = 0, r = 1) {
    e = R(e);
    let {
      ndim: n
    } = e;
    if (n < 2) throw "array.ndim must be >= 2";
    a = An(a, n), r = An(r, n);
    let s = Array(n);
    s[n - 2] = a, s[n - 1] = r;
    for (let e = 0, t = 0; e < n; e++) e != a && e != r && (s[t++] = e);
    let l,
      i,
      d = (e = le(e, s)).shape[n - 2],
      o = e.shape[n - 1],
      u = o + 1;
    t < 0 ? (l = -o * t, i = Math.min(o, d + t) * (o + 1) - o * t) : (l = t, i = Math.min(d, o - t) * (o + 1) + t);
    let h = Math.ceil((i - l) / u);
    return e.as_strided([...e.shape.slice(0, -2), h], [...e.strides.slice(0, -2), u * e.strides[n - 1]], e.offset + l);
  }
  function Lr(e, t = 0) {
    let a = (e = R(e)).shape;
    if (1 == a.length) {
      let r = a[0] + Math.abs(t),
        n = te([r, r]),
        s = t >= 0 ? t : -t * r,
        l = n.at(_(null, r - t));
      for (let t = 0; t < e.size; t++, s += r + 1) l.itemset(s, e.item(t));
      return n;
    }
    if (2 != a.length) throw "Input must be 1- or 2-d.";
    return Vr(e, t);
  }
  function Gr(e, t = null) {
    let a;
    if (e = R(e), null == t) a = Array(e.ndim).fill(_("::-1"));else {
      t = Ee(t, e.ndim), a = Array(e.ndim).fill(_(":"));
      for (let e of t) a[e] = _("::-1");
    }
    return e.get(a);
  }
  function Wr(e) {
    if ((e = R(e)).ndim < 2) throw "Input must be >= 2-d.";
    return e.get(Br(":", "::-1"));
  }
  function Hr(e) {
    if ((e = R(e)).ndim < 1) throw "Input must be >= 1-d.";
    return e.at(_("::-1"));
  }
  l.add(yr, () => {
    let e = C(10);
    return yr(Da(e, 5), e, Ye(10, e));
  }, () => E([0, 1, 2, 3, 4, 50, 60, 70, 80, 90])).add(yr, () => yr([[!0, !1], [!0, !0]], [[1, 2], [3, 4]], [[9, 8], [7, 6]]), () => E([[1, 8], [3, 4]])).add(yr, () => {
    let [e, t] = gr(_(":3"), _(null, 4));
    return yr(Da(e, t), e, Ke(10, t));
  }, () => E([[10, 0, 0, 0], [10, 11, 1, 1], [10, 11, 12, 2]])).add(yr, () => {
    let e = E([[0, 1, 2], [0, 2, 4], [0, 3, 6]]);
    return yr(Da(e, 4), e, -1);
  }, () => E([[0, 1, 2], [0, 2, -1], [0, 3, -1]])), l.add(gr, () => gr(_("0:5"), _("0:5")), () => [E([[0], [1], [2], [3], [4]]), E([[0, 1, 2, 3, 4]])]).add(gr, () => gr(_("3:5"), _("0:-5"), _("0:1")), () => [E([[[3]], [[4]]]), E([]).reshape([1, 0, 1]), E([[[0]]])]), l.add(br, () => br(E([[4, 9, 2, 10], [6, 9, 7, 12]]), 1), () => E([8, 6])).add(br, () => br(E([[4, 9, 2, 10], [6, 9, 7, 12]]), 0), () => E([2, 0, 5, 2])).add(br, () => br(E([[4, 9, 2, 10], [6, 9, 7, 12]])), () => 10).add(br, () => br(Le(C(10, 40), 2).reshape(5, 2, 3), 0, null, !0), () => E([[[1056, 1104, 1152], [1200, 1248, 1296]]])), l.add(wr, () => wr(C(1, 5)), () => 2.5).add(wr, () => wr(C(1, 11), void 0, C(10, 0, -1)), () => 4).add(wr, () => wr(C(6).reshape(3, 2), 1, [1 / 4, 3 / 4]), () => E([.75, 2.75, 4.75])).add(wr, () => wr(C(6).reshape(3, 2), 1, void 0, void 0, !0), () => E([[.5], [2.5], [4.5]])), l.add(xr, () => xr(E([[1, 2], [3, 4]])), () => 2.5).add(xr, () => xr(E([[1, 2], [3, 4]]), 0), () => E([2, 3])).add(xr, () => xr(E([[1, 2], [3, 4]]), 1), () => E([1.5, 3.5])), l.add(_r, () => _r(E([[1, 2], [3, 4]])), () => 1.25).add(_r, () => _r(E([[1, 2], [3, 4]]), 0), () => E([1, 1])).add(_r, () => _r(E([[1, 2], [3, 4]]), 1), () => E([.25, .25])), l.add($r, () => $r(E([[1, 2], [3, 4]])), () => 1.118033988749895).add($r, () => $r(E([[1, 2], [3, 4]]), 0), () => E([1, 1])).add($r, () => $r(E([[1, 2], [3, 4]]), 1), () => E([.5, .5])), l.add(Ar, () => Ar(C(5)), () => E([1, 1, 1, 1, 1])).add(Ar, () => Ar(E([0, 1, 1, 3, 2, 1, 7])), () => E([1, 3, 1, 1, 0, 0, 0, 1])).add(Ar, () => Ar(E([0, 1, 1, 2, 2, 2]), E([.3, .5, .2, .7, 1, -.6])), () => E([.3, .7, 1.1])), l.add(zr, () => zr([2, 3]), () => E([[[0, 0, 0], [1, 1, 1]], [[0, 1, 2], [0, 1, 2]]])).add(zr, () => zr([2, 3], !0), () => [E([[0], [1]]), E([[0, 1, 2]])]), l.add(vr, () => vr([0, 1], [2, 4]), () => [E([[0], [1]]), E([[2, 4]])]).add(vr, () => vr([!0, !0], [2, 4]), () => [E([[0], [1]]), E([[2, 4]])]).add(vr, () => vr([!0, !0], [!1, !1, !0, !1, !0]), () => [E([[0], [1]]), E([[2, 4]])]), l.add(Nr, () => Nr(E([[[1, 0, 1], [0, 1, 0]], [[1, 1, 0], [0, 0, 1]]]), -1), () => E([[[160], [64]], [[192], [32]]])).add(Nr, () => Nr(E([[[1, 0, 1], [0, 1, 0]], [[1, 1, 0], [0, 0, 1]]])), () => E([171, 16])).add(Nr, () => Nr(E([[[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]]), -1), () => E([[[160, 0]]])), l.add(kr, () => kr(E([[2], [7], [23]]), 1), () => E([[0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 1, 0, 1, 1, 1]])).add(kr, () => {
    let e = E([[0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 1, 0, 1, 1, 1]]),
      t = Nr(e, 0);
    return [kr(t, 0), je(e, kr(t, 0, e.shape[0]))];
  }, () => [E([[0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 1, 0, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]), !0]), l.add(Sr, () => Sr(Array(10).fill().map(() => mr.normal(0, 1, [3, 4])), 0).shape, () => [10, 3, 4]).add(Sr, () => Sr(Array(10).fill().map(() => mr.normal(0, 1, [3, 4])), 1).shape, () => [3, 10, 4]).add(Sr, () => Sr(Array(10).fill().map(() => mr.normal(0, 1, [3, 4])), 2).shape, () => [3, 4, 10]).add(Sr, () => Sr([E([1, 2, 3]), E([4, 5, 6])]), () => E([[1, 2, 3], [4, 5, 6]])).add(Sr, () => Sr([E([1, 2, 3]), E([4, 5, 6])], -1), () => E([[1, 4], [2, 5], [3, 6]])), l.add(qr, () => qr([E([1, 2, 3]), E([4, 5, 6])]), () => E([[1, 2, 3], [4, 5, 6]])).add(qr, () => qr([E([[1], [2], [3]]), E([[4], [5], [6]])]), () => E([[1], [2], [3], [4], [5], [6]])), l.add(jr, () => jr([E([1, 2, 3]), E([4, 5, 6])]), () => E([1, 2, 3, 4, 5, 6])).add(jr, () => jr([E([[1], [2], [3]]), E([[4], [5], [6]])]), () => E([[1, 4], [2, 5], [3, 6]])), l.add(Fr, () => Fr([E([1, 2, 3]), E([2, 3, 4])]), () => E([[[1, 2], [2, 3], [3, 4]]])).add(Fr, () => Fr([E([[1], [2], [3]]), E([[2], [3], [4]])]), () => E([[[1, 2]], [[2, 3]], [[3, 4]]])), l.add(Dr, () => Dr([E([1, 2, 3]), E([2, 3, 4])]), () => E([[1, 2], [2, 3], [3, 4]])), l.add(Tr, () => Tr([E([1, 2, 3]), E([4, 5, 6])]), () => E([[1, 2, 3], [4, 5, 6]])).add(Tr, () => Tr([E([[1], [2], [3]]), E([[4], [5], [6]])]), () => E([[1], [2], [3], [4], [5], [6]])), l.add(Ir, () => Ir(C(8), 3), () => [E([0, 1, 2]), E([3, 4, 5]), E([6, 7])]).add(Ir, () => Ir(C(9), 4), () => [E([0, 1, 2]), E([3, 4]), E([5, 6]), E([7, 8])]), l.add(Or, () => Or(C(9), 3), () => [E([0, 1, 2]), E([3, 4, 5]), E([6, 7, 8])]).add(Or, () => Or(C(8), [3, 5, 6, 10]), () => [E([0, 1, 2]), E([3, 4]), E([5]), E([6, 7]), E([])]), l.add(Kr, () => Kr(C(16).reshape(2, 2, 4), 2), () => [E([[[0, 1], [4, 5]], [[8, 9], [12, 13]]]), E([[[2, 3], [6, 7]], [[10, 11], [14, 15]]])]).add(Kr, () => Kr(C(16).reshape(2, 2, 4), E([3, 6])), () => [E([[[0, 1, 2], [4, 5, 6]], [[8, 9, 10], [12, 13, 14]]]), E([[[3], [7]], [[11], [15]]]), Y([2, 2, 0])]), l.add(Ur, () => Ur(C(16).reshape(4, 4), 2), () => [E([[0, 1], [4, 5], [8, 9], [12, 13]]), E([[2, 3], [6, 7], [10, 11], [14, 15]])]).add(Ur, () => Ur(C(16).reshape(4, 4), E([3, 6])), () => [E([[0, 1, 2], [4, 5, 6], [8, 9, 10], [12, 13, 14]]), E([[3], [7], [11], [15]]), Y([4, 0])]).add(Ur, () => Ur(C(8).reshape(2, 2, 2), 2), () => [E([[[0, 1]], [[4, 5]]]), E([[[2, 3]], [[6, 7]]])]).add(Ur, () => Ur(E([0, 1, 2, 3, 4, 5]), 2), () => [E([0, 1, 2]), E([3, 4, 5])]), l.add(Pr, () => Pr(C(16).reshape(4, 4), 2), () => [E([[0, 1, 2, 3], [4, 5, 6, 7]]), E([[8, 9, 10, 11], [12, 13, 14, 15]])]).add(Pr, () => Pr(C(16).reshape(4, 4), E([3, 6])), () => [E([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]]), E([[12, 13, 14, 15]]), Y([0, 4])]).add(Pr, () => Pr(C(8).reshape(2, 2, 2), 2), () => [E([[[0, 1], [2, 3]]]), E([[[4, 5], [6, 7]]])]), l.add(Rr, () => Rr(3, 4), () => E([3, 3, 3, 3])).add(Rr, () => Rr(E([[1, 2], [3, 4]]), 2), () => E([1, 1, 2, 2, 3, 3, 4, 4])).add(Rr, () => Rr(E([[1, 2], [3, 4]]), 3, 1), () => E([[1, 1, 1, 2, 2, 2], [3, 3, 3, 4, 4, 4]])).add(Rr, () => Rr(E([[1, 2], [3, 4]]), [1, 2], 0), () => E([[1, 2], [3, 4], [3, 4]])), l.add(Yr, () => {
    let e = E([0, 1, 2]);
    return [Yr(e, 2), Yr(e, [2, 2]), Yr(e, [2, 1, 2])];
  }, () => [E([0, 1, 2, 0, 1, 2]), E([[0, 1, 2, 0, 1, 2], [0, 1, 2, 0, 1, 2]]), E([[[0, 1, 2, 0, 1, 2]], [[0, 1, 2, 0, 1, 2]]])]).add(Yr, () => {
    let e = E([[1, 2], [3, 4]]);
    return [Yr(e, 2), Yr(e, [2, 1])];
  }, () => [E([[1, 2, 1, 2], [3, 4, 3, 4]]), E([[1, 2], [3, 4], [1, 2], [3, 4]])]).add(Yr, () => Yr(E([1, 2, 3, 4]), [4, 1]), () => E([[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]])), l.add(Vr, () => Vr(C(4).reshape(2, 2)), () => E([0, 3])).add(Vr, () => Vr(C(4).reshape(2, 2), 1), () => E([1])).add(Vr, () => Vr(C(8).reshape(2, 2, 2), 0, 0, 1), () => E([[0, 6], [1, 7]])).add(Vr, () => Vr(C(8).reshape(2, 2, 2).at(_(":"), _(":"), 0), 0, 0, 1), () => E([0, 6])).add(Vr, () => Vr(C(8).reshape(2, 2, 2).at(_(":"), _(":"), 1), 0, 0, 1), () => E([1, 7])).add(Vr, () => {
    let e = C(8);
    return Vr(e.reshape(2, 2, 2), 0, 0, 1).set(-1), e;
  }, () => E([-1, -1, 2, 3, 4, 5, -1, -1])), l.add(Lr, () => Lr(C(9).reshape([3, 3])), () => E([0, 4, 8])).add(Lr, () => Lr(C(9).reshape([3, 3]), 1), () => E([1, 5])).add(Lr, () => Lr(C(9).reshape([3, 3]), -1), () => E([3, 7])).add(Lr, () => Lr(Lr(C(9).reshape([3, 3]))), () => E([[0, 0, 0], [0, 4, 0], [0, 0, 8]])), l.add(Gr, () => {
    let e = C(8).reshape([2, 2, 2]);
    return [e, Gr(e, 0), Gr(e, 1), Gr(e), Gr(e, [0, 2])];
  }, () => [E([[[0, 1], [2, 3]], [[4, 5], [6, 7]]]), E([[[4, 5], [6, 7]], [[0, 1], [2, 3]]]), E([[[2, 3], [0, 1]], [[6, 7], [4, 5]]]), E([[[7, 6], [5, 4]], [[3, 2], [1, 0]]]), E([[[5, 4], [7, 6]], [[1, 0], [3, 2]]])]).add(Gr, () => {
    let e = mr.normal(0, 1, [3, 4, 5]);
    return ut(ja(Gr(e, 2), e.at(_(":"), _(":"), _("::-1"), _("..."))));
  }, () => !0), l.add(Wr, () => Wr(Lr([1, 2, 3])), () => E([[0, 0, 1], [0, 2, 0], [3, 0, 0]])).add(Wr, () => {
    let e = mr.normal(0, 1, [2, 4, 5]);
    return ut(ja(Wr(e), e.at(_(":"), _("::-1"), _("..."))));
  }, () => !0), l.add(Hr, () => Hr(Lr([1, 2, 3])), () => E([[0, 0, 3], [0, 2, 0], [1, 0, 0]])).add(Hr, () => {
    let e = mr.normal(0, 1, [2, 3, 5]);
    return ut(ja(Hr(e), e.at(_("::-1"), _("..."))));
  }, () => !0).add(Hr, () => Hr([1, 2]), () => E([2, 1]));
  let Xr = e => "number" == typeof e || e instanceof y ? e : _(e);
  const Cr = Symbol("tupleType");
  function Br(...e) {
    let t = e.map(Xr);
    return t[Cr] = !0, t;
  }
  function Jr(...e) {
    return 1 == e.length ? Xr(e[0]) : Br(...e);
  }
  function Qr(e, t, a, r = "raise") {
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
      s = a.length;
    for (let e = 0; e < t.length; e++) n.set(t[e], a[e % s]);
  }
  function Zr(e, t) {
    "number" == typeof t && (t = [t]), e = ze(e);
    let a = 1;
    for (let e of t) {
      if (e < 0) throw "all elements of 'new_shape' must be non-negative";
      a *= e;
    }
    if (0 == e.size || 0 == a) return te(t);
    let r = Math.ceil(a / e.size);
    return G(e = Ie(Array(r).fill(e)).at(_(0, a)), t);
  }
  function en(e, t, a = "left") {
    e instanceof z && (e = e.array());
    let r = V(t = R(t)),
      n = 0,
      s = "left" == a ? tn : an;
    for (let a of t.flat) r.data[n++] = s(e, a);
    return r;
  }
  function tn(e, t) {
    let a = 0,
      r = e.length - 1;
    for (; a <= r;) {
      let n = a + r >> 1;
      e[n] < t ? a = n + 1 : r = n - 1;
    }
    return a;
  }
  function an(e, t) {
    let a = 0,
      r = e.length - 1;
    for (; a <= r;) {
      let n = a + r >> 1;
      e[n] > t ? r = n - 1 : a = n + 1;
    }
    return a;
  }
  function rn(e, t, a = null) {
    if (e = R(e), null == a) return rn(e.ravel(), t, 0).reshape(e.shape);
    {
      let r = ue(t, a = Ee(a, e.ndim, !0));
      if (r.ndim > 1) throw new Error("'shift' and 'axis' should be scalars or 1D sequences");
      let n = Array(e.ndim).fill(0);
      for (let [e, t] of r) n[t] += e;
      let s = Array(e.ndim).fill([[_(null), _(null)]]);
      for (let [t, a] of n.entries()) a %= e.shape[t] || 1, a && (s[t] = [[_(null, -a), _(a, null)], [_(-a, null), _(null, a)]]);
      let l = V(e);
      for (let t of new nn(s)) {
        let a = t.map(e => e[0]),
          r = t.map(e => e[1]);
        l.set(r, e.get(a));
      }
      return l;
    }
  }
  l.add(Jr, () => C(8).reshape(2, 2, -1).get(Jr(0, [0, -1], "::-1")), () => E([[1, 0]])), l.add(Qr, () => {
    let e = C(5);
    return Qr(e, [0, 2], [-44, -55]), e;
  }, () => E([-44, 1, -55, 3, 4])).add(Qr, () => {
    let e = C(5);
    return Qr(e, 22, -5, "clip"), e;
  }, () => E([0, 1, 2, 3, -5])), l.add(Zr, () => Zr(E([[0, 1], [2, 3]]), [2, 3]), () => E([[0, 1, 2], [3, 0, 1]])).add(Zr, () => Zr(E([[0, 1], [2, 3]]), [1, 4]), () => E([[0, 1, 2, 3]])).add(Zr, () => Zr(E([[0, 1], [2, 3]]), [2, 4]), () => E([[0, 1, 2, 3], [0, 1, 2, 3]])), l.add(en, () => en([1, 2, 3, 4, 5], 3), () => 2).add(en, () => en([1, 2, 3, 4, 5], 3, "right"), () => 3).add(en, () => en([1, 2, 3, 4, 5], [-10, 10, 2, 3]), () => E([0, 5, 1, 2]));
  class nn {
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
        s = a - 1,
        l = !0;
      e: for (; s >= 0;) switch (r[s]) {
        case 1:
          s--;
          break;
        case t[s]:
          t[s--] = 0, l = !0;
          break;
        default:
          if (!l) break e;
          t[s] += 1, l = !1;
      }
      return this.index++, this.done = this.index >= this.size, {
        value: n,
        done: !1
      };
    }
  }
  function sn(e, t) {
    return cn(t, e);
  }
  function ln(e, t) {
    return yn(t, e, axis);
  }
  function dn(e) {
    let t = Object.create(null);
    return (...a) => t[a] ?? (t[a] = e(...a));
  }
  function on(e, t, ...a) {
    return t = t.bind(null, ...a), Object.defineProperty(t, "name", {
      value: e
    }), t;
  }
  function un(e, t, a = null) {
    return Object.defineProperty(cn.bind(a, t), "name", {
      value: e
    });
  }
  function hn(e, t, a = null) {
    return Object.defineProperty(mn.bind(a, t), "name", {
      value: e
    });
  }
  function fn(e, t, a = undefined) {
    return Object.defineProperty(yn.bind({
      defaultinitial: a
    }, t), "name", {
      value: e
    });
  }
  function pn(e, t, a = null) {
    return Object.defineProperty(gn.bind(a, t), "name", {
      value: e
    });
  }
  function cn(e, t, a = null, r = this?.dtype) {
    return t = R(t), null == a ? a = Y(t.shape, r) : t = I(t, a.shape), bn(a.ndim)(e, t, a), a;
  }
  function mn(e, t, a, r = null, n = this?.dtype) {
    let s;
    return t = R(t), a = R(a), null == r ? (s = X(t.shape, a.shape), r = Y(s, n)) : s = r.shape, t = I(t, s), a = I(a, s), wn(r.ndim)(e, t, a, r), r;
  }
  function yn(e, t, a = null, r = null, n = !1, s = this?.defaultinitial, l = !0, i = this?.dtype) {
    let d = $n(a, (t = R(t)).ndim),
      o = [],
      u = [];
    for (let e = 0; e < d.length; e++) d[e] ? u.push(1) : (o.push(t.shape[e]), u.push(t.shape[e]));
    if (null == r) r = Y(o, i);else if (!De(o, r.shape)) throw new Error("unmatch shape");
    let h = r.reshape(u);
    return n && (r = h), xn(t.ndim, d)(e, t, h, s), l && 0 == r.ndim ? r.item() : r;
  }
  function gn(e, t, a = null, r = null, n = this?.dtype) {
    t = R(t), null == a && (t = ze(t));
    let s = $n(a, t.ndim);
    if (null == r) r = Y(t.shape, n);else if (!De(t.shape, r.shape)) throw new Error("unmatch shape");
    return _n(t.ndim, s)(e, t, r), r;
  }
  function bn(e) {
    if (0 == e) return new Function("fn", "x", "out", "\nout.data[out.offset] = fn(x.data[x.offset]);\n");
    let t = (t, a = ", ") => [...Array(e).keys()].map(e => t.replaceAll("$", e)).join(a);
    return new Function("fn", "x", "out", `\nlet { data, strides, offset, shape } = out;\nlet [${t("d_$")}] = shape;\nlet [${t("s_$")}] = strides;\nlet { data: x_data, strides: x_strides, offset: x_offset } = x;\nlet [${t("x_$")}] = x_strides;\n${t("for (let i_$ = 0; i_$ < d_$; i_$++)", " ")} {\n\tdata[offset + ${t("i_$ * s_$", " + ")}] = fn(x_data[x_offset + ${t("i_$ * x_$", " + ")}]);\n}\n`);
  }
  function wn(e) {
    if (0 == e) return new Function("fn", "x1", "x2", "out", "\nout.data[out.offset] = fn(x1.data[x1.offset], x2.data[x2.offset]);\n");
    let t = (t, a = ", ") => [...Array(e).keys()].map(e => t.replaceAll("$", e)).join(a);
    return new Function("fn", "x1", "x2", "out", `\nlet { data, strides, offset, shape } = out;\nlet [${t("d_$")}] = shape;\nlet [${t("s_$")}] = strides;\nlet { data: x1_data, strides: x1_strides, offset: x1_offset } = x1;\nlet { data: x2_data, strides: x2_strides, offset: x2_offset } = x2;\nlet [${t("x1_$")}] = x1_strides;\nlet [${t("x2_$")}] = x2_strides;\n${t("for (let i_$ = 0; i_$ < d_$; i_$++)", " ")} {\n\tdata[offset + ${t("i_$ * s_$", " + ")}] = fn(\n\t\tx1_data[x1_offset + ${t("i_$ * x1_$", " + ")}],\n\t\tx2_data[x2_offset + ${t("i_$ * x2_$", " + ")}]\n\t);\n}\n`);
  }
  function xn(e, t) {
    if (0 == e) return new Function("fn", "x", "out", "initial", "\nout.data[out.offset] = initial != undefined ? fn(initial, x.data[x.offset]) : x.data[x.offset];\n");
    let a = (t, a = ", ", r = [...Array(e).keys()]) => r.map(e => t.replaceAll("$", e)).join(a),
      r = [...Array(e).keys()].filter(e => !t[e]),
      n = [...Array(e).keys()].filter(e => t[e]);
    return new Function("fn", "x", "out", "initial", `\nlet { data, strides, offset } = out;\nlet [${a("s_$")}] = strides;\nlet { data: x_data, strides: x_strides, offset: x_offset, shape } = x;\nlet [${a("d_$")}] = shape;\nlet [${a("x_$")}] = x_strides;\n\nlet use_initial = initial != undefined;\n${a("for (let i_$ = 0; i_$ < d_$; i_$++)", " ", r)} {\n\tlet startOffset = x_offset${r.length ? " + " : ""}${a("i_$ * x_$", " + ", r)};\n\tlet first = !use_initial;\n\tlet accum = initial;\n\t${a("for (let i_$ = 0; i_$ < d_$; i_$++)", " ", n)} {\n\t\tif (first) {\n\t\t\tfirst = false;\n\t\t\taccum = x_data[startOffset];\n\t\t} else {\n\t\t\taccum = fn(accum, x_data[startOffset + ${a("i_$ * x_$", " + ", n)}]);\n\t\t}\n\t}\n\tdata[offset${r.length ? " + " : ""}${a("i_$ * s_$", " + ", r)}] = accum;\n}\n`);
  }
  function _n(e, t) {
    if (0 == e) return new Function("fn", "x", "out", "initial", "\nout.data[out.offset] = initial != undefined ? fn(initial, x.data[x.offset]) : x.data[x.offset];\n");
    let a = (t, a = ", ", r = [...Array(e).keys()]) => r.map(e => t.replaceAll("$", e)).join(a),
      r = [...Array(e).keys()].filter(e => !t[e]),
      n = [...Array(e).keys()].filter(e => t[e]);
    return new Function("fn", "x", "out", "initial", `\nlet { data, strides, offset } = out;\nlet [${a("s_$")}] = strides;\nlet { data: x_data, strides: x_strides, offset: x_offset, shape } = x;\nlet [${a("d_$")}] = shape;\nlet [${a("x_$")}] = x_strides;\n\n${a("for (let i_$ = 0; i_$ < d_$; i_$++)", " ", r)} {\n\tlet first = true;\n\tlet accum = x_data[x_offset${r.length ? " + " : ""}${a("i_$ * x_$", " + ", r)}];\n\t${a("for (let i_$ = 0; i_$ < d_$; i_$++)", " ", n)} {\n\t\tif (first) {\n\t\t\tfirst = false;\n\t\t} else {\n\t\t\taccum = fn(accum, x_data[x_offset + ${a("i_$ * x_$", " + ")}]);\n\t\t}\n\t\tdata[offset + ${a("i_$ * s_$", " + ")}] = accum;\n\t}\n}\n`);
  }
  function $n(e, t, a = !1) {
    if (null == e) return Array(t).fill(!0);
    "object" != typeof e && (e = [+e]);
    let r = Array(t).fill(!1);
    for (let n of e) {
      if (n = An(n, t), !a && r[n]) throw new Error("repeated axis");
      r[n] = !0;
    }
    return r;
  }
  function An(e, t) {
    let a = e;
    if (e = +e, !Number.isInteger(e)) throw new Error(`${a} cannot be cast to integer`);
    if (e < 0 && (e += t), e < 0 || t <= e) throw new Error(`axis ${a} is out of bounds for array of dimension ${t}`);
    return e;
  }
  function zn(e, t, a = null) {
    e = R(e), t = R(t), vn(e.ndim > 0, "x1 does not have enough dimensions"), vn(t.ndim > 0, "x2 does not have enough dimensions");
    let r = 1 == e.ndim,
      n = 1 == t.ndim,
      s = r || n;
    if (r && (e = e.at(null, _(":"))), n && (t = t.at(_(":"), null)), 2 == e.ndim && 2 == t.ndim) {
      vn(e.shape[1] == t.shape[0], "input shape mismatch");
      let l = [e.shape[0], t.shape[1]],
        i = s ? l.slice(r ? 1 : 0, n ? -1 : void 0) : l;
      null == a ? a = Y(i) : vn(De(i, a.shape), "out shape mismatch");
      let d = s ? a.reshape(l) : a,
        o = t.T;
      for (let [t, a] of U(l)) d.set([t, a], Mn(e.at(t), o.at(a)));
      return a;
    }
    let l = X(e.shape.slice(0, -2), t.shape.slice(0, -2));
    e = I(e, [...l, ...e.shape.slice(-2)]), t = I(t, [...l, ...t.shape.slice(-2)]), vn(e.shape.at(-1) == t.shape.at(-2), "input shape mismatch");
    let i = e.shape.at(-2),
      d = t.shape.at(-1),
      o = [...l, i, d];
    null == a ? a = Y(o) : vn(De(o, a.shape), "out shape mismatch");
    for (let r of U(l)) zn(e.get(r), t.get(r), a.get(r));
    return a;
  }
  function vn(e, t) {
    if (!e) throw new Error(t);
  }
  function Mn(e, t, a = null) {
    if (e = R(e), t = R(t), 1 == e.ndim && 1 == t.ndim) return Xt(Ye(e, t), 0, a);
    if (2 == e.ndim && 2 == t.ndim) return zn(e, t, a);
    if (0 == e.ndim || 0 == t.ndim) return Ye(e, t, a);
    if (1 == t.ndim) {
      vn(e.shape.at(-1) == t.shape[0], `shapes ${e.shape} and ${t.shape} not aligned`);
      let r = e.shape.slice(0, -1);
      null == a ? a = Y(r) : vn(De(r, a.shape), "out shape mismatch");
      for (let n of U(r)) Mn(e.get(n), t, a.at(_("..."), ...n));
      return a;
    }
  }
  function Nn(e, t = null) {
    t = null != t ? Object.assign(Object.create(Sn), t) : Sn;
    let {
      separator: a,
      prefix: r
    } = t;
    return 0 == e.size ? "[]" : function (e, t = Sn, a = " ", r = "") {
      let n,
        s = R(e);
      0 == e.ndim && (e = s), e.size > t.threshold ? (n = "...", s = qn(s, t.edgeitems)) : n = "";
      let l = function (e, t) {
          let a = function (e, t) {
              let a = {
                  int: () => new Fn(e).__call__,
                  float: () => new In(e, t.precision).__call__,
                  object: () => On
                },
                {
                  formatter: r
                } = t;
              if (null != r) for (let e of Object.keys(r)) a[e] = Kn(r[e]);
              return a;
            }(e, t),
            r = e.flat.copy().data,
            n = q(r),
            s = c(n) == c("number") ? function (e) {
              for (let t of e) if (!Number.isInteger(t)) return !1;
              return !0;
            }(r) ? "int" : "float" : "object";
          return a[s](t);
        }(s, t),
        i = " " + " ".repeat(r.length),
        d = function (e, t, a, r, n, s, l, i) {
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
              g = l && 2 * s < y;
            g ? (c = s, m = s) : (c = 0, m = y);
            let b = "";
            if (1 === h) {
              let e,
                t = n.trimEnd().length;
              e = i <= 113 ? o - t : o - Math.max(t, "]".length);
              let s = r;
              for (let t = 0; t < c; t++) {
                let l = d([...a, t], p, f);
                [b, s] = Pn(b, s, l, e, r, i), s += n;
              }
              g && ([b, s] = Un(b, s, l, e, r, i), s += i <= 113 ? ", " : n);
              for (let t = m; t > 1; t--) {
                let l = d([...a, -t], p, f);
                [b, s] = Pn(b, s, l, e, r, i), s += n;
              }
              i <= 113 && (e = o);
              let u = d([...a, -1], p, f);
              [b, s] = Pn(b, s, u, e, r, i), b += s;
            } else {
              b = "";
              let e = n.trimEnd() + "\n".repeat(h - 1);
              for (let t = 0; t < c; t++) b += r + d([...a, t], p, f) + e;
              g && (b += r + l, b += i <= 113 ? ", \n" : e);
              let t = m;
              for (; t > 1; t--) b += r + d([...a, -t], p, f) + e;
              b += r + d([...a, -t], p, f);
            }
            return b = "[" + b.slice(r.length) + "]", b;
          }
          try {
            return d([], r, a);
          } finally {
            d = null;
          }
        }(e, l, t.linewidth, i, a, t.edgeitems, n, t.legacy);
      return d;
    }(e, t, a, r);
  }
  function kn(e, t = null, a = null) {
    return t ??= Sn.linewidth, a ??= Sn.precision, 0 == e.ndim ? `${e.item()}` : Nn(e, {
      linewidth: t,
      precision: a
    });
  }
  function En(e, t = null, a = null) {
    if (t ??= Sn.linewidth, a ??= Sn.precision, 0 == e.ndim) return `${e.item()}`;
    let r,
      n = e instanceof z ? "array" : typeof e,
      s = function (e) {
        return ["number", "boolean"].includes(e.name);
      }(e.dtype) && e.size > 0,
      l = n + "(",
      i = s ? ")" : ",";
    r = e.size > 0 || De(e.shape, [0]) ? Nn(e, {
      linewidth: t,
      precision: a,
      separator: ", ",
      prefix: l
    }) : `[], shape=[${e.shape.join(", ")}]`;
    let d = l + r + i;
    if (s) return d;
    let o = `dtype=${e.dtype.name})`,
      u = " ";
    return d.length - (d.lastIndexOf("\n") + 1) + o.length + 1 > t && (u = "\n" + " ".repeat((n + "(").length)), d + u + o;
  }
  l.add(rn, () => [...function* () {
    let e = C(10);
    yield rn(e, 2), yield rn(e, -2);
    let t = e.reshape([2, 5]);
    yield t, yield rn(t, 1), yield rn(t, -1), yield rn(t, 1, 0), yield rn(t, -1, 0), yield rn(t, 1, 1), yield rn(t, -1, 1), yield rn(t, [1, 1], [1, 0]), yield rn(t, [2, 1], [1, 0]);
  }()], () => [...function* () {
    yield E([8, 9, 0, 1, 2, 3, 4, 5, 6, 7]), yield E([2, 3, 4, 5, 6, 7, 8, 9, 0, 1]), yield E([[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]]), yield E([[9, 0, 1, 2, 3], [4, 5, 6, 7, 8]]), yield E([[1, 2, 3, 4, 5], [6, 7, 8, 9, 0]]), yield E([[5, 6, 7, 8, 9], [0, 1, 2, 3, 4]]), yield E([[5, 6, 7, 8, 9], [0, 1, 2, 3, 4]]), yield E([[4, 0, 1, 2, 3], [9, 5, 6, 7, 8]]), yield E([[1, 2, 3, 4, 0], [6, 7, 8, 9, 5]]), yield E([[9, 5, 6, 7, 8], [4, 0, 1, 2, 3]]), yield E([[8, 9, 5, 6, 7], [3, 4, 0, 1, 2]]);
  }()]), bn = dn(bn), wn = dn(wn), xn = dn(xn), _n = dn(_n), l.onload(() => {
    Y(100).reshape(10, 10);
  }), l.add(sn, () => sn(C(10).reshape(-1, 2), e => e ** 2), () => Le(C(10).reshape(-1, 2), 2)), l.add(ln, () => yn((e, t) => e * t, C(120).reshape(2, 3, 4, 5), [1, 3], null, !1), () => Ht(C(120).reshape(2, 3, 4, 5), [1, 3])), l.add(ln, () => gn((e, t) => e * t, C(120).reshape(2, 3, 4, 5), [1, 3], null), () => Cn(C(120).reshape(2, 3, 4, 5), [1, 3])), l.add(zn, () => zn(E([[1, 0], [0, 1]]), E([[4, 1], [2, 2]])), () => E([[4, 1], [2, 2]])).add(zn, () => {
    let e = E([[1, 0], [0, 1]]),
      t = E([1, 2]);
    return [zn(e, t), zn(t, e)];
  }, () => [E([1, 2]), E([1, 2])]).add(zn, () => zn(C(16).reshape([2, 2, 4]), C(16).reshape([2, 4, 2])), () => E([[[28, 34], [76, 98]], [[428, 466], [604, 658]]])), l.add(Mn, () => Mn(3, 4), () => 12).add(Mn, () => Mn([[1, 2], [3, 4]], [4, 1]), () => E([6, 16])).add(Mn, () => Mn([[1, 0], [0, 1]], [[4, 1], [2, 2]]), () => E([[4, 1], [2, 2]]));
  let Sn = {
    edgeitems: 3,
    threshold: 1e3,
    linewidth: 75,
    precision: void 0,
    formatter: null,
    separator: " ",
    prefix: ""
  };
  function qn(e, t, a = []) {
    let r = a.length;
    if (r == e.ndim) return e.get(a);
    if (e.shape[r] > 2 * t) {
      let n = a.concat(Br([, t])),
        s = a.concat(Br([-t]));
      return Ie([qn(e, t, n), qn(e, t, s)], r);
    }
    return qn(e, t, a.concat(Br(":")));
  }
  class jn {
    get __call__() {
      return this.call.bind(null, this);
    }
  }
  class Fn extends jn {
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
  function Dn(e, t) {
    return e.toExponential(t);
  }
  function Tn(e, t) {
    return null != t ? e.toFixed(t) : String(e);
  }
  class In extends jn {
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
      if (this.exp_format) for (let a of e.flat) r = Math.max(r, Dn(a, t).length);else for (let a of e.flat) r = Math.max(r, Tn(a, t).length);
      this.padLeft = r;
    }
    call({
      padLeft: e,
      exp_format: t,
      precision: a
    } = this, r) {
      let n = t ? Dn(r, a) : Tn(r, a);
      return " ".repeat(e - n.length) + n;
    }
  }
  function On(e) {
    return "string" == typeof e ? `'${e}'` : `${e}`;
  }
  let Kn = e => () => e;
  function Un(e, t, a, r, n, s) {
    let l = t.length + a.length > r;
    return s > 113 && t.length <= n.length && (l = !1), l && (e += t.trimEnd() + "\n", t = n), [e, t += a];
  }
  function Pn(e, t, a, r, n, s) {
    let l = a.split(/\r?\n/);
    if (1 === l.length || s <= 113) return Un(e, t, a, r, n, s);
    let i,
      d = Math.max(...l.map(e => e.length));
    t.length + d > r && t.length > n.length ? (e += t.trimEnd() + "\n", t = n + l[0], i = n) : (i = " ".repeat(t.length), t += l[0]);
    for (let a = 1; a < l.length; a++) e += t.trimEnd() + "\n", t = i + l[a];
    let o = d - l.at(-1).length;
    return [e, t += " ".repeat(o)];
  }
  l.add(Nn, () => Nn(C(2520).reshape(3, 4, 210)), () => "[[[   0    1    2 ...  207  208  209]\n  [ 210  211  212 ...  417  418  419]\n  [ 420  421  422 ...  627  628  629]\n  [ 630  631  632 ...  837  838  839]]\n\n [[ 840  841  842 ... 1047 1048 1049]\n  [1050 1051 1052 ... 1257 1258 1259]\n  [1260 1261 1262 ... 1467 1468 1469]\n  [1470 1471 1472 ... 1677 1678 1679]]\n\n [[1680 1681 1682 ... 1887 1888 1889]\n  [1890 1891 1892 ... 2097 2098 2099]\n  [2100 2101 2102 ... 2307 2308 2309]\n  [2310 2311 2312 ... 2517 2518 2519]]]").add(Nn, () => Nn(E([.1, 100, 50, -9e3])), () => "[ 1e-1  1e+2  5e+1 -9e+3]").add(Nn, () => Nn(E([1.1, 100.2, 50.6])), () => "[  1.1 100.2  50.6]"), l.add(En, () => En(E([1.1, 100.2, 50.6])), () => "array([  1.1, 100.2,  50.6])").add(En, () => "" + E([1.1, 100.2, 50.6]), () => "array([  1.1, 100.2,  50.6])");
  class Rn {
    constructor(e, t, a) {
      this.ndim = e.length, this.size = M(e), this.shape = e, this.strides = t;
      let r = Array(this.ndim);
      for (let a = 0; a < this.ndim; a++) r[a] = e[a] * t[a];
      this.dim_strides = r, this.initial = a, this.offset, this.coords = Array(this.ndim), this.index, this.done, this[Symbol.iterator]();
    }
    [Symbol.iterator]() {
      return this.index = 0, this.done = 0 == this.size, this.coords.fill(0), this.offset = this.initial, this;
    }
    next() {
      if (this.done) return {
        done: !0
      };
      let {
        offset: e,
        coords: t,
        size: a,
        index: r
      } = this;
      if (0 != r) {
        let {
            shape: a,
            strides: r,
            ndim: n,
            dim_strides: s
          } = this,
          l = n - 1,
          i = !0;
        for (; l >= 0;) {
          let n = a[l];
          if (1 == n) l--;else if (n == t[l]) e -= s[l], t[l--] = 0, i = !0;else {
            if (!i) break;
            e += r[l], t[l]++, i = !1;
          }
        }
        this.offset = e;
      }
      return this.done = ++this.index >= a, {
        value: e,
        done: !1
      };
    }
  }
  function Yn(e, t, a = 0) {
    return new Rn(e, t, a);
  }
  l.add(Yn, () => {
    let e = C(100);
    e = e.at(_(20, -20)).reshape([2, 1, -1, 2]).at(_("..."), _("::-1"));
    let t = [];
    for (let a of Yn(e.shape, e.strides)) t.push(e.data[e.offset + a]);
    return t;
  }, () => [21, 20, 23, 22, 25, 24, 27, 26, 29, 28, 31, 30, 33, 32, 35, 34, 37, 36, 39, 38, 41, 40, 43, 42, 45, 44, 47, 46, 49, 48, 51, 50, 53, 52, 55, 54, 57, 56, 59, 58, 61, 60, 63, 62, 65, 64, 67, 66, 69, 68, 71, 70, 73, 72, 75, 74, 77, 76, 79, 78]);
  class Vn extends Rn {
    constructor(e) {
      let {
        shape: t,
        strides: a,
        offset: r
      } = e;
      super(t, a, r), this.base = e;
    }
    next() {
      return this.done ? {
        done: !0
      } : {
        value: this.base.data[super.next().value],
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
      if ("number" == typeof e) return E(r.item(e), r.dtype);
      "string" == typeof e && (e = _(e)), e instanceof y ? (t = e.indices(r.size), a = Y([t.slicelength], r.dtype)) : (t = R(e).flat, a = V(e));
      let n = 0;
      for (let e of t) a.data[n++] = r.item(e);
      return a;
    }
    set(e, t) {
      let {
        base: a
      } = this;
      if ("number" == typeof e) return a.itemset(e, t), this;
      "string" == typeof e && (e = _(e)), t = t instanceof Vn ? [...t] : R(t).flatten().data;
      let r = e instanceof y ? e.indices(a.size) : R(e).flat,
        n = 0;
      for (let e of r) a.itemset(e, t[n++ % t.length]);
      return this;
    }
    copy() {
      return this.base.flatten();
    }
  }
  function Ln(e) {
    return e = R(e), new Gn(e);
  }
  l.add("Flatiter", () => {
    let e = E([0, 1, 2, 3, 4, 5]).reshape(2, 3),
      t = new Vn(e),
      a = [];
    for (let e of t) a.push(e);
    return a;
  }, () => [0, 1, 2, 3, 4, 5]), l.add("Flatiter.get", () => new Vn(E([[1, 2, 3], [4, 5, 6]])).at(3), () => 4).add("Flatiter.get", () => new Vn(E([[1, 2, 3], [4, 5, 6]])).at(_(2, -2)), () => E([3, 4])).add("Flatiter.get", () => new Vn(E([[1, 2, 3], [4, 5, 6]])).get([3, 4, -1]), () => [4, 5, 6]), l.add("Flatiter.set", () => {
    let e = E([[3, 3, 3], [3, 3, 3]]);
    return new Vn(e).set([1, -1], [[1], [2]]), e;
  }, () => [[3, 1, 3], [3, 3, 2]]).add("Flatiter.set", () => {
    let e = E([[1, 2, 3], [4, 5, 6]]);
    return e.flat.set([1, 0, 1], [[1, 2, 3], [5, 6, 7]]), e;
  }, () => E([[2, 3, 3], [4, 5, 6]])).add("Flatiter.set", () => {
    let e = E([[1, 2, 3], [4, 5, 6]]);
    return e.flat.set(_(1, -1), [[1, 2, 3], [5, 6, 7]]), e;
  }, () => E([[1, 1, 2], [3, 5, 6]])).add("Flatiter.set", () => {
    let e = E([[1, 2, 3], [4, 5, 6]]);
    return e.flat.set(":", [[1, 2]]), e;
  }, () => E([[1, 2, 1], [2, 1, 2]])), l.add("Flatiter.copy", () => new Vn(E([0, 1, 2, 3, 4, 5]).reshape(2, 3).at(_([,, -1]))).copy(), () => [3, 4, 5, 0, 1, 2]);
  class Gn extends Vn {
    constructor(e) {
      super(e);
    }
    next() {
      if (this.done) return {
        done: !0
      };
      let e = super.next().value;
      return {
        value: [this.coords, e],
        done: !1
      };
    }
  }
  function Wn(e, t) {
    e = R(e);
    let a = t.length,
      r = M(t),
      n = Y([].concat(e.shape, a)),
      s = 0;
    for (let l of e.flat) {
      if (l < 0 || l >= r) throw new Error(`index ${l} is out of bounds for array with size ${r}`);
      for (let e = a; e--;) n.data[s + e] = l % t[e], l = l / t[e] | 0;
      s += a;
    }
    let l = Array(a).fill().map((e, t) => t).map(e => n.at("...", e));
    return l;
  }
  function Hn(e, t, a = "raise") {
    let r = R(e).T;
    if (r = de(r), "raise" == a) {
      if (ht(Da(r, 0)) || ht(Ia(r, t))) throw new Error(`index is out of bounds for array with shape ${t}`);
    } else if ("wrap" == a) r = Be(Ke(Be(r, t), t), t);else {
      if ("clip" != a) throw new Error(`unsupported mode '${a}'`);
      r = Xa(r, te(t.length), Ge(t, 1));
    }
    let n = Y(T(e).slice(1)),
      s = Ie([Cn(t.slice(1).reverse()).at("::-1"), [1]]),
      l = 0;
    for (let e of r) n.itemset(l++, Xt(Ye(e, s)));
    return n;
  }
  function Xn(e, t = {}) {
    console.log(e.toString());
  }
  l.add(Ln, () => {
    {
      let e;
      e = E([[1, 2], [3, 4]]);
      let t = [];
      for (let [a, r] of Ln(e)) t.push(a.slice(), r);
      return t;
    }
  }, () => [[0, 0], 1, [0, 1], 2, [1, 0], 3, [1, 1], 4]), l.add(Wn, () => Wn([22, 41, 37], [7, 6]), () => [E([3, 6, 6]), E([4, 5, 1])]).add(Wn, () => Wn(1621, [6, 7, 8, 9]), () => [3, 1, 4, 1]), l.add(Hn, () => Hn(E([[3, 6, 6], [4, 5, 1]]), [7, 6]), () => E([22, 41, 37])).add(Hn, () => Hn([[3, 6, 6], [4, 5, 1]], [4, 6], "clip"), () => E([22, 23, 19])).add(Hn, () => Hn(E([[3, 6, 6], [4, 5, 1]]), [4, 4], "wrap"), () => E([12, 9, 9])).add(Hn, () => Hn([3, 1, 4, 1], [6, 7, 8, 9]), () => 1621);
  const Cn = pn("cumprod", (e, t) => e * t),
    Bn = pn("cumsum", (e, t) => e + t);
  let Jn = e => Number.isNaN(e) ? 1 : e;
  const Qn = pn("nancumprod", (e, t) => Jn(e) * Jn(t));
  let Zn = e => Number.isNaN(e) ? 0 : e;
  const es = pn("nancumsum", (e, t) => Zn(e) + Zn(t));
  function ts(e, t, a = 1e-5, r = 1e-8, n = !1) {
    e = R(e), t = R(t);
    let s = ft(e),
      l = ft(t);
    if (ut(s) && ut(l)) return as(e, t, r, a);
    [e, t] = O(e, t);
    let i = at(s, l),
      d = it(i),
      o = ae(i);
    if (o.set([i], as(e.at(i), t.at(i), r, a)), o.set([d], ja(e.at(d), t.at(d))), n) {
      let a = at(ct(e), ct(t));
      o.set([a], a.at(a));
    }
    return o;
  }
  function as(e, t, a, r) {
    return Ta(_a(Ge(e, t)), Ke(a, Ye(r, _a(t))));
  }
  function rs(e, t, a = 1e-5, r = 1e-8, n = !1) {
    return ut(ts(e, t, a, r, n));
  }
  function ns(e, t) {
    return ds(ls(e), t);
  }
  function ss(e) {
    let t = e.length,
      a = Array(t).fill().map(() => Array(t).fill(0));
    for (let e = 0; e < t; e++) a[e][e] = 1;
    for (let r = 0; r < t; r++) {
      let n = 0,
        s = -1;
      for (let a = r; a < t; a++) {
        let t = Math.abs(e[a][r]);
        t > n && (s = a, n = t);
      }
      if (s != r) {
        for (let e = 0; e < t; e++) [a[e][r], a[e][s]] = [a[e][s], a[e][r]];
        [e[r], e[s]] = [e[s], e[r]];
      }
      for (let a = r + 1; a < t; a++) {
        let n = e[a][r] /= e[r][r];
        for (let s = r + 1; s < t; s++) e[a][s] -= n * e[r][s];
      }
    }
    let r = Array(t).fill().map(() => Array(t).fill(0)),
      n = Array(t).fill().map(() => Array(t).fill(0));
    for (let a = 0; a < t; a++) {
      r[a][a] = 1;
      for (let s = 0; s < t; s++) s < a ? r[a][s] = e[a][s] : n[a][s] = e[a][s];
    }
    return [a, r, n];
  }
  function ls(e) {
    let [t, a] = [e.length, e[0].length],
      [r, n] = is(e.flat(), t, a);
    return r = G(r, [t, a]).array(), [r, n];
  }
  function is(e, t, a) {
    let r = e.slice(),
      n = Array(a);
    for (let e = 0; e < a; e++) {
      let s = -1,
        l = -1;
      for (let n = e; n < t; n++) {
        let t = Math.abs(r[n * a + e]);
        t > s && (l = n, s = t);
      }
      if (-1 != l) {
        if (n[e] = l, l != e) for (let t = 0; t < a; t++) {
          let n = e * a + t,
            s = l * a + t,
            i = r[n];
          r[n] = r[s], r[s] = i;
        }
        for (let n = e + 1; n < t; n++) {
          let t = r[n * a + e] /= r[e * a + e];
          for (let s = e + 1; s < a; s++) r[n * a + s] -= t * r[e * a + s];
        }
      } else n[e] = e;
    }
    return [r, n];
  }
  function ds(e, t) {
    let [a, r] = e,
      n = a.length,
      s = t.slice();
    for (let e = 0; e < n; e++) r[e] !== e && ([s[e], s[r[e]]] = [s[r[e]], s[e]]);
    for (let e = 0; e < n; e++) for (let t = 0; t < e; t++) s[e] -= a[e][t] * s[t];
    for (let e = n - 1; e >= 0; e--) {
      for (let t = e + 1; t < n; t++) s[e] -= a[e][t] * s[t];
      s[e] /= a[e][e];
    }
    return s;
  }
  function os(e, t, a = 0) {
    e = R(e);
    let r = [],
      n = [],
      s = [];
    for (let e of t) if (null == e) s.push(null), r.push(!1);else if ("string" == typeof e) s.push(_(e)), r.push(!1);else if (e instanceof y) s.push(e), r.push(!1);else if (e = R(e), e.dtype == p("boolean")) for (let t of e.nonzero()) n.push(t.shape), s.push(t), r.push(!0);else n.push(e.shape), s.push(e), r.push(!0);
    let l = r.length,
      i = X(...n);
    for (let e = 0; e < l; e++) r[e] && (s[e] = I(s[e], i));
    let d = !0,
      o = -1;
    for (let e = 0; e < l; e++) if (r[e]) {
      if (-1 === o) o = e;else if (e !== o + 1) {
        d = !1;
        break;
      }
      o = e;
    }
    let u = [],
      h = [];
    if (d) {
      for (let t = 0; t < l;) if (r[t]) a += t, h.push(...i), t = o + 1;else {
        let a = s[t].indices(e.shape[t]).slicelength;
        u.push(a), h.push(a), t++;
      }
    } else {
      h.push(...i);
      for (let t = 0; t < l; t++) if (!r[t]) if (null == s[t]) u.push(1), h.push(1);else {
        let a = s[t].indices(e.shape[t]).slicelength;
        u.push(a), h.push(a);
      }
    }
    for (let t = l; t < e.ndim; t++) {
      let a = e.shape[t];
      h.push(a), u.push(a);
    }
    return new us(e, i, s, a, h);
  }
  l.add(Cn, () => Cn(0), () => E([0])).add(Cn, () => Cn([]), () => E([])).add(Cn, () => Cn(E([1, 2, 3])), () => E([1, 2, 6])).add(Cn, () => Cn(E([[1, 2, 3], [4, 5, 6]])), () => E([1, 2, 6, 24, 120, 720])).add(Cn, () => Cn(E([[1, 2, 3], [4, 5, 6]]), 0), () => E([[1, 2, 3], [4, 10, 18]])).add(Cn, () => Cn(E([[1, 2, 3], [4, 5, 6]]), 1), () => E([[1, 2, 6], [4, 20, 120]])), l.add(Bn, () => Bn(E([[1, 2, 3], [4, 5, 6]])), () => E([1, 3, 6, 10, 15, 21])).add(Bn, () => Bn(E([[1, 2, 3], [4, 5, 6]]), 0), () => E([[1, 2, 3], [5, 7, 9]])).add(Bn, () => Bn(E([[1, 2, 3], [4, 5, 6]]), 1), () => E([[1, 3, 6], [4, 9, 15]])), l.add(Qn, () => Qn(1), () => E([1])).add(Qn, () => Qn([1]), () => E([1])).add(Qn, () => Qn([1, NaN]), () => E([1, 1])).add(Qn, () => Qn(E([[1, 2], [3, NaN]])), () => E([1, 2, 6, 6])).add(Qn, () => Qn(E([[1, 2], [3, NaN]]), 0), () => E([[1, 2], [3, 2]])).add(Qn, () => Qn(E([[1, 2], [3, NaN]]), 1), () => E([[1, 2], [3, 3]])), l.add(es, () => es(1), () => E([1])).add(es, () => es([1]), () => E([1])).add(es, () => es([1, NaN]), () => E([1, 1])).add(es, () => es(E([[1, 2], [3, NaN]])), () => E([1, 3, 6, 6])).add(es, () => es(E([[1, 2], [3, NaN]]), 0), () => E([[1, 2], [4, 2]])).add(es, () => es(E([[1, 2], [3, NaN]]), 1), () => E([[1, 3], [3, 3]])), l.add(ts, () => ts([1e10, 1e-7], [100001e5, 1e-8]), () => [!0, !1]).add(ts, () => ts([1e10, 1e-8], [100001e5, 1e-9]), () => [!0, !0]).add(ts, () => ts([1e10, 1e-8], [10001e6, 1e-9]), () => [!1, !0]).add(ts, () => ts([1, NaN], [1, NaN]), () => [!0, !1]).add(ts, () => ts([1, NaN], [1, NaN], void 0, void 0, !0), () => [!0, !0]).add(ts, () => ts([1e-8, 1e-7], [0, 0]), () => [!0, !1]).add(ts, () => ts([1e-100, 1e-7], [0, 0], void 0, 0), () => [!1, !1]).add(ts, () => ts([1e-10, 1e-10], [1e-20, 0]), () => [!0, !0]).add(ts, () => ts([1e-10, 1e-10], [1e-20, 999999e-16], void 0, 0), () => [!1, !0]), l.add(ls, () => {
    let [e, t] = ls([[2, 5, 8, 7], [5, 2, 2, 8], [7, 5, 6, 6], [5, 4, 4, 8]]);
    return [rs(e, [[7, 5, 6, 6], [.28571429, 3.57142857, 6.28571429, 5.28571429], [.71428571, .12, -1.04, 3.08], [.71428571, -.44, -.46153846, 7.46153846]]), rs(t, [2, 2, 3, 3])];
  }, () => [!0, !0]), l.add(ns, () => rs(ns([[3, 2, 0], [1, -1, 0], [0, 5, 1]], [2, 4, -1]), [2, -2, 9]), () => !0).add(ns, () => rs(ns([[1, 2], [3, 5]], [1, 2]), [-1, 1]), () => !0), l.add(ds, () => {
    let [e, t] = ls([[2, 5, 8, 7], [5, 2, 2, 8], [7, 5, 6, 6], [5, 4, 4, 8]]);
    return rs(ds([e, t], [1, 1, 1, 1]), [.05154639, -.08247423, .08247423, .09278351]);
  }, () => !0), l.add(ss, () => rs(ss([[2, 5, 8, 7], [5, 2, 2, 8], [7, 5, 6, 6], [5, 4, 4, 8]]), [E([[0, 1, 0, 0], [0, 0, 0, 1], [1, 0, 0, 0], [0, 0, 1, 0]]), E([[1, 0, 0, 0], [.28571429, 1, 0, 0], [.71428571, .12, 1, 0], [.71428571, -.44, -.46153846, 1]]), E([[7, 5, 6, 6], [0, 3.57142857, 6.28571429, 5.28571429], [0, 0, -1.04, 3.08], [0, 0, 0, 7.46153846]])]), () => !0);
  class us extends P {
    constructor(e, t, a, r, n) {
      super(t), this.base = R(e), this.indices = a, this.axis = r, this.outShape = n, this._indices = [...a];
    }
    next() {
      if (this.done) return {
        done: !0
      };
      let {
        base: e,
        indices: t,
        index: a,
        _indices: r
      } = this;
      for (let e = 0; e < t.length; e++) t[e] instanceof z && (r[e] = t[e].item(a));
      let n = e.get(r);
      return super.next(), {
        value: n,
        done: !1
      };
    }
    get() {
      let {
          axis: e,
          coords: t,
          outShape: a,
          base: r
        } = this,
        n = Y(a, r.dtype);
      for (let a of this) K(n.get(t, e), a);
      return n;
    }
    set(e) {
      let {
        axis: t,
        coords: a,
        outShape: r
      } = this;
      e = I(e, r);
      for (let r of this) K(r, e.get(a, t));
    }
  }
  function hs(e, t) {
    return os(e, t).get();
  }
  function fs(e, t, a) {
    return os(e, t).set(a);
  }
  function ps(e, t = null, a = null, r = !1) {
    if (0 == (e = R(e)).size) throw new Error("attempt to get argmax of an empty sequence");
    if (null == t) {
      let t,
        n = Number.MIN_VALUE,
        s = 0;
      for (let a of e.flat) a > n && (t = s, n = a), s++;
      let l = r ? Array(e.ndim).fill(1) : [];
      if (null == a) a = Y(l, "number");else if (!De(a.shape, l)) throw new Error("out shape does not match");
      return a.itemset(0, t), a;
    }
    if (t = An(t, e.ndim), 0 == e.ndim) return 0;
    if (1 == e.ndim) return ps(e, null, a, r);
    let n = [...e.shape];
    if (r ? n.splice(t, 1, 1) : n.splice(t, 1), null == a) a = Y(n, "number");else if (!De(a.shape, n)) throw new Error("out shape does not match");
    let s = a,
      l = [...e.shape];
    l.splice(t, 1), a = a.reshape(l);
    for (let r of U(l)) {
      let n = [...r];
      n.splice(t, 0, ":"), ps(e.get(n), null, a.get(r));
    }
    return s;
  }
  function cs(e, t = null, a = null, r = !1) {
    if (0 == (e = R(e)).size) throw new Error("attempt to get argmax of an empty sequence");
    if (null == t) {
      let t,
        n = Number.MAX_VALUE,
        s = 0;
      for (let a of e.flat) a < n && (t = s, n = a), s++;
      let l = r ? Array(e.ndim).fill(1) : [];
      if (null == a) a = Y(l, "number");else if (!De(a.shape, l)) throw new Error("out shape does not match");
      return a.itemset(0, t), a;
    }
    if (t = An(t, e.ndim), 0 == e.ndim) return 0;
    if (1 == e.ndim) return cs(e, null, a, r);
    let n = [...e.shape];
    if (r ? n.splice(t, 1, 1) : n.splice(t, 1), null == a) a = Y(n, "number");else if (!De(a.shape, n)) throw new Error("out shape does not match");
    let s = a,
      l = [...e.shape];
    l.splice(t, 1), a = a.reshape(l);
    for (let r of U(l)) {
      let n = [...r];
      n.splice(t, 0, ":"), cs(e.get(n), null, a.get(r));
    }
    return s;
  }
  function ms(e) {
    return e = R(e), E([...new Set(e.flat)].sort());
  }
  l.add(hs, () => hs(C(120).reshape(2, 3, 4, 5), [[0, 0], ":1", [0, 0], ":"]), () => E([[[0, 1, 2, 3, 4]], [[0, 1, 2, 3, 4]]])).add(hs, () => hs(C(24).reshape(2, 3, 4), [[[1], [1]], [!0, !1, !0]]), () => E([[[12, 13, 14, 15], [20, 21, 22, 23]], [[12, 13, 14, 15], [20, 21, 22, 23]]])).add(hs, () => hs(C(24).reshape(2, 3, 4), [":", [[!0, !1, !0, !0], [!0, !1, !0, !0], [!0, !1, !0, !0]]]), () => E([[0, 2, 3, 4, 6, 7, 8, 10, 11], [12, 14, 15, 16, 18, 19, 20, 22, 23]])).add(hs, () => hs(C(24).reshape(2, 3, 4), [[0, 0, 0, 1, 1, 1, 1, 1, 0], ":", [0, 2, 3, 0, 2, 3, 0, 2, 3]]), () => E([[0, 4, 8], [2, 6, 10], [3, 7, 11], [12, 16, 20], [14, 18, 22], [15, 19, 23], [12, 16, 20], [14, 18, 22], [3, 7, 11]])).add(hs, () => hs(C(24).reshape(2, 3, 4), [[1, 0], 0]), () => E([[12, 13, 14, 15], [0, 1, 2, 3]])).add(hs, () => hs(C(24).reshape(2, 3, 4), [":", [!1, !1, !0], ":-1"]), () => E([[[8, 9, 10]], [[20, 21, 22]]])).add(hs, () => hs(C(24).reshape(2, 3, 4), [":", [[0], [1]], [2]]), () => E([[[2], [6]], [[14], [18]]])), l.add(ps, () => ps(C(6).reshape(2, 3)), () => 5).add(ps, () => ps(C(6).reshape(2, 3), 0), () => E([1, 1, 1])).add(ps, () => ps(C(6).reshape(2, 3), 1), () => E([2, 2])).add(ps, () => ps(E([0, 5, 2, 3, 4, 5])), () => 1).add(ps, () => ps(C(24).reshape(2, 3, 4), 1, null, !0), () => E([[[2, 2, 2, 2]], [[2, 2, 2, 2]]])), l.add(cs, () => cs(C(6).reshape(2, 3)), () => 0).add(cs, () => cs(C(6).reshape(2, 3), 0), () => E([0, 0, 0])).add(cs, () => cs(C(6).reshape(2, 3), 1), () => E([0, 0])).add(cs, () => cs(E([0, 5, 2, 3, 4, 5])), () => 0).add(cs, () => cs(C(24).reshape(2, 3, 4), 1, null, !0), () => E([[[0, 0, 0, 0]], [[0, 0, 0, 0]]])), l.add(ms, () => ms([1, 1, 2, 2, 3, 3]), () => E([1, 2, 3])).add(ms, () => ms(E([[1, 1], [2, 3]])), () => E([1, 2, 3])).add(ms, () => ms(E([1, 2, 6, 4, 2, 3, 2])), () => E([1, 2, 3, 4, 6]));
})();
var s = n.zvA,
  l = n.bFe,
  i = n.iIB,
  d = n.RO$,
  o = n.zhN,
  u = n._bh,
  h = n.u_0,
  f = n.$45,
  p = n.OVY,
  c = n.dsS,
  m = n.xsH,
  y = n.p2w,
  g = n.SRu,
  b = n.NYz,
  w = n.Buv,
  x = n.WnP,
  _ = n.AGi,
  $ = n.kbY,
  A = n.IHx,
  z = n.$6P,
  v = n.MWz,
  M = n.Lb7,
  N = n.t5D,
  k = n.xDy,
  E = n.YjB,
  S = n.eTT,
  q = n.FKo,
  j = n.Hn6,
  F = n.PD,
  D = n.oSO,
  T = n.Xsc,
  I = n.gJP,
  O = n.$jo,
  K = n.Eb7,
  U = n._6L,
  P = n.s6s,
  R = n.S1h,
  Y = n.Q8B,
  V = n.IXX,
  L = n.FJh,
  G = n.YSU,
  W = n.Vjr,
  H = n.xok,
  X = n.oix,
  C = n.Yqf,
  B = n.k2d,
  J = n.FAR,
  Q = n.hu8,
  Z = n.V2R,
  ee = n.dcL,
  te = n.ujY,
  ae = n.Y8W,
  re = n.yE8,
  ne = n.W4K,
  se = n.GBu,
  le = n.eYE,
  ie = n.qgf,
  de = n.fMc,
  oe = n.Nhz,
  ue = n.xAU,
  he = n.M2z,
  fe = n.eKn,
  pe = n.mDi,
  ce = n.q$q,
  me = n.oqW,
  ye = n.T8D,
  ge = n.MY2,
  be = n.nNb,
  we = n.mVq,
  xe = n.y39,
  _e = n.RrX,
  $e = n.JGK,
  Ae = n.JGz,
  ze = n.zOr,
  ve = n.mCk,
  Me = n.f9Y,
  Ne = n.zNN,
  ke = n.kCc,
  Ee = n.$Gn,
  Se = n.zbp,
  qe = n.VlM,
  je = n.RWx,
  Fe = n.Ka3,
  De = n.on5,
  Te = n.Hgg,
  Ie = n.csF,
  Oe = n.qqz,
  Ke = n.AKD,
  Ue = n.wIX,
  Pe = n.N5d,
  Re = n.cTT,
  Ye = n.sk1,
  Ve = n.e,
  Le = n.D5q,
  Ge = n.cSb,
  We = n.sKD,
  He = n.eq,
  Xe = n.DgJ,
  Ce = n.Qqt,
  Be = n.uuq,
  Je = n.aD1,
  Qe = n.t$B,
  Ze = n.KlT,
  et = n.iyy,
  tt = n.zG0,
  at = n.KTV,
  rt = n.RRI,
  nt = n.HC4,
  st = n.Ah7,
  lt = n.Z_5,
  it = n.GWj,
  dt = n.Sc8,
  ot = n.Ek0,
  ut = n.v_D,
  ht = n.KSO,
  ft = n.rpZ,
  pt = n.NxV,
  ct = n.thl,
  mt = n.U2M,
  yt = n.rn5,
  gt = n.rqY,
  bt = n.FLS,
  wt = n.pjt,
  xt = n.zGm,
  _t = n.gt,
  $t = n.egL,
  At = n.smV,
  zt = n.Hsf,
  vt = n.DIH,
  Mt = n._mT,
  Nt = n.yRu,
  kt = n.HqJ,
  Et = n.S8h,
  St = n.CGm,
  qt = n.gY6,
  jt = n.Zw8,
  Ft = n.U_R,
  Dt = n.FWh,
  Tt = n.f0i,
  It = n.fXA,
  Ot = n.Uf3,
  Kt = n.igg,
  Ut = n.ftH,
  Pt = n.KvH,
  Rt = n.IW_,
  Yt = n.uqG,
  Vt = n.vy,
  Lt = n.Ai1,
  Gt = n.d9m,
  Wt = n.bzW,
  Ht = n.SX3,
  Xt = n.cM7,
  Ct = n.mvw,
  Bt = n.Krr,
  Jt = n.k3Q,
  Qt = n.YKj,
  Zt = n.buk,
  ea = n.EbT,
  ta = n.FLe,
  aa = n.P_4,
  ra = n.ZpU,
  na = n.lt,
  sa = n.GaM,
  la = n.lu,
  ia = n.baN,
  da = n.TGE,
  oa = n.irF,
  ua = n.UID,
  ha = n.EeK,
  fa = n.Nai,
  pa = n.Jxs,
  ca = n.gWQ,
  ma = n.J69,
  ya = n.LTh,
  ga = n.wQq,
  ba = n.RHK,
  wa = n.U8E,
  xa = n.JpY,
  _a = n.qnd,
  $a = n.dQs,
  Aa = n.$7d,
  za = n.RCU,
  va = n.MIL,
  Ma = n.obs,
  Na = n.$V5,
  ka = n.p3s,
  Ea = n.x2A,
  Sa = n.fyW,
  qa = n.MHD,
  ja = n.pdy,
  Fa = n.uH1,
  Da = n.MaX,
  Ta = n.Chc,
  Ia = n.S4p,
  Oa = n.INJ,
  Ka = n.ffp,
  Ua = n.ffD,
  Pa = n.AqN,
  Ra = n.qDh,
  Ya = n.iUs,
  Va = n.r6Y,
  La = n.or,
  Ga = n.NCv,
  Wa = n.pi,
  Ha = n.eiS,
  Xa = n.i1C,
  Ca = n.qux,
  Ba = n.WVs,
  Ja = n.OZM,
  Qa = n.gzd,
  Za = n.BVy,
  er = n.uRy,
  tr = n.TN_,
  ar = n.MXc,
  rr = n.di9,
  nr = n.n3V,
  sr = n.nTq,
  lr = n.Pyd,
  ir = n.M25,
  dr = n.u4g,
  or = n.f0H,
  ur = n.spK,
  hr = n.rx1,
  fr = n.XLQ,
  pr = n.SIr,
  cr = n.wyi,
  mr = n.XC3,
  yr = n.SlP,
  gr = n.aSG,
  br = n.s_,
  wr = n.UPJ,
  xr = n.U6i,
  _r = n.FvN,
  $r = n.t8m,
  Ar = n.flC,
  zr = n.mCt,
  vr = n.FPS,
  Mr = n.Xxe,
  Nr = n.UBE,
  kr = n.O$l,
  Er = n.R_K,
  Sr = n.tPi,
  qr = n.F1c,
  jr = n.DYV,
  Fr = n.Vl2,
  Dr = n._b3,
  Tr = n.h62,
  Ir = n.L9e,
  Or = n.knu,
  Kr = n.qoR,
  Ur = n.$XF,
  Pr = n.Smz,
  Rr = n.ZU4,
  Yr = n.qnb,
  Vr = n.ORZ,
  Lr = n.AEp,
  Gr = n.K1B,
  Wr = n.Gg6,
  Hr = n.uAr,
  Xr = n.BpP,
  Cr = n.qoF,
  Br = n.p4s,
  Jr = n.ebm,
  Qr = n.$I7,
  Zr = n.RFc,
  en = n.DDI,
  tn = n.vwf,
  an = n.Two,
  rn = n.bLT,
  nn = n.M56,
  sn = n.Wg4,
  ln = n.CAK,
  dn = n.nFP,
  on = n.Ud9,
  un = n.arb,
  hn = n.S_0,
  fn = n.e1l,
  pn = n.$MA,
  cn = n.DgC,
  mn = n.s6m,
  yn = n.dlQ,
  gn = n.lls,
  bn = n.T1S;
exports.zeros_like = bn;
exports.zeros = gn;
exports.xor = yn;
exports.wrapper_reduce = mn;
exports.wrapper_map2 = cn;
exports.wrapper_map = pn;
exports.wrapper_accumulate = fn;
exports.wrapper_ = hn;
exports.where = un;
exports.vstack = on;
exports.vsplit = dn;
exports.variance = ln;
exports.unwrap = sn;
exports.unravel_index = nn;
exports.unpackbits = rn;
exports.unique = an;
exports.tuple_ = tn;
exports.tupleType = en;
exports.trunc = Zr;
exports.true_divide = Qr;
exports.trapz = Jr;
exports.transpose = Br;
exports.toArray = Cr;
exports.timeit2 = Xr;
exports.timeit = Hr;
exports.tile = Wr;
exports.tester = Gr;
exports.tanh = Lr;
exports.tan = Vr;
exports.take = Yr;
exports.swapaxes = Rr;
exports.sum = Pr;
exports.subtract = Ur;
exports.std = Kr;
exports.stack = Or;
exports.squeeze = Ir;
exports.square = Tr;
exports.sqrt = Dr;
exports.split = Fr;
exports.sort = jr;
exports.solve = qr;
exports.slice = Sr;
exports.sinh = Er;
exports.sin = kr;
exports.signbit = Nr;
exports.sign = Mr;
exports.shape_ = vr;
exports.shape = zr;
exports.shallow_array_equal = Ar;
exports.set = $r;
exports.searchsorted = _r;
exports.scatter = xr;
exports.sample = wr;
exports.s_ = br;
exports.row_stack = gr;
exports.roll = yr;
exports.rint = mr;
exports.right_shift = cr;
exports.resize = pr;
exports.reshape = fr;
exports.repeat = hr;
exports.remainder = ur;
exports.reduce_ = or;
exports.reduce = dr;
exports.reciprocal = ir;
exports.ravel_multi_index = lr;
exports.ravel = sr;
exports.ranf = nr;
exports.random_sample = rr;
exports.random = ar;
exports.rand = tr;
exports.radians = er;
exports.rad2deg = Za;
exports.put = Qa;
exports.ptp = Ja;
exports.prod = Ba;
exports.power = Ca;
exports.positive = Xa;
exports.pick = Ha;
exports.pi = Wa;
exports.packbits = Ga;
exports.or = La;
exports.ones_like = Va;
exports.ones = Ya;
exports.ogrid = Ra;
exports.not_equal = Pa;
exports.not = Ua;
exports.normalize_axis_tuple = Ka;
exports.normalize_axis_index = Oa;
exports.normalize_axis = Ia;
exports.normalize_axes = Ta;
exports.nonzero = Da;
exports.neq = Fa;
exports.negative = ja;
exports.ndoffset = qa;
exports.nditer = Sa;
exports.ndindex = Ea;
exports.ndim = ka;
exports.ndenumerate = Na;
exports.nansum = Ma;
exports.nanprod = va;
exports.nancumsum = za;
exports.nancumprod = Aa;
exports.nan_to_num = $a;
exports.nan = _a;
exports.multiply = xa;
exports.moveaxis = wa;
exports.modf = ba;
exports.mod = ga;
exports.minimum = ya;
exports.mean = ma;
exports.maximum = ca;
exports.matmul = pa;
exports.map_ = fa;
exports.map2_ = ha;
exports.map = ua;
exports.lu_solve = oa;
exports.lu_factor_ = da;
exports.lu_factor = ia;
exports.lu = la;
exports.lte = sa;
exports.lt = na;
exports.logical_xor = ra;
exports.logical_or = aa;
exports.logical_not = ta;
exports.logical_and = ea;
exports.logaddexp2 = Zt;
exports.logaddexp = Qt;
exports.log2 = Jt;
exports.log1p = Bt;
exports.log10 = Ct;
exports.log = Xt;
exports.linspace = Ht;
exports.less_equal = Wt;
exports.less = Gt;
exports.left_shift = Lt;
exports.ldexp = Vt;
exports.lcm = Yt;
exports.ix_ = Rt;
exports.isscalar = Pt;
exports.isposinf = Ut;
exports.isneginf = Kt;
exports.isnan = Ot;
exports.isinf = It;
exports.isfinite = Tt;
exports.isclose = Dt;
exports.invert = Ft;
exports.interp = jt;
exports.inf = qt;
exports.indices = St;
exports.index_exp = Et;
exports.in1d = kt;
exports.identity = Nt;
exports.hypot = Mt;
exports.hstack = vt;
exports.hsplit = zt;
exports.guessType = At;
exports.gte = $t;
exports.gt = _t;
exports.greater_equal = xt;
exports.greater = wt;
exports.gradient = bt;
exports.get_strides = gt;
exports.get_size = yt;
exports.get = mt;
exports.gcd = ct;
exports.full_like = pt;
exports.full = ft;
exports.fromiter = ht;
exports.fromfunction = ut;
exports.fmod = ot;
exports.floor_divide = dt;
exports.floor = it;
exports.float_power = lt;
exports.flipud = st;
exports.fliplr = nt;
exports.flip = rt;
exports.flatnonzero = at;
exports.fix = tt;
exports.eye = et;
exports.extract = Ze;
exports.expm1 = Qe;
exports.expand_dims = Je;
exports.exp2 = Be;
exports.exp = Ce;
exports.equal = Xe;
exports.eq = He;
exports.empty_like = We;
exports.empty = Ge;
exports.ediff1d = Le;
exports.e = Ve;
exports.dtype_ = Ye;
exports.dtype = Re;
exports.dstack = Pe;
exports.dsplit = Ue;
exports.dot = Ke;
exports.divmod = Oe;
exports.divide = Ie;
exports.diff = Te;
exports.diagonal = De;
exports.diag = Fe;
exports.degrees = je;
exports.deg2rad = qe;
exports.cumsum = Se;
exports.cumprod = Ee;
exports.cross = ke;
exports.count_nonzero = Ne;
exports.cosh = Me;
exports.cos = ve;
exports.copyto = ze;
exports.copysign = Ae;
exports.copy = $e;
exports.convolve = _e;
exports.contiguous = xe;
exports.concatenate = we;
exports.compress = be;
exports.compile = ge;
exports.column_stack = ye;
exports.clip = me;
exports.choice = ce;
exports.ceil = pe;
exports.cbrt = fe;
exports.broadcast_to = he;
exports.broadcast_shapes = ue;
exports.broadcast_arrays = oe;
exports.broadcast = de;
exports.bitwise_xor = ie;
exports.bitwise_or = le;
exports.bitwise_not = se;
exports.bitwise_and = ne;
exports.bincount = re;
exports.average = ae;
exports.atleast_3d = te;
exports.atleast_2d = ee;
exports.atleast_1d = Z;
exports.assert = Q;
exports.ascontiguousarray = J;
exports.asarray = B;
exports.array_str = C;
exports.array_split = X;
exports.array_repr = H;
exports.array_equiv = W;
exports.array_equal = G;
exports.array2string = L;
exports.array = V;
exports.around = Y;
exports.argwhere = R;
exports.argsort = P;
exports.argmin = U;
exports.argmax = K;
exports.arctanh = O;
exports.arctan2 = I;
exports.arctan = T;
exports.arcsinh = D;
exports.arcsin = F;
exports.arccosh = j;
exports.arccos = q;
exports.arange = S;
exports.any = E;
exports.and = k;
exports.amin = N;
exports.amax = M;
exports.allclose = v;
exports.all = z;
exports.add = A;
exports.accumulate_ = $;
exports.absolute = _;
exports.abs = x;
exports._shape = w;
exports._ndim = b;
exports.Tester = g;
exports.Slice = y;
exports.Product = m;
exports.NdoffsetIterator = c;
exports.Nditer = p;
exports.NdindexIterator = f;
exports.NdenumerateIterator = h;
exports.NINF = u;
exports.NDArray = o;
exports.Generator = d;
exports.Flatiter = i;
exports.Dtype = l;
exports.Broadcast = s;