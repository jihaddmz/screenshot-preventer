/// @ts-nocheck
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScreenshotPreventerView } from "screenshot-preventer";

export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <ScreenshotPreventerView >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.text}>Sensitive Content Here 👀</Text>
        </View>
      </ScreenshotPreventerView>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello there this content is not protected</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#111",
    fontSize: 20
  }
});