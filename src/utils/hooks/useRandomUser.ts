import {useQuery} from '@tanstack/react-query';
import {User} from '../../types/user';

interface RandomUserResponse {
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
export const useRandomUser = () => {
  return useQuery<RandomUserResponse>({
    queryKey: ['randomUser'],
    queryFn: async () => {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      return data;
    },
    staleTime: Infinity, // Prevents automatic refetching
    gcTime: Infinity, // Keeps the data cached
  });
};
