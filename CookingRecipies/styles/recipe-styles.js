import {StyleSheet} from 'react-native';
import {
    Colors
  } from 'react-native/Libraries/NewAppScreen';

module.exports = StyleSheet.create({
    header : {
      color : 'red',
    //   flex : 3
    },
    text : {
      marginTop: 10, 
      marginBottom: 10, 
      fontSize: 20, 
      fontWeight: 'bold', 
      textAlign: 'left'
    },
    username : {
      fontSize : 15,
      marginLeft : 20
    },
    prep : {
      alignSelf : 'flex-end',
      marginRight: 10
    },
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right'
    },
  });
