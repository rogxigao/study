/* 章节结构与常备公式表 */
window.CHAPTERS = [
  { n: 1, title: '函数与极限', note: '极限的语言、无穷小、连续——后面全建在这上面', sections: ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7', '1-8', '1-9', 'ch1-drill'] },
  { n: 2, title: '导数与微分', note: '从切线斜率到边际，再到“局部看成直线”', sections: ['2-1', '2-2', '2-3', '2-4', '2-5', 'ch2-drill'] },
  { n: 3, title: '微分中值定理及其应用', note: '中值定理、洛必达、单调与极值、凹凸性、经济应用', sections: ['3-1', '3-2', '3-3', '3-4', '3-5', 'ch3-drill'] },
  { n: 4, title: '不定积分', note: '原函数、换元、分部、有理函数，四套工具', sections: ['4-1', '4-2', '4-3', '4-4', 'ch4-drill'] },
  { n: 5, title: '定积分及其应用', note: '从黎曼和到牛顿–莱布尼茨，再到面积与体积', sections: ['5-1', '5-2', '5-3', '5-4', '5-5', 'ch5-drill'] },
  { n: 6, title: '空间解析几何初步', note: '向量、平面与直线、曲面，先建立空间感', sections: ['6-1', '6-2', '6-3', 'ch6-drill'] },
  { n: 7, title: '多元函数微分学', note: '偏导、全微分、链式法则、无条件与条件极值', sections: ['7-1', '7-2', '7-3', '7-4', 'ch7-drill'] },
  { n: 8, title: '二重积分', note: '直角坐标与极坐标，先画区域再定限', sections: ['8-1', '8-2', '8-3', 'ch8-drill'] },
  { n: 9, title: '无穷级数', note: '正项判别、交错级数、幂级数与函数展开', sections: ['9-1', '9-2', '9-3', '9-4', '9-5', 'ch9-drill'] },
  { n: 10, title: '微分方程与差分方程', note: '可分离变量、一阶线性、二阶常系数、差分', sections: ['10-1', '10-2', '10-3', '10-4', '10-5', 'ch10-drill'] }
];

/* 打开首页时，指给你看的位置 */
window.CURRENT = null;

window.COMMON_FORMULAS = [
  {
    name: '等价无穷小（x → 0）',
    tex: String.raw`\sin x\sim x,\quad \tan x\sim x,\quad \arcsin x\sim x,\quad \arctan x\sim x`,
    note: '只换乘除里的因子，加减里别乱换。'
  },
  {
    name: '等价无穷小（续）',
    tex: String.raw`\begin{aligned}&1-\cos x\sim \frac{x^{2}}{2},\quad \ln(1+x)\sim x,\\ &e^{x}-1\sim x,\quad (1+x)^{\alpha}-1\sim \alpha x\end{aligned}`,
    note: '1−cos x 是二阶，最容易和 x 搞混。'
  },
  {
    name: '两个重要极限',
    tex: String.raw`\lim_{x\to 0}\frac{\sin x}{x}=1,\qquad \lim_{x\to\infty}\left(1+\frac{1}{x}\right)^{x}=e`,
    note: '第二个也可写成 lim(1+x)^{1/x}=e。'
  },
  {
    name: '导数基本公式（一）',
    tex: String.raw`(x^{\alpha})'=\alpha x^{\alpha-1},\quad (a^{x})'=a^{x}\ln a,\quad (e^{x})'=e^{x},\quad (\ln x)'=\frac{1}{x}`,
    note: '幂函数、指数、对数，三条腿。'
  },
  {
    name: '导数基本公式（二）',
    tex: String.raw`(\sin x)'=\cos x,\quad (\cos x)'=-\sin x,\quad (\tan x)'=\sec^{2}x`,
    note: 'cos 求导会多一个负号。'
  },
  {
    name: '导数基本公式（三）',
    tex: String.raw`(\arcsin x)'=\frac{1}{\sqrt{1-x^{2}}},\quad (\arctan x)'=\frac{1}{1+x^{2}}`,
    note: '反三角的导数，分母没有根号的是 arctan。'
  }
];
