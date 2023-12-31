import styled from 'styled-components';

export const Button = ({children}) => {
    return (
        <ButtonStyled type='primary'>
            {children}
        </ButtonStyled>
    );
};

const ButtonStyled = styled.button`
  background-color: ${props => props.type === 'primary' ? '#312EB5' : 'red'};
  border: none;
  color: white;
  cursor: pointer;
  padding: 15px 30px;
  border-radius: 6px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
