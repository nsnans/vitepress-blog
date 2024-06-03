import{_ as a,c as s,o as i,a3 as t}from"./chunks/framework.CiQwDDJ9.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"web/dart/基础表达式/变量.md","filePath":"web/dart/基础表达式/变量.md"}'),e={name:"web/dart/基础表达式/变量.md"},l=t('<h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><h3 id="var" tabindex="-1">var <a class="header-anchor" href="#var" aria-label="Permalink to &quot;var&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>类型一旦确定后则不能再更改其类型</p></div><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Bob&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="object" tabindex="-1">Object <a class="header-anchor" href="#object" aria-label="Permalink to &quot;Object&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Object 是 Dart 所有对象的根基类,可以赋值任意对象</p></div><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Bob&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="dynamic" tabindex="-1">dynamic <a class="header-anchor" href="#dynamic" aria-label="Permalink to &quot;dynamic&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>dynamic和Object基本一样，不同的是dynamic声明的对象编译器会提供所有可能的组合，而Object声明的对象只能使用 Object 的属性与方法, 否则编译器会报错</p><p>需要格外注意，这很容易引入一个运行时错误,比如：字符串，没有&quot;xx&quot;属性，编译时不会报错，运行时会报错</p></div><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dynamic</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Bob&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="可空类型" tabindex="-1">可空类型 ? <a class="header-anchor" href="#可空类型" aria-label="Permalink to &quot;可空类型 ?&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>定义为可空类型，对于可空变量，在使用前必须判空</p></div><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dynamic</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name;</span></span></code></pre></div><h3 id="late" tabindex="-1">late <a class="header-anchor" href="#late" aria-label="Permalink to &quot;late&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果预期变量不能为空，但在定义时不能确定其初始值，则可以加上late关键字</p><p>表示会稍后初始化，但是在正式使用它之前必须得保证初始化过了，否则会报错</p><p>当一个 late 修饰的变量在声明时就指定了初始化方法，那么内容会在第一次使用变量时运行初始化,如果没有使用，则方法不会调用</p></div><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">late</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dynamic</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Bob&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="函数可选链" tabindex="-1">函数可选链 <a class="header-anchor" href="#函数可选链" aria-label="Permalink to &quot;函数可选链&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>fun 不为空时则会被调用</p></div><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fun</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><h3 id="const" tabindex="-1">const <a class="header-anchor" href="#const" aria-label="Permalink to &quot;const&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>编译时常量（编译时直接替换为常量值）</p></div><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name;</span></span></code></pre></div><h3 id="final" tabindex="-1">final <a class="header-anchor" href="#final" aria-label="Permalink to &quot;final&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在第一次使用时被初始化为常量值</p><p>被final或者const修饰的变量，变量类型可以省略</p><p>虽然 final 对象不能被修改，但它的字段可能可以被更改。相比之下，const 对象及其字段不能被更改：它们是 不可变的</p></div><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name;</span></span></code></pre></div>',25),n=[l];function p(h,d,c,o,k,r){return i(),s("div",null,n)}const g=a(e,[["render",p]]);export{u as __pageData,g as default};
