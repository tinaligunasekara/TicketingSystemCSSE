import { Root } from "native-base";
import { Container, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./Component/Dashboard/Dashboard";
import { Assets } from "expo-asset";
import { AppLoading } from "expo";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { color } from "react-native-reanimated";
import { DrawerContent } from "./Component/DrawerContent";
import profile from "./Component/Profile/Profile";
import Login from "./Component/Login/Login";
import Register from "./Component/Login/Register";
import ForeignRegister from "./Component/Login/ForeignRegister";
import AccountDetails from "./Component/AccountDetails/AccountDetails";
import RefreshAccount from "./Component/AccountDetails/RefreshAccount";

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.Prefetch(image);
    } else {
      return Assets.fromModule(image).downloadAsync();
    }
  });
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AppDrawer"
        component={AppDrawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="profile"
        component={profile}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ForeignRegister"
        component={ForeignRegister}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AccountDetails"
        component={AccountDetails}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="RefreshAccount"
        component={RefreshAccount}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const AppDrawer = () => {
  return (
    <Root>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="DashboardDrawer" component={Dashboard} />
        <Drawer.Screen name="profileDrawer" component={profile} />
        <Drawer.Screen name="LoginDrawer" component={Login} />
        <Drawer.Screen name="AccountDetailsDrawer" component={AccountDetails} />
        <Drawer.Screen name="RefreshAccountDrawer" component={RefreshAccount} />
      </Drawer.Navigator>
    </Root>
  );
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([require("./assets/bground.jpg")]);
    await Promise.all([...imageAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <NavigationContainer>
        <StackScreen />
      </NavigationContainer>
    );
  }
}
