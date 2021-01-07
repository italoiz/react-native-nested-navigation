import React from 'react';
import {View, Text} from 'react-native';

const TripOngoingPickupScreen: React.FC = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
        {'TripOngoing > Pickup'}
      </Text>
    </View>
  );
};

export default TripOngoingPickupScreen;
