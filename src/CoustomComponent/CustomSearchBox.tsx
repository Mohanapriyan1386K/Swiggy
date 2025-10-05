// CustomSearchBox.tsx
import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Image,
  ImageSourcePropType,
} from 'react-native';

interface CustomSearchBoxProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  searchImage?: ImageSourcePropType; // Search icon as image
  clearImage?: ImageSourcePropType;  // Clear icon as image
  showClearButton?: boolean;
  onClear?: () => void;
  inputProps?: any; // Any other TextInput props
}

const CustomSearchBox: React.FC<CustomSearchBoxProps> = ({
  value,
  onChangeText,
  placeholder = 'Search',
  containerStyle,
  inputStyle,
  searchImage,
  clearImage,
  showClearButton = true,
  onClear,
  inputProps,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {/* Search Image */}
      <TouchableOpacity>
        {searchImage && <Image source={searchImage} style={styles.icon} resizeMode="contain" />}
      </TouchableOpacity>

      {/* Text Input */}
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor="#b6afafff" 
        value={value}
        onChangeText={onChangeText}
        {...inputProps}
      />

      {/* Clear Image */}
      {showClearButton && value.length > 0 && clearImage && (
        <TouchableOpacity onPress={onClear}>
          <Image source={clearImage} style={styles.icon} resizeMode="contain" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    height:60,
     backgroundColor:"#f6f6f6",
     
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
    fontSize: 16,
    color: '#000',
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default CustomSearchBox;
