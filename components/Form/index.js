import React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Form({ handleChange, handleSubmit, novaTarefa}) {
  
    return (
          <View style={styles.form}>
            <TextInput 
              onChangeText={handleChange}
              placeholder='Ex. Lavar o Carro'
              style={styles.input}
              value={novaTarefa}
              ></TextInput>
            <TouchableOpacity onPress={handleSubmit}>
              <FontAwesomeIcon icon={faPlus} style={styles.button} />
            </TouchableOpacity>
          </View>
        );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 20,
    flexDirection: 'row',
    marginVertical: 'auto',
    justifyContent: 'center',
  },
  input: {
    height: '100%',
    width: '50%',
    borderColor: '#ccc',
    borderWidth: 1
  },
  button: {
    padding: 17,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    backgroundColor: '#f04c64'
  }
});
