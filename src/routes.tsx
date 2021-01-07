import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootNavigator from './navigation/RootTabNavigator';
import {rootNavigationRef} from './navigation/rootNavigation';

const AppRoutes: React.FC = () => (
  <NavigationContainer ref={rootNavigationRef}>
    <RootNavigator />
  </NavigationContainer>
);

export default AppRoutes;
