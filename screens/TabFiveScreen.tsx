import * as React from "react";
import { StyleSheet, Button, Image, Dimensions, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import { Text, View } from "../components/Themed";

const sampleSquare = (left: number, right: number) => {
  const data = {
    labels: [],
    datasets: [{ data: [] }],
  };
  for (let i = left; i <= right; i++) {
    data.labels.push(i);
    data.datasets[0].data.push(i * i);
  }
  return data;
};

const TabFiveScreen = ({ navigation }) => {
  const data = sampleSquare(-5, 5);
  const layout = { title: "My cool chart!" };

  return (
    <View>
      <LineChart
        data={data}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#2e3440",
          backgroundGradientFrom: "#4c566a",
          backgroundGradientTo: "#3b4252",
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "0",
            strokeWidth: "2",
            stroke: "#a3be8c",
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <PieChart
        data={[
          {
            name: "yellow",
            percentage: 15,
            color: "#ebcb8b",
            legendFontColor: "#ECEFF4",
          },
          {
            name: "brown",
            percentage: 25,
            color: "#d08770",
            legendFontColor: "#ECEFF4",
          },
          {
            name: "gray",
            percentage: 50,
            color: "#d8dee9",
            legendFontColor: "#ECEFF4",
          },
          {
            name: "red",
            percentage: 10,
            color: "#bf616a",
            legendFontColor: "#ECEFF4",
          },
        ]}
        accessor={"percentage"}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        bgColor={"transparent"}
        chartConfig={{
          backgroundColor: "#2e3440",
          backgroundGradientFrom: "#4c566a",
          backgroundGradientTo: "#3b4252",
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "0",
            strokeWidth: "2",
            stroke: "#a3be8c",
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default TabFiveScreen;
