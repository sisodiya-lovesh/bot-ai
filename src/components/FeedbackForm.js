import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Rating } from '@mui/material';

const FeedbackForm = ({ endConversation }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    // Here you can send the feedback to a server or save it locally
    console.log({ rating, comment });
    endConversation();
  };

  return (
    <Box className="feedback-form">
      <Typography variant="h6">Give Your Feedback</Typography>
      <Rating 
        value={rating} 
        onChange={(event, newValue) => setRating(newValue)} 
      />
      <TextField 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
        placeholder="Your comments" 
        fullWidth 
        multiline 
        rows={4} 
      />
      <Button variant="contained" onClick={handleSubmit}>Submit Feedback</Button>
    </Box>
  );
};

export default FeedbackForm;
