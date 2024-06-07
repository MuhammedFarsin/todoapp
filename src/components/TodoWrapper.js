import React, { useState } from 'react'
import { LOGO_URL } from '../utils/constants'


const TodoWrapper = () => {
        
  return (
    <div className='todo-wrapper'>
      <img className='img-logo' src={LOGO_URL} />
    </div>
  )
}

export default TodoWrapper
