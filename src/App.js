
import React, { useState } from 'react';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
import Gallery from './components/Gallery';
import Footer from "./components/Footer"
import NavBar from './components/NavBar';


function App() {
  const [user, setUser] = useState(null);

  // Define a function to update the user state when authentication changes
  const updateUserState = (newUser) => {
    setUser(newUser);
  };

  return (
    <div>
    <NavBar />
      {user ? (
        // Display the Gallery component when user is authenticated
        <Gallery />
      ) : (
        // Display the authentication components when user is not authenticated
        <div>
          <SignIn updateUserState={updateUserState} />
          <SignUp updateUserState={updateUserState} />
        </div>
      )}
      {user && (
        // Display the AuthDetails component when user is authenticated
        <AuthDetails updateUserState={updateUserState} />
      )}
      <Footer />
    </div>
  );
}

export default App;
