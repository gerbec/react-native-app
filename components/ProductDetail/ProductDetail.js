import React, { useState } from "react";
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Close from "../../assets/icons/Close";
import Like from "../../assets/icons/Like";
import Share from "../../assets/icons/Share";

const ProductDetail = ({ enableAnimation }) => {
  return (
    <>
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "#ffffff"]}
        style={styles.hiddenContent}
      >
        <View>
          <TouchableOpacity>
            <Close></Close>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Like></Like>
          </TouchableOpacity>
          <TouchableOpacity>
            <Share></Share>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <View style={styles.itemDataBox}>
        <Text style={styles.title}>
          Diamond Clarity St Performance Hybrid Bike, 16 Inch.
        </Text>
        <Text style={styles.price}>$ 400</Text>
        <Text style={styles.description}>
          This performance hybrid bike blends the best of road and mountain
          worlds to result in a sleek bike with an upright riding position.
          Product ships directly from vendor, allow 10 to 14 business days for
          processing & shipping.
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity styles={styles.primaryButton}>
          <Text>Added to Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity styles={styles.secundaryButton}>
          <Text>Buy Online</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  hiddenContent: {
    position: "absolute",
    zIndex: 100,
    top: 0,
    height: 145,
    width: "100%",
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
  },
  itemDataBox: {},
  title: {},
  price: {},
  description: {},
  primaryButton: {},
  secundaryButton: {},
});

export default ProductDetail;
