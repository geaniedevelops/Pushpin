import React, { Component } from 'react';
import { Modal } from 'react-native';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button, Header, H1, H2, H3} from 'native-base';
const Item = Picker.Item;

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
