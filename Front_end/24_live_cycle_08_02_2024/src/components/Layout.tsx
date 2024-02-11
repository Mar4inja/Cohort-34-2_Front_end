import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return ( <div className="space">
       <Link to='/photos'>Photos</Link>
       &nbsp;&nbsp;&nbsp;
       <Link to='/posts'>Posts</Link>
       &nbsp;&nbsp;&nbsp;
       <Link to='/todoList'>Todos</Link>

       <Outlet />
    </div>
    )
}

export default Layout;
