import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UserList from './UserList';
import AddUser from './AddUser';


import './App.css';

const App = () =>  {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8000/api/users').then(res => setUsers([...res.data])).catch(err => console.log(err));
  }, []);

  const addUser = (e, user) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/users', user).then(res => {
    setUsers([...res.data, ...user]);
    }).catch(err => console.log(err));
  }

  const updateUser = (e, userId) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/users/${userId}`).then(res => setUsers([...res.data])).catch(err => console.log(err));
  }

  const deleteUser = (e, userId) => {
    e.preventDefault();
    axios.delete(`http://localhost:8000/api/users/${userId}`).then(res => setUsers([...res.data])).catch(err => console.log(err));
  }


    return (
      <>
        <h2>Here are the Users in the list...</h2>
        <AddUser addUser={addUser}/>
        <UserList users={users} deleteUser={deleteUser} updateUser={updateUser}/>
      </>
    );
}

export default App;
