import React, { Component } from 'react';
import { Modal } from 'react-native';
import { List, ListItem, InputGroup, Input, Text, Button } from 'native-base';

export default class SignInForm extends Component {
  render() {
    return (
      <Modal>
        <List>
        <ListItem>
            <InputGroup>
                <Input placeholder="Email" />
            </InputGroup>
        </ListItem>
        <ListItem>
            <InputGroup>
                <Input placeholder="Password" secureTextEntry />
            </InputGroup>
        </ListItem>
      </List>
      <Button><Text>Log In</Text></Button>
      </Modal>
    );
  }
}
