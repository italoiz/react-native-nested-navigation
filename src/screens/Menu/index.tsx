import React from 'react';
import {View, Text} from 'react-native';

const ProfileMenuScreen: React.FC = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>{'Menu'}</Text>
    </View>
  );
};

export default ProfileMenuScreen;
