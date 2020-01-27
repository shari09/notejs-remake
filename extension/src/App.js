import React, {UseState} from 'react';
import {Button} from 'react-bootstrap';
import SignUp from './pages/SignUp.js';
import Login from './pages/Login.js';


const Prompt = (props) => {
  return (
  <div id="prompt">
    <Button onClick={() => props.setPage(SignUp)}>Sign up</Button>
    <Button onClick={() => props.setPage(Login)}>Login</Button>
  </div>
  );
};

const App = function(props) {
  const [page, setPage] = UseState();

  return (
    <div>
     {page}
    </div>
  );
};

export default App;