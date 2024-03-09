import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';


export default function Form() {
  
    return (
          <View style={styles.form}>
            <TextInput style={styles.input}></TextInput>
          </View>
        );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 20,
    paddingHorizontal: 20
  }
});
