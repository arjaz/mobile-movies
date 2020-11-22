import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import { Movie, movies } from "../components/Movie";

const TabTwoScreen = ({ route, navigation }) => {
  const movieData =
        route.params !== undefined
        ? movies.find((movie) => movie.id === route.params.movie)
        : null;
    const movie =
        movieData === null ? null : (
            <Movie
            title={movieData.title}
            year={movieData.year}
            poster={movieData.poster}
            rated={movieData.rated}
            released={movieData.released}
            runtime={movieData.runtime}
            genre={movieData.genre}
            director={movieData.director}
            writer={movieData.writer}
            actors={movieData.actors}
            plot={movieData.plot}
            language={movieData.language}
            country={movieData.country}
            awards={movieData.awards}
            imdbRating={movieData.imdbRating}
            imdbVotes={movieData.imdbVotes}
            production={movieData.production}
                />
        );
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detailed view</Text>
            {movie}
            <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
};

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

export default TabTwoScreen;
