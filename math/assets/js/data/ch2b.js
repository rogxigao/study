/* 第 2 章（下）：2.4 - 2.5 + 章末自测 */
window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: '2-4',
  nav: '隐函数与参数方程',
  ch: 2,
  no: '2.4',
  title: '隐函数与参数方程：y 没写成 x 的样子',
  tagline: '不用先解出 y。把 y 当成 y(x)，两边直接对 x 求导，再解出 y′。',
  mins: 16,
  goals: [
    '对隐函数两边求导并解出 y′',
    '用对数求导法处理幂指函数',
    '会算参数方程的 dy/dx'
  ],
  body: String.raw`
<p class="lead">有些式子，y 根本解不出来，或者解出来很丑。比如 \(x^{2}+y^{2}=25\)。但切线斜率不一定要求出 y 的表达式——<strong>把 y 看成 x 的函数，直接在等式两边求导</strong>就行。</p>

<h2>一、隐函数求导</h2>

<p>核心只有一句话：<strong>y 是 y(x)</strong>。所以遇到 y 的项，求导时要用链式法则，多乘一个 \(y'\)。</p>

<p>以 \(x^{2}+y^{2}=25\) 为例，两边对 x 求导：</p>

<p>\[
2x+2y\cdot y'=0\Rightarrow y'=-\frac{x}{y}.
\]</p>

<p>结果里还带着 y，这没关系——只要知道点的坐标，就能算出斜率。</p>

<div class="widget" data-widget="implicit"><div class="w-head"><b>拖角度</b><span>圆上每一点的切线斜率都是 −x/y</span></div></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 2.9</span><span class="ex-title">圆上一点</span></div>
  <div class="q"><p>求 \(x^{2}+y^{2}=25\) 在点 \((3,4)\) 处的切线方程。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>由隐函数求导得 \(y'=-\frac{x}{y}\)，在 \((3,4)\) 处 \(y'=-\frac34\)。</p>
    <p>切线：\(y-4=-\frac34(x-3)\)，整理得 \(3x+4y=25\)。</p>
    <p>顺带一提：圆的切线垂直于半径，半径斜率 \(\frac43\)，切线斜率 \(-\frac34\)，正好互为负倒数。</p>
  </div></details>
</div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 2.10</span><span class="ex-title">带指数</span></div>
  <div class="q"><p>设 \(e^{y}+xy=1\)，求 \(\dfrac{\mathrm{d}y}{\mathrm{d}x}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>两边对 x 求导：\(e^{y}y'+y+xy'=0\)。</p>
    <p>把含 \(y'\) 的项归拢：\(y'(e^{y}+x)=-y\)，故 \(y'=-\frac{y}{e^{y}+x}\)。</p>
    <p>注意 \(xy\) 是乘积，求导得 \(y+xy'\)，不能只写 y。</p>
  </div></details>
</div>

<h2>二、对数求导法：专治幂指函数</h2>

<p>形如 \(y=u(x)^{v(x)}\) 的函数，底数和指数都在动，直接套公式不行。办法是<strong>两边取对数，把指数拉下来</strong>。</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 2.11</span><span class="ex-title">x 的 x 次方</span></div>
  <div class="q"><p>求 \(y=x^{x}\)（\(x&gt;0\)）的导数。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>两边取对数：\(\ln y=x\ln x\)。</p>
    <p>两边对 x 求导（左边用链式）：\(\frac{y'}{y}=\ln x+x\cdot\frac1x=\ln x+1\)。</p>
    <p>所以 \(y'=x^{x}(1+\ln x)\)。</p>
    <p>也可以写成 \(y=e^{x\ln x}\) 再求导，结果一样。这两种写法都值得会。</p>
  </div></details>
</div>

<div class="callout callout-tip"><span class="tag">什么时候用</span>
<p>底数和指数都含 x（如 \(x^x\)、\((\sin x)^x\)），或者一串因子连乘连除（取对数后变成加减），都适合对数求导。</p></div>

<h2>三、参数方程：各算各的，再相除</h2>

<p>若曲线由 \(x=\varphi(t)\)，\(y=\psi(t)\) 给出，则</p>

<p>\[
\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{\psi'(t)}{\varphi'(t)}\quad(\varphi'(t)\ne0).
\]</p>

<p>直观理解：\(\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{\mathrm{d}y/\mathrm{d}t}{\mathrm{d}x/\mathrm{d}t}\)，两个变化率相除，消掉 t。</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 2.12</span><span class="ex-title">参数方程求切线</span></div>
  <div class="q"><p>设 \(x=t^{2}\)，\(y=t^{3}\)，求 \(\dfrac{\mathrm{d}y}{\mathrm{d}x}\)，并求 \(t=1\) 处的切线斜率。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(x'=2t\)，\(y'=3t^{2}\)，所以 \(\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{3t^{2}}{2t}=\frac{3t}{2}\)（t≠0）。</p>
    <p>\(t=1\) 时斜率为 \(\frac32\)，对应点为 \((1,1)\)，切线 \(y-1=\frac32(x-1)\)。</p>
  </div></details>
</div>

<div class="callout callout-note"><span class="tag">延伸</span>
<p>参数方程的二阶导不能直接对 \(\frac{3t}{2}\) 再对 t 求导，要再除以 \(x'(t)\)：\(\frac{\mathrm{d}^{2}y}{\mathrm{d}x^{2}}=\frac{\mathrm{d}}{\mathrm{d}t}\left(\frac{y'}{x'}\right)\Big/x'(t)\)。经管类考得少，知道有这一步即可。</p></div>

<h2>四、自测</h2>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>设 \(x^{2}+xy+y^{2}=3\)，求在点 \((1,1)\) 处的 \(y'\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>xy 求导是 \(y+xy'\)，\(y^2\) 求导是 \(2yy'\)。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>求导：\(2x+y+xy'+2yy'=0\)。代入 (1,1)：\(2+1+y'+2y'=0\)，得 \(y'=-1\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求 \(y=(\sin x)^{x}\)（\(0&lt;x&lt;\pi\)）的导数。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>取对数，左边 \(\ln y\)，右边 \(x\ln\sin x\)。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>\(\ln y=x\ln\sin x\)，求导：\(\frac{y'}{y}=\ln\sin x+x\cot x\)。</p>
      <p>所以 \(y'=(\sin x)^{x}(\ln\sin x+x\cot x)\)。</p>
    </div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>设 \(x=e^{t}\)，\(y=t^{2}\)，求 \(\dfrac{\mathrm{d}y}{\mathrm{d}x}\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>分别对 t 求导，再相除。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(x'=e^{t}\)，\(y'=2t\)，所以 \(\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{2t}{e^{t}}=2te^{-t}\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '隐函数求导', tex: String.raw`F(x,y)=0\ \Rightarrow\ F_x+F_y\,y'=0\ \Rightarrow\ y'=-\frac{F_x}{F_y}`, note: '把 y 当 y(x)，用链式。' },
    { name: '对数求导', tex: String.raw`y=u^{v}\ \Rightarrow\ \frac{y'}{y}=v'\ln u+v\frac{u'}{u}`, note: '幂指函数的通用解法。' },
    { name: '参数方程', tex: String.raw`x=\varphi(t),\ y=\psi(t)\ \Rightarrow\ \frac{\mathrm{d}y}{\mathrm{d}x}=\frac{\psi'(t)}{\varphi'(t)}`, note: '两个变化率相除。' },
    { name: '圆的切线', tex: String.raw`x^{2}+y^{2}=R^{2}\ \Rightarrow\ y'=-\frac{x}{y}`, note: '切线垂直于半径。' }
  ]
});

window.SECTIONS.push({
  id: '2-5',
  nav: '微分',
  ch: 2,
  no: '2.5',
  title: '微分：把曲线看成直线',
  tagline: 'Δy 的线性主部就是 dy。放大以后，曲线和切线几乎分不出来——这是所有近似计算的地基。',
  mins: 16,
  goals: [
    '说清可微与可导是一回事',
    '会写 dy = f′(x)dx',
    '用微分做近似计算',
    '理解一阶微分形式不变性'
  ],
  body: String.raw`
<p class="lead">导数回答“变化多快”，微分回答“变化了多少”。两者只差一个 \(\mathrm{d}x\)，但意义不同：导数是比值，微分是增量。</p>

<h2>一、从面积增量说起</h2>

<p>正方形边长 x，面积 \(S=x^{2}\)。边长增加 \(\Delta x\)，面积增加</p>

<p>\[
\Delta S=(x+\Delta x)^{2}-x^{2}=2x\Delta x+(\Delta x)^{2}.
\]</p>

<p>第一项 \(2x\Delta x\) 是线性的，第二项是 \((\Delta x)^2\)，当 \(\Delta x\to0\) 时是比 \(\Delta x\) 高阶的无穷小。所以面积增量的“主部”就是 \(2x\Delta x\)。这个主部，就叫微分。</p>

<div class="callout callout-def"><span class="tag">定义</span>
<p>若 \(\Delta y=f(x_0+\Delta x)-f(x_0)\) 可以写成</p>
<p>\[
\Delta y=A\Delta x+o(\Delta x),
\]</p>
<p>其中 A 与 \(\Delta x\) 无关，则称 \(f\) 在 \(x_0\) 处<strong>可微</strong>，并称 \(A\Delta x\) 为<strong>微分</strong>，记 \(\mathrm{d}y=A\Delta x\)。</p></div>

<div class="callout callout-def"><span class="tag">定理</span>
<p>\(f\) 在 \(x_0\) 可微 \(\iff\) \(f\) 在 \(x_0\) 可导，且此时 \(A=f'(x_0)\)。又规定自变量的微分 \(\mathrm{d}x=\Delta x\)，于是</p>
<p>\[
\mathrm{d}y=f'(x)\,\mathrm{d}x.
\]</p></div>

<p>由此 \(\frac{\mathrm{d}y}{\mathrm{d}x}=f'(x)\)，导数就是两个微分之商，所以也叫“微商”。</p>

<h2>二、几何意义：切线的纵坐标增量</h2>

<p>在点 \((x_0,f(x_0))\) 处，切线是 \(y=f(x_0)+f'(x_0)(x-x_0)\)。当 x 从 \(x_0\) 走到 \(x_0+\Delta x\)，切线上升的高度正好是 \(f'(x_0)\Delta x=\mathrm{d}y\)；而曲线实际上升 \(\Delta y\)。两者的差就是 \(o(\Delta x)\)。</p>

<div class="widget" data-widget="diff"><div class="w-head"><b>往里放大</b><span>窗口越窄，曲线越像切线</span></div></div>

<div class="callout callout-idea"><span class="tag">人话</span>
<p>“可微”就是“局部可以用直线代替”。放大镜倍数越高，曲线越直——这就是微分的全部直觉。</p></div>

<h2>三、近似计算</h2>

<p>由 \(\Delta y\approx \mathrm{d}y\) 得</p>

<p>\[
f(x_0+\Delta x)\approx f(x_0)+f'(x_0)\Delta x.
\]</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 2.13</span><span class="ex-title">开方</span></div>
  <div class="q"><p>近似计算 \(\sqrt{1.02}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>取 \(f(x)=\sqrt{x}\)，\(x_0=1\)，\(\Delta x=0.02\)。\(f'(1)=\frac12\)。</p>
    <p>\[
\sqrt{1.02}\approx 1+\frac12\times0.02=1.01.
\]</p>
    <p>真值约 1.00995，误差在 \(10^{-5}\) 量级。</p>
  </div></details>
</div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 2.14</span><span class="ex-title">对数与指数</span></div>
  <div class="q"><p>近似计算 \(\ln 1.02\) 与 \(e^{0.01}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(\ln(1+x)\approx x\)，所以 \(\ln1.02\approx0.02\)。</p>
    <p>\(e^{x}\approx1+x\)，所以 \(e^{0.01}\approx1.01\)。</p>
    <p>这两个近似其实就是等价无穷小 \(e^x-1\sim x\)、\(\ln(1+x)\sim x\) 的一阶版本。</p>
  </div></details>
</div>

<div class="callout callout-warn"><span class="tag">注意</span>
<p>近似公式只在 \(\Delta x\) 很小时好用。\(\sqrt{2}\) 用 \(x_0=1,\Delta x=1\) 去近似得 1.5，误差 0.086，就不能算“近似”了。此时应换更接近的 \(x_0\)，比如 1.96。</p></div>

<h2>四、一阶微分形式不变性</h2>

<p>无论 u 是自变量还是中间变量，都有</p>

<p>\[
\mathrm{d}y=f'(u)\,\mathrm{d}u.
\]</p>

<p>形式完全一样，这叫<strong>一阶微分形式不变性</strong>。它让换元、复合时的微分计算不容易出错，也是以后学不定积分凑微分的基础。</p>

<h2>五、自测</h2>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>设 \(y=x^{3}\)，\(x=2\)，\(\Delta x=0.01\)，求 \(\mathrm{d}y\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>先求 \(y'\)，再乘 \(\Delta x\)。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(y'=3x^{2}\)，在 x=2 处为 12，所以 \(\mathrm{d}y=12\times0.01=0.12\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>近似计算 \(\sqrt{0.98}\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>写成 \(\sqrt{1-0.02}\)，用 \(x_0=1\)。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\sqrt{1-0.02}\approx1+\frac12(-0.02)=0.99\)。真值约 0.98995。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>“可微”与“可导”是什么关系？</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>回想 \(\Delta y=A\Delta x+o(\Delta x)\) 与导数定义。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>一元函数里，两者等价。可微的定义式两边除以 \(\Delta x\) 取极限，得 A 就是导数；反过来，由导数存在可写出 \(\Delta y=f'(x)\Delta x+o(\Delta x)\)。</p><p>多元函数里两者不再等价，那是第 7 章的事。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '微分', tex: String.raw`\mathrm{d}y=f'(x)\,\mathrm{d}x,\qquad \Delta y=\mathrm{d}y+o(\Delta x)`, note: '微分是增量的线性主部。' },
    { name: '可微 ⇔ 可导', tex: String.raw`f\ \text{可微}\iff f\ \text{可导}`, note: '一元函数里两者等价。' },
    { name: '近似公式', tex: String.raw`f(x_0+\Delta x)\approx f(x_0)+f'(x_0)\Delta x`, note: 'Δx 越小越准。' },
    { name: '常用近似', tex: String.raw`\sqrt{1+x}\approx1+\frac{x}{2},\quad \ln(1+x)\approx x,\quad e^{x}\approx1+x`, note: 'x 很小时使用。' }
  ]
});

window.SECTIONS.push({
  id: 'ch2-drill',
  nav: '第 2 章自测',
  ch: 2,
  kind: 'drill',
  no: '测',
  title: '第 2 章 · 综合自测',
  tagline: '六道题：求导、隐函数、参数方程、切线、近似。',
  mins: 25,
  goals: ['检查链式法则是否真的顺了', '把求导、切线、近似串起来'],
  body: String.raw`
<p class="lead">这六题基本覆盖第 2 章的全部套路。如果第 1、2 题就卡住，说明 2.2 的链式法则还需要单独练。</p>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(y=\ln\left(x+\sqrt{1+x^{2}}\right)\) 的导数。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>外层 ln，内层 \(x+\sqrt{1+x^2}\)。内层导数：\(1+\frac{x}{\sqrt{1+x^2}}\)。</p>
      <p>\[
y'=\frac{1}{x+\sqrt{1+x^{2}}}\left(1+\frac{x}{\sqrt{1+x^{2}}}\right)
=\frac{1}{\sqrt{1+x^{2}}}.
\]</p>
      <p>这个结果很干净，值得记住：它是反双曲正弦的导数。</p>
    </div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>设 \(y=x^{2}e^{-x}\)，求 \(y''\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>\(y'=2xe^{-x}-x^{2}e^{-x}=e^{-x}(2x-x^{2})\)。</p>
      <p>再求导：\(y''=-e^{-x}(2x-x^{2})+e^{-x}(2-2x)=e^{-x}(x^{2}-4x+2)\)。</p>
      <p>整理时把 \(e^{-x}\) 提出来，能少错一半。</p>
    </div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>求曲线 \(y=x^{3}-2x\) 在 \(x=1\) 处的切线方程。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>\(y'=3x^{2}-2\)，\(y'(1)=1\)；点坐标为 \((1,-1)\)。</p>
      <p>切线：\(y+1=x-1\)，即 \(y=x-2\)。</p>
    </div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">04</span>设 \(x^{2}+y^{2}=4\)，求在点 \((1,\sqrt{3})\) 处的切线斜率。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>隐函数求导：\(2x+2yy'=0\)，\(y'=-\frac{x}{y}\)。</p>
      <p>代入得 \(y'=-\frac{1}{\sqrt{3}}=-\frac{\sqrt{3}}{3}\)。</p>
    </div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">05</span>设 \(x=\ln(1+t^{2})\)，\(y=t-\arctan t\)，求 \(\dfrac{\mathrm{d}y}{\mathrm{d}x}\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>\(x'=\frac{2t}{1+t^{2}}\)，\(y'=1-\frac{1}{1+t^{2}}=\frac{t^{2}}{1+t^{2}}\)。</p>
      <p>\[
\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{t^{2}}{1+t^{2}}\cdot\frac{1+t^{2}}{2t}=\frac{t}{2}.
\]</p>
    </div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">06</span>用微分近似计算 \(\sqrt[3]{1.02}\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>取 \(f(x)=x^{1/3}\)，\(x_0=1\)，\(\Delta x=0.02\)，\(f'(1)=\frac13\)。</p>
      <p>\[
\sqrt[3]{1.02}\approx1+\frac13\times0.02\approx1.0067.
\]</p>
    </div></details>
  </div>
</div>

<div class="callout callout-tip"><span class="tag">复盘</span>
<p>第 1 题错：链式法则不熟，回 2.2 把“拆层—逐层—相乘”重做三遍。<br>
第 2 题错：乘积法则或二阶导漏项，回 2.3。<br>
第 3、4 题错：切线与隐函数，回 2.1、2.4。<br>
第 5 题错：参数方程公式记反，回 2.4。<br>
第 6 题错：微分近似，回 2.5。</p></div>
`,
  formulas: []
});
