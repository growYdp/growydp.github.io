import{_ as a,c as t,o as r,a4 as l,ah as i,ai as o,aj as s,ak as n,al as e,am as h,an as g,ao as p,ap as c,aq as d,ar as u,as as _,at as m,au as b}from"./chunks/framework.BzzsfKfI.js";const T=JSON.parse('{"title":"10-2 需求分析-获取-定义-验证-管理","description":"","frontmatter":{},"headers":[],"relativePath":"note/architect/basic/10/10-2.md","filePath":"note/architect/basic/10/10-2.md","lastUpdated":1729501307000}'),q={name:"note/architect/basic/10/10-2.md"},f=l('<h1 id="_10-2-需求分析-获取-定义-验证-管理" tabindex="-1">10-2 需求分析-获取-定义-验证-管理 <a class="header-anchor" href="#_10-2-需求分析-获取-定义-验证-管理" aria-label="Permalink to &quot;10-2 需求分析-获取-定义-验证-管理&quot;">​</a></h1><h2 id="软件需求" tabindex="-1">软件需求 <a class="header-anchor" href="#软件需求" aria-label="Permalink to &quot;软件需求&quot;">​</a></h2><ul><li><strong>软件需求</strong>：是指用户<strong>对系统在功能、行为、性能、设计约束等方面的期望</strong>。是指<strong>用户解决问题或达到目标所需的条件或能力</strong>，是<strong>系统或系统部件要满足合同、标准、规范或其他正式规定文档所需具有的条件或能力</strong>，以及反映这些条件或能力的文档说明。</li><li>分为<strong>需求开发</strong>和<strong>需求管理</strong>两大过程</li></ul><p><img src="'+i+'" alt=""></p><h3 id="软件需求分类" tabindex="-1">软件需求分类 <a class="header-anchor" href="#软件需求分类" aria-label="Permalink to &quot;软件需求分类&quot;">​</a></h3><ol><li><strong>业务需求</strong>：反映<strong>企业或客户对系统高层次的目标要求</strong>，通常来自项目投资人、客户、市场营销部门或产品策划部门。通过业务需求可以确定项目视图和范围。</li><li><strong>用户需求</strong>：描述的是<strong>用户的具体目标，或用户要求系统必须能完成的任务</strong>。即描述了<strong>用户能使用系统来做什么</strong>。通常采取用户访谈和问卷调查等方式，对用户使用的场景进行整理，从而建立用户需求。</li><li><strong>系统需求</strong>：从<strong>系统的角度来说明软件的需求</strong>，包括功能需求、肺功能需求和设计约束等。</li><li>功能需求：行为需求，规定了<strong>开发人员必须在系统中实现的软件功能</strong>，用户利用这些功能在完成任务，满足业务需要。</li><li>非功能需求：指<strong>系统必须具备的属性或品质</strong>，又可以细分为软件质量属性（如可维护性、可靠性、效率等）和其他非功能需求。</li><li>设计约束：也称为限制条件或补充规约，通常是<strong>对系统的一些约束说明</strong>，例如必须采用国有自主知识产权的数据库系统，必须运行在unix操作系统之下等</li></ol><h3 id="考试真题" tabindex="-1">考试真题 <a class="header-anchor" href="#考试真题" aria-label="Permalink to &quot;考试真题&quot;">​</a></h3><p><img src="'+o+'" alt=""></p><p>答案：A</p><p><img src="'+s+'" alt=""></p><p>解析：第三问和第一问是前后关系，抽象层次高</p><p>答案：B C A</p><h2 id="需求获取" tabindex="-1">需求获取 <a class="header-anchor" href="#需求获取" aria-label="Permalink to &quot;需求获取&quot;">​</a></h2><p><strong>需求获取</strong>是一个确定和理解不同的项目干系人的需求和约束的过程</p><h3 id="常见的需求获取法" tabindex="-1">常见的需求获取法 <a class="header-anchor" href="#常见的需求获取法" aria-label="Permalink to &quot;常见的需求获取法&quot;">​</a></h3><ol><li>用户访谈：1对1-3,有代表性的用户。其形式包括结构化和非结构化两种（结构化就是有剧本）</li><li>问卷调查：用户多，无法一一访谈</li><li>采样：从中群众系统的选出有代表性的样本集的过程。<code>样本数量=0.25*(可信度因子/错误率)^2</code></li><li>情节串联板：一系列图片，通过这些图片来讲故事</li><li><strong>联合需求计划（JRP）：</strong> 联合各个关键用户代表、系统分析师、开发团队代表一起，通过有组织的会议来讨论需求</li><li>需求记录技术：任务卡片、场景说明、用户故事、Volere白卡</li></ol><h3 id="考试真题-1" tabindex="-1">考试真题 <a class="header-anchor" href="#考试真题-1" aria-label="Permalink to &quot;考试真题&quot;">​</a></h3><p><img src="'+n+'" alt=""></p><p>答案：A D C</p><h2 id="需求分析" tabindex="-1">需求分析 <a class="header-anchor" href="#需求分析" aria-label="Permalink to &quot;需求分析&quot;">​</a></h2><p><strong>需求分析</strong>：一个好的需求应该具有无二义性、完整性、一致性、可测试性、确定性、可跟踪性、正确性、必要性等特性。<strong>因此，需求分析人员把杂乱无章的用户要求和期望转化为用户需求</strong>，这就是需求分析的工作</p><h3 id="需求分析的任务" tabindex="-1">需求分析的任务 <a class="header-anchor" href="#需求分析的任务" aria-label="Permalink to &quot;需求分析的任务&quot;">​</a></h3><ul><li>绘制系统上下文范围关系图（数据流图）</li><li>创建用户界面原型</li><li>分析需求的可行性</li><li>确定需求的优先级</li><li>为需求建立模型</li><li>创建数据字典</li><li>使用QFD（质量功能部署）</li></ul><h3 id="结构化需求分析" tabindex="-1">结构化需求分析 <a class="header-anchor" href="#结构化需求分析" aria-label="Permalink to &quot;结构化需求分析&quot;">​</a></h3><p>结构化特点：<strong>自顶向下、逐步分解、面向数据</strong></p><p>三大模型：<strong>功能模型（数据流图）、行为模型（状态转换图）、数据模型（ER图）</strong> 以及数据字典</p><p><img src="'+e+'" alt=""></p><blockquote><p>数据流图DFD</p></blockquote><p>基本图形元素：<strong>外部实体、加工、数据存储、数据流</strong></p><p><img src="'+h+'" alt=""></p><h3 id="重点-数据流" tabindex="-1">重点 数据流 <a class="header-anchor" href="#重点-数据流" aria-label="Permalink to &quot;重点 数据流&quot;">​</a></h3><p><img src="'+g+'" alt=""></p><ol><li>数据流：由一组固定成分的数据组成，表示数据的流向。<strong>在DFD中，数据流的流向必须经过加工</strong>。</li><li>加工：描述了输入数据流到输出数据流之间的变换，<strong>数据流图中常见的三中错误如图所示</strong>： <ol><li>加工3.1.2中有输入但是没有输出，称之为“黑洞”</li><li>加工3.1.3中有输出但是没有输入，称之为“奇迹”</li><li>加工3.1.1中输入不足以产生输出，尾门称之为“灰洞”</li></ol></li><li>数据存储：用来存储数据</li><li>外部实体（外部主体）：是指存在于<strong>软件系统之外</strong>的人员或组织，它指出系统所需数据的发源地（源）和系统所产生的数据的归宿地（宿）</li></ol><p><img src="'+p+'" alt=""></p><h3 id="数据字典dd" tabindex="-1">数据字典DD <a class="header-anchor" href="#数据字典dd" aria-label="Permalink to &quot;数据字典DD&quot;">​</a></h3><p>数据流图描述了系统的分解，但没有对图中各成分进行说明。<strong>数据字典就是为数据流图中的每个数据流、文件、加工，以及组成数据流或文件的数据项作出说明</strong></p><p>数据字典有以下4类条目：<strong>数据流、数据项、数据存储和基本加工</strong></p><p><img src="'+c+'" alt=""></p><p>加工逻辑也称为“小说明”，常用的加工逻辑描述方法有：<strong>结构化语言、判定表和判断树</strong>三种</p><h2 id="需求定义" tabindex="-1">需求定义 <a class="header-anchor" href="#需求定义" aria-label="Permalink to &quot;需求定义 {#需求定义}&quot;">​</a></h2><ul><li><strong>需求定义（软件需求规格说明书SRS）</strong>：是需求开发活动的产物，编制该文档的目的是使项目干系人与开发团队对系统的初始规定有一个共同的理解，使之成为<strong>整个开发工作的基础</strong>。srs是软件开发过程中最重要的文档之一，对于任何规模和性质的软件项目都不应该缺少</li><li>需求定义方法 <ol><li>严格定义也称为预先定义，需求的严格定义<strong>建立在以下的基本假设</strong>之上：<strong>所有需求都能够被预先定义</strong>。开发人员与用户之间能够准确而清晰的交流。采用图形（或文字）可以充分体现最终系统。</li><li>原型方法：<strong>迭代的循环型开发方式</strong>，需要注意的问题：并非所有的需求都能在系统开发前被准确地说明。项目干系人之间通常都存在交流上的困难，原型提供了<strong>克服该困难的一个手段</strong>。特点：需要实际的，可供用户参与的系统模型。有合适的系统开发环境。反复是完全需要和值得提倡的，需求一旦确定，就应遵从严格的方法</li></ol></li></ul><h2 id="需求验证" tabindex="-1">需求验证 <a class="header-anchor" href="#需求验证" aria-label="Permalink to &quot;需求验证&quot;">​</a></h2><ul><li>需求验证：也称为<strong>需求确认</strong>，目的是<strong>与用户一起确认需求无误</strong>，对需求规格说明书SAS进行评审和测试，包括两个步骤： <ul><li>需求评审：正式评审和非正式评审</li><li>需求测试：设计概念测试用例</li></ul></li><li>需求验证通过后，要请用户签字确认，作为验收标准之一，此时，这个需求规格说明书就是需求基线，不可以再随意更新，如果需要更改必须走需求变更流程</li></ul><h2 id="需求管理" tabindex="-1">需求管理 <a class="header-anchor" href="#需求管理" aria-label="Permalink to &quot;需求管理&quot;">​</a></h2><ul><li>定义需求基线：通过了评审的需求说明书就是需求基线，下次如果需要变更需求，就需要按照流程来一步步进行。需求的流程及状态：</li></ul><p><img src="'+d+'" alt=""></p><h3 id="需求变更" tabindex="-1">需求变更 <a class="header-anchor" href="#需求变更" aria-label="Permalink to &quot;需求变更&quot;">​</a></h3><p><img src="'+u+'" alt=""></p><ul><li>需求变更和风险 <ul><li>主要关心需求变更过程中的需求风险管理，带有风险的作法有：<strong>无足够用户参与、忽略了用户分类、用户需求的不断增加、模棱两可的需求、不必要的特性、过于精简的SRS（软件需求规格说明书）、不准确的估算。</strong></li></ul></li><li>变更产生的原因：<strong>外部环境的变化、需求和设计做得不够完整、新技术的出现、公司机构重组造成业务流程的变化</strong></li><li><strong>变更控制委员会CCB</strong>：也称为配置控制委员会，其任务是对建议的配置项变更作出评价、审批，以及监督已经批准变更的实施。</li></ul><h3 id="需求跟踪" tabindex="-1">需求跟踪 <a class="header-anchor" href="#需求跟踪" aria-label="Permalink to &quot;需求跟踪&quot;">​</a></h3><ul><li>双向跟踪：两个层次</li></ul><p><img src="'+_+'" alt=""></p><ul><li>正向跟踪表示<strong>用户原始需求是否都实现了</strong>，反向跟踪表示<strong>软件实现的是否都是用户要求的</strong>。不多不少，可以用原始需求和用例表格（需求跟踪矩阵）来表示</li><li>若原始需求和用例有对应，则在对应栏打对号 <ul><li>若某行都没有对号，标明原始需求未实现，正向跟踪发现问题</li><li>若某列都没有对号，表明有多余功能用例，软件实现了多余功能，反向跟踪发现问题</li></ul></li></ul><h3 id="考试真题-2" tabindex="-1">考试真题 <a class="header-anchor" href="#考试真题-2" aria-label="Permalink to &quot;考试真题&quot;">​</a></h3><p><img src="'+m+'" alt=""></p><p>解析：A讲CMM CMMI 这里需要返回重新记忆 B明显需求稳定性是需求属性最重要的特性 C正确顺序：问题分析和变更描述、变更分析和成本计算、变更实现 D回想变更顺序图，CCB可以决定</p><p>答案：D</p><p><img src="'+b+'" alt=""></p><p>解析：A ER图才是描述数据模型的</p><p>外部实体在系统之外，并且是源或者宿</p><p>图书是内部</p><p>答案：B A</p>',62),k=[f];function P(x,D,C,S,A,B){return r(),t("div",null,k)}const E=a(q,[["render",P]]);export{T as __pageData,E as default};
