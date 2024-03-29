import React, {Component} from "react";
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
import {FontAwesome5} from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {AsyncStorage} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {DoubleBounce} from "react-native-loader";

const qr = '';
export default class StartRide extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalState: false,
            modalStateDelete: false,
            qrCode: '',
            name: '',
            address: '',
            nic: '',
            phoneNumber: '',
            email: '',
            loaderStatus: true
        };
    }

    componentDidMount() {
        this.qrCodeFun();
    }

    qrCodeFun = async () => {
        try {
            let qrCode = await AsyncStorage.getItem('tokenNumber');
            let name = await AsyncStorage.getItem('name')
            let address = await AsyncStorage.getItem('address')
            let nic = await AsyncStorage.getItem('nic')
            let phoneNumber = await AsyncStorage.getItem('phoneNumber')
            let email = await AsyncStorage.getItem('email')
            this.setState({
                qrCode: qrCode,
                email: email,
                name: name,
                address: address,
                nic: nic,
                phoneNumber: phoneNumber,
                loaderStatus: false
            })
        } catch (error) {

        }
    }


    render() {
        var qr = this.state.qrCode;
        console.log('JJJJJJJJJJJJJJJ');
        console.log(qr);
        console.log('jjjjjjjjjjjjj')
        return (


            <View style={{flex: 1}}>
                <View style={{flex: 1.5}}>
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
                                style={{marginTop: 30}}
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
                                Start Ride
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
                        
                        }}
                    >
                        <SafeAreaView style={styles.container}>
                           
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
                                    <Title style={{marginBottom: 20}}>QR CODE</Title>
                                    {
                                        this.state.loaderStatus ?
                                            <DoubleBounce size={10} color="#1CAFF6" />
                                            :
                                            <QRCode
                                                style={{height: 200, width: 200}}
                                                value={'' + qr + ''}
                                            />
                                    }
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
        height: "100%",
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
