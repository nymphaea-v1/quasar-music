<template>
  <c-list
    :items="Array.from(artists.values())"
    class="col-6 col-sm-4 q-pr-none q-pb-none"
  >
    <template #heading>
      Artists
    </template>

    <template #default="{ item }">
      <c-artist-card :artist="item" />
    </template>
  </c-list>
</template>

<script setup lang="ts">
import CList from 'components/c-list.vue'
import CArtistCard from 'components/c-artist-card.vue'

import { storeToRefs } from 'pinia'
import { useLibraryStore } from 'stores/library'

const { artists } = storeToRefs(useLibraryStore())
</script>
