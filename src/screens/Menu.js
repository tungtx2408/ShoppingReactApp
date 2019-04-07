import React, { Component } from "react";
import { Text, View, SafeAreaView, TextTextInput } from "react-native";
import {
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";
import { SearchBar } from "react-native-elements";

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
          <TouchableOpacity style={{ paddingTop: 10 }}>
            <Text>Home</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
