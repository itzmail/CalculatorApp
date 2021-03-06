import React from 'react'
import {View, Text} from 'react-native'
import styles from './src/styles/_calculator'

class App extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.result}></View>
          <View style={styles.calculation}></View>
          <View style={styles.buttons}>
            <View style={styles.numbers}></View>
            <View style={styles.operation}></View>
          </View>
      </View>
    );
  }
}

export default App;