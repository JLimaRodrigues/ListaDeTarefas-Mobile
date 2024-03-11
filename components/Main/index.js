import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Title from '../Title';
import Form from '../Form';
import Tarefas from '../Tarefas';

export default class Main extends Component {

  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1
  }

  async componentDidMount(){
        const tarefas = await JSON.parse(AsyncStorage.getItem('tarefas'));

        if(!tarefas) return;

        this.setState({ tarefas });
    }

  componentDidUpdate(prevPops, prevState){
      const { tarefas } = this.state;

      if(tarefas === prevState.tarefas) return;

      try{
        AsyncStorage.setItem('tarefas', JSON.stringify(tarefas));
      } catch(error){
        console.error('Erro ao salvar dados: ', error)
      }
  }

  handleSubmit = (e) => {

    const { tarefas, index } = this.state;

    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if(tarefas.indexOf(novaTarefa) != -1) return;

    const novasTarefas = [...tarefas];

    if(index === -1){
      this.setState({
                tarefas: [...novasTarefas, novaTarefa],
                novaTarefa: ''
            })
    } else {
      this.setState({
                tarefas: [...novasTarefas, novaTarefa],
                novaTarefa: ''
            })
    }

  }

   handleEdit = (e, index) => {
        const { tarefas } = this.state;

        this.setState({
            index,
            novaTarefa: tarefas[index]
        })
    }

    handleDelete = (e, index) => {
        const { tarefas } = this.state;
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1);

        this.setState({
            tarefas: [...novasTarefas]
        })
    }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value
    })
  }

  render(){
    const { novaTarefa, tarefas } = this.state;

    return (
      <View style={styles.main}>
          <Title />

          <Form
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            novaTarefa={novaTarefa}
          />

          <Tarefas 
            tarefas={tarefas}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
          />
      </View>
      )
  }
  
}

const styles = StyleSheet.create({
  main: {
    marginTop: 50,
    padding: 50,
    borderColor: 'black',
    borderWidth: 1
  }
})
