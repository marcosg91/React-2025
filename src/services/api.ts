// @ts-expect-error: JavaScript module without type declarations
import * as service from '../music/service.js';

import type { Song, Album } from '../types/music';

// Tipamos manualmente las funciones del servicio
const fetchSongs: () => Promise<Song[]> = service.fetchSongs;
const fetchAlbumById: (id: string) => Promise<Album> = service.fetchAlbumById;
const serviceCreateSong: (song: Partial<Song>) => Promise<Song> = service.createSong;

// Obtener lista de canciones
export const getSongs = async (): Promise<Song[]> => {
  return await fetchSongs();
};

// Obtener detalles de un álbum
export const getAlbum = async (id: string): Promise<Album> => {
  return await fetchAlbumById(id);
};

// Crear una nueva canción
export const createSong = async (songData: Partial<Song>): Promise<Song> => {
  return await serviceCreateSong(songData);
};
