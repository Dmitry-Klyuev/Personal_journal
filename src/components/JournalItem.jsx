import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
export const JournalItem = ({ title, description, date }) => {
    const formatedDate = date.toLocaleString('ru-RU', { day: 'numeric', month: 'numeric', year: 'numeric' });
    return (
        <>
            <Title>{title}</Title>
            <Wrapper>
                <Date>{formatedDate}</Date>
                <Description>{description}</Description>
            </Wrapper>
        </>
    );
};




const Title = styled.h2`
  color: #FFF;
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;

`;

const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  font-size: 16px;
  font-weight: 400;
`;

const Date = styled.span`
  color: rgba(255, 255, 255, 0.40);
  
`;

const Description = styled.span`
  color: rgba(255, 255, 255, 0.60);
`;