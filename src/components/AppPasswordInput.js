import React, { useState } from "react";
import { TextInput } from "react-native-paper";

import { Colors } from "../theme";

export default function AppPasswordInput({
  label,
  value,
  onChangeText,
  ...props
}) {
  const [secure, setSecure] = useState(true);

  return (
    <TextInput
      mode="outlined"
      label={label}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secure}
      outlineColor={Colors.border}
      activeOutlineColor={Colors.primary}
      autoCorrect={false}
      textContentType="password"
      right={
        <TextInput.Icon
          icon={secure ? "eye-off" : "eye"}
          onPress={() => setSecure(!secure)}
        />
      }
      {...props}
    />
  );
}
