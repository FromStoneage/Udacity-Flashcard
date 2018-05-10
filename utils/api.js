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
  Redux: {
    title: 'Redux',
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

function getDecksFromAsync () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(dataString => JSON.parse(dataString))
    .then(data => data && Object.values(data))
}

function getDecks () {
  return getDecksFromAsync()
    .then(data => (data && data.length > 0) ? data : setDummyData().then(getDecksFromAsync))
}

function getDeck (id) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(dataString => JSON.parse(dataString))
}

function saveDeckTitle (title) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }))
}

function addCardToDeck (title, card) {
}

function clearData() {
  return AsyncStorage.clear()
}

export default {
  clearData,
  setDummyData,
  getDecks,
  getDeck,
  saveDeckTitle,
  addCardToDeck
}