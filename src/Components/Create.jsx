import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function Create() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: {
            name: '', // Nested state for company name
        },
        website: '',
        phone: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            // For nested state, spread the current state of the nested object and update the specific property
            company: {
                ...formData.company,
                [name]: value
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://mock-api-bdg1.onrender.com/data/', formData);
            setMessage('User created successfully!');
            setError('');
            clearForm();
        } catch (error) {
            setMessage('');
            setError('Error creating user. Please try again.');
        }
    };

    const clearForm = () => {
        setFormData({
            name: '',
            email: '',
            company: {
                name: '', // Clear nested state for company name
            },
            website: '',
            phone: ''
        });
    };

    return (
        <Container fluid>
            <h1>Create a New User</h1>
            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="company">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" name="name" value={formData.company.name} onChange={handleChange} placeholder="Enter your company" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="website">
                    <Form.Label>Website</Form.Label>
                    <Form.Control type="text" name="website" value={formData.website} onChange={handleChange} placeholder="Enter your website" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your Phone Number" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create User
                </Button>
            </Form>
        </Container>
    );
}

export default Create;
