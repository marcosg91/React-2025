export type RawSong = {
  id: number;
  title: string;
  artist: string;
  album: string;
  year: number;
  genre: string[];
  duration: number;
  rating: number;
  cover: string;
  description: string;
};

export type Song = {
  id: string;
  title: string;
  artist: string;
  album: string;
  year: number;
  genre: string[];
  duration: string;
  rating: number;
  description: string;
  image: string;
  audioUrl: string;
};

export type Album = {
  id: string;
  title: string;
  artist: string;
  year: number;
  cover: string;
  genre: string[];
  songs: Song[];
};
