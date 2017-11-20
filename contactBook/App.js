import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
  Keyboard
} from "react-native";

// describe the data strcleucture first
// touchable -> onPress

export default class ContactBook extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts: [], text: "" };
  }

  componentDidMount() {
    Keyboard.addListener(
      "keyboardWillShow",
      e =>
        this.setState({
          viewPadding: e.endCoordinates.height + viewPadding
        })
    );

    Keyboard.addListener(
      "keyboardWillHide",
      () =>
        this.setState({
          viewPadding: viewPadding
        })
    );
  }

  render() {
    return (
      <View
        style={[styles.container, { paddingBottom: this.state.viewMargin }]}
      >
        <TextInput
          style={styles.textInput}
          onChangeText={this.handleInput}
          onSubmitEditing={this.addContact}
          value={this.state.text}
          placeholder="Add a new contact!"
          returnKeyType="done"
          returnKeyLabel="done"
        />
        <FlatList
          style={styles.list}
          data={this.state.contacts}
          renderItem={({ item, index }) => (
            <View>
              <View style={styles.listItemCont}>
                <Text style={styles.listItem}>
                  {item.text}
                </Text>
                <Button
                  title="Delete"
                  style={{ flex: 2 }}
                  onPress={() => this.deleteContact(index)}
                />
              </View>
              <View style={styles.hr} />
            </View>
          )}
        />
      </View>
    );
  }

  handleInput = text => {
    this.setState({ text: text });
  };

  addContact = () => {
    this.setState({
      contacts: this.state.contacts.concat({
        key: this.state.contacts.length,
        text: this.state.text
      }),
      text: ""
    });
  };

  // var contacts = ["Annie", "Ben", "Chris", "David"];
  // contacts.splice(2, 1, "Ellen");
  // contacts: Annie,Ben,Ellen,David
  deleteContact = i => {
    this.state.contacts.splice(i, 1);
    this.setState({
      contacts: this.state.contacts
    });
  };
}

const viewPadding = 10;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: viewPadding,
    paddingTop: 20
  },
  list: {
    width: "100%"
  },
  listItem: {
    flex: 1,
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18
  },
  hr: {
    height: 1,
    backgroundColor: "gray"
  },
  listItemCont: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textInput: {
    height: 40,
    padding: viewPadding,
    borderColor: "lightgrey",
    borderWidth: 0.5,
    width: "100%"
  }
});
