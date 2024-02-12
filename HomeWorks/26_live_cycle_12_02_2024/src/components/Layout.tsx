import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-primary m-3'>
          <Link className='text-body-tertiary text-decoration-none' to='/photos'>Photos</Link>
        </button>
        <button className='btn btn-success m-3'>
          <Link className='text-body-tertiary text-decoration-none' to='/posts'>Posts</Link>
        </button>
        <button className='btn btn-warning m-3'>
          <Link className='text-body-tertiary text-decoration-none' to='/tasks'>Tasks</Link>
        </button>
      </div>
      <Outlet />
    </div>
  )
}

export default Layout