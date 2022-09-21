import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  return (
    <div className="App">
      <Users></Users>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(data => setUsers(data.results))
  }, []);
  return (
    <div className='grid'>
      {users.map(user => <User user={user}></User>)}
    </div>
  )
}

function User(props) {
  const {picture, name, email} = props.user;
  return (
    <div>
      <img src={picture.large} alt="" />
      <h3>{name.title} {name.first} {name.last}</h3>
      <p>{email}</p>
    </div>
  )
}

export default App;
