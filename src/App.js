import React, { Component } from "react";
import { HomeStack, SideMenu } from "./Router";
import { createAppContainer } from "react-navigation";

const AppContainer = createAppContainer(HomeStack);
const SideMenuContainer = createAppContainer(SideMenu);

export default class App extends Component {
  render() {
    return (
      <SideMenuContainer>
        <AppContainer />
      </SideMenuContainer>
    );
  }
}
