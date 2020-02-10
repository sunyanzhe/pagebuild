<template>
    <img class="com-pic" :src="renderData.src" alt="img" />
</template>
<script>
export default {
    props: {
        renderData: Object
    }
}
</script>
<style scoped>
    .com-pic {
        width: 100%;
        height: auto;
    }
</style>