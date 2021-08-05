import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import Status from "../Status/Status";

const Card = ({
  data,
  ...props
}) => {

  return (
  
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.title}>{data.id}</Text>
          <Status text=''/>
        </View>
      </View>
 
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
    shadowOffset: { widht: 2, height: 2 },
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 1,
    backgroundColor: "#ffffff",
    borderWidth: 0,
    borderStyle: "solid",
    marginVertical: 5,
    height: 'auto',
    borderRadius: 8,
    padding: 12,
    margin: 0,
    width:'100%'
  },

});
