import React from 'react';

function Todo({value}) {

    return (
        <div>
            <p>User ID : {value.userId}</p>
            <p>ID : {value.id}</p>
            <p>Title : {value.title}</p>
            <p>Completed: {`${value.completed}`}</p>

        </div>
    );
}

export default Todo;