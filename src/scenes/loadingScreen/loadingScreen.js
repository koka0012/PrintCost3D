import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles';

export class loadingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading</Text>
      </View>
    )
  }
}

export default loadingScreen
