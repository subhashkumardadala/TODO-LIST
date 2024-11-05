import React, { useState    } from 'react'
import Addlist from './Addlist';
import './Todolist.css';


const Todolist = () => {

 const[Text , setText]= useState("");
 const [Todo, setTodo]=useState([]);
 const [isEditing, setIsEditing] = useState(null); 
 const [editText, setEditText] = useState(""); 
function textHandling(event){
  setText(event.target.value)
}

function todoClicking(){
  const newtext={
    title:Text,
    status:false,
    id: Date.now() + Math.random()
  }

  const todoafteradditon= [...Todo,newtext]

  setTodo(todoafteradditon);
  setText("");
}

function handleToggle(id){

const todoupdation= Todo.map((item)=>{
  return item.id===id ? {...item, status: !item.status} :item ;
})
setTodo(todoupdation)
}

function handleDelete(id) {
  setTodo(Todo.filter((item) => item.id !== id));
}

function handleEdit(id) {
  setIsEditing(id);
  const itemToEdit = Todo.find((item) => item.id === id);
  setEditText(itemToEdit.title);
}

function saveEdit(id) {
  const updatedTodo = Todo.map((item) =>
    item.id === id ? { ...item, title: editText } : item
  );
  setTodo(updatedTodo);
  setIsEditing(null);
  setEditText("");
}
function handleReset(){
  setTodo([])
}


  return (
    <div>
        <div>
          <h1 className='title'>Todo-list</h1>
          <input type="text" onChange={textHandling} value={Text} />
          <button className='add-btn' onClick={todoClicking}>Add</button>
          <button className='reset-btn' onClick={handleReset}>Reset</button>
        </div>

        <ul>

        {Todo.map((item) =>
          isEditing === item.id ? (
            <li key={item.id}>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button className='save-btn' onClick={() => saveEdit(item.id)}>Save</button>
              <button className='cancel-btn ' onClick={() => setIsEditing(null)}>Cancel</button>
            </li>
          )

          :(

              <Addlist key={item.id} Todo={[item]} handleToggle={handleToggle} handleDelete={handleDelete} handleEdit={handleEdit}/>
          )
        )}
     
        </ul>

    </div>
  );
};

export default Todolist




