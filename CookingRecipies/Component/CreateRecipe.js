import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  dish: t.String,
  ingredients: t.String,
  directions: t.String,
  terms: t.Boolean
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    dish: {
      error: 'Name your Recipe',
      label: 'Recipe Name'
    },
    ingredients: {
      error: 'Add ingredients so others know what they should have.'
    },
    directions: {
      error: 'Add instructions for others to follow.'
    },
    terms: {
      label: 'Save to CookBook',
    },
  },
  stylesheet: formStyles,
};

export default class App extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
        />
        <Button
          title="Submit Recipe"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});