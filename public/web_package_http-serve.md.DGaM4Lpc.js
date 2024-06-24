import{_ as t,c as e,o as a,a4 as s}from"./chunks/framework.B2INk3zo.js";const u=JSON.parse('{"title":"http-serve","description":"","frontmatter":{},"headers":[],"relativePath":"web/package/http-serve.md","filePath":"web/package/http-serve.md"}'),r={name:"web/package/http-serve.md"},d=s(`<h1 id="http-serve" tabindex="-1">http-serve <a class="header-anchor" href="#http-serve" aria-label="Permalink to &quot;http-serve&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p><a href="https://www.npmjs.com/package/http-server" target="_blank" rel="noreferrer">https://www.npmjs.com/package/http-server</a></p><h2 id="启动" tabindex="-1">启动 <a class="header-anchor" href="#启动" aria-label="Permalink to &quot;启动&quot;">​</a></h2><blockquote><p>命令行中进入目标文件夹（也就是需要启动服务的文件夹），输入如下命令：</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http-server</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  #或者 简写  hs</span></span></code></pre></div><blockquote><p>本地服务器就启动起来了，默认端口为8080。</p></blockquote><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><h6 id="修改端口" tabindex="-1">修改端口 <a class="header-anchor" href="#修改端口" aria-label="Permalink to &quot;修改端口&quot;">​</a></h6><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http-server</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 127.0.0.1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8090</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http-server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [path] [options]</span></span></code></pre></div><blockquote><p>****是目录地址，可以省略，默认是cmd打开的路径地址 -a 参数是监听地址 -p 参数是监听端口</p></blockquote><table tabindex="0"><thead><tr><th>参数</th><th>作用</th></tr></thead><tbody><tr><td>-p 或者 --port</td><td>端口设置，默认是 8080</td></tr><tr><td>-a</td><td>监听地址设置默认是 0.0.0.0</td></tr><tr><td>-d</td><td>是否显示文件列表 默认true</td></tr><tr><td>-i</td><td>显示自动索引 默认true</td></tr><tr><td>-g 或者 --gzip</td><td>默认false，当文件的gzip版本存在且请求接受gzip编码时，它将服务于./public/some-file.js.gz，而不是./public/some-file.js</td></tr><tr><td>-e 或者 --ext</td><td>如果没有提供默认文件扩展名(默认为html)</td></tr><tr><td>-s或者 --silent</td><td>禁止控制台日志信息输出</td></tr><tr><td>–cors</td><td>允许跨域资源共享</td></tr><tr><td>-o</td><td>启动服务后打开默认浏览器</td></tr><tr><td>-c</td><td>设置缓存cache-control max-age heade存留时间（以秒为单位），示例：-c10是10秒，默认是3600秒，如果要禁用缓存就使用-c-1</td></tr><tr><td>-U 或者 --utc</td><td>使用 UTC格式，在控制台输出时间信息</td></tr><tr><td>-P 或者 --proxy</td><td>通过一个 url地址，代理不能通过本地解析的资源</td></tr><tr><td>-S 或者 --ssl</td><td>使用https协议</td></tr><tr><td>-C 或者 --cert</td><td>ssl证书文件的路径，默认是cert.pem</td></tr><tr><td>-K 或者 --key</td><td>ssl密匙文件路径</td></tr><tr><td>-h 或者 --help</td><td>显示帮助</td></tr></tbody></table><p>如：<code>http-server --cors -o</code></p><div class="tip custom-block"><p class="custom-block-title">参考</p><ul><li><a href="https://blog.csdn.net/weixin_53791978/article/details/131715913" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_53791978/article/details/131715913</a></li></ul></div>`,14),i=[d];function h(l,p,o,n,c,k){return a(),e("div",null,i)}const g=t(r,[["render",h]]);export{u as __pageData,g as default};
