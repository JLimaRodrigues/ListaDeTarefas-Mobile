import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Form() {
  
    return (
          <View style={styles.form}>
            <TextInput style={styles.input}></TextInput>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faPlus} />
            </TouchableOpacity>
          </View>
        );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 1
  },
  input: {
    height: 36,
    paddingHorizontal: '40%',
    borderColor: '#ccc',
    borderWidth: 1
  }
});
