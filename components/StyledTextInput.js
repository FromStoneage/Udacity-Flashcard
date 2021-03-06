import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default function StyledTextInput (props) {
  return (
    <TextInput
      style={styles.input}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 30,
    marginBottom: 10,
    marginRight: 30,
    marginLeft: 30,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4
  }
})