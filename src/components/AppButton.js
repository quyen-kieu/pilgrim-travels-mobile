import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import {
  Colors,
  Spacing,
} from '../theme';

export default function AppButton({
  title,
  onPress,
  mode = 'contained',
  disabled = false,
  loading = false,
  style,
  contentStyle,
  ...props
}) {
  return (
    <Button
      mode={mode}
      onPress={onPress}
      disabled={disabled}
      loading={loading}
      buttonColor={
        mode === 'contained'
          ? Colors.primary
          : undefined
      }
      textColor={
        mode === 'contained'
          ? Colors.white
          : Colors.primary
      }
      uppercase={false}
      style={[styles.button, style]}
      contentStyle={[styles.content, contentStyle]}
      {...props}
    >
      {title}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
  },

  content: {
    paddingVertical: Spacing.sm,
  },
});