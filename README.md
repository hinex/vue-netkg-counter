# Counter [Net.kg](http://net.kg) component for Vue and Nuxt

[![release version](https://img.shields.io/github/v/release/hinex/vue-netkg-counter.svg)](https://github.com/hinex/vue-netkg-counter/releases) [![npm version](https://badge.fury.io/js/vue-netkg-counter.svg)](https://badge.fury.io/js/vue-netkg-counter) [![](https://data.jsdelivr.com/v1/package/npm/vue-netkg-counter/badge?style=rounded)](https://www.jsdelivr.com/package/npm/vue-netkg-counter) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/hinex/vue-netkg-counter/blob/master/LICENSE) [![dependences](https://david-dm.org/hinex/vue-netkg-counter.svg)](https://david-dm.org/hinex/vue-netkg-counter) [![devDependences](https://david-dm.org/hinex/vue-netkg-counter/dev-status.svg)](https://david-dm.org/hinex/vue-netkg-counter?type=dev)

Net.kg counter for SPA/SSR apps.

### Add website and get counter ID
![counter id](https://github.com/hinex/vue-netkg-counter/raw/master/example.png)

### Install

```bash
npm install vue-netkg-counter --save
```

### Usage

```html
<script>
  import NetKG from 'vue-netkg-counter'
    
  export default {
    name: "AwesomeComponent",
    components: {
      NetKG,
    }
  }
</script>
```

### If you have the same problem with build, just try to import component directly
```js
import NetKG from 'vue-netkg-counter/src/NetKG.vue'
```

### If you need use it on multiply pages
```js
import Vue from 'vue';
import NetKG from 'vue-netkg-counter';

Vue.component('net-kg-counter', NetKG);
```

#### Template area:

```html
<template>
  <NetKG site-id="1234" />
</template>
```
