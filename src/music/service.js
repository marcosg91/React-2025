import { songs as initialSongs, albums } from './db.js';

const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

const getNextId = () => {
  const stored = localStorage.getItem('musicDB');
  const songs = stored ? JSON.parse(stored) : [...initialSongs];
  const maxId = songs.reduce((max, song) => Math.max(max, Number(song.id)), 0);
  return maxId + 1;
};

const loadSongs = () => {
  const stored = localStorage.getItem('musicDB');
  return stored ? JSON.parse(stored) : [...initialSongs];
};

export const musicService = {
  async getAllSongs() {
    await delay(300);
    return loadSongs();
  },

  async getSongById(id) {
    await delay(200);
    const songs = loadSongs();
    const song = songs.find((s) => String(s.id) === String(id));
    if (!song) throw new Error('Song not found');
    return song;
  },

  async getSongsByGenre(genre) {
    await delay(200);
    if (!genre) throw new Error('Genre parameter is required');
    const songs = loadSongs();
    return songs.filter((song) =>
      song.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
    );
  },

  async getSongsByArtist(artist) {
    await delay(200);
    if (!artist) throw new Error('Artist parameter is required');
    const songs = loadSongs();
    return songs.filter((song) =>
      song.artist.toLowerCase().includes(artist.toLowerCase())
    );
  },

  async getGenres() {
    await delay(200);
    const songs = loadSongs();
    const genreMap = {};

    songs.forEach((song) => {
      song.genre.forEach((genre) => {
        if (!genreMap[genre]) genreMap[genre] = [];
        genreMap[genre].push(song);
      });
    });

    return Object.entries(genreMap)
      .map(([genre, songs]) => ({ genre, songs }))
      .sort((a, b) => a.genre.localeCompare(b.genre));
  },

  async createSong(songData) {
    await delay(400);
    const songs = loadSongs();

    const newSong = {
      ...songData,
      id: getNextId(),
      cover:
        songData.cover ||
        'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    };

    songs.push(newSong);
    localStorage.setItem('musicDB', JSON.stringify(songs));
    return newSong;
  },

  async updateSong(id, songData) {
    await delay(400);
    const songs = loadSongs();
    const index = songs.findIndex((s) => String(s.id) === String(id));
    if (index === -1) throw new Error('Song not found');

    songs[index] = { ...songs[index], ...songData };
    localStorage.setItem('musicDB', JSON.stringify(songs));
    return songs[index];
  },

  async deleteSong(id) {
    await delay(300);
    const songs = loadSongs();
    const updated = songs.filter((s) => String(s.id) !== String(id));
    localStorage.setItem('musicDB', JSON.stringify(updated));
    return { success: true };
  },

  async searchSongs(query) {
    await delay(200);
    const songs = loadSongs();
    if (!query) return songs;

    return songs.filter(
      (song) =>
        song.title.toLowerCase().includes(query.toLowerCase()) ||
        song.artist.toLowerCase().includes(query.toLowerCase()) ||
        song.album.toLowerCase().includes(query.toLowerCase()) ||
        song.genre.some((g) => g.toLowerCase().includes(query.toLowerCase()))
    );
  },

  async getAlbumById(id) {
    await delay(200);
    const album = albums.find((a) => a.id === id);
    if (!album) throw new Error('Álbum no encontrado');
    return album;
  },
};
