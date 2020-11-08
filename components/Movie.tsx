import * as React from "react";
import { StyleSheet, Image } from "react-native";

import { Text, View } from "../components/Themed";

export interface MovieData {
  id: string;
  title: string | null;
  year: number | null;
  poster: any | null;
}

export const movie = (props: MovieData) => {
  const imageSize = 125;

  const titleElement = props.title ? (
    <Text style={styles.title}>{props.title}</Text>
  ) : null;
  const posterElement = props.poster ? (
    <Image style={styles.image} source={props.poster} />
  ) : null;
  const yearElement = props.year ? <Text>{props.year}</Text> : null;

  return (
    <View style={styles.container}>
      {titleElement}
      {yearElement}
      {posterElement}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 125,
    height: 125,
  },
});

export default movie;
