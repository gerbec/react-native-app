import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { images } from "../../styles/global";
import ImageOverlay from "react-native-image-overlay";

const ImageCard = ({ bgImage, Title, AltText }) => {
  return (
    <ImageOverlay
      height={150}
      borderRadius={8}
      rounded={8}
      containerStyle={styles.image}
      source={images.photo[bgImage]}
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{Title}</Text>
        </View>
        <View style={styles.alternativeTextContainer}>
          <Text style={styles.alternativeText}>{AltText}</Text>
        </View>
      </View>
    </ImageOverlay>
  );
};
export default ImageCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    flexDirection: "column",
    display: "flex",
  },

  image: {
    width: "100%",
    marginVertical: 5
  },
  textContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    height: 100,
    padding: 20,
  },
  text: {
    fontFamily: "Roboto_500Medium",
    fontSize: 22,
    lineHeight: 25,
    letterSpacing: -0.25,
    textAlign: "left",
    color: "#ffffff",
  },
  alternativeTextContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    height: 100,
    padding: 20,
  },
  alternativeText: {
    color: "#ffffff",
    fontFamily: "Roboto_300Light",
  },
});
