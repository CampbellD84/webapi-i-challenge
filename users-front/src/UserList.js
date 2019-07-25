import React from 'react';
import User from './User.js';

export default function UserList(props) {

        return(
            <div className="users-list">
                {props.users.map(user => (
                    <User user={user} key={user.id} updateUser={props.updateUser} deleteUser={props.deleteUser}/>
                ))}
            </div>
        );
}

