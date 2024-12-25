import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import HeaderContainer from '../components/HeaderContainer';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import {User} from '../types/user';
import {useBalanceStore} from '../store/useBalanceStore';

type RouteParams = {
  route: {
    params: {
      selectedUser: User;
    };
  };
};

export default function SendAgainScreen({route}: RouteParams) {
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');
  const balance = useBalanceStore(state => state.balance);
  const setBalance = useBalanceStore(state => state.setBalance);
  const inputRef = useRef<TextInput>(null);
  const navigation = useNavigation();
  const {selectedUser} = route.params;

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }, []);

  const formatAmount = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    const formatted = Number(numericValue).toLocaleString('es-ES');
    setAmount(formatted);
  };

  const handlePress = () => {
    const numericAmount = Number(amount.replace(/\D/g, ''));
    if (numericAmount <= balance) {
      setBalance(balance - numericAmount);
      navigation.navigate('SuccessScreen', {
        selectedUser,
        amount,
        notes,
      });
    }
  };

  return (
    <HeaderContainer
      action="Back"
      label="Send Again"
      showBalance
      showBackButton>
      <View className="pt-5 items-center">
        <Image
          source={{uri: selectedUser.picture.large}}
          style={{width: 65, height: 65, borderRadius: 32.5}}
          resizeMode="contain"
        />
        <Text className="text-center text-sm pt-4">
          {selectedUser.name.first} {selectedUser.name.last}
        </Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className="w-full pt-6">
          <Text className="text-center text-xl">Set Amount</Text>
          <View className="flex-row items-center justify-center">
            <Text className="text-4xl font-bold">$</Text>
            <TextInput
              ref={inputRef}
              value={amount}
              onChangeText={formatAmount}
              keyboardType="numeric"
              className="text-4xl font-bold text-center w-fit"
              placeholder="0"
              maxLength={10}
            />
          </View>
          <Text className="text-lg px-5">Notes</Text>
          <TextInput
            multiline
            numberOfLines={4}
            value={notes}
            onChangeText={setNotes}
            placeholder="For food"
            className="mx-4 mt-6 px-5 bg-[#F7F7F7] rounded-xl text-base border-[1px] border-[#E6E6E6]"
            placeholderTextColor="#999"
          />
        </KeyboardAvoidingView>
      </View>
      <View className="px-5">
        <CustomButton
          label="Proceed to Transfer"
          disabled={
            !amount ||
            Number(amount.replace(/\D/g, '')) <= 0 ||
            Number(amount.replace(/\D/g, '')) > balance
          }
          onPress={handlePress}
          bgColor="bg-[#0FD08B]"
          txtColor="text-white"
        />
      </View>
    </HeaderContainer>
  );
}
