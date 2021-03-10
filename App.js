import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      input: ''
    }
    this.enviar = this.enviar.bind(this);
  }
enviar(){
  if(this.state.input === ''){
    alert('Digite seu nome');
    return;
  }
  this.setState({nome: 'Bem vindo(a)' + this.state.input})
}
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Digite seu nome'
          onChangeText={(texto) => this.setState({input: texto})}
        ></TextInput>
        <Button
        title='Enviar'
        onPress={this.enviar}
        />
        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#222",
    fontSize: 20,
    padding: 10,
    margin: 10,
  },
  texto: {
    fontSize: 25,
    textAlign: "center",
  },
});

export default App;
