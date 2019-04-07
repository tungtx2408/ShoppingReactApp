import React, { Component } from "react";
import { Content } from "native-base";
import { Text, View } from "react-native";

export default class SideBar extends Component {
  closeDrawer() {}
  render() {
    return (
      <Content style={{ backgroundColor: "#fff" }}>
        <View style={{ marginLeft: 5, marginRight: 5 }}>
          <Text onPress={() => this.props.closeDrawer()}>ABC</Text>
        </View>
      </Content>
    );
  }
}
