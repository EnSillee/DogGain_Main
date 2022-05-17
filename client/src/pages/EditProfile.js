import React, { useState } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
function EditProfile() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    passwordCheck: '',
    nickname: '',
    email: '',
  });
  const [errMsg, setErrMsg] = useState('');
  const history = useHistory();
  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };
  const handleEditProfile = () => {
    const { username, password, passwordCheck, nickname, email } = userInfo;
    if (!username || !password || !passwordCheck || !nickname || !email) {
      setErrMsg('모든 항목이 필수입니다.');
    } else {
      // axios
      //   .post('https://localhost:3000/EditProfile', userInfo, {
      //     headers: { 'Content-Type': 'application/json' },
      //     withCredentials: true,
      //   })
      //   .then(() => {
      //     history.push('/');
      //   });
      console.log('username: ', username);
      console.log('password: ', password);
      console.log('passwordCheck: ', passwordCheck);
      console.log('nickname: ', nickname);
      console.log('email: ', email);
    }
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <form className="editprofile" onSubmit={(e) => e.preventDefault()}>
        <h1>회원 정보 수정</h1>
        <div>
          <Link to="/" onClick={() => (window.location.href = '/')}>
            다시 메인 페이지로!
          </Link>
        </div>
        <div>모든 항목은 필수입니다.</div>
        <div>
          <div>Username</div>
          <input
            type="text"
            placeholder="Username"
            onChange={handleInputValue('username')}
          ></input>
        </div>
        <div>
          <div>Password</div>
          <input
            type="password"
            placeholder="Password"
            onChange={handleInputValue('password')}
          ></input>
        </div>
        <div>
          <div>Password 확인</div>
          <input
            type="password"
            placeholder="Password"
            onChange={handleInputValue('passwordCheck')}
          ></input>
        </div>
        <div>
          <div>Nickname</div>
          <input
            type="text"
            placeholder="Nickname"
            onChange={handleInputValue('nickname')}
          ></input>
        </div>
        <div>
          <div>E-mail</div>
          <input
            type="email"
            placeholder="E-mail"
            onChange={handleInputValue('email')}
          ></input>
        </div>
        <div className="alert-box">{errMsg}</div>
        <button
          className="editprofile-btn"
          type="submit"
          onClick={handleEditProfile}
        >
          회원 정보 수정
        </button>
      </form>
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
}
export default EditProfile;
