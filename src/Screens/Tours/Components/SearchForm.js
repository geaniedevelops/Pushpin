import React, {Component} from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Input, Item, H1, Content, Picker, Form, Label, Button, Text } from 'native-base';
import SearchPicker from './SearchPicker';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: '',
      zipcode: ''
    };
  }
  onValueChange(value: string) {
    this.setState({
      theme: value
    });
  }

  render() {
    return (
        <Form
          style={styles.form}>
          <Item inlineLabel>
             <Label>Zipcode</Label>
             <Input />
           </Item>
          <Picker
            mode="dropdown"
            placeholder="Choose A Category"
            selectedValue={this.state.theme}
            onValueChange={this.onValueChange.bind(this)}>
              <Item label="Popular" value="popular" />
              <Item label="History" value="history"/>
              <Item label="Fashion" value="fashion"/>
              <Item label="Art" value="art"/>
              <Item label="Food & Drink" value="foodanddrink"/>
              <Item label="LGBT" value="lgbt"/>
              <Item label="Finance" value="finance"/>
              <Item label="Crime & Ghost" value="gritty"/>
          </Picker>
          <Button
            style={styles.button}>
            <Text>Search</Text>
          </Button>
        </Form>
      )
  }
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'rgba(254, 250, 236, .8)',
    marginTop:5,
    alignContent: 'center'
  },
  button: {
    backgroundColor: '#3385e5',
    width: 300,
    margin:3,
    justifyContent: 'center'
  }
})
