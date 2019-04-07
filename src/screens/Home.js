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
export default class Home extends Component {
  constructor(props) {
    super(props);
  }
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
                alignItems: "center",
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
      <Container>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text> Home </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Screen_User");
            }}
            style={{ backgroundColor: "gray", padding: 10 }}
          >
            <Text>Go to User</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.openDrawer();
            }}
            style={{ backgroundColor: "gray", padding: 10 }}
          >
            <Text>Open drawer</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}
