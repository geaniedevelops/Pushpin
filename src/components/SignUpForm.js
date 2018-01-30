import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button, Header, H1, H2, H3} from 'native-base';
const Item = Picker.Item;

export default class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key0',
            results: {
                items: [],
            },
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected1: value,
        });
    }
    render() {
        return (
          <ScrollView style={styles.background}>
            <Container>
                <Content>
                  <Header><H1 style={styles.pagetitle}>Sign Up</H1></Header>
                    <List style={styles.form}>
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
                    <Button style={styles.button}><Text>Sign Up</Text></Button>
                </Content>
            </Container>
          </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#C3C48D",
  },
  pageTitle: {
    paddingTop: 5
  },
  form: {
    marginTop: 20,
    marginLeft: 10,
    marginRight:10,
    backgroundColor: "#C3C48D",
    paddingTop:5
  },

  button: {
    backgroundColor: "#928C6F",
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20
  }
});
