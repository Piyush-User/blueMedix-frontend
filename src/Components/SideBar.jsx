import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (

    <aside className="w-64 h-screen bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul className="space-y-3">
        <li><Link to="/" className="block p-2 hover:bg-gray-200">Dashboard</Link></li>
        <li><Link to="/users" className="block p-2 hover:bg-gray-200">Users</Link></li>
        <li><Link to="/products" className="block p-2 hover:bg-gray-200">Products</Link></li>
        {/* <li className='hover:p-2 font'>matches</li> */}

        {/* {
            (reactLink) ? {
                data.Map((user) => {
                    return allUsers;
                }) } : 
                {
                    ""
                }
            
        } */}
      </ul>
    </aside>
  );
};

export default Sidebar;
