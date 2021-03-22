import React, { useState } from "react";
import {
  Animated,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Roboto_500Medium } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import Feed from "../../assets/icons/Feed";
import Notification from "../../assets/icons/Notification";
import Wishlist from "../../assets/icons/Wishlist";
import Profile from "../../assets/icons/Profile";

const Footer = ({ enableAnimation }) => {

  return (
    <>
      <Animated.View style={[styles.footer,  enableAnimation && styles.hide ]}>
        <TouchableWithoutFeedback>
          <Feed />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Notification />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Wishlist />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Profile />
        </TouchableWithoutFeedback>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#ffffff",
    paddingTop: 20.35,
    elevation: 3,
    shadowOffset: { widht: 0, height: 1 },
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    height: 96,
    zIndex: 10,
    width:'100%',
    position:'absolute',
    bottom:90
  },
  hide: {
    bottom: -10
  }
});

export default Footer;
