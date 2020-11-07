import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

function GalleryScreen() {
  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require("../assets/icon.png")}
      ></ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
export default GalleryScreen;
