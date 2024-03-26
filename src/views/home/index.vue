<template>
    <h1>Home</h1>
    <h1>{{ counter.count }}</h1>
    <button @click="double">测试</button>
</template>
<script setup lang="ts">
import { useCounterStore } from '../../stores/counter'

const counter = useCounterStore()

function double() {
    console.log('----');

    counter.increment()
}

</script>