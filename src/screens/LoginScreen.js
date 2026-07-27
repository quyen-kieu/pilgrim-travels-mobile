import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { Colors, Spacing } from "../theme";

import {
  AppButton,
  AppInput,
  AppPasswordInput,
  AuthHeader,
  AuthLayout,
} from "../components";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validate()) {
      return;
    }

    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);

    console.log("Login would happen here.");
  };

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
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={(text) => {
          setEmail(text);

          if (errors.email) {
            setErrors((prev) => ({
              ...prev,
              email: undefined,
            }));
          }
        }}
        error={!!errors.email}
        errorText={errors.email}
      />

      <AppPasswordInput
        label="Password"
        required
        value={password}
        onChangeText={(text) => {
          setPassword(text);

          if (errors.password) {
            setErrors((prev) => ({
              ...prev,
              password: undefined,
            }));
          }
        }}
        error={!!errors.password}
        errorText={errors.password}
      />

      <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </Pressable>

      <View style={styles.button}>
        <AppButton title="Log In" loading={loading} onPress={handleLogin} />
      </View>

      <View style={styles.footer}>
        <Text>Don't have an account?</Text>

        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.register}>Register</Text>
        </Pressable>
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  forgot: {
    textAlign: "right",

    color: Colors.primary,

    marginBottom: Spacing.lg,
  },

  button: {
    marginTop: Spacing.sm,
  },

  footer: {
    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",

    marginTop: Spacing.xl,
  },

  register: {
    marginLeft: Spacing.sm,

    color: Colors.primary,

    fontWeight: "700",
  },
});
