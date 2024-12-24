import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import person from '../assets/images/person.png';
import HeaderContainer from '../components/HeaderContainer';

export default function SendAgainScreen() {
  const [amount, setAmount] = useState('');
  const inputRef = useRef<TextInput>(null);

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

  return (
    <HeaderContainer
      action="Back"
      label="Send Again"
      showBalance
      showBackButton>
      <View className="pt-5 items-center">
        <Image
          source={person}
          style={{width: 65, height: 65}}
          resizeMode="contain"
        />
        <Text className="text-center text-sm pt-4">Pablo</Text>
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
            placeholder="For food"
            className="mx-4 mt-6 px-5 bg-[#F7F7F7] rounded-xl text-base border-[1px] border-[#E6E6E6]"
            placeholderTextColor="#999"
          />
        </KeyboardAvoidingView>
      </View>
      <TouchableOpacity
        disabled={!amount || Number(amount.replace(/\D/g, '')) <= 0}
        onPress={() => console.log('Submit')}
        className={`mx-4 p-4 mt-4 rounded-full ${
          !amount || Number(amount.replace(/\D/g, '')) <= 0
            ? 'bg-gray-300'
            : 'bg-[#0FD08B]'
        }`}>
        <Text className="text-white text-center text-lg font-bold">
          Proceed to Transfer
        </Text>
      </TouchableOpacity>
    </HeaderContainer>
  );
}
