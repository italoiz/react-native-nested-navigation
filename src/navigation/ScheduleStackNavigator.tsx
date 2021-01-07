import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {ScheduleScreen} from '../screens';

const ScheduleStack = createStackNavigator();

const ScheduleStackNavigator: React.FC = () => {
  return (
    <ScheduleStack.Navigator>
      <ScheduleStack.Screen name="Schedule" component={ScheduleScreen} />
    </ScheduleStack.Navigator>
  );
};

export default ScheduleStackNavigator;
