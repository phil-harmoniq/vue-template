<template>
    <div id='app-root' class="container-fluid">
        <div class="row">
            <div class="col-sm-3">
                <menu-component />
            </div>
            <div class="col-sm-9">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    components: {
        MenuComponent: require('./components/navmenu.vue')
    }
})
export default class AppComponent extends Vue {
}
</script>

<style lang="scss">
/* This file gets imported by boot.ts */

@media (max-width: 767px) {
    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */
    body {
        padding-top: 50px;
    }
}
</style>