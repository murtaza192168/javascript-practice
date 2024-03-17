import Header from "./components/Header";
import Tasks from "./components/Tasks";
// import the React Hook: useState
import { useState } from "react"
function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Mar 04 at 7.30am',
            reminder: true
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Mar 05 at 10.30am',
            reminder: true
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Mar 04 at 7.30am',
            reminder: true
        }
    ]
)
  return (
    <div className='container'>
      <Header  title = 'Task Tracker' />
      <Tasks tasks={tasks} />
      
    </div>
  );
}

export default App;
