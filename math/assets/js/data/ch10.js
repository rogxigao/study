/* 第 10 章：微分方程与差分方程 */
window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: '10-1',
  ch: 10,
  no: '10.1',
  nav: '基本概念',
  title: '微分方程：含导数的方程',
  tagline: '阶看最高阶导，通解带任意常数，特解由初始条件定。',
  mins: 13,
  goals: ['判断阶与线性', '验证一个函数是不是解', '理解通解与特解'],
  body: String.raw`
<p class="lead">前面是“已知函数求导数”，这里是“已知导数关系求函数”。方向反过来，答案带任意常数。</p>

<div class="callout callout-def"><span class="tag">定义</span>
<p>含未知函数及其导数的方程叫<strong>微分方程</strong>。出现的最高阶导数的阶数，叫方程的<strong>阶</strong>。</p>
<p>解中含任意常数、且个数等于阶数的，叫<strong>通解</strong>；由初始条件确定常数后的解，叫<strong>特解</strong>。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 10.1</span><span class="ex-title">验证解</span></div>
  <div class="q"><p>验证 \(y=Ce^{2x}\) 是 \(y'=2y\) 的通解，并求 \(y(0)=3\) 的特解。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(y'=2Ce^{2x}=2y\)，代入成立。含一个任意常数，方程是一阶，所以是通解。</p>
    <p>代入 \(x=0,y=3\)：\(C=3\)，特解 \(y=3e^{2x}\)。</p>
  </div></details>
</div>

<div class="widget" data-widget="slope"><div class="w-head"><b>拖 k</b><span>斜率场里的解曲线，沿着小线段走</span></div></div>

<div class="callout callout-warn"><span class="tag">注意</span>
<p>通解里的 C 不能少；特解必须满足初始条件。验证时把解代回原方程，两边恒等才算对。</p></div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>指出 \(y''+3y'-4y=0\) 的阶数。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>最高是二阶导，二阶线性齐次方程。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>验证 \(y=x^{2}\) 是否是 \(y'=2x\) 的解；是通解吗？</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>是解。但不是通解，通解应为 \(y=x^{2}+C\)，还差一个任意常数。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>\(y'=y\) 的通解是什么？</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(y=Ce^{x}\)。分离变量即可，下一节细讲。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '微分方程', tex: String.raw`F(x,y,y',\dots,y^{(n)})=0`, note: '最高阶导的阶数即阶。' },
    { name: '通解', tex: String.raw`y=\varphi(x,C_1,\dots,C_n)`, note: '常数个数等于阶数。' },
    { name: '初始条件', tex: String.raw`y(x_0)=y_0,\ y'(x_0)=y_0'`, note: '定出特解。' },
    { name: '一阶线性', tex: String.raw`y'+P(x)y=Q(x)`, note: '下一节给公式。' }
  ]
});

window.SECTIONS.push({
  id: '10-2',
  ch: 10,
  no: '10.2',
  nav: '可分离变量',
  title: '可分离变量：把 y 和 x 分到两边',
  tagline: '能写成 g(y)dy=f(x)dx，就两边积分。别忘常数，也别丢特解。',
  mins: 14,
  goals: ['识别可分离方程', '两边积分求通解', '用初始条件定特解'],
  body: String.raw`
<p class="lead">这是最容易上手的一类方程：把含 y 的放一边，含 x 的放另一边，然后各自积分。</p>

<div class="callout callout-def"><span class="tag">方法</span>
<p>若 \(\dfrac{\mathrm{d}y}{\mathrm{d}x}=f(x)g(y)\)，则</p>
<p>\[
\int\frac{\mathrm{d}y}{g(y)}=\int f(x)\,\mathrm{d}x+C.
\]</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 10.2</span><span class="ex-title">指数增长</span></div>
  <div class="q"><p>解 \(y'=xy\)，并求 \(y(0)=1\) 的特解。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>分离：\(\dfrac{\mathrm{d}y}{y}=x\,\mathrm{d}x\)。</p>
    <p>积分：\(\ln|y|=\dfrac{x^{2}}{2}+C_1\)，即 \(y=Ce^{x^{2}/2}\)。</p>
    <p>代入 \(y(0)=1\)，得 \(C=1\)，特解 \(y=e^{x^{2}/2}\)。</p>
    <p>常数写成 \(e^{C_1}\) 更省事，最后统一记作 C。</p>
  </div></details>
</div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 10.3</span><span class="ex-title">会丢解的类型</span></div>
  <div class="q"><p>解 \(y'=y^{2}\)，且 \(y(0)=1\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>分离：\(y^{-2}\mathrm{d}y=\mathrm{d}x\)，积分得 \(-y^{-1}=x+C\)，即 \(y=-\dfrac{1}{x+C}\)。</p>
    <p>代入初值：\(1=-\frac1C\Rightarrow C=-1\)，所以 \(y=\dfrac{1}{1-x}\)。</p>
    <p>定义域是 \(x&lt;1\)，解在 \(x=1\) 处爆破。分离变量时除以 \(y^{2}\)，要单独检查 \(y=0\) 是不是解——它是，但不符合本题初值。</p>
  </div></details>
</div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>解 \(y'=e^{x-y}\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(e^{y}\mathrm{d}y=e^{x}\mathrm{d}x\)，积分得 \(e^{y}=e^{x}+C\)，即 \(y=\ln(e^{x}+C)\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>解 \(y'=2xy\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\frac{\mathrm{d}y}{y}=2x\mathrm{d}x\)，\(\ln|y|=x^{2}+C\)，\(y=Ce^{x^{2}}\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>解 \(y'=\dfrac{y}{x}\)（\(x&gt;0\)）。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\frac{\mathrm{d}y}{y}=\frac{\mathrm{d}x}{x}\)，\(\ln y=\ln x+C\)，即 \(y=Cx\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '可分离方程', tex: String.raw`\frac{\mathrm{d}y}{\mathrm{d}x}=f(x)g(y)`, note: '先分离再积分。' },
    { name: '积分形式', tex: String.raw`\int\frac{\mathrm{d}y}{g(y)}=\int f(x)\mathrm{d}x+C`, note: '两边各积各的。' },
    { name: '指数增长', tex: String.raw`y'=ky\ \Rightarrow\ y=Ce^{kx}`, note: 'k>0 增长，k<0 衰减。' },
    { name: '注意', tex: String.raw`g(y)=0\ \text{时可能丢解}`, note: '单独检查常数解。' }
  ]
});

window.SECTIONS.push({
  id: '10-3',
  ch: 10,
  no: '10.3',
  nav: '一阶线性方程',
  title: '一阶线性：套公式之前先化成标准形',
  tagline: 'y′+P(x)y=Q(x)，乘积分因子 e^(∫P)，左边就变成 (ye^(∫P))′。',
  mins: 15,
  goals: ['化成标准形', '用积分因子公式求解', '处理 y′ 前有系数的情况'],
  body: String.raw`
<p class="lead">一阶线性方程有现成公式，但前提是写成标准形：\(y'\) 前面的系数必须是 1。</p>

<div class="callout callout-def"><span class="tag">公式</span>
<p>对 \(y'+P(x)y=Q(x)\)，</p>
<p>\[
y=e^{-\int P\mathrm{d}x}\left(\int Q\,e^{\int P\mathrm{d}x}\mathrm{d}x+C\right).
\]</p>
<p>不用死记，记住“乘积分因子”的过程更可靠。</p></div>

<p>推导很短：两边乘 \(\mu=e^{\int P\mathrm{d}x}\)，左边变成 \((\mu y)'=\mu Q\)，再积分即可。</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 10.4</span><span class="ex-title">标准形</span></div>
  <div class="q"><p>解 \(y'+y=x\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>P=1，Q=x，积分因子 \(e^{x}\)。两边乘 \(e^{x}\)：</p>
    <p>\[
(ye^{x})'=xe^{x}\Rightarrow ye^{x}=\int xe^{x}\mathrm{d}x=(x-1)e^{x}+C.
\]</p>
    <p>所以 \(y=x-1+Ce^{-x}\)。</p>
  </div></details>
</div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 10.5</span><span class="ex-title">先除以系数</span></div>
  <div class="q"><p>解 \(2y'-4y=e^{2x}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>先除以 2：\(y'-2y=\frac12e^{2x}\)。P=−2，积分因子 \(e^{-2x}\)。</p>
    <p>\[
(ye^{-2x})'=\frac12\Rightarrow ye^{-2x}=\frac x2+C.
\]</p>
    <p>所以 \(y=e^{2x}\left(\dfrac x2+C\right)\)。</p>
    <p>不先除系数，直接套公式会整体错一个倍数。</p>
  </div></details>
</div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>解 \(y'+2xy=2x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>积分因子 \(e^{x^{2}}\)，\((ye^{x^{2}})'=2xe^{x^{2}}\)，得 \(y=1+Ce^{-x^{2}}\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>解 \(y'+y=1\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\((ye^{x})'=e^{x}\)，\(ye^{x}=e^{x}+C\)，\(y=1+Ce^{-x}\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>解 \(y'-y=e^{x}\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>积分因子 \(e^{-x}\)，\((ye^{-x})'=1\)，\(y=e^{x}(x+C)\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '标准形', tex: String.raw`y'+P(x)y=Q(x)`, note: 'y′ 系数必须为 1。' },
    { name: '通解公式', tex: String.raw`y=e^{-\int P}\left(\int Qe^{\int P}+C\right)`, note: '括号里先积分再加 C。' },
    { name: '积分因子', tex: String.raw`\mu=e^{\int P\mathrm{d}x}`, note: '乘完左边是 (μy)′。' },
    { name: '常见', tex: String.raw`y'+y=x\ \Rightarrow\ y=x-1+Ce^{-x}`, note: '记住一个样板。' }
  ]
});

window.SECTIONS.push({
  id: '10-4',
  ch: 10,
  no: '10.4',
  nav: '二阶常系数',
  title: '二阶常系数线性方程：先解特征方程',
  tagline: '齐次看特征根，非齐次再加一个特解。三种根，三种写法。',
  mins: 17,
  goals: ['解三种特征根情形', '写齐次通解', '用待定系数求非齐次特解'],
  body: String.raw`
<p class="lead">\(y''+py'+qy=0\) 的解法，全在代数方程 \(r^{2}+pr+q=0\) 上。根的类型决定解的形状。</p>

<div class="callout callout-def"><span class="tag">齐次</span>
<p>特征方程 \(r^{2}+pr+q=0\)：</p>
<ul>
  <li>两个不同实根 \(r_1,r_2\)：\(y=C_1e^{r_1x}+C_2e^{r_2x}\)；</li>
  <li>重根 r：\(y=(C_1+C_2x)e^{rx}\)；</li>
  <li>共轭复根 \(\alpha\pm\beta i\)：\(y=e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)\)。</li>
</ul></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 10.6</span><span class="ex-title">三种根</span></div>
  <div class="q"><p>解 \(y''-3y'+2y=0\) 与 \(y''+y=0\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>第一题：\(r^{2}-3r+2=0\)，根 1、2，通解 \(y=C_1e^{x}+C_2e^{2x}\)。</p>
    <p>第二题：\(r^{2}+1=0\)，根 \(\pm i\)，通解 \(y=C_1\cos x+C_2\sin x\)。</p>
  </div></details>
</div>

<h2>非齐次</h2>

<p>\(y''+py'+qy=f(x)\) 的通解 = 齐次通解 + 一个特解 \(y^*\)。若 \(f(x)=e^{\lambda x}P_n(x)\)，设 \(y^*=x^{k}e^{\lambda x}Q_n(x)\)，k 是 λ 作为特征根的重数。</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 10.7</span><span class="ex-title">待定系数</span></div>
  <div class="q"><p>求 \(y''-3y'+2y=e^{3x}\) 的通解。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>齐次通解 \(C_1e^{x}+C_2e^{2x}\)。λ=3 不是特征根，设 \(y^*=Ae^{3x}\)。</p>
    <p>代入：\((9-9+2)Ae^{3x}=e^{3x}\)，得 \(A=\frac12\)。</p>
    <p>通解 \(y=C_1e^{x}+C_2e^{2x}+\frac12e^{3x}\)。</p>
  </div></details>
</div>

<div class="callout callout-warn"><span class="tag">共振</span>
<p>若 λ 正好是特征根，特解要乘 x（重根乘 \(x^{2}\)）。比如 \(y''-y=e^{x}\)，λ=1 是单根，应设 \(y^*=Axe^{x}\)，不能只设 \(Ae^{x}\)。</p></div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>解 \(y''+4y=0\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>根 \(\pm2i\)，\(y=C_1\cos2x+C_2\sin2x\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>解 \(y''-2y'+y=0\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>重根 1，\(y=(C_1+C_2x)e^{x}\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>\(y''-y=e^{x}\) 的特解应设成什么形式？</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>λ=1 是特征根（单根），设 \(y^*=Axe^{x}\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '特征方程', tex: String.raw`r^{2}+pr+q=0`, note: '根决定解的形状。' },
    { name: '相异实根', tex: String.raw`y=C_1e^{r_1x}+C_2e^{r_2x}`, note: '最常见。' },
    { name: '重根', tex: String.raw`y=(C_1+C_2x)e^{rx}`, note: '多乘一个 x。' },
    { name: '复根', tex: String.raw`y=e^{\alpha x}(C_1\cos\beta x+C_2\sin\beta x)`, note: 'α±βi。' }
  ]
});

window.SECTIONS.push({
  id: '10-5',
  ch: 10,
  no: '10.5',
  nav: '差分方程初步',
  title: '差分方程：时间是离散的',
  tagline: 'yₜ₊₁ 与 yₜ 的关系。平衡点 + 齐次解，和微分方程一个套路。',
  mins: 14,
  goals: ['求平衡点', '写一阶差分方程通解', '判断稳定性'],
  body: String.raw`
<p class="lead">经济数据常按年、按月统计，时间是一格一格的。描述这种变化，用差分方程而不是微分方程。</p>

<div class="callout callout-def"><span class="tag">一阶线性</span>
<p>\[
y_{t+1}+ay_t=b.
\]</p>
<p>平衡点 \(y^*=\dfrac{b}{1+a}\)（\(a\ne-1\)），通解</p>
<p>\[
y_t=C(-a)^{t}+y^*.
\]</p>
<p>\(|a|&lt;1\) 时稳定，会收敛到平衡点；\(|a|&gt;1\) 时发散。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 10.8</span><span class="ex-title">收敛到平衡</span></div>
  <div class="q"><p>解 \(y_{t+1}=0.8y_t+10\)，已知 \(y_0=0\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>化成标准形 \(y_{t+1}-0.8y_t=10\)，a=−0.8，b=10。</p>
    <p>平衡点 \(y^*=\dfrac{10}{1-0.8}=50\)。</p>
    <p>通解 \(y_t=C(0.8)^{t}+50\)。代入 \(y_0=0\)：\(C=-50\)。</p>
    <p>\[
y_t=50(1-0.8^{t}).
\]</p>
    <p>每期补到 50 的缺口的两成，越补越接近 50。</p>
  </div></details>
</div>

<div class="callout callout-warn"><span class="tag">a=−1</span>
<p>若 \(a=-1\)，平衡点公式失效，方程变成 \(y_{t+1}=y_t+b\)，通解是 \(y_t=y_0+bt\)，等差数列，发散。</p></div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(y_{t+1}=0.5y_t+4\) 的平衡点。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(y^*=\frac{4}{1-0.5}=8\)。0.5&lt;1，稳定。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>解 \(y_{t+1}=2y_t+1\)，\(y_0=0\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>平衡点 \(-1\)，通解 \(y_t=C2^{t}-1\)。由 \(y_0=0\) 得 \(C=1\)，\(y_t=2^{t}-1\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>\(y_{t+1}=1.2y_t+3\) 会收敛吗？</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>不会。系数 1.2&gt;1，通解中的 \((-a)^t=(-1.2)^t\) 发散，平衡点不稳定。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '一阶差分方程', tex: String.raw`y_{t+1}+ay_t=b`, note: 'a≠−1。' },
    { name: '平衡点', tex: String.raw`y^{*}=\frac{b}{1+a}`, note: '令 y_{t+1}=y_t=y*。' },
    { name: '通解', tex: String.raw`y_t=C(-a)^{t}+y^{*}`, note: '由 y₀ 定 C。' },
    { name: '稳定性', tex: String.raw`|a|<1\ \text{收敛};\quad |a|>1\ \text{发散}`, note: '看 |−a|。' }
  ]
});

window.SECTIONS.push({
  id: 'ch10-drill',
  ch: 10,
  kind: 'drill',
  no: '测',
  nav: '第 10 章自测',
  title: '第 10 章 · 综合自测',
  tagline: '五道题：可分离、一阶线性、二阶、差分。',
  mins: 22,
  goals: ['认出方程类型', '套公式前先化标准形'],
  body: String.raw`
<p class="lead">拿到方程先分类：能分离就分离，一阶线性就化标准形，二阶就看特征根。类型认错，方法全错。</p>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>解 \(y'=xy^{2}\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\frac{\mathrm{d}y}{y^{2}}=x\mathrm{d}x\)，\(-\frac1y=\frac{x^{2}}{2}+C\)，即 \(y=-\frac{1}{x^{2}/2+C}\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>解 \(y'+2y=4\)，\(y(0)=1\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>通解 \(y=2+Ce^{-2x}\)。代入 \(y(0)=1\) 得 \(C=-1\)，\(y=2-e^{-2x}\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>解 \(y''-4y'+3y=0\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>特征根 1、3，\(y=C_1e^{x}+C_2e^{3x}\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">04</span>求 \(y''+2y'+y=0\) 的通解。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>重根 −1，\(y=(C_1+C_2x)e^{-x}\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">05</span>解 \(y_{t+1}=0.6y_t+8\)，\(y_0=0\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>平衡点 \(8/0.4=20\)。通解 \(y_t=C(0.6)^t+20\)，由 \(y_0=0\) 得 \(C=-20\)，\(y_t=20(1-0.6^t)\)。</p></div></details>
  </div>
</div>
`,
  formulas: []
});
