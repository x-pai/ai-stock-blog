<template><div><blockquote>
<p>&quot;在股市中，赚钱的不是最聪明的人，而是最有纪律的人。&quot; —— 沃伦·巴菲特（可能没说过，但听起来很有道理）</p>
</blockquote>
<h2 id="🎭-当ai遇上股市-一场理性与数据的较量" tabindex="-1"><a class="header-anchor" href="#🎭-当ai遇上股市-一场理性与数据的较量"><span>🎭 当AI遇上股市：一场理性与数据的较量</span></a></h2>
<p>欢迎来到AlphaBot的世界，这里不仅有冷冰冰的数据分析，还有暖心的交易建议。我们知道，你使用这个应用的原因可能是：</p>
<ul>
<li>📉 上个月的交易让你怀疑人生</li>
<li>🧠 你的交易决策常常被&quot;我感觉它会涨&quot;所主导</li>
<li>💸 你有&quot;追高杀跌&quot;的优秀传统</li>
<li>🎰 你把股市当成了一个大型赌场（并且总是庄家赢）</li>
</ul>
<p>别担心，我们都经历过。AlphaBot就是为了帮助你从&quot;感觉派交易员&quot;晋升为&quot;数据派投资者&quot;而生的。</p>
<h2 id="🖥️-在线演示" tabindex="-1"><a class="header-anchor" href="#🖥️-在线演示"><span>🖥️ 在线演示</span></a></h2>
<p><strong>📊 行情主页</strong>
<img src="/images/market.png" alt="行情" position="center" ></p>
<p><strong>🧐 AI分析</strong>
<img src="/images/analysis.png" alt="AI分析" position="center" ></p>
<p><strong>🤖 智能体</strong>
<img src="/images/agent.jpg" alt="智能体" position="center" ></p>
<h2 id="🛡️-免责声明-认真脸" tabindex="-1"><a class="header-anchor" href="#🛡️-免责声明-认真脸"><span>🛡️ 免责声明（认真脸）</span></a></h2>
<p><strong>重要提示：使用本项目前，请确认您已经明白以下事实</strong></p>
<ol>
<li>
<p><strong>这不是一个印钞机</strong>：本项目不能保证让你成为下一个巴菲特或西蒙斯。如果有这种功能，我们早就退休去马尔代夫了。</p>
</li>
<li>
<p><strong>市场风险</strong>：股市有风险，入市需谨慎。记住，市场永远是对的，即使它看起来不讲道理。</p>
</li>
<li>
<p><strong>AI也会犯错</strong>：我们的AI模型虽然聪明，但它不会预测地震、政变或者你邻居突然决定抛售所有股票。</p>
</li>
<li>
<p><strong>用户责任</strong>：如果你在使用本软件后亏钱了，请记住是你自己点的&quot;买入&quot;按钮，不是我们。</p>
</li>
<li>
<p><strong>数据来源</strong>：我们使用的数据来自第三方，如果数据出错，那真的不是我们的锅。</p>
</li>
</ol>
<p><strong>使用本项目即表示您同意：无论盈亏，都保持微笑，因为至少你学到了宝贵的经验。</strong></p>
<h2 id="🧙‍♂️-核心功能-从数据到决策" tabindex="-1"><a class="header-anchor" href="#🧙‍♂️-核心功能-从数据到决策"><span>🧙‍♂️ 核心功能：从数据到决策</span></a></h2>
<h3 id="📊-多数据源支持" tabindex="-1"><a class="header-anchor" href="#📊-多数据源支持"><span>📊 多数据源支持</span></a></h3>
<ul>
<li><strong>全球市场数据</strong>：通过Alpha Vantage获取全球股票市场数据</li>
<li><strong>中国市场数据</strong>：通过Tushare和AKShare获取A股市场数据</li>
<li><strong>实时行情更新</strong>：自动同步最新市场数据</li>
</ul>
<h3 id="🤖-ai智能分析" tabindex="-1"><a class="header-anchor" href="#🤖-ai智能分析"><span>🤖 AI智能分析</span></a></h3>
<ul>
<li><strong>技术分析</strong>：基于历史数据的趋势和形态分析</li>
<li><strong>基本面分析</strong>：公司财务指标和行业对比分析</li>
<li><strong>机器学习预测</strong>：使用训练好的模型进行市场预测</li>
<li><strong>大语言模型分析</strong>：利用OpenAI API进行深度市场解读</li>
</ul>
<h3 id="📈-交易辅助功能" tabindex="-1"><a class="header-anchor" href="#📈-交易辅助功能"><span>📈 交易辅助功能</span></a></h3>
<ul>
<li><strong>股票搜索</strong>：快速查找和筛选股票</li>
<li><strong>历史数据</strong>：查看历史价格和交易数据</li>
<li><strong>技术指标</strong>：计算和展示常用技术指标</li>
<li><strong>风险评估</strong>：AI驱动的风险评估和建议</li>
</ul>
<h2 id="🚀-快速开始" tabindex="-1"><a class="header-anchor" href="#🚀-快速开始"><span>🚀 快速开始</span></a></h2>
<h3 id="方法一-使用-docker-推荐" tabindex="-1"><a class="header-anchor" href="#方法一-使用-docker-推荐"><span>方法一：使用 Docker（推荐）</span></a></h3>
<p>项目提供了 Docker Compose 配置和一键部署脚本，可以快速部署整个应用。</p>
<h4 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件"><span>前提条件</span></a></h4>
<ul>
<li>Docker 和 Docker Compose 已安装</li>
<li>一颗平常心（这个很重要）</li>
</ul>
<h4 id="部署步骤" tabindex="-1"><a class="header-anchor" href="#部署步骤"><span>部署步骤</span></a></h4>
<ol>
<li>克隆仓库</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">git</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> clone</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> https://github.com/x-pai/ai-stock-assistant.git</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> ai-stock-assistant</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>运行部署脚本</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">./deploy.sh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>访问应用</li>
</ol>
<ul>
<li>后端 API 文档：http://localhost:8000/api/v1/docs</li>
<li>前端界面：http://localhost:3000</li>
</ul>
<h3 id="方法二-手动安装-适合喜欢折腾的朋友" tabindex="-1"><a class="header-anchor" href="#方法二-手动安装-适合喜欢折腾的朋友"><span>方法二：手动安装（适合喜欢折腾的朋友）</span></a></h3>
<h4 id="后端" tabindex="-1"><a class="header-anchor" href="#后端"><span>后端</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> backend</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">pip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> -r</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> requirements.txt</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"># 配置 .env 文件</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">python</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> train_model.py</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  # 可选，训练机器学习模型</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">uvicorn</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> app.main:app</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> --reload</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="前端" tabindex="-1"><a class="header-anchor" href="#前端"><span>前端</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-bash"><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">cd</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> frontend</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> install</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">npm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D"> start</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="📝-交易者誓言" tabindex="-1"><a class="header-anchor" href="#📝-交易者誓言"><span>📝 交易者誓言</span></a></h2>
<p>使用AlphaBot，请默念以下誓言：</p>
<ol>
<li>我承诺遵循数据分析，而不是我的直觉</li>
<li>我承诺设置止损并严格执行</li>
<li>我承诺不在情绪激动时交易</li>
<li>我承诺把风险控制放在首位</li>
<li>我承诺记住：保存资金是交易的第一要务</li>
</ol>
<h2 id="🤝-加入我们的-理性交易者-社区" tabindex="-1"><a class="header-anchor" href="#🤝-加入我们的-理性交易者-社区"><span>🤝 加入我们的&quot;理性交易者&quot;社区</span></a></h2>
<p>公众号：
<img src="/images/mp_weixin_qr.png" alt="AlphaBot公众号" position="center" style="zoom:33%; border-radius: 80px;"></p>
<p>微信群：
<img src="/images/wechat_group_qr.jpg" alt="AlphaBot微信群" position="center" style="zoom:68%; border-radius: 80px;"></p>
<h2 id="💰-赞助本项目" tabindex="-1"><a class="header-anchor" href="#💰-赞助本项目"><span>💰 赞助本项目</span></a></h2>
<p>如果AlphaBot帮你避免了一次冲动交易，或者帮你建立了更好的交易系统，请考虑赞助我们。你的支持将用于：</p>
<ol>
<li>服务器维护（因为AI模型很能吃内存）</li>
<li>数据源订阅（优质数据不是免费的）</li>
<li>开发者的咖啡（这是最重要的）</li>
</ol>
<img src="/images/sponsor_qr.jpg" alt="赞助二维码" position="center" style="zoom:33%; border-radius: 80px;" >
<p>微信扫码赞助（金额随意，心意最重要）</p>
<h2 id="🧠-记住" tabindex="-1"><a class="header-anchor" href="#🧠-记住"><span>🧠 记住</span></a></h2>
<blockquote>
<p>&quot;市场可以保持非理性的时间，比你能保持资金充裕的时间更长。&quot; —— 凯恩斯</p>
</blockquote>
<p>但有了AlphaBot，至少你能保持理性的时间会更长一些。</p>
<p>祝交易愉快！记住，最好的交易有时候是不交易。</p>
</div></template>


