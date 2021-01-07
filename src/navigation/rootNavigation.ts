import React from 'react';
import {NavigationContainerRef, CommonActions} from '@react-navigation/native';

export const rootNavigationRef = React.createRef<NavigationContainerRef>();

export function navigateNestedFromRoot(route: {
  key?: string;
  name: string;
}): void {
  rootNavigationRef.current?.dispatch(
    CommonActions.reset({
      ...route,
      index: 0,
      routes: [{name: 'Root.Home'}],
    }),
  );
}
