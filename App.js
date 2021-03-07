import React from 'react'
import {View, Text, TouchableOpacity, Button} from 'react-native'
import styles from './src/styles/_calculator'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      calculationText: ""
    }
  }

  calculateResult() {
    const text = this.state.calculationText
    // now parse this text
  }

  buttonbPressed(text) {
    //console.log(text)

    if(text == '=') {
      return this.calculateResult()
    }
    this.setState({
        calculationText: this.state.calculationText + text
    })
  }

  operate(operation) {
    switch(operation) {
      case 'Del' :
        let text = this.state.calculationText.split('')
        text.pop()
        
        this.setState({
          calculationText: text.join('')
        })
    }
  }

  render() {
    let rows = [];
    let numb = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [".", 0, '=']];
    for(let i = 0; i < 4; i++) {
      let row = []
      for(let j = 0; j < 3; j++) {
        row.push(
        <TouchableOpacity onPress={() => this.buttonbPressed(numb[i][j])}>
          <Text style={styles.btnText}>{numb[i][j]}</Text>
        </TouchableOpacity>
        )
      }
      rows.push(<View style={styles.row}>{row}</View>)
    }

    let oper = [];
    let operation = ['Del', '+', '-', '*', '/'];
    for(let i = 0; i < 4; i++) {
      oper.push(
      <TouchableOpacity style={styles.btn} onPress={() => this.operate(operation[i])}>
        <Text style={[styles.btnText, {color: 'white'}]}>{operation[i]}</Text>
      </TouchableOpacity>
      )
    }
    return (
      <View style={styles.container}>
          <View style={styles.calculation}>
            <Text style={styles.calculationText}>{this.state.calculationText}</Text>
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