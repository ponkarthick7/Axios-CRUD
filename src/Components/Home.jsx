import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function Home() {
  return (
    <>
      <div className="container-fluid">
        <p>Welcome to the CRUD DEMO  CRUD operations with user data using React and Axios fetch to interact with a mock API.
</p>
        
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Endpoint</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>/users</td>
              <td>GET</td>
              <td>get all users</td>
            </tr>
            <tr>
              <td>/users</td>
              <td>POST</td>
              <td>create new user</td>
            </tr>
            <tr>
              <td>/users/:id</td>
              <td>PUT</td>
              <td>update user by id</td>
            </tr>
            <tr>
              <td>/users/:id</td>
              <td>DELETE</td>
              <td>delete user by id</td>
            </tr>
          </tbody>
        </table>
        <p>To perform the CRUD, please use the navigation bar above.</p>
        <ul>
          <li>View Users - to view all the users</li>
          <li>Create a New User - to create a new user</li>
          <li>Edit / Update a User - to edit / update a user</li>
          <li>Delete a User - to delete a user</li>
        </ul>
        {/* Include the Read component here */}
        
      </div>
    </>
  );
}

export default Home;
