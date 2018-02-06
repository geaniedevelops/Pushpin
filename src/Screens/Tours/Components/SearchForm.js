import React, { Component } from "react";
import { Platform } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;
export default class PickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Picker</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Picker
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}
            >
            <Item label="Select A Theme" value="key" />
            <Item label="History" value="History" />
            <Item label="Art" value="Art" />
            <Item label="Fashion" value="Fashion" />
            <Item label="Music" value="Music" />
            <Item label="Finance" value="Finance" />
            <Item label="Crime/Ghost" value="Gritty" />
            <Item label="Food & Drink" value="Foodie" />
            </Picker>
          </Form>
        </Content>
      </Container>
    );
  }
}
