import axios from 'axios';

axios.get('https://fake-json-api.mock.beeceptor.com/users')
    .then(response => {
        console.log(response.data); // Handle the response data
    })
    .catch(error => {
        console.error('Error fetching users:', error); // Handle the error
    });