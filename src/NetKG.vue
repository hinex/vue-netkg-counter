<template>
    <div>
        <a v-if="isSown" :href="link" target="_blank">
            <img :src="image" alt="Net.kg counter">
        </a>
        <noscript>
            <a :href='`http://www.net.kg/stat.php?id=${this.siteId}&fromsite=${this.siteId}`' target='_blank'>
                <img :src="`http://www.net.kg/img.php?id=${this.siteId}`" border='0' alt='WWW.NET.KG'/>
            </a>
        </noscript>
    </div>
</template>

<script>
    export default {
        name: "NetKG",
        watch: {
            '$route' (to, from) {
                this.referrerDefault = `${this.domain}${from}`
                this.page = `${this.domain}${to}`
            }
        },
        props: {
            siteId: {
                type: String,
                required: true
            },
            url: {
                type: String,
                default: 'http://www.net.kg/stat.php'
            },
            img: {
                type: String,
                default: '//www.net.kg/img.php'
            },
        },
        data() {
          return {
              referrerDefault: '',
              domain: '',
              page: '',
              isSown: false,
          }
        },
        mounted() {
            if (!!process.browser) {
                this.referrerDefault = window.referrerPrev || document.referrer
                this.domain = window.location.origin
                this.page = window.location.href
                window.referrerPrev = this.page
                this.isSown = true
            }
        },
        computed: {
            location() {
                return escape(this.page)
            },
            referrer() {
                return escape(this.referrerDefault)
            },
            link() {
                return `${this.url}?id=${this.siteId}&fromsite=${this.siteId}`
            },
            image() {
                if (!this.isSown) {
                    return `${this.img}?id=${this.siteId}`
                }

                const c = document.cookie ? "yes" : "now"
                const java = navigator.javaEnabled() ? "yes" : "now"
                const { width, height } = screen
                const color = (((navigator.appName.substring(0,3) === "Mic")) ? screen.colorDepth:screen.pixelDepth)
                const rand = Math.random()
                return `${this.img}?id=${this.siteId}&refer=${this.referrer}&page=${this.location}&c=${c}&java=${java}&razresh=${width}x${height}&cvet=${color}&jscript=1.3&rand=${rand}`
            }
        },
    }
</script>
