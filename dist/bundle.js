"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fix = exports.eye = exports.extract = exports.expm1 = exports.expand_dims = exports.exp2 = exports.exp = exports.equal = exports.empty_like = exports.empty = exports.ediff1d = exports.e = exports.dtype_ = exports.dtype = exports.dstack = exports.dsplit = exports.dot = exports.divide = exports.diff = exports.diagonal = exports.diag = exports.degrees = exports.deg2rad = exports.cumsum = exports.cumprod = exports.cross = exports.count_nonzero = exports.cosh = exports.cos = exports.copyto = exports.copysign = exports.copy = exports.convolve = exports.contiguous = exports.concatenate = exports.compress = exports.compile = exports.column_stack = exports.clip = exports.choice = exports.ceil = exports.cbrt = exports.broadcast_to = exports.broadcast_shapes = exports.broadcast = exports.bitwise_xor = exports.bitwise_or = exports.bitwise_not = exports.bitwise_and = exports.bincount = exports.average = exports.atleast_3d = exports.atleast_2d = exports.atleast_1d = exports.assert = exports.ascontiguousarray = exports.asarray = exports.array_str = exports.array_split = exports.array_repr = exports.array_equiv = exports.array_equal = exports.array2string = exports.array = exports.around = exports.argwhere = exports.argsort = exports.arctanh = exports.arctan2 = exports.arctan = exports.arcsinh = exports.arcsin = exports.arccosh = exports.arccos = exports.arange = exports.any = exports.amin = exports.amax = exports.all = exports.add = exports.absolute = exports.abs = exports._wrap_reduce = exports._wrap_map_unary = exports._wrap_map_binary = exports._wrap_map = exports._wrap_accum_unary = exports._shape = exports._ndim = exports.Tester = exports.Slice = exports.Product = exports.Ndoffset = exports.Nditer = exports.NINF = exports.NDArray = exports.Generator = exports.Flatiter = exports.Dtype = exports.Broadcast = void 0;
exports.roll = exports.rint = exports.right_shift = exports.resize = exports.reshape = exports.repeat = exports.remainder = exports.reciprocal = exports.ravel_multi_index = exports.ravel = exports.ranf = exports.random_sample = exports.random = exports.rand = exports.radians = exports.rad2deg = exports.put = exports.ptp = exports.prod = exports.power = exports.positive = exports.pick = exports.pi = exports.packbits = exports.ones_like = exports.ones = exports.ogrid = exports.not_equal = exports.normalize_axis_tuple = exports.normalize_axis_mask = exports.normalize_axis_index = exports.normalize_axis = exports.nonzero = exports.negative = exports.ndoffset = exports.nditer = exports.ndindex = exports.ndim = exports.ndenumerate = exports.nansum = exports.nanprod = exports.nancumsum = exports.nancumprod = exports.nan_to_num = exports.nan = exports.multiply = exports.moveaxis = exports.mod = exports.minimum = exports.mean = exports.maximum = exports.matmul = exports.map = exports.logaddexp2 = exports.logaddexp = exports.log2 = exports.log1p = exports.log10 = exports.log = exports.linspace = exports.less_equal = exports.less = exports.left_shift = exports.ldexp = exports.lcm = exports.ix_ = exports.isscalar = exports.isposinf = exports.isneginf = exports.isna = exports.isinf = exports.isfinite = exports.invert = exports.interp = exports.inf = exports.indices = exports.index_exp = exports.in1d = exports.identity = exports.hypot = exports.hstack = exports.hsplit = exports.guessType = exports.greater_equal = exports.greater = exports.gradient = exports.get_strides = exports.get_size = exports.gcd = exports.full_like = exports.full = exports.fromiter = exports.fromfunction = exports.fmod = exports.floor_divide = exports.floor = exports.flipud = exports.fliplr = exports.flip = exports.flatnonzero = void 0;
exports.zeros_like = exports.zeros = exports.where = exports.vstack = exports.vsplit = exports.variance = exports.unwrap = exports.unravel_index = exports.unpackbits = exports.tuple_ = exports.tupleType = exports.trunc = exports.true_divide = exports.trapz = exports.transpose = exports.timeit2 = exports.timeit = exports.tile = exports.tester = exports.tanh = exports.tan = exports.take = exports.swapaxes = exports.sum = exports.subtract = exports.std = exports.stack = exports.squeeze = exports.square = exports.sqrt = exports.split = exports.sort = exports.slice = exports.sinh = exports.sin = exports.signbit = exports.sign = exports.shape_ = exports.shape = exports.shallow_array_equal = exports.searchsorted = exports.sample = exports.s_ = exports.row_stack = void 0;
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
    zvA: () => oe,
    bFe: () => h,
    iIB: () => G,
    RO$: () => kr,
    zhN: () => z,
    _bh: () => qt,
    OVY: () => Se,
    mXy: () => Dn,
    xsH: () => wn,
    p2w: () => m,
    SRu: () => s,
    NYz: () => ce,
    Buv: () => F,
    E4R: () => dt,
    tw1: () => st,
    Yur: () => it,
    RPv: () => lt,
    JWo: () => ut,
    WnP: () => Ra,
    AGi: () => Ka,
    IHx: () => ht,
    $6P: () => xt,
    Lb7: () => Ta,
    t5D: () => Oa,
    YjB: () => _t,
    eTT: () => C,
    FKo: () => Ot,
    Hn6: () => Bt,
    PD: () => Tt,
    oSO: () => Ct,
    Xsc: () => Dt,
    gJP: () => Pt,
    $jo: () => Ht,
    s6s: () => dr,
    S1h: () => ve,
    Q8B: () => Qt,
    IXX: () => E,
    FJh: () => zn,
    YSU: () => je,
    Vjr: () => Ie,
    xok: () => $n,
    oix: () => Br,
    Yqf: () => An,
    k2d: () => P,
    FAR: () => ae,
    hu8: () => _n,
    V2R: () => le,
    dcL: () => ie,
    ujY: () => de,
    Y8W: () => jr,
    yE8: () => Or,
    W4K: () => Wa,
    GBu: () => Ua,
    eYE: () => Ja,
    qgf: () => Ca,
    fMc: () => ue,
    xAU: () => J,
    M2z: () => O,
    eKn: () => Ya,
    mDi: () => aa,
    q$q: () => _r,
    oqW: () => ir,
    T8D: () => Jr,
    MY2: () => Kn,
    nNb: () => ze,
    mVq: () => Oe,
    y39: () => re,
    RrX: () => lr,
    JGK: () => ge,
    JGz: () => Aa,
    zOr: () => D,
    mCk: () => It,
    f9Y: () => Wt,
    zNN: () => ke,
    kCc: () => nr,
    $Gn: () => da,
    zbp: () => oa,
    VlM: () => Gt,
    RWx: () => Rt,
    Ka3: () => rn,
    on5: () => an,
    Hgg: () => fa,
    csF: () => ct,
    AKD: () => vn,
    wIX: () => Lr,
    N5d: () => Wr,
    cTT: () => p,
    sk1: () => c,
    e: () => kt,
    D5q: () => pa,
    cSb: () => R,
    sKD: () => K,
    DgJ: () => La,
    Qqt: () => ca,
    uuq: () => ya,
    aD1: () => me,
    t$B: () => ma,
    KlT: () => $e,
    iyy: () => he,
    zG0: () => ea,
    KTV: () => Me,
    RRI: () => nn,
    HC4: () => sn,
    Ah7: () => ln,
    GWj: () => ta,
    Sc8: () => yt,
    Ek0: () => ja,
    v_D: () => we,
    KSO: () => be,
    rpZ: () => U,
    NxV: () => W,
    thl: () => Sa,
    rn5: () => $,
    rqY: () => A,
    FLS: () => rr,
    pjt: () => ar,
    zGm: () => tr,
    smV: () => q,
    Hsf: () => Qr,
    DIH: () => Ur,
    _mT: () => Yt,
    yRu: () => fe,
    HqJ: () => Pr,
    S8h: () => un,
    CGm: () => Dr,
    gY6: () => St,
    Zw8: () => ur,
    U_R: () => Ga,
    f0i: () => vt,
    fXA: () => zt,
    I7t: () => At,
    igg: () => $t,
    ftH: () => Mt,
    KvH: () => _,
    IW_: () => Yr,
    uqG: () => Ea,
    vy: () => $a,
    Ai1: () => Ba,
    d9m: () => er,
    bzW: () => Za,
    SX3: () => B,
    cM7: () => ga,
    mvw: () => wa,
    Krr: () => xa,
    k3Q: () => ba,
    YKj: () => _a,
    buk: () => va,
    UID: () => bn,
    Jxs: () => xn,
    gWQ: () => Ia,
    J69: () => Ir,
    LTh: () => Fa,
    wQq: () => gt,
    U8E: () => De,
    JpY: () => pt,
    qnd: () => Nt,
    dQs: () => Xa,
    $7d: () => ua,
    RCU: () => ha,
    MIL: () => la,
    obs: () => ia,
    $V5: () => _e,
    p3s: () => pe,
    x2A: () => Y,
    fyW: () => qe,
    MHD: () => Yn,
    pdy: () => ka,
    MaX: () => xe,
    S4p: () => Ne,
    INJ: () => Re,
    lf5: () => Ve,
    ffp: () => Ee,
    AqN: () => Qa,
    qDh: () => Sr,
    iUs: () => Q,
    r6Y: () => Z,
    NCv: () => Rr,
    pi: () => Et,
    eiS: () => xr,
    i1C: () => Ma,
    qux: () => bt,
    WVs: () => na,
    OZM: () => qr,
    gzd: () => fn,
    BVy: () => Xt,
    uRy: () => Kt,
    TN_: () => $r,
    MXc: () => Nr,
    di9: () => vr,
    n3V: () => zr,
    nTq: () => Ae,
    Pyd: () => Rn,
    M25: () => qa,
    spK: () => wt,
    rx1: () => en,
    XLQ: () => X,
    SIr: () => pn,
    wyi: () => Ha,
    XC3: () => Zt,
    SlP: () => gn,
    aSG: () => Cr,
    s_: () => hn,
    UPJ: () => Ar,
    FvN: () => cn,
    flC: () => Fe,
    mCt: () => I,
    FPS: () => T,
    Xxe: () => Va,
    UBE: () => za,
    O$l: () => jt,
    R_K: () => Ut,
    tPi: () => x,
    DYV: () => or,
    Vl2: () => Hr,
    _b3: () => Da,
    h62: () => Pa,
    L9e: () => ye,
    knu: () => Xr,
    qoR: () => Tr,
    $XF: () => ft,
    Smz: () => sa,
    ZU4: () => ne,
    qnb: () => H,
    ORZ: () => Ft,
    AEp: () => Jt,
    K1B: () => l,
    Gg6: () => tn,
    uAr: () => d,
    BpP: () => i,
    p4s: () => se,
    ebm: () => sr,
    $I7: () => mt,
    RFc: () => ra,
    DDI: () => on,
    vwf: () => V,
    bLT: () => Kr,
    M56: () => Pn,
    Wg4: () => Vt,
    CAK: () => Fr,
    nFP: () => Zr,
    Ud9: () => Gr,
    arb: () => Er,
    lls: () => ee,
    T1S: () => te
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
  x.newaxis = m.newaxis, x.ellipsis = m.ellipsis, x.colon = m.colon, l.add(x, () => x(0, 1, 2).toString(), () => "0:1:2").add(x, () => x(null, 1, 2).toString(), () => ":1:2").add(x, () => x(0, null, 2).toString(), () => "0::2").add(x, () => x(null, null, -1).toString(), () => "::-1").add(x, () => x(null, null, null).toString(), () => ":"), l.add("isscalar", () => _(3.1), () => !0).add("isscalar", () => _(E(3.1)), () => !1).add("isscalar", () => _([3.1]), () => !1).add("isscalar", () => _(!1), () => !0).add("isscalar", () => _("numpy"), () => !0).add("isscalar", () => _(Number()), () => !0);
  var v = r(460);
  class z {
    constructor(e, t = null, a = null, r = null, n = null, s = 0, l = 1) {
      this.ndim = e.length, this.size = $(e), this.shape = e, this.data = t ?? Array(this.size), this.itemsize = l, this.strides = n ?? A(e, this.ndim, l), this.offset = s, this.dtype = c(a ?? t.constructor), this.base = r?.base ?? r;
    }
    get length() {
      let {
        ndim: e,
        shape: t
      } = this;
      if (0 != e) return t[0];
    }
    get flat() {
      return new G(this);
    }
    set flat(e) {
      this.flat.set(":", e);
    }
    get T() {
      return se(this);
    }
    set T(e) {
      this.T.set(e);
    }
    toString() {
      return An(this);
    }
    valueOf() {
      return 0 == this.ndim ? this.item() : $n(this);
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
    get(e) {
      return k(e) ? N.call(this, e) : M(this, e);
    }
    set(e, t) {
      return 1 == arguments.length ? (D(this, e), this) : k(e) ? this.set(Er(e, t, this)) : (D(M(this, e), t), this);
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
    toarray() {
      let {
        ndim: e,
        strides: t,
        itemsize: a,
        offset: r,
        data: n,
        shape: s
      } = this;
      if (0 == e) return n[r];
      let l = s[0];
      if (1 == e && t[0] == a) return Array.prototype.slice.call(n, r, r + l);
      let i = [];
      for (let e = 0; e < l; e++) i.push(this.at(e).toarray());
      return i;
    }
    tolist() {
      return this.toarray();
    }
    reshape(...e) {
      return 1 == e.length && "object" == typeof e[0] && (e = e[0]), X(this, e);
    }
    all(e = null, t = null, a = !1, r = !0, n = !0) {
      return xt(this, e, t, a, r, n);
    }
    any(e = null, t = null, a = !1, r = !1, n = !0) {
      return _t(this, e, t, a, r, n);
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
      return dr(this, e, t);
    }
    byteswap() {
      throw "not implemented";
    }
    choose(e, t = null, a = "raise") {
      throw "not implemented";
    }
    clip(e, t, a = null) {
      return ir(this, e, t, a);
    }
    compress(e, t = null, a = null) {
      return ze(e, this, t, a);
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
      return da(this, e, t);
    }
    cumsum(e, t) {
      return oa(this, e, t);
    }
    diagonal(e = 0, t = 0, a = 1) {
      return an(this, e, t, a);
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
      return Ta(this, e, t, a, r, n);
    }
    mean(e = null, t = null, a = !1) {
      return Ir(this, e, t, a);
    }
    min(e = null, t = null, a = !1, r = null, n = !0) {
      return Oa(this, e, t, a, r, n);
    }
    newbyteorder() {
      throw "not implemented";
    }
    nonzero() {
      return xe(this);
    }
    partition(e, t = -1, a = "introselect", r = null) {
      throw "not implemented";
    }
    prod(e = null, t = null, a = !1, r = 0, n = !0) {
      return na(this, e, t, a, r, n);
    }
    ptp(e = null, t = null, a = !1) {
      return qr(this, e, t, a);
    }
    put(e, t, a = "raise") {
      return fn(this, e, t, a), this;
    }
    ravel() {
      return Ae(this);
    }
    repeat(e, t = null) {
      return en(this, e, t);
    }
    resize(e) {
      if (null != this.base) throw "cannot resize this array: it does not own its data";
      if (!re(this)) throw "resize only works on single-segment arrays";
      let t = $(e);
      return t <= this.size ? this.data = [...this.data.slice(this.offset, t)] : this.data = [...this.data.slice(this.offset, t), ...Array(t - this.size).fill(0)], this.shape = e, this.ndim = e.length, this.strides = A(e, this.ndim, this.itemsize), this.offset = 0, this;
    }
    round(e = 0, t = null) {
      return Qt(this, e, t);
    }
    searchsorted(e, t = "left") {
      return cn(this, e, t);
    }
    setfield() {
      throw "not implemented";
    }
    setflags() {
      throw "not implemented";
    }
    sort(e = -1, t = null) {
      return this.set(or(this, e, t)), this;
    }
    squeeze(e = null) {
      return ye(this, e);
    }
    std(e = null, t = null, a = 0, r = !1) {
      return Tr(this, e, t, a, r);
    }
    sum(e = null, t = null, a = !1, r = 0, n = !0) {
      return sa(this, e, t, a, r, n);
    }
    swapaxes(e, t) {
      return ne(this, e, t);
    }
    take(e, t = null, a = null, r = "raise") {
      return H(this, e, t, a, r);
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
      return se(this, e);
    }
    variance(e = null, t = null, a = 0, r = !1) {
      return Fr(this, e, t, a, r);
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
        offset: s,
        data: l,
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
        s += n[f] * t, a.splice(f, 1), n.splice(f, 1);
        continue;
      }
      if (e != m.colon) {
        let {
          start: t,
          step: r,
          slicelength: l
        } = e.indices(a[f]);
        s += n[f] * t, a.splice(f, 1, l), n.splice(f, 1, n[f] * r);
      }
      f++;
    } else a.splice(f, 0, 1), n.splice(f, 0, 1), f++;
    return new z(a, l, o, d ?? e, n, s, i);
  }
  function k(e) {
    for (let t of e) if (null != t && "object" == typeof t && (Array.isArray(t) || t instanceof z && t.ndim > 0)) return !0;
    return !1;
  }
  function N(e) {
    let t,
      a,
      r,
      n = !0,
      s = 0,
      l = e.length - 1,
      i = e.map(e => e instanceof m);
    for (; s < l && i[s]; s++);
    for (; l > s && i[l]; l--);
    for (let e = s + 1; e < l; e++) if (i[e]) {
      n = !1;
      break;
    }
    let d = this.shape.map((t, a) => i[a] ? e[a].indices(t).slicelength : e[a]);
    if (n) t = d.slice(0, s), a = d.slice(l + 1), r = e.slice(s, l + 1);else {
      t = [], a = d.filter((e, t) => i[t]), r = [];
      for (let t = s; t <= l; t++) i[t] || r.push(e[t]);
    }
    let o = ue(...r),
      u = [...t, ...o.shape, ...a];
    e = e.slice();
    let h = [];
    for (let t of o) {
      for (let a = 0, r = 0; a < e.length; a++) i[a] || (e[a] = t[r++]);
      h.push(this.at(...e, null));
    }
    return new z(u, Oe(h, t.length).data);
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
  function I(e) {
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
  z.prototype[v?.inspect?.custom] = function () {
    return this.valueOf();
  }, l.onload(() => {}), l.add("ndarray.get", () => C(120).reshape(4, 6, 5, 1).at(E([0, 2, 1]), x(), [0, 2, 4], x()), () => E([[[0], [5], [10], [15], [20], [25]], [[62], [67], [72], [77], [82], [87]], [[34], [39], [44], [49], [54], [59]]])).add("ndarray.get", () => C(120).reshape(4, 6, 5, 1).at(E([0, 2, 1]), E([0, 2, 1]), x(), x()), () => E([[[0], [1], [2], [3], [4]], [[70], [71], [72], [73], [74]], [[35], [36], [37], [38], [39]]])).add("ndarray.get", () => C(120).reshape(4, 6, 5, 1).at(x(), E([0, 2, 1]), E([0, 2, 4]), x()), () => E([[[0], [12], [9]], [[30], [42], [39]], [[60], [72], [69]], [[90], [102], [99]]])).add("ndarray.get", () => C(120).reshape(4, 6, 5, 1).at(x(), E([0, 2, 1]), x(), [0, 0, 0]), () => E([[[0, 1, 2, 3, 4], [30, 31, 32, 33, 34], [60, 61, 62, 63, 64], [90, 91, 92, 93, 94]], [[10, 11, 12, 13, 14], [40, 41, 42, 43, 44], [70, 71, 72, 73, 74], [100, 101, 102, 103, 104]], [[5, 6, 7, 8, 9], [35, 36, 37, 38, 39], [65, 66, 67, 68, 69], [95, 96, 97, 98, 99]]])).add("ndarray.get", () => C(120).reshape(4, 6, 5, 1).at(x(), x(), E([0, 2, 1]), E([0, 0, 0])), () => E([[[0, 2, 1], [5, 7, 6], [10, 12, 11], [15, 17, 16], [20, 22, 21], [25, 27, 26]], [[30, 32, 31], [35, 37, 36], [40, 42, 41], [45, 47, 46], [50, 52, 51], [55, 57, 56]], [[60, 62, 61], [65, 67, 66], [70, 72, 71], [75, 77, 76], [80, 82, 81], [85, 87, 86]], [[90, 92, 91], [95, 97, 96], [100, 102, 101], [105, 107, 106], [110, 112, 111], [115, 117, 116]]])).add("ndarray.get", () => C(120).reshape(4, 6, 5, 1).at(E([0, 2, 1]), x(), x(), E([0, 0, 0])), () => E([[[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [25, 26, 27, 28, 29]], [[60, 61, 62, 63, 64], [65, 66, 67, 68, 69], [70, 71, 72, 73, 74], [75, 76, 77, 78, 79], [80, 81, 82, 83, 84], [85, 86, 87, 88, 89]], [[30, 31, 32, 33, 34], [35, 36, 37, 38, 39], [40, 41, 42, 43, 44], [45, 46, 47, 48, 49], [50, 51, 52, 53, 54], [55, 56, 57, 58, 59]]])).add("ndarray.get", () => C(120).reshape(4, 6, 5, 1).at(E([0, 2, 1]), E([0, 2, 1]), x(), 0), () => E([[0, 1, 2, 3, 4], [70, 71, 72, 73, 74], [35, 36, 37, 38, 39]])).add("ndarray.get", () => C(120).reshape(4, 6, 5, 1).at(E([0, 2, 1]), x(), x(), 0), () => E([[[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [25, 26, 27, 28, 29]], [[60, 61, 62, 63, 64], [65, 66, 67, 68, 69], [70, 71, 72, 73, 74], [75, 76, 77, 78, 79], [80, 81, 82, 83, 84], [85, 86, 87, 88, 89]], [[30, 31, 32, 33, 34], [35, 36, 37, 38, 39], [40, 41, 42, 43, 44], [45, 46, 47, 48, 49], [50, 51, 52, 53, 54], [55, 56, 57, 58, 59]]])).add("ndarray.get", () => new z([2, 5], [...Array(10).keys()]).at(x(), x([,, -1])), () => [[4, 3, 2, 1, 0], [9, 8, 7, 6, 5]]).add("ndarray.get", () => new z([2, 5], [...Array(10).keys()]).at(x(-1), 3), () => [8]).add("ndarray.get", () => new z([2, 5], [...Array(10).keys()]).at(x([,, -1]), x([,, -1])), () => [[9, 8, 7, 6, 5], [4, 3, 2, 1, 0]]).add("ndarray.get", () => {
    let e;
    return e = E([[3, 0, 0], [0, 4, 0], [5, 6, 0]]).at(x(), x(), null), e;
  }, () => E([[[3], [0], [0]], [[0], [4], [0]], [[5], [6], [0]]])).add("ndarray.get", () => {
    let e;
    return e = E([[3, 0, 0], [0, 4, 0], [5, 6, 0]]).at(x("..."), null), e;
  }, () => E([[[3], [0], [0]], [[0], [4], [0]], [[5], [6], [0]]])).add("ndarray.get", () => C(24).reshape(2, 3, 4).at(null, "...", null), () => E([[[[[0], [1], [2], [3]], [[4], [5], [6], [7]], [[8], [9], [10], [11]]], [[[12], [13], [14], [15]], [[16], [17], [18], [19]], [[20], [21], [22], [23]]]]])).add("ndarray.get", () => C(24).reshape(2, 3, 4).at(x(":"), [0, 2], x("::2")), () => E([[[0, 2], [8, 10]], [[12, 14], [20, 22]]])), l.add("ndarray.item", () => new z([2, 5], [...Array(10).keys()]).at(x([,, -1]), x([,, -1])).item(5), () => 4), l.add("ndarray.itemset", () => {
    let e = new z([3, 3], [[2, 2, 6], [1, 3, 6], [1, 0, 1]].flat());
    return e.itemset(4, 0), e.itemset([2, 2], 9), e;
  }, () => [[2, 2, 6], [1, 0, 6], [1, 0, 9]]), l.add("ndarray.set", () => {
    let e = new z([2, 5], [...Array(10).keys()]);
    return e.at(x(), x(1, -1)).set(10), e;
  }, () => [[0, 10, 10, 10, 4], [5, 10, 10, 10, 9]]).add("ndarray.set", () => {
    let e = C(24).reshape(2, 3, 4);
    return e.set(tr(e, 10), -1), e;
  }, () => E([[[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, -1, -1]], [[-1, -1, -1, -1], [-1, -1, -1, -1], [-1, -1, -1, -1]]])), l.add("ndarray.flatten", () => E([[1, 2], [3, 4]]).flatten(), () => E([1, 2, 3, 4])), l.add("ndarray.flat.set", () => {
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
  const F = I,
    T = I;
  function O(e, t) {
    e = P(e);
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
  function D(e, t) {
    if (1 == (t = P(t)).size) {
      let a = t.item();
      for (let t of e.keys()) e.data[t] = a;
    } else {
      let a = O(t, e.shape).flat;
      for (let t of e.keys()) e.data[t] = a.next().value;
    }
  }
  function* Y(e, t = !0) {
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
  function P(e, t = undefined) {
    return e instanceof z ? null == t ? e : e.astype(t, !1) : E(e, t);
  }
  function R(e, t = undefined) {
    return e = V(e), t = c(t), new z(e, t.new($(e)), t);
  }
  function K(e, t = undefined) {
    return R((e = P(e)).shape, t ?? e.dtype);
  }
  function V(e) {
    return e ? ("function" == typeof e.toarray && (e = e.toarray()), "object" == typeof e && null != e.length ? e : [e]) : [e];
  }
  function X(e, t) {
    e = P(e), t = V(t);
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
    if (null == e.base) return e.as_strided(t, A(t, t.length, e.itemsize));
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
  l.add("shape", () => I([[[3, 9]], [[3, 9, 3]], [[3, 9]]]), () => [3, 1]).add("shape", () => I([1, 2, 3, [1, 3]]), () => [4]).add("shape", () => I([0]), () => [1]).add("shape", () => I(0), () => []).add("shape", () => I([C(24).reshape(1, 2, 3, 4), C(24).reshape(1, 2, 12), C(24).reshape(1, 2, 12)]), () => [3, 1, 2]).add("shape", () => I([C(24).reshape(1, 2, 3, 4), C(24).reshape(1, 2, 3, 4), C(24).reshape(1, 2, 3, 4)]), () => [3, 1, 2, 3, 4]), l.add("broadcast_to", () => O(E([1, 2, 3]).reshape(3), [3, 3]).toarray(), () => [[1, 2, 3], [1, 2, 3], [1, 2, 3]]), l.add("broadcast_to", () => O(E([1, 2, 3]).reshape(1, 3, 1), [2, 3, 4]).toarray(), () => [[[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]], [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]]]), l.add("copyto", () => {
    let e = P([4, 5, 6]);
    return D(e, [1, 2, 3]), e;
  }, () => [1, 2, 3]).add("copyto", () => {
    let e = P([[1, 2, 3], [4, 5, 6]]);
    return D(e, [[4, 5, 6], [7, 8, 9]]), e;
  }, () => [[4, 5, 6], [7, 8, 9]]).add("copyto", () => {
    let e = P([[0, 1, 2], [3, 4, 5]]);
    return D(e.at(x(), 1), [-1, -2]), e;
  }, () => [[0, -1, 2], [3, -2, 5]]), l.add("asarray", () => {
    let e = E([[1, 2], [3, 4]]);
    return P(e) === e;
  }, () => !0).add("asarray", () => P([[1, 2], [3, 4]]), () => [[1, 2], [3, 4]]), l.add("empty", () => R([2, 2]), () => [[,,], [,,]]).add("empty", () => R(0), () => []).add("empty", () => R([]), () => {}), l.add("empty_like", () => K([[1, 2, 3], [4, 5, 6]]), () => [[,,,], [,,,]]).add("empty_like", () => K([1, 2, 3, [1, 3]]), () => [,,,,]), l.add(X, () => X(E([1, 2, 3, 4, 5]).at(x("::-2")), -1), () => E([5, 3, 1])).add(X, () => X(E([1]), []), () => E(1)).add(X, () => X(E(1), 1), () => E([1])).add(X, () => X(E(1), -1), () => E([1])).add("reshape", () => X(P([[0, 1], [2, 3], [4, 5]]), [2, 3]), () => [[0, 1, 2], [3, 4, 5]]).add("reshape", () => X(P([[[[0, 1]]]]), [2, -1]), () => [[0], [1]]).add("reshape", () => {
    let e = P([[[[0, 1]]]]);
    return X(e, [2, -1]).base === e;
  }, () => !0).add("reshape", () => {
    let e = P([[[[0, 1]]]]).at(0);
    return X(e, [2, -1]).base === e;
  }, () => !1).add("reshape", () => X(E([[1, 2, 3], [4, 5, 6]]), [-1]), () => E([1, 2, 3, 4, 5, 6])).add("reshape", () => {
    let e = C(30),
      t = e.reshape([10, 3]).at(x("::2")),
      a = t.reshape(t.shape);
    return [t.toarray(), X(t, [1, 1, 5, -1, 3]).base === e, t.base === e, t.reshape(-1).base === e, a === t, a.base === e];
  }, () => [E([[0, 1, 2], [6, 7, 8], [12, 13, 14], [18, 19, 20], [24, 25, 26]]).toarray(), !0, !0, !1, !1, !0]);
  class G {
    #n;
    constructor(e) {
      this.base = e;
      let {
        shape: t,
        strides: a,
        offset: r
      } = e;
      this.#n = Yn(t, a, r);
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
      if ("number" == typeof e) return E(r.item(e), r.dtype);
      "string" == typeof e && (e = x(e)), e instanceof m ? (t = e.indices(r.size), a = R([t.slicelength], r.dtype)) : (t = P(e).flat, a = K(e));
      let n = 0;
      for (let e of t) a.data[n++] = r.item(e);
      return a;
    }
    set(e, t) {
      let {
        base: a
      } = this;
      if ("number" == typeof e) return a.itemset(e, t), this;
      "string" == typeof e && (e = x(e)), t = t instanceof G ? [...t] : P(t).flatten().data;
      let r = e instanceof m ? e.indices(a.size) : P(e).flat,
        n = 0;
      for (let e of r) a.itemset(e, t[n++ % t.length]);
      return this;
    }
    copy() {
      return E([...this], this.base.dtype);
    }
  }
  function U(e, t, a = undefined) {
    let r = R(e, a ?? q(t));
    return D(r, t), r;
  }
  function W(e, t, a = undefined) {
    let r = K(e, a ?? q(t));
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
  function C(e, t = undefined, a = 1) {
    null == t && (t = e, e = 0);
    let r = Math.max(0, (t - e) / a | 0),
      n = R([r], "number"),
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
  function H(e, t, a = null, r = null, n = "raise") {
    if (e = P(e), t = E(t), null == a) {
      t.data = L(t.data, n, e.size);
      let a = t.shape;
      if (null == r) r = R(a);else if (!Fe(r.shape, a)) throw "output array does not match result of ndarray.take";
      for (let a = 0; a < t.size; a++) r.data[a] = e.item(t.data[a]);
      return r;
    }
    {
      a < 0 && (a += e.ndim), t.data = L(t.data, n, e.shape[a]);
      let s = e.shape.slice();
      if (s.splice(a, 1, ...t.shape), null == r) r = R(s);else if (!Fe(r.shape, s)) throw "output array does not match result of ndarray.take";
      let l = Array(a).fill(x());
      for (let a of Y(t.shape)) r.get(l.concat(a)).set(e.get([...l, t.item(a)]));
      return r;
    }
  }
  function L(e, t, r) {
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
    return re(e = P(e, t)) ? e : E(e);
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
    e = P(e);
    let r = [...Array(e.ndim).keys()];
    return [r[t], r[a]] = [r[a], r[t]], se(e, r);
  }
  function se(e, t = null) {
    e = P(e);
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
  function le(...e) {
    if (1 != e.length) return e.map(e => le(e));
    let t = P(e[0]),
      {
        ndim: a
      } = t;
    return a >= 1 ? t : t.copy().reshape([1]);
  }
  function ie(...e) {
    if (1 != e.length) return e.map(e => ie(e));
    let t = P(e[0]),
      {
        ndim: a,
        shape: r
      } = t;
    return a >= 2 ? t : 1 == a ? t.reshape([1, r[0]]) : t.copy().reshape([1, 1]);
  }
  function de(...e) {
    if (1 != e.length) return e.map(e => de(e));
    let t = P(e[0]),
      {
        ndim: a,
        shape: r
      } = t;
    return a >= 3 ? t : 2 == a ? t.reshape([r[0], r[1], 1]) : 1 == a ? t.reshape([1, r[0], 1]) : t.copy().reshape([1, 1, 1]);
  }
  l.add("Flatiter", () => {
    let e = E([0, 1, 2, 3, 4, 5]).reshape(2, 3),
      t = new G(e),
      a = [];
    for (let e of t) a.push(e);
    return a;
  }, () => [0, 1, 2, 3, 4, 5]), l.add("Flatiter.get", () => new G(E([[1, 2, 3], [4, 5, 6]])).at(3), () => 4).add("Flatiter.get", () => new G(E([[1, 2, 3], [4, 5, 6]])).at(x(2, -2)), () => E([3, 4])).add("Flatiter.get", () => new G(E([[1, 2, 3], [4, 5, 6]])).get([3, 4, -1]), () => [4, 5, 6]), l.add("Flatiter.set", () => {
    let e = E([[3, 3, 3], [3, 3, 3]]);
    return new G(e).set([1, -1], [[1], [2]]), e;
  }, () => [[3, 1, 3], [3, 3, 2]]).add("Flatiter.set", () => {
    let e = E([[1, 2, 3], [4, 5, 6]]);
    return e.flat.set([1, 0, 1], [[1, 2, 3], [5, 6, 7]]), e;
  }, () => E([[2, 3, 3], [4, 5, 6]])).add("Flatiter.set", () => {
    let e = E([[1, 2, 3], [4, 5, 6]]);
    return e.flat.set(x(1, -1), [[1, 2, 3], [5, 6, 7]]), e;
  }, () => E([[1, 1, 2], [3, 5, 6]])).add("Flatiter.set", () => {
    let e = E([[1, 2, 3], [4, 5, 6]]);
    return e.flat.set(":", [[1, 2]]), e;
  }, () => E([[1, 2, 1], [2, 1, 2]])), l.add("Flatiter.copy", () => new G(E([0, 1, 2, 3, 4, 5]).reshape(2, 3).at(x([,, -1]))).copy(), () => [3, 4, 5, 0, 1, 2]), l.add("full", () => U([2, 2], 1 / 0), () => [[1 / 0, 1 / 0], [1 / 0, 1 / 0]]).add("full", () => U([2, 2], 10), () => [[10, 10], [10, 10]]).add("full", () => U([2, 2], [1, 2]), () => [[1, 2], [1, 2]]).add("full", () => U(2, -1), () => [-1, -1]), l.add(W, () => W([1], 2), () => [2]).add(W, () => W(1, 99), () => 99).add(W, () => je(W([[0, 1], [2, 3]], [1.1, 2.2], "int8"), E([[1, 2], [1, 2]])), () => !0), l.add("broadcast_shapes", () => J([1, 2], [3, 1], [3, 2]), () => [3, 2]), l.add("broadcast_shapes", () => J([6, 7], [5, 6, 1], [7], [5, 1, 7]), () => [5, 6, 7]), l.add("arange", () => C(3), () => E([0, 1, 2])).add("arange", () => C(-10, 10), () => E([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).add("arange", () => C(-10, 10, -1), () => E([])).add("arange", () => C(3, 7, 2), () => E([3, 5])).add("arange", () => C(0, -10, -1), () => E([0, -1, -2, -3, -4, -5, -6, -7, -8, -9])), l.add("linspace", () => B(2, 3, 5), () => E([2, 2.25, 2.5, 2.75, 3])).add("linspace", () => B(2, 3, 5, !1), () => E([2, 2.2, 2.4, 2.6, 2.8])).add("linspace", () => B(2, 3, 5, !0, !0), () => [E([2, 2.25, 2.5, 2.75, 3]), .25]).add("linspace", () => B(2, 3, 5, !1, !0), () => [E([2, 2.2, 2.4, 2.6, 2.8]), .2]).add("linspace", () => B(1, 10, 10, !1), () => E([1, 1.9, 2.8, 3.7, 4.6, 5.5, 6.4, 7.3, 8.2, 9.1])), l.add("take", () => H([4, 3, 5, 7, 6, 8], [0, 1, 4]), () => E([4, 3, 6])).add("take", () => H([4, 3, 5, 7, 6, 8], [[0, 1], [2, 3]]), () => E([[4, 3], [5, 7]])).add("take", () => H(E([[1, 2], [3, 4], [5, 6], [7, 8]]), [[0, 1], [2, 3]], 0), () => E([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])).add("take", () => H(E([[1, 2], [3, 4], [5, 6], [7, 8]]), E([[[[0, 1], [0, 1]]]]), 1), () => E([[[[[1, 2], [1, 2]]]], [[[[3, 4], [3, 4]]]], [[[[5, 6], [5, 6]]]], [[[[7, 8], [7, 8]]]]])).add("take", () => H([[5, 6, 2, 7, 1], [4, 9, 2, 9, 3]], [0, 4], 1), () => [[5, 1], [4, 3]]), l.add(ae, () => {
    let e = Q([3, 1, 5]).at(x(), x([,, 3]), x());
    return ae(e) === e;
  }, () => !0), l.add(ae, () => {
    let e = Q([3, 4, 5]).at(x(), x([,, 1]), x());
    return ae(e) === e;
  }, () => !0), l.add(ae, () => {
    let e = Q([3, 4, 5]).at(x(), x(), x(1));
    return ae(e) === e;
  }, () => !1), l.add(ae, () => {
    let e = Q([3]).at(x([,, -3]));
    return ae(e) === e;
  }, () => !0), l.add(ae, () => {
    let e = Q([2]).at(x([,, 2]));
    return ae(e) === e;
  }, () => !0), l.add(ae, () => {
    let e = Q([3]).at(x([,, 2]));
    return ae(e) === e;
  }, () => !1), l.add(ae, () => {
    let e = Q([3]).at(x([1, 2]));
    return ae(e) === e;
  }, () => !0).add(ae, () => {
    let e, t;
    return e = E([]), t = ae(e), e === t;
  }, () => !0).add(ae, () => {
    let e, t;
    return e = E(5), t = ae(e), e === t;
  }, () => !1), l.add(ne, () => ne(E([[1, 2, 3]]), 0, 1), () => E([[1], [2], [3]])).add(ne, () => ne(E([[[0, 1], [2, 3]], [[4, 5], [6, 7]]]), 0, 2), () => E([[[0, 4], [2, 6]], [[1, 5], [3, 7]]])), l.add(se, () => se(C(4).reshape([2, 2])), () => E([[0, 2], [1, 3]])).add(se, () => se(Q([1, 2, 3]), [1, 0, 2]), () => E([[[1, 1, 1]], [[1, 1, 1]]])).add(se, () => se(Q([2, 3, 4, 5])).shape, () => [5, 4, 3, 2]), l.add(le, () => le(1), () => E([1])).add(le, () => le(1, [3, 4]), () => [E([1]), E([3, 4])]).add(le, () => le(C(9).reshape([3, 3])), () => E([[0, 1, 2], [3, 4, 5], [6, 7, 8]])).add(le, () => {
    let e = E([1]),
      t = e.at(0),
      a = le(t);
    return a.set([0], -96), [e.toarray(), t.toarray(), a.toarray(), null === e.base, null === t.base, a.base != t, a.base];
  }, () => [E([1]), 1, E([-96]), !0, !1, !0, E(-96)]), l.add(ie, () => ie(3), () => E([[3]])).add(ie, () => {
    let e = C(3);
    return [ie(e), ie(e).base === e];
  }, () => [E([[0, 1, 2]]), !0]).add(ie, () => ie(1, [1, 2], [[1, 2]]), () => [E([[1]]), E([[1, 2]]), E([[1, 2]])]), l.add(de, () => de(3), () => E([[[3]]])).add(de, () => de(C(3)).shape, () => [1, 3, 1]).add(de, () => {
    let e = C(12).reshape(4, 3);
    return [de(e).shape, de(e).base === e.base];
  }, () => [[4, 3, 1], !0]).add(de, () => de([1, 2], [[1, 2]], [[[1, 2]]]), () => [[[[1], [2]]], [[[1], [2]]], [[[1, 2]]]]);
  class oe {
    constructor(e) {
      this.shape = J(...e.map(e => e.shape)), this.arrays = e.map(e => O(e, this.shape)), this.ndim = this.shape.length, this.size = $(this.shape), this.reset();
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
    return new oe(e.map(e => P(e)));
  }
  function he(e, t = e, a = 0, r = "number") {
    let n = ee([e, t], r),
      {
        data: s,
        size: l
      } = n;
    for (let e = a + Math.ceil(-a / (t + 1)) * (t + 1); e < l; e += t + 1) s[e] = 1;
    return n;
  }
  function fe(e, t = "number") {
    return he(e, e, 0, t);
  }
  function pe(e) {
    return null == e || "object" != typeof e ? 0 : null != e.ndim ? e.ndim : I(e).length;
  }
  l.add(ue, () => {
    let e = ue(E([[1], [2], [3]]), E([4, 5, 6])),
      t = R(e.shape),
      a = [];
    for (let [t, r] of e) a.push(t + r);
    return t.flat = a, t;
  }, () => E([[5, 6, 7], [6, 7, 8], [7, 8, 9]])).add(ue, () => {
    let e = [],
      t = ue(E([1, 2, 3]), E([[4], [5], [6]]));
    return e.push(t.index), e.push(t.next().value, t.next().value, t.next().value), e.push(t.index), t.reset(), e.push(t.index), e;
  }, () => [0, [1, 4], [2, 4], [3, 4], 3, 0]), l.add("eye", () => he(2), () => [[1, 0], [0, 1]]).add("eye", () => he(3, 3, 1), () => [[0, 1, 0], [0, 0, 1], [0, 0, 0]]).add("eye", () => he(4, 5, -1), () => [[0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0]]), l.add("identity", () => fe(3), () => [[1, 0, 0], [0, 1, 0], [0, 0, 1]]).add("identity", () => fe(0), () => E([]).reshape([0, 0]));
  const ce = pe;
  function me(e, t) {
    e = P(e), "number" == typeof t && (t = [t]);
    let a = t.length;
    if ((t = new Set(t)).size != a) throw "repeated axis";
    let r = e.ndim + a,
      n = [];
    for (let a = 0, s = 0; a < r; a++) n.push(t.has(a) ? 1 : e.shape[s++]);
    return e.reshape(n);
  }
  function ye(e, t = null) {
    e = P(e), null != t && (t = Ee(t));
    let {
        shape: a,
        ndim: r
      } = e,
      n = [];
    for (let e = 0; e < r; e++) (t ? t.includes(e) : 1 == a[e]) || n.push(a[e]);
    return e.reshape(n);
  }
  function ge(e) {
    return E(e);
  }
  function we(e, t, a = undefined) {
    let r = [];
    for (let a of Y(t)) r.push(e(a));
    return E(r, a ?? q(r)).reshape(t);
  }
  function be(e, t = -1, a = undefined) {
    let r;
    if (-1 == t) r = [...e];else {
      r = [];
      let a = 0;
      if (a < t) for (let n of e) if (r.push(n), a++, a >= t) break;
    }
    return E(r, a ?? q(r));
  }
  function xe(e) {
    e = le(e);
    let {
        ndim: t
      } = e,
      a = [];
    for (let e = 0; e < t; e++) a.push([]);
    for (let [r, n] of _e(e)) if (n) for (let e = 0; e < t; e++) a[e].push(r[e]);
    return a.map(e => P(e));
  }
  function* _e(e) {
    e = P(e);
    for (let t of Y(e.shape)) {
      let a = [t, e.item(t)];
      yield a;
    }
  }
  function ve(e) {
    return 0 == pe(e) ? ve(e = le(e)).at(x(), x(null, 0)) : se(xe(e));
  }
  function ze(e, t, a = null, r = null) {
    if (1 != (e = P(e)).ndim) throw "condition must be a 1-d array";
    return H(t, xe(e)[0], a, r);
  }
  function Ae(e) {
    e = ae(e);
    let {
      size: t,
      base: a,
      offset: r,
      itemsize: n
    } = e;
    return (e = e.as_strided([t], A([t], 1, n), r)).base = a, e;
  }
  function $e(e, t) {
    return ze(Ae(e), Ae(t));
  }
  function Me(e) {
    return xe(Ae(e))[0];
  }
  function ke(e, t = null, a = !1) {
    return sa(Qa(e, 0), t, null, a);
  }
  function Ne(e, t, a = !1) {
    if (Array.isArray(e) || (e = [e]), e = e.map(e => Re(e, t)), !a && new Set(e).size != e.length) throw "repeated axis";
    return e;
  }
  l.add("ndim", () => pe([[1, 2, 3], [4, 5, 6]]), () => 2).add("ndim", () => pe(P([[1, 2, 3], [4, 5, 6]])), () => 2).add("ndim", () => pe(1), () => 0).add("ndim", () => pe(null), () => 0), l.add(me, () => me(E([1, 2]), 0), () => E([[1, 2]])).add(me, () => me(E([1, 2]), 1), () => E([[1], [2]])).add(me, () => me(E([1, 2]), [0, 1]), () => E([[[1, 2]]])).add(me, () => me(E([1, 2]), [2, 0]), () => E([[[1], [2]]])).add(me, () => {
    let e = E([1, 2]);
    return me(e, [2, 0]).base === e;
  }, () => !0), l.add(ye, () => ye(E([[[0], [1], [2]]])).shape, () => [3]).add(ye, () => ye(E([[[0], [1], [2]]]), 0).shape, () => [3, 1]).add(ye, () => ye(E([[[0], [1], [2]]]), 2).shape, () => [1, 3]).add(ye, () => ye(E([[1234]])), () => E(1234)).add(ye, () => {
    let e, t, a, r, n;
    return e = C(20), t = e.reshape([5, -1]), a = t.at(x([,, -1])), r = ae(a), n = r.reshape([5, 1, 1, -1]), [n.reshape([5, -1]).base === r, n.reshape(-1).base === r, ye(n).base === r, e, t, a, ye(n)];
  }, () => [!0, !0, !0, E([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]), E([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15], [16, 17, 18, 19]]), E([[16, 17, 18, 19], [12, 13, 14, 15], [8, 9, 10, 11], [4, 5, 6, 7], [0, 1, 2, 3]]), E([[16, 17, 18, 19], [12, 13, 14, 15], [8, 9, 10, 11], [4, 5, 6, 7], [0, 1, 2, 3]])]), l.add(ge, () => {
    let e, t, a;
    return e = E([1, 2, 3]), t = e, a = ge(e), e.set([0], 10), [e.item(0) == t.item(0), e.item(0) == a.item(0)];
  }, () => [!0, !1]), l.add(we, () => we(([e, t]) => e, [2, 2]), () => E([[0, 0], [1, 1]])).add(we, () => we(([e, t]) => t, [2, 2]), () => E([[0, 1], [0, 1]])).add(we, () => we(([e, t]) => e == t, [3, 3]), () => E([[!0, !1, !1], [!1, !0, !1], [!1, !1, !0]])).add(we, () => we(([e, t]) => e + t, [3, 3]), () => E([[0, 1, 2], [1, 2, 3], [2, 3, 4]])), l.add(be, () => be({
    *[Symbol.iterator]() {
      for (let e = 0; e < 5; e++) yield e * e;
    }
  }), () => E([0, 1, 4, 9, 16])).add(be, () => be({
    *[Symbol.iterator]() {
      for (let e = 0; e < 5; e++) yield [e + 1, e + 2];
    }
  }), () => E([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6]])), l.add(xe, () => {
    let e;
    return e = E([[3, 0, 0], [0, 4, 0], [5, 6, 0]]).at(x("..."), null), xe(e);
  }, () => [E([0, 1, 2, 2]), E([0, 1, 0, 1]), E([0, 0, 0, 0])]).add(xe, () => xe(E([[!1, !1, !1], [!0, !0, !0], [!0, !0, !0]])), () => [E([1, 1, 1, 2, 2, 2]), E([0, 1, 2, 0, 1, 2])]).add(xe, () => xe(55), () => [E([0])]), l.add(_e, () => {
    {
      let e;
      e = E([[1, 2], [3, 4]]);
      let t = [];
      for (let [a, r] of _e(e)) t.push(a.slice(), r);
      return t;
    }
  }, () => [[0, 0], 1, [0, 1], 2, [1, 0], 3, [1, 1], 4]), l.add(ve, () => ve(55).shape, () => [1, 0]).add(ve, () => ve(ar(C(6).reshape(2, 3), 1)), () => E([[0, 2], [1, 0], [1, 1], [1, 2]])), l.add(ze, () => ze([0, 1], E([[1, 2], [3, 4], [5, 6]]), 0), () => E([[3, 4]])).add(ze, () => ze([!1, !0, !0], E([[1, 2], [3, 4], [5, 6]]), 0), () => E([[3, 4], [5, 6]])).add(ze, () => ze([!1, !0], E([[1, 2], [3, 4], [5, 6]]), 1), () => E([[2], [4], [6]])).add(ze, () => ze([!1, !0], E([[1, 2], [3, 4], [5, 6]])), () => E([2])), l.add(Ae, () => Ae(E([[1, 2, 3], [4, 5, 6]])), () => E([1, 2, 3, 4, 5, 6])).add(Ae, () => Ae(E([[1, 2, 3], [4, 5, 6]]).T), () => E([1, 4, 2, 5, 3, 6])).add(Ae, () => Ae(C(12).reshape(2, 3, 2).swapaxes(1, 2)), () => E([0, 2, 4, 1, 3, 5, 6, 8, 10, 7, 9, 11])).add(Ae, () => {
    let e, t;
    return e = C(40).reshape([5, -1]).copy(), t = e.at(null, x(":"), null, null, x("::2"), null), [t.reshape(-1).base == e, Ae(t).base];
  }, () => [!0, null]).add(Ae, () => {
    let e, t;
    return e = C(40).reshape([5, -1]).copy(), t = e.at(null, x(":"), null, null, x("::3"), null), [t.reshape(-1).base == e, Ae(t).base];
  }, () => [!1, null]), l.add($e, () => {
    let e, t;
    return e = C(12).reshape([3, 4]), t = E([[!0, !1, !1, !0], [!1, !1, !0, !1], [!1, !0, !1, !1]]), $e(t, e);
  }, () => E([0, 3, 6, 9])), l.add(Me, () => {
    let e;
    return e = C(-2, 3), Me(e);
  }, () => E([0, 1, 3, 4])), l.add(ke, () => {
    let e;
    return e = Q([2, 3, 4, 5]), ke(e);
  }, () => 120).add(ke, () => {
    let e;
    return e = Q([2, 3, 4, 5]), ke(e, 0);
  }, () => E([[[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]], [[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]], [[2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2]]])).add(ke, () => {
    let e;
    return e = Q([2, 3, 4, 5]), ke(e, 1);
  }, () => E([[[3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3]], [[3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3], [3, 3, 3, 3, 3]]])).add(ke, () => {
    let e;
    return e = Q([2, 3, 4, 5]), ke(e, -1);
  }, () => E([[[5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5]], [[5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5]]])).add(ke, () => {
    let e;
    return e = Q([2, 3, 4, 5]), ke(e, [0, -1]);
  }, () => E([[10, 10, 10, 10], [10, 10, 10, 10], [10, 10, 10, 10]])).add(ke, () => {
    let e;
    return e = Q([2, 3, 4, 5]), ke(e, [0, -1], !0);
  }, () => E([[[[10], [10], [10], [10]], [[10], [10], [10], [10]], [[10], [10], [10], [10]]]]));
  const Ee = Ne;
  class Se {
    constructor(e, t = null) {
      this.array = P(e);
      let {
        ndim: a,
        shape: r
      } = e;
      if (null != t && (t = Ne(t, a)), this.axis = t, null != t) {
        let e = [],
          n = [],
          s = [];
        for (let l = 0; l < a; l++) (s[l] = !t.includes(l)) ? (n[l] = 0, e.push(r[l])) : n[l] = x[":"];
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
      for (let t of Y(a)) {
        for (let a = 0, s = 0; a < e.ndim; a++) r[a] && (n[a] = t[s++]);
        yield [t, e.get(n)];
      }
    }
  }
  function qe(e, t = null) {
    return new Se(e, t);
  }
  function je(e, t, a = !1) {
    return e = P(e), t = P(t), !!Fe(e.shape, t.shape) && xt(a ? Te(e, t) : La(e, t));
  }
  function Ie(e, t) {
    return e = P(e), t = P(t), !!function (...e) {
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
    }(e.shape, t.shape) && xt(La(e, t));
  }
  function Fe(e, t) {
    if (e === t) return !0;
    if (e.length !== t.length) return !1;
    for (let a = 0; a < e.length; a++) if (e[a] !== t[a]) return !1;
    return !0;
  }
  const Te = it("nan_equal", (e, t) => e == t || Number.isNaN(e) && Number.isNaN(t));
  function Oe(e, t = 0, a = undefined) {
    if (0 == e.length) throw new Error("need at least one array to concatenate");
    e = e.map(e => P(e)), null == t && (e = e.map(e => Ae(e)), t = 0);
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
    t = Re(t, r);
    let s = n.slice();
    if (s[t] = e.reduce((e, a) => e + a.shape[t], 0), null == a) a = R(s);else {
      if (a.ndim != r) throw new Error("output array has wrong dimensionality");
      if (!Fe(a.shape, s)) throw new Error("output array is the wrong shape");
    }
    let l = Array(r).fill(x(":")),
      i = 0;
    for (let r of e) l[t] = x(i, i += r.shape[t]), a.set(l, r);
    return a;
  }
  function De(e, t, a) {
    e = P(e);
    let {
      ndim: r
    } = e;
    if (t = Ee(t, r), a = Ee(a, r), t.length != a.length) throw new Error("'src' and 'dst' arguments must have the same number of elements");
    let n = [...Array(r).keys()].filter(e => !t.includes(e));
    for (let e = 0; e < t.length; e++) n.splice(a[e], 0, t[e]);
    return se(e, n);
  }
  l.add(je, () => je([1, 2], [1, 2]), () => !0).add(je, () => je(E([1, 2]), E([1, 2])), () => !0).add(je, () => je([1, 2], [1, 2, 3]), () => !1).add(je, () => je([1, 2], [1, 4]), () => !1).add(je, () => {
    let e = E([1, NaN]);
    return je(e, e);
  }, () => !1).add(je, () => {
    let e = E([1, NaN]);
    return je(e, e, !0);
  }, () => !0), l.add(Ie, () => Ie([1, 2], [1, 2]), () => !0).add(Ie, () => Ie([1, 2], [1, 3]), () => !1).add(Ie, () => Ie([1, 2], [[1, 2], [1, 2]]), () => !0).add(Ie, () => Ie([1, 2], [[1, 2, 1, 2], [1, 2, 1, 2]]), () => !1).add(Ie, () => Ie([1, 2], [[1, 2], [1, 3]]), () => !1), l.add(Oe, () => {
    let e = E([[1, 2], [3, 4]]),
      t = E([[5, 6]]);
    return [Oe([e, t], 0), Oe([e, t.T], 1), Oe([e, t], null)];
  }, () => [E([[1, 2], [3, 4], [5, 6]]), E([[1, 2, 5], [3, 4, 6]]), E([1, 2, 3, 4, 5, 6])]), l.add(De, () => De(ee([3, 4, 5]), 0, -1).shape, () => [4, 5, 3]).add(De, () => De(ee([3, 4, 5]), -1, 0).shape, () => [5, 3, 4]);
  let Ye = e => [...Array(e).keys()];
  function Pe(e) {
    let t = Object.create(null);
    return (...a) => ((e, t, a) => e[t] ?? (e[t] = a(...t)))(t, a, e);
  }
  function Re(e, t) {
    let a = e;
    if (e = +e, !Number.isInteger(e)) throw new Error(`${a} cannot be cast to integer`);
    if (e < 0 && (e += t), e < 0 || t <= e) throw `axis ${a} is out of bounds for array of dimension ${t}`;
    return e;
  }
  let Ke = {};
  function Ve(e, t, a = !1) {
    if (null == e) return Ke[t] ?? (Ke[t] = Array(t).fill(1));
    let r = Array(t).fill(0);
    if (Array.isArray(e)) {
      for (let a = 0; a < e.length; a++) r[Re(e[a], t)] = 1;
      if (!a) {
        let a = 0;
        for (let e = 0; e < t; e++) a += r[e];
        if (a != e.length) throw "repeated axis";
      }
    } else r[Re(e, t)] = 1;
    return r;
  }
  let Xe = (e = null, t, a, r = t) => {
      let n = [];
      for (let e = 0; e < t.length; e++) n.push(r[e] == t[e] ? `${r[e]}` : `${r[e]}: ${t[e]}`);
      return null != e ? `${e} {${n.join(", ")}} = ${a}` : `({${n.join(", ")}} = ${a})`;
    },
    Ge = (e = null, t, a) => {
      Array.isArray(t) || (t = [t], a = [a]);
      let r = [];
      for (let e = 0; e < t.length; e++) r.push(`${t[e]} = ${a[e]}`);
      return null != e ? `${e} ${r.join(", ")}` : `${r.join(", ")}`;
    },
    Ue = (e, t, a) => `for(let ${e} = 0; ${e} < ${t}; ${e}++) {${a}}`,
    We = (...e) => `${e.join("; ")}`,
    Je = (e, ...t) => `${e}(${t.join(", ")})`,
    Ce = (e, t) => `${e}[${t}]`,
    Be = (e, t) => `${e}.${t}`,
    He = e => `(${e})`,
    Le = (...e) => `${e.map(He).join(" * ")}`,
    Qe = (...e) => `${e.map(He).join(" + ")}`,
    Ze = e => `return ${e}`;
  function et(e, t, a = t) {
    let r = "out",
      n = Ye(e).map(e => `x${e + 1}`),
      s = `${r}_offset`,
      l = n.map(e => `${e}_offset`),
      i = `${r}_data`,
      d = n.map(e => `${e}_data`),
      o = Ye(a).map(e => `${r}_strides_${e}`),
      u = n.map(e => Ye(t).map(t => `${e}_strides_${t}`)),
      h = Ye(t).map(e => `i_${e}`),
      f = Ye(t).map(e => `shape_${e}`);
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
      index: h,
      shape: f
    };
  }
  function tt(e, t, a, r) {
    let n = [];
    return n.push(Ge("let", t, Be(e, "data"))), n.push(Ge("let", a, Be(e, "offset"))), r.length > 0 && n.push(Xe("let", r, Be(e, "strides"), Ye(r.length))), n;
  }
  let at = Pe((e, t) => new Function(...function (e, t) {
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
          index: h,
          shape: f
        } = et(e, t),
        p = [];
      return p.push(...tt(r, i, s, o)), n.forEach((e, t) => {
        p.push(...tt(e, d[t], l[t], u[t]));
      }), p.push(Xe("let", f, Be(n[0], "shape"), Ye(f.length))), p.push(Ye(t).reverse().reduce((e, t) => Ue(h[t], f[t], e), We(Ge(null, [Ce(i, Qe(s, ...h.map((e, t) => Le(e, o[t]))))], [Je(a, ...d.map((e, t) => Ce(e, Qe(l[t], ...h.map((e, a) => Le(e, u[t][a]))))))]))), Ze(r)), [a, ...n, r, We(...p)];
    }(e, t))),
    rt = (Pe((e, t) => new Function()), Pe((e, t, a) => new Function(...function (e, t, a) {
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
          out_strides: h,
          x_strides: f,
          index: p,
          shape: c
        } = et(e, t, r),
        m = "initial",
        y = "accum",
        g = l.map(e => `${e}_start`),
        w = [];
      return w.push(...tt(s, o, i, h)), l.forEach((e, t) => {
        w.push(...tt(e, u[t], d[t], f[t]));
      }), w.push(Xe("let", c, Be(l[0], "shape"), Ye(c.length))), w.push(Ye(t).filter(e => !a[e]).reverse().reduce((e, t) => Ue(p[t], c[t], e), We(Ge("let", y, m), ...g.map((e, r) => Ge("let", e, Qe(d[r], ...Ye(t).filter(e => !a[e]).map(e => Le(p[e], f[r][e]))))), Ye(t).filter(e => a[e]).reverse().reduce((e, t) => Ue(p[t], c[t], e), We([Ge(null, y, Je(n, y, ...u.map((e, r) => Ce(e, Qe(g[r], ...Ye(t).filter(e => a[e]).map(e => Le(p[e], f[r][e])))))))])), Ge(null, Ce(o, Qe(i, ...Ye(t).filter(e => !a[e]).map((e, t) => Le(p[e], h[t])))), y))), Ze(s)), [n, ...l, s, m, We(...w)];
    }(e, t, a)))),
    nt = Pe((e, t, a) => new Function(...function (e, t, a) {
      let r = t,
        {
          fn: n,
          out: s,
          x: l,
          out_offset: i,
          x_offset: d,
          out_data: o,
          x_data: u,
          out_strides: h,
          x_strides: f,
          index: p,
          shape: c
        } = et(e, t, r),
        m = "initial",
        y = "accum",
        g = l.map(e => `${e}_start`),
        w = "offset_start",
        b = [];
      return b.push(...tt(s, o, i, h)), l.forEach((e, t) => {
        b.push(...tt(e, u[t], d[t], f[t]));
      }), b.push(Xe("let", c, Be(l[0], "shape"), Ye(c.length))), b.push(Ye(t).filter(e => !a[e]).reverse().reduce((e, t) => Ue(p[t], c[t], e), We(Ge("let", y, m), ...g.map((e, r) => Ge("let", e, Qe(d[r], ...Ye(t).filter(e => !a[e]).map(e => Le(p[e], f[r][e]))))), Ge("let", w, Qe(i, ...Ye(t).filter(e => !a[e]).map(e => Le(p[e], h[e])))), Ye(t).filter(e => a[e]).reverse().reduce((e, t) => Ue(p[t], c[t], e), We([Ge(null, y, Je(n, y, ...u.map((e, r) => Ce(e, Qe(g[r], ...Ye(t).filter(e => a[e]).map(e => Le(p[e], f[r][e]))))))), Ge(null, Ce(o, Qe(w, ...Ye(t).filter(e => a[e]).map((e, t) => Le(p[e], h[e])))), y)])))), Ze(s)), [n, ...l, s, m, We(...b)];
    }(e, t, a)));
  function st(e, t, a = t.length, r = !1) {
    let n;
    if (1 == a) n = r ? (e, a = null, r = null) => (e = P(e), null == a ? a = R(e.shape) : e = O(e, a.shape), at(1, a.ndim)(t.bind(null, r), e, a)) : (e, a = null) => (e = P(e), null == a ? a = R(e.shape) : e = O(e, a.shape), at(1, a.ndim)(t, e, a));else {
      if (2 != a) throw "not support on narg > 2 yet";
      n = (e, a, r = null) => {
        let n;
        return e = P(e), a = P(a), null == r ? (n = J(e.shape, a.shape), r = R(n)) : n = r.shape, e = O(e, n), a = O(a, n), at(2, r.ndim)(t, e, a, r);
      };
    }
    return Object.defineProperty(n, "name", {
      value: e
    });
  }
  function lt(e, t, a = !1) {
    if (a) {
      function r(e, a = null, r = null) {
        return e = P(e), null == a ? a = R(e.shape) : e = O(e, a.shape), at(1, a.ndim)(t.bind(null, r), e, a);
      }
      return Object.defineProperty(r, "name", {
        value: e
      });
    }
    function r(e, a = null) {
      return e = P(e), null == a ? a = R(e.shape) : e = O(e, a.shape), at(1, a.ndim)(t, e, a);
    }
    return Object.defineProperty(r, "name", {
      value: e
    });
  }
  function it(e, t) {
    return Object.defineProperty(function (e, a, r = null) {
      let n;
      return e = P(e), a = P(a), null == r ? (n = J(e.shape, a.shape), r = R(n)) : n = r.shape, e = O(e, n), a = O(a, n), at(2, r.ndim)(t, e, a, r);
    }, "name", {
      value: e
    });
  }
  function dt(e, t, a) {
    return Object.defineProperty(function (e, r = null, n = null, s = a) {
      e = P(e), null == r && (e = Ae(e));
      let {
        ndim: l,
        shape: i
      } = e;
      if (r = Ve(r, l), null == n) n = R(i);else if (!Fe(i, n.shape)) throw "unmatch shape";
      return nt(1, l, r)(t, e, n, s), n;
    }, "name", {
      value: e
    });
  }
  const ot = [];
  function ut(e, t, a = t.length - 1, r) {
    if (1 != a) throw "not support on narg > 1 yet";
    return Object.defineProperty(function (e, a = null, n = null, s = !1, l = r, i = !0) {
      null != n && (i = !1), e = P(e);
      let d,
        {
          ndim: o,
          shape: u
        } = e;
      if (null == a) a = Ve(a, o), d = ot;else {
        a = Ve(a, o), d = [];
        for (let e = 0; e < o; e++) a[e] || d.push(u[e]);
      }
      if (s) {
        let r = u.slice();
        for (let e = 0; e < o; e++) a[e] && (r[e] = 1);
        if (null == n) n = R(r);else if (!Fe(r, n.shape)) throw "unmatch shape";
        return rt(1, o, a)(t, e, n.reshape(d), l), i && 0 == n.ndim ? n.item() : n;
      }
      if (null == n) n = R(d);else if (!Fe(d, n.shape)) throw "unmatch shape";
      return n = rt(1, o, a)(t, e, n, l), i && 0 == n.ndim ? n.item() : n;
    }, "name", {
      value: e
    });
  }
  const ht = it("add", (e, t) => e + t),
    ft = it("subtract", (e, t) => e - t),
    pt = it("multiply", (e, t) => e * t),
    ct = it("divide", (e, t) => e / t),
    mt = ct,
    yt = it("floor_divide", (e, t) => e / t | 0),
    gt = it("mod", (e, t) => (e % t + t) % t),
    wt = gt,
    bt = it("power", (e, t) => e ** t);
  l.add(ht, () => ht(C(9).reshape([3, 3]), C(3)), () => E([[0, 2, 4], [3, 5, 7], [6, 8, 10]])), l.add(ft, () => ft(1, 4), () => -3).add(ft, () => ft(C(9).reshape([3, 3]), C(3)), () => E([[0, 0, 0], [3, 3, 3], [6, 6, 6]])), l.add(pt, () => pt(2, 4), () => 8).add(ft, () => pt(C(9).reshape([3, 3]), C(3)), () => E([[0, 1, 4], [0, 4, 10], [0, 7, 16]])), l.add(ct, () => ct(2, 4), () => .5).add(ct, () => ct(C(9).reshape([3, 3]), C(3)), () => E([[NaN, 1, 1], [1 / 0, 4, 2.5], [1 / 0, 7, 4]])), l.add(gt, () => gt([4, 7], [2, 3]), () => E([0, 1])).add(gt, () => gt(C(7), 5), () => E([0, 1, 2, 3, 4, 0, 1])), l.add(bt, () => bt(C(6), 3), () => E([0, 1, 8, 27, 64, 125])).add(bt, () => bt(C(6), [1, 2, 3, 3, 2, 1]), () => E([0, 1, 8, 27, 16, 5])).add(bt, () => bt(C(6), E([[1, 2, 3, 3, 2, 1], [1, 2, 3, 3, 2, 1]])), () => E([[0, 1, 8, 27, 16, 5], [0, 1, 8, 27, 16, 5]])).add(bt, () => bt(C(6), E([1, 2, 3, 3, 2, 1])), () => E([0, 1, 8, 27, 16, 5]));
  const xt = ut("all", (e, t) => e && !!t, 1, !0),
    _t = ut("any", (e, t) => e || !!t, 1, !1),
    vt = lt("isfinite", Number.isFinite),
    zt = lt("isinf", e => e == Number.POSITIVE_INFINITY || e == Number.NEGATIVE_INFINITY),
    At = lt("isinf", Number.isNaN),
    $t = lt("isinf", e => e == Number.NEGATIVE_INFINITY),
    Mt = lt("isinf", e => e == Number.POSITIVE_INFINITY);
  l.add(xt, () => 0 == xt([[!0, !1], [!0, !0]]), () => !0).add(xt, () => xt([[!0, !1], [!0, !0]], 0), () => E([!0, !1])).add(xt, () => xt([-1, 4, 5]), () => !0).add(xt, () => {
    let e = E(!1);
    return [xt([-1, 4, 5], null, e) === e, e];
  }, () => [!0, E(!0)]), l.add(_t, () => _t([[!0, !1], [!0, !0]]), () => !0).add(_t, () => _t([[!0, !1], [!1, !1]], 0), () => E([!0, !1])).add(_t, () => _t([-1, 0, 5]), () => !0).add(_t, () => _t(NaN), () => !1);
  const kt = Math.E,
    Nt = NaN,
    Et = Math.PI,
    St = 1 / 0,
    qt = -1 / 0,
    jt = lt("sin", Math.sin),
    It = lt("cos", Math.cos),
    Ft = lt("tan", Math.tan),
    Tt = lt("arcsin", Math.asin),
    Ot = lt("arccos", Math.acos),
    Dt = lt("arctan", Math.atan),
    Yt = lt("hypot", Math.hypot),
    Pt = lt("arctan2", Math.atan2),
    Rt = lt("degrees", e => 180 * e / Et),
    Kt = lt("radians", e => e / 180 * Et);
  function Vt(e, t = 2 * Et, a = t / 2) {
    if (1 != (e = P(e)).ndim) throw "unwrap currently only supports 1d arrays";
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
    return P(r);
  }
  const Xt = lt("rad2deg", e => 180 * e / Et),
    Gt = lt("deg2rad", e => e / 180 * Et),
    Ut = lt("sinh", Math.sinh),
    Wt = lt("cosh", Math.cosh),
    Jt = lt("tanh", Math.tanh),
    Ct = lt("arcsinh", Math.asinh),
    Bt = lt("arccosh", Math.acosh),
    Ht = lt("arctanh", Math.atanh),
    Lt = lt("_around", ({
      decimals: e
    }, t) => {
      let a = 10 ** e,
        r = t * a,
        n = Math.round(r),
        s = r % 1;
      return .5 != s && -.5 != s || (n = n % 2 ? n - 1 : n), n / a;
    }, !0),
    Qt = function (e, t = 0, a) {
      return Lt(e, a, {
        decimals: t
      });
    },
    Zt = lt("rint", e => {
      let t = e % 1,
        a = Math.round(e);
      return .5 != t && -.5 != t || (a = a % 2 ? a - 1 : a), a;
    }),
    ea = lt("fix", e => Math.sign(e) * Math.floor(Math.abs(e))),
    ta = lt("floor", Math.floor),
    aa = lt("ceil", Math.ceil),
    ra = lt("trunc", Math.trunc),
    na = ut("prod", (e, t) => e * t, 1, 1),
    sa = ut("sum", (e, t) => e + t, 1, 0),
    la = ut("nanprod", (e, t) => e * (isNaN(t) ? 1 : t), 1, 1),
    ia = ut("nansum", (e, t) => e + (isNaN(t) ? 0 : t), 1, 0),
    da = dt("cumprod", (e, t) => e * t, 1),
    oa = dt("cumsum", (e, t) => e + t, 0),
    ua = null,
    ha = null;
  function fa(e, t = 1, a = -1) {
    e = P(e);
    let {
      ndim: r
    } = e;
    a = Re(a, r);
    let n = Array(r).fill(x()),
      s = Array(r).fill(x());
    n[a] = x(1, null), s[a] = x(null, -1);
    for (let a = 0; a < t; a++) e = ft(e.get(n), e.get(s));
    return e;
  }
  function pa(e, t = null, a = null) {
    if (e = fa(X(e, -1)), null != a || null != t) {
      let r = [];
      null != a && r.push(a), r.push(e), null != t && r.push(t), e = Oe(r, null);
    }
    return e;
  }
  const ca = lt("exp", Math.exp, 1),
    ma = lt("expm1", e => Math.exp(e) - 1),
    ya = lt("exp2", e => 2 ** e),
    ga = lt("log", Math.log),
    wa = lt("log10", Math.log10),
    ba = lt("log2", Math.log2),
    xa = lt("log1p", Math.log1p),
    _a = it("logaddexp", (e, t) => Math.log(Math.exp(e) + Math.exp(t))),
    va = it("logaddexp2", (e, t) => Math.log2(2 ** e + 2 ** t)),
    za = lt("signbit", e => e < 0),
    Aa = it("copysign", (e, t) => t < 0 ? -Math.abs(e) : Math.abs(e)),
    $a = it("ldexp", (e, t) => e * 2 ** t),
    Ma = lt("positive", e => +e),
    ka = lt("negative", e => -e);
  function Na(e, t) {
    for (; 0 != t;) {
      let a = t;
      t = e % t, e = a;
    }
    return e;
  }
  const Ea = it("lcm", function (e, t) {
      return e * t / Na(e, t);
    }),
    Sa = it("gcd", Na),
    qa = lt("reciprocal", e => 1 / e),
    ja = it("fmod", (e, t) => e - (e / t | 0) * t),
    Ia = it("maximum", Math.max),
    Fa = it("minimum", Math.min),
    Ta = ut("amax", Math.max, 1, -St),
    Oa = ut("amin", Math.min, 1, St),
    Da = lt("sqrt", Math.sqrt),
    Ya = lt("cbrt", Math.cbrt),
    Pa = lt("square", e => e ** 2),
    Ra = lt("abs", Math.abs),
    Ka = Ra,
    Va = lt("sign", Math.sign),
    Xa = lt("nan_to_num", e => isNaN(e) ? 0 : e == 1 / 0 ? Number.MAX_VALUE : e == -1 / 0 ? Number.MIN_VALUE : e);
  l.add(Ta, () => Ta(C(4).reshape(2, 2)), () => 3).add(Ta, () => Ta(C(4).reshape(2, 2), 0), () => E([2, 3])).add(Ta, () => Ta(C(4).reshape(2, 2), 1), () => E([1, 3])), l.add(Ia, () => Ia([2, 3, 4], [1, 5, 2]), () => E([2, 5, 4])).add(Ia, () => Ia(he(2), [.5, 2]), () => E([[1, 2], [.5, 2]])), l.add(ja, () => ja([-3, -2, -1, 1, 2, 3], 2), () => E([-1, 0, -1, 1, 0, 1])).add(ja, () => wt([-3, -2, -1, 1, 2, 3], 2), () => E([1, 0, 1, 1, 0, 1])), l.add(Sa, () => Sa(12, 20), () => 4).add(Sa, () => Sa(C(6), 20), () => E([20, 1, 2, 1, 4, 5])), l.add(Ea, () => Ea(12, 20), () => 60).add(Ea, () => Ea(C(6), 20), () => E([0, 20, 20, 60, 20, 20])), l.add(Aa, () => Aa(1.3, -1), () => -1.3).add(Aa, () => 1 / Aa(0, 1), () => 1 / 0).add(Aa, () => 1 / Aa(0, -1), () => -1 / 0), l.add(za, () => za(-1.2), () => !0).add(za, () => za(E([1, -2.3, 2.1])), () => E([!1, !0, !1])), l.add(_a, () => {
    let e = ga(1e-50),
      t = ga(2.5e-50);
    return _a(e, t);
  }, () => -113.87649168120691), l.add(Vt, () => Vt([0, 1, 2, -1, 0], 4), () => E([0, 1, 2, 3, 4])).add(Vt, () => Vt([1, 2, 3, 4, 5, 6, 1, 2, 3], 6), () => E([1, 2, 3, 4, 5, 6, 7, 8, 9])).add(Vt, () => Vt([2, 3, 4, 5, 2, 3, 4, 5], 4), () => E([2, 3, 4, 5, 6, 7, 8, 9])), l.add(Qt, () => Qt([.37, 1.64]), () => E([0, 2])).add(Qt, () => Qt([.37, 1.64], 1), () => E([.4, 1.6])).add(Qt, () => Qt([.5, 1.5, 2.5, 3.5, 4.5]), () => E([0, 2, 2, 4, 4])).add(Qt, () => Qt([5, 15, 25, 35, 45], -1), () => E([0, 20, 20, 40, 40])).add(Qt, () => Qt([-5, -15, -25, -35, -45], -1), () => E([0, -20, -20, -40, -40])).add(Qt, () => Qt([1, 2, 3, 11], 1), () => E([1, 2, 3, 11])).add(Qt, () => Qt([1, 2, 3, 11], -1), () => E([0, 0, 0, 10])), l.add(Zt, () => Zt(E([-1.7, -1.5, -.2, .2, 1.5, 1.7, 2])), () => E([-2, -2, -0, 0, 2, 2, 2])), l.add(ea, () => ea(3.14), () => 3).add(ea, () => ea(3), () => 3).add(ea, () => ea([2.1, 2.9, -2.1, -2.9]), () => E([2, 2, -2, -2])), l.add(na, () => na([]), () => 1).add(na, () => na([1, 2]), () => 2).add(na, () => na(E([[1, 2], [3, 4]])), () => 24).add(na, () => na(E([[1, 2], [3, 4]]), 1), () => E([2, 12])).add(na, () => na(E([[1, 2], [3, 4]]), 0), () => E([3, 8])).add(na, () => na([1, 2], null, null, null, 5), () => 10), l.add(sa, () => sa([.5, 1.5]), () => 2).add(sa, () => sa([[0, 1], [0, 5]]), () => 6).add(sa, () => sa([[0, 1], [0, 5]], 0), () => E([0, 6])).add(sa, () => sa([[0, 1], [0, 5]], 1), () => E([1, 5])).add(sa, () => sa([10], null, null, null, 5), () => 15).add(sa, () => sa(C(100).reshape(5, -1, 1).at(x("::-2"), x("2:7")), [0, -1]), () => E([126, 129, 132, 135, 138])).add(sa, () => {
    let e = C(100);
    return e = e.at(x(20, -20)).reshape([2, 1, -1, 2]).at(x("..."), x("::-1")), sa(e, [1, -2], null, !0, -99);
  }, () => E([[[[426, 411]]], [[[876, 861]]]])), l.add(la, () => la(1), () => 1).add(la, () => la([1]), () => 1).add(la, () => la([1, Nt]), () => 1).add(la, () => la(E([[1, 2], [3, Nt]])), () => 6).add(la, () => la(E([[1, 2], [3, Nt]]), 0), () => E([3, 2])), l.add(ia, () => ia(1), () => 1).add(ia, () => ia([1]), () => 1).add(ia, () => ia([1, Nt]), () => 1).add(ia, () => ia(E([[1, 1], [1, Nt]])), () => 3).add(ia, () => ia(E([[1, 1], [1, Nt]]), 0), () => E([2, 1])).add(ia, () => ia([1, Nt, St]), () => St).add(ia, () => ia([1, Nt, qt]), () => -St), l.add(da, () => da(E([1, 2, 3])), () => E([1, 2, 6])).add(da, () => da(E([[1, 2, 3], [4, 5, 6]])), () => E([1, 2, 6, 24, 120, 720])).add(da, () => da(E([[1, 2, 3], [4, 5, 6]]), 0), () => E([[1, 2, 3], [4, 10, 18]])).add(da, () => da(E([[1, 2, 3], [4, 5, 6]]), 1), () => E([[1, 2, 6], [4, 20, 120]])), l.add(oa, () => oa(E([[1, 2, 3], [4, 5, 6]])), () => E([1, 3, 6, 10, 15, 21])).add(oa, () => oa(E([[1, 2, 3], [4, 5, 6]]), 0), () => E([[1, 2, 3], [5, 7, 9]])).add(oa, () => oa(E([[1, 2, 3], [4, 5, 6]]), 1), () => E([[1, 3, 6], [4, 9, 15]])), l.add(fa, () => fa(E([1, 2, 4, 7, 0])), () => E([1, 2, 3, -7])).add(fa, () => fa(E([1, 2, 4, 7, 0]), 2), () => E([1, 1, -10])).add(fa, () => fa(E([[1, 3, 6, 10], [0, 5, 6, 8]])), () => E([[2, 3, 4], [5, 1, 2]])).add(fa, () => fa(E([[1, 3, 6, 10], [0, 5, 6, 8]]), 1, 0), () => E([[-1, 2, 0, -2]])), l.add(pa, () => pa(E([1, 2, 4, 7, 0])), () => E([1, 2, 3, -7])).add(pa, () => pa(E([1, 2, 4, 7, 0]), E([88, 99]), -99), () => E([-99, 1, 2, 3, -7, 88, 99])).add(pa, () => pa([[1, 2, 4], [1, 6, 24]]), () => E([1, 2, -3, 5, 18])), l.add(Ra, () => Ra(E([-1.2, 1.2])), () => E([1.2, 1.2])), l.add(jt, () => jt(C(30).reshape(2, 5, 1, -1, 1)).shape, () => E([[[[[0], [.8414709848078965], [.9092974268256817]]], [[[.1411200080598672], [-.7568024953079282], [-.9589242746631385]]], [[[-.27941549819892586], [.6569865987187891], [.9893582466233818]]], [[[.4121184852417566], [-.5440211108893698], [-.9999902065507035]]], [[[-.5365729180004349], [.4201670368266409], [.9906073556948704]]]], [[[[.6502878401571168], [-.2879033166650653], [-.9613974918795568]]], [[[-.7509872467716762], [.14987720966295234], [.9129452507276277]]], [[[.8366556385360561], [-.008851309290403876], [-.8462204041751706]]], [[[-.9055783620066238], [-.13235175009777303], [.7625584504796028]]], [[[.956375928404503], [.27090578830786904], [-.6636338842129675]]]]]).shape);
  const Ga = lt("invert", e => ~e),
    Ua = Ga,
    Wa = it("bitwise_and", (e, t) => e & t),
    Ja = it("bitwise_or", (e, t) => e | t),
    Ca = it("bitwise_xor", (e, t) => e ^ t),
    Ba = it("left_shift", (e, t) => e << t),
    Ha = it("right_shift", (e, t) => e >> t);
  l.add(Ga, () => Ga([13]), () => E([-14])), l.add(Wa, () => Wa(13, 17), () => 1).add(Wa, () => Wa([11, 7], [4, 25]), () => E([0, 1])).add(Wa, () => Wa(E([2, 5, 255]), E([3, 14, 16])), () => E([2, 4, 16])).add(Wa, () => Wa([!0, !0], [!1, !0]), () => E([!1, !0])), l.add(Ja, () => Ja([33, 4], 1), () => E([33, 5])), l.add(Ca, () => {
    let e = [1, 2, 3],
      t = [4, 5, 6];
    return e = Ca(e, t), t = Ca(e, t), e = Ca(e, t), [e, t];
  }, () => [[4, 5, 6], [1, 2, 3]]), l.add(Ba, () => Ba(5, [1, 2, 3]), () => E([10, 20, 40])), l.add(Ha, () => Ha(10, [1, 2, 3]), () => E([5, 2, 1]));
  const La = it("equal", (e, t) => e == t),
    Qa = it("not_equal", (e, t) => e != t),
    Za = it("less_equal", (e, t) => e <= t),
    er = it("less_equal", (e, t) => e < t),
    tr = it("less_equal", (e, t) => e >= t),
    ar = it("less_equal", (e, t) => e > t);
  function rr(e, t, a = null, r = 1) {
    throw new Error();
  }
  function nr(e, t, a = -1, r = a, n = a, s = a) {
    e = P(e), t = P(t), r = Re(r, e.ndim), n = Re(n, t.ndim), e = De(e, r, -1), t = De(t, n, -1);
    let l = e.shape.at(-1),
      i = t.shape.at(-1);
    if (2 != l && 3 != l || 2 != i && 3 != i) throw "incompatible dimensions for cross product (dimension must be 2 or 3)";
    let d = J(e.shape.slice(0, -1), t.shape.slice(0, -1));
    3 != e.shape.at(-1) && 3 != t.shape.at(-1) || (d = [...d, 3], s = Re(s, d.length));
    let o,
      u,
      h,
      f,
      p,
      c,
      m,
      y,
      g,
      w = R(d);
    if (o = e.at("...", 0), u = e.at("...", 1), 3 == e.shape.at(-1) && (h = e.at("...", 2)), f = t.at("...", 0), p = t.at("...", 1), 3 == t.shape.at(-1) && (c = t.at("...", 2)), 0 != w.ndim && 3 == w.shape.at(-1) && (m = w.at("...", 0), y = w.at("...", 1), g = w.at("...", 2)), 2 == e.shape.at(-1)) {
      if (2 == t.shape.at(-1)) return pt(o, p, w), ft(w, pt(u, f), w), w;
      if (3 != t.shape.at(-1)) throw "b.shape.at(-1) != 3";
      pt(u, c, m), pt(o, c, y), ka(y, y), pt(o, p, g), ft(g, pt(u, f), g);
    } else {
      if (3 != e.shape.at(-1)) throw "a.shape.at(-1) != 3";
      if (3 == t.shape.at(-1)) {
        pt(u, c, m);
        let e = pt(h, p);
        ft(m, e, m), pt(h, f, y), pt(o, c, e), ft(y, e, y), pt(o, p, g), pt(u, f, e), ft(g, e, g);
      } else {
        if (2 != t.shape.at(-1)) throw "b.shape.at(-1) != 2";
        pt(h, p, m), ka(m, m), pt(h, f, y), pt(o, p, g), ft(g, pt(u, f), g);
      }
    }
    return De(w, -1, s);
  }
  function sr(e, t = null, a = 1, r = -1) {
    e = P(e);
    let {
      ndim: n
    } = e;
    r = Re(r, n);
    let s = a;
    if (null != t) if (1 == (t = P(t)).ndim) {
      s = fa(t);
      let e = Array(n).fill(1);
      e[r] = s.shape[0], s = s.reshape(e);
    } else s = fa(t, null, r);
    let l,
      i = Array(n).fill(x()),
      d = Array(n).fill(x());
    return i[r] = x(1, null), d[r] = x(null, -1), l = ht(e.get(i), e.get(d)), pt(s, l, l), ct(l, 2, l), sa(l, r);
  }
  function lr(e, t, a = "full") {
    if (e = le(e), t = le(t), 0 == e.size) throw "a cannot be empty";
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
  function ir(e, t, a, r = null) {
    if (e = P(e), null == r) r = K(e);else if (!Fe(e.shape, r.shape)) throw "out shape does not match input shape";
    if (_(t) && _(a)) {
      let n = Yn(e.shape, e.strides);
      for (let s of Yn(r.shape, r.strides)) r.data[s] = Math.min(Math.max(t, e.data[n.next().value]), a);
      return r;
    }
    t = O(t, e.shape), a = O(a, e.shape);
    let n = Yn(e.shape, e.strides),
      s = Yn(t.shape, t.strides),
      l = Yn(a.shape, a.strides);
    for (let i of Yn(r.shape, r.strides)) r.data[i] = Math.min(Math.max(t.data[s.next().value], e.data[n.next().value]), a.data[l.next().value]);
    return r;
  }
  function dr(e, t = -1, a = null) {
    e = P(e), null == t ? (e = Ae(e), t = 0) : t = Re(t, e.ndim);
    let r = K(e),
      n = Array(e.shape[t]),
      s = Array(e.shape[t]),
      l = (e, t) => n[e] - n[t],
      i = e.shape.slice();
    i[t] = 1;
    for (let d of Y(i)) {
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
  function or(e, t = -1, a = null) {
    e = P(e), null == t ? (e = Ae(e), t = 0) : t = Re(t, e.ndim);
    let r = K(e),
      n = Array(e.shape[t]),
      s = (e, t) => e - t,
      l = e.shape.slice();
    l[t] = 1;
    for (let i of Y(l)) {
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
  function ur(e, t, a, r = null, n = null, s = null) {
    if ([e, t, a] = [e, t, a].map(e => P(e)), 1 != t.ndim || 1 != a.ndim) throw "Data points must be 1-D sequences";
    if (t.shape[0] != a.shape[0]) throw "fp and xp are not of the same length";
    if (null != s) {
      e = gt(e, s);
      let r = dr(t = gt(t, s));
      t = t.at(r), a = a.at(r), t = Oe([ft(t.at(x(-1)), s), t, ht(t.at(x(0, 1)), s)]), a = Oe([a.at(x(-1)), a, a.at(x(0, 1))]);
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
  function hr(e) {
    let t = Array(e.length),
      a = t[0] = e[0];
    for (let r = 1; r < e.length; r++) t[r] = a += e[r];
    return t;
  }
  function fr(e) {
    let t = 0;
    for (let a = 0; a < e.length; a++) t += e[a];
    return t;
  }
  function pr(e, t, a) {
    let r = a() * t,
      n = e.length - 1;
    for (let t = 0; t < n; t++) if (r -= e[t], r < 0) return t;
    return n;
  }
  function cr(e, t, a) {
    let r = a() * t,
      n = 0,
      s = e.length - 1;
    for (; n < s;) {
      let t = n + s >> 1;
      r > e[t] ? n = t + 1 : s = t;
    }
    return n;
  }
  function mr(e) {
    let t = e.length,
      a = [],
      r = [],
      n = t / fr(e);
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
  function yr(e, t, a, r) {
    let n = r() * e | 0;
    return r() < t[n] ? n : a[n];
  }
  function gr(e) {
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
  function wr(e, t, a, r) {
    let n = r - e[a += t];
    for (; a >= 0;) e[a] += n, a = a - 1 >> 1;
  }
  function br(e, t, a, r) {
    let n = r() * e[0],
      s = 1;
    for (; --t;) n > e[s] && (n -= e[s++]), s = 2 * s + 1;
    return n > e[s] && s++, s - a;
  }
  function xr(e, t = null, a = !0, r = "auto", n = Array(e), s = Math.random) {
    let l = t.length;
    if (a ||= 1 == e, a) switch ("auto" == r && (r = 1 == e || e * l < 600 ? "linear" : e > (l > 100 ? 2 * l : 50) ? "alias" : "binary"), r) {
      case "linear":
        {
          let a = fr(t);
          for (let r = 0; r < e; r++) n[r] = pr(t, a, s);
          break;
        }
      case "binary":
        {
          let a = hr(t),
            r = a.at(-1);
          for (let t = 0; t < e; t++) n[t] = cr(a, r, s);
          break;
        }
      case "alias":
        {
          let {
            n: a,
            prob: r,
            alias: l
          } = mr(t);
          for (let t = 0; t < e; t++) n[t] = yr(a, r, l, s);
          break;
        }
      case "sumtree":
        {
          let {
            tree: a,
            level: r,
            offset: l
          } = gr(t);
          for (let t = 0; t < e; t++) n[t] = br(a, r, l, s);
          break;
        }
      default:
        throw `unexpected method '${r}'`;
    } else {
      if (e > t) throw "size > p is not allowed when replace = true";
      switch ("auto" == r && (r = l + e < 150 ? "linear" : l + e < 200 ? "binary" : "sumtree"), r) {
        case "linear":
          {
            let a = fr(t);
            t = t.slice();
            for (let r = 0; r < e; r++) {
              let e = n[r] = pr(t, a, s);
              a -= t[e], t[e] = 0;
            }
            break;
          }
        case "binary":
          {
            let a = hr(t),
              r = a.at(-1);
            for (let l = 0; l < e; l++) {
              let e = n[l] = cr(a, r, s),
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
            } = mr(t);
            t[n[a] = yr(e, r, l, s)] = 0;
          }
          break;
        case "sumtree":
          {
            let {
              tree: a,
              level: r,
              offset: l
            } = gr(t);
            for (let t = 0; t < e; t++) wr(a, l, n[t] = br(a, r, l, s), 0);
            break;
          }
        default:
          throw `unexpected method '${r}'`;
      }
    }
    return n;
  }
  function _r(e, t = null, a = !0, r = null) {
    if (1 != (e = "number" == typeof e ? C(e) : P(e)).ndim) throw "'p' must be 1-dimensional";
    if (0 == e.size) throw "'a' cannot be empty unless no samples are taken";
    if (null == r) r = Array(e.size).fill(1 / e.size);else {
      if (1 != (r = P(r)).ndim) throw "'p' must be 1-dimensional";
      if (r.size != e.size) throw "'a' and 'p' must have same size";
      r = r.toarray();
    }
    if (e = e.toarray(), null == t) return e[xr(1, r)[0]];
    "number" == typeof t && (t = [t]);
    let n = function (e) {
      let t = 1;
      for (let a of e) t *= a;
      return t;
    }(t);
    if (ke(r) < n) throw "Fewer non-zero entries in p than size";
    return E(xr(n, r, a).map(t => e[t])).reshape(t);
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
    return E(a).reshape(e);
  }
  l.add(La, () => La([0, 1, 3], C(3)), () => E([!0, !0, !1])).add(La, () => La(1, Q(1)), () => E([!0])).add(La, () => La(E([2, 4, 6]), E([2, 4, 2])), () => E([!0, !0, !1])), l.add(Qa, () => Qa([1, 2], [1, 3]), () => E([!1, !0])).add(Qa, () => Qa([1, 2], [[1, 3], [1, 4]]), () => E([[!1, !0], [!1, !0]])), l.add(Za, () => Za([4, 2, 1], [2, 2, 2]), () => E([!1, !0, !0])), l.add(er, () => er([1, 2], [2, 2]), () => E([!0, !1])), l.add(tr, () => tr([4, 2, 1], [2, 2, 2]), () => E([!0, !0, !1])), l.add(ar, () => ar([4, 2], [2, 2]), () => E([!0, !1])), l.add(nr, () => nr([1, 2, 3], [4, 5, 6]), () => E([-3, 6, -3])).add(nr, () => nr([1, 2], [4, 5, 6]), () => E([12, -6, -3])).add(nr, () => nr([1, 2, 0], [4, 5, 6]), () => E([12, -6, -3])).add(nr, () => nr([1, 2], [4, 5]), () => E(-3)).add(nr, () => nr(E([[1, 2, 3], [4, 5, 6]]), E([[4, 5, 6], [1, 2, 3]])), () => E([[-3, 6, -3], [3, -6, 3]])).add(nr, () => nr(E([[1, 2, 3], [4, 5, 6]]), E([[4, 5, 6], [1, 2, 3]]), void 0, void 0, void 0, 0), () => E([[-3, 3], [6, -6], [-3, 3]])).add(nr, () => {
    let e = E([[1, 2, 3], [4, 5, 6], [7, 8, 9]]),
      t = E([[7, 8, 9], [4, 5, 6], [1, 2, 3]]);
    return [nr(e, t), nr(e, t, void 0, 0, 0)];
  }, () => [E([[-6, 12, -6], [0, 0, 0], [6, -12, 6]]), E([[-24, 48, -24], [-30, 60, -30], [-36, 72, -36]])]), l.add(sr, () => sr([1, 2, 3]), () => 4).add(sr, () => sr([1, 2, 3], [4, 6, 8]), () => 8).add(sr, () => sr([1, 2, 3], null, 2), () => 8).add(sr, () => sr([1, 2, 3], [8, 6, 4]), () => -8).add(sr, () => sr(C(6).reshape(2, 3), void 0, void 0, 0), () => E([1.5, 2.5, 3.5])).add(sr, () => sr(C(6).reshape(2, 3), void 0, void 0, 1), () => E([2, 8])), l.add(lr, () => lr([1, 2, 3], [0, 1, .5]), () => E([0, 1, 2.5, 4, 1.5])).add(lr, () => lr([1, 2, 3], [1, .5], "full"), () => E([1, 2.5, 4, 1.5])).add(lr, () => lr([1, 2, 3], [0, 1, .5], "same"), () => E([1, 2.5, 4])).add(lr, () => lr([1, 2, 3], [0, 1, .5], "valid"), () => E([2.5])), l.add(ir, () => ir(C(10), 1, 8), () => E([1, 1, 2, 3, 4, 5, 6, 7, 8, 8])).add(ir, () => ir(C(10), 8, 1), () => E([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).add(ir, () => {
    let e = C(10);
    return [ir(e, 3, 6, e), e];
  }, () => [E([3, 3, 3, 3, 4, 5, 6, 6, 6, 6]), E([3, 3, 3, 3, 4, 5, 6, 6, 6, 6])]).add(ir, () => ir(C(10), [3, 4, 1, 1, 1, 4, 4, 4, 4, 4], 8), () => E([3, 4, 2, 3, 4, 5, 6, 7, 8, 8])), dr(E([[[0, 3], [2, 2], [2, 2]], [[8, 5], [4, 1], [6, -2]]]), 0), l.add(dr, () => dr([3, 1, 2]), () => E([1, 2, 0])).add(dr, () => dr(E([[0, 3], [2, 2]]), 0), () => E([[0, 1], [1, 0]])).add(dr, () => dr(E([[0, 3], [2, 2]]), 1), () => E([[0, 1], [0, 1]])).add(dr, () => dr(E([[[0, 3], [2, 2], [2, 2]], [[8, 5], [4, 1], [6, -2]]]), 0), () => E([[[0, 0], [0, 1], [0, 1]], [[1, 1], [1, 0], [1, 0]]])).add(dr, () => dr(E([[[0, 3], [2, 2], [2, 2]], [[8, 5], [4, 1], [6, -2]]]), 1), () => E([[[0, 1], [1, 2], [2, 0]], [[1, 2], [2, 1], [0, 0]]])).add(dr, () => dr(E([[[0, 3], [2, 2], [2, 2]], [[8, 5], [4, 1], [6, -2]]]), 2), () => E([[[0, 1], [0, 1], [0, 1]], [[1, 0], [1, 0], [1, 0]]])), l.add(or, () => or(E([[1, 4], [3, 1]])), () => E([[1, 4], [1, 3]])).add(or, () => or(E([[1, 4], [3, 1]]), null), () => E([1, 1, 3, 4])).add(or, () => or(E([[1, 4], [3, 1]]), 0), () => E([[1, 1], [3, 4]])), l.add(ur, () => ur(2.5, [1, 2, 3], [3, 2, 0]), () => 1).add(ur, () => ur(4.5, [6, 4, 5], [3, 2, 0]), () => 3).add(ur, () => ur([0, 1, 1.5, 2.5, 3.14], [1, 2, 3], [3, 2, 0]), () => E([3, 3, 2.5, 1, 0])).add(ur, () => ur([-180, -170, -185, 185, -10, -5, 0, 365], [190, -190, 350, -350], [5, 10, 3, 4], null, null, 360), () => E([7.5, 5, 8.75, 6.25, 3, 3.25, 3.5, 3.75]));
  const zr = vr,
    Ar = vr;
  function $r(...e) {
    return vr(e);
  }
  function Mr(e, t = null, a = null, r = !0) {
    if (null != a) {
      if (!re(a)) throw "output array must be contiguous";
      null == t && (t = a.shape);
    }
    let n;
    if (null == t) {
      if (r) return e();
      n = [], t = 1;
    } else "number" == typeof t ? n = [t] : (n = t, t = $(n));
    if (null == a) a = R(n);else if (!Fe(n, a.shape)) throw "size must match out.shape when used together";
    let {
      data: s,
      offset: l
    } = a;
    for (let a = 0; a < t; a++) s[l + a] = e();
    return a;
  }
  class kr {
    constructor(e = Math.random) {
      this.rand = e;
    }
    integers(e, t = null, a = null, r = !1) {
      null == t && (t = e, e = 0);
      let n = t - e;
      return r && (n += 1), Mr(() => this.rand() * n + e | 0, a);
    }
    random(e = null, t = null) {
      return Mr(() => this.rand(), e, t);
    }
    choice(e, t = null, a = !0, r = null, n = 0) {
      if ("number" == typeof e) {
        if (e <= 0) throw "a must be a positive integer unless no samples are taken";
        e = C(e);
      } else if (0 == (e = P(e)).size) throw "a cannot be empty unless no samples are taken";
      if (null == r) r = Array(e.shape[n]).fill(1 / e.shape[n]);else {
        if (1 != (r = P(r)).ndim) throw "p must be 1-dimensional";
        if (r.size != e.shape[n]) throw "a and p must have same size";
        r = r.toarray();
      }
      let s = Array(n).fill(x());
      if (null == t) return s[n] = xr(1, r, void 0, void 0, void 0, this.rand)[0], e._getview(s).copy();
      let l = t;
      if ("number" == typeof t && (l = [t]), t = $(l), r.length < t) throw "Cannot take a larger sample than population when replace is false";
      if (ke(r) < t) throw "Fewer non-zero entries in p than size";
      let i = [...e.shape];
      i.splice(n, 1, ...l);
      let d = Array(n).fill(x()),
        o = R(i),
        u = xr(t, r, a, void 0, void 0, this.rand),
        h = 0;
      for (let t of Y(l)) {
        for (let e = 0; e < t.length; e++) d[n + e] = t[e];
        s[n] = u[h++], o.set(d, e._getview(s));
      }
      return o;
    }
    shuffle(e, t = 0) {
      t = Re(t, (e = P(e)).ndim);
      let a = Array(t + 1).fill(x(":")),
        {
          shape: r
        } = e,
        n = r[t],
        s = R([...r.slice(0, t), ...r.slice(t + 1)]);
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
      t = Re(t, (e = P(e)).ndim);
      let r = [...e.shape];
      r[t] = 1, null == a && (a = K(e));
      for (let n of Y(r)) {
        n[t] = x();
        let r = e._getview(n).flatten();
        this.shuffle(r), a.set(n, r);
      }
      return a;
    }
    permutation(e, t = 0) {
      return e = "number" == typeof e ? C(e) : E(e), this.shuffle(e, t), e;
    }
    uniform(e = 0, t = 1, a = null) {
      return Mr(() => this.rand() * (t - e) + e, a);
    }
    normal(e = 0, t = 1, a = null) {
      return Mr(() => {
        let a = this.rand(),
          r = this.rand(),
          n = Math.sqrt(-2 * Math.log(a)) * Math.cos(2 * Math.PI * r);
        return e + t * n;
      }, a);
    }
  }
  const Nr = new kr();
  function Er(e, t = null, a = null) {
    if (null == t && null == a) return xe(e);
    let r = ue(e, t, a),
      n = R(r.shape),
      s = 0;
    for (let [e, t, a] of r) n.data[s++] = e ? t : a;
    return n;
  }
  function Sr(...e) {
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
  function qr(e, t = null, a = null, r = !1) {
    e = P(e), null == t ? (e = Ae(e), t = 0) : t = Re(t, e.ndim);
    let n = [...e.shape.slice(0, t), ...(r ? [1] : []), ...e.shape.slice(t + 1)];
    if (null == a) a = R(n);else if (!Fe(n, a.shape)) throw "out must have the same shape as the expected output";
    return ft(Ta(e, t, null, r), Oa(e, t, null, r), a), a;
  }
  function jr(e, t = null, a = null, r = !1, n = !1) {
    let s;
    if (e = P(e), null == t ? (e = Ae(e), t = 0) : t = Re(t, e.ndim), null != a && (a = P(a)), null != a) {
      if (s = sa(a), 0 == s) throw "sum(weights) must not be 0";
      if (1 == a.ndim) a = a.reshape([...Array(t).fill(1), e.shape[t]]);else if (!Fe(a.shape, e.shape)) throw "weights.shape and a.shape do not match";
      e = pt(e, a);
    } else s = e.shape[t];
    let l = ct(sa(e, t, null, n), s);
    return r ? [l, s] : l;
  }
  function Ir(e, t = null, a = null, r = !1) {
    e = P(e), null == t ? (e = Ae(e), t = 0) : t = Re(t, e.ndim);
    let n = [...e.shape.slice(0, t), ...(r ? [1] : []), ...e.shape.slice(t + 1)];
    if (null == a) a = R(n);else if (!Fe(n, a.shape)) throw "out must have the same shape as the expected output";
    return ct(sa(e, t, null, r), e.shape[t], a), a;
  }
  function Fr(e, t = null, a = null, r = 0, n = !1) {
    e = P(e), null == t ? (e = Ae(e), t = 0) : t = Re(t, e.ndim);
    let s = [...e.shape.slice(0, t), ...(n ? [1] : []), ...e.shape.slice(t + 1)];
    if (null == a) a = R(s);else if (!Fe(s, a.shape)) throw "out must have the same shape as the expected output";
    return Ir(Pa(ft(e, ct(sa(e, t, null, !0), e.shape[t] - r))), t, a, n), a;
  }
  function Tr(e, t = null, a = null, r = 0, n = !1) {
    return a = Fr(e, t, a, r, n), Da(a, a), a;
  }
  function Or(e, t = null, a = 0) {
    if (1 != (e = P(e)).ndim) throw "a.dim != 1";
    if (Oa(e) < 0) throw "amin(a) < 0";
    if (a < 0) throw "minlength < 0";
    if (null != t) {
      if (!Fe((t = P(t)).shape, e.shape)) throw "weights.shape != a.shape";
      t = t.toarray();
    }
    let r = Array(Math.max(Ta(e) + 1, a)).fill(0),
      n = 0;
    for (let a of e.flat) r[a] += null != t ? t[n] : 1, n++;
    return E(r);
  }
  function Dr(e, t = !1) {
    let a,
      r = e.length,
      n = Array(r).fill(1);
    a = t ? [] : R([r, ...e]);
    for (let r = 0; r < e.length; r++) {
      let s = e[r],
        l = C(s).reshape([...n.slice(0, r), s, ...n.slice(r + 1)]);
      t ? a.push(l) : a.set([r], l);
    }
    return a;
  }
  function Yr(...e) {
    let t = [],
      a = e.length;
    for (let r = 0; r < a; r++) {
      let n = e[r];
      n = P(n), n.ndim, "boolean" == typeof n.item(0) && ([n] = xe(n)), n = n.reshape([...Array(r).fill(1), n.size, ...Array(a - r - 1).fill(1)]), t.push(n);
    }
    return t;
  }
  function Pr(e, t, a = !1, r = !1, n = "table") {
    throw new Error();
  }
  function Rr(e, t = null, a = "big") {
    e = P(e), null == t ? (e = Ae(e), t = 0) : t = Re(t, e.ndim);
    let r = e.shape.slice();
    r[t] = Math.ceil(r[t] / 8);
    let n = R(r),
      s = e.shape.slice();
    s[t] = 1;
    let l = Array(8 * r[t]);
    for (let r of Y(s)) {
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
  function Kr(e, t = null, a = null, r = "big") {
    e = P(e), null == t ? (e = Ae(e), t = 0) : t = Re(t, e.ndim);
    let n = 0,
      s = 8;
    null != a && (a < 0 ? n = 8 - a : s = a);
    let l = e.shape.slice();
    l[t] = l[t] * (s - n);
    let i = R(l),
      d = Array(8);
    for (let a of Y(e.shape)) {
      let {
          offset: l
        } = e,
        {
          offset: o
        } = i;
      for (let t = 0; t < e.shape.length; t++) l += a[t] * e.strides[t], o += a[t] * i.strides[t];
      Vr(e.data[l], d, r);
      for (let e = n, a = 0; e < s; e++, a++) i.data[o + a * i.strides[t]] = d[e];
    }
    return i;
  }
  function Vr(e, t = [], a = "big") {
    if ("big" == a) for (let a = 7; a >= 0; a--) t[a] = e % 2, e = e / 2 | 0;else for (let a = 0; a <= 7; a++) t[a] = e % 2, e = e / 2 | 0;
    return t;
  }
  function Xr(e, t = 0, a = null) {
    if (0 == (e = e.map(e => P(e))).length) throw "need at least one array to stack";
    for (let t = 1; t < e.length; t++) if (!Fe(e[0], e[t])) throw "all input arrays must have the same shape";
    t = Re(t, e[0].ndim + 1);
    let r = [...Array(t).fill(m.colon), m.newaxis];
    return Oe(e.map(e => e.get(r)), t, a);
  }
  function Gr(e) {
    return e = ie(...e), Array.isArray(e) || (e = [e]), Oe(e, 0);
  }
  function Ur(e) {
    return e = le(...e), Array.isArray(e) || (e = [e]), e.length > 0 && 1 == e[0].ndim ? Oe(e, 0) : Oe(e, 1);
  }
  function Wr(e) {
    return e = de(...e), Array.isArray(e) || (e = [e]), Oe(e, 2);
  }
  function Jr(e) {
    let t = [];
    for (let a of e) a = P(a), a.ndim < 2 && (a = E(a, null, !1, 2).T), t.push(a);
    return Oe(t, 1);
  }
  function Cr(e) {
    return e = ie(...e), Array.isArray(e) || (e = [e]), Oe(e, 0);
  }
  function Br(e, t, a = 0) {
    let r, n, s;
    if (null != e.shape ? (a = Re(a, e.ndim), r = e.shape[a]) : r = e.length, "number" == typeof t) {
      if (n = 0 | t, n <= 0) throw "number sections must be larger than 0.";
      let e = r / n | 0,
        a = r % n;
      s = E([0, ...Array(a).fill(e + 1), ...Array(n - a).fill(e)]).cumsum().toarray();
    } else n = t.length + 1, s = [0, ...t, r];
    let l = [],
      i = ne(e, a, 0);
    for (let e = 0; e < n; e++) {
      let t = s[e],
        r = s[e + 1];
      l.push(ne(i.at(x(t, r)), a, 0));
    }
    return l;
  }
  function Hr(e, t, a = 0) {
    if (a = Re(a, (e = P(e)).ndim), null != t.shape && (t = t.toarray()), null == t.length) {
      let r = t;
      if (e.shape[a] % r) throw "array split does not result in an equal division";
    }
    return Br(e, t, a);
  }
  function Lr(e, t) {
    if (pe(e) < 3) throw "dsplit only works on arrays of 3 or more dimensions";
    return Hr(e, t, 2);
  }
  function Qr(e, t) {
    if (0 == pe(e)) throw "hsplit only works on arrays of 1 or more dimensions";
    return Hr(e, t, pe(e) > 1 ? 1 : 0);
  }
  function Zr(e, t) {
    if (pe(e) < 2) throw "vsplit only works on arrays of 2 or more dimensions";
    return Hr(e, t, 0);
  }
  function en(e, t, a = null) {
    e = P(e), null == a ? (e = Ae(e), a = 0) : a = Re(a, e.ndim);
    let r = e.shape.slice(),
      n = "number" == typeof t;
    if (n) r[a] *= t;else if (1 == t.length) t = t[0], r[a] *= t, n = !0;else {
      if (r[a] != t.length) throw `operands could not be broadcast together with shape (${r[a]},) (${t.length},)`;
      r[a] = t.reduce((e, t) => e + t);
    }
    let s = R(r),
      l = s.strides.slice();
    l.splice(a, 1);
    let i = e.shape.slice();
    i.splice(a, 1);
    let d = e.strides.slice();
    d.splice(a, 1);
    let o = r[a];
    for (let r of Y(i)) {
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
  function tn(e, t) {
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
  function an(e, t = 0, a = 0, r = 1) {
    e = P(e);
    let {
      ndim: n
    } = e;
    if (n < 2) throw "array.ndim must be >= 2";
    a = Re(a, n), r = Re(r, n);
    let s = Array(n);
    s[n - 2] = a, s[n - 1] = r;
    for (let e = 0, t = 0; e < n; e++) e != a && e != r && (s[t++] = e);
    let l,
      i,
      d = (e = se(e, s)).shape[n - 2],
      o = e.shape[n - 1],
      u = o + 1;
    t < 0 ? (l = -o * t, i = Math.min(o, d + t) * (o + 1) - o * t) : (l = t, i = Math.min(d, o - t) * (o + 1) + t);
    let h = Math.ceil((i - l) / u);
    return e.as_strided([...e.shape.slice(0, -2), h], [...e.strides.slice(0, -2), u * e.strides[n - 1]], e.offset + l);
  }
  function rn(e, t = 0) {
    let a = (e = P(e)).shape;
    if (1 == a.length) {
      let r = a[0] + Math.abs(t),
        n = ee([r, r]),
        s = t >= 0 ? t : -t * r,
        l = n.at(x(null, r - t));
      for (let t = 0; t < e.size; t++, s += r + 1) l.itemset(s, e.item(t));
      return n;
    }
    if (2 != a.length) throw "Input must be 1- or 2-d.";
    return an(e, t);
  }
  function nn(e, t = null) {
    let a;
    if (e = P(e), null == t) a = Array(e.ndim).fill(x("::-1"));else {
      t = Ee(t, e.ndim), a = Array(e.ndim).fill(x(":"));
      for (let e of t) a[e] = x("::-1");
    }
    return e.get(a);
  }
  function sn(e) {
    if ((e = P(e)).ndim < 2) throw "Input must be >= 2-d.";
    return e.get(un(":", "::-1"));
  }
  function ln(e) {
    if ((e = P(e)).ndim < 1) throw "Input must be >= 1-d.";
    return e.at(x("::-1"));
  }
  l.add(Er, () => {
    let e = C(10);
    return Er(er(e, 5), e, pt(10, e));
  }, () => E([0, 1, 2, 3, 4, 50, 60, 70, 80, 90])).add(Er, () => Er([[!0, !1], [!0, !0]], [[1, 2], [3, 4]], [[9, 8], [7, 6]]), () => E([[1, 8], [3, 4]])).add(Er, () => {
    let [e, t] = Sr(x(":3"), x(null, 4));
    return Er(er(e, t), e, ht(10, t));
  }, () => E([[10, 0, 0, 0], [10, 11, 1, 1], [10, 11, 12, 2]])).add(Er, () => {
    let e = E([[0, 1, 2], [0, 2, 4], [0, 3, 6]]);
    return Er(er(e, 4), e, -1);
  }, () => E([[0, 1, 2], [0, 2, -1], [0, 3, -1]])), l.add(Sr, () => Sr(x("0:5"), x("0:5")), () => [E([[0], [1], [2], [3], [4]]), E([[0, 1, 2, 3, 4]])]).add(Sr, () => Sr(x("3:5"), x("0:-5"), x("0:1")), () => [E([[[3]], [[4]]]), E([]).reshape([1, 0, 1]), E([[[0]]])]), l.add(qr, () => qr(E([[4, 9, 2, 10], [6, 9, 7, 12]]), 1), () => E([8, 6])).add(qr, () => qr(E([[4, 9, 2, 10], [6, 9, 7, 12]]), 0), () => E([2, 0, 5, 2])).add(qr, () => qr(E([[4, 9, 2, 10], [6, 9, 7, 12]])), () => 10).add(qr, () => qr(bt(C(10, 40), 2).reshape(5, 2, 3), 0, null, !0), () => E([[[1056, 1104, 1152], [1200, 1248, 1296]]])), l.add(jr, () => jr(C(1, 5)), () => 2.5).add(jr, () => jr(C(1, 11), void 0, C(10, 0, -1)), () => 4).add(jr, () => jr(C(6).reshape(3, 2), 1, [1 / 4, 3 / 4]), () => E([.75, 2.75, 4.75])).add(jr, () => jr(C(6).reshape(3, 2), 1, void 0, void 0, !0), () => E([[.5], [2.5], [4.5]])), l.add(Ir, () => Ir(E([[1, 2], [3, 4]])), () => 2.5).add(Ir, () => Ir(E([[1, 2], [3, 4]]), 0), () => E([2, 3])).add(Ir, () => Ir(E([[1, 2], [3, 4]]), 1), () => E([1.5, 3.5])), l.add(Fr, () => Fr(E([[1, 2], [3, 4]])), () => 1.25).add(Fr, () => Fr(E([[1, 2], [3, 4]]), 0), () => E([1, 1])).add(Fr, () => Fr(E([[1, 2], [3, 4]]), 1), () => E([.25, .25])), l.add(Tr, () => Tr(E([[1, 2], [3, 4]])), () => 1.118033988749895).add(Tr, () => Tr(E([[1, 2], [3, 4]]), 0), () => E([1, 1])).add(Tr, () => Tr(E([[1, 2], [3, 4]]), 1), () => E([.5, .5])), l.add(Or, () => Or(C(5)), () => E([1, 1, 1, 1, 1])).add(Or, () => Or(E([0, 1, 1, 3, 2, 1, 7])), () => E([1, 3, 1, 1, 0, 0, 0, 1])).add(Or, () => Or(E([0, 1, 1, 2, 2, 2]), E([.3, .5, .2, .7, 1, -.6])), () => E([.3, .7, 1.1])), l.add(Dr, () => Dr([2, 3]), () => E([[[0, 0, 0], [1, 1, 1]], [[0, 1, 2], [0, 1, 2]]])).add(Dr, () => Dr([2, 3], !0), () => [E([[0], [1]]), E([[0, 1, 2]])]), l.add(Yr, () => Yr([0, 1], [2, 4]), () => [E([[0], [1]]), E([[2, 4]])]).add(Yr, () => Yr([!0, !0], [2, 4]), () => [E([[0], [1]]), E([[2, 4]])]).add(Yr, () => Yr([!0, !0], [!1, !1, !0, !1, !0]), () => [E([[0], [1]]), E([[2, 4]])]), l.add(Rr, () => Rr(E([[[1, 0, 1], [0, 1, 0]], [[1, 1, 0], [0, 0, 1]]]), -1), () => E([[[160], [64]], [[192], [32]]])).add(Rr, () => Rr(E([[[1, 0, 1], [0, 1, 0]], [[1, 1, 0], [0, 0, 1]]])), () => E([171, 16])).add(Rr, () => Rr(E([[[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]]), -1), () => E([[[160, 0]]])), l.add(Kr, () => Kr(E([[2], [7], [23]]), 1), () => E([[0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 1, 0, 1, 1, 1]])).add(Kr, () => {
    let e = E([[0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 1, 0, 1, 1, 1]]),
      t = Rr(e, 0);
    return [Kr(t, 0), je(e, Kr(t, 0, e.shape[0]))];
  }, () => [E([[0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 0, 1, 0, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]), !0]), l.add(Xr, () => Xr(Array(10).fill().map(() => Nr.normal(0, 1, [3, 4])), 0).shape, () => [10, 3, 4]).add(Xr, () => Xr(Array(10).fill().map(() => Nr.normal(0, 1, [3, 4])), 1).shape, () => [3, 10, 4]).add(Xr, () => Xr(Array(10).fill().map(() => Nr.normal(0, 1, [3, 4])), 2).shape, () => [3, 4, 10]).add(Xr, () => Xr([E([1, 2, 3]), E([4, 5, 6])]), () => E([[1, 2, 3], [4, 5, 6]])).add(Xr, () => Xr([E([1, 2, 3]), E([4, 5, 6])], -1), () => E([[1, 4], [2, 5], [3, 6]])), l.add(Gr, () => Gr([E([1, 2, 3]), E([4, 5, 6])]), () => E([[1, 2, 3], [4, 5, 6]])).add(Gr, () => Gr([E([[1], [2], [3]]), E([[4], [5], [6]])]), () => E([[1], [2], [3], [4], [5], [6]])), l.add(Ur, () => Ur([E([1, 2, 3]), E([4, 5, 6])]), () => E([1, 2, 3, 4, 5, 6])).add(Ur, () => Ur([E([[1], [2], [3]]), E([[4], [5], [6]])]), () => E([[1, 4], [2, 5], [3, 6]])), l.add(Wr, () => Wr([E([1, 2, 3]), E([2, 3, 4])]), () => E([[[1, 2], [2, 3], [3, 4]]])).add(Wr, () => Wr([E([[1], [2], [3]]), E([[2], [3], [4]])]), () => E([[[1, 2]], [[2, 3]], [[3, 4]]])), l.add(Jr, () => Jr([E([1, 2, 3]), E([2, 3, 4])]), () => E([[1, 2], [2, 3], [3, 4]])), l.add(Cr, () => Cr([E([1, 2, 3]), E([4, 5, 6])]), () => E([[1, 2, 3], [4, 5, 6]])).add(Cr, () => Cr([E([[1], [2], [3]]), E([[4], [5], [6]])]), () => E([[1], [2], [3], [4], [5], [6]])), l.add(Br, () => Br(C(8), 3), () => [E([0, 1, 2]), E([3, 4, 5]), E([6, 7])]).add(Br, () => Br(C(9), 4), () => [E([0, 1, 2]), E([3, 4]), E([5, 6]), E([7, 8])]), l.add(Hr, () => Hr(C(9), 3), () => [E([0, 1, 2]), E([3, 4, 5]), E([6, 7, 8])]).add(Hr, () => Hr(C(8), [3, 5, 6, 10]), () => [E([0, 1, 2]), E([3, 4]), E([5]), E([6, 7]), E([])]), l.add(Lr, () => Lr(C(16).reshape(2, 2, 4), 2), () => [E([[[0, 1], [4, 5]], [[8, 9], [12, 13]]]), E([[[2, 3], [6, 7]], [[10, 11], [14, 15]]])]).add(Lr, () => Lr(C(16).reshape(2, 2, 4), E([3, 6])), () => [E([[[0, 1, 2], [4, 5, 6]], [[8, 9, 10], [12, 13, 14]]]), E([[[3], [7]], [[11], [15]]]), R([2, 2, 0])]), l.add(Qr, () => Qr(C(16).reshape(4, 4), 2), () => [E([[0, 1], [4, 5], [8, 9], [12, 13]]), E([[2, 3], [6, 7], [10, 11], [14, 15]])]).add(Qr, () => Qr(C(16).reshape(4, 4), E([3, 6])), () => [E([[0, 1, 2], [4, 5, 6], [8, 9, 10], [12, 13, 14]]), E([[3], [7], [11], [15]]), R([4, 0])]).add(Qr, () => Qr(C(8).reshape(2, 2, 2), 2), () => [E([[[0, 1]], [[4, 5]]]), E([[[2, 3]], [[6, 7]]])]).add(Qr, () => Qr(E([0, 1, 2, 3, 4, 5]), 2), () => [E([0, 1, 2]), E([3, 4, 5])]), l.add(Zr, () => Zr(C(16).reshape(4, 4), 2), () => [E([[0, 1, 2, 3], [4, 5, 6, 7]]), E([[8, 9, 10, 11], [12, 13, 14, 15]])]).add(Zr, () => Zr(C(16).reshape(4, 4), E([3, 6])), () => [E([[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]]), E([[12, 13, 14, 15]]), R([0, 4])]).add(Zr, () => Zr(C(8).reshape(2, 2, 2), 2), () => [E([[[0, 1], [2, 3]]]), E([[[4, 5], [6, 7]]])]), l.add(en, () => en(3, 4), () => E([3, 3, 3, 3])).add(en, () => en(E([[1, 2], [3, 4]]), 2), () => E([1, 1, 2, 2, 3, 3, 4, 4])).add(en, () => en(E([[1, 2], [3, 4]]), 3, 1), () => E([[1, 1, 1, 2, 2, 2], [3, 3, 3, 4, 4, 4]])).add(en, () => en(E([[1, 2], [3, 4]]), [1, 2], 0), () => E([[1, 2], [3, 4], [3, 4]])), l.add(tn, () => {
    let e = E([0, 1, 2]);
    return [tn(e, 2), tn(e, [2, 2]), tn(e, [2, 1, 2])];
  }, () => [E([0, 1, 2, 0, 1, 2]), E([[0, 1, 2, 0, 1, 2], [0, 1, 2, 0, 1, 2]]), E([[[0, 1, 2, 0, 1, 2]], [[0, 1, 2, 0, 1, 2]]])]).add(tn, () => {
    let e = E([[1, 2], [3, 4]]);
    return [tn(e, 2), tn(e, [2, 1])];
  }, () => [E([[1, 2, 1, 2], [3, 4, 3, 4]]), E([[1, 2], [3, 4], [1, 2], [3, 4]])]).add(tn, () => tn(E([1, 2, 3, 4]), [4, 1]), () => E([[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]])), l.add(an, () => an(C(4).reshape(2, 2)), () => E([0, 3])).add(an, () => an(C(4).reshape(2, 2), 1), () => E([1])).add(an, () => an(C(8).reshape(2, 2, 2), 0, 0, 1), () => E([[0, 6], [1, 7]])).add(an, () => an(C(8).reshape(2, 2, 2).at(x(":"), x(":"), 0), 0, 0, 1), () => E([0, 6])).add(an, () => an(C(8).reshape(2, 2, 2).at(x(":"), x(":"), 1), 0, 0, 1), () => E([1, 7])).add(an, () => {
    let e = C(8);
    return an(e.reshape(2, 2, 2), 0, 0, 1).set(-1), e;
  }, () => E([-1, -1, 2, 3, 4, 5, -1, -1])), l.add(rn, () => rn(C(9).reshape([3, 3])), () => E([0, 4, 8])).add(rn, () => rn(C(9).reshape([3, 3]), 1), () => E([1, 5])).add(rn, () => rn(C(9).reshape([3, 3]), -1), () => E([3, 7])).add(rn, () => rn(rn(C(9).reshape([3, 3]))), () => E([[0, 0, 0], [0, 4, 0], [0, 0, 8]])), l.add(nn, () => {
    let e = C(8).reshape([2, 2, 2]);
    return [e, nn(e, 0), nn(e, 1), nn(e), nn(e, [0, 2])];
  }, () => [E([[[0, 1], [2, 3]], [[4, 5], [6, 7]]]), E([[[4, 5], [6, 7]], [[0, 1], [2, 3]]]), E([[[2, 3], [0, 1]], [[6, 7], [4, 5]]]), E([[[7, 6], [5, 4]], [[3, 2], [1, 0]]]), E([[[5, 4], [7, 6]], [[1, 0], [3, 2]]])]).add(nn, () => {
    let e = Nr.normal(0, 1, [3, 4, 5]);
    return xt(La(nn(e, 2), e.at(x(":"), x(":"), x("::-1"), x("..."))));
  }, () => !0), l.add(sn, () => sn(rn([1, 2, 3])), () => E([[0, 0, 1], [0, 2, 0], [3, 0, 0]])).add(sn, () => {
    let e = Nr.normal(0, 1, [2, 4, 5]);
    return xt(La(sn(e), e.at(x(":"), x("::-1"), x("..."))));
  }, () => !0), l.add(ln, () => ln(rn([1, 2, 3])), () => E([[0, 0, 3], [0, 2, 0], [1, 0, 0]])).add(ln, () => {
    let e = Nr.normal(0, 1, [2, 3, 5]);
    return xt(La(ln(e), e.at(x("::-1"), x("..."))));
  }, () => !0).add(ln, () => ln([1, 2]), () => E([2, 1]));
  let dn = e => "number" == typeof e || e instanceof m ? e : x(e);
  const on = Symbol("tupleType");
  function un(...e) {
    let t = e.map(dn);
    return t[on] = !0, t;
  }
  function hn(...e) {
    return 1 == e.length ? dn(e[0]) : un(...e);
  }
  function fn(e, t, a, r = "raise") {
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
  function pn(e, t) {
    "number" == typeof t && (t = [t]), e = Ae(e);
    let a = 1;
    for (let e of t) {
      if (e < 0) throw "all elements of 'new_shape' must be non-negative";
      a *= e;
    }
    if (0 == e.size || 0 == a) return ee(t);
    let r = Math.ceil(a / e.size);
    return X(e = Oe(Array(r).fill(e)).at(x(0, a)), t);
  }
  function cn(e, t, a = "left") {
    e instanceof z && (e = e.toarray());
    let r = K(t = P(t)),
      n = 0,
      s = "left" == a ? mn : yn;
    for (let a of t.flat) r.data[n++] = s(e, a);
    return r;
  }
  function mn(e, t) {
    let a = 0,
      r = e.length - 1;
    for (; a <= r;) {
      let n = a + r >> 1;
      e[n] < t ? a = n + 1 : r = n - 1;
    }
    return a;
  }
  function yn(e, t) {
    let a = 0,
      r = e.length - 1;
    for (; a <= r;) {
      let n = a + r >> 1;
      e[n] > t ? r = n - 1 : a = n + 1;
    }
    return a;
  }
  function gn(e, t, a = null) {
    if (e = P(e), null == a) return gn(e.ravel(), t, 0).reshape(e.shape);
    {
      let r = ue(t, a = Ee(a, e.ndim, !0));
      if (r.ndim > 1) throw new Error("'shift' and 'axis' should be scalars or 1D sequences");
      let n = Array(e.ndim).fill(0);
      for (let [e, t] of r) n[t] += e;
      let s = Array(e.ndim).fill([[x(null), x(null)]]);
      for (let [t, a] of n.entries()) a %= e.shape[t] || 1, a && (s[t] = [[x(null, -a), x(a, null)], [x(-a, null), x(null, a)]]);
      let l = K(e);
      for (let t of new wn(s)) {
        let a = t.map(e => e[0]),
          r = t.map(e => e[1]);
        l.set(r, e.get(a));
      }
      return l;
    }
  }
  l.add(hn, () => C(8).reshape(2, 2, -1).get(hn(0, [0, -1], "::-1")), () => E([[1, 0]])), l.add(fn, () => {
    let e = C(5);
    return fn(e, [0, 2], [-44, -55]), e;
  }, () => E([-44, 1, -55, 3, 4])).add(fn, () => {
    let e = C(5);
    return fn(e, 22, -5, "clip"), e;
  }, () => E([0, 1, 2, 3, -5])), l.add(pn, () => pn(E([[0, 1], [2, 3]]), [2, 3]), () => E([[0, 1, 2], [3, 0, 1]])).add(pn, () => pn(E([[0, 1], [2, 3]]), [1, 4]), () => E([[0, 1, 2, 3]])).add(pn, () => pn(E([[0, 1], [2, 3]]), [2, 4]), () => E([[0, 1, 2, 3], [0, 1, 2, 3]])), l.add(cn, () => cn([1, 2, 3, 4, 5], 3), () => 2).add(cn, () => cn([1, 2, 3, 4, 5], 3, "right"), () => 3).add(cn, () => cn([1, 2, 3, 4, 5], [-10, 10, 2, 3]), () => E([0, 5, 1, 2]));
  class wn {
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
  function bn(e, t, a = null) {
    e = P(e);
    let {
        shape: r,
        strides: n,
        offset: s,
        data: l
      } = e,
      i = R(r),
      d = 0;
    for (let e of Yn(r, n, s)) i.data[d++] = t.call(a, l[e], e, l);
    return i;
  }
  function xn(e, t, a = null) {
    e = P(e), t = P(t), _n(e.ndim > 0, "x1 does not have enough dimensions"), _n(t.ndim > 0, "x2 does not have enough dimensions");
    let r = 1 == e.ndim,
      n = 1 == t.ndim,
      s = r || n;
    if (r && (e = e.at(null, x(":"))), n && (t = t.at(x(":"), null)), 2 == e.ndim && 2 == t.ndim) {
      _n(e.shape[1] == t.shape[0], "input shape mismatch");
      let l = [e.shape[0], t.shape[1]],
        i = s ? l.slice(r ? 1 : 0, n ? -1 : void 0) : l;
      null == a ? a = R(i) : _n(Fe(i, a.shape), "out shape mismatch");
      let d = s ? a.reshape(l) : a,
        o = t.T;
      for (let [t, a] of Y(l)) d.set([t, a], vn(e.at(t), o.at(a)));
      return a;
    }
    let l = J(e.shape.slice(0, -2), t.shape.slice(0, -2));
    e = O(e, [...l, ...e.shape.slice(-2)]), t = O(t, [...l, ...t.shape.slice(-2)]), _n(e.shape.at(-1) == t.shape.at(-2), "input shape mismatch");
    let i = e.shape.at(-2),
      d = t.shape.at(-1),
      o = [...l, i, d];
    null == a ? a = R(o) : _n(Fe(o, a.shape), "out shape mismatch");
    for (let r of Y(l)) xn(e.get(r), t.get(r), a.get(r));
    return a;
  }
  function _n(e, t) {
    if (!e) throw new Error(t);
  }
  function vn(e, t, a = null) {
    if (e = P(e), t = P(t), 1 == e.ndim && 1 == t.ndim) return sa(pt(e, t), 0, a);
    if (2 == e.ndim && 2 == t.ndim) return xn(e, t, a);
    if (0 == e.ndim || 0 == t.ndim) return pt(e, t, a);
    if (1 == t.ndim) {
      _n(e.shape.at(-1) == t.shape[0], `shapes ${e.shape} and ${t.shape} not aligned`);
      let r = e.shape.slice(0, -1);
      null == a ? a = R(r) : _n(Fe(r, a.shape), "out shape mismatch");
      for (let n of Y(r)) vn(e.get(n), t, a.at(x("..."), ...n));
      return a;
    }
  }
  function zn(e, t = null) {
    t = null != t ? Object.assign(Object.create(Mn), t) : Mn;
    let {
      separator: a,
      prefix: r
    } = t;
    return 0 == e.size ? "[]" : function (e, t = Mn, a = " ", r = "") {
      let n,
        s = P(e);
      0 == e.ndim && (e = s), e.size > t.threshold ? (n = "...", s = kn(s, t.edgeitems)) : n = "";
      let l = function (e, t) {
          let a = function (e, t) {
              let a = {
                  int: () => new En(e).__call__,
                  float: () => new jn(e, t.precision).__call__,
                  object: () => In
                },
                {
                  formatter: r
                } = t;
              if (null != r) for (let e of Object.keys(r)) a[e] = Fn(r[e]);
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
            let w = "";
            if (1 === h) {
              let e,
                t = n.trimEnd().length;
              e = i <= 113 ? o - t : o - Math.max(t, "]".length);
              let s = r;
              for (let t = 0; t < c; t++) {
                let l = d([...a, t], p, f);
                [w, s] = On(w, s, l, e, r, i), s += n;
              }
              g && ([w, s] = Tn(w, s, l, e, r, i), s += i <= 113 ? ", " : n);
              for (let t = m; t > 1; t--) {
                let l = d([...a, -t], p, f);
                [w, s] = On(w, s, l, e, r, i), s += n;
              }
              i <= 113 && (e = o);
              let u = d([...a, -1], p, f);
              [w, s] = On(w, s, u, e, r, i), w += s;
            } else {
              w = "";
              let e = n.trimEnd() + "\n".repeat(h - 1);
              for (let t = 0; t < c; t++) w += r + d([...a, t], p, f) + e;
              g && (w += r + l, w += i <= 113 ? ", \n" : e);
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
        }(e, l, t.linewidth, i, a, t.edgeitems, n, t.legacy);
      return d;
    }(e, t, a, r);
  }
  function An(e, t = null, a = null) {
    return t ??= Mn.linewidth, a ??= Mn.precision, 0 == e.ndim ? `${e.item()}` : zn(e, {
      linewidth: t,
      precision: a
    });
  }
  function $n(e, t = null, a = null) {
    if (t ??= Mn.linewidth, a ??= Mn.precision, 0 == e.ndim) return `${e.item()}`;
    let r,
      n = e instanceof z ? "array" : typeof e,
      s = function (e) {
        return ["number", "boolean"].includes(e.name);
      }(e.dtype) && e.size > 0,
      l = n + "(",
      i = s ? ")" : ",";
    r = e.size > 0 || Fe(e.shape, [0]) ? zn(e, {
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
  l.add(gn, () => [...function* () {
    let e = C(10);
    yield gn(e, 2), yield gn(e, -2);
    let t = e.reshape([2, 5]);
    yield t, yield gn(t, 1), yield gn(t, -1), yield gn(t, 1, 0), yield gn(t, -1, 0), yield gn(t, 1, 1), yield gn(t, -1, 1), yield gn(t, [1, 1], [1, 0]), yield gn(t, [2, 1], [1, 0]);
  }()], () => [...function* () {
    yield E([8, 9, 0, 1, 2, 3, 4, 5, 6, 7]), yield E([2, 3, 4, 5, 6, 7, 8, 9, 0, 1]), yield E([[0, 1, 2, 3, 4], [5, 6, 7, 8, 9]]), yield E([[9, 0, 1, 2, 3], [4, 5, 6, 7, 8]]), yield E([[1, 2, 3, 4, 5], [6, 7, 8, 9, 0]]), yield E([[5, 6, 7, 8, 9], [0, 1, 2, 3, 4]]), yield E([[5, 6, 7, 8, 9], [0, 1, 2, 3, 4]]), yield E([[4, 0, 1, 2, 3], [9, 5, 6, 7, 8]]), yield E([[1, 2, 3, 4, 0], [6, 7, 8, 9, 5]]), yield E([[9, 5, 6, 7, 8], [4, 0, 1, 2, 3]]), yield E([[8, 9, 5, 6, 7], [3, 4, 0, 1, 2]]);
  }()]), l.add(bn, () => bn(C(10).reshape(-1, 2), (e, t) => e + t), () => E([[0, 2], [4, 6], [8, 10], [12, 14], [16, 18]])), l.add(xn, () => xn(E([[1, 0], [0, 1]]), E([[4, 1], [2, 2]])), () => E([[4, 1], [2, 2]])).add(xn, () => {
    let e = E([[1, 0], [0, 1]]),
      t = E([1, 2]);
    return [xn(e, t), xn(t, e)];
  }, () => [E([1, 2]), E([1, 2])]).add(xn, () => xn(C(16).reshape([2, 2, 4]), C(16).reshape([2, 4, 2])), () => E([[[28, 34], [76, 98]], [[428, 466], [604, 658]]])), l.add(vn, () => vn(3, 4), () => 12).add(vn, () => vn([[1, 2], [3, 4]], [4, 1]), () => E([6, 16])).add(vn, () => vn([[1, 0], [0, 1]], [[4, 1], [2, 2]]), () => E([[4, 1], [2, 2]]));
  let Mn = {
    edgeitems: 3,
    threshold: 1e3,
    linewidth: 75,
    precision: void 0,
    formatter: null,
    separator: " ",
    prefix: ""
  };
  function kn(e, t, a = []) {
    let r = a.length;
    if (r == e.ndim) return e.get(a);
    if (e.shape[r] > 2 * t) {
      let n = a.concat(un([, t])),
        s = a.concat(un([-t]));
      return Oe([kn(e, t, n), kn(e, t, s)], r);
    }
    return kn(e, t, a.concat(un(":")));
  }
  class Nn {
    get __call__() {
      return this.call.bind(null, this);
    }
  }
  class En extends Nn {
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
  function Sn(e, t) {
    return e.toExponential(t);
  }
  function qn(e, t) {
    return null != t ? e.toFixed(t) : String(e);
  }
  class jn extends Nn {
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
      if (this.exp_format) for (let a of e.flat) r = Math.max(r, Sn(a, t).length);else for (let a of e.flat) r = Math.max(r, qn(a, t).length);
      this.padLeft = r;
    }
    call({
      padLeft: e,
      exp_format: t,
      precision: a
    } = this, r) {
      let n = t ? Sn(r, a) : qn(r, a);
      return " ".repeat(e - n.length) + n;
    }
  }
  function In(e) {
    return "string" == typeof e ? `'${e}'` : `${e}`;
  }
  let Fn = e => () => e;
  function Tn(e, t, a, r, n, s) {
    let l = t.length + a.length > r;
    return s > 113 && t.length <= n.length && (l = !1), l && (e += t.trimEnd() + "\n", t = n), [e, t += a];
  }
  function On(e, t, a, r, n, s) {
    let l = a.split(/\r?\n/);
    if (1 === l.length || s <= 113) return Tn(e, t, a, r, n, s);
    let i,
      d = Math.max(...l.map(e => e.length));
    t.length + d > r && t.length > n.length ? (e += t.trimEnd() + "\n", t = n + l[0], i = n) : (i = " ".repeat(t.length), t += l[0]);
    for (let a = 1; a < l.length; a++) e += t.trimEnd() + "\n", t = i + l[a];
    let o = d - l.at(-1).length;
    return [e, t += " ".repeat(o)];
  }
  l.add(zn, () => zn(C(2520).reshape(3, 4, 210)), () => "[[[   0    1    2 ...  207  208  209]\n  [ 210  211  212 ...  417  418  419]\n  [ 420  421  422 ...  627  628  629]\n  [ 630  631  632 ...  837  838  839]]\n\n [[ 840  841  842 ... 1047 1048 1049]\n  [1050 1051 1052 ... 1257 1258 1259]\n  [1260 1261 1262 ... 1467 1468 1469]\n  [1470 1471 1472 ... 1677 1678 1679]]\n\n [[1680 1681 1682 ... 1887 1888 1889]\n  [1890 1891 1892 ... 2097 2098 2099]\n  [2100 2101 2102 ... 2307 2308 2309]\n  [2310 2311 2312 ... 2517 2518 2519]]]").add(zn, () => zn(E([.1, 100, 50, -9e3])), () => "[ 1e-1  1e+2  5e+1 -9e+3]").add(zn, () => zn(E([1.1, 100.2, 50.6])), () => "[  1.1 100.2  50.6]"), l.add($n, () => $n(E([1.1, 100.2, 50.6])), () => "array([  1.1, 100.2,  50.6])").add($n, () => "" + E([1.1, 100.2, 50.6]), () => "array([  1.1, 100.2,  50.6])");
  class Dn {
    constructor(e, t, a) {
      let r = e.length;
      this.ndim = r, this.shape = e, this.strides = t;
      let n = Array(r);
      for (let a = 0; a < r; a++) n[a] = e[a] * t[a];
      this.dim_strides = n, this.initial = a;
      let s = 1;
      for (let t of e) s *= t;
      this.size = s, this.coords = Array(r), this.reset();
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
          dim_strides: s,
          size: l
        } = this,
        i = e,
        d = n - 1,
        o = !0;
      for (; d >= 0;) {
        let n = a[d];
        if (1 == n) d--;else if (n == t[d]) e -= s[d], t[d--] = 0, o = !0;else {
          if (!o) break;
          e += r[d], t[d] += 1, o = !1;
        }
      }
      return this.offset = e, this.done = ++this.index >= l, {
        value: i,
        done: !1
      };
    }
  }
  function Yn(e, t, a = 0) {
    return new Dn(e, t, a);
  }
  function Pn(e, t) {
    e = P(e);
    let a = t.length,
      r = $(t),
      n = R([].concat(e.shape, a)),
      s = 0;
    for (let l of e.flat) {
      if (l < 0 || l >= r) throw new Error(`index ${l} is out of bounds for array with size ${r}`);
      for (let e = a; e--;) n.data[s + e] = l % t[e], l = l / t[e] | 0;
      s += a;
    }
    let l = Array(a).fill().map((e, t) => t).map(e => n.at("...", e));
    return l;
  }
  function Rn(e, t, a = "raise") {
    let r = P(e).T;
    if (r = ie(r), "raise" == a) {
      if (_t(er(r, 0)) || _t(ar(r, t))) throw new Error(`index is out of bounds for array with shape ${t}`);
    } else if ("wrap" == a) r = gt(ht(gt(r, t), t), t);else {
      if ("clip" != a) throw new Error(`unsupported mode '${a}'`);
      r = ir(r, ee(t.length), ft(t, 1));
    }
    let n = R(T(e).slice(1)),
      s = Oe([da(t.slice(1).reverse()).at("::-1"), [1]]),
      l = 0;
    for (let e of r) n.itemset(l++, sa(pt(e, s)));
    return n;
  }
  function Kn() {
    asd;
  }
  l.add(Yn, () => {
    let e = C(100);
    e = e.at(x(20, -20)).reshape([2, 1, -1, 2]).at(x("..."), x("::-1"));
    let t = [];
    for (let a of Yn(e.shape, e.strides)) t.push(e.data[e.offset + a]);
    return t;
  }, () => [21, 20, 23, 22, 25, 24, 27, 26, 29, 28, 31, 30, 33, 32, 35, 34, 37, 36, 39, 38, 41, 40, 43, 42, 45, 44, 47, 46, 49, 48, 51, 50, 53, 52, 55, 54, 57, 56, 59, 58, 61, 60, 63, 62, 65, 64, 67, 66, 69, 68, 71, 70, 73, 72, 75, 74, 77, 76, 79, 78]), l.add(Pn, () => Pn([22, 41, 37], [7, 6]), () => [E([3, 6, 6]), E([4, 5, 1])]).add(Pn, () => Pn(1621, [6, 7, 8, 9]), () => [3, 1, 4, 1]), l.add(Rn, () => Rn(E([[3, 6, 6], [4, 5, 1]]), [7, 6]), () => E([22, 41, 37])).add(Rn, () => Rn([[3, 6, 6], [4, 5, 1]], [4, 6], "clip"), () => E([22, 23, 19])).add(Rn, () => Rn(E([[3, 6, 6], [4, 5, 1]]), [4, 4], "wrap"), () => E([12, 9, 9])).add(Rn, () => Rn([3, 1, 4, 1], [6, 7, 8, 9]), () => 1621), l.add(l, () => {
    console.log((({
      x: e
    }) => 5 * e + 1).toString());
  }, () => 1);
})();
var s = n.zvA,
  l = n.bFe,
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
  v = n.JWo,
  z = n.WnP,
  A = n.AGi,
  $ = n.IHx,
  M = n.$6P,
  k = n.Lb7,
  N = n.t5D,
  E = n.YjB,
  S = n.eTT,
  q = n.FKo,
  j = n.Hn6,
  I = n.PD,
  F = n.oSO,
  T = n.Xsc,
  O = n.gJP,
  D = n.$jo,
  Y = n.s6s,
  P = n.S1h,
  R = n.Q8B,
  K = n.IXX,
  V = n.FJh,
  X = n.YSU,
  G = n.Vjr,
  U = n.xok,
  W = n.oix,
  J = n.Yqf,
  C = n.k2d,
  B = n.FAR,
  H = n.hu8,
  L = n.V2R,
  Q = n.dcL,
  Z = n.ujY,
  ee = n.Y8W,
  te = n.yE8,
  ae = n.W4K,
  re = n.GBu,
  ne = n.eYE,
  se = n.qgf,
  le = n.fMc,
  ie = n.xAU,
  de = n.M2z,
  oe = n.eKn,
  ue = n.mDi,
  he = n.q$q,
  fe = n.oqW,
  pe = n.T8D,
  ce = n.MY2,
  me = n.nNb,
  ye = n.mVq,
  ge = n.y39,
  we = n.RrX,
  be = n.JGK,
  xe = n.JGz,
  _e = n.zOr,
  ve = n.mCk,
  ze = n.f9Y,
  Ae = n.zNN,
  $e = n.kCc,
  Me = n.$Gn,
  ke = n.zbp,
  Ne = n.VlM,
  Ee = n.RWx,
  Se = n.Ka3,
  qe = n.on5,
  je = n.Hgg,
  Ie = n.csF,
  Fe = n.AKD,
  Te = n.wIX,
  Oe = n.N5d,
  De = n.cTT,
  Ye = n.sk1,
  Pe = n.e,
  Re = n.D5q,
  Ke = n.cSb,
  Ve = n.sKD,
  Xe = n.DgJ,
  Ge = n.Qqt,
  Ue = n.uuq,
  We = n.aD1,
  Je = n.t$B,
  Ce = n.KlT,
  Be = n.iyy,
  He = n.zG0,
  Le = n.KTV,
  Qe = n.RRI,
  Ze = n.HC4,
  et = n.Ah7,
  tt = n.GWj,
  at = n.Sc8,
  rt = n.Ek0,
  nt = n.v_D,
  st = n.KSO,
  lt = n.rpZ,
  it = n.NxV,
  dt = n.thl,
  ot = n.rn5,
  ut = n.rqY,
  ht = n.FLS,
  ft = n.pjt,
  pt = n.zGm,
  ct = n.smV,
  mt = n.Hsf,
  yt = n.DIH,
  gt = n._mT,
  wt = n.yRu,
  bt = n.HqJ,
  xt = n.S8h,
  _t = n.CGm,
  vt = n.gY6,
  zt = n.Zw8,
  At = n.U_R,
  $t = n.f0i,
  Mt = n.fXA,
  kt = n.I7t,
  Nt = n.igg,
  Et = n.ftH,
  St = n.KvH,
  qt = n.IW_,
  jt = n.uqG,
  It = n.vy,
  Ft = n.Ai1,
  Tt = n.d9m,
  Ot = n.bzW,
  Dt = n.SX3,
  Yt = n.cM7,
  Pt = n.mvw,
  Rt = n.Krr,
  Kt = n.k3Q,
  Vt = n.YKj,
  Xt = n.buk,
  Gt = n.UID,
  Ut = n.Jxs,
  Wt = n.gWQ,
  Jt = n.J69,
  Ct = n.LTh,
  Bt = n.wQq,
  Ht = n.U8E,
  Lt = n.JpY,
  Qt = n.qnd,
  Zt = n.dQs,
  ea = n.$7d,
  ta = n.RCU,
  aa = n.MIL,
  ra = n.obs,
  na = n.$V5,
  sa = n.p3s,
  la = n.x2A,
  ia = n.fyW,
  da = n.MHD,
  oa = n.pdy,
  ua = n.MaX,
  ha = n.S4p,
  fa = n.INJ,
  pa = n.lf5,
  ca = n.ffp,
  ma = n.AqN,
  ya = n.qDh,
  ga = n.iUs,
  wa = n.r6Y,
  ba = n.NCv,
  xa = n.pi,
  _a = n.eiS,
  va = n.i1C,
  za = n.qux,
  Aa = n.WVs,
  $a = n.OZM,
  Ma = n.gzd,
  ka = n.BVy,
  Na = n.uRy,
  Ea = n.TN_,
  Sa = n.MXc,
  qa = n.di9,
  ja = n.n3V,
  Ia = n.nTq,
  Fa = n.Pyd,
  Ta = n.M25,
  Oa = n.spK,
  Da = n.rx1,
  Ya = n.XLQ,
  Pa = n.SIr,
  Ra = n.wyi,
  Ka = n.XC3,
  Va = n.SlP,
  Xa = n.aSG,
  Ga = n.s_,
  Ua = n.UPJ,
  Wa = n.FvN,
  Ja = n.flC,
  Ca = n.mCt,
  Ba = n.FPS,
  Ha = n.Xxe,
  La = n.UBE,
  Qa = n.O$l,
  Za = n.R_K,
  er = n.tPi,
  tr = n.DYV,
  ar = n.Vl2,
  rr = n._b3,
  nr = n.h62,
  sr = n.L9e,
  lr = n.knu,
  ir = n.qoR,
  dr = n.$XF,
  or = n.Smz,
  ur = n.ZU4,
  hr = n.qnb,
  fr = n.ORZ,
  pr = n.AEp,
  cr = n.K1B,
  mr = n.Gg6,
  yr = n.uAr,
  gr = n.BpP,
  wr = n.p4s,
  br = n.ebm,
  xr = n.$I7,
  _r = n.RFc,
  vr = n.DDI,
  zr = n.vwf,
  Ar = n.bLT,
  $r = n.M56,
  Mr = n.Wg4,
  kr = n.CAK,
  Nr = n.nFP,
  Er = n.Ud9,
  Sr = n.arb,
  qr = n.lls,
  jr = n.T1S;
exports.zeros_like = jr;
exports.zeros = qr;
exports.where = Sr;
exports.vstack = Er;
exports.vsplit = Nr;
exports.variance = kr;
exports.unwrap = Mr;
exports.unravel_index = $r;
exports.unpackbits = Ar;
exports.tuple_ = zr;
exports.tupleType = vr;
exports.trunc = _r;
exports.true_divide = xr;
exports.trapz = br;
exports.transpose = wr;
exports.timeit2 = gr;
exports.timeit = yr;
exports.tile = mr;
exports.tester = cr;
exports.tanh = pr;
exports.tan = fr;
exports.take = hr;
exports.swapaxes = ur;
exports.sum = or;
exports.subtract = dr;
exports.std = ir;
exports.stack = lr;
exports.squeeze = sr;
exports.square = nr;
exports.sqrt = rr;
exports.split = ar;
exports.sort = tr;
exports.slice = er;
exports.sinh = Za;
exports.sin = Qa;
exports.signbit = La;
exports.sign = Ha;
exports.shape_ = Ba;
exports.shape = Ca;
exports.shallow_array_equal = Ja;
exports.searchsorted = Wa;
exports.sample = Ua;
exports.s_ = Ga;
exports.row_stack = Xa;
exports.roll = Va;
exports.rint = Ka;
exports.right_shift = Ra;
exports.resize = Pa;
exports.reshape = Ya;
exports.repeat = Da;
exports.remainder = Oa;
exports.reciprocal = Ta;
exports.ravel_multi_index = Fa;
exports.ravel = Ia;
exports.ranf = ja;
exports.random_sample = qa;
exports.random = Sa;
exports.rand = Ea;
exports.radians = Na;
exports.rad2deg = ka;
exports.put = Ma;
exports.ptp = $a;
exports.prod = Aa;
exports.power = za;
exports.positive = va;
exports.pick = _a;
exports.pi = xa;
exports.packbits = ba;
exports.ones_like = wa;
exports.ones = ga;
exports.ogrid = ya;
exports.not_equal = ma;
exports.normalize_axis_tuple = ca;
exports.normalize_axis_mask = pa;
exports.normalize_axis_index = fa;
exports.normalize_axis = ha;
exports.nonzero = ua;
exports.negative = oa;
exports.ndoffset = da;
exports.nditer = ia;
exports.ndindex = la;
exports.ndim = sa;
exports.ndenumerate = na;
exports.nansum = ra;
exports.nanprod = aa;
exports.nancumsum = ta;
exports.nancumprod = ea;
exports.nan_to_num = Zt;
exports.nan = Qt;
exports.multiply = Lt;
exports.moveaxis = Ht;
exports.mod = Bt;
exports.minimum = Ct;
exports.mean = Jt;
exports.maximum = Wt;
exports.matmul = Ut;
exports.map = Gt;
exports.logaddexp2 = Xt;
exports.logaddexp = Vt;
exports.log2 = Kt;
exports.log1p = Rt;
exports.log10 = Pt;
exports.log = Yt;
exports.linspace = Dt;
exports.less_equal = Ot;
exports.less = Tt;
exports.left_shift = Ft;
exports.ldexp = It;
exports.lcm = jt;
exports.ix_ = qt;
exports.isscalar = St;
exports.isposinf = Et;
exports.isneginf = Nt;
exports.isna = kt;
exports.isinf = Mt;
exports.isfinite = $t;
exports.invert = At;
exports.interp = zt;
exports.inf = vt;
exports.indices = _t;
exports.index_exp = xt;
exports.in1d = bt;
exports.identity = wt;
exports.hypot = gt;
exports.hstack = yt;
exports.hsplit = mt;
exports.guessType = ct;
exports.greater_equal = pt;
exports.greater = ft;
exports.gradient = ht;
exports.get_strides = ut;
exports.get_size = ot;
exports.gcd = dt;
exports.full_like = it;
exports.full = lt;
exports.fromiter = st;
exports.fromfunction = nt;
exports.fmod = rt;
exports.floor_divide = at;
exports.floor = tt;
exports.flipud = et;
exports.fliplr = Ze;
exports.flip = Qe;
exports.flatnonzero = Le;
exports.fix = He;
exports.eye = Be;
exports.extract = Ce;
exports.expm1 = Je;
exports.expand_dims = We;
exports.exp2 = Ue;
exports.exp = Ge;
exports.equal = Xe;
exports.empty_like = Ve;
exports.empty = Ke;
exports.ediff1d = Re;
exports.e = Pe;
exports.dtype_ = Ye;
exports.dtype = De;
exports.dstack = Oe;
exports.dsplit = Te;
exports.dot = Fe;
exports.divide = Ie;
exports.diff = je;
exports.diagonal = qe;
exports.diag = Se;
exports.degrees = Ee;
exports.deg2rad = Ne;
exports.cumsum = ke;
exports.cumprod = Me;
exports.cross = $e;
exports.count_nonzero = Ae;
exports.cosh = ze;
exports.cos = ve;
exports.copyto = _e;
exports.copysign = xe;
exports.copy = be;
exports.convolve = we;
exports.contiguous = ge;
exports.concatenate = ye;
exports.compress = me;
exports.compile = ce;
exports.column_stack = pe;
exports.clip = fe;
exports.choice = he;
exports.ceil = ue;
exports.cbrt = oe;
exports.broadcast_to = de;
exports.broadcast_shapes = ie;
exports.broadcast = le;
exports.bitwise_xor = se;
exports.bitwise_or = ne;
exports.bitwise_not = re;
exports.bitwise_and = ae;
exports.bincount = te;
exports.average = ee;
exports.atleast_3d = Z;
exports.atleast_2d = Q;
exports.atleast_1d = L;
exports.assert = H;
exports.ascontiguousarray = B;
exports.asarray = C;
exports.array_str = J;
exports.array_split = W;
exports.array_repr = U;
exports.array_equiv = G;
exports.array_equal = X;
exports.array2string = V;
exports.array = K;
exports.around = R;
exports.argwhere = P;
exports.argsort = Y;
exports.arctanh = D;
exports.arctan2 = O;
exports.arctan = T;
exports.arcsinh = F;
exports.arcsin = I;
exports.arccosh = j;
exports.arccos = q;
exports.arange = S;
exports.any = E;
exports.amin = N;
exports.amax = k;
exports.all = M;
exports.add = $;
exports.absolute = A;
exports.abs = z;
exports._wrap_reduce = v;
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
exports.Dtype = l;
exports.Broadcast = s;