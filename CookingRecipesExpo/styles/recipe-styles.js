import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  // masonry: { /* Masonry container */
  //   columnC: 4,
  //   column-gap: 1em,
  // },
  // paddingBottom: "60%"
  recipeContainer : {
    flexDirection: 'row', flexWrap: 'wrap',
  },
  noRecipes : {
    padding: 20, marginTop: '50%', fontSize: 30, textAlign: 'center'
  },
  modalOuter : {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 50
  },
  modalInner : {
    alignItems: 'center', 
    borderWidth: 5, 
    borderRadius: 10, 
    backgroundColor: 'white', 
    padding: 40, 
    borderColor:"#8FCC70"
  },
    text : {
      marginTop: "3%", 
      fontSize: 13, 
      fontWeight: 'bold', 
      textAlign: 'left'
      // width: "30%"
    },
    username : {
      fontSize : 11
    },
    usercardTxt : {
      // flex: 1, 
      flexDirection: 'row', 
      justifyContent: 'space-between',
      width: "50%",
      marginBottom: "2%"
      // marginLeft : 5
      // borderTopWidth: 5, 
      // borderBottomWidth: 5
    }, 
    prep : {
      fontSize: 11,
    }
  });
