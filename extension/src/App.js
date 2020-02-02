import React, {useState} from 'react';
import SignUp from './pages/SignUp.js';
import Login from './pages/Login.js';
import Prompt from './pages/Prompt.js';
import LoggedIn from './pages/LoggedIn.js';



const App = function(props) {
  const [page, setPage] = useState('signUp');
  const [loggedIn, setLoggedIn] = useState(false);

  const renderContent = () => {
    if (loggedIn) {
      return <LoggedIn/>;
    }
    return (
      <div>
        <Prompt setPage={setPage}/>
        {page === 'signUp' && <SignUp setLoggedIn={setLoggedIn}/>}
        {page === 'login' && <Login setLoggedIn={setLoggedIn}/>}
      </div>
    );
  };

  return renderContent();
};

export default App;