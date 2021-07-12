import React, { useState, useEffect, useRef } from 'react';
import { db, auth } from '../firebase-config';
import SendMessage from './SendMessage';
import { Link } from 'react-router-dom';
import { StyledAnchor } from './AddAdBtn';
import '../app.css';

const Charts = () => {
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
                <p>{text}</p>
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

export default Charts;
