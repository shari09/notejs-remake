import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';


async function post(url, data) {
  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const ip = '192.168.1.37';
  const port = '3000';


  const validateForm = () => {
    return username.length > 0 
           && password.length >= 6;
  };

  const submitForm = () => {
    const data = {
      username: username,
      password: password
    };

    post(`https://${ip}:${port}/login`, data);
  };

  return (
    <div id="signUp">
      <Form onSubmit={submitForm}>

        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="username"
                        value={username} onChange={e => setUsername(e.target.value)}
                        required/>
        </Form.Group>
        
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password"
                        value={password} onChange={e => setPassword(e.target.value)}
                        required/>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!validateForm()}>Sign Up</Button>
      </Form>
    </div>
  );

};

export default Login;