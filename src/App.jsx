import './App.css';
import {Button} from './components/Button.jsx';
import {JournalItem} from './components/JournalItem.jsx';
import {CardButton} from './components/CardButton.jsx';
import {LeftPanel} from './layout/LeftPanel.jsx';
import {MainPanel} from './layout/MainPanel.jsx';
import styled from 'styled-components';

function App() {

    return (
        <Wrapper>
            <LeftPanel/>
            <MainPanel/>
            {/*<Button/>*/}

        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;
