import React, { Component } from 'react';
import { StyleSheet, ScrollView, Modal } from 'react-native';
import { Container, Content, Card, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button, Header, H1, H2, H3} from 'native-base';
const Item = Picker.Item;

export default class SignUpForm extends Component {
    render() {
        return (
            <Modal
              style={style.modal}
              >
                <Card>
                  <H1>Sign Up</H1>
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
                </Card>
            </Modal>
        );
    }
};

const style = StyleSheet.create({
  modal: {
    padding: 5,
  },
});
