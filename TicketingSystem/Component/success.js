import React, { Component, useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const Success = () => {
  return (
    <View style={styles.centerView}>
      <Image
        source={require("../assets/Alerts/a2.gif")}
        style={{ height: 100, width: 100 }}
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

export default Success;
