import React, { Component } from 'react';
import {
  Button,
  TextInput,
  View,
} from 'react-native';

export default class SampleForm extends Component {
  constructor(params) {
    super(params);
    this.state = { inputText: '' };
  }

  handleChangeText(text) {
    this.setState({ inputText: text });
  }

  handleSend() {
    const { inputText } = this.state;
    const { onSend } = this.props;

    if (onSend) {
      onSend(inputText);
    }

    this.setState({ inputText: '' });
  }

  render() {
    const { inputText } = this.state;
    return (
      <View>
        <TextInput
          value={inputText}
          testID="messageText"
          onChangeText={text => this.handleChangeText(text)}
        />
        <Button
          title="Send"
          testID="sendButton"
          onPress={() => this.handleSend()}
        />
      </View>
    );
  }
}