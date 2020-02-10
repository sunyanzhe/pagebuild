<template>
    <p class="com-space">{{renderData.content}}</p>
</template>
<script>
export default {
    props: {
        renderData: Object
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