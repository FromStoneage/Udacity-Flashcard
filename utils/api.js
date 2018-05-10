import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'udaciCards:deck-storage-key'

const DUMMY_DATA = {
  React: {
    title: 'React',
    questions: [
      {
        question: '1+1?',
        answer: '2'
      },
      {
        question: '2+2',
        answer: '4'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is the meaning of life',
        answer: '42'
      }
    ]
  }
}

function setDummyData () {
  return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(DUMMY_DATA))
}

function getDecksAsArray () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(dataString => JSON.parse(dataString))
    .then(data => data && Object.values(data))
}

function getDecks () {
  return getDecksAsArray()
    .then(data => (data && data.length > 0) ? data : setDummyData().then(getDecksAsArray))
}

function getDeck (id) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(dataString => JSON.parse(dataString))
}

function saveDeckTitle (title) {
}

function addCardToDeck (title, card) {
}

export default {
  setDummyData,
  getDecks,
  getDeck,
  saveDeckTitle,
  addCardToDeck
}