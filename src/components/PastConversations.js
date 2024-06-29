import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const PastConversations = ({ conversations, selectConversation }) => {
  return (
    <List className="past-conversations">
      {conversations.map((conv, index) => (
        <ListItem button key={index} onClick={() => selectConversation(index)}>
          <ListItemText primary={`Conversation ${index + 1}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default PastConversations;
