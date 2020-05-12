import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import theme from '../styles/theme.style';

export default Picker = ({ handleChange, unit, highlighted, onClose }) => {
  const placeholder = {
    label: 'unit',
  };

  const styleObj = {
    fontSize: 16,
    height: theme.INPUT_HEIGHT,
    paddingLeft: 10,
    width: 100,
    borderWidth: theme.INPUT_BORDER_WIDTH,
    borderColor: highlighted.unit
      ? theme.INPUT_BORDER_HIGHLIGHT_COLOR
      : theme.INPUT_BORDER_COLOR,
    borderRadius: theme.INPUT_BORDER_RADIUS,
    color: 'black',
  };

  return (
    <RNPickerSelect
      onClose={onClose}
      placeholder={placeholder}
      onValueChange={(value) => handleChange('units', value)}
      value={unit}
      useNativeAndroidPickerStyle={false}
      style={{
        inputIOS: styleObj,
        inputAndroid: styleObj,
      }}
      items={[
        { label: 'tsp', value: 'teaspoon' },
        { label: 'tbsp', value: 'tablespoon' },
        { label: 'cup', value: 'cup' },
        { label: 'g', value: 'gram' },
        { label: 'kg', value: 'kilogram' },
        { label: 'mg', value: 'milligram' },
        { label: 'oz', value: 'ounce' },
        { label: 'pinch', value: 'pinch' },
        { label: 'L', value: 'liter' },
        { label: 'mL', value: 'milliliter' },
        { label: 'can', value: 'can' },
        { label: 'whole', value: 'whole' },
        { label: 'pint', value: 'pint' },
        { label: 'package', value: 'package' },
        { label: 'lbs', value: 'pound' },
      ]}
    />
  );
};
