import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AppNavigator from './navigation/AppNavigator';
import Reducers from './reducers';

const store = createStore(Reducers);

export default function App(props) {
  return (
    <Provider store={ store }>
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
