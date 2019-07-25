import React from 'react';


export default function User(props) {
    return(
        <>
            <div>
                <h3>{props.user.name}</h3>
                <p>{props.user.bio}</p>
            </div>
        </>
    );
} 