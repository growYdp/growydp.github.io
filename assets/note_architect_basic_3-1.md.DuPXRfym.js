import{_ as i,c as l,o as a,a4 as t,ao as e}from"./chunks/framework.DgfrLidp.js";const f=JSON.parse('{"title":"3-1 概述","description":"","frontmatter":{},"headers":[],"relativePath":"note/architect/basic/3-1.md","filePath":"note/architect/basic/3-1.md","lastUpdated":1722525548000}'),o={name:"note/architect/basic/3-1.md"},r=t('<h1 id="_3-1-概述" tabindex="-1">3-1 概述 <a class="header-anchor" href="#_3-1-概述" aria-label="Permalink to &quot;3-1 概述&quot;">​</a></h1><h2 id="数据库系统" tabindex="-1">数据库系统 <a class="header-anchor" href="#数据库系统" aria-label="Permalink to &quot;数据库系统&quot;">​</a></h2><ul><li>数据：是数据库存储的基本对象，是描述事物的符号记录。</li><li>数据的种类：文本、图形、图像、音频、视频</li><li>数据库DB：是长期存储在计算机内，有组织的，可共享的大量数据的集合</li><li>数据库的基本特征： <ul><li>数据按一定的数据模型组织，描述和存储</li><li>可为各种用户共享</li><li>冗余度较小</li><li>数据独立性较高</li><li>易扩展</li></ul></li><li>数据库系统DBS：是一个才用了数据库技术、有组织的、动态的存储大量相关数据，方便多用户访问的计算机系统。由下面四个部分组成： <ul><li>数据库（统一管理，长期存储在计算机内的，有组织的相关数据的集合）</li><li>硬件（构成计算机系统包括存储数据所需的外部设备）</li><li>软件（操作系统，数据库管理系统以及应用程序）</li><li>人员（系统分析和数据库设计人员，应用程序员，最终用户，数据库管理员DBA）</li></ul></li><li>数据库管理系统DBMS的功能 <ul><li>实现对共享数据有效的组织，管理和存取</li><li>包括数据定义。数据库操作。数据库运行管理，数据的存储管理，数据库的建立和维护等</li></ul></li></ul><h2 id="三级模式-两级映像" tabindex="-1">三级模式 两级映像 <a class="header-anchor" href="#三级模式-两级映像" aria-label="Permalink to &quot;三级模式 两级映像&quot;">​</a></h2><p><img src="'+e+'" alt=""></p><ul><li>内模式：管理如何存储物理数据，对应具体物理存储文件</li><li>模式：又称为概念模式，就是我们通常使用的基本表，根据应用、需求将物理数据划分成一张张表</li><li>外模式：对应数据库中的视图这个级别，将表进行一定的处理后再提供给用户使用</li><li></li></ul>',6),c=[r];function s(_,n,d,h,u,p){return a(),l("div",null,c)}const b=i(o,[["render",s]]);export{f as __pageData,b as default};
