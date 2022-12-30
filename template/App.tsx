import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { hide } from 'react-native-bootsplash';

export default function App() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      hide();
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>
          Hello, world
        </Text>
      </View>
    </SafeAreaView>
  );
}
