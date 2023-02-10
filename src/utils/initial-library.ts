const initialArtists: Artist[] = [
  { id: 0, name: 'test-artist-0', albumIds: [0, 1, 2] },
  { id: 1, name: 'test-artist-1', albumIds: [3, 4] },
  { id: 2, name: 'test-artist-2', albumIds: [5] }
]

const initialAlbums: Album[] = [
  { id: 0, name: 'test-album-0', artistId: 0, songIds: [0, 1, 2, 3], year: 2007 },
  { id: 1, name: 'test-album-1', artistId: 0, songIds: [4, 5, 6, 7], year: 2009 },
  { id: 2, name: 'test-album-2', artistId: 0, songIds: [8, 9, 10, 11, 12, 13], year: 1989 },
  { id: 3, name: 'test-album-3', artistId: 1, songIds: [14, 15, 16, 17], year: 2022 },
  { id: 4, name: 'test-album-4', artistId: 1, songIds: [18, 19, 20, 21], year: 2023 },
  { id: 5, name: 'test-album-5', artistId: 2, songIds: [22, 23, 24, 25, 26, 27], year: 2023 }
]

const initialSongs: Song[] = [
  { id: 0, name: 'test-song-0', artistId: 0, albumId: 0, albumIndex: 1 },
  { id: 1, name: 'test-song-1', artistId: 0, albumId: 0, albumIndex: 2 },
  { id: 2, name: 'test-song-2', artistId: 0, albumId: 0, albumIndex: 3 },
  { id: 3, name: 'test-song-3', artistId: 0, albumId: 0, albumIndex: 4 },
  { id: 4, name: 'test-song-4', artistId: 0, albumId: 1, albumIndex: 1 },
  { id: 5, name: 'test-song-5', artistId: 0, albumId: 1, albumIndex: 2 },
  { id: 6, name: 'test-song-6', artistId: 0, albumId: 1, albumIndex: 3 },
  { id: 7, name: 'test-song-7', artistId: 0, albumId: 1, albumIndex: 4 },
  { id: 8, name: 'test-song-8', artistId: 0, albumId: 2, albumIndex: 1 },
  { id: 9, name: 'test-song-9', artistId: 0, albumId: 2, albumIndex: 2 },
  { id: 10, name: 'test-song-10', artistId: 0, albumId: 2, albumIndex: 3 },
  { id: 11, name: 'test-song-11', artistId: 0, albumId: 2, albumIndex: 4 },
  { id: 12, name: 'test-song-12', artistId: 0, albumId: 2, albumIndex: 5 },
  { id: 13, name: 'test-song-13', artistId: 0, albumId: 2, albumIndex: 6 },
  { id: 14, name: 'test-song-14', artistId: 1, albumId: 3, albumIndex: 7 },
  { id: 15, name: 'test-song-15', artistId: 1, albumId: 3, albumIndex: 8 },
  { id: 16, name: 'test-song-16', artistId: 1, albumId: 3, albumIndex: 9 },
  { id: 17, name: 'test-song-17', artistId: 1, albumId: 3, albumIndex: 10 },
  { id: 18, name: 'test-song-18', artistId: 1, albumId: 4, albumIndex: 1 },
  { id: 19, name: 'test-song-19', artistId: 1, albumId: 4, albumIndex: 2 },
  { id: 20, name: 'test-song-20', artistId: 1, albumId: 4, albumIndex: 3 },
  { id: 21, name: 'test-song-21', artistId: 1, albumId: 4, albumIndex: 4 },
  { id: 22, name: 'test-song-22', artistId: 2, albumId: 5, albumIndex: 5 },
  { id: 23, name: 'test-song-23', artistId: 2, albumId: 5, albumIndex: 6 },
  { id: 24, name: 'test-song-24', artistId: 2, albumId: 5, albumIndex: 7 },
  { id: 25, name: 'test-song-25', artistId: 2, albumId: 5, albumIndex: 8 },
  { id: 26, name: 'test-song-26', artistId: 2, albumId: 5, albumIndex: 9 },
  { id: 27, name: 'test-song-27', artistId: 2, albumId: 5, albumIndex: 10 }
]

const getEntityMap = <T extends Entity>(entities: T[]) => new Map(entities.map(entity => [entity.id, entity]))

export const getArtists = () => getEntityMap(initialArtists)
export const getAlbums = () => getEntityMap(initialAlbums)
export const getSongs = () => getEntityMap(initialSongs)
