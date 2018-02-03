import React, { Component } from 'react';
import { Modal } from 'react-native';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button, Header, H1, H2, H3} from 'native-base';
const Item = Picker.Item;

export default class SignUpForm extends Component {
  render() {
        return (
            <Modal>
            <Container>
                <Content>
                  <Header><H1>Sign Up</H1></Header>
                    <List>
                        <ListItem>
                            <InputGroup>
                                <Input inlineLabel label="First Name" placeholder="First Name" />
                            </InputGroup>
                        </ListItem>

                        <ListItem>
                            <InputGroup>
                                <Input inlineLabel label="Last Name" placeholder="Last Name" />
                            </InputGroup>
                        </ListItem>

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

                        <ListItem>
                            <InputGroup>
                                <Input placeholder="Phone Number" keyboardType="numeric" />
                            </InputGroup>
                        </ListItem>
                    </List>
                    <Button><Text>Sign Up</Text></Button>
                </Content>
            </Container>
          </Modal>
        );
    }
};
