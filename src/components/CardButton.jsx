import {useReducer} from 'react';
import styled from 'styled-components';
import {INITIAL_STATE, journalState} from '../state/JournalForm.state.js';

// eslint-disable-next-line react/prop-types
export const CardButton = ({ children, ...props}) => {
    return (
        <Item>
            {children}
        </Item>
    );
};

const Item = styled.div`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.03);
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.10);
  }
  &:active {
    background-color: rgba(255, 255, 255, 0.20);
  }
`;