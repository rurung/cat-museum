import React, { useState, useEffect } from "react";
//import { useForm } from "react-hook-form";
import styled from "styled-components";
//import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {

  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다

    const handleUserId = (e) => {
      setUserId(e.currentTarget.value);
      const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (!setUserId(e.target.value) || emailRegex.test(setUserId(e.target.value))) setEmailError(false);
        else setEmailError(true);
    }
    const handleUserPw = (e) => {
      setUserPw(e.currentTarget.value);
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if ((!setUserPw(e.target.value) || (passwordRegex.test(setUserPw(e.target.value))))) setPasswordError(false);
      else setPasswordError(true);
    }

    const validation = () =>  {
      if(!userId) setEmailError(true);
      if(!userPw) setPasswordError(true);
      if(userId && userPw) return true;
      else return false;
    }

    // login 버튼 클릭 이벤트
    const onClickLogin = (e) => {
      console.log('click login');
      console.log('ID:', userId);
      console.log('PW:', userPw);
      if(validation()) return navigate('/Index');
    }

    // 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
      setDisabled(!(userId && userPw))
    },[userId, userPw])
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    return(
        <>
        <div>
            <div className="container">
                <div className="login-form">
                    <div className="header">
                        <Title>
                            Login
                        </Title>
                    </div>
                    <div className="form">
                      <input type="email" id="user_Id" name="email" placeholder="이메일 또는 전화번호" onChange={handleUserId} {...emailError && <div class="invalid-input">사용자 ID는 5자 이상이어야 하며 문자 또는 숫자를 포함해야 합니다.</div>}/>

                      <input type="password" id="password" name="password" placeholder="비밀번호" onChange={handleUserPw} {...passwordError && <div class="invalid-input">비밀번호는 8자 이상이어야 하며 문자와 숫자를 각각 하나 이상 포함해야 합니다.</div>}/>
                      <Button id="submit" type="submit" onClick={onClickLogin} disabled={disabled}>로그인</Button>
                    </div>
                    <div className="auto">
                      <input type="radio" value="HTML" /><label>자동로그인</label>
                  </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  cursor: pointer;  
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;