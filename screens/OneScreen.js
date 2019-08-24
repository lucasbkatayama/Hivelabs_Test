import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';

import styles from '../constants/Styles';
import { textChanged } from '../actions';
import FadeInView from '../components/FadeInView';

class OneScreen extends Component {
  handleTextChange(text) {
    const data = {
      prop: "two",
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
            placeholder="Digite o texto da aba DOIS aqui"
            onChangeText={(text) => this.handleTextChange(text)}
            value={this.props.two}
          />
        <FadeInView
          style={styles.textContainerStyle}
          text={this.props.one}
        />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

OneScreen.navigationOptions = {
  header: null,
};

const mapStateToProps = state => {
  return {
    one: state.texts.one,
    two: state.texts.two
  };
};

export default connect(mapStateToProps, { textChanged })(OneScreen);
