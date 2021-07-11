import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export const StyledAnchor = styled.a`
  color: #2e4053;
  font-weight: 400;
  padding: 5px 10px;
  border: 1px solid #2e4053;
  border-radius: 10px;
  margin: 10px 0 10px 0;
  width: 50%;
  text-align: center;
  font-size: 12px;
  :hover {
    cursor: pointer;
  }
`;

export function AddAdBtn(category) {
  const history = useHistory();

  function handleGoToPost(e) {
    e.preventDefault();
    history.push('/post');
  }

  return (
    <div>
      <StyledAnchor onClick={handleGoToPost}>Add new ad ➕</StyledAnchor>
    </div>
  );
}
