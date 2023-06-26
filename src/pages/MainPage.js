import React from 'react'

import { Link} from 'react-router-dom'


const MainPage = () => {

  return (
    
    <div className='d-flex flex-row align-items-center justify-content-center h-100 mt-3 pt-5 background-colors'>
    <div className='d-grid gap-2 col-6 mx-5 my-5'>

    <button className='btn btn-warning'><Link className='text-decoration-none text-body display-3' to="history">History</Link></button>
    <button className='btn btn-warning'><Link className='text-decoration-none text-body display-3' to="mythology">Mythology</Link></button>
    <button className='btn btn-warning'><Link className='text-decoration-none text-body display-3' to="computer-science">Computer Science</Link></button>
    <button className='btn btn-warning'><Link  className='text-decoration-none text-body display-3' to="literature">Literature</Link></button>
    
    
   </div>
   </div>
   
  )
}

export default MainPage