/* ===================================================
   路由、渲染、进度
   =================================================== */
(function () {
  const SECTIONS = window.SECTIONS || [];
  const CHAPTERS = window.CHAPTERS || [];
  const COMMON = window.COMMON_FORMULAS || [];
  const KEY = 'gsmd-progress-v1';

  let store = {};
  try { store = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { store = {}; }
  let disposers = [];

  const $ = s => document.querySelector(s);
  const view = $('#view');
  const nav = $('#nav');

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* 忽略 */ }
  }
  function byId(id) { return SECTIONS.find(s => s.id === id); }
  function chapterOf(id) {
    const s = byId(id);
    return s ? CHAPTERS.find(c => c.n === s.ch) : null;
  }
  function sectionsOf(ch) {
    return (ch.sections || []).map(byId).filter(Boolean);
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }

  /* ---------- 进度 ---------- */
  function updateProgress() {
    const total = SECTIONS.length;
    const done = SECTIONS.filter(s => store[s.id] === 'done').length;
    const pct = total ? Math.round(done / total * 100) : 0;
    const bar = $('#progBar');
    const txt = $('#progText');
    if (bar) bar.style.width = pct + '%';
    if (txt) txt.textContent = pct + '%';
  }

  /* ---------- 侧栏 ---------- */
  function renderNav(filter) {
    const q = (filter || '').trim().toLowerCase();
    let html = '';
    CHAPTERS.forEach(ch => {
      const secs = sectionsOf(ch);
      if (!secs.length) return;
      const hit = secs.filter(s => !q || (s.no + ' ' + s.title + ' ' + (s.tagline || '')).toLowerCase().includes(q)
        || ch.title.toLowerCase().includes(q));
      if (!hit.length) return;
      html += '<div class="nav-ch"><div class="nav-ch-head"><b>第 ' + ch.n + ' 章</b><span>' +
        esc(ch.title) + '</span><span class="cnt">' + secs.filter(s => store[s.id] === 'done').length + '/' + secs.length + '</span></div>';
      hit.forEach(s => {
        const st = store[s.id] || '';
        html += '<a class="nav-item" data-id="' + s.id + '" href="#/s/' + s.id + '" title="' + esc(s.no + ' ' + s.title) + '">' +
          '<span class="ni-no">' + (s.kind === 'drill' ? '测' : s.no) + '</span>' +
          '<span class="ni-t">' + esc(s.nav || s.title) + '</span>' +
          '<span class="dot ' + st + '"></span></a>';
      });
      html += '</div>';
    });
    if (q && !html) html = '<p class="nav-empty">没有匹配的章节。试试“极限”“导数”“微分”。</p>';
    html += '<p class="nav-note">全 10 章已备齐：48 节正文 + 10 套章末自测。侧栏搜“极限”“级数”“差分”可直接跳。</p>';
    nav.innerHTML = html;
    markActive();
  }

  function markActive() {
    const id = currentSectionId();
    nav.querySelectorAll('.nav-item').forEach(a => {
      a.classList.toggle('active', a.dataset.id === id);
    });
    const active = nav.querySelector('.nav-item.active');
    if (active) {
      const nr = nav.getBoundingClientRect();
      const ar = active.getBoundingClientRect();
      if (ar.top < nr.top + 8 || ar.bottom > nr.bottom - 8) {
        nav.scrollTop += ar.top - nr.top - 72;
      }
    }
  }

  function currentSectionId() {
    const h = location.hash || '';
    return h.indexOf('#/s/') === 0 ? h.slice(4) : '';
  }

  /* ---------- 数学公式 ---------- */
  function typeset(el) {
    if (!window.renderMathInElement) return;
    try {
      window.renderMathInElement(el, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\[', right: '\\]', display: true },
          { left: '\\(', right: '\\)', display: false }
        ],
        throwOnError: false,
        ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
      });
    } catch (e) { console.warn('math render', e); }
  }

  /* ---------- 渲染：首页 ---------- */
  function renderHome() {
    const cur = window.CURRENT ? byId(window.CURRENT.id) : null;
    const totalQ = SECTIONS.reduce((n, s) => n + ((s.body.match(/class="quiz-item"/g) || []).length), 0);
    const totalF = SECTIONS.reduce((n, s) => n + ((s.formulas || []).length), 0);
    const drills = SECTIONS.filter(s => s.kind === 'drill').length;
    const bodyCount = SECTIONS.length - drills;

    let cards = '';
    CHAPTERS.filter(c => sectionsOf(c).length).forEach(ch => {
      const secs = sectionsOf(ch);
      const d = secs.filter(s => store[s.id] === 'done').length;
      const pct = Math.round(d / secs.length * 100);
      cards += '<a class="ch-card" href="#/s/' + secs[0].id + '">' +
        '<div class="cc-no">CHAPTER ' + String(ch.n).padStart(2, '0') + '</div>' +
        '<h4>第' + ch.n + '章 · ' + esc(ch.title) + '</h4>' +
        '<p>' + esc(ch.note || '') + '　共 ' + secs.length + ' 节</p>' +
        '<div class="cc-bar"><i style="width:' + pct + '%"></i></div></a>';
    });

    let where = '';
    if (cur) {
      where = '<div class="where"><h3><b>' + cur.no + '</b>' + esc(cur.title) + '</h3>' +
        '<p>' + esc(cur.tagline || '') + '　你正在这里，或刚经过这里。</p>' +
        '<div class="path"><span>建议顺序</span>' +
        '<a href="#/s/1-5">1.5 极限运算法则</a><i>→</i><a href="#/s/1-6">1.6 两个重要极限</a><i>→</i>' +
        '<a href="#/s/1-7">1.7 无穷小比较</a><i>→</i><a href="#/s/2-1">2.1 导数概念</a><i>→</i>' +
        '<a href="#/s/2-2">2.2 求导法则</a><i>→</i><a href="#/s/2-3">2.3 高阶导数</a></div></div>';
    } else {
      where = '<div class="where"><h3><b>全 10 章</b>结课之后，把散点连成网</h3>' +
        '<p>课上完了，接下来不是再从头看一遍，而是按“极限 → 导数 → 中值定理 → 积分 → 多元 → 级数 → 微分方程”串一条线。每章先做章末自测，错哪题回哪节。</p>' +
        '<div class="path"><span>复习主线</span>' +
        '<a href="#/s/1-1">1.1 函数</a><i>→</i><a href="#/s/2-1">2.1 导数</a><i>→</i>' +
        '<a href="#/s/3-1">3.1 中值定理</a><i>→</i><a href="#/s/4-1">4.1 不定积分</a><i>→</i>' +
        '<a href="#/s/5-2">5.2 基本公式</a><i>→</i><a href="#/s/7-1">7.1 多元函数</a><i>→</i>' +
        '<a href="#/s/9-1">9.1 级数</a><i>→</i><a href="#/s/10-1">10.1 微分方程</a></div></div>';
    }

    view.innerHTML =
      '<div class="hero">' +
        '<div class="overline">A slower way to learn calculus</div>' +
        '<h1>课上讲得快，<br>那就<em>一格一格</em>补回来。</h1>' +
        '<p class="lede">按郭军、房少梅《高等数学（经、管类）》（科学出版社）的章节编排。每一节先给一张能动手拖的图，再给定义、例题、易错点和几道自测；公式单独汇总，随时能查。</p>' +
        '<div class="chips"><span class="chip">' + bodyCount + ' 节正文</span><span class="chip">' + drills + ' 套章末自测</span><span class="chip">16 个可拖动的图</span>' +
        '<span class="chip">' + totalQ + ' 道自测</span><span class="chip">' + totalF + ' 条公式</span>' +
        '<span class="chip">进度自动记录</span></div>' +
        '<div class="hero-actions"><a class="btn" href="#/s/1-1">从第 1 章开始</a>' +
        '<a class="btn ghost" href="' + (cur ? '#/s/' + cur.id : '#/s/3-1') + '">' + (cur ? '接着上次的地方' : '从第 3 章接着看') + '</a>' +
        '<a class="btn ghost" href="#/formulas">公式速查</a></div>' +
      '</div>' +

      '<section class="block">' +
        '<div class="block-title"><h2>' + (cur ? '你现在的位置' : '结课之后') + '</h2><span>' + (cur ? 'where you are' : 'after the course') + '</span></div>' + where +
        '<p style="margin:16px 0 0;font-size:13.5px;color:var(--ink-3)">' +
          (cur
            ? '2.3 高阶导数的“糊”，多半不在这一节本身，而在前面：极限的四则运算没熟、复合函数求导的链条没接顺。'
            : '十章 48 节已经全部备齐，每节仍是“一张图 + 定义 + 例题 + 易错点 + 三道自测”。期末复习建议先做章末自测定位漏洞，再回小节补，不必平均用力。') +
          '公式在「公式速查」里按章归档，考前可以只看那一页。</p>' +
      '</section>' +

      '<section class="block">' +
        '<div class="block-title"><h2>章节</h2><span>chapters</span></div>' +
        '<div class="ch-cards">' + cards + '</div>' +
      '</section>' +

      '<section class="block">' +
        '<div class="block-title"><h2>怎么用</h2><span>how to use</span></div>' +
        '<ol class="plan">' +
          '<li><span class="n">一</span><div><b>先拖图，再读定义</b><p>每节的第一个图都能拖。手指动两下，比盯着 ε-δ 看十分钟有用。</p></div></li>' +
          '<li><span class="n">二</span><div><b>例题先自己写三步</b><p>解析默认收起来。看完题目先在纸上写，再展开对答案，卡在哪一步就是没懂哪一步。</p></div></li>' +
          '<li><span class="n">三</span><div><b>自测不求满分，只求说出为什么</b><p>做错就点开解析；能讲清每一步的依据，比做对更重要。学完点“已掌握”，侧栏会记进度。</p></div></li>' +
        '</ol>' +
      '</section>' +

      '<div class="foot"><span>高等数学 · 慢读</span><span>按科学出版社《高等数学（经、管类）》编排</span><span>公式渲染 KaTeX</span></div>';
  }

  /* ---------- 渲染：一节 ---------- */
  function renderSection(id) {
    const s = byId(id);
    if (!s) { location.hash = '#/home'; return; }
    const ch = chapterOf(id);
    const idx = SECTIONS.indexOf(s);
    const prev = SECTIONS[idx - 1], next = SECTIONS[idx + 1];
    const st = store[id] || '';
    const qn = (s.body.match(/class="quiz-item"/g) || []).length;

    $('#crumb').textContent = '第 ' + ch.n + ' 章 · ' + ch.title + (s.kind === 'drill' ? ' · ' + s.title : ' / ' + s.no + ' ' + s.title);

    let fcards = '';
    if ((s.formulas || []).length) {
      fcards = '<div class="sec-formulas"><h2>本节公式，合上书画一遍</h2><div class="fgrid">' +
        s.formulas.map(f => '<div class="fcard"><div class="fname">' + esc(f.name) + '</div>$$' + f.tex + '$$' +
          (f.note ? '<p>' + esc(f.note) + '</p>' : '') + '</div>').join('') + '</div></div>';
    }

    view.innerHTML =
      '<article class="article">' +
        '<div class="sec-head">' +
          '<div class="overline">第 ' + ch.n + ' 章 · ' + esc(ch.title) + '</div>' +
          '<h1>' + (s.kind === 'drill' ? '' : '<span class="no">' + s.no + '</span>') + esc(s.title) + '</h1>' +
          '<p class="tagline">' + esc(s.tagline || '') + '</p>' +
          '<div class="meta-row"><span>约 ' + (s.mins || 12) + ' 分钟</span>' +
          (qn ? '<span>' + qn + ' 道自测</span>' : '') +
          '<span>公式 ' + (s.formulas || []).length + ' 条</span>' +
          '<span class="state">' + (st === 'done' ? '已标记掌握' : st === 'fuzzy' ? '待复习' : '未开始') + '</span></div>' +
        '</div>' +
        (s.goals && s.goals.length ? '<div class="goals"><b>这一节要拿到的东西</b><ul>' +
          s.goals.map(g => '<li>' + g + '</li>').join('') + '</ul></div>' : '') +
        s.body + fcards +
        '<div class="sec-actions"><span class="ask">学完了？给这一节一个诚实的标记。</span>' +
          '<button class="st-btn' + (st === 'done' ? ' on' : '') + '" data-state="done" data-id="' + id + '">已掌握</button>' +
          '<button class="st-btn' + (st === 'fuzzy' ? ' on' : '') + '" data-state="fuzzy" data-id="' + id + '">还有点糊</button>' +
        '</div>' +
        '<nav class="pager">' +
          (prev ? '<a href="#/s/' + prev.id + '"><span>上一节</span><b>' + (prev.no || '') + ' ' + esc(prev.title) + '</b></a>' : '<span></span>') +
          (next ? '<a class="next" href="#/s/' + next.id + '"><span>下一节</span><b>' + (next.no || '') + ' ' + esc(next.title) + '</b></a>' : '<span></span>') +
        '</nav>' +
      '</article>';

    afterRender();
  }

  function afterRender() {
    typeset(view);
    disposers.forEach(fn => { try { fn(); } catch (e) { } });
    disposers = [];
    view.querySelectorAll('[data-widget]').forEach(el => {
      const d = window.Widgets && window.Widgets.mount(el.dataset.widget, el);
      if (d) disposers.push(d);
    });
    view.querySelectorAll('.st-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id, st = btn.dataset.state;
        store[id] = store[id] === st ? '' : st;
        if (!store[id]) delete store[id];
        save();
        view.querySelectorAll('.st-btn').forEach(b => {
          b.classList.toggle('on', store[id] === b.dataset.state);
        });
        const chip = view.querySelector('.meta-row .state');
        if (chip) chip.textContent = store[id] === 'done' ? '已标记掌握' : store[id] === 'fuzzy' ? '待复习' : '未开始';
        renderNav($('#navSearch').value);
        updateProgress();
      });
    });
    if (!window.katex) {
      const w = document.createElement('div');
      w.className = 'callout callout-warn';
      w.innerHTML = '<span class="tag">提示</span>公式渲染库没加载出来（可能没联网）。文字和图示仍然可用，但公式会显示成 LaTeX 源码。';
      view.prepend(w);
    }
  }

  /* ---------- 渲染：公式速查 ---------- */
  function renderFormulas() {
    $('#crumb').textContent = '公式速查';
    let groups = '';
    SECTIONS.forEach(s => {
      if (!(s.formulas || []).length) return;
      const ch = chapterOf(s.id);
      groups += '<div class="f-group" data-ch="' + ch.n + '"><h3><a href="#/s/' + s.id + '">第' + ch.n + '章 ' +
        (s.no || '') + ' ' + esc(s.title) + '</a></h3><div class="fgrid">' +
        s.formulas.map(f => '<div class="fcard"><div class="fname">' + esc(f.name) + '</div>$$' + f.tex + '$$' +
          (f.note ? '<p>' + esc(f.note) + '</p>' : '') + '</div>').join('') + '</div></div>';
    });
    const common = COMMON.length ? '<div class="f-group" data-ch="0"><h3>常备表 · 等价无穷小与导数基本公式</h3><div class="fgrid">' +
      COMMON.map(f => '<div class="fcard"><div class="fname">' + esc(f.name) + '</div>$$' + f.tex + '$$' +
        (f.note ? '<p>' + esc(f.note) + '</p>' : '') + '</div>').join('') + '</div></div>' : '';

    view.innerHTML =
      '<div class="f-page-head"><div class="overline">Formula index</div><h1>公式速查</h1>' +
      '<p>按章节排。搜索框认公式名，也认 “等价”“链式”“高阶” 这类词。</p></div>' +
      '<div class="f-search"><input id="fSearch" type="search" placeholder="搜：等价无穷小 / 链式法则 / 二阶导 / 微分" autocomplete="off"></div>' +
      '<div class="f-filters"><button class="f-filter on" data-ch="all">全部</button>' +
      '<button class="f-filter" data-ch="1">第 1 章</button><button class="f-filter" data-ch="2">第 2 章</button>' +
      '<button class="f-filter" data-ch="0">常备表</button></div>' +
      '<div id="fList">' + common + groups + '</div>' +
      '<p class="f-none" id="fNone" style="display:none">没有找到。换个说法试试。</p>';

    afterRender();

    const input = $('#fSearch');
    const chips = view.querySelectorAll('.f-filter');
    let chFilter = 'all';
    function apply() {
      const q = input.value.trim().toLowerCase();
      let shown = 0;
      view.querySelectorAll('.f-group').forEach(g => {
        let any = false;
        g.querySelectorAll('.fcard').forEach(c => {
          const hit = (!q || c.textContent.toLowerCase().includes(q)) && (chFilter === 'all' || g.dataset.ch === chFilter);
          c.style.display = hit ? '' : 'none';
          if (hit) any = true;
        });
        g.style.display = any ? '' : 'none';
        if (any) shown++;
      });
      $('#fNone').style.display = shown ? 'none' : '';
    }
    input.addEventListener('input', apply);
    chips.forEach(c => c.addEventListener('click', () => {
      chips.forEach(x => x.classList.remove('on'));
      c.classList.add('on');
      chFilter = c.dataset.ch;
      apply();
    }));
  }

  /* ---------- 路由 ---------- */
  function disposeAll() {
    disposers.forEach(fn => { try { fn(); } catch (e) { } });
    disposers = [];
  }

  function route() {
    disposeAll();
    closeSidebar();
    const h = location.hash || '#/home';
    if (h.indexOf('#/s/') === 0) renderSection(h.slice(4));
    else if (h === '#/formulas') renderFormulas();
    else renderHome();
    markActive();
    updateProgress();
    window.scrollTo(0, 0);
  }

  /* ---------- 侧栏开关 ---------- */
  function openSidebar() {
    $('#sidebar').classList.add('open');
    $('#scrim').classList.add('show');
  }
  function closeSidebar() {
    $('#sidebar').classList.remove('open');
    $('#scrim').classList.remove('show');
  }

  /* ---------- 启动 ---------- */
  $('#menuBtn').addEventListener('click', openSidebar);
  $('#scrim').addEventListener('click', closeSidebar);
  $('#navSearch').addEventListener('input', e => renderNav(e.target.value));
  window.addEventListener('hashchange', route);

  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const id = currentSectionId();
    if (!id) return;
    const idx = SECTIONS.findIndex(s => s.id === id);
    if (e.key === 'ArrowRight' && SECTIONS[idx + 1]) location.hash = '#/s/' + SECTIONS[idx + 1].id;
    if (e.key === 'ArrowLeft' && SECTIONS[idx - 1]) location.hash = '#/s/' + SECTIONS[idx - 1].id;
  });

  renderNav('');
  route();
})();
