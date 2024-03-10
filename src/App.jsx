import './App.css'
import Users from './Users'
import Count from './count'
import Player from './player'

function App() {
  
  const newFunction =() =>{
    alert("New function")
  }
  const addFive = (num) => {
    alert(3+num)
  }

  return (
    <>
      
      <h3>This is react</h3>
      <Users></Users>
      <Player></Player>
      <Count></Count>
      <button onClick={newFunction}>Click</button>
      <button onClick={() => addFive(5)}>button-2</button>
      <button onClick={() => alert("This is inline")}>button-3</button> 
      
    </>
  )
}

export default App
