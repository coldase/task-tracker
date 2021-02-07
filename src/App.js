import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  //Toggle reminder
  const togglereminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id 
      ? {...task, reminder: !task.reminder} 
      : task)
    )
  };

  //Delete task
  const deleteTask = (id) => {
    console.log("DELETED", id);
    setTasks(tasks.filter(x => x.id !== id));
  }
  //Add task
  const addTask = (task) => {
    const id = Math.random();
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  //Toggle Addtask
  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  }

  return (
    <div className="container">
      <Header 
        title="Task Tracker"
        toggleAddTask={toggleAddTask}
        isOpen={showAddTask}
      />
      {showAddTask && <AddTask 
        onAdd={addTask}
      />}
      <Tasks 
        tasks={tasks} 
        onDelete={deleteTask}
        onToggle={togglereminder}
      />
    </div>
  );
}

export default App;
