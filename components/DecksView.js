import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Card ({ title, number }) {
  return (
    <View style={style.card}>
      <Text>{title}</Text>
      <Text>{number}</Text>
    </View>
  )
}

export default class DecksView extends Component {
  render() {
    return (
      <View>
        <Text>This is a deck</Text>
        <Card title="test" number="0" />
      </View>
    )
  }
}

const style = StyleSheet.create({
  card: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        margin: 20,
        justifyContent: 'center'
      }
})