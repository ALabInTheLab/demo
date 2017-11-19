import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
} from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={[styles.containerApp]}>
        <Text>Hello 5117!</Text>
      </View>
    );
  }
}

  // <View style={[styles.containerApp]}>
  //   <Text style={[styles.bigblue, styles.red]}>Hello 5117</Text>
  //   <Names name="xinyi" />
  //   <Names name="Frozen city savages" />
  //   <Counting />
  // </View>;

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


// export default class ContactBook extends Component {
//   constructor(props){
//     super(props);
//     this.state = { 
//       tasks: [], 
//       text: "" 
//     };
//   }
  
//   handleInput = text => {
//     this.setState({ text: text });
//   };

//   addContact = () => {
//     this.setState({
//       tasks: this.state.tasks.concat({ 
//         key: this.state.tasks.length, 
//         text: this.state.text 
//       }),
//       text: ""
//     });
//   };

//   deleteContact = i => {
//     this.state.tasks.splice(i, 1);
//     this.setState({ tasks: this.state.tasks });
//   };

//   render() {
//     return (
//       <View
//         style={[styles.container, { paddingBottom: this.state.viewMargin }]}
//       >
//         <TextInput
//           style={styles.textInput}
//           onChangeText={this.handleInput}
//           onSubmitEditing={this.addContact}
//           value={this.state.text}
//           placeholder="Add a new contact!"
//           returnKeyType="done"
//           returnKeyLabel="done"
//         />
//         <FlatList
//           style={styles.list}
//           data={this.state.tasks}
//           renderItem={({ item, index }) => (
//             <View>
//               <View style={styles.listItemCont}>
//                 <Text style={styles.listItem}>{item.text}</Text>
//                 <Button title="Delete" onPress={() => this.deleteContact(index)} />
//               </View>
//               <View style={styles.hr} />
//             </View>
//           )}
//         />

//       </View>
//     );
//   }
// }



const viewPadding = 10;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: viewPadding,
    paddingTop: 20
  },
  list: {
    width: "100%"
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18
  },
  hr: {
    height: 1,
    backgroundColor: "gray"
  },
  listItemCont: {
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
  },
  containerApp: {
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

