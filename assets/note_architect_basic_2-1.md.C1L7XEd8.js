import{_ as l,c as p,o as i,a4 as t,a5 as a,a6 as o,a7 as r,a8 as s}from"./chunks/framework.DgfrLidp.js";const q=JSON.parse('{"title":"2-1 操作系统概述-进程管理-同步互斥","description":"","frontmatter":{},"headers":[],"relativePath":"note/architect/basic/2-1.md","filePath":"note/architect/basic/2-1.md","lastUpdated":1721187823000}'),e={name:"note/architect/basic/2-1.md"},n=t('<h1 id="_2-1-操作系统概述-进程管理-同步互斥" tabindex="-1">2-1 操作系统概述-进程管理-同步互斥 <a class="header-anchor" href="#_2-1-操作系统概述-进程管理-同步互斥" aria-label="Permalink to &quot;2-1 操作系统概述-进程管理-同步互斥&quot;">​</a></h1><h2 id="操作系统概述" tabindex="-1">操作系统概述 <a class="header-anchor" href="#操作系统概述" aria-label="Permalink to &quot;操作系统概述&quot;">​</a></h2><ul><li>操作系统定义：能有效地组织和管理系统中的各种软、硬件资源，合理地组织计算机系统工作流程，控制程序的执行，并且向用户提供一个良好的工作环境和友好的接口。</li><li>操作系统三个重要的作用： <ul><li>管理计算机中运行的程序和分配各种软硬件资源；</li><li>为用户提供友善的人机界面</li><li>为应用程序的开发和运行提供一个高效率的平台。</li></ul></li><li>操作系统的4个特征是：<strong>并发性、共享性、虚拟性和不确定性</strong>。 <ul><li>并发和并行的区别：操作系统软件执行状态是并发，<strong>并发是宏观，并行是微观</strong>。操作系统使用分时调度</li><li>共享：操作系统内存、资源都是共享的。</li><li>虚拟：物理硬件虚拟成多个逻辑上的设备</li><li>不确定：异步性 微观上是串行的，具体怎么调度是不确定的。</li></ul></li></ul><h3 id="操作系统的功能" tabindex="-1">操作系统的功能 <a class="header-anchor" href="#操作系统的功能" aria-label="Permalink to &quot;操作系统的功能&quot;">​</a></h3><ol><li>进程管理：实质上是对处理机（CPU）的执行“时间”进行管理，采用多道程序等技术将CPU的时间合理地分配给每个任务，主要包括<strong>进程控制</strong>、<strong>进程同步</strong>、<strong>进程通信</strong>和<strong>进程调度</strong></li><li>文件管理：主要包括文件存储空间管理、目录管理、文件的读/写管理和存取控制（存在辅存中）</li><li>存储管理：存储管理是对主存储器“空间”进行管理，主要包括存储分配与回收、存储保护、地址映射（变换）和主存扩充。</li><li>设备管理：实质是对<strong>硬件设备</strong>的管理，包括对<strong>输入/输出设备的分配、启动、完成和回收</strong></li><li>作业管理：包括任务，界面管理、人机交互、图形界面，语音控制和虚拟现实等。</li></ol><h3 id="操作系统的分类" tabindex="-1">操作系统的分类 <a class="header-anchor" href="#操作系统的分类" aria-label="Permalink to &quot;操作系统的分类&quot;">​</a></h3><ul><li><p><strong>批处理操作系统</strong>：单道批处理和多道批处理（主机与外设可并行）。</p></li><li><p><strong>分时操作系统</strong>：一个计算机系统与多个终端设备连接。将CPU的工作时间划分为许多很短的时间片，轮流为各个终端的用户服务。</p><p>不可能一直执行一个任务，否则就堵塞了，所以就把时间分开轮流服务用户。</p></li><li><p><strong>实时操作系统</strong>：计算机对于外来信息能够以足够快的速度进行处理，并在被控对象允许的时间范围内作出快速反应。实时系统对交互能力要求不高，但要求可靠性有保障。</p></li><li><p><strong>网络操作系统</strong>：使联网计算机能方便而有效地共享网络资源，为网络用户提供各种服务的软件和有关协议的集合。三种模式：<strong>集中模式、客户端/服务器模式、对等模式。</strong></p></li><li><p><strong>分布式操作系统</strong>：由多个分散的计算机经连接而成的计算机系统，系统中的计算机无主次之分，任意两台计算机可以通过通信交换信息。</p></li><li><p><strong>微型计算机操作系统</strong>：简称微机操作系统，常用的有：windows、MAC os、Linux</p></li></ul><h3 id="嵌入式操作系统" tabindex="-1">嵌入式操作系统 <a class="header-anchor" href="#嵌入式操作系统" aria-label="Permalink to &quot;嵌入式操作系统&quot;">​</a></h3><blockquote><p>主要特点</p></blockquote><ol><li>微型化：从性能和成本角度考虑，希望占用的资源和系统代码量少，如内存少、字长短、运行速度有限、能源少</li><li>可定制：减少成本和缩短研发周期考虑，嵌入式操作系统能运行在不同的微处理器平台上，能针对硬件变化进行结构与功能上的配置，满足不同应用需要。</li><li>实时性：主要应用于过程控制、数据采集、传输通信、多媒体信息及关键要害领域需要迅速响应的场合</li><li>可靠性：系统构件、模块和体系结构必须达到应有的可靠性，对关键要害应用还要提供容错和防故障措施</li><li>易移植性：为了提高系统的易移植性，通常采用硬件抽象层和板级支撑包的底层设计技术。</li></ol><blockquote><p>初始化过程</p></blockquote><p>按照自底向上、从硬件到软件的次序依次为：<strong>片级初始化→板级初始化→系统初始化</strong></p><p>个人电脑启动：硬件启动→bios启动→os启动</p><h2 id="进程组成和状态" tabindex="-1">进程组成和状态 <a class="header-anchor" href="#进程组成和状态" aria-label="Permalink to &quot;进程组成和状态&quot;">​</a></h2><ul><li>进程的组成：进程控制快PCB（process control block）（唯一标志）、程序（描述进程要做什么）、数据（存放进程执行时所需数据）</li><li>进程基础的状态是下图的三态图，需要熟练掌握下图进程三态之间的转换。</li></ul><p><img src="'+a+'" alt=""></p><h3 id="考试真题" tabindex="-1">考试真题 <a class="header-anchor" href="#考试真题" aria-label="Permalink to &quot;考试真题&quot;">​</a></h3><p>在单处理机系统中，采用先来先服务调度算法。系统中有4个进程P1/P2/P3/P4（假设进程按照此顺序到达）。其中P1为运行状态、P2为就绪状态，P3和P4为等待状态，且P3等待打印机，P4等待扫描仪。如果P1（），则P1、P2、P3和P4的状态应分别为（）</p><p>A.时间片到 B释放了扫描仪 C释放了打印机 D已完成</p><p>A.等待、就绪。等待和等待 B.运行、就绪、运行和等待 C.就绪、运行、等待和等待 D.就绪、就绪、等待和运行</p><p>解析：P1处于运行状态，可以进入两个状态，一个是阻塞（这里没指出他依赖硬件数据，所以排除）另一个是就绪（时间片到）。按照推断P1进入就绪，P2自然就进入运行状态。</p><p>答案：A C</p><h3 id="前趋图" tabindex="-1">前趋图 <a class="header-anchor" href="#前趋图" aria-label="Permalink to &quot;前趋图&quot;">​</a></h3><p>用来表示哪些任务可以并行执行，哪些任务之间有顺序关系，具体如下图：可知，ABC可以并行执行，但是必须ABC都执行完后，才能执行D，这就确定了两点：任务间的并行、任务间的先后顺序。</p><p><img src="'+o+'" alt=""></p><p>ABC可以并行，ABC都执行完才能执行D。</p><h3 id="进程资源图" tabindex="-1">进程资源图 <a class="header-anchor" href="#进程资源图" aria-label="Permalink to &quot;进程资源图&quot;">​</a></h3><ul><li>用来表示进程和资源之间的分配和请求关系</li></ul><p><img src="'+r+'" alt=""></p><ul><li>P代表进程，R代表资源。R方框中有几个圆圈就代表有几个资源 <ul><li>R1指向P1，表示R1已经有一个资源分配给P1进程了</li><li>P1指向R2，表示P1还需要请求一个R2资源才能执行。</li></ul></li><li>阻塞节点：某进程所请求的资源全都分配了，无法获取所需资源，该进程被阻塞了无法执行，如上图p2</li><li>非阻塞节点：某进程所请求的资源还有剩余，可以分配给该进程继续运行，如上图p1 p3</li><li>当一个进城资源图的所有进程都是阻塞节点时，进入死锁状态。</li></ul><h3 id="考试真题-1" tabindex="-1">考试真题 <a class="header-anchor" href="#考试真题-1" aria-label="Permalink to &quot;考试真题&quot;">​</a></h3><p>在如下所示的进程资源图中（）；该进程资源图是（）</p><p><img src="'+s+'" alt=""></p><p>A. p1 p2 p3都是阻塞节点</p><p>B. p1是阻塞节点，p2 p3是非阻塞节点</p><p>C. P1 P2是阻塞节点，p3是非阻塞节点</p><p>D. P1 P2是非阻塞节点，p3是阻塞节点</p><p>A. 可以化简的，其化简顺序为p1 p2 p3</p><p>B. 可以化简的，其化简顺序为 p3 p1 p2</p><p>C. 可以化简的，其化简顺序为 p2 p1 p3</p><p>D. 不可以化简的，因为p1 p2 p3申请的资源都不能得到满足</p><p>解析：因为p1 p2是阻塞节点，所以只能从p3开始优化，答案选B。</p><p>答案：C B</p><p>进程资源图化简的方法是 先看系统还剩下多少资源没分配再看有哪些进程是不阻塞的。把不阻塞的进程的所有边都去掉，形成一个孤立的点，再把系统分配给这个进程的资源回收回来。这样系统剩余的空闲资源变多了起来。接着去看剩下的进程有哪些是不阻塞的，然后又把那个进程变成独立的点。<strong>最后，所有的资源和进程都变成独立的点。</strong></p><h2 id="进程的同步和互斥" tabindex="-1">进程的同步和互斥 <a class="header-anchor" href="#进程的同步和互斥" aria-label="Permalink to &quot;进程的同步和互斥&quot;">​</a></h2><ul><li><p><strong>临界资源</strong> 各进程间需要以互斥的方式对其进行访问的资源</p></li><li><p><strong>临界区</strong> 指进程中对临界资源实施操作的那段程序，本质是一段程序代码</p></li><li><p><strong>互斥</strong> 某资源（即临界资源）在同一时间只能由一个任务单独使用，使用的时候需要加锁，使用完后解锁才能被其他资源使用，比如打印机</p></li><li><p><strong>同步</strong> 多个任务可以并发执行，只不过有速度上的差异。在一定情况下停下等待。不存在资源是否单独或共享的问题。比如自行车或汽车</p></li><li><p><strong>互斥信号量</strong> 对临界资源采用互斥访问，使用互斥信号量后其他资源无法访问，初始值为1</p></li><li><p><strong>同步信号量</strong> 对共享资源的访问控制器初始值一般是共享资源的数量</p></li><li><p><strong>p 操作</strong> 申请资源 s=s-1 若s ≥0，则执行p操作的进程继续执行。若s＜0，则置该进程为阻塞状态 因为无资源可用 并将其插入阻塞队列。</p></li><li><p><strong>v操作</strong> 释放资源 s=s+1 若s＞0，则执行v操作的进程继续执行。若s≤0，则从阻塞队列唤醒一个进程，并将其插入就绪队列 此时因为缺少资源被p操作阻塞的进程可以继续执行，然后执行v操作的进程继续。</p></li></ul><blockquote><p>经典问题 生产者和消费者的问题</p></blockquote><p>三个信号量 互斥信号量s0（仓库独立使用权）同步信号量s1（仓库空闲个数） 同步信号量s2（仓库商品数量）</p><p><strong>生产者流程：</strong></p><p>生产一个商品s</p><p>p s0</p><p>p s1</p><p>将商品放入仓库中</p><p>v s2</p><p>v s0</p><p><strong>消费者流程：</strong></p><p>p s0</p><p>p s2</p><p>取出一个商品</p><p>v s1</p><p>v s0</p><p>互斥信号量中，有申请p操作必有释放v操作</p>',62),h=[n];function c(g,u,d,P,_,b){return i(),p("div",null,h)}const k=l(e,[["render",c]]);export{q as __pageData,k as default};
