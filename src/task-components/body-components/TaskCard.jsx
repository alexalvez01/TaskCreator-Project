import "../../task-styles/taskcardstyle.css";
import {useContext} from 'react'
import {MainContext} from '../../maincontext/MainContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

function TaskCard({task}) {

  const {deleteTask} = useContext(MainContext)
  const {isDark}=useContext(MainContext)
  return (

    <div className={isDark?"task_card task_card_dark":"task_card"}>
        <h1 className="task_card_title">{task.title}</h1>
        <p className="task_card_description">{task.description}</p>
        <button onClick={()=> deleteTask(task.id)} className="delete_button"><FontAwesomeIcon icon={faTrash} />Delete</button>
    </div>

  )
}

export default TaskCard