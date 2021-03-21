import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { images } from "../../styles/global";

const Card = ({ data, ...props }) => {
  const quantity = data.items.length;
  const styleCardContainer =
    quantity > 1 ? styles.cardsContainerRow : styles.cardsContainerCol;
  const styleCard = quantity > 1;

  return (
    <>
      <View style={[styleCardContainer]}>
        {data.items.map((item, index) => {
          return (
            <View style={[styles.card, styles[data.name], (styleCard ? styles.cardSmall : '') ]} key={index}>
              <View style={styles.cardContent}>
                <Text style={[styles.categoryTitle, styles[data.name]]}>
                  {data.title}
                </Text>
                <View
                  style={
                    styleCard
                      ? styles.itemImageContainerAdjust
                      : styles.itemImageContainer
                  }
                >
                  <Image
                    style={
                      styleCard ? styles.itemImageAdjust : styles.itemImage
                    }
                    source={images.photo[item.image]}
                  />
                </View>
                <View style={styles.descriptionContainer}>
                  <Text
                    style={[
                      styleCard ? styles.descriptionAdjust : styles.description,
                    ]}
                  >
                    {item.description}
                  </Text>
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
  cardsContainerRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width:'100%',
  },

  // custom classes when it's only 1 item in the category

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
  cardSmall:{
    flexBasis:'48%',
    height: 200
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
    paddingBottom:16,
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
    resizeMode: "contain",
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
