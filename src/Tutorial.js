import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native'

export default class App extends React.Component {
  state = {
    width: Dimensions.get('screen').width,
    scrollX: new Animated.Value(0),
  }

  render() {
    const { width } = this.state
    const animated = this.props.children.map((c, i) =>
      this.state.scrollX.interpolate({
        inputRange: [(i - 1) * width, i * width, (i + 1) * width],
        outputRange: [0, 1, 0],
      }),
    )

    const Container = this.props.Container || View

    const pageStyle = this.props.pageStyle || {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }

    return (
      <Container
        animated={this.state.scrollX}
        inputRange={this.props.children.map((v, i) => i * width)}
      >
        <ScrollView
          onContentSizeChange={() =>
            this.setState({ width: Dimensions.get('window').width })
          }
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.state.scrollX } } },
          ])}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
        >
          {this.props.children.map((Component, i) => (
            <View key={i} style={[pageStyle, { width }]}>
              {React.cloneElement(Component, { animated: animated[i] })}
            </View>
          ))}
        </ScrollView>
      </Container>
    )
  }
}
