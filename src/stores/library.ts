import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { getAlbums, getArtists, getSongs } from 'src/utils/initial-library'

const generateId = () => Math.random() * 100000

export const useLibraryStore = defineStore('library', () => {
  const albums = useLocalStorage<Map<id, Album>>('albums', getAlbums())
  const artists = useLocalStorage<Map<id, Artist>>('artists', getArtists())
  const songs = useLocalStorage<Map<id, Song>>('songs', getSongs())

  const addSong = (albumId: id, song: Omit<Song, 'id' | 'albumId' | 'albumIndex'>): boolean => {
    const album = albums.value.get(albumId)
    if (album === undefined) return false

    const songId = generateId()
    const songModified = song as Song

    album.songIds.push(songId)
    songModified.id = songId
    songModified.albumId = albumId
    songModified.albumIndex = album.songIds.length

    return true
  }

  return { albums, artists, songs, addSong }
})
