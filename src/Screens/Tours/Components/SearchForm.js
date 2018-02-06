import React, { Component } from 'react';
import { Platform, StyleSheet } from "react-native";
import { Container, Header, Title, Content, Button, Text, Right, Body, Left, Picker, Form, Item, Item as FormItem , Input} from "native-base";
const Options = Picker.Item;

export default class SearchForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selected3: "key"
      };
    }
    onValueChange3(value: string) {
      this.setState({
        selected3: value
      });
    }

  render() {
    return (
      <Container
        style={styles.container}>
        <Content>
          <Item>
            <Input placeholder="Zip Code" />
          </Item>
        <Content>
          <Form>
            <Picker
              mode="dropdown"
              headerBackButtonText="Baaack!"
              selectedValue={this.state.selected3}
              onValueChange={this.onValueChange3.bind(this)}
            >
              <Options label="Select A Theme" value="key" />
              <Options label="History" value="History" />
              <Options label="Art" value="Art" />
              <Options label="Fashion" value="Fashion" />
              <Options label="Music" value="Music" />
              <Options label="Finance" value="Finance" />
              <Options label="Crime/Ghost" value="Gritty" />
              <Options label="Food & Drink" value="Foodie" />
            </Picker>
          </Form>
        </Content>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEFAEC",
    height: 200
  }
})
