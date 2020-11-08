import React from "react";
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ListItem from "../components/ListItem";

//<ListItem />;
const renderItem = () => (
  <ListItem
  // id={item.id}
  // thumbnailUrl={item.urls.small}
  // regularUrl={item.urls.regular}
  // authorName={item.user.name}
  // navigate={this.goToImageScreen}
  />
);

function GalleryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        // data={DATA}
        // renderItem={renderItem}
        // keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default GalleryScreen;
