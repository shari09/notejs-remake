import React, {useReducer} from 'react';
import {Button} from 'react-bootstrap';
import SignUp from './pages/SignUp.js';
import Login from './pages/Login.js';


function pageChanger(state, action) {
  switch (action.page) {
    case 'sign up':
      return {page: <SignUp/>};
    case 'login':
      return {page: <Login/>};
    default:
      return {page: <Prompt/>};
  }
}

const Prompt = (props) => {
  return (
  <div id="prompt">
    <Button onClick={() => setPage()}>Sign up</Button>
    <Button onClick={() => page = LOGIN}>Login</Button>
  </div>
  );
};

const App = function(props) {
  const [page, setPage] = useReducer(pageChanger, <Prompt/>);
  return (page);
};

export default App;