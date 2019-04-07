import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import {
  Header,
  Left,
  Content,
  Right,
  Container,
  Button,
  Body,
  Title
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
export default class User extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <Header>
          <Left
            style={{
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              style={{
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => {
                navigation.openDrawer();
              }}
            >
              <Icon name="bars" size={18} color={"#fff"} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
      )
    };
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> User </Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={{ backgroundColor: "gray", padding: 10 }}
        >
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}