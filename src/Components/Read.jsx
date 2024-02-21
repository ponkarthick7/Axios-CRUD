import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table, Spinner } from 'react-bootstrap';

function Read() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://mock-api-bdg1.onrender.com/data');
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  return (
    <>
      <Container fluid>
        <h1>Users</h1>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Website</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
            {users.map(user => (
    <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name ? user.name : 'N/A'}</td>
        <td>{user.email ? user.email : 'N/A'}</td>
        <td>{user.company?.name ? user.company.name : 'N/A'}</td> {/* Using optional chaining */}
        <td>{user.website ? user.website : 'N/A'}</td>
        <td>{user.phone ? user.phone : 'N/A'}</td>  
    </tr>
))}

            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
}

export default Read;
