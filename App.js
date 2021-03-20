import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
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
import BigCard from "./components/BigCard";

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState("RedTheme");

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
          <BigCard
            category={"sports"}
            title={"Sports & Outdoors"}
            itemImage={"bike"}
            description={"Diamond Clarity St Performance Hybrid Bike, 16 Inch."}
          ></BigCard>
          <ImageCard
            bgImage={"2"}
            Title={"8 Ways to stay active during the Summer"}
            AltText={"From The College Juice"}
          ></ImageCard>
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
