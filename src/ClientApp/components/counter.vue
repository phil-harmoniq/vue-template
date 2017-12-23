<template>
    <div>
        <h1>Counter</h1>

        <p>This is a simple example of a Vue.js component.</p>

        <p>Current count: <strong>{{ currentcount }}</strong></p>

        <button @click="incrementCounter">Increment</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class CounterComponent extends Vue {
    currentcount: number = 0;

    incrementCounter() {
        this.currentcount++;
    }
}
</script>