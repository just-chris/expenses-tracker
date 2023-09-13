import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Transaction from '../Transaction/Transaction'
import Overview from '../Overview/Overview'
const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
font-family:Montserrat;
gap:1rem;
width:50%;
min-width:400px;
`
const Home = (props) => {

   const [transactions, updateTransaction] = useState([])
   const [expense, updateExpense] = useState(0)
   const [income, updateIncome] = useState(0)

  const addTransaction = (payload) => {
    const transactionArray=[...transactions]
    transactionArray.push(payload)
    updateTransaction(transactionArray)
  }

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transactions.map((payload) =>{
      payload.type === 'Expense'
      ? (exp = exp + payload.amount)
      : (inc = inc + payload.amount)
    })
    updateExpense(exp)
    updateIncome(inc)
  }

  useEffect(()=> calculateBalance(),[transactions])
  
  return (
    <Container>
      <Overview addTransaction={addTransaction} expense={expense} income={income} />
      <Transaction transactions={transactions} />
    </Container>
  )
}

export default Home