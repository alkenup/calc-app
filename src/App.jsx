import React, { useState } from 'react'
import Result from './components/Result'
import MathOperations from './components/MathOperations'
import Functions from './components/Functions'
import Numbers from './components/Numbers'

import './App.css'

const App = () => {
  const [result, setResult] = useState({value:"0", memory:"0", operation:""})

  const clickNumberHandler =  number => {
    if(result.value !== "Err") {
      if (result.value !== "0") {
        setResult({ value: `${result.value}${number}` })
      } else if (number !== "0") {
        setResult({...result, value: number })
      }
    }
  }

  const ClickOperationHandler = operation => {
    if(result.value !== "Err") {
      const value = result.operation ? PerformOperation() : result.value
      if(value === "Err") {
        setResult({ ...result, value })
      } else {
        setResult({ value: "0", memory: value, operation: operation })
      }
    }
  }

  const ClickEqualHandler = () => {
    if(result.value !== "Err") {
      setResult({ value: `${PerformOperation()}`, memory:"0", operation: "" })
    }
  }

  const PerformOperation = () => {
    switch(result.operation) {
      case "+":
        return Number(result.memory) + Number(result.value)
      case "-":
        return Number(result.memory) - Number(result.value)
      case "*":
        return Number(result.memory) * Number(result.value)
      case "/":
        return result.value !=="0" ? Number(result.memory) / Number(result.value): "Err"
      default:
        return result.value
    }
  }
  
  const ClickContentClearHandler = () => {
    setResult({ value: "0", memory:"0", operation: "" });
  }
  
  const ClickDeleteHandler = () => {
    if(result.value !== "Err") {
      if (result.value.length > 1) {
        setResult({ value: result.value.substr(0, result.value.length - 1) })
      } else {
        setResult({...result, value: "0"})
      }
    }
  }

  return (
    <main className="react-calculator">
      <Result value = { result.value }/>
      <Numbers onClickNumber = { clickNumberHandler } />
      <Functions onContentClear = { ClickContentClearHandler } onDelete = { ClickDeleteHandler }/>
      <MathOperations onClickOperation = { ClickOperationHandler } onClickEqual = { ClickEqualHandler }/>
    </main>
  )
}

export default App