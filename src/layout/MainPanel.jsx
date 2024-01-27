import styled from 'styled-components';
import { JournalForm } from '../components/JournalForm.jsx';

export const MainPanel = ({ addStateItem, selectedItem }) => {
    return (
        <MainWrapper>
            <JournalForm addStateItem={addStateItem} selectedItem={selectedItem}/>
        </MainWrapper>
    );
};


const MainWrapper = styled.div`
  width: 100%;
  padding: 20px;
`;