import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  ListItem,
  CheckBox,
  Text,
  Body,
  Picker,
} from "native-base";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  AppRegistry,
  ScrollView,
  Dimensions,
  TextInput,
  Modal,
} from "react-native";

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import DatePicker from "react-native-datepicker";
import { FontAwesome5 } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class RefreshAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "2016-05-15",
      modalState: false,
      TockenNo: 0,
      payState: false,
    };
  }

  paymanage = () => {
    console.log("modalstate : " + this.state.payState);

    if (this.state.payState === true) {
      this.setState({
        payState: false,
      });
    } else if (this.state.payState === false) {
      this.setState({
        payState: true,
      });
    }
  };

  manageSave = () => {
    console.log("modalstate : " + this.state.modalState);
    this.setState({
      TockenNo: 0,
    });

    if (this.state.modalState === true) {
      this.setState({
        modalState: false,
      });
    } else if (this.state.modalState === false) {
      this.setState({
        modalState: true,
      });
    }
  };

  render() {
    let screenwidth = Dimensions.get("window").width;
    let screeheight = Dimensions.get("window").height;
    var radio_props = [
      { label: "Male     ", value: 0 },
      { label: "Female", value: 1 },
    ];
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
                flex: 4,
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
                TICKET PICKER
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
              flex: 1,

              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                // backgroundColor: "#689F38",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  color: "#154360",
                  fontWeight: "bold",
                  marginLeft: 20,
                }}
              >
                REFRESH ACCOUNT
              </Text>
            </View>
          </View>
        </View>
        {/* Modals are in this section */}

        <View>
          <Modal transparent={true} visible={this.state.modalState}>
            <View
              style={{
                backgroundColor: "#000000aa",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#ffffff",
                  paddingVertical: 20,
                  borderTopColor: "black",
                  paddingHorizontal: 10,
                  borderRadius: 23,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ modalState: false });
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      height: 20,
                      width: 300,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "#222222",
                        }}
                      >
                        Payment Status
                      </Text>
                    </View>
                    <View
                      style={{
                        height: 23,
                        width: 23,
                        borderRadius: 100,
                        backgroundColor: "#154360",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 30,
                      }}
                    >
                      <View>
                        <Text style={{ color: "white" }}>X</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    borderBottomColor: "#d3d3d3",
                    borderBottomWidth: 1,
                    padding: 10,
                  }}
                ></View>

                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={require("../../assets/Alerts/a2.gif")}
                    style={{ height: 100, width: 100 }}
                  />
                  <Text
                    style={{
                      color: "#7F8C8D",
                      marginBottom: 10,
                      fontSize: 18,
                    }}
                  >
                    Payment Successful !
                  </Text>
                </View>

                <View
                  style={{
                    marginTop: 15,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ modalState: false });
                    }}
                    style={{
                      ...styles.button,
                      justifyContent: "center",
                      alignItems: "center",
                      width: 180,
                      height: 40,
                      borderRadius: 30,
                      backgroundColor: "#154360",
                      marginRight: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#ffffff",
                      }}
                    >
                      OK
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>

        {/* Modal section over */}

        <View style={{ flex: 7 }}>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            ref={(node) => (this.scroll = node)}
            style={{
              flex: 10,
              backgroundColor: "#ffffff",
            }}
          >
            <View
              style={{
                backgroundColor: "#ffffff",
                flex: 1,
                marginTop: 10,
                width: screenwidth - 35,

                borderRadius: 20,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                marginLeft: 15,
                marginBottom: 20,
                marginRight: 20,
              }}
            >
              <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={{ flex: 3, backgroundColor: "#fffffff" }}>
                  <View style={{ margin: 10, marginTop: 25 }}>
                    <View style={{ flex: 1 }}>
                      <View style={styles.menuWrapper}>
                        <View style={styles.menuItem}>
                          <Icon name="id-card" color="#154360" size={25} />
                          <Text style={styles.menuItemText}>
                            &nbsp;&nbsp; Token Number - 960591313
                          </Text>
                        </View>
                      </View>
                      <View style={{ marginTop: 10 }}>
                        <View
                          style={{
                            marginTop: 15,
                          }}
                        >
                          <Text
                            style={{
                              color: "#154360",
                              marginHorizontal: 20,
                            }}
                          >
                            Amount
                          </Text>
                          <TextInput
                            autoFocus={false}
                            placeholder="1000.00"
                            style={styles.textInput}
                            placeholderTextColor="#7F8C8D"
                          />
                        </View>

                        <TouchableOpacity
                          style={{ marginTop: 10 }}
                          onPress={this.paymanage}
                        >
                          <View
                            style={{
                              ...styles.button,
                              backgroundColor: "#154360",
                              borderWidth: 1,
                              borderColor: "white",
                              opacity: this.buttonOpacity,
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                color: "white",
                              }}
                            >
                              PAYMENT
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>

                      {/* ssadda */}
                      {this.state.payState ? (
                        <View
                          style={{
                            backgroundColor: "#ffffff",
                            paddingVertical: 20,
                            borderTopColor: "black",
                            paddingHorizontal: 10,
                            borderRadius: 23,
                          }}
                        >
                          <View
                            style={{
                              borderBottomColor: "#d3d3d3",
                              borderBottomWidth: 1,
                              padding: 10,
                            }}
                          ></View>

                          <View
                            style={{
                              marginTop: 15,
                            }}
                          >
                            <Text
                              style={{
                                color: "#154360",
                                marginHorizontal: 20,
                              }}
                            >
                              Accepted Cards
                            </Text>

                            <View
                              style={{
                                justifyContent: "center",
                                alignContent: "center",
                                alignItems: "center",
                                marginTop: 10,
                              }}
                            >
                              <Image
                                source={require("../../assets/PaymentMethods/cards.png")}
                                style={{ height: 50, width: 250 }}
                              />
                            </View>
                          </View>

                          <View
                            style={{
                              marginTop: 10,
                            }}
                          >
                            <View
                              style={{
                                marginTop: 15,
                              }}
                            >
                              <Text
                                style={{
                                  color: "#154360",
                                  marginHorizontal: 20,
                                }}
                              >
                                Card Holder's Name
                              </Text>
                              <TextInput
                                autoFocus={false}
                                placeholder="Name"
                                style={styles.textInput}
                                placeholderTextColor="#7F8C8D"
                              />
                            </View>
                            <View
                              style={{
                                marginTop: 15,
                              }}
                            >
                              <Text
                                style={{
                                  color: "#154360",
                                  marginHorizontal: 20,
                                }}
                              >
                                Card Number
                              </Text>
                              <TextInput
                                keyboardType="number-pad"
                                autoFocus={false}
                                placeholder="Card No"
                                style={styles.textInput}
                                placeholderTextColor="#7F8C8D"
                              />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                              <View
                                style={{
                                  marginTop: 15,
                                }}
                              >
                                <Text
                                  style={{
                                    color: "#154360",
                                    marginHorizontal: 20,
                                  }}
                                >
                                  Expired Date
                                </Text>
                                <DatePicker
                                  style={{ ...styles.textInput }}
                                  date={this.state.date}
                                  mode="date"
                                  placeholder="select date"
                                  format="YYYY-MM-DD"
                                  confirmBtnText="Confirm"
                                  cancelBtnText="Cancel"
                                  customStyles={{
                                    dateInput: {
                                      borderColor: "white",
                                    },
                                  }}
                                  onDateChange={(date) => {
                                    this.setState({ date: date });
                                  }}
                                />
                              </View>
                              <View
                                style={{
                                  marginTop: 15,
                                  flex: 1,
                                }}
                              >
                                <Text
                                  style={{
                                    color: "#154360",
                                    marginHorizontal: 20,
                                  }}
                                >
                                  CVC
                                </Text>
                                <TextInput
                                  keyboardType="number-pad"
                                  autoFocus={false}
                                  placeholder="CVC"
                                  style={styles.textInput}
                                  placeholderTextColor="#7F8C8D"
                                />
                              </View>
                            </View>
                          </View>

                          <View
                            style={{
                              marginTop: 5,
                              height: 40,
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          ></View>
                          <TouchableOpacity
                            style={{ marginTop: 10 }}
                            onPress={this.manageSave}
                          >
                            <View
                              style={{
                                ...styles.button,
                                backgroundColor: "#154360",
                                borderWidth: 1,
                                borderColor: "white",
                                opacity: this.buttonOpacity,
                              }}
                            >
                              <Text
                                style={{
                                  fontSize: 20,
                                  fontWeight: "bold",
                                  color: "white",
                                }}
                              >
                                PAY
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      ) : (
                        <View></View>
                      )}
                      {/* sadasdas */}
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default RefreshAccount;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    height: 60,
    marginHorizontal: 20,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  textInput: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "#154360",
  },
  textArea: {
    height: 200,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "#154360",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
});
