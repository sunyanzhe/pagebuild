<template>
    <div class="leftMenu">
        <list-item v-for="item in comList" :key="item.comId" :itemData="item" @dragstart="dragstart" @click="click" />
    </div>
</template>
<script>
import comList from '../../assets/comList.js'
import listItem from './listItem.vue'
export default {
    components: {
        listItem
    },
    data() {
        return {
            comList: []
        }
    },
    methods: {
        dragstart(ev, data) {
            ev.stopPropagation();
            ev.dataTransfer.setDragImage(ev.target, -4, -4);
            // 在这里fire dragstart 在画布页面拿这个值
            this.$demt.fire('LeftCompoentItem.DragStart', this, data);
        },
        click(ev, data) {
            this.$demt.fire('Component.AddOne', this, data);
        }
    },
    created() {
        this.comList = comList;
    }
}
</script>