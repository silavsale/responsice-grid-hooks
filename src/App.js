import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import PeopleCard from './PeopleCard'
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setUsers(
        await fetch('https://reqres.in/api/users?page=2')
          .then(res => res.json())
          .then(res => res.data)
      )
    }
    fetchData();
  }, []);

  return (
    <div>
      <h3>THE TRUE BEAUTY OF MATERIAL UI</h3>

      <Grid
        container
        spacing={10}
        style={{ padding: '24px' }}
      >
        {users.map(user =>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={3}
          >
            <PeopleCard key={user.id} id={user.id} avatar={user.avatar} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default App;
