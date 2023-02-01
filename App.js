import React from 'react';
import {StyleSheet} from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import AppNavigation from './src/RootContainer';

const RootContainer = () => {
  return (
    <SafeAreaProvider
      style={styles.container}
      initialMetrics={initialWindowMetrics}>
      <AppNavigation />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default RootContainer;
