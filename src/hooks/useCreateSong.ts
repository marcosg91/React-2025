import { useMutation, useQueryClient, type UseMutationOptions } from '@tanstack/react-query';
import { createSong } from '../services/musicService';
import type { Song } from '../types/music';

export function useCreateSong(
  options?: UseMutationOptions<Song, Error, Partial<Song>>
) {
  const queryClient = useQueryClient();

  return useMutation<Song, Error, Partial<Song>>({
    mutationFn: async (songData) => {
      const parsedYear = songData.year ? Number(songData.year) : undefined;
      return createSong({ ...songData, year: parsedYear });
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ['songs'] });
      queryClient.invalidateQueries({ queryKey: ['albums'] });
      options?.onSuccess?.(data, variables, context);
    },
    ...options,
  });
}
