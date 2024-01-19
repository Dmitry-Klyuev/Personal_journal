import styled from 'styled-components';
import {UserContext} from '../state/User.context.jsx';
import {useContext} from 'react';

export const ChangeUser = () => {
    const { setUserId} = useContext(UserContext);

    return (
        <Select onChange={(e) => setUserId(e.target.value)}>
            <option value="1">Вася</option>
            <option value="2">Дима</option>
        </Select>
    );
};

const Select = styled.select`
  border: none;
  width: 100%;
  padding: 15px 25px;
  margin-bottom: 20px;
  outline: none;
`;