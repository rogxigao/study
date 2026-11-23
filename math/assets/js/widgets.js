/* ===================================================
   交互图示组件
   每个组件挂到 .widget[data-widget=xxx] 上，返回 dispose
   =================================================== */
(function () {
  const C = {
    ink: '#2b2620',
    muted: '#948a7b',
    grid: '#ece3d2',
    axis: '#cdbfa6',
    accent: '#9c2f24',
    green: '#2f5d50',
    blue: '#33557a',
    amber: '#a3742a'
  };
  const FONT = '11px "PingFang SC", "Microsoft YaHei", sans-serif';
  const MONO = '10.5px "SF Mono", Consolas, monospace';

  /* ---------- 基础绘图 ---------- */
  function stage(root, height, draw) {
    const wrap = document.createElement('div');
    wrap.className = 'canvas-wrap';
    const cv = document.createElement('canvas');
    wrap.appendChild(cv);
    root.appendChild(wrap);
    const ctx = cv.getContext('2d');
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    let raf = 0;

    function render() {
      const w = Math.max(280, wrap.clientWidth || 600);
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(height * dpr);
      cv.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, height);
      draw(ctx, w, height);
    }
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(render);
    });
    ro.observe(wrap);
    render();
    return {
      render,
      dispose() { ro.disconnect(); cancelAnimationFrame(raf); }
    };
  }

  function niceStep(range, target) {
    const raw = range / target;
    const p = Math.pow(10, Math.floor(Math.log10(raw)));
    const n = raw / p;
    return (n < 1.5 ? 1 : n < 3.5 ? 2 : n < 7.5 ? 5 : 10) * p;
  }

  function frame(ctx, w, h, xr, yr, pad) {
    pad = pad == null ? 28 : pad;
    const iw = w - pad * 2;
    const ih = h - pad * 2;
    const X = x => pad + (x - xr[0]) / (xr[1] - xr[0]) * iw;
    const Y = y => pad + (yr[1] - y) / (yr[1] - yr[0]) * ih;
    const invX = px => xr[0] + (px - pad) / iw * (xr[1] - xr[0]);

    ctx.save();
    ctx.lineWidth = 1;
    const sx = niceStep(xr[1] - xr[0], 7);
    const sy = niceStep(yr[1] - yr[0], 4);
    const decX = sx < 1 ? Math.min(3, Math.ceil(-Math.log10(sx)) + 1) : 0;
    const decY = sy < 1 ? Math.min(3, Math.ceil(-Math.log10(sy)) + 1) : 0;

    ctx.strokeStyle = C.grid;
    ctx.fillStyle = C.muted;
    ctx.font = MONO;
    ctx.textAlign = 'center';
    for (let x = Math.ceil(xr[0] / sx) * sx; x <= xr[1] + 1e-9; x += sx) {
      const px = X(x);
      ctx.beginPath(); ctx.moveTo(px, pad); ctx.lineTo(px, pad + ih); ctx.stroke();
      const yBase = (yr[0] < 0 && yr[1] > 0) ? Math.min(Y(0) + 13, pad + ih - 2) : pad + ih - 4;
      const xv = Math.abs(x) < 1e-9 ? 0 : x;
      ctx.fillText(xv.toFixed(decX), px, yBase);
    }
    ctx.textAlign = 'right';
    for (let y = Math.ceil(yr[0] / sy) * sy; y <= yr[1] + 1e-9; y += sy) {
      const py = Y(y);
      ctx.beginPath(); ctx.moveTo(pad, py); ctx.lineTo(pad + iw, py); ctx.stroke();
      const yv = Math.abs(y) < 1e-9 ? 0 : y;
      if (yv !== 0 && py < pad + ih - 1) ctx.fillText(yv.toFixed(decY), pad - 5, py + 3.5);
    }

    ctx.strokeStyle = C.axis;
    ctx.lineWidth = 1.2;
    if (yr[0] < 0 && yr[1] > 0) {
      ctx.beginPath(); ctx.moveTo(pad, Y(0)); ctx.lineTo(pad + iw, Y(0)); ctx.stroke();
    }
    if (xr[0] < 0 && xr[1] > 0) {
      ctx.beginPath(); ctx.moveTo(X(0), pad); ctx.lineTo(X(0), pad + ih); ctx.stroke();
    }
    ctx.restore();

    return { X, Y, invX, iw, ih, pad, xr, yr };
  }

  function plot(ctx, F, f, opt) {
    opt = opt || {};
    ctx.save();
    ctx.strokeStyle = opt.color || C.accent;
    ctx.lineWidth = opt.width || 2;
    ctx.lineJoin = 'round';
    ctx.setLineDash(opt.dash || []);
    const n = Math.max(240, F.iw * 2);
    const x1 = opt.from != null ? opt.from : F.xr[0];
    const x2 = opt.to != null ? opt.to : F.xr[1];
    let pen = false;
    ctx.beginPath();
    for (let i = 0; i <= n; i++) {
      const x = x1 + (x2 - x1) * i / n;
      const y = f(x);
      if (!isFinite(y)) { pen = false; continue; }
      const py = F.Y(y);
      if (py < -4000 || py > 4000) { pen = false; continue; }
      const px = F.X(x);
      if (!pen) { ctx.moveTo(px, py); pen = true; } else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.restore();
  }

  function dot(ctx, F, x, y, color, r) {
    ctx.save();
    ctx.fillStyle = color || C.accent;
    ctx.beginPath();
    ctx.arc(F.X(x), F.Y(y), r || 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#fdfbf5';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.restore();
  }

  function hole(ctx, F, x, y, color) {
    ctx.save();
    ctx.fillStyle = '#fdfbf5';
    ctx.strokeStyle = color || C.accent;
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.arc(F.X(x), F.Y(y), 4, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.restore();
  }

  function line(ctx, F, x1, y1, x2, y2, color, dash, width) {
    ctx.save();
    ctx.strokeStyle = color || C.muted;
    ctx.lineWidth = width || 1;
    ctx.setLineDash(dash || []);
    ctx.beginPath();
    ctx.moveTo(F.X(x1), F.Y(y1));
    ctx.lineTo(F.X(x2), F.Y(y2));
    ctx.stroke();
    ctx.restore();
  }

  function text(ctx, F, x, y, str, color, align) {
    ctx.save();
    ctx.fillStyle = color || C.ink;
    ctx.font = FONT;
    ctx.textAlign = align || 'left';
    ctx.fillText(str, F.X(x), F.Y(y));
    ctx.restore();
  }

  function textPx(ctx, px, py, str, color, align) {
    ctx.save();
    ctx.fillStyle = color || C.ink;
    ctx.font = FONT;
    ctx.textAlign = align || 'left';
    ctx.fillText(str, px, Math.max(11, Math.min(py, 9999)));
    ctx.restore();
  }

  /* ---------- 控件 ---------- */
  function slider(parent, o) {
    const box = document.createElement('div');
    box.className = 'w-ctl';
    const lab = document.createElement('label');
    lab.textContent = o.label;
    const inp = document.createElement('input');
    inp.type = 'range';
    inp.min = o.min; inp.max = o.max; inp.step = o.step;
    inp.value = o.value;
    const out = document.createElement('output');
    const fmt = o.fmt || (v => v.toFixed(2));
    out.textContent = fmt(o.value);
    box.append(lab, inp, out);
    parent.appendChild(box);
    inp.addEventListener('input', () => {
      const v = parseFloat(inp.value);
      out.textContent = fmt(v);
      o.on(v);
    });
    return inp;
  }

  function seg(parent, items, active, onPick) {
    const box = document.createElement('div');
    box.className = 'seg';
    items.forEach(it => {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = it.label;
      if (it.value === active) b.classList.add('on');
      b.addEventListener('click', () => {
        [...box.children].forEach(c => c.classList.remove('on'));
        b.classList.add('on');
        onPick(it.value);
      });
      box.appendChild(b);
    });
    parent.appendChild(box);
    return box;
  }

  function readout(parent) {
    const d = document.createElement('div');
    d.className = 'w-readout';
    parent.appendChild(d);
    return d;
  }

  function legend(parent, items) {
    const box = document.createElement('div');
    box.className = 'w-legend';
    items.forEach(it => {
      const sp = document.createElement('span');
      const ic = document.createElement('i');
      ic.style.borderTopColor = it.c;
      if (it.dash) ic.style.borderTopStyle = 'dashed';
      sp.appendChild(ic);
      sp.appendChild(document.createTextNode(it.t));
      box.appendChild(sp);
    });
    parent.appendChild(box);
  }

  /* ===================================================
     1.1 函数：输入一个 x，看它落到哪里
     =================================================== */
  function wFunc(root) {
    const funcs = {
      sq: { f: x => x * x, tex: 'f(x)=x²', dom: '全体实数', bad: x => Math.abs(x) > 1.9 },
      inv: { f: x => 1 / x, tex: 'f(x)=1/x', dom: 'x≠0', bad: x => Math.abs(x) < 0.045 },
      exp: { f: x => Math.exp(x), tex: 'f(x)=eˣ', dom: '全体实数', bad: x => x > 2.4 },
      ln: { f: x => Math.log(x), tex: 'f(x)=ln x', dom: 'x>0', bad: x => x <= 0.02 }
    };
    let key = 'sq', x = 1;
    const { render, dispose } = stage(root, 250, (ctx, w, h) => {
      const F = frame(ctx, w, h, [-3, 3], [-3, 3]);
      const g = funcs[key];
      plot(ctx, F, g.f, { color: C.accent, width: 2.2 });
      if (!g.bad(x)) {
        const y = g.f(x);
        if (isFinite(y) && y > -20 && y < 20) {
          line(ctx, F, x, 0, x, y, '#b9a88f', [3, 3]);
          line(ctx, F, 0, y, x, y, '#b9a88f', [3, 3]);
          dot(ctx, F, x, y, C.accent, 5);
          text(ctx, F, x, y, ' (' + x.toFixed(2) + ', ' + y.toFixed(2) + ')', C.ink, 'left');
        }
      } else {
        ctx.save();
        ctx.strokeStyle = C.blue; ctx.setLineDash([4, 4]); ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(F.X(x), F.pad); ctx.lineTo(F.X(x), F.pad + F.ih); ctx.stroke();
        ctx.restore();
      }
    });

    slider(root, {
      label: 'x =', min: -2.4, max: 2.4, step: 0.05, value: x,
      fmt: v => v.toFixed(2),
      on: v => { x = v; render(); upd(); }
    });
    seg(root, [
      { label: 'x²', value: 'sq' }, { label: '1/x', value: 'inv' },
      { label: 'eˣ', value: 'exp' }, { label: 'ln x', value: 'ln' }
    ], key, v => { key = v; render(); upd(); });

    const out = readout(root);
    function upd() {
      const g = funcs[key];
      const def = !g.bad(x);
      out.innerHTML = def
        ? '函数：' + g.tex + '　定义域：' + g.dom + '　此时 f(' + x.toFixed(2) + ') = <b>' + g.f(x).toFixed(3) + '</b>'
        : '函数：' + g.tex + '　定义域：' + g.dom + '　此时 <b>x = ' + x.toFixed(2) + ' 不在定义域内</b>，函数无值。';
    }
    upd();
    return dispose;
  }

  /* ===================================================
     1.2 数列极限：ε 给多小，N 就往后退多少
     =================================================== */
  function wSeq(root) {
    let eps = 0.1;
    const a = n => n / (n + 1);
    const { render, dispose } = stage(root, 240, (ctx, w, h) => {
      const F = frame(ctx, w, h, [0, 24], [0.35, 1.35]);
      line(ctx, F, 0, 1, 24, 1, C.muted, [5, 4], 1.2);
      ctx.save();
      ctx.fillStyle = 'rgba(156,47,36,.07)';
      ctx.fillRect(F.X(0), F.Y(1 + eps), F.iw, F.Y(1 - eps) - F.Y(1 + eps));
      ctx.restore();
      line(ctx, F, 0, 1 + eps, 24, 1 + eps, C.accent, [2, 3], .8);
      line(ctx, F, 0, 1 - eps, 24, 1 - eps, C.accent, [2, 3], .8);
      const N = Math.max(1, Math.ceil(1 / eps - 1));
      for (let n = 1; n <= 24; n++) {
        const y = a(n);
        dot(ctx, F, n, y, n > N ? C.green : C.muted, n > N ? 3.4 : 2.6);
      }
      text(ctx, F, 18, 1.02, 'y = 1', C.muted);
      textPx(ctx, F.pad + 6, F.Y(1 + eps) - 5, '1+ε', C.accent);
      textPx(ctx, F.pad + 6, F.Y(1 - eps) + 13, '1−ε', C.accent);
    });

    slider(root, {
      label: 'ε =', min: 0.02, max: 0.3, step: 0.01, value: eps,
      fmt: v => v.toFixed(2),
      on: v => { eps = v; render(); upd(); }
    });

    const out = readout(root);
    function upd() {
      const N = Math.max(1, Math.ceil(1 / eps - 1));
      out.innerHTML = '要 |a<sub>n</sub>−1| &lt; <b>' + eps.toFixed(2) + '</b>，只需 n &gt; <b>' + N +
        '</b>。从第 ' + (N + 1) + ' 项起，所有点都落进红带子里（绿点）。ε 再小，N 就往右挪，但一定找得到。';
    }
    upd();
    return dispose;
  }

  /* ===================================================
     1.3 ε-δ：先给误差，再找邻域
     =================================================== */
  function wEpsDelta(root) {
    let eps = 0.8;
    const f = x => 2 * x + 1;
    const { render, dispose } = stage(root, 250, (ctx, w, h) => {
      const F = frame(ctx, w, h, [0, 2], [1, 5]);
      const d = eps / 2;
      ctx.save();
      ctx.fillStyle = 'rgba(51,85,122,.09)';
      ctx.fillRect(F.pad, F.Y(3 + eps), F.iw, F.Y(3 - eps) - F.Y(3 + eps));
      ctx.fillStyle = 'rgba(47,93,80,.10)';
      ctx.fillRect(F.X(1 - d), F.pad, F.X(1 + d) - F.X(1 - d), F.ih);
      ctx.restore();
      plot(ctx, F, f, { color: C.accent, width: 2.2 });
      line(ctx, F, 0, 3, 2, 3, C.blue, [4, 4], 1);
      line(ctx, F, 1, 1, 1, 5, C.green, [4, 4], 1);
      dot(ctx, F, 1, 3, C.ink, 4.5);
      text(ctx, F, 0.05, 3 + eps, '3+ε', C.blue);
      text(ctx, F, 0.05, 3 - eps, '3−ε', C.blue);
      text(ctx, F, 1 + d, 1.2, 'δ', C.green);
    });

    slider(root, {
      label: 'ε =', min: 0.2, max: 1.6, step: 0.05, value: eps,
      fmt: v => v.toFixed(2),
      on: v => { eps = v; render(); upd(); }
    });

    const out = readout(root);
    function upd() {
      const d = eps / 2;
      out.innerHTML = '取 ε = <b>' + eps.toFixed(2) + '</b>，只要 δ = ε/2 = <b>' + d.toFixed(2) +
        '</b>。于是 0 &lt; |x−1| &lt; δ 时，|f(x)−3| = 2|x−1| &lt; 2δ = ε。ε 换一个，δ 跟着换一个——这就叫“极限是 3”。';
    }
    upd();
    return dispose;
  }

  /* ===================================================
     1.4 无穷大：x 挤向 0+，y 顶出画面
     =================================================== */
  function wInf(root) {
    let x = 0.4;
    const { render, dispose } = stage(root, 240, (ctx, w, h) => {
      const F = frame(ctx, w, h, [0, 1], [0, 12]);
      plot(ctx, F, t => 1 / t, { color: C.accent, width: 2.2, from: 0.083 });
      line(ctx, F, 0, 0, 0, 12, C.muted, [4, 4], 1);
      line(ctx, F, 0, 0, 1, 0, C.muted, [4, 4], 1);
      const y = 1 / x;
      if (y < 12) {
        line(ctx, F, x, 0, x, y, '#b9a88f', [3, 3]);
        dot(ctx, F, x, y, C.accent, 4.5);
      }
      text(ctx, F, 0.55, 9.4, 'y = 1/x', C.accent);
      text(ctx, F, 0.42, 10.7, 'x → 0⁺ 时，y → +∞', C.ink);
    });

    slider(root, {
      label: 'x =', min: 0.09, max: 1, step: 0.01, value: x,
      fmt: v => v.toFixed(2),
      on: v => { x = v; render(); upd(); }
    });

    const out = readout(root);
    function upd() {
      out.innerHTML = 'x = <b>' + x.toFixed(2) + '</b>，1/x = <b>' + (1 / x).toFixed(2) +
        '</b>。x 越接近 0⁺，1/x 越大，且想要多大就能多大——所以 1/x 是 x→0⁺ 时的<b>无穷大</b>，不是“很大的数”。';
    }
    upd();
    return dispose;
  }

  /* ===================================================
     1.6 两个重要极限
     =================================================== */
  function wTwoLimits(root) {
    // ① sin x / x
    let x = 0.8;
    const A = stage(root, 170, (ctx, w, h) => {
      const F = frame(ctx, w, h, [-1.2, 1.2], [0.55, 1.08]);
      line(ctx, F, -1.2, 1, 1.2, 1, C.muted, [4, 4], 1);
      plot(ctx, F, t => Math.abs(t) < 1e-9 ? 1 : Math.sin(t) / t, { color: C.accent, width: 2.2 });
      const y = Math.abs(x) < 1e-9 ? 1 : Math.sin(x) / x;
      line(ctx, F, x, 0.55, x, y, '#b9a88f', [3, 3]);
      dot(ctx, F, x, y, C.accent, 4);
      text(ctx, F, 0.55, 1.055, 'y = sin x / x', C.accent);
    });
    slider(root, {
      label: 'x =', min: -1.2, max: 1.2, step: 0.02, value: x,
      fmt: v => v.toFixed(2),
      on: v => { x = v; A.render(); updA(); }
    });
    const outA = readout(root);
    function updA() {
      const y = Math.abs(x) < 1e-9 ? 1 : Math.sin(x) / x;
      outA.innerHTML = 'sin ' + x.toFixed(2) + ' / ' + x.toFixed(2) + ' = <b>' + y.toFixed(5) +
        '</b>　（x 用弧度）';
    }
    updA();

    // ② (1+1/x)^x
    const head = document.createElement('div');
    head.className = 'w-sub';
    head.textContent = '② 第二个：底数往 1 靠，指数往无穷跑';
    root.appendChild(head);
    let n = 6;
    const B = stage(root, 170, (ctx, w, h) => {
      const F = frame(ctx, w, h, [0, 60], [0, 3.2]);
      line(ctx, F, 0, Math.E, 60, Math.E, C.muted, [4, 4], 1);
      plot(ctx, F, t => t <= 0 ? 0 : Math.pow(1 + 1 / t, t), { color: C.green, width: 2.2, from: 0.2 });
      const y = Math.pow(1 + 1 / n, n);
      dot(ctx, F, n, y, C.green, 4);
      text(ctx, F, 36, Math.E + 0.16, 'y = e ≈ 2.718', C.muted);
    });
    slider(root, {
      label: 'n =', min: 1, max: 60, step: 1, value: n,
      fmt: v => v.toFixed(0),
      on: v => { n = v; B.render(); updB(); }
    });
    const outB = readout(root);
    function updB() {
      outB.innerHTML = '(1 + 1/' + n.toFixed(0) + ')<sup>' + n.toFixed(0) + '</sup> = <b>' +
        Math.pow(1 + 1 / n, n).toFixed(4) + '</b>　→ e ≈ 2.71828（n 越大越贴近）';
    }
    updB();

    return () => { A.dispose(); B.dispose(); };
  }

  /* ===================================================
     1.7 无穷小比较：谁瘦得更快
     =================================================== */
  function wCompare(root) {
    let x = 0.5;
    const { render, dispose } = stage(root, 250, (ctx, w, h) => {
      const F = frame(ctx, w, h, [0, 1.3], [0, 1.3]);
      plot(ctx, F, t => t, { color: C.blue, width: 1.8 });
      plot(ctx, F, t => t * t, { color: C.accent, width: 2 });
      plot(ctx, F, t => Math.sin(t), { color: C.green, width: 1.8, dash: [5, 4] });
      line(ctx, F, x, 0, x, 1.3, '#c9b99f', [3, 3], 1);
      dot(ctx, F, x, x, C.blue, 3.6);
      dot(ctx, F, x, x * x, C.accent, 3.6);
      dot(ctx, F, x, Math.sin(x), C.green, 3.6);
    });

    legend(root, [
      { c: C.blue, t: 'y = x' },
      { c: C.accent, t: 'y = x²' },
      { c: C.green, t: 'y = sin x', dash: true }
    ]);

    slider(root, {
      label: 'x =', min: 0.05, max: 1.25, step: 0.01, value: x,
      fmt: v => v.toFixed(2),
      on: v => { x = v; render(); upd(); }
    });

    const out = readout(root);
    function upd() {
      out.innerHTML = 'x² / x = <b>' + x.toFixed(3) + '</b>（→0，所以 x² 是 x 的<b>高阶</b>无穷小）　' +
        'sin x / x = <b>' + (Math.sin(x) / x).toFixed(4) + '</b>（→1，所以 sin x 与 x <b>等价</b>）';
    }
    upd();
    return dispose;
  }

  /* ===================================================
     1.8 间断点三种脸
     =================================================== */
  function wCont(root) {
    let mode = 'rem';
    const { render, dispose } = stage(root, 250, (ctx, w, h) => {
      const F = frame(ctx, w, h, [-0.6, 2.6], [-1.5, 4.2]);
      line(ctx, F, 1, -1.5, 1, 4.2, '#ddd0ba', [3, 3], 1);
      if (mode === 'rem') {
        plot(ctx, F, t => t + 1, { color: C.accent, width: 2, from: -0.6, to: 0.94 });
        plot(ctx, F, t => t + 1, { color: C.accent, width: 2, from: 1.06, to: 2.6 });
        hole(ctx, F, 1, 2, C.accent);
        text(ctx, F, 1.12, 2.55, '洞：(1, 2) 没定义', C.ink);
      } else if (mode === 'jump') {
        plot(ctx, F, t => t, { color: C.accent, width: 2, from: -0.6, to: 1 });
        plot(ctx, F, t => t + 1, { color: C.blue, width: 2, from: 1, to: 2.6 });
        hole(ctx, F, 1, 1, C.accent);
        dot(ctx, F, 1, 2, C.blue, 4);
        text(ctx, F, 1.1, 1.3, '左极限 1', C.accent);
        text(ctx, F, 1.1, 2.35, '右极限 2', C.blue);
      } else {
        plot(ctx, F, t => 1 / (t - 1), { color: C.accent, width: 2, from: -0.6, to: 0.94 });
        plot(ctx, F, t => 1 / (t - 1), { color: C.accent, width: 2, from: 1.06, to: 2.6 });
        text(ctx, F, 1.06, 3.4, 'x → 1⁺ : +∞', C.accent);
        text(ctx, F, 0.02, -1.1, 'x → 1⁻ : −∞', C.accent);
      }
    });

    seg(root, [
      { label: '可去', value: 'rem' },
      { label: '跳跃', value: 'jump' },
      { label: '无穷', value: 'inf' }
    ], mode, v => { mode = v; render(); upd(); });

    const out = readout(root);
    function upd() {
      const t = {
        rem: '可去间断：左右极限都是 2，但 f(1) 没定义。补一句话就能接上，所以叫“可去”。',
        jump: '跳跃间断：左极限 1，右极限 2，两边对不上。第一类间断（左右极限都存在）。',
        inf: '无穷间断：x→1⁺ 冲 +∞，x→1⁻ 落 −∞，极限不存在。第二类间断。'
      };
      out.textContent = t[mode];
    }
    upd();
    return dispose;
  }

  /* ===================================================
     1.9 零点定理：横线一划，必有一交
     =================================================== */
  function wIvt(root) {
    let k = 0;
    const f = x => x * x * x - 4 * x * x + 1;
    const { render, dispose } = stage(root, 250, (ctx, w, h) => {
      const F = frame(ctx, w, h, [-0.3, 4.3], [-9, 3.5]);
      plot(ctx, F, f, { color: C.accent, width: 2.2 });
      line(ctx, F, -0.3, k, 4.3, k, C.blue, [5, 4], 1.4);
      let prev = f(-0.3) - k, roots = [];
      for (let i = 1; i <= 900; i++) {
        const x = -0.3 + (4.3 + 0.3) * i / 900;
        const cur = f(x) - k;
        if (prev === 0) roots.push(x - (4.6 / 900));
        if (prev * cur < 0) {
          let lo = x - 4.6 / 900, hi = x;
          for (let j = 0; j < 40; j++) {
            const mid = (lo + hi) / 2;
            if ((f(lo) - k) * (f(mid) - k) <= 0) hi = mid; else lo = mid;
          }
          roots.push((lo + hi) / 2);
        }
        prev = cur;
      }
      roots.forEach(r => dot(ctx, F, r, k, C.green, 4.5));
      text(ctx, F, 2.2, -1.6, 'y = k', C.blue);
      text(ctx, F, 0.05, 2.6, 'y = x³ − 4x² + 1', C.accent);
    });

    slider(root, {
      label: 'k =', min: -6, max: 2, step: 0.1, value: k,
      fmt: v => v.toFixed(1),
      on: v => { k = v; render(); upd(); }
    });

    const out = readout(root);
    function upd() {
      const vals = [f(0), f(1), f(3), f(4)];
      out.innerHTML = 'f(0)=' + vals[0].toFixed(0) + '，f(1)=' + vals[1].toFixed(0) +
        '，f(3)=' + vals[2].toFixed(0) + '，f(4)=' + vals[3].toFixed(0) +
        '。曲线连续，凡是横线划过的位置，都至少交一次——这就是介值定理的直观版本。';
    }
    upd();
    return dispose;
  }

  /* ===================================================
     2.1 割线 → 切线
     =================================================== */
  function wDeriv(root) {
    const funcs = {
      sq: { f: x => x * x, d: x => 2 * x, yr: [-2, 7], name: 'f(x)=x²' },
      cube: { f: x => x * x * x, d: x => 3 * x * x, yr: [-9, 9], name: 'f(x)=x³' },
      sin: { f: x => Math.sin(x), d: x => Math.cos(x), yr: [-2, 2], name: 'f(x)=sin x' },
      exp: { f: x => Math.exp(x), d: x => Math.exp(x), yr: [-1, 8], name: 'f(x)=eˣ' }
    };
    let key = 'sq', x0 = 1, t = 0.35;
    const h = () => Math.pow(10, -(0.1 + 2.9 * t));

    const { render, dispose } = stage(root, 260, (ctx, w, hgt) => {
      const g = funcs[key];
      const hh = h();
      const F = frame(ctx, w, hgt, [x0 - 1.9, x0 + 1.9], g.yr);
      plot(ctx, F, g.f, { color: C.accent, width: 2.2 });
      const y0 = g.f(x0), y1 = g.f(x0 + hh);
      const ksec = (y1 - y0) / hh;
      const ktan = g.d(x0);
      // 切线
      line(ctx, F, x0 - 1.9, y0 - ktan * 1.9, x0 + 1.9, y0 + ktan * 1.9, C.blue, [5, 4], 1.2);
      // 割线
      line(ctx, F, x0 - 1.9, y0 - ksec * 1.9, x0 + 1.9, y0 + ksec * 1.9, C.green, [], 1.6);
      dot(ctx, F, x0, y0, C.ink, 4.6);
      dot(ctx, F, x0 + hh, y1, C.green, 3.8);
      line(ctx, F, x0, y0, x0 + hh, y0, '#b9a88f', [3, 3], 1);
      text(ctx, F, x0 + hh / 2, y0 - (g.yr[1] - g.yr[0]) * 0.06, 'h', C.muted, 'center');
      text(ctx, F, x0 - 1.8, g.yr[1] - 0.6, g.name, C.accent);
      text(ctx, F, x0 + 1.75, g.yr[0] + 0.8, '切线', C.blue, 'right');
    });

    legend(root, [
      { c: C.accent, t: '曲线' },
      { c: C.green, t: '割线' },
      { c: C.blue, t: '切线', dash: true }
    ]);

    slider(root, {
      label: 'x₀ =', min: -2, max: 2, step: 0.05, value: x0,
      fmt: v => v.toFixed(2),
      on: v => { x0 = v; render(); upd(); }
    });
    slider(root, {
      label: 'h =', min: 0, max: 1, step: 0.005, value: t,
      fmt: () => h().toFixed(h() > 0.01 ? 3 : 4),
      on: v => { t = v; render(); upd(); }
    });
    seg(root, [
      { label: 'x²', value: 'sq' }, { label: 'x³', value: 'cube' },
      { label: 'sin x', value: 'sin' }, { label: 'eˣ', value: 'exp' }
    ], key, v => { key = v; render(); upd(); });

    const out = readout(root);
    function upd() {
      const g = funcs[key], hh = h();
      const ksec = (g.f(x0 + hh) - g.f(x0)) / hh;
      const ktan = g.d(x0);
      out.innerHTML = '割线斜率 = [f(x₀+h) − f(x₀)] / h = <b>' + ksec.toFixed(5) +
        '</b>　切线斜率 f′(x₀) = <b>' + ktan.toFixed(5) +
        '</b>　差 = <span class="g">' + Math.abs(ksec - ktan).toExponential(2) + '</span>　' +
        '（h 越小，割线越贴切线）';
    }
    upd();
    return dispose;
  }

  /* ===================================================
     2.3 高阶导数：位置、速度、加速度
     =================================================== */
  function wHigher(root) {
    let t0 = 1;
    const s = t => t * t * t - 3 * t * t + 2;
    const v = t => 3 * t * t - 6 * t;
    const a = t => 6 * t - 6;
    const { render, dispose } = stage(root, 240, (ctx, w, h) => {
      const F = frame(ctx, w, h, [-0.2, 3.4], [-3, 4]);
      plot(ctx, F, s, { color: C.accent, width: 2.2 });
      const y0 = s(t0), k = v(t0);
      line(ctx, F, t0 - 0.9, y0 - k * 0.9, t0 + 0.9, y0 + k * 0.9, C.blue, [5, 4], 1.2);
      line(ctx, F, t0, -3, t0, y0, '#b9a88f', [3, 3], 1);
      dot(ctx, F, t0, y0, C.accent, 4.6);
      text(ctx, F, t0 + 0.06, y0 + 0.35, 's(t)', C.accent);
      text(ctx, F, 2.2, -2.2, '切线斜率 = v(t)', C.blue);
      text(ctx, F, 0.05, 3.4, 's(t) = t³ − 3t² + 2', C.ink);
    });

    slider(root, {
      label: 't =', min: 0, max: 3.4, step: 0.05, value: t0,
      fmt: v => v.toFixed(2),
      on: v => { t0 = v; render(); upd(); }
    });

    const out = readout(root);
    function upd() {
      out.innerHTML = 't = <b>' + t0.toFixed(2) + '</b>　位置 s = ' + s(t0).toFixed(2) +
        '　速度 v = s′ = <b>' + v(t0).toFixed(2) + '</b>　加速度 a = s″ = <b>' + a(t0).toFixed(2) +
        '</b>　（v 的正负看切线往哪斜）';
    }
    upd();
    return dispose;
  }

  /* ===================================================
     2.4 隐函数求导：圆上一点的切线
     =================================================== */
  function wImplicit(root) {
    let th = 0.9;
    const R = 4;
    const { render, dispose } = stage(root, 330, (ctx, w, h) => {
      const PAD = 14;
      const size = Math.max(180, Math.min(w - PAD * 2, h - PAD * 2));
      const ox = (w - size) / 2, oy = (h - size) / 2;
      const R0 = 5.2;
      const X = x => ox + size / 2 + (x / R0) * (size / 2);
      const Y = y => oy + size / 2 - (y / R0) * (size / 2);
      const F = { X, Y, pad: ox, ih: size, iw: size, xr: [-R0, R0], yr: [-R0, R0] };

      ctx.save();
      ctx.strokeStyle = '#ece3d2';
      ctx.lineWidth = 1;
      for (let k = -5; k <= 5; k++) {
        ctx.beginPath(); ctx.moveTo(X(k), 0); ctx.lineTo(X(k), h); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, Y(k)); ctx.lineTo(w, Y(k)); ctx.stroke();
      }
      ctx.strokeStyle = '#cdbfa6';
      ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.moveTo(0, Y(0)); ctx.lineTo(w, Y(0)); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(X(0), 0); ctx.lineTo(X(0), h); ctx.stroke();

      ctx.fillStyle = '#948a7b';
      ctx.font = MONO;
      ctx.textAlign = 'center';
      for (let k = -4; k <= 4; k += 2) {
        if (k === 0) continue;
        ctx.fillText(String(k), X(k), Y(0) + 13);
        ctx.textAlign = 'right';
        ctx.fillText(String(k), X(0) - 5, Y(k) + 3.5);
        ctx.textAlign = 'center';
      }
      ctx.restore();

      plot(ctx, F, x => (Math.abs(x) <= R ? Math.sqrt(R * R - x * x) : NaN), { color: C.accent, width: 2, from: -R, to: R });
      plot(ctx, F, x => (Math.abs(x) <= R ? -Math.sqrt(R * R - x * x) : NaN), { color: C.accent, width: 2, from: -R, to: R });

      const x = R * Math.cos(th), y = R * Math.sin(th);
      const k = Math.abs(y) < 0.08 ? null : -x / y;
      line(ctx, F, 0, 0, x, y, '#c3b49b', [4, 4], 1);
      if (k === null) {
        line(ctx, F, x, -R0, x, R0, C.blue, [], 1.4);
      } else {
        line(ctx, F, x - 2.4, y - k * 2.4, x + 2.4, y + k * 2.4, C.blue, [], 1.4);
      }
      dot(ctx, F, x, y, C.ink, 4.6);
      const right = x > 1.6;
      ctx.save();
      ctx.fillStyle = C.ink;
      ctx.font = FONT;
      ctx.textAlign = right ? 'right' : 'left';
      ctx.fillText('(' + x.toFixed(2) + ', ' + y.toFixed(2) + ')', X(x) + (right ? -8 : 8), Y(y) + 4);
      ctx.restore();
    });

    slider(root, {
      label: '角度 θ =', min: 0, max: 6.28, step: 0.01, value: th,
      fmt: v => v.toFixed(2),
      on: v => { th = v; render(); upd(); }
    });

    const out = readout(root);
    function upd() {
      const x = R * Math.cos(th), y = R * Math.sin(th);
      const k = Math.abs(y) < 0.08 ? null : -x / y;
      out.innerHTML = '点 (' + x.toFixed(2) + ', ' + y.toFixed(2) + ')，由 x²+y²=16 两边求导得 2x+2yy′=0，故 y′ = <b>' +
        (k === null ? '不存在（切线竖直）' : k.toFixed(3)) + '</b>' +
        (k === null ? '' : '　切线：y − ' + y.toFixed(2) + ' = ' + k.toFixed(3) + '(x − ' + x.toFixed(2) + ')');
    }
    upd();
    return dispose;
  }

  /* ===================================================
     2.5 微分：放大看，曲线就是直线
     =================================================== */
  function wDiff(root) {
    let z = 1;
    const f = x => x * x;
    const { render, dispose } = stage(root, 240, (ctx, w, h) => {
      const cx = 1, cy = 1;
      const halfW = 1.5 / z, halfH = 4 / z;
      const F = frame(ctx, w, h, [cx - halfW, cx + halfW], [cy - halfH, cy + halfH]);
      plot(ctx, F, f, { color: C.accent, width: 2.2 });
      line(ctx, F, cx - halfW, cy - 2 * halfW, cx + halfW, cy + 2 * halfW, C.blue, [5, 4], 1.3);
      dot(ctx, F, cx, cy, C.ink, 4.4);
      text(ctx, F, cx - halfW * 0.62, cy + halfH * 0.62, 'y = x²', C.accent);
    });

    legend(root, [
      { c: C.accent, t: '曲线' },
      { c: C.blue, t: '切线', dash: true }
    ]);

    slider(root, {
      label: '放大', min: 0, max: 1, step: 0.01, value: 0,
      fmt: () => z.toFixed(0) + '×',
      on: v => { z = Math.pow(10, 2 * v); render(); upd(); }
    });

    const out = readout(root);
    function upd() {
      const dx = 0.1;
      const ww = 3 / z;
      out.innerHTML = '窗口宽度 <b>' + (ww >= 0.01 ? ww.toFixed(3) : ww.toExponential(1)) + '</b>　取 Δx = 0.1：Δy = 0.21，dy = 0.20，' +
        '差 0.01 = (Δx)²。放大以后误差比 Δx 更快地缩，所以曲线在小范围里“看起来就是切线”。';
    }
    upd();
    return dispose;
  }


  /* ===================================================
     3.3 单调性与极值
     =================================================== */
  function wMonotone(root) {
    let a = 1;
    const f = x => x * x * x - 3 * a * x;
    const { render, dispose } = stage(root, 250, (ctx, w, h) => {
      const F = frame(ctx, w, h, [-3, 3], [-8, 8]);
      plot(ctx, F, f, { color: C.accent, width: 2.2 });
      if (a > 1e-6) {
        const s = Math.sqrt(a);
        [s, -s].forEach((x, i) => {
          const y = f(x);
          const y0 = 0;
          line(ctx, F, x, y0, x, y, '#c9b99f', [3, 3], 1);
          dot(ctx, F, x, y, i === 0 ? C.green : C.blue, 4.2);
          text(ctx, F, x + 0.12, y + (i === 0 ? -0.5 : 0.8), i === 0 ? '极小' : '极大', i === 0 ? C.green : C.blue);
        });
      }
      text(ctx, F, -2.85, 7.2, 'y = x³ − 3ax', C.ink);
    });

    slider(root, {
      label: 'a =', min: 0, max: 3, step: 0.05, value: a,
      fmt: v => v.toFixed(2),
      on: v => { a = v; render(); upd(); }
    });

    const out = readout(root);
    function upd() {
      if (a < 1e-6) {
        out.innerHTML = 'a = 0：f(x)=x³，导数 3x² ≥ 0，整个区间单调递增，没有极值。驻点处的切线是水平的，但不变号。';
      } else {
        const s = Math.sqrt(a);
        out.innerHTML = 'a = <b>' + a.toFixed(2) + '</b>：增区间 (−∞, −√a) 与 (√a, +∞)，减区间 (−√a, √a)。' +
          '极大值 f(−√a) = <b>' + (2 * a * s).toFixed(2) + '</b>，极小值 f(√a) = <b>' + (-2 * a * s).toFixed(2) + '</b>。';
      }
    }
    upd();
    return dispose;
  }

  /* ===================================================
     5.1 黎曼和
     =================================================== */
  function wArea(root) {
    let n = 8;
    const f = x => x * x;
    const { render, dispose } = stage(root, 260, (ctx, w, h) => {
      const F = frame(ctx, w, h, [0, 1], [0, 1.2]);
      for (let i = 0; i < n; i++) {
        const x0 = i / n, x1 = (i + 1) / n;
        const y = f(x1);
        ctx.save();
        ctx.fillStyle = 'rgba(156,47,36,.10)';
        ctx.strokeStyle = 'rgba(156,47,36,.35)';
        ctx.lineWidth = 1;
        ctx.fillRect(F.X(x0), F.Y(y), F.X(x1) - F.X(x0), F.Y(0) - F.Y(y));
        ctx.strokeRect(F.X(x0), F.Y(y), F.X(x1) - F.X(x0), F.Y(0) - F.Y(y));
        ctx.restore();
      }
      plot(ctx, F, f, { color: C.accent, width: 2.4 });
      text(ctx, F, 0.03, 1.12, 'y = x²', C.accent);
    });

    slider(root, {
      label: 'n =', min: 2, max: 80, step: 1, value: n,
      fmt: v => v.toFixed(0),
      on: v => { n = v; render(); upd(); }
    });

    const out = readout(root);
    function upd() {
      const sum = (n + 1) * (2 * n + 1) / (6 * n * n);
      out.innerHTML = 'n = <b>' + n + '</b>，黎曼和 Sₙ = <b>' + sum.toFixed(5) +
        '</b>，精确值 1/3 ≈ 0.33333，差 ' + (sum - 1 / 3).toExponential(2) +
        '。n 越大，矩形越细，和越贴近曲边梯形。';
    }
    upd();
    return dispose;
  }

  /* ===================================================
     9.1 几何级数的部分和
     =================================================== */
  function wSeries(root) {
    let q = 0.6;
    const { render, dispose } = stage(root, 240, (ctx, w, h) => {
      const F = frame(ctx, w, h, [0, 20], [0, 5.5]);
      const lim = 1 / (1 - q);
      if (lim > 0 && lim < 5.5) line(ctx, F, 0, lim, 20, lim, C.muted, [5, 4], 1.2);
      let prev = null;
      for (let k = 0; k <= 20; k++) {
        const s = (1 - Math.pow(q, k + 1)) / (1 - q);
        if (s > 0 && s < 5.5) dot(ctx, F, k, s, k > 12 ? C.green : C.accent, 3);
        if (prev !== null) {
          ctx.save();
          ctx.strokeStyle = 'rgba(156,47,36,.25)';
          ctx.beginPath();
          ctx.moveTo(F.X(k - 1), F.Y(prev));
          ctx.lineTo(F.X(k), F.Y(s));
          ctx.stroke();
          ctx.restore();
        }
        prev = s;
      }
      text(ctx, F, 1, lim + 0.25, '1/(1−q) = ' + lim.toFixed(2), C.muted);
    });

    slider(root, {
      label: 'q =', min: -0.6, max: 0.8, step: 0.02, value: q,
      fmt: v => v.toFixed(2),
      on: v => { q = v; render(); upd(); }
    });

    const out = readout(root);
    function upd() {
      const lim = 1 / (1 - q);
      const s10 = (1 - Math.pow(q, 11)) / (1 - q);
      out.innerHTML = 'q = <b>' + q.toFixed(2) + '</b>，第 10 个部分和 S₁₀ = ' + s10.toFixed(4) +
        '，极限 <b>' + lim.toFixed(4) + '</b>。|q| &lt; 1，所以级数收敛；q 越接近 1，和越大、收敛越慢。';
    }
    upd();
    return dispose;
  }

  /* ===================================================
     10.1 斜率场
     =================================================== */
  function wSlope(root) {
    let k = 0.6;
    const { render, dispose } = stage(root, 250, (ctx, w, h) => {
      const F = frame(ctx, w, h, [-2, 2], [0, 6]);
      const sx = F.iw / 4, sy = F.ih / 6;
      ctx.save();
      ctx.strokeStyle = 'rgba(51,85,122,.38)';
      ctx.lineWidth = 1.2;
      for (let xv = -2; xv <= 2.01; xv += 0.4) {
        for (let yv = 0.5; yv <= 5.6; yv += 0.7) {
          const slope = k * yv;
          const px = F.X(xv), py = F.Y(yv);
          const dx = 8, dy = -slope * (sy / sx) * dx;
          const len = Math.sqrt(dx * dx + dy * dy) || 1;
          const ux = dx / len * 7, uy = dy / len * 7;
          ctx.beginPath();
          ctx.moveTo(px - ux, py - uy);
          ctx.lineTo(px + ux, py + uy);
          ctx.stroke();
        }
      }
      ctx.restore();
      plot(ctx, F, x => Math.exp(k * x), { color: C.accent, width: 2.2 });
      plot(ctx, F, x => 2 * Math.exp(k * x), { color: 'rgba(156,47,36,.35)', width: 1.6 });
      dot(ctx, F, 0, 1, C.accent, 4.2);
      text(ctx, F, 0.08, 1.35, 'y = e^(kx)', C.accent);
    });

    slider(root, {
      label: 'k =', min: -0.8, max: 1.2, step: 0.05, value: k,
      fmt: v => v.toFixed(2),
      on: v => { k = v; render(); upd(); }
    });

    const out = readout(root);
    function upd() {
      out.innerHTML = 'k = <b>' + k.toFixed(2) + '</b>：方程 y′ = ky 的通解是 y = Ce^(kx)。' +
        (k > 0 ? 'k &gt; 0，越往右增长越快。' : k < 0 ? 'k &lt; 0，指数衰减，趋于 0。' : 'k = 0，解是水平直线。') +
        ' 图中两条曲线对应 C = 1 与 C = 2。';
    }
    upd();
    return dispose;
  }

  /* ---------- 注册 ---------- */
  const registry = {
    func: wFunc,
    seq: wSeq,
    epsdelta: wEpsDelta,
    inf: wInf,
    twolimits: wTwoLimits,
    compare: wCompare,
    cont: wCont,
    ivt: wIvt,
    deriv: wDeriv,
    higher: wHigher,
    implicit: wImplicit,
    diff: wDiff,
    monotone: wMonotone,
    area: wArea,
    series: wSeries,
    slope: wSlope
  };

  window.Widgets = {
    mount(name, root) {
      const fn = registry[name];
      if (!fn) return null;
      try { return fn(root); } catch (e) { console.error('widget failed:', name, e); return null; }
    }
  };
})();
