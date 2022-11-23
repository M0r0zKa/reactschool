import React from 'react';

function Album({value}) {

    return (
        <div>

                <p>userID:{value.userId}</p>
                <p>ID:{value.id}</p>
                <p>Title:{value.title}</p>

        </div>
    );
}

export default Album;