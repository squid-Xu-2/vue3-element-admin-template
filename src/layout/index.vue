<template>
    <el-container class="layout-container">
        <Sidebar></Sidebar>

        <el-container>
            <el-header>
                <Navbar></Navbar>
            </el-header>

            <el-main>
                <el-scrollbar>
                    <RouterView></RouterView>
                </el-scrollbar>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/Navbar/index.vue'
import { RouterView } from 'vue-router'

</script>