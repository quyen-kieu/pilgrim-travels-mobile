import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";

import { Colors, Spacing } from "../theme";

import AppCard from "./AppCard";
import AppLogo from "./AppLogo";

export default function AuthLayout({ children }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          <AppCard style={styles.card}>
            <AppLogo />

            {children}
          </AppCard>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  keyboard: {
    flex: 1,
  },

  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    padding: Spacing.lg,
  },

  card: {
    paddingVertical: Spacing.xl,
  },
});
