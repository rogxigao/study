/* 第 1 章（下）：1.5 - 1.9 + 章末自测 */
window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: '1-5',
  nav: '极限运算法则',
  ch: 1,
  no: '1.5',
  title: '极限的运算法则：先看能不能拆',
  tagline: '四则运算能用，前提是两个极限都已经存在。0/0 不是结果，是“还得再算”。',
  mins: 15,
  goals: [
    '说清四则运算法则的前提',
    '会算 x→∞ 的有理式极限（同除最高次）',
    '会处理 0/0 型：因式分解、有理化',
    '认出未定式，知道不能直接代'
  ],
  body: String.raw`
<p class="lead">上一节用定义证明了几个极限，但考试不会让你每题都找 N。真正要会的是<strong>算</strong>。算之前，先记住一句话：法则能用，是因为两个极限都已经存在。</p>

<h2>一、四则运算法则</h2>

<div class="callout callout-def"><span class="tag">定理</span>
<p>若 \(\lim f(x)=A\)，\(\lim g(x)=B\)（两个极限都存在），则</p>
<p>\[
\lim[f(x)\pm g(x)]=A\pm B,\quad \lim[f(x)g(x)]=AB,\quad \lim\frac{f(x)}{g(x)}=\frac{A}{B}\ (B\ne0).
\]</p>
<p>推论：常数可以提出来，\(\lim[Cf(x)]=C\lim f(x)\)。</p></div>

<div class="callout callout-warn"><span class="tag">前提</span>
<p>如果其中一部分的极限不存在，法则<strong>不能</strong>用。比如 \(\lim\limits_{x\to\infty}(x\sin x - x)\)，不能拆成两个无穷大相减，那是没有定义的。</p></div>

<h2>二、x → ∞ 的有理式：同除最高次</h2>

<p>\[
\lim_{x\to\infty}\frac{3x^{2}-2x+1}{2x^{2}+4}
\]</p>

<p>分子分母同除 \(x^{2}\)：</p>

<p>\[
=\lim_{x\to\infty}\frac{3-\frac{2}{x}+\frac{1}{x^{2}}}{2+\frac{4}{x^{2}}}=\frac{3-0+0}{2+0}=\frac32.
\]</p>

<p>记住三条结论（分子最高次 \(m\)，分母 \(n\)）：</p>
<ul>
  <li>\(m&lt;n\)：极限为 0；</li>
  <li>\(m=n\)：极限为首项系数之比；</li>
  <li>\(m&gt;n\)：极限为无穷大（发散）。</li>
</ul>

<h2>三、x → x₀ 的 0/0 型：先约掉零因子</h2>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 1.9</span><span class="ex-title">因式分解</span></div>
  <div class="q"><p>求 \(\lim\limits_{x\to2}\dfrac{x^{2}-4}{x-2}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>直接代 \(x=2\) 得 \(\frac00\)，这叫<strong>未定式</strong>，不是答案。</p>
    <p>分子分解：\(x^2-4=(x-2)(x+2)\)，约去 \(x-2\)（因为 \(x\to2\) 时 \(x\ne2\)，约分合法），得 \(\lim(x+2)=4\)。</p>
  </div></details>
</div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 1.10</span><span class="ex-title">分子有理化</span></div>
  <div class="q"><p>求 \(\lim\limits_{x\to0}\dfrac{\sqrt{1+x}-1}{x}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>直接代是 \(\frac00\)。分子分母同乘共轭 \(\sqrt{1+x}+1\)：</p>
    <p>\[
\frac{(\sqrt{1+x}-1)(\sqrt{1+x}+1)}{x(\sqrt{1+x}+1)}
=\frac{x}{x(\sqrt{1+x}+1)}
=\frac{1}{\sqrt{1+x}+1}\to\frac12.
\]</p>
    <p>下一节学了等价无穷小，这题可以一眼看出答案：\(\sqrt{1+x}-1\sim\frac{x}{2}\)。</p>
  </div></details>
</div>

<div class="callout callout-tip"><span class="tag">顺序</span>
<p>拿到极限先代值：能直接代就代；代出 \(\frac00\) 或 \(\frac{\infty}{\infty}\) 才动手变形；代出别的（比如 \(\frac{1}{0}\)）就要分左右看是不是无穷大。</p></div>

<h2>四、自测</h2>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(\lim\limits_{x\to\infty}\dfrac{2x^{3}-x+1}{x^{3}+2x}\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>分子分母次数相同，看首项系数。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>同除 \(x^3\)，得 \(\frac{2-1/x^2+1/x^3}{1+2/x^2}\to2\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求 \(\lim\limits_{x\to3}\dfrac{x^{2}-9}{x-3}\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>\(x^2-9\) 有现成的平方差。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>约去 \(x-3\) 得 \(x+3\)，极限为 6。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>求 \(\lim\limits_{x\to+\infty}\left(\sqrt{x^{2}+x}-x\right)\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>这是 \(\infty-\infty\)，先有理化，再同除 x。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>\[
\sqrt{x^{2}+x}-x=\frac{x}{\sqrt{x^{2}+x}+x}=\frac{1}{\sqrt{1+\frac1x}+1}\to\frac12.
\]</p>
      <p>别直接说“无穷减无穷等于 0”，那是错的。</p>
    </div></details>
  </div>
</div>
`,
  formulas: [
    { name: '四则运算', tex: String.raw`\lim(f\pm g)=A\pm B,\quad \lim(fg)=AB,\quad \lim\frac{f}{g}=\frac{A}{B}`, note: '前提：两个极限都存在，且 B≠0。' },
    { name: '有理式 x→∞', tex: String.raw`\lim_{x\to\infty}\frac{a_mx^m+\cdots}{b_nx^n+\cdots}=\begin{cases}0,&m<n\\ \frac{a_m}{b_n},&m=n\\ \infty,&m>n\end{cases}`, note: '同除最高次，一眼看次数。' },
    { name: '有理化', tex: String.raw`\sqrt{A}-\sqrt{B}=\frac{A-B}{\sqrt{A}+\sqrt{B}}`, note: '根号差 → 乘共轭。' }
  ]
});

window.SECTIONS.push({
  id: '1-6',
  nav: '两个重要极限',
  ch: 1,
  no: '1.6',
  title: '两个重要极限：一切计算的母版',
  tagline: 'sin□/□ → 1，(1+□)^(1/□) → e。认出“□”，比背公式重要。',
  mins: 17,
  goals: [
    '认出 sin□/□ 结构并凑出 1',
    '把 1^∞ 型化成 e 的极限',
    '记住 e 的两个等价形式',
    '会用 e^{lim v(u−1)} 这个速算'
  ],
  body: String.raw`
<p class="lead">这两个极限之所以“重要”，是因为后面几乎所有三角函数的导数、指数函数的导数，都要从它们推出来。它们不是两个公式，是两种<strong>结构</strong>。</p>

<h2>一、第一个：\(\lim\limits_{x\to0}\dfrac{\sin x}{x}=1\)</h2>

<p>注意三件事：<strong>x 用弧度</strong>；分子、分母、sin 里面是<strong>同一个方框</strong>；这个方框<strong>趋于 0</strong>。</p>

<div class="callout callout-idea"><span class="tag">结构</span>
<p>\[
\lim_{\square\to0}\frac{\sin\square}{\square}=1.
\]</p>
<p>方框里可以是 \(3x\)、\(x^2\)、\(\sin x\)，只要三处一致、且趋于 0，答案就是 1。</p></div>

<div class="widget" data-widget="twolimits"><div class="w-head"><b>拖 x 与 n</b><span>两条曲线分别贴向 1 和 e</span></div></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 1.11</span><span class="ex-title">凑结构</span></div>
  <div class="q"><p>求 \(\lim\limits_{x\to0}\dfrac{\sin 3x}{x}\) 与 \(\lim\limits_{x\to0}\dfrac{\tan x}{x}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>第一题：\(\frac{\sin3x}{x}=3\cdot\frac{\sin3x}{3x}\to3\cdot1=3\)。</p>
    <p>第二题：\(\frac{\tan x}{x}=\frac{\sin x}{x}\cdot\frac{1}{\cos x}\to1\cdot1=1\)。</p>
    <p>要点是“缺什么补什么”，补的系数要在外面除回去。</p>
  </div></details>
</div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 1.12</span><span class="ex-title">1 − cos x</span></div>
  <div class="q"><p>求 \(\lim\limits_{x\to0}\dfrac{1-\cos x}{x^{2}}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>用半角公式 \(1-\cos x=2\sin^{2}\frac{x}{2}\)：</p>
    <p>\[
\frac{2\sin^{2}\frac x2}{x^{2}}
=2\cdot\left(\frac{\sin\frac x2}{\frac x2}\right)^{2}\cdot\frac{1}{4}
\to\frac12.
\]</p>
    <p>结论记牢：\(1-\cos x\sim\frac{x^2}{2}\)（下一节会正式讲）。</p>
  </div></details>
</div>

<h2>二、第二个：\(\lim\limits_{x\to\infty}\left(1+\frac1x\right)^{x}=e\)</h2>

<p>它的本质是 \(1^{\infty}\) 型：底数贴着 1，指数冲向无穷。换成 \(x\to0\) 的写法更好用：</p>

<p>\[
\lim_{x\to0}(1+x)^{\frac1x}=e.
\]</p>

<div class="callout callout-def"><span class="tag">结构</span>
<p>\[
\lim_{\square\to0}(1+\square)^{\frac{1}{\square}}=e.
\]</p>
<p>“1 加一个无穷小”的“无穷小分之一次方”。指数和括号里的无穷小必须互为倒数。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 1.13</span><span class="ex-title">凑指数</span></div>
  <div class="q"><p>求 \(\lim\limits_{x\to\infty}\left(1+\frac{2}{x}\right)^{x}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>令 \(u=\frac2x\)，则 \(x=\frac2u\)，原式 \(=(1+u)^{2/u}=\left[(1+u)^{1/u}\right]^{2}\to e^{2}\)。</p>
    <p>熟练后可以只看“指数 × 括号里的无穷小”：\(x\cdot\frac2x=2\)，答案 \(e^2\)。</p>
  </div></details>
</div>

<div class="callout callout-tip"><span class="tag">速算</span>
<p>对 \(u(x)^{v(x)}\)，若 \(u\to1\)、\(v\to\infty\)，则</p>
<p>\[
\lim u^{v}=e^{\lim v(u-1)}.
\]</p>
<p>原理是 \(\ln u\sim u-1\)。用之前确认：底数确实趋于 1，指数确实趋于无穷。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 1.14</span><span class="ex-title">负号与系数</span></div>
  <div class="q"><p>求 \(\lim\limits_{x\to\infty}\left(1-\frac1x\right)^{x}\) 与 \(\lim\limits_{x\to0}(1+2x)^{\frac1x}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>第一题：\(v(u-1)=x\cdot\left(-\frac1x\right)=-1\)，答案 \(e^{-1}\)。</p>
    <p>第二题：\(\frac1x\cdot 2x=2\)，答案 \(e^{2}\)。</p>
    <p>两个都是 \(1^\infty\) 型，套同一个模板。</p>
  </div></details>
</div>

<h2>三、自测</h2>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(\lim\limits_{x\to0}\dfrac{\sin 2x}{\sin 3x}\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>上下各自凑成“sin□/□”。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\[
\frac{\sin2x}{\sin3x}=\frac{\sin2x}{2x}\cdot\frac{3x}{\sin3x}\cdot\frac{2}{3}\to\frac23.
\]</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求 \(\lim\limits_{n\to\infty}\left(1+\dfrac{1}{2n}\right)^{n}\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>指数乘括号里的无穷小：\(n\cdot\frac{1}{2n}=?\)</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(n\cdot\frac1{2n}=\frac12\)，所以极限为 \(e^{1/2}=\sqrt{e}\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>求 \(\lim\limits_{x\to\infty}x\sin\dfrac{1}{x}\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>令 \(t=\frac1x\)，看看变成什么结构。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>令 \(t=\frac1x\to0\)，原式 \(=\frac{\sin t}{t}\to1\)。这题同时用到了“变量替换”和第一个重要极限。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '第一个重要极限', tex: String.raw`\lim_{x\to0}\frac{\sin x}{x}=1,\qquad \lim_{\square\to0}\frac{\sin\square}{\square}=1`, note: '三处一致，且方框趋于 0。' },
    { name: '第二个重要极限', tex: String.raw`\lim_{x\to\infty}\left(1+\frac1x\right)^x=e,\qquad \lim_{x\to0}(1+x)^{1/x}=e`, note: '1^∞ 型的母版。' },
    { name: '1^∞ 速算', tex: String.raw`u\to1,\ v\to\infty\ \Rightarrow\ \lim u^{v}=e^{\lim v(u-1)}`, note: '原理：ln u ~ u−1。' },
    { name: '常用变形', tex: String.raw`1-\cos x\sim\frac{x^{2}}{2},\qquad \tan x\sim x`, note: '都由第一个重要极限推出来。' }
  ]
});

window.SECTIONS.push({
  id: '1-7',
  nav: '无穷小比较',
  ch: 1,
  no: '1.7',
  title: '无穷小的比较：谁瘦得更快',
  tagline: '两个都趋于 0，看它们的比值。比值定“阶”，阶定了就能替换。',
  mins: 15,
  goals: [
    '判断高阶、低阶、同阶、等价',
    '背下常用的等价无穷小',
    '在乘除中放心替换，在加减中保持警惕'
  ],
  body: String.raw`
<p class="lead">\(x\)、\(x^2\)、\(\sin x\) 在 \(x\to0\) 时都是无穷小，但它们“瘦”的速度不一样。比较的办法很朴素：<strong>相除，看比值</strong>。</p>

<h2>一、四个档位</h2>

<div class="callout callout-def"><span class="tag">定义</span>
<p>设 \(\alpha,\beta\) 是同一过程中的无穷小，且 \(\alpha\ne0\)。</p>
<ul>
  <li>若 \(\lim\frac{\beta}{\alpha}=0\)，称 \(\beta\) 是 \(\alpha\) 的<strong>高阶</strong>无穷小，记 \(\beta=o(\alpha)\)；</li>
  <li>若 \(\lim\frac{\beta}{\alpha}=\infty\)，称 \(\beta\) 是 \(\alpha\) 的<strong>低阶</strong>无穷小；</li>
  <li>若 \(\lim\frac{\beta}{\alpha}=c\ne0\)，称二者<strong>同阶</strong>；</li>
  <li>若 \(\lim\frac{\beta}{\alpha}=1\)，称二者<strong>等价</strong>，记 \(\alpha\sim\beta\)。</li>
</ul></div>

<p>等价是同阶里最“贴身”的一种。它的价值在于：<strong>乘除里可以把一个无穷小换成与它等价的另一个，极限不变。</strong></p>

<div class="widget" data-widget="compare"><div class="w-head"><b>同时看三条曲线</b><span>x、x²、sin x 在 0 附近</span></div></div>

<h2>二、常用等价无穷小（x → 0）</h2>

<div class="callout callout-tip"><span class="tag">必背</span>
<p>\[
\sin x\sim x,\quad \tan x\sim x,\quad \arcsin x\sim x,\quad \arctan x\sim x,
\]</p>
<p>\[
1-\cos x\sim\frac{x^{2}}{2},\quad \ln(1+x)\sim x,\quad e^{x}-1\sim x,
\]</p>
<p>\[
(1+x)^{\alpha}-1\sim\alpha x,\quad a^{x}-1\sim x\ln a.
\]</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 1.15</span><span class="ex-title">直接换</span></div>
  <div class="q"><p>求 \(\lim\limits_{x\to0}\dfrac{\ln(1+2x)}{x}\) 与 \(\lim\limits_{x\to0}\dfrac{e^{3x}-1}{x}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(\ln(1+2x)\sim2x\)，所以第一题 \(=2\)。</p>
    <p>\(e^{3x}-1\sim3x\)，所以第二题 \(=3\)。整个 3x 当作方框，不是只换 x。</p>
  </div></details>
</div>

<h2>三、加减里为什么不能随便换</h2>

<div class="callout callout-warn"><span class="tag">大坑</span>
<p>求 \(\lim\limits_{x\to0}\dfrac{x-\sin x}{x^{3}}\)。如果直接把 \(\sin x\) 换成 \(x\)，分子变成 0，得出极限 0——<strong>这是错的</strong>，正确答案是 \(\frac16\)。</p>
<p>原因是：等价替换只保证“主部”相同，加减时两个主部互相抵消，剩下的正是被你扔掉的“次部”。</p></div>

<p>正确做法是保留更高阶的项。由泰勒展开 \(\sin x=x-\frac{x^3}{6}+o(x^3)\)，得 \(x-\sin x\sim\frac{x^{3}}{6}\)，于是极限为 \(\frac16\)。（泰勒公式在第 3 章会正式讲，这里先知道“加减要小心”就够了。）</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 1.16</span><span class="ex-title">先提公因子，再替换</span></div>
  <div class="q"><p>求 \(\lim\limits_{x\to0}\dfrac{\tan x-\sin x}{x^{3}}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>不要分别换。先提出 \(\sin x\)：</p>
    <p>\[
\tan x-\sin x=\sin x\left(\frac{1}{\cos x}-1\right)=\sin x\cdot\frac{1-\cos x}{\cos x}.
\]</p>
    <p>现在整体是乘积：\(\sin x\sim x\)，\(1-\cos x\sim\frac{x^2}{2}\)，\(\cos x\to1\)。所以原式 \(\sim x\cdot\frac{x^2}{2}\big/x^3=\frac12\)。</p>
  </div></details>
</div>

<h2>四、自测</h2>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(\lim\limits_{x\to0}\dfrac{1-\cos 2x}{x^{2}}\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>把 \(2x\) 当成一个整体方框。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(1-\cos 2x\sim\frac{(2x)^2}{2}=2x^{2}\)，极限为 2。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求 \(\lim\limits_{x\to0}\dfrac{\sqrt{1+x}-1}{x}\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>用 \((1+x)^{\alpha}-1\sim\alpha x\)，这里 α 是多少？</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\alpha=\frac12\)，所以分子 \(\sim\frac{x}{2}\)，极限为 \(\frac12\)。和上一节有理化的结果一致。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>当 \(x\to0\) 时，\(x^{2}\) 是 \(x\) 的几阶无穷小？\(\sqrt{x}\) 呢？</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>算比值 \(x^2/x\) 与 \(\sqrt{x}/x\)。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(x^2/x=x\to0\)，所以 \(x^2\) 是 \(x\) 的高阶无穷小；\(\sqrt{x}/x=1/\sqrt{x}\to\infty\)，所以 \(\sqrt{x}\) 是 \(x\) 的低阶无穷小。注意这里默认 \(x&gt;0\)，否则 \(\sqrt{x}\) 没意义。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '阶的定义', tex: String.raw`\lim\frac{\beta}{\alpha}=0\ (\text{高阶}),\quad =c\ne0\ (\text{同阶}),\quad =1\ (\text{等价})`, note: '比值定阶。' },
    { name: '等价替换（乘除）', tex: String.raw`\alpha\sim\alpha',\ \beta\sim\beta'\ \Rightarrow\ \lim\frac{\beta}{\alpha}=\lim\frac{\beta'}{\alpha'}`, note: '只在乘除因子中替换。' },
    { name: '常用等价（一）', tex: String.raw`\sin x\sim x,\quad \tan x\sim x,\quad \ln(1+x)\sim x,\quad e^{x}-1\sim x`, note: 'x→0。' },
    { name: '常用等价（二）', tex: String.raw`1-\cos x\sim\frac{x^{2}}{2},\quad (1+x)^{\alpha}-1\sim\alpha x`, note: '1−cos x 是二阶，别当一阶。' }
  ]
});

window.SECTIONS.push({
  id: '1-8',
  nav: '连续与间断',
  ch: 1,
  no: '1.8',
  title: '连续与间断：一笔画过去',
  tagline: '连续就是“极限值等于函数值”。断的地方分两类，看左右极限长什么样。',
  mins: 14,
  goals: [
    '用三句话检查连续',
    '分清左右连续',
    '按左右极限给间断点分类',
    '会求分段函数里的待定参数'
  ],
  body: String.raw`
<p class="lead">“连续”在几何上就是<strong>一笔画不断</strong>。但要算题，得把它翻译成极限语言。</p>

<h2>一、连续的三句话</h2>

<div class="callout callout-def"><span class="tag">定义</span>
<p>若 \(\lim\limits_{x\to x_0}f(x)=f(x_0)\)，则称 \(f\) 在 \(x_0\) 处连续。展开成三条，缺一不可：</p>
<ol>
  <li>\(f(x_0)\) 有定义；</li>
  <li>\(\lim\limits_{x\to x_0}f(x)\) 存在；</li>
  <li>两者相等。</li>
</ol></div>

<p>等价写法：\(\lim\limits_{\Delta x\to0}\Delta y=0\)，即自变量的小变化只引起函数值的小变化。</p>

<p>若只从一侧逼近，就得到<strong>左连续</strong> \(f(x_0^-)=f(x_0)\) 与<strong>右连续</strong> \(f(x_0^+)=f(x_0)\)。在区间端点谈连续，说的就是单侧连续。</p>

<h2>二、间断点：断法只有几种</h2>

<div class="widget" data-widget="cont"><div class="w-head"><b>三种断法</b><span>点按钮切换</span></div></div>

<ul>
  <li><strong>可去间断</strong>：左右极限都存在且相等，但函数值没定义或不等于极限。补一个点就能接上，所以叫“可去”。</li>
  <li><strong>跳跃间断</strong>：左右极限都存在，但不相等。图像在这里“跳”了一下。</li>
  <li><strong>无穷间断</strong>：至少一侧趋于无穷。比如 \(1/x\) 在 0 点。</li>
  <li><strong>振荡间断</strong>：比如 \(\sin\frac1x\) 在 0 点，函数值在 −1 与 1 之间无限次摆动，极限不存在。</li>
</ul>

<p>前两类合称<strong>第一类间断</strong>（左右极限都存在），后两类是<strong>第二类间断</strong>。</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 1.17</span><span class="ex-title">分类</span></div>
  <div class="q"><p>指出 \(f(x)=\dfrac{x^{2}-1}{x-1}\) 在 \(x=1\) 处的间断类型。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(x\ne1\) 时 \(f(x)=x+1\)，所以 \(\lim\limits_{x\to1}f(x)=2\)，左右极限存在且相等。</p>
    <p>但 \(f(1)\) 没有定义。属于<strong>可去间断</strong>；补充定义 \(f(1)=2\) 后即连续。</p>
  </div></details>
</div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 1.18</span><span class="ex-title">求参数</span></div>
  <div class="q"><p>设 \(f(x)=\begin{cases}\dfrac{\sin ax}{x},&x\ne0\\ 3,&x=0\end{cases}\) 在 \(x=0\) 处连续，求 \(a\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>连续要求 \(\lim\limits_{x\to0}\frac{\sin ax}{x}=f(0)=3\)。</p>
    <p>而 \(\frac{\sin ax}{x}=a\cdot\frac{\sin ax}{ax}\to a\)。所以 \(a=3\)。</p>
  </div></details>
</div>

<h2>三、自测</h2>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>\(f(x)=\dfrac{1}{(x-3)^{2}}\) 在 \(x=3\) 处是什么间断？</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>看 x→3 时函数值往哪儿跑。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>两侧都趋于 \(+\infty\)，是无穷间断（第二类）。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>\(f(x)=\begin{cases}x,&x<1\\ x+1,&x\ge1\end{cases}\) 在 \(x=1\) 处是什么间断？</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>分别算左极限和右极限。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>左极限 1，右极限 2，都存在但不相等，是跳跃间断（第一类）。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>“函数在 \(x_0\) 处有极限，就一定在该点连续”，对吗？</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>连续比极限多要求了什么？</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>不对。还要 \(f(x_0)\) 有定义，并且极限值等于函数值。比如 \(f(x)=\frac{x^2-1}{x-1}\) 在 1 处有极限 2，但不连续。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '连续的定义', tex: String.raw`\lim_{x\to x_0}f(x)=f(x_0)`, note: '有定义、有极限、两者相等。' },
    { name: '单侧连续', tex: String.raw`f(x_0^-)=f(x_0)\ \text{或}\ f(x_0^+)=f(x_0)`, note: '端点处只谈单侧。' },
    { name: '间断分类', tex: String.raw`\text{第一类：左右极限都存在；第二类：至少一侧不存在}`, note: '可去、跳跃属第一类；无穷、振荡属第二类。' }
  ]
});

window.SECTIONS.push({
  id: '1-9',
  nav: '闭区间性质',
  ch: 1,
  no: '1.9',
  title: '闭区间上的连续函数：四条保命定理',
  tagline: '有界、有最值、能取中间值、能穿零。证明题的两大武器都在这里。',
  mins: 14,
  goals: [
    '说出四条定理各自的条件与结论',
    '用零点定理证明方程有根',
    '知道“闭区间”和“连续”缺一不可'
  ],
  body: String.raw`
<p class="lead">这一节没有复杂计算，但它是<strong>证明题</strong>的弹药库。四条定理都要求两个前提：闭区间 \([a,b]\)、函数连续。少一个，结论就可能不成立。</p>

<h2>一、四条定理</h2>

<div class="callout callout-def"><span class="tag">定理</span>
<p>设 \(f\) 在闭区间 \([a,b]\) 上连续，则：</p>
<ol>
  <li><strong>有界性</strong>：\(f\) 在 \([a,b]\) 上有界；</li>
  <li><strong>最值定理</strong>：\(f\) 在 \([a,b]\) 上一定能取到最大值和最小值；</li>
  <li><strong>介值定理</strong>：对任意介于 \(f(a)\) 与 \(f(b)\) 之间的 \(\mu\)，存在 \(\xi\in[a,b]\)，使 \(f(\xi)=\mu\)；</li>
  <li><strong>零点定理</strong>：若 \(f(a)\cdot f(b)&lt;0\)，则存在 \(\xi\in(a,b)\)，使 \(f(\xi)=0\)。</li>
</ol></div>

<div class="widget" data-widget="ivt"><div class="w-head"><b>拖横线</b><span>连续曲线躲不开每一条中间高度</span></div></div>

<p>零点定理是介值定理的特例（取 \(\mu=0\)）。它是证明“方程有根”的标准工具，步骤固定：<strong>构造函数 → 算两端符号 → 下结论</strong>。</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 1.19</span><span class="ex-title">证明方程有根</span></div>
  <div class="q"><p>证明方程 \(x^{3}-4x^{2}+1=0\) 在 \((0,1)\) 内至少有一个根。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>令 \(f(x)=x^3-4x^2+1\)。它是多项式，在 \([0,1]\) 上连续。</p>
    <p>\(f(0)=1&gt;0\)，\(f(1)=1-4+1=-2&lt;0\)。</p>
    <p>由零点定理，存在 \(\xi\in(0,1)\)，使 \(f(\xi)=0\)。证完。</p>
    <p>注意结论只保证“至少一个”，不保证唯一；要证唯一，还得加单调性。</p>
  </div></details>
</div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 1.20</span><span class="ex-title">不动点</span></div>
  <div class="q"><p>证明方程 \(x=\cos x\) 在 \(\left(0,\frac{\pi}{2}\right)\) 内至少有一个根。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>令 \(f(x)=x-\cos x\)，在 \(\left[0,\frac{\pi}{2}\right]\) 上连续。</p>
    <p>\(f(0)=0-1=-1&lt;0\)，\(f\left(\frac{\pi}{2}\right)=\frac{\pi}{2}-0&gt;0\)。</p>
    <p>由零点定理，存在 \(\xi\in\left(0,\frac{\pi}{2}\right)\)，使 \(f(\xi)=0\)，即 \(\xi=\cos\xi\)。</p>
  </div></details>
</div>

<div class="callout callout-warn"><span class="tag">条件</span>
<p>把闭区间换成开区间，或去掉连续，结论都可能失效。例如 \(f(x)=\frac1x\) 在 \((0,1)\) 上连续但无界；\(f(x)=\frac1x\) 在 \([-1,1]\) 上（除去 0）不连续，也取不到最值。</p></div>

<h2>二、自测</h2>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>证明 \(x\cdot2^{x}=1\) 在 \((0,1)\) 内至少有一个根。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>把 1 移到左边，构造 \(f(x)=x2^x-1\)。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(f(0)=-1&lt;0\)，\(f(1)=2-1=1&gt;0\)，且 f 在 [0,1] 连续。由零点定理得证。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>\(f(x)=\dfrac1x\) 在 \([-1,1]\) 上是否一定有最大值？</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>先检查定理的条件是否满足。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>没有。它在 \(x=0\) 处不连续，不满足最值定理的条件；事实上函数在 0 附近无界，取不到最大值。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>若 \(f\) 在 \([a,b]\) 上连续，且 \(f(a)=f(b)\)，是否一定存在最大值？</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>和端点值相等与否有关系吗？</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>一定存在。最值定理只要求闭区间上连续，不要求两端相等。最大值可能在内部取到。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '有界与最值', tex: String.raw`f\in C[a,b]\ \Rightarrow\ f\ \text{有界，且能取到 }M,m`, note: '闭区间 + 连续，缺一不可。' },
    { name: '介值定理', tex: String.raw`\mu\in[f(a),f(b)]\ \Rightarrow\ \exists\xi,\ f(\xi)=\mu`, note: '连续曲线不漏掉中间高度。' },
    { name: '零点定理', tex: String.raw`f(a)f(b)<0\ \Rightarrow\ \exists\xi\in(a,b),\ f(\xi)=0`, note: '证明方程有根的标准套路。' }
  ]
});

window.SECTIONS.push({
  id: 'ch1-drill',
  nav: '第 1 章自测',
  ch: 1,
  kind: 'drill',
  no: '测',
  title: '第 1 章 · 综合自测',
  tagline: '六道题，覆盖极限计算、连续与证明。做完再对答案。',
  mins: 25,
  goals: ['把零散的方法串成一条线', '检查自己到底卡在哪一类'],
  body: String.raw`
<p class="lead">先合上前面所有小节，给自己 25 分钟。做不出来没关系，重点是<strong>看解析时能指出自己断在哪一步</strong>。</p>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(\lim\limits_{x\to1}\dfrac{x^{2}-3x+2}{x^{2}-1}\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>0/0 型。分子 \((x-1)(x-2)\)，分母 \((x-1)(x+1)\)，约去 \(x-1\)，得 \(\frac{x-2}{x+1}\to-\frac12\)。</p>
    </div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求 \(\lim\limits_{x\to2}\dfrac{\sqrt{x+2}-2}{x-2}\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>有理化：\(\frac{x-2}{(x-2)(\sqrt{x+2}+2)}=\frac{1}{\sqrt{x+2}+2}\to\frac14\)。</p>
    </div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>求 \(\lim\limits_{x\to\infty}\left(1+\dfrac{3}{x}\right)^{2x}\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>1^∞ 型。指数乘括号内无穷小：\(2x\cdot\frac3x=6\)，极限为 \(e^{6}\)。</p>
    </div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">04</span>求 \(\lim\limits_{x\to0}\dfrac{1-\cos x}{x\sin x}\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>分子 \(\sim\frac{x^2}{2}\)，分母 \(x\sin x\sim x^2\)，故极限为 \(\frac12\)。</p>
      <p>若不敢直接换，也可以写成 \(\frac{1-\cos x}{x^2}\cdot\frac{x}{\sin x}\to\frac12\cdot1\)。</p>
    </div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">05</span>设 \(f(x)=\begin{cases}\dfrac{e^{x}-1}{x},&x\ne0\\ a,&x=0\end{cases}\) 在 \(x=0\) 处连续，求 \(a\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>连续要求 \(a=\lim\limits_{x\to0}\frac{e^x-1}{x}\)。由 \(e^x-1\sim x\)，极限为 1，故 \(a=1\)。</p>
    </div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">06</span>证明 \(x^{5}-3x+1=0\) 在 \((0,1)\) 内至少有一个根。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>令 \(f(x)=x^5-3x+1\)，在 \([0,1]\) 上连续。\(f(0)=1&gt;0\)，\(f(1)=1-3+1=-1&lt;0\)。</p>
      <p>由零点定理，存在 \(\xi\in(0,1)\) 使 \(f(\xi)=0\)。</p>
    </div></details>
  </div>
</div>

<div class="callout callout-tip"><span class="tag">复盘</span>
<p>如果 1、2 题卡住，回 1.5 练因式分解与有理化；3、4 题卡住，回 1.6、1.7 背结构与等价表；5 题卡住，回 1.8 看“连续三句话”；6 题卡住，回 1.9 记零点定理的三步。</p></div>
`,
  formulas: []
});
