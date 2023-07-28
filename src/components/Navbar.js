import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchUser } from '../features/userDetailSlics'

const Navbar = () => {
    const[searchData, setSearchData]=useState("")
    const allUsers=useSelector((state)=>state.app.users)
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(searchUser(searchData));
      }, [searchData]);

  return (<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" >RTK CRUD</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/read" className="nav-link active" aria-current="page">All Post({allUsers.length})</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link" >Create Post</Link>
        </li>
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setSearchData(e.target.value)}></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar