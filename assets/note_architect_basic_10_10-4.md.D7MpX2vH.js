import{_ as t,c as r,o,a4 as a,aB as l,aC as i,aD as s,aE as n,aF as e,aG as g,aH as h,aI as c}from"./chunks/framework.C3AEaxaX.js";const S=JSON.parse('{"title":"10-4 测试原则-阶段-测试用例设计-调试","description":"","frontmatter":{},"headers":[],"relativePath":"note/architect/basic/10/10-4.md","filePath":"note/architect/basic/10/10-4.md","lastUpdated":1729750919000}'),p={name:"note/architect/basic/10/10-4.md"},d=a('<h1 id="_10-4-测试原则-阶段-测试用例设计-调试" tabindex="-1">10-4 测试原则-阶段-测试用例设计-调试 <a class="header-anchor" href="#_10-4-测试原则-阶段-测试用例设计-调试" aria-label="Permalink to &quot;10-4 测试原则-阶段-测试用例设计-调试&quot;">​</a></h1><h2 id="测试原则和方法" tabindex="-1">测试原则和方法 <a class="header-anchor" href="#测试原则和方法" aria-label="Permalink to &quot;测试原则和方法&quot;">​</a></h2><p>系统测试是<strong>为了发现错误而执行程序的过程，成功的测试是发现了至今尚未发现的错误的测试。</strong></p><h3 id="测试原则" tabindex="-1">测试原则 <a class="header-anchor" href="#测试原则" aria-label="Permalink to &quot;测试原则&quot;">​</a></h3><ul><li>应尽早并不断的进行测试；</li><li>测试工作应该避免由原开发软件的人或小组承担；</li><li>在设计测试方案时，不仅要确定输入数据，而且要根据系统功能确定预期的输出结果；</li><li>既包含有效、合理的测试用例，也包含不合理、失效的用例；</li><li>检验程序是否做了该做的事，且是否做了不该做的事；</li><li>严格按照测试计划进行；</li><li>妥善保存测试计划和测试用例；</li><li>测试用例可以重复使用或追加测试。</li></ul><h3 id="测试方法" tabindex="-1">测试方法 <a class="header-anchor" href="#测试方法" aria-label="Permalink to &quot;测试方法&quot;">​</a></h3><p>软件测试方法可分为<strong>静态测试</strong>和<strong>动态测试</strong></p><blockquote><p>静态测试</p></blockquote><p>指被测试程序<strong>不在机器上运行</strong>，而采用<strong>人工检测和计算机辅助静态分析的手段</strong>对程序进行检测，包括对文档的静态测试和对代码的静态测试。</p><ul><li>对文档的静态测试主要以<strong>检查单</strong>的形式进行</li><li>对代码的静态测试，包括<strong>桌前检查、代码审查、代码走查</strong>的方式。</li></ul><p>使用这种方法能够有效的发现30%~70%的逻辑设计和编码错误。</p><blockquote><p>动态测试</p></blockquote><p>指在计算机上<strong>实际运行程序</strong>进行软件测试，一般采用白盒测试和黑盒测试方法。</p><ul><li><strong>黑盒测试法：功能性测试</strong>，不了解软件代码结构，根据功能设计用例，测试软件功能。</li><li><strong>白盒测试法：结构性测试</strong>，明确代码流程，根据代码逻辑设计用例，进行用例覆盖。</li></ul><h2 id="测试阶段" tabindex="-1">测试阶段 <a class="header-anchor" href="#测试阶段" aria-label="Permalink to &quot;测试阶段&quot;">​</a></h2><ol><li>单元测试：也称为模块测试，测试的对象是<strong>可独立编译或汇编的程序模块</strong>、软件构件或OO软件中的类（统称为模块），测试依据是<strong>软件详细设计说明书</strong>。</li><li>集成测试：目的是<strong>检查模块之间，以及模块和已集成的软件之间的接口关系</strong>，并验证已集成的软件是否符合设计要求。设计依据是<strong>软件概要设计文档</strong>。</li><li>确认测试：主要用于验证软件的功能、性能和其他特性是否与用户需求一致。根据用户的参与程度，通常包括以下类型：</li></ol><ul><li>内部确认测试：主要由<strong>软件开发组织内部按照<a href="/note/architect/basic/10/10-2#需求定义">SRS</a>进行测试</strong></li><li>Alpha测试：<strong>用户在开发环境</strong>下进行测试</li><li>Beta测试：<strong>用户在实际使用环境下</strong>进行测试，通过该测试后，产品才能交付用户。</li><li>验收测试：<strong>针对SRS，在交付前以用户为主进行的测试</strong>。其测试对象为完整的、集成的计算机系统。验收测试的目的：在真实用户工作环境下，检验软件系统是否满足开发技术合同或SRS。验收测试的结论是用户确定是否接收该软件的主要依据。除应满足一般测试的准入条件外，在进行验收测试之前，应确认被测软件系统已通过系统测试。</li></ul><ol start="4"><li>系统测试：<strong>测试对象是完整的、集成的计算机系统</strong>；测试的目的是在真实的系统工作环境下，验证完成的软件配置项能否和系统正确连接，并满足系统、子系统设计文档和软件开发合同规定的要求。测试依据是<strong>用户需求或开发合同</strong>。主要内容包括功能测试、健壮性测试、性能测试、用户界面测试、安全性测试、安装与反安装测试等。其中，最重要的工作是进行<strong>功能测试与性能测试。功能测试主要采用黑盒测试方法；性能测试主要指标有响应时间、吞吐量、并发用户数和资源利用率等。</strong></li><li>配置项测试：测试对象是<strong>软件配置项</strong>，测试目的是<strong>检验软件配置项与SRS的一致性</strong>。测试的依据是SRS。在此之前，应确认被测软件配置项已通过单元测试和集成测试。</li><li>回归测试：测试目的是<strong>测试软件变更之后，变更部分的正确性和对变更需求的符合性，以及软件原有的、正确的功能、性能和其他规定的要求的不损害性。</strong></li></ol><h2 id="测试阶段-1" tabindex="-1">测试阶段 <a class="header-anchor" href="#测试阶段-1" aria-label="Permalink to &quot;测试阶段&quot;">​</a></h2><h3 id="测试策略" tabindex="-1">测试策略 <a class="header-anchor" href="#测试策略" aria-label="Permalink to &quot;测试策略&quot;">​</a></h3><ul><li>自顶向上：从<strong>最底层模块开始测试，需要编写驱动程序</strong>，而后开始逐一合并模块，最终完成整个系统的测试。优点是<strong>较早的验证了底层模块</strong>。</li><li>自顶向下：<strong>先测试整个系统，需要编写桩程序，而后逐步向下直至最后测试最底层模块。优点是较早的验证了系统的主要控制和判断点。</strong></li><li>三明治：既有自底向上也有自顶向下的测试方法，<strong>二者都包括，兼有二者的优点，缺点是测试工作量大。</strong></li></ul><h3 id="考试真题" tabindex="-1">考试真题 <a class="header-anchor" href="#考试真题" aria-label="Permalink to &quot;考试真题&quot;">​</a></h3><p><img src="'+l+'" alt=""></p><p>答案：C C</p><p><img src="'+i+'" alt=""></p><p>答案 A C</p><h2 id="测试用例的设计" tabindex="-1">测试用例的设计 <a class="header-anchor" href="#测试用例的设计" aria-label="Permalink to &quot;测试用例的设计&quot;">​</a></h2><h3 id="黑盒测试用例" tabindex="-1">黑盒测试用例 <a class="header-anchor" href="#黑盒测试用例" aria-label="Permalink to &quot;黑盒测试用例&quot;">​</a></h3><p><strong>黑盒测试用例</strong>：将程序看作一个黑盒子，只知道输入输出，不知道内部代码，由此设计出测试用例，分为下面几类：</p><ul><li>等价类划分：把所有的数据按照某种特性进行归类，而后在每类的数据里选取一个即可。等价类测试用例的设计原则：<strong>设计一个新的测试用例，使其尽可能多地覆盖尚未被覆盖的有效等价类</strong>，重复这一步，直到所有的有效等价类都被覆盖为止；设<strong>计一个新的测试用例，使其仅覆盖一个尚未被覆盖的无效等价类</strong>，重复这一步，直到所有的无效等价类都被覆盖为止。 <ul><li>有效等价类就是正确的等价类</li><li>无效等价类就是错误的输入</li></ul></li><li>边界值划分：将每类的边界值作为测试用例，边界值一般为<strong>范围的两端值以及再次范围之外的与此范围间隔最小的两个值</strong>。如年龄范围为0-150，边界值为0 150 -1 151四个，</li><li>错误推测：没有固定的方法，凭经验而言，来推测有可能产生问题的地方，作为测试用例进行测试。</li><li>因果图：由一个结果来反推原因的方法，具体结果具体分析，没有固定方法。</li></ul><h3 id="白盒测试用例" tabindex="-1">白盒测试用例 <a class="header-anchor" href="#白盒测试用例" aria-label="Permalink to &quot;白盒测试用例&quot;">​</a></h3><p><strong>白盒测试用例</strong>：知道程序的代码逻辑，按照程序的代码语句，来设计覆盖代码分支的测试用例，覆盖级别从低至高分为下面几种：</p><ol><li><strong>语句覆盖SC</strong>：逻辑代码中的<strong>所有语句都要被执行一遍，覆盖层级最低</strong>，因为执行了所有的语句，不代表执行了所有的条件判断。</li><li><strong>判断覆盖DC</strong>：逻辑代码中的<strong>所有判断语句的条件的真假分支都要覆盖一次。</strong></li></ol><p><img src="'+s+'" alt=""></p><ol start="3"><li><strong>条件覆盖CC</strong>：针对每一个判断条件内的<strong>每一个独立条件都要执行一遍真和假。</strong></li><li><strong>条件判定组合覆盖CDC：同时满足判断覆盖和条件覆盖</strong></li></ol><p><img src="'+n+'" alt=""></p><ol start="5"><li><strong>路径覆盖：逻辑代码中的所有可行路径都覆盖了，覆盖层级最高</strong></li></ol><p><img src="'+e+'" alt=""></p><h3 id="考试真题-1" tabindex="-1">考试真题 <a class="header-anchor" href="#考试真题-1" aria-label="Permalink to &quot;考试真题&quot;">​</a></h3><p><img src="'+g+'" alt=""></p><p>解析：有效的等价类要尽量的覆盖多的条件</p><p>答案：C</p><p><img src="'+h+'" alt=""></p><p>答案：D</p><p><img src="'+c+'" alt=""></p><p>答案：A D</p><h2 id="调试" tabindex="-1">调试 <a class="header-anchor" href="#调试" aria-label="Permalink to &quot;调试&quot;">​</a></h2><ul><li>测试是发现错误，调试<strong>是找出错误的代码和原因</strong></li><li>调试需要<strong>确定错误的准确位置；确定问题的原因并设法改正；改正后要进行回归测试</strong></li><li>调试的方法有：<strong>蛮力法、回溯法</strong>（从出错的地方开始,往回找）、<strong>原因排除法</strong>（找出所有可能的原因，逐一进行排除，具体包括演绎法、归纳法、二分法。）</li></ul><h2 id="软件度量" tabindex="-1">软件度量 <a class="header-anchor" href="#软件度量" aria-label="Permalink to &quot;软件度量&quot;">​</a></h2><ul><li>软件的两种属性： <ul><li><strong>外部属性指面向管理者和用户的属性，可直接测量，一般为性能指标</strong>。</li><li><strong>内部属性值软件产品本身的属性，如可靠性等，只能间接测量。</strong></li></ul></li><li><strong>McCabe度量法</strong>：又称为环路复杂度，假设有向图中<strong>有向边数为m，节点数为n，则此有向图的环路复杂度为<code>m-n+2</code></strong></li></ul>',50),u=[d];function _(m,b,q,f,k,P){return o(),r("div",null,u)}const C=t(p,[["render",_]]);export{S as __pageData,C as default};
