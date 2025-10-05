import React, { useState, ReactNode } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";

interface CustomInputProps extends TextInputProps {
  // UI
  label?: string;
  error?: string;
  helperText?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
  errorStyle?: TextStyle;
  helperStyle?: TextStyle;

  // Design System
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
  placeholderColor?: string;
  radius?: number;
  fontSize?: number;
  inputHeight?: number;
  paddingHorizontal?: number;
  variant?: "outlined" | "filled";

  // Icons
  leftIcon?:ReactNode;
  rightIcon?:ReactNode;
  onRightIconPress?: () => void;
  leftIconEnabled?: boolean;
  rightIconEnabled?: boolean;

  // Behaviors
  disabled?: boolean;
  secureToggle?: boolean;
  secureOnIcon?: ReactNode;
  secureOffIcon?: ReactNode;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  error,
  helperText,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  helperStyle,
  borderColor = "#ccc",
  backgroundColor = "#fff",
  textColor = "#000",
  placeholderColor = "#888",
  radius = 8,
  fontSize = 16,
  inputHeight = 48,
  paddingHorizontal = 8,
  variant = "outlined",
  leftIcon,
  rightIcon,
  onRightIconPress,
  leftIconEnabled = true,
  rightIconEnabled = true,
  disabled = false,
  secureToggle = false,
  secureTextEntry,
  secureOnIcon,
  secureOffIcon,
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(!!secureTextEntry);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

      <View
        style={[
          styles.inputWrapper,
          {
            borderWidth: variant === "outlined" ? 1 : 0,
            borderColor: variant === "outlined" ? borderColor : "transparent",
            backgroundColor: variant === "filled" ? backgroundColor : "transparent",
            borderRadius: radius,
            opacity: disabled ? 0.6 : 1,
            paddingHorizontal,
          },
        ]}
      >
        {leftIconEnabled && leftIcon && <View style={styles.icon}>{leftIcon}</View>}

        <TextInput
          style={[
            styles.input,
            {
              color: textColor,
              fontSize,
              height: inputHeight,
            },
            inputStyle,
          ]}
          placeholderTextColor={placeholderColor}
          editable={!disabled}
          secureTextEntry={secureToggle ? hidePassword : secureTextEntry}
          {...props}
        />

        {secureToggle ? (
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setHidePassword(!hidePassword)}
            activeOpacity={0.7}
          >
            {hidePassword
              ? secureOnIcon || <Text style={styles.defaultIcon}>👁️</Text>
              : secureOffIcon || <Text style={styles.defaultIcon}>🙈</Text>}
          </TouchableOpacity>
        ) : (
          rightIconEnabled &&
          rightIcon && (
            <TouchableOpacity
              style={styles.icon}
              onPress={onRightIconPress}
              activeOpacity={0.7}
            >
              {rightIcon}
            </TouchableOpacity>
          )
        )}
      </View>

      {helperText && !error && (
        <Text style={[styles.helper, helperStyle]}>{helperText}</Text>
      )}
      {error && <Text style={[styles.error, errorStyle]}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: "#333",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingHorizontal: 8,
  },
  icon: {
    paddingHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  defaultIcon: {
    fontSize: 16,
    color: "#666",
  },
  helper: {
    color: "#666",
    marginTop: 4,
    fontSize: 12,
  },
  error: {
    color: "red",
    marginTop: 4,
    fontSize: 12,
  },
});

export default CustomInput;
