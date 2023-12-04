import styled from 'styled-components';
import {FormData} from '../components/FormData.jsx';

export const MainPanel = () => {
    return (
        <MainWrapper>
            <FormData/>
        </MainWrapper>
    );
};


const MainWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;