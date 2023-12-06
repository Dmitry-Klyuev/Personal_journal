import {Button} from './Button.jsx';
import styled from 'styled-components';

export const JournalForm = ({addStateItem}) => {
    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        addStateItem(formData);
    };

    return (
        <Form onSubmit={addJournalItem}>
            <input type="text" name={'title'}/>
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
`;