import React, {useEffect, useState} from 'react';
import {fetchServices} from "../services/response.api";
import {pages} from "../services/baseUrl";
import Todo from "../components/todo/Todo";

function Todos(props) {

    let [todo,setTodo]=useState([])
    useEffect(()=>{fetchServices(pages.todos,setTodo)},[])
    return (
        <div>
            {
                todo.map((value) => <Todo key={value.id} value={value}/>)
            }
        </div>
    );
}

export {Todos};