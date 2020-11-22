import * as React from "react";
import { StyleSheet, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import { movies } from "../components/Movie";

const TabThreeScreen = ({ route, navigation }) => {
  const [title, setTitle] = React.useState("");
  const [type, setType] = React.useState("");
  const [year, setYear] = React.useState("");
  const [error, setError] = React.useState(null);

  const setAllEmpty = (error: string) => {
    setTitle("");
    setType("");
    setYear("");
    setError(error);
  };

  const addMovie = (title, type, year, setError) => {
    if (title === "") {
      setAllEmpty("Title is empty");
      return;
    }
    if (year === "") {
      setAllEmpty("Year is empty");
      return;
    }
    if (isNaN(Number(year))) {
      setAllEmpty("Not a valid year");
      return;
    }
    if (Number(year) > 2099 || Number(year) < 1800) {
      setAllEmpty("Not a valid year");
      return;
    }
    if (type !== "Movie") {
      setAllEmpty("Type should be 'Movie'");
      return;
    }
    let id = String(Math.random());
    while (movies.find((movie) => movie.id === id) !== undefined) {
      id = String(Math.random());
    }
    setAllEmpty(null);

    const movie = {
      id: id,
      title: title,
      year: Number(year),
    };

    movies.push(movie);
    navigation.navigate("Root", {
      screen: "TabOne",
      params: {
        screen: "TabOneScreen",
        params: {
          addedMovie: movie.id,
        },
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a new movie</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text>{error}</Text>
      <Text>Title:</Text>
      <TextInput onChangeText={(title) => setTitle(title)} value={title} />
      <Text>Year:</Text>
      <TextInput onChangeText={(year) => setYear(year)} value={year} />
      <Text>Type:</Text>
      <TextInput onChangeText={(type) => setType(type)} value={type} />
      <Button
        title="Submit"
        onPress={(event) => addMovie(title, type, year, setError)}
      />
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

export default TabThreeScreen;
