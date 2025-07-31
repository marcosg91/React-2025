// @ts-expect-error: módulo JS sin declaraciones
import { musicService } from '../music/service.js';
import type { Song, Album } from '../types/music';

export const getSongs = async (): Promise<Song[]> => {
  const allSongs = await musicService.getAllSongs();

  return allSongs.map((raw: any) => ({
    id: String(raw.id),
    title: raw.title,
    artist: raw.artist,
    album: raw.album,
    year: Number(raw.year),
    genre: raw.genre,
    duration:
      typeof raw.duration === 'string'
        ? raw.duration
        : `${Math.floor(raw.duration / 60)}:${String(raw.duration % 60).padStart(2, '0')}`,
    rating: raw.rating,
    description: raw.description,
    image: raw.cover ?? raw.image,
    audioUrl: raw.audioUrl ?? '',
  }));
};

export const getAlbums = async (): Promise<Album[]> => {
  const allSongs = await getSongs();
  const albumMap = new Map<string, Album>();

  for (const song of allSongs) {
    if (!albumMap.has(song.album)) {
      albumMap.set(song.album, {
        id: song.album.toLowerCase().replace(/\s+/g, '-'),
        title: song.album,
        artist: song.artist,
        year: Number(song.year),
        genre: song.genre,
        cover: song.image,
        songs: [],
      });
    }
    albumMap.get(song.album)!.songs.push(song);
  }

  return Array.from(albumMap.values());
};

export const getAlbum = async (albumId: string): Promise<Album> => {
  const albums = await getAlbums();
  const album = albums.find((a) => a.id === albumId);
  if (!album) throw new Error('Álbum no encontrado');
  return album;
};

export const createSong = async (songData: Partial<Song>): Promise<Song> => {
  return await musicService.createSong(songData);
};
