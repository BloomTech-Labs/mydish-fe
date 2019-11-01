import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    tagButtons: {
        borderRadius: 50,
        width: 105,
        alignItems: 'center',
        height: 40,
        paddingTop: 10,
        marginBottom: 8,
        marginRight: 5,
        backgroundColor: '#8FCC70'
    },
    tagButtonPressed: {
        borderRadius: 50,
        width: 105,
        alignItems: 'center',
        height: 40,
        paddingTop: 10,
        marginBottom: 8,
        marginRight: 5,
        backgroundColor: '#3BA405'
    },
    baseText:
    {
      //   Recipe by: 
      fontSize: 15,
    },
    header: {
      fontSize: 30,
      fontWeight: 'bold',
      alignSelf: 'center'
  
    },
    titleText: {
      //   Recipe Title Name
      fontSize: 20,
      fontWeight: 'bold',
    },
    container: {
      //   Typically for inputs
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: 'black',
      height: 40
    },
    dropdownText: {
      //    Text shown before clicking the dropdown
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: 'black',
      fontSize: 18,
      width: 350,
      marginTop: 15
    },
    dropdown: {
      //    Text shown in dropdown bar
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: 'black',
      fontSize: 15,
      width: 120,
      marginTop: 15
    }

})

module.exports = styles