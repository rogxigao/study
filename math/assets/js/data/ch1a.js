/* 第 1 章（上）：1.1 - 1.4 */
window.SECTIONS = window.SECTIONS || [];

window.SECTIONS.push({
  id: '1-1',
  nav: '函数',
  ch: 1,
  no: '1.1',
  title: '函数：先看清它能收什么',
  tagline: '函数不是公式，是一台“给定输入、吐出唯一输出”的机器。定义域就是它允许的输入。',
  mins: 12,
  goals: [
    '说清函数的三要素，判断两个函数是不是同一个',
    '按四条红线写出定义域',
    '把复合函数拆成一条流水线（2.2 的伏笔）',
    '认出需求、成本、收益、利润四个经济函数'
  ],
  body: String.raw`
<p class="lead">这一节看起来最简单，但它是后面所有内容的地基。极限是“x 往哪儿走时 y 往哪儿走”，如果连 x 能取哪些值都不清楚，后面全是空中楼阁。</p>

<div class="callout callout-idea"><span class="tag">人话</span>
<p>\(f(x)\) 读作“f 在 x 处的值”，<strong>不是 f 乘以 x</strong>。f 是规则，x 是输入。</p></div>

<h2>一、三要素：定义域、对应法则、值域</h2>

<div class="callout callout-def"><span class="tag">定义</span>
<p>设 \(D\) 是一个非空数集。若对每个 \(x\in D\)，按某个规则 \(f\)，都有<strong>唯一确定</strong>的 \(y\) 与之对应，则称 \(f\) 是定义在 \(D\) 上的函数，记作 \(y=f(x)\)，\(x\in D\)。</p>
<p>其中 \(D\) 叫<strong>定义域</strong>，\(f(D)=\{f(x)\mid x\in D\}\) 叫<strong>值域</strong>。</p></div>

<p>“唯一确定”四个字是底线：一个 x 不能对应两个 y。所以 \(y^2=x\) 在全体实数上不是函数（x=4 时 y 可以是 2 也可以是 −2），但 \(y=\sqrt{x}\) 是函数，因为它只取非负的那个根。</p>

<div class="callout callout-warn"><span class="tag">易错</span>
<p>两个函数相同，必须<strong>定义域相同、对应法则也相同</strong>。\(y=x\) 与 \(y=\dfrac{x^2}{x}\) 不是同一个函数——后者在 \(x=0\) 处没有定义。考试里“判断是否同一函数”就考这一点。</p></div>

<div class="widget" data-widget="func"><div class="w-head"><b>拖一拖</b><span>换函数、换 x，看它有没有值</span></div></div>

<h2>二、定义域的四条红线</h2>

<p>求定义域，本质是把“会让式子失去意义”的 x 全部剔掉。常见的只有四类：</p>

<ol>
  <li><strong>分母不为零</strong>：\(\dfrac{1}{g(x)}\) 要求 \(g(x)\ne 0\)。</li>
  <li><strong>偶次根号内非负</strong>：\(\sqrt{g(x)}\) 要求 \(g(x)\ge 0\)；奇次根号没有限制。</li>
  <li><strong>对数真数为正</strong>：\(\ln g(x)\) 要求 \(g(x)&gt;0\)（底数也要求大于 0 且不等于 1）。</li>
  <li><strong>反三角与正切的限制</strong>：\(\arcsin g(x)\)、\(\arccos g(x)\) 要求 \(|g(x)|\le 1\)；\(\tan x\) 要求 \(x\ne \frac{\pi}{2}+k\pi\)。</li>
</ol>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 1.1</span><span class="ex-title">求定义域</span></div>
  <div class="q"><p>求 \(y=\ln(x-1)+\sqrt{4-x^{2}}\) 的定义域。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>两条限制同时成立：</p>
    <p>对数：\(x-1&gt;0\Rightarrow x&gt;1\)；根号：\(4-x^2\ge 0\Rightarrow -2\le x\le 2\)。</p>
    <p>取交集得 \(1&lt;x\le 2\)，即定义域 \((1,2]\)。</p>
    <p>注意端点：\(x=2\) 时根号内为 0，可以取；\(x=1\) 时对数真数为 0，不可以取。开闭区间就是这么来的。</p>
  </div></details>
</div>

<h2>三、复合函数：把两台机器接起来</h2>

<p>设 \(y=f(u)\)，而 \(u=g(x)\)，把 g 的输出接到 f 的输入上，就得到复合函数 \(y=f(g(x))\)。它的定义域是“x 在 g 的定义域里，且 g(x) 落在 f 的定义域里”。</p>

<p>反过来，看到一个复杂函数要会<strong>拆</strong>。以 \(y=\sin^{2}(2x+1)\) 为例（注意 \(\sin^2 u\) 就是 \((\sin u)^2\)）：</p>

<div class="callout callout-tip"><span class="tag">拆法</span>
<p>最内层 \(u=2x+1\)　→　中层 \(v=\sin u\)　→　外层 \(y=v^{2}\)。</p>
<p>拆到“基本初等函数”为止：幂、指、对、三角、反三角。2.2 的链式法则，就是沿着这条流水线一层层求导再相乘。现在拆得越顺，那里越不痛。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 1.2</span><span class="ex-title">复合与代入</span></div>
  <div class="q"><p>设 \(f(x)=x^{2}+1\)，求 \(f(x-1)\)，并说明 \(y=\ln(\cos x)\) 的定义域。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(f(x-1)=(x-1)^2+1=x^{2}-2x+2\)。把整个 \(x-1\) 当作输入塞进 f 里，不是把 1 减在最后。</p>
    <p>\(\ln(\cos x)\) 要求真数为正：\(\cos x&gt;0\)，即 \(x\in\left(-\frac{\pi}{2}+2k\pi,\ \frac{\pi}{2}+2k\pi\right)\)，\(k\in\mathbb{Z}\)。</p>
  </div></details>
</div>

<h2>四、经管里最常见的四个函数</h2>

<p>这一章的应用题基本都绕着它们转，先把记号认熟：</p>

<ul>
  <li><strong>需求函数</strong> \(Q=a-bP\)（\(a,b&gt;0\)）：价格越高，需求量越小。反解出 \(P=\dfrac{a}{b}-\dfrac{1}{b}Q\)，叫反需求函数。</li>
  <li><strong>成本函数</strong> \(C(Q)=C_0+cQ\)：\(C_0\) 是固定成本，\(c\) 是单位变动成本。</li>
  <li><strong>收益函数</strong> \(R(Q)=P\cdot Q\)：价格乘销量。</li>
  <li><strong>利润函数</strong> \(L(Q)=R(Q)-C(Q)\)。</li>
</ul>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 1.3</span><span class="ex-title">建一个利润函数</span></div>
  <div class="q"><p>某商品需求函数 \(P=80-2Q\)，成本 \(C(Q)=200+30Q\)。求利润函数 \(L(Q)\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>收益 \(R(Q)=PQ=(80-2Q)Q=80Q-2Q^{2}\)。</p>
    <p>利润 \(L(Q)=R-C=80Q-2Q^{2}-200-30Q=-2Q^{2}+50Q-200\)。</p>
    <p>这是一个开口向下的二次函数，第 3 章会用导数找它的最大值——现在只要会写出来。</p>
  </div></details>
</div>

<h2>五、自测</h2>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(y=\dfrac{\sqrt{x+2}}{x-1}\) 的定义域。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>根号要求 \(x+2\ge 0\)，分母要求 \(x-1\ne 0\)，两个条件同时满足。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(x\ge -2\) 且 \(x\ne 1\)，即 \([-2,1)\cup(1,+\infty)\)。</p><p>别把 \(x=1\) 漏掉又写回去：它是开区间的那一点。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>设 \(f(x)=\dfrac{1}{x}\)，求 \(f(f(x))\) 的定义域。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>先要求 x 能进第一层（\(x\ne 0\)），再要求 \(f(x)\) 能进第二层（\(f(x)\ne 0\)）。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(f(f(x))=\dfrac{1}{1/x}=x\)。但定义域不是全体实数：\(x\ne 0\) 且 \(\dfrac{1}{x}\ne 0\)（后者对 \(x\ne0\) 恒成立），所以定义域是 \(x\ne 0\)。</p><p>化简后看着像 \(y=x\)，但它缺了一个点——这正是“判断同一函数”最爱设的坑。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>把 \(y=e^{\sin 3x}\) 拆成复合链，并写出它的定义域。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>从最里面往外拆：谁先作用在 x 上？</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(u=3x\)，\(v=\sin u\)，\(y=e^{v}\)。三层。</p><p>每一步都对全体实数有定义，所以定义域是 \(\mathbb{R}\)。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '复合函数', tex: String.raw`y=f(g(x)),\quad D=\{x\mid x\in D_g,\ g(x)\in D_f\}`, note: '内层输出要落进外层定义域。' },
    { name: '需求函数', tex: String.raw`Q=a-bP\quad(a,b>0)`, note: '价格越高，需求量越小。' },
    { name: '成本 · 收益 · 利润', tex: String.raw`C(Q)=C_0+cQ,\quad R(Q)=PQ,\quad L(Q)=R(Q)-C(Q)`, note: '固定成本 C₀ 不随产量变。' },
    { name: '定义域四红线', tex: String.raw`g(x)\ne 0,\quad g(x)\ge 0,\quad g(x)>0,\quad |g(x)|\le 1`, note: '分母、偶次根号、对数真数、反三角。' }
  ]
});

window.SECTIONS.push({
  id: '1-2',
  nav: '数列极限',
  ch: 1,
  no: '1.2',
  title: '数列的极限：无限靠近，不必到达',
  tagline: '极限不是“最后一项”，而是“尾巴整体被框住”。ε–N 说的就是这件事。',
  mins: 16,
  goals: [
    '用自己的话复述 ε–N 定义',
    '给定 ε，算出对应的 N',
    '用定义证明简单数列的极限',
    '知道收敛数列必有界，有界不一定收敛'
  ],
  body: String.raw`
<p class="lead">先看一个数列：\(\frac{1}{2},\frac{2}{3},\frac{3}{4},\dots,\frac{n}{n+1},\dots\)。它永远到不了 1，但会一直贴着 1。问题来了：<strong>“一直贴着”到底怎么写成数学？</strong></p>

<div class="callout callout-idea"><span class="tag">人话</span>
<p>你说“它离 1 越来越近”，这话不算数学。数学家的办法是：<strong>你随便报一个误差 ε，我都能指出从第几项开始，后面所有项都落进 1 的 ε 范围里。</strong>报得出，就叫收敛到 1。</p></div>

<h2>一、ε–N 定义</h2>

<div class="callout callout-def"><span class="tag">定义</span>
<p>设 \(\{a_n\}\) 是数列，\(A\) 是常数。若对任意给定的 \(\varepsilon&gt;0\)，总存在正整数 \(N\)，使得当 \(n&gt;N\) 时，都有</p>
<p>\[
|a_n-A|&lt;\varepsilon,
\]</p>
<p>则称数列 \(\{a_n\}\) <strong>收敛</strong>于 \(A\)，记作 \(\lim\limits_{n\to\infty}a_n=A\)。不收敛的数列叫<strong>发散</strong>。</p></div>

<p>把这句话拆开看：</p>
<ul>
  <li>\(\varepsilon\) 是<strong>别人</strong>给的，可以任意小，你不能挑；</li>
  <li>\(N\) 是<strong>你</strong>找的，允许依赖于 ε；</li>
  <li>只要求 \(n&gt;N\) 的项，前面有限项长什么样，完全不管。</li>
</ul>

<div class="widget" data-widget="seq"><div class="w-head"><b>拖 ε</b><span>看 N 怎么往后退</span></div></div>

<h2>二、用定义证明：套路只有三步</h2>

<p>以 \(a_n=\dfrac{n}{n+1}\) 为例，证明 \(\lim\limits_{n\to\infty}a_n=1\)。</p>

<p><strong>第一步，算距离。</strong></p>

<p>\[
|a_n-1|=\left|\frac{n}{n+1}-1\right|=\frac{1}{n+1}.
\]</p>

<p><strong>第二步，让它小于 ε，反解 n。</strong></p>

<p>\[
\frac{1}{n+1}&lt;\varepsilon\iff n&gt;\frac{1}{\varepsilon}-1.
\]</p>

<p><strong>第三步，取 N。</strong> 取 \(N=\left[\dfrac{1}{\varepsilon}\right]\)（取整，保证 \(N&gt;\frac1\varepsilon-1\)），则当 \(n&gt;N\) 时，\(\frac{1}{n+1}&lt;\frac{1}{N+1}\le\varepsilon\)。证完。</p>

<div class="callout callout-tip"><span class="tag">技巧</span>
<p>不用找“最小的 N”，找一个能用的就行。证明里常见放缩：\(\frac{1}{n+1}&lt;\frac{1}{n}\)，把分母变小、整体变大，解起来更省事。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 1.4</span><span class="ex-title">定义证明</span></div>
  <div class="q"><p>证明 \(\lim\limits_{n\to\infty}\dfrac{1}{n^{2}}=0\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>任给 \(\varepsilon&gt;0\)，要使 \(\left|\frac{1}{n^2}-0\right|=\frac{1}{n^{2}}&lt;\varepsilon\)，只需 \(n&gt;\frac{1}{\sqrt{\varepsilon}}\)。</p>
    <p>取 \(N=\left[\frac{1}{\sqrt{\varepsilon}}\right]+1\)，则当 \(n&gt;N\) 时，\(\frac{1}{n^{2}}&lt;\frac{1}{N^{2}}&lt;\varepsilon\)。故极限为 0。</p>
  </div></details>
</div>

<h2>三、收敛数列的三条性质</h2>

<ol>
  <li><strong>极限唯一。</strong> 一个数列不可能既收敛到 1 又收敛到 2。</li>
  <li><strong>收敛必有界。</strong> 尾巴被框住了，前面有限项取个最大最小，整体就有界。反过来不成立：\(a_n=(-1)^n\) 有界，但发散。</li>
  <li><strong>保号性。</strong> 若 \(\lim a_n=A&gt;0\)，则 n 足够大时 \(a_n&gt;0\)。注意是“足够大之后”，不是每一项。</li>
</ol>

<p>还有一个很实用的结论：<strong>子列同归</strong>。若 \(a_n\to A\)，则它的任何子列也趋于 A。反过来常用来证发散：找出两个子列跑向不同的值，原数列就发散。比如 \((-1)^n\) 的偶数项全是 1，奇数项全是 −1。</p>

<div class="callout callout-warn"><span class="tag">易错</span>
<p>“极限存在”只看<strong>无穷远的尾巴</strong>，和前面一万项没有关系。改动有限项，不改变敛散性与极限值。</p></div>

<h2>四、自测</h2>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>用定义证明 \(\lim\limits_{n\to\infty}\dfrac{n}{2n+1}=\dfrac{1}{2}\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>先算 \(\left|\frac{n}{2n+1}-\frac12\right|\)，通分后分子应该是常数。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body">
      <p>\[
\left|\frac{n}{2n+1}-\frac12\right|=\left|\frac{2n-(2n+1)}{2(2n+1)}\right|=\frac{1}{4n+2}&lt;\frac{1}{4n}.
\]</p>
      <p>任给 \(\varepsilon&gt;0\)，取 \(N=\left[\frac{1}{4\varepsilon}\right]+1\)，当 \(n&gt;N\) 时上式 \(&lt;\varepsilon\)。证完。</p>
    </div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>若 \(a_n\to 2\)，是否一定有 \(a_1&gt;1.9\)？</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>极限管的是尾巴，管不到开头。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>不一定。比如 \(a_1=0\)，从第二项起都取 2，这个数列仍然收敛到 2。定义只要求存在 N，使 \(n&gt;N\) 后 \(|a_n-2|&lt;0.1\)，前面可以有任意有限项“捣乱”。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>判断 \(a_n=\dfrac{(-1)^{n}}{n}\) 是否收敛；若收敛，极限是多少。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>给它加绝对值，看看能不能夹住。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(|a_n|=\frac1n\to 0\)，而 \(-|a_n|\le a_n\le |a_n|\)，由夹逼得 \(a_n\to 0\)。正负交替不影响它趋于 0。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '数列极限（ε–N）', tex: String.raw`\forall \varepsilon>0,\ \exists N,\ n>N\Rightarrow |a_n-A|<\varepsilon`, note: 'ε 是别人给的，N 是你找的。' },
    { name: '收敛必有界', tex: String.raw`\{a_n\}\ \text{收敛}\ \Rightarrow\ \{a_n\}\ \text{有界}`, note: '反之不成立：(-1)ⁿ 有界但发散。' },
    { name: '子列同归', tex: String.raw`a_n\to A\ \Rightarrow\ a_{n_k}\to A`, note: '两个子列极限不同，即可判定发散。' },
    { name: '常用放缩', tex: String.raw`\frac{1}{n+1}<\frac{1}{n},\qquad \frac{1}{n^{2}}<\frac{1}{n}\ (n>1)`, note: '证明时把分母改小，整体变大，好解。' }
  ]
});

window.SECTIONS.push({
  id: '1-3',
  nav: '函数极限',
  ch: 1,
  no: '1.3',
  title: '函数的极限：x 可以两头走',
  tagline: 'x→x₀ 时挖掉那一点；x→∞ 时看两头。左右极限不相等，极限就不存在。',
  mins: 15,
  goals: [
    '分清 x→x₀ 与 x→∞ 两种定义',
    '理解 0<|x−x₀| 为什么必须挖心',
    '用左右极限判断极限是否存在',
    '会算简单的分段函数在分界点的极限'
  ],
  body: String.raw`
<p class="lead">数列的 n 只能往正无穷走；函数的 x 可以走向一个具体的点，也可以走向正负无穷。所以函数的极限要分两种过程来说。</p>

<h2>一、x → x₀：挖掉中心，只看附近</h2>

<div class="callout callout-def"><span class="tag">定义</span>
<p>设 \(f\) 在 \(x_0\) 的某个去心邻域内有定义。若对任意 \(\varepsilon&gt;0\)，存在 \(\delta&gt;0\)，使得当</p>
<p>\[
0&lt;|x-x_0|&lt;\delta
\]</p>
<p>时，都有 \(|f(x)-A|&lt;\varepsilon\)，则称 \(x\to x_0\) 时 \(f(x)\) 的极限为 \(A\)，记 \(\lim\limits_{x\to x_0}f(x)=A\)。</p></div>

<p>注意那个 \(0&lt;|x-x_0|\)：它把 \(x=x_0\) 本身<strong>挖掉了</strong>。所以：</p>

<ul>
  <li>\(f\) 在 \(x_0\) 处有没有定义，不影响极限；</li>
  <li>\(f(x_0)\) 等于几，也不影响极限。</li>
</ul>

<div class="widget" data-widget="epsdelta"><div class="w-head"><b>先给 ε，再找 δ</b><span>蓝带是误差，绿带是邻域</span></div></div>

<div class="callout callout-idea"><span class="tag">人话</span>
<p>ε 是“输出允许的误差”，δ 是“输入要给多小的范围”。能对任意小的 ε 都找到 δ，说明输出被输入牢牢控制住了。</p></div>

<h2>二、x → ∞：看远处的两头</h2>

<div class="callout callout-def"><span class="tag">定义</span>
<p>若对任意 \(\varepsilon&gt;0\)，存在 \(X&gt;0\)，当 \(|x|&gt;X\) 时都有 \(|f(x)-A|&lt;\varepsilon\)，则称 \(x\to\infty\) 时 \(f(x)\) 的极限为 \(A\)。</p>
<p>若只要求 \(x&gt;X\)（或 \(x&lt;-X\)），就分别得到 \(x\to+\infty\)、\(x\to-\infty\) 的极限。</p></div>

<p>例：\(\lim\limits_{x\to\infty}\dfrac{1}{x}=0\)，因为 \(|x|&gt;\frac1\varepsilon\) 就够了，取 \(X=\frac1\varepsilon\)。</p>

<h2>三、左右极限：极限存在的“分头检查法”</h2>

<p>如果只让 x 从左边靠近 \(x_0\)（\(x&lt;x_0\)），得到的极限叫<strong>左极限</strong> \(f(x_0^-)\)；从右边靠近叫<strong>右极限</strong> \(f(x_0^+)\)。</p>

<div class="callout callout-def"><span class="tag">定理</span>
<p>\[
\lim_{x\to x_0}f(x)=A\iff f(x_0^-)=f(x_0^+)=A.
\]</p>
<p>左右哪怕只差一点，极限就不存在。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 1.5</span><span class="ex-title">绝对值函数在 0 点</span></div>
  <div class="q"><p>讨论 \(f(x)=\dfrac{|x|}{x}\) 在 \(x=0\) 处的极限。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(x&gt;0\) 时 \(f(x)=1\)，所以 \(f(0^+)=1\)；\(x&lt;0\) 时 \(f(x)=-1\)，所以 \(f(0^-)=-1\)。</p>
    <p>左右不相等，故 \(\lim\limits_{x\to0}\frac{|x|}{x}\) 不存在。画图就是一条在 0 点断成两截的台阶。</p>
  </div></details>
</div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 1.6</span><span class="ex-title">分段函数在分界点</span></div>
  <div class="q"><p>设 \(f(x)=\begin{cases}x+1,&x&lt;1\\ 3-x,&x\ge 1\end{cases}\)，求 \(\lim\limits_{x\to 1}f(x)\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>左极限：\(x\to1^-\) 用 \(x+1\)，得 2。右极限：\(x\to1^+\) 用 \(3-x\)，也得 2。</p>
    <p>左右相等，极限为 2。顺便，\(f(1)=3-1=2\)，等于极限值，所以它在这里还是连续的（下一节细说）。</p>
  </div></details>
</div>

<div class="callout callout-warn"><span class="tag">易错</span>
<p>求分段函数分界点的极限，<strong>必须分左右</strong>，而且要用对那一段的表达式。直接把 1 代进去，是初学者最常见的错。</p></div>

<h2>四、自测</h2>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>设 \(f(x)=\begin{cases}x^{2},&x\ne 2\\ 5,&x=2\end{cases}\)，求 \(\lim\limits_{x\to2}f(x)\)，并说明它是否等于 \(f(2)\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>极限只看 2 附近，不看 2 本身。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(x\ne2\) 时 \(f(x)=x^2\to 4\)，所以极限是 4。而 \(f(2)=5\)，两者不等。这正是“可去间断”的典型：极限存在，但函数值另立门户。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>求 \(\lim\limits_{x\to1}\dfrac{x^{2}-1}{x-1}\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>分子可以分解，约掉公因子后就是多项式。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(x\ne1\) 时 \(\frac{x^2-1}{x-1}=x+1\)，所以极限为 2。约分合法，是因为极限过程里 \(x\ne1\)。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>判断 \(\lim\limits_{x\to0}\dfrac{1}{x}\) 是否存在。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>分左右看，符号一样吗？</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(x\to0^+\) 时为 \(+\infty\)，\(x\to0^-\) 时为 \(-\infty\)。即使把无穷当作一种“趋势”，左右也不同；按实数极限的定义，它不存在。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: 'x→x₀ 的极限', tex: String.raw`\forall\varepsilon>0,\ \exists\delta>0,\ 0<|x-x_0|<\delta\Rightarrow |f(x)-A|<\varepsilon`, note: '0< 表示挖掉 x₀ 本身。' },
    { name: 'x→∞ 的极限', tex: String.raw`\forall\varepsilon>0,\ \exists X>0,\ |x|>X\Rightarrow |f(x)-A|<\varepsilon`, note: '只看远处的两头。' },
    { name: '左右极限判定', tex: String.raw`\lim_{x\to x_0}f(x)=A\iff f(x_0^-)=f(x_0^+)=A`, note: '左右不等，极限不存在。' }
  ]
});

window.SECTIONS.push({
  id: '1-4',
  nav: '无穷小与无穷大',
  ch: 1,
  no: '1.4',
  title: '无穷小与无穷大：一对倒数',
  tagline: '无穷小是“趋于 0 的量”，不是“很小的数”；无穷大也不是数，是一种发散的趋势。',
  mins: 13,
  goals: [
    '判断一个量是不是无穷小',
    '会用 f = A + α 这个等价说法',
    '记住“有界 × 无穷小 = 无穷小”',
    '分清无穷大与无界'
  ],
  body: String.raw`
<p class="lead">“无穷小”这三个字最容易被误读成 0.000001 之类的小数。不是的。无穷小是一个<strong>变量</strong>，它的唯一特征是：极限为 0。</p>

<div class="callout callout-def"><span class="tag">定义</span>
<p>若 \(\lim\limits_{x\to x_0}f(x)=0\)（或 \(x\to\infty\)），则称 \(f(x)\) 为 \(x\to x_0\)（或 \(x\to\infty\)）时的<strong>无穷小</strong>。</p>
<p>0 是唯一的常数无穷小；其余无穷小都是变量。</p></div>

<h2>一、最有用的等价说法</h2>

<div class="callout callout-def"><span class="tag">定理</span>
<p>\[
\lim f(x)=A\iff f(x)=A+\alpha(x),\ \text{其中}\ \alpha(x)\ \text{是无穷小}.
\]</p></div>

<p>这句话把“极限”翻译成了“常数 + 小尾巴”。后面很多证明（比如导数与微分的关系）都靠它。</p>

<h2>二、无穷小的运算</h2>

<ul>
  <li>有限个无穷小之和、之积，仍是无穷小；</li>
  <li><strong>有界函数乘无穷小，仍是无穷小</strong>——这条最常用；</li>
  <li>无穷小除以一个极限非零的量，仍是无穷小。</li>
</ul>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 1.7</span><span class="ex-title">有界 × 无穷小</span></div>
  <div class="q"><p>求 \(\lim\limits_{x\to0}x\sin\dfrac{1}{x}\)。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(\sin\frac1x\) 在 \([-1,1]\) 之间来回振荡，极限不存在，但它<strong>有界</strong>。</p>
    <p>而 \(x\to0\) 是无穷小。有界乘无穷小还是无穷小，所以极限为 0。</p>
    <p>注意：不能说“\(\sin\frac1x\) 有极限”，只能说它被 0 压住了。</p>
  </div></details>
</div>

<h2>三、无穷大：倒数关系</h2>

<div class="callout callout-def"><span class="tag">定义</span>
<p>若 \(|f(x)|\) 可以大于任意给定的正数，则称 \(f(x)\) 为无穷大，记 \(\lim f(x)=\infty\)。</p>
<p>在同一过程中，若 \(f(x)\ne0\)，则 \(f(x)\) 为无穷大 \(\iff\) \(\dfrac{1}{f(x)}\) 为无穷小。</p></div>

<div class="widget" data-widget="inf"><div class="w-head"><b>把 x 推向 0⁺</b><span>y = 1/x 会顶出画面</span></div></div>

<div class="callout callout-warn"><span class="tag">分清</span>
<p><strong>无穷大一定无界，无界不一定是无穷大。</strong> 反例：\(f(x)=x\sin x\) 在 \(x\to\infty\) 时无界（总能取到很大的值），但它会不断回到 0，不是无穷大。</p>
<p>另外，写 \(\lim f=\infty\) 只是记号，表示“极限不存在，但是一种特定的发散方式”，不要把它当成实数极限。</p></div>

<div class="example">
  <div class="ex-head"><span class="ex-no">例 1.8</span><span class="ex-title">无穷大与无穷小的互推</span></div>
  <div class="q"><p>说明 \(x\to1\) 时 \(\dfrac{1}{(x-1)^{2}}\) 是无穷大，而 \((x-1)^2\) 是无穷小。</p></div>
  <details class="sol"><summary>看解析</summary><div class="sol-body">
    <p>\(x\to1\) 时 \((x-1)^2\to0\)，所以它是无穷小；其倒数恒正且可以任意大，故为无穷大（且是 \(+\infty\)）。</p>
    <p>如果换成 \(\frac{1}{x-1}\)，左右两侧符号相反，仍然是无界，但两侧分别冲向 \(+\infty\) 与 \(-\infty\)。</p>
  </div></details>
</div>

<h2>四、自测</h2>

<div class="quiz-set">
  <div class="quiz-item">
    <div class="q"><span class="q-no">01</span>求 \(\lim\limits_{x\to0}x^{2}\sin\dfrac{1}{x^{2}}\)。</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>正弦有界，前面的 \(x^2\) 呢？</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>\(\left|x^2\sin\frac{1}{x^2}\right|\le x^2\to0\)，由夹逼（或有界乘无穷小）得极限为 0。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">02</span>“无界函数一定是无穷大”，这句话对吗？</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>想想一条会冲到很高、又会回到 0 的曲线。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>不对。\(f(x)=x\sin x\) 当 \(x\to\infty\) 时无界，但存在一串点使 \(f=0\)，不可能满足“\(|f|\) 最终大于任意给定正数”。无穷大要求的是<strong>最终</strong>一直很大。</p></div></details>
  </div>
  <div class="quiz-item">
    <div class="q"><span class="q-no">03</span>若 \(f(x)\to0\)，\(g(x)\) 有界，那么 \(f(x)g(x)\) 的极限是多少？</div>
    <details class="sol"><summary>提示</summary><div class="sol-body"><p>用“有界 × 无穷小”。</p></div></details>
    <details class="sol"><summary>解析</summary><div class="sol-body"><p>是 0。设 \(|g(x)|\le M\)，则 \(|fg|\le M|f|\to0\)。注意 g 本身可以没有极限。</p></div></details>
  </div>
</div>
`,
  formulas: [
    { name: '极限与无穷小', tex: String.raw`\lim f(x)=A\iff f(x)=A+\alpha(x),\ \alpha\to0`, note: '把极限翻译成“常数 + 小尾巴”。' },
    { name: '有界乘无穷小', tex: String.raw`|g(x)|\le M,\ \alpha(x)\to0\ \Rightarrow\ g(x)\alpha(x)\to0`, note: 'g 可以没有极限，只要有界。' },
    { name: '无穷大与无穷小', tex: String.raw`f(x)\to\infty\iff \frac{1}{f(x)}\to0\quad(f(x)\ne0)`, note: '互为倒数，方向相反。' }
  ]
});
