import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

import styles from '../utils/styles'
import api from '../utils/api'
import { setCurrentDeck, storeDecks } from '../actions'

function Card ({ title, number, onPress }) {
  return (
    <TouchableHighlight style={styles.card} underlayColor='dodgerblue' onPress={onPress}>
      <View>
        <Text style={[styles.center, styles.white]}>{title}</Text>
        <Text style={[styles.center, styles.gray]}>{number} cards</Text>
      </View>
    </TouchableHighlight>
  )
}

class ViewDecks extends Component {
  componentWillMount () {
    api.getDecks()
      .then(data => this.props.dispatch(storeDecks(data)))
  }

  onCardPress (title) {
    const { dispatch, navigation } = this.props
    api.getDeck(title)
      .then(data => dispatch(setCurrentDeck(data)))
      .then(() => navigation.navigate('DeckView', { title }))
  }

  render () {
    return (
      <View>
        <FlatList
          data={this.props.decks}
          renderItem={
            ({ item }) =>
              <Card
                title={item.title}
                number={item.questions.length}
                onPress={() => this.onCardPress(item.title)}
              />
          }
          keyExtractor={deck => deck.title}
        />
      </View>
    )
  }
}

function mapStateToProps ({ decks }) {
  return { decks }
}

export default connect(mapStateToProps)(ViewDecks)
