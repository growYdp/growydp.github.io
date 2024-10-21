import{_ as t,c as l,o as a,a4 as o,bv as r,bw as i,bx as n,by as s}from"./chunks/framework.C8kugyzg.js";const f=JSON.parse('{"title":"信息安全基础-技术体系-加密技术","description":"","frontmatter":{},"headers":[],"relativePath":"note/architect/basic/9/9-1.md","filePath":"note/architect/basic/9/9-1.md","lastUpdated":null}'),e={name:"note/architect/basic/9/9-1.md"},g=o('<h1 id="信息安全基础-技术体系-加密技术" tabindex="-1">信息安全基础-技术体系-加密技术 <a class="header-anchor" href="#信息安全基础-技术体系-加密技术" aria-label="Permalink to &quot;信息安全基础-技术体系-加密技术&quot;">​</a></h1><h2 id="信息安全基础知识" tabindex="-1">信息安全基础知识 <a class="header-anchor" href="#信息安全基础知识" aria-label="Permalink to &quot;信息安全基础知识&quot;">​</a></h2><h3 id="基本要素" tabindex="-1">基本要素 <a class="header-anchor" href="#基本要素" aria-label="Permalink to &quot;基本要素&quot;">​</a></h3><p>5个基本要素：<strong>机密性、完整性、可用性、可控性与可审查性</strong></p><ul><li>机密性：确保信息<strong>不暴露给未授权的</strong>实体或进程</li><li>完整性：只有得到允许的人才能修改数据，并且能够<strong>判别出数据是否已被篡改</strong>。</li><li>可用性：得到授权的实体<strong>在需要时可访问数据</strong>，即攻击者不能占用所有的资源而阻碍授权者的工作</li><li>可控性：可以<strong>控制授权范围内的信息流向及行为方式</strong></li><li>可审查性：对出现的<strong>信息安全问题提供调查的依据和手段</strong>。</li></ul><h3 id="范围" tabindex="-1">范围 <a class="header-anchor" href="#范围" aria-label="Permalink to &quot;范围&quot;">​</a></h3><p>信息安全的范围：设备安全、数据安全、内容安全和行为安全</p><ol><li>信息系统设备的安全是信息系统安全的<strong>首要问题</strong>，是信息系统安全的物质基础，有3个方面：设备的稳定性、可靠性、可用性</li><li>数据安全即采取措施确保<strong>数据免受未授权的泄露、篡改和毁坏</strong>，包括3个方面：数据的秘密性、完整性、可用性</li><li>内容安全是信息安全在<strong>政治、法律、道德层次上的要求</strong>，包括3个方面：信息内容政治上的健康、符合国家法律法规、符合道德规范</li><li>信息系统的服务功能是指<strong>最终通过行为提供给用户，确保信息系统的行为安全</strong>，才能最终确保系统的信息安全。行为安全的特性包括：行为的秘密性、完整性、可控性。</li></ol><h3 id="存储安全" tabindex="-1">存储安全 <a class="header-anchor" href="#存储安全" aria-label="Permalink to &quot;存储安全&quot;">​</a></h3><p>信息的存储安全包括：<strong>信息使用的安全、系统安全监控、计算机病毒防治、数据的加密和防治非法的攻击</strong>等。</p><ol><li>信息使用的安全，包括用户的标识与验证、用户存取权限限制。</li><li>系统安全监控：系统必须建立一套安全监控系统，全面监控系统的活动，并随时检查系统的使用情况，一旦有非法入侵者进入系统，能及时出现并采取相应措施，确定和填补安全及保密的漏洞，还应当建立完善的审计系统和日志管理系统，利用日志和审计功能对系统进行安全监控。</li><li>计算机网络服务器必须加装网络病毒自动监测系统，以保护网络系统的安全，防范计算机病毒的侵袭，并且必须定期更新网络病毒检测系统。</li></ol><h3 id="网络安全" tabindex="-1">网络安全 <a class="header-anchor" href="#网络安全" aria-label="Permalink to &quot;网络安全&quot;">​</a></h3><ul><li><strong>网络安全隐患</strong>体现在：物理安全性、软件安全漏洞、不兼容使用安全漏洞、选择合适的安全管理</li><li><strong>网络安全威胁</strong>：非授权的访问、信息泄露或丢失、破坏数据完整性、拒绝服务攻击、利于网络传播病毒</li><li><strong>安全措施的目标</strong>：访问控制、认证、完整性、审计、保密。</li></ul><h2 id="信息安全系统的组成框架" tabindex="-1">信息安全系统的组成框架 <a class="header-anchor" href="#信息安全系统的组成框架" aria-label="Permalink to &quot;信息安全系统的组成框架&quot;">​</a></h2><h3 id="技术体系" tabindex="-1">技术体系 <a class="header-anchor" href="#技术体系" aria-label="Permalink to &quot;技术体系&quot;">​</a></h3><ol><li><strong>基础安全设备</strong>包括<strong>密码芯片、加密卡、身份识别卡</strong>等，此外还涵盖运用到<strong>物理安全</strong>的物理环境保障技术。</li><li><strong>计算机网络安全指信息在网络传输过程中的安全防范</strong></li><li><strong>操作系统安全是指操作系统的无错误配置、无漏洞、无后门、无特洛伊木马等</strong></li><li><strong>数据库安全可粗略划分为数据库管理系统安全和数据库应用系统安全两个部分</strong></li><li><strong>终端安全设备</strong>从电信网终端设备的角度分为<strong>电话密码机、传真密码机、异步数据密码机等</strong>。</li></ol><h3 id="考试真题" tabindex="-1">考试真题 <a class="header-anchor" href="#考试真题" aria-label="Permalink to &quot;考试真题&quot;">​</a></h3><p><img src="'+r+'" alt=""></p><p>答案：D D</p><p><img src="'+i+'" alt=""></p><p>分析：数据迁移跟安全无关，新老替换和迁移有关</p><p>答案：B C</p><h2 id="信息安全技术" tabindex="-1">信息安全技术 <a class="header-anchor" href="#信息安全技术" aria-label="Permalink to &quot;信息安全技术&quot;">​</a></h2><p><img src="'+n+'" alt=""></p><h3 id="加密技术" tabindex="-1">加密技术 <a class="header-anchor" href="#加密技术" aria-label="Permalink to &quot;加密技术&quot;">​</a></h3><p>一个密码系统，通常简称为密码体制（Cryptosystem），五部分组成：</p><ol><li>明文空间M 全体明文的集合</li><li>密文空间C 全体密文的集合</li><li>秘钥空间K 每一个密钥K均由加密密钥Ke和解密密钥Kd组成，即<code>K = &lt;Ke, Kd&gt;</code></li><li>加密算法E 是一组由M至C的加密变换</li><li>解密算法D 是一组由C到M的解密变换</li></ol><ul><li>对于明文空间M中的每一个明文M，加密算法E在密钥Ke的控制下<strong>将明文M加密成密文C：<code>C = E(M, Ke)</code></strong></li><li>而解密算法D在密钥Kd的控制下<strong>将密文C解密出同一明文M：<code>M = D(C, Kd) = D(E(M, Ke), Kd)</code></strong></li></ul><h3 id="对称加密技术" tabindex="-1">对称加密技术 <a class="header-anchor" href="#对称加密技术" aria-label="Permalink to &quot;对称加密技术&quot;">​</a></h3><p><strong>数据的加密和解密的密钥（密码）是相同的，属于不公开密钥加密算法。其缺点是加密强度不高（因为密钥位数少）</strong>。<strong>密钥分发困难</strong>（因为密钥要需要传输给接收方，也要考虑保密性等问题）、<strong>优点是加密速度快，适用于加密大数据</strong></p><blockquote><p>常见的对称加密算法</p></blockquote><ul><li>DES（Data Encryption Standard）：替换+移位 56位密钥、64位数据块、速度快，密钥易产生</li><li>3DES：三重DES 两个56位密钥K1 K2 <ul><li>加密：K1加密-&gt;K2解密-&gt;K1加密</li><li>解密：K1解密-&gt;K2加密-&gt;K1解密</li></ul></li><li>AES：是美国联邦政府采用的一种区块加密标准，这个标准用来替代原先的DES。对其的要求是：至少像3DES一样安全</li><li>RC-5：RSA数据安全公司的很多产品都使用了RC-5</li><li>IDEA：128位密钥，64位数据块，比DES的加密性好，对计算机功能要求相对低。</li></ul><h3 id="非对称加密技术" tabindex="-1">非对称加密技术 <a class="header-anchor" href="#非对称加密技术" aria-label="Permalink to &quot;非对称加密技术&quot;">​</a></h3><p><strong>数据的加密和解密的密钥是不同的</strong>，分为公钥和私钥。<strong>是公开密钥的加密算法。其缺点是加密速度慢。有点事安全性高，不容易破解</strong>（每个个体的公钥和私钥都是可以加解密的，私钥只有自己知道，公钥是公开的）</p><ul><li>非对称技术的原理：发送者<strong>发送数据时</strong>，使用<strong>接收者的公钥作加密密钥，私钥作为解密密钥</strong>，这样只有接收者才能解密密文得到明文。安全性更高，因为无须传输密钥，<strong>但无法保证完整性</strong></li></ul><p><img src="'+s+'" alt=""></p><ul><li>常见的非对称加密算法： <ul><li>RSA：512位（或1024位）密钥，计算量极大，难破解</li><li>Elgamal、ECC（椭圆曲线算法）、背包算法、Rabin、D-H等</li></ul></li></ul><h3 id="对称加密和非对称加密的对比" tabindex="-1">对称加密和非对称加密的对比 <a class="header-anchor" href="#对称加密和非对称加密的对比" aria-label="Permalink to &quot;对称加密和非对称加密的对比&quot;">​</a></h3><ul><li>相比较可知 <ul><li>对称加密算法的密钥一般只有56位，因此<strong>加密过程简单，适合加密大数据，加密强度不高</strong></li><li>非对称加密算法的密钥有1024位，<strong>相应的解密计算量庞大，难以破解，不适合加密大数据</strong>，一般用来加密对称算法的密钥</li><li>通过这种方法，<strong>就可以将两种加密方式结合使用，这也是数字信封的原理</strong>。</li></ul></li></ul>',39),h=[g];function d(c,u,p,b,_,m){return a(),l("div",null,h)}const K=t(e,[["render",d]]);export{f as __pageData,K as default};
