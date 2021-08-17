import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Form from "./src/components/Form/";
import Title from "./src/components/Title/";


export default function App() {
  return (
    <View style={styles.viewPrincipal}>
      <Title />
      <Form />
    </View>
  )
};


const styles = StyleSheet.create({
  viewPrincipal: {
    paddingTop: 25,
    backgroundColor: "black",
  },
})