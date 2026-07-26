import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { Colors, Typography } from "../theme";

export default function AppLogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pilgrim Travels</Text>

      <Text style={styles.subtitle}>Journey closer to God</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  title: {
    color: Colors.primary,

    fontSize: Typography.h1,

    fontWeight: "700",
  },

  subtitle: {
    marginTop: 8,

    color: Colors.textSecondary,

    letterSpacing: 0.5,
  },
});
