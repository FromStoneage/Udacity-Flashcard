import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator , StackNavigator } from 'react-navigation'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import DecksView from './components/DecksView'
import Decks from './components/Decks'

const Tabs = createBottomTabNavigator ({
  DecksView: {
    screen: DecksView,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
    }
  },
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='library-plus' size={30} color={tintColor} />
    }
  }
})

export default class App extends React.Component {
  render () {
    return (
        <Tabs />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})