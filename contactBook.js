
export default class ContactBook extends Component {
  constructor(props){
    super(props);
    this.state = { 
      tasks: [], 
      text: "" 
    };
  }
  
  handleInput = text => {
    this.setState({ text: text });
  };

  addContact = () => {
    this.setState({
      tasks: this.state.tasks.concat({ 
        key: this.state.tasks.length, 
        text: this.state.text 
      }),
      text: ""
    });
  };

  deleteContact = i => {
    this.state.tasks.splice(i, 1);
    this.setState({ tasks: this.state.tasks });
  };

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
          data={this.state.tasks}
          renderItem={({ item, index }) => (
            <View>
              <View style={styles.listItemCont}>
                <Text style={styles.listItem}>{item.text}</Text>
                <Button title="Delete" onPress={() => this.deleteContact(index)} />
              </View>
              <View style={styles.hr} />
            </View>
          )}
        />

      </View>
    );
  }
}
