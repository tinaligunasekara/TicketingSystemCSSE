import React, { Component } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  ImageBackground,
  Dimensions,
  CheckBox,
  Image,
  Modal,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false,
      modalStateDelete: false,
    };
  }

  render() {
    let screenwidth = Dimensions.get("window").width;
    let screeheight = Dimensions.get("window").height;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1.5 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#154360",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                // backgroundColor: "green",
                marginLeft: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.openDrawer();
                }}
                style={{ marginTop: 30 }}
              >
                <FontAwesome5
                  name="bars"
                  size={24}
                  color="#000000"
                ></FontAwesome5>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 2,
                // backgroundColor: "purple",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  color: "white",
                  marginTop: 30,
                  fontWeight: "bold",
                }}
              >
                Profile
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                // backgroundColor: "pink",
              }}
            ></View>
          </View>

          <View
            style={{
              flex: 9,
              // backgroundColor: "#689F38",
              flexDirection: "row",
            }}
          >
            <SafeAreaView style={styles.container}>
              <View style={styles.userInfoSection}>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                  <Avatar.Image
                    source={{
                      uri:
                        "https://avatars3.githubusercontent.com/u/44874559?s=400&v=4",
                    }}
                    size={80}
                  />
                  <View style={{ marginLeft: 20 }}>
                    <Title
                      style={[
                        styles.title,
                        {
                          marginTop: 15,
                          marginBottom: 5,
                        },
                      ]}
                    >
                      Samitha Perera
                    </Title>
                    <Caption style={styles.caption}>960591313V</Caption>
                  </View>
                </View>
              </View>

              <View style={styles.userInfoSection}>
                <View style={styles.row}>
                  <Icon name="map-marker-radius" color="#777777" size={20} />
                  <Text style={{ color: "#777777", marginLeft: 20 }}>
                    Makandura, Sri Lanka
                  </Text>
                </View>
                <View style={styles.row}>
                  <Icon name="phone" color="#777777" size={20} />
                  <Text style={{ color: "#777777", marginLeft: 20 }}>
                    077-6355192
                  </Text>
                </View>
                <View style={styles.row}>
                  <Icon name="email" color="#777777" size={20} />
                  <Text style={{ color: "#777777", marginLeft: 20 }}>
                    samithaperera@gmail.com
                  </Text>
                </View>
              </View>

              <View style={styles.infoBoxWrapper}>
                <View
                  style={[
                    styles.infoBox,
                    {
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  ]}
                >
                  <Title style={{ marginBottom: 20 }}>QR CODE</Title>
                  <Image
                    source={require("../../assets/Styles/QR.webp")}
                    style={{ height: 200, width: 200 }}
                  />
                </View>
              </View>

              <View style={styles.menuWrapper}>
                <View style={styles.menuItem}>
                  <Icon name="id-card" color="#154360" size={25} />
                  <Text style={styles.menuItemText}>
                    Tocken Number - 960591313
                  </Text>
                </View>
              </View>
            </SafeAreaView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "#689F38",
    backgroundColor: "#ffffff",
    marginTop: 15,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 300,
  },
  infoBox: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  container: {
    flex: 1,
  },
});
