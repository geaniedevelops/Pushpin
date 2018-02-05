import React, { Component } from 'react';
import { StyleSheet, ScrollView, Modal } from 'react-native';
import { Container, Content, List, ListItem, InputGroup, Input, Text, Button, Header, H1} from 'native-base';
import firebase from 'react-native-firebase';
import { StackNavigator } from 'react-navigation';

export default class SignInForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    gotoSignUp() {
        // Navigate to sign up, think it might need to be its own screen?
    }

onLogin() {
  const { email, password } = this.state;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    this.props.navigation.navigate('HomeScreen')
});
  }.catch((error) => {
    const { code, message } = error;
  });

  render() {
    return (
      <ScrollView style={styles.background}>
        <Modal>
          <Container>
            <Content>
              <Header><H1 style={styles.pagetitle}>Sign In</H1></Header>
                <List style={styles.form}>
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
                </List>
                <Button rounded info
                  >
                  <Text>Sign In</Text>
                </Button>
            </Content>
          </Container>
        </Modal>
      </ScrollView>
      );
}
};

// const styles = StyleSheet.create({
//   background: {
//     backgroundColor: "#C3C48D",
// },
// pageTitle: {
//     paddingTop: 5
// },
// form: {
//     marginTop: 20,
//     marginLeft: 10,
//     marginRight:10,
//     backgroundColor: "#C3C48D",
//     paddingTop:5
// }
// });
//
// }
