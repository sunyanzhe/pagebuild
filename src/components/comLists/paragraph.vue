<template>
    <p class="com-p">{{renderData.content}}</p>
</template>
<script>
export default {
    props: {
        renderData: Object
    }
}
</script>
<style scoped>
.com-p {
    height: 30px;
    width: 100%;
}
</style>