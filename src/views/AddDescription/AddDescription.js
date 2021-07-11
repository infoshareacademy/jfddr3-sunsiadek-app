import React, { useRef } from 'react';
import { db } from '../../firebase-config';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthProvider';

const StyledApplication = styled.div`
  background-color: #f2f3f4;
  height: 100vh;
  margin-top: 0;
`;

const StyledForm = styled.form`
  padding: 10px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const StyledHeading = styled.p`
  font-size: 30px;
  padding: 10px;
  margin: 20px auto 15px;
  font-weight: 500;
  color: #2e4053;
  text-align: center;
`;

export default function AddDescription() {
  const userName = useRef();
  const userDescription = useRef();
  const { currentUser } = useAuth();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    const userData = {
      userName: userName.current.value,
      userDescription: userDescription.current.value
    };
    db.collection('users').doc(currentUser.email).set(userData);
    history.push('/profile');
  }

  return (
    <>
      <StyledApplication>
        <StyledHeading>Let your neighbours know you better! 🖊️ </StyledHeading>
        <StyledForm>
          <form>
            <StyledDiv>
              <label
                style={{ color: '#2e4053', fontWeight: 500 }}
                for="userName"
              >
                Name
              </label>
              <input
                ref={userName}
                style={{ height: 20, width: 200, borderRadius: '10px' }}
                required
                id="userName"
                name="userName"
              ></input>
            </StyledDiv>
            <div>
              <label
                style={{ color: '#2e4053', fontWeight: 500 }}
                for="userDescription"
              >
                Description
              </label>
              <textarea
                ref={userDescription}
                style={{ height: 100, width: 350, borderRadius: '10px' }}
                required
                id="userDescription"
                name="userDescription"
              ></textarea>
            </div>

            <button onClick={handleSubmit}>Ready!</button>
          </form>
        </StyledForm>
      </StyledApplication>
    </>
  );
}
