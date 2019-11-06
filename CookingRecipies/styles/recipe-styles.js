import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  // masonry: { /* Masonry container */
  //   columnC: 4,
  //   column-gap: 1em,
  // },
    text : {
      marginTop: 5, 
      fontSize: 15, 
      fontWeight: 'bold', 
      textAlign: 'left',
      width: 300
    },
    username : {
      fontSize : 12
    },
    usercardTxt : {
      // flex: 1, 
      flexDirection: 'row', 
      justifyContent: 'space-between',
      // marginLeft : 5
      // borderTopWidth: 5, 
      // borderBottomWidth: 5
    }, 
    prep : {
      alignSelf: 'flex-end',
      fontSize: 12,
      marginLeft: 5
    }
  });
