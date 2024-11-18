import React, { useEffect, useState } from 'react';
import './UserList.css'; // Create this file for additional styles

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3000/api/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <strong>{user.username}</strong> ({user.email})
        </li>
      ))}
    </ul>
  );
};

export default UserList;