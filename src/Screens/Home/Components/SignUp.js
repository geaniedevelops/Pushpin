import React, { Component } from 'react';
import * as firebase from 'firebase';
import { View, Modal, Text, StyleSheet, KeyboardAvoidingView, TextInput } from 'react-native';
import { Button, Item } from 'native-base';
import firebaseApp from '../../../Utils/Firebase';


export default class SignUpForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          modalVisible: false
      }
  }

  onRegister() {
    const { email, password, firstName, lastName, phoneNumber } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
    this.props.navigation.navigate('HomeScreen')
      // Need to add: something to save the user object
    })
    .catch((error) => {
    const { code, message } = error;
  });
}

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

         <Item fixedLabel>
          <TextInput
            style={{flex:1}}
            placeholder='First Name'
            label='First Name'
            onChangeText={(text) => this.setState({firstName:text })}
            value={this.state.firstName}/>
          </Item>

          <Item fixedLabel>
          <TextInput
            style={{flex:1}}
            placeholder='Last Name'
            label='Last Name'
            onChangeText={(text) => this.setState({lastName:text})}
            value={this.state.lastName}/>
          </Item>

          <Item fixedLabel>
          <TextInput
            style={{flex:1}}
            placeholder='Email Address'
            label='Email'
            onChangeText={(text) => this.setState({email:text})}
            value={this.state.email}/>
          </Item>

          <Item fixedLabel>
          <TextInput
            style={{flex:1}}
            placeholder='Password'
            label='Password'
            secureTextEntry
            onChangeText={(text) => this.setState({password:text})}
            value={this.state.password}/>
          </Item>

          <Item fixedLabel>
          <TextInput
            style={{flex:1}}
            placeholder="Phone Number"
            label="Phone Number"
            keyboardType="numeric"
            onChangeText={(text) => this.setState({phoneNumber:text})}
            value={this.state.phoneNumber}/>
          </Item>

          <Button
            round
            info
            onPress={this.onRegister}
            style={{width:350}}>
            <Text>Sign Up</Text>
          </Button>

          <Text
            onPress={() => this.closeModal()}>
            Have An Account? Sign In
          </Text>
        </Modal>

        <Button
          round
          onPress={() => this.openModal()}
          style={styles.openButton}>
          <Text
            style={styles.text}>
            Sign Up
          </Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 2,
    width: 350
  },
  form: {
    flex: 4,
  },
  openButton: {
    width: 150,
    backgroundColor:'#3385e5',
    marginTop: 10,
    justifyContent: 'center'
  },
  text: {
    color:'rgb(254, 250, 236)'
  }
});