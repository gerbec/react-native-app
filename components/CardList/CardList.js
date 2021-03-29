import React from "react";
import { StyleSheet, View } from "react-native";
import Card from "../Card/Card";

const CardList = ({ data, open, close, ...props }) => {
  const quantity = data.items.length;
  const styleCard = quantity > 1;

  return (
    <>
      <View style={styleCard && styles.cardsContainerRow}>
        {data.items.map((item, index) => {
          const length = data.items.length;
          return (
            <Card
              open={open}
              close={close}
              key={index}
              length={length}
              name={data.name}
              title={data.title}
              image={item.image}
              description={item.description}
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
