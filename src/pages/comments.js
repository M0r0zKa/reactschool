import React, {useEffect, useState} from 'react';
import {fetchServices} from "../services/response.api";
import {pages} from "../services/baseUrl";
import Comment from "../components/Comment/Comment";

function Comments(props) {
    let [comments,setComments] = useState([])
    useEffect(()=>{
        fetchServices(pages.comments,setComments)
    },[])
    return (
        <div>{
   comments.map(value => <Comment key={value.id} value={value}/>)
        }</div>
    );
}

export {Comments};