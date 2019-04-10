import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Home from "./screens/Home";
import User from "./screens/User";
import Menu from "./screens/components/Menu";

export const HomeStack = createStackNavigator({
  Screen_Home: {
    screen: Home
  },
  Screen_User: {
    screen: User
  }
});

export const SideMenu = createDrawerNavigator(
  {
    Tabbar: {
      screen: HomeStack
    }
  },
  {
    drawerWidth: 300,
    drawerPosition: "left",
    contentComponent: props => <Menu {...props} />
  }
);
