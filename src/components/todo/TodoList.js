import React from 'react';
import { useSelector } from 'react-redux';
import { TodoDeleteAlert } from './TodoDeleteAlert';
import { TodoEditAlert } from '../TodoEditAlert';


const TodoList = () => {

    
    const todoItems = useSelector((state)=>state.todo.value)

  
    return (
        <div className='container'>
            <div className="row">
                <div className="card col-12">
                    <div className="card-body">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Task Name</th>
                                <th>
                                    Edit
                                
                                </th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todoItems.map((item,i)=>{
                                    return (

                                        <tr key ={i.toString()}>
                                        <td>{i}</td>
                                        <td>{item}</td>
                                        <td><button onClick={()=>{TodoEditAlert(item,i)}}>Edit</button></td>
                                        <td><button onClick={()=>{TodoDeleteAlert(i)}}>Remove</button></td>
            
                                        </tr>

                                    )
                                })
                            }
                          
                           
                        </tbody>
                    </table>

                    </div>
                   
                </div>
            </div>
            
        </div>
    );
};

export default TodoList;