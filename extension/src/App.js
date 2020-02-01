import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import SignUp from './pages/SignUp.js';
import Login from './pages/Login.js';


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

const App = function(props) {
  const [page, setPage] = useState('signUp');

  return (
    <div>
      <Prompt setPage={setPage}/>
      {page === 'signUp' && <SignUp/>}
      {page === 'login' && <Login/>}
    </div>
  );
};

export default App;