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
        <Text style={styles.text}>{text}</Text>
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
    borderRadius: 4,
    padding: 4,
    margin: 0,
    width:100,
    backgroundColor: '#E6F7FF',
    borderColor: '#91D5FF',
    borderStyle: 'solid',
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color: '#1890FF',
    margin: 'auto',
    fontSize: 14
  }

});
