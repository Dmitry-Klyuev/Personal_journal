import {Header} from '../components/Header.jsx';
import {JournalAddItem} from '../components/JournalAddItem.jsx';
import {CardButton} from '../components/CardButton.jsx';
import {JournalItem} from '../components/JournalItem.jsx';
import {JournalItems} from '../components/JournalItems.jsx';
import styled from 'styled-components';
import {ChangeUser} from '../components/ChangeUser.jsx';
import {useContext} from 'react';
import {UserContext} from '../state/User.context.jsx';

export const LeftPanel = ({data}) => {
    const {userId} = useContext(UserContext);

    return (
        <LeftPanelWrapper>
            <Header/>
            <ChangeUser/>
            <JournalAddItem/>
            <JournalItems>
                {data === 0 && <p>Записей нет</p>}
                {data.length > 0 && data
                    .filter(el => el.id === +userId)
                    .map(el => <CardButton key={el.title}
                                           title={el.title}
                                           date={el.date}
                                           description={el.description}
                                           tag={el.tag}
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