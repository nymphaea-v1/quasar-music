<template>
  <c-list
    :items="Array.from(albums.values())"
    class="col-12 col-md-6 q-pr-none q-pb-none"
  >
    <template #heading>
      Albums
    </template>

    <template #default="{ item: album }">
      <c-album-card
        :album="album"
        @click="openAlbum(album.id)"
      />
    </template>
  </c-list>
</template>

<script setup lang="ts">
import CList from 'components/c-list.vue'
import CAlbumCard from 'components/c-album-card.vue'

import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useLibraryStore } from 'stores/library'

const { albums } = storeToRefs(useLibraryStore())

const router = useRouter()

const openAlbum = (id: id) => router.push({ name: 'album', params: { id } })
</script>

<style lang="scss">
.song:last-child {
  & .song__comma {
  display: none;
  }
}
</style>
