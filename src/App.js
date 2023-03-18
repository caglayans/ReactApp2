
import './App.css';
import Course from './Course';
import {useState} from 'react';

function getRandomCourse() {
  const courseArray=["Angular", "Bootstrap", "Csharp", "Kompleweb"];
  return courseArray[Math.floor(Math.random()*courseArray.length)]
}

function App() {

  const [courses, setCourses] = useState([])

  const hanldeClick=()=>{
      setCourses([...courses, getRandomCourse()])
  }

  return (
    <div className="App">

      <button className='appButton' onClick={hanldeClick}>Kurs Ekle</button>
      <div className='courseList'>
        {courses.map((course,index)=>{
          return <Course key={index} courseName={course}/>
        })}
      </div>
      
      
    </div>
  );
}

export default App;
