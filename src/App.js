import React, { useState } from 'react';
import ChatBot from './components/ChatBot';
import PastConversations from './components/PastConversations';
import FeedbackSummary from './components/FeedbackSummary';
import { Box, Button, Container } from '@mui/material';
import './App.css';

const App = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [view, setView] = useState('chat');

  const addConversation = (chat) => {
    setConversations([...conversations, chat]);
  };

  const selectConversation = (index) => {
    setSelectedConversation(conversations[index]);
    setView('chat');
  };

  return (
    <Container className="app-container">
       <Box className="parent-container">
       <Box className="sidebar">
        <Button variant="contained" onClick={() => setView('chat')}>New Chat</Button>
        <PastConversations conversations={conversations} selectConversation={selectConversation} />
        <Button variant="contained" onClick={() => setView('feedback')}>Feedback Summary</Button>
      </Box>
      <Box className="main-content">
        {view === 'chat' ? (
          <ChatBot addConversation={addConversation} />
        ) : (
          <FeedbackSummary conversations={conversations} />
        )}
      </Box>
      </Box>
    </Container>
  );
};

export default App;
