import React, { Component } from 'react';
import { Text, TextInput, View, Image, StyleSheet,} from 'react-native';

export default class CreateRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      value: ''

    };
  }

  render() {
    return (
      <View style={{padding: 40}}>
        <Text style = {styles.header}>Create Recipe</Text>
        <View style = {{flexDirection: "row", padding: 15}}>
          
        <Image
          style={{width: 150, height: 150}}
          resizeMode = 'contain'
          source={{uri : 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2018/05/vegan-chilli.jpg'}}
        />

        <View>
        <Text style = {styles.titleText} >Honey Pancakes</Text>
          <Text style = {styles.baseText}>Recipe by: Lana Smith 
          {/* {this.state.username} */}
          </Text>
        </View>
          

        </View>
        
        <Text>Recipe Name</Text>
        <TextInput 
        multiline = {true}
        numberOfLines = {5}
        maxLength = {55}
        placeholder='Just a placeholder for Recipe Name'
        value = {this.state.value}
        onChangeText = {(value) => this.setState({value})}/>
        <Text style= {{alignSelf:'flex-end'}}>
          {this.state.value.length}/55
        </Text>

        <TextInput
          style={{height: 40}}
          // label = "Recipe Name"
          placeholder="Just a placeholder"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Cuisine"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>

    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontSize:15,
  },
  header: {
    fontSize:30,
    fontWeight:'bold'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});