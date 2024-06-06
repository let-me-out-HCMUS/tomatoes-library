import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import { useContext } from 'react';
import {SourceOrderContext} from '../shared/context/SourceOrderContext';

const ReorderableList = () => {
    const {getSourceOrder, moveSourceUp, moveSourceDown} = useContext(SourceOrderContext)
    const sources = getSourceOrder()
  return (
    <List>
      {sources.map((source, index) => (
          <ListItem key={source}
            className="transition-transform duration-500 ease-in-out transform bg-gray-100 hover:bg-gray-200"
          >
            <ListItemText primary={source}  className='mr-10 text-nowrap'/>
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="move up"
                onClick={() => moveSourceUp(index)}
                disabled={index === 0}
              >
                <ArrowUpward /> 
              </IconButton>
              <IconButton
                edge="end"
                aria-label="move down"
                onClick={() => moveSourceDown(index)}
                disabled={index === sources.length - 1}
              >
                <ArrowDownward />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
      ))}
    </List>
  );
};

export default ReorderableList;
