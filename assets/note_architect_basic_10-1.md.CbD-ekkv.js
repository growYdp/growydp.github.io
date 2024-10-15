import{_ as t,c as o,o as r,a4 as s,a5 as n,a6 as l,a7 as a,a8 as i,a9 as g,aa as e,ab as d,ac as h,ad as p,ae as c,af as u,ag as b}from"./chunks/framework.BG-HYELF.js";const R=JSON.parse('{"title":"10-1 软件工程概述-CMM-软件过程模型-逆向工程","description":"","frontmatter":{},"headers":[],"relativePath":"note/architect/basic/10-1.md","filePath":"note/architect/basic/10-1.md","lastUpdated":1728926644000}'),m={name:"note/architect/basic/10-1.md"},q=s('<h1 id="_10-1-软件工程概述-cmm-软件过程模型-逆向工程" tabindex="-1">10-1 软件工程概述-CMM-软件过程模型-逆向工程 <a class="header-anchor" href="#_10-1-软件工程概述-cmm-软件过程模型-逆向工程" aria-label="Permalink to &quot;10-1 软件工程概述-CMM-软件过程模型-逆向工程&quot;">​</a></h1><h2 id="软件工程概述-原版" tabindex="-1">软件工程概述（原版） <a class="header-anchor" href="#软件工程概述-原版" aria-label="Permalink to &quot;软件工程概述（原版）&quot;">​</a></h2><h3 id="软件开发生命周期" tabindex="-1">软件开发生命周期 <a class="header-anchor" href="#软件开发生命周期" aria-label="Permalink to &quot;软件开发生命周期&quot;">​</a></h3><ul><li><strong>软件定义时期：包括可行性研究和详细需求分析过程</strong>，任务是确定软件开发工程必须完成的总目标。</li><li><strong>软件开发时期</strong>：就是软件的<strong>设计与实现</strong>，可分为概要设计、详细设计、编码和测试等。</li><li><strong>软件运行和维护</strong>：把<strong>软件产品移交给用户使用。</strong></li></ul><h3 id="软件系统的文档" tabindex="-1">软件系统的文档 <a class="header-anchor" href="#软件系统的文档" aria-label="Permalink to &quot;软件系统的文档&quot;">​</a></h3><p><strong>分为用户文档和系统文档两类</strong>。</p><ul><li>用户文档主要描述<strong>系统功能和使用方法</strong>，不关心这些功能是怎样实现的</li><li>系统文档描述<strong>系统设计、实现和测试等各方面的内容</strong></li></ul><h3 id="软件工程过程" tabindex="-1">软件工程过程 <a class="header-anchor" href="#软件工程过程" aria-label="Permalink to &quot;软件工程过程&quot;">​</a></h3><p><strong>软件工程过程是指为软件产品包括4个方面活动</strong></p><ol><li>P（Pian）**软件规格说明。**规定软件的功能及其运行时的限制</li><li>D（Do）<strong>软件开发</strong>。开发出满足规格说明的软件</li><li>C（Check）<strong>软件确认</strong>。确认开发的软件能够满足用户的需求</li><li>A（Action）<strong>软件演进</strong>。软件在运行过程中不断改进一满足客户新的需求</li></ol><h3 id="软件系统工具" tabindex="-1">软件系统工具 <a class="header-anchor" href="#软件系统工具" aria-label="Permalink to &quot;软件系统工具&quot;">​</a></h3><p>可以按软件过程活动将软件工具分为：</p><ul><li><strong>软件开发工具</strong>：需求分析工具、设计工具、编码与排错工具、测试工具等</li><li><strong>软件维护工具</strong>：版本控制工具、文档分析工具、开发信息库工具、逆向工程工具、再工程工具</li><li><strong>软件管理和软件支持工具</strong>：项目管理工具、配置管理工具、软件评价工具、软件开发工具的评价和选择</li></ul><h3 id="软件设计四个活动" tabindex="-1">软件设计四个活动 <a class="header-anchor" href="#软件设计四个活动" aria-label="Permalink to &quot;软件设计四个活动&quot;">​</a></h3><ul><li><strong>数据设计</strong></li><li><strong>架构（体系结构）设计</strong></li><li><strong>人机界面（接口）设计</strong></li><li><strong>过程设计</strong></li></ul><h2 id="cmm-能力成熟度模型" tabindex="-1">CMM 能力成熟度模型 <a class="header-anchor" href="#cmm-能力成熟度模型" aria-label="Permalink to &quot;CMM 能力成熟度模型&quot;">​</a></h2><h3 id="cmm" tabindex="-1">CMM <a class="header-anchor" href="#cmm" aria-label="Permalink to &quot;CMM&quot;">​</a></h3><table tabindex="0"><thead><tr><th>能力等级</th><th>特点</th><th>关键过程区域</th></tr></thead><tbody><tr><td>初始级initial</td><td>软件过程的特点是<strong>杂乱无章</strong>，有时很混乱，几乎没有明确定义的步骤，项目的成功<strong>完全依赖个人的努力和英雄式核心人物的作用</strong></td><td></td></tr><tr><td>可重复级Repeatable</td><td>建立了<strong>基本的项目管理过程和实践</strong>来跟踪项目费用、进度和功能特性，<strong>有必要的过程准则来重复</strong>以前在同类项目中的成功</td><td>软件配置管理、软件质量保证、软件子合同管理、软件项目跟踪与监督、软件项目策划、软件需求管理</td></tr><tr><td>已定义级Defined</td><td><strong>管理和工程两方面的软件过程已经文档化、标准化，并综合成整个软件开发组织的标准软件过程</strong>，所有项目都采用根据实际情况修改后得到的<strong>标准软件过程开发和维护软件</strong></td><td>同行评审、组间协调、软件产品工程、集成软件管理、培训大纲、组织过程定义、组织过程集点</td></tr><tr><td>已管理级Managed</td><td>制定了软件过程和产品质量的<strong>详细度量标准</strong>，对软件过程和产品质量有定量的理解和控制</td><td>软件质量管理和定量过程管理</td></tr><tr><td>优化级Optimized</td><td>加强了<strong>定量分析</strong>，通过来自过程质量反馈和来自新观念、新技术和反馈使过程能<strong>不断持续地改进</strong></td><td>过程更改管理、技术改革管理和缺陷预防</td></tr></tbody></table><h3 id="cmmi-能力成熟度模型集成" tabindex="-1">CMMI 能力成熟度模型集成 <a class="header-anchor" href="#cmmi-能力成熟度模型集成" aria-label="Permalink to &quot;CMMI 能力成熟度模型集成&quot;">​</a></h3><p>是<strong>若干过程模型的综合和改进</strong>，不仅仅软件，而是支持<strong>多个工程学科和领域的</strong>、系统的、一致的过程改进框架，能适应现代工程的特点和需要，能提高过程的质量和工作效率</p><p>CMMI两种表示方法：</p><ol><li>阶段式模型：类似于CMM，它关注组织的成熟度，五个成熟度模型如下：</li></ol><table tabindex="0"><thead><tr><th>能力等级</th><th>特点</th><th>关键过程区域</th></tr></thead><tbody><tr><td>初始级</td><td>过程不可预测且缺乏控制</td><td></td></tr><tr><td>已管理级</td><td>过程为项目服务</td><td>需求管理、项目计划、配置管理、项目监督与控制、供应商合同管理、度量和分析、过程和产品质量保证</td></tr><tr><td>已定义级</td><td>过程为组织服务</td><td>需求开发、技术解决方案、产品集成、验证、确认组织级过程焦点、组织级过程定义、组织级培训、集成项目管理、风险管理、集成化的团队、决策分析和解决方案、组织级集成环境</td></tr><tr><td>定量管理</td><td>过程已度量和控制</td><td>组织过程性能、定量项目管理</td></tr><tr><td>优化级</td><td>集中于过程改进和优化</td><td>组织级改革与实施、因果分析和解决方案</td></tr></tbody></table><ol start="2"><li>连续式模型：关注每个过程域的能力，一个组织对不同的过程域可以达到不同的过程域能力等级。</li></ol><h3 id="考试真题" tabindex="-1">考试真题 <a class="header-anchor" href="#考试真题" aria-label="Permalink to &quot;考试真题&quot;">​</a></h3><p><img src="'+n+'" alt=""></p><p>答案：B D</p><p><img src="'+l+'" alt=""></p><p>答案：B</p><h2 id="软件过程模型" tabindex="-1">软件过程模型 <a class="header-anchor" href="#软件过程模型" aria-label="Permalink to &quot;软件过程模型&quot;">​</a></h2><h3 id="瀑布模型sdlc" tabindex="-1">瀑布模型SDLC <a class="header-anchor" href="#瀑布模型sdlc" aria-label="Permalink to &quot;瀑布模型SDLC&quot;">​</a></h3><p>瀑布模型是一个经典的软件生命周期模型，<strong>一般将软件开发分为</strong>：可行性分析（计划）、需求分析、软件设计（概要设计、详细设计）、编码（含单元测试）、测试、运行维护等几个阶段。</p><p><img src="'+a+'" alt=""></p><blockquote><p>瀑布模型特点</p></blockquote><ol><li>从<strong>上一项开发活动接受该项活动的工作对象作为输入</strong>。</li><li>利用这一输入，<strong>实施该项活动应完成的工作内容</strong>。</li><li>给出该项活动的<strong>工作成果，作为输出</strong>传给下一项开发活动。</li><li>对<strong>该项活动的实施工作成果进行评审</strong>。若其工作成果得到确认，则继续进行下一项开发活动；否则返回前一项，甚至更前项的活动。<strong>尽量减少多个阶段间的反复。已相对来说较小的费用来开发软件</strong></li></ol><h3 id="螺旋模型" tabindex="-1">螺旋模型 <a class="header-anchor" href="#螺旋模型" aria-label="Permalink to &quot;螺旋模型&quot;">​</a></h3><p><img src="'+i+'" alt=""></p><ul><li>螺旋模型是一个<strong>演化软件过程模型</strong>，将<strong>原型实现的迭代特征与线性顺序（瀑布）模型中控制的和系统化的方面结合</strong>起来。在螺旋模型中，<strong>软件开发是一系列的增量分布</strong></li><li>开发过程具有周期性重复的螺旋形状。四个象限分别标志每个周期所划分的四阶段：<strong>制定计划、风险分析、实施工程和客户评估</strong>。螺旋模型<strong>强调了风险分析</strong>，特别<strong>适用于庞大而复杂的、高风险的系统</strong></li></ul><h3 id="v模型" tabindex="-1">V模型 <a class="header-anchor" href="#v模型" aria-label="Permalink to &quot;V模型&quot;">​</a></h3><p><img src="'+g+'" alt=""></p><p>由左右两边组成。左边的下画线分别代表了需求分析、概要设计、详细设计、编码。右边的上画线代表了单元测试、集成测试、系统测试和验收测试</p><blockquote><p>特点</p></blockquote><ol><li><strong>单元测试</strong>：主要目的是针对<strong>编码过程</strong>中可能存在的各种错误</li><li><strong>集成测试</strong>：主要目的是针对<strong>详细设计</strong>中可能存在的问题</li><li><strong>系统测试</strong>：主要针对<strong>概要设计</strong>，检查系统作为一个整体是否有效地得到运行</li><li><strong>验收测试</strong>：通常由业务专家或者用户进行，<strong>以确认产品能真正符合用户业务上的需要</strong></li><li>V模型<strong>适用于需求明确和需求变更不频繁</strong>的情形</li></ol><h3 id="原型化模型" tabindex="-1">原型化模型 <a class="header-anchor" href="#原型化模型" aria-label="Permalink to &quot;原型化模型&quot;">​</a></h3><p><strong>第一步是创建一个快速原型</strong>，能够满足项目干系人与未来的用户可以与原型进行交互，再通过与相关干系人进行充分的讨论和分析。<strong>最终弄清楚当前系统的需求</strong>，进行了充分的了解之后，在原型的基础上开发出用户满意的产品</p><blockquote><p>特点</p></blockquote><ol><li><strong>实际可行</strong></li><li>具有<strong>最终系统的基本特征</strong></li><li><strong>构造方便、快速、造假低</strong>。原型法的特点在于原型法<strong>对用户的需求是动态响应、逐步纳入</strong>的。</li></ol><h3 id="增量模型" tabindex="-1">增量模型 <a class="header-anchor" href="#增量模型" aria-label="Permalink to &quot;增量模型&quot;">​</a></h3><p><strong>首先开发核心模块功能</strong>，而后与用户确认，之后再开发次核心模块的功能，即每次开发一部分功能，并与用户需求确认，最终完成项目开发，<strong>优先级最高的服务最先交付</strong>。</p><blockquote><p>特点</p></blockquote><p>由于不是从系统整体角度规划各个模块，<strong>不利于模块划分</strong>。难点在于<strong>如何将客户需求划分为多个增量</strong>。与原型不同的是<strong>增量模型的每一次增量版本都可作为独立可操作的作品</strong>，原型的构造一般是为了演示。</p><p><img src="'+e+'" alt=""></p><h3 id="喷泉模型" tabindex="-1">喷泉模型 <a class="header-anchor" href="#喷泉模型" aria-label="Permalink to &quot;喷泉模型&quot;">​</a></h3><p><strong>一种以用户需求为动力，以对象作为驱动的模型</strong>，适用于<strong>面向对象</strong>的开发方法。使开发过程具有迭代性和无间隙性。</p><blockquote><p>基于构件的开发模型CBSD</p></blockquote><p>利用<strong>预先包装的构件来构造应用系统</strong>。构件可以是组织内部开发的构件，也可以是商品化成品软件构件。特点是<strong>增强了复用性</strong>，在系统开发过程中，会构件一个构件库，供其他系统复用，因此可以提高可靠性，节省时间和成本</p><blockquote><p>形式化方法模型</p></blockquote><p>建立在<strong>严格数学基础上</strong>的一种软件开发方法，主要活动是生成计算机软件形式化的数学规格说明。</p><h3 id="考试真题-1" tabindex="-1">考试真题 <a class="header-anchor" href="#考试真题-1" aria-label="Permalink to &quot;考试真题&quot;">​</a></h3><p><img src="'+d+'" alt=""></p><p>解析：功能清晰，需求较明确，都是考察瀑布模型</p><p>答案：A</p><p><img src="'+h+'" alt=""></p><p>答案：D</p><h3 id="敏捷模型" tabindex="-1">敏捷模型 <a class="header-anchor" href="#敏捷模型" aria-label="Permalink to &quot;敏捷模型&quot;">​</a></h3><p><img src="'+p+'" alt=""></p><p><strong>个体和交互 胜过 过程和工具、可以工作的软件 胜过 面面俱到的文档、客户合作 胜过 合同谈判、响应变化 胜过 遵循计划</strong>。</p><blockquote><p>敏捷方法区别于其他方法的两个特点：</p></blockquote><ol><li>是 <strong>适应性</strong> 而非 预设性</li><li>是 <strong>面向人的</strong> 而非 面向过程的</li></ol><blockquote><p>核心思想</p></blockquote><ol><li>敏捷方法是<strong>适应型</strong>，而非可预测型。拥抱变化，适应变化</li><li>敏捷方法是<strong>以人为本</strong>，而非以过程为本。发挥人的特性</li><li><strong>迭代增量式</strong>的开发过程。以原型开发思想为基础，采用法代增量式开发，发型版本小型化。</li></ol><blockquote><p>主要敏捷方法</p></blockquote><ol><li>极限编程（XP）。基础和价值观是<strong>交流、朴素、反馈和勇气</strong>，即任何一个软件项目都可以从4个方面入手进行改善：<strong>加强交流、从简单做起、寻求反馈、勇于实事求是</strong></li></ol><ul><li>XP是一种<strong>近螺旋式</strong>的开发方法，它将<strong>复杂的开发过程分解为一个个相对比较简单的小周期</strong>；通过积极的交流、反馈以及其他一系列的方法，开发人员和客户可以非常清楚开发进度、变化、待解决的问题和潜在的困难等，并根据实际情况及时地调整开发过程</li><li>XP提倡<strong>测试先行</strong>，为了将以后出现BUG的机率降到最低</li></ul><ol start="2"><li>水晶系列方法：<strong>以人为中心</strong>的理念，在实践上有所不同。目的是发展一种提倡“机动性的”方法，包括具有共性的核心元素，<strong>每个都含有独特的角色、过程模式、工作产品和实践</strong></li><li>并列争球法（Scrum）。是一种迭代的增量化过程，<strong>把每段时间（如30天）一次的迭代称为一个冲刺（Sprint）</strong>，并<strong>按需求的优先级别来实现产品</strong>，多个自组织和自治的小组并行地递增实现产品</li><li>特性驱动开发方法（FDD）。是一个<strong>迭代</strong>的开发模型。有效的软件开发 需要3个要素：<strong>人、过程和技术</strong>。有5个核心过程：<strong>开发整体对象模型、构造特征列表、计划特征开发、特征设计和特征构建</strong></li></ol><h3 id="统一过程模型rup" tabindex="-1">统一过程模型RUP <a class="header-anchor" href="#统一过程模型rup" aria-label="Permalink to &quot;统一过程模型RUP&quot;">​</a></h3><p><strong>如何有效的利用商业的、可靠的方法开发和部署软件，是一种重量级的过程。RUP可以为所有方面和层次的程序开发提供指导方针、模板以及事例支持</strong></p><p>RUP软件开发生命周期是一个二维的软件开发模型，RUP中有9个核心工作流</p><ul><li><strong>业务建模</strong> 理解待开发系统所在的机构及其商业运作，确保所有参与人员对待开发系统所在的机构有共同的认识，评估待开发系统对所在机构的影响</li><li><strong>需求</strong> 定义系统功能及用户界面，使客户知道系统的功能，使开发人员理解系统的需求，为项目预算及计划提供基础</li><li><strong>分析与设计</strong> 把需求分析的结果转化为分析与设计模型</li><li><strong>实现</strong> 把设计模型转换为实现结果，对开发的代码做单元测试，将不同实现人员开发的模块集成为可执行系统</li><li><strong>测试</strong> 检查各子系统之间的交互、集成，验证所有需求是否均被正确实现，对发现的软件质量上的缺陷进行归档，对软件质量提出改进建议</li><li><strong>部署</strong> 打包 分发 安装软件 升级旧系统 培训用户及销售人员 并提供技术支持</li><li><strong>配置与变更管理</strong> 跟踪并维护系统开发过程中产生的所有制品的完整性和一致性</li><li><strong>项目管理</strong> 为软件开发项目提供计划 人员分配 执行 监控等方面的指导，为风险管理提供框架</li><li><strong>环境</strong> 为软件开发机构提供软件开发环境 即提供过程管理和工具的支持</li></ul><p>RUP把软件开发生命周期划分为<strong>多个循环</strong>，每个循环生成产品的一个新的版本，<strong>每个循环一次由4个连续的阶段组成</strong>，每个阶段完成确定的任务，这4个阶段如下：</p><ul><li><strong>初始阶段</strong>：定义最终产品视图和业务模型，<strong>并确定系统范围</strong></li><li><strong>细化阶段</strong>：设计及确定<strong>系统的体系结构</strong>，制订工作计划及资源要求</li><li><strong>构造阶段</strong>：<strong>构造产品并继续演进需求</strong>、体系结构、计划直至产品提交</li><li><strong>移交阶段</strong>：<strong>把产品提交给用户使用</strong></li></ul><blockquote><p>核心概念</p></blockquote><ul><li>角色 <strong>Who的问题</strong></li><li>活动 <strong>How的问题</strong></li><li>制品 <strong>What的问题</strong></li><li>工作流 <strong>When的问题</strong></li></ul><blockquote><p>特点</p></blockquote><ol><li><strong>用例驱动</strong>：需求分析、设计、实现和测试等活动都是用例驱动的</li><li><strong>以体系结构为中心</strong>：包括系统的总体组织和全局控制、通信协议等。是一个多维的结构，会采用多个视图来描述。在典型的4+1视图模型中：</li></ol><ul><li><strong>分析人员和测试人员</strong>关心的是系统的行为，会侧重于用例视图</li><li><strong>最终用户</strong>关心的是系统的功能，会侧重于逻辑视图</li><li><strong>程序员</strong>关心的是系统的配置、装配等问题，会侧重于实现视图</li><li><strong>系统集成人员</strong>关心的是系统的性能、可伸缩性、吞吐率等问题，会侧重于进程视图</li><li><strong>系统工程师</strong>关心的是系统的发布、安装、拓扑结构等问题，会侧重于部署视图</li></ul><p><img src="'+c+'" alt=""></p><ol start="3"><li>把整个项目开发分为<strong>多个迭代过程</strong>。在每次迭代中，只考虑系统的一部分需求，进行分析、设计、实现、测试和部署等过程，每次迭代是在已完成部分的基础上进行的，每次增加一些新的功能实现，以此进行下去，直至最后项目的完成</li></ol><h2 id="逆向工程" tabindex="-1">逆向工程 <a class="header-anchor" href="#逆向工程" aria-label="Permalink to &quot;逆向工程&quot;">​</a></h2><h3 id="软件复用" tabindex="-1">软件复用 <a class="header-anchor" href="#软件复用" aria-label="Permalink to &quot;软件复用&quot;">​</a></h3><p><strong>将已有软件的各种有关知识用于建立新的软件，以缩减软件开发和维护的花费</strong>。软件复用是提高软件生产力和质量的一种重要技术。早期的软件复用主要是<strong>代码级复用</strong>，被复用的知识专指程序，后来扩大到包括<strong>领域知识、开发经验、设计决定、体系结构、需求、设计、代码和文档等一切有关方面</strong>。</p><h3 id="逆向工程-1" tabindex="-1">逆向工程 <a class="header-anchor" href="#逆向工程-1" aria-label="Permalink to &quot;逆向工程&quot;">​</a></h3><p>软件的逆向工程是<strong>分析程序，力图在比源代码更高抽象层次上建立程序的表示过程</strong>，逆向工程是<strong>设计的恢复过程</strong>。逆向工程的四个级别：</p><ul><li><strong>实现级</strong> 包括程序的抽象语法树、符号表、过程的设计表示</li><li><strong>结构级</strong> 包括反映程序分量之间相互依赖关系的信息，例如调用图、结构图、程序和数据结构</li><li><strong>功能级</strong> 包括反映程序段功能及程序段之间关系的信息，例如数据和控制流模型</li><li><strong>领域级</strong> 包括反映程序分量或程序诸实体与应用领域概念之间对应关系的信息</li></ul><p>其中，<strong>领域级抽象级别最高，完备性最低，实现级抽象级别最低，完备性最高。</strong></p><blockquote><p>逆向工程相关概念</p></blockquote><p>重构、设计恢复、再工程和正向工程</p><ol><li>重构是指在<strong>同一抽象级别上转换系统描述形式</strong></li><li>设计恢复是指借助工具<strong>从已有程序中抽象出有关数据设计</strong>、总体结构设计和过程设计等方面的信息。</li><li>再工程是指<strong>在逆向工程所获得信息的基础上，修改或重构已有的系统，产生系统的一个新版本</strong>。再工程<strong>是对现有系统重新开发过程</strong>，包括<strong>逆向工程、新需求的考虑过程和正向工程</strong>三个步骤。它不仅能从已存在的程序中重新获得设计信息，而且还能使用这些信息来重构现有系统，以改进它的综合质量。在利用再工程重构现有系统的同时，一般会增加新的需求，包括增加新的功能和改善系统的性能。</li><li>正向工程是指不仅从现有系统中恢复设计信息，<strong>而且使用该信息去改变或重构现有系统</strong>，以改善其整体质量</li></ol><h3 id="考试真题-2" tabindex="-1">考试真题 <a class="header-anchor" href="#考试真题-2" aria-label="Permalink to &quot;考试真题&quot;">​</a></h3><p><img src="'+u+'" alt=""></p><p>答案：A D</p><p><img src="'+b+'" alt=""></p><p>答案：B D</p><h3 id="软件系统工具分类" tabindex="-1">软件系统工具分类 <a class="header-anchor" href="#软件系统工具分类" aria-label="Permalink to &quot;软件系统工具分类&quot;">​</a></h3><p>软件系统工具可以按软件过程活动分为：软件开发工具、软件维护工具、软件管理和软件支持工具</p><ul><li>软件开发工具：需求分析工具、设计工具、编码与排错工具</li><li>软件维护工具：版本控制工具、文档分析工具、开发信息哭工具、逆向工程工具、再工程工具</li><li>软件管理和维护工具：项目管理工具、配置管理工具、软件评价工具、软件开发工具的评价和选择</li></ul>',106),_=[q];function k(P,f,x,M,C,D){return r(),o("div",null,_)}const U=t(m,[["render",k]]);export{R as __pageData,U as default};
