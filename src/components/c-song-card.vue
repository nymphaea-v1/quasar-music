<template>
  <c-card>
    <template #heading>
      {{ song.name }}
    </template>

    <template #default>
      <q-item-label class="text-body1">
        by: {{ authorName }}
      </q-item-label>
    </template>

    <template #label>
      Song
    </template>
  </c-card>
</template>

<script setup lang="ts">
import CCard from 'components/c-card.vue'

import { computed } from 'vue'
import { useLibraryStore } from 'src/stores/library'

const props = defineProps<{ song: Song }>()

const authorName = computed(() => useLibraryStore().artists.get(props.song.artistId)?.name)
</script>
