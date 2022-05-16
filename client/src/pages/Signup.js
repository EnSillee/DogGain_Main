import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
function Signup() {
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
  const handleSignup = () => {
    const { username, password, passwordCheck, nickname, email } = userInfo;
    if (!username || !password || !passwordCheck || !nickname || !email) {
      setErrMsg('모든 항목이 필수입니다.');
    } else {
      axios
        .post('https://localhost:3000/signup', userInfo, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        })
        .then(() => {
          history.push('/Main');
        });
    }
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>모든 항목은 필수입니다.</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <div>Username</div>
          <input type="text" onChange={handleInputValue('username')}></input>
        </div>
        <div>
          <div>Password</div>
          <input
            type="password"
            onChange={handleInputValue('password')}
          ></input>
        </div>
        <div>
          <div>Password 확인을 위해 한번 더 입력해주세요.</div>
          <input
            type="passwordCheck"
            onChange={handleInputValue('passwordCheck')}
          ></input>
        </div>
        <div>
          <div>Nickname</div>
          <input type="text" onChange={handleInputValue('nickname')}></input>
        </div>
        <div>
          <div>Email</div>
          <input type="email" onChange={handleInputValue('email')}></input>
        </div>
        <div>
          <Link to="/">다시 메인 페이지로</Link>
        </div>
        <button className="signup-btn" type="submit" onClick={handleSignup}>
          회원가입
        </button>
        <div className="alert-box">{errMsg}</div>
      </form>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Signup;
