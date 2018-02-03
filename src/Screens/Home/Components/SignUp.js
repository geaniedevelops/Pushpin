import React, { Component } from 'react';
import { StyleSheet, ScrollView, Modal } from 'react-native';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button, Header, H1, H2, H3} from 'native-base';
import firebase from 'react-native-firebase';
import { StackNavigator } from 'react-navigation';
const Item = Picker.Item;

export default class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            phoneNumber: ""
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

    

    }
    render() {
        return (
          <ScrollView style={styles.background}>
            <Modal
              >
            <Container>
                <Content>
                  <Header><H1 style={styles.pagetitle}>Sign Up</H1></Header>
                    <List style={styles.form}>
                        <ListItem>
                            <InputGroup>
                                <Input 
                                value={this.state.firstName}
                                onChangeText={(text) => this.setState({firstName: text})}
                                inlineLabel label="First Name" 
                                placeholder="First Name" 
                                />
                            </InputGroup>
                        </ListItem>

                        <ListItem>
                            <InputGroup>
                                <Input 
                                value={this.state.lastName}
                                onChangeText={(text) => this.setState({lastName: text})}
                                inlineLabel label="Last Name" 
                                placeholder="Last Name" 
                                />
                            </InputGroup>
                        </ListItem>

                        <ListItem>
                            <InputGroup>
                                <Input 
                                value={this.state.email}
                                onChangeText={(text) => this.setState({email: text})}
                                placeholder="Email address"
                                />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Input 
                                value={this.state.password}
                                onChangeText={(text) => this.setState({password: text})}
                                placeholder="Password" 
                                secureTextEntry />
                            </InputGroup>
                        </ListItem>

                        <ListItem>
                            <InputGroup>
                                <Input 
                                value={this.state.phoneNumber}
                                onChangeText={(text) => this.setState({phoneNumber: text})}
                                placeholder="Phone Number" 
                                keyboardType="numeric" 
                                />
                            </InputGroup>
                        </ListItem>
                    </List>
                    <Button 
                    style={styles.button}
                    onPress={this.onRegister}
                    ><Text>Sign Up</Text></Button>
                </Content>
            </Container>
          </Modal>
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

//LOGIC NOTES
//SIGN IN/SIGN  UP MODALS:
// animated='true'
// visible= 'false'
// onRequestClose="Logic for submitting new user or logging in current user";
// appears through logic to determine whether users are already logged in
