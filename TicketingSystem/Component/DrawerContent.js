import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
              }}
            >
              <Avatar.Image
                source={{
                  uri:
                    "https://avatars3.githubusercontent.com/u/44874559?s=400&v=4",
                }}
                size={50}
              />
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: "column",
                }}
              >
                <Title style={styles.title}>Samitha Perera </Title>
                <Caption style={styles.caption}>@samitha_96</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  Profession:
                </Paragraph>
                <Caption style={styles.caption}>Animal Farmer</Caption>
              </View>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="Dashboard"
            onPress={() => {
              props.navigation.navigate("DashboardDrawer");
            }}
          />
             <DrawerItem
            icon={({ color, size }) => (
              <Icon name="car" color={color} size={size} />
            )}
            label="Start Ride"
            onPress={() => {
              props.navigation.navigate("StartRideDrawer");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="account-outline" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {
              props.navigation.navigate("profileDrawer");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="bookmark-outline" color={color} size={size} />
            )}
            label="Account Balance"
            onPress={() => {
              props.navigation.navigate("AccountDetailsDrawer");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="settings-outline" color={color} size={size} />
            )}
            label="Settings"
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="account-check-outline" color={color} size={size} />
            )}
            label="Support"
           
            onPress={() => {
              props.navigation.navigate("TransportManagerDrawer");
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section title="Preferences">
        <TouchableRipple
          onPress={() => {
            toggleTheme();
          }}
        >
          <View style={styles.preference}>
            <Text>Dark Theme</Text>
            <View pointerEvents="none">
              <Switch value={isDarkTheme} />
            </View>
          </View>
        </TouchableRipple>
      </Drawer.Section>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            props.navigation.navigate("Login");
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
