<template>
    <div class="components-container" @click.capture="clickHandler">
        <!-- 不是模板 是原件 -->
        <component v-if="!renderData.children || !renderData.children.length" :is="renderData.comType" :renderData="renderData"></component>
        <!-- 模板 -->
        <!-- 也不知道行不行 回来试试 据说可以这样递归 -->
        <components v-else v-for="item in renderData.children" :key="item.id" :renderData="item" />
    </div>
</template>
<script>
export default {
    name: 'components',
    components: {
        'Paragraph': () => import('../comLists/paragraph'),
        'Pic': () => import('../comLists/pic'),
        'Space': () => import('../comLists/space')
    },
    props: {
        renderData: Object
    },
    methods: {
        clickHandler() {
            //这里搞vuex 显示操作栏
            alert('显示操作栏');
            alert(JSON.stringify(this.renderData));
        }
    }
}
</script>