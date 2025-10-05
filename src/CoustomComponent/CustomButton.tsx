import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  GestureResponderEvent,
} from "react-native";

interface CustomButtonProps {
  title?: string;
  onPress?: (event: GestureResponderEvent) => void;

  // Styles
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
  radius?: number;
  fontSize?: number;
  height?: number;
  width?: any;

  // Variants
  variant?: "contained" | "outlined" | "text";

  // Icons
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  // States
  disabled?: boolean;
  loading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title = "Button",
  onPress,
  containerStyle,
  textStyle,
  borderColor = "#007bff",
  backgroundColor = "#007bff",
  textColor = "#fff",
  radius = 8,
  fontSize = 16,
  height = 48,
  width = undefined,
  variant = "contained",
  leftIcon,
  rightIcon,
  disabled = false,
  loading = false,
}) => {
  const getBackground = () => {
    if (variant === "contained") return backgroundColor;
    if (variant === "outlined") return "transparent";
    if (variant === "text") return "transparent";
    return backgroundColor;
  };

  const getBorder = () => {
    if (variant === "outlined") return borderColor;
    return "transparent";
  };

  const getTextColor = () => {
    if (variant === "contained") return textColor;
    if (variant === "outlined") return borderColor;
    if (variant === "text") return borderColor;
    return textColor;
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        {
          backgroundColor: getBackground(),
          borderColor: getBorder(),
          borderWidth: variant === "outlined" ? 1 : 0,
          borderRadius: radius,
          height,
          width,
          opacity: disabled ? 0.6 : 1,
        },
        containerStyle,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <>
          {leftIcon && <>{leftIcon}</>}
          <Text
            style={[
              styles.text,
              {
                color: getTextColor(),
                fontSize,
              },
              textStyle,
            ]}
          >
            {title}
          </Text>
          {rightIcon && <>{rightIcon}</>}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  text: {
    fontWeight: "600",
    marginHorizontal: 6,
  },
});

export default CustomButton;
