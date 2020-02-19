<template>
    <div class="main-content">
        <drop-area :index="0" :visible="areaVisible" @drop="drop" />
        <template v-for="(item, index) in dataList">
            <components  :key="item.id" :index="index" :renderData="item" :clickHandle="comClickHandle" />
            <drop-area :key="index" :index="index + 1" :visible="areaVisible" @drop="drop" />
        </template>
    </div>
</template>
<script>
import Components from './components.vue'
import dropArea from './dropArea.vue'
export default {
    name: 'Main',
    components: {
        Components,
        dropArea
    },
    data() {
        return {
            //渲染搭建页面的数据
            dataList: [],
            // 拖拽的组件的信息
            dragInfo: {},
            // 每个组件的唯一ID
            i: 0,
            areaVisible: false
        }
    },
    methods: {
        drop(index) {
            this.$demt.fire('Component.AddOne', this.dragInfo, index);
        },
        addComponent(info, index = undefined) {
            let id = info.type + (this.i++),
                comRenderData = Object.assign({id, checked: false}, info);
            index === undefined ?  
                this.dataList.push(comRenderData) :
                this.dataList.splice(index, 0, comRenderData);
            this.clearDragInfo();
        },
        dragoverHandler(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        },
        clearDragInfo() {
            this.dragInfo = {};
        },
        // 模板点击事件
        comClickHandle(config, index) {
            this.$store.commit('SET_COMPONENT_DATA', config);
            this.dataList.forEach((item, i) => item.checked = index == i)
        }
    },
    created() {
        this.$demt.bind('LeftCompoentItem.DragStart', (vm, info) => {
            this.dragInfo = Object.assign({}, info);
        })
        this.$demt.bind('Component.AddOne', (info, index) => {
            this.addComponent(info, index);
        })
        this.$demt.bind('LeftCompoentItem.DragStart', () => {
            this.areaVisible = true;
        });
        this.$demt.bind('LeftCompoentItem.DragEnd', () => {
            this.areaVisible = false;
        })
    }
}
</script>