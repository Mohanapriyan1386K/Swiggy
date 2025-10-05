import { View, StyleSheet,Image,Text } from 'react-native'
import React from 'react'
import CustomButton from '../CoustomComponent/CustomButton'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './Type';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {imagesConstent} from "../Utility/Constents"




type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: HomeProps) => {
  const handleNavigate = () => {
    navigation.navigate("Menu");
  };

  return (
    <View style={styles.container}>
      <Image source={imagesConstent.MapImage} style={styles.ImageStyle} />
      <CustomButton
        containerStyle={styles.buttonStyle}
        onPress={handleNavigate}
        title="ACCESS LOCATION"
      />
      <Text style={styles.infoText} >
          FOOD WILL ACCESS YOUR LOCATION ONLY WHILE USING THE APP
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    gap:20,
  },
  buttonStyle: {
    width: "80%",
    backgroundColor: "#ff7622",
    fontFamily:"Anton-Regular"
  },
  ImageStyle:{
    width:300,
    height:300,
  },
  infoText: {
    textAlign: "center",
    color: "#555",
    fontSize: 14,
    paddingHorizontal: 40,
    
  },

});
