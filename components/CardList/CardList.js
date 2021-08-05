import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../Card/Card";

const CardList = ({ data }) => {

  return (
    <>
      <View style={styles.cardsContainerRow}>
        {data.map((trip, index) => {

          return (
            <Card
              data={trip}
            ></Card>
          );
        })}
      </View>
    </>
  );
};
export default CardList;

const styles = StyleSheet.create({
  cardsContainerRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
});
