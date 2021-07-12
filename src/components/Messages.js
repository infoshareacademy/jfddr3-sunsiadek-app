import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from '../firebase-config';
import SendMessage from './SendMessage';
import { Link } from 'react-router-dom';
import { StyledAnchor } from './AddAdBtn';
import '../app.css';
import styled from 'styled-components';

const MessageText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 25px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  overflow-wrap: break-word;
`;

const Messages = () => {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection('messages')
      .orderBy('createdAt')
      .limit(50)
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => doc.data()));
      });
  }, []);
  return (
    <div>
      <Link to="/">
        <StyledAnchor> ⬅️ go back to dashboard</StyledAnchor>
      </Link>
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid, author }) => (
          <div>
            <div
              key={id}
              className={`msg ${
                uid === auth.currentUser.uid ? 'sent' : 'received'
              }`}
            >
              {/* <img src={photoURL} alt="" /> */}
              <div>
                <h6>{author}</h6>
                <MessageText>{text}</MessageText>
              </div>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
};

export default Messages;
