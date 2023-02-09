<template>
  <div>
    {{ w }}
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const w = ref(1)
</script>
