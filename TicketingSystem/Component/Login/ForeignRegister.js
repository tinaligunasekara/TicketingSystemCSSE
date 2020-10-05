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
import DatePicker from "react-native-datepicker";

class ForeignRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "2016-05-15",
      modalState: false,
    };
  }

  manageSave = () => {
    console.log("modalstate : " + this.state.modalState);

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
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 0.18,
            backgroundColor: "#ffffff",
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#ffffff",
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <Text
                style={{
                  fontSize: 28,
                  color: "#154360",
                  marginTop: 40,
                }}
              >
                Create Your Account Here
              </Text>
            </View>
          </View>
        </View>
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
              <View
                style={{
                  flex: 3,
                  backgroundColor: "#fffffff",
                }}
              >
                <View
                  style={{
                    margin: 10,
                    marginTop: 25,
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
                      Name
                    </Text>
                    <TextInput
                      onFocus={this.onFocus}
                      autoFocus={false}
                      placeholder="John Doe"
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
                      Passport Number
                    </Text>
                    <TextInput
                      autoFocus={false}
                      placeholder="Passport No"
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
                      Tocken Number
                    </Text>
                    <TextInput
                      onFocus={this.onFocus}
                      keyboardType="number-pad"
                      autoFocus={false}
                      placeholder="960591313"
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
                      Password
                    </Text>
                    <TextInput
                      secureTextEntry={true}
                      onFocus={this.onFocus}
                      autoFocus={false}
                      placeholder="*****"
                      style={{
                        ...styles.textInput,
                        backgroundColor: "white",
                      }}
                      placeholderTextColor="#7F8C8D"
                      onChangeText={(unitPrice) =>
                        this.setState({
                          unitPrice,
                        })
                      }
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
                      Confirm Password
                    </Text>
                    <TextInput
                      secureTextEntry={true}
                      onFocus={this.onFocus}
                      autoFocus={false}
                      placeholder="*****"
                      style={{
                        ...styles.textInput,
                        backgroundColor: "white",
                      }}
                      placeholderTextColor="#7F8C8D"
                      onChangeText={(unitPrice) =>
                        this.setState({
                          unitPrice,
                        })
                      }
                    />
                  </View>
                  <View
                    style={{
                      marginTop: 15,
                    }}
                  >
                    <TouchableOpacity onPress={this.manageSave}>
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
                          Register
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
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
                        Successfull !
                      </Text>
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
                    style={{ height: 150, width: 150 }}
                  />
                  <Text
                    style={{
                      color: "#7F8C8D",
                      marginBottom: 10,
                    }}
                  >
                    Registered Successfully
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
                      this.props.navigation.navigate("Login");
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
      </View>
    );
  }
}
export default ForeignRegister;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    height: 70,
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
});
