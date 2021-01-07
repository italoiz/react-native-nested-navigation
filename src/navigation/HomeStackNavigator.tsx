import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {HomeScreen} from '../screens';
import {makeTripOngoingRoutes} from './CommonRoutes/tripOngoingRoutes';

export const HomeStack = createStackNavigator();

const HomeStackNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      {makeTripOngoingRoutes(HomeStack)}
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
