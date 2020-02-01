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

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  
  const ip = '192.168.1.37';
  const port = '3000';


  const validateForm = () => {
    return email.length > 0 
           && password.length >= 6 
           && password === passwordConf;
  };

  const submitForm = (event) => {
    event.preventDefault();
    const data = {
      email: email,
      username: username,
      password: password,
      passwordConf: passwordConf
    };

    post(`https://${ip}:${port}/signUp`, data);
  };

  return (
    <div id="signUp">
      <Form onSubmit={submitForm}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
                        value={email} onChange={e => setEmail(e.target.value)}
                        required autoFocus/>
          <Form.Text>Some random text here</Form.Text>
        </Form.Group>

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

        <Form.Group controlId="passwordConf">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password"
                        value={passwordConf} onChange={e => setPasswordConf(e.target.value)}
                        required/>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!validateForm()}>Sign Up</Button>
      </Form>
    </div>
  );

};

export default SignUp;