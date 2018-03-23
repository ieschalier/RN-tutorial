import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native'
import Tutorial from './Tutorial'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const Container = ({ children, animated, inputRange }) => {
  const backgroundColor = animated.interpolate({
    inputRange,
    outputRange: ['#89f', '#e59', '#e87'],
  })

  return (
    <Animated.View style={{ flex: 1, backgroundColor }}>
      {children}
    </Animated.View>
  )
}

const Page = ({ animated: opacity, text }) => (
  <Animated.Text style={{ color: '#fff', opacity }}>{text}</Animated.Text>
)

export default class App extends React.Component {
  render() {
    return (
      <Tutorial Container={Container}>
        <Page text="Open up App.js to start working on your app!" />
        <Page text="Open up App.js to start working on your app!" />
        <Page text="Open up App.js to start working on your app!" />
      </Tutorial>
    )
  }
}
