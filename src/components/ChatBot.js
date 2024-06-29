import React, { useState } from 'react';
import aiResponses from '../data/aiResponses.json';
import FeedbackForm from './FeedbackForm';
import './ChatBot.css';
import { Button, TextField, Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import { ThumbUp, ThumbDown } from '@mui/icons-material';
import logo from '../assets/logo.png'

const ChatBot = ({ addConversation }) => {
  const [query, setQuery] = useState('');
  const [chat, setChat] = useState([]);
  const [feedbackVisible, setFeedbackVisible] = useState(null);

  const handleQuerySubmit = () => {
    const response = aiResponses[query] || "I'm sorry, I don't understand that.";
    setChat([...chat, { query, response }]);
    setQuery('');
  };

  const handleFeedback = (index, feedback) => {
    const newChat = [...chat];
    newChat[index].feedback = feedback;
    setChat(newChat);
  };

  const endConversation = () => {
    addConversation(chat);
    setChat([]);
  };

  return (
    <div className="chatbot-container">
      <Typography variant="h4" className="header">How Can I Help You Today?</Typography>
      <div className="icon-container">
        <img src={logo} alt="Bot Icon" className="bot-icon" />
      </div>
      <div className="suggestions">
        {Object.keys(aiResponses).map((suggestion, index) => (
          <Button key={index} variant="contained" onClick={() => setQuery(suggestion)}>
            {suggestion}
          </Button>
        ))}
      </div>
      <Box className="input-container">
        <TextField 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Ask" 
          fullWidth 
        />
        <Button variant="contained" onClick={handleQuerySubmit}>Ask</Button>
        <Button variant="outlined" onClick={endConversation}>Save</Button>
      </Box>
      <Box className="chat-box">
        {chat.map((c, index) => (
          <Card key={index} className="chat-card">
            <CardContent>
              <Typography variant="h6">{c.query}</Typography>
              <Typography variant="body1">{c.response}</Typography>
              <Box className="feedback-buttons">
                <IconButton onClick={() => handleFeedback(index, 'like')}><ThumbUp /></IconButton>
                <IconButton onClick={() => handleFeedback(index, 'dislike')}><ThumbDown /></IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      {chat.length > 0 && <FeedbackForm endConversation={endConversation} />}
    </div>
  );
};

export default ChatBot;
