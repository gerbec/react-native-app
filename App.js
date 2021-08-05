import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text, Switch } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import Header from "./components/Header";
import CardList from "./components/CardList";
import Footer from "./components/Footer";

import { data } from "./utils/data";

const App = () => {
  const [enableAnimation, setEnableAnimation] = useState(false);

  const open = () => {
    setEnableAnimation(true);
  };

  const close = () => {
    setEnableAnimation(false);
  };



  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_300Light,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View>
        <Header/>
        
        <ScrollView style={styles.safeArea}>
        <View style={styles.actionTopBar}><Text style={styles.actionTopBarText}>Only my services</Text><Switch value={true}></Switch></View>
          <CardList data={data}></CardList>
        </ScrollView>
        <Footer/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#f6f6f6",
    height: "100%",
    paddingTop:12,
    paddingHorizontal:12,
  },
  cardHeader: {
    height: 145,
    position: "absolute",
    width: "100%",
    top: 0,
    zIndex: 100,
  },
  actionTopBar:{
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:12,
    marginBottom:24
  },
  actionTopBarText:{
    marginRight:8
  }
});

export default App;
