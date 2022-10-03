import styled from 'styled-components';

export const FeedbeckBock = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const FeedbackButton = styled.button`
    padding: 8px 16px;
    border-radius: 10px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    
    :hover,
    :focus {
        background-color: #D0D1D3;
    }

    span {
        margin-left: 16px;
        pointer-events: none;
    }
`;