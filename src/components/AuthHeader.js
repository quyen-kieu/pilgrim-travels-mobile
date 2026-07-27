import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import {
  Colors,
  Spacing,
  Typography,
} from '../theme';

export default function AuthHeader({
  title,
  subtitle,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>

      {subtitle ? (
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.xl,
    marginBottom: Spacing.xl,
  },

  title: {
    fontSize: Typography.h2,
    fontWeight: '700',
    color: Colors.text,
  },

  subtitle: {
    marginTop: Spacing.sm,
    fontSize: Typography.body,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
});