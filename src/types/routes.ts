import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Routes} from '../utils/constants';
import {User} from './user';

export type RouteParams = {
  route: {
    params: {
      selectedUser: User;
    };
  };
};

export type RoutesParamsList = {
  [Routes.HOME_SCREEN]: undefined;
  [Routes.SEND_AGAIN]: {
    selectedUser: User;
  };
  [Routes.SUCCESS_SCREEN]: {
    selectedUser: User;
    amount: string;
    notes: string;
  };
};

export type NavigationProp = NativeStackNavigationProp<any, Routes>;
