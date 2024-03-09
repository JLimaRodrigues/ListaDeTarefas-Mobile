import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

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

      AsyncStorage.setItem('tarefas', JSON.stringify(tarefas));
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
      <View>
        <View>
            <Form
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              novaTarefa={novaTarefa}
            />
          </View>
          <View>
            <Tarefas 
              tarefas={tarefas}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
            />
          </View>
      </View>
      )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
