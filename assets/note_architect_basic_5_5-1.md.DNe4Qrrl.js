import{_ as l,c as t,o as i,a4 as a,aV as d,aW as r,aX as e,aY as o,aZ as s,a_ as P,a$ as h}from"./chunks/framework.C8kugyzg.js";const g=JSON.parse('{"title":"5-1 七层模型-局域网-TCP/IP协议族","description":"","frontmatter":{},"headers":[],"relativePath":"note/architect/basic/5/5-1.md","filePath":"note/architect/basic/5/5-1.md","lastUpdated":null}'),n={name:"note/architect/basic/5/5-1.md"},p=a('<h1 id="_5-1-七层模型-局域网-tcp-ip协议族" tabindex="-1">5-1 七层模型-局域网-TCP/IP协议族 <a class="header-anchor" href="#_5-1-七层模型-局域网-tcp-ip协议族" aria-label="Permalink to &quot;5-1 七层模型-局域网-TCP/IP协议族&quot;">​</a></h1><h2 id="网络功能和分类" tabindex="-1">网络功能和分类 <a class="header-anchor" href="#网络功能和分类" aria-label="Permalink to &quot;网络功能和分类&quot;">​</a></h2><ul><li>计算机网络是计算机技术与通信技术相结合的产物，实现了远程通信、远程信息处理和资源共享。</li><li>计算机网络的功能： <ul><li><strong>数据通信</strong></li><li><strong>资源共享</strong></li><li><strong>管理集中化</strong></li><li><strong>实现分布式处理</strong></li><li><strong>负载均衡</strong></li></ul></li><li>网络性能指标： <ul><li>速率</li><li>带宽（频带宽度或传送线路速率）</li><li>吞吐量</li><li>时延</li><li>往返时间</li><li>利用率</li></ul></li><li>网络非性能指标： <ul><li>费用</li><li>质量</li><li>标准化</li><li>可靠性</li><li>可扩展性</li><li>可升级性</li><li>易管理性和可维护性</li></ul></li></ul><p>计算机网络按<strong>分布范围和拓扑结构</strong>划分： <img src="'+d+'" alt=""></p><blockquote><p>拓扑结构</p></blockquote><ul><li>总线型（利用率低、干扰大、价格低），同一时间只能有一个点发送消息</li><li>星型（交换机形成的局域网，中央单元负荷大）</li><li>环形（流动方向固定，效率低扩充难）</li><li>树型（总线型的扩充、分级结构）</li><li>分布式（任意节点连接、管理难成本高）</li></ul><p><img src="'+r+'" alt=""></p><h2 id="通信技术" tabindex="-1">通信技术 <a class="header-anchor" href="#通信技术" aria-label="Permalink to &quot;通信技术&quot;">​</a></h2><ul><li>计算机网络是<strong>利用通信技术将数据从一个结点传送到另一结点的过程</strong>。通信技术是计算机网络的基础。信道可以分为<strong>物理信道和逻辑信道</strong>。 <ul><li>物理信道由传输介质和设备组成，根据传输介质的不同，分为无线信道和有线信道。</li><li>逻辑信道是指在数据发送端和接收端之间存在的一条虚拟线路，可以使有连接的或无连接的。逻辑信道以物理信道为载体</li></ul></li><li><strong>发信机进行的信号处理</strong>包括信源编码、信道编码、交织、脉冲成型和调制。</li><li>收信机进行的信号处理包括解调、采样判决、去交织、信道译码和信源译码</li><li><strong>如果同时传递多路数据就需要复用技术和多址技术。</strong><ul><li>复用技术：在一条信道上同时传输多路数据的技术，如TDM时分复用、FDM频分复用和CDM码分复用等。</li><li>多址技术：一条线上同时传输多个用户数据的技术，在接收端把多个用户的数据分离（TDMA时分多址，FDMA频分多址和CDMA码分多址）</li></ul></li><li><strong>新一代的移动通信技术，5G</strong>特征： <ol><li>基于OFDM优化的波形和多址接入</li><li>实现可扩展的OFDM间隔参数配置</li><li>OFDM加窗提高多路传输效率</li><li>灵活框架设计</li><li>大规模MIMO：最多256根天线</li><li>毫米波：频率大于24GHz以上的频段</li><li>频谱共享</li><li>先进的信道编码设计</li></ol></li><li>5G网络的主要特征：服务化架构、网络切片</li></ul><h2 id="osi七层模型" tabindex="-1">OSI七层模型 <a class="header-anchor" href="#osi七层模型" aria-label="Permalink to &quot;OSI七层模型&quot;">​</a></h2><table tabindex="0"><thead><tr><th>层</th><th>功能</th><th>单位</th><th>协议</th><th>设备</th></tr></thead><tbody><tr><td>1.物理层</td><td>在链路上透明的传输位。</td><td>比特</td><td>EIA/TIA RS-232 RS-449 V.35 RJ-45 FDDI</td><td>中继器、集线器</td></tr><tr><td>2.数据链路层</td><td>把不可靠的信道变为可靠的信道</td><td>帧</td><td>SDLC HDLC LAPB PPP STP 帧中继等 IEEE802 ATM</td><td>交换器、网桥</td></tr><tr><td>3.网络层</td><td>在源节点-目的节点之间进行路由选择、拥塞控制、顺序控制、传送包，保证报文的正确性</td><td>IP分组</td><td>IP ICMP IGMP ARP RARP</td><td>路由器</td></tr><tr><td>4.传输层</td><td>提供端-端间可靠的、透明的数据传输</td><td>报文段</td><td>TCP UDP</td><td>网关</td></tr><tr><td>5.会话层</td><td>建立通信远程的逻辑名字与物理名字之间的联系，提供进程之间的建立。管理和终止会话的方法，处理同步与恢复问题</td><td></td><td>RPC SQL NFS</td><td>网关</td></tr><tr><td>6.表示层</td><td>实现数据转换</td><td></td><td>JPEG ASCII GIF MPEG DES</td><td>网关</td></tr><tr><td>7.应用层</td><td>对用户不透明的提供各种服务 如E-MAIL</td><td>数据</td><td>Telnet FTP HTTP SMTP P0P3 DNS DHCP等</td><td>网关</td></tr></tbody></table><h2 id="局域网和广域网协议" tabindex="-1">局域网和广域网协议 <a class="header-anchor" href="#局域网和广域网协议" aria-label="Permalink to &quot;局域网和广域网协议&quot;">​</a></h2><ul><li><p>以太网是一种计算机局域网组网技术。</p></li><li><p>以太网规范IEEE 802.3是重要的局域网协议，包括：</p><ul><li>IEEE 802.3 标准以太网 10MB/S 传输介质为细同轴电缆</li><li>IEEE 802.3u 快速以太网 100MB/S 双绞线</li><li>IEEE 802.3z 千兆以太网 1000MB/S 光纤或双绞线</li><li>IEEE 802.3ae 万兆以太网 10Gb/s 光纤 <img src="'+e+'" alt=""> 以太帧结构</li></ul></li><li><p>DMAC 目的MAC地址</p></li><li><p>SMAC 源MAC地址</p></li><li><p>Length/Type 长度/类型</p></li><li><p>DATA/PAD 数据填充</p></li><li><p>FCS 校验</p></li><li><p>最小帧长：64字节</p></li><li><p>无线局域网WLAN技术标准：IEEE 802.11</p></li><li><p>在WLAN中，通常使用的拓扑结构主要由三种形式：点对点型 HUB型和全分布型</p></li><li><p>广域网相关技术：</p><ul><li>同步光网络（SONET，利用光纤进行数字化信息通信）、</li><li>数字数据网（DDN，利用数字信道提供半永久性连接电路以传输数据）、</li><li>帧中继（FR，数据包交换技术）、</li><li>异步传输技术（ATM，以信元为基础的面向连接的一种分组交换和复用技术）。</li></ul></li></ul><h2 id="tcp-ip协议族" tabindex="-1">TCP/IP协议族 <a class="header-anchor" href="#tcp-ip协议族" aria-label="Permalink to &quot;TCP/IP协议族&quot;">​</a></h2><p>网络协议三要素：语法、语义、时序。</p><ul><li>语法：规定传输数据的格式</li><li>语义：规定所要完成的功能</li><li>时序：固定执行各种操作的条件、顺序关系等。</li></ul><p><img src="'+o+'" alt=""></p><h3 id="网络层协议" tabindex="-1">网络层协议 <a class="header-anchor" href="#网络层协议" aria-label="Permalink to &quot;网络层协议&quot;">​</a></h3><ul><li>IP：网络层最重要的核心协议，在源地址和目的地址之间传送数据包，无连接，不可靠</li><li>ICMP：因特网控制报文协议，用于在IP主机、路由器之间传递控制消息。控制消息是指网络通不通、主机是否可达、路由是否可用等网络本身的消息</li><li>ARP和RARP：地址解析协议，ARP是将IP地址转换为物理地址，RARP是将物理地址转换为IP地址</li><li>IGMP：网络组管理协议，允许因特网中的计算机参加多播，是计算机用做向相邻多目路由器报告多目组成员的协议，支持组播</li></ul><h3 id="传输层协议" tabindex="-1">传输层协议 <a class="header-anchor" href="#传输层协议" aria-label="Permalink to &quot;传输层协议&quot;">​</a></h3><ul><li>TCP：整个TCP/IP协议族中最重要的协议之一，在IP协议提供的不可靠数据基础上，曹永乐重发技术，为应用程序提供了一个可靠的、面向连接的、全双工的数据传输服务。一般用于传输数据量比较少，且对可靠性要求高的场合。</li><li>UDP：是一种不可靠、无连接的协议，有助于提高传输速率，一般用于传输数据量大，对可靠性要求不高，但要求速度快的场合。</li></ul><h3 id="应用层协议" tabindex="-1">应用层协议 <a class="header-anchor" href="#应用层协议" aria-label="Permalink to &quot;应用层协议&quot;">​</a></h3><p>基于TCP的FTP、HTTP等都是可靠传输，基于UDP的DHCP、DNS等都是不可靠传输</p><ul><li><p>FTP(基于TCP)：可靠的文件传输协议，用于因特网上的控制文件的双向传输。</p></li><li><p>HTTP(基于TCP)：超文本传输协议，用于从www服务器传输超文本到本地浏览器的传输协议。使用SSL加密后的安全网页协议为HTTPS</p></li><li><p>SMTP和POP3(基于TCP)：简单邮件传输协议，是一组用于由原地址到目的地址传送邮件的规则，邮件报文采用ASCII格式表示</p></li><li><p>Telnet(基于TCP)：远程连接协议，是因特网远程登录服务的标准协议和主要方式</p></li><li><p>TFTP(基于UDP)：不可靠的，开销不大的小文件传输协议</p></li><li><p>SNMP(基于UDP)：简单网络管理协议，由一组网络管理的标准协议，包含一个应用层协议、数据库模型和一组资源对象。该协议能够支持网络管理系统，用于监测连接到网络上的设备是否有任何引起管理运行关注的情况</p></li><li><p>DHCP(基于UDP)：动态主机配置协议，基于UDP，基于C/S模型，为主机动态分配IP地址，有三种方式：固定分配、动态分配、自动分配。</p></li><li><p>DNS(基于UDP)：域名解析协议，通过域名解析出IP地址。</p></li></ul><h3 id="协议端口号对照表" tabindex="-1">协议端口号对照表 <a class="header-anchor" href="#协议端口号对照表" aria-label="Permalink to &quot;协议端口号对照表&quot;">​</a></h3><table tabindex="0"><thead><tr><th>端口</th><th>服务</th><th>端口</th><th>服务</th></tr></thead><tbody><tr><td>20</td><td>文件传输协议（数据）</td><td>80</td><td>超文本传输协议（HTTP）</td></tr><tr><td>21</td><td>文件传输协议（控制）</td><td>110</td><td>POP3服务器（邮箱接收服务器）</td></tr><tr><td>23</td><td>Telnet终端仿真协议</td><td>69</td><td>简单文件传输协议（TFTP）</td></tr><tr><td>67</td><td>DHCP（服务端）</td><td>68</td><td>DHCP（客户端）</td></tr><tr><td>25</td><td>SMTP简单邮件发送协议</td><td>161</td><td>SNMP（轮询）</td></tr><tr><td>53</td><td>域名解析协议（DNS）</td><td>162</td><td>SNMP（陷阱）</td></tr></tbody></table><h3 id="考试真题" tabindex="-1">考试真题 <a class="header-anchor" href="#考试真题" aria-label="Permalink to &quot;考试真题&quot;">​</a></h3><p><img src="'+s+'" alt=""> 答案：C</p><p><img src="'+P+'" alt=""> 答案：B</p><p><img src="'+h+'" alt=""> 答案：B</p><h2 id="交换技术" tabindex="-1">交换技术 <a class="header-anchor" href="#交换技术" aria-label="Permalink to &quot;交换技术&quot;">​</a></h2><ul><li><p>数据再网络中转发离不开交换机。</p></li><li><p>交换机功能包括：</p><ul><li>集线功能：提供大量可供线缆连接的端口达到部署星状拓扑网络的目的</li><li>中继功能：在转发帧时重新产生不失真的电信号</li><li>桥接功能：在内置的端口上使用相同的转发和过滤逻辑</li><li>隔离冲突域功能：将部署好的局域网分为多个冲突域，而每个冲突域都有自己独立的带宽，以提高换机整体宽带利用效率。</li></ul></li><li><p>交换机需要实现的功能：</p><ol><li>转发路径学习：根据收到数据帧中的源MAC地址建立该地址同交换机端口的映射，写入MAC地址表中</li><li>数据转发：如果交换机根据数据帧中目的MAC地址在建立好的MAC地址表中查询到了，就向对应端口进行转发。</li><li>数据泛洪：如果数据帧中的目的MAC地址不在MAC地址表中，则向所有端口转发，也就是泛洪。广播帧和组播帧向所有端口（不包括源端口）进行转发</li><li>链路地址更新：MAC地址表会每隔一定的时间（如300s）更新一次。</li></ol></li></ul><h2 id="路由技术" tabindex="-1">路由技术 <a class="header-anchor" href="#路由技术" aria-label="Permalink to &quot;路由技术&quot;">​</a></h2><ul><li>路由功能由路由器来提供，具体包括： <ol><li>异种网络互联：比如具有异种子网协议的网络互联</li><li>子网协议转换：不同子网间包括局域网和广域网之间的协议转换</li><li>数据路由：将数据从一个网络依据路由规则转发到另一个网络</li><li>速率适配：利用缓存和流控协议进行匹配</li><li>隔离网络：防止广播风暴，实现防火墙</li><li>报文分片和重组：超过接口的MTU报文被分片，到达目的地之后的报文被重组</li><li>备份、流量控制，如主备线路的切换和复杂流量控制等</li></ol></li><li>路由器工作在OSI七层协议中的第3层，即网络层。主要任务是接收来源于一个网络接口的数据包，通常根据此数据包的目的地址决定待转发的下一个地址（下一跳地址）。路由器中维持着数据转发所需的路由表，所有数据包的发送或转发都通过查找路由表来实现。这个路由表可以静态配置，也可以通过动态路由协议自动生成。</li><li>路由协议可分为内部网关协议（IGP）和外部网关协议（EGP）两类</li><li>网络建设工程可分为<strong>网络规划</strong>、<strong>网络设计</strong>和<strong>网络实施</strong>三个环节。</li></ul>',34),u=[p];function c(T,_,C,b,I,M){return i(),t("div",null,u)}const S=l(n,[["render",c]]);export{g as __pageData,S as default};
