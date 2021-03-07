import React from 'react'
import {View, Text, TouchableOpacity, Button} from 'react-native'
import styles from './src/styles/_calculator'

class App extends React.Component {
  constructor() {
    super()

  }

  

  render() {
    let rows = [];
    let numb = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, 0, '=']];
    for(let i = 0; i < 4; i++) {
      let row = []
      for(let j = 0; j < 3; j++) {
        row.push(
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>{numb[i][j]}</Text>
        </TouchableOpacity>
        )
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }

    let oper = [];
    let operation = ['+', '-', '*', '/'];
    for(let i = 0; i < 4; i++) {
      oper.push(
      <TouchableOpacity style={styles.btn}>
        <Text style={[styles.btnText, {color: 'white'}]}>{operation[i]}</Text>
      </TouchableOpacity>
      )
    }
    return (
      <View style={styles.container}>
          <View style={styles.calculation}>
            <Text style={styles.calculationText}>11*11</Text>
          </View>
          <View style={styles.result}>
            <Text style={styles.resultText}>121</Text>
          </View>
          <View style={styles.buttons}>
            <View style={styles.numbers}>
              {rows}
            </View>
            <View style={styles.operation}>
              {oper}
            </View>
          </View>
      </View>
    );
  }
}

export default App;