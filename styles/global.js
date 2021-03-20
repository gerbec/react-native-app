import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF0F1",
  },
  safeArea: {
    margin: 8,
    backgroundColor: "#f2f2f2",
  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: "center",
    marginBottom: 8,
    fontFamily: "Roboto_500Medium",
  },

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

export const images = {
  photo: {
    1: require("../assets/photo.png"),
    2: require("../assets/photo2.png"),
    bike: require("../assets/bike.png"),
  },
};
