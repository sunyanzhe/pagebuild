<template>
    <div class="drop-area" 
        :class="{'active': status}"
        v-show="visible" 
        @drop="dropHandle($event)"
        @dragenter="dragEnterHandle($event)"
        @dragover="dragOverHandle($event)"
        @dragleave="setStatus(false)"
    >
        {{status ? '放这就行了' : '请拖拽至空白楼层'}}
    </div>
</template>
<script>
export default {
    props: {
        index: Number,
        visible: Boolean
    },
    data() {
        return {
            status: false
        }
    },
    methods: {
        dropHandle(e) {
            e.preventDefault();
            this.$emit('drop', this.index);
            this.setStatus(false);
        },
        dragOverHandle(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
            this.setStatus(true);
        },
        dragEnterHandle(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
            this.setStatus(true);
        },
        setStatus(bool) {
            this.status = bool;
        }
    }
}
</script>