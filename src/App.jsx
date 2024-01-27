import './App.css';
import {LeftPanel} from './layout/LeftPanel.jsx';
import {MainPanel} from './layout/MainPanel.jsx';
import styled from 'styled-components';
import {useEffect, useState} from 'react';

function App() {
    const [state, setState] = useState([]);
    const [selectedItem, setSelectedItem] = useState({});
    console.log(state);

    const addStateItem = (data) => {
        if (data.id) {
            setState([...state, data]);
        }
        // setState([...state.map(el => {
        //     if (el.id === data.id) {
        //         return {
        //             ...data
        //         };
        //     }
        //     return el;
        // })]);


    };
    useEffect(() => {
        const data = localStorage.getItem('data');
        if (data) {
            return setState(JSON.parse(data));
        }
        if (!data) {
            localStorage.setItem('data', JSON.stringify([]));
        }
    }, []);

    useEffect(() => {
        if (state.length) {
            localStorage.setItem('data', JSON.stringify(state));
        }
    }, [state]);
    return (
        <Wrapper>
            <LeftPanel data={state} setSelectedItem={setSelectedItem}/>
            <MainPanel addStateItem={addStateItem} selectedItem={selectedItem}/>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;
