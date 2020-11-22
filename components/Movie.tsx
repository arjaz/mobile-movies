import * as React from "react";
import { StyleSheet, Image } from "react-native";

import { Text, View } from "../components/Themed";
import { Posters } from "../assets/images/Posters/Posters";

export interface MovieData {
  id: string;
  title: string | null;
  year: number | null;
  poster: any | null;
  rated: string | null;
  released: string | null;
  runtime: string | null;
  genre: string | null;
  director: string | null;
  writer: string | null;
  actors: string | null;
  plot: string | null;
  language: string | null;
  country: string | null;
  awards: string | null;
  imdbRating: number | null;
  imdbVotes: string | null;
  production: string | null;
}

export const loadMovies = () => {
  return require("../assets/movies/MoviesList.json")
    .filter((movie) => movie.Type === "movie")
    .map((movie) => ({
      id: movie.imdbID,
      title: movie.Title == "" ? null : movie.Title,
      year: movie.Year == "" ? null : Number(movie.Year),
      poster: movie.Poster == "" ? null : Posters[movie.Poster],
      rated: movie.Rated == "" ? null : movie.Rated,
      released: movie.Released == "" ? null : movie.Released,
      runtime: movie.Runtime == "" ? null : movie.Runtime,
      genre: movie.Genre == "" ? null : movie.Genre,
      director: movie.Director == "" ? null : movie.Director,
      writer: movie.Writer == "" ? null : movie.Writer,
      actors: movie.Actors == "" ? null : movie.Actors,
      plot: movie.Plot == "" ? null : movie.Plot,
      language: movie.Language == "" ? null : movie.Language,
      country: movie.Country == "" ? null : movie.Country,
      awards: movie.Awards == "" ? null : movie.Awards,
      imdbRating: movie.imdbRating == "" ? null : Number(movie.imdbRating),
      imdbVotes: movie.imdbVotes == "" ? null : movie.imdbVotes,
      production: movie.Production == "" ? null : movie.Production,
    }));
};

const textOrNull = (text: any | null, prefix: string) =>
  text ? (
    <Text style={styles.title}>
      {String(prefix)}: {String(text)}
    </Text>
  ) : null;

export const Movie = (props: MovieData) => {
  const imageSize = 125;

  const poster = props.poster ? (
    <Image style={styles.image} source={props.poster} />
  ) : null;
  const title = textOrNull(props.title, "Title");
  const year = textOrNull(props.year, "Year");
  const rated = textOrNull(props.rated, "Rated");
  const released = textOrNull(props.released, "Released");
  const runtime = textOrNull(props.runtime, "Runtime");
  const genre = textOrNull(props.genre, "Genre");
  const director = textOrNull(props.director, "Director");
  const writer = textOrNull(props.writer, "Writer");
  const actors = textOrNull(props.actors, "Actors");
  const plot = textOrNull(props.plot, "Plot");
  const language = textOrNull(props.language, "Language");
  const country = textOrNull(props.country, "Country");
  const awards = textOrNull(props.awards, "Awards");
  const imdbRating = textOrNull(props.imdbRating, "Imdb Rating");
  const imdbVotes = textOrNull(props.imdbVotes, "Imdb Votes");
  const production = textOrNull(props.production, "Production");

  return (
    <View style={styles.container}>
      {title}
      {year}
      {poster}
      {rated}
      {released}
      {runtime}
      {genre}
      {director}
      {writer}
      {actors}
      {plot}
      {language}
      {country}
      {awards}
      {imdbRating}
      {imdbVotes}
      {production}
    </View>
  );
};

export const movies = loadMovies();

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

export default Movie;
