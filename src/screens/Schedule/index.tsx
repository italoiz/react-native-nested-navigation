import React from 'react';
import {View, Text} from 'react-native';

const ScheduleScreen: React.FC = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>{'Schedule'}</Text>
    </View>
  );
};

export default ScheduleScreen;
