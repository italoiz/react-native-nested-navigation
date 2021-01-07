import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeStackNavigator from './HomeStackNavigator';
import TripsStackNavigator from './TripsStackNavigator';
import MenuStackNavigator from './MenuStackNavigator';
import ScheduleStackNavigator from './ScheduleStackNavigator';
import DynamicTabBar from './DynamicTabBar';

const Root = createBottomTabNavigator();

const RootTabNavigator: React.FC = () => {
  return (
    <Root.Navigator
      tabBar={(props) => <DynamicTabBar {...props} />}
      tabBarOptions={{showLabel: false}}
      initialRouteName="Root.Home">
      <Root.Screen
        name="Root.Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: () => <Icon name="home" size={24} />,
        }}
      />
      <Root.Screen
        name="Root.Schedule"
        component={ScheduleStackNavigator}
        options={{
          tabBarIcon: () => <Icon name="calendar" size={24} />,
        }}
      />
      <Root.Screen
        name="Root.Trips"
        component={TripsStackNavigator}
        options={{
          tabBarIcon: () => <Icon name="location" size={24} />,
        }}
      />
      <Root.Screen
        name="Root.Menu"
        component={MenuStackNavigator}
        options={{
          tabBarIcon: () => <Icon name="menu-outline" size={24} />,
        }}
      />
    </Root.Navigator>
  );
};

export default RootTabNavigator;
