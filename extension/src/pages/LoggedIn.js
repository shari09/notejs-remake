import React from 'react';
import {Jumbotron} from 'react-bootstrap';


const style = {
  textAlign: 'center'
};

const LoggedIn = props => {
  return (
    <Jumbotron fluid style={style}>
        <h1>Logged In!</h1>
    </Jumbotron>
  );
};

export default LoggedIn;