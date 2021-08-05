import React from "react";
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import Feed from "../../assets/icons/Feed";
import Notification from "../../assets/icons/Notification";
import Profile from "../../assets/icons/Profile";

const Footer = ({ }) => {

  return (
    <>
      <Animated.View style={styles.footer}>
        <TouchableWithoutFeedback>
          <Feed />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Notification />
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
    bottom:20
  }
});

export default Footer;
