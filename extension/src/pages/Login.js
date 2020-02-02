import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';


function post(url, data) {
  return new Promise(async(resolve, reject) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      resolve(response.json());
    } catch (err) {
      console.log('post err: ' + err.message);
      reject(err);
    }
  });
}

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [validated, setValidated] = useState(false);
  
  const ip = '192.168.1.37';
  const port = '3000';

  const submitForm = async (event) => {
    event.preventDefault();
    const data = {
      username: username,
      password: password
    };

    //post to server and wait for response
    const res = await post(`https://${ip}:${port}/login`, data);
    if (res.state === 'success') {
      props.setLoggedIn(true);
      setValidated(true);
    } else if (res.state === 'Incorrect password' 
               || res.state === 'User not found') {
      setUsername('');
      setPassword('');
      setValidated(false);
    } else {
      console.log('error: ' + res.state);
      setValidated(false);
    }
  };

  //TODO form invalid display doesn't work rn
  return (
    <div id="login">
      <Form noValidate validated={validated} onSubmit={submitForm}>

        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="username" autoFocus
                        value={username} onChange={e => setUsername(e.target.value)}
                        required/>
          <Form.Control.Feedback type="invalid">
            Incorrect username or password.
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password"
                        value={password} onChange={e => setPassword(e.target.value)}
                        required/>
        </Form.Group>

        <Button variant="primary" 
                type="submit">
          Log in
        </Button>
      </Form>
    </div>
  );

};

export default Login;