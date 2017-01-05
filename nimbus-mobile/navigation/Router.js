import {
  createRouter,
  NavigationProvider,
} from '@exponent/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import FriendsScreen from '../screens/FriendsScreen';
import FriendProfileScreen from '../screens/FriendProfileScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AddPinScreen from '../screens/AddPinScreen';
import PinScreen from '../screens/PinScreen';
import RootNavigation from './RootNavigation';
import LoginScreen from '../screens/LoginScreen';

export default createRouter(() => ({
  home: () => HomeScreen,
  friends: () => FriendsScreen,
  profile: () => ProfileScreen,
  settings: () => SettingsScreen,
  addPin: () => AddPinScreen,
  login: () => LoginScreen,
  addPin: () => AddPinScreen,
  rootNavigation: () => RootNavigation,
  pinView: () => PinScreen,
  friendProfile: () => FriendProfileScreen,
}));
