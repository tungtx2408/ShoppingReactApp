import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Drawer
} from "native-base";
import SideBar from "../components/SideBar/SideBar";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  closeDrawer() {
    this._drawer._root.close();
  }
  openDrawer() {
    this._drawer._root.open();
  }
  render() {
    return (
      <Drawer
        ref={ref => {
          this._drawer = ref;
        }}
        content={
          <SideBar
            navigator={this._navigator}
            closeDrawer={() => this.closeDrawer()}
          />
        }
        onClose={() => this.closeDrawer()}
      >
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => this.openDrawer()}>
                <Icon color="white" size={18} name="bars" />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon color="white" size={18} name="search" />
              </Button>
              <Button transparent>
                <Icon color="white" size={18} name="shopping-cart" />
              </Button>
            </Right>
          </Header>
        </Container>
      </Drawer>
    );
  }
}
