import React from 'react';

import {
  TripOngoingPickupScreen,
  TripOngoingDocumentsScreen,
  ChatScreen,
} from '../../screens';

export const makeTripOngoingRoutes = (Route: any) => {
  return (
    <React.Fragment>
      <Route.Screen
        name="TripOngoing.Pickup"
        component={TripOngoingPickupScreen}
      />
      <Route.Screen
        name="TripOngoing.Documents"
        component={TripOngoingDocumentsScreen}
      />
      <Route.Screen name="TripOngoing.Chat" component={ChatScreen} />
    </React.Fragment>
  );
};
