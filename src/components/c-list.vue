<template>
  <h4 class="q-mb-xs">
    <slot name="heading" />
  </h4>
  <q-separator class="q-mb-lg" />
  <q-list class="row q-col-gutter-md">
    <q-item
      v-for="(item, index) in items"
      :key="index"
      v-bind="$attrs"
    >
      <slot
        :item="item"
      />
    </q-item>
  </q-list>
</template>

<script lang="ts">
export default { inheritAttrs: false }
</script>

<script setup lang="ts">
defineProps<{ items: any[] }>()
</script>
