<template>
    <p :style="styleList" class="com-p">{{content}}</p>
</template>
<script>
export default {
    props: {
        renderData: Object
    },
    computed: {
        content() {
            let config = this.renderData.config,
                data = config.find(item => item.paramKey === 'text') || {};
            return data.value || '这是默认段落';
        },
        styleList() {
            let config = this.renderData.config,
                data = config.find(item => item.paramKey === 'color') || {};
            return {[data.paramKey]: data.value};
        }
    }
}
</script>
<style scoped>
.com-p {
    height: 30px;
    width: 100%;
}
</style>