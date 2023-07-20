import Swal from "sweetalert2"
import { EditTodo } from "../redux/state/todo/TodoSlice"
import store from "../redux/store/store"



export function TodoEditAlert(item,i){
    Swal.fire({
        title: 'Update task name',
        input:"text",
        inputValue:item,
        inputValidator:(value)=>{
            if(value){
                store.dispatch(EditTodo({index:i ,task:value}))
            }
        }
       
      
      })
}