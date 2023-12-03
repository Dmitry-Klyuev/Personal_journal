import React from 'react';
import {CardButton} from './CardButton.jsx';
import styled from 'styled-components';

export const JournalAddItem = () => {
    return (
        <JournalAddItemStyled>
            <CardButton>
                + Новое воспоминание
            </CardButton>
        </JournalAddItemStyled>
    );
};

const JournalAddItemStyled = styled.div`
  text-align: center;
`;