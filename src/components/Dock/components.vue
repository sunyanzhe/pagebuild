<template>
    <!-- 这里click 要用捕获 因为如果冒泡的话 就点不到模板里面的原件了 当然了都是臆想 还没有模板 -->
    <div class="components-container" :class="{'acitved': checked}" @click.capture="clickHandle(renderData.config, index)">
        <!-- 不是模板 是原件 -->
        <component v-if="!renderData.children || !renderData.children.length" 
            :is="renderData.comType" 
            :renderData="renderData"
        ></component>
        <!-- 模板 -->
        <!-- 也不知道行不行 回来试试 据说可以这样递归 -->
        <components v-else v-for="item in renderData.children" :key="item.id" :renderData="item" />
    </div>
</template>
<script>
export default {
    name: 'components',
    // 异步加载对应的原子组件
    components: {
        'Paragraph': () => import('../comLists/paragraph'),
        'Pic': () => import('../comLists/pic'),
        'Space': () => import('../comLists/space')
    },
    props: {
        renderData: Object,
        clickHandle: {
            type: Function,
            default: e => e.preventDefault()
        },
        index: Number || String
    },
    computed: {
        checked() {
            return this.renderData.checked;
        }
    }
}
</script>