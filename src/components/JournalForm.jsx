import {Button} from './Button.jsx';
import styled from 'styled-components';
import {useState} from 'react';

export const JournalForm = ({addStateItem}) => {
    const [validForm, setValidForm] = useState({
        title: true,
        date: true,
        tag: true,
        description: true
    });
    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        let isError = false;
        if (!formData.title) {
            setValidForm({...validForm, title: false});
            isError = true;
        }
        if (!formData.date) {
            setValidForm({...validForm, date: false});
            isError = true;
        }
        if (!formData.tag) {
            setValidForm({...validForm, tag: false});
            isError = true;
        }
        if (!formData.description) {
            setValidForm({...validForm, description: false});
            isError = true;
        }
        if (isError) {
            return;
        }
        addStateItem(formData);
    };

    return (
        <Form onSubmit={addJournalItem}>
            <Input type="text" name={'title'} error={validForm.title}/>
            <Input type="date" name={'date'} error={validForm.date}/>
            <Input type="text" name={'tag'} error={validForm.tag}/>
            <textarea name="description" cols="30" rows="10"></textarea>
            <Button>Сохранить</Button>
        </Form>
    );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
`;

const Input = styled.input`
  border: ${props => props.error ? '' : '1px solid red'};
`;