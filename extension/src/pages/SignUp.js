import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
require('dotenv').config({path: 'config/.enc'});

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  
  const validateForm = () => {
    return email.length > 0 
           && password.length > 6 
           && password === passwordConf;
  };

  return (
    <div id="signUp">
      <Form action={`https://${process.env.IP}:${process.env.PORT}/signUp`}
            method="POST">
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control autoFocus type="email" placeholder="Enter email"
                        value={email} onChange={e => setEmail(e.target.value)}/>
          <Form.Text>Some random text here</Form.Text>
        </Form.Group>

        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="username"
                        value={username} onChange={e => setUsername(e.target.value)}/>
        </Form.Group>
        
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password"
                        value={password} onChange={e => setPassword(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="passwordConf">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password"
                        value={passwordConf} onChange={e => setPasswordConf(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!validateForm()}>Sign Up</Button>
      </Form>
    </div>
  );

};

export default SignUp;