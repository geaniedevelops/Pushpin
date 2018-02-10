import React, { Component } from 'react';
import * as firebase from 'firebase';
import { View, Modal, Text, StyleSheet } from 'react-native';
import { Button, Input, Item } from 'native-base';
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
         <Item fixedLabel>
          <Input
            style={{flex:1}}
            placeholder='First Name'
            label='First Name'
            onChangeText={firstName => this.setState({ firstName })}
            value={this.state.firstName}/>
          </Item>
          <Item fixedLabel>
          <Input
            style={{flex:1}}
            placeholder='Last Name'
            label='Last Name'
            onChangeText={lastName => this.setState({ lastName })}
            value={this.state.lastName}/>
          </Item>
          <Item fixedLabel>
          <Input
            style={{flex:1}}
            placeholder='Email Address'
            label='Email'
            onChangeText={email => this.setState({ email })}
            value={this.state.email}/>
          </Item>
          <Item fixedLabel>
          <Input
            style={{flex:1}}
            placeholder='Password'
            label='Password'
            secureTextEntry
            onChangeText={password => this.setState({ password })}
            value={this.state.password}/>
          </Item>

          <Item fixedLabel>
          <Input
            style={{flex:1}}
            placeholder="Phone Number"
            label="Phone Number"
            keyboardType="numeric"
            onChangeText={(text) => this.setState({ phoneNumber })}
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
            onPress={() => this.closeModal()}>Have An Account? Sign In</Text>
        </Modal>

        <Button
          round
          onPress={() => this.openModal()}
          style={styles.openButton}>
          <Text
            style={styles.text}>
            Sign Up</Text>
        </Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    height: 400,
    width: 200
  },
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
