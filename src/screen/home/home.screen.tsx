import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface componentNameProps {}

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
