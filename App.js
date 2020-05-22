import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SvgComponent from "./svgComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <SvgComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
