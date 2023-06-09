import React, {useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'; 
import {Link} from 'react-router-dom';
import {SidebarData } from "./SidebarData"
import './SideBar.css' ;
import{ IconContext } from 'react-icons'

 function SideBar() {
  const [sidebar, setSidebar] = useState(false);
  
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <> 
    <IconContext.Provider  value = {{ color: '#fff'}}>
        <div className = "SideBar">
            <Link to = "#" className = "menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/> 
            </Link> 
        </div> 
        <side className ={sidebar ?  'sidebar-menu active' : 'sidebar'}>
          <ul className='sidebar-menu-items' onClick={showSidebar} >
            <li className='sidebar-toggle'>
               <Link to="#" className='menu-bars'> 
               <AiIcons.AiOutlineClose />
               </Link>
            </li>
            {SidebarData.map((item,index) => {
               return(
                 <li key = {index} className= {item.cName}>
                  <Link  to = {item.path}>
                     {item.icon}
                      <span>{item.title}</span>
                  </Link>
                 </li>
               )
            })}
          </ul>
        </side>
        </IconContext.Provider>
    </>
  )
}

export default SideBar