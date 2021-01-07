import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {TripsScreen} from '../screens';
import {makeTripOngoingRoutes} from './CommonRoutes/tripOngoingRoutes';

const TripStack = createStackNavigator();

const TripStackNavigator: React.FC = () => {
  return (
    <TripStack.Navigator>
      <TripStack.Screen name="Trips" component={TripsScreen} />
      {makeTripOngoingRoutes(TripStack)}
    </TripStack.Navigator>
  );
};

export default TripStackNavigator;
