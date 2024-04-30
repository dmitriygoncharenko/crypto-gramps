<template>
  <v-app-bar class="component__app-header">
    <v-img
      src="/logo.webp"
      alt="Logo"
      contain
      max-width="60"
    />
    <v-app-bar-title>{{ title }}</v-app-bar-title>
    <template v-if="!isMobile">
      <v-btn  v-for="item in items" :key="item.title" @click="onMenuClick(item)">
        {{ item.meta.title }}
      </v-btn>
    </template>
    <v-app-bar-nav-icon v-else @click.stop="drawer = !drawer" />
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    location="right"
  >
    <v-list lines="one">
      <v-list-item
        v-for="(item, key) in items"
        :key="key"
        :title="item.meta.title"
        @click="onMenuClick(item)"
      />
    </v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { useTitle } from '@vueuse/core';
import type { RouteRecordRaw } from "vue-router";
import {useDisplay} from "vuetify";

const title = useTitle();

const router = useRouter()

const items = computed<RouteRecordRaw[]>(() => router.getRoutes()
  .filter(route => !route.meta.isLayout)
  .sort((a, b) => a.meta.index - b.meta.index)
)

const drawer = ref(false)

const onMenuClick = (item: RouteRecordRaw): void => {
  router.push({ name: item.name })
};

const display = useDisplay();
const isMobile = computed<boolean>(() => display.smAndDown.value)
</script>
<style lang="scss" scoped>

</style>
