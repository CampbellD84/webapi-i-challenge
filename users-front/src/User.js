import React from 'react';


export default function User(props) {

    const deleteUser = (e, userId) => {
        e.preventDefault();
        props.deleteUser(e, userId);
    }
    return(
        console.log(props.user),
        <>
            <div className="user-info">
                <h3>{props.user.name}</h3>
                <p>{props.user.bio}</p>
                <button onClick={(e) => deleteUser(e, props.user.id)}>Delete User</button>
            </div>
        </>
    );
} 