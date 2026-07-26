import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import {
  Colors,
  Spacing,
} from '../theme';

import {
  AppButton,
  AppCard,
  AppInput,
  AppLogo,
  AppPasswordInput,
} from '../components';

export default function TestScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <AppCard>

        <AppLogo />

        <View style={styles.space} />

        <AppInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <View style={styles.smallSpace} />

        <AppPasswordInput
          label="Password"
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.space} />

        <AppButton
          title="Continue"
          onPress={() => console.log('Continue pressed')}
        />

      </AppCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: Spacing.lg,
    backgroundColor: Colors.background,
  },

  space: {
    height: Spacing.lg,
  },

  smallSpace: {
    height: Spacing.md,
  },
});