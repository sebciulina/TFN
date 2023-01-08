import React, { useState, useEffect } from 'react';

const RandomUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchRandomUser();
  }, []);

  const fetchRandomUser = () => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => setUser(data.results[0]));
  }

  return (
    <div>
      {user ? (
        <div>
          <button onClick={fetchRandomUser}>
            Next
          </button>
          <table>
            <tr>
              <th colSpan={2}>
                <img src={user.picture.large} alt="user"></img>
              </th>
            </tr>
            <tr>
              <td>First Name</td>
              <td>{user.name.first}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{user.name.last}</td>
            </tr>
            <tr>
              <td>E-mail</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>{user.location.country}</td>
            </tr>
          </table>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default RandomUser;
