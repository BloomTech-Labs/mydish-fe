import {StyleSheet} from 'react-native';
import {
    Colors
  } from 'react-native/Libraries/NewAppScreen';

module.exports = StyleSheet.create({
    header : {
      color : 'red'
    },
    text : {
      marginTop: 10, 
      marginBottom: 10, 
      fontSize: 20, 
      fontWeight: 'bold', 
      textAlign: 'left',
      width: 150
    },
    username : {
      fontSize : 15
    },
    usercardTxt : {
      flex: 1, 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      borderTopWidth: 5, 
      borderBottomWidth: 5
    }, 
    prep : {
      alignSelf: 'flex-end',
      marginStart: -40
    }
  });
