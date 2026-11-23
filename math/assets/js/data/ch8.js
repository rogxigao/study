/* 第 8 章：二重积分 */
window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: '8-1',
  ch: 8,
  no: '8.1',
  nav: '概念与性质',
  title: '二重积分：把平面区域切成小方块',
  tagline: '一元切线段，二元切小区域。几何意义是曲顶柱体的体积。',
  mins: 13,
  goals: ['说出二重积分的定义', '理解几何意义', '用性质化简'],
  body: String.raw`
<p class="lead">一元积分把区间切成小段，二元积分把平面区域切成小片。记号从 \(\mathrm{d}x\) 变成 \(\mathrm{d}\sigma\)，本质还是“求和取极限”。</p>

<div class="callout callout-def"><span class="tag">定义</span>
<p>把区域 D 分成 n 个小块，面积 \(\Delta\sigma_i\)，任取点 \((\xi_i,\eta_i)\)，若</p>
<p>\[
\lim_{\lambda\to0}\sum_{i=1}^{n}f(\xi_i,\eta_i)\Delta\sigma_i
\]</p>
<p>存在且与分法、取点无关，就记作 \(\iint_D f(x,y)\,\mathrm{d}\sigma\)。</p></div>

<p>当 \(f\ge0\) 时，它是以 D 为底、以曲面 \(z=f(x,y)\) 为顶的曲顶柱体体积；\(f=1\) 时，积分值就是区域 D 的面积。</p>

<h2>性质</h2>

<ul>
  <li>线性：\(\iint(\alpha f+\beta g)=\alpha\iint f+\beta\iint g\)；</li>
  <li>区域可加：D 分成两块，积分相加；</li>
  <li>保号：\(f\ge0\Rightarrow\iint_D f\ge0\)；</li>
  <li>估值：\(mS\le\iint_D f\le MS\)，S 是区域面积。</li>
</ul>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 8.1</span><span class="ex-title">用几何意义</span></div>
  <div class="q"><p>设 D 是单位圆盘 \(x^{2}+y^{2}\le1\)，求 \(\iint_D 2\,\mathrm{d}\sigma\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>被积函数是常数 2，积分等于 \(2\times\) 区域面积。</p>
    <p>圆盘面积 \(\pi\)，所以积分为 \(2\pi\)。</p>
    <p>不用算累次积分，这就是性质的价值。</p>
  </div></details>
</div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>设 D 是矩形 \([0,2]\times[0,3]\)，求 \(\iint_D 1\,\mathrm{d}\sigma\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>等于面积 \(2\times3=6\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>若在 D 上 \(1\le f\le3\)，D 的面积为 4，估计 \(\iint_D f\) 的范围。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>由估值性质，\(4\le\iint_D f\le12\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>\(\iint_D 0\,\mathrm{d}\sigma\) 等于多少？</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>0。被积函数恒为零，积分值为零，与区域大小无关。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '二重积分', tex: String.raw`\iint_D f(x,y)\mathrm{d}\sigma=\lim_{\lambda\to0}\sum f(\xi_i,\eta_i)\Delta\sigma_i`, note: 'dσ 是面积元素。' },
    { name: '几何意义', tex: String.raw`\iint_D 1\,\mathrm{d}\sigma=S_D`, note: '常数积分等于面积乘常数。' },
    { name: '估值', tex: String.raw`mS\le\iint_D f\le MS`, note: 'm、M 是区域上的最值。' },
    { name: '可加性', tex: String.raw`\iint_{D_1\cup D_2}=\iint_{D_1}+\iint_{D_2}`, note: '两块不重叠。' }
  ]
});

window.SECTIONS.push({
  id: '8-2',
  ch: 8,
  no: '8.2',
  nav: '直角坐标计算',
  title: '直角坐标：先画区域，再定上下限',
  tagline: 'X 型看竖条，Y 型看横条。画不出图，就写不出限。',
  mins: 16,
  goals: ['判断 X 型、Y 型区域', '写累次积分', '交换积分次序'],
  body: String.raw`
<p class="lead">二重积分最终要化成一元积分算两次。关键只有一件事：<strong>把区域 D 的边界翻译成上下限</strong>。</p>

<h2>一、X 型区域</h2>

<p>若 D 可写成 \(a\le x\le b\)，\(\varphi_1(x)\le y\le\varphi_2(x)\)，则</p>

<p>\[
\iint_D f(x,y)\mathrm{d}\sigma=\int_a^b\mathrm{d}x\int_{\varphi_1(x)}^{\varphi_2(x)}f(x,y)\,\mathrm{d}y.
\]</p>

<p>内层对 y 积，x 当常数；外层再对 x 积。Y 型区域同理，先对 x 积。</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 8.2</span><span class="ex-title">三角形区域</span></div>
  <div class="q"><p>计算 \(\iint_D(x+y)\,\mathrm{d}\sigma\)，其中 D 由 \(y=0\)、\(x=1\)、\(y=x\) 围成。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>区域：\(0\le x\le1\)，\(0\le y\le x\)。</p>
    <p>\[
\int_0^1\mathrm{d}x\int_0^x(x+y)\mathrm{d}y
=\int_0^1\left(x^{2}+\frac{x^{2}}{2}\right)\mathrm{d}x
=\frac12.
\]</p>
    <p>内层积完，x 还在；最后才对 x 积。别把两层弄反。</p>
  </div></details>
</div>

<h2>二、交换次序</h2>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 8.3</span><span class="ex-title">换序</span></div>
  <div class="q"><p>交换 \(\displaystyle\int_0^1\mathrm{d}x\int_x^1 f(x,y)\,\mathrm{d}y\) 的积分次序。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>原区域：\(0\le x\le1\)，\(x\le y\le1\)，即三角形 \(0\le y\le1\)，\(0\le x\le y\)。</p>
    <p>\[
\int_0^1\mathrm{d}y\int_0^y f(x,y)\,\mathrm{d}x.
\]</p>
    <p>换序的原因通常是：原来的内层积不出来，换个方向就能积。</p>
  </div></details>
</div>

<div class="callout callout-warn"><span class="tag">画图</span>
<p>上下限永远“从区域内部看”：先穿过的边界是下限，后穿过的是上限。画图这一步省不得。</p></div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>计算 \(\iint_D xy\,\mathrm{d}\sigma\)，D 为 \([0,1]\times[0,1]\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\int_0^1x\mathrm{d}x\cdot\int_0^1y\mathrm{d}y=\frac12\cdot\frac12=\frac14\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>计算 \(\iint_D x\,\mathrm{d}\sigma\)，D 为 \(0\le y\le x\le1\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\int_0^1x\cdot x\,\mathrm{d}x=\frac13\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>交换 \(\int_0^1\mathrm{d}y\int_0^y f\,\mathrm{d}x\) 的次序。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>区域 \(0\le x\le y\le1\)，换成 \(\int_0^1\mathrm{d}x\int_x^1 f\,\mathrm{d}y\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: 'X 型区域', tex: String.raw`\iint_D f=\int_a^b\mathrm{d}x\int_{\varphi_1(x)}^{\varphi_2(x)}f\,\mathrm{d}y`, note: '先 y 后 x。' },
    { name: 'Y 型区域', tex: String.raw`\iint_D f=\int_c^d\mathrm{d}y\int_{\psi_1(y)}^{\psi_2(y)}f\,\mathrm{d}x`, note: '先 x 后 y。' },
    { name: '三角形区域', tex: String.raw`0\le y\le x\le1`, note: '最常考的区域。' },
    { name: '换序', tex: String.raw`\int_0^1\mathrm{d}x\int_x^1 f\mathrm{d}y=\int_0^1\mathrm{d}y\int_0^y f\mathrm{d}x`, note: '先画图再换。' }
  ]
});

window.SECTIONS.push({
  id: '8-3',
  ch: 8,
  no: '8.3',
  nav: '极坐标计算',
  title: '极坐标：圆域就用它',
  tagline: 'x=r cosθ，y=r sinθ，dσ 变成 r dr dθ。别忘了那个 r。',
  mins: 14,
  goals: ['写出极坐标变换', '定 r、θ 的范围', '计算圆域上的积分'],
  body: String.raw`
<p class="lead">区域是圆、圆环、扇形时，直角坐标的上下限会带根号，极坐标则非常干净。</p>

<div class="callout callout-def"><span class="tag">变换</span>
<p>\[
x=r\cos\theta,\quad y=r\sin\theta,\quad \mathrm{d}\sigma=r\,\mathrm{d}r\,\mathrm{d}\theta.
\]</p>
<p>角度 θ 从区域扫过的起始角到终止角；对每个 θ，r 从内边界到外边界。</p></div>

<div class="callout callout-warn"><span class="tag">最容易错</span>
<p>面积元素里的 <strong>r</strong> 不能漏。\(\mathrm{d}\sigma=r\mathrm{d}r\mathrm{d}\theta\)，不是 \(\mathrm{d}r\mathrm{d}\theta\)。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 8.4</span><span class="ex-title">圆域</span></div>
  <div class="q"><p>计算 \(\iint_D(x^{2}+y^{2})\,\mathrm{d}\sigma\)，D 为单位圆盘。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(x^{2}+y^{2}=r^{2}\)，区域 \(0\le\theta\le2\pi\)，\(0\le r\le1\)。</p>
    <p>\[
\int_0^{2\pi}\mathrm{d}\theta\int_0^1r^{2}\cdot r\,\mathrm{d}r
=2\pi\cdot\frac14=\frac{\pi}{2}.
\]</p>
  </div></details>
</div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 8.5</span><span class="ex-title">指数型</span></div>
  <div class="q"><p>计算 \(\iint_D e^{-(x^{2}+y^{2})}\mathrm{d}\sigma\)，D 为第一象限单位圆盘。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>区域 \(0\le\theta\le\frac{\pi}{2}\)，\(0\le r\le1\)。</p>
    <p>\[
\int_0^{\pi/2}\mathrm{d}\theta\int_0^1e^{-r^{2}}r\,\mathrm{d}r
=\frac{\pi}{2}\cdot\frac{1-e^{-1}}{2}=\frac{\pi}{4}(1-e^{-1}).
\]</p>
    <p>\(r e^{-r^{2}}\) 正好可以凑微分，这是极坐标的常见甜头。</p>
  </div></details>
</div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>用极坐标求单位圆盘的面积。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\int_0^{2\pi}\mathrm{d}\theta\int_0^1r\,\mathrm{d}r=2\pi\cdot\frac12=\pi\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>计算 \(\iint_D(x^{2}+y^{2})\mathrm{d}\sigma\)，D 为圆环 \(1\le r\le2\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\int_0^{2\pi}\mathrm{d}\theta\int_1^2r^{3}\mathrm{d}r=2\pi\cdot\frac{15}{4}=\frac{15\pi}{2}\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>把 \(x^{2}+y^{2}\le2x\) 写成极坐标形式。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(r^{2}\le2r\cos\theta\Rightarrow0\le r\le2\cos\theta\)，且 \(-\frac{\pi}{2}\le\theta\le\frac{\pi}{2}\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '极坐标变换', tex: String.raw`x=r\cos\theta,\quad y=r\sin\theta`, note: '圆域首选。' },
    { name: '面积元素', tex: String.raw`\mathrm{d}\sigma=r\,\mathrm{d}r\,\mathrm{d}\theta`, note: 'r 不能漏。' },
    { name: '圆域', tex: String.raw`0\le\theta\le2\pi,\quad 0\le r\le R`, note: '整圆。' },
    { name: '偏移圆', tex: String.raw`x^{2}+y^{2}\le2ax\ \Rightarrow\ 0\le r\le2a\cos\theta`, note: 'θ 从 −π/2 到 π/2。' }
  ]
});

window.SECTIONS.push({
  id: 'ch8-drill',
  ch: 8,
  kind: 'drill',
  no: '测',
  nav: '第 8 章自测',
  title: '第 8 章 · 综合自测',
  tagline: '五道题：区域、换序、直角坐标、极坐标。',
  mins: 20,
  goals: ['先画图再写限', '记住极坐标的 r'],
  body: String.raw`
<p class="lead">二重积分题，区域画对了就成功一半。剩下的是计算细心。</p>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>计算 \(\iint_D(1+x)\mathrm{d}\sigma\)，D 为 \([0,1]\times[0,2]\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\int_0^1(1+x)\mathrm{d}x\cdot2=\left(1+\frac12\right)\cdot2=3\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>计算 \(\iint_D y\,\mathrm{d}\sigma\)，D 为 \(0\le y\le x\le1\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\int_0^1\mathrm{d}x\int_0^x y\mathrm{d}y=\int_0^1\frac{x^{2}}{2}\mathrm{d}x=\frac16\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>交换 \(\int_0^2\mathrm{d}x\int_0^{2-x}f\,\mathrm{d}y\) 的次序。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>区域 \(0\le x\le2\)，\(0\le y\le2-x\)，换成 \(\int_0^2\mathrm{d}y\int_0^{2-y}f\,\mathrm{d}x\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">04</span>计算 \(\iint_D\sqrt{x^{2}+y^{2}}\,\mathrm{d}\sigma\)，D 为单位圆盘。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\int_0^{2\pi}\mathrm{d}\theta\int_0^1r\cdot r\mathrm{d}r=2\pi\cdot\frac13=\frac{2\pi}{3}\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">05</span>计算 \(\iint_D e^{-(x^{2}+y^{2})}\mathrm{d}\sigma\)，D 为全平面。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\int_0^{2\pi}\mathrm{d}\theta\int_0^{\infty}e^{-r^{2}}r\mathrm{d}r=2\pi\cdot\frac12=\pi\)。这就是高斯积分的来源。</p></div></details>
  </div>
</div>
`,
  formulas: []
});
