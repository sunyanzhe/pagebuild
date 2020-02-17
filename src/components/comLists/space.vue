<template>
    <p :style="styleList" class="com-space">{{renderData.content}}</p>
</template>
<script>
export default {
    props: {
        renderData: Object
    },
    computed: {
        styleList() {
            let config = this.renderData.config,
                result = {}
            for (const item of config) {
                result[item.paramKey] = item.value;
            }
            return result;
        }
    }
}
</script>
<style lang="scss" scoped>
    .com-space {
        width: 100%;
        height: 30px;
        background: orange;
        text-align: center;
    }
</style>