import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AddTodo } from '../../redux/state/todo/TodoSlice';

const CreateTodo = () => {

    const dispatch = useDispatch();
    const taskInput = useRef();
    return (
        <div className='container'>
            <div className="row">
                <div className="col-10">
                    <input ref = {taskInput} type="text" className='form-control' placeholder='task name' />

                </div>
                <div className="col-2">
                    <button onClick={()=>dispatch(AddTodo(taskInput.current.value))}>Add todo</button>
                </div>
            </div>
            
        </div>
    );
};

export default CreateTodo;