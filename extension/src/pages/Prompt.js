import React from 'react';
import {Button} from 'react-bootstrap';

const style = {
  container: {
    textAlign: 'center'
  },
  button: {
    borderRadius: '0px'
  }
};

const Prompt = (props) => {
  return (
  <div id="prompt" style={style.container}>
    <Button variant="outline-dark" size="sm" style={style.button}
            onClick={() => props.setPage('signUp')}>Sign up</Button>
    <Button variant="outline-dark" size="sm" style={style.button}
            onClick={() => props.setPage('login')}>Login</Button>
  </div>
  );
};

export default Prompt;