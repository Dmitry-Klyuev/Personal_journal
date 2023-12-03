import styled from 'styled-components';

export const JournalItems = ({children}) => {
    return (
        <GroupWrapper>
            {children}
        </GroupWrapper>
    );
};

const GroupWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 30px;
`;