import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './pages/SignUp.js';


const App = (props) => {
  return (
    <div>
     <SignUp/>
    </div>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);