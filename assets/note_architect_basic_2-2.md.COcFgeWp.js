import{_ as l,c as t,o as i,a4 as a,aF as r,aG as o,aH as e,aI as s,aJ as n,aK as d,aL as h,aM as c,aN as p}from"./chunks/framework.C8kugyzg.js";const B=JSON.parse('{"title":"2-2 进程调度-死锁-存储管理-固定分页分段","description":"","frontmatter":{},"headers":[],"relativePath":"note/architect/basic/2-2.md","filePath":"note/architect/basic/2-2.md","lastUpdated":1721276511000}'),u={name:"note/architect/basic/2-2.md"},g=a('<h1 id="_2-2-进程调度-死锁-存储管理-固定分页分段" tabindex="-1">2-2 进程调度-死锁-存储管理-固定分页分段 <a class="header-anchor" href="#_2-2-进程调度-死锁-存储管理-固定分页分段" aria-label="Permalink to &quot;2-2 进程调度-死锁-存储管理-固定分页分段&quot;">​</a></h1><h2 id="进程调度" tabindex="-1">进程调度 <a class="header-anchor" href="#进程调度" aria-label="Permalink to &quot;进程调度&quot;">​</a></h2><ul><li>进程调度方式是指 当有更高优先级的进程到来时如何分配cpu。分为可剥夺和不可剥夺两种。可剥夺指当有更高优先级进程到来时，强行将正在运行进程的cpu分配给高优先级进程。不可剥夺是指高优先级进程必须等待当前进程自动释放cpu。</li><li>在某些操作系统中，一个作业从提交到完成需要经历高中低三级调度。</li></ul><ol><li>高级调度 又称长调度 作业调度和接纳调度。它决定处于输入池中哪个后备作业可以掉入主系统做好运行的准备。成为一个或一组就绪进程。在系统中一个作业只需经过一次高级调度</li><li>中级调度 又称中程调度或对换调度。它决定处于交换区中的 哪个就绪进程可以掉入内存，以便直接参与对cpu的竞争。</li><li>低级调度 又称短程调度或进程调度。决定处于内存中的哪个就绪进程可以占用cpu。低级调度是操作系统中最活跃，最重要的调度程序，对系统的影响很大。</li></ol><h3 id="调度算法" tabindex="-1">调度算法 <a class="header-anchor" href="#调度算法" aria-label="Permalink to &quot;调度算法&quot;">​</a></h3><ul><li>先来先服务FCFS 先到达的进程优先分配cpu，用于宏观调度</li><li>时间片轮转 分配给每个进程cpu时间片，轮流使用cpu，每个进程时间片大小相同，很公平，用于微观调度</li><li>优先级调度 每个进程都有一个优先级，优先级大的先分配cpu</li><li>多级反馈调度 时间片轮转和优先级调度结合而成，设置多个就绪队列 1 2 3 ...n，每个队列分配不同的优先级，分配不同的时间长度。新进程先进入队列1的末尾，按fcfs原则，执行队列1的时间片。若未能执行完进程，则转入队列2的末尾，如此重复</li></ul><p><img src="'+r+'" alt=""></p><h2 id="死锁" tabindex="-1">死锁 <a class="header-anchor" href="#死锁" aria-label="Permalink to &quot;死锁&quot;">​</a></h2><ul><li><p>当一个进程在等待永远不可能发生的事件时，就会产生死锁，若系统中有若干个进程处于死锁状态，就会造成系统死锁</p></li><li><p><strong>死锁产生的四个必要条件：</strong></p><ul><li><strong>资源互斥（如果是共享资源不存在死锁）、</strong></li><li><strong>每个进程占有资源并等待其他资源、</strong></li><li><strong>系统不能剥夺进程资源、</strong></li><li><strong>进程资源图是一个环路。</strong></li></ul></li></ul><h3 id="解决死锁方法" tabindex="-1">解决死锁方法 <a class="header-anchor" href="#解决死锁方法" aria-label="Permalink to &quot;解决死锁方法&quot;">​</a></h3><p>解决措施是打破四大条件：</p><ul><li>死锁预防：采用某种策略限制并发进程对于资源的请求，破坏死锁产生的四个条件之一，使系统任何时刻都不满足死锁的条件。</li><li>死锁避免：一般采用银行家算法来避免，银行家算法就是提前计算出一条不会死锁的资源分配方法，才分配资源，否则不分配资源，相当于借贷，考虑对方还的起才借钱，提前考虑好以后，就能避免死锁</li><li>死锁检测：允许死锁产生，但是系统定时运行一个检测死锁的程序，若检测到系统中发生死锁，则设法解除</li><li>死锁解除：死锁发生后的解除方法，如强制剥夺资源，撤销进程等等。</li><li>死锁资源计算：系统内有n个进程，每个进程都需要r个资源，<strong>那么发生死锁的最大资源数为<code>n*(r-1)</code></strong>。其不发生死锁的最小资源数是<code>n*(r-1)+1</code></li></ul><h3 id="考試真題" tabindex="-1">考試真題 <a class="header-anchor" href="#考試真題" aria-label="Permalink to &quot;考試真題&quot;">​</a></h3><p><img src="'+o+'" alt=""></p><p>解析：套用公式 <code>n*(r-1)+1</code> 带入公式3 * (5 - 1) + 1 = 13</p><p>答案：B</p><p><img src="'+e+'" alt=""></p><p>解析：当s &gt; 0时，代表的是资源数量；当s &lt; 0时，代表当前系统中有多少进程在等待资源。同步信号量的初始值是共享资源数量，这里是3，最大值是3；最小值是3 - n。第二问信号量S是-3，就代表有三个进程在等待资源，</p><p>答案： B D</p><p><img src="'+s+'" alt=""></p><p>解析：剩余的资源数很好计算，分别把R1 R2 R3已分配资源数相加即可。第二问，我们首先计算每个进程还需要多少资源，即每个进程R1 R2 R3的最大需求量 - 已分配资源数</p><table tabindex="0"><thead><tr><th>r1</th><th>r2</th><th>r3</th></tr></thead><tbody><tr><td>4</td><td>2</td><td>0</td></tr><tr><td>1</td><td>1</td><td>0</td></tr><tr><td>3</td><td>0</td><td>1</td></tr><tr><td>2</td><td>2</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td></tr></tbody></table><p>经过第一轮分配，R1 R2 R3分别剩余2 0 1，第二轮分配第一个自然分配给p5，排除A C选项，目前剩余：1 0 0，P5所有的需求都满足了，以前学过进程执行结束后会把所有资源还回来，现在我们重新计算剩余资源：3 1 1，所以分配给第二个进程将是p2，已经得出答案</p><p>答案：D B</p><h2 id="线程" tabindex="-1">线程 <a class="header-anchor" href="#线程" aria-label="Permalink to &quot;线程&quot;">​</a></h2><ul><li>传统的进程有两个属性 <ul><li><strong>可拥有资源的独立单位</strong></li><li><strong>可独立调度和分配的基本单位</strong></li></ul></li><li>引入线程的原因是进程在创建、撤销和切换中，系统必须为之付出较大的时空开销，<strong>在系统中设置的进程数目不宜过多</strong>。进程切换的频率不宜过高，这就限制了并发程度的提高。</li><li>引入线程后，将传统进程的两个基本属性分开 <ul><li><strong>线程作为调度和分配的基本单位</strong></li><li><strong>进程作为独立分配资源的单位</strong></li><li>用户可以通过创建线程来完成任务，以较少程序并发执行时付出的时空开销。</li></ul></li><li>线程是进程中一个实体，是被系统独立分配和调度的基本单位。 <ul><li><strong>线程基本上不拥有资源，只拥有一点运行中必不可少的资源（如程序计数器、一组寄存器和栈）</strong></li><li>**可以与同属一个进程的其他线程共享进程所拥有的全部资源。**例如进程的公共数据、全局变量、代码、文件等资源</li><li><strong>但不能共享线程独有的资源</strong>，如线程的栈指针等标识数据</li></ul></li></ul><h2 id="分区存储管理" tabindex="-1">分区存储管理 <a class="header-anchor" href="#分区存储管理" aria-label="Permalink to &quot;分区存储管理&quot;">​</a></h2><ul><li>分区存储组织，就是<strong>整存，将某进程运行所需的内存整体一起分配给它</strong>，然后再执行，有三种分区方式： <ul><li>固定分区：静态分区方法，将主存分为若干个固定的分区，将要运行的作业装配进去，由于分区固定，大小和作业需要的大小不同，<strong>会产生内部碎片</strong>。</li><li>可变分区：动态分区方法，主存空间的分区是在作业转入时划分，正好划分为作业需要的大小，这样不会存在内部碎片，但容易将整片主存空间切割成许多块，<strong>会产生外部碎片</strong>。 <ul><li>系统分配内存的算法有很多：</li><li>首次适应法：按内存地址顺序从头查找，找到第一个≥9K空间的空闲块</li><li>最佳适应法：将内存中所有空闲内存块按从小到大的顺序排列，找到第一个≥9K空间的空闲块，切割分配，这个将会找到与9K空间大小最相近的空闲块</li><li>最差适应法：和最佳适应法相反，将内存中空闲块空间最大的，切割9K空间分配给进程，预防系统中产生过多的细小空闲块</li><li>循环首次适应法：按内存地址顺序查找，找到第一个≥9K空间的空闲块，而后若还需分配，则找下一个，不用每次都从头查找。</li></ul></li><li>可重定位分区：<strong>可以解决碎片问题，移动所有已经分配好的区域，使其成为一个连续的区域</strong>，这样其他外部细小的分区碎片可以合并为大的分区，满足作业要求，只在外部作业请求空间得不到满足时进行。</li></ul></li></ul><h2 id="分页存储管理" tabindex="-1">分页存储管理 <a class="header-anchor" href="#分页存储管理" aria-label="Permalink to &quot;分页存储管理&quot;">​</a></h2><p><strong>逻辑页分为页号和页内地址</strong>，页内地址就是物理偏移地址，页号与物理块号并非按序对应的。需要查询页表，才能得知页号对应的物理块号，在用物理块号加偏移地址才能得出真正运行时的物理地址。</p><ul><li>优点：利用率高，碎片小，分配及管理简单</li><li>缺点：增加了系统开销，可能产生抖动现象。</li><li><strong>有多少个页，就决定页号是多少位</strong><img src="'+n+'" alt=""></li></ul><p>页内地址和物理地址在转化时是不变的。</p><h3 id="页面置换算法" tabindex="-1">页面置换算法 <a class="header-anchor" href="#页面置换算法" aria-label="Permalink to &quot;页面置换算法&quot;">​</a></h3><ul><li>最优算法：OPT，理论上的算法，无法实现。在进程执行完后，进行的最佳效率计算，用来让其他算法比较差距。原理是选择未来最长时间内不被访问的页面置换，这样可以保证未来执行的都是马上要访问的。</li><li>先进先出算法：FIFO，先调入内存你的页仙贝置换淘汰，<strong>会产生抖动现象</strong>，即分配的页数越多，缺页率可能越多（效率越低）</li><li>最近最少使用：LRU 在最近的过去，进程执行过程中，过去最少使用的页面被置换淘汰，根据局部性原理，这种方式效率高，<strong>不会产生抖动现象</strong>，使用大量计数器，但是没有LFU多</li><li>淘汰原则：优先淘汰最近未访问的，而后淘汰最近未被修改的页面。</li></ul><h3 id="快表" tabindex="-1">快表 <a class="header-anchor" href="#快表" aria-label="Permalink to &quot;快表&quot;">​</a></h3><ul><li>是一块小容量的相联存储器，由快速存储器组成，按内容访问，速度快，并且可以从硬件上保证按内容并行查找，<strong>一般用来存放当前访问最频繁的少数活动页面的页号</strong></li><li>快表是将页表存于Cache中；慢表是将页表存于内存上，慢表需要访问两次内存才能取出页，而快表是访问一次Cache和一次内存，因此更快。</li></ul><h3 id="考试真题" tabindex="-1">考试真题 <a class="header-anchor" href="#考试真题" aria-label="Permalink to &quot;考试真题&quot;">​</a></h3><p><img src="'+d+'" alt=""></p><p>解析：</p><ol><li>首先我们明确问题在问物理地址，根据上面的概念 物理地址 = 物理块号 + 物理偏移地址（页内地址）。我们一个一个分析，物理块号是根据页号查表得来的，页号是根据页的个数得来的，这里没有明确指出。我们开始确定页内地址和页号是多少位</li><li>上面给了页面大小是4K，就是2^12，页内地址就是12。高位是页号，低位是页内偏移。</li><li>每四位二进制对应一个16进制，12位二进制就是3个十六进制，D16就是低位的，高位就是1</li><li>查表页号为1对应物理块号是3，答案3D16 答案：B</li></ol><p><img src="'+h+'" alt=""></p><p>答案：D</p><h2 id="分段存储管理" tabindex="-1">分段存储管理 <a class="header-anchor" href="#分段存储管理" aria-label="Permalink to &quot;分段存储管理&quot;">​</a></h2><ul><li>将进程的空间分为一个个段，每段也有段号和段内地址，与分页存储管理不同的是，每段物理大小不同，分段是根据逻辑整体分段的。段表与页表内容不同，页表中直接是逻辑页号对应物理块号。段表有段长和基址两个属性，才能确定一个逻辑段在物理段中的位置</li><li>优点：多道程序共享内存，各段程序修改互不影响</li><li>缺点：内存利用率低，内存碎片浪费大。</li></ul><p><img src="'+c+'" alt=""></p><h3 id="考试真题-1" tabindex="-1">考试真题 <a class="header-anchor" href="#考试真题-1" aria-label="Permalink to &quot;考试真题&quot;">​</a></h3><p><img src="'+p+'" alt=""></p><p>解析：选项中逻辑地址括号内有两位（0,1597），第一位是段号，第二位是段内偏移。然后开始排除，段号0段长为600，选项AC排除。段号1段长50，答案选B 答案：B</p><h2 id="段页式存储管理-不考" tabindex="-1">段页式存储管理（不考） <a class="header-anchor" href="#段页式存储管理-不考" aria-label="Permalink to &quot;段页式存储管理（不考）&quot;">​</a></h2><ul><li>对进程空间先分段，后分页。</li><li>优点：空间浪费小 存储共享容易，存储保护容易，能动态链接</li><li>缺点：由于管理软件增加，复杂性和开销随之增加，需要的硬件以及詹艳红的内容也增加。</li></ul>',50),_=[g];function m(b,q,f,P,x,k){return i(),t("div",null,_)}const C=l(u,[["render",m]]);export{B as __pageData,C as default};