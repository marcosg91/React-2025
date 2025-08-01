import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { getAlbum, getAlbums } from '../services/musicService';
import type { Album } from '../types/music';

export function useAlbum(
  albumId: string,
  options?: UseQueryOptions<Album, Error>
) {
  return useQuery<Album, Error>({
    queryKey: ['album', albumId],
    queryFn: () => getAlbum(albumId),
    enabled: !!albumId,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    ...options,
  });
}

export function useAlbums(options?: UseQueryOptions<Album[], Error>) {
  return useQuery<Album[], Error>({
    queryKey: ['albums'],
    queryFn: getAlbums,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    ...options,
  });
}