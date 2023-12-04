import {Button} from './Button.jsx';
import styled from 'styled-components';

export const FormData = () => {
    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData();
        // const form = Object.fromEntries(formData);
        console.log(formData);
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