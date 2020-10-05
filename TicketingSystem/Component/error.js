import React, { Component, useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const Error = () => {
  return (
    <View style={{ ...styles.centerView, marginBottom: 10, marginTop: 10 }}>
      <Image
        source={require("../assets/Alerts/error.gif")}
        style={{ height: 50, width: 50 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centerView: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});

export default Error;
