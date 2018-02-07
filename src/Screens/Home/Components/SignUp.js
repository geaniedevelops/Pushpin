import React, { Component } from 'react';
import * as firebase from 'firebase';
import { View, Modal, Text, StyleSheet } from 'react-native';
// import { List, ListItem, InputGroup, Input, Text, Button } from 'native-base';
import { Button, Input } from 'native-base';
import firebaseApp from '../../../Utils/Firebase';


export default class SignUpForm extends Component {
  state = {
    modalVisible: false,
  };

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }


  render() {
    return (
      <View>
        <Modal
         visible={this.state.modalVisible}
         animationType={'slide'}
         onRequestClose={() => this.closeModal()}>
          <Input
            placeholder='First Name'
            label='First Name'
            onChangeText={firstName => this.setState({ firstName })}
            value={this.state.firstName}/>
          <Input
            placeholder='Last Name'
            label='Last Name'
            onChangeText={lastName => this.setState({ lastName })}
            value={this.state.lastName}/>
          <Input
            placeholder='Email Address'
            label='Email'
            onChangeText={email => this.setState({ email })}
            value={this.state.email}/>
            <Input
            placeholder='Password'
            label='Password'
            secureTextEntry
            onChangeText={password => this.setState({ password })}
            value={this.state.password}/>
          <Button
            round
            info
            style={{width:350}}>
            <Text>Sign Up</Text>
          </Button>
          <Text
            onPress={() => this.closeModal()}>Have An Account? Sign In</Text>
        </Modal>

        <Button
          round
          onPress={() => this.openModal()}
          style={styles.openButton}>
          <Text
            >Sign Up</Text>
        </Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  button: {
    flex: 2,
    width: 350
  },
  form: {
    flex: 4,
  },
  openButton: {
    width:350,
    padding:5,
    alignContent: 'center'
  }
});
