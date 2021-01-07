// import React from 'react';
// import {View, Text} from 'react-native';

// const TripsScreen: React.FC = () => {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text style={{fontSize: 18, fontWeight: 'bold'}}>{'Trips'}</Text>
//     </View>
//   );
// };

// export default TripsScreen;

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const TripsScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>{'Trips'}</Text>

      <TouchableOpacity
        style={{padding: 8, backgroundColor: '#ccc', borderRadius: 4}}
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate('TripOngoing.Pickup');
        }}>
        <Text>See trip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TripsScreen;
