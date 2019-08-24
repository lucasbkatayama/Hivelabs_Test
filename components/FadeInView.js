import React from 'react';
import { Animated, Text, View } from 'react-native';

import styles from '../constants/Styles';

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
  }

  async componentWillReceiveProps() {
    await this.setState({
      fadeAnim: new Animated.Value(0)
    });
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 5000,
      }
    ).start();
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAnim,
        }}
      >
        <Text style={styles.textStyle}>{this.props.text}</Text>
      </Animated.View>
    );
  }
}

export default FadeInView;
