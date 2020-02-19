<template>
    <div class="com-container" draggable="true"
        @dragstart="dragStartHandle($event, itemData)"
        @dragend="dragEndHandle($event)"
        @click="clickHandler($event, itemData)"
    >
        <div class="com-content">{{itemData.desc}}</div>
        <div class="com-title">{{itemData.title}}</div>
    </div>
</template>
<script>
export default {
    props: {
        itemData: Object
    },
    methods: {
        dragStartHandle(ev, info) {
            this.$emit('dragstart', ev, info);
        },
        clickHandler(ev, info) {
            this.$emit('click', ev, info);
        },
        dragEndHandle(ev) {
            this.$emit('dragend', ev);
        }
    }
}
</script>