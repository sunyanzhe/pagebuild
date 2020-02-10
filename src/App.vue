<template>
  <div class="layout" id="app">
    <left-menu />
    <container />
  </div>
</template>

<script>

import leftMenu from './components/leftMenu/leftMenu.vue'
import Container from './components/container.vue'

export default {
  name: 'app',
  components: {
    leftMenu,
    Container
  },
  created() {
    const winH = document.documentElement.clientHeight;
    document.body.style.height = `${winH}px`;
  }
}
</script>
