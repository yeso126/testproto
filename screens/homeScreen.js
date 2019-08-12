import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = ({navigation}) =>({
        header:null,
    })
    constructor(props) {
        super(props);
        this.state = { email: 'Useless Placeholder' };
      }

    setChange(e){
        console.log(e.nativeEvent.text)
        this.setState({
            email: e.nativeEvent.text
        })
    }

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Login</Text>
          <Text style={styles.instructions}>Please enter your email address</Text>
          <TextInput
            value= {this.state.email}
            onChange={this.setChange.bind(this)}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });