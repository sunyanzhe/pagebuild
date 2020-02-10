<template>
    <div class="main-content" @drop="dropHandler" @dragover="dragoverHandler">
        <components v-for="item in dataList" :key="item.id" :renderData="item" />
    </div>
</template>
<script>
import Components from './components.vue'
export default {
    components: {
        Components,

    },
    data() {
        return {
            //渲染搭建页面的数据
            dataList: [],
            // 拖拽的组件的信息
            dragInfo: {},
            // 每个组件的唯一ID
            i: 0,
        }
    },
    methods: {
        dragEnterHandler(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        },
        dropHandler(e) {
            e.preventDefault();
            this.$demt.fire('Component.AddOne', this, this.dragInfo);
        },
        addComponent(info) {
            let id = this.dragInfo.type + (this.i++),
                comRenderData = Object.assign({}, info, {id});
            this.dataList.push(comRenderData);
            this.clearDragInfo();
        },
        dragoverHandler(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        },
        clearDragInfo() {
            this.dragInfo = {};
        }
    },
    created() {
        this.$demt.bind('LeftCompoentItem.DragStart', (vm, info) => {
            this.dragInfo = Object.assign({}, info);
        })
        this.$demt.bind('Component.AddOne', (vm, info) => {
            this.addComponent(info);
        })
    }
}
</script>