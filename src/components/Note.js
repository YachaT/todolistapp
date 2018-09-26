import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default class Note extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>
        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={styles.noteDelete}
        >
          <Text style={styles.noteDeleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#3498db"
  },

  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
    borderRadius: 5
  },
  noteDeleteText: {
    color: "white"
  }
});
