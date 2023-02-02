(function () {
  function ha(m) {
    ja.console.log(m);
  }
  function mb() {
    this.m();
  }
  function D() {
    this.c = this.b = 0;
  }
  function Ji() {
    this.ma = this.I = this.sa = this.H = 0;
  }
  function Ed(m) {
    if ("undefined" != typeof ja.Float32Array) return new ja.Float32Array(m);
    for (var E = []; 0 <= --m; ) E[m] = 0;
    return E;
  }
  function rk(m) {
    if ("undefined" == typeof m.Z) m.Z = null;
    m.Db = new mb();
    m.s = 0;
    m.x = 0;
    m.w = 0;
    m.v = 0;
    m.Tc = 0;
    m.Ld = 0;
    m.ka = 0;
    m.la = 0;
    m.Wa = 1;
    m.eb = 0;
    m.fb = 0;
    m.Gd = 0;
    m.Fd = 0;
    m.Bc = 0;
    m.ed = 0;
    m.Ce = 0;
    m.Pf = 0;
    m.De = 0;
    m.Of = 0;
    m.oh = 800;
    m.nh = 480;
    m.tb = 400;
    m.sb = 240;
    m.dj = 140;
    m.fj = 160;
    m.ej = 70;
    m.gj = 80;
    m.Oe = true;
    m.pf = function () {
      var m = this.Gd,
        c = this.Fd,
        e = 400 / 240,
        k;
      k = Math.max(Math.min(m / c, 940 / 480), 1.25);
      var l = 0,
        n = 0;
      if (k > e) {
        l = k * c;
        n = c;
        this.ka = e / k;
        this.la = 1;
      } else {
        l = m;
        n = m / k;
        this.ka = 1;
        this.la = k / e;
      }
      this.ka *= this.Wa;
      this.la *= this.Wa;
      e = 0 + Math.floor(m);
      k = 0 + Math.floor(c);
      this.Ce = Math.floor(0 + 0.5 * (m - l));
      this.Pf = Math.ceil(e - 0.5 * (m - l));
      this.De = Math.floor(0 + 0.5 * (c - n));
      this.Of = Math.ceil(k - 0.5 * (c - n));
      this.Bc = this.Pf - this.Ce;
      this.ed = this.Of - this.De;
      this.Db.m();
      this.Db.p = this.ka / 400;
      this.Db.g = -this.ka + this.eb * this.Db.p;
      this.Db.q = -this.la / 240;
      this.Db.f = this.la + this.fb * this.Db.q;
      this.s = Math.max(400 * -(this.Wa / this.ka - 1), -70);
      this.x = Math.max(240 * -(this.Wa / this.la - 1), -80);
      this.w = 800 - this.s;
      this.v = 480 - this.x;
      this.Tc = this.w - this.s;
      this.Ld = this.v - this.x;
      this.qe = this.Bc / this.Tc;
      m = (-0.5 * (1 - this.Wa) * this.Ld) / this.Wa;
      this.Rb = -this.s + this.eb - (-0.5 * (1 - this.Wa) * this.Tc) / this.Wa;
      this.Sb = -this.x + this.fb - m;
      this.ab = this.Wa * this.qe;
      this.Qf = this.Rb * this.ab;
      this.Rf = this.Sb * this.ab;
      if (1e-4 < Math.abs(this.Wa - 1)) this.Hc = true;
      else this.Hc = false;
      if (1e-4 < Math.abs(this.ab - 1)) this.Xe = true;
      else this.Xe = false;
      this.Oe = true;
    };
    m.qg = 0;
    m.of = function () {
      var E = 800,
        c = 480;
      if ("undefined" != typeof ja.innerWidth) {
        E = ja.innerWidth;
        c = ja.innerHeight;
      }
      if (
        E < this.Gd - 0.5 ||
        E > this.Gd + 0.5 ||
        c < this.Fd - 0.5 ||
        c > this.Fd + 0.5
      ) {
        var e = new Date().getTime();
        if (500 < e - m.qg) {
          m.qg = e;
          this.Gd = E;
          this.Fd = c;
          this.pf();
          if (this.Z) {
            this.Z.width = this.Bc;
            this.Z.height = this.ed;
            this.Z.style.left = this.Ce + "px";
            this.Z.style.top = this.De + "px";
          }
          if (Mf)
            window.setTimeout(function () {
              window.scrollTo(0, 1);
            }, 100);
          ha(
            "Update render region to new dimmensions: " +
              this.Bc +
              "x" +
              this.ed
          );
        }
      }
    };
  }
  function sk() {
    if (n) ja.document.body.removeChild(n);
    n = ja.document.createElement("canvas");
    var m = {};
    rk(m);
    m.Z = n;
    m.of();
    n.style.cssText =
      "position:absolute;touch-action: none;touch-action-delay: none;-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;outline: none;-webkit-tap-highlight-color: rgba(255, 255, 255, 0);";
    ja.document.body.appendChild(n);
  }
  function Nf() {
    c = n;
  }
  function Ki(m) {
    m.mozImageSmoothingEnabled = false;
    m.webkitImageSmoothingEnabled = false;
    m.msImageSmoothingEnabled = false;
    m.imageSmoothingEnabled = false;
  }
  function yb() {
    if (zg) {
      sk();
      ha("Falling back to 2d canvas after failing WebGL initialization.");
      zg = null;
    }
    Nf();
    ia.Z = n;
    ia.Cg = c;
    ia.t = c.getContext("2d");
    ia.Xd = n == c ? ia.t : n.getContext("2d");
    Ki(ia.t);
    Ki(ia.Xd);
    ca = ia;
    ca.kd = false;
  }
  function tb() {
    if (ca == Ob) {
      ha("Restoring WebGL context...");
      Ob.r();
      for (var m in u)
        if (u.hasOwnProperty(m)) {
          var E = u[m];
          if (E.Aa && "undefined" != typeof E.Gc) ca.Pg(E);
        }
      for (m = 0; m < Ob.Ba.length; m++) Ob.Tf(Ob.Ba[m]);
      Ob.id = false;
      if (!Ob.Nf()) yb();
    }
  }
  function Ag(m) {
    return function () {
      m.e = m.o.width;
      m.d = m.o.height;
      Li += m.e * m.d * 4;
      if (m.je) {
        m.e *= m.Tb;
        m.d *= m.Tb;
      }
      if (0 < m.e) m.dc = 1 / m.e;
      else m.dc = 0;
      if (0 < m.d) m.Sc = 1 / m.d;
      else m.Sc = 0;
      m.cc = 0.5 * Math.sqrt(m.e * m.e + m.d * m.d);
      m.Aa = true;
      if (ca.kd) ca.Pg(m);
      else ca.Lf(m);
      Bg++;
    };
  }
  function ma(m, E, c) {
    var e = new ja.Image(),
      k = {};
    k.o = e;
    k.Aa = false;
    k.Jc = E;
    k.vd = -1;
    k.Na = null;
    k.Vd = null;
    var l = "images/";
    if (da && !c) {
      l += "x05/";
      k.A = 0.5;
      k.je = true;
    } else {
      if (c) ha("Forcing " + m + " to HQ");
      k.je = false;
      k.A = 1;
    }
    k.Tb = 1 / k.A;
    l += m;
    e.onload = Ag(k);
    e.onerror = function () {
      ha("loadImage: couldn't load " + l);
      k.o = tk;
      k.Aa = true;
      Bg++;
    };
    e.src = l;
    u[m] = k;
  }
  function k(m, E, c, k) {
    if ("undefined" == typeof E) E = 0;
    if ("undefined" == typeof c) c = 0;
    if ("undefined" != typeof k)
      if (0 > k.indexOf(e)) {
        ha(
          "loadImage: skipping " +
            m +
            " because it is unused with target language!"
        );
        return;
      }
    Cg.push({ Zh: m, Oh: E, xh: c });
  }
  function uk(m) {
    return "sounds/" + m.substring(0, m.length - 3) + ga.gd;
  }
  function ra(m, E) {
    ha(E);
    m.ie = true;
    Zc++;
  }
  function vk(m) {
    var E = { Aa: false, ie: false, gb: false };
    pa[m] = E;
    var c = uk(m);
    if ("wa" == ga.va) {
      var e = new ja.XMLHttpRequest();
      e.open("GET", c, true);
      e.responseType = "arraybuffer";
      e.onload = function () {
        E.Bb = e.response;
        E.Aa = true;
      };
      e.onerror = function () {
        ra(E, "loadSound: couldn't load " + m);
      };
      try {
        e.send();
      } catch (k) {
        ra(E, "loadSound: couldn't load " + m + ": " + k.Lh);
      }
    }
    if ("html5" == ga.va) {
      E.Cb = [];
      for (var l = (E.Td = 0); 2 > l; l++) {
        E.Cb[l] = new ja.Audio(c);
        E.Cb[l].preload = "auto";
        E.Cb[l].load();
      }
    }
  }
  function R(m) {
    if ("none" != ga.va) Dg.push(m);
  }
  function Mi(m, E) {
    var c = "loadMusic: couldn't load " + m;
    if (E) c += ":" + E.Lh;
    ha(c);
  }
  function Ni(m, E) {
    if ("none" != ga.va) {
      var c = uk(m),
        e = { Bd: E, Ua: null, Bb: null, kc: null, gb: false };
      J[m] = e;
      if ("html5" == ga.Nc) {
        e.Ua = [];
        try {
          for (var k = 0; 2 > k; k++) {
            e.Ua[k] = new ja.Audio(c);
            e.Ua[k].preload = "auto";
            e.Ua[k].load();
          }
          e.gb = true;
        } catch (l) {
          e.Ua = null;
        }
      }
      if ("wa" == ga.Nc) {
        var n = new ja.XMLHttpRequest();
        n.open("GET", c, true);
        n.responseType = "arraybuffer";
        n.onload = function () {
          e.Bb = n.response;
          if (ga.t.decodeAudioData)
            ga.t.decodeAudioData(
              e.Bb,
              function (E) {
                ha("Decoded music: " + m);
                e.kc = E;
                e.gb = true;
                e.Bb = null;
              },
              function () {
                ha("loadMusic: couldn't decode " + m);
              }
            );
          else {
            e.kc = ga.t.createBuffer(e.Bb, false);
            ha("Decoded music " + m + " [async]");
            if (e.kc) e.gb = true;
            e.Bb = null;
          }
        };
        n.onerror = function () {
          Mi(m, null);
        };
        try {
          n.send();
        } catch (u) {
          Mi(m, u);
        }
      }
    }
  }
  function Oi() {
    var m = 0.001 * new Date().getTime(),
      E = m - Pi;
    Pi = m;
    ca.of();
    var c = u["coolmath-logo.png"],
      k = u["kiz-dot.png"],
      n = u["loading-bar-outer.png"],
      C = u["loading-bar-inner.png"],
      I = u["game-bk.png"],
      J = u["sun-temple.png"],
      M = u["title.png"];
    ta.sa = ca.Z.width;
    ta.ma = ca.Z.height;
    ca.Kb(ta);
    ca.pd();
    ca.fc(0, 0, 0, 1);
    ca.vb(-70, -80, 940, 640);
    ca.fd();
    var Q = 0;
    if ("undefined" != typeof I && I && I.Aa && W) {
      Ba += E;
      w.g = 870 - I.e;
      w.f = 560 - I.d;
      ca.Y(I, w, Ba);
    }
    if (
      "undefined" != typeof J &&
      J &&
      "undefined" != typeof M &&
      M &&
      J.Aa &&
      M.Aa &&
      W
    ) {
      var R;
      if (Fd) {
        Xb += E;
        R = 1 - Xb * Xb * Xb;
      } else {
        zb += E;
        if (1 < zb) zb = 1;
        R = 1 - zb;
        R = 1 - R * R * R * R * R * R * R;
      }
      var aa = ca.s,
        ia = ca.v - J.d + 11,
        ia = ia + 16 * J.d * (1 - R);
      Eg.H = 0;
      Eg.I = 0;
      Eg.sa = J.e;
      Eg.ma = J.d - 22;
      ca.u(J, Eg, aa, ia, true);
      aa = ca.w - M.e;
      ia = ca.x + 11;
      ia = ia - 16 * M.d * (1 - R);
      ca.u(M, null, aa, ia, true);
    }
    if ("undefined" != typeof n && n && "undefined" != typeof C && C && W) {
      if (n.Aa) {
        ca.u(
          n,
          null,
          0.5 * (800 - n.e) + 4 * Xb * Xb * Xb * 800,
          0.5 * (480 - n.d),
          true
        );
        Q++;
      }
      if (C.Aa) {
        J = (Bg + Zc) / (Cg.length + Dg.length);
        J *= 0.75 + 0.25 * Math.min((m - $e) / 0, 1);
        ta.sa = J * C.e;
        ta.ma = C.d;
        ca.u(
          C,
          ta,
          0.5 * (800 - C.e) + 4 * Xb * Xb * Xb * 800,
          0.5 * (480 - C.d) + 8,
          true
        );
        Q++;
      }
    }
    if ("undefined" != typeof c && c.Aa && !l) {
      r += E;
      if (
        3 < r &&
        ("undefined" == typeof n ||
          !n ||
          "undefined" == typeof C ||
          !C ||
          !n.Aa ||
          !C.Aa ||
          "undefined" == typeof I ||
          !I ||
          !I.Aa)
      )
        r = 3;
      if (3.01 < r) W = 1;
      if (3.5 < r) {
        r = 3.5;
        W = l = 1;
      }
      n = 870 - c.e;
      C = 560 - c.d;
      w.g = n;
      w.f = C;
      I = Math.min(2 * (3.5 - r), 1);
      ca.Y(c, w, I);
      for (c = 0; c < Math.floor(nb); c++)
        if ("undefined" != typeof k && k.Aa) {
          w.g = n + 456 + 12 * c;
          w.f = C + 522;
          ca.Y(k, w, I);
        }
      nb += 3 * E;
      if (3.9 < nb) nb = 0;
    }
    ca.Ga();
    if (2 > va - Zc)
      for (E = va; va < E + 2; va++) if (va < Dg.length) vk(Dg[va]);
    if (3 > wa - Bg)
      for (E = wa; wa < E + 3; wa++)
        if (wa < Cg.length) {
          k = Cg[wa];
          ma(k.Zh, k.Oh, k.xh);
        }
    for (var ra in pa)
      if (pa.hasOwnProperty(ra)) {
        k = pa[ra];
        if ("wa" == ga.va)
          if (k.Aa && !k.ie && !Of) {
            k.ie = true;
            if (ga.t.decodeAudioData) {
              Of = true;
              (function (m, E) {
                ga.t.decodeAudioData(
                  m.Bb,
                  function (c) {
                    ha("Decoded " + E);
                    m.kc = c;
                    m.gb = true;
                    Zc++;
                    m.Bb = null;
                    Of = false;
                  },
                  function () {
                    ha("loadSound: couldn't decode " + path);
                    m.Bb = null;
                    Zc++;
                    Of = false;
                  }
                );
              })(k, ra);
            } else {
              k.kc = ga.t.createBuffer(k.Bb, false);
              ha("Decoded " + ra + " [async]");
              if (k.kc) k.gb = true;
              k.Bb = null;
              Zc++;
            }
          }
        if ("html5" == ga.va)
          if (!k.Aa) {
            if (k.Cb[0].readyState >= k.Cb[0].HAVE_ENOUGH_DATA) {
              ha("HTML5 Sound '" + ra + "' is ready.");
              k.Aa = true;
              k.ie = true;
              k.gb = true;
              Zc++;
            }
            for (E = 0; E < k.Cb.length; E++)
              if (k.Cb[E].error) {
                k.gb = false;
                if (!k.Aa) {
                  ha("Error: HTML5 Sound '" + ra + "' didn't load properly!");
                  k.Aa = true;
                  Zc++;
                }
              }
          }
      }
    if (Bg == Cg.length && Zc == Dg.length && 0 < m - $e && !Ah.lg) {
      Fd = true;
      Ah.ce();
      if (
        0.65 <= Xb &&
        "function" ==
          typeof window.eso_main_function_of_unique_name_194851458194
      ) {
        ha(
          "Loaded! Image memory usage " +
            (Li / 1024 / 1024).toPrecision(3) +
            "MB"
        );
        if (Qi) ja.clearInterval(Qi);
        ja.eso_main_function_of_unique_name_194851458194(Bh, {
          Rh: ca,
          Kh: mb,
          Qh: Ji,
          Ph: D,
          Xh: ga,
          Tj: da,
          Sj: $c,
          Hh: Mf,
          Ih: e,
          th: Ah,
          Jh: Yb,
          uh: 0,
        });
        return;
      }
    }
    if (2 <= Q) xk++;
    if (!yk && 3 <= xk) {
      yk = true;
      m = ja.document.createElement("script");
      m.setAttribute("type", "text/javascript");
      m.setAttribute("src", "game.js");
      ja.document.getElementsByTagName("head")[0].appendChild(m);
    }
    if (ab) ab(Oi);
  }
  var ja = window,
    Q = ja.navigator.userAgent,
    $c = Q.match(/Android/i),
    Mf = Q.match(/iPhone|iPad|iPod/i),
    Fa = Q.match(/IEMobile/i);
  if (Fa) Mf = $c = false;
  var ub = 0;
  try {
    ub = ja.frameElement || ja.self != ja.top;
  } catch (bp) {
    ub = 1;
  }
  var Yb = ub ? ja.document.referrer : ja.location.href;
  ja.eso_platform_type_ = "unknown";
  if (Mf) ja.eso_platform_type_ = "ios";
  if ($c) ja.eso_platform_type_ = "android";
  if (Fa) ja.eso_platform_type_ = "wphone";
  var da = $c || Mf || Fa || Q.match(/BlackBerry/i) || Q.match(/Opera Mini/i),
    Q = "undefined" == typeof ja.Float32Array,
    e = 0,
    ub = "en";
  if ("undefined" != typeof window.eso_force_language)
    ub = window.eso_force_language;
  else if (window.navigator)
    ub = window.navigator.userLanguage || window.navigator.language || ub;
  switch (ub.substring(0, 2).toLowerCase()) {
    case "en":
      e = 0;
      break;
    case "ru":
      e = 1;
      break;
    case "es":
      e = 2;
      break;
    case "de":
      e = 3;
      break;
    case "tr":
      e = 4;
      break;
    case "fr":
      e = 5;
      break;
    case "nl":
      e = 6;
      break;
    case "pt":
      e = 7;
      break;
    case "pl":
      e = 8;
  }
  if (
    "undefined" == typeof ja.console ||
    "undefined" == typeof ja.console.log
  ) {
    ja.console = {};
    ja.console.log = function () {};
  }
  var n = null,
    c = null;
  mb.prototype.m = function () {
    this.p = 1;
    this.ca = this.N = 0;
    this.q = 1;
    this.f = this.g = 0;
  };
  mb.prototype.A = function (m, E) {
    this.p *= m;
    this.N *= E;
    this.ca *= m;
    this.q *= E;
    this.g *= m;
    this.f *= E;
  };
  mb.prototype.ea = function (m) {
    var E = this.p * m.p + this.N * m.ca;
    this.N = this.p * m.N + this.N * m.q;
    this.p = E;
    E = this.ca * m.p + this.q * m.ca;
    this.q = this.ca * m.N + this.q * m.q;
    this.ca = E;
    E = this.g * m.p + this.f * m.ca + m.g;
    this.f = this.g * m.N + this.f * m.q + m.f;
    this.g = E;
  };
  mb.prototype.O = function (m) {
    var E = Math.cos(m);
    m = Math.sin(m);
    var c = this.p * E - this.N * m;
    this.N = this.p * m + this.N * E;
    this.p = c;
    c = this.ca * E - this.q * m;
    this.q = this.ca * m + this.q * E;
    this.ca = c;
    c = this.g * E - this.f * m;
    this.f = this.g * m + this.f * E;
    this.g = c;
  };
  var Ob = {
      Vf: function (m, E) {
        var c = this.G,
          k = c.createShader(c.VERTEX_SHADER);
        if (this.na()) return null;
        c.shaderSource(k, m);
        if (this.na()) return null;
        c.compileShader(k);
        if (this.na()) return null;
        if (!c.getShaderParameter(k, c.COMPILE_STATUS)) {
          ha("Could not compile vertex shader!");
          ha(c.getShaderInfoLog(k));
          return null;
        }
        var e = c.createShader(c.FRAGMENT_SHADER);
        if (this.na()) return null;
        c.shaderSource(e, E);
        if (this.na()) return null;
        c.compileShader(e);
        if (this.na()) return null;
        if (!c.getShaderParameter(e, c.COMPILE_STATUS)) {
          ha("Could not compile fragment shader!");
          ha(c.getShaderInfoLog(k));
          return null;
        }
        var l = c.createProgram();
        if (this.na()) return null;
        c.attachShader(l, k);
        if (this.na()) return null;
        c.attachShader(l, e);
        if (this.na()) return null;
        c.linkProgram(l);
        if (this.na()) return null;
        if (!c.getProgramParameter(l, c.LINK_STATUS)) {
          ha("Could not link shader program!");
          return null;
        }
        return l;
      },
      r: function () {
        var m = this.G;
        m.getError();
        m.viewportWidth = this.Z.width;
        m.viewportHeight = this.Z.height;
        this.bc = this.Vf(
          "attribute vec2 aVertexPosition;varying vec2 vTexCoord;uniform vec4 texcoordXfm;uniform vec4 posXfm[2];void main(void) {vTexCoord = aVertexPosition.xy * texcoordXfm.xy + texcoordXfm.zw;gl_Position.x = dot( vec3 (aVertexPosition, 1.0), posXfm[0].xyz );gl_Position.y = dot( vec3 (aVertexPosition, 1.0), posXfm[1].xyz );gl_Position.z = 0.5;gl_Position.w = 1.0;}",
          "precision mediump float;varying vec2 vTexCoord;uniform sampler2D uImage0;uniform vec4 vColorMult;void main(void) {gl_FragColor = texture2D (uImage0, vTexCoord)*vColorMult;}"
        );
        if (this.na()) return false;
        this.Vb = m.getAttribLocation(this.bc, "aVertexPosition");
        if (this.na()) return false;
        this.Ub = m.getUniformLocation(this.bc, "texcoordXfm");
        if (this.na()) return false;
        this.Ib = m.getUniformLocation(this.bc, "posXfm");
        if (this.na()) return false;
        this.lc = m.getUniformLocation(this.bc, "vColorMult");
        if (this.na()) return false;
        this.Pe = m.getUniformLocation(this.bc, "uImage0");
        if (this.na()) return false;
        this.nd = this.Vf(
          "attribute vec2 aVertexPosition;uniform vec4 posXfm[2];void main(void) {gl_Position.x = dot( vec3 (aVertexPosition, 1.0), posXfm[0].xyz );gl_Position.y = dot( vec3 (aVertexPosition, 1.0), posXfm[1].xyz );gl_Position.z = 0.5;gl_Position.w = 1.0;}",
          "precision mediump float;uniform vec4 vColor;void main(void) {gl_FragColor = vColor;}"
        );
        if (this.na()) return false;
        this.qf = m.getAttribLocation(this.nd, "aVertexPosition");
        if (this.na()) return false;
        this.zg = m.getUniformLocation(this.nd, "posXfm");
        if (this.na()) return false;
        this.Ee = m.getUniformLocation(this.nd, "vColor");
        if (this.na()) return false;
        this.Yc = m.createBuffer();
        if (this.na()) return false;
        m.bindBuffer(m.ARRAY_BUFFER, this.Yc);
        if (this.na()) return false;
        m.bufferData(
          m.ARRAY_BUFFER,
          new ja.Float32Array([1, 1, 0, 1, 1, 0, 0, 0]),
          m.STATIC_DRAW
        );
        if (this.na()) return false;
        m.bindBuffer(m.ARRAY_BUFFER, null);
        return this.na() ? false : true;
      },
      Nf: function () {
        return (
          (null !== this.G &&
            null !== this.bc &&
            null !== this.nd &&
            null !== this.Vb &&
            null !== this.Ub &&
            null !== this.Ib &&
            null !== this.lc &&
            null !== this.Pe &&
            null != this.Yc) ||
          this.id
        );
      },
      Eg: function (m, E, c) {
        this.Wa = m;
        this.eb = E;
        this.fb = c;
        this.pf();
      },
      da: function (m) {
        this.C = m;
        this.G.bindTexture(this.G.TEXTURE_2D, m.Gc);
      },
      Ca: function (m) {
        if (0 > m) m = 0;
        this.G.uniform4f(this.lc, 1, 1, 1, m);
      },
      ya: function (m, c, k, e) {
        this.G.uniform4f(this.lc, m, c, k, e);
      },
      db: function (m, c, k, e, l, n, u, w) {
        var r = this.G,
          C = this.C.dc,
          D = this.C.Sc;
        r.uniform4f(this.Ub, k * C, e * D, m * C, c * D);
        m = this.te;
        m.m();
        m.p = k * u;
        m.q = e * w;
        m.g = l;
        m.f = n;
        m.ea(this.Db);
        this.Da.set([m.p, m.ca, m.g, 0, m.N, m.q, m.f, 0]);
        r.uniform4fv(this.Ib, this.Da);
        r.drawArrays(r.TRIANGLE_STRIP, 0, 4);
      },
      ub: function (m, c, k, e, l, n, u) {
        var w = this.G;
        l += this.eb;
        n += this.fb;
        if (!u) w.disable(w.BLEND);
        this.Jb(m, c, k, e);
        this.Da.set([
          (this.ka * k) / this.tb,
          0,
          this.ka * (l / this.tb - 1),
          0,
          0,
          (-e / this.sb) * this.la,
          this.la * (1 - n / this.sb),
          0,
        ]);
        w.uniform4fv(this.Ib, this.Da);
        w.drawArrays(w.TRIANGLE_STRIP, 0, 4);
        if (!u) w.enable(w.BLEND);
      },
      u: function (m, c, k, e, l) {
        var n = this.G;
        k += this.eb;
        e += this.fb;
        if (!l) n.disable(n.BLEND);
        var u, w;
        if (null != c) {
          var r = m.dc,
            C = m.Sc;
          u = c.sa - c.H;
          w = c.ma - c.I;
          n.uniform4f(this.Ub, u * r, w * C, c.H * r, c.I * C);
        } else {
          u = m.e;
          w = m.d;
          n.uniform4f(this.Ub, 1, 1, 0, 0);
        }
        this.Da.set([
          (this.ka * u) / this.tb,
          0,
          this.ka * (k / this.tb - 1),
          0,
          0,
          (-this.la * w) / this.sb,
          this.la * (1 - e / this.sb),
          0,
        ]);
        n.uniform4fv(this.Ib, this.Da);
        n.bindTexture(n.TEXTURE_2D, m.Gc);
        n.drawArrays(n.TRIANGLE_STRIP, 0, 4);
        if (!l) n.enable(n.BLEND);
      },
      kb: function (m, c, k) {
        var e = this.G;
        m += this.eb;
        c += this.fb;
        if (!k) e.disable(e.BLEND);
        this.Da.set([
          (this.ka * this.C.e) / this.tb,
          0,
          this.ka * (m / this.tb - 1),
          0,
          0,
          (-this.la * this.C.d) / this.sb,
          this.la * (1 - c / this.sb),
          0,
        ]);
        e.uniform4fv(this.Ib, this.Da);
        e.drawArrays(e.TRIANGLE_STRIP, 0, 4);
        if (!k) e.enable(e.BLEND);
      },
      M: function () {
        this.G.uniform4f(this.lc, 1, 1, 1, 1);
      },
      X: function (m, c) {
        var k = this.G;
        k.uniform4f(this.Ub, 1, 1, 0, 0);
        var e = this.te;
        e.m();
        e.p = m.e;
        e.q = m.d;
        e.ea(c);
        e.ea(this.Db);
        this.Da.set([e.p, e.ca, e.g, 0, e.N, e.q, e.f, 0]);
        k.uniform4fv(this.Ib, this.Da);
        k.bindTexture(k.TEXTURE_2D, m.Gc);
        k.drawArrays(k.TRIANGLE_STRIP, 0, 4);
      },
      Y: function (m, c, e) {
        var k = this.G;
        if (!(0 >= e)) {
          k.uniform4f(this.lc, 1, 1, 1, e);
          k.uniform4f(this.Ub, 1, 1, 0, 0);
          e = this.te;
          e.m();
          e.p = m.e;
          e.q = m.d;
          e.ea(c);
          e.ea(this.Db);
          this.Da.set([e.p, e.ca, e.g, 0, e.N, e.q, e.f, 0]);
          k.uniform4fv(this.Ib, this.Da);
          k.bindTexture(k.TEXTURE_2D, m.Gc);
          k.drawArrays(k.TRIANGLE_STRIP, 0, 4);
          k.uniform4f(this.lc, 1, 1, 1, 1);
        }
      },
      V: function (m) {
        var c = this.G,
          e = this.te;
        e.m();
        e.p = this.C.e;
        e.q = this.C.d;
        e.ea(m);
        e.ea(this.Db);
        this.Da.set([e.p, e.ca, e.g, 0, e.N, e.q, e.f, 0]);
        c.uniform4fv(this.Ib, this.Da);
        c.drawArrays(c.TRIANGLE_STRIP, 0, 4);
      },
      K: function (m) {
        var c = this.G;
        this.C = m;
        c.bindTexture(c.TEXTURE_2D, m.Gc);
        c.uniform4f(this.Ub, 1, 1, 0, 0);
      },
      Jb: function (m, c, e, k) {
        var l = this.C.dc,
          n = this.C.Sc;
        this.Yd = m;
        this.Zd = c;
        this.zd = e;
        this.yd = k;
        this.G.uniform4f(this.Ub, e * l, k * n, m * l, c * n);
      },
      Ob: function (m, c, e) {
        var k = this.G;
        m += this.eb;
        c += this.fb;
        if (!e) k.disable(k.BLEND);
        this.Da.set([
          (this.ka * this.zd) / this.tb,
          0,
          this.ka * (m / this.tb - 1),
          0,
          0,
          (-this.la * this.yd) / this.sb,
          this.la * (1 - c / this.sb),
          0,
        ]);
        k.uniform4fv(this.Ib, this.Da);
        k.drawArrays(k.TRIANGLE_STRIP, 0, 4);
        if (!e) k.enable(k.BLEND);
      },
      qb: function () {
        this.G.blendFunc(this.G.ONE, this.G.ONE);
      },
      ob: function () {
        this.G.blendFunc(this.G.SRC_ALPHA, this.G.ONE_MINUS_SRC_ALPHA);
      },
      Tf: function (m) {
        var c = this.G;
        m.Ae = c.createBuffer();
        c.bindBuffer(c.ARRAY_BUFFER, m.Ae);
        c.bufferData(c.ARRAY_BUFFER, new ja.Float32Array(m.zb), c.STATIC_DRAW);
        c.bindBuffer(c.ARRAY_BUFFER, null);
      },
      Uf: function (m) {
        var c = {};
        this.Ba[this.Ba.length] = c;
        c.zb = [];
        c.zb.length = 2 * m.length;
        c.ci = m.length;
        var e = 0;
        c.zb[e++] = m[0].b;
        c.zb[e++] = m[0].c;
        c.zb[e++] = m[1].b;
        c.zb[e++] = m[1].c;
        c.zb[e++] = m[m.length - 1].b;
        c.zb[e++] = m[m.length - 1].c;
        for (var k = 0; !(k + 2 > m.length - 2 - k); ) {
          c.zb[e++] = m[k + 2].b;
          c.zb[e++] = m[k + 2].c;
          if (k + 2 >= m.length - 2 - k) break;
          c.zb[e++] = m[m.length - 2 - k].b;
          c.zb[e++] = m[m.length - 2 - k].c;
          k++;
        }
        this.Tf(c);
        return c;
      },
      Wf: function (m) {
        for (var c = 0; c < this.Ba.length; c++)
          if (this.Ba[c] == m) {
            this.G.deleteBuffer(this.Ba[c].Ae);
            for (m = c; m < this.Ba.length - 1; m++)
              this.Ba[m] = this.Ba[m + 1];
            this.Ba.length--;
            break;
          }
      },
      $h: function () {},
      Xf: function (m, c, e, k, l) {
        var n = this.G;
        c += this.eb;
        e += this.fb;
        n.uniform4f(this.Ub, this.C.dc, this.C.Sc, k, l);
        this.Da.set([
          this.ka / this.tb,
          0,
          this.ka * (c / this.tb - 1),
          0,
          0,
          -this.la / this.sb,
          this.la * (1 - e / this.sb),
          0,
        ]);
        n.uniform4fv(this.Ib, this.Da);
        n.bindBuffer(n.ARRAY_BUFFER, m.Ae);
        n.vertexAttribPointer(this.Vb, 2, n.FLOAT, false, 0, 0);
        n.drawArrays(n.TRIANGLE_STRIP, 0, m.ci);
      },
      bg: function () {
        var m = this.G;
        m.bindBuffer(m.ARRAY_BUFFER, this.Yc);
        m.vertexAttribPointer(this.Vb, 2, m.FLOAT, false, 0, 0);
      },
      Ch: function () {
        return this.Ba.length;
      },
      pd: function () {
        var m = this.G;
        m.bindTexture(m.TEXTURE_2D, null);
        m.disableVertexAttribArray(this.Vb);
        m.useProgram(this.nd);
        m.uniform4f(this.Ee, 1, 1, 1, 1);
        m.enableVertexAttribArray(this.qf);
        m.bindBuffer(m.ARRAY_BUFFER, this.Yc);
        m.vertexAttribPointer(this.qf, 2, m.FLOAT, false, 0, 0);
      },
      fc: function (m, c, e, k) {
        this.G.uniform4f(this.Ee, m, c, e, k);
      },
      vb: function (m, c, e, k) {
        var l = this.G;
        m += this.eb;
        c += this.fb;
        this.Da.set([
          (this.ka * e) / this.tb,
          0,
          this.ka * (m / this.tb - 1),
          0,
          0,
          (-k / this.sb) * this.la,
          this.la * (1 - c / this.sb),
          0,
        ]);
        l.uniform4fv(this.zg, this.Da);
        l.drawArrays(l.TRIANGLE_STRIP, 0, 4);
      },
      fd: function () {
        var m = this.G;
        m.useProgram(this.bc);
        m.activeTexture(m.TEXTURE0);
        m.enableVertexAttribArray(this.Vb);
        m.bindBuffer(m.ARRAY_BUFFER, this.Yc);
        m.vertexAttribPointer(this.Vb, 2, m.FLOAT, false, 0, 0);
      },
      Kb: function (m) {
        var c = this.G;
        c.viewport(m.H, m.I, m.sa - m.H, m.ma - m.I);
        c.clearColor(0, 0, 0, 1);
        c.clear(c.COLOR_BUFFER_BIT);
        c.useProgram(this.bc);
        c.uniform4f(this.lc, 1, 1, 1, 1);
        c.enableVertexAttribArray(this.Vb);
        c.activeTexture(c.TEXTURE0);
        c.bindBuffer(c.ARRAY_BUFFER, this.Yc);
        c.vertexAttribPointer(this.Vb, 2, c.FLOAT, false, 0, 0);
        c.uniform1i(this.Pe, 0);
        c.enable(c.BLEND);
        c.blendFunc(c.SRC_ALPHA, c.ONE_MINUS_SRC_ALPHA);
      },
      Ga: function () {
        var c = this.G;
        c.bindBuffer(c.ARRAY_BUFFER, null);
        c.bindTexture(c.TEXTURE_2D, null);
        c.disableVertexAttribArray(this.Vb);
        c.useProgram(null);
      },
      Pg: function (c) {
        if (!!c.Aa) {
          var e = this.G,
            k = e.createTexture();
          e.bindTexture(e.TEXTURE_2D, k);
          e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, c.o);
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR);
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR);
          if ("undefined" != typeof c.sg && c.sg) {
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT);
          } else {
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
          }
          e.bindTexture(e.TEXTURE_2D, null);
          c.Gc = k;
        }
      },
      Sh: function (c) {
        var e = this.G;
        e.bindTexture(e.TEXTURE_2D, c.Gc);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT);
        e.bindTexture(e.TEXTURE_2D, null);
        c.sg = true;
      },
      na: function () {
        var c = false;
        if (
          this.G.isContextLost() ||
          this.G.getError() == this.G.CONTEXT_LOST_WEBGL
        ) {
          if (!this.id) ha("Marking WebGL context as lost!");
          c = this.id = true;
        }
        return c;
      },
      Vb: null,
      Ub: null,
      Ib: null,
      lc: null,
      Pe: null,
      qf: null,
      zg: null,
      Ee: null,
      bc: null,
      nd: null,
      Yc: null,
      Z: null,
      G: null,
      Ba: [],
      te: new mb(),
      C: null,
      Yd: 0,
      Zd: 0,
      zd: 0,
      yd: 0,
      bk: Ed(4),
      Da: Ed(8),
      Mh: 1,
      id: false,
    },
    ia = {
      Eg: function (c, e, k) {
        if (this.Wa != c || this.eb != e || this.fb != k) {
          this.Wa = c;
          this.eb = e;
          this.fb = k;
          this.pf();
        }
      },
      da: function (c) {
        this.C = c;
      },
      Ca: function (c) {
        if (0 > c) c = 0;
        this.t.globalAlpha = c;
      },
      ya: function (c, e, k) {
        c = 0.333333333333333 * (c + e + k);
        this.t.globalAlpha = 1 < c ? 1 : c;
      },
      db: function (c, e, k, l, n, u, w, r) {
        if (!(0 >= k || 0 >= l)) {
          n += this.Rb;
          u += this.Sb;
          if (0 > c) {
            n -= c;
            c = 0;
          }
          if (0 > e) {
            u -= e;
            e = 0;
          }
          if (k > this.C.e - c) k = this.C.e - c - 0.125;
          if (l > this.C.d - e) l = this.C.d - e - 0.125;
          var C = this.C.A,
            D = this.C.Tb;
          c *= C;
          e *= C;
          k *= C;
          l *= C;
          C = this.ab;
          w = w * D * C;
          r = r * D * C;
          if (0 > w || 0 > r) {
            this.t.setTransform(w, 0, 0, r, n * C, u * C);
            this.t.drawImage(this.C.o, c, e, k, l, 0, 0, k, l);
            this.t.setTransform(1, 0, 0, 1, 0, 0);
          } else
            this.t.drawImage(this.C.o, c, e, k, l, n * C, u * C, k * w, l * r);
        }
      },
      ub: function (c, e, k, l, n, u) {
        if (!(0 >= k || 0 >= l)) {
          n += this.Rb;
          u += this.Sb;
          if (0 > c) {
            n -= c;
            c = 0;
          }
          if (0 > e) {
            u -= e;
            e = 0;
          }
          if (k > this.C.e - c) k = this.C.e - c - 0.125;
          if (l > this.C.d - e) l = this.C.d - e - 0.125;
          var w = this.ab;
          if (this.C.Jc && !this.Hc) {
            var r = this.C.vd;
            k = k * r;
            l = l * r;
            this.t.drawImage(this.C.Na, c * r, e * r, k, l, n * w, u * w, k, l);
          } else {
            r = this.C.A;
            c *= r;
            e *= r;
            this.t.drawImage(
              this.C.o,
              c,
              e,
              k * r,
              l * r,
              n * w,
              u * w,
              k * w,
              l * w
            );
          }
        }
      },
      u: function (c, e, k, l) {
        var n = c.Tb,
          u = this.ab;
        k += this.Rb;
        l += this.Sb;
        if (null == e)
          if (c.Jc && !this.Hc) this.t.drawImage(c.Na, k * u, l * u);
          else if (c.je || this.Xe) {
            n = c.Tb * u;
            this.t.setTransform(n, 0, 0, n, k * u, l * u);
            this.t.drawImage(c.o, 0, 0);
            this.t.setTransform(1, 0, 0, 1, 0, 0);
          } else this.t.drawImage(c.o, k, l);
        else if (!(0 >= e.sa))
          if (!(0 >= e.ma)) {
            var n = e.H,
              w = e.sa,
              r = e.I;
            e = e.ma;
            if (w > c.e) w = c.e - 0.125;
            if (e > c.d) e = c.d - 0.125;
            if (0 > n) {
              k -= n;
              n = 0;
            }
            if (0 > r) {
              l -= r;
              r = 0;
            }
            var w = w - n,
              C = e - r;
            if (!(0 >= w || 0 >= C))
              if (c.Jc && !this.Hc) {
                e = c.vd;
                w *= e;
                C *= e;
                this.t.drawImage(c.Na, n * e, r * e, w, C, k * u, l * u, w, C);
              } else {
                e = c.A;
                this.t.drawImage(
                  c.o,
                  n * e,
                  r * e,
                  w * e,
                  C * e,
                  k * u,
                  l * u,
                  w * u,
                  C * u
                );
              }
          }
      },
      kb: function (c, e) {
        c += this.Rb;
        e += this.Sb;
        var k;
        if (this.C.Jc && !this.Hc) {
          k = this.ab;
          this.t.drawImage(this.C.Na, c * k, e * k);
        } else if (this.C.je || this.Xe) {
          k = this.ab;
          var l = this.C.Tb;
          this.t.setTransform(l * k, 0, 0, l * k, c * k, e * k);
          this.t.drawImage(this.C.o, 0, 0);
          this.t.setTransform(1, 0, 0, 1, 0, 0);
        } else this.t.drawImage(this.C.o, c, e);
      },
      M: function () {
        this.t.globalAlpha = 1;
      },
      X: function (c, e) {
        var k = this.ab,
          l = c.Tb * k;
        this.t.setTransform(
          e.p * l,
          e.N * l,
          e.ca * l,
          e.q * l,
          (e.g + this.Rb) * k,
          (e.f + this.Sb) * k
        );
        this.t.drawImage(c.o, 0, 0);
        this.t.setTransform(1, 0, 0, 1, 0, 0);
      },
      Y: function (c, e, k) {
        if (!(0 >= k)) {
          this.t.globalAlpha = k;
          k = this.ab;
          var l = c.Tb * k;
          this.t.setTransform(
            e.p * l,
            e.N * l,
            e.ca * l,
            e.q * l,
            (e.g + this.Rb) * k,
            (e.f + this.Sb) * k
          );
          this.t.drawImage(c.o, 0, 0);
          this.t.setTransform(1, 0, 0, 1, 0, 0);
          this.t.globalAlpha = 1;
        }
      },
      V: function (c) {
        var e = this.ab,
          k = this.C.Tb * e;
        this.t.setTransform(
          c.p * k,
          c.N * k,
          c.ca * k,
          c.q * k,
          (c.g + this.Rb) * e,
          (c.f + this.Sb) * e
        );
        this.t.drawImage(this.C.o, 0, 0);
        this.t.setTransform(1, 0, 0, 1, 0, 0);
      },
      K: function (c) {
        this.C = c;
      },
      Jb: function (c, e, k, l) {
        this.Yd = c;
        this.Zd = e;
        this.zd = k;
        this.yd = l;
      },
      Ob: function (c, e) {
        var k = this.Yd,
          l = this.Zd,
          n = this.zd,
          u = this.yd;
        if (!(0 >= n || 0 >= u)) {
          c += this.Rb;
          e += this.Sb;
          if (0 > k) {
            c -= k;
            n += k;
            k = 0;
          }
          if (0 > l) {
            e -= l;
            u += l;
            l = 0;
          }
          if (n > this.C.e - k) n = this.C.e - k - 0.125;
          if (u > this.C.d - l) u = this.C.d - l - 0.125;
          var w = this.ab;
          if (this.C.Jc && !this.Hc) {
            var r = this.C.vd,
              n = n * r,
              u = u * r;
            this.t.drawImage(this.C.Na, k * r, l * r, n, u, c * w, e * w, n, u);
          } else {
            r = this.C.A;
            this.t.drawImage(
              this.C.o,
              k * r,
              l * r,
              n * r,
              u * r,
              c * w,
              e * w,
              n * w,
              u * w
            );
          }
        }
      },
      qb: function () {
        this.t.globalCompositeOperation = "lighter";
      },
      ob: function () {
        this.t.globalCompositeOperation = "source-over";
      },
      Uf: function (c) {
        for (var e = [], k = 0; k < c.length; k++) {
          e[2 * k] = c[k].b;
          e[2 * k + 1] = c[k].c;
        }
        this.Ba.push(e);
        return e;
      },
      Wf: function (c) {
        for (var e = 0; e < this.Ba.length; e++)
          if (this.Ba[e] == c) {
            for (c = e; c < this.Ba.length - 1; c++)
              this.Ba[c] = this.Ba[c + 1];
            this.Ba.length--;
            break;
          }
      },
      $h: function () {},
      Xf: function (c, e, k, l, n) {
        this.t.beginPath();
        var u = this.ab,
          w = this.C.A,
          r = 1 / w,
          C = this.C.Jc && !this.Hc;
        if (C) {
          w = u;
          this.t.setTransform(1, 0, 0, 1, this.Qf, this.Rf);
        } else this.t.setTransform(u * r, 0, 0, u * r, this.Qf, this.Rf);
        l *= this.C.e;
        n *= this.C.d;
        this.t.translate((e - l) * w, (k - n) * w);
        this.t.moveTo((c[0] + l) * w, (c[1] + n) * w);
        for (e = 2; e < c.length; ) {
          k = c[e++] + l;
          u = c[e++] + n;
          this.t.lineTo(k * w, u * w);
        }
        this.t.closePath();
        this.t.fillStyle = C ? this.C.Vd : this.C.vg;
        this.t.fill();
        this.t.setTransform(1, 0, 0, 1, 0, 0);
      },
      bg: function () {},
      Ch: function () {
        return this.Ba.length;
      },
      pd: function () {},
      fc: function (c, e, k, l) {
        if (1 < c) c = 1;
        if (1 < e) e = 1;
        if (1 < k) k = 1;
        if (1 < l) l = 1;
        if (0 > c) c = 0;
        if (0 > e) e = 0;
        if (0 > k) k = 0;
        if (0 > l) l = 0;
        this.t.fillStyle =
          "rgba(" +
          Math.floor(255 * c) +
          "," +
          Math.floor(255 * e) +
          "," +
          Math.floor(255 * k) +
          "," +
          Math.floor(255 * l) +
          ")";
      },
      vb: function (c, e, k, l) {
        c += this.Rb;
        e += this.Sb;
        var n = this.ab;
        this.t.fillRect(c * n, e * n, k * n, l * n);
      },
      fd: function () {},
      Kb: function () {
        this.t.setTransform(1, 0, 0, 1, 0, 0);
      },
      Ga: function () {
        this.t.setTransform(1, 0, 0, 1, 0, 0);
        if (this.t != this.Xd)
          this.Xd.drawImage(this.Cg, 0, 0, this.Z.width, this.Z.height);
      },
      Lf: function (c) {
        if (!c.Na) c.Na = ja.document.createElement("canvas");
        var e = this.qe * c.Tb,
          k = c.o.height * e;
        c.Na.width = Math.floor(c.o.width * e) + 1;
        c.Na.height = Math.floor(k) + 1;
        c.Na.getContext("2d").drawImage(c.o, 0, 0, c.Na.width, c.Na.height);
        c.vd = this.qe;
      },
      xk: 0,
      t: null,
      Xd: null,
      Z: null,
      Cg: null,
      C: null,
      Yd: 0,
      Zd: 0,
      zd: 0,
      yd: 0,
      Ba: [],
      Mh: 1,
    },
    ub = {
      alpha: false,
      depth: false,
      antialias: false,
      stencil: false,
      failIfMajorPerformanceCaveat: true,
    };
  sk();
  var zg = n.getContext("webgl", ub) || n.getContext("experimental-webgl", ub),
    ca;
  if (null == zg) {
    ha("Using 2D canvas.");
    yb();
  } else {
    ha("Using WebGL canvas.");
    Ob.Z = n;
    Ob.G = zg;
    n.addEventListener(
      "webglcontextlost",
      function (c) {
        c.preventDefault();
        Ob.id = true;
      },
      false
    );
    n.addEventListener("webglcontextrestored", tb, false);
    Ob.r();
    if (!Ob.Nf()) yb();
    else {
      ca = Ob;
      ca.kd = true;
    }
  }
  rk(ca);
  var ga = { t: null, va: "none", Nc: "none", gd: "wav" },
    ub = false,
    Fg = new ja.Audio(),
    aa = false,
    Ua = false,
    Ri = false;
  try {
    aa = Fg.canPlayType("audio/wav") || Fg.canPlayType("audio/wave");
  } catch (I) {}
  try {
    Ua = Fg.canPlayType('audio/mpeg; codecs="mp3"');
  } catch (C) {}
  try {
    Ri = Fg.canPlayType('audio/ogg; codecs="vorbis"');
  } catch (M) {}
  if (aa) {
    ha("Detected WAV format support");
    ub = true;
  }
  if (Ua) {
    ha("Detected MP3 format support");
    ub = true;
  }
  if (Ri) {
    ha("Detected OGG format support");
    ub = true;
  }
  if (ub) {
    if ("undefined" != typeof ja.AudioContext) {
      ha("Using AudioContext for sound.");
      ga.t = new ja.AudioContext();
      ga.va = "wa";
    } else if ("undefined" != typeof ja.webkitAudioContext) {
      ha("Using webkitAudioContext for sound.");
      ga.t = new ja.webkitAudioContext();
      ga.va = "wa";
    } else if ((Q || $c || Fa) && da) {
      if ($c) ha("Avoiding HTML5 sound: anroid.");
      else if (Fa) ha("Avoiding HTML5 sound: WinPhone.");
      else ha("Avoiding HTML5 sound: browser too old.");
      ga.va = "none";
    } else {
      ha("Using HTML5 Audio for sound.");
      ga.va = "html5";
    }
    if ("none" != ga.va) {
      if ("wa" == ga.va && Mf) {
        ha("Using AudioContext for Music ( no streaming! )");
        ga.Nc = "wa";
      } else {
        ha("Using HTML5 Audio for Music");
        ga.Nc = "html5";
      }
      if ($c && aa) ga.gd = "wav";
      else if (Ri) ga.gd = "ogg";
      else if (Ua) ga.gd = "mp3";
      else ga.gd = "wav";
      ha("Using '" + ga.gd + "' format for sound.");
    }
  } else
    ha(
      "Not using sound because none of the available audio formats are supported."
    );
  var u = {},
    Bg = 0,
    wa = 0,
    Li = 0,
    Fa = ja.document.createElement("canvas");
  Fa.width = 16;
  Fa.height = 16;
  Q = Fa.getContext("2d");
  Q.fillStyle = "rgba(255,0,0,255)";
  Q.fillRect(0, 0, Fa.width, Fa.height);
  var tk = new ja.Image();
  tk.src = Fa.toDataURL("image/png");
  var Cg = [],
    pa = {},
    Zc = 0,
    va = 0,
    Dg = [],
    J = {},
    Ah = {
      Pj: false,
      Rj: false,
      jk: false,
      tj: 0,
      uj: 0,
      Mj: null,
      Lj: null,
      Kj: null,
      Ij: null,
      Jj: null,
      Nj: 0,
      Gh: false,
      lg: false,
      gg: false,
      lk: false,
      vj: null,
      Oj: null,
      Mf: {},
      xj: 0,
      yj: 0,
      Uj: 0,
      Vj: 0,
      Yj: function () {},
      Xj: function () {},
      ck: function () {},
      zk: function () {},
      Ak: function () {},
      jf: function () {},
      ce: function () {},
      nk: function () {
        return false;
      },
      zj: function () {},
      Fj: function () {
        this.Gh = false;
      },
      wk: function () {},
    };
  k("kiz-dot.png");
  k("coolmath-logo.png");
  k("loading-bar-outer.png");
  k("loading-bar-inner.png");
  k("game-bk.png", 1);
  k("sun-temple.png");
  k("title.png");
  k("brick-tiles.png", 1);
  k("concrete-block.png", 1);
  k("concrete-block-long.png");
  k("concrete-block-long-wider.png");
  k("concrete-block-oblique.png");
  k("crate.png", 1);
  k("crate-debri-0x0.png");
  k("crate-debri-0x11.png");
  k("crate-debri-0x89.png");
  k("crate-debri-12x44.png");
  k("crate-debri-79x0.png");
  k("crate-debri-89x75.png");
  k("mattress.png", 1);
  k("nails.png", 1);
  k("nails-short.png");
  k("steel-beam.png");
  k("platform.png", 1);
  k("robot.png");
  k("robot-lamp.png");
  k("switch-on.png");
  k("switch-off.png");
  k("door.png", 1);
  k("door-mount.png", 1);
  k("vertical-tile-wall.png", 1);
  k("v-hand-0.png");
  k("v-hand-1.png");
  k("v-hand-2.png");
  k("v-hand-3.png");
  k("v-hand-4.png");
  k("photo-flare.png");
  k("floor.png", 1);
  k("fire.png", 1);
  k("ball-face-like-a-boss.png");
  k("ball-face-full.png");
  k("ball-color.png");
  k("ball-color-burned.png");
  k("ball-stone-color.png");
  k("ball-aura.png");
  k("ball-fire-ring-0.png");
  k("ball-fire-ring-1.png");
  k("ball-fire-ring-2.png");
  k("ball-fire-ring-3.png");
  k("ball-fire-ring-4.png");
  k("ball-fire-ring-5.png");
  k("ball-fire-ring-6.png");
  k("fire-part-0.png");
  k("fire-part-1.png");
  k("fire-part-2.png");
  k("fire-part-3.png");
  k("fire-part-4.png");
  k("fire-part-2-0.png");
  k("fire-part-2-1.png");
  k("fire-part-2-2.png");
  k("fire-part-2-3.png");
  k("fire-part-2-4.png");
  k("ball-pops.png");
  k("ball-shade.png");
  k("ball-glow-ring.png");
  k("ball-piece-1-26.png");
  k("ball-piece-2-1.png");
  k("ball-piece-2-48.png");
  k("ball-piece-20-48.png");
  k("ball-piece-26-2.png");
  k("ball-piece-27-17.png");
  k("ball-piece-29-29.png");
  k("ball-piece-34-19.png");
  k("ball-piece-4-28.png");
  k("smoke.png");
  k("teardrop.png");
  k("teardrop-glow.png");
  k("ball-fly-trace-0.png");
  k("ball-fly-trace-1.png");
  k("ball-fly-trace-2.png");
  k("basket-back.png", 1);
  k("basket-case-over.png");
  k("basket-net.png", 1);
  k("basket-nose.png", 1);
  k("basket-eyes-all.png", 1);
  k("basket-mouth-all.png", 1);
  k("dialog-bk-big.png");
  k("text-you-win.png");
  k("you-win-happy-faces-and-stars.png");
  k("you-lose-poor-ball.png");
  k("text-you-lose.png");
  k("button-long.png", 1);
  k("check-circle.png");
  k("check.png");
  k("button-options.png");
  k("button-continue.png");
  k("button-restart.png");
  k("button-more-games.png");
  k("settings-button.png", 1);
  k("white-box.png");
  k("trampoline.png", 1);
  k("waters-0.png", 1);
  k("waters-1.png", 1);
  k("waters-2.png", 1);
  k("waters-3.png", 1);
  k("waters-4.png", 1);
  k("waters-5.png", 1);
  k("waters-6.png", 1);
  k("waters-7.png", 1);
  k("bubble.png");
  k("lightning-0.png");
  k("lightning-1.png");
  k("lightning-2.png");
  k("lightning-3.png");
  k("lightning-4.png");
  k("lightner.png");
  k("barrel.png", 1);
  k("barrel-damaged-0.png");
  k("barrel-damaged-1.png");
  k("explosion.png");
  k("spring-0.png");
  k("spring-1.png");
  k("spring-2.png");
  k("star-particle.png");
  k("glowing-ring.png");
  k("star-glows.png", 1);
  k("bonus-gravity.png");
  k("bonus-stones.png");
  k("bonus-pump.png");
  k("pause-bk.png");
  k("button-music-on.png");
  k("button-music-off.png");
  k("button-sound-on.png");
  k("button-sound-off.png");
  k("button-quit.png");
  k("text-game-paused.png");
  k("power-ball.png");
  k("mysterious-basket.png");
  k("star-win.png");
  k("star-big-particle.png");
  k("text-select-level.png", 0, 0, [5]);
  k("text-select-level.png", 0, 0, [8]);
  k("text-select-level.png", 0, 0, [1]);
  k("text-select-level.png", 0, 0, [2]);
  k("text-select-level.png", 0, 0, [0, 3, 4, 6, 7]);
  k("level-arrow-right.png");
  k("level-arrow-left.png");
  k("level-star.png");
  k("level-stars.png");
  k("lock.png");
  k("level-button.png");
  k("friendly-basket.png");
  k("confident-ball.png");
  k("ball-presents.png");
  k("basket-presents.png");
  k("text-game-complete.png");
  k("button-to-main-menu.png");
  k("level-select-background.png");
  k("ball-basket-for-cover.png");
  k("button-walkthrough.png");
  k("text-options.png");
  k("text-credits.png");
  k("button-back.png");
  k("button-info.png");
  k("clocks.png", 1);
  k("direction-arrow-top.png");
  k("direction-arrow-middle.png");
  k("direction-arrow-bottom.png");
  k("direction-arrow-empty-top.png");
  k("direction-arrow-empty-middle.png");
  k("direction-arrow-empty-bottom.png");
  k("button-hourglass.png", 1);
  k("dotted-circle.png");
  k("crosshair.png");
  k("tutorial-hand-right.png");
  k("tutorial-hand-up.png");
  k("tutorial-hand-left.png");
  k("tutorial-hand-point.png");
  k("tutorial-hand-holds.png");
  k("hand.png");
  k("game-touch-helper.png");
  k("thumb.png");
  k("speech-bubble.png");
  k("speech-bubble-high.png");
  k("speech-bubble-higher.png");
  k("iphone-6.png");
  k("text-developed-by.png");
  k("text-art-by.png");
  k("text-novpixel.png");
  k("joystick.png");
  k("jump-arrow.png");
  k("finger-spot.png");
  k("keyboard-buttons.png");
  k("keyboard-space-big.png");
  k("keyboard-key.png");
  k("keyboard-arrow.png");
  k("avoid-nails.png");
  k("green-dash.png");
  k("green-dash-hollow.png");
  k("jump-energy-bar.png");
  k("jump-energy-bar-aura.png");
  k("jump-energy-ball-face.png");
  k("jump-energy-fire.png");
  R("menu-change.mpc");
  R("menu-change-rev.mpc");
  R("time-is-up.mpc");
  R("incoming-sign.mpc");
  R("button-over.mpc");
  R("button-click.mpc");
  R("splash.mpc");
  R("pop.mpc");
  R("star-collected.mpc");
  R("star-hits.mpc");
  R("star-inserted.mpc");
  R("net.mpc");
  R("net-subtle.mpc");
  R("extinguishing.mpc");
  R("slow-down.mpc");
  R("rage-mode.mpc");
  R("bell.mpc");
  R("swoosh.mpc");
  R("swoosh-water.mpc");
  R("ding.mpc");
  R("you-lose.mpc");
  R("you-win.mpc");
  R("rechazado.mpc");
  R("robo-talk.mpc");
  R("barrel-explodes.mpc");
  R("pumped-jump.mpc");
  R("level-start.mpc");
  R("shootout-start.mpc");
  R("basket-giggle.mpc");
  R("bounce-0.mpc");
  R("bounce-1.mpc");
  R("bounce-metal-0.mpc");
  R("bounce-mat.mpc");
  R("crate-0.mpc");
  R("crate-1.mpc");
  R("bounce-stoned-0.mpc");
  R("trampo-0.mpc");
  R("basket-contact-0.mpc");
  R("basket-contact-1.mpc");
  R("basket-contact-2.mpc");
  R("electric-charge-0.mpc");
  R("electric-charge-1.mpc");
  R("spring-0.mpc");
  R("barrel-bang-0.mpc");
  R("barrel-bang-1.mpc");
  R("ball-burning.mpc");
  R("ball-hmmm.mpc");
  R("hit-crowd-photo-taking.mpc");
  R("crowd-uplifted.mpc");
  R("crowd-downlifted.mpc");
  R("crowd-downlifted-milder-0.mpc");
  R("crowd-downlifted-milder-1.mpc");
  R("stoned.mpc");
  R("bonus-pump.mpc");
  R("bonus-gravity.mpc");
  R("door-closes.mpc");
  R("door-opens.mpc");
  R("switch-click.mpc");
  R("ball-shocked-0.mpc");
  R("ball-shocked-1.mpc");
  R("wall-hit-0.mpc");
  R("wall-hit-1.mpc");
  R("wall-hit-2.mpc");
  Ni("music0.mpc", 85.57);
  Ni("music1.mpc", 88.857);
  Ni("ambience.mpc", 22.196);
  k("font-button-big-on-over-ru.png", 0, 1, [1]);
  k("font-button-big-on-over.png", 0, 1, [0, 2, 3, 4, 5, 6, 7, 8]);
  k("font-button-big-ru.png", 0, 1, [1]);
  k("font-button-big.png", 0, 1, [0, 2, 3, 4, 5, 6, 7, 8]);
  k("font-button-small-on-over-ru.png", 0, 1, [1]);
  k("font-button-small-on-over-de.png", 0, 1, [3, 4]);
  k("font-button-small-on-over.png", 0, 1, [0, 2, 5, 6, 7, 8]);
  k("font-button-small-ru.png", 0, 1, [1]);
  k("font-button-small-de.png", 0, 1, [3, 4]);
  k("font-button-small.png", 0, 1, [0, 2, 5, 6, 7, 8]);
  k("font-level-selection-big.png");
  k("font-level-selection.png");
  k("font-time.png", 1);
  k("font-seconds-left.png");
  k("font-fancy-ru.png", 0, 0, [1]);
  k("font-fancy-de.png", 0, 0, [3]);
  k("font-fancy-tr.png", 0, 0, [4]);
  k("font-fancy-pl.png", 0, 0, [8]);
  k("font-fancy.png", 0, 0, [0, 2, 5, 6, 7]);
  k("font-speech-ru.png", 0, 1, [1]);
  k("font-speech-tr.png", 0, 1, [4]);
  k("font-speech-de.png", 0, 1, [3]);
  k("font-speech-fr.png", 0, 1, [5]);
  k("font-speech.png", 0, 1, [0, 2, 6, 7, 8]);
  k("font-stat-numbers.png");
  k("font-hint-ru.png", 0, 0, [1]);
  k("font-hint.png", 0, 0, [0, 2, 3, 4, 5, 6, 7, 8]);
  k("font-level.png", 0, 0, [1]);
  k("font-level.png", 0, 0, [4]);
  k("font-level.png", 0, 0, [5]);
  k("font-level.png", 0, 0, [0, 2, 3, 6, 7, 8]);
  var Bh = {};
  Bh.fe = u;
  Bh.Vc = pa;
  Bh.Nh = J;
  var ta = { H: 0, sa: 0, I: 0, ma: 0 },
    Eg = { H: 0, sa: 0, I: 0, ma: 0 },
    Ba = 0,
    w = new mb(),
    Of = false,
    yk = false,
    zb = 0,
    Xb = 0,
    Fd = false,
    Pi = 0.001 * new Date().getTime(),
    $e = Pi,
    xk = 0,
    l = 0,
    r = 0,
    nb = 0,
    W = 0,
    ab = null,
    Qi = null;
  if ("function" == typeof ja.requestAnimationFrame) {
    ab = ja.requestAnimationFrame;
    ab(Oi);
  } else Qi = ja.setInterval(Oi, 1e3 / 60);
})();
