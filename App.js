import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import Header from "./components/Header";
import AppLoading from "expo-app-loading";
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import ImageCard from "./components/ImageCard";
import Card from "./components/Card";

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState("RedTheme");

  const dataSports = {
    name: "sports",
    title: "Sports & outdoors",
    items: [
      {
        alt: "bike",
        image: "bike",
        description: "Diamond Clarity St Performance Hybrid Bike, 16 Inch.",
        price: "$58",
      },
    ],
  };

  const dataElectronics = {
    name: "electronics",
    title: "Electronics",
    items: [
      {
        alt: "case",
        image: "case",
        description: "Keyscaper Emblematic iPhone 6 Clear Case",
        price: "$30",
      },
      {
        alt: "musicplayer",
        image: "musicplayer",
        description: "Boston University Bluetooth Music Player",
        price: "$20",
      },
      {
        alt: "case",
        image: "case",
        description: "Keyscaper Emblematic iPhone 6 Clear Case",
        price: "$30",
      },
      {
        alt: "musicplayer",
        image: "musicplayer",
        description: "Boston University Bluetooth Music Player",
        price: "$20",
      },
    ],
  };

  const dataFashion = {
    name: "fashion",
    title: "Fashion",
    items: [
      {
        alt: "fleece",
        image: "fleece",
        description: "League Chelsea Full Zip Fleece",
        price: "$99",
      },
      {
        alt: "cap",
        image: "cap",
        description: "Boston Terriers Legacy Adjustable Hat",
        price: "$45",
      },
    ],
  };

  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_300Light,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Header selectedTheme={selectedTheme} fontsToUse={[fontsLoaded]} />
        <ScrollView style={styles.safeArea}>
          <ImageCard
            bgImage={"1"}
            Title={"8 Ways to stay active during the Summer"}
            AltText={"From The College Juice"}
          ></ImageCard>
          <Card data={dataSports}></Card>
          <Card data={dataElectronics}></Card>
          <ImageCard
            bgImage={"2"}
            Title={"8 Ways to stay active during the Summer"}
            AltText={"From The College Juice"}
          ></ImageCard>
          <Card data={dataFashion}></Card>
          
          
          
        </ScrollView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF0F1",
  },
  safeArea: {
    margin: 8,
  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: "center",
    marginBottom: 8,
    fontFamily: "Roboto_500Medium",
  },
});

export default App;
