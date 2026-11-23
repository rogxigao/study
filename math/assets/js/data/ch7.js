/* 第 7 章：多元函数微分学 */
window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: '7-1',
  ch: 7,
  no: '7.1',
  nav: '多元函数概念',
  title: '多元函数：定义域是一块区域',
  tagline: '一元看区间，二元看平面区域。极限要求“从四面八方靠近”都走同一条路。',
  mins: 13,
  goals: ['求二元函数的定义域', '理解二重极限', '判断简单极限是否存在'],
  body: String.raw`
<p class="lead">从这一章起，自变量不止一个。很多在一元里成立的习惯，到这里要重新检查。</p>

<h2>一、定义域</h2>

<p>二元函数 \(z=f(x,y)\) 的定义域是平面上的点集。常见限制还是那几条：分母不为零、偶次根号内非负、对数真数为正。</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 7.1</span><span class="ex-title">写定义域</span></div>
  <div class="q"><p>求 \(z=\ln(1-x^{2}-y^{2})\) 的定义域。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>要求 \(1-x^{2}-y^{2}&gt;0\)，即 \(x^{2}+y^{2}&lt;1\)。</p>
    <p>定义域是单位圆内部（不含边界），是一个开区域。</p>
  </div></details>
</div>

<h2>二、二重极限</h2>

<div class="callout callout-def"><span class="tag">定义</span>
<p>若点 \((x,y)\) 以<strong>任意方式</strong>趋于 \((x_0,y_0)\) 时，\(f(x,y)\) 都趋于 A，则称 A 为二重极限。</p>
<p>只要找到两条路径极限不同，就能判定极限不存在。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 7.2</span><span class="ex-title">夹逼</span></div>
  <div class="q"><p>求 \(\lim\limits_{(x,y)\to(0,0)}\dfrac{x^{2}y}{x^{2}+y^{2}}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\[
\left|\frac{x^{2}y}{x^{2}+y^{2}}\right|\le |y|\to0,
\]</p>
    <p>因为 \(\frac{x^{2}}{x^{2}+y^{2}}\le1\)。由夹逼，极限为 0。</p>
  </div></details>
</div>

<div class="callout callout-warn"><span class="tag">注意</span>
<p>二元极限存在，要求<strong>所有路径</strong>都趋于同一个值。只验证沿 x 轴、y 轴不够。经典反例：\(\frac{xy}{x^{2}+y^{2}}\) 沿坐标轴趋于 0，沿 \(y=x\) 趋于 \(\frac12\)，所以极限不存在。</p></div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(z=\sqrt{4-x^{2}-y^{2}}\) 的定义域。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(x^{2}+y^{2}\le4\)，即以原点为心、2 为半径的闭圆盘。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求 \(\lim\limits_{(x,y)\to(0,0)}\dfrac{xy}{\sqrt{x^{2}+y^{2}}}\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\left|\frac{xy}{\sqrt{x^{2}+y^{2}}}\right|\le\frac12\sqrt{x^{2}+y^{2}}\to0\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>说明 \(\lim\limits_{(x,y)\to(0,0)}\dfrac{xy}{x^{2}+y^{2}}\) 不存在。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>沿 \(y=x\) 得 \(\frac12\)，沿 \(y=0\) 得 0，两条路径不同，故不存在。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '二元函数', tex: String.raw`z=f(x,y),\quad (x,y)\in D\subset\mathbb{R}^{2}`, note: '定义域是平面区域。' },
    { name: '二重极限', tex: String.raw`\lim_{(x,y)\to(x_0,y_0)}f(x,y)=A`, note: '任意路径都要成立。' },
    { name: '路径判别', tex: String.raw`\text{两条路径极限不同}\ \Rightarrow\ \text{极限不存在}`, note: '常用 y=kx、y=x²。' },
    { name: '夹逼', tex: String.raw`0\le|f|\le g,\ g\to0\ \Rightarrow\ f\to0`, note: '分母有 x²+y² 时常用。' }
  ]
});

window.SECTIONS.push({
  id: '7-2',
  ch: 7,
  no: '7.2',
  nav: '偏导数与全微分',
  title: '偏导数：一次只动一个变量',
  tagline: '对 x 求导时，把 y 当常数。全微分是两条路变化的线性叠加。',
  mins: 15,
  goals: ['计算一阶偏导', '写出全微分', '知道偏导存在不一定可微'],
  body: String.raw`
<p class="lead">偏导数的操作极其简单：对一个变量求导，另一个当常数。但要理解它只是“沿坐标轴方向”的变化率。</p>

<div class="callout callout-def"><span class="tag">定义</span>
<p>\[
\frac{\partial z}{\partial x}=\lim_{\Delta x\to0}\frac{f(x+\Delta x,y)-f(x,y)}{\Delta x}.
\]</p>
<p>几何上，\(z_x(x_0,y_0)\) 是曲面与平面 \(y=y_0\) 相交所得曲线在該点的切线斜率。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 7.3</span><span class="ex-title">求偏导</span></div>
  <div class="q"><p>设 \(z=x^{2}y+e^{xy}\)，求 \(z_x\)、\(z_y\)，并求在 \((1,0)\) 处的全微分。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>对 x 求导（y 当常数）：\(z_x=2xy+ye^{xy}\)。</p>
    <p>对 y 求导（x 当常数）：\(z_y=x^{2}+xe^{xy}\)。</p>
    <p>在 \((1,0)\)：\(z_x=0\)，\(z_y=1+1=2\)，所以 \(\mathrm{d}z=2\,\mathrm{d}y\)。</p>
  </div></details>
</div>

<h2>全微分</h2>

<p>若 \(\Delta z=A\Delta x+B\Delta y+o(\rho)\)，则称 \(z\) 可微，且</p>

<p>\[
\mathrm{d}z=\frac{\partial z}{\partial x}\mathrm{d}x+\frac{\partial z}{\partial y}\mathrm{d}y.
\]</p>

<div class="callout callout-warn"><span class="tag">关系</span>
<p>可微 \(\Rightarrow\) 偏导存在，但偏导存在<strong>不一定</strong>可微；偏导连续 \(\Rightarrow\) 可微。一元里“可导⇔可微”的直觉，在多元里不成立。</p></div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>设 \(z=x^{y}\)（\(x&gt;0\)），求 \(z_x\)、\(z_y\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(z_x=yx^{y-1}\)；对 y 求导时把 \(x^{y}=e^{y\ln x}\)，得 \(z_y=x^{y}\ln x\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>设 \(z=\ln(x^{2}+y^{2})\)，求 \(z_x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(z_x=\frac{2x}{x^{2}+y^{2}}\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>设 \(z=xy\)，求在 \((1,2)\) 处的全微分。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(z_x=y=2\)，\(z_y=x=1\)，\(\mathrm{d}z=2\mathrm{d}x+\mathrm{d}y\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '偏导数', tex: String.raw`z_x=\lim_{\Delta x\to0}\frac{f(x+\Delta x,y)-f(x,y)}{\Delta x}`, note: '另一个变量当常数。' },
    { name: '全微分', tex: String.raw`\mathrm{d}z=z_x\mathrm{d}x+z_y\mathrm{d}y`, note: '线性主部。' },
    { name: '可微的必要条件', tex: String.raw`\text{可微}\ \Rightarrow\ z_x,z_y\ \text{存在}`, note: '反之不成立。' },
    { name: '近似', tex: String.raw`f(x+\Delta x,y+\Delta y)\approx f+z_x\Delta x+z_y\Delta y`, note: 'Δ 很小时使用。' }
  ]
});

window.SECTIONS.push({
  id: '7-3',
  ch: 7,
  no: '7.3',
  nav: '复合与隐函数',
  title: '复合函数与隐函数求导',
  tagline: '链式法则长出了分支；隐函数求导还是“两边对 x 求，z 是 z(x)”。',
  mins: 15,
  goals: ['画变量关系图，写链式公式', '求二阶偏导', '用公式法求隐函数偏导'],
  body: String.raw`
<p class="lead">多元复合函数的链式法则，本质是“所有路径相加”。先画关系图，再写公式，比死记靠谱。</p>

<h2>一、链式法则</h2>

<p>设 \(z=f(u,v)\)，\(u=u(x,y)\)，\(v=v(x,y)\)，则</p>

<p>\[
\frac{\partial z}{\partial x}=\frac{\partial f}{\partial u}\frac{\partial u}{\partial x}+\frac{\partial f}{\partial v}\frac{\partial v}{\partial x}.
\]</p>

<p>对 y 同理。若 \(z=f(u)\)，\(u=u(x,y)\)，就退化成 \(z_x=f'(u)u_x\)。</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 7.4</span><span class="ex-title">一元内层</span></div>
  <div class="q"><p>设 \(z=f(x^{2}+y^{2})\)，求 \(z_x\) 与 \(z_{xx}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>令 \(u=x^{2}+y^{2}\)，\(z_x=f'(u)\cdot2x\)。</p>
    <p>再对 x 求一次（乘积法则 + 链式）：</p>
    <p>\[
z_{xx}=2f'(u)+2x\cdot f''(u)\cdot2x=2f'+4x^{2}f''.
\]</p>
    <p>二阶偏导别漏掉“对 f′ 再乘内层导数”这一层。</p>
  </div></details>
</div>

<h2>二、隐函数</h2>

<div class="callout callout-def"><span class="tag">公式</span>
<p>若 \(F(x,y,z)=0\) 确定 \(z=z(x,y)\)，且 \(F_z\ne0\)，则</p>
<p>\[
\frac{\partial z}{\partial x}=-\frac{F_x}{F_z},\qquad
\frac{\partial z}{\partial y}=-\frac{F_y}{F_z}.
\]</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 7.5</span><span class="ex-title">球面</span></div>
  <div class="q"><p>设 \(x^{2}+y^{2}+z^{2}=1\)，求 \(z_x\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>令 \(F=x^{2}+y^{2}+z^{2}-1\)，\(F_x=2x\)，\(F_z=2z\)，所以 \(z_x=-\dfrac{x}{z}\)。</p>
    <p>也可以两边直接对 x 求导：\(2x+2zz_x=0\)，结果一样。</p>
  </div></details>
</div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>设 \(z=f(xy)\)，求 \(z_x\)、\(z_y\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(z_x=yf'(xy)\)，\(z_y=xf'(xy)\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>设 \(z=e^{x^{2}+y^{2}}\)，求 \(z_x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(z_x=2xe^{x^{2}+y^{2}}\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>设 \(xyz=1\)，求 \(z_x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(F=xyz-1\)，\(F_x=yz\)，\(F_z=xy\)，故 \(z_x=-\frac{yz}{xy}=-\frac{z}{x}\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '链式法则', tex: String.raw`z_x=f_u u_x+f_v v_x`, note: '所有路径相加。' },
    { name: '一元内层', tex: String.raw`z=f(u),\ u=u(x,y)\ \Rightarrow\ z_x=f'(u)u_x`, note: '先外后内。' },
    { name: '隐函数', tex: String.raw`z_x=-\frac{F_x}{F_z}`, note: '要求 F_z≠0。' },
    { name: '二阶偏导', tex: String.raw`z_{xx}=\frac{\partial}{\partial x}(z_x)`, note: '注意乘积法则。' }
  ]
});

window.SECTIONS.push({
  id: '7-4',
  ch: 7,
  no: '7.4',
  nav: '多元函数极值',
  title: '多元函数的极值：先找驻点，再判类型',
  tagline: '二元极值要算 AC−B²；条件极值上拉格朗日乘数。',
  mins: 16,
  goals: ['求驻点并判别极值', '用拉格朗日求条件极值', '知道鞍点'],
  body: String.raw`
<p class="lead">一元看一阶导变号，二元看两个偏导同时为零，再用二阶偏导组成的判别式分类。</p>

<div class="callout callout-def"><span class="tag">判别</span>
<p>驻点满足 \(z_x=z_y=0\)。记 \(A=z_{xx}\)，\(B=z_{xy}\)，\(C=z_{yy}\)，则</p>
<ul>
  <li>\(AC-B^{2}&gt;0\)：是极值，\(A&gt;0\) 极小，\(A&lt;0\) 极大；</li>
  <li>\(AC-B^{2}&lt;0\)：不是极值（鞍点）；</li>
  <li>\(AC-B^{2}=0\)：判别失效，另想办法。</li>
</ul></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 7.6</span><span class="ex-title">无条件极值</span></div>
  <div class="q"><p>求 \(f(x,y)=x^{2}+y^{2}-2x-4y\) 的极值。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(f_x=2x-2=0\)，\(f_y=2y-4=0\)，驻点 \((1,2)\)。</p>
    <p>\(A=2\)，\(B=0\)，\(C=2\)，\(AC-B^{2}=4&gt;0\)，且 \(A&gt;0\)，极小值。</p>
    <p>\(f(1,2)=1+4-2-8=-5\)。</p>
  </div></details>
</div>

<div class="callout callout-def"><span class="tag">条件极值</span>
<p>求 \(f(x,y)\) 在约束 \(\varphi(x,y)=0\) 下的极值，构造</p>
<p>\[
L=f(x,y)+\lambda\varphi(x,y),
\]</p>
<p>解方程组 \(L_x=0\)，\(L_y=0\)，\(\varphi=0\)。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 7.7</span><span class="ex-title">拉格朗日</span></div>
  <div class="q"><p>在 \(x+y=1\) 下，求 \(xy\) 的最大值。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(L=xy+\lambda(x+y-1)\)。</p>
    <p>\(L_x=y+\lambda=0\)，\(L_y=x+\lambda=0\)，得 \(x=y\)。代入约束 \(x=y=\frac12\)。</p>
    <p>最大值为 \(\frac14\)。几何上，周长固定的矩形，正方形面积最大。</p>
  </div></details>
</div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(f=x^{2}+y^{2}+2x-4y\) 的极小值。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>驻点 \((-1,2)\)，\(A=C=2\)，极小值 \(f=1+4-2-8=-5\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>在 \(x+y=2\) 下，求 \(xy\) 的最大值。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>对称，\(x=y=1\)，最大值为 1。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>\(f=x^{2}-y^{2}\) 在原点是什么点？</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>驻点，但 \(A=2,B=0,C=-2\)，\(AC-B^{2}=-4&lt;0\)，是鞍点，不是极值。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '驻点', tex: String.raw`z_x=0,\quad z_y=0`, note: '极值的候选点。' },
    { name: '判别式', tex: String.raw`AC-B^{2}>0\ \Rightarrow\ \text{极值}`, note: 'A>0 极小。' },
    { name: '拉格朗日', tex: String.raw`L=f+\lambda\varphi`, note: '约束 φ=0。' },
    { name: '条件极值方程', tex: String.raw`L_x=0,\ L_y=0,\ \varphi=0`, note: '解出 x,y,λ。' }
  ]
});

window.SECTIONS.push({
  id: 'ch7-drill',
  ch: 7,
  kind: 'drill',
  no: '测',
  nav: '第 7 章自测',
  title: '第 7 章 · 综合自测',
  tagline: '五道题：极限、偏导、全微分、链式、极值。',
  mins: 20,
  goals: ['检查偏导与链式是否顺手', '极值判别别记反'],
  body: String.raw`
<p class="lead">多元题的计算量不大，错往往错在“把另一个变量也求导了”。对谁求导，其他一律当常数。</p>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(z=\sqrt{9-x^{2}-y^{2}}\) 的定义域。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(x^{2}+y^{2}\le9\)，半径 3 的闭圆盘。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>设 \(z=x^{2}y^{3}\)，求 \(z_x\)、\(z_y\)、\(z_{xy}\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(z_x=2xy^{3}\)，\(z_y=3x^{2}y^{2}\)，\(z_{xy}=6xy^{2}\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>设 \(z=\sin(xy)\)，求全微分。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(z_x=y\cos(xy)\)，\(z_y=x\cos(xy)\)，\(\mathrm{d}z=\cos(xy)(y\mathrm{d}x+x\mathrm{d}y)\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">04</span>设 \(z=f(x^{2}-y^{2})\)，求 \(z_x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(z_x=2xf'(x^{2}-y^{2})\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">05</span>求 \(f=x^{2}+y^{2}-4x+2y\) 的极值。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>驻点 \((2,-1)\)，\(A=C=2\)，极小值 \(f=4+1-8-2=-5\)。</p></div></details>
  </div>
</div>
`,
  formulas: []
});
