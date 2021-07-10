import React, { useRef } from 'react';
import { db } from '../../firebase-config';
import firebase from 'firebase';
import { useAuth } from '../../context/AuthProvider';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledApplication = styled.div`
  background-color: #f2f3f4;
  height: 100vh;
  margin-top: 0;
`;

const StyledForm = styled.form`
  padding: 10px;
`;

const StyledHeading = styled.p`
  font-size: 30px;
  padding: 10px;
  margin: 20px auto 15px;
  font-weight: 500;
  color: #2e4053;
  text-align: center;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export default function AddingAds() {
  const category = useRef();
  const title = useRef();
  const descriptions = useRef();
  const myDateCreated = firebase.firestore.Timestamp.fromDate(new Date());
  const { currentUser } = useAuth();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    const checkedGiveOrTake = document.querySelector(
      'input[name=give-take]:checked'
    ).value;
    const data = {
      author: currentUser.email,
      category: category.current.value,
      title: title.current.value,
      descriptions: descriptions.current.value,
      givetake: checkedGiveOrTake,
      dateCreated: myDateCreated,
      status: 'active'
    };
    db.collection('announcements').add(data);
    history.push('/');
  }

  return (
    <>
      <StyledApplication>
        <StyledHeading>Create new ad</StyledHeading>
        <StyledForm>
          <StyledDiv>
            <label
              style={{ color: '#2e4053', fontWeight: 500 }}
              htmlFor="category"
            >
              Category
            </label>
            <select
              style={{ color: '#2e4053', fontWeight: 500 }}
              ref={category}
              id="category"
              name="category"
            >
              <option disabled value="">
                Choose category
              </option>
              <option value="small-fixes">Small fixes</option>
              <option value="storage">Storage</option>
              <option value="helper">Helper</option>
              <option value="parking-space">Parking space</option>
              <option value="events">Events</option>
              <option value="others">Others</option>
            </select>
          </StyledDiv>
          <StyledDiv>
            <label style={{ color: '#2e4053', fontWeight: 500 }} for="title">
              Title
            </label>
            <input
              style={{ height: 20, width: 200, borderRadius: '10px' }}
              ref={title}
              required
              id="title"
              name="title"
            ></input>
          </StyledDiv>
          <StyledDiv>
            <label
              style={{ color: '#2e4053', fontWeight: 500 }}
              for="descriptions"
            >
              Description
            </label>
            <textarea
              ref={descriptions}
              style={{ height: 100, width: 350, borderRadius: '10px' }}
              required
              id="descriptions"
              name="descriptions"
            ></textarea>
          </StyledDiv>
          <fieldset>
            <legend>You want to...</legend>

            <label for="give">Give</label>
            <input
              required
              id="give"
              name="give-take"
              value="give"
              type="radio"
            ></input>

            <label for="take">Take</label>
            <input id="take" name="give-take" value="take" type="radio"></input>
          </fieldset>
          <button onClick={handleSubmit}>Add</button>
        </StyledForm>
      </StyledApplication>
    </>
  );
}
