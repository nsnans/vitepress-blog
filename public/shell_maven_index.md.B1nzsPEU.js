import{_ as i,D as o,c as r,I as t,w as l,aq as s,j as e,a as n,o as c}from"./chunks/framework.CiO4BLJC.js";const D=JSON.parse('{"title":"maven","description":"","frontmatter":{"sidebar":false},"headers":[],"relativePath":"shell/maven/index.md","filePath":"shell/maven/index.md"}'),d={name:"shell/maven/index.md"},_=s('<h1 id="maven" tabindex="-1">maven <a class="header-anchor" href="#maven" aria-label="Permalink to &quot;maven&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">参考</p><ul><li><a href="https://blog.csdn.net/qq_51447496/article/details/128046043" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_51447496/article/details/128046043</a></li><li><a href="https://blog.csdn.net/baomingshu/article/details/131456179?spm=1001.2101.3001.6650.5&amp;utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-5-131456179-blog-120388222.235%5Ev43%5Epc_blog_bottom_relevance_base9&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-5-131456179-blog-120388222.235%5Ev43%5Epc_blog_bottom_relevance_base9&amp;utm_relevant_index=8" target="_blank" rel="noreferrer">https://blog.csdn.net/baomingshu/article/details/131456179?spm=1001.2101.3001.6650.5&amp;utm_medium=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-5-131456179-blog-120388222.235^v43^pc_blog_bottom_relevance_base9&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-5-131456179-blog-120388222.235^v43^pc_blog_bottom_relevance_base9&amp;utm_relevant_index=8</a></li></ul></div><h3 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-label="Permalink to &quot;下载&quot;">​</a></h3><p><a href="https://maven.apache.org/download.cgi" target="_blank" rel="noreferrer">https://maven.apache.org/download.cgi</a></p>',5),h=e("p",null,[e("img",{src:"https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011345522.png",alt:"alt text"})],-1),p=s('<h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h3><ul><li>新建一个系统变量: <code>变量名为MAVEN_HOME, 变量值为 D:\\maven\\apache-maven-3.6.3，点击确定</code></li><li>在 Path 中进行配置 新建一个，内容为<code>%MAVEN_HOME%\\bin</code></li></ul><h3 id="验证" tabindex="-1">验证 <a class="header-anchor" href="#验证" aria-label="Permalink to &quot;验证&quot;">​</a></h3><p><code>mvn -v</code></p><h3 id="配置本地仓库" tabindex="-1">配置本地仓库 <a class="header-anchor" href="#配置本地仓库" aria-label="Permalink to &quot;配置本地仓库&quot;">​</a></h3><p>配置本地仓库</p><p>修改 conf/settings.xml 中的 为一个指定目录作为本地仓库，用来存储jar包。</p>',7),m=e("p",null,[e("img",{src:"https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011346339.png",alt:"alt text"})],-1),u=e("h2",{id:"配置idea",tabindex:"-1"},[n("配置idea "),e("a",{class:"header-anchor",href:"#配置idea","aria-label":'Permalink to "配置idea"'},"​")],-1),b=e("p",null,[e("img",{src:"https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011346159.png",alt:"alt text"})],-1),g=e("h3",{id:"导入maven项目",tabindex:"-1"},[n("导入Maven项目 "),e("a",{class:"header-anchor",href:"#导入maven项目","aria-label":'Permalink to "导入Maven项目"'},"​")],-1),v=e("p",null,[e("img",{src:"https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011346210.png",alt:"alt text"})],-1),f=e("p",null,[e("img",{src:"https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011346620.png",alt:"alt text"})],-1),x=e("h3",{id:"配置-maven-helper-插件",tabindex:"-1"},[n("配置 Maven-Helper 插件 "),e("a",{class:"header-anchor",href:"#配置-maven-helper-插件","aria-label":'Permalink to "配置 Maven-Helper 插件"'},"​")],-1),k=e("p",null,"右键",-1),T=e("p",null,[e("img",{src:"https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011346927.png",alt:"alt text"})],-1),q=s(`<h2 id="包" tabindex="-1">包 <a class="header-anchor" href="#包" aria-label="Permalink to &quot;包&quot;">​</a></h2><ul><li>groupId：定义当前Maven项目隶属组织名称（通常是域名反写，例如：com.itheima）</li><li>artifactId：定义当前Maven项目名称（通常是模块名称，例如 order-service、goods-service）</li><li>version：定义当前项目版本号</li></ul><p>表示一个项目</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;groupId&gt;com.study&lt;/groupId&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;artifactId&gt;maven-demo&lt;/artifactId&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;</span></span></code></pre></div><h3 id="步骤" tabindex="-1">步骤 <a class="header-anchor" href="#步骤" aria-label="Permalink to &quot;步骤&quot;">​</a></h3><ul><li>在项目的 pom.xml 中编写 标签</li><li>在 标签中 使用 引入坐标</li><li>定义坐标的 groupId，artifactId，version</li></ul>`,6),P=e("p",null,[e("img",{src:"https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011347459.png",alt:"alt text"})],-1),E=e("h3",{id:"快捷方式导入jar包",tabindex:"-1"},[n("快捷方式导入jar包 "),e("a",{class:"header-anchor",href:"#快捷方式导入jar包","aria-label":'Permalink to "快捷方式导入jar包"'},"​")],-1),I=e("ul",null,[e("li",null,"在 pom.xml 中 按 alt + insert，选择 Dependency")],-1),S=e("h3",{id:"自动导入设置",tabindex:"-1"},[n("自动导入设置 "),e("a",{class:"header-anchor",href:"#自动导入设置","aria-label":'Permalink to "自动导入设置"'},"​")],-1),C=e("p",null,[e("img",{src:"https://raw.githubusercontent.com/nsnans/picGo-bed/main/vitepress_1x/202407011347156.png",alt:"alt text"})],-1),A=s('<h3 id="maven依赖范围" tabindex="-1">Maven依赖范围 <a class="header-anchor" href="#maven依赖范围" aria-label="Permalink to &quot;Maven依赖范围&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">参考</p><ul><li><a href="https://blog.csdn.net/qq_51447496/article/details/128059639" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_51447496/article/details/128059639</a></li></ul></div><h3 id="maven打包" tabindex="-1">Maven打包 <a class="header-anchor" href="#maven打包" aria-label="Permalink to &quot;Maven打包&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">参考</p><p><a href="https://blog.csdn.net/qq_51447496/article/details/128059668" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_51447496/article/details/128059668</a></p></div>',4);function M(V,w,N,R,y,F){const a=o("Bimg");return c(),r("div",null,[_,t(a,null,{default:l(()=>[h]),_:1}),p,t(a,null,{default:l(()=>[m]),_:1}),u,t(a,null,{default:l(()=>[b]),_:1}),g,t(a,null,{default:l(()=>[v]),_:1}),t(a,null,{default:l(()=>[f]),_:1}),x,k,t(a,null,{default:l(()=>[T]),_:1}),q,t(a,null,{default:l(()=>[P]),_:1}),E,I,S,t(a,null,{default:l(()=>[C]),_:1}),A])}const G=i(d,[["render",M]]);export{D as __pageData,G as default};