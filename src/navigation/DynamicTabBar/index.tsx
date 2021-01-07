import React from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {rootNavigationRef} from '../rootNavigation';
import {
  GestureResponderEvent,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationHelpers, Route} from '@react-navigation/native';
import {BottomTabNavigationHelpers} from '@react-navigation/bottom-tabs/lib/typescript/src/types';

type CommonTabBarParams = {
  navigation?: NavigationHelpers<
    Record<string, object | undefined>,
    BottomTabNavigationHelpers
  >;
  currentRoute?: Route<string, object | undefined>;
};

type IconButtonProps = {
  name: string;
  onPress?: (e: GestureResponderEvent) => void;
  focused?: boolean;
};

const IconButton: React.FC<IconButtonProps> = ({name, onPress, focused}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Icon name={name} size={24} color={focused ? 'white' : 'black'} />
    </View>
  </TouchableWithoutFeedback>
);

const DefaultTabBar: React.FC<CommonTabBarParams> = ({
  navigation,
  currentRoute,
}) => (
  <React.Fragment>
    <IconButton
      name="home"
      focused={['Home', 'Root.Home'].includes(currentRoute?.name ?? '')}
      onPress={() => {
        navigation?.reset({
          index: 0,
          routes: [{name: 'Root.Home'}],
        });
      }}
    />
    <IconButton
      name="calendar"
      focused={currentRoute?.name.replace('Root.', '') === 'Schedule'}
      onPress={() => {
        navigation?.navigate('Root.Schedule');
      }}
    />
    <IconButton
      name="location"
      focused={currentRoute?.name.replace('Root.', '') === 'Trips'}
      onPress={() => {
        navigation?.navigate('Root.Trips');
      }}
    />
    <IconButton
      name="menu"
      focused={currentRoute?.name.replace('Root.', '') === 'Menu'}
      onPress={() => {
        navigation?.navigate('Root.Menu');
      }}
    />
  </React.Fragment>
);

const TripOngoingTabBar: React.FC<CommonTabBarParams> = ({
  navigation,
  currentRoute,
}) => (
  <React.Fragment>
    <IconButton
      name="home"
      onPress={() => {
        navigation?.reset({
          index: 0,
          routes: [{name: 'Root.Home'}],
        });
      }}
    />
    <IconButton
      name="location"
      focused={currentRoute?.name === 'TripOngoing.Pickup'}
      onPress={() => {
        navigation?.navigate('TripOngoing.Pickup');
      }}
    />
    <IconButton
      name="documents"
      focused={currentRoute?.name === 'TripOngoing.Documents'}
      onPress={() => {
        navigation?.navigate('TripOngoing.Documents');
      }}
    />
    <IconButton
      name="chatbox-outline"
      focused={currentRoute?.name === 'TripOngoing.Chat'}
      onPress={() => {
        navigation?.navigate('TripOngoing.Chat');
      }}
    />
  </React.Fragment>
);

const getTabBarByRouteName = (
  routeName: string | undefined,
  params?: CommonTabBarParams,
) => {
  if (routeName?.startsWith('TripOngoing')) {
    return <TripOngoingTabBar {...params} />;
  }
  return <DefaultTabBar {...params} />;
};

const DynamicTabBar: React.FC<BottomTabBarProps> = ({navigation}) => {
  const currentRoute = rootNavigationRef.current?.getCurrentRoute();

  return (
    <View
      style={{
        paddingBottom: 30,
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'orange',
      }}>
      {getTabBarByRouteName(currentRoute?.name, {navigation, currentRoute})}
    </View>
  );
};

export default DynamicTabBar;
