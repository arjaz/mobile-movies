import * as React from "react";
import { StyleSheet, FlatList, TouchableOpacity, Button } from "react-native";
import { SearchBar } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import EditScreenInfo from "../components/EditScreenInfo";
import { Movie, movies } from "../components/Movie";
import { Text, View } from "../components/Themed";

const TabOneScreen = ({ route, navigation }) => {
  const [searchText, setSearchText] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movies</Text>
      <SearchBar
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <FlatList
        data={movies.filter((movie) =>
          movie.title.toLowerCase().includes(searchText.toLowerCase())
        )}
        renderItem={(movie) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Root", {
                screen: "TabTwo",
                params: {
                  screen: "TabTwoScreen",
                  params: {
                    movie: movie.item.id,
                  },
                },
              })
            }
          >
            <Movie
              title={movie.item.title}
              year={movie.item.year}
              poster={movie.item.poster}
            />
            <Button
              onPress={() => {
                // Delete the movie
                movies.splice(
                  movies.indexOf(movies.find((m) => m.id === movie.item.id)),
                  1
                );
                // Rerender the page with that hack
                navigation.navigate("Root", {
                  screen: "TabOne",
                  params: {
                    screen: "TabOneScreen",
                    params: {
                      removedMovie: movie.item.id,
                    },
                  },
                });
              }}
              title="Delete"
            />
          </TouchableOpacity>
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

export default TabOneScreen;
