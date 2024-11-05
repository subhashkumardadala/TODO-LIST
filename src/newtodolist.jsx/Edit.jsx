import React from 'react'

const Edit = ({onEdit}) => {
  return (
    <div>
      <button className='edit-btn '  onClick={onEdit}>Edit</button>
    </div>
  )
}

export default Edit
