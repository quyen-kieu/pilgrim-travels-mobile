import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

import {
  Colors,
  Spacing,
} from '../theme';

export default function AppPasswordInput({
  label,
  value,
  onChangeText,
  error = false,
  errorText = '',
  required = false,
  autoCorrect = false,
  style,
  ...props
}) {
  const [secure, setSecure] = useState(true);

  return (
    <View style={[styles.container, style]}>
      <TextInput
        mode="outlined"
        label={required ? `${label} *` : label}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secure}
        autoCorrect={autoCorrect}
        textContentType="password"
        error={error}
        outlineColor={Colors.border}
        activeOutlineColor={Colors.primary}
        style={styles.input}
        right={
          <TextInput.Icon
            icon={secure ? 'eye-off' : 'eye'}
            onPress={() => setSecure(!secure)}
          />
        }
        {...props}
      />

      <HelperText
        type="error"
        visible={error}
      >
        {errorText}
      </HelperText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.md,
  },

  input: {
    backgroundColor: Colors.surface,
  },
});