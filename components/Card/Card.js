import React, { useState } from "react";
import {
  Animated,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { images } from "../../styles/global";

const Card = ({
  length,
  name,
  image,
  description,
  title,
  open,
  close,
  ...props
}) => {
  const styleCard = length > 1;

  const animatedValue = React.useRef(new Animated.Value(0)).current;

  const scaleInterpolation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.6],
  });

  const opacityInterpolation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1],
  });

  const showHide = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const positionInterpolation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -70],
  });

  const [isEnabled, setIsEnabled] = useState(false);
 

  const startAnimation = () => {
    open();
    // setEnableAnimation(true),
    // console.log(enableAnimation),
    Animated.spring(animatedValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const stopAnimation = (value) => {
    close();
    // setEnableAnimation(false),
    // console.log(enableAnimation),
    Animated.spring(animatedValue, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };


  const animatedImageStyles = {
    transform: [
      { scale: scaleInterpolation },
      { translateY: positionInterpolation },
    ],
    opacity: opacityInterpolation,
  };

  const showHideStyles = {
    opacity: showHide,
  };

  return (
    <TouchableWithoutFeedback onPressIn={startAnimation} onPressOut={stopAnimation}>
      <View style={[styles.card, styles[name], styleCard && styles.cardSmall]}>
        <View style={styles.cardContent}>
          <Text style={[styles.categoryTitle, styles[name]]}>{title}</Text>
          <View
            style={
              styleCard
                ? styles.itemImageContainerAdjust
                : styles.itemImageContainer
            }
          >
            <Animated.Image
              style={[
                styleCard ? styles.itemImageAdjust : styles.itemImage,
                animatedImageStyles,
              ]}
              source={images.photo[image]}
              resizeMode="contain"
            ></Animated.Image>
          </View>
          <Animated.View style={[styles.descriptionContainer, showHideStyles]}>
            <Text
              style={[
                styleCard ? styles.descriptionAdjust : styles.description,
              ]}
            >
              {description}
            </Text>
          </Animated.View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Card;

const styles = StyleSheet.create({
  cardsContainerRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    elevation: 1,
    shadowOffset: { widht: 1, height: 1 },
    shadowColor: "#333333",
    shadowOpacity: 0.2,
    shadowRadius: 1,
    backgroundColor: "#ffffff",
    borderTopWidth: 5,
    borderStyle: "solid",
    marginVertical: 5,
    height: 300,
    borderRadius: 8,
    margin: 0,
  },

  cardSmall: {
    flexBasis: "48%",
    height: 200,
  },

  categoryTitle: {
    fontFamily: "Roboto_300Light",
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: -0.25,
    textAlign: "left",
    color: "#333333",
    margin: 6,
  },

  descriptionContainer: {
    display: "flex",
    alignItems: "center",
  },

  description: {
    fontFamily: "Roboto_500Medium",
    fontSize: 17,
    lineHeight: 25,
    letterSpacing: -0.34,
    textAlign: "center",
    width: 250,
  },

  descriptionAdjust: {
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: -0.24,
    padding: 10,
    paddingBottom: 16,
    textAlign: "center",
  },

  itemImageContainer: {
    marginBottom: 8,
    marginLeft: 27,
    marginRight: 27,
    marginTop: 12,
  },

  itemImageContainerAdjust: {
    marginTop: 7,
    marginLeft: 27,
    marginRight: 27,
    marginBottom: 0,
  },

  itemImage: {
    height: 180,
    width: "100%",
  },

  itemImageAdjust: {
    height: 110,
    resizeMode: "contain",
    width: "100%",
  },

  //categories

  default: {
    borderTopColor: "#333333",
    color: "#333333",
  },

  sports: {
    borderTopColor: "#219653",
    color: "#219653",
  },

  electronics: {
    borderTopColor: "#F2994A",
    color: "#F2994A",
  },

  fashion: {
    borderTopColor: "#2F80ED",
    color: "#2F80ED",
  },
});
