import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        <AppNavigation />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
