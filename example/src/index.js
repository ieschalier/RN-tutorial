import React, { Fragment } from 'react'
import { Text, View, ScrollView, Dimensions, Animated } from 'react-native'
import Tutorial from 'react-native-tutorial'

console.warn(Tutorial)

const Container = ({ children, animated, inputRange }) => {
  const backgroundColor = animated.interpolate({
    inputRange,
    outputRange: ['#89f', '#e59', '#e87'],
  })

  const { width } = Dimensions.get('window')

  const translateX = animated.interpolate({
    inputRange,
    outputRange: [0, -width / 4, -width / 2],
  })

  return (
    <Animated.View style={{ flex: 1, backgroundColor }}>
      <Animated.Text
        style={{
          position: 'absolute',
          fontSize: 90,
          top: 10,
          right: 10,
          transform: [{ translateX }],
        }}
      >
        ☁️
      </Animated.Text>
      {children}
    </Animated.View>
  )
}

const Page = ({ animated: opacity, text }) => (
  <Animated.Text style={{ color: '#fff', opacity }}>{text}</Animated.Text>
)

const PageOne = ({ animated, text }) => {
  const translateY = animated.interpolate({
    inputRange: [0.5, 0.8, 1],
    outputRange: [-Dimensions.get('window').width, 0, 0],
  })

  const translateX = animated.interpolate({
    inputRange: [0, 0.81, 0.82, 0.83, 0.84, 0.85, 0.86, 0.87, 0.88, 0.99, 1],
    outputRange: [0, -5, 5, -5, 5, -5, 5, -5, 5, -5, 0],
  })

  return (
    <Fragment>
      <Animated.Text
        style={{
          fontSize: 32,
          transform: [{ translateY }, { translateX }, { rotateZ: '-47deg' }],
        }}
      >
        🚀
      </Animated.Text>
      <Animated.Text style={{ color: '#fff', opacity: animated }}>
        {text}
      </Animated.Text>
    </Fragment>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <Tutorial Container={Container}>
        <PageOne text="Open up App.js to start working on your app!" />
        <Page text="Open up App.js to start working on your app!" />
        <Page text="Open up App.js to start working on your app!" />
      </Tutorial>
    )
  }
}
