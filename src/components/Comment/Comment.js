import React from 'react';

function Comment({value}) {

    return (
        <div>

                <p>Post ID : {value.postId}</p>
                <p>ID : {value.id}</p>
                <p>Name : {value.name}</p>
                <p>Email : {value.email}</p>
                <p>Body : {value.body}</p>

        </div>
    );
}

export default Comment;