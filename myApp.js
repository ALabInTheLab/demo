import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  Alert,
  ScrollView,
  FlatList,
  SectionList
} from "react-native";

export default class App extends Component {
  render() {
    return (
      <View>
        {/* <Text>hello</Text> */}
        <NewContact />
      </View>
    );
  }
}

class NewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      contacts: ""
    };
    this.addContact = this.addContact.bind(this);
  }

  addContact() {
    this.setState({
      contacts: this.state.contacts + "," + this.state.text,
      text: ""
    });
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Add new contact here!"
          onChangeText={text => this.setState({ text })}
        />
        <Button title="Add" onPress={this.addContact} />
        {/* <Text>{this.state.contacts}</Text> */}
        <FlatList
          style={{ padding: 10, fontSize: 42 }}
          data={[{ key: this.state.contacts }]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  bigblue: {
    color: "blue",
    fontSize: 30
  },
  red: {
    color: "red"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
