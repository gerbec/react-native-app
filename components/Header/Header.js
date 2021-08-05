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

const Header = ({  }) => {


  return (
    <>
      {Platform.OS ? (
        <StatusBar barStyle={"light-content"} />
      ) : (
        ""
      )}
      <View
        style={
          styles.statusbarStyle
        }
      ></View>
      <View
        style={
          styles.header

        }
      >
        <View style={styles.empty}></View>
        <Text style={styles.headerText}>CPI pilots</Text>
        <View style={styles.empty}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  statusbarStyle: {
    height: 'auto',
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "hsl(351 ,63% ,48%)",
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
    backgroundColor: "hsl(351 ,63% ,48%)",
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
