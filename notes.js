import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";

export default class App extends Component {
  render() {
    return <View style={[styles.container]}>
        <Text style={[styles.bigblue, styles.red]}>Hello 5117</Text>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: "powderblue" }} />
          <View style={{ flex: 2, backgroundColor: "skyblue" }} />
          <View style={{ flex: 3, backgroundColor: "steelblue" }} />
        </View>
        <View style={{ flex: 1 }}>
          <Names name="xinyi" style={{ flex: 2, flexDirection: "row" }} />
          <Names name="Frozen city savages" />
        </View>
        <Counting />
      </View>;
  }
}

// flex
    // <View style={{ height: 200 }}>
    //     <View style={{ flex: 1, backgroundColor: "powderblue" }} />
    //     <View style={{ flex: 2, backgroundColor: "skyblue" }} />
    //     <View style={{ flex: 3, backgroundColor: "steelblue" }} />
    // </View>;

// Props 
class Names extends Component {
  render() {
    return <Text>By {this.props.name}</Text>;
  }
}

// Props, state, touch (Button): onPress
class Counting extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let preCount = this.state.count;
    this.setState({ count: preCount + 1 });
  }

  render() {
    return (
      <View>
        <Button title="click me!" onPress={this.handleClick} />
        <Text>{this.state.count}</Text>
      </View>
    );
  }
}

// Text input: onChangeText, onSubmitEditing 
class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render (){
      return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
      );
  }
}


// Stylesheet: list, precedence
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
  }
});
