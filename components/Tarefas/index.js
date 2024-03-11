import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit, faWindowClose} from '@fortawesome/free-solid-svg-icons';

export default function Tarefas({ tarefas, handleEdit, handleDelete}) {
  
    return (
      <View>
        <FlatList
          data={tarefas}
          renderItem={({ item, index }) => (
            <View>
              <Text >{item}</Text>
              <View>
                <TouchableOpacity onPressOut={() => handleEdit(index)}>
                    {/* <FontAwesomeIcon icon={faEdit} /> */}
                </TouchableOpacity>
                <TouchableOpacity onPressOut={() => handleDelete(index)}>
                    {/* <FontAwesomeIcon icon={faWindowClose} /> */}
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    );
}
