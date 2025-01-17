import '../assets/css/TodoItem.css'
import check from '../assets/imgs/check.png'
import remove from '../assets/imgs/borrar.png'
export function TodoItem({text, completed}) {
    return (
      <li className="TodoItem">
        <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}>
          <img src={check} alt="check" width={18}/>
        </span>
        <p className={`TodoItem-p ${completed && "TodoItem-p--completed"}`} >
          {text}
        </p>
        <span className='Icon Icon-deleted'>
          <img src={remove} alt="remove" width={18}/>
        </span>
      </li>
    )
  }