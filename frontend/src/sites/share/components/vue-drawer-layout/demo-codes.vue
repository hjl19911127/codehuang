<template>
  <div>
    <div v-if="name === 'demo1'">
<pre style="background:#fdf6e3;color:#586e75"><span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">template</span><span style="color:#93a1a1">></span>
  <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">vue</span><span style="color:#93a1a1">-drawer-layout</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>drawer<span style="color:#269186">"</span></span> <span style="color:#93a1a1">slot</span>=<span style="color:#269186"><span style="color:#269186">"</span>drawer<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
      <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>text<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>This is drawer<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>content<span style="color:#269186">"</span></span> <span style="color:#93a1a1">slot</span>=<span style="color:#269186"><span style="color:#269186">"</span>content<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
      <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>text<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>This is content.<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
  <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">vue</span><span style="color:#93a1a1">-drawer-layout</span><span style="color:#93a1a1">></span>
<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">template</span><span style="color:#93a1a1">></span>
</pre>
    </div>
    <div v-if="name === 'demo2'">
<pre style="background:#fdf6e3;color:#586e75"><span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">template</span><span style="color:#93a1a1">></span>
  <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">vue</span><span style="color:#93a1a1">-drawer-layout</span>
    :<span style="color:#93a1a1">reverse</span>=<span style="color:#269186"><span style="color:#269186">"</span>true<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>drawer<span style="color:#269186">"</span></span> <span style="color:#93a1a1">slot</span>=<span style="color:#269186"><span style="color:#269186">"</span>drawer<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
      <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>text<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>This is drawer<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>content<span style="color:#269186">"</span></span> <span style="color:#93a1a1">slot</span>=<span style="color:#269186"><span style="color:#269186">"</span>content<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>
      <span style="color:#93a1a1">&lt;</span><span style="color:#268bd2;font-weight:700">div</span> <span style="color:#93a1a1">class</span>=<span style="color:#269186"><span style="color:#269186">"</span>text<span style="color:#269186">"</span></span><span style="color:#93a1a1">></span>This is content.<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
    <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">div</span><span style="color:#93a1a1">></span>
  <span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">vue</span><span style="color:#93a1a1">-drawer-layout</span><span style="color:#93a1a1">></span>
<span style="color:#93a1a1">&lt;/</span><span style="color:#268bd2;font-weight:700">template</span><span style="color:#93a1a1">></span>
</pre>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      name: ''
    }
  }
</script>
