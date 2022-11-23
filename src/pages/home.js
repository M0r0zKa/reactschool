import React, {useEffect, useState} from 'react';
import {baseUrl, pages} from "../services/baseUrl";
import {fetchServices} from "../services/response.api";
import Todo from "../components/todo/Todo";

function Home(props) {
   let [test,setTest] = useState([])
useEffect(()=>{
    fetchServices(pages.todos,setTest)
},[])
    return (
        <div>{

        }</div>
    );
}

export {Home};