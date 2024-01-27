import {Header} from '../components/Header.jsx';
import {JournalAddItem} from '../components/JournalAddItem.jsx';
import {CardButton} from '../components/CardButton.jsx';
import {JournalItem} from '../components/JournalItem.jsx';
import {JournalItems} from '../components/JournalItems.jsx';
import styled from 'styled-components';
import {ChangeUser} from '../components/ChangeUser.jsx';
import {useContext} from 'react';
import {UserContext} from '../state/User.context.jsx';

export const LeftPanel = ({ data, setSelectedItem }) => {
    const {userId} = useContext(UserContext);

    const cardClickHandler = (el) => {
        setSelectedItem(el);
    };

    return (
        <LeftPanelWrapper>
            <Header/>
            <ChangeUser/>
            <JournalAddItem onClick={()=> setSelectedItem({})}/>
            <JournalItems>
                {data === 0 && <p>Записей нет</p>}
                {data.length > 0 && data
                    .filter(el => el.id === +userId)
                    .map(el => <CardButton key={el.title}
                                           onClick={() => cardClickHandler(el)}
                        >
                            <JournalItem title={el.title}
                                         date={el.date}
                                         description={el.description}
                            />
                        </CardButton>
                    )}
            </JournalItems>
        </LeftPanelWrapper>
    );
};

const LeftPanelWrapper = styled.div`
  width: 452px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;