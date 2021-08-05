import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

const Status = ({
  text,
  ...props
}) => {

  return (
  
      <View style={styles.status}>
        <Text>{text}</Text>
      </View>
 
  );
};
export default Status;

const styles = StyleSheet.create({
  status: {
    display: "flex",
    flexDirection: "row",
    elevation: 1,
    borderWidth: 0,
    borderRadius: 8,
    padding: 4,
    margin: 0,
    width:'100'
  },

});
