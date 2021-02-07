import { FaBlackberry } from 'react-icons/fa';
import Button from './Button';

const Header = ({title, toggleAddTask, isOpen}) => {
  return (
    <header className='header'>
      <h1 style={{marginLeft: 5, color:"white", fontSize: 35, fontWeight: "bold", textShadow: "2px 2px 5px black"}}>{title}</h1>
      <Button onClick={toggleAddTask} text={isOpen ? "Close" : "Open"} color={isOpen ? "red" : "green"}/>
    </header>
  )
}

export default Header;