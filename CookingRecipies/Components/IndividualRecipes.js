import React, {useState, useEffect} from "react";
import {View,Text,ScrollView, Image, TouchableOpacity} from 'react-native';

let IndividualRecipes = props => {
    const [store, setStored] = useState([])

    console.log("id", props)

    useEffect(() =>{
        axios
        .get(
          `https://recipeshare-development.herokuapp.com/recipes/${props}`
        )
        .then(res => {
            setStored(res.data);
        })
        .catch(err => console.log(err));

    },[]);
    return (
     <ScrollView>
         <Text>{store.name}</Text>

        <Image 
            source={{uri : `${props.imageURL}`}}
            style={{width: 190, height: height, borderRadius: 20, paddingRight: 20 }}
            resieMode="contain"/>
        <TouchableOpacity>
                    <Button  
                    color="white"    
                    onPress={grabRecipes}
                    title="My Version"
                    accessibilityLabel="Edit"                   
                    />
        </TouchableOpacity>
        <Text>{store.likes}</Text>

        <Text>Categories</Text>
        {store.categories.map( cat => {
            return(
                <View>
                    <Text>{cat}</Text>
                </View>
            )
        })}
        {store.ingredients.map( ing => {
            return(
                <View>
                    <Text>{ing.quantity} {ing.unit}</Text>
                    <Text>{ing.name}</Text>

                </View>
            )
        })}
        {store.steps.map( step => {
            return(
                <View>

                    <Text>Step {step.ordinal} - {step.body}</Text>
                </View>
            )
        })}
        <Text>{store.notes}</Text>
        <TouchableOpacity>
            <Button  
            color="white"    
            onPress={grabRecipes}
            title="Save to MyCookBook"
            accessibilityLabel="Save"                   
            />
        </TouchableOpacity>

    </ScrollView>
    );
  };