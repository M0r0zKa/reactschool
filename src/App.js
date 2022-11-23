import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {Albums, Comments, Home, Todos} from "./pages";


function App(props) {
    return (
        <div>
<div>
    <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'todos'}>Todos</Link></li>
        <li><Link to={'albums'}>Albums</Link></li>
        <li><Link to={'comments'}>Comments</Link></li>

    </ul>
</div>
<div>
    <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path={'todos'} element={<Todos/>}></Route>
        <Route path={'albums'} element={<Albums/>}></Route>
        <Route path={'comments'} element={<Comments/>}></Route>
    </Routes>
</div>
        </div>
    );
}

export default App;