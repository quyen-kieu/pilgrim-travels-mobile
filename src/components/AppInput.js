import React from "react";
import { TextInput } from "react-native-paper";
import { Colors } from "../theme";

export default function AppInput({
  label,
  value,
  onChangeText,
  keyboardType = "default",
  autoCapitalize = "none",
  ...props
}) {
  return (
    <TextInput
      mode="outlined"
      label={label}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      outlineColor={Colors.border}
      activeOutlineColor={Colors.primary}
      autoCorrect={false}
      textContentType="none"
      {...props}
    />
  );
}
