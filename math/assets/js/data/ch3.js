/* 第 3 章：微分中值定理及其应用 */
window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: '3-1',
  ch: 3,
  no: '3.1',
  nav: '中值定理',
  title: '中值定理：把两点的差，换成一点的导数',
  tagline: '罗尔、拉格朗日、柯西，一条线串下来。它们不负责算，负责“证明存在”。',
  mins: 16,
  goals: ['说清三个定理的条件与结论', '会验证定理并求 ξ', '用拉格朗日证不等式'],
  body: String.raw`
<p class="lead">这一章开始，导数从“算”转向“用”。中值定理是座桥：它把 \(f(b)-f(a)\) 这种“两点的差”，换成了某一点 \(f'(\xi)\) 的“瞬时值”。</p>

<div class="callout callout-idea"><span class="tag">人话</span>
<p>一段路的平均时速是 60，如果速度连续变化，那么途中至少有一瞬间，仪表盘正好指着 60。这就是拉格朗日中值定理。</p></div>

<h2>一、三个定理</h2>

<div class="callout callout-def"><span class="tag">定理</span>
<p><strong>罗尔</strong>：\(f\) 在 \([a,b]\) 连续，在 \((a,b)\) 可导，且 \(f(a)=f(b)\)，则存在 \(\xi\in(a,b)\)，使 \(f'(\xi)=0\)。</p>
<p><strong>拉格朗日</strong>：同样的连续、可导条件下，存在 \(\xi\in(a,b)\)，使</p>
<p>\[
f(b)-f(a)=f'(\xi)(b-a).
\]</p>
<p><strong>柯西</strong>：\(f,g\) 都满足连续、可导，且 \(g'(x)\ne0\)，则存在 \(\xi\)，使</p>
<p>\[
\frac{f(b)-f(a)}{g(b)-g(a)}=\frac{f'(\xi)}{g'(\xi)}.
\]</p></div>

<p>几何上，拉格朗日说的是：曲线上总有一点的切线，平行于连接两端点的弦。罗尔是它的特例（弦水平）；柯西是两个函数版本的“斜率之比”。</p>

<div class="callout callout-warn"><span class="tag">条件</span>
<p>三个条件缺一不可。\(f(x)=|x|\) 在 \([-1,1]\) 上连续、两端相等，但在 0 处不可导，就找不到 \(f'(\xi)=0\) 的点。</p></div>

<h2>二、验证与求 ξ</h2>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 3.1</span><span class="ex-title">罗尔定理</span></div>
  <div class="q"><p>验证 \(f(x)=x^{2}-2x-3\) 在 \([-1,3]\) 上满足罗尔定理，并求 \(\xi\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>多项式，连续可导；\(f(-1)=1+2-3=0\)，\(f(3)=9-6-3=0\)，两端相等。</p>
    <p>\(f'(x)=2x-2=0\Rightarrow x=1\)。取 \(\xi=1\in(-1,3)\)，确实有 \(f'(\xi)=0\)。</p>
  </div></details>
</div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 3.2</span><span class="ex-title">用拉格朗日证不等式</span></div>
  <div class="q"><p>证明当 \(x&gt;0\) 时，\(e^{x}&gt;1+x\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>令 \(f(t)=e^{t}\)，在 \([0,x]\) 上用拉格朗日：存在 \(\xi\in(0,x)\)，使</p>
    <p>\[
e^{x}-e^{0}=e^{\xi}(x-0).
\]</p>
    <p>因为 \(\xi&gt;0\)，\(e^{\xi}&gt;1\)，所以 \(e^{x}-1&gt;x\)，即 \(e^{x}&gt;1+x\)。</p>
    <p>套路：把要证的不等式整理成“函数在两点的差”，再换成导数。</p>
  </div></details>
</div>

<h2>三、自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>验证 \(f(x)=x^{3}-3x\) 在 \([-\sqrt{3},\sqrt{3}]\) 上满足罗尔定理，并求所有 \(\xi\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>先算两端函数值，再解 \(f'(x)=0\)。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(f(-\sqrt3)=f(\sqrt3)=0\)，连续可导。\(f'=3x^{2}-3=0\Rightarrow x=\pm1\)，两个 \(\xi\) 都在区间内。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>用拉格朗日证明：对任意实数 \(a,b\)，\(|\sin a-\sin b|\le|a-b|\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>对 \(\sin t\) 在 \(a,b\) 之间用定理，注意 \(|\cos\xi|\le1\)。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\sin a-\sin b=\cos\xi\,(a-b)\)，取绝对值，\(|\cos\xi|\le1\)，得证。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>证明当 \(x&gt;0\) 时，\(\ln(1+x)&lt;x\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>对 \(\ln(1+t)\) 在 \([0,x]\) 上用拉格朗日。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\ln(1+x)-\ln1=\frac{1}{1+\xi}x\)，其中 \(\xi&gt;0\)，故 \(\frac{1}{1+\xi}&lt;1\)，所以 \(\ln(1+x)&lt;x\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '罗尔定理', tex: String.raw`f(a)=f(b)\ \Rightarrow\ \exists\xi,\ f'(\xi)=0`, note: '连续、可导、两端相等。' },
    { name: '拉格朗日中值定理', tex: String.raw`f(b)-f(a)=f'(\xi)(b-a)`, note: '切线平行于弦。' },
    { name: '柯西中值定理', tex: String.raw`\frac{f(b)-f(a)}{g(b)-g(a)}=\frac{f'(\xi)}{g'(\xi)}`, note: '要求 g′≠0。' },
    { name: '推论', tex: String.raw`f'(x)\equiv0\ \Rightarrow\ f(x)\equiv C`, note: '导数恒为零，函数是常数。' }
  ]
});

window.SECTIONS.push({
  id: '3-2',
  ch: 3,
  no: '3.2',
  nav: '洛必达法则',
  title: '洛必达法则：未定式的通用解法',
  tagline: '只对 0/0 和 ∞/∞ 生效。用之前先代值，确认是不是未定式。',
  mins: 14,
  goals: ['判断能不能用洛必达', '处理 0·∞、∞−∞、1^∞ 型', '知道法则失效的情形'],
  body: String.raw`
<p class="lead">第 1 章算极限靠变形，这一节给你一台“通用机器”：分子分母同时求导。但它有门槛，也有失灵的时候。</p>

<div class="callout callout-def"><span class="tag">法则</span>
<p>若 \(x\to x_0\) 时 \(f(x)\to0\)、\(g(x)\to0\)（或都趋于无穷），在去心邻域内可导且 \(g'(x)\ne0\)，并且</p>
<p>\[
\lim\frac{f'(x)}{g'(x)}=A\quad(\text{或 }\infty),
\]</p>
<p>则 \(\lim\dfrac{f(x)}{g(x)}=A\)。\(x\to\infty\) 时同理。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 3.3</span><span class="ex-title">基本用法</span></div>
  <div class="q"><p>求 \(\lim\limits_{x\to0}\dfrac{e^{x}-1}{x}\) 与 \(\lim\limits_{x\to1}\dfrac{\ln x}{x-1}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>两题都是 \(0/0\)。第一题：\(\dfrac{e^{x}}{1}\to1\)。第二题：\(\dfrac{1/x}{1}\to1\)。</p>
    <p>其实这两题用等价无穷小更快：\(e^x-1\sim x\)，\(\ln x\sim x-1\)。洛必达是保底手段。</p>
  </div></details>
</div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 3.4</span><span class="ex-title">先变形，再洛必达</span></div>
  <div class="q"><p>求 \(\lim\limits_{x\to0^{+}}x\ln x\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>这是 \(0\cdot\infty\)，不是未定式比值。改写成 \(\dfrac{\ln x}{1/x}\)，变成 \(\infty/\infty\)。</p>
    <p>求导：\(\dfrac{1/x}{-1/x^{2}}=-x\to0\)。所以原极限为 0。</p>
  </div></details>
</div>

<div class="callout callout-warn"><span class="tag">陷阱</span>
<p>① 不是 \(0/0\) 或 \(\infty/\infty\) 就<strong>不能</strong>用。② 用完若极限不存在，不能反推原极限不存在——比如 \(\lim\limits_{x\to\infty}\dfrac{x+\sin x}{x}=1\)，但导数之比 \(1+\cos x\) 没有极限。</p></div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(\lim\limits_{x\to0}\dfrac{1-\cos x}{x^{2}}\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(0/0\)，求导得 \(\dfrac{\sin x}{2x}\to\dfrac12\)。也可用 \(1-\cos x\sim\frac{x^2}{2}\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求 \(\lim\limits_{x\to0^{+}}x^{x}\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>写成 \(e^{x\ln x}\)，指数部分的极限上一题刚算过。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(x\ln x\to0\)，所以 \(x^{x}=e^{x\ln x}\to e^{0}=1\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>求 \(\lim\limits_{x\to0}\dfrac{\tan x-x}{x^{3}}\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>两次洛必达：第一次 \(\dfrac{\sec^{2}x-1}{3x^{2}}=\dfrac{\tan^{2}x}{3x^{2}}\to\dfrac13\)。</p><p>用等价无穷小 \(\tan x-x\sim\frac{x^{3}}{3}\) 也能直接得 \(\frac13\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '洛必达（0/0）', tex: String.raw`\lim\frac{f}{g}=\lim\frac{f'}{g'}`, note: '先确认是 0/0 或 ∞/∞。' },
    { name: '0·∞ 型', tex: String.raw`f g=\frac{f}{1/g}\ \text{或}\ \frac{g}{1/f}`, note: '化成比值再用。' },
    { name: '1^∞ 型', tex: String.raw`u^{v}=e^{v\ln u}`, note: '先取对数，指数部分再求极限。' },
    { name: '常用结论', tex: String.raw`\lim_{x\to0}\frac{\tan x-x}{x^{3}}=\frac13,\quad \lim_{x\to0}\frac{x-\sin x}{x^{3}}=\frac16`, note: '泰勒展开的快捷结果。' }
  ]
});

window.SECTIONS.push({
  id: '3-3',
  ch: 3,
  no: '3.3',
  nav: '单调、极值与最值',
  title: '单调性与极值：看导数变不变号',
  tagline: '导数为正就往上走，为负就往下走；变号的地方才是极值点。',
  mins: 16,
  goals: ['用 f′ 的符号写单调区间', '用第一、第二充分条件判极值', '求闭区间上的最值'],
  body: String.raw`
<p class="lead">单调性看一阶导的<strong>符号</strong>，极值看一阶导的<strong>变号</strong>。这两件事分清楚，这一节就不会乱。</p>

<div class="callout callout-def"><span class="tag">判别</span>
<p>在区间内若 \(f'(x)&gt;0\)，则 \(f\) 单调递增；若 \(f'(x)&lt;0\)，则单调递减。</p>
<p>可导点取极值的必要条件是 \(f'(x_0)=0\)（或导数不存在）。</p></div>

<p><strong>第一充分条件</strong>：\(f'\) 在 \(x_0\) 左侧为正、右侧为负，取极大；左负右正，取极小；不变号，不是极值。</p>

<p><strong>第二充分条件</strong>：\(f'(x_0)=0\)，若 \(f''(x_0)&lt;0\) 取极大，\(f''(x_0)&gt;0\) 取极小。</p>

<div class="widget" data-widget="monotone"><div class="w-head"><b>拖参数 a</b><span>看三次函数的峰谷怎么移动</span></div></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 3.5</span><span class="ex-title">完整流程</span></div>
  <div class="q"><p>求 \(f(x)=x^{3}-3x\) 的单调区间与极值。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(f'(x)=3(x-1)(x+1)\)，驻点 \(x=\pm1\)。</p>
    <p>符号：\((-\infty,-1)\) 正，\((-1,1)\) 负，\((1,+\infty)\) 正。</p>
    <p>所以增区间 \((-\infty,-1)\)、\((1,+\infty)\)，减区间 \((-1,1)\)。</p>
    <p>\(x=-1\) 左正右负，极大值 \(f(-1)=2\)；\(x=1\) 左负右正，极小值 \(f(1)=-2\)。</p>
  </div></details>
</div>

<div class="callout callout-tip"><span class="tag">最值</span>
<p>闭区间 \([a,b]\) 上求最值：算出所有驻点、不可导点、端点的函数值，<strong>比大小</strong>。不要只盯驻点。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 3.6</span><span class="ex-title">闭区间最值</span></div>
  <div class="q"><p>求 \(f(x)=x^{3}-3x\) 在 \([0,3]\) 上的最大值与最小值。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>驻点 \(x=1\)（\(x=-1\) 不在区间内）。候选值：\(f(0)=0\)，\(f(1)=-2\)，\(f(3)=18\)。</p>
    <p>最大值 18（在右端点），最小值 \(-2\)（在 \(x=1\)）。</p>
  </div></details>
</div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(f(x)=x^{3}-6x^{2}+9x\) 的单调区间。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(f'=3(x-1)(x-3)\)。增区间 \((-\infty,1)\)、\((3,+\infty)\)，减区间 \((1,3)\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求 \(f(x)=x+\dfrac1x\)（\(x&gt;0\)）的最小值。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(f'=1-\frac{1}{x^{2}}=0\Rightarrow x=1\)。\(f''=2/x^{3}&gt;0\)，故为极小值 \(f(1)=2\)，也是最小值。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>\(f(x)=x^{3}\) 在 \(x=0\) 处有极值吗？</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>没有。\(f'(0)=0\)，但 \(f'\) 在 0 两侧都为正，不变号。它是单调递增的“平台点”，不是极值点。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '单调判定', tex: String.raw`f'(x)>0\ \Rightarrow\ \text{增},\qquad f'(x)<0\ \Rightarrow\ \text{减}`, note: '在区间内成立即可。' },
    { name: '极值必要条件', tex: String.raw`f'(x_0)=0\ \text{或不存在}`, note: '只是候选点。' },
    { name: '第二充分条件', tex: String.raw`f'(x_0)=0,\ f''(x_0)<0\ \Rightarrow\ \text{极大}`, note: 'f″>0 为极小。' },
    { name: '闭区间最值', tex: String.raw`M=\max\{f(a),f(b),f(\text{驻点})\}`, note: '端点也要算。' }
  ]
});

window.SECTIONS.push({
  id: '3-4',
  ch: 3,
  no: '3.4',
  nav: '凹凸与渐近线',
  title: '凹凸性、拐点与渐近线',
  tagline: '一阶导管升降，二阶导管弯曲。拐点是凹凸互换的地方。',
  mins: 13,
  goals: ['用 f″ 判断凹凸', '求拐点', '找水平、垂直、斜渐近线'],
  body: String.raw`
<p class="lead">一阶导告诉你“往哪走”，二阶导告诉你“怎么弯”。画图之前，这两层信息都要有。</p>

<div class="callout callout-def"><span class="tag">定义</span>
<p>若 \(f''(x)&gt;0\)，曲线是<strong>凹</strong>的（开口向上，曲线在切线上方）；若 \(f''(x)&lt;0\)，曲线是<strong>凸</strong>的（开口向下）。</p>
<p>凹凸性改变的点叫<strong>拐点</strong>，它要求 \(f''\) 在该点两侧<strong>变号</strong>。</p></div>

<div class="callout callout-warn"><span class="tag">易错</span>
<p>\(f''(x_0)=0\) 只是拐点的候选条件，不一定是拐点。比如 \(y=x^{4}\) 在 0 处 \(y''=12x^{2}=0\)，但两侧都为正，不是拐点。</p></div>

<h2>渐近线</h2>

<ul>
  <li><strong>垂直</strong>：\(x\to a\) 时 \(f\to\infty\)，则 \(x=a\) 是垂直渐近线；</li>
  <li><strong>水平</strong>：\(x\to\infty\) 时 \(f\to b\)，则 \(y=b\)；</li>
  <li><strong>斜</strong>：若 \(k=\lim\limits_{x\to\infty}\dfrac{f(x)}{x}\)，\(b=\lim\limits_{x\to\infty}[f(x)-kx]\) 都存在，则 \(y=kx+b\)。</li>
</ul>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 3.7</span><span class="ex-title">凹凸与拐点</span></div>
  <div class="q"><p>求 \(y=x^{3}-3x^{2}\) 的凹凸区间与拐点。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(y'=3x^{2}-6x\)，\(y''=6x-6=6(x-1)\)。</p>
    <p>\(x&lt;1\) 时 \(y''&lt;0\)，凸；\(x&gt;1\) 时 \(y''&gt;0\)，凹。</p>
    <p>\(x=1\) 两侧变号，且 \(y(1)=1-3=-2\)，拐点 \((1,-2)\)。</p>
  </div></details>
</div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 3.8</span><span class="ex-title">斜渐近线</span></div>
  <div class="q"><p>求 \(y=\dfrac{x^{2}+1}{x}\) 的渐近线。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>先化简：\(y=x+\dfrac1x\)。\(x\to0\) 时 \(y\to\infty\)，垂直渐近线 \(x=0\)。</p>
    <p>\(x\to\infty\) 时 \(y-x=\frac1x\to0\)，所以斜渐近线 \(y=x\)。</p>
  </div></details>
</div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>判断 \(y=\ln x\) 的凹凸性。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(y'=1/x\)，\(y''=-1/x^{2}&lt;0\)，所以在定义域内是凸的，没有拐点。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求 \(y=\dfrac{1}{x-1}\) 的渐近线。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(x\to1\) 时趋于无穷，垂直渐近线 \(x=1\)；\(x\to\infty\) 时趋于 0，水平渐近线 \(y=0\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>求 \(y=\dfrac{x^{2}}{x+1}\) 的斜渐近线。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>做除法：\(\frac{x^{2}}{x+1}=x-1+\frac{1}{x+1}\)。\(x\to\infty\) 时余项趋于 0，斜渐近线 \(y=x-1\)；另有垂直渐近线 \(x=-1\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '凹凸判定', tex: String.raw`f''(x)>0\ \text{凹},\qquad f''(x)<0\ \text{凸}`, note: '凹是开口向上。' },
    { name: '拐点条件', tex: String.raw`f''(x_0)=0\ \text{且两侧变号}`, note: '只等于零不够。' },
    { name: '斜渐近线', tex: String.raw`k=\lim\frac{f(x)}{x},\quad b=\lim[f(x)-kx]`, note: '两个极限都要存在。' },
    { name: '垂直渐近线', tex: String.raw`x=a\ \text{若}\ \lim_{x\to a}f(x)=\infty`, note: '通常出现在分母零点。' }
  ]
});

window.SECTIONS.push({
  id: '3-5',
  ch: 3,
  no: '3.5',
  nav: '导数与经济',
  title: '导数在经济学里：边际与弹性',
  tagline: '边际是“多做一个的代价”，弹性是“价格动 1%，需求动几 %”。',
  mins: 15,
  goals: ['解释边际成本、边际收益', '会算需求弹性', '求最大利润与最优定价'],
  body: String.raw`
<p class="lead">经管类的高数，最后都要落到这几个词上：边际、弹性、最大利润。它们全是导数。</p>

<h2>一、边际</h2>

<p>成本 \(C(Q)\) 的导数 \(C'(Q)\) 叫<strong>边际成本</strong>，近似表示“产量为 Q 时，再多生产一单位增加的成本”。同理有边际收益 \(R'(Q)\)、边际利润 \(L'(Q)\)。</p>

<div class="callout callout-idea"><span class="tag">人话</span>
<p>边际不是“平均值”，是“下一单位”的价格。平均成本看总数除以产量，边际成本看再做一个。</p></div>

<h2>二、弹性</h2>

<div class="callout callout-def"><span class="tag">定义</span>
<p>函数 \(y=f(x)\) 在 x 处的<strong>弹性</strong>为</p>
<p>\[
\eta=\frac{f'(x)}{f(x)}\,x.
\]</p>
<p>它表示 x 变动 1% 时，y 大约变动 \(\eta\)%。需求函数的价格弹性通常为负，讨论时看绝对值。</p></div>

<p>\(|\eta|&gt;1\) 叫富有弹性：降价能增加总收入；\(|\eta|&lt;1\) 叫缺乏弹性：涨价反而增收。</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 3.9</span><span class="ex-title">最大利润</span></div>
  <div class="q"><p>需求 \(P=80-2Q\)，成本 \(C(Q)=200+30Q\)。求利润最大时的产量、价格与利润。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>收益 \(R=PQ=80Q-2Q^{2}\)，利润</p>
    <p>\[
L=80Q-2Q^{2}-200-30Q=-2Q^{2}+50Q-200.
\]</p>
    <p>\(L'=-4Q+50=0\Rightarrow Q=12.5\)。\(L''=-4&lt;0\)，是极大值也是最大值。</p>
    <p>此时 \(P=80-25=55\)，\(L=-312.5+625-200=112.5\)。</p>
  </div></details>
</div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 3.10</span><span class="ex-title">需求弹性</span></div>
  <div class="q"><p>需求 \(Q=40-2P\)，求 \(P=10\) 时的需求价格弹性。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(Q(10)=20\)，\(\dfrac{\mathrm{d}Q}{\mathrm{d}P}=-2\)。</p>
    <p>\[
\eta=-2\cdot\frac{10}{20}=-1.
\]</p>
    <p>单位弹性：价格小幅变动，总收入几乎不变。</p>
  </div></details>
</div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>需求 \(Q=40-2P\)，求收益最大时的价格。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(R=PQ=40P-2P^{2}\)，\(R'=40-4P=0\Rightarrow P=10\)。此时 \(Q=20\)，\(R=200\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>\(C(Q)=100+2Q+0.01Q^{2}\)，求 \(Q=100\) 时的边际成本。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(C'=2+0.02Q\)，\(C'(100)=4\)。含义：产量 100 时再生产一件，成本约增 4。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>若需求富有弹性，降价会让总收入增加还是减少？</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>增加。富有弹性时需求量增长的比例大于价格下降的比例，总收入上升。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '边际成本', tex: String.raw`MC=C'(Q)`, note: '再生产一单位的成本。' },
    { name: '利润最大化', tex: String.raw`L'(Q)=0,\quad L''(Q)<0`, note: '还要检查可行性。' },
    { name: '需求弹性', tex: String.raw`\eta=\frac{\mathrm{d}Q}{\mathrm{d}P}\cdot\frac{P}{Q}`, note: '通常为负值。' },
    { name: '收益与弹性', tex: String.raw`|\eta|>1\ \text{降价增收};\quad |\eta|<1\ \text{涨价增收}`, note: '看绝对值。' }
  ]
});

window.SECTIONS.push({
  id: 'ch3-drill',
  ch: 3,
  kind: 'drill',
  no: '测',
  nav: '第 3 章自测',
  title: '第 3 章 · 综合自测',
  tagline: '五道题：中值定理、洛必达、极值、拐点、利润。',
  mins: 22,
  goals: ['检查定理的条件是否记牢', '把计算与证明各过一遍'],
  body: String.raw`
<p class="lead">先合上书做，做完再对。卡住的地方，回对应小节看例题，不要直接背答案。</p>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>验证 \(f(x)=x^{3}-3x\) 在 \([0,2]\) 上满足拉格朗日定理，并求 \(\xi\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>多项式连续可导。\(\dfrac{f(2)-f(0)}{2-0}=\dfrac{2-0}{2}=1\)。</p>
      <p>解 \(f'(\xi)=3\xi^{2}-3=1\)，得 \(\xi=\dfrac{2}{\sqrt3}\approx1.15\in(0,2)\)。</p>
    </div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求 \(\lim\limits_{x\to0}\dfrac{e^{x}-1-x}{x^{2}}\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>两次洛必达：\(\dfrac{e^{x}-1}{2x}\to\dfrac12\)。也可用 \(e^{x}=1+x+\frac{x^{2}}{2}+o(x^{2})\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>求 \(f(x)=x^{3}-3x^{2}+1\) 的极值。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>\(f'=3x(x-2)\)，驻点 0、2。\(f''=6x-6\)。</p>
      <p>\(f''(0)=-6&lt;0\)，极大 \(f(0)=1\)；\(f''(2)=6&gt;0\)，极小 \(f(2)=8-12+1=-3\)。</p>
    </div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">04</span>求 \(y=xe^{-x}\) 的凹凸区间与拐点。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>\(y'=e^{-x}(1-x)\)，\(y''=e^{-x}(x-2)\)。</p>
      <p>\(x&lt;2\) 时 \(y''&lt;0\)（凸），\(x&gt;2\) 时 \(y''&gt;0\)（凹）。拐点 \((2,2e^{-2})\)。</p>
    </div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">05</span>需求 \(P=100-2Q\)，成本 \(C=20Q+100\)。求最大利润。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>\(L=(100-2Q)Q-20Q-100=-2Q^{2}+80Q-100\)。</p>
      <p>\(L'=-4Q+80=0\Rightarrow Q=20\)，\(P=60\)，\(L=-800+1600-100=700\)。</p>
    </div></details>
  </div>
</div>
`,
  formulas: []
});
