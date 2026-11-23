/* 第 2 章（上）：2.1 - 2.3 */
window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: '2-1',
  nav: '导数概念',
  ch: 2,
  no: '2.1',
  title: '导数：把“瞬时”算出来',
  tagline: '先算一段的平均变化率，再让这段缩到零。割线的极限就是切线。',
  mins: 18,
  goals: [
    '用定义算几个基本函数的导数',
    '说清导数的几何意义与经济意义',
    '记住可导必连续，连续不一定可导',
    '会写切线方程'
  ],
  body: String.raw`
<p class="lead">速度、边际、切线斜率，看起来是三件事，其实是同一个极限。这一节的任务，是把“瞬时变化率”从一个模糊的词，变成一个能算的数。</p>

<h2>一、从平均到瞬时</h2>

<p>物体从 \(t_0\) 到 \(t_0+\Delta t\)，位移增量是 \(\Delta s=s(t_0+\Delta t)-s(t_0)\)，平均速度是 \(\frac{\Delta s}{\Delta t}\)。</p>

<p>可“瞬时速度”要求 \(\Delta t=0\)，而 0 不能作分母。办法是：<strong>不算 \(\Delta t=0\)，算 \(\Delta t\to0\) 的极限</strong>。</p>

<p>\[
v(t_0)=\lim_{\Delta t\to0}\frac{s(t_0+\Delta t)-s(t_0)}{\Delta t}.
\]</p>

<p>几何上是同一回事：曲线上两点连成割线，让第二点沿曲线滑向第一点，割线的极限位置就是切线，割线斜率的极限就是切线斜率。</p>

<div class="widget" data-widget="deriv"><div class="w-head"><b>拖 h，看割线贴上去</b><span>也可以换函数、换切点</span></div></div>

<h2>二、定义</h2>

<div class="callout callout-def"><span class="tag">定义</span>
<p>设 \(y=f(x)\) 在 \(x_0\) 的某邻域内有定义。若极限</p>
<p>\[
\lim_{\Delta x\to0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}
\]</p>
<p>存在，则称 \(f\) 在 \(x_0\) 处<strong>可导</strong>，该极限称为 \(f\) 在 \(x_0\) 处的<strong>导数</strong>，记作</p>
<p>\[
f'(x_0),\quad y'\big|_{x=x_0},\quad \left.\frac{\mathrm{d}y}{\mathrm{d}x}\right|_{x=x_0}.
\]</p></div>

<p>把 \(x_0\) 换成任意的 x，就得到<strong>导函数</strong> \(f'(x)\)。所以“求导数”和“求导函数”是一回事，前者是后者在某点的值。</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 2.1</span><span class="ex-title">用定义算</span></div>
  <div class="q"><p>用定义求 \(f(x)=x^{2}\) 在 \(x=1\) 处的导数。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\[
\frac{f(1+\Delta x)-f(1)}{\Delta x}
=\frac{(1+\Delta x)^{2}-1}{\Delta x}
=\frac{2\Delta x+(\Delta x)^{2}}{\Delta x}
=2+\Delta x.
\]</p>
    <p>令 \(\Delta x\to0\)，得 \(f'(1)=2\)。</p>
    <p>同样的算法对任意 \(x_0\) 做一遍，得 \(f'(x_0)=2x_0\)，即 \((x^{2})'=2x\)。</p>
  </div></details>
</div>

<h2>三、几何意义：切线斜率</h2>

<p>\(f'(x_0)\) 就是曲线 \(y=f(x)\) 在点 \((x_0,f(x_0))\) 处切线的斜率。于是切线方程是</p>

<p>\[
y-f(x_0)=f'(x_0)(x-x_0).
\]</p>

<p>法线与之垂直，斜率是 \(-\frac{1}{f'(x_0)}\)（当 \(f'(x_0)\ne0\)）。</p>

<div class="callout callout-warn"><span class="tag">易错</span>
<p>“切线”不是“只有一个交点”的直线。\(y=x^3\) 在原点的切线是 x 轴，但它还穿过曲线；切线的定义是<strong>割线的极限位置</strong>，不是交点个数。</p></div>

<h2>四、可导与连续：单向的门</h2>

<div class="callout callout-def"><span class="tag">定理</span>
<p>若 \(f\) 在 \(x_0\) 处可导，则 \(f\) 在 \(x_0\) 处连续。反之不成立。</p></div>

<p>反例是 \(f(x)=|x|\) 在 0 点。它连续，但</p>

<p>\[
f(0^+)=\lim_{x\to0^+}\frac{x-0}{x}=1,\qquad
f(0^-)=\lim_{x\to0^-}\frac{-x-0}{x}=-1.
\]</p>

<p>左右导数不相等，所以不可导。几何上，曲线在这里有一个“尖”，没有唯一的切线。</p>

<p>由此得到判断分段函数在分界点可导的标准流程：<strong>先看连续（不连续必不可导），再分别算左右导数，相等才可导</strong>。</p>

<h2>五、经济意义：边际</h2>

<p>若 \(C(Q)\) 是成本函数，则 \(C'(Q)\) 叫<strong>边际成本</strong>，近似表示“产量为 Q 时，再多生产一单位所增加的成本”。同理有边际收益 \(R'(Q)\)、边际利润 \(L'(Q)\)。</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 2.2</span><span class="ex-title">边际成本</span></div>
  <div class="q"><p>设 \(C(Q)=100+2Q+0.01Q^{2}\)，求 \(C'(100)\) 并解释其含义。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(C'(Q)=2+0.02Q\)，所以 \(C'(100)=2+2=4\)。</p>
    <p>含义：产量为 100 时，再生产一件，成本大约增加 4。注意“大约”——边际是瞬时变化率，实际增量还要加上二阶的小项。</p>
  </div></details>
</div>

<div class="callout callout-note"><span class="tag">补充</span>
<p>经济学里的<strong>弹性</strong>也由导数定义：\(\eta=\dfrac{f'(x)\cdot x}{f(x)}\)，表示 x 变动 1% 时 y 变动的百分比。第 3 章讲导数应用时会用到。</p></div>

<h2>六、自测</h2>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>用定义求 \(f(x)=\sqrt{x}\) 在 \(x=1\) 处的导数。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>分子有理化：\(\sqrt{1+\Delta x}-1\) 乘共轭。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>\[
\frac{\sqrt{1+\Delta x}-1}{\Delta x}
=\frac{1}{\sqrt{1+\Delta x}+1}\to\frac12.
\]</p>
      <p>所以 \(f'(1)=\frac12\)。与公式 \((\sqrt{x})'=\frac{1}{2\sqrt{x}}\) 在 x=1 处一致。</p>
    </div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>讨论 \(f(x)=|x-1|\) 在 \(x=1\) 处是否可导。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>算左右导数，别只看图像“尖不尖”。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>右导数 1，左导数 −1，不相等，所以不可导。它在 1 处连续，是“连续但不可导”的标准例子。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>求曲线 \(y=x^{2}\) 在点 \((1,1)\) 处的切线方程。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>先求斜率 \(y'(1)\)，再套点斜式。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(y'=2x\)，\(y'(1)=2\)。切线：\(y-1=2(x-1)\)，即 \(y=2x-1\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '导数定义', tex: String.raw`f'(x_0)=\lim_{\Delta x\to0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}`, note: '平均变化率的极限。' },
    { name: '切线方程', tex: String.raw`y-f(x_0)=f'(x_0)(x-x_0)`, note: '斜率就是导数。' },
    { name: '可导 ⇒ 连续', tex: String.raw`f\ \text{在}\ x_0\ \text{可导}\ \Rightarrow\ f\ \text{在}\ x_0\ \text{连续}`, note: '反之不成立，反例 |x|。' },
    { name: '左右导数', tex: String.raw`f'(x_0)\ \text{存在}\iff f'_-(x_0)=f'_+(x_0)`, note: '分段函数分界点必查。' }
  ]
});

window.SECTIONS.push({
  id: '2-2',
  nav: '求导法则',
  ch: 2,
  no: '2.2',
  title: '求导法则：把公式接成流水线',
  tagline: '四则解决“拼”，链式解决“套”。由外向内，逐层求导，再相乘。',
  mins: 18,
  goals: [
    '熟练使用乘积、商的求导法则',
    '把复合函数拆层，用链式法则求导',
    '记住基本导数表'
  ],
  body: String.raw`
<p class="lead">有了定义，理论上什么都能算，但每题都展开 \(\Delta x\) 太慢。这一节给你一套流水线：基本公式打底，四则运算拼接，链式法则套娃。</p>

<h2>一、四则运算</h2>

<div class="callout callout-def"><span class="tag">法则</span>
<p>\[
(u\pm v)'=u'\pm v',\qquad (uv)'=u'v+uv',\qquad \left(\frac{u}{v}\right)'=\frac{u'v-uv'}{v^{2}}\ (v\ne0).
\]</p>
<p>常数可以提出来：\((Cu)'=Cu'\)。</p></div>

<div class="callout callout-warn"><span class="tag">别想当然</span>
<p>\((uv)'\ne u'v'\)，\(\left(\frac uv\right)'\ne\frac{u'}{v'}\)。乘积法则的记法是“前导后不导，加上前不导后导”。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 2.3</span><span class="ex-title">乘积与商</span></div>
  <div class="q"><p>求 \(y=x^{2}e^{x}\) 与 \(y=\dfrac{x}{1+x^{2}}\) 的导数。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>第一个：\(y'=2x\cdot e^{x}+x^{2}\cdot e^{x}=e^{x}(x^{2}+2x)\)。</p>
    <p>第二个：\[
y'=\frac{1\cdot(1+x^{2})-x\cdot2x}{(1+x^{2})^{2}}=\frac{1-x^{2}}{(1+x^{2})^{2}}.
\]</p>
    <p>商的法则里，分子是“分子导 × 分母 − 分子 × 分母导”，顺序别反，反了会差一个负号。</p>
  </div></details>
</div>

<h2>二、链式法则：一层一层剥</h2>

<div class="callout callout-def"><span class="tag">法则</span>
<p>若 \(y=f(u)\)，\(u=g(x)\) 都可导，则</p>
<p>\[
\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{\mathrm{d}y}{\mathrm{d}u}\cdot\frac{\mathrm{d}u}{\mathrm{d}x}=f'(g(x))\cdot g'(x).
\]</p></div>

<p>操作上分三步：<strong>拆层 → 逐层求导 → 相乘</strong>。由外向内，最外层先动，里面原样抄下来，最后乘上内层的导数。</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 2.4</span><span class="ex-title">两层</span></div>
  <div class="q"><p>求 \(y=\sin(x^{2})\) 与 \(y=\ln(1+x^{2})\) 的导数。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(y=\sin(x^2)\)：外层 sin，内层 \(x^2\)。\(y'=\cos(x^{2})\cdot2x=2x\cos(x^{2})\)。</p>
    <p>\(y=\ln(1+x^{2})\)：外层 ln，内层 \(1+x^2\)。\(y'=\frac{1}{1+x^{2}}\cdot2x=\frac{2x}{1+x^{2}}\)。</p>
    <p>sin 的导数是 cos，ln 的导数是 1/u，都只作用于“整个方框”。</p>
  </div></details>
</div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 2.5</span><span class="ex-title">三层</span></div>
  <div class="q"><p>求 \(y=e^{\sin 3x}\) 的导数。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>拆：\(u=3x\)，\(v=\sin u\)，\(y=e^{v}\)。</p>
    <p>逐层：\(y'=e^{v}\cdot\cos u\cdot3=3e^{\sin 3x}\cos 3x\)。</p>
    <p>三层就乘三次。多一层少一层，是这类题最常见的失分点。</p>
  </div></details>
</div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 2.6</span><span class="ex-title">幂套幂</span></div>
  <div class="q"><p>求 \(y=(x^{2}+1)^{10}\) 的导数。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>外层是十次幂，内层 \(x^2+1\)：\(y'=10(x^{2}+1)^{9}\cdot2x=20x(x^{2}+1)^{9}\)。</p>
    <p>先把里面当一个整体 u，求完外层再乘 u'。不要展开十次方。</p>
  </div></details>
</div>

<h2>三、基本导数表</h2>

<p>这张表要熟到不用想：</p>

<ul>
  <li>\((x^{\alpha})'=\alpha x^{\alpha-1}\)，\((a^{x})'=a^{x}\ln a\)，\((e^{x})'=e^{x}\)；</li>
  <li>\((\ln x)'=\frac1x\)，\((\log_a x)'=\frac{1}{x\ln a}\)；</li>
  <li>\((\sin x)'=\cos x\)，\((\cos x)'=-\sin x\)，\((\tan x)'=\sec^{2}x\)；</li>
  <li>\((\arcsin x)'=\frac{1}{\sqrt{1-x^{2}}}\)，\((\arctan x)'=\frac{1}{1+x^{2}}\)。</li>
</ul>

<div class="callout callout-tip"><span class="tag">技巧</span>
<p>遇到根号先写成分数指数：\(\sqrt{x}=x^{1/2}\)，\(\frac{1}{x^{2}}=x^{-2}\)。用幂函数公式，比套根号公式稳。</p></div>

<h2>四、自测</h2>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(y=\ln(\sin x)\) 的导数。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>外层 ln，内层 sin x。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(y'=\frac{1}{\sin x}\cdot\cos x=\cot x\)。定义域要求 \(\sin x&gt;0\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求 \(y=\sqrt{1+x^{2}}\) 的导数。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>写成 \((1+x^2)^{1/2}\)。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(y'=\frac12(1+x^{2})^{-1/2}\cdot2x=\frac{x}{\sqrt{1+x^{2}}}\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>求 \(y=e^{-x}\cos 2x\) 的导数。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>乘积法则 + 两次链式。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>\(y'=-e^{-x}\cos2x+e^{-x}(-2\sin2x)=-e^{-x}(\cos2x+2\sin2x)\)。</p>
      <p>两个因子各自的“内层导数”分别是 −1 和 2，别漏。</p>
    </div></details>
  </div>
</div>
`,
  formulas: [
    { name: '乘积与商', tex: String.raw`(uv)'=u'v+uv',\qquad \left(\frac uv\right)'=\frac{u'v-uv'}{v^{2}}`, note: '顺序不能反。' },
    { name: '链式法则', tex: String.raw`\frac{\mathrm{d}y}{\mathrm{d}x}=\frac{\mathrm{d}y}{\mathrm{d}u}\cdot\frac{\mathrm{d}u}{\mathrm{d}x}`, note: '由外向内，逐层相乘。' },
    { name: '幂与指数', tex: String.raw`(x^{\alpha})'=\alpha x^{\alpha-1},\quad (e^{x})'=e^{x},\quad (a^{x})'=a^{x}\ln a`, note: '根号先写成分数指数。' },
    { name: '三角与反三角', tex: String.raw`(\sin x)'=\cos x,\quad (\tan x)'=\sec^{2}x,\quad (\arctan x)'=\frac{1}{1+x^{2}}`, note: 'cos 求导带负号。' }
  ]
});

window.SECTIONS.push({
  id: '2-3',
  nav: '高阶导数',
  ch: 2,
  no: '2.3',
  title: '高阶导数：再求一次导',
  tagline: '一阶导数是变化率，二阶导数是“变化率的变化率”。物理里是加速度，经济里是边际的变化。',
  mins: 14,
  goals: [
    '会逐次求二阶、三阶导数',
    '记住几个常用的 n 阶导数公式',
    '理解二阶导的物理与经济含义'
  ],
  body: String.raw`
<p class="lead">你现在正学到这一节。它本身不难，难的是前面 2.2 的链式法则还没顺——高阶导数只是<strong>把求导再做一遍</strong>，前一层的错会被放大。</p>

<h2>一、定义与记号</h2>

<div class="callout callout-def"><span class="tag">定义</span>
<p>若 \(y'=f'(x)\) 仍可导，则它的导数称为 \(f\) 的<strong>二阶导数</strong>，记作</p>
<p>\[
y'',\quad f''(x),\quad \frac{\mathrm{d}^{2}y}{\mathrm{d}x^{2}}.
\]</p>
<p>类似地有三阶、四阶…… \(n\) 阶导数记作 \(y^{(n)}\)。二阶及以上统称高阶导数。</p></div>

<p>记号 \(\frac{\mathrm{d}^2y}{\mathrm{d}x^2}\) 不是“dy 的平方除以 dx 的平方”，它是一个整体记号，提醒你“对 x 求了两次导”。</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 2.7</span><span class="ex-title">逐次求</span></div>
  <div class="q"><p>设 \(y=x^{3}-2x^{2}+5\)，求 \(y'\) 与 \(y''\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(y'=3x^{2}-4x\)；再求一次：\(y''=6x-4\)。</p>
    <p>如果继续：\(y'''=6\)，\(y^{(4)}=0\)。多项式求导几次就归零，次数等于它的次数。</p>
  </div></details>
</div>

<h2>二、几个常用的 n 阶导数</h2>

<div class="callout callout-tip"><span class="tag">记</span>
<p>\[
(e^{x})^{(n)}=e^{x},\qquad (e^{ax})^{(n)}=a^{n}e^{ax},
\]</p>
<p>\[
(\sin x)^{(n)}=\sin\left(x+\frac{n\pi}{2}\right),\qquad (\cos x)^{(n)}=\cos\left(x+\frac{n\pi}{2}\right),
\]</p>
<p>\[
(x^{n})^{(n)}=n!,\qquad (\ln x)^{(n)}=\frac{(-1)^{n-1}(n-1)!}{x^{n}}.
\]</p></div>

<p>sin 和 cos 的 n 阶导，本质是“每求一次导，相位往前转 90°”。求四次回到自己，周期为 4。</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 2.8</span><span class="ex-title">指数型</span></div>
  <div class="q"><p>设 \(y=e^{2x}\)，求 \(y^{(n)}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(y'=2e^{2x}\)，\(y''=4e^{2x}\)，\(y'''=8e^{2x}\)……每求一次多乘一个 2，所以 \(y^{(n)}=2^{n}e^{2x}\)。</p>
    <p>对比 \((e^{x})^{(n)}=e^{x}\)：内层系数 a 会以 \(a^n\) 的形式跳出来。</p>
  </div></details>
</div>

<h2>三、二阶导在说什么</h2>

<div class="widget" data-widget="higher"><div class="w-head"><b>拖时间 t</b><span>位置、速度、加速度同时看</span></div></div>

<ul>
  <li><strong>物理</strong>：位置 \(s(t)\) 的一阶导是速度，二阶导是加速度。加速度为正，说明速度在增加。</li>
  <li><strong>经济</strong>：成本 \(C(Q)\) 的一阶导是边际成本，二阶导 \(C''(Q)\) 表示“边际成本本身变化得快不快”。第 3 章判断曲线凹凸，用的就是二阶导的符号。</li>
</ul>

<div class="callout callout-warn"><span class="tag">易错</span>
<p>求二阶导时，一阶导里的每一项都要再求一次，别只对“看起来复杂”的那项动手。比如 \(y=xe^{x}\)，\(y'=e^{x}+xe^{x}\)，再求导得 \(y''=e^{x}+e^{x}+xe^{x}=e^{x}(x+2)\)。</p></div>

<h2>四、自测</h2>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>设 \(y=\ln(1+x)\)，求 \(y''\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>先求 \(y'=\frac{1}{1+x}\)，再把它看成 \((1+x)^{-1}\)。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(y'=(1+x)^{-1}\)，\(y''=-(1+x)^{-2}=-\frac{1}{(1+x)^{2}}\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>设 \(y=xe^{x}\)，求 \(y''\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>一阶导用乘积法则，得到两项，两项都要再求导。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(y'=e^{x}+xe^{x}=e^{x}(1+x)\)；\(y''=e^{x}(1+x)+e^{x}=e^{x}(x+2)\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>设 \(y=\sin^{2}x\)，求 \(y''\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>先求一阶导，注意是两层；也可以先用倍角公式化简。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>\(y'=2\sin x\cos x=\sin 2x\)，所以 \(y''=2\cos 2x\)。</p>
      <p>若用 \(\sin^2x=\frac{1-\cos2x}{2}\)，求导两次同样得 \(2\cos2x\)。</p>
    </div></details>
  </div>
</div>
`,
  formulas: [
    { name: '二阶导数', tex: String.raw`y''=(y')'=\frac{\mathrm{d}^{2}y}{\mathrm{d}x^{2}}`, note: '对一阶导再求一次。' },
    { name: '指数型 n 阶导', tex: String.raw`(e^{ax})^{(n)}=a^{n}e^{ax}`, note: '每求一次多乘 a。' },
    { name: '三角 n 阶导', tex: String.raw`(\sin x)^{(n)}=\sin\left(x+\frac{n\pi}{2}\right)`, note: '每求一次相位转 90°。' },
    { name: '对数 n 阶导', tex: String.raw`(\ln x)^{(n)}=\frac{(-1)^{n-1}(n-1)!}{x^{n}}`, note: '符号交替，阶乘固定。' }
  ]
});
