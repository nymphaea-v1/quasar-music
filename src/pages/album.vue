<template>
  <c-list
    v-if="album !== undefined && albumSongs !== undefined"
    class="col-12"
    :items="albumSongs"
  >
    <template #heading>
      <div class="row justify-between">
        {{ album.name }}
        <q-btn
          label="Add song"
          padding="0 30px"
          @click="openSongCreator"
        />
      </div>
    </template>

    <template #default="{ item: song }">
      <c-song-card :song="song" />
    </template>
  </c-list>

  <q-dialog v-model="isSongCreatorOpen">
    <q-card
      class="q-pa-lg"
    >
      <h5 class="q-ma-none">
        Add a new song to this album:
      </h5>

      <q-card-section>
        <q-input
          v-model="songName"
          autofocus
          label="Song name"
        />
      </q-card-section>

      <q-card-actions align="evenly">
        <q-btn
          padding="6px 50px"
          label="Add"
          @click="addSong(songName)"
        />
        <q-btn
          padding="6px 50px"
          label="Cancel"
          @click="closeSongCreator"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import CList from 'components/c-list.vue'
import CSongCard from 'components/c-song-card.vue'

import { ref, computed, watch } from 'vue'
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

const albumSongs = computed(() => album.value?.songIds.map(id => songs.value.get(id) as Song).filter(song => song !== undefined))

const isSongCreatorOpen = ref(false)
const songName = ref('')

watch(isSongCreatorOpen, (newValue) => {
  if (!newValue) songName.value = ''
})

const openSongCreator = () => {
  isSongCreatorOpen.value = true
}

const closeSongCreator = () => {
  isSongCreatorOpen.value = false
}

const addSong = (songName: string) => {
  if (album.value === undefined) return

  library.addSong(album.value.id, { name: songName, artistId: album.value.artistId })
  closeSongCreator()
}
</script>
