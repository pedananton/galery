import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store/store";
import { SafeAreaView, StyleSheet, View, Button } from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import GalleryScreen from "./app/screens/GalleryScreen";
export default function App() {
  console.log(useDimensions());
  return (
    <Provider store={store}>
      <GalleryScreen />
    </Provider>
  );
}
