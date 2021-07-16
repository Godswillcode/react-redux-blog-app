import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import { login, logout } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch(
					login({
						uid: authUser.uid,
						photo: authUser.photoURL,
						email: authUser.email,
						displayName: authUser.displayName
					})
				);
			} else {
				dispatch(logout());
			}
		});
	}, []);
  return (
    <div className="App">
      <Header/>

      <div className="app__page">
        <Blogs/>
      </div>
    </div>
  );
}

export default App;
