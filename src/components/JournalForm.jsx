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
        if (!formData.title) {
            setValidForm({...validForm, title: false});
            return;
        }
        if (!formData.date) {
            setValidForm({...validForm, date: false});
            return;
        }
        if (!formData.tag) {
            setValidForm({...validForm, tag: false});
            return;
        }
        if (!formData.description) {
            setValidForm({...validForm, description: false});
            return;
        }
        addStateItem(formData);
    };

    return (
        <Form onSubmit={addJournalItem}>
            <input type="text" name={'title'} props={validForm.title.toString()}/>
            <input type="date" name={'date'}/>
            <input type="text" name={'tag'}/>
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
  &>input{
    //border: ${props => props.props ? '1px solid red' : '1px solid #000'};
  }
`;