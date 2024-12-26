import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import wallet from '../assets/icons/wallet.png';

export interface Transaction {
  id: string;
  amount: number;
  date: string;
  time: string;
  label: string;
  notes: string;
  picture?: {
    medium: string;
  };
  icon?: any;
  isSubtraction: boolean;
  isAddition?: boolean;
  referenceNumber: string;
}

interface TransactionsState {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
}

export const useTransactionsStore = create(
  persist<TransactionsState>(
    set => ({
      transactions: [
        {
          id: 'initial-deposit',
          amount: 2800,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
          label: 'Cash In',
          notes: 'Account funding',
          icon: wallet,
          isAddition: true,
          isSubtraction: false,
          referenceNumber: 'INIT0001',
        },
      ],
      addTransaction: transaction =>
        set(state => ({
          transactions: [transaction, ...state.transactions],
        })),
    }),
    {
      name: 'transactions-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
