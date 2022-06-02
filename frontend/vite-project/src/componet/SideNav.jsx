import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SideNav = () => {
    const navigate = useNavigate()
    const naviagte_page = (path) => {
        navigate(path)
    }
    return (
        <div className=' container-fluid bg-dark'>
            {/* <ul className='list-group'>
                <li className="list-group py-2 my-2  text-warning text-bold">Signup</li>
                <li className="list-group py-2 my-2  text-warning text-bold">Login </li>
            </ul> */}
            <ul className="list-group">
                <li className="list-group py-3 my-1  text-light text-bold cursor-pointer" onClick={()=>naviagte_page('/home')}> Dashboard </li>
                <li className="list-group py-3 my-1  text-light text-bold" onClick={()=>naviagte_page('/table')}>React Table</li>
                <li className="list-group py-3 my-1  text-light text-bold">A third item</li>
                <li className="list-group py-3 my-1  text-light text-bold">A fourth item</li>
                <li className="list-group py-3 my-1  text-light text-bold">And a fifth one</li>
                <li className="list-group py-3 my-1  text-light text-bold">A second item</li>
                <li className="list-group py-3 my-1  text-light text-bold">A third item</li>
                <li className="list-group py-3 my-1  text-light text-bold">A fourth item</li>
            </ul>
        </div>
    )
}

export default SideNav