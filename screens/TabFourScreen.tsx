import * as React from "react";
import { StyleSheet, Button, Image, Dimensions, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { Text, View } from "../components/Themed";

const imageOrView = (image, style) =>
  image === undefined ? (
    <View style={style} />
  ) : (
    <Image style={style} source={{ uri: image }} />
  );

const imagesComponent = (images) => {
  return (
    <View style={styles.imagesContainer}>
      <View style={styles.leftColumn}>
        {imageOrView(images[0], styles.one)}
        {imageOrView(images[1], styles.one)}
        {imageOrView(images[2], styles.one)}
        {imageOrView(images[3], styles.one)}
      </View>
      <View style={styles.rightColumn}>
        {imageOrView(images[4], styles.three)}
        <View style={styles.bottomRight}>
          {imageOrView(images[5], styles.one)}
          {imageOrView(images[6], styles.one)}
          {imageOrView(images[7], styles.one)}
        </View>
      </View>
    </View>
  );
};

const TabFourScreen = ({ navigation }) => {
  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
      }
    })();
  }, []);

  const [images, setImages] = React.useState([]);

  return (
    <View style={styles.container}>
      {imagesComponent(images)}
      <Button
        title="Add Image"
        onPress={async () => {
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
            let new_images = [...images, result.uri];
            setImages(new_images);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  imagesContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "85%",
  },
  leftColumn: {
    flexDirection: "column",
    width: "25%",
    display: "flex",
  },
  bottomRight: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    height: "25%",
  },
  one: {
    flex: 1,
  },
  three: {
    height: "75%",
  },
  rightColumn: {
    width: "75%",
    flexDirection: "column",
    display: "flex",
  },
});

export default TabFourScreen;
