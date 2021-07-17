import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import { login, logout } from './features/userSlice';
import { auth } from './firebase';
import Blogs from "./components/Blogs/Blogs"

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

     
    </div>
  );
}

export default App;
