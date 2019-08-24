import React from 'react';
import { Icon } from 'react-native-elements';

export default function TabBarIcon(props) {
  return (
    <Icon
      type='font-awesome'
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? "#fff" : "#000"}
    />
  );
}
