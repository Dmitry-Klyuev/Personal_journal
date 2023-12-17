import {Button} from './Button.jsx';
import styled from 'styled-components';
import {useState} from 'react';

export const JournalForm = ({addStateItem}) => {
    const [error, setError] = useState(false);
    const [validForm, setValidForm] = useState({
        title: false,
        date: false,
        tag: false,
        description: false
    });
    // let isError = false;
    if  (error){
        setTimeout(()=>{
            setError(false);
        },3000);
    }
    // const error = setTimeout(()=>{
    //     if (isError){
    //         isError=false;
    //     }
    //     if (!isError){
    //         isError=true;
    //     }
    // }, 1000);
    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));

        if (!formData.title.trim()) {
            setValidForm({...validForm, title: true});
            return setError(true);
        }
        if (!formData.date.trim()) {
            setValidForm({...validForm, date: true});
            return setError(true);
        }
        if (!formData.tag.trim()) {
            setValidForm({...validForm, tag: true});
            return setError(true);
        }
        if (!formData.description.trim()) {
            setValidForm({...validForm, description: true});
            return setError(true);
        }
        if (error) {
            return ;
        }
        addStateItem(formData);
    };

    return (
        <>
            <Form onSubmit={addJournalItem}>
                <Input type="text" name={'title'} />
                <Input type="date" name={'date'} />
                <Input type="text" name={'tag'} />
                <textarea name="description" cols="30" rows="10"></textarea>
                <Button>Сохранить</Button>
            </Form>
            {error && <Error>Все поля обязательны для заполнения</Error>}
        </>
    );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
`;

const Input = styled.input`
  //border: ${({error}) => error === 'true' ? '1px solid red' : ''};
`;

const Error = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: red;
  padding: 5px 20px;
  animation: error 1s ease-in-out;
  @keyframes error {
    0% {
      transform: translateX(-400px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;