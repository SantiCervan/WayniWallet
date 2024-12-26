import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {useRandomContacts} from '../utils/hooks/useRandomContacts';
import {Routes} from '../utils/constants';
import {NavigationProp} from '../types/routes';
import {User} from '../types/user';

export default function ScrollSendAgain() {
  const navigation = useNavigation<NavigationProp>();
  const {data} = useRandomContacts(10);

  const handleUserPress = (user: User) => {
    navigation.navigate(Routes.SEND_AGAIN, {selectedUser: user});
  };

  return (
    <View className="h-32">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        className="pt-4">
        {!data?.results
          ? [...Array(6)].map((_, index) => (
              <View
                key={index}
                className="rounded-xl w-20 h-24 items-center justify-center">
                <View className="w-[65px] h-[65px] rounded-full bg-gray-300 animate-pulse" />
                <View className="w-12 h-4 mt-2 bg-gray-300 rounded animate-pulse" />
              </View>
            ))
          : data?.results?.map((user: User) => (
              <TouchableOpacity
                key={user.login.uuid}
                className="rounded-xl w-20 h-24 items-center justify-center"
                onPress={() => handleUserPress(user)}>
                <Image
                  source={{uri: user.picture.medium}}
                  style={styles.Image}
                  resizeMode="contain"
                />
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  className="text-gray-600 text-center text-base">
                  {user.name.first}
                </Text>
              </TouchableOpacity>
            ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {gap: 12},
  Image: {width: 65, height: 65, borderRadius: 32.5},
});
