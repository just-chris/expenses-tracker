import React, { useState, useEffect } from 'react';
import styled from 'styled-components'


const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding: 30px 0 10px;
font-family:Montserrat;
font-size:18px;
width:100%;
gap:10px;
font-weight:bold;
& input{
  width:100%;
  padding:10px 12px;
  border-radius:12px;
  background:#e6e8e9;
  border:1px solid #e6e8e9;
  outline:none;
}
`

const Cell = styled.div`
display:flex;
width:100%;
padding:10px 15px;
font-size:14px;
border-radius:4px;
align-items:center;
font-weight:normal;
justify-content:space-between;
border:1px solid #e6e8e9;
border-right: 4px solid ${ (props) => (props.isExpense? 'red':'green')};

`

const TransactionCell = (props) => {
  return (
    <Cell isExpense={props.payload?.type === 'Expense'}>
      <span >{props.payload.descr}</span>
      <span>{props.payload.amount}</span>
    </Cell>
  ) 
  
}
const Transaction = (props) => {
  const [searchText, updateSearchText] = useState('')
  const [filtered, updateFilter] = useState(props.transactions)
  const filterData = (searchText) => {
    if (!searchText || !searchText.trim().length) {
      updateFilter(props.transactions)
      return
    }
    let filter = [...props.transactions]
    filter = filter.filter((payload) => 
    payload.descr.toLowerCase().includes(searchText.toLowerCase().trim())
    )
    updateFilter(filter)
    
  }

  useEffect(()=> filterData(searchText), [props.transactions])
 return ( 
 <Container>
    Transactions
  <input placeholder='Search...' 
  onChange={(e)=> {
    updateSearchText(e.target.value)
    filterData(e.target.value)
    }} />
    {filtered?.length 
    ? filtered.map((payload) => (
      <TransactionCell payload={payload} />
    )) 
    : ""}
</Container>
)
}

export default Transaction