import React, {useEffect, useState} from 'react';
import {fetchServices} from "../services/response.api";
import {pages} from "../services/baseUrl";
import Album from "../components/album/Album";

function Albums(props) {

    let [albums, setAlbums] = useState([])

    useEffect(()=>{
        fetchServices(`${pages.albums}`,setAlbums)
    },[])

    return (
        <div>
            {
albums.map((value) => <Album key={value.id} value={value}/>)
            }
        </div>
    );
}

export {Albums};