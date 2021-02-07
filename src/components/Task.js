import {FaTimes} from 'react-icons/fa';

const Task = ({task, onDelete, onToggle}) => {

  const {text, day, reminder, id} = task;

  return (
    <div className={`task ${reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(id)}>
      <h3>{text} <FaTimes onClick={() => onDelete(id)} style={{color:"red", cursor:"pointer"}}/></h3>
      <p>{day}</p>
      
    </div>
  )
}

export default Task;