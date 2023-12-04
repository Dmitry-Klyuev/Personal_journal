import React from 'react';
import styled from 'styled-components';

export const Header = () => {
    return (
        <Logo src={'/logo.svg'} alt='Логотип сайта'/>
    );
};

const Logo = styled.img`
width: 180px;
  margin-bottom: 30px;
`;