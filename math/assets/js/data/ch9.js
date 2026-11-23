/* 第 9 章：无穷级数 */
window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: '9-1',
  ch: 9,
  no: '9.1',
  nav: '级数的概念',
  title: '无穷级数：无限个数相加，未必是无穷',
  tagline: '看部分和数列。部分和有极限，级数才收敛。',
  mins: 15,
  goals: ['用部分和判断敛散', '记住几何级数与 p 级数', '用 uₙ→0 快速判发散'],
  body: String.raw`
<p class="lead">把无穷多个数加起来，直觉上会无穷大。但 \(1+\frac12+\frac14+\cdots=2\)，因为越加越小，总和被“锁”住了。</p>

<div class="callout callout-def"><span class="tag">定义</span>
<p>级数 \(\sum\limits_{n=1}^{\infty}u_n\) 的部分和 \(S_n=u_1+\cdots+u_n\)。若 \(\{S_n\}\) 收敛于 S，则称级数<strong>收敛</strong>，和为 S；否则发散。</p></div>

<div class="widget" data-widget="series"><div class="w-head"><b>拖公比 q</b><span>部分和贴向 1/(1−q)，或在发散边缘徘徊</span></div></div>

<h2>两个基准级数</h2>

<div class="callout callout-def"><span class="tag">结论</span>
<p><strong>几何级数</strong>：\(\sum\limits_{n=0}^{\infty}aq^{n}=\dfrac{a}{1-q}\)（\(|q|&lt;1\) 收敛；\(|q|\ge1\) 发散）。</p>
<p><strong>p 级数</strong>：\(\sum\limits_{n=1}^{\infty}\dfrac{1}{n^{p}}\) 当 \(p&gt;1\) 收敛，\(p\le1\) 发散。p=1 是调和级数，发散。</p></div>

<p>收敛的必要条件：若 \(\sum u_n\) 收敛，则 \(u_n\to0\)。反过来不成立——调和级数的通项趋于 0，但级数发散。所以 \(u_n\not\to0\) 只能用来判<strong>发散</strong>。</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 9.1</span><span class="ex-title">裂项相消</span></div>
  <div class="q"><p>判断 \(\sum\limits_{n=1}^{\infty}\dfrac{1}{n(n+1)}\) 的敛散性；若收敛，求和。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(\dfrac{1}{n(n+1)}=\dfrac1n-\dfrac1{n+1}\)。</p>
    <p>\[
S_n=1-\frac12+\frac12-\frac13+\cdots+\frac1n-\frac1{n+1}=1-\frac1{n+1}\to1.
\]</p>
    <p>收敛，和为 1。</p>
  </div></details>
</div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(\sum\limits_{n=1}^{\infty}\left(\dfrac12\right)^{n}\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>首项 \(\frac12\)，公比 \(\frac12\)，和为 \(\frac{1/2}{1-1/2}=1\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>判断 \(\sum\dfrac{1}{n}\) 的敛散性。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>调和级数，p=1，发散。虽然通项趋于 0，但部分和像 \(\ln n\) 一样增长。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>若 \(\sum u_n\) 收敛，能否推出 \(u_n\to0\)？反过来呢？</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>能推出 \(u_n\to0\)；反过来不成立，调和级数就是反例。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '几何级数', tex: String.raw`\sum_{n=0}^{\infty}aq^{n}=\frac{a}{1-q}\ (|q|<1)`, note: '|q|≥1 发散。' },
    { name: 'p 级数', tex: String.raw`\sum\frac{1}{n^{p}}\ \text{收敛}\iff p>1`, note: 'p=1 是调和级数。' },
    { name: '收敛必要条件', tex: String.raw`\sum u_n\ \text{收敛}\ \Rightarrow\ u_n\to0`, note: '反之不成立。' },
    { name: '裂项', tex: String.raw`\frac{1}{n(n+1)}=\frac1n-\frac1{n+1}`, note: '部分和可消到只剩两头。' }
  ]
});

window.SECTIONS.push({
  id: '9-2',
  ch: 9,
  no: '9.2',
  nav: '正项级数判别',
  title: '正项级数：和谁比，比什么',
  tagline: '比较、极限比较、比值、根值。先找“同量级”的 p 级数。',
  mins: 16,
  goals: ['用比较判别法', '用比值判别法', '判断常见级数'],
  body: String.raw`
<p class="lead">正项级数只增不减，部分和要么有界收敛，要么冲到无穷。所以判别法都在回答一个问题：它涨得有多快。</p>

<div class="callout callout-def"><span class="tag">判别法</span>
<p><strong>比较</strong>：\(0\le u_n\le v_n\)。\(\sum v_n\) 收敛则 \(\sum u_n\) 收敛；\(\sum u_n\) 发散则 \(\sum v_n\) 发散。</p>
<p><strong>极限比较</strong>：\(u_n,v_n&gt;0\)，\(\lim\frac{u_n}{v_n}=c\)（\(0&lt;c&lt;\infty\)），则两者同敛散。</p>
<p><strong>比值</strong>：\(\lim\frac{u_{n+1}}{u_n}=\rho\)。\(\rho&lt;1\) 收敛，\(\rho&gt;1\) 发散，\(\rho=1\) 失效。</p>
<p><strong>根值</strong>：\(\lim\sqrt[n]{u_n}=\rho\)，结论同上。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 9.2</span><span class="ex-title">比值法</span></div>
  <div class="q"><p>判断 \(\sum\limits_{n=1}^{\infty}\dfrac{n}{2^{n}}\) 的敛散性。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\[
\frac{u_{n+1}}{u_n}=\frac{(n+1)/2^{n+1}}{n/2^{n}}=\frac{n+1}{2n}\to\frac12<1.
\]</p>
    <p>收敛。分子是多项式、分母是指数，指数赢，所以收敛。</p>
  </div></details>
</div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 9.3</span><span class="ex-title">极限比较</span></div>
  <div class="q"><p>判断 \(\sum\dfrac{1}{n^{2}+1}\) 与 \(\sum\dfrac{n}{n^{2}+1}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>前者与 \(\frac1{n^{2}}\) 同量级，\(\frac{u_n}{1/n^{2}}\to1\)，收敛。</p>
    <p>后者与 \(\frac1n\) 同量级，\(\frac{u_n}{1/n}\to1\)，发散。</p>
    <p>看最高次：分母比分子高两次就收敛，只高一次就发散。</p>
  </div></details>
</div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>判断 \(\sum\dfrac{1}{2n+1}\) 的敛散性。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>与 \(\frac1n\) 同量级，发散。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>判断 \(\sum\dfrac{n!}{3^{n}}\) 的敛散性。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\frac{u_{n+1}}{u_n}=\frac{n+1}{3}\to\infty\)，发散。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>判断 \(\sum\dfrac{1}{n2^{n}}\) 的敛散性。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>比值 \(\frac{n}{2(n+1)}\to\frac12&lt;1\)，收敛；也可与 \(\frac1{2^n}\) 比较。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '比较判别', tex: String.raw`0\le u_n\le v_n,\ \sum v_n\ \text{收敛}\ \Rightarrow\ \sum u_n\ \text{收敛}`, note: '大收小必收。' },
    { name: '极限比较', tex: String.raw`\lim\frac{u_n}{v_n}=c\in(0,\infty)`, note: '同敛散。' },
    { name: '比值判别', tex: String.raw`\rho=\lim\frac{u_{n+1}}{u_n}`, note: 'ρ<1 收敛。' },
    { name: '根值判别', tex: String.raw`\rho=\lim\sqrt[n]{u_n}`, note: 'ρ=1 失效。' }
  ]
});

window.SECTIONS.push({
  id: '9-3',
  ch: 9,
  no: '9.3',
  nav: '交错与绝对收敛',
  title: '交错级数：符号一正一负',
  tagline: '莱布尼茨看两条：通项递减、趋于零。绝对收敛比收敛更强。',
  mins: 13,
  goals: ['用莱布尼茨判别', '区分绝对收敛与条件收敛', '判断常见交错级数'],
  body: String.raw`
<p class="lead">正负交替的级数，可能因为“互相抵消”而收敛，哪怕加绝对值后发散。</p>

<div class="callout callout-def"><span class="tag">莱布尼茨</span>
<p>若 \(u_n\) 单调递减且 \(u_n\to0\)，则交错级数 \(\sum(-1)^{n-1}u_n\) 收敛，且余项不超过 \(u_{n+1}\)。</p></div>

<div class="callout callout-def"><span class="tag">绝对收敛</span>
<p>若 \(\sum|u_n|\) 收敛，称 \(\sum u_n\) <strong>绝对收敛</strong>；若 \(\sum u_n\) 收敛但 \(\sum|u_n|\) 发散，称<strong>条件收敛</strong>。</p>
<p>绝对收敛一定收敛；反之不成立。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 9.4</span><span class="ex-title">两类收敛</span></div>
  <div class="q"><p>判断 \(\sum\dfrac{(-1)^{n-1}}{n}\) 与 \(\sum\dfrac{(-1)^{n}}{n^{2}}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>前者：\(\frac1n\) 递减趋于 0，由莱布尼茨收敛；但 \(\sum\frac1n\) 发散，所以是<strong>条件收敛</strong>。</p>
    <p>后者：加绝对值后 \(\sum\frac{1}{n^{2}}\) 收敛，所以<strong>绝对收敛</strong>。</p>
  </div></details>
</div>

<div class="callout callout-warn"><span class="tag">注意</span>
<p>莱布尼茨的两个条件缺一不可。\(\sum\frac{(-1)^{n}}{n}\) 的绝对值级数发散，说明“收敛”不等于“绝对收敛”。判断绝对收敛，先看加绝对值后的级数。</p></div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>判断 \(\sum\dfrac{(-1)^{n}}{\sqrt{n}}\) 的收敛类型。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>莱布尼茨收敛；绝对值是 p=1/2 的 p 级数，发散。故条件收敛。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>判断 \(\sum\dfrac{(-1)^{n}n}{n^{2}+1}\) 是否收敛。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\frac{n}{n^{2}+1}\) 递减趋于 0，莱布尼茨收敛；绝对值与 \(\frac1n\) 同量级，发散。条件收敛。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>若 \(\sum|u_n|\) 收敛，\(\sum u_n\) 是否一定收敛？</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>一定。绝对收敛蕴含收敛，可用 \(|u_n|\) 的柯西准则证明。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '莱布尼茨判别', tex: String.raw`u_n\downarrow0\ \Rightarrow\ \sum(-1)^{n-1}u_n\ \text{收敛}`, note: '两个条件都要。' },
    { name: '绝对收敛', tex: String.raw`\sum|u_n|\ \text{收敛}\ \Rightarrow\ \sum u_n\ \text{收敛}`, note: '反之不成立。' },
    { name: '条件收敛', tex: String.raw`\sum u_n\ \text{收敛},\ \sum|u_n|\ \text{发散}`, note: '如 Σ(−1)ⁿ/n。' },
    { name: '余项估计', tex: String.raw`|R_n|\le u_{n+1}`, note: '莱布尼茨级数。' }
  ]
});

window.SECTIONS.push({
  id: '9-4',
  ch: 9,
  no: '9.4',
  nav: '幂级数',
  title: '幂级数：收敛区间是关键',
  tagline: '先算收敛半径，再单独检查两个端点。端点最容易被忘。',
  mins: 15,
  goals: ['求收敛半径', '确定收敛域', '在收敛区间内逐项求导、积分'],
  body: String.raw`
<p class="lead">幂级数 \(\sum a_nx^{n}\) 的收敛域一定是一个以 0 为中心（或平移后）的区间，可能带端点。</p>

<div class="callout callout-def"><span class="tag">收敛半径</span>
<p>若 \(\lim\left|\dfrac{a_{n+1}}{a_n}\right|=\rho\)，则 \(R=\dfrac{1}{\rho}\)；若 \(\rho=0\)，\(R=+\infty\)；若 \(\rho=\infty\)，\(R=0\)。</p>
<p>在 \(|x|&lt;R\) 内绝对收敛，\(|x|&gt;R\) 发散。端点 \(x=\pm R\) 必须单独代入判断。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 9.5</span><span class="ex-title">求收敛域</span></div>
  <div class="q"><p>求 \(\sum\limits_{n=1}^{\infty}\dfrac{x^{n}}{n}\) 的收敛域。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(a_n=\frac1n\)，\(\rho=\lim\frac{n}{n+1}=1\)，所以 \(R=1\)，区间 \((-1,1)\) 内绝对收敛。</p>
    <p>端点：\(x=1\) 时是调和级数，发散；\(x=-1\) 时是交错调和级数，收敛。</p>
    <p>收敛域为 \([-1,1)\)。端点必须一个个代。</p>
  </div></details>
</div>

<div class="callout callout-def"><span class="tag">性质</span>
<p>在收敛区间内，幂级数可以逐项求导、逐项积分，收敛半径不变。这条性质是后面“展开”和“求和”的基础。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 9.6</span><span class="ex-title">逐项求导求和</span></div>
  <div class="q"><p>求 \(\sum\limits_{n=1}^{\infty}nx^{n}\) 在 \(|x|&lt;1\) 内的和函数。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>由 \(\sum x^{n}=\frac{x}{1-x}\) 逐项求导：\(\sum nx^{n-1}=\frac{1}{(1-x)^{2}}\)。</p>
    <p>两边乘 x：\(\sum nx^{n}=\frac{x}{(1-x)^{2}}\)。</p>
    <p>先有和函数，再求导，比硬算快得多。</p>
  </div></details>
</div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(\sum\dfrac{x^{n}}{n!}\) 的收敛半径。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\frac{a_{n+1}}{a_n}=\frac{1}{n+1}\to0\)，\(\rho=0\)，\(R=+\infty\)，收敛域为全体实数。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求 \(\sum\dfrac{(x-1)^{n}}{2^{n}}\) 的收敛半径。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>令 \(t=x-1\)，\(\sum\frac{t^n}{2^n}\) 的 \(R=2\)，所以 \(|x-1|&lt;2\)，即 \((-1,3)\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>\(\sum n!x^{n}\) 的收敛半径是多少？</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\frac{(n+1)!}{n!}=n+1\to\infty\)，\(\rho=\infty\)，\(R=0\)，只在 \(x=0\) 收敛。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '收敛半径', tex: String.raw`R=\frac{1}{\rho},\quad \rho=\lim\left|\frac{a_{n+1}}{a_n}\right|`, note: 'ρ=0 时 R=∞。' },
    { name: '阿贝尔定理', tex: String.raw`|x|<R\ \text{绝对收敛},\ |x|>R\ \text{发散}`, note: '端点是分界。' },
    { name: '逐项求导', tex: String.raw`\left(\sum a_nx^n\right)'=\sum na_nx^{n-1}`, note: '收敛半径不变。' },
    { name: '几何级数', tex: String.raw`\sum_{n=0}^{\infty}x^{n}=\frac{1}{1-x}\ (|x|<1)`, note: '一切展开的母版。' }
  ]
});

window.SECTIONS.push({
  id: '9-5',
  ch: 9,
  no: '9.5',
  nav: '函数展开成幂级数',
  title: '函数展开：把函数写成幂级数',
  tagline: '背五个标准展开，其余靠代换、求导、积分“间接展开”。',
  mins: 15,
  goals: ['记住五个常用展开式', '用代换法展开复合函数', '知道展开的收敛范围'],
  body: String.raw`
<p class="lead">幂级数在收敛区间内可以无限次求导，所以它像一个“无穷次多项式”。把函数展开，就是找这个多项式。</p>

<div class="callout callout-def"><span class="tag">五个必须背</span>
<p>\[
e^{x}=\sum_{n=0}^{\infty}\frac{x^{n}}{n!},\qquad
\sin x=\sum_{n=0}^{\infty}\frac{(-1)^{n}x^{2n+1}}{(2n+1)!},\qquad
\cos x=\sum_{n=0}^{\infty}\frac{(-1)^{n}x^{2n}}{(2n)!},
\]</p>
<p>\[
\ln(1+x)=\sum_{n=1}^{\infty}\frac{(-1)^{n-1}x^{n}}{n}\ (|x|&lt;1),\qquad
\frac{1}{1-x}=\sum_{n=0}^{\infty}x^{n}\ (|x|&lt;1).
\]</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 9.7</span><span class="ex-title">代换展开</span></div>
  <div class="q"><p>把 \(e^{-x^{2}}\) 展开成幂级数。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>在 \(e^{t}=\sum\frac{t^{n}}{n!}\) 中令 \(t=-x^{2}\)：</p>
    <p>\[
e^{-x^{2}}=\sum_{n=0}^{\infty}\frac{(-1)^{n}x^{2n}}{n!}=1-x^{2}+\frac{x^{4}}{2!}-\cdots
\]</p>
    <p>收敛域为全体实数。代换法不用求导，最快。</p>
  </div></details>
</div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 9.8</span><span class="ex-title">积分展开</span></div>
  <div class="q"><p>把 \(\ln(1+x)\) 展开，并求 \(\ln 2\) 的级数表示。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>由 \(\frac{1}{1+t}=\sum(-1)^{n}t^{n}\) 在 \([0,x]\) 上积分：</p>
    <p>\[
\ln(1+x)=\sum_{n=1}^{\infty}\frac{(-1)^{n-1}x^{n}}{n}.
\]</p>
    <p>令 \(x=1\)（端点收敛），得 \(\ln2=1-\frac12+\frac13-\cdots\)。</p>
  </div></details>
</div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>把 \(\sin x\) 除以 x，写出 \(\dfrac{\sin x}{x}\) 的展开式。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\sum\limits_{n=0}^{\infty}\frac{(-1)^{n}x^{2n}}{(2n+1)!}=1-\frac{x^{2}}{3!}+\frac{x^{4}}{5!}-\cdots\)</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>把 \(\dfrac{1}{1+x}\) 展开成幂级数。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>把 \(x\) 换成 \(-x\)：\(\sum\limits_{n=0}^{\infty}(-1)^{n}x^{n}\)，\(|x|&lt;1\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>写出 \(e^{2x}\) 的展开式。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\sum\limits_{n=0}^{\infty}\frac{(2x)^{n}}{n!}=\sum\frac{2^{n}x^{n}}{n!}\)，收敛域全体实数。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: 'e^x', tex: String.raw`e^{x}=\sum_{n=0}^{\infty}\frac{x^{n}}{n!}`, note: '收敛域 R。' },
    { name: 'sin x', tex: String.raw`\sin x=\sum_{n=0}^{\infty}\frac{(-1)^{n}x^{2n+1}}{(2n+1)!}`, note: '只有奇次项。' },
    { name: 'ln(1+x)', tex: String.raw`\ln(1+x)=\sum_{n=1}^{\infty}\frac{(-1)^{n-1}x^{n}}{n}`, note: '|x|<1；x=1 也收敛。' },
    { name: '1/(1−x)', tex: String.raw`\frac{1}{1-x}=\sum_{n=0}^{\infty}x^{n}`, note: '|x|<1，母版。' }
  ]
});

window.SECTIONS.push({
  id: 'ch9-drill',
  ch: 9,
  kind: 'drill',
  no: '测',
  nav: '第 9 章自测',
  title: '第 9 章 · 综合自测',
  tagline: '五道题：敛散、判别、交错、收敛域、展开。',
  mins: 22,
  goals: ['判别法别用错对象', '端点单独检查'],
  body: String.raw`
<p class="lead">级数题的顺序：先看通项是否趋于 0，再判断正项/交错，选判别法，最后别忘端点。</p>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>判断 \(\sum\dfrac{n}{n+1}\) 的敛散性。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>通项趋于 1，不趋于 0，发散。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>判断 \(\sum\dfrac{1}{n^{3/2}}\) 的敛散性。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>p=1.5&gt;1，收敛。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>判断 \(\sum\dfrac{(-1)^{n-1}}{2n-1}\) 的收敛类型。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>莱布尼茨收敛；绝对值与 \(\frac1n\) 同量级，发散。条件收敛。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">04</span>求 \(\sum\dfrac{x^{n}}{3^{n}}\) 的收敛域。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>R=3，|x|&lt;3。端点 x=3 时通项为 1，发散；x=−3 时通项不趋于 0，发散。收敛域 (−3,3)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">05</span>把 \(\dfrac{1}{1+x^{2}}\) 展开成幂级数。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>在 \(\frac{1}{1-t}\) 中令 \(t=-x^{2}\)：\(\sum(-1)^{n}x^{2n}\)，|x|&lt;1。</p></div></details>
  </div>
</div>
`,
  formulas: []
});
