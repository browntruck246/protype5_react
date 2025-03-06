import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersComponent = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://fake-json-api.mock.beeceptor.com/users')
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <ul>
            {users.map((user, index) => (
                <li key={index}>{user.name} - {user.email}</li>
            ))}
        </ul>
    );
};

export default UsersComponent;
