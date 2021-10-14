import styled from 'styled-components';

export const Wrapper = styled.div`
    color: var(--white);
    background: var(--darkGrey);
    border-radius: 20px;
    padding: 5px;
    text-align: center;
    
    h3 {
        margin: 5px 0;
    }
    
    .actor {
        display: block;
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 15px;
    }
`;
