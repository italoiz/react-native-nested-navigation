import React from 'react';
import {View, Text} from 'react-native';

const ChatScreen: React.FC = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>{'Chat'}</Text>
    </View>
  );
};

export default ChatScreen;
