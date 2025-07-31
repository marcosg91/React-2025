// Base de datos de canciones
const songs = [
  {
    id: 1,
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    album: 'A Night at the Opera',
    year: 1975,
    genre: ['Rock', 'Progressive Rock'],
    duration: 355,
    rating: 9.5,
    cover: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A groundbreaking rock opera...',
  },
  {
    id: 2,
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    album: 'Thriller',
    year: 1982,
    genre: ['Pop', 'R&B'],
    duration: 294,
    rating: 9.2,
    cover: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: "One of the most iconic pop songs...",
  },
  {
    id: 3,
    title: 'Hotel California',
    artist: 'Eagles',
    album: 'Hotel California',
    year: 1976,
    genre: ['Rock', 'Soft Rock'],
    duration: 391,
    rating: 9.0,
    cover: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A mysterious and haunting song...',
  },
  {
    id: 4,
    title: 'Imagine',
    artist: 'John Lennon',
    album: 'Imagine',
    year: 1971,
    genre: ['Rock', 'Pop'],
    duration: 183,
    rating: 8.9,
    cover: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A powerful anthem for peace...',
  },
  {
    id: 5,
    title: 'Like a Rolling Stone',
    artist: 'Bob Dylan',
    album: 'Highway 61 Revisited',
    year: 1965,
    genre: ['Folk Rock', 'Rock'],
    duration: 369,
    rating: 8.8,
    cover: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A revolutionary song...',
  },
  {
    id: 6,
    title: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    album: 'Nevermind',
    year: 1991,
    genre: ['Grunge', 'Alternative Rock'],
    duration: 301,
    rating: 8.7,
    cover: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'The anthem that defined a generation...',
  },
  {
    id: 7,
    title: "What's Going On",
    artist: 'Marvin Gaye',
    album: "What's Going On",
    year: 1971,
    genre: ['Soul', 'R&B'],
    duration: 233,
    rating: 9.1,
    cover: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A socially conscious masterpiece...',
  },
  {
    id: 8,
    title: 'Purple Haze',
    artist: 'Jimi Hendrix',
    album: 'Are You Experienced',
    year: 1967,
    genre: ['Psychedelic Rock', 'Hard Rock'],
    duration: 167,
    rating: 8.6,
    cover: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'A psychedelic rock classic...',
  },
];

// Generar ID nuevo
export const getNextId = () => {
  return Math.max(...songs.map((s) => s.id)) + 1;
};

// Base de datos de álbumes — relaciona por título del álbum
const albums = [
  {
    id: '1',
    title: 'A Night at the Opera',
    artist: 'Queen',
    year: 1975,
    genre: ['Rock'],
    cover: songs.find((s) => s.album === 'A Night at the Opera')?.cover || '',
    songs: songs.filter((s) => s.album === 'A Night at the Opera'),
  },
  {
    id: '2',
    title: 'Thriller',
    artist: 'Michael Jackson',
    year: 1982,
    genre: ['Pop', 'R&B'],
    cover: songs.find((s) => s.album === 'Thriller')?.cover || '',
    songs: songs.filter((s) => s.album === 'Thriller'),
  },
  {
    id: '3',
    title: 'Hotel California',
    artist: 'Eagles',
    year: 1976,
    genre: ['Rock'],
    cover: songs.find((s) => s.album === 'Hotel California')?.cover || '',
    songs: songs.filter((s) => s.album === 'Hotel California'),
  },
  // Agregá más si querés
];

// Exportar con nombres correctos
export { songs, albums };
