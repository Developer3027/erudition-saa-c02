import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentUser,
  userLogOut,
  selectUser
} from '../redux/userSlice';
import { auth } from '../firebase/firebaseConfig';
import { signOut, GithubAuthProvider, signInWithPopup } from 'firebase/auth';

function SignInScreen() {
  const user = useSelector(selectUser);
  // const userEmail = useSelector(selectEmail);
  // const userPhoto = useSelector(selectPhoto);
  //const [user, setUser] = useState(null);
  const [userOn, setUserOn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user)
    console.log(userOn)
  }, [user, userOn]); 


  const SignInWithGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
       dispatch(
         setCurrentUser({
           user: {
            name: res.user.displayName,
            email: res.user.email,
            photo: res.user.photoURL
           }
         })
       );
      }).catch(err => console.error(err))
      setUserOn(true)
  }

  const SignOutUser = () => {
    console.log('click sign out')
    signOut(auth).then(() => {
      dispatch(
        userLogOut({
          user: {}
        })
      );
    }).catch(err => console.error(err));
    setUserOn(false)
  }

  return (
    <div className='container'>
      <div className='wrap'>
        <h1>Erudition SAA-C02</h1>
        <h3>Hello {userOn && user.user.name} </h3>
        <img src={userOn && user?.user.photo} alt={userOn && user?.user.name} />
          <button onClick={SignInWithGithub}>github</button>
        
          <button onClick={SignOutUser}>logout</button>
      </div>
    </div>
  );
};

export default SignInScreen;
