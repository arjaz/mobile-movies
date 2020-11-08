import * as React from "react";
import { StyleSheet, FlatList } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import Movie from "../components/Movie";
import { Text, View } from "../components/Themed";
import { Posters } from "../assets/images/Posters/Posters";

const loadMovies = () => {
  return require("../assets/movies/MoviesList.json")
    .Search.filter((movie) => movie.Type === "movie")
    .map((movie) => ({
      id: movie.imdbID,
      title: movie.Title === "" ? null : movie.Title,
      year: movie.Year === "" ? null : Number(movie.Year),
      poster: movie.Poster === "" ? null : Posters[movie.Poster],
    }));
};

export default function TabOneScreen() {
  const movies = loadMovies();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movies</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <FlatList
        data={movies}
        renderItem={(movie) => (
          <Movie
            title={movie.item.title}
            year={movie.item.year}
            poster={movie.item.poster}
          />
        )}
        keyExtractor={(movie) => movie.id}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
