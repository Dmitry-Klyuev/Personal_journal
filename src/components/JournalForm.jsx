import {Button} from './Button.jsx';
import styled from 'styled-components';
import {useContext, useEffect, useReducer, useRef} from 'react';
import {INITIAL_STATE, journalState, resetValidity} from '../state/JournalForm.state.js';
import {UserContext} from '../state/User.context.jsx';

export const JournalForm = ({ addStateItem, selectedItem }) => {
    const { userId } = useContext(UserContext);
    const [state, dispatch] = useReducer(journalState, INITIAL_STATE);
    const {validForm, formReadyToSend, valuesForm} = state;
    const titleRef = useRef();
    const dataRef = useRef();
    const tagRef = useRef();
    const descriptionRef = useRef();

    useEffect(() => {
        if (selectedItem){
            dispatch({'type': 'CLEAR_VALUE'});
        }
        dispatch({type: 'CHANGE_VALUE', payload: {...selectedItem}});

    }, [selectedItem]);

    const focusInput = (input) => {
        switch (true) {
            case !input.title:
                titleRef.current.focus();
                break;
            case !input.date:
                dataRef.current.focus();
                break;
            case !input.tag:
                tagRef.current.focus();
                break;
            case !input.description:
                descriptionRef.current.focus();
                break;
        }
    };

    useEffect(() => {
        if (!state.validForm.date || !state.validForm.title || !state.validForm.tag || !state.validForm.description) {
            focusInput(state.validForm);
            setTimeout(() => {
                dispatch(resetValidity());
            }, 3000);
        }
    }, [validForm]);

    useEffect(() => {
        if (formReadyToSend) {
            addStateItem(valuesForm);
            dispatch({'type': 'CLEAR_VALUE'});
        }
    }, [formReadyToSend]);

    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.target));
        dispatch({type: 'SUBMIT', payload: {id: +userId, ...formData}});
    };
    const changeValue = (e) => {
            dispatch({type: 'CHANGE_VALUE', payload: {[e.target.name]: e.target.value}});
        }
    ;
    return (
        <>
            <Form onSubmit={addJournalItem}>
                <InputWrapper>
                    <Input type="text"
                           name='title'
                           id='title'
                           value={valuesForm.title}
                           onChange={changeValue}
                           ref={titleRef}
                    />
                    <img src="/src/assets/archive.svg" alt="archive"/>
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="date">
                        <img src="/src/assets/date.svg" alt=""/>
                        <span>Дата</span>
                    </Label>
                    <Input type="date"
                           name='date'
                           id='date'
                           value={valuesForm.date}
                           onChange={changeValue}
                           ref={dataRef}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="tag">
                        <img src="/src/assets/tag.svg" alt="tag"/>
                        Метки
                    </Label>
                    <Input type="text"
                           name='tag'
                           id='tag'
                           value={valuesForm.tag}
                           onChange={changeValue}
                           ref={tagRef}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Textarea name="description"
                              value={valuesForm.description}
                              onChange={changeValue}
                              ref={descriptionRef}
                    />
                </InputWrapper>
                <Button>Сохранить</Button>
            </Form>
            {!(state.validForm.title && state.validForm.date && state.validForm.tag && state.validForm.description) &&
                <Error>Все поля обязательны для заполнения</Error>}
        </>
    );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 2px solid #3f3f3f;
  outline: none;
  width: 80%;

  &:focus {
    border-bottom: 5px solid #3f3f3f;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
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

const Label = styled.label`
  display: flex;
  gap: 20px;
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 200px;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid #3f3f3f;

  &:focus {
    border-bottom: 5px solid #3f3f3f;
  }
`;