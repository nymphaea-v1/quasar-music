<template>
  <c-card class="card cursor-pointer">
    <template #heading>
      {{ album.name }}
    </template>

    <template #default>
      <q-item-label class="text-body1 q-mb-sm">
        Author: {{ author }}
      </q-item-label>
      <q-item-label class="text-body1 q-mb-sm ellipsis-2-lines">
        Songs:
        <span>{{ songNames }}</span>
      </q-item-label>
    </template>

    <template #label>
      Album
    </template>
  </c-card>
</template>

<script setup lang="ts">
import CCard from 'components/c-card.vue'

import { computed } from 'vue'
import { useLibraryStore } from 'src/stores/library'

const props = defineProps<{ album: Album }>()

const author = computed(() => useLibraryStore().artists.get(props.album.artistId)?.name)

const songNames = computed(() => {
  return Array.from(useLibraryStore().songs.values())
    .filter(song => props.album.songIds.includes(song.id))
    .map(song => song.name)
    .join(', ')
})
</script>

<style lang="scss">
.card:hover {
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  box-shadow:
    1px 1px 10px rgb(0 0 0 / 20%),
    0 2px 4px rgb(0 0 0 / 14%),
    0 5px 3px -2px rgb(0 0 0 / 12%);
}
</style>
