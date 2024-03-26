<template>
    <el-scrollbar>
        <el-menu :default-active="defaultActive" router>
            <menu-item v-for="menu in constantRouterMap" :key="menu.path" :base-path="menu.path" :menu="menu">
            </menu-item>
        </el-menu>
    </el-scrollbar>
</template>

<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import { constantRouterMap } from '@/router/router-config'
import { computed } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()

const defaultActive = computed(() => {
    const { path } = route
    return path
})

</script>