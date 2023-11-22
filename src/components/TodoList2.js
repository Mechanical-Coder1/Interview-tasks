import React, { useState } from 'react'

const TodoList2 = () => {

    const[data, setData]=useState([])
    const [task,setTask]=useState("")
    const[completed, setCompleted]=useState(false)
    const[taskIdx, setTaskIdx]=useState(null)

    const handleChange = (event) =>{
        setTask(event.target.value)
        console.log(task);
    }

    const handleAddTask = () =>{
        setData([...data, task])
        setTask("")
    }

    const handleCheckBox = (index)=>{
        if(taskIdx===index){
            setCompleted(!completed)
            // setCompleted(true)
        }
        setTaskIdx(index)
    }

  return (
    <div>
      <input type='text' className='border border-black m-6 p-2' onChange={handleChange}/>
      <button className='bg-blue-500 p-2 text-white rounded-lg' onClick={handleAddTask}>Add Task</button>
      <hr className='border-black' />
      <ul>
        {
            data.map((task,index)=>
            <li key={index}>
                <input type='checkbox' checked={taskIdx===index && completed} onChange={()=>handleCheckBox(index)}/>{task}
                <p>{taskIdx===index && completed?"complted":""}</p>
            </li>)
        }
      </ul>
    </div>
  )
}

export default TodoList2
