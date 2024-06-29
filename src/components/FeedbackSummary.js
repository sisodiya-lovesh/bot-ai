import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';

const FeedbackSummary = ({ conversations }) => {
  const [filter, setFilter] = useState('');

  const filteredFeedback = conversations.flatMap((conv, index) =>
    conv.map((c) => ({ ...c, conversationIndex: index }))
  ).filter((c) => c.feedback && c.feedback.rating >= filter);

  return (
    <TableContainer component={Paper}>
      <TextField
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter by rating"
        type="number"
        inputProps={{ min: 0, max: 5 }}
        fullWidth
      />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Conversation</TableCell>
            <TableCell>Query</TableCell>
            <TableCell>Response</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Feedback</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredFeedback.map((c, index) => (
            <TableRow key={index}>
              <TableCell>{c.conversationIndex + 1}</TableCell>
              <TableCell>{c.query}</TableCell>
              <TableCell>{c.response}</TableCell>
              <TableCell>{c.feedback.rating}</TableCell>
              <TableCell>{c.feedback.comment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FeedbackSummary;
