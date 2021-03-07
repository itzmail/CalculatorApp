import React from 'react'
import {View, Text, TouchableOpacity, Button} from 'react-native'
import styles from './src/styles/_calculator'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      calculationText: "",
      resultText: ''
    }
    this.operation = ['Del', '+', '-', '*', '/'];
  }

  calculateResult() {
    const text = this.state.calculationText
    console.log(text, eval(text))
    this.setState({
      resultText: eval(text)
    })
    //BODMAS
    // eval(text)
    // now parse this text
  }

  validate() {
    const text = this.state.calculationText
    switch(text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
          return false
    }
    return true
  }

  buttonbPressed(text) {
    //console.log(text)

    if(text == '=') {
      return this.validate() && this.calculateResult()
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
      break;
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = this.state.calculationText.split('').pop()

        if(this.operation.indexOf(lastChar) > 0) return

        if(this.state.text == "") return
        this.setState({
          calculationText: this.state.calculationText + operation
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
    for(let i = 0; i < 5; i++) {
      oper.push(
      <TouchableOpacity style={styles.btn} onPress={() => this.operate(this.operation[i])}>
        <Text style={[styles.btnText, {color: 'white'}]}>{this.operation[i]}</Text>
      </TouchableOpacity>
      )
    }
    return (
      <View style={styles.container}>
          <View style={styles.calculation}>
            <Text style={styles.calculationText}>{this.state.calculationText}</Text>
          </View>
          <View style={styles.result}>
            <Text style={styles.resultText}>{this.state.resultText}</Text>
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