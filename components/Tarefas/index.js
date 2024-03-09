import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit, faWindowClose} from '@fortawesome/free-solid-svg-icons';

export default function Tarefas({ tarefas, handleEdit, handleDelete}) {
  
    return (
      <View style={styles.container}>
        <FlatList
          data={tarefas}
          renderItem={({ item, index }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.item}>{item}</Text>
              <View style={styles.buttons}>
                <TouchableOpacity onPressOut={() => handleEdit(index)} style={styles.edit}>
                    {/* <FontAwesomeIcon icon={faEdit} /> */}
                </TouchableOpacity>
                <TouchableOpacity onPressOut={() => handleDelete(index)} style={styles.delete}>
                    {/* <FontAwesomeIcon icon={faWindowClose} /> */}
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
