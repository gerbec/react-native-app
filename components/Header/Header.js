import React, { useState } from "react";
import { StatusBar, View, Text, StyleSheet, Switch } from "react-native";
import { Roboto_500Medium } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import FilterIcon from "../../assets/icons/FilterIcon";

const Header = ({ selectedTheme }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <View style={[styles.statusbarStyle, styles[selectedTheme]]}></View>
      <View style={[styles.header, styles[selectedTheme]]}>
        <View style={styles.empty}></View>
        <Text style={styles.headerText}>My Feed</Text>
        <View style={styles.filterContainer}>
          <FilterIcon/>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  RedTheme: {
    backgroundColor: "hsl(351 ,63% ,48%)",
  },
  PurpleTheme: {
    backgroundColor: "hsl(351 ,63% ,48%)",
  },
  statusbarStyle: {
    height: 48,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height:44,
    paddingLeft:19,
    paddingRight:19,
  },
  headerText: {
    fontFamily: "Roboto_500Medium",
    fontSize: 17,
    lineHeight: 44,
    letterSpacing: -0.4,
    textAlign: "center",
    color: "#ffffff",
    
  },
  empty: {
    width: 44,
    flex: 1,
  },
  filterContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
});

export default Header;
