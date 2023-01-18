import React from 'react';
import { AppBootstrapper } from '@kirz/react-native-toolkit';
import { Home } from 'screens/Home';

export default function Root() {
  return (
    <AppBootstrapper>
      <Home />
    </AppBootstrapper>
  );
}
