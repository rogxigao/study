/* 第 4 章：不定积分 */
window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: '4-1',
  ch: 4,
  no: '4.1',
  nav: '概念与性质',
  title: '不定积分：导数的逆运算',
  tagline: '已知导数，反推原函数。答案永远带一个 C，因为常数的导数是 0。',
  mins: 14,
  goals: ['理解原函数与不定积分', '背下基本积分表', '用性质拆项积分'],
  body: String.raw`
<p class="lead">求导是“从函数到导数”，积分是“从导数回到函数”。方向一反，答案就不唯一了——差一个常数。</p>

<div class="callout callout-def"><span class="tag">定义</span>
<p>若在区间 I 上 \(F'(x)=f(x)\)，则称 \(F\) 是 \(f\) 的一个<strong>原函数</strong>。\(f\) 的全体原函数记作</p>
<p>\[
\int f(x)\,\mathrm{d}x=F(x)+C,
\]</p>
<p>叫 \(f\) 的<strong>不定积分</strong>，C 是任意常数。</p></div>

<p>“不定”就定在这个 C 上：\(x^{2}\)、\(x^{2}+1\)、\(x^{2}-5\) 的导数都是 \(2x\)，所以 \(\int 2x\,\mathrm{d}x=x^{2}+C\)。</p>

<div class="callout callout-warn"><span class="tag">别漏</span>
<p>不定积分的结果一定要写 \(+C\)。考试里漏 C，整题的分就没了。另外 \(\int\frac1x\mathrm{d}x=\ln|x|+C\)，绝对值不能丢。</p></div>

<h2>基本积分表</h2>

<ul>
  <li>\(\int k\,\mathrm{d}x=kx+C\)，\(\int x^{\alpha}\mathrm{d}x=\frac{x^{\alpha+1}}{\alpha+1}+C\ (\alpha\ne-1)\)；</li>
  <li>\(\int\frac1x\mathrm{d}x=\ln|x|+C\)，\(\int e^{x}\mathrm{d}x=e^{x}+C\)，\(\int a^{x}\mathrm{d}x=\frac{a^{x}}{\ln a}+C\)；</li>
  <li>\(\int\sin x\,\mathrm{d}x=-\cos x+C\)，\(\int\cos x\,\mathrm{d}x=\sin x+C\)；</li>
  <li>\(\int\sec^{2}x\,\mathrm{d}x=\tan x+C\)，\(\int\frac{\mathrm{d}x}{1+x^{2}}=\arctan x+C\)，\(\int\frac{\mathrm{d}x}{\sqrt{1-x^{2}}}=\arcsin x+C\)。</li>
</ul>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 4.1</span><span class="ex-title">逐项积分</span></div>
  <div class="q"><p>求 \(\int\left(3x^{2}+\dfrac2x-e^{x}\right)\mathrm{d}x\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>逐项用表：\(x^{3}+2\ln|x|-e^{x}+C\)。</p>
    <p>验算方法：把结果求导，应该回到被积函数。这一步能自查九成的计算错误。</p>
  </div></details>
</div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(\int\left(x^{2}+1\right)^{2}\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>先展开：\(x^{4}+2x^{2}+1\)，积分得 \(\frac{x^{5}}{5}+\frac{2x^{3}}{3}+x+C\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求 \(\int\left(2^{x}+\sec^{2}x\right)\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\frac{2^{x}}{\ln2}+\tan x+C\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>求 \(\int\left(\frac{1}{1+x^{2}}-\frac{1}{\sqrt{1-x^{2}}}\right)\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\arctan x-\arcsin x+C\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '不定积分', tex: String.raw`\int f(x)\mathrm{d}x=F(x)+C,\quad F'=f`, note: '结果必须带 C。' },
    { name: '幂函数', tex: String.raw`\int x^{\alpha}\mathrm{d}x=\frac{x^{\alpha+1}}{\alpha+1}+C\ (\alpha\ne-1)`, note: 'α=−1 时是 ln|x|。' },
    { name: '指数与三角', tex: String.raw`\int e^{x}\mathrm{d}x=e^{x}+C,\quad \int\sin x\,\mathrm{d}x=-\cos x+C`, note: 'sin 积分带负号。' },
    { name: '反三角', tex: String.raw`\int\frac{\mathrm{d}x}{1+x^{2}}=\arctan x+C,\quad \int\frac{\mathrm{d}x}{\sqrt{1-x^{2}}}=\arcsin x+C`, note: '分母有根号是 arcsin。' }
  ]
});

window.SECTIONS.push({
  id: '4-2',
  ch: 4,
  no: '4.2',
  nav: '换元积分法',
  title: '换元积分法：把复杂的一坨换成 u',
  tagline: '第一类凑微分，第二类换掉 x。换完记得换回来。',
  mins: 16,
  goals: ['识别 φ′(x)dx = dφ 的结构', '用三角换元去根号', '换元后回代'],
  body: String.raw`
<p class="lead">积分没有“万能公式”，换元是最常用的一招。核心是：把被积式里的一坨整体看成 u，让积分变成基本表里的样子。</p>

<div class="callout callout-def"><span class="tag">第一类</span>
<p>若被积式能写成 \(f(\varphi(x))\varphi'(x)\mathrm{d}x\)，则</p>
<p>\[
\int f(\varphi(x))\varphi'(x)\mathrm{d}x=\int f(u)\mathrm{d}u=F(u)+C.
\]</p>
<p>也就是“凑微分”：\(\varphi'(x)\mathrm{d}x=\mathrm{d}\varphi(x)\)。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 4.2</span><span class="ex-title">凑微分</span></div>
  <div class="q"><p>求 \(\int 2xe^{x^{2}}\mathrm{d}x\) 与 \(\int\dfrac{x}{1+x^{2}}\mathrm{d}x\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>第一题：\(2x\,\mathrm{d}x=\mathrm{d}(x^{2})\)，所以原式 \(=\int e^{u}\mathrm{d}u=e^{x^{2}}+C\)。</p>
    <p>第二题：\(x\,\mathrm{d}x=\frac12\mathrm{d}(1+x^{2})\)，所以 \(=\frac12\ln(1+x^{2})+C\)。</p>
    <p>看不出来时，先试着把分子凑成内层函数的导数，差一个常数就提出来。</p>
  </div></details>
</div>

<div class="callout callout-def"><span class="tag">第二类</span>
<p>令 \(x=\varphi(t)\)，则 \(\int f(x)\mathrm{d}x=\int f(\varphi(t))\varphi'(t)\mathrm{d}t\)。常用于去根号：\(\sqrt{a^{2}-x^{2}}\) 令 \(x=a\sin t\)。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 4.3</span><span class="ex-title">三角换元</span></div>
  <div class="q"><p>求 \(\int\sqrt{1-x^{2}}\,\mathrm{d}x\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>令 \(x=\sin t\)，\(\mathrm{d}x=\cos t\,\mathrm{d}t\)，根号变成 \(\cos t\)。</p>
    <p>\[
\int\cos^{2}t\,\mathrm{d}t=\frac12\int(1+\cos2t)\mathrm{d}t=\frac t2+\frac{\sin2t}{4}+C.
\]</p>
    <p>回代：\(t=\arcsin x\)，\(\sin2t=2x\sqrt{1-x^{2}}\)，得 \(\frac12\arcsin x+\frac12x\sqrt{1-x^{2}}+C\)。</p>
    <p>换元积分最后一定要<strong>换回原变量</strong>，除非是定积分且已经换了限。</p>
  </div></details>
</div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(\int e^{3x}\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\frac13e^{3x}+C\)。凑 \(\mathrm{d}(3x)=3\mathrm{d}x\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求 \(\int x^{2}(x^{3}+1)^{5}\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>令 \(u=x^{3}+1\)，\(\mathrm{d}u=3x^{2}\mathrm{d}x\)，原式 \(=\frac13\cdot\frac{u^{6}}{6}+C=\frac{(x^{3}+1)^{6}}{18}+C\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>求 \(\int\dfrac{\mathrm{d}x}{x\ln x}\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>令 \(u=\ln x\)，\(\mathrm{d}u=\mathrm{d}x/x\)，原式 \(=\ln|u|+C=\ln|\ln x|+C\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '第一类换元', tex: String.raw`\int f(\varphi)\varphi'\mathrm{d}x=\int f(u)\mathrm{d}u`, note: '凑微分。' },
    { name: '第二类换元', tex: String.raw`\int f(x)\mathrm{d}x=\int f(\varphi(t))\varphi'(t)\mathrm{d}t`, note: '三角换元去根号。' },
    { name: '常用三角换元', tex: String.raw`\sqrt{a^{2}-x^{2}}:x=a\sin t;\quad \sqrt{a^{2}+x^{2}}:x=a\tan t`, note: '换完别忘回代。' },
    { name: '常用凑微分', tex: String.raw`x\mathrm{d}x=\frac12\mathrm{d}(x^{2}),\quad \frac{\mathrm{d}x}{x}=\mathrm{d}(\ln x)`, note: '先凑再换。' }
  ]
});

window.SECTIONS.push({
  id: '4-3',
  ch: 4,
  no: '4.3',
  nav: '分部积分法',
  title: '分部积分：把难积的挪到另一边',
  tagline: '∫u dv = uv − ∫v du。选对 u，新积分要比原来好算。',
  mins: 14,
  goals: ['记住分部公式', '按“反对幂三指”选 u', '处理循环积分'],
  body: String.raw`
<p class="lead">被积式是“两类函数的乘积”时，换元往往不灵，改用分部：把一部分先积掉，把导数挪到另一部分上。</p>

<div class="callout callout-def"><span class="tag">公式</span>
<p>\[
\int u\,\mathrm{d}v=uv-\int v\,\mathrm{d}u.
\]</p>
<p>来源就是乘积求导法则 \((uv)'=u'v+uv'\) 两边积分。</p></div>

<p>选 u 的经验顺序：<strong>反三角、对数、幂函数、三角、指数</strong>。排在前面的优先当 u，因为它求导会变简单。</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 4.4</span><span class="ex-title">幂 × 指数</span></div>
  <div class="q"><p>求 \(\int xe^{x}\mathrm{d}x\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>取 \(u=x\)，\(\mathrm{d}v=e^{x}\mathrm{d}x\)，则 \(\mathrm{d}u=\mathrm{d}x\)，\(v=e^{x}\)。</p>
    <p>\[
\int xe^{x}\mathrm{d}x=xe^{x}-\int e^{x}\mathrm{d}x=e^{x}(x-1)+C.
\]</p>
    <p>幂函数求导会降次，所以让它当 u；指数函数好积，让它当 dv。</p>
  </div></details>
</div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 4.5</span><span class="ex-title">只有对数</span></div>
  <div class="q"><p>求 \(\int\ln x\,\mathrm{d}x\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>把 \(\ln x\) 看成 \(\ln x\cdot1\)。取 \(u=\ln x\)，\(\mathrm{d}v=\mathrm{d}x\)，则 \(\mathrm{d}u=\frac{\mathrm{d}x}{x}\)，\(v=x\)。</p>
    <p>\[
\int\ln x\,\mathrm{d}x=x\ln x-\int x\cdot\frac1x\mathrm{d}x=x\ln x-x+C.
\]</p>
  </div></details>
</div>

<div class="callout callout-tip"><span class="tag">循环</span>
<p>\(\int e^{x}\sin x\,\mathrm{d}x\) 这类，分部两次后右边又出现原积分，移项解方程即可。别慌，也别把两次的 u 选反。</p></div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(\int x\cos x\,\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(u=x\)，\(\mathrm{d}v=\cos x\mathrm{d}x\)，得 \(x\sin x+\cos x+C\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求 \(\int x^{2}e^{x}\mathrm{d}x\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>分部两次，每次都让幂函数当 u。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>第一次 \(x^{2}e^{x}-2\int xe^{x}\)，再用例 4.4，得 \(e^{x}(x^{2}-2x+2)+C\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>求 \(\int x\ln x\,\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(u=\ln x\)，\(\mathrm{d}v=x\mathrm{d}x\)，得 \(\frac{x^{2}}{2}\ln x-\frac{x^{2}}{4}+C\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '分部公式', tex: String.raw`\int u\,\mathrm{d}v=uv-\int v\,\mathrm{d}u`, note: '选 u 是关键。' },
    { name: '选 u 顺序', tex: String.raw`\text{反}>\text{对}>\text{幂}>\text{三}>\text{指}`, note: '排前的当 u。' },
    { name: '常用结果', tex: String.raw`\int\ln x\,\mathrm{d}x=x\ln x-x+C`, note: '把 1 当 dv。' },
    { name: '循环积分', tex: String.raw`\int e^{x}\sin x\,\mathrm{d}x=\frac{e^{x}(\sin x-\cos x)}{2}+C`, note: '分部两次后移项。' }
  ]
});

window.SECTIONS.push({
  id: '4-4',
  ch: 4,
  no: '4.4',
  nav: '有理函数积分',
  title: '有理函数的积分：拆成简单分式',
  tagline: '假分式先做除法，真分式按分母拆。拆完就是基本表。',
  mins: 13,
  goals: ['区分真、假分式', '用待定系数拆部分分式', '处理配方后的二次分母'],
  body: String.raw`
<p class="lead">有理函数就是两个多项式的商。它一定能积出来，方法固定：先化简，再拆项。</p>

<h2>一、先看次数</h2>

<p>分子次数 ≥ 分母次数，叫<strong>假分式</strong>，先做多项式除法，化成“多项式 + 真分式”。分子次数小于分母，才是<strong>真分式</strong>，可以直接拆。</p>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 4.6</span><span class="ex-title">假分式</span></div>
  <div class="q"><p>求 \(\int\dfrac{x^{2}}{x+1}\mathrm{d}x\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>做除法：\(\dfrac{x^{2}}{x+1}=x-1+\dfrac{1}{x+1}\)。</p>
    <p>积分得 \(\frac{x^{2}}{2}-x+\ln|x+1|+C\)。</p>
    <p>不化简直接拆，会越拆越乱。</p>
  </div></details>
</div>

<h2>二、真分式：拆项</h2>

<p>分母能分解成一次因子的乘积，就设部分分式。比如</p>

<p>\[
\frac{1}{x^{2}-1}=\frac{1}{(x-1)(x+1)}=\frac{A}{x-1}+\frac{B}{x+1}.
\]</p>

<p>通分比较系数，得 \(A=\frac12\)，\(B=-\frac12\)。于是</p>

<p>\[
\int\frac{\mathrm{d}x}{x^{2}-1}=\frac12\ln\left|\frac{x-1}{x+1}\right|+C.
\]</p>

<div class="callout callout-tip"><span class="tag">二次不可约</span>
<p>分母是 \(x^{2}+px+q\) 且判别式小于 0 时，先配方，再拆成 \(\dfrac{u'}{u}\) 与 \(\arctan\) 两部分。例如 \(x^{2}+2x+5=(x+1)^{2}+4\)。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 4.7</span><span class="ex-title">配方</span></div>
  <div class="q"><p>求 \(\int\dfrac{\mathrm{d}x}{x^{2}+2x+5}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>配方：\((x+1)^{2}+4\)。令 \(u=x+1\)，则</p>
    <p>\[
\int\frac{\mathrm{d}u}{u^{2}+4}=\frac12\arctan\frac{u}{2}+C=\frac12\arctan\frac{x+1}{2}+C.
\]</p>
  </div></details>
</div>

<h2>自测</h2>
<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(\int\dfrac{\mathrm{d}x}{x^{2}+3x+2}\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>分母 \((x+1)(x+2)\)，拆成 \(\frac{1}{x+1}-\frac{1}{x+2}\)，积分得 \(\ln\left|\frac{x+1}{x+2}\right|+C\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求 \(\int\dfrac{x}{x^{2}+1}\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\frac12\ln(x^{2}+1)+C\)。分子正好是分母导数的一半。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>求 \(\int\dfrac{x+1}{x^{2}+1}\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>拆开：\(\frac12\ln(x^{2}+1)+\arctan x+C\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '部分分式', tex: String.raw`\frac{1}{(x-a)(x-b)}=\frac{A}{x-a}+\frac{B}{x-b}`, note: '通分定系数。' },
    { name: '常见结果', tex: String.raw`\int\frac{\mathrm{d}x}{x^{2}-a^{2}}=\frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right|+C`, note: 'a=1 时最常用。' },
    { name: '配方', tex: String.raw`x^{2}+px+q=\left(x+\frac p2\right)^{2}+q-\frac{p^{2}}{4}`, note: '判别式小于 0 时用。' },
    { name: '对数导数', tex: String.raw`\int\frac{u'}{u}\mathrm{d}x=\ln|u|+C`, note: '先看分子是不是分母导数。' }
  ]
});

window.SECTIONS.push({
  id: 'ch4-drill',
  ch: 4,
  kind: 'drill',
  no: '测',
  nav: '第 4 章自测',
  title: '第 4 章 · 综合自测',
  tagline: '五道积分：凑微分、换元、分部、拆项。',
  mins: 22,
  goals: ['把四种方法各用一遍', '养成求导验算的习惯'],
  body: String.raw`
<p class="lead">积分题最怕“看着像”。先判断结构：能凑微分就凑，两类函数相乘就分部，分母能分解就拆。</p>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(\int x\sqrt{x^{2}+1}\,\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>令 \(u=x^{2}+1\)，\(\mathrm{d}u=2x\mathrm{d}x\)，得 \(\frac13(x^{2}+1)^{3/2}+C\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求 \(\int\dfrac{\ln x}{x}\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>令 \(u=\ln x\)，得 \(\frac12\ln^{2}x+C\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>求 \(\int x\sin x\,\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>分部：\(-x\cos x+\sin x+C\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">04</span>求 \(\int\dfrac{\mathrm{d}x}{x^{2}-4}\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\frac14\ln\left|\frac{x-2}{x+2}\right|+C\)。用 \(\frac{1}{x^{2}-a^{2}}\) 的公式，a=2。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">05</span>求 \(\int e^{x}\cos x\,\mathrm{d}x\)。</div>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>分部两次后移项，得 \(\frac{e^{x}(\sin x+\cos x)}{2}+C\)。</p></div></details>
  </div>
</div>
`,
  formulas: []
});
