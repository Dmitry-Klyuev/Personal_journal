import './App.css';
import {LeftPanel} from './layout/LeftPanel.jsx';
import {MainPanel} from './layout/MainPanel.jsx';
import styled from 'styled-components';
import {useState} from 'react';

function App() {
    const [state, setState] = useState([
        {title: 'Подготовка к обновлению курсов', date: new Date(), description: 'Сегодня провёл весь день за...'},
        {title: 'Поход в годы', date: new Date(), description: 'Думал, что очень много време...'},
    ]);

    const addStateItem = (data) => {
        setState([...state, data]);
    };
    return (
        <Wrapper>
            <LeftPanel data={state}/>
            <MainPanel addStateItem={addStateItem}/>
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
