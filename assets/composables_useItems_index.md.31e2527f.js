import{_ as n,c as s,o as a,a as t}from"./app.1e9e135d.js";const m='{"title":"useItems","description":"","frontmatter":{},"headers":[{"level":2,"title":"Basic usage","slug":"basic-usage"},{"level":2,"title":"Usage with controls","slug":"usage-with-controls"},{"level":2,"title":"Prevent initial fetch","slug":"prevent-initial-fetch"}],"relativePath":"composables/useItems/index.md","lastUpdated":1644138701586}',e={},p=t(`<h1 id="useitems" tabindex="-1">useItems <a class="header-anchor" href="#useitems" aria-hidden="true">#</a></h1><p>This composable allows you to access a given collection&#39;s items reactively.</p><blockquote><p>To know more about items, please check out the <a href="https://docs.directus.io/reference/sdk/#items" target="_blank" rel="noopener noreferrer">Directus Docs</a>.</p></blockquote><h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useItems <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-directus&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token function">useItems</span><span class="token punctuation">(</span><span class="token string">&quot;collectionName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Or</span>

<span class="token keyword">const</span> collectionName <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;collectionName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token function">useItems</span><span class="token punctuation">(</span>itemsName<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Or</span>

<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token function">useItems</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>collectionName<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in items<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ item.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="usage-with-controls" tabindex="-1">Usage with controls <a class="header-anchor" href="#usage-with-controls" aria-hidden="true">#</a></h2><p>By default, the composable returns a <code>ref</code> containing all your items. You can however turn the <code>controls</code> option to <code>true</code> to return an object with a few convenience methods and refs.</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useItems <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-directus&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> items<span class="token punctuation">,</span> deleteOne<span class="token punctuation">,</span> errors<span class="token punctuation">,</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useItems</span><span class="token punctuation">(</span><span class="token string">&quot;collectionName&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">controls</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading.fetch<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Loading...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>errors.fetch<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Oops! Looks like there was an error.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">&gt;</span></span>{{ errors.fetch }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-else</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in items<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ item.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deleteOne(item.id)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Delete<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Here is the complete list of the returned object properties:</p><table><thead><tr><th>Key</th><th style="text-align:center;">Type</th><th style="text-align:right;">Description</th></tr></thead><tbody><tr><td>loading</td><td style="text-align:center;">Object</td><td style="text-align:right;">Loading states for each method</td></tr><tr><td>errors</td><td style="text-align:center;">Object</td><td style="text-align:right;">List of errors for each method</td></tr><tr><td>items</td><td style="text-align:center;">Ref</td><td style="text-align:right;">List of fetched items</td></tr><tr><td>fetch</td><td style="text-align:center;">Function</td><td style="text-align:right;"><a href="https://docs.directus.io/reference/sdk/#read-multiple-items" target="_blank" rel="noopener noreferrer">Read many items</a></td></tr><tr><td>createOne</td><td style="text-align:center;">Function</td><td style="text-align:right;"><a href="https://docs.directus.io/reference/sdk/#create-single-item" target="_blank" rel="noopener noreferrer">Create an item</a></td></tr><tr><td>createMany</td><td style="text-align:center;">Function</td><td style="text-align:right;"><a href="https://docs.directus.io/reference/sdk/#create-multiple-items" target="_blank" rel="noopener noreferrer">Create multiple items</a></td></tr><tr><td>updateOne</td><td style="text-align:center;">Function</td><td style="text-align:right;"><a href="https://docs.directus.io/reference/sdk/#update-single-item" target="_blank" rel="noopener noreferrer">Update an item</a></td></tr><tr><td>updateMany</td><td style="text-align:center;">Function</td><td style="text-align:right;"><a href="https://docs.directus.io/reference/sdk/#update-multiple-items" target="_blank" rel="noopener noreferrer">Update multiple items</a></td></tr><tr><td>deleteOne</td><td style="text-align:center;">Function</td><td style="text-align:right;"><a href="https://docs.directus.io/reference/sdk/#delete-single-item" target="_blank" rel="noopener noreferrer">Update an item</a></td></tr><tr><td>deleteMany</td><td style="text-align:center;">Function</td><td style="text-align:right;"><a href="https://docs.directus.io/reference/sdk/#delete-multiple-items" target="_blank" rel="noopener noreferrer">Update multiple items</a></td></tr></tbody></table><h2 id="prevent-initial-fetch" tabindex="-1">Prevent initial fetch <a class="header-anchor" href="#prevent-initial-fetch" aria-hidden="true">#</a></h2><p>By default, the composable will fetch the collection items on initialization. You may turn off that behaviour by setting the <code>fetchOnInit</code> option to false. Please note that this will automatically turn on the <code>controls</code> (see above) to let you fetch when necessary.</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useItems <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-directus&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> items<span class="token punctuation">,</span> fetch <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useItems</span><span class="token punctuation">(</span><span class="token string">&quot;collectionName&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">fetchOnInit</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Do something.</span>

<span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,13),o=[p];function c(l,u,i,r,k,d){return a(),s("div",null,o)}var h=n(e,[["render",c]]);export{m as __pageData,h as default};
