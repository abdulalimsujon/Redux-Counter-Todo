import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, setCustom } from '../redux/state/counter/counterSlice';

const Count = () => {
const count = useSelector((state)=>state.counter.value)
const dispatch = useDispatch();
const myNum = useRef();
    
    return (
        <div>
            <div className='card'>
            <div className="card-header bg-secondary">
                <h4>counter app</h4>
                <div className="card-body">
                    <h4>{count}</h4>

                </div>
                <div className='m-5'>
                    <button onClick={()=>{dispatch(increment())}} className='btn btn-success'>Increase</button>
                    <button onClick={()=>{dispatch(decrement())}}className='btn btn-danger'>Decrease</button>

                </div>
                <div className="my-5">
                    <input ref={myNum} type="number" placeholder='number'/>
                    <button onClick={()=>{dispatch(setCustom(myNum.current.value))}}>setCustom</button>
                </div>
                <div>
               </div>


            </div>

        </div>
            
        </div>
    );
};



export default Count;