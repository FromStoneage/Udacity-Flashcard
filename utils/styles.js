import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  verticallyCenterChildren: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    color: 'cornflowerblue',
    alignSelf: 'center',
    fontSize: 30
  },
  subText: {
    alignSelf: 'center',
    paddingBottom: 20,
    color: 'darkgray'
  },
  card: {
    padding: 20,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'dodgerblue',
    backgroundColor: 'cornflowerblue',
    justifyContent: 'center'
  },
  center: {
    alignSelf: 'center'
  },
  white: {
    color: 'white'
  },
  gray: {
    color: 'lightgray'
  },
  container: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardFront: {
    height: 200,
    width: 300,
    backgroundColor: 'orange',
    borderColor: 'darkorange',
    backfaceVisibility: 'hidden'
  },
  cardBack: {
    height: 200,
    width: 300,
    backgroundColor: 'darkorange',
    borderColor: 'orange',
    backfaceVisibility: 'hidden',
    position: 'absolute',
    top: 0
  },
  cardText: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 25
  }
})

