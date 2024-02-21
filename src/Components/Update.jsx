import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Toast } from 'react-bootstrap';

function Update() {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState('');
    const [selectedUserName, setSelectedUserName] = useState('');
    const [selectedUserEmail, setSelectedUserEmail] = useState('');
    const [selectedUserCompany, setSelectedUserCompany] = useState('');
    const [selectedUserWebsite, setSelectedUserWebsite] = useState('');
    const [selectedUserPhone, setSelectedUserPhone] = useState('');
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://mock-api-bdg1.onrender.com/data/');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleUserSelectChange = async (e) => {
        const userId = e.target.value;
        setSelectedUserId(userId);

        try {
            const response = await axios.get(`https://mock-api-bdg1.onrender.com/data/${userId}`);
            setSelectedUserName(response.data.name);
            setSelectedUserEmail(response.data.email);
            setSelectedUserCompany(response.data.company ? response.data.company.name : ''); // Handle nested property
            setSelectedUserWebsite(response.data.website);
            setSelectedUserPhone(response.data.phone);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    const handleNameChange = (e) => {
        setSelectedUserName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setSelectedUserEmail(e.target.value);
    };

    const handleCompanyChange = (e) => {
        setSelectedUserCompany(e.target.value);
    };

    const handleWebsiteChange = (e) => {
        setSelectedUserWebsite(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setSelectedUserPhone(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!selectedUserId) {
            alert('Please select a user.');
            return;
        }

        try {
            await axios.put(`https://mock-api-bdg1.onrender.com/data/${selectedUserId}`, {
                name: selectedUserName,
                email: selectedUserEmail,
                company: {
                    name: selectedUserCompany
                },
                website: selectedUserWebsite,
                phone: selectedUserPhone
            });
            setShowToast(true);
            fetchUsers();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <Container fluid>
            <h1>Edit/Update a User</h1>
            <Form id="updateForm" onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="userId">
                    <Form.Label>Select User ID</Form.Label>
                    <Form.Control as="select" value={selectedUserId} onChange={handleUserSelectChange}>
                        <option value="">Select User ID</option>
                        {users.map(user => (
                            <option key={user.id} value={user.id}>{user.id}</option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" value={selectedUserName} onChange={handleNameChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" value={selectedUserEmail} onChange={handleEmailChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="company">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" placeholder="Enter your company" value={selectedUserCompany} onChange={handleCompanyChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="website">
                    <Form.Label>Website</Form.Label>
                    <Form.Control type="text" placeholder="Enter your website" value={selectedUserWebsite} onChange={handleWebsiteChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter your phone" value={selectedUserPhone} onChange={handlePhoneChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>

            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <Toast show={showToast} onClose={() => setShowToast(false)}>
                    <Toast.Header>
                        <strong className="me-auto">Update User</strong>
                        <button type="button" className="btn-close" onClick={() => setShowToast(false)}></button>
                    </Toast.Header>
                    <Toast.Body>User updated successfully!</Toast.Body>
                </Toast>
            </div>
        </Container>
    );
}

export default Update;
