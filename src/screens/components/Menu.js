import React, { Component } from "react";
import { Text, SafeAreaView, View } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { SearchBar } from "react-native-elements";

const buttons = {
  arrowButtons: ["Home", "Men", "Women", "Kid", "Accessories"],
  iconButtons: [
    { text: "Shop finder", icon: "search" },
    { text: "Wish lish", icon: "heart" },
    { text: "User's profile", icon: "user" },
    { text: "Your shop", icon: "shopping-bag" }
  ],
  icons: [
    "facebook-square",
    "instagram",
    "twitter-square",
    "youtube-square",
    "snapchat-square"
  ]
};

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  updateSearch = search => {
    this.setState({ search });
  };

  _renderArrorButtons(buttons) {
    const rowLen = buttons.length;
    return buttons.map((button, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={{
            marginTop: 10,
            paddingBottom: 10,
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomColor: "grey",
            borderBottomWidth: rowLen === index + 1 ? 0 : 1
          }}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={{ fontSize: 16 }}>{button}</Text>
          <Icon name="chevron-right" />
        </TouchableOpacity>
      );
    });
  }

  _renderIconButtons(buttons) {
    return buttons.map((button, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={{
            marginTop: 10,
            paddingBottom: 10,
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            borderBottomColor: "grey"
          }}
          onPress={() => this.props.navigation.goBack()}
        >
          <Icon size={24} style={{ marginRight: 10 }} name={button.icon} />
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {button.text}
          </Text>
        </TouchableOpacity>
      );
    });
  }

  _renderFollowIcons(buttons) {
    return buttons.map((button, index) => {
      return (
        <TouchableOpacity style={{ backgroundColor: "grey" }} key={index}>
          <Icon size={24} color="black" name={"facebook"} />
        </TouchableOpacity>
      );
    });
  }
  render() {
    const { search } = this.state;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <SearchBar
          placeholder="Search..."
          onChangeText={this.updateSearch}
          value={search}
          lightTheme={true}
        />
        <ScrollView>
          <View
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              borderBottomColor: "grey",
              borderBottomWidth: 2
            }}
          >
            {this._renderArrorButtons(buttons.arrowButtons)}
          </View>
          <View
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              borderBottomColor: "grey",
              borderBottomWidth: 2
            }}
          >
            {this._renderIconButtons(buttons.iconButtons)}
          </View>
        </ScrollView>
        <View style={{ padding: 10, minHeight: 200 }}>
          <Text>Follow us</Text>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 10
            }}
          >
            {this._renderFollowIcons(buttons.icons)}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
