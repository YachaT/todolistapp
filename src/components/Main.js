import React, { Component } from "react";

import {
  Platform,
  Keyboard,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import Note from "./Note";

export default class Main extends Component {
  state = {
    noteArray: [],
    noteText: ""
  };

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });

    return (
      <React.Fragment>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>ToDo!</Text>
          </View>
        </View>

        <ScrollView style={styles.scrollContainer}>{notes}</ScrollView>

        <KeyboardAvoidingView behavior="padding" style={styles.footer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              // onPress={this.addNote.bind(this)}

              onPress={() => {
                Keyboard.dismiss();
                this.addNote();
              }}
              style={styles.addButton}
            >
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.textInput}
            onChangeText={noteText => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder="note"
            placeholderTextColor="black"
          />
        </KeyboardAvoidingView>
      </React.Fragment>
    );
  }

  addNote() {
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
        note: this.state.noteText
      });

      this.setState({ noteArray: this.state.noteArray });
      this.setState({ noteText: "" });
    }
  }
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1
  // },
  header: {
    backgroundColor: "#3498db",
    alignItems: "center",
    borderBottomWidth: 10,
    borderBottomColor: "black"
    // justifyContent: "center"
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 25,
    fontWeight: "500",
    marginTop: 10
  },
  scrollContainer: {
    flex: 1
    // marginBottom: 100
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  },
  textInput: {
    alignSelf: "stretch",
    color: "black",
    padding: 20,
    backgroundColor: "whitesmoke",
    borderTopWidth: 2,
    borderTopColor: "black"
  },
  addButton: {
    // position: "absolute",
    // // zIndex: 11,
    // right: 20,
    // // bottom: 90,
    backgroundColor: "#3498db",
    width: 60,
    height: 60,
    borderRadius: 90 / 2,
    alignItems: "center",
    justifyContent: "center"
  },
  addButtonText: {
    color: "#fff",
    fontSize: 25
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    marginRight: 10,
    marginLeft: 10,

    marginBottom: 10
  }
});
