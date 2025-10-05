import React from "react";
import { View, Text, Image, StyleSheet, ImageSourcePropType } from "react-native";
import CustomButton from "./CustomButton"; // your button component

interface HeaderRowProps {
  title: string;
  buttonText: string;
  onButtonPress?: () => void;
  imageSource: ImageSourcePropType;
}

const HeaderRow: React.FC<HeaderRowProps> = ({
  title,
  buttonText,
  onButtonPress,
  imageSource,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightSection}>
        <CustomButton
          title={buttonText}
          variant="text"
          onPress={onButtonPress}
          containerStyle={{ paddingRight: 0 }}
          textStyle={{ color: "gray" }}
        />
        <Image source={imageSource} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "Poppins-ExtraBoldItalic",
    color: "gray",
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default HeaderRow;
