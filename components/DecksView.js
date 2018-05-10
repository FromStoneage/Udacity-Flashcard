import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import api from '../utils/api'
import { storeDecks } from '../actions'

const style = StyleSheet.create({
  card: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    margin: 20,
    justifyContent: 'center'
  }
})

class DecksView extends Component {

  componentWillMount () {
    api.getDecks()
       .then(data => this.props.dispatch(storeDecks(data)))
  }


  render () {
    const { decks } = this.props

    return (
      <View>
        <Text> </Text>
        <Text>This is a deck</Text>
        {decks && decks.map(
          ({title, questions}) => <Card key={title} title={title} number={questions.length} />
        )}
      </View>
    )
  }
}

function Card ({ title, number }) {
  return (
    <View style={style.card}>
      <Text>{title}</Text>
      <Text>{number}</Text>
    </View>
  )
}

function mapStateToProps ({ decks }) {
  return { decks }
}

export default connect(mapStateToProps)(DecksView)