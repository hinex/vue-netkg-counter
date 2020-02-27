module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";(function(e){t.a={name:"NetKG",watch:{$route(e,t){this.referrerDefault=`${this.domain}${t}`,this.page=`${this.domain}${e}`}},props:{siteId:{type:String,required:!0},url:{type:String,default:"http://www.net.kg/stat.php"},img:{type:String,default:"//www.net.kg/img.php"}},data:()=>({referrerDefault:"",domain:"",page:"",isSown:!1}),mounted(){e.browser&&(this.referrerDefault=window.referrerPrev||document.referrer,this.domain=window.location.origin,this.page=window.location.href,window.referrerPrev=this.page,this.isSown=!0)},computed:{location(){return escape(this.page)},referrer(){return escape(this.referrerDefault)},link(){return`${this.url}?id=${this.siteId}&fromsite=${this.siteId}`},image(){if(!this.isSown)return`${this.img}?id=${this.siteId}`;const e=document.cookie?"yes":"now",t=navigator.javaEnabled()?"yes":"now",{width:r,height:n}=screen,i="Mic"===navigator.appName.substring(0,3)?screen.colorDepth:screen.pixelDepth,o=Math.random();return`${this.img}?id=${this.siteId}&refer=${this.referrer}&page=${this.location}&c=${e}&java=${t}&razresh=${r}x${n}&cvet=${i}&jscript=1.3&rand=${o}`}}}}).call(this,r(1))},function(e,t){var r,n,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,c=[],l=!1,f=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=a(h);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||l||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,r){"use strict";r.r(t);var n=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this.isSown?t("a",{attrs:{href:this.link,target:"_blank"}},[t("img",{attrs:{src:this.image,alt:"Net.kg counter"}})]):this._e(),this._v(" "),t("noscript",[t("a",{attrs:{href:"http://www.net.kg/stat.php?id="+this.siteId+"&fromsite="+this.siteId,target:"_blank"}},[t("img",{attrs:{src:"http://www.net.kg/img.php?id="+this.siteId,border:"0",alt:"WWW.NET.KG"}})])])])};n._withStripped=!0;var i=function(e,t,r,n,i,o,s,a){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=u):i&&(u=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(e,t){return u.call(t),l(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:e,options:c}}(r(0).a,n,[],!1,null,null,null);i.options.__file="src/NetKG.vue";var o=i.exports;t.default=o}]);