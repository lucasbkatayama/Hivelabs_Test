import React from 'react';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import OneScreen from '../screens/OneScreen';
import TwoScreen from '../screens/TwoScreen';
import ThreeScreen from '../screens/ThreeScreen';


const OneStack = createStackNavigator(
  {
    Home: OneScreen,
  },
);

OneStack.navigationOptions = {
  tabBarLabel: 'Um',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='rocket'
    />
  ),
};

OneStack.path = '';

const TwoStack = createStackNavigator(
  {
    Links: TwoScreen,
  },
);

TwoStack.navigationOptions = {
  tabBarLabel: 'Dois',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='bug' />
  ),
};

TwoStack.path = '';

const ThreeStack = createStackNavigator(
  {
    Settings: ThreeScreen,
  },
);

ThreeStack.navigationOptions = {
  tabBarLabel: 'Três',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='coffee' />
  ),
};

ThreeStack.path = '';

const tabNavigator = createMaterialTopTabNavigator({
  OneStack,
  TwoStack,
  ThreeStack,
}, {
  tabBarOptions: {
    showIcon: true,
    style: { paddingTop: 25 }
  }
});

tabNavigator.path = '';

export default tabNavigator;
