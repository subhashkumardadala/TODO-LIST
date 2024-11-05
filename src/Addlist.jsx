import React from 'react'
import Delete from './Delete';
import Edit from './Edit';

const Addlist = ({Todo , handleToggle, handleDelete , handleEdit }) => {
 
  return (
    <div>
          {Todo.map((item)  =>{
            const {title,status,id}=item;
return(
  <li key={id}>
    <br />
    {title} - {status ? "completed" : "not completed"}
    <input type='checkbox' checked={status} onChange={()=> handleToggle(id)}/>
    <Delete onDelete={() => handleDelete(id)} />
      <Edit onEdit={()=>handleEdit(id)}/>
  </li>
    

);
          })}

    </div>
  )
}

export default Addlist

