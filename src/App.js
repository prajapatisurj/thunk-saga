// src/components/UserList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersWithThunk } from '../src/actions/userActions';

const App = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUsersWithThunk());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default App;
