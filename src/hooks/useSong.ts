import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { getSong, getSongs } from '../services/musicService';
import type { Song } from '../types/music';

export function useSong(
  songId: string,
  options?: UseQueryOptions<Song, Error>
) {
  return useQuery<Song, Error>({
    queryKey: ['song', songId],
    queryFn: () => getSong(songId),
    enabled: !!songId,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    ...options,
  });
}

export function useSongs(options?: UseQueryOptions<Song[], Error>) {
  return useQuery<Song[], Error>({
    queryKey: ['songs'],
    queryFn: getSongs,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    ...options,
  });
}
