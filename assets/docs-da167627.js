import{o as a,c as t,a as p}from"./chunks-758e958d.js";const u={class:"markdown-body"},k=p(`<h1>权限策略</h1><ul><li>后端接口返回菜单权限</li><li>前端配置页面是否需要按钮权限</li><li>进入页面前调用后端接口返回按钮权限并缓存</li><li>离开页面前清除已缓存的按钮权限</li></ul><h2>路由配置</h2><ul><li>auth 权限key</li></ul><pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token string">&#39;pageList&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><h2>路由鉴权</h2><ul><li>后端接口返回按钮权限保存在store中</li></ul><p>main.ts</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> useAuthStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/stores/auth&#39;</span>

<span class="token comment">// 接口返回权限</span>
<span class="token keyword">const</span> <span class="token function-variable function">getAuth</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> auth <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> auth <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span>

router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> setAuth<span class="token punctuation">,</span> removeAuth <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useAuthStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>auth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> rulePath <span class="token operator">=</span> to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>auth
    <span class="token keyword">const</span> authList <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getAuth</span><span class="token punctuation">(</span>rulePath<span class="token punctuation">)</span>
    <span class="token function">setAuth</span><span class="token punctuation">(</span>rulePath<span class="token punctuation">,</span> authList<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>from<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>auth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">removeAuth</span><span class="token punctuation">(</span>from<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>auth<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><p>auth.ts</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">Auth</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// 权限验证方法集合</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> useAuthStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;auth&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 权限集合</span>
  <span class="token keyword">const</span> authModel <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span>Auth<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 新增权限</span>
  <span class="token keyword">function</span> <span class="token function">setAuth</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> authList<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    authModel<span class="token punctuation">.</span>value<span class="token punctuation">[</span>path<span class="token punctuation">]</span> <span class="token operator">=</span> authList
  <span class="token punctuation">}</span>

  <span class="token comment">// 删除权限</span>
  <span class="token keyword">function</span> <span class="token function">removeAuth</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">delete</span> authModel<span class="token punctuation">.</span>value<span class="token punctuation">[</span>path<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 验证是否有权限</span>
  <span class="token keyword">function</span> <span class="token function">checkAuth</span><span class="token punctuation">(</span>path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>path <span class="token operator">&amp;&amp;</span> authModel<span class="token punctuation">.</span>value<span class="token punctuation">[</span>path<span class="token punctuation">]</span><span class="token operator">?.</span><span class="token function">includes</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> authModel<span class="token punctuation">,</span> setAuth<span class="token punctuation">,</span> removeAuth<span class="token punctuation">,</span> checkAuth <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><h2>鉴权组件</h2><p>auth.vue</p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showModel<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onBeforeMount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useAuthStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/stores/auth&#39;</span>

<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> checkAuth <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useAuthStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> showModel <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// 是否显示模块</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> string
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">onBeforeMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> rulePath <span class="token operator">=</span> route<span class="token punctuation">.</span>meta<span class="token operator">?.</span>auth <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>
  showModel<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">Boolean</span><span class="token punctuation">(</span>rulePath<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">checkAuth</span><span class="token punctuation">(</span>rulePath<span class="token punctuation">,</span> props<span class="token punctuation">.</span>type<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3>页面使用示例</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>auth</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>add<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleAdd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>新增<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>auth</span><span class="token punctuation">&gt;</span></span>
</code></pre><h2>在table组件使用</h2><p>操作列中通过配置<code>auth</code>实现鉴权</p><p>部分代码示例</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> useAuthStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/stores/auth&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> checkAuth <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useAuthStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> header<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    prop<span class="token operator">:</span> <span class="token string">&#39;action&#39;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&#39;操作&#39;</span><span class="token punctuation">,</span>
    width<span class="token operator">:</span> <span class="token string">&#39;90&#39;</span><span class="token punctuation">,</span>
    options<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">&#39;删除&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span>row<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">handleDelete</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">,</span>
        auth<span class="token operator">:</span> <span class="token function">checkAuth</span><span class="token punctuation">(</span><span class="token string">&#39;singleList&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;del&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre>`,20),r=[k],i={__name:"auth",setup(s,{expose:n}){return n({frontmatter:{}}),(e,c)=>(a(),t("div",u,r))}},d={class:"markdown-body"},g=p(`<h1>文档生成</h1><p>直接展示md文件</p><h2>安装和配置</h2><ul><li>vite-plugin-vue-markdown 处理md文件</li><li>markdown-it-prism 标记md中代码类型</li><li>github-markdown-css 高亮样式</li></ul><pre class="language-bash"><code class="language-bash"><span class="token function">yarn</span> <span class="token function">add</span> vite-plugin-vue-markdown markdown-it-prism github-markdown-css <span class="token parameter variable">-D</span>
</code></pre><p>vite.config.ts</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>

<span class="token keyword">import</span> Markdown <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-vue-markdown&#39;</span>
<span class="token keyword">import</span> prism <span class="token keyword">from</span> <span class="token string">&#39;markdown-it-prism&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.md$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Markdown</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// default options passed to markdown-it</span>
      <span class="token comment">// see: https://markdown-it.github.io/markdown-it/</span>
      markdownItOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
        html<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        linkify<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        typographer<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      markdownItUses<span class="token operator">:</span> <span class="token punctuation">[</span>prism<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h2>自动读取md文件</h2><p>docs为md文件目录，新建<code>index.ts</code></p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">Model</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> Component
<span class="token punctuation">}</span>

<span class="token comment">/**
 * 获取所有文档
 * @see https://cn.vitejs.dev/guide/features.html#glob-import-as
 */</span>
<span class="token keyword">const</span> files<span class="token operator">:</span> Model <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">&#39;./*.md&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> eager<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> moduleList<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> modules<span class="token operator">:</span> Model <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> moduleName <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\.\\/(.*)\\.\\w+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;$1&#39;</span><span class="token punctuation">)</span>
  moduleList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>moduleName<span class="token punctuation">)</span>
  modules<span class="token punctuation">[</span>moduleName<span class="token punctuation">]</span> <span class="token operator">=</span> files<span class="token punctuation">[</span>path<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><p>页面调用</p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tabs</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentTab<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tab-pane</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i in moduleList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>i<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tab-pane</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tabs</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modules[currentTab]<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;github-markdown-css&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> modules<span class="token punctuation">,</span> moduleList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/docs/index&#39;</span>

<span class="token keyword">const</span> currentTab <span class="token operator">=</span> ref<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">(</span>moduleList<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre>`,12),m=[g],h={__name:"docs",setup(s,{expose:n}){return n({frontmatter:{}}),(e,c)=>(a(),t("div",d,m))}},y={class:"markdown-body"},b=p(`<h1>Echart</h1><h2>安装</h2><pre class="language-bash"><code class="language-bash"><span class="token function">yarn</span> <span class="token function">add</span> echarts
</code></pre><h2>引入</h2><p>根据官方文档按需引入，并增加模块导出</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">&#39;echarts/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BarChart<span class="token punctuation">,</span> LineChart<span class="token punctuation">,</span> PieChart <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts/charts&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  TitleComponent<span class="token punctuation">,</span>
  TooltipComponent<span class="token punctuation">,</span>
  GridComponent<span class="token punctuation">,</span>
  <span class="token comment">// 数据集组件</span>
  DatasetComponent<span class="token punctuation">,</span>
  <span class="token comment">// 内置数据转换器组件 (filter, sort)</span>
  TransformComponent<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts/components&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LabelLayout<span class="token punctuation">,</span> UniversalTransition <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts/features&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CanvasRenderer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts/renderers&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span>
  <span class="token comment">// 系列类型的定义后缀都为 SeriesOption</span>
  BarSeriesOption<span class="token punctuation">,</span>
  LineSeriesOption<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts/charts&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span>
  <span class="token comment">// 组件类型的定义后缀都为 ComponentOption</span>
  TitleComponentOption<span class="token punctuation">,</span>
  TooltipComponentOption<span class="token punctuation">,</span>
  GridComponentOption<span class="token punctuation">,</span>
  DatasetComponentOption<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts/components&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> ComposeOption <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts/core&#39;</span>

<span class="token comment">// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">ECOption</span> <span class="token operator">=</span> ComposeOption<span class="token operator">&lt;</span>
  <span class="token operator">|</span> BarSeriesOption
  <span class="token operator">|</span> LineSeriesOption
  <span class="token operator">|</span> TitleComponentOption
  <span class="token operator">|</span> TooltipComponentOption
  <span class="token operator">|</span> GridComponentOption
  <span class="token operator">|</span> DatasetComponentOption
<span class="token operator">&gt;</span>

<span class="token comment">// 注册必须的组件</span>
echarts<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  TitleComponent<span class="token punctuation">,</span>
  TooltipComponent<span class="token punctuation">,</span>
  GridComponent<span class="token punctuation">,</span>
  DatasetComponent<span class="token punctuation">,</span>
  TransformComponent<span class="token punctuation">,</span>
  BarChart<span class="token punctuation">,</span>
  LineChart<span class="token punctuation">,</span>
  PieChart<span class="token punctuation">,</span>
  LabelLayout<span class="token punctuation">,</span>
  UniversalTransition<span class="token punctuation">,</span>
  CanvasRenderer<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  echarts<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><h2>组件</h2><p>可根据窗口大小变化重新渲染自适应尺寸</p><p>echartModel.vue</p><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartDomStyle<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartDom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> onUnmounted<span class="token punctuation">,</span> watch<span class="token punctuation">,</span> shallowRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> echarts <span class="token keyword">from</span> <span class="token string">&#39;@/utils/echart&#39;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> ECOption <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/echart&#39;</span>

<span class="token keyword">const</span> chartDom <span class="token operator">=</span> ref<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token comment">/**
 * @see https://echarts.apache.org/zh/faq.html
 * 如果你使用的是 Vue 3，请避免使用 reactive 及 ref。
 * 解决方案为：使用普通变量声明 ECharts 对象实例，或使用 shallowRef / shallowReactive / markRaw 等 API 防止 ECharts 对象实例被代理。
 */</span>
<span class="token keyword">const</span> myChart <span class="token operator">=</span> shallowRef<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 参数类型验证</span>
<span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">options</span><span class="token operator">:</span> ECOption <span class="token operator">|</span> Object
<span class="token punctuation">}</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">resize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">opt<span class="token operator">?</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  myChart<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">resize</span><span class="token punctuation">(</span>opt<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  myChart<span class="token punctuation">.</span>value <span class="token operator">=</span> echarts<span class="token punctuation">.</span>echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>chartDom<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  myChart<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">setOption</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>options<span class="token punctuation">)</span>
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> resize<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> resize<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>options<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">newOptions</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    myChart<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">setOption</span><span class="token punctuation">(</span>newOptions<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span> resize <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.chartDomStyle</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><h2>示例</h2><ul><li>定义容器样式</li><li>通过参数 options 调整配置参数，changeType</li><li>通过调整容器高度实现重新渲染，changeSize</li></ul><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-radio-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>height<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeSize<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-radio-button</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>300px<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-radio-button</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>500px<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-radio-group</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-radio-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>type<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeType<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-radio-button</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bar<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-radio-button</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>line<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-radio-group</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartDom<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ height }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>echartModel</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartDom<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>defaultOptions(type)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>echartModel</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// 指定图表的配置项和数据</span>
<span class="token keyword">const</span> <span class="token function-variable function">defaultOptions</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">type</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Mon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Wed&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Thu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fri&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sun&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">224</span><span class="token punctuation">,</span> <span class="token number">218</span><span class="token punctuation">,</span> <span class="token number">135</span><span class="token punctuation">,</span> <span class="token number">147</span><span class="token punctuation">,</span> <span class="token number">260</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      type<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> height <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;300px&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> chartDom <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">changeSize</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">size</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  chartDom<span class="token punctuation">.</span>value<span class="token operator">?.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> size<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">changeType</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">val</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  type<span class="token punctuation">.</span>value <span class="token operator">=</span> val
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.chartDom</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,13),f=[b],w={__name:"echart",setup(s,{expose:n}){return n({frontmatter:{}}),(e,c)=>(a(),t("div",y,f))}},v={class:"markdown-body"},q=p(`<h1>表单常用功能封装</h1><p><a href="https://element-plus.org/zh-CN/component/form.html">Form 表单</a></p><h2>参数</h2><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>是否必填</th></tr></thead><tbody><tr><td>formData</td><td>表单数据合集</td><td>Object</td><td>是</td></tr><tr><td>formItem</td><td>表单内容配置</td><td>Array&lt;formType&gt;</td><td>是</td></tr><tr><td>itemStyle</td><td>输入框样式</td><td>默认宽度 220px</td><td>否</td></tr><tr><td>inline</td><td>是否行内表单</td><td>boolean</td><td>否</td></tr><tr><td>size</td><td>表单尺寸</td><td>string</td><td>否</td></tr><tr><td>labelWidth</td><td>标签宽度</td><td>string</td><td>否</td></tr></tbody></table><ul><li>formType</li></ul><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>是否必填</th></tr></thead><tbody><tr><td>prop</td><td>Model 的键名</td><td>string</td><td>是</td></tr><tr><td>type</td><td>form 类型</td><td>string</td><td>否</td></tr><tr><td>dateType</td><td>时间选择器 type</td><td>year/month/date/dates/datetime/ week/datetimerange/daterange/ monthrange</td><td>否</td></tr><tr><td>label</td><td>标签名</td><td>string</td><td>否</td></tr><tr><td>rules</td><td>验证规则</td><td>any[]</td><td>否</td></tr><tr><td>min</td><td>数字输入最小值</td><td>number</td><td>否</td></tr><tr><td>max</td><td>数字输入最大值</td><td>number</td><td>否</td></tr><tr><td>options</td><td>下拉菜单，多选参数配置数组</td><td>Array&lt;options&gt;</td><td>否</td></tr><tr><td>datetype</td><td>时间控件类型</td><td>string</td><td>否</td></tr><tr><td>format</td><td>时间控件格式</td><td>string</td><td>否</td></tr><tr><td>maxlength</td><td>输入框最大长度</td><td>number</td><td>否</td></tr><tr><td>style</td><td>样式</td><td>any</td><td>否</td></tr><tr><td>multiple</td><td>是否多选</td><td>boolean</td><td>否</td></tr><tr><td>row</td><td>textarea 行数</td><td>number</td><td>否</td></tr></tbody></table><ul><li>options</li></ul><p>快捷配置 radio,checkbox,select</p><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>是否必填</th></tr></thead><tbody><tr><td>label</td><td>radio,checkbox,select</td><td>string</td><td>是</td></tr><tr><td>value</td><td>select</td><td>string</td><td>否</td></tr><tr><td>name</td><td>radio,checkbox</td><td>string</td><td>否</td></tr></tbody></table><h3>类型定义</h3><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">options</span> <span class="token punctuation">{</span>
  label<span class="token operator">:</span> <span class="token builtin">string</span>
  value<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">formType</span> <span class="token punctuation">{</span>
  prop<span class="token operator">:</span> <span class="token builtin">string</span>
  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  rules<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  min<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  max<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  options<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>options<span class="token operator">&gt;</span>
  datetype<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  format<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  maxlength<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  style<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span>
  multiple<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  row<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
  formData<span class="token operator">:</span> <span class="token builtin">any</span>
  formItem<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>formType<span class="token operator">&gt;</span>
  itemStyle<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span>
  inline<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  size<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  labelWidth<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">withDefaults</span><span class="token punctuation">(</span><span class="token generic-function"><span class="token function">defineProps</span><span class="token generic class-name"><span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  formData<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  formItem<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  itemStyle<span class="token operator">:</span> <span class="token punctuation">{</span>
    width<span class="token operator">:</span> <span class="token string">&#39;220px&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  inline<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  size<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  labelWidth<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h2>方法</h2><table><thead><tr><th>名称</th><th>说明</th><th>传参</th><th>回调参数</th></tr></thead><tbody><tr><td>submitForm</td><td>返回验证结果，表单数据，错误数据</td><td></td><td>{valid: boolean, data: any, fields: any}</td></tr><tr><td>resetFields</td><td>重置表单</td><td></td><td></td></tr><tr><td>validateField</td><td>验证单个表单项</td><td>field: string</td><td></td></tr><tr><td>changeValue</td><td>变更表单值</td><td>key: string, value: any</td><td></td></tr><tr><td>setLoading</td><td>设置加载状态</td><td>state: boolean</td><td></td></tr></tbody></table><h2>事件</h2><p>配合快捷按钮使用</p><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>submit</td><td>点击提交按钮</td></tr><tr><td>close</td><td>点击关闭按钮</td></tr></tbody></table><h2>快捷按钮</h2><p>通过 2 个特殊 prop 展示常用按钮组合</p><h3>查询/重置</h3><ul><li>searchBtn 查询和重置按钮对应的外部方法 submit，如加载列表</li></ul><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>formModel</span>
  <span class="token attr-name">inline</span>
  <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>searchFormRef<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:formData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>searchForm<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:formItem</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>searchItem<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@submit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getList<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>formModel</span><span class="token punctuation">&gt;</span></span>
</code></pre><pre class="language-js"><code class="language-js"><span class="token keyword">const</span> searchFormRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> searchForm <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> searchItem <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>any<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;类型&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;type&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;select&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;线上&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;线上&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;名称&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;label&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;searchBtn&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><h3>提交/关闭</h3><ul><li>submitBtn 提交和关闭按钮，对应方法分别是<code>submit</code>和<code>close</code></li></ul><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>formModel</span>
  <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>90px<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ruleFormRef<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:formData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:formItem</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formItem<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@submit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>close<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>formModel</span><span class="token punctuation">&gt;</span></span>
</code></pre><pre class="language-js"><code class="language-js"><span class="token keyword">const</span> ruleFormRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> form <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;type&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> formItem <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>any<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;类型&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;type&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;select&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;线上&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;线上&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;名称&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;label&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;请输入名称&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;值&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;请输入值&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;submitBtn&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><h2>插槽</h2><ul><li><p>部分字段需要特殊处理，直接使用和 prop 同名的具名插槽即可</p></li><li><p>默认插槽为空的表单内容</p></li></ul><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>formModel</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ruleFormRef<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:formData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ruleForm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:formItem</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formItem<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>120px<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#test</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ruleForm.test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dialogFormVisible = true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>新增<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>formModel</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,29),_=[q],x={__name:"form",setup(s,{expose:n}){return n({frontmatter:{}}),(e,c)=>(a(),t("div",v,_))}},C={class:"markdown-body"},T=p(`<h1>扩展全局属性</h1><p>app.config.globalProperties</p><h2>定义</h2><h3>直接定义</h3><pre class="language-ts"><code class="language-ts">app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>msg <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
</code></pre><h3>插件中使用</h3><p>tool.ts</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span>app<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> options<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 配置此应用</span>
    app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span><span class="token function-variable function">$translate</span> <span class="token operator">=</span> <span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> key<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>o<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> i<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token keyword">return</span> o<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><p>引入插件</p><pre class="language-ts"><code class="language-ts"><span class="token comment">// 引入插件</span>
<span class="token keyword">import</span> tool <span class="token keyword">from</span> <span class="token string">&#39;@/utils/tool&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

<span class="token comment">// 配置并使用插件</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>tool<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  home<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&#39;vue3 demo&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h2>在 TypeScript 中使用</h2><p><a href="https://cn.vuejs.org/guide/typescript/options-api.html#augmenting-global-properties">需要做类型定义</a></p><p>*.d.ts</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;vue&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">ComponentCustomProperties</span> <span class="token punctuation">{</span>
    msg<span class="token operator">:</span> <span class="token builtin">string</span>
    <span class="token function-variable function">$translate</span><span class="token operator">:</span> <span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><h2>在组件中使用</h2><h3>在 html 中可直接使用</h3><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{msg}} {{$translate(&#39;home.title&#39;)}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3>在 ts 中使用</h3><ul><li>增加引用的模块定义</li></ul><p>useProxy.ts</p><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span>
  getCurrentInstance<span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">ComponentInternalInstance</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">ComponentPublicInstance</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token punctuation">(</span><span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> ComponentInternalInstance<span class="token punctuation">)</span><span class="token punctuation">.</span>proxy <span class="token keyword">as</span> ComponentPublicInstance
</code></pre><ul><li>在 ts 中使用</li></ul><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ message }}{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> useProxy <span class="token keyword">from</span> <span class="token string">&#39;@/utils/useProxy&#39;</span>
<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">useProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> message <span class="token operator">=</span> proxy<span class="token punctuation">.</span>msg <span class="token comment">// hello</span>
<span class="token keyword">const</span> title <span class="token operator">=</span> proxy<span class="token punctuation">.</span><span class="token function">$translate</span><span class="token punctuation">(</span><span class="token string">&#39;home.title&#39;</span><span class="token punctuation">)</span> <span class="token comment">// vue3 demo</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,23),A=[T],j={__name:"globalProperties",setup(s,{expose:n}){return n({frontmatter:{}}),(e,c)=>(a(),t("div",C,A))}},P={class:"markdown-body"},$=p(`<h1>页面结构组件</h1><p>页面 100%高度内 flex 布局，一般展示上中下结构</p><h2>插槽</h2><ul><li>header 头部</li><li>footer 底部</li><li>default 自动撑开中间</li></ul><h2>示例</h2><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  content
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,6),O=[$],L={__name:"layout",setup(s,{expose:n}){return n({frontmatter:{}}),(e,c)=>(a(),t("div",P,O))}},M={class:"markdown-body"},S=p(`<h1>分页组件</h1><p><a href="https://element-plus.org/zh-CN/component/pagination.html">Pagination 分页</a></p><h2>参数</h2><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>是否必填</th></tr></thead><tbody><tr><td>total</td><td>总条数</td><td>number</td><td>是</td></tr><tr><td>pageSizes</td><td>每页显示个数选择器的选项设置</td><td>Array&lt;number&gt;</td><td>否</td></tr><tr><td>layout</td><td>组件布局</td><td>string</td><td>否</td></tr><tr><td>small</td><td>是否使用小型分页样式</td><td>boolean</td><td>否</td></tr><tr><td>background</td><td>背景</td><td>boolean</td><td>否</td></tr><tr><td>defaultPageSize</td><td>每页默认条数</td><td>number</td><td>否</td></tr></tbody></table><h3>类型定义</h3><pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
  total<span class="token operator">:</span> <span class="token builtin">number</span>
  pageSizes<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>
  layout<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  small<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  background<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  defaultPageSize<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">withDefaults</span><span class="token punctuation">(</span><span class="token generic-function"><span class="token function">defineProps</span><span class="token generic class-name"><span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  total<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token function-variable function">pageSizes</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  layout<span class="token operator">:</span> <span class="token string">&#39;total, sizes, -&gt;, prev, pager, next&#39;</span><span class="token punctuation">,</span>
  small<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  background<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  defaultPageSize<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h2>事件</h2><table><thead><tr><th>名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>size-change</td><td>每页条数变更</td><td>条数</td></tr><tr><td>current-change</td><td>当前页变更</td><td>当前页</td></tr></tbody></table><h2>示例</h2><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pageModel</span>
  <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pageModel<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pageData.total<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:default-page-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@size-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSizeChange<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@current-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCurrentChange<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre>`,10),z=[S],D={__name:"page",setup(s,{expose:n}){return n({frontmatter:{}}),(e,c)=>(a(),t("div",M,z))}},I={class:"markdown-body"},B=p(`<h1>路由多页签</h1><p>使用 provide 和 inject 实现方法复用</p><h2>路由配置</h2><ul><li>title 页面名称</li><li>closable 可关闭页签</li><li>keepAlive 开启缓存</li></ul><pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">closable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><h2>Methods</h2><pre class="language-ts"><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">TabType</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span>
  closable<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre><table><thead><tr><th>名称</th><th>描述</th><th>参数</th><th>参数类型</th></tr></thead><tbody><tr><td>addTab</td><td>新增页签</td><td>tabType</td><td>TabType</td></tr><tr><td>removeTab</td><td>删除页签</td><td>path</td><td>string</td></tr><tr><td>reloadTab</td><td>刷新页签</td><td>path</td><td>string</td></tr><tr><td>replaceTab</td><td>替换页签</td><td>path</td><td>string</td></tr></tbody></table><h2>使用示例</h2><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addTabByPath<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>打开新页签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>removeTab($route.path)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>删除页签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>reloadTab($route.path)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>刷新页签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>closeToTab<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>替换页签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><pre class="language-js"><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> addTab <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;addTab&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> Function
<span class="token keyword">const</span> removeTab <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;removeTab&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> Function
<span class="token keyword">const</span> reloadTab <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;reloadTab&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> Function
<span class="token keyword">const</span> replaceTab <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;replaceTab&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> Function

<span class="token keyword">const</span> <span class="token function-variable function">addTabByPath</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">addTab</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;分页列表&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/pageList&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">closeToTab</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">replaceTab</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;分页列表&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/pageList&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><h2>keepAlive</h2><p>vue 官方组件，未在生产环境开放清除缓存方法，需要修改源码实现</p><p>node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js</p><p>核心部分，去掉判断条件，使__v_cache暴露出来</p><pre class="language-js"><code class="language-js"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">)</span> <span class="token operator">||</span> false<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  instance<span class="token punctuation">.</span>__v_cache <span class="token operator">=</span> cache<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><p>注释1，3行即可</p><p>可通过node修改文件实现<a href="https://github.com/babytutu/vue3-web/blob/master/build/replace-vue.js">replace-vue.js</a></p><p>package.json</p><pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>
  <span class="token property">&quot;script&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node build/replace-vue.js &amp;&amp; run-p type-check build-only&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>`,20),E=[B],F={__name:"tab",setup(s,{expose:n}){return n({frontmatter:{}}),(e,c)=>(a(),t("div",I,E))}},R={class:"markdown-body"},N=p(`<h1>列表常用功能封装</h1><p><a href="https://element-plus.org/zh-CN/component/table.html">Table 表格 el-table</a></p><h2>参数</h2><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>是否必填</th></tr></thead><tbody><tr><td>header</td><td>表头配置集合</td><td>Array&lt;headerType&gt;</td><td>是</td></tr><tr><td>data</td><td>列表数据集合</td><td>Array</td><td>是</td></tr><tr><td>selection</td><td>多选标志</td><td>Boolean</td><td>否</td></tr></tbody></table><ul><li>headerType</li></ul><p><a href="https://element-plus.org/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7">Table-column 属性</a></p><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>是否必填</th></tr></thead><tbody><tr><td>prop</td><td>字段名</td><td>string</td><td>是</td></tr><tr><td>label</td><td>表头</td><td>string</td><td>是</td></tr><tr><td>fixed</td><td>固定在左侧或者右侧</td><td>boolean / string</td><td>否</td></tr><tr><td>sortable</td><td>是否排序</td><td>boolean / string</td><td>否</td></tr><tr><td>width</td><td>列宽</td><td>string</td><td>否</td></tr><tr><td>options</td><td>操作列配置</td><td>Array&lt;options&gt;</td><td>否</td></tr></tbody></table><ul><li>options</li></ul><table><thead><tr><th>名称</th><th>说明</th><th>类型</th><th>是否必填</th></tr></thead><tbody><tr><td>name</td><td>按钮文案</td><td>string</td><td>是</td></tr><tr><td>onClick</td><td>function(row)</td><td>string</td><td>是</td></tr><tr><td>auth</td><td>权限验证参数</td><td>boolean</td><td>否</td></tr></tbody></table><h3>类型定义</h3><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">DataType</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Options</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token function">onClick</span><span class="token punctuation">(</span>item<span class="token operator">:</span> DataType<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
  auth<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">HeaderType</span> <span class="token punctuation">{</span>
  prop<span class="token operator">:</span> <span class="token builtin">string</span>
  label<span class="token operator">:</span> <span class="token builtin">string</span>
  fixed<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token builtin">string</span>
  sortable<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token builtin">string</span>
  width<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  options<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>Options<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  data<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>DataType<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  header<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>HeaderType<span class="token operator">&gt;</span><span class="token punctuation">,</span>
    required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  selection<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h3>操作列</h3><p>通过设置 options 实现操作列快捷配置</p><pre class="language-js"><code class="language-js"><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;action&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;操作&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;220&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;查看&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">row</span><span class="token operator">:</span> Res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">handleDetail</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token function">checkAuth</span><span class="token punctuation">(</span><span class="token string">&#39;pageList&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;view&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;编辑&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">row</span><span class="token operator">:</span> Res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">handleEdit</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token function">checkAuth</span><span class="token punctuation">(</span><span class="token string">&#39;pageList&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;edit&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;复制&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">row</span><span class="token operator">:</span> Res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">handleCopy</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token function">checkAuth</span><span class="token punctuation">(</span><span class="token string">&#39;pageList&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;copy&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;删除&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">row</span><span class="token operator">:</span> Res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">handleDelete</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token function">checkAuth</span><span class="token punctuation">(</span><span class="token string">&#39;pageList&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;del&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><h2>事件</h2><table><thead><tr><th>名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>selection-change</td><td>多选变化触发</td><td>选中的数据集合</td></tr></tbody></table><h2>方法</h2><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>setLoading</td><td>设置加载状态</td><td>state: boolean</td></tr></tbody></table><h2>插槽</h2><ul><li>部分字段需要特殊处理，直接使用和 prop 同名的具名插槽即可</li></ul><pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TableModel</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableRef<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#region</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{row}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> {{ row.region.join() }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TableModel</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,21),U=[N],V={__name:"table",setup(s,{expose:n}){return n({frontmatter:{}}),(e,c)=>(a(),t("div",R,U))}},l=Object.assign({"./auth.md":i,"./docs.md":h,"./echart.md":w,"./form.md":x,"./globalProperties.md":j,"./layout.md":L,"./page.md":D,"./tab.md":F,"./table.md":V}),G=[],W={};Object.keys(l).forEach(s=>{const n=s.replace(/^\.\/(.*)\.\w+$/,"$1");G.push(n),W[n]=l[s]});export{W as a,G as m};
