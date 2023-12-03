import React from 'react';
import {Header} from '../components/Header.jsx';
import {JournalAddItem} from '../components/JournalAddItem.jsx';
import {CardButton} from '../components/CardButton.jsx';
import {JournalItem} from '../components/JournalItem.jsx';
import {JournalItems} from '../components/JournalItems.jsx';

export const LeftPanel = () => {
    const data = [
        {title: 'Подготовка к обновлению курсов', date: new Date(), description: 'Сегодня провёл весь день за...'},
        {title: 'Поход в годы', date: new Date(), description: 'Думал, что очень много време...'},
    ];
    return (
        <div>
            <Header/>
            <JournalAddItem/>
            <JournalItems>
            {data.map(el => <CardButton key={el.title}>
                    <JournalItem title={el.title} date={el.date} description={el.description}/>
                </CardButton>
            )}
            </JournalItems>
        </div>
    );
};