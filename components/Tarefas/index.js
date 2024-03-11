import React from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit, faWindowClose} from '@fortawesome/free-solid-svg-icons';

export default function Tarefas({ tarefas, handleEdit, handleDelete}) {
  
    return (
      <View style={styles.itemContainer}>
        <FlatList
          data={tarefas}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <Text >{item}</Text>
              <View style={styles.buttons}>
                <TouchableOpacity onPressOut={() => handleEdit(index)}>
                    <FontAwesomeIcon icon={faEdit} style={styles.edit}/>
                </TouchableOpacity>
                <TouchableOpacity onPressOut={() => handleDelete(index)}>
                    <FontAwesomeIcon icon={faWindowClose} style={styles.delete}/>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 30
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    fontSize: 10
  },
  buttons:{
    flexDirection: 'row',
  },
  edit: {
    color: '#51c5de',
    padding: 20
  },
  delete: {
    color: '#f04c64',
    padding: 20
  }
})
