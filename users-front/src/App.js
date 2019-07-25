import React, { Component } from 'react';
import axios from 'axios';

import UserList from './UserList';
import AddUser from './AddUser';


import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: []
    }

  }
  

  componentDidMount() {
    axios.get('http://localhost:8000/api/users').then(res => this.setState({
      users: res.data
    })).catch(err => console.log(err));
  }

  addUser = (e, user) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/users', user).then(res => {
      this.setState({
        users: res.data
      });
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <h2>Here are the Users in the list...</h2>
        <UserList users={this.state.users}/>
        <AddUser addUser={this.addUser}/>
      </>
    );
  }
}

export default App;
