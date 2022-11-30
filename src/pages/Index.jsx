import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Link } from 'react-router-dom';

function Index(props) {
    const isLogin = props.isLogin;

    const onLogout = () => {
        sessionStorage.removeItem('userId');
        document.location.href = '/';
    }

    return (
        <>
        <h3>안녕하세요. 메인페이지 입니다.</h3>
			<ul>
				<Link to="/gallery"><li>고양이 갤러리로</li></Link>
				<Link to="/error"><li>여긴어디?</li></Link>
			</ul>
				<Button type="button" onClick={onLogout}>로그아웃</Button>
        </>
    );
}

export default Index;

const Button = styled.button`
  cursor: pointer;  
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  &:hover {
    background: palevioletred;
    color: #fff;
  }
`;