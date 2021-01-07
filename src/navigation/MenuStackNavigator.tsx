import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {MenuScreen} from '../screens';

const MenuStack = createStackNavigator();

const MenuStackNavigator: React.FC = () => {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen name="Menu" component={MenuScreen} />
    </MenuStack.Navigator>
  );
};

export default MenuStackNavigator;
