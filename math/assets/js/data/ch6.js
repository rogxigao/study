/* 第 6 章：空间解析几何初步 */
window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: '6-1',
  ch: 6,
  no: '6.1',
  nav: '向量及其运算',
  title: '向量：方向比长度更难算',
  tagline: '加减看坐标，夹角看数量积，面积和法向量看向量积。',
  mins: 15,
  goals: ['求模、方向余弦', '用数量积判垂直、算夹角', '用向量积求面积与法向量'],
  body: String.raw`
<p class="lead">空间里没有“斜率”这个概念，取而代之的是向量。平面、直线、曲面，全都要靠向量来描述。</p>

<h2>一、坐标与模</h2>

<p>设 \(\vec a=(a_1,a_2,a_3)\)，则</p>

<p>\[
|\vec a|=\sqrt{a_1^{2}+a_2^{2}+a_3^{2}},\qquad
\cos\alpha=\frac{a_1}{|\vec a|},\ \cos\beta=\frac{a_2}{|\vec a|},\ \cos\gamma=\frac{a_3}{|\vec a|}.
\]</p>

<p>三个方向余弦满足 \(\cos^{2}\alpha+\cos^{2}\beta+\cos^{2}\gamma=1\)。</p>

<h2>二、数量积与夹角</h2>

<div class="callout callout-def"><span class="tag">定义</span>
<p>\[
\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta=a_1b_1+a_2b_2+a_3b_3.
\]</p>
<p>\(\vec a\perp\vec b\iff\vec a\cdot\vec b=0\)；\(\vec a\parallel\vec b\iff\dfrac{a_1}{b_1}=\dfrac{a_2}{b_2}=\dfrac{a_3}{b_3}\)（分母为零时单独看）。</p></div>

<h2>三、向量积</h2>

<p>\[
\vec a\times\vec b=
\begin{vmatrix}
\vec i & \vec j & \vec k\\
a_1 & a_2 & a_3\\
b_1 & b_2 & b_3
\end{vmatrix}.
\]</p>

<p>它的模 \(|\vec a\times\vec b|=|\vec a||\vec b|\sin\theta\)，等于两向量张成的平行四边形面积；方向由右手定则确定。求平面法向量，基本都靠它。</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 6.1</span><span class="ex-title">一套算完</span></div>
  <div class="q"><p>设 \(\vec a=(1,2,-1)\)，\(\vec b=(2,0,1)\)，求 \(\vec a\cdot\vec b\)、\(\vec a\times\vec b\) 与夹角余弦。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(\vec a\cdot\vec b=2+0-1=1\)。</p>
    <p>\[
\vec a\times\vec b=(2\cdot1-(-1)\cdot0,\ (-1)\cdot2-1\cdot1,\ 1\cdot0-2\cdot2)=(2,-3,-4).
\]</p>
    <p>\(|\vec a|=\sqrt6\)，\(|\vec b|=\sqrt5\)，所以 \(\cos\theta=\dfrac{1}{\sqrt{30}}\)。</p>
  </div></details>
</div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>判断 \(\vec a=(1,-2,3)\) 与 \(\vec b=(2,1,0)\) 是否垂直。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>点积 \(2-2+0=0\)，垂直。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求 \(\vec a=(1,1,0)\) 与 \(\vec b=(0,1,1)\) 张成的平行四边形面积。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\vec a\times\vec b=(1,-1,1)\)，模为 \(\sqrt3\)，面积即 \(\sqrt3\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>求向量 \((1,2,2)\) 的方向余弦。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>模为 3，方向余弦为 \(\frac13,\frac23,\frac23\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '模与方向余弦', tex: String.raw`|\vec a|=\sqrt{a_1^2+a_2^2+a_3^2},\quad \cos\alpha=\frac{a_1}{|\vec a|}`, note: '平方和等于 1。' },
    { name: '数量积', tex: String.raw`\vec a\cdot\vec b=a_1b_1+a_2b_2+a_3b_3`, note: '点积为 0 即垂直。' },
    { name: '向量积', tex: String.raw`|\vec a\times\vec b|=|\vec a||\vec b|\sin\theta`, note: '模等于平行四边形面积。' },
    { name: '夹角', tex: String.raw`\cos\theta=\frac{\vec a\cdot\vec b}{|\vec a||\vec b|}`, note: '空间里没有斜率，用夹角。' }
  ]
});

window.SECTIONS.push({
  id: '6-2',
  ch: 6,
  no: '6.2',
  nav: '平面与直线',
  title: '平面与直线：一个法向量，一个方向向量',
  tagline: '平面认法向量，直线认方向向量。所有方程都从这两个向量长出来。',
  mins: 16,
  goals: ['写平面的点法式与一般式', '写直线的对称式与参数式', '判断线面位置关系'],
  body: String.raw`
<p class="lead">空间里描述一个平面，只需要<strong>一点 + 一个法向量</strong>；描述一条直线，只需要<strong>一点 + 一个方向向量</strong>。</p>

<h2>一、平面</h2>

<div class="callout callout-def"><span class="tag">方程</span>
<p>过点 \(M_0(x_0,y_0,z_0)\)、法向量 \(\vec n=(A,B,C)\) 的平面：</p>
<p>\[
A(x-x_0)+B(y-y_0)+C(z-z_0)=0,
\]</p>
<p>展开就是一般式 \(Ax+By+Cz+D=0\)。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 6.2</span><span class="ex-title">写平面方程</span></div>
  <div class="q"><p>求过点 \((1,2,3)\) 且垂直于向量 \((2,-1,1)\) 的平面方程。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>法向量就是 \((2,-1,1)\)，直接代入点法式：</p>
    <p>\[
2(x-1)-(y-2)+(z-3)=0\Rightarrow 2x-y+z-3=0.
\]</p>
  </div></details>
</div>

<h2>二、直线</h2>

<p>过点 \(M_0(x_0,y_0,z_0)\)、方向向量 \(\vec s=(m,n,p)\) 的直线：</p>

<p>\[
\frac{x-x_0}{m}=\frac{y-y_0}{n}=\frac{z-z_0}{p},
\]</p>

<p>叫对称式（点向式）。令比值为 t，得参数式 \(x=x_0+mt\)，\(y=y_0+nt\)，\(z=z_0+pt\)。</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 6.3</span><span class="ex-title">写直线方程</span></div>
  <div class="q"><p>求过 \((1,0,2)\) 且方向向量为 \((1,-1,2)\) 的直线方程。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\[
\frac{x-1}{1}=\frac{y}{-1}=\frac{z-2}{2}.
\]</p>
    <p>若某个方向分量为 0，比如 \(n=0\)，就写成 \(y=0\) 与另外两个等式并列，不能写分母为 0 的式子。</p>
  </div></details>
</div>

<h2>三、位置关系</h2>

<ul>
  <li>线面平行：\(\vec s\cdot\vec n=0\)；线面垂直：\(\vec s\parallel\vec n\)；</li>
  <li>面面平行：\(\vec n_1\parallel\vec n_2\)；面面垂直：\(\vec n_1\cdot\vec n_2=0\)；</li>
  <li>点到平面 \(Ax+By+Cz+D=0\) 的距离：\(d=\dfrac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^{2}+B^{2}+C^{2}}}\)。</li>
</ul>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求过原点且法向量为 \((1,2,-1)\) 的平面方程。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(x+2y-z=0\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>直线 \(\frac{x}{1}=\frac{y-1}{2}=\frac{z}{-1}\) 与平面 \(x+y+2z=3\) 是否平行？</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>方向 \((1,2,-1)\)，法向量 \((1,1,2)\)，点积 \(1+2-2=1\ne0\)，不平行，直线与平面相交。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>求点 \((1,1,1)\) 到平面 \(x+2y+2z-3=0\) 的距离。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(d=\frac{|1+2+2-3|}{\sqrt{1+4+4}}=\frac{2}{3}\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '平面点法式', tex: String.raw`A(x-x_0)+B(y-y_0)+C(z-z_0)=0`, note: '法向量 (A,B,C)。' },
    { name: '直线对称式', tex: String.raw`\frac{x-x_0}{m}=\frac{y-y_0}{n}=\frac{z-z_0}{p}`, note: '方向向量 (m,n,p)。' },
    { name: '线面平行', tex: String.raw`\vec s\cdot\vec n=0`, note: '垂直则 s ∥ n。' },
    { name: '点到平面距离', tex: String.raw`d=\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}`, note: '分子加绝对值。' }
  ]
});

window.SECTIONS.push({
  id: '6-3',
  ch: 6,
  no: '6.3',
  nav: '曲面与二次曲面',
  title: '曲面：先认方程的形状',
  tagline: '球面看配方，柱面看缺哪个字母，旋转曲面看“谁不动”。',
  mins: 13,
  goals: ['识别球面、柱面、旋转曲面', '写出旋转曲面方程', '认出常见二次曲面'],
  body: String.raw`
<p class="lead">这一节不考复杂计算，考的是“看到方程，脑子里有没有画面”。</p>

<h2>一、球面</h2>

<p>\((x-a)^{2}+(y-b)^{2}+(z-c)^{2}=R^{2}\) 是以 \((a,b,c)\) 为心、R 为半径的球面。给一般式先配方。</p>

<h2>二、柱面</h2>

<p>方程里<strong>缺一个字母</strong>，通常就是柱面。比如 \(x^{2}+y^{2}=R^{2}\) 在空间里与 z 无关，是母线平行于 z 轴的圆柱面。</p>

<h2>三、旋转曲面</h2>

<div class="callout callout-def"><span class="tag">方法</span>
<p>\(yOz\) 平面上的曲线 \(f(y,z)=0\) 绕 z 轴旋转，得到的曲面方程是</p>
<p>\[
f\left(\pm\sqrt{x^{2}+y^{2}},\ z\right)=0.
\]</p>
<p>口诀：绕谁转，谁不变；另一个变量换成 \(\sqrt{x^{2}+y^{2}}\)。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 6.4</span><span class="ex-title">旋转曲面</span></div>
  <div class="q"><p>\(yOz\) 平面上的抛物线 \(z=y^{2}\) 绕 z 轴旋转，求曲面方程。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>绕 z 轴，z 不变，把 y 换成 \(\pm\sqrt{x^{2}+y^{2}}\)：</p>
    <p>\[
z=x^{2}+y^{2}.
\]</p>
    <p>这是旋转抛物面，开口向上，顶点在原点。</p>
  </div></details>
</div>

<h2>四、常见二次曲面</h2>

<ul>
  <li>椭球面：\(\dfrac{x^{2}}{a^{2}}+\dfrac{y^{2}}{b^{2}}+\dfrac{z^{2}}{c^{2}}=1\)；</li>
  <li>抛物面：\(z=x^{2}+y^{2}\)（开口向上），\(z=1-x^{2}-y^{2}\)（开口向下）；</li>
  <li>圆锥面：\(z^{2}=x^{2}+y^{2}\)；</li>
  <li>双曲抛物面（马鞍面）：\(z=x^{2}-y^{2}\)。</li>
</ul>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>方程 \(x^{2}+y^{2}+z^{2}-2x+4y=0\) 表示什么曲面？</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>配方：\((x-1)^{2}+(y+2)^{2}+z^{2}=5\)，球心 \((1,-2,0)\)，半径 \(\sqrt5\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>\(x^{2}+z^{2}=1\) 在空间里是什么？</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>缺 y，母线平行于 y 轴的圆柱面，准线是 xOz 平面上的单位圆。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>\(xOz\) 平面上的 \(z=x^{2}\) 绕 x 轴旋转，得到什么曲面？</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>绕 x 轴，x 不变，z 换成 \(\pm\sqrt{y^{2}+z^{2}}\)：\(x^{2}=y^{2}+z^{2}\)，是圆锥面。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '球面', tex: String.raw`(x-a)^2+(y-b)^2+(z-c)^2=R^2`, note: '一般式先配方。' },
    { name: '柱面', tex: String.raw`x^{2}+y^{2}=R^{2}`, note: '缺 z，母线平行 z 轴。' },
    { name: '旋转曲面', tex: String.raw`f\left(\pm\sqrt{x^{2}+y^{2}},z\right)=0`, note: '绕 z 轴，z 不变。' },
    { name: '常见二次曲面', tex: String.raw`z=x^{2}+y^{2},\quad z^{2}=x^{2}+y^{2}`, note: '抛物面与锥面。' }
  ]
});

window.SECTIONS.push({
  id: 'ch6-drill',
  ch: 6,
  kind: 'drill',
  no: '测',
  nav: '第 6 章自测',
  title: '第 6 章 · 综合自测',
  tagline: '五道题：点积、叉积、平面、直线、曲面。',
  mins: 20,
  goals: ['把向量运算练熟', '方程与图形能互相翻译'],
  body: String.raw`
<p class="lead">空间解析几何的题大多短，但一步算错就全错。写完方程，代回已知点验一下。</p>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>设 \(\vec a=(2,-1,3)\)，\(\vec b=(1,2,-2)\)，求 \(\vec a\cdot\vec b\) 与 \(\vec a\times\vec b\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>点积 \(2-2-6=-6\)。叉积 \((-4,7,5)\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求过 \((0,1,2)\) 且法向量为 \((1,-1,2)\) 的平面方程。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\((x-0)-(y-1)+2(z-2)=0\)，即 \(x-y+2z-3=0\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>求过 \((1,1,1)\) 且方向向量为 \((2,1,-1)\) 的直线方程。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\frac{x-1}{2}=\frac{y-1}{1}=\frac{z-1}{-1}\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">04</span>判断平面 \(x+y+z=1\) 与平面 \(x-y=0\) 是否垂直。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>法向量 \((1,1,1)\) 与 \((1,-1,0)\)，点积 \(1-1+0=0\)，垂直。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">05</span>\(yOz\) 平面上的 \(z=1-y^{2}\) 绕 z 轴旋转，求曲面方程。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(z=1-(x^{2}+y^{2})\)，是开口向下的旋转抛物面。</p></div></details>
  </div>
</div>
`,
  formulas: []
});
