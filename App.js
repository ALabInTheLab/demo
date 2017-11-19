import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  AsyncStorage,
  Button,
  TextInput,
  Keyboard,
  Platform
} from "react-native";

const viewPadding = 10;


export default class ContactBook extends Component {
  render () {
    return (
      <View>
        <Text>My Contact Book</Text>
        <NewContact />
        <ContactList />
      </View>
    );
  }
};


class NewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      contacts: []
    };
    this.addContact = this.addContact.bind(this);
    this.handleInput = this.handleInput.bind(this);
  };

  handleInput(text) {
    this.setState({ text: text });
  };

  addContact() {
    let notEmpty = this.state.text.trim().length > 0;

    if (notEmpty) {
      this.setState({text: this.state.text + this.state.contacts});
      // this.setState(
      //   prevState => {
      //     let { contacts, text } = prevState;
      //     return {
      //       contacts: contacts.concat({ key: contacts.length, text: text }),
      //       text: ''
      //     };
      //   },
      //   () => Tasks.save(this.state.tasks)
      // );
    }
  };

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Add new contact here!"
          onChangeText={this.handleInput}
          onSubmitEditing={this.addContact}
        />
        {/* <Button title="Add" onPress={this.addContact} /> */}
      </View>
    );
  }
}

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      contacts: []
    };
    // this.addContact = this.addContact.bind(this);
  }
  render() {
    return (
      <FlatList
        style={{ padding: 10, fontSize: 42 }}
        data={[{ key: this.state.contacts }]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
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

