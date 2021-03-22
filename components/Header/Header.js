import React, { useState } from "react";
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Platform,
} from "react-native";

import FilterIcon from "../../assets/icons/FilterIcon";

const Header = ({ enableAnimation }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled((isEnabled) => !isEnabled);
  };
  const [selectedTheme, setSelectedTheme] = useState("RedTheme");

  return (
    <>
      {Platform.OS ? (
        <StatusBar barStyle={"light-content"} hidden={enableAnimation} />
      ) : (
        ""
      )}
      <View
        style={[
          styles.statusbarStyle,
          isEnabled ? styles.redTheme : styles.purpleTheme,
        ]}
      ></View>
      <View
        style={[
          styles.header,
          isEnabled
            ? { backgroundColor: "hsl(351 ,63% ,48%)" }
            : { backgroundColor: "#8947C8" },
        ]}
      >
        <View style={styles.empty}></View>
        <Text style={styles.headerText}>My Feed</Text>
        <TouchableOpacity onPress={toggleSwitch} style={styles.filterContainer}>
          <FilterIcon />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  redTheme: {
    backgroundColor: "hsl(351 ,63% ,48%)",
  },
  purpleTheme: {
    backgroundColor: "#8947C8",
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
    height: 44,
    paddingLeft: 19,
    paddingRight: 19,
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
