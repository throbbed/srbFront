import React, { Component } from 'react'
import {
  Text,
  View,
  Image
} from 'react-native'

import styles from '../styles/common'

export default class Walk extends Component {
  static navigationOptions = {
    tabBarLabel: '걷기',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/common/navi_walk.png')}
        style={[styles.naviIcon, {tintColor: tintColor}]}
      />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    )
  }
}
