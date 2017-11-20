import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image
} from "react-native";

export default class App extends Component {
  render() {
    return <View style={[styles.container]}>
        <Text>Hello 5117!</Text>
        <Names name="Xinyi" />
        <Names name="Frozen City Savages" />
        <Counting />
        <View style={{ height: 200, flexDirection: "row" }}>
          <Image source={require("./cat.jpg")} style={{ flex: 1 }} />
          <Image source={require("./dog.jpg")} style={{ flex: 1 }} />
        </View>
      </View>;
  }
}

{/* 
  <div> --> <View>
  <p>   --> <Text>
*/}


// flex


// Props 
class Names extends Component {
  render() {
    return (
    <Text>By {this.props.name}</Text>
    );
  }
}



// State, touch (Button): onPress
class Counting extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <View>
        <Button title="click me!" onPress={this.handlePress} />
        <Text>{this.state.count}</Text>
      </View>
    );
  }
}

// Style is a Javascript object, instead of css
// Camel casing: 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue', //background-color
    flex: 1, //  the ratio of space a component will take compared to its siblings
    alignItems: "center",
    justifyContent: "center"
  },
  bigblue: {  // the later one takes precedence
    color: "blue",
    fontSize: 30
  },
  red: {
    color: "red"
  }
});

