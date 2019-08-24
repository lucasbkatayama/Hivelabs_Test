import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';

import styles from '../constants/Styles';
import { textChanged } from '../actions';
import FadeInView from '../components/FadeInView';

class ThreeScreen extends Component {
  handleTextChange(text) {
    const data = {
      prop: "one",
      value: text
    };
    this.props.textChanged(data);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerStyle} behavior="padding" enabled>
        <View style={styles.contentContainerStyle}>
          <Input
            inputContainerStyle={{ height: 50, width: 250 }}
            placeholder="Digite o texto da aba UM aqui"
            onChangeText={(text) => this.handleTextChange(text)}
            value={this.props.one}
          />
          <FadeInView
            style={styles.textContainerStyle}
            text={this.props.three}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

ThreeScreen.navigationOptions = {
  header: null,
};

const mapStateToProps = state => {
  return {
    one: state.texts.one,
    three: state.texts.three
  };
};

export default connect(mapStateToProps, { textChanged })(ThreeScreen);
