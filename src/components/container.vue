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
    computed: {
      showMenu() {
        return this.$store.state.showOperateMenu;
      },
      config() {
        return this.$store.state.curComponentData;
      }
    }
}
</script>