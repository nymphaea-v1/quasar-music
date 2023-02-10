<template>
  <c-card>
    <template #heading>
      {{ artist.name }}
    </template>

    <template #default>
      <q-item-label class="text-body1 q-mb-sm ellipsis-2-lines">
        Albums:
        <span>{{ albumNames }}</span>
      </q-item-label>
    </template>

    <template #label>
      Artist
    </template>
  </c-card>
</template>

<script setup lang="ts">
import CCard from 'components/c-card.vue'

import { computed } from 'vue'
import { useLibraryStore } from 'src/stores/library'

const props = defineProps<{ artist: Artist }>()

const albumNames = computed(() => {
  return Array.from(useLibraryStore().albums.values())
    .filter(album => props.artist.albumIds.includes(album.id))
    .map(album => album.name)
    .join(', ')
})
</script>
