<template>
    <div class="container">
        <dock-main />
        <operation-menu :configData="config" v-show="showMenu" />
    </div>
</template>
<script>
import DockMain from './Dock/Main.vue'
import OperationMenu from './operationMenu/operationMenu.vue'
export default {
    components: {
        DockMain,
        OperationMenu
    },
    data() {
        return {
            showMenu: false,
            config: []
        }
    },
    created() {
        this.$demt.bind('OperationMenu.show', (config) => {
            this.showMenu = true;
            this.config = config;
        });
    }
}
</script>