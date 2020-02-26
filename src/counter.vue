<template>
    <a :href="link" target="_blank">
        <img :src="image" alt="Net.kg counter">
    </a>
</template>

<script>
    export default {
        name: "AddThis",
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
        computed() {
            isSown() {
              return !!process.browser
            },
            location() {
                return escape(document.referrer)
            },
            referrer() {
                return escape(document.referrer)
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
