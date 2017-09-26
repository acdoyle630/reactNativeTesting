import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      word : "app"
    };
  }


  changeWord=()=>{
    if(this.state.word === 'app'){
      this.setState({
        word : "Shit"
      });
    }
    else{
      this.setState({
        word : "app"
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Some sort of {this.state.word}</Text>
        <Button
          onPress={this.changeWord}
          title = 'Click me'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
