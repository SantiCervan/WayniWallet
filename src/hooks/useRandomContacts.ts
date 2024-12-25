import {useQuery} from '@tanstack/react-query';
import {RandomUserResponse} from '../types/user';

export const useRandomContacts = (count: number = 10) => {
  return useQuery<RandomUserResponse>({
    queryKey: ['randomContacts', count],
    queryFn: async () => {
      const response = await fetch(
        `https://randomuser.me/api/?results=${count}`,
      );
      const data = await response.json();
      console.log('Contacts API Response:', data);
      return data;
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });
};
