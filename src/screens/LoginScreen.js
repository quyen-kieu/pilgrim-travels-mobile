import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

import { Text } from 'react-native-paper';

import {
  Colors,
  Spacing,
} from '../theme';

import {
  AppButton,
  AppInput,
  AppPasswordInput,
  AuthHeader,
  AuthLayout,
} from '../components';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthLayout>
      <AuthHeader
        title="Welcome Back"
        subtitle="Sign in to continue your pilgrimage."
      />

      <AppInput
        label="Email"
        required
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        textContentType="emailAddress"
      />

      <AppPasswordInput
        label="Password"
        required
        value={password}
        onChangeText={setPassword}
      />

      <Pressable
        onPress={() =>
          navigation.navigate('ForgotPassword')
        }
      >
        <Text style={styles.forgot}>
          Forgot Password?
        </Text>
      </Pressable>

      <View style={styles.button}>
        <AppButton
          title="Log In"
          onPress={() => {}}
        />
      </View>

      <View style={styles.footer}>
        <Text>
          Don't have an account?
        </Text>

        <Pressable
          onPress={() =>
            navigation.navigate('Register')
          }
        >
          <Text style={styles.register}>
            Register
          </Text>
        </Pressable>
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  forgot: {
    textAlign: 'right',
    color: Colors.primary,
    marginBottom: Spacing.lg,
  },

  button: {
    marginTop: Spacing.sm,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.xl,
  },

  register: {
    marginLeft: Spacing.sm,
    color: Colors.primary,
    fontWeight: '700',
  },
});