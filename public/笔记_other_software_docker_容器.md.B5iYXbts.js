import{_ as s,e as a,c as i,aq as e}from"./chunks/framework.CRIP8SHs.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"笔记/other/software/docker/容器.md","filePath":"笔记/other/software/docker/容器.md"}'),t={name:"笔记/other/software/docker/容器.md"},h=e(`<h2 id="容器-container" tabindex="-1">容器(container) <a class="header-anchor" href="#容器-container" aria-label="Permalink to &quot;容器(container)&quot;">​</a></h2><p>镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的 类 和 实例 一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。</p><p>简单理解就是容器是镜像的一个运行实例。当我们运行一个镜像，就创建了一个容器。</p><h3 id="查看正在运行的容器" tabindex="-1">查看正在运行的容器 <a class="header-anchor" href="#查看正在运行的容器" aria-label="Permalink to &quot;查看正在运行的容器&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ps</span></span></code></pre></div><h3 id="查看所有容器" tabindex="-1">查看所有容器 <a class="header-anchor" href="#查看所有容器" aria-label="Permalink to &quot;查看所有容器&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span></span></code></pre></div><h3 id="启动容器" tabindex="-1">启动容器 <a class="header-anchor" href="#启动容器" aria-label="Permalink to &quot;启动容器&quot;">​</a></h3><p>启动容器一般有两种情况：</p><ul><li>基于镜像新建一个容器并启动</li><li>将已有的终止状态（exited）的容器重新启动</li></ul><h4 id="新建并启动" tabindex="-1">新建并启动 <a class="header-anchor" href="#新建并启动" aria-label="Permalink to &quot;新建并启动&quot;">​</a></h4><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span></span></code></pre></div><p>如</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node</span></span></code></pre></div><p>参数说明：</p><ul><li>-i：交互式操作</li><li>-t：终端</li><li>node：node镜像</li></ul><h4 id="启动终止状态的容器" tabindex="-1">启动终止状态的容器 <a class="header-anchor" href="#启动终止状态的容器" aria-label="Permalink to &quot;启动终止状态的容器&quot;">​</a></h4><ul><li>查看所有的容器</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span></span></code></pre></div><ul><li>然后可以使用docker start启动一个停止的容器</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 7e7ff4af478f</span></span></code></pre></div><h4 id="重启容器" tabindex="-1">重启容器 <a class="header-anchor" href="#重启容器" aria-label="Permalink to &quot;重启容器&quot;">​</a></h4><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a03b0445b82d</span></span></code></pre></div><h4 id="后台运行" tabindex="-1">后台运行 <a class="header-anchor" href="#后台运行" aria-label="Permalink to &quot;后台运行&quot;">​</a></h4><p>大部分情况下，我们都希望<code>docker</code>是在后台运行的，这里可以通过<code>-d</code>指定容器的运行模式</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node:latest</span></span></code></pre></div><h4 id="停止容器" tabindex="-1">停止容器 <a class="header-anchor" href="#停止容器" aria-label="Permalink to &quot;停止容器&quot;">​</a></h4><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">容器</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3c275da2f36d</span></span></code></pre></div><h4 id="进入容器" tabindex="-1">进入容器 <a class="header-anchor" href="#进入容器" aria-label="Permalink to &quot;进入容器&quot;">​</a></h4><p>当我们使用-d参数时，容器启动会进入后台，此时想要进入容器可以通过以下指令：</p><ul><li>exec（推荐使用）</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exec</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a03b0445b82d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /bin/bash</span></span></code></pre></div><p>注意： 如果从这个容器退出，容器不会停止，这就是为什么推荐使用 docker exec 的原因。</p><ul><li>attach（不推荐使用）</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attach</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a03b0445b82d</span></span></code></pre></div><p>注意： 如果从这个容器退出，会导致容器的停止。</p><h4 id="删除容器" tabindex="-1">删除容器 <a class="header-anchor" href="#删除容器" aria-label="Permalink to &quot;删除容器&quot;">​</a></h4><p>删除容器可以使用docker rm命令</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a03b0445b82d</span></span></code></pre></div><p>如果想要删除所有终止状态的容器</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> container</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prune</span></span></code></pre></div>`,41),l=[h];function n(p,d,k,o,r,c){return i(),a("div",null,l)}const u=s(t,[["render",n]]);export{F as __pageData,u as default};
