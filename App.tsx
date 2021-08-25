import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNav from './src/navigation'
import 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context"

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <RootNav />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
