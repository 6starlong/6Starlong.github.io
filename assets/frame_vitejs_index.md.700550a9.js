import{_ as s,b as a,c as e,h as l}from"./app.7f62d93c.js";const A='{"title":"Vite","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9759\u6001\u8D44\u6E90\u5904\u7406","slug":"static-asset-handling"},{"level":3,"title":"\u8D44\u6E90\u5F15\u5165","slug":"asset-import"},{"level":3,"title":"\u663E\u5F0F URL \u5F15\u5165","slug":"url-import"},{"level":3,"title":"\u5C06\u8D44\u6E90\u5F15\u5165\u4E3A\u5B57\u7B26\u4E32","slug":"asset-import-as-string"},{"level":3,"title":"public \u76EE\u5F55","slug":"public-directory"},{"level":3,"title":"new URL(url\uFF0Cimport.meta.url)","slug":"new-url-url\uFF0Cimport-meta-url"}],"relativePath":"frame/vitejs/index.md","lastUpdated":1653043285000}',n={},o=l(`<h1 id="vite" tabindex="-1">Vite <a class="header-anchor" href="#vite" aria-hidden="true">#</a></h1><ul><li><a href="https://cn.vitejs.dev/" target="_blank" rel="noopener noreferrer">\u6587\u6863</a></li><li><a href="https://github.com/vitejs/vite" target="_blank" rel="noopener noreferrer">Github</a></li></ul><h2 id="static-asset-handling" tabindex="-1">\u9759\u6001\u8D44\u6E90\u5904\u7406 <a class="header-anchor" href="#static-asset-handling" aria-hidden="true">#</a></h2><ul><li>\u76F8\u5173\uFF1A<a href="https://cn.vitejs.dev/guide/assets.html#static-asset-handling" target="_blank" rel="noopener noreferrer">\u6587\u6863</a></li><li>\u76F8\u5173\uFF1A<a href="https://cn.vitejs.dev/guide/build.html#public-base-path" target="_blank" rel="noopener noreferrer">\u516C\u5171\u57FA\u7840\u8DEF\u5F84</a></li></ul><h3 id="asset-import" tabindex="-1">\u8D44\u6E90\u5F15\u5165 <a class="header-anchor" href="#asset-import" aria-hidden="true">#</a></h3><p>\u9759\u6001\u8D44\u6E90\u5728\u751F\u4EA7\u6784\u5EFA\u540E\u4F1A\u88AB\u8F6C\u6362\uFF0C\u884C\u4E3A\u7C7B\u4F3C\u4E8E Webpack \u7684 <code>file-loader</code>\u3002\u4F8B\u5982\uFF0C\u5F00\u53D1\u65F6\u7684 <code>/img.png</code> \u6587\u4EF6\u5728\u751F\u4EA7\u6784\u5EFA\u540E\u4F1A\u662F <code>/assets/img.2d8efhg.png</code>\u3002</p><p>\u670D\u52A1\u65F6\u5F15\u5165\u4E00\u4E2A\u9759\u6001\u8D44\u6E90\u4F1A\u8FD4\u56DE\u89E3\u6790\u540E\u7684\u516C\u5171\u8DEF\u5F84\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> imgUrl </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./img.png</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hero-img</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> imgUrl</span></span>
<span class="line"></span></code></pre></div><ul><li><p><code>url()</code> \u5728 CSS \u4E2D\u7684\u5F15\u7528\u3001Vue SFC \u6A21\u677F\u4E2D\u7684\u8D44\u6E90\u5F15\u7528\u90FD\u5C06\u81EA\u52A8\u8F6C\u6362\u4E3A\u5BFC\u5165\u3002</p></li><li><p>\u5E38\u89C1\u7684\u56FE\u50CF\u3001\u5A92\u4F53\u548C\u5B57\u4F53\u6587\u4EF6\u7C7B\u578B\u88AB\u81EA\u52A8\u68C0\u6D4B\u4E3A\u8D44\u6E90\u3002\u53EF\u4EE5\u4F7F\u7528 <code>assetsInclude</code> <a href="https://cn.vitejs.dev/config/#assetsinclude" target="_blank" rel="noopener noreferrer">\u914D\u7F6E\u9879</a>\u6269\u5C55\u5185\u90E8\u5217\u8868\u3002</p></li><li><p>\u8F83\u5C0F\u7684\u8D44\u6E90\u4F53\u79EF\u5C0F\u4E8E assetsInlineLimit <a href="https://cn.vitejs.dev/config/#build-assetsinlinelimit" target="_blank" rel="noopener noreferrer">\u9009\u9879\u503C</a>\u5219\u4F1A\u88AB\u5185\u8054\u4E3A base64 data URL\u3002</p></li></ul><h3 id="url-import" tabindex="-1">\u663E\u5F0F URL \u5F15\u5165 <a class="header-anchor" href="#url-import" aria-hidden="true">#</a></h3><p>\u672A\u88AB\u5305\u542B\u5728\u5185\u90E8\u5217\u8868\u6216 <code>assetsInclude</code> \u4E2D\u7684\u8D44\u6E90\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>?url</code> \u540E\u7F00\u663E\u5F0F\u5BFC\u5165\u4E3A\u4E00\u4E2A URL\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> workletURL </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">extra-scalloped-border/worklet.js?url</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">CSS</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">paintWorklet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addModule</span><span style="color:#A6ACCD;">(workletURL)</span></span>
<span class="line"></span></code></pre></div><h3 id="asset-import-as-string" tabindex="-1">\u5C06\u8D44\u6E90\u5F15\u5165\u4E3A\u5B57\u7B26\u4E32 <a class="header-anchor" href="#asset-import-as-string" aria-hidden="true">#</a></h3><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> shaderString </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./shader.glsl?raw</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h3 id="public-directory" tabindex="-1">public \u76EE\u5F55 <a class="header-anchor" href="#public-directory" aria-hidden="true">#</a></h3><p>\u4E00\u4E9B\u4E0D\u9700\u8981\u88AB\u6E90\u7801\u5F15\u7528\u3001\u5FC5\u987B\u4FDD\u6301\u539F\u6587\u4EF6\u540D\uFF0C\u6216\u8005\u53EA\u60F3\u5F97\u5230\u5176 URL \u7684\u6587\u4EF6\uFF0C\u53EF\u4EE5\u653E\u5230 <code>public</code> \u76EE\u5F55\u4E2D\u3002</p><p>\u8BE5\u76EE\u5F55\u4E2D\u7684\u8D44\u6E90\u5728\u5F00\u53D1\u65F6\u80FD\u76F4\u63A5\u901A\u8FC7 <code>/</code> \u6839\u8DEF\u5F84\u8BBF\u95EE\u5230\uFF0C\u5E76\u4E14\u6253\u5305\u65F6\u4F1A\u88AB\u5B8C\u6574\u590D\u5236\u5230\u76EE\u6807\u76EE\u5F55\u7684\u6839\u76EE\u5F55\u4E0B\u3002<code>public/icon.png</code> \u5E94\u8BE5\u5728\u6E90\u7801\u4E2D\u88AB\u5F15\u7528\u4E3A <code>/icon.png</code></p><p>\u76EE\u5F55\u9ED8\u8BA4\u662F <code>&lt;root&gt;/public</code>\uFF0C\u4F46\u53EF\u4EE5\u901A\u8FC7 publicDir <a href="https://cn.vitejs.dev/config/#publicdir" target="_blank" rel="noopener noreferrer">\u9009\u9879</a>\u6765\u914D\u7F6E\u3002</p><h3 id="new-url-url\uFF0Cimport-meta-url" tabindex="-1">new URL(url\uFF0Cimport.<wbr>meta.url) <a class="header-anchor" href="#new-url-url\uFF0Cimport-meta-url" aria-hidden="true">#</a></h3><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import%2Emeta" target="_blank" rel="noopener noreferrer">import.<wbr>meta.url</a> \u662F\u4E00\u4E2A ESM \u7684\u539F\u751F\u529F\u80FD\uFF0C\u4F1A\u66B4\u9732\u5F53\u524D\u6A21\u5757\u7684 URL\u3002 \u5728\u4E00\u4E2A JavaScript \u6A21\u5757\u4E2D\uFF0C\u901A\u8FC7\u76F8\u5BF9\u8DEF\u5F84\u6211\u4EEC\u5C31\u80FD\u5F97\u5230\u4E00\u4E2A\u88AB\u5B8C\u6574\u89E3\u6790\u7684\u9759\u6001\u8D44\u6E90 URL\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> imgUrl </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">URL</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./img.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">meta</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hero-img</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">src </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> imgUrl</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u4E2A\u6A21\u5F0F\u53EF\u4EE5\u901A\u8FC7\u5B57\u7B26\u4E32\u6A21\u677F\u652F\u6301\u52A8\u6001 URL\uFF0C\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u53EF\u4EE5\u5C01\u88C5\u6210\u4E00\u4E2A\u5DE5\u5177\u51FD\u6570\uFF0C\u4FBF\u4E8E\u5728\u5176\u4ED6\u5730\u65B9\u8C03\u7528\uFF1A</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getAssetsUrl</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">URL</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">./assets/</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">meta</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">href</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,23),p=[o];function t(r,c,i,D,d,y){return a(),e("div",null,p)}var C=s(n,[["render",t]]);export{A as __pageData,C as default};