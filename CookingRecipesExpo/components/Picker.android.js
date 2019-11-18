
import RNPickerSelect from 'react-native-picker-select';
 
export default Picker = ({handleChange, ingredient}) => {

    const placeholder = {
        label: 'unit',
    }
    
    return (
//         <TouchableOpacity  
// style={{ height: 40, width: "19%", borderWidth: 0.8, borderColor: '#363838', borderRadius: 4, textAlign: 'center', marginLeft: "3%",  }}>
// <View style={{alignItems: "center", paddingTop: '15%'}} >
// <Text style={ ingredient.unit === '' ? {color: "#C7C7CD"} : ''}>{ingredient.unit !== '' ? ingredient.unit : "Unit"}</Text>
    <RNPickerSelect
        placeholder={placeholder}
                onValueChange={(value => handleChange(value))}
                value={ingredient.unit}
                useNativeAndroidPickerStyle={false}
                style={{ height: 40, width: "19%", borderWidth: 0.8, borderColor: '#363838', borderRadius: 4, textAlign: 'center', marginLeft: "3%",  }}
                items={[
                    { label: 'tsp', value: 'tsp' },
                    { label: 'tbsp', value: 'tbsp' },
                    { label: 'cup', value: 'cup' },
                    { label: 'g', value: 'g' },
                    { label: 'mg', value: 'mg' },
                    { label: 'oz', value: 'oz' },
                    { label: 'pinch', value: 'pinch' },
                    { label: 'L', value: 'L' },
                    { label: 'ml', value: 'ml' },
                    { label: 'can', value: 'can' },
                    { label: 'whole', value: 'whole' },
                    { label: 'pint', value: 'pint' },
                    { label: 'package', value: 'package' },
                    { label: 'lbs', value: 'lbs' },
                ]}
            />
        );
// </View>
// </TouchableOpacity>)
       
};