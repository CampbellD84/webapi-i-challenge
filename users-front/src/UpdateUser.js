import React, {useState} from 'react';



export default function AddUser(props) {
    const [user, setUser] = useState({name: '', bio: ''});

    const handleChange = evt => {
        setUser({...user, [evt.target.name]: evt.target.value});
    }


    const handleSubmit = (evt, UserId) => {
        evt.preventDefault();
        props.updateUser(evt, UserId);
    }

    return(
        <>
            <form onSubmit={e => handleSubmit(e, user.id)}>
                <label>Name</label>
                <input type="text" name="name" placeholder="Name" value={user.name} onChange={e => handleChange(e)} />
                <label>Bio</label>
                <input type="text" name="bio" placeholder="short bio" value={user.bio} onChange={e => handleChange(e)} />
                <button>Submit User</button>
            </form>
        </>
    );
}