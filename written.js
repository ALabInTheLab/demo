import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default class App extends Component {
  render() {
    let pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };

    return (
      <View style={styles.container}>
        <Text>How many types of fruit in this pic? </Text>
        <Image source={pic} style={{ width: 193, height: 110 }} />
        <Names name="Xinyi" style={{ backgroundColor: "powderblue" }} />
        <Names
          name="Frozen City Savages"
          style={{ backgroundColor: "steelblue" }}
        />
        {/* </View> */}
        <Counting />
        <Blink msg="blinking" />
        <View style={styles.fixedSquare} />
      </View>
    );
  }
}

class Names extends Component {
  render() {
    return <Text>By {this.props.name}</Text>;
  }
}

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

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    setInterval(() => {
      this.setState(preState => {
        return { showText: !preState.showText };
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.msg : " ";
    return <Text style={[styles.bigblue, styles.red]}>{display}</Text>;
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
  fixedSquare: {
    width: 50,
    height: 50,
    backgroundColor: "skyblue"
  }
});
