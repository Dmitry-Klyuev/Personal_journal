import './App.css';
import {LeftPanel} from './layout/LeftPanel.jsx';
import {MainPanel} from './layout/MainPanel.jsx';
import styled from 'styled-components';
import {useEffect, useState} from 'react';

function App() {
    const [state, setState] = useState([]);

    const addStateItem = (data) => {
        setState([...state, data]);
    };
    useEffect(() => {
        const data = localStorage.getItem('data');
        if (data.length){
            setState(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        if (state.length){
            localStorage.setItem('data', JSON.stringify(state));
        }
    }, [state]);
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
