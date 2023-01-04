import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AlertsProvider } from '@kirz/react-native-toolkit';
import Root from './src/Root';

export default function App() {
  return (
    <SafeAreaProvider>
      <AlertsProvider>
        <Root />
      </AlertsProvider>
    </SafeAreaProvider>
  );
}
