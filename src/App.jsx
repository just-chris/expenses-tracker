import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import styled from 'styled-components'
import Home from './components/Home/Home'

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
font-family:Montserrat;
gap:2rem;
padding:2rem 0;
`

const Header = styled.span`
display:flex;
color:black;
font-size: 2rem;
font-weight:bold;


`
function App() {
  // const [count, setCount] = useState(0)
return (
<Container>
      <Header>Expense Tracker</Header>
      <Home />
</Container>
  )
}

export default App
