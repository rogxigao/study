/* 第 5 章：定积分及其应用 */
window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: '5-1',
  ch: 5,
  no: '5.1',
  nav: '概念与性质',
  title: '定积分：把面积切成无数条',
  tagline: '分割、近似、求和、取极限。四个字：黎曼和。',
  mins: 16,
  goals: ['说出定积分的定义与几何意义', '用性质比较、估值', '理解定积分是一个数'],
  body: String.raw`
<p class="lead">不定积分是一族函数，定积分是一个<strong>数</strong>。它的来历很朴素：把曲边梯形切成很多细条，用矩形代替，再让条数趋于无穷。</p>

<div class="widget" data-widget="area"><div class="w-head"><b>拖 n</b><span>矩形越细，和越接近真实面积</span></div></div>

<div class="callout callout-def"><span class="tag">定义</span>
<p>把 \([a,b]\) 分成 n 份，在第 i 份任取 \(\xi_i\)，作和 \(\sum f(\xi_i)\Delta x_i\)。若当最大区间长度趋于 0 时，这个和的极限存在且与分法、取点无关，就称此极限为 \(f\) 在 \([a,b]\) 上的<strong>定积分</strong>：</p>
<p>\[
\int_a^b f(x)\,\mathrm{d}x=\lim_{\lambda\to0}\sum_{i=1}^{n}f(\xi_i)\Delta x_i.
\]</p></div>

<p>几何上，\(f\ge0\) 时它是曲边梯形的面积；\(f&lt;0\) 时算出的是负值，所以定积分是“<strong>带符号的面积</strong>”。</p>

<h2>性质</h2>

<ul>
  <li>线性：\(\int(\alpha f+\beta g)=\alpha\int f+\beta\int g\)；</li>
  <li>区间可加：\(\int_a^b=\int_a^c+\int_c^b\)；</li>
  <li>保号：\(f\ge0\Rightarrow\int_a^b f\ge0\)；</li>
  <li>估值：\(m(b-a)\le\int_a^b f\le M(b-a)\)；</li>
  <li>中值定理：存在 \(\xi\)，使 \(\int_a^b f=f(\xi)(b-a)\)。</li>
</ul>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 5.1</span><span class="ex-title">用定义算一次</span></div>
  <div class="q"><p>用定义计算 \(\int_0^1 x\,\mathrm{d}x\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>把 \([0,1]\) 等分，\(\Delta x=\frac1n\)，取右端点 \(\xi_i=\frac in\)。</p>
    <p>\[
\sum_{i=1}^{n}\frac in\cdot\frac1n=\frac{1}{n^{2}}\cdot\frac{n(n+1)}{2}=\frac{n+1}{2n}\to\frac12.
\]</p>
    <p>所以积分值为 \(\frac12\)，与三角形面积一致。</p>
  </div></details>
</div>

<div class="callout callout-warn"><span class="tag">注意</span>
<p>定积分的值与积分变量用什么字母无关：\(\int_a^b f(x)\mathrm{d}x=\int_a^b f(t)\mathrm{d}t\)。换字母不会改变这个数。</p></div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>比较 \(\int_0^1 x\,\mathrm{d}x\) 与 \(\int_0^1 x^{2}\mathrm{d}x\) 的大小。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>在 \((0,1)\) 上 \(x&gt;x^{2}\)，由保号性，前者大。前者 \(\frac12\)，后者 \(\frac13\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>估计 \(\int_1^2\dfrac{1}{x}\mathrm{d}x\) 的范围。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>在 \([1,2]\) 上 \(\frac12\le\frac1x\le1\)，所以 \(\frac12\le\int_1^2\frac{\mathrm{d}x}{x}\le1\)。真值是 \(\ln2\approx0.693\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>若 \(f\) 为奇函数，\(\int_{-a}^{a}f(x)\mathrm{d}x\) 等于多少？</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>等于 0。奇函数在对称区间上正负面积抵消；偶函数则等于 \(2\int_0^a f\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '定积分定义', tex: String.raw`\int_a^b f(x)\mathrm{d}x=\lim_{\lambda\to0}\sum f(\xi_i)\Delta x_i`, note: '结果是一个数。' },
    { name: '区间可加', tex: String.raw`\int_a^b=\int_a^c+\int_c^b`, note: 'c 可以在区间外。' },
    { name: '估值', tex: String.raw`m(b-a)\le\int_a^b f\le M(b-a)`, note: 'm、M 是区间上的最小、最大值。' },
    { name: '积分中值定理', tex: String.raw`\int_a^b f=f(\xi)(b-a)`, note: 'f 连续时成立。' }
  ]
});

window.SECTIONS.push({
  id: '5-2',
  ch: 5,
  no: '5.2',
  nav: '基本公式',
  title: '微积分基本公式：一条桥',
  tagline: '变上限积分求导，把积分和导数接起来；牛顿–莱布尼茨公式，把定积分变成原函数相减。',
  mins: 15,
  goals: ['对变上限积分求导', '用 N–L 公式算定积分', '注意被积函数的变量'],
  body: String.raw`
<p class="lead">定义法算积分太慢。这一节的公式，把定积分和不定积分接上：只要找到原函数，代入上下限相减即可。</p>

<div class="callout callout-def"><span class="tag">定理</span>
<p>设 \(f\) 连续，\(\Phi(x)=\int_a^x f(t)\mathrm{d}t\)，则 \(\Phi'(x)=f(x)\)。</p>
<p>若上限是函数 \(u(x)\)，则</p>
<p>\[
\frac{\mathrm{d}}{\mathrm{d}x}\int_a^{u(x)}f(t)\mathrm{d}t=f(u(x))\,u'(x).
\]</p></div>

<p>这个 \(\Phi\) 就是 \(f\) 的一个原函数。由此得到<strong>牛顿–莱布尼茨公式</strong>：</p>

<p>\[
\int_a^b f(x)\mathrm{d}x=F(b)-F(a),\quad F'=f.
\]</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 5.2</span><span class="ex-title">变上限求导</span></div>
  <div class="q"><p>求 \(\dfrac{\mathrm{d}}{\mathrm{d}x}\displaystyle\int_0^{x^{2}}\sin t\,\mathrm{d}t\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>上限是 \(u=x^{2}\)，不是 x。套公式：</p>
    <p>\[
\frac{\mathrm{d}}{\mathrm{d}x}\int_0^{x^{2}}\sin t\,\mathrm{d}t=\sin(x^{2})\cdot2x.
\]</p>
    <p>常见错误：直接写成 \(\sin(x^{2})\)，漏掉上限的导数。</p>
  </div></details>
</div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 5.3</span><span class="ex-title">N–L 公式</span></div>
  <div class="q"><p>计算 \(\int_0^1 x^{2}\mathrm{d}x\) 与 \(\int_1^{e}\dfrac{\mathrm{d}x}{x}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(\int_0^1 x^{2}\mathrm{d}x=\left.\frac{x^{3}}{3}\right|_0^1=\frac13\)。</p>
    <p>\(\int_1^e\frac{\mathrm{d}x}{x}=\ln x\big|_1^e=1-0=1\)。</p>
    <p>上下限代入的顺序不能反，反了差一个负号。</p>
  </div></details>
</div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>计算 \(\int_0^{\pi/2}\cos x\,\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\sin x\big|_0^{\pi/2}=1-0=1\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求 \(\dfrac{\mathrm{d}}{\mathrm{d}x}\displaystyle\int_x^{1}\sqrt{1+t^{2}}\,\mathrm{d}t\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>下限含 x，先交换上下限，添一个负号。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>原式 \(=-\frac{\mathrm{d}}{\mathrm{d}x}\int_1^x\sqrt{1+t^{2}}\mathrm{d}t=-\sqrt{1+x^{2}}\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>计算 \(\int_0^1(e^{x}+1)\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\((e^{x}+x)\big|_0^1=(e+1)-1=e\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '变上限积分', tex: String.raw`\left(\int_a^x f(t)\mathrm{d}t\right)'=f(x)`, note: '被积变量用 t，别和 x 混。' },
    { name: '链式上限', tex: String.raw`\left(\int_a^{u(x)}f\right)'=f(u)u'`, note: '漏乘 u′ 是常见错。' },
    { name: '牛顿–莱布尼茨', tex: String.raw`\int_a^b f=F(b)-F(a)`, note: 'F 是 f 的任意原函数。' },
    { name: '下限含 x', tex: String.raw`\left(\int_x^b f\right)'=-f(x)`, note: '交换上下限添负号。' }
  ]
});

window.SECTIONS.push({
  id: '5-3',
  ch: 5,
  no: '5.3',
  nav: '换元与分部',
  title: '定积分的换元与分部',
  tagline: '换元必须换限；分部照旧，只是后面那项也要带上下限。',
  mins: 14,
  goals: ['换元时同步换积分限', '用分部计算定积分', '避免回代带来的错误'],
  body: String.raw`
<p class="lead">定积分的换元法和不定积分几乎一样，只多一件事：<strong>上下限跟着换</strong>。换了限就不必回代，算起来更省事。</p>

<div class="callout callout-def"><span class="tag">换元</span>
<p>令 \(x=\varphi(t)\)，则</p>
<p>\[
\int_a^b f(x)\mathrm{d}x=\int_{\alpha}^{\beta}f(\varphi(t))\varphi'(t)\mathrm{d}t,
\]</p>
<p>其中 \(\alpha,\beta\) 满足 \(\varphi(\alpha)=a\)，\(\varphi(\beta)=b\)。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 5.4</span><span class="ex-title">换元换限</span></div>
  <div class="q"><p>计算 \(\int_0^1 xe^{x^{2}}\mathrm{d}x\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>令 \(u=x^{2}\)，\(\mathrm{d}u=2x\mathrm{d}x\)。\(x=0\Rightarrow u=0\)，\(x=1\Rightarrow u=1\)。</p>
    <p>\[
\int_0^1 xe^{x^{2}}\mathrm{d}x=\frac12\int_0^1 e^{u}\mathrm{d}u=\frac12(e-1).
\]</p>
    <p>如果忘了换限，回代成 \(\frac12e^{x^{2}}\) 再代 0、1，结果一样，但多一步、容易错。</p>
  </div></details>
</div>

<div class="callout callout-def"><span class="tag">分部</span>
<p>\[
\int_a^b u\,\mathrm{d}v=\left.uv\right|_a^b-\int_a^b v\,\mathrm{d}u.
\]</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 5.5</span><span class="ex-title">分部</span></div>
  <div class="q"><p>计算 \(\int_1^{e}\ln x\,\mathrm{d}x\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>取 \(u=\ln x\)，\(\mathrm{d}v=\mathrm{d}x\)，则 \(v=x\)。</p>
    <p>\[
\int_1^e\ln x\,\mathrm{d}x=x\ln x\big|_1^e-\int_1^e1\,\mathrm{d}x=e-(e-1)=1.
\]</p>
  </div></details>
</div>

<div class="callout callout-warn"><span class="tag">对称性</span>
<p>遇到对称区间，先看奇偶：奇函数积分为 0，偶函数翻倍。这一招能省掉一大半计算。</p></div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>计算 \(\int_0^1\dfrac{x}{1+x^{2}}\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>令 \(u=1+x^{2}\)，得 \(\frac12\ln2\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>计算 \(\int_{-1}^{1}x^{3}\cos x\,\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>被积函数是奇函数（\(x^{3}\) 奇、\(\cos x\) 偶），对称区间积分为 0。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>计算 \(\int_0^{\pi/2}x\sin x\,\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>分部：\(-x\cos x\big|_0^{\pi/2}+\int_0^{\pi/2}\cos x\mathrm{d}x=0+1=1\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '定积分换元', tex: String.raw`\int_a^b f(x)\mathrm{d}x=\int_{\alpha}^{\beta}f(\varphi(t))\varphi'(t)\mathrm{d}t`, note: '换元同时换限。' },
    { name: '定积分分部', tex: String.raw`\int_a^b u\mathrm{d}v=uv\big|_a^b-\int_a^b v\mathrm{d}u`, note: '边界项别漏。' },
    { name: '奇偶性', tex: String.raw`\int_{-a}^{a}f=0\ (\text{奇}),\quad =2\int_0^a f\ (\text{偶})`, note: '先看对称再动手。' },
    { name: '常用', tex: String.raw`\int_0^{\pi/2}\sin x\mathrm{d}x=1,\quad \int_0^{\pi/2}\cos x\mathrm{d}x=1`, note: '基本结果。' }
  ]
});

window.SECTIONS.push({
  id: '5-4',
  ch: 5,
  no: '5.4',
  nav: '广义积分',
  title: '广义积分：无穷区间与无界函数',
  tagline: '先按有限区间算，再让边界取极限。极限存在才叫收敛。',
  mins: 13,
  goals: ['计算无穷区间上的积分', '判断瑕积分收敛性', '记住 p 积分结论'],
  body: String.raw`
<p class="lead">积分区间无限长，或者函数在端点附近无界，都不能直接代上下限。办法是：先算到有限处，再取极限。</p>

<div class="callout callout-def"><span class="tag">定义</span>
<p>\[
\int_a^{+\infty}f(x)\mathrm{d}x=\lim_{b\to+\infty}\int_a^b f(x)\mathrm{d}x.
\]</p>
<p>若极限存在，称积分<strong>收敛</strong>，否则<strong>发散</strong>。无界函数的瑕积分同理，在瑕点处取极限。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 5.6</span><span class="ex-title">无穷区间</span></div>
  <div class="q"><p>计算 \(\int_1^{+\infty}\dfrac{\mathrm{d}x}{x^{2}}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\[
\int_1^b\frac{\mathrm{d}x}{x^{2}}=1-\frac1b\to1\quad(b\to\infty).
\]</p>
    <p>所以积分收敛，值为 1。虽然区域无限长，面积却是有限的。</p>
  </div></details>
</div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 5.7</span><span class="ex-title">瑕积分</span></div>
  <div class="q"><p>计算 \(\int_0^1\dfrac{\mathrm{d}x}{\sqrt{x}}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>x=0 是瑕点。\(\int_{\varepsilon}^1x^{-1/2}\mathrm{d}x=2-2\sqrt{\varepsilon}\to2\)。</p>
    <p>积分收敛，值为 2。</p>
  </div></details>
</div>

<div class="callout callout-tip"><span class="tag">p 积分</span>
<p>\(\int_1^{+\infty}\dfrac{\mathrm{d}x}{x^{p}}\) 当 \(p&gt;1\) 收敛；\(\int_0^1\dfrac{\mathrm{d}x}{x^{p}}\) 当 \(p&lt;1\) 收敛。两个方向正好相反，别记混。</p></div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>判断 \(\int_1^{+\infty}\dfrac{\mathrm{d}x}{x}\) 的敛散性。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\ln b\to+\infty\)，发散。p=1 是分界点。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>计算 \(\int_0^{+\infty}e^{-x}\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\left.-e^{-x}\right|_0^b=1-e^{-b}\to1\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>计算 \(\int_0^1\ln x\,\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\int_{\varepsilon}^1\ln x\mathrm{d}x=x\ln x-x\big|_{\varepsilon}^1=-1-\varepsilon\ln\varepsilon+\varepsilon\to-1\)。收敛，值为 −1。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '无穷区间', tex: String.raw`\int_a^{+\infty}f=\lim_{b\to+\infty}\int_a^b f`, note: '先有限，再极限。' },
    { name: '瑕积分', tex: String.raw`\int_a^b f=\lim_{\varepsilon\to0^+}\int_{a+\varepsilon}^b f`, note: '瑕点处取极限。' },
    { name: 'p 积分（无穷）', tex: String.raw`\int_1^{\infty}\frac{\mathrm{d}x}{x^{p}}\ \text{收敛}\iff p>1`, note: 'p=1 发散。' },
    { name: 'p 积分（瑕点）', tex: String.raw`\int_0^1\frac{\mathrm{d}x}{x^{p}}\ \text{收敛}\iff p<1`, note: '与无穷区间相反。' }
  ]
});

window.SECTIONS.push({
  id: '5-5',
  ch: 5,
  no: '5.5',
  nav: '定积分的应用',
  title: '定积分的应用：面积、体积、消费者剩余',
  tagline: '先画图，再定上下限，最后写“上减下”。',
  mins: 16,
  goals: ['求两曲线围成的面积', '求旋转体体积', '算消费者剩余'],
  body: String.raw`
<p class="lead">应用题难不在积分，在<strong>把图形翻译成上下限和被积函数</strong>。画图这一步不能省。</p>

<h2>一、面积</h2>

<p>若在 \([a,b]\) 上 \(f(x)\ge g(x)\)，则两曲线之间的面积为</p>

<p>\[
S=\int_a^b[f(x)-g(x)]\,\mathrm{d}x.
\]</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 5.8</span><span class="ex-title">两曲线围成的面积</span></div>
  <div class="q"><p>求 \(y=x\) 与 \(y=x^{2}\) 围成的面积。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>交点：\(x=x^{2}\Rightarrow x=0,1\)。在 \((0,1)\) 上 \(x&gt;x^{2}\)。</p>
    <p>\[
S=\int_0^1(x-x^{2})\mathrm{d}x=\frac12-\frac13=\frac16.
\]</p>
  </div></details>
</div>

<h2>二、旋转体体积</h2>

<p>曲线 \(y=f(x)\) 绕 x 轴旋转一周，体积</p>

<p>\[
V=\pi\int_a^b f^{2}(x)\,\mathrm{d}x.
\]</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 5.9</span><span class="ex-title">体积</span></div>
  <div class="q"><p>求 \(y=x^{2}\) 在 \([0,1]\) 上绕 x 轴旋转所得体积。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\[
V=\pi\int_0^1x^{4}\mathrm{d}x=\frac{\pi}{5}.
\]</p>
  </div></details>
</div>

<h2>三、消费者剩余</h2>

<p>需求函数 \(P=P(Q)\)，均衡量 \(Q_0\)、均衡价 \(P_0=P(Q_0)\)。消费者剩余是需求曲线下方、价格线上方的面积：</p>

<p>\[
CS=\int_0^{Q_0}[P(Q)-P_0]\,\mathrm{d}Q.
\]</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 5.10</span><span class="ex-title">消费者剩余</span></div>
  <div class="q"><p>需求 \(P=80-2Q\)，均衡价 \(P_0=40\)。求消费者剩余。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>由 \(80-2Q=40\) 得 \(Q_0=20\)。</p>
    <p>\[
CS=\int_0^{20}(80-2Q-40)\mathrm{d}Q=\int_0^{20}(40-2Q)\mathrm{d}Q=800-400=400.
\]</p>
  </div></details>
</div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(y=x^{2}\)、\(x=1\) 与 x 轴围成的面积。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\int_0^1x^{2}\mathrm{d}x=\frac13\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求 \(y=x\) 在 \([0,1]\) 上绕 x 轴旋转的体积。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\pi\int_0^1x^{2}\mathrm{d}x=\frac{\pi}{3}\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>需求 \(P=100-2Q\)，均衡价 \(P_0=60\)，求消费者剩余。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(Q_0=20\)。\(CS=\int_0^{20}(40-2Q)\mathrm{d}Q=800-400=400\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '面积', tex: String.raw`S=\int_a^b[f(x)-g(x)]\mathrm{d}x`, note: '上减下。' },
    { name: '旋转体体积', tex: String.raw`V=\pi\int_a^b f^{2}(x)\mathrm{d}x`, note: '绕 x 轴。' },
    { name: '消费者剩余', tex: String.raw`CS=\int_0^{Q_0}[P(Q)-P_0]\mathrm{d}Q`, note: '需求曲线下、价格线上。' },
    { name: '收益与剩余', tex: String.raw`R(Q)=P(Q)\cdot Q,\qquad CS=\int_0^{Q_0}[P(Q)-P_0]\mathrm{d}Q`, note: '收益不是需求曲线下的面积。' }
  ]
});

window.SECTIONS.push({
  id: 'ch5-drill',
  ch: 5,
  kind: 'drill',
  no: '测',
  nav: '第 5 章自测',
  title: '第 5 章 · 综合自测',
  tagline: '五道题：N–L、换元、分部、广义、面积与体积。',
  mins: 22,
  goals: ['把定积分的三套工具串起来', '应用题先画图再积分'],
  body: String.raw`
<p class="lead">定积分题先看结构，再动手。区间对称先想奇偶，换元先想限，分部先选 u。</p>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>计算 \(\int_0^1x^{2}\mathrm{d}x+\int_1^2x^{2}\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>合并为 \(\int_0^2x^{2}\mathrm{d}x=\frac83\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>计算 \(\int_0^1x\sqrt{1-x^{2}}\,\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>令 \(u=1-x^{2}\)，得 \(\frac12\cdot\frac23=\frac13\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>计算 \(\int_1^{e}x\ln x\,\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>分部：\(\frac{x^{2}}{2}\ln x-\frac{x^{2}}{4}\) 在 1 到 e 上，得 \(\frac{e^{2}+1}{4}\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">04</span>判断 \(\int_1^{+\infty}\dfrac{\mathrm{d}x}{x^{3}}\) 是否收敛；若收敛求值。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>p=3&gt;1，收敛。\(\int_1^b x^{-3}\mathrm{d}x=\frac12(1-b^{-2})\to\frac12\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">05</span>求 \(y=x^{2}\) 与 \(y=2x\) 围成的面积。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>交点 \(x=0,2\)，在 (0,2) 上 \(2x&gt;x^{2}\)。面积 \(\int_0^2(2x-x^{2})\mathrm{d}x=4-\frac83=\frac43\)。</p></div></details>
  </div>
</div>
`,
  formulas: []
});
