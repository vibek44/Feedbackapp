import React from 'react'

const Header=({course})=><h1>{course.name}</h1> 
                
  
const Part=({part})=><p>{part.name}  {part.exercises}</p>
             
const Content=({course})=> course.parts.map((part)=><Part  key={part.name} part={part}/>) 

const Total=({course})=><p>Number of exercises { course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises }</p>
              
const App = () => {
  
  const course = {
    name:'Half Stack application development',
    parts:[
           { name:'Fundamentals of React', 
            exercises: 10 },
           { name:'Using props to pass data',
             exercises:7 },
           { name:'State of a component',
            exercises: 15 }
          ]
  }

  return (
    <>
     <Header course={course} />
     <Content course={course}  />
      <Total  course={course}/>
    </>
  )
}


export default App;
