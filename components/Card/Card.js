import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { images } from "../../styles/global";

const Card = ({ data, ...props }) => {
  const quantity = data.items.length;
  const styleCardContainer =
    quantity > 1 ? styles.cardsContainerRow : styles.cardsContainerCol;
  const styleCard = quantity > 1 ? styles.card : styles.card;

  return (
    <>
      <View style={[styleCardContainer]}>
        {data.items.map((item, index) => {
          return (
            <View style={[styles.card, styles[data.name]]} key={index}>
              <View style={styles.cardContent}>
                <Text style={[styles.categoryTitle, styles[data.name]]}>
                  {data.title}
                </Text>
                <View style={styles.itemImageContainer}>
                  <Image
                    style={styles.itemImage}
                    source={images.photo[item.image]}
                  />
                </View>
                <View style={styles.descriptionContainer}>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </>
  );
};
export default Card;

const styles = StyleSheet.create({
  // 1 container, 2 classes
  cardsContainerCol: {
    display: "flex",
    flexDirection: "column",
  },
  cardsContainerRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  // custom classes when it's only 1 item in the category

  card: {
    height: 300,
    borderRadius: 8,
    margin: 8,
    elevation: 3,
    shadowOffset: { widht: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    backgroundColor: "#ffffff",
    borderTopWidth: 5,
    borderStyle: "solid",
    display: "flex",
    flexDirection: "column", 
    flex:1,
    flexGrow: 2,
    flexBasis: '47%'
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

  itemImageContainer: {
    marginTop: 12,
    marginLeft: 27,
    marginRight: 27,
    marginBottom: 8,
  },
  itemImage: {
    resizeMode: "contain",
    height: 180,
    width: "100%",
  },
  // custom classes when it's more than 1 item in the category

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
