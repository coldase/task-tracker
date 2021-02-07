import {useState} from 'react';

const AddTask = ({onAdd}) => {
  
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({text, day, reminder});
    setText("");
    setDay("");
    setReminder(false);
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label style={{marginLeft: 5}}>Task</label>
        <input 
          type="text"
          placeholder="Add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label style={{marginLeft: 5}}>Date</label>
        <input 
          type="date" 
          value={day}
          onChange={(e) => setDay(e.target.value)}
          required
        />
      </div>
      <div className="form-control form-control-check">
        <label style={{marginLeft: 5}}>Set reminder</label>
        <input
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save task"/>
    </form>
  )
};

export default AddTask;