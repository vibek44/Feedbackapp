import React, { useState } from 'react'


const Button=({handleClick,text})=>( <button onClick={handleClick}> {text} </button> );

const StatisticLine=({text,value})=>(
           
          <tr><td>{text} </td>
          <td>{value}</td></tr>);

const Statistics=({good,neutral,bad})=>{
    if(good===0 && bad===0 && neutral===0)
    {  return (<h3>No feedback given</h3>)
        
    }
    return(<div>
        
        <table>
        <tbody> 
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value= {good+bad+neutral} />
        <StatisticLine text="average" value={(good-bad)/(good+bad+neutral)} />
        <StatisticLine text="positive" value={good/(good+bad+neutral)+'%'} />
        </tbody>
        </table>
        </div>)
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood=()=>setGood(good+1)

  const handleNeutral=()=>setNeutral(neutral+1)

  const handleBad=()=>setBad(bad+1)

  return (
    <div>
      <h1>Feedback leaflet</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}



export default App;