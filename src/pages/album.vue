<template>
  <c-list
    v-if="album"
    class="col-12"
    :items="album.songIds"
  >
    <template #heading>
      {{ album.name }}
    </template>

    <template #default="{ item: songId }">
      <c-song-card :song="(songs.get(songId) as Song)" />
    </template>
  </c-list>
</template>

<script setup lang="ts">
import CList from 'components/c-list.vue'
import CSongCard from 'components/c-song-card.vue'

import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useLibraryStore } from 'src/stores/library'

const library = useLibraryStore()
const songs = storeToRefs(library).songs

const id = computed(() => +useRoute().params.id)

const album = computed(() => {
  const album = library.albums.get(id.value)
  if (album === undefined) useRouter().push({ name: 'error-404' })

  return album
})
</script>
