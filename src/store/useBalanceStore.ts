import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

interface BalanceState {
  balance: number;
  setBalance: (amount: number) => void;
}

export const useBalanceStore = create(
  persist<BalanceState>(
    set => ({
      balance: 2800,
      setBalance: amount => set({balance: amount}),
    }),
    {
      name: 'balance-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
