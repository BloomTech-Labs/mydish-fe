import React, { Component } from 'react';
import { Text, TextInput, View, Image, StyleSheet, } from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';

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
      <View style={{ padding: 40 }}>
        <Text style={styles.header}>Create Recipe</Text>
        <View style={{ flexDirection: "row", padding: 15 }}>

          <Image
            style={{ width: 150, height: 150 }}
            resizeMode='contain'
            source={{ uri: 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2018/05/vegan-chilli.jpg' }}
          />

          <View>
            <Text style={styles.titleText} >Honey Pancakes</Text>
            <Text style={styles.baseText}>Recipe by: Lana Smith
          {/* {this.state.username} */}
            </Text>
          </View>


        </View>

        <Text>Recipe Name</Text>
        <TextInput
          multiline={true}
          numberOfLines={5}
          maxLength={55}
          placeholder='Just a placeholder for Recipe Name'
          value={this.state.value}
          onChangeText={(value) => this.setState({ value })} />
        <Text style={{ alignSelf: 'flex-end' }}>
          {this.state.value.length}/55
        </Text>

        <TextInput
          style={{ height: 40 }}
          // label = "Recipe Name"
          placeholder="Just a placeholder"
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>

        <ModalDropdown
          options={['Breakfast', 'Brunch', 'Gluten-Free', 'Vegan', 'Vegetarian', 'Keto']}
          defaultValue={'Course Type'}
          //  showsVerticalScrollIndicator = {true}
          style={{ padding: 15, width: 500 }}
        />

        <Text style = {{marginTop: 15}}>Cuisine</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Just a placeholder for Cuisine"
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />

        <View style={{ flexDirection: "row", padding: 15 }}>

          <ModalDropdown
            options={['5 min.', '10 min.', '15 min.', '20 min.', '30 min.', '45 min.', 'Other']}
            defaultValue={'Prep Time'}
            //  showsVerticalScrollIndicator = {true}
            style={{ padding: 15, width: 150 }}
          />

          <ModalDropdown
            options={['3-5 min.', '10-15 min.', '20-30 min.', '45-55 min.', '60 min', 'Other']}
            defaultValue={'Cook Time'}
            //  showsVerticalScrollIndicator = {true}
            style={{ padding: 15, width: 500 }}
          />

        </View>

        <View style={{ flexDirection: "row", padding: 15 }}>

          <ModalDropdown
            options={['10 min.', '25 min.', '20 min.', '30 min.', '60 min.', 'Other']}
            defaultValue={'Total Time'}
            //  showsVerticalScrollIndicator = {true}
            style={{ padding: 15, width: 150 }}
          />

          <ModalDropdown
            options={['1-2 servings', '2-3 servings', '3-5 servings', '6-8 servings', '10-12 servings', 'Others']}
            defaultValue={'Servings'}
            //  showsVerticalScrollIndicator = {true}
            style={{ padding: 15, width: 500 }}
          />

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 15,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});