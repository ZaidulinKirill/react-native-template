import React from 'react';
import { AppBootstrapper } from '@kirz/react-native-toolkit';
import { View } from 'react-native';
import { Home } from 'screens/Home';

export default function Root() {
  return (
    <AppBootstrapper>
      <Home />
      <View style={{ flex: 1, backgroundColor: 'pink' }} />
    </AppBootstrapper>
  );
}
