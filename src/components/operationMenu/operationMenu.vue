<template>
    <div class="operation-menu-container">
        <div v-for="(item, index) in configData" :key="index">
            <label>{{item.paramKey}}:</label>
            <input v-model="item.value" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'OperationMenu',
    props: {
        configData: Array
    }
}
</script>