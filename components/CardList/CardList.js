import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Card from "../Card/Card";

const CardList = ({ data }) => {

  return (
    <>
      <View style={styles.cardsContainerRow}>
        <View style={styles.cardsContainerRow}> 
          <Text style={styles.columnTitle}>Despacho</Text>
          <Text style={styles.columnTitle}>Estado</Text>
        </View>
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
  columnTitle:{
    paddingHorizontal: 12,
    paddingVertical:8
  }
});
