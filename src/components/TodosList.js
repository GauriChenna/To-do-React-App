import React from 'react';
import  {AiFillCheckCircle} from 'react-icons/ai';
import  {BiEdit} from 'react-icons/bi';
import {MdDelete} from 'react-icons/md'
const TodosList = ({todos, setTodos, setEditTodo}) =>{
    const handleComplete = (todo)=>{
        setTodos (
            todos.map((item)=>{
                if(item.id === todo.id){
                    return{...item, completed: !item.completed};
                }
                return item; 
            })
        )
    }
    const handleEdit = ({id})=>{
        const findTodo = todos.find((todo)=> todo.id === id);
        setEditTodo (findTodo);
    }

    const handleDelete = ({id})=>{
        setTodos(todos.filter((todo)=> todo.id!== id));
    };
    return(
        <div>
            {todos.map((todo)=>{
               
               return <li className= "list-item" key={todo.id}>
                    <input type="text" value={todo.title} 
                    className={'list ${todo.completed ? "complete" : ""}   '}
                    onChange ={(e)=> e.preventDefault()} 
                    />
                    <div>
                        <button className='button-complete' onClick={()=> handleComplete(todo)}  >
                            <AiFillCheckCircle/>
                        </button>
                        <button className='button-edit' onClick={()=> handleEdit(todo)}>
                            <BiEdit/>
                        </button>
                        <button className='button-delete' onClick={ ()=>{
                            handleDelete(todo)
                        }}>
                            <MdDelete/>
                        </button>
                    </div>
                </li>            
            })}
        </div>

    )
} 
export default TodosList;
