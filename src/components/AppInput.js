import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

import {
  Colors,
  Spacing,
} from '../theme';

export default function AppInput({
  label,
  value,
  onChangeText,
  error = false,
  errorText = '',
  required = false,
  keyboardType = 'default',
  autoCapitalize = 'none',
  autoCorrect = false,
  textContentType = 'none',
  style,
  ...props
}) {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        mode="outlined"
        label={required ? `${label} *` : label}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        textContentType={textContentType}
        error={error}
        outlineColor={Colors.border}
        activeOutlineColor={Colors.primary}
        style={styles.input}
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