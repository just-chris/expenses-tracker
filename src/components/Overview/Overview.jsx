import React, { useState } from 'react';
import styled from 'styled-components'


const Container = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
font-family:Montserrat;
${'' /* gap:1rem; */}

`

const BalanceBox = styled.div`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
gap:1rem;
font-weight:bold;
`

const AddTransaction = styled.div`
background:black;
text-align:center;
color:white;
border-radius:8px;
padding: 5px 20px;
cursor:pointer;
outline:none !important ;
${'' /* font-weight:bold; */}
font-size: 15px;
`

const AddTransactionContainer = styled.div`
display:flex;
flex-direction:column;
${'' /* align-items:center; */}
gap:10px;
width:100%;
border:1px solid #e6e8e9;
padding: 25px 40px;
& input {
  outline:none;
  padding:10px 12px;
  border-radius:5px;
  border:1px solid #e6e8e9;
}
`

const RadioBox = styled.div`
width:100%;
display:flex;
align-items:center;
border:1px solid #e6e8e9;
& input {
  width:unset;
  margin:0 10px;
}

`

const AddTransactionView = (props) => {

  const [amount, setAmount] = useState()
  const [descr, setDescr] = useState()
  const [type, setType] = useState('Expense')
  const addTransaction = () => {
    props.addTransaction({amount:Number(amount), descr, type, id:Date.now(),})
    props.toggleAddBtn()
  }

  return (
    <AddTransactionContainer>
      <input placeholder='Amount' type='number' value={amount} onChange={(e)=> setAmount(e.target.value)} />
      <input type="text" placeholder='Description' value={descr} onChange={(e)=> setDescr(e.target.value)} />
      <RadioBox>
        <input type="radio" name="type" id="expense-input" value='Expense' checked={type === 'Expense'}  onChange={(e)=> setType(e.target.value)} />
        <label htmlFor="expense-input">Expense</label>
        <input type="radio" name="type" id="income-input" value='Income' checked={type === 'Income' } onChange={(e)=> setType(e.target.value)} />
        <label htmlFor="income-input">Income</label>
      </RadioBox>
      <AddTransaction onClick={addTransaction}>New Transaction</AddTransaction>
    </AddTransactionContainer>
  )
} 

const SalMov = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 20px;
`
const Box = styled.div`
display:flex;
flex-direction:column;
gap:12px;
padding:20px;
border-radius:5px;
border:1px solid #e6e8e9;
width:135px;
font-size:14px;
& span{
  font-weight:bold;
  font-size:20px;
  color: ${(props) => (props.isIncome ? 'green':'red')}
}
`
const Overview = (props) => {

  const [isAddBtn, toggleAddBtn] = useState(false)

  return (
    <Container>
    <BalanceBox>
    Balance: ${props.income - props.expense}
    <AddTransaction onClick={()=> toggleAddBtn(!isAddBtn)}> {isAddBtn ? 'Close':'New'} </AddTransaction>
    </BalanceBox>
    {isAddBtn && <AddTransactionView toggleAddBtn={toggleAddBtn} addTransaction={props.addTransaction}/>}
    <SalMov >
      <Box isIncome={false}>
        Expense<span>${props.expense}</span>  
      </Box>
      <Box isIncome={true}>
        Expense<span>${props.income}</span>  
      </Box>
    </SalMov>
    </Container>
  )
}

export default Overview