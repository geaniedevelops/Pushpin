import React from 'react';
import { View, Modal, Text, StyleSheet, KeyboardAvoidingView, Alert, ImageBackground } from 'react-native';
import { Button, Item, Container, Input, Card } from 'native-base';
import HeaderBar from '../../Components/HeaderBar';


export default class AccountScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../../Assets/images/launch_background.png')}
        style={styles.image}>
        <HeaderBar/>
        <KeyboardAvoidingView
        behavior="padding"
        style={{flex:1}}>
        <Card>
          <Item fixedLabel>
           <Input
             style={{flex:1}}
             placeholder='First Name'
             label='First Name'
             onChangeText={firstName => this.setState({ firstName })}
             />
           </Item>

           <Item fixedLabel>
           <Input
             style={{flex:1}}
             placeholder='Last Name'
             label='Last Name'
             onChangeText={lastName => this.setState({ lastName })}
             />
           </Item>

           <Item fixedLabel>
           <Input
             style={{flex:1}}
             placeholder='Email Address'
             label='Email'
             onChangeText={email => this.setState({ email })}
             />
           </Item>

           <Item fixedLabel>
           <Input
             style={{flex:1}}
             placeholder='Password'
             label='Password'
             secureTextEntry
             onChangeText={password => this.setState({ password })}
             />
           </Item>

           <Item fixedLabel>
           <Input
             style={{flex:1}}
             placeholder="Phone Number"
             label="Phone Number"
             keyboardType="numeric"
             onChangeText={phoneNumber => this.setState({ phoneNumber })}
             />
           </Item>
           <Button
             round
             style={styles.openButton}>
             <Text
               style={styles.text}>
               Update
             </Text>
           </Button>
        </Card>
      </KeyboardAvoidingView>
    </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null
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
