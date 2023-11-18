import React, {Component} from "react";
import {View, Text, StyleSheet} from 'react-native';
import { Card, Divider } from 'react-native-elements';
import { color } from "react-native-elements/dist/helpers";

class Contact extends Component {
  render() {
    return (
      <Card style={styles.card}>
          <Divider>
            <Card.Title style={styles.title}>Contact Information</Card.Title>
          </Divider>
          <View style={styles.flexText}>
            <Text style={styles.text}>121, Clear Water Bay Road</Text>
            <Text style={styles.text}>Clear Water Bay, Kowloon</Text>
            <Text style={styles.text}>HONG KONG</Text>
            <Text style={styles.text}>Tel: +852 1234 5678</Text>
            <Text style={styles.text}>Fax: +852 8765 4321</Text>
            <Text style={styles.text}>Email:confusion@food.net</Text>
          </View>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  lineTitle: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 15,
  },

  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },

flexText: {
  display: 'flex',
  gap: 15,
  marginTop: 15,
},

text: {
  color: 'black',
}
})

export default Contact;